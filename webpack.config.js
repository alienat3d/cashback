const path = require('path');
// const niceSelect2 = require('nice-select2');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'js/main.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true,
		},
	},
	devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
