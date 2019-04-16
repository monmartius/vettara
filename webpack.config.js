const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');
const OptimizeCCSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

console.log('process.env.NODE_ENV:' + process.env.NODE_ENV);

const NODE_ENV = process.env.NODE_ENV;


	NODE_ENV === 'development' ? 
	modePath = {
		outputPath : '',
		publicPath: ''
	}
	: 
	modePath = {
		outputPath : './assets',
		publicPath: './assets'		
	};
	



module.exports = {
	// entry: { main: './src/index.js' },

  entry: {
    'assets/js/main': './src/assets/js/index.js',
    'assets/js/page': './src/assets/js/page.js'
   // pageThree: './srcpageThree/index.js'
  },

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].js",

		// publicPath: '/assets/'
		// publicPath: modePath.publicPath,
		// outputPath: modePath.outputPath



	},

	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all'
	// 	}
	// },

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




							// ========================================
							// outputPath: './images',
							// ========================================
							// publicPath: modePath.publicPath,
							// publicPath: modePath.publicPath,
							// outputPath: modePath.outputPath,

							useRelativePath: true,
							publicPath: '../images',
							outputPath: '/assets/images'
							// (url) => { 
								
							// 	console.log('>>>>>>>>> url' + url);
							// 	return ('./assets/images/' + url);
							// }
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
							// outputPath: './images',





							// publicPath: modePath.publicPath,
							// outputPath: modePath.outputPath,



							useRelativePath: true
						}
					}
				]
			},











			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '../fonts/[name].[ext]',


							// useRelativePath: true,
							// publicPath: '/assets/images',
							// outputPath: '/assets/images'



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
			filename: "index.html",
			title: 'main App',
			template: 'src/index.html',
			chunks: ['assets/js/main'],
			inject: true

		}),
		new HtmlWebpackPlugin({
			filename: "page.html",
			title: 'page App',
			template: 'src/page.html',
			chunks: ['assets/js/page'],
			inject: true
		}),

		new MiniCssExtractPlugin({

			// publicPath: modePath.publicPath,
			// outputPath: modePath.outputPath


			}),


		new CleanWebpackPlugin(['./dist']),
		new Webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		// new OptimizeCCSAssetsPlugin({
		// 	assetNameRegExp: /\.css$/g,
		// 	cssProcessor: require('cssnano'),
		// 	cssProcessorPluginOptions: {
		// 		preset: ['default', {
		// 			discardComments: {
		// 				removeAll: true
		// 			}
		// 		}]
		// 	},
		// 	canPrint: true
		// }),









		// new CopyWebpackPlugin([
		// 	{
		// 		from: './src/fonts',
		// 		to: (modePath.publicPath + '/fonts')
		// 	},
		// 	{
		// 		from: './src/favicon',
		// 		to: (modePath.publicPath + '/favicon')
		// 	},
		// 	{
		// 		from: './src/images',
		// 		to: ( modePath.publicPath + '/images')
		// 	},
		// 	{
		// 		from: './src/uploads',
		// 		to: (modePath.publicPath + '/uploads')
		// 	}
	 //    ])









		new CopyWebpackPlugin([
			{
				from: './src/assets/fonts',
				to: ('../dist/assets/fonts')
			},
			{
				from: './src/assets/favicon',
				to: ('../dist/assets/avicon')
			},
			{
				from: './src/assets/images',
				to: ( '../dist/assets/images')
			},
			{
				from: './src/assets/uploads',
				to: ('../dist/assets/uploads')
			}
	    ])






		// new CopyWebpackPlugin([{
		// 		from: './src/fonts',
		// 		to: ('./fonts')
		// 	},
		// 	{
		// 		from: './src/favicon',
		// 		to: './favicon'
		// 	},
		// 	{
		// 		from: './src/images',
		// 		to: './images'
		// 	},
		// 	{
		// 		from: './src/uploads',
		// 		to: './uploads'
		// 	}
	 //    ])





	]
}