const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const loader = require("sass-loader");

module.exports = {
	mode: "production",
	entry: { bundle: path.resolve(__dirname, "src/index.js") },
	output: {
		filename: "[name][contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "[name][ext]",
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack Overview",
			filename: "index.html",
			template: "src/template.html",
		}),
	],
};
