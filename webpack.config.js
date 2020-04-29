const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./client/components/accordion.jsx",

    output: {
        filename: BeforeUnloadEvent.js,
        path: path.join(__dirname, 'public'),
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modelues)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        }]
    }
  };