export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lychee: { 
          50: "#FFF1F2",
          100: "#FFE4E7",
          200: "#FECDD3",
          500: "#E63946", 
          600: "#C62F3B",
          700: "#B91C1C"
        },
        leaf: { 
          50: "#F0FDF4",
          100: "#E8F5E9",
          200: "#DCFCE7",
          500: "#4CAF50", 
          600: "#3F9D44",
          700: "#15803D"
        },
        gold: { 
          400: "#FFB703",
          500: "#F59E0B"
        },
        cream: { 50: "#FFF8F0" },
        ink: { 
          50: "#F8FAFC",
          100: "#F1F5F9",
          700: "#545463",
          900: "#2E2E38"
        }
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.08)",
        pop: "0 10px 30px rgba(230,57,70,0.2)",
      },
      fontFamily: {
        display: ["Baloo 2", "Nunito", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ["Caveat", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        pop: "cubic-bezier(.17,.67,.27,1.2)",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      fontSize: {
        'hero': 'clamp(2.2rem, 4vw, 3.5rem)',
        'h1': 'clamp(1.8rem, 3vw, 2.6rem)',
        'h2': 'clamp(1.5rem, 2.2vw, 2rem)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}