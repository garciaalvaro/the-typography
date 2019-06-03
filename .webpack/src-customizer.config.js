const pkg = require("../package.json");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BannerPlugin = require("webpack").BannerPlugin;
const nib = require("nib");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const _rootdir = __dirname + "/..";
const { name, version, plugin_name, plugin_uri } = pkg;

export default {
	entry: [`./src/js/index-customizer.ts`, `./src/css/index-customizer.styl`],

	output: {
		path: _rootdir + "/build",
		filename: `${name}-customizer.js`
	},
	resolve: {
		alias: {
			utils: _rootdir + "/src/js/utils"
		}
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				resolve: {
					extensions: [".tsx", ".ts", ".js", ".jsx"]
				}
			},
			{
				test: /\.(css|styl)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "stylus-loader",
						options: {
							use: [nib()],
							import: ["~nib/index.styl"]
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${name}-customizer.css`
		}),
		new BannerPlugin({
			banner: () => {
				const banner = [
					`/*! ${plugin_name} | ${version} | ${plugin_uri} */`,
					`/*! TinyColor | https://github.com/bgrins/TinyColor | 2016-07-07, Brian Grinstead | MIT License */`,
					`/*! immer | https://github.com/mweststrate/immer | Michel Weststrate | MIT License */`,
					`/*! uuid | https://github.com/kelektiv/node-uuid | MIT License */`,
					`/*! webfontloader | https://github.com/typekit/webfontloader | Apache-2.0 License */`,
					`/*! react-tiny-popover | https://github.com/alexkatz/react-tiny-popover | Alex Katz | MIT License */`,
					`/*! React-Select | https://github.com/JedWatson/react-select | Jed Watson | MIT License */`,
					`/*! React Color | https://github.com/casesandberg/react-color | Case Sandberg | MIT License */`,
					`/*! Material-UI | https://github.com/mui-org/material-ui | Material-UI Team | MIT License */`
				];
				return banner.join("");
			},
			raw: true,
			include: new RegExp(/.*?\.js/)
		}),
		new BannerPlugin({
			banner: `${plugin_name} | ${version} | ${plugin_uri}`,
			include: new RegExp(/.*?\.css/)
		})
	],
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	}
};
