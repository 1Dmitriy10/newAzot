/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputmask: () => (/* binding */ inputmask)
/* harmony export */ });
function inputmask() {
    // ================input mask=================================

    /*!
     * dist/inputmask
     * https://github.com/RobinHerbots/Inputmask
     * Copyright (c) 2010 - 2023 Robin Herbots
     * Licensed under the MIT license
     * Version: 5.0.9-beta.50
     */
    !function (e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
            var n = t();
            for (var i in n) ("object" == typeof exports ? exports : e)[i] = n[i];
        }
    }("undefined" != typeof self ? self : this, (function () {
        return function () {
            "use strict";
            var e = {
                3976: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var i = n(2839);
                    t.default = {
                        _maxTestPos: 500,
                        placeholder: "_",
                        optionalmarker: ["[", "]"],
                        quantifiermarker: ["{", "}"],
                        groupmarker: ["(", ")"],
                        alternatormarker: "|",
                        escapeChar: "\\",
                        mask: null,
                        regex: null,
                        oncomplete: function () { },
                        onincomplete: function () { },
                        oncleared: function () { },
                        repeat: 0,
                        greedy: !1,
                        autoUnmask: !1,
                        removeMaskOnSubmit: !1,
                        clearMaskOnLostFocus: !0,
                        insertMode: !0,
                        insertModeVisual: !0,
                        clearIncomplete: !1,
                        alias: null,
                        onKeyDown: function () { },
                        onBeforeMask: null,
                        onBeforePaste: function (e, t) {
                            return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                        },
                        onBeforeWrite: null,
                        onUnMask: null,
                        showMaskOnFocus: !0,
                        showMaskOnHover: !0,
                        onKeyValidation: function () { },
                        skipOptionalPartCharacter: " ",
                        numericInput: !1,
                        rightAlign: !1,
                        undoOnEscape: !0,
                        radixPoint: "",
                        _radixDance: !1,
                        groupSeparator: "",
                        keepStatic: null,
                        positionCaretOnTab: !0,
                        tabThrough: !1,
                        supportsInputType: ["text", "tel", "url", "password", "search"],
                        ignorables: Object.keys(i.ignorables),
                        isComplete: null,
                        preValidation: null,
                        postValidation: null,
                        staticDefinitionSymbol: void 0,
                        jitMasking: !1,
                        nullable: !0,
                        inputEventOnly: !1,
                        noValuePatching: !1,
                        positionCaretOnClick: "lvp",
                        casing: null,
                        inputmode: "text",
                        importDataAttributes: !0,
                        shiftPositions: !0,
                        usePrototypeDefinitions: !0,
                        validationEventTimeOut: 3e3,
                        substitutes: {}
                    };
                },
                7392: function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    t.default = {
                        9: {
                            validator: "[0-9\uff10-\uff19]",
                            definitionSymbol: "*"
                        },
                        a: {
                            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                            definitionSymbol: "*"
                        },
                        "*": {
                            validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                        }
                    };
                },
                253: function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function (e, t, n) {
                        if (void 0 === n) return e.__data ? e.__data[t] : null;
                        e.__data = e.__data || {}, e.__data[t] = n;
                    };
                },
                3776: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Event = void 0, t.off = function (e, t) {
                        var n, i;
                        u(this[0]) && e && (n = this[0].eventRegistry, i = this[0], e.split(" ").forEach((function (e) {
                            var a = o(e.split("."), 2);
                            (function (e, i) {
                                var a, r, o = [];
                                if (e.length > 0) if (void 0 === t) for (a = 0, r = n[e][i].length; a < r; a++) o.push({
                                    ev: e,
                                    namespace: i && i.length > 0 ? i : "global",
                                    handler: n[e][i][a]
                                }); else o.push({
                                    ev: e,
                                    namespace: i && i.length > 0 ? i : "global",
                                    handler: t
                                }); else if (i.length > 0) for (var l in n) for (var s in n[l]) if (s === i) if (void 0 === t) for (a = 0,
                                    r = n[l][s].length; a < r; a++) o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: n[l][s][a]
                                    }); else o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: t
                                    });
                                return o;
                            })(a[0], a[1]).forEach((function (e) {
                                var t = e.ev, a = e.handler;
                                !function (e, t, a) {
                                    if (e in n == 1) if (i.removeEventListener ? i.removeEventListener(e, a, !1) : i.detachEvent && i.detachEvent("on".concat(e), a),
                                        "global" === t) for (var r in n[e]) n[e][r].splice(n[e][r].indexOf(a), 1); else n[e][t].splice(n[e][t].indexOf(a), 1);
                                }(t, e.namespace, a);
                            }));
                        })));
                        return this;
                    }, t.on = function (e, t) {
                        if (u(this[0])) {
                            var n = this[0].eventRegistry, i = this[0];
                            e.split(" ").forEach((function (e) {
                                var a = o(e.split("."), 2), r = a[0], l = a[1];
                                !function (e, a) {
                                    i.addEventListener ? i.addEventListener(e, t, !1) : i.attachEvent && i.attachEvent("on".concat(e), t),
                                        n[e] = n[e] || {}, n[e][a] = n[e][a] || [], n[e][a].push(t);
                                }(r, void 0 === l ? "global" : l);
                            }));
                        }
                        return this;
                    }, t.trigger = function (e) {
                        var t = arguments;
                        if (u(this[0])) for (var n = this[0].eventRegistry, a = this[0], o = "string" == typeof e ? e.split(" ") : [e.type], l = 0; l < o.length; l++) {
                            var s = o[l].split("."), f = s[0], p = s[1] || "global";
                            if (void 0 !== c && "global" === p) {
                                var d, h = {
                                    bubbles: !0,
                                    cancelable: !0,
                                    composed: !0,
                                    detail: arguments[1]
                                };
                                if (c.createEvent) {
                                    try {
                                        if ("input" === f) h.inputType = "insertText", d = new InputEvent(f, h); else d = new CustomEvent(f, h);
                                    } catch (e) {
                                        (d = c.createEvent("CustomEvent")).initCustomEvent(f, h.bubbles, h.cancelable, h.detail);
                                    }
                                    e.type && (0, i.default)(d, e), a.dispatchEvent(d);
                                } else (d = c.createEventObject()).eventType = f, d.detail = arguments[1], e.type && (0,
                                    i.default)(d, e), a.fireEvent("on" + d.eventType, d);
                            } else if (void 0 !== n[f]) {
                                arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]),
                                    arguments[0].detail = arguments.slice(1);
                                var v = n[f];
                                ("global" === p ? Object.values(v).flat() : v[p]).forEach((function (e) {
                                    return e.apply(a, t);
                                }));
                            }
                        }
                        return this;
                    };
                    var i = s(n(600)), a = s(n(9380)), r = s(n(4963));
                    function o(e, t) {
                        return function (e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function (e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var i, a, r, o, l = [], s = !0, c = !1;
                                try {
                                    if (r = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        s = !1;
                                    } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                                } catch (e) {
                                    c = !0, a = e;
                                } finally {
                                    try {
                                        if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                    } finally {
                                        if (c) throw a;
                                    }
                                }
                                return l;
                            }
                        }(e, t) || function (e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                        }(e, t) || function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function l(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i;
                    }
                    function s(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var c = a.default.document;
                    function u(e) {
                        return e instanceof Element;
                    }
                    var f = t.Event = void 0;
                    "function" == typeof a.default.CustomEvent ? t.Event = f = a.default.CustomEvent : a.default.Event && c && c.createEvent ? (t.Event = f = function (e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            composed: !0,
                            detail: void 0
                        };
                        var n = c.createEvent("CustomEvent");
                        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                    }, f.prototype = a.default.Event.prototype) : "undefined" != typeof Event && (t.Event = f = Event);
                },
                600: function (e, t) {
                    function n(e) {
                        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, n(e);
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function e() {
                        var t, i, a, r, o, l, s = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                        "boolean" == typeof s && (f = s, s = arguments[c] || {}, c++);
                        "object" !== n(s) && "function" != typeof s && (s = {});
                        for (; c < u; c++) if (null != (t = arguments[c])) for (i in t) a = s[i], s !== (r = t[i]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1,
                            l = a && Array.isArray(a) ? a : []) : l = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {},
                            s[i] = e(f, l, r)) : void 0 !== r && (s[i] = r));
                        return s;
                    };
                },
                4963: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var i = l(n(600)), a = l(n(9380)), r = l(n(253)), o = n(3776);
                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var s = a.default.document;
                    function c(e) {
                        return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e),
                            void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                    }
                    c.prototype = {
                        on: o.on,
                        off: o.off,
                        trigger: o.trigger
                    }, c.extend = i.default, c.data = r.default, c.Event = o.Event;
                    t.default = c;
                },
                9845: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.mobile = t.iphone = t.ie = void 0;
                    var i, a = (i = n(9380)) && i.__esModule ? i : {
                        default: i
                    };
                    var r = a.default.navigator && a.default.navigator.userAgent || "";
                    t.ie = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, t.mobile = a.default.navigator && a.default.navigator.userAgentData && a.default.navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default,
                        t.iphone = /iphone/i.test(r);
                },
                7184: function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function (e) {
                        return e.replace(n, "\\$1");
                    };
                    var n = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
                },
                6030: function (e, t, n) {
                    function i(e) {
                        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, i(e);
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.EventHandlers = void 0;
                    var a, r = n(8711), o = n(2839), l = n(9845), s = n(7215), c = n(7760), u = n(4713), f = (a = n(9380)) && a.__esModule ? a : {
                        default: a
                    };
                    function p() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ p = function () {
                            return t;
                        };
                        var e, t = {}, n = Object.prototype, a = n.hasOwnProperty, r = Object.defineProperty || function (e, t, n) {
                            e[t] = n.value;
                        }, o = "function" == typeof Symbol ? Symbol : {}, l = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
                        function u(e, t, n) {
                            return Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t];
                        }
                        try {
                            u({}, "");
                        } catch (e) {
                            u = function (e, t, n) {
                                return e[t] = n;
                            };
                        }
                        function f(e, t, n, i) {
                            var a = t && t.prototype instanceof k ? t : k, o = Object.create(a.prototype), l = new D(i || []);
                            return r(o, "_invoke", {
                                value: E(e, n, l)
                            }), o;
                        }
                        function d(e, t, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, n)
                                };
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                };
                            }
                        }
                        t.wrap = f;
                        var h = "suspendedStart", v = "suspendedYield", m = "executing", g = "completed", y = {};
                        function k() { }
                        function b() { }
                        function x() { }
                        var P = {};
                        u(P, l, (function () {
                            return this;
                        }));
                        var w = Object.getPrototypeOf, S = w && w(w(L([])));
                        S && S !== n && a.call(S, l) && (P = S);
                        var O = x.prototype = k.prototype = Object.create(P);
                        function _(e) {
                            ["next", "throw", "return"].forEach((function (t) {
                                u(e, t, (function (e) {
                                    return this._invoke(t, e);
                                }));
                            }));
                        }
                        function M(e, t) {
                            function n(r, o, l, s) {
                                var c = d(e[r], e, o);
                                if ("throw" !== c.type) {
                                    var u = c.arg, f = u.value;
                                    return f && "object" == i(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                                        n("next", e, l, s);
                                    }), (function (e) {
                                        n("throw", e, l, s);
                                    })) : t.resolve(f).then((function (e) {
                                        u.value = e, l(u);
                                    }), (function (e) {
                                        return n("throw", e, l, s);
                                    }));
                                }
                                s(c.arg);
                            }
                            var o;
                            r(this, "_invoke", {
                                value: function (e, i) {
                                    function a() {
                                        return new t((function (t, a) {
                                            n(e, i, t, a);
                                        }));
                                    }
                                    return o = o ? o.then(a, a) : a();
                                }
                            });
                        }
                        function E(t, n, i) {
                            var a = h;
                            return function (r, o) {
                                if (a === m) throw new Error("Generator is already running");
                                if (a === g) {
                                    if ("throw" === r) throw o;
                                    return {
                                        value: e,
                                        done: !0
                                    };
                                }
                                for (i.method = r, i.arg = o; ;) {
                                    var l = i.delegate;
                                    if (l) {
                                        var s = j(l, i);
                                        if (s) {
                                            if (s === y) continue;
                                            return s;
                                        }
                                    }
                                    if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                        if (a === h) throw a = g, i.arg;
                                        i.dispatchException(i.arg);
                                    } else "return" === i.method && i.abrupt("return", i.arg);
                                    a = m;
                                    var c = d(t, n, i);
                                    if ("normal" === c.type) {
                                        if (a = i.done ? g : v, c.arg === y) continue;
                                        return {
                                            value: c.arg,
                                            done: i.done
                                        };
                                    }
                                    "throw" === c.type && (a = g, i.method = "throw", i.arg = c.arg);
                                }
                            };
                        }
                        function j(t, n) {
                            var i = n.method, a = t.iterator[i];
                            if (a === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return",
                                n.arg = e, j(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw",
                                    n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
                            var r = d(a, t.iterator, n.arg);
                            if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null,
                                y;
                            var o = r.arg;
                            return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next",
                                n.arg = e), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"),
                                    n.delegate = null, y);
                        }
                        function T(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                                this.tryEntries.push(t);
                        }
                        function A(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t;
                        }
                        function D(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(T, this), this.reset(!0);
                        }
                        function L(t) {
                            if (t || "" === t) {
                                var n = t[l];
                                if (n) return n.call(t);
                                if ("function" == typeof t.next) return t;
                                if (!isNaN(t.length)) {
                                    var r = -1, o = function n() {
                                        for (; ++r < t.length;) if (a.call(t, r)) return n.value = t[r], n.done = !1, n;
                                        return n.value = e, n.done = !0, n;
                                    };
                                    return o.next = o;
                                }
                            }
                            throw new TypeError(i(t) + " is not iterable");
                        }
                        return b.prototype = x, r(O, "constructor", {
                            value: x,
                            configurable: !0
                        }), r(x, "constructor", {
                            value: b,
                            configurable: !0
                        }), b.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
                        }, t.mark = function (e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")),
                                e.prototype = Object.create(O), e;
                        }, t.awrap = function (e) {
                            return {
                                __await: e
                            };
                        }, _(M.prototype), u(M.prototype, s, (function () {
                            return this;
                        })), t.AsyncIterator = M, t.async = function (e, n, i, a, r) {
                            void 0 === r && (r = Promise);
                            var o = new M(f(e, n, i, a), r);
                            return t.isGeneratorFunction(n) ? o : o.next().then((function (e) {
                                return e.done ? e.value : o.next();
                            }));
                        }, _(O), u(O, c, "Generator"), u(O, l, (function () {
                            return this;
                        })), u(O, "toString", (function () {
                            return "[object Generator]";
                        })), t.keys = function (e) {
                            var t = Object(e), n = [];
                            for (var i in t) n.push(i);
                            return n.reverse(), function e() {
                                for (; n.length;) {
                                    var i = n.pop();
                                    if (i in t) return e.value = i, e.done = !1, e;
                                }
                                return e.done = !0, e;
                            };
                        }, t.values = L, D.prototype = {
                            constructor: D,
                            reset: function (t) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null,
                                    this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                            },
                            stop: function () {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval;
                            },
                            dispatchException: function (t) {
                                if (this.done) throw t;
                                var n = this;
                                function i(i, a) {
                                    return l.type = "throw", l.arg = t, n.next = i, a && (n.method = "next", n.arg = e),
                                        !!a;
                                }
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var o = this.tryEntries[r], l = o.completion;
                                    if ("root" === o.tryLoc) return i("end");
                                    if (o.tryLoc <= this.prev) {
                                        var s = a.call(o, "catchLoc"), c = a.call(o, "finallyLoc");
                                        if (s && c) {
                                            if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                        } else if (s) {
                                            if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (e, t) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var i = this.tryEntries[n];
                                    if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                        var r = i;
                                        break;
                                    }
                                }
                                r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                                var o = r ? r.completion : {};
                                return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc,
                                    y) : this.complete(o);
                            },
                            complete: function (e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
                                    y;
                            },
                            finish: function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var n = this.tryEntries[t];
                                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y;
                                }
                            },
                            catch: function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var n = this.tryEntries[t];
                                    if (n.tryLoc === e) {
                                        var i = n.completion;
                                        if ("throw" === i.type) {
                                            var a = i.arg;
                                            A(n);
                                        }
                                        return a;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function (t, n, i) {
                                return this.delegate = {
                                    iterator: L(t),
                                    resultName: n,
                                    nextLoc: i
                                }, "next" === this.method && (this.arg = e), y;
                            }
                        }, t;
                    }
                    function d(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function (e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return h(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
                            }(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0, a = function () { };
                                return {
                                    s: a,
                                    n: function () {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        };
                                    },
                                    e: function (e) {
                                        throw e;
                                    },
                                    f: a
                                };
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }
                        var r, o = !0, l = !1;
                        return {
                            s: function () {
                                n = n.call(e);
                            },
                            n: function () {
                                var e = n.next();
                                return o = e.done, e;
                            },
                            e: function (e) {
                                l = !0, r = e;
                            },
                            f: function () {
                                try {
                                    o || null == n.return || n.return();
                                } finally {
                                    if (l) throw r;
                                }
                            }
                        };
                    }
                    function h(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i;
                    }
                    function v(e, t, n, i, a, r, o) {
                        try {
                            var l = e[r](o), s = l.value;
                        } catch (e) {
                            return void n(e);
                        }
                        l.done ? t(s) : Promise.resolve(s).then(i, a);
                    }
                    var m, g, y = t.EventHandlers = {
                        keyEvent: function (e, t, n, i, a) {
                            var f = this.inputmask, p = f.opts, d = f.dependencyLib, h = f.maskset, v = this, m = d(v), g = e.key, k = r.caret.call(f, v), b = p.onKeyDown.call(this, e, r.getBuffer.call(f), k, p);
                            if (void 0 !== b) return b;
                            if (g === o.keys.Backspace || g === o.keys.Delete || l.iphone && g === o.keys.BACKSPACE_SAFARI || e.ctrlKey && g === o.keys.x && !("oncut" in v)) e.preventDefault(),
                                s.handleRemove.call(f, v, g, k), (0, c.writeBuffer)(v, r.getBuffer.call(f, !0), h.p, e, v.inputmask._valueGet() !== r.getBuffer.call(f).join("")); else if (g === o.keys.End || g === o.keys.PageDown) {
                                    e.preventDefault();
                                    var x = r.seekNext.call(f, r.getLastValidPosition.call(f));
                                    r.caret.call(f, v, e.shiftKey ? k.begin : x, x, !0);
                                } else g === o.keys.Home && !e.shiftKey || g === o.keys.PageUp ? (e.preventDefault(),
                                    r.caret.call(f, v, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && g === o.keys.Escape && !0 !== e.altKey ? ((0,
                                        c.checkVal)(v, !0, !1, f.undoValue.split("")), m.trigger("click")) : g !== o.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== f.userOptions.insertMode ? !0 === p.tabThrough && g === o.keys.Tab ? !0 === e.shiftKey ? (k.end = r.seekPrevious.call(f, k.end, !0),
                                            !0 === u.getTest.call(f, k.end - 1).match.static && k.end--, k.begin = r.seekPrevious.call(f, k.end, !0),
                                            k.begin >= 0 && k.end > 0 && (e.preventDefault(), r.caret.call(f, v, k.begin, k.end))) : (k.begin = r.seekNext.call(f, k.begin, !0),
                                                k.end = r.seekNext.call(f, k.begin, !0), k.end < h.maskLength && k.end--, k.begin <= h.maskLength && (e.preventDefault(),
                                                    r.caret.call(f, v, k.begin, k.end))) : e.shiftKey || (p.insertModeVisual && !1 === p.insertMode ? g === o.keys.ArrowRight ? setTimeout((function () {
                                                        var e = r.caret.call(f, v);
                                                        r.caret.call(f, v, e.begin);
                                                    }), 0) : g === o.keys.ArrowLeft && setTimeout((function () {
                                                        var e = r.translatePosition.call(f, v.inputmask.caretPos.begin);
                                                        r.translatePosition.call(f, v.inputmask.caretPos.end);
                                                        f.isRTL ? r.caret.call(f, v, e + (e === h.maskLength ? 0 : 1)) : r.caret.call(f, v, e - (0 === e ? 0 : 1));
                                                    }), 0) : void 0 === f.keyEventHook || f.keyEventHook.call(f, e)) : s.isSelection.call(f, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode,
                                                        r.caret.call(f, v, k.begin, k.begin));
                            return f.isComposing = g == o.keys.Process || g == o.keys.Unidentified, f.ignorable = p.ignorables.includes(g),
                                y.keypressEvent.call(this, e, t, n, i, a);
                        },
                        keypressEvent: function (e, t, n, i, a) {
                            var l = this.inputmask || this, u = l.opts, f = l.dependencyLib, p = l.maskset, d = l.el, h = f(d), v = e.key;
                            if (!0 === t || e.ctrlKey && e.altKey && !l.ignorable || !(e.ctrlKey || e.metaKey || l.ignorable)) {
                                if (v) {
                                    var m, g = t ? {
                                        begin: a,
                                        end: a
                                    } : r.caret.call(l, d);
                                    v = u.substitutes[v] || v, p.writeOutBuffer = !0;
                                    var y = s.isValid.call(l, g, v, i, void 0, void 0, void 0, t);
                                    if (!1 !== y && (r.resetMaskSet.call(l, !0), m = void 0 !== y.caret ? y.caret : r.seekNext.call(l, y.pos.begin ? y.pos.begin : y.pos),
                                        p.p = m), m = u.numericInput && void 0 === y.caret ? r.seekPrevious.call(l, m) : m,
                                        !1 !== n && (setTimeout((function () {
                                            u.onKeyValidation.call(d, v, y);
                                        }), 0), p.writeOutBuffer && !1 !== y)) {
                                        var k = r.getBuffer.call(l);
                                        (0, c.writeBuffer)(d, k, m, e, !0 !== t);
                                    }
                                    if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                }
                            } else v === o.keys.Enter && l.undoValue !== l._valueGet(!0) && (l.undoValue = l._valueGet(!0),
                                setTimeout((function () {
                                    h.trigger("change");
                                }), 0));
                        },
                        pasteEvent: (m = p().mark((function e(t) {
                            var n, i, a, o, l, s;
                            return p().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        n = function (e, n, i, a, l) {
                                            var s = r.caret.call(e, n, void 0, void 0, !0), u = i.substr(0, s.begin), f = i.substr(s.end, i.length);
                                            if (u == (e.isRTL ? r.getBufferTemplate.call(e).slice().reverse() : r.getBufferTemplate.call(e)).slice(0, s.begin).join("") && (u = ""),
                                                f == (e.isRTL ? r.getBufferTemplate.call(e).slice().reverse() : r.getBufferTemplate.call(e)).slice(s.end).join("") && (f = ""),
                                                a = u + a + f, e.isRTL && !0 !== o.numericInput) {
                                                a = a.split("");
                                                var p, h = d(r.getBufferTemplate.call(e));
                                                try {
                                                    for (h.s(); !(p = h.n()).done;) {
                                                        var v = p.value;
                                                        a[0] === v && a.shift();
                                                    }
                                                } catch (e) {
                                                    h.e(e);
                                                } finally {
                                                    h.f();
                                                }
                                                a = a.reverse().join("");
                                            }
                                            var m = a;
                                            if ("function" == typeof l) {
                                                if (!1 === (m = l.call(e, m, o))) return !1;
                                                m || (m = i);
                                            }
                                            (0, c.checkVal)(n, !0, !1, m.toString().split(""), t);
                                        }, i = this, a = this.inputmask, o = a.opts, l = a._valueGet(!0), a.skipInputEvent = !0,
                                            t.clipboardData && t.clipboardData.getData ? s = t.clipboardData.getData("text/plain") : f.default.clipboardData && f.default.clipboardData.getData && (s = f.default.clipboardData.getData("Text")),
                                            n(a, i, l, s, o.onBeforePaste), t.preventDefault();

                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                            }), e, this);
                        })), g = function () {
                            var e = this, t = arguments;
                            return new Promise((function (n, i) {
                                var a = m.apply(e, t);
                                function r(e) {
                                    v(a, n, i, r, o, "next", e);
                                }
                                function o(e) {
                                    v(a, n, i, r, o, "throw", e);
                                }
                                r(void 0);
                            }));
                        }, function (e) {
                            return g.apply(this, arguments);
                        }),
                        inputFallBackEvent: function (e) {
                            var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                            var a, s = this, f = s.inputmask._valueGet(!0), p = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join(""), d = r.caret.call(t, s, void 0, void 0, !0);
                            if (p !== f) {
                                if (a = function (e, i, a) {
                                    for (var o, l, s, c = e.substr(0, a.begin).split(""), f = e.substr(a.begin).split(""), p = i.substr(0, a.begin).split(""), d = i.substr(a.begin).split(""), h = c.length >= p.length ? c.length : p.length, v = f.length >= d.length ? f.length : d.length, m = "", g = [], y = "~"; c.length < h;) c.push(y);
                                    for (; p.length < h;) p.push(y);
                                    for (; f.length < v;) f.unshift(y);
                                    for (; d.length < v;) d.unshift(y);
                                    var k = c.concat(f), b = p.concat(d);
                                    for (l = 0, o = k.length; l < o; l++) switch (s = u.getPlaceholder.call(t, r.translatePosition.call(t, l)),
                                        m) {
                                            case "insertText":
                                                b[l - 1] === k[l] && a.begin == k.length - 1 && g.push(k[l]), l = o;
                                                break;

                                            case "insertReplacementText":
                                            case "deleteContentBackward":
                                                k[l] === y ? a.end++ : l = o;
                                                break;

                                            default:
                                                k[l] !== b[l] && (k[l + 1] !== y && k[l + 1] !== s && void 0 !== k[l + 1] || (b[l] !== s || b[l + 1] !== y) && b[l] !== y ? b[l + 1] === y && b[l] === k[l + 1] ? (m = "insertText",
                                                    g.push(k[l]), a.begin--, a.end--) : k[l] !== s && k[l] !== y && (k[l + 1] === y || b[l] !== k[l] && b[l + 1] === k[l + 1]) ? (m = "insertReplacementText",
                                                        g.push(k[l]), a.begin--) : k[l] === y ? (m = "deleteContentBackward", (r.isMask.call(t, r.translatePosition.call(t, l), !0) || b[l] === n.radixPoint) && a.end++) : l = o : (m = "insertText",
                                                            g.push(k[l]), a.begin--, a.end--));
                                        }
                                    return {
                                        action: m,
                                        data: g,
                                        caret: a
                                    };
                                }(f, p, d), (s.inputmask.shadowRoot || s.ownerDocument).activeElement !== s && s.focus(),
                                    (0, c.writeBuffer)(s, r.getBuffer.call(t)), r.caret.call(t, s, d.begin, d.end, !0),
                                    !l.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === a.action && t.isComposing) return !1;
                                switch ("insertCompositionText" === e.inputType && "insertText" === a.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1,
                                a.action) {
                                    case "insertText":
                                    case "insertReplacementText":
                                        a.data.forEach((function (e, n) {
                                            var a = new i.Event("keypress");
                                            a.key = e, t.ignorable = !1, y.keypressEvent.call(s, a);
                                        })), setTimeout((function () {
                                            t.$el.trigger("keyup");
                                        }), 0);
                                        break;

                                    case "deleteContentBackward":
                                        var h = new i.Event("keydown");
                                        h.key = o.keys.Backspace, y.keyEvent.call(s, h);
                                        break;

                                    default:
                                        (0, c.applyInputValue)(s, f), r.caret.call(t, s, d.begin, d.end, !0);
                                }
                                e.preventDefault();
                            }
                        },
                        setValueEvent: function (e) {
                            var t = this.inputmask, n = this, i = e && e.detail ? e.detail[0] : arguments[1];
                            void 0 === i && (i = n.inputmask._valueGet(!0)), (0, c.applyInputValue)(n, i), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && r.caret.call(t, n, e.detail ? e.detail[1] : arguments[2]);
                        },
                        focusEvent: function (e) {
                            var t = this.inputmask, n = t.opts, i = t && t._valueGet();
                            n.showMaskOnFocus && i !== r.getBuffer.call(t).join("") && (0, c.writeBuffer)(this, r.getBuffer.call(t), r.seekNext.call(t, r.getLastValidPosition.call(t))),
                                !0 !== n.positionCaretOnTab || !1 !== t.mouseEnter || s.isComplete.call(t, r.getBuffer.call(t)) && -1 !== r.getLastValidPosition.call(t) || y.clickEvent.apply(this, [e, !0]),
                                t.undoValue = t && t._valueGet(!0);
                        },
                        invalidEvent: function (e) {
                            this.inputmask.validationEvent = !0;
                        },
                        mouseleaveEvent: function () {
                            var e = this.inputmask, t = e.opts, n = this;
                            e.mouseEnter = !1, t.clearMaskOnLostFocus && (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n && (0,
                                c.HandleNativePlaceholder)(n, e.originalPlaceholder);
                        },
                        clickEvent: function (e, t) {
                            var n = this.inputmask;
                            n.clicked++;
                            var i = this;
                            if ((i.inputmask.shadowRoot || i.ownerDocument).activeElement === i) {
                                var a = r.determineNewCaretPosition.call(n, r.caret.call(n, i), t);
                                void 0 !== a && r.caret.call(n, i, a);
                            }
                        },
                        cutEvent: function (e) {
                            var t = this.inputmask, n = t.maskset, i = this, a = r.caret.call(t, i), l = t.isRTL ? r.getBuffer.call(t).slice(a.end, a.begin) : r.getBuffer.call(t).slice(a.begin, a.end), u = t.isRTL ? l.reverse().join("") : l.join("");
                            f.default.navigator && f.default.navigator.clipboard ? f.default.navigator.clipboard.writeText(u) : f.default.clipboardData && f.default.clipboardData.getData && f.default.clipboardData.setData("Text", u),
                                s.handleRemove.call(t, i, o.keys.Delete, a), (0, c.writeBuffer)(i, r.getBuffer.call(t), n.p, e, t.undoValue !== t._valueGet(!0));
                        },
                        blurEvent: function (e) {
                            var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                            t.clicked = 0;
                            var a = i(this), o = this;
                            if (o.inputmask) {
                                (0, c.HandleNativePlaceholder)(o, t.originalPlaceholder);
                                var l = o.inputmask._valueGet(), u = r.getBuffer.call(t).slice();
                                "" !== l && (n.clearMaskOnLostFocus && (-1 === r.getLastValidPosition.call(t) && l === r.getBufferTemplate.call(t).join("") ? u = [] : c.clearOptionalTail.call(t, u)),
                                    !1 === s.isComplete.call(t, u) && (setTimeout((function () {
                                        a.trigger("incomplete");
                                    }), 0), n.clearIncomplete && (r.resetMaskSet.call(t, !1), u = n.clearMaskOnLostFocus ? [] : r.getBufferTemplate.call(t).slice())),
                                    (0, c.writeBuffer)(o, u, void 0, e)), l = t._valueGet(!0), t.undoValue !== l && ("" != l || t.undoValue != r.getBufferTemplate.call(t).join("") || t.undoValue == r.getBufferTemplate.call(t).join("") && t.maskset.validPositions.length > 0) && (t.undoValue = l,
                                        a.trigger("change"));
                            }
                        },
                        mouseenterEvent: function () {
                            var e = this.inputmask, t = e.opts.showMaskOnHover, n = this;
                            if (e.mouseEnter = !0, (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n) {
                                var i = (e.isRTL ? r.getBufferTemplate.call(e).slice().reverse() : r.getBufferTemplate.call(e)).join("");
                                t && (0, c.HandleNativePlaceholder)(n, i);
                            }
                        },
                        submitEvent: function () {
                            var e = this.inputmask, t = e.opts;
                            e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === r.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === r.getBufferTemplate.call(e).join("") && e._valueSet(""),
                                t.clearIncomplete && !1 === s.isComplete.call(e, r.getBuffer.call(e)) && e._valueSet(""),
                                t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function () {
                                    (0, c.writeBuffer)(e.el, r.getBuffer.call(e));
                                }), 0));
                        },
                        resetEvent: function () {
                            var e = this.inputmask;
                            e.refreshValue = !0, setTimeout((function () {
                                (0, c.applyInputValue)(e.el, e._valueGet(!0));
                            }), 0);
                        }
                    };
                },
                9716: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.EventRuler = void 0;
                    var i, a = (i = n(2394)) && i.__esModule ? i : {
                        default: i
                    }, r = n(2839), o = n(8711), l = n(7760);
                    t.EventRuler = {
                        on: function (e, t, n) {
                            var i = e.inputmask.dependencyLib, s = function (t) {
                                t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                var s, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                                if (void 0 === u && "FORM" !== this.nodeName) {
                                    var p = i.data(c, "_inputmask_opts");
                                    i(c).off(), p && new a.default(p).mask(c);
                                } else {
                                    if (["submit", "reset", "setvalue"].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                        switch (t.type) {
                                            case "input":
                                                if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                                break;

                                            case "click":
                                            case "focus":
                                                return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, l.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")),
                                                    setTimeout((function () {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (s = arguments, void setTimeout((function () {
                                                        e.inputmask && n.apply(c, s);
                                                    }), 0));
                                        }
                                        var d = n.apply(c, arguments);
                                        return !1 === d && (t.preventDefault(), t.stopPropagation()), d;
                                    }
                                    t.preventDefault();
                                }
                            };
                            ["submit", "reset"].includes(t) ? (s = s.bind(e), null !== e.form && i(e.form).on(t, s)) : i(e).on(t, s),
                                e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                        },
                        off: function (e, t) {
                            if (e.inputmask && e.inputmask.events) {
                                var n = e.inputmask.dependencyLib, i = e.inputmask.events;
                                for (var a in t && ((i = [])[t] = e.inputmask.events[t]), i) {
                                    for (var r = i[a]; r.length > 0;) {
                                        var o = r.pop();
                                        ["submit", "reset"].includes(a) ? null !== e.form && n(e.form).off(a, o) : n(e).off(a, o);
                                    }
                                    delete e.inputmask.events[a];
                                }
                            }
                        }
                    };
                },
                219: function (e, t, n) {
                    var i = p(n(2394)), a = n(2839), r = p(n(7184)), o = n(8711), l = n(4713);
                    function s(e, t) {
                        return function (e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function (e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var i, a, r, o, l = [], s = !0, c = !1;
                                try {
                                    if (r = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        s = !1;
                                    } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                                } catch (e) {
                                    c = !0, a = e;
                                } finally {
                                    try {
                                        if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                    } finally {
                                        if (c) throw a;
                                    }
                                }
                                return l;
                            }
                        }(e, t) || function (e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                        }(e, t) || function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function c(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i;
                    }
                    function u(e) {
                        return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, u(e);
                    }
                    function f(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0),
                                Object.defineProperty(e, (a = i.key, r = void 0, r = function (e, t) {
                                    if ("object" !== u(e) || null === e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var i = n.call(e, t || "default");
                                        if ("object" !== u(i)) return i;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return ("string" === t ? String : Number)(e);
                                }(a, "string"), "symbol" === u(r) ? r : String(r)), i);
                        }
                        var a, r;
                    }
                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    n(1313);
                    var d = i.default.dependencyLib, h = function () {
                        function e(t, n, i) {
                            !function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.mask = t, this.format = n, this.opts = i, this._date = new Date(1, 0, 1),
                                this.initDateObject(t, this.opts);
                        }
                        var t, n, i;
                        return t = e, (n = [{
                            key: "date",
                            get: function () {
                                return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)),
                                    this._date;
                            }
                        }, {
                            key: "initDateObject",
                            value: function (e, t) {
                                var n;
                                for (w(t).lastIndex = 0; n = w(t).exec(this.format);) {
                                    var i = new RegExp("\\d+$").exec(n[0]), a = i ? n[0][0] + "x" : n[0], r = void 0;
                                    if (void 0 !== e) {
                                        if (i) {
                                            var o = w(t).lastIndex, l = j(n.index, t);
                                            w(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                                        } else r = e.slice(0, y[a] && y[a][4] || a.length);
                                        e = e.slice(r.length);
                                    }
                                    Object.prototype.hasOwnProperty.call(y, a) && this.setValue(this, r, a, y[a][2], y[a][1]);
                                }
                            }
                        }, {
                            key: "setValue",
                            value: function (e, t, n, i, a) {
                                if (void 0 !== t && (e[i] = "ampm" === i || "mmm" === n || "mmmm" === n ? t : t.replace(/[^0-9]/g, "0"),
                                    e["raw" + i] = t.replace(/\s/g, "_")), void 0 !== a) {
                                    var r = e[i];
                                    ("day" === i && 29 === parseInt(r) || "month" === i && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)),
                                        "day" === i && (g = !0, 0 === parseInt(r) && (r = 1)), "month" === i && (g = !0),
                                        "year" === i && (g = !0, r.length < 4 && (r = _(r, 4, !0))), ("" !== r && !isNaN(r) || "ampm" === i || "mmm" === n || "mmmm" === n) && a.call(e._date, r);
                                }
                            }
                        }, {
                            key: "reset",
                            value: function () {
                                this._date = new Date(1, 0, 1);
                            }
                        }, {
                            key: "reInit",
                            value: function () {
                                this._date = void 0, this.date;
                            }
                        }]) && f(t.prototype, n), i && f(t, i), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }(), v = (new Date).getFullYear(), m = i.default.prototype.i18n, g = !1, y = {
                        d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
                        dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
                            return _(Date.prototype.getDate.call(this), 2);
                        }],
                        ddd: [""],
                        dddd: [""],
                        m: ["[1-9]|1[012]", function (e) {
                            var t = e ? parseInt(e) : 0;
                            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                        }, "month", function () {
                            return Date.prototype.getMonth.call(this) + 1;
                        }],
                        mm: ["0[1-9]|1[012]", function (e) {
                            var t = e ? parseInt(e) : 0;
                            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                        }, "month", function () {
                            return _(Date.prototype.getMonth.call(this) + 1, 2);
                        }],
                        mmm: [m.monthNames.slice(0, 12).join("|"), function (e) {
                            var t = m.monthNames.slice(0, 12).findIndex((function (t) {
                                return e.toLowerCase() === t.toLowerCase();
                            }));
                            return Date.prototype.setMonth.call(this, t);
                        }, "month", function () {
                            return m.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
                        }],
                        mmmm: [m.monthNames.slice(12, 24).join("|"), function (e) {
                            var t = m.monthNames.slice(12, 24).findIndex((function (t) {
                                return e.toLowerCase() === t.toLowerCase();
                            }));
                            return Date.prototype.setMonth.call(this, t);
                        }, "month", function () {
                            return m.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
                        }],
                        yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
                            return _(Date.prototype.getFullYear.call(this), 2);
                        }],
                        yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
                            return _(Date.prototype.getFullYear.call(this), 4);
                        }],
                        h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                        hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
                            return _(Date.prototype.getHours.call(this), 2);
                        }],
                        hx: [function (e) {
                            return "[0-9]{".concat(e, "}");
                        }, Date.prototype.setHours, "hours", function (e) {
                            return Date.prototype.getHours;
                        }],
                        H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                        HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
                            return _(Date.prototype.getHours.call(this), 2);
                        }],
                        Hx: [function (e) {
                            return "[0-9]{".concat(e, "}");
                        }, Date.prototype.setHours, "hours", function (e) {
                            return function () {
                                return _(Date.prototype.getHours.call(this), e);
                            };
                        }],
                        M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
                        MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
                            return _(Date.prototype.getMinutes.call(this), 2);
                        }],
                        s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
                        ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
                            return _(Date.prototype.getSeconds.call(this), 2);
                        }],
                        l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
                            return _(Date.prototype.getMilliseconds.call(this), 3);
                        }, 3],
                        L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
                            return _(Date.prototype.getMilliseconds.call(this), 2);
                        }, 2],
                        t: ["[ap]", b, "ampm", x, 1],
                        tt: ["[ap]m", b, "ampm", x, 2],
                        T: ["[AP]", b, "ampm", x, 1],
                        TT: ["[AP]M", b, "ampm", x, 2],
                        Z: [".*", void 0, "Z", function () {
                            var e = this.toString().match(/\((.+)\)/)[1];
                            e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function (e) {
                                return s(e, 1)[0];
                            })).join(""));
                            return e;
                        }],
                        o: [""],
                        S: [""]
                    }, k = {
                        isoDate: "yyyy-mm-dd",
                        isoTime: "HH:MM:ss",
                        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                    };
                    function b(e) {
                        var t = this.getHours();
                        e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                    }
                    function x() {
                        var e = this.getHours();
                        return (e = e || 12) >= 12 ? "PM" : "AM";
                    }
                    function P(e) {
                        var t = new RegExp("\\d+$").exec(e[0]);
                        if (t && void 0 !== t[0]) {
                            var n = y[e[0][0] + "x"].slice("");
                            return n[0] = n[0](t[0]), n[3] = n[3](t[0]), n;
                        }
                        if (y[e[0]]) return y[e[0]];
                    }
                    function w(e) {
                        if (!e.tokenizer) {
                            var t = [], n = [];
                            for (var i in y) if (/\.*x$/.test(i)) {
                                var a = i[0] + "\\d+";
                                -1 === n.indexOf(a) && n.push(a);
                            } else -1 === t.indexOf(i[0]) && t.push(i[0]);
                            e.tokenizer = "(" + (n.length > 0 ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.",
                                e.tokenizer = new RegExp(e.tokenizer, "g");
                        }
                        return e.tokenizer;
                    }
                    function S(e, t, n) {
                        if (!g) return !0;
                        if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                        if ("29" == e.day) {
                            var i = j(t.pos, n);
                            if (i.targetMatch && "yyyy" === i.targetMatch[0] && t.pos - i.targetMatchIndex == 2) return t.remove = t.pos + 1,
                                t;
                        } else if (2 == e.date.getMonth() && "30" == e.day && void 0 !== t.c) return e.day = "03",
                            e.date.setDate(3), e.date.setMonth(1), t.insert = [{
                                pos: t.pos,
                                c: "0"
                            }, {
                                pos: t.pos + 1,
                                c: t.c
                            }], t.caret = o.seekNext.call(this, t.pos + 1), t;
                        return !1;
                    }
                    function O(e, t, n, i) {
                        var a, o, l = "", s = 0, c = {};
                        for (w(n).lastIndex = 0; a = w(n).exec(e);) {
                            if (void 0 === t) if (o = P(a)) l += "(" + o[0] + ")", c[s] = a[0].charAt(0); else switch (a[0]) {
                                case "[":
                                    l += "(";
                                    break;

                                case "]":
                                    l += ")?";
                                    break;

                                default:
                                    l += (0, r.default)(a[0]), c[s] = a[0].charAt(0);
                            } else if (o = P(a)) if (!0 !== i && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += a[0]; else l += a[0];
                            s++;
                        }
                        return void 0 === t && "" === n.placeholder && (n.placeholder = c), l;
                    }
                    function _(e, t, n) {
                        for (e = String(e), t = t || 2; e.length < t;) e = n ? e + "0" : "0" + e;
                        return e;
                    }
                    function M(e, t, n) {
                        return "string" == typeof e ? new h(e, t, n) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                    }
                    function E(e, t) {
                        return O(t.inputFormat, {
                            date: e
                        }, t);
                    }
                    function j(e, t) {
                        var n, i, a = 0, r = 0;
                        for (w(t).lastIndex = 0; i = w(t).exec(t.inputFormat);) {
                            var o = new RegExp("\\d+$").exec(i[0]);
                            if ((a += r = o ? parseInt(o[0]) : i[0].length) >= e + 1) {
                                n = i, i = w(t).exec(t.inputFormat);
                                break;
                            }
                        }
                        return {
                            targetMatchIndex: a - r,
                            nextMatch: i,
                            targetMatch: n
                        };
                    }
                    i.default.extendAliases({
                        datetime: {
                            mask: function (e) {
                                return e.numericInput = !1, y.S = m.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat,
                                    e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat,
                                    e.regex = O(e.inputFormat, void 0, e), e.min = M(e.min, e.inputFormat, e), e.max = M(e.max, e.inputFormat, e),
                                    null;
                            },
                            placeholder: "",
                            inputFormat: "isoDateTime",
                            displayFormat: null,
                            outputFormat: null,
                            min: null,
                            max: null,
                            skipOptionalPartCharacter: "",
                            preValidation: function (e, t, n, i, a, r, o, l) {
                                if (l) return !0;
                                if (isNaN(n) && e[t] !== n) {
                                    var s = j(t, a);
                                    if (s.nextMatch && s.nextMatch[0] === n && s.targetMatch[0].length > 1) {
                                        var c = y[s.targetMatch[0]][0];
                                        if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0",
                                        {
                                            fuzzy: !0,
                                            buffer: e,
                                            refreshFromBuffer: {
                                                start: t - 1,
                                                end: t + 1
                                            },
                                            pos: t + 1
                                        };
                                    }
                                }
                                return !0;
                            },
                            postValidation: function (e, t, n, i, a, r, o, s) {
                                var c, u;
                                if (o) return !0;
                                if (!1 === i && (((c = j(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]] || (c = j(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]]) && (u = y[c.targetMatch[0]][0]),
                                    void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(n + "0") ? (e[t] = n,
                                        e[t + 1] = "0", i = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(u).test("0" + n) && (e[t] = "0", e[t + 1] = n, i = {
                                            pos: t + 2
                                        })), !1 === i)) return i;
                                if (i.fuzzy && (e = i.buffer, t = i.pos), (c = j(t, a)).targetMatch && c.targetMatch[0] && void 0 !== y[c.targetMatch[0]]) {
                                    var f = y[c.targetMatch[0]];
                                    u = f[0];
                                    var p = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                    if (!1 === new RegExp(u).test(p.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"),
                                        "year" == f[2]) for (var d = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = d[h],
                                            r.validPositions.splice(t + 1, 1);
                                }
                                var m = i, g = M(e.join(""), a.inputFormat, a);
                                return m && !isNaN(g.date.getTime()) && (a.prefillYear && (m = function (e, t, n) {
                                    if (e.year !== e.rawyear) {
                                        var i = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = i.slice(0, a.length), o = i.slice(a.length);
                                        if (2 === a.length && a === r) {
                                            var l = new Date(v, e.month - 1, e.day);
                                            e.day == l.getDate() && (!n.max || n.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v),
                                                e.year = i, t.insert = [{
                                                    pos: t.pos + 1,
                                                    c: o[0]
                                                }, {
                                                    pos: t.pos + 2,
                                                    c: o[1]
                                                }]);
                                        }
                                    }
                                    return t;
                                }(g, m, a)), m = function (e, t, n, i, a) {
                                    if (!t) return t;
                                    if (t && n.min && !isNaN(n.min.date.getTime())) {
                                        var r;
                                        for (e.reset(), w(n).lastIndex = 0; r = w(n).exec(n.inputFormat);) {
                                            var o;
                                            if ((o = P(r)) && o[3]) {
                                                for (var l = o[1], s = e[o[2]], c = n.min[o[2]], u = n.max ? n.max[o[2]] : c, f = [], p = !1, d = 0; d < c.length; d++) void 0 !== i.validPositions[d + r.index] || p ? (f[d] = s[d],
                                                    p = p || s[d] > c[d]) : (d + r.index == 0 && s[d] < c[d] ? (f[d] = s[d], p = !0) : f[d] = c[d],
                                                        "year" === o[2] && s.length - 1 == d && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")),
                                                        "ampm" === o[2] && c != u && n.min.date.getTime() > e.date.getTime() && (f[d] = u[d]));
                                                l.call(e._date, f.join(""));
                                            }
                                        }
                                        t = n.min.date.getTime() <= e.date.getTime(), e.reInit();
                                    }
                                    return t && n.max && (isNaN(n.max.date.getTime()) || (t = n.max.date.getTime() >= e.date.getTime())),
                                        t;
                                }(g, m = S.call(this, g, m, a), a, r)), void 0 !== t && m && i.pos !== t ? {
                                    buffer: O(a.inputFormat, g, a).split(""),
                                    refreshFromBuffer: {
                                        start: t,
                                        end: i.pos
                                    },
                                    pos: i.caret || i.pos
                                } : m;
                            },
                            onKeyDown: function (e, t, n, i) {
                                e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(E(new Date, i)),
                                    d(this).trigger("setvalue"));
                            },
                            onUnMask: function (e, t, n) {
                                return t ? O(n.outputFormat, M(e, n.inputFormat, n), n, !0) : t;
                            },
                            casing: function (e, t, n, i) {
                                return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                            },
                            onBeforeMask: function (e, t) {
                                return "[object Date]" === Object.prototype.toString.call(e) && (e = E(e, t)), e;
                            },
                            insertMode: !1,
                            insertModeVisual: !1,
                            shiftPositions: !1,
                            keepStatic: !1,
                            inputmode: "numeric",
                            prefillYear: !0
                        }
                    });
                },
                1313: function (e, t, n) {
                    var i, a = (i = n(2394)) && i.__esModule ? i : {
                        default: i
                    };
                    a.default.dependencyLib.extend(!0, a.default.prototype.i18n, {
                        dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        ordinalSuffix: ["st", "nd", "rd", "th"]
                    });
                },
                3851: function (e, t, n) {
                    var i, a = (i = n(2394)) && i.__esModule ? i : {
                        default: i
                    }, r = n(8711), o = n(4713);
                    function l(e) {
                        return function (e) {
                            if (Array.isArray(e)) return s(e);
                        }(e) || function (e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                        }(e) || function (e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                        }(e) || function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function s(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i;
                    }
                    a.default.extendDefinitions({
                        A: {
                            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                            casing: "upper"
                        },
                        "&": {
                            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                            casing: "upper"
                        },
                        "#": {
                            validator: "[0-9A-Fa-f]",
                            casing: "upper"
                        }
                    });
                    var c = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                    function u(e, t, n, i, a) {
                        if (n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e,
                            a.greedy && parseInt(e) > 255 && c.test("00" + e.charAt(2))) {
                            var r = [].concat(l(t.buffer.slice(0, n)), [".", e.charAt(2)]);
                            if (r.join("").match(/\./g).length < 4) return {
                                refreshFromBuffer: !0,
                                buffer: r,
                                caret: n + 2
                            };
                        }
                        return c.test(e);
                    }
                    a.default.extendAliases({
                        cssunit: {
                            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                        },
                        url: {
                            regex: "(https?|ftp)://.*",
                            autoUnmask: !1,
                            keepStatic: !1,
                            tabThrough: !0
                        },
                        ip: {
                            mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                            definitions: {
                                i: {
                                    validator: u
                                },
                                j: {
                                    validator: u
                                },
                                k: {
                                    validator: u
                                },
                                l: {
                                    validator: u
                                }
                            },
                            onUnMask: function (e, t, n) {
                                return e;
                            },
                            inputmode: "decimal",
                            substitutes: {
                                ",": "."
                            }
                        },
                        email: {
                            mask: function (e) {
                                var t = e.separator, n = e.quantifier, i = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = i;
                                if (t) for (var r = 0; r < n; r++) a += "[".concat(t).concat(i, "]");
                                return a;
                            },
                            greedy: !1,
                            casing: "lower",
                            separator: null,
                            quantifier: 5,
                            skipOptionalPartCharacter: "",
                            onBeforePaste: function (e, t) {
                                return (e = e.toLowerCase()).replace("mailto:", "");
                            },
                            definitions: {
                                "*": {
                                    validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                                },
                                "-": {
                                    validator: "[0-9A-Za-z-]"
                                }
                            },
                            onUnMask: function (e, t, n) {
                                return e;
                            },
                            inputmode: "email"
                        },
                        mac: {
                            mask: "##:##:##:##:##:##"
                        },
                        vin: {
                            mask: "V{13}9{4}",
                            definitions: {
                                V: {
                                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                    casing: "upper"
                                }
                            },
                            clearIncomplete: !0,
                            autoUnmask: !0
                        },
                        ssn: {
                            mask: "999-99-9999",
                            postValidation: function (e, t, n, i, a, l, s) {
                                var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                            }
                        }
                    });
                },
                207: function (e, t, n) {
                    var i = l(n(2394)), a = l(n(7184)), r = n(8711), o = n(2839);
                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var s = i.default.dependencyLib;
                    function c(e, t) {
                        for (var n = "", a = 0; a < e.length; a++) i.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? n += "\\" + e.charAt(a) : n += e.charAt(a);
                        return n;
                    }
                    function u(e, t, n, i) {
                        if (e.length > 0 && t > 0 && (!n.digitsOptional || i)) {
                            var a = e.indexOf(n.radixPoint), r = !1;
                            n.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(n.radixPoint),
                                a = e.length - 1);
                            for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                        }
                        return r && e.push(n.negationSymbol.back), e;
                    }
                    function f(e, t) {
                        var n = 0;
                        for (var i in "+" === e && (n = r.seekNext.call(this, t.validPositions.length - 1)),
                            t.tests) if ((i = parseInt(i)) >= n) for (var a = 0, o = t.tests[i].length; a < o; a++) if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][a].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
                        return n;
                    }
                    function p(e, t) {
                        for (var n = -1, i = 0, a = t.validPositions.length; i < a; i++) {
                            var r = t.validPositions[i];
                            if (r && r.match.def === e) {
                                n = i;
                                break;
                            }
                        }
                        return n;
                    }
                    function d(e, t, n, i, a) {
                        var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || i && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                        return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                            insert: {
                                pos: r === n ? r + 1 : r,
                                c: a.radixPoint
                            },
                            pos: n
                        } : o;
                    }
                    i.default.extendAliases({
                        numeric: {
                            mask: function (e) {
                                e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""),
                                    " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)),
                                    "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                var t = "0", n = e.radixPoint;
                                !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick,
                                    e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = "," === e.radixPoint ? "?" : "!",
                                    "" !== e.radixPoint && void 0 === e.definitions[n] && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]",
                                        e.definitions[n].placeholder = e.radixPoint, e.definitions[n].static = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1,
                                            e.numericInput = !0);
                                var i, r = "[+]";
                                if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {},
                                    e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator,
                                    e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0),
                                    r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                    var o = e.digits.toString().split(",");
                                    isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += n + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (i = r + n + t + "{0," + e.digits + "}",
                                        e.keepStatic = !0) : r += n + t + "{" + e.digits + "}");
                                } else e.inputmode = "numeric";
                                return r += c(e.suffix, e), r += "[-]", i && (r = [i + c(e.suffix, e) + "[-]", r]),
                                    e.greedy = !1, function (e) {
                                        void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0,
                                            a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")),
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)),
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""),
                                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN,
                                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                    }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint),
                                    r;
                            },
                            _mask: function (e) {
                                return "(" + e.groupSeparator + "999){+|1}";
                            },
                            digits: "*",
                            digitsOptional: !0,
                            enforceDigitsOnBlur: !1,
                            radixPoint: ".",
                            positionCaretOnClick: "radixFocus",
                            _radixDance: !0,
                            groupSeparator: "",
                            allowMinus: !0,
                            negationSymbol: {
                                front: "-",
                                back: ""
                            },
                            prefix: "",
                            suffix: "",
                            min: null,
                            max: null,
                            SetMaxOnOverflow: !1,
                            step: 1,
                            inputType: "text",
                            unmaskAsNumber: !1,
                            roundingFN: Math.round,
                            inputmode: "decimal",
                            shortcuts: {
                                k: "1000",
                                m: "1000000"
                            },
                            placeholder: "0",
                            greedy: !1,
                            rightAlign: !0,
                            insertMode: !0,
                            autoUnmask: !1,
                            skipOptionalPartCharacter: "",
                            usePrototypeDefinitions: !1,
                            stripLeadingZeroes: !0,
                            substituteRadixPoint: !0,
                            definitions: {
                                0: {
                                    validator: d
                                },
                                1: {
                                    validator: d,
                                    definitionSymbol: "9"
                                },
                                9: {
                                    validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                    definitionSymbol: "*"
                                },
                                "+": {
                                    validator: function (e, t, n, i, a) {
                                        return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                    }
                                },
                                "-": {
                                    validator: function (e, t, n, i, a) {
                                        return a.allowMinus && e === a.negationSymbol.back;
                                    }
                                }
                            },
                            preValidation: function (e, t, n, i, a, r, o, l) {
                                var s = this;
                                if (!1 !== a.__financeInput && n === a.radixPoint) return !1;
                                var c = e.indexOf(a.radixPoint), u = t;
                                if (t = function (e, t, n, i, a) {
                                    return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= n && (n > 0 || t == a.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1),
                                        e;
                                }(t, n, c, r, a), "-" === n || n === a.negationSymbol.front) {
                                    if (!0 !== a.allowMinus) return !1;
                                    var d = !1, h = p("+", r), v = p("-", r);
                                    return -1 !== h && (d = [h, v]), !1 !== d ? {
                                        remove: d,
                                        caret: u - a.negationSymbol.back.length
                                    } : {
                                        insert: [{
                                            pos: f.call(s, "+", r),
                                            c: a.negationSymbol.front,
                                            fromIsValid: !0
                                        }, {
                                            pos: f.call(s, "-", r),
                                            c: a.negationSymbol.back,
                                            fromIsValid: void 0
                                        }],
                                        caret: u + a.negationSymbol.back.length
                                    };
                                }
                                if (n === a.groupSeparator) return {
                                    caret: u
                                };
                                if (l) return !0;
                                if (-1 !== c && !0 === a._radixDance && !1 === i && n === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && c !== t) {
                                    var m = f.call(s, a.radixPoint, r);
                                    return r.validPositions[m] && (r.validPositions[m].generatedInput = r.validPositions[m].generated || !1),
                                    {
                                        caret: a._radixDance && t === c - 1 ? c + 1 : c
                                    };
                                }
                                if (!1 === a.__financeInput) if (i) {
                                    if (a.digitsOptional) return {
                                        rewritePosition: o.end
                                    };
                                    if (!a.digitsOptional) {
                                        if (o.begin > c && o.end <= c) return n === a.radixPoint ? {
                                            insert: {
                                                pos: c + 1,
                                                c: "0",
                                                fromIsValid: !0
                                            },
                                            rewritePosition: c
                                        } : {
                                            rewritePosition: c + 1
                                        };
                                        if (o.begin < c) return {
                                            rewritePosition: o.begin - 1
                                        };
                                    }
                                } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                    rewritePosition: c
                                };
                                return {
                                    rewritePosition: t
                                };
                            },
                            postValidation: function (e, t, n, i, a, r, o) {
                                if (!1 === i) return i;
                                if (o) return !0;
                                if (null !== a.min || null !== a.max) {
                                    var l = a.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, a, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== a.min && l < a.min && (l.toString().length > a.min.toString().length || l < 0)) return !1;
                                    if (null !== a.max && l > a.max) return !!a.SetMaxOnOverflow && {
                                        refreshFromBuffer: !0,
                                        buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                    };
                                }
                                return i;
                            },
                            onUnMask: function (e, t, n) {
                                if ("" === t && !0 === n.nullable) return t;
                                var i = e.replace(n.prefix, "");
                                return i = (i = i.replace(n.suffix, "")).replace(new RegExp((0, a.default)(n.groupSeparator), "g"), ""),
                                    "" !== n.placeholder.charAt(0) && (i = i.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")),
                                    n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== i.indexOf(n.radixPoint) && (i = i.replace(a.default.call(this, n.radixPoint), ".")),
                                        i = (i = i.replace(new RegExp("^" + (0, a.default)(n.negationSymbol.front)), "-")).replace(new RegExp((0,
                                            a.default)(n.negationSymbol.back) + "$"), ""), Number(i)) : i;
                            },
                            isComplete: function (e, t) {
                                var n = (t.numericInput ? e.slice().reverse() : e).join("");
                                return n = (n = (n = (n = (n = n.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0,
                                    a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0,
                                        a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace((0,
                                            a.default)(t.radixPoint), ".")), isFinite(n);
                            },
                            onBeforeMask: function (e, t) {
                                var n = t.radixPoint || ",";
                                isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === n || (e = e.toString().replace(".", n));
                                var i = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(n), o = r[0].replace(/[^\-0-9]/g, ""), l = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", s = r.length > 1;
                                e = o + ("" !== l ? n + l : l);
                                var c = 0;
                                if ("" !== n && (c = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits,
                                    "" !== l || !t.digitsOptional)) {
                                    var f = Math.pow(10, c || 1);
                                    e = e.replace((0, a.default)(n), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)),
                                        e = e.toString().replace(".", n);
                                }
                                if (0 === t.digits && -1 !== e.indexOf(n) && (e = e.substring(0, e.indexOf(n))),
                                    null !== t.min || null !== t.max) {
                                    var p = e.toString().replace(n, ".");
                                    null !== t.min && p < t.min ? e = t.min.toString().replace(".", n) : null !== t.max && p > t.max && (e = t.max.toString().replace(".", n));
                                }
                                return i && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, s).join("");
                            },
                            onBeforeWrite: function (e, t, n, i) {
                                function r(e, t) {
                                    if (!1 !== i.__financeInput || t) {
                                        var n = e.indexOf(i.radixPoint);
                                        -1 !== n && e.splice(n, 1);
                                    }
                                    if ("" !== i.groupSeparator) for (; -1 !== (n = e.indexOf(i.groupSeparator));) e.splice(n, 1);
                                    return e;
                                }
                                var o, l;
                                if (i.stripLeadingZeroes && (l = function (e, t) {
                                    var n = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0,
                                        a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0,
                                            a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), i = n ? n[2] : "", r = !1;
                                    return i && (i = i.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(i)),
                                        !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < i.length)) && r;
                                }(t, i))) for (var c = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, p = l[0].length - f; p > 0; p--) this.maskset.validPositions.splice(c + p, 1),
                                    delete t[c + p];
                                if (e) switch (e.type) {
                                    case "blur":
                                    case "checkval":
                                        if (null !== i.min) {
                                            var d = i.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, i, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== i.min && d < i.min) return {
                                                refreshFromBuffer: !0,
                                                buffer: u(i.min.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                                            };
                                        }
                                        if (t[t.length - 1] === i.negationSymbol.front) {
                                            var h = new RegExp("(^" + ("" != i.negationSymbol.front ? (0, a.default)(i.negationSymbol.front) + "?" : "") + (0,
                                                a.default)(i.prefix) + ")(.*)(" + (0, a.default)(i.suffix) + ("" != i.negationSymbol.back ? (0,
                                                    a.default)(i.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                            0 == (h ? h[2] : "") && (o = {
                                                refreshFromBuffer: !0,
                                                buffer: [0]
                                            });
                                        } else if ("" !== i.radixPoint) {
                                            t.indexOf(i.radixPoint) === i.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + i.suffix.length) : (t.splice(0, 1 + i.suffix.length),
                                                o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: r(t)
                                                }));
                                        }
                                        if (i.enforceDigitsOnBlur) {
                                            var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                            o.refreshFromBuffer = !0, o.buffer = u(v, i.digits, i, !0).reverse();
                                        }
                                }
                                return o;
                            },
                            onKeyDown: function (e, t, n, i) {
                                var a, r = s(this);
                                if (3 != e.location) {
                                    var l, c = e.key;
                                    if ((l = i.shortcuts && i.shortcuts[c]) && l.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(l)),
                                        r.trigger("setvalue"), !1;
                                }
                                if (e.ctrlKey) switch (e.key) {
                                    case o.keys.ArrowUp:
                                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)),
                                            r.trigger("setvalue"), !1;

                                    case o.keys.ArrowDown:
                                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)),
                                            r.trigger("setvalue"), !1;
                                }
                                if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && n.begin !== t.length) {
                                    if (t[e.key === o.keys.Delete ? n.begin - 1 : n.end] === i.negationSymbol.front) return a = t.slice().reverse(),
                                        "" !== i.negationSymbol.front && a.shift(), "" !== i.negationSymbol.back && a.pop(),
                                        r.trigger("setvalue", [a.join(""), n.begin]), !1;
                                    if (!0 === i._radixDance) {
                                        var f = t.indexOf(i.radixPoint);
                                        if (i.digitsOptional) {
                                            if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [a.join(""), n.begin >= a.length ? a.length : n.begin]),
                                                !1;
                                        } else if (-1 !== f && (n.begin < f || n.end < f || e.key === o.keys.Delete && (n.begin === f || n.begin - 1 === f))) {
                                            var p = void 0;
                                            return n.begin === n.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? n.begin++ : e.key === o.keys.Delete && n.begin - 1 === f && (p = s.extend({}, n),
                                                n.begin--, n.end--)), (a = t.slice().reverse()).splice(a.length - n.begin, n.begin - n.end + 1),
                                                a = u(a, i.digits, i).join(""), p && (n = p), r.trigger("setvalue", [a, n.begin >= a.length ? f + 1 : n.begin]),
                                                !1;
                                        }
                                    }
                                }
                            }
                        },
                        currency: {
                            prefix: "",
                            groupSeparator: ",",
                            alias: "numeric",
                            digits: 2,
                            digitsOptional: !1
                        },
                        decimal: {
                            alias: "numeric"
                        },
                        integer: {
                            alias: "numeric",
                            inputmode: "numeric",
                            digits: 0
                        },
                        percentage: {
                            alias: "numeric",
                            min: 0,
                            max: 100,
                            suffix: " %",
                            digits: 0,
                            allowMinus: !1
                        },
                        indianns: {
                            alias: "numeric",
                            _mask: function (e) {
                                return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                            },
                            groupSeparator: ",",
                            radixPoint: ".",
                            placeholder: "0",
                            digits: 2,
                            digitsOptional: !1
                        }
                    });
                },
                9380: function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
                    t.default = n ? window : {};
                },
                7760: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.HandleNativePlaceholder = function (e, t) {
                        var n = e ? e.inputmask : this;
                        if (l.ie) {
                            if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                var i = r.getBuffer.call(n).slice(), a = e.inputmask._valueGet();
                                if (a !== t) {
                                    var o = r.getLastValidPosition.call(n);
                                    -1 === o && a === r.getBufferTemplate.call(n).join("") ? i = [] : -1 !== o && u.call(n, i),
                                        p(e, i);
                                }
                            }
                        } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                    }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function (e) {
                        var t = e ? e.inputmask : this, n = t.opts, i = t.maskset;
                        if (e) {
                            if (void 0 === e.inputmask) return e.value;
                            e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                        }
                        for (var a = [], o = i.validPositions, l = 0, s = o.length; l < s; l++) o[l] && o[l].match && (1 != o[l].match.static || Array.isArray(i.metadata) && !0 !== o[l].generatedInput) && a.push(o[l].input);
                        var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                        if ("function" == typeof n.onUnMask) {
                            var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                            u = n.onUnMask.call(t, f, u, n);
                        }
                        return u;
                    }, t.writeBuffer = p;
                    var i = n(2839), a = n(4713), r = n(8711), o = n(7215), l = n(9845), s = n(6030);
                    function c(e, t) {
                        var n = e ? e.inputmask : this, i = n.opts;
                        e.inputmask.refreshValue = !1, "function" == typeof i.onBeforeMask && (t = i.onBeforeMask.call(n, t, i) || t),
                            f(e, !0, !1, t = (t || "").toString().split("")), n.undoValue = n._valueGet(!0),
                            (i.clearMaskOnLostFocus || i.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(n).join("") && -1 === r.getLastValidPosition.call(n) && e.inputmask._valueSet("");
                    }
                    function u(e) {
                        e.length = 0;
                        for (var t, n = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = n.shift());) e.push(t);
                        return e;
                    }
                    function f(e, t, n, i, l) {
                        var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, d = c.dependencyLib, h = i.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                        f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c, !1), c.clicked = 0, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                            begin: 0,
                            end: 0
                        }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                            begin: m
                        };
                        var k = [], b = c.caretPos;
                        if (h.forEach((function (e, t) {
                            if (void 0 !== e) {
                                var i = new d.Event("_checkval");
                                i.key = e, v += e;
                                var o = r.getLastValidPosition.call(c, void 0, !0);
                                !function (e, t) {
                                    for (var n = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), i = n.indexOf(t); i > 0 && " " === n[i - 1];) i--;
                                    var o = 0 === i && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                    if (!o && i > 0 && !r.isMask.call(c, e, !1, !0)) {
                                        var l = r.seekNext.call(c, e);
                                        c.caretPos.begin < l && (c.caretPos = {
                                            begin: l
                                        });
                                    }
                                    return o;
                                }(m, v) ? (g = s.EventHandlers.keypressEvent.call(c, i, !0, !1, n, c.caretPos.begin)) && (m = c.caretPos.begin + 1,
                                    v = "") : g = s.EventHandlers.keypressEvent.call(c, i, !0, !1, n, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos),
                                        c.isRTL || (g.forwardPosition = g.pos + 1)), p.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, i, !1),
                                        c.caretPos = {
                                            begin: g.forwardPosition,
                                            end: g.forwardPosition
                                        }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                            }
                        })), k.length > 0) {
                            var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                            if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for (var S = w; void 0 !== (x = k.shift());) if (x < S) {
                                var O = new d.Event("_checkval");
                                if ((P = u.validPositions[x]).generatedInput = !0, O.key = P.input, (g = s.EventHandlers.keypressEvent.call(c, O, !0, !1, n, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos); else if (!g) break;
                                S++;
                            }
                        }
                        t && p.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, l || new d.Event("checkval"), l && ("input" === l.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === l.type)),
                            f.skipOptionalPartCharacter = y;
                    }
                    function p(e, t, n, a, l) {
                        var s = e ? e.inputmask : this, c = s.opts, u = s.dependencyLib;
                        if (a && "function" == typeof c.onBeforeWrite) {
                            var f = c.onBeforeWrite.call(s, a, t, n, c);
                            if (f) {
                                if (f.refreshFromBuffer) {
                                    var p = f.refreshFromBuffer;
                                    o.refreshFromBuffer.call(s, !0 === p ? p : p.start, p.end, f.buffer || t), t = r.getBuffer.call(s, !0);
                                }
                                void 0 !== n && (n = void 0 !== f.caret ? f.caret : n);
                            }
                        }
                        if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === n || void 0 !== a && "blur" === a.type || r.caret.call(s, e, n, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === i.keys.Delete || a.key === i.keys.Backspace)),
                            void 0 === e.inputmask.writeBufferHook || e.inputmask.writeBufferHook(n), !0 === l)) {
                            var d = u(e), h = e.inputmask._valueGet();
                            e.inputmask.skipInputEvent = !0, d.trigger("input"), setTimeout((function () {
                                h === r.getBufferTemplate.call(s).join("") ? d.trigger("cleared") : !0 === o.isComplete.call(s, t) && d.trigger("complete");
                            }), 0);
                        }
                    }
                },
                2394: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var i = n(157), a = v(n(4963)), r = v(n(9380)), o = n(2391), l = n(4713), s = n(8711), c = n(7215), u = n(7760), f = n(9716), p = v(n(7392)), d = v(n(3976));
                    function h(e) {
                        return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, h(e);
                    }
                    function v(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var m = r.default.document, g = "_inputmask_opts";
                    function y(e, t, n) {
                        if (!(this instanceof y)) return new y(e, t, n);
                        this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0,
                            !0 !== n && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {},
                                e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions,
                                this.userOptions = t || {}, k(this.opts.alias, t, this.opts)), this.refreshValue = !1,
                            this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1,
                            this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0,
                            this.isComposing = !1, this.hasAlternator = !1;
                    }
                    function k(e, t, n) {
                        var i = y.prototype.aliases[e];
                        return i ? (i.alias && k(i.alias, void 0, n), a.default.extend(!0, n, i), a.default.extend(!0, n, t),
                            !0) : (null === n.mask && (n.mask = e), !1);
                    }
                    y.prototype = {
                        dataAttribute: "data-inputmask",
                        defaults: d.default,
                        definitions: p.default,
                        aliases: {},
                        masksCache: {},
                        i18n: {},
                        get isRTL() {
                            return this.opts.isRTL || this.opts.numericInput;
                        },
                        mask: function (e) {
                            var t = this;
                            return "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)),
                                (e = e.nodeName ? [e] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function (e, n) {
                                    var l = a.default.extend(!0, {}, t.opts);
                                    if (function (e, t, n, i) {
                                        function o(t, a) {
                                            var o = "" === i ? t : i + "-" + t;
                                            null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)),
                                                n[t] = a);
                                        }
                                        if (!0 === t.importDataAttributes) {
                                            var l, s, c, u, f = e.getAttribute(i);
                                            if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")),
                                                s) for (u in c = void 0, s) if ("alias" === u.toLowerCase()) {
                                                    c = s[u];
                                                    break;
                                                }
                                            for (l in o("alias", c), n.alias && k(n.alias, n, t), t) {
                                                if (s) for (u in c = void 0, s) if (u.toLowerCase() === l.toLowerCase()) {
                                                    c = s[u];
                                                    break;
                                                }
                                                o(l, c);
                                            }
                                        }
                                        a.default.extend(!0, t, n), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                        ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"),
                                            t.isRTL = !0);
                                        return Object.keys(n).length;
                                    }(e, l, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                        var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                                        void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()),
                                            e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache,
                                            e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e,
                                            e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = s, a.default.data(e, g, t.userOptions),
                                            i.mask.call(e.inputmask));
                                    }
                                })), e && e[0] && e[0].inputmask || this;
                        },
                        option: function (e, t) {
                            return "string" == typeof e ? this.opts[e] : "object" === h(e) ? (a.default.extend(this.userOptions, e),
                                this.el && !0 !== t && this.mask(this.el), this) : void 0;
                        },
                        unmaskedvalue: function (e) {
                            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache),
                                void 0 === this.el || void 0 !== e) {
                                var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
                            }
                            return u.unmaskedvalue.call(this, this.el);
                        },
                        remove: function () {
                            if (this.el) {
                                a.default.data(this.el, g, null);
                                var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""),
                                    f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                        get: this.__valueGet,
                                        set: this.__valueSet,
                                        configurable: !0
                                    }) : m.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet),
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                            }
                            return this.el;
                        },
                        getemptymask: function () {
                            return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache),
                                (this.isRTL ? s.getBufferTemplate.call(this).reverse() : s.getBufferTemplate.call(this)).join("");
                        },
                        hasMaskedValue: function () {
                            return !this.opts.autoUnmask;
                        },
                        isComplete: function () {
                            return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache),
                                c.isComplete.call(this, s.getBuffer.call(this));
                        },
                        getmetadata: function () {
                            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache),
                                Array.isArray(this.maskset.metadata)) {
                                var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
                                return this.maskset.metadata.forEach((function (t) {
                                    return t.mask !== e || (e = t, !1);
                                })), e;
                            }
                            return this.maskset.metadata;
                        },
                        isValid: function (e) {
                            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache),
                                e) {
                                var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                u.checkVal.call(this, void 0, !0, !1, t);
                            } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                            for (var n = s.getBuffer.call(this), i = s.determineLastRequiredPosition.call(this), a = n.length - 1; a > i && !s.isMask.call(this, a); a--);
                            return n.splice(i, a + 1 - i), c.isComplete.call(this, n) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
                        },
                        format: function (e, t) {
                            this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                            var n = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !0, !1, n);
                            var i = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                            return t ? {
                                value: i,
                                metadata: this.getmetadata()
                            } : i;
                        },
                        setValue: function (e) {
                            this.el && (0, a.default)(this.el).trigger("setvalue", [e]);
                        },
                        analyseMask: o.analyseMask
                    }, y.extendDefaults = function (e) {
                        a.default.extend(!0, y.prototype.defaults, e);
                    }, y.extendDefinitions = function (e) {
                        a.default.extend(!0, y.prototype.definitions, e);
                    }, y.extendAliases = function (e) {
                        a.default.extend(!0, y.prototype.aliases, e);
                    }, y.format = function (e, t, n) {
                        return y(t).format(e, n);
                    }, y.unmask = function (e, t) {
                        return y(t).unmaskedvalue(e);
                    }, y.isValid = function (e, t) {
                        return y(t).isValid(e);
                    }, y.remove = function (e) {
                        "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach((function (e) {
                            e.inputmask && e.inputmask.remove();
                        }));
                    }, y.setValue = function (e, t) {
                        "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach((function (e) {
                            e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [t]);
                        }));
                    }, y.dependencyLib = a.default, r.default.Inputmask = y;
                    t.default = y;
                },
                5296: function (e, t, n) {
                    function i(e) {
                        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, i(e);
                    }
                    var a = d(n(9380)), r = d(n(2394));
                    function o(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0),
                                Object.defineProperty(e, (r = a.key, o = void 0, o = function (e, t) {
                                    if ("object" !== i(e) || null === e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var a = n.call(e, t || "default");
                                        if ("object" !== i(a)) return a;
                                        throw new TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return ("string" === t ? String : Number)(e);
                                }(r, "string"), "symbol" === i(o) ? o : String(o)), a);
                        }
                        var r, o;
                    }
                    function l(e) {
                        var t = u();
                        return function () {
                            var n, a = p(e);
                            if (t) {
                                var r = p(this).constructor;
                                n = Reflect.construct(a, arguments, r);
                            } else n = a.apply(this, arguments);
                            return function (e, t) {
                                if (t && ("object" === i(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                return function (e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                }(e);
                            }(this, n);
                        };
                    }
                    function s(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return s = function (e) {
                            if (null === e || !function (e) {
                                try {
                                    return -1 !== Function.toString.call(e).indexOf("[native code]");
                                } catch (t) {
                                    return "function" == typeof e;
                                }
                            }(e)) return e;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, n);
                            }
                            function n() {
                                return c(e, arguments, p(this).constructor);
                            }
                            return n.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: n,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), f(n, e);
                        }, s(e);
                    }
                    function c(e, t, n) {
                        return c = u() ? Reflect.construct.bind() : function (e, t, n) {
                            var i = [null];
                            i.push.apply(i, t);
                            var a = new (Function.bind.apply(e, i));
                            return n && f(a, n.prototype), a;
                        }, c.apply(null, arguments);
                    }
                    function u() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))),
                                !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    function f(e, t) {
                        return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                            return e.__proto__ = t, e;
                        }, f(e, t);
                    }
                    function p(e) {
                        return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e);
                        }, p(e);
                    }
                    function d(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var h = a.default.document;
                    if (h && h.head && h.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                        var v = function (e) {
                            !function (e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), t && f(e, t);
                            }(s, e);
                            var t, n, i, a = l(s);
                            function s() {
                                var e;
                                !function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                }(this, s);
                                var t = (e = a.call(this)).getAttributeNames(), n = e.attachShadow({
                                    mode: "closed"
                                });
                                for (var i in e.input = h.createElement("input"), e.input.type = "text", n.appendChild(e.input),
                                    t) Object.prototype.hasOwnProperty.call(t, i) && e.input.setAttribute(t[i], e.getAttribute(t[i]));
                                var o = new r.default;
                                return o.dataAttribute = "", o.mask(e.input), e.input.inputmask.shadowRoot = n,
                                    e;
                            }
                            return t = s, (n = [{
                                key: "attributeChangedCallback",
                                value: function (e, t, n) {
                                    this.input.setAttribute(e, n);
                                }
                            }, {
                                key: "value",
                                get: function () {
                                    return this.input.value;
                                },
                                set: function (e) {
                                    this.input.value = e;
                                }
                            }]) && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), s;
                        }(s(HTMLElement));
                        a.default.customElements.define("input-mask", v);
                    }
                },
                2839: function (e, t) {
                    function n(e) {
                        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, n(e);
                    }
                    function i(e, t) {
                        return function (e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function (e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var i, a, r, o, l = [], s = !0, c = !1;
                                try {
                                    if (r = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        s = !1;
                                    } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                                } catch (e) {
                                    c = !0, a = e;
                                } finally {
                                    try {
                                        if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                    } finally {
                                        if (c) throw a;
                                    }
                                }
                                return l;
                            }
                        }(e, t) || function (e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                        }(e, t) || function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i;
                    }
                    function r(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            }))), n.push.apply(n, i);
                        }
                        return n;
                    }
                    function o(e, t, i) {
                        return (t = function (e) {
                            var t = function (e, t) {
                                if ("object" !== n(e) || null === e) return e;
                                var i = e[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var a = i.call(e, t || "default");
                                    if ("object" !== n(a)) return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === t ? String : Number)(e);
                            }(e, "string");
                            return "symbol" === n(t) ? t : String(t);
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.keys = t.keyCode = t.ignorables = void 0, t.toKey = function (e, t) {
                        return c[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                    }, t.toKeyCode = function (e) {
                        return s[e];
                    };
                    var l = t.ignorables = {
                        Alt: 18,
                        AltGraph: 18,
                        ArrowDown: 40,
                        ArrowLeft: 37,
                        ArrowRight: 39,
                        ArrowUp: 38,
                        Backspace: 8,
                        CapsLock: 20,
                        Control: 17,
                        ContextMenu: 93,
                        Dead: 221,
                        Delete: 46,
                        End: 35,
                        Escape: 27,
                        F1: 112,
                        F2: 113,
                        F3: 114,
                        F4: 115,
                        F5: 116,
                        F6: 117,
                        F7: 118,
                        F8: 119,
                        F9: 120,
                        F10: 121,
                        F11: 122,
                        F12: 123,
                        Home: 36,
                        Insert: 45,
                        NumLock: 144,
                        PageDown: 34,
                        PageUp: 33,
                        Pause: 19,
                        PrintScreen: 44,
                        Process: 229,
                        Shift: 16,
                        ScrollLock: 145,
                        Tab: 9,
                        Unidentified: 229
                    }, s = t.keyCode = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? r(Object(n), !0).forEach((function (t) {
                                o(e, t, n[t]);
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            }));
                        }
                        return e;
                    }({
                        c: 67,
                        x: 88,
                        z: 90,
                        BACKSPACE_SAFARI: 127,
                        Enter: 13,
                        Meta_LEFT: 91,
                        Meta_RIGHT: 92,
                        Space: 32
                    }, l), c = Object.entries(s).reduce((function (e, t) {
                        var n = i(t, 2), a = n[0], r = n[1];
                        return e[r] = void 0 === e[r] ? a : e[r], e;
                    }), {});
                    t.keys = Object.entries(s).reduce((function (e, t) {
                        var n = i(t, 2), a = n[0];
                        n[1];
                        return e[a] = "Space" === a ? " " : a, e;
                    }), {});
                },
                2391: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.analyseMask = function (e, t, n) {
                        var i, o, s, c, u, f, p = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, h = !1, v = new a.default, m = [], g = [], y = !1;
                        function k(e, i, a) {
                            a = void 0 !== a ? a : e.matches.length;
                            var o = e.matches[a - 1];
                            if (t) {
                                if (0 === i.indexOf("[") || h && /\\d|\\s|\\w|\\p/i.test(i) || "." === i) {
                                    var s = n.casing ? "i" : "";
                                    /\\p\{.*}/i.test(i) && (s += "u"), e.matches.splice(a++, 0, {
                                        fn: new RegExp(i, s),
                                        static: !1,
                                        optionality: !1,
                                        newBlockMarker: void 0 === o ? "master" : o.def !== i,
                                        casing: null,
                                        def: i,
                                        placeholder: "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                        nativeDef: i
                                    });
                                } else h && (i = i[i.length - 1]), i.split("").forEach((function (t, i) {
                                    o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                        fn: /[a-z]/i.test(n.staticDefinitionSymbol || t) ? new RegExp("[" + (n.staticDefinitionSymbol || t) + "]", n.casing ? "i" : "") : null,
                                        static: !0,
                                        optionality: !1,
                                        newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                        casing: null,
                                        def: n.staticDefinitionSymbol || t,
                                        placeholder: void 0 !== n.staticDefinitionSymbol ? t : "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                        nativeDef: (h ? "'" : "") + t
                                    });
                                }));
                                h = !1;
                            } else {
                                var c = n.definitions && n.definitions[i] || n.usePrototypeDefinitions && r.default.prototype.definitions[i];
                                c && !h ? e.matches.splice(a++, 0, {
                                    fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, n.casing ? "i" : "") : new function () {
                                        this.test = c.validator;
                                    } : new RegExp("."),
                                    static: c.static || !1,
                                    optionality: c.optional || !1,
                                    defOptionality: c.optional || !1,
                                    newBlockMarker: void 0 === o || c.optional ? "master" : o.def !== (c.definitionSymbol || i),
                                    casing: c.casing,
                                    def: c.definitionSymbol || i,
                                    placeholder: c.placeholder,
                                    nativeDef: i,
                                    generated: c.generated
                                }) : (e.matches.splice(a++, 0, {
                                    fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== i && !0 !== o.static,
                                    casing: null,
                                    def: n.staticDefinitionSymbol || i,
                                    placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0,
                                    nativeDef: (h ? "'" : "") + i
                                }), h = !1);
                            }
                        }
                        function b() {
                            if (m.length > 0) {
                                if (k(c = m[m.length - 1], o), c.isAlternator) {
                                    u = m.pop();
                                    for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                    m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                                }
                            } else k(v, o);
                        }
                        function x(e) {
                            var t = new a.default(!0);
                            return t.openGroup = !1, t.matches = e, t;
                        }
                        function P() {
                            if ((s = m.pop()).openGroup = !1, void 0 !== s) if (m.length > 0) {
                                if ((c = m[m.length - 1]).matches.push(s), c.isAlternator) {
                                    u = m.pop();
                                    for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup = !1, u.matches[e].alternatorGroup = !1;
                                    m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                                }
                            } else v.matches.push(s); else b();
                        }
                        function w(e) {
                            var t = e.pop();
                            return t.isQuantifier && (t = x([e.pop(), t])), t;
                        }
                        t && (n.optionalmarker[0] = void 0, n.optionalmarker[1] = void 0);
                        for (; i = t ? d.exec(e) : p.exec(e);) {
                            if (o = i[0], t) {
                                switch (o.charAt(0)) {
                                    case "?":
                                        o = "{0,1}";
                                        break;

                                    case "+":
                                    case "*":
                                        o = "{" + o + "}";
                                        break;

                                    case "|":
                                        if (0 === m.length) {
                                            var S = x(v.matches);
                                            S.openGroup = !0, m.push(S), v.matches = [], y = !0;
                                        }
                                }
                                switch (o) {
                                    case "\\d":
                                        o = "[0-9]";
                                        break;

                                    case "\\p":
                                        o += d.exec(e)[0], o += d.exec(e)[0];
                                }
                            }
                            if (h) b(); else switch (o.charAt(0)) {
                                case "$":
                                case "^":
                                    t || b();
                                    break;

                                case n.escapeChar:
                                    h = !0, t && b();
                                    break;

                                case n.optionalmarker[1]:
                                case n.groupmarker[1]:
                                    P();
                                    break;

                                case n.optionalmarker[0]:
                                    m.push(new a.default(!1, !0));
                                    break;

                                case n.groupmarker[0]:
                                    m.push(new a.default(!0));
                                    break;

                                case n.quantifiermarker[0]:
                                    var O = new a.default(!1, !1, !0), _ = (o = o.replace(/[{}?]/g, "")).split("|"), M = _[0].split(","), E = isNaN(M[0]) ? M[0] : parseInt(M[0]), j = 1 === M.length ? E : isNaN(M[1]) ? M[1] : parseInt(M[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                    "*" !== E && "+" !== E || (E = "*" === j ? 0 : 1), O.quantifier = {
                                        min: E,
                                        max: j,
                                        jit: T
                                    };
                                    var A = m.length > 0 ? m[m.length - 1].matches : v.matches;
                                    (i = A.pop()).isGroup || (i = x([i])), A.push(i), A.push(O);
                                    break;

                                case n.alternatormarker:
                                    if (m.length > 0) {
                                        var D = (c = m[m.length - 1]).matches[c.matches.length - 1];
                                        f = c.openGroup && (void 0 === D.matches || !1 === D.isGroup && !1 === D.isAlternator) ? m.pop() : w(c.matches);
                                    } else f = w(v.matches);
                                    if (f.isAlternator) m.push(f); else if (f.alternatorGroup ? (u = m.pop(), f.alternatorGroup = !1) : u = new a.default(!1, !1, !1, !0),
                                        u.matches.push(f), m.push(u), f.openGroup) {
                                        f.openGroup = !1;
                                        var L = new a.default(!0);
                                        L.alternatorGroup = !0, m.push(L);
                                    }
                                    break;

                                default:
                                    b();
                            }
                        }
                        y && P();
                        for (; m.length > 0;) s = m.pop(), v.matches.push(s);
                        v.matches.length > 0 && (!function e(i) {
                            i && i.matches && i.matches.forEach((function (a, r) {
                                var o = i.matches[r + 1];
                                (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1,
                                    t || (k(a, n.groupmarker[0], 0), !0 !== a.openGroup && k(a, n.groupmarker[1]))),
                                    e(a);
                            }));
                        }(v), g.push(v));
                        (n.numericInput || n.isRTL) && function e(t) {
                            for (var i in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, i)) {
                                var a = parseInt(i);
                                if (t.matches[i].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                    var r = t.matches[i];
                                    t.matches.splice(i, 1), t.matches.splice(a + 1, 0, r);
                                }
                                void 0 !== t.matches[i].matches ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === n.optionalmarker[0] ? o = n.optionalmarker[1] : o === n.optionalmarker[1] ? o = n.optionalmarker[0] : o === n.groupmarker[0] ? o = n.groupmarker[1] : o === n.groupmarker[1] && (o = n.groupmarker[0]),
                                    o);
                            }
                            var o;
                            return t;
                        }(g[0]);
                        return g;
                    }, t.generateMaskSet = function (e, t) {
                        var n;
                        function a(e, t) {
                            var n = t.repeat, i = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                            if (n > 0 || "*" === n || "+" === n) {
                                var l = "*" === n ? 0 : "+" === n ? 1 : n;
                                if (l != n) e = i[0] + e + i[1] + a[0] + l + "," + n + a[1]; else for (var c = e, u = 1; u < l; u++) e += c;
                            }
                            if (!0 === r) {
                                var f = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                                f && f.forEach((function (t, n) {
                                    var i = function (e, t) {
                                        return function (e) {
                                            if (Array.isArray(e)) return e;
                                        }(e) || function (e, t) {
                                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != n) {
                                                var i, a, r, o, l = [], s = !0, c = !1;
                                                try {
                                                    if (r = (n = n.call(e)).next, 0 === t) {
                                                        if (Object(n) !== n) return;
                                                        s = !1;
                                                    } else for (; !(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0);
                                                } catch (e) {
                                                    c = !0, a = e;
                                                } finally {
                                                    try {
                                                        if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                                    } finally {
                                                        if (c) throw a;
                                                    }
                                                }
                                                return l;
                                            }
                                        }(e, t) || function (e, t) {
                                            if (!e) return;
                                            if ("string" == typeof e) return s(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            "Object" === n && e.constructor && (n = e.constructor.name);
                                            if ("Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                        }(e, t) || function () {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        }();
                                    }(t.split("["), 2), a = i[0], r = i[1];
                                    r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0,
                                        o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                                }));
                            }
                            return e;
                        }
                        function c(e, n, o) {
                            var s, c, u = !1;
                            return null !== e && "" !== e || ((u = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (u = !0,
                                e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""),
                                e = a(e, o), c = u ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e,
                                null !== o.keepStatic && (c = "ks_" + o.keepStatic + c), "object" === l(o.placeholder) && (c = "ph_" + JSON.stringify(o.placeholder) + c),
                                void 0 === r.default.prototype.masksCache[c] || !0 === t ? (s = {
                                    mask: e,
                                    maskToken: r.default.prototype.analyseMask(e, u, o),
                                    validPositions: [],
                                    _buffer: void 0,
                                    buffer: void 0,
                                    tests: {},
                                    excludes: {},
                                    metadata: n,
                                    maskLength: void 0,
                                    jitOffset: {}
                                }, !0 !== t && (r.default.prototype.masksCache[c] = s, s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]))) : s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]),
                                s;
                        }
                        "function" == typeof e.mask && (e.mask = e.mask(e));
                        if (Array.isArray(e.mask)) {
                            if (e.mask.length > 1) {
                                null === e.keepStatic && (e.keepStatic = !0);
                                var u = e.groupmarker[0];
                                return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function (t) {
                                    u.length > 1 && (u += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? u += t.mask : u += t;
                                })), c(u += e.groupmarker[1], e.mask, e);
                            }
                            e.mask = e.mask.pop();
                        }
                        n = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? c(e.mask.mask, e.mask, e) : c(e.mask, e.mask, e);
                        null === e.keepStatic && (e.keepStatic = !1);
                        return n;
                    };
                    var i = c(n(4963)), a = c(n(9695)), r = c(n(2394)), o = c(n(7184));
                    function l(e) {
                        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, l(e);
                    }
                    function s(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i;
                    }
                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                },
                157: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.mask = function () {
                        var e = this, t = this.opts, n = this.el, u = this.dependencyLib;
                        o.EventRuler.off(n);
                        var f = function (t, n) {
                            "textarea" !== t.tagName.toLowerCase() && n.ignorables.push(i.keys.Enter);
                            var l = t.getAttribute("type"), s = "input" === t.tagName.toLowerCase() && n.supportsInputType.includes(l) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                            if (!s) if ("input" === t.tagName.toLowerCase()) {
                                var c = document.createElement("input");
                                c.setAttribute("type", l), s = "text" === c.type, c = null;
                            } else s = "partial";
                            return !1 !== s ? function (t) {
                                var i, l;
                                function s() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== n.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && n.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : i.call(this) : "" : i.call(this);
                                }
                                function c(e) {
                                    l.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                                }
                                if (!t.inputmask.__valueGet) {
                                    if (!0 !== n.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                            f && f.get && f.set ? (i = f.get, l = f.set, Object.defineProperty(t, "value", {
                                                get: s,
                                                set: c,
                                                configurable: !0
                                            })) : "input" !== t.tagName.toLowerCase() && (i = function () {
                                                return this.textContent;
                                            }, l = function (e) {
                                                this.textContent = e;
                                            }, Object.defineProperty(t, "value", {
                                                get: s,
                                                set: c,
                                                configurable: !0
                                            }));
                                        } else document.__lookupGetter__ && t.__lookupGetter__("value") && (i = t.__lookupGetter__("value"),
                                            l = t.__lookupSetter__("value"), t.__defineGetter__("value", s), t.__defineSetter__("value", c));
                                        t.inputmask.__valueGet = i, t.inputmask.__valueSet = l;
                                    }
                                    t.inputmask._valueGet = function (t) {
                                        return e.isRTL && !0 !== t ? i.call(this.el).split("").reverse().join("") : i.call(this.el);
                                    }, t.inputmask._valueSet = function (t, n) {
                                        l.call(this.el, null == t ? "" : !0 !== n && e.isRTL ? t.split("").reverse().join("") : t);
                                    }, void 0 === i && (i = function () {
                                        return this.value;
                                    }, l = function (e) {
                                        this.value = e;
                                    }, function (t) {
                                        if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                            var i = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function (e) {
                                                return e.value;
                                            }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function (e, t) {
                                                return e.value = t, e;
                                            };
                                            u.valHooks[t] = {
                                                get: function (t) {
                                                    if (t.inputmask) {
                                                        if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                        var r = i(t);
                                                        return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== n.nullable ? r : "";
                                                    }
                                                    return i(t);
                                                },
                                                set: function (e, t) {
                                                    var n = o(e, t);
                                                    return e.inputmask && (0, r.applyInputValue)(e, t), n;
                                                },
                                                inputmaskpatch: !0
                                            };
                                        }
                                    }(t.type), function (e) {
                                        o.EventRuler.on(e, "mouseenter", (function () {
                                            var e = this, t = e.inputmask._valueGet(!0);
                                            t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0,
                                                r.applyInputValue)(e, t);
                                        }));
                                    }(t));
                                }
                            }(t) : t.inputmask = void 0, s;
                        }(n, t);
                        if (!1 !== f) {
                            e.originalPlaceholder = n.placeholder, e.maxLength = void 0 !== n ? n.maxLength : void 0,
                                -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in n && null === n.getAttribute("inputmode") && (n.inputMode = t.inputmode,
                                    n.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(n.autocomplete),
                                        l.iphone && (t.insertModeVisual = !1, n.setAttribute("autocorrect", "off")), o.EventRuler.on(n, "submit", c.EventHandlers.submitEvent),
                                        o.EventRuler.on(n, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(n, "blur", c.EventHandlers.blurEvent),
                                        o.EventRuler.on(n, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(n, "invalid", c.EventHandlers.invalidEvent),
                                        o.EventRuler.on(n, "click", c.EventHandlers.clickEvent), o.EventRuler.on(n, "mouseleave", c.EventHandlers.mouseleaveEvent),
                                        o.EventRuler.on(n, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(n, "paste", c.EventHandlers.pasteEvent),
                                        o.EventRuler.on(n, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(n, "complete", t.oncomplete),
                                        o.EventRuler.on(n, "incomplete", t.onincomplete), o.EventRuler.on(n, "cleared", t.oncleared),
                                        !0 !== t.inputEventOnly && o.EventRuler.on(n, "keydown", c.EventHandlers.keyEvent),
                                        (l.mobile || t.inputEventOnly) && n.removeAttribute("maxLength"), o.EventRuler.on(n, "input", c.EventHandlers.inputFallBackEvent)),
                                o.EventRuler.on(n, "setvalue", c.EventHandlers.setValueEvent), void 0 === e.applyMaskHook || e.applyMaskHook.call(e),
                                a.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                            var p = (n.inputmask.shadowRoot || n.ownerDocument).activeElement;
                            if ("" !== n.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || p === n) {
                                (0, r.applyInputValue)(n, n.inputmask._valueGet(!0), t);
                                var d = a.getBuffer.call(e).slice();
                                !1 === s.isComplete.call(e, d) && t.clearIncomplete && a.resetMaskSet.call(e, !1),
                                    t.clearMaskOnLostFocus && p !== n && (-1 === a.getLastValidPosition.call(e) ? d = [] : r.clearOptionalTail.call(e, d)),
                                    (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && p === n || "" !== n.inputmask._valueGet(!0)) && (0,
                                        r.writeBuffer)(n, d), p === n && a.caret.call(e, n, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                            }
                        }
                    };
                    var i = n(2839), a = n(8711), r = n(7760), o = n(9716), l = n(9845), s = n(7215), c = n(6030);
                },
                9695: function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function (e, t, n, i) {
                        this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1,
                            this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1,
                            this.quantifier = {
                                min: 1,
                                max: 1
                            };
                    };
                },
                3194: function () {
                    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                        value: function (e, t) {
                            if (null == this) throw new TypeError('"this" is null or not defined');
                            var n = Object(this), i = n.length >>> 0;
                            if (0 === i) return !1;
                            for (var a = 0 | t, r = Math.max(a >= 0 ? a : i - Math.abs(a), 0); r < i;) {
                                if (n[r] === e) return !0;
                                r++;
                            }
                            return !1;
                        }
                    });
                },
                9302: function () {
                    var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), n = Function.bind.call(Function.call, Array.prototype.concat), i = Object.keys;
                    Object.entries || (Object.entries = function (a) {
                        return e(i(a), (function (e, i) {
                            return n(e, "string" == typeof i && t(a, i) ? [[i, a[i]]] : []);
                        }), []);
                    });
                },
                7149: function () {
                    function e(t) {
                        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, e(t);
                    }
                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function (e) {
                        return e.__proto__;
                    } : function (e) {
                        return e.constructor.prototype;
                    });
                },
                4013: function () {
                    String.prototype.includes || (String.prototype.includes = function (e, t) {
                        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                    });
                },
                8711: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.caret = function (e, t, n, i, r) {
                        var o, l = this, s = this.opts;
                        if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart,
                            n = e.selectionEnd) : a.default.getSelection ? (o = a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset,
                                n = o.endOffset) : document.selection && document.selection.createRange && (n = (t = 0 - (o = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length),
                        {
                            begin: i ? t : f.call(l, t),
                            end: i ? n : f.call(l, n)
                        };
                        if (Array.isArray(t) && (n = l.isRTL ? t[0] : t[1], t = l.isRTL ? t[1] : t[0]),
                            void 0 !== t.begin && (n = l.isRTL ? t.begin : t.end, t = l.isRTL ? t.end : t.begin),
                            "number" == typeof t) {
                            t = i ? t : f.call(l, t), n = "number" == typeof (n = i ? n : f.call(l, n)) ? n : t;
                            var c = parseInt(((e.ownerDocument.defaultView || a.default).getComputedStyle ? (e.ownerDocument.defaultView || a.default).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                            if (e.scrollLeft = c > e.scrollWidth ? c : 0, e.inputmask.caretPos = {
                                begin: t,
                                end: n
                            }, s.insertModeVisual && !1 === s.insertMode && t === n && (r || n++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) {
                                if ("setSelectionRange" in e) e.setSelectionRange(t, n); else if (a.default.getSelection) {
                                    if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                        var u = document.createTextNode("");
                                        e.appendChild(u);
                                    }
                                    o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length),
                                        o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length),
                                        o.collapse(!0);
                                    var p = a.default.getSelection();
                                    p.removeAllRanges(), p.addRange(o);
                                } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", n),
                                    o.moveStart("character", t), o.select());
                                void 0 === e.inputmask.caretHook || e.inputmask.caretHook.call(l, {
                                    begin: t,
                                    end: n
                                });
                            }
                        }
                    }, t.determineLastRequiredPosition = function (e) {
                        var t, n, i = this, a = i.maskset, l = i.dependencyLib, c = r.getMaskTemplate.call(i, !0, s.call(i), !0, !0), u = c.length, f = s.call(i), p = {}, d = a.validPositions[f], h = void 0 !== d ? d.locator.slice() : void 0;
                        for (t = f + 1; t < c.length; t++) h = (n = r.getTestTemplate.call(i, t, h, t - 1)).locator.slice(),
                            p[t] = l.extend(!0, {}, n);
                        var v = d && void 0 !== d.alternation ? d.locator[d.alternation] : void 0;
                        for (t = u - 1; t > f && (((n = p[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || v && (v !== p[t].locator[d.alternation] && 1 != n.match.static || !0 === n.match.static && n.locator[d.alternation] && o.checkAlternationMatch.call(i, n.locator[d.alternation].toString().split(","), v.toString().split(",")) && "" !== r.getTests.call(i, t)[0].def)) && c[t] === r.getPlaceholder.call(i, t, n.match)); t--) u--;
                        return e ? {
                            l: u,
                            def: p[u] ? p[u].match : void 0
                        } : u;
                    }, t.determineNewCaretPosition = function (e, t, n) {
                        var i = this, a = i.maskset, o = i.opts;
                        t && (i.isRTL ? e.end = e.begin : e.begin = e.end);
                        if (e.begin === e.end) {
                            switch (n = n || o.positionCaretOnClick) {
                                case "none":
                                    break;

                                case "select":
                                    e = {
                                        begin: 0,
                                        end: l.call(i).length
                                    };
                                    break;

                                case "ignore":
                                    e.end = e.begin = u.call(i, s.call(i));
                                    break;

                                case "radixFocus":
                                    if (i.clicked > 1 && 0 == a.validPositions.length) break;
                                    if (function (e) {
                                        if ("" !== o.radixPoint && 0 !== o.digits) {
                                            var t = a.validPositions;
                                            if (void 0 === t[e] || t[e].input === r.getPlaceholder.call(i, e)) {
                                                if (e < u.call(i, -1)) return !0;
                                                var n = l.call(i).indexOf(o.radixPoint);
                                                if (-1 !== n) {
                                                    for (var s = 0, c = t.length; s < c; s++) if (t[s] && n < s && t[s].input !== r.getPlaceholder.call(i, s)) return !1;
                                                    return !0;
                                                }
                                            }
                                        }
                                        return !1;
                                    }(e.begin)) {
                                        var f = l.call(i).join("").indexOf(o.radixPoint);
                                        e.end = e.begin = o.numericInput ? u.call(i, f) : f;
                                        break;
                                    }

                                default:
                                    var p = e.begin, d = s.call(i, p, !0), h = u.call(i, -1 !== d || c.call(i, 0) ? d : -1);
                                    if (p <= h) e.end = e.begin = c.call(i, p, !1, !0) ? p : u.call(i, p); else {
                                        var v = a.validPositions[d], m = r.getTestTemplate.call(i, h, v ? v.match.locator : void 0, v), g = r.getPlaceholder.call(i, h, m.match);
                                        if ("" !== g && l.call(i)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !c.call(i, h, o.keepStatic, !0) && m.match.def === g) {
                                            var y = u.call(i, h);
                                            (p >= y || p === h) && (h = y);
                                        }
                                        e.end = e.begin = h;
                                    }
                            }
                            return e;
                        }
                    }, t.getBuffer = l, t.getBufferTemplate = function () {
                        var e = this.maskset;
                        void 0 === e._buffer && (e._buffer = r.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                        return e._buffer;
                    }, t.getLastValidPosition = s, t.isMask = c, t.resetMaskSet = function (e) {
                        var t = this.maskset;
                        t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                        !1 === e && (t.tests = {});
                    }, t.seekNext = u, t.seekPrevious = function (e, t) {
                        var n = this, i = e - 1;
                        if (e <= 0) return 0;
                        for (; i > 0 && (!0 === t && (!0 !== r.getTest.call(n, i).match.newBlockMarker || !c.call(n, i, void 0, !0)) || !0 !== t && !c.call(n, i, void 0, !0));) i--;
                        return i;
                    }, t.translatePosition = f;
                    var i, a = (i = n(9380)) && i.__esModule ? i : {
                        default: i
                    }, r = n(4713), o = n(7215);
                    function l(e) {
                        var t = this, n = t.maskset;
                        return void 0 !== n.buffer && !0 !== e || (n.buffer = r.getMaskTemplate.call(t, !0, s.call(t), !0),
                            void 0 === n._buffer && (n._buffer = n.buffer.slice())), n.buffer;
                    }
                    function s(e, t, n) {
                        var i = this.maskset, a = -1, r = -1, o = n || i.validPositions;
                        void 0 === e && (e = -1);
                        for (var l = 0, s = o.length; l < s; l++) o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l),
                            l >= e && (r = l));
                        return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
                    }
                    function c(e, t, n) {
                        var i = this, a = this.maskset, o = r.getTestTemplate.call(i, e).match;
                        if ("" === o.def && (o = r.getTest.call(i, e).match), !0 !== o.static) return o.fn;
                        if (!0 === n && void 0 !== a.validPositions[e] && !0 !== a.validPositions[e].generatedInput) return !0;
                        if (!0 !== t && e > -1) {
                            if (n) {
                                var l = r.getTests.call(i, e);
                                return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                            }
                            var s = r.determineTestTemplate.call(i, e, r.getTests.call(i, e)), c = r.getPlaceholder.call(i, e, s.match);
                            return s.match.def !== c;
                        }
                        return !1;
                    }
                    function u(e, t, n) {
                        var i = this;
                        void 0 === n && (n = !0);
                        for (var a = e + 1; "" !== r.getTest.call(i, a).match.def && (!0 === t && (!0 !== r.getTest.call(i, a).match.newBlockMarker || !c.call(i, a, void 0, !0)) || !0 !== t && !c.call(i, a, void 0, n));) a++;
                        return a;
                    }
                    function f(e) {
                        var t = this.opts, n = this.el;
                        return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !n || (e = this._valueGet().length - e) < 0 && (e = 0),
                            e;
                    }
                },
                4713: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.determineTestTemplate = f, t.getDecisionTaker = s, t.getMaskTemplate = function (e, t, n, i, a) {
                        var r = this, o = this.opts, l = this.maskset, s = o.greedy;
                        a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                        t = t || 0;
                        var p, d, v, m, g = [], y = 0;
                        do {
                            if (!0 === e && l.validPositions[y]) d = (v = a && l.validPositions[y].match.optionality && void 0 === l.validPositions[y + 1] && (!0 === l.validPositions[y].generatedInput || l.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? f.call(r, y, h.call(r, y, p, y - 1)) : l.validPositions[y]).match,
                                p = v.locator.slice(), g.push(!0 === n ? v.input : !1 === n ? d.nativeDef : c.call(r, y, d)); else {
                                d = (v = u.call(r, y, p, y - 1)).match, p = v.locator.slice();
                                var k = !0 !== i && (!1 !== o.jitMasking ? o.jitMasking : d.jit);
                                (m = (m || l.validPositions[y - 1]) && d.static && d.def !== o.groupSeparator && null === d.fn) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === n ? d.nativeDef : c.call(r, g.length, d)) : m = !1;
                            }
                            y++;
                        } while (!0 !== d.static || "" !== d.def || t > y);
                        "" === g[g.length - 1] && g.pop();
                        !1 === n && void 0 !== l.maskLength || (l.maskLength = y - 1);
                        return o.greedy = s, g;
                    }, t.getPlaceholder = c, t.getTest = p, t.getTestTemplate = u, t.getTests = h, t.isSubsetOf = d;
                    var i, a = n(8711), r = (i = n(2394)) && i.__esModule ? i : {
                        default: i
                    };
                    function o(e) {
                        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e;
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, o(e);
                    }
                    function l(e, t) {
                        var n = (null != e.alternation ? e.mloc[s(e)] : e.locator).join("");
                        if ("" !== n) for (n = n.split(":")[0]; n.length < t;) n += "0";
                        return n;
                    }
                    function s(e) {
                        var t = e.locator[e.alternation];
                        return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                    }
                    function c(e, t, n) {
                        var i = this, r = this.opts, l = this.maskset;
                        if (void 0 !== (t = t || p.call(i, e).match).placeholder || !0 === n) {
                            if ("" !== t.placeholder && !0 === t.static && !0 !== t.generated) {
                                var s = a.getLastValidPosition.call(i, e), c = a.seekNext.call(i, s);
                                return (n ? e <= c : e < c) ? r.staticDefinitionSymbol && t.static ? t.nativeDef : t.def : "function" == typeof t.placeholder ? t.placeholder(r) : t.placeholder;
                            }
                            return "function" == typeof t.placeholder ? t.placeholder(r) : t.placeholder;
                        }
                        if (!0 === t.static) {
                            if (e > -1 && void 0 === l.validPositions[e]) {
                                var u, f = h.call(i, e), d = [];
                                if ("string" == typeof r.placeholder && f.length > 1 + ("" === f[f.length - 1].match.def ? 1 : 0)) for (var v = 0; v < f.length; v++) if ("" !== f[v].match.def && !0 !== f[v].match.optionality && !0 !== f[v].match.optionalQuantifier && (!0 === f[v].match.static || void 0 === u || !1 !== f[v].match.fn.test(u.match.def, l, e, !0, r)) && (d.push(f[v]),
                                    !0 === f[v].match.static && (u = f[v]), d.length > 1 && /[0-9a-bA-Z]/.test(d[0].match.def))) return r.placeholder.charAt(e % r.placeholder.length);
                            }
                            return t.def;
                        }
                        return "object" === o(r.placeholder) ? t.def : r.placeholder.charAt(e % r.placeholder.length);
                    }
                    function u(e, t, n) {
                        return this.maskset.validPositions[e] || f.call(this, e, h.call(this, e, t ? t.slice() : t, n));
                    }
                    function f(e, t) {
                        var n = this.opts, i = 0, a = function (e, t) {
                            var n = 0, i = !1;
                            t.forEach((function (e) {
                                e.match.optionality && (0 !== n && n !== e.match.optionality && (i = !0), (0 === n || n > e.match.optionality) && (n = e.match.optionality));
                            })), n && (0 == e || 1 == t.length ? n = 0 : i || (n = 0));
                            return n;
                        }(e, t);
                        e = e > 0 ? e - 1 : 0;
                        var r, o, s, c = l(p.call(this, e));
                        n.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (i = 1);
                        for (var u = 0; u < t.length - i; u++) {
                            var f = t[u];
                            r = l(f, c.length);
                            var d = Math.abs(r - c);
                            (void 0 === o || "" !== r && d < o || s && !n.greedy && s.match.optionality && s.match.optionality - a > 0 && "master" === s.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || s && !n.greedy && s.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d,
                                s = f);
                        }
                        return s;
                    }
                    function p(e, t) {
                        var n = this.maskset;
                        return n.validPositions[e] ? n.validPositions[e] : (t || h.call(this, e))[0];
                    }
                    function d(e, t, n) {
                        function i(e) {
                            for (var t, n = [], i = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++i < t;) n.push(String.fromCharCode(i)); else i = e.charCodeAt(a),
                                n.push(e.charAt(a));
                            return n.join("");
                        }
                        return e.match.def === t.match.nativeDef || !(!(n.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && ("." === t.match.fn.source || -1 !== i(t.match.fn.source.replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.source.replace(/[[\]/]/g, ""))));
                    }
                    function h(e, t, n) {
                        var i, a, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, u = this.el, p = s.maskToken, h = t ? n : 0, v = t ? t.slice() : [0], m = [], g = !1, y = t ? t.join("") : "", k = !1;
                        function b(t, n, a, l) {
                            function f(a, l, p) {
                                function v(e, t) {
                                    var n = 0 === t.matches.indexOf(e);
                                    return n || t.matches.every((function (i, a) {
                                        return !0 === i.isQuantifier ? n = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(i, "matches") && (n = v(e, i)),
                                            !n;
                                    })), n;
                                }
                                function P(e, t, n) {
                                    var i, a;
                                    if ((s.tests[e] || s.validPositions[e]) && (s.validPositions[e] ? [s.validPositions[e]] : s.tests[e]).every((function (e, r) {
                                        if (e.mloc[t]) return i = e, !1;
                                        var o = void 0 !== n ? n : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                        return (void 0 === a || l < a) && -1 !== l && (i = e, a = l), !0;
                                    })), i) {
                                        var r = i.locator[i.alternation], o = i.mloc[t] || i.mloc[r] || i.locator;
                                        if (-1 !== o[o.length - 1].toString().indexOf(":")) o.pop();
                                        return o.slice((void 0 !== n ? n : i.alternation) + 1);
                                    }
                                    return void 0 !== n ? P(e, t) : void 0;
                                }
                                function w(t, n) {
                                    return !0 === t.match.static && !0 !== n.match.static && n.match.fn.test(t.match.def, s, e, !1, c, !1);
                                }
                                function S(e, t) {
                                    var n = e.alternation, i = void 0 === t || n <= t.alternation && -1 === e.locator[n].toString().indexOf(t.locator[n]);
                                    if (!i && n > t.alternation) for (var a = 0; a < n; a++) if (e.locator[a] !== t.locator[a]) {
                                        n = a, i = !0;
                                        break;
                                    }
                                    return !!i && function (n) {
                                        e.mloc = e.mloc || {};
                                        var i = e.locator[n];
                                        if (void 0 !== i) {
                                            if ("string" == typeof i && (i = i.split(",")[0]), void 0 === e.mloc[i] && (e.mloc[i] = e.locator.slice(),
                                                e.mloc[i].push(":".concat(e.alternation))), void 0 !== t) {
                                                for (var a in t.mloc) "string" == typeof a && (a = parseInt(a.split(",")[0])), e.mloc[a + 0] = t.mloc[a];
                                                e.locator[n] = Object.keys(e.mloc).join(",");
                                            }
                                            return e.alternation > n && (e.alternation = n), !0;
                                        }
                                        return e.alternation = void 0, !1;
                                    }(n);
                                }
                                function O(e, t) {
                                    if (e.locator.length !== t.locator.length) return !1;
                                    for (var n = e.alternation + 1; n < e.locator.length; n++) if (e.locator[n] !== t.locator[n]) return !1;
                                    return !0;
                                }
                                if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                                if (h === e && void 0 === a.matches) {
                                    if (m.push({
                                        match: a,
                                        locator: l.reverse(),
                                        cd: y,
                                        mloc: {}
                                    }), !a.optionality || void 0 !== p || !(c.definitions && c.definitions[a.nativeDef] && c.definitions[a.nativeDef].optional || r.default.prototype.definitions[a.nativeDef] && r.default.prototype.definitions[a.nativeDef].optional)) return !0;
                                    g = !0, h = e;
                                } else if (void 0 !== a.matches) {
                                    if (a.isGroup && p !== a) return function () {
                                        if (a = f(t.matches[t.matches.indexOf(a) + 1], l, p)) return !0;
                                    }();
                                    if (a.isOptional) return function () {
                                        var t = a, r = m.length;
                                        if (a = b(a, n, l, p), m.length > 0) {
                                            if (m.forEach((function (e, t) {
                                                t >= r && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                            })), i = m[m.length - 1].match, void 0 !== p || !v(i, t)) return a;
                                            g = !0, h = e;
                                        }
                                    }();
                                    if (a.isAlternator) return function () {
                                        function i(e) {
                                            for (var t, n = e.matches[0].matches ? e.matches[0].matches.length : 1, i = 0; i < e.matches.length && n === (t = e.matches[i].matches ? e.matches[i].matches.length : 1); i++);
                                            return n !== t;
                                        }
                                        o.hasAlternator = !0;
                                        var r, v = a, y = [], b = m.slice(), x = l.length, _ = n.length > 0 ? n.shift() : -1;
                                        if (-1 === _ || "string" == typeof _) {
                                            var M, E = h, j = n.slice(), T = [];
                                            if ("string" == typeof _) T = _.split(","); else for (M = 0; M < v.matches.length; M++) T.push(M.toString());
                                            if (void 0 !== s.excludes[e]) {
                                                for (var A = T.slice(), D = 0, L = s.excludes[e].length; D < L; D++) {
                                                    var B = s.excludes[e][D].toString().split(":");
                                                    l.length == B[1] && T.splice(T.indexOf(B[0]), 1);
                                                }
                                                0 === T.length && (delete s.excludes[e], T = A);
                                            }
                                            (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && E >= c.keepStatic) && (T = T.slice(0, 1));
                                            for (var C = 0; C < T.length; C++) {
                                                M = parseInt(T[C]), m = [], n = "string" == typeof _ && P(h, M, x) || j.slice();
                                                var R = v.matches[M];
                                                if (R && f(R, [M].concat(l), p)) a = !0; else if (0 === C && (k = i(v)), R && R.matches && R.matches.length > v.matches[0].matches.length) break;
                                                r = m.slice(), h = E, m = [];
                                                for (var I = 0; I < r.length; I++) {
                                                    var F = r[I], N = !1;
                                                    F.alternation = F.alternation || x, S(F);
                                                    for (var V = 0; V < y.length; V++) {
                                                        var G = y[V];
                                                        if ("string" != typeof _ || void 0 !== F.alternation && T.includes(F.locator[F.alternation].toString())) {
                                                            if (F.match.nativeDef === G.match.nativeDef) {
                                                                N = !0, S(G, F);
                                                                break;
                                                            }
                                                            if (d(F, G, c)) {
                                                                S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F));
                                                                break;
                                                            }
                                                            if (d(G, F, c)) {
                                                                S(G, F);
                                                                break;
                                                            }
                                                            if (w(F, G)) {
                                                                O(F, G) || void 0 !== u.inputmask.userOptions.keepStatic ? S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F)) : c.keepStatic = !0;
                                                                break;
                                                            }
                                                            if (w(G, F)) {
                                                                S(G, F);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    N || y.push(F);
                                                }
                                            }
                                            m = b.concat(y), h = e, g = m.length > 0 && k, a = y.length > 0 && !k, n = j.slice();
                                        } else a = f(v.matches[_] || t.matches[_], [_].concat(l), p);
                                        if (a) return !0;
                                    }();
                                    if (a.isQuantifier && p !== t.matches[t.matches.indexOf(a) - 1]) return function () {
                                        for (var r = a, o = !1, u = n.length > 0 ? n.shift() : 0; u < (isNaN(r.quantifier.max) ? u + 1 : r.quantifier.max) && h <= e; u++) {
                                            var p = t.matches[t.matches.indexOf(r) - 1];
                                            if (a = f(p, [u].concat(l), p)) {
                                                if (m.forEach((function (t, n) {
                                                    (i = x(p, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = u >= r.quantifier.min,
                                                        i.jit = (u + 1) * (p.matches.indexOf(i) + 1) > r.quantifier.jit, i.optionalQuantifier && v(i, p) && (g = !0,
                                                            h = e, c.greedy && null == s.validPositions[e - 1] && u > r.quantifier.min && -1 != ["*", "+"].indexOf(r.quantifier.max) && (m.pop(),
                                                                y = void 0), o = !0, a = !1), !o && i.jit && (s.jitOffset[e] = p.matches.length - p.matches.indexOf(i));
                                                })), o) break;
                                                return !0;
                                            }
                                        }
                                    }();
                                    if (a = b(a, n, l, p)) return !0;
                                } else h++;
                            }
                            for (var p = n.length > 0 ? n.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                                var v = f(t.matches[p], [p].concat(a), l);
                                if (v && h === e) return v;
                                if (h > e) break;
                            }
                        }
                        function x(e, t) {
                            var n = -1 != e.matches.indexOf(t);
                            return n || e.matches.forEach((function (e, i) {
                                void 0 === e.matches || n || (n = x(e, t));
                            })), n;
                        }
                        if (e > -1) {
                            if (void 0 === t) {
                                for (var P, w = e - 1; void 0 === (P = s.validPositions[w] || s.tests[w]) && w > -1;) w--;
                                void 0 !== P && w > -1 && (v = function (e, t) {
                                    var n, i = [];
                                    return Array.isArray(t) || (t = [t]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (i = f.call(o, e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : t.forEach((function (e) {
                                        "" !== e.def && (0 === i.length ? (n = e.alternation, i = e.locator.slice()) : e.locator[n] && -1 === i[n].toString().indexOf(e.locator[n]) && (i[n] += "," + e.locator[n]));
                                    }))), i;
                                }(w, P), y = v.join(""), h = w);
                            }
                            if (s.tests[e] && s.tests[e][0].cd === y) return s.tests[e];
                            for (var S = v.shift(); S < p.length; S++) {
                                if (b(p[S], v, [S]) && h === e || h > e) break;
                            }
                        }
                        return (0 === m.length || g) && m.push({
                            match: {
                                fn: null,
                                static: !0,
                                optionality: !1,
                                casing: null,
                                def: "",
                                placeholder: ""
                            },
                            locator: k ? [0] : [],
                            mloc: {},
                            cd: y
                        }), void 0 !== t && s.tests[e] ? a = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m),
                            a = s.tests[e]), m.forEach((function (e) {
                                e.match.optionality = e.match.defOptionality || !1;
                            })), a;
                    }
                },
                7215: function (e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.alternate = l, t.checkAlternationMatch = function (e, t, n) {
                        for (var i, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== n ? n.split(",") : [], l = 0; l < o.length; l++) -1 !== (i = e.indexOf(o[l])) && e.splice(i, 1);
                        for (var s = 0; s < e.length; s++) if (a.includes(e[s])) {
                            r = !0;
                            break;
                        }
                        return r;
                    }, t.handleRemove = function (e, t, n, o, s) {
                        var c = this, u = this.maskset, f = this.opts;
                        if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace),
                            c.isRTL)) {
                            var p = n.end;
                            n.end = n.begin, n.begin = p;
                        }
                        var d, h = r.getLastValidPosition.call(c, void 0, !0);
                        n.end >= r.getBuffer.call(c).length && h >= n.end && (n.end = h + 1);
                        t === a.keys.Backspace ? n.end - n.begin < 1 && (n.begin = r.seekPrevious.call(c, n.begin)) : t === a.keys.Delete && n.begin === n.end && (n.end = r.isMask.call(c, n.end, !0, !0) ? n.end + 1 : r.seekNext.call(c, n.end) + 1);
                        if (!1 !== (d = v.call(c, n))) {
                            if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== i.getTest.call(c, n.begin).match.def.indexOf("|")) {
                                var m = l.call(c, !0);
                                if (m) {
                                    var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                    (t !== a.keys.Delete || n.begin > g) && n.begin;
                                }
                            }
                            !0 !== o && (u.p = t === a.keys.Delete ? n.begin + d : n.begin, u.p = r.determineNewCaretPosition.call(c, {
                                begin: u.p,
                                end: u.p
                            }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                        }
                    }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = d,
                        t.revalidateMask = v;
                    var i = n(4713), a = n(2839), r = n(8711), o = n(6030);
                    function l(e, t, n, a, o, s) {
                        var c, u, p, d, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, O = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), M = !1, E = !1, j = void 0 !== o ? o : r.getLastValidPosition.call(x);
                        if (s && (k = s.begin, b = s.end, s.begin > s.end && (k = s.end, b = s.begin)),
                            -1 === j && void 0 === o) c = 0, u = (d = i.getTest.call(x, c)).alternation; else for (; j >= 0; j--) if ((p = S.validPositions[j]) && void 0 !== p.alternation) {
                                if (j <= (e || 0) && d && d.locator[p.alternation] !== p.locator[p.alternation]) break;
                                c = j, u = S.validPositions[c].alternation, d = p;
                            }
                        if (void 0 !== u) {
                            m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0,
                                i.getDecisionTaker)(d) + ":" + d.alternation);
                            var T = [], A = -1;
                            for (h = m; m < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (T.push(t),
                                A = T.length - 1), (v = S.validPositions[m]) && !0 !== v.generatedInput && (void 0 === s || h < k || h >= b) && T.push(v.input),
                                S.validPositions.splice(m, 1);
                            for (-1 === A && void 0 !== t && (T.push(t), A = T.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10;) {
                                for (S.tests = {}, r.resetMaskSet.call(x, !0), M = !0, h = 0; h < T.length && (g = M.caret || 0 == w.insertMode && null != g ? r.seekNext.call(x, g) : r.getLastValidPosition.call(x, void 0, !0) + 1,
                                    y = T[h], M = f.call(x, g, y, !1, a, !0)); h++) h === A && (E = M), 1 == e && M && (E = {
                                        caretPos: h
                                    });
                                if (M) break;
                                if (r.resetMaskSet.call(x), d = i.getTest.call(x, m), S.validPositions = P.extend(!0, [], O),
                                    S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                                    E = l.call(x, e, t, n, a, m - 1, s);
                                    break;
                                }
                                if (null != d.alternation) {
                                    var D = (0, i.getDecisionTaker)(d);
                                    if (-1 !== S.excludes[m].indexOf(D + ":" + d.alternation)) {
                                        E = l.call(x, e, t, n, a, m - 1, s);
                                        break;
                                    }
                                    for (S.excludes[m].push(D + ":" + d.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) S.validPositions.splice(m);
                                } else delete S.excludes[m];
                            }
                        }
                        return E && !1 === w.keepStatic || delete S.excludes[m], E;
                    }
                    function s(e, t, n) {
                        var i = this.opts, r = this.maskset;
                        switch (i.casing || t.casing) {
                            case "upper":
                                e = e.toUpperCase();
                                break;

                            case "lower":
                                e = e.toLowerCase();
                                break;

                            case "title":
                                var o = r.validPositions[n - 1];
                                e = 0 === n || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                                break;

                            default:
                                if ("function" == typeof i.casing) {
                                    var l = Array.prototype.slice.call(arguments);
                                    l.push(r.validPositions), e = i.casing.apply(this, l);
                                }
                        }
                        return e;
                    }
                    function c(e) {
                        var t = this, n = this.opts, a = this.maskset;
                        if ("function" == typeof n.isComplete) return n.isComplete(e, n);
                        if ("*" !== n.repeat) {
                            var o = !1, l = r.determineLastRequiredPosition.call(t, !0), s = l.l;
                            if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                                o = !0;
                                for (var c = 0; c <= s; c++) {
                                    var u = i.getTestTemplate.call(t, c).match;
                                    if (!0 !== u.static && void 0 === a.validPositions[c] && (!1 === u.optionality || void 0 === u.optionality || u.optionality && 0 == u.newBlockMarker) && (!1 === u.optionalQuantifier || void 0 === u.optionalQuantifier) || !0 === u.static && "" != u.def && e[c] !== i.getPlaceholder.call(t, c, u)) {
                                        o = !1;
                                        break;
                                    }
                                }
                            }
                            return o;
                        }
                    }
                    function u(e) {
                        var t = this.opts.insertMode ? 0 : 1;
                        return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                    }
                    function f(e, t, n, a, o, p, m) {
                        var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                        n = !0 === n;
                        var x = e;
                        function P(e) {
                            if (void 0 !== e) {
                                if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [e.remove]),
                                    e.remove.sort((function (e, t) {
                                        return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                                    })).forEach((function (e) {
                                        v.call(g, {
                                            begin: e,
                                            end: e + 1
                                        });
                                    })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [e.insert]),
                                        e.insert.sort((function (e, t) {
                                            return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                                        })).forEach((function (e) {
                                            "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                    var t = e.refreshFromBuffer;
                                    d.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                }
                                void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                            }
                            return e;
                        }
                        function w(t, n, o) {
                            var l = !1;
                            return i.getTests.call(g, t).every((function (c, f) {
                                var p = c.match;
                                if (r.getBuffer.call(g, !0), !1 !== (l = (!p.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != p.fn ? p.fn.test(n, b, t, o, k, u.call(g, e)) : (n === p.def || n === k.skipOptionalPartCharacter) && "" !== p.def && {
                                    c: i.getPlaceholder.call(g, t, p, !0) || p.def,
                                    pos: t
                                }))) {
                                    var d = void 0 !== l.c ? l.c : n, h = t;
                                    return d = d === k.skipOptionalPartCharacter && !0 === p.static ? i.getPlaceholder.call(g, t, p, !0) || p.def : d,
                                        !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                            input: s.call(g, d, p, h)
                                        }), a, h) && (l = !1), !1);
                                }
                                return !0;
                            })), l;
                        }
                        void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                        var S = !0, O = y.extend(!0, [], b.validPositions);
                        if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0,
                            delete b.tests[_]);
                        if ("function" == typeof k.preValidation && !0 !== a && !0 !== p && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, n || o))),
                            !0 === S) {
                            if (S = w(x, t, n), (!n || !0 === a) && !1 === S && !0 !== p) {
                                var M = b.validPositions[x];
                                if (!M || !0 !== M.match.static || M.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                    if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                        var E = !1;
                                        if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x),
                                            E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var j = x + 1, T = r.seekNext.call(g, x, !1, 0 !== x); j <= T; j++) if (!1 !== (S = w(j, t, n))) {
                                                S = h.call(g, x, void 0 !== S.pos ? S.pos : j) || S, x = j;
                                                break;
                                            }
                                    }
                                } else S = {
                                    caret: r.seekNext.call(g, x)
                                };
                            }
                            g.hasAlternator && !0 !== o && !n && (o = !0, !1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = l.call(g, x, t, n, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = l.call(g, !0))),
                                !0 === S && (S = {
                                    pos: x
                                });
                        }
                        if ("function" == typeof k.postValidation && !0 !== a && !0 !== p) {
                            var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, n, m);
                            void 0 !== A && (S = !0 === A ? S : A);
                        }
                        S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === p ? (r.resetMaskSet.call(g, !0),
                            b.validPositions = y.extend(!0, [], O)) : h.call(g, void 0, x, !0);
                        var D = P(S);
                        void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0),
                            b.validPositions = y.extend(!0, [], O), D = !1));
                        return D;
                    }
                    function p(e, t, n) {
                        for (var a = this.maskset, r = !1, o = i.getTests.call(this, e), l = 0; l < o.length; l++) {
                            if (o[l].match && (o[l].match.nativeDef === t.match[n.shiftPositions ? "def" : "nativeDef"] && (!n.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || n.regex && !o[l].match.static && o[l].match.fn.test(t.input, a, e, !1, n))) {
                                r = !0;
                                break;
                            }
                            if (o[l].match && o[l].match.def === t.match.nativeDef) {
                                r = void 0;
                                break;
                            }
                        }
                        return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, n)),
                            r;
                    }
                    function d(e, t, n) {
                        var i, a, l = this, s = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, p = l.isRTL ? n.slice().reverse() : n;
                        if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(l, !1), e = 0,
                            t = n.length, a = r.determineNewCaretPosition.call(l, {
                                begin: 0,
                                end: 0
                            }, !1).begin; else {
                            for (i = e; i < t; i++) s.validPositions.splice(e, 0);
                            a = e;
                        }
                        var d = new u.Event("keypress");
                        for (i = e; i < t; i++) {
                            d.key = p[i].toString(), l.ignorable = !1;
                            var h = o.EventHandlers.keypressEvent.call(l, d, !0, !1, !1, a);
                            !1 !== h && void 0 !== h && (a = h.forwardPosition);
                        }
                        c.skipOptionalPartCharacter = f;
                    }
                    function h(e, t, n) {
                        var a = this, o = this.maskset, l = this.dependencyLib;
                        if (void 0 === e) for (e = t - 1; e > 0 && !o.validPositions[e]; e--);
                        for (var s = e; s < t; s++) {
                            if (void 0 === o.validPositions[s] && !r.isMask.call(a, s, !1)) if (0 == s ? i.getTest.call(a, s) : o.validPositions[s - 1]) {
                                var c = i.getTests.call(a, s).slice();
                                "" === c[c.length - 1].match.def && c.pop();
                                var u, p = i.determineTestTemplate.call(a, s, c);
                                if (p && (!0 !== p.match.jit || "master" === p.match.newBlockMarker && (u = o.validPositions[s + 1]) && !0 === u.match.optionalQuantifier) && ((p = l.extend({}, p, {
                                    input: i.getPlaceholder.call(a, s, p.match, !0) || p.match.def
                                })).generatedInput = !0, v.call(a, s, p, !0), !0 !== n)) {
                                    var d = o.validPositions[t].input;
                                    return o.validPositions[t] = void 0, f.call(a, t, d, !0, !0);
                                }
                            }
                        }
                    }
                    function v(e, t, n, a) {
                        var o = this, l = this.maskset, s = this.opts, c = this.dependencyLib;
                        function d(e, t, n) {
                            var i = t[e];
                            if (void 0 !== i && !0 === i.match.static && !0 !== i.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                var a = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                return a && r;
                            }
                            return !1;
                        }
                        var h = 0, v = void 0 !== e.begin ? e.begin : e, m = void 0 !== e.end ? e.end : e, g = !0;
                        if (e.begin > e.end && (v = e.end, m = e.begin), a = void 0 !== a ? a : v, void 0 === n && (v !== m || s.insertMode && void 0 !== l.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                            var y, k = c.extend(!0, [], l.validPositions), b = r.getLastValidPosition.call(o, void 0, !0);
                            l.p = v;
                            var x = u.call(o, e) ? v : a;
                            for (y = b; y >= x; y--) l.validPositions.splice(y, 1), void 0 === t && delete l.tests[y + 1];
                            var P, w, S = a, O = S;
                            for (t && (l.validPositions[a] = c.extend(!0, {}, t), O++, S++), null == k[m] && l.jitOffset[m] && (m += l.jitOffset[m] + 1),
                                y = t ? m : m - 1; y <= b; y++) {
                                if (void 0 !== (P = k[y]) && !0 !== P.generatedInput && (y >= m || y >= v && d(y, k, {
                                    begin: v,
                                    end: m
                                }))) {
                                    for (; "" !== i.getTest.call(o, O).match.def;) {
                                        if (!1 !== (w = p.call(o, O, P, s)) || "+" === P.match.def) {
                                            "+" === P.match.def && r.getBuffer.call(o, !0);
                                            var _ = f.call(o, O, P.input, "+" !== P.match.def, !0);
                                            if (g = !1 !== _, S = (_.pos || O) + 1, !g && w) break;
                                        } else g = !1;
                                        if (g) {
                                            void 0 === t && P.match.static && y === e.begin && h++;
                                            break;
                                        }
                                        if (!g && r.getBuffer.call(o), O > l.maskLength) break;
                                        O++;
                                    }
                                    "" == i.getTest.call(o, O).match.def && (g = !1), O = S;
                                }
                                if (!g) break;
                            }
                            if (!g) return l.validPositions = c.extend(!0, [], k), r.resetMaskSet.call(o, !0),
                                !1;
                        } else t && i.getTest.call(o, a).match.cd === t.match.cd && (l.validPositions[a] = c.extend(!0, {}, t));
                        return r.resetMaskSet.call(o, !0), h;
                    }
                }
            }, t = {};
            function n(i) {
                var a = t[i];
                if (void 0 !== a) return a.exports;
                var r = t[i] = {
                    exports: {}
                };
                return e[i](r, r.exports, n), r.exports;
            }
            var i = {};
            return function () {
                var e = i;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, n(7149), n(3194), n(9302), n(4013), n(3851), n(219), n(207),
                    n(5296);
                var t, a = (t = n(2394)) && t.__esModule ? t : {
                    default: t
                };
                e.default = a.default;
            }(), i;
        }();
    }));
}
inputmask()

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spoilers: () => (/* binding */ Spoilers)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Spoilers {
    constructor(spoiler) {
        let check = document.querySelectorAll(`.${spoiler.item}`)
        if(check != undefined) {
            this.spoiler = spoiler,
            this.class = [...document.querySelectorAll(`.${this.spoiler.item}`)];
        this.choice()
        }else{
            return null
        }
       
    }

    choice() {
        if (!this.class || !this.class.length) {

        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(`.${this.spoiler.item}`).siblings('.spoiler-content').slideUp();
            let settings = this.spoiler

            if (settings.firstOpen) {
                this.getOpenFirstSpoiler();
            }

            for (const el of this.class) {
                el.addEventListener("click", () => {
                    if (settings.accordion) {
                        this.getAccordionSpoiler(event);
                    } else {
                        this.getSpoiler(event);
                    }
                })
            }
        }


    }

    getOpenFirstSpoiler() {
        let firstItem = this.class[0];

        firstItem.parentElement.setAttribute("open", '');
        firstItem.classList.add('active');
        // let firstItemContent = firstItem.parentElement.querySelector(".spoiler-content");
        jquery__WEBPACK_IMPORTED_MODULE_0__(`.${this.spoiler.item}`).first().parent().children(".spoiler-content").slideDown(this.spoiler.timeAnimation);
    }

    getAccordionSpoiler(event) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).parent().attr('open')) {
            event.preventDefault();
            let spoiler = jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).parent();
            setTimeout(function () {
                spoiler.removeAttr('open');
            }, this.spoiler.timeAnimation);
            jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_0__(`.${this.spoiler.item}`).siblings('.spoiler-content').slideUp(this.spoiler.timeAnimation);

        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(`.${this.spoiler.item}`).parent().removeAttr('open');
            jquery__WEBPACK_IMPORTED_MODULE_0__('summary').removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_0__(`.${this.spoiler.item}`).siblings('.spoiler-content').slideUp(this.spoiler.timeAnimation);
            jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).siblings('.spoiler-content').slideDown(this.spoiler.timeAnimation);
            jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).addClass('active');
        }
    }

    getSpoiler(event) {

        if (jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).parent().attr('open')) {
            event.preventDefault();
            let spoiler = jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).parent();
            jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).siblings('.spoiler-content').slideUp(this.spoiler.timeAnimation);
            setTimeout(function () {
                spoiler.removeAttr('open');
            }, this.spoiler.timeAnimation);

        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).siblings('.spoiler-content').slideDown(this.spoiler.timeAnimation);
            jquery__WEBPACK_IMPORTED_MODULE_0__(event.target).addClass('active');
        }
    }

}










