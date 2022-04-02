const path = require('path');
const { basename } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: "./public/main.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js",
        publicPath: "/",
        sourceMapFilename: '[name].[fullhash:8].map',
        chunkFilename: '[id].[fullhash:8].js',
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        proxy: {
            '/api': {
                target: {
                    host: '0.0.0.0',
                    protocol: 'http:',
                    port: 3001,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=fonts/[name].[ext]',
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html",
            inject: "body",
        }),
        new FaviconsWebpackPlugin({
            logo: 'public/server/images/favicon.ico',
            inject: (htmlPlugin) =>
              basename(htmlPlugin.options.filename) === 'index.html',
          }),
    ]
}