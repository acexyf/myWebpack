const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base')


module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        port: 8050
    }
})