/***/ }),
/* 3 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BurgerMenu: () => (/* binding */ BurgerMenu)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class BurgerMenu {
    constructor(menu) {
        this.mediaShow = menu.mediaShow?menu.mediaShow:'';
        this.menu = document.querySelector(`.${menu.openBtn}`);
        this.openBtn = menu.openBtn;
        this.closeBtn = menu.closeBtn ? menu.closeBtn : menu.openBtn;
        this.menuAnimationTime = menu.menuAnimationTime ? menu.menuAnimationTime : 0.5;
        this.spoilersAnimationTime = menu.spoilersAnimationTime ? menu.spoilersAnimationTime : 0.3;
        this.spoilersAccordion = menu.spoilersAccordion ? menu.spoilersAccordion : false;
        this.openingSide = menu.openingSide ? menu.openingSide : "horizontal";
        this.arrowIcon = menu.arrowIcon;
        this.menu = document.querySelector(".mob-nav");
        this.setEvents();
        this.getIconForSpoilers();
        this.setTimeAnimations();
        this.getSpoilersMenu();
        this.showMenu();

    }

    setEvents() {
        let openBtn = document.querySelector(`.${this.openBtn}`);
        let closeBtn = document.querySelector(`.${this.closeBtn}`);

        if (closeBtn.className == openBtn.className) {
            openBtn.addEventListener("click", () => {
                this.togleMenu(openBtn);
            })

        } else {
            openBtn.addEventListener("click", () => {
                this.openMenu(openBtn);
            })

            closeBtn.addEventListener("click", () => {
                this.closeMenu();
            })
        }
    }

    openMenu(openBtn) {
        this.menu.classList.add("active");
        openBtn.style.cssText = 'z-index:0';
    }

    closeMenu() {
        this.menu.classList.remove("active")
    }

    togleMenu(openBtn) {
        openBtn.style.cssText=`z-index:101`;
        openBtn.classList.toggle("active")
        this.menu.classList.toggle("active")
    }

    getIconForSpoilers() {
        let menuItems = document.querySelectorAll(".mob-nav-item");
        for (const el of menuItems) {
            let subMenu = el.querySelector(".spoiler-content-menu");

            if (subMenu) {
                el.insertAdjacentHTML("beforeend", this.renderArrow())
            }

        }
    }

    renderArrow() {
        return `
        <btn class='_spoiler-js-menu'>
                    ${this.arrowIcon}
                     </btn>
        `
    }

    setTimeAnimations() {
        this.menu.style.cssText = `
        transition: ${this.menuAnimationTime}s
        `
        this.setOpeningSide();
    }

    setOpeningSide() {
        if (this.openingSide == "horizontal") {
            this.menu.classList.add("horizontal")
        } else {
            this.menu.classList.add("vertical")
        }

    }

    getSpoilersMenu() {
        let timeAnimation = (this.spoilersAnimationTime * 1000);
        let accordion = this.spoilersAccordion;
        //Первый спойлер активный
        // let firstOpen = false;

        jquery__WEBPACK_IMPORTED_MODULE_0__('.spoiler-content-menu').slideUp();
        //Первый спойлер активный
        // if (firstOpen) {
        //     $('details').first().attr("open", "");
        //     $('.spoiler-content-menu').first().slideDown(timeAnimation);

        // }

        jquery__WEBPACK_IMPORTED_MODULE_0__('._spoiler-js-menu').click(function (e) {
            //режим аккордеона
            if (accordion) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('class') == '_spoiler-js-menu active') {
                    jquery__WEBPACK_IMPORTED_MODULE_0__('.spoiler-content-menu').slideUp(timeAnimation);
                    jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('active');
                } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0__('.spoiler-content-menu').slideUp(timeAnimation).css("display", "none");
                    jquery__WEBPACK_IMPORTED_MODULE_0__('._spoiler-js-menu').removeClass('active');
                    jquery__WEBPACK_IMPORTED_MODULE_0__(this).siblings('.spoiler-content-menu').slideDown(timeAnimation);
                    jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active');
                }


                //основной режим    
            } else {

                if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('class') == '_spoiler-js-menu active') {
                    let spoiler = jquery__WEBPACK_IMPORTED_MODULE_0__(this).parent();
                    jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('active');
                    jquery__WEBPACK_IMPORTED_MODULE_0__(this).siblings('.spoiler-content-menu').slideUp(timeAnimation);


                } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0__(this).siblings('.spoiler-content-menu').slideDown(timeAnimation);
                    jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active');
                }
            }
        });
    }

    showMenu() {
        if(this.mediaShow){
            let mediaShow = window.matchMedia(`(max-width: ${this.mediaShow})`);
                let btn = document.querySelector(`.${this.openBtn}`)
                if(mediaShow.matches){
                    btn.classList.add("show")
                }else{
                    btn.classList.remove("show")
                }
            window.addEventListener('resize', () => {
                let mediaShow = window.matchMedia(`(max-width: ${this.mediaShow})`);
                let btn = document.querySelector(`.${this.openBtn}`)
                if(mediaShow.matches){
                    btn.classList.add("show")
                }else{
                    btn.classList.remove("show")
                }
            })  
        } 
    }
}



