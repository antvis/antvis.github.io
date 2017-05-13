! function(e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var a = r[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function(o, p) {
    for (var l, c, i = 0, s = []; i < o.length; i++) c = o[i], a[c] && s.push.apply(s, a[c]), a[c] = 0;
    for (l in p) e[l] = p[l];
    for (n && n(o, p); s.length;) s.shift().call(null, t);
    if (p[0]) return r[0] = 0, t(0)
  };
  var r = {},
    a = {
      0: 0
    };
  t.e = function(e, n) {
    if (0 === a[e]) return n.call(null, t);
    if (void 0 !== a[e]) a[e].push(n);
    else {
      a[e] = [n];
      var r = document.getElementsByTagName("head")[0],
        o = document.createElement("script");
      o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = t.p + "" + ({
        1: "index"
      }[e] || e) + ".js", r.appendChild(o)
    }
  }, t.m = e, t.c = r, t.p = ""
}([]);
webpackJsonp([1, 0], [function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(14),
    a = r(9);
  r(136);
  var u, h = r(259),
    l = r(262),
    c = r(261),
    f = r(257),
    d = a.TweenMax;
  ! function(t) {
    var e = {
        number: 1e3,
        duration: .75,
        gridSize: 16,
        center: {
          x: 400,
          y: 280
        }
      },
      r = function() {
        function t(e) {
          (0, o["default"])(this, t), this.options = e, this.width = document.body.clientWidth || 1440, this.height = document.body.clientHeight ||560, this.renderer = s.autoDetectRenderer(this.width, this.height, {
            transparent: !0,
            antialias: !0
          }), this.stage = new s.Container, this.pointWrapper = new s.Container, this.pointBGWrap = new s.Container, this.lineContainer = new h["default"](2 * this.options.center.x + 200, 2 * this.options.center.y), this.pointContainer = new l["default"], this.pointLoopContainer = new c["default"], this.pointBg = new s.Graphics, this.bgContainer = new f["default"]({
            w: this.width,
            h: this.height
          }), this.stage.alpha = 0
        }
        return t.prototype.init = function() {
          var t = this;
          this.renderer.view.id = "myCanvas", document.getElementById("canvasWrapper").appendChild(this.renderer.view), this.bgContainer.init(), this.stage.addChild(this.bgContainer.container), this.lineContainer.init(), this.pointBGWrap.addChild(this.lineContainer.container), this.lineContainer.container.x = -100, this.pointLoopContainer.init(), this.pointBGWrap.addChild(this.pointLoopContainer.container), this.pointWrapper.addChild(this.pointBGWrap), this.pointBg.beginFill(328976), this.pointBg.drawCircle(0, 0, 40), this.pointBg.x = this.options.center.x, this.pointBg.y = this.options.center.y, this.pointWrapper.addChild(this.pointBg), this.pointContainer.init(), this.pointWrapper.addChild(this.pointContainer.container), this.pointWrapper.x = .68 * this.width / 2 - this.options.center.x, this.stage.addChild(this.pointWrapper), this.render(), this.resize(), window.addEventListener("resize", function() {
            return t.resize()
          }), d.ticker.addEventListener("tick", this.render, this), this.animate()
        }, t.prototype.animate = function() {
          this.lineContainer.animate(), this.pointContainer.animate(), this.bgContainer.animate(), d.to(this.stage, .5, {
            delay: .3,
            alpha: 1
          }), d.from(this.pointBg, .5, {
            delay: 2.5,
            alpha: 0
          })
        }, t.prototype.render = function() {
          this.renderer.render(this.stage)
        }, t.prototype.resize = function() {
          this.width = document.body.clientWidth, this.renderer.resize(this.width, this.height), this.bgContainer.resize({
            w: this.width,
            h: this.height
          });
          var t = .68 * this.width / 2 - this.options.center.x;
          d.to(this.pointWrapper, .45, {
            x: t,
            y: this.height / 2 - this.options.center.y
          })
        }, t
      }(),
      i = function() {
        function t() {
          (0, o["default"])(this, t), this.scene = new r(e), this.scene.init()
        }
        return t.prototype.init = function() {}, t
      }(),
      n = ["https://zos.alipayobjects.com/rmsportal/JorDDgUVJljaIxDBpiBM.png", "https://zos.alipayobjects.com/rmsportal/uIbqAshSeUuRPrRXNOrN.png"],
      a = 0;
    n.forEach(function(t) {
      var e = new Image;
      e.onload = e.onerror = function() {
        a++, a >= n.length && new i
      }, e.src = t
    })
  }(u || (u = {}))
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function o() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 800,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 600,
      r = arguments[2],
      i = arguments[3];
    return !i && U.isWebGLSupported() ? new q["default"](t, e, r) : new H["default"](t, e, r)
  }
  e.__esModule = !0, e.Filter = e.SpriteMaskFilter = e.Quad = e.RenderTarget = e.ObjectRenderer = e.WebGLManager = e.Shader = e.CanvasRenderTarget = e.TextureUvs = e.VideoBaseTexture = e.BaseRenderTexture = e.RenderTexture = e.BaseTexture = e.Texture = e.CanvasGraphicsRenderer = e.GraphicsRenderer = e.GraphicsData = e.Graphics = e.TextStyle = e.Text = e.SpriteRenderer = e.CanvasTinter = e.CanvasSpriteRenderer = e.Sprite = e.TransformBase = e.TransformStatic = e.Transform = e.Container = e.DisplayObject = e.Bounds = e.glCore = e.WebGLRenderer = e.CanvasRenderer = e.ticker = e.utils = e.settings = void 0;
  var s = r(2);
  Object.keys(s).forEach(function(t) {
    "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
      enumerable: !0,
      get: function() {
        return s[t]
      }
    })
  });
  var a = r(4);
  Object.keys(a).forEach(function(t) {
    "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
      enumerable: !0,
      get: function() {
        return a[t]
      }
    })
  });
  var u = r(6);
  Object.defineProperty(e, "glCore", {
    enumerable: !0,
    get: function() {
      return n(u)["default"]
    }
  });
  var h = r(57);
  Object.defineProperty(e, "Bounds", {
    enumerable: !0,
    get: function() {
      return n(h)["default"]
    }
  });
  var l = r(93);
  Object.defineProperty(e, "DisplayObject", {
    enumerable: !0,
    get: function() {
      return n(l)["default"]
    }
  });
  var c = r(34);
  Object.defineProperty(e, "Container", {
    enumerable: !0,
    get: function() {
      return n(c)["default"]
    }
  });
  var f = r(94);
  Object.defineProperty(e, "Transform", {
    enumerable: !0,
    get: function() {
      return n(f)["default"]
    }
  });
  var d = r(95);
  Object.defineProperty(e, "TransformStatic", {
    enumerable: !0,
    get: function() {
      return n(d)["default"]
    }
  });
  var p = r(58);
  Object.defineProperty(e, "TransformBase", {
    enumerable: !0,
    get: function() {
      return n(p)["default"]
    }
  });
  var _ = r(63);
  Object.defineProperty(e, "Sprite", {
    enumerable: !0,
    get: function() {
      return n(_)["default"]
    }
  });
  var v = r(211);
  Object.defineProperty(e, "CanvasSpriteRenderer", {
    enumerable: !0,
    get: function() {
      return n(v)["default"]
    }
  });
  var y = r(64);
  Object.defineProperty(e, "CanvasTinter", {
    enumerable: !0,
    get: function() {
      return n(y)["default"]
    }
  });
  var g = r(213);
  Object.defineProperty(e, "SpriteRenderer", {
    enumerable: !0,
    get: function() {
      return n(g)["default"]
    }
  });
  var m = r(215);
  Object.defineProperty(e, "Text", {
    enumerable: !0,
    get: function() {
      return n(m)["default"]
    }
  });
  var b = r(105);
  Object.defineProperty(e, "TextStyle", {
    enumerable: !0,
    get: function() {
      return n(b)["default"]
    }
  });
  var x = r(183);
  Object.defineProperty(e, "Graphics", {
    enumerable: !0,
    get: function() {
      return n(x)["default"]
    }
  });
  var T = r(96);
  Object.defineProperty(e, "GraphicsData", {
    enumerable: !0,
    get: function() {
      return n(T)["default"]
    }
  });
  var w = r(186);
  Object.defineProperty(e, "GraphicsRenderer", {
    enumerable: !0,
    get: function() {
      return n(w)["default"]
    }
  });
  var E = r(184);
  Object.defineProperty(e, "CanvasGraphicsRenderer", {
    enumerable: !0,
    get: function() {
      return n(E)["default"]
    }
  });
  var O = r(26);
  Object.defineProperty(e, "Texture", {
    enumerable: !0,
    get: function() {
      return n(O)["default"]
    }
  });
  var P = r(25);
  Object.defineProperty(e, "BaseTexture", {
    enumerable: !0,
    get: function() {
      return n(P)["default"]
    }
  });
  var S = r(65);
  Object.defineProperty(e, "RenderTexture", {
    enumerable: !0,
    get: function() {
      return n(S)["default"]
    }
  });
  var M = r(106);
  Object.defineProperty(e, "BaseRenderTexture", {
    enumerable: !0,
    get: function() {
      return n(M)["default"]
    }
  });
  var C = r(108);
  Object.defineProperty(e, "VideoBaseTexture", {
    enumerable: !0,
    get: function() {
      return n(C)["default"]
    }
  });
  var R = r(107);
  Object.defineProperty(e, "TextureUvs", {
    enumerable: !0,
    get: function() {
      return n(R)["default"]
    }
  });
  var A = r(100);
  Object.defineProperty(e, "CanvasRenderTarget", {
    enumerable: !0,
    get: function() {
      return n(A)["default"]
    }
  });
  var D = r(23);
  Object.defineProperty(e, "Shader", {
    enumerable: !0,
    get: function() {
      return n(D)["default"]
    }
  });
  var I = r(24);
  Object.defineProperty(e, "WebGLManager", {
    enumerable: !0,
    get: function() {
      return n(I)["default"]
    }
  });
  var L = r(37);
  Object.defineProperty(e, "ObjectRenderer", {
    enumerable: !0,
    get: function() {
      return n(L)["default"]
    }
  });
  var k = r(38);
  Object.defineProperty(e, "RenderTarget", {
    enumerable: !0,
    get: function() {
      return n(k)["default"]
    }
  });
  var N = r(104);
  Object.defineProperty(e, "Quad", {
    enumerable: !0,
    get: function() {
      return n(N)["default"]
    }
  });
  var j = r(103);
  Object.defineProperty(e, "SpriteMaskFilter", {
    enumerable: !0,
    get: function() {
      return n(j)["default"]
    }
  });
  var F = r(102);
  Object.defineProperty(e, "Filter", {
    enumerable: !0,
    get: function() {
      return n(F)["default"]
    }
  }), e.autoDetectRenderer = o;
  var B = r(3),
    U = i(B),
    X = r(109),
    W = i(X),
    z = r(5),
    Y = n(z),
    G = r(36),
    H = n(G),
    V = r(62),
    q = n(V);
  e.settings = Y["default"], e.utils = U, e.ticker = W, e.CanvasRenderer = H["default"], e.WebGLRenderer = q["default"]
}, function(t, e) {
  "use strict";
  e.__esModule = !0;
  e.VERSION = "4.3.2", e.PI_2 = 2 * Math.PI, e.RAD_TO_DEG = 180 / Math.PI, e.DEG_TO_RAD = Math.PI / 180, e.RENDERER_TYPE = {
    UNKNOWN: 0,
    WEBGL: 1,
    CANVAS: 2
  }, e.BLEND_MODES = {
    NORMAL: 0,
    ADD: 1,
    MULTIPLY: 2,
    SCREEN: 3,
    OVERLAY: 4,
    DARKEN: 5,
    LIGHTEN: 6,
    COLOR_DODGE: 7,
    COLOR_BURN: 8,
    HARD_LIGHT: 9,
    SOFT_LIGHT: 10,
    DIFFERENCE: 11,
    EXCLUSION: 12,
    HUE: 13,
    SATURATION: 14,
    COLOR: 15,
    LUMINOSITY: 16
  }, e.DRAW_MODES = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, e.SCALE_MODES = {
    LINEAR: 0,
    NEAREST: 1
  }, e.WRAP_MODES = {
    CLAMP: 0,
    REPEAT: 1,
    MIRRORED_REPEAT: 2
  }, e.GC_MODES = {
    AUTO: 0,
    MANUAL: 1
  }, e.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i, e.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i, e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, e.SHAPES = {
    POLY: 0,
    RECT: 1,
    CIRC: 2,
    ELIP: 3,
    RREC: 4
  }, e.PRECISION = {
    LOW: "lowp",
    MEDIUM: "mediump",
    HIGH: "highp"
  }, e.TRANSFORM_MODE = {
    STATIC: 0,
    DYNAMIC: 1
  }, e.TEXT_GRADIENT = {
    LINEAR_VERTICAL: 0,
    LINEAR_HORIZONTAL: 1
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function o() {
    return ++S
  }

  function s(t, e) {
    return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
  }

  function a(t) {
    return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t
  }

  function u(t) {
    return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
  }

  function h(t, e) {
    var r = b["default"].RETINA_PREFIX.exec(t);
    return r ? parseFloat(r[1]) : void 0 !== e ? e : 1
  }

  function l(t) {
    var e = g.DATA_URI.exec(t);
    if (e) return {
      mediaType: e[1] ? e[1].toLowerCase() : void 0,
      subType: e[2] ? e[2].toLowerCase() : void 0,
      encoding: e[3] ? e[3].toLowerCase() : void 0,
      data: e[4]
    }
  }

  function c(t) {
    var e = g.URL_FILE_EXTENSION.exec(t);
    if (e) return e[1].toLowerCase()
  }

  function f(t) {
    var e = g.SVG_SIZE.exec(t),
      r = {};
    return e && (r[e[1]] = Math.round(parseFloat(e[3])), r[e[5]] = Math.round(parseFloat(e[7]))), r
  }

  function d() {
    M = !0
  }

  function p(t) {
    if (!M) {
      if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        var e = ["\n %c %c %c Pixi.js " + g.VERSION + " - \u2730 " + t + " \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
        window.console.log.apply(console, e)
      } else window.console && window.console.log("Pixi.js " + g.VERSION + " - " + t + " - http://www.pixijs.com/");
      M = !0
    }
  }

  function _() {
    var t = {
      stencil: !0,
      failIfMajorPerformanceCaveat: !0
    };
    try {
      if (!window.WebGLRenderingContext) return !1;
      var e = document.createElement("canvas"),
        r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
        i = !(!r || !r.getContextAttributes().stencil);
      if (r) {
        var n = r.getExtension("WEBGL_lose_context");
        n && n.loseContext()
      }
      return r = null, i
    } catch (o) {
      return !1
    }
  }

  function v(t) {
    return 0 === t ? 0 : t < 0 ? -1 : 1
  }

  function y(t, e, r) {
    var i = t.length;
    if (!(e >= i || 0 === r)) {
      r = e + r > i ? i - e : r;
      for (var n = i - r, o = e; o < n; ++o) t[o] = t[o + r];
      t.length = n
    }
  }
  e.__esModule = !0, e.BaseTextureCache = e.TextureCache = e.pluginTarget = e.EventEmitter = e.isMobile = void 0, e.uid = o, e.hex2rgb = s, e.hex2string = a, e.rgb2hex = u, e.getResolutionOfUrl = h, e.decomposeDataUri = l, e.getUrlFileExtension = c, e.getSvgSize = f, e.skipHello = d, e.sayHello = p, e.isWebGLSupported = _, e.sign = v, e.removeItems = y;
  var g = r(2),
    m = r(5),
    b = n(m),
    x = r(10),
    T = n(x),
    w = r(220),
    E = n(w),
    O = r(28),
    P = i(O),
    S = 0,
    M = !1;
  e.isMobile = P, e.EventEmitter = T["default"], e.pluginTarget = E["default"];
  e.TextureCache = {}, e.BaseTextureCache = {}
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(60);
  Object.defineProperty(e, "Point", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(98);
  Object.defineProperty(e, "ObservablePoint", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  });
  var s = r(59);
  Object.defineProperty(e, "Matrix", {
    enumerable: !0,
    get: function() {
      return i(s)["default"]
    }
  });
  var a = r(97);
  Object.defineProperty(e, "GroupD8", {
    enumerable: !0,
    get: function() {
      return i(a)["default"]
    }
  });
  var u = r(193);
  Object.defineProperty(e, "Circle", {
    enumerable: !0,
    get: function() {
      return i(u)["default"]
    }
  });
  var h = r(194);
  Object.defineProperty(e, "Ellipse", {
    enumerable: !0,
    get: function() {
      return i(h)["default"]
    }
  });
  var l = r(195);
  Object.defineProperty(e, "Polygon", {
    enumerable: !0,
    get: function() {
      return i(l)["default"]
    }
  });
  var c = r(61);
  Object.defineProperty(e, "Rectangle", {
    enumerable: !0,
    get: function() {
      return i(c)["default"]
    }
  });
  var f = r(196);
  Object.defineProperty(e, "RoundedRectangle", {
    enumerable: !0,
    get: function() {
      return i(f)["default"]
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(219),
    o = i(n),
    s = r(217),
    a = i(s);
  e["default"] = {
    TARGET_FPMS: .06,
    MIPMAP_TEXTURES: !0,
    RESOLUTION: 1,
    FILTER_RESOLUTION: 1,
    SPRITE_MAX_TEXTURES: (0, o["default"])(32),
    SPRITE_BATCH_SIZE: 4096,
    RETINA_PREFIX: /@(.+)x/,
    RENDER_OPTIONS: {
      view: null,
      antialias: !1,
      forceFXAA: !1,
      autoResize: !1,
      transparent: !1,
      backgroundColor: 0,
      clearBeforeRender: !0,
      preserveDrawingBuffer: !1,
      roundPixels: !1
    },
    TRANSFORM_MODE: 0,
    GC_MODE: 0,
    GC_MAX_IDLE: 3600,
    GC_MAX_CHECK_COUNT: 600,
    WRAP_MODE: 0,
    SCALE_MODE: 0,
    PRECISION: "mediump",
    CAN_UPLOAD_SAME_BUFFER: (0, a["default"])()
  }
}, function(t, e, r) {
  var i = {
    createContext: r(141),
    setVertexAttribArrays: r(71),
    GLBuffer: r(137),
    GLFramebuffer: r(138),
    GLShader: r(139),
    GLTexture: r(70),
    VertexArrayObject: r(140),
    shader: r(142)
  };
  "undefined" != typeof t && t.exports && (t.exports = i), "undefined" != typeof window && (window.PIXI = window.PIXI || {}, window.PIXI.glCore = i)
}, function(t, e, r) {
  (function(t) {
    function r(t, e) {
      for (var r = 0, i = t.length - 1; i >= 0; i--) {
        var n = t[i];
        "." === n ? t.splice(i, 1) : ".." === n ? (t.splice(i, 1), r++) : r && (t.splice(i, 1), r--)
      }
      if (e)
        for (; r--; r) t.unshift("..");
      return t
    }

    function i(t, e) {
      if (t.filter) return t.filter(e);
      for (var r = [], i = 0; i < t.length; i++) e(t[i], i, t) && r.push(t[i]);
      return r
    }
    var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
      o = function(t) {
        return n.exec(t).slice(1)
      };
    e.resolve = function() {
      for (var e = "", n = !1, o = arguments.length - 1; o >= -1 && !n; o--) {
        var s = o >= 0 ? arguments[o] : t.cwd();
        if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
        s && (e = s + "/" + e, n = "/" === s.charAt(0))
      }
      return e = r(i(e.split("/"), function(t) {
        return !!t
      }), !n).join("/"), (n ? "/" : "") + e || "."
    }, e.normalize = function(t) {
      var n = e.isAbsolute(t),
        o = "/" === s(t, -1);
      return t = r(i(t.split("/"), function(t) {
        return !!t
      }), !n).join("/"), t || n || (t = "."), t && o && (t += "/"), (n ? "/" : "") + t
    }, e.isAbsolute = function(t) {
      return "/" === t.charAt(0)
    }, e.join = function() {
      var t = Array.prototype.slice.call(arguments, 0);
      return e.normalize(i(t, function(t, e) {
        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
        return t
      }).join("/"))
    }, e.relative = function(t, r) {
      function i(t) {
        for (var e = 0; e < t.length && "" === t[e]; e++);
        for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
        return e > r ? [] : t.slice(e, r - e + 1)
      }
      t = e.resolve(t).substr(1), r = e.resolve(r).substr(1);
      for (var n = i(t.split("/")), o = i(r.split("/")), s = Math.min(n.length, o.length), a = s, u = 0; u < s; u++)
        if (n[u] !== o[u]) {
          a = u;
          break
        }
      for (var h = [], u = a; u < n.length; u++) h.push("..");
      return h = h.concat(o.slice(a)), h.join("/")
    }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
      var e = o(t),
        r = e[0],
        i = e[1];
      return r || i ? (i && (i = i.substr(0, i.length - 1)), r + i) : "."
    }, e.basename = function(t, e) {
      var r = o(t)[2];
      return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
    }, e.extname = function(t) {
      return o(t)[3]
    };
    var s = "b" === "ab".substr(-1) ? function(t, e, r) {
      return t.substr(e, r)
    } : function(t, e, r) {
      return e < 0 && (e = t.length + e), t.substr(e, r)
    }
  }).call(e, r(132))
}, function(t, e) {
  "use strict";
  e.__esModule = !0, e["default"] = function(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
}, function(t, e, r) {
  var i, n;
  (function(o) {
    /*!
     * VERSION: 1.19.0
     * DATE: 2016-07-14
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
     *
     * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var s = "undefined" != typeof t && t.exports && "undefined" != typeof o ? o : this || window;
    (s._gsQueue || (s._gsQueue = [])).push(function() {
        "use strict";
        s._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, r) {
            var i = function(t) {
                var e, r = [],
                  i = t.length;
                for (e = 0; e !== i; r.push(t[e++]));
                return r
              },
              n = function(t, e, r) {
                var i, n, o = t.cycle;
                for (i in o) n = o[i], t[i] = "function" == typeof n ? n(r, e[r]) : n[r % n.length];
                delete t.cycle
              },
              o = function(t, e, i) {
                r.call(this, t, e, i), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
              },
              s = 1e-10,
              a = r._internals,
              u = a.isSelector,
              h = a.isArray,
              l = o.prototype = r.to({}, .1, {}),
              c = [];
            o.version = "1.19.0", l.constructor = o, l.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = r.killTweensOf, o.getTweensOf = r.getTweensOf, o.lagSmoothing = r.lagSmoothing, o.ticker = r.ticker, o.render = r.render, l.invalidate = function() {
              return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), r.prototype.invalidate.call(this)
            }, l.updateTo = function(t, e) {
              var i, n = this.ratio,
                o = this.vars.immediateRender || t.immediateRender;
              e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
              for (i in t) this.vars[i] = t[i];
              if (this._initted || o)
                if (e) this._initted = !1, o && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && r._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
              } else if (this._initted = !1, this._init(), this._time > 0 || o)
                for (var a, u = 1 / (1 - n), h = this._firstPT; h;) a = h.s + h.c, h.c *= u, h.s = a - h.c, h = h._next;
              return this
            }, l.render = function(t, e, r) {
              this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
              var i, n, o, u, h, l, c, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                _ = this._totalTime,
                v = this._cycle,
                y = this._duration,
                g = this._rawPrevTime;
              if (t >= d - 1e-7 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, n = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (g < 0 || t <= 0 && t >= -1e-7 || g === s && "isPause" !== this.data) && g !== t && (r = !0, g > s && (n = "onReverseComplete")), this._rawPrevTime = f = !e || t || g === t ? t : s)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === y && g > 0) && (n = "onReverseComplete", i = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || r) && (g >= 0 && (r = !0), this._rawPrevTime = f = !e || t || g === t ? t : s)), this._initted || (r = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (u = y + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && _ <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / y, l = this._easeType, c = this._easePower, (1 === l || 3 === l && h >= .5) && (h = 1 - h), 3 === l && (h *= 2), 1 === c ? h *= h : 2 === c ? h *= h * h : 3 === c ? h *= h * h * h : 4 === c && (h *= h * h * h * h), 1 === l ? this.ratio = 1 - h : 2 === l ? this.ratio = h : this._time / y < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / y)), p === this._time && !r && v === this._cycle) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
              if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!r && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = _, this._rawPrevTime = g, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                this._time && !i ? this.ratio = this._ease.getRatio(this._time / y) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              }
              for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, r) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
              this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, r), e || (this._totalTime !== _ || n) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, r), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === y && this._rawPrevTime === s && f !== s && (this._rawPrevTime = 0)))
            }, o.to = function(t, e, r) {
              return new o(t, e, r)
            }, o.from = function(t, e, r) {
              return r.runBackwards = !0, r.immediateRender = 0 != r.immediateRender, new o(t, e, r)
            }, o.fromTo = function(t, e, r, i) {
              return i.startAt = r, i.immediateRender = 0 != i.immediateRender && 0 != r.immediateRender, new o(t, e, i)
            }, o.staggerTo = o.allTo = function(t, e, s, a, l, f, d) {
              a = a || 0;
              var p, _, v, y, g = 0,
                m = [],
                b = function() {
                  s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), l.apply(d || s.callbackScope || this, f || c)
                },
                x = s.cycle,
                T = s.startAt && s.startAt.cycle;
              for (h(t) || ("string" == typeof t && (t = r.selector(t) || t), u(t) && (t = i(t))), t = t || [], a < 0 && (t = i(t), t.reverse(), a *= -1), p = t.length - 1, v = 0; v <= p; v++) {
                _ = {};
                for (y in s) _[y] = s[y];
                if (x && (n(_, t, v), null != _.duration && (e = _.duration, delete _.duration)), T) {
                  T = _.startAt = {};
                  for (y in s.startAt) T[y] = s.startAt[y];
                  n(_.startAt, t, v)
                }
                _.delay = g + (_.delay || 0), v === p && l && (_.onComplete = b), m[v] = new o(t[v], e, _), g += a
              }
              return m
            }, o.staggerFrom = o.allFrom = function(t, e, r, i, n, s, a) {
              return r.runBackwards = !0, r.immediateRender = 0 != r.immediateRender, o.staggerTo(t, e, r, i, n, s, a)
            }, o.staggerFromTo = o.allFromTo = function(t, e, r, i, n, s, a, u) {
              return i.startAt = r, i.immediateRender = 0 != i.immediateRender && 0 != r.immediateRender, o.staggerTo(t, e, i, n, s, a, u)
            }, o.delayedCall = function(t, e, r, i, n) {
              return new o(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: r,
                callbackScope: i,
                onReverseComplete: e,
                onReverseCompleteParams: r,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
              })
            }, o.set = function(t, e) {
              return new o(t, 0, e)
            }, o.isTweening = function(t) {
              return r.getTweensOf(t, !0).length > 0
            };
            var f = function(t, e) {
                for (var i = [], n = 0, o = t._first; o;) o instanceof r ? i[n++] = o : (e && (i[n++] = o), i = i.concat(f(o, e)), n = i.length), o = o._next;
                return i
              },
              d = o.getAllTweens = function(e) {
                return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
              };
            o.killAll = function(t, r, i, n) {
              null == r && (r = !0), null == i && (i = !0);
              var o, s, a, u = d(0 != n),
                h = u.length,
                l = r && i && n;
              for (a = 0; a < h; a++) s = u[a], (l || s instanceof e || (o = s.target === s.vars.onComplete) && i || r && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
            }, o.killChildTweensOf = function(t, e) {
              if (null != t) {
                var n, s, l, c, f, d = a.tweenLookup;
                if ("string" == typeof t && (t = r.selector(t) || t), u(t) && (t = i(t)), h(t))
                  for (c = t.length; --c > -1;) o.killChildTweensOf(t[c], e);
                else {
                  n = [];
                  for (l in d)
                    for (s = d[l].target.parentNode; s;) s === t && (n = n.concat(d[l].tweens)), s = s.parentNode;
                  for (f = n.length, c = 0; c < f; c++) e && n[c].totalTime(n[c].totalDuration()), n[c]._enabled(!1, !1)
                }
              }
            };
            var p = function(t, r, i, n) {
              r = r !== !1, i = i !== !1, n = n !== !1;
              for (var o, s, a = d(n), u = r && i && n, h = a.length; --h > -1;) s = a[h], (u || s instanceof e || (o = s.target === s.vars.onComplete) && i || r && !o) && s.paused(t)
            };
            return o.pauseAll = function(t, e, r) {
              p(!0, t, e, r)
            }, o.resumeAll = function(t, e, r) {
              p(!1, t, e, r)
            }, o.globalTimeScale = function(e) {
              var i = t._rootTimeline,
                n = r.ticker.time;
              return arguments.length ? (e = e || s, i._startTime = n - (n - i._startTime) * i._timeScale / e, i = t._rootFramesTimeline, n = r.ticker.frame, i._startTime = n - (n - i._startTime) * i._timeScale / e, i._timeScale = t._rootTimeline._timeScale = e, e) : i._timeScale
            }, l.progress = function(t, e) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, l.totalProgress = function(t, e) {
              return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, l.time = function(t, e) {
              return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, l.duration = function(e) {
              return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }, l.totalDuration = function(t) {
              return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, l.repeat = function(t) {
              return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, l.repeatDelay = function(t) {
              return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, l.yoyo = function(t) {
              return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, o
          }, !0), s._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, r) {
            var i = function(t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var r, i, n = this.vars;
                for (i in n) r = n[i], h(r) && r.join("").indexOf("{self}") !== -1 && (n[i] = this._swapSelfInParams(r));
                h(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
              },
              n = 1e-10,
              o = r._internals,
              a = i._internals = {},
              u = o.isSelector,
              h = o.isArray,
              l = o.lazyTweens,
              c = o.lazyRender,
              f = s._gsDefine.globals,
              d = function(t) {
                var e, r = {};
                for (e in t) r[e] = t[e];
                return r
              },
              p = function(t, e, r) {
                var i, n, o = t.cycle;
                for (i in o) n = o[i], t[i] = "function" == typeof n ? n.call(e[r], r) : n[r % n.length];
                delete t.cycle
              },
              _ = a.pauseCallback = function() {},
              v = function(t) {
                var e, r = [],
                  i = t.length;
                for (e = 0; e !== i; r.push(t[e++]));
                return r
              },
              y = i.prototype = new e;
            return i.version = "1.19.0", y.constructor = i, y.kill()._gc = y._forcingPlayhead = y._hasPause = !1, y.to = function(t, e, i, n) {
              var o = i.repeat && f.TweenMax || r;
              return e ? this.add(new o(t, e, i), n) : this.set(t, i, n)
            }, y.from = function(t, e, i, n) {
              return this.add((i.repeat && f.TweenMax || r).from(t, e, i), n)
            }, y.fromTo = function(t, e, i, n, o) {
              var s = n.repeat && f.TweenMax || r;
              return e ? this.add(s.fromTo(t, e, i, n), o) : this.set(t, n, o)
            }, y.staggerTo = function(t, e, n, o, s, a, h, l) {
              var c, f, _ = new i({
                  onComplete: a,
                  onCompleteParams: h,
                  callbackScope: l,
                  smoothChildTiming: this.smoothChildTiming
                }),
                y = n.cycle;
              for ("string" == typeof t && (t = r.selector(t) || t), t = t || [], u(t) && (t = v(t)), o = o || 0, o < 0 && (t = v(t), t.reverse(), o *= -1), f = 0; f < t.length; f++) c = d(n), c.startAt && (c.startAt = d(c.startAt), c.startAt.cycle && p(c.startAt, t, f)), y && (p(c, t, f), null != c.duration && (e = c.duration, delete c.duration)), _.to(t[f], e, c, f * o);
              return this.add(_, s)
            }, y.staggerFrom = function(t, e, r, i, n, o, s, a) {
              return r.immediateRender = 0 != r.immediateRender, r.runBackwards = !0, this.staggerTo(t, e, r, i, n, o, s, a)
            }, y.staggerFromTo = function(t, e, r, i, n, o, s, a, u) {
              return i.startAt = r, i.immediateRender = 0 != i.immediateRender && 0 != r.immediateRender, this.staggerTo(t, e, i, n, o, s, a, u)
            }, y.call = function(t, e, i, n) {
              return this.add(r.delayedCall(0, t, e, i), n)
            }, y.set = function(t, e, i) {
              return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new r(t, 0, e), i)
            }, i.exportRoot = function(t, e) {
              t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
              var n, o, s = new i(t),
                a = s._timeline;
              for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, n = a._first; n;) o = n._next, e && n instanceof r && n.target === n.vars.onComplete || s.add(n, n._startTime - n._delay), n = o;
              return a.add(s, 0), s
            }, y.add = function(n, o, s, a) {
              var u, l, c, f, d, p;
              if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, n)), !(n instanceof t)) {
                if (n instanceof Array || n && n.push && h(n)) {
                  for (s = s || "normal", a = a || 0, u = o, l = n.length, c = 0; c < l; c++) h(f = n[c]) && (f = new i({
                    tweens: f
                  })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === s ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), u += a;
                  return this._uncache(!0)
                }
                if ("string" == typeof n) return this.addLabel(n, o);
                if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                n = r.delayedCall(0, n)
              }
              if (e.prototype.add.call(this, n, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (d = this, p = d.rawTime() > n._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
              return this
            }, y.remove = function(e) {
              if (e instanceof t) {
                this._remove(e, !1);
                var r = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : r._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
              }
              if (e instanceof Array || e && e.push && h(e)) {
                for (var i = e.length; --i > -1;) this.remove(e[i]);
                return this
              }
              return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, y._remove = function(t, r) {
              e.prototype._remove.call(this, t, r);
              var i = this._last;
              return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, y.append = function(t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, y.insert = y.insertMultiple = function(t, e, r, i) {
              return this.add(t, e || 0, r, i)
            }, y.appendMultiple = function(t, e, r, i) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), r, i)
            }, y.addLabel = function(t, e) {
              return this._labels[t] = this._parseTimeOrLabel(e), this
            }, y.addPause = function(t, e, i, n) {
              var o = r.delayedCall(0, _, i, n || this);
              return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
            }, y.removeLabel = function(t) {
              return delete this._labels[t], this
            }, y.getLabelTime = function(t) {
              return null != this._labels[t] ? this._labels[t] : -1
            }, y._parseTimeOrLabel = function(e, r, i, n) {
              var o;
              if (n instanceof t && n.timeline === this) this.remove(n);
              else if (n && (n instanceof Array || n.push && h(n)))
                for (o = n.length; --o > -1;) n[o] instanceof t && n[o].timeline === this && this.remove(n[o]);
              if ("string" == typeof r) return this._parseTimeOrLabel(r, i && "number" == typeof e && null == this._labels[r] ? e - this.duration() : 0, i);
              if (r = r || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
              else {
                if (o = e.indexOf("="), o === -1) return null == this._labels[e] ? i ? this._labels[e] = this.duration() + r : r : this._labels[e] + r;
                r = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, i) : this.duration()
              }
              return Number(e) + r
            }, y.seek = function(t, e) {
              return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, y.stop = function() {
              return this.paused(!0)
            }, y.gotoAndPlay = function(t, e) {
              return this.play(t, e)
            }, y.gotoAndStop = function(t, e) {
              return this.pause(t, e)
            }, y.render = function(t, e, r) {
              this._gc && this._enabled(!0, !1);
              var i, o, s, a, u, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                _ = this._startTime,
                v = this._timeScale,
                y = this._paused;
              if (t >= d - 1e-7) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > n && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = d + 1e-4;
              else if (t < 1e-7)
                if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                else {
                  if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && o)
                    for (i = this._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
                  t = 0, this._initted || (u = !0)
                }
              else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                  if (t >= p)
                    for (i = this._first; i && i._startTime <= t && !h;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (h = i), i = i._next;
                  else
                    for (i = this._last; i && i._startTime >= t && !h;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (h = i), i = i._prev;
                  h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
              }
              if (this._time !== p && this._first || r || u || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), f = this._time, f >= p)
                  for (i = this._first; i && (s = i._next, f === this._time && (!this._paused || y));)(i._active || i._startTime <= f && !i._paused && !i._gc) && (h === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, r) : i.render((t - i._startTime) * i._timeScale, e, r)), i = s;
                else
                  for (i = this._last; i && (s = i._prev, f === this._time && (!this._paused || y));) {
                    if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                      if (h === i) {
                        for (h = i._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, r), h = h._prev;
                        h = null, this.pause()
                      }
                      i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, r) : i.render((t - i._startTime) * i._timeScale, e, r)
                    }
                    i = s
                  }
                this._onUpdate && (e || (l.length && c(), this._callback("onUpdate"))), a && (this._gc || _ !== this._startTime && v === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (o && (l.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
              }
            }, y._hasPausedChild = function() {
              for (var t = this._first; t;) {
                if (t._paused || t instanceof i && t._hasPausedChild()) return !0;
                t = t._next
              }
              return !1
            }, y.getChildren = function(t, e, i, n) {
              n = n || -9999999999;
              for (var o = [], s = this._first, a = 0; s;) s._startTime < n || (s instanceof r ? e !== !1 && (o[a++] = s) : (i !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, i)), a = o.length))), s = s._next;
              return o
            }, y.getTweensOf = function(t, e) {
              var i, n, o = this._gc,
                s = [],
                a = 0;
              for (o && this._enabled(!0, !0), i = r.getTweensOf(t), n = i.length; --n > -1;)(i[n].timeline === this || e && this._contains(i[n])) && (s[a++] = i[n]);
              return o && this._enabled(!1, !0), s
            }, y.recent = function() {
              return this._recent
            }, y._contains = function(t) {
              for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
              }
              return !1
            }, y.shiftChildren = function(t, e, r) {
              r = r || 0;
              for (var i, n = this._first, o = this._labels; n;) n._startTime >= r && (n._startTime += t), n = n._next;
              if (e)
                for (i in o) o[i] >= r && (o[i] += t);
              return this._uncache(!0)
            }, y._kill = function(t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (var r = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = r.length, n = !1; --i > -1;) r[i]._kill(t, e) && (n = !0);
              return n
            }, y.clear = function(t) {
              var e = this.getChildren(!1, !0, !0),
                r = e.length;
              for (this._time = this._totalTime = 0; --r > -1;) e[r]._enabled(!1, !1);
              return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, y.invalidate = function() {
              for (var e = this._first; e;) e.invalidate(), e = e._next;
              return t.prototype.invalidate.call(this)
            }, y._enabled = function(t, r) {
              if (t === this._gc)
                for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
              return e.prototype._enabled.call(this, t, r)
            }, y.totalTime = function(e, r, i) {
              this._forcingPlayhead = !0;
              var n = t.prototype.totalTime.apply(this, arguments);
              return this._forcingPlayhead = !1, n
            }, y.duration = function(t) {
              return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, y.totalDuration = function(t) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (var e, r, i = 0, n = this._last, o = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > o && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : o = n._startTime, n._startTime < 0 && !n._paused && (i -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), o = 0), r = n._startTime + n._totalDuration / n._timeScale, r > i && (i = r), n = e;
                  this._duration = this._totalDuration = i, this._dirty = !1
                }
                return this._totalDuration
              }
              return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, y.paused = function(e) {
              if (!e)
                for (var r = this._first, i = this._time; r;) r._startTime === i && "isPause" === r.data && (r._rawPrevTime = 0), r = r._next;
              return t.prototype.paused.apply(this, arguments)
            }, y.usesFrames = function() {
              for (var e = this._timeline; e._timeline;) e = e._timeline;
              return e === t._rootFramesTimeline
            }, y.rawTime = function() {
              return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, i
          }, !0), s._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, r) {
            var i = function(e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
              },
              n = 1e-10,
              o = e._internals,
              a = o.lazyTweens,
              u = o.lazyRender,
              h = s._gsDefine.globals,
              l = new r(null, null, 1, 0),
              c = i.prototype = new t;
            return c.constructor = i, c.kill()._gc = !1, i.version = "1.19.0", c.invalidate = function() {
              return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, c.addCallback = function(t, r, i, n) {
              return this.add(e.delayedCall(0, t, i, n), r)
            }, c.removeCallback = function(t, e) {
              if (t)
                if (null == e) this._kill(null, t);
                else
                  for (var r = this.getTweensOf(t, !1), i = r.length, n = this._parseTimeOrLabel(e); --i > -1;) r[i]._startTime === n && r[i]._enabled(!1, !1);
              return this
            }, c.removePause = function(e) {
              return this.removeCallback(t._internals.pauseCallback, e)
            }, c.tweenTo = function(t, r) {
              r = r || {};
              var i, n, o, s = {
                  ease: l,
                  useFrames: this.usesFrames(),
                  immediateRender: !1
                },
                a = r.repeat && h.TweenMax || e;
              for (n in r) s[n] = r[n];
              return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, i, s), s.onStart = function() {
                o.target.paused(!0), o.vars.time !== o.target.time() && i === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), r.onStart && o._callback("onStart")
              }, o
            }, c.tweenFromTo = function(t, e, r) {
              r = r || {}, t = this._parseTimeOrLabel(t), r.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
              }, r.immediateRender = r.immediateRender !== !1;
              var i = this.tweenTo(e, r);
              return i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
            }, c.render = function(t, e, r) {
              this._gc && this._enabled(!0, !1);
              var i, o, s, h, l, c, f, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
                _ = this._duration,
                v = this._time,
                y = this._totalTime,
                g = this._startTime,
                m = this._timeScale,
                b = this._rawPrevTime,
                x = this._paused,
                T = this._cycle;
              if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || b < 0 || b === n) && b !== t && this._first && (l = !0, b > n && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = _, t = _ + 1e-4);
              else if (t < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== v || 0 === _ && b !== n && (b > 0 || t < 0 && b >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, h = "onReverseComplete") : b >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                else {
                  if (this._rawPrevTime = _ || !e || t || this._rawPrevTime === t ? t : n, 0 === t && o)
                    for (i = this._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
                  t = 0, this._initted || (l = !0)
                }
              else if (0 === _ && b < 0 && (l = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = _ + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && y <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? (this._time = _, t = _ + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if (t = this._time, t >= v)
                  for (i = this._first; i && i._startTime <= t && !f;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (f = i), i = i._next;
                else
                  for (i = this._last; i && i._startTime >= t && !f;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (f = i), i = i._prev;
                f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
              }
              if (this._cycle !== T && !this._locked) {
                var w = this._yoyo && 0 !== (1 & T),
                  E = w === (this._yoyo && 0 !== (1 & this._cycle)),
                  O = this._totalTime,
                  P = this._cycle,
                  S = this._rawPrevTime,
                  M = this._time;
                if (this._totalTime = T * _, this._cycle < T ? w = !w : this._totalTime += _, this._time = v, this._rawPrevTime = 0 === _ ? b - 1e-4 : b, this._cycle = T, this._locked = !0, v = w ? 0 : _, this.render(v, e, 0 === _), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), v !== this._time) return;
                if (E && (v = w ? _ + 1e-4 : -1e-4, this.render(v, !0, !1)), this._locked = !1, this._paused && !x) return;
                this._time = M, this._totalTime = O, this._cycle = P, this._rawPrevTime = S
              }
              if (!(this._time !== v && this._first || r || l || f)) return void(y !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
              if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== y && t > 0 && (this._active = !0), 0 === y && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), d = this._time, d >= v)
                for (i = this._first; i && (s = i._next, d === this._time && (!this._paused || x));)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (f === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, r) : i.render((t - i._startTime) * i._timeScale, e, r)), i = s;
              else
                for (i = this._last; i && (s = i._prev, d === this._time && (!this._paused || x));) {
                  if (i._active || i._startTime <= v && !i._paused && !i._gc) {
                    if (f === i) {
                      for (f = i._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, r), f = f._prev;
                      f = null, this.pause()
                    }
                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, r) : i.render((t - i._startTime) * i._timeScale, e, r)
                  }
                  i = s
                }
              this._onUpdate && (e || (a.length && u(), this._callback("onUpdate"))), h && (this._locked || this._gc || g !== this._startTime && m === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (o && (a.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
            }, c.getActive = function(t, e, r) {
              null == t && (t = !0), null == e && (e = !0), null == r && (r = !1);
              var i, n, o = [],
                s = this.getChildren(t, e, r),
                a = 0,
                u = s.length;
              for (i = 0; i < u; i++) n = s[i], n.isActive() && (o[a++] = n);
              return o
            }, c.getLabelAfter = function(t) {
              t || 0 !== t && (t = this._time);
              var e, r = this.getLabelsArray(),
                i = r.length;
              for (e = 0; e < i; e++)
                if (r[e].time > t) return r[e].name;
              return null
            }, c.getLabelBefore = function(t) {
              null == t && (t = this._time);
              for (var e = this.getLabelsArray(), r = e.length; --r > -1;)
                if (e[r].time < t) return e[r].name;
              return null
            }, c.getLabelsArray = function() {
              var t, e = [],
                r = 0;
              for (t in this._labels) e[r++] = {
                time: this._labels[t],
                name: t
              };
              return e.sort(function(t, e) {
                return t.time - e.time
              }), e
            }, c.progress = function(t, e) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, c.totalProgress = function(t, e) {
              return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, c.totalDuration = function(e) {
              return arguments.length ? this._repeat !== -1 && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, c.time = function(t, e) {
              return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, c.repeat = function(t) {
              return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, c.repeatDelay = function(t) {
              return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, c.yoyo = function(t) {
              return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, c.currentLabel = function(t) {
              return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
          }, !0),
          function() {
            var t = 180 / Math.PI,
              e = [],
              r = [],
              i = [],
              n = {},
              o = s._gsDefine.globals,
              a = function(t, e, r, i) {
                r === i && (r = i - (i - e) / 1e6), t === e && (e = t + (r - t) / 1e6), this.a = t, this.b = e, this.c = r, this.d = i, this.da = i - t, this.ca = r - t, this.ba = e - t
              },
              u = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
              h = function(t, e, r, i) {
                var n = {
                    a: t
                  },
                  o = {},
                  s = {},
                  a = {
                    c: i
                  },
                  u = (t + e) / 2,
                  h = (e + r) / 2,
                  l = (r + i) / 2,
                  c = (u + h) / 2,
                  f = (h + l) / 2,
                  d = (f - c) / 8;
                return n.b = u + (t - u) / 4, o.b = c + d, n.c = o.a = (n.b + o.b) / 2, o.c = s.a = (c + f) / 2, s.b = f - d, a.b = l + (i - l) / 4, s.c = a.a = (s.b + a.b) / 2, [n, o, s, a]
              },
              l = function(t, n, o, s, a) {
                var u, l, c, f, d, p, _, v, y, g, m, b, x, T = t.length - 1,
                  w = 0,
                  E = t[0].a;
                for (u = 0; u < T; u++) d = t[w], l = d.a, c = d.d, f = t[w + 1].d, a ? (m = e[u], b = r[u], x = (b + m) * n * .25 / (s ? .5 : i[u] || .5), p = c - (c - l) * (s ? .5 * n : 0 !== m ? x / m : 0), _ = c + (f - c) * (s ? .5 * n : 0 !== b ? x / b : 0), v = c - (p + ((_ - p) * (3 * m / (m + b) + .5) / 4 || 0))) : (p = c - (c - l) * n * .5, _ = c + (f - c) * n * .5, v = c - (p + _) / 2), p += v, _ += v, d.c = y = p, 0 !== u ? d.b = E : d.b = E = d.a + .6 * (d.c - d.a), d.da = c - l, d.ca = y - l, d.ba = E - l, o ? (g = h(l, E, y, c), t.splice(w, 1, g[0], g[1], g[2], g[3]), w += 4) : w++, E = _;
                d = t[w], d.b = E, d.c = E + .4 * (d.d - E), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = E - d.a, o && (g = h(d.a, E, d.c, d.d), t.splice(w, 1, g[0], g[1], g[2], g[3]))
              },
              c = function(t, i, n, o) {
                var s, u, h, l, c, f, d = [];
                if (o)
                  for (t = [o].concat(t), u = t.length; --u > -1;) "string" == typeof(f = t[u][i]) && "=" === f.charAt(1) && (t[u][i] = o[i] + Number(f.charAt(0) + f.substr(2)));
                if (s = t.length - 2, s < 0) return d[0] = new a(t[0][i], 0, 0, t[s < -1 ? 0 : 1][i]), d;
                for (u = 0; u < s; u++) h = t[u][i], l = t[u + 1][i], d[u] = new a(h, 0, 0, l), n && (c = t[u + 2][i], e[u] = (e[u] || 0) + (l - h) * (l - h), r[u] = (r[u] || 0) + (c - l) * (c - l));
                return d[u] = new a(t[u][i], 0, 0, t[u + 1][i]), d
              },
              f = function(t, o, s, a, h, f) {
                var d, p, _, v, y, g, m, b, x = {},
                  T = [],
                  w = f || t[0];
                h = "string" == typeof h ? "," + h + "," : u, null == o && (o = 1);
                for (p in t[0]) T.push(p);
                if (t.length > 1) {
                  for (b = t[t.length - 1], m = !0, d = T.length; --d > -1;)
                    if (p = T[d], Math.abs(w[p] - b[p]) > .05) {
                      m = !1;
                      break
                    }
                  m && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                }
                for (e.length = r.length = i.length = 0, d = T.length; --d > -1;) p = T[d], n[p] = h.indexOf("," + p + ",") !== -1, x[p] = c(t, p, n[p], f);
                for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), r[d] = Math.sqrt(r[d]);
                if (!a) {
                  for (d = T.length; --d > -1;)
                    if (n[p])
                      for (_ = x[T[d]], g = _.length - 1, v = 0; v < g; v++) y = _[v + 1].da / r[v] + _[v].da / e[v] || 0, i[v] = (i[v] || 0) + y * y;
                  for (d = i.length; --d > -1;) i[d] = Math.sqrt(i[d])
                }
                for (d = T.length, v = s ? 4 : 1; --d > -1;) p = T[d], _ = x[p], l(_, o, s, a, n[p]), m && (_.splice(0, v), _.splice(_.length - v, v));
                return x
              },
              d = function(t, e, r) {
                e = e || "soft";
                var i, n, o, s, u, h, l, c, f, d, p, _ = {},
                  v = "cubic" === e ? 3 : 2,
                  y = "soft" === e,
                  g = [];
                if (y && r && (t = [r].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                for (f in t[0]) g.push(f);
                for (h = g.length; --h > -1;) {
                  for (f = g[h], _[f] = u = [], d = 0, c = t.length, l = 0; l < c; l++) i = null == r ? t[l][f] : "string" == typeof(p = t[l][f]) && "=" === p.charAt(1) ? r[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), y && l > 1 && l < c - 1 && (u[d++] = (i + u[d - 2]) / 2), u[d++] = i;
                  for (c = d - v + 1, d = 0, l = 0; l < c; l += v) i = u[l], n = u[l + 1], o = u[l + 2], s = 2 === v ? 0 : u[l + 3], u[d++] = p = 3 === v ? new a(i, n, o, s) : new a(i, (2 * n + i) / 3, (2 * n + o) / 3, o);
                  u.length = d
                }
                return _
              },
              p = function(t, e, r) {
                for (var i, n, o, s, a, u, h, l, c, f, d, p = 1 / r, _ = t.length; --_ > -1;)
                  for (f = t[_], o = f.a, s = f.d - o, a = f.c - o, u = f.b - o, i = n = 0, l = 1; l <= r; l++) h = p * l, c = 1 - h, i = n - (n = (h * h * s + 3 * c * (h * a + c * u)) * h), d = _ * r + l - 1, e[d] = (e[d] || 0) + i * i
              },
              _ = function(t, e) {
                e = e >> 0 || 6;
                var r, i, n, o, s = [],
                  a = [],
                  u = 0,
                  h = 0,
                  l = e - 1,
                  c = [],
                  f = [];
                for (r in t) p(t[r], s, e);
                for (n = s.length, i = 0; i < n; i++) u += Math.sqrt(s[i]), o = i % e, f[o] = u, o === l && (h += u, o = i / e >> 0, c[o] = f, a[o] = h, u = 0, f = []);
                return {
                  length: h,
                  lengths: a,
                  segments: c
                }
              },
              v = s._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                global: !0,
                init: function(t, e, r) {
                  this._target = t, e instanceof Array && (e = {
                    values: e
                  }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                  var i, n, o, s, a, u = e.values || [],
                    h = {},
                    l = u[0],
                    c = e.autoRotate || r.vars.orientToBezier;
                  this._autoRotate = c ? c instanceof Array ? c : [
                    ["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]
                  ] : null;
                  for (i in l) this._props.push(i);
                  for (o = this._props.length; --o > -1;) i = this._props[o], this._overwriteProps.push(i), n = this._func[i] = "function" == typeof t[i], h[i] = n ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), a || h[i] !== u[0][i] && (a = h);
                  if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(u, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(u, e.type, h), this._segCount = this._beziers[i].length, this._timeRes) {
                    var p = _(this._beziers, this._timeRes);
                    this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                  }
                  if (c = this._autoRotate)
                    for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), o = c.length; --o > -1;) {
                      for (s = 0; s < 3; s++) i = c[o][s], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                      i = c[o][2], this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                    }
                  return this._startRatio = r.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                  var r, i, n, o, s, a, u, h, l, c, f = this._segCount,
                    d = this._func,
                    p = this._target,
                    _ = e !== this._startRatio;
                  if (this._timeRes) {
                    if (l = this._lengths, c = this._curSeg, e *= this._length, n = this._li, e > this._l2 && n < f - 1) {
                      for (h = f - 1; n < h && (this._l2 = l[++n]) <= e;);
                      this._l1 = l[n - 1], this._li = n, this._curSeg = c = this._segments[n], this._s2 = c[this._s1 = this._si = 0]
                    } else if (e < this._l1 && n > 0) {
                      for (; n > 0 && (this._l1 = l[--n]) >= e;);
                      0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = l[n], this._li = n, this._curSeg = c = this._segments[n], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (r = n, e -= this._l1, n = this._si, e > this._s2 && n < c.length - 1) {
                      for (h = c.length - 1; n < h && (this._s2 = c[++n]) <= e;);
                      this._s1 = c[n - 1], this._si = n
                    } else if (e < this._s1 && n > 0) {
                      for (; n > 0 && (this._s1 = c[--n]) >= e;);
                      0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = c[n], this._si = n
                    }
                    a = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                  } else r = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - r * (1 / f)) * f;
                  for (i = 1 - a, n = this._props.length; --n > -1;) o = this._props[n], s = this._beziers[o][r], u = (a * a * s.da + 3 * i * (a * s.ca + i * s.ba)) * a + s.a, this._mod[o] && (u = this._mod[o](u, p)), d[o] ? p[o](u) : p[o] = u;
                  if (this._autoRotate) {
                    var v, y, g, m, b, x, T, w = this._autoRotate;
                    for (n = w.length; --n > -1;) o = w[n][2], x = w[n][3] || 0, T = w[n][4] === !0 ? 1 : t, s = this._beziers[w[n][0]], v = this._beziers[w[n][1]], s && v && (s = s[r], v = v[r], y = s.a + (s.b - s.a) * a, m = s.b + (s.c - s.b) * a, y += (m - y) * a, m += (s.c + (s.d - s.c) * a - m) * a, g = v.a + (v.b - v.a) * a, b = v.b + (v.c - v.b) * a, g += (b - g) * a, b += (v.c + (v.d - v.c) * a - b) * a, u = _ ? Math.atan2(b - g, m - y) * T + x : this._initialRotations[n], this._mod[o] && (u = this._mod[o](u, p)), d[o] ? p[o](u) : p[o] = u)
                  }
                }
              }),
              y = v.prototype;
            v.bezierThrough = f, v.cubicToQuadratic = h, v._autoCSS = !0, v.quadraticToCubic = function(t, e, r) {
              return new a(t, (2 * e + t) / 3, (2 * e + r) / 3, r)
            }, v._cssRegister = function() {
              var t = o.CSSPlugin;
              if (t) {
                var e = t._internals,
                  r = e._parseToProxy,
                  i = e._setPluginRatio,
                  n = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                  parser: function(t, e, o, s, a, u) {
                    e instanceof Array && (e = {
                      values: e
                    }), u = new v;
                    var h, l, c, f = e.values,
                      d = f.length - 1,
                      p = [],
                      _ = {};
                    if (d < 0) return a;
                    for (h = 0; h <= d; h++) c = r(t, f[h], s, a, u, d !== h), p[h] = c.end;
                    for (l in e) _[l] = e[l];
                    return _.values = p, a = new n(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = u, a.setRatio = i, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (h = _.autoRotate === !0 ? 0 : Number(_.autoRotate), _.autoRotate = null != c.end.left ? [
                      ["left", "top", "rotation", h, !1]
                    ] : null != c.end.x && [
                      ["x", "y", "rotation", h, !1]
                    ]), _.autoRotate && (s._transform || s._enableTransforms(!1), c.autoRotate = s._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), u._onInitTween(c.proxy, _, s._tween), a
                  }
                })
              }
            }, y._mod = function(t) {
              for (var e, r = this._overwriteProps, i = r.length; --i > -1;) e = t[r[i]], e && "function" == typeof e && (this._mod[r[i]] = e)
            }, y._kill = function(t) {
              var e, r, i = this._props;
              for (e in this._beziers)
                if (e in t)
                  for (delete this._beziers[e], delete this._func[e], r = i.length; --r > -1;) i[r] === e && i.splice(r, 1);
              if (i = this._autoRotate)
                for (r = i.length; --r > -1;) t[i[r][2]] && i.splice(r, 1);
              return this._super._kill.call(this, t)
            }
          }(), s._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var r, i, n, o, a = function() {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
              },
              u = s._gsDefine.globals,
              h = {},
              l = a.prototype = new t("css");
            l.constructor = a, a.version = "1.19.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, l = "px", a.suffixMap = {
              top: l,
              right: l,
              bottom: l,
              left: l,
              width: l,
              height: l,
              fontSize: l,
              padding: l,
              margin: l,
              perspective: l,
              lineHeight: ""
            };
            var c, f, d, p, _, v, y, g, m = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
              b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
              x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
              T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
              w = /(?:\d|\-|\+|=|#|\.)*/g,
              E = /opacity *= *([^)]*)/i,
              O = /opacity:([^;]*)/i,
              P = /alpha\(opacity *=.+?\)/i,
              S = /^(rgb|hsl)/,
              M = /([A-Z])/g,
              C = /-([a-z])/gi,
              R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
              A = function(t, e) {
                return e.toUpperCase()
              },
              D = /(?:Left|Right|Width)/i,
              I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
              L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
              k = /,(?=[^\)]*(?:\(|$))/gi,
              N = /[\s,\(]/i,
              j = Math.PI / 180,
              F = 180 / Math.PI,
              B = {},
              U = document,
              X = function(t) {
                return U.createElementNS ? U.createElementNS("http://www.w3.org/1999/xhtml", t) : U.createElement(t)
              },
              W = X("div"),
              z = X("img"),
              Y = a._internals = {
                _specialProps: h
              },
              G = navigator.userAgent,
              H = function() {
                var t = G.indexOf("Android"),
                  e = X("a");
                return d = G.indexOf("Safari") !== -1 && G.indexOf("Chrome") === -1 && (t === -1 || Number(G.substr(t + 8, 1)) > 3), _ = d && Number(G.substr(G.indexOf("Version/") + 8, 1)) < 6, p = G.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
              }(),
              V = function(t) {
                return E.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
              },
              q = function(t) {
                window.console && console.log(t)
              },
              Z = "",
              K = "",
              J = function(t, e) {
                e = e || W;
                var r, i, n = e.style;
                if (void 0 !== n[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === n[r[i] + t];);
                return i >= 0 ? (K = 3 === i ? "ms" : r[i], Z = "-" + K.toLowerCase() + "-", K + t) : null
              },
              Q = U.defaultView ? U.defaultView.getComputedStyle : function() {},
              $ = a.getStyle = function(t, e, r, i, n) {
                var o;
                return H || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (r = r || Q(t)) ? o = r[e] || r.getPropertyValue(e) || r.getPropertyValue(e.replace(M, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == n || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : n) : V(t)
              },
              tt = Y.convertToPixels = function(t, r, i, n, o) {
                if ("px" === n || !n) return i;
                if ("auto" === n || !i) return 0;
                var s, u, h, l = D.test(r),
                  c = t,
                  f = W.style,
                  d = i < 0,
                  p = 1 === i;
                if (d && (i = -i), p && (i *= 100), "%" === n && r.indexOf("border") !== -1) s = i / 100 * (l ? t.clientWidth : t.clientHeight);
                else {
                  if (f.cssText = "border:0 solid red;position:" + $(t, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) f[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                  else {
                    if (c = t.parentNode || U.body, u = c._gsCache, h = e.ticker.frame, u && l && u.time === h) return u.width * i / 100;
                    f[l ? "width" : "height"] = i + n
                  }
                  c.appendChild(W), s = parseFloat(W[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(W), l && "%" === n && a.cacheWidths !== !1 && (u = c._gsCache = c._gsCache || {}, u.time = h, u.width = s / i * 100), 0 !== s || o || (s = tt(t, r, i, n, !0))
                }
                return p && (s /= 100), d ? -s : s
              },
              et = Y.calculateOffset = function(t, e, r) {
                if ("absolute" !== $(t, "position", r)) return 0;
                var i = "left" === e ? "Left" : "Top",
                  n = $(t, "margin" + i, r);
                return t["offset" + i] - (tt(t, e, parseFloat(n), n.replace(w, "")) || 0)
              },
              rt = function(t, e) {
                var r, i, n, o = {};
                if (e = e || Q(t, null))
                  if (r = e.length)
                    for (; --r > -1;) n = e[r], n.indexOf("-transform") !== -1 && Ct !== n || (o[n.replace(C, A)] = e.getPropertyValue(n));
                  else
                    for (r in e) r.indexOf("Transform") !== -1 && Mt !== r || (o[r] = e[r]);
                else if (e = t.currentStyle || t.style)
                  for (r in e) "string" == typeof r && void 0 === o[r] && (o[r.replace(C, A)] = e[r]);
                return H || (o.opacity = V(t)), i = Wt(t, e, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, At && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
              },
              it = function(t, e, r, i, n) {
                var o, s, a, u = {},
                  h = t.style;
                for (s in r) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = r[s]) || n && n[s]) && s.indexOf("Origin") === -1 && ("number" != typeof o && "string" != typeof o || (u[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(T, "") ? o : 0 : et(t, s), void 0 !== h[s] && (a = new gt(h, s, h[s], a))));
                if (i)
                  for (s in i) "className" !== s && (u[s] = i[s]);
                return {
                  difs: u,
                  firstMPT: a
                }
              },
              nt = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
              },
              ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
              st = function(t, e, r) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (r || Q(t))[e] || 0;
                if (t.getBBox && Bt(t)) return t.getBBox()[e] || 0;
                var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                  n = nt[e],
                  o = n.length;
                for (r = r || Q(t, null); --o > -1;) i -= parseFloat($(t, "padding" + n[o], r, !0)) || 0, i -= parseFloat($(t, "border" + n[o] + "Width", r, !0)) || 0;
                return i
              },
              at = function(t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                null != t && "" !== t || (t = "0 0");
                var r, i = t.split(" "),
                  n = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : i[0],
                  o = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : i[1];
                if (i.length > 3 && !e) {
                  for (i = t.split(", ").join(",").split(","), t = [], r = 0; r < i.length; r++) t.push(at(i[r]));
                  return t.join(",")
                }
                return null == o ? o = "center" === n ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === n || isNaN(parseFloat(n)) && (n + "").indexOf("=") === -1) && (n = "50%"), t = n + " " + o + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = n.indexOf("%") !== -1, e.oyp = o.indexOf("%") !== -1, e.oxr = "=" === n.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(n.replace(T, "")), e.oy = parseFloat(o.replace(T, "")), e.v = t), e || t
              },
              ut = function(t, e) {
                return "function" == typeof t && (t = t(g, y)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
              },
              ht = function(t, e) {
                return "function" == typeof t && (t = t(g, y)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
              },
              lt = function(t, e, r, i) {
                var n, o, s, a, u, h = 1e-6;
                return "function" == typeof t && (t = t(g, y)), null == t ? a = e : "number" == typeof t ? a = t : (n = 360, o = t.split("_"), u = "=" === t.charAt(1), s = (u ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (t.indexOf("rad") === -1 ? 1 : F) - (u ? 0 : e), o.length && (i && (i[r] = e + s), t.indexOf("short") !== -1 && (s %= n, s !== s % (n / 2) && (s = s < 0 ? s + n : s - n)), t.indexOf("_cw") !== -1 && s < 0 ? s = (s + 9999999999 * n) % n - (s / n | 0) * n : t.indexOf("ccw") !== -1 && s > 0 && (s = (s - 9999999999 * n) % n - (s / n | 0) * n)), a = e + s), a < h && a > -h && (a = 0), a
              },
              ct = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
              },
              ft = function(t, e, r) {
                return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0
              },
              dt = a.parseColor = function(t, e) {
                var r, i, n, o, s, a, u, h, l, c, f;
                if (t)
                  if ("number" == typeof t) r = [t >> 16, t >> 8 & 255, 255 & t];
                  else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) r = ct[t];
                    else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), n = t.charAt(2), o = t.charAt(3), t = "#" + i + i + n + n + o + o), t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                      if (r = f = t.match(m), e) {
                        if (t.indexOf("=") !== -1) return t.match(b)
                      } else s = Number(r[0]) % 360 / 360, a = Number(r[1]) / 100, u = Number(r[2]) / 100, n = u <= .5 ? u * (a + 1) : u + a - u * a, i = 2 * u - n, r.length > 3 && (r[3] = Number(t[3])), r[0] = ft(s + 1 / 3, i, n), r[1] = ft(s, i, n), r[2] = ft(s - 1 / 3, i, n);
                    else r = t.match(m) || ct.transparent;
                    r[0] = Number(r[0]), r[1] = Number(r[1]), r[2] = Number(r[2]), r.length > 3 && (r[3] = Number(r[3]))
                  }
                else r = ct.black;
                return e && !f && (i = r[0] / 255, n = r[1] / 255, o = r[2] / 255, h = Math.max(i, n, o), l = Math.min(i, n, o), u = (h + l) / 2, h === l ? s = a = 0 : (c = h - l, a = u > .5 ? c / (2 - h - l) : c / (h + l), s = h === i ? (n - o) / c + (n < o ? 6 : 0) : h === n ? (o - i) / c + 2 : (i - n) / c + 4, s *= 60), r[0] = s + .5 | 0, r[1] = 100 * a + .5 | 0, r[2] = 100 * u + .5 | 0), r
              },
              pt = function(t, e) {
                var r, i, n, o = t.match(_t) || [],
                  s = 0,
                  a = o.length ? "" : t;
                for (r = 0; r < o.length; r++) i = o[r], n = t.substr(s, t.indexOf(i, s) - s), s += n.length + i.length, i = dt(i, e), 3 === i.length && i.push(1), a += n + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                return a + t.substr(s)
              },
              _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (l in ct) _t += "|" + l + "\\b";
            _t = new RegExp(_t + ")", "gi"), a.colorStringFilter = function(t) {
              var e, r = t[0] + t[1];
              _t.test(r) && (e = r.indexOf("hsl(") !== -1 || r.indexOf("hsla(") !== -1, t[0] = pt(t[0], e), t[1] = pt(t[1], e)), _t.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
            var vt = function(t, e, r, i) {
                if (null == t) return function(t) {
                  return t
                };
                var n, o = e ? (t.match(_t) || [""])[0] : "",
                  s = t.split(o).join("").match(x) || [],
                  a = t.substr(0, t.indexOf(s[0])),
                  u = ")" === t.charAt(t.length - 1) ? ")" : "",
                  h = t.indexOf(" ") !== -1 ? " " : ",",
                  l = s.length,
                  c = l > 0 ? s[0].replace(m, "") : "";
                return l ? n = e ? function(t) {
                  var e, f, d, p;
                  if ("number" == typeof t) t += c;
                  else if (i && k.test(t)) {
                    for (p = t.replace(k, "|").split("|"), d = 0; d < p.length; d++) p[d] = n(p[d]);
                    return p.join(",")
                  }
                  if (e = (t.match(_t) || [o])[0], f = t.split(e).join("").match(x) || [], d = f.length, l > d--)
                    for (; ++d < l;) f[d] = r ? f[(d - 1) / 2 | 0] : s[d];
                  return a + f.join(h) + h + e + u + (t.indexOf("inset") !== -1 ? " inset" : "")
                } : function(t) {
                  var e, o, f;
                  if ("number" == typeof t) t += c;
                  else if (i && k.test(t)) {
                    for (o = t.replace(k, "|").split("|"), f = 0; f < o.length; f++) o[f] = n(o[f]);
                    return o.join(",")
                  }
                  if (e = t.match(x) || [], f = e.length, l > f--)
                    for (; ++f < l;) e[f] = r ? e[(f - 1) / 2 | 0] : s[f];
                  return a + e.join(h) + u
                } : function(t) {
                  return t
                }
              },
              yt = function(t) {
                return t = t.split(","),
                  function(e, r, i, n, o, s, a) {
                    var u, h = (r + "").split(" ");
                    for (a = {}, u = 0; u < 4; u++) a[t[u]] = h[u] = h[u] || h[(u - 1) / 2 >> 0];
                    return n.parse(e, a, o, s)
                  }
              },
              gt = (Y._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, r, i, n, o, s = this.data, a = s.proxy, u = s.firstMPT, h = 1e-6; u;) e = a[u.v], u.r ? e = Math.round(e) : e < h && e > -h && (e = 0), u.t[u.p] = e, u = u._next;
                if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                  for (u = s.firstMPT, o = 1 === t ? "e" : "b"; u;) {
                    if (r = u.t, r.type) {
                      if (1 === r.type) {
                        for (n = r.xs0 + r.s + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                        r[o] = n
                      }
                    } else r[o] = r.s + r.xs0;
                    u = u._next
                  }
              }, function(t, e, r, i, n) {
                this.t = t, this.p = e, this.v = r, this.r = n, i && (i._prev = this, this._next = i)
              }),
              mt = (Y._parseToProxy = function(t, e, r, i, n, o) {
                var s, a, u, h, l, c = i,
                  f = {},
                  d = {},
                  p = r._transform,
                  _ = B;
                for (r._transform = null, B = e, i = l = r.parse(t, e, i, n), B = _, o && (r._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); i && i !== c;) {
                  if (i.type <= 1 && (a = i.p, d[a] = i.s + i.c, f[a] = i.s, o || (h = new gt(i, "s", a, h, i.r), i.c = 0), 1 === i.type))
                    for (s = i.l; --s > 0;) u = "xn" + s, a = i.p + "_" + u, d[a] = i.data[u], f[a] = i[u], o || (h = new gt(i, u, a, h, i.rxp[u]));
                  i = i._next
                }
                return {
                  proxy: f,
                  end: d,
                  firstMPT: h,
                  pt: l
                }
              }, Y.CSSPropTween = function(t, e, i, n, s, a, u, h, l, c, f) {
                this.t = t, this.p = e, this.s = i, this.c = n, this.n = u || e, t instanceof mt || o.push(this.n), this.r = h, this.type = a || 0, l && (this.pr = l, r = !0), this.b = void 0 === c ? i : c, this.e = void 0 === f ? i + n : f, s && (this._next = s, s._prev = this)
              }),
              bt = function(t, e, r, i, n, o) {
                var s = new mt(t, e, r, i - r, n, (-1), o);
                return s.b = r, s.e = s.xs0 = i, s
              },
              xt = a.parseComplex = function(t, e, r, i, n, o, s, u, h, l) {
                r = r || o || "", "function" == typeof i && (i = i(g, y)), s = new mt(t, e, 0, 0, s, l ? 2 : 1, null, (!1), u, r, i), i += "", n && _t.test(i + r) && (i = [r, i], a.colorStringFilter(i), r = i[0], i = i[1]);
                var f, d, p, _, v, x, T, w, E, O, P, S, M, C = r.split(", ").join(",").split(" "),
                  R = i.split(", ").join(",").split(" "),
                  A = C.length,
                  D = c !== !1;
                for (i.indexOf(",") === -1 && r.indexOf(",") === -1 || (C = C.join(" ").replace(k, ", ").split(" "), R = R.join(" ").replace(k, ", ").split(" "), A = C.length), A !== R.length && (C = (o || "").split(" "), A = C.length), s.plugin = h, s.setRatio = l, _t.lastIndex = 0, f = 0; f < A; f++)
                  if (_ = C[f], v = R[f], w = parseFloat(_), w || 0 === w) s.appendXtra("", w, ut(v, w), v.replace(b, ""), D && v.indexOf("px") !== -1, !0);
                  else if (n && _t.test(_)) S = v.indexOf(")") + 1, S = ")" + (S ? v.substr(S) : ""), M = v.indexOf("hsl") !== -1 && H, _ = dt(_, M), v = dt(v, M), E = _.length + v.length > 6, E && !H && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(R[f]).join("transparent")) : (H || (E = !1), M ? s.appendXtra(E ? "hsla(" : "hsl(", _[0], ut(v[0], _[0]), ",", !1, !0).appendXtra("", _[1], ut(v[1], _[1]), "%,", !1).appendXtra("", _[2], ut(v[2], _[2]), E ? "%," : "%" + S, !1) : s.appendXtra(E ? "rgba(" : "rgb(", _[0], v[0] - _[0], ",", !0, !0).appendXtra("", _[1], v[1] - _[1], ",", !0).appendXtra("", _[2], v[2] - _[2], E ? "," : S, !0), E && (_ = _.length < 4 ? 1 : _[3], s.appendXtra("", _, (v.length < 4 ? 1 : v[3]) - _, S, !1))), _t.lastIndex = 0;
                else if (x = _.match(m)) {
                  if (T = v.match(b), !T || T.length !== x.length) return s;
                  for (p = 0, d = 0; d < x.length; d++) P = x[d], O = _.indexOf(P, p), s.appendXtra(_.substr(p, O - p), Number(P), ut(T[d], P), "", D && "px" === _.substr(O + P.length, 2), 0 === d), p = O + P.length;
                  s["xs" + s.l] += _.substr(p)
                } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + v : v;
                if (i.indexOf("=") !== -1 && s.data) {
                  for (S = s.xs0 + s.data.s, f = 1; f < s.l; f++) S += s["xs" + f] + s.data["xn" + f];
                  s.e = S + s["xs" + f]
                }
                return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
              },
              Tt = 9;
            for (l = mt.prototype, l.l = l.pr = 0; --Tt > 0;) l["xn" + Tt] = 0, l["xs" + Tt] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, r, i, n, o) {
              var s = this,
                a = s.l;
              return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", r || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = e + r, s.rxp["xn" + a] = n, s["xn" + a] = e, s.plugin || (s.xfirst = new mt(s, "xn" + a, e, r, s.xfirst || s, 0, s.n, n, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                s: e + r
              }, s.rxp = {}, s.s = e, s.c = r, s.r = n, s)) : (s["xs" + a] += e + (i || ""), s)
            };
            var wt = function(t, e) {
                e = e || {}, this.p = e.prefix ? J(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
              },
              Et = Y._registerComplexSpecialProp = function(t, e, r) {
                "object" != typeof e && (e = {
                  parser: r
                });
                var i, n, o = t.split(","),
                  s = e.defaultValue;
                for (r = r || [s], i = 0; i < o.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = r[i] || s, n = new wt(o[i], e)
              },
              Ot = Y._registerPluginProp = function(t) {
                if (!h[t]) {
                  var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                  Et(t, {
                    parser: function(t, r, i, n, o, s, a) {
                      var l = u.com.greensock.plugins[e];
                      return l ? (l._cssRegister(), h[i].parse(t, r, i, n, o, s, a)) : (q("Error: " + e + " js file not loaded."), o)
                    }
                  })
                }
              };
            l = wt.prototype, l.parseComplex = function(t, e, r, i, n, o) {
              var s, a, u, h, l, c, f = this.keyword;
              if (this.multi && (k.test(r) || k.test(e) ? (a = e.replace(k, "|").split("|"), u = r.replace(k, "|").split("|")) : f && (a = [e], u = [r])), u) {
                for (h = u.length > a.length ? u.length : a.length, s = 0; s < h; s++) e = a[s] = a[s] || this.dflt, r = u[s] = u[s] || this.dflt, f && (l = e.indexOf(f), c = r.indexOf(f), l !== c && (c === -1 ? a[s] = a[s].split(f).join("") : l === -1 && (a[s] += " " + f)));
                e = a.join(", "), r = u.join(", ")
              }
              return xt(t, this.p, e, r, this.clrs, this.dflt, i, this.pr, n, o)
            }, l.parse = function(t, e, r, i, o, s, a) {
              return this.parseComplex(t.style, this.format($(t, this.p, n, !1, this.dflt)), this.format(e), o, s)
            }, a.registerSpecialProp = function(t, e, r) {
              Et(t, {
                parser: function(t, i, n, o, s, a, u) {
                  var h = new mt(t, n, 0, 0, s, 2, n, (!1), r);
                  return h.plugin = a, h.setRatio = e(t, i, o._tween, n), h
                },
                priority: r
              })
            }, a.useSVGTransformAttr = d || p;
            var Pt, St = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
              Mt = J("transform"),
              Ct = Z + "transform",
              Rt = J("transformOrigin"),
              At = null !== J("perspective"),
              Dt = Y.Transform = function() {
                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(a.defaultForce3D === !1 || !At) && (a.defaultForce3D || "auto")
              },
              It = window.SVGElement,
              Lt = function(t, e, r) {
                var i, n = U.createElementNS("http://www.w3.org/2000/svg", t),
                  o = /([a-z])([A-Z])/g;
                for (i in r) n.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), r[i]);
                return e.appendChild(n), n
              },
              kt = U.documentElement,
              Nt = function() {
                var t, e, r, i = v || /Android/i.test(G) && !window.chrome;
                return U.createElementNS && !i && (t = Lt("svg", kt), e = Lt("rect", t, {
                  width: 100,
                  height: 50,
                  x: 100
                }), r = e.getBoundingClientRect().width, e.style[Rt] = "50% 50%", e.style[Mt] = "scaleX(0.5)", i = r === e.getBoundingClientRect().width && !(p && At), kt.removeChild(t)), i
              }(),
              jt = function(t, e, r, i, n, o) {
                var s, u, h, l, c, f, d, p, _, v, y, g, m, b, x = t._gsTransform,
                  T = Xt(t, !0);
                x && (m = x.xOrigin, b = x.yOrigin), (!i || (s = i.split(" ")).length < 2) && (d = t.getBBox(), e = at(e).split(" "), s = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), r.xOrigin = l = parseFloat(s[0]), r.yOrigin = c = parseFloat(s[1]), i && T !== Ut && (f = T[0], d = T[1], p = T[2], _ = T[3], v = T[4], y = T[5], g = f * _ - d * p, u = l * (_ / g) + c * (-p / g) + (p * y - _ * v) / g, h = l * (-d / g) + c * (f / g) - (f * y - d * v) / g, l = r.xOrigin = s[0] = u, c = r.yOrigin = s[1] = h), x && (o && (r.xOffset = x.xOffset, r.yOffset = x.yOffset, x = r), n || n !== !1 && a.defaultSmoothOrigin !== !1 ? (u = l - m, h = c - b, x.xOffset += u * T[0] + h * T[2] - u, x.yOffset += u * T[1] + h * T[3] - h) : x.xOffset = x.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" "))
              },
              Ft = function(t) {
                try {
                  return t.getBBox()
                } catch (t) {}
              },
              Bt = function(t) {
                return !!(It && t.getBBox && t.getCTM && Ft(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
              },
              Ut = [1, 0, 0, 1, 0, 0],
              Xt = function(t, e) {
                var r, i, n, o, s, a, u = t._gsTransform || new Dt,
                  h = 1e5,
                  l = t.style;
                if (Mt ? i = $(t, Ct, null, !0) : t.currentStyle && (i = t.currentStyle.filter.match(I), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), r = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, r && Mt && ((a = "none" === Q(t).display) || !t.parentNode) && (a && (o = l.display, l.display = "block"), t.parentNode || (s = 1, kt.appendChild(t)), i = $(t, Ct, null, !0), r = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, o ? l.display = o : a && Ht(l, "display"), s && kt.removeChild(t)), (u.svg || t.getBBox && Bt(t)) && (r && (l[Mt] + "").indexOf("matrix") !== -1 && (i = l[Mt], r = 0), n = t.getAttribute("transform"), r && n && (n.indexOf("matrix") !== -1 ? (i = n, r = 0) : n.indexOf("translate") !== -1 && (i = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", r = 0))), r) return Ut;
                for (n = (i || "").match(m) || [], Tt = n.length; --Tt > -1;) o = Number(n[Tt]), n[Tt] = (s = o - (o |= 0)) ? (s * h + (s < 0 ? -.5 : .5) | 0) / h + o : o;
                return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
              },
              Wt = Y.getTransform = function(t, r, i, n) {
                if (t._gsTransform && i && !n) return t._gsTransform;
                var o, s, u, h, l, c, f = i ? t._gsTransform || new Dt : new Dt,
                  d = f.scaleX < 0,
                  p = 2e-5,
                  _ = 1e5,
                  v = At ? parseFloat($(t, Rt, r, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                  y = parseFloat(a.defaultTransformPerspective) || 0;
                if (f.svg = !(!t.getBBox || !Bt(t)), f.svg && (jt(t, $(t, Rt, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Pt = a.useSVGTransformAttr || Nt), o = Xt(t), o !== Ut) {
                  if (16 === o.length) {
                    var g, m, b, x, T, w = o[0],
                      E = o[1],
                      O = o[2],
                      P = o[3],
                      S = o[4],
                      M = o[5],
                      C = o[6],
                      R = o[7],
                      A = o[8],
                      D = o[9],
                      I = o[10],
                      L = o[12],
                      k = o[13],
                      N = o[14],
                      j = o[11],
                      B = Math.atan2(C, I);
                    f.zOrigin && (N = -f.zOrigin, L = A * N - o[12], k = D * N - o[13], N = I * N + f.zOrigin - o[14]), f.rotationX = B * F, B && (x = Math.cos(-B), T = Math.sin(-B), g = S * x + A * T, m = M * x + D * T, b = C * x + I * T, A = S * -T + A * x, D = M * -T + D * x, I = C * -T + I * x, j = R * -T + j * x, S = g, M = m, C = b), B = Math.atan2(-O, I), f.rotationY = B * F, B && (x = Math.cos(-B), T = Math.sin(-B), g = w * x - A * T, m = E * x - D * T, b = O * x - I * T, D = E * T + D * x, I = O * T + I * x, j = P * T + j * x, w = g, E = m, O = b), B = Math.atan2(E, w), f.rotation = B * F, B && (x = Math.cos(-B), T = Math.sin(-B), w = w * x + S * T, m = E * x + M * T, M = E * -T + M * x, C = O * -T + C * x, E = m), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (Math.sqrt(w * w + E * E) * _ + .5 | 0) / _, f.scaleY = (Math.sqrt(M * M + D * D) * _ + .5 | 0) / _, f.scaleZ = (Math.sqrt(C * C + I * I) * _ + .5 | 0) / _, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = S || M ? Math.atan2(S, M) * F + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (d ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = j ? 1 / (j < 0 ? -j : j) : 0, f.x = L, f.y = k, f.z = N, f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * S), f.y -= f.yOrigin - (f.yOrigin * E - f.xOrigin * M))
                  } else if (!At || n || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                    var U = o.length >= 6,
                      X = U ? o[0] : 1,
                      W = o[1] || 0,
                      z = o[2] || 0,
                      Y = U ? o[3] : 1;
                    f.x = o[4] || 0, f.y = o[5] || 0, u = Math.sqrt(X * X + W * W), h = Math.sqrt(Y * Y + z * z), l = X || W ? Math.atan2(W, X) * F : f.rotation || 0, c = z || Y ? Math.atan2(z, Y) * F + l : f.skewX || 0, Math.abs(c) > 90 && Math.abs(c) < 270 && (d ? (u *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (h *= -1, c += c <= 0 ? 180 : -180)), f.scaleX = u, f.scaleY = h, f.rotation = l, f.skewX = c, At && (f.rotationX = f.rotationY = f.z = 0, f.perspective = y, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * X + f.yOrigin * z), f.y -= f.yOrigin - (f.xOrigin * W + f.yOrigin * Y))
                  }
                  f.zOrigin = v;
                  for (s in f) f[s] < p && f[s] > -p && (f[s] = 0)
                }
                return i && (t._gsTransform = f, f.svg && (Pt && t.style[Mt] ? e.delayedCall(.001, function() {
                  Ht(t.style, Mt)
                }) : !Pt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                  t.removeAttribute("transform")
                }))), f
              },
              zt = function(t) {
                var e, r, i = this.data,
                  n = -i.rotation * j,
                  o = n + i.skewX * j,
                  s = 1e5,
                  a = (Math.cos(n) * i.scaleX * s | 0) / s,
                  u = (Math.sin(n) * i.scaleX * s | 0) / s,
                  h = (Math.sin(o) * -i.scaleY * s | 0) / s,
                  l = (Math.cos(o) * i.scaleY * s | 0) / s,
                  c = this.t.style,
                  f = this.t.currentStyle;
                if (f) {
                  r = u, u = -h, h = -r, e = f.filter, c.filter = "";
                  var d, p, _ = this.t.offsetWidth,
                    y = this.t.offsetHeight,
                    g = "absolute" !== f.position,
                    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + u + ", M21=" + h + ", M22=" + l,
                    b = i.x + _ * i.xPercent / 100,
                    x = i.y + y * i.yPercent / 100;
                  if (null != i.ox && (d = (i.oxp ? _ * i.ox * .01 : i.ox) - _ / 2, p = (i.oyp ? y * i.oy * .01 : i.oy) - y / 2, b += d - (d * a + p * u), x += p - (d * h + p * l)), g ? (d = _ / 2, p = y / 2, m += ", Dx=" + (d - (d * a + p * u) + b) + ", Dy=" + (p - (d * h + p * l) + x) + ")") : m += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? c.filter = e.replace(L, m) : c.filter = m + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === u && 0 === h && 1 === l && (g && m.indexOf("Dx=0, Dy=0") === -1 || E.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && c.removeAttribute("filter")), !g) {
                    var T, O, P, S = v < 8 ? 1 : -1;
                    for (d = i.ieOffsetX || 0, p = i.ieOffsetY || 0, i.ieOffsetX = Math.round((_ - ((a < 0 ? -a : a) * _ + (u < 0 ? -u : u) * y)) / 2 + b), i.ieOffsetY = Math.round((y - ((l < 0 ? -l : l) * y + (h < 0 ? -h : h) * _)) / 2 + x), Tt = 0; Tt < 4; Tt++) O = ot[Tt], T = f[O], r = T.indexOf("px") !== -1 ? parseFloat(T) : tt(this.t, O, parseFloat(T), T.replace(w, "")) || 0, P = r !== i[O] ? Tt < 2 ? -i.ieOffsetX : -i.ieOffsetY : Tt < 2 ? d - i.ieOffsetX : p - i.ieOffsetY, c[O] = (i[O] = Math.round(r - P * (0 === Tt || 2 === Tt ? 1 : S))) + "px"
                  }
                }
              },
              Yt = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
                var e, r, i, n, o, s, a, u, h, l, c, f, d, _, v, y, g, m, b, x, T, w, E, O = this.data,
                  P = this.t.style,
                  S = O.rotation,
                  M = O.rotationX,
                  C = O.rotationY,
                  R = O.scaleX,
                  A = O.scaleY,
                  D = O.scaleZ,
                  I = O.x,
                  L = O.y,
                  k = O.z,
                  N = O.svg,
                  F = O.perspective,
                  B = O.force3D;
                if (((1 === t || 0 === t) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !k && !F && !C && !M && 1 === D || Pt && N || !At) return void(S || O.skewX || N ? (S *= j, w = O.skewX * j, E = 1e5, e = Math.cos(S) * R, n = Math.sin(S) * R, r = Math.sin(S - w) * -A, o = Math.cos(S - w) * A, w && "simple" === O.skewType && (g = Math.tan(w - O.skewY * j), g = Math.sqrt(1 + g * g), r *= g, o *= g, O.skewY && (g = Math.tan(O.skewY * j), g = Math.sqrt(1 + g * g), e *= g, n *= g)), N && (I += O.xOrigin - (O.xOrigin * e + O.yOrigin * r) + O.xOffset, L += O.yOrigin - (O.xOrigin * n + O.yOrigin * o) + O.yOffset, Pt && (O.xPercent || O.yPercent) && (_ = this.t.getBBox(), I += .01 * O.xPercent * _.width, L += .01 * O.yPercent * _.height), _ = 1e-6, I < _ && I > -_ && (I = 0), L < _ && L > -_ && (L = 0)), b = (e * E | 0) / E + "," + (n * E | 0) / E + "," + (r * E | 0) / E + "," + (o * E | 0) / E + "," + I + "," + L + ")", N && Pt ? this.t.setAttribute("transform", "matrix(" + b) : P[Mt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + b) : P[Mt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + A + "," + I + "," + L + ")");
                if (p && (_ = 1e-4, R < _ && R > -_ && (R = D = 2e-5), A < _ && A > -_ && (A = D = 2e-5), !F || O.z || O.rotationX || O.rotationY || (F = 0)), S || O.skewX) S *= j, v = e = Math.cos(S), y = n = Math.sin(S), O.skewX && (S -= O.skewX * j, v = Math.cos(S), y = Math.sin(S), "simple" === O.skewType && (g = Math.tan((O.skewX - O.skewY) * j), g = Math.sqrt(1 + g * g), v *= g, y *= g, O.skewY && (g = Math.tan(O.skewY * j), g = Math.sqrt(1 + g * g), e *= g, n *= g))), r = -y, o = v;
                else {
                  if (!(C || M || 1 !== D || F || N)) return void(P[Mt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + L + "px," + k + "px)" + (1 !== R || 1 !== A ? " scale(" + R + "," + A + ")" : ""));
                  e = o = 1, r = n = 0
                }
                h = 1, i = s = a = u = l = c = 0, f = F ? -1 / F : 0, d = O.zOrigin, _ = 1e-6, x = ",", T = "0", S = C * j, S && (v = Math.cos(S), y = Math.sin(S), a = -y, l = f * -y, i = e * y, s = n * y, h = v, f *= v, e *= v, n *= v), S = M * j, S && (v = Math.cos(S), y = Math.sin(S), g = r * v + i * y, m = o * v + s * y, u = h * y, c = f * y, i = r * -y + i * v, s = o * -y + s * v, h *= v, f *= v, r = g, o = m), 1 !== D && (i *= D, s *= D, h *= D, f *= D), 1 !== A && (r *= A, o *= A, u *= A, c *= A), 1 !== R && (e *= R, n *= R, a *= R, l *= R), (d || N) && (d && (I += i * -d, L += s * -d, k += h * -d + d), N && (I += O.xOrigin - (O.xOrigin * e + O.yOrigin * r) + O.xOffset, L += O.yOrigin - (O.xOrigin * n + O.yOrigin * o) + O.yOffset), I < _ && I > -_ && (I = T), L < _ && L > -_ && (L = T), k < _ && k > -_ && (k = 0)), b = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(", b += (e < _ && e > -_ ? T : e) + x + (n < _ && n > -_ ? T : n) + x + (a < _ && a > -_ ? T : a), b += x + (l < _ && l > -_ ? T : l) + x + (r < _ && r > -_ ? T : r) + x + (o < _ && o > -_ ? T : o), M || C || 1 !== D ? (b += x + (u < _ && u > -_ ? T : u) + x + (c < _ && c > -_ ? T : c) + x + (i < _ && i > -_ ? T : i), b += x + (s < _ && s > -_ ? T : s) + x + (h < _ && h > -_ ? T : h) + x + (f < _ && f > -_ ? T : f) + x) : b += ",0,0,0,0,1,0,", b += I + x + L + x + k + x + (F ? 1 + -k / F : 1) + ")", P[Mt] = b
              };
            l = Dt.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, Et("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
              parser: function(t, e, r, i, o, s, u) {
                if (i._lastParsedTransform === u) return o;
                i._lastParsedTransform = u;
                var h;
                "function" == typeof u[r] && (h = u[r], u[r] = e);
                var l, c, f, d, p, _, v, m, b, x = t._gsTransform,
                  T = t.style,
                  w = 1e-6,
                  E = St.length,
                  O = u,
                  P = {},
                  S = "transformOrigin",
                  M = Wt(t, n, !0, O.parseTransform),
                  C = O.transform && ("function" == typeof O.transform ? O.transform(g, y) : O.transform);
                if (i._transform = M, C && "string" == typeof C && Mt) c = W.style, c[Mt] = C, c.display = "block", c.position = "absolute", U.body.appendChild(W), l = Wt(W, null, !1), M.svg && (_ = M.xOrigin, v = M.yOrigin, l.x -= M.xOffset, l.y -= M.yOffset, (O.transformOrigin || O.svgOrigin) && (C = {}, jt(t, at(O.transformOrigin), C, O.svgOrigin, O.smoothOrigin, !0), _ = C.xOrigin, v = C.yOrigin, l.x -= C.xOffset - M.xOffset, l.y -= C.yOffset - M.yOffset), (_ || v) && (m = Xt(W, !0), l.x -= _ - (_ * m[0] + v * m[2]), l.y -= v - (_ * m[1] + v * m[3]))), U.body.removeChild(W), l.perspective || (l.perspective = M.perspective), null != O.xPercent && (l.xPercent = ht(O.xPercent, M.xPercent)), null != O.yPercent && (l.yPercent = ht(O.yPercent, M.yPercent));
                else if ("object" == typeof O) {
                  if (l = {
                      scaleX: ht(null != O.scaleX ? O.scaleX : O.scale, M.scaleX),
                      scaleY: ht(null != O.scaleY ? O.scaleY : O.scale, M.scaleY),
                      scaleZ: ht(O.scaleZ, M.scaleZ),
                      x: ht(O.x, M.x),
                      y: ht(O.y, M.y),
                      z: ht(O.z, M.z),
                      xPercent: ht(O.xPercent, M.xPercent),
                      yPercent: ht(O.yPercent, M.yPercent),
                      perspective: ht(O.transformPerspective, M.perspective)
                    }, p = O.directionalRotation, null != p)
                    if ("object" == typeof p)
                      for (c in p) O[c] = p[c];
                    else O.rotation = p;
                    "string" == typeof O.x && O.x.indexOf("%") !== -1 && (l.x = 0, l.xPercent = ht(O.x, M.xPercent)), "string" == typeof O.y && O.y.indexOf("%") !== -1 && (l.y = 0, l.yPercent = ht(O.y, M.yPercent)), l.rotation = lt("rotation" in O ? O.rotation : "shortRotation" in O ? O.shortRotation + "_short" : "rotationZ" in O ? O.rotationZ : M.rotation - M.skewY, M.rotation - M.skewY, "rotation", P), At && (l.rotationX = lt("rotationX" in O ? O.rotationX : "shortRotationX" in O ? O.shortRotationX + "_short" : M.rotationX || 0, M.rotationX, "rotationX", P), l.rotationY = lt("rotationY" in O ? O.rotationY : "shortRotationY" in O ? O.shortRotationY + "_short" : M.rotationY || 0, M.rotationY, "rotationY", P)), l.skewX = lt(O.skewX, M.skewX - M.skewY), (l.skewY = lt(O.skewY, M.skewY)) && (l.skewX += l.skewY, l.rotation += l.skewY)
                }
                for (At && null != O.force3D && (M.force3D = O.force3D, d = !0), M.skewType = O.skewType || M.skewType || a.defaultSkewType, f = M.force3D || M.z || M.rotationX || M.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, f || null == O.scale || (l.scaleZ = 1); --E > -1;) b = St[E], C = l[b] - M[b], (C > w || C < -w || null != O[b] || null != B[b]) && (d = !0, o = new mt(M, b, M[b], C, o), b in P && (o.e = P[b]), o.xs0 = 0, o.plugin = s, i._overwriteProps.push(o.n));
                return C = O.transformOrigin,
                  M.svg && (C || O.svgOrigin) && (_ = M.xOffset, v = M.yOffset, jt(t, at(C), l, O.svgOrigin, O.smoothOrigin), o = bt(M, "xOrigin", (x ? M : l).xOrigin, l.xOrigin, o, S), o = bt(M, "yOrigin", (x ? M : l).yOrigin, l.yOrigin, o, S), _ === M.xOffset && v === M.yOffset || (o = bt(M, "xOffset", x ? _ : M.xOffset, M.xOffset, o, S), o = bt(M, "yOffset", x ? v : M.yOffset, M.yOffset, o, S)), C = Pt ? null : "0px 0px"), (C || At && f && M.zOrigin) && (Mt ? (d = !0, b = Rt, C = (C || $(t, b, n, !1, "50% 50%")) + "", o = new mt(T, b, 0, 0, o, (-1), S), o.b = T[b], o.plugin = s, At ? (c = M.zOrigin, C = C.split(" "), M.zOrigin = (C.length > 2 && (0 === c || "0px" !== C[2]) ? parseFloat(C[2]) : c) || 0, o.xs0 = o.e = C[0] + " " + (C[1] || "50%") + " 0px", o = new mt(M, "zOrigin", 0, 0, o, (-1), o.n), o.b = c, o.xs0 = o.e = M.zOrigin) : o.xs0 = o.e = C) : at(C + "", M)), d && (i._transformType = M.svg && Pt || !f && 3 !== this._transformType ? 2 : 3), h && (u[r] = h), o
              },
              prefix: !0
            }), Et("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset"
            }), Et("borderRadius", {
              defaultValue: "0px",
              parser: function(t, e, r, o, s, a) {
                e = this.format(e);
                var u, h, l, c, f, d, p, _, v, y, g, m, b, x, T, w, E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                  O = t.style;
                for (v = parseFloat(t.offsetWidth), y = parseFloat(t.offsetHeight), u = e.split(" "), h = 0; h < E.length; h++) this.p.indexOf("border") && (E[h] = J(E[h])), f = c = $(t, E[h], n, !1, "0px"), f.indexOf(" ") !== -1 && (c = f.split(" "), f = c[0], c = c[1]), d = l = u[h], p = parseFloat(f), m = f.substr((p + "").length), b = "=" === d.charAt(1), b ? (_ = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), _ *= parseFloat(d), g = d.substr((_ + "").length - (_ < 0 ? 1 : 0)) || "") : (_ = parseFloat(d), g = d.substr((_ + "").length)), "" === g && (g = i[r] || m), g !== m && (x = tt(t, "borderLeft", p, m), T = tt(t, "borderTop", p, m), "%" === g ? (f = x / v * 100 + "%", c = T / y * 100 + "%") : "em" === g ? (w = tt(t, "borderLeft", 1, "em"), f = x / w + "em", c = T / w + "em") : (f = x + "px", c = T + "px"), b && (d = parseFloat(f) + _ + g, l = parseFloat(c) + _ + g)), s = xt(O, E[h], f + " " + c, d + " " + l, !1, "0px", s);
                return s
              },
              prefix: !0,
              formatter: vt("0px 0px 0px 0px", !1, !0)
            }), Et("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
              defaultValue: "0px",
              parser: function(t, e, r, i, o, s) {
                return xt(t.style, r, this.format($(t, r, n, !1, "0px 0px")), this.format(e), !1, "0px", o)
              },
              prefix: !0,
              formatter: vt("0px 0px", !1, !0)
            }), Et("backgroundPosition", {
              defaultValue: "0 0",
              parser: function(t, e, r, i, o, s) {
                var a, u, h, l, c, f, d = "background-position",
                  p = n || Q(t, null),
                  _ = this.format((p ? v ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                  y = this.format(e);
                if (_.indexOf("%") !== -1 != (y.indexOf("%") !== -1) && y.split(",").length < 2 && (f = $(t, "backgroundImage").replace(R, ""), f && "none" !== f)) {
                  for (a = _.split(" "), u = y.split(" "), z.setAttribute("src", f), h = 2; --h > -1;) _ = a[h], l = _.indexOf("%") !== -1, l !== (u[h].indexOf("%") !== -1) && (c = 0 === h ? t.offsetWidth - z.width : t.offsetHeight - z.height, a[h] = l ? parseFloat(_) / 100 * c + "px" : parseFloat(_) / c * 100 + "%");
                  _ = a.join(" ")
                }
                return this.parseComplex(t.style, _, y, o, s)
              },
              formatter: at
            }), Et("backgroundSize", {
              defaultValue: "0 0",
              formatter: function(t) {
                return t += "", at(t.indexOf(" ") === -1 ? t + " " + t : t)
              }
            }), Et("perspective", {
              defaultValue: "0px",
              prefix: !0
            }), Et("perspectiveOrigin", {
              defaultValue: "50% 50%",
              prefix: !0
            }), Et("transformStyle", {
              prefix: !0
            }), Et("backfaceVisibility", {
              prefix: !0
            }), Et("userSelect", {
              prefix: !0
            }), Et("margin", {
              parser: yt("marginTop,marginRight,marginBottom,marginLeft")
            }), Et("padding", {
              parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Et("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function(t, e, r, i, o, s) {
                var a, u, h;
                return v < 9 ? (u = t.currentStyle, h = v < 8 ? " " : ",", a = "rect(" + u.clipTop + h + u.clipRight + h + u.clipBottom + h + u.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format($(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
              }
            }), Et("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0
            }), Et("autoRound,strictUnits", {
              parser: function(t, e, r, i, n) {
                return n
              }
            }), Et("border", {
              defaultValue: "0px solid #000",
              parser: function(t, e, r, i, o, s) {
                var a = $(t, "borderTopWidth", n, !1, "0px"),
                  u = this.format(e).split(" "),
                  h = u[0].replace(w, "");
                return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + $(t, "borderTopStyle", n, !1, "solid") + " " + $(t, "borderTopColor", n, !1, "#000")), u.join(" "), o, s)
              },
              color: !0,
              formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
              }
            }), Et("borderWidth", {
              parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Et("float,cssFloat,styleFloat", {
              parser: function(t, e, r, i, n, o) {
                var s = t.style,
                  a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new mt(s, a, 0, 0, n, (-1), r, (!1), 0, s[a], e)
              }
            });
            var Gt = function(t) {
              var e, r = this.t,
                i = r.filter || $(this.data, "filter") || "",
                n = this.s + this.c * t | 0;
              100 === n && (i.indexOf("atrix(") === -1 && i.indexOf("radient(") === -1 && i.indexOf("oader(") === -1 ? (r.removeAttribute("filter"), e = !$(this.data, "filter")) : (r.filter = i.replace(P, ""), e = !0)), e || (this.xn1 && (r.filter = i = i || "alpha(opacity=" + n + ")"), i.indexOf("pacity") === -1 ? 0 === n && this.xn1 || (r.filter = i + " alpha(opacity=" + n + ")") : r.filter = i.replace(E, "opacity=" + n))
            };
            Et("opacity,alpha,autoAlpha", {
              defaultValue: "1",
              parser: function(t, e, r, i, o, s) {
                var a = parseFloat($(t, "opacity", n, !1, "1")),
                  u = t.style,
                  h = "autoAlpha" === r;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === $(t, "visibility", n) && 0 !== e && (a = 0), H ? o = new mt(u, "opacity", a, e - a, o) : (o = new mt(u, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = h ? 1 : 0, u.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Gt), h && (o = new mt(u, "visibility", 0, 0, o, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(r)), o
              }
            });
            var Ht = function(t, e) {
                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(M, "-$1").toLowerCase())) : t.removeAttribute(e))
              },
              Vt = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                  this.t.setAttribute("class", 0 === t ? this.b : this.e);
                  for (var e = this.data, r = this.t.style; e;) e.v ? r[e.p] = e.v : Ht(r, e.p), e = e._next;
                  1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
              };
            Et("className", {
              parser: function(t, e, i, o, s, a, u) {
                var h, l, c, f, d, p = t.getAttribute("class") || "",
                  _ = t.style.cssText;
                if (s = o._classNamePT = new mt(t, i, 0, 0, s, 2), s.setRatio = Vt, s.pr = -11, r = !0, s.b = p, l = rt(t, n), c = t._gsClassPT) {
                  for (f = {}, d = c.data; d;) f[d.p] = 1, d = d._next;
                  c.setRatio(1)
                }
                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), h = it(t, l, rt(t), u, f), t.setAttribute("class", p), s.data = h.firstMPT, t.style.cssText = _, s = s.xfirst = o.parse(t, h.difs, s, a)
              }
            });
            var qt = function(t) {
              if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, r, i, n, o, s = this.t.style,
                  a = h.transform.parse;
                if ("all" === this.e) s.cssText = "", n = !0;
                else
                  for (e = this.e.split(" ").join("").split(","), i = e.length; --i > -1;) r = e[i], h[r] && (h[r].parse === a ? n = !0 : r = "transformOrigin" === r ? Rt : h[r].p), Ht(s, r);
                n && (Ht(s, Mt), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
              }
            };
            for (Et("clearProps", {
                parser: function(t, e, i, n, o) {
                  return o = new mt(t, i, 0, 0, o, 2), o.setRatio = qt, o.e = e, o.pr = -10, o.data = n._tween, r = !0, o
                }
              }), l = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = l.length; Tt--;) Ot(l[Tt]);
            l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, s, u) {
              if (!t.nodeType) return !1;
              this._target = y = t, this._tween = s, this._vars = e, g = u, c = e.autoRound, r = !1, i = e.suffixMap || a.suffixMap, n = Q(t, ""), o = this._overwriteProps;
              var l, p, v, m, b, x, T, w, E, P = t.style;
              if (f && "" === P.zIndex && (l = $(t, "zIndex", n), "auto" !== l && "" !== l || this._addLazySet(P, "zIndex", 0)), "string" == typeof e && (m = P.cssText, l = rt(t, n), P.cssText = m + ";" + e, l = it(t, l, rt(t)).difs, !H && O.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, P.cssText = m), e.className ? this._firstPT = p = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (E = 3 === this._transformType, Mt ? d && (f = !0, "" === P.zIndex && (T = $(t, "zIndex", n), "auto" !== T && "" !== T || this._addLazySet(P, "zIndex", 0)), _ && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (E ? "visible" : "hidden"))) : P.zoom = 1, v = p; v && v._next;) v = v._next;
                w = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, v), w.setRatio = Mt ? Yt : zt, w.data = this._transform || Wt(t, n, !0), w.tween = s, w.pr = -1, o.pop()
              }
              if (r) {
                for (; p;) {
                  for (x = p._next, v = m; v && v.pr > p.pr;) v = v._next;
                  (p._prev = v ? v._prev : b) ? p._prev._next = p: m = p, (p._next = v) ? v._prev = p : b = p, p = x
                }
                this._firstPT = m
              }
              return !0
            }, l.parse = function(t, e, r, o) {
              var s, a, u, l, f, d, p, _, v, m, b = t.style;
              for (s in e) d = e[s], "function" == typeof d && (d = d(g, y)), a = h[s], a ? r = a.parse(t, d, s, this, r, o, e) : (f = $(t, s, n) + "", v = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || s.indexOf("Color") !== -1 || v && S.test(d) ? (v || (d = dt(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), r = xt(b, s, f, d, !0, "transparent", r, 0, o)) : v && N.test(d) ? r = xt(b, s, f, d, !0, null, r, 0, o) : (u = parseFloat(f), p = u || 0 === u ? f.substr((u + "").length) : "", "" !== f && "auto" !== f || ("width" === s || "height" === s ? (u = st(t, s, n), p = "px") : "left" === s || "top" === s ? (u = et(t, s, n), p = "px") : (u = "opacity" !== s ? 0 : 1, p = "")), m = v && "=" === d.charAt(1), m ? (l = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), l *= parseFloat(d), _ = d.replace(w, "")) : (l = parseFloat(d), _ = v ? d.replace(w, "") : ""), "" === _ && (_ = s in i ? i[s] : p), d = l || 0 === l ? (m ? l + u : l) + _ : e[s], p !== _ && "" !== _ && (l || 0 === l) && u && (u = tt(t, s, u, p), "%" === _ ? (u /= tt(t, s, 100, "%") / 100, e.strictUnits !== !0 && (f = u + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? u /= tt(t, s, 1, _) : "px" !== _ && (l = tt(t, s, l, _), _ = "px"), m && (l || 0 === l) && (d = l + u + _)), m && (l += u), !u && 0 !== u || !l && 0 !== l ? void 0 !== b[s] && (d || d + "" != "NaN" && null != d) ? (r = new mt(b, s, l || u || 0, 0, r, (-1), s, (!1), 0, f, d), r.xs0 = "none" !== d || "display" !== s && s.indexOf("Style") === -1 ? d : f) : q("invalid " + s + " tween value: " + e[s]) : (r = new mt(b, s, u, l - u, r, 0, s, c !== !1 && ("px" === _ || "zIndex" === s), 0, f, d), r.xs0 = _))), o && r && !r.plugin && (r.plugin = o);
              return r
            }, l.setRatio = function(t) {
              var e, r, i, n = this._firstPT,
                o = 1e-6;
              if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                  for (; n;) {
                    if (e = n.c * t + n.s, n.r ? e = Math.round(e) : e < o && e > -o && (e = 0), n.type)
                      if (1 === n.type)
                        if (i = n.l, 2 === i) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                        else if (3 === i) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                    else if (4 === i) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                    else if (5 === i) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                    else {
                      for (r = n.xs0 + e + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                      n.t[n.p] = r
                    } else n.type === -1 ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                    else n.t[n.p] = e + n.xs0;
                    n = n._next
                  } else
                    for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                else
                  for (; n;) {
                    if (2 !== n.type)
                      if (n.r && n.type !== -1)
                        if (e = Math.round(n.s + n.c), n.type) {
                          if (1 === n.type) {
                            for (i = n.l, r = n.xs0 + e + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                            n.t[n.p] = r
                          }
                        } else n.t[n.p] = e + n.xs0;
                    else n.t[n.p] = n.e;
                    else n.setRatio(t);
                    n = n._next
                  }
            }, l._enableTransforms = function(t) {
              this._transform = this._transform || Wt(this._target, n, !0), this._transformType = this._transform.svg && Pt || !t && 3 !== this._transformType ? 2 : 3
            };
            var Zt = function(t) {
              this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            l._addLazySet = function(t, e, r) {
              var i = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
              i.e = r, i.setRatio = Zt, i.data = this
            }, l._linkCSSP = function(t, e, r, i) {
              return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), r ? r._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = r), t
            }, l._mod = function(t) {
              for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, l._kill = function(e) {
              var r, i, n, o = e;
              if (e.autoAlpha || e.alpha) {
                o = {};
                for (i in e) o[i] = e[i];
                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
              }
              for (e.className && (r = this._classNamePT) && (n = r.xfirst, n && n._prev ? this._linkCSSP(n._prev, r._next, n._prev._prev) : n === this._firstPT && (this._firstPT = r._next), r._next && this._linkCSSP(r._next, r._next._next, n._prev), this._classNamePT = null), r = this._firstPT; r;) r.plugin && r.plugin !== i && r.plugin._kill && (r.plugin._kill(e), i = r.plugin), r = r._next;
              return t.prototype._kill.call(this, o)
            };
            var Kt = function(t, e, r) {
              var i, n, o, s;
              if (t.slice)
                for (n = t.length; --n > -1;) Kt(t[n], e, r);
              else
                for (i = t.childNodes, n = i.length; --n > -1;) o = i[n], s = o.type, o.style && (e.push(rt(o)), r && r.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Kt(o, e, r)
            };
            return a.cascadeTo = function(t, r, i) {
              var n, o, s, a, u = e.to(t, r, i),
                h = [u],
                l = [],
                c = [],
                f = [],
                d = e._internals.reservedProps;
              for (t = u._targets || u.target, Kt(t, l, f), u.render(r, !0, !0), Kt(t, c), u.render(0, !0, !0), u._enabled(!0), n = f.length; --n > -1;)
                if (o = it(f[n], l[n], c[n]), o.firstMPT) {
                  o = o.difs;
                  for (s in i) d[s] && (o[s] = i[s]);
                  a = {};
                  for (s in o) a[s] = l[n][s];
                  h.push(e.fromTo(f[n], r, a, o))
                }
              return h
            }, t.activate([a]), a
          }, !0),
          function() {
            var t = s._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function(t, e, r) {
                  return this._tween = r, !0
                }
              }),
              e = function(t) {
                for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
              },
              r = t.prototype;
            r._onInitAllProps = function() {
              for (var t, r, i, n = this._tween, o = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), s = o.length, a = {}, u = n._propLookup.roundProps; --s > -1;) a[o[s]] = Math.round;
              for (s = o.length; --s > -1;)
                for (t = o[s], r = n._firstPT; r;) i = r._next, r.pg ? r.t._mod(a) : r.n === t && (2 === r.f && r.t ? e(r.t._firstPT) : (this._add(r.t, t, r.s, r.c), i && (i._prev = r._prev), r._prev ? r._prev._next = i : n._firstPT === r && (n._firstPT = i), r._next = r._prev = null, n._propLookup[t] = u)), r = i;
              return !1
            }, r._add = function(t, e, r, i) {
              this._addTween(t, e, r, r + i, e, Math.round), this._overwriteProps.push(e)
            }
          }(),
          function() {
            s._gsDefine.plugin({
              propName: "attr",
              API: 2,
              version: "0.6.0",
              init: function(t, e, r, i) {
                var n, o;
                if ("function" != typeof t.setAttribute) return !1;
                for (n in e) o = e[n], "function" == typeof o && (o = o(i, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", o + "", n, !1, n), this._overwriteProps.push(n);
                return !0
              }
            })
          }(), s._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.0",
            API: 2,
            init: function(t, e, r, i) {
              "object" != typeof e && (e = {
                rotation: e
              }), this.finals = {};
              var n, o, s, a, u, h, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                c = 1e-6;
              for (n in e) "useRadians" !== n && (a = e[n], "function" == typeof a && (a = a(i, t)), h = (a + "").split("_"), o = h[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), a = this.finals[n] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, u = a - s, h.length && (o = h.join("_"), o.indexOf("short") !== -1 && (u %= l, u !== u % (l / 2) && (u = u < 0 ? u + l : u - l)), o.indexOf("_cw") !== -1 && u < 0 ? u = (u + 9999999999 * l) % l - (u / l | 0) * l : o.indexOf("ccw") !== -1 && u > 0 && (u = (u - 9999999999 * l) % l - (u / l | 0) * l)), (u > c || u < -c) && (this._addTween(t, n, s, s + u, n), this._overwriteProps.push(n)));
              return !0
            },
            set: function(t) {
              var e;
              if (1 !== t) this._super.setRatio.call(this, t);
              else
                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
          })._autoCSS = !0, s._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, r, i, n = s.GreenSockGlobals || s,
              o = n.com.greensock,
              a = 2 * Math.PI,
              u = Math.PI / 2,
              h = o._class,
              l = function(e, r) {
                var i = h("easing." + e, function() {}, !0),
                  n = i.prototype = new t;
                return n.constructor = i, n.getRatio = r, i
              },
              c = t.register || function() {},
              f = function(t, e, r, i, n) {
                var o = h("easing." + t, {
                  easeOut: new e,
                  easeIn: new r,
                  easeInOut: new i
                }, !0);
                return c(o, t), o
              },
              d = function(t, e, r) {
                this.t = t, this.v = e, r && (this.next = r, r.prev = this, this.c = r.v - e, this.gap = r.t - t)
              },
              p = function(e, r) {
                var i = h("easing." + e, function(t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                  }, !0),
                  n = i.prototype = new t;
                return n.constructor = i, n.getRatio = r, n.config = function(t) {
                  return new i(t)
                }, i
              },
              _ = f("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
              }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
              }), p("BackInOut", function(t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
              })),
              v = h("easing.SlowMo", function(t, e, r) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = r === !0
              }, !0),
              y = v.prototype = new t;
            return y.constructor = v, y.getRatio = function(t) {
              var e = t + (.5 - t) * this._p;
              return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, v.ease = new v(.7, .7), y.config = v.config = function(t, e, r) {
              return new v(t, e, r)
            }, e = h("easing.SteppedEase", function(t) {
              t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0), y = e.prototype = new t, y.constructor = e, y.getRatio = function(t) {
              return t < 0 ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, y.config = e.config = function(t) {
              return new e(t)
            }, r = h("easing.RoughEase", function(e) {
              e = e || {};
              for (var r, i, n, o, s, a, u = e.taper || "none", h = [], l = 0, c = 0 | (e.points || 20), f = c, p = e.randomize !== !1, _ = e.clamp === !0, v = e.template instanceof t ? e.template : null, y = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) r = p ? Math.random() : 1 / c * f, i = v ? v.getRatio(r) : r, "none" === u ? n = y : "out" === u ? (o = 1 - r, n = o * o * y) : "in" === u ? n = r * r * y : r < .5 ? (o = 2 * r, n = o * o * .5 * y) : (o = 2 * (1 - r), n = o * o * .5 * y), p ? i += Math.random() * n - .5 * n : f % 2 ? i += .5 * n : i -= .5 * n, _ && (i > 1 ? i = 1 : i < 0 && (i = 0)), h[l++] = {
                x: r,
                y: i
              };
              for (h.sort(function(t, e) {
                  return t.x - e.x
                }), a = new d(1, 1, null), f = c; --f > -1;) s = h[f], a = new d(s.x, s.y, a);
              this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
            }, !0), y = r.prototype = new t, y.constructor = r, y.getRatio = function(t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
              } else
                for (; e.prev && t <= e.t;) e = e.prev;
              return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, y.config = function(t) {
              return new r(t)
            }, r.ease = new r, f("Bounce", l("BounceOut", function(t) {
              return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), l("BounceIn", function(t) {
              return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), l("BounceInOut", function(t) {
              var e = t < .5;
              return t = e ? 1 - 2 * t : 2 * t - 1, t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), f("Circ", l("CircOut", function(t) {
              return Math.sqrt(1 - (t -= 1) * t)
            }), l("CircIn", function(t) {
              return -(Math.sqrt(1 - t * t) - 1)
            }), l("CircInOut", function(t) {
              return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), i = function(e, r, i) {
              var n = h("easing." + e, function(t, e) {
                  this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                }, !0),
                o = n.prototype = new t;
              return o.constructor = n, o.getRatio = r, o.config = function(t, e) {
                return new n(t, e)
              }, n
            }, f("Elastic", i("ElasticOut", function(t) {
              return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), i("ElasticIn", function(t) {
              return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
            }, .3), i("ElasticInOut", function(t) {
              return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), f("Expo", l("ExpoOut", function(t) {
              return 1 - Math.pow(2, -10 * t)
            }), l("ExpoIn", function(t) {
              return Math.pow(2, 10 * (t - 1)) - .001
            }), l("ExpoInOut", function(t) {
              return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), f("Sine", l("SineOut", function(t) {
              return Math.sin(t * u)
            }), l("SineIn", function(t) {
              return -Math.cos(t * u) + 1
            }), l("SineInOut", function(t) {
              return -.5 * (Math.cos(Math.PI * t) - 1)
            })), h("easing.EaseLookup", {
              find: function(e) {
                return t.map[e]
              }
            }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(r, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), _
          }, !0)
      }), s._gsDefine && s._gsQueue.pop()(),
      function(o, s) {
        "use strict";
        var a = {},
          u = o.GreenSockGlobals = o.GreenSockGlobals || o;
        if (!u.TweenLite) {
          var h, l, c, f, d, p = function(t) {
              var e, r = t.split("."),
                i = u;
              for (e = 0; e < r.length; e++) i[r[e]] = i = i[r[e]] || {};
              return i
            },
            _ = p("com.greensock"),
            v = 1e-10,
            y = function(t) {
              var e, r = [],
                i = t.length;
              for (e = 0; e !== i; r.push(t[e++]));
              return r
            },
            g = function() {},
            m = function() {
              var t = Object.prototype.toString,
                e = t.call([]);
              return function(r) {
                return null != r && (r instanceof Array || "object" == typeof r && !!r.push && t.call(r) === e)
              }
            }(),
            b = {},
            x = function(o, h, l, c) {
              this.sc = b[o] ? b[o].sc : [], b[o] = this, this.gsClass = null, this.func = l;
              var f = [];
              this.check = function(d) {
                for (var _, v, y, g, m, T = h.length, w = T; --T > -1;)(_ = b[h[T]] || new x(h[T], [])).gsClass ? (f[T] = _.gsClass, w--) : d && _.sc.push(this);
                if (0 === w && l) {
                  if (v = ("com.greensock." + o).split("."), y = v.pop(), g = p(v.join("."))[y] = this.gsClass = l.apply(l, f), c)
                    if (u[y] = a[y] = g, m = "undefined" != typeof t && t.exports, !m && r(143)) i = [], n = function() {
                      return g
                    }.apply(e, i), !(void 0 !== n && (t.exports = n));
                    else if (m)
                    if (o === s) {
                      t.exports = a[s] = g;
                      for (T in a) g[T] = a[T]
                    } else a[s] && (a[s][y] = g);
                  for (T = 0; T < this.sc.length; T++) this.sc[T].check()
                }
              }, this.check(!0)
            },
            T = o._gsDefine = function(t, e, r, i) {
              return new x(t, e, r, i)
            },
            w = _._class = function(t, e, r) {
              return e = e || function() {}, T(t, [], function() {
                return e
              }, r), e
            };
          T.globals = u;
          var E = [0, 0, 1, 1],
            O = w("easing.Ease", function(t, e, r, i) {
              this._func = t, this._type = r || 0, this._power = i || 0, this._params = e ? E.concat(e) : E
            }, !0),
            P = O.map = {},
            S = O.register = function(t, e, r, i) {
              for (var n, o, s, a, u = e.split(","), h = u.length, l = (r || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                for (o = u[h], n = i ? w("easing." + o, null, !0) : _.easing[o] || {}, s = l.length; --s > -1;) a = l[s], P[o + "." + a] = P[a + o] = n[a] = t.getRatio ? t : t[a] || new t
            };
          for (c = O.prototype, c._calcEnd = !1, c.getRatio = function(t) {
              if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
              var e = this._type,
                r = this._power,
                i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
              return 1 === r ? i *= i : 2 === r ? i *= i * i : 3 === r ? i *= i * i * i : 4 === r && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2
            }, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], l = h.length; --l > -1;) c = h[l] + ",Power" + l, S(new O(null, null, 1, l), c, "easeOut", !0), S(new O(null, null, 2, l), c, "easeIn" + (0 === l ? ",easeNone" : "")), S(new O(null, null, 3, l), c, "easeInOut");
          P.linear = _.easing.Linear.easeIn, P.swing = _.easing.Quad.easeInOut;
          var M = w("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
          });
          c = M.prototype, c.addEventListener = function(t, e, r, i, n) {
            n = n || 0;
            var o, s, a = this._listeners[t],
              u = 0;
            for (this !== f || d || f.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === r ? a.splice(s, 1) : 0 === u && o.pr < n && (u = s + 1);
            a.splice(u, 0, {
              c: e,
              s: r,
              up: i,
              pr: n
            })
          }, c.removeEventListener = function(t, e) {
            var r, i = this._listeners[t];
            if (i)
              for (r = i.length; --r > -1;)
                if (i[r].c === e) return void i.splice(r, 1)
          }, c.dispatchEvent = function(t) {
            var e, r, i, n = this._listeners[t];
            if (n)
              for (e = n.length, e > 1 && (n = n.slice(0)), r = this._eventTarget; --e > -1;) i = n[e], i && (i.up ? i.c.call(i.s || r, {
                type: t,
                target: r
              }) : i.c.call(i.s || r))
          };
          var C = o.requestAnimationFrame,
            R = o.cancelAnimationFrame,
            A = Date.now || function() {
              return (new Date).getTime()
            },
            D = A();
          for (h = ["ms", "moz", "webkit", "o"], l = h.length; --l > -1 && !C;) C = o[h[l] + "RequestAnimationFrame"], R = o[h[l] + "CancelAnimationFrame"] || o[h[l] + "CancelRequestAnimationFrame"];
          w("Ticker", function(t, e) {
            var r, i, n, o, s, a = this,
              u = A(),
              h = !(e === !1 || !C) && "auto",
              l = 500,
              c = 33,
              p = "tick",
              _ = function(t) {
                var e, h, f = A() - D;
                f > l && (u += f - c), D += f, a.time = (D - u) / 1e3, e = a.time - s, (!r || e > 0 || t === !0) && (a.frame++, s += e + (e >= o ? .004 : o - e), h = !0), t !== !0 && (n = i(_)), h && a.dispatchEvent(p)
              };
            M.call(a), a.time = a.frame = 0, a.tick = function() {
              _(!0)
            }, a.lagSmoothing = function(t, e) {
              l = t || 1 / v, c = Math.min(e, l, 0)
            }, a.sleep = function() {
              null != n && (h && R ? R(n) : clearTimeout(n), i = g, n = null, a === f && (d = !1))
            }, a.wake = function(t) {
              null !== n ? a.sleep() : t ? u += -D + (D = A()) : a.frame > 10 && (D = A() - l + 5), i = 0 === r ? g : h && C ? C : function(t) {
                return setTimeout(t, 1e3 * (s - a.time) + 1 | 0)
              }, a === f && (d = !0), _(2)
            }, a.fps = function(t) {
              return arguments.length ? (r = t, o = 1 / (r || 60), s = this.time + o, void a.wake()) : r
            }, a.useRAF = function(t) {
              return arguments.length ? (a.sleep(), h = t, void a.fps(r)) : h
            }, a.fps(t), setTimeout(function() {
              "auto" === h && a.frame < 5 && "hidden" !== document.visibilityState && a.useRAF(!1)
            }, 1500)
          }), c = _.Ticker.prototype = new _.events.EventDispatcher, c.constructor = _.Ticker;
          var I = w("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Q) {
              d || f.wake();
              var r = this.vars.useFrames ? J : Q;
              r.add(this, r._time), this.vars.paused && this.paused(!0)
            }
          });
          f = I.ticker = new _.Ticker, c = I.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
          var L = function() {
            d && A() - D > 2e3 && f.wake(), setTimeout(L, 2e3)
          };
          L(), c.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, c.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
          }, c.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
          }, c.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
          }, c.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
          }, c.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, c.render = function(t, e, r) {}, c.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
          }, c.isActive = function() {
            var t, e = this._timeline,
              r = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= r && t < r + this.totalDuration() / this._timeScale
          }, c._enabled = function(t, e) {
            return d || f.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
          }, c._kill = function(t, e) {
            return this._enabled(!1, !1)
          }, c.kill = function(t, e) {
            return this._kill(t, e), this
          }, c._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
          }, c._swapSelfInParams = function(t) {
            for (var e = t.length, r = t.concat(); --e > -1;) "{self}" === t[e] && (r[e] = this);
            return r
          }, c._callback = function(t) {
            var e = this.vars,
              r = e[t],
              i = e[t + "Params"],
              n = e[t + "Scope"] || e.callbackScope || this,
              o = i ? i.length : 0;
            switch (o) {
              case 0:
                r.call(n);
                break;
              case 1:
                r.call(n, i[0]);
                break;
              case 2:
                r.call(n, i[0], i[1]);
                break;
              default:
                r.apply(n, i)
            }
          }, c.eventCallback = function(t, e, r, i) {
            if ("on" === (t || "").substr(0, 2)) {
              var n = this.vars;
              if (1 === arguments.length) return n[t];
              null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(r) && r.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(r) : r, n[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
          }, c.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
          }, c.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
          }, c.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
          }, c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
          }, c.totalTime = function(t, e, r) {
            if (d || f.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
              if (t < 0 && !r && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var i = this._totalDuration,
                  n = this._timeline;
                if (t > i && !r && (t = i), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? i - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                  for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
              }
              this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (B.length && tt(), this.render(t, e, !1), B.length && tt())
            }
            return this
          }, c.progress = c.totalProgress = function(t, e) {
            var r = this.duration();
            return arguments.length ? this.totalTime(r * t, e) : r ? this._time / r : this.ratio
          }, c.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
          }, c.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          }, c.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || v, this._timeline && this._timeline.smoothChildTiming) {
              var e = this._pauseTime,
                r = e || 0 === e ? e : this._timeline.totalTime();
              this._startTime = r - (r - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
          }, c.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
          }, c.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, r, i = this._timeline;
            return t != this._paused && i && (d || t || f.wake(), e = i.rawTime(), r = e - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== r && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
          };
          var k = w("core.SimpleTimeline", function(t) {
            I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
          });
          c = k.prototype = new I, c.constructor = k, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function(t, e, r, i) {
            var n, o;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
              for (o = t._startTime; n && n._startTime > o;) n = n._prev;
            return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
          }, c._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
          }, c.render = function(t, e, r) {
            var i, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) i = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, r) : n.render((t - n._startTime) * n._timeScale, e, r)), n = i
          }, c.rawTime = function() {
            return d || f.wake(), this._totalTime
          };
          var N = w("TweenLite", function(t, e, r) {
              if (I.call(this, e, r), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
              this.target = t = "string" != typeof t ? t : N.selector(t) || t;
              var i, n, s, a = t.jquery || t.length && t !== o && t[0] && (t[0] === o || t[0].nodeType && t[0].style && !t.nodeType),
                u = this.vars.overwrite;
              if (this._overwrite = u = null == u ? K[N.defaultOverwrite] : "number" == typeof u ? u >> 0 : K[u], (a || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                for (this._targets = s = y(t), this._propLookup = [], this._siblings = [], i = 0; i < s.length; i++) n = s[i], n ? "string" != typeof n ? n.length && n !== o && n[0] && (n[0] === o || n[0].nodeType && n[0].style && !n.nodeType) ? (s.splice(i--, 1), this._targets = s = s.concat(y(n))) : (this._siblings[i] = et(n, this, !1), 1 === u && this._siblings[i].length > 1 && it(n, this, null, 1, this._siblings[i])) : (n = s[i--] = N.selector(n), "string" == typeof n && s.splice(i + 1, 1)) : s.splice(i--, 1);
              else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === u && this._siblings.length > 1 && it(t, this, null, 1, this._siblings);
              (this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -v, this.render(Math.min(0, -this._delay)))
            }, !0),
            j = function(t) {
              return t && t.length && t !== o && t[0] && (t[0] === o || t[0].nodeType && t[0].style && !t.nodeType)
            },
            F = function(t, e) {
              var r, i = {};
              for (r in t) Z[r] || r in e && "transform" !== r && "x" !== r && "y" !== r && "width" !== r && "height" !== r && "className" !== r && "border" !== r || !(!H[r] || H[r] && H[r]._autoCSS) || (i[r] = t[r],
                delete t[r]);
              t.css = i
            };
          c = N.prototype = new I, c.constructor = N, c.kill()._gc = !1, c.ratio = 0, c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, N.version = "1.19.0", N.defaultEase = c._ease = new O(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = f, N.autoSleep = 120, N.lagSmoothing = function(t, e) {
            f.lagSmoothing(t, e)
          }, N.selector = o.$ || o.jQuery || function(t) {
            var e = o.$ || o.jQuery;
            return e ? (N.selector = e, e(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
          };
          var B = [],
            U = {},
            X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            W = function(t) {
              for (var e, r = this._firstPT, i = 1e-6; r;) e = r.blob ? t ? this.join("") : this.start : r.c * t + r.s, r.m ? e = r.m(e, this._target || r.t) : e < i && e > -i && (e = 0), r.f ? r.fp ? r.t[r.p](r.fp, e) : r.t[r.p](e) : r.t[r.p] = e, r = r._next
            },
            z = function(t, e, r, i) {
              var n, o, s, a, u, h, l, c = [t, e],
                f = 0,
                d = "",
                p = 0;
              for (c.start = t, r && (r(c), t = c[0], e = c[1]), c.length = 0, n = t.match(X) || [], o = e.match(X) || [], i && (i._next = null, i.blob = 1, c._firstPT = c._applyPT = i), u = o.length, a = 0; a < u; a++) l = o[a], h = e.substr(f, e.indexOf(l, f) - f), d += h || !a ? h : ",", f += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), l === n[a] || n.length <= a ? d += l : (d && (c.push(d), d = ""), s = parseFloat(n[a]), c.push(s), c._firstPT = {
                _next: c._firstPT,
                t: c,
                p: c.length - 1,
                s: s,
                c: ("=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * parseFloat(l.substr(2)) : parseFloat(l) - s) || 0,
                f: 0,
                m: p && p < 4 ? Math.round : 0
              }), f += l.length;
              return d += e.substr(f), d && c.push(d), c.setRatio = W, c
            },
            Y = function(t, e, r, i, n, o, s, a, u) {
              "function" == typeof i && (i = i(u || 0, t));
              var h, l, c = "get" === r ? t[e] : r,
                f = typeof t[e],
                d = "string" == typeof i && "=" === i.charAt(1),
                p = {
                  t: t,
                  p: e,
                  s: c,
                  f: "function" === f,
                  pg: 0,
                  n: n || e,
                  m: o ? "function" == typeof o ? o : Math.round : 0,
                  pr: 0,
                  c: d ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - c || 0
                };
              if ("number" !== f && ("function" === f && "get" === r && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = c = s ? t[l](s) : t[l]()), "string" == typeof c && (s || isNaN(c)) ? (p.fp = s, h = z(c, i, a || N.defaultStringFilter, p), p = {
                  t: h,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: n || e,
                  pr: 0,
                  m: 0
                }) : d || (p.s = parseFloat(c), p.c = parseFloat(i) - p.s || 0)), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
            },
            G = N._internals = {
              isArray: m,
              isSelector: j,
              lazyTweens: B,
              blobDif: z
            },
            H = N._plugins = {},
            V = G.tweenLookup = {},
            q = 0,
            Z = G.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1
            },
            K = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              "true": 1,
              "false": 0
            },
            J = I._rootFramesTimeline = new k,
            Q = I._rootTimeline = new k,
            $ = 30,
            tt = G.lazyRender = function() {
              var t, e = B.length;
              for (U = {}; --e > -1;) t = B[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
              B.length = 0
            };
          Q._startTime = f.time, J._startTime = f.frame, Q._active = J._active = !0, setTimeout(tt, 1), I._updateRoot = N.render = function() {
            var t, e, r;
            if (B.length && tt(), Q.render((f.time - Q._startTime) * Q._timeScale, !1, !1), J.render((f.frame - J._startTime) * J._timeScale, !1, !1), B.length && tt(), f.frame >= $) {
              $ = f.frame + (parseInt(N.autoSleep, 10) || 120);
              for (r in V) {
                for (e = V[r].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete V[r]
              }
              if (r = Q._first, (!r || r._paused) && N.autoSleep && !J._first && 1 === f._listeners.tick.length) {
                for (; r && r._paused;) r = r._next;
                r || f.sleep()
              }
            }
          }, f.addEventListener("tick", I._updateRoot);
          var et = function(t, e, r) {
              var i, n, o = t._gsTweenID;
              if (V[o || (t._gsTweenID = o = "t" + q++)] || (V[o] = {
                  target: t,
                  tweens: []
                }), e && (i = V[o].tweens, i[n = i.length] = e, r))
                for (; --n > -1;) i[n] === e && i.splice(n, 1);
              return V[o].tweens
            },
            rt = function(t, e, r, i) {
              var n, o, s = t.vars.onOverwrite;
              return s && (n = s(t, e, r, i)), s = N.onOverwrite, s && (o = s(t, e, r, i)), n !== !1 && o !== !1
            },
            it = function(t, e, r, i, n) {
              var o, s, a, u;
              if (1 === i || i >= 4) {
                for (u = n.length, o = 0; o < u; o++)
                  if ((a = n[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                  else if (5 === i) break;
                return s
              }
              var h, l = e._startTime + v,
                c = [],
                f = 0,
                d = 0 === e._duration;
              for (o = n.length; --o > -1;)(a = n[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || nt(e, 0, d), 0 === nt(a, h, d) && (c[f++] = a)) : a._startTime <= l && a._startTime + a.totalDuration() / a._timeScale > l && ((d || !a._initted) && l - a._startTime <= 2e-10 || (c[f++] = a)));
              for (o = f; --o > -1;)
                if (a = c[o], 2 === i && a._kill(r, t, e) && (s = !0), 2 !== i || !a._firstPT && a._initted) {
                  if (2 !== i && !rt(a, e)) continue;
                  a._enabled(!1, !1) && (s = !0)
                }
              return s
            },
            nt = function(t, e, r) {
              for (var i = t._timeline, n = i._timeScale, o = t._startTime; i._timeline;) {
                if (o += i._startTime, n *= i._timeScale, i._paused) return -100;
                i = i._timeline
              }
              return o /= n, o > e ? o - e : r && o === e || !t._initted && o - e < 2 * v ? v : (o += t.totalDuration() / t._timeScale / n) > e + v ? 0 : o - e - v
            };
          c._init = function() {
            var t, e, r, i, n, o, s = this.vars,
              a = this._overwrittenProps,
              u = this._duration,
              h = !!s.immediateRender,
              l = s.ease;
            if (s.startAt) {
              this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
              for (i in s.startAt) n[i] = s.startAt[i];
              if (n.overwrite = !1, n.immediateRender = !0, n.lazy = h && s.lazy !== !1, n.startAt = n.delay = null, this._startAt = N.to(this.target, 0, n), h)
                if (this._time > 0) this._startAt = null;
                else if (0 !== u) return
            } else if (s.runBackwards && 0 !== u)
              if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
              else {
                0 !== this._time && (h = !1), r = {};
                for (i in s) Z[i] && "autoCSS" !== i || (r[i] = s[i]);
                if (r.overwrite = 0, r.data = "isFromStart", r.lazy = h && s.lazy !== !1, r.immediateRender = h, this._startAt = N.to(this.target, 0, r), h) {
                  if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
              }
            if (this._ease = l = l ? l instanceof O ? l : "function" == typeof l ? new O(l, s.easeParams) : P[l] || N.defaultEase : N.defaultEase, s.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
              for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
              for (r = this._firstPT; r;) r.s += r.c, r.c = -r.c, r = r._next;
            this._onUpdate = s.onUpdate, this._initted = !0
          }, c._initProps = function(t, e, r, i, n) {
            var s, a, u, h, l, c;
            if (null == t) return !1;
            U[t._gsTweenID] && tt(), this.vars.css || t.style && t !== o && t.nodeType && H.css && this.vars.autoCSS !== !1 && F(this.vars, t);
            for (s in this.vars)
              if (c = this.vars[s], Z[s]) c && (c instanceof Array || c.push && m(c)) && c.join("").indexOf("{self}") !== -1 && (this.vars[s] = c = this._swapSelfInParams(c, this));
              else if (H[s] && (h = new H[s])._onInitTween(t, this.vars[s], this, n)) {
              for (this._firstPT = l = {
                  _next: this._firstPT,
                  t: h,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: s,
                  pg: 1,
                  pr: h._priority,
                  m: 0
                }, a = h._overwriteProps.length; --a > -1;) e[h._overwriteProps[a]] = this._firstPT;
              (h._priority || h._onInitAllProps) && (u = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
            } else e[s] = Y.call(this, t, s, "get", c, s, 0, null, this.vars.stringFilter, n);
            return i && this._kill(i, t) ? this._initProps(t, e, r, i, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && it(t, this, e, this._overwrite, r) ? (this._kill(e, t), this._initProps(t, e, r, i, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (U[t._gsTweenID] = !0), u)
          }, c.render = function(t, e, r) {
            var i, n, o, s, a = this._time,
              u = this._duration,
              h = this._rawPrevTime;
            if (t >= u - 1e-7) this._totalTime = this._time = u, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, n = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === u && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || h === v && "isPause" !== this.data) && h !== t && (r = !0, h > v && (n = "onReverseComplete")), this._rawPrevTime = s = !e || t || h === t ? t : v);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === u && h > 0) && (n = "onReverseComplete", i = this._reversed), t < 0 && (this._active = !1, 0 === u && (this._initted || !this.vars.lazy || r) && (h >= 0 && (h !== v || "isPause" !== this.data) && (r = !0), this._rawPrevTime = s = !e || t || h === t ? t : v)), this._initted || (r = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
              var l = t / u,
                c = this._easeType,
                f = this._easePower;
              (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === f ? l *= l : 2 === f ? l *= l * l : 3 === f ? l *= l * l * l : 4 === f && (l *= l * l * l * l), 1 === c ? this.ratio = 1 - l : 2 === c ? this.ratio = l : t / u < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2
            } else this.ratio = this._ease.getRatio(t / u);
            if (this._time !== a || r) {
              if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!r && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, B.push(this), void(this._lazy = [t, e]);
                this._time && !i ? this.ratio = this._ease.getRatio(this._time / u) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              }
              for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, r) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== u || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
              this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, e, r), e || (this._time !== a || i || r) && this._callback("onUpdate")), n && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, r), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === u && this._rawPrevTime === v && s !== v && (this._rawPrevTime = 0)))
            }
          }, c._kill = function(t, e, r) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
            var i, n, o, s, a, u, h, l, c, f = r && this._time && r._startTime === this._startTime && this._timeline === r._timeline;
            if ((m(e) || j(e)) && "number" != typeof e[0])
              for (i = e.length; --i > -1;) this._kill(t, e[i], r) && (u = !0);
            else {
              if (this._targets) {
                for (i = this._targets.length; --i > -1;)
                  if (e === this._targets[i]) {
                    a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                    break
                  }
              } else {
                if (e !== this.target) return !1;
                a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
              }
              if (a) {
                if (h = t || a, l = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), r && (N.onOverwrite || this.vars.onOverwrite)) {
                  for (o in h) a[o] && (c || (c = []), c.push(o));
                  if ((c || !t) && !rt(this, r, e, c)) return !1
                }
                for (o in h)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, u = !0), s.pg && s.t._kill(h) && (u = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), l && (n[o] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
              }
            }
            return u
          }, c.invalidate = function() {
            return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(Math.min(0, -this._delay))), this
          }, c._enabled = function(t, e) {
            if (d || f.wake(), t && this._gc) {
              var r, i = this._targets;
              if (i)
                for (r = i.length; --r > -1;) this._siblings[r] = et(i[r], this, !0);
              else this._siblings = et(this.target, this, !0)
            }
            return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          }, N.to = function(t, e, r) {
            return new N(t, e, r)
          }, N.from = function(t, e, r) {
            return r.runBackwards = !0, r.immediateRender = 0 != r.immediateRender, new N(t, e, r)
          }, N.fromTo = function(t, e, r, i) {
            return i.startAt = r, i.immediateRender = 0 != i.immediateRender && 0 != r.immediateRender, new N(t, e, i)
          }, N.delayedCall = function(t, e, r, i, n) {
            return new N(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: r,
              callbackScope: i,
              onReverseComplete: e,
              onReverseCompleteParams: r,
              immediateRender: !1,
              lazy: !1,
              useFrames: n,
              overwrite: 0
            })
          }, N.set = function(t, e) {
            return new N(t, 0, e)
          }, N.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : N.selector(t) || t;
            var r, i, n, o;
            if ((m(t) || j(t)) && "number" != typeof t[0]) {
              for (r = t.length, i = []; --r > -1;) i = i.concat(N.getTweensOf(t[r], e));
              for (r = i.length; --r > -1;)
                for (o = i[r], n = r; --n > -1;) o === i[n] && i.splice(r, 1)
            } else
              for (i = et(t).concat(), r = i.length; --r > -1;)(i[r]._gc || e && !i[r].isActive()) && i.splice(r, 1);
            return i
          }, N.killTweensOf = N.killDelayedCallsTo = function(t, e, r) {
            "object" == typeof e && (r = e, e = !1);
            for (var i = N.getTweensOf(t, e), n = i.length; --n > -1;) i[n]._kill(r, t)
          };
          var ot = w("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
          }, !0);
          if (c = ot.prototype, ot.version = "1.19.0", ot.API = 2, c._firstPT = null, c._addTween = Y, c.setRatio = W, c._kill = function(t) {
              var e, r = this._overwriteProps,
                i = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = r.length; --e > -1;) null != t[r[e]] && r.splice(e, 1);
              for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
              return !1
            }, c._mod = c._roundProps = function(t) {
              for (var e, r = this._firstPT; r;) e = t[this._propName] || null != r.n && t[r.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === r.f ? r.t._applyPT.m = e : r.m = e), r = r._next
            }, N._onPluginEvent = function(t, e) {
              var r, i, n, o, s, a = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; a;) {
                  for (s = a._next, i = n; i && i.pr > a.pr;) i = i._next;
                  (a._prev = i ? i._prev : o) ? a._prev._next = a: n = a, (a._next = i) ? i._prev = a : o = a, a = s
                }
                a = e._firstPT = n
              }
              for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (r = !0), a = a._next;
              return r
            }, ot.activate = function(t) {
              for (var e = t.length; --e > -1;) t[e].API === ot.API && (H[(new t[e])._propName] = t[e]);
              return !0
            }, T.plugin = function(t) {
              if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
              var e, r = t.propName,
                i = t.priority || 0,
                n = t.overwriteProps,
                o = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps"
                },
                s = w("plugins." + r.charAt(0).toUpperCase() + r.substr(1) + "Plugin", function() {
                  ot.call(this, r, i), this._overwriteProps = n || []
                }, t.global === !0),
                a = s.prototype = new ot(r);
              a.constructor = s, s.API = t.API;
              for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
              return s.version = t.version, ot.activate([s]), s
            }, h = o._gsQueue) {
            for (l = 0; l < h.length; l++) h[l]();
            for (c in b) b[c].func || o.console.log("GSAP encountered missing dependency: " + c)
          }
          d = !1
        }
      }("undefined" != typeof t && t.exports && "undefined" != typeof o ? o : this || window, "TweenMax")
  }).call(e, function() {
    return this
  }())
}, function(t, e, r) {
  "use strict";

  function i() {}

  function n(t, e, r) {
    this.fn = t, this.context = e, this.once = r || !1
  }

  function o() {
    this._events = new i, this._eventsCount = 0
  }
  var s = Object.prototype.hasOwnProperty,
    a = "~";
  Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (a = !1)), o.prototype.eventNames = function() {
    var t, e, r = [];
    if (0 === this._eventsCount) return r;
    for (e in t = this._events) s.call(t, e) && r.push(a ? e.slice(1) : e);
    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
  }, o.prototype.listeners = function(t, e) {
    var r = a ? a + t : t,
      i = this._events[r];
    if (e) return !!i;
    if (!i) return [];
    if (i.fn) return [i.fn];
    for (var n = 0, o = i.length, s = new Array(o); n < o; n++) s[n] = i[n].fn;
    return s
  }, o.prototype.emit = function(t, e, r, i, n, o) {
    var s = a ? a + t : t;
    if (!this._events[s]) return !1;
    var u, h, l = this._events[s],
      c = arguments.length;
    if (l.fn) {
      switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
        case 1:
          return l.fn.call(l.context), !0;
        case 2:
          return l.fn.call(l.context, e), !0;
        case 3:
          return l.fn.call(l.context, e, r), !0;
        case 4:
          return l.fn.call(l.context, e, r, i), !0;
        case 5:
          return l.fn.call(l.context, e, r, i, n), !0;
        case 6:
          return l.fn.call(l.context, e, r, i, n, o), !0
      }
      for (h = 1, u = new Array(c - 1); h < c; h++) u[h - 1] = arguments[h];
      l.fn.apply(l.context, u)
    } else {
      var f, d = l.length;
      for (h = 0; h < d; h++) switch (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), c) {
        case 1:
          l[h].fn.call(l[h].context);
          break;
        case 2:
          l[h].fn.call(l[h].context, e);
          break;
        case 3:
          l[h].fn.call(l[h].context, e, r);
          break;
        case 4:
          l[h].fn.call(l[h].context, e, r, i);
          break;
        default:
          if (!u)
            for (f = 1, u = new Array(c - 1); f < c; f++) u[f - 1] = arguments[f];
          l[h].fn.apply(l[h].context, u)
      }
    }
    return !0
  }, o.prototype.on = function(t, e, r) {
    var i = new n(e, r || this),
      o = a ? a + t : t;
    return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this
  }, o.prototype.once = function(t, e, r) {
    var i = new n(e, r || this, (!0)),
      o = a ? a + t : t;
    return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], i] : this._events[o].push(i) : (this._events[o] = i, this._eventsCount++), this
  }, o.prototype.removeListener = function(t, e, r, n) {
    var o = a ? a + t : t;
    if (!this._events[o]) return this;
    if (!e) return 0 === --this._eventsCount ? this._events = new i : delete this._events[o], this;
    var s = this._events[o];
    if (s.fn) s.fn !== e || n && !s.once || r && s.context !== r || (0 === --this._eventsCount ? this._events = new i : delete this._events[o]);
    else {
      for (var u = 0, h = [], l = s.length; u < l; u++)(s[u].fn !== e || n && !s[u].once || r && s[u].context !== r) && h.push(s[u]);
      h.length ? this._events[o] = 1 === h.length ? h[0] : h : 0 === --this._eventsCount ? this._events = new i : delete this._events[o]
    }
    return this
  }, o.prototype.removeAllListeners = function(t) {
    var e;
    return t ? (e = a ? a + t : t, this._events[e] && (0 === --this._eventsCount ? this._events = new i : delete this._events[e])) : (this._events = new i, this._eventsCount = 0), this
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
    return this
  }, o.prefixed = a, o.EventEmitter = o, t.exports = o
}, function(t, e) {
  var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = r)
}, function(t, e) {
  var r = {}.hasOwnProperty;
  t.exports = function(t, e) {
    return r.call(t, e)
  }
}, function(t, e, r) {
  var i = r(157),
    n = r(44);
  t.exports = function(t) {
    return i(n(t))
  }
}, function(t, e, r) {
  (function(t) {
    "use strict";

    function i(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e["default"] = t, e
    }
    e.__esModule = !0, e.loader = e.prepare = e.particles = e.mesh = e.loaders = e.interaction = e.filters = e.extras = e.extract = e.accessibility = void 0;
    var n = r(221);
    Object.keys(n).forEach(function(t) {
      "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return n[t]
        }
      })
    });
    var o = r(1);
    Object.keys(o).forEach(function(t) {
      "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return o[t]
        }
      })
    }), r(252);
    var s = r(182),
      a = i(s),
      u = r(223),
      h = i(u),
      l = r(67),
      c = i(l),
      f = r(116),
      d = i(f),
      p = r(240),
      _ = i(p),
      v = r(120),
      y = i(v),
      g = r(124),
      m = i(g),
      b = r(125),
      x = i(b),
      T = r(126),
      w = i(T);
    e.accessibility = a, e.extract = h, e.extras = c, e.filters = d, e.interaction = _, e.loaders = y, e.mesh = m, e.particles = x, e.prepare = w;
    var E = y && y.Loader ? new y.Loader : null;
    e.loader = E, t.PIXI = e
  }).call(e, function() {
    return this
  }())
}, function(t, e, r) {
  t.exports = !r(30)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(t, e, r) {
  var i = r(17),
    n = r(32);
  t.exports = r(15) ? function(t, e, r) {
    return i.f(t, e, n(1, r))
  } : function(t, e, r) {
    return t[e] = r, t
  }
}, function(t, e, r) {
  var i = r(20),
    n = r(85),
    o = r(54),
    s = Object.defineProperty;
  e.f = r(15) ? Object.defineProperty : function(t, e, r) {
    if (i(t), e = o(e, !0), i(r), n) try {
      return s(t, e, r)
    } catch (a) {}
    if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
    return "value" in r && (t[e] = r.value), t
  }
}, function(t, e, r) {
  var i = r(52)("wks"),
    n = r(33),
    o = r(11).Symbol,
    s = "function" == typeof o,
    a = t.exports = function(t) {
      return i[t] || (i[t] = s && o[t] || (s ? o : n)("Symbol." + t))
    };
  a.store = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var o = r(146),
    s = n(o),
    a = r(43),
    u = n(a),
    h = r(79),
    l = i(h),
    c = r(80),
    f = i(c);
  s["default"].Resource = u["default"], s["default"].async = l, s["default"].base64 = f, t.exports = s["default"], e["default"] = s["default"]
}, function(t, e, r) {
  var i = r(22);
  t.exports = function(t) {
    if (!i(t)) throw TypeError(t + " is not an object!");
    return t
  }
}, function(t, e) {
  var r = t.exports = {
    version: "2.4.0"
  };
  "number" == typeof __e && (__e = r)
}, function(t, e) {
  t.exports = function(t) {
    return "object" == typeof t ? null !== t : "function" == typeof t
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function a(t) {
    if (t instanceof Array) {
      if ("precision" !== t[0].substring(0, 9)) {
        var e = t.slice(0);
        return e.unshift("precision " + c + " float;"), e
      }
    } else if ("precision" !== t.substring(0, 9)) return "precision " + c + " float;\n" + t;
    return t
  }
  e.__esModule = !0;
  var u = r(6),
    h = r(5),
    l = i(h),
    c = l["default"].PRECISION,
    f = function(t) {
      function e(r, i, s) {
        return n(this, e), o(this, t.call(this, r, a(i), a(s)))
      }
      return s(e, t), e
    }(u.GLShader);
  e["default"] = f
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
    function t(e) {
      r(this, t), this.renderer = e, this.renderer.on("context", this.onContextChange, this)
    }
    return t.prototype.onContextChange = function() {}, t.prototype.destroy = function() {
      this.renderer.off("context", this.onContextChange, this), this.renderer = null
    }, t
  }();
  e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    u = r(3),
    h = r(5),
    l = i(h),
    c = r(10),
    f = i(c),
    d = r(218),
    p = i(d),
    _ = r(41),
    v = i(_),
    y = function(t) {
      function e(r, i, s) {
        n(this, e);
        var a = o(this, t.call(this));
        return a.uid = (0, u.uid)(), a.touched = 0, a.resolution = s || l["default"].RESOLUTION, a.width = 100, a.height = 100, a.realWidth = 100, a.realHeight = 100, a.scaleMode = i || l["default"].SCALE_MODE, a.hasLoaded = !1, a.isLoading = !1, a.source = null, a.origSource = null, a.imageType = null, a.sourceScale = 1, a.premultipliedAlpha = !0, a.imageUrl = null, a.isPowerOfTwo = !1, a.mipmap = l["default"].MIPMAP_TEXTURES, a.wrapMode = l["default"].WRAP_MODE, a._glTextures = {}, a._enabled = 0, a._virtalBoundId = -1, r && a.loadSource(r), a
      }
      return s(e, t), e.prototype.update = function() {
        "svg" !== this.imageType && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = v["default"].isPow2(this.realWidth) && v["default"].isPow2(this.realHeight)), this.emit("update", this)
      }, e.prototype.loadSource = function(t) {
        var e = this,
          r = this.isLoading;
        this.hasLoaded = !1, this.isLoading = !1, r && this.source && (this.source.onload = null, this.source.onerror = null);
        var i = !this.source;
        if (this.source = t, (t.src && t.complete || t.getContext) && t.width && t.height) this._updateImageType(), "svg" === this.imageType ? this._loadSvgSource() : this._sourceLoaded(), i && this.emit("loaded", this);
        else if (!t.getContext) {
          var n = function() {
            e.isLoading = !0;
            var i = e;
            if (t.onload = function() {
                if (i._updateImageType(), t.onload = null, t.onerror = null, i.isLoading) return i.isLoading = !1, i._sourceLoaded(), "svg" === i.imageType ? void i._loadSvgSource() : void i.emit("loaded", i)
              }, t.onerror = function() {
                t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i.emit("error", i))
              }, t.complete && t.src) {
              if (t.onload = null, t.onerror = null, "svg" === i.imageType) return i._loadSvgSource(), {
                v: void 0
              };
              e.isLoading = !1, t.width && t.height ? (e._sourceLoaded(), r && e.emit("loaded", e)) : r && e.emit("error", e)
            }
          }();
          if ("object" === ("undefined" == typeof n ? "undefined" : a(n))) return n.v
        }
      }, e.prototype._updateImageType = function() {
        if (this.imageUrl) {
          var t = (0, u.decomposeDataUri)(this.imageUrl),
            e = void 0;
          if (t && "image" === t.mediaType) {
            var r = t.subType.split("+")[0];
            if (e = (0, u.getUrlFileExtension)("." + r), !e) throw new Error("Invalid image type in data URI.")
          } else e = (0, u.getUrlFileExtension)(this.imageUrl), e || (e = "png");
          this.imageType = e
        }
      }, e.prototype._loadSvgSource = function() {
        if ("svg" === this.imageType) {
          var t = (0, u.decomposeDataUri)(this.imageUrl);
          t ? this._loadSvgSourceUsingDataUri(t) : this._loadSvgSourceUsingXhr()
        }
      }, e.prototype._loadSvgSourceUsingDataUri = function(t) {
        var e = void 0;
        if ("base64" === t.encoding) {
          if (!atob) throw new Error("Your browser doesn't support base64 conversions.");
          e = atob(t.data)
        } else e = t.data;
        this._loadSvgSourceUsingString(e)
      }, e.prototype._loadSvgSourceUsingXhr = function() {
        var t = this,
          e = new XMLHttpRequest;
        e.onload = function() {
          if (e.readyState !== e.DONE || 200 !== e.status) throw new Error("Failed to load SVG using XHR.");
          t._loadSvgSourceUsingString(e.response)
        }, e.onerror = function() {
          return t.emit("error", t)
        }, e.open("GET", this.imageUrl, !0), e.send()
      }, e.prototype._loadSvgSourceUsingString = function(t) {
        var e = (0, u.getSvgSize)(t),
          r = e.width,
          i = e.height;
        if (!r || !i) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
        this.realWidth = Math.round(r * this.sourceScale), this.realHeight = Math.round(i * this.sourceScale), this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = v["default"].isPow2(this.realWidth) && v["default"].isPow2(this.realHeight);
        var n = document.createElement("canvas");
        n.width = this.realWidth, n.height = this.realHeight, n._pixiId = "canvas_" + (0, u.uid)(), n.getContext("2d").drawImage(this.source, 0, 0, r, i, 0, 0, this.realWidth, this.realHeight), this.origSource = this.source, this.source = n, u.BaseTextureCache[n._pixiId] = this, this.isLoading = !1, this._sourceLoaded(), this.emit("loaded", this)
      }, e.prototype._sourceLoaded = function() {
        this.hasLoaded = !0, this.update()
      }, e.prototype.destroy = function() {
        this.imageUrl && (delete u.BaseTextureCache[this.imageUrl], delete u.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")), this.source && this.source._pixiId && delete u.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
      }, e.prototype.dispose = function() {
        this.emit("dispose", this)
      }, e.prototype.updateSourceImage = function(t) {
        this.source.src = t, this.loadSource(this.source)
      }, e.fromImage = function(t, r, i, n) {
        var o = u.BaseTextureCache[t];
        if (!o) {
          var s = new Image;
          void 0 === r && 0 !== t.indexOf("data:") && (s.crossOrigin = (0, p["default"])(t)), o = new e(s, i), o.imageUrl = t, n && (o.sourceScale = n), o.resolution = (0, u.getResolutionOfUrl)(t), s.src = t, u.BaseTextureCache[t] = o
        }
        return o
      }, e.fromCanvas = function(t, r) {
        t._pixiId || (t._pixiId = "canvas_" + (0, u.uid)());
        var i = u.BaseTextureCache[t._pixiId];
        return i || (i = new e(t, r), u.BaseTextureCache[t._pixiId] = i), i
      }, e
    }(f["default"]);
  e["default"] = y
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(25),
    h = i(u),
    l = r(108),
    c = i(l),
    f = r(107),
    d = i(f),
    p = r(10),
    _ = i(p),
    v = r(4),
    y = r(3),
    g = function(t) {
      function e(r, i, s, a, u) {
        n(this, e);
        var h = o(this, t.call(this));
        if (h.noFrame = !1, i || (h.noFrame = !0, i = new v.Rectangle(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), h.baseTexture = r, h._frame = i, h.trim = a, h.valid = !1, h.requiresUpdate = !1, h._uvs = null, h.orig = s || i, h._rotate = Number(u || 0), u === !0) h._rotate = 2;
        else if (h._rotate % 2 !== 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        return r.hasLoaded ? (h.noFrame && (i = new v.Rectangle(0, 0, r.width, r.height), r.on("update", h.onBaseTextureUpdated, h)), h.frame = i) : r.once("loaded", h.onBaseTextureLoaded, h), h._updateID = 0, h.transform = null, h
      }
      return s(e, t), e.prototype.update = function() {
        this.baseTexture.update()
      }, e.prototype.onBaseTextureLoaded = function(t) {
        this._updateID++, this.noFrame ? this.frame = new v.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
      }, e.prototype.onBaseTextureUpdated = function(t) {
        this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
      }, e.prototype.destroy = function(t) {
        this.baseTexture && (t && (y.TextureCache[this.baseTexture.imageUrl] && delete y.TextureCache[this.baseTexture.imageUrl], this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, this.off("dispose", this.dispose, this), this.off("update", this.update, this)
      }, e.prototype.clone = function() {
        return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
      }, e.prototype._updateUvs = function() {
        this._uvs || (this._uvs = new d["default"]), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
      }, e.fromImage = function(t, r, i, n) {
        var o = y.TextureCache[t];
        return o || (o = new e(h["default"].fromImage(t, r, i, n)), y.TextureCache[t] = o), o
      }, e.fromFrame = function(t) {
        var e = y.TextureCache[t];
        if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
        return e
      }, e.fromCanvas = function(t, r) {
        return new e(h["default"].fromCanvas(t, r))
      }, e.fromVideo = function(t, r) {
        return "string" == typeof t ? e.fromVideoUrl(t, r) : new e(c["default"].fromVideo(t, r))
      }, e.fromVideoUrl = function(t, r) {
        return new e(c["default"].fromUrl(t, r))
      }, e.from = function(t) {
        if ("string" == typeof t) {
          var r = y.TextureCache[t];
          if (!r) {
            var i = null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/);
            return i ? e.fromVideoUrl(t) : e.fromImage(t)
          }
          return r
        }
        return t instanceof HTMLImageElement ? new e(new h["default"](t)) : t instanceof HTMLCanvasElement ? e.fromCanvas(t) : t instanceof HTMLVideoElement ? e.fromVideo(t) : t instanceof h["default"] ? new e(t) : t
      }, e.addTextureToCache = function(t, e) {
        y.TextureCache[e] = t
      }, e.removeTextureFromCache = function(t) {
        var e = y.TextureCache[t];
        return delete y.TextureCache[t], delete y.BaseTextureCache[t], e
      }, a(e, [{
        key: "frame",
        get: function() {
          return this._frame
        },
        set: function(t) {
          if (this._frame = t, this.noFrame = !1, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
          this.valid = t && t.width && t.height && this.baseTexture.hasLoaded,
            this.trim || this.rotate || (this.orig = t), this.valid && this._updateUvs()
        }
      }, {
        key: "rotate",
        get: function() {
          return this._rotate
        },
        set: function(t) {
          this._rotate = t, this.valid && this._updateUvs()
        }
      }, {
        key: "width",
        get: function() {
          return this.orig.width
        }
      }, {
        key: "height",
        get: function() {
          return this.orig.height
        }
      }]), e
    }(_["default"]);
  e["default"] = g, g.EMPTY = new g(new h["default"]), g.EMPTY.destroy = function() {}, g.EMPTY.on = function() {}, g.EMPTY.once = function() {}, g.EMPTY.emit = function() {}
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(1),
    h = i(u),
    l = new h.Point,
    c = new h.Polygon,
    f = function(t) {
      function e(r, i, s, a, u) {
        n(this, e);
        var l = o(this, t.call(this));
        return l._texture = null, l.uvs = s || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), l.vertices = i || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), l.indices = a || new Uint16Array([0, 1, 3, 2]), l.dirty = 0, l.indexDirty = 0, l.blendMode = h.BLEND_MODES.NORMAL, l.canvasPadding = 0, l.drawMode = u || e.DRAW_MODES.TRIANGLE_MESH, l.texture = r, l.shader = null, l.tintRgb = new Float32Array([1, 1, 1]), l._glDatas = {}, l.pluginName = "mesh", l
      }
      return s(e, t), e.prototype._renderWebGL = function(t) {
        t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
      }, e.prototype._renderCanvas = function(t) {
        t.plugins[this.pluginName].render(this)
      }, e.prototype._onTextureUpdate = function() {}, e.prototype._calculateBounds = function() {
        this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
      }, e.prototype.containsPoint = function(t) {
        if (!this.getBounds().contains(t.x, t.y)) return !1;
        this.worldTransform.applyInverse(t, l);
        for (var r = this.vertices, i = c.points, n = this.indices, o = this.indices.length, s = this.drawMode === e.DRAW_MODES.TRIANGLES ? 3 : 1, a = 0; a + 2 < o; a += s) {
          var u = 2 * n[a],
            h = 2 * n[a + 1],
            f = 2 * n[a + 2];
          if (i[0] = r[u], i[1] = r[u + 1], i[2] = r[h], i[3] = r[h + 1], i[4] = r[f], i[5] = r[f + 1], c.contains(l.x, l.y)) return !0
        }
        return !1
      }, a(e, [{
        key: "texture",
        get: function() {
          return this._texture
        },
        set: function(t) {
          this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
        }
      }, {
        key: "tint",
        get: function() {
          return h.utils.rgb2hex(this.tintRgb)
        },
        set: function(t) {
          this.tintRgb = h.utils.hex2rgb(t, this.tintRgb)
        }
      }]), e
    }(h.Container);
  e["default"] = f, f.DRAW_MODES = {
    TRIANGLE_MESH: 0,
    TRIANGLES: 1
  }
}, function(t, e, r) {
  var i, n, o;
  /**
   * isMobile.js v0.4.0
   *
   * A simple library to detect Apple phones and tablets,
   * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
   * and any kind of seven inch device, via user agent sniffing.
   *
   * @author: Kai Mallea (kmallea@gmail.com)
   *
   * @license: http://creativecommons.org/publicdomain/zero/1.0/
   */
  ! function(r) {
    var s = /iPhone/i,
      a = /iPod/i,
      u = /iPad/i,
      h = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
      l = /Android/i,
      c = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
      f = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
      d = /IEMobile/i,
      p = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
      _ = /BlackBerry/i,
      v = /BB10/i,
      y = /Opera Mini/i,
      g = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
      m = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
      b = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
      x = function(t, e) {
        return t.test(e)
      },
      T = function(t) {
        var e = t || navigator.userAgent,
          r = e.split("[FBAN");
        if ("undefined" != typeof r[1] && (e = r[0]), r = e.split("Twitter"), "undefined" != typeof r[1] && (e = r[0]), this.apple = {
            phone: x(s, e),
            ipod: x(a, e),
            tablet: !x(s, e) && x(u, e),
            device: x(s, e) || x(a, e) || x(u, e)
          }, this.amazon = {
            phone: x(c, e),
            tablet: !x(c, e) && x(f, e),
            device: x(c, e) || x(f, e)
          }, this.android = {
            phone: x(c, e) || x(h, e),
            tablet: !x(c, e) && !x(h, e) && (x(f, e) || x(l, e)),
            device: x(c, e) || x(f, e) || x(h, e) || x(l, e)
          }, this.windows = {
            phone: x(d, e),
            tablet: x(p, e),
            device: x(d, e) || x(p, e)
          }, this.other = {
            blackberry: x(_, e),
            blackberry10: x(v, e),
            opera: x(y, e),
            firefox: x(m, e),
            chrome: x(g, e),
            device: x(_, e) || x(v, e) || x(y, e) || x(m, e) || x(g, e)
          }, this.seven_inch = x(b, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
      },
      w = function() {
        var t = new T;
        return t.Class = T, t
      };
    "undefined" != typeof t && t.exports && "undefined" == typeof window ? t.exports = T : "undefined" != typeof t && t.exports && "undefined" != typeof window ? t.exports = w() : (n = [], i = r.isMobile = w(), o = "function" == typeof i ? i.apply(e, n) : i, !(void 0 !== o && (t.exports = o)))
  }(this)
}, function(t, e, r) {
  var i = r(11),
    n = r(21),
    o = r(83),
    s = r(16),
    a = "prototype",
    u = function(t, e, r) {
      var h, l, c, f = t & u.F,
        d = t & u.G,
        p = t & u.S,
        _ = t & u.P,
        v = t & u.B,
        y = t & u.W,
        g = d ? n : n[e] || (n[e] = {}),
        m = g[a],
        b = d ? i : p ? i[e] : (i[e] || {})[a];
      d && (r = e);
      for (h in r) l = !f && b && void 0 !== b[h], l && h in g || (c = l ? b[h] : r[h], g[h] = d && "function" != typeof b[h] ? r[h] : v && l ? o(c, i) : y && b[h] == c ? function(t) {
        var e = function(e, r, i) {
          if (this instanceof t) {
            switch (arguments.length) {
              case 0:
                return new t;
              case 1:
                return new t(e);
              case 2:
                return new t(e, r)
            }
            return new t(e, r, i)
          }
          return t.apply(this, arguments)
        };
        return e[a] = t[a], e
      }(c) : _ && "function" == typeof c ? o(Function.call, c) : c, _ && ((g.virtual || (g.virtual = {}))[h] = c, t & u.R && m && !m[h] && s(m, h, c)))
    };
  u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e) {
  t.exports = function(t) {
    try {
      return !!t()
    } catch (e) {
      return !0
    }
  }
}, function(t, e, r) {
  var i = r(90),
    n = r(45);
  t.exports = Object.keys || function(t) {
    return i(t, n)
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
}, function(t, e) {
  var r = 0,
    i = Math.random();
  t.exports = function(t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + i).toString(36))
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(3),
    h = r(93),
    l = i(h),
    c = function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this));
        return r.children = [], r
      }
      return s(e, t), e.prototype.onChildrenChange = function() {}, e.prototype.addChild = function(t) {
        var e = arguments.length;
        if (e > 1)
          for (var r = 0; r < e; r++) this.addChild(arguments[r]);
        else t.parent && t.parent.removeChild(t), t.parent = this, this.transform._parentID = -1, this._boundsID++, this.children.push(t), this.onChildrenChange(this.children.length - 1), t.emit("added", this);
        return t
      }, e.prototype.addChildAt = function(t, e) {
        if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
        return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this.onChildrenChange(e), t.emit("added", this), t
      }, e.prototype.swapChildren = function(t, e) {
        if (t !== e) {
          var r = this.getChildIndex(t),
            i = this.getChildIndex(e);
          this.children[r] = e, this.children[i] = t, this.onChildrenChange(r < i ? r : i)
        }
      }, e.prototype.getChildIndex = function(t) {
        var e = this.children.indexOf(t);
        if (e === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
      }, e.prototype.setChildIndex = function(t, e) {
        if (e < 0 || e >= this.children.length) throw new Error("The supplied index is out of bounds");
        var r = this.getChildIndex(t);
        (0, u.removeItems)(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
      }, e.prototype.getChildAt = function(t) {
        if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
        return this.children[t]
      }, e.prototype.removeChild = function(t) {
        var e = arguments.length;
        if (e > 1)
          for (var r = 0; r < e; r++) this.removeChild(arguments[r]);
        else {
          var i = this.children.indexOf(t);
          if (i === -1) return null;
          t.parent = null, (0, u.removeItems)(this.children, i, 1), this.transform._parentID = -1, this._boundsID++, this.onChildrenChange(i), t.emit("removed", this)
        }
        return t
      }, e.prototype.removeChildAt = function(t) {
        var e = this.getChildAt(t);
        return e.parent = null, (0, u.removeItems)(this.children, t, 1), this.onChildrenChange(t), e.emit("removed", this), e
      }, e.prototype.removeChildren = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments[1],
          r = t,
          i = "number" == typeof e ? e : this.children.length,
          n = i - r,
          o = void 0;
        if (n > 0 && n <= i) {
          o = this.children.splice(r, n);
          for (var s = 0; s < o.length; ++s) o[s].parent = null;
          this.onChildrenChange(t);
          for (var a = 0; a < o.length; ++a) o[a].emit("removed", this);
          return o
        }
        if (0 === n && 0 === this.children.length) return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
      }, e.prototype.updateTransform = function() {
        this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (var t = 0, e = this.children.length; t < e; ++t) {
          var r = this.children[t];
          r.visible && r.updateTransform()
        }
      }, e.prototype.calculateBounds = function() {
        this._bounds.clear(), this._calculateBounds();
        for (var t = 0; t < this.children.length; t++) {
          var e = this.children[t];
          e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds))
        }
        this._lastBoundsID = this._boundsID
      }, e.prototype._calculateBounds = function() {}, e.prototype.renderWebGL = function(t) {
        if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
          if (this._mask || this._filters) this.renderAdvancedWebGL(t);
          else {
            this._renderWebGL(t);
            for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].renderWebGL(t)
          }
      }, e.prototype.renderAdvancedWebGL = function(t) {
        t.flush();
        var e = this._filters,
          r = this._mask;
        if (e) {
          this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
          for (var i = 0; i < e.length; i++) e[i].enabled && this._enabledFilters.push(e[i]);
          this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
        }
        r && t.maskManager.pushMask(this, this._mask), this._renderWebGL(t);
        for (var n = 0, o = this.children.length; n < o; n++) this.children[n].renderWebGL(t);
        t.flush(), r && t.maskManager.popMask(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter()
      }, e.prototype._renderWebGL = function(t) {}, e.prototype._renderCanvas = function(t) {}, e.prototype.renderCanvas = function(t) {
        if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
          this._mask && t.maskManager.pushMask(this._mask), this._renderCanvas(t);
          for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].renderCanvas(t);
          this._mask && t.maskManager.popMask(t)
        }
      }, e.prototype.destroy = function(e) {
        t.prototype.destroy.call(this);
        var r = "boolean" == typeof e ? e : e && e.children,
          i = this.removeChildren(0, this.children.length);
        if (r)
          for (var n = 0; n < i.length; ++n) i[n].destroy(e)
      }, a(e, [{
        key: "width",
        get: function() {
          return this.scale.x * this.getLocalBounds().width
        },
        set: function(t) {
          var e = this.getLocalBounds().width;
          0 !== e ? this.scale.x = t / e : this.scale.x = 1, this._width = t
        }
      }, {
        key: "height",
        get: function() {
          return this.scale.y * this.getLocalBounds().height
        },
        set: function(t) {
          var e = this.getLocalBounds().height;
          0 !== e ? this.scale.y = t / e : this.scale.y = 1, this._height = t
        }
      }]), e
    }(l["default"]);
  e["default"] = c, c.prototype.containerUpdateTransform = c.prototype.updateTransform
}, function(t, e, r) {
  "use strict";

  function i(t, e) {
    var r = t.points;
    if (0 !== r.length) {
      var i = new n.Point(r[0], r[1]),
        s = new n.Point(r[r.length - 2], r[r.length - 1]);
      if (i.x === s.x && i.y === s.y) {
        r = r.slice(), r.pop(), r.pop(), s = new n.Point(r[r.length - 2], r[r.length - 1]);
        var a = s.x + .5 * (i.x - s.x),
          u = s.y + .5 * (i.y - s.y);
        r.unshift(a, u), r.push(a, u)
      }
      var h = e.points,
        l = e.indices,
        c = r.length / 2,
        f = r.length,
        d = h.length / 6,
        p = t.lineWidth / 2,
        _ = (0, o.hex2rgb)(t.lineColor),
        v = t.lineAlpha,
        y = _[0] * v,
        g = _[1] * v,
        m = _[2] * v,
        b = r[0],
        x = r[1],
        T = r[2],
        w = r[3],
        E = 0,
        O = 0,
        P = -(x - w),
        S = b - T,
        M = 0,
        C = 0,
        R = 0,
        A = 0,
        D = Math.sqrt(P * P + S * S);
      P /= D, S /= D, P *= p, S *= p, h.push(b - P, x - S, y, g, m, v), h.push(b + P, x + S, y, g, m, v);
      for (var I = 1; I < c - 1; ++I) {
        b = r[2 * (I - 1)], x = r[2 * (I - 1) + 1], T = r[2 * I], w = r[2 * I + 1], E = r[2 * (I + 1)], O = r[2 * (I + 1) + 1], P = -(x - w), S = b - T, D = Math.sqrt(P * P + S * S), P /= D, S /= D, P *= p, S *= p, M = -(w - O), C = T - E, D = Math.sqrt(M * M + C * C), M /= D, C /= D, M *= p, C *= p;
        var L = -S + x - (-S + w),
          k = -P + T - (-P + b),
          N = (-P + b) * (-S + w) - (-P + T) * (-S + x),
          j = -C + O - (-C + w),
          F = -M + T - (-M + E),
          B = (-M + E) * (-C + w) - (-M + T) * (-C + O),
          U = L * F - j * k;
        if (Math.abs(U) < .1) U += 10.1, h.push(T - P, w - S, y, g, m, v), h.push(T + P, w + S, y, g, m, v);
        else {
          var X = (k * B - F * N) / U,
            W = (j * N - L * B) / U,
            z = (X - T) * (X - T) + (W - w) * (W - w);
          z > 196 * p * p ? (R = P - M, A = S - C, D = Math.sqrt(R * R + A * A), R /= D, A /= D, R *= p, A *= p, h.push(T - R, w - A), h.push(y, g, m, v), h.push(T + R, w + A), h.push(y, g, m, v), h.push(T - R, w - A), h.push(y, g, m, v), f++) : (h.push(X, W), h.push(y, g, m, v), h.push(T - (X - T), w - (W - w)), h.push(y, g, m, v))
        }
      }
      b = r[2 * (c - 2)], x = r[2 * (c - 2) + 1], T = r[2 * (c - 1)], w = r[2 * (c - 1) + 1], P = -(x - w), S = b - T, D = Math.sqrt(P * P + S * S), P /= D, S /= D, P *= p, S *= p, h.push(T - P, w - S), h.push(y, g, m, v), h.push(T + P, w + S), h.push(y, g, m, v), l.push(d);
      for (var Y = 0; Y < f; ++Y) l.push(d++);
      l.push(d - 1)
    }
  }
  e.__esModule = !0, e["default"] = i;
  var n = r(4),
    o = r(3)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(99),
    u = i(a),
    h = r(197),
    l = i(h),
    c = r(100),
    f = i(c),
    d = r(198),
    p = i(d),
    _ = r(3),
    v = r(2),
    y = r(5),
    g = i(y),
    m = function(t) {
      function e(r, i) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        n(this, e);
        var a = o(this, t.call(this, "Canvas", r, i, s));
        return a.type = v.RENDERER_TYPE.CANVAS, a.rootContext = a.view.getContext("2d", {
          alpha: a.transparent
        }), a.refresh = !0, a.maskManager = new l["default"](a), a.smoothProperty = "imageSmoothingEnabled", a.rootContext.imageSmoothingEnabled || (a.rootContext.webkitImageSmoothingEnabled ? a.smoothProperty = "webkitImageSmoothingEnabled" : a.rootContext.mozImageSmoothingEnabled ? a.smoothProperty = "mozImageSmoothingEnabled" : a.rootContext.oImageSmoothingEnabled ? a.smoothProperty = "oImageSmoothingEnabled" : a.rootContext.msImageSmoothingEnabled && (a.smoothProperty = "msImageSmoothingEnabled")), a.initPlugins(), a.blendModes = (0, p["default"])(), a._activeBlendMode = null, a.context = null, a.renderingToScreen = !1, a.resize(r, i), a
      }
      return s(e, t), e.prototype.render = function(t, e, r, i, n) {
        if (this.view) {
          this.renderingToScreen = !e, this.emit("prerender");
          var o = this.resolution;
          e ? (e = e.baseTexture || e, e._canvasRenderTarget || (e._canvasRenderTarget = new f["default"](e.width, e.height, e.resolution), e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, this.resolution = e._canvasRenderTarget.resolution) : this.context = this.rootContext;
          var s = this.context;
          if (e || (this._lastObjectRendered = t), !n) {
            var a = t.parent,
              u = this._tempDisplayObjectParent.transform.worldTransform;
            i ? i.copy(u) : u.identity(), t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = a
          }
          s.setTransform(1, 0, 0, 1, 0, 0), s.globalAlpha = 1, s.globalCompositeOperation = this.blendModes[v.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (s.fillStyle = "black", s.clear()), (void 0 !== r ? r : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? s.clearRect(0, 0, this.width, this.height) : (s.fillStyle = this._backgroundColorString, s.fillRect(0, 0, this.width, this.height)));
          var h = this.context;
          this.context = s, t.renderCanvas(this), this.context = h, this.resolution = o, this.emit("postrender")
        }
      }, e.prototype.clear = function(t) {
        var e = this.context;
        t = t || this._backgroundColorString, !this.transparent && t ? (e.fillStyle = t, e.fillRect(0, 0, this.width, this.height)) : e.clearRect(0, 0, this.width, this.height)
      }, e.prototype.setBlendMode = function(t) {
        this._activeBlendMode !== t && (this._activeBlendMode = t, this.context.globalCompositeOperation = this.blendModes[t])
      }, e.prototype.destroy = function(e) {
        this.destroyPlugins(), t.prototype.destroy.call(this, e), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
      }, e.prototype.resize = function(e, r) {
        t.prototype.resize.call(this, e, r), this.smoothProperty && (this.rootContext[this.smoothProperty] = g["default"].SCALE_MODE === v.SCALE_MODES.LINEAR)
      }, e
    }(u["default"]);
  e["default"] = m, _.pluginTarget.mixin(m)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(24),
    u = i(a),
    h = function(t) {
      function e() {
        return n(this, e), o(this, t.apply(this, arguments))
      }
      return s(e, t), e.prototype.start = function() {}, e.prototype.stop = function() {
        this.flush()
      }, e.prototype.flush = function() {}, e.prototype.render = function(t) {}, e
    }(u["default"]);
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(4),
    s = r(2),
    a = r(5),
    u = i(a),
    h = r(6),
    l = function() {
      function t(e, r, i, a, l, c) {
        n(this, t), this.gl = e, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new o.Rectangle(0, 0, 1, 1), this.resolution = l || u["default"].RESOLUTION, this.projectionMatrix = new o.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new o.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = a || u["default"].SCALE_MODE, this.root = c, this.root ? (this.frameBuffer = new h.GLFramebuffer(e, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = h.GLFramebuffer.createRGBA(e, 100, 100), this.scaleMode === s.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(r, i)
      }
      return t.prototype.clear = function(t) {
        var e = t || this.clearColor;
        this.frameBuffer.clear(e[0], e[1], e[2], e[3])
      }, t.prototype.attachStencilBuffer = function() {
        this.root || this.frameBuffer.enableStencil()
      }, t.prototype.setFrame = function(t, e) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t
      }, t.prototype.activate = function() {
        var t = this.gl;
        this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
      }, t.prototype.calculateProjection = function(t, e) {
        var r = this.projectionMatrix;
        e = e || t, r.identity(), this.root ? (r.a = 1 / t.width * 2, r.d = -1 / t.height * 2, r.tx = -1 - e.x * r.a, r.ty = 1 - e.y * r.d) : (r.a = 1 / t.width * 2, r.d = 1 / t.height * 2, r.tx = -1 - e.x * r.a, r.ty = -1 - e.y * r.d)
      }, t.prototype.resize = function(t, e) {
        if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) {
          this.size.width = t, this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, this.frameBuffer.resize(t * this.resolution, e * this.resolution);
          var r = this.frame || this.size;
          this.calculateProjection(r)
        }
      }, t.prototype.destroy = function() {
        this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
      }, t
    }();
  e["default"] = l
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(264),
    o = i(n),
    s = r(263),
    a = i(s),
    u = r(130),
    h = i(u);
  e["default"] = function(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, h["default"])(e)));
    t.prototype = (0, a["default"])(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (o["default"] ? (0, o["default"])(t, e) : t.__proto__ = e)
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(130),
    o = i(n);
  e["default"] = function(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, o["default"])(e)) && "function" != typeof e ? t : e
  }
}, function(t, e) {
  "use strict";
  "use restrict";

  function r(t) {
    var e = 32;
    return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
  }
  var i = 32;
  e.INT_BITS = i, e.INT_MAX = 2147483647, e.INT_MIN = -1 << i - 1, e.sign = function(t) {
    return (t > 0) - (t < 0)
  }, e.abs = function(t) {
    var e = t >> i - 1;
    return (t ^ e) - e
  }, e.min = function(t, e) {
    return e ^ (t ^ e) & -(t < e)
  }, e.max = function(t, e) {
    return t ^ (t ^ e) & -(t < e)
  }, e.isPow2 = function(t) {
    return !(t & t - 1 || !t)
  }, e.log2 = function(t) {
    var e, r;
    return e = (t > 65535) << 4, t >>>= e, r = (t > 255) << 3, t >>>= r, e |= r, r = (t > 15) << 2, t >>>= r, e |= r, r = (t > 3) << 1, t >>>= r, e |= r, e | t >> 1
  }, e.log10 = function(t) {
    return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
  }, e.popCount = function(t) {
    return t -= t >>> 1 & 1431655765, t = (858993459 & t) + (t >>> 2 & 858993459), 16843009 * (t + (t >>> 4) & 252645135) >>> 24
  }, e.countTrailingZeros = r, e.nextPow2 = function(t) {
    return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1
  }, e.prevPow2 = function(t) {
    return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t - (t >>> 1)
  }, e.parity = function(t) {
    return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, t &= 15, 27030 >>> t & 1
  };
  var n = new Array(256);
  ! function(t) {
    for (var e = 0; e < 256; ++e) {
      var r = e,
        i = e,
        n = 7;
      for (r >>>= 1; r; r >>>= 1) i <<= 1, i |= 1 & r, --n;
      t[e] = i << n & 255
    }
  }(n), e.reverse = function(t) {
    return n[255 & t] << 24 | n[t >>> 8 & 255] << 16 | n[t >>> 16 & 255] << 8 | n[t >>> 24 & 255]
  }, e.interleave2 = function(t, e) {
    return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
  }, e.deinterleave2 = function(t, e) {
    return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), t = 65535 & (t | t >>> 16), t << 16 >> 16
  }, e.interleave3 = function(t, e, r) {
    return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, r &= 1023, r = 4278190335 & (r | r << 16), r = 251719695 & (r | r << 8), r = 3272356035 & (r | r << 4), r = 1227133513 & (r | r << 2), t | r << 2
  }, e.deinterleave3 = function(t, e) {
    return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), t = 1023 & (t | t >>> 16), t << 22 >> 22
  }, e.nextCombination = function(t) {
    var e = t | t - 1;
    return e + 1 | (~e & -~e) - 1 >>> r(t) + 1
  }
}, function(t, e) {
  var r = function(t, e) {
      if (!i) {
        var r = Object.keys(n);
        i = {};
        for (var o = 0; o < r.length; ++o) {
          var s = r[o];
          i[t[s]] = n[s]
        }
      }
      return i[e]
    },
    i = null,
    n = {
      FLOAT: "float",
      FLOAT_VEC2: "vec2",
      FLOAT_VEC3: "vec3",
      FLOAT_VEC4: "vec4",
      INT: "int",
      INT_VEC2: "ivec2",
      INT_VEC3: "ivec3",
      INT_VEC4: "ivec4",
      BOOL: "bool",
      BOOL_VEC2: "bvec2",
      BOOL_VEC3: "bvec3",
      BOOL_VEC4: "bvec4",
      FLOAT_MAT2: "mat2",
      FLOAT_MAT3: "mat3",
      FLOAT_MAT4: "mat4",
      SAMPLER_2D: "sampler2D"
    };
  t.exports = r
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o() {}

  function s(t, e, r) {
    e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
  }

  function a(t) {
    return t.toString().replace("object ", "")
  }
  e.__esModule = !0;
  var u = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    h = r(69),
    l = i(h),
    c = r(78),
    f = i(c),
    d = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
    p = null,
    _ = 0,
    v = 200,
    y = 204,
    g = function() {
      function t(e, r, i) {
        if (n(this, t), "string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
        i = i || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.data = null, this.crossOrigin = i.crossOrigin === !0 ? "anonymous" : i.crossOrigin, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = o, this._onLoadBinding = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this), this.onStart = new f["default"], this.onProgress = new f["default"], this.onComplete = new f["default"], this.onAfterMiddleware = new f["default"]
      }
      return t.setExtensionLoadType = function(e, r) {
        s(t._loadTypeMap, e, r)
      }, t.setExtensionXhrType = function(e, r) {
        s(t._xhrTypeMap, e, r)
      }, t.prototype.complete = function() {
        if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
        this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
      }, t.prototype.abort = function(e) {
        if (!this.error) {
          if (this.error = new Error(e), this.xhr) this.xhr.abort();
          else if (this.xdr) this.xdr.abort();
          else if (this.data)
            if (this.data.src) this.data.src = t.EMPTY_GIF;
            else
              for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
          this.complete()
        }
      }, t.prototype.load = function(e) {
        var r = this;
        if (!this.isLoading) {
          if (this.isComplete) return void(e && setTimeout(function() {
            return e(r)
          }, 1));
          switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.crossOrigin !== !1 && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
            case t.LOAD_TYPE.IMAGE:
              this.type = t.TYPE.IMAGE, this._loadElement("image");
              break;
            case t.LOAD_TYPE.AUDIO:
              this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
              break;
            case t.LOAD_TYPE.VIDEO:
              this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
              break;
            case t.LOAD_TYPE.XHR:
            default:
              d && this.crossOrigin ? this._loadXdr() : this._loadXhr()
          }
        }
      }, t.prototype._hasFlag = function(t) {
        return !!(this._flags & t)
      }, t.prototype._setFlag = function(t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t
      }, t.prototype._loadElement = function(t) {
        this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && "undefined" != typeof window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
      }, t.prototype._loadSourceElement = function(t) {
        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && "undefined" != typeof window.Audio ? this.data = new Audio : this.data = document.createElement(t), null === this.data) return void this.abort("Unsupported element: " + t);
        if (!this.metadata.skipSource)
          if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
          else if (Array.isArray(this.url))
          for (var e = 0; e < this.url.length; ++e) this.data.appendChild(this._createSource(t, this.url[e]));
        else this.data.appendChild(this._createSource(t, this.url));
        this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
      }, t.prototype._loadXhr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var e = this.xhr = new XMLHttpRequest;
        e.open("GET", this.url, !0), this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
      }, t.prototype._loadXdr = function() {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var t = this.xhr = new XDomainRequest;
        t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
          return t.send()
        }, 1)
      }, t.prototype._createSource = function(t, e, r) {
        r || (r = t + "/" + e.substr(e.lastIndexOf(".") + 1));
        var i = document.createElement("source");
        return i.src = e, i.type = r, i
      }, t.prototype._onError = function(t) {
        this.abort("Failed to load element using: " + t.target.nodeName)
      }, t.prototype._onProgress = function(t) {
        t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
      }, t.prototype._xhrOnError = function() {
        var t = this.xhr;
        this.abort(a(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
      }, t.prototype._xhrOnAbort = function() {
        this.abort(a(this.xhr) + " Request was aborted by the user.")
      }, t.prototype._xdrOnTimeout = function() {
        this.abort(a(this.xhr) + " Request timed out.")
      }, t.prototype._xhrOnLoad = function() {
        var e = this.xhr,
          r = "undefined" == typeof e.status ? e.status : v;
        if (!(r === v || r === y || r === _ && e.responseText.length > 0)) return void this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL);
        if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = e.responseText, this.type = t.TYPE.TEXT;
        else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
          this.data = JSON.parse(e.responseText), this.type = t.TYPE.JSON
        } catch (i) {
          return void this.abort("Error trying to parse loaded json: " + i)
        } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
          if (window.DOMParser) {
            var n = new DOMParser;
            this.data = n.parseFromString(e.responseText, "text/xml")
          } else {
            var o = document.createElement("div");
            o.innerHTML = e.responseText, this.data = o
          }
          this.type = t.TYPE.XML
        } catch (i) {
          return void this.abort("Error trying to parse loaded xml: " + i)
        } else this.data = e.response || e.responseText;
        this.complete()
      }, t.prototype._determineCrossOrigin = function(t, e) {
        if (0 === t.indexOf("data:")) return "";
        e = e || window.location, p || (p = document.createElement("a")), p.href = t, t = (0, l["default"])(p.href, {
          strictMode: !0
        });
        var r = !t.port && "" === e.port || t.port === e.port,
          i = t.protocol ? t.protocol + ":" : "";
        return t.host === e.hostname && r && i === e.protocol ? "" : "anonymous"
      }, t.prototype._determineXhrType = function() {
        return t._xhrTypeMap[this._getExtension()] || t.XHR_RESPONSE_TYPE.TEXT
      }, t.prototype._determineLoadType = function() {
        return t._loadTypeMap[this._getExtension()] || t.LOAD_TYPE.XHR
      }, t.prototype._getExtension = function() {
        var t = this.url,
          e = "";
        if (this.isDataUrl) {
          var r = t.indexOf("/");
          e = t.substring(r + 1, t.indexOf(";", r))
        } else {
          var i = t.indexOf("?");
          i !== -1 && (t = t.substring(0, i)), e = t.substring(t.lastIndexOf(".") + 1)
        }
        return e.toLowerCase()
      }, t.prototype._getMimeFromXhrType = function(e) {
        switch (e) {
          case t.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary";
          case t.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob";
          case t.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml";
          case t.XHR_RESPONSE_TYPE.JSON:
            return "application/json";
          case t.XHR_RESPONSE_TYPE.DEFAULT:
          case t.XHR_RESPONSE_TYPE.TEXT:
          default:
            return "text/plain"
        }
      }, u(t, [{
        key: "isDataUrl",
        get: function() {
          return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
        }
      }, {
        key: "isComplete",
        get: function() {
          return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
        }
      }, {
        key: "isLoading",
        get: function() {
          return this._hasFlag(t.STATUS_FLAGS.LOADING)
        }
      }]), t
    }();
  e["default"] = g, g.STATUS_FLAGS = {
    NONE: 0,
    DATA_URL: 1,
    COMPLETE: 2,
    LOADING: 4
  }, g.TYPE = {
    UNKNOWN: 0,
    JSON: 1,
    XML: 2,
    IMAGE: 3,
    AUDIO: 4,
    VIDEO: 5,
    TEXT: 6
  }, g.LOAD_TYPE = {
    XHR: 1,
    IMAGE: 2,
    AUDIO: 3,
    VIDEO: 4
  }, g.XHR_RESPONSE_TYPE = {
    DEFAULT: "text",
    BUFFER: "arraybuffer",
    BLOB: "blob",
    DOCUMENT: "document",
    JSON: "json",
    TEXT: "text"
  }, g._loadTypeMap = {
    gif: g.LOAD_TYPE.IMAGE,
    png: g.LOAD_TYPE.IMAGE,
    bmp: g.LOAD_TYPE.IMAGE,
    jpg: g.LOAD_TYPE.IMAGE,
    jpeg: g.LOAD_TYPE.IMAGE,
    tif: g.LOAD_TYPE.IMAGE,
    tiff: g.LOAD_TYPE.IMAGE,
    webp: g.LOAD_TYPE.IMAGE,
    tga: g.LOAD_TYPE.IMAGE,
    svg: g.LOAD_TYPE.IMAGE,
    "svg+xml": g.LOAD_TYPE.IMAGE,
    mp3: g.LOAD_TYPE.AUDIO,
    ogg: g.LOAD_TYPE.AUDIO,
    wav: g.LOAD_TYPE.AUDIO,
    mp4: g.LOAD_TYPE.VIDEO,
    webm: g.LOAD_TYPE.VIDEO
  }, g._xhrTypeMap = {
    xhtml: g.XHR_RESPONSE_TYPE.DOCUMENT,
    html: g.XHR_RESPONSE_TYPE.DOCUMENT,
    htm: g.XHR_RESPONSE_TYPE.DOCUMENT,
    xml: g.XHR_RESPONSE_TYPE.DOCUMENT,
    tmx: g.XHR_RESPONSE_TYPE.DOCUMENT,
    svg: g.XHR_RESPONSE_TYPE.DOCUMENT,
    tsx: g.XHR_RESPONSE_TYPE.DOCUMENT,
    gif: g.XHR_RESPONSE_TYPE.BLOB,
    png: g.XHR_RESPONSE_TYPE.BLOB,
    bmp: g.XHR_RESPONSE_TYPE.BLOB,
    jpg: g.XHR_RESPONSE_TYPE.BLOB,
    jpeg: g.XHR_RESPONSE_TYPE.BLOB,
    tif: g.XHR_RESPONSE_TYPE.BLOB,
    tiff: g.XHR_RESPONSE_TYPE.BLOB,
    webp: g.XHR_RESPONSE_TYPE.BLOB,
    tga: g.XHR_RESPONSE_TYPE.BLOB,
    json: g.XHR_RESPONSE_TYPE.JSON,
    text: g.XHR_RESPONSE_TYPE.TEXT,
    txt: g.XHR_RESPONSE_TYPE.TEXT,
    ttf: g.XHR_RESPONSE_TYPE.BUFFER,
    otf: g.XHR_RESPONSE_TYPE.BUFFER
  }, g.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
}, function(t, e) {
  t.exports = function(t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);
    return t
  }
}, function(t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(t, e) {
  t.exports = {}
}, function(t, e) {
  t.exports = !0
}, function(t, e, r) {
  var i = r(20),
    n = r(163),
    o = r(45),
    s = r(51)("IE_PROTO"),
    a = function() {},
    u = "prototype",
    h = function() {
      var t, e = r(84)("iframe"),
        i = o.length,
        n = "<",
        s = ">";
      for (e.style.display = "none", r(156).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(n + "script" + s + "document.F=Object" + n + "/script" + s), t.close(), h = t.F; i--;) delete h[u][o[i]];
      return h()
    };
  t.exports = Object.create || function(t, e) {
    var r;
    return null !== t ? (a[u] = i(t), r = new a, a[u] = null, r[s] = t) : r = h(), void 0 === e ? r : n(r, e)
  }
}, function(t, e) {
  e.f = {}.propertyIsEnumerable
}, function(t, e, r) {
  var i = r(17).f,
    n = r(12),
    o = r(18)("toStringTag");
  t.exports = function(t, e, r) {
    t && !n(t = r ? t : t.prototype, o) && i(t, o, {
      configurable: !0,
      value: e
    })
  }
}, function(t, e, r) {
  var i = r(52)("keys"),
    n = r(33);
  t.exports = function(t) {
    return i[t] || (i[t] = n(t))
  }
}, function(t, e, r) {
  var i = r(11),
    n = "__core-js_shared__",
    o = i[n] || (i[n] = {});
  t.exports = function(t) {
    return o[t] || (o[t] = {})
  }
}, function(t, e) {
  var r = Math.ceil,
    i = Math.floor;
  t.exports = function(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? i : r)(t)
  }
}, function(t, e, r) {
  var i = r(22);
  t.exports = function(t, e) {
    if (!i(t)) return t;
    var r, n;
    if (e && "function" == typeof(r = t.toString) && !i(n = r.call(t))) return n;
    if ("function" == typeof(r = t.valueOf) && !i(n = r.call(t))) return n;
    if (!e && "function" == typeof(r = t.toString) && !i(n = r.call(t))) return n;
    throw TypeError("Can't convert object to primitive value")
  }
}, function(t, e, r) {
  var i = r(11),
    n = r(21),
    o = r(47),
    s = r(56),
    a = r(17).f;
  t.exports = function(t) {
    var e = n.Symbol || (n.Symbol = o ? {} : i.Symbol || {});
    "_" == t.charAt(0) || t in e || a(e, t, {
      value: s.f(t)
    })
  }
}, function(t, e, r) {
  e.f = r(18)
}, function(t, e, r) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var n = r(4),
    o = function() {
      function t() {
        i(this, t), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0), this.rect = null
      }
      return t.prototype.isEmpty = function() {
        return this.minX > this.maxX || this.minY > this.maxY
      }, t.prototype.clear = function() {
        this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0)
      }, t.prototype.getRectangle = function(t) {
        return this.minX > this.maxX || this.minY > this.maxY ? n.Rectangle.EMPTY : (t = t || new n.Rectangle(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
      }, t.prototype.addPoint = function(t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
      }, t.prototype.addQuad = function(t) {
        var e = this.minX,
          r = this.minY,
          i = this.maxX,
          n = this.maxY,
          o = t[0],
          s = t[1];
        e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, o = t[2], s = t[3], e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, o = t[4], s = t[5], e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, o = t[6], s = t[7], e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, this.minX = e, this.minY = r, this.maxX = i, this.maxY = n
      }, t.prototype.addFrame = function(t, e, r, i, n) {
        var o = t.worldTransform,
          s = o.a,
          a = o.b,
          u = o.c,
          h = o.d,
          l = o.tx,
          c = o.ty,
          f = this.minX,
          d = this.minY,
          p = this.maxX,
          _ = this.maxY,
          v = s * e + u * r + l,
          y = a * e + h * r + c;
        f = v < f ? v : f, d = y < d ? y : d, p = v > p ? v : p, _ = y > _ ? y : _, v = s * i + u * r + l, y = a * i + h * r + c, f = v < f ? v : f, d = y < d ? y : d, p = v > p ? v : p, _ = y > _ ? y : _, v = s * e + u * n + l, y = a * e + h * n + c, f = v < f ? v : f, d = y < d ? y : d, p = v > p ? v : p, _ = y > _ ? y : _, v = s * i + u * n + l, y = a * i + h * n + c, f = v < f ? v : f, d = y < d ? y : d, p = v > p ? v : p, _ = y > _ ? y : _, this.minX = f, this.minY = d, this.maxX = p, this.maxY = _
      }, t.prototype.addVertices = function(t, e, r, i) {
        for (var n = t.worldTransform, o = n.a, s = n.b, a = n.c, u = n.d, h = n.tx, l = n.ty, c = this.minX, f = this.minY, d = this.maxX, p = this.maxY, _ = r; _ < i; _ += 2) {
          var v = e[_],
            y = e[_ + 1],
            g = o * v + a * y + h,
            m = u * y + s * v + l;
          c = g < c ? g : c, f = m < f ? m : f, d = g > d ? g : d, p = m > p ? m : p
        }
        this.minX = c, this.minY = f, this.maxX = d, this.maxY = p
      }, t.prototype.addBounds = function(t) {
        var e = this.minX,
          r = this.minY,
          i = this.maxX,
          n = this.maxY;
        this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > i ? t.maxX : i, this.maxY = t.maxY > n ? t.maxY : n
      }, t.prototype.addBoundsMask = function(t, e) {
        var r = t.minX > e.minX ? t.minX : e.minX,
          i = t.minY > e.minY ? t.minY : e.minY,
          n = t.maxX < e.maxX ? t.maxX : e.maxX,
          o = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (r <= n && i <= o) {
          var s = this.minX,
            a = this.minY,
            u = this.maxX,
            h = this.maxY;
          this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > u ? n : u, this.maxY = o > h ? o : h
        }
      }, t.prototype.addBoundsArea = function(t, e) {
        var r = t.minX > e.x ? t.minX : e.x,
          i = t.minY > e.y ? t.minY : e.y,
          n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
          o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (r <= n && i <= o) {
          var s = this.minX,
            a = this.minY,
            u = this.maxX,
            h = this.maxY;
          this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > u ? n : u, this.maxY = o > h ? o : h
        }
      }, t
    }();
  e["default"] = o
}, function(t, e, r) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var n = r(4),
    o = function() {
      function t() {
        i(this, t), this.worldTransform = new n.Matrix, this.localTransform = new n.Matrix, this._worldID = 0, this._parentID = 0
      }
      return t.prototype.updateLocalTransform = function() {}, t.prototype.updateTransform = function(t) {
        var e = t.worldTransform,
          r = this.worldTransform,
          i = this.localTransform;
        r.a = i.a * e.a + i.b * e.c, r.b = i.a * e.b + i.b * e.d, r.c = i.c * e.a + i.d * e.c, r.d = i.c * e.b + i.d * e.d, r.tx = i.tx * e.a + i.ty * e.c + e.tx, r.ty = i.tx * e.b + i.ty * e.d + e.ty, this._worldID++
      }, t
    }();
  e["default"] = o, o.prototype.updateWorldTransform = o.prototype.updateTransform, o.IDENTITY = new o
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    s = r(60),
    a = i(s),
    u = function() {
      function t() {
        n(this, t), this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this.array = null
      }
      return t.prototype.fromArray = function(t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
      }, t.prototype.set = function(t, e, r, i, n, o) {
        return this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, this
      }, t.prototype.toArray = function(t, e) {
        this.array || (this.array = new Float32Array(9));
        var r = e || this.array;
        return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r
      }, t.prototype.apply = function(t, e) {
        e = e || new a["default"];
        var r = t.x,
          i = t.y;
        return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e
      }, t.prototype.applyInverse = function(t, e) {
        e = e || new a["default"];
        var r = 1 / (this.a * this.d + this.c * -this.b),
          i = t.x,
          n = t.y;
        return e.x = this.d * r * i + -this.c * r * n + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * n + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, e
      }, t.prototype.translate = function(t, e) {
        return this.tx += t, this.ty += e, this
      }, t.prototype.scale = function(t, e) {
        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
      }, t.prototype.rotate = function(t) {
        var e = Math.cos(t),
          r = Math.sin(t),
          i = this.a,
          n = this.c,
          o = this.tx;
        return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
      }, t.prototype.append = function(t) {
        var e = this.a,
          r = this.b,
          i = this.c,
          n = this.d;
        return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this
      }, t.prototype.setTransform = function(t, e, r, i, n, o, s, a, u) {
        var h = Math.sin(s),
          l = Math.cos(s),
          c = Math.cos(u),
          f = Math.sin(u),
          d = -Math.sin(a),
          p = Math.cos(a),
          _ = l * n,
          v = h * n,
          y = -h * o,
          g = l * o;
        return this.a = c * _ + f * y, this.b = c * v + f * g, this.c = d * _ + p * y, this.d = d * v + p * g, this.tx = t + (r * _ + i * y), this.ty = e + (r * v + i * g), this
      }, t.prototype.prepend = function(t) {
        var e = this.tx;
        if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
          var r = this.a,
            i = this.c;
          this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
      }, t.prototype.decompose = function(t) {
        var e = this.a,
          r = this.b,
          i = this.c,
          n = this.d,
          o = -Math.atan2(-i, n),
          s = Math.atan2(r, e),
          a = Math.abs(o + s);
        return a < 1e-5 ? (t.rotation = s, e < 0 && n >= 0 && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), t.skew.x = t.skew.y = 0) : (t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(i * i + n * n), t.position.x = this.tx, t.position.y = this.ty, t
      }, t.prototype.invert = function() {
        var t = this.a,
          e = this.b,
          r = this.c,
          i = this.d,
          n = this.tx,
          o = t * i - e * r;
        return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this
      }, t.prototype.identity = function() {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
      }, t.prototype.clone = function() {
        var e = new t;
        return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
      }, t.prototype.copy = function(t) {
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
      }, o(t, null, [{
        key: "IDENTITY",
        get: function() {
          return new t
        }
      }, {
        key: "TEMP_MATRIX",
        get: function() {
          return new t
        }
      }]), t
    }();
  e["default"] = u
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      r(this, t), this.x = e, this.y = i
    }
    return t.prototype.clone = function() {
      return new t(this.x, this.y)
    }, t.prototype.copy = function(t) {
      this.set(t.x, t.y)
    }, t.prototype.equals = function(t) {
      return t.x === this.x && t.y === this.y
    }, t.prototype.set = function(t, e) {
      this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
    }, t
  }();
  e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var n = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    o = r(2),
    s = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        i(this, t), this.x = e, this.y = r, this.width = n, this.height = s, this.type = o.SHAPES.RECT
      }
      return t.prototype.clone = function() {
        return new t(this.x, this.y, this.width, this.height)
      }, t.prototype.copy = function(t) {
        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
      }, t.prototype.contains = function(t, e) {
        return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
      }, t.prototype.pad = function(t, e) {
        t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
      }, t.prototype.fit = function(t) {
        this.x < t.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = t.x), this.y < t.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = t.y), this.x + this.width > t.x + t.width && (this.width = t.width - this.x, this.width < 0 && (this.width = 0)), this.y + this.height > t.y + t.height && (this.height = t.height - this.y, this.height < 0 && (this.height = 0))
      }, t.prototype.enlarge = function(e) {
        if (e !== t.EMPTY) {
          var r = Math.min(this.x, e.x),
            i = Math.max(this.x + this.width, e.x + e.width),
            n = Math.min(this.y, e.y),
            o = Math.max(this.y + this.height, e.y + e.height);
          this.x = r, this.width = i - r, this.y = n, this.height = o - n
        }
      }, n(t, [{
        key: "left",
        get: function() {
          return this.x
        }
      }, {
        key: "right",
        get: function() {
          return this.x + this.width
        }
      }, {
        key: "top",
        get: function() {
          return this.y
        }
      }, {
        key: "bottom",
        get: function() {
          return this.y + this.height
        }
      }], [{
        key: "EMPTY",
        get: function() {
          return new t(0, 0, 0, 0)
        }
      }]), t
    }();
  e["default"] = s
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(99),
    u = i(a),
    h = r(205),
    l = i(h),
    c = r(206),
    f = i(c),
    d = r(204),
    p = i(d),
    _ = r(38),
    v = i(_),
    y = r(37),
    g = i(y),
    m = r(200),
    b = i(m),
    x = r(25),
    T = i(x),
    w = r(199),
    E = i(w),
    O = r(201),
    P = i(O),
    S = r(209),
    M = i(S),
    C = r(210),
    R = i(C),
    A = r(3),
    D = r(6),
    I = i(D),
    L = r(2),
    k = 0,
    N = function(t) {
      function e(r, i) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        n(this, e);
        var a = o(this, t.call(this, "WebGL", r, i, s));
        return a.type = L.RENDERER_TYPE.WEBGL, a.handleContextLost = a.handleContextLost.bind(a), a.handleContextRestored = a.handleContextRestored.bind(a), a.view.addEventListener("webglcontextlost", a.handleContextLost, !1), a.view.addEventListener("webglcontextrestored", a.handleContextRestored, !1), a._contextOptions = {
          alpha: a.transparent,
          antialias: s.antialias,
          premultipliedAlpha: a.transparent && "notMultiplied" !== a.transparent,
          stencil: !0,
          preserveDrawingBuffer: s.preserveDrawingBuffer
        }, a._backgroundColorRgba[3] = a.transparent ? 0 : 1, a.maskManager = new l["default"](a), a.stencilManager = new f["default"](a), a.emptyRenderer = new g["default"](a), a.currentRenderer = a.emptyRenderer, a.initPlugins(), s.context && (0, R["default"])(s.context), a.gl = s.context || I["default"].createContext(a.view, a._contextOptions), a.CONTEXT_UID = k++, a.state = new P["default"](a.gl), a.renderingToScreen = !0, a.boundTextures = null, a._activeShader = null, a._activeVao = null, a._activeRenderTarget = null, a._initContext(), a.filterManager = new p["default"](a), a.drawModes = (0, M["default"])(a.gl), a._nextTextureLocation = 0, a.setBlendMode(0), a
      }
      return s(e, t), e.prototype._initContext = function() {
        var t = this.gl;
        t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
        var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures = new Array(e), this.emptyTextures = new Array(e), this.textureManager = new b["default"](this), this.textureGC = new E["default"](this), this.state.resetToDefault(), this.rootRenderTarget = new v["default"](t, this.width, this.height, null, this.resolution, (!0)), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget);
        var r = new I["default"].GLTexture.fromData(t, null, 1, 1),
          i = {
            _glTextures: {}
          };
        i._glTextures[this.CONTEXT_UID] = {};
        for (var n = 0; n < e; n++) {
          var o = new T["default"];
          o._glTextures[this.CONTEXT_UID] = r, this.boundTextures[n] = i, this.emptyTextures[n] = o, this.bindTexture(null, n)
        }
        this.emit("context", t), this.resize(this.width, this.height)
      }, e.prototype.render = function(t, e, r, i, n) {
        if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
          if (this._nextTextureLocation = 0, e || (this._lastObjectRendered = t), !n) {
            var o = t.parent;
            t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
          }
          this.bindRenderTexture(e, i), this.currentRenderer.start(), (void 0 !== r ? r : this.clearBeforeRender) && this._activeRenderTarget.clear(), t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
        }
      }, e.prototype.setObjectRenderer = function(t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
      }, e.prototype.flush = function() {
        this.setObjectRenderer(this.emptyRenderer)
      }, e.prototype.resize = function(t, e) {
        u["default"].prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
      }, e.prototype.setBlendMode = function(t) {
        this.state.setBlendMode(t)
      }, e.prototype.clear = function(t) {
        this._activeRenderTarget.clear(t)
      }, e.prototype.setTransform = function(t) {
        this._activeRenderTarget.transform = t
      }, e.prototype.bindRenderTexture = function(t, e) {
        var r = void 0;
        if (t) {
          var i = t.baseTexture;
          i._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(i, 0), this.unbindTexture(i), r = i._glRenderTargets[this.CONTEXT_UID], r.setFrame(t.frame)
        } else r = this.rootRenderTarget;
        return r.transform = e, this.bindRenderTarget(r), this
      }, e.prototype.bindRenderTarget = function(t) {
        return t !== this._activeRenderTarget && (this._activeRenderTarget = t, t.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t.stencilMaskStack)), this
      }, e.prototype.bindShader = function(t) {
        return this._activeShader !== t && (this._activeShader = t, t.bind(), t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0)), this
      }, e.prototype.bindTexture = function(t, e, r) {
        if (t = t || this.emptyTextures[e], t = t.baseTexture || t, t.touched = this.textureGC.count, r) e = e || 0;
        else {
          for (var i = 0; i < this.boundTextures.length; i++)
            if (this.boundTextures[i] === t) return i;
          void 0 === e && (this._nextTextureLocation++, this._nextTextureLocation %= this.boundTextures.length, e = this.boundTextures.length - this._nextTextureLocation - 1)
        }
        var n = this.gl,
          o = t._glTextures[this.CONTEXT_UID];
        return o ? (this.boundTextures[e] = t, n.activeTexture(n.TEXTURE0 + e), n.bindTexture(n.TEXTURE_2D, o.texture)) : this.textureManager.updateTexture(t, e), e
      }, e.prototype.unbindTexture = function(t) {
        var e = this.gl;
        t = t.baseTexture || t;
        for (var r = 0; r < this.boundTextures.length; r++) this.boundTextures[r] === t && (this.boundTextures[r] = this.emptyTextures[r], e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));
        return this
      }, e.prototype.createVao = function() {
        return new I["default"].VertexArrayObject(this.gl, this.state.attribState)
      }, e.prototype.bindVao = function(t) {
        return this._activeVao === t ? this : (t ? t.bind() : this._activeVao && this._activeVao.unbind(), this._activeVao = t, this)
      }, e.prototype.reset = function() {
        return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this.rootRenderTarget.activate(), this.state.resetToDefault(), this
      }, e.prototype.handleContextLost = function(t) {
        t.preventDefault()
      }, e.prototype.handleContextRestored = function() {
        this._initContext(), this.textureManager.removeAll()
      }, e.prototype.destroy = function(e) {
        this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), t.prototype.destroy.call(this, e), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
      }, e
    }(u["default"]);
  e["default"] = N, A.pluginTarget.mixin(N)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(4),
    h = r(3),
    l = r(2),
    c = r(26),
    f = i(c),
    d = r(34),
    p = i(d),
    _ = new u.Point,
    v = function(t) {
      function e(r) {
        n(this, e);
        var i = o(this, t.call(this));
        return i._anchor = new u.ObservablePoint(i._onAnchorUpdate, i), i._texture = null, i._width = 0, i._height = 0, i._tint = null, i._tintRGB = null, i.tint = 16777215, i.blendMode = l.BLEND_MODES.NORMAL, i.shader = null, i.cachedTint = 16777215, i.texture = r || f["default"].EMPTY, i.vertexData = new Float32Array(8), i.vertexTrimmedData = null, i._transformID = -1, i._textureID = -1, i.pluginName = "sprite", i
      }
      return s(e, t), e.prototype._onTextureUpdate = function() {
        this._textureID = -1, this._width && (this.scale.x = (0, h.sign)(this.scale.x) * this._width / this.texture.orig.width), this._height && (this.scale.y = (0, h.sign)(this.scale.y) * this._height / this.texture.orig.height)
      }, e.prototype._onAnchorUpdate = function() {
        this._transformID = -1
      }, e.prototype.calculateVertices = function() {
        if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
          this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
          var t = this._texture,
            e = this.transform.worldTransform,
            r = e.a,
            i = e.b,
            n = e.c,
            o = e.d,
            s = e.tx,
            a = e.ty,
            u = this.vertexData,
            h = t.trim,
            l = t.orig,
            c = this._anchor,
            f = 0,
            d = 0,
            p = 0,
            _ = 0;
          h ? (d = h.x - c._x * l.width, f = d + h.width, _ = h.y - c._y * l.height, p = _ + h.height) : (f = l.width * (1 - c._x), d = l.width * -c._x, p = l.height * (1 - c._y), _ = l.height * -c._y), u[0] = r * d + n * _ + s, u[1] = o * _ + i * d + a, u[2] = r * f + n * _ + s, u[3] = o * _ + i * f + a, u[4] = r * f + n * p + s, u[5] = o * p + i * f + a, u[6] = r * d + n * p + s, u[7] = o * p + i * d + a
        }
      }, e.prototype.calculateTrimmedVertices = function() {
        this.vertexTrimmedData || (this.vertexTrimmedData = new Float32Array(8));
        var t = this._texture,
          e = this.vertexTrimmedData,
          r = t.orig,
          i = this._anchor,
          n = this.transform.worldTransform,
          o = n.a,
          s = n.b,
          a = n.c,
          u = n.d,
          h = n.tx,
          l = n.ty,
          c = r.width * (1 - i._x),
          f = r.width * -i._x,
          d = r.height * (1 - i._y),
          p = r.height * -i._y;
        e[0] = o * f + a * p + h, e[1] = u * p + s * f + l, e[2] = o * c + a * p + h, e[3] = u * p + s * c + l, e[4] = o * c + a * d + h, e[5] = u * d + s * c + l, e[6] = o * f + a * d + h, e[7] = u * d + s * f + l
      }, e.prototype._renderWebGL = function(t) {
        this.calculateVertices(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
      }, e.prototype._renderCanvas = function(t) {
        t.plugins[this.pluginName].render(this)
      }, e.prototype._calculateBounds = function() {
        var t = this._texture.trim,
          e = this._texture.orig;
        !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
      }, e.prototype.getLocalBounds = function(e) {
        return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._x), e || (this._localBoundsRect || (this._localBoundsRect = new u.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
      }, e.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, _);
        var e = this._texture.orig.width,
          r = this._texture.orig.height,
          i = -e * this.anchor.x,
          n = 0;
        return _.x > i && _.x < i + e && (n = -r * this.anchor.y, _.y > n && _.y < n + r)
      }, e.prototype.destroy = function(e) {
        t.prototype.destroy.call(this, e), this._anchor = null;
        var r = "boolean" == typeof e ? e : e && e.texture;
        if (r) {
          var i = "boolean" == typeof e ? e : e && e.baseTexture;
          this._texture.destroy(!!i)
        }
        this._texture = null, this.shader = null
      }, e.from = function(t) {
        return new e(f["default"].from(t))
      }, e.fromFrame = function(t) {
        var r = h.TextureCache[t];
        if (!r) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
        return new e(r)
      }, e.fromImage = function(t, r, i) {
        return new e(f["default"].fromImage(t, r, i))
      }, a(e, [{
        key: "width",
        get: function() {
          return Math.abs(this.scale.x) * this._texture.orig.width
        },
        set: function(t) {
          var e = (0, h.sign)(this.scale.x) || 1;
          this.scale.x = e * t / this._texture.orig.width, this._width = t
        }
      }, {
        key: "height",
        get: function() {
          return Math.abs(this.scale.y) * this._texture.orig.height
        },
        set: function(t) {
          var e = (0, h.sign)(this.scale.y) || 1;
          this.scale.y = e * t / this._texture.orig.height, this._height = t
        }
      }, {
        key: "anchor",
        get: function() {
          return this._anchor
        },
        set: function(t) {
          this._anchor.copy(t)
        }
      }, {
        key: "tint",
        get: function() {
          return this._tint
        },
        set: function(t) {
          this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
        }
      }, {
        key: "texture",
        get: function() {
          return this._texture
        },
        set: function(t) {
          this._texture !== t && (this._texture = t, this.cachedTint = 16777215, this._textureID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
        }
      }]), e
    }(p["default"]);
  e["default"] = v
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(3),
    o = r(101),
    s = i(o),
    a = {
      getTintedTexture: function(t, e) {
        var r = t.texture;
        e = a.roundColor(e);
        var i = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
        if (r.tintCache = r.tintCache || {}, r.tintCache[i]) return r.tintCache[i];
        var n = a.canvas || document.createElement("canvas");
        if (a.tintMethod(r, e, n), a.convertTintToImage) {
          var o = new Image;
          o.src = n.toDataURL(), r.tintCache[i] = o
        } else r.tintCache[i] = n, a.canvas = null;
        return n
      },
      tintWithMultiply: function(t, e, r) {
        var i = r.getContext("2d"),
          n = t._frame.clone(),
          o = t.baseTexture.resolution;
        n.x *= o, n.y *= o, n.width *= o, n.height *= o, r.width = n.width, r.height = n.height, i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "multiply", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
      },
      tintWithOverlay: function(t, e, r) {
        var i = r.getContext("2d"),
          n = t._frame.clone(),
          o = t.baseTexture.resolution;
        n.x *= o, n.y *= o, n.width *= o, n.height *= o, r.width = n.width, r.height = n.height, i.globalCompositeOperation = "copy", i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
      },
      tintWithPerPixel: function(t, e, r) {
        var i = r.getContext("2d"),
          o = t._frame.clone(),
          s = t.baseTexture.resolution;
        o.x *= s, o.y *= s, o.width *= s, o.height *= s, r.width = o.width, r.height = o.height, i.globalCompositeOperation = "copy", i.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
        for (var a = (0, n.hex2rgb)(e), u = a[0], h = a[1], l = a[2], c = i.getImageData(0, 0, o.width, o.height), f = c.data, d = 0; d < f.length; d += 4) f[d + 0] *= u, f[d + 1] *= h, f[d + 2] *= l;
        i.putImageData(c, 0, 0)
      },
      roundColor: function(t) {
        var e = a.cacheStepsPerColorChannel,
          r = (0, n.hex2rgb)(t);
        return r[0] = Math.min(255, r[0] / e * e), r[1] = Math.min(255, r[1] / e * e), r[2] = Math.min(255, r[2] / e * e), (0, n.rgb2hex)(r)
      },
      cacheStepsPerColorChannel: 8,
      convertTintToImage: !1,
      canUseMultiply: (0, s["default"])(),
      tintMethod: 0
    };
  a.tintMethod = a.canUseMultiply ? a.tintWithMultiply : a.tintWithPerPixel, e["default"] = a
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(106),
    u = i(a),
    h = r(26),
    l = i(h),
    c = function(t) {
      function e(r, i) {
        n(this, e);
        var s = null;
        if (!(r instanceof u["default"])) {
          var a = arguments[1],
            h = arguments[2],
            l = arguments[3] || 0,
            c = arguments[4] || 1;
          console.warn("Please use RenderTexture.create(" + a + ", " + h + ") instead of the ctor directly."), s = arguments[0], i = null, r = new u["default"](a, h, l, c)
        }
        var f = o(this, t.call(this, r, i));
        return f.legacyRenderer = s, f.valid = !0, f._updateUvs(), f
      }
      return s(e, t), e.prototype.resize = function(t, e, r) {
        this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, r || this.baseTexture.resize(t, e), this._updateUvs()
      }, e.create = function(t, r, i, n) {
        return new e(new u["default"](t, r, i, n))
      }, e
    }(l["default"]);
  e["default"] = c
}, function(t, e) {
  "use strict";

  function r(t) {
    for (var e = 6 * t, r = new Uint16Array(e), i = 0, n = 0; i < e; i += 6, n += 4) r[i + 0] = n + 0, r[i + 1] = n + 1, r[i + 2] = n + 2, r[i + 3] = n + 0, r[i + 4] = n + 2, r[i + 5] = n + 3;
    return r
  }
  e.__esModule = !0, e["default"] = r
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0, e.BitmapText = e.TilingSpriteRenderer = e.TilingSprite = e.AnimatedSprite = e.TextureTransform = void 0;
  var n = r(110);
  Object.defineProperty(e, "TextureTransform", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(225);
  Object.defineProperty(e, "AnimatedSprite", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  });
  var s = r(227);
  Object.defineProperty(e, "TilingSprite", {
    enumerable: !0,
    get: function() {
      return i(s)["default"]
    }
  });
  var a = r(231);
  Object.defineProperty(e, "TilingSpriteRenderer", {
    enumerable: !0,
    get: function() {
      return i(a)["default"]
    }
  });
  var u = r(226);
  Object.defineProperty(e, "BitmapText", {
    enumerable: !0,
    get: function() {
      return i(u)["default"]
    }
  }), r(228), r(229), r(230)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    return e instanceof c.Text && (e.updateText(!0), !0)
  }

  function a(t, e) {
    if (e instanceof c.TextStyle) {
      var r = c.Text.getFontStyle(e);
      return c.Text.fontPropertiesCache[r] || c.Text.calculateFontProperties(r), !0
    }
    return !1
  }

  function u(t, e) {
    if (t instanceof c.Text) {
      e.indexOf(t.style) === -1 && e.push(t.style), e.indexOf(t) === -1 && e.push(t);
      var r = t._texture.baseTexture;
      return e.indexOf(r) === -1 && e.push(r), !0
    }
    return !1
  }

  function h(t, e) {
    return t instanceof c.TextStyle && (e.indexOf(t) === -1 && e.push(t), !0)
  }
  e.__esModule = !0;
  var l = r(1),
    c = n(l),
    f = r(127),
    d = i(f),
    p = c.ticker.shared;
  c.settings.UPLOADS_PER_FRAME = 4;
  var _ = function() {
    function t(e) {
      var r = this;
      o(this, t), this.limiter = new d["default"](c.settings.UPLOADS_PER_FRAME), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
        r.queue && r.prepareItems()
      }, this.register(u, s), this.register(h, a)
    }
    return t.prototype.upload = function(t, e) {
      "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, p.addOnce(this.tick, this))) : e && e()
    }, t.prototype.tick = function() {
      setTimeout(this.delayedTick, 0)
    }, t.prototype.prepareItems = function() {
      for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
        for (var t = this.queue[0], e = !1, r = 0, i = this.uploadHooks.length; r < i; r++)
          if (this.uploadHooks[r](this.uploadHookHelper, t)) {
            this.queue.shift(), e = !0;
            break
          }
        e || this.queue.shift()
      }
      if (this.queue.length) p.addOnce(this.tick, this);
      else {
        this.ticking = !1;
        var n = this.completes.slice(0);
        this.completes.length = 0;
        for (var o = 0, s = n.length; o < s; o++) n[o]()
      }
    }, t.prototype.register = function(t, e) {
      return t && this.addHooks.push(t), e && this.uploadHooks.push(e), this
    }, t.prototype.add = function(t) {
      for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++);
      if (t instanceof c.Container)
        for (var i = t.children.length - 1; i >= 0; i--) this.add(t.children[i]);
      return this
    }, t.prototype.destroy = function() {
      this.ticking && p.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
    }, t
  }();
  e["default"] = _
}, function(t, e) {
  "use strict";
  t.exports = function(t, e) {
    e = e || {};
    for (var r = {
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
          name: "queryKey",
          parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
          strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
      }, i = r.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[r.key[o]] = i[o] || "";
    return n[r.q.name] = {}, n[r.key[12]].replace(r.q.parser, function(t, e, i) {
      e && (n[r.q.name][e] = i)
    }), n
  }
}, function(t, e) {
  var r = function(t, e, r, i, n) {
    this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || -1, this.height = r || -1, this.format = i || t.RGBA, this.type = n || t.UNSIGNED_BYTE
  };
  r.prototype.upload = function(t) {
    this.bind();
    var e = this.gl;
    e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
    var r = t.videoWidth || t.width,
      i = t.videoHeight || t.height;
    i !== this.height || r !== this.width ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this.format, this.type, t), this.width = r, this.height = i
  };
  var i = !1;
  r.prototype.uploadData = function(t, e, r) {
    this.bind();
    var n = this.gl;
    if (t instanceof Float32Array) {
      if (!i) {
        var o = n.getExtension("OES_texture_float");
        if (!o) throw new Error("floating point textures not available");
        i = !0
      }
      this.type = n.FLOAT
    } else this.type = n.UNSIGNED_BYTE;
    n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e !== this.width || r !== this.height ? n.texImage2D(n.TEXTURE_2D, 0, this.format, e, r, 0, this.format, this.type, t || null) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e, r, this.format, this.type, t || null), this.width = e, this.height = r
  }, r.prototype.bind = function(t) {
    var e = this.gl;
    void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
  }, r.prototype.unbind = function() {
    var t = this.gl;
    t.bindTexture(t.TEXTURE_2D, null)
  }, r.prototype.minFilter = function(t) {
    var e = this.gl;
    this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
  }, r.prototype.magFilter = function(t) {
    var e = this.gl;
    this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
  }, r.prototype.enableMipmap = function() {
    var t = this.gl;
    this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D)
  }, r.prototype.enableLinearScaling = function() {
    this.minFilter(!0), this.magFilter(!0)
  }, r.prototype.enableNearestScaling = function() {
    this.minFilter(!1), this.magFilter(!1)
  }, r.prototype.enableWrapClamp = function() {
    var t = this.gl;
    this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
  }, r.prototype.enableWrapRepeat = function() {
    var t = this.gl;
    this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
  }, r.prototype.enableWrapMirrorRepeat = function() {
    var t = this.gl;
    this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
  }, r.prototype.destroy = function() {
    var t = this.gl;
    t.deleteTexture(this.texture)
  }, r.fromSource = function(t, e, i) {
    var n = new r(t);
    return n.premultiplyAlpha = i || !1, n.upload(e), n
  }, r.fromData = function(t, e, i, n) {
    var o = new r(t);
    return o.uploadData(e, i, n), o
  }, t.exports = r
}, function(t, e) {
  var r = function(t, e, r) {
    var i;
    if (r) {
      var n = r.tempAttribState,
        o = r.attribState;
      for (i = 0; i < n.length; i++) n[i] = !1;
      for (i = 0; i < e.length; i++) n[e[i].attribute.location] = !0;
      for (i = 0; i < o.length; i++) o[i] !== n[i] && (o[i] = n[i], r.attribState[i] ? t.enableVertexAttribArray(i) : t.disableVertexAttribArray(i))
    } else
      for (i = 0; i < e.length; i++) {
        var s = e[i];
        t.enableVertexAttribArray(s.attribute.location)
      }
  };
  t.exports = r
}, function(t, e) {
  var r = function(t, e, r) {
      var n = i(t, t.VERTEX_SHADER, e),
        o = i(t, t.FRAGMENT_SHADER, r),
        s = t.createProgram();
      return t.attachShader(s, n), t.attachShader(s, o), t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(s, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(s) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(s)), t.deleteProgram(s), s = null), t.deleteShader(n), t.deleteShader(o), s
    },
    i = function(t, e, r) {
      var i = t.createShader(e);
      return t.shaderSource(i, r), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS) ? i : (console.log(t.getShaderInfoLog(i)), null)
    };
  t.exports = r
}, function(t, e) {
  var r = function(t, e) {
      switch (t) {
        case "float":
          return 0;
        case "vec2":
          return new Float32Array(2 * e);
        case "vec3":
          return new Float32Array(3 * e);
        case "vec4":
          return new Float32Array(4 * e);
        case "int":
        case "sampler2D":
          return 0;
        case "ivec2":
          return new Int32Array(2 * e);
        case "ivec3":
          return new Int32Array(3 * e);
        case "ivec4":
          return new Int32Array(4 * e);
        case "bool":
          return !1;
        case "bvec2":
          return i(2 * e);
        case "bvec3":
          return i(3 * e);
        case "bvec4":
          return i(4 * e);
        case "mat2":
          return new Float32Array([1, 0, 0, 1]);
        case "mat3":
          return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case "mat4":
          return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      }
    },
    i = function(t) {
      for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
      return e
    };
  t.exports = r
}, function(t, e, r) {
  var i = r(42),
    n = r(77),
    o = function(t, e) {
      for (var r = {}, o = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < o; a++) {
        var u = t.getActiveAttrib(e, a),
          h = i(t, u.type);
        r[u.name] = {
          type: h,
          size: n(h),
          location: t.getAttribLocation(e, u.name),
          pointer: s
        }
      }
      return r
    },
    s = function(t, e, r, i) {
      gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, r || 0, i || 0)
    };
  t.exports = o
}, function(t, e, r) {
  var i = r(42),
    n = r(73),
    o = function(t, e) {
      for (var r = {}, o = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), s = 0; s < o; s++) {
        var a = t.getActiveUniform(e, s),
          u = a.name.replace(/\[.*?\]/, ""),
          h = i(t, a.type);
        r[u] = {
          type: h,
          size: a.size,
          location: t.getUniformLocation(e, u),
          value: n(h, a.size)
        }
      }
      return r
    };
  t.exports = o
}, function(t, e) {
  var r = function(t, e) {
      var r = {
        data: {}
      };
      r.gl = t;
      for (var s = Object.keys(e), a = 0; a < s.length; a++) {
        var u = s[a],
          h = u.split("."),
          l = h[h.length - 1],
          c = o(h, r),
          f = e[u];
        c.data[l] = f, c.gl = t, Object.defineProperty(c, l, {
          get: i(l),
          set: n(l, f)
        })
      }
      return r
    },
    i = function(t) {
      var e = s.replace("%%", t);
      return new Function(e)
    },
    n = function(t, e) {
      var r, i = a.replace(/%%/g, t);
      return r = 1 === e.size ? u[e.type] : h[e.type], r && (i += "\nthis.gl." + r + ";"), new Function("value", i)
    },
    o = function(t, e) {
      for (var r = e, i = 0; i < t.length - 1; i++) {
        var n = r[t[i]] || {
          data: {}
        };
        r[t[i]] = n, r = n
      }
      return r
    },
    s = ["return this.data.%%.value;"].join("\n"),
    a = ["this.data.%%.value = value;", "var location = this.data.%%.location;"].join("\n"),
    u = {
      "float": "uniform1f(location, value)",
      vec2: "uniform2f(location, value[0], value[1])",
      vec3: "uniform3f(location, value[0], value[1], value[2])",
      vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
      "int": "uniform1i(location, value)",
      ivec2: "uniform2i(location, value[0], value[1])",
      ivec3: "uniform3i(location, value[0], value[1], value[2])",
      ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
      bool: "uniform1i(location, value)",
      bvec2: "uniform2i(location, value[0], value[1])",
      bvec3: "uniform3i(location, value[0], value[1], value[2])",
      bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
      mat2: "uniformMatrix2fv(location, false, value)",
      mat3: "uniformMatrix3fv(location, false, value)",
      mat4: "uniformMatrix4fv(location, false, value)",
      sampler2D: "uniform1i(location, value)"
    },
    h = {
      "float": "uniform1fv(location, value)",
      vec2: "uniform2fv(location, value)",
      vec3: "uniform3fv(location, value)",
      vec4: "uniform4fv(location, value)",
      "int": "uniform1iv(location, value)",
      ivec2: "uniform2iv(location, value)",
      ivec3: "uniform3iv(location, value)",
      ivec4: "uniform4iv(location, value)",
      bool: "uniform1iv(location, value)",
      bvec2: "uniform2iv(location, value)",
      bvec3: "uniform3iv(location, value)",
      bvec4: "uniform4iv(location, value)",
      sampler2D: "uniform1iv(location, value)"
    };
  t.exports = r
}, function(t, e) {
  var r = function(t) {
      return i[t]
    },
    i = {
      "float": 1,
      vec2: 2,
      vec3: 3,
      vec4: 4,
      "int": 1,
      ivec2: 2,
      ivec3: 3,
      ivec4: 4,
      bool: 1,
      bvec2: 2,
      bvec3: 3,
      bvec4: 4,
      mat2: 4,
      mat3: 9,
      mat4: 16,
      sampler2D: 1
    };
  t.exports = r
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function i(t, e) {
    return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    o = function() {
      function t(e, i, n) {
        void 0 === i && (i = !1), r(this, t), this._fn = e, this._once = i, this._thisArg = n, this._next = this._prev = this._owner = null
      }
      return n(t, [{
        key: "detach",
        value: function() {
          return null !== this._owner && (this._owner.detach(this), !0)
        }
      }]), t
    }(),
    s = function() {
      function t() {
        r(this, t), this._head = this._tail = void 0
      }
      return n(t, [{
        key: "handlers",
        value: function() {
          var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
            e = this._head;
          if (t) return !!e;
          for (var r = []; e;) r.push(e), e = e._next;
          return r
        }
      }, {
        key: "has",
        value: function(t) {
          if (!(t instanceof o)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
          return t._owner === this
        }
      }, {
        key: "dispatch",
        value: function() {
          var t = this._head;
          if (!t) return !1;
          for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
          return !0
        }
      }, {
        key: "add",
        value: function(t) {
          var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
          if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
          return i(this, new o(t, (!1), e))
        }
      }, {
        key: "once",
        value: function(t) {
          var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
          if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
          return i(this, new o(t, (!0), e))
        }
      }, {
        key: "detach",
        value: function(t) {
          if (!(t instanceof o)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
          return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
        }
      }, {
        key: "detachAll",
        value: function() {
          var t = this._head;
          if (!t) return this;
          for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
          return this
        }
      }]), t
    }();
  s.MiniSignalBinding = o, e["default"] = s, t.exports = e["default"]
}, function(t, e) {
  "use strict";

  function r() {}

  function i(t, e, r) {
    var i = 0,
      n = t.length;
    ! function o(s) {
      return s || i === n ? void(r && r(s)) : void e(t[i++], o)
    }()
  }

  function n(t) {
    return function() {
      if (null === t) throw new Error("Callback was already called.");
      var e = t;
      t = null, e.apply(this, arguments)
    }
  }

  function o(t, e) {
    function i(t, e, i) {
      if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
      if (a.started = !0, null == t && a.idle()) return void setTimeout(function() {
        return a.drain()
      }, 1);
      var n = {
        data: t,
        callback: "function" == typeof i ? i : r
      };
      e ? a._tasks.unshift(n) : a._tasks.push(n), setTimeout(function() {
        return a.process()
      }, 1)
    }

    function o(t) {
      return function() {
        s -= 1, t.callback.apply(t, arguments), null != arguments[0] && a.error(arguments[0], t.data), s <= a.concurrency - a.buffer && a.unsaturated(), a.idle() && a.drain(), a.process()
      }
    }
    if (null == e) e = 1;
    else if (0 === e) throw new Error("Concurrency must not be zero");
    var s = 0,
      a = {
        _tasks: [],
        concurrency: e,
        saturated: r,
        unsaturated: r,
        buffer: e / 4,
        empty: r,
        drain: r,
        error: r,
        started: !1,
        paused: !1,
        push: function(t, e) {
          i(t, !1, e)
        },
        kill: function() {
          s = 0, a.drain = r, a.started = !1, a._tasks = []
        },
        unshift: function(t, e) {
          i(t, !0, e)
        },
        process: function() {
          for (; !a.paused && s < a.concurrency && a._tasks.length;) {
            var e = a._tasks.shift();
            0 === a._tasks.length && a.empty(), s += 1, s === a.concurrency && a.saturated(), t(e.data, n(o(e)))
          }
        },
        length: function() {
          return a._tasks.length
        },
        running: function() {
          return s
        },
        idle: function() {
          return a._tasks.length + s === 0
        },
        pause: function() {
          a.paused !== !0 && (a.paused = !0)
        },
        resume: function() {
          if (a.paused !== !1) {
            a.paused = !1;
            for (var t = 1; t <= a.concurrency; t++) a.process()
          }
        }
      };
    return a
  }
  e.__esModule = !0, e.eachSeries = i, e.queue = o
}, function(t, e) {
  "use strict";

  function r(t) {
    for (var e = "", r = 0; r < t.length;) {
      for (var n = [0, 0, 0], o = [0, 0, 0, 0], s = 0; s < n.length; ++s) r < t.length ? n[s] = 255 & t.charCodeAt(r++) : n[s] = 0;
      o[0] = n[0] >> 2, o[1] = (3 & n[0]) << 4 | n[1] >> 4, o[2] = (15 & n[1]) << 2 | n[2] >> 6, o[3] = 63 & n[2];
      var a = r - (t.length - 1);
      switch (a) {
        case 2:
          o[3] = 64, o[2] = 64;
          break;
        case 1:
          o[3] = 64
      }
      for (var u = 0; u < o.length; ++u) e += i.charAt(o[u])
    }
    return e
  }
  e.__esModule = !0, e.encodeBinary = r;
  var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
}, function(t, e) {
  "use strict";

  function r(t, e, r) {
    r = r || 2;
    var n = e && e.length,
      s = n ? e[0] * r : t.length,
      a = i(t, 0, s, r, !0),
      u = [];
    if (!a) return u;
    var h, c, f, d, p, _, v;
    if (n && (a = l(t, e, a, r)), t.length > 80 * r) {
      h = f = t[0], c = d = t[1];
      for (var y = r; y < s; y += r) p = t[y], _ = t[y + 1], p < h && (h = p), _ < c && (c = _), p > f && (f = p), _ > d && (d = _);
      v = Math.max(f - h, d - c)
    }
    return o(a, u, r, h, c, v), u
  }

  function i(t, e, r, i, n) {
    var o, s;
    if (n === R(t, e, r, i) > 0)
      for (o = e; o < r; o += i) s = S(o, t[o], t[o + 1], s);
    else
      for (o = r - i; o >= e; o -= i) s = S(o, t[o], t[o + 1], s);
    return s && x(s, s.next) && (M(s), s = s.next), s
  }

  function n(t, e) {
    if (!t) return t;
    e || (e = t);
    var r, i = t;
    do
      if (r = !1, i.steiner || !x(i, i.next) && 0 !== b(i.prev, i, i.next)) i = i.next;
      else {
        if (M(i), i = e = i.prev, i === i.next) return null;
        r = !0
      }
    while (r || i !== e);
    return e
  }

  function o(t, e, r, i, l, c, f) {
    if (t) {
      !f && c && p(t, i, l, c);
      for (var d, _, v = t; t.prev !== t.next;)
        if (d = t.prev, _ = t.next, c ? a(t, i, l, c) : s(t)) e.push(d.i / r), e.push(t.i / r), e.push(_.i / r), M(t), t = _.next, v = _.next;
        else if (t = _, t === v) {
        f ? 1 === f ? (t = u(t, e, r), o(t, e, r, i, l, c, 2)) : 2 === f && h(t, e, r, i, l, c) : o(n(t), e, r, i, l, c, 1);
        break
      }
    }
  }

  function s(t) {
    var e = t.prev,
      r = t,
      i = t.next;
    if (b(e, r, i) >= 0) return !1;
    for (var n = t.next.next; n !== t.prev;) {
      if (g(e.x, e.y, r.x, r.y, i.x, i.y, n.x, n.y) && b(n.prev, n, n.next) >= 0) return !1;
      n = n.next
    }
    return !0
  }

  function a(t, e, r, i) {
    var n = t.prev,
      o = t,
      s = t.next;
    if (b(n, o, s) >= 0) return !1;
    for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, u = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, h = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = v(a, u, e, r, i), f = v(h, l, e, r, i), d = t.nextZ; d && d.z <= f;) {
      if (d !== t.prev && d !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
      d = d.nextZ
    }
    for (d = t.prevZ; d && d.z >= c;) {
      if (d !== t.prev && d !== t.next && g(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
      d = d.prevZ
    }
    return !0
  }

  function u(t, e, r) {
    var i = t;
    do {
      var n = i.prev,
        o = i.next.next;
      !x(n, o) && T(n, i, i.next, o) && E(n, o) && E(o, n) && (e.push(n.i / r), e.push(i.i / r), e.push(o.i / r), M(i), M(i.next), i = t = o), i = i.next
    } while (i !== t);
    return i
  }

  function h(t, e, r, i, s, a) {
    var u = t;
    do {
      for (var h = u.next.next; h !== u.prev;) {
        if (u.i !== h.i && m(u, h)) {
          var l = P(u, h);
          return u = n(u, u.next), l = n(l, l.next), o(u, e, r, i, s, a), void o(l, e, r, i, s, a)
        }
        h = h.next
      }
      u = u.next
    } while (u !== t)
  }

  function l(t, e, r, o) {
    var s, a, u, h, l, d = [];
    for (s = 0, a = e.length; s < a; s++) u = e[s] * o, h = s < a - 1 ? e[s + 1] * o : t.length, l = i(t, u, h, o, !1), l === l.next && (l.steiner = !0), d.push(y(l));
    for (d.sort(c), s = 0; s < d.length; s++) f(d[s], r), r = n(r, r.next);
    return r
  }

  function c(t, e) {
    return t.x - e.x
  }

  function f(t, e) {
    if (e = d(t, e)) {
      var r = P(e, t);
      n(r, r.next)
    }
  }

  function d(t, e) {
    var r, i = e,
      n = t.x,
      o = t.y,
      s = -(1 / 0);
    do {
      if (o <= i.y && o >= i.next.y) {
        var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
        if (a <= n && a > s) {
          if (s = a, a === n) {
            if (o === i.y) return i;
            if (o === i.next.y) return i.next
          }
          r = i.x < i.next.x ? i : i.next
        }
      }
      i = i.next
    } while (i !== e);
    if (!r) return null;
    if (n === s) return r.prev;
    var u, h = r,
      l = r.x,
      c = r.y,
      f = 1 / 0;
    for (i = r.next; i !== h;) n >= i.x && i.x >= l && g(o < c ? n : s, o, l, c, o < c ? s : n, o, i.x, i.y) && (u = Math.abs(o - i.y) / (n - i.x), (u < f || u === f && i.x > r.x) && E(i, t) && (r = i, f = u)), i = i.next;
    return r
  }

  function p(t, e, r, i) {
    var n = t;
    do null === n.z && (n.z = v(n.x, n.y, e, r, i)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next; while (n !== t);
    n.prevZ.nextZ = null, n.prevZ = null, _(n)
  }

  function _(t) {
    var e, r, i, n, o, s, a, u, h = 1;
    do {
      for (r = t, t = null, o = null, s = 0; r;) {
        for (s++, i = r, a = 0, e = 0; e < h && (a++, i = i.nextZ, i); e++);
        for (u = h; a > 0 || u > 0 && i;) 0 === a ? (n = i, i = i.nextZ, u--) : 0 !== u && i ? r.z <= i.z ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, u--) : (n = r, r = r.nextZ, a--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
        r = i
      }
      o.nextZ = null, h *= 2
    } while (s > 1);
    return t
  }

  function v(t, e, r, i, n) {
    return t = 32767 * (t - r) / n, e = 32767 * (e - i) / n, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
  }

  function y(t) {
    var e = t,
      r = t;
    do e.x < r.x && (r = e), e = e.next; while (e !== t);
    return r
  }

  function g(t, e, r, i, n, o, s, a) {
    return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (i - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (n - s) * (i - a) >= 0
  }

  function m(t, e) {
    return t.next.i !== e.i && t.prev.i !== e.i && !w(t, e) && E(t, e) && E(e, t) && O(t, e)
  }

  function b(t, e, r) {
    return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
  }

  function x(t, e) {
    return t.x === e.x && t.y === e.y
  }

  function T(t, e, r, i) {
    return !!(x(t, e) && x(r, i) || x(t, i) && x(r, e)) || b(t, e, r) > 0 != b(t, e, i) > 0 && b(r, i, t) > 0 != b(r, i, e) > 0
  }

  function w(t, e) {
    var r = t;
    do {
      if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && T(r, r.next, t, e)) return !0;
      r = r.next
    } while (r !== t);
    return !1
  }

  function E(t, e) {
    return b(t.prev, t, t.next) < 0 ? b(t, e, t.next) >= 0 && b(t, t.prev, e) >= 0 : b(t, e, t.prev) < 0 || b(t, t.next, e) < 0
  }

  function O(t, e) {
    var r = t,
      i = !1,
      n = (t.x + e.x) / 2,
      o = (t.y + e.y) / 2;
    do r.y > o != r.next.y > o && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next; while (r !== t);
    return i
  }

  function P(t, e) {
    var r = new C(t.i, t.x, t.y),
      i = new C(e.i, e.x, e.y),
      n = t.next,
      o = e.prev;
    return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i
  }

  function S(t, e, r, i) {
    var n = new C(t, e, r);
    return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n
  }

  function M(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
  }

  function C(t, e, r) {
    this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }

  function R(t, e, r, i) {
    for (var n = 0, o = e, s = r - i; o < r; o += i) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
    return n
  }
  t.exports = r, r.deviation = function(t, e, r, i) {
    var n = e && e.length,
      o = n ? e[0] * r : t.length,
      s = Math.abs(R(t, 0, o, r));
    if (n)
      for (var a = 0, u = e.length; a < u; a++) {
        var h = e[a] * r,
          l = a < u - 1 ? e[a + 1] * r : t.length;
        s -= Math.abs(R(t, h, l, r))
      }
    var c = 0;
    for (a = 0; a < i.length; a += 3) {
      var f = i[a] * r,
        d = i[a + 1] * r,
        p = i[a + 2] * r;
      c += Math.abs((t[f] - t[p]) * (t[d + 1] - t[f + 1]) - (t[f] - t[d]) * (t[p + 1] - t[f + 1]))
    }
    return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
  }, r.flatten = function(t) {
    for (var e = t[0][0].length, r = {
        vertices: [],
        holes: [],
        dimensions: e
      }, i = 0, n = 0; n < t.length; n++) {
      for (var o = 0; o < t[n].length; o++)
        for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);
      n > 0 && (i += t[n - 1].length, r.holes.push(i))
    }
    return r
  }
}, function(t, e) {
  var r = {}.toString;
  t.exports = function(t) {
    return r.call(t).slice(8, -1)
  }
}, function(t, e, r) {
  var i = r(152);
  t.exports = function(t, e, r) {
    if (i(t), void 0 === e) return t;
    switch (r) {
      case 1:
        return function(r) {
          return t.call(e, r)
        };
      case 2:
        return function(r, i) {
          return t.call(e, r, i)
        };
      case 3:
        return function(r, i, n) {
          return t.call(e, r, i, n)
        }
    }
    return function() {
      return t.apply(e, arguments)
    }
  }
}, function(t, e, r) {
  var i = r(22),
    n = r(11).document,
    o = i(n) && i(n.createElement);
  t.exports = function(t) {
    return o ? n.createElement(t) : {}
  }
}, function(t, e, r) {
  t.exports = !r(15) && !r(30)(function() {
    return 7 != Object.defineProperty(r(84)("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(t, e, r) {
  "use strict";
  var i = r(47),
    n = r(29),
    o = r(91),
    s = r(16),
    a = r(12),
    u = r(46),
    h = r(159),
    l = r(50),
    c = r(165),
    f = r(18)("iterator"),
    d = !([].keys && "next" in [].keys()),
    p = "@@iterator",
    _ = "keys",
    v = "values",
    y = function() {
      return this
    };
  t.exports = function(t, e, r, g, m, b, x) {
    h(r, e, g);
    var T, w, E, O = function(t) {
        if (!d && t in C) return C[t];
        switch (t) {
          case _:
            return function() {
              return new r(this, t)
            };
          case v:
            return function() {
              return new r(this, t)
            }
        }
        return function() {
          return new r(this, t)
        }
      },
      P = e + " Iterator",
      S = m == v,
      M = !1,
      C = t.prototype,
      R = C[f] || C[p] || m && C[m],
      A = R || O(m),
      D = m ? S ? O("entries") : A : void 0,
      I = "Array" == e ? C.entries || R : R;
    if (I && (E = c(I.call(new t)), E !== Object.prototype && (l(E, P, !0), i || a(E, f) || s(E, f, y))), S && R && R.name !== v && (M = !0, A = function() {
        return R.call(this)
      }), i && !x || !d && !M && C[f] || s(C, f, A), u[e] = A, u[P] = y, m)
      if (T = {
          values: S ? A : O(v),
          keys: b ? A : O(_),
          entries: D
        }, x)
        for (w in T) w in C || o(C, w, T[w]);
      else n(n.P + n.F * (d || M), e, T);
    return T
  }
}, function(t, e, r) {
  var i = r(49),
    n = r(32),
    o = r(13),
    s = r(54),
    a = r(12),
    u = r(85),
    h = Object.getOwnPropertyDescriptor;
  e.f = r(15) ? h : function(t, e) {
    if (t = o(t), e = s(e, !0), u) try {
      return h(t, e)
    } catch (r) {}
    if (a(t, e)) return n(!i.f.call(t, e), t[e])
  }
}, function(t, e, r) {
  var i = r(90),
    n = r(45).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function(t) {
    return i(t, n)
  }
}, function(t, e) {
  e.f = Object.getOwnPropertySymbols
}, function(t, e, r) {
  var i = r(12),
    n = r(13),
    o = r(154)(!1),
    s = r(51)("IE_PROTO");
  t.exports = function(t, e) {
    var r, a = n(t),
      u = 0,
      h = [];
    for (r in a) r != s && i(a, r) && h.push(r);
    for (; e.length > u;) i(a, r = e[u++]) && (~o(h, r) || h.push(r));
    return h
  }
}, function(t, e, r) {
  t.exports = r(16)
}, function(t, e) {
  "use strict";
  e.__esModule = !0, e["default"] = {
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    _accessibleActive: !1,
    _accessibleDiv: !1
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(10),
    h = i(u),
    l = r(2),
    c = r(5),
    f = i(c),
    d = r(95),
    p = i(d),
    _ = r(94),
    v = i(_),
    y = r(57),
    g = i(y),
    m = r(4),
    b = function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this)),
          i = f["default"].TRANSFORM_MODE === l.TRANSFORM_MODE.STATIC ? p["default"] : v["default"];
        return r.tempDisplayObjectParent = null, r.transform = new i, r.alpha = 1, r.visible = !0, r.renderable = !0, r.parent = null, r.worldAlpha = 1, r.filterArea = null, r._filters = null, r._enabledFilters = null, r._bounds = new g["default"], r._boundsID = 0, r._lastBoundsID = -1, r._boundsRect = null, r._localBoundsRect = null, r._mask = null, r
      }
      return s(e, t), e.prototype.updateTransform = function() {
        this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
      }, e.prototype._recursivePostUpdateTransform = function() {
        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
      }, e.prototype.getBounds = function(t, e) {
        return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new m.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e)
      }, e.prototype.getLocalBounds = function(t) {
        var e = this.transform,
          r = this.parent;
        this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new m.Rectangle), t = this._localBoundsRect);
        var i = this.getBounds(!1, t);
        return this.parent = r, this.transform = e, i
      }, e.prototype.toGlobal = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
      }, e.prototype.toLocal = function(t, e, r, i) {
        return e && (t = e.toGlobal(t, r, i)), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r)
      }, e.prototype.renderWebGL = function(t) {}, e.prototype.renderCanvas = function(t) {}, e.prototype.setParent = function(t) {
        if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
        return t.addChild(this), t
      }, e.prototype.setTransform = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
        return this.position.x = t, this.position.y = e, this.scale.x = r ? r : 1, this.scale.y = i ? i : 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = u, this
      }, e.prototype.destroy = function() {
        this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1
      }, a(e, [{
        key: "_tempDisplayObjectParent",
        get: function() {
          return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e), this.tempDisplayObjectParent
        }
      }, {
        key: "x",
        get: function() {
          return this.position.x
        },
        set: function(t) {
          this.transform.position.x = t
        }
      }, {
        key: "y",
        get: function() {
          return this.position.y
        },
        set: function(t) {
          this.transform.position.y = t
        }
      }, {
        key: "worldTransform",
        get: function() {
          return this.transform.worldTransform
        }
      }, {
        key: "localTransform",
        get: function() {
          return this.transform.localTransform
        }
      }, {
        key: "position",
        get: function() {
          return this.transform.position
        },
        set: function(t) {
          this.transform.position.copy(t)
        }
      }, {
        key: "scale",
        get: function() {
          return this.transform.scale
        },
        set: function(t) {
          this.transform.scale.copy(t)
        }
      }, {
        key: "pivot",
        get: function() {
          return this.transform.pivot
        },
        set: function(t) {
          this.transform.pivot.copy(t)
        }
      }, {
        key: "skew",
        get: function() {
          return this.transform.skew
        },
        set: function(t) {
          this.transform.skew.copy(t)
        }
      }, {
        key: "rotation",
        get: function() {
          return this.transform.rotation
        },
        set: function(t) {
          this.transform.rotation = t
        }
      }, {
        key: "worldVisible",
        get: function() {
          var t = this;
          do {
            if (!t.visible) return !1;
            t = t.parent
          } while (t);
          return !0
        }
      }, {
        key: "mask",
        get: function() {
          return this._mask
        },
        set: function(t) {
          this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
        }
      }, {
        key: "filters",
        get: function() {
          return this._filters && this._filters.slice()
        },
        set: function(t) {
          this._filters = t && t.slice()
        }
      }]), e
    }(h["default"]);
  e["default"] = b, b.prototype.displayObjectUpdateTransform = b.prototype.updateTransform
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(4),
    h = r(58),
    l = i(h),
    c = function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this));
        return r.position = new u.Point(0, 0), r.scale = new u.Point(1, 1), r.skew = new u.ObservablePoint(r.updateSkew, r, 0, 0), r.pivot = new u.Point(0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r
      }
      return s(e, t), e.prototype.updateSkew = function() {
        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x)
      }, e.prototype.updateLocalTransform = function() {
        var t = this.localTransform;
        t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)
      }, e.prototype.updateTransform = function(t) {
        var e = this.localTransform;
        e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
        var r = t.worldTransform,
          i = this.worldTransform;
        i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._worldID++
      }, e.prototype.setFromMatrix = function(t) {
        t.decompose(this)
      }, a(e, [{
        key: "rotation",
        get: function() {
          return this._rotation
        },
        set: function(t) {
          this._rotation = t, this.updateSkew()
        }
      }]), e
    }(l["default"]);
  e["default"] = c
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(4),
    h = r(58),
    l = i(h),
    c = function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this));
        return r.position = new u.ObservablePoint(r.onChange, r, 0, 0), r.scale = new u.ObservablePoint(r.onChange, r, 1, 1), r.pivot = new u.ObservablePoint(r.onChange, r, 0, 0), r.skew = new u.ObservablePoint(r.updateSkew, r, 0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r._localID = 0, r._currentLocalID = 0, r
      }
      return s(e, t), e.prototype.onChange = function() {
        this._localID++
      }, e.prototype.updateSkew = function() {
        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
      }, e.prototype.updateLocalTransform = function() {
        var t = this.localTransform;
        this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
      }, e.prototype.updateTransform = function(t) {
        var e = this.localTransform;
        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
          var r = t.worldTransform,
            i = this.worldTransform;
          i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++
        }
      }, e.prototype.setFromMatrix = function(t) {
        t.decompose(this), this._localID++
      }, a(e, [{
        key: "rotation",
        get: function() {
          return this._rotation
        },
        set: function(t) {
          this._rotation = t, this.updateSkew()
        }
      }]), e
    }(l["default"]);
  e["default"] = c
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
    function t(e, i, n, o, s, a, u) {
      r(this, t), this.lineWidth = e, this.lineColor = i, this.lineAlpha = n, this._lineTint = i, this.fillColor = o, this.fillAlpha = s, this._fillTint = o, this.fill = a, this.holes = [], this.shape = u, this.type = u.type
    }
    return t.prototype.clone = function() {
      return new t(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
    }, t.prototype.addHole = function(t) {
      this.holes.push(t)
    }, t.prototype.destroy = function() {
      this.shape = null, this.holes = null
    }, t
  }();
  e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    return t < 0 ? -1 : t > 0 ? 1 : 0
  }

  function o() {
    for (var t = 0; t < 16; t++) {
      var e = [];
      d.push(e);
      for (var r = 0; r < 16; r++)
        for (var i = n(u[t] * u[r] + l[t] * h[r]), o = n(h[t] * u[r] + c[t] * h[r]), s = n(u[t] * l[r] + l[t] * c[r]), p = n(h[t] * l[r] + c[t] * c[r]), _ = 0; _ < 16; _++)
          if (u[_] === i && h[_] === o && l[_] === s && c[_] === p) {
            e.push(_);
            break
          }
    }
    for (var v = 0; v < 16; v++) {
      var y = new a["default"];
      y.set(u[v], h[v], l[v], c[v], 0, 0), f.push(y)
    }
  }
  e.__esModule = !0;
  var s = r(59),
    a = i(s),
    u = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
    h = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
    l = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
    c = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
    f = [],
    d = [];
  o();
  var p = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MIRROR_HORIZONTAL: 12,
    uX: function(t) {
      return u[t]
    },
    uY: function(t) {
      return h[t]
    },
    vX: function(t) {
      return l[t]
    },
    vY: function(t) {
      return c[t]
    },
    inv: function(t) {
      return 8 & t ? 15 & t : 7 & -t
    },
    add: function(t, e) {
      return d[t][e]
    },
    sub: function(t, e) {
      return d[t][p.inv(e)]
    },
    rotate180: function(t) {
      return 4 ^ t
    },
    isSwapWidthHeight: function(t) {
      return 2 === (3 & t)
    },
    byDirection: function(t, e) {
      return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? p.S : p.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? p.E : p.W : e > 0 ? t > 0 ? p.SE : p.SW : t > 0 ? p.NE : p.NW
    },
    matrixAppendRotationInv: function(t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        n = f[p.inv(e)];
      n.tx = r, n.ty = i, t.append(n)
    }
  };
  e["default"] = p
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    n = function() {
      function t(e, i) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        r(this, t), this._x = n, this._y = o, this.cb = e, this.scope = i
      }
      return t.prototype.set = function(t, e) {
        var r = t || 0,
          i = e || (0 !== e ? r : 0);
        this._x === r && this._y === i || (this._x = r, this._y = i, this.cb.call(this.scope))
      }, t.prototype.copy = function(t) {
        this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope))
      }, i(t, [{
        key: "x",
        get: function() {
          return this._x
        },
        set: function(t) {
          this._x !== t && (this._x = t, this.cb.call(this.scope))
        }
      }, {
        key: "y",
        get: function() {
          return this._y
        },
        set: function(t) {
          this._y !== t && (this._y = t, this.cb.call(this.scope))
        }
      }]), t
    }();
  e["default"] = n
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(3),
    h = r(4),
    l = r(2),
    c = r(5),
    f = i(c),
    d = r(34),
    p = i(d),
    _ = r(65),
    v = i(_),
    y = r(10),
    g = i(y),
    m = new h.Matrix,
    b = function(t) {
      function e(r, i, s, a) {
        n(this, e);
        var h = o(this, t.call(this));
        if ((0, u.sayHello)(r), a)
          for (var c in f["default"].RENDER_OPTIONS) "undefined" == typeof a[c] && (a[c] = f["default"].RENDER_OPTIONS[c]);
        else a = f["default"].RENDER_OPTIONS;
        return h.type = l.RENDERER_TYPE.UNKNOWN, h.width = i || 800, h.height = s || 600, h.view = a.view || document.createElement("canvas"), h.resolution = a.resolution || f["default"].RESOLUTION, h.transparent = a.transparent, h.autoResize = a.autoResize || !1, h.blendModes = null, h.preserveDrawingBuffer = a.preserveDrawingBuffer, h.clearBeforeRender = a.clearBeforeRender, h.roundPixels = a.roundPixels, h._backgroundColor = 0, h._backgroundColorRgba = [0, 0, 0, 0], h._backgroundColorString = "#000000", h.backgroundColor = a.backgroundColor || h._backgroundColor, h._tempDisplayObjectParent = new p["default"], h._lastObjectRendered = h._tempDisplayObjectParent, h
      }
      return s(e, t), e.prototype.resize = function(t, e) {
        this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
      }, e.prototype.generateTexture = function(t, e, r) {
        var i = t.getLocalBounds(),
          n = v["default"].create(0 | i.width, 0 | i.height, e, r);
        return m.tx = -i.x, m.ty = -i.y, this.render(t, n, !1, m, !0), n
      }, e.prototype.destroy = function(t) {
        t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = l.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this.backgroundColor = 0, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
      }, a(e, [{
        key: "backgroundColor",
        get: function() {
          return this._backgroundColor
        },
        set: function(t) {
          this._backgroundColor = t, this._backgroundColorString = (0, u.hex2string)(t), (0, u.hex2rgb)(t, this._backgroundColorRgba)
        }
      }]), e
    }(g["default"]);
  e["default"] = b
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    s = r(5),
    a = i(s),
    u = a["default"].RESOLUTION,
    h = function() {
      function t(e, r, i) {
        n(this, t), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || u, this.resize(e, r)
      }
      return t.prototype.clear = function() {
        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }, t.prototype.resize = function(t, e) {
        this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
      }, t.prototype.destroy = function() {
        this.context = null, this.canvas = null
      }, o(t, [{
        key: "width",
        get: function() {
          return this.canvas.width
        },
        set: function(t) {
          this.canvas.width = t
        }
      }, {
        key: "height",
        get: function() {
          return this.canvas.height
        },
        set: function(t) {
          this.canvas.height = t
        }
      }]), t
    }();
  e["default"] = h
}, function(t, e) {
  "use strict";

  function r(t) {
    var e = document.createElement("canvas");
    e.width = 6, e.height = 1;
    var r = e.getContext("2d");
    return r.fillStyle = t, r.fillRect(0, 0, 6, 1), e
  }

  function i() {
    if ("undefined" == typeof document) return !1;
    var t = r("#ff00ff"),
      e = r("#ffff00"),
      i = document.createElement("canvas");
    i.width = 6, i.height = 1;
    var n = i.getContext("2d");
    n.globalCompositeOperation = "multiply", n.drawImage(t, 0, 0), n.drawImage(e, 2, 0);
    var o = n.getImageData(2, 0, 1, 1);
    if (!o) return !1;
    var s = o.data;
    return 255 === s[0] && 0 === s[1] && 0 === s[2]
  }
  e.__esModule = !0, e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    s = r(202),
    a = i(s),
    u = r(3),
    h = r(2),
    l = {},
    c = function() {
      function t(e, r, i) {
        n(this, t), this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = r || t.defaultFragmentSrc, this.blendMode = h.BLEND_MODES.NORMAL, this.uniformData = i || (0, a["default"])(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {};
        for (var o in this.uniformData) this.uniforms[o] = this.uniformData[o].value;
        this.glShaders = {}, l[this.vertexSrc + this.fragmentSrc] || (l[this.vertexSrc + this.fragmentSrc] = (0, u.uid)()), this.glShaderKey = l[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = 1, this.enabled = !0
      }
      return t.prototype.apply = function(t, e, r, i) {
        t.applyFilter(this, e, r, i)
      }, o(t, null, [{
        key: "defaultVertexSrc",
        get: function() {
          return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n")
        }
      }, {
        key: "defaultFragmentSrc",
        get: function() {
          return ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
        }
      }]), t
    }();
  e["default"] = c
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(102),
    u = i(a),
    h = r(4),
    l = (r(7), function(t) {
      function e(r) {
        n(this, e);
        var i = new h.Matrix,
          s = o(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
        return r.renderable = !1, s.maskSprite = r, s.maskMatrix = i, s
      }
      return s(e, t), e.prototype.apply = function(t, e, r) {
        var i = this.maskSprite;
        this.uniforms.mask = i._texture, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, i), this.uniforms.alpha = i.worldAlpha, t.applyFilter(this, e, r)
      }, e
    }(u["default"]));
  e["default"] = l
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(6),
    s = i(o),
    a = r(66),
    u = i(a),
    h = function() {
      function t(e, r) {
        n(this, t), this.gl = e, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
        for (var i = 0; i < 4; i++) this.interleaved[4 * i] = this.vertices[2 * i], this.interleaved[4 * i + 1] = this.vertices[2 * i + 1], this.interleaved[4 * i + 2] = this.uvs[2 * i], this.interleaved[4 * i + 3] = this.uvs[2 * i + 1];
        this.indices = (0, u["default"])(1), this.vertexBuffer = s["default"].GLBuffer.createVertexBuffer(e, this.interleaved, e.STATIC_DRAW), this.indexBuffer = s["default"].GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW), this.vao = new s["default"].VertexArrayObject(e, r)
      }
      return t.prototype.initVao = function(t) {
        this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
      }, t.prototype.map = function(t, e) {
        var r = 0,
          i = 0;
        return this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this
      }, t.prototype.upload = function() {
        for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
        return this.vertexBuffer.upload(this.interleaved), this
      }, t.prototype.destroy = function() {
        var t = this.gl;
        t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer)
      }, t
    }();
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t) {
    return "number" == typeof t ? (0, u.hex2string)(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
  }

  function o(t) {
    if (Array.isArray(t)) {
      for (var e = 0; e < t.length; ++e) t[e] = n(t[e]);
      return t
    }
    return n(t)
  }
  e.__esModule = !0;
  var s = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    a = r(2),
    u = r(3),
    h = {
      align: "left",
      breakWords: !1,
      dropShadow: !1,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 0,
      dropShadowColor: "#000000",
      dropShadowDistance: 5,
      fill: "black",
      fillGradientType: a.TEXT_GRADIENT.LINEAR_VERTICAL,
      fontFamily: "Arial",
      fontSize: 26,
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: 0,
      lineJoin: "miter",
      miterLimit: 10,
      padding: 0,
      stroke: "black",
      strokeThickness: 0,
      textBaseline: "alphabetic",
      wordWrap: !1,
      wordWrapWidth: 100
    },
    l = function() {
      function t(e) {
        i(this, t), this.styleID = 0, Object.assign(this, h, e)
      }
      return t.prototype.clone = function() {
        var e = {};
        for (var r in h) e[r] = this[r];
        return new t(e)
      }, t.prototype.reset = function() {
        Object.assign(this, h)
      }, s(t, [{
        key: "align",
        get: function() {
          return this._align
        },
        set: function(t) {
          this._align !== t && (this._align = t, this.styleID++)
        }
      }, {
        key: "breakWords",
        get: function() {
          return this._breakWords
        },
        set: function(t) {
          this._breakWords !== t && (this._breakWords = t, this.styleID++)
        }
      }, {
        key: "dropShadow",
        get: function() {
          return this._dropShadow
        },
        set: function(t) {
          this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
        }
      }, {
        key: "dropShadowAngle",
        get: function() {
          return this._dropShadowAngle
        },
        set: function(t) {
          this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
        }
      }, {
        key: "dropShadowBlur",
        get: function() {
          return this._dropShadowBlur
        },
        set: function(t) {
          this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
        }
      }, {
        key: "dropShadowColor",
        get: function() {
          return this._dropShadowColor
        },
        set: function(t) {
          var e = o(t);
          this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
        }
      }, {
        key: "dropShadowDistance",
        get: function() {
          return this._dropShadowDistance
        },
        set: function(t) {
          this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
        }
      }, {
        key: "fill",
        get: function() {
          return this._fill
        },
        set: function(t) {
          var e = o(t);
          this._fill !== e && (this._fill = e, this.styleID++)
        }
      }, {
        key: "fillGradientType",
        get: function() {
          return this._fillGradientType
        },
        set: function(t) {
          this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
        }
      }, {
        key: "fontFamily",
        get: function() {
          return this._fontFamily
        },
        set: function(t) {
          this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
        }
      }, {
        key: "fontSize",
        get: function() {
          return this._fontSize
        },
        set: function(t) {
          this._fontSize !== t && (this._fontSize = t, this.styleID++)
        }
      }, {
        key: "fontStyle",
        get: function() {
          return this._fontStyle
        },
        set: function(t) {
          this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
        }
      }, {
        key: "fontVariant",
        get: function() {
          return this._fontVariant
        },
        set: function(t) {
          this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
        }
      }, {
        key: "fontWeight",
        get: function() {
          return this._fontWeight
        },
        set: function(t) {
          this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
        }
      }, {
        key: "letterSpacing",
        get: function() {
          return this._letterSpacing
        },
        set: function(t) {
          this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
        }
      }, {
        key: "lineHeight",
        get: function() {
          return this._lineHeight
        },
        set: function(t) {
          this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
        }
      }, {
        key: "lineJoin",
        get: function() {
          return this._lineJoin
        },
        set: function(t) {
          this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
        }
      }, {
        key: "miterLimit",
        get: function() {
          return this._miterLimit
        },
        set: function(t) {
          this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
        }
      }, {
        key: "padding",
        get: function() {
          return this._padding
        },
        set: function(t) {
          this._padding !== t && (this._padding = t, this.styleID++)
        }
      }, {
        key: "stroke",
        get: function() {
          return this._stroke
        },
        set: function(t) {
          var e = o(t);
          this._stroke !== e && (this._stroke = e, this.styleID++)
        }
      }, {
        key: "strokeThickness",
        get: function() {
          return this._strokeThickness
        },
        set: function(t) {
          this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
        }
      }, {
        key: "textBaseline",
        get: function() {
          return this._textBaseline
        },
        set: function(t) {
          this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
        }
      }, {
        key: "wordWrap",
        get: function() {
          return this._wordWrap
        },
        set: function(t) {
          this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
        }
      }, {
        key: "wordWrapWidth",
        get: function() {
          return this._wordWrapWidth
        },
        set: function(t) {
          this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
        }
      }]), t
    }();
  e["default"] = l
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(25),
    u = i(a),
    h = r(5),
    l = i(h),
    c = l["default"].RESOLUTION,
    f = l["default"].SCALE_MODE,
    d = function(t) {
      function e() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          s = arguments[2],
          a = arguments[3];
        n(this, e);
        var u = o(this, t.call(this, null, s));
        return u.resolution = a || c, u.width = r, u.height = i, u.realWidth = u.width * u.resolution, u.realHeight = u.height * u.resolution, u.scaleMode = s || f, u.hasLoaded = !0, u._glRenderTargets = {}, u._canvasRenderTarget = null, u.valid = !1, u
      }
      return s(e, t), e.prototype.resize = function(t, e) {
        t === this.width && e === this.height || (this.valid = t > 0 && e > 0, this.width = t, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
      }, e.prototype.destroy = function() {
        t.prototype.destroy.call(this, !0), this.renderer = null
      }, e
    }(u["default"]);
  e["default"] = d
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(97),
    s = i(o),
    a = function() {
      function t() {
        n(this, t), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
      }
      return t.prototype.set = function(t, e, r) {
        var i = e.width,
          n = e.height;
        if (r) {
          var o = t.width / 2 / i,
            a = t.height / 2 / n,
            u = t.x / i + o,
            h = t.y / n + a;
          r = s["default"].add(r, s["default"].NW), this.x0 = u + o * s["default"].uX(r), this.y0 = h + a * s["default"].uY(r), r = s["default"].add(r, 2), this.x1 = u + o * s["default"].uX(r), this.y1 = h + a * s["default"].uY(r), r = s["default"].add(r, 2), this.x2 = u + o * s["default"].uX(r), this.y2 = h + a * s["default"].uY(r), r = s["default"].add(r, 2), this.x3 = u + o * s["default"].uX(r), this.y3 = h + a * s["default"].uY(r)
        } else this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n;
        this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
      }, t
    }();
  e["default"] = a
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function u(t, e) {
    e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
    var r = document.createElement("source");
    return r.src = t, r.type = e, r
  }
  e.__esModule = !0;
  var h = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    l = r(25),
    c = n(l),
    f = r(3),
    d = r(109),
    p = i(d),
    _ = function(t) {
      function e(r, i) {
        if (o(this, e), !r) throw new Error("No video source element specified.");
        (r.readyState === r.HAVE_ENOUGH_DATA || r.readyState === r.HAVE_FUTURE_DATA) && r.width && r.height && (r.complete = !0);
        var n = s(this, t.call(this, r, i));
        return n.width = r.videoWidth, n.height = r.videoHeight, n._autoUpdate = !0, n._isAutoUpdating = !1, n.autoPlay = !0, n.update = n.update.bind(n), n._onCanPlay = n._onCanPlay.bind(n), r.addEventListener("play", n._onPlayStart.bind(n)), r.addEventListener("pause", n._onPlayStop.bind(n)), n.hasLoaded = !1, n.__loaded = !1, n._isSourceReady() ? n._onCanPlay() : (r.addEventListener("canplay", n._onCanPlay), r.addEventListener("canplaythrough", n._onCanPlay)), n
      }
      return a(e, t), e.prototype._isSourcePlaying = function() {
        var t = this.source;
        return t.currentTime > 0 && t.paused === !1 && t.ended === !1 && t.readyState > 2
      }, e.prototype._isSourceReady = function() {
        return 3 === this.source.readyState || 4 === this.source.readyState
      }, e.prototype._onPlayStart = function() {
        this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (p.shared.add(this.update, this), this._isAutoUpdating = !0)
      }, e.prototype._onPlayStop = function() {
        this._isAutoUpdating && (p.shared.remove(this.update, this), this._isAutoUpdating = !1)
      }, e.prototype._onCanPlay = function() {
        this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play())
      }, e.prototype.destroy = function() {
        this._isAutoUpdating && p.shared.remove(this.update, this), this.source && this.source._pixiId && (delete f.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), t.prototype.destroy.call(this)
      }, e.fromVideo = function(t, r) {
        t._pixiId || (t._pixiId = "video_" + (0, f.uid)());
        var i = f.BaseTextureCache[t._pixiId];
        return i || (i = new e(t, r), f.BaseTextureCache[t._pixiId] = i), i
      }, e.fromUrl = function(t, r) {
        var i = document.createElement("video");
        if (i.setAttribute("webkit-playsinline", ""), i.setAttribute("playsinline", ""), Array.isArray(t))
          for (var n = 0; n < t.length; ++n) i.appendChild(u(t[n].src || t[n], t[n].mime));
        else i.appendChild(u(t.src || t, t.mime));
        return i.load(), e.fromVideo(i, r)
      }, h(e, [{
        key: "autoUpdate",
        get: function() {
          return this._autoUpdate
        },
        set: function(t) {
          t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (p.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (p.shared.add(this.update, this), this._isAutoUpdating = !0))
        }
      }]), e
    }(c["default"]);
  e["default"] = _, _.fromUrls = _.fromUrl
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0, e.Ticker = e.shared = void 0;
  var n = r(216),
    o = i(n),
    s = new o["default"];
  s.autoStart = !0, e.shared = s, e.Ticker = o["default"]
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    s = r(59),
    a = i(s),
    u = new a["default"],
    h = function() {
      function t(e, r) {
        n(this, t), this._texture = e, this.mapCoord = new a["default"], this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, this.clampMargin = "undefined" == typeof r ? .5 : r
      }
      return t.prototype.update = function(t) {
        var e = this._texture;
        if (e && e.valid && (t || this._lastTextureID !== e._updateID)) {
          this._lastTextureID = e._updateID;
          var r = e._uvs;
          this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
          var i = e.orig,
            n = e.trim;
          n && (u.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(u));
          var o = e.baseTexture,
            s = this.uClampFrame,
            a = this.clampMargin / o.resolution,
            h = this.clampOffset;
          s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight
        }
      }, o(t, [{
        key: "texture",
        get: function() {
          return this._texture
        },
        set: function(t) {
          this._texture = t, this._lastTextureID = -1
        }
      }]), t
    }();
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    h = r(1),
    l = n(h),
    c = r(114),
    f = i(c),
    d = r(113),
    p = i(d),
    _ = r(115),
    v = i(_),
    y = function(t) {
      function e(r, i, n, a) {
        o(this, e), a = a || 5;
        var u = (0, f["default"])(a, !0),
          h = (0, p["default"])(a),
          l = s(this, t.call(this, u, h));
        return l.resolution = n || 1, l._quality = 0, l.quality = i || 4, l.strength = r || 8, l.firstRun = !0, l
      }
      return a(e, t), e.prototype.apply = function(t, e, r, i) {
        if (this.firstRun) {
          var n = t.renderer.gl,
            o = (0, v["default"])(n);
          this.vertexSrc = (0, f["default"])(o, !0), this.fragmentSrc = (0, p["default"])(o), this.firstRun = !1
        }
        if (this.uniforms.strength = 1 / r.size.width * (r.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);
        else {
          for (var s = t.getRenderTarget(!0), a = e, u = s, h = 0; h < this.passes - 1; h++) {
            t.applyFilter(this, a, u, !0);
            var l = u;
            u = a, a = l
          }
          t.applyFilter(this, a, r, i), t.returnRenderTarget(s)
        }
      }, u(e, [{
        key: "blur",
        get: function() {
          return this.strength
        },
        set: function(t) {
          this.padding = 2 * Math.abs(t), this.strength = t
        }
      }, {
        key: "quality",
        get: function() {
          return this._quality
        },
        set: function(t) {
          this._quality = t, this.passes = t
        }
      }]), e
    }(l.Filter);
  e["default"] = y
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    h = r(1),
    l = n(h),
    c = r(114),
    f = i(c),
    d = r(113),
    p = i(d),
    _ = r(115),
    v = i(_),
    y = function(t) {
      function e(r, i, n, a) {
        o(this, e), a = a || 5;
        var u = (0, f["default"])(a, !1),
          h = (0, p["default"])(a),
          l = s(this, t.call(this, u, h));
        return l.resolution = n || 1, l._quality = 0, l.quality = i || 4, l.strength = r || 8, l.firstRun = !0, l
      }
      return a(e, t), e.prototype.apply = function(t, e, r, i) {
        if (this.firstRun) {
          var n = t.renderer.gl,
            o = (0, v["default"])(n);
          this.vertexSrc = (0, f["default"])(o, !1), this.fragmentSrc = (0, p["default"])(o), this.firstRun = !1
        }
        if (this.uniforms.strength = 1 / r.size.height * (r.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);
        else {
          for (var s = t.getRenderTarget(!0), a = e, u = s, h = 0; h < this.passes - 1; h++) {
            t.applyFilter(this, a, u, !0);
            var l = u;
            u = a, a = l
          }
          t.applyFilter(this, a, r, i), t.returnRenderTarget(s)
        }
      }, u(e, [{
        key: "blur",
        get: function() {
          return this.strength
        },
        set: function(t) {
          this.padding = 2 * Math.abs(t), this.strength = t
        }
      }, {
        key: "quality",
        get: function() {
          return this._quality
        },
        set: function(t) {
          this._quality = t, this.passes = t
        }
      }]), e
    }(l.Filter);
  e["default"] = y
}, function(t, e) {
  "use strict";

  function r(t) {
    for (var e = i[t], r = e.length, o = n, s = "", a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", u = void 0, h = 0; h < t; h++) {
      var l = a.replace("%index%", h);
      u = h, h >= r && (u = t - h - 1), l = l.replace("%value%", e[u]), s += l, s += "\n"
    }
    return o = o.replace("%blur%", s), o = o.replace("%size%", t)
  }
  e.__esModule = !0, e["default"] = r;
  var i = {
      5: [.153388, .221461, .250301],
      7: [.071303, .131514, .189879, .214607],
      9: [.028532, .067234, .124009, .179044, .20236],
      11: [.0093, .028002, .065984, .121703, .175713, .198596],
      13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
      15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
    },
    n = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n")
}, function(t, e) {
  "use strict";

  function r(t, e) {
    var r = Math.ceil(t / 2),
      n = i,
      o = "",
      s = void 0;
    s = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
    for (var a = 0; a < t; a++) {
      var u = s.replace("%index%", a);
      u = u.replace("%sampleIndex%", a - (r - 1) + ".0"), o += u, o += "\n"
    }
    return n = n.replace("%blur%", o), n = n.replace("%size%", t)
  }
  e.__esModule = !0, e["default"] = r;
  var i = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n");
}, function(t, e) {
  "use strict";

  function r(t) {
    for (var e = t.getParameter(t.MAX_VARYING_VECTORS), r = 15; r > e;) r -= 2;
    return r
  }
  e.__esModule = !0, e["default"] = r
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(235);
  Object.defineProperty(e, "FXAAFilter", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(236);
  Object.defineProperty(e, "NoiseFilter", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  });
  var s = r(234);
  Object.defineProperty(e, "DisplacementFilter", {
    enumerable: !0,
    get: function() {
      return i(s)["default"]
    }
  });
  var a = r(232);
  Object.defineProperty(e, "BlurFilter", {
    enumerable: !0,
    get: function() {
      return i(a)["default"]
    }
  });
  var u = r(111);
  Object.defineProperty(e, "BlurXFilter", {
    enumerable: !0,
    get: function() {
      return i(u)["default"]
    }
  });
  var h = r(112);
  Object.defineProperty(e, "BlurYFilter", {
    enumerable: !0,
    get: function() {
      return i(h)["default"]
    }
  });
  var l = r(233);
  Object.defineProperty(e, "ColorMatrixFilter", {
    enumerable: !0,
    get: function() {
      return i(l)["default"]
    }
  });
  var c = r(237);
  Object.defineProperty(e, "VoidFilter", {
    enumerable: !0,
    get: function() {
      return i(c)["default"]
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(1),
    s = i(o),
    a = function() {
      function t() {
        n(this, t), this.global = new s.Point, this.target = null, this.originalEvent = null
      }
      return t.prototype.getLocalPosition = function(t, e, r) {
        return t.worldTransform.applyInverse(r || this.global, e)
      }, t
    }();
  e["default"] = a
}, function(t, e) {
  "use strict";
  e.__esModule = !0, e["default"] = {
    interactive: !1,
    interactiveChildren: !0,
    hitArea: null,
    buttonMode: !1,
    defaultCursor: "pointer",
    _over: !1,
    _isLeftDown: !1,
    _isRightDown: !1,
    _pointerOver: !1,
    _pointerDown: !1,
    _touchDown: !1
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    var r = {},
      i = t.data.getElementsByTagName("info")[0],
      n = t.data.getElementsByTagName("common")[0];
    r.font = i.getAttribute("face"), r.size = parseInt(i.getAttribute("size"), 10), r.lineHeight = parseInt(n.getAttribute("lineHeight"), 10), r.chars = {};
    for (var o = t.data.getElementsByTagName("char"), s = 0; s < o.length; s++) {
      var u = parseInt(o[s].getAttribute("id"), 10),
        l = new a.Rectangle(parseInt(o[s].getAttribute("x"), 10) + e.frame.x, parseInt(o[s].getAttribute("y"), 10) + e.frame.y, parseInt(o[s].getAttribute("width"), 10), parseInt(o[s].getAttribute("height"), 10));
      r.chars[u] = {
        xOffset: parseInt(o[s].getAttribute("xoffset"), 10),
        yOffset: parseInt(o[s].getAttribute("yoffset"), 10),
        xAdvance: parseInt(o[s].getAttribute("xadvance"), 10),
        kerning: {},
        texture: new a.Texture(e.baseTexture, l)
      }
    }
    for (var c = t.data.getElementsByTagName("kerning"), f = 0; f < c.length; f++) {
      var d = parseInt(c[f].getAttribute("first"), 10),
        p = parseInt(c[f].getAttribute("second"), 10),
        _ = parseInt(c[f].getAttribute("amount"), 10);
      r.chars[p] && (r.chars[p].kerning[d] = _)
    }
    t.bitmapFont = r, h.BitmapText.fonts[r.font] = r
  }
  e.__esModule = !0, e.parse = n, e["default"] = function() {
    return function(t, e) {
      if (!t.data || t.type !== u.Resource.TYPE.XML) return void e();
      if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return void e();
      var r = t.isDataUrl ? "" : s.dirname(t.url);
      t.isDataUrl && ("." === r && (r = ""), this.baseUrl && r && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (r += "/"), r = r.replace(this.baseUrl, ""))), r && "/" !== r.charAt(r.length - 1) && (r += "/");
      var i = r + t.data.getElementsByTagName("page")[0].getAttribute("file");
      if (a.utils.TextureCache[i]) n(t, a.utils.TextureCache[i]), e();
      else {
        var o = {
          crossOrigin: t.crossOrigin,
          loadType: u.Resource.LOAD_TYPE.IMAGE,
          metadata: t.metadata.imageMetadata,
          parentResource: t
        };
        this.add(t.name + "_image", i, o, function(r) {
          n(t, r.texture), e()
        })
      }
    }
  };
  var o = r(7),
    s = i(o),
    a = r(1),
    u = r(19),
    h = r(67)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(241);
  Object.defineProperty(e, "Loader", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(119);
  Object.defineProperty(e, "bitmapFontParser", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  }), Object.defineProperty(e, "parseBitmapFontData", {
    enumerable: !0,
    get: function() {
      return o.parse
    }
  });
  var s = r(121);
  Object.defineProperty(e, "spritesheetParser", {
    enumerable: !0,
    get: function() {
      return i(s)["default"]
    }
  });
  var a = r(122);
  Object.defineProperty(e, "textureParser", {
    enumerable: !0,
    get: function() {
      return i(a)["default"]
    }
  });
  var u = r(19);
  Object.defineProperty(e, "Resource", {
    enumerable: !0,
    get: function() {
      return u.Resource
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0, e["default"] = function() {
    return function(t, e) {
      var r = void 0,
        i = t.name + "_image";
      if (!t.data || t.type !== o.Resource.TYPE.JSON || !t.data.frames || this.resources[i]) return void e();
      var n = {
        crossOrigin: t.crossOrigin,
        loadType: o.Resource.LOAD_TYPE.IMAGE,
        metadata: t.metadata.imageMetadata,
        parentResource: t
      };
      r = t.isDataUrl ? t.data.meta.image : a["default"].dirname(t.url.replace(this.baseUrl, "")) + "/" + t.data.meta.image, this.add(i, r, n, function(r) {
        function i(e, r) {
          for (var i = e; i - e < r && i < u.length;) {
            var n = u[i],
              o = a[n].frame;
            if (o) {
              var s = null,
                l = null,
                f = new h.Rectangle(0, 0, a[n].sourceSize.w / d, a[n].sourceSize.h / d);
              s = a[n].rotated ? new h.Rectangle(o.x / d, o.y / d, o.h / d, o.w / d) : new h.Rectangle(o.x / d, o.y / d, o.w / d, o.h / d), a[n].trimmed && (l = new h.Rectangle(a[n].spriteSourceSize.x / d, a[n].spriteSourceSize.y / d, o.w / d, o.h / d)), t.textures[n] = new h.Texture(c, s, f, l, a[n].rotated ? 2 : 0), h.utils.TextureCache[n] = t.textures[n]
            }
            i++
          }
        }

        function n() {
          return p * l < u.length
        }

        function o(t) {
          i(p * l, l), p++, setTimeout(t, 0)
        }

        function s() {
          o(function() {
            n() ? s() : e()
          })
        }
        t.textures = {};
        var a = t.data.frames,
          u = Object.keys(a),
          c = r.texture.baseTexture,
          f = t.data.meta.scale,
          d = h.utils.getResolutionOfUrl(t.url, null);
        null === d && (d = void 0 !== f ? f : 1), 1 !== d && (c.resolution = d, c.update());
        var p = 0;
        u.length <= l ? (i(0, l), e()) : s()
      })
    }
  };
  var o = r(19),
    s = r(7),
    a = n(s),
    u = r(1),
    h = i(u),
    l = 1e3
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }
  e.__esModule = !0, e["default"] = function() {
    return function(t, e) {
      if (t.data && t.type === s.Resource.TYPE.IMAGE) {
        var r = new o.BaseTexture(t.data, null, o.utils.getResolutionOfUrl(t.url));
        r.imageUrl = t.url, t.texture = new o.Texture(r), o.utils.BaseTextureCache[t.name] = r, o.utils.TextureCache[t.name] = t.texture, t.name !== t.url && (o.utils.BaseTextureCache[t.url] = r, o.utils.TextureCache[t.url] = t.texture)
      }
      e()
    }
  };
  var n = r(1),
    o = i(n),
    s = r(19)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(27),
    u = i(a),
    h = function(t) {
      function e(r, i, s) {
        n(this, e);
        var a = o(this, t.call(this, r));
        return a._ready = !0, a.verticesX = i || 10, a.verticesY = s || 10, a.drawMode = u["default"].DRAW_MODES.TRIANGLES, a.refresh(), a
      }
      return s(e, t), e.prototype.refresh = function() {
        for (var t = this.verticesX * this.verticesY, e = [], r = [], i = [], n = [], o = this.texture, s = this.verticesX - 1, a = this.verticesY - 1, u = o.width / s, h = o.height / a, l = 0; l < t; l++)
          if (o._uvs) {
            var c = l % this.verticesX,
              f = l / this.verticesX | 0;
            e.push(c * u, f * h), i.push(o._uvs.x0 + (o._uvs.x1 - o._uvs.x0) * (c / (this.verticesX - 1)), o._uvs.y0 + (o._uvs.y3 - o._uvs.y0) * (f / (this.verticesY - 1)))
          } else i.push(0);
        for (var d = s * a, p = 0; p < d; p++) {
          var _ = p % s,
            v = p / s | 0,
            y = v * this.verticesX + _,
            g = v * this.verticesX + _ + 1,
            m = (v + 1) * this.verticesX + _,
            b = (v + 1) * this.verticesX + _ + 1;
          n.push(y, g, m), n.push(g, b, m)
        }
        this.vertices = new Float32Array(e), this.uvs = new Float32Array(i), this.colors = new Float32Array(r), this.indices = new Uint16Array(n), this.indexDirty = !0
      }, e.prototype._onTextureUpdate = function() {
        u["default"].prototype._onTextureUpdate.call(this), this._ready && this.refresh()
      }, e
    }(u["default"]);
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(27);
  Object.defineProperty(e, "Mesh", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(245);
  Object.defineProperty(e, "MeshRenderer", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  });
  var s = r(244);
  Object.defineProperty(e, "CanvasMeshRenderer", {
    enumerable: !0,
    get: function() {
      return i(s)["default"]
    }
  });
  var a = r(123);
  Object.defineProperty(e, "Plane", {
    enumerable: !0,
    get: function() {
      return i(a)["default"]
    }
  });
  var u = r(242);
  Object.defineProperty(e, "NineSlicePlane", {
    enumerable: !0,
    get: function() {
      return i(u)["default"]
    }
  });
  var h = r(243);
  Object.defineProperty(e, "Rope", {
    enumerable: !0,
    get: function() {
      return i(h)["default"]
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(246);
  Object.defineProperty(e, "ParticleContainer", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(248);
  Object.defineProperty(e, "ParticleRenderer", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(256);
  Object.defineProperty(e, "webgl", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(254);
  Object.defineProperty(e, "canvas", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  });
  var s = r(68);
  Object.defineProperty(e, "BasePrepare", {
    enumerable: !0,
    get: function() {
      return i(s)["default"]
    }
  });
  var a = r(127);
  Object.defineProperty(e, "CountLimiter", {
    enumerable: !0,
    get: function() {
      return i(a)["default"]
    }
  });
  var u = r(255);
  Object.defineProperty(e, "TimeLimiter", {
    enumerable: !0,
    get: function() {
      return i(u)["default"]
    }
  })
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
    function t(e) {
      r(this, t), this.maxItemsPerFrame = e, this.itemsLeft = 0
    }
    return t.prototype.beginFrame = function() {
      this.itemsLeft = this.maxItemsPerFrame
    }, t.prototype.allowedToUpload = function() {
      return this.itemsLeft-- > 0
    }, t
  }();
  e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = function() {
      function t(e) {
        (0, o["default"])(this, t), this.ringObj = e, this.center = {
          x: 400,
          y: 280
        }, this.rArray = [], this.PI = Math.PI / 180
      }
      return t.prototype.setRArray = function() {
        var t = this.ringObj.inner,
          e = this.ringObj.outside,
          r = e - t,
          i = this.ringObj.listNumber,
          n = .7 * r / i,
          o = 0,
          s = void 0;
        for (s = 1; s < i; s++) o += s;
        var a = .3 * r / o,
          u = 0,
          h = this.ringObj.maxOutside ? i - 2 : i - 1;
        for (s = 0; s < h; s++) {
          u += a * s;
          var l = n * s + u + t;
          this.rArray.push(l)
        }
        this.rArray.push(e), this.ringObj.maxOutside && this.rArray.push(e + 10)
      }, t.prototype.getCirclePoint = function() {
        var t = 360 * Math.random(),
          e = Math.round(Math.random() * (this.rArray.length - 1)),
          r = this.rArray[e];
        return {
          x: Math.sin(this.PI * t) * r,
          y: Math.cos(this.PI * t) * r,
          r: r,
          angle: t,
          number: e
        }
      }, t
    }();
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = s
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(40),
    a = i(s),
    u = r(39),
    h = i(u),
    l = r(14),
    c = r(9),
    f = r(128),
    d = function(t) {
      function e(r, i) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2492293,
          s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3542694;
        (0, o["default"])(this, e);
        var u = (0, a["default"])(this, t.call(this, i));
        return u.number = r, u.ringObj = i, u.bgColor = n, u.lineColor = s, u.container = new l.Container, u.pointContainer = new l.Container, u.bgContainer = new l.Container, u.lineContainer = new l.Container, u.dataArr = [], u.increasArr = [], u.aa = 0, u
      }
      return (0, h["default"])(e, t), e.prototype.init = function() {
        this.setRArray(), this.getIncrease(), this.createBgElement(), this.createLineElement(), this.createPointElement(), this.startAnim()
      }, e.prototype.createPointElement = function() {
        for (var t = 0; t < this.number; t++) {
          var e = new l.Sprite.fromImage(this.ringObj.img);
          e.anchor.set(.5);
          var r = .7 * Math.random();
          e.scale = {
            x: r + .5,
            y: r + .5
          };
          var i = e.positionData = this.getCirclePoint(),
            n = this.center.x - 20;
          e.x = Math.random() * (i.angle > 180 ? -n : n), e.y = 2 * Math.random() | 0 ? 5 * -Math.random() : 5 * Math.random(), e.cacheAsBitmapboolean = !0, e.alpha = 0, this.pointContainer.addChild(e)
        }
        var o = new l.filters.BlurFilter;
        o.blur = .5, this.container.addChild(this.pointContainer), this.container.x = this.center.x, this.container.y = this.center.y
      }, e.prototype.createLineElement = function() {
        for (var t = 0; t < this.rArray.length; t++) {
          var e = new l.Graphics;
          e.lineStyle(1, this.lineColor, .35), e.drawCircle(0, 0, this.rArray[t]), this.lineContainer.addChild(e)
        }
        var r = new l.filters.BlurFilter;
        r.blur = .5, this.lineContainer.filters = [r], this.lineContainer.alpha = 0, this.container.addChild(this.lineContainer)
      }, e.prototype.createBgElement = function() {
        var t = this.ringObj.inner,
          e = this.ringObj.outside,
          r = 10,
          i = new l.Graphics;
        i.lineStyle(e - t, this.bgColor, .35), i.drawCircle(0, 0, t + 2 * r);
        var n = new l.filters.BlurFilter;
        n.blur = r, i.filters = [n], this.bgContainer.alpha = 0, this.bgContainer.addChild(i), this.container.addChild(this.bgContainer)
      }, e.prototype.getIncrease = function() {
        var t = this.ringObj.listNumber,
          e = void 0,
          r = 0;
        for (e = 1; e < t; e++) r += e;
        var i = .65 * this.number / r,
          n = 0;
        for (e = 0; e < t; e++) n = Math.ceil(i * e), this.increasArr.push(n);
        this.increasArr.reverse()
      }, e.prototype.getCirclePoint = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = 360 * Math.random(),
          r = void 0,
          i = void 0;
        if (t) r = Math.round(Math.random() * (this.ringObj.listNumber - 1));
        else {
          var n = this.ringObj.listNumber;
          r = this.aa, i = this.dataArr[r] = this.dataArr[r] || [];
          var o = .35 * this.number / n;
          i.length >= o + this.increasArr[r] && (r++, i = this.dataArr[r] = this.dataArr[r] || [], this.aa = r), i.push(1)
        }
        var s = this.rArray[r];
        return {
          x: Math.sin(this.PI * e) * s,
          y: Math.cos(this.PI * e) * s,
          r: s,
          angle: e,
          number: r
        }
      }, e.prototype.startAnim = function() {}, e.prototype.getAnimData = function(t, e) {
        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, t.angle - e);
        return r = r < 360 ? r + 360 : r, {
          x: Math.sin(this.PI * r) * t.r,
          y: Math.cos(this.PI * r) * t.r
        }
      }, e.prototype.pointAnim = function() {
        var t = this,
          e = this.pointContainer.children;
        e.forEach(function(e) {
          var r = {
              r: 0
            },
            i = e.positionData.r,
            n = t.rArray.indexOf(i),
            o = n > t.ringObj.listNumber - 3,
            s = o ? 40 * Math.random() + 5 * n + 30 : 20 * Math.random() + 3 * n + 30;
          o && (e.alpha = .5 * Math.random() + .5);
          var a = new c.TimelineMax;
          a.to(e, .5, {
            alpha: .7 * Math.random() + .2,
            delay: 2 * Math.random() + .5
          }).to(e, 2 * Math.random() + .5, {
            x: e.positionData.x,
            y: e.positionData.y,
            ease: c.Power3.easeInOut
          }).to(r, s, {
            r: 360,
            onUpdate: function() {
              var i = t.getAnimData(e.positionData, r.r, o, n);
              e.x = i.x, e.y = i.y
            },
            repeat: -1,
            ease: c.Power0.easeNone
          })
        })
      }, e
    }(f["default"]);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = d
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(266),
    o = i(n),
    s = r(265),
    a = i(s),
    u = "function" == typeof a["default"] && "symbol" == typeof o["default"] ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof a["default"] && t.constructor === a["default"] && t !== a["default"].prototype ? "symbol" : typeof t
    };
  e["default"] = "function" == typeof a["default"] && "symbol" === u(o["default"]) ? function(t) {
    return "undefined" == typeof t ? "undefined" : u(t)
  } : function(t) {
    return t && "function" == typeof a["default"] && t.constructor === a["default"] && t !== a["default"].prototype ? "symbol" : "undefined" == typeof t ? "undefined" : u(t)
  }
}, function(t, e, r) {
  function i() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
  }

  function n(t, e, r) {
    if (t && h(t) && t instanceof i) return t;
    var n = new i;
    return n.parse(t, e, r), n
  }

  function o(t) {
    return u(t) && (t = n(t)), t instanceof i ? t.format() : i.prototype.format.call(t)
  }

  function s(t, e) {
    return n(t, !1, !0).resolve(e)
  }

  function a(t, e) {
    return t ? n(t, !1, !0).resolveObject(e) : e
  }

  function u(t) {
    return "string" == typeof t
  }

  function h(t) {
    return "object" == typeof t && null !== t
  }

  function l(t) {
    return null === t
  }

  function c(t) {
    return null == t
  }
  var f = r(145);
  e.parse = n, e.resolve = s, e.resolveObject = a, e.format = o, e.Url = i;
  var d = /^([a-z0-9.+-]+:)/i,
    p = /:[0-9]*$/,
    _ = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
    v = ["{", "}", "|", "\\", "^", "`"].concat(_),
    y = ["'"].concat(v),
    g = ["%", "/", "?", ";", "#"].concat(y),
    m = ["/", "?", "#"],
    b = 255,
    x = /^[a-z0-9A-Z_-]{0,63}$/,
    T = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
    w = {
      javascript: !0,
      "javascript:": !0
    },
    E = {
      javascript: !0,
      "javascript:": !0
    },
    O = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    },
    P = r(135);
  i.prototype.parse = function(t, e, r) {
    if (!u(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
    var i = t;
    i = i.trim();
    var n = d.exec(i);
    if (n) {
      n = n[0];
      var o = n.toLowerCase();
      this.protocol = o, i = i.substr(n.length)
    }
    if (r || n || i.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var s = "//" === i.substr(0, 2);
      !s || n && E[n] || (i = i.substr(2), this.slashes = !0)
    }
    if (!E[n] && (s || n && !O[n])) {
      for (var a = -1, h = 0; h < m.length; h++) {
        var l = i.indexOf(m[h]);
        l !== -1 && (a === -1 || l < a) && (a = l)
      }
      var c, p;
      p = a === -1 ? i.lastIndexOf("@") : i.lastIndexOf("@", a), p !== -1 && (c = i.slice(0, p), i = i.slice(p + 1), this.auth = decodeURIComponent(c)), a = -1;
      for (var h = 0; h < g.length; h++) {
        var l = i.indexOf(g[h]);
        l !== -1 && (a === -1 || l < a) && (a = l)
      }
      a === -1 && (a = i.length), this.host = i.slice(0, a), i = i.slice(a), this.parseHost(), this.hostname = this.hostname || "";
      var _ = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!_)
        for (var v = this.hostname.split(/\./), h = 0, S = v.length; h < S; h++) {
          var M = v[h];
          if (M && !M.match(x)) {
            for (var C = "", R = 0, A = M.length; R < A; R++) C += M.charCodeAt(R) > 127 ? "x" : M[R];
            if (!C.match(x)) {
              var D = v.slice(0, h),
                I = v.slice(h + 1),
                L = M.match(T);
              L && (D.push(L[1]), I.unshift(L[2])), I.length && (i = "/" + I.join(".") + i), this.hostname = D.join(".");
              break
            }
          }
        }
      if (this.hostname.length > b ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !_) {
        for (var k = this.hostname.split("."), N = [], h = 0; h < k.length; ++h) {
          var j = k[h];
          N.push(j.match(/[^A-Za-z0-9_-]/) ? "xn--" + f.encode(j) : j)
        }
        this.hostname = N.join(".")
      }
      var F = this.port ? ":" + this.port : "",
        B = this.hostname || "";
      this.host = B + F, this.href += this.host, _ && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
    }
    if (!w[o])
      for (var h = 0, S = y.length; h < S; h++) {
        var U = y[h],
          X = encodeURIComponent(U);
        X === U && (X = escape(U)), i = i.split(U).join(X)
      }
    var W = i.indexOf("#");
    W !== -1 && (this.hash = i.substr(W), i = i.slice(0, W));
    var z = i.indexOf("?");
    if (z !== -1 ? (this.search = i.substr(z), this.query = i.substr(z + 1), e && (this.query = P.parse(this.query)), i = i.slice(0, z)) : e && (this.search = "", this.query = {}), i && (this.pathname = i), O[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      var F = this.pathname || "",
        j = this.search || "";
      this.path = F + j
    }
    return this.href = this.format(), this
  }, i.prototype.format = function() {
    var t = this.auth || "";
    t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
    var e = this.protocol || "",
      r = this.pathname || "",
      i = this.hash || "",
      n = !1,
      o = "";
    this.host ? n = t + this.host : this.hostname && (n = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && h(this.query) && Object.keys(this.query).length && (o = P.stringify(this.query));
    var s = this.search || o && "?" + o || "";
    return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || O[e]) && n !== !1 ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function(t) {
      return encodeURIComponent(t)
    }), s = s.replace("#", "%23"), e + n + r + s + i
  }, i.prototype.resolve = function(t) {
    return this.resolveObject(n(t, !1, !0)).format()
  }, i.prototype.resolveObject = function(t) {
    if (u(t)) {
      var e = new i;
      e.parse(t, !1, !0), t = e
    }
    var r = new i;
    if (Object.keys(this).forEach(function(t) {
        r[t] = this[t]
      }, this), r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
    if (t.slashes && !t.protocol) return Object.keys(t).forEach(function(e) {
      "protocol" !== e && (r[e] = t[e])
    }), O[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
    if (t.protocol && t.protocol !== r.protocol) {
      if (!O[t.protocol]) return Object.keys(t).forEach(function(e) {
        r[e] = t[e]
      }), r.href = r.format(), r;
      if (r.protocol = t.protocol, t.host || E[t.protocol]) r.pathname = t.pathname;
      else {
        for (var n = (t.pathname || "").split("/"); n.length && !(t.host = n.shift()););
        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== n[0] && n.unshift(""), n.length < 2 && n.unshift(""), r.pathname = n.join("/")
      }
      if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
        var o = r.pathname || "",
          s = r.search || "";
        r.path = o + s
      }
      return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
    }
    var a = r.pathname && "/" === r.pathname.charAt(0),
      h = t.host || t.pathname && "/" === t.pathname.charAt(0),
      f = h || a || r.host && t.pathname,
      d = f,
      p = r.pathname && r.pathname.split("/") || [],
      n = t.pathname && t.pathname.split("/") || [],
      _ = r.protocol && !O[r.protocol];
    if (_ && (r.hostname = "", r.port = null, r.host && ("" === p[0] ? p[0] = r.host : p.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === n[0] ? n[0] = t.host : n.unshift(t.host)), t.host = null), f = f && ("" === n[0] || "" === p[0])), h) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, p = n;
    else if (n.length) p || (p = []), p.pop(), p = p.concat(n), r.search = t.search, r.query = t.query;
    else if (!c(t.search)) {
      if (_) {
        r.hostname = r.host = p.shift();
        var v = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
        v && (r.auth = v.shift(), r.host = r.hostname = v.shift())
      }
      return r.search = t.search, r.query = t.query, l(r.pathname) && l(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
    }
    if (!p.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
    for (var y = p.slice(-1)[0], g = (r.host || t.host) && ("." === y || ".." === y) || "" === y, m = 0, b = p.length; b >= 0; b--) y = p[b], "." == y ? p.splice(b, 1) : ".." === y ? (p.splice(b, 1), m++) : m && (p.splice(b, 1), m--);
    if (!f && !d)
      for (; m--; m) p.unshift("..");
    !f || "" === p[0] || p[0] && "/" === p[0].charAt(0) || p.unshift(""), g && "/" !== p.join("/").substr(-1) && p.push("");
    var x = "" === p[0] || p[0] && "/" === p[0].charAt(0);
    if (_) {
      r.hostname = r.host = x ? "" : p.length ? p.shift() : "";
      var v = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
      v && (r.auth = v.shift(), r.host = r.hostname = v.shift())
    }
    return f = f || r.host && p.length, f && !x && p.unshift(""), p.length ? r.pathname = p.join("/") : (r.pathname = null, r.path = null), l(r.pathname) && l(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
  }, i.prototype.parseHost = function() {
    var t = this.host,
      e = p.exec(t);
    e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
  }
}, function(t, e) {
  function r() {
    throw new Error("setTimeout has not been defined")
  }

  function i() {
    throw new Error("clearTimeout has not been defined")
  }

  function n(t) {
    if (l === setTimeout) return setTimeout(t, 0);
    if ((l === r || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
    try {
      return l(t, 0)
    } catch (e) {
      try {
        return l.call(null, t, 0)
      } catch (e) {
        return l.call(this, t, 0)
      }
    }
  }

  function o(t) {
    if (c === clearTimeout) return clearTimeout(t);
    if ((c === i || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);
    try {
      return c(t)
    } catch (e) {
      try {
        return c.call(null, t)
      } catch (e) {
        return c.call(this, t)
      }
    }
  }

  function s() {
    _ && d && (_ = !1, d.length ? p = d.concat(p) : v = -1, p.length && a())
  }

  function a() {
    if (!_) {
      var t = n(s);
      _ = !0;
      for (var e = p.length; e;) {
        for (d = p, p = []; ++v < e;) d && d[v].run();
        v = -1, e = p.length
      }
      d = null, _ = !1, o(t)
    }
  }

  function u(t, e) {
    this.fun = t, this.array = e
  }

  function h() {}
  var l, c, f = t.exports = {};
  ! function() {
    try {
      l = "function" == typeof setTimeout ? setTimeout : r
    } catch (t) {
      l = r
    }
    try {
      c = "function" == typeof clearTimeout ? clearTimeout : i
    } catch (t) {
      c = i
    }
  }();
  var d, p = [],
    _ = !1,
    v = -1;
  f.nextTick = function(t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    p.push(new u(t, e)), 1 !== p.length || _ || n(a)
  }, u.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = h, f.addListener = h, f.once = h, f.off = h, f.removeListener = h, f.removeAllListeners = h, f.emit = h, f.binding = function(t) {
    throw new Error("process.binding is not supported")
  }, f.cwd = function() {
    return "/"
  }, f.chdir = function(t) {
    throw new Error("process.chdir is not supported")
  }, f.umask = function() {
    return 0
  }
}, function(t, e) {
  "use strict";

  function r(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }
  t.exports = function(t, e, i, n) {
    e = e || "&", i = i || "=";
    var o = {};
    if ("string" != typeof t || 0 === t.length) return o;
    var s = /\+/g;
    t = t.split(e);
    var a = 1e3;
    n && "number" == typeof n.maxKeys && (a = n.maxKeys);
    var u = t.length;
    a > 0 && u > a && (u = a);
    for (var h = 0; h < u; ++h) {
      var l, c, f, d, p = t[h].replace(s, "%20"),
        _ = p.indexOf(i);
      _ >= 0 ? (l = p.substr(0, _), c = p.substr(_ + 1)) : (l = p, c = ""), f = decodeURIComponent(l), d = decodeURIComponent(c), r(o, f) ? Array.isArray(o[f]) ? o[f].push(d) : o[f] = [o[f], d] : o[f] = d
    }
    return o
  }
}, function(t, e) {
  "use strict";
  var r = function(t) {
    switch (typeof t) {
      case "string":
        return t;
      case "boolean":
        return t ? "true" : "false";
      case "number":
        return isFinite(t) ? t : "";
      default:
        return ""
    }
  };
  t.exports = function(t, e, i, n) {
    return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map(function(n) {
      var o = encodeURIComponent(r(n)) + i;
      return Array.isArray(t[n]) ? t[n].map(function(t) {
        return o + encodeURIComponent(r(t))
      }).join(e) : o + encodeURIComponent(r(t[n]))
    }).join(e) : n ? encodeURIComponent(r(n)) + i + encodeURIComponent(r(t)) : ""
  }
}, function(t, e, r) {
  "use strict";
  e.decode = e.parse = r(133), e.encode = e.stringify = r(134)
}, function(t, e) {}, function(t, e) {
  var r = new ArrayBuffer(0),
    i = function(t, e, i, n) {
      this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = n || t.STATIC_DRAW, this.data = r, i && this.upload(i)
    };
  i.prototype.upload = function(t, e, r) {
    r || this.bind();
    var i = this.gl;
    t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? i.bufferSubData(this.type, e, t) : i.bufferData(this.type, t, this.drawType), this.data = t
  }, i.prototype.bind = function() {
    var t = this.gl;
    t.bindBuffer(this.type, this.buffer)
  }, i.createVertexBuffer = function(t, e, r) {
    return new i(t, t.ARRAY_BUFFER, e, r)
  }, i.createIndexBuffer = function(t, e, r) {
    return new i(t, t.ELEMENT_ARRAY_BUFFER, e, r)
  }, i.create = function(t, e, r, n) {
    return new i(t, e, r, n)
  }, i.prototype.destroy = function() {
    this.gl.deleteBuffer(this.buffer)
  }, t.exports = i
}, function(t, e, r) {
  var i = r(70),
    n = function(t, e, r) {
      this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = r || 100
    };
  n.prototype.enableTexture = function(t) {
    var e = this.gl;
    this.texture = t || new i(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0)
  }, n.prototype.enableStencil = function() {
    if (!this.stencil) {
      var t = this.gl;
      this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
    }
  }, n.prototype.clear = function(t, e, r, i) {
    this.bind();
    var n = this.gl;
    n.clearColor(t, e, r, i), n.clear(n.COLOR_BUFFER_BIT)
  }, n.prototype.bind = function() {
    var t = this.gl;
    t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
  }, n.prototype.unbind = function() {
    var t = this.gl;
    t.bindFramebuffer(t.FRAMEBUFFER, null)
  }, n.prototype.resize = function(t, e) {
    var r = this.gl;
    this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), this.stencil && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencil), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t, e))
  }, n.prototype.destroy = function() {
    var t = this.gl;
    this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
  }, n.createRGBA = function(t, e, r, o) {
    var s = i.fromData(t, null, e, r);
    s.enableNearestScaling(), s.enableWrapClamp();
    var a = new n(t, e, r);
    return a.enableTexture(s), a.unbind(), a
  }, n.createFloat32 = function(t, e, r, o) {
    var s = new i.fromData(t, o, e, r);
    s.enableNearestScaling(), s.enableWrapClamp();
    var a = new n(t, e, r);
    return a.enableTexture(s), a.unbind(), a
  }, t.exports = n
}, function(t, e, r) {
  var i = r(72),
    n = r(74),
    o = r(75),
    s = r(76),
    a = function(t, e, r) {
      this.gl = t, this.program = i(t, e, r), this.attributes = n(t, this.program);
      var a = o(t, this.program);
      this.uniforms = s(t, a)
    };
  a.prototype.bind = function() {
    this.gl.useProgram(this.program)
  }, a.prototype.destroy = function() {}, t.exports = a
}, function(t, e, r) {
  function i(t, e) {
    if (this.nativeVaoExtension = null, i.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
      this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
      var r = t.getParameter(t.MAX_VERTEX_ATTRIBS);
      this.nativeState = {
        tempAttribState: new Array(r),
        attribState: new Array(r)
      }
    }
    this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1
  }
  var n = r(71);
  i.prototype.constructor = i, t.exports = i, i.FORCE_NATIVE = !1, i.prototype.bind = function() {
    return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this
  }, i.prototype.unbind = function() {
    return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
  }, i.prototype.activate = function() {
    for (var t = this.gl, e = null, r = 0; r < this.attributes.length; r++) {
      var i = this.attributes[r];
      e !== i.buffer && (i.buffer.bind(), e = i.buffer), t.vertexAttribPointer(i.attribute.location, i.attribute.size, i.type || t.FLOAT, i.normalized || !1, i.stride || 0, i.start || 0)
    }
    return n(t, this.attributes, this.nativeState), this.indexBuffer.bind(), this
  }, i.prototype.addAttribute = function(t, e, r, i, n, o) {
    return this.attributes.push({
      buffer: t,
      attribute: e,
      location: e.location,
      type: r || this.gl.FLOAT,
      normalized: i || !1,
      stride: n || 0,
      start: o || 0
    }), this.dirty = !0, this
  }, i.prototype.addIndex = function(t) {
    return this.indexBuffer = t, this.dirty = !0, this
  }, i.prototype.clear = function() {
    return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
  }, i.prototype.draw = function(t, e, r) {
    var i = this.gl;
    return i.drawElements(t, e, i.UNSIGNED_SHORT, r || 0), this
  }, i.prototype.destroy = function() {
    this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
  }
}, function(t, e) {
  var r = function(t, e) {
    var r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
    if (!r) throw new Error("This browser does not support webGL. Try using the canvas renderer");
    return r
  };
  t.exports = r
}, function(t, e, r) {
  t.exports = {
    compileProgram: r(72),
    defaultValue: r(73),
    extractAttributes: r(74),
    extractUniforms: r(75),
    generateUniformAccessObject: r(76),
    mapSize: r(77),
    mapType: r(42)
  }
}, function(t, e) {
  (function(e) {
    t.exports = e
  }).call(e, {})
}, function(t, e) {
  t.exports = function(t) {
    return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
  }
}, function(t, e, r) {
  var i;
  (function(t, n) {
    ! function(o) {
      function s(t) {
        throw RangeError(D[t])
      }

      function a(t, e) {
        for (var r = t.length, i = []; r--;) i[r] = e(t[r]);
        return i
      }

      function u(t, e) {
        var r = t.split("@"),
          i = "";
        r.length > 1 && (i = r[0] + "@", t = r[1]), t = t.replace(A, ".");
        var n = t.split("."),
          o = a(n, e).join(".");
        return i + o
      }

      function h(t) {
        for (var e, r, i = [], n = 0, o = t.length; n < o;) e = t.charCodeAt(n++), e >= 55296 && e <= 56319 && n < o ? (r = t.charCodeAt(n++), 56320 == (64512 & r) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--)) : i.push(e);
        return i
      }

      function l(t) {
        return a(t, function(t) {
          var e = "";
          return t > 65535 && (t -= 65536, e += k(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += k(t)
        }).join("")
      }

      function c(t) {
        return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : x
      }

      function f(t, e) {
        return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
      }

      function d(t, e, r) {
        var i = 0;
        for (t = r ? L(t / O) : t >> 1, t += L(t / e); t > I * w >> 1; i += x) t = L(t / I);
        return L(i + (I + 1) * t / (t + E))
      }

      function p(t) {
        var e, r, i, n, o, a, u, h, f, p, _ = [],
          v = t.length,
          y = 0,
          g = S,
          m = P;
        for (r = t.lastIndexOf(M), r < 0 && (r = 0), i = 0; i < r; ++i) t.charCodeAt(i) >= 128 && s("not-basic"), _.push(t.charCodeAt(i));
        for (n = r > 0 ? r + 1 : 0; n < v;) {
          for (o = y, a = 1, u = x; n >= v && s("invalid-input"), h = c(t.charCodeAt(n++)), (h >= x || h > L((b - y) / a)) && s("overflow"), y += h * a, f = u <= m ? T : u >= m + w ? w : u - m, !(h < f); u += x) p = x - f, a > L(b / p) && s("overflow"), a *= p;
          e = _.length + 1, m = d(y - o, e, 0 == o), L(y / e) > b - g && s("overflow"), g += L(y / e), y %= e, _.splice(y++, 0, g)
        }
        return l(_)
      }

      function _(t) {
        var e, r, i, n, o, a, u, l, c, p, _, v, y, g, m, E = [];
        for (t = h(t), v = t.length, e = S, r = 0, o = P, a = 0; a < v; ++a) _ = t[a], _ < 128 && E.push(k(_));
        for (i = n = E.length, n && E.push(M); i < v;) {
          for (u = b, a = 0; a < v; ++a) _ = t[a], _ >= e && _ < u && (u = _);
          for (y = i + 1, u - e > L((b - r) / y) && s("overflow"), r += (u - e) * y, e = u, a = 0; a < v; ++a)
            if (_ = t[a], _ < e && ++r > b && s("overflow"), _ == e) {
              for (l = r, c = x; p = c <= o ? T : c >= o + w ? w : c - o, !(l < p); c += x) m = l - p, g = x - p, E.push(k(f(p + m % g, 0))), l = L(m / g);
              E.push(k(f(l, 0))), o = d(r, y, i == n), r = 0, ++i
            }++r, ++e
        }
        return E.join("")
      }

      function v(t) {
        return u(t, function(t) {
          return C.test(t) ? p(t.slice(4).toLowerCase()) : t
        })
      }

      function y(t) {
        return u(t, function(t) {
          return R.test(t) ? "xn--" + _(t) : t
        })
      }
      var g = ("object" == typeof e && e && !e.nodeType && e, "object" == typeof t && t && !t.nodeType && t, "object" == typeof n && n);
      g.global !== g && g.window !== g && g.self !== g || (o = g);
      var m, b = 2147483647,
        x = 36,
        T = 1,
        w = 26,
        E = 38,
        O = 700,
        P = 72,
        S = 128,
        M = "-",
        C = /^xn--/,
        R = /[^\x20-\x7E]/,
        A = /[\x2E\u3002\uFF0E\uFF61]/g,
        D = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        I = x - T,
        L = Math.floor,
        k = String.fromCharCode;
      m = {
        version: "1.3.2",
        ucs2: {
          decode: h,
          encode: l
        },
        decode: p,
        encode: _,
        toASCII: y,
        toUnicode: v
      }, i = function() {
        return m
      }.call(e, r, e, t), !(void 0 !== i && (t.exports = i))
    }(this)
  }).call(e, r(144)(t), function() {
    return this
  }())
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    a = r(78),
    u = n(a),
    h = r(69),
    l = n(h),
    c = r(79),
    f = i(c),
    d = r(43),
    p = n(d),
    _ = 100,
    v = /(#[\w\-]+)?$/,
    y = function() {
      function t() {
        var e = this,
          r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        o(this, t), this.baseUrl = r, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = function(t, r) {
          return e._loadResource(t, r)
        }, this._queue = f.queue(this._boundLoadResource, i), this._queue.pause(), this.resources = {}, this.onProgress = new u["default"], this.onError = new u["default"], this.onLoad = new u["default"], this.onStart = new u["default"], this.onComplete = new u["default"]
      }
      return t.prototype.add = function(t, e, r, i) {
        if (Array.isArray(t)) {
          for (var n = 0; n < t.length; ++n) this.add(t[n]);
          return this
        }
        if ("object" === ("undefined" == typeof t ? "undefined" : s(t)) && (i = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
        if ("function" == typeof r && (i = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
        if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
        if (e = this._prepareUrl(e), this.resources[t] = new p["default"](t, e, r), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
          var o = r.parentResource,
            a = o.progressChunk * (o.children.length + 1),
            u = a / (o.children.length + 2);
          o.children.push(this.resources[t]), o.progressChunk = u;
          for (var h = 0; h < o.children.length; ++h) o.children[h].progressChunk = u
        }
        return this._queue.push(this.resources[t]), this
      }, t.prototype.pre = function(t) {
        return this._beforeMiddleware.push(t), this
      }, t.prototype.use = function(t) {
        return this._afterMiddleware.push(t), this
      }, t.prototype.reset = function() {
        this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause();
        for (var t in this.resources) {
          var e = this.resources[t];
          e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
        }
        return this.resources = {}, this
      }, t.prototype.load = function(t) {
        if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
        for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = e;
        return this.loading = !0, this.onStart.dispatch(this), this._queue.resume(), this
      }, t.prototype._prepareUrl = function(t) {
        var e = (0, l["default"])(t, {
            strictMode: !0
          }),
          r = void 0;
        if (r = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
          var i = v.exec(r)[0];
          r = r.substr(0, r.length - i.length), r += r.indexOf("?") !== -1 ? "&" + this.defaultQueryString : "?" + this.defaultQueryString, r += i
        }
        return r
      }, t.prototype._loadResource = function(t, e) {
        var r = this;
        t._dequeue = e, f.eachSeries(this._beforeMiddleware, function(e, i) {
          e.call(r, t, function() {
            i(t.isComplete ? {} : null)
          })
        }, function() {
          t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r), t.load())
        })
      }, t.prototype._onComplete = function() {
        this.loading = !1, this.onComplete.dispatch(this, this.resources)
      }, t.prototype._onLoad = function(t) {
        var e = this;
        t._onLoadBinding = null, f.eachSeries(this._afterMiddleware, function(r, i) {
          r.call(e, t, i)
        }, function() {
          t.onAfterMiddleware.dispatch(t), e.progress += t.progressChunk, e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), t._dequeue(), e._queue.idle() && (e.progress = _, e._onComplete())
        })
      }, t
    }();
  e["default"] = y
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n() {
    return function(t, e) {
      if (!t.data) return void e();
      if (t.xhr && t.xhrType === a["default"].XHR_RESPONSE_TYPE.BLOB)
        if (window.Blob && "string" != typeof t.data) {
          if (0 === t.data.type.indexOf("image")) {
            var r = function() {
              var r = l.createObjectURL(t.data);
              return t.blob = t.data, t.data = new Image, t.data.src = r, t.type = a["default"].TYPE.IMAGE, t.data.onload = function() {
                l.revokeObjectURL(r), t.data.onload = null, e()
              }, {
                v: void 0
              }
            }();
            if ("object" === ("undefined" == typeof r ? "undefined" : o(r))) return r.v
          }
        } else {
          var i = t.xhr.getResponseHeader("content-type");
          if (i && 0 === i.indexOf("image")) return t.data = new Image, t.data.src = "data:" + i + ";base64," + h["default"].encodeBinary(t.xhr.responseText), t.type = a["default"].TYPE.IMAGE, void(t.data.onload = function() {
            t.data.onload = null, e()
          })
        }
      e()
    }
  }
  e.__esModule = !0;
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  e.blobMiddlewareFactory = n;
  var s = r(43),
    a = i(s),
    u = r(80),
    h = i(u),
    l = window.URL || window.webkitURL
}, function(t, e, r) {
  r(172);
  var i = r(21).Object;
  t.exports = function(t, e) {
    return i.create(t, e)
  }
}, function(t, e, r) {
  r(173), t.exports = r(21).Object.setPrototypeOf
}, function(t, e, r) {
  r(176), r(174), r(177), r(178), t.exports = r(21).Symbol
}, function(t, e, r) {
  r(175), r(179), t.exports = r(56).f("iterator")
}, function(t, e) {
  t.exports = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t
  }
}, function(t, e) {
  t.exports = function() {}
}, function(t, e, r) {
  var i = r(13),
    n = r(169),
    o = r(168);
  t.exports = function(t) {
    return function(e, r, s) {
      var a, u = i(e),
        h = n(u.length),
        l = o(s, h);
      if (t && r != r) {
        for (; h > l;)
          if (a = u[l++], a != a) return !0
      } else
        for (; h > l; l++)
          if ((t || l in u) && u[l] === r) return t || l || 0;
      return !t && -1
    }
  }
}, function(t, e, r) {
  var i = r(31),
    n = r(89),
    o = r(49);
  t.exports = function(t) {
    var e = i(t),
      r = n.f;
    if (r)
      for (var s, a = r(t), u = o.f, h = 0; a.length > h;) u.call(t, s = a[h++]) && e.push(s);
    return e
  }
}, function(t, e, r) {
  t.exports = r(11).document && document.documentElement
}, function(t, e, r) {
  var i = r(82);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return "String" == i(t) ? t.split("") : Object(t)
  }
}, function(t, e, r) {
  var i = r(82);
  t.exports = Array.isArray || function(t) {
    return "Array" == i(t)
  }
}, function(t, e, r) {
  "use strict";
  var i = r(48),
    n = r(32),
    o = r(50),
    s = {};
  r(16)(s, r(18)("iterator"), function() {
    return this
  }), t.exports = function(t, e, r) {
    t.prototype = i(s, {
      next: n(1, r)
    }), o(t, e + " Iterator")
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return {
      value: e,
      done: !!t
    }
  }
}, function(t, e, r) {
  var i = r(31),
    n = r(13);
  t.exports = function(t, e) {
    for (var r, o = n(t), s = i(o), a = s.length, u = 0; a > u;)
      if (o[r = s[u++]] === e) return r
  }
}, function(t, e, r) {
  var i = r(33)("meta"),
    n = r(22),
    o = r(12),
    s = r(17).f,
    a = 0,
    u = Object.isExtensible || function() {
      return !0
    },
    h = !r(30)(function() {
      return u(Object.preventExtensions({}))
    }),
    l = function(t) {
      s(t, i, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      })
    },
    c = function(t, e) {
      if (!n(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      if (!o(t, i)) {
        if (!u(t)) return "F";
        if (!e) return "E";
        l(t)
      }
      return t[i].i
    },
    f = function(t, e) {
      if (!o(t, i)) {
        if (!u(t)) return !0;
        if (!e) return !1;
        l(t)
      }
      return t[i].w
    },
    d = function(t) {
      return h && p.NEED && u(t) && !o(t, i) && l(t), t
    },
    p = t.exports = {
      KEY: i,
      NEED: !1,
      fastKey: c,
      getWeak: f,
      onFreeze: d
    }
}, function(t, e, r) {
  var i = r(17),
    n = r(20),
    o = r(31);
  t.exports = r(15) ? Object.defineProperties : function(t, e) {
    n(t);
    for (var r, s = o(e), a = s.length, u = 0; a > u;) i.f(t, r = s[u++], e[r]);
    return t
  }
}, function(t, e, r) {
  var i = r(13),
    n = r(88).f,
    o = {}.toString,
    s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    a = function(t) {
      try {
        return n(t)
      } catch (e) {
        return s.slice()
      }
    };
  t.exports.f = function(t) {
    return s && "[object Window]" == o.call(t) ? a(t) : n(i(t))
  }
}, function(t, e, r) {
  var i = r(12),
    n = r(170),
    o = r(51)("IE_PROTO"),
    s = Object.prototype;
  t.exports = Object.getPrototypeOf || function(t) {
    return t = n(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
  }
}, function(t, e, r) {
  var i = r(22),
    n = r(20),
    o = function(t, e) {
      if (n(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
      try {
        i = r(83)(Function.call, r(87).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array)
      } catch (n) {
        e = !0
      }
      return function(t, r) {
        return o(t, r), e ? t.__proto__ = r : i(t, r), t
      }
    }({}, !1) : void 0),
    check: o
  }
}, function(t, e, r) {
  var i = r(53),
    n = r(44);
  t.exports = function(t) {
    return function(e, r) {
      var o, s, a = String(n(e)),
        u = i(r),
        h = a.length;
      return u < 0 || u >= h ? t ? "" : void 0 : (o = a.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === h || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : (o - 55296 << 10) + (s - 56320) + 65536)
    }
  }
}, function(t, e, r) {
  var i = r(53),
    n = Math.max,
    o = Math.min;
  t.exports = function(t, e) {
    return t = i(t), t < 0 ? n(t + e, 0) : o(t, e)
  }
}, function(t, e, r) {
  var i = r(53),
    n = Math.min;
  t.exports = function(t) {
    return t > 0 ? n(i(t), 9007199254740991) : 0
  }
}, function(t, e, r) {
  var i = r(44);
  t.exports = function(t) {
    return Object(i(t))
  }
}, function(t, e, r) {
  "use strict";
  var i = r(153),
    n = r(160),
    o = r(46),
    s = r(13);
  t.exports = r(86)(Array, "Array", function(t, e) {
    this._t = s(t), this._i = 0, this._k = e
  }, function() {
    var t = this._t,
      e = this._k,
      r = this._i++;
    return !t || r >= t.length ? (this._t = void 0, n(1)) : "keys" == e ? n(0, r) : "values" == e ? n(0, t[r]) : n(0, [r, t[r]])
  }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e, r) {
  var i = r(29);
  i(i.S, "Object", {
    create: r(48)
  })
}, function(t, e, r) {
  var i = r(29);
  i(i.S, "Object", {
    setPrototypeOf: r(166).set
  })
}, function(t, e) {}, function(t, e, r) {
  "use strict";
  var i = r(167)(!0);
  r(86)(String, "String", function(t) {
    this._t = String(t), this._i = 0
  }, function() {
    var t, e = this._t,
      r = this._i;
    return r >= e.length ? {
      value: void 0,
      done: !0
    } : (t = i(e, r), this._i += t.length, {
      value: t,
      done: !1
    })
  })
}, function(t, e, r) {
  "use strict";
  var i = r(11),
    n = r(12),
    o = r(15),
    s = r(29),
    a = r(91),
    u = r(162).KEY,
    h = r(30),
    l = r(52),
    c = r(50),
    f = r(33),
    d = r(18),
    p = r(56),
    _ = r(55),
    v = r(161),
    y = r(155),
    g = r(158),
    m = r(20),
    b = r(13),
    x = r(54),
    T = r(32),
    w = r(48),
    E = r(164),
    O = r(87),
    P = r(17),
    S = r(31),
    M = O.f,
    C = P.f,
    R = E.f,
    A = i.Symbol,
    D = i.JSON,
    I = D && D.stringify,
    L = "prototype",
    k = d("_hidden"),
    N = d("toPrimitive"),
    j = {}.propertyIsEnumerable,
    F = l("symbol-registry"),
    B = l("symbols"),
    U = l("op-symbols"),
    X = Object[L],
    W = "function" == typeof A,
    z = i.QObject,
    Y = !z || !z[L] || !z[L].findChild,
    G = o && h(function() {
      return 7 != w(C({}, "a", {
        get: function() {
          return C(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function(t, e, r) {
      var i = M(X, e);
      i && delete X[e], C(t, e, r), i && t !== X && C(X, e, i)
    } : C,
    H = function(t) {
      var e = B[t] = w(A[L]);
      return e._k = t, e
    },
    V = W && "symbol" == typeof A.iterator ? function(t) {
      return "symbol" == typeof t
    } : function(t) {
      return t instanceof A
    },
    q = function(t, e, r) {
      return t === X && q(U, e, r), m(t), e = x(e, !0), m(r), n(B, e) ? (r.enumerable ? (n(t, k) && t[k][e] && (t[k][e] = !1), r = w(r, {
        enumerable: T(0, !1)
      })) : (n(t, k) || C(t, k, T(1, {})), t[k][e] = !0), G(t, e, r)) : C(t, e, r)
    },
    Z = function(t, e) {
      m(t);
      for (var r, i = y(e = b(e)), n = 0, o = i.length; o > n;) q(t, r = i[n++], e[r]);
      return t
    },
    K = function(t, e) {
      return void 0 === e ? w(t) : Z(w(t), e)
    },
    J = function(t) {
      var e = j.call(this, t = x(t, !0));
      return !(this === X && n(B, t) && !n(U, t)) && (!(e || !n(this, t) || !n(B, t) || n(this, k) && this[k][t]) || e)
    },
    Q = function(t, e) {
      if (t = b(t), e = x(e, !0), t !== X || !n(B, e) || n(U, e)) {
        var r = M(t, e);
        return !r || !n(B, e) || n(t, k) && t[k][e] || (r.enumerable = !0), r
      }
    },
    $ = function(t) {
      for (var e, r = R(b(t)), i = [], o = 0; r.length > o;) n(B, e = r[o++]) || e == k || e == u || i.push(e);
      return i
    },
    tt = function(t) {
      for (var e, r = t === X, i = R(r ? U : b(t)), o = [], s = 0; i.length > s;) !n(B, e = i[s++]) || r && !n(X, e) || o.push(B[e]);
      return o
    };
  W || (A = function() {
    if (this instanceof A) throw TypeError("Symbol is not a constructor!");
    var t = f(arguments.length > 0 ? arguments[0] : void 0),
      e = function(r) {
        this === X && e.call(U, r), n(this, k) && n(this[k], t) && (this[k][t] = !1), G(this, t, T(1, r))
      };
    return o && Y && G(X, t, {
      configurable: !0,
      set: e
    }), H(t)
  }, a(A[L], "toString", function() {
    return this._k
  }), O.f = Q, P.f = q, r(88).f = E.f = $, r(49).f = J, r(89).f = tt, o && !r(47) && a(X, "propertyIsEnumerable", J, !0), p.f = function(t) {
    return H(d(t))
  }), s(s.G + s.W + s.F * !W, {
    Symbol: A
  });
  for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; et.length > rt;) d(et[rt++]);
  for (var et = S(d.store), rt = 0; et.length > rt;) _(et[rt++]);
  s(s.S + s.F * !W, "Symbol", {
    "for": function(t) {
      return n(F, t += "") ? F[t] : F[t] = A(t)
    },
    keyFor: function(t) {
      if (V(t)) return v(F, t);
      throw TypeError(t + " is not a symbol!")
    },
    useSetter: function() {
      Y = !0
    },
    useSimple: function() {
      Y = !1
    }
  }), s(s.S + s.F * !W, "Object", {
    create: K,
    defineProperty: q,
    defineProperties: Z,
    getOwnPropertyDescriptor: Q,
    getOwnPropertyNames: $,
    getOwnPropertySymbols: tt
  }), D && s(s.S + s.F * (!W || h(function() {
    var t = A();
    return "[null]" != I([t]) || "{}" != I({
      a: t
    }) || "{}" != I(Object(t))
  })), "JSON", {
    stringify: function(t) {
      if (void 0 !== t && !V(t)) {
        for (var e, r, i = [t], n = 1; arguments.length > n;) i.push(arguments[n++]);
        return e = i[1], "function" == typeof e && (r = e), !r && g(e) || (e = function(t, e) {
          if (r && (e = r.call(this, t, e)), !V(e)) return e
        }), i[1] = e, I.apply(D, i)
      }
    }
  }), A[L][N] || r(16)(A[L], N, A[L].valueOf), c(A, "Symbol"), c(Math, "Math", !0), c(i.JSON, "JSON", !0)
}, function(t, e, r) {
  r(55)("asyncIterator")
}, function(t, e, r) {
  r(55)("observable")
}, function(t, e, r) {
  r(171);
  for (var i = r(11), n = r(16), o = r(46), s = r(18)("toStringTag"), a = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
    var h = a[u],
      l = i[h],
      c = l && l.prototype;
    c && !c[s] && n(c, s, h), o[h] = o.Array
  }
}, function(t, e) {
  "use strict";

  function r(t) {
    if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t)
  }

  function i() {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
      for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
      var i = Object.getOwnPropertyNames(e).map(function(t) {
        return e[t]
      });
      if ("0123456789" !== i.join("")) return !1;
      var n = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(t) {
        n[t] = t
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
    } catch (o) {
      return !1
    }
  }
  var n = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable;
  t.exports = i() ? Object.assign : function(t, e) {
    for (var i, s, a = r(t), u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var h in i) n.call(i, h) && (a[h] = i[h]);
      if (Object.getOwnPropertySymbols) {
        s = Object.getOwnPropertySymbols(i);
        for (var l = 0; l < s.length; l++) o.call(i, s[l]) && (a[s[l]] = i[s[l]])
      }
    }
    return a
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var s = r(1),
    a = n(s),
    u = r(28),
    h = i(u),
    l = r(92),
    c = i(l);
  Object.assign(a.DisplayObject.prototype, c["default"]);
  var f = 9,
    d = 100,
    p = 0,
    _ = 0,
    v = 2,
    y = 1,
    g = -1e3,
    m = -1e3,
    b = 2,
    x = function() {
      function t(e) {
        o(this, t), !h["default"].tablet && !h["default"].phone || navigator.isCocoonJS || this.createTouchHook();
        var r = document.createElement("div");
        r.style.width = d + "px", r.style.height = d + "px", r.style.position = "absolute", r.style.top = p + "px", r.style.left = _ + "px", r.style.zIndex = v, this.div = r, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = e, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
      }
      return t.prototype.createTouchHook = function() {
        var t = this,
          e = document.createElement("button");
        e.style.width = y + "px", e.style.height = y + "px", e.style.position = "absolute", e.style.top = g + "px", e.style.left = m + "px", e.style.zIndex = b, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", function() {
          t.isMobileAccessabillity = !0, t.activate(), document.body.removeChild(e)
        }), document.body.appendChild(e)
      }, t.prototype.activate = function() {
        this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
      }, t.prototype.deactivate = function() {
        this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
      }, t.prototype.updateAccessibleObjects = function(t) {
        if (t.visible) {
          t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
          for (var e = t.children, r = e.length - 1; r >= 0; r--) this.updateAccessibleObjects(e[r])
        }
      }, t.prototype.update = function() {
        if (this.renderer.renderingToScreen) {
          this.updateAccessibleObjects(this.renderer._lastObjectRendered);
          var t = this.renderer.view.getBoundingClientRect(),
            e = t.width / this.renderer.width,
            r = t.height / this.renderer.height,
            i = this.div;
          i.style.left = t.left + "px", i.style.top = t.top + "px", i.style.width = this.renderer.width + "px", i.style.height = this.renderer.height + "px";
          for (var n = 0; n < this.children.length; n++) {
            var o = this.children[n];
            if (o.renderId !== this.renderId) o._accessibleActive = !1, a.utils.removeItems(this.children, n, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, n--, 0 === this.children.length && this.deactivate();
            else {
              i = o._accessibleDiv;
              var s = o.hitArea,
                u = o.worldTransform;
              o.hitArea ? (i.style.left = (u.tx + s.x * u.a) * e + "px", i.style.top = (u.ty + s.y * u.d) * r + "px", i.style.width = s.width * u.a * e + "px", i.style.height = s.height * u.d * r + "px") : (s = o.getBounds(), this.capHitArea(s), i.style.left = s.x * e + "px", i.style.top = s.y * r + "px", i.style.width = s.width * e + "px", i.style.height = s.height * r + "px")
            }
          }
          this.renderId++
        }
      }, t.prototype.capHitArea = function(t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
      }, t.prototype.addChild = function(t) {
        var e = this.pool.pop();
        e || (e = document.createElement("button"), e.style.width = d + "px", e.style.height = d + "px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = v, e.style.borderStyle = "none", e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleTitle || t.accessibleHint || (e.title = "displayObject " + this.tabIndex), t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
      }, t.prototype._onClick = function(t) {
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "click", e.eventData)
      }, t.prototype._onFocus = function(t) {
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
      }, t.prototype._onFocusOut = function(t) {
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
      }, t.prototype._onKeyDown = function(t) {
        t.keyCode === f && this.activate()
      }, t.prototype._onMouseMove = function() {
        this.deactivate()
      }, t.prototype.destroy = function() {
        this.div = null;
        for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
        window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
      }, t
    }();
  e["default"] = x, a.WebGLRenderer.registerPlugin("accessibility", x), a.CanvasRenderer.registerPlugin("accessibility", x)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(92);
  Object.defineProperty(e, "accessibleTarget", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(181);
  Object.defineProperty(e, "AccessibilityManager", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(34),
    u = i(a),
    h = r(65),
    l = i(h),
    c = r(26),
    f = i(c),
    d = r(96),
    p = i(d),
    _ = r(63),
    v = i(_),
    y = r(4),
    g = r(3),
    m = r(2),
    b = r(57),
    x = i(b),
    T = r(185),
    w = i(T),
    E = r(36),
    O = i(E),
    P = void 0,
    S = new y.Matrix,
    M = new y.Point,
    C = new Float32Array(4),
    R = new Float32Array(4),
    A = function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this));
        return r.fillAlpha = 1, r.lineWidth = 0, r.lineColor = 0, r.graphicsData = [], r.tint = 16777215, r._prevTint = 16777215, r.blendMode = m.BLEND_MODES.NORMAL, r.currentPath = null, r._webGL = {}, r.isMask = !1, r.boundsPadding = 0, r._localBounds = new x["default"], r.dirty = 0, r.fastRectDirty = -1, r.clearDirty = 0, r.boundsDirty = -1, r.cachedSpriteDirty = !1, r._spriteRect = null, r._fastRect = !1, r
      }
      return s(e, t), e.prototype.clone = function r() {
        var r = new e;
        r.renderable = this.renderable, r.fillAlpha = this.fillAlpha, r.lineWidth = this.lineWidth, r.lineColor = this.lineColor, r.tint = this.tint, r.blendMode = this.blendMode, r.isMask = this.isMask, r.boundsPadding = this.boundsPadding, r.dirty = 0, r.cachedSpriteDirty = this.cachedSpriteDirty;
        for (var t = 0; t < this.graphicsData.length; ++t) r.graphicsData.push(this.graphicsData[t].clone());
        return r.currentPath = r.graphicsData[r.graphicsData.length - 1], r.updateLocalBounds(), r
      }, e.prototype.lineStyle = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        if (this.lineWidth = t, this.lineColor = e, this.lineAlpha = r, this.currentPath)
          if (this.currentPath.shape.points.length) {
            var i = new y.Polygon(this.currentPath.shape.points.slice(-2));
            i.closed = !1, this.drawShape(i)
          } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
        return this
      }, e.prototype.moveTo = function(t, e) {
        var r = new y.Polygon([t, e]);
        return r.closed = !1, this.drawShape(r), this
      }, e.prototype.lineTo = function(t, e) {
        return this.currentPath.shape.points.push(t, e), this.dirty++, this
      }, e.prototype.quadraticCurveTo = function(t, e, r, i) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        var n = 20,
          o = this.currentPath.shape.points,
          s = 0,
          a = 0;
        0 === o.length && this.moveTo(0, 0);
        for (var u = o[o.length - 2], h = o[o.length - 1], l = 1; l <= n; ++l) {
          var c = l / n;
          s = u + (t - u) * c, a = h + (e - h) * c, o.push(s + (t + (r - t) * c - s) * c, a + (e + (i - e) * c - a) * c)
        }
        return this.dirty++, this
      }, e.prototype.bezierCurveTo = function(t, e, r, i, n, o) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        var s = this.currentPath.shape.points,
          a = s[s.length - 2],
          u = s[s.length - 1];
        return s.length -= 2, (0, w["default"])(a, u, t, e, r, i, n, o, s), this.dirty++, this
      }, e.prototype.arcTo = function(t, e, r, i, n) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
        var o = this.currentPath.shape.points,
          s = o[o.length - 2],
          a = o[o.length - 1],
          u = a - e,
          h = s - t,
          l = i - e,
          c = r - t,
          f = Math.abs(u * c - h * l);
        if (f < 1e-8 || 0 === n) o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e);
        else {
          var d = u * u + h * h,
            p = l * l + c * c,
            _ = u * l + h * c,
            v = n * Math.sqrt(d) / f,
            y = n * Math.sqrt(p) / f,
            g = v * _ / d,
            m = y * _ / p,
            b = v * c + y * h,
            x = v * l + y * u,
            T = h * (y + g),
            w = u * (y + g),
            E = c * (v + m),
            O = l * (v + m),
            P = Math.atan2(w - x, T - b),
            S = Math.atan2(O - x, E - b);
          this.arc(b + t, x + e, n, P, S, h * l > c * u)
        }
        return this.dirty++, this
      }, e.prototype.arc = function(t, e, r, i, n) {
        var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (i === n) return this;
        !o && n <= i ? n += 2 * Math.PI : o && i <= n && (i += 2 * Math.PI);
        var s = n - i,
          a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
        if (0 === s) return this;
        var u = t + Math.cos(i) * r,
          h = e + Math.sin(i) * r,
          l = this.currentPath ? this.currentPath.shape.points : null;
        l ? l[l.length - 2] === u && l[l.length - 1] === h || l.push(u, h) : (this.moveTo(u, h), l = this.currentPath.shape.points);
        for (var c = s / (2 * a), f = 2 * c, d = Math.cos(c), p = Math.sin(c), _ = a - 1, v = _ % 1 / _, y = 0; y <= _; ++y) {
          var g = y + v * y,
            m = c + i + f * g,
            b = Math.cos(m),
            x = -Math.sin(m);
          l.push((d * b + p * x) * r + t, (d * -x + p * b) * r + e)
        }
        return this.dirty++, this
      }, e.prototype.beginFill = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.filling = !0, this.fillColor = t, this.fillAlpha = e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
      }, e.prototype.endFill = function() {
        return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
      }, e.prototype.drawRect = function(t, e, r, i) {
        return this.drawShape(new y.Rectangle(t, e, r, i)), this
      }, e.prototype.drawRoundedRect = function(t, e, r, i, n) {
        return this.drawShape(new y.RoundedRectangle(t, e, r, i, n)), this
      }, e.prototype.drawCircle = function(t, e, r) {
        return this.drawShape(new y.Circle(t, e, r)), this
      }, e.prototype.drawEllipse = function(t, e, r, i) {
        return this.drawShape(new y.Ellipse(t, e, r, i)), this
      }, e.prototype.drawPolygon = function(t) {
        var e = t,
          r = !0;
        if (e instanceof y.Polygon && (r = e.closed, e = e.points), !Array.isArray(e)) {
          e = new Array(arguments.length);
          for (var i = 0; i < e.length; ++i) e[i] = arguments[i]
        }
        var n = new y.Polygon(e);
        return n.closed = r, this.drawShape(n), this
      }, e.prototype.clear = function() {
        return (this.lineWidth || this.filling || this.graphicsData.length > 0) && (this.lineWidth = 0, this.filling = !1, this.boundsDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), this.currentPath = null, this._spriteRect = null, this
      }, e.prototype.isFastRect = function() {
        return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === m.SHAPES.RECT && !this.graphicsData[0].lineWidth
      }, e.prototype._renderWebGL = function(t) {
        this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this))
      }, e.prototype._renderSpriteRect = function(t) {
        var r = this.graphicsData[0].shape;
        if (!this._spriteRect) {
          if (!e._SPRITE_TEXTURE) {
            e._SPRITE_TEXTURE = l["default"].create(10, 10);
            var i = document.createElement("canvas");
            i.width = 10, i.height = 10;
            var n = i.getContext("2d");
            n.fillStyle = "white", n.fillRect(0, 0, 10, 10), e._SPRITE_TEXTURE = f["default"].fromCanvas(i)
          }
          this._spriteRect = new v["default"](e._SPRITE_TEXTURE)
        }
        if (16777215 === this.tint) this._spriteRect.tint = this.graphicsData[0].fillColor;
        else {
          var o = C,
            s = R;
          (0, g.hex2rgb)(this.graphicsData[0].fillColor, o), (0, g.hex2rgb)(this.tint, s), o[0] *= s[0], o[1] *= s[1], o[2] *= s[2], this._spriteRect.tint = (0, g.rgb2hex)(o)
        }
        this._spriteRect.alpha = this.graphicsData[0].fillAlpha, this._spriteRect.worldAlpha = this.worldAlpha * this._spriteRect.alpha, e._SPRITE_TEXTURE._frame.width = r.width, e._SPRITE_TEXTURE._frame.height = r.height, this._spriteRect.transform.worldTransform = this.transform.worldTransform, this._spriteRect.anchor.set(-r.x / r.width, -r.y / r.height), this._spriteRect._onAnchorUpdate(), this._spriteRect._renderWebGL(t)
      }, e.prototype._renderCanvas = function(t) {
        this.isMask !== !0 && t.plugins.graphics.render(this)
      }, e.prototype._calculateBounds = function() {
        this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.cachedSpriteDirty = !0);
        var t = this._localBounds;
        this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
      }, e.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, M);
        for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
          var i = e[r];
          if (i.fill && i.shape && i.shape.contains(M.x, M.y)) return !0
        }
        return !1
      }, e.prototype.updateLocalBounds = function() {
        var t = 1 / 0,
          e = -(1 / 0),
          r = 1 / 0,
          i = -(1 / 0);
        if (this.graphicsData.length)
          for (var n = 0, o = 0, s = 0, a = 0, u = 0, h = 0; h < this.graphicsData.length; h++) {
            var l = this.graphicsData[h],
              c = l.type,
              f = l.lineWidth;
            if (n = l.shape, c === m.SHAPES.RECT || c === m.SHAPES.RREC) o = n.x - f / 2, s = n.y - f / 2, a = n.width + f, u = n.height + f, t = o < t ? o : t, e = o + a > e ? o + a : e, r = s < r ? s : r, i = s + u > i ? s + u : i;
            else if (c === m.SHAPES.CIRC) o = n.x, s = n.y, a = n.radius + f / 2, u = n.radius + f / 2, t = o - a < t ? o - a : t, e = o + a > e ? o + a : e, r = s - u < r ? s - u : r, i = s + u > i ? s + u : i;
            else if (c === m.SHAPES.ELIP) o = n.x, s = n.y, a = n.width + f / 2, u = n.height + f / 2, t = o - a < t ? o - a : t, e = o + a > e ? o + a : e, r = s - u < r ? s - u : r, i = s + u > i ? s + u : i;
            else
              for (var d = n.points, p = 0, _ = 0, v = 0, y = 0, g = 0, b = 0, x = 0, T = 0, w = 0; w + 2 < d.length; w += 2) o = d[w], s = d[w + 1], p = d[w + 2], _ = d[w + 3], v = Math.abs(p - o), y = Math.abs(_ - s), u = f, a = Math.sqrt(v * v + y * y), a < 1e-9 || (g = (u / a * y + v) / 2, b = (u / a * v + y) / 2, x = (p + o) / 2, T = (_ + s) / 2, t = x - g < t ? x - g : t, e = x + g > e ? x + g : e, r = T - b < r ? T - b : r, i = T + b > i ? T + b : i)
          } else t = 0, e = 0, r = 0, i = 0;
        var E = this.boundsPadding;
        this._localBounds.minX = t - E, this._localBounds.maxX = e + 2 * E, this._localBounds.minY = r - E, this._localBounds.maxY = i + 2 * E
      }, e.prototype.drawShape = function(t) {
        this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
        var e = new p["default"](this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
        return this.graphicsData.push(e), e.type === m.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty++, e
      }, e.prototype.generateCanvasTexture = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          r = this.getLocalBounds(),
          i = l["default"].create(r.width, r.height, t, e);
        P || (P = new O["default"]), S.tx = -r.x, S.ty = -r.y, P.render(this, i, !1, S);
        var n = f["default"].fromCanvas(i.baseTexture._canvasRenderTarget.canvas, t);
        return n.baseTexture.resolution = e, n.baseTexture.update(), n
      }, e.prototype.closePath = function() {
        var t = this.currentPath;
        return t && t.shape && t.shape.close(), this
      }, e.prototype.addHole = function() {
        var t = this.graphicsData.pop();
        return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), this.currentPath = null, this
      }, e.prototype.destroy = function(e) {
        t.prototype.destroy.call(this, e);
        for (var r = 0; r < this.graphicsData.length; ++r) this.graphicsData[r].destroy();
        for (var i in this._webgl)
          for (var n = 0; n < this._webgl[i].data.length; ++n) this._webgl[i].data[n].destroy();
        this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null,
          this._webgl = null, this._localBounds = null
      }, e
    }(u["default"]);
  e["default"] = A, A._SPRITE_TEXTURE = null
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(36),
    s = i(o),
    a = r(2),
    u = function() {
      function t(e) {
        n(this, t), this.renderer = e
      }
      return t.prototype.render = function(t) {
        var e = this.renderer,
          r = e.context,
          i = t.worldAlpha,
          n = t.transform.worldTransform,
          o = e.resolution;
        this._prevTint !== this.tint && (this.dirty = !0), r.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), t.dirty && (this.updateGraphicsTint(t), t.dirty = !1), e.setBlendMode(t.blendMode);
        for (var s = 0; s < t.graphicsData.length; s++) {
          var u = t.graphicsData[s],
            h = u.shape,
            l = u._fillTint,
            c = u._lineTint;
          if (r.lineWidth = u.lineWidth, u.type === a.SHAPES.POLY) {
            r.beginPath(), this.renderPolygon(h.points, h.closed, r);
            for (var f = 0; f < u.holes.length; f++) this.renderPolygon(u.holes[f].points, !0, r);
            u.fill && (r.globalAlpha = u.fillAlpha * i, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke())
          } else if (u.type === a.SHAPES.RECT)(u.fillColor || 0 === u.fillColor) && (r.globalAlpha = u.fillAlpha * i, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fillRect(h.x, h.y, h.width, h.height)), u.lineWidth && (r.globalAlpha = u.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.strokeRect(h.x, h.y, h.width, h.height));
          else if (u.type === a.SHAPES.CIRC) r.beginPath(), r.arc(h.x, h.y, h.radius, 0, 2 * Math.PI), r.closePath(), u.fill && (r.globalAlpha = u.fillAlpha * i, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke());
          else if (u.type === a.SHAPES.ELIP) {
            var d = 2 * h.width,
              p = 2 * h.height,
              _ = h.x - d / 2,
              v = h.y - p / 2;
            r.beginPath();
            var y = .5522848,
              g = d / 2 * y,
              m = p / 2 * y,
              b = _ + d,
              x = v + p,
              T = _ + d / 2,
              w = v + p / 2;
            r.moveTo(_, w), r.bezierCurveTo(_, w - m, T - g, v, T, v), r.bezierCurveTo(T + g, v, b, w - m, b, w), r.bezierCurveTo(b, w + m, T + g, x, T, x), r.bezierCurveTo(T - g, x, _, w + m, _, w), r.closePath(), u.fill && (r.globalAlpha = u.fillAlpha * i, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke())
          } else if (u.type === a.SHAPES.RREC) {
            var E = h.x,
              O = h.y,
              P = h.width,
              S = h.height,
              M = h.radius,
              C = Math.min(P, S) / 2 | 0;
            M = M > C ? C : M, r.beginPath(), r.moveTo(E, O + M), r.lineTo(E, O + S - M), r.quadraticCurveTo(E, O + S, E + M, O + S), r.lineTo(E + P - M, O + S), r.quadraticCurveTo(E + P, O + S, E + P, O + S - M), r.lineTo(E + P, O + M), r.quadraticCurveTo(E + P, O, E + P - M, O), r.lineTo(E + M, O), r.quadraticCurveTo(E, O, E, O + M), r.closePath(), (u.fillColor || 0 === u.fillColor) && (r.globalAlpha = u.fillAlpha * i, r.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.fill()), u.lineWidth && (r.globalAlpha = u.lineAlpha * i, r.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), r.stroke())
          }
        }
      }, t.prototype.updateGraphicsTint = function(t) {
        t._prevTint = t.tint;
        for (var e = (t.tint >> 16 & 255) / 255, r = (t.tint >> 8 & 255) / 255, i = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; ++n) {
          var o = t.graphicsData[n],
            s = 0 | o.fillColor,
            a = 0 | o.lineColor;
          o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * i * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * i * 255
        }
      }, t.prototype.renderPolygon = function(t, e, r) {
        r.moveTo(t[0], t[1]);
        for (var i = 1; i < t.length / 2; ++i) r.lineTo(t[2 * i], t[2 * i + 1]);
        e && r.closePath()
      }, t.prototype.destroy = function() {
        this.renderer = null
      }, t
    }();
  e["default"] = u, s["default"].registerPlugin("graphics", u)
}, function(t, e) {
  "use strict";

  function r(t, e, r, i, n, o, s, a) {
    var u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : [],
      h = 20,
      l = 0,
      c = 0,
      f = 0,
      d = 0,
      p = 0;
    u.push(t, e);
    for (var _ = 1, v = 0; _ <= h; ++_) v = _ / h, l = 1 - v, c = l * l, f = c * l, d = v * v, p = d * v, u.push(f * t + 3 * c * v * r + 3 * l * d * n + p * s, f * e + 3 * c * v * i + 3 * l * d * o + p * a);
    return u
  }
  e.__esModule = !0, e["default"] = r
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(3),
    u = r(2),
    h = r(37),
    l = i(h),
    c = r(62),
    f = i(c),
    d = r(187),
    p = i(d),
    _ = r(188),
    v = i(_),
    y = r(190),
    g = i(y),
    m = r(191),
    b = i(m),
    x = r(192),
    T = i(x),
    w = r(189),
    E = i(w),
    O = function(t) {
      function e(r) {
        n(this, e);
        var i = o(this, t.call(this, r));
        return i.graphicsDataPool = [], i.primitiveShader = null, i.gl = r.gl, i.CONTEXT_UID = 0, i
      }
      return s(e, t), e.prototype.onContextChange = function() {
        this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new v["default"](this.gl)
      }, e.prototype.destroy = function() {
        l["default"].prototype.destroy.call(this);
        for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
        this.graphicsDataPool = null
      }, e.prototype.render = function(t) {
        var e = this.renderer,
          r = e.gl,
          i = void 0,
          n = t._webGL[this.CONTEXT_UID];
        n && t.dirty === n.dirty || (this.updateGraphics(t), n = t._webGL[this.CONTEXT_UID]);
        var o = this.primitiveShader;
        e.bindShader(o), e.state.setBlendMode(t.blendMode);
        for (var s = 0, u = n.data.length; s < u; s++) {
          i = n.data[s];
          var h = i.shader;
          e.bindShader(h), h.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), h.uniforms.tint = (0, a.hex2rgb)(t.tint), h.uniforms.alpha = t.worldAlpha, e.bindVao(i.vao), i.vao.draw(r.TRIANGLE_STRIP, i.indices.length)
        }
      }, e.prototype.updateGraphics = function(t) {
        var e = this.renderer.gl,
          r = t._webGL[this.CONTEXT_UID];
        if (r || (r = t._webGL[this.CONTEXT_UID] = {
            lastIndex: 0,
            data: [],
            gl: e,
            clearDirty: -1,
            dirty: -1
          }), r.dirty = t.dirty, t.clearDirty !== r.clearDirty) {
          r.clearDirty = t.clearDirty;
          for (var i = 0; i < r.data.length; i++) this.graphicsDataPool.push(r.data[i]);
          r.data.length = 0, r.lastIndex = 0
        }
        for (var n = void 0, o = r.lastIndex; o < t.graphicsData.length; o++) {
          var s = t.graphicsData[o];
          n = this.getWebGLData(r, 0), s.type === u.SHAPES.POLY && (0, g["default"])(s, n), s.type === u.SHAPES.RECT ? (0, b["default"])(s, n) : s.type === u.SHAPES.CIRC || s.type === u.SHAPES.ELIP ? (0, E["default"])(s, n) : s.type === u.SHAPES.RREC && (0, T["default"])(s, n), r.lastIndex++
        }
        this.renderer.bindVao(null);
        for (var a = 0; a < r.data.length; a++) n = r.data[a], n.dirty && n.upload()
      }, e.prototype.getWebGLData = function(t, e) {
        var r = t.data[t.data.length - 1];
        return (!r || r.points.length > 32e4) && (r = this.graphicsDataPool.pop() || new p["default"](this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), r.reset(e), t.data.push(r)), r.dirty = !0, r
      }, e
    }(l["default"]);
  e["default"] = O, f["default"].registerPlugin("graphics", O)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(6),
    s = i(o),
    a = function() {
      function t(e, r, i) {
        n(this, t), this.gl = e, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = s["default"].GLBuffer.createVertexBuffer(e), this.indexBuffer = s["default"].GLBuffer.createIndexBuffer(e), this.dirty = !0, this.glPoints = null, this.glIndices = null, this.shader = r, this.vao = new s["default"].VertexArrayObject(e, i).addIndex(this.indexBuffer).addAttribute(this.buffer, r.attributes.aVertexPosition, e.FLOAT, !1, 24, 0).addAttribute(this.buffer, r.attributes.aColor, e.FLOAT, !1, 24, 8)
      }
      return t.prototype.reset = function() {
        this.points.length = 0, this.indices.length = 0
      }, t.prototype.upload = function() {
        this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
      }, t.prototype.destroy = function() {
        this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
      }, t
    }();
  e["default"] = a
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(23),
    u = i(a),
    h = function(t) {
      function e(r) {
        return n(this, e), o(this, t.call(this, r, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n")))
      }
      return s(e, t), e
    }(u["default"]);
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    var r = t.shape,
      i = r.x,
      n = r.y,
      o = void 0,
      h = void 0;
    t.type === a.SHAPES.CIRC ? (o = r.radius, h = r.radius) : (o = r.width, h = r.height);
    var l = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(r.width + r.height)),
      c = 2 * Math.PI / l;
    if (t.fill) {
      var f = (0, u.hex2rgb)(t.fillColor),
        d = t.fillAlpha,
        p = f[0] * d,
        _ = f[1] * d,
        v = f[2] * d,
        y = e.points,
        g = e.indices,
        m = y.length / 6;
      g.push(m);
      for (var b = 0; b < l + 1; b++) y.push(i, n, p, _, v, d), y.push(i + Math.sin(c * b) * o, n + Math.cos(c * b) * h, p, _, v, d), g.push(m++, m++);
      g.push(m - 1)
    }
    if (t.lineWidth) {
      var x = t.points;
      t.points = [];
      for (var T = 0; T < l + 1; T++) t.points.push(i + Math.sin(c * T) * o, n + Math.cos(c * T) * h);
      (0, s["default"])(t, e), t.points = x
    }
  }
  e.__esModule = !0, e["default"] = n;
  var o = r(35),
    s = i(o),
    a = r(2),
    u = r(3)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    t.points = t.shape.points.slice();
    var r = t.points;
    if (t.fill && r.length >= 6) {
      for (var i = [], n = t.holes, o = 0; o < n.length; o++) {
        var u = n[o];
        i.push(r.length / 2), r = r.concat(u.points)
      }
      var l = e.points,
        c = e.indices,
        f = r.length / 2,
        d = (0, a.hex2rgb)(t.fillColor),
        p = t.fillAlpha,
        _ = d[0] * p,
        v = d[1] * p,
        y = d[2] * p,
        g = (0, h["default"])(r, i, 2);
      if (!g) return;
      for (var m = l.length / 6, b = 0; b < g.length; b += 3) c.push(g[b] + m), c.push(g[b] + m), c.push(g[b + 1] + m), c.push(g[b + 2] + m), c.push(g[b + 2] + m);
      for (var x = 0; x < f; x++) l.push(r[2 * x], r[2 * x + 1], _, v, y, p)
    }
    t.lineWidth > 0 && (0, s["default"])(t, e)
  }
  e.__esModule = !0, e["default"] = n;
  var o = r(35),
    s = i(o),
    a = r(3),
    u = r(81),
    h = i(u)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    var r = t.shape,
      i = r.x,
      n = r.y,
      o = r.width,
      u = r.height;
    if (t.fill) {
      var h = (0, a.hex2rgb)(t.fillColor),
        l = t.fillAlpha,
        c = h[0] * l,
        f = h[1] * l,
        d = h[2] * l,
        p = e.points,
        _ = e.indices,
        v = p.length / 6;
      p.push(i, n), p.push(c, f, d, l), p.push(i + o, n), p.push(c, f, d, l), p.push(i, n + u), p.push(c, f, d, l), p.push(i + o, n + u), p.push(c, f, d, l), _.push(v, v, v + 1, v + 2, v + 3, v + 3)
    }
    if (t.lineWidth) {
      var y = t.points;
      t.points = [i, n, i + o, n, i + o, n + u, i, n + u, i, n], (0, s["default"])(t, e), t.points = y
    }
  }
  e.__esModule = !0, e["default"] = n;
  var o = r(35),
    s = i(o),
    a = r(3)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    var r = t.shape,
      i = r.x,
      n = r.y,
      s = r.width,
      u = r.height,
      c = r.radius,
      f = [];
    if (f.push(i, n + c), o(i, n + u - c, i, n + u, i + c, n + u, f), o(i + s - c, n + u, i + s, n + u, i + s, n + u - c, f), o(i + s, n + c, i + s, n, i + s - c, n, f), o(i + c, n, i, n, i, n + c + 1e-10, f), t.fill) {
      for (var d = (0, l.hex2rgb)(t.fillColor), p = t.fillAlpha, _ = d[0] * p, v = d[1] * p, y = d[2] * p, g = e.points, m = e.indices, b = g.length / 6, x = (0, a["default"])(f, null, 2), T = 0, w = x.length; T < w; T += 3) m.push(x[T] + b), m.push(x[T] + b), m.push(x[T + 1] + b), m.push(x[T + 2] + b), m.push(x[T + 2] + b);
      for (var E = 0, O = f.length; E < O; E++) g.push(f[E], f[++E], _, v, y, p)
    }
    if (t.lineWidth) {
      var P = t.points;
      t.points = f, (0, h["default"])(t, e), t.points = P
    }
  }

  function o(t, e, r, i, n, o) {
    function s(t, e, r) {
      var i = e - t;
      return t + i * r
    }
    for (var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [], u = 20, h = a, l = 0, c = 0, f = 0, d = 0, p = 0, _ = 0, v = 0, y = 0; v <= u; ++v) y = v / u, l = s(t, r, y), c = s(e, i, y), f = s(r, n, y), d = s(i, o, y), p = s(l, f, y), _ = s(c, d, y), h.push(p, _);
    return h
  }
  e.__esModule = !0, e["default"] = n;
  var s = r(81),
    a = i(s),
    u = r(35),
    h = i(u),
    l = r(3)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(61),
    s = i(o),
    a = r(2),
    u = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        n(this, t), this.x = e, this.y = r, this.radius = i, this.type = a.SHAPES.CIRC
      }
      return t.prototype.clone = function() {
        return new t(this.x, this.y, this.radius)
      }, t.prototype.contains = function(t, e) {
        if (this.radius <= 0) return !1;
        var r = this.radius * this.radius,
          i = this.x - t,
          n = this.y - e;
        return i *= i, n *= n, i + n <= r
      }, t.prototype.getBounds = function() {
        return new s["default"](this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
      }, t
    }();
  e["default"] = u
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(61),
    s = i(o),
    a = r(2),
    u = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        n(this, t), this.x = e, this.y = r, this.width = i, this.height = o, this.type = a.SHAPES.ELIP
      }
      return t.prototype.clone = function() {
        return new t(this.x, this.y, this.width, this.height)
      }, t.prototype.contains = function(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var r = (t - this.x) / this.width,
          i = (e - this.y) / this.height;
        return r *= r, i *= i, r + i <= 1
      }, t.prototype.getBounds = function() {
        return new s["default"](this.x - this.width, this.y - this.height, this.width, this.height)
      }, t
    }();
  e["default"] = u
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(60),
    s = i(o),
    a = r(2),
    u = function() {
      function t() {
        for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
        if (n(this, t), Array.isArray(r[0]) && (r = r[0]), r[0] instanceof s["default"]) {
          for (var o = [], u = 0, h = r.length; u < h; u++) o.push(r[u].x, r[u].y);
          r = o
        }
        this.closed = !0, this.points = r, this.type = a.SHAPES.POLY
      }
      return t.prototype.clone = function() {
        return new t(this.points.slice())
      }, t.prototype.close = function() {
        var t = this.points;
        t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
      }, t.prototype.contains = function(t, e) {
        for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
          var s = this.points[2 * n],
            a = this.points[2 * n + 1],
            u = this.points[2 * o],
            h = this.points[2 * o + 1],
            l = a > e != h > e && t < (u - s) * ((e - a) / (h - a)) + s;
          l && (r = !r)
        }
        return r
      }, t
    }();
  e["default"] = u
}, function(t, e, r) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var n = r(2),
    o = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 20;
        i(this, t), this.x = e, this.y = r, this.width = o, this.height = s, this.radius = a, this.type = n.SHAPES.RREC
      }
      return t.prototype.clone = function() {
        return new t(this.x, this.y, this.width, this.height, this.radius)
      }, t.prototype.contains = function(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
          if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
          var r = t - (this.x + this.radius),
            i = e - (this.y + this.radius),
            n = this.radius * this.radius;
          if (r * r + i * i <= n) return !0;
          if (r = t - (this.x + this.width - this.radius), r * r + i * i <= n) return !0;
          if (i = e - (this.y + this.height - this.radius), r * r + i * i <= n) return !0;
          if (r = t - (this.x + this.radius), r * r + i * i <= n) return !0
        }
        return !1
      }, t
    }();
  e["default"] = o
}, function(t, e, r) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var n = r(2),
    o = function() {
      function t(e) {
        i(this, t), this.renderer = e
      }
      return t.prototype.pushMask = function(t) {
        var e = this.renderer;
        e.context.save();
        var r = t.alpha,
          i = t.transform.worldTransform,
          n = e.resolution;
        e.context.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n), t._texture || (this.renderGraphicsShape(t), e.context.clip()), t.worldAlpha = r
      }, t.prototype.renderGraphicsShape = function(t) {
        var e = this.renderer.context,
          r = t.graphicsData.length;
        if (0 !== r) {
          e.beginPath();
          for (var i = 0; i < r; i++) {
            var o = t.graphicsData[i],
              s = o.shape;
            if (o.type === n.SHAPES.POLY) {
              var a = s.points;
              e.moveTo(a[0], a[1]);
              for (var u = 1; u < a.length / 2; u++) e.lineTo(a[2 * u], a[2 * u + 1]);
              a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
            } else if (o.type === n.SHAPES.RECT) e.rect(s.x, s.y, s.width, s.height), e.closePath();
            else if (o.type === n.SHAPES.CIRC) e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
            else if (o.type === n.SHAPES.ELIP) {
              var h = 2 * s.width,
                l = 2 * s.height,
                c = s.x - h / 2,
                f = s.y - l / 2,
                d = .5522848,
                p = h / 2 * d,
                _ = l / 2 * d,
                v = c + h,
                y = f + l,
                g = c + h / 2,
                m = f + l / 2;
              e.moveTo(c, m), e.bezierCurveTo(c, m - _, g - p, f, g, f), e.bezierCurveTo(g + p, f, v, m - _, v, m), e.bezierCurveTo(v, m + _, g + p, y, g, y), e.bezierCurveTo(g - p, y, c, m + _, c, m), e.closePath()
            } else if (o.type === n.SHAPES.RREC) {
              var b = s.x,
                x = s.y,
                T = s.width,
                w = s.height,
                E = s.radius,
                O = Math.min(T, w) / 2 | 0;
              E = E > O ? O : E, e.moveTo(b, x + E), e.lineTo(b, x + w - E), e.quadraticCurveTo(b, x + w, b + E, x + w), e.lineTo(b + T - E, x + w), e.quadraticCurveTo(b + T, x + w, b + T, x + w - E), e.lineTo(b + T, x + E), e.quadraticCurveTo(b + T, x, b + T - E, x), e.lineTo(b + E, x), e.quadraticCurveTo(b, x, b, x + E), e.closePath()
            }
          }
        }
      }, t.prototype.popMask = function(t) {
        t.context.restore()
      }, t.prototype.destroy = function() {}, t
    }();
  e["default"] = o
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (0, a["default"])() ? (t[o.BLEND_MODES.NORMAL] = "source-over", t[o.BLEND_MODES.ADD] = "lighter", t[o.BLEND_MODES.MULTIPLY] = "multiply", t[o.BLEND_MODES.SCREEN] = "screen", t[o.BLEND_MODES.OVERLAY] = "overlay", t[o.BLEND_MODES.DARKEN] = "darken", t[o.BLEND_MODES.LIGHTEN] = "lighten", t[o.BLEND_MODES.COLOR_DODGE] = "color-dodge", t[o.BLEND_MODES.COLOR_BURN] = "color-burn", t[o.BLEND_MODES.HARD_LIGHT] = "hard-light", t[o.BLEND_MODES.SOFT_LIGHT] = "soft-light", t[o.BLEND_MODES.DIFFERENCE] = "difference", t[o.BLEND_MODES.EXCLUSION] = "exclusion", t[o.BLEND_MODES.HUE] = "hue", t[o.BLEND_MODES.SATURATION] = "saturate", t[o.BLEND_MODES.COLOR] = "color", t[o.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[o.BLEND_MODES.NORMAL] = "source-over", t[o.BLEND_MODES.ADD] = "lighter", t[o.BLEND_MODES.MULTIPLY] = "source-over", t[o.BLEND_MODES.SCREEN] = "source-over", t[o.BLEND_MODES.OVERLAY] = "source-over", t[o.BLEND_MODES.DARKEN] = "source-over", t[o.BLEND_MODES.LIGHTEN] = "source-over", t[o.BLEND_MODES.COLOR_DODGE] = "source-over", t[o.BLEND_MODES.COLOR_BURN] = "source-over", t[o.BLEND_MODES.HARD_LIGHT] = "source-over", t[o.BLEND_MODES.SOFT_LIGHT] = "source-over", t[o.BLEND_MODES.DIFFERENCE] = "source-over", t[o.BLEND_MODES.EXCLUSION] = "source-over", t[o.BLEND_MODES.HUE] = "source-over", t[o.BLEND_MODES.SATURATION] = "source-over", t[o.BLEND_MODES.COLOR] = "source-over", t[o.BLEND_MODES.LUMINOSITY] = "source-over"), t
  }
  e.__esModule = !0, e["default"] = n;
  var o = r(2),
    s = r(101),
    a = i(s)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(2),
    s = r(5),
    a = i(s),
    u = function() {
      function t(e) {
        n(this, t), this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = a["default"].GC_MAX_IDLE, this.checkCountMax = a["default"].GC_MAX_CHECK_COUNT, this.mode = a["default"].GC_MODE
      }
      return t.prototype.update = function() {
        this.count++, this.mode !== o.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
      }, t.prototype.run = function() {
        for (var t = this.renderer.textureManager, e = t._managedTextures, r = !1, i = 0; i < e.length; i++) {
          var n = e[i];
          !n._glRenderTargets && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[i] = null, r = !0)
        }
        if (r) {
          for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
          e.length = o
        }
      }, t.prototype.unload = function(t) {
        var e = this.renderer.textureManager;
        t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture, !0);
        for (var r = t.children.length - 1; r >= 0; r--) this.unload(t.children[r])
      }, t
    }();
  e["default"] = u
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(6),
    s = r(2),
    a = r(38),
    u = i(a),
    h = r(3),
    l = function() {
      function t(e) {
        n(this, t), this.renderer = e, this.gl = e.gl, this._managedTextures = []
      }
      return t.prototype.bindTexture = function() {}, t.prototype.getTexture = function() {}, t.prototype.updateTexture = function(t, e) {
        var r = this.gl,
          i = !!t._glRenderTargets;
        if (!t.hasLoaded) return null;
        var n = this.renderer.boundTextures;
        if (void 0 === e) {
          e = 0;
          for (var a = 0; a < n.length; ++a)
            if (n[a] === t) {
              e = a;
              break
            }
        }
        n[e] = t, r.activeTexture(r.TEXTURE0 + e);
        var h = t._glTextures[this.renderer.CONTEXT_UID];
        if (h) i ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : h.upload(t.source);
        else {
          if (i) {
            var l = new u["default"](this.gl, t.width, t.height, t.scaleMode, t.resolution);
            l.resize(t.width, t.height), t._glRenderTargets[this.renderer.CONTEXT_UID] = l, h = l.texture
          } else h = new o.GLTexture(this.gl, null, null, null, null), h.bind(e), h.premultiplyAlpha = !0, h.upload(t.source);
          t._glTextures[this.renderer.CONTEXT_UID] = h, t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && h.enableMipmap(), t.wrapMode === s.WRAP_MODES.CLAMP ? h.enableWrapClamp() : t.wrapMode === s.WRAP_MODES.REPEAT ? h.enableWrapRepeat() : h.enableWrapMirrorRepeat()) : h.enableWrapClamp(), t.scaleMode === s.SCALE_MODES.NEAREST ? h.enableNearestScaling() : h.enableLinearScaling()
        }
        return h
      }, t.prototype.destroyTexture = function(t, e) {
        if (t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.renderer.CONTEXT_UID] && (this.renderer.unbindTexture(t), t._glTextures[this.renderer.CONTEXT_UID].destroy(), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.renderer.CONTEXT_UID], !e)) {
          var r = this._managedTextures.indexOf(t);
          r !== -1 && (0, h.removeItems)(this._managedTextures, r, 1)
        }
      }, t.prototype.removeAll = function() {
        for (var t = 0; t < this._managedTextures.length; ++t) {
          var e = this._managedTextures[t];
          e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
        }
      }, t.prototype.destroy = function() {
        for (var t = 0; t < this._managedTextures.length; ++t) {
          var e = this._managedTextures[t];
          this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this)
        }
        this._managedTextures = null
      }, t
    }();
  e["default"] = l
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(208),
    s = i(o),
    a = 0,
    u = 1,
    h = 2,
    l = 3,
    c = 4,
    f = function() {
      function t(e) {
        n(this, t), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = e, this.maxAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.attribState = {
          tempAttribState: new Array(this.maxAttribs),
          attribState: new Array(this.maxAttribs)
        }, this.blendModes = (0, s["default"])(e), this.nativeVaoExtension = e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object")
      }
      return t.prototype.push = function() {
        var t = this.stack[++this.stackIndex];
        t || (t = this.stack[this.stackIndex] = new Uint8Array(16));
        for (var e = 0; e < this.activeState.length; e++) this.activeState[e] = t[e]
      }, t.prototype.pop = function() {
        var t = this.stack[--this.stackIndex];
        this.setState(t)
      }, t.prototype.setState = function(t) {
        this.setBlend(t[a]), this.setDepthTest(t[u]), this.setFrontFace(t[h]), this.setCullFace(t[l]), this.setBlendMode(t[c])
      }, t.prototype.setBlend = function(t) {
        t = t ? 1 : 0, this.activeState[a] !== t && (this.activeState[a] = t, this.gl[t ? "enable" : "disable"](this.gl.BLEND))
      }, t.prototype.setBlendMode = function(t) {
        t !== this.activeState[c] && (this.activeState[c] = t, this.gl.blendFunc(this.blendModes[t][0], this.blendModes[t][1]))
      }, t.prototype.setDepthTest = function(t) {
        t = t ? 1 : 0, this.activeState[u] !== t && (this.activeState[u] = t, this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST))
      }, t.prototype.setCullFace = function(t) {
        t = t ? 1 : 0, this.activeState[l] !== t && (this.activeState[l] = t, this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE))
      }, t.prototype.setFrontFace = function(t) {
        t = t ? 1 : 0, this.activeState[h] !== t && (this.activeState[h] = t, this.gl.frontFace(this.gl[t ? "CW" : "CCW"]))
      }, t.prototype.resetAttributes = function() {
        for (var t = 0; t < this.attribState.tempAttribState.length; t++) this.attribState.tempAttribState[t] = 0;
        for (var e = 0; e < this.attribState.attribState.length; e++) this.attribState.attribState[e] = 0;
        for (var r = 1; r < this.maxAttribs; r++) this.gl.disableVertexAttribArray(r)
      }, t.prototype.resetToDefault = function() {
        this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
        for (var t = 0; t < this.activeState.length; ++t) this.activeState[t] = 32;
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
      }, t
    }();
  e["default"] = f
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e, r) {
    var i = o(t, r),
      n = o(e, r);
    return Object.assign(i, n)
  }

  function o(t) {
    for (var e = new RegExp("^(projectionMatrix|uSampler|filterArea)$"), r = {}, i = void 0, n = t.replace(/\s+/g, " ").split(/\s*;\s*/), o = 0; o < n.length; o++) {
      var s = n[o].trim();
      if (s.indexOf("uniform") > -1) {
        var a = s.split(" "),
          h = a[1],
          l = a[2],
          c = 1;
        l.indexOf("[") > -1 && (i = l.split(/\[|]/), l = i[0], c *= Number(i[1])), l.match(e) || (r[l] = {
          value: u(h, c),
          name: l,
          type: h
        })
      }
    }
    return r
  }
  e.__esModule = !0, e["default"] = n;
  var s = r(6),
    a = i(s),
    u = a["default"].shader.defaultValue
}, function(t, e, r) {
  "use strict";

  function i(t, e, r) {
    var i = t.identity();
    return i.translate(e.x / r.width, e.y / r.height), i.scale(r.width, r.height), i
  }

  function n(t, e, r) {
    var i = t.identity();
    i.translate(e.x / r.width, e.y / r.height);
    var n = r.width / e.width,
      o = r.height / e.height;
    return i.scale(n, o), i
  }

  function o(t, e, r, i) {
    var n = i.worldTransform.copy(s.Matrix.TEMP_MATRIX),
      o = i._texture.baseTexture,
      a = t.identity(),
      u = r.height / r.width;
    a.translate(e.x / r.width, e.y / r.height), a.scale(1, u);
    var h = r.width / o.width,
      l = r.height / o.height;
    return n.tx /= o.width * h, n.ty /= o.width * h, n.invert(), a.prepend(n), a.scale(1, 1 / u), a.scale(h, l), a.translate(i.anchor.x, i.anchor.y), a
  }
  e.__esModule = !0, e.calculateScreenSpaceMatrix = i, e.calculateNormalizedScreenSpaceMatrix = n, e.calculateSpriteMatrix = o;
  var s = r(4)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function a(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var u = r(24),
    h = n(u),
    l = r(38),
    c = n(l),
    f = r(104),
    d = n(f),
    p = r(4),
    _ = r(23),
    v = n(_),
    y = r(203),
    g = i(y),
    m = r(41),
    b = n(m),
    x = function w() {
      a(this, w), this.renderTarget = null, this.sourceFrame = new p.Rectangle, this.destinationFrame = new p.Rectangle, this.filters = [], this.target = null, this.resolution = 1
    },
    T = function(t) {
      function e(r) {
        a(this, e);
        var i = o(this, t.call(this, r));
        return i.gl = i.renderer.gl, i.quad = new d["default"](i.gl, r.state.attribState), i.shaderCache = {}, i.pool = {}, i.filterData = null, i
      }
      return s(e, t), e.prototype.pushFilter = function(t, e) {
        var r = this.renderer,
          i = this.filterData;
        if (!i) {
          i = this.renderer._activeRenderTarget.filterStack;
          var n = new x;
          n.sourceFrame = n.destinationFrame = this.renderer._activeRenderTarget.size, n.renderTarget = r._activeRenderTarget, this.renderer._activeRenderTarget.filterData = i = {
            index: 0,
            stack: [n]
          }, this.filterData = i
        }
        var o = i.stack[++i.index];
        o || (o = i.stack[i.index] = new x);
        var s = e[0].resolution,
          a = 0 | e[0].padding,
          u = t.filterArea || t.getBounds(!0),
          h = o.sourceFrame,
          l = o.destinationFrame;
        h.x = (u.x * s | 0) / s, h.y = (u.y * s | 0) / s, h.width = (u.width * s | 0) / s, h.height = (u.height * s | 0) / s, i.stack[0].renderTarget.transform || h.fit(i.stack[0].destinationFrame), h.pad(a), l.width = h.width, l.height = h.height;
        var c = this.getPotRenderTarget(r.gl, h.width, h.height, s);
        o.target = t, o.filters = e, o.resolution = s, o.renderTarget = c, c.setFrame(l, h), r.bindRenderTarget(c), c.clear()
      }, e.prototype.popFilter = function() {
        var t = this.filterData,
          e = t.stack[t.index - 1],
          r = t.stack[t.index];
        this.quad.map(r.renderTarget.size, r.sourceFrame).upload();
        var i = r.filters;
        if (1 === i.length) i[0].apply(this, r.renderTarget, e.renderTarget, !1), this.freePotRenderTarget(r.renderTarget);
        else {
          var n = r.renderTarget,
            o = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, r.resolution);
          o.setFrame(r.destinationFrame, r.sourceFrame), o.clear();
          var s = 0;
          for (s = 0; s < i.length - 1; ++s) {
            i[s].apply(this, n, o, !0);
            var a = n;
            n = o, o = a
          }
          i[s].apply(this, n, e.renderTarget, !0), this.freePotRenderTarget(n), this.freePotRenderTarget(o)
        }
        t.index--, 0 === t.index && (this.filterData = null)
      }, e.prototype.applyFilter = function(t, e, r, i) {
        var n = this.renderer,
          o = n.gl,
          s = t.glShaders[n.CONTEXT_UID];
        s || (t.glShaderKey ? (s = this.shaderCache[t.glShaderKey], s || (s = new v["default"](this.gl, t.vertexSrc, t.fragmentSrc), t.glShaders[n.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = s)) : s = t.glShaders[n.CONTEXT_UID] = new v["default"](this.gl, t.vertexSrc, t.fragmentSrc), n.bindVao(null), this.quad.initVao(s)), n.bindVao(this.quad.vao), n.bindRenderTarget(r), i && (o.disable(o.SCISSOR_TEST), n.clear(), o.enable(o.SCISSOR_TEST)), r === n.maskManager.scissorRenderTarget && n.maskManager.pushScissorMask(null, n.maskManager.scissorData), n.bindShader(s), this.syncUniforms(s, t), n.state.setBlendMode(t.blendMode);
        var a = this.renderer.boundTextures[0];
        o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, e.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), o.bindTexture(o.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture)
      }, e.prototype.syncUniforms = function(t, e) {
        var r = e.uniformData,
          i = e.uniforms,
          n = 1,
          o = void 0;
        if (t.uniforms.data.filterArea) {
          o = this.filterData.stack[this.filterData.index];
          var s = t.uniforms.filterArea;
          s[0] = o.renderTarget.size.width, s[1] = o.renderTarget.size.height, s[2] = o.sourceFrame.x, s[3] = o.sourceFrame.y, t.uniforms.filterArea = s
        }
        if (t.uniforms.data.filterClamp) {
          o = this.filterData.stack[this.filterData.index];
          var a = t.uniforms.filterClamp;
          a[0] = 0, a[1] = 0, a[2] = (o.sourceFrame.width - 1) / o.renderTarget.size.width, a[3] = (o.sourceFrame.height - 1) / o.renderTarget.size.height, t.uniforms.filterClamp = a
        }
        for (var u in r)
          if ("sampler2D" === r[u].type && 0 !== i[u]) {
            if (i[u].baseTexture) t.uniforms[u] = this.renderer.bindTexture(i[u].baseTexture, n);
            else {
              t.uniforms[u] = n;
              var h = this.renderer.gl;
              this.renderer.boundTextures[n] = this.renderer.emptyTextures[n], h.activeTexture(h.TEXTURE0 + n), i[u].texture.bind()
            }
            n++
          } else if ("mat3" === r[u].type) void 0 !== i[u].a ? t.uniforms[u] = i[u].toArray(!0) : t.uniforms[u] = i[u];
        else if ("vec2" === r[u].type)
          if (void 0 !== i[u].x) {
            var l = t.uniforms[u] || new Float32Array(2);
            l[0] = i[u].x, l[1] = i[u].y, t.uniforms[u] = l
          } else t.uniforms[u] = i[u];
        else "float" === r[u].type ? t.uniforms.data[u].value !== r[u] && (t.uniforms[u] = i[u]) : t.uniforms[u] = i[u];
      }, e.prototype.getRenderTarget = function(t, e) {
        var r = this.filterData.stack[this.filterData.index],
          i = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, e || r.resolution);
        return i.setFrame(r.destinationFrame, r.sourceFrame), i
      }, e.prototype.returnRenderTarget = function(t) {
        this.freePotRenderTarget(t)
      }, e.prototype.calculateScreenSpaceMatrix = function(t) {
        var e = this.filterData.stack[this.filterData.index];
        return g.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
      }, e.prototype.calculateNormalizedScreenSpaceMatrix = function(t) {
        var e = this.filterData.stack[this.filterData.index];
        return g.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
      }, e.prototype.calculateSpriteMatrix = function(t, e) {
        var r = this.filterData.stack[this.filterData.index];
        return g.calculateSpriteMatrix(t, r.sourceFrame, r.renderTarget.size, e)
      }, e.prototype.destroy = function() {
        this.shaderCache = [], this.emptyPool()
      }, e.prototype.getPotRenderTarget = function(t, e, r, i) {
        e = b["default"].nextPow2(e * i), r = b["default"].nextPow2(r * i);
        var n = (65535 & e) << 16 | 65535 & r;
        this.pool[n] || (this.pool[n] = []);
        var o = this.pool[n].pop();
        if (!o) {
          var s = this.renderer.boundTextures[0];
          t.activeTexture(t.TEXTURE0), o = new c["default"](t, e, r, null, 1), t.bindTexture(t.TEXTURE_2D, s._glTextures[this.renderer.CONTEXT_UID].texture)
        }
        return o.resolution = i, o.defaultFrame.width = o.size.width = e / i, o.defaultFrame.height = o.size.height = r / i, o
      }, e.prototype.emptyPool = function() {
        for (var t in this.pool) {
          var e = this.pool[t];
          if (e)
            for (var r = 0; r < e.length; r++) e[r].destroy(!0)
        }
        this.pool = {}
      }, e.prototype.freePotRenderTarget = function(t) {
        var e = t.size.width * t.resolution,
          r = t.size.height * t.resolution,
          i = (65535 & e) << 16 | 65535 & r;
        this.pool[i].push(t)
      }, e
    }(h["default"]);
  e["default"] = T
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(24),
    u = i(a),
    h = r(103),
    l = i(h),
    c = function(t) {
      function e(r) {
        n(this, e);
        var i = o(this, t.call(this, r));
        return i.scissor = !1, i.scissorData = null, i.scissorRenderTarget = null, i.enableScissor = !0, i.alphaMaskPool = [], i.alphaMaskIndex = 0, i
      }
      return s(e, t), e.prototype.pushMask = function(t, e) {
        if (e.texture) this.pushSpriteMask(t, e);
        else if (this.enableScissor && !this.scissor && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
          var r = e.worldTransform,
            i = Math.atan2(r.b, r.a);
          i = Math.round(i * (180 / Math.PI)), i % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
        } else this.pushStencilMask(e)
      }, e.prototype.popMask = function(t, e) {
        e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
      }, e.prototype.pushSpriteMask = function(t, e) {
        var r = this.alphaMaskPool[this.alphaMaskIndex];
        r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new l["default"](e)]), r[0].resolution = this.renderer.resolution, r[0].maskSprite = e, t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, r), this.alphaMaskIndex++
      }, e.prototype.popSpriteMask = function() {
        this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
      }, e.prototype.pushStencilMask = function(t) {
        this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t)
      }, e.prototype.popStencilMask = function() {
        this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
      }, e.prototype.pushScissorMask = function(t, e) {
        e.renderable = !0;
        var r = this.renderer._activeRenderTarget,
          i = e.getBounds();
        i.fit(r.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
        var n = this.renderer.resolution;
        this.renderer.gl.scissor(i.x * n, (r.root ? r.size.height - i.y - i.height : i.y) * n, i.width * n, i.height * n), this.scissorRenderTarget = r, this.scissorData = e, this.scissor = !0
      }, e.prototype.popScissorMask = function() {
        this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
        var t = this.renderer.gl;
        t.disable(t.SCISSOR_TEST)
      }, e
    }(u["default"]);
  e["default"] = c
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(24),
    u = i(a),
    h = function(t) {
      function e(r) {
        n(this, e);
        var i = o(this, t.call(this, r));
        return i.stencilMaskStack = null, i
      }
      return s(e, t), e.prototype.setMaskStack = function(t) {
        this.stencilMaskStack = t;
        var e = this.renderer.gl;
        0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
      }, e.prototype.pushStencil = function(t) {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
        var e = this.renderer.gl,
          r = this.stencilMaskStack;
        0 === r.length && (e.enable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.stencilFunc(e.ALWAYS, 1, 1)), r.push(t), e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, r.length), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
      }, e.prototype.popStencil = function() {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
        var t = this.renderer.gl,
          e = this.stencilMaskStack,
          r = e.pop();
        0 === e.length ? t.disable(t.STENCIL_TEST) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderer.plugins.graphics.render(r), t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.NOTEQUAL, 0, e.length), t.stencilOp(t.KEEP, t.KEEP, t.KEEP))
      }, e.prototype.destroy = function() {
        u["default"].prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
      }, e
    }(u["default"]);
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    var r = !e;
    if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    if (r) {
      var i = document.createElement("canvas");
      i.width = 1, i.height = 1, e = a["default"].createContext(i)
    }
    for (var n = e.createShader(e.FRAGMENT_SHADER);;) {
      var s = u.replace(/%forloop%/gi, o(t));
      if (e.shaderSource(n, s), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS)) break;
      t = t / 2 | 0
    }
    return r && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext(), t
  }

  function o(t) {
    for (var e = "", r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
    return e
  }
  e.__esModule = !0, e["default"] = n;
  var s = r(6),
    a = i(s),
    u = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n")
}, function(t, e, r) {
  "use strict";

  function i(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return e[n.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA], e[n.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR], e[n.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e
  }
  e.__esModule = !0, e["default"] = i;
  var n = r(2)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e[n.DRAW_MODES.POINTS] = t.POINTS, e[n.DRAW_MODES.LINES] = t.LINES, e[n.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, e[n.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[n.DRAW_MODES.TRIANGLES] = t.TRIANGLES, e[n.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[n.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN, e
  }
  e.__esModule = !0, e["default"] = i;
  var n = r(2)
}, function(t, e) {
  "use strict";

  function r(t) {
    var e = t.getContextAttributes();
    e.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
  }
  e.__esModule = !0, e["default"] = r
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(36),
    s = i(o),
    a = r(2),
    u = r(4),
    h = r(64),
    l = i(h),
    c = new u.Matrix,
    f = function() {
      function t(e) {
        n(this, t), this.renderer = e
      }
      return t.prototype.render = function(t) {
        var e = t._texture,
          r = this.renderer,
          i = e._frame.width,
          n = e._frame.height,
          o = t.transform.worldTransform,
          s = 0,
          h = 0;
        if (!(e.orig.width <= 0 || e.orig.height <= 0) && e.baseTexture.source && (r.setBlendMode(t.blendMode), e.valid)) {
          r.context.globalAlpha = t.worldAlpha;
          var f = e.baseTexture.scaleMode === a.SCALE_MODES.LINEAR;
          r.smoothProperty && r.context[r.smoothProperty] !== f && (r.context[r.smoothProperty] = f), e.trim ? (s = e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width, h = e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height) : (s = (.5 - t.anchor.x) * e.orig.width, h = (.5 - t.anchor.y) * e.orig.height), e.rotate && (o.copy(c), o = c, u.GroupD8.matrixAppendRotationInv(o, e.rotate, s, h), s = 0, h = 0), s -= i / 2, h -= n / 2, r.roundPixels ? (r.context.setTransform(o.a, o.b, o.c, o.d, o.tx * r.resolution | 0, o.ty * r.resolution | 0), s = 0 | s, h = 0 | h) : r.context.setTransform(o.a, o.b, o.c, o.d, o.tx * r.resolution, o.ty * r.resolution);
          var d = e.baseTexture.resolution;
          16777215 !== t.tint ? (t.cachedTint !== t.tint && (t.cachedTint = t.tint, t.tintedTexture = l["default"].getTintedTexture(t, t.tint)), r.context.drawImage(t.tintedTexture, 0, 0, i * d, n * d, s * r.resolution, h * r.resolution, i * r.resolution, n * r.resolution)) : r.context.drawImage(e.baseTexture.source, e._frame.x * d, e._frame.y * d, i * d, n * d, s * r.resolution, h * r.resolution, i * r.resolution, n * r.resolution)
        }
      }, t.prototype.destroy = function() {
        this.renderer = null
      }, t
    }();
  e["default"] = f, s["default"].registerPlugin("sprite", f)
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
    function t(e) {
      r(this, t), this.vertices = new ArrayBuffer(e), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
    }
    return t.prototype.destroy = function() {
      this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
    }, t
  }();
  e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(37),
    u = i(a),
    h = r(62),
    l = i(h),
    c = r(66),
    f = i(c),
    d = r(214),
    p = i(d),
    _ = r(207),
    v = i(_),
    y = r(212),
    g = i(y),
    m = r(5),
    b = i(m),
    x = r(6),
    T = i(x),
    w = r(41),
    E = i(w),
    O = 0,
    P = 0,
    S = function(t) {
      function e(r) {
        n(this, e);
        var i = o(this, t.call(this, r));
        i.vertSize = 5, i.vertByteSize = 4 * i.vertSize, i.size = b["default"].SPRITE_BATCH_SIZE, i.buffers = [];
        for (var s = 1; s <= E["default"].nextPow2(i.size); s *= 2) i.buffers.push(new g["default"](4 * s * i.vertByteSize));
        i.indices = (0, f["default"])(i.size), i.shader = null, i.currentIndex = 0, O = 0, i.groups = [];
        for (var a = 0; a < i.size; a++) i.groups[a] = {
          textures: [],
          textureCount: 0,
          ids: [],
          size: 0,
          start: 0,
          blend: 0
        };
        return i.sprites = [], i.vertexBuffers = [], i.vaos = [], i.vaoMax = 2, i.vertexCount = 0, i.renderer.on("prerender", i.onPrerender, i), i
      }
      return s(e, t), e.prototype.onContextChange = function() {
        var t = this.renderer.gl;
        this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), b["default"].SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = (0, v["default"])(this.MAX_TEXTURES, t);
        var e = this.shader = (0, p["default"])(t, this.MAX_TEXTURES);
        this.indexBuffer = T["default"].GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.renderer.bindVao(null);
        for (var r = 0; r < this.vaoMax; r++) this.vertexBuffers[r] = T["default"].GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW), this.vaos[r] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[r], e.attributes.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[r], e.attributes.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[r], e.attributes.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[r], e.attributes.aTextureId, t.FLOAT, !1, this.vertByteSize, 16);
        this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES)
      }, e.prototype.onPrerender = function() {
        this.vertexCount = 0
      }, e.prototype.render = function(t) {
        this.currentIndex >= this.size && this.flush(), t._texture._uvs && (this.sprites[this.currentIndex++] = t)
      }, e.prototype.flush = function() {
        if (0 !== this.currentIndex) {
          var t = this.renderer.gl,
            e = this.MAX_TEXTURES,
            r = E["default"].nextPow2(this.currentIndex),
            i = E["default"].log2(r),
            n = this.buffers[i],
            o = this.sprites,
            s = this.groups,
            a = n.float32View,
            u = n.uint32View,
            h = this.boundTextures,
            l = this.renderer.boundTextures,
            c = this.renderer.textureGC.count,
            f = 0,
            d = void 0,
            p = void 0,
            _ = 1,
            v = 0,
            y = s[0],
            g = void 0,
            m = void 0,
            x = o[0].blendMode;
          y.textureCount = 0, y.start = 0, y.blend = x, O++;
          var w = void 0;
          for (w = 0; w < e; ++w) h[w] = l[w], h[w]._virtalBoundId = w;
          for (w = 0; w < this.currentIndex; ++w) {
            var S = o[w];
            if (d = S._texture.baseTexture, x !== S.blendMode && (x = S.blendMode, p = null, v = e, O++), p !== d && (p = d, d._enabled !== O)) {
              if (v === e && (O++, y.size = w - y.start, v = 0, y = s[_++], y.blend = x, y.textureCount = 0, y.start = w), d.touched = c, d._virtalBoundId === -1)
                for (var M = 0; M < e; ++M) {
                  var C = (M + P) % e,
                    R = h[C];
                  if (R._enabled !== O) {
                    P++, R._virtalBoundId = -1, d._virtalBoundId = C, h[C] = d;
                    break
                  }
                }
              d._enabled = O, y.textureCount++, y.ids[v] = d._virtalBoundId, y.textures[v++] = d
            }
            if (g = S.vertexData, m = S._texture._uvs.uvsUint32, this.renderer.roundPixels) {
              var A = this.renderer.resolution;
              a[f] = (g[0] * A | 0) / A, a[f + 1] = (g[1] * A | 0) / A, a[f + 5] = (g[2] * A | 0) / A, a[f + 6] = (g[3] * A | 0) / A, a[f + 10] = (g[4] * A | 0) / A, a[f + 11] = (g[5] * A | 0) / A, a[f + 15] = (g[6] * A | 0) / A, a[f + 16] = (g[7] * A | 0) / A
            } else a[f] = g[0], a[f + 1] = g[1], a[f + 5] = g[2], a[f + 6] = g[3], a[f + 10] = g[4], a[f + 11] = g[5], a[f + 15] = g[6], a[f + 16] = g[7];
            u[f + 2] = m[0], u[f + 7] = m[1], u[f + 12] = m[2], u[f + 17] = m[3], u[f + 3] = u[f + 8] = u[f + 13] = u[f + 18] = S._tintRGB + (255 * Math.min(S.worldAlpha, 1) << 24), a[f + 4] = a[f + 9] = a[f + 14] = a[f + 19] = d._virtalBoundId, f += 20
          }
          for (y.size = w - y.start, b["default"].CAN_UPLOAD_SAME_BUFFER ? this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !0) : (this.vaoMax <= this.vertexCount && (this.vaoMax++, this.vertexBuffers[this.vertexCount] = T["default"].GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW), this.vaos[this.vertexCount] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount], this.shader.attributes.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[this.vertexCount], this.shader.attributes.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[this.vertexCount], this.shader.attributes.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[this.vertexCount], this.shader.attributes.aTextureId, t.FLOAT, !1, this.vertByteSize, 16)), this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !1), this.vertexCount++), w = 0; w < e; ++w) l[w]._virtalBoundId = -1;
          for (w = 0; w < _; ++w) {
            for (var D = s[w], I = D.textureCount, L = 0; L < I; L++) p = D.textures[L], l[D.ids[L]] !== p && this.renderer.bindTexture(p, D.ids[L], !0), p._virtalBoundId = -1;
            this.renderer.state.setBlendMode(D.blend), t.drawElements(t.TRIANGLES, 6 * D.size, t.UNSIGNED_SHORT, 6 * D.start * 2)
          }
          this.currentIndex = 0
        }
      }, e.prototype.start = function() {
        this.renderer.bindShader(this.shader), b["default"].CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].bind())
      }, e.prototype.stop = function() {
        this.flush()
      }, e.prototype.destroy = function() {
        for (var e = 0; e < this.vaoMax; e++) this.vertexBuffers[e] && this.vertexBuffers[e].destroy(), this.vaos[e] && this.vaos[e].destroy();
        this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null;
        for (var r = 0; r < this.buffers.length; ++r) this.buffers[r].destroy()
      }, e
    }(u["default"]);
  e["default"] = S, l["default"].registerPlugin("sprite", S)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    var r = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
      i = u;
    i = i.replace(/%count%/gi, e), i = i.replace(/%forloop%/gi, o(e));
    for (var n = new a["default"](t, r, i), s = [], h = 0; h < e; h++) s[h] = h;
    return n.bind(), n.uniforms.uSamplers = s, n
  }

  function o(t) {
    var e = "";
    e += "\n", e += "\n";
    for (var r = 0; r < t; r++) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(textureId == " + r + ".0)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
    return e += "\n", e += "\n"
  }
  e.__esModule = !0, e["default"] = n;
  var s = r(23),
    a = i(s),
    u = (r(7), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n"))
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(63),
    h = i(u),
    l = r(26),
    c = i(l),
    f = r(4),
    d = r(3),
    p = r(2),
    _ = r(5),
    v = i(_),
    y = r(105),
    g = i(y),
    m = {
      texture: !0,
      children: !1,
      baseTexture: !0
    },
    b = function(t) {
      function e(r, i, s) {
        n(this, e), s = s || document.createElement("canvas"), s.width = 3, s.height = 3;
        var a = c["default"].fromCanvas(s);
        a.orig = new f.Rectangle, a.trim = new f.Rectangle;
        var u = o(this, t.call(this, a));
        return u.canvas = s, u.context = u.canvas.getContext("2d"), u.resolution = v["default"].RESOLUTION, u._text = null, u._style = null, u._styleListener = null, u._font = "", u.text = r, u.style = i, u.localStyleID = -1, u
      }
      return s(e, t), e.prototype.updateText = function(t) {
        var r = this._style;
        if (this.localStyleID !== r.styleID && (this.dirty = !0, this.localStyleID = r.styleID), this.dirty || !t) {
          this._font = e.getFontStyle(r), this.context.font = this._font;
          for (var i = r.wordWrap ? this.wordWrap(this._text) : this._text, n = i.split(/(?:\r\n|\r|\n)/), o = new Array(n.length), s = 0, a = e.calculateFontProperties(this._font), u = 0; u < n.length; u++) {
            var h = this.context.measureText(n[u]).width + (n[u].length - 1) * r.letterSpacing;
            o[u] = h, s = Math.max(s, h)
          }
          var l = s + r.strokeThickness;
          r.dropShadow && (l += r.dropShadowDistance), l += 2 * r.padding, this.canvas.width = Math.ceil((l + this.context.lineWidth) * this.resolution);
          var c = this.style.lineHeight || a.fontSize + r.strokeThickness,
            f = Math.max(c, a.fontSize + r.strokeThickness) + (n.length - 1) * c;
          r.dropShadow && (f += r.dropShadowDistance), this.canvas.height = Math.ceil((f + 2 * this._style.padding) * this.resolution), this.context.scale(this.resolution, this.resolution), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this._font, this.context.strokeStyle = r.stroke, this.context.lineWidth = r.strokeThickness, this.context.textBaseline = r.textBaseline, this.context.lineJoin = r.lineJoin, this.context.miterLimit = r.miterLimit;
          var d = void 0,
            p = void 0;
          if (r.dropShadow) {
            r.dropShadowBlur > 0 ? (this.context.shadowColor = r.dropShadowColor, this.context.shadowBlur = r.dropShadowBlur) : this.context.fillStyle = r.dropShadowColor;
            for (var _ = Math.cos(r.dropShadowAngle) * r.dropShadowDistance, v = Math.sin(r.dropShadowAngle) * r.dropShadowDistance, y = 0; y < n.length; y++) d = r.strokeThickness / 2, p = r.strokeThickness / 2 + y * c + a.ascent, "right" === r.align ? d += s - o[y] : "center" === r.align && (d += (s - o[y]) / 2), r.fill && (this.drawLetterSpacing(n[y], d + _ + r.padding, p + v + r.padding), r.stroke && r.strokeThickness && (this.context.strokeStyle = r.dropShadowColor, this.drawLetterSpacing(n[y], d + _ + r.padding, p + v + r.padding, !0), this.context.strokeStyle = r.stroke))
          }
          this.context.fillStyle = this._generateFillStyle(r, n);
          for (var g = 0; g < n.length; g++) d = r.strokeThickness / 2, p = r.strokeThickness / 2 + g * c + a.ascent, "right" === r.align ? d += s - o[g] : "center" === r.align && (d += (s - o[g]) / 2), r.stroke && r.strokeThickness && this.drawLetterSpacing(n[g], d + r.padding, p + r.padding, !0), r.fill && this.drawLetterSpacing(n[g], d + r.padding, p + r.padding);
          this.updateTexture()
        }
      }, e.prototype.drawLetterSpacing = function(t, e, r) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          n = this._style,
          o = n.letterSpacing;
        if (0 === o) return void(i ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r));
        for (var s = String.prototype.split.call(t, ""), a = e, u = 0, h = ""; u < t.length;) h = s[u++], i ? this.context.strokeText(h, a, r) : this.context.fillText(h, a, r), a += this.context.measureText(h).width + o
      }, e.prototype.updateTexture = function() {
        var t = this._texture,
          e = this._style;
        t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.realWidth = this.canvas.width, t.baseTexture.realHeight = this.canvas.height, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.trim.width = t._frame.width = this.canvas.width / this.resolution, t.trim.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = -e.padding, t.trim.y = -e.padding, t.orig.width = t._frame.width - 2 * e.padding, t.orig.height = t._frame.height - 2 * e.padding, this._onTextureUpdate(), t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
      }, e.prototype.renderWebGL = function(e) {
        this.resolution !== e.resolution && (this.resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype.renderWebGL.call(this, e)
      }, e.prototype._renderCanvas = function(e) {
        this.resolution !== e.resolution && (this.resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._renderCanvas.call(this, e)
      }, e.prototype.wordWrap = function(t) {
        for (var e = "", r = t.split("\n"), i = this._style.wordWrapWidth, n = 0; n < r.length; n++) {
          for (var o = i, s = r[n].split(" "), a = 0; a < s.length; a++) {
            var u = this.context.measureText(s[a]).width;
            if (this._style.breakWords && u > i)
              for (var h = s[a].split(""), l = 0; l < h.length; l++) {
                var c = this.context.measureText(h[l]).width;
                c > o ? (e += "\n" + h[l], o = i - c) : (0 === l && (e += " "), e += h[l], o -= c)
              } else {
                var f = u + this.context.measureText(" ").width;
                0 === a || f > o ? (a > 0 && (e += "\n"), e += s[a], o = i - u) : (o -= f, e += " " + s[a])
              }
          }
          n < r.length - 1 && (e += "\n")
        }
        return e
      }, e.prototype._calculateBounds = function() {
        this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
      }, e.prototype._onStyleChange = function() {
        this.dirty = !0
      }, e.prototype._generateFillStyle = function(t, e) {
        if (!Array.isArray(t.fill)) return t.fill;
        if (navigator.isCocoonJS) return t.fill[0];
        var r = void 0,
          i = void 0,
          n = void 0,
          o = void 0,
          s = this.canvas.width / this.resolution,
          a = this.canvas.height / this.resolution;
        if (t.fillGradientType === p.TEXT_GRADIENT.LINEAR_VERTICAL) {
          r = this.context.createLinearGradient(s / 2, 0, s / 2, a), i = (t.fill.length + 1) * e.length, n = 0;
          for (var u = 0; u < e.length; u++) {
            n += 1;
            for (var h = 0; h < t.fill.length; h++) o = n / i, r.addColorStop(o, t.fill[h]), n++
          }
        } else {
          r = this.context.createLinearGradient(0, a / 2, s, a / 2), i = t.fill.length + 1, n = 1;
          for (var l = 0; l < t.fill.length; l++) o = n / i, r.addColorStop(o, t.fill[l]), n++
        }
        return r
      }, e.prototype.destroy = function(e) {
        "boolean" == typeof e && (e = {
          children: e
        }), e = Object.assign({}, m, e), t.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null
      }, e.getFontStyle = function(t) {
        t = t || {}, t instanceof g["default"] || (t = new g["default"](t));
        var e = "number" == typeof t.fontSize ? t.fontSize + "px" : t.fontSize,
          r = t.fontFamily;
        Array.isArray(t.fontFamily) || (r = t.fontFamily.split(","));
        for (var i = r.length - 1; i >= 0; i--) {
          var n = r[i].trim();
          /([\"\'])[^\'\"]+\1/.test(n) || (n = '"' + n + '"'), r[i] = n
        }
        return t.fontStyle + " " + t.fontVariant + " " + t.fontWeight + " " + e + " " + r.join(",")
      }, e.calculateFontProperties = function(t) {
        if (e.fontPropertiesCache[t]) return e.fontPropertiesCache[t];
        var r = {},
          i = e.fontPropertiesCanvas,
          n = e.fontPropertiesContext;
        n.font = t;
        var o = Math.ceil(n.measureText("|M\xc9q").width),
          s = Math.ceil(n.measureText("M").width),
          a = 2 * s;
        s = 1.4 * s | 0, i.width = o, i.height = a, n.fillStyle = "#f00", n.fillRect(0, 0, o, a), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|M\xc9q", 0, s);
        var u = n.getImageData(0, 0, o, a).data,
          h = u.length,
          l = 4 * o,
          c = 0,
          f = 0,
          d = !1;
        for (c = 0; c < s; ++c) {
          for (var p = 0; p < l; p += 4)
            if (255 !== u[f + p]) {
              d = !0;
              break
            }
          if (d) break;
          f += l
        }
        for (r.ascent = s - c, f = h - l, d = !1, c = a; c > s; --c) {
          for (var _ = 0; _ < l; _ += 4)
            if (255 !== u[f + _]) {
              d = !0;
              break
            }
          if (d) break;
          f -= l
        }
        return r.descent = c - s, r.fontSize = r.ascent + r.descent, e.fontPropertiesCache[t] = r, r
      }, a(e, [{
        key: "width",
        get: function() {
          return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
        },
        set: function(t) {
          this.updateText(!0);
          var e = (0, d.sign)(this.scale.x) || 1;
          this.scale.x = e * t / this._texture.orig.width, this._width = t
        }
      }, {
        key: "height",
        get: function() {
          return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
        },
        set: function(t) {
          this.updateText(!0);
          var e = (0, d.sign)(this.scale.y) || 1;
          this.scale.y = e * t / this._texture.orig.height, this._height = t
        }
      }, {
        key: "style",
        get: function() {
          return this._style
        },
        set: function(t) {
          t = t || {}, t instanceof g["default"] ? this._style = t : this._style = new g["default"](t), this.localStyleID = -1, this.dirty = !0
        }
      }, {
        key: "text",
        get: function() {
          return this._text
        },
        set: function(t) {
          t = String(t || " "), this._text !== t && (this._text = t, this.dirty = !0)
        }
      }]), e
    }(h["default"]);
  e["default"] = b, b.fontPropertiesCache = {}, b.fontPropertiesCanvas = document.createElement("canvas"), b.fontPropertiesContext = b.fontPropertiesCanvas.getContext("2d")
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    s = r(5),
    a = i(s),
    u = r(10),
    h = i(u),
    l = "tick",
    c = function() {
      function t() {
        var e = this;
        n(this, t), this._emitter = new h["default"], this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / a["default"].TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1, this._tick = function(t) {
          e._requestId = null, e.started && (e.update(t), e.started && null === e._requestId && e._emitter.listeners(l, !0) && (e._requestId = requestAnimationFrame(e._tick)))
        }
      }
      return t.prototype._requestIfNeeded = function() {
        null === this._requestId && this._emitter.listeners(l, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
      }, t.prototype._cancelIfNeeded = function() {
        null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
      }, t.prototype._startIfPossible = function() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
      }, t.prototype.add = function(t, e) {
        return this._emitter.on(l, t, e), this._startIfPossible(), this
      }, t.prototype.addOnce = function(t, e) {
        return this._emitter.once(l, t, e), this._startIfPossible(), this
      }, t.prototype.remove = function(t, e) {
        return this._emitter.off(l, t, e), this._emitter.listeners(l, !0) || this._cancelIfNeeded(), this
      }, t.prototype.start = function() {
        this.started || (this.started = !0, this._requestIfNeeded())
      }, t.prototype.stop = function() {
        this.started && (this.started = !1, this._cancelIfNeeded())
      }, t.prototype.update = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now(),
          e = void 0;
        t > this.lastTime ? (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * a["default"].TARGET_FPMS * this.speed, this._emitter.emit(l, this.deltaTime)) : this.deltaTime = this.elapsedMS = 0, this.lastTime = t
      }, o(t, [{
        key: "FPS",
        get: function() {
          return 1e3 / this.elapsedMS
        }
      }, {
        key: "minFPS",
        get: function() {
          return 1e3 / this._maxElapsedMS
        },
        set: function(t) {
          var e = Math.min(Math.max(0, t) / 1e3, a["default"].TARGET_FPMS);
          this._maxElapsedMS = 1 / e
        }
      }]), t
    }();
  e["default"] = c
}, function(t, e) {
  "use strict";

  function r() {
    var t = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    return !t
  }
  e.__esModule = !0, e["default"] = r
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
    if (0 === t.indexOf("data:")) return "";
    e = e || window.location, a || (a = document.createElement("a")), a.href = t, t = s["default"].parse(a.href);
    var r = !t.port && "" === e.port || t.port === e.port;
    return t.hostname === e.hostname && r && t.protocol === e.protocol ? "" : "anonymous"
  }
  e.__esModule = !0, e["default"] = n;
  var o = r(131),
    s = i(o),
    a = void 0
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    return s["default"].tablet || s["default"].phone ? 4 : t
  }
  e.__esModule = !0, e["default"] = n;
  var o = r(28),
    s = i(o)
}, function(t, e) {
  "use strict";

  function r(t) {
    t.__plugins = {}, t.registerPlugin = function(e, r) {
      t.__plugins[e] = r
    }, t.prototype.initPlugins = function() {
      this.plugins = this.plugins || {};
      for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this)
    }, t.prototype.destroyPlugins = function() {
      for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
      this.plugins = null
    }
  }
  e.__esModule = !0, e["default"] = {
    mixin: function(t) {
      r(t)
    }
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    var e = (new Error).stack;
    "undefined" == typeof e ? console.warn("Deprecation Warning: ", t) : (e = e.split("\n").splice(3).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", t), console.warn(e), console.groupEnd()) : (console.warn("Deprecation Warning: ", t), console.warn(e)))
  }
  var o = r(1),
    s = i(o),
    a = r(124),
    u = i(a),
    h = r(125),
    l = i(h),
    c = r(67),
    f = i(c),
    d = r(116),
    p = i(d),
    _ = r(126),
    v = i(_),
    y = r(120),
    g = i(y);
  s.SpriteBatch = function() {
    throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
  }, s.AssetLoader = function() {
    throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.");
  }, Object.defineProperties(s, {
    Stage: {
      enumerable: !0,
      get: function() {
        return n("You do not need to use a PIXI Stage any more, you can simply render any container."), s.Container
      }
    },
    DisplayObjectContainer: {
      enumerable: !0,
      get: function() {
        return n("DisplayObjectContainer has been shortened to Container, please use Container from now on."), s.Container
      }
    },
    Strip: {
      enumerable: !0,
      get: function() {
        return n("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), u.Mesh
      }
    },
    Rope: {
      enumerable: !0,
      get: function() {
        return n("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), u.Rope
      }
    },
    ParticleContainer: {
      enumerable: !0,
      get: function() {
        return n("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), l.ParticleContainer
      }
    },
    MovieClip: {
      enumerable: !0,
      get: function() {
        return n("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."), f.AnimatedSprite
      }
    },
    TilingSprite: {
      enumerable: !0,
      get: function() {
        return n("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), f.TilingSprite
      }
    },
    BitmapText: {
      enumerable: !0,
      get: function() {
        return n("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), f.BitmapText
      }
    },
    blendModes: {
      enumerable: !0,
      get: function() {
        return n("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), s.BLEND_MODES
      }
    },
    scaleModes: {
      enumerable: !0,
      get: function() {
        return n("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), s.SCALE_MODES
      }
    },
    BaseTextureCache: {
      enumerable: !0,
      get: function() {
        return n("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), s.utils.BaseTextureCache
      }
    },
    TextureCache: {
      enumerable: !0,
      get: function() {
        return n("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), s.utils.TextureCache
      }
    },
    math: {
      enumerable: !0,
      get: function() {
        return n("The math namespace is deprecated, please access members already accessible on PIXI."), s
      }
    },
    AbstractFilter: {
      enumerable: !0,
      get: function() {
        return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"), s.Filter
      }
    },
    TransformManual: {
      enumerable: !0,
      get: function() {
        return n("TransformManual has been renamed to TransformBase, please update your pixi-spine"), s.TransformBase
      }
    },
    TARGET_FPMS: {
      enumerable: !0,
      get: function() {
        return n("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), s.settings.TARGET_FPMS
      },
      set: function(t) {
        n("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), s.settings.TARGET_FPMS = t
      }
    },
    FILTER_RESOLUTION: {
      enumerable: !0,
      get: function() {
        return n("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), s.settings.FILTER_RESOLUTION
      },
      set: function(t) {
        n("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), s.settings.FILTER_RESOLUTION = t
      }
    },
    RESOLUTION: {
      enumerable: !0,
      get: function() {
        return n("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), s.settings.RESOLUTION
      },
      set: function(t) {
        n("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), s.settings.RESOLUTION = t
      }
    },
    MIPMAP_TEXTURES: {
      enumerable: !0,
      get: function() {
        return n("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), s.settings.MIPMAP_TEXTURES
      },
      set: function(t) {
        n("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), s.settings.MIPMAP_TEXTURES = t
      }
    },
    SPRITE_BATCH_SIZE: {
      enumerable: !0,
      get: function() {
        return n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), s.settings.SPRITE_BATCH_SIZE
      },
      set: function(t) {
        n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), s.settings.SPRITE_BATCH_SIZE = t
      }
    },
    SPRITE_MAX_TEXTURES: {
      enumerable: !0,
      get: function() {
        return n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), s.settings.SPRITE_MAX_TEXTURES
      },
      set: function(t) {
        n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), s.settings.SPRITE_MAX_TEXTURES = t
      }
    },
    RETINA_PREFIX: {
      enumerable: !0,
      get: function() {
        return n("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), s.settings.RETINA_PREFIX
      },
      set: function(t) {
        n("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), s.settings.RETINA_PREFIX = t
      }
    },
    DEFAULT_RENDER_OPTIONS: {
      enumerable: !0,
      get: function() {
        return n("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"), s.settings.RENDER_OPTIONS
      }
    }
  });
  for (var m = [{
      parent: "TRANSFORM_MODE",
      target: "TRANSFORM_MODE"
    }, {
      parent: "GC_MODES",
      target: "GC_MODE"
    }, {
      parent: "WRAP_MODES",
      target: "WRAP_MODE"
    }, {
      parent: "SCALE_MODES",
      target: "SCALE_MODE"
    }, {
      parent: "PRECISION",
      target: "PRECISION"
    }], b = function(t) {
      var e = m[t];
      Object.defineProperty(s[e.parent], "DEFAULT", {
        enumerable: !0,
        get: function() {
          return n("PIXI." + e.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + e.target), s.settings[e.target]
        },
        set: function(t) {
          n("PIXI." + e.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + e.target), s.settings[e.target] = t
        }
      })
    }, x = 0; x < m.length; x++) b(x);
  Object.defineProperties(f, {
    MovieClip: {
      enumerable: !0,
      get: function() {
        return n("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."), f.AnimatedSprite
      }
    }
  }), s.DisplayObject.prototype.generateTexture = function(t, e, r) {
    return n("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), t.generateTexture(this, e, r)
  }, s.Graphics.prototype.generateTexture = function(t, e) {
    return n("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(t, e)
  }, s.RenderTexture.prototype.render = function(t, e, r, i) {
    this.legacyRenderer.render(t, this, r, e, !i), n("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
  }, s.RenderTexture.prototype.getImage = function(t) {
    return n("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(t)
  }, s.RenderTexture.prototype.getBase64 = function(t) {
    return n("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(t)
  }, s.RenderTexture.prototype.getCanvas = function(t) {
    return n("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(t)
  }, s.RenderTexture.prototype.getPixels = function(t) {
    return n("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(t)
  }, s.Sprite.prototype.setTexture = function(t) {
    this.texture = t, n("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
  }, f.BitmapText.prototype.setText = function(t) {
    this.text = t, n("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
  }, s.Text.prototype.setText = function(t) {
    this.text = t, n("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
  }, s.Text.prototype.setStyle = function(t) {
    this.style = t, n("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
  }, s.Text.prototype.determineFontProperties = function(t) {
    return n("determineFontProperties is now deprecated, please use the static calculateFontProperties method, e.g : Text.calculateFontProperties(fontStyle);"), Text.calculateFontProperties(t)
  }, Object.defineProperties(s.TextStyle.prototype, {
    font: {
      get: function() {
        n("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
        var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
        return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily
      },
      set: function(t) {
        n("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), t.indexOf("italic") > 1 ? this._fontStyle = "italic" : t.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", t.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
        var e = t.split(" "),
          r = -1;
        this._fontSize = 26;
        for (var i = 0; i < e.length; ++i)
          if (e[i].match(/(px|pt|em|%)/)) {
            r = i, this._fontSize = e[i];
            break
          }
        this._fontWeight = "normal";
        for (var o = 0; o < r; ++o)
          if (e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
            this._fontWeight = e[o];
            break
          }
        if (r > -1 && r < e.length - 1) {
          this._fontFamily = "";
          for (var s = r + 1; s < e.length; ++s) this._fontFamily += e[s] + " ";
          this._fontFamily = this._fontFamily.slice(0, -1)
        } else this._fontFamily = "Arial";
        this.styleID++
      }
    }
  }), s.Texture.prototype.setFrame = function(t) {
    this.frame = t, n("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")
  }, Object.defineProperties(p, {
    AbstractFilter: {
      get: function() {
        return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"), s.AbstractFilter
      }
    },
    SpriteMaskFilter: {
      get: function() {
        return n("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), s.SpriteMaskFilter
      }
    }
  }), s.utils.uuid = function() {
    return n("utils.uuid() is deprecated, please use utils.uid() from now on."), s.utils.uid()
  }, s.utils.canUseNewCanvasBlendModes = function() {
    return n("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), s.CanvasTinter.canUseMultiply
  };
  var T = !0;
  Object.defineProperty(s.utils, "_saidHello", {
    set: function(t) {
      t && (n("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"), this.skipHello()), T = t
    },
    get: function() {
      return T
    }
  }), Object.defineProperty(v.canvas, "UPLOADS_PER_FRAME", {
    set: function() {
      n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
    },
    get: function() {
      return n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
    }
  }), Object.defineProperty(v.webgl, "UPLOADS_PER_FRAME", {
    set: function() {
      n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
    },
    get: function() {
      return n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
    }
  }), Object.defineProperties(g.Resource.prototype, {
    isJson: {
      get: function() {
        return n("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."), this.type === g.Loader.Resource.TYPE.JSON
      }
    },
    isXml: {
      get: function() {
        return n("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."), this.type === g.Loader.Resource.TYPE.XML
      }
    },
    isImage: {
      get: function() {
        return n("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."), this.type === g.Loader.Resource.TYPE.IMAGE
      }
    },
    isAudio: {
      get: function() {
        return n("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."), this.type === g.Loader.Resource.TYPE.AUDIO
      }
    },
    isVideo: {
      get: function() {
        return n("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."), this.type === g.Loader.Resource.TYPE.VIDEO
      }
    }
  }), Object.defineProperties(g.Loader.prototype, {
    before: {
      get: function() {
        return n("The before() method is deprecated, please use pre()."), this.pre
      }
    },
    after: {
      get: function() {
        return n("The after() method is deprecated, please use use()."), this.use
      }
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(1),
    s = i(o),
    a = new s.Rectangle,
    u = function() {
      function t(e) {
        n(this, t), this.renderer = e, e.extract = this
      }
      return t.prototype.image = function e(t) {
        var e = new Image;
        return e.src = this.base64(t), e
      }, t.prototype.base64 = function(t) {
        return this.canvas(t).toDataURL()
      }, t.prototype.canvas = function(t) {
        var e = this.renderer,
          r = void 0,
          i = void 0,
          n = void 0,
          o = void 0;
        t && (o = t instanceof s.RenderTexture ? t : e.generateTexture(t)), o ? (r = o.baseTexture._canvasRenderTarget.context, i = o.baseTexture._canvasRenderTarget.resolution, n = o.frame) : (r = e.rootContext, n = a, n.width = this.renderer.width, n.height = this.renderer.height);
        var u = n.width * i,
          h = n.height * i,
          l = new s.CanvasRenderTarget(u, h),
          c = r.getImageData(n.x * i, n.y * i, u, h);
        return l.context.putImageData(c, 0, 0), l.canvas
      }, t.prototype.pixels = function(t) {
        var e = this.renderer,
          r = void 0,
          i = void 0,
          n = void 0,
          o = void 0;
        return t && (o = t instanceof s.RenderTexture ? t : e.generateTexture(t)), o ? (r = o.baseTexture._canvasRenderTarget.context, i = o.baseTexture._canvasRenderTarget.resolution, n = o.frame) : (r = e.rootContext, n = a, n.width = e.width, n.height = e.height), r.getImageData(0, 0, n.width * i, n.height * i).data
      }, t.prototype.destroy = function() {
        this.renderer.extract = null, this.renderer = null
      }, t
    }();
  e["default"] = u, s.CanvasRenderer.registerPlugin("extract", u)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(224);
  Object.defineProperty(e, "webgl", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(222);
  Object.defineProperty(e, "canvas", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(1),
    s = i(o),
    a = new s.Rectangle,
    u = 4,
    h = function() {
      function t(e) {
        n(this, t), this.renderer = e, e.extract = this
      }
      return t.prototype.image = function e(t) {
        var e = new Image;
        return e.src = this.base64(t), e
      }, t.prototype.base64 = function(t) {
        return this.canvas(t).toDataURL()
      }, t.prototype.canvas = function(t) {
        var e = this.renderer,
          r = void 0,
          i = void 0,
          n = void 0,
          o = !1,
          h = void 0;
        t && (h = t instanceof s.RenderTexture ? t : this.renderer.generateTexture(t)), h ? (r = h.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = r.resolution, n = h.frame, o = !1) : (r = this.renderer.rootRenderTarget, i = r.resolution, o = !0, n = a, n.width = r.size.width, n.height = r.size.height);
        var l = n.width * i,
          c = n.height * i,
          f = new s.CanvasRenderTarget(l, c);
        if (r) {
          e.bindRenderTarget(r);
          var d = new Uint8Array(u * l * c),
            p = e.gl;
          p.readPixels(n.x * i, n.y * i, l, c, p.RGBA, p.UNSIGNED_BYTE, d);
          var _ = f.context.getImageData(0, 0, l, c);
          _.data.set(d), f.context.putImageData(_, 0, 0), o && (f.context.scale(1, -1), f.context.drawImage(f.canvas, 0, -c))
        }
        return f.canvas
      }, t.prototype.pixels = function(t) {
        var e = this.renderer,
          r = void 0,
          i = void 0,
          n = void 0,
          o = void 0;
        t && (o = t instanceof s.RenderTexture ? t : this.renderer.generateTexture(t)), o ? (r = o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], i = r.resolution, n = o.frame) : (r = this.renderer.rootRenderTarget, i = r.resolution, n = a, n.width = r.size.width, n.height = r.size.height);
        var h = n.width * i,
          l = n.height * i,
          c = new Uint8Array(u * h * l);
        if (r) {
          e.bindRenderTarget(r);
          var f = e.gl;
          f.readPixels(n.x * i, n.y * i, h, l, f.RGBA, f.UNSIGNED_BYTE, c)
        }
        return c
      }, t.prototype.destroy = function() {
        this.renderer.extract = null, this.renderer = null
      }, t
    }();
  e["default"] = h, s.WebGLRenderer.registerPlugin("extract", h)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(1),
    h = i(u),
    l = function(t) {
      function e(r) {
        n(this, e);
        var i = o(this, t.call(this, r[0] instanceof h.Texture ? r[0] : r[0].texture));
        return i._textures = null, i._durations = null, i.textures = r, i.animationSpeed = 1, i.loop = !0, i.onComplete = null, i.onFrameChange = null, i._currentTime = 0, i.playing = !1, i
      }
      return s(e, t), e.prototype.stop = function() {
        this.playing && (this.playing = !1, h.ticker.shared.remove(this.update, this))
      }, e.prototype.play = function() {
        this.playing || (this.playing = !0, h.ticker.shared.add(this.update, this))
      }, e.prototype.gotoAndStop = function(t) {
        this.stop();
        var e = this.currentFrame;
        this._currentTime = t, e !== this.currentFrame && this.updateTexture()
      }, e.prototype.gotoAndPlay = function(t) {
        var e = this.currentFrame;
        this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
      }, e.prototype.update = function(t) {
        var e = this.animationSpeed * t,
          r = this.currentFrame;
        if (null !== this._durations) {
          var i = this._currentTime % 1 * this._durations[this.currentFrame];
          for (i += e / 60 * 1e3; i < 0;) this._currentTime--, i += this._durations[this.currentFrame];
          var n = Math.sign(this.animationSpeed * t);
          for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];) i -= this._durations[this.currentFrame] * n, this._currentTime += n;
          this._currentTime += i / this._durations[this.currentFrame]
        } else this._currentTime += e;
        this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && this.updateTexture()
      }, e.prototype.updateTexture = function() {
        this._texture = this._textures[this.currentFrame], this._textureID = -1, this.onFrameChange && this.onFrameChange(this.currentFrame)
      }, e.prototype.destroy = function() {
        this.stop(), t.prototype.destroy.call(this)
      }, e.fromFrames = function(t) {
        for (var r = [], i = 0; i < t.length; ++i) r.push(h.Texture.fromFrame(t[i]));
        return new e(r)
      }, e.fromImages = function(t) {
        for (var r = [], i = 0; i < t.length; ++i) r.push(h.Texture.fromImage(t[i]));
        return new e(r)
      }, a(e, [{
        key: "totalFrames",
        get: function() {
          return this._textures.length
        }
      }, {
        key: "textures",
        get: function() {
          return this._textures
        },
        set: function(t) {
          if (t[0] instanceof h.Texture) this._textures = t, this._durations = null;
          else {
            this._textures = [], this._durations = [];
            for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
          }
        }
      }, {
        key: "currentFrame",
        get: function() {
          var t = Math.floor(this._currentTime) % this._textures.length;
          return t < 0 && (t += this._textures.length), t
        }
      }]), e
    }(h.Sprite);
  e["default"] = l
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    h = r(1),
    l = n(h),
    c = r(98),
    f = i(c),
    d = function(t) {
      function e(r) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o(this, e);
        var n = s(this, t.call(this));
        return n._textWidth = 0, n._textHeight = 0, n._glyphs = [], n._font = {
          tint: void 0 !== i.tint ? i.tint : 16777215,
          align: i.align || "left",
          name: null,
          size: 0
        }, n.font = i.font, n._text = r, n.maxWidth = 0, n.maxLineHeight = 0, n._anchor = new f["default"](function() {
          n.dirty = !0
        }, n, 0, 0), n.dirty = !1, n.updateText(), n
      }
      return a(e, t), e.prototype.updateText = function() {
        for (var t = e.fonts[this._font.name], r = this._font.size / t.size, i = new l.Point, n = [], o = [], s = null, a = 0, u = 0, h = 0, c = -1, f = 0, d = 0, p = 0; p < this.text.length; p++) {
          var _ = this.text.charCodeAt(p);
          if (/(\s)/.test(this.text.charAt(p)) && (c = p, f = a), /(?:\r\n|\r|\n)/.test(this.text.charAt(p))) o.push(a), u = Math.max(u, a), h++, i.x = 0, i.y += t.lineHeight, s = null;
          else if (c !== -1 && this.maxWidth > 0 && i.x * r > this.maxWidth) l.utils.removeItems(n, c, p - c), p = c, c = -1, o.push(f), u = Math.max(u, f), h++, i.x = 0, i.y += t.lineHeight, s = null;
          else {
            var v = t.chars[_];
            v && (s && v.kerning[s] && (i.x += v.kerning[s]), n.push({
              texture: v.texture,
              line: h,
              charCode: _,
              position: new l.Point(i.x + v.xOffset, i.y + v.yOffset)
            }), a = i.x + (v.texture.width + v.xOffset), i.x += v.xAdvance, d = Math.max(d, v.yOffset + v.texture.height), s = _)
          }
        }
        o.push(a), u = Math.max(u, a);
        for (var y = [], g = 0; g <= h; g++) {
          var m = 0;
          "right" === this._font.align ? m = u - o[g] : "center" === this._font.align && (m = (u - o[g]) / 2), y.push(m)
        }
        for (var b = n.length, x = this.tint, T = 0; T < b; T++) {
          var w = this._glyphs[T];
          w ? w.texture = n[T].texture : (w = new l.Sprite(n[T].texture), this._glyphs.push(w)), w.position.x = (n[T].position.x + y[n[T].line]) * r, w.position.y = n[T].position.y * r, w.scale.x = w.scale.y = r, w.tint = x, w.parent || this.addChild(w)
        }
        for (var E = b; E < this._glyphs.length; ++E) this.removeChild(this._glyphs[E]);
        if (this._textWidth = u * r, this._textHeight = (i.y + t.lineHeight) * r, 0 !== this.anchor.x || 0 !== this.anchor.y)
          for (var O = 0; O < b; O++) this._glyphs[O].x -= this._textWidth * this.anchor.x, this._glyphs[O].y -= this._textHeight * this.anchor.y;
        this.maxLineHeight = d * r
      }, e.prototype.updateTransform = function() {
        this.validate(), this.containerUpdateTransform()
      }, e.prototype.getLocalBounds = function() {
        return this.validate(), t.prototype.getLocalBounds.call(this)
      }, e.prototype.validate = function() {
        this.dirty && (this.updateText(), this.dirty = !1)
      }, u(e, [{
        key: "tint",
        get: function() {
          return this._font.tint
        },
        set: function(t) {
          this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
        }
      }, {
        key: "align",
        get: function() {
          return this._font.align
        },
        set: function(t) {
          this._font.align = t || "left", this.dirty = !0
        }
      }, {
        key: "anchor",
        get: function() {
          return this._anchor
        },
        set: function(t) {
          "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
        }
      }, {
        key: "font",
        get: function() {
          return this._font
        },
        set: function(t) {
          t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
        }
      }, {
        key: "text",
        get: function() {
          return this._text
        },
        set: function(t) {
          t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
        }
      }, {
        key: "textWidth",
        get: function() {
          return this.validate(), this._textWidth
        }
      }, {
        key: "textHeight",
        get: function() {
          return this.validate(), this._textHeight
        }
      }]), e
    }(l.Container);
  e["default"] = d, d.fonts = {}
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    h = r(1),
    l = n(h),
    c = r(64),
    f = i(c),
    d = r(110),
    p = i(d),
    _ = new l.Point,
    v = function(t) {
      function e(r) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        o(this, e);
        var a = s(this, t.call(this, r));
        return a.tileTransform = new l.TransformStatic, a._width = i, a._height = n, a._canvasPattern = null, a.uvTransform = r.transform || new p["default"](r), a.pluginName = "tilingSprite", a
      }
      return a(e, t), e.prototype._onTextureUpdate = function() {
        this.uvTransform && (this.uvTransform.texture = this._texture)
      }, e.prototype._renderWebGL = function(t) {
        var e = this._texture;
        e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
      }, e.prototype._renderCanvas = function(t) {
        var e = this._texture;
        if (e.baseTexture.hasLoaded) {
          var r = t.context,
            i = this.worldTransform,
            n = t.resolution,
            o = e.baseTexture,
            s = e.baseTexture.resolution,
            a = this.tilePosition.x / this.tileScale.x % e._frame.width,
            u = this.tilePosition.y / this.tileScale.y % e._frame.height;
          if (!this._canvasPattern) {
            var h = new l.CanvasRenderTarget(e._frame.width, e._frame.height, s);
            16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = f["default"].getTintedTexture(this, this.tint)), h.context.drawImage(this.tintedTexture, 0, 0)) : h.context.drawImage(o.source, -e._frame.x, -e._frame.y), this._canvasPattern = h.context.createPattern(h.canvas, "repeat")
          }
          r.globalAlpha = this.worldAlpha, r.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n), r.scale(this.tileScale.x / s, this.tileScale.y / s), r.translate(a + this.anchor.x * -this._width, u + this.anchor.y * -this._height), t.setBlendMode(this.blendMode), r.fillStyle = this._canvasPattern, r.fillRect(-a, -u, this._width / this.tileScale.x * s, this._height / this.tileScale.y * s)
        }
      }, e.prototype._calculateBounds = function() {
        var t = this._width * -this._anchor._x,
          e = this._height * -this._anchor._y,
          r = this._width * (1 - this._anchor._x),
          i = this._height * (1 - this._anchor._y);
        this._bounds.addFrame(this.transform, t, e, r, i)
      }, e.prototype.getLocalBounds = function(e) {
        return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._x), e || (this._localBoundsRect || (this._localBoundsRect = new l.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
      }, e.prototype.containsPoint = function(t) {
        this.worldTransform.applyInverse(t, _);
        var e = this._width,
          r = this._height,
          i = -e * this.anchor._x;
        if (_.x > i && _.x < i + e) {
          var n = -r * this.anchor._y;
          if (_.y > n && _.y < n + r) return !0
        }
        return !1
      }, e.prototype.destroy = function() {
        t.prototype.destroy.call(this), this.tileTransform = null, this.uvTransform = null
      }, e.from = function(t, r, i) {
        return new e(l.Texture.from(t), r, i)
      }, e.fromFrame = function(t, r, i) {
        var n = l.utils.TextureCache[t];
        if (!n) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
        return new e(n, r, i)
      }, e.fromImage = function(t, r, i, n, o) {
        return new e(l.Texture.fromImage(t, n, o), r, i)
      }, u(e, [{
        key: "clampMargin",
        get: function() {
          return this.uvTransform.clampMargin
        },
        set: function(t) {
          this.uvTransform.clampMargin = t, this.uvTransform.update(!0)
        }
      }, {
        key: "tileScale",
        get: function() {
          return this.tileTransform.scale
        },
        set: function(t) {
          this.tileTransform.scale.copy(t)
        }
      }, {
        key: "tilePosition",
        get: function() {
          return this.tileTransform.position
        },
        set: function(t) {
          this.tileTransform.position.copy(t)
        }
      }, {
        key: "width",
        get: function() {
          return this._width
        },
        set: function(t) {
          this._width = t
        }
      }, {
        key: "height",
        get: function() {
          return this._height
        },
        set: function(t) {
          this._height = t
        }
      }]), e
    }(l.Sprite);
  e["default"] = v
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var o = r(1),
    s = i(o),
    a = s.DisplayObject,
    u = new s.Matrix;
  a.prototype._cacheAsBitmap = !1, a.prototype._cacheData = !1;
  var h = function l() {
    n(this, l), this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
  };
  Object.defineProperties(a.prototype, {
    cacheAsBitmap: {
      get: function() {
        return this._cacheAsBitmap
      },
      set: function(t) {
        if (this._cacheAsBitmap !== t) {
          this._cacheAsBitmap = t;
          var e = void 0;
          t ? (this._cacheData || (this._cacheData = new h), e = this._cacheData, e.originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
        }
      }
    }
  }), a.prototype._renderCachedWebGL = function(t) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t))
  }, a.prototype._initCachedDisplayObject = function(t) {
    if (!this._cacheData || !this._cacheData.sprite) {
      var e = this.alpha;
      this.alpha = 1, t.currentRenderer.flush();
      var r = this.getLocalBounds().clone();
      if (this._filters) {
        var i = this._filters[0].padding;
        r.pad(i)
      }
      var n = t._activeRenderTarget,
        o = t.filterManager.filterStack,
        a = s.RenderTexture.create(0 | r.width, 0 | r.height),
        h = u;
      h.tx = -r.x, h.ty = -r.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, a, !0, h, !0), t.bindRenderTarget(n), t.filterManager.filterStack = o, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
      var l = new s.Sprite(a);
      l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -(r.x / r.width), l.anchor.y = -(r.y / r.height), l.alpha = e, l._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.updateTransform(), this.containsPoint = l.containsPoint.bind(l)
    }
  }, a.prototype._renderCachedCanvas = function(t) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t))
  }, a.prototype._initCachedDisplayObjectCanvas = function(t) {
    if (!this._cacheData || !this._cacheData.sprite) {
      var e = this.getLocalBounds(),
        r = this.alpha;
      this.alpha = 1;
      var i = t.context,
        n = s.RenderTexture.create(0 | e.width, 0 | e.height),
        o = u;
      this.transform.worldTransform.copy(o), o.invert(), o.tx -= e.x, o.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, o, !1), t.context = i, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
      var a = new s.Sprite(n);
      a.transform.worldTransform = this.transform.worldTransform, a.anchor.x = -(e.x / e.width), a.anchor.y = -(e.y / e.height), a._bounds = this._bounds, a.alpha = r, this.updateTransform(), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = a, this.containsPoint = a.containsPoint.bind(a)
    }
  }, a.prototype._calculateCachedBounds = function() {
    this._cacheData.sprite._calculateBounds()
  }, a.prototype._getCachedLocalBounds = function() {
    return this._cacheData.sprite.getLocalBounds()
  }, a.prototype._destroyCachedDisplayObject = function() {
    this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null
  }, a.prototype._cacheAsBitmapDestroy = function() {
    this.cacheAsBitmap = !1, this.destroy()
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }
  var n = r(1),
    o = i(n);
  o.DisplayObject.prototype.name = null, o.Container.prototype.getChildByName = function(t) {
    for (var e = 0; e < this.children.length; e++)
      if (this.children[e].name === t) return this.children[e];
    return null
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }
  var n = r(1),
    o = i(n);
  o.DisplayObject.prototype.getGlobalPosition = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new o.Point,
      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
  }
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(1),
    u = i(a),
    h = r(2),
    l = (r(7), new u.Matrix),
    c = new Float32Array(4),
    f = function(t) {
      function e(r) {
        n(this, e);
        var i = o(this, t.call(this, r));
        return i.shader = null, i.simpleShader = null, i.quad = null, i
      }
      return s(e, t), e.prototype.onContextChange = function() {
        var t = this.renderer.gl;
        this.shader = new u.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n    gl_FragColor = sample * color ;\n}\n"), this.simpleShader = new u.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n    gl_FragColor = sample * color;\n}\n"), this.renderer.bindVao(null), this.quad = new u.Quad(t, this.renderer.state.attribState), this.quad.initVao(this.shader)
      }, e.prototype.render = function(t) {
        var e = this.renderer,
          r = this.quad;
        e.bindVao(r.vao);
        var i = r.vertices;
        i[0] = i[6] = t._width * -t.anchor.x, i[1] = i[3] = t._height * -t.anchor.y, i[2] = i[4] = t._width * (1 - t.anchor.x), i[5] = i[7] = t._height * (1 - t.anchor.y), i = r.uvs, i[0] = i[6] = -t.anchor.x, i[1] = i[3] = -t.anchor.y, i[2] = i[4] = 1 - t.anchor.x, i[5] = i[7] = 1 - t.anchor.y, r.upload();
        var n = t._texture,
          o = n.baseTexture,
          s = t.tileTransform.localTransform,
          a = t.uvTransform,
          f = o.isPowerOfTwo && n.frame.width === o.width && n.frame.height === o.height;
        f && (o._glTextures[e.CONTEXT_UID] ? f = o.wrapMode !== h.WRAP_MODES.CLAMP : o.wrapMode === h.WRAP_MODES.CLAMP && (o.wrapMode = h.WRAP_MODES.REPEAT));
        var d = f ? this.simpleShader : this.shader;
        e.bindShader(d);
        var p = n.width,
          _ = n.height,
          v = t._width,
          y = t._height;
        l.set(s.a * p / v, s.b * p / y, s.c * _ / v, s.d * _ / y, s.tx / v, s.ty / y), l.invert(), f ? l.append(a.mapCoord) : (d.uniforms.uMapCoord = a.mapCoord.toArray(!0), d.uniforms.uClampFrame = a.uClampFrame, d.uniforms.uClampOffset = a.uClampOffset), d.uniforms.uTransform = l.toArray(!0);
        var g = c;
        u.utils.hex2rgb(t.tint, g), g[3] = t.worldAlpha, d.uniforms.uColor = g, d.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), d.uniforms.uSampler = e.bindTexture(n), e.setBlendMode(t.blendMode), r.vao.draw(this.renderer.gl.TRIANGLES, 6, 0)
      }, e
    }(u.ObjectRenderer);
  e["default"] = f, u.WebGLRenderer.registerPlugin("tilingSprite", f)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    h = r(1),
    l = n(h),
    c = r(111),
    f = i(c),
    d = r(112),
    p = i(d),
    _ = function(t) {
      function e(r, i, n, a) {
        o(this, e);
        var u = s(this, t.call(this));
        return u.blurXFilter = new f["default"](r, i, n, a), u.blurYFilter = new p["default"](r, i, n, a), u.resolution = 1, u.padding = 0, u.resolution = n || 1, u.quality = i || 4, u.blur = r || 8, u
      }
      return a(e, t), e.prototype.apply = function(t, e, r) {
        var i = t.getRenderTarget(!0);
        this.blurXFilter.apply(t, e, i, !0), this.blurYFilter.apply(t, i, r, !1), t.returnRenderTarget(i)
      }, u(e, [{
        key: "blur",
        get: function() {
          return this.blurXFilter.blur
        },
        set: function(t) {
          this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
        }
      }, {
        key: "quality",
        get: function() {
          return this.blurXFilter.quality
        },
        set: function(t) {
          this.blurXFilter.quality = this.blurYFilter.quality = t
        }
      }, {
        key: "blurX",
        get: function() {
          return this.blurXFilter.blur
        },
        set: function(t) {
          this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
        }
      }, {
        key: "blurY",
        get: function() {
          return this.blurYFilter.blur
        },
        set: function(t) {
          this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
        }
      }]), e
    }(l.Filter);
  e["default"] = _
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(1),
    h = i(u),
    l = (r(7), function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n"));
        return r.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], r
      }
      return s(e, t), e.prototype._loadMatrix = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = t;
        e && (this._multiply(r, this.uniforms.m, t), r = this._colorMatrix(r)), this.uniforms.m = r
      }, e.prototype._multiply = function(t, e, r) {
        return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19], t
      }, e.prototype._colorMatrix = function(t) {
        var e = new Float32Array(t);
        return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
      }, e.prototype.brightness = function(t, e) {
        var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
      }, e.prototype.greyscale = function(t, e) {
        var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
      }, e.prototype.blackAndWhite = function(t) {
        var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.hue = function(t, e) {
        t = (t || 0) / 180 * Math.PI;
        var r = Math.cos(t),
          i = Math.sin(t),
          n = Math.sqrt,
          o = 1 / 3,
          s = n(o),
          a = r + (1 - r) * o,
          u = o * (1 - r) - s * i,
          h = o * (1 - r) + s * i,
          l = o * (1 - r) + s * i,
          c = r + o * (1 - r),
          f = o * (1 - r) - s * i,
          d = o * (1 - r) - s * i,
          p = o * (1 - r) + s * i,
          _ = r + o * (1 - r),
          v = [a, u, h, 0, 0, l, c, f, 0, 0, d, p, _, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(v, e)
      }, e.prototype.contrast = function(t, e) {
        var r = (t || 0) + 1,
          i = -128 * (r - 1),
          n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
      }, e.prototype.saturate = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments[1],
          r = 2 * t / 3 + 1,
          i = (r - 1) * -.5,
          n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
      }, e.prototype.desaturate = function() {
        this.saturate(-1)
      }, e.prototype.negative = function(t) {
        var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.sepia = function(t) {
        var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.technicolor = function(t) {
        var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.polaroid = function(t) {
        var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.toBGR = function(t) {
        var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.kodachrome = function(t) {
        var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.browni = function(t) {
        var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.vintage = function(t) {
        var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.colorTone = function(t, e, r, i, n) {
        t = t || .2, e = e || .15, r = r || 16770432, i = i || 3375104;
        var o = (r >> 16 & 255) / 255,
          s = (r >> 8 & 255) / 255,
          a = (255 & r) / 255,
          u = (i >> 16 & 255) / 255,
          h = (i >> 8 & 255) / 255,
          l = (255 & i) / 255,
          c = [.3, .59, .11, 0, 0, o, s, a, t, 0, u, h, l, e, 0, o - u, s - h, a - l, 0, 0];
        this._loadMatrix(c, n)
      }, e.prototype.night = function(t, e) {
        t = t || .1;
        var r = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
      }, e.prototype.predator = function(t, e) {
        var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
      }, e.prototype.lsd = function(t) {
        var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }, e.prototype.reset = function() {
        var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(t, !1)
      }, a(e, [{
        key: "matrix",
        get: function() {
          return this.uniforms.m
        },
        set: function(t) {
          this.uniforms.m = t
        }
      }]), e
    }(h.Filter));
  e["default"] = l, l.prototype.grayscale = l.prototype.greyscale
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(1),
    h = i(u),
    l = (r(7), function(t) {
      function e(r, i) {
        n(this, e);
        var s = new h.Matrix;
        r.renderable = !1;
        var a = o(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));
        return a.maskSprite = r, a.maskMatrix = s, a.uniforms.mapSampler = r.texture, a.uniforms.filterMatrix = s.toArray(!0), a.uniforms.scale = {
          x: 1,
          y: 1
        }, null !== i && void 0 !== i || (i = 20), a.scale = new h.Point(i, i), a
      }
      return s(e, t), e.prototype.apply = function(t, e, r) {
        var i = 1 / r.destinationFrame.width * (r.size.width / e.size.width);
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x * i, this.uniforms.scale.y = this.scale.y * i, t.applyFilter(this, e, r)
      }, a(e, [{
        key: "map",
        get: function() {
          return this.uniforms.mapSampler
        },
        set: function(t) {
          this.uniforms.mapSampler = t
        }
      }]), e
    }(h.Filter));
  e["default"] = l
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(1),
    u = i(a),
    h = (r(7), function(t) {
      function e() {
        return n(this, e), o(this, t.call(this, "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'))
      }
      return s(e, t), e
    }(u.Filter));
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(1),
    h = i(u),
    l = (r(7), function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n"));
        return r.noise = .5, r
      }
      return s(e, t), a(e, [{
        key: "noise",
        get: function() {
          return this.uniforms.noise
        },
        set: function(t) {
          this.uniforms.noise = t
        }
      }]), e
    }(h.Filter));
  e["default"] = l
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(1),
    u = i(a),
    h = (r(7), function(t) {
      function e() {
        n(this, e);
        var r = o(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"));
        return r.glShaderKey = "void", r
      }
      return s(e, t), e
    }(u.Filter));
  e["default"] = h
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
    function t() {
      r(this, t), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
    }
    return t.prototype.stopPropagation = function() {
      this.stopped = !0
    }, t.prototype._reset = function() {
      this.stopped = !1, this.currentTarget = null, this.target = null
    }, t
  }();
  e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = r(1),
    h = n(u),
    l = r(117),
    c = i(l),
    f = r(238),
    d = i(f),
    p = r(10),
    _ = i(p),
    v = r(118),
    y = i(v),
    g = r(28),
    m = i(g);
  Object.assign(h.DisplayObject.prototype, y["default"]);
  var b = function(t) {
    function e(r, i) {
      o(this, e);
      var n = s(this, t.call(this));
      return i = i || {}, n.renderer = r, n.autoPreventDefault = void 0 === i.autoPreventDefault || i.autoPreventDefault, n.interactionFrequency = i.interactionFrequency || 10, n.mouse = new c["default"], n.mouse.global.set(-999999), n.pointer = new c["default"], n.pointer.global.set(-999999), n.eventData = new d["default"], n.interactiveDataPool = [], n.interactionDOMElement = null, n.moveWhenInside = !1, n.eventsAdded = !1, n.mouseOverRenderer = !1, n.supportsTouchEvents = "ontouchstart" in window, n.supportsPointerEvents = !!window.PointerEvent, n.normalizeTouchEvents = !n.supportsPointerEvents && n.supportsTouchEvents, n.normalizeMouseEvents = !n.supportsPointerEvents && !m["default"].any, n.onMouseUp = n.onMouseUp.bind(n), n.processMouseUp = n.processMouseUp.bind(n), n.onMouseDown = n.onMouseDown.bind(n), n.processMouseDown = n.processMouseDown.bind(n), n.onMouseMove = n.onMouseMove.bind(n), n.processMouseMove = n.processMouseMove.bind(n), n.onMouseOut = n.onMouseOut.bind(n), n.processMouseOverOut = n.processMouseOverOut.bind(n), n.onMouseOver = n.onMouseOver.bind(n), n.onPointerUp = n.onPointerUp.bind(n), n.processPointerUp = n.processPointerUp.bind(n), n.onPointerDown = n.onPointerDown.bind(n), n.processPointerDown = n.processPointerDown.bind(n), n.onPointerMove = n.onPointerMove.bind(n), n.processPointerMove = n.processPointerMove.bind(n), n.onPointerOut = n.onPointerOut.bind(n), n.processPointerOverOut = n.processPointerOverOut.bind(n), n.onPointerOver = n.onPointerOver.bind(n), n.onTouchStart = n.onTouchStart.bind(n), n.processTouchStart = n.processTouchStart.bind(n), n.onTouchEnd = n.onTouchEnd.bind(n), n.processTouchEnd = n.processTouchEnd.bind(n), n.onTouchMove = n.onTouchMove.bind(n), n.processTouchMove = n.processTouchMove.bind(n), n.defaultCursorStyle = "inherit", n.currentCursorStyle = "inherit", n._tempPoint = new h.Point, n.resolution = 1, n.setTargetElement(n.renderer.view, n.renderer.resolution), n
    }
    return a(e, t), e.prototype.setTargetElement = function(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents()
    }, e.prototype.addEvents = function() {
      this.interactionDOMElement && (h.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none",
        this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (this.normalizeTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.normalizeMouseEvents && (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0))), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onMouseOver, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0)), this.eventsAdded = !0)
    }, e.prototype.removeEvents = function() {
      this.interactionDOMElement && (h.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (this.normalizeTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.normalizeMouseEvents && (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0))), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onMouseOver, !0), window.removeEventListener("mouseup", this.onMouseUp, !0), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
    }, e.prototype.update = function(t) {
      if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
        if (this.didMove) return void(this.didMove = !1);
        this.cursor = this.defaultCursorStyle, this.eventData._reset(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
      }
    }, e.prototype.dispatchEvent = function(t, e, r) {
      r.stopped || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r))
    }, e.prototype.mapPositionToPoint = function(t, e, r) {
      var i = void 0;
      i = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      var n = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
      t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) * n
    }, e.prototype.processInteractive = function(t, e, r, i, n) {
      if (!e || !e.visible) return !1;
      n = e.interactive || n;
      var o = !1,
        s = n;
      if (e.hitArea && (s = !1), i && e._mask && (e._mask.containsPoint(t) || (i = !1)), i && e.filterArea && (e.filterArea.contains(t.x, t.y) || (i = !1)), e.interactiveChildren && e.children)
        for (var a = e.children, u = a.length - 1; u >= 0; u--) {
          var h = a[u];
          if (this.processInteractive(t, h, r, i, s)) {
            if (!h.parent) continue;
            o = !0, s = !1, i = !1
          }
        }
      return n && (i && !o && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), o = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (o = e.containsPoint(t))), e.interactive && (o && !this.eventData.target && (this.eventData.target = e, this.mouse.target = e, this.pointer.target = e), r(e, o))), o
    }, e.prototype.onMouseDown = function(t) {
      this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData._reset(), this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0);
      var e = 2 === t.button || 3 === t.which;
      this.emit(e ? "rightdown" : "mousedown", this.eventData)
    }, e.prototype.processMouseDown = function(t, e) {
      var r = this.mouse.originalEvent,
        i = 2 === r.button || 3 === r.which;
      e && (t[i ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, i ? "rightdown" : "mousedown", this.eventData))
    }, e.prototype.onMouseUp = function(t) {
      this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData._reset(), this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0);
      var e = 2 === t.button || 3 === t.which;
      this.emit(e ? "rightup" : "mouseup", this.eventData)
    }, e.prototype.processMouseUp = function(t, e) {
      var r = this.mouse.originalEvent,
        i = 2 === r.button || 3 === r.which,
        n = i ? "_isRightDown" : "_isLeftDown";
      e ? (this.dispatchEvent(t, i ? "rightup" : "mouseup", this.eventData), t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightclick" : "click", this.eventData))) : t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightupoutside" : "mouseupoutside", this.eventData))
    }, e.prototype.onMouseMove = function(t) {
      this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData._reset(), this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = this.defaultCursorStyle, this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.emit("mousemove", this.eventData), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
    }, e.prototype.processMouseMove = function(t, e) {
      this.processMouseOverOut(t, e), this.moveWhenInside && !e || this.dispatchEvent(t, "mousemove", this.eventData)
    }, e.prototype.onMouseOut = function(t) {
      this.mouseOverRenderer = !1, this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData._reset(), this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = this.defaultCursorStyle, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1), this.emit("mouseout", this.eventData)
    }, e.prototype.processMouseOverOut = function(t, e) {
      e && this.mouseOverRenderer ? (t._mouseOver || (t._mouseOver = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._mouseOver && (t._mouseOver = !1, this.dispatchEvent(t, "mouseout", this.eventData))
    }, e.prototype.onMouseOver = function(t) {
      this.mouseOverRenderer = !0, this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData._reset(), this.emit("mouseover", this.eventData)
    }, e.prototype.onPointerDown = function(t) {
      this.normalizeToPointerData(t), this.pointer.originalEvent = t, this.eventData.data = this.pointer, this.eventData._reset(), this.mapPositionToPoint(this.pointer.global, t.clientX, t.clientY), this.autoPreventDefault && (this.normalizeMouseEvents || this.normalizeTouchEvents) && this.pointer.originalEvent.preventDefault(), this.processInteractive(this.pointer.global, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", this.eventData)
    }, e.prototype.processPointerDown = function(t, e) {
      e && (t._pointerDown = !0, this.dispatchEvent(t, "pointerdown", this.eventData))
    }, e.prototype.onPointerUp = function(t) {
      this.normalizeToPointerData(t), this.pointer.originalEvent = t, this.eventData.data = this.pointer, this.eventData._reset(), this.mapPositionToPoint(this.pointer.global, t.clientX, t.clientY), this.processInteractive(this.pointer.global, this.renderer._lastObjectRendered, this.processPointerUp, !0), this.emit("pointerup", this.eventData)
    }, e.prototype.processPointerUp = function(t, e) {
      e ? (this.dispatchEvent(t, "pointerup", this.eventData), t._pointerDown && (t._pointerDown = !1, this.dispatchEvent(t, "pointertap", this.eventData))) : t._pointerDown && (t._pointerDown = !1, this.dispatchEvent(t, "pointerupoutside", this.eventData))
    }, e.prototype.onPointerMove = function(t) {
      this.normalizeToPointerData(t), this.pointer.originalEvent = t, this.eventData.data = this.pointer, this.eventData._reset(), this.mapPositionToPoint(this.pointer.global, t.clientX, t.clientY), this.processInteractive(this.pointer.global, this.renderer._lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", this.eventData)
    }, e.prototype.processPointerMove = function(t, e) {
      this.pointer.originalEvent.changedTouches || this.processPointerOverOut(t, e), this.moveWhenInside && !e || this.dispatchEvent(t, "pointermove", this.eventData)
    }, e.prototype.onPointerOut = function(t) {
      this.normalizeToPointerData(t), this.pointer.originalEvent = t, this.eventData.data = this.pointer, this.eventData._reset(), this.mapPositionToPoint(this.pointer.global, t.clientX, t.clientY), this.processInteractive(this.pointer.global, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", this.eventData)
    }, e.prototype.processPointerOverOut = function(t, e) {
      e && this.mouseOverRenderer ? t._pointerOver || (t._pointerOver = !0, this.dispatchEvent(t, "pointerover", this.eventData)) : t._pointerOver && (t._pointerOver = !1, this.dispatchEvent(t, "pointerout", this.eventData))
    }, e.prototype.onPointerOver = function(t) {
      this.pointer.originalEvent = t, this.eventData.data = this.pointer, this.eventData._reset(), this.emit("pointerover", this.eventData)
    }, e.prototype.onTouchStart = function(t) {
      this.autoPreventDefault && t.preventDefault();
      for (var e = t.changedTouches, r = e.length, i = 0; i < r; i++) {
        var n = e[i],
          o = this.getTouchData(n);
        o.originalEvent = t, this.eventData.data = o, this.eventData._reset(), this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.emit("touchstart", this.eventData), this.returnTouchData(o)
      }
    }, e.prototype.processTouchStart = function(t, e) {
      e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData))
    }, e.prototype.onTouchEnd = function(t) {
      this.autoPreventDefault && t.preventDefault();
      for (var e = t.changedTouches, r = e.length, i = 0; i < r; i++) {
        var n = e[i],
          o = this.getTouchData(n);
        o.originalEvent = t, this.eventData.data = o, this.eventData._reset(), this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.emit("touchend", this.eventData), this.returnTouchData(o)
      }
    }, e.prototype.processTouchEnd = function(t, e) {
      e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData))
    }, e.prototype.onTouchMove = function(t) {
      this.autoPreventDefault && t.preventDefault();
      for (var e = t.changedTouches, r = e.length, i = 0; i < r; i++) {
        var n = e[i],
          o = this.getTouchData(n);
        o.originalEvent = t, this.eventData.data = o, this.eventData._reset(), this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside), this.emit("touchmove", this.eventData), this.returnTouchData(o)
      }
    }, e.prototype.processTouchMove = function(t, e) {
      this.moveWhenInside && !e || this.dispatchEvent(t, "touchmove", this.eventData)
    }, e.prototype.getTouchData = function(t) {
      var e = this.interactiveDataPool.pop() || new c["default"];
      return e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e
    }, e.prototype.returnTouchData = function(t) {
      this.interactiveDataPool.push(t)
    }, e.prototype.normalizeToPointerData = function(t) {
      this.normalizeTouchEvents && t.changedTouches ? ("undefined" == typeof t.button && (t.button = t.touches.length ? 1 : 0), "undefined" == typeof t.buttons && (t.buttons = t.touches.length ? 1 : 0), "undefined" == typeof t.isPrimary && (t.isPrimary = 1 === t.touches.length), "undefined" == typeof t.width && (t.width = t.changedTouches[0].radiusX || 1), "undefined" == typeof t.height && (t.height = t.changedTouches[0].radiusY || 1), "undefined" == typeof t.tiltX && (t.tiltX = 0), "undefined" == typeof t.tiltY && (t.tiltY = 0), "undefined" == typeof t.pointerType && (t.pointerType = "touch"), "undefined" == typeof t.pointerId && (t.pointerId = t.changedTouches[0].identifier || 0), "undefined" == typeof t.pressure && (t.pressure = t.changedTouches[0].force || .5), "undefined" == typeof t.rotation && (t.rotation = t.changedTouches[0].rotationAngle || 0), "undefined" == typeof t.clientX && (t.clientX = t.changedTouches[0].clientX), "undefined" == typeof t.clientY && (t.clientY = t.changedTouches[0].clientY), "undefined" == typeof t.pageX && (t.pageX = t.changedTouches[0].pageX), "undefined" == typeof t.pageY && (t.pageY = t.changedTouches[0].pageY), "undefined" == typeof t.screenX && (t.screenX = t.changedTouches[0].screenX), "undefined" == typeof t.screenY && (t.screenY = t.changedTouches[0].screenY), "undefined" == typeof t.layerX && (t.layerX = t.offsetX = t.clientX), "undefined" == typeof t.layerY && (t.layerY = t.offsetY = t.clientY)) : this.normalizeMouseEvents && ("undefined" == typeof t.isPrimary && (t.isPrimary = !0), "undefined" == typeof t.width && (t.width = 1), "undefined" == typeof t.height && (t.height = 1), "undefined" == typeof t.tiltX && (t.tiltX = 0), "undefined" == typeof t.tiltY && (t.tiltY = 0), "undefined" == typeof t.pointerType && (t.pointerType = "mouse"), "undefined" == typeof t.pointerId && (t.pointerId = 1), "undefined" == typeof t.pressure && (t.pressure = .5), "undefined" == typeof t.rotation && (t.rotation = 0))
    }, e.prototype.destroy = function() {
      this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onMouseOver = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
    }, e
  }(_["default"]);
  e["default"] = b, h.WebGLRenderer.registerPlugin("interaction", b), h.CanvasRenderer.registerPlugin("interaction", b)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  e.__esModule = !0;
  var n = r(117);
  Object.defineProperty(e, "InteractionData", {
    enumerable: !0,
    get: function() {
      return i(n)["default"]
    }
  });
  var o = r(239);
  Object.defineProperty(e, "InteractionManager", {
    enumerable: !0,
    get: function() {
      return i(o)["default"]
    }
  });
  var s = r(118);
  Object.defineProperty(e, "interactiveTarget", {
    enumerable: !0,
    get: function() {
      return i(s)["default"]
    }
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(19),
    u = i(a),
    h = r(147),
    l = r(10),
    c = i(l),
    f = r(122),
    d = i(f),
    p = r(121),
    _ = i(p),
    v = r(119),
    y = i(v),
    g = function(t) {
      function e(r, i) {
        n(this, e);
        var s = o(this, t.call(this, r, i));
        c["default"].call(s);
        for (var a = 0; a < e._pixiMiddleware.length; ++a) s.use(e._pixiMiddleware[a]());
        return s.onStart.add(function(t) {
          return s.emit("start", t)
        }), s.onProgress.add(function(t, e) {
          return s.emit("progress", t, e)
        }), s.onError.add(function(t, e, r) {
          return s.emit("error", t, e, r)
        }), s.onLoad.add(function(t, e) {
          return s.emit("load", t, e)
        }), s.onComplete.add(function(t, e) {
          return s.emit("complete", t, e)
        }), s
      }
      return s(e, t), e.addPixiMiddleware = function(t) {
        e._pixiMiddleware.push(t)
      }, e
    }(u["default"]);
  e["default"] = g;
  for (var m in c["default"].prototype) g.prototype[m] = c["default"].prototype[m];
  g._pixiMiddleware = [h.blobMiddlewareFactory, d["default"], _["default"], y["default"]];
  var b = u["default"].Resource;
  b.setExtensionXhrType("fnt", b.XHR_RESPONSE_TYPE.DOCUMENT)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = function() {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e
      }
    }(),
    u = r(123),
    h = i(u),
    l = 10,
    c = function(t) {
      function e(r, i, s, a, u) {
        n(this, e);
        var h = o(this, t.call(this, r, 4, 4)),
          c = h.uvs;
        return c[6] = c[14] = c[22] = c[30] = 1, c[25] = c[27] = c[29] = c[31] = 1, h._origWidth = r.width, h._origHeight = r.height, h._uvw = 1 / h._origWidth, h._uvh = 1 / h._origHeight, h.width = r.width, h.height = r.height, c[2] = c[10] = c[18] = c[26] = h._uvw * i, c[4] = c[12] = c[20] = c[28] = 1 - h._uvw * a, c[9] = c[11] = c[13] = c[15] = h._uvh * s, c[17] = c[19] = c[21] = c[23] = 1 - h._uvh * u, h.leftWidth = "undefined" != typeof i ? i : l, h.rightWidth = "undefined" != typeof a ? a : l, h.topHeight = "undefined" != typeof s ? s : l, h.bottomHeight = "undefined" != typeof u ? u : l, h
      }
      return s(e, t), e.prototype.updateHorizontalVertices = function() {
        var t = this.vertices;
        t[9] = t[11] = t[13] = t[15] = this._topHeight, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight, t[25] = t[27] = t[29] = t[31] = this._height
      }, e.prototype.updateVerticalVertices = function() {
        var t = this.vertices;
        t[2] = t[10] = t[18] = t[26] = this._leftWidth, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth, t[6] = t[14] = t[22] = t[30] = this._width
      }, e.prototype._renderCanvas = function(t) {
        var e = t.context;
        e.globalAlpha = this.worldAlpha;
        var r = this.worldTransform,
          i = t.resolution;
        t.roundPixels ? e.setTransform(r.a * i, r.b * i, r.c * i, r.d * i, r.tx * i | 0, r.ty * i | 0) : e.setTransform(r.a * i, r.b * i, r.c * i, r.d * i, r.tx * i, r.ty * i);
        var n = this._texture.baseTexture,
          o = n.source,
          s = n.width,
          a = n.height;
        this.drawSegment(e, o, s, a, 0, 1, 10, 11), this.drawSegment(e, o, s, a, 2, 3, 12, 13), this.drawSegment(e, o, s, a, 4, 5, 14, 15), this.drawSegment(e, o, s, a, 8, 9, 18, 19), this.drawSegment(e, o, s, a, 10, 11, 20, 21), this.drawSegment(e, o, s, a, 12, 13, 22, 23), this.drawSegment(e, o, s, a, 16, 17, 26, 27), this.drawSegment(e, o, s, a, 18, 19, 28, 29), this.drawSegment(e, o, s, a, 20, 21, 30, 31)
      }, e.prototype.drawSegment = function(t, e, r, i, n, o, s, a) {
        var u = this.uvs,
          h = this.vertices,
          l = (u[s] - u[n]) * r,
          c = (u[a] - u[o]) * i,
          f = h[s] - h[n],
          d = h[a] - h[o];
        l < 1 && (l = 1), c < 1 && (c = 1), f < 1 && (f = 1), d < 1 && (d = 1), t.drawImage(e, u[n] * r, u[o] * i, l, c, h[n], h[o], f, d)
      }, a(e, [{
        key: "width",
        get: function() {
          return this._width
        },
        set: function(t) {
          this._width = t, this.updateVerticalVertices()
        }
      }, {
        key: "height",
        get: function() {
          return this._height
        },
        set: function(t) {
          this._height = t, this.updateHorizontalVertices()
        }
      }, {
        key: "leftWidth",
        get: function() {
          return this._leftWidth
        },
        set: function(t) {
          this._leftWidth = t;
          var e = this.uvs,
            r = this.vertices;
          e[2] = e[10] = e[18] = e[26] = this._uvw * t, r[2] = r[10] = r[18] = r[26] = t, this.dirty = !0
        }
      }, {
        key: "rightWidth",
        get: function() {
          return this._rightWidth
        },
        set: function(t) {
          this._rightWidth = t;
          var e = this.uvs,
            r = this.vertices;
          e[4] = e[12] = e[20] = e[28] = 1 - this._uvw * t, r[4] = r[12] = r[20] = r[28] = this._width - t, this.dirty = !0
        }
      }, {
        key: "topHeight",
        get: function() {
          return this._topHeight
        },
        set: function(t) {
          this._topHeight = t;
          var e = this.uvs,
            r = this.vertices;
          e[9] = e[11] = e[13] = e[15] = this._uvh * t, r[9] = r[11] = r[13] = r[15] = t, this.dirty = !0
        }
      }, {
        key: "bottomHeight",
        get: function() {
          return this._bottomHeight
        },
        set: function(t) {
          this._bottomHeight = t;
          var e = this.uvs,
            r = this.vertices;
          e[17] = e[19] = e[21] = e[23] = 1 - this._uvh * t, r[17] = r[19] = r[21] = r[23] = this._height - t, this.dirty = !0
        }
      }]), e
    }(h["default"]);
  e["default"] = c
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = r(27),
    h = n(u),
    l = r(1),
    c = i(l),
    f = function(t) {
      function e(r, i) {
        o(this, e);
        var n = s(this, t.call(this, r));
        return n.points = i, n.vertices = new Float32Array(4 * i.length), n.uvs = new Float32Array(4 * i.length), n.colors = new Float32Array(2 * i.length), n.indices = new Uint16Array(2 * i.length), n._ready = !0, n.refresh(), n
      }
      return a(e, t), e.prototype.refresh = function() {
        var t = this.points;
        if (!(t.length < 1) && this._texture._uvs) {
          this.vertices.length / 4 !== t.length && (this.vertices = new Float32Array(4 * t.length), this.uvs = new Float32Array(4 * t.length), this.colors = new Float32Array(2 * t.length), this.indices = new Uint16Array(2 * t.length));
          var e = this.uvs,
            r = this.indices,
            i = this.colors,
            n = this._texture._uvs,
            o = new c.Point(n.x0, n.y0),
            s = new c.Point(n.x2 - n.x0, n.y2 - n.y0);
          e[0] = 0 + o.x, e[1] = 0 + o.y, e[2] = 0 + o.x, e[3] = Number(s.y) + o.y, i[0] = 1, i[1] = 1, r[0] = 0, r[1] = 1;
          for (var a = t.length, u = 1; u < a; u++) {
            var h = 4 * u,
              l = u / (a - 1);
            e[h] = l * s.x + o.x, e[h + 1] = 0 + o.y, e[h + 2] = l * s.x + o.x, e[h + 3] = Number(s.y) + o.y, h = 2 * u, i[h] = 1, i[h + 1] = 1, h = 2 * u, r[h] = h, r[h + 1] = h + 1
          }
          this.dirty++, this.indexDirty++
        }
      }, e.prototype._onTextureUpdate = function() {
        t.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
      }, e.prototype.updateTransform = function() {
        var t = this.points;
        if (!(t.length < 1)) {
          for (var e = t[0], r = void 0, i = 0, n = 0, o = this.vertices, s = t.length, a = 0; a < s; a++) {
            var u = t[a],
              h = 4 * a;
            r = a < t.length - 1 ? t[a + 1] : u, n = -(r.x - e.x), i = r.y - e.y;
            var l = 10 * (1 - a / (s - 1));
            l > 1 && (l = 1);
            var c = Math.sqrt(i * i + n * n),
              f = this._texture.height / 2;
            i /= c, n /= c, i *= f, n *= f, o[h] = u.x + i, o[h + 1] = u.y + n, o[h + 2] = u.x - i, o[h + 3] = u.y - n, e = u
          }
          this.containerUpdateTransform()
        }
      }, e
    }(h["default"]);
  e["default"] = f
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var s = r(1),
    a = n(s),
    u = r(27),
    h = i(u),
    l = function() {
      function t(e) {
        o(this, t), this.renderer = e
      }
      return t.prototype.render = function(t) {
        var e = this.renderer,
          r = e.context,
          i = t.worldTransform,
          n = e.resolution;
        e.roundPixels ? r.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n | 0, i.ty * n | 0) : r.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n), e.setBlendMode(t.blendMode), t.drawMode === h["default"].DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(t) : this._renderTriangles(t)
      }, t.prototype._renderTriangleMesh = function(t) {
        for (var e = t.vertices.length / 2, r = 0; r < e - 2; r++) {
          var i = 2 * r;
          this._renderDrawTriangle(t, i, i + 2, i + 4)
        }
      }, t.prototype._renderTriangles = function(t) {
        for (var e = t.indices, r = e.length, i = 0; i < r; i += 3) {
          var n = 2 * e[i],
            o = 2 * e[i + 1],
            s = 2 * e[i + 2];
          this._renderDrawTriangle(t, n, o, s)
        }
      }, t.prototype._renderDrawTriangle = function(t, e, r, i) {
        var n = this.renderer.context,
          o = t.uvs,
          s = t.vertices,
          a = t._texture;
        if (a.valid) {
          var u = a.baseTexture,
            h = u.source,
            l = u.width,
            c = u.height,
            f = o[e] * u.width,
            d = o[r] * u.width,
            p = o[i] * u.width,
            _ = o[e + 1] * u.height,
            v = o[r + 1] * u.height,
            y = o[i + 1] * u.height,
            g = s[e],
            m = s[r],
            b = s[i],
            x = s[e + 1],
            T = s[r + 1],
            w = s[i + 1];
          if (t.canvasPadding > 0) {
            var E = t.canvasPadding / t.worldTransform.a,
              O = t.canvasPadding / t.worldTransform.d,
              P = (g + m + b) / 3,
              S = (x + T + w) / 3,
              M = g - P,
              C = x - S,
              R = Math.sqrt(M * M + C * C);
            g = P + M / R * (R + E), x = S + C / R * (R + O), M = m - P, C = T - S, R = Math.sqrt(M * M + C * C), m = P + M / R * (R + E), T = S + C / R * (R + O), M = b - P, C = w - S, R = Math.sqrt(M * M + C * C), b = P + M / R * (R + E), w = S + C / R * (R + O)
          }
          n.save(), n.beginPath(), n.moveTo(g, x), n.lineTo(m, T), n.lineTo(b, w), n.closePath(), n.clip();
          var A = f * v + _ * p + d * y - v * p - _ * d - f * y,
            D = g * v + _ * b + m * y - v * b - _ * m - g * y,
            I = f * m + g * p + d * b - m * p - g * d - f * b,
            L = f * v * b + _ * m * p + g * d * y - g * v * p - _ * d * b - f * m * y,
            k = x * v + _ * w + T * y - v * w - _ * T - x * y,
            N = f * T + x * p + d * w - T * p - x * d - f * w,
            j = f * v * w + _ * T * p + x * d * y - x * v * p - _ * d * w - f * T * y;
          n.transform(D / A, k / A, I / A, N / A, L / A, j / A), n.drawImage(h, 0, 0, l * u.resolution, c * u.resolution, 0, 0, l, c), n.restore()
        }
      }, t.prototype.renderMeshFlat = function(t) {
        var e = this.renderer.context,
          r = t.vertices,
          i = r.length / 2;
        e.beginPath();
        for (var n = 1; n < i - 2; ++n) {
          var o = 2 * n,
            s = r[o],
            a = r[o + 1],
            u = r[o + 2],
            h = r[o + 3],
            l = r[o + 4],
            c = r[o + 5];
          e.moveTo(s, a), e.lineTo(u, h), e.lineTo(l, c)
        }
        e.fillStyle = "#FF0000", e.fill(), e.closePath()
      }, t.prototype.destroy = function() {
        this.renderer = null
      }, t
    }();
  e["default"] = l, a.CanvasRenderer.registerPlugin("mesh", l)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = r(1),
    h = n(u),
    l = r(6),
    c = i(l),
    f = r(27),
    d = i(f),
    p = (r(7), function(t) {
      function e(r) {
        o(this, e);
        var i = s(this, t.call(this, r));
        return i.shader = null, i
      }
      return a(e, t), e.prototype.onContextChange = function() {
        var t = this.renderer.gl;
        this.shader = new h.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n}\n", "varying vec2 vTextureCoord;\nuniform float alpha;\nuniform vec3 tint;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);\n}\n")
      }, e.prototype.render = function(t) {
        var e = this.renderer,
          r = e.gl,
          i = t._texture;
        if (i.valid) {
          var n = t._glDatas[e.CONTEXT_UID];
          n || (e.bindVao(null), n = {
            shader: this.shader,
            vertexBuffer: c["default"].GLBuffer.createVertexBuffer(r, t.vertices, r.STREAM_DRAW),
            uvBuffer: c["default"].GLBuffer.createVertexBuffer(r, t.uvs, r.STREAM_DRAW),
            indexBuffer: c["default"].GLBuffer.createIndexBuffer(r, t.indices, r.STATIC_DRAW),
            vao: null,
            dirty: t.dirty,
            indexDirty: t.indexDirty
          }, n.vao = new c["default"].VertexArrayObject(r).addIndex(n.indexBuffer).addAttribute(n.vertexBuffer, n.shader.attributes.aVertexPosition, r.FLOAT, !1, 8, 0).addAttribute(n.uvBuffer, n.shader.attributes.aTextureCoord, r.FLOAT, !1, 8, 0), t._glDatas[e.CONTEXT_UID] = n), t.dirty !== n.dirty && (n.dirty = t.dirty, n.uvBuffer.upload(t.uvs)), t.indexDirty !== n.indexDirty && (n.indexDirty = t.indexDirty, n.indexBuffer.upload(t.indices)), n.vertexBuffer.upload(t.vertices), e.bindShader(n.shader), n.shader.uniforms.uSampler = e.bindTexture(i), e.state.setBlendMode(t.blendMode), n.shader.uniforms.translationMatrix = t.worldTransform.toArray(!0), n.shader.uniforms.alpha = t.worldAlpha, n.shader.uniforms.tint = t.tintRgb;
          var o = t.drawMode === d["default"].DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
          e.bindVao(n.vao), n.vao.draw(o, t.indices.length, 0)
        }
      }, e
    }(h.ObjectRenderer));
  e["default"] = p, h.WebGLRenderer.registerPlugin("mesh", p)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(1),
    u = i(a),
    h = function(t) {
      function e() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500,
          i = arguments[1],
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384;
        n(this, e);
        var a = o(this, t.call(this)),
          h = 16384;
        return s > h && (s = h), s > r && (s = r), a._properties = [!1, !0, !1, !1, !1], a._maxSize = r, a._batchSize = s, a._glBuffers = {}, a._bufferToUpdate = 0, a.interactiveChildren = !1, a.blendMode = u.BLEND_MODES.NORMAL, a.roundPixels = !0, a.baseTexture = null, a.setProperties(i), a
      }
      return s(e, t), e.prototype.setProperties = function(t) {
        t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
      }, e.prototype.updateTransform = function() {
        this.displayObjectUpdateTransform()
      }, e.prototype.renderWebGL = function(t) {
        var e = this;
        this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function() {
          return e.onChildrenChange(0)
        })), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
      }, e.prototype.onChildrenChange = function(t) {
        var e = Math.floor(t / this._batchSize);
        e < this._bufferToUpdate && (this._bufferToUpdate = e)
      }, e.prototype.renderCanvas = function(t) {
        if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
          var e = t.context,
            r = this.worldTransform,
            i = !0,
            n = 0,
            o = 0,
            s = 0,
            a = 0,
            u = t.blendModes[this.blendMode];
          u !== e.globalCompositeOperation && (e.globalCompositeOperation = u), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
          for (var h = 0; h < this.children.length; ++h) {
            var l = this.children[h];
            if (l.visible) {
              var c = l._texture.frame;
              if (e.globalAlpha = this.worldAlpha * l.alpha, l.rotation % (2 * Math.PI) === 0) i && (e.setTransform(r.a, r.b, r.c, r.d, r.tx * t.resolution, r.ty * t.resolution), i = !1), n = l.anchor.x * (-c.width * l.scale.x) + l.position.x + .5, o = l.anchor.y * (-c.height * l.scale.y) + l.position.y + .5, s = c.width * l.scale.x, a = c.height * l.scale.y;
              else {
                i || (i = !0), l.displayObjectUpdateTransform();
                var f = l.worldTransform;
                t.roundPixels ? e.setTransform(f.a, f.b, f.c, f.d, f.tx * t.resolution | 0, f.ty * t.resolution | 0) : e.setTransform(f.a, f.b, f.c, f.d, f.tx * t.resolution, f.ty * t.resolution), n = l.anchor.x * -c.width + .5, o = l.anchor.y * -c.height + .5, s = c.width, a = c.height
              }
              var d = l._texture.baseTexture.resolution;
              e.drawImage(l._texture.baseTexture.source, c.x * d, c.y * d, c.width * d, c.height * d, n * d, o * d, s * d, a * d)
            }
          }
        }
      }, e.prototype.destroy = function(e) {
        if (t.prototype.destroy.call(this, e), this._buffers)
          for (var r = 0; r < this._buffers.length; ++r) this._buffers[r].destroy();
        this._properties = null, this._buffers = null
      }, e
    }(u.Container);
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var o = r(6),
    s = i(o),
    a = r(66),
    u = i(a),
    h = function() {
      function t(e, r, i, o) {
        n(this, t), this.gl = e, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = o, this.dynamicProperties = [], this.staticProperties = [];
        for (var s = 0; s < r.length; ++s) {
          var a = r[s];
          a = {
            attribute: a.attribute,
            size: a.size,
            uploadFunction: a.uploadFunction,
            offset: a.offset
          }, i[s] ? this.dynamicProperties.push(a) : this.staticProperties.push(a)
        }
        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
      }
      return t.prototype.initBuffers = function() {
        var t = this.gl,
          e = 0;
        this.indices = (0, u["default"])(this.size), this.indexBuffer = s["default"].GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.dynamicStride = 0;
        for (var r = 0; r < this.dynamicProperties.length; ++r) {
          var i = this.dynamicProperties[r];
          i.offset = e, e += i.size, this.dynamicStride += i.size
        }
        this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = s["default"].GLBuffer.createVertexBuffer(t, this.dynamicData, t.STREAM_DRAW);
        var n = 0;
        this.staticStride = 0;
        for (var o = 0; o < this.staticProperties.length; ++o) {
          var a = this.staticProperties[o];
          a.offset = n, n += a.size, this.staticStride += a.size
        }
        this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = s["default"].GLBuffer.createVertexBuffer(t, this.staticData, t.STATIC_DRAW), this.vao = new s["default"].VertexArrayObject(t).addIndex(this.indexBuffer);
        for (var h = 0; h < this.dynamicProperties.length; ++h) {
          var l = this.dynamicProperties[h];
          this.vao.addAttribute(this.dynamicBuffer, l.attribute, t.FLOAT, !1, 4 * this.dynamicStride, 4 * l.offset)
        }
        for (var c = 0; c < this.staticProperties.length; ++c) {
          var f = this.staticProperties[c];
          this.vao.addAttribute(this.staticBuffer, f.attribute, t.FLOAT, !1, 4 * this.staticStride, 4 * f.offset)
        }
      }, t.prototype.uploadDynamic = function(t, e, r) {
        for (var i = 0; i < this.dynamicProperties.length; i++) {
          var n = this.dynamicProperties[i];
          n.uploadFunction(t, e, r, this.dynamicData, this.dynamicStride, n.offset)
        }
        this.dynamicBuffer.upload()
      }, t.prototype.uploadStatic = function(t, e, r) {
        for (var i = 0; i < this.staticProperties.length; i++) {
          var n = this.staticProperties[i];
          n.uploadFunction(t, e, r, this.staticData, this.staticStride, n.offset)
        }
        this.staticBuffer.upload()
      }, t.prototype.destroy = function() {
        this.dynamicProperties = null, this.dynamicData = null, this.dynamicBuffer.destroy(), this.staticProperties = null, this.staticData = null, this.staticBuffer.destroy()
      }, t
    }();
  e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var u = r(1),
    h = n(u),
    l = r(249),
    c = i(l),
    f = r(247),
    d = i(f),
    p = function(t) {
      function e(r) {
        o(this, e);
        var i = s(this, t.call(this, r));
        return i.shader = null, i.indexBuffer = null, i.properties = null, i.tempMatrix = new h.Matrix, i.CONTEXT_UID = 0, i
      }
      return a(e, t), e.prototype.onContextChange = function() {
        var t = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new c["default"](t), this.properties = [{
          attribute: this.shader.attributes.aVertexPosition,
          size: 2,
          uploadFunction: this.uploadVertices,
          offset: 0
        }, {
          attribute: this.shader.attributes.aPositionCoord,
          size: 2,
          uploadFunction: this.uploadPosition,
          offset: 0
        }, {
          attribute: this.shader.attributes.aRotation,
          size: 1,
          uploadFunction: this.uploadRotation,
          offset: 0
        }, {
          attribute: this.shader.attributes.aTextureCoord,
          size: 2,
          uploadFunction: this.uploadUvs,
          offset: 0
        }, {
          attribute: this.shader.attributes.aColor,
          size: 1,
          uploadFunction: this.uploadAlpha,
          offset: 0
        }]
      }, e.prototype.start = function() {
        this.renderer.bindShader(this.shader)
      }, e.prototype.render = function(t) {
        var e = t.children,
          r = t._maxSize,
          i = t._batchSize,
          n = this.renderer,
          o = e.length;
        if (0 !== o) {
          o > r && (o = r);
          var s = t._glBuffers[n.CONTEXT_UID];
          s || (s = t._glBuffers[n.CONTEXT_UID] = this.generateBuffers(t)), this.renderer.setBlendMode(t.blendMode);
          var a = n.gl,
            u = t.worldTransform.copy(this.tempMatrix);
          u.prepend(n._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = u.toArray(!0), this.shader.uniforms.uAlpha = t.worldAlpha;
          var h = e[0]._texture.baseTexture;
          this.shader.uniforms.uSampler = n.bindTexture(h);
          for (var l = 0, c = 0; l < o; l += i, c += 1) {
            var f = o - l;
            f > i && (f = i);
            var d = s[c];
            d.uploadDynamic(e, l, f), t._bufferToUpdate === c && (d.uploadStatic(e, l, f), t._bufferToUpdate = c + 1), n.bindVao(d.vao), d.vao.draw(a.TRIANGLES, 6 * f)
          }
        }
      }, e.prototype.generateBuffers = function(t) {
        for (var e = this.renderer.gl, r = [], i = t._maxSize, n = t._batchSize, o = t._properties, s = 0; s < i; s += n) r.push(new d["default"](e, this.properties, o, n));
        return r
      }, e.prototype.uploadVertices = function(t, e, r, i, n, o) {
        for (var s = 0, a = 0, u = 0, h = 0, l = 0; l < r; ++l) {
          var c = t[e + l],
            f = c._texture,
            d = c.scale.x,
            p = c.scale.y,
            _ = f.trim,
            v = f.orig;
          _ ? (a = _.x - c.anchor.x * v.width, s = a + _.width, h = _.y - c.anchor.y * v.height, u = h + _.height) : (s = v.width * (1 - c.anchor.x), a = v.width * -c.anchor.x, u = v.height * (1 - c.anchor.y), h = v.height * -c.anchor.y), i[o] = a * d, i[o + 1] = h * p, i[o + n] = s * d, i[o + n + 1] = h * p, i[o + 2 * n] = s * d, i[o + 2 * n + 1] = u * p, i[o + 3 * n] = a * d, i[o + 3 * n + 1] = u * p, o += 4 * n
        }
      }, e.prototype.uploadPosition = function(t, e, r, i, n, o) {
        for (var s = 0; s < r; s++) {
          var a = t[e + s].position;
          i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n
        }
      }, e.prototype.uploadRotation = function(t, e, r, i, n, o) {
        for (var s = 0; s < r; s++) {
          var a = t[e + s].rotation;
          i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
        }
      }, e.prototype.uploadUvs = function(t, e, r, i, n, o) {
        for (var s = 0; s < r; ++s) {
          var a = t[e + s]._texture._uvs;
          a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n)
        }
      }, e.prototype.uploadAlpha = function(t, e, r, i, n, o) {
        for (var s = 0; s < r; s++) {
          var a = t[e + s].alpha;
          i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n
        }
      }, e.prototype.destroy = function() {
        this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), t.prototype.destroy.call(this), this.shader.destroy(), this.indices = null, this.tempMatrix = null
      }, e
    }(h.ObjectRenderer);
  e["default"] = p, h.WebGLRenderer.registerPlugin("particle", p)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  e.__esModule = !0;
  var a = r(23),
    u = i(a),
    h = function(t) {
      function e(r) {
        return n(this, e), o(this, t.call(this, r, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n")))
      }
      return s(e, t), e
    }(u["default"]);
  e["default"] = h
}, function(t, e) {
  "use strict";
  Math.sign || (Math.sign = function(t) {
    return t = Number(t), 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
  })
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(180),
    o = i(n);
  Object.assign || (Object.assign = o["default"])
}, function(t, e, r) {
  "use strict";
  r(251), r(253), r(250), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
}, function(t, e) {
  (function(t) {
    "use strict";
    var e = 16;
    Date.now && Date.prototype.getTime || (Date.now = function() {
      return (new Date).getTime()
    }), t.performance && t.performance.now || ! function() {
      var e = Date.now();
      t.performance || (t.performance = {}), t.performance.now = function() {
        return Date.now() - e
      }
    }();
    for (var r = Date.now(), i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n) {
      var o = i[n];
      t.requestAnimationFrame = t[o + "RequestAnimationFrame"], t.cancelAnimationFrame = t[o + "CancelAnimationFrame"] || t[o + "CancelRequestAnimationFrame"]
    }
    t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
      if ("function" != typeof t) throw new TypeError(t + "is not a function");
      var i = Date.now(),
        n = e + r - i;
      return n < 0 && (n = 0), r = i, setTimeout(function() {
        r = Date.now(), t(performance.now())
      }, n)
    }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
      return clearTimeout(t)
    })
  }).call(e, function() {
    return this
  }())
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function u(t, e) {
    if (e instanceof c.BaseTexture) {
      var r = e.source,
        i = 0 === r.width ? t.canvas.width : Math.min(t.canvas.width, r.width),
        n = 0 === r.height ? t.canvas.height : Math.min(t.canvas.height, r.height);
      return t.ctx.drawImage(r, 0, 0, i, n, 0, 0, t.canvas.width, t.canvas.height), !0
    }
    return !1
  }

  function h(t, e) {
    if (t instanceof c.BaseTexture) return e.indexOf(t) === -1 && e.push(t), !0;
    if (t._texture && t._texture instanceof c.Texture) {
      var r = t._texture.baseTexture;
      return e.indexOf(r) === -1 && e.push(r), !0
    }
    return !1
  }
  e.__esModule = !0;
  var l = r(1),
    c = n(l),
    f = r(68),
    d = i(f),
    p = 16,
    _ = function(t) {
      function e(r) {
        o(this, e);
        var i = s(this, t.call(this, r));
        return i.uploadHookHelper = i, i.canvas = document.createElement("canvas"), i.canvas.width = p, i.canvas.height = p, i.ctx = i.canvas.getContext("2d"), i.register(h, u), i
      }
      return a(e, t), e.prototype.destroy = function() {
        t.prototype.destroy.call(this), this.ctx = null, this.canvas = null
      }, e
    }(d["default"]);
  e["default"] = _, c.CanvasRenderer.registerPlugin("prepare", _)
}, function(t, e) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  e.__esModule = !0;
  var i = function() {
    function t(e) {
      r(this, t), this.maxMilliseconds = e, this.frameStart = 0
    }
    return t.prototype.beginFrame = function() {
      this.frameStart = Date.now()
    }, t.prototype.allowedToUpload = function() {
      return Date.now() - this.frameStart < this.maxMilliseconds
    }, t
  }();
  e["default"] = i
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }

  function n(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e["default"] = t, e
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function u(t, e) {
    return e instanceof d.BaseTexture && (e._glTextures[t.CONTEXT_UID] || t.textureManager.updateTexture(e), !0)
  }

  function h(t, e) {
    return e instanceof d.Graphics && ((e.dirty || e.clearDirty || !e._webGL[t.plugins.graphics.CONTEXT_UID]) && t.plugins.graphics.updateGraphics(e), !0)
  }

  function l(t, e) {
    if (t instanceof d.BaseTexture) return e.indexOf(t) === -1 && e.push(t), !0;
    if (t._texture && t._texture instanceof d.Texture) {
      var r = t._texture.baseTexture;
      return e.indexOf(r) === -1 && e.push(r), !0
    }
    return !1
  }

  function c(t, e) {
    return t instanceof d.Graphics && (e.push(t), !0)
  }
  e.__esModule = !0;
  var f = r(1),
    d = n(f),
    p = r(68),
    _ = i(p),
    v = function(t) {
      function e(r) {
        o(this, e);
        var i = s(this, t.call(this, r));
        return i.uploadHookHelper = i.renderer, i.register(l, u).register(c, h), i
      }
      return a(e, t), e
    }(_["default"]);
  e["default"] = v, d.WebGLRenderer.registerPlugin("prepare", v)
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(14),
    a = r(9),
    u = a.TweenMax,
    h = function() {
      function t(e) {
        (0, o["default"])(this, t), this.options = e, this.container = new s.Container, this.bgColorImg = "https://zos.alipayobjects.com/rmsportal/RUJSKKNfeLDCQIcnXaxn.png", this.left = null, this.center = null, this.right = null, this.rightTop = null, this.speed = [60, -40, 30, -40], this.startXArr = []
      }
      return t.prototype.init = function() {
        this.left = this.createTriangle(1210, 438), this.container.addChild(this.left), this.center = this.createTriangle(600, 218), this.container.addChild(this.center), this.right = this.createTriangle(987, 358), this.container.addChild(this.right), this.rightTop = this.createTriangle(504, 183), this.container.addChild(this.rightTop), this.rightTop.rotation = Math.PI, this.left.x = .05 * -this.options.w, this.left.y = this.options.h - 219, this.center.x = .3 * this.options.w, this.center.y = this.options.h - 109, this.right.x = .55 * this.options.w, this.right.y = this.options.h - 179, this.rightTop.x = .8 * this.options.w, this.rightTop.y = 91.5
      }, t.prototype.createTriangle = function(t, e) {
        var r = new s.Container,
          i = new s.Sprite.fromImage(this.bgColorImg),
          n = new s.Graphics;
        return n.beginFill(4095, .6), n.moveTo(0, -e / 2), n.lineTo(t / 2, e / 2), n.lineTo(-t / 2, e / 2), n.endFill(), i.height = e, i.width = t, i.x = -t / 2, i.y = -e / 2, i.mask = n, r.addChild(n), r.addChild(i), r
      }, t.prototype.addMouseAnim = function() {
        var t = this,
          e = this.container.children;
        window.addEventListener("mousemove", function(r) {
          var i = r.pageX - t.options.w / 2;
          e.forEach(function(e, r) {
            var n = t.startXArr[r] + i / t.speed[r];
            u.to(e, .5, {
              x: n
            })
          })
        })
      }, t.prototype.animate = function() {
        this.container.children.forEach(function(t) {
          u.from(t, .5, {
            delay: Math.random() + 2,
            alpha: 0
          })
        })
      }, t.prototype.resize = function(t) {
        this.options = t, this.startXArr = [.05 * -this.options.w, .3 * this.options.w, .55 * this.options.w, .8 * this.options.w], u.to(this.left, .45, {
          x: .05 * -this.options.w
        }), u.to(this.center, .45, {
          x: .3 * this.options.w
        }), u.to(this.right, .45, {
          x: .55 * this.options.w
        }), u.to(this.rightTop, .45, {
          x: .8 * this.options.w,
          onComplete: this.addMouseAnim.bind(this)
        })
      }, t
    }();
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(40),
    a = i(s),
    u = r(39),
    h = i(u),
    l = r(9),
    c = r(14),
    f = r(129),
    d = l.TweenMax,
    p = function(t) {
      function e() {
        (0, o["default"])(this, e);
        var r = (0, a["default"])(this, t.apply(this, arguments));
        return r.pointLineContainer = new c.Container, r.color = 2270681, r
      }
      return (0, h["default"])(e, t), e.prototype.startAnim = function() {
        var t = this.ringObj.lineNumber;
        t && this.createPointLentElement(), this.pointAnim();
        var e = this.pointLineContainer.children;
        e.forEach(function(t) {
          var e = new l.TimelineMax;
          e.to(t, .5, {
            alpha: 1,
            delay: 2 * Math.random() + .5 + 2
          }).to(t, 360 * Math.random() + 420, {
            rotation: 360,
            repeat: -1,
            ease: l.Power0.easeNone
          })
        }), d.to([this.bgContainer, this.lineContainer], .8, {
          delay: 2,
          alpha: 1
        }), d.from(this.bgContainer.scale, .8, {
          x: .8,
          y: .8,
          delay: 2
        })
      }, e.prototype.createPointLentElement = function() {
        for (var t = this.ringObj.lineNumber, e = 0; e < t; e++) {
          var r = this.getCirclePoint(!0),
            i = new c.Graphics;
          i.lineStyle(2 * Math.random() + 1, this.color, .75);
          var n = r.angle * this.PI;
          i.arc(0, 0, r.r, n, (45 * Math.random() + 15) * this.PI + n), i.positionData = r, i.alpha = 0, i.blendMode = c.BLEND_MODES.ADD, this.pointLineContainer.addChild(i)
        }
        this.container.addChild(this.pointLineContainer)
      }, e
    }(f["default"]);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = p
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(14),
    a = r(9),
    u = a.TweenMax,
    h = function() {
      function t(e, r) {
        (0, o["default"])(this, t), this.width = e, this.height = r, this.container = new s.Container, this.lineChildren = [], this.phase = 0, this.number = 2, this.attenuationArray = [2, 5, -2, -6], this.offset = [{
          x: 0,
          y: 0,
          noise: 0,
          stages: 3,
          phase: 0,
          alpha: .3,
          color: 16777215
        }, {
          x: 0,
          y: 0,
          noise: 0,
          stages: 3,
          phase: 0,
          alpha: .5,
          color: 6852765
        }, {
          x: 0,
          y: 0,
          noise: 0,
          stages: 2,
          phase: 0,
          alpha: .35,
          color: 5725630
        }, {
          x: 0,
          y: 0,
          noise: 0,
          stages: 4,
          phase: 0,
          alpha: .3,
          color: 9261008
        }]
      }
      return t.prototype.init = function() {
        for (var t = 0; t < this.attenuationArray.length; t++) {
          var e = new s.Graphics;
          this.lineChildren.push(e), e.blendMode = s.BLEND_MODES.ADD, this.drawLine(this.attenuationArray[t], e, this.offset[t]), this.container.addChild(e)
        }
      }, t.prototype.globalAttenuationFn = function(t, e) {
        return Math.pow(4 * t / (4 * t + Math.pow(e, 4)), 2 * t)
      }, t.prototype.drawLine = function(t, e, r) {
        e.clear();
        var i = Math.random() + 1;
        e.lineStyle(i, r.color, r.alpha);
        var n = this.number,
          o = this.width - 2 * r.x,
          s = this.height;
        e.moveTo(r.x, r.y + s / 2);
        for (var a = -n; a < n; a += .01) {
          var u = o * ((a + n) / (2 * n)) + r.x,
            h = s / 2 + r.noise * this.globalAttenuationFn(n, a) * (1 / t) * Math.sin(r.stages * a - r.phase) + r.y;
          a < .45 * -n ? e.lineStyle(i, r.color, r.alpha * (a + n) / (.55 * n)) : a > .55 * n ? e.lineStyle(i, r.color, r.alpha * (n - a) / (.45 * n)) : e.lineStyle(i, r.color, r.alpha), e.lineTo(u, h)
        }
      }, t.prototype.animate = function() {
        var t = this,
          e = 1e4 * Math.random() + 8e4 | 0;
        this.lineChildren.forEach(function(r, i) {
          var n = t.offset[i],
            o = new a.TimelineMax;
          o.from(r, .3, {
            alpha: 0,
            delay: .2 * Math.random()
          }), o.to(n, 36e3, {
            phase: e,
            repeat: -1,
            onUpdate: function() {
              t.drawLine(t.attenuationArray[i], r, t.offset[i])
            },
            ease: a.Power0.easeNone
          }), u.to(n, 5, {
            noise: 50 * Math.random() + 30 | 0,
            delay: .5
          })
        })
      }, t
    }();
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = h
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(40),
    a = i(s),
    u = r(39),
    h = i(u),
    l = r(9),
    c = r(129),
    f = l.TweenMax,
    d = function(t) {
      function e() {
        return (0, o["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments))
      }
      return (0, h["default"])(e, t), e.prototype.startAnim = function() {
        this.pointAnim(), f.to([this.bgContainer, this.lineContainer], .8, {
          alpha: 1,
          delay: 2
        }), f.from(this.bgContainer.scale, .8, {
          x: .8,
          y: .8,
          delay: 2
        })
      }, e
    }(c["default"]);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = d
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(40),
    a = i(s),
    u = r(39),
    h = i(u),
    l = r(14),
    c = r(9),
    f = r(128),
    d = (c.TweenMax, function(t) {
      function e() {
        (0, o["default"])(this, e);
        var r = (0, a["default"])(this, t.call(this));
        return r.container = new l.Container, r.ringObj = {
          inner: 110,
          outside: 125,
          listNumber: 10,
          img: "https://zos.alipayobjects.com/rmsportal/JorDDgUVJljaIxDBpiBM.png"
        }, r.number = 300, r
      }
      return (0, h["default"])(e, t), e.prototype.init = function() {
        this.container.y = this.center.y - 5, this.container.x = this.center.x, this.setRArray(), this.createPointElement(), this.startAnim()
      }, e.prototype.createPointElement = function() {
        for (var t = 0; t < this.number; t++) {
          var e = new l.Sprite.fromImage(this.ringObj.img);
          e.anchor.set(.5);
          var r = .7 * Math.random();
          e.scale = {
            x: r + .6,
            y: r + .6
          };
          var i = e.positionData = this.getCirclePoint(),
            n = this.center.x - this.ringObj.outside - 20;
          e.x = i.angle > 180 ? Math.random() * -n - this.ringObj.outside : Math.random() * n + this.ringObj.outside, e.y = 10 * Math.random(), e.cacheAsBitmapboolean = !0, e.alpha = 0, this.container.addChild(e)
        }
        var o = new l.filters.BlurFilter;
        o.blur = .5
      }, e.prototype.startAnim = function() {
        var t = this.container.children;
        t.forEach(function(t) {
          var e = new c.TimelineMax({
            repeat: -1
          });
          e.to(t, .3, {
            alpha: .5 * Math.random() + .5,
            delay: 2 * Math.random() + .5
          }).to(t, 2 * Math.random() + .5, {
            x: t.positionData.x,
            y: t.positionData.y,
            ease: c.Power3.easeInOut
          }).to(t, .2, {
            alpha: 0
          })
        })
      }, e
    }(f["default"]));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = d
}, function(t, e, r) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    }
  }
  var n = r(8),
    o = i(n),
    s = r(14),
    a = r(9),
    u = r(260),
    h = r(258),
    l = a.TweenMax,
    c = function() {
      function t() {
        (0, o["default"])(this, t), this.container = new s.Container, this.outside = new u["default"](800, {
          inner: 105,
          outside: 130,
          maxOutside: !0,
          listNumber: 10,
          img: "https://zos.alipayobjects.com/rmsportal/JorDDgUVJljaIxDBpiBM.png"
        }), this.inner = new h["default"](400, {
          inner: 40,
          outside: 85,
          listNumber: 10,
          lineNumber: 40,
          img: "https://zos.alipayobjects.com/rmsportal/uIbqAshSeUuRPrRXNOrN.png"
        }, 1205417, 3678378)
      }
      return t.prototype.init = function() {
        this.outside.init(), this.inner.init(), this.container.addChild(this.outside.container), this.container.addChild(this.inner.container)
      }, t.prototype.animate = function() {
        l.to(this.inner.container.scale, 5, {
          x: .9,
          y: .9,
          yoyo: !0,
          repeat: -1,
          ease: a.Power1.easeInOut
        })
      }, t
    }();
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = c
}, function(t, e, r) {
  t.exports = {
    "default": r(148),
    __esModule: !0
  }
}, function(t, e, r) {
  t.exports = {
    "default": r(149),
    __esModule: !0
  }
}, function(t, e, r) {
  t.exports = {
    "default": r(150),
    __esModule: !0
  }
}, function(t, e, r) {
  t.exports = {
    "default": r(151),
    __esModule: !0
  }
}]);
