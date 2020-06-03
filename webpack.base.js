const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require("webpack-dashboard/plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

//vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    priority: 1,
                    name: 'chunk-vendors',
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 1
                },
            }
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:8].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['thread-loader', 'cache-loader', 'babel-loader'],
            include: [path.resolve(__dirname, 'src')]
        },{
            test:  /\.(gif|png|jpg|svg)$/i,
            use: [{
                loader:'url-loader',
                options: {
                    limit: 2048,
                    name: 'img/[name].[hash:8].[ext]'
                }
            }]
        },{
            test: /\.vue$/,
            //[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
            use: 'vue-loader',
            include: [path.resolve(__dirname, 'src')]
        }]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/js/*.js',
                    to: path.resolve(__dirname, 'dist', 'js'),
                    flatten: true,
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            minify: {
                removeAttributeQuotes: false,
                collapseWhitespace: false, 
            },
        }),

        new DashboardPlugin(),

        new VueLoaderPlugin(),

    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
}