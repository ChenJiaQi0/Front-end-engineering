module.exports = {
    entry:{
        index: './src/main.js'  //设置入口文件
    },
    output:{
        filename: 'bundle.js'   //输出文件名
    },
    devServer:{
        static:{
            directory:'./'
        },
        port: 8888,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
}