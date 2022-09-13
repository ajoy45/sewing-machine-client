/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ce87",
          secondary: "#ffffff",
          background: "#141c52",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
