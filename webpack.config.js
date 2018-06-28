const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "app/app.jsx"),
    output : {
        path : path.resolve(__dirname, "dist/"),
        filename: "main.bundle.js"
    },
    module: {
        rules: [
            { 
                test: /\.jsx$/, 
                exclude: /node_modules/, 
                use: 
                [
                    {
                    loader: "babel-loader",
                    options : {
                    presets: 
                        [
                            ["env", {
                                "targets" : {
                                    "browsers" : ["last 3 versions", ">1%"]
                                },
                                useBuiltIns : true,
                                }
                            ],
                            ["react"],
                        ],
                    }
            }
        ]
        }
    ]
    },
    plugins : [

    ], 
    watch : true
}