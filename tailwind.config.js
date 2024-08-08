/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray1: {
          "100": "#1d1e1e",
          "200": "#101828",
          "300": "#161616",
        },
        darkslategray: "#3a526c",
        "primary-600": "#7e56d9",
        white: "#fff",
        "gray-500": "#667085",
        "gray-300": "#d0d5dd",
        lightsteelblue: "#94adcb",
        darkslateblue: "#0a2c59",
        lightslategray: "#7992b0",
        lightgray: "#c8d5de",
      },
      spacing: {},
      fontFamily: {
        "text-md-medium": "Inter",
        poppins: "Poppins",
        "pt-sans": "'PT Sans'",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      "7xl": "26px",
      "4xs-6": "8.6px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "11xl-9": "30.9px",
      "6xl": "25px",
      "280xl-2": "299.2px",
      "56xl": "75px",
      "101xl": "120px",
      xs: "12px",
      "97xl-1": "116.1px",
      "16xl": "35px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
