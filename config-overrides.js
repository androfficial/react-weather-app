const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  webpack(config, env) {
    if (env === 'development') {
      config.plugins.push(
        new StyleLintPlugin({
          configFile: path.resolve(__dirname, '.stylelintrc'),
          files: path.resolve(__dirname, 'src/styles/**/*.{sass,scss}'),
          failOnError: false,
        }),
        new CircularDependencyPlugin({
          // exclude detection of files based on a RegExp
          exclude: /a\.js|node_modules/,
          // add errors to webpack instead of warnings
          failOnError: true,
          // allow import cycles that include an asyncronous import,
          // e.g. via import(/* webpackMode: "weak" */ './file.js')
          allowAsyncCycles: false,
          // set the current working directory for displaying module paths
          cwd: process.cwd(),
        })
      );
    }

    return config;
  },
};
