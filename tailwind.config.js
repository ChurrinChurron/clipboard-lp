/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan: "hsl(171, 66%, 44%)",
        lBlue: "hsl(233, 100%, 69%)",
        Dcyan: "hsl(171, 66%, 37%)",
        DlBlue: "hsl(233, 80%, 60%)",
        dGrayishBlue: "hsl(210, 10%, 33%)",
        gBlue: "hsl(201, 11%, 66%)"
      },
    },
  },
  plugins: [],
};
