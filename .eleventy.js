module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "../_data",
    },
    templateFormats: ["njk"],
    passthroughFileCopy: true
  }
};