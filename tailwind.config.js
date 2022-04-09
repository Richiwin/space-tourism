module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    backgroundImage: {
      "home-desktop": "url('./assets/images/home/background-home-desktop.jpg')",
      "home-tablet": "url('./assets/images/home/background-home-tablet.jpg')",
      "home-mobile": "url('./assets/images/home/background-home-mobile.jpg')",
      "dest-desktop":
        "url('./assets/images/destination/background-destination-desktop.jpg')",
      "dest-tablet":
        "url('./assets/images/destination/background-destination-tablet.jpg')",
      "dest-mobile":
        "url('./assets/images/destination/background-destination-mobile.jpg')",
      "crew-desktop": "url('./assets/images/crew/background-crew-desktop.jpg')",
      "crew-tablet": "url('./assets/images/crew/background-crew-tablet.jpg')",
      "crew-mobile": "url('./assets/images/crew/background-crew-mobile.jpg')",
      "tech-desktop":
        "url('./assets/images/technology/background-technology-desktop.jpg')",
      "tech-tablet":
        "url('./assets/images/technology/background-technology-tablet.jpg')",
      "tech-mobile":
        "url('./assets/images/technology/background-technology-mobile.jpg')",
      "p-launch-vehicle":
        "url('./assets/images/technology/image-launch-vehicle-portrait.jpg')",

      "l-launch-vehicle":
        "url('./assets/images/technology/image-launch-vehicle-landscape.jpg')",
      "p-spaceport":
        "url('./assets/images/technology/image-spaceport-portrait.jpg')",
      "l-spaceport":
        "url('./assets/images/technology/image-spaceport-landscape.jpg')",
      "p-capsule":
        "url('./assets/images/technology/image-space-capsule-portrait.jpg')",
      "l-capsule":
        "url('./assets/images/technology/image-space-capsule-landscape.jpg')",
    },
    extend: {
      screens: {
        md: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        sm: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        xs: { max: "479px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        primary: {
          100: "#D0D6F9",
        },
        secondary: {
          100: "#0B0D17",
        },
      },
      fontFamily: {
        Bellefair: ["Bellefair", "sans-serif"],
        Barlow: ["Barlow", "serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
