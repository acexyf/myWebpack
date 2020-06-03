const {smart } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');


const prodConfig = smart(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
        }),
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