/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs)
/* harmony export */ });
class Tabs {
    constructor(tab) {
        let check = document.querySelector(`.${tab.class}`)
        if(check != undefined) {
            this.item = document.querySelector(`.${tab.class}`);
            this.title = this.item.querySelectorAll(".tabs__title");
            this.content = this.item.querySelectorAll(".tabs__item");
            this.count = 1;
            this.countTabs = 1;
            this.setDataAttr();
            this.activFirstTab(); 
        }else{
            return null
        }
        
    }

    setDataAttr() {
        for (const el of this.title) {
            let elClasses = el.className.split(" ");
            elClasses.forEach(it => {
                if (it == "tabs__title") {
                    el.dataset.number = `tab_${this.count} `;
                    this.count++
                }
            })

        }

        for (const el of this.content) {
            el.dataset.number = `tab_${this.countTabs} `;
            this.countTabs++
        }
    }

    activFirstTab() {
        if (this.item) {
            this.title[0].classList.add("active");
            this.content[0].classList.add("active");
            this.addEvents();
        }
    }

    addEvents() {
        let titleBox = this.item.querySelector(".tabs__title-box")
        titleBox.addEventListener("click", (e) => {
            if (e.target.classList.contains("tabs__title")) {
                this.changeActiveTab(e.target)
            }
            else if(e.target.parentElement && e.target.parentElement.classList.contains("tabs__title")) {
                 this.changeActiveTab(e.target.parentElement)
            }
            else if(e.target.parentElement.parentElement && e.target.parentElement.parentElement.classList.contains("tabs__title")) {
                 this.changeActiveTab(e.target.parentElement.parentElement)
            }
        })
    }

