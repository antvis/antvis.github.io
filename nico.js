var path = require('path');

// {{ settings for nico
exports.site = {
  name: 'Ant Visualization'
};
exports.theme = 'theme';
exports.source = process.cwd();
exports.output = path.join(process.cwd(), '_site');
exports.permalink = '{{directory}}/{{filename}}';
exports.ignorefilter = function(filepath, subdir) {
  var extname = path.extname(filepath);
  if (extname === '.tmp' || extname === '.bak') {
    return false;
  }
  if (/\.DS_Store/.test(filepath)) {
    return false;
  }
  if (/^(_site|_theme|node_modules|\.idea)/.test(subdir)) {
    return false;
  }
  return true;
};
exports.writers = [
  'nico-jsx.PageWriter',
  'nico-jsx.StaticWriter',
  'nico-jsx.FileWriter'
];
// end settings }}
