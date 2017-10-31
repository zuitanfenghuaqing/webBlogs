
const webpack = require('webpack');
const path = rerquire('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
	
	entry:{
		main:path.resolve(__dirname, './app/config/app.js')
	},
	output:{
		path: path.resolve(__dirname, 'webBloger'),
		filname:'[name].js'
	},
	devServer:{
		hot:true,
		port:7140,
		inline:true
	}
	module:{
		rules:[{
			test:/\.css$/,use:['style-loader','css-loader']
		},{
			test:/\.(png|jpg|jeg|gif|svg)$/,
			use:['url-loader?limit=100&name=image/[name].[ext]']
		},{
			test:/\.js$/,use:
		}]
	},
	resolve:{
		extensions: ['.vue','.js','.json'],
		alias:{
			assets: path.resolve(__dirname,'./app/aseets'),
			components: path.resolve(__dirname,'./app/components'),
			config: path.resolve(__dirname, './app/config'),
			active: path.resolve(__dirname, './app/active')
		}
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './app/index.html',
			inject: 'body',
			minify:{
				removeComponents:true,
				collapseWhitespace:false
			}
		})
	]
}
