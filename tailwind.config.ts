import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,mdx,md,html}",
  ],
  prefix: "",
  corePlugins: {},
  theme: {
    container: {
      padding: "2rem",
      screens: {
        "2xl": "1040px",
      },
    },
    extend: {
      transitionProperty: {
        toc: "opacity,transform,max-height",
      },
      spacing: {
        navHeight: "50px",
      },
      colors: {
        nativeBorder: "var(--native-border)",
        nativeBorderHover: "var(--native-border-hover)",
        nativeBorderActive: "var(--native-border-active)",
        nativeBorderDisabled: "var(--native-border-disabled)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".content-container": {
          marginLeft: "var(--article-gutter-size)",
          marginRight: "var(--article-gutter-size)",
          marginBottom: theme("spacing.4"),
          width: "var(--article-container-size)",
        },
      });
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({});
    }),
  ],
} satisfies Config;

export default config;
