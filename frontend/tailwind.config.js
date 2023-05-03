const { default: SizeContext } = require("antd/es/config-provider/SizeContext");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "negative-color": "#FB36F4",
        "positive-color": "#1FC5A8",
        "agent-from-color": "#FF3E9D",
        "agent-to-color": "#0E1F404f",
        "client-from-color": "#5761B2",
        "client-to-color": "#1FC5A8",
        "my-from-color": "#FDFCFB",
        "my-to-color": "#E2D1C3",
      },
      fontSize: {
        xxs: "0.5rem",
        ts: "0.625rem",
      },
      backgroundColor: {
        "agent": "#582fa6",
        "client": "#58c8d8",
      },
    },
  },
  plugins: [],
};
