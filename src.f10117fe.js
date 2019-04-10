// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"src/examples.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fs_1 = require("fs");
/**
 * readFileSync calls are resolved statically by Parcel
 */


exports.examples = [{
  key: "protocols-interfaces-traits",
  title: "Protocols/interfaces/traits",
  code: {
    swift: "protocol Stackable {\n  associatedtype T\n  var items: [T] { get }\n  mutating func push(_ item: T)\n  mutating func pop() -> T?\n  func peak() -> T?\n}\n\nstruct Stack<Element>: Stackable {\n  var items: [Element] = []\n\n  mutating func push(_ item: Element) {\n    items.append(item)\n  }\n\n  mutating func pop() -> Element? {\n    return items.popLast()\n  }\n\n  func peak() -> Element? {\n    return items.last\n  }\n}\n\nvar s1 = Stack<Int>()\ns1.push(1)\ns1.push(2)\ns1.pop()\nprint(s1.peak()!)\n",
    typescript: "interface Stackable<T> {\n  readonly items: T[];\n  push(item: T): void;\n  pop(): T | null;\n  peak(): T | null;\n}\n\nclass Stack<Element>\n  implements Stackable<Element> {\n  items: Element[] = [];\n\n  push(item: Element) {\n    this.items.push(item);\n  }\n\n  pop() {\n    return this.items.pop() || null;\n  }\n\n  peak() {\n    return this.items.length > 0\n      ? this.items[this.items.length - 1]\n      : null;\n  }\n}\n\nconst s1 = new Stack<number>();\ns1.push(1);\ns1.push(2);\ns1.pop();\nconsole.log(s1.peak());\n",
    rust: "trait Stackable<T> {\n  fn push(&mut self, item: T) -> ();\n  fn pop(&mut self) -> Option<T>;\n  fn peak(&self) -> Option<&T>;\n}\n\nstruct Stack<T> {\n  items: Vec<T>,\n}\n\nimpl<T> Stackable<T> for Stack<T> {\n  fn push(&mut self, item: T) {\n    self.items.push(item);\n  }\n\n  fn pop(&mut self) -> Option<T> {\n    return self.items.pop();\n  }\n\n  fn peak(&self) -> Option<&T> {\n    return self.items.last();\n  }\n}\n\nimpl<T> Stack<T> {\n  fn new() -> Stack<T> {\n    Stack { items: Vec::new() }\n  }\n}\n\nfn main() {\n  let mut s1 = Stack::new();\n  s1.push(1);\n  s1.push(2);\n  s1.pop();\n  print!(\"{:?}\", s1.peak())\n}\n"
  }
}, {
  key: "higher-order-functions",
  title: "Higher-order functions",
  code: {
    swift: "func map<T, U>(\n  _ arr: [T],\n  _ f: (T) -> U) -> [U] {\n    var result: [U] = []\n    for item in arr {\n        result.append(f(item))\n    }\n    return result\n}\n\nlet newArr = map(\n  [1, 2, 3],\n  { (n: Int) in n * 2 }\n)\nprint(newArr)\n",
    typescript: "function map<T, U>(\n  arr: Array<T>,\n  f: (item: T) => U\n): Array<U> {\n  const result = [];\n  for (const item of arr) {\n    result.push(f(item));\n  }\n  return result;\n}\n\nconst newArr = map([1, 2, 3], n => n * 2);\nconsole.log(newArr);\n",
    rust: "fn map<T, U>(\n  arr: Vec<T>,\n  mapper: impl Fn(&T) -> U,\n) -> Vec<U> {\n  let mut result = Vec::new();\n  for item in arr.iter() {\n    result.push(mapper(item))\n  }\n  return result;\n}\n\nfn main() {\n  let new_vec = map(vec![1, 2, 3], |n| n * 2);\n  print!(\"{:?}\", new_vec);\n}\n"
  }
}, {
  key: "algebraic-data-types",
  title: "Algebraic data types",
  code: {
    swift: "enum Shape {\n    case Square(side: Double)\n    case Circle(radius: Double)\n}\n\nlet shapes = [\n    Shape.Square(side: 2),\n    Shape.Circle(radius: 4)\n]\n\nfunc getArea(_ shape: Shape) -> Double {\n    switch shape {\n    case .Circle(radius: let r):\n        return Double.pi * r * r\n    case .Square(side: let s):\n        return s * s\n    }\n}\n\nlet totalArea = shapes.reduce(0, {\n    (sum: Double, shape: Shape) in\n    sum + getArea(shape)\n})\n\nprint(totalArea)\n",
    typescript: "const enum ShapeKind {\n  Square,\n  Circle\n}\n\ninterface Square {\n  kind: ShapeKind.Square;\n  side: number;\n}\n\ninterface Circle {\n  kind: ShapeKind.Circle;\n  radius: number;\n}\n\ntype Shape = Square | Circle;\n\nfunction Square(side: number): Square {\n  return {\n    kind: ShapeKind.Square,\n    side\n  };\n}\n\nfunction Circle(radius: number): Circle {\n  return {\n    kind: ShapeKind.Circle,\n    radius\n  };\n}\n\nconst shapes: Shape[] = [Square(2), Circle(4)];\n\nfunction getArea(shape: Shape) {\n  switch (shape.kind) {\n    case ShapeKind.Square:\n      return shape.side * shape.side;\n    case ShapeKind.Circle:\n      return Math.PI * shape.radius ** 2;\n  }\n}\n\nconst totalArea = shapes.reduce(\n  (sum, shape) => sum + getArea(shape),\n  0\n);\n\nconsole.log(totalArea);\n",
    rust: "use std::f64::consts::PI;\n\nenum Shape {\n  Square { side: f64 },\n  Circle { radius: f64 },\n}\n\nfn get_area(shape: &Shape) -> f64 {\n  return match shape {\n    Shape::Square { side } => side * side,\n    Shape::Circle { radius } => {\n      PI * radius * radius\n    }\n  };\n}\n\nfn main() {\n  let shapes: Vec<Shape> = vec![\n    Shape::Square { side: 2.0 },\n    Shape::Circle { radius: 4.0 },\n  ];\n\n  let total_area =\n    shapes.iter().fold(0f64, |sum, shape| {\n      sum + get_area(&shape)\n    });\n\n  print!(\"{:?}\", total_area)\n}\n"
  }
}];
},{"fs":"node_modules/parcel-bundler/src/builtins/_empty.js"}],"src/playground.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.playground = {
  rust: function rust(code) {
    return "https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=" + encodeURIComponent(code);
  },
  typescript: function typescript(code) {
    return "https://www.typescriptlang.org/play/index.html#src=" + encodeURIComponent(code);
  },
  swift: function swift(code) {
    return "http://online.swiftplayground.run/?sourceURL=data:text/plain," + encodeURIComponent(code);
  }
};
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var examples_1 = require("./examples");

