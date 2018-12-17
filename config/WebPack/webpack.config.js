var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig, {
    entry: {
        "client.demo": ["./src/ClientDemo/Initialize/init.tsx"]
    },

	externals: {
	 	"react": "React",
	 	"react-dom": "ReactDOM"
    },
    
    devtool: "source-map"
});