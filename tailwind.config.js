/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        darkTop: "#0e0e0e",
        darkBottom: "#131313",
      },
      fontFamily: {
        DMSans_SemiBold: ["DMSans-SemiBold"],
        DMSans_Regular: ["DMSans-Regular"],
        DMSans_Light: ["DMSans-Light"],
        DMSans_Medium: ["DMSans-Medium"],
        Inter_18pt_Bold: ["Inter_18pt-Bold"],
        Inter_18pt_Regular: ["Inter_18pt-Regular"],
      },
    },
  },
  plugins: [],
};
