const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const config = {
    optimization: {
        minimize: true,
    },
};

module.exports = merge(common, {
    ...config,
});
