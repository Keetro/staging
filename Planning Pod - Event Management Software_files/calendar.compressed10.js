(function(e) {
    function t(e, t, n) {
        switch (arguments.length) {
            case 2:
                return null != e ? e : t;
            case 3:
                return null != e ? e : null != t ? t : n;
            default:
                throw new Error("Implement me")
        }
    }

    function n(e, t) {
        return Nt.call(e, t)
    }

    function r() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function i(e) {
        bt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function s(e, t) {
        var n = !0;
        return h(function() {
            return n && (i(e), n = !1), t.apply(this, arguments)
        }, t)
    }

    function o(e, t) {
        gn[e] || (i(t), gn[e] = !0)
    }

    function u(e, t) {
        return function(n) {
            return v(e.call(this, n), t)
        }
    }

    function a(e, t) {
        return function(n) {
            return this.localeData().ordinal(e.call(this, n), t)
        }
    }

    function f() {}

    function l(e, t) {
        t !== !1 && M(e), p(this, e), this._d = new Date(+e._d)
    }

    function c(e) {
        var t = T(e),
            n = t.year || 0,
            r = t.quarter || 0,
            i = t.month || 0,
            s = t.week || 0,
            o = t.day || 0,
            u = t.hour || 0,
            a = t.minute || 0,
            f = t.second || 0,
            l = t.millisecond || 0;
        this._milliseconds = +l + 1e3 * f + 6e4 * a + 36e5 * u, this._days = +o + 7 * s, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = bt.localeData(), this._bubble()
    }

    function h(e, t) {
        for (var r in t) n(t, r) && (e[r] = t[r]);
        return n(t, "toString") && (e.toString = t.toString), n(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function p(e, t) {
        var n, r, i;
        if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Pt.length > 0)
            for (n in Pt) r = Pt[n], i = t[r], "undefined" != typeof i && (e[r] = i);
        return e
    }

    function d(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function v(e, t, n) {
        for (var r = "" + Math.abs(e), i = e >= 0; r.length < t;) r = "0" + r;
        return (i ? n ? "+" : "" : "-") + r
    }

    function m(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function g(e, t) {
        var n;
        return t = B(t, e), e.isBefore(t) ? n = m(e, t) : (n = m(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function y(e, t) {
        return function(n, r) {
            var i, s;
            return null === r || isNaN(+r) || (o(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), s = n, n = r, r = s), n = "string" == typeof n ? +n : n, i = bt.duration(n, r), b(this, i, e), this
        }
    }

    function b(e, t, n, r) {
        var i = t._milliseconds,
            s = t._days,
            o = t._months;
        r = null == r ? !0 : r, i && e._d.setTime(+e._d + i * n), s && pt(e, "Date", ht(e, "Date") + s * n), o && ct(e, ht(e, "Month") + o * n), r && bt.updateOffset(e, s || o)
    }

    function w(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function E(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function S(e, t, n) {
        var r, i = Math.min(e.length, t.length),
            s = Math.abs(e.length - t.length),
            o = 0;
        for (r = 0; i > r; r++)(n && e[r] !== t[r] || !n && C(e[r]) !== C(t[r])) && o++;
        return o + s
    }

    function x(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = ln[e] || cn[t] || t
        }
        return e
    }

    function T(e) {
        var t, r, i = {};
        for (r in e) n(e, r) && (t = x(r), t && (i[t] = e[r]));
        return i
    }

    function N(t) {
        var n, r;
        if (0 === t.indexOf("week")) n = 7, r = "day";
        else {
            if (0 !== t.indexOf("month")) return;
            n = 12, r = "month"
        }
        bt[t] = function(i, s) {
            var o, u, a = bt._locale[t],
                f = [];
            if ("number" == typeof i && (s = i, i = e), u = function(e) {
                var t = bt().utc().set(r, e);
                return a.call(bt._locale, t, i || "")
            }, null != s) return u(s);
            for (o = 0; n > o; o++) f.push(u(o));
            return f
        }
    }

    function C(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }

    function k(e, t) {
        return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
    }

    function L(e, t, n) {
        return ut(bt([e, 11, 31 + t - n]), t, n).week
    }

    function A(e) {
        return O(e) ? 366 : 365
    }

    function O(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function M(e) {
        var t;
        e._a && -2 === e._pf.overflow && (t = e._a[kt] < 0 || e._a[kt] > 11 ? kt : e._a[Lt] < 1 || e._a[Lt] > k(e._a[Ct], e._a[kt]) ? Lt : e._a[At] < 0 || e._a[At] > 24 || 24 === e._a[At] && (0 !== e._a[Ot] || 0 !== e._a[Mt] || 0 !== e._a[_t]) ? At : e._a[Ot] < 0 || e._a[Ot] > 59 ? Ot : e._a[Mt] < 0 || e._a[Mt] > 59 ? Mt : e._a[_t] < 0 || e._a[_t] > 999 ? _t : -1, e._pf._overflowDayOfYear && (Ct > t || t > Lt) && (t = Lt), e._pf.overflow = t)
    }

    function _(t) {
        return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === e)), t._isValid
    }

    function D(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function P(e) {
        for (var t, n, r, i, s = 0; s < e.length;) {
            for (i = D(e[s]).split("-"), t = i.length, n = D(e[s + 1]), n = n ? n.split("-") : null; t > 0;) {
                if (r = H(i.slice(0, t).join("-"))) return r;
                if (n && n.length >= t && S(i, n, !0) >= t - 1) break;
                t--
            }
            s++
        }
        return null
    }

    function H(e) {
        var t = null;
        if (!Dt[e] && Ht) try {
            t = bt.locale(), require("./locale/" + e), bt.locale(t)
        } catch (n) {}
        return Dt[e]
    }

    function B(e, t) {
        var n, r;
        return t._isUTC ? (n = t.clone(), r = (bt.isMoment(e) || E(e) ? +e : +bt(e)) - +n, n._d.setTime(+n._d + r), bt.updateOffset(n, !1), n) : bt(e).local()
    }

    function j(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function F(e) {
        var t, n, r = e.match(It);
        for (t = 0, n = r.length; n > t; t++) r[t] = mn[r[t]] ? mn[r[t]] : j(r[t]);
        return function(i) {
            var s = "";
            for (t = 0; n > t; t++) s += r[t] instanceof Function ? r[t].call(i, e) : r[t];
            return s
        }
    }

    function I(e, t) {
        return e.isValid() ? (t = q(t, e.localeData()), hn[t] || (hn[t] = F(t)), hn[t](e)) : e.localeData().invalidDate()
    }

    function q(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var r = 5;
        for (qt.lastIndex = 0; r >= 0 && qt.test(e);) e = e.replace(qt, n), qt.lastIndex = 0, r -= 1;
        return e
    }

    function R(e, t) {
        var n, r = t._strict;
        switch (e) {
            case "Q":
                return Gt;
            case "DDDD":
                return Zt;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return r ? en : zt;
            case "Y":
            case "G":
            case "g":
                return nn;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return r ? tn : Wt;
            case "S":
                if (r) return Gt;
            case "SS":
                if (r) return Yt;
            case "SSS":
                if (r) return Zt;
            case "DDD":
                return Ut;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Vt;
            case "a":
            case "A":
                return t._locale._meridiemParse;
            case "x":
                return Kt;
            case "X":
                return Qt;
            case "Z":
            case "ZZ":
                return $t;
            case "T":
                return Jt;
            case "SSSS":
                return Xt;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return r ? Yt : Rt;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Rt;
            case "Do":
                return r ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
            default:
                return n = new RegExp(Q(K(e.replace("\\", "")), "i"))
        }
    }

    function U(e) {
        e = e || "";
        var t = e.match($t) || [],
            n = t[t.length - 1] || [],
            r = (n + "").match(an) || ["-", 0, 0],
            i = +(60 * r[1]) + C(r[2]);
        return "+" === r[0] ? -i : i
    }

    function z(e, t, n) {
        var r, i = n._a;
        switch (e) {
            case "Q":
                null != t && (i[kt] = 3 * (C(t) - 1));
                break;
            case "M":
            case "MM":
                null != t && (i[kt] = C(t) - 1);
                break;
            case "MMM":
            case "MMMM":
                r = n._locale.monthsParse(t, e, n._strict), null != r ? i[kt] = r : n._pf.invalidMonth = t;
                break;
            case "D":
            case "DD":
                null != t && (i[Lt] = C(t));
                break;
            case "Do":
                null != t && (i[Lt] = C(parseInt(t.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != t && (n._dayOfYear = C(t));
                break;
            case "YY":
                i[Ct] = bt.parseTwoDigitYear(t);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                i[Ct] = C(t);
                break;
            case "a":
            case "A":
                n._isPm = n._locale.isPM(t);
                break;
            case "h":
            case "hh":
                n._pf.bigHour = !0;
            case "H":
            case "HH":
                i[At] = C(t);
                break;
            case "m":
            case "mm":
                i[Ot] = C(t);
                break;
            case "s":
            case "ss":
                i[Mt] = C(t);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                i[_t] = C(1e3 * ("0." + t));
                break;
            case "x":
                n._d = new Date(C(t));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(t));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = U(t);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                r = n._locale.weekdaysParse(t), null != r ? (n._w = n._w || {}, n._w.d = r) : n._pf.invalidWeekday = t;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                e = e.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = C(t));
                break;
            case "gg":
            case "GG":
                n._w = n._w || {}, n._w[e] = bt.parseTwoDigitYear(t)
        }
    }

    function W(e) {
        var n, r, i, s, o, u, a;
        n = e._w, null != n.GG || null != n.W || null != n.E ? (o = 1, u = 4, r = t(n.GG, e._a[Ct], ut(bt(), 1, 4).year), i = t(n.W, 1), s = t(n.E, 1)) : (o = e._locale._week.dow, u = e._locale._week.doy, r = t(n.gg, e._a[Ct], ut(bt(), o, u).year), i = t(n.w, 1), null != n.d ? (s = n.d, o > s && ++i) : s = null != n.e ? n.e + o : o), a = at(r, i, s, u, o), e._a[Ct] = a.year, e._dayOfYear = a.dayOfYear
    }

    function X(e) {
        var n, r, i, s, o = [];
        if (!e._d) {
            for (i = $(e), e._w && null == e._a[Lt] && null == e._a[kt] && W(e), e._dayOfYear && (s = t(e._a[Ct], i[Ct]), e._dayOfYear > A(s) && (e._pf._overflowDayOfYear = !0), r = rt(s, 0, e._dayOfYear), e._a[kt] = r.getUTCMonth(), e._a[Lt] = r.getUTCDate()), n = 0; 3 > n && null == e._a[n]; ++n) e._a[n] = o[n] = i[n];
            for (; 7 > n; n++) e._a[n] = o[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
            24 === e._a[At] && 0 === e._a[Ot] && 0 === e._a[Mt] && 0 === e._a[_t] && (e._nextDay = !0, e._a[At] = 0), e._d = (e._useUTC ? rt : nt).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm), e._nextDay && (e._a[At] = 24)
        }
    }

    function V(e) {
        var t;
        e._d || (t = T(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], X(e))
    }

    function $(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function J(t) {
        if (t._f === bt.ISO_8601) return void Y(t);
        t._a = [], t._pf.empty = !0;
        var n, r, i, s, o, u = "" + t._i,
            a = u.length,
            f = 0;
        for (i = q(t._f, t._locale).match(It) || [], n = 0; n < i.length; n++) s = i[n], r = (u.match(R(s, t)) || [])[0], r && (o = u.substr(0, u.indexOf(r)), o.length > 0 && t._pf.unusedInput.push(o), u = u.slice(u.indexOf(r) + r.length), f += r.length), mn[s] ? (r ? t._pf.empty = !1 : t._pf.unusedTokens.push(s), z(s, r, t)) : t._strict && !r && t._pf.unusedTokens.push(s);
        t._pf.charsLeftOver = a - f, u.length > 0 && t._pf.unusedInput.push(u), t._pf.bigHour === !0 && t._a[At] <= 12 && (t._pf.bigHour = e), t._isPm && t._a[At] < 12 && (t._a[At] += 12), t._isPm === !1 && 12 === t._a[At] && (t._a[At] = 0), X(t), M(t)
    }

    function K(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
            return t || n || r || i
        })
    }

    function Q(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function G(e) {
        var t, n, i, s, o;
        if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
        for (s = 0; s < e._f.length; s++) o = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = r(), t._f = e._f[s], J(t), _(t) && (o += t._pf.charsLeftOver, o += 10 * t._pf.unusedTokens.length, t._pf.score = o, (null == i || i > o) && (i = o, n = t));
        h(e, n || t)
    }

    function Y(e) {
        var t, n, r = e._i,
            i = rn.exec(r);
        if (i) {
            for (e._pf.iso = !0, t = 0, n = on.length; n > t; t++)
                if (on[t][1].exec(r)) {
                    e._f = on[t][0] + (i[6] || " ");
                    break
                }
            for (t = 0, n = un.length; n > t; t++)
                if (un[t][1].exec(r)) {
                    e._f += un[t][0];
                    break
                }
            r.match($t) && (e._f += "Z"), J(e)
        } else e._isValid = !1
    }

    function Z(e) {
        Y(e), e._isValid === !1 && (delete e._isValid, bt.createFromInputFallback(e))
    }

    function et(e, t) {
        var n, r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r
    }

    function tt(t) {
        var n, r = t._i;
        r === e ? t._d = new Date : E(r) ? t._d = new Date(+r) : null !== (n = Bt.exec(r)) ? t._d = new Date(+n[1]) : "string" == typeof r ? Z(t) : w(r) ? (t._a = et(r.slice(0), function(e) {
            return parseInt(e, 10)
        }), X(t)) : "object" == typeof r ? V(t) : "number" == typeof r ? t._d = new Date(r) : bt.createFromInputFallback(t)
    }

    function nt(e, t, n, r, i, s, o) {
        var u = new Date(e, t, n, r, i, s, o);
        return 1970 > e && u.setFullYear(e), u
    }

    function rt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }

    function it(e, t) {
        if ("string" == typeof e)
            if (isNaN(e)) {
                if (e = t.weekdaysParse(e), "number" != typeof e) return null
            } else e = parseInt(e, 10);
        return e
    }

    function st(e, t, n, r, i) {
        return i.relativeTime(t || 1, !! n, e, r)
    }

    function ot(e, t, n) {
        var r = bt.duration(e).abs(),
            i = Tt(r.as("s")),
            s = Tt(r.as("m")),
            o = Tt(r.as("h")),
            u = Tt(r.as("d")),
            a = Tt(r.as("M")),
            f = Tt(r.as("y")),
            l = i < pn.s && ["s", i] || 1 === s && ["m"] || s < pn.m && ["mm", s] || 1 === o && ["h"] || o < pn.h && ["hh", o] || 1 === u && ["d"] || u < pn.d && ["dd", u] || 1 === a && ["M"] || a < pn.M && ["MM", a] || 1 === f && ["y"] || ["yy", f];
        return l[2] = t, l[3] = +e > 0, l[4] = n, st.apply({}, l)
    }

    function ut(e, t, n) {
        var r, i = n - t,
            s = n - e.day();
        return s > i && (s -= 7), i - 7 > s && (s += 7), r = bt(e).add(s, "d"), {
            week: Math.ceil(r.dayOfYear() / 7),
            year: r.year()
        }
    }

    function at(e, t, n, r, i) {
        var s, o, u = rt(e, 0, 1).getUTCDay();
        return u = 0 === u ? 7 : u, n = null != n ? n : i, s = i - u + (u > r ? 7 : 0) - (i > u ? 7 : 0), o = 7 * (t - 1) + (n - i) + s + 1, {
            year: o > 0 ? e : e - 1,
            dayOfYear: o > 0 ? o : A(e - 1) + o
        }
    }

    function ft(t) {
        var n, r = t._i,
            i = t._f;
        return t._locale = t._locale || bt.localeData(t._l), null === r || i === e && "" === r ? bt.invalid({
            nullInput: !0
        }) : ("string" == typeof r && (t._i = r = t._locale.preparse(r)), bt.isMoment(r) ? new l(r, !0) : (i ? w(i) ? G(t) : J(t) : tt(t), n = new l(t), n._nextDay && (n.add(1, "d"), n._nextDay = e), n))
    }

    function lt(e, t) {
        var n, r;
        if (1 === t.length && w(t[0]) && (t = t[0]), !t.length) return bt();
        for (n = t[0], r = 1; r < t.length; ++r) t[r][e](n) && (n = t[r]);
        return n
    }

    function ct(e, t) {
        var n;
        return "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), k(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function ht(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function pt(e, t, n) {
        return "Month" === t ? ct(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function dt(e, t) {
        return function(n) {
            return null != n ? (pt(this, e, n), bt.updateOffset(this, t), this) : ht(this, e)
        }
    }

    function vt(e) {
        return 400 * e / 146097
    }

    function mt(e) {
        return 146097 * e / 400
    }

    function gt(e) {
        bt.duration.fn[e] = function() {
            return this._data[e]
        }
    }

    function yt(e) {
        "undefined" == typeof ender && (wt = xt.moment, xt.moment = e ? s("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", bt) : bt)
    }
    for (var bt, wt, Et, St = "2.8.4", xt = "undefined" != typeof global ? global : this, Tt = Math.round, Nt = Object.prototype.hasOwnProperty, Ct = 0, kt = 1, Lt = 2, At = 3, Ot = 4, Mt = 5, _t = 6, Dt = {}, Pt = [], Ht = "undefined" != typeof module && module && module.exports, Bt = /^\/?Date\((\-?\d+)/i, jt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ft = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, It = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, qt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rt = /\d\d?/, Ut = /\d{1,3}/, zt = /\d{1,4}/, Wt = /[+\-]?\d{1,6}/, Xt = /\d+/, Vt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, $t = /Z|[\+\-]\d\d:?\d\d/gi, Jt = /T/i, Kt = /[\+\-]?\d+/, Qt = /[\+\-]?\d+(\.\d{1,3})?/, Gt = /\d/, Yt = /\d\d/, Zt = /\d{3}/, en = /\d{4}/, tn = /[+-]?\d{6}/, nn = /[+-]?\d+/, rn = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, sn = "YYYY-MM-DDTHH:mm:ssZ", on = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], un = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], an = /([\+\-]|\d\d)/gi, fn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), ln = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, cn = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, hn = {}, pn = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, dn = "DDD w W M D d".split(" "), vn = "M D H h m s w W".split(" "), mn = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(e) {
                return this.localeData().monthsShort(this, e)
            },
            MMMM: function(e) {
                return this.localeData().months(this, e)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(e) {
                return this.localeData().weekdaysMin(this, e)
            },
            ddd: function(e) {
                return this.localeData().weekdaysShort(this, e)
            },
            dddd: function(e) {
                return this.localeData().weekdays(this, e)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return v(this.year() % 100, 2)
            },
            YYYY: function() {
                return v(this.year(), 4)
            },
            YYYYY: function() {
                return v(this.year(), 5)
            },
            YYYYYY: function() {
                var e = this.year(),
                    t = e >= 0 ? "+" : "-";
                return t + v(Math.abs(e), 6)
            },
            gg: function() {
                return v(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return v(this.weekYear(), 4)
            },
            ggggg: function() {
                return v(this.weekYear(), 5)
            },
            GG: function() {
                return v(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return v(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return v(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return C(this.milliseconds() / 100)
            },
            SS: function() {
                return v(C(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return v(this.milliseconds(), 3)
            },
            SSSS: function() {
                return v(this.milliseconds(), 3)
            },
            Z: function() {
                var e = -this.zone(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + v(C(e / 60), 2) + ":" + v(C(e) % 60, 2)
            },
            ZZ: function() {
                var e = -this.zone(),
                    t = "+";
                return 0 > e && (e = -e, t = "-"), t + v(C(e / 60), 2) + v(C(e) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            x: function() {
                return this.valueOf()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, gn = {}, yn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; dn.length;) Et = dn.pop(), mn[Et + "o"] = a(mn[Et], Et);
    for (; vn.length;) Et = vn.pop(), mn[Et + Et] = u(mn[Et], 2);
    mn.DDDD = u(mn.DDD, 3), h(f.prototype, {
        set: function(e) {
            var t, n;
            for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e, t, n) {
            var r, i, s;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
                if (i = bt.utc([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                if (!n && this._monthsParse[r].test(e)) return r
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var t, n, r;
            for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++)
                if (this._weekdaysParse[t] || (n = bt([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        isPM: function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t, n) {
            var r = this._calendar[e];
            return "function" == typeof r ? r.apply(t, [n]) : r
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, r) {
            var i = this._relativeTime[n];
            return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return ut(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), bt = function(t, n, i, s) {
        var o;
        return "boolean" == typeof i && (s = i, i = e), o = {}, o._isAMomentObject = !0, o._i = t, o._f = n, o._l = i, o._strict = s, o._isUTC = !1, o._pf = r(), ft(o)
    }, bt.suppressDeprecationWarnings = !1, bt.createFromInputFallback = s("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), bt.min = function() {
        var e = [].slice.call(arguments, 0);
        return lt("isBefore", e)
    }, bt.max = function() {
        var e = [].slice.call(arguments, 0);
        return lt("isAfter", e)
    }, bt.utc = function(t, n, i, s) {
        var o;
        return "boolean" == typeof i && (s = i, i = e), o = {}, o._isAMomentObject = !0, o._useUTC = !0, o._isUTC = !0, o._l = i, o._i = t, o._f = n, o._strict = s, o._pf = r(), ft(o).utc()
    }, bt.unix = function(e) {
        return bt(1e3 * e)
    }, bt.duration = function(e, t) {
        var r, i, s, o, u = e,
            a = null;
        return bt.isDuration(e) ? u = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (u = {}, t ? u[t] = e : u.milliseconds = e) : (a = jt.exec(e)) ? (r = "-" === a[1] ? -1 : 1, u = {
            y: 0,
            d: C(a[Lt]) * r,
            h: C(a[At]) * r,
            m: C(a[Ot]) * r,
            s: C(a[Mt]) * r,
            ms: C(a[_t]) * r
        }) : (a = Ft.exec(e)) ? (r = "-" === a[1] ? -1 : 1, s = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * r
        }, u = {
            y: s(a[2]),
            M: s(a[3]),
            d: s(a[4]),
            h: s(a[5]),
            m: s(a[6]),
            s: s(a[7]),
            w: s(a[8])
        }) : "object" == typeof u && ("from" in u || "to" in u) && (o = g(bt(u.from), bt(u.to)), u = {}, u.ms = o.milliseconds, u.M = o.months), i = new c(u), bt.isDuration(e) && n(e, "_locale") && (i._locale = e._locale), i
    }, bt.version = St, bt.defaultFormat = sn, bt.ISO_8601 = function() {}, bt.momentProperties = Pt, bt.updateOffset = function() {}, bt.relativeTimeThreshold = function(t, n) {
        return pn[t] === e ? !1 : n === e ? pn[t] : (pn[t] = n, !0)
    }, bt.lang = s("moment.lang is deprecated. Use moment.locale instead.", function(e, t) {
        return bt.locale(e, t)
    }), bt.locale = function(e, t) {
        var n;
        return e && (n = "undefined" != typeof t ? bt.defineLocale(e, t) : bt.localeData(e), n && (bt.duration._locale = bt._locale = n)), bt._locale._abbr
    }, bt.defineLocale = function(e, t) {
        return null !== t ? (t.abbr = e, Dt[e] || (Dt[e] = new f), Dt[e].set(t), bt.locale(e), Dt[e]) : (delete Dt[e], null)
    }, bt.langData = s("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
        return bt.localeData(e)
    }), bt.localeData = function(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return bt._locale;
        if (!w(e)) {
            if (t = H(e)) return t;
            e = [e]
        }
        return P(e)
    }, bt.isMoment = function(e) {
        return e instanceof l || null != e && n(e, "_isAMomentObject")
    }, bt.isDuration = function(e) {
        return e instanceof c
    };
    for (Et = yn.length - 1; Et >= 0; --Et) N(yn[Et]);
    bt.normalizeUnits = function(e) {
        return x(e)
    }, bt.invalid = function(e) {
        var t = bt.utc(0 / 0);
        return null != e ? h(t._pf, e) : t._pf.userInvalidated = !0, t
    }, bt.parseZone = function() {
        return bt.apply(null, arguments).parseZone()
    }, bt.parseTwoDigitYear = function(e) {
        return C(e) + (C(e) > 68 ? 1900 : 2e3)
    }, h(bt.fn = l.prototype, {
        clone: function() {
            return bt(this)
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var e = bt(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : I(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return _(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && S(this._a, (this._isUTC ? bt.utc(this._a) : bt(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return h({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(e) {
            return this.zone(0, e)
        },
        local: function(e) {
            return this._isUTC && (this.zone(0, e), this._isUTC = !1, e && this.add(this._dateTzOffset(), "m")), this
        },
        format: function(e) {
            var t = I(this, e || bt.defaultFormat);
            return this.localeData().postformat(t)
        },
        add: y(1, "add"),
        subtract: y(-1, "subtract"),
        diff: function(e, t, n) {
            var r, i, s, o = B(e, this),
                u = 6e4 * (this.zone() - o.zone());
            return t = x(t), "year" === t || "month" === t ? (r = 432e5 * (this.daysInMonth() + o.daysInMonth()), i = 12 * (this.year() - o.year()) + (this.month() - o.month()), s = this - bt(this).startOf("month") - (o - bt(o).startOf("month")), s -= 6e4 * (this.zone() - bt(this).startOf("month").zone() - (o.zone() - bt(o).startOf("month").zone())), i += s / r, "year" === t && (i /= 12)) : (r = this - o, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - u) / 864e5 : "week" === t ? (r - u) / 6048e5 : r), n ? i : d(i)
        },
        from: function(e, t) {
            return bt.duration({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t)
        },
        fromNow: function(e) {
            return this.from(bt(), e)
        },
        calendar: function(e) {
            var t = e || bt(),
                n = B(t, this).startOf("day"),
                r = this.diff(n, "days", !0),
                i = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(i, this, bt(t)))
        },
        isLeapYear: function() {
            return O(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = it(e, this.localeData()), this.add(e - t, "d")) : t
        },
        month: dt("Month", !0),
        startOf: function(e) {
            switch (e = x(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(t) {
            return t = x(t), t === e || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
        },
        isAfter: function(e, t) {
            var n;
            return t = x("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = bt.isMoment(e) ? e : bt(e), +this > +e) : (n = bt.isMoment(e) ? +e : +bt(e), n < +this.clone().startOf(t))
        },
        isBefore: function(e, t) {
            var n;
            return t = x("undefined" != typeof t ? t : "millisecond"), "millisecond" === t ? (e = bt.isMoment(e) ? e : bt(e), +e > +this) : (n = bt.isMoment(e) ? +e : +bt(e), +this.clone().endOf(t) < n)
        },
        isSame: function(e, t) {
            var n;
            return t = x(t || "millisecond"), "millisecond" === t ? (e = bt.isMoment(e) ? e : bt(e), +this === +e) : (n = +bt(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
        },
        min: s("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = bt.apply(null, arguments), this > e ? this : e
        }),
        max: s("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
            return e = bt.apply(null, arguments), e > this ? this : e
        }),
        zone: function(e, t) {
            var n, r = this._offset || 0;
            return null == e ? this._isUTC ? r : this._dateTzOffset() : ("string" == typeof e && (e = U(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (n = this._dateTzOffset()), this._offset = e, this._isUTC = !0, null != n && this.subtract(n, "m"), r !== e && (!t || this._changeInProgress ? b(this, bt.duration(r - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, bt.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function(e) {
            return e = e ? bt(e).zone() : 0, (this.zone() - e) % 60 === 0
        },
        daysInMonth: function() {
            return k(this.year(), this.month())
        },
        dayOfYear: function(e) {
            var t = Tt((bt(this).startOf("day") - bt(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        },
        quarter: function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        },
        weekYear: function(e) {
            var t = ut(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == e ? t : this.add(e - t, "y")
        },
        isoWeekYear: function(e) {
            var t = ut(this, 1, 4).year;
            return null == e ? t : this.add(e - t, "y")
        },
        week: function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        isoWeek: function(e) {
            var t = ut(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        },
        weekday: function(e) {
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        },
        isoWeekday: function(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        isoWeeksInYear: function() {
            return L(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var e = this.localeData()._week;
            return L(this.year(), e.dow, e.doy)
        },
        get: function(e) {
            return e = x(e), this[e]()
        },
        set: function(e, t) {
            return e = x(e), "function" == typeof this[e] && this[e](t), this
        },
        locale: function(t) {
            var n;
            return t === e ? this._locale._abbr : (n = bt.localeData(t), null != n && (this._locale = n), this)
        },
        lang: s("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return t === e ? this.localeData() : this.locale(t)
        }),
        localeData: function() {
            return this._locale
        },
        _dateTzOffset: function() {
            return 15 * Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), bt.fn.millisecond = bt.fn.milliseconds = dt("Milliseconds", !1), bt.fn.second = bt.fn.seconds = dt("Seconds", !1), bt.fn.minute = bt.fn.minutes = dt("Minutes", !1), bt.fn.hour = bt.fn.hours = dt("Hours", !0), bt.fn.date = dt("Date", !0), bt.fn.dates = s("dates accessor is deprecated. Use date instead.", dt("Date", !0)), bt.fn.year = dt("FullYear", !0), bt.fn.years = s("years accessor is deprecated. Use year instead.", dt("FullYear", !0)), bt.fn.days = bt.fn.day, bt.fn.months = bt.fn.month, bt.fn.weeks = bt.fn.week, bt.fn.isoWeeks = bt.fn.isoWeek, bt.fn.quarters = bt.fn.quarter, bt.fn.toJSON = bt.fn.toISOString, h(bt.duration.fn = c.prototype, {
        _bubble: function() {
            var e, t, n, r = this._milliseconds,
                i = this._days,
                s = this._months,
                o = this._data,
                u = 0;
            o.milliseconds = r % 1e3, e = d(r / 1e3), o.seconds = e % 60, t = d(e / 60), o.minutes = t % 60, n = d(t / 60), o.hours = n % 24, i += d(n / 24), u = d(vt(i)), i -= d(mt(u)), s += d(i / 30), i %= 30, u += d(s / 12), s %= 12, o.days = i, o.months = s, o.years = u
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function() {
            return d(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
        },
        humanize: function(e) {
            var t = ot(this, !e, this.localeData());
            return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
        },
        add: function(e, t) {
            var n = bt.duration(e, t);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(e, t) {
            var n = bt.duration(e, t);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(e) {
            return e = x(e), this[e.toLowerCase() + "s"]()
        },
        as: function(e) {
            var t, n;
            if (e = x(e), "month" === e || "year" === e) return t = this._days + this._milliseconds / 864e5, n = this._months + 12 * vt(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(mt(this._months / 12)), e) {
                case "week":
                    return t / 7 + this._milliseconds / 6048e5;
                case "day":
                    return t + this._milliseconds / 864e5;
                case "hour":
                    return 24 * t + this._milliseconds / 36e5;
                case "minute":
                    return 24 * t * 60 + this._milliseconds / 6e4;
                case "second":
                    return 24 * t * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + e)
            }
        },
        lang: bt.fn.lang,
        locale: bt.fn.locale,
        toIsoString: s("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var e = Math.abs(this.years()),
                t = Math.abs(this.months()),
                n = Math.abs(this.days()),
                r = Math.abs(this.hours()),
                i = Math.abs(this.minutes()),
                s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
        },
        localeData: function() {
            return this._locale
        }
    }), bt.duration.fn.toString = bt.duration.fn.toISOString;
    for (Et in fn) n(fn, Et) && gt(Et.toLowerCase());
    bt.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    }, bt.duration.fn.asSeconds = function() {
        return this.as("s")
    }, bt.duration.fn.asMinutes = function() {
        return this.as("m")
    }, bt.duration.fn.asHours = function() {
        return this.as("h")
    }, bt.duration.fn.asDays = function() {
        return this.as("d")
    }, bt.duration.fn.asWeeks = function() {
        return this.as("weeks")
    }, bt.duration.fn.asMonths = function() {
        return this.as("M")
    }, bt.duration.fn.asYears = function() {
        return this.as("y")
    }, bt.locale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10,
                n = 1 === C(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), Ht ? module.exports = bt : "function" == typeof define && define.amd ? (define("moment", function(e, t, n) {
        return n.config && n.config() && n.config().noGlobal === !0 && (xt.moment = wt), bt
    }), yt(!0)) : yt()
}).call(this);
(function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function(e, t) {
    function n(e, t) {
        return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
    }

    function r(e, t) {
        var n = t.longDateFormat("L");
        return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? n += " ddd" : n = "ddd " + n, n
    }

    function i(e) {
        s(_t, e)
    }

    function s(t) {
        function n(n, r) {
            e.isPlainObject(r) && e.isPlainObject(t[n]) && !o(n) ? t[n] = s({}, t[n], r) : void 0 !== r && (t[n] = r)
        }
        for (var r = 1; arguments.length > r; r++) e.each(arguments[r], n);
        return t
    }

    function o(e) {
        return /(Time|Duration)$/.test(e)
    }

    function u(n, r) {
        function i(e) {
            var n = t.localeData || t.langData;
            return n.call(t, e) || n.call(t, "en")
        }

        function o(e) {
            nt ? c() && (v(), p(e)) : u()
        }

        function u() {
            rt = G.theme ? "ui" : "fc", n.addClass("fc"), G.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), G.theme ? n.addClass("ui-widget") : n.addClass("fc-unthemed"), nt = e("<div class='fc-view-container'/>").prependTo(n), et = new a(K, G), tt = et.render(), tt && n.prepend(tt), h(G.defaultView), G.handleWindowResize && (ot = H(g, G.windowResizeDelay), e(window).resize(ot))
        }

        function l() {
            it && it.destroy(), et.destroy(), nt.remove(), n.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), e(window).unbind("resize", ot)
        }

        function c() {
            return n.is(":visible")
        }

        function h(e) {
            p(0, e)
        }

        function p(t, n) {
            ct++, it && n && it.name !== n && (et.deactivateButton(it.name), U(), it.start && it.destroy(), it.el.remove(), it = null), !it && n && (it = new Bt[n](K), it.el = e("<div class='fc-view fc-" + n + "-view' />").appendTo(nt), et.activateButton(n)), it && (t && (ut = it.incrementDate(ut, t)), it.start && !t && ut.isWithin(it.intervalStart, it.intervalEnd) || c() && (U(), it.start && it.destroy(), it.render(ut), z(), N(), C(), E())), z(), ct--
        }

        function d(e) {
            return c() ? (e && m(), ct++, it.updateSize(!0), ct--, !0) : void 0
        }

        function v() {
            c() && m()
        }

        function m() {
            st = "number" == typeof G.contentHeight ? G.contentHeight : "number" == typeof G.height ? G.height - (tt ? tt.outerHeight(!0) : 0) : Math.round(nt.width() / Math.max(G.aspectRatio, .5))
        }

        function g(e) {
            !ct && e.target === window && it.start && d(!0) && it.trigger("windowResize", lt)
        }

        function y() {
            w(), S()
        }

        function b() {
            c() && (U(), it.destroyEvents(), it.renderEvents(ht), z())
        }

        function w() {
            U(), it.destroyEvents(), z()
        }

        function E() {
            !G.lazyFetching || at(it.start, it.end) ? S() : b()
        }

        function S() {
            ft(it.start, it.end)
        }

        function x(e) {
            ht = e, b()
        }

        function T() {
            b()
        }

        function N() {
            et.updateTitle(it.title)
        }

        function C() {
            var e = K.getNow();
            e.isWithin(it.intervalStart, it.intervalEnd) ? et.disableButton("today") : et.enableButton("today")
        }

        function k(e, t) {
            e = K.moment(e), t = t ? K.moment(t) : e.hasTime() ? e.clone().add(K.defaultTimedEventDuration) : e.clone().add(K.defaultAllDayEventDuration), it.select(e, t)
        }

        function A() {
            it && it.unselect()
        }

        function O() {
            p(-1)
        }

        function M() {
            p(1)
        }

        function _() {
            ut.add(-1, "years"), p()
        }

        function P() {
            ut.add(1, "years"), p()
        }

        function B() {
            ut = K.getNow(), p()
        }

        function j(e) {
            ut = K.moment(e), p()
        }

        function F(e) {
            ut.add(t.duration(e)), p()
        }

        function I(e, t) {
            var n, r;
            t && void 0 !== Bt[t] || (t = t || "day", n = et.getViewsWithButtons().join(" "), r = n.match(RegExp("\\w+" + D(t))), r || (r = n.match(/\w+Day/)), t = r ? r[0] : "agendaDay"), ut = e, h(t)
        }

        function q() {
            return ut.clone()
        }

        function U() {
            nt.css({
                width: "100%",
                height: nt.height(),
                overflow: "hidden"
            })
        }

        function z() {
            nt.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function X() {
            return K
        }

        function V() {
            return it
        }

        function $(e, t) {
            return void 0 === t ? G[e] : (("height" == e || "contentHeight" == e || "aspectRatio" == e) && (G[e] = t, d(!0)), void 0)
        }

        function J(e, t) {
            return G[e] ? G[e].apply(t || lt, Array.prototype.slice.call(arguments, 2)) : void 0
        }
        var K = this;
        r = r || {};
        var Q, G = s({}, _t, r);
        Q = G.lang in Dt ? Dt[G.lang] : Dt[_t.lang], Q && (G = s({}, _t, Q, r)), G.isRTL && (G = s({}, _t, Pt, Q || {}, r)), K.options = G, K.render = o, K.destroy = l, K.refetchEvents = y, K.reportEvents = x, K.reportEventChange = T, K.rerenderEvents = b, K.changeView = h, K.select = k, K.unselect = A, K.prev = O, K.next = M, K.prevYear = _, K.nextYear = P, K.today = B, K.gotoDate = j, K.incrementDate = F, K.zoomTo = I, K.getDate = q, K.getCalendar = X, K.getView = V, K.option = $, K.trigger = J;
        var Y = L(i(G.lang));
        if (G.monthNames && (Y._months = G.monthNames), G.monthNamesShort && (Y._monthsShort = G.monthNamesShort), G.dayNames && (Y._weekdays = G.dayNames), G.dayNamesShort && (Y._weekdaysShort = G.dayNamesShort), null != G.firstDay) {
            var Z = L(Y._week);
            Z.dow = G.firstDay, Y._week = Z
        }
        K.defaultAllDayEventDuration = t.duration(G.defaultAllDayEventDuration), K.defaultTimedEventDuration = t.duration(G.defaultTimedEventDuration), K.moment = function() {
            var e;
            return "local" === G.timezone ? (e = Ht.moment.apply(null, arguments), e.hasTime() && e.local()) : e = "UTC" === G.timezone ? Ht.moment.utc.apply(null, arguments) : Ht.moment.parseZone.apply(null, arguments), "_locale" in e ? e._locale = Y : e._lang = Y, e
        }, K.getIsAmbigTimezone = function() {
            return "local" !== G.timezone && "UTC" !== G.timezone
        }, K.rezoneDate = function(e) {
            return K.moment(e.toArray())
        }, K.getNow = function() {
            var e = G.now;
            return "function" == typeof e && (e = e()), K.moment(e)
        }, K.calculateWeekNumber = function(e) {
            var t = G.weekNumberCalculation;
            return "function" == typeof t ? t(e) : "local" === t ? e.week() : "ISO" === t.toUpperCase() ? e.isoWeek() : void 0
        }, K.getEventEnd = function(e) {
            return e.end ? e.end.clone() : K.getDefaultEventEnd(e.allDay, e.start)
        }, K.getDefaultEventEnd = function(e, t) {
            var n = t.clone();
            return e ? n.stripTime().add(K.defaultAllDayEventDuration) : n.add(K.defaultTimedEventDuration), K.getIsAmbigTimezone() && n.stripZone(), n
        }, K.formatRange = function(e, t, n) {
            return "function" == typeof n && (n = n.call(K, G, Y)), W(e, t, n, null, G.isRTL)
        }, K.formatDate = function(e, t) {
            return "function" == typeof t && (t = t.call(K, G, Y)), R(e, t)
        }, f.call(K, G);
        var et, tt, nt, rt, it, st, ot, ut, at = K.isFetchNeeded,
            ft = K.fetchEvents,
            lt = n[0],
            ct = 0,
            ht = [];
        ut = null != G.defaultDate ? K.moment(G.defaultDate) : K.getNow(), K.getSuggestedViewHeight = function() {
            return void 0 === st && v(), st
        }, K.isHeightAuto = function() {
            return "auto" === G.contentHeight || "auto" === G.height
        }
    }

    function a(t, n) {
        function r() {
            var t = n.header;
            return p = n.theme ? "ui" : "fc", t ? d = e("<div class='fc-toolbar'/>").append(s("left")).append(s("right")).append(s("center")).append('<div class="fc-clear"/>') : void 0
        }

        function i() {
            d.remove()
        }

        function s(r) {
            var i = e('<div class="fc-' + r + '"/>'),
                s = n.header[r];
            return s && e.each(s.split(" "), function() {
                var r, s = e(),
                    o = !0;
                e.each(this.split(","), function(r, i) {
                    var u, a, f, l, c, h, d, m;
                    "title" == i ? (s = s.add(e("<h2>&nbsp;</h2>")), o = !1) : (t[i] ? u = function() {
                        t[i]()
                    } : Bt[i] && (u = function() {
                        t.changeView(i)
                    }, v.push(i)), u && (a = T(n.themeButtonIcons, i), f = T(n.buttonIcons, i), l = T(n.defaultButtonText, i), c = T(n.buttonText, i), h = c ? M(c) : a && n.theme ? "<span class='ui-icon ui-icon-" + a + "'></span>" : f && !n.theme ? "<span class='fc-icon fc-icon-" + f + "'></span>" : M(l || i), d = ["fc-" + i + "-button", p + "-button", p + "-state-default"], m = e('<button type="button" class="' + d.join(" ") + '">' + h + "</button>").click(function() {
                        m.hasClass(p + "-state-disabled") || (u(), (m.hasClass(p + "-state-active") || m.hasClass(p + "-state-disabled")) && m.removeClass(p + "-state-hover"))
                    }).mousedown(function() {
                        m.not("." + p + "-state-active").not("." + p + "-state-disabled").addClass(p + "-state-down")
                    }).mouseup(function() {
                        m.removeClass(p + "-state-down")
                    }).hover(function() {
                        m.not("." + p + "-state-active").not("." + p + "-state-disabled").addClass(p + "-state-hover")
                    }, function() {
                        m.removeClass(p + "-state-hover").removeClass(p + "-state-down")
                    }), s = s.add(m)))
                }), o && s.first().addClass(p + "-corner-left").end().last().addClass(p + "-corner-right").end(), s.length > 1 ? (r = e("<div/>"), o && r.addClass("fc-button-group"), r.append(s), i.append(r)) : i.append(s)
            }), i
        }

        function o(e) {
            d.find("h2").text(e)
        }

        function u(e) {
            d.find(".fc-" + e + "-button").addClass(p + "-state-active")
        }

        function a(e) {
            d.find(".fc-" + e + "-button").removeClass(p + "-state-active")
        }

        function f(e) {
            d.find(".fc-" + e + "-button").attr("disabled", "disabled").addClass(p + "-state-disabled")
        }

        function l(e) {
            d.find(".fc-" + e + "-button").removeAttr("disabled").removeClass(p + "-state-disabled")
        }

        function c() {
            return v
        }
        var h = this;
        h.render = r, h.destroy = i, h.updateTitle = o, h.activateButton = u, h.deactivateButton = a, h.disableButton = f, h.enableButton = l, h.getViewsWithButtons = c;
        var p, d = e(),
            v = []
    }

    function f(n) {
        function r(e, t) {
            return !F || e.clone().stripZone() < F.clone().stripZone() || t.clone().stripZone() > I.clone().stripZone()
        }

        function i(e, t) {
            F = e, I = t, K = [];
            var n = ++V,
                r = X.length;
            $ = r;
            for (var i = 0; r > i; i++) s(X[i], n)
        }

        function s(t, n) {
            o(t, function(r) {
                var i, s, o, u = e.isArray(t.events);
                if (n == V) {
                    if (r)
                        for (i = 0; r.length > i; i++) s = r[i], o = u ? s : w(s, t), o && K.push.apply(K, S(o));
                    $--, $ || U(K)
                }
            })
        }

        function o(t, r) {
            var i, s, u = Ht.sourceFetchers;
            for (i = 0; u.length > i; i++) {
                if (s = u[i].call(j, t, F.clone(), I.clone(), n.timezone, r), s === !0) return;
                if ("object" == typeof s) return o(s, r), void 0
            }
            var a = t.events;
            if (a) e.isFunction(a) ? (y(), a.call(j, F.clone(), I.clone(), n.timezone, function(e) {
                r(e), b()
            })) : e.isArray(a) ? r(a) : r();
            else {
                var f = t.url;
                if (f) {
                    var l, c = t.success,
                        h = t.error,
                        p = t.complete;
                    l = e.isFunction(t.data) ? t.data() : t.data;
                    var d = e.extend({}, l || {}),
                        v = O(t.startParam, n.startParam),
                        m = O(t.endParam, n.endParam),
                        g = O(t.timezoneParam, n.timezoneParam);
                    v && (d[v] = F.format()), m && (d[m] = I.format()), n.timezone && "local" != n.timezone && (d[g] = n.timezone), y(), e.ajax(e.extend({}, jt, t, {
                        data: d,
                        success: function(t) {
                            t = t || [];
                            var n = A(c, this, arguments);
                            e.isArray(n) && (t = n), r(t)
                        },
                        error: function() {
                            A(h, this, arguments), r()
                        },
                        complete: function() {
                            A(p, this, arguments), b()
                        }
                    }))
                } else r()
            }
        }

        function u(e) {
            var t = a(e);
            t && (X.push(t), $++, s(t, V))
        }

        function a(t) {
            var n, r, i = Ht.sourceNormalizers;
            if (e.isFunction(t) || e.isArray(t) ? n = {
                events: t
            } : "string" == typeof t ? n = {
                url: t
            } : "object" == typeof t && (n = e.extend({}, t)), n) {
                for (n.className ? "string" == typeof n.className && (n.className = n.className.split(/\s+/)) : n.className = [], e.isArray(n.events) && (n.origArray = n.events, n.events = e.map(n.events, function(e) {
                    return w(e, n)
                })), r = 0; i.length > r; r++) i[r].call(j, n);
                return n
            }
        }

        function f(t) {
            X = e.grep(X, function(e) {
                return !c(e, t)
            }), K = e.grep(K, function(e) {
                return !c(e.source, t)
            }), U(K)
        }

        function c(e, t) {
            return e && t && h(e) == h(t)
        }

        function h(e) {
            return ("object" == typeof e ? e.origArray || e.googleCalendarId || e.url || e.events : null) || e
        }

        function p(e) {
            e.start = j.moment(e.start), e.end && (e.end = j.moment(e.end)), x(e), d(e), U(K)
        }

        function d(e) {
            var t, n, r, i;
            for (t = 0; K.length > t; t++)
                if (n = K[t], n._id == e._id && n !== e)
                    for (r = 0; Q.length > r; r++) i = Q[r], void 0 !== e[i] && (n[i] = e[i])
        }

        function v(e, t) {
            var n, r, i, s = w(e);
            if (s) {
                for (n = S(s), r = 0; n.length > r; r++) i = n[r], i.source || (t && (W.events.push(i), i.source = W), K.push(i));
                return U(K), n
            }
            return []
        }

        function m(t) {
            var n, r;
            for (null == t ? t = function() {
                return !0
            } : e.isFunction(t) || (n = t + "", t = function(e) {
                return e._id == n
            }), K = e.grep(K, t, !0), r = 0; X.length > r; r++) e.isArray(X[r].events) && (X[r].events = e.grep(X[r].events, t, !0));
            U(K)
        }

        function g(t) {
            return e.isFunction(t) ? e.grep(K, t) : null != t ? (t += "", e.grep(K, function(e) {
                return e._id == t
            })) : K
        }

        function y() {
            J++ || q("loading", null, !0, R())
        }

        function b() {
            --J || q("loading", null, !1, R())
        }

        function w(r, i) {
            var s, o, u, a, f = {};
            if (n.eventDataTransform && (r = n.eventDataTransform(r)), i && i.eventDataTransform && (r = i.eventDataTransform(r)), e.extend(f, r), i && (f.source = i), f._id = r._id || (void 0 === r.id ? "_fc" + Ft++ : r.id + ""), f.className = r.className ? "string" == typeof r.className ? r.className.split(/\s+/) : r.className : [], s = r.start || r.date, o = r.end, k(s) && (s = t.duration(s)), k(o) && (o = t.duration(o)), r.dow || t.isDuration(s) || t.isDuration(o)) f.start = s ? t.duration(s) : null, f.end = o ? t.duration(o) : null, f._recurring = !0;
            else {
                if (s && (s = j.moment(s), !s.isValid())) return !1;
                o && (o = j.moment(o), o.isValid() || (o = null)), u = r.allDay, void 0 === u && (a = O(i ? i.allDayDefault : void 0, n.allDayDefault), u = void 0 !== a ? a : !(s.hasTime() || o && o.hasTime())), E(s, o, u, f)
            }
            return f
        }

        function E(e, t, r, i) {
            r ? (e.hasTime() && e.stripTime(), t && t.hasTime() && t.stripTime()) : (e.hasTime() || (e = j.rezoneDate(e)), t && !t.hasTime() && (t = j.rezoneDate(t))), t && e >= t && (t = null), i.allDay = r, i.start = e, i.end = t || null, n.forceEventDuration && !i.end && (i.end = z(i)), l(i)
        }

        function S(t, n, r) {
            var i, s, o, u, a, f, l, c, h, p = [];
            if (n = n || F, r = r || I, t)
                if (t._recurring) {
                    if (s = t.dow)
                        for (i = {}, o = 0; s.length > o; o++) i[s[o]] = !0;
                    for (u = n.clone().stripTime(); u.isBefore(r);)(!i || i[u.day()]) && (a = t.start, f = t.end, l = u.clone(), c = null, a && (l = l.time(a)), f && (c = u.clone().time(f)), h = e.extend({}, t), E(l, c, !a && !f, h), p.push(h)), u.add(1, "days")
                } else p.push(t);
            return p
        }

        function x(e, t, n) {
            var r, i, s, o, u = e._allDay,
                a = e._start,
                f = e._end,
                l = !1;
            return t || n || (t = e.start, n = e.end), r = e.allDay != u ? e.allDay : !(t || n).hasTime(), r && (t && (t = t.clone().stripTime()), n && (n = n.clone().stripTime())), t && (i = r ? N(t, a.clone().stripTime()) : N(t, a)), r != u ? l = !0 : n && (s = N(n || j.getDefaultEventEnd(r, t || a), t || a).subtract(N(f || j.getDefaultEventEnd(u, a), a))), o = T(g(e._id), l, r, i, s), {
                dateDelta: i,
                durationDelta: s,
                undo: o
            }
        }

        function T(t, r, i, s, o) {
            var u = j.getIsAmbigTimezone(),
                a = [];
            return e.each(t, function(e, t) {
                var f = t._allDay,
                    c = t._start,
                    h = t._end,
                    p = null != i ? i : f,
                    d = c.clone(),
                    v = !r && h ? h.clone() : null;
                p ? (d.stripTime(), v && v.stripTime()) : (d.hasTime() || (d = j.rezoneDate(d)), v && !v.hasTime() && (v = j.rezoneDate(v))), v || !n.forceEventDuration && !+o || (v = j.getDefaultEventEnd(p, d)), d.add(s), v && v.add(s).add(o), u && (+s || +o) && (d.stripZone(), v && v.stripZone()), t.allDay = p, t.start = d, t.end = v, l(t), a.push(function() {
                    t.allDay = f, t.start = c, t.end = h, l(t)
                })
            }),
            function() {
                for (var e = 0; a.length > e; e++) a[e]()
            }
        }

        function C() {
            var t, r = n.businessHours,
                i = {
                    className: "fc-nonbusiness",
                    start: "09:00",
                    end: "17:00",
                    dow: [1, 2, 3, 4, 5],
                    rendering: "inverse-background"
                }, s = j.getView();
            return r && (t = "object" == typeof r ? e.extend({}, i, r) : i), t ? S(w(t), s.start, s.end) : []
        }

        function L(e, t, r) {
            var i = e.source || {}, s = O(e.constraint, i.constraint, n.eventConstraint),
                o = O(e.overlap, i.overlap, n.eventOverlap);
            return D(t, r, s, o, e)
        }

        function M(e, t) {
            return D(e, t, n.selectConstraint, n.selectOverlap)
        }

        function _(e, t, n) {
            var r;
            return n && (r = S(w(n))[0]) ? L(r, e, t) : M(e, t)
        }

        function D(e, t, n, r, i) {
            var s, o, u, a, f;
            if (e = e.clone().stripZone(), t = t.clone().stripZone(), null != n) {
                for (s = P(n), o = !1, u = 0; s.length > u; u++)
                    if (H(s[u], e, t)) {
                        o = !0;
                        break
                    }
                if (!o) return !1
            }
            for (u = 0; K.length > u; u++)
                if (a = K[u], (!i || i._id !== a._id) && B(a, e, t)) {
                    if (r === !1) return !1;
                    if ("function" == typeof r && !r(a, i)) return !1;
                    if (i) {
                        if (f = O(a.overlap, (a.source || {}).overlap), f === !1) return !1;
                        if ("function" == typeof f && !f(i, a)) return !1
                    }
                }
            return !0
        }

        function P(e) {
            return "businessHours" === e ? C() : "object" == typeof e ? S(w(e)) : g(e)
        }

        function H(e, t, n) {
            var r = e.start.clone().stripZone(),
                i = j.getEventEnd(e).stripZone();
            return t >= r && i >= n
        }

        function B(e, t, n) {
            var r = e.start.clone().stripZone(),
                i = j.getEventEnd(e).stripZone();
            return i > t && n > r
        }
        var j = this;
        j.isFetchNeeded = r, j.fetchEvents = i, j.addEventSource = u, j.removeEventSource = f, j.updateEvent = p, j.renderEvent = v, j.removeEvents = m, j.clientEvents = g, j.mutateEvent = x;
        var F, I, q = j.trigger,
            R = j.getView,
            U = j.reportEvents,
            z = j.getEventEnd,
            W = {
                events: []
            }, X = [W],
            V = 0,
            $ = 0,
            J = 0,
            K = [];
        e.each((n.events ? [n.events] : []).concat(n.eventSources || []), function(e, t) {
            var n = a(t);
            n && X.push(n)
        });
        var Q = ["title", "url", "allDay", "className", "editable", "color", "backgroundColor", "borderColor", "textColor"];
        j.getBusinessHoursEvents = C, j.isEventAllowedInRange = L, j.isSelectionAllowedInRange = M, j.isExternalDragAllowedInRange = _
    }

    function l(e) {
        e._allDay = e.allDay, e._start = e.start.clone(), e._end = e.end ? e.end.clone() : null
    }

    function c(e, t) {
        t.left && e.css({
            "border-left-width": 1,
            "margin-left": t.left - 1
        }), t.right && e.css({
            "border-right-width": 1,
            "margin-right": t.right - 1
        })
    }

    function h(e) {
        e.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }

    function p() {
        e("body").addClass("fc-not-allowed")
    }

    function d() {
        e("body").removeClass("fc-not-allowed")
    }

    function v(t, n, r) {
        var i = Math.floor(n / t.length),
            s = Math.floor(n - i * (t.length - 1)),
            o = [],
            u = [],
            a = [],
            f = 0;
        m(t), t.each(function(n, r) {
            var l = n === t.length - 1 ? s : i,
                c = e(r).outerHeight(!0);
            l > c ? (o.push(r), u.push(c), a.push(e(r).height())) : f += c
        }), r && (n -= f, i = Math.floor(n / o.length), s = Math.floor(n - i * (o.length - 1))), e(o).each(function(t, n) {
            var r = t === o.length - 1 ? s : i,
                f = u[t],
                l = a[t],
                c = r - (f - l);
            r > f && e(n).height(c)
        })
    }

    function m(e) {
        e.height("")
    }

    function g(t) {
        var n = 0;
        return t.find("> *").each(function(t, r) {
            var i = e(r).outerWidth();
            i > n && (n = i)
        }), n++, t.width(n), n
    }

    function y(e, t) {
        return e.height(t).addClass("fc-scroller"), e[0].scrollHeight - 1 > e[0].clientHeight ? !0 : (b(e), !1)
    }

    function b(e) {
        e.height("").removeClass("fc-scroller")
    }

    function w(t) {
        var n = t.css("position"),
            r = t.parents().filter(function() {
                var t = e(this);
                return /(auto|scroll)/.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
        return "fixed" !== n && r.length ? r : e(t[0].ownerDocument || document)
    }

    function E(e) {
        var t = e.offset().left,
            n = t + e.width(),
            r = e.children(),
            i = r.offset().left,
            s = i + r.outerWidth();
        return {
            left: i - t,
            right: n - s
        }
    }

    function S(e) {
        return 1 == e.which && !e.ctrlKey
    }

    function x(e, t, n, r) {
        var i, s, o, u;
        return t > n && r > e ? (e >= n ? (i = e.clone(), o = !0) : (i = n.clone(), o = !1), r >= t ? (s = t.clone(), u = !0) : (s = r.clone(), u = !1), {
            start: i,
            end: s,
            isStart: o,
            isEnd: u
        }) : void 0
    }

    function T(e, t) {
        if (e = e || {}, void 0 !== e[t]) return e[t];
        for (var n, r = t.split(/(?=[A-Z])/), i = r.length - 1; i >= 0; i--)
            if (n = e[r[i].toLowerCase()], void 0 !== n) return n;
        return e["default"]
    }

    function N(e, n) {
        return t.duration({
            days: e.clone().stripTime().diff(n.clone().stripTime(), "days"),
            ms: e.time() - n.time()
        })
    }

    function C(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }

    function k(e) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(e)
    }

    function L(e) {
        var t = function() {};
        return t.prototype = e, new t
    }

    function A(t, n, r) {
        if (e.isFunction(t) && (t = [t]), t) {
            var i, s;
            for (i = 0; t.length > i; i++) s = t[i].apply(n, r) || s;
            return s
        }
    }

    function O() {
        for (var e = 0; arguments.length > e; e++)
            if (void 0 !== arguments[e]) return arguments[e]
    }

    function M(e) {
        return (e + "").replace(/&/g, "&").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function _(e) {
        return e.replace(/&.*?;/g, "")
    }

    function D(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function P(e, t) {
        return e - t
    }

    function H(e, t) {
        var n, r, i, s, o = function() {
                var u = +(new Date) - s;
                t > u && u > 0 ? n = setTimeout(o, t - u) : (n = null, e.apply(i, r), n || (i = r = null))
            };
        return function() {
            i = this, r = arguments, s = +(new Date), n || (n = setTimeout(o, t))
        }
    }

    function B(n, r, i) {
        var s, o, u, a, f = n[0],
            l = 1 == n.length && "string" == typeof f;
        return t.isMoment(f) ? (a = t.apply(null, n), F(f, a)) : C(f) || void 0 === f ? a = t.apply(null, n) : (s = !1, o = !1, l ? zt.test(f) ? (f += "-01", n = [f], s = !0, o = !0) : (u = Wt.exec(f)) && (s = !u[5], o = !0) : e.isArray(f) && (o = !0), a = r ? t.utc.apply(t, n) : t.apply(null, n), s ? (a._ambigTime = !0, a._ambigZone = !0) : i && (o ? a._ambigZone = !0 : l && a.zone(f))), a._fullCalendar = !0, a
    }

    function j(e, t) {
        var n, r = [],
            i = !1,
            s = !1;
        for (n = 0; e.length > n; n++) r.push(Ht.moment.parseZone(e[n])), i = i || r[n]._ambigTime, s = s || r[n]._ambigZone;
        for (n = 0; r.length > n; n++) i && !t ? r[n].stripTime() : s && r[n].stripZone();
        return r
    }

    function F(e, t) {
        e._ambigTime ? t._ambigTime = !0 : t._ambigTime && (t._ambigTime = !1), e._ambigZone ? t._ambigZone = !0 : t._ambigZone && (t._ambigZone = !1)
    }

    function I(e, t) {
        e.year(t[0] || 0).month(t[1] || 0).date(t[2] || 0).hours(t[3] || 0).minutes(t[4] || 0).seconds(t[5] || 0).milliseconds(t[6] || 0)
    }

    function q(e, t) {
        return Vt.format.call(e, t)
    }

    function R(e, t) {
        return U(e, $(t))
    }

    function U(e, t) {
        var n, r = "";
        for (n = 0; t.length > n; n++) r += z(e, t[n]);
        return r
    }

    function z(e, t) {
        var n, r;
        return "string" == typeof t ? t : (n = t.token) ? $t[n] ? $t[n](e) : q(e, n) : t.maybe && (r = U(e, t.maybe), r.match(/[1-9]/)) ? r : ""
    }

    function W(e, t, n, r, i) {
        var s;
        return e = Ht.moment.parseZone(e), t = Ht.moment.parseZone(t), s = (e.localeData || e.lang).call(e), n = s.longDateFormat(n) || n, r = r || " - ", X(e, t, $(n), r, i)
    }

    function X(e, t, n, r, i) {
        var s, o, u, a, f = "",
            l = "",
            c = "",
            h = "",
            p = "";
        for (o = 0; n.length > o && (s = V(e, t, n[o]), s !== !1); o++) f += s;
        for (u = n.length - 1; u > o && (s = V(e, t, n[u]), s !== !1); u--) l = s + l;
        for (a = o; u >= a; a++) c += z(e, n[a]), h += z(t, n[a]);
        return (c || h) && (p = i ? h + r + c : c + r + h), f + p + l
    }

    function V(e, t, n) {
        var r, i;
        return "string" == typeof n ? n : (r = n.token) && (i = Jt[r.charAt(0)], i && e.isSame(t, i)) ? q(e, r) : !1
    }

    function $(e) {
        return e in Kt ? Kt[e] : Kt[e] = J(e)
    }

    function J(e) {
        for (var t, n = [], r = /\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g; t = r.exec(e);) t[1] ? n.push(t[1]) : t[2] ? n.push({
            maybe: J(t[2])
        }) : t[3] ? n.push({
            token: t[3]
        }) : t[5] && n.push(t[5]);
        return n
    }

    function K(e) {
        this.options = e || {}
    }

    function Q(e) {
        this.grid = e
    }

    function G(e) {
        this.coordMaps = e
    }

    function Y(e, t) {
        this.coordMap = e, this.options = t || {}
    }

    function Z(e, t) {
        return e || t ? e && t ? e.grid === t.grid && e.row === t.row && e.col === t.col : !1 : !0
    }

    function et(t, n) {
        this.options = n = n || {}, this.sourceEl = t, this.parentEl = n.parentEl ? e(n.parentEl) : t.parent()
    }

    function tt(e) {
        this.view = e
    }

    function nt(e) {
        tt.call(this, e), this.coordMap = new Q(this), this.elsByFill = {}
    }

    function rt(e) {
        var t = st(e);
        return "background" === t || "inverse-background" === t
    }

    function it(e) {
        return "inverse-background" === st(e)
    }

    function st(e) {
        return O((e.source || {}).rendering, e.rendering)
    }

    function ot(e) {
        var t, n, r = {};
        for (t = 0; e.length > t; t++) n = e[t], (r[n._id] || (r[n._id] = [])).push(n);
        return r
    }

    function ut(e, t) {
        return e.eventStartMS - t.eventStartMS
    }

    function at(e, t) {
        return e.eventStartMS - t.eventStartMS || t.eventDurationMS - e.eventDurationMS || t.event.allDay - e.event.allDay || (e.event.title || "").localeCompare(t.event.title)
    }

    function ft(e) {
        nt.call(this, e)
    }

    function lt(e, t) {
        var n, r;
        for (n = 0; t.length > n; n++)
            if (r = t[n], r.leftCol <= e.rightCol && r.rightCol >= e.leftCol) return !0;
        return !1
    }

    function ct(e, t) {
        return e.leftCol - t.leftCol
    }

    function ht(e) {
        nt.call(this, e)
    }

    function pt(e) {
        var t, n, r;
        if (e.sort(at), t = dt(e), vt(t), n = t[0]) {
            for (r = 0; n.length > r; r++) mt(n[r]);
            for (r = 0; n.length > r; r++) gt(n[r], 0, 0)
        }
    }

    function dt(e) {
        var t, n, r, i = [];
        for (t = 0; e.length > t; t++) {
            for (n = e[t], r = 0; i.length > r && yt(n, i[r]).length; r++);
            n.level = r, (i[r] || (i[r] = [])).push(n)
        }
        return i
    }

    function vt(e) {
        var t, n, r, i, s;
        for (t = 0; e.length > t; t++)
            for (n = e[t], r = 0; n.length > r; r++)
                for (i = n[r], i.forwardSegs = [], s = t + 1; e.length > s; s++) yt(i, e[s], i.forwardSegs)
    }

    function mt(e) {
        var t, n, r = e.forwardSegs,
            i = 0;
        if (void 0 === e.forwardPressure) {
            for (t = 0; r.length > t; t++) n = r[t], mt(n), i = Math.max(i, 1 + n.forwardPressure);
            e.forwardPressure = i
        }
    }

    function gt(e, t, n) {
        var r, i = e.forwardSegs;
        if (void 0 === e.forwardCoord)
            for (i.length ? (i.sort(wt), gt(i[0], t + 1, n), e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1, e.backwardCoord = e.forwardCoord - (e.forwardCoord - n) / (t + 1), r = 0; i.length > r; r++) gt(i[r], 0, e.forwardCoord)
    }

    function yt(e, t, n) {
        n = n || [];
        for (var r = 0; t.length > r; r++) bt(e, t[r]) && n.push(t[r]);
        return n
    }

    function bt(e, t) {
        return e.bottom > t.top && e.top < t.bottom
    }

    function wt(e, t) {
        return t.forwardPressure - e.forwardPressure || (e.backwardCoord || 0) - (t.backwardCoord || 0) || at(e, t)
    }

    function Et(n) {
        function r(t) {
            var n = k[t];
            return e.isPlainObject(n) && !o(t) ? T(n, N.name) : n
        }

        function i(e, t) {
            return n.trigger.apply(n, [e, t || N].concat(Array.prototype.slice.call(arguments, 2), [N]))
        }

        function s(e) {
            var t = e.source || {};
            return O(e.startEditable, t.startEditable, r("eventStartEditable"), e.editable, t.editable, r("editable"))
        }

        function u(e) {
            var t = e.source || {};
            return O(e.durationEditable, t.durationEditable, r("eventDurationEditable"), e.editable, t.editable, r("editable"))
        }

        function a(e, t, r, s) {
            var o = n.mutateEvent(t, r, null);
            i("eventDrop", e, t, o.dateDelta, function() {
                o.undo(), C()
            }, s, {}), C()
        }

        function f(e, t, r, s) {
            var o = n.mutateEvent(t, null, r);
            i("eventResize", e, t, o.durationDelta, function() {
                o.undo(), C()
            }, s, {}), C()
        }

        function l(e) {
            return t.isMoment(e) && (e = e.day()), _[e]
        }

        function c() {
            return A
        }

        function h(e, t, n) {
            var r = e.clone();
            for (t = t || 1; _[(r.day() + (n ? t : 0) + 7) % 7];) r.add(t, "days");
            return r
        }

        function p() {
            var e = d.apply(null, arguments),
                t = v(e),
                n = m(t);
            return n
        }

        function d(e, t) {
            var n = N.colCnt,
                r = B ? -1 : 1,
                i = B ? n - 1 : 0;
            "object" == typeof e && (t = e.col, e = e.row);
            var s = e * n + (t * r + i);
            return s
        }

        function v(e) {
            var t = N.start.day();
            return e += D[t], 7 * Math.floor(e / A) + H[(e % A + A) % A] - t
        }

        function m(e) {
            return N.start.clone().add(e, "days")
        }

        function g(e) {
            var t = y(e),
                n = b(t),
                r = w(n);
            return r
        }

        function y(e) {
            return e.clone().stripTime().diff(N.start, "days")
        }

        function b(e) {
            var t = N.start.day();
            return e += t, Math.floor(e / 7) * A + D[(e % 7 + 7) % 7] - D[t]
        }

        function w(e) {
            var t = N.colCnt,
                n = B ? -1 : 1,
                r = B ? t - 1 : 0,
                i = Math.floor(e / t),
                s = (e % t + t) % t * n + r;
            return {
                row: i,
                col: s
            }
        }

        function E(e, t) {
            for (var n = N.rowCnt, r = N.colCnt, i = [], s = S(e, t), o = y(s.start), u = y(s.end), a = b(o), f = b(u) - 1, l = 0; n > l; l++) {
                var c = l * r,
                    h = c + r - 1,
                    p = Math.max(a, c),
                    d = Math.min(f, h);
                if (d >= p) {
                    var m = w(p),
                        g = w(d),
                        E = [m.col, g.col].sort(P),
                        x = v(p) == o,
                        T = v(d) + 1 == u;
                    i.push({
                        row: l,
                        leftCol: E[0],
                        rightCol: E[1],
                        isStart: x,
                        isEnd: T
                    })
                }
            }
            return i
        }

        function S(e, t) {
            var n, r, i = e.clone().stripTime();
            return t && (n = t.clone().stripTime(), r = +t.time(), r && r >= L && n.add(1, "days")), (!t || i >= n) && (n = i.clone().add(1, "days")), {
                start: i,
                end: n
            }
        }

        function x(e) {
            var t = S(e.start, e.end);
            return t.end.diff(t.start, "days") > 1
        }
        var N = this;
        N.calendar = n, N.opt = r, N.trigger = i, N.isEventDraggable = s, N.isEventResizable = u, N.eventDrop = a, N.eventResize = f;
        var C = n.reportEventChange,
            k = n.options,
            L = t.duration(k.nextDayThreshold);
        N.init(), N.getEventTimeText = function(e, t) {
            var i, s;
            return "object" == typeof e && "object" == typeof t ? (i = e, s = t, t = arguments[2]) : (i = e.start, s = e.end), t = t || r("timeFormat"), s && r("displayEventEnd") ? n.formatRange(i, s, t) : n.formatDate(i, t)
        }, N.isHiddenDay = l, N.skipHiddenDays = h, N.getCellsPerWeek = c, N.dateToCell = g, N.dateToDayOffset = y, N.dayOffsetToCellOffset = b, N.cellOffsetToCell = w, N.cellToDate = p, N.cellToCellOffset = d, N.cellOffsetToDayOffset = v, N.dayOffsetToDate = m, N.rangeToSegments = E, N.isMultiDayEvent = x;
        var A, M = r("hiddenDays") || [],
            _ = [],
            D = [],
            H = [],
            B = r("isRTL");
        (function() {
            r("weekends") === !1 && M.push(0, 6);
            for (var t = 0, n = 0; 7 > t; t++) D[t] = n, _[t] = -1 != e.inArray(t, M), _[t] || (H[n] = t, n++);
            if (A = n, !A) throw "invalid hiddenDays"
        })()
    }

    function St(n) {
        var r, i, s, o, u = Ht.dataAttrPrefix;
        return u && (u += "-"), r = n.data(u + "event") || null, r && (r = "object" == typeof r ? e.extend({}, r) : {}, i = r.start, null == i && (i = r.time), s = r.duration, o = r.stick, delete r.start, delete r.time, delete r.duration, delete r.stick), null == i && (i = n.data(u + "start")), null == i && (i = n.data(u + "time")), null == s && (s = n.data(u + "duration")), null == o && (o = n.data(u + "stick")), i = null != i ? t.duration(i) : null, s = null != s ? t.duration(s) : null, o = Boolean(o), {
            eventProps: r,
            startTime: i,
            duration: s,
            stick: o
        }
    }

    function xt(e) {
        Et.call(this, e), this.dayGrid = new ft(this), this.coordMap = this.dayGrid.coordMap
    }

    function Tt(e) {
        xt.call(this, e)
    }

    function Nt(e) {
        xt.call(this, e)
    }

    function Ct(e) {
        xt.call(this, e)
    }

    function kt(e, t) {
        return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
    }

    function Lt(e, t) {
        return t.longDateFormat("LT").replace(/\s*a$/i, "")
    }

    function At(e) {
        Et.call(this, e), this.timeGrid = new ht(this), this.opt("allDaySlot") ? (this.dayGrid = new ft(this), this.coordMap = new G([this.dayGrid.coordMap, this.timeGrid.coordMap])) : this.coordMap = this.timeGrid.coordMap
    }

    function Ot(e) {
        At.call(this, e)
    }

    function Mt(e) {
        At.call(this, e)
    }
    var _t = {
        lang: "en",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        titleFormat: {
            month: "MMMM YYYY",
            week: "ll",
            day: "LL"
        },
        columnFormat: {
            month: "ddd",
            week: r,
            day: "dddd"
        },
        timeFormat: {
            "default": n
        },
        displayEventEnd: {
            month: !1,
            basicWeek: !1,
            "default": !0
        },
        isRTL: !1,
        defaultButtonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 200
    }, Dt = {
            en: {
                columnFormat: {
                    week: "ddd M/D"
                },
                dayPopoverFormat: "dddd, MMMM D"
            }
        }, Pt = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonIcons: {
                prev: "right-single-arrow",
                next: "left-single-arrow",
                prevYear: "right-double-arrow",
                nextYear: "left-double-arrow"
            },
            themeButtonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w",
                nextYear: "seek-prev",
                prevYear: "seek-next"
            }
        }, Ht = e.fullCalendar = {
            version: "2.2.3"
        }, Bt = Ht.views = {};
    e.fn.fullCalendar = function(t) {
        var n = Array.prototype.slice.call(arguments, 1),
            r = this;
        return this.each(function(i, s) {
            var o, a = e(s),
                f = a.data("fullCalendar");
            "string" == typeof t ? f && e.isFunction(f[t]) && (o = f[t].apply(f, n), i || (r = o), "destroy" === t && a.removeData("fullCalendar")) : f || (f = new u(a, t), a.data("fullCalendar", f), f.render())
        }), r
    }, Ht.langs = Dt, Ht.datepickerLang = function(t, n, r) {
        var i = Dt[t];
        i || (i = Dt[t] = {}), s(i, {
            isRTL: r.isRTL,
            weekNumberTitle: r.weekHeader,
            titleFormat: {
                month: r.showMonthAfterYear ? "YYYY[" + r.yearSuffix + "] MMMM" : "MMMM YYYY[" + r.yearSuffix + "]"
            },
            defaultButtonText: {
                prev: _(r.prevText),
                next: _(r.nextText),
                today: _(r.currentText)
            }
        }), e.datepicker && (e.datepicker.regional[n] = e.datepicker.regional[t] = r, e.datepicker.regional.en = e.datepicker.regional[""], e.datepicker.setDefaults(r))
    }, Ht.lang = function(e, t) {
        var n;
        t && (n = Dt[e], n || (n = Dt[e] = {}), s(n, t || {})), _t.lang = e
    }, Ht.sourceNormalizers = [], Ht.sourceFetchers = [];
    var jt = {
        dataType: "json",
        cache: !1
    }, Ft = 1,
        It = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    Ht.applyAll = A;
    var qt, Rt, Ut, zt = /^\s*\d{4}-\d\d$/,
        Wt = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        Xt = t.fn,
        Vt = e.extend({}, Xt);
    Ht.moment = function() {
        return B(arguments)
    }, Ht.moment.utc = function() {
        var e = B(arguments, !0);
        return e.hasTime() && e.utc(), e
    }, Ht.moment.parseZone = function() {
        return B(arguments, !0, !0)
    }, Xt.clone = function() {
        var e = Vt.clone.apply(this, arguments);
        return F(this, e), this._fullCalendar && (e._fullCalendar = !0), e
    }, Xt.time = function(e) {
        if (!this._fullCalendar) return Vt.time.apply(this, arguments);
        if (null == e) return t.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
        this._ambigTime = !1, t.isDuration(e) || t.isMoment(e) || (e = t.duration(e));
        var n = 0;
        return t.isDuration(e) && (n = 24 * Math.floor(e.asDays())), this.hours(n + e.hours()).minutes(e.minutes()).seconds(e.seconds()).milliseconds(e.milliseconds())
    }, Xt.stripTime = function() {
        var e = this.toArray();
        return this.utc(), Rt(this, e.slice(0, 3)), this._ambigTime = !0, this._ambigZone = !0, this
    }, Xt.hasTime = function() {
        return !this._ambigTime
    }, Xt.stripZone = function() {
        var e = this.toArray(),
            t = this._ambigTime;
        return this.utc(), Rt(this, e), t && (this._ambigTime = !0), this._ambigZone = !0, this
    }, Xt.hasZone = function() {
        return !this._ambigZone
    }, Xt.zone = function(e) {
        return null != e && (this._ambigTime = !1, this._ambigZone = !1), Vt.zone.apply(this, arguments)
    }, Xt.local = function() {
        var e = this.toArray(),
            t = this._ambigZone;
        return Vt.local.apply(this, arguments), t && Ut(this, e), this
    }, Xt.format = function() {
        return this._fullCalendar && arguments[0] ? R(this, arguments[0]) : this._ambigTime ? q(this, "YYYY-MM-DD") : this._ambigZone ? q(this, "YYYY-MM-DD[T]HH:mm:ss") : Vt.format.apply(this, arguments)
    }, Xt.toISOString = function() {
        return this._ambigTime ? q(this, "YYYY-MM-DD") : this._ambigZone ? q(this, "YYYY-MM-DD[T]HH:mm:ss") : Vt.toISOString.apply(this, arguments)
    }, Xt.isWithin = function(e, t) {
        var n = j([this, e, t]);
        return n[0] >= n[1] && n[0] < n[2]
    }, Xt.isSame = function(e, t) {
        var n;
        return this._fullCalendar ? t ? (n = j([this, e], !0), Vt.isSame.call(n[0], n[1], t)) : (e = Ht.moment.parseZone(e), Vt.isSame.call(this, e) && Boolean(this._ambigTime) === Boolean(e._ambigTime) && Boolean(this._ambigZone) === Boolean(e._ambigZone)) : Vt.isSame.apply(this, arguments)
    }, e.each(["isBefore", "isAfter"], function(e, t) {
        Xt[t] = function(e, n) {
            var r;
            return this._fullCalendar ? (r = j([this, e]), Vt[t].call(r[0], r[1], n)) : Vt[t].apply(this, arguments)
        }
    }), qt = "_d" in t() && "updateOffset" in t, Rt = qt ? function(e, n) {
        e._d.setTime(Date.UTC.apply(Date, n)), t.updateOffset(e, !1)
    } : I, Ut = qt ? function(e, n) {
        e._d.setTime(+(new Date(n[0] || 0, n[1] || 0, n[2] || 0, n[3] || 0, n[4] || 0, n[5] || 0, n[6] || 0))), t.updateOffset(e, !1)
    } : I;
    var $t = {
        t: function(e) {
            return q(e, "a").charAt(0)
        },
        T: function(e) {
            return q(e, "A").charAt(0)
        }
    };
    Ht.formatRange = W;
    var Jt = {
        Y: "year",
        M: "month",
        D: "day",
        d: "day",
        A: "second",
        a: "second",
        T: "second",
        t: "second",
        H: "second",
        h: "second",
        m: "second",
        s: "second"
    }, Kt = {};
    K.prototype = {
        isHidden: !0,
        options: null,
        el: null,
        documentMousedownProxy: null,
        margin: 10,
        show: function() {
            this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
        },
        hide: function() {
            this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
        },
        render: function() {
            var t = this,
                n = this.options;
            this.el = e('<div class="fc-popover"/>').addClass(n.className || "").css({
                top: 0,
                left: 0
            }).append(n.content).appendTo(n.parentEl), this.el.on("click", ".fc-close", function() {
                t.hide()
            }), n.autoHide && e(document).on("mousedown", this.documentMousedownProxy = e.proxy(this, "documentMousedown"))
        },
        documentMousedown: function(t) {
            this.el && !e(t.target).closest(this.el).length && this.hide()
        },
        destroy: function() {
            this.hide(), this.el && (this.el.remove(), this.el = null), e(document).off("mousedown", this.documentMousedownProxy)
        },
        position: function() {
            var t, n, r, i, s, o = this.options,
                u = this.el.offsetParent().offset(),
                a = this.el.outerWidth(),
                f = this.el.outerHeight(),
                l = e(window),
                c = w(this.el);
            i = o.top || 0, s = void 0 !== o.left ? o.left : void 0 !== o.right ? o.right - a : 0, c.is(window) || c.is(document) ? (c = l, t = 0, n = 0) : (r = c.offset(), t = r.top, n = r.left), t += l.scrollTop(), n += l.scrollLeft(), o.viewportConstrain !== !1 && (i = Math.min(i, t + c.outerHeight() - f - this.margin), i = Math.max(i, t + this.margin), s = Math.min(s, n + c.outerWidth() - a - this.margin), s = Math.max(s, n + this.margin)), this.el.css({
                top: i - u.top,
                left: s - u.left
            })
        },
        trigger: function(e) {
            this.options[e] && this.options[e].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, Q.prototype = {
        grid: null,
        rows: null,
        cols: null,
        containerEl: null,
        minX: null,
        maxX: null,
        minY: null,
        maxY: null,
        build: function() {
            this.grid.buildCoords(this.rows = [], this.cols = []), this.computeBounds()
        },
        getCell: function(e, t) {
            var n, r = null,
                i = this.rows,
                s = this.cols,
                o = -1,
                u = -1;
            if (this.inBounds(e, t)) {
                for (n = 0; i.length > n; n++)
                    if (t >= i[n][0] && i[n][1] > t) {
                        o = n;
                        break
                    }
                for (n = 0; s.length > n; n++)
                    if (e >= s[n][0] && s[n][1] > e) {
                        u = n;
                        break
                    }
                o >= 0 && u >= 0 && (r = {
                    row: o,
                    col: u
                }, r.grid = this.grid, r.date = this.grid.getCellDate(r))
            }
            return r
        },
        computeBounds: function() {
            var e;
            this.containerEl && (e = this.containerEl.offset(), this.minX = e.left, this.maxX = e.left + this.containerEl.outerWidth(), this.minY = e.top, this.maxY = e.top + this.containerEl.outerHeight())
        },
        inBounds: function(e, t) {
            return this.containerEl ? e >= this.minX && this.maxX > e && t >= this.minY && this.maxY > t : !0
        }
    }, G.prototype = {
        coordMaps: null,
        build: function() {
            var e, t = this.coordMaps;
            for (e = 0; t.length > e; e++) t[e].build()
        },
        getCell: function(e, t) {
            var n, r = this.coordMaps,
                i = null;
            for (n = 0; r.length > n && !i; n++) i = r[n].getCell(e, t);
            return i
        }
    }, Y.prototype = {
        coordMap: null,
        options: null,
        isListening: !1,
        isDragging: !1,
        origCell: null,
        origDate: null,
        cell: null,
        date: null,
        mouseX0: null,
        mouseY0: null,
        mousemoveProxy: null,
        mouseupProxy: null,
        scrollEl: null,
        scrollBounds: null,
        scrollTopVel: null,
        scrollLeftVel: null,
        scrollIntervalId: null,
        scrollHandlerProxy: null,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        mousedown: function(e) {
            S(e) && (e.preventDefault(), this.startListening(e), this.options.distance || this.startDrag(e))
        },
        startListening: function(t) {
            var n, r;
            this.isListening || (t && this.options.scroll && (n = w(e(t.target)), n.is(window) || n.is(document) || (this.scrollEl = n, this.scrollHandlerProxy = H(e.proxy(this, "scrollHandler"), 100), this.scrollEl.on("scroll", this.scrollHandlerProxy))), this.computeCoords(), t && (r = this.getCell(t), this.origCell = r, this.origDate = r ? r.date : null, this.mouseX0 = t.pageX, this.mouseY0 = t.pageY), e(document).on("mousemove", this.mousemoveProxy = e.proxy(this, "mousemove")).on("mouseup", this.mouseupProxy = e.proxy(this, "mouseup")).on("selectstart", this.preventDefault), this.isListening = !0, this.trigger("listenStart", t))
        },
        computeCoords: function() {
            this.coordMap.build(), this.computeScrollBounds()
        },
        mousemove: function(e) {
            var t, n;
            this.isDragging || (t = this.options.distance || 1, n = Math.pow(e.pageX - this.mouseX0, 2) + Math.pow(e.pageY - this.mouseY0, 2), n >= t * t && this.startDrag(e)), this.isDragging && this.drag(e)
        },
        startDrag: function(e) {
            var t;
            this.isListening || this.startListening(), this.isDragging || (this.isDragging = !0, this.trigger("dragStart", e), t = this.getCell(e), t && this.cellOver(t, !0))
        },
        drag: function(e) {
            var t;
            this.isDragging && (t = this.getCell(e), Z(t, this.cell) || (this.cell && this.cellOut(), t && this.cellOver(t)), this.dragScroll(e))
        },
        cellOver: function(e) {
            this.cell = e, this.date = e.date, this.trigger("cellOver", e, e.date)
        },
        cellOut: function() {
            this.cell && (this.trigger("cellOut", this.cell), this.cell = null, this.date = null)
        },
        mouseup: function(e) {
            this.stopDrag(e), this.stopListening(e)
        },
        stopDrag: function(e) {
            this.isDragging && (this.stopScrolling(), this.trigger("dragStop", e), this.isDragging = !1)
        },
        stopListening: function(t) {
            this.isListening && (this.scrollEl && (this.scrollEl.off("scroll", this.scrollHandlerProxy), this.scrollHandlerProxy = null), e(document).off("mousemove", this.mousemoveProxy).off("mouseup", this.mouseupProxy).off("selectstart", this.preventDefault), this.mousemoveProxy = null, this.mouseupProxy = null, this.isListening = !1, this.trigger("listenStop", t), this.origCell = this.cell = null, this.origDate = this.date = null)
        },
        getCell: function(e) {
            return this.coordMap.getCell(e.pageX, e.pageY)
        },
        trigger: function(e) {
            this.options[e] && this.options[e].apply(this, Array.prototype.slice.call(arguments, 1))
        },
        preventDefault: function(e) {
            e.preventDefault()
        },
        computeScrollBounds: function() {
            var e, t = this.scrollEl;
            t && (e = t.offset(), this.scrollBounds = {
                top: e.top,
                left: e.left,
                bottom: e.top + t.outerHeight(),
                right: e.left + t.outerWidth()
            })
        },
        dragScroll: function(e) {
            var t, n, r, i, s = this.scrollSensitivity,
                o = this.scrollBounds,
                u = 0,
                a = 0;
            o && (t = (s - (e.pageY - o.top)) / s, n = (s - (o.bottom - e.pageY)) / s, r = (s - (e.pageX - o.left)) / s, i = (s - (o.right - e.pageX)) / s, t >= 0 && 1 >= t ? u = -1 * t * this.scrollSpeed : n >= 0 && 1 >= n && (u = n * this.scrollSpeed), r >= 0 && 1 >= r ? a = -1 * r * this.scrollSpeed : i >= 0 && 1 >= i && (a = i * this.scrollSpeed)), this.setScrollVel(u, a)
        },
        setScrollVel: function(t, n) {
            this.scrollTopVel = t, this.scrollLeftVel = n, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(e.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function() {
            var e = this.scrollEl;
            0 > this.scrollTopVel ? 0 >= e.scrollTop() && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && e.scrollTop() + e[0].clientHeight >= e[0].scrollHeight && (this.scrollTopVel = 0), 0 > this.scrollLeftVel ? 0 >= e.scrollLeft() && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && e.scrollLeft() + e[0].clientWidth >= e[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function() {
            var e = this.scrollEl,
                t = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && e.scrollTop(e.scrollTop() + this.scrollTopVel * t), this.scrollLeftVel && e.scrollLeft(e.scrollLeft() + this.scrollLeftVel * t), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.stopScrolling()
        },
        stopScrolling: function() {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.computeCoords())
        },
        scrollHandler: function() {
            this.scrollIntervalId || this.computeCoords()
        }
    }, et.prototype = {
        options: null,
        sourceEl: null,
        el: null,
        parentEl: null,
        top0: null,
        left0: null,
        mouseY0: null,
        mouseX0: null,
        topDelta: null,
        leftDelta: null,
        mousemoveProxy: null,
        isFollowing: !1,
        isHidden: !1,
        isAnimating: !1,
        start: function(t) {
            this.isFollowing || (this.isFollowing = !0, this.mouseY0 = t.pageY, this.mouseX0 = t.pageX, this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), e(document).on("mousemove", this.mousemoveProxy = e.proxy(this, "mousemove")))
        },
        stop: function(t, n) {
            function r() {
                this.isAnimating = !1, i.destroyEl(), this.top0 = this.left0 = null, n && n()
            }
            var i = this,
                s = this.options.revertDuration;
            this.isFollowing && !this.isAnimating && (this.isFollowing = !1, e(document).off("mousemove", this.mousemoveProxy), t && s && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                top: this.top0,
                left: this.left0
            }, {
                duration: s,
                complete: r
            })) : r())
        },
        getEl: function() {
            var e = this.el;
            return e || (this.sourceEl.width(), e = this.el = this.sourceEl.clone().css({
                position: "absolute",
                visibility: "",
                display: this.isHidden ? "none" : "",
                margin: 0,
                right: "auto",
                bottom: "auto",
                width: this.sourceEl.width(),
                height: this.sourceEl.height(),
                opacity: this.options.opacity || "",
                zIndex: this.options.zIndex
            }).appendTo(this.parentEl)), e
        },
        destroyEl: function() {
            this.el && (this.el.remove(), this.el = null)
        },
        updatePosition: function() {
            var e, t;
            this.getEl(), null === this.top0 && (this.sourceEl.width(), e = this.sourceEl.offset(), t = this.el.offsetParent().offset(), this.top0 = e.top - t.top, this.left0 = e.left - t.left), this.el.css({
                top: this.top0 + this.topDelta,
                left: this.left0 + this.leftDelta
            })
        },
        mousemove: function(e) {
            this.topDelta = e.pageY - this.mouseY0, this.leftDelta = e.pageX - this.mouseX0, this.isHidden || this.updatePosition()
        },
        hide: function() {
            this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
        },
        show: function() {
            this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
        }
    }, tt.prototype = {
        view: null,
        cellHtml: "<td/>",
        rowHtml: function(e, t) {
            var n, r, i = this.view,
                s = this.getHtmlRenderer("cell", e),
                o = "";
            for (t = t || 0, n = 0; i.colCnt > n; n++) r = i.cellToDate(t, n), o += s(t, n, r);
            return o = this.bookendCells(o, e, t), "<tr>" + o + "</tr>"
        },
        bookendCells: function(e, t, n) {
            var r = this.view,
                i = this.getHtmlRenderer("intro", t)(n || 0),
                s = this.getHtmlRenderer("outro", t)(n || 0),
                o = r.opt("isRTL"),
                u = o ? s : i,
                a = o ? i : s;
            return "string" == typeof e ? u + e + a : e.prepend(u).append(a)
        },
        getHtmlRenderer: function(e, t) {
            var n, r, i, s, o = this.view;
            return n = e + "Html", t && (r = t + D(e) + "Html"), r && (s = o[r]) ? i = o : r && (s = this[r]) ? i = this : (s = o[n]) ? i = o : (s = this[n]) && (i = this), "function" == typeof s ? function() {
                return s.apply(i, arguments) || ""
            } : function() {
                return s || ""
            }
        }
    }, nt.prototype = L(tt.prototype), e.extend(nt.prototype, {
        el: null,
        coordMap: null,
        cellDuration: null,
        elsByFill: null,
        render: function() {
            this.bindHandlers()
        },
        destroy: function() {},
        buildCoords: function() {},
        getCellDate: function() {},
        getCellDayEl: function() {},
        rangeToSegs: function() {},
        bindHandlers: function() {
            var t = this;
            this.el.on("mousedown", function(n) {
                e(n.target).is(".fc-event-container *, .fc-more") || e(n.target).closest(".fc-popover").length || t.dayMousedown(n)
            }), this.bindSegHandlers()
        },
        dayMousedown: function(e) {
            var t, n, r, i = this,
                s = this.view,
                o = s.calendar,
                u = s.opt("selectable"),
                a = null,
                f = new Y(this.coordMap, {
                    scroll: s.opt("dragScroll"),
                    dragStart: function() {
                        s.unselect()
                    },
                    cellOver: function(e, s) {
                        f.origDate && (r = i.getCellDayEl(e), a = [s, f.origDate].sort(P), t = a[0], n = a[1].clone().add(i.cellDuration), u && (o.isSelectionAllowedInRange(t, n) ? i.renderSelection(t, n) : (a = null, p())))
                    },
                    cellOut: function() {
                        a = null, i.destroySelection(), d()
                    },
                    listenStop: function(e) {
                        a && (a[0].isSame(a[1]) && s.trigger("dayClick", r[0], t, e), u && s.reportSelection(t, n, e)), d()
                    }
                });
            f.mousedown(e)
        },
        renderDrag: function() {},
        destroyDrag: function() {},
        renderResize: function() {},
        destroyResize: function() {},
        renderRangeHelper: function(e, t, n) {
            var r, i = this.view;
            !t && i.opt("forceEventDuration") && (t = i.calendar.getDefaultEventEnd(!e.hasTime(), e)), r = n ? L(n.event) : {}, r.start = e, r.end = t, r.allDay = !(e.hasTime() || t && t.hasTime()), r.className = (r.className || []).concat("fc-helper"), n || (r.editable = !1), this.renderHelper(r, n)
        },
        renderHelper: function() {},
        destroyHelper: function() {},
        renderSelection: function(e, t) {
            this.renderHighlight(e, t)
        },
        destroySelection: function() {
            this.destroyHighlight()
        },
        renderHighlight: function(e, t) {
            this.renderFill("highlight", this.rangeToSegs(e, t))
        },
        destroyHighlight: function() {
            this.destroyFill("highlight")
        },
        highlightSegClasses: function() {
            return ["fc-highlight"]
        },
        renderFill: function() {},
        destroyFill: function(e) {
            var t = this.elsByFill[e];
            t && (t.remove(), delete this.elsByFill[e])
        },
        renderFillSegEls: function(t, n) {
            var r, i = this,
                s = this[t + "SegEl"],
                o = "",
                u = [];
            if (n.length) {
                for (r = 0; n.length > r; r++) o += this.fillSegHtml(t, n[r]);
                e(o).each(function(t, r) {
                    var o = n[t],
                        a = e(r);
                    s && (a = s.call(i, o, a)), a && (a = e(a), a.is(i.fillSegTag) && (o.el = a, u.push(o)))
                })
            }
            return u
        },
        fillSegTag: "div",
        fillSegHtml: function(e, t) {
            var n = this[e + "SegClasses"],
                r = this[e + "SegStyles"],
                i = n ? n.call(this, t) : [],
                s = r ? r.call(this, t) : "";
            return "<" + this.fillSegTag + (i.length ? ' class="' + i.join(" ") + '"' : "") + (s ? ' style="' + s + '"' : "") + " />"
        },
        headHtml: function() {
            return '<div class="fc-row ' + this.view.widgetHeaderClass + '">' + "<table>" + "<thead>" + this.rowHtml("head") + "</thead>" + "</table>" + "</div>"
        },
        headCellHtml: function(e, t, n) {
            var r = this.view,
                i = r.calendar,
                s = r.opt("columnFormat");
            return '<th class="fc-day-header ' + r.widgetHeaderClass + " fc-" + It[n.day()] + '">' + M(i.formatDate(n, s)) + "</th>"
        },
        bgCellHtml: function(e, t, n) {
            var r = this.view,
                i = this.getDayClasses(n);
            return i.unshift("fc-day", r.widgetContentClass), '<td class="' + i.join(" ") + '" data-date="' + n.format() + '"></td>'
        },
        getDayClasses: function(e) {
            var t = this.view,
                n = t.calendar.getNow().stripTime(),
                r = ["fc-" + It[e.day()]];
            return "month" === t.name && e.month() != t.intervalStart.month() && r.push("fc-other-month"), e.isSame(n, "day") ? r.push("fc-today", t.highlightStateClass) : n > e ? r.push("fc-past") : r.push("fc-future"), r
        }
    }), e.extend(nt.prototype, {
        mousedOverSeg: null,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        segs: null,
        renderEvents: function(e) {
            var t, n, r = this.eventsToSegs(e),
                i = [],
                s = [];
            for (t = 0; r.length > t; t++) n = r[t], rt(n.event) ? i.push(n) : s.push(n);
            i = this.renderBgSegs(i) || i, s = this.renderFgSegs(s) || s, this.segs = i.concat(s)
        },
        destroyEvents: function() {
            this.triggerSegMouseout(), this.destroyFgSegs(), this.destroyBgSegs(), this.segs = null
        },
        getSegs: function() {
            return this.segs || []
        },
        renderFgSegs: function() {},
        destroyFgSegs: function() {},
        renderFgSegEls: function(t, n) {
            var r, i = this.view,
                s = "",
                o = [];
            if (t.length) {
                for (r = 0; t.length > r; r++) s += this.fgSegHtml(t[r], n);
                e(s).each(function(n, r) {
                    var s = t[n],
                        u = i.resolveEventEl(s.event, e(r));
                    u && (u.data("fc-seg", s), s.el = u, o.push(s))
                })
            }
            return o
        },
        fgSegHtml: function() {},
        renderBgSegs: function(e) {
            return this.renderFill("bgEvent", e)
        },
        destroyBgSegs: function() {
            this.destroyFill("bgEvent")
        },
        bgEventSegEl: function(e, t) {
            return this.view.resolveEventEl(e.event, t)
        },
        bgEventSegClasses: function(e) {
            var t = e.event,
                n = t.source || {};
            return ["fc-bgevent"].concat(t.className, n.className || [])
        },
        bgEventSegStyles: function(e) {
            var t = this.view,
                n = e.event,
                r = n.source || {}, i = n.color,
                s = r.color,
                o = t.opt("eventColor"),
                u = n.backgroundColor || i || r.backgroundColor || s || t.opt("eventBackgroundColor") || o;
            return u ? "background-color:" + u : ""
        },
        businessHoursSegClasses: function() {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        bindSegHandlers: function() {
            var t = this,
                n = this.view;
            e.each({
                mouseenter: function(e, n) {
                    t.triggerSegMouseover(e, n)
                },
                mouseleave: function(e, n) {
                    t.triggerSegMouseout(e, n)
                },
                click: function(e, t) {
                    return n.trigger("eventClick", this, e.event, t)
                },
                mousedown: function(r, i) {
                    e(i.target).is(".fc-resizer") && n.isEventResizable(r.event) ? t.segResizeMousedown(r, i) : n.isEventDraggable(r.event) && t.segDragMousedown(r, i)
                }
            }, function(n, r) {
                t.el.on(n, ".fc-event-container > *", function(n) {
                    var i = e(this).data("fc-seg");
                    return !i || t.isDraggingSeg || t.isResizingSeg ? void 0 : r.call(this, i, n)
                })
            })
        },
        triggerSegMouseover: function(e, t) {
            this.mousedOverSeg || (this.mousedOverSeg = e, this.view.trigger("eventMouseover", e.el[0], e.event, t))
        },
        triggerSegMouseout: function(e, t) {
            t = t || {}, this.mousedOverSeg && (e = e || this.mousedOverSeg, this.mousedOverSeg = null, this.view.trigger("eventMouseout", e.el[0], e.event, t))
        },
        segDragMousedown: function(e, t) {
            var n, r, i = this,
                s = this.view,
                o = s.calendar,
                u = e.el,
                a = e.event,
                f = new et(e.el, {
                    parentEl: s.el,
                    opacity: s.opt("dragOpacity"),
                    revertDuration: s.opt("dragRevertDuration"),
                    zIndex: 2
                }),
                l = new Y(s.coordMap, {
                    distance: 5,
                    scroll: s.opt("dragScroll"),
                    listenStart: function(e) {
                        f.hide(), f.start(e)
                    },
                    dragStart: function(t) {
                        i.triggerSegMouseout(e, t), i.isDraggingSeg = !0, s.hideEvent(a), s.trigger("eventDragStart", u[0], a, t, {})
                    },
                    cellOver: function(t, u) {
                        var c = e.cellDate || l.origDate,
                            h = i.computeDraggedEventDates(e, c, u);
                        n = h.start, r = h.end, o.isEventAllowedInRange(a, n, h.visibleEnd) ? s.renderDrag(n, r, e) ? f.hide() : f.show() : (n = null, f.show(), p())
                    },
                    cellOut: function() {
                        n = null, s.destroyDrag(), f.show(), d()
                    },
                    dragStop: function(e) {
                        var t = n && !n.isSame(a.start);
                        f.stop(!t, function() {
                            i.isDraggingSeg = !1, s.destroyDrag(), s.showEvent(a), s.trigger("eventDragStop", u[0], a, e, {}), t && s.eventDrop(u[0], a, n, e)
                        }), d()
                    },
                    listenStop: function() {
                        f.stop()
                    }
                });
            l.mousedown(t)
        },
        computeDraggedEventDates: function(e, t, n) {
            var r, i, s, o, u, a = this.view,
                f = e.event,
                l = f.start,
                c = a.calendar.getEventEnd(f);
            return n.hasTime() === t.hasTime() ? (r = N(n, t), i = l.clone().add(r), s = null === f.end ? null : c.clone().add(r), o = f.allDay) : (i = n, s = null, o = !n.hasTime()), u = s || a.calendar.getDefaultEventEnd(o, i), {
                start: i,
                end: s,
                visibleEnd: u
            }
        },
        segResizeMousedown: function(e, t) {
            function n() {
                i.destroyResize(), s.showEvent(a)
            }
            var r, i = this,
                s = this.view,
                o = s.calendar,
                u = e.el,
                a = e.event,
                f = a.start,
                l = s.calendar.getEventEnd(a),
                c = null;
            r = new Y(this.coordMap, {
                distance: 5,
                scroll: s.opt("dragScroll"),
                dragStart: function(t) {
                    i.triggerSegMouseout(e, t), i.isResizingSeg = !0, s.trigger("eventResizeStart", u[0], a, t, {})
                },
                cellOver: function(t, r) {
                    r.isBefore(f) && (r = f), c = r.clone().add(i.cellDuration), o.isEventAllowedInRange(a, f, c) ? c.isSame(l) ? (c = null, n()) : (i.renderResize(f, c, e), s.hideEvent(a)) : (c = null, n(), p())
                },
                cellOut: function() {
                    c = null, n(), d()
                },
                dragStop: function(e) {
                    i.isResizingSeg = !1, n(), d(), s.trigger("eventResizeStop", u[0], a, e, {}), c && s.eventResize(u[0], a, c, e)
                }
            }), r.mousedown(t)
        },
        getSegClasses: function(e, t, n) {
            var r = e.event,
                i = ["fc-event", e.isStart ? "fc-start" : "fc-not-start", e.isEnd ? "fc-end" : "fc-not-end"].concat(r.className, r.source ? r.source.className : []);
            return t && i.push("fc-draggable"), n && i.push("fc-resizable"), i
        },
        getEventSkinCss: function(e) {
            var t = this.view,
                n = e.source || {}, r = e.color,
                i = n.color,
                s = t.opt("eventColor"),
                o = e.backgroundColor || r || n.backgroundColor || i || t.opt("eventBackgroundColor") || s,
                u = e.borderColor || r || n.borderColor || i || t.opt("eventBorderColor") || s,
                a = e.textColor || n.textColor || t.opt("eventTextColor"),
                f = [];
            return o && f.push("background-color:" + o), u && f.push("border-color:" + u), a && f.push("color:" + a), f.join(";")
        },
        eventsToSegs: function(e, t) {
            var n, r = this.eventsToRanges(e),
                i = [];
            for (n = 0; r.length > n; n++) i.push.apply(i, this.eventRangeToSegs(r[n], t));
            return i
        },
        eventsToRanges: function(t) {
            var n = this,
                r = ot(t),
                i = [];
            return e.each(r, function(e, t) {
                t.length && i.push.apply(i, it(t[0]) ? n.eventsToInverseRanges(t) : n.eventsToNormalRanges(t))
            }), i
        },
        eventsToNormalRanges: function(e) {
            var t, n, r, i, s = this.view.calendar,
                o = [];
            for (t = 0; e.length > t; t++) n = e[t], r = n.start.clone().stripZone(), i = s.getEventEnd(n).stripZone(), o.push({
                event: n,
                start: r,
                end: i,
                eventStartMS: +r,
                eventDurationMS: i - r
            });
            return o
        },
        eventsToInverseRanges: function(e) {
            var t, n, r = this.view,
                i = r.start.clone().stripZone(),
                s = r.end.clone().stripZone(),
                o = this.eventsToNormalRanges(e),
                u = [],
                a = e[0],
                f = i;
            for (o.sort(ut), t = 0; o.length > t; t++) n = o[t], n.start > f && u.push({
                event: a,
                start: f,
                end: n.start
            }), f = n.end;
            return s > f && u.push({
                event: a,
                start: f,
                end: s
            }), u
        },
        eventRangeToSegs: function(e, t) {
            var n, r, i;
            for (n = t ? t(e.start, e.end) : this.rangeToSegs(e.start, e.end), r = 0; n.length > r; r++) i = n[r], i.event = e.event, i.eventStartMS = e.eventStartMS, i.eventDurationMS = e.eventDurationMS;
            return n
        }
    }), ft.prototype = L(nt.prototype), e.extend(ft.prototype, {
        numbersVisible: !1,
        cellDuration: t.duration({
            days: 1
        }),
        bottomCoordPadding: 0,
        rowEls: null,
        dayEls: null,
        helperEls: null,
        render: function(t) {
            var n, r = this.view,
                i = "";
            for (n = 0; r.rowCnt > n; n++) i += this.dayRowHtml(n, t);
            this.el.html(i), this.rowEls = this.el.find(".fc-row"), this.dayEls = this.el.find(".fc-day"), this.dayEls.each(function(t, n) {
                var i = r.cellToDate(Math.floor(t / r.colCnt), t % r.colCnt);
                r.trigger("dayRender", null, i, e(n))
            }), nt.prototype.render.call(this)
        },
        destroy: function() {
            this.destroySegPopover()
        },
        dayRowHtml: function(e, t) {
            var n = this.view,
                r = ["fc-row", "fc-week", n.widgetContentClass];
            return t && r.push("fc-rigid"), '<div class="' + r.join(" ") + '">' + '<div class="fc-bg">' + "<table>" + this.rowHtml("day", e) + "</table>" + "</div>" + '<div class="fc-content-skeleton">' + "<table>" + (this.numbersVisible ? "<thead>" + this.rowHtml("number", e) + "</thead>" : "") + "</table>" + "</div>" + "</div>"
        },
        dayCellHtml: function(e, t, n) {
            return this.bgCellHtml(e, t, n)
        },
        buildCoords: function(t, n) {
            var r, i, s, o = this.view.colCnt;
            this.dayEls.slice(0, o).each(function(t, o) {
                r = e(o), i = r.offset().left, t && (s[1] = i), s = [i], n[t] = s
            }), s[1] = i + r.outerWidth(), this.rowEls.each(function(n, o) {
                r = e(o), i = r.offset().top, n && (s[1] = i), s = [i], t[n] = s
            }), s[1] = i + r.outerHeight() + this.bottomCoordPadding
        },
        getCellDate: function(e) {
            return this.view.cellToDate(e)
        },
        getCellDayEl: function(e) {
            return this.dayEls.eq(e.row * this.view.colCnt + e.col)
        },
        rangeToSegs: function(e, t) {
            return this.view.rangeToSegments(e, t)
        },
        renderDrag: function(e, t, n) {
            var r;
            return this.renderHighlight(e, t || this.view.calendar.getDefaultEventEnd(!0, e)), n && !n.el.closest(this.el).length ? (this.renderRangeHelper(e, t, n), r = this.view.opt("dragOpacity"), void 0 !== r && this.helperEls.css("opacity", r), !0) : void 0
        },
        destroyDrag: function() {
            this.destroyHighlight(), this.destroyHelper()
        },
        renderResize: function(e, t, n) {
            this.renderHighlight(e, t), this.renderRangeHelper(e, t, n)
        },
        destroyResize: function() {
            this.destroyHighlight(), this.destroyHelper()
        },
        renderHelper: function(t, n) {
            var r, i = [],
                s = this.eventsToSegs([t]);
            s = this.renderFgSegEls(s), r = this.renderSegRows(s), this.rowEls.each(function(t, s) {
                var o, u = e(s),
                    a = e('<div class="fc-helper-skeleton"><table/></div>');
                o = n && n.row === t ? n.el.position().top : u.find(".fc-content-skeleton tbody").position().top, a.css("top", o).find("table").append(r[t].tbodyEl), u.append(a), i.push(a[0])
            }), this.helperEls = e(i)
        },
        destroyHelper: function() {
            this.helperEls && (this.helperEls.remove(), this.helperEls = null)
        },
        fillSegTag: "td",
        renderFill: function(t, n) {
            var r, i, s, o = [];
            for (n = this.renderFillSegEls(t, n), r = 0; n.length > r; r++) i = n[r], s = this.renderFillRow(t, i), this.rowEls.eq(i.row).append(s), o.push(s[0]);
            return this.elsByFill[t] = e(o), n
        },
        renderFillRow: function(t, n) {
            var r, i, s = this.view.colCnt,
                o = n.leftCol,
                u = n.rightCol + 1;
            return r = e('<div class="fc-' + t.toLowerCase() + '-skeleton">' + "<table><tr/></table>" + "</div>"), i = r.find("tr"), o > 0 && i.append('<td colspan="' + o + '"/>'), i.append(n.el.attr("colspan", u - o)), s > u && i.append('<td colspan="' + (s - u) + '"/>'), this.bookendCells(i, t), r
        }
    }), e.extend(ft.prototype, {
        rowStructs: null,
        destroyEvents: function() {
            this.destroySegPopover(), nt.prototype.destroyEvents.apply(this, arguments)
        },
        getSegs: function() {
            return nt.prototype.getSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function(t) {
            var n = e.grep(t, function(e) {
                return e.event.allDay
            });
            return nt.prototype.renderBgSegs.call(this, n)
        },
        renderFgSegs: function(t) {
            var n;
            return t = this.renderFgSegEls(t), n = this.rowStructs = this.renderSegRows(t), this.rowEls.each(function(t, r) {
                e(r).find(".fc-content-skeleton > table").append(n[t].tbodyEl)
            }), t
        },
        destroyFgSegs: function() {
            for (var e, t = this.rowStructs || []; e = t.pop();) e.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function(e) {
            var t, n, r = [];
            for (t = this.groupSegRows(e), n = 0; t.length > n; n++) r.push(this.renderSegRow(n, t[n]));
            return r
        },
        fgSegHtml: function(e, t) {
            var n, r = this.view,
                i = r.opt("isRTL"),
                s = e.event,
                o = r.isEventDraggable(s),
                u = !t && s.allDay && e.isEnd && r.isEventResizable(s),
                a = this.getSegClasses(e, o, u),
                f = this.getEventSkinCss(s),
                l = "";
            return a.unshift("fc-day-grid-event"), !s.allDay && e.isStart && (l = '<span class="fc-time">' + M(r.getEventTimeText(s)) + "</span>"), n = '<span class="fc-title">' + (M(s.title || "") || "&nbsp;") + "</span>", '<a class="' + a.join(" ") + '"' + (s.url ? ' href="' + M(s.url) + '"' : "") + (f ? ' style="' + f + '"' : "") + ">" + '<div class="fc-content">' + (i ? n + " " + l : l + " " + n) + "</div>" + (u ? '<div class="fc-resizer"/>' : "") + "</a>"
        },
        renderSegRow: function(t, n) {
            function r(t) {
                for (; t > o;) l = (y[i - 1] || [])[o], l ? l.attr("rowspan", parseInt(l.attr("rowspan") || 1, 10) + 1) : (l = e("<td/>"), u.append(l)), g[i][o] = l, y[i][o] = l, o++
            }
            var i, s, o, u, a, f, l, c = this.view,
                h = c.colCnt,
                p = this.buildSegLevels(n),
                d = Math.max(1, p.length),
                v = e("<tbody/>"),
                m = [],
                g = [],
                y = [];
            for (i = 0; d > i; i++) {
                if (s = p[i], o = 0, u = e("<tr/>"), m.push([]), g.push([]), y.push([]), s)
                    for (a = 0; s.length > a; a++) {
                        for (f = s[a], r(f.leftCol), l = e('<td class="fc-event-container"/>').append(f.el), f.leftCol != f.rightCol ? l.attr("colspan", f.rightCol - f.leftCol + 1) : y[i][o] = l; f.rightCol >= o;) g[i][o] = l, m[i][o] = f, o++;
                        u.append(l)
                    }
                r(h), this.bookendCells(u, "eventSkeleton"), v.append(u)
            }
            return {
                row: t,
                tbodyEl: v,
                cellMatrix: g,
                segMatrix: m,
                segLevels: p,
                segs: n
            }
        },
        buildSegLevels: function(e) {
            var t, n, r, i = [];
            for (e.sort(at), t = 0; e.length > t; t++) {
                for (n = e[t], r = 0; i.length > r && lt(n, i[r]); r++);
                n.level = r, (i[r] || (i[r] = [])).push(n)
            }
            for (r = 0; i.length > r; r++) i[r].sort(ct);
            return i
        },
        groupSegRows: function(e) {
            var t, n = this.view,
                r = [];
            for (t = 0; n.rowCnt > t; t++) r.push([]);
            for (t = 0; e.length > t; t++) r[e[t].row].push(e[t]);
            return r
        }
    }), e.extend(ft.prototype, {
        segPopover: null,
        popoverSegs: null,
        destroySegPopover: function() {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function(e) {
            var t, n, r = this.rowStructs || [];
            for (t = 0; r.length > t; t++) this.unlimitRow(t), n = e ? "number" == typeof e ? e : this.computeRowLevelLimit(t) : !1, n !== !1 && this.limitRow(t, n)
        },
        computeRowLevelLimit: function(e) {
            var t, n, r = this.rowEls.eq(e),
                i = r.height(),
                s = this.rowStructs[e].tbodyEl.children();
            for (t = 0; s.length > t; t++)
                if (n = s.eq(t).removeClass("fc-limited"), n.position().top + n.outerHeight() > i) return t;
            return !1
        },
        limitRow: function(t, n) {
            function r(r) {
                for (; r > T;) i = {
                    row: t,
                    col: T
                }, l = w.getCellSegs(i, n), l.length && (p = o[n - 1][T], b = w.renderMoreLink(i, l), y = e("<div/>").append(b), p.append(y), x.push(y[0])), T++
            }
            var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = this,
                E = this.view,
                S = this.rowStructs[t],
                x = [],
                T = 0;
            if (n && S.segLevels.length > n) {
                for (s = S.segLevels[n - 1], o = S.cellMatrix, u = S.tbodyEl.children().slice(n).addClass("fc-limited").get(), a = 0; s.length > a; a++) {
                    for (f = s[a], r(f.leftCol), h = [], c = 0; f.rightCol >= T;) i = {
                        row: t,
                        col: T
                    }, l = this.getCellSegs(i, n), h.push(l), c += l.length, T++;
                    if (c) {
                        for (p = o[n - 1][f.leftCol], d = p.attr("rowspan") || 1, v = [], m = 0; h.length > m; m++) g = e('<td class="fc-more-cell"/>').attr("rowspan", d), l = h[m], i = {
                            row: t,
                            col: f.leftCol + m
                        }, b = this.renderMoreLink(i, [f].concat(l)), y = e("<div/>").append(b), g.append(y), v.push(g[0]), x.push(g[0]);
                        p.addClass("fc-limited").after(e(v)), u.push(p[0])
                    }
                }
                r(E.colCnt), S.moreEls = e(x), S.limitedEls = e(u)
            }
        },
        unlimitRow: function(e) {
            var t = this.rowStructs[e];
            t.moreEls && (t.moreEls.remove(), t.moreEls = null), t.limitedEls && (t.limitedEls.removeClass("fc-limited"), t.limitedEls = null)
        },
        renderMoreLink: function(t, n) {
            var r = this,
                i = this.view;
            return e('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click", function(s) {
                var o = i.opt("eventLimitClick"),
                    u = i.cellToDate(t),
                    a = e(this),
                    f = r.getCellDayEl(t),
                    l = r.getCellSegs(t),
                    c = r.resliceDaySegs(l, u),
                    h = r.resliceDaySegs(n, u);
                "function" == typeof o && (o = i.trigger("eventLimitClick", null, {
                    date: u,
                    dayEl: f,
                    moreEl: a,
                    segs: c,
                    hiddenSegs: h
                }, s)), "popover" === o ? r.showSegPopover(u, t, a, c) : "string" == typeof o && i.calendar.zoomTo(u, o)
            })
        },
        showSegPopover: function(e, t, n, r) {
            var i, s, o = this,
                u = this.view,
                a = n.parent();
            i = 1 == u.rowCnt ? this.view.el : this.rowEls.eq(t.row), s = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(e, r),
                parentEl: this.el,
                top: i.offset().top,
                autoHide: !0,
                viewportConstrain: u.opt("popoverViewportConstrain"),
                hide: function() {
                    o.segPopover.destroy(), o.segPopover = null, o.popoverSegs = null
                }
            }, u.opt("isRTL") ? s.right = a.offset().left + a.outerWidth() + 1 : s.left = a.offset().left - 1, this.segPopover = new K(s), this.segPopover.show()
        },
        renderSegPopoverContent: function(t, n) {
            var r, i = this.view,
                s = i.opt("theme"),
                o = t.format(i.opt("dayPopoverFormat")),
                u = e('<div class="fc-header ' + i.widgetHeaderClass + '">' + '<span class="fc-close ' + (s ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span>' + '<span class="fc-title">' + M(o) + "</span>" + '<div class="fc-clear"/>' + "</div>" + '<div class="fc-body ' + i.widgetContentClass + '">' + '<div class="fc-event-container"></div>' + "</div>"),
                a = u.find(".fc-event-container");
            for (n = this.renderFgSegEls(n, !0), this.popoverSegs = n, r = 0; n.length > r; r++) n[r].cellDate = t, a.append(n[r].el);
            return u
        },
        resliceDaySegs: function(t, n) {
            var r = e.map(t, function(e) {
                return e.event
            }),
                i = n.clone().stripTime(),
                s = i.clone().add(1, "days");
            return this.eventsToSegs(r, function(e, t) {
                var n = x(e, t, i, s);
                return n ? [n] : []
            })
        },
        getMoreLinkText: function(e) {
            var t = this.view,
                n = t.opt("eventLimitText");
            return "function" == typeof n ? n(e) : "+" + e + " " + n
        },
        getCellSegs: function(e, t) {
            for (var n, r = this.rowStructs[e.row].segMatrix, i = t || 0, s = []; r.length > i;) n = r[i][e.col], n && s.push(n), i++;
            return s
        }
    }), ht.prototype = L(nt.prototype), e.extend(ht.prototype, {
        slotDuration: null,
        snapDuration: null,
        minTime: null,
        maxTime: null,
        dayEls: null,
        slatEls: null,
        slatTops: null,
        helperEl: null,
        businessHourSegs: null,
        render: function() {
            this.processOptions(), this.el.html(this.renderHtml()), this.dayEls = this.el.find(".fc-day"), this.slatEls = this.el.find(".fc-slats tr"), this.computeSlatTops(), this.renderBusinessHours(), nt.prototype.render.call(this)
        },
        renderBusinessHours: function() {
            var e = this.view.calendar.getBusinessHoursEvents();
            this.businessHourSegs = this.renderFill("businessHours", this.eventsToSegs(e), "bgevent")
        },
        renderHtml: function() {
            return '<div class="fc-bg"><table>' + this.rowHtml("slotBg") + "</table>" + "</div>" + '<div class="fc-slats">' + "<table>" + this.slatRowHtml() + "</table>" + "</div>"
        },
        slotBgCellHtml: function(e, t, n) {
            return this.bgCellHtml(e, t, n)
        },
        slatRowHtml: function() {
            for (var e, n, r, i = this.view, s = i.calendar, o = i.opt("isRTL"), u = "", a = 0 === this.slotDuration.asMinutes() % 15, f = t.duration(+this.minTime); this.maxTime > f;) e = i.start.clone().time(f), n = e.minutes(), r = '<td class="fc-axis fc-time ' + i.widgetContentClass + '" ' + i.axisStyleAttr() + ">" + (a && n ? "" : "<span>" + M(s.formatDate(e, i.opt("axisFormat"))) + "</span>") + "</td>", u += "<tr " + (n ? 'class="fc-minor"' : "") + ">" + (o ? "" : r) + '<td class="' + i.widgetContentClass + '"/>' + (o ? r : "") + "</tr>", f.add(this.slotDuration);
            return u
        },
        processOptions: function() {
            var e = this.view,
                n = e.opt("slotDuration"),
                r = e.opt("snapDuration");
            n = t.duration(n), r = r ? t.duration(r) : n, this.slotDuration = n, this.snapDuration = r, this.cellDuration = r, this.minTime = t.duration(e.opt("minTime")), this.maxTime = t.duration(e.opt("maxTime"))
        },
        rangeToSegs: function(e, t) {
            var n, r, i, s, o, u = this.view,
                a = [];
            for (e = e.clone().stripZone(), t = t.clone().stripZone(), r = 0; u.colCnt > r; r++) i = u.cellToDate(0, r), s = i.clone().time(this.minTime), o = i.clone().time(this.maxTime), n = x(e, t, s, o), n && (n.col = r, a.push(n));
            return a
        },
        resize: function() {
            this.computeSlatTops(), this.updateSegVerticals()
        },
        buildCoords: function(n, r) {
            var i, s, o = this.view.colCnt,
                u = this.el.offset().top,
                a = t.duration(+this.minTime),
                f = null;
            for (this.dayEls.slice(0, o).each(function(t, n) {
                i = e(n), s = i.offset().left, f && (f[1] = s), f = [s], r[t] = f
            }), f[1] = s + i.outerWidth(), f = null; this.maxTime > a;) s = u + this.computeTimeTop(a), f && (f[1] = s), f = [s], n.push(f), a.add(this.snapDuration);
            f[1] = u + this.computeTimeTop(a)
        },
        getCellDate: function(e) {
            var t = this.view,
                n = t.calendar;
            return n.rezoneDate(t.cellToDate(0, e.col).time(this.minTime + this.snapDuration * e.row))
        },
        getCellDayEl: function(e) {
            return this.dayEls.eq(e.col)
        },
        computeDateTop: function(e, n) {
            return this.computeTimeTop(t.duration(e.clone().stripZone() - n.clone().stripTime()))
        },
        computeTimeTop: function(e) {
            var t, n, r, i, s = (e - this.minTime) / this.slotDuration;
            return s = Math.max(0, s), s = Math.min(this.slatEls.length, s), t = Math.floor(s), n = s - t, r = this.slatTops[t], n ? (i = this.slatTops[t + 1], r + (i - r) * n) : r
        },
        computeSlatTops: function() {
            var t, n = [];
            this.slatEls.each(function(r, i) {
                t = e(i).position().top, n.push(t)
            }), n.push(t + this.slatEls.last().outerHeight()), this.slatTops = n
        },
        renderDrag: function(e, t, n) {
            var r;
            return n ? (this.renderRangeHelper(e, t, n), r = this.view.opt("dragOpacity"), void 0 !== r && this.helperEl.css("opacity", r), !0) : (this.renderHighlight(e, t || this.view.calendar.getDefaultEventEnd(!1, e)), void 0)
        },
        destroyDrag: function() {
            this.destroyHelper(), this.destroyHighlight()
        },
        renderResize: function(e, t, n) {
            this.renderRangeHelper(e, t, n)
        },
        destroyResize: function() {
            this.destroyHelper()
        },
        renderHelper: function(t, n) {
            var r, i, s, o, u = this.eventsToSegs([t]);
            for (u = this.renderFgSegEls(u), r = this.renderSegTable(u), i = 0; u.length > i; i++) s = u[i], n && n.col === s.col && (o = n.el, s.el.css({
                left: o.css("left"),
                right: o.css("right"),
                "margin-left": o.css("margin-left"),
                "margin-right": o.css("margin-right")
            }));
            this.helperEl = e('<div class="fc-helper-skeleton"/>').append(r).appendTo(this.el)
        },
        destroyHelper: function() {
            this.helperEl && (this.helperEl.remove(), this.helperEl = null)
        },
        renderSelection: function(e, t) {
            this.view.opt("selectHelper") ? this.renderRangeHelper(e, t) : this.renderHighlight(e, t)
        },
        destroySelection: function() {
            this.destroyHelper(), this.destroyHighlight()
        },
        renderFill: function(t, n, r) {
            var i, s, o, u, a, f, l, c, h, p, d = this.view;
            if (n.length) {
                for (n = this.renderFillSegEls(t, n), i = this.groupSegCols(n), r = r || t.toLowerCase(), s = e('<div class="fc-' + r + '-skeleton">' + "<table><tr/></table>" + "</div>"), o = s.find("tr"), u = 0; i.length > u; u++)
                    if (a = i[u], f = e("<td/>").appendTo(o), a.length)
                        for (l = e('<div class="fc-' + r + '-container"/>').appendTo(f), c = d.cellToDate(0, u), h = 0; a.length > h; h++) p = a[h], l.append(p.el.css({
                            top: this.computeDateTop(p.start, c),
                            bottom: -this.computeDateTop(p.end, c)
                        }));
                this.bookendCells(o, t), this.el.append(s), this.elsByFill[t] = s
            }
            return n
        }
    }), e.extend(ht.prototype, {
        eventSkeletonEl: null,
        renderFgSegs: function(t) {
            return t = this.renderFgSegEls(t), this.el.append(this.eventSkeletonEl = e('<div class="fc-content-skeleton"/>').append(this.renderSegTable(t))), t
        },
        destroyFgSegs: function() {
            this.eventSkeletonEl && (this.eventSkeletonEl.remove(), this.eventSkeletonEl = null)
        },
        renderSegTable: function(t) {
            var n, r, i, s, o, u, a = e("<table><tr/></table>"),
                f = a.find("tr");
            for (n = this.groupSegCols(t), this.computeSegVerticals(t), s = 0; n.length > s; s++) {
                for (o = n[s], pt(o), u = e('<div class="fc-event-container"/>'), r = 0; o.length > r; r++) i = o[r], i.el.css(this.generateSegPositionCss(i)), 30 > i.bottom - i.top && i.el.addClass("fc-short"), u.append(i.el);
                f.append(e("<td/>").append(u))
            }
            return this.bookendCells(f, "eventSkeleton"), a
        },
        updateSegVerticals: function() {
            var e, t = (this.segs || []).concat(this.businessHourSegs || []);
            for (this.computeSegVerticals(t), e = 0; t.length > e; e++) t[e].el.css(this.generateSegVerticalCss(t[e]))
        },
        computeSegVerticals: function(e) {
            var t, n;
            for (t = 0; e.length > t; t++) n = e[t], n.top = this.computeDateTop(n.start, n.start), n.bottom = this.computeDateTop(n.end, n.start)
        },
        fgSegHtml: function(e, t) {
            var n, r, i, s = this.view,
                o = e.event,
                u = s.isEventDraggable(o),
                a = !t && e.isEnd && s.isEventResizable(o),
                f = this.getSegClasses(e, u, a),
                l = this.getEventSkinCss(o);
            return f.unshift("fc-time-grid-event"), s.isMultiDayEvent(o) ? (e.isStart || e.isEnd) && (n = s.getEventTimeText(e.start, e.end), r = s.getEventTimeText(e.start, e.end, "LT"), i = s.getEventTimeText(e.start, null)) : (n = s.getEventTimeText(o), r = s.getEventTimeText(o, "LT"), i = s.getEventTimeText(o.start, null)), '<a class="' + f.join(" ") + '"' + (o.url ? ' href="' + M(o.url) + '"' : "") + (l ? ' style="' + l + '"' : "") + ">" + '<div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + M(i) + '"' + ' data-full="' + M(r) + '"' + ">" + "<span>" + M(n) + "</span>" + "</div>" : "") + (o.title ? '<div class="fc-title">' + M(o.title) + "</div>" : "") + "</div>" + '<div class="fc-bg"/>' + (a ? '<div class="fc-resizer"/>' : "") + "</a>"
        },
        generateSegPositionCss: function(e) {
            var t, n, r = this.view,
                i = r.opt("isRTL"),
                s = r.opt("slotEventOverlap"),
                o = e.backwardCoord,
                u = e.forwardCoord,
                a = this.generateSegVerticalCss(e);
            return s && (u = Math.min(1, o + 2 * (u - o))), i ? (t = 1 - u, n = o) : (t = o, n = 1 - u), a.zIndex = e.level + 1, a.left = 100 * t + "%", a.right = 100 * n + "%", s && e.forwardPressure && (a[i ? "marginLeft" : "marginRight"] = 20), a
        },
        generateSegVerticalCss: function(e) {
            return {
                top: e.top,
                bottom: -e.bottom
            }
        },
        groupSegCols: function(e) {
            var t, n = this.view,
                r = [];
            for (t = 0; n.colCnt > t; t++) r.push([]);
            for (t = 0; e.length > t; t++) r[e[t].col].push(e[t]);
            return r
        }
    }), Et.prototype = {
        calendar: null,
        coordMap: null,
        el: null,
        start: null,
        end: null,
        intervalStart: null,
        intervalEnd: null,
        rowCnt: null,
        colCnt: null,
        isSelected: !1,
        scrollerEl: null,
        scrollTop: null,
        widgetHeaderClass: null,
        widgetContentClass: null,
        highlightStateClass: null,
        documentMousedownProxy: null,
        documentDragStartProxy: null,
        init: function() {
            var t = this.opt("theme") ? "ui" : "fc";
            this.widgetHeaderClass = t + "-widget-header", this.widgetContentClass = t + "-widget-content", this.highlightStateClass = t + "-state-highlight", this.documentMousedownProxy = e.proxy(this, "documentMousedown"), this.documentDragStartProxy = e.proxy(this, "documentDragStart")
        },
        render: function() {
            this.updateSize(), this.trigger("viewRender", this, this, this.el), e(document).on("mousedown", this.documentMousedownProxy).on("dragstart", this.documentDragStartProxy)
        },
        destroy: function() {
            this.unselect(), this.trigger("viewDestroy", this, this, this.el), this.destroyEvents(), this.el.empty(), e(document).off("mousedown", this.documentMousedownProxy).off("dragstart", this.documentDragStartProxy)
        },
        incrementDate: function() {},
        updateSize: function(e) {
            e && this.recordScroll(), this.updateHeight(), this.updateWidth()
        },
        updateWidth: function() {},
        updateHeight: function() {
            var e = this.calendar;
            this.setHeight(e.getSuggestedViewHeight(), e.isHeightAuto())
        },
        setHeight: function() {},
        computeScrollerHeight: function(e) {
            var t, n = this.el.add(this.scrollerEl);
            return n.css({
                position: "relative",
                left: -1
            }), t = this.el.outerHeight() - this.scrollerEl.height(), n.css({
                position: "",
                left: ""
            }), e - t
        },
        recordScroll: function() {
            this.scrollerEl && (this.scrollTop = this.scrollerEl.scrollTop())
        },
        restoreScroll: function() {
            null !== this.scrollTop && this.scrollerEl.scrollTop(this.scrollTop)
        },
        renderEvents: function() {
            this.segEach(function(e) {
                this.trigger("eventAfterRender", e.event, e.event, e.el)
            }), this.trigger("eventAfterAllRender")
        },
        destroyEvents: function() {
            this.segEach(function(e) {
                this.trigger("eventDestroy", e.event, e.event, e.el)
            })
        },
        resolveEventEl: function(t, n) {
            var r = this.trigger("eventRender", t, t, n);
            return r === !1 ? n = null : r && r !== !0 && (n = e(r)), n
        },
        showEvent: function(e) {
            this.segEach(function(e) {
                e.el.css("visibility", "")
            }, e)
        },
        hideEvent: function(e) {
            this.segEach(function(e) {
                e.el.css("visibility", "hidden")
            }, e)
        },
        segEach: function(e, t) {
            var n, r = this.getSegs();
            for (n = 0; r.length > n; n++) t && r[n].event._id !== t._id || e.call(this, r[n])
        },
        getSegs: function() {},
        renderDrag: function() {},
        destroyDrag: function() {},
        documentDragStart: function(t) {
            var n, r, i, s, o, u = this,
                a = this.calendar,
                f = null,
                l = null,
                c = null;
            this.opt("droppable") && (n = e(t.target), r = this.opt("dropAccept"), (e.isFunction(r) ? r.call(n[0], n) : n.is(r)) && (i = St(n), s = i.eventProps, o = new Y(this.coordMap, {
                cellOver: function(t, n) {
                    f = n, l = i.duration ? f.clone().add(i.duration) : null, c = l || a.getDefaultEventEnd(!f.hasTime(), f), s && e.extend(s, {
                        start: f,
                        end: l
                    }), a.isExternalDragAllowedInRange(f, c, s) ? u.renderDrag(f, c) : (f = null, p())
                },
                cellOut: function() {
                    f = null, u.destroyDrag(), d()
                }
            }), e(document).one("dragstop", function(e, t) {
                var r;
                u.destroyDrag(), d(), f && (i.startTime && !f.hasTime() && f.time(i.startTime), u.trigger("drop", n[0], f, e, t), s && (r = a.renderEvent(s, i.stick), u.trigger("eventReceive", null, r[0])))
            }), o.startDrag(t)))
        },
        select: function(e, t, n) {
            this.unselect(n), this.renderSelection(e, t), this.reportSelection(e, t, n)
        },
        renderSelection: function() {},
        reportSelection: function(e, t, n) {
            this.isSelected = !0, this.trigger("select", null, e, t, n)
        },
        unselect: function(e) {
            this.isSelected && (this.isSelected = !1, this.destroySelection(), this.trigger("unselect", null, e))
        },
        destroySelection: function() {},
        documentMousedown: function(t) {
            var n;
            this.isSelected && this.opt("unselectAuto") && S(t) && (n = this.opt("unselectCancel"), n && e(t.target).closest(n).length || this.unselect(t))
        }
    }, Ht.dataAttrPrefix = "", xt.prototype = L(Et.prototype), e.extend(xt.prototype, {
        dayGrid: null,
        dayNumbersVisible: !1,
        weekNumbersVisible: !1,
        weekNumberWidth: null,
        headRowEl: null,
        render: function(e, t, n) {
            this.rowCnt = e, this.colCnt = t, this.dayNumbersVisible = n, this.weekNumbersVisible = this.opt("weekNumbers"), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderHtml()), this.headRowEl = this.el.find("thead .fc-row"), this.scrollerEl = this.el.find(".fc-day-grid-container"), this.dayGrid.coordMap.containerEl = this.scrollerEl, this.dayGrid.el = this.el.find(".fc-day-grid"), this.dayGrid.render(this.hasRigidRows()), Et.prototype.render.call(this)
        },
        destroy: function() {
            this.dayGrid.destroy(), Et.prototype.destroy.call(this)
        },
        renderHtml: function() {
            return '<table><thead><tr><td class="' + this.widgetHeaderClass + '">' + this.dayGrid.headHtml() + "</td>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + '<td class="' + this.widgetContentClass + '">' + '<div class="fc-day-grid-container">' + '<div class="fc-day-grid"/>' + "</div>" + "</td>" + "</tr>" + "</tbody>" + "</table>"
        },
        headIntroHtml: function() {
            return this.weekNumbersVisible ? '<th class="fc-week-number ' + this.widgetHeaderClass + '" ' + this.weekNumberStyleAttr() + ">" + "<span>" + M(this.opt("weekNumberTitle")) + "</span>" + "</th>" : void 0
        },
        numberIntroHtml: function(e) {
            return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + ">" + "<span>" + this.calendar.calculateWeekNumber(this.cellToDate(e, 0)) + "</span>" + "</td>" : void 0
        },
        dayIntroHtml: function() {
            return this.weekNumbersVisible ? '<td class="fc-week-number ' + this.widgetContentClass + '" ' + this.weekNumberStyleAttr() + "></td>" : void 0
        },
        introHtml: function() {
            return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + "></td>" : void 0
        },
        numberCellHtml: function(e, t, n) {
            var r;
            return this.dayNumbersVisible ? (r = this.dayGrid.getDayClasses(n), r.unshift("fc-day-number"), '<td class="' + r.join(" ") + '" data-date="' + n.format() + '">' + n.date() + "</td>") : "<td/>"
        },
        weekNumberStyleAttr: function() {
            return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
        },
        hasRigidRows: function() {
            var e = this.opt("eventLimit");
            return e && "number" != typeof e
        },
        updateWidth: function() {
            this.weekNumbersVisible && (this.weekNumberWidth = g(this.el.find(".fc-week-number")))
        },
        setHeight: function(e, t) {
            var n, r = this.opt("eventLimit");
            b(this.scrollerEl), h(this.headRowEl), this.dayGrid.destroySegPopover(), r && "number" == typeof r && this.dayGrid.limitRows(r), n = this.computeScrollerHeight(e), this.setGridHeight(n, t), r && "number" != typeof r && this.dayGrid.limitRows(r), !t && y(this.scrollerEl, n) && (c(this.headRowEl, E(this.scrollerEl)), n = this.computeScrollerHeight(e), this.scrollerEl.height(n), this.restoreScroll())
        },
        setGridHeight: function(e, t) {
            t ? m(this.dayGrid.rowEls) : v(this.dayGrid.rowEls, e, !0)
        },
        renderEvents: function(e) {
            this.dayGrid.renderEvents(e), this.updateHeight(), Et.prototype.renderEvents.call(this, e)
        },
        getSegs: function() {
            return this.dayGrid.getSegs()
        },
        destroyEvents: function() {
            Et.prototype.destroyEvents.call(this), this.recordScroll(), this.dayGrid.destroyEvents()
        },
        renderDrag: function(e, t, n) {
            return this.dayGrid.renderDrag(e, t, n)
        },
        destroyDrag: function() {
            this.dayGrid.destroyDrag()
        },
        renderSelection: function(e, t) {
            this.dayGrid.renderSelection(e, t)
        },
        destroySelection: function() {
            this.dayGrid.destroySelection()
        }
    }), i({
        fixedWeekCount: !0
    }), Bt.month = Tt, Tt.prototype = L(xt.prototype), e.extend(Tt.prototype, {
        name: "month",
        incrementDate: function(e, t) {
            return e.clone().stripTime().add(t, "months").startOf("month")
        },
        render: function(e) {
            var t;
            this.intervalStart = e.clone().stripTime().startOf("month"), this.intervalEnd = this.intervalStart.clone().add(1, "months"), this.start = this.intervalStart.clone(), this.start = this.skipHiddenDays(this.start), this.start.startOf("week"), this.start = this.skipHiddenDays(this.start), this.end = this.intervalEnd.clone(), this.end = this.skipHiddenDays(this.end, -1, !0), this.end.add((7 - this.end.weekday()) % 7, "days"), this.end = this.skipHiddenDays(this.end, -1, !0), t = Math.ceil(this.end.diff(this.start, "weeks", !0)), this.isFixedWeeks() && (this.end.add(6 - t, "weeks"), t = 6), this.title = this.calendar.formatDate(this.intervalStart, this.opt("titleFormat")), xt.prototype.render.call(this, t, this.getCellsPerWeek(), !0)
        },
        setGridHeight: function(e, t) {
            t = t || "variable" === this.opt("weekMode"), t && (e *= this.rowCnt / 6), v(this.dayGrid.rowEls, e, !t)
        },
        isFixedWeeks: function() {
            var e = this.opt("weekMode");
            return e ? "fixed" === e : this.opt("fixedWeekCount")
        }
    }), Bt.basicWeek = Nt, Nt.prototype = L(xt.prototype), e.extend(Nt.prototype, {
        name: "basicWeek",
        incrementDate: function(e, t) {
            return e.clone().stripTime().add(t, "weeks").startOf("week")
        },
        render: function(e) {
            this.intervalStart = e.clone().stripTime().startOf("week"), this.intervalEnd = this.intervalStart.clone().add(1, "weeks"), this.start = this.skipHiddenDays(this.intervalStart), this.end = this.skipHiddenDays(this.intervalEnd, -1, !0), this.title = this.calendar.formatRange(this.start, this.end.clone().subtract(1), this.opt("titleFormat"), " â€” "), xt.prototype.render.call(this, 1, this.getCellsPerWeek(), !1)
        }
    }), Bt.basicDay = Ct, Ct.prototype = L(xt.prototype), e.extend(Ct.prototype, {
        name: "basicDay",
        incrementDate: function(e, t) {
            var n = e.clone().stripTime().add(t, "days");
            return n = this.skipHiddenDays(n, 0 > t ? -1 : 1)
        },
        render: function(e) {
            this.start = this.intervalStart = e.clone().stripTime(), this.end = this.intervalEnd = this.start.clone().add(1, "days"), this.title = this.calendar.formatDate(this.start, this.opt("titleFormat")), xt.prototype.render.call(this, 1, 1, !1)
        }
    }), i({
        allDaySlot: !0,
        allDayText: "all-day",
        scrollTime: "06:00:00",
        slotDuration: "00:30:00",
        axisFormat: kt,
        timeFormat: {
            agenda: Lt
        },
        minTime: "00:00:00",
        maxTime: "24:00:00",
        slotEventOverlap: !0
    });
    var Qt = 5;
    At.prototype = L(Et.prototype), e.extend(At.prototype, {
        timeGrid: null,
        dayGrid: null,
        axisWidth: null,
        noScrollRowEls: null,
        bottomRuleEl: null,
        bottomRuleHeight: null,
        render: function(t) {
            this.rowCnt = 1, this.colCnt = t, this.el.addClass("fc-agenda-view").html(this.renderHtml()), this.scrollerEl = this.el.find(".fc-time-grid-container"), this.timeGrid.coordMap.containerEl = this.scrollerEl, this.timeGrid.el = this.el.find(".fc-time-grid"), this.timeGrid.render(), this.bottomRuleEl = e('<hr class="' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.el = this.el.find(".fc-day-grid"), this.dayGrid.render(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)"), Et.prototype.render.call(this), this.resetScroll()
        },
        destroy: function() {
            this.timeGrid.destroy(), this.dayGrid && this.dayGrid.destroy(), Et.prototype.destroy.call(this)
        },
        renderHtml: function() {
            return '<table><thead><tr><td class="' + this.widgetHeaderClass + '">' + this.timeGrid.headHtml() + "</td>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + '<td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="' + this.widgetHeaderClass + '"/>' : "") + '<div class="fc-time-grid-container">' + '<div class="fc-time-grid"/>' + "</div>" + "</td>" + "</tr>" + "</tbody>" + "</table>"
        },
        headIntroHtml: function() {
            var e, t, n, r;
            return this.opt("weekNumbers") ? (e = this.cellToDate(0, 0), t = this.calendar.calculateWeekNumber(e), n = this.opt("weekNumberTitle"), r = this.opt("isRTL") ? t + n : n + t, '<th class="fc-axis fc-week-number ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + ">" + "<span>" + M(r) + "</span>" + "</th>") : '<th class="fc-axis ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + "></th>"
        },
        dayIntroHtml: function() {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + ">" + "<span>" + (this.opt("allDayHtml") || M(this.opt("allDayText"))) + "</span>" + "</td>"
        },
        slotBgIntroHtml: function() {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + "></td>"
        },
        introHtml: function() {
            return '<td class="fc-axis" ' + this.axisStyleAttr() + "></td>"
        },
        axisStyleAttr: function() {
            return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
        },
        updateSize: function(e) {
            e && this.timeGrid.resize(), Et.prototype.updateSize.call(this, e)
        },
        updateWidth: function() {
            this.axisWidth = g(this.el.find(".fc-axis"))
        },
        setHeight: function(e, t) {
            var n, r;
            null === this.bottomRuleHeight && (this.bottomRuleHeight = this.bottomRuleEl.outerHeight()), this.bottomRuleEl.hide(), this.scrollerEl.css("overflow", ""), b(this.scrollerEl), h(this.noScrollRowEls), this.dayGrid && (this.dayGrid.destroySegPopover(), n = this.opt("eventLimit"), n && "number" != typeof n && (n = Qt), n && this.dayGrid.limitRows(n)), t || (r = this.computeScrollerHeight(e), y(this.scrollerEl, r) ? (c(this.noScrollRowEls, E(this.scrollerEl)), r = this.computeScrollerHeight(e), this.scrollerEl.height(r), this.restoreScroll()) : (this.scrollerEl.height(r).css("overflow", "hidden"), this.bottomRuleEl.show()))
        },
        resetScroll: function() {
            function e() {
                n.scrollerEl.scrollTop(i)
            }
            var n = this,
                r = t.duration(this.opt("scrollTime")),
                i = this.timeGrid.computeTimeTop(r);
            i = Math.ceil(i), i && i++, e(), setTimeout(e, 0)
        },
        renderEvents: function(e) {
            var t, n, r = [],
                i = [],
                s = [];
            for (n = 0; e.length > n; n++) e[n].allDay ? r.push(e[n]) : i.push(e[n]);
            t = this.timeGrid.renderEvents(i), this.dayGrid && (s = this.dayGrid.renderEvents(r)), this.updateHeight(), Et.prototype.renderEvents.call(this, e)
        },
        getSegs: function() {
            return this.timeGrid.getSegs().concat(this.dayGrid ? this.dayGrid.getSegs() : [])
        },
        destroyEvents: function() {
            Et.prototype.destroyEvents.call(this), this.recordScroll(), this.timeGrid.destroyEvents(), this.dayGrid && this.dayGrid.destroyEvents()
        },
        renderDrag: function(e, t, n) {
            return e.hasTime() ? this.timeGrid.renderDrag(e, t, n) : this.dayGrid ? this.dayGrid.renderDrag(e, t, n) : void 0
        },
        destroyDrag: function() {
            this.timeGrid.destroyDrag(), this.dayGrid && this.dayGrid.destroyDrag()
        },
        renderSelection: function(e, t) {
            e.hasTime() || t.hasTime() ? this.timeGrid.renderSelection(e, t) : this.dayGrid && this.dayGrid.renderSelection(e, t)
        },
        destroySelection: function() {
            this.timeGrid.destroySelection(), this.dayGrid && this.dayGrid.destroySelection()
        }
    }), Bt.agendaWeek = Ot, Ot.prototype = L(At.prototype), e.extend(Ot.prototype, {
        name: "agendaWeek",
        incrementDate: function(e, t) {
            return e.clone().stripTime().add(t, "weeks").startOf("week")
        },
        render: function(e) {
            this.intervalStart = e.clone().stripTime().startOf("week"), this.intervalEnd = this.intervalStart.clone().add(1, "weeks"), this.start = this.skipHiddenDays(this.intervalStart), this.end = this.skipHiddenDays(this.intervalEnd, -1, !0), this.title = this.calendar.formatRange(this.start, this.end.clone().subtract(1), this.opt("titleFormat"), " â€” "), At.prototype.render.call(this, this.getCellsPerWeek())
        }
    }), Bt.agendaDay = Mt, Mt.prototype = L(At.prototype), e.extend(Mt.prototype, {
        name: "agendaDay",
        incrementDate: function(e, t) {
            var n = e.clone().stripTime().add(t, "days");
            return n = this.skipHiddenDays(n, 0 > t ? -1 : 1)
        },
        render: function(e) {
            this.start = this.intervalStart = e.clone().stripTime(), this.end = this.intervalEnd = this.start.clone().add(1, "days"), this.title = this.calendar.formatDate(this.start, this.opt("titleFormat")), At.prototype.render.call(this, 1)
        }
    })
});
(function(e) {
    "use strict";

    function t(t) {
        var n = e("");
        try {
            n = e(t).clone()
        } catch (r) {
            n = e("<span />").html(t)
        }
        return n
    }

    function n(e) {
        return !!(typeof Node === "object" ? e instanceof Node : e && typeof e === "object" && typeof e.nodeType === "number" && typeof e.nodeName === "string")
    }
    e.print = e.fn.print = function() {
        var r, i, s = this;
        if (s instanceof e) {
            s = s.get(0)
        }
        if (n(s)) {
            i = e(s);
            if (arguments.length > 0) {
                r = arguments[0]
            }
        } else {
            if (arguments.length > 0) {
                i = e(arguments[0]);
                if (n(i[0])) {
                    if (arguments.length > 1) {
                        r = arguments[1]
                    }
                } else {
                    r = arguments[0];
                    i = e("html")
                }
            } else {
                i = e("html")
            }
        }
        var o = {
            globalStyles: true,
            mediaPrint: false,
            stylesheet: null,
            noPrintSelector: ".no-print",
            iframe: true,
            append: null,
            prepend: null
        };
        r = e.extend({}, o, r || {});
        var u = e("");
        if (r.globalStyles) {
            u = e("style, link, meta, title")
        } else if (r.mediaPrint) {
            u = e("link[media=print]")
        }
        if (r.stylesheet) {
            u = e.merge(u, e('<link rel="stylesheet" href="' + r.stylesheet + '">'))
        }
        var a = i.clone();
        a = e("<span/>").append(a);
        a.find(r.noPrintSelector).remove();
        a.append(u.clone());
        a.append(t(r.append));
        a.prepend(t(r.prepend));
        var f = a.html();
        a.remove();
        var l, c;
        if (r.iframe) {
            try {
                var h = e(r.iframe + "");
                var p = h.length;
                if (p === 0) {
                    h = e('<iframe height="0" width="0" border="0" wmode="Opaque"/>').prependTo("body").css({
                        position: "absolute",
                        top: -999,
                        left: -999
                    })
                }
                l = h.get(0);
                l = l.contentWindow || l.contentDocument || l;
                c = l.document || l.contentDocument || l;
                c.open();
                c.write(f);
                c.close();
                setTimeout(function() {
                    l.focus();
                    try {
                        if (!l.document.execCommand("print", false, null)) {
                            l.print()
                        }
                    } catch (e) {
                        l.print()
                    }
                    setTimeout(function() {
                        if (p === 0) {
                            h.remove()
                        }
                    }, 100)
                }, 250)
            } catch (d) {
                console.error("Failed to print from iframe", d.stack, d.message);
                l = window.open();
                l.document.write(f);
                l.document.close();
                l.focus();
                l.print();
                l.close()
            }
        } else {
            l = window.open();
            l.document.write(f);
            l.document.close();
            l.focus();
            l.print();
            l.close()
        }
        return this
    }
})(jQuery)

function rruleParse(eventArr,events){
    var eventCount = 0;

    for(r=0;r<eventArr.length;r++){
        var rulesAttrs = eventArr[r].recurrenceRule.split(';');
        var ruleInfinite = 1;
        var nrules = [];

        // check for infinite event rule/massage DTSTART
        for(l=0;l<rulesAttrs.length;l++){
            if(rulesAttrs[l].match(/FREQ=([^"]*)/)){
                ruleFreq = rulesAttrs[l].split('=').pop();
            }

            if(rulesAttrs[l].match(/COUNT=([^"]*)/) || rulesAttrs[l].match(/UNTIL=([^"]*)/)){
                ruleInfinite = 0;
            }

            var rule = rulesAttrs[l].split('=');

            if(rule[0] !== 'DTSTART'){
                nrules.push(rule[0]+"="+rule[1]);
            } else {
                // set default time
                var dstAll = rule[1];
                var dtSt = rule[1].substr(0,8);
                // push to 0900 hours for iterator to properly show dates
                nrules.push("DTSTART="+dtSt+"T090000Z");
            }
        }

        var rule = new RRule(RRule.parseString(nrules.join(';')));

        // we can limit the infinite based on freq
        if(ruleInfinite == 1){
            if(ruleFreq == 'DAILY'){
                var eventLimit = 650;
            } else if(ruleFreq == 'WEEKLY'){
                var eventLimit = 350;
            } else if(ruleFreq == 'MONTHLY'){
                var eventLimit = 80;
            } else if(ruleFreq == 'YEARLY'){
                var eventLimit = 15;
            }

            var ruleAll = rule.all(function(date,i){
                return i < eventLimit
            });
        } else {
            var ruleAll = rule.all();
        }

        // iterator
        for(i=0;i<ruleAll.length;i++){
            var ds = new Date(ruleAll[i]);
            var dayStart = twoDigit(ds.getDate());
            var ds = ds.getFullYear()+'-'+twoDigit(parseInt(ds.getMonth()+1))+'-'+twoDigit(ds.getDate());

            if(eventArr[r].isAllDay == 0 && typeof(dstAll) != 'undefined' && dstAll.length > 10){
                var dtTime = dstAll.split('T').pop().replace(/Z/,'');
                var dtTime = dtTime.substr(0,2)+':'+dtTime.substr(2,2)+':'+dtTime.substr(4,2);
                var dtAll = ds.substr(0,10)+'T'+dtTime;
            } else {
                var dtAll = ds.substr(0,10);
            }

            if(eventArr[r].isAllDay == 0){
                var dstEnd = eventArr[r].end;
                var dtEndTime = dstEnd.split('T').pop().replace(/Z/,'');
                var dtEnd = ds.substr(0,10)+'T'+dtEndTime;
            } else {
                var dtEnd = ds.substr(0,10);
            }

            events[eventCount] = {
                id: eventArr[r].id,
                title: eventArr[r].title,
                start: dtAll,
                end: dtEnd,
                filterType: eventArr[r].filterType,
                relationID: eventArr[r].relationID,
                relationLabel: eventArr[r].relationLabel,
                dayDiff: eventArr[r].dayDiff,
                statusFilter: eventArr[r].statusFilter,
                backgroundColor: eventArr[r].backgroundColor,
                borderColor: eventArr[r].backgroundColor,
                isAllDay: eventArr[r].isAllDay,

                recurrenceRule: eventArr[r].recurrenceRule,
                icon: eventArr[r].icon+' fa-repeat'
            }

            // over multiple event days -> push end date
            if(typeof(eventArr[r].end) != 'undefined' && eventArr[r].dayDiff > 0){
                Date.prototype.addDays = function(days){
                    this.setDate(this.getDate() + parseInt(days));
                    return this;
                };

                var dtAll = new Date(dtAll);
                if(eventArr[r].isAllDay == 1){
                    var dtConvert = dtAll.addDays(parseInt(eventArr[r].dayDiff+1));
                } else {
                    var dtConvert = dtAll.addDays(eventArr[r].dayDiff);
                }

                var dsEnd = dtConvert.getFullYear()+'-'+twoDigit(parseInt(dtConvert.getMonth()+1))+'-'+twoDigit(dtConvert.getDate());

                if(eventArr[r].isAllDay == 1){
                    var dtAllEnd = dsEnd.substr(0,10);
                } else {
                    var dtAllEnd = dsEnd.substr(0,10)+'T'+dtEndTime;
                }

                events[eventCount]['end'] = dtAllEnd;
            }

            var eventCount = eventCount + 1;
        }
    }
}

function twoDigit(number){
    var twodigit = number >= 10 ? number : "0"+number.toString();
    return twodigit;
}

function getContrastYIQ(hexcolor){
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}