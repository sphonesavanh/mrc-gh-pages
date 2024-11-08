import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{jsx}",
    "./src/components/**/*.{jsx}",
    "./src/layouts/**/*.{jsx}",
    "./src/mqtt/**/*.{jsx}",
    "./app/**/*.{jsx}",
    "./src/**/*.{jsx}",
  ],

  prefix: "tw-",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0066FF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#E8F1FF",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      backgroundColor: {
        "dashboard-bg": "#F5F8FF",
      },
      fontFamily: {
        sans: ['"YourCustomFont"', "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};
