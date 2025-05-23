/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: exports, data-adapter
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
    if (!_.exports) {
        _.exports = 1;
        (function ($) {
            var $V, lia, aW, cW, nia, oia, pia, qia, ria, fW, gW, sia, hW, uia, iW, jW, wia, xia, zia, Aia, kW, Bia, lW, Cia, Dia, mW, nW, Eia, Fia, Gia, oW, Hia, Iia, Jia, Kia, Lia, Mia, Nia, qW, sW, Ria, rW, tW, Tia, Uia, Sia, uW, Pia, vW, zW, Xia, bja, xW, AW, cja, yW, BW, dja, fja, gja, hja, eja, CW, kja, oja, lja, pja, qja, OW, nja, FW, GW, sja, SW, TW, UW, VW, XW, YW, ZW, $W, aX, tja, bX, uja, dX, vja, wja, gX, xja, hX, eX;
            $V = function (a, b, c) {
                $.n(c) || (c = "a4");
                c = ZV[c];
                $.n(a) && $.n(b) ? $.z(a) && $.da(b) ? (a = a.toLowerCase(), (a = ZV[a]) && (b ? c = {width: a.height, height: a.width} : c = a)) : (c.width = String(a), c.height = String(b)) : $.n(a) && (a = ZV[String(a)]) && (c = a);
                $.hc(c.width, "px") || $.hc(c.width, "mm") || (c.width += "px");
                $.hc(c.height, "px") || $.hc(c.height, "mm") || (c.height += "px");
                return c
            };
            lia = function (a, b) {
                $.Aj(a, null, b, void 0)
            };
            aW = function (a, b) {
                if (a) {
                    var c = $.Oe("STYLE");
                    c.type = "text/css";
                    c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(window.document.createTextNode(String(a)));
                    $.Xe($.De(window.document, "head", void 0, b)[0], c, 0)
                }
            };
            cW = function () {
                bW && (window.document.body.removeChild(bW), bW = null)
            };
            nia = function (a) {
                if (!bW) {
                    var b = window.document.createElement("iframe");
                    bW = b;
                    $.yf(b, {visibility: "hidden", position: "fixed", right: 0, bottom: 0});
                    window.document.body.appendChild(b);
                    if (a) {
                        a = $.hk();
                        for (var c, d = 0, e = a.length; d < e; d++) if (c = a[d], c.type == mia) {
                            var f = "";
                            c.cssText ? f = c.cssText : c.style && c.style.cssText && c.selectorText && (f = c.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""), f = c.selectorText + " { " + f + " }");
                            aW(f, b.contentWindow.document)
                        }
                    }
                    aW("body{padding:0;margin:0;height:100%;}@page {size: auto; margin: 0; padding:0}",
                        b.contentWindow.document)
                }
                return bW
            };
            oia = function () {
                if (bW) {
                    var a = bW, b = a.contentWindow;
                    $.Lp ? (dW = $.uh.open(), dW.document.write(b.document.documentElement.innerHTML), cW(), dW.onafterprint = function () {
                        (0, window.setTimeout)(function () {
                            dW.close()
                        }, 0)
                    }, (0, window.setTimeout)(function () {
                        dW.focus();
                        dW.print()
                    }, 0)) : $.id ? (0, window.setTimeout)(function () {
                        $.yf(a, "visibility", "");
                        b.onafterprint = cW;
                        b.focus();
                        b.print()
                    }, 0) : ($.Fj(cW, 6), b.focus(), b.print())
                }
            };
            pia = function (a) {
                if (eW[a]) return eW[a];
                a = String(a);
                if (!eW[a]) {
                    var b = /function ([^\(]+)/.exec(a);
                    eW[a] = b ? b[1] : "[Anonymous]"
                }
                return eW[a]
            };
            qia = function (a, b) {
                var c = [];
                if ($.Aa(b, a)) c.push("[...circular reference...]"); else if (a && 50 > b.length) {
                    c.push(pia(a) + "(");
                    for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                        0 < e && c.push(", ");
                        var f = d[e];
                        switch (typeof f) {
                            case "object":
                                f = f ? "object" : "null";
                                break;
                            case "string":
                                break;
                            case "number":
                                f = String(f);
                                break;
                            case "boolean":
                                f = f ? "true" : "false";
                                break;
                            case "function":
                                f = (f = pia(f)) ? f : "[fn]";
                                break;
                            default:
                                f = typeof f
                        }
                        40 < f.length && (f = f.substr(0, 40) + "...");
                        c.push(f)
                    }
                    b.push(a);
                    c.push(")\n");
                    try {
                        c.push(qia(a.caller,
                            b))
                    } catch (h) {
                        c.push("[exception trying to get caller]\n")
                    }
                } else a ? c.push("[...long stack...]") : c.push("[end]");
                return c.join("")
            };
            ria = function (a) {
                var b = Error();
                if (Error.captureStackTrace) Error.captureStackTrace(b, a || ria), b = String(b.stack); else {
                    try {
                        throw b;
                    } catch (c) {
                        b = c
                    }
                    b = (b = b.stack) ? String(b) : null
                }
                b || (b = qia(a || arguments.callee.caller, []));
                return b
            };
            fW = function (a) {
                return a instanceof $.je && a.constructor === $.je && a.f === $.ie ? a.b : "type_error:Const"
            };
            gW = function () {
                var a = $.n($.fa.URL) && $.n($.fa.URL.createObjectURL) ? $.fa.URL : $.n($.fa.webkitURL) && $.n($.fa.webkitURL.createObjectURL) ? $.fa.webkitURL : $.n($.fa.createObjectURL) ? $.fa : null;
                if (null != a) return a;
                throw Error("This browser doesn't seem to support blob URLs");
            };
            sia = function (a) {
                return gW().createObjectURL(a)
            };
            hW = function () {
                this.f = tia
            };
            uia = function (a) {
                if (a instanceof hW && a.constructor === hW && a.f === tia) return "";
                $.ka(a);
                return "type_error:TrustedResourceUrl"
            };
            iW = function (a) {
                if (a instanceof $.me && a.constructor === $.me && a.i === $.le) return a.f;
                $.ka(a);
                return "type_error:SafeUrl"
            };
            jW = function (a) {
                if (a instanceof $.me) return a;
                a = a.Ay ? a.bu() : String(a);
                via.test(a) || (a = "about:invalid#zClosurez");
                return $.ne(a)
            };
            wia = function (a) {
                if (a instanceof $.pe && a.constructor === $.pe && a.f === $.oe) return a.b;
                $.ka(a);
                return "type_error:SafeStyle"
            };
            xia = function (a) {
                return a.replace($.dE, function (a, c, d, e) {
                    var b = "";
                    d = d.replace(/^(['"])(.*)\1$/, function (a, c, d) {
                        b = c;
                        return d
                    });
                    a = jW(d).bu();
                    return c + b + a + b + e
                })
            };
            zia = function (a) {
                if (a instanceof $.me) a = 'url("' + iW(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'; else if (a instanceof $.je) a = fW(a); else {
                    a = String(a);
                    var b = a.replace($.nda, "$1").replace($.dE, "url");
                    if (b = yia.test(b)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c
                    }
                    a = b ? xia(a) : "zClosurez"
                }
                return a
            };
            Aia = function (a) {
                var b = "", c;
                for (c in a) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                    var d = a[c];
                    null != d && (d = $.A(d) ? (0, $.Wa)(d, zia).join(" ") : zia(d), b += c + ":" + d + ";")
                }
                return b ? $.qe(b) : $.mda
            };
            kW = function (a) {
                if (a instanceof $.se && a.constructor === $.se && a.o === $.re) return a.f;
                $.ka(a);
                return "type_error:SafeHtml"
            };
            Bia = function (a) {
                if (a instanceof $.se) return a;
                var b = null;
                a.bV && (b = a.b());
                a = $.sc(a.Ay ? a.bu() : String(a));
                return $.te(a, b)
            };
            lW = function (a) {
                if (a instanceof $.se) return a;
                a = Bia(a);
                var b = kW(a);
                b = $.rc(b.replace(/  /g, " &#160;"), void 0);
                return $.te(b, a.b())
            };
            Cia = function (a) {
                if (!$.B(a)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
                a instanceof $.pe || (a = Aia(a));
                return wia(a)
            };
            Dia = function (a) {
                function b(a) {
                    $.A(a) ? (0, $.Re)(a, b) : (a = Bia(a), d += kW(a), a = a.b(), 0 == c ? c = a : 0 != a && c != a && (c = null))
                }

                var c = 0, d = "";
                (0, $.Re)(arguments, b);
                return $.te(d, c)
            };
            mW = function (a, b) {
                return (b || window.document).getElementsByTagName(String(a))
            };
            nW = function (a) {
                return a.contentDocument || a.contentWindow.document
            };
            Eia = function (a, b, c) {
                $.Bj(a, b, c, null) || $.aj($.qa(b, a))
            };
            Fia = function (a) {
                return new $.qj(function (b, c) {
                    var d = a.length, e = [];
                    if (d) for (var f = function (a, c) {
                        d--;
                        e[a] = c;
                        0 == d && b(e)
                    }, h = function (a) {
                        c(a)
                    }, k = 0, l; k < a.length; k++) l = a[k], Eia(l, $.qa(f, k), h); else b(e)
                })
            };
            Gia = function () {
                var a = new $.qj($.ia);
                $.nj(a, $.oj, void 0);
                return a
            };
            oW = function (a, b, c) {
                var d = {};
                b = "object" == $.ka(b) ? b : null;
                $.Gc(a, function (a, f) {
                    d[f] = b ? $.n(b[f]) ? b[f] : void 0 : a;
                    $.n(c) && (d[f] = $.n(d[f]) ? d[f] : c[f])
                });
                return d
            };
            Hia = function (a) {
                if (a.ys && "function" == typeof a.ys) return a.ys();
                if ($.z(a)) return a.split("");
                if ($.la(a)) {
                    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                    return b
                }
                return $.Hc(a)
            };
            Iia = function (a) {
                if (a.Xt && "function" == typeof a.Xt) return a.Xt();
                if (!a.ys || "function" != typeof a.ys) {
                    if ($.la(a) || $.z(a)) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return $.Ic(a)
                }
            };
            Jia = function (a, b) {
                if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0); else if ($.la(a) || $.z(a)) (0, $.Re)(a, b, void 0); else for (var c = Iia(a), d = Hia(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            };
            Kia = function (a, b) {
                if (a) for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="), f = null;
                    if (0 <= e) {
                        var h = c[d].substring(0, e);
                        f = c[d].substring(e + 1)
                    } else h = c[d];
                    b(h, f ? (0, window.decodeURIComponent)(f.replace(/\+/g, " ")) : "")
                }
            };
            $.pW = function (a) {
                this.o = this.K = this.i = "";
                this.G = null;
                this.D = this.Sc = "";
                this.b = !1;
                var b;
                a instanceof $.pW ? (this.b = $.n(void 0) ? void 0 : a.b, Lia(this, a.i), this.K = a.K, this.o = a.o, Mia(this, a.G), this.Sc = a.Sc, Nia(this, a.f.clone()), this.D = a.D) : a && (b = String(a).match(Oia)) ? (this.b = !1, Lia(this, b[1] || "", !0), this.K = qW(b[2] || ""), this.o = qW(b[3] || "", !0), Mia(this, b[4]), this.Sc = qW(b[5] || "", !0), Nia(this, b[6] || "", !0), this.D = qW(b[7] || "")) : (this.b = !1, this.f = new rW(null, this.b))
            };
            Lia = function (a, b, c) {
                a.i = c ? qW(b, !0) : b;
                a.i && (a.i = a.i.replace(/:$/, ""))
            };
            Mia = function (a, b) {
                if (b) {
                    b = Number(b);
                    if ((0, window.isNaN)(b) || 0 > b) throw Error("Bad port number " + b);
                    a.G = b
                } else a.G = null
            };
            Nia = function (a, b, c) {
                b instanceof rW ? (a.f = b, Pia(a.f, a.b)) : (c || (b = sW(b, Qia)), a.f = new rW(b, a.b))
            };
            qW = function (a, b) {
                return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
            };
            sW = function (a, b, c) {
                return $.z(a) ? (a = (0, window.encodeURI)(a).replace(b, Ria), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
            };
            Ria = function (a) {
                a = a.charCodeAt(0);
                return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
            };
            rW = function (a, b) {
                this.f = this.b = null;
                this.i = a || null;
                this.o = !!b
            };
            tW = function (a) {
                a.b || (a.b = new $.ZB, a.f = 0, a.i && Kia(a.i, function (b, c) {
                    a.add((0, window.decodeURIComponent)(b.replace(/\+/g, " ")), c)
                }))
            };
            Tia = function (a) {
                var b = Iia(a);
                if ("undefined" == typeof b) throw Error("Keys are undefined");
                var c = new rW(null, void 0);
                a = Hia(a);
                for (var d = 0; d < b.length; d++) {
                    var e = b[d], f = a[d];
                    $.A(f) ? Sia(c, e, f) : c.add(e, f)
                }
                return c
            };
            Uia = function (a, b) {
                tW(a);
                b = uW(a, b);
                return $.$B(a.b.f, b)
            };
            Sia = function (a, b, c) {
                a.remove(b);
                0 < c.length && (a.i = null, a.b.set(uW(a, b), $.Ha(c)), a.f += c.length)
            };
            uW = function (a, b) {
                var c = String(b);
                a.o && (c = c.toLowerCase());
                return c
            };
            Pia = function (a, b) {
                b && !a.o && (tW(a), a.i = null, a.b.forEach(function (a, b) {
                    var c = b.toLowerCase();
                    b != c && (this.remove(b), Sia(this, c, a))
                }, a));
                a.o = b
            };
            vW = function () {
                $.tf.call(this);
                this.Er = "closure_frame" + Via++;
                this.f = [];
                Wia[this.Er] = this
            };
            zW = function (a, b) {
                var c = new vW;
                $.Ld(c, "ready", c.ld, !1, c);
                if (c.$v) throw Error("[goog.net.IframeIo] Unable to send, already active.");
                var d = new $.pW(a);
                if (!wW) {
                    wW = $.Oe("FORM");
                    wW.acceptCharset = "utf-8";
                    var e = wW.style;
                    e.position = "absolute";
                    e.visibility = "hidden";
                    e.top = e.left = "-10px";
                    e.width = e.height = "10px";
                    e.overflow = "hidden";
                    window.document.body.appendChild(wW)
                }
                c.Tk = wW;
                b && Xia(c.Tk, b);
                c.Tk.action = d.toString();
                c.Tk.method = "POST";
                c.$v = !0;
                c.eG = !1;
                c.LA = c.Er + "_" + (c.dia++).toString(36);
                c.ul = $.Be(c.Tk).Ac("IFRAME",
                    {name: c.LA, id: c.LA});
                $.id && 7 > Number($.cd) && (c.ul.src = 'javascript:""');
                d = c.ul.style;
                d.visibility = "hidden";
                d.width = d.height = "10px";
                d.display = "none";
                $.wd ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
                if ($.id && !$.dd("11")) {
                    c.Tk.target = c.LA || "";
                    $.Be(c.Tk).b.body.appendChild(c.ul);
                    $.Ld(c.ul, "readystatechange", c.EW, !1, c);
                    try {
                        c.b = !1, c.Tk.submit()
                    } catch (Kb) {
                        $.Zd(c.ul, "readystatechange", c.EW, !1, c), xW(c)
                    }
                } else {
                    $.Be(c.Tk).b.body.appendChild(c.ul);
                    d = c.LA + "_inner";
                    e = nW(c.ul);
                    if (window.document.baseURI) {
                        var f =
                            $.sc(d);
                        $.ke("Short HTML snippet, input escaped, safe URL, for performance");
                        f = '<head><base href="' + $.sc(window.document.baseURI) + '"></head><body><iframe id="' + f + '" name="' + f + '"></iframe>';
                        f = $.te(f, null)
                    } else f = $.sc(d), $.ke("Short HTML snippet, input escaped, for performance"), f = $.te('<body><iframe id="' + f + '" name="' + f + '"></iframe>', null);
                    $.xd && !$.wd ? e.documentElement.innerHTML = kW(f) : e.write(kW(f));
                    $.Ld(e.getElementById(d), "load", c.dO, !1, c);
                    var h = mW("TEXTAREA", c.Tk);
                    f = 0;
                    for (var k = h.length; f < k; f++) {
                        var l =
                            h[f].value;
                        $.nf(h[f]) != l && ($.ef(h[f], l), h[f].value = l)
                    }
                    h = e.importNode(c.Tk, !0);
                    h.target = d;
                    h.action = c.Tk.action;
                    e.body.appendChild(h);
                    l = mW("SELECT", c.Tk);
                    var m = mW("SELECT", h);
                    f = 0;
                    for (k = l.length; f < k; f++) for (var p = mW("OPTION", l[f]), q = mW("OPTION", m[f]), r = 0, t = p.length; r < t; r++) q[r].selected = p[r].selected;
                    l = mW("INPUT", c.Tk);
                    m = mW("INPUT", h);
                    f = 0;
                    for (k = l.length; f < k; f++) if ("file" == l[f].type && l[f].value != m[f].value) {
                        c.Tk.target = d;
                        h = c.Tk;
                        break
                    }
                    try {
                        c.b = !1, h.submit(), e.close(), $.hd && $.Fj(c.s6, 250, c)
                    } catch (Kb) {
                        try {
                            var u =
                                $.ha("window.location.href");
                            if ($.z(Kb)) var v = {message: Kb, name: "Unknown error", lineNumber: "Not available", fileName: u, stack: "Not available"}; else {
                                f = !1;
                                try {
                                    var w = Kb.lineNumber || Kb.line || "Not available"
                                } catch (Sb) {
                                    w = "Not available", f = !0
                                }
                                try {
                                    var x = Kb.fileName || Kb.filename || Kb.sourceURL || $.fa.$googDebugFname || u
                                } catch (Sb) {
                                    x = "Not available", f = !0
                                }
                                v = !f && Kb.lineNumber && Kb.fileName && Kb.stack && Kb.message && Kb.name ? Kb : {
                                    message: Kb.message || "Not available", name: Kb.name || "UnknownError", lineNumber: w, fileName: x, stack: Kb.stack ||
                                        "Not available"
                                }
                            }
                            var y = v.fileName;
                            null != y || (y = "");
                            if (/^https?:\/\//i.test(y)) {
                                var C = jW(y);
                                $.ke("view-source scheme plus HTTP/HTTPS URL");
                                var G = "view-source:" + iW(C);
                                var F = $.ne(G)
                            } else {
                                var M = $.ke("sanitizedviewsrc");
                                F = $.ne(fW(M))
                            }
                            var O = lW("Message: " + v.message + "\nUrl: ");
                            u = {href: F, target: "_new"};
                            var Q = v.fileName;
                            if (!Yia.test("a")) throw Error("Invalid tag name <a>.");
                            if ("A" in Zia) throw Error("Tag name <a> is not allowed for SafeHtml.");
                            w = null;
                            x = "";
                            if (u) for (var S in u) {
                                if (!Yia.test(S)) throw Error('Invalid attribute name "' +
                                    S + '".');
                                var wa = u[S];
                                if (null != wa) {
                                    F = x;
                                    y = S;
                                    C = wa;
                                    if (C instanceof $.je) C = fW(C); else if ("style" == y.toLowerCase()) C = Cia(C); else {
                                        if (/^on/i.test(y)) throw Error('Attribute "' + y + '" requires goog.string.Const value, "' + C + '" given.');
                                        if (y.toLowerCase() in $ia) if (C instanceof hW) C = uia(C); else if (C instanceof $.me) C = iW(C); else if ($.z(C)) C = jW(C).bu(); else throw Error('Attribute "' + y + '" on tag "a" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + C + '" given.');
                                    }
                                    C.Ay && (C = C.bu());
                                    var sa = y + '="' + $.sc(String(C)) +
                                        '"';
                                    x = F + (" " + sa)
                                }
                            }
                            var Qa = "<a" + x;
                            null != Q ? $.A(Q) || (Q = [Q]) : Q = [];
                            if (!0 === aja.a) Qa += ">"; else {
                                var wb = Dia(Q);
                                Qa += ">" + kW(wb) + "</a>";
                                w = wb.b()
                            }
                            var oc = u && u.dir;
                            oc && (/^(ltr|rtl|auto)$/i.test(oc) ? w = 0 : w = null);
                            var hb = $.te(Qa, w);
                            var Rb = Dia(O, hb, lW("\nLine: " + v.lineNumber + "\n\nBrowser stack:\n" + v.stack + "-> [end]\n\nJS stack traversal:\n" + ria(void 0) + "-> "))
                        } catch (Sb) {
                            Rb = lW("Exception trying to expose exception! You win, we lose. " + Sb)
                        }
                        kW(Rb);
                        $.Zd(e.getElementById(d), "load", c.dO, !1, c);
                        e.close();
                        xW(c)
                    }
                }
                yW(c)
            };
            Xia = function (a, b) {
                var c = $.Be(a);
                Jia(b, function (b, e) {
                    $.A(b) || (b = [b]);
                    (0, $.Re)(b, function (b) {
                        b = c.Ac("INPUT", {type: "hidden", name: e, value: b});
                        a.appendChild(b)
                    })
                })
            };
            bja = function (a, b) {
                a.eG = !0;
                a.$v = !1;
                var c, d;
                c || "function" != typeof a.i || (d = a.i(b)) && (c = 4);
                c ? xW(a) : (a.dispatchEvent("complete"), a.dispatchEvent("success"), AW(a))
            };
            xW = function (a) {
                a.b || (a.$v = !1, a.eG = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"), AW(a), a.b = !0)
            };
            AW = function (a) {
                cja(a);
                yW(a);
                a.Tk = null;
                a.dispatchEvent("ready")
            };
            cja = function (a) {
                var b = a.ul;
                b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.f.push(b));
                a.KA && ($.Gj(a.KA), a.KA = null);
                $.hd || $.xd && !$.wd ? a.KA = $.Fj(a.W0, 2E3, a) : a.W0();
                a.ul = null;
                a.LA = null
            };
            yW = function (a) {
                a.Tk && a.Tk == wW && $.We(a.Tk)
            };
            BW = function (a) {
                return a.ul ? $.id && !$.dd("11") ? a.ul : nW(a.ul).getElementById(a.LA + "_inner") : null
            };
            dja = function () {
            };
            fja = function (a) {
                var b;
                (b = a.b) || (b = {}, eja(a) && (b[0] = !0, b[1] = !0), b = a.b = b);
                return b
            };
            gja = function () {
            };
            hja = function (a) {
                return (a = eja(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
            };
            eja = function (a) {
                if (!a.f && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
                    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                        var d = b[c];
                        try {
                            return new window.ActiveXObject(d), a.f = d
                        } catch (e) {
                        }
                    }
                    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
                }
                return a.f
            };
            CW = function (a) {
                $.tf.call(this);
                this.headers = new $.ZB;
                this.ba = a || null;
                this.f = !1;
                this.aa = this.b = null;
                this.na = "";
                this.i = 0;
                this.D = "";
                this.o = this.Ca = this.K = this.ea = !1;
                this.G = 0;
                this.P = null;
                this.Za = ija;
                this.Ia = this.Ka = !1
            };
            $.DW = function (a, b, c, d, e, f, h) {
                var k = new CW;
                jja.push(k);
                b && k.va("complete", b);
                k.Ce("ready", k.Bda);
                f && (k.G = Math.max(0, f));
                h && (k.Ka = h);
                kja(k, a, c, d, e)
            };
            kja = function (a, b, c, d, e) {
                if (a.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.na + "; newUri=" + b);
                c = c ? c.toUpperCase() : "GET";
                a.na = b;
                a.D = "";
                a.i = 0;
                a.ea = !1;
                a.f = !0;
                a.b = a.ba ? hja(a.ba) : hja(EW);
                a.aa = a.ba ? fja(a.ba) : fja(EW);
                a.b.onreadystatechange = (0, $.pa)(a.t4, a);
                try {
                    a.Ca = !0, a.b.open(c, String(b), !0), a.Ca = !1
                } catch (h) {
                    a.Jv(5, h);
                    return
                }
                b = d || "";
                var f = a.headers.clone();
                e && Jia(e, function (a, b) {
                    f.set(b, a)
                });
                e = $.ya(f.Xt(), lja);
                d = $.fa.FormData && b instanceof $.fa.FormData;
                !$.Aa(mja, c) || e || d || f.set("Content-Type",
                    "application/x-www-form-urlencoded;charset=utf-8");
                f.forEach(function (a, b) {
                    this.b.setRequestHeader(b, a)
                }, a);
                a.Za && (a.b.responseType = a.Za);
                "withCredentials" in a.b && a.b.withCredentials !== a.Ka && (a.b.withCredentials = a.Ka);
                try {
                    nja(a), 0 < a.G && (a.Ia = oja(a.b), a.Ia ? (a.b.timeout = a.G, a.b.ontimeout = (0, $.pa)(a.y6, a)) : a.P = $.Fj(a.y6, a.G, a)), a.K = !0, a.b.send(b), a.K = !1
                } catch (h) {
                    a.Jv(5, h)
                }
            };
            oja = function (a) {
                return $.id && $.dd(9) && $.ea(a.timeout) && $.n(a.ontimeout)
            };
            lja = function (a) {
                return "content-type" == a.toLowerCase()
            };
            pja = function (a) {
                a.ea || (a.ea = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
            };
            qja = function (a) {
                if (a.f && "undefined" != typeof $.UD && (!a.aa[1] || 4 != FW(a) || 2 != GW(a))) if (a.K && 4 == FW(a)) $.Fj(a.t4, 0, a); else if (a.dispatchEvent("readystatechange"), a.SH()) {
                    a.f = !1;
                    try {
                        if ($.HW(a)) a.dispatchEvent("complete"), a.dispatchEvent("success"); else {
                            a.i = 6;
                            try {
                                var b = 2 < FW(a) ? a.b.statusText : ""
                            } catch (c) {
                                b = ""
                            }
                            a.D = b + " [" + GW(a) + "]";
                            pja(a)
                        }
                    } finally {
                        OW(a)
                    }
                }
            };
            OW = function (a, b) {
                if (a.b) {
                    nja(a);
                    var c = a.b, d = a.aa[0] ? $.ia : null;
                    a.b = null;
                    a.aa = null;
                    b || a.dispatchEvent("ready");
                    try {
                        c.onreadystatechange = d
                    } catch (e) {
                    }
                }
            };
            nja = function (a) {
                a.b && a.Ia && (a.b.ontimeout = null);
                a.P && ($.Gj(a.P), a.P = null)
            };
            $.HW = function (a) {
                var b = GW(a);
                a:switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                if (!c) {
                    if (b = 0 === b) a = String(a.na).match(Oia)[1] || null, !a && $.fa.self && $.fa.self.location && (a = $.fa.self.location.protocol, a = a.substr(0, a.length - 1)), b = !rja.test(a ? a.toLowerCase() : "");
                    c = b
                }
                return c
            };
            FW = function (a) {
                return a.b ? a.b.readyState : 0
            };
            GW = function (a) {
                try {
                    return 2 < FW(a) ? a.b.status : -1
                } catch (b) {
                    return -1
                }
            };
            $.PW = function (a) {
                if (a.b) return $.no(a.b.responseText)
            };
            $.QW = function (a) {
                return $.z(a.D) ? a.D : String(a.D)
            };
            sja = function (a, b, c) {
                var d = a.width() / a.height();
                b = $.n(b) ? b : c ? Math.round(c * d) : a.width();
                c = $.n(c) ? c : b ? Math.round(b / d) : a.height();
                return {width: b, height: c}
            };
            SW = function (a, b, c, d, e, f) {
                c && (b.responseType = "base64");
                d && (b.save = !0);
                var h = f || $.ia, k = d ? "url" : "result";
                b = Tia(new $.ZB(b));
                $.DW(RW + "/" + a, function (a) {
                    a = a.target;
                    $.HW(a) ? e($.PW(a)[k]) : h($.QW(a))
                }, "POST", b.toString())
            };
            TW = function (a, b, c, d, e, f) {
                c = sja(a, c, d);
                b.data = a.Nq(c.width, c.height);
                b.dataType = "svg";
                b.responseType = "file";
                b.width = c.width;
                b.height = c.height;
                $.n(e) && (b.quality = e);
                $.n(f) && (b["file-name"] = f)
            };
            UW = function (a, b, c, d, e, f, h) {
                c = sja(a, c, d);
                b.data = a.Nq(c.width, c.height);
                b.dataType = "svg";
                b.responseType = "file";
                b.width = c.width;
                b.height = c.height;
                $.n(e) && (b.quality = e);
                $.n(f) && (b["force-transparent-white"] = f);
                $.n(h) && (b["file-name"] = h)
            };
            VW = function (a, b, c, d, e) {
                b.data = a.Nq(c, d);
                b.dataType = "svg";
                b.responseType = "file";
                $.n(e) && (b["file-name"] = e)
            };
            XW = function (a, b, c, d, e, f, h) {
                var k = null;
                $.n(c) ? $.ea(c) ? (b["pdf-width"] = c, b["pdf-height"] = $.ea(d) ? d : a.height()) : $.z(c) ? (b["pdf-size"] = c || "a4", b.landscape = !!d, k = WW[b["pdf-size"]], b.landscape && (k = {width: k.height, height: k.width})) : (b["pdf-width"] = a.width(), b["pdf-height"] = a.height()) : (b["pdf-width"] = a.width(), b["pdf-height"] = a.height());
                $.n(e) && (b["pdf-x"] = e);
                $.n(f) && (b["pdf-y"] = f);
                $.n(h) && (b["file-name"] = h);
                k ? (c = k.width, k = k.height, d = a.width(), h = a.height(), k = c < k ? [c, c / d * h] : c > k ? [k / h * d, k] : [c, k], k[0] -= e || 0,
                    k[1] -= f || 0, a = a.Nq(k[0], k[1])) : a = a.Nq(b["pdf-width"], b["pdf-height"]);
                b.data = a;
                b.dataType = "svg";
                b.responseType = "file"
            };
            YW = function (a, b, c, d, e) {
                if ("svg" == $.lk) {
                    var f = {};
                    TW(a, f, b, c, d, e);
                    zW(RW + "/png", f)
                } else (0, window.alert)($.kd(15))
            };
            ZW = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    UW(a, h, b, c, d, e, f);
                    zW(RW + "/jpg", h)
                } else (0, window.alert)($.kd(15))
            };
            $W = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    XW(a, h, b, c, d, e, f);
                    zW(RW + "/pdf", h)
                } else (0, window.alert)($.kd(15))
            };
            aX = function (a, b, c, d) {
                if ("svg" == $.lk) {
                    var e = {};
                    VW(a, e, b, c, d);
                    zW(RW + "/svg", e)
                } else (0, window.alert)($.kd(15))
            };
            tja = function (a) {
                var b = "";
                a && (b = (new window.XMLSerializer).serializeToString(a));
                return b
            };
            bX = function () {
                this.b = {};
                this.i = {};
                this.G = {};
                this.o = {};
                this.D = {};
                this.ea = ["svg2pdf.min.js", "jspdf.min.js", "canvg.min.js", "xlsx.core.min.js"];
                this.g3 = !1;
                this.K = {}
            };
            uja = function (a) {
                var b = cX, c = $.fa.anychart.exports;
                if (c.g3) return Gia();
                var d = b.ea, e = c.ic(a, "clientside").path;
                e += $.hc(e, "/") ? "" : "/";
                a = [];
                for (var f = 0; f < d.length; f++) b = new $.qj(function (a, b) {
                    var c = e + d[f], h = $.Te(window.document, "script");
                    h.setAttribute("src", c);
                    h.onload = h.onreadystatechange = function () {
                        $.hl("info", "Loaded external exporting script " + c);
                        a()
                    };
                    h.onerror = function () {
                        $.hl("warn", "Failed tp load external script " + c);
                        b()
                    };
                    $.Pp.head.appendChild(h)
                }), a.push(b);
                return Fia(a).then(function () {
                    c.g3 =
                        !0
                })
            };
            dX = function (a, b, c) {
                if ($.B(c)) {
                    var d = {};
                    $.Gc(c, function (a, b) {
                        $.n(a) && (d[b] = a)
                    });
                    $.Nc(d) || (a[b] = d)
                } else $.n(c) && (a[b] = c)
            };
            vja = function (a, b, c, d) {
                lia(uja(a).then(function () {
                    var a = $.fa.XLSX, d = a.utils, h = $.Um().nC(b), k = d.book_new();
                    h = d.aoa_to_sheet(h);
                    d.book_append_sheet(k, h, "data");
                    a = a.write(k, {type: "array"});
                    eX(new window.Blob([a], {type: fX.xlsx}), c, "xlsx")
                }), function () {
                    d()
                })
            };
            wja = function (a, b, c, d) {
                var e = c.paperSize, f = c.landscape, h = c.x || 0, k = c.y || 0, l = c.filename || "anychart";
                l += ".pdf";
                try {
                    if ($.n(e) || $.n(f)) {
                        var m = $V(e, f);
                        if ($.z(e)) {
                            var p = WW[e].width;
                            var q = WW[e].height;
                            if (f && q > p || !f && q < p) p = [q, q = p][0]
                        } else p = (0, window.parseFloat)(m.width), q = (0, window.parseFloat)(m.height);
                        var r = new $.fa.jsPDF(f ? "l" : "p", "pt", e || [p, q]);
                        $.z(b) ? r.addImage(b, "png", h, k, p, q) : $.fa.svg2pdf(b, r, {xOffset: h, yOffset: k, scale: 1})
                    } else {
                        var t = a.width(), u = a.height();
                        r = new $.fa.jsPDF(t > u ? "l" : "p", "pt", [t, u]);
                        $.z(b) ?
                            r.addImage(b, "png", h, k, t, u) : $.fa.svg2pdf(b, r, {xOffset: h, yOffset: k, scale: 1})
                    }
                    r.save(l)
                } catch (v) {
                    d(c)
                }
            };
            gX = function (a, b, c, d, e, f, h) {
                var k = fX[c], l = $.Te(window.document, "canvas");
                l.width = d;
                l.height = e;
                $.yf(l, {width: d, height: e, visibility: "hidden", position: "fixed", right: 0, bottom: 0});
                $.Pp.body.appendChild(l);
                var m = l.getContext("2d"), p = new window.Image, q = b.quality || .92;
                a.setAttribute("width", d);
                a.setAttribute("height", e);
                var r = (new window.XMLSerializer).serializeToString(a), t = sia(new window.Blob([r], {type: "image/svg+xml"}));
                p.onload = function () {
                    try {
                        if (l.msToBlob && m.drawSvg) {
                            m.drawSvg(r, 0, 0, d, e);
                            var a = l.toDataURL(k,
                                q)
                        } else m.drawImage(p, 0, 0, d, e), a = l.toDataURL(k, q);
                        f(a);
                        $.Ye(l);
                        gW().revokeObjectURL(t)
                    } catch (v) {
                        h(b)
                    }
                };
                p.src = t
            };
            xja = function (a, b, c, d, e, f, h) {
                function k(a) {
                    eX(a, l, c)
                }

                var l = d.filename || "anychart", m = 0 < b.getElementsByTagName("image").length;
                try {
                    switch (c) {
                        case "svg":
                            var p = (new window.XMLSerializer).serializeToString(b);
                            eX(new window.Blob([p], {type: "image/svg+xml"}), l, c);
                            break;
                        case "png":
                            gX(b, d, c, e, f, k, h);
                            break;
                        case "jpg":
                            gX(b, d, c, e, f, k, h);
                            break;
                        case "pdf":
                            m ? gX(b, d, c, e, f, function (b) {
                                wja(a, b, d, h)
                            }, h) : wja(a, b, d, h)
                    }
                } catch (q) {
                    h(d)
                }
            };
            hX = function (a, b, c, d) {
                lia(uja(a).then(function () {
                    function e(a) {
                        var b = a.getAttribute("href"), c = new window.Image, d = (0, window.parseFloat)(a.getAttribute("width")), e = (0, window.parseFloat)(a.getAttribute("height"));
                        d = d || 1;
                        e = e || 1;
                        c.onload = function () {
                            var b = $.Te(window.document, "CANVAS");
                            $.Pp.body.appendChild(b);
                            var h = b.getContext("2d");
                            b.width = d;
                            b.height = e;
                            h.drawImage(c, 0, 0, d, e);
                            h = b.toDataURL();
                            a.setAttribute("href", h);
                            a.setAttribute("src", h);
                            u++;
                            u == v.length && f();
                            $.Ye(b)
                        };
                        c.crossOrigin = "anonymous";
                        c.src =
                            b
                    }

                    function f() {
                        xja(h, t, b, c, m, p, d)
                    }

                    var h = $.J(a, $.Zj) ? a : a.O().Ja(), k = c.paperSize, l = c.landscape;
                    if ($.z(k)) {
                        var m = WW[k].width;
                        var p = WW[k].height
                    } else m = c.width || h.width(), p = c.height || h.height();
                    var q = h.width(), r = h.height();
                    "pdf" == b && $.z(k) && (l && p > m || !l && p < m) && (m = [p, p = m][0]);
                    h.resize(m, p);
                    var t = h.ia().cloneNode(!0);
                    h.resize($.z(q) ? q : "100%", $.z(r) ? r : "100%");
                    t.setAttribute("width", m);
                    t.setAttribute("height", p);
                    var u = 0, v = t.getElementsByTagName("image");
                    k = $.Aa(["png", "jpg", "pdf"], b);
                    try {
                        if (0 < v.length) {
                            if (($.Fc("Trident") ||
                                $.Fc("MSIE")) && k) throw"Internet explorer can't export chart with images to pdf, jpg or png";
                            for (k = 0; k < v.length; k++) e(v[k])
                        } else f()
                    } catch (w) {
                        d(c)
                    }
                }), function () {
                    d(c)
                })
            };
            eX = function (a, b, c) {
                var d = $.Te(window.document, "a");
                if ($.z(a)) {
                    var e = (0, window.atob)(a.split(",")[1]);
                    a = a.split(",")[0].split(":")[1].split(";")[0];
                    for (var f = new window.ArrayBuffer(e.length), h = new window.Uint8Array(f), k = 0; k < e.length; k++) h[k] = e.charCodeAt(k);
                    e = new window.Blob([f], {type: a})
                } else e = a;
                b = b + "." + c;
                c = sia(e);
                $.n(d.download) ? ($.Pp.body.appendChild(d), d.href = c, d.download = b, d.click(), $.Ye(d)) : $.n($.fa.navigator.msSaveOrOpenBlob) ? $.fa.navigator.msSaveOrOpenBlob(e, b) : $.Qp.open(c, b);
                gW().revokeObjectURL(c)
            };
            $.ZB.prototype.ys = $.ca(29, function () {
                $.gC(this);
                for (var a = [], b = 0; b < this.b.length; b++) a.push(this.f[this.b[b]]);
                return a
            });
            $.me.prototype.b = $.ca(2, function () {
                return 1
            });
            $.se.prototype.b = $.ca(1, function () {
                return this.i
            });
            var ZV = {"us-letter": {width: "215.9mm", height: "279.4mm"}, a0: {width: "841mm", height: "1189mm"}, a1: {width: "594mm", height: "841mm"}, a2: {width: "420mm", height: "594mm"}, a3: {width: "297mm", height: "420mm"}, a4: {width: "210mm", height: "297mm"}, a5: {width: "148mm", height: "210mm"}, a6: {width: "105mm", height: "148mm"}}, bW = null, dW = null, mia = 5, eW = {}, aja = {area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0}, tia = {};
            hW.prototype.Ay = !0;
            hW.prototype.bu = function () {
                return ""
            };
            hW.prototype.bV = !0;
            hW.prototype.b = function () {
                return 1
            };
            var via = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, yia = /^[-,."'%_!# a-zA-Z0-9]+$/, Yia = /^[a-zA-Z0-9-]+$/, $ia = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0}, Zia = {APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0}, WW = {
                a0: {width: 2384, height: 3370}, a1: {width: 1684, height: 2384}, a2: {width: 1191, height: 1684}, a3: {width: 842, height: 1191}, a4: {width: 595, height: 842}, a5: {width: 420, height: 595}, a6: {width: 297, height: 420},
                a7: {width: 210, height: 297}, a8: {width: 48, height: 210}, a9: {width: 105, height: 148}, b0: {width: 2834, height: 4008}, b1: {width: 2004, height: 2834}, b2: {width: 1417, height: 2004}, b3: {width: 1E3, height: 1417}, b4: {width: 708, height: 1E3}, b5: {width: 498, height: 708}, b6: {width: 354, height: 498}, b7: {width: 249, height: 354}, b8: {width: 175, height: 249}, b9: {width: 124, height: 175}, "arch-a": {width: 648, height: 864}, "arch-b": {width: 864, height: 1296}, "arch-c": {width: 1296, height: 1728}, "arch-d": {width: 1728, height: 2592}, "arch-e": {width: 2592, height: 3456},
                "crown-octavo": {width: 348, height: 527}, "crown-quarto": {width: 535, height: 697}, "demy-octavo": {width: 391, height: 612}, "demy-quarto": {width: 620, height: 782}, "royal-octavo": {width: 442, height: 663}, "royal-quarto": {width: 671, height: 884}, executive: {width: 522, height: 756}, halfletter: {width: 396, height: 612}, ledger: {width: 1224, height: 792}, legal: {width: 612, height: 1008}, letter: {width: 612, height: 792}, tabloid: {width: 792, height: 1224}
            };
            var Oia = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            $.pW.prototype.toString = function () {
                var a = [], b = this.i;
                b && a.push(sW(b, yja, !0), ":");
                var c = this.o;
                if (c || "file" == b) a.push("//"), (b = this.K) && a.push(sW(b, yja, !0), "@"), a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.G, null != c && a.push(":", String(c));
                if (c = this.Sc) this.o && "/" != c.charAt(0) && a.push("/"), a.push(sW(c, "/" == c.charAt(0) ? zja : Aja, !0));
                (c = this.f.toString()) && a.push("?", c);
                (c = this.D) && a.push("#", sW(c, Bja));
                return a.join("")
            };
            $.pW.prototype.clone = function () {
                return new $.pW(this)
            };
            var yja = /[#\/\?@]/g, Aja = /[#\?:]/g, zja = /[#\?]/g, Qia = /[#\?@]/g, Bja = /#/g;
            $.g = rW.prototype;
            $.g.add = function (a, b) {
                tW(this);
                this.i = null;
                a = uW(this, a);
                var c = this.b.get(a);
                c || this.b.set(a, c = []);
                c.push(b);
                this.f += 1;
                return this
            };
            $.g.remove = function (a) {
                tW(this);
                a = uW(this, a);
                return $.$B(this.b.f, a) ? (this.i = null, this.f -= this.b.get(a).length, this.b.remove(a)) : !1
            };
            $.g.clear = function () {
                this.b = this.i = null;
                this.f = 0
            };
            $.g.Tj = function () {
                tW(this);
                return 0 == this.f
            };
            $.g.forEach = function (a, b) {
                tW(this);
                this.b.forEach(function (c, d) {
                    (0, $.Re)(c, function (c) {
                        a.call(b, c, d, this)
                    }, this)
                }, this)
            };
            $.g.Xt = function () {
                tW(this);
                for (var a = this.b.ys(), b = this.b.Xt(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
                return c
            };
            $.g.ys = function (a) {
                tW(this);
                var b = [];
                if ($.z(a)) Uia(this, a) && (b = $.Ga(b, this.b.get(uW(this, a)))); else {
                    a = this.b.ys();
                    for (var c = 0; c < a.length; c++) b = $.Ga(b, a[c])
                }
                return b
            };
            $.g.set = function (a, b) {
                tW(this);
                this.i = null;
                a = uW(this, a);
                Uia(this, a) && (this.f -= this.b.get(a).length);
                this.b.set(a, [b]);
                this.f += 1;
                return this
            };
            $.g.get = function (a, b) {
                if (!a) return b;
                var c = this.ys(a);
                return 0 < c.length ? String(c[0]) : b
            };
            $.g.toString = function () {
                if (this.i) return this.i;
                if (!this.b) return "";
                for (var a = [], b = this.b.Xt(), c = 0; c < b.length; c++) {
                    var d = b[c], e = (0, window.encodeURIComponent)(String(d));
                    d = this.ys(d);
                    for (var f = 0; f < d.length; f++) {
                        var h = e;
                        "" !== d[f] && (h += "=" + (0, window.encodeURIComponent)(String(d[f])));
                        a.push(h)
                    }
                }
                return this.i = a.join("&")
            };
            $.g.clone = function () {
                var a = new rW;
                a.i = this.i;
                this.b && (a.b = this.b.clone(), a.f = this.f);
                return a
            };
            var wW;
            $.H(vW, $.tf);
            var Wia = {}, Via = 0;
            $.g = vW.prototype;
            $.g.Tk = null;
            $.g.ul = null;
            $.g.LA = null;
            $.g.dia = 0;
            $.g.$v = !1;
            $.g.eG = !1;
            $.g.KA = null;
            $.g.abort = function () {
                this.$v && ($.ce(BW(this)), this.$v = this.eG = !1, this.dispatchEvent("abort"), AW(this))
            };
            $.g.R = function () {
                this.$v && this.abort();
                vW.u.R.call(this);
                this.ul && cja(this);
                yW(this);
                delete this.i;
                this.Tk = null;
                delete Wia[this.Er]
            };
            $.g.SH = function () {
                return this.eG
            };
            $.g.uq = function () {
                return this.$v
            };
            $.g.EW = function () {
                if ("complete" == this.ul.readyState) {
                    $.Zd(this.ul, "readystatechange", this.EW, !1, this);
                    try {
                        var a = nW(this.ul);
                        if ($.id && "about:blank" == a.location && !window.navigator.onLine) {
                            xW(this);
                            return
                        }
                    } catch (b) {
                        xW(this);
                        return
                    }
                    bja(this, a)
                }
            };
            $.g.dO = function () {
                if (!$.xd || $.wd || "about:blank" != (this.ul ? nW(BW(this)) : null).location) {
                    $.Zd(BW(this), "load", this.dO, !1, this);
                    try {
                        bja(this, this.ul ? nW(BW(this)) : null)
                    } catch (a) {
                        xW(this)
                    }
                }
            };
            $.g.W0 = function () {
                this.KA && ($.Gj(this.KA), this.KA = null);
                for (; 0 != this.f.length;) {
                    var a = this.f.pop();
                    $.Ye(a)
                }
            };
            $.g.s6 = function () {
                if (this.$v) {
                    var a = this.ul ? nW(BW(this)) : null;
                    a && !$.ad(a, "documentUri") ? ($.Zd(BW(this), "load", this.dO, !1, this), xW(this)) : $.Fj(this.s6, 250, this)
                }
            };
            dja.prototype.b = null;
            var EW;
            $.H(gja, dja);
            EW = new gja;
            $.H(CW, $.tf);
            var ija = "", rja = /^https?$/i, mja = ["POST", "PUT"], jja = [];
            $.g = CW.prototype;
            $.g.Bda = function () {
                this.ld();
                $.Fa(jja, this)
            };
            $.g.y6 = function () {
                "undefined" != typeof $.UD && this.b && (this.D = "Timed out after " + this.G + "ms, aborting", this.i = 8, this.dispatchEvent("timeout"), this.abort(8))
            };
            $.g.Jv = function (a, b) {
                this.f = !1;
                this.b && (this.o = !0, this.b.abort(), this.o = !1);
                this.D = b;
                this.i = a;
                pja(this);
                OW(this)
            };
            $.g.abort = function (a) {
                this.b && this.f && (this.f = !1, this.o = !0, this.b.abort(), this.o = !1, this.i = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), OW(this))
            };
            $.g.R = function () {
                this.b && (this.f && (this.f = !1, this.o = !0, this.b.abort(), this.o = !1), OW(this, !0));
                CW.u.R.call(this)
            };
            $.g.t4 = function () {
                this.md || (this.Ca || this.K || this.o ? qja(this) : this.Tia())
            };
            $.g.Tia = function () {
                qja(this)
            };
            $.g.uq = function () {
                return !!this.b
            };
            $.g.SH = function () {
                return 4 == FW(this)
            };
            var RW = "//export.anychart.com";
            $.g = $.Zj.prototype;
            $.g.pla = function (a) {
                return $.n(a) ? (this.iy = (this.R6 = !!a) ? $.Ch.anychart.exports : null, this) : !!this.R6
            };
            $.g.Fu = function (a, b, c, d, e, f, h) {
                if ("svg" == $.lk) {
                    var k = {};
                    TW(this, k, d, e, f, h);
                    SW("png", k, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.DB = function (a, b, c, d, e, f, h, k) {
                if ("svg" == $.lk) {
                    var l = {};
                    UW(this, l, d, e, f, h, k);
                    SW("jpg", l, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.FB = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    VW(this, h, d, e, f);
                    SW("svg", h, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.EB = function (a, b, c, d, e, f, h, k) {
                if ("svg" == $.lk) {
                    var l = {};
                    XW(this, l, d, e, f, h, k);
                    SW("pdf", l, !!c, !0, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.zA = function (a, b, c, d, e) {
                if ("svg" == $.lk) {
                    var f = {};
                    TW(this, f, c, d, e);
                    SW("png", f, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.wA = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    UW(this, h, c, d, e, f);
                    SW("jpg", h, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.BA = function (a, b, c, d) {
                if ("svg" == $.lk) {
                    var e = {};
                    VW(this, e, c, d);
                    SW("svg", e, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.yA = function (a, b, c, d, e, f) {
                if ("svg" == $.lk) {
                    var h = {};
                    XW(this, h, c, d, e, f);
                    SW("pdf", h, !0, !1, a, b)
                } else (0, window.alert)($.kd(15))
            };
            $.g.Cu = function (a, b, c, d) {
                this.iy ? this.iy.Cu(this, this, a, b, c, d) : YW(this, a, b, c, d)
            };
            $.g.Xw = function (a, b, c, d, e) {
                this.iy ? this.iy.saveAsJpg(this, this, a, b, c, d, e) : ZW(this, a, b, c, d, e)
            };
            $.g.Yw = function (a, b, c, d, e) {
                this.iy ? this.iy.saveAsPdf(this, this, a, b, c, d, e) : $W(this, a, b, c, d, e)
            };
            $.g.Zw = function (a, b, c) {
                this.iy ? this.iy.saveAsSvg(this, this, a, b, c) : aX(this, a, b, c)
            };
            $.g.print = function (a, b) {
                if ($.n(a) || $.n(b)) {
                    var c = $V(a, b, "us-letter"), d = nia(this.xY()).contentWindow.document;
                    aW("html, body {height: 100%; overflow: hidden}", d);
                    var e = $.Oe("DIV");
                    $.yf(e, {width: c.width, height: c.height});
                    d.body.appendChild(e);
                    c = this.width();
                    d = this.height();
                    var f = $.Yf(e);
                    this.resize(f.width, f.height);
                    f = this.ia();
                    "svg" == f.tagName && f.cloneNode ? (f = f.cloneNode(!0), e.appendChild(f)) : $.mk(e).data(this.data());
                    this.resize(c, d)
                } else e = nia(this.xY()).contentWindow.document, d = this.ia(), "svg" ==
                d.tagName ? d.cloneNode ? c = d.cloneNode(!0) : (d = $.mk(e.body), d.data(this.data()), c = d.ia()) : (d = $.mk(e.body), d.data(this.data())), d = $.ng(), f = c, d.lc(f, "width", "100%"), d.lc(f, "height", "100%"), d.lc(f, "viewBox", "0 0 " + this.width() + " " + this.height()), $.yf(f, "width", "100%"), $.yf(f, "height", ""), $.yf(f, "max-height", "100%"), e.body.appendChild(c);
                oia()
            };
            $.g.Nq = function (a, b) {
                if ("svg" != $.lk) return "";
                if ($.n(a) || $.n(b)) {
                    var c = $V(a, b);
                    var d = $.cf(this.ia()), e = $.Af(d, "width");
                    d = $.Af(d, "height");
                    this.resize(c.width, c.height);
                    c = tja(this.ia());
                    this.resize(e, d)
                } else $.ng().bP(this.ia(), this.width(), this.height()), c = tja(this.ia()), $.ng().bP(this.ia(), "100%", "100%");
                return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + c
            };
            $.E("acgraph.server", function (a) {
                $.n(a) && (RW = a);
                return RW
            });
            var iX = $.Zj.prototype;
            iX.useAnychartExporting = iX.pla;
            iX.saveAsPNG = iX.Cu;
            iX.saveAsJPG = iX.Xw;
            iX.saveAsPDF = iX.Yw;
            iX.saveAsSVG = iX.Zw;
            iX.saveAsPng = iX.Cu;
            iX.saveAsJpg = iX.Xw;
            iX.saveAsPdf = iX.Yw;
            iX.saveAsSvg = iX.Zw;
            iX.shareAsPng = iX.Fu;
            iX.shareAsJpg = iX.DB;
            iX.shareAsPdf = iX.EB;
            iX.shareAsSvg = iX.FB;
            iX.getPngBase64String = iX.zA;
            iX.getJpgBase64String = iX.wA;
            iX.getSvgBase64String = iX.BA;
            iX.getPdfBase64String = iX.yA;
            iX.print = iX.print;
            iX.toSvg = iX.Nq;
            $.g = bX.prototype;
            $.g.s0 = function (a) {
                return "object" == $.ka(a) ? ($.ra(this.K, a), this) : this.K
            };
            $.g.filename = function (a) {
                $.n(a) && (this.aa = a);
                return this.aa
            };
            $.g.vk = function (a, b) {
                return this.b = oW({width: a, height: b}, a, this.b)
            };
            $.g.t1 = function (a, b, c, d, e, f, h) {
                return this.i = oW({caption: a, link: b, name: c, description: d, width: e, height: f, appId: h}, a, this.i)
            };
            $.g.O6 = function (a, b, c) {
                return this.G = oW({url: a, width: b, height: c}, a, this.G)
            };
            $.g.D3 = function (a, b, c, d) {
                return this.o = oW({caption: a, description: b, width: c, height: d}, a, this.o)
            };
            $.g.B4 = function (a, b, c, d) {
                return this.D = oW({link: a, description: b, width: c, height: d}, a, this.D)
            };
            $.g.PK = function () {
                this.aa = "anychart";
                this.b = {width: void 0, height: void 0};
                this.i = {caption: $.ll.location ? $.ll.location.hostname : "", link: void 0, name: void 0, description: void 0, appId: 0x42607363aa4b7, width: 1200, height: 630};
                this.G = {url: "https://export.anychart.com/sharing/twitter", width: 1024, height: 800};
                this.o = {caption: "AnyChart", description: void 0, width: 1200, height: 630};
                this.D = {link: void 0, description: void 0, width: 1200, height: 800};
                this.K = {path: "https://cdn.anychart.com/3rd/", enabled: !0, fallback: !0}
            };
            $.g.F = function () {
                var a = {};
                dX(a, "filename", this.aa);
                dX(a, "image", this.b);
                dX(a, "facebook", this.i);
                dX(a, "twitter", this.G);
                dX(a, "linkedin", this.o);
                dX(a, "pinterest", this.D);
                dX(a, "clientside", this.K);
                return a
            };
            $.g.U = function (a) {
                this.filename(a.filename);
                this.vk(a.image);
                this.t1(a.facebook);
                this.O6(a.twitter);
                this.D3(a.linkedin);
                this.B4(a.pinterest);
                this.s0(a.clientside)
            };
            var jX = bX.prototype;
            jX.filename = jX.filename;
            jX.image = jX.vk;
            jX.facebook = jX.t1;
            jX.twitter = jX.O6;
            jX.linkedin = jX.D3;
            jX.pinterest = jX.B4;
            jX.clientside = jX.s0;
            var fX = {png: "image/png", jpg: "image/jpeg", svg: "image/svg+xml", csv: "text/csv", pdf: "application/pdf", json: "application/json", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xml: "text/xml"};
            var cX = new bX;
            cX.PK();
            cX.create = function () {
                return new bX
            };
            cX.ic = function (a, b) {
                var c = a && a.exports ? a.exports()[b]() : void 0, d = $.fa.anychart.exports[b](), e;
                "object" == $.ka(c) ? e = oW(d, c, d) : e = $.n(c) ? c : d;
                return e
            };
            cX.na = $.fa.IS_ANYCHART_AMD ? $.iq.acgraph.server : $.ll.acgraph.server;
            cX.ba = function (a, b, c) {
                return function () {
                    zW(RW + "/" + c, {"file-name": b, data: a, dataType: c, responseType: "file"})
                }
            };
            cX.f = function (a, b) {
                return function (c) {
                    a.fallback ? ($.kl(1E3, null, [], !0), b.call(null, arguments)) : $.kl(1002, null, [], !0)
                }
            };
            cX.Cu = function (a, b, c, d, e, f) {
                var h = b ? b.Ja() : null;
                h && (b = cX.ic(a, "image"), c = oW({width: c, height: d, quality: e, filename: f}, c, {width: b.width, height: b.height, filename: cX.ic(a, "filename")}), d = cX.ic(a, "clientside"), e = cX.f(d, function (a) {
                    YW(h, a.width, a.height, a.quality, a.filename)
                }), d.enabled ? hX(a, "png", c, e) : d.fallback ? YW(h, c.width, c.height, c.quality, c.filename) : $.kl(1001, null, [], !0))
            };
            cX.Xw = function (a, b, c, d, e, f, h) {
                var k = b ? b.Ja() : null;
                k && (b = cX.ic(a, "image"), c = oW({width: c, height: d, quality: e, forceTransparentWhite: f, filename: h}, c, {width: b.width, height: b.height, filename: cX.ic(a, "filename")}), d = cX.ic(a, "clientside"), e = cX.f(d, function (a) {
                    ZW(k, a.width, a.height, a.quality, a.forceTransparentWhite, a.filename)
                }), d.enabled ? hX(a, "jpg", c, e) : d.fallback ? ZW(k, c.width, c.height, c.quality, c.forceTransparentWhite, c.filename) : $.kl(1001, null, [], !0))
            };
            cX.Yw = function (a, b, c, d, e, f, h) {
                var k = b ? b.Ja() : null;
                k && (b = cX.ic(a, "image"), c = oW({paperSize: c, width: c, landscape: d, height: d, x: e, y: f, filename: h}, c, {width: b.width, height: b.height, filename: cX.ic(a, "filename")}), d = cX.ic(a, "clientside"), e = cX.f(d, function (a) {
                    $W(k, a.paperSize || a.width, a.landscape || a.height, a.x, a.y, a.filename)
                }), d.enabled ? hX(a, "pdf", c, e) : d.fallback ? $W(k, c.paperSize || c.width, c.landscape || c.height, c.x, c.y, c.filename) : $.kl(1001, null, [], !0))
            };
            cX.Zw = function (a, b, c, d, e) {
                var f = b ? b.Ja() : null;
                f && (b = cX.ic(a, "image"), c = oW({paperSize: c, width: c, landscape: d, height: d, filename: e}, c, {width: b.width, height: b.height, filename: cX.ic(a, "filename")}), d = cX.ic(a, "clientside"), e = cX.f(d, function (a) {
                    aX(f, a.paperSize || a.width, a.landscape || a.height, a.filename)
                }), d.enabled ? hX(a, "svg", c, e) : d.fallback ? aX(f, c.paperSize || c.width, c.landscape || c.height, c.filename) : $.kl(1001, null, [], !0))
            };
            cX.Nq = function (a, b, c, d) {
                return (b = b ? b.Ja() : null) ? (a = cX.ic(a, "image"), c = oW({paperSize: c, width: c, landscape: d, height: d}, c, {width: a.width, height: a.height}), b.Nq(c.paperSize || c.width, c.landscape || c.height)) : ""
            };
            cX.P = function (a, b, c, d) {
                d = d || cX.ic(a, "filename");
                a = cX.ic(a, "clientside");
                var e = cX.ba(b, d, c), f = cX.f(a, e);
                if (a.enabled) try {
                    eX(new window.Blob([b], {type: fX[c] || ""}), d, c)
                } catch (h) {
                    f()
                } else a.fallback ? e() : $.kl(1001, null, [], !0)
            };
            cX.QO = function (a, b, c) {
                cX.P(a, b, "xml", c)
            };
            cX.PO = function (a, b, c) {
                cX.P(a, b, "json", c)
            };
            cX.bz = function (a, b, c) {
                cX.P(a, b, "csv", c)
            };
            cX.cz = function (a, b, c) {
                var d = cX.ic(a, "clientside");
                c = c || cX.ic(a, "filename");
                var e = cX.ba(b, c, "xlsx"), f = cX.f(d, e);
                d.enabled ? vja(a, b, c, f) : d.fallback ? e() : $.kl(1001, null, [], !0)
            };
            cX.Fu = function (a, b, c, d, e, f, h, k, l) {
                if (b = b ? b.Ja() : null) {
                    var m = cX.ic(a, "image");
                    a = oW({onSuccess: c, onError: d, asBase64: e, width: f, height: h, quality: k, filename: l}, c, {width: m.width, height: m.height, filename: cX.ic(a, "filename")});
                    b.Fu(a.onSuccess, a.onError, a.asBase64, a.width, a.height, a.quality, a.filename)
                }
            };
            cX.DB = function (a, b, c, d, e, f, h, k, l, m) {
                if (b = b ? b.Ja() : null) {
                    var p = cX.ic(a, "image");
                    a = oW({onSuccess: c, onError: d, asBase64: e, width: f, height: h, quality: k, forceTransparentWhite: l, filename: m}, c, {width: p.width, height: p.height, filename: cX.ic(a, "filename")});
                    b.DB(a.onSuccess, a.onError, a.asBase64, a.width, a.height, a.quality, a.forceTransparentWhite, a.filename)
                }
            };
            cX.FB = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ja() : null) {
                    var l = cX.ic(a, "image");
                    a = oW({onSuccess: c, onError: d, asBase64: e, paperSize: f, width: f, landscape: h, height: h, filename: k}, c, {width: l.width, height: l.height, filename: cX.ic(a, "filename")});
                    b.FB(a.onSuccess, a.onError, a.asBase64, a.paperSize || a.width, a.landscape || a.height, a.filename)
                }
            };
            cX.EB = function (a, b, c, d, e, f, h, k, l, m) {
                if (b = b ? b.Ja() : null) {
                    var p = cX.ic(a, "image");
                    a = oW({onSuccess: c, onError: d, asBase64: e, paperSize: f, width: f, landscape: h, height: h, x: k, y: l, filename: m}, c, {width: p.width, height: p.height, filename: cX.ic(a, "filename")});
                    b.EB(a.onSuccess, a.onError, a.asBase64, a.paperSize || a.width, a.landscape || a.height, a.x, a.y, a.filename)
                }
            };
            cX.zA = function (a, b, c, d, e, f, h) {
                if (b = b ? b.Ja() : null) a = cX.ic(a, "image"), c = oW({onSuccess: c, onError: d, width: e, height: f, quality: h}, c, {width: a.width, height: a.height}), b.zA(c.onSuccess, c.onError, c.width, c.height, c.quality)
            };
            cX.wA = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ja() : null) a = cX.ic(a, "image"), c = oW({onSuccess: c, onError: d, width: e, height: f, quality: h, forceTransparentWhite: k}, c, {width: a.width, height: a.height}), b.wA(c.onSuccess, c.onError, c.width, c.height, c.quality, c.forceTransparentWhite)
            };
            cX.BA = function (a, b, c, d, e, f) {
                if (b = b ? b.Ja() : null) a = cX.ic(a, "image"), c = oW({onSuccess: c, onError: d, paperSize: e, width: e, landscape: f, height: f}, c, {width: a.width, height: a.height}), b.BA(c.onSuccess, c.onError, c.paperSize || c.width, c.landscape || c.height)
            };
            cX.yA = function (a, b, c, d, e, f, h, k) {
                if (b = b ? b.Ja() : null) a = cX.ic(a, "image"), c = oW({onSuccess: c, onError: d, paperSize: e, width: e, landscape: f, height: f, x: h, y: k}, c, {width: a.width, height: a.height}), b.yA(c.onSuccess, c.onError, c.paperSize || c.width, c.landscape || c.height, c.x, c.y)
            };
            cX.print = function (a, b, c, d) {
                if (a = b ? b.Ja() : null) c = oW({paperSize: c, landscape: d}, c), a.print(c.paperSize, c.landscape)
            };
            cX.JE = function (a, b, c, d, e, f) {
                var h = cX.ic(a, "facebook"), k = oW({caption: c, link: d, name: e, description: f}, c, h), l = $.ll.open("", "_blank", "scrollbars=yes, width=550, height=550, top=" + Number(window.screen.height / 2 - 275) + ", left=" + Number(window.screen.width / 2 - 275));
                cX.Fu(a, b, function (a) {
                    a = {app_id: h.appId, display: "popup", picture: a};
                    a.caption = k.caption;
                    k.link && (a.link = k.link, k.name && (a.name = k.name), k.description && (a.description = k.description));
                    var b = "", c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    l.location.href = "https://www.facebook.com/dialog/feed?" +
                        b
                }, void 0, !1, h.width, h.height)
            };
            cX.ME = function (a, b) {
                var c = cX.ic(a, "twitter"), d = Number(window.screen.width / 2 - 300), e = Number(window.screen.height / 2 - 260);
                var f = $.De(window.document, "INPUT", "ac-share-twitter-data-input", void 0);
                if (0 < f.length) {
                    var h = f[0];
                    f = $.De(window.document, "FORM", "ac-share-twitter-form", void 0)[0]
                } else {
                    f = $.Te(window.document, "FORM");
                    $.Rj(f, "ac-share-twitter-form");
                    f.target = "Map";
                    f.method = "POST";
                    f.action = c.url;
                    h = $.Te(window.document, "INPUT");
                    $.Rj(h, "ac-share-twitter-data-input");
                    h.type = "hidden";
                    h.name = "data";
                    var k =
                        $.Te(window.document, "INPUT");
                    k.type = "hidden";
                    k.name = "dataType";
                    k.value = "svg";
                    f.appendChild(h);
                    f.appendChild(k);
                    mW("BODY")[0].appendChild(f)
                }
                $.n(f) && $.n(h) && (h.value = cX.Nq(a, b, c.width, c.height), $.ll.open("", "Map", "status=0,title=0,height=520,width=600,scrollbars=1, width=600, height=520, top=" + e + ", left=" + d) && f.submit())
            };
            cX.KE = function (a, b, c, d) {
                var e = cX.ic(a, "linkedin"), f = oW({caption: c, description: d}, c, e), h = $.ll.open("", "_blank", "scrollbars=yes, width=550, height=520, top=" + Number(window.screen.height / 2 - 260) + ", left=" + Number(window.screen.width / 2 - 275));
                cX.Fu(a, b, function (a) {
                    a = {mini: "true", url: a};
                    a.title = f.caption;
                    f.description && (a.summary = f.description);
                    var b = "", c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    h.location.href = "https://www.linkedin.com/shareArticle?" + b
                }, void 0, !1, e.width, e.height)
            };
            cX.LE = function (a, b, c, d) {
                var e = cX.ic(a, "pinterest"), f = oW({link: c, description: d}, c, e), h = $.ll.open("", "_blank", "scrollbars=yes, width=550, height=520, top=" + Number(window.screen.height / 2 - 260) + ", left=" + Number(window.screen.width / 2 - 275));
                cX.Fu(a, b, function (a) {
                    a = {media: a};
                    f.link && (a.url = f.link);
                    f.description && (a.description = f.description);
                    var b = "", c;
                    for (c in a) b += b ? "&" : "", b += c + "=" + a[c];
                    h.location.href = "https://pinterest.com/pin/create/link?" + b
                }, void 0, !1, e.width, e.height)
            };
            $.E("anychart.exports", cX);
            $.E("anychart.exports.server", cX.na);
        }).call(this, $)
    }
    if (!_.data_adapter) {
        _.data_adapter = 1;
        (function ($) {
            var Cja = function (a) {
                    try {
                        return a.b ? a.b.responseText : ""
                    } catch (b) {
                        return ""
                    }
                }, kX = function (a, b, c, d, e, f, h, k, l) {
                    var m = Dja("fromXml", c, l);
                    m && (b = (0, $.pa)(kX.b, void 0, b, c, l, m), $.DW(a, b, d, e, f, h, k))
                }, Dja = function (a, b, c) {
                    var d = $.ll.anychart;
                    if (!d) return b && b.call(c, 500, "AnyChart in not present on the page."), null;
                    d = d[a];
                    return d ? d : (b && b.call(c, 500, $.ic("anychart.%s is not available.", a)), null)
                }, Eja = function (a) {
                    return [$.PW(a) || null]
                }, Fja = function (a) {
                    try {
                        var b = a.b ? a.b.responseXML : null
                    } catch (c) {
                        b = null
                    }
                    return [$.iq.utils.xml2json(b).data]
                },
                Gja = function (a) {
                    a = $.PW(a);
                    for (var b = a.feed.entry, c = {title: a.feed.title.$t, rows: []}, d = 0, e = b.length; d < e; d++) {
                        var f = b[d], h = f.gs$cell.$t, k = f.gs$cell.col - 1;
                        f = f.gs$cell.row - 1;
                        c.rows[f] || (c.rows[f] = []);
                        c.rows[f][k] = h
                    }
                    c.header = c.rows.shift();
                    return [c, a]
                }, Hja = function (a) {
                    return [Cja(a)]
                }, lX = function (a, b, c, d, e) {
                    e = e.target;
                    if ($.HW(e)) {
                        try {
                            var f = a(e)
                        } catch (h) {
                            c && c.call(d, 500, h)
                        }
                        b.apply(d, f)
                    } else c && c.call(d, e.i, $.QW(e))
                };
            $.iq.exports || $.il(4, null, ["Exporting"]);
            kX.b = function (a, b, c, d, e) {
                e = e.target;
                if ($.HW(e)) {
                    try {
                        var f = d(Cja(e))
                    } catch (h) {
                        b && b.call(c, 500, h)
                    }
                    a ? $.z(a) ? (f.container(a), f.draw()) : $.D(a) && a.call(c, f) : f.container() && f.draw()
                } else b && b.call(c, e.i, $.QW(e))
            };
            $.E("anychart.fromXmlFile", kX);
            $.E("anychart.fromJsonFile", function (a, b, c, d, e, f, h, k, l) {
                var m = Dja("fromJson", c, l);
                m && (b = (0, $.pa)(kX.b, void 0, b, c, l, m), $.DW(a, b, d, e, f, h, k))
            });
            $.E("anychart.data.parseHtmlTable", function (a, b, c, d, e, f) {
                var h = window.document.querySelector(a || "table");
                a = null;
                var k;
                if (h) {
                    d = d || "tr:first-child th";
                    c = c || "td, th";
                    b = b || "tr";
                    a = {};
                    (e = h.querySelector(e || "caption")) && (k = f ? f.call(void 0, e) : e.innerText);
                    k && (a.title = k);
                    var l = h.querySelectorAll(d), m = [];
                    e = null;
                    d = 0;
                    for (k = l.length; d < k; d++) {
                        var p = l[d];
                        p && !e && (e = $.cf(p));
                        m.push(f ? f.call(void 0, p) : p.innerText)
                    }
                    m.length && (a.header = m);
                    if ((b = h.querySelectorAll(b)) && b.length) {
                        h = [];
                        d = 0;
                        for (k = b.length; d < k; d++) if (m = b[d],
                        m != e) {
                            l = [];
                            if ((m = m.querySelectorAll(c)) && m.length) {
                                p = 0;
                                for (var q = m.length; p < q; p++) {
                                    var r = m[p];
                                    f ? l.push(f.call(void 0, r)) : l.push(r.innerText)
                                }
                            }
                            l.length && h.push(l)
                        }
                        a.rows = h
                    }
                }
                return a
            });
            $.E("anychart.data.loadJsonFile", function (a, b, c, d, e, f, h, k, l) {
                b = (0, $.pa)(lX, void 0, Eja, b, c, l);
                $.DW(a, b, d, e, f, h, k)
            });
            $.E("anychart.data.loadXmlFile", function (a, b, c, d, e, f, h, k, l) {
                b = (0, $.pa)(lX, void 0, Fja, b, c, l);
                $.DW(a, b, d, e, f, h, k)
            });
            $.E("anychart.data.loadCsvFile", function (a, b, c, d, e, f, h, k, l) {
                b = (0, $.pa)(lX, void 0, Hja, b, c, l);
                $.DW(a, b, d, e, f, h, k)
            });
            $.E("anychart.data.loadGoogleSpreadsheet", function (a, b, c, d, e) {
                b = (0, $.pa)(lX, void 0, Gja, b, c, e);
                $.z(a) ? (c = a, a = "od6") : (c = a.key, a = $.n(a.sheet) ? a.sheet : "od6");
                a = new $.pW("https://spreadsheets.google.com/feeds/cells/" + c + "/" + a + "/public/values");
                a.f.set("alt", "json");
                c = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, $.Qn)()).toString(36);
                a.f.set("zx", c);
                $.DW(a.toString(), b, "GET", null, null, d)
            });
        }).call(this, $)
    }
    $_ = window.anychart;
    $_.$ = $;
    $_._ = _
});