var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');

//清空基本配置的插件列表
webpackBaseConfig.plugins=[];

module.exports=merge(webpackBaseConfig,{
	output: {
		publicPath: '/public_CDN/',
		//将入口文件重命名为带有20位hash值的唯一文件
		filename: 'static/js/[name].[hash].js'	//filename定义的路径就在打包配置的public文件夹下
	},
	plugins: [
		new ExtractTextPlugin({
			//提取CSS， 并重命名为带有20位hash值的唯一文件
			filename: 'static/css/[name].[hash].css',
			allChunks: true
		}),
		//定义当前的code 环境为生产环境
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		//压缩 JS
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		//提取模板，并保存入口html文件
		new HtmlwebpackPlugin({
			filename: 'index_prod.html',//在public文件夹下，index_prod.html与static在同一目录下，
			template: './index.ejs',
			inject: false
		})
	]
})