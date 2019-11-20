'use strict';

var fs = require('fs');
var lstatSync = fs.lstatSync;
var readdirSync = fs.readdirSync;
var path = require('path');
var basename = path.basename;
var extname = path.extname;
var join = path.join;
var _ = require('lodash');
var renderMd = require('../../../../lib/render-md');
var siteConfig = require('../../../../site-config');
var base = siteConfig.base;

var isFile = function isFile(source) {
  return lstatSync(source).isFile();
};
var getFiles = function getFiles(source) {
  return readdirSync(source)
    .map(function(name) {
      return join(source, name);
    })
    .filter(isFile);
};

var docList = [];
var docFiles = getFiles(__dirname).filter(function(file) {
  return extname(file) === '.md';
});
docFiles.forEach(function(file) {
  var _renderMd = renderMd(file),
    meta = _renderMd.meta;

  var index = _.isNumber(meta.index) ? meta.index : 999,
    title = meta.title;

  var name = basename(file, '.md');
  var doc = {
    href: base + 'zh-cn/vis/resource/' + name + '.html',
    index: index,
    name: name,
    title: title,
  };
  docList.push(doc);
});
docList.sort(function(a, b) {
  return a.index - b.index;
});
var indexByHref = {};
docList.forEach(function(doc, index) {
  indexByHref[doc.href] = index;
});

module.exports = {
  docIcon: '',
  navName: 'resource',
  docList: docList,
  docIndexByHref: indexByHref,
  docsCount: docList.length,
  template: 'doc',
  docMenuHeader: '${resource.translate.visResource}',
  docFilteringSupport: true,
  resourceCards: [
    {
      icon: '${assets}/image/vis/resource/sketch.png',
      title: 'AntV Charts',
      description: '图表组件 Sketch 模版',
      href:
        'https://github.com/antvis/feedback/releases/download/design/AntV.Charts.sketch',
    },
    {
      icon: '${assets}/image/vis/resource/sketch.png',
      title: 'AntV Charts Icons',
      description: 'Logo、图标等文件',
      href:
        'https://github.com/antvis/feedback/releases/download/design/AntV.Charts.Icons.sketch',
    },
  ],
};
