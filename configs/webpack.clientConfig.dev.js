const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode : 'development',
	entry: { 
		client : path.join(__dirname, '../', '/src/client/index.tsx'),
	},
    output: {
        filename: "client.js",
        path: path.join(__dirname, '../', '/public'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					configFile: path.join(__dirname, '../', 'tsconfig.client.json')
				},		 
			},
			{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
					loader: "css-loader", 
					options: {
                        sourceMap: true,             
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
					loader: "css-loader", 
					options: {
                        sourceMap: true,             
                    }
                }]
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            publicPath : '/public/imgs', // file-loader 사용시에 이미지가 사용할 기준경로
                            outputPath : '../public/imgs', // file-lodaer 사용시에 결과물위치 ( dist 폴더기준 )
                            name: '[name].[ext]',
                            limit: 10000,
                        }
                    }
                ]
            }			
		]
	},
	plugins : [
		new webpack.DefinePlugin({
			'process.env.isBrowser': JSON.stringify(true)
		})
	],
	resolve : {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
            '~components' : path.join(__dirname, '../', '/src/react/components'),
            '~assets' : path.join(__dirname, '../', '/src/react/assets'),
		}		
	},
}

