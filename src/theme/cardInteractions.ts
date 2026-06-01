import type { CSSProperties, MouseEvent } from "react";

/** Shared hover handlers for glass cards — uses CSS variables */
export const glassCardHoverHandlers = {
  onMouseEnter: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-10px)";
    el.style.borderColor = "var(--color-primary)";
    el.style.boxShadow = "var(--shadow-card-hover)";
  },
  onMouseLeave: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.borderColor = "var(--color-border)";
    el.style.boxShadow = "none";
  },
};

export const glassCardHoverHandlersLarge = {
  onMouseEnter: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-12px)";
    el.style.borderColor = "var(--color-primary)";
    el.style.boxShadow = "var(--shadow-card-hover)";
  },
  onMouseLeave: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.borderColor = "var(--color-border)";
    el.style.boxShadow = "none";
  },
};

export const techCardHoverHandlers = {
  onMouseEnter: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-6px)";
    el.style.borderColor = "var(--color-primary)";
    el.style.boxShadow = "var(--shadow-card-hover)";
    el.style.background = "var(--color-tech-card-hover-bg)";
  },
  onMouseLeave: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.borderColor = "var(--color-border)";
    el.style.boxShadow = "none";
    el.style.background = "var(--color-card)";
  },
};

export const contactItemHoverHandlers = {
  onMouseEnter: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-5px)";
    el.style.borderColor = "var(--color-primary)";
    el.style.boxShadow = "var(--shadow-md)";
  },
  onMouseLeave: (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.borderColor = "var(--color-border)";
    el.style.boxShadow = "none";
  },
};

export const glassCardBaseStyle: CSSProperties = {
  background: "var(--color-card)",
  backdropFilter: "blur(12px)",
  border: "1px solid var(--color-border)",
  transition: "all 0.4s ease",
};

export const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 20px",
  borderRadius: "12px",
  border: "1px solid var(--color-input-border)",
  background: "var(--color-input-bg)",
  color: "var(--color-text-heading)",
  fontSize: "14px",
  outline: "none",
};
