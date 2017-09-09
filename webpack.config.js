'use strict';

let path = require('path');
let webpack = require('webpack');

/**
 * Plugins
 */
let ExtractTextPlugin =  require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let StringReplacePlugin = require('string-replace-webpack-plugin');

let prod = process.env.NODE_ENV === 'production';
let isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));
let hotLoading = (!prod && isDevServer) ? true : false;

let appPackageJson = require(path.join(process.cwd(), 'package.json'));
let appRoot = process.cwd();


let config = {
		bail : prod ? true : false,
		context : __dirname,
		devServer : {
			port : 8093,
			hot : hotLoading,
			inline : true,
			contentBase : appRoot + path.sep + 'dist',
			publicPath : appPackageJson.myAppConfig.baseRoute,
			stats : {
					assets : false,
					children : false,
					chunks : false,
					hash : false,
					version : false
			}
		},
		entry : './src/main',
		output : {
			path : appRoot + path.sep + 'dist',
			publicPath : appPackageJson.myAppConfig.baseRoute,
			filename : 'bundle.[hash].js'
		},
	module : {
			loaders : getLoaders()
	},
	plugins : getPlugins(),
	resolve : {
			extensions : ['.js', '.jsx']
	}
};

if (prod) {
	config.plugins = config.plugins.concat(
		new webpack.optimize.UglifyJsPlugin({
			compressor : {
				warning : false
			}
		})
	);
}

if (hotLoading) {
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	);
}

function getPlugins() {
	let plugins = [
		new ExtractTextPlugin('styles.[contenthash].css'),
		new StringReplacePlugin(),
		new HtmlWebpackPlugin({
			template : './src/template.html'
		}),
		new webpack.DefinePlugin({
			'process.env' : {
				NODE_ENV : JSON.stringify(process.env.NODE_ENV)
			}
		})
	];
	return plugins;
}

function getLoaders() {
	let loaders = [
		{
			test : /\.css$/,
			loader : hotLoading ? 'style-loader!css-loader?sourceMap&-autoprefixer' : ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&-autoprefixer')
		},
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components|public\/)/,
			loader: "babel-loader"
		},
		{
			test : /\.(jpeg|png|gif|svg)$/i,
			loader : 'file-loader?name=images/[name].[ext]'
		}
	];
	return loaders;
}

module.exports = config;
