import path from 'path'
import webpack from 'webpack'
import middleware from 'webpack-dev-middleware'

const clientFolder = path.resolve(__dirname, '../client')

const compiler = webpack({
  entry: `${clientFolder}/index.js`,
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        ]
      }
    ]
  }
})

export default middleware(compiler, {
  publicPath: '/'
})
