/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        yellow: "#faff00",
        darkviolet: "#ad00ff",
        dimgray: "rgba(105, 104, 104, 0.5)",
      },
      spacing: {},
      fontFamily: {
        lemon: "Lemon",
        k2d: "K2D",
      },
      borderRadius: {
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "26xl": "45px",
      "17xl": "36px",
      "8xl": "27px",
      "56xl": "75px",
      "41xl": "60px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "11xl": "30px",
      "4xl": "23px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
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