    changeActiveTab(e) {
        let number = e.dataset.number

        for (const el of this.title) {
            el.classList.remove("active");
        }

        e.classList.add("active")


        for (const el of this.content) {
            let data = el.dataset.number
            el.classList.remove("active")
            if (number === data) {
                el.classList.add("active")
            }
        }

    }
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
    constructor(options) {
            this.mediaHidden = options.mediaHidden?options.mediaHidden:'';
            this.classMenu = document.querySelector(`.${options.class}`);
            this.blockMenu = document.querySelector(`.${options.class}`);
            this.items = document.querySelectorAll(`.${options.class}>.nav-item`);
            this.menuItems = [...this.items];
            this.screenWidth = window.innerWidth;
            this.opacityMenuBlock = '';
            this.opacityMenuWrap = '';
            this.opacityMenuItems = [];
            this.checkOpacityItem = options.opacityItem ? this.firstRenderOpacityItem() : options.opacityItem;
            this.firstRender();
            this.checkSubMenuWrap = options.solutionForSubmenu ? this.getSolutionForSubmenu() : "";
            this.arrowSubmenu = options.arrowSubmenu ? options.arrowSubmenu : "";
            this.addArrowSubmenu();
            this.hiddenMenu();
  
    }

    firstRenderOpacityItem() {
        this.classMenu.insertAdjacentHTML("beforeend", `
                    <li class="nav__item-wrap" style="display: none;">
                        <div class="nav__item-opacity-wrap">
                            <!-- icon666.com - MILLIONS vector ICONS FREE --><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <g id="ellipsis">
                                    <path d="m6 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
                                    <path d="m16 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
                                    <path d="m26 20a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
                                </g>
                            </svg>
                        </div>
                        <!-- список скрытых элементов меню -->
                        <ul class="nav__item-opacity"></ul>
                    </li>
            `);

        this.opacityMenuBlock = document.querySelector(".nav__item-wrap");
        this.opacityMenuWrap = document.querySelector(".nav__item-opacity");
    }

