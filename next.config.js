const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"]
  // assetPrefix: process.env.NODE_ENV === "production" ? "/lexend" : ""
});
