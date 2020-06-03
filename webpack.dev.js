const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base')


module.exports = merge(baseWebpackConfig, {
    mode: 'development',
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
    devServer: {
        port: 8050
    }
})
