const path = require("path");

module.exports = {
	mode: "development", // "development" | "production"
	entry: path.resolve(__dirname, "index.js"),
	optimization: {
		runtimeChunk: true
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].chunkhash.js",
		chunkFilename: "[name].chunkhash.js"
	}
};
