export type ThemeMode = "light" | "dark";

export interface ThemePalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  card: string;
  cardHover: string;
  header: string;
  navbar: string;
  footer: string;
  border: string;
  borderSubtle: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  textMeta: string;
  textHeading: string;
  textOnPrimary: string;
  textInverse: string;
  success: string;
  warning: string;
  error: string;
  shadow: string;
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  shadowBrand: string;
  shadowBrandHover: string;
  shadowNavbar: string;
  shadowCardHover: string;
  shadowContact: string;
  gradientPrimary: string;
  gradientHero: string;
  gradientAccent: string;
  gradientSuccess: string;
  gradientWarning: string;
  gradientError: string;
  gradientWhatsApp: string;
  overlay: string;
  overlayHeavy: string;
  inputBackground: string;
  inputBorder: string;
  dropdownBackground: string;
  tagBackground: string;
  tagBorder: string;
  modalBackground: string;
  modalBorder: string;
  heroDiagonalOpacity: string;
  globalDiagonalOpacity: string;
  dropdownOptionHover: string;
  techCardHoverBackground: string;
  legacyBase: string;
  legacyBase2: string;
  legacyBrand2: string;
}

/** Brand forest green — shared across light and dark modes */
const brand = {
  primary: "#598565",
  secondary: "#3D6B49",
  accent: "#8FBF9F",
  success: "#598565",
  warning: "#f59e0b",
  error: "#ef4444",
  gradientPrimary: "linear-gradient(90deg, #598565, #8FBF9F)",
  gradientHero: "linear-gradient(135deg, #598565, #3D6B49)",
  gradientWhatsApp: "linear-gradient(135deg, #25D366, #128C7E)",
  gradientSuccess: "linear-gradient(135deg, #598565, #8FBF9F)",
  gradientWarning: "linear-gradient(135deg, #f59e0b, #fbbf24)",
  gradientError: "linear-gradient(135deg, #ef4444, #f87171)",
};

export const darkTheme: ThemePalette = {
  ...brand,
  background: "#0d1117",
  surface: "#1a1f24",
  card: "rgba(255, 255, 255, 0.03)",
  cardHover: "rgba(89, 133, 101, 0.08)",
  header: "#0f1720",
  navbar: "#0f1720",
  footer: "#0d1117",
  border: "rgba(255, 255, 255, 0.08)",
  borderSubtle: "rgba(255, 255, 255, 0.06)",
  text: "#F0F2ED",
  textSecondary: "#A6B0A8",
  textMuted: "#9BA3A7",
  textMeta: "#8FA39B",
  textHeading: "#ffffff",
  textOnPrimary: "#ffffff",
  textInverse: "#1A1A1A",
  shadow: "rgba(0, 0, 0, 0.5)",
  shadowSm: "0 5px 15px rgba(89, 133, 101, 0.2)",
  shadowMd: "0 10px 40px rgba(0, 0, 0, 0.5)",
  shadowLg: "0 30px 80px rgba(0, 0, 0, 0.6)",
  shadowBrand: "0 5px 15px rgba(89, 133, 101, 0.25)",
  shadowBrandHover: "0 12px 25px rgba(89, 133, 101, 0.4)",
  shadowNavbar: "0 10px 40px rgba(0, 0, 0, 0.5)",
  shadowCardHover: "0 20px 50px rgba(89, 133, 101, 0.25)",
  shadowContact: "0 25px 60px rgba(0, 0, 0, 0.4)",
  gradientAccent: brand.gradientPrimary,
  overlay: "rgba(0, 0, 0, 0.75)",
  overlayHeavy: "rgba(0, 0, 0, 0.8)",
  inputBackground: "rgba(255, 255, 255, 0.04)",
  inputBorder: "rgba(255, 255, 255, 0.1)",
  dropdownBackground: "#1a1f24",
  tagBackground: "rgba(89, 133, 101, 0.1)",
  tagBorder: "rgba(89, 133, 101, 0.4)",
  modalBackground: "#0f1720",
  modalBorder: "rgba(255, 255, 255, 0.08)",
  heroDiagonalOpacity: "0.1",
  globalDiagonalOpacity: "0.08",
  dropdownOptionHover: "rgba(89, 133, 101, 0.2)",
  techCardHoverBackground:
    "linear-gradient(135deg, rgba(89, 133, 101, 0.08), rgba(89, 133, 101, 0.02))",
  legacyBase: "#262626",
  legacyBase2: "#1A1A1A",
  legacyBrand2: "#3D6B49",
};

