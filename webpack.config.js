const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports={
	//target: 'web',
	//externals: [nodeExternals()],
	entry:{
		'index':'./src/index.js'

	},
	//entry:["babel-polyfill","./src/index.js"],
	output:{
		//path: path.join(__dirname,'dist'),
		//filename:'[name].bundle.js',
		path: __dirname + "/dist/",
		filename: "index.bundle.js",
		publicPath: "/",
	},
	devServer: {
		historyApiFallback: true,
		publicPath: '/',
		disableHostCheck: true,
  },
	module:{
			rules: [
				{
					test: /\.css$/,
					use: [ 'style-loader', 'css-loader' ]
				},
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
					}
				}
			]

	}
}