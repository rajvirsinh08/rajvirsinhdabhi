import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

interface ThemeToggleProps {
  className?: string;
  variant?: "navbar" | "floating";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  variant = "navbar",
}) => {
  const { toggleTheme, isDark } = useTheme();

  const tooltip = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";

  const label = isDark ? "Light Mode" : "Dark Mode";

  const isMobile = window.innerWidth <= 768;

  const button = (
    <button
      type="button"
      className={`theme-toggle-btn ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={tooltip}
      title={tooltip}
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "1px solid var(--color-border)",
        background: "var(--color-card)",
        color: "var(--color-text-heading)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "var(--shadow-md)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "var(--shadow-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "var(--shadow-md)";
      }}
    >
      {isDark ? <FiSun size={22} /> : <FiMoon size={22} />}

      <span className="visually-hidden">{label}</span>
    </button>
  );

  if (variant === "floating") {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "70px",
          left: "40px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Desktop Only Label */}
        {!isMobile && (
          <div
            style={{
              background: "var(--color-card)",
              color: "var(--color-text-heading)",
              border: "1px solid var(--color-border)",
              padding: "8px 12px",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              boxShadow: "var(--shadow-md)",
              position: "relative",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {isDark ? (
                <>
                  <FiSun size={14} />
                  Light Theme
                </>
              ) : (
                <>
                  <FiMoon size={14} />
                  Dark Theme
                </>
              )}
            </span>

            {/* Arrow */}
            <div
              style={{
                position: "absolute",
                bottom: "-6px",
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                width: "12px",
                height: "12px",
                background: "var(--color-card)",
                borderRight: "1px solid var(--color-border)",
                borderBottom: "1px solid var(--color-border)",
              }}
            />
          </div>
        )}

        {button}
      </div>
    );
  }

  return button;
};

export default ThemeToggle;