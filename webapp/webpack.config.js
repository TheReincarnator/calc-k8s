const webpack = require('webpack');
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/index.ts',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json']
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		new CopyPlugin([
			{
				context: 'src',
				from: '**/*.html'
			},
			{
				context: 'src',
				from: '**/.htaccess'
			}
		])
	],

	optimization: {
		minimizer: [
			new TerserJSPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	},

	devtool: 'source-map',

	devServer: {
		contentBase: './src',
		open: true,
		overlay: true,
		port: 80,
		hot: true
	}
};
