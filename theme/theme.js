var _ = require('lodash');
var internalIp = require('internal-ip');
var chanels = ['g2', 'g2-mobile', 'g6', 'vis'];
var docTypes = ['tool', 'api', 'demo', 'doc'];
var Menus = require('./menus');

module.exports = function(nico) {
  var exports = {};
  exports.reader = function(post) {
    var filepath = post.meta.filepath.toLowerCase();

    post.template = post.meta.template = (post.meta.template || 'page');
    chanels.forEach(function(chanel) {
      if (filepath.startsWith(chanel + '/')) {
        post.meta.chanel = chanel;
      }
    });

    docTypes.forEach(function(type) {
      if (filepath.indexOf(type) >= 0) {
        post.meta.docType = type;
      }
    });

    if (filepath === 'readme.md') {
      post.filename = post.meta.filename = 'index';
      post.template = post.meta.template = 'index';
    }

    if (filepath.indexOf('search') >= 0) {
      post.filename = post.meta.filename = 'search';
      post.template = post.meta.template = 'search';
    }

    return post;
  };

  function getDir(path) {
    var arr = path.split('/');
    return arr[arr.length - 2];
  }

  function getChanel(path) {
    var arr = path.split('/');
    return arr[0];
  }

  function getPageInfos(pages, path, type) {
    var ret = [];
    var titles = [];
    var chanel = getChanel(path);

    Object.keys(pages).forEach(function(key) {
      var page = pages[key];
      if (key.indexOf(type) >= 0 && chanel == page.meta.chanel) {
        var title = page.meta.title || getDir(key);
        if (titles.indexOf(title) === -1) {
          var filepath = page.filepath;
          var idx = filepath.indexOf('.');
          ret.push({
            title: title,
            url: filepath.substr(0, idx),
            index: page.meta.index,
            isNew: page.meta.isNew
          });
          titles.push(title);
        }
      }
    });

    // 进行排序
    ret.sort(function(obj1, obj2) {
      var index1 = obj1.index * 1;
      var index2 = obj2.index * 1;
      if (index1 < index2) return -1;
      if (index1 > index2) return 1;
      return 0;
    });

    return ret;
  }

  var filters = {
    getScript: function(html, type) {
      var htmlArr = html.split('<script type="text/babel">');
      if (type === 'react') {
        return '<script type="text/babel">' + htmlArr[1];
      } else {
        return htmlArr[0];
      }
    },
    find_category: function(pages, cat) {
      var ret = [];
      Object.keys(pages).forEach(function(key) {
        var item = nico.sdk.post.read(key);
        if (item.meta.category === cat) {
          ret.push(item);
        }
      });
      ret = ret.sort(function(a, b) {
        a = a.meta.order || 10;
        b = b.meta.order || 10;
        return parseInt(a, 10) - parseInt(b, 10);
      });
      return ret;
    },
    capitalizeFirstLetter: function(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
    getTitle: function(path) {
      var page = nico.sdk.post.read(path);
      var filepath = page.filepath;
      var idx = filepath.indexOf('.');
      return {
        title: page.meta.title,
        index: page.meta.index,
        url: filepath.substr(0, idx)
      };
    },
    // 获取类目
    getStartTitles: function(pages, path) {
      return getPageInfos(pages, path, 'start');
    },
    getDocTitles: function(pages, path) {
      return getPageInfos(pages, path, 'doc');
    },
    getSubDocTitles: function(pages, path, dir) {
      var pages;
      if (dir === 'api') {
        pages = getPageInfos(pages, path, 'api');
      } else {
        pages = getPageInfos(pages, path, 'doc');
      }

      var rst = [];
      pages.forEach(function(page) {
        if (page.url.indexOf(dir) >= 0) {
          rst.push(page);
        }
      });
      return rst;
    },
    getApiTitles: function(pages, path) {
      return getPageInfos(pages, path, 'api');
    },
    getDownloadTitles: function(pages, path) {
      return getPageInfos(pages, path, 'download');
    },
    getTopDocMenu: function(pages, path) {
      var chanel = getChanel(path);
      var cfg = Menus[chanel];
      return cfg;
    },
    getDemoIcons: function(pages, path) {
      return Menus.icons;
    },
    getDemoTypes: function(pages, path) {
      var types = [];
      var product = getChanel(path);
      Object.keys(pages).forEach(function(key) {
        var page = pages[key];
        if ((product == getChanel(key) && key.indexOf('demo') >= 0)) {
          var type = page.meta.type;
          if (type && types.indexOf(type) === -1) {
            types.push(type);
          }
        }
      });

      return types;
    },
    getMobileDemoTypes: function(pages, path) {
      var types = [];
      var product = getChanel(path);
      Object.keys(pages).forEach(function(key) {
        var page = pages[key];
        if (key.indexOf(product) >= 0 && key.indexOf('demo') >= 0) {
          var type = page.meta.type;
          if (type && types.indexOf(type) === -1) {
            types.push(type);
          }
        }
      });

      return types;
    },
    getDemoPages: function(pages, path, demoType) {
      var ret = [];
      var product = getChanel(path);
      Object.keys(pages).forEach(function(key) {
        var page = pages[key];
        if (product == getChanel(key) && key.indexOf('demo') >= 0 && page.meta.type == demoType) {
          ret.push(page);
        }
      });
      ret.sort(function(obj1, obj2) {
        var index1 = obj1.meta.index || 0;
        var index2 = obj2.meta.index || 0;
        return index1 - index2;
      });
      return ret;
    },
    getMobileDemoPages: function(pages, path, demoType) {
      var ret = [];
      var product = getChanel(path);
      Object.keys(pages).forEach(function(key) {
        var page = pages[key];
        if (product == getChanel(key) && key.indexOf('demo') >= 0 && page.meta.type == demoType) {
          ret.push(page);
        }
      });
      ret.sort(function(obj1, obj2) {
        var index1 = obj1.meta.index || 0;
        var index2 = obj2.meta.index || 0;
        return index1 - index2;
      });
      return ret;
    },
    // 获取对应的产品/教程名称
    getChanel: function(path) {
      return getChanel(path);
    },
    trim: function(value) {
      return value.replace(/\s+/g, "");
    },
    isSub: function(path, name) {
      return path.indexOf(name) >= 0;
    },
    getNeighbors: function(curIdx, pages) {
      var result = {};
      curIdx = curIdx * 1;
      var length = pages.length;
      if (curIdx > 0) {
        result.pre = {
          url: pages[curIdx - 1].url,
          title: pages[curIdx - 1].title
        }
      }

      if (curIdx < length - 1) {
        result.next = {
          url: pages[curIdx + 1].url,
          title: pages[curIdx + 1].title
        };
      }
      return result;
    },
    getClientIp: function() {
      var ip = internalIp();
      return ip;
    },
    /**
     * 获取变型
     * @param  {object} pages
     * @param  {string} path
     */
    getVariations: function(pages, path) {
      var rst = [];
      var currentPage = nico.sdk.post.read(path);
      var variations = currentPage.meta.variations;
      if (variations) {
        variations = this.trim(variations).split(',');
        var k;
        for (k in pages) {
          var page = pages[k];
          var key = page.filename;
          var filepath = page.filepath;
          if (variations.indexOf(page.filename) != -1 && page.meta.template === 'chart-detail') {
            page.url = filepath.replace('.md', '.html');
            page.index = page.meta.index;
            page.class = key;
            rst.push(page);
          };
        }
      };

      return rst.length && rst;
    },
    getMyClassify: function(pages, path) {
      var rst = [];
      var currentPage = nico.sdk.post.read(path);
      var tags = currentPage.tags;
      var k;
      for (k in pages) {
        var page = pages[k];
        var key = page.filename;
        var filepath = page.filepath;
        if (tags.indexOf(page.filename) != -1) {
          page.url = filepath.replace('.md', '.html');
          page.index = page.meta.index;
          rst.push(page);
        };
      }
      rst.sort(function(obj1, obj2) {
        return obj1.index - obj2.index;
      });
      return rst.length && rst;
    },
    getAllClassifys: function(pages, path) {
      var rst = [];
      var k;
      for (k in pages) {
        var page = pages[k];
        var key = page.filename;
        var filepath = page.filepath;
        var meta = page.meta;
        if (k.indexOf('classify') != -1 && meta.display != "none") {
          page.url = filepath.replace('.md', '.html');
          page.index = meta.index;
          page.class = key;
          rst.push(page);
        }
      }
      rst.sort(function(obj1, obj2) {
        return obj1.index - obj2.index;
      });
      return rst.length && rst;
    },
    getDetails: function(pages, path) {
      var rst = [];
      var currentPage = nico.sdk.post.read(path);
      var classKey = currentPage.filename;
      rst = this.getDetailByClass(pages, classKey);
      if (rst.length > 0) {
        rst.sort(function(obj1, obj2) {
          return obj1.index - obj2.index;
        });
      };
      return rst;
    },
    getDetailByClass: function(pages, classKey) {
      var rst = [];
      for (k in pages) {
        var page = pages[k];
        var tags = page.tags;
        var key = page.filename;
        var filepath = page.filepath;
        if (tags.indexOf(classKey) !== -1) {
          page.url = filepath.replace('.md', '.html');
          page.index = page.meta.index;
          page.class = key;
          rst.push(page);
        };
      };
      return rst.length && rst;
    }
  };
  exports.filters = filters;
  return exports;
};
