const path = require('path');
const CleanWebpaclPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    mode: 'production',
    entry: {
        vendor: ['vue', 'vue-router','lodash'],
    },
    output: {
        path: path.resolve(__dirname, 'public/vendor'),
        // 指定文件名
        filename: '[name].dll.js',
        library: '[name]_dll_lib'
    },
    plugins: [
        // new CleanWebpaclPlugin(['vendor'], {
        //     root: path.resolve(__dirname, 'public')
        // }),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'public', 'vendor', '[name].manifest.json'),
            name: '[name]_dll_lib'
        })
    ]
}



