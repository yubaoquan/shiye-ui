const path = require('path');
const src = path.resolve(__dirname, 'src');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');

const config = {
  mode: 'production',
  entry: {},
  resolve: {
    extensions: [ '.js', '.jsx', '.css', '.less' ],
    alias: {
      root: src,
      utils: path.resolve(src, 'utils'),
    },
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@ybq/ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [
    {
      react: {
        amd: 'react',
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react'
      },
      'react-dom': {
        amd: 'react-dom',
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom'
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              [
                '@babel/transform-runtime',
                {
                  regenerator: false
                }
              ]
            ],
          },
        },
      },

      {
        test: /\.css?$|\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name]/index.css",
      chunkFilename: "[id].css"
    })
  ],
};

module.exports = function() {
  return new Promise((resolve, reject) => {
    fs.readdir('./src/components', (err, dirs) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      const entry = dirs.reduce((result, dir) => {
        const filePath = path.resolve('./src/components', dir, 'index.js');
        // ignore component/base
        if (fs.existsSync(filePath)) {
          result[dir] = filePath;
        }
        return result;
      }, {
        index: './src/index.js',
      });
      config.entry = entry;
      resolve(config);
    });
  });
};
