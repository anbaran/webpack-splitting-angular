const pathUtil = require('path');


module.exports = {
    mode: 'production',
    entry: {
        main: pathUtil.join(__dirname, "./src/main.ts"),
        'common-ui': pathUtil.join(__dirname, "./src/common-ui/common-ui.module.ts"),
        feature1: pathUtil.join(__dirname, "./src/feature1/feature1.module.ts"),
        feature2: pathUtil.join(__dirname, "./src/feature2/feature2.module.ts"),
    },
    output: {
        filename: '[name].bundle.js',
        path: pathUtil.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [{loader: 'ts-loader', options: {configFile: pathUtil.join(__dirname, "tsconfig.json")}}, {loader: 'angular2-template-loader'}]
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                    enforce: true,
                    priority: 20

                },
                'common-ui': {
                    test: /common-ui/,
                    name: 'common-ui',
                    chunks: "initial",
                    enforce: true,
                    priority: 10
                },

                'feature1': {
                    test: /feature1/,
                    name: 'feature1',
                    chunks: "initial",
                    enforce: true
                },

                'feature2': {
                    test: /feature2/,
                    name: 'feature2',
                    chunks: "initial",
                    enforce: true
                },

            }
        }

    }

};