    firstRender() {

        //начальные координаты элемента меню
        const positionStart = this.menuItems[0].getBoundingClientRect().top;
        for (let ix = 0; ix < this.menuItems.length; ix++) {
            //координаты элемента меню
            let item = this.menuItems[ix].getBoundingClientRect().top;
            //если элемент на другой строчке
            if (item != positionStart) {
                this.opacityMenuItems.push(this.menuItems.pop());

            }
        }
        this.renderOpacityBlock();
        this.watchWidth()


    }

    renderOpacityBlock() {
        if (this.opacityMenuItems.length != 0) {
            this.opacityMenuBlock.style.cssText = `display: flex`;
            //проверяем на одной ли строке все элементы
            for (let index = this.menuItems.length - 1; index >= 0; index--) {
                const positionStart = this.menuItems[0].getBoundingClientRect().top;
                let item = this.opacityMenuBlock.getBoundingClientRect().top;
                //если нет, убираем еще один элемент
                if (item != positionStart) {
                    //записываю в скрытый массив
                    this.opacityMenuItems.push(this.menuItems.pop());
                    this.renderMenu()
                }
            }
        } else {
            if(this.opacityMenuBlock){
this.opacityMenuBlock.style.cssText = `display: none;`
            }
            
        }
    }

    renderMenu() {
        // отрисовка основного меню
        this.blockMenu.innerHTML = "";
        this.menuItems.forEach(el => {
            if (el.children[1]) {
                if (el.children[1].className == 'nav__item-opacity-wrap') {
                    el.children[1].remove();
                }
            }
            if (el.children[2]) {
                if (el.children[2].className == 'nav__item-opacity-wrap') {
                    el.children[2].remove();
                }
            }
            this.blockMenu.insertAdjacentElement("beforeend", el)
        });
        this.blockMenu.insertAdjacentElement("beforeend", this.opacityMenuBlock)
        //отрисовка скрытого меню
        this.opacityMenuWrap.innerHTML = "";
        this.opacityMenuItems.forEach(el => {
            this.opacityMenuWrap.insertAdjacentElement("beforeend", el)
        });
    }

