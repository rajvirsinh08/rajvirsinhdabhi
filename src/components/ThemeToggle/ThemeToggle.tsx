import React from "react";
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
      {isDark ? (
        <i
          className="las la-sun"
          style={{ fontSize: "22px" }}
        />
      ) : (
        <i
          className="las la-moon"
          style={{ fontSize: "22px" }}
        />
      )}

      <span className="visually-hidden">{label}</span>
    </button>
  );

  if (variant === "floating") {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "70px",
          left: "35px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {!isMobile && (
          <div
            style={{
              background: "var(--color-card)",
              color: "var(--color-text-heading)",
              border: "1px solid var(--color-border)",
              padding: "8px 14px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              boxShadow: "var(--shadow-md)",
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
                  <i
                    className="las la-sun"
                    style={{ fontSize: "14px" }}
                  />
                  Light Theme
                </>
              ) : (
                <>
                  <i
                    className="las la-moon"
                    style={{ fontSize: "14px" }}
                  />
                  Dark Theme
                </>
              )}
            </span>
          </div>
        )}

        {button}
      </div>
    );
  }

  return button;
};

export default ThemeToggle;