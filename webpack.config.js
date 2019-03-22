const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');
const OptimizeCCSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');




module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: ''
	},
	module: {
		rules: [

			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './images',
							useRelativePath: true
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 10
							}
						}
					}
				]
			},







			{
				test: /\.(mp4|webm)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './images',
							useRelativePath: true
						}
					}
				]
			},











			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]',
				},
			},



			{
				test: /\.css$/,
				use: [
					// {
					// 	loader: MiniCssExtractPlugin.loader
					// 	// options: {
					// 	//	 // you can specify a publicPath here
					// 	//	 // by default it use publicPath in webpackOptions.output
					// 	//	 publicPath: '../'
					// 	// }
					// },
					"css-loader"
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Start App',
			template: 'src/index.html'
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin(['./dist']),
		new Webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new OptimizeCCSAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: ['default', {
					discardComments: {
						removeAll: true
					}
				}]
			},
			canPrint: true
		}),

		new CopyWebpackPlugin([{
				from: './src/fonts',
				to: './fonts'
			},
			{
				from: './src/favicon',
				to: './favicon'
			},
			{
				from: './src/images',
				to: './images'
			},
			{
				from: './src/uploads',
				to: './uploads'
			}
	    ])
	]
}