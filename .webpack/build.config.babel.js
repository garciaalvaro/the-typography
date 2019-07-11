import { name, version, description, homepage } from "../package.json";
import { BannerPlugin, DefinePlugin } from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import nib from "nib";
import path from "path";

export default {
	entry: {
		customizer: path.join(__dirname, "../src/index-customizer.ts"),
		editor: path.join(__dirname, "../src/index-editor.ts"),
		previewer: path.join(__dirname, "../src/index-previewer.ts")
	},
	output: {
		path: path.join(__dirname, "../build"),
		filename: `${name}-[name].js`
	},
	resolve: {
		alias: {
			Components: path.join(__dirname, "../src/Components"),
			utils: path.join(__dirname, "../src/utils"),
			store: path.join(__dirname, "../src/store"),
			hooks: path.join(__dirname, "../src/hooks")
		}
	},
	externals: {
		lodash: "lodash",
		react: "React",
		"react-dom": "ReactDOM",
		"@wordpress/api-fetch": "wp.apiFetch",
		"@wordpress/block-editor": "wp.blockEditor",
		"@wordpress/block-library": "wp.blockLibrary",
		"@wordpress/components": "wp.components",
		"@wordpress/compose": "wp.compose",
		"@wordpress/data": "wp.data",
		"@wordpress/dom-ready": "wp.domReady",
		"@wordpress/edit-post": "wp.editPost",
		"@wordpress/element": "wp.element",
		"@wordpress/hooks": "wp.hooks",
		"@wordpress/html-entities": "wp.htmlEntities",
		"@wordpress/i18n": "wp.i18n",
		"@wordpress/plugins": "wp.plugins",
		"@wordpress/url": "wp.url"
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
							import: [
								"~nib/index.styl",
								path.join(__dirname, "../src/utils/data/stylus_variables.styl")
							]
						}
					}
				]
			}
		]
	},
	plugins: [
		new DefinePlugin({
			l: (...args) => console.log(...args)
		}),
		new MiniCssExtractPlugin({
			filename: `${name}-[name].css`
		}),
		new BannerPlugin({
			include: new RegExp(/\.css$/),
			banner: `${description} | ${version} | ${homepage}`
		}),
		new BannerPlugin({
			include: new RegExp(/-previewer\.js$/),
			raw: true,
			banner: () => {
				const banner = [`/*! ${description} | ${version} | ${homepage} */`];
				return banner.join("");
			}
		}),
		new BannerPlugin({
			include: new RegExp(/-(editor|customizer)\.js$/),
			raw: true,
			banner: () => {
				const banner = [
					`/*! ${description} | ${version} | ${homepage} */`,
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
			}
		})
	],
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	}
};
