const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/public/index.js',
    output: {
        path: path.join(__dirname, 'dist/public'),
        publicPath: "/",
        filename: "js/bundle.js" //упаковаем header.js products.js main.js
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/public/img',
                to: 'img/[name].[ext]',
                toType: 'template'
            },
            {
                from: 'src/public/css',
                to: 'css/[name].[ext]',
                toType: 'template'
            },
            {
                from: 'src/server/db',
                to: '../server/db/[name].[ext]',
                toType: 'template'
            },
            {
                from: 'src/server',
                to: '../server/[name].[ext]',
                toType: 'template'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}
