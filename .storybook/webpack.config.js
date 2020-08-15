// Necessary for Emotion to work, which in turn enables twin.macro to work, which in turn enables
// Tailwind to work with React. I love the JS ecosystem :/
module.exports = ({ config }) => {
  return require("../config-overrides")(config);
};