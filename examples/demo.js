! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.mui = t() : e.mui = t()
}(window, (function() {
	return function(e) {
		var t = {};

		function n(o) {
			if (t[o]) return t[o].exports;
			var r = t[o] = {
				i: o,
				l: !1,
				exports: {}
			};
			return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
		}
		return n.m = e, n.c = t, n.d = function(e, t, o) {
			n.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: o
			})
		}, n.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, n.t = function(e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var o = Object.create(null);
			if (n.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
				for (var r in e) n.d(o, r, function(t) {
					return e[t]
				}.bind(null, r));
			return o
		}, n.n = function(e) {
			var t = e && e.__esModule ? function() {
					return e.
					default
				} : function() {
					return e
				};
			return n.d(t, "a", t), t
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 2)
	}([
		function(e, t, n) {
			"use strict";

			function o(e, t, n, o, r, i, u, s) {
				var f, c = "function" == typeof e ? e.options : e;
				if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), o && (c.functional = !0), i && (c._scopeId = "data-v-" + i), u ? (f = function(e) {
					(e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(u)
				}, c._ssrRegister = f) : r && (f = s ? function() {
					r.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
				} : r), f)
					if (c.functional) {
						c._injectStyles = f;
						var a = c.render;
						c.render = function(e, t) {
							return f.call(t), a(e, t)
						}
					} else {
						var l = c.beforeCreate;
						c.beforeCreate = l ? [].concat(l, f) : [f]
					}
				return {
					exports: e,
					options: c
				}
			}
			n.d(t, "a", (function() {
				return o
			}))
		}, ,
		function(e, t, n) {
			"use strict";
			n.r(t);
			var o = function() {
				return (0, this._self._c)("h1", {
					staticClass: "m-demo"
				}, [this._v("demo -- test")])
			};
			o._withStripped = !0;
			var r = {
				name: "Demo"
			}, i = n(0),
				u = Object(i.a)(r, o, [], !1, null, null, null).exports;
			u.install = function(e) {
				e.component(u.name, u)
			};
			t.
			default = u
		}
	])
}));