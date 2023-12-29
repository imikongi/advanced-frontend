import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildOptions} from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	}

	const tsLoader: webpack.RuleSetRule = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}

	const sassLoader: webpack.RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" :MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: /\.module\.(css|scss)$/,
						localIdentName: isDev ? "[path][name]__[local].[hash:base64:5]" : "[hash:base64:5]",
					},


				}
			},
			"sass-loader",
		]
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i, 
		use: [
			{
				loader: "file-loader",
			},
		],
	}

	return [
		fileLoader,
		tsLoader,
		sassLoader,
		svgLoader
	]
}