    hiddenMenu(){
        if(this.mediaHidden){
            let mediaOf = window.matchMedia(`(max-width: ${this.mediaHidden})`);
            if(mediaOf.matches){
                this.classMenu.classList.add("hidden")
            }else{
                this.classMenu.classList.remove("hidden")
            }
            window.addEventListener('resize', () => {
                let mediaOf = window.matchMedia(`(max-width: ${this.mediaHidden})`);
                if(mediaOf.matches){
                    this.classMenu.classList.add("hidden")
                }else{
                    this.classMenu.classList.remove("hidden")
                }
            })  
        }
    }

    watchWidth() {
        window.addEventListener('resize', () => {
            const positionStart = this.menuItems[0].getBoundingClientRect().top;
            let newWidth = window.innerWidth;
            for (let index = 0; index < this.menuItems.length; index++) {
                let item = this.menuItems[index].getBoundingClientRect().top;
                //если элемент перескочил на следующую строчку
                if (item != positionStart) {
                    //записываю в скрытый массив
                    this.opacityMenuItems.push(this.menuItems.pop());
                    //удаляю этот элемент из массива
                    this.renderMenu()
                }
            }
            //если ширина экрана увеличивается
            if (newWidth > this.screenWidth) {
                for (let index = this.opacityMenuItems.length - 1; index >= 0; index--) {
                    //добавляю элемент в массив
                    this.menuItems.push(this.opacityMenuItems.pop());
                    //отрисовываю
                    this.renderMenu();

                    const positionStart = this.menuItems[0].getBoundingClientRect().top;
                    let item = this.menuItems[this.menuItems.length - 1].getBoundingClientRect().top;
                    //проверяю помещается ли он на 1 строке
                    if (item != positionStart) {
                        //скрыл элемент
                        this.opacityMenuItems.push(this.menuItems.pop());
                        this.renderMenu()
                    }
                }
            }
            // новая ширина экрана
            this.screenWidth = window.innerWidth;
            this.renderOpacityBlock();
        })
    }

