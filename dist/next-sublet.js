/*!
 * name: next-sublet
 * url: https://github.com/afeiship/next-sublet
 * version: 1.0.0
 * date: 2019-06-28T02:23:12.490Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  function debounce(fn) {
    var timer;
    return function() {
      var ctx = this,
        args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(ctx, args);
        timer = null;
      }, 1);
    };
  }

  function handler(fn, key, shim, obj) {
    Object.defineProperty(shim, key, {
      enumerable: true,
      get: function() {
        return obj[key];
      },
      set: function(v) {
        if (obj[key] !== v) {
          obj[key] = v;
          fn(obj);
        }
        return v;
      }
    });
  }

  nx.sublet = function(inObj, inCallback) {
    var key;
    var shim = {};
    var callback = debounce(inCallback);
    for (key in inObj) {
      handler(callback, key, shim, inObj);
    }
    // immediate execute once
    inCallback(shim);
    return shim;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sublet;
  }
})();

//# sourceMappingURL=next-sublet.js.map
