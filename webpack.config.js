const webpack = require("webpack");

module.exports = {
	entry: __dirname + '/src/javascripts/app.js',
	output: {
		path: __dirname + '/build/js',
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},

	plugins: [
		// new webpack.optimize.UglifyJsPlugin()
	],

	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};