    getSolutionForSubmenu() {
        let subMenuWrap = document.querySelector(".sub-menu-wrap")
        this.opacityMenuItems.forEach(el => {
            el.addEventListener("mouseenter", function () {
                let item = el.querySelector(".sub-menu");
                subMenuWrap.innerHTML = "";
                if (item) {
                    item.addEventListener("mouseenter", function () {
                        subMenuWrap.innerHTML = "";
                    });
                    subMenuWrap.addEventListener("mouseleave", function () {
                        subMenuWrap.innerHTML = ""
                    })
                    subMenuWrap.insertAdjacentElement("beforeend", item.cloneNode(true));
                }


            })
        })
    }

    addArrowSubmenu() {
        let items = this.blockMenu.querySelectorAll('li');
        for (const el of items) {
            let check = el.querySelector('.sub-menu');
            if (check && !el.classList.contains("nav__item-wrap")) {
                el.insertAdjacentHTML("beforeend", `
                    <btn class='drop-menu'>
                    ${this.arrowSubmenu}
                    </btn>
                    `)
            }

        }
    }
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BurgerMenu: () => (/* reexport safe */ _vendor_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__.BurgerMenu),
/* harmony export */   Menu: () => (/* reexport safe */ _vendor_menu_js__WEBPACK_IMPORTED_MODULE_4__.Menu),
/* harmony export */   Spoilers: () => (/* reexport safe */ _vendor_spoilers_js__WEBPACK_IMPORTED_MODULE_1__.Spoilers),
/* harmony export */   Tabs: () => (/* reexport safe */ _vendor_tabs_js__WEBPACK_IMPORTED_MODULE_3__.Tabs)
/* harmony export */ });
/* harmony import */ var _vendor_inputmask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _vendor_spoilers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _vendor_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _vendor_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _vendor_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);














})();

/******/ })()
;