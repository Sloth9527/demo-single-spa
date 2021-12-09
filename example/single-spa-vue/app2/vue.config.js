const package = require('./package.json');

module.exports = {
    publicPath: '//localhost:8082',
    devServer: {
        historyApiFallback: true,
        port: 8082,
    },
    configureWebpack: {
        output: {
            library: package.name,
            libraryTarget: 'umd'
        }
    }
}
