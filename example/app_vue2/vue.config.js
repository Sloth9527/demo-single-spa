const package = require('./package.json');

module.exports = {
    publicPath: '//localhost:8081',
    devServer: {
        historyApiFallback: true,
        port: 8081,
    },
    configureWebpack: {
        output: {
            library: package.name,
            libraryTarget: 'umd'
        }
    }
}
