/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Legacy (keep for any leftover references) ── */
        primary: {
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#B7C7D7",
          300: "#99B0C7",
          400: "#7C99B6",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#2C3D4F",
          900: "#1B2631",
          950: "#141C24",
        },
        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
        /* ── Dark Wilderness Luxury tokens ── */
        void: "#0D0F0B",
        deep: "#141810",
        moss: "#1E2419",
        pine: "#2D3D28",
        gold: "#C9A84C",
        "gold-muted": "#8A6E32",
        bark: "#A09070" /* body/muted text (avoids tailwind 'stone' clash) */,
        birch: "#E8E0D0",
        fog: "#F5F2EC",
        rust: "#7A3D2A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      borderRadius: {
        card: "4px",
        input: "2px",
      },
      animation: {
        "fade-up": "fadeUp 500ms ease-out both",
        "slow-zoom": "slowZoom 10s ease-out forwards",
        "slide-right": "slideInRight 400ms ease-out both",
        "pulse-down": "pulseDown 2s ease-in-out infinite",
      },
      spacing: {
        header: "72px",
      },
    },
  },
  plugins: [],
};
