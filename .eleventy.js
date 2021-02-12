const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("inspect", require("util").inspect);
  eleventyConfig.addFilter("arrSlice", (arr=[], len=10) => arr.slice(0, len));
  eleventyConfig.addFilter("dateParse", str => new Date(str));

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
