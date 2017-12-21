var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    entry: {
        app: './app'
    },
    output: {
        path: path.join(__dirname, './public/'),
        publicPath: '/public/',
        filename: 'main.js'
    },
    module: {
        rules: [{
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024&name=static/images/[hash:8].[name].[ext]'
                //name 字段指定了在打包根目录（output.path）下生成名为 images 的文件夹，并在原图片名前加上8位 hash 值
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })


                    },

                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // use: [
                // 	'style-loader',
                // 	'css-loader'
                // ]
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        //重命名提取后的CSS文件
        new ExtractTextPlugin("main.css")
    ]

};

module.exports = config;