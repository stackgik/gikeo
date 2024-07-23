/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      "brand-50": "#eef2ff",
      "brand-100": "#e0e7ff",
      "brand-200": "#c7d2fe",
      "brand-500": "#6366f1",
      "brand-600": "#4f46e5",
      "brand-700": "#4338ca",
      "brand-800": "#3730a3",
      "brand-900": "#312e81",

      /* Grey */
      "grey-0": "#fff",
      "grey-50": " #f9fafb",
      "grey-100": "#f3f4f6",
      "grey-200": "#e5e7eb",
      "grey-300": "#d1d5db",
      "grey-400": "#9ca3af",
      "grey-500": "#6b7280",
      "grey-600": "#4b5563",
      "grey-700": "#374151",
      "grey-800": "#1f2937",
      "grey-900": "#111827",
      transparent: "transparent",

      /*Dark Grey */
      "dark-grey-0": "#18212f",
      "dark-grey-50": "#111827",
      "dark-grey-100": "#1f2937",
      "dark-grey-200": "#374151",
      "dark-grey-300": "#4b5563",
      "dark-grey-400": "#6b7280",
      "dark-grey-500": "#9ca3af",
      "dark-grey-600": "#d1d5db",
      "dark-grey-700": "#e5e7eb",
      "dark-grey-800": "#f3f4f6",
      "dark-grey-900": "#f9fafb",

      /*Blue */
      "blue-100": "#e0f2fe",
      "blue-700": "#0369a1",
      "green-100": "#dcfce7",
      "green-700": "#15803d",
      "yellow-100": "#fef9c3",
      "yellow-700": "#a16207",
      "silver-100": "#e5e7eb",
      "silver-700": "#374151",
      "indigo-100": "#e0e7ff",
      "indigo-700": "#4338ca",

      /*Dark Blue */
      "dark-blue-100": "#075985",
      "dark-blue-700": "#e0f2fe",
      "dark-green-100": "#166534",
      "dark-green-700": "#dcfce7",
      "dark-yellow-100": "#854d0e",
      "dark-yellow-700": "#fef9c3",
      "dark-silver-100": "#374151",
      "dark-silver-700": "#f3f4f6",
      "dark-indigo-100": "#3730a3",
      "dark-indigo-700": "#e0e7ff",

      /*Red */
      "red-100": "#fee2e2",
      "red-500": "#ff0000",
      "red-700": "#b91c1c",
      "red-800": "#991b1b",

      /*Dark Red */
      "dark-red-100": "#fee2e2",
      "dark-red-700": "#b91c1c",
      "dark-red-800": "#991b1b",

      "backdrop-color": "rgba(255, 255, 255, 0.1)",

      border: "hsl(var(--border))",
      //
    },

    borderRadius: {
      none: "0",
      tiny: "3px",
      sm: "5px",
      md: "7px",
      lg: "9px",
      full: "50%",
    },

    boxShadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
      md: "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
      lg: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",

      /*Dark Mode Box Shadow */
      "dark-sm": "0 1px 2px rgba(0, 0, 0, 0.4)",
      "dark-md": "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3)",
      "dark-lg": "0 2.4rem 3.2rem rgba(0, 0, 0, 0.4)",
    },

    extend: {
      fontFamily: {
        sono: ["Sono", "sans-serif"],
        poppins: ["Poppins", "san-serif"],
        livvic: ["Livvic", "san-serif"],
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.88, -0.35, 0.565, 1.35)",
      },
      width: {
        "custom-min-width": "min(100% - 4rem, 1300px)",
      },
      screens: {
        desktop: { max: "90em" },
        miniDesktop: { max: "75em" },
        PC: { max: "64em" },
        tablet: { max: "43.75em" },
        mobile: { max: "30em" },
      },
    },
  },
  plugins: [],
};
