// Necessary for Emotion to work, which in turn enables twin.macro to work, which in turn enables
// Tailwind to work with React. I love the JS ecosystem :/
const {
  override,
  addBabelPreset
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPreset("@emotion/babel-preset-css-prop")
);