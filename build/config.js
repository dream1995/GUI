var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var externals = {};

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));

Object.keys(Components).forEach(function(key) {
  externals[`lgsn-ui/packages/${key}`] = `lgsn-ui/lib/${key}`;
});

externals['lgsn-ui/src/locale'] = 'lgsn-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`lgsn-ui/src/utils/${file}`] = `lgsn-ui/lib/utils/${file}`;
});
externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'lgsn-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};
