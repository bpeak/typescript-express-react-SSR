const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	mode: 'development',
	target : 'node',
	node: { __dirname : true },
	externals: [nodeExternals()],
	entry: { 
		index : path.join(__dirname, '../src/server', 'index.ts') 
	},
	output: {
		path: path.join(__dirname, '../', '/dist'),
		filename: 'server.js',
	},
	plugins : [
		new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true,
        }),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
                loader: "ts-loader",
				options: {
					configFile: path.join(__dirname, '../', 'tsconfig.json')
				},		 
			},
			{
                test: /\.scss$/,
				loader : "css-loader/locals",
				options: {
					sourceMap: true,             
					modules: true,
					localIdentName: '[name]__[local]--[hash:base64:5]'       
				}
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
	resolve : {
		extensions : ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'~components' : path.join(__dirname, '../', '/src/react/components'),
			'~assets' : path.join(__dirname, '../', '/src/react/assets'),
		}		
	},
}