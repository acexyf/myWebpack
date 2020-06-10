const { smart } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = smart(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ],
            exclude: /node_modules/
        },{
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
            exclude: /node_modules/
        },{
            test: /\.(sc|sa)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            env: JSON.stringify('dev'),
        })
    ],
    devServer: {
        port: 8050,
        host: "0.0.0.0",
        hot: true,
        compress: true
    }
})
