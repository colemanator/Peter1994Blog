/**
 * Created by Peter on 2/07/2016.
 */

module.exports = {
    entry: [
        './app/src/index.js'
    ],
    output: {
        path: __dirname + '/app/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './app/build'
    }
};
