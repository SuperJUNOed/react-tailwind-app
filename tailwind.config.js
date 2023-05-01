const { default: SizeContext } = require("antd/es/config-provider/SizeContext");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "agent-color": "#582fa6",
        "client-color": "#58c8d8",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      backgroundColor: {
        "agent": "#582fa6",
        "client": "#58c8d8",
      },
    },
  },
  plugins: [],
};
