// @ts-noCheck
import "./js/vendor-dynamic";


const modules = self.ttttttttt_webpackChunkxhs_pc_web[0][1]

var cacheModule = {};
function load(moduleId) {
  var m = cacheModule[moduleId];
  if (undefined !== m) return m.exports;

  var loadModule = cacheModule[moduleId] = {
    id: moduleId,
    loaded: false,
    exports: {}
  };
  console.log(modules);
  modules[moduleId](loadModule, loadModule.exports, load)
  loadModule.loaded = true
  return loadModule.exports
}

// 9285
var n = load(64415)
  , o = load(88871);
function i(r) {
  return i = "function" == typeof o && "symbol" == typeof n ? function (r) {
    return typeof r
  }
    : function (r) {
      return r && "function" == typeof o && t.constructor === o && r !== o.prototype ? "symbol" : typeof r
    }
    ,
    i(r)
}
export {
  i as esm_typeof
}
