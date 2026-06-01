import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  applyThemeVariables,
  darkTheme,
  getStoredTheme,
  getSystemTheme,
  lightTheme,
  THEME_STORAGE_KEY,
  themes,
  type ThemeMode,
  type ThemePalette,
} from "../theme/theme";

interface ThemeContextValue {
  mode: ThemeMode;
  theme: ThemePalette;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function resolveInitialMode(): ThemeMode {
  return getStoredTheme() ?? getSystemTheme();
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(resolveInitialMode);
  const theme = themes[mode];

  const applyMode = useCallback((nextMode: ThemeMode) => {
    const palette = themes[nextMode];
    applyThemeVariables(palette, nextMode);
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 450);
  }, []);

  useEffect(() => {
    applyMode(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode, applyMode]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!getStoredTheme()) {
        setMode(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setTheme = useCallback((nextMode: ThemeMode) => {
    setMode(nextMode);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      theme,
      isDark: mode === "dark",
      toggleTheme,
      setTheme,
    }),
    [mode, theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}

/** Apply default theme before React hydrates (optional inline script alternative) */
export function bootstrapTheme(): void {
  const mode = resolveInitialMode();
  applyThemeVariables(themes[mode], mode);
}

export { darkTheme, lightTheme };
