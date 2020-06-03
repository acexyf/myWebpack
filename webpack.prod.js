const { smart } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack')

const prodConfig = smart(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new OptimizeCSSAssetsPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
        }),
        new webpack.DefinePlugin({
            env: JSON.stringify('prod'),
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
            ],
            exclude: /node_modules/
        },{
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
            exclude: /node_modules/
        },{
            test: /\.(sc|sa)ss$/,
            use: [
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
            exclude: /node_modules/
        }]
    }
})


module.exports = prodConfig



