const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/Pages/BlogDetails.jsx");
let content = fs.readFileSync(filePath, "utf8");

const replacements = [
  ['"linear-gradient(90deg, #598565, #8FBF9F)"', '"var(--gradient-primary)"'],
  ['"linear-gradient(135deg, #598565, #3D6B49)"', '"var(--gradient-hero)"'],
  ['"#598565"', '"var(--color-primary)"'],
  ['"#0d1117"', '"var(--color-background)"'],
  ['"#0f1720"', '"var(--color-navbar)"'],
  ['"#ffffff"', '"var(--color-text-heading)"'],
  ['"#fff"', '"var(--color-text-heading)"'],
  ['"#A6B0A8"', '"var(--color-text-secondary)"'],
  ['"#d1d5db"', '"var(--color-text-secondary)"'],
  ['"rgba(255,255,255,0.08)"', '"var(--color-border)"'],
  ['"rgba(255,255,255,0.06)"', '"var(--color-border-subtle)"'],
  ['"0 10px 40px rgba(0,0,0,0.5)"', '"var(--shadow-navbar)"'],
];

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

if (!content.includes("ThemeToggle")) {
  content = content.replace(
    'import { Helmet } from "react-helmet-async";',
    'import { Helmet } from "react-helmet-async";\nimport ThemeToggle from "../components/ThemeToggle/ThemeToggle";',
  );
  content = content.replace(
    `        <a
          href={Rajvirsinh_Dabhi_Resume}
          download
          style={{
            padding: "8px 18px",
            borderRadius: "30px",
            background: "var(--color-primary)",
            color: "var(--color-text-heading)",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Resume
        </a>`,
    `        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ThemeToggle />
          <a
            href={Rajvirsinh_Dabhi_Resume}
            download
            className="theme-btn-nav"
            style={{
              padding: "8px 18px",
              borderRadius: "30px",
              fontSize: "13px",
            }}
          >
            Resume
          </a>
        </div>`,
  );
}

fs.writeFileSync(filePath, content);
console.log("BlogDetails.jsx theme migration complete.");
