/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--colour-primary)",
      danger: "var(--colour-danger)",
      success: "var(--colour-success)",
      warning: "var(--colour-warning)",
      white: "var(--colour-white)",
      infoDark: "var(--colour-info-dark)",
      dark: "var(--colour-dark)",
      light: "var(--colour-light)",
      darkVariant: "var(--colour-dark-variant)",
      background: "var(--colour-background)",
    },
    borderRadius: {
        card: 'var(--card-border-radius)',
        small: 'var(--border-radius-1)',
        medium: 'var(--border-radius-2)',
      },
      padding: {
        card: 'var(--card-padding)',
        small: 'var(--padding-1)',
      },
      boxShadow: {
        card: 'var(--box-shadow)',
      },
    extend: {},
  },
  plugins: [],
};
