const rules = require('./webpack.rules');
const webpack = require('webpack');

rules.push({
   test: /\.css$/,
   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

// rules.push({
//    test: /\.svg$/,
//    loader: 'svg-react-loader',
// });

rules.push({
   test: /\.svg$/i,
   issuer: /\.[jt]sx?$/,
   use: ['@svgr/webpack'],
});

rules.push({
   test: /\.scss$/,
   use: ['style-loader', 'css-loader', 'sass-loader'],
});

module.exports = {
   // Put your normal webpack config below here
   module: {
      rules,
   },
   plugins: [
      new webpack.ProvidePlugin({
         React: 'react',
      }),
   ],
   resolve: {
      extensions: ['.js', '.jsx'],
   },
};
