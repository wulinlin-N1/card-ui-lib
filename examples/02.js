! function(e, t) {
	"object" == typeof exports && "object" == typeof module ?
  module.exports = t() : "function" == typeof define && define.amd ?
  define([], t) : "object" == typeof exports ?
  exports.mui = t() : e.mui = t()
}(window, (function() {
	return function(e) {}([])
}));