var playground_1 = require("./playground");

var examplesNode = document.querySelector("#examples");
examplesNode.innerHTML = examples_1.examples.map(function (example) {
  return "<option value=\"".concat(example.key, "\">").concat(example.title, "</option>");
}).join("\n");

function findExample(exampleKey) {
  var example = examples_1.examples.find(function (example) {
    return example.key === exampleKey;
  });

  if (!example) {
    throw new Error("Example \"".concat(exampleKey, "\" not found."));
  }

  return example;
}

examplesNode.addEventListener("change", function (event) {
  var exampleKey = event.target.value;
  render(findExample(exampleKey));
});

function render(example) {
  for (var _i = 0, _Object$entries = Object.entries(example.code); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        language = _Object$entries$_i[0],
        fileContent = _Object$entries$_i[1];

    var node = document.querySelector("#".concat(language));
    var code = node.querySelector(".code");
    code.textContent = fileContent;
    var anchor = node.querySelector(".playground-link");

    if (anchor) {
      anchor.href = playground_1.playground[language](fileContent);
    }
  }

  examplesNode.value = example.key;
  location.hash = example.key;
}

if (location.hash) {
  var exampleKey = location.hash.slice(1);
  render(findExample(exampleKey));
} else {
  render(examples_1.examples[0]);
}
},{"./examples":"src/examples.ts","./playground":"src/playground.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55137" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map