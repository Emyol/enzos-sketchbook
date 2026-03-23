import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FDFAF6",
        graphite: "#333333",
        "accent-cherry": "#E63946",
        "accent-sunshine": "#FFD166",
        "accent-sky": "#118AB2",
      },
      fontFamily: {
        heading: ["var(--font-patrick-hand)", "cursive"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
