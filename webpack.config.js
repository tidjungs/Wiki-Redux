const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		'./ui/main.js',
	],
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		hot: true,
		port: 3333,
		historyApiFallback: true,
		inline: false,
		proxy: {
		        '/api/*': {
		        	target: 'http://127.0.0.1:5000'
			}
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react','stage-0'],
					plugins: ['react-hot-loader/babel']

				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						query: {
							outputStyle: 'expanded',
							sourceMap: true
						}
					
					}
				]
			}
		]
	}
}
