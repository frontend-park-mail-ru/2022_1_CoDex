const path = require('path');
const { basename } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: "./public/main.ts",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: "bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
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
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
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
            logo: 'public/dist/img/favicon.ico',
            inject: (htmlPlugin) =>
                basename(htmlPlugin.options.filename) === 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/sw.js',
                    to: '',
                },
                {
                    from: 'public/firebase-messaging-sw.js',
                    to: '',
                },
            ],
        }),
    ],
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: ['.js', '.ts'],
    },
}
