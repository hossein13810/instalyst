/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: graph, theme-graph
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
    if (!_.graph) {
        _.graph = 1;
        (function ($) {
            var eV = function (a, b, c) {
                    c = c || new $.gb(0, 0);
                    var d = a.x, e = a.y, f = Math.cos(b);
                    b = Math.sin(b);
                    a.x = (d - c.x) * f - (e - c.y) * b + c.x;
                    a.y = (d - c.x) * b + (e - c.y) * f + c.y
                }, fV = function () {
                    return new $.Kx(!0)
                }, gV = function (a) {
                    function b(a) {
                        a.kb(this)
                    }

                    $.V.call(this);
                    this.pa = a;
                    this.D = [];
                    this.mt = [];
                    this.f = {normal: {}, hovered: {}, selected: {}};
                    a = {};
                    $.T(a, [["fill", 0, 8192], ["stroke", 0, 8192], ["shape", 0, 8200], ["labels", 0, 4096], ["width", 0, 8200], ["height", 0, 8200]]);
                    this.ca = new $.oy(this, a, $.hm);
                    a = {};
                    $.T(a, [["fill", 0, 0], ["stroke", 0, 0], ["shape",
                        0, 0], ["labels", 0, 0], ["width", 0, 0], ["height", 0, 0]]);
                    this.za = new $.oy(this, a, $.Ao);
                    this.Ea = new $.oy(this, a, $.Bo);
                    this.ca.ta("labelsFactoryConstructor", fV);
                    this.za.ta("labelsFactoryConstructor", fV);
                    this.Ea.ta("labelsFactoryConstructor", fV);
                    this.ca.ta("labelsAfterInitCallback", $.uy);
                    this.za.ta("labelsAfterInitCallback", b);
                    this.Ea.ta("labelsAfterInitCallback", b)
                }, hV = function (a, b) {
                    var c = a.state(b), d = $.Co(c), e = b.id, f = b.dA, h = a.pa.group(b.groupId);
                    if (!a.f[d][e]) {
                        var k = a.$();
                        k.select(f);
                        f = k.get("labels");
                        k =
                            (k = k.get(d)) ? k.labels ? k.labels : {} : {};
                        f = f || {};
                        $.ra(f, k);
                        if (!$.Nc(f)) {
                            var l = new $.Kx(!0);
                            l.N(f)
                        }
                        k = a[d]().labels();
                        k.parent() || (0 == c ? k.parent(a.pa.labels()) : k.parent(a.ca.labels()));
                        if (f = h ? h[d]().labels() : void 0) f.parent() || (0 == c ? f.parent(a.pa.hf().labels()) : f.parent(h.Qa().labels())), k = f;
                        l && (k = l.parent(k));
                        k.jg(null);
                        $.K(k, a.de, a);
                        a.f[d][e] = k
                    }
                    return a.f[d][e]
                }, iV = function (a) {
                    (a = a.D.pop()) || (a = $.rk());
                    a.clear();
                    return a
                }, jV = function (a, b) {
                    b.Fk || (b.Fk = a.sk());
                    return b.Fk
                }, kV = function (a, b) {
                    var c = hV(a, b);
                    if (c.enabled()) {
                        var d = jV(a, b), e = a.Ic(b);
                        e = c.sk(e);
                        d.text(e);
                        e = c.flatten();
                        "auto" == c.g("anchor") && (e = $.Sc(e), e.position = b.cI ? b.cI : "center-bottom", e.anchor = b.bI ? b.bI : "center-top");
                        d.style(e);
                        $.Px(d);
                        d.Hj()
                    }
                }, Eha = function (a) {
                    for (var b in a.f) for (var c in a.f[b]) a.f[b][c].R();
                    a.f = {normal: {}, hovered: {}, selected: {}}
                }, lV = function (a) {
                    $.V.call(this);
                    this.ib = a;
                    this.Sc = new $.Cg
                }, mV = function (a, b) {
                    b && (a.xea = b);
                    return a.xea
                }, nV = function (a) {
                    $.V.call(this);
                    this.b = a;
                    $.T(this.ua, [["enabled", 0, 8192], ["size", 0, 8192],
                        ["position", 0, 8192]])
                }, Fha = function (a, b) {
                    var c = oV(a, b, "stroke");
                    if (!$.n(c)) {
                        c = a.b;
                        var d = mV(b);
                        c = c.gk(d)
                    }
                    return c
                }, Gha = function (a, b) {
                    var c = oV(a, b, "fill");
                    if (!$.n(c)) {
                        c = a.b;
                        var d = mV(b);
                        c = c.gk(d)
                    }
                    return c
                }, Hha = function (a, b) {
                    var c = oV(a, b, "size");
                    return $.n(c) ? c : a.g("size")
                }, oV = function (a, b, c) {
                    a = a.b.$();
                    a.select(mV(b).dA);
                    return (a.get("arrow") || {})[c]
                }, qV = function (a) {
                    gV.call(this, a);
                    this.pa = a;
                    this.type = pV;
                    this.i = null;
                    this.Sc = $.rk();
                    this.G = $.pk();
                    this.b = $.pk();
                    this.Kf || (this.wl = $.ng().Vo(), this.Kf = $.vk(this.wl));
                    this.K = this.Kf;
                    this.b.parent(this.G);
                    this.K.parent(this.G);
                    $.wl(this)
                }, Iha = function (a, b) {
                    var c = mV(b), d = a.pa.b[c.Je];
                    c = a.pa.b[c.from];
                    return $.ab($.cb(Math.atan2(d.position.y - c.position.y, d.position.x - c.position.x)))
                }, Jha = function (a, b) {
                    var c = a.gk(b);
                    return $.jp(c)
                }, Kha = function (a, b) {
                    var c = a.pa.b[b.from], d = a.pa.b[b.Je];
                    a.clear(b);
                    if (a.pa.gd().g("edges")) {
                        b.path = iV(a);
                        b.path.tag = a.ho(b);
                        b.Zp = a.state(b);
                        var e = Jha(a, b) + a.pa.gd().g("hoverGap");
                        b.vr = iV(a);
                        b.vr.tag = b.path.tag;
                        b.vr.fill($.cm);
                        b.vr.stroke($.cm,
                            e)
                    }
                    hV(a, b).g("enabled") && (b.Fk = a.sk());
                    if (a.PF().g("enabled")) {
                        e = a.PF();
                        var f = new lV(e);
                        f.O(e.O());
                        b.yC = f;
                        mV(b.yC, b)
                    }
                    b.path ? (b.path.moveTo(c.position.x, c.position.y), b.path.lineTo(d.position.x, d.position.y), b.path.parent(a.b), b.vr.moveTo(c.position.x, c.position.y), b.vr.lineTo(d.position.x, d.position.y), b.vr.parent(a.b), b.path.stroke(a.gk(b))) : (a.Sc.moveTo(c.position.x, c.position.y), a.Sc.lineTo(d.position.x, d.position.y), a.Sc.stroke(a.gk(b)));
                    b.yC && b.yC.W();
                    b.Fk && ($.Nx(b.Fk), kV(a, b), $.Sx(b.Fk, a.wl),
                        $.ay(b.Fk), a.tf(b))
                }, sV = function (a) {
                    var b = rV(a.pa);
                    a.b.suspend();
                    a.Sc.parent(a.b);
                    a.Sc.clear();
                    for (var c = rV(a.pa), d = 0; d < c.length; d++) a.clear(c[d]);
                    for (c = 0; c < b.length; c++) Kha(a, b[c]);
                    a.b.resume()
                }, tV = function (a) {
                    gV.call(this, a);
                    this.pa = a;
                    this.type = Lha
                }, uV = function () {
                    $.V.call(this);
                    $.T(this.ua, [["enabled", 0, 0], ["zoomOnMouseWheel", 0, 0, 0, function () {
                        this.g("zoomOnMouseWheel") && this.ta("scrollOnMouseWheel", !1)
                    }], ["scrollOnMouseWheel", 0, 0, 0, function () {
                        this.g("scrollOnMouseWheel") && this.ta("zoomOnMouseWheel",
                            !1)
                    }], ["nodes", 0, 0], ["edges", 0, 2], ["magnetize", 0, 0], ["hoverGap", 0, 2]])
                }, vV = function (a) {
                    $.V.call(this);
                    this.pa = a;
                    $.T(this.ua, [["type", 0, 1], ["iterationCount", 0, 1]])
                }, xV = function (a) {
                    gV.call(this, a);
                    this.pa = a;
                    this.type = wV;
                    this.G = $.pk();
                    this.b = $.pk();
                    this.Kf || (this.wl = $.ng().Vo(), this.Kf = $.vk(this.wl));
                    this.o = this.Kf;
                    this.b.parent(this.G);
                    this.o.parent(this.G);
                    $.wl(this)
                }, Mha = function (a, b) {
                    if ("auto" == hV(a, b).g("anchor") && "forced" == a.pa.we().g("type")) if (0 == a.pa.we().g("iterationCount")) {
                        var c = a.pa.na;
                        c = 360 - $.ab($.cb(Math.atan2(b.position.y - c.y, b.position.x - c.x)));
                        b.bI = 90 <= c && 270 >= c ? "right-center" : "left-center";
                        b.cI = "left-top"
                    } else 1 == b.ht.length ? (c = b.ht[0], c = a.pa.b[c], b.position.x > c.position.x ? (b.cI = "right-center", b.bI = "left-center") : (b.cI = "left-center", b.bI = "right-center")) : (b.cI = "center-bottom", b.bI = "center-top")
                }, Nha = function (a, b) {
                    var c = a.qB(b, "shape");
                    c = c == $.Ok(c) ? $.Dp(c) : a.Lja;
                    var d = a.zd(b), e = a.qd(b), f = b.position.x, h = b.position.y, k = b.path;
                    k.clear();
                    k.ia() && k.ia().removeAttribute("transform");
                    c(k, f, h, e / 2, d / 2)
                }, Oha = function (a, b) {
                    var c = a.Tm(b), d = a.gk(b);
                    b.path.fill(c);
                    b.path.stroke(d)
                }, Pha = function (a, b) {
                    if ($.n(b)) Nha(a, b), Oha(a, b); else for (var c = yV(a.pa), d = 0; d < c.length; d++) {
                        var e = a, f = c[d];
                        Nha(e, f);
                        Oha(e, f)
                    }
                }, Qha = function (a, b) {
                    var c = b.position.x, d = b.position.y, e = a.zd(b), f = a.qd(b);
                    b.path.setPosition(c - e / 2, d - f / 2);
                    hV(a, b).enabled() && (c = a.pa.O().Ja(), $.Sx(b.Fk, a.wl), b.Fk.Vd().removeAttribute("transform"), $.Zx(b.Fk, a.ek(b), c), $.Tx(b.Fk))
                }, zV = function (a) {
                    $.xx.call(this);
                    this.Ga("graph");
                    this.b =
                        {};
                    this.K = {};
                    this.$a = {};
                    this.ea = null;
                    this.Ka = [];
                    this.ba = null;
                    this.D = {};
                    this.o = {};
                    this.P = {};
                    this.mf = this.Nj = this.aa = null;
                    this.la = {nodes: null, edges: null};
                    this.Xg = new $.Cb;
                    this.sc = Rha(this);
                    this.xo = !1;
                    this.Ia = this.Ca = this.Pd = this.Za = 0;
                    this.wV = this.ud = !1;
                    this.data(a)
                }, BV = function (a) {
                    var b;
                    for (b in a.o) {
                        var c = a.o[b];
                        AV(a, c.id, wV, 0);
                        delete a.o[b]
                    }
                    for (b in a.P) c = a.P[b], AV(a, c.id, pV, 0), delete a.P[b]
                }, Sha = function (a) {
                    (0, $.Re)(a.Ka, function (a) {
                        AV(this, a, wV, 2)
                    }, a);
                    a.Ka.length = 0
                }, Tha = function (a) {
                    var b = null, c =
                        !1;
                    a.wc.va(a, "touchstart", function (a) {
                        c = !1;
                        b = $.Fj(function () {
                            this.wV || (this.xo = !1, this.Cs(a));
                            c = !0
                        }, 300, this)
                    });
                    a.wc.va(a, "touchend", function (a) {
                        $.Gj(b);
                        c || this.B2(a)
                    })
                }, Rha = function (a) {
                    var b;
                    return function () {
                        $.Gj(b);
                        b = $.Fj(a.lka, 500, a)
                    }
                }, Uha = function (a, b) {
                    var c = a.jp(), d = c.od;
                    return -c.We * d + b / d
                }, Vha = function (a, b) {
                    var c = a.jp(), d = c.od;
                    return -c.Id * d + b / d
                }, CV = function (a, b, c) {
                    b = a.b[b];
                    b.path.tag.Zp = c;
                    a.Hh.state(b, c);
                    Pha(a.Hh, b);
                    a = a.Hh;
                    hV(a, b).enabled() && !b.Fk && (b.Fk = a.sk());
                    b.Fk && ($.Nx(b.Fk), Mha(a, b), kV(a,
                        b), $.Sx(b.Fk, a.wl), $.ay(b.Fk), a.tf(b))
                }, Wha = function (a, b, c) {
                    a.qh.g("edges") && (b = a.D[b], b.path.tag.Zp = c, a.i.state(b, c), Kha(a.i, b))
                }, AV = function (a, b, c, d) {
                    switch (c) {
                        case pV:
                            if (a.qh.g("edges")) {
                                Wha(a, b, d);
                                b = a.D[b];
                                c = b.from;
                                c in a.o || CV(a, c, d);
                                var e = b.Je;
                                e in a.o || CV(a, e, d);
                                2 == d && (a.P[b.id] = {id: b.id, type: pV}, a.o[c] = {id: c, type: wV}, a.o[e] = {id: e, type: wV})
                            }
                            break;
                        case wV:
                            CV(a, b, d);
                            c = a.b[b].LC;
                            for (e = 0; e < c.length; e++) {
                                var f = c[e];
                                f in a.P || Wha(a, f, d);
                                2 == d && (a.P[f] = {id: f, type: pV})
                            }
                            2 == d && (a.o[b] = {id: b, type: wV})
                    }
                },
                Xha = function (a) {
                    for (var b = yV(a), c = [], d = [], e, f = 0, h = 0, k = b.length; h < k; h++) if (e = b[h], -1 == (0, $.za)(d, e)) {
                        var l = String(f);
                        a.$a[l] = [];
                        c.push(e.id);
                        for (c.push.apply(c, e.ht); e = c.pop();) {
                            var m = a.b[e];
                            -1 == (0, $.za)(d, m) && (c.push.apply(c, m.ht), d.push(m), a.$a[l].push(e), m.lY = String(f))
                        }
                        f++
                    }
                }, Yha = function (a) {
                    var b = a.la.edges;
                    if (0 < a.la.nodes.Gb()) {
                        var c = a.la.nodes.$();
                        for (c.reset(); c.advance();) {
                            var d = c.get("id");
                            if (null != d) if (d = String(d), a.b[d]) $.kl(902, null, [d], !0); else {
                                var e = a.b[d] = {};
                                e.index = c.ma();
                                e.id = d;
                                e.dA =
                                    c.ma();
                                e.LC = [];
                                e.ht = [];
                                e.Zp = 0;
                                e.position = {x: c.get("x"), y: c.get("y")};
                                d = c.get("group");
                                null != d && (a.K[d] || (a.K[d] = null), e.groupId = d)
                            } else $.kl(907, null, [], !0)
                        }
                        c.reset()
                    }
                    if (0 < b.Gb()) {
                        b = a.la.edges.$();
                        b.reset();
                        for (var f; b.advance();) {
                            f = b.get("from");
                            var h = b.get("to");
                            c = b.get("id");
                            null != c ? c = String(c) : c = pV + "_" + b.ma();
                            if (f != h) if (e = a.b[f], d = a.b[h], e && d) {
                                h = {};
                                h.index = b.ma();
                                h.id = c;
                                h.from = e.id;
                                h.Je = d.id;
                                h.dA = b.ma();
                                h.Zp = 0;
                                var k = !1;
                                for (f = 0; f < e.ht.length; f++) {
                                    var l = e.ht[f];
                                    if (l == e.id || l == d.id) {
                                        $.kl(900, null,
                                            [e.id, d.id], !0);
                                        k = !0;
                                        break
                                    }
                                }
                                if (!k) for (f = 0; f < d.ht.length; f++) if (l = d.ht[f], l == e.id || l == d.id) {
                                    $.kl(900, null, [d.id, e.id], !0);
                                    k = !0;
                                    break
                                }
                                k || (e.LC.push(h.id), d.LC.push(h.id), e.ht.push(d.id), d.ht.push(e.id), a.D[c] = h)
                            } else e || $.kl(903, null, [c, f], !0), d || $.kl(903, null, [c, h], !0); else $.kl(904, null, [c, h], !0)
                        }
                        300 < b.Gb() && a.gd().Ga({edges: !1});
                        b.reset()
                    }
                }, Zha = function (a) {
                    if (a.b) for (var b in a.b) a.Hh.clear(a.b[b]);
                    if (a.D) for (var c in a.D) a.i.clear(a.D[c]);
                    a.hf().aD();
                    a.bk().aD();
                    a.b = {};
                    a.D = {};
                    a.ea = null;
                    a.ba = null;
                    a.$a = {};
                    for (var d in a.o) delete a.o[d];
                    for (d in a.P) delete a.P[d]
                }, yV = function (a) {
                    if (!a.ea) {
                        a.ea = [];
                        for (var b in a.b) a.ea.push(a.b[b])
                    }
                    return a.ea
                }, rV = function (a) {
                    if (!a.ba) {
                        a.ba = [];
                        for (var b in a.D) a.ba.push(a.D[b])
                    }
                    return a.ba
                }, DV = function (a) {
                    a.G.oc(a.Xg.od, a.Xg.We, a.Xg.gf, a.Xg.Le, a.Xg.Nd, a.Xg.Id)
                }, $ha = function (a) {
                    return new zV(a)
                }, aia = {Eoa: "fixed", Joa: "forced"};
            $.H(gV, $.V);
            $.Kq(gV, "fill stroke labels shape height width".split(" "), "normal");
            $.g = gV.prototype;
            $.g.ra = 8192 | $.QE | $.RE | 36875;
            $.g.Kg = function () {
                this.ca.Ga(this.oa);
                $.W(this, "normal", this.ca);
                $.W(this, "hovered", this.za);
                $.W(this, "selected", this.Ea);
                this.ca.labels().parent(this.pa.labels());
                this.za.labels().parent(this.ca.labels());
                this.Ea.labels().parent(this.ca.labels())
            };
            $.g.Qa = function (a) {
                return $.n(a) ? (this.ca.N(a), this) : this.ca
            };
            $.g.lb = function (a) {
                return $.n(a) ? (this.za.N(a), this) : this.za
            };
            $.g.selected = function (a) {
                return $.n(a) ? (this.Ea.N(a), this) : this.Ea
            };
            $.g.gk = function (a) {
                var b;
                $.n(a) ? b = this.qB(a, "stroke") : b = this.ca.g("stroke");
                $.D(b) && (a = this.Ge(a), b = b.call(a, a));
                return b
            };
            $.g.Tm = function (a) {
                var b = this.qB(a, "fill");
                $.D(b) && (a = this.Ge(a), b = b.call(a, a));
                return b
            };
            $.g.Ma = function () {
                return this.type
            };
            $.g.state = function (a, b) {
                return null != b ? (a.Zp = b, a) : a.Zp || 0
            };
            $.g.de = function (a) {
                $.X(a, 32768) && this.wa($.QE);
                var b = this.pa, c = this.Ma(), d = $.X(a, 8), e = [];
                if ($.n(c)) switch (c) {
                    case wV:
                    case Lha:
                        e.push("nodes");
                        d && b.Hh.wa($.RE);
                        break;
                    case pV:
                        e.push("edges"), d && b.i.wa($.RE)
                }
                $.X(a, 1) && (e.push("labelsStyle"), e.push("labelsEnabled"));
                $.X(a, 2) && e.push("labelsEnabled");
                $.X(a, 32768) && (e.push("labelsEnabled"), e.push("labelsStyle"));
                $.X(a, 8) && (e.push("labelsBounds"), e.push("labelsEnabled"), e.push("labelsStyle"));
                $.sr(b, "graph", e, 1)
            };
            $.g.sk = function () {
                var a = this.mt.pop();
                a || (a = new $.Lx);
                return a
            };
            $.g.pU = function (a) {
                var b = {}, c = this.$();
                c.select(a.dA);
                this.i.lg(c);
                b.type = {value: this.Ma(), type: "string"};
                b.id = {value: a.id, type: "string"};
                return b
            };
            $.g.Ic = function (a) {
                this.i || (this.i = new $.Iw);
                a = this.pU(a);
                return $.rv(this.i, a)
            };
            $.g.ho = function (a) {
                var b = {};
                b.type = this.Ma();
                b.id = a.id;
                b.Zp = this.state(a);
                return b
            };
            $.g.Ge = function (a) {
                var b = this.Ma(), c = b == wV ? 1 : 0, d = this.pa.cc();
                return $.n(a) ? {index: a.index, type: b, id: a.id, sourceColor: d.nc(c)} : {sourceColor: d.nc(c)}
            };
            $.g.Ua = function (a) {
                this.gb || (this.gb = new $.zw(0), this.gb.df(), $.W(this, "tooltip", this.gb), this.gb.parent(this.pa.Ua()), this.gb.ya(this.pa));
                return $.n(a) ? (this.gb.N(a), this) : this.gb
            };
            $.g.U = function (a, b) {
                gV.u.U.call(this, a, b);
                "tooltip" in a && this.Ua().N(a.tooltip);
                this.ca.N(a);
                this.ca.N(a.normal);
                this.za.N(a.hovered);
                this.Ea.N(a.selected)
            };
            $.g.F = function () {
                var a = gV.u.F.call(this);
                var b = this.ca.F();
                var c = this.za.F();
                var d = this.Ea.F();
                if (!$.Nc(b)) {
                    var e = b.labels;
                    e && $.Nc(e) && delete b.labels;
                    $.Nc(b) || (a.normal = b)
                }
                $.Nc(c) || ((e = c.labels) && $.Nc(e) && delete c.labels, $.Nc(c) || (a.hovered = c));
                $.Nc(d) || ((e = d.labels) && $.Nc(e) && delete d.labels, $.Nc(d) || (a.selected = d));
                return a
            };
            $.g.clear = function (a) {
                var b = a.path;
                b && (b.tag = null, b.clear(), b.parent(null), this.D.push(b), a.path = null);
                if (b = a.Fk) a.Fk = null, $.Sx(b, null), this.mt.push(b)
            };
            $.g.aD = function () {
                Eha(this)
            };
            $.g.R = function () {
                var a;
                for (a = 0; a < this.mt.length; a++) this.mt[a].ld();
                for (a = 0; a < this.D.length; a++) this.D[a].R();
                this.mt.length = 0;
                this.D.length = 0;
                Eha(this)
            };
            var EV = gV.prototype;
            EV.normal = EV.Qa;
            EV.hovered = EV.lb;
            EV.selected = EV.selected;
            $.H(lV, $.V);
            lV.prototype.W = function () {
                var a = this.ib, b = oV(a, this, "enabled");
                if ($.n(b) ? b : a.g("enabled")) {
                    b = this.ib.b;
                    a = Iha(b, this);
                    var c = mV(this);
                    var d = b.PF();
                    var e = oV(d, this, "position");
                    d = 1 - $.Fo($.n(e) ? e : d.g("position"));
                    e = b.pa.b[c.Je];
                    c = b.pa.b[c.from];
                    var f = b.pa.hf().zd(e) + $.jp(b.pa.hf().gk(e)), h = b.pa.hf().zd(c) + $.jp(b.pa.hf().gk(c));
                    f = new $.gb(e.position.x + f / 2, e.position.y);
                    b = new $.gb(c.position.x + h / 2 + Hha(b.PF(), this), c.position.y);
                    eV(b, $.bb(a), new $.gb(c.position.x, c.position.y));
                    eV(f, $.bb(a - 180), new $.gb(e.position.x,
                        e.position.y));
                    d = new $.gb(f.x - (f.x - b.x) * d, f.y - (f.y - b.y) * d);
                    a = Iha(this.ib.b, this);
                    b = Hha(this.ib, this);
                    d = d.clone();
                    e = new $.gb(d.x - b, d.y - b / 2);
                    b = new $.gb(d.x - b, d.y + b / 2);
                    eV(e, $.bb(a), d);
                    eV(b, $.bb(a), d);
                    a = [d, e, b];
                    this.Sc.parent(this.O());
                    this.Sc.clear();
                    this.Sc.moveTo(a[0].x, a[0].y);
                    this.Sc.lineTo(a[1].x, a[1].y);
                    this.Sc.lineTo(a[2].x, a[2].y);
                    this.Sc.close();
                    this.Sc.fill(Gha(this.ib, this));
                    this.Sc.stroke(Fha(this.ib, this))
                } else this.Sc.parent(null)
            };
            lV.prototype.O = function (a) {
                $.n(a) && (this.Jc = a);
                return this.Jc
            };
            lV.prototype.R = function () {
                $.pd(this.Sc);
                this.Sc = null;
                lV.u.R.call(this)
            };
            $.H(nV, $.V);
            nV.prototype.ra = 8192;
            var FV = {};
            $.wq(FV, [[0, "enabled", $.Hq], [0, "size", $.Fq], [0, "position", $.Fo]]);
            $.U(nV, FV);
            nV.prototype.O = function (a) {
                a && (this.Jc = a);
                return this.Jc
            };
            nV.prototype.F = function () {
                var a = {};
                $.Xq(this, FV, a);
                return a
            };
            nV.prototype.U = function (a, b) {
                $.Pq(this, FV, a, b)
            };
            $.H(qV, gV);
            $.g = qV.prototype;
            $.g.Rw = function () {
                for (var a = [], b = rV(this.pa), c = 0; c < b.length; c++) {
                    var d = b[c], e = hV(this, d);
                    d = jV(this, d);
                    e.enabled() && a.push(d)
                }
                return a
            };
            $.g.ek = function (a) {
                var b = hV(this, a), c = this.pa.b, d = c[a.from], e = c[a.Je];
                c = e.position.x;
                var f = d.position.x;
                e = e.position.y;
                var h = d.position.y;
                c == f ? (d = Math.max(e, h), h = d + (Math.min(e, h) - d) / 2, e = c) : (d = Math.max(c, f), c = Math.min(c, f), f = Math.max(e, h), h = Math.min(e, h), d == c ? (e = d, h += (f - h) / 2) : (e = c + (d - c) / 2, h = (e - c) / (d - c) * (f - h) + h));
                c = this.pa.b[a.from];
                d = this.pa.b[a.Je];
                c = new $.gb(c.position.x, c.position.y);
                d = new $.gb(d.position.x, d.position.y);
                e = new $.gb(e, h);
                h = Jha(this, a);
                f = this.Jg(a);
                var k = h / 2;
                if (c.x > d.x) {
                    var l = d;
                    d =
                        c;
                    c = l
                }
                l = $.ab($.cb(Math.atan2(c.y - d.y, c.x - d.x)));
                eV(c, $.bb(-l), e);
                eV(d, $.bb(-l), e);
                c.y += k;
                d.y += k;
                eV(c, $.bb(l), e);
                eV(d, $.bb(l), e);
                e = $.nn(c.x, c.y, f, h);
                e = b.padding().Dj(e);
                a.C4 = c;
                a.angle = l ? l + 180 : -270;
                return e
            };
            $.g.tf = function (a) {
                var b = hV(this, a), c = jV(this, a);
                if (c) if (b.enabled()) {
                    var d = this.pa.O().Ja();
                    b = this.ek(a);
                    $.Sx(c, this.wl);
                    $.Zx(c, b, d);
                    $.Tx(c);
                    d = c.Vd();
                    c = +d.getAttribute("x") - b.left;
                    b = +d.getAttribute("y") - b.top;
                    a.ota = c;
                    a.pta = b;
                    b = a.angle + "," + a.C4.x + "," + a.C4.y;
                    a.Fk.Vd().setAttribute("transform", "rotate(" + b + ")")
                } else $.Sx(c, null), $.Nx(c)
            };
            $.g.vi = function () {
                var a = this.pa.D;
                for (b in a) {
                    var b = this.pa.D[b];
                    this.tf(b)
                }
            };
            $.g.Gx = function () {
                for (var a = rV(this.pa), b = 0; b < a.length; b++) kV(this, a[b])
            };
            $.g.wia = function () {
                this.wa(8192)
            };
            $.g.PF = function (a) {
                this.o || (this.o = new nV(this), $.W(this, "arrows", this.o), this.o.O(this.b), $.K(this.o, this.wia, this));
                return $.n(a) ? (this.o.N(a), this) : this.o
            };
            $.g.clear = function (a) {
                qV.u.clear.call(this, a);
                $.pd(a.yC);
                a.yC = null;
                a.vr && (a.vr.tag = null, a.vr.clear(), a.vr.parent(null), this.D.push(a.vr), a.vr = null)
            };
            $.g.qB = function (a, b) {
                var c = $.Co(a.Zp), d = this[c]().g(b), e;
                if ("fill" != b && "stroke" != b) {
                    var f = this.normal().nd(b), h = this[c]().nd(b);
                    $.n(h) ? d = h : $.n(f) && (d = f)
                }
                f = this.$();
                f.select(a.dA);
                (h = f.get(b)) && (e = h);
                (h = f.get(c)) && h[b] && (e = h[b]);
                return $.n(e) ? e : d
            };
            $.g.Jg = function (a) {
                var b = this.pa.b[a.from];
                a = this.pa.b[a.Je];
                return Math.sqrt(Math.pow(a.position.x - b.position.x, 2) + Math.pow(a.position.y - b.position.y, 2))
            };
            $.g.aD = function () {
                qV.u.aD.call(this);
                this.sd = null
            };
            $.g.$ = function () {
                return this.sd || (this.sd = this.pa.data().edges.$())
            };
            $.g.$T = function () {
                return this.G
            };
            $.g.F = function () {
                var a = qV.u.F.call(this), b = this.Ua().F();
                $.Nc(b) || (a.tooltip = b);
                return a
            };
            $.g.R = function () {
                for (var a = rV(this.pa), b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.clear(c);
                    $.pd(c.yC)
                }
                qV.u.R.call(this)
            };
            var GV = qV.prototype;
            GV.arrows = GV.PF;
            GV.tooltip = GV.Ua;
            $.H(tV, gV);
            tV.prototype.Kg = function () {
                this.Qa().labels().parent(this.pa.hf().labels());
                this.lb().labels().parent(this.Qa().labels());
                this.selected().labels().parent(this.Qa().labels())
            };
            $.H(uV, $.V);
            uV.prototype.ra = 2;
            var HV = {};
            $.wq(HV, [[0, "enabled", $.Hq], [0, "zoomOnMouseWheel", $.Hq], [0, "scrollOnMouseWheel", $.Hq], [0, "magnetize", $.Hq], [0, "nodes", $.Hq], [0, "edges", $.Hq], [0, "hoverGap", $.Fq]]);
            $.U(uV, HV);
            uV.prototype.Ie = function (a, b) {
                return $.da(b) ? (this.enabled(b), !0) : !1
            };
            uV.prototype.U = function (a, b) {
                uV.u.U.call(this, a, b);
                $.Pq(this, HV, a, b)
            };
            uV.prototype.F = function () {
                var a = uV.u.F.call(this);
                $.Xq(this, HV, a);
                return a
            };
            $.H(vV, $.V);
            var IV = function () {
                var a = {};
                $.wq(a, [[0, "type", function (a) {
                    return $.Ak(aia, a, "forced")
                }], [0, "iterationCount", $.Fq]]);
                return a
            }();
            $.U(vV, IV);
            vV.prototype.ra = 1;
            vV.prototype.Ie = function (a, b) {
                return $.z(b) ? (this.type(b), !0) : !1
            };
            vV.prototype.U = function (a, b) {
                vV.u.U.call(this, a, b);
                $.Pq(this, IV, a, b)
            };
            vV.prototype.F = function () {
                var a = vV.u.F.call(this);
                $.Xq(this, IV, a);
                return a
            };
            $.H(xV, gV);
            $.g = xV.prototype;
            $.g.ra = gV.prototype.ra | 1;
            $.g.aD = function () {
                xV.u.aD.call(this);
                this.sd = null
            };
            $.g.$ = function () {
                return this.sd || (this.sd = this.pa.data().nodes.$())
            };
            $.g.Rw = function () {
                for (var a = [], b = yV(this.pa), c = 0; c < b.length; c++) {
                    var d = b[c], e = hV(this, d);
                    d = jV(this, d);
                    e.enabled() && a.push(d)
                }
                return a
            };
            $.g.qB = function (a, b) {
                var c = $.Co(a.Zp), d = $.Co(0);
                var e = this[d]()[b]();
                var f = this[c]()[b]();
                e = $.n(f) ? f : e;
                if ("fill" != b && "stroke" != b) {
                    f = this[d]().nd(b);
                    var h = this[c]().nd(b);
                    $.n(h) ? e = h : $.n(f) && (e = f)
                }
                f = this.pa.group(a.groupId);
                $.n(f) && (d = f[d]().nd(b), f = f[c]().nd(b), null != f ? e = f : null != d && (e = d));
                f = this.$();
                f.select(a.dA);
                d = f.get(b);
                e = $.n(d) ? d : e;
                return e = (d = f.get(c)) && $.n(d[b]) ? d[b] : e
            };
            $.g.pU = function (a) {
                var b = xV.u.pU.call(this, a), c = (0, $.Wa)(a.LC, function (b) {
                    var c = this.pa.D[b];
                    b = c.from;
                    c = c.Je;
                    return b != a.id ? b : c
                }, this);
                b.siblings = {value: c, type: ""};
                return b
            };
            $.g.Gx = function () {
                for (var a = yV(this.pa), b = 0; b < a.length; b++) {
                    var c = a[b];
                    Mha(this, c);
                    kV(this, c)
                }
            };
            $.g.ek = function (a) {
                var b = hV(this, a), c = a.position.x, d = a.position.y, e = this.qd(a), f = this.zd(a);
                c -= f / 2;
                var h = d - e / 2, k = this.pa.na;
                d = b.padding();
                "auto" == b.g("anchor") && "forced" == this.pa.we().g("type") && 0 == this.pa.we().g("iterationCount") && (a = new $.gb(a.position.x, a.position.y), c = $.jb(k, a), b = (c + Math.max(f, e) / 2) / c + .025, a.scale(b), c = this.pa.na.clone(), c.scale(b), b = c.y - this.pa.na.y, c = a.x -= c.x - this.pa.na.x, h = a.y -= b);
                return d.Dj($.nn(c, h, f, e))
            };
            $.g.tf = function (a) {
                var b = jV(this, a);
                if (hV(this, a).enabled()) {
                    var c = this.ek(a), d = this.pa.O().Ja();
                    $.Sx(b, this.wl);
                    $.Zx(b, c, d);
                    $.Tx(b);
                    a.Fk && (d = hV(this, a), b = a.Fk.Vd(), b.removeAttribute("transform"), d.g("autoRotate") && (d = this.pa.na, a = $.ab($.cb(Math.atan2(a.position.y - d.y, a.position.x - d.x))), 90 <= a && 270 >= a && (a += 180), a = $.ab(a), b.setAttribute("transform", "rotate(" + a + ", " + c.left + ", " + (c.top + c.height / 2) + ")")))
                } else $.Sx(b, null), $.Nx(b)
            };
            $.g.vi = function () {
                for (var a = yV(this.pa), b = 0; b < a.length; b++) this.tf(a[b])
            };
            $.g.qd = function (a) {
                a = $.N(this.qB(a, "height"));
                return (0, window.isNaN)(a) ? this.g("height") : a
            };
            $.g.zd = function (a) {
                var b = this.qB(a, "shape");
                if (b === $.Ok(b)) return this.qd(a);
                a = $.N(this.qB(a, "width"));
                return (0, window.isNaN)(a) ? this.g("width") : a
            };
            $.g.Lja = function (a, b, c, d, e) {
                var f = b - e, h = c - d;
                b += e;
                c += d;
                a.moveTo(f, h).lineTo(b, h).lineTo(b, c).lineTo(f, c).lineTo(f, h).close();
                return a
            };
            $.g.VL = function (a) {
                a.path || (a.path = iV(this));
                var b = a.path;
                b.tag = this.ho(a);
                a.Zp = this.state(a);
                a.path = b;
                b.parent(this.b)
            };
            $.g.$T = function () {
                return this.G
            };
            $.g.F = function () {
                var a = xV.u.F.call(this), b = this.Ua().F();
                $.Nc(b) || (a.tooltip = b);
                return a
            };
            $.g.R = function () {
                for (var a = yV(this.pa), b = 0; b < a.length; b++) this.clear(a[b]);
                xV.u.R.call(this)
            };
            var bia = xV.prototype;
            bia.tooltip = bia.Ua;
            $.H(zV, $.xx);
            $.Lz(zV, "graph", "appearance data edges labelsBounds labelsEnabled labelsStyle layout nodes rotate selection transform".split(" "));
            var wV = "node", Lha = "group", pV = "edge";
            $.g = zV.prototype;
            $.g.ra = $.xx.prototype.ra | 8194;
            $.g.sa = $.xx.prototype.sa | 16;
            $.g.Ma = function () {
                return "graph"
            };
            $.g.yj = function () {
                return !this.la.nodes || !this.la.nodes.Gb()
            };
            $.g.Ue = function () {
                return []
            };
            $.g.ss = function () {
                return [this]
            };
            $.g.Zj = function () {
            };
            $.g.Tx = function (a, b) {
                return a == wV ? this.Hh.Ic(this.b[b]) : this.i.Ic(this.D[b])
            };
            $.g.Cs = function (a) {
                if (!this.xo) {
                    var b = a.domTarget.tag;
                    if (b) {
                        var c = b.id, d = b.type;
                        if (!$.zd && a.ctrlKey || $.zd && a.metaKey) {
                            if (2 == b.Zp) {
                                if (d == wV) for (AV(this, c, wV, 0), delete this.o[c], b = this.b[c], a = 0; a < b.LC.length; a++) c = b.LC[a], AV(this, c, pV, 0), delete this.o[c]; else a = this.D[c], AV(this, a.from, wV, 0), AV(this, a.Je, wV, 0), AV(this, a.id, pV, 0), delete this.o[a.from], delete this.o[a.Je], delete this.P[a.id];
                                return
                            }
                            AV(this, b.id, b.type, 2)
                        } else BV(this);
                        AV(this, b.id, b.type, 2)
                    } else BV(this)
                }
                this.xo = !1
            };
            $.g.oo = function (a) {
                if (!this.mf || !this.mf.kp) {
                    var b = a.domTarget.tag, c;
                    if (b) {
                        var d = b.type, e = b.id;
                        b = b.Zp;
                        this.Ua().Kc();
                        2 != b && AV(this, e, d, 1);
                        d == wV ? c = this.Hh.Ua() : d == pV && this.qh.g("edges") && (c = this.i.Ua());
                        c && $.Rw(c, a.clientX, a.clientY, this.Tx(d, e))
                    } else this.Ua().Kc()
                }
            };
            $.g.B2 = function (a) {
                if (!this.mf || !this.mf.kp) {
                    var b = a.domTarget.tag, c;
                    if (b) {
                        var d = b.type, e = b.id;
                        this.Ua().Kc();
                        b.type == wV ? c = this.Hh.Ua() : b.type == pV && this.qh.g("edges") && (c = this.i.Ua());
                        c && $.Rw(c, a.clientX, a.clientY, this.Tx(d, e))
                    } else this.Ua().Kc()
                }
            };
            $.g.Yaa = function (a) {
                a.target.tag || this.oh(a)
            };
            $.g.lka = function () {
                this.fb.parent(this.sb)
            };
            $.g.Zaa = function (a) {
                if (!this.mf || !this.mf.kp) {
                    var b = this.gd();
                    if (b.g("enabled")) {
                        var c = a.deltaY;
                        if (b.g("zoomOnMouseWheel")) {
                            var d = $.XC && 6 >= Math.abs(a.deltaY) ? 0 < a.deltaY ? .8 : 0 > a.deltaY ? 1.2 : 1 : $.Za(1 - a.deltaY / 120, .7, 2);
                            var e = this.jp().od * d;
                            if (.4 < e && 100 > e) {
                                e = yV(this).length + rV(this).length;
                                this.qh.g("edges") && 500 < e && (this.fb.parent(null), this.sc());
                                e = a.clientX;
                                var f = a.clientY;
                                $.Db(this.Xg, d, d);
                                $.Fb(this.Xg, (e || 0) * (1 - d), (f || 0) * (1 - d));
                                DV(this)
                            }
                        }
                        b.g("scrollOnMouseWheel") && (this.Xg.translate(0, c), DV(this));
                        a.preventDefault()
                    }
                }
            };
            $.g.jp = function () {
                return this.Xg
            };
            $.g.hg = function (a) {
                this.mf && this.mf.kp && this.gd().g("enabled") && this.gd().g("nodes") || (a = a.domTarget.tag) && 2 != a.Zp && AV(this, a.id, a.type, 0)
            };
            $.g.ix = function (a) {
                var b = {};
                $.Uc(b, $.Tl($.uG["select-marquee"]), a);
                return b
            };
            $.g.UO = function (a) {
                var b = this.jp();
                a = new $.I(a.left, a.top, a.width, a.height);
                for (var c = new $.gb(0, 0), d = yV(this), e = 0; e < d.length; e++) {
                    var f = d[e];
                    c.x = f.position.x * b.od + b.Nd;
                    c.y = f.position.y * b.od + b.Id;
                    $.rb(a, c) || AV(this, f.id, wV, 2)
                }
                this.xo = !0
            };
            $.g.select = function (a) {
                $.n(a) ? $.A(a) || (a = [a]) : a = $.Ic(this.b);
                (0, $.Re)(a, function (a) {
                    a in this.b && this.Ka.push(a)
                }, this);
                (0, $.Re)($.Ic(this.o), function (a) {
                    $.Aa(this.Ka, a) || this.Ka.push(a)
                }, this);
                $.rr(this, "graph", "selection", 1)
            };
            $.g.ie = function (a) {
                $.n(a) ? $.A(a) || (a = [a]) : a = $.Ic(this.o);
                (0, $.Re)($.Ic(this.o), function (b) {
                    $.Aa(a, b) || this.Ka.push(b)
                }, this);
                $.rr(this, "graph", "selection", 1)
            };
            $.g.DW = function (a) {
                $.X(a, 8192) && $.sr(this, "graph", ["edges", "appearance"], 1)
            };
            $.g.Lia = function (a) {
                $.X(a, 1) && (this.B(4), $.sr(this, "graph", ["appearance", "labelsStyle", "labelsBounds", "labelsEnabled", "layout"], 1))
            };
            $.g.Jia = function (a) {
                $.X(a, 2) && this.B(4, 1)
            };
            $.g.dd = function () {
                Zha(this);
                Yha(this);
                Xha(this);
                this.B(4);
                $.sr(this, "graph", "data appearance labelsStyle labelsBounds labelsEnabled layout".split(" "), 1)
            };
            $.g.cc = function (a) {
                if ($.J(a, $.Ps)) return this.Hc($.Ps, a), this;
                if ($.J(a, $.Ms)) return this.Hc($.Ms, a), this;
                $.B(a) && "range" == a.type ? this.Hc($.Ps) : ($.B(a) || null == this.Fa) && this.Hc($.Ms);
                return $.n(a) ? (this.Fa.N(a), this) : this.Fa
            };
            $.g.Hc = function (a, b) {
                if ($.J(this.Fa, a)) b && this.Fa.N(b); else {
                    var c = !!this.Fa;
                    $.pd(this.Fa);
                    this.Fa = new a;
                    $.W(this, "palette", this.Fa);
                    this.Fa.Gp();
                    b && this.Fa.N(b);
                    $.K(this.Fa, this.Of, this);
                    c && $.rr(this, "sankey", "appearance", 1)
                }
            };
            $.g.Of = function (a) {
                $.X(a, 2) && $.rr(this, "sankey", "appearance", 1)
            };
            $.g.hf = function (a) {
                this.Hh || (this.Hh = new xV(this), $.W(this, "nodes", this.Hh), this.Hh.Kg(), $.K(this.Hh, this.DW, this));
                return a ? (this.Hh.N(a), this) : this.Hh
            };
            $.g.gd = function (a) {
                this.qh || (this.qh = new uV, $.W(this, "interactivity", this.qh), $.K(this.qh, this.Jia, this));
                return $.n(a) ? (this.qh.N(a), this) : this.qh
            };
            $.g.group = function (a, b) {
                if (null != a) {
                    if ($.n(this.K[a])) {
                        if (null === this.K[a]) {
                            var c = new tV(this);
                            c.Kg();
                            $.K(c, this.DW, this);
                            this.K[a] = c
                        }
                        return b ? (this.K[a].N(b), this) : this.K[a]
                    }
                    $.kl(905, null, [a], !0)
                }
            };
            $.g.we = function (a) {
                this.f || (this.f = new vV(this), $.W(this, "layout", this.f), $.K(this.f, this.Lia, this));
                return $.n(a) ? (this.f.N(a), this) : this.f
            };
            $.g.bk = function (a) {
                this.i || (this.i = new qV(this), $.W(this, "edges", this.i), this.i.Kg(), $.K(this.i, this.DW, this));
                return $.n(a) ? (this.i.N(a), this) : this.i
            };
            $.g.labels = function (a) {
                this.Da || (this.Da = new $.Kx, $.W(this, "labels", this.Da));
                return $.n(a) ? (this.Da.N(a), this) : this.Da
            };
            $.g.wr = function () {
                if (!this.mf) {
                    this.mf = new $.cg(this.Aa.ia(), this.Aa);
                    var a, b, c, d, e = null, f, h, k, l, m = [], p, q, r;
                    this.mf.va("start", function (h) {
                        p = this.gd().g("enabled");
                        q = this.gd().g("nodes");
                        r = yV(this).length + rV(this).length;
                        if (p) if (e = h.CC.target, f = e.tag, $.zk() && this.Ua().Kc(), f && f.type == wV) {
                            if (q) {
                                var k = f.id;
                                if ($.Nc(this.o)) l = this.b[k]; else if (k in this.o) for (var t in this.o) m.push(this.b[t]); else (!$.zd && !h.CC.ctrlKey || $.zd && !h.CC.metaKey) && BV(this), l = this.b[k];
                                a = Uha(this, h.clientX);
                                b = Vha(this, h.clientY)
                            }
                        } else BV(this),
                            a = h.clientX, b = h.clientY;
                        c = h.clientX;
                        d = h.clientY
                    }, !1, this);
                    this.mf.va("drag", function (c) {
                            if (p) {
                                this.wV = !0;
                                this.Ua().Kc();
                                var d = this.jp().od, e = c.clientX;
                                c = c.clientY;
                                if (f && f.type == wV) {
                                    if (q) {
                                        e = Uha(this, e);
                                        c = Vha(this, c);
                                        h = e - a;
                                        k = c - b;
                                        a = e;
                                        b = c;
                                        m.length || m.push(l);
                                        for (d = 0; d < m.length; d++) {
                                            c = e = m[d];
                                            var t = h, x = k;
                                            c.position.x += t;
                                            c.position.y += x;
                                            c.position.lo = t;
                                            c.position.sm = x;
                                            Qha(this.Hh, e)
                                        }
                                        sV(this.i)
                                    }
                                } else h = (e - a) / d, k = (c - b) / d, a = e, b = c, this.Xg.translate(h, k), DV(this);
                                this.qh.g("edges") && 500 < r && this.fb.parent(null)
                            }
                        },
                        !1, this);
                    this.mf.va("end", function (a) {
                        if (p) {
                            this.wV = !1;
                            if (f && f.type == wV && q && !m.length) {
                                if (this.gd().g("magnetize")) {
                                    var b = this.Hh, e = l, h = b.pa.$a[e.lY], k;
                                    var t = k = window.Infinity;
                                    for (var C = e.position.x, G = e.position.y, F = 0; F < h.length; F++) if (e.id != h[F]) {
                                        var M = b.pa.b[h[F]].position;
                                        if (e.position.x > M.x - 5 && e.position.x < M.x + 5) {
                                            var O = e.position.x - M.x;
                                            O < t && (t = O, C = M.x)
                                        }
                                        e.position.y > M.y - 5 && e.position.y < M.y + 5 && (O = e.position.y - M.y, O < k && (k = O, G = M.y))
                                    }
                                    e.position.x = C;
                                    e.position.y = G;
                                    Qha(this.Hh, l)
                                }
                                sV(this.i)
                            }
                            m.length =
                                0
                        }
                        if (a.clientX != c || d != a.clientY) this.qh.g("edges") && 500 < r && this.sc(), this.xo = !0
                    }, !1, this)
                }
            };
            $.g.$aa = function () {
                if (!this.aa) {
                    var a = this.Aa.ia();
                    this.aa = new $.Hx(a, !1);
                    this.aa.va("mousewheel", this.Zaa, !1, this)
                }
            };
            $.g.Ph = function (a) {
                if (!this.pf()) {
                    this.Aa || (this.Aa = this.Oa.Bd(), this.hf(), this.bk(), this.we(), this.gd(), this.G = $.pk(), this.gc = $.uk(a), this.Uc = $.pk(), this.Nj = $.nk(a.left, a.top, a.width, a.height), this.Nj.fill($.cm), this.Nj.stroke(null), this.Nj.parent(this.Uc), this.Uc.parent(this.Aa), this.wc.Ce(this, "chartdraw", this.wr), this.wc.Ce(this, "chartdraw", this.$aa), $.zk() ? $.uu(this, this, this.oo, this.hg, this.Cs, this.B2, null, null) : (this.wc.fc(this.Oa, "contextmenu", this.oh), this.wc.va(this.Oa, "contextmenu", this.Yaa),
                        Tha(this)), this.Ub = $.pk(), this.Gd = $.pk(), this.sb = $.pk(), this.fb = this.i.$T(), this.pe = this.Hh.$T(), this.fb.parent(this.sb), this.pe.parent(this.Gd), this.sb.parent(this.Ub), this.Gd.parent(this.Ub), this.Ub.parent(this.G), this.Aa.zIndex(30), this.Aa.clip(this.gc), this.G.parent(this.Aa), this.Hh.wa($.QE), this.i.wa($.QE));
                    if ($.vr(this, "graph", "layout")) {
                        var b = this.we();
                        switch (b.g("type")) {
                            case "forced":
                                var c = yV(b.pa), d = b.pa.$a, e;
                                var f = c.length;
                                var h = 0;
                                var k = 2 * Math.PI / f;
                                for (e = 0; e < f; e++) {
                                    var l = c[e];
                                    l.velocityX =
                                        0;
                                    l.velocityY = 0;
                                    l.position.x = 10 * Math.cos(h);
                                    l.position.y = 10 * Math.sin(h);
                                    h += k
                                }
                                k = b.g("iterationCount");
                                for (var m = 0; m < k; m++) {
                                    e = 0;
                                    for (f = c.length; e < f; e++) for (l = c[e], l.lX = 0, h = l.mX = 0; h < f; h++) {
                                        var p = c[h];
                                        if (l != p && l.lY == p.lY) {
                                            var q = void 0, r = void 0, t = l.position.x - p.position.x;
                                            p = l.position.y - p.position.y;
                                            var u = Math.sqrt(t * t + p * p);
                                            0 != u && (r = t / u / u * .9, q = p / u / u * .9);
                                            p = [r, q];
                                            l.lX += p[0];
                                            l.mX += p[1]
                                        }
                                    }
                                    e = 0;
                                    for (f = c.length; e < f; e++) for (l = c[e], l.JR = 0, l.KR = 0, q = l.ht, h = 0; h < q.length; h++) {
                                        p = b.pa.b[q[h]];
                                        r = u = void 0;
                                        t = l.position.x -
                                            p.position.x;
                                        p = l.position.y - p.position.y;
                                        var v = Math.sqrt(t * t + p * p);
                                        0 != v && (u = v * v / 50, r = -t / v * u * 10, u = -p / v * u * 10);
                                        p = [r, u];
                                        l.JR += p[0];
                                        l.KR += p[1]
                                    }
                                    e = 0;
                                    for (f = c.length; e < f; e++) l = c[e], l.velocityX += l.lX + l.JR, l.velocityY += l.mX + l.KR, l.velocityX = $.Za(l.velocityX, -.12, .12), l.velocityY = $.Za(l.velocityY, -.12, .12), l.position.x += l.velocityX, l.position.y += l.velocityY
                                }
                                if (0 < k && (m = $.Ic(d), 1 < m.length)) {
                                    c = [];
                                    for (e = 0; e < m.length; e++) {
                                        q = m[e];
                                        t = d[q];
                                        p = window.Infinity;
                                        r = -window.Infinity;
                                        k = window.Infinity;
                                        u = -window.Infinity;
                                        f = t.length;
                                        if (1 == f) l = b.pa.b[t[0]], p = l.position.y - .5, k = l.position.x - .5, r = l.position.y + .5, u = l.position.x + .5; else {
                                            for (h = 0; h < f; h++) l = b.pa.b[t[h]], p = Math.min(p, l.position.y), r = Math.max(r, l.position.y), u = Math.max(u, l.position.x), k = Math.min(k, l.position.x);
                                            k -= .5;
                                            u += .5;
                                            p -= .5;
                                            r += .5
                                        }
                                        l = Math.abs(k - u);
                                        c.push({id: q, aJ: new $.I(k, p, l, Math.abs(r - p))})
                                    }
                                    for (e = f = 0; e < c.length; e++) for (l = c[e].aJ, k = (new $.gb(l.left, l.top)).Eh(), l = c[e].aJ.zd(), c[e].lo = f - k, f += l + .5, c[e].sm = -$.sb(c[e].aJ).zs(), k = d[c[e].id], h = 0; h < k.length; h++) l = b.pa.b[k[h]],
                                        l.position.x += c[e].lo, l.position.y += c[e].sm
                                }
                                break;
                            case "fixed":
                                for (d = yV(b.pa), e = 0; e < d.length; e++) l = d[e], h = b.pa.data().nodes.En(l.dA), f = h.x, h = h.y, null == f && (f = 0, $.kl(901, null, [l.id, "x"], !0)), null == h && (h = 0, $.kl(901, null, [l.id, "y"], !0)), l.position.x = f, l.position.y = h
                        }
                        $.tr(this, "graph", "layout")
                    }
                    if ($.vr(this, "graph", "rotate")) {
                        b = yV(this);
                        d = $.sb(this.kg);
                        for (e = 0; e < b.length; e++) l = b[e], f = new $.gb(l.position.x, l.position.y), eV(f, $.bb(this.Pd), d), l.position.x = f.Eh(), l.position.y = f.zs();
                        $.tr(this, "graph", "rotate")
                    }
                    if (this.J(4)) {
                        b =
                            this.gc.shape();
                        b.Go(a.left);
                        b.Ho(a.top);
                        b.Fo(a.width);
                        b.Eo(a.height);
                        this.Nj.Go(a.left);
                        this.Nj.Ho(a.top);
                        this.Nj.Fo(a.width);
                        this.Nj.Eo(a.height);
                        if (this.ud || "forced" === this.we().g("type")) {
                            l = yV(this);
                            d = a = window.Infinity;
                            b = e = -window.Infinity;
                            f = l.length;
                            for (h = 0; h < f; h++) c = l[h].position.x, k = l[h].position.y, a = Math.min(k, a), e = Math.max(c, e), b = Math.max(k, b), d = Math.min(c, d);
                            b += -a;
                            e += -d;
                            m = Math.min((this.kg.width - .2 * this.kg.width) / e, (this.kg.height - .2 * this.kg.height) / b);
                            m = (0, window.isFinite)(m) ? m : 1;
                            for (h =
                                     0; h < f; h++) c = l[h].position.x, k = l[h].position.y, c += -d, k += -a, c *= m, k *= m, l[h].position.x = c, l[h].position.y = k;
                            b *= m;
                            e *= m;
                            d = a = 0;
                            f = $.sb(this.kg).Eh();
                            l = $.sb(this.kg).zs();
                            d = (e - d) / 2 + d;
                            a = (b - a) / 2 + a;
                            this.na = new $.gb(d, a);
                            b = f - d;
                            a = l - a;
                            (0, window.isFinite)(b) || (b = 0);
                            (0, window.isFinite)(a) || (a = 0);
                            this.Xg.translate(-this.Ca, -this.Ia);
                            this.Ca = b;
                            this.Ia = a;
                            this.Xg.translate(b, a)
                        } else {
                            l = yV(this);
                            f = l.length;
                            d = a = window.Infinity;
                            b = e = -window.Infinity;
                            for (h = 0; h < f; h++) c = l[h].position.x, k = l[h].position.y, a = Math.min(k, a), e = Math.max(c,
                                e), b = Math.max(k, b), d = Math.min(c, d);
                            f = $.sb(this.kg).Eh();
                            l = $.sb(this.kg).zs();
                            d = f - ((e - d) / 2 + d);
                            a = l - ((b - a) / 2 + a);
                            this.Xg.translate(-this.Ca, -this.Ia);
                            (0, window.isFinite)(d) || (d = 0);
                            (0, window.isFinite)(a) || (a = 0);
                            this.Ca = d;
                            this.Ia = a;
                            this.Xg.translate(d, a)
                        }
                        $.rr(this, "graph", "transform");
                        $.sr(this, "graph", "edges nodes labelsStyle labelsEnabled labelsBounds appearance".split(" "));
                        this.I(4)
                    }
                    $.vr(this, "graph", "edges") && (sV(this.i), $.vr(this, "graph", "labelsStyle") && this.i.Gx(), $.vr(this, "graph", "labelsBounds") &&
                    $.vl.measure(), $.vr(this, "graph", "labelsEnabled") && this.i.vi(), $.tr(this, "graph", "edges"));
                    if ($.vr(this, "graph", "nodes")) {
                        a = this.Hh;
                        b = yV(a.pa);
                        for (d = 0; d < b.length; d++) a.VL(b[d]);
                        $.vr(this, "graph", "appearance") && Pha(this.Hh);
                        $.vr(this, "graph", "labelsStyle") && this.Hh.Gx();
                        $.vr(this, "graph", "labelsBounds") && $.vl.measure();
                        $.vr(this, "graph", "labelsEnabled") && this.Hh.vi();
                        $.tr(this, "graph", "edges")
                    }
                    $.vr(this, "graph", "selection") && (BV(this), Sha(this), $.tr(this, "graph", "selection"));
                    $.ur(this, "graph", ["appearance",
                        "labelsStyle", "labelsBounds", "labelsEnabled"]);
                    $.vr(this, "graph", "transform") && (DV(this), $.tr(this, "graph", "transform"))
                }
            };
            $.g.zoom = function (a, b, c) {
                var d = this.jp();
                return $.n(a) ? (null === a ? this.DT() : ($.ea(b) || this.kg && (b = this.kg.left + this.kg.width / 2), $.ea(c) || this.kg && (c = this.kg.top + this.kg.height / 2), $.Db(this.Xg, a, a), $.Fb(this.Xg, (b || 0) * (1 - a), (c || 0) * (1 - a)), $.rr(this, "graph", "transform", 1)), this) : d.od
            };
            $.g.Dh = function () {
                return this
            };
            $.g.Qm = function () {
                this.DT()
            };
            $.g.Ur = function () {
                this.zoom(1.3)
            };
            $.g.Vr = function () {
                this.zoom(1 / 1.3)
            };
            $.g.move = function (a, b) {
                if ($.n(a)) return null === a && (a = -this.Xg.Nd, b = -this.Xg.Id), this.Xg.translate(a ? a : 0, b ? b : 0), $.rr(this, "graph", "transform", 1), this;
                var c = this.jp();
                return [c.Nd, c.Id]
            };
            $.g.DT = function (a) {
                $.da(a) && (this.ud = a, this.B(4));
                this.Xg.setTransform(1, 0, 0, 1, 0, 0);
                this.Xg.translate(this.Ca, this.Ia);
                $.rr(this, "graph", "transform", 1);
                return this
            };
            $.g.rotation = function (a) {
                return $.n(a) ? (this.Za != a && (null === a && (a = 0), a = $.ab(a), this.Pd = -this.Za + a, this.Za = a, this.B(4), $.sr(this, "graph", ["labelsStyle", "rotate", "appearance"], 1)), this) : this.Za
            };
            $.g.data = function (a) {
                if ($.n(a)) {
                    if (null === a || $.n(a.nodes) && $.n(a.edges)) {
                        var b = a && a.edges ? a.edges : null, c;
                        a = a && a.nodes ? a.nodes : null;
                        this.nf !== a && (this.nf = a, this.la && this.la.nodes && ($.or(this.la.nodes, this.dd), $.pd(this.la.nodes)), $.J(a, $.Qr) ? c = a.Yd().Ui() : $.J(a, $.Gr) ? c = a.Ui() : c = $.Sr(a).Yd().Ui(), $.K(c, this.dd, this), this.la.nodes = c);
                        a = b;
                        this.ag !== a && (this.ag = a, this.la && this.la.edges && ($.or(this.la.edges, this.dd), $.pd(this.la.edges)), $.J(a, $.Qr) ? c = a.Yd().Ui() : $.J(a, $.Gr) ? c = a.Ui() : c = $.Sr(a).Yd().Ui(),
                            $.K(c, this.dd, this), this.la.edges = c);
                        Zha(this);
                        Yha(this);
                        Xha(this);
                        this.B(4);
                        $.sr(this, "graph", "data appearance labelsStyle labelsBounds labelsEnabled layout".split(" "), 1)
                    } else $.kl(906, null, [], !0);
                    return this
                }
                return this.la
            };
            $.g.F = function () {
                var a = zV.u.F.call(this);
                $.Xq(this, zV.b, a);
                var b = this.data().nodes;
                b = b ? b.F() : b;
                var c = this.data().edges;
                c = c ? c.F() : c;
                var d;
                if (b) for (d = 0; d < b.length; d++) {
                    var e = b[d];
                    if (e && e.id) {
                        var f = this.b[e.id];
                        e.x = f.position.x;
                        e.y = f.position.y
                    }
                }
                a.graphData = {nodes: b, edges: c};
                a.nodes = this.hf().F();
                a.edges = this.bk().F();
                b = this.labels().F();
                $.Nc(b) || (a.labels = b);
                a.groups = [];
                for (d in this.K) b = {}, b.id = d, b.settings = this.group(d).F(), a.groups.push(b);
                a.layout = this.we().F();
                a.interactivity = this.gd().F();
                d = this.Xg.clone();
                d.translate(-this.Ca, -this.Ia);
                a.transformationMatrix = {m00_: d.od, m10_: d.We, m01_: d.gf, m11_: d.Le, m02_: d.Nd, m12_: d.Id};
                a.rotation = this.rotation();
                return {chart: a}
            };
            $.g.U = function (a, b) {
                zV.u.U.call(this, a, b);
                $.Pq(this, zV.b, a, b);
                "graphData" in a && this.data(a.graphData);
                "edges" in a && this.bk().N(a.edges);
                "nodes" in a && this.hf().N(a.nodes);
                if ("transformationMatrix" in a) {
                    var c = a.transformationMatrix;
                    this.Xg.setTransform(c.m00_, c.m10_, c.m01_, c.m11_, c.m02_, c.m12_)
                }
                "rotation" in a && (this.Za = +a.rotation);
                "labels" in a && this.labels().N(a.labels);
                "layout" in a && (this.we().N(a.layout), "forced" == a.layout.type && $.tr(this, "graph", "layout"));
                if ("group" in a) {
                    c = a.groups;
                    for (var d = 0; d <
                    c.length; d++) {
                        var e = c[d];
                        this.group(e.id, e.settings)
                    }
                }
                "interactivity" in a && this.gd().N(a.interactivity)
            };
            $.g.R = function () {
                $.rd(this.i, this.Hh, this.qh, this.f, this.mf);
                this.bk().R();
                this.hf().R();
                this.f = this.qh = this.Hh = this.i = this.ba = this.ea = null;
                this.D = {};
                this.b = {};
                this.K = {};
                zV.u.R.call(this)
            };
            var JV = zV.prototype;
            JV.data = JV.data;
            JV.edges = JV.bk;
            JV.fit = JV.DT;
            JV.zoom = JV.zoom;
            JV.getCurrentScene = JV.Dh;
            JV.fitAll = JV.Qm;
            JV.zoomIn = JV.Ur;
            JV.zoomOut = JV.Vr;
            JV.select = JV.select;
            JV.unselect = JV.ie;
            JV.move = JV.move;
            JV.getType = JV.Ma;
            JV.group = JV.group;
            JV.rotation = JV.rotation;
            JV.nodes = JV.hf;
            JV.layout = JV.we;
            JV.interactivity = JV.gd;
            JV.noData = JV.Em;
            $.Xp.graph = $ha;
            $.E("anychart.graph", $ha);
        }).call(this, $)
    }
    if (!_.theme_graph) {
        _.theme_graph = 1;
        (function ($) {
            $.ra($.fa.anychart.themes.defaultTheme, {
                graph: {
                    labels: {enabled: !1, fontSize: 8, fontColor: "#7c868e", disablePointerEvents: !0, selectable: !1, anchor: "center-top", position: "center-bottom", padding: {top: 0, left: 0, right: 0, bottom: 0}}, padding: 10, tooltip: {displayMode: "single", positionMode: "float", separator: {enabled: !1}, title: {enabled: !1}, titleFormat: ""}, nodes: {
                        width: 12, height: 12, shape: "circle", tooltip: {format: "{%id}"}, labels: {format: "{%id}", enabled: !1}, normal: {fill: $.FN, stroke: $.KN}, hovered: {fill: $.LN, stroke: $.FN},
                        selected: {fill: "#333 0.85", stroke: "1.5 #212121"}
                    }, edges: {arrows: {enabled: !1, size: 10, position: "100%"}, stroke: $.LN, hovered: {stroke: $.KN}, selected: {stroke: "#333 0.85"}, labels: {enabled: !1, format: "from {%from} to {%to}"}, tooltip: {format: "from: {%from}\nto: {%to}"}}, layout: {type: "forced", iterationCount: 500}, interactivity: {enabled: !0, zoomOnMouseWheel: !0, scrollOnMouseWheel: !1, nodes: !0, edges: !0, magnetize: !1, hoverGap: 7}
                }
            });
        }).call(this, $)
    }
    $_ = window.anychart;
    $_.$ = $;
    $_._ = _
});