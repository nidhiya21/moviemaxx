(function() {
    var y = this,
        lt = y._,
        e = {},
        r = Array.prototype,
        nt = Object.prototype,
        at = Function.prototype,
        p = r.push,
        t = r.slice,
        o = r.concat,
        f = nt.toString,
        vt = nt.hasOwnProperty,
        tt = r.forEach,
        it = r.map,
        rt = r.reduce,
        ut = r.reduceRight,
        ft = r.filter,
        et = r.every,
        ot = r.some,
        s = r.indexOf,
        st = r.lastIndexOf,
        yt = Array.isArray,
        pt = Object.keys,
        w = at.bind,
        n = function(t) {
            if (t instanceof n) return t;
            if (!(this instanceof n)) return new n(t);
            this._wrapped = t
        },
        i, b, k, h, c, d, l, a, u, ht, ct, v;
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = n), exports._ = n) : y._ = n;
    n.VERSION = "1.5.2";
    i = n.each = n.forEach = function(t, i, r) {
        var o, u, f;
        if (t != null)
            if (tt && t.forEach === tt) t.forEach(i, r);
            else if (t.length === +t.length) {
            for (u = 0, f = t.length; u < f; u++)
                if (i.call(r, t[u], u, t) === e) return
        } else
            for (o = n.keys(t), u = 0, f = o.length; u < f; u++)
                if (i.call(r, t[o[u]], o[u], t) === e) return
    };
    n.map = n.collect = function(n, t, r) {
        var u = [];
        return n == null ? u : it && n.map === it ? n.map(t, r) : (i(n, function(n, i, f) {
            u.push(t.call(r, n, i, f))
        }), u)
    };
    b = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(t, r, u, f) {
        var e = arguments.length > 2;
        if (t == null && (t = []), rt && t.reduce === rt) return f && (r = n.bind(r, f)), e ? t.reduce(r, u) : t.reduce(r);
        if (i(t, function(n, t, i) {
                e ? u = r.call(f, u, n, t, i) : (u = n, e = !0)
            }), !e) throw new TypeError(b);
        return u
    };
    n.reduceRight = n.foldr = function(t, r, u, f) {
        var o = arguments.length > 2,
            e, s;
        if (t == null && (t = []), ut && t.reduceRight === ut) return f && (r = n.bind(r, f)), o ? t.reduceRight(r, u) : t.reduceRight(r);
        if (e = t.length, e !== +e && (s = n.keys(t), e = s.length), i(t, function(n, i, h) {
                i = s ? s[--e] : --e;
                o ? u = r.call(f, u, t[i], i, h) : (u = t[i], o = !0)
            }), !o) throw new TypeError(b);
        return u
    };
    n.find = n.detect = function(n, t, i) {
        var r;
        return k(n, function(n, u, f) {
            if (t.call(i, n, u, f)) return r = n, !0
        }), r
    };
    n.filter = n.select = function(n, t, r) {
        var u = [];
        return n == null ? u : ft && n.filter === ft ? n.filter(t, r) : (i(n, function(n, i, f) {
            t.call(r, n, i, f) && u.push(n)
        }), u)
    };
    n.reject = function(t, i, r) {
        return n.filter(t, function(n, t, u) {
            return !i.call(r, n, t, u)
        }, r)
    };
    n.every = n.all = function(t, r, u) {
        r || (r = n.identity);
        var f = !0;
        return t == null ? f : et && t.every === et ? t.every(r, u) : (i(t, function(n, t, i) {
            if (!(f = f && r.call(u, n, t, i))) return e
        }), !!f)
    };
    k = n.some = n.any = function(t, r, u) {
        r || (r = n.identity);
        var f = !1;
        return t == null ? f : ot && t.some === ot ? t.some(r, u) : (i(t, function(n, t, i) {
            if (f || (f = r.call(u, n, t, i))) return e
        }), !!f)
    };
    n.contains = n.include = function(n, t) {
        return n == null ? !1 : s && n.indexOf === s ? n.indexOf(t) != -1 : k(n, function(n) {
            return n === t
        })
    };
    n.invoke = function(i, r) {
        var u = t.call(arguments, 2),
            f = n.isFunction(r);
        return n.map(i, function(n) {
            return (f ? r : n[r]).apply(n, u)
        })
    };
    n.pluck = function(t, i) {
        return n.map(t, function(n) {
            return n[i]
        })
    };
    n.where = function(t, i, r) {
        return n.isEmpty(i) ? r ? void 0 : [] : n[r ? "find" : "filter"](t, function(n) {
            for (var t in i)
                if (i[t] !== n[t]) return !1;
            return !0
        })
    };
    n.findWhere = function(t, i) {
        return n.where(t, i, !0)
    };
    n.max = function(t, r, u) {
        if (!r && n.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!r && n.isEmpty(t)) return -Infinity;
        var f = {
            computed: -Infinity,
            value: -Infinity
        };
        return i(t, function(n, t, i) {
            var e = r ? r.call(u, n, t, i) : n;
            e > f.computed && (f = {
                value: n,
                computed: e
            })
        }), f.value
    };
    n.min = function(t, r, u) {
        if (!r && n.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!r && n.isEmpty(t)) return Infinity;
        var f = {
            computed: Infinity,
            value: Infinity
        };
        return i(t, function(n, t, i) {
            var e = r ? r.call(u, n, t, i) : n;
            e < f.computed && (f = {
                value: n,
                computed: e
            })
        }), f.value
    };
    n.shuffle = function(t) {
        var u, f = 0,
            r = [];
        return i(t, function(t) {
            u = n.random(f++);
            r[f - 1] = r[u];
            r[u] = t
        }), r
    };
    n.sample = function(t, i, r) {
        return arguments.length < 2 || r ? t[n.random(t.length - 1)] : n.shuffle(t).slice(0, Math.max(0, i))
    };
    h = function(t) {
        return n.isFunction(t) ? t : function(n) {
            return n[t]
        }
    };
    n.sortBy = function(t, i, r) {
        var u = h(i);
        return n.pluck(n.map(t, function(n, t, i) {
            return {
                value: n,
                index: t,
                criteria: u.call(r, n, t, i)
            }
        }).sort(function(n, t) {
            var i = n.criteria,
                r = t.criteria;
            if (i !== r) {
                if (i > r || i === void 0) return 1;
                if (i < r || r === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    };
    c = function(t) {
        return function(r, u, f) {
            var e = {},
                o = u == null ? n.identity : h(u);
            return i(r, function(n, i) {
                var u = o.call(f, n, i, r);
                t(e, u, n)
            }), e
        }
    };
    n.groupBy = c(function(t, i, r) {
        (n.has(t, i) ? t[i] : t[i] = []).push(r)
    });
    n.indexBy = c(function(n, t, i) {
        n[t] = i
    });
    n.countBy = c(function(t, i) {
        n.has(t, i) ? t[i]++ : t[i] = 1
    });
    n.sortedIndex = function(t, i, r, u) {
        var e;
        r = r == null ? n.identity : h(r);
        for (var s = r.call(u, i), f = 0, o = t.length; f < o;) e = f + o >>> 1, r.call(u, t[e]) < s ? f = e + 1 : o = e;
        return f
    };
    n.toArray = function(i) {
        return i ? n.isArray(i) ? t.call(i) : i.length === +i.length ? n.map(i, n.identity) : n.values(i) : []
    };
    n.size = function(t) {
        return t == null ? 0 : t.length === +t.length ? t.length : n.keys(t).length
    };
    n.first = n.head = n.take = function(n, i, r) {
        if (n != null) return i == null || r ? n[0] : t.call(n, 0, i)
    };
    n.initial = function(n, i, r) {
        return t.call(n, 0, n.length - (i == null || r ? 1 : i))
    };
    n.last = function(n, i, r) {
        if (n != null) return i == null || r ? n[n.length - 1] : t.call(n, Math.max(n.length - i, 0))
    };
    n.rest = n.tail = n.drop = function(n, i, r) {
        return t.call(n, i == null || r ? 1 : i)
    };
    n.compact = function(t) {
        return n.filter(t, n.identity)
    };
    d = function(t, r, u) {
        return r && n.every(t, n.isArray) ? o.apply(u, t) : (i(t, function(t) {
            n.isArray(t) || n.isArguments(t) ? r ? p.apply(u, t) : d(t, r, u) : u.push(t)
        }), u)
    };
    n.flatten = function(n, t) {
        return d(n, t, [])
    };
    n.without = function(i) {
        return n.difference(i, t.call(arguments, 1))
    };
    n.uniq = n.unique = function(t, r, u, f) {
        n.isFunction(r) && (f = u, u = r, r = !1);
        var s = u ? n.map(t, u, f) : t,
            o = [],
            e = [];
        return i(s, function(i, u) {
            (r ? u && e[e.length - 1] === i : n.contains(e, i)) || (e.push(i), o.push(t[u]))
        }), o
    };
    n.union = function() {
        return n.uniq(n.flatten(arguments, !0))
    };
    n.intersection = function(i) {
        var r = t.call(arguments, 1);
        return n.filter(n.uniq(i), function(t) {
            return n.every(r, function(i) {
                return n.indexOf(i, t) >= 0
            })
        })
    };
    n.difference = function(i) {
        var u = o.apply(r, t.call(arguments, 1));
        return n.filter(i, function(t) {
            return !n.contains(u, t)
        })
    };
    n.zip = function() {
        for (var i = n.max(n.pluck(arguments, "length").concat(0)), r = new Array(i), t = 0; t < i; t++) r[t] = n.pluck(arguments, "" + t);
        return r
    };
    n.object = function(n, t) {
        var r, i, u;
        if (n == null) return {};
        for (r = {}, i = 0, u = n.length; i < u; i++) t ? r[n[i]] = t[i] : r[n[i][0]] = n[i][1];
        return r
    };
    n.indexOf = function(t, i, r) {
        if (t == null) return -1;
        var u = 0,
            f = t.length;
        if (r)
            if (typeof r == "number") u = r < 0 ? Math.max(0, f + r) : r;
            else return u = n.sortedIndex(t, i), t[u] === i ? u : -1;
        if (s && t.indexOf === s) return t.indexOf(i, r);
        for (; u < f; u++)
            if (t[u] === i) return u;
        return -1
    };
    n.lastIndexOf = function(n, t, i) {
        var u, r;
        if (n == null) return -1;
        if (u = i != null, st && n.lastIndexOf === st) return u ? n.lastIndexOf(t, i) : n.lastIndexOf(t);
        for (r = u ? i : n.length; r--;)
            if (n[r] === t) return r;
        return -1
    };
    n.range = function(n, t, i) {
        arguments.length <= 1 && (t = n || 0, n = 0);
        i = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - n) / i), 0), u = 0, f = new Array(r); u < r;) f[u++] = n, n += i;
        return f
    };
    l = function() {};
    n.bind = function(i, r) {
        var u, f;
        if (w && i.bind === w) return w.apply(i, t.call(arguments, 1));
        if (!n.isFunction(i)) throw new TypeError;
        return u = t.call(arguments, 2), f = function() {
            var e, n;
            return (this instanceof f) ? (l.prototype = i.prototype, e = new l, l.prototype = null, n = i.apply(e, u.concat(t.call(arguments))), Object(n) === n) ? n : e : i.apply(r, u.concat(t.call(arguments)))
        }
    };
    n.partial = function(n) {
        var i = t.call(arguments, 1);
        return function() {
            return n.apply(this, i.concat(t.call(arguments)))
        }
    };
    n.bindAll = function(r) {
        var u = t.call(arguments, 1);
        if (u.length === 0) throw new Error("bindAll must be passed function names");
        return i(u, function(t) {
            r[t] = n.bind(r[t], r)
        }), r
    };
    n.memoize = function(t, i) {
        var r = {};
        return i || (i = n.identity),
            function() {
                var u = i.apply(this, arguments);
                return n.has(r, u) ? r[u] : r[u] = t.apply(this, arguments)
            }
    };
    n.delay = function(n, i) {
        var r = t.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, i)
    };
    n.defer = function(i) {
        return n.delay.apply(n, [i, 1].concat(t.call(arguments, 1)))
    };
    n.throttle = function(n, t, i) {
        var f, e, o, r = null,
            u = 0,
            s;
        return i || (i = {}), s = function() {
                u = i.leading === !1 ? 0 : new Date;
                r = null;
                o = n.apply(f, e)
            },
            function() {
                var h = new Date,
                    c;
                return u || i.leading !== !1 || (u = h), c = t - (h - u), f = this, e = arguments, c <= 0 ? (clearTimeout(r), r = null, u = h, o = n.apply(f, e)) : r || i.trailing === !1 || (r = setTimeout(s, c)), o
            }
    };
    n.debounce = function(n, t, i) {
        var r, u, f, o, e;
        return function() {
            f = this;
            u = arguments;
            o = new Date;
            var s = function() {
                    var h = new Date - o;
                    h < t ? r = setTimeout(s, t - h) : (r = null, i || (e = n.apply(f, u)))
                },
                h = i && !r;
            return r || (r = setTimeout(s, t)), h && (e = n.apply(f, u)), e
        }
    };
    n.once = function(n) {
        var i = !1,
            t;
        return function() {
            return i ? t : (i = !0, t = n.apply(this, arguments), n = null, t)
        }
    };
    n.wrap = function(n, t) {
        return function() {
            var i = [n];
            return p.apply(i, arguments), t.apply(this, i)
        }
    };
    n.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, i = n.length - 1; i >= 0; i--) t = [n[i].apply(this, t)];
            return t[0]
        }
    };
    n.after = function(n, t) {
        return function() {
            if (--n < 1) return t.apply(this, arguments)
        }
    };
    n.keys = pt || function(t) {
        var i, r;
        if (t !== Object(t)) throw new TypeError("Invalid object");
        i = [];
        for (r in t) n.has(t, r) && i.push(r);
        return i
    };
    n.values = function(t) {
        for (var r = n.keys(t), u = r.length, f = new Array(u), i = 0; i < u; i++) f[i] = t[r[i]];
        return f
    };
    n.pairs = function(t) {
        for (var r = n.keys(t), u = r.length, f = new Array(u), i = 0; i < u; i++) f[i] = [r[i], t[r[i]]];
        return f
    };
    n.invert = function(t) {
        for (var u = {}, r = n.keys(t), i = 0, f = r.length; i < f; i++) u[t[r[i]]] = r[i];
        return u
    };
    n.functions = n.methods = function(t) {
        var i = [];
        for (var r in t) n.isFunction(t[r]) && i.push(r);
        return i.sort()
    };
    n.extend = function(n) {
        return i(t.call(arguments, 1), function(t) {
            if (t)
                for (var i in t) n[i] = t[i]
        }), n
    };
    n.pick = function(n) {
        var u = {},
            f = o.apply(r, t.call(arguments, 1));
        return i(f, function(t) {
            t in n && (u[t] = n[t])
        }), u
    };
    n.omit = function(i) {
        var f = {},
            e = o.apply(r, t.call(arguments, 1));
        for (var u in i) n.contains(e, u) || (f[u] = i[u]);
        return f
    };
    n.defaults = function(n) {
        return i(t.call(arguments, 1), function(t) {
            if (t)
                for (var i in t) n[i] === void 0 && (n[i] = t[i])
        }), n
    };
    n.clone = function(t) {
        return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({}, t) : t
    };
    n.tap = function(n, t) {
        return t(n), n
    };
    a = function(t, i, r, u) {
        var l, v, h, c, e, o, s;
        if (t === i) return t !== 0 || 1 / t == 1 / i;
        if (t == null || i == null) return t === i;
        if (t instanceof n && (t = t._wrapped), i instanceof n && (i = i._wrapped), l = f.call(t), l != f.call(i)) return !1;
        switch (l) {
            case "[object String]":
                return t == String(i);
            case "[object Number]":
                return t != +t ? i != +i : t == 0 ? 1 / t == 1 / i : t == +i;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +i;
            case "[object RegExp]":
                return t.source == i.source && t.global == i.global && t.multiline == i.multiline && t.ignoreCase == i.ignoreCase
        }
        if (typeof t != "object" || typeof i != "object") return !1;
        for (v = r.length; v--;)
            if (r[v] == t) return u[v] == i;
        if (h = t.constructor, c = i.constructor, h !== c && !(n.isFunction(h) && h instanceof h && n.isFunction(c) && c instanceof c)) return !1;
        if (r.push(t), u.push(i), e = 0, o = !0, l == "[object Array]") {
            if (e = t.length, o = e == i.length, o)
                while (e--)
                    if (!(o = a(t[e], i[e], r, u))) break
        } else {
            for (s in t)
                if (n.has(t, s) && (e++, !(o = n.has(i, s) && a(t[s], i[s], r, u)))) break;
            if (o) {
                for (s in i)
                    if (n.has(i, s) && !e--) break;
                o = !e
            }
        }
        return r.pop(), u.pop(), o
    };
    n.isEqual = function(n, t) {
        return a(n, t, [], [])
    };
    n.isEmpty = function(t) {
        if (t == null) return !0;
        if (n.isArray(t) || n.isString(t)) return t.length === 0;
        for (var i in t)
            if (n.has(t, i)) return !1;
        return !0
    };
    n.isElement = function(n) {
        return !!(n && n.nodeType === 1)
    };
    n.isArray = yt || function(n) {
        return f.call(n) == "[object Array]"
    };
    n.isObject = function(n) {
        return n === Object(n)
    };
    i(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        n["is" + t] = function(n) {
            return f.call(n) == "[object " + t + "]"
        }
    });
    n.isArguments(arguments) || (n.isArguments = function(t) {
        return !!(t && n.has(t, "callee"))
    });
    typeof /./ != "function" && (n.isFunction = function(n) {
        return typeof n == "function"
    });
    n.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    };
    n.isNaN = function(t) {
        return n.isNumber(t) && t != +t
    };
    n.isBoolean = function(n) {
        return n === !0 || n === !1 || f.call(n) == "[object Boolean]"
    };
    n.isNull = function(n) {
        return n === null
    };
    n.isUndefined = function(n) {
        return n === void 0
    };
    n.has = function(n, t) {
        return vt.call(n, t)
    };
    n.noConflict = function() {
        return y._ = lt, this
    };
    n.identity = function(n) {
        return n
    };
    n.times = function(n, t, i) {
        for (var u = Array(Math.max(0, n)), r = 0; r < n; r++) u[r] = t.call(i, r);
        return u
    };
    n.random = function(n, t) {
        return t == null && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    u = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    u.unescape = n.invert(u.escape);
    ht = {
        escape: new RegExp("[" + n.keys(u.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + n.keys(u.unescape).join("|") + ")", "g")
    };
    n.each(["escape", "unescape"], function(t) {
        n[t] = function(n) {
            return n == null ? "" : ("" + n).replace(ht[t], function(n) {
                return u[t][n]
            })
        }
    });
    n.result = function(t, i) {
        if (t == null) return void 0;
        var r = t[i];
        return n.isFunction(r) ? r.call(t) : r
    };
    n.mixin = function(t) {
        i(n.functions(t), function(i) {
            var r = n[i] = t[i];
            n.prototype[i] = function() {
                var t = [this._wrapped];
                return p.apply(t, arguments), v.call(this, r.apply(n, t))
            }
        })
    };
    ct = 0;
    n.uniqueId = function(n) {
        var t = ++ct + "";
        return n ? n + t : t
    };
    n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var g = /(.)^/,
        wt = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        bt = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    n.template = function(t, i, r) {
        var f, e;
        r = n.defaults({}, r, n.templateSettings);
        var h = new RegExp([(r.escape || g).source, (r.interpolate || g).source, (r.evaluate || g).source].join("|") + "|$", "g"),
            o = 0,
            u = "__p+='";
        t.replace(h, function(n, i, r, f, e) {
            return u += t.slice(o, e).replace(bt, function(n) {
                return "\\" + wt[n]
            }), i && (u += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), r && (u += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), f && (u += "';\n" + f + "\n__p+='"), o = e + n.length, n
        });
        u += "';\n";
        r.variable || (u = "with(obj||{}){\n" + u + "}\n");
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        try {
            f = new Function(r.variable || "obj", "_", u)
        } catch (s) {
            s.source = u;
            throw s;
        }
        return i ? f(i, n) : (e = function(t) {
            return f.call(this, t, n)
        }, e.source = "function(" + (r.variable || "obj") + "){\n" + u + "}", e)
    };
    n.chain = function(t) {
        return n(t).chain()
    };
    v = function(t) {
        return this._chain ? n(t).chain() : t
    };
    n.mixin(n);
    i(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var i = r[t];
        n.prototype[t] = function() {
            var n = this._wrapped;
            return i.apply(n, arguments), (t == "shift" || t == "splice") && n.length === 0 && delete n[0], v.call(this, n)
        }
    });
    i(["concat", "join", "slice"], function(t) {
        var i = r[t];
        n.prototype[t] = function() {
            return v.call(this, i.apply(this._wrapped, arguments))
        }
    });
    n.extend(n.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);
var Hogan = {};
(function(n, t) {
    function i(n) {
        return String(n === null || n === undefined ? "" : n)
    }

    function c(n) {
        return n = i(n), h.test(n) ? n.replace(u, "&amp;").replace(f, "&lt;").replace(e, "&gt;").replace(o, "&#39;").replace(s, "&quot;") : n
    }
    var r;
    n.Template = function(n, i, r, u) {
        this.r = n || this.r;
        this.c = r;
        this.options = u;
        this.text = i || "";
        this.buf = t ? [] : ""
    };
    n.Template.prototype = {
        r: function() {
            return ""
        },
        v: c,
        t: i,
        render: function(n, t, i) {
            return this.ri([n], t || {}, i)
        },
        ri: function(n, t, i) {
            return this.r(n, t, i)
        },
        rp: function(n, t, i, r) {
            var u = i[n];
            return u ? (this.c && typeof u == "string" && (u = this.c.compile(u, this.options)), u.ri(t, i, r)) : ""
        },
        rs: function(n, t, i) {
            var f = n[n.length - 1],
                u;
            if (!r(f)) {
                i(n, t, this);
                return
            }
            for (u = 0; u < f.length; u++) n.push(f[u]), i(n, t, this), n.pop()
        },
        s: function(n, t, i, u, f, e, o) {
            var s;
            return r(n) && n.length === 0 ? !1 : (typeof n == "function" && (n = this.ls(n, t, i, u, f, e, o)), s = n === "" || !!n, !u && s && t && t.push(typeof n == "object" ? n : t[t.length - 1]), s)
        },
        d: function(n, t, i, u) {
            var o = n.split("."),
                f = this.f(o[0], t, i, u),
                s = null,
                e;
            if (n === "." && r(t[t.length - 2])) return t[t.length - 1];
            for (e = 1; e < o.length; e++) f && typeof f == "object" && o[e] in f ? (s = f, f = f[o[e]]) : f = "";
            return u && !f ? !1 : (u || typeof f != "function" || (t.push(s), f = this.lv(f, t, i), t.pop()), f)
        },
        f: function(n, t, i, r) {
            for (var u = !1, f = null, o = !1, e = t.length - 1; e >= 0; e--)
                if (f = t[e], f && typeof f == "object" && n in f) {
                    u = f[n];
                    o = !0;
                    break
                } return o ? (r || typeof u != "function" || (u = this.lv(u, t, i)), u) : r ? !1 : ""
        },
        ho: function(n, t, i, r, u) {
            var e = this.c,
                f = this.options,
                r;
            return f.delimiters = u, r = n.call(t, r), r = r == null ? String(r) : r.toString(), this.b(e.compile(r, f).render(t, i)), !1
        },
        b: t ? function(n) {
            this.buf.push(n)
        } : function(n) {
            this.buf += n
        },
        fl: t ? function() {
            var n = this.buf.join("");
            return this.buf = [], n
        } : function() {
            var n = this.buf;
            return this.buf = "", n
        },
        ls: function(n, t, i, r, u, f, e) {
            var s = t[t.length - 1],
                o = null;
            if (!r && this.c && n.length > 0) return this.ho(n, s, i, this.text.substring(u, f), e);
            if (o = n.call(s), typeof o == "function") {
                if (r) return !0;
                if (this.c) return this.ho(o, s, i, this.text.substring(u, f), e)
            }
            return o
        },
        lv: function(n, t, r) {
            var f = t[t.length - 1],
                u = n.call(f);
            return typeof u == "function" && (u = i(u.call(f)), this.c && ~u.indexOf("{{")) ? this.c.compile(u, this.options).render(f, r) : i(u)
        }
    };
    var u = /&/g,
        f = /</g,
        e = />/g,
        o = /\'/g,
        s = /\"/g,
        h = /[&<>\"\']/;
    r = Array.isArray || function(n) {
        return Object.prototype.toString.call(n) === "[object Array]"
    }
})(typeof exports != "undefined" ? exports : Hogan),
function(n) {
    function y(n) {
        n.n.substr(n.n.length - 1) === "}" && (n.n = n.n.substring(0, n.n.length - 1))
    }

    function f(n) {
        return n.trim ? n.trim() : n.replace(/^\s*|\s*$/g, "")
    }

    function e(n, t, i) {
        if (t.charAt(i) != n.charAt(0)) return !1;
        for (var r = 1, u = n.length; r < u; r++)
            if (t.charAt(i + r) != n.charAt(r)) return !1;
        return !0
    }

    function o(n, t, i, r) {
        for (var e = [], f = null, u = null; n.length > 0;)
            if (u = n.shift(), u.tag == "#" || u.tag == "^" || p(u, r)) i.push(u), u.nodes = o(n, u.tag, i, r), e.push(u);
            else {
                if (u.tag == "/") {
                    if (i.length === 0) throw new Error("Closing tag without opener: /" + u.n);
                    if (f = i.pop(), u.n != f.n && !w(u.n, f.n, r)) throw new Error("Nesting error: " + f.n + " vs. " + u.n);
                    return f.end = u.i, e
                }
                e.push(u)
            } if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
        return e
    }

    function p(n, t) {
        for (var i = 0, r = t.length; i < r; i++)
            if (t[i].o == n.n) return n.tag = "#", !0
    }

    function w(n, t, i) {
        for (var r = 0, u = i.length; r < u; r++)
            if (i[r].c == n && i[r].o == t) return !0
    }

    function t(n) {
        return n.replace(v, "\\\\").replace(c, '\\"').replace(l, "\\n").replace(a, "\\r")
    }

    function i(n) {
        return ~n.indexOf(".") ? "d" : "f"
    }

    function u(n) {
        for (var u, f = "", r = 0, e = n.length; r < e; r++) u = n[r].tag, u == "#" ? f += b(n[r].nodes, n[r].n, i(n[r].n), n[r].i, n[r].end, n[r].otag + " " + n[r].ctag) : u == "^" ? f += k(n[r].nodes, n[r].n, i(n[r].n)) : u == "<" || u == ">" ? f += d(n[r]) : u == "{" || u == "&" ? f += g(n[r].n, i(n[r].n)) : u == "\n" ? f += s('"\\n"' + (n.length - 1 == r ? "" : " + i")) : u == "_v" ? f += nt(n[r].n, i(n[r].n)) : u === undefined && (f += s('"' + t(n[r]) + '"'));
        return f
    }

    function b(n, i, r, f, e, o) {
        return "if(_.s(_." + r + '("' + t(i) + '",c,p,1),c,p,0,' + f + "," + e + ',"' + o + '")){_.rs(c,p,function(c,p,_){' + u(n) + "});c.pop();}"
    }

    function k(n, i, r) {
        return "if(!_.s(_." + r + '("' + t(i) + '",c,p,1),c,p,1,0,0,"")){' + u(n) + "};"
    }

    function d(n) {
        return '_.b(_.rp("' + t(n.n) + '",c,p,"' + (n.indent || "") + '"));'
    }

    function g(n, i) {
        return "_.b(_.t(_." + i + '("' + t(n) + '",c,p,0)));'
    }

    function nt(n, i) {
        return "_.b(_.v(_." + i + '("' + t(n) + '",c,p,0)));'
    }

    function s(n) {
        return "_.b(" + n + ");"
    }
    var h = /\S/,
        c = /\"/g,
        l = /\n/g,
        a = /\r/g,
        v = /\\/g,
        r = {
            "#": 1,
            "^": 2,
            "/": 3,
            "!": 4,
            ">": 5,
            "<": 6,
            "=": 7,
            _v: 8,
            "{": 9,
            "&": 10
        };
    n.scan = function(n, t) {
        function d() {
            s.length > 0 && (u.push(new String(s)), s = "")
        }

        function tt() {
            for (var t = !0, n = b; n < u.length; n++)
                if (t = u[n].tag && r[u[n].tag] < r._v || !u[n].tag && u[n].match(h) === null, !t) return !1;
            return t
        }

        function g(n, t) {
            if (d(), n && tt())
                for (var i = b, r; i < u.length; i++) u[i].tag || ((r = u[i + 1]) && r.tag == ">" && (r.indent = u[i].toString()), u.splice(i, 1));
            else t || u.push({
                tag: "\n"
            });
            v = !1;
            b = u.length
        }

        function it(n, t) {
            var i = "=" + o,
                r = n.indexOf(i, t),
                u = f(n.substring(n.indexOf("=", t) + 1, r)).split(" ");
            return l = u[0], o = u[1], r + i.length - 1
        }
        var nt = n.length,
            p = 0,
            k = 1,
            c = p,
            a = null,
            w = null,
            s = "",
            u = [],
            v = !1,
            i = 0,
            b = 0,
            l = "{{",
            o = "}}";
        for (t && (t = t.split(" "), l = t[0], o = t[1]), i = 0; i < nt; i++) c == p ? e(l, n, i) ? (--i, d(), c = k) : n.charAt(i) == "\n" ? g(v) : s += n.charAt(i) : c == k ? (i += l.length - 1, w = r[n.charAt(i + 1)], a = w ? n.charAt(i + 1) : "_v", a == "=" ? (i = it(n, i), c = p) : (w && i++, c = 2), v = i) : e(o, n, i) ? (u.push({
            tag: a,
            n: f(s),
            otag: l,
            ctag: o,
            i: a == "/" ? v - o.length : i + l.length
        }), s = "", i += o.length - 1, c = p, a == "{" && (o == "}}" ? i++ : y(u[u.length - 1]))) : s += n.charAt(i);
        return g(v, !0), u
    };
    n.generate = function(t, i, r) {
        var f = 'var _=this;_.b(i=i||"");' + u(t) + "return _.fl();";
        return r.asString ? "function(c,p,i){" + f + ";}" : new n.Template(new Function("c", "p", "i", f), i, n, r)
    };
    n.parse = function(n, t, i) {
        return i = i || {}, o(n, "", [], i.sectionTags || [])
    };
    n.cache = {};
    n.compile = function(n, t) {
        t = t || {};
        var r = n + "||" + !!t.asString,
            i = this.cache[r];
        return i ? i : (i = this.generate(this.parse(this.scan(n, t.delimiters), n, t), n, t), this.cache[r] = i)
    }
}(typeof exports != "undefined" ? exports : Hogan);
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
(function(n, t) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
    "use strict";

    function ir(n, t) {
        t = t || u;
        var i = t.createElement("script");
        i.text = n;
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function fi(n) {
        var t = !!n && "length" in n && n.length,
            r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function l(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function oi(n, t, r) {
        return i.isFunction(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : typeof t != "string" ? i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r
        }) : er.test(t) ? i.filter(t, n, r) : (t = i.filter(t, n), i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r && n.nodeType === 1
        }))
    }

    function ar(n, t) {
        while ((n = n[t]) && n.nodeType !== 1);
        return n
    }

    function ne(n) {
        var t = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function nt(n) {
        return n
    }

    function pt(n) {
        throw n;
    }

    function vr(n, t, r, u) {
        var f;
        try {
            n && i.isFunction(f = n.promise) ? f.call(n).done(t).fail(r) : n && i.isFunction(f = n.then) ? f.call(n, t, r) : t.apply(undefined, [n].slice(u))
        } catch (n) {
            r.apply(undefined, [n])
        }
    }

    function bt() {
        u.removeEventListener("DOMContentLoaded", bt);
        n.removeEventListener("load", bt);
        i.ready()
    }

    function ht() {
        this.expando = i.expando + ht.uid++
    }

    function re(n) {
        return n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : n === +n + "" ? +n : te.test(n) ? JSON.parse(n) : n
    }

    function pr(n, t, i) {
        var r;
        if (i === undefined && n.nodeType === 1)
            if (r = "data-" + t.replace(ie, "-$&").toLowerCase(), i = n.getAttribute(r), typeof i == "string") {
                try {
                    i = re(i)
                } catch (u) {}
                e.set(n, t, i)
            } else i = undefined;
        return i
    }

    function kr(n, t, r, u) {
        var h, e = 1,
            l = 20,
            c = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            s = c(),
            o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || o !== "px" && +s) && ct.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do e = e || ".5", f = f / e, i.style(n, t, f + o); while (e !== (e = c() / s) && e !== 1 && --l)
        }
        return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
    }

    function ue(n) {
        var r, f = n.ownerDocument,
            u = n.nodeName,
            t = si[u];
        return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), t === "none" && (t = "block"), si[u] = t, t)
    }

    function tt(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++)(u = n[i], u.style) && (e = u.style.display, t ? (e === "none" && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), u.style.display === "" && kt(u) && (f[i] = ue(u))) : e !== "none" && (f[i] = "none", r.set(u, "display", e)));
        for (i = 0; i < o; i++) f[i] != null && (n[i].style.display = f[i]);
        return n
    }

    function o(n, t) {
        var r;
        return (r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : [], t === undefined || t && l(n, t)) ? i.merge([n], r) : r
    }

    function hi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function iu(n, t, r, u, f) {
        for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l], e || e === 0)
                if (i.type(e) === "object") i.merge(y, e.nodeType ? [e] : e);
                else if (tu.test(e)) {
            for (s = s || h.appendChild(t.createElement("div")), p = (gr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
            i.merge(y, s.childNodes);
            s = h.firstChild;
            s.textContent = ""
        } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];) {
            if (u && i.inArray(e, u) > -1) {
                f && f.push(e);
                continue
            }
            if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && hi(s), r)
                for (v = 0; e = s[v++];) nu.test(e.type || "") && r.push(e)
        }
        return h
    }

    function gt() {
        return !0
    }

    function it() {
        return !1
    }

    function uu() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function ci(n, t, r, u, f, e) {
        var o, s;
        if (typeof t == "object") {
            typeof r != "string" && (u = u || r, r = undefined);
            for (s in t) ci(n, s, r, u, t[s], e);
            return n
        }
        if (u == null && f == null ? (f = r, u = r = undefined) : f == null && (typeof r == "string" ? (f = u, u = undefined) : (f = u, u = r, r = undefined)), f === !1) f = it;
        else if (!f) return n;
        return e === 1 && (o = f, f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function fu(n, t) {
        return l(n, "table") && l(t.nodeType !== 11 ? t : t.firstChild, "tr") ? i(">tbody", n)[0] || n : n
    }

    function ae(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n
    }

    function ve(n) {
        var t = ce.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function eu(n, t) {
        var f, c, o, s, h, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                delete h.handle;
                h.events = {};
                for (o in u)
                    for (f = 0, c = u[o].length; f < c; f++) i.event.add(t, o, u[o][f])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function ye(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && dr.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function rt(n, t, u, e) {
        t = gi.apply([], t);
        var l, p, c, a, s, w, h = 0,
            v = n.length,
            k = v - 1,
            y = t[0],
            b = i.isFunction(y);
        if (b || v > 1 && typeof y == "string" && !f.checkClone && he.test(y)) return n.each(function(i) {
            var r = n.eq(i);
            b && (t[0] = y.call(this, i, r.html()));
            rt(r, t, u, e)
        });
        if (v && (l = iu(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, l.childNodes.length === 1 && (l = p), p || e)) {
            for (c = i.map(o(l, "script"), ae), a = c.length; h < v; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
            if (a)
                for (w = c[c.length - 1].ownerDocument, i.map(c, ve), h = 0; h < a; h++) s = c[h], nu.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : ir(s.textContent.replace(le, ""), w))
        }
        return n
    }

    function ou(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0;
            (u = e[f]) != null; f++) r || u.nodeType !== 1 || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && hi(o(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function lt(n, t, r) {
        var o, s, h, u, e = n.style;
        return r = r || ni(n), r && (u = r.getPropertyValue(t) || r[t], u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && li.test(u) && su.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), u !== undefined ? u + "" : u
    }

    function hu(n, t) {
        return {
            get: function() {
                if (n()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function be(n) {
        if (n in vu) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = au.length; t--;)
            if (n = au[t] + i, n in vu) return n
    }

    function yu(n) {
        var t = i.cssProps[n];
        return t || (t = i.cssProps[n] = be(n) || n), t
    }

    function pu(n, t, i) {
        var r = ct.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function wu(n, t, r, u, f) {
        for (var o = 0, e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + b[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + b[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f), r !== "padding" && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
        return o
    }

    function bu(n, t, r) {
        var o, e = ni(n),
            u = lt(n, t, e),
            s = i.css(n, "boxSizing", !1, e) === "border-box";
        return li.test(u) ? u : (o = s && (f.boxSizingReliable() || u === n.style[t]), u === "auto" && (u = n["offset" + t[0].toUpperCase() + t.slice(1)]), u = parseFloat(u) || 0, u + wu(n, t, r || (s ? "border" : "content"), o, e) + "px")
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function ai() {
        ti && (u.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(ai) : n.setTimeout(ai, i.fx.interval), i.fx.tick())
    }

    function gu() {
        return n.setTimeout(function() {
            ut = undefined
        }), ut = i.now()
    }

    function ii(n, t) {
        var r, u = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = b[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function nf(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function ke(n, t, u) {
        var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            h = n.style,
            a = n.nodeType && kt(n),
            e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"), c.unqueued == null && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
            c.unqueued || b()
        }), c.unqueued++, v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f], ku.test(y)) {
                if (delete t[f], w = w || y === "toggle", y === (a ? "hide" : "show"))
                    if (y === "show" && e && e[f] !== undefined) a = !0;
                    else continue;
                p[f] = e && e[f] || i.style(n, f)
            } if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
            k && n.nodeType === 1 && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, o == null && (o = r.get(n, "display")), l = i.css(n, "display"), l === "none" && (o ? l = o : (tt([n], !0), o = n.style.display || o, l = i.css(n, "display"), tt([n]))), (l === "inline" || l === "inline-block" && o != null) && i.css(n, "float") === "none" && (s || (v.done(function() {
                h.display = o
            }), o == null && (l = h.display, o = l === "none" ? "" : l)), h.display = "inline-block"));
            u.overflow && (h.overflow = "hidden", v.always(function() {
                h.overflow = u.overflow[0];
                h.overflowX = u.overflow[1];
                h.overflowY = u.overflow[2]
            }));
            s = !1;
            for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                display: o
            }), w && (e.hidden = !a), a && tt([n], !0), v.done(function() {
                a || tt([n]);
                r.remove(n, "fxshow");
                for (f in p) i.style(n, f, p[f])
            })), s = nf(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
        }
    }

    function de(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function a(n, t, r) {
        var e, o, s = 0,
            l = a.prefilters.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = ut || gu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return (f.notifyWith(n, [u, i, t]), i < 1 && e) ? t : (e || f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ut || gu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (de(h, u.opts.specialEasing); s < l; s++)
            if (e = a.prefilters[s].call(u, n, h, u.opts), e) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
        return i.map(h, nf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function k(n) {
        var t = n.match(h) || [];
        return t.join(" ")
    }

    function d(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function pi(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || ge.test(n) ? u(n, i) : pi(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) pi(n + "[" + f + "]", t[f], r, u)
    }

    function cf(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function lf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }
        var f = {},
            o = n === wi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function so(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                } if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function ho(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    } if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var p = [],
        u = n.document,
        pf = Object.getPrototypeOf,
        w = p.slice,
        gi = p.concat,
        ui = p.push,
        ot = p.indexOf,
        vt = {},
        nr = vt.toString,
        yt = vt.hasOwnProperty,
        tr = yt.toString,
        wf = tr.call(Object),
        f = {},
        rr = "3.2.1",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        bf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        kf = /^-ms-/,
        df = /-([a-z])/g,
        gf = function(n, t) {
            return t.toUpperCase()
        },
        y, ei, er, or, sr, hr, cr, lr, h, yr, wt, v, st, si, tu, ut, ti, ku, du, tf, ft, rf, uf, ff, vi, af, et, di, ri, vf, yf;
    i.fn = i.prototype = {
        jquery: rr,
        constructor: i,
        length: 0,
        toArray: function() {
            return w.call(this)
        },
        get: function(n) {
            return n == null ? w.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(w.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ui,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if ((e = arguments[u]) != null)
                for (f in e)(r = n[f], t = e[f], n !== t) && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (o ? (o = !1, s = r && Array.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (rr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isWindow: function(n) {
            return n != null && n === n.window
        },
        isNumeric: function(n) {
            var t = i.type(n);
            return (t === "number" || t === "string") && !isNaN(n - parseFloat(n))
        },
        isPlainObject: function(n) {
            var t, i;
            return !n || nr.call(n) !== "[object Object]" ? !1 : (t = pf(n), !t) ? !0 : (i = yt.call(t, "constructor") && t.constructor, typeof i == "function" && tr.call(i) === wf)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? vt[nr.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            ir(n)
        },
        camelCase: function(n) {
            return n.replace(kf, "ms-").replace(df, gf)
        },
        each: function(n, t) {
            var r, i = 0;
            if (fi(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1) break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break;
            return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(bf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (fi(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ui.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return t == null ? -1 : ot.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (fi(n))
                for (e = n.length; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return gi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            return (typeof t == "string" && (u = n[t], t = n, n = u), !i.isFunction(n)) ? undefined : (f = w.call(arguments, 2), r = function() {
                return n.apply(t || this, f.concat(w.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r)
        },
        now: Date.now,
        support: f
    });
    typeof Symbol == "function" && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        vt["[object " + t + "]"] = t.toLowerCase()
    });
    y = function(n) {
        function u(n, t, r, u) {
            var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (r = r || [], typeof n != "string" || !n || v !== 1 && v !== 9 && v !== 11) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (v !== 11 && (d = cr.exec(n)))
                    if (s = d[1]) {
                        if (v === 9)
                            if (l = t.getElementById(s)) {
                                if (l.id === s) return r.push(l), r
                            } else return r;
                        else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                    } else {
                        if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    } if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (v !== 1) p = t, g = n;
                    else if (t.nodeName.toLowerCase() !== "object") {
                        for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                        g = y.join(",");
                        p = ni.test(n) && ri(t.parentNode) || t
                    }
                    if (g) try {
                        return k.apply(r, p.querySelectorAll(g)), r
                    } catch (nt) {} finally {
                        a === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function ti() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function l(n) {
            return n[f] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function vr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function bi(n) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t ? t.disabled === n : !1
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }

        function ki() {}

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function pt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && e === "parentNode",
                s = di++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (t.nodeType === 1 || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || o)
                            if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if (l[e] = y, y[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? wt(b, p, n, o, s) : b,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) {
                    return n === o
                }, c, !0), a = pt(function(n) {
                    return nt(o, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    e.push(u)
                } return ui(e)
        }

        function pr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += it == null ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) {
                                    l.push(y);
                                    break
                                } a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + ai),
                PSEUDO: new RegExp("^" + gt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yi = function(n, t) {
                return t ? n === "\0" ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            pi = function() {
                b()
            },
            lr = pt(function(n) {
                return n.disabled === !0 && ("form" in n || "label" in n)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = li.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (wr) {
            k = {
                apply: g.length ? function(n, t) {
                    tr.apply(n, li.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        e = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l === i || l.nodeType !== 9 || !l.documentElement ? i : (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
            }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
            }), e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i, u, f, r = t.getElementById(n);
                    if (r) {
                        if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                        for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                    }
                    return []
                }
            }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName != "undefined" && h) return t.getElementsByClassName(n)
            }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }), a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length !== 2 && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                n.querySelectorAll(":disabled").length !== 2 && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, kt = v ? function(n, t) {
                if (n === t) return ut = !0, 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, r & 1 || !e.sortDetached && t.compareDocumentPosition(n) === r) ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : r & 4 ? -1 : 1
            } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (o && s) {
                    if (o === s) return wi(n, t)
                } else return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }, i)
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                var r = ct.call(n, t);
                if (r || e.disconnectedMatch || n.document && n.document.nodeType !== 11) return r
            } catch (f) {}
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n), et(n, t)
        };
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()],
                u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : undefined;
            return u !== undefined ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.escape = function(n) {
            return (n + "").replace(vi, yi)
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return w = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        o = n.slice(-4) !== "last",
                        e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = e && t.nodeName.toLowerCase(),
                            g = !h && !e,
                            l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k];)
                                        if (e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) return !1;
                                    b = k = n === "only" && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                for (c = d, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                }),
                lang: l(function(n) {
                    return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = ar(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = vr(rt);
        return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, bt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = lt(n, pr(e, u));
                i.selector = n
            }
            return i
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = typeof n == "function" && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], s.length === 1) {
                if (f = s[0] = s[0].slice(0), f.length > 2 && (e = f[0]).type === "ID" && i.nodeType === 9 && h && t.relative[f[1].type]) {
                    if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], i) c && (i = i.parentNode);
                    else return r;
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), n = u.length && yt(f), !n) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
            return n.compareDocumentPosition(i.createElement("fieldset")) & 1
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), e.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ii("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        }), a(function(n) {
            return n.getAttribute("disabled") == null
        }) || ii(dt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    i.escapeSelector = y.escape;
    var g = function(n, t, r) {
            for (var u = [], f = r !== undefined;
                (n = n[t]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                } return u
        },
        ur = function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        },
        fr = i.expr.match.needsContext;
    ei = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    er = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return (r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1) ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(oi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(oi(this, n || [], !0))
        },
        is: function(n) {
            return !!oi(this, typeof n == "string" && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    sr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    hr = i.fn.init = function(n, t, r) {
        var f, e;
        if (!n) return this;
        if (r = r || or, typeof n == "string") {
            if (f = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : sr.exec(n), f && (f[1] || !t)) {
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), ei.test(f[1]) && i.isPlainObject(t))
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this
            }
            return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? r.ready !== undefined ? r.ready(n) : n(i) : i.makeArray(n, this)
    };
    hr.prototype = i.fn;
    or = i(u);
    cr = /^(?:parents|prev(?:Until|All))/;
    lr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = typeof n != "string" && i(n);
            if (!fr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        } return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? ot.call(i(n), this[0]) : ot.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return g(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return g(n, "parentNode", i)
        },
        next: function(n) {
            return ar(n, "nextSibling")
        },
        prev: function(n) {
            return ar(n, "previousSibling")
        },
        nextAll: function(n) {
            return g(n, "nextSibling")
        },
        prevAll: function(n) {
            return g(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return g(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return g(n, "previousSibling", i)
        },
        siblings: function(n) {
            return ur((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return ur(n.firstChild)
        },
        contents: function(n) {
            return l(n, "iframe") ? n.contentDocument : (l(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (lr[n] || i.uniqueSort(f), cr.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    h = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = typeof n == "string" ? ne(n) : i.extend({}, n);
        var e, r, h, u, t = [],
            o = [],
            f = -1,
            c = function() {
                for (u = u || n.once, h = e = !0; o.length; f = -1)
                    for (r = o.shift(); ++f < t.length;) t[f].apply(r[0], r[1]) === !1 && n.stopOnFalse && (f = t.length, r = !1);
                n.memory || (r = !1);
                e = !1;
                u && (t = r ? [] : "")
            },
            s = {
                add: function() {
                    return t && (r && !e && (f = t.length - 1, o.push(r)), function u(r) {
                        i.each(r, function(r, f) {
                            i.isFunction(f) ? n.unique && s.has(f) || t.push(f) : f && f.length && i.type(f) !== "string" && u(f)
                        })
                    }(arguments), r && !e && c()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= f && f--
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return u = o = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return u = o = [], r || e || (t = r = ""), this
                },
                locked: function() {
                    return !!u
                },
                fireWith: function(n, t) {
                    return u || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), e || c()), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(t) {
            var u = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return f.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(u, function(u, f) {
                                var e = i.isFunction(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, f) {
                        function o(t, r, u, f) {
                            return function() {
                                var s = this,
                                    h = arguments,
                                    l = function() {
                                        var n, c;
                                        if (!(t < e)) {
                                            if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && (typeof n == "object" || typeof n == "function") && n.then;
                                            i.isFunction(c) ? f ? c.call(n, o(e, r, nt, f), o(e, r, pt, f)) : (e++, c.call(n, o(e, r, nt, f), o(e, r, pt, f), o(e, r, nt, r.notifyWith))) : (u !== nt && (s = undefined, h = [n]), (f || r.resolveWith)(s, h))
                                        }
                                    },
                                    c = f ? l : function() {
                                        try {
                                            l()
                                        } catch (n) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                            t + 1 >= e && (u !== pt && (s = undefined, h = [n]), r.rejectWith(s, h))
                                        }
                                    };
                                t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c))
                            }
                        }
                        var e = 0;
                        return i.Deferred(function(n) {
                            u[0][3].add(o(0, n, i.isFunction(f) ? f : nt, n.notifyWith));
                            u[1][3].add(o(0, n, i.isFunction(t) ? t : nt));
                            u[2][3].add(o(0, n, i.isFunction(r) ? r : pt))
                        }).promise()
                    },
                    promise: function(n) {
                        return n != null ? i.extend(n, f) : f
                    }
                },
                r = {};
            return i.each(u, function(n, t) {
                var i = t[2],
                    o = t[5];
                f[t[1]] = i.add;
                o && i.add(function() {
                    e = o
                }, u[3 - n][2].disable, u[0][2].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? undefined : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), f.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var f = arguments.length,
                t = f,
                e = Array(t),
                u = w.call(arguments),
                r = i.Deferred(),
                o = function(n) {
                    return function(t) {
                        e[n] = this;
                        u[n] = arguments.length > 1 ? w.call(arguments) : t;
                        --f || r.resolveWith(e, u)
                    }
                };
            if (f <= 1 && (vr(n, r.done(o(t)).resolve, r.reject, !f), r.state() === "pending" || i.isFunction(u[t] && u[t].then))) return r.then();
            while (t--) vr(u[t], o(t), r.reject);
            return r.promise()
        }
    });
    yr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && yr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    wt = i.Deferred();
    i.fn.ready = function(n) {
        return wt.then(n).catch(function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || wt.resolveWith(u, [i])
        }
    });
    i.ready.then = wt.then;
    u.readyState !== "complete" && (u.readyState === "loading" || u.documentElement.doScroll) ? (u.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt)) : n.setTimeout(i.ready);
    v = function(n, t, r, u, f, e, o) {
        var s = 0,
            c = n.length,
            h = r == null;
        if (i.type(r) === "object") {
            f = !0;
            for (s in r) v(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                return h.call(i(n), r)
            })), t))
            for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    st = function(n) {
        return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType
    };
    ht.uid = 1;
    ht.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, st(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, r) {
            var u, f = this.cache(n);
            if (typeof t == "string") f[i.camelCase(t)] = r;
            else
                for (u in t) f[i.camelCase(u)] = t[u];
            return f
        },
        get: function(n, t) {
            return t === undefined ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)]
        },
        access: function(n, t, i) {
            return t === undefined || t && typeof t == "string" && i === undefined ? this.get(n, t) : (this.set(n, t, i), i !== undefined ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (r !== undefined) {
                if (t !== undefined)
                    for (Array.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = t in r ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                (t === undefined || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = undefined : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return t !== undefined && !i.isEmptyObject(t)
        }
    };
    var r = new ht,
        e = new ht,
        te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ie = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0],
                h = u && u.attributes;
            if (n === undefined) {
                if (this.length && (s = e.get(u), u.nodeType === 1 && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--;) h[o] && (f = h[o].name, f.indexOf("data-") === 0 && (f = i.camelCase(f.slice(5)), pr(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return typeof n == "object" ? this.each(function() {
                e.set(this, n)
            }) : v(this, function(t) {
                var i;
                if (u && t === undefined) return (i = e.get(u, n), i !== undefined) ? i : (i = pr(u, n), i !== undefined) ? i : void 0;
                this.each(function() {
                    e.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var wr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = new RegExp("^(?:([+-])=|)(" + wr + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        kt = function(n, t) {
            return n = t || n, n.style.display === "none" || n.style.display === "" && i.contains(n.ownerDocument, n) && i.css(n, "display") === "none"
        },
        br = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
    si = {};
    i.fn.extend({
        show: function() {
            return tt(this, !0)
        },
        hide: function() {
            return tt(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var dr = /^(?:checkbox|radio)$/i,
        gr = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        nu = /^$|\/(?:java|ecma)script/i,
        c = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    tu = /<|&#?\w+;/,
        function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
    var dt = u.documentElement,
        fe = /^key/,
        ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ru = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(dt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                        return typeof i != "undefined" && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined
                    }), t = (t || "").match(h) || [""], b = t.length; b--;)(w = ru.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o) && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;) {
                    if (c = ru.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), !o) {
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                        continue
                    }
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], (e || d === s.origType) && (!u || u.guid === s.guid) && (!c || c.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                }
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var t = i.event.fix(n),
                u, c, s, e, f, l, h = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(f.namespace)) && (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), s !== undefined && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, s, c = [],
                h = t.delegateCount,
                r = n.target;
            if (h && r.nodeType && !(n.type === "click" && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (r.nodeType === 1 && !(n.type === "click" && r.disabled === !0)) {
                        for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", s[u] === undefined && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                        o.length && c.push({
                            elem: r,
                            handlers: o
                        })
                    } return r = this, h < t.length && c.push({
                elem: r,
                handlers: t.slice(h)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: i.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== uu() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === uu() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && l(this, "input")) return this.click(), !1
                },
                _default: function(n) {
                    return l(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? gt : it, this.target = n.target && n.target.nodeType === 3 ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = gt;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = gt;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = gt;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return n.which == null && fe.test(n.type) ? n.charCode != null ? n.charCode : n.keyCode : !n.which && t !== undefined && ee.test(n.type) ? t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return ci(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return ci(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if (typeof n == "object") {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = it), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        se = /<script|<style|<link/i,
        he = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ce = /^true\/(.*)/,
        le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(oe, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!f.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) ye(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) eu(s[u], e[u]);
                else eu(n, h);
            return e = o(h, "script"), e.length > 0 && hi(e, !l && o(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, o = 0;
                (t = n[o]) !== undefined; o++)
                if (st(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = undefined
                    }
                    t[e.expando] && (t[e.expando] = undefined)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return ou(this, n, !0)
        },
        remove: function(n) {
            return ou(this, n)
        },
        text: function(n) {
            return v(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return rt(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = fu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return rt(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = fu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return rt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return rt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return v(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (n === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof n == "string" && !se.test(n) && !c[(gr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) t = this[r] || {}, t.nodeType === 1 && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return rt(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ui.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var su = /^margin/,
        li = new RegExp("^(" + wr + ")(?!px)[a-z%]+$", "i"),
        ni = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        };
    (function() {
        function r() {
            if (t) {
                t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                t.innerHTML = "";
                dt.appendChild(e);
                var i = n.getComputedStyle(t);
                o = i.top !== "1%";
                c = i.marginLeft === "2px";
                s = i.width === "4px";
                t.style.marginRight = "50%";
                h = i.marginRight === "4px";
                dt.removeChild(e);
                t = null
            }
        }
        var o, s, h, c, e = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = t.style.backgroundClip === "content-box", e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, {
            pixelPosition: function() {
                return r(), o
            },
            boxSizingReliable: function() {
                return r(), s
            },
            pixelMarginRight: function() {
                return r(), h
            },
            reliableMarginLeft: function() {
                return r(), c
            }
        }))
    })();
    var pe = /^(none|table(?!-c[ea]).+)/,
        cu = /^--/,
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lu = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        au = ["Webkit", "Moz", "ms"],
        vu = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = lt(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var e, s, o, c = i.camelCase(t),
                    l = cu.test(t),
                    h = n.style;
                if (l || (t = yu(c)), o = i.cssHooks[t] || i.cssHooks[c], r !== undefined) {
                    if (s = typeof r, s === "string" && (e = ct.exec(r)) && e[1] && (r = kr(n, t, e), s = "number"), r == null || r !== r) return;
                    s === "number" && (r += e && e[3] || (i.cssNumber[c] ? "" : "px"));
                    f.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (h[t] = "inherit");
                    o && "set" in o && (r = o.set(n, r, u)) === undefined || (l ? h.setProperty(t, r) : h[t] = r)
                } else return o && "get" in o && (e = o.get(n, !1, u)) !== undefined ? e : h[t]
            }
        },
        css: function(n, t, r, u) {
            var f, o, e, s = i.camelCase(t),
                h = cu.test(t);
            return (h || (t = yu(s)), e = i.cssHooks[t] || i.cssHooks[s], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = lt(n, t, u)), f === "normal" && t in lu && (f = lu[t]), r === "" || r) ? (o = parseFloat(f), r === !0 || isFinite(o) ? o || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return pe.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? br(n, we, function() {
                    return bu(n, t, u)
                }) : bu(n, t, u)
            },
            set: function(n, r, u) {
                var f, e = u && ni(n),
                    o = u && wu(n, t, u, i.css(n, "boxSizing", !1, e) === "border-box", e);
                return o && (f = ct.exec(r)) && (f[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), pu(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = hu(f.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(lt(n, "marginLeft")) || n.getBoundingClientRect().left - br(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        su.test(n) || (i.cssHooks[n + t].set = pu)
    });
    i.fn.extend({
        css: function(n, t) {
            return v(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = ni(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = s.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    ku = /^(?:toggle|show|hide)$/;
    du = /queueHooks$/;
    i.Animation = i.extend(a, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return kr(i.elem, n, ct.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], a.tweeners[r] = a.tweeners[r] || [], a.tweeners[r].unshift(t)
        },
        prefilters: [ke],
        prefilter: function(n, t) {
            t ? a.prefilters.unshift(n) : a.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return i.fx.off ? u.duration = 0 : typeof u.duration != "number" && (u.duration = u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default), (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = a(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = n != null && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && du.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(ii(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ii("show"),
        slideUp: ii("hide"),
        slideToggle: ii("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (ut = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        ut = undefined
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        ti || (ti = !0, ai())
    };
    i.fx.stop = function() {
        ti = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function() {
                    n.clearTimeout(u)
                }
            })
        },
        function() {
            var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = n.value !== "";
            f.optSelected = i.selected;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = n.value === "t"
        }();
    ft = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return v(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute == "undefined") return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? tf : undefined)), r !== undefined) {
                    if (r === null) {
                        i.removeAttr(n, t);
                        return
                    }
                    return f && "set" in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""), r)
                }
                return f && "get" in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t), u == null ? undefined : u)
            }
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && t === "radio" && l(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(h);
            if (r && n.nodeType === 1)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    tf = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = ft[t] || i.find.attr;
        ft[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = ft[u], ft[u] = f, f = r(n, t, i) != null ? u : null, ft[u] = e), f
        }
    });
    rf = /^(?:input|select|textarea|button)$/i;
    uf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return v(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined) ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : rf.test(n.nodeName) || uf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, d(this)))
            });
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = d(r), t = r.nodeType === 1 && " " + k(u) + " ", t) {
                        for (s = 0; f = o[s++];) t.indexOf(" " + f + " ") < 0 && (t += f + " ");
                        e = k(t);
                        u !== e && r.setAttribute("class", e)
                    } return this
        },
        removeClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, d(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = d(r), t = r.nodeType === 1 && " " + k(u) + " ", t) {
                        for (s = 0; f = o[s++];)
                            while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                        e = k(t);
                        u !== e && r.setAttribute("class", e)
                    } return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return typeof t == "boolean" && u === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, d(this), t), t)
            }) : this.each(function() {
                var t, e, f, o;
                if (u === "string")
                    for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else(n === undefined || u === "boolean") && (t = d(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (t.nodeType === 1 && (" " + k(d(t)) + " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    ff = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string") ? r.replace(ff, "") : r == null ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : k(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = n.type === "select-one", s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        } return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    vi = /^(?:focusinfocus|focusoutblur)$/;
    i.extend(i.event, {
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                h = yt.call(t, "type") ? t.type : t,
                y = yt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((s = c = e = e || u, e.nodeType !== 3 && e.nodeType !== 8) && !vi.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = e), f = f == null ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, vi.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && st(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || (!l._default || l._default.apply(p.pop(), f) === !1) && st(e) && a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = undefined, c && (e[a] = c)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    f.focusin = "onfocusin" in n;
    f.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var at = n.location,
        ef = i.now(),
        yi = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || typeof t != "string") return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (u) {
            r = undefined
        }
        return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + t), r
    };
    var ge = /\[\]$/,
        of = /\r?\n/g,
        no = /^(?:submit|button|image|reset|file)$/i,
        to = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                var r = i.isFunction(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(r == null ? "" : r)
            };
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) pi(r, n[r], t, f);
        return u.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !dr.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace( of , "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace( of , "\r\n")
                }
            }).get()
        }
    });
    var io = /%20/g,
        ro = /#.*$/,
        uo = /([?&])_=[^&]*/,
        fo = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        eo = /^(?:GET|HEAD)$/,
        oo = /^\/\//,
        sf = {},
        wi = {},
        hf = "*/".concat("*"),
        bi = u.createElement("a");
    return bi.href = at.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: at.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": hf,
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
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: cf(sf),
        ajaxTransport: cf(wi),
        ajax: function(t, r) {
            function b(t, r, u, h) {
                var y, rt, g, p, b, a = r;
                s || (s = !0, d && n.clearTimeout(d), l = undefined, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && t < 300 || t === 304, u && (p = so(f, e, u)), p = ho(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), t === 204 || f.type === "HEAD" ? a = "nocontent" : t === 304 ? a = "notmodified" : (a = p.state, rt = p.data, g = p.error, y = !g)) : (g = a, (t || !a) && (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", y ? tt.resolveWith(c, [rt, a, e]) : tt.rejectWith(c, [e, a, g]), e.statusCode(w), w = undefined, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, a]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }
            typeof t == "object" && (r = t, t = undefined);
            r = r || {};
            var l, o, k, y, d, a, s, v, g, p, f = i.ajaxSetup({}, r),
                c = f.context || f,
                nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = f.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!y)
                                for (y = {}; t = fo.exec(k);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return s == null && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return s == null && (f.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return l && l.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), f.url = ((t || f.url || at.href) + "").replace(oo, at.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], f.crossDomain == null) {
                a = u.createElement("a");
                try {
                    a.href = f.url;
                    a.href = a.href;
                    f.crossDomain = bi.protocol + "//" + bi.host != a.protocol + "//" + a.host
                } catch (et) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && typeof f.data != "string" && (f.data = i.param(f.data, f.traditional)), lf(sf, f, r, e), s) return e;
            v = i.event && f.global;
            v && i.active++ == 0 && i.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !eo.test(f.type);
            o = f.url.replace(ro, "");
            f.hasContent ? f.data && f.processData && (f.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (f.data = f.data.replace(io, "+")) : (p = f.url.slice(o.length), f.data && (o += (yi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(uo, "$1"), p = (yi.test(o) ? "&" : "?") + "_=" + ef++ + p), f.url = o + p);
            f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + hf + "; q=0.01" : "") : f.accepts["*"]);
            for (g in f.headers) e.setRequestHeader(g, f.headers[g]);
            if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort();
            if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), l = lf(wi, f, r, e), l) {
                if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = !1;
                    l.send(rt, b)
                } catch (et) {
                    if (s) throw et;
                    b(-1, et)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    }), i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, af = {
        0: 200,
        1223: 204
    }, et = i.ajaxSettings.xhr(), f.cors = !!et && "withCredentials" in et, f.ajax = et = !!et, i.ajaxTransport(function(t) {
        var i, r;
        if (f.cors || et && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, n === "abort" ? e.abort() : n === "error" ? typeof e.status != "number" ? f(0, "error") : f(e.status, e.statusText) : f(af[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = i("error");
                e.onabort !== undefined ? e.onabort = r : e.onreadystatechange = function() {
                    e.readyState === 4 && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (i) throw s;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }), di = [], ri = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = di.pop() || i.expando + "_" + ef++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ri.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ri.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ri, "$1" + f) : t.jsonp !== !1 && (t.url += (yi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return o || i.error(f + " was not called"), o[0]
        }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
            o = arguments
        }, u.always(function() {
            e === undefined ? i(n).removeProp(f) : n[f] = e;
            t[f] && (t.jsonpCallback = r.jsonpCallback, di.push(f));
            o && i.isFunction(e) && e(o[0]);
            o = e = undefined
        }), "script"
    }), f.createHTMLDocument = function() {
        var n = u.implementation.createHTMLDocument("").body;
        return n.innerHTML = "<form><\/form><form><\/form>", n.childNodes.length === 2
    }(), i.parseHTML = function(n, t, r) {
        if (typeof n != "string") return [];
        typeof t == "boolean" && (r = t, t = !1);
        var s, e, o;
        return (t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = ei.exec(n), o = !r && [], e) ? [t.createElement(e[1])] : (e = iu([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes))
    }, i.fn.load = function(n, t, r) {
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e > -1 && (u = k(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, s || [n.responseText, t, n])
            })
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return n === undefined ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, f, e, t = this[0];
            if (t) return t.getClientRects().length ? (f = t.getBoundingClientRect(), r = t.ownerDocument, u = r.documentElement, e = r.defaultView, {
                top: f.top + e.pageYOffset - u.clientTop,
                left: f.left + e.pageXOffset - u.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var t, r, u = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), l(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + i.css(t[0], "borderTopWidth", !0),
                    left: n.left + i.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: r.top - n.top - i.css(u, "marginTop", !0),
                    left: r.left - n.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || dt
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(u) {
            return v(this, function(n, u, f) {
                var e;
                if (i.isWindow(n) ? e = n : n.nodeType === 9 && (e = n.defaultView), f === undefined) return e ? e[t] : n[u];
                e ? e.scrollTo(r ? e.pageXOffset : f, r ? f : e.pageYOffset) : n[u] = f
            }, n, u, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = hu(f.pixelPosition, function(n, r) {
            if (r) return r = lt(n, t), li.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || typeof f != "boolean"),
                    s = r || (f === !0 || e === !0 ? "margin" : "border");
                return v(this, function(t, r, f) {
                    var e;
                    return i.isWindow(t) ? u.indexOf("outer") === 0 ? t["inner" + n] : t.document.documentElement["client" + n] : t.nodeType === 9 ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : f === undefined ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : undefined, o)
            }
        })
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }), i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = l, typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }), vf = n.jQuery, yf = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = yf), t && n.jQuery === i && (n.jQuery = vf), i
    }, t || (n.jQuery = n.$ = i), i
});
/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
})(function(n) {
    function wt(n) {
        for (var t = n.css("visibility"); t === "inherit";) n = n.parent(), t = n.css("visibility");
        return t !== "hidden"
    }

    function ai(n) {
        for (var t, i; n.length && n[0] !== document;) {
            if (t = n.css("position"), (t === "absolute" || t === "relative" || t === "fixed") && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && i !== 0)) return i;
            n = n.parent()
        }
        return 0
    }

    function y() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = p(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }

    function p(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", i, function() {
            n(this).removeClass("ui-state-hover");
            this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
            this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, w)
    }

    function w() {
        n.datepicker._isDisabledDatepicker(t.inline ? t.dpDiv.parent()[0] : t.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
    }

    function f(t, i) {
        n.extend(t, i);
        for (var r in i) i[r] == null && (t[r] = i[r]);
        return t
    }

    function i(n) {
        return function() {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change")
        }
    }
    var b, l, o, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, c, pt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, v, hi, ci, li, t, vi, yi, r, pi, wi, bi, e, ki, di, gi, nr, tr, ir, rr, ur, fr;
    n.ui = n.ui || {};
    b = n.ui.version = "1.12.1";
    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    l = 0;
    o = Array.prototype.slice;
    n.cleanData = function(t) {
        return function(i) {
            for (var r, u, f = 0;
                (u = i[f]) != null; f++) try {
                r = n._data(u, "events");
                r && r.remove && n(u).triggerHandler("remove")
            } catch (e) {}
            t(i)
        }
    }(n.cleanData);
    n.widget = function(t, i, r) {
        var f, u, o, h = {},
            e = t.split(".")[0],
            s;
        return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.isArray(r) && (r = n.extend.apply(null, [{}].concat(r))), n.expr[":"][s.toLowerCase()] = function(t) {
            return !!n.data(t, s)
        }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) {
            if (!this._createWidget) return new u(n, t);
            arguments.length && this._createWidget(n, t)
        }, n.extend(u, f, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) {
            if (!n.isFunction(r)) {
                h[t] = r;
                return
            }
            h[t] = function() {
                function n() {
                    return i.prototype[t].apply(this, arguments)
                }

                function u(n) {
                    return i.prototype[t].apply(this, n)
                }
                return function() {
                    var i = this._super,
                        f = this._superApply,
                        t;
                    return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                }
            }()
        }), u.prototype = n.widget.extend(o, {
            widgetEventPrefix: f ? o.widgetEventPrefix || t : t
        }, h, {
            constructor: u,
            namespace: e,
            widgetName: t,
            widgetFullName: s
        }), f ? (n.each(f._childConstructors, function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
    };
    n.widget.extend = function(t) {
        for (var f = o.call(arguments, 1), u = 0, e = f.length, i, r; u < e; u++)
            for (i in f[u]) r = f[u][i], f[u].hasOwnProperty(i) && r !== undefined && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
        return t
    };
    n.widget.bridge = function(t, i) {
        var r = i.prototype.widgetFullName || t;
        n.fn[t] = function(u) {
            var s = typeof u == "string",
                e = o.call(arguments, 1),
                f = this;
            return s ? this.length || u !== "instance" ? this.each(function() {
                var i, o = n.data(this, r);
                return u === "instance" ? (f = o, !1) : o ? !n.isFunction(o[u]) || u.charAt(0) === "_" ? n.error("no such method '" + u + "' for " + t + " widget instance") : (i = o[u].apply(o, e), i !== o && i !== undefined ? (f = i && i.jquery ? f.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
            }) : f = undefined : (e.length && (u = n.widget.extend.apply(null, [u].concat(e))), this.each(function() {
                var t = n.data(this, r);
                t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this))
            })), f
        }
    };
    n.Widget = function() {};
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = l++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            this.classesElementLookup = {};
            i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(n) {
                    n.target === i && this.destroy()
                }
            }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            var t = this;
            this._destroy();
            n.each(this.classesElementLookup, function(n, i) {
                t._removeClass(i, n)
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace)
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var e = t,
                r, u, f;
            if (arguments.length === 0) return n.widget.extend({}, this.options);
            if (typeof t == "string")
                if (e = {}, r = t.split("."), t = r.shift(), r.length) {
                    for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; f < r.length - 1; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]];
                    if (t = r.pop(), arguments.length === 1) return u[t] === undefined ? null : u[t];
                    u[t] = i
                } else {
                    if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
                    e[t] = i
                } return this._setOptions(e), this
        },
        _setOptions: function(n) {
            for (var t in n) this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return n === "classes" && this._setOptionClasses(t), this.options[n] = t, n === "disabled" && this._setOptionDisabled(t), this
        },
        _setOptionClasses: function(t) {
            var i, u, r;
            for (i in t)(r = this.classesElementLookup[i], t[i] !== this.options.classes[i] && r && r.length) && (u = n(r.get()), this._removeClass(r, i), u.addClass(this._classes({
                element: u,
                keys: i,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function(n) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!n);
            n && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(t) {
            function u(u, f) {
                for (var o, e = 0; e < u.length; e++) o = r.classesElementLookup[u[e]] || n(), o = t.add ? n(n.unique(o.get().concat(t.element.get()))) : n(o.not(t.element).get()), r.classesElementLookup[u[e]] = o, i.push(u[e]), f && t.classes[u[e]] && i.push(t.classes[u[e]])
            }
            var i = [],
                r = this;
            return t = n.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t), this._on(t.element, {
                remove: "_untrackClassesElement"
            }), t.keys && u(t.keys.match(/\S+/g) || [], !0), t.extra && u(t.extra.match(/\S+/g) || []), i.join(" ")
        },
        _untrackClassesElement: function(t) {
            var i = this;
            n.each(i.classesElementLookup, function(r, u) {
                n.inArray(t.target, u) !== -1 && (i.classesElementLookup[r] = n(u.not(t.target).get()))
            })
        },
        _removeClass: function(n, t, i) {
            return this._toggleClass(n, t, i, !1)
        },
        _addClass: function(n, t, i) {
            return this._toggleClass(n, t, i, !0)
        },
        _toggleClass: function(n, t, i, r) {
            r = typeof r == "boolean" ? r : i;
            var u = typeof n == "string" || n === null,
                f = {
                    extra: u ? t : i,
                    keys: u ? n : t,
                    element: u ? this.element : n,
                    add: r
                };
            return f.element.toggleClass(this._classes(f), r), this
        },
        _on: function(t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i, i = t, t = !1);
            r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
            n.each(r, function(r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }
                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^([\w:-]*)\s*(.*)$/),
                    h = s[1] + u.eventNamespace,
                    c = s[2];
                if (c) f.on(h, c, o);
                else i.on(h, o)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.off(i).off(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get())
        },
        _delay: function(n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(n(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(n(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function(t) {
                    this._addClass(n(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(n(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
                for (u in f) u in i || (i[u] = f[u]);
            return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {};
            typeof u == "number" && (u = {
                duration: u
            });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    });
    k = n.widget;
    /*!
     * jQuery UI Position 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */
    (function() {
        function c(n, t, i) {
            return [parseFloat(n[0]) * (h.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (h.test(n[1]) ? i / 100 : 1)]
        }

        function r(t, i) {
            return parseInt(n.css(t, i), 10) || 0
        }

        function a(t) {
            var i = t[0];
            return i.nodeType === 9 ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : n.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        var u, i = Math.max,
            t = Math.abs,
            f = /left|center|right/,
            e = /top|center|bottom/,
            o = /[\+\-]\d+(\.[\d]+)?%?/,
            s = /^\w+/,
            h = /%$/,
            l = n.fn.position;
        n.position = {
            scrollbarWidth: function() {
                if (u !== undefined) return u;
                var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                    f = t.children()[0];
                return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
                    f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                return {
                    width: f ? n.position.scrollbarWidth() : 0,
                    height: u ? n.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = n(t || window),
                    r = n.isWindow(i[0]),
                    u = !!i[0] && i[0].nodeType === 9,
                    f = !r && !u;
                return {
                    element: i,
                    isWindow: r,
                    isDocument: u,
                    offset: f ? n(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        };
        n.fn.position = function(u) {
            if (!u || !u.of) return l.apply(this, arguments);
            u = n.extend({}, u);
            var w, h, v, p, y, k, d = n(u.of),
                nt = n.position.getWithinInfo(u.within),
                tt = n.position.getScrollInfo(nt),
                b = (u.collision || "flip").split(" "),
                g = {};
            return k = a(d), d[0].preventDefault && (u.at = "left top"), h = k.width, v = k.height, p = k.offset, y = n.extend({}, p), n.each(["my", "at"], function() {
                var n = (u[this] || "").split(" "),
                    t, i;
                n.length === 1 && (n = f.test(n[0]) ? n.concat(["center"]) : e.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                n[0] = f.test(n[0]) ? n[0] : "center";
                n[1] = e.test(n[1]) ? n[1] : "center";
                t = o.exec(n[0]);
                i = o.exec(n[1]);
                g[this] = [t ? t[0] : 0, i ? i[0] : 0];
                u[this] = [s.exec(n[0])[0], s.exec(n[1])[0]]
            }), b.length === 1 && (b[1] = b[0]), u.at[0] === "right" ? y.left += h : u.at[0] === "center" && (y.left += h / 2), u.at[1] === "bottom" ? y.top += v : u.at[1] === "center" && (y.top += v / 2), w = c(g.at, h, v), y.left += w[0], y.top += w[1], this.each(function() {
                var a, k, e = n(this),
                    o = e.outerWidth(),
                    s = e.outerHeight(),
                    it = r(this, "marginLeft"),
                    rt = r(this, "marginTop"),
                    ut = o + it + r(this, "marginRight") + tt.width,
                    ft = s + rt + r(this, "marginBottom") + tt.height,
                    f = n.extend({}, y),
                    l = c(g.my, e.outerWidth(), e.outerHeight());
                u.my[0] === "right" ? f.left -= o : u.my[0] === "center" && (f.left -= o / 2);
                u.my[1] === "bottom" ? f.top -= s : u.my[1] === "center" && (f.top -= s / 2);
                f.left += l[0];
                f.top += l[1];
                a = {
                    marginLeft: it,
                    marginTop: rt
                };
                n.each(["left", "top"], function(t, i) {
                    n.ui.position[b[t]] && n.ui.position[b[t]][i](f, {
                        targetWidth: h,
                        targetHeight: v,
                        elemWidth: o,
                        elemHeight: s,
                        collisionPosition: a,
                        collisionWidth: ut,
                        collisionHeight: ft,
                        offset: [w[0] + l[0], w[1] + l[1]],
                        my: u.my,
                        at: u.at,
                        within: nt,
                        elem: e
                    })
                });
                u.using && (k = function(n) {
                    var r = p.left - f.left,
                        a = r + h - o,
                        c = p.top - f.top,
                        y = c + v - s,
                        l = {
                            target: {
                                element: d,
                                left: p.left,
                                top: p.top,
                                width: h,
                                height: v
                            },
                            element: {
                                element: e,
                                left: f.left,
                                top: f.top,
                                width: o,
                                height: s
                            },
                            horizontal: a < 0 ? "left" : r > 0 ? "right" : "center",
                            vertical: y < 0 ? "top" : c > 0 ? "bottom" : "middle"
                        };
                    h < o && t(r + a) < h && (l.horizontal = "center");
                    v < s && t(c + y) < v && (l.vertical = "middle");
                    l.important = i(t(r), t(a)) > i(t(c), t(y)) ? "horizontal" : "vertical";
                    u.using.call(this, n, l)
                });
                e.offset(n.extend(f, {
                    using: k
                }))
            })
        };
        n.ui.position = {
            fit: {
                left: function(n, t) {
                    var e = t.within,
                        u = e.isWindow ? e.scrollLeft : e.offset.left,
                        o = e.width,
                        s = n.left - t.collisionPosition.marginLeft,
                        r = u - s,
                        f = s + t.collisionWidth - o - u,
                        h;
                    t.collisionWidth > o ? r > 0 && f <= 0 ? (h = n.left + r + t.collisionWidth - o - u, n.left += r - h) : n.left = f > 0 && r <= 0 ? u : r > f ? u + o - t.collisionWidth : u : r > 0 ? n.left += r : f > 0 ? n.left -= f : n.left = i(n.left - s, n.left)
                },
                top: function(n, t) {
                    var o = t.within,
                        u = o.isWindow ? o.scrollTop : o.offset.top,
                        e = t.within.height,
                        s = n.top - t.collisionPosition.marginTop,
                        r = u - s,
                        f = s + t.collisionHeight - e - u,
                        h;
                    t.collisionHeight > e ? r > 0 && f <= 0 ? (h = n.top + r + t.collisionHeight - e - u, n.top += r - h) : n.top = f > 0 && r <= 0 ? u : r > f ? u + e - t.collisionHeight : u : r > 0 ? n.top += r : f > 0 ? n.top -= f : n.top = i(n.top - s, n.top)
                }
            },
            flip: {
                left: function(n, i) {
                    var r = i.within,
                        y = r.offset.left + r.scrollLeft,
                        c = r.width,
                        o = r.isWindow ? r.scrollLeft : r.offset.left,
                        l = n.left - i.collisionPosition.marginLeft,
                        a = l - o,
                        v = l + i.collisionWidth - c - o,
                        u = i.my[0] === "left" ? -i.elemWidth : i.my[0] === "right" ? i.elemWidth : 0,
                        f = i.at[0] === "left" ? i.targetWidth : i.at[0] === "right" ? -i.targetWidth : 0,
                        e = -2 * i.offset[0],
                        s, h;
                    a < 0 ? (s = n.left + u + f + e + i.collisionWidth - c - y, (s < 0 || s < t(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - i.collisionPosition.marginLeft + u + f + e - o, (h > 0 || t(h) < v) && (n.left += u + f + e))
                },
                top: function(n, i) {
                    var r = i.within,
                        y = r.offset.top + r.scrollTop,
                        c = r.height,
                        o = r.isWindow ? r.scrollTop : r.offset.top,
                        l = n.top - i.collisionPosition.marginTop,
                        a = l - o,
                        v = l + i.collisionHeight - c - o,
                        p = i.my[1] === "top",
                        u = p ? -i.elemHeight : i.my[1] === "bottom" ? i.elemHeight : 0,
                        f = i.at[1] === "top" ? i.targetHeight : i.at[1] === "bottom" ? -i.targetHeight : 0,
                        e = -2 * i.offset[1],
                        s, h;
                    a < 0 ? (h = n.top + u + f + e + i.collisionHeight - c - y, (h < 0 || h < t(a)) && (n.top += u + f + e)) : v > 0 && (s = n.top - i.collisionPosition.marginTop + u + f + e - o, (s > 0 || t(s) < v) && (n.top += u + f + e))
                }
            },
            flipfit: {
                left: function() {
                    n.ui.position.flip.left.apply(this, arguments);
                    n.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    n.ui.position.flip.top.apply(this, arguments);
                    n.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    })();
    d = n.ui.position;
    /*!
     * jQuery UI :data 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    g = n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        }
    });
    /*!
     * jQuery UI Disable Selection 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    nt = n.fn.extend({
        disableSelection: function() {
            var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(n + ".ui-disableSelection", function(n) {
                    n.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    /*!
     * jQuery UI Effects 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var u = "ui-effects-",
        s = "ui-effects-style",
        h = "ui-effects-animated",
        a = n;
    n.effects = {
        effect: {}
    };
    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function(n, t) {
        function e(n, t, i) {
            var r = s[t.type] || {};
            return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n
        }

        function l(t) {
            var e = i(),
                o = e._rgba = [];
            return (t = t.toLowerCase(), r(v, function(n, i) {
                var r, s = i.re.exec(t),
                    h = s && i.parse(s),
                    f = i.space || "rgba";
                if (h) return r = e[f](h), e[u[f].cache] = r[u[f].cache], o = e._rgba = r._rgba, !1
            }), o.length) ? (o.join() === "0,0,0,0" && n.extend(o, f.transparent), e) : f[t]
        }

        function o(n, t, i) {
            return (i = (i + 1) % 1, i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
        }
        var a = /^([\-+])=\s*(\d+\.?\d*)/,
            v = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(n) {
                    return [n[1], n[2], n[3], n[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(n) {
                    return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(n) {
                    return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(n) {
                    return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(n) {
                    return [n[1], n[2] / 100, n[3] / 100, n[4]]
                }
            }],
            i = n.Color = function(t, i, r, u) {
                return new n.Color.fn.parse(t, i, r, u)
            },
            u = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            s = {
                byte: {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            h = i.support = {},
            c = n("<p>")[0],
            f, r = n.each;
        c.style.cssText = "background-color:rgba(1,1,1,.5)";
        h.rgba = c.style.backgroundColor.indexOf("rgba") > -1;
        r(u, function(n, t) {
            t.cache = "_" + n;
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        i.fn = n.extend(i.prototype, {
            parse: function(o, s, h, c) {
                if (o === t) return this._rgba = [null, null, null, null], this;
                (o.jquery || o.nodeType) && (o = n(o).css(s), s = t);
                var a = this,
                    v = n.type(o),
                    y = this._rgba = [];
                return (s !== t && (o = [o, s, h, c], v = "array"), v === "string") ? this.parse(l(o) || f._default) : v === "array" ? (r(u.rgba.props, function(n, t) {
                    y[t.idx] = e(o[t.idx], t)
                }), this) : v === "object" ? (o instanceof i ? r(u, function(n, t) {
                    o[t.cache] && (a[t.cache] = o[t.cache].slice())
                }) : r(u, function(t, i) {
                    var u = i.cache;
                    r(i.props, function(n, t) {
                        if (!a[u] && i.to) {
                            if (n === "alpha" || o[n] == null) return;
                            a[u] = i.to(a._rgba)
                        }
                        a[u][t.idx] = e(o[n], t, !0)
                    });
                    a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                }), this) : void 0
            },
            is: function(n) {
                var e = i(n),
                    t = !0,
                    f = this;
                return r(u, function(n, i) {
                    var o, u = e[i.cache];
                    return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [], r(i.props, function(n, i) {
                        if (u[i.idx] != null) return t = u[i.idx] === o[i.idx]
                    })), t
                }), t
            },
            _space: function() {
                var n = [],
                    t = this;
                return r(u, function(i, r) {
                    t[r.cache] && n.push(i)
                }), n.pop()
            },
            transition: function(n, t) {
                var f = i(n),
                    c = f._space(),
                    o = u[c],
                    l = this.alpha() === 0 ? i("transparent") : this,
                    a = l[o.cache] || o.to(l._rgba),
                    h = a.slice();
                return f = f[o.cache], r(o.props, function(n, i) {
                    var c = i.idx,
                        r = a[c],
                        u = f[c],
                        o = s[i.type] || {};
                    u !== null && (r === null ? h[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), h[c] = e((u - r) * t + r, i)))
                }), this[c](h)
            },
            blend: function(t) {
                if (this._rgba[3] === 1) return this;
                var r = this._rgba.slice(),
                    u = r.pop(),
                    f = i(t)._rgba;
                return i(n.map(r, function(n, t) {
                    return (1 - u) * f[t] + u * n
                }))
            },
            toRgbaString: function() {
                var i = "rgba(",
                    t = n.map(this._rgba, function(n, t) {
                        return n == null ? t > 2 ? 1 : 0 : n
                    });
                return t[3] === 1 && (t.pop(), i = "rgb("), i + t.join() + ")"
            },
            toHslaString: function() {
                var i = "hsla(",
                    t = n.map(this.hsla(), function(n, t) {
                        return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
                    });
                return t[3] === 1 && (t.pop(), i = "hsl("), i + t.join() + ")"
            },
            toHexString: function(t) {
                var i = this._rgba.slice(),
                    r = i.pop();
                return t && i.push(~~(r * 255)), "#" + n.map(i, function(n) {
                    return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        });
        i.fn.parse.prototype = i.fn;
        u.hsla.to = function(n) {
            if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
            var i = n[0] / 255,
                r = n[1] / 255,
                f = n[2] / 255,
                s = n[3],
                u = Math.max(i, r, f),
                e = Math.min(i, r, f),
                t = u - e,
                o = u + e,
                h = o * .5,
                c, l;
            return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
        };
        u.hsla.from = function(n) {
            if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
            var r = n[0] / 360,
                u = n[1],
                t = n[2],
                e = n[3],
                i = t <= .5 ? t * (1 + u) : t + u - t * u,
                f = 2 * t - i;
            return [Math.round(o(f, i, r + 1 / 3) * 255), Math.round(o(f, i, r) * 255), Math.round(o(f, i, r - 1 / 3) * 255), e]
        };
        r(u, function(u, f) {
            var s = f.props,
                o = f.cache,
                h = f.to,
                c = f.from;
            i.fn[u] = function(u) {
                if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                var l, a = n.type(u),
                    v = a === "array" || a === "object" ? u : arguments,
                    f = this[o].slice();
                return r(s, function(n, t) {
                    var i = v[a === "object" ? n : t.idx];
                    i == null && (i = f[t.idx]);
                    f[t.idx] = e(i, t)
                }), c ? (l = i(c(f)), l[o] = f, l) : i(f)
            };
            r(s, function(t, r) {
                i.fn[t] || (i.fn[t] = function(i) {
                    var f = n.type(i),
                        h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u,
                        o = this[h](),
                        s = o[r.idx],
                        e;
                    return f === "undefined" ? s : (f === "function" && (i = i.call(this, s), f = n.type(i)), i == null && r.empty) ? this : (f === "string" && (e = a.exec(i), e && (i = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[r.idx] = i, this[h](o))
                })
            })
        });
        i.hook = function(t) {
            var u = t.split(" ");
            r(u, function(t, r) {
                n.cssHooks[r] = {
                    set: function(t, u) {
                        var o, f, e = "";
                        if (u !== "transparent" && (n.type(u) !== "string" || (o = l(u)))) {
                            if (u = i(o || u), !h.rgba && u._rgba[3] !== 1) {
                                for (f = r === "backgroundColor" ? t.parentNode : t;
                                    (e === "" || e === "transparent") && f && f.style;) try {
                                    e = n.css(f, "backgroundColor");
                                    f = f.parentNode
                                } catch (s) {}
                                u = u.blend(e && e !== "transparent" ? e : "_default")
                            }
                            u = u.toRgbaString()
                        }
                        try {
                            t.style[r] = u
                        } catch (s) {}
                    }
                };
                n.fx.step[r] = function(t) {
                    t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                    n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        };
        i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        n.cssHooks.borderColor = {
            expand: function(n) {
                var t = {};
                return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                    t["border" + r + "Color"] = n
                }), t
            }
        };
        f = n.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(a),
    function() {
        function t(t) {
            var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                f = {};
            if (i && i.length && i[0] && i[i[0]])
                for (u = i.length; u--;) r = i[u], typeof i[r] == "string" && (f[n.camelCase(r)] = i[r]);
            else
                for (r in i) typeof i[r] == "string" && (f[r] = i[r]);
            return f
        }

        function u(t, i) {
            var e = {},
                u, f;
            for (u in i) f = i[u], t[u] !== f && (r[u] || (n.fx.step[u] || !isNaN(parseFloat(f))) && (e[u] = f));
            return e
        }
        var i = ["add", "remove", "toggle"],
            r = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
            n.fx.step[i] = function(n) {
                (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (a.style(n.elem, i, n.end), n.setAttr = !0)
            }
        });
        n.fn.addBack || (n.fn.addBack = function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        });
        n.effects.animateClass = function(r, f, e, o) {
            var s = n.speed(f, e, o);
            return this.queue(function() {
                var e = n(this),
                    h = e.attr("class") || "",
                    o, f = s.children ? e.find("*").addBack() : e;
                f = f.map(function() {
                    var i = n(this);
                    return {
                        el: i,
                        start: t(this)
                    }
                });
                o = function() {
                    n.each(i, function(n, t) {
                        r[t] && e[t + "Class"](r[t])
                    })
                };
                o();
                f = f.map(function() {
                    return this.end = t(this.el[0]), this.diff = u(this.start, this.end), this
                });
                e.attr("class", h);
                f = f.map(function() {
                    var i = this,
                        t = n.Deferred(),
                        r = n.extend({}, s, {
                            queue: !1,
                            complete: function() {
                                t.resolve(i)
                            }
                        });
                    return this.el.animate(this.diff, r), t.promise()
                });
                n.when.apply(n, f.get()).done(function() {
                    o();
                    n.each(arguments, function() {
                        var t = this.el;
                        n.each(this.diff, function(n) {
                            t.css(n, "")
                        })
                    });
                    s.complete.call(e[0])
                })
            })
        };
        n.fn.extend({
            addClass: function(t) {
                return function(i, r, u, f) {
                    return r ? n.effects.animateClass.call(this, {
                        add: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.addClass),
            removeClass: function(t) {
                return function(i, r, u, f) {
                    return arguments.length > 1 ? n.effects.animateClass.call(this, {
                        remove: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.removeClass),
            toggleClass: function(t) {
                return function(i, r, u, f, e) {
                    return typeof r == "boolean" || r === undefined ? u ? n.effects.animateClass.call(this, r ? {
                        add: i
                    } : {
                        remove: i
                    }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {
                        toggle: i
                    }, r, u, f)
                }
            }(n.fn.toggleClass),
            switchClass: function(t, i, r, u, f) {
                return n.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                }, r, u, f)
            }
        })
    }(),
    function() {
        function t(t, i, r, u) {
            return n.isPlainObject(t) && (i = t, t = t.effect), t = {
                effect: t
            }, i == null && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
        }

        function i(t) {
            return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : n.isFunction(t) ? !0 : typeof t == "object" && !t.effect ? !0 : !1
        }

        function r(n, t) {
            var r = t.outerWidth(),
                u = t.outerHeight(),
                i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(n) || ["", 0, r, u, 0];
            return {
                top: parseFloat(i[1]) || 0,
                right: i[2] === "auto" ? r : parseFloat(i[2]),
                bottom: i[3] === "auto" ? u : parseFloat(i[3]),
                left: parseFloat(i[4]) || 0
            }
        }
        n.expr && n.expr.filters && n.expr.filters.animated && (n.expr.filters.animated = function(t) {
            return function(i) {
                return !!n(i).data(h) || t(i)
            }
        }(n.expr.filters.animated));
        n.uiBackCompat !== !1 && n.extend(n.effects, {
            save: function(n, t) {
                for (var i = 0, r = t.length; i < r; i++) t[i] !== null && n.data(u + t[i], n[0].style[t[i]])
            },
            restore: function(n, t) {
                for (var r, i = 0, f = t.length; i < f; i++) t[i] !== null && (r = n.data(u + t[i]), n.css(t[i], r))
            },
            setMode: function(n, t) {
                return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        float: t.css("float")
                    },
                    u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    f = {
                        width: t.width(),
                        height: t.height()
                    },
                    r = document.activeElement;
                try {
                    r.id
                } catch (e) {
                    r = document.body
                }
                return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).trigger("focus"), u = t.parent(), t.css("position") === "static" ? (u.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (n.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), n.each(["top", "left", "bottom", "right"], function(n, r) {
                    i[r] = t.css(r);
                    isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(f), u.css(i).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).trigger("focus")), t
            }
        });
        n.extend(n.effects, {
            version: "1.12.1",
            define: function(t, i, r) {
                return r || (r = i, i = "effect"), n.effects.effect[t] = r, n.effects.effect[t].mode = i, r
            },
            scaledDimensions: function(n, t, i) {
                if (t === 0) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var r = i !== "horizontal" ? (t || 100) / 100 : 1,
                    u = i !== "vertical" ? (t || 100) / 100 : 1;
                return {
                    height: n.height() * u,
                    width: n.width() * r,
                    outerHeight: n.outerHeight() * u,
                    outerWidth: n.outerWidth() * r
                }
            },
            clipToBox: function(n) {
                return {
                    width: n.clip.right - n.clip.left,
                    height: n.clip.bottom - n.clip.top,
                    left: n.clip.left,
                    top: n.clip.top
                }
            },
            unshift: function(n, t, i) {
                var r = n.queue();
                t > 1 && r.splice.apply(r, [1, 0].concat(r.splice(t, i)));
                n.dequeue()
            },
            saveStyle: function(n) {
                n.data(s, n[0].style.cssText)
            },
            restoreStyle: function(n) {
                n[0].style.cssText = n.data(s) || "";
                n.removeData(s)
            },
            mode: function(n, t) {
                var i = n.is(":hidden");
                return t === "toggle" && (t = i ? "show" : "hide"), (i ? t === "hide" : t === "show") && (t = "none"), t
            },
            getBaseline: function(n, t) {
                var i, r;
                switch (n[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = n[0] / t.height
                }
                switch (n[1]) {
                    case "left":
                        r = 0;
                        break;
                    case "center":
                        r = .5;
                        break;
                    case "right":
                        r = 1;
                        break;
                    default:
                        r = n[1] / t.width
                }
                return {
                    x: r,
                    y: i
                }
            },
            createPlaceholder: function(t) {
                var i, r = t.css("position"),
                    f = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(r) && (r = "absolute", i = n("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    float: t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(u + "placeholder", i)), t.css({
                    position: r,
                    left: f.left,
                    top: f.top
                }), i
            },
            removePlaceholder: function(n) {
                var t = u + "placeholder",
                    i = n.data(t);
                i && (i.remove(), n.removeData(t))
            },
            cleanUp: function(t) {
                n.effects.restoreStyle(t);
                n.effects.removePlaceholder(t)
            },
            setTransition: function(t, i, r, u) {
                return u = u || {}, n.each(i, function(n, i) {
                    var f = t.cssUnit(i);
                    f[0] > 0 && (u[i] = f[0] * r + f[1])
                }), u
            }
        });
        n.fn.extend({
            effect: function() {
                function a(t) {
                    function l() {
                        o.removeData(h);
                        n.effects.cleanUp(o);
                        i.mode === "hide" && o.hide();
                        s()
                    }

                    function s() {
                        n.isFunction(f) && f.call(o[0]);
                        n.isFunction(t) && t()
                    }
                    var o = n(this);
                    i.mode = c.shift();
                    n.uiBackCompat === !1 || u ? i.mode === "none" ? (o[r](), s()) : e.call(o[0], i, l) : (o.is(":hidden") ? r === "hide" : r === "show") ? (o[r](), s()) : e.call(o[0], i, s)
                }
                var i = t.apply(this, arguments),
                    e = n.effects.effect[i.effect],
                    u = e.mode,
                    o = i.queue,
                    s = o || "fx",
                    f = i.complete,
                    r = i.mode,
                    c = [],
                    l = function(t) {
                        var f = n(this),
                            i = n.effects.mode(f, r) || u;
                        f.data(h, !0);
                        c.push(i);
                        u && (i === "show" || i === u && i === "hide") && f.show();
                        u && i === "none" || n.effects.saveStyle(f);
                        n.isFunction(t) && t()
                    };
                return n.fx.off || !e ? r ? this[r](i.duration, f) : this.each(function() {
                    f && f.call(this)
                }) : o === !1 ? this.each(l).each(a) : this.queue(s, l).queue(s, a)
            },
            show: function(n) {
                return function(r) {
                    if (i(r)) return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "show", this.effect.call(this, u)
                }
            }(n.fn.show),
            hide: function(n) {
                return function(r) {
                    if (i(r)) return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "hide", this.effect.call(this, u)
                }
            }(n.fn.hide),
            toggle: function(n) {
                return function(r) {
                    if (i(r) || typeof r == "boolean") return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "toggle", this.effect.call(this, u)
                }
            }(n.fn.toggle),
            cssUnit: function(t) {
                var i = this.css(t),
                    r = [];
                return n.each(["em", "px", "%", "pt"], function(n, t) {
                    i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                }), r
            },
            cssClip: function(n) {
                return n ? this.css("clip", "rect(" + n.top + "px " + n.right + "px " + n.bottom + "px " + n.left + "px)") : r(this.css("clip"), this)
            },
            transfer: function(t, i) {
                var u = n(this),
                    r = n(t.to),
                    f = r.css("position") === "fixed",
                    e = n("body"),
                    o = f ? e.scrollTop() : 0,
                    s = f ? e.scrollLeft() : 0,
                    h = r.offset(),
                    l = {
                        top: h.top - o,
                        left: h.left - s,
                        height: r.innerHeight(),
                        width: r.innerWidth()
                    },
                    c = u.offset(),
                    a = n("<div class='ui-effects-transfer'><\/div>").appendTo("body").addClass(t.className).css({
                        top: c.top - o,
                        left: c.left - s,
                        height: u.innerHeight(),
                        width: u.innerWidth(),
                        position: f ? "fixed" : "absolute"
                    }).animate(l, t.duration, t.easing, function() {
                        a.remove();
                        n.isFunction(i) && i()
                    })
            }
        });
        n.fx.step.clip = function(t) {
            t.clipInit || (t.start = n(t.elem).cssClip(), typeof t.end == "string" && (t.end = r(t.end, t.elem)), t.clipInit = !0);
            n(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(),
    function() {
        var t = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
            t[i] = function(t) {
                return Math.pow(t, n + 2)
            }
        });
        n.extend(t, {
            Sine: function(n) {
                return 1 - Math.cos(n * Math.PI / 2)
            },
            Circ: function(n) {
                return 1 - Math.sqrt(1 - n * n)
            },
            Elastic: function(n) {
                return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(n) {
                return n * n * (3 * n - 2)
            },
            Bounce: function(n) {
                for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
            }
        });
        n.each(t, function(t, i) {
            n.easing["easeIn" + t] = i;
            n.easing["easeOut" + t] = function(n) {
                return 1 - i(1 - n)
            };
            n.easing["easeInOut" + t] = function(n) {
                return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
            }
        })
    }();
    c = n.effects;
    /*!
     * jQuery UI Effects Blind 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    tt = n.effects.define("blind", "hide", function(t, i) {
        var e = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            },
            u = n(this),
            o = t.direction || "up",
            s = u.cssClip(),
            r = {
                clip: n.extend({}, s)
            },
            f = n.effects.createPlaceholder(u);
        r.clip[e[o][0]] = r.clip[e[o][1]];
        t.mode === "show" && (u.cssClip(r.clip), f && f.css(n.effects.clipToBox(r)), r.clip = s);
        f && f.animate(n.effects.clipToBox(r), t.duration, t.easing);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    /*!
     * jQuery UI Effects Bounce 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    it = n.effects.define("bounce", function(t, i) {
        var e, o, a, u = n(this),
            p = t.mode,
            s = p === "hide",
            w = p === "show",
            h = t.direction || "up",
            r = t.distance,
            v = t.times || 5,
            b = v * 2 + (w || s ? 1 : 0),
            c = t.duration / b,
            l = t.easing,
            f = h === "up" || h === "down" ? "top" : "left",
            y = h === "up" || h === "left",
            k = 0,
            d = u.queue().length;
        for (n.effects.createPlaceholder(u), a = u.css(f), r || (r = u[f === "top" ? "outerHeight" : "outerWidth"]() / 3), w && (o = {
                opacity: 1
            }, o[f] = a, u.css("opacity", 0).css(f, y ? -r * 2 : r * 2).animate(o, c, l)), s && (r = r / Math.pow(2, v - 1)), o = {}, o[f] = a; k < v; k++) e = {}, e[f] = (y ? "-=" : "+=") + r, u.animate(e, c, l).animate(o, c, l), r = s ? r * 2 : r / 2;
        s && (e = {
            opacity: 0
        }, e[f] = (y ? "-=" : "+=") + r, u.animate(e, c, l));
        u.queue(i);
        n.effects.unshift(u, d, b + 1)
    });
    /*!
     * jQuery UI Effects Clip 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    rt = n.effects.define("clip", "hide", function(t, i) {
        var r, u = {},
            f = n(this),
            e = t.direction || "vertical",
            o = e === "both",
            s = o || e === "horizontal",
            h = o || e === "vertical";
        r = f.cssClip();
        u.clip = {
            top: h ? (r.bottom - r.top) / 2 : r.top,
            right: s ? (r.right - r.left) / 2 : r.right,
            bottom: h ? (r.bottom - r.top) / 2 : r.bottom,
            left: s ? (r.right - r.left) / 2 : r.left
        };
        n.effects.createPlaceholder(f);
        t.mode === "show" && (f.cssClip(u.clip), u.clip = r);
        f.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    /*!
     * jQuery UI Effects Drop 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ut = n.effects.define("drop", "hide", function(t, i) {
        var e, u = n(this),
            h = t.mode,
            c = h === "show",
            f = t.direction || "left",
            o = f === "up" || f === "down" ? "top" : "left",
            s = f === "up" || f === "left" ? "-=" : "+=",
            l = s === "+=" ? "-=" : "+=",
            r = {
                opacity: 0
            };
        n.effects.createPlaceholder(u);
        e = t.distance || u[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
        r[o] = s + e;
        c && (u.css(r), r[o] = l + e, r.opacity = 1);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    /*!
     * jQuery UI Effects Explode 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ft = n.effects.define("explode", "hide", function(t, i) {
        function k() {
            p.push(this);
            p.length === e * c && d()
        }

        function d() {
            o.css({
                visibility: "visible"
            });
            n(p).remove();
            i()
        }
        for (var u, l, a, v, y, e = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = e, o = n(this), b = t.mode, f = b === "show", w = o.show().css("visibility", "hidden").offset(), s = Math.ceil(o.outerWidth() / c), h = Math.ceil(o.outerHeight() / e), p = [], r = 0; r < e; r++)
            for (a = w.top + r * h, y = r - (e - 1) / 2, u = 0; u < c; u++) l = w.left + u * s, v = u - (c - 1) / 2, o.clone().appendTo("body").wrap("<div><\/div>").css({
                position: "absolute",
                visibility: "visible",
                left: -u * s,
                top: -r * h
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: s,
                height: h,
                left: l + (f ? v * s : 0),
                top: a + (f ? y * h : 0),
                opacity: f ? 0 : 1
            }).animate({
                left: l + (f ? 0 : v * s),
                top: a + (f ? 0 : y * h),
                opacity: f ? 1 : 0
            }, t.duration || 500, t.easing, k)
    });
    /*!
     * jQuery UI Effects Fade 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    et = n.effects.define("fade", "toggle", function(t, i) {
        var r = t.mode === "show";
        n(this).css("opacity", r ? 0 : 1).animate({
            opacity: r ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    /*!
     * jQuery UI Effects Fold 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ot = n.effects.define("fold", "hide", function(t, i) {
        var u = n(this),
            l = t.mode,
            v = l === "show",
            y = l === "hide",
            o = t.size || 15,
            a = /([0-9]+)%/.exec(o),
            p = !!t.horizFirst,
            f = p ? ["right", "bottom"] : ["bottom", "right"],
            s = t.duration / 2,
            h = n.effects.createPlaceholder(u),
            e = u.cssClip(),
            c = {
                clip: n.extend({}, e)
            },
            r = {
                clip: n.extend({}, e)
            },
            w = [e[f[0]], e[f[1]]],
            b = u.queue().length;
        a && (o = parseInt(a[1], 10) / 100 * w[y ? 0 : 1]);
        c.clip[f[0]] = o;
        r.clip[f[0]] = o;
        r.clip[f[1]] = 0;
        v && (u.cssClip(r.clip), h && h.css(n.effects.clipToBox(r)), r.clip = e);
        u.queue(function(i) {
            h && h.animate(n.effects.clipToBox(c), s, t.easing).animate(n.effects.clipToBox(r), s, t.easing);
            i()
        }).animate(c, s, t.easing).animate(r, s, t.easing).queue(i);
        n.effects.unshift(u, b, 4)
    });
    /*!
     * jQuery UI Effects Highlight 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    st = n.effects.define("highlight", "show", function(t, i) {
        var r = n(this),
            u = {
                backgroundColor: r.css("backgroundColor")
            };
        t.mode === "hide" && (u.opacity = 0);
        n.effects.saveStyle(r);
        r.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    /*!
     * jQuery UI Effects Size 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ht = n.effects.define("size", function(t, i) {
        var l, r, p, u = n(this),
            v = ["fontSize"],
            s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            w = t.mode,
            y = w !== "effect",
            c = t.scale || "both",
            b = t.origin || ["middle", "center"],
            k = u.css("position"),
            a = u.position(),
            o = n.effects.scaledDimensions(u),
            f = t.from || o,
            e = t.to || n.effects.scaledDimensions(u, 0);
        n.effects.createPlaceholder(u);
        w === "show" && (p = f, f = e, e = p);
        r = {
            from: {
                y: f.height / o.height,
                x: f.width / o.width
            },
            to: {
                y: e.height / o.height,
                x: e.width / o.width
            }
        };
        (c === "box" || c === "both") && (r.from.y !== r.to.y && (f = n.effects.setTransition(u, s, r.from.y, f), e = n.effects.setTransition(u, s, r.to.y, e)), r.from.x !== r.to.x && (f = n.effects.setTransition(u, h, r.from.x, f), e = n.effects.setTransition(u, h, r.to.x, e)));
        (c === "content" || c === "both") && r.from.y !== r.to.y && (f = n.effects.setTransition(u, v, r.from.y, f), e = n.effects.setTransition(u, v, r.to.y, e));
        b && (l = n.effects.getBaseline(b, o), f.top = (o.outerHeight - f.outerHeight) * l.y + a.top, f.left = (o.outerWidth - f.outerWidth) * l.x + a.left, e.top = (o.outerHeight - e.outerHeight) * l.y + a.top, e.left = (o.outerWidth - e.outerWidth) * l.x + a.left);
        u.css(f);
        (c === "content" || c === "both") && (s = s.concat(["marginTop", "marginBottom"]).concat(v), h = h.concat(["marginLeft", "marginRight"]), u.find("*[width]").each(function() {
            var i = n(this),
                u = n.effects.scaledDimensions(i),
                f = {
                    height: u.height * r.from.y,
                    width: u.width * r.from.x,
                    outerHeight: u.outerHeight * r.from.y,
                    outerWidth: u.outerWidth * r.from.x
                },
                e = {
                    height: u.height * r.to.y,
                    width: u.width * r.to.x,
                    outerHeight: u.height * r.to.y,
                    outerWidth: u.width * r.to.x
                };
            r.from.y !== r.to.y && (f = n.effects.setTransition(i, s, r.from.y, f), e = n.effects.setTransition(i, s, r.to.y, e));
            r.from.x !== r.to.x && (f = n.effects.setTransition(i, h, r.from.x, f), e = n.effects.setTransition(i, h, r.to.x, e));
            y && n.effects.saveStyle(i);
            i.css(f);
            i.animate(e, t.duration, t.easing, function() {
                y && n.effects.restoreStyle(i)
            })
        }));
        u.animate(e, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                var t = u.offset();
                e.opacity === 0 && u.css("opacity", f.opacity);
                y || (u.css("position", k === "static" ? "relative" : k).offset(t), n.effects.saveStyle(u));
                i()
            }
        })
    });
    /*!
     * jQuery UI Effects Scale 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ct = n.effects.define("scale", function(t, i) {
        var u = n(this),
            f = t.mode,
            e = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f !== "effect" ? 0 : 100),
            r = n.extend(!0, {
                from: n.effects.scaledDimensions(u),
                to: n.effects.scaledDimensions(u, e, t.direction || "both"),
                origin: t.origin || ["middle", "center"]
            }, t);
        t.fade && (r.from.opacity = 1, r.to.opacity = 0);
        n.effects.effect.size.call(this, r, i)
    });
    /*!
     * jQuery UI Effects Puff 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    lt = n.effects.define("puff", "hide", function(t, i) {
        var r = n.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        n.effects.effect.scale.call(this, r, i)
    });
    /*!
     * jQuery UI Effects Pulsate 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    at = n.effects.define("pulsate", "show", function(t, i) {
        var r = n(this),
            e = t.mode,
            o = e === "show",
            c = e === "hide",
            l = o || c,
            f = (t.times || 5) * 2 + (l ? 1 : 0),
            s = t.duration / f,
            u = 0,
            h = 1,
            a = r.queue().length;
        for ((o || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1); h < f; h++) r.animate({
            opacity: u
        }, s, t.easing), u = 1 - u;
        r.animate({
            opacity: u
        }, s, t.easing);
        r.queue(i);
        n.effects.unshift(r, a, f + 1)
    });
    /*!
     * jQuery UI Effects Shake 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    vt = n.effects.define("shake", function(t, i) {
        var l = 1,
            r = n(this),
            f = t.direction || "left",
            e = t.distance || 20,
            a = t.times || 3,
            v = a * 2 + 1,
            u = Math.round(t.duration / v),
            o = f === "up" || f === "down" ? "top" : "left",
            s = f === "up" || f === "left",
            h = {},
            c = {},
            y = {},
            p = r.queue().length;
        for (n.effects.createPlaceholder(r), h[o] = (s ? "-=" : "+=") + e, c[o] = (s ? "+=" : "-=") + e * 2, y[o] = (s ? "-=" : "+=") + e * 2, r.animate(h, u, t.easing); l < a; l++) r.animate(c, u, t.easing).animate(y, u, t.easing);
        r.animate(c, u, t.easing).animate(h, u / 2, t.easing).queue(i);
        n.effects.unshift(r, p, v + 1)
    });
    /*!
     * jQuery UI Effects Slide 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    yt = n.effects.define("slide", "show", function(t, i) {
        var s, o, u = n(this),
            h = {
                up: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                right: ["left", "right"]
            },
            c = t.mode,
            f = t.direction || "left",
            e = f === "up" || f === "down" ? "top" : "left",
            l = f === "up" || f === "left",
            a = t.distance || u[e === "top" ? "outerHeight" : "outerWidth"](!0),
            r = {};
        n.effects.createPlaceholder(u);
        s = u.cssClip();
        o = u.position()[e];
        r[e] = (l ? -1 : 1) * a + o;
        r.clip = u.cssClip();
        r.clip[h[f][1]] = r.clip[h[f][0]];
        c === "show" && (u.cssClip(r.clip), u.css(e, r[e]), r.clip = s, r[e] = o);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }); 
    /*!
     * jQuery UI Mouse 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    r = !1;
    n(document).on("mouseup", function() {
        r = !1
    });
    var er = n.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.on("mousedown." + this.widgetName, function(n) {
                    return t._mouseDown(n)
                }).on("click." + this.widgetName, function(i) {
                    if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                });
                this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName);
                this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!r) {
                    this._mouseMoved = !1;
                    this._mouseStarted && this._mouseUp(t);
                    this._mouseDownEvent = t;
                    var i = this,
                        u = t.which === 1,
                        f = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                    if (!u || f || !this._mouseCapture(t)) return !0;
                    if (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted)) return t.preventDefault(), !0;
                    !0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent");
                    this._mouseMoveDelegate = function(n) {
                        return i._mouseMove(n)
                    };
                    this._mouseUpDelegate = function(n) {
                        return i._mouseUp(n)
                    };
                    this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
                    return t.preventDefault(), r = !0, !0
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which)
                        if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                }
                return ((t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted) ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
                this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t));
                this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer);
                this.ignoreMissingWhich = !1;
                r = !1;
                t.preventDefault()
            },
            _mouseDistanceMet: function(n) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }),
        or = n.ui.plugin = {
            add: function(t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i, r) {
                var u, f = n.plugins[t];
                if (f && (r || n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11))
                    for (u = 0; u < f.length; u++) n.options[f[u][0]] && f[u][1].apply(n.element, i)
            }
        },
        sr = n.ui.safeBlur = function(t) {
            t && t.nodeName.toLowerCase() !== "body" && n(t).trigger("blur")
        };
    /*!
     * jQuery UI Draggable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper === "original" && this._setPositionRelative();
            this.options.addClasses && this._addClass("ui-draggable");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "handle" && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = !0;
                return
            }
            this._removeHandleClassName();
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), !this.handle) ? !1 : (this._blurActiveElement(t), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0)
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = n(this);
                return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = n.ui.safeActiveElement(this.document[0]),
                r = n(t.target);
            r.closest(i).length || n.ui.safeBlur(i)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return (this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return n(this).css("position") === "fixed"
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1) ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(n) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: n.pageX - this.offset.left,
                top: n.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp(new n.Event("mouseup", t)), !1;
                this.position = r.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var r = this,
                i = !1;
            return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new n.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var r = this.options,
                u = n.isFunction(r.helper),
                i = u ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo), u && i[0] === this.element[0] && this._setPositionRelative(), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(n) {
            return /(html|body)/i.test(n.tagName) || n === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return this.cssPosition === "absolute" && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") return {
                top: 0,
                left: 0
            };
            var n = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var f, t, i, r = this.options,
                u = this.document[0];
            if (this.relativeContainer = null, !r.containment) {
                this.containment = null;
                return
            }
            if (r.containment === "window") {
                this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment === "document") {
                this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment.constructor === Array) {
                this.containment = r.containment;
                return
            }(r.containment === "parent" && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i) && (f = /(scroll|auto)/.test(t.css("overflow")), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t)
        },
        _convertPositionTo: function(n, t) {
            t || (t = this.position);
            var i = n === "absolute" ? 1 : -1,
                r = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(n, t) {
            var i, s, u, f, r = this.options,
                h = this._isRootNode(this.scrollParent[0]),
                e = n.pageX,
                o = n.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f), r.axis === "y" && (e = this.originalPageX), r.axis === "x" && (o = this.originalPageY)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), r.offset = this.positionAbs), n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [];
            n(r.options.connectToSortable).each(function() {
                var i = n(this).sortable("instance");
                i && !i.options.disabled && (r.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, u))
            })
        },
        stop: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.cancelHelperRemoval = !1;
            n.each(r.sortables, function() {
                var n = this;
                n.isOver ? (n.isOver = 0, r.cancelHelperRemoval = !0, n.cancelHelperRemoval = !1, n._storedCSS = {
                    position: n.placeholder.css("position"),
                    top: n.placeholder.css("top"),
                    left: n.placeholder.css("left")
                }, n._mouseStop(t), n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0, n._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i, r) {
            n.each(r.sortables, function() {
                var f = !1,
                    u = this;
                u.positionAbs = r.positionAbs;
                u.helperProportions = r.helperProportions;
                u.offset.click = r.offset.click;
                u._intersectsWith(u.containerCache) && (f = !0, n.each(r.sortables, function() {
                    return this.positionAbs = r.positionAbs, this.helperProportions = r.helperProportions, this.offset.click = r.offset.click, this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1), f
                }));
                f ? (u.isOver || (u.isOver = 1, r._parent = i.helper.parent(), u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0), u.options._helper = u.options.helper, u.options.helper = function() {
                    return i.helper[0]
                }, t.target = u.currentItem[0], u._mouseCapture(t, !0), u._mouseStart(t, !0, !0), u.offset.click.top = r.offset.click.top, u.offset.click.left = r.offset.click.left, u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left, u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top, r._trigger("toSortable", t), r.dropped = u.element, n.each(r.sortables, function() {
                    this.refreshPositions()
                }), r.currentItem = r.element, u.fromOutside = r), u.currentItem && (u._mouseDrag(t), i.position = u.position)) : u.isOver && (u.isOver = 0, u.cancelHelperRemoval = !0, u.options._revert = u.options.revert, u.options.revert = !1, u._trigger("out", t, u._uiHash(u)), u._mouseStop(t, !0), u.options.revert = u.options._revert, u.options.helper = u.options._helper, u.placeholder && u.placeholder.remove(), i.helper.appendTo(r._parent), r._refreshOffsets(t), i.position = r._generatePosition(t, !0), r._trigger("fromSortable", t), r.dropped = !1, n.each(r.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, r) {
            var u = n("body"),
                f = r.options;
            u.css("cursor") && (f._cursor = u.css("cursor"));
            u.css("cursor", f.cursor)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._cursor && n("body").css("cursor", u._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, r) {
            var u = n(i.helper),
                f = r.options;
            u.css("opacity") && (f._opacity = u.css("opacity"));
            u.css("opacity", f.opacity)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._opacity && n(i.helper).css("opacity", u._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function(n, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
            i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML" && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, r) {
            var u = r.options,
                o = !1,
                e = r.scrollParentNotHidden[0],
                f = r.document[0];
            e !== f && e.tagName !== "HTML" ? (u.axis && u.axis === "x" || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)), u.axis && u.axis === "y" || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && u.axis === "x" || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))), u.axis && u.axis === "y" || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
            o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function(t, i, r) {
            var u = r.options;
            r.snapElements = [];
            n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function() {
                var t = n(this),
                    i = t.offset();
                this !== r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i, r) {
            for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) {
                if (c = r.snapElements[u].left - r.margins.left, a = c + r.snapElements[u].width, l = r.snapElements[u].top - r.margins.top, v = l + r.snapElements[u].height, k < c - f || y > a + f || d < l - f || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item)) {
                    r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[u].item
                    }));
                    r.snapElements[u].snapping = !1;
                    continue
                }
                b.snapMode !== "inner" && (e = Math.abs(l - d) <= f, o = Math.abs(v - p) <= f, s = Math.abs(c - k) <= f, h = Math.abs(a - y) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left));
                w = e || o || s || h;
                b.snapMode !== "outer" && (e = Math.abs(l - p) <= f, o = Math.abs(v - d) <= f, s = Math.abs(c - y) <= f, h = Math.abs(a - k) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left));
                !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                }));
                r.snapElements[u].snapping = e || o || s || h || w
            }
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function(t, i, r) {
            var f, e = r.options,
                u = n.makeArray(n(e.stack)).sort(function(t, i) {
                    return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                });
            u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0, n(u).each(function(t) {
                n(this).css("zIndex", f + t)
            }), this.css("zIndex", f + u.length))
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, r) {
            var u = n(i.helper),
                f = r.options;
            u.css("zIndex") && (f._zIndex = u.css("zIndex"));
            u.css("zIndex", f.zIndex)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._zIndex && n(i.helper).css("zIndex", u._zIndex)
        }
    });
    pi = n.ui.draggable;
    /*!
     * jQuery UI Resizable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(n) {
            return parseFloat(n) || 0
        },
        _isNumber: function(n) {
            return !isNaN(parseFloat(n))
        },
        _hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden") return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop",
                u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
        },
        _create: function() {
            var r, t = this.options,
                i = this;
            if (this._addClass("ui-resizable"), n.extend(this, {
                    _aspectRatio: !!t.aspectRatio,
                    aspectRatio: t.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, r = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(r), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(r), this._proportionallyResize()), this._setupHandles(), t.autoHide) n(this.element).on("mouseenter", function() {
                t.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
            }).on("mouseleave", function() {
                t.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
            });
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                n(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function(n, t) {
            this._super(n, t);
            switch (n) {
                case "handles":
                    this._removeHandles();
                    this._setupHandles()
            }
        },
        _setupHandles: function() {
            var u = this.options,
                i, r, f, o, t, e = this;
            if (this.handles = u.handles || (n(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = n(), this.handles.constructor === String)
                for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), f = this.handles.split(","), this.handles = {}, r = 0; r < f.length; r++) i = n.trim(f[r]), o = "ui-resizable-" + i, t = n("<div>"), this._addClass(t, "ui-resizable-handle " + o), t.css({
                    zIndex: u.zIndex
                }), this.handles[i] = ".ui-resizable-" + i, this.element.append(t);
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = n(this.handles[i]), this._on(this.handles[i], {
                    mousedown: e._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() {
                e.resizing || (this.className && (t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), e.axis = t && t[1] ? t[1] : "se")
            });
            u.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(t) {
            var r, i, u = !1;
            for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
            return !this.options.disabled && u
        },
        _mouseStart: function(t) {
            var u, f, e, r = this.options,
                i = this.element;
            return this.resizing = !0, this._renderProxy(), u = this._num(this.helper.css("left")), f = this._num(this.helper.css("top")), r.containment && (u += n(r.containment).scrollLeft() || 0, f += n(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: u,
                top: f
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: i.width(),
                height: i.height()
            }, this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            }, this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            }, this.originalPosition = {
                left: u,
                top: f
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", e === "auto" ? this.axis + "-resize" : e), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var i, r, u = this.originalMousePosition,
                e = this.axis,
                o = t.pageX - u.left || 0,
                s = t.pageY - u.top || 0,
                f = this._change[e];
            return (this._updatePrevProperties(), !f) ? !1 : (i = f.apply(this, [t, o, s]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var r, u, f, e, o, s, h, c = this.options,
                i = this;
            return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                width: i.helper.width() - e,
                height: i.helper.height() - f
            }, s = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                top: h,
                left: s
            })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var n = {};
            return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"), this.helper.css(n), n
        },
        _updateVirtualBoundaries: function(n) {
            var r, u, f, e, t, i = this.options;
            t = {
                minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : Infinity,
                minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio, f = t.minWidth / this.aspectRatio, u = t.maxHeight * this.aspectRatio, e = t.maxWidth / this.aspectRatio, r > t.minWidth && (t.minWidth = r), f > t.minHeight && (t.minHeight = f), u < t.maxWidth && (t.maxWidth = u), e < t.maxHeight && (t.maxHeight = e));
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            this.offset = this.helper.offset();
            this._isNumber(n.left) && (this.position.left = n.left);
            this._isNumber(n.top) && (this.position.top = n.top);
            this._isNumber(n.height) && (this.size.height = n.height);
            this._isNumber(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var t = this.position,
                i = this.size,
                r = this.axis;
            return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), r === "sw" && (n.left = t.left + (i.width - n.width), n.top = null), r === "nw" && (n.top = t.top + (i.height - n.height), n.left = t.left + (i.width - n.width)), n
        },
        _respectSize: function(n) {
            var t = this._vBoundaries,
                i = this.axis,
                r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width,
                u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height,
                f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width,
                e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height,
                o = this.originalPosition.left + this.originalSize.width,
                s = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return f && (n.width = t.minWidth), e && (n.height = t.minHeight), r && (n.width = t.maxWidth), u && (n.height = t.maxHeight), f && h && (n.left = o - t.minWidth), r && h && (n.left = o - t.maxWidth), e && c && (n.top = s - t.minHeight), u && c && (n.top = s - t.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
        },
        _getPaddingPlusBorderDimensions: function(n) {
            for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; t < 4; t++) i[t] = parseFloat(r[t]) || 0, i[t] += parseFloat(u[t]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var n, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) n = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var i = this.originalSize,
                    r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function(n, t, i) {
                var r = this.originalSize,
                    u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).resizable("instance"),
                u = i.options,
                r = i._proportionallyResizeElements,
                f = r.length && /textarea/i.test(r[0].nodeName),
                s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                h = f ? 0 : i.sizeDiff.width,
                c = {
                    width: i.size.width - h,
                    height: i.size.height - s
                },
                e = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var u = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var r, f, e, o, s, h, c, t = n(this).resizable("instance"),
                l = t.options,
                a = t.element,
                u = l.containment,
                i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
            i && (t.containerElement = n(i), /document/.test(u) || u === document ? (t.containerOffset = {
                left: 0,
                top: 0
            }, t.containerPosition = {
                left: 0,
                top: 0
            }, t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (r = n(i), f = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, i) {
                f[n] = t._num(r.css("padding" + i))
            }), t.containerOffset = r.offset(), t.containerPosition = r.position(), t.containerSize = {
                height: r.innerHeight() - f[3],
                width: r.innerWidth() - f[1]
            }, e = t.containerOffset, o = t.containerSize.height, s = t.containerSize.width, h = t._hasScroll(i, "left") ? i.scrollWidth : s, c = t._hasScroll(i) ? i.scrollHeight : o, t.parentData = {
                element: i,
                left: e.left,
                top: e.top,
                width: h,
                height: c
            }))
        },
        resize: function(t) {
            var o, s, h, c, i = n(this).resizable("instance"),
                v = i.options,
                r = i.containerOffset,
                l = i.position,
                f = i._aspectRatio || t.shiftKey,
                e = {
                    top: 0,
                    left: 0
                },
                a = i.containerElement,
                u = !0;
            a[0] !== document && /static/.test(a.css("position")) && (e = r);
            l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left), f && (i.size.height = i.size.width / i.aspectRatio, u = !1), i.position.left = v.helper ? r.left : 0);
            l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio, u = !1), i.position.top = i._helper ? r.top : 0);
            h = i.containerElement.get(0) === i.element.parent().get(0);
            c = /relative|absolute/.test(i.containerElement.css("position"));
            h && c ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top);
            o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
            s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
            o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o, f && (i.size.height = i.size.width / i.aspectRatio, u = !1));
            s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, f && (i.size.width = i.size.height * i.aspectRatio, u = !1));
            u || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height)
        },
        stop: function() {
            var t = n(this).resizable("instance"),
                r = t.options,
                u = t.containerOffset,
                f = t.containerPosition,
                e = t.containerElement,
                i = n(t.helper),
                o = i.offset(),
                s = i.outerWidth() - t.sizeDiff.width,
                h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = n(this).resizable("instance"),
                i = t.options;
            n(i.alsoResize).each(function() {
                var t = n(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        },
        resize: function(t, i) {
            var r = n(this).resizable("instance"),
                e = r.options,
                u = r.originalSize,
                f = r.originalPosition,
                o = {
                    height: r.size.height - u.height || 0,
                    width: r.size.width - u.width || 0,
                    top: r.position.top - f.top || 0,
                    left: r.position.left - f.left || 0
                };
            n(e.alsoResize).each(function() {
                var t = n(this),
                    u = n(this).data("ui-resizable-alsoresize"),
                    r = {},
                    f = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                n.each(f, function(n, t) {
                    var i = (u[t] || 0) + (o[t] || 0);
                    i && i >= 0 && (r[t] = i || null)
                });
                t.css(r)
            })
        },
        stop: function() {
            n(this).removeData("ui-resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).resizable("instance"),
                i = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            });
            t._addClass(t.ghost, "ui-resizable-ghost");
            n.uiBackCompat !== !1 && typeof t.options.ghost == "string" && t.ghost.addClass(this.options.ghost);
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var h, t = n(this).resizable("instance"),
                i = t.options,
                y = t.size,
                o = t.originalSize,
                s = t.originalPosition,
                c = t.axis,
                l = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid,
                f = l[0] || 1,
                e = l[1] || 1,
                a = Math.round((y.width - o.width) / f) * f,
                v = Math.round((y.height - o.height) / e) * e,
                r = o.width + a,
                u = o.height + v,
                p = i.maxWidth && i.maxWidth < r,
                w = i.maxHeight && i.maxHeight < u,
                b = i.minWidth && i.minWidth > r,
                k = i.minHeight && i.minHeight > u;
            i.grid = l;
            b && (r += f);
            k && (u += e);
            p && (r -= f);
            w && (u -= e);
            /^(se|s|e)$/.test(c) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.top = s.top - v) : /^(sw)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.left = s.left - a) : ((u - e <= 0 || r - f <= 0) && (h = t._getPaddingPlusBorderDimensions(this)), u - e > 0 ? (t.size.height = u, t.position.top = s.top - v) : (u = e - h.height, t.size.height = u, t.position.top = s.top + o.height - u), r - f > 0 ? (t.size.width = r, t.position.left = s.left - a) : (r = f - h.width, t.size.width = r, t.position.left = s.left + o.width - r))
        }
    });
    wi = n.ui.resizable;
    /*!
     * jQuery UI Dialog 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    n.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title == null && this.originalTitle != null && (this.options.title = this.originalTitle);
            this.options.disabled && (this.options.disabled = !1);
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var n, t = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function(t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || n.ui.safeBlur(n.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var r = !1,
                f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +n(this).css("z-index")
                }).get(),
                u = Math.max.apply(null, f);
            return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1), r = !0), r && !i && this._trigger("focus", t), r
        },
        open: function() {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0;
            this.opener = n(n.ui.safeActiveElement(this.document[0]));
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, !0);
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable();
                t._trigger("focus")
            });
            this._makeFocusTarget();
            this._trigger("open")
        },
        _focusTabbable: function() {
            var n = this._focusedElement;
            n || (n = this.element.find("[autofocus]"));
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).trigger("focus")
        },
        _keepFocus: function(t) {
            function i() {
                var t = n.ui.safeActiveElement(this.document[0]),
                    i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault();
            i.call(this);
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = n("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                        t.preventDefault();
                        this.close(t);
                        return
                    }
                    if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            r = i.filter(":first"),
                            u = i.filter(":last");
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (this._delay(function() {
                            u.trigger("focus")
                        }), t.preventDefault()) : (this._delay(function() {
                            r.trigger("focus")
                        }), t.preventDefault())
                    }
                },
                mousedown: function(n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = n("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                label: n("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function(n) {
                    n.preventDefault();
                    this.close(n)
                }
            });
            t = n("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(t, "ui-dialog-title");
            this._title(t);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(n) {
            this.options.title ? n.text(this.options.title) : n.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = n("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons()
        },
        _createButtons: function() {
            var i = this,
                t = this.options.buttons;
            if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length) {
                this._removeClass(this.uiDialog, "ui-dialog-buttons");
                return
            }
            n.each(t, function(t, r) {
                var u, f;
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                r = n.extend({
                    type: "button"
                }, r);
                u = r.click;
                f = {
                    icon: r.icon,
                    iconPosition: r.iconPosition,
                    showLabel: r.showLabel,
                    icons: r.icons,
                    text: r.text
                };
                delete r.click;
                delete r.icon;
                delete r.iconPosition;
                delete r.showLabel;
                delete r.icons;
                typeof r.text == "boolean" && delete r.text;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet).on("click", function() {
                    u.apply(i.element[0], arguments)
                })
            });
            this._addClass(this.uiDialog, "ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this,
                r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, u) {
                    t._addClass(n(this), "ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(u, f) {
                    var e = f.offset.left - t.document.scrollLeft(),
                        o = f.offset.top - t.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o,
                        of: t.window
                    };
                    t._removeClass(n(this), "ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function() {
            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            var t = this,
                i = this.options,
                u = i.resizable,
                f = this.uiDialog.css("position"),
                e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(i, u) {
                    t._addClass(n(this), "ui-dialog-resizing");
                    t._blockFrames();
                    t._trigger("resizeStart", i, r(u))
                },
                resize: function(n, i) {
                    t._trigger("resize", n, r(i))
                },
                stop: function(u, f) {
                    var e = t.uiDialog.offset(),
                        o = e.left - t.document.scrollLeft(),
                        s = e.top - t.document.scrollTop();
                    i.height = t.uiDialog.height();
                    i.width = t.uiDialog.width();
                    i.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s,
                        of: t.window
                    };
                    t._removeClass(n(this), "ui-dialog-resizing");
                    t._unblockFrames();
                    t._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget();
                    this._focusedElement = n(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                i = n.inArray(this, t);
            i !== -1 && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var n = this.document.data("ui-dialog-instances");
            return n || (n = [], this.document.data("ui-dialog-instances", n)), n
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function() {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                r = !1,
                u = {};
            n.each(t, function(n, t) {
                i._setOption(n, t);
                n in i.sizeRelatedOptions && (r = !0);
                n in i.resizableRelatedOptions && (u[n] = t)
            });
            r && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u)
        },
        _setOption: function(t, i) {
            var f, u, r = this.uiDialog;
            t !== "disabled" && (this._super(t, i), t === "appendTo" && this.uiDialog.appendTo(this._appendTo()), t === "buttons" && this._createButtons(), t === "closeText" && this.uiDialogTitlebarClose.button({
                label: n("<a>").text("" + this.options.closeText).html()
            }), t === "draggable" && (f = r.is(":data(ui-draggable)"), f && !i && r.draggable("destroy"), !f && i && this._makeDraggable()), t === "position" && this._position(), t === "resizable" && (u = r.is(":data(ui-resizable)"), u && !i && r.resizable("destroy"), u && typeof i == "string" && r.resizable("option", "handles", i), u || i === !1 || this._makeResizable()), t === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, i, r, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
            n.height === "auto" ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(n) {
                        t || this._allowInteraction(n) || (n.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = n("<div>").appendTo(this._appendTo());
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var n = this.document.data("ui-dialog-overlays") - 1;
                n ? this.document.data("ui-dialog-overlays", n) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays"));
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super();
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(n, t) {
            n === "dialogClass" && this.uiDialog.removeClass(this.options.dialogClass).addClass(t);
            this._superApply(arguments)
        }
    });
    bi = n.ui.dialog;
    /*!
     * jQuery UI Droppable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    n.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, i = this.options,
                r = i.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = n.isFunction(r) ? r : function(n) {
                return n.is(r)
            };
            this.proportions = function() {
                if (arguments.length) t = arguments[0];
                else return t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(i.scope);
            i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(t) {
            n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
            n.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(n) {
            for (var t = 0; t < n.length; t++) n[t] === this && n.splice(t, 1)
        },
        _destroy: function() {
            var t = n.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function(t, i) {
            if (t === "accept") this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            };
            else if (t === "scope") {
                var r = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(r);
                this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this._addActiveClass();
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this._removeActiveClass();
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current,
                u = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = n(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && e(r, n.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, t)) return u = !0, !1
            }), u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    e = n.ui.intersect = function() {
        function n(n, t, i) {
            return n >= t && n < t + i
        }
        return function(t, i, r, u) {
            if (!i.offset) return !1;
            var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                s = (t.positionAbs || t.position.absolute).top + t.margins.top,
                h = o + t.helperProportions.width,
                c = s + t.helperProportions.height,
                f = i.offset.left,
                e = i.offset.top,
                l = f + i.proportions().width,
                a = e + i.proportions().height;
            switch (r) {
                case "fit":
                    return f <= o && h <= l && e <= s && c <= a;
                case "intersect":
                    return f < o + t.helperProportions.width / 2 && h - t.helperProportions.width / 2 < l && e < s + t.helperProportions.height / 2 && c - t.helperProportions.height / 2 < a;
                case "pointer":
                    return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
                case "touch":
                    return (s >= e && s <= a || c >= e && c <= a || s < e && c > a) && (o >= f && o <= l || h >= f && h <= l || o < f && h > l);
                default:
                    return !1
            }
        }
    }();
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] === u[r].element[0]) {
                            u[r].proportions().height = 0;
                            continue n
                        }(u[r].visible = u[r].element.css("display") !== "none", u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({
                            width: u[r].element[0].offsetWidth,
                            height: u[r].element[0].offsetHeight
                        }))
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && e(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), r
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").on("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var r, o, f, s = e(t, this, this.options.tolerance, i),
                        u = !s && this.isover ? "isout" : s && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (o = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return n(this).droppable("instance").options.scope === o
                    }), f.length && (r = n(f[0]).droppable("instance"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, i), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").off("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    };
    n.uiBackCompat !== !1 && n.widget("ui.droppable", n.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    ki = n.ui.droppable;
    /*!
     * jQuery UI Progressbar 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    di = n.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = n("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(n) {
            if (n === undefined) return this.options.value;
            this.options.value = this._constrainedValue(n);
            this._refreshValue()
        },
        _constrainedValue: function(n) {
            return n === undefined && (n = this.options.value), this.indeterminate = n === !1, typeof n != "number" && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
        },
        _setOptions: function(n) {
            var t = n.value;
            delete n.value;
            this._super(n);
            this.options.value = this._constrainedValue(t);
            this._refreshValue()
        },
        _setOption: function(n, t) {
            n === "max" && (t = Math.max(this.min, t));
            this._super(n, t)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(i.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
            t === this.options.max && this._trigger("complete")
        }
    });
    /*!
     * jQuery UI Selectable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    gi = n.widget("ui.selectable", n.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t = this;
            this._addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                t.elementPos = n(t.element[0]).offset();
                t.selectees = n(t.options.filter, t.element[0]);
                t._addClass(t.selectees, "ui-selectee");
                t.selectees.each(function() {
                    var i = n(this),
                        u = i.offset(),
                        r = {
                            left: u.left - t.elementPos.left,
                            top: u.top - t.elementPos.top
                        };
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: r.left,
                        top: r.top,
                        right: r.left + i.outerWidth(),
                        bottom: r.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this._mouseInit();
            this.helper = n("<div>");
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this,
                r = this.options;
            (this.opos = [t.pageX, t.pageY], this.elementPos = n(this.element[0]).offset(), this.options.disabled) || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var r = n.data(this, "selectable-item");
                r.startselected = !0;
                t.metaKey || t.ctrlKey || (i._removeClass(r.$element, "ui-selected"), r.selected = !1, i._addClass(r.$element, "ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }), n(t.target).parents().addBack().each(function() {
                var u, r = n.data(this, "selectable-item");
                if (r) return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), i._removeClass(r.$element, u ? "ui-unselecting" : "ui-selected")._addClass(r.$element, u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {
                    selecting: r.element
                }) : i._trigger("unselecting", t, {
                    unselecting: r.element
                }), !1
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var o, i = this,
                    s = this.options,
                    r = this.opos[0],
                    u = this.opos[1],
                    f = t.pageX,
                    e = t.pageY;
                return r > f && (o = f, f = r, r = o), u > e && (o = e, e = u, u = o), this.helper.css({
                    left: r,
                    top: u,
                    width: f - r,
                    height: e - u
                }), this.selectees.each(function() {
                    var o = n.data(this, "selectable-item"),
                        c = !1,
                        h = {};
                    o && o.element !== i.element[0] && (h.left = o.left + i.elementPos.left, h.right = o.right + i.elementPos.left, h.top = o.top + i.elementPos.top, h.bottom = o.bottom + i.elementPos.top, s.tolerance === "touch" ? c = !(h.left > f || h.right < r || h.top > e || h.bottom < u) : s.tolerance === "fit" && (c = h.left > r && h.right < f && h.top > u && h.bottom < e), c ? (o.selected && (i._removeClass(o.$element, "ui-selected"), o.selected = !1), o.unselecting && (i._removeClass(o.$element, "ui-unselecting"), o.unselecting = !1), o.selecting || (i._addClass(o.$element, "ui-selecting"), o.selecting = !0, i._trigger("selecting", t, {
                        selecting: o.element
                    }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (i._removeClass(o.$element, "ui-selecting"), o.selecting = !1, i._addClass(o.$element, "ui-selected"), o.selected = !0) : (i._removeClass(o.$element, "ui-selecting"), o.selecting = !1, o.startselected && (i._addClass(o.$element, "ui-unselecting"), o.unselecting = !0), i._trigger("unselecting", t, {
                        unselecting: o.element
                    }))), o.selected && (t.metaKey || t.ctrlKey || o.startselected || (i._removeClass(o.$element, "ui-selected"), o.selected = !1, i._addClass(o.$element, "ui-unselecting"), o.unselecting = !0, i._trigger("unselecting", t, {
                        unselecting: o.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }), n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-selecting")._addClass(r.$element, "ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    });
    /*!
     * jQuery UI Selectmenu 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    nr = n.widget("ui.selectmenu", [n.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = !1;
            this.menuItems = n()
        },
        _drawButton: function() {
            var t, i = this,
                r = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function(n) {
                    this.button.focus();
                    n.preventDefault()
                }
            });
            this.element.hide();
            this.button = n("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            t = n("<span>").appendTo(this.button);
            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(r).appendTo(this.button);
            this.options.width !== !1 && this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function() {
            var t = this;
            this.menu = n("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = n("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(n, i) {
                    n.preventDefault();
                    t._setSelection();
                    t._select(i.item.data("ui-selectmenu-item"), n)
                },
                focus: function(n, i) {
                    var r = i.item.data("ui-selectmenu-item");
                    t.focusIndex != null && r.index !== t.focusIndex && (t._trigger("focus", n, {
                        item: r
                    }), t.isOpen || t._select(r, n));
                    t.focusIndex = r.index;
                    t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                }
            }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            };
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            this.options.width === null && this._resizeButton()
        },
        _refreshMenu: function() {
            var n, t = this.element.find("option");
            (this.menu.empty(), this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, t.length) && (n = this._getSelectedItem(), this.menuInstance.focus(null, n), this._setAria(n.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(n) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length) && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", n))
        },
        _position: function() {
            this.menuWrap.position(n.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(n) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", n))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(t) {
            var i = n("<span>");
            return this._setText(i, t.label), this._addClass(i, "ui-selectmenu-text"), i
        },
        _renderMenu: function(t, i) {
            var r = this,
                u = "";
            n.each(i, function(i, f) {
                var e;
                f.optgroup !== u && (e = n("<li>", {
                    text: f.optgroup
                }), r._addClass(e, "ui-selectmenu-optgroup", "ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), e.appendTo(t), u = f.optgroup);
                r._renderItemData(t, f)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, i) {
            var r = n("<li>"),
                u = n("<div>", {
                    title: i.element.attr("title")
                });
            return i.disabled && this._addClass(r, null, "ui-state-disabled"), this._setText(u, i.label), r.append(u).appendTo(t)
        },
        _setText: function(n, t) {
            t ? n.text(t) : n.html("&#160;")
        },
        _move: function(n, t) {
            var i, r, u = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), u += ":not(.ui-state-disabled)");
            r = n === "first" || n === "last" ? i[n === "first" ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
            r.length && this.menuInstance.focus(t, r)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(n) {
            this[this.isOpen ? "close" : "open"](n)
        },
        _setSelection: function() {
            var n;
            this.range && (window.getSelection ? (n = window.getSelection(), n.removeAllRanges(), n.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + n.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var n;
                window.getSelection ? (n = window.getSelection(), n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(n) {
                this._setSelection();
                this._toggle(n)
            },
            keydown: function(t) {
                var i = !0;
                switch (t.keyCode) {
                    case n.ui.keyCode.TAB:
                    case n.ui.keyCode.ESCAPE:
                        this.close(t);
                        i = !1;
                        break;
                    case n.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case n.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case n.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case n.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case n.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case n.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t);
                        i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function(n) {
            var t = this.menuItems.eq(this.focusIndex).parent("li");
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n)
        },
        _select: function(n, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = n.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(n));
            this._setAria(n);
            this._trigger("select", t, {
                item: n
            });
            n.index !== i && this._trigger("change", t, {
                item: n
            });
            this.close(t)
        },
        _setAria: function(n) {
            var t = this.menuItems.eq(n.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            });
            this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(n, t) {
            if (n === "icons") {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)
            }
            this._super(n, t);
            n === "appendTo" && this.menuWrap.appendTo(this._appendTo());
            n === "width" && this._resizeButton()
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.menuInstance.option("disabled", n);
            this.button.attr("aria-disabled", n);
            this._toggleClass(this.button, null, "ui-state-disabled", n);
            this.element.prop("disabled", n);
            n ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var n = this.options.width;
            if (n === !1) {
                this.button.css("width", "");
                return
            }
            n === null && (n = this.element.show().outerWidth(), this.element.hide());
            this.button.outerWidth(n)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var n = this._super();
            return n.disabled = this.element.prop("disabled"), n
        },
        _parseOptions: function(t) {
            var r = this,
                i = [];
            t.each(function(t, u) {
                i.push(r._parseOption(n(u), t))
            });
            this.items = i
        },
        _parseOption: function(n, t) {
            var i = n.parent("optgroup");
            return {
                element: n,
                index: t,
                value: n.val(),
                label: n.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || n.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element)
        }
    }]);
    /*!
     * jQuery UI Slider 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    tr = n.widget("ui.slider", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var r, i, u = this.options,
                t = this.element.find(".ui-slider-handle"),
                f = [];
            for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; r < i; r++) f.push("<span tabindex='0'><\/span>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(t) {
                n(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var t = this.options;
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = n("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), (t.range === "min" || t.range === "max") && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var s, f, r, i, u, h, e, c, o = this,
                l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), s = {
                x: t.pageX,
                y: t.pageY
            }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var e = Math.abs(f - o.values(t));
                (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
            }), h = this._start(t, u), h === !1) ? !1 : (this._mouseSliding = !0, this._handleIndex = u, this._addClass(i, null, "ui-state-active"), i.trigger("focus"), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - e.left - i.width() / 2,
                top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0)
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(n) {
            var t = {
                    x: n.pageX,
                    y: n.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i), !1
        },
        _mouseStop: function(n) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
        },
        _uiHash: function(n, t, i) {
            var r = {
                handle: this.handles[n],
                handleIndex: n,
                value: t !== undefined ? t : this.value()
            };
            return this._hasMultipleValues() && (r.value = t !== undefined ? t : this.values(n), r.values = i || this.values()), r
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(n, t) {
            return this._trigger("start", n, this._uiHash(t))
        },
        _slide: function(n, t, i) {
            var u, r, f = this.value(),
                e = this.values();
            (this._hasMultipleValues() && (r = this.values(t ? 0 : 1), f = this.values(t), this.options.values.length === 2 && this.options.range === !0 && (i = t === 0 ? Math.min(r, i) : Math.max(r, i)), e[t] = i), i !== f) && (u = this._trigger("slide", n, this._uiHash(t, i, e)), u !== !1) && (this._hasMultipleValues() ? this.values(t, i) : this.value(i))
        },
        _stop: function(n, t) {
            this._trigger("stop", n, this._uiHash(t))
        },
        _change: function(n, t) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", n, this._uiHash(t)))
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i);
                this._refreshValue();
                this._change(null, t);
                return
            }
            if (arguments.length)
                if (n.isArray(arguments[0])) {
                    for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                    this._refreshValue()
                } else return this._hasMultipleValues() ? this._values(t) : this.value();
            else return this._values()
        },
        _setOption: function(t, i) {
            var r, u = 0;
            t === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0), this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
            n.isArray(this.options.values) && (u = this.options.values.length);
            this._super(t, i);
            switch (t) {
                case "orientation":
                    this._detectOrientation();
                    this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.options.range && this._refreshRange(i);
                    this.handles.css(i === "horizontal" ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), r = u - 1; r >= 0; r--) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0;
                    this._refresh();
                    this._animateOff = !1
            }
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        _value: function() {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length) return r = this.options.values[n], this._trimAlignValue(r);
            if (this._hasMultipleValues()) {
                for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin()) return this._valueMin();
            if (n >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (n - this._valueMin()) % t,
                r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _calculateNewMax: function() {
            var n = this.options.max,
                i = this._valueMin(),
                t = this.options.step,
                r = Math.round((n - i) / t) * t;
            n = r + i;
            n > this.options.max && (n -= t);
            this.max = parseFloat(n.toFixed(this._precision()))
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
        },
        _precisionOf: function(n) {
            var t = n.toString(),
                i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(n) {
            n === "vertical" && this.range.css({
                width: "",
                left: ""
            });
            n === "horizontal" && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var s, t, c, f, h, e = this.options.range,
                i = this.options,
                r = this,
                u = this._animateOff ? !1 : i.animate,
                o = {};
            this._hasMultipleValues() ? this.handles.each(function(f) {
                t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })));
                s = t
            }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, i.animate), e === "max" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, i.animate), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, i.animate), e === "max" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, i.animate))
        },
        _handleEvents: {
            keydown: function(t) {
                var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(n(t.target), null, "ui-state-active"), e = this._start(t, f), e === !1)) return
                }
                u = this.options.step;
                r = this._hasMultipleValues() ? i = this.values(f) : i = this.value();
                switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (r === this._valueMax()) return;
                        i = this._trimAlignValue(r + u);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (r === this._valueMin()) return;
                        i = this._trimAlignValue(r - u)
                }
                this._slide(t, f, i)
            },
            keyup: function(t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), this._removeClass(n(t.target), null, "ui-state-active"))
            }
        }
    });
    /*!
     * jQuery UI Sortable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ir = n.widget("ui.sortable", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(n, t, i) {
            return n >= t && n < t + i
        },
        _isFloating: function(n) {
            return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
        },
        _create: function() {
            this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "handle" && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            n.each(this.items, function() {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, i) {
            var r = null,
                f = !1,
                u = this;
            return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() {
                if (n.data(this, u.widgetName + "-item") === u) return r = n(this), !1
            }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function() {
                this === t.target && (f = !0)
            }), !f) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
        },
        _mouseStart: function(t, i, r) {
            var f, e, u = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, n.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && u.cursor !== "auto" && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var e, u, f, o, i = this.options,
                r = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - this.document.scrollTop() < i.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - i.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < i.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + i.scrollSpeed)), t.pageX - this.document.scrollLeft() < i.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - i.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < i.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                if ((u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o) && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[o === 1 ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], f) : !0)) {
                    if (this.direction = o === 1 ? "down" : "up", this.options.tolerance === "pointer" || this._intersectsWithSides(u)) this._rearrange(t, u);
                    else break;
                    this._trigger("change", t, this._uiHash());
                    break
                } return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                    var e = this,
                        f = this.placeholder.offset(),
                        r = this.options.axis,
                        u = {};
                    r && r !== "x" || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    r && r !== "y" || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                        e._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new n.Event("mouseup", {
                    target: null
                }));
                this.options.helper === "original" ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }), !i.length && t.key && i.push(t.key + "="), i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left,
                h = t + this.helperProportions.width,
                i = this.positionAbs.top,
                c = i + this.helperProportions.height,
                r = n.left,
                f = r + n.width,
                u = n.top,
                e = u + n.height,
                o = this.offset.click.top,
                s = this.offset.click.left,
                l = this.options.axis === "x" || i + o > u && i + o < e,
                a = this.options.axis === "y" || t + s > r && t + s < f,
                v = l && a;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function(n) {
            var t, i, r = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                u = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                f = r && u;
            return f ? (t = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? i === "right" || t === "down" ? 2 : 1 : t && (t === "down" ? 2 : 1)) : !1
        },
        _intersectsWithSides: function(n) {
            var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                t = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection();
            return this.floating && i ? i === "right" && u || i === "left" && !u : t && (t === "down" && r || t === "up" && !r)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n !== 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n !== 0 && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function h() {
                s.push(this)
            }
            var r, u, e, i, s = [],
                f = [],
                o = this._connectWith();
            if (o && t)
                for (r = o.length - 1; r >= 0; r--)
                    for (e = n(o[r], this.document[0]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(h);
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = n.grep(this.items, function(n) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === n.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [];
            this.containers = [this];
            var r, u, e, i, o, s, h, l, a = this.items,
                f = [
                    [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : n(this.options.items, this.element), this]
                ],
                c = this._connectWith();
            if (c && this.ready)
                for (r = c.length - 1; r >= 0; r--)
                    for (e = n(c[r], this.document[0]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                        item: this.currentItem
                    }) : n(i.options.items, i.element), i]), this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (o = f[r][1], s = f[r][0], u = 0, l = s.length; u < l; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                    item: h,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var r, f, u, i = this.items.length - 1; i >= 0; i--)(r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var r, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                element: function() {
                    var u = t.currentItem[0].nodeName.toLowerCase(),
                        i = n("<" + u + ">", t.document[0]);
                    return t._addClass(i, "ui-sortable-placeholder", r || t.currentItem[0].className)._removeClass(i, "ui-sortable-helper"), u === "tbody" ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), n("<tr>", t.document[0]).appendTo(i)) : u === "tr" ? t._createTrPlaceholder(t.currentItem, i) : u === "img" && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                },
                update: function(n, u) {
                    (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
            t.currentItem.after(t.placeholder);
            i.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function(t, i) {
            var r = this;
            t.children().each(function() {
                n("<td>&#160;<\/td>", r.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(t) {
            for (var u, c, f, a, v, o, l, s, h, e = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                if (!n.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (e && n.contains(this.containers[r].element[0], e.element[0])) continue;
                        e = this.containers[r];
                        i = r
                    } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
            if (e)
                if (this.containers.length === 1) this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1);
                else {
                    for (c = 1e4, f = null, s = e.floating || this._isFloating(this.currentItem), a = s ? "left" : "top", v = s ? "width" : "height", h = s ? "pageX" : "pageY", u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a], l = !1, t[h] - o > this.items[u][v] / 2 && (l = !0), Math.abs(t[h] - o) < c && (c = Math.abs(t[h] - o), f = this.items[u], this.direction = l ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[i]) {
                        this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1);
                        return
                    }
                    f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                    this._trigger("change", t, this._uiHash());
                    this.containers[i]._trigger("change", t, this._uiHash(this));
                    this.currentContainer = this.containers[i];
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[i]._trigger("over", t, this._uiHash(this));
                    this.containers[i].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo !== "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, r, u, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            (i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, i.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
            /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = n(t).css("overflow") !== "hidden", this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1,
                u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var r, u, i = this.options,
                f = t.pageX,
                e = t.pageY,
                o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                s = /(html|body)/i.test(o[0].tagName);
            return this.cssPosition !== "relative" || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var u = this.counter;
            this._delay(function() {
                u === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(n, t) {
            function u(n, t, i) {
                return function(r) {
                    i._trigger(n, r, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(n) {
                    this._trigger("receive", n, this._uiHash(this.fromOutside))
                }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(n) {
                    this._trigger("update", n, this._uiHash())
                }), this !== this.currentContainer && (t || (r.push(function(n) {
                    this._trigger("remove", n, this._uiHash())
                }), r.push(function(n) {
                    return function(t) {
                        n._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), r.push(function(n) {
                    return function(t) {
                        n._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                for (i = 0; i < r.length; i++) r[i].call(this, n);
                this._trigger("stop", n, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    });
    /*!
     * jQuery UI Spinner 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    n.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this.value() !== "" && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = this._super(),
                i = this.element;
            return n.each(["min", "max", "step"], function(n, r) {
                var u = i.attr(r);
                u != null && u.length && (t[r] = u)
            }), t
        },
        _events: {
            keydown: function(n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(n) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                this.previous !== this.element.val() && this._trigger("change", n)
            },
            mousewheel: function(n, t) {
                if (t) {
                    if (!this.spinning && !this._start(n)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(n)
                    }, 100);
                    n.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var t = this.element[0] === n.ui.safeActiveElement(this.document[0]);
                    t || (this.element.trigger("focus"), this.previous = i, this._delay(function() {
                        this.previous = i
                    }))
                }
                var i;
                (i = this.element[0] === n.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur;
                    r.call(this)
                }), this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (n(t.currentTarget).hasClass("ui-state-active")) {
                    if (this._start(t) === !1) return !1;
                    this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a><\/a><a><\/a>")
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            });
            this.buttons.height() > Math.ceil(this.uiSpinner.height() * .5) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(t) {
            var r = this.options,
                i = n.ui.keyCode;
            switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t), !0;
                case i.DOWN:
                    return this._repeat(null, -1, t), !0;
                case i.PAGE_UP:
                    return this._repeat(null, r.page, t), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -r.page, t), !0
            }
            return !1
        },
        _start: function(n) {
            return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(n, t, i) {
            n = n || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, t, i)
            }, n);
            this._spin(t * this.options.step, i)
        },
        _spin: function(n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1);
            i = this._adjustValue(i + n * this._increment(this.counter));
            this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
        },
        _precisionOf: function(n) {
            var t = n.toString(),
                i = t.indexOf(".");
            return i === -1 ? 0 : t.length - i - 1
        },
        _adjustValue: function(n) {
            var r, i, t = this.options;
            return (r = t.min !== null ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), t.max !== null && n > t.max) ? t.max : t.min !== null && n < t.min ? t.min : n
        },
        _stop: function(n) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
        },
        _setOption: function(n, t) {
            var u, i, r;
            if (n === "culture" || n === "numberFormat") {
                u = this._parse(this.element.val());
                this.options[n] = t;
                this.element.val(this._format(u));
                return
            }(n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t));
            n === "icons" && (i = this.buttons.first().find(".ui-icon"), this._removeClass(i, null, this.options.icons.up), this._addClass(i, null, t.up), r = this.buttons.last().find(".ui-icon"), this._removeClass(r, null, this.options.icons.down), this._addClass(r, null, t.down));
            this._super(n, t)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!n);
            this.element.prop("disabled", !!n);
            this.buttons.button(n ? "disable" : "enable")
        },
        _setOptions: i(function(n) {
            this._super(n)
        }),
        _parse: function(n) {
            return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), n === "" || isNaN(n) ? null : n
        },
        _format: function(n) {
            return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var n = this.value();
            return n === null ? !1 : n === this._adjustValue(n)
        },
        _value: function(n, t) {
            var i;
            n !== "" && (i = this._parse(n), i !== null && (t || (i = this._adjustValue(i)), n = this._format(i)));
            this.element.val(n);
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: i(function(n) {
            this._stepUp(n)
        }),
        _stepUp: function(n) {
            this._start() && (this._spin((n || 1) * this.options.step), this._stop())
        },
        stepDown: i(function(n) {
            this._stepDown(n)
        }),
        _stepDown: function(n) {
            this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
        },
        pageUp: i(function(n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: i(function(n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function(n) {
            if (!arguments.length) return this._parse(this.element.val());
            i(this._value).call(this, n)
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.spinner", n.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a><\/a><a><\/a>"
        }
    });
    rr = n.ui.spinner;
    /*!
     * jQuery UI Tabs 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    n.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var n = /#.*$/;
            return function(t) {
                var i, r;
                i = t.href.replace(n, "");
                r = location.href.replace(n, "");
                try {
                    i = decodeURIComponent(i)
                } catch (u) {}
                try {
                    r = decodeURIComponent(r)
                } catch (u) {}
                return t.hash.length > 1 && i === r
            }
        }(),
        _create: function() {
            var i = this,
                t = this.options;
            this.running = !1;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, t.collapsible);
            this._processTabs();
            t.active = this._initialActive();
            n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                return i.tabs.index(n)
            }))).sort());
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
            this._refresh();
            this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                i = this.options.collapsible,
                r = location.hash.substring(1);
            return t === null && (r && this.tabs.each(function(i, u) {
                if (n(u).attr("aria-controls") === r) return t = i, !1
            }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : n()
            }
        },
        _tabKeydown: function(t) {
            var r = n(n.ui.safeActiveElement(this.document[0])).closest("li"),
                i = this.tabs.index(r),
                u = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                        i++;
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.LEFT:
                        u = !1;
                        i--;
                        break;
                    case n.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case n.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case n.ui.keyCode.SPACE:
                        t.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(i);
                        return;
                    case n.ui.keyCode.ENTER:
                        t.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(i === this.options.active ? !1 : i);
                        return;
                    default:
                        return
                }
                t.preventDefault();
                clearTimeout(this.activating);
                i = this._focusNextTab(i, u);
                t.ctrlKey || t.metaKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, i) {
            function u() {
                return t > r && (t = 0), t < 0 && (t = r), t
            }
            for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1;) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(n, t) {
            return n = this._findNextTab(n, t), this.tabs.eq(n).trigger("focus"), n
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            this._super(n, t);
            n === "collapsible" && (this._toggleClass("ui-tabs-collapsible", null, t), t || this.options.active !== !1 || this._activate(0));
            n === "event" && this._setupEvents(t);
            n === "heightStyle" && this._setupHeightStyle(t)
        },
        _sanitizeSelector: function(n) {
            return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                return i.index(n)
            });
            this._processTabs();
            t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this,
                i = this.tabs,
                r = this.anchors,
                u = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                n(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                n(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() {
                return n("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = n();
            this.anchors.each(function(i, r) {
                var f, u, e, s = n(r).uniqueId().attr("id"),
                    o = n(r).closest("li"),
                    h = o.attr("aria-controls");
                t._isLocal(r) ? (f = r.hash, e = f.substring(1), u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id, f = "#" + e, u = t.element.find(f), u.length || (u = t._createPanel(e), u.insertAfter(t.panels[i - 1] || t.tablist)), u.attr("aria-live", "polite"));
                u.length && (t.panels = t.panels.add(u));
                h && o.data("ui-tabs-aria-controls", h);
                o.attr({
                    "aria-controls": e,
                    "aria-labelledby": s
                });
                u.attr("aria-labelledby", s)
            });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
            i && (this._off(i.not(this.tabs)), this._off(r.not(this.anchors)), this._off(u.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return n("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var i, u, r;
            for (n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), r = 0; u = this.tabs[r]; r++) i = n(u), t === !0 || n.inArray(r, t) !== -1 ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0)
        },
        _setupEvents: function(t) {
            var i = {};
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(n) {
                    n.preventDefault()
                }
            });
            this._on(this.anchors, i);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, r = this.element.parent();
            t === "fill" ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = n(this),
                    r = t.css("position");
                r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= n(this).outerHeight(!0)
            }), this.panels.each(function() {
                n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (i = 0, this.panels.each(function() {
                i = Math.max(i, n(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var u = this.options,
                r = this.active,
                c = n(t.currentTarget),
                i = c.closest("li"),
                f = i[0] === r[0],
                e = f && u.collapsible,
                o = e ? n() : this._getPanelForTab(i),
                s = r.length ? this._getPanelForTab(r) : n(),
                h = {
                    oldTab: r,
                    oldPanel: s,
                    newTab: e ? n() : i,
                    newPanel: o
                };
            (t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
        },
        _toggle: function(t, i) {
            function e() {
                r.running = !1;
                r._trigger("activate", t, i)
            }

            function o() {
                r._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                u.length && r.options.show ? r._show(u, r.options.show, e) : (u.show(), e())
            }
            var r = this,
                u = i.newPanel,
                f = i.oldPanel;
            this.running = !0;
            f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                r._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                o()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), f.hide(), o());
            f.attr("aria-hidden", "true");
            i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            u.length && f.length ? i.oldTab.attr("tabIndex", -1) : u.length && this.tabs.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1);
            u.attr("aria-hidden", "false");
            i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: r,
                currentTarget: r,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? n() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return typeof t == "string" && (t = this.anchors.index(this.anchors.filter("[href$='" + n.ui.escapeSelector(t) + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            });
            this.tabs.each(function() {
                var t = n(this),
                    i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            });
            this.panels.show();
            this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(t) {
            var i = this.options.disabled;
            i !== !1 && (t === undefined ? i = !1 : (t = this._getIndex(t), i = n.isArray(i) ? n.map(i, function(n) {
                return n !== t ? n : null
            }) : n.map(this.tabs, function(n, i) {
                return i !== t ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function(t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (t === undefined) i = !0;
                else {
                    if (t = this._getIndex(t), n.inArray(t, i) !== -1) return;
                    i = n.isArray(i) ? n.merge([t], i).sort() : [t]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var r = this,
                u = this.tabs.eq(t),
                e = u.find(".ui-tabs-anchor"),
                f = this._getPanelForTab(u),
                o = {
                    tab: u,
                    panel: f
                },
                s = function(n, t) {
                    t === "abort" && r.panels.stop(!1, !0);
                    r._removeClass(u, "ui-tabs-loading");
                    f.removeAttr("aria-busy");
                    n === r.xhr && delete r.xhr
                };
            this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)), this.xhr && this.xhr.statusText !== "canceled" && (this._addClass(u, "ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.done(function(n, t, u) {
                setTimeout(function() {
                    f.html(n);
                    r._trigger("load", i, o);
                    s(u, t)
                }, 1)
            }).fail(function(n, t) {
                setTimeout(function() {
                    s(n, t)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, r) {
            var u = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, f) {
                    return u._trigger("beforeLoad", i, n.extend({
                        jqXHR: t,
                        ajaxSettings: f
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = n(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.tabs", n.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments);
            this._addClass(this.tabs, "ui-tab")
        }
    });
    ur = n.ui.tabs;
    /*!
     * jQuery UI Tooltip 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    n.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var t = n(this).attr("title") || "";
                return n("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, i) {
            var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(i);
            t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var u = t.data("ui-tooltip-id"),
                i = (t.attr("aria-describedby") || "").split(/\s+/),
                r = n.inArray(u, i);
            r !== -1 && i.splice(r, 1);
            t.removeData("ui-tooltip-id");
            i = n.trim(i.join(" "));
            i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = n("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = n([])
        },
        _setOption: function(t, i) {
            var r = this;
            this._super(t, i);
            t === "content" && n.each(this.tooltips, function(n, t) {
                r._updateContent(t.element)
            })
        },
        _setOptionDisabled: function(n) {
            this[n ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r.element[0];
                t.close(u, !0)
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var t = n(this);
                if (t.is("[title]")) return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            });
            this.disabledTitles = n([])
        },
        open: function(t) {
            var r = this,
                i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && t.type === "mouseover" && i.parents().each(function() {
                var t = n(this),
                    i;
                t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                }, t.attr("title", ""))
            }), this._registerCloseHandlers(t, i), this._updateContent(i, t))
        },
        _updateContent: function(n, t) {
            var r, i = this.options.content,
                u = this,
                f = t ? t.type : null;
            if (typeof i == "string" || i.nodeType || i.jquery) return this._open(t, n, i);
            r = i.call(n[0], function(i) {
                u._delay(function() {
                    n.data("ui-tooltip-open") && (t && (t.type = f), this._open(t, n, i))
                })
            });
            r && this._open(t, n, r)
        },
        _open: function(t, i, r) {
            function s(n) {
                (o.of = n, u.is(":hidden")) || u.position(o)
            }
            var f, u, h, e, o = n.extend({}, this.options.position);
            if (r) {
                if (f = this._find(i), f) {
                    f.tooltip.find(".ui-tooltip-content").html(r);
                    return
                }
                i.is("[title]") && (t && t.type === "mouseover" ? i.attr("title", "") : i.removeAttr("title"));
                f = this._tooltip(i);
                u = f.tooltip;
                this._addDescribedBy(i, u.attr("id"));
                u.find(".ui-tooltip-content").html(r);
                this.liveRegion.children().hide();
                e = n("<div>").html(u.find(".ui-tooltip-content").html());
                e.removeAttr("name").find("[name]").removeAttr("name");
                e.removeAttr("id").find("[id]").removeAttr("id");
                e.appendTo(this.liveRegion);
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: s
                }), s(t)) : u.position(n.extend({
                    of: i
                }, this.options.position));
                u.hide();
                this._show(u, this.options.show);
                this.options.track && this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    u.is(":visible") && (s(o.of), clearInterval(h))
                }, n.fx.interval));
                this._trigger("open", t, {
                    tooltip: u
                })
            }
        },
        _registerCloseHandlers: function(t, i) {
            var r = {
                keyup: function(t) {
                    if (t.keyCode === n.ui.keyCode.ESCAPE) {
                        var r = n.Event(t);
                        r.currentTarget = i[0];
                        this.close(r, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (r.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            });
            t && t.type !== "mouseover" || (r.mouseleave = "close");
            t && t.type !== "focusin" || (r.focusout = "close");
            this._on(!0, i, r)
        },
        close: function(t) {
            var u, f = this,
                i = n(t ? t.currentTarget : this.element),
                r = this._find(i);
            if (!r) {
                i.removeData("ui-tooltip-open");
                return
            }(u = r.tooltip, r.closing) || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")), this._removeDescribedBy(i), r.hiding = !0, u.stop(!0), this._hide(u, this.options.hide, function() {
                f._removeTooltip(n(this))
            }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && n.each(this.parents, function(t, i) {
                n(i.element).attr("title", i.title);
                delete f.parents[t]
            }), r.closing = !0, this._trigger("close", t, {
                tooltip: u
            }), r.hiding || (r.closing = !1))
        },
        _tooltip: function(t) {
            var i = n("<div>").attr("role", "tooltip"),
                r = n("<div>").appendTo(i),
                u = i.uniqueId().attr("id");
            return this._addClass(r, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(t)), this.tooltips[u] = {
                element: t,
                tooltip: i
            }
        },
        _find: function(n) {
            var t = n.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(n) {
            n.remove();
            delete this.tooltips[n.attr("id")]
        },
        _appendTo: function(n) {
            var t = n.closest(".ui-front, dialog");
            return t.length || (t = this.document[0].body), t
        },
        _destroy: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var f = n.Event("blur"),
                    u = r.element;
                f.target = f.currentTarget = u[0];
                t.close(f, !0);
                n("#" + i).remove();
                u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")), u.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.tooltip", n.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var n = this._superApply(arguments);
            return this.options.tooltipClass && n.tooltip.addClass(this.options.tooltipClass), n
        }
    });
    fr = n.ui.tooltip
});
new function() {
    var h = {
            browser: function() {
                return n.browser
            },
            version: {
                number: function() {
                    return n.version.number
                },
                string: function() {
                    return n.version.string
                }
            },
            OS: function() {
                return n.OS
            },
            aol: function() {
                return n.aol
            },
            camino: function() {
                return n.camino
            },
            firefox: function() {
                return n.firefox
            },
            flock: function() {
                return n.flock
            },
            icab: function() {
                return n.icab
            },
            konqueror: function() {
                return n.konqueror
            },
            mozilla: function() {
                return n.mozilla
            },
            msie: function() {
                return n.msie
            },
            netscape: function() {
                return n.netscape
            },
            opera: function() {
                return n.opera
            },
            safari: function() {
                return n.safari
            },
            linux: function() {
                return n.linux
            },
            mac: function() {
                return n.mac
            },
            win: function() {
                return n.win
            }
        },
        n, u, s, e;
    $.browser = h;
    n = {
        browser: "Unknown",
        version: {
            number: undefined,
            string: "Unknown"
        },
        OS: "Unknown",
        aol: !1,
        camino: !1,
        firefox: !1,
        flock: !1,
        icab: !1,
        konqueror: !1,
        mozilla: !1,
        msie: !1,
        netscape: !1,
        opera: !1,
        safari: !1,
        linux: !1,
        mac: !1,
        win: !1
    };
    for (var t = 0, r = navigator.userAgent, f = navigator.vendor, i = [{
            name: "Safari",
            browser: function() {
                return /Apple/.test(f)
            }
        }, {
            name: "Opera",
            browser: function() {
                return window.opera != undefined
            }
        }, {
            name: "iCab",
            browser: function() {
                return /iCab/.test(f)
            }
        }, {
            name: "Konqueror",
            browser: function() {
                return /KDE/.test(f)
            }
        }, {
            identifier: "aol",
            name: "AOL Explorer",
            browser: function() {
                return /America Online Browser/.test(r)
            },
            version: function() {
                return r.match(/rev(\d+(?:\.\d+)+)/)
            }
        }, {
            name: "Flock",
            browser: function() {
                return /Flock/.test(r)
            }
        }, {
            name: "Camino",
            browser: function() {
                return /Camino/.test(f)
            }
        }, {
            name: "Firefox",
            browser: function() {
                return /Firefox/.test(r)
            }
        }, {
            name: "Netscape",
            browser: function() {
                return /Netscape/.test(r)
            }
        }, {
            identifier: "msie",
            name: "Internet Explorer",
            browser: function() {
                return /MSIE/.test(r)
            },
            version: function() {
                return r.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/)
            }
        }, {
            name: "Mozilla",
            browser: function() {
                return /Gecko|Mozilla/.test(r)
            },
            version: function() {
                return r.match(/rv:(\d+(?:\.\d+)+)/)
            }
        }]; t < i.length; t++)
        if (i[t].browser()) {
            e = i[t].identifier ? i[t].identifier : i[t].name.toLowerCase();
            n[e] = !0;
            n.browser = i[t].name;
            i[t].version != undefined && (u = i[t].version()) ? (n.version.string = u[1], n.version.number = parseFloat(u[1])) : (s = new RegExp(i[t].name + "(?:\\s|\\/)(\\d+(?:\\.\\d+)+(?:(?:a|b)\\d*)?)"), u = r.match(s), u != undefined && (n.version.string = u[1], n.version.number = parseFloat(u[1])));
            break
        } for (var t = 0, o = navigator.platform, i = [{
            identifier: "win",
            name: "Windows",
            OS: function() {
                return /Win/.test(o)
            }
        }, {
            name: "Mac",
            OS: function() {
                return /Mac/.test(o)
            }
        }, {
            name: "Linux",
            OS: function() {
                return /Linux/.test(o)
            }
        }]; t < i.length; t++)
        if (i[t].OS()) {
            e = i[t].identifier ? i[t].identifier : i[t].name.toLowerCase();
            n[e] = !0;
            n.OS = i[t].name;
            break
        }
};
/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
})(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                return
            }
            var i = n.data(this[0], "validator");
            if (i) return i;
            if (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit) {
                this.on("click.validate", ":submit", function(t) {
                    i.settings.submitHandler && (i.submitButton = t.target);
                    n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                    n(this).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
                });
                this.on("submit.validate", function(t) {
                    function r() {
                        var u, r;
                        return i.settings.submitHandler ? (i.submitButton && (u = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && u.remove(), r !== undefined) ? r : !1 : !0
                    }
                    return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
                })
            }
            return i
        },
        valid: function() {
            var t, i, r;
            return n(this[0]).is("form") ? t = this.validate().form() : (r = [], t = !0, i = n(this[0].form).validate(), this.each(function() {
                t = i.element(this) && t;
                r = r.concat(i.errorList)
            }), i.errorList = r), t
        },
        rules: function(t, i) {
            var r = this[0],
                e, s, f, u, o, h;
            if (t) {
                e = n.data(r.form, "validator").settings;
                s = e.rules;
                f = n.validator.staticRules(r);
                switch (t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (h = {}, n.each(i.split(/\s/), function(t, i) {
                            h[i] = f[i];
                            delete f[i];
                            i === "required" && n(r).removeAttr("aria-required")
                        }), h) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (o = u.required, delete u.required, u = n.extend({
                required: o
            }, u), n(r).attr("aria-required", "true")), u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {
                remote: o
            })), u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function(t, i) {
        return arguments.length === 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(t, i) {
                (i.which !== 9 || this.elementValue(t) !== "") && n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) === -1 && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var r = n.data(this.form, "validator"),
                        u = "on" + t.type.replace(/^validate/, ""),
                        i = r.settings;
                    i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var r = this.groups = {},
                    t;
                n.each(this.settings.groups, function(t, i) {
                    typeof i == "string" && (i = i.split(/\s/));
                    n.each(i, function(n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                if (this.settings.invalidHandler) n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var u = this.clean(t),
                    i = this.validationTargetFor(u),
                    r = !0;
                return this.lastElement = i, i === undefined ? delete this.invalid[u.name] : (this.prepareElement(i), this.currentElements = n(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), n(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                var t, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (t = 0; i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, "");
                else i.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0;
                for (var i in n) t++;
                return t
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text("");
                this.addWrapper(n).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, u = n(t),
                    r = t.type;
                return r === "radio" || r === "checkbox" ? this.findByName(t.name).filter(":checked").val() : r === "number" && typeof t.validity != "undefined" ? t.validity.badInput ? !1 : u.val() : (i = u.val(), typeof i == "string") ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var r = n(t).rules(),
                    s = n.map(r, function(n, t) {
                        return t
                    }).length,
                    o = !1,
                    h = this.elementValue(t),
                    u, f, i;
                for (f in r) {
                    i = {
                        method: f,
                        parameters: r[f]
                    };
                    try {
                        if (u = n.validator.methods[f].call(this, h, t, i.parameters), u === "dependency-mismatch" && s === 1) {
                            o = !0;
                            continue
                        }
                        if (o = !1, u === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!u) return this.formatAndAdd(t, i), !1
                    } catch (e) {
                        this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e);
                        e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.");
                        throw e;
                    }
                }
                if (!o) return this.objectLength(r) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined) return arguments[n];
                return undefined
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t,
                    method: i.method
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, o, e, r = this.errorsFor(t),
                    s = this.idOrName(t),
                    f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(i || ""), u = r, this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, n(t)) : u.insertAfter(t), r.is("label") ? r.attr("for", s) : r.parents("label[for='" + s + "']").length === 0 && (e = r.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), f ? f.match(new RegExp("\\b" + e + "\\b")) || (f += " " + e) : f = e, n(t).attr("aria-describedby", f), o = this.groups[t.name], o && n.each(this.groups, function(t, i) {
                    i === o && n("[name='" + t + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                })));
                !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.idOrName(t),
                    u = n(t).attr("aria-describedby"),
                    i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + u.replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), n(t).not(this.settings.ignore)[0]
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            },
            destroy: function() {
                this.resetForm();
                n(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function(n, t, i, r) {
            /min|max/.test(i) && (t === null || /number|range|text/.test(t)) && (r = Number(r), isNaN(r) && (r = undefined));
            r || r === 0 ? n[i] = r : t === i && t !== "range" && (n[i] = !0)
        },
        attributeRules: function(t) {
            var r = {},
                f = n(t),
                e = t.getAttribute("type"),
                u, i;
            for (u in n.validator.methods) u === "required" ? (i = t.getAttribute(u), i === "" && (i = !0), i = !!i) : i = f.attr(u), this.normalizeAttributeRule(r, e, u, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(t) {
            var r = {},
                f = n(t),
                e = t.getAttribute("type"),
                i, u;
            for (i in n.validator.methods) u = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, e, i, u);
            return r
        },
        staticRules: function(t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min != null && t.max != null && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength != null && t.maxlength != null && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var f = 0,
                    i = 0,
                    u = !1,
                    r, e;
                if (n = n.replace(/\D/g, ""), n.length < 13 || n.length > 19) return !1;
                for (r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                return f % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                if (this.settings.onfocusout) u.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    n(i).valid()
                });
                return t === u.val()
            },
            remote: function(t, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var f = this.previousValue(i),
                    u, e;
                return (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                    url: r
                } || r, f.old === t) ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    context: u.currentForm,
                    success: function(r) {
                        var o = r === !0 || r === "true",
                            s, e, h;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        o ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, e = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(e) ? e(t) : e, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = o;
                        u.stopRequest(i, o)
                    }
                }, r)), "pending")
            }
        }
    });
    var t = {},
        i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
});
(function(n) {
    function i(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }

    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }

    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }

    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }

    function o(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
    }

    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
            u = r.attr("data-valmsg-replace"),
            e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error");
        t.data("unobtrusiveContainer", r);
        e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }

    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]"),
            r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }

    function a(t) {
        var i = t.data("unobtrusiveContainer"),
            r = i.attr("data-valmsg-replace"),
            u = r ? n.parseJSON(r) : null;
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
    }

    function v() {
        var t = n(this),
            i = "__jquery_unobtrusive_validation_form_reset";
        if (!t.data(i)) {
            t.data(i, !0);
            try {
                t.data("validator").resetForm()
            } finally {
                t.removeData(i)
            }
            t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
            t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
        }
    }

    function s(t) {
        var i = n(t),
            f = i.data(u),
            s = n.proxy(v, t),
            e = r.unobtrusive.options || {},
            o = function(i, r) {
                var u = e[i];
                u && n.isFunction(u) && u.apply(t, r)
            };
        return f || (f = {
            options: {
                errorClass: e.errorClass || "input-validation-error",
                errorElement: e.errorElement || "span",
                errorPlacement: function() {
                    c.apply(t, arguments);
                    o("errorPlacement", arguments)
                },
                invalidHandler: function() {
                    l.apply(t, arguments);
                    o("invalidHandler", arguments)
                },
                messages: {},
                rules: {},
                success: function() {
                    a.apply(t, arguments);
                    o("success", arguments)
                }
            },
            attachValidation: function() {
                i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
            },
            validate: function() {
                return i.validate(), i.valid()
            }
        }, i.data(u, f)), f
    }
    var r = n.validator,
        t, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var u = n(t),
                f = u.parents("form")[0],
                r, e, o;
            f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function() {
                var i = "data-val-" + this.name,
                    r = u.attr(i),
                    s = {};
                r !== undefined && (i += "-", n.each(this.params, function() {
                    s[this] = u.attr(i + this)
                }), this.adapt({
                    element: t,
                    form: f,
                    message: r,
                    params: s,
                    rules: e,
                    messages: o
                }))
            }), n.extend(e, {
                __dummy__: !0
            }), i || r.attachValidation())
        },
        parse: function(t) {
            var i = n(t),
                u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
            i.find("[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            });
            u.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    };
    t = r.unobtrusive.adapters;
    t.add = function(n, t, i) {
        return i || (i = t, t = []), this.push({
            name: n,
            params: t,
            adapt: i
        }), this
    };
    t.addBool = function(n, t) {
        return this.add(n, function(r) {
            i(r, t || n, !0)
        })
    };
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var f = n.params.min,
                e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    };
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"], function(u) {
            i(u, r || n, u.params[t])
        })
    };
    r.addMethod("__dummy__", function() {
        return !0
    });
    r.addMethod("regex", function(n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    });
    r.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g), r = r && r.length >= i), r
    });
    r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept");
    t.addSingleVal("regex", "pattern");
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    t.add("equalto", ["other"], function(t) {
        var r = e(t.element.name),
            u = t.params.other,
            s = o(u, r),
            h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    });
    t.add("required", function(n) {
        (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    });
    t.add("remote", ["url", "type", "additionalfields"], function(t) {
        var r = {
                url: t.params.url,
                type: t.params.type || "GET",
                data: {}
            },
            u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function(i, e) {
            var s = o(e, u);
            r.data[s] = function() {
                var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
            }
        });
        i(t, "remote", r)
    });
    t.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && i(n, "minlength", n.params.min);
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && i(n, "regex", n.params.regex)
    });
    n(function() {
        r.unobtrusive.parse(document)
    })
})(jQuery);
/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(n, t) {
    var i, g, nt, tt, it, r, h, v, c, rt, y, f, u, p, e, l, w, b, ut, k, o, a, d, s;
    i = function(n) {
        return new i.prototype.init(n)
    };
    typeof require != "undefined" && typeof exports != "undefined" && typeof module != "undefined" ? module.exports = i : n.Globalize = i;
    i.cultures = {};
    i.prototype = {
        constructor: i,
        init: function(n) {
            return this.cultures = i.cultures, this.cultureSelector = n, this
        }
    };
    i.prototype.init.prototype = i.prototype;
    i.cultures["default"] = {
        name: "en",
        englishName: "English",
        nativeName: "English",
        isRTL: !1,
        language: "en",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSizes: [3],
            "+": "+",
            "-": "-",
            NaN: "NaN",
            negativeInfinity: "-Infinity",
            positiveInfinity: "Infinity",
            percent: {
                pattern: ["-n %", "n %"],
                decimals: 2,
                groupSizes: [3],
                ",": ",",
                ".": ".",
                symbol: "%"
            },
            currency: {
                pattern: ["($n)", "$n"],
                decimals: 2,
                groupSizes: [3],
                ",": ",",
                ".": ".",
                symbol: "$"
            }
        },
        calendars: {
            standard: {
                name: "Gregorian_USEnglish",
                "/": "/",
                ":": ":",
                firstDay: 0,
                days: {
                    names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                },
                months: {
                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
                },
                AM: ["AM", "am", "AM", "a"],
                PM: ["PM", "pm", "PM", "p"],
                eras: [{
                    name: "A.D.",
                    start: null,
                    offset: 0
                }],
                twoDigitYearMax: 2029,
                patterns: {
                    d: "M/d/yyyy",
                    D: "dddd, MMMM dd, yyyy",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    M: "MMMM dd",
                    Y: "yyyy MMMM",
                    S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
                }
            }
        },
        messages: {}
    };
    i.cultures["default"].calendar = i.cultures["default"].calendars.standard;
    i.cultures.en = i.cultures["default"];
    i.cultureSelector = "en";
    g = /^0x[a-f0-9]+$/i;
    nt = /^[+\-]?infinity$/i;
    tt = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
    it = /^\s+|\s+$/g;
    r = function(n, t) {
        if (n.indexOf) return n.indexOf(t);
        for (var i = 0, r = n.length; i < r; i++)
            if (n[i] === t) return i;
        return -1
    };
    h = function(n, t) {
        return n.substr(n.length - t.length) === t
    };
    v = function() {
        var e, u, r, i, o, s, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[1] || {}, f = 2), typeof n == "object" || rt(n) || (n = {}); f < l; f++)
            if ((e = arguments[f]) != null)
                for (u in e)(r = n[u], i = e[u], n !== i) && (h && i && (y(i) || (o = c(i))) ? (o ? (o = !1, s = r && c(r) ? r : []) : s = r && y(r) ? r : {}, n[u] = v(h, s, i)) : i !== t && (n[u] = i));
        return n
    };
    c = Array.isArray || function(n) {
        return Object.prototype.toString.call(n) === "[object Array]"
    };
    rt = function(n) {
        return Object.prototype.toString.call(n) === "[object Function]"
    };
    y = function(n) {
        return Object.prototype.toString.call(n) === "[object Object]"
    };
    f = function(n, t) {
        return n.indexOf(t) === 0
    };
    u = function(n) {
        return (n + "").replace(it, "")
    };
    p = function(n) {
        return isNaN(n) ? NaN : Math[n < 0 ? "ceil" : "floor"](n)
    };
    e = function(n, t, i) {
        for (var r = n.length; r < t; r += 1) n = i ? "0" + n : n + "0";
        return n
    };
    l = function(n, t) {
        for (var u, f = 0, i = !1, r = 0, e = n.length; r < e; r++) {
            u = n.charAt(r);
            switch (u) {
                case "'":
                    i ? t.push("'") : f++;
                    i = !1;
                    break;
                case "\\":
                    i && t.push("\\");
                    i = !i;
                    break;
                default:
                    t.push(u);
                    i = !1
            }
        }
        return f
    };
    w = function(n, t) {
        t = t || "F";
        var i, u = n.patterns,
            r = t.length;
        if (r === 1) {
            if (i = u[t], !i) throw "Invalid date format string '" + t + "'.";
            t = i
        } else r === 2 && t.charAt(0) === "%" && (t = t.charAt(1));
        return t
    };
    b = function(n, t, i) {
            function e(n, t) {
                var i, r = n + "";
                return t > 1 && r.length < t ? (i = st[t - 2] + r, i.substr(i.length - t, t)) : r
            }

            function ct() {
                return c || ut ? c : (c = ht.test(t), ut = !0, c)
            }

            function it(n, t) {
                if (v) return v[t];
                switch (t) {
                    case 0:
                        return n.getFullYear();
                    case 1:
                        return n.getMonth();
                    case 2:
                        return n.getDate();
                    default:
                        throw "Invalid part value " + t;
                }
            }
            var u = i.calendar,
                d = u.convert,
                r, g, rt, nt, tt, p, f, ot, h;
            if (!t || !t.length || t === "i") return i && i.name.length ? d ? r = b(n, u.patterns.F, i) : (g = new Date(n.getTime()), rt = o(n, u.eras), g.setFullYear(a(n, u, rt)), r = g.toLocaleString()) : r = n.toString(), r;
            nt = u.eras;
            tt = t === "s";
            t = w(u, t);
            r = [];
            var s, st = ["0", "00", "000"],
                c, ut, ht = /([^d]|^)(d|dd)([^d]|$)/g,
                ft = 0,
                et = k(),
                v;
            for (!tt && d && (v = d.fromGregorian(n));;) {
                var lt = et.lastIndex,
                    y = et.exec(t),
                    at = t.slice(lt, y ? y.index : t.length);
                if (ft += l(at, r), !y) break;
                if (ft % 2) {
                    r.push(y[0]);
                    continue
                }
                p = y[0];
                f = p.length;
                switch (p) {
                    case "ddd":
                    case "dddd":
                        ot = f === 3 ? u.days.namesAbbr : u.days.names;
                        r.push(ot[n.getDay()]);
                        break;
                    case "d":
                    case "dd":
                        c = !0;
                        r.push(e(it(n, 2), f));
                        break;
                    case "MMM":
                    case "MMMM":
                        h = it(n, 1);
                        r.push(u.monthsGenitive && ct() ? u.monthsGenitive[f === 3 ? "namesAbbr" : "names"][h] : u.months[f === 3 ? "namesAbbr" : "names"][h]);
                        break;
                    case "M":
                    case "MM":
                        r.push(e(it(n, 1) + 1, f));
                        break;
                    case "y":
                    case "yy":
                    case "yyyy":
                        h = v ? v[0] : a(n, u, o(n, nt), tt);
                        f < 4 && (h = h % 100);
                        r.push(e(h, f));
                        break;
                    case "h":
                    case "hh":
                        s = n.getHours() % 12;
                        s === 0 && (s = 12);
                        r.push(e(s, f));
                        break;
                    case "H":
                    case "HH":
                        r.push(e(n.getHours(), f));
                        break;
                    case "m":
                    case "mm":
                        r.push(e(n.getMinutes(), f));
                        break;
                    case "s":
                    case "ss":
                        r.push(e(n.getSeconds(), f));
                        break;
                    case "t":
                    case "tt":
                        h = n.getHours() < 12 ? u.AM ? u.AM[0] : " " : u.PM ? u.PM[0] : " ";
                        r.push(f === 1 ? h.charAt(0) : h);
                        break;
                    case "f":
                    case "ff":
                    case "fff":
                        r.push(e(n.getMilliseconds(), 3).substr(0, f));
                        break;
                    case "z":
                    case "zz":
                        s = n.getTimezoneOffset() / 60;
                        r.push((s <= 0 ? "+" : "-") + e(Math.floor(Math.abs(s)), f));
                        break;
                    case "zzz":
                        s = n.getTimezoneOffset() / 60;
                        r.push((s <= 0 ? "+" : "-") + e(Math.floor(Math.abs(s)), 2) + ":" + e(Math.abs(n.getTimezoneOffset() % 60), 2));
                        break;
                    case "g":
                    case "gg":
                        u.eras && r.push(u.eras[o(n, nt)].name);
                        break;
                    case "/":
                        r.push(u["/"]);
                        break;
                    default:
                        throw "Invalid date format pattern '" + p + "'.";
                }
            }
            return r.join("")
        },
        function() {
            var n;
            n = function(n, t, i) {
                var l = i.groupSizes,
                    c = l[0],
                    a = 1,
                    p = Math.pow(10, t),
                    v = Math.round(n * p) / p;
                isFinite(v) || (v = n);
                n = v;
                var r = n + "",
                    u = "",
                    o = r.split(/e/i),
                    f = o.length > 1 ? parseInt(o[1], 10) : 0;
                r = o[0];
                o = r.split(".");
                r = o[0];
                u = o.length > 1 ? o[1] : "";
                f > 0 ? (u = e(u, f, !1), r += u.slice(0, f), u = u.substr(f)) : f < 0 && (f = -f, r = e(r, f + 1, !0), u = r.slice(-f, r.length) + u, r = r.slice(0, -f));
                u = t > 0 ? i["."] + (u.length > t ? u.slice(0, t) : e(u, t)) : "";
                for (var s = r.length - 1, y = i[","], h = ""; s >= 0;) {
                    if (c === 0 || c > s) return r.slice(0, s + 1) + (h.length ? y + h + u : u);
                    h = r.slice(s - c + 1, s + 1) + (h.length ? y + h : "");
                    s -= c;
                    a < l.length && (c = l[a], a++)
                }
                return r.slice(0, s + 1) + y + h + u
            };
            ut = function(t, i, r) {
                var a, f, v, o, y, l;
                if (!isFinite(t)) return t === Infinity ? r.numberFormat.positiveInfinity : t === -Infinity ? r.numberFormat.negativeInfinity : r.numberFormat.NaN;
                if (!i || i === "i") return r.name.length ? t.toLocaleString() : t.toString();
                i = i || "D";
                var s = r.numberFormat,
                    u = Math.abs(t),
                    h = -1,
                    c;
                i.length > 1 && (h = parseInt(i.slice(1), 10));
                a = i.charAt(0).toUpperCase();
                switch (a) {
                    case "D":
                        c = "n";
                        u = p(u);
                        h !== -1 && (u = e("" + u, h, !0));
                        t < 0 && (u = "-" + u);
                        break;
                    case "N":
                        f = s;
                    case "C":
                        f = f || s.currency;
                    case "P":
                        f = f || s.percent;
                        c = t < 0 ? f.pattern[0] : f.pattern[1] || "n";
                        h === -1 && (h = f.decimals);
                        u = n(u * (a === "P" ? 100 : 1), h, f);
                        break;
                    default:
                        throw "Bad number format specifier: " + a;
                }
                for (v = /n|\$|-|%/g, o = "";;) {
                    if (y = v.lastIndex, l = v.exec(c), o += c.slice(y, l ? l.index : c.length), !l) break;
                    switch (l[0]) {
                        case "n":
                            o += u;
                            break;
                        case "$":
                            o += s.currency.symbol;
                            break;
                        case "-":
                            /[1-9]/.test(u) && (o += s["-"]);
                            break;
                        case "%":
                            o += s.percent.symbol
                    }
                }
                return o
            }
        }();
    k = function() {
        return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
    };
    o = function(n, t) {
        var r, u, i, f;
        if (!t) return 0;
        for (u = n.getTime(), i = 0, f = t.length; i < f; i++)
            if (r = t[i].start, r === null || u >= r) return i;
        return 0
    };
    a = function(n, t, i, r) {
            var u = n.getFullYear();
            return !r && t.eras && (u -= t.eras[i].offset), u
        },
        function() {
            var e, s, h, c, n, i, t;
            e = function(n, t) {
                if (t < 100) {
                    var r = new Date,
                        f = o(r),
                        u = a(r, n, f),
                        i = n.twoDigitYearMax;
                    i = typeof i == "string" ? (new Date).getFullYear() % 100 + parseInt(i, 10) : i;
                    t += u - u % 100;
                    t > i && (t -= 100)
                }
                return t
            };
            s = function(n, u, f) {
                var e, s = n.days,
                    o = n._upperDays;
                return o || (n._upperDays = o = [t(s.names), t(s.namesAbbr), t(s.namesShort)]), u = i(u), f ? (e = r(o[1], u), e === -1 && (e = r(o[2], u))) : e = r(o[0], u), e
            };
            h = function(n, u, f) {
                var h = n.months,
                    c = n.monthsGenitive || n.months,
                    e = n._upperMonths,
                    s = n._upperMonthsGen,
                    o;
                return e || (n._upperMonths = e = [t(h.names), t(h.namesAbbr)], n._upperMonthsGen = s = [t(c.names), t(c.namesAbbr)]), u = i(u), o = r(f ? e[1] : e[0], u), o < 0 && (o = r(f ? s[1] : s[0], u)), o
            };
            c = function(n, t) {
                var f = n._parseRegExp,
                    o, y, e, p, i, b, d;
                if (f) {
                    if (o = f[t], o) return o
                } else n._parseRegExp = f = {};
                for (var s = w(n, t).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), r = ["^"], c = [], h = 0, a = 0, v = k(), u;
                    (u = v.exec(s)) !== null;) {
                    if (y = s.slice(h, u.index), h = v.lastIndex, a += l(y, r), a % 2) {
                        r.push(u[0]);
                        continue
                    }
                    e = u[0];
                    p = e.length;
                    switch (e) {
                        case "dddd":
                        case "ddd":
                        case "MMMM":
                        case "MMM":
                        case "gg":
                        case "g":
                            i = "(\\D+)";
                            break;
                        case "tt":
                        case "t":
                            i = "(\\D+)";
                            break;
                        case "yyyy":
                        case "fff":
                        case "ff":
                        case "f":
                            i = "(\\d{" + p + "})";
                            break;
                        case "dd":
                        case "d":
                        case "MM":
                        case "M":
                        case "yy":
                        case "y":
                        case "HH":
                        case "H":
                        case "hh":
                        case "h":
                        case "mm":
                        case "m":
                        case "ss":
                        case "s":
                            i = "(\\d\\d?)";
                            break;
                        case "zzz":
                            i = "([+-]?\\d\\d?:\\d{2})";
                            break;
                        case "zz":
                        case "z":
                            i = "([+-]?\\d\\d?)";
                            break;
                        case "/":
                            i = "(\\/)";
                            break;
                        default:
                            throw "Invalid date format pattern '" + e + "'.";
                    }
                    i && r.push(i);
                    c.push(u[0])
                }
                return l(s.slice(h), r), r.push("$"), b = r.join("").replace(/\s+/g, "\\s+"), d = {
                    regExp: b,
                    groups: c
                }, f[t] = d
            };
            n = function(n, t, i) {
                return n < t || n > i
            };
            i = function(n) {
                return n.split(" ").join(" ").toUpperCase()
            };
            t = function(n) {
                for (var r = [], t = 0, u = n.length; t < u; t++) r[t] = i(n[t]);
                return r
            };
            d = function(t, i, r) {
                var d, wt, l, ft, et, g, nt, kt, a, dt, tt, at;
                t = u(t);
                var o = r.calendar,
                    vt = c(o, i),
                    yt = new RegExp(vt.regExp).exec(t);
                if (yt === null) return null;
                var pt = vt.groups,
                    ot = null,
                    w = null,
                    p = null,
                    b = null,
                    it = null,
                    y = 0,
                    k, st = 0,
                    ht = 0,
                    ct = 0,
                    rt = null,
                    lt = !1;
                for (d = 0, wt = pt.length; d < wt; d++)
                    if (l = yt[d + 1], l) {
                        var bt = pt[d],
                            ut = bt.length,
                            v = parseInt(l, 10);
                        switch (bt) {
                            case "dd":
                            case "d":
                                if (b = v, n(b, 1, 31)) return null;
                                break;
                            case "MMM":
                            case "MMMM":
                                if (p = h(o, l, ut === 3), n(p, 0, 11)) return null;
                                break;
                            case "M":
                            case "MM":
                                if (p = v - 1, n(p, 0, 11)) return null;
                                break;
                            case "y":
                            case "yy":
                            case "yyyy":
                                if (w = ut < 4 ? e(o, v) : v, n(w, 0, 9999)) return null;
                                break;
                            case "h":
                            case "hh":
                                if (y = v, y === 12 && (y = 0), n(y, 0, 11)) return null;
                                break;
                            case "H":
                            case "HH":
                                if (y = v, n(y, 0, 23)) return null;
                                break;
                            case "m":
                            case "mm":
                                if (st = v, n(st, 0, 59)) return null;
                                break;
                            case "s":
                            case "ss":
                                if (ht = v, n(ht, 0, 59)) return null;
                                break;
                            case "tt":
                            case "t":
                                if (lt = o.PM && (l === o.PM[0] || l === o.PM[1] || l === o.PM[2] || l === o.PM[3] || l === o.PM[4]), !lt && (!o.AM || l !== o.AM[0] && l !== o.AM[1] && l !== o.AM[2] && l !== o.AM[3] && l !== o.AM[4])) return null;
                                break;
                            case "f":
                            case "ff":
                            case "fff":
                                if (ct = v * Math.pow(10, 3 - ut), n(ct, 0, 999)) return null;
                                break;
                            case "ddd":
                            case "dddd":
                                if (it = s(o, l, ut === 3), n(it, 0, 6)) return null;
                                break;
                            case "zzz":
                                if ((ft = l.split(/:/), ft.length !== 2) || (k = parseInt(ft[0], 10), n(k, -12, 13)) || (et = parseInt(ft[1], 10), n(et, 0, 59))) return null;
                                rt = k * 60 + (f(l, "-") ? -et : et);
                                break;
                            case "z":
                            case "zz":
                                if (k = v, n(k, -12, 13)) return null;
                                rt = k * 60;
                                break;
                            case "g":
                            case "gg":
                                if (g = l, !g || !o.eras) return null;
                                for (g = u(g.toLowerCase()), nt = 0, kt = o.eras.length; nt < kt; nt++)
                                    if (g === o.eras[nt].name.toLowerCase()) {
                                        ot = nt;
                                        break
                                    } if (ot === null) return null
                        }
                    } if (a = new Date, tt = o.convert, dt = tt ? tt.fromGregorian(a)[0] : a.getFullYear(), w === null ? w = dt : o.eras && (w += o.eras[ot || 0].offset), p === null && (p = 0), b === null && (b = 1), tt) {
                    if (a = tt.toGregorian(w, p, b), a === null) return null
                } else if ((a.setFullYear(w, p, b), a.getDate() !== b) || it !== null && a.getDay() !== it) return null;
                return lt && y < 12 && (y += 12), a.setHours(y, st, ht, ct), rt !== null && (at = a.getMinutes() - (rt + a.getTimezoneOffset()), a.setHours(a.getHours() + parseInt(at / 60, 10), at % 60)), a
            }
        }();
    s = function(n, t, i) {
        var r = t["-"],
            u = t["+"],
            e;
        switch (i) {
            case "n -":
                r = " " + r;
                u = " " + u;
            case "n-":
                h(n, r) ? e = ["-", n.substr(0, n.length - r.length)] : h(n, u) && (e = ["+", n.substr(0, n.length - u.length)]);
                break;
            case "- n":
                r += " ";
                u += " ";
            case "-n":
                f(n, r) ? e = ["-", n.substr(r.length)] : f(n, u) && (e = ["+", n.substr(u.length)]);
                break;
            case "(n)":
                f(n, "(") && h(n, ")") && (e = ["-", n.substr(1, n.length - 2)])
        }
        return e || ["", n]
    };
    i.prototype.findClosestCulture = function(n) {
        return i.findClosestCulture.call(this, n)
    };
    i.prototype.format = function(n, t, r) {
        return i.format.call(this, n, t, r)
    };
    i.prototype.localize = function(n, t) {
        return i.localize.call(this, n, t)
    };
    i.prototype.parseInt = function(n, t, r) {
        return i.parseInt.call(this, n, t, r)
    };
    i.prototype.parseFloat = function(n, t, r) {
        return i.parseFloat.call(this, n, t, r)
    };
    i.prototype.culture = function(n) {
        return i.culture.call(this, n)
    };
    i.addCultureInfo = function(n, t, i) {
        var r = {},
            u = !1;
        typeof n != "string" ? (i = n, n = this.culture().name, r = this.cultures[n]) : typeof t != "string" ? (i = t, u = this.cultures[n] == null, r = this.cultures[n] || this.cultures["default"]) : (u = !0, r = this.cultures[t]);
        this.cultures[n] = v(!0, {}, r, i);
        u && (this.cultures[n].calendar = this.cultures[n].calendars.standard)
    };
    i.findClosestCulture = function(n) {
        var r, f, h, l, y, a;
        if (!n) return this.findClosestCulture(this.cultureSelector) || this.cultures["default"];
        if (typeof n == "string" && (n = n.split(",")), c(n)) {
            for (var i, o = this.cultures, v = n, s = v.length, e = [], t = 0; t < s; t++) n = u(v[t]), h = n.split(";"), i = u(h[0]), h.length === 1 ? f = 1 : (n = u(h[1]), n.indexOf("q=") === 0 ? (n = n.substr(2), f = parseFloat(n), f = isNaN(f) ? 0 : f) : f = 1), e.push({
                lang: i,
                pri: f
            });
            for (e.sort(function(n, t) {
                    return n.pri < t.pri ? 1 : n.pri > t.pri ? -1 : 0
                }), t = 0; t < s; t++)
                if (i = e[t].lang, r = o[i], r) return r;
            for (t = 0; t < s; t++) {
                i = e[t].lang;
                do {
                    if (l = i.lastIndexOf("-"), l === -1) break;
                    if (i = i.substr(0, l), r = o[i], r) return r
                } while (1)
            }
            for (t = 0; t < s; t++) {
                i = e[t].lang;
                for (y in o)
                    if (a = o[y], a.language == i) return a
            }
        } else if (typeof n == "object") return n;
        return r || null
    };
    i.format = function(n, t, i) {
        var r = this.findClosestCulture(i);
        return n instanceof Date ? n = b(n, t, r) : typeof n == "number" && (n = ut(n, t, r)), n
    };
    i.localize = function(n, t) {
        return this.findClosestCulture(t).messages[n] || this.cultures["default"].messages[n]
    };
    i.parseDate = function(n, t, i) {
        var r, o, f, u, s, e;
        if (i = this.findClosestCulture(i), t) {
            if (typeof t == "string" && (t = [t]), t.length)
                for (u = 0, s = t.length; u < s; u++)
                    if (e = t[u], e && (r = d(n, e, i), r)) break
        } else {
            f = i.calendar.patterns;
            for (o in f)
                if (r = d(n, f[o], i), r) break
        }
        return r || null
    };
    i.parseInt = function(n, t, r) {
        return p(i.parseFloat(n, t, r))
    };
    i.parseFloat = function(n, t, i) {
        var y, c, l, h, p, k, w, b, d, a, it;
        typeof t != "number" && (i = t, t = 10);
        var f = this.findClosestCulture(i),
            v = NaN,
            r = f.numberFormat;
        if (n.indexOf(f.numberFormat.currency.symbol) > -1 && (n = n.replace(f.numberFormat.currency.symbol, ""), n = n.replace(f.numberFormat.currency["."], f.numberFormat["."])), n.indexOf(f.numberFormat.percent.symbol) > -1 && (n = n.replace(f.numberFormat.percent.symbol, "")), n = n.replace(/ /g, ""), nt.test(n)) v = parseFloat(n);
        else if (!t && g.test(n)) v = parseInt(n, 16);
        else {
            var u = s(n, r, r.pattern[0]),
                e = u[0],
                o = u[1];
            e === "" && r.pattern[0] !== "(n)" && (u = s(n, r, "(n)"), e = u[0], o = u[1]);
            e === "" && r.pattern[0] !== "-n" && (u = s(n, r, "-n"), e = u[0], o = u[1]);
            e = e || "+";
            l = o.indexOf("e");
            l < 0 && (l = o.indexOf("E"));
            l < 0 ? (c = o, y = null) : (c = o.substr(0, l), y = o.substr(l + 1));
            k = r["."];
            w = c.indexOf(k);
            w < 0 ? (h = c, p = null) : (h = c.substr(0, w), p = c.substr(w + k.length));
            b = r[","];
            h = h.split(b).join("");
            d = b.replace(/\u00A0/g, " ");
            b !== d && (h = h.split(d).join(""));
            a = e + h;
            p !== null && (a += "." + p);
            y !== null && (it = s(y, r, "-n"), a += "e" + (it[0] || "+") + it[1]);
            tt.test(a) && (v = parseFloat(a))
        }
        return v
    };
    i.culture = function(n) {
        return typeof n != "undefined" && (this.cultureSelector = n), this.findClosestCulture(n) || this.cultures["default"]
    }
})(this);

function CustomEvent() {
    var n = [];
    this.subscribe = function(t) {
        n.push(t)
    };
    this.fire = function(t) {
        for (var i = 0; i < n.length; i++) n[i](t)
    };
    this.clearListeners = function() {
        n = []
    }
};
$(document).ready(function() {
    $("#loyalty-member-section").on("click", "#simple-memberLogoutButton", function() {
        $(".logoutButton button").addClass("action-disabled").attr("disabled", "disabled");
        $.ajax({
            url: "/MemberLogout/LogoutMember",
            type: "POST",
            success: function() {
                $(".login-info").html("You have successfully logged out");
                $(".logoutButton").hide()
            }
        })
    });
    var n = $("#placeHolder").css("background-color");
    n && (n = n.replace("rgb(", "rgba("), n = n.replace(")", ",0.16)"), $("#memberPartial").css("background-color", n))
});
viewjs = function(n) {
    function t(n) {
        return n.replace("dddd", "DD").replace("ddd", "D").replace("yyyy", "Full").replace("yy", "Short").replace("Full", "yy").replace("Short", "y").replace("MMMM", "Full").replace("MMM", "Short").replace("MM", "mm").replace("M", "m").replace("Full", "MM").replace("Short", "M")
    }
    Globalize.culture(n);
    $.validator.methods.date = function(n, t) {
        return this.optional(t) || Date.parse(n)
    };
    String.prototype.trim || function() {
        var n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(n, "")
        }
    }();
    var i = t(Date.CultureInfo.formatPatterns.shortDate),
        r = t(Date.CultureInfo.formatPatterns.longDate);
    $("form input.datepicker").each(function() {
        var n = $(this).attr("readonly", "readonly"),
            t = n.attr("data-useLongDateFormat") === "true",
            u = n.attr("data-altField");
        n.datepicker({
            yearRange: "-100:+0",
            maxDate: n.parents().hasClass("vr-date") ? "-13Y" : 0,
            dateFormat: t ? r : i,
            changeMonth: !0,
            changeYear: !0,
            altField: u || "",
            altFormat: "yy-mm-dd"
        }).keyup(function(n) {
            (n.keyCode == 8 || n.keyCode == 46) && $.datepicker._clearDate(this)
        })
    })
};
window.onload = function() {
    var n = $("header");
    n.length > 0 && ($("#container")[0].style.paddingTop = 0)
};
var vista = vista || {};
vista.utils = vista.utils || {};
vista.utils.object = vista.utils.object || {};
vista.utils.object.registerNamespace = function(n) {
    var i = (n || "").split("."),
        r = window,
        t;
    if (i.length)
        for (t = 0; t < i.length; t++) r[i[t]] = r[i[t]] || {}, r = r[i[t]]
};
vista.registerNamespace = vista.utils.object.registerNamespace;
vista.utils.object.resolveTypeToConstructor = function(n) {
    for (var r = (n || "").split("."), t = window, i = 0; i < r.length; i++) t = t[r[i]];
    return $.isFunction(t) ? t : null
};
vista.utils.object.mapObjects = function(n, t) {
    for (var u = [], i = null, r = 0; r < n.length; r++) {
        i = {};
        for (property in t) t.hasOwnProperty(property) && (i[t[property]] = n[r][property]);
        u.push(i)
    }
    return u
};
vista.utils.object.setProperty = function(n, t, i) {
    if (t) {
        t = t.split(".");
        for (var r = 0; r < t.length - 1; r++) n[t[r]] == undefined && (n[t[r]] = {}), n = n[t[r]];
        n[t[r]] = i
    }
};
vista.registerNamespace("vista.utils.browser");
vista.utils.browser.setCookie = function(n, t, i) {
    var r, u;
    i ? (r = new Date, r.setTime(r.getTime() + i * 864e5), u = "; expires=" + r.toUTCString()) : u = "";
    document.cookie = n + "=" + t + u + "; path=/"
};
vista.utils.browser.getCookie = function(n) {
    for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
        if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
    }
    return null
};
vista.utils.browser.clearCookie = function(n) {
    createCookie(n, "", -1)
};
vista.utils.browser.getQueryStringArgs = function() {
    for (var r = {}, t = location.search.substring(1), t = t.split("&"), n = null, i = 0; i < t.length; i++) n = t[i].split("="), n.length > 1 && (r[n[0]] = n[1]);
    return r
};
vista.utils.browser.applyBrowserClassNames = function() {
    var n = null;
    switch (!0) {
        case $.browser.msie && parseInt($.browser.version, 10) < 8:
            n = "msie msie7";
            break;
        case $.browser.msie && parseInt($.browser.version, 10) < 9:
            n = "msie msie8";
            break;
        case $.browser.msie:
            n = "msie";
            break;
        case $.browser.mozilla:
            n = "mozilla";
            break;
        case $.browser.webkit:
            n = "webkit"
    }
    n && $("body").addClass(n)
};
vista.utils.string = vista.utils.string || {};
vista.utils.string.format = function(n) {
    var i, t;
    if (n == null) return "";
    if (arguments.length <= 1) return n;
    for (i = arguments.length - 2, t = 0; t <= i; t++) n = n.replace(new RegExp("\\{" + t + "\\}", "gi"), arguments[t + 1]);
    return n
};
String.format = vista.utils.string.format;
String.prototype.startsWith = function(n) {
    return this.slice(0, n.length) == n
};
vista.utils.string.trim = function(n) {
    return $.trim(n)
};
String.prototype.crop = function(n, t) {
    return this.length > n ? this.substring(0, n).trim() + (t ? t : ".") : this.toString()
};
vista.utils.string.containsAnyOf = function(n, t, i) {
    var u, r;
    for (n = n || "", t = t || [], u = null, r = 0; r < t.length; r++)
        if (u = new RegExp(i ? "\\b" + t[r] + "\\b" : t[r], "g"), n.match(u)) return !0;
    return !1
};
vista.utils.string.StringBuilder = function() {
    this.buffer = []
};
vista.utils.string.StringBuilder.prototype = {
    append: function(n) {
        return this.buffer.push(n), this
    },
    appendN: function(n, t) {
        for (var i = 0; i < t; i++) this.append(n);
        return this
    },
    appendIf: function(n, t) {
        return t && this.append(n), this
    },
    appendFormat: function() {
        return this.append(String.format.apply(String, arguments)), this
    },
    appendFormatEach: function(n, t) {
        var u = [].slice.apply(arguments),
            r, f, i, e;
        for (u.splice(1, 1), r = 0, f = t.length; r < f; r++) {
            for (i = 2, e = arguments.length; i < e; i++) u[i - 1] = t[r][arguments[i]];
            this.append(String.format.apply(String, u))
        }
    },
    toString: function(n) {
        return this.buffer.join(n || "")
    }
};
vista.utils.date = vista.utils.date || {};
vista.utils.date.isDate = function(n) {
    return typeof n == "object" && n.getDate
};
Math.clamp || (Math.clamp = function(n, t, i) {
    return Math.min(i, Math.max(t, n))
});
Math.randomInt || (Math.randomInt = function(n, t) {
    return Math.floor(Math.random() * (t - n + 1) + n)
});
vista.utils.array = vista.utils.array || {};
vista.utils.array.generateSortFunction = function(n) {
    return function(t, i) {
        switch (!0) {
            case t[n] > i[n]:
                return 1;
            case t[n] < i[n]:
                return -1;
            default:
                return 0
        }
    }
};
vista.utils.array.remove = function(n) {
    var t;
    if (arguments.length == 2)
        for (t = n.length; t >= 0; t--) n[t] == arguments[1] && n.splice(t, 1);
    else
        for (t = n.length - 1; t >= 0; t--) n[t][arguments[1]] == arguments[2] && n.splice(t, 1)
};
vista.utils.array.removeEmptyValues = function(n) {
    for (var t = 0; t < n.length; t++) n[t] || (n.splice(t, 1), t--);
    return n
};
vista.utils.array.filter = function(n, t) {
    var r = [],
        f, e, u, i;
    if (arguments.length == 3)
        for (f = arguments[1], e = arguments[2], i = 0, u = n.length; i < u; i++) n[i][f] == e && r.push(n[i]);
    else switch (!0) {
        case typeof t == "function":
            for (i = 0, u = n.length; i < u; i++) t(n[i]) && r.push(n[i]);
            break;
        case t instanceof Array:
            for (i = 0; i < t.length; i++) r.push(n[t[i]])
    }
    return r
};
vista.utils.array.find = function(n) {
    var t;
    if (arguments.length == 2) {
        for (t = 0; t < n.length; t++)
            if (arguments[1](n[t])) return n[t]
    } else
        for (t = 0; t < n.length; t++)
            if (n[t][arguments[1]] == arguments[2]) return n[t]
};
vista.utils.array.indexOf = function(n, t) {
    for (var i = 0; i < n.length; i++)
        if (n[i] == t) return i;
    return -1
};
Array.prototype.indexOf == undefined && (Array.prototype.indexOf = function(n) {
    return vista.utils.array.indexOf(this, n)
});
vista.utils.array.indexesOf = function(n, t) {
    for (var i, u = [], r = 0; r < t.length; r++)
        for (i = 0; i < n.length; i++) n[i] == t[r] && u.push(i);
    return u
};
vista.utils.array.indexValues = function(n, t) {
    for (var r = {}, u = null, i = 0; i < n.length; i++) u = String(t ? n[i][t] : n[i]), r[u] = i;
    return r
};
vista.utils.array.mapValues = function(n, t) {
    var r, i;
    for (t = t || "id", r = {}, i = 0; i < n.length; i++) r[n[i][t]] = n[i];
    return r
};
vista.utils.array.getUnique = function(n) {
    var i = [],
        t, u, r, f;
    n: for (t = 0, u = n.length; t < u; t++) {
        for (r = 0, f = i.length; r < f; r++)
            if (i[r] == n[t]) continue n;
        i.push(n[t])
    }
    return i
};
vista.utils.array.generateIntegerRange = function(n, t) {
    if (n == t) return [n];
    for (var i = [], r = n > t ? -1 : 1; n != t;) i.push(n), n += r;
    return i.push(t), i
};
vista.utils.array.difference = function(n, t) {
    var u, f, i, r;
    n == n || [];
    t == t || [];
    u = [];
    f = [];
    n: for (i = 0; i < n.length; i++) {
        for (r = 0; r < t.length; r++)
            if (n[i] == t[r]) continue n;
        f.push(n[i])
    }
    n: for (i = 0; i < t.length; i++) {
        for (r = 0; r < n.length; r++)
            if (t[i] == n[r]) continue n;
        u.push(t[i])
    }
    return {
        added: u,
        missing: f
    }
};
vista.utils.array.areEqual = function(n, t) {
    if (!n || !t || n.length != t.length) return !1;
    n = n.sort();
    t = t.sort();
    for (var i = 0; i < n.length; i++)
        if (n[i] !== t[i]) return !1;
    return !0
};
vista.utils.array.getValues = function(n, t) {
    var r, i, u;
    if (t = t || "id", r = [], typeof t == "string")
        for (i = 0; i < n.length; i++) r.push(n[i][t]);
    else
        for (i = 0; i < n.length; i++)
            for (r[i] = {}, u = 0; u < t.length; u++) r[i][t[u]] = n[i][t[u]];
    return r
};
vista.utils.resource = {
    data: {},
    setData: function(n) {
        vista.utils.resource.data = n
    },
    getString: function(n) {
        return vista.utils.resource.data[n] || n
    }
};
vista.utils.number = {
    isNumber: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
};
vista.utils.debounce = function(n, t, i) {
    var r, u, f, o, e, s = function() {
        var h = Date.now() - o;
        h < t ? r = setTimeout(s, t - h) : (r = null, i || (e = n.apply(f, u), f = u = null))
    };
    return function() {
        f = this;
        u = arguments;
        o = Date.now();
        var h = i && !r;
        return r || (r = setTimeout(s, t)), h && (e = n.apply(f, u), f = u = null), e
    }
};
 