export const lightTheme: ThemePalette = {
  ...brand,
  background: "#F4F7F5",
  surface: "#FFFFFF",
  card: "rgba(255, 255, 255, 0.92)",
  cardHover: "rgba(89, 133, 101, 0.06)",
  header: "#FFFFFF",
  navbar: "#FFFFFF",
  footer: "#EEF2EF",
  border: "rgba(38, 38, 38, 0.1)",
  borderSubtle: "rgba(38, 38, 38, 0.08)",
  text: "#1A1F1C",
  textSecondary: "#4A5650",
  textMuted: "#6B7872",
  textMeta: "#5C6B64",
  textHeading: "#0F1412",
  textOnPrimary: "#ffffff",
  textInverse: "#F0F2ED",
  shadow: "rgba(38, 38, 38, 0.12)",
  shadowSm: "0 5px 15px rgba(89, 133, 101, 0.15)",
  shadowMd: "0 10px 40px rgba(38, 38, 38, 0.12)",
  shadowLg: "0 30px 80px rgba(38, 38, 38, 0.18)",
  shadowBrand: "0 5px 15px rgba(89, 133, 101, 0.2)",
  shadowBrandHover: "0 12px 25px rgba(89, 133, 101, 0.35)",
  shadowNavbar: "0 10px 40px rgba(38, 38, 38, 0.1)",
  shadowCardHover: "0 20px 50px rgba(89, 133, 101, 0.2)",
  shadowContact: "0 25px 60px rgba(38, 38, 38, 0.12)",
  gradientAccent: brand.gradientPrimary,
  overlay: "rgba(15, 20, 18, 0.45)",
  overlayHeavy: "rgba(15, 20, 18, 0.65)",
  inputBackground: "rgba(255, 255, 255, 0.95)",
  inputBorder: "rgba(38, 38, 38, 0.12)",
  dropdownBackground: "#FFFFFF",
  tagBackground: "rgba(89, 133, 101, 0.12)",
  tagBorder: "rgba(89, 133, 101, 0.35)",
  modalBackground: "#FFFFFF",
  modalBorder: "rgba(38, 38, 38, 0.1)",
  heroDiagonalOpacity: "0.14",
  globalDiagonalOpacity: "0.1",
  dropdownOptionHover: "rgba(89, 133, 101, 0.12)",
  techCardHoverBackground:
    "linear-gradient(135deg, rgba(89, 133, 101, 0.1), rgba(89, 133, 101, 0.04))",
  legacyBase: "#E8EEEA",
  legacyBase2: "#F4F7F5",
  legacyBrand2: "#3D6B49",
};

export const themes: Record<ThemeMode, ThemePalette> = {
  light: lightTheme,
  dark: darkTheme,
};

export const THEME_STORAGE_KEY = "rajvir-portfolio-theme";

export const CSS_VAR_MAP: Record<keyof ThemePalette, string> = {
  primary: "--color-primary",
  secondary: "--color-secondary",
  accent: "--color-accent",
  background: "--color-background",
  surface: "--color-surface",
  card: "--color-card",
  cardHover: "--color-card-hover",
  header: "--color-header",
  navbar: "--color-navbar",
  footer: "--color-footer",
  border: "--color-border",
  borderSubtle: "--color-border-subtle",
  text: "--color-text",
  textSecondary: "--color-text-secondary",
  textMuted: "--color-text-muted",
  textMeta: "--color-text-meta",
  textHeading: "--color-text-heading",
  textOnPrimary: "--color-text-on-primary",
  textInverse: "--color-text-inverse",
  success: "--color-success",
  warning: "--color-warning",
  error: "--color-error",
  shadow: "--color-shadow",
  shadowSm: "--shadow-sm",
  shadowMd: "--shadow-md",
  shadowLg: "--shadow-lg",
  shadowBrand: "--shadow-brand",
  shadowBrandHover: "--shadow-brand-hover",
  shadowNavbar: "--shadow-navbar",
  shadowCardHover: "--shadow-card-hover",
  shadowContact: "--shadow-contact",
  gradientPrimary: "--gradient-primary",
  gradientHero: "--gradient-hero",
  gradientAccent: "--gradient-accent",
  gradientSuccess: "--gradient-success",
  gradientWarning: "--gradient-warning",
  gradientError: "--gradient-error",
  gradientWhatsApp: "--gradient-whatsapp",
  overlay: "--color-overlay",
  overlayHeavy: "--color-overlay-heavy",
  inputBackground: "--color-input-bg",
  inputBorder: "--color-input-border",
  dropdownBackground: "--color-dropdown-bg",
  tagBackground: "--color-tag-bg",
  tagBorder: "--color-tag-border",
  modalBackground: "--color-modal-bg",
  modalBorder: "--color-modal-border",
  heroDiagonalOpacity: "--hero-diagonal-opacity",
  globalDiagonalOpacity: "--global-diagonal-opacity",
  dropdownOptionHover: "--color-dropdown-option-hover",
  techCardHoverBackground: "--color-tech-card-hover-bg",
  legacyBase: "--color-base",
  legacyBase2: "--color-base2",
  legacyBrand2: "--color-brand2",
};

export function applyThemeVariables(palette: ThemePalette, mode: ThemeMode): void {
  const root = document.documentElement;
  root.setAttribute("data-theme", mode);

  (Object.keys(CSS_VAR_MAP) as Array<keyof ThemePalette>).forEach((key) => {
    root.style.setProperty(CSS_VAR_MAP[key], palette[key]);
  });

  /* Legacy aliases used by style.css */
  root.style.setProperty("--color-body", palette.textSecondary);
  root.style.setProperty("--color-heading", palette.textHeading);
  root.style.setProperty("--color-brand", palette.primary);
}

export function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") {
    return null;
  }
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return null;
}
