/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: ui
 * Version: 8.13.0.1938 (2024-09-24)
 * License: https://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com 2024. All rights reserved.
 */
(function (global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var wrapper = function (w) {
            if (!w.document) {
                throw Error('AnyChart requires a window with a document');
            }
            factory.call(w, w, w.document);
            try {
                w.acgraph.isNodeJS = Object.prototype.toString.call(global.process) == "[object process]";
            } catch (e) {
            }
            ;
            return w.anychart;
        };
        module.exports = global.document ? wrapper(global) : wrapper;
    } else {
        factory.call(global, window, document)
    }
})(typeof window !== 'undefined' ? window : this, function (window, document, opt_noGlobal) {
    var $, _, $_ = this.anychart;
    if ($_ && (_ = $_._)) {
        $ = $_.$
    } else {
        throw Error('anychart-base.min.js module should be included first. See modules explanation at https://docs.anychart.com/Quick_Start/Modules for details');
        $ = {};
        _ = {}
    }
    if (!_.ui) {
        _.ui = 1;
        (function ($) {
            var Y7 = function (a, b) {
                    a.Y && a.Y.D && ($.Pc(a.Y.D, a.he), $.Qc(a.Y.D, b, a));
                    a.he = b
                }, eta = function (a, b) {
                    a.Od = b
                }, fta = function (a, b) {
                    a.dh = b
                }, Z7 = function (a, b) {
                    a.i.bw(a.Ya(), b);
                    a.Od = b
                }, $7 = function (a, b) {
                    return new $.gb(a.x - b.x, a.y - b.y)
                }, gta = function (a) {
                    if ($.id && !$.fd(8)) return a.offsetParent;
                    var b = $.ve(a), c = $.Cf(a, "position"), d = "fixed" == c || "absolute" == c;
                    for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = $.Cf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth >
                        a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
                    return null
                }, a8 = function (a) {
                    for (var b = new $.kb(0, window.Infinity, window.Infinity, 0), c = $.Be(a), d = c.b.body, e = c.b.documentElement, f = $.Ie(c.b); a = gta(a);) if (!($.id && 0 == a.clientWidth || $.wd && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != $.Cf(a, "overflow")) {
                        var h = $.Hf(a), k = new $.gb(a.clientLeft, a.clientTop);
                        h.x += k.x;
                        h.y += k.y;
                        b.top = Math.max(b.top, h.y);
                        b.right = Math.min(b.right, h.x + a.clientWidth);
                        b.bottom = Math.min(b.bottom,
                            h.y + a.clientHeight);
                        b.left = Math.max(b.left, h.x)
                    }
                    d = f.scrollLeft;
                    f = f.scrollTop;
                    b.left = Math.max(b.left, d);
                    b.top = Math.max(b.top, f);
                    c = $.He($.Je(c.b) || window);
                    b.right = Math.min(b.right, d + c.width);
                    b.bottom = Math.min(b.bottom, f + c.height);
                    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
                }, hta = function (a, b) {
                    var c = b || $.Ie(window.document);
                    var d = c || $.Ie(window.document);
                    var e = $.Hf(a), f = $.Hf(d), h = $.Xf(d);
                    if (d == $.Ie(window.document)) {
                        var k = e.x - d.scrollLeft;
                        e = e.y - d.scrollTop;
                        $.id && !$.fd(10) && (k += h.left,
                            e += h.top)
                    } else k = e.x - f.x - h.left, e = e.y - f.y - h.top;
                    h = $.Of(a);
                    f = d.clientHeight - h.height;
                    var l = d.scrollLeft, m = d.scrollTop;
                    l += Math.min(k, Math.max(k - (d.clientWidth - h.width), 0));
                    m += Math.min(e, Math.max(e - f, 0));
                    d = new $.gb(l, m);
                    c.scrollLeft = d.x;
                    c.scrollTop = d.y
                }, b8 = function (a, b) {
                    $.tf.call(this);
                    this.f = a || 1;
                    this.b = b || $.Ej;
                    this.i = (0, $.pa)(this.Wka, this);
                    this.o = (0, $.Qn)()
                }, ita = function (a, b) {
                    var c = "";
                    b && (c = b.id);
                    $.By(a, "activedescendant", c)
                }, c8 = function () {
                    this.f = []
                }, d8 = function (a, b) {
                    var c = a.f[b];
                    if (!c) {
                        switch (b) {
                            case 0:
                                c =
                                    a.Fh() + "-highlight";
                                break;
                            case 1:
                                c = a.Fh() + "-checkbox";
                                break;
                            case 2:
                                c = a.Fh() + "-content"
                        }
                        a.f[b] = c
                    }
                    return c
                }, jta = function (a, b, c) {
                    a = d8(a, 2);
                    return c.Ac("DIV", a, b)
                }, e8 = function (a, b) {
                    var c = a.Gn(b);
                    if (c) {
                        c = c.firstChild;
                        var d = d8(a, 1);
                        return !!c && $.bf(c) && $.Nj(c, d)
                    }
                    return !1
                }, f8 = function (a, b, c, d) {
                    $.mD(a, c, b.fH());
                    $.pD(a, b, c);
                    d != e8(a, c) && (d ? $.Rj(c, "anychart-option") : $.Tj(c, "anychart-option"), c = a.Gn(c), d ? (a = d8(a, 1), c.insertBefore(b.f.Ac("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
                }, g8 = function (a,
                                  b, c, d) {
                    $.yD.call(this, a, d || c8.Hd(), c);
                    this.dh = b
                }, h8 = function (a, b, c, d) {
                    g8.call(this, a, b, c, d);
                    this.P = !1
                }, i8 = function (a) {
                    this.b = a
                }, j8 = function (a, b) {
                    a && (a.tabIndex = b ? 0 : -1)
                }, mta = function (a, b, c) {
                    c.id && Y7(b, c.id);
                    var d = a.zD(), e = !1, f = $.Mj(c);
                    f && (0, $.Re)(f, function (a) {
                        a == d ? e = !0 : a && (a == d + "-disabled" ? b.Cj(!1) : a == d + "-horizontal" ? kta(b, k8) : a == d + "-vertical" && kta(b, l8))
                    }, a);
                    e || $.Rj(c, d);
                    lta(a, b, c);
                    return c
                }, lta = function (a, b, c) {
                    if (c) for (var d = c.firstChild, e; d && d.parentNode == c;) {
                        e = d.nextSibling;
                        if (1 == d.nodeType) {
                            var f =
                                a.WG(d);
                            f && (f.Ed = d, b.isEnabled() || f.Cj(!1), b.hc(f), f.As(d))
                        } else d.nodeValue && "" != (0, $.zc)(d.nodeValue) || c.removeChild(d);
                        d = e
                    }
                }, nta = function (a, b) {
                    var c = a.zD(), d = [c, b.vh == k8 ? c + "-horizontal" : c + "-vertical"];
                    b.isEnabled() || d.push(c + "-disabled");
                    return d
                }, m8 = function (a, b, c) {
                    $.Dy.call(this, c);
                    this.aw = b || i8.Hd();
                    this.vh = a || this.aw.N1()
                }, n8 = function (a) {
                    return a.IV || a.Ya()
                }, ota = function (a, b) {
                    var c = $.Fy(a), d = n8(a);
                    b ? c.va(d, "focus", a.UM).va(d, "blur", a.TM).va(a.Xl || (a.Xl = new $.Np(n8(a))), "key", a.no) : c.fc(d, "focus",
                        a.UM).fc(d, "blur", a.TM).fc(a.Xl || (a.Xl = new $.Np(n8(a))), "key", a.no)
                }, pta = function (a, b) {
                    var c = b.Ya();
                    c = c.id || (c.id = b.ny());
                    a.rv || (a.rv = {});
                    a.rv[c] = b
                }, kta = function (a, b) {
                    if (a.Ya()) throw Error("Component already rendered");
                    a.vh = b
                }, o8 = function (a, b) {
                    b != a.iD && a.wf && ota(a, b);
                    a.iD = b;
                    a.DA && a.hj && j8(n8(a), b)
                }, p8 = function (a) {
                    return a.xd(a.tl)
                }, r8 = function (a) {
                    q8(a, function (a, c) {
                        return (a + 1) % c
                    }, $.Hy(a) - 1)
                }, qta = function (a) {
                    q8(a, function (a, c) {
                        a--;
                        return 0 > a ? c - 1 : a
                    }, 0)
                }, s8 = function (a) {
                    q8(a, function (a, c) {
                        return (a + 1) %
                            c
                    }, a.tl)
                }, t8 = function (a) {
                    q8(a, function (a, c) {
                        a--;
                        return 0 > a ? c - 1 : a
                    }, a.tl)
                }, q8 = function (a, b, c) {
                    c = 0 > c ? a.Jf(a.bm) : c;
                    var d = $.Hy(a);
                    c = b.call(a, c, d);
                    for (var e = 0; e <= d;) {
                        var f = a.xd(c);
                        if (f && a.l0(f)) {
                            a.Vn(c);
                            break
                        }
                        e++;
                        c = b.call(a, c, d)
                    }
                }, u8 = function () {
                }, rta = function (a, b, c) {
                    $.yD.call(this, a, c || u8.Hd(), b);
                    this.hn(1, !1);
                    this.hn(2, !1);
                    this.hn(4, !1);
                    this.hn(32, !1);
                    this.dc = 1
                }, v8 = function () {
                }, w8 = function (a, b) {
                    $.yD.call(this, null, a || v8.Hd(), b);
                    this.hn(1, !1);
                    this.hn(2, !1);
                    this.hn(4, !1);
                    this.hn(32, !1);
                    this.dc = 1
                }, x8 = function (a) {
                    this.b =
                        a || "menu"
                }, y8 = function (a) {
                    w8.call(this, v8.Hd(), a)
                }, z8 = function (a, b) {
                    m8.call(this, l8, b || x8.Hd(), a);
                    o8(this, !1)
                }, A8 = function (a, b) {
                    (a.yF = b) && o8(a, !0)
                }, B8 = function (a, b) {
                    z8.call(this, a, b);
                    this.P = null
                }, D8 = function (a, b, c, d, e, f, h, k, l) {
                    var m = sta(c), p = $.Qf(a), q = a8(a);
                    if (q) {
                        var r = new $.I(q.left, q.top, q.right - q.left, q.bottom - q.top);
                        q = Math.max(p.left, r.left);
                        var t = Math.min(p.left + p.width, r.left + r.width);
                        if (q <= t) {
                            var u = Math.max(p.top, r.top);
                            r = Math.min(p.top + p.height, r.top + r.height);
                            u <= r && (p.left = q, p.top = u, p.width =
                                t - q, p.height = r - u)
                        }
                    }
                    q = $.Be(a);
                    u = $.Be(c);
                    if (q.b != u.b) {
                        t = q.b.body;
                        u = $.Je(u.b);
                        r = new $.gb(0, 0);
                        var v = (v = $.ve(t)) ? $.Je(v) : window;
                        if ($.ad(v, "parent")) {
                            var w = t;
                            do {
                                var x = v == u ? $.Hf(w) : $.If(w);
                                r.x += x.x;
                                r.y += x.y
                            } while (v && v != u && v != v.parent && (w = v.frameElement) && (v = v.parent))
                        }
                        t = $7(r, $.Hf(t));
                        !$.id || $.fd(9) || $.Ge(q.b) || (t = $7(t, $.Ke(q.b)));
                        p.left += t.x;
                        p.top += t.y
                    }
                    a = tta(a, b);
                    b = p.left;
                    a & 4 ? b += p.width : a & 2 && (b += p.width / 2);
                    p = new $.gb(b, p.top + (a & 1 ? p.height : 0));
                    p = $7(p, m);
                    e && (p.x += (a & 4 ? -1 : 1) * e.x, p.y += (a & 1 ? -1 : 1) * e.y);
                    if (h) if (l) var y =
                        l; else if (y = a8(c)) y.top -= m.y, y.right -= m.x, y.bottom -= m.y, y.left -= m.x;
                    return C8(p, c, d, f, y, h, k)
                }, sta = function (a) {
                    if (a = a.offsetParent) {
                        var b = "HTML" == a.tagName || "BODY" == a.tagName;
                        if (!b || "static" != $.Cf(a, "position")) {
                            var c = $.Hf(a);
                            if (!b) {
                                b = $.Sf(a);
                                var d;
                                if (d = b) {
                                    d = $.hE && 0 <= $.Bc($.sda, 10);
                                    var e = $.kda && 0 <= $.Bc($.oda, 10);
                                    d = $.hd || d || e
                                }
                                b = d ? -a.scrollLeft : !b || $.fda && $.dd("8") || "visible" == $.Cf(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                                c = $7(c, new $.gb(b, a.scrollTop))
                            }
                        }
                    }
                    return c || new $.gb
                },
                C8 = function (a, b, c, d, e, f, h) {
                    a = a.clone();
                    var k = tta(b, c);
                    c = $.Pf(b);
                    h = h ? h.clone() : c.clone();
                    a = a.clone();
                    h = h.clone();
                    var l = 0;
                    if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
                    if (f) {
                        if (e) {
                            d = a;
                            k = h;
                            l = 0;
                            65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                            132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                            d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                            if (f & 16) {
                                var m = d.x;
                                d.x < e.left && (d.x = e.left, l |= 4);
                                d.x + k.width > e.right && (k.width = Math.min(e.right - d.x,
                                    m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                            }
                            d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                            f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                            d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                            f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                            d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                            f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                            e = l
                        } else e =
                            256;
                        l = e
                    }
                    f = new $.I(0, 0, 0, 0);
                    f.left = a.x;
                    f.top = a.y;
                    f.width = h.width;
                    f.height = h.height;
                    e = l;
                    if (e & 496) return e;
                    $.Ef(b, new $.gb(f.left, f.top));
                    h = new $.lb(f.width, f.height);
                    $.mb(c, h) || (c = h, a = $.Ge($.Be($.ve(b)).b), !$.id || $.dd("10") || a && $.dd("8") ? (b = b.style, $.hd ? b.MozBoxSizing = "border-box" : $.wd ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (a = $.Wf(b, "padding"), b = $.Xf(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right,
                        h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
                    return e
                }, tta = function (a, b) {
                    return (b & 8 && $.Sf(a) ? b ^ 4 : b) & -9
                }, E8 = function () {
                }, F8 = function (a, b, c) {
                    this.element = a;
                    this.i = b;
                    this.K = c
                }, G8 = function (a, b, c, d) {
                    F8.call(this, a, b);
                    this.o = c ? 5 : 0;
                    this.D = d || void 0
                }, H8 = function (a, b) {
                    a & 48 && (b ^= 4);
                    a & 192 && (b ^= 1);
                    return b
                }, I8 = function () {
                    this.f = []
                }, vta = function (a, b, c) {
                    var d = b.f.Ac("SPAN");
                    d.className = "anychart-submenu-arrow";
                    uta(b, d);
                    a.Gn(c).appendChild(d)
                }, uta = function (a,
                                   b) {
                    $.Gy(a) ? ($.Rj(b, "anychart-submenu-arrow-rtl"), $.ef(b, "â—„")) : ($.Tj(b, "anychart-submenu-arrow-rtl"), $.ef(b, "â–º"))
                }, J8 = function (a, b, c, d) {
                    g8.call(this, a, b, c, d || I8.Hd())
                }, wta = function (a) {
                    a.getParent().Oj(function (a) {
                        a != this && "function" == typeof a.Nl && (a.Nl(), a.Vp())
                    }, a)
                }, xta = function (a, b) {
                    !b && K8(a) && K8(a).Vn(-1);
                    a.dispatchEvent($.Ey(64, b));
                    var c = K8(a);
                    if (b != a.EU) {
                        var d = a.Ya();
                        b ? $.Rj(d, "anychart-submenu-open") : $.Tj(d, "anychart-submenu-open")
                    }
                    if (b != c.Oe() && (b && (c.wf || c.Rd(), c.Vn(-1)), c.Ji(b), b)) {
                        c = new G8(a.Ya(),
                            12, !1);
                        d = K8(a);
                        var e = d.Ya();
                        d.Oe() || (e.style.visibility = "hidden", $.Rf(e, !0));
                        c.b(e, 8);
                        d.Oe() || ($.Rf(e, !1), e.style.visibility = "visible")
                    }
                    a.EU = b
                }, L8 = function (a, b, c) {
                    var d = $.Fy(a);
                    (c ? d.va : d.fc).call(d, b, "enter", a.Sfa)
                }, K8 = function (a) {
                    a.Ul ? a.WM && a.Ul.getParent() != a && a.Ul.el(a) : M8(a, new z8(a.f));
                    a.Ul.Ya() || a.Ul.Ac();
                    return a.Ul
                }, M8 = function (a, b) {
                    var c = a.Ul;
                    b != c && (c && (a.Nl(), a.wf && L8(a, c, !1)), a.Ul = b, a.WM = !1, b && (b.el(a), b.Ji(!1, !0), A8(b, !1), o8(b, !1), a.wf && L8(a, b, !0)))
                }, N8 = function () {
                    this.f = []
                }, yta = function (a,
                                   b, c) {
                    b = b.f.Ac("span");
                    b.className = "anychart-submenu-arrow";
                    b.innerHTML = "&nbsp;";
                    a.Gn(c).appendChild(b)
                }, O8 = function (a, b, c) {
                    g8.call(this, a, void 0, void 0, N8.Hd());
                    this.P = c || !1;
                    this.b = b || null
                }, zta = function (a) {
                    a.getParent().Oj(function (a) {
                        a != this && "function" == typeof a.Nl && (a.Nl(), a.Vp())
                    }, a)
                }, Ata = function (a, b) {
                    !b && P8(a) && P8(a).Vn(-1);
                    a.dispatchEvent($.Ey(64, b));
                    var c = P8(a);
                    if (b != a.vR) {
                        var d = a.Ya();
                        b ? $.Rj(d, "anychart-submenu-open") : $.Tj(d, "anychart-submenu-open")
                    }
                    if (b != c.Oe() && (b && (c.wf || c.Rd(a.b), c.Vn(-1)),
                        c.Ji(b), b)) {
                        c = new G8(a.Ya(), 12, !1);
                        var e = P8(a), f = e.Ya();
                        e.Oe() || (f.style.visibility = "hidden", $.Rf(f, !0));
                        c.b(f, 8);
                        e.Oe() || ($.Rf(f, !1), f.style.visibility = "visible");
                        c = $.He(window);
                        d = $.Qf(f);
                        f = $.Jf(f);
                        e = e.P;
                        var h = $.Qf(e);
                        e.style.maxHeight = c.height - f.y - (d.height - h.height) - 15 + "px"
                    }
                    a.vR = b
                }, Q8 = function (a, b, c) {
                    var d = $.Fy(a);
                    (c ? d.va : d.fc).call(d, b, "enter", a.Zca)
                }, P8 = function (a) {
                    if (a.Jl) a.MK && a.Jl.getParent() != a && a.Jl.el(a); else {
                        var b = a.P ? R8.Hd() : void 0;
                        b = new B8(a.f, b);
                        var c = a.Jl;
                        b != c && (c && (a.Nl(), a.wf && Q8(a,
                            c, !1)), a.Jl = b, a.MK = !1, b && (b.el(a), b.Ji(!1, !0), A8(b, !1), o8(b, !1), a.wf && Q8(a, b, !0)))
                    }
                    a.Jl.Ya() || a.Jl.Ac();
                    return a.Jl
                }, S8 = function (a, b) {
                    this.i = a instanceof $.gb ? a : new $.gb(a, b)
                }, T8 = function (a, b) {
                    S8.call(this, a, b)
                }, Bta = function (a, b, c, d) {
                    G8.call(this, a, b, c || d);
                    (c || d) && this.f(65 | (d ? 32 : 132))
                }, U8 = function (a, b) {
                    z8.call(this, a, b);
                    A8(this, !0);
                    this.Ji(!1, !0);
                    this.i = new $.ZB
                }, Cta = function (a, b, c, d) {
                    var e = a.Oe();
                    a.Oe() || (0, $.Qn)();
                    a.dispatchEvent("beforeshow") && (c = "undefined" != typeof c ? c : 8, e || (a.Ya().style.visibility =
                        "hidden"), $.Rf(a.Ya(), !0), b.b(a.Ya(), c, d), e || (a.Ya().style.visibility = "visible"), a.Vn(-1), a.Ji(!0))
                }, Dta = function (a, b) {
                    for (var c = a.i.Xt(), d = 0; d < c.length; d++) {
                        var e = a.i.get(c[d]);
                        if (e.Ed == b.currentTarget) {
                            c = a;
                            d = $.n(e.q6) ? new G8(e.Ed, e.q6, !0) : new T8(b.clientX, b.clientY);
                            d.f && d.f(5);
                            Cta(c, d, e.Hha, e.Qc);
                            b.preventDefault();
                            b.stopPropagation();
                            break
                        }
                    }
                }, V8 = function () {
                    U8.call(this);
                    this.K = !1;
                    this.b = this.Aj = this.lL = null;
                    this.na = !1;
                    this.ba = $.Oe("div", {id: "anychart-menu-wrapper"});
                    this.aa = function (a) {
                        return a
                    };
                    this.ea = function () {
                        return {}
                    };
                    fta(this, {});
                    this.Ia = (0, $.pa)(this.show, this);
                    this.va("action", function (a) {
                        var b = a.target.dh;
                        a = {type: b.eventType || "action", event: a, target: this.lL, item: b};
                        this.Aj && (a.menuParent = this.Aj, $.D(this.Aj.getSelectedPoints) && (a.selectedPoints = this.Aj.getSelectedPoints() || []));
                        $.D(b.action) && b.action.call(a, a);
                        b.eventType && this.dispatchEvent(a)
                    })
                }, Eta = function (a, b, c) {
                    b = {event: b, target: c, menu: a};
                    if (a.Aj) {
                        c = a.Aj.container() ? a.Aj.container().getStage() : null;
                        if (null === c || "none" == $.Bf(c.domElement(),
                            "border-style")) return !1;
                        b.menuParent = a.Aj;
                        b.chart = a.Aj;
                        $.D(a.Aj.getSelectedPoints) && (b.selectedPoints = a.Aj.getSelectedPoints() || []);
                        b = a.Aj.oO(b)
                    }
                    c = $.Tl(a.ea.call(b, b));
                    b = a.aa.call(c, c, b);
                    a.dh = b;
                    a.na = !0;
                    return !$.Nc(b)
                }, Fta = function (a, b, c) {
                    var d = [], e;
                    for (e in c) {
                        var f = c[e];
                        c.hasOwnProperty(e) && $.Ua(d, f, a.$ga)
                    }
                    for (e = 0; e < d.length; e++) {
                        c = d[e];
                        if (null != c) var h = $.z(c.classNames) ? c.classNames.split(" ") : c.classNames || [];
                        f = $.us(c.text) || "";
                        c.text ? c.subMenu ? (f = new O8(f, a.ba), h.length && $.BD(f, h.join(" ")),
                        $.da(c.enabled) && f.Cj(c.enabled), Fta(a, f, c.subMenu), W8(b, f), $.n(c.iconClass) && Gta(f, c.iconClass)) : (c.href && (f = $.Oe("A", {href: c.href, target: c.target || "_blank"}, f), h.unshift("anychart-menuitem-link")), f = new h8(f, c), h.length && $.BD(f, h.join(" ")), $.da(c.enabled) && f.Cj(c.enabled), $.da(c.scrollable) && f.b(c.scrollable), W8(b, f), $.n(c.iconClass) && Gta(f, c.iconClass)) : W8(b, new y8)
                    }
                }, W8 = function (a, b) {
                    $.J(a, O8) ? a.LK(b) : a.hc(b, !0)
                }, Gta = function (a, b) {
                    var c = a.Ya();
                    if (c) {
                        var d = $.De(window.document, "I", null, c)[0];
                        b ? d ? (d.className = b, $.Rf(d, !0)) : (d = $.Oe("I", b), $.By(d, "hidden", !0), $.Xe(c, d, 0)) : d && $.Rf(d, !1)
                    }
                }, R8 = function (a) {
                    x8.call(this, a)
                }, X8 = function () {
                }, Hta = function (a, b) {
                    if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
                        d = b ? c.nextSibling : c.previousSibling;
                        if (3 == c.nodeType) {
                            var e = c.nodeValue;
                            if ("" == (0, $.zc)(e)) a.removeChild(c); else {
                                c.nodeValue = b ? $.qc(e) : e.replace(/[\s\xa0]+$/, "");
                                break
                            }
                        } else break;
                        c = d
                    }
                }, Y8 = function () {
                }, Z8 = function () {
                }, $8 = function () {
                }, b9 = function (a, b, c, d, e) {
                    $.OD.call(this, a, c ||
                        Y8.Hd(), d);
                    this.hn(64, !0);
                    this.aa = new Bta(null, 9);
                    b && a9(this, b);
                    this.P = new b8(500);
                    !$.fE && !$.gE || $.dd("533.17.9") || (this.pN = !0);
                    this.Ia = e || x8.Hd()
                }, a9 = function (a, b) {
                    var c = a.b;
                    b != c && (c && (a.Bl(!1), a.wf && c9(a, c, !1), delete a.b), a.wf && $.By(a.Ed, "haspopup", !!b), b && (a.b = b, b.el(a), b.Ji(!1), A8(b, a.pN), a.wf && c9(a, b, !0)))
                }, Ita = function (a) {
                    if (a.b.wf) {
                        var b = a.Ka || a.Ya(), c = a.aa;
                        a.aa.element = b;
                        b = a.b.Ya();
                        a.b.Oe() || (b.style.visibility = "hidden", $.Rf(b, !0));
                        !a.ba && a.aa.G && a.aa.o & 32 && (a.ba = $.Pf(b));
                        c.b(b, c.i ^ 1, null,
                            a.ba);
                        a.b.Oe() || ($.Rf(b, !1), b.style.visibility = "visible")
                    }
                }, c9 = function (a, b, c) {
                    var d = $.Fy(a);
                    c = c ? d.va : d.fc;
                    c.call(d, b, "action", a.pga);
                    c.call(d, b, "close", a.Pfa);
                    c.call(d, b, "highlight", a.Qfa);
                    c.call(d, b, "unhighlight", a.Rfa)
                }, Jta = function (a, b) {
                    var c = $.Fy(a);
                    (b ? c.va : c.fc).call(c, a.Ya(), "keydown", a.mga)
                }, Kta = function (a, b) {
                    var c = a.Ya(), d = b.getAttribute("aria-activedescendant");
                    d = $.ve(b).getElementById(null == d || void 0 == d ? "" : String(d)) || b;
                    if (!d.id) {
                        var e = $.Cy.Hd();
                        d.id = ":" + (e.b++).toString(36)
                    }
                    ita(c, d);
                    $.By(c,
                        "owns", d.id)
                }, d9 = function (a, b, c, d) {
                    b9.call(this, a, b, c || Z8.Hd(), d)
                }, e9 = function (a, b, c, d) {
                    d9.call(this, a, b, c || $8.Hd(), d)
                }, f9 = function () {
                }, g9 = function () {
                }, h9 = function (a, b) {
                    w8.call(this, a || g9.Hd(), b)
                }, i9 = function () {
                    this.b = "toolbar"
                }, j9 = function (a, b, c) {
                    m8.call(this, b, a || i9.Hd(), c)
                }, k9 = function () {
                    j9.call(this)
                }, l9 = function () {
                }, m9 = function (a, b, c) {
                    $.OD.call(this, a, b || l9.Hd(), c)
                }, r9 = function () {
                    j9.call(this);
                    this.ea = "us-letter a0 a1 a2 a3 a4 a5 a6".split(" ");
                    this.K = "all";
                    this.b = [];
                    this.i = [];
                    Lta(this);
                    this.hc(new h9,
                        !0);
                    this.P = new B8(void 0, R8.Hd());
                    var a = new h8("SVG");
                    $.BD(a, "anychart-toolbar-saveAsSvg");
                    a.dh = {Vt: "saveAsSvg", icon: "ac-file-code-o", text: "SVG"};
                    this.P.hc(a, !0);
                    n9(a, !0, !0);
                    this.i.push(a);
                    a = new h8("PNG");
                    $.BD(a, "anychart-toolbar-saveAsPng");
                    a.dh = {Vt: "saveAsPng", icon: "ac-file-image-o", text: "PNG"};
                    this.P.hc(a, !0);
                    n9(a, !0, !0);
                    this.i.push(a);
                    a = new h8("JPG");
                    $.BD(a, "anychart-toolbar-saveAsJpg");
                    a.dh = {Vt: "saveAsJpg", icon: "ac-file-image-o", text: "JPG"};
                    this.P.hc(a, !0);
                    n9(a, !0, !0);
                    this.i.push(a);
                    a = new O8("PDF",
                        void 0, !0);
                    $.BD(a, "anychart-toolbar-saveAsPdf");
                    for (var b = 1; b < this.ea.length; b++) {
                        var c = this.ea[b], d = new h8(c.toUpperCase());
                        d.dh = {Vt: "saveAsPdf", R_: [c]};
                        $.BD(d, "anychart-toolbar-saveAsPdf");
                        a.LK(d)
                    }
                    this.P.hc(a, !0);
                    a.dh = {icon: "ac-file-pdf-o", text: "PDF"};
                    n9(a, !0, !0);
                    this.i.push(a);
                    a = o9("saveAs");
                    b = new e9(a, this.P);
                    $.BD(b, "anychart-toolbar-saveAs");
                    b.dh = {id: "saveAs", text: a, icon: "ac-save"};
                    this.hc(b, !0);
                    this.b.push(b);
                    this.hc(new h9, !0);
                    a = o9("zoomIn");
                    b = new m9(a);
                    $.BD(b, "anychart-toolbar-zoomIn");
                    b.dh =
                        {id: "zoomIn", Vt: "zoomIn", text: a, icon: "ac-zoom-in"};
                    this.hc(b, !0);
                    this.b.push(b);
                    a = o9("zoomOut");
                    b = new m9(a);
                    $.BD(b, "anychart-toolbar-zoomOut");
                    b.dh = {id: "zoomOut", Vt: "zoomOut", text: a, icon: "ac-zoom-out"};
                    this.hc(b, !0);
                    this.b.push(b);
                    a = o9("fitAll");
                    b = new m9(a);
                    $.BD(b, "anychart-toolbar-fitAll");
                    b.dh = {id: "fitAll", Vt: "fitAll", text: a, icon: "ac-dot-square-o"};
                    this.hc(b, !0);
                    this.b.push(b);
                    this.hc(new h9, !0);
                    a = o9("expandAll");
                    b = new m9(a);
                    $.BD(b, "anychart-toolbar-expandAll");
                    b.dh = {
                        id: "expandAll", Vt: "expandAll",
                        text: a, icon: "ac-expand"
                    };
                    this.hc(b, !0);
                    this.b.push(b);
                    a = o9("collapseAll");
                    b = new m9(a);
                    $.BD(b, "anychart-toolbar-collapseAll");
                    b.dh = {id: "collapseAll", Vt: "collapseAll", text: a, icon: "ac-collapse"};
                    this.hc(b, !0);
                    this.b.push(b);
                    this.wO = {xe: p9, we: q9};
                    this.aa = null;
                    this.va("action", this.Ufa)
                }, Mta = function (a, b, c, d, e) {
                    b = new O8(b, void 0, !0);
                    var f = (0, $.Wa)(c, function (a) {
                        var b = a.value;
                        a = new h8(a.caption);
                        a.dh = b;
                        a.hn(8, !0);
                        a.mJ(b == e);
                        return a
                    });
                    (0, $.Re)(f, b.LK, b);
                    b.va("action", function (a) {
                        var b = a.target, c = b.vj();
                        (0, $.Re)(f, function (a) {
                            a.mJ(a == b)
                        });
                        d.call(this, c);
                        a.stopPropagation()
                    }, void 0, a);
                    return b
                }, Lta = function (a) {
                    a.Xs = new B8(void 0, R8.Hd());
                    var b = Mta(a, o9("changeLayout"), [{caption: o9("landscape"), value: q9}, {caption: o9("portrait"), value: "portrait"}], function (a) {
                        this.wO.we = a;
                        this.Xs.Ji(!0, !0)
                    }, q9), c = Mta(a, o9("changeRange"), [{caption: o9("allDates"), value: "full"}, {caption: o9("visibleDates"), value: p9}], function (a) {
                        this.wO.xe = a;
                        this.Xs.Ji(!0, !0)
                    }, p9);
                    a.Xs.hc(b, !0);
                    a.Xs.hc(c, !0);
                    a.Xs.hc(new y8, !0);
                    b = o9("print");
                    a.ba = new e9(b, a.Xs);
                    $.BD(a.ba, "anychart-toolbar-print");
                    fta(a.ba, {id: "print", text: b, icon: "ac-print"});
                    a.hc(a.ba, !0);
                    a.b.push(a.ba)
                }, s9 = function (a) {
                    for (var b, c = 0; c < a.b.length; c++) switch (b = a.b[c], a.K) {
                        case "all":
                            n9(b, !0, !0);
                            break;
                        case "icon":
                            n9(b, !0, !1);
                            break;
                        case "text":
                            n9(b, !1, !0)
                    }
                    for (c = 0; c < a.i.length; c++) switch (b = a.i[c], a.K) {
                        case "text":
                            n9(b, !1, !0);
                            break;
                        case "all":
                        case "icon":
                            n9(b, !0, !0)
                    }
                }, n9 = function (a, b, c) {
                    var d = a.Ya(), e = a.dh, f = e.icon, h = e.text, k = $.J(a, e9) || $.J(a, m9);
                    if (d) {
                        e = $.De(window.document,
                            "I", "anychart-toolbar-item-icon", d)[0];
                        var l = $.De(window.document, "SPAN", "anychart-toolbar-item-text", d)[0];
                        e && l || (e || (e = $.Oe("I", ["anychart-toolbar-item-icon", f]), $.By(e, "hidden", !0)), l || (l = $.Oe("SPAN", "anychart-toolbar-item-text"), $.ef(l, h || "")), k ? (d = $.Oe("DIV"), $.Xe(d, e, 0), $.Xe(d, l, 1), Z7(a, d)) : (Z7(a, l), $.Xe(d, e, 0)));
                        $.da(c) && $.Rf(l, c);
                        $.da(b) && $.Rf(e, b)
                    }
                }, o9 = function (a) {
                    return $.us(Nta[a])
                }, t9 = function () {
                    $.Dy.call(this)
                }, Ota = function (a, b) {
                    var c = a.f, d = b || a.Ya();
                    $.Rj(d, "anychart-loader");
                    c = c.Ac("DIV",
                        "anychart-loader-rotating-cover", c.Ac("DIV", "anychart-loader-rotating-plane", c.Ac("DIV", "anychart-loader-chart-row", c.Ac("DIV", ["anychart-loader-chart-col", "anychart-loader-green"]), c.Ac("DIV", ["anychart-loader-chart-col", "anychart-loader-orange"]), c.Ac("DIV", ["anychart-loader-chart-col", "anychart-loader-red"]))));
                    a.hj = !1;
                    $.Rf(a.Ya(), a.hj);
                    d.appendChild(c)
                }, Pta = function (a) {
                    try {
                        return "number" == typeof a.selectionStart
                    } catch (b) {
                        return !1
                    }
                }, u9 = function () {
                    $.Dy.call(this);
                    this.b = null;
                    this.IT = "yyyy MMM dd";
                    this.ba = null;
                    this.na = "From:";
                    this.P = null;
                    this.Ia = "To:";
                    this.Za = !1;
                    this.Ka = this.Ca = window.NaN
                }, Qta = function (a) {
                    a.i && $.Oy(a.i, $.iq.format.dateTime(a.Ca, a.format()));
                    a.K && $.Oy(a.K, $.iq.format.dateTime(a.Ka, a.format()))
                }, Rta = function (a) {
                    var b = a.f, c = a.Ya();
                    $.Rj(c, "anychart-range-picker");
                    a.Za && $.Rj(c, "anychart-range-picker-inside");
                    a.ba = b.Ac("LABEL", ["anychart-inline-block", "anychart-input-label"], $.iq.format.getMessage(a.na));
                    c.appendChild(a.ba);
                    a.i = new $.Jy;
                    a.hc(a.i, !0);
                    $.Sj(a.i.Ya(), ["anychart-label-input"]);
                    a.P = b.Ac("LABEL", ["anychart-inline-block", "anychart-input-label"], $.iq.format.getMessage(a.Ia));
                    c.appendChild(a.P);
                    a.K = new $.Jy;
                    a.hc(a.K, !0);
                    $.Sj(a.K.Ya(), ["anychart-label-input"]);
                    a.b && a.uR(a.b.getSelectedRange())
                }, Sta = function (a) {
                    return a && $.D(a.getType) && "stock" == a.getType()
                }, Uta = function (a, b, c) {
                    $.RD.call(this, a, b, c);
                    $.BD(this, "anychart-inline-block");
                    $.BD(this, "anychart-button-standard");
                    $.BD(this, Tta);
                    this.hn(16, !0);
                    this.kv &= -17
                }, v9 = function (a) {
                    $.tf.call(this);
                    this.Tb = [];
                    Vta(this, a)
                }, Vta = function (a,
                                   b) {
                    b && ((0, $.Re)(b, function (a) {
                        w9(this, a, !1)
                    }, a), $.Ia(a.Tb, b))
                }, x9 = function (a, b) {
                    b != a.wH && (w9(a, a.wH, !1), a.wH = b, w9(a, b, !0));
                    a.dispatchEvent("select")
                }, w9 = function (a, b, c) {
                    b && ("function" == typeof a.DU ? a.DU(b, c) : "function" == typeof b.mJ && b.mJ(c))
                }, y9 = function () {
                    $.Dy.call(this);
                    this.b = null;
                    this.aa = !1;
                    this.K = null;
                    this.P = "Zoom:";
                    this.jd = [];
                    this.Xy([{type: "unit", unit: "Day", count: 10, text: "10D"}, {type: "unit", unit: "Month", count: 1, text: "1M"}, {type: "unit", unit: "Month", count: 3, text: "3M"}, {type: "ytd", text: "YTD"},
                        {type: "unit", unit: "Year", count: 1, text: "1Y"}, {type: "unit", unit: "Year", count: 2, text: "2Y"}, {type: "unit", unit: "Year", count: 5, text: "5Y"}, {type: "max", text: "MAX"}]);
                    this.i = new v9;
                    this.i.DU = this.Wca
                }, Wta = function (a) {
                    var b = a.Ya();
                    $.Rj(b, "anychart-range-selector");
                    a.aa && $.Rj(b, "anychart-range-selector-inside");
                    a.K = $.Oe("LABEL", ["anychart-inline-block", "anychart-input-label"], $.iq.format.getMessage(a.P));
                    b.appendChild(a.K)
                }, Xta = function (a) {
                    return a && $.D(a.getType) && "stock" == a.getType()
                }, z9 = function () {
                    $.Dy.call(this);
                    this.b = null
                }, Yta = function (a) {
                    var b = a.Ya();
                    $.Rj(b, "anychart-zoom");
                    a.i = new $.RD;
                    a.i.dh = {type: "fitAll"};
                    $.PD(a.i, "Fit All");
                    $.BD(a.i, "anychart-zoom-zoomFitAll");
                    $.TD(a.i, "ac ac-dot-square-o disable-selection");
                    a.hc(a.i, !0);
                    a.K = new $.RD;
                    a.K.dh = {type: "zoomIn"};
                    $.PD(a.K, "Zoom In");
                    $.BD(a.K, "anychart-zoom-zoomIn");
                    $.TD(a.K, "ac ac-plus disable-selection");
                    a.hc(a.K, !0);
                    a.P = new $.RD;
                    a.P.dh = {type: "zoomOut"};
                    $.PD(a.P, "Zoom Out");
                    $.BD(a.P, "anychart-zoom-zoomOut");
                    $.TD(a.P, "ac ac-minus disable-selection");
                    a.hc(a.P,
                        !0)
                }, Zta = function (a) {
                    return a && $.D(a.getType) && "map" == a.getType()
                };
            $.jD.prototype.bw = $.ca(36, function (a, b) {
                var c = this.Gn(a);
                if (c && ($.We(c), b)) if ($.z(b)) $.ef(c, b); else {
                    var d = function (a) {
                        if (a) {
                            var b = $.ve(c);
                            c.appendChild($.z(a) ? b.createTextNode(a) : a)
                        }
                    };
                    $.A(b) ? (0, $.Re)(b, d) : !$.la(b) || "nodeType" in b ? d(b) : (0, $.Re)($.Ha(b), d)
                }
            });
            $.jD.prototype.kH = $.ca(35, function (a) {
                if (!this.i) {
                    this.b || $.sD(this);
                    var b = this.b, c = {}, d;
                    for (d in b) c[b[d]] = d;
                    this.i = c
                }
                a = (0, window.parseInt)(this.i[a], 10);
                return (0, window.isNaN)(a) ? 0 : a
            });
            $.jD.prototype.Wk = $.ca(34, function (a, b) {
                b.id && Y7(a, b.id);
                var c = this.Gn(b);
                c && c.firstChild ? eta(a, c.firstChild.nextSibling ? $.Ha(c.childNodes) : c.firstChild) : a.Od = null;
                var d = 0, e = this.Fh(), f = this.Fh(), h = !1, k = !1, l = !1, m = $.Ha($.Mj(b));
                (0, $.Re)(m, function (a) {
                    h || a != e ? k || a != f ? d |= this.kH(a) : k = !0 : (h = !0, f == e && (k = !0));
                    1 == this.kH(a) && $.kf(c) && $.lf(c) && $.hf(c, !1)
                }, this);
                a.dc = d;
                h || (m.push(e), f == e && (k = !0));
                k || m.push(f);
                var p = a.Bs;
                p && m.push.apply(m, p);
                if ($.id && !$.dd("7")) {
                    var q = $.kD(m);
                    0 < q.length && (m.push.apply(m, q),
                        l = !0)
                }
                if (!h || !k || p || l) b.className = m.join(" ");
                return b
            });
            $.tD.prototype.Wk = $.ca(33, function (a, b) {
                b = $.tD.u.Wk.call(this, a, b);
                a.LX(this.vj(b));
                a.gb = b.title;
                $.nD(a, 16) && this.Ru(b, 16, $.oD(a, 16));
                return b
            });
            $.ND.prototype.Wk = $.ca(32, function (a, b) {
                $.AD(a, !1);
                a.kv &= -256;
                a.hn(32, !1);
                if (b.disabled) {
                    var c = this.UG(1);
                    $.Rj(b, c)
                }
                return $.ND.u.Wk.call(this, a, b)
            });
            $.jD.prototype.sH = $.ca(31, function () {
                return !0
            });
            $.ND.prototype.sH = $.ca(30, function (a) {
                return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
            });
            $.Dy.prototype.ol = $.ca(22, function (a) {
                this.Ed = a
            });
            $.Jy.prototype.ol = $.ca(21, function (a) {
                $.Jy.u.ol.call(this, a);
                this.i || (this.i = a.getAttribute("label") || "");
                var b = $.ve(a);
                try {
                    var c = b && b.activeElement;
                    var d = c && c.nodeName ? c : null
                } catch (e) {
                    d = null
                }
                d == a && (this.AH = !0, a = this.Ya(), $.Tj(a, "label-input-label"));
                $.Ly() && (this.Ya().placeholder = this.i);
                a = this.Ya();
                $.By(a, "label", this.i)
            });
            $.yD.prototype.ol = $.ca(20, function (a) {
                this.Ed = a = this.i.Wk(this, a);
                $.mD(this.i, a, this.fH());
                this.i.yU(a, !1);
                this.hj = "none" != a.style.display
            });
            $.Dy.prototype.rH = $.ca(19, function () {
                return !0
            });
            $.yD.prototype.rH = $.ca(18, function (a) {
                return this.i.sH(a)
            });
            $.Dy.prototype.As = $.ca(17, function (a) {
                if (this.wf) throw Error("Component already rendered");
                if (a && this.rH(a)) {
                    this.fb = !0;
                    var b = $.ve(a);
                    this.f && this.f.b == b || (this.f = $.Be(a));
                    this.ol(a);
                    this.Gg()
                } else throw Error("Invalid element to decorate");
            });
            $.xx.prototype.oO = $.ca(16, function (a) {
                return a
            });
            $.H(b8, $.tf);
            $.g = b8.prototype;
            $.g.enabled = !1;
            $.g.Zv = null;
            $.g.Wka = function () {
                if (this.enabled) {
                    var a = (0, $.Qn)() - this.o;
                    0 < a && a < .8 * this.f ? this.Zv = this.b.setTimeout(this.i, this.f - a) : (this.Zv && (this.b.clearTimeout(this.Zv), this.Zv = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
                }
            };
            $.g.start = function () {
                this.enabled = !0;
                this.Zv || (this.Zv = this.b.setTimeout(this.i, this.f), this.o = (0, $.Qn)())
            };
            $.g.stop = function () {
                this.enabled = !1;
                this.Zv && (this.b.clearTimeout(this.Zv), this.Zv = null)
            };
            $.g.R = function () {
                b8.u.R.call(this);
                this.stop();
                delete this.b
            };
            $.H(c8, $.jD);
            $.ja(c8);
            $.g = c8.prototype;
            $.g.tH = function () {
                return "menuitem"
            };
            $.g.Ac = function (a) {
                var b = a.f.Ac("DIV", $.qD(this, a).join(" "), jta(this, a.Od, a.f));
                f8(this, a, b, $.nD(a, 8) || $.nD(a, 16));
                return b
            };
            $.g.Gn = function (a) {
                return a && a.firstChild
            };
            $.g.Wk = function (a, b) {
                var c = $.af(b), d = d8(this, 2);
                c && $.Nj(c, d) || b.appendChild(jta(this, b.childNodes, a.f));
                $.Nj(b, "anychart-option") && (a.hn(16, !0), a && b && f8(this, a, b, !0));
                return c8.u.Wk.call(this, a, b)
            };
            $.g.bw = function (a, b) {
                var c = this.Gn(a), d = e8(this, a) ? c.firstChild : null;
                c8.u.bw.call(this, a, b);
                d && !e8(this, a) && c.insertBefore(d, c.firstChild || null)
            };
            $.g.UG = function (a) {
                switch (a) {
                    case 2:
                        return d8(this, 0);
                    case 16:
                    case 8:
                        return "anychart-option-selected";
                    default:
                        return c8.u.UG.call(this, a)
                }
            };
            $.g.kH = function (a) {
                var b = d8(this, 0);
                switch (a) {
                    case "anychart-option-selected":
                        return 16;
                    case b:
                        return 2;
                    default:
                        return c8.u.kH.call(this, a)
                }
            };
            $.g.Fh = function () {
                return "anychart-menuitem"
            };
            $.H(g8, $.yD);
            $.g = g8.prototype;
            $.g.vj = function () {
                var a = this.dh;
                return null != a ? a : this.wM()
            };
            $.g.hn = function (a, b) {
                g8.u.hn.call(this, a, b);
                switch (a) {
                    case 8:
                        $.oD(this, 16) && !b && $.ID(this, !1);
                        var c = this.Ya();
                        c && this && c && f8(this.i, this, c, b);
                        break;
                    case 16:
                        (c = this.Ya()) && this && c && f8(this.i, this, c, b)
                }
            };
            $.g.wM = function () {
                var a = this.Od;
                return $.A(a) ? (a = (0, $.Wa)(a, function (a) {
                    return $.bf(a) && ($.Nj(a, "anychart-menuitem-accel") || $.Nj(a, "anychart-menuitem-mnemonic-separator")) ? "" : $.nf(a)
                }).join(""), $.nc(a)) : g8.u.wM.call(this)
            };
            $.g.tr = function (a) {
                var b = this.getParent();
                if (b) {
                    var c = b.Ca;
                    b.Ca = null;
                    if (c && $.ea(a.clientX) && $.ib(c, new $.gb(a.clientX, a.clientY))) return
                }
                g8.u.tr.call(this, a)
            };
            $.g.EA = function (a) {
                return a.keyCode == this.PN && this.Us(a) ? !0 : g8.u.EA.call(this, a)
            };
            $.g.yfa = function () {
                return this.PN
            };
            $.wD("anychart-menuitem", function () {
                return new g8(null)
            });
            g8.prototype.fH = function () {
                return $.nD(this, 16) ? "menuitemcheckbox" : $.nD(this, 8) ? "menuitemradio" : g8.u.fH.call(this)
            };
            g8.prototype.getParent = function () {
                return $.yD.prototype.getParent.call(this)
            };
            g8.prototype.Zi = function () {
                return $.yD.prototype.Zi.call(this)
            };
            $.H(h8, g8);
            h8.prototype.b = function (a) {
                return $.n(a) ? (this.P = a, this) : this.P
            };
            h8.prototype.tE = function (a, b) {
                this.b() && $.n(this.getParent().Ka) ? h8.u.tE.call(this, this.getParent().P, b) : h8.u.tE.call(this, a, b)
            };
            $.ja(i8);
            $.g = i8.prototype;
            $.g.Ac = function (a) {
                return a.f.Ac("DIV", nta(this, a).join(" "))
            };
            $.g.vU = function (a) {
                return "DIV" == a.tagName
            };
            $.g.WG = function (a) {
                a:{
                    a = $.Mj(a);
                    for (var b = 0, c = a.length; b < c; b++) {
                        var d = a[b];
                        if (d = d in $.vD ? $.vD[d]() : null) {
                            a = d;
                            break a
                        }
                    }
                    a = null
                }
                return a
            };
            $.g.wU = function (a) {
                a = a.Ya();
                $.Uf(a, !0, $.hd);
                $.id && (a.hideFocus = !0);
                var b = this.b;
                b && $.zy(a, b)
            };
            $.g.zD = function () {
                return "anychart-container"
            };
            $.g.N1 = function () {
                return l8
            };
            $.H(m8, $.Dy);
            var k8 = "horizontal", l8 = "vertical";
            $.g = m8.prototype;
            $.g.IV = null;
            $.g.Xl = null;
            $.g.aw = null;
            $.g.vh = null;
            $.g.hj = !0;
            $.g.DA = !0;
            $.g.iD = !0;
            $.g.tl = -1;
            $.g.bm = null;
            $.g.uu = !1;
            $.g.rv = null;
            $.g.Ac = function () {
                this.Ed = this.aw.Ac(this)
            };
            $.g.yD = function () {
                return this.Ya()
            };
            $.g.rH = function (a) {
                return this.aw.vU(a)
            };
            $.g.ol = function (a) {
                this.Ed = mta(this.aw, this, a);
                "none" == a.style.display && (this.hj = !1)
            };
            $.g.Gg = function () {
                m8.u.Gg.call(this);
                this.Oj(function (a) {
                    a.wf && pta(this, a)
                }, this);
                var a = this.Ya();
                this.aw.wU(this);
                this.Ji(this.hj, !0);
                $.Fy(this).va(this, "enter", this.zH).va(this, "highlight", this.Mfa).va(this, "unhighlight", this.Nfa).va(this, "open", this.sga).va(this, "close", this.Lfa).va(a, $.DD.kF, this.Rj).va($.ve(a), [$.DD.lF, $.DD.jF], this.ega).va(a, [$.DD.kF, $.DD.lF, $.DD.jF, "mouseover", "mouseout", "contextmenu"], this.bga);
                this.iD && ota(this, !0)
            };
            $.g.Bh = function () {
                this.Vn(-1);
                this.bm && this.bm.Bl(!1);
                this.uu = !1;
                m8.u.Bh.call(this)
            };
            $.g.R = function () {
                m8.u.R.call(this);
                this.Xl && (this.Xl.ld(), this.Xl = null);
                this.aw = this.bm = this.rv = this.IV = null
            };
            $.g.zH = function () {
                return !0
            };
            $.g.Mfa = function (a) {
                var b = this.Jf(a.target);
                if (-1 < b && b != this.tl) {
                    var c = p8(this);
                    c && c.rq(!1);
                    this.tl = b;
                    c = p8(this);
                    this.uu && $.HD(c, !0);
                    this.bm && c != this.bm && ($.nD(c, 64) ? c.Bl(!0) : this.bm.Bl(!1))
                }
                b = this.Ya();
                null != a.target.Ya() && $.By(b, "activedescendant", a.target.Ya().id)
            };
            $.g.Nfa = function (a) {
                a.target == p8(this) && (this.tl = -1);
                this.Ya().removeAttribute("aria-activedescendant")
            };
            $.g.sga = function (a) {
                (a = a.target) && a != this.bm && a.getParent() == this && (this.bm && this.bm.Bl(!1), this.bm = a)
            };
            $.g.Lfa = function (a) {
                a.target == this.bm && (this.bm = null);
                var b = this.Ya(), c = a.target.Ya();
                b && $.oD(a.target, 2) && c && ita(b, c)
            };
            $.g.Rj = function (a) {
                this.DA && (this.uu = !0);
                var b = n8(this);
                b && $.kf(b) && $.lf(b) ? b.focus() : a.preventDefault()
            };
            $.g.ega = function () {
                this.uu = !1
            };
            $.g.bga = function (a) {
                a:{
                    var b = a.target;
                    if (this.rv) for (var c = this.Ya(); b && b !== c;) {
                        var d = b.id;
                        if (d in this.rv) {
                            b = this.rv[d];
                            break a
                        }
                        b = b.parentNode
                    }
                    b = null
                }
                if (b) switch (a.type) {
                    case $.DD.kF:
                        b.Rj(a);
                        break;
                    case $.DD.lF:
                    case $.DD.jF:
                        b.tr(a);
                        break;
                    case "mouseover":
                        b.oo(a);
                        break;
                    case "mouseout":
                        b.hg(a);
                        break;
                    case "contextmenu":
                        b.vH(a)
                }
            };
            $.g.UM = function () {
            };
            $.g.TM = function () {
                this.Vn(-1);
                this.uu = !1;
                this.bm && this.bm.Bl(!1)
            };
            $.g.no = function (a) {
                return this.isEnabled() && this.Oe() && (0 != $.Hy(this) || this.IV) && this.xU(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
            };
            $.g.xU = function (a) {
                var b = p8(this);
                if (b && "function" == typeof b.no && b.no(a) || this.bm && this.bm != b && "function" == typeof this.bm.no && this.bm.no(a)) return !0;
                if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
                switch (a.keyCode) {
                    case 27:
                        if (this.iD) n8(this).blur(); else return !1;
                        break;
                    case 36:
                        r8(this);
                        break;
                    case 35:
                        qta(this);
                        break;
                    case 38:
                        if (this.vh == l8) t8(this); else return !1;
                        break;
                    case 37:
                        if (this.vh == k8) $.Gy(this) ? s8(this) : t8(this); else return !1;
                        break;
                    case 40:
                        if (this.vh == l8) s8(this); else return !1;
                        break;
                    case 39:
                        if (this.vh ==
                            k8) $.Gy(this) ? t8(this) : s8(this); else return !1;
                        break;
                    default:
                        return !1
                }
                return !0
            };
            $.g.hc = function (a, b) {
                m8.u.hc.call(this, a, b)
            };
            $.g.Dg = function (a, b, c) {
                a.zJ |= 2;
                a.zJ |= 64;
                a.hn(32, !1);
                $.AD(a, !1);
                var d = a.getParent() == this ? this.Jf(a) : -1;
                m8.u.Dg.call(this, a, b, c);
                a.wf && this.wf && pta(this, a);
                a = d;
                -1 == a && (a = $.Hy(this));
                a == this.tl ? this.tl = Math.min($.Hy(this) - 1, b) : a > this.tl && b <= this.tl ? this.tl++ : a < this.tl && b > this.tl && this.tl--
            };
            $.g.removeChild = function (a, b) {
                if (a = $.z(a) ? $.Iy(this, a) : a) {
                    var c = this.Jf(a);
                    -1 != c && (c == this.tl ? (a.rq(!1), this.tl = -1) : c < this.tl && this.tl--);
                    (c = a.Ya()) && c.id && this.rv && $.Pc(this.rv, c.id)
                }
                a = m8.u.removeChild.call(this, a, b);
                $.AD(a, !0);
                return a
            };
            $.g.Oe = function () {
                return this.hj
            };
            $.g.Ji = function (a, b) {
                if (b || this.hj != a && this.dispatchEvent(a ? "show" : "hide")) {
                    this.hj = a;
                    var c = this.Ya();
                    c && ($.Rf(c, a), this.iD && j8(n8(this), this.DA && this.hj), b || this.dispatchEvent(this.hj ? "aftershow" : "afterhide"));
                    return !0
                }
                return !1
            };
            $.g.isEnabled = function () {
                return this.DA
            };
            $.g.Cj = function (a) {
                this.DA != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.DA = !0, this.Oj(function (a) {
                    a.X6 ? delete a.X6 : a.Cj(!0)
                })) : (this.Oj(function (a) {
                    a.isEnabled() ? a.Cj(!1) : a.X6 = !0
                }), this.uu = this.DA = !1), this.iD && j8(n8(this), a && this.hj))
            };
            $.g.Vn = function (a) {
                (a = this.xd(a)) ? a.rq(!0) : -1 < this.tl && p8(this).rq(!1)
            };
            $.g.l0 = function (a) {
                return a.Oe() && a.isEnabled() && $.nD(a, 2)
            };
            $.H(u8, $.jD);
            $.ja(u8);
            u8.prototype.Fh = function () {
                return "anychart-menuheader"
            };
            $.H(rta, $.yD);
            $.wD("anychart-menuheader", function () {
                return new rta(null)
            });
            $.H(v8, $.jD);
            $.ja(v8);
            v8.prototype.Ac = function (a) {
                return a.f.Ac("DIV", this.Fh())
            };
            v8.prototype.Wk = function (a, b) {
                b.id && Y7(a, b.id);
                if ("HR" == b.tagName) {
                    var c = b;
                    b = this.Ac(a);
                    c.parentNode && c.parentNode.insertBefore(b, c);
                    $.Ye(c)
                } else $.Rj(b, this.Fh());
                return b
            };
            v8.prototype.bw = function () {
            };
            v8.prototype.Fh = function () {
                return "anychart-menuseparator"
            };
            $.H(w8, $.yD);
            w8.prototype.Gg = function () {
                w8.u.Gg.call(this);
                var a = this.Ya();
                $.zy(a, "separator")
            };
            $.wD("anychart-menuseparator", function () {
                return new w8
            });
            $.H(x8, i8);
            $.ja(x8);
            $.g = x8.prototype;
            $.g.vU = function (a) {
                return "UL" == a.tagName || x8.u.vU.call(this, a)
            };
            $.g.WG = function (a) {
                return "HR" == a.tagName ? new w8 : x8.u.WG.call(this, a)
            };
            $.g.cr = function (a, b) {
                return $.df(a.Ya(), b)
            };
            $.g.zD = function () {
                return "anychart-menu"
            };
            $.g.wU = function (a) {
                x8.u.wU.call(this, a);
                a = a.Ya();
                $.By(a, "haspopup", "true")
            };
            $.H(y8, w8);
            $.wD("anychart-menuseparator", function () {
                return new w8
            });
            $.H(z8, m8);
            $.g = z8.prototype;
            $.g.yF = !0;
            $.g.cr = function (a) {
                if (this.aw.cr(this, a)) return !0;
                for (var b = 0, c = $.Hy(this); b < c; b++) {
                    var d = this.xd(b);
                    if ("function" == typeof d.cr && d.cr(a)) return !0
                }
                return !1
            };
            $.g.LK = function (a) {
                this.hc(a, !0)
            };
            $.g.oy = function (a) {
                return this.xd(a)
            };
            $.g.xm = function () {
                var a = [];
                this.Oj(function (b) {
                    a.push(b)
                });
                return a
            };
            $.g.setPosition = function (a, b) {
                var c = this.Oe();
                c || $.Rf(this.Ya(), !0);
                var d = this.Ya(), e = a, f = b, h = $.Hf(d);
                e instanceof $.gb && (f = e.y, e = e.x);
                $.Ef(d, d.offsetLeft + (e - h.x), d.offsetTop + (Number(f) - h.y));
                c || $.Rf(this.Ya(), !1)
            };
            $.g.Ji = function (a, b, c) {
                (b = z8.u.Ji.call(this, a, b)) && a && this.wf && this.yF && n8(this).focus();
                a && c && $.ea(c.clientX) ? this.Ca = new $.gb(c.clientX, c.clientY) : this.Ca = null;
                return b
            };
            $.g.zH = function (a) {
                this.yF && n8(this).focus();
                return z8.u.zH.call(this, a)
            };
            $.g.l0 = function (a) {
                return a.isEnabled() && a.Oe() && $.nD(a, 2)
            };
            $.g.ol = function (a) {
                for (var b = this.aw, c = $.De(this.f.b, "DIV", b.zD() + "-content", a), d = c.length, e = 0; e < d; e++) lta(b, this, c[e]);
                z8.u.ol.call(this, a)
            };
            $.g.xU = function (a) {
                var b = z8.u.xU.call(this, a);
                b || this.Oj(function (c) {
                    !b && c.yfa && c.PN == a.keyCode && (this.isEnabled() && this.Vn(this.Jf(c)), b = c.no(a))
                }, this);
                return b
            };
            $.g.Vn = function (a) {
                z8.u.Vn.call(this, a);
                (a = this.xd(a)) && hta(a.Ya(), this.Ya())
            };
            $.H(B8, z8);
            B8.prototype.zH = function () {
                if (this.yF) {
                    var a = n8(this);
                    0 != a.offsetWidth && a.focus()
                }
                return !0
            };
            B8.prototype.Ka = function () {
                return this.P
            };
            B8.prototype.Ac = function () {
                B8.u.Ac.call(this);
                this.P = this.f.Ac("DIV", "anychart-menu-scrollable");
                $.Xe(this.Ya(), this.P, 0)
            };
            B8.prototype.Vn = function (a) {
                B8.u.Vn.call(this, a);
                (a = this.xd(a)) && hta(a.Ya(), this.P)
            };
            E8.prototype.b = function () {
            };
            $.H(F8, E8);
            F8.prototype.b = function (a, b, c) {
                D8(this.element, this.i, a, b, void 0, c, this.K)
            };
            $.H(G8, F8);
            G8.prototype.G = function () {
                return this.o
            };
            G8.prototype.f = function (a) {
                this.o = a
            };
            G8.prototype.b = function (a, b, c, d) {
                var e = D8(this.element, this.i, a, b, null, c, 10, d, this.D);
                if (e & 496) {
                    var f = H8(e, this.i);
                    b = H8(e, b);
                    e = D8(this.element, f, a, b, null, c, 10, d, this.D);
                    e & 496 && (f = H8(e, f), b = H8(e, b), D8(this.element, f, a, b, null, c, this.o, d, this.D))
                }
            };
            $.H(I8, c8);
            $.ja(I8);
            I8.prototype.Ac = function (a) {
                var b = I8.u.Ac.call(this, a);
                $.Rj(b, "anychart-submenu");
                vta(this, a, b);
                return b
            };
            I8.prototype.Wk = function (a, b) {
                b = I8.u.Wk.call(this, a, b);
                $.Rj(b, "anychart-submenu");
                vta(this, a, b);
                var c = $.De(window.document, "DIV", "anychart-menu", b);
                if (c.length) {
                    var d = new z8(a.f);
                    c = c[0];
                    $.Rf(c, !1);
                    a.f.b.body.appendChild(c);
                    d.As(c);
                    M8(a, d)
                }
                return b
            };
            I8.prototype.bw = function (a, b) {
                var c = this.Gn(a), d = c && c.lastChild;
                I8.u.bw.call(this, a, b);
                d && c.lastChild != d && $.Nj(d, "anychart-submenu-arrow") && c.appendChild(d)
            };
            I8.prototype.AD = function (a) {
                I8.u.AD.call(this, a);
                var b = a.yD(), c = $.De(a.f.b, "SPAN", "anychart-submenu-arrow", b)[0];
                uta(a, c);
                c != b.lastChild && b.appendChild(c);
                a = a.Ya();
                $.By(a, "haspopup", "true")
            };
            $.H(J8, g8);
            $.g = J8.prototype;
            $.g.xH = null;
            $.g.GU = null;
            $.g.EU = !1;
            $.g.Ul = null;
            $.g.WM = !1;
            $.g.Gg = function () {
                J8.u.Gg.call(this);
                $.Fy(this).va(this.getParent(), "hide", this.u2);
                this.Ul && L8(this, this.Ul, !0)
            };
            $.g.Bh = function () {
                $.Fy(this).fc(this.getParent(), "hide", this.u2);
                this.Ul && (L8(this, this.Ul, !1), this.WM || (this.Ul.Bh(), $.Ye(this.Ul.Ya())));
                J8.u.Bh.call(this)
            };
            $.g.R = function () {
                this.Ul && !this.WM && this.Ul.ld();
                this.Ul = null;
                J8.u.R.call(this)
            };
            $.g.rq = function (a) {
                J8.u.rq.call(this, a);
                a || (this.xH && $.Gj(this.xH), this.xH = $.Fj(this.Nl, 218, this))
            };
            $.g.FU = function () {
                var a = this.getParent();
                a && p8(a) == this && (xta(this, !0), wta(this))
            };
            $.g.Nl = function () {
                var a = this.Ul;
                a && a.getParent() == this && (xta(this, !1), a.Oj(function (a) {
                    "function" == typeof a.Nl && a.Nl()
                }))
            };
            $.g.Vp = function () {
                this.xH && $.Gj(this.xH);
                this.GU && $.Gj(this.GU)
            };
            $.g.Ji = function (a, b) {
                var c = J8.u.Ji.call(this, a, b);
                c && !this.Oe() && this.Nl();
                return c
            };
            $.g.no = function (a) {
                var b = a.keyCode, c = $.Gy(this) ? 37 : 39, d = $.Gy(this) ? 39 : 37;
                if (!this.EU) {
                    if (!this.isEnabled() || b != c && b != this.PN) return !1;
                    this.FU();
                    r8(K8(this));
                    this.Vp()
                } else if (!K8(this).no(a)) if (b == d) this.Nl(); else return !1;
                a.preventDefault();
                return !0
            };
            $.g.Sfa = function () {
                if (this.Ul.getParent() == this) {
                    this.Vp();
                    var a = this.Zi();
                    a.Vn(a.Jf(this));
                    wta(this)
                }
            };
            $.g.u2 = function (a) {
                a.target == this.Zi() && (this.Nl(), this.Vp())
            };
            $.g.oo = function (a) {
                this.isEnabled() && (this.Vp(), this.GU = $.Fj(this.FU, 218, this));
                J8.u.oo.call(this, a)
            };
            $.g.Us = function (a) {
                this.Vp();
                if ($.nD(this, 8) || $.nD(this, 16)) return J8.u.Us.call(this, a);
                this.FU();
                return !0
            };
            $.g.oy = function (a) {
                return K8(this).xd(a)
            };
            $.g.xm = function () {
                return K8(this).xm()
            };
            $.g.cr = function (a) {
                return K8(this).cr(a)
            };
            $.wD("anychart-submenu", function () {
                return new J8(null)
            });
            $.H(N8, c8);
            $.ja(N8);
            $.g = N8.prototype;
            $.g.Ac = function (a) {
                var b = N8.u.Ac.call(this, a);
                $.Rj(b, "anychart-submenu");
                yta(this, a, b);
                return b
            };
            $.g.Wk = function (a, b) {
                b = N8.u.Wk.call(this, a, b);
                $.Rj(b, "anychart-submenu");
                yta(this, a, b);
                var c = $.De(window.document, "div", "anychart-menu", b);
                if (c.length) {
                    var d = new B8(a.f);
                    c = c[0];
                    $.Rf(c, !1);
                    a.f.b.body.appendChild(c);
                    d.As(c);
                    M8(a, d)
                }
                return b
            };
            $.g.bw = function (a, b) {
                var c = this.Gn(a), d = c && c.lastChild;
                N8.u.bw.call(this, a, b);
                d && c.lastChild != d && $.Nj(d, "anychart-submenu-arrow") && c.appendChild(d)
            };
            $.g.AD = function (a) {
                N8.u.AD.call(this, a);
                var b = a.yD(), c = $.De(a.f.b, "span", "anychart-submenu-arrow", b)[0];
                c.innerHTML = "&nbsp;";
                c != b.lastChild && b.appendChild(c);
                a = a.Ya();
                $.By(a, "haspopup", "true")
            };
            $.g.Gn = function (a) {
                a = a && a.firstChild;
                return "I" == a.tagName ? a.nextSibling : a
            };
            $.H(O8, g8);
            $.g = O8.prototype;
            $.g.MF = null;
            $.g.xR = null;
            $.g.vR = !1;
            $.g.Jl = null;
            $.g.MK = !1;
            $.g.Gg = function () {
                O8.u.Gg.call(this);
                $.Fy(this).va(this.getParent(), "hide", this.J_);
                this.Jl && Q8(this, this.Jl, !0)
            };
            $.g.Bh = function () {
                $.Fy(this).fc(this.getParent(), "hide", this.J_);
                this.Jl && (Q8(this, this.Jl, !1), this.MK || (this.Jl.Bh(), $.Ye(this.Jl.Ya())));
                O8.u.Bh.call(this)
            };
            $.g.R = function () {
                this.b = null;
                this.Jl && !this.MK && this.Jl.ld();
                this.Jl = null;
                O8.u.R.call(this)
            };
            $.g.rq = function (a) {
                O8.u.rq.call(this, a);
                a || (this.MF && $.Gj(this.MF), this.MF = $.Fj(this.Nl, 218, this))
            };
            $.g.wR = function () {
                var a = this.getParent();
                a && p8(a) == this && (Ata(this, !0), zta(this))
            };
            $.g.Nl = function () {
                var a = this.Jl;
                a && a.getParent() == this && (Ata(this, !1), a.Oj(function (a) {
                    "function" == typeof a.Nl && a.Nl()
                }))
            };
            $.g.Vp = function () {
                this.MF && $.Gj(this.MF);
                this.xR && $.Gj(this.xR)
            };
            $.g.Ji = function (a, b) {
                var c = O8.u.Ji.call(this, a, b);
                c && !this.Oe() && this.Nl();
                return c
            };
            $.g.no = function (a) {
                var b = a.keyCode, c = $.Gy(this) ? 37 : 39, d = $.Gy(this) ? 39 : 37;
                if (!this.vR) {
                    if (!this.isEnabled() || b != c && b != this.PN) return !1;
                    this.wR();
                    r8(P8(this));
                    this.Vp()
                } else if (!P8(this).no(a)) if (b == d) this.Nl(); else return !1;
                a.preventDefault();
                return !0
            };
            $.g.Zca = function () {
                if (this.Jl.getParent() == this) {
                    this.Vp();
                    var a = this.Zi();
                    a.Vn(a.Jf(this));
                    zta(this)
                }
            };
            $.g.J_ = function (a) {
                a.target == this.Zi() && (this.Nl(), this.Vp())
            };
            $.g.oo = function (a) {
                this.isEnabled() && (this.Vp(), this.xR = $.Fj(this.wR, 218, this));
                O8.u.oo.call(this, a)
            };
            $.g.Us = function (a) {
                this.Vp();
                if ($.nD(this, 8) || $.nD(this, 16)) return O8.u.Us.call(this, a);
                this.wR();
                return !0
            };
            $.g.LK = function (a) {
                P8(this).hc(a, !0)
            };
            $.g.oy = function (a) {
                return P8(this).xd(a)
            };
            $.g.cr = function (a) {
                return P8(this).cr(a)
            };
            $.H(S8, E8);
            S8.prototype.b = function (a, b, c, d) {
                var e = $.ve(a);
                var f = e.body;
                e = e.documentElement;
                e = new $.gb(f.scrollLeft || e.scrollLeft, f.scrollTop || e.scrollTop);
                f = this.i.x + e.x;
                e = this.i.y + e.y;
                var h = sta(a);
                f -= h.x;
                e -= h.y;
                C8(new $.gb(f, e), a, b, c, null, null, d)
            };
            $.H(T8, S8);
            T8.prototype.o = 0;
            T8.prototype.f = function (a) {
                this.o = a
            };
            T8.prototype.b = function (a, b, c, d) {
                var e = $.Ff(a);
                e = a8(e);
                var f = $.Ie($.Be(a).b);
                f = new $.gb(this.i.x + f.scrollLeft, this.i.y + f.scrollTop);
                var h = b, k = C8(f, a, h, c, e, 10, d);
                if (0 != (k & 496)) {
                    if (k & 16 || k & 32) h ^= 4;
                    if (k & 64 || k & 128) h ^= 1;
                    k = C8(f, a, h, c, e, 10, d);
                    0 != (k & 496) && C8(f, a, b, c, e, this.o, d)
                }
            };
            $.H(Bta, G8);
            $.H(U8, z8);
            $.g = U8.prototype;
            $.g.ol = function (a) {
                U8.u.ol.call(this, a);
                (a = a.getAttribute("for") || a.htmlFor) && this.BU(this.f.Ya(a), 1)
            };
            $.g.Gg = function () {
                U8.u.Gg.call(this);
                this.i.forEach(this.V_, this);
                var a = $.Fy(this);
                a.va(this, "action", this.uia);
                a.va(this.f.b, "mousedown", this.Hia, !0)
            };
            $.g.BU = function (a, b, c, d, e) {
                var f;
                (f = !a) || (f = $.oa(a), f = !$.$B(this.i.f, f));
                f && (a ? (b = {Ed: a, q6: b, Hha: c, pT: d ? "contextmenu" : "mousedown", Qc: e}, this.i.set($.oa(a), b)) : b = null, this.wf && this.V_(b), a = $.qa(this.Nia, a), this.Ya() && $.Fy(this).va(this.Ya(), "keydown", a))
            };
            $.g.Nia = function (a, b) {
                if (27 == b.keyCode) a.focus(); else {
                    var c = this.xd(this.tl);
                    if (c) {
                        c = c.Ya();
                        var d = new $.Ad(b.kf, c);
                        d.target = c;
                        if (32 == b.keyCode || 13 == b.keyCode) $.Ed(c) ? $.uf(c, "keydown", !1, d) : $.ge(c, "keydown", !1, d);
                        32 == b.keyCode && this.Kc()
                    }
                }
            };
            $.g.V_ = function (a) {
                $.Fy(this).va(a.Ed, a.pT, this.v4);
                "contextmenu" != a.pT && $.Fy(this).va(a.Ed, "keydown", this.dja)
            };
            $.g.CU = function (a) {
                var b;
                (b = !a) || (b = $.oa(a), b = !$.$B(this.i.f, b));
                if (b) throw Error("Menu not attached to provided element, unable to detach.");
                a = $.oa(a);
                this.wf && (b = this.i.get(a), $.Fy(this).fc(b.Ed, b.pT, this.v4));
                this.i.remove(a)
            };
            $.g.Kc = function () {
                this.Oe() && (this.Ji(!1), this.Oe() || (0, $.Qn)())
            };
            $.g.uia = function () {
                this.Kc()
            };
            $.g.v4 = function (a) {
                Dta(this, a)
            };
            $.g.dja = function (a) {
                32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Dta(this, a);
                40 == a.keyCode && r8(this)
            };
            $.g.Hia = function (a) {
                this.Oe() && !this.cr(a.target) && this.Kc()
            };
            $.g.TM = function (a) {
                U8.u.TM.call(this, a);
                this.Kc()
            };
            $.g.R = function () {
                U8.u.R.call(this);
                this.i && (this.i.clear(), delete this.i)
            };
            $.H(V8, U8);
            $.g = V8.prototype;
            $.g.zH = function () {
                if (this.yF) {
                    var a = n8(this);
                    0 != a.offsetWidth && a.focus()
                }
                return !0
            };
            $.g.iM = !0;
            $.g.enabled = function (a) {
                return $.n(a) ? (this.iM != a && (this.iM = a), this) : this.iM
            };
            $.g.I_ = function (a) {
                a && (this.b ? $.Aa(this.b, a) || this.b.push(a) : this.b = [a]);
                this.Ya() && this.b && this.b.length && $.Sj(this.Ya(), this.b)
            };
            $.g.Sca = function (a) {
                a && this.b && $.Fa(this.b, a) && (this.Ya() && $.Tj(this.Ya(), a), this.b.length || (this.b = null))
            };
            $.g.items = function (a) {
                return null != a ? (this.n3(function () {
                    return a
                }), a.length || this.Kc(), this.dh = a, this) : this.dh
            };
            $.g.n3 = function (a) {
                return $.D(a) ? (this.ea != a && (this.ea = a, this.na = !1), this) : this.ea
            };
            $.g.Rca = function (a) {
                return $.n(a) ? (this.aa != a && (this.aa = a), this) : this.aa
            };
            $.g.yH = function (a) {
                this.iM && (this.pa && this.pa.Ua().Kc(), this.lL = a.target, Eta(this, a, this.lL), $.B(this.items()) && !$.Nc(this.items()) && ($.D(a.getOriginalEvent) ? a.getOriginalEvent().preventDefault() : a.preventDefault(), this.Aj && $.D(this.Aj.getType) && "map" == this.Aj.getType() ? (0, window.setTimeout)(this.Ia, 0, a.clientX, a.clientY) : this.show(a.clientX, a.clientY)))
            };
            $.g.Rd = function (a) {
                V8.u.Rd.call(this, a);
                this.b && this.b.length && $.Sj(this.Ya(), this.b)
            };
            $.g.BU = function (a, b) {
                a && !this.K && (this.K = !0, $.B(a) && $.D(a.listen) ? (this.Aj = a, this.Aj.listen("contextmenu", this.yH, b, this)) : $.Fy(this).va(a, "contextmenu", this.yH, b));
                return this
            };
            $.g.CU = function (a, b) {
                this.K && (null != this.Aj && $.D(this.Aj.unlisten) ? this.K = !this.Aj.unlisten("contextmenu", this.yH, b, this) : $.de(a, "contextmenu", this.yH, b, this) && ($.Fy(this).fc(a, "contextmenu", this.yH, b), this.K = !1), this.K || this.Kc());
                return this
            };
            $.g.show = function (a, b) {
                if (this.na && !$.Nc(this.items()) || Eta(this, null, this.Aj)) {
                    var c = this.Aj ? this.Aj.O().Ja() : null;
                    c = c && c.fullScreen() ? c.Rl() : $.Pp.body;
                    this.ba.parentNode != c && c.appendChild(this.ba);
                    for (this.wf || this.Rd(this.ba); this.o && 0 != this.o.length;) c = this.xd(0), this.removeChild(c), c.ld();
                    Fta(this, this, this.items());
                    c = new T8(a, b);
                    c.f(197);
                    Cta(this, c)
                }
            };
            $.g.$ga = function (a, b) {
                return $.ea(a.index) ? $.ea(b.index) ? a.index - b.index || 1 : -1 : 1
            };
            $.g.R = function () {
                null != this.Aj && this.CU();
                this.ba = this.b = this.Aj = this.lL = null;
                V8.u.R.call(this)
            };
            $.g.F = function () {
                var a = {};
                a.enabled = this.enabled();
                this.b && (a.extraClassNames = $.Ha(this.b));
                return a
            };
            $.g.N = function (a) {
                $.n(a) && !this.Ie(a) && $.B(a) && this.U(a);
                return this
            };
            $.g.Zd = function (a) {
                return $.da(a) || null === a ? {enabled: !!a} : null
            };
            $.g.Ie = function (a) {
                return (a = this.Zd(a)) ? (this.enabled(a.enabled), !0) : !1
            };
            $.g.U = function (a) {
                this.enabled("enabled" in a ? a.enabled : !0);
                if (a = a.extraClassNames) for (var b = 0, c = a.length; b < c; b++) this.I_(a[b])
            };
            var I9 = V8.prototype;
            $.E("anychart.ui.contextMenu", function () {
                return new V8
            });
            I9.serialize = I9.F;
            I9.setup = I9.N;
            I9.enabled = I9.enabled;
            I9.addClassName = I9.I_;
            I9.removeClassName = I9.Sca;
            I9.attach = I9.BU;
            I9.detach = I9.CU;
            I9.listen = I9.va;
            I9.unlisten = I9.fc;
            I9.show = I9.show;
            I9.hide = I9.Kc;
            I9.items = I9.items;
            I9.itemsProvider = I9.n3;
            I9.itemsFormatter = I9.Rca;
            $.H(R8, x8);
            $.ja(R8);
            R8.prototype.zD = function () {
                return "anychart-toolbar-menu"
            };
            $.H(X8, $.tD);
            $.ja(X8);
            $.g = X8.prototype;
            $.g.Ac = function (a) {
                var b = $.qD(this, a);
                b = a.f.Ac("DIV", "anychart-inline-block " + b.join(" "), this.nL(a.Od, a.f));
                $.uD(b, a.gb);
                return b
            };
            $.g.tH = function () {
                return "button"
            };
            $.g.Gn = function (a) {
                return a && a.firstChild && a.firstChild.firstChild
            };
            $.g.nL = function (a, b) {
                return b.Ac("DIV", "anychart-inline-block " + (this.Fh() + "-outer-box"), b.Ac("DIV", "anychart-inline-block " + (this.Fh() + "-inner-box"), a))
            };
            $.g.sH = function (a) {
                return "DIV" == a.tagName
            };
            $.g.Wk = function (a, b) {
                Hta(b, !0);
                Hta(b, !1);
                a:{
                    var c = a.f.S1(b);
                    var d = this.Fh() + "-outer-box";
                    if (c && $.Nj(c, d) && (c = a.f.S1(c), d = this.Fh() + "-inner-box", c && $.Nj(c, d))) {
                        c = !0;
                        break a
                    }
                    c = !1
                }
                c || b.appendChild(this.nL(b.childNodes, a.f));
                $.Sj(b, ["anychart-inline-block", this.Fh()]);
                return X8.u.Wk.call(this, a, b)
            };
            $.g.Fh = function () {
                return "anychart-custom-button"
            };
            $.H(Y8, X8);
            $.ja(Y8);
            $.g = Y8.prototype;
            $.g.Gn = function (a) {
                return Y8.u.Gn.call(this, a && a.firstChild)
            };
            $.g.Wk = function (a, b) {
                var c = $.De(window.document, "*", "anychart-menu", b)[0];
                if (c) {
                    $.Rf(c, !1);
                    $.ve(c).body.appendChild(c);
                    var d = new z8;
                    d.As(c);
                    a9(a, d)
                }
                return Y8.u.Wk.call(this, a, b)
            };
            $.g.nL = function (a, b) {
                return Y8.u.nL.call(this, [b.Ac("DIV", "anychart-inline-block " + (this.Fh() + "-caption"), a), this.C0(b)], b)
            };
            $.g.C0 = function (a) {
                return a.Ac("DIV", "anychart-inline-block " + (this.Fh() + "-dropdown"), "Â ")
            };
            $.g.Fh = function () {
                return "anychart-menu-button"
            };
            $.H(Z8, Y8);
            $.ja(Z8);
            Z8.prototype.Fh = function () {
                return "anychart-toolbar-menu-button"
            };
            $.H($8, Z8);
            $.ja($8);
            $8.prototype.C0 = function (a) {
                a = a.Ac("DIV", "anychart-inline-block " + (this.Fh() + "-dropdown"));
                a.innerHTML = "&nbsp;";
                return a
            };
            $.H(b9, $.OD);
            $.g = b9.prototype;
            $.g.pN = !1;
            $.g.Gg = function () {
                b9.u.Gg.call(this);
                Jta(this, !0);
                this.b && c9(this, this.b, !0);
                $.By(this.Ed, "haspopup", !!this.b)
            };
            $.g.Bh = function () {
                b9.u.Bh.call(this);
                Jta(this, !1);
                if (this.b) {
                    this.Bl(!1);
                    this.b.Bh();
                    c9(this, this.b, !1);
                    var a = this.b.Ya();
                    a && $.Ye(a)
                }
            };
            $.g.R = function () {
                b9.u.R.call(this);
                this.b && (this.b.ld(), delete this.b);
                delete this.Ka;
                this.P.ld()
            };
            $.g.Rj = function (a) {
                b9.u.Rj.call(this, a);
                this.uq() && (this.Bl(!$.oD(this, 64), a), this.b && (this.b.uu = $.oD(this, 64)))
            };
            $.g.tr = function (a) {
                b9.u.tr.call(this, a);
                this.b && !this.uq() && (this.b.uu = !1)
            };
            $.g.Us = function () {
                $.HD(this, !1);
                return !0
            };
            $.g.dga = function (a) {
                this.b && this.b.Oe() && !this.cr(a.target) && this.Bl(!1)
            };
            $.g.cr = function (a) {
                return a && $.df(this.Ya(), a) || this.b && this.b.cr(a) || !1
            };
            $.g.EA = function (a) {
                if (32 == a.keyCode) {
                    if (a.preventDefault(), "keyup" != a.type) return !0
                } else if ("key" != a.type) return !1;
                if (this.b && this.b.Oe()) {
                    var b = 13 == a.keyCode || 32 == a.keyCode, c = this.b.no(a);
                    return 27 == a.keyCode || b ? (this.Bl(!1), !0) : c
                }
                return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Bl(!0, a), !0) : !1
            };
            $.g.pga = function () {
                this.Bl(!1)
            };
            $.g.qga = function () {
                this.uq() || this.Bl(!1)
            };
            $.g.VM = function (a) {
                this.pN || this.Bl(!1);
                b9.u.VM.call(this, a)
            };
            $.g.oy = function (a) {
                return this.b ? this.b.xd(a) : null
            };
            $.g.Ji = function (a, b) {
                var c = b9.u.Ji.call(this, a, b);
                c && !this.Oe() && this.Bl(!1);
                return c
            };
            $.g.Cj = function (a) {
                b9.u.Cj.call(this, a);
                this.isEnabled() || this.Bl(!1)
            };
            $.g.Bl = function (a, b) {
                b9.u.Bl.call(this, a);
                if (this.b && $.oD(this, 64) == a) {
                    if (a) this.b.wf || this.b.Rd(), this.Ca = a8(this.Ya()), this.ea = $.Qf(this.Ya()), Ita(this), !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.Vn(-1) : r8(this.b); else {
                        $.HD(this, !1);
                        this.b.uu = !1;
                        var c = this.Ya();
                        c && ($.By(c, "activedescendant", ""), $.By(c, "owns", ""));
                        null != this.ba && (this.ba = void 0, (c = this.b.Ya()) && $.Kf(c, "", ""))
                    }
                    this.b.Ji(a, !1, b);
                    if (!this.md) {
                        c = $.Fy(this);
                        var d = a ? c.va : c.fc;
                        d.call(c, this.f.b, "mousedown", this.dga, !0);
                        this.pN && d.call(c, this.b,
                            "blur", this.qga);
                        d.call(c, this.P, "tick", this.eja);
                        a ? this.P.start() : this.P.stop()
                    }
                }
                this.b && this.b.Ya() && this.b.Ed.removeAttribute("aria-hidden")
            };
            $.g.eja = function () {
                var a = $.Qf(this.Ya()), b = a8(this.Ya()), c;
                (c = !$.nb(this.ea, a)) || (c = this.Ca, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
                c && (this.ea = a, this.Ca = b, Ita(this))
            };
            $.g.Qfa = function (a) {
                (a = a.target.Ya()) && Kta(this, a)
            };
            $.g.mga = function (a) {
                $.nD(this, 32) && this.Ya() && this.b && this.b.Oe() && a.stopPropagation()
            };
            $.g.Rfa = function () {
                if (!p8(this.b)) {
                    var a = this.Ya();
                    $.By(a, "activedescendant", "");
                    $.By(a, "owns", "")
                }
            };
            $.g.Pfa = function (a) {
                if ($.oD(this, 64) && a.target instanceof g8) {
                    a = a.target;
                    var b = a.Ya();
                    a.Oe() && $.oD(a, 2) && null != b && Kta(this, b)
                }
            };
            $.wD("anychart-menu-button", function () {
                return new b9(null)
            });
            $.H(d9, b9);
            $.wD("anychart-toolbar-menu-button", function () {
                return new d9(null)
            });
            $.H(e9, d9);
            e9.prototype.EA = function (a) {
                if (32 == a.keyCode) {
                    if (a.preventDefault(), "keyup" != a.type) return !0
                } else if ("key" != a.type) return !1;
                var b;
                this.b || a9(this, new z8(this.f, this.Ia));
                return (b = this.b || null) && b.Oe() ? b.no(a) : 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Bl(!0, a), !0) : !1
            };
            $.H(f9, v8);
            $.ja(f9);
            f9.prototype.Ac = function (a) {
                return a.f.Ac("DIV", $.qD(this, a).join(" ") + " anychart-inline-block", "Â ")
            };
            f9.prototype.Wk = function (a, b) {
                b = f9.u.Wk.call(this, a, b);
                $.Rj(b, "anychart-inline-block");
                return b
            };
            f9.prototype.Fh = function () {
                return "anychart-toolbar-separator"
            };
            $.H(g9, f9);
            $.ja(g9);
            g9.prototype.Ac = function (a) {
                a = a.f.Ac("DIV", $.qD(this, a).join(" ") + " anychart-inline-block");
                a.innerHTML = "&nbsp;";
                return a
            };
            $.H(h9, w8);
            $.H(i9, i8);
            $.ja(i9);
            i9.prototype.WG = function (a) {
                return "HR" == a.tagName ? new w8(f9.Hd()) : i9.u.WG.call(this, a)
            };
            i9.prototype.zD = function () {
                return "anychart-toolbar"
            };
            i9.prototype.N1 = function () {
                return k8
            };
            $.H(j9, m8);
            j9.prototype.UM = function (a) {
                j9.u.UM.call(this, a);
                this.uu || r8(this)
            };
            $.H(k9, j9);
            k9.prototype.O = function (a) {
                return $.n(a) ? (a = $.Ce(window.document, a), this.Jc != a && (this.Bh(), this.Jc = a, this.W()), this) : this.Jc
            };
            k9.prototype.target = function (a) {
                return $.n(a) ? (this.na = a, this) : this.na
            };
            k9.prototype.W = function () {
                if (this.Jc) if (this.Jc.firstChild) {
                    var a = this.Jc.firstChild;
                    this.tE(a.parentNode, a)
                } else this.Rd(this.Jc); else $.kl(13);
                return this
            };
            $.H(l9, X8);
            $.ja(l9);
            l9.prototype.Fh = function () {
                return "anychart-toolbar-button"
            };
            $.H(m9, $.OD);
            $.wD("anychart-toolbar-button", function () {
                return new m9(null)
            });
            $.H(r9, k9);
            var Nta = {print: "Print", changeLayout: "Layout", changeRange: "Range", allDates: "All dates", visibleDates: "Visible dates", portrait: "Portrait", landscape: "Landscape", saveAs: "Save As", zoomIn: "Zoom In", zoomOut: "Zoom Out", fitAll: "Fit All", expandAll: "Expand All", collapseAll: "Collapse All"}, q9 = "landscape", p9 = "visible";
            $.g = r9.prototype;
            $.g.tda = function (a) {
                return $.n(a) ? (a != this.K && (this.K = a, s9(this)), this) : this.K
            };
            $.g.Ufa = function (a) {
                a = a.target.dh;
                var b = a.Vt, c = a && a.R_ || [];
                a = this.target();
                if ("print" == b) if (b = this.wO.xe, c = [c[0], "landscape" == this.wO.we], $.D(this.aa)) c.push(b), this.aa.apply(null, $.Ga([a], c)); else if (a) {
                    var d = a.print;
                    if ($.D(d)) {
                        var e = a.dg().scale().sj();
                        "full" == b && a.Qm();
                        d.apply(a, c);
                        a.kj(e.min, e.max)
                    } else $.kl(14, null, ["print"])
                } else $.kl(15); else a ? (d = a[b], $.D(d) ? d.apply(a, c) : $.kl(14, null, [b])) : $.kl(15)
            };
            $.g.N4 = function (a) {
                if ($.n(a)) {
                    for (this.ea = a; 3 < $.Hy(this.Xs);) this.Xs.Bj(3, !0);
                    this.Bh();
                    this.W();
                    return this
                }
                return this.ea
            };
            $.g.W = function () {
                s9(this);
                if (!this.wf) {
                    for (var a = this.N4(), b = 0; b < a.length; b++) {
                        var c = a[b], d = new h8("us-letter" == c ? "US Letter" : $.Dc(c));
                        d.dh = {Vt: "print", R_: [c]};
                        $.BD(d, "anychart-toolbar-print-" + c);
                        this.Xs.hc(d, !0)
                    }
                    return r9.u.W.call(this)
                }
                return this
            };
            $.g.Fja = function (a) {
                return $.n(a) ? (this.aa = a, this) : this.aa
            };
            $.g.mla = function () {
                for (var a = this.b, b = 0; b < a.length; b++) {
                    var c = a[b], d = c.dh, e = o9(d.id);
                    e && (Z7(c, e), d.text = e)
                }
                c = this.Xs.xd(0);
                a = this.Xs.xd(1);
                Z7(c, o9("changeLayout"));
                Z7(a, o9("changeRange"));
                b = c.oy(0);
                c = c.oy(1);
                Z7(b, o9("landscape"));
                Z7(c, o9("portrait"));
                b = a.oy(0);
                a = a.oy(1);
                Z7(b, o9("allDates"));
                Z7(a, o9("visibleDates"));
                s9(this);
                return this
            };
            $.E("anychart.ui.ganttToolbar", function () {
                return new r9
            });
            var J9 = r9.prototype;
            J9.draw = J9.W;
            J9.printPaperSizes = J9.N4;
            J9.container = J9.O;
            J9.target = J9.target;
            J9.buttonsMode = J9.tda;
            J9.printFunction = J9.Fja;
            J9.updateLocalizedCaptions = J9.mla;
            $.H(t9, $.Dy);
            $.g = t9.prototype;
            $.g.hj = !1;
            $.g.visible = function (a) {
                if ($.n(a)) {
                    if (a == this.hj) return this;
                    a ? (this.wf || this.Rd(), this.hj = !0) : this.hj = !1;
                    $.Rf(this.Ya(), this.hj);
                    return this
                }
                return this.hj
            };
            $.g.Ac = function () {
                t9.u.Ac.call(this);
                Ota(this)
            };
            $.g.ol = function (a) {
                t9.u.ol.call(this, a);
                Ota(this, a)
            };
            $.g.Gg = function () {
                t9.u.Gg.call(this)
            };
            $.g.Bh = function () {
                t9.u.Bh.call(this)
            };
            $.g.R = function () {
                t9.u.R.call(this)
            };
            var K9 = t9.prototype;
            $.E("anychart.ui.preloader", function () {
                return new t9
            });
            K9.render = K9.Rd;
            K9.decorate = K9.As;
            K9.visible = K9.visible;
            $.H(u9, $.Dy);
            $.g = u9.prototype;
            $.g.target = function (a) {
                this.b = a
            };
            $.g.uR = function (a) {
                this.Ca = a.firstVisible;
                this.Ka = a.lastVisible;
                Qta(this)
            };
            $.g.format = function (a) {
                $.n(a) && (this.IT = a, Qta(this));
                return this.IT || $.iq.format.outputDateTimeFormat()
            };
            $.g.Ac = function () {
                u9.u.Ac.call(this);
                Rta(this)
            };
            $.g.Tca = function (a) {
                this.Rd(a)
            };
            $.g.ol = function (a) {
                Sta(a) ? this.Rd(a) : (u9.u.ol.call(this, a), Rta(this))
            };
            $.g.lfa = function (a) {
                return $.n(a) ? (this.na != a && (this.na = a, this.ba && $.ef(this.ba, $.iq.format.getMessage(this.na))), this) : this.na
            };
            $.g.dla = function (a) {
                return $.n(a) ? (this.Ia != a && (this.Ia = a, this.P && $.ef(this.P, $.iq.format.getMessage(this.Ia))), this) : this.Ia
            };
            $.g.Rd = function (a) {
                a = a || this.b;
                if (Sta(a)) {
                    this.target(a);
                    this.Za = !0;
                    var b = this.b.container() ? this.b.container().getStage() : null;
                    b && b.container() ? a = b.container() : a = null
                }
                b = this.b ? !(0, window.isNaN)(this.b.getSelectedRange().firstSelected) : !1;
                a && b ? u9.u.Rd.call(this, a) : (a = (0, $.pa)(this.Tca, this, a || this.b), this.b.Ce("chartdraw", a, !1, this))
            };
            $.g.Gg = function () {
                u9.u.Gg.call(this);
                if (this.b) {
                    if (this.Za) {
                        var a = ($.Yf(this.Ya()).height || 21) + 15, b = this.b.padding().bottom();
                        a > b && this.b.padding().bottom(b + a)
                    }
                    this.b.listen("selectedrangechange", this.uR, !1, this);
                    a = $.Fy(this);
                    a.va(this.i.Ya(), "blur", this.FW);
                    a.va(this.K.Ya(), "blur", this.FW);
                    this.aa || (this.aa = new $.Np(this.i.Ya()), a.va(this.aa, "key", this.fO));
                    this.ea || (this.ea = new $.Np(this.K.Ya()), a.va(this.ea, "key", this.fO))
                }
            };
            $.g.FW = function () {
                var a = this.i.vj(), b = this.K.vj(), c = this.format();
                a = $.iq.format.parseDateTime(a, c);
                b = $.iq.format.parseDateTime(b, c);
                if (a && b) {
                    c = a.getTime();
                    var d = b.getTime();
                    c > d && (a = [b, b = a][0], c = [d, d = c][0]);
                    if (c != this.Ca || d != this.Ka) {
                        this.Ca = c;
                        this.Ka = d;
                        this.b.selectRange(a, b, !0);
                        return
                    }
                }
                $.Oy(this.i, $.iq.format.dateTime(this.Ca, this.format()));
                $.Oy(this.K, $.iq.format.dateTime(this.Ka, this.format()))
            };
            $.g.fO = function (a) {
                if (13 == a.keyCode) {
                    a = a.target.p3.Ya();
                    var b;
                    a:{
                        var c = b = 0;
                        if (Pta(a)) b = a.selectionStart, c = -1; else if ($.id && !$.dd("9")) {
                            var d = a.ownerDocument || a.document;
                            var e = d.selection.createRange();
                            "textarea" == a.type ? (d = d.body.createTextRange(), d.moveToElementText(a)) : d = a.createTextRange();
                            d = [d, e];
                            e = d[0];
                            d = d[1];
                            if (e.inRange(d)) {
                                e.setEndPoint("EndToStart", d);
                                if ("textarea" == a.type) {
                                    d.duplicate();
                                    c = b = e.text;
                                    for (d = !1; !d;) 0 == e.compareEndPoints("StartToEnd", e) ? d = !0 : (e.moveEnd("character", -1), e.text ==
                                    b ? c += "\r\n" : d = !0);
                                    b = [c.length, -1];
                                    break a
                                }
                                b = e.text.length;
                                c = -1
                            }
                        }
                        b = [b, c]
                    }
                    b = b[0];
                    this.FW();
                    Pta(a) ? (a.selectionStart = b, a.selectionEnd = b) : $.id && !$.dd("9") && ("textarea" == a.type && (b = $.jc(a.value.substring(0, b)).length), a = a.createTextRange(), a.collapse(!0), a.move("character", b), a.select())
                }
            };
            $.g.Bh = function () {
                u9.u.Bh.call(this)
            };
            $.g.R = function () {
                this.b.unlisten("selectedrangechange", this.uR, !1, this);
                this.b = null;
                this.P && ($.Ye(this.ba), this.ba = null);
                this.P && ($.Ye(this.P), this.P = null);
                this.aa && ($.Fy(this).fc(this.aa, "key", this.fO), this.aa.ld(), this.aa = null);
                this.ea && ($.Fy(this).fc(this.ea, "key", this.fO), this.ea.ld(), this.ea = null);
                u9.u.R.call(this)
            };
            var L9 = u9.prototype;
            $.E("anychart.ui.rangePicker", function () {
                return new u9
            });
            L9.render = L9.Rd;
            L9.decorate = L9.As;
            L9.target = L9.target;
            L9.format = L9.format;
            L9.dispose = L9.ld;
            L9.getElement = L9.Ya;
            L9.toLabelText = L9.dla;
            L9.fromLabelText = L9.lfa;
            $.H(Uta, $.RD);
            var Tta = "anychart-button-toggle";
            $.H(v9, $.tf);
            $.g = v9.prototype;
            $.g.wH = null;
            $.g.DU = null;
            $.g.oy = function (a) {
                return this.Tb[a] || null
            };
            $.g.xm = function () {
                return $.Ha(this.Tb)
            };
            $.g.clear = function () {
                var a = this.Tb;
                if (!$.A(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
                a.length = 0;
                this.wH = null
            };
            $.g.R = function () {
                v9.u.R.call(this);
                delete this.Tb;
                this.wH = null
            };
            $.H(y9, $.Dy);
            $.g = y9.prototype;
            $.g.target = function (a) {
                this.b = a
            };
            $.g.KK = function (a) {
                if (a.firstSelected == a.firstKey && a.lastSelected == a.lastKey && (a = $.Iy(this, "max"))) {
                    x9(this.i, a);
                    return
                }
                x9(this.i, null)
            };
            $.g.Wca = function (a, b) {
                a && $.ID(a, b)
            };
            $.g.Xy = function (a) {
                $.n(a) && $.A(a) && (this.jd = (0, $.Kg)(a, function (a, c) {
                    c = $.Sc(c);
                    var b = $.n(c.startDate) && $.n(c.endDate);
                    "unit" == c.type || "points" == c.type ? (c.count = c.count || 1, c.anchor = $.fl(c.anchor), a.push(c)) : b ? (c.type = "range", a.push(c)) : "range" != c.type && a.push(c);
                    return a
                }, []), this.update());
                return this.jd
            };
            $.g.Ac = function () {
                y9.u.Ac.call(this);
                Wta(this)
            };
            $.g.ol = function (a) {
                Xta(a) ? this.Rd(a) : (y9.u.ol.call(this, a), Wta(this))
            };
            $.g.update = function () {
                this.wf && (this.Fi(!0), this.i.clear(), (0, $.Re)(this.jd, function (a, b) {
                    var c = new Uta(a.text);
                    c.dh = a;
                    "max" == a.type && Y7(c, "max");
                    c.kv &= -17;
                    var d = this.i, e = d.Tb.length;
                    c && (w9(d, c, !1), $.Da(d.Tb, c, e));
                    b ? b == this.jd.length - 1 ? $.QD(c, 1) : $.QD(c, 3) : $.QD(c, 2);
                    this.hc(c, !0)
                }, this))
            };
            $.g.Gla = function (a) {
                return $.n(a) ? (this.P != a && (this.P = a, this.K && $.ef(this.K, $.iq.format.getMessage(this.P))), this) : this.P
            };
            $.g.Uca = function (a) {
                this.Rd(a)
            };
            $.g.Rd = function (a) {
                a = a || this.b;
                if (Xta(a)) {
                    this.target(a);
                    this.aa = !0;
                    var b = this.b.container() ? this.b.container().getStage() : null;
                    b && b.container() ? a = b.container() : a = null
                }
                b = this.b ? !(0, window.isNaN)(this.b.getSelectedRange().firstSelected) : !1;
                a && b ? (y9.u.Rd.call(this, a), (a = this.b ? this.b.XG() : null) && this.KK({firstKey: a.On, lastKey: a.wp, firstSelected: a.ps, lastSelected: a.rw})) : (a = (0, $.pa)(this.Uca, this, a || this.b), this.b.Ce("chartdraw", a, !1, this))
            };
            $.g.As = function (a) {
                y9.u.As.call(this, a);
                this.b && (a = this.b ? this.b.XG() : null) && this.KK({firstKey: a.On, lastKey: a.wp, firstSelected: a.ps, lastSelected: a.rw})
            };
            $.g.Gg = function () {
                y9.u.Gg.call(this);
                if (this.b) {
                    this.update();
                    if (this.aa) {
                        var a = ($.Yf(this.Ya()).height || 21) + 15, b = this.b.padding().bottom();
                        a > b && this.b.padding().bottom(b + a)
                    }
                    this.b.listen("selectedrangechange", this.KK, !1, this);
                    $.Fy(this).va(this, "action", this.Vca)
                }
            };
            $.g.Vca = function (a) {
                var b = a.target.dh, c = $.Ak($.LE, b.type, $.n(null) ? null : "max");
                "unit" == c ? this.b.selectRange(b.unit, b.count, b.anchor, !0) : "points" == c ? this.b.selectRange("points", b.count, b.anchor, !0) : "ytd" == c || "qtd" == c || "mtd" == c || "max" == c ? this.b.selectRange(c, !0) : (c = $.iq.format.parseDateTime(b.startDate), b = $.iq.format.parseDateTime(b.endDate), c && b && this.b.selectRange(c, b, !0));
                x9(this.i, a.target)
            };
            $.g.Bh = function () {
                y9.u.Bh.call(this)
            };
            $.g.R = function () {
                this.b.unlisten("selectedrangechange", this.KK, !1, this);
                this.b = null;
                this.i.clear();
                this.K && ($.Ye(this.K), this.K = null);
                y9.u.R.call(this)
            };
            var M9 = y9.prototype;
            $.E("anychart.ui.rangeSelector", function () {
                return new y9
            });
            M9.render = M9.Rd;
            M9.decorate = M9.As;
            M9.target = M9.target;
            M9.ranges = M9.Xy;
            M9.dispose = M9.ld;
            M9.getElement = M9.Ya;
            M9.zoomLabelText = M9.Gla;
            $.H(z9, $.Dy);
            $.g = z9.prototype;
            $.g.target = function (a) {
                this.b = a
            };
            $.g.Ac = function () {
                z9.u.Ac.call(this);
                Yta(this)
            };
            $.g.ol = function (a) {
                Zta(a) ? this.Rd(a) : (z9.u.ol.call(this, a), Yta(this))
            };
            $.g.Xca = function (a) {
                this.Rd(a)
            };
            $.g.Rd = function (a) {
                a = a || this.b;
                var b;
                (b = Zta(a)) || (b = (b = a) && $.D(b.getType) && "timeline" == b.getType());
                b || (b = (b = a) && $.D(b.getType) && "graph" == b.getType());
                b && (this.target(a), (b = this.b.container() ? this.b.container().getStage() : null) && b.container() ? a = b.container() : a = null);
                a ? z9.u.Rd.call(this, a) : (a = (0, $.pa)(this.Xca, this, a || this.b), this.b.listenOnce("chartdraw", a, !1, this))
            };
            $.g.Gg = function () {
                z9.u.Gg.call(this);
                this.b && $.Fy(this).va(this, "action", this.Yca)
            };
            $.g.Yca = function (a) {
                a = a.target.dh;
                this.b.El = 100;
                var b = this.b.getCurrentScene();
                switch (a.type) {
                    case "fitAll":
                        b.fitAll();
                        break;
                    case "zoomIn":
                        b.zoomIn();
                        break;
                    case "zoomOut":
                        b.zoomOut()
                }
            };
            $.g.Bh = function () {
                z9.u.Bh.call(this)
            };
            $.g.R = function () {
                this.b = null;
                this.i.ld();
                this.i = null;
                this.K.ld();
                this.K = null;
                this.P.ld();
                this.P = null;
                z9.u.R.call(this)
            };
            var N9 = z9.prototype;
            $.E("anychart.ui.zoom", function () {
                return new z9
            });
            N9.render = N9.Rd;
            N9.decorate = N9.As;
            N9.target = N9.target;
            N9.dispose = N9.ld;
        }).call(this, $)
    }
    $_ = window.anychart;
    $_.$ = $;
    $_._ = _
});