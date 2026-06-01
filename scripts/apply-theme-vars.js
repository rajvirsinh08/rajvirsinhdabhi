/**
 * One-time migration: replace hardcoded colors in Homepage.js with CSS variables.
 */
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/Pages/Homepage.js");
let content = fs.readFileSync(filePath, "utf8");

const replacements = [
  ['"linear-gradient(90deg, #598565, #8FBF9F)"', '"var(--gradient-primary)"'],
  ["'linear-gradient(90deg, #598565, #8FBF9F)'", "'var(--gradient-primary)'"],
  ['"linear-gradient(135deg, #598565, #3D6B49)"', '"var(--gradient-hero)"'],
  ['"linear-gradient(135deg, #598565, #8FBF9F)"', '"var(--gradient-success)"'],
  ['"#598565"', '"var(--color-primary)"'],
  ['"#3D6B49"', '"var(--color-secondary)"'],
  ['"#8FBF9F"', '"var(--color-accent)"'],
  ['"#0d1117"', '"var(--color-background)"'],
  ['"#0f1720"', '"var(--color-navbar)"'],
  ['"#1a1f24"', '"var(--color-dropdown-bg)"'],
  ['"#ffffff"', '"var(--color-text-heading)"'],
  ['"#FFFFFF"', '"var(--color-text-heading)"'],
  ['"#fff"', '"var(--color-text-heading)"'],
  ['"#A6B0A8"', '"var(--color-text-secondary)"'],
  ['"#9BA3A7"', '"var(--color-text-muted)"'],
  ['"#8FA39B"', '"var(--color-text-meta)"'],
  ['"#d1d5db"', '"var(--color-text-secondary)"'],
  ['"rgba(255,255,255,0.03)"', '"var(--color-card)"'],
  ['"rgba(255, 255, 255, 0.03)"', '"var(--color-card)"'],
  ['"rgba(255,255,255,0.04)"', '"var(--color-input-bg)"'],
  ['"rgba(255, 255, 255, 0.04)"', '"var(--color-input-bg)"'],
  ['"rgba(255,255,255,0.08)"', '"var(--color-border)"'],
  ['"rgba(255, 255, 255, 0.08)"', '"var(--color-border)"'],
  ['"rgba(255,255,255,0.06)"', '"var(--color-border-subtle)"'],
  ['"rgba(255, 255, 255, 0.06)"', '"var(--color-border-subtle)"'],
  ['"rgba(255,255,255,0.1)"', '"var(--color-input-border)"'],
  ['"rgba(255, 255, 255, 0.1)"', '"var(--color-input-border)"'],
  ['"rgba(89,133,101,0.1)"', '"var(--color-tag-bg)"'],
  ['"rgba(89, 133, 101, 0.1)"', '"var(--color-tag-bg)"'],
  ['"rgba(89,133,101,0.4)"', '"var(--color-tag-border)"'],
  ['"rgba(89, 133, 101, 0.4)"', '"var(--color-tag-border)"'],
  ['"rgba(89,133,101,0.2)"', '"var(--color-dropdown-option-hover)"'],
  ['"rgba(89,133,101,0.25)"', '"var(--shadow-brand)"'],
  ['"0 25px 50px rgba(89,133,101,0.25)"', '"var(--shadow-card-hover)"'],
  ['"0 20px 50px rgba(89,133,101,0.25)"', '"var(--shadow-card-hover)"'],
  ['"0 15px 35px rgba(89,133,101,0.25)"', '"var(--shadow-card-hover)"'],
  ['"0 12px 25px rgba(89,133,101,0.4)"', '"var(--shadow-brand-hover)"'],
  ['"0 12px 28px rgba(89,133,101,0.4)"', '"var(--shadow-brand-hover)"'],
  ['"0 10px 25px rgba(89,133,101,0.35)"', '"var(--shadow-brand)"'],
  ['"0 6px 18px rgba(89,133,101,0.25)"', '"var(--shadow-brand)"'],
  ['"0 5px 15px rgba(89,133,101,0.25)"', '"var(--shadow-brand)"'],
  ['"0 10px 40px rgba(0,0,0,0.5)"', '"var(--shadow-navbar)"'],
  ['"0 25px 60px rgba(0,0,0,0.4)"', '"var(--shadow-contact)"'],
  ['"0 30px 80px rgba(0,0,0,0.6)"', '"var(--shadow-lg)"'],
  ['"0 20px 40px rgba(0,0,0,0.5)"', '"var(--shadow-md)"'],
  ['"0 15px 40px rgba(0,0,0,0.4)"', '"var(--shadow-md)"'],
  ['"rgba(0,0,0,0.75)"', '"var(--color-overlay)"'],
  ['"rgba(0,0,0,0.8)"', '"var(--color-overlay-heavy)"'],
  [
    '"linear-gradient(135deg, rgba(89,133,101,0.08), rgba(89,133,101,0.02))"',
    '"var(--color-tech-card-hover-bg)"',
  ],
  [
    'item.title === "WhatsApp"\n                    ? "linear-gradient(135deg, #25D366, #128C7E)"',
    'item.title === "WhatsApp"\n                    ? "var(--gradient-whatsapp)"',
  ],
];

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

fs.writeFileSync(filePath, content);
console.log("Homepage.js theme migration complete.");
