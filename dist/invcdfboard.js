var Hi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function M7(Ve) {
  return Ve && Ve.__esModule && Object.prototype.hasOwnProperty.call(Ve, "default") ? Ve.default : Ve;
}
var k7 = { exports: {} };
/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(Ve, He) {
  (function(ge, E) {
    Ve.exports = E();
  })(Hi, function() {
    return (
      /******/
      function(_) {
        var ge = {};
        function E(f) {
          if (ge[f])
            return ge[f].exports;
          var y = ge[f] = {
            /******/
            i: f,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return _[f].call(y.exports, y, y.exports, E), y.l = !0, y.exports;
        }
        return E.m = _, E.c = ge, E.d = function(f, y, g) {
          E.o(f, y) || Object.defineProperty(f, y, { enumerable: !0, get: g });
        }, E.r = function(f) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
        }, E.t = function(f, y) {
          if (y & 1 && (f = E(f)), y & 8 || y & 4 && typeof f == "object" && f && f.__esModule)
            return f;
          var g = /* @__PURE__ */ Object.create(null);
          if (E.r(g), Object.defineProperty(g, "default", { enumerable: !0, value: f }), y & 2 && typeof f != "string")
            for (var h in f)
              E.d(g, h, (function(S) {
                return f[S];
              }).bind(null, h));
          return g;
        }, E.n = function(f) {
          var y = f && f.__esModule ? (
            /******/
            function() {
              return f.default;
            }
          ) : (
            /******/
            function() {
              return f;
            }
          );
          return E.d(y, "a", y), y;
        }, E.o = function(f, y) {
          return Object.prototype.hasOwnProperty.call(f, y);
        }, E.p = "", E(E.s = 20);
      }([
        /* 0 */
        /***/
        function(_, ge) {
          var E = {};
          _.exports = E, function() {
            E._baseDelta = 1e3 / 60, E._nextId = 0, E._seed = 0, E._nowStartTime = +/* @__PURE__ */ new Date(), E._warnedOnce = {}, E._decomp = null, E.extend = function(y, g) {
              var h, S;
              typeof g == "boolean" ? (h = 2, S = g) : (h = 1, S = !0);
              for (var d = h; d < arguments.length; d++) {
                var w = arguments[d];
                if (w)
                  for (var l in w)
                    S && w[l] && w[l].constructor === Object && (!y[l] || y[l].constructor === Object) ? (y[l] = y[l] || {}, E.extend(y[l], S, w[l])) : y[l] = w[l];
              }
              return y;
            }, E.clone = function(y, g) {
              return E.extend({}, g, y);
            }, E.keys = function(y) {
              if (Object.keys)
                return Object.keys(y);
              var g = [];
              for (var h in y)
                g.push(h);
              return g;
            }, E.values = function(y) {
              var g = [];
              if (Object.keys) {
                for (var h = Object.keys(y), S = 0; S < h.length; S++)
                  g.push(y[h[S]]);
                return g;
              }
              for (var d in y)
                g.push(y[d]);
              return g;
            }, E.get = function(y, g, h, S) {
              g = g.split(".").slice(h, S);
              for (var d = 0; d < g.length; d += 1)
                y = y[g[d]];
              return y;
            }, E.set = function(y, g, h, S, d) {
              var w = g.split(".").slice(S, d);
              return E.get(y, g, 0, -1)[w[w.length - 1]] = h, h;
            }, E.shuffle = function(y) {
              for (var g = y.length - 1; g > 0; g--) {
                var h = Math.floor(E.random() * (g + 1)), S = y[g];
                y[g] = y[h], y[h] = S;
              }
              return y;
            }, E.choose = function(y) {
              return y[Math.floor(E.random() * y.length)];
            }, E.isElement = function(y) {
              return typeof HTMLElement < "u" ? y instanceof HTMLElement : !!(y && y.nodeType && y.nodeName);
            }, E.isArray = function(y) {
              return Object.prototype.toString.call(y) === "[object Array]";
            }, E.isFunction = function(y) {
              return typeof y == "function";
            }, E.isPlainObject = function(y) {
              return typeof y == "object" && y.constructor === Object;
            }, E.isString = function(y) {
              return toString.call(y) === "[object String]";
            }, E.clamp = function(y, g, h) {
              return y < g ? g : y > h ? h : y;
            }, E.sign = function(y) {
              return y < 0 ? -1 : 1;
            }, E.now = function() {
              if (typeof window < "u" && window.performance) {
                if (window.performance.now)
                  return window.performance.now();
                if (window.performance.webkitNow)
                  return window.performance.webkitNow();
              }
              return Date.now ? Date.now() : /* @__PURE__ */ new Date() - E._nowStartTime;
            }, E.random = function(y, g) {
              return y = typeof y < "u" ? y : 0, g = typeof g < "u" ? g : 1, y + f() * (g - y);
            };
            var f = function() {
              return E._seed = (E._seed * 9301 + 49297) % 233280, E._seed / 233280;
            };
            E.colorToNumber = function(y) {
              return y = y.replace("#", ""), y.length == 3 && (y = y.charAt(0) + y.charAt(0) + y.charAt(1) + y.charAt(1) + y.charAt(2) + y.charAt(2)), parseInt(y, 16);
            }, E.logLevel = 1, E.log = function() {
              console && E.logLevel > 0 && E.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, E.info = function() {
              console && E.logLevel > 0 && E.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, E.warn = function() {
              console && E.logLevel > 0 && E.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
            }, E.warnOnce = function() {
              var y = Array.prototype.slice.call(arguments).join(" ");
              E._warnedOnce[y] || (E.warn(y), E._warnedOnce[y] = !0);
            }, E.deprecated = function(y, g, h) {
              y[g] = E.chain(function() {
                E.warnOnce("🔅 deprecated 🔅", h);
              }, y[g]);
            }, E.nextId = function() {
              return E._nextId++;
            }, E.indexOf = function(y, g) {
              if (y.indexOf)
                return y.indexOf(g);
              for (var h = 0; h < y.length; h++)
                if (y[h] === g)
                  return h;
              return -1;
            }, E.map = function(y, g) {
              if (y.map)
                return y.map(g);
              for (var h = [], S = 0; S < y.length; S += 1)
                h.push(g(y[S]));
              return h;
            }, E.topologicalSort = function(y) {
              var g = [], h = [], S = [];
              for (var d in y)
                !h[d] && !S[d] && E._topologicalSort(d, h, S, y, g);
              return g;
            }, E._topologicalSort = function(y, g, h, S, d) {
              var w = S[y] || [];
              h[y] = !0;
              for (var l = 0; l < w.length; l += 1) {
                var t = w[l];
                h[t] || g[t] || E._topologicalSort(t, g, h, S, d);
              }
              h[y] = !1, g[y] = !0, d.push(y);
            }, E.chain = function() {
              for (var y = [], g = 0; g < arguments.length; g += 1) {
                var h = arguments[g];
                h._chained ? y.push.apply(y, h._chained) : y.push(h);
              }
              var S = function() {
                for (var d, w = new Array(arguments.length), l = 0, t = arguments.length; l < t; l++)
                  w[l] = arguments[l];
                for (l = 0; l < y.length; l += 1) {
                  var o = y[l].apply(d, w);
                  typeof o < "u" && (d = o);
                }
                return d;
              };
              return S._chained = y, S;
            }, E.chainPathBefore = function(y, g, h) {
              return E.set(y, g, E.chain(
                h,
                E.get(y, g)
              ));
            }, E.chainPathAfter = function(y, g, h) {
              return E.set(y, g, E.chain(
                E.get(y, g),
                h
              ));
            }, E.setDecomp = function(y) {
              E._decomp = y;
            }, E.getDecomp = function() {
              var y = E._decomp;
              try {
                !y && typeof window < "u" && (y = window.decomp), !y && typeof Hi < "u" && (y = Hi.decomp);
              } catch {
                y = null;
              }
              return y;
            };
          }();
        },
        /* 1 */
        /***/
        function(_, ge) {
          var E = {};
          _.exports = E, function() {
            E.create = function(f) {
              var y = {
                min: { x: 0, y: 0 },
                max: { x: 0, y: 0 }
              };
              return f && E.update(y, f), y;
            }, E.update = function(f, y, g) {
              f.min.x = 1 / 0, f.max.x = -1 / 0, f.min.y = 1 / 0, f.max.y = -1 / 0;
              for (var h = 0; h < y.length; h++) {
                var S = y[h];
                S.x > f.max.x && (f.max.x = S.x), S.x < f.min.x && (f.min.x = S.x), S.y > f.max.y && (f.max.y = S.y), S.y < f.min.y && (f.min.y = S.y);
              }
              g && (g.x > 0 ? f.max.x += g.x : f.min.x += g.x, g.y > 0 ? f.max.y += g.y : f.min.y += g.y);
            }, E.contains = function(f, y) {
              return y.x >= f.min.x && y.x <= f.max.x && y.y >= f.min.y && y.y <= f.max.y;
            }, E.overlaps = function(f, y) {
              return f.min.x <= y.max.x && f.max.x >= y.min.x && f.max.y >= y.min.y && f.min.y <= y.max.y;
            }, E.translate = function(f, y) {
              f.min.x += y.x, f.max.x += y.x, f.min.y += y.y, f.max.y += y.y;
            }, E.shift = function(f, y) {
              var g = f.max.x - f.min.x, h = f.max.y - f.min.y;
              f.min.x = y.x, f.max.x = y.x + g, f.min.y = y.y, f.max.y = y.y + h;
            };
          }();
        },
        /* 2 */
        /***/
        function(_, ge) {
          var E = {};
          _.exports = E, function() {
            E.create = function(f, y) {
              return { x: f || 0, y: y || 0 };
            }, E.clone = function(f) {
              return { x: f.x, y: f.y };
            }, E.magnitude = function(f) {
              return Math.sqrt(f.x * f.x + f.y * f.y);
            }, E.magnitudeSquared = function(f) {
              return f.x * f.x + f.y * f.y;
            }, E.rotate = function(f, y, g) {
              var h = Math.cos(y), S = Math.sin(y);
              g || (g = {});
              var d = f.x * h - f.y * S;
              return g.y = f.x * S + f.y * h, g.x = d, g;
            }, E.rotateAbout = function(f, y, g, h) {
              var S = Math.cos(y), d = Math.sin(y);
              h || (h = {});
              var w = g.x + ((f.x - g.x) * S - (f.y - g.y) * d);
              return h.y = g.y + ((f.x - g.x) * d + (f.y - g.y) * S), h.x = w, h;
            }, E.normalise = function(f) {
              var y = E.magnitude(f);
              return y === 0 ? { x: 0, y: 0 } : { x: f.x / y, y: f.y / y };
            }, E.dot = function(f, y) {
              return f.x * y.x + f.y * y.y;
            }, E.cross = function(f, y) {
              return f.x * y.y - f.y * y.x;
            }, E.cross3 = function(f, y, g) {
              return (y.x - f.x) * (g.y - f.y) - (y.y - f.y) * (g.x - f.x);
            }, E.add = function(f, y, g) {
              return g || (g = {}), g.x = f.x + y.x, g.y = f.y + y.y, g;
            }, E.sub = function(f, y, g) {
              return g || (g = {}), g.x = f.x - y.x, g.y = f.y - y.y, g;
            }, E.mult = function(f, y) {
              return { x: f.x * y, y: f.y * y };
            }, E.div = function(f, y) {
              return { x: f.x / y, y: f.y / y };
            }, E.perp = function(f, y) {
              return y = y === !0 ? -1 : 1, { x: y * -f.y, y: y * f.x };
            }, E.neg = function(f) {
              return { x: -f.x, y: -f.y };
            }, E.angle = function(f, y) {
              return Math.atan2(y.y - f.y, y.x - f.x);
            }, E._temp = [
              E.create(),
              E.create(),
              E.create(),
              E.create(),
              E.create(),
              E.create()
            ];
          }();
        },
        /* 3 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(2), g = E(0);
          (function() {
            f.create = function(h, S) {
              for (var d = [], w = 0; w < h.length; w++) {
                var l = h[w], t = {
                  x: l.x,
                  y: l.y,
                  index: w,
                  body: S,
                  isInternal: !1
                };
                d.push(t);
              }
              return d;
            }, f.fromPath = function(h, S) {
              var d = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, w = [];
              return h.replace(d, function(l, t, o) {
                w.push({ x: parseFloat(t), y: parseFloat(o) });
              }), f.create(w, S);
            }, f.centre = function(h) {
              for (var S = f.area(h, !0), d = { x: 0, y: 0 }, w, l, t, o = 0; o < h.length; o++)
                t = (o + 1) % h.length, w = y.cross(h[o], h[t]), l = y.mult(y.add(h[o], h[t]), w), d = y.add(d, l);
              return y.div(d, 6 * S);
            }, f.mean = function(h) {
              for (var S = { x: 0, y: 0 }, d = 0; d < h.length; d++)
                S.x += h[d].x, S.y += h[d].y;
              return y.div(S, h.length);
            }, f.area = function(h, S) {
              for (var d = 0, w = h.length - 1, l = 0; l < h.length; l++)
                d += (h[w].x - h[l].x) * (h[w].y + h[l].y), w = l;
              return S ? d / 2 : Math.abs(d) / 2;
            }, f.inertia = function(h, S) {
              for (var d = 0, w = 0, l = h, t, o, i = 0; i < l.length; i++)
                o = (i + 1) % l.length, t = Math.abs(y.cross(l[o], l[i])), d += t * (y.dot(l[o], l[o]) + y.dot(l[o], l[i]) + y.dot(l[i], l[i])), w += t;
              return S / 6 * (d / w);
            }, f.translate = function(h, S, d) {
              d = typeof d < "u" ? d : 1;
              var w = h.length, l = S.x * d, t = S.y * d, o;
              for (o = 0; o < w; o++)
                h[o].x += l, h[o].y += t;
              return h;
            }, f.rotate = function(h, S, d) {
              if (S !== 0) {
                var w = Math.cos(S), l = Math.sin(S), t = d.x, o = d.y, i = h.length, c, P, q, D;
                for (D = 0; D < i; D++)
                  c = h[D], P = c.x - t, q = c.y - o, c.x = t + (P * w - q * l), c.y = o + (P * l + q * w);
                return h;
              }
            }, f.contains = function(h, S) {
              for (var d = S.x, w = S.y, l = h.length, t = h[l - 1], o, i = 0; i < l; i++) {
                if (o = h[i], (d - t.x) * (o.y - t.y) + (w - t.y) * (t.x - o.x) > 0)
                  return !1;
                t = o;
              }
              return !0;
            }, f.scale = function(h, S, d, w) {
              if (S === 1 && d === 1)
                return h;
              w = w || f.centre(h);
              for (var l, t, o = 0; o < h.length; o++)
                l = h[o], t = y.sub(l, w), h[o].x = w.x + t.x * S, h[o].y = w.y + t.y * d;
              return h;
            }, f.chamfer = function(h, S, d, w, l) {
              typeof S == "number" ? S = [S] : S = S || [8], d = typeof d < "u" ? d : -1, w = w || 2, l = l || 14;
              for (var t = [], o = 0; o < h.length; o++) {
                var i = h[o - 1 >= 0 ? o - 1 : h.length - 1], c = h[o], P = h[(o + 1) % h.length], q = S[o < S.length ? o : S.length - 1];
                if (q === 0) {
                  t.push(c);
                  continue;
                }
                var D = y.normalise({
                  x: c.y - i.y,
                  y: i.x - c.x
                }), U = y.normalise({
                  x: P.y - c.y,
                  y: c.x - P.x
                }), x = Math.sqrt(2 * Math.pow(q, 2)), T = y.mult(g.clone(D), q), L = y.normalise(y.mult(y.add(D, U), 0.5)), I = y.sub(c, y.mult(L, x)), N = d;
                d === -1 && (N = Math.pow(q, 0.32) * 1.75), N = g.clamp(N, w, l), N % 2 === 1 && (N += 1);
                for (var F = Math.acos(y.dot(D, U)), G = F / N, m = 0; m < N; m++)
                  t.push(y.add(y.rotate(T, G * m), I));
              }
              return t;
            }, f.clockwiseSort = function(h) {
              var S = f.mean(h);
              return h.sort(function(d, w) {
                return y.angle(S, d) - y.angle(S, w);
              }), h;
            }, f.isConvex = function(h) {
              var S = 0, d = h.length, w, l, t, o;
              if (d < 3)
                return null;
              for (w = 0; w < d; w++)
                if (l = (w + 1) % d, t = (w + 2) % d, o = (h[l].x - h[w].x) * (h[t].y - h[l].y), o -= (h[l].y - h[w].y) * (h[t].x - h[l].x), o < 0 ? S |= 1 : o > 0 && (S |= 2), S === 3)
                  return !1;
              return S !== 0 ? !0 : null;
            }, f.hull = function(h) {
              var S = [], d = [], w, l;
              for (h = h.slice(0), h.sort(function(t, o) {
                var i = t.x - o.x;
                return i !== 0 ? i : t.y - o.y;
              }), l = 0; l < h.length; l += 1) {
                for (w = h[l]; d.length >= 2 && y.cross3(d[d.length - 2], d[d.length - 1], w) <= 0; )
                  d.pop();
                d.push(w);
              }
              for (l = h.length - 1; l >= 0; l -= 1) {
                for (w = h[l]; S.length >= 2 && y.cross3(S[S.length - 2], S[S.length - 1], w) <= 0; )
                  S.pop();
                S.push(w);
              }
              return S.pop(), d.pop(), S.concat(d);
            };
          })();
        },
        /* 4 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(3), g = E(2), h = E(7), S = E(0), d = E(1), w = E(11);
          (function() {
            f._timeCorrection = !0, f._inertiaScale = 4, f._nextCollidingGroupId = 1, f._nextNonCollidingGroupId = -1, f._nextCategory = 1, f._baseDelta = 1e3 / 60, f.create = function(t) {
              var o = {
                id: S.nextId(),
                type: "body",
                label: "Body",
                parts: [],
                plugin: {},
                angle: 0,
                vertices: y.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                position: { x: 0, y: 0 },
                force: { x: 0, y: 0 },
                torque: 0,
                positionImpulse: { x: 0, y: 0 },
                constraintImpulse: { x: 0, y: 0, angle: 0 },
                totalContacts: 0,
                speed: 0,
                angularSpeed: 0,
                velocity: { x: 0, y: 0 },
                angularVelocity: 0,
                isSensor: !1,
                isStatic: !1,
                isSleeping: !1,
                motion: 0,
                sleepThreshold: 60,
                density: 1e-3,
                restitution: 0,
                friction: 0.1,
                frictionStatic: 0.5,
                frictionAir: 0.01,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                },
                slop: 0.05,
                timeScale: 1,
                render: {
                  visible: !0,
                  opacity: 1,
                  strokeStyle: null,
                  fillStyle: null,
                  lineWidth: null,
                  sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                  }
                },
                events: null,
                bounds: null,
                chamfer: null,
                circleRadius: 0,
                positionPrev: null,
                anglePrev: 0,
                parent: null,
                axes: null,
                area: 0,
                mass: 0,
                inertia: 0,
                deltaTime: 16.666666666666668,
                _original: null
              }, i = S.extend(o, t);
              return l(i, t), i;
            }, f.nextGroup = function(t) {
              return t ? f._nextNonCollidingGroupId-- : f._nextCollidingGroupId++;
            }, f.nextCategory = function() {
              return f._nextCategory = f._nextCategory << 1, f._nextCategory;
            };
            var l = function(t, o) {
              o = o || {}, f.set(t, {
                bounds: t.bounds || d.create(t.vertices),
                positionPrev: t.positionPrev || g.clone(t.position),
                anglePrev: t.anglePrev || t.angle,
                vertices: t.vertices,
                parts: t.parts || [t],
                isStatic: t.isStatic,
                isSleeping: t.isSleeping,
                parent: t.parent || t
              }), y.rotate(t.vertices, t.angle, t.position), w.rotate(t.axes, t.angle), d.update(t.bounds, t.vertices, t.velocity), f.set(t, {
                axes: o.axes || t.axes,
                area: o.area || t.area,
                mass: o.mass || t.mass,
                inertia: o.inertia || t.inertia
              });
              var i = t.isStatic ? "#14151f" : S.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), c = t.isStatic ? "#555" : "#ccc", P = t.isStatic && t.render.fillStyle === null ? 1 : 0;
              t.render.fillStyle = t.render.fillStyle || i, t.render.strokeStyle = t.render.strokeStyle || c, t.render.lineWidth = t.render.lineWidth || P, t.render.sprite.xOffset += -(t.bounds.min.x - t.position.x) / (t.bounds.max.x - t.bounds.min.x), t.render.sprite.yOffset += -(t.bounds.min.y - t.position.y) / (t.bounds.max.y - t.bounds.min.y);
            };
            f.set = function(t, o, i) {
              var c;
              typeof o == "string" && (c = o, o = {}, o[c] = i);
              for (c in o)
                if (Object.prototype.hasOwnProperty.call(o, c))
                  switch (i = o[c], c) {
                    case "isStatic":
                      f.setStatic(t, i);
                      break;
                    case "isSleeping":
                      h.set(t, i);
                      break;
                    case "mass":
                      f.setMass(t, i);
                      break;
                    case "density":
                      f.setDensity(t, i);
                      break;
                    case "inertia":
                      f.setInertia(t, i);
                      break;
                    case "vertices":
                      f.setVertices(t, i);
                      break;
                    case "position":
                      f.setPosition(t, i);
                      break;
                    case "angle":
                      f.setAngle(t, i);
                      break;
                    case "velocity":
                      f.setVelocity(t, i);
                      break;
                    case "angularVelocity":
                      f.setAngularVelocity(t, i);
                      break;
                    case "speed":
                      f.setSpeed(t, i);
                      break;
                    case "angularSpeed":
                      f.setAngularSpeed(t, i);
                      break;
                    case "parts":
                      f.setParts(t, i);
                      break;
                    case "centre":
                      f.setCentre(t, i);
                      break;
                    default:
                      t[c] = i;
                  }
            }, f.setStatic = function(t, o) {
              for (var i = 0; i < t.parts.length; i++) {
                var c = t.parts[i];
                c.isStatic = o, o ? (c._original = {
                  restitution: c.restitution,
                  friction: c.friction,
                  mass: c.mass,
                  inertia: c.inertia,
                  density: c.density,
                  inverseMass: c.inverseMass,
                  inverseInertia: c.inverseInertia
                }, c.restitution = 0, c.friction = 1, c.mass = c.inertia = c.density = 1 / 0, c.inverseMass = c.inverseInertia = 0, c.positionPrev.x = c.position.x, c.positionPrev.y = c.position.y, c.anglePrev = c.angle, c.angularVelocity = 0, c.speed = 0, c.angularSpeed = 0, c.motion = 0) : c._original && (c.restitution = c._original.restitution, c.friction = c._original.friction, c.mass = c._original.mass, c.inertia = c._original.inertia, c.density = c._original.density, c.inverseMass = c._original.inverseMass, c.inverseInertia = c._original.inverseInertia, c._original = null);
              }
            }, f.setMass = function(t, o) {
              var i = t.inertia / (t.mass / 6);
              t.inertia = i * (o / 6), t.inverseInertia = 1 / t.inertia, t.mass = o, t.inverseMass = 1 / t.mass, t.density = t.mass / t.area;
            }, f.setDensity = function(t, o) {
              f.setMass(t, o * t.area), t.density = o;
            }, f.setInertia = function(t, o) {
              t.inertia = o, t.inverseInertia = 1 / t.inertia;
            }, f.setVertices = function(t, o) {
              o[0].body === t ? t.vertices = o : t.vertices = y.create(o, t), t.axes = w.fromVertices(t.vertices), t.area = y.area(t.vertices), f.setMass(t, t.density * t.area);
              var i = y.centre(t.vertices);
              y.translate(t.vertices, i, -1), f.setInertia(t, f._inertiaScale * y.inertia(t.vertices, t.mass)), y.translate(t.vertices, t.position), d.update(t.bounds, t.vertices, t.velocity);
            }, f.setParts = function(t, o, i) {
              var c;
              for (o = o.slice(0), t.parts.length = 0, t.parts.push(t), t.parent = t, c = 0; c < o.length; c++) {
                var P = o[c];
                P !== t && (P.parent = t, t.parts.push(P));
              }
              if (t.parts.length !== 1) {
                if (i = typeof i < "u" ? i : !0, i) {
                  var q = [];
                  for (c = 0; c < o.length; c++)
                    q = q.concat(o[c].vertices);
                  y.clockwiseSort(q);
                  var D = y.hull(q), U = y.centre(D);
                  f.setVertices(t, D), y.translate(t.vertices, U);
                }
                var x = f._totalProperties(t);
                t.area = x.area, t.parent = t, t.position.x = x.centre.x, t.position.y = x.centre.y, t.positionPrev.x = x.centre.x, t.positionPrev.y = x.centre.y, f.setMass(t, x.mass), f.setInertia(t, x.inertia), f.setPosition(t, x.centre);
              }
            }, f.setCentre = function(t, o, i) {
              i ? (t.positionPrev.x += o.x, t.positionPrev.y += o.y, t.position.x += o.x, t.position.y += o.y) : (t.positionPrev.x = o.x - (t.position.x - t.positionPrev.x), t.positionPrev.y = o.y - (t.position.y - t.positionPrev.y), t.position.x = o.x, t.position.y = o.y);
            }, f.setPosition = function(t, o, i) {
              var c = g.sub(o, t.position);
              i ? (t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.velocity.x = c.x, t.velocity.y = c.y, t.speed = g.magnitude(c)) : (t.positionPrev.x += c.x, t.positionPrev.y += c.y);
              for (var P = 0; P < t.parts.length; P++) {
                var q = t.parts[P];
                q.position.x += c.x, q.position.y += c.y, y.translate(q.vertices, c), d.update(q.bounds, q.vertices, t.velocity);
              }
            }, f.setAngle = function(t, o, i) {
              var c = o - t.angle;
              i ? (t.anglePrev = t.angle, t.angularVelocity = c, t.angularSpeed = Math.abs(c)) : t.anglePrev += c;
              for (var P = 0; P < t.parts.length; P++) {
                var q = t.parts[P];
                q.angle += c, y.rotate(q.vertices, c, t.position), w.rotate(q.axes, c), d.update(q.bounds, q.vertices, t.velocity), P > 0 && g.rotateAbout(q.position, c, t.position, q.position);
              }
            }, f.setVelocity = function(t, o) {
              var i = t.deltaTime / f._baseDelta;
              t.positionPrev.x = t.position.x - o.x * i, t.positionPrev.y = t.position.y - o.y * i, t.velocity.x = (t.position.x - t.positionPrev.x) / i, t.velocity.y = (t.position.y - t.positionPrev.y) / i, t.speed = g.magnitude(t.velocity);
            }, f.getVelocity = function(t) {
              var o = f._baseDelta / t.deltaTime;
              return {
                x: (t.position.x - t.positionPrev.x) * o,
                y: (t.position.y - t.positionPrev.y) * o
              };
            }, f.getSpeed = function(t) {
              return g.magnitude(f.getVelocity(t));
            }, f.setSpeed = function(t, o) {
              f.setVelocity(t, g.mult(g.normalise(f.getVelocity(t)), o));
            }, f.setAngularVelocity = function(t, o) {
              var i = t.deltaTime / f._baseDelta;
              t.anglePrev = t.angle - o * i, t.angularVelocity = (t.angle - t.anglePrev) / i, t.angularSpeed = Math.abs(t.angularVelocity);
            }, f.getAngularVelocity = function(t) {
              return (t.angle - t.anglePrev) * f._baseDelta / t.deltaTime;
            }, f.getAngularSpeed = function(t) {
              return Math.abs(f.getAngularVelocity(t));
            }, f.setAngularSpeed = function(t, o) {
              f.setAngularVelocity(t, S.sign(f.getAngularVelocity(t)) * o);
            }, f.translate = function(t, o, i) {
              f.setPosition(t, g.add(t.position, o), i);
            }, f.rotate = function(t, o, i, c) {
              if (!i)
                f.setAngle(t, t.angle + o, c);
              else {
                var P = Math.cos(o), q = Math.sin(o), D = t.position.x - i.x, U = t.position.y - i.y;
                f.setPosition(t, {
                  x: i.x + (D * P - U * q),
                  y: i.y + (D * q + U * P)
                }, c), f.setAngle(t, t.angle + o, c);
              }
            }, f.scale = function(t, o, i, c) {
              var P = 0, q = 0;
              c = c || t.position;
              for (var D = 0; D < t.parts.length; D++) {
                var U = t.parts[D];
                y.scale(U.vertices, o, i, c), U.axes = w.fromVertices(U.vertices), U.area = y.area(U.vertices), f.setMass(U, t.density * U.area), y.translate(U.vertices, { x: -U.position.x, y: -U.position.y }), f.setInertia(U, f._inertiaScale * y.inertia(U.vertices, U.mass)), y.translate(U.vertices, { x: U.position.x, y: U.position.y }), D > 0 && (P += U.area, q += U.inertia), U.position.x = c.x + (U.position.x - c.x) * o, U.position.y = c.y + (U.position.y - c.y) * i, d.update(U.bounds, U.vertices, t.velocity);
              }
              t.parts.length > 1 && (t.area = P, t.isStatic || (f.setMass(t, t.density * P), f.setInertia(t, q))), t.circleRadius && (o === i ? t.circleRadius *= o : t.circleRadius = null);
            }, f.update = function(t, o) {
              o = (typeof o < "u" ? o : 1e3 / 60) * t.timeScale;
              var i = o * o, c = f._timeCorrection ? o / (t.deltaTime || o) : 1, P = 1 - t.frictionAir * (o / S._baseDelta), q = (t.position.x - t.positionPrev.x) * c, D = (t.position.y - t.positionPrev.y) * c;
              t.velocity.x = q * P + t.force.x / t.mass * i, t.velocity.y = D * P + t.force.y / t.mass * i, t.positionPrev.x = t.position.x, t.positionPrev.y = t.position.y, t.position.x += t.velocity.x, t.position.y += t.velocity.y, t.deltaTime = o, t.angularVelocity = (t.angle - t.anglePrev) * P * c + t.torque / t.inertia * i, t.anglePrev = t.angle, t.angle += t.angularVelocity;
              for (var U = 0; U < t.parts.length; U++) {
                var x = t.parts[U];
                y.translate(x.vertices, t.velocity), U > 0 && (x.position.x += t.velocity.x, x.position.y += t.velocity.y), t.angularVelocity !== 0 && (y.rotate(x.vertices, t.angularVelocity, t.position), w.rotate(x.axes, t.angularVelocity), U > 0 && g.rotateAbout(x.position, t.angularVelocity, t.position, x.position)), d.update(x.bounds, x.vertices, t.velocity);
              }
            }, f.updateVelocities = function(t) {
              var o = f._baseDelta / t.deltaTime, i = t.velocity;
              i.x = (t.position.x - t.positionPrev.x) * o, i.y = (t.position.y - t.positionPrev.y) * o, t.speed = Math.sqrt(i.x * i.x + i.y * i.y), t.angularVelocity = (t.angle - t.anglePrev) * o, t.angularSpeed = Math.abs(t.angularVelocity);
            }, f.applyForce = function(t, o, i) {
              var c = { x: o.x - t.position.x, y: o.y - t.position.y };
              t.force.x += i.x, t.force.y += i.y, t.torque += c.x * i.y - c.y * i.x;
            }, f._totalProperties = function(t) {
              for (var o = {
                mass: 0,
                area: 0,
                inertia: 0,
                centre: { x: 0, y: 0 }
              }, i = t.parts.length === 1 ? 0 : 1; i < t.parts.length; i++) {
                var c = t.parts[i], P = c.mass !== 1 / 0 ? c.mass : 1;
                o.mass += P, o.area += c.area, o.inertia += c.inertia, o.centre = g.add(o.centre, g.mult(c.position, P));
              }
              return o.centre = g.div(o.centre, o.mass), o;
            };
          })();
        },
        /* 5 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(0);
          (function() {
            f.on = function(g, h, S) {
              for (var d = h.split(" "), w, l = 0; l < d.length; l++)
                w = d[l], g.events = g.events || {}, g.events[w] = g.events[w] || [], g.events[w].push(S);
              return S;
            }, f.off = function(g, h, S) {
              if (!h) {
                g.events = {};
                return;
              }
              typeof h == "function" && (S = h, h = y.keys(g.events).join(" "));
              for (var d = h.split(" "), w = 0; w < d.length; w++) {
                var l = g.events[d[w]], t = [];
                if (S && l)
                  for (var o = 0; o < l.length; o++)
                    l[o] !== S && t.push(l[o]);
                g.events[d[w]] = t;
              }
            }, f.trigger = function(g, h, S) {
              var d, w, l, t, o = g.events;
              if (o && y.keys(o).length > 0) {
                S || (S = {}), d = h.split(" ");
                for (var i = 0; i < d.length; i++)
                  if (w = d[i], l = o[w], l) {
                    t = y.clone(S, !1), t.name = w, t.source = g;
                    for (var c = 0; c < l.length; c++)
                      l[c].apply(g, [t]);
                  }
              }
            };
          })();
        },
        /* 6 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(5), g = E(0), h = E(1), S = E(4);
          (function() {
            f.create = function(d) {
              return g.extend({
                id: g.nextId(),
                type: "composite",
                parent: null,
                isModified: !1,
                bodies: [],
                constraints: [],
                composites: [],
                label: "Composite",
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null
                }
              }, d);
            }, f.setModified = function(d, w, l, t) {
              if (d.isModified = w, w && d.cache && (d.cache.allBodies = null, d.cache.allConstraints = null, d.cache.allComposites = null), l && d.parent && f.setModified(d.parent, w, l, t), t)
                for (var o = 0; o < d.composites.length; o++) {
                  var i = d.composites[o];
                  f.setModified(i, w, l, t);
                }
            }, f.add = function(d, w) {
              var l = [].concat(w);
              y.trigger(d, "beforeAdd", { object: w });
              for (var t = 0; t < l.length; t++) {
                var o = l[t];
                switch (o.type) {
                  case "body":
                    if (o.parent !== o) {
                      g.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                      break;
                    }
                    f.addBody(d, o);
                    break;
                  case "constraint":
                    f.addConstraint(d, o);
                    break;
                  case "composite":
                    f.addComposite(d, o);
                    break;
                  case "mouseConstraint":
                    f.addConstraint(d, o.constraint);
                    break;
                }
              }
              return y.trigger(d, "afterAdd", { object: w }), d;
            }, f.remove = function(d, w, l) {
              var t = [].concat(w);
              y.trigger(d, "beforeRemove", { object: w });
              for (var o = 0; o < t.length; o++) {
                var i = t[o];
                switch (i.type) {
                  case "body":
                    f.removeBody(d, i, l);
                    break;
                  case "constraint":
                    f.removeConstraint(d, i, l);
                    break;
                  case "composite":
                    f.removeComposite(d, i, l);
                    break;
                  case "mouseConstraint":
                    f.removeConstraint(d, i.constraint);
                    break;
                }
              }
              return y.trigger(d, "afterRemove", { object: w }), d;
            }, f.addComposite = function(d, w) {
              return d.composites.push(w), w.parent = d, f.setModified(d, !0, !0, !1), d;
            }, f.removeComposite = function(d, w, l) {
              var t = g.indexOf(d.composites, w);
              if (t !== -1 && f.removeCompositeAt(d, t), l)
                for (var o = 0; o < d.composites.length; o++)
                  f.removeComposite(d.composites[o], w, !0);
              return d;
            }, f.removeCompositeAt = function(d, w) {
              return d.composites.splice(w, 1), f.setModified(d, !0, !0, !1), d;
            }, f.addBody = function(d, w) {
              return d.bodies.push(w), f.setModified(d, !0, !0, !1), d;
            }, f.removeBody = function(d, w, l) {
              var t = g.indexOf(d.bodies, w);
              if (t !== -1 && f.removeBodyAt(d, t), l)
                for (var o = 0; o < d.composites.length; o++)
                  f.removeBody(d.composites[o], w, !0);
              return d;
            }, f.removeBodyAt = function(d, w) {
              return d.bodies.splice(w, 1), f.setModified(d, !0, !0, !1), d;
            }, f.addConstraint = function(d, w) {
              return d.constraints.push(w), f.setModified(d, !0, !0, !1), d;
            }, f.removeConstraint = function(d, w, l) {
              var t = g.indexOf(d.constraints, w);
              if (t !== -1 && f.removeConstraintAt(d, t), l)
                for (var o = 0; o < d.composites.length; o++)
                  f.removeConstraint(d.composites[o], w, !0);
              return d;
            }, f.removeConstraintAt = function(d, w) {
              return d.constraints.splice(w, 1), f.setModified(d, !0, !0, !1), d;
            }, f.clear = function(d, w, l) {
              if (l)
                for (var t = 0; t < d.composites.length; t++)
                  f.clear(d.composites[t], w, !0);
              return w ? d.bodies = d.bodies.filter(function(o) {
                return o.isStatic;
              }) : d.bodies.length = 0, d.constraints.length = 0, d.composites.length = 0, f.setModified(d, !0, !0, !1), d;
            }, f.allBodies = function(d) {
              if (d.cache && d.cache.allBodies)
                return d.cache.allBodies;
              for (var w = [].concat(d.bodies), l = 0; l < d.composites.length; l++)
                w = w.concat(f.allBodies(d.composites[l]));
              return d.cache && (d.cache.allBodies = w), w;
            }, f.allConstraints = function(d) {
              if (d.cache && d.cache.allConstraints)
                return d.cache.allConstraints;
              for (var w = [].concat(d.constraints), l = 0; l < d.composites.length; l++)
                w = w.concat(f.allConstraints(d.composites[l]));
              return d.cache && (d.cache.allConstraints = w), w;
            }, f.allComposites = function(d) {
              if (d.cache && d.cache.allComposites)
                return d.cache.allComposites;
              for (var w = [].concat(d.composites), l = 0; l < d.composites.length; l++)
                w = w.concat(f.allComposites(d.composites[l]));
              return d.cache && (d.cache.allComposites = w), w;
            }, f.get = function(d, w, l) {
              var t, o;
              switch (l) {
                case "body":
                  t = f.allBodies(d);
                  break;
                case "constraint":
                  t = f.allConstraints(d);
                  break;
                case "composite":
                  t = f.allComposites(d).concat(d);
                  break;
              }
              return t ? (o = t.filter(function(i) {
                return i.id.toString() === w.toString();
              }), o.length === 0 ? null : o[0]) : null;
            }, f.move = function(d, w, l) {
              return f.remove(d, w), f.add(l, w), d;
            }, f.rebase = function(d) {
              for (var w = f.allBodies(d).concat(f.allConstraints(d)).concat(f.allComposites(d)), l = 0; l < w.length; l++)
                w[l].id = g.nextId();
              return d;
            }, f.translate = function(d, w, l) {
              for (var t = l ? f.allBodies(d) : d.bodies, o = 0; o < t.length; o++)
                S.translate(t[o], w);
              return d;
            }, f.rotate = function(d, w, l, t) {
              for (var o = Math.cos(w), i = Math.sin(w), c = t ? f.allBodies(d) : d.bodies, P = 0; P < c.length; P++) {
                var q = c[P], D = q.position.x - l.x, U = q.position.y - l.y;
                S.setPosition(q, {
                  x: l.x + (D * o - U * i),
                  y: l.y + (D * i + U * o)
                }), S.rotate(q, w);
              }
              return d;
            }, f.scale = function(d, w, l, t, o) {
              for (var i = o ? f.allBodies(d) : d.bodies, c = 0; c < i.length; c++) {
                var P = i[c], q = P.position.x - t.x, D = P.position.y - t.y;
                S.setPosition(P, {
                  x: t.x + q * w,
                  y: t.y + D * l
                }), S.scale(P, w, l);
              }
              return d;
            }, f.bounds = function(d) {
              for (var w = f.allBodies(d), l = [], t = 0; t < w.length; t += 1) {
                var o = w[t];
                l.push(o.bounds.min, o.bounds.max);
              }
              return h.create(l);
            };
          })();
        },
        /* 7 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(4), g = E(5), h = E(0);
          (function() {
            f._motionWakeThreshold = 0.18, f._motionSleepThreshold = 0.08, f._minBias = 0.9, f.update = function(S, d) {
              for (var w = d / h._baseDelta, l = f._motionSleepThreshold, t = 0; t < S.length; t++) {
                var o = S[t], i = y.getSpeed(o), c = y.getAngularSpeed(o), P = i * i + c * c;
                if (o.force.x !== 0 || o.force.y !== 0) {
                  f.set(o, !1);
                  continue;
                }
                var q = Math.min(o.motion, P), D = Math.max(o.motion, P);
                o.motion = f._minBias * q + (1 - f._minBias) * D, o.sleepThreshold > 0 && o.motion < l ? (o.sleepCounter += 1, o.sleepCounter >= o.sleepThreshold / w && f.set(o, !0)) : o.sleepCounter > 0 && (o.sleepCounter -= 1);
              }
            }, f.afterCollisions = function(S) {
              for (var d = f._motionSleepThreshold, w = 0; w < S.length; w++) {
                var l = S[w];
                if (l.isActive) {
                  var t = l.collision, o = t.bodyA.parent, i = t.bodyB.parent;
                  if (!(o.isSleeping && i.isSleeping || o.isStatic || i.isStatic) && (o.isSleeping || i.isSleeping)) {
                    var c = o.isSleeping && !o.isStatic ? o : i, P = c === o ? i : o;
                    !c.isStatic && P.motion > d && f.set(c, !1);
                  }
                }
              }
            }, f.set = function(S, d) {
              var w = S.isSleeping;
              d ? (S.isSleeping = !0, S.sleepCounter = S.sleepThreshold, S.positionImpulse.x = 0, S.positionImpulse.y = 0, S.positionPrev.x = S.position.x, S.positionPrev.y = S.position.y, S.anglePrev = S.angle, S.speed = 0, S.angularSpeed = 0, S.motion = 0, w || g.trigger(S, "sleepStart")) : (S.isSleeping = !1, S.sleepCounter = 0, w && g.trigger(S, "sleepEnd"));
            };
          })();
        },
        /* 8 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(3), g = E(9);
          (function() {
            var h = [], S = {
              overlap: 0,
              axis: null
            }, d = {
              overlap: 0,
              axis: null
            };
            f.create = function(w, l) {
              return {
                pair: null,
                collided: !1,
                bodyA: w,
                bodyB: l,
                parentA: w.parent,
                parentB: l.parent,
                depth: 0,
                normal: { x: 0, y: 0 },
                tangent: { x: 0, y: 0 },
                penetration: { x: 0, y: 0 },
                supports: []
              };
            }, f.collides = function(w, l, t) {
              if (f._overlapAxes(S, w.vertices, l.vertices, w.axes), S.overlap <= 0 || (f._overlapAxes(d, l.vertices, w.vertices, l.axes), d.overlap <= 0))
                return null;
              var o = t && t.table[g.id(w, l)], i;
              o ? i = o.collision : (i = f.create(w, l), i.collided = !0, i.bodyA = w.id < l.id ? w : l, i.bodyB = w.id < l.id ? l : w, i.parentA = i.bodyA.parent, i.parentB = i.bodyB.parent), w = i.bodyA, l = i.bodyB;
              var c;
              S.overlap < d.overlap ? c = S : c = d;
              var P = i.normal, q = i.supports, D = c.axis, U = D.x, x = D.y;
              U * (l.position.x - w.position.x) + x * (l.position.y - w.position.y) < 0 ? (P.x = U, P.y = x) : (P.x = -U, P.y = -x), i.tangent.x = -P.y, i.tangent.y = P.x, i.depth = c.overlap, i.penetration.x = P.x * i.depth, i.penetration.y = P.y * i.depth;
              var T = f._findSupports(w, l, P, 1), L = 0;
              if (y.contains(w.vertices, T[0]) && (q[L++] = T[0]), y.contains(w.vertices, T[1]) && (q[L++] = T[1]), L < 2) {
                var I = f._findSupports(l, w, P, -1);
                y.contains(l.vertices, I[0]) && (q[L++] = I[0]), L < 2 && y.contains(l.vertices, I[1]) && (q[L++] = I[1]);
              }
              return L === 0 && (q[L++] = T[0]), q.length = L, i;
            }, f._overlapAxes = function(w, l, t, o) {
              var i = l.length, c = t.length, P = l[0].x, q = l[0].y, D = t[0].x, U = t[0].y, x = o.length, T = Number.MAX_VALUE, L = 0, I, N, F, G, m, X;
              for (m = 0; m < x; m++) {
                var re = o[m], Z = re.x, ie = re.y, Y = P * Z + q * ie, ue = D * Z + U * ie, Ne = Y, be = ue;
                for (X = 1; X < i; X += 1)
                  G = l[X].x * Z + l[X].y * ie, G > Ne ? Ne = G : G < Y && (Y = G);
                for (X = 1; X < c; X += 1)
                  G = t[X].x * Z + t[X].y * ie, G > be ? be = G : G < ue && (ue = G);
                if (N = Ne - ue, F = be - Y, I = N < F ? N : F, I < T && (T = I, L = m, I <= 0))
                  break;
              }
              w.axis = o[L], w.overlap = T;
            }, f._projectToAxis = function(w, l, t) {
              for (var o = l[0].x * t.x + l[0].y * t.y, i = o, c = 1; c < l.length; c += 1) {
                var P = l[c].x * t.x + l[c].y * t.y;
                P > i ? i = P : P < o && (o = P);
              }
              w.min = o, w.max = i;
            }, f._findSupports = function(w, l, t, o) {
              var i = l.vertices, c = i.length, P = w.position.x, q = w.position.y, D = t.x * o, U = t.y * o, x = Number.MAX_VALUE, T, L, I, N, F;
              for (F = 0; F < c; F += 1)
                L = i[F], N = D * (P - L.x) + U * (q - L.y), N < x && (x = N, T = L);
              return I = i[(c + T.index - 1) % c], x = D * (P - I.x) + U * (q - I.y), L = i[(T.index + 1) % c], D * (P - L.x) + U * (q - L.y) < x ? (h[0] = T, h[1] = L, h) : (h[0] = T, h[1] = I, h);
            };
          })();
        },
        /* 9 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(16);
          (function() {
            f.create = function(g, h) {
              var S = g.bodyA, d = g.bodyB, w = {
                id: f.id(S, d),
                bodyA: S,
                bodyB: d,
                collision: g,
                contacts: [],
                activeContacts: [],
                separation: 0,
                isActive: !0,
                confirmedActive: !0,
                isSensor: S.isSensor || d.isSensor,
                timeCreated: h,
                timeUpdated: h,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0
              };
              return f.update(w, g, h), w;
            }, f.update = function(g, h, S) {
              var d = g.contacts, w = h.supports, l = g.activeContacts, t = h.parentA, o = h.parentB, i = t.vertices.length;
              g.isActive = !0, g.timeUpdated = S, g.collision = h, g.separation = h.depth, g.inverseMass = t.inverseMass + o.inverseMass, g.friction = t.friction < o.friction ? t.friction : o.friction, g.frictionStatic = t.frictionStatic > o.frictionStatic ? t.frictionStatic : o.frictionStatic, g.restitution = t.restitution > o.restitution ? t.restitution : o.restitution, g.slop = t.slop > o.slop ? t.slop : o.slop, h.pair = g, l.length = 0;
              for (var c = 0; c < w.length; c++) {
                var P = w[c], q = P.body === t ? P.index : i + P.index, D = d[q];
                D ? l.push(D) : l.push(d[q] = y.create(P));
              }
            }, f.setActive = function(g, h, S) {
              h ? (g.isActive = !0, g.timeUpdated = S) : (g.isActive = !1, g.activeContacts.length = 0);
            }, f.id = function(g, h) {
              return g.id < h.id ? "A" + g.id + "B" + h.id : "A" + h.id + "B" + g.id;
            };
          })();
        },
        /* 10 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(3), g = E(2), h = E(7), S = E(1), d = E(11), w = E(0);
          (function() {
            f._warming = 0.4, f._torqueDampen = 1, f._minLength = 1e-6, f.create = function(l) {
              var t = l;
              t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }), t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
              var o = t.bodyA ? g.add(t.bodyA.position, t.pointA) : t.pointA, i = t.bodyB ? g.add(t.bodyB.position, t.pointB) : t.pointB, c = g.magnitude(g.sub(o, i));
              t.length = typeof t.length < "u" ? t.length : c, t.id = t.id || w.nextId(), t.label = t.label || "Constraint", t.type = "constraint", t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7), t.damping = t.damping || 0, t.angularStiffness = t.angularStiffness || 0, t.angleA = t.bodyA ? t.bodyA.angle : t.angleA, t.angleB = t.bodyB ? t.bodyB.angle : t.angleB, t.plugin = {};
              var P = {
                visible: !0,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: !0
              };
              return t.length === 0 && t.stiffness > 0.1 ? (P.type = "pin", P.anchors = !1) : t.stiffness < 0.9 && (P.type = "spring"), t.render = w.extend(P, t.render), t;
            }, f.preSolveAll = function(l) {
              for (var t = 0; t < l.length; t += 1) {
                var o = l[t], i = o.constraintImpulse;
                o.isStatic || i.x === 0 && i.y === 0 && i.angle === 0 || (o.position.x += i.x, o.position.y += i.y, o.angle += i.angle);
              }
            }, f.solveAll = function(l, t) {
              for (var o = w.clamp(t / w._baseDelta, 0, 1), i = 0; i < l.length; i += 1) {
                var c = l[i], P = !c.bodyA || c.bodyA && c.bodyA.isStatic, q = !c.bodyB || c.bodyB && c.bodyB.isStatic;
                (P || q) && f.solve(l[i], o);
              }
              for (i = 0; i < l.length; i += 1)
                c = l[i], P = !c.bodyA || c.bodyA && c.bodyA.isStatic, q = !c.bodyB || c.bodyB && c.bodyB.isStatic, !P && !q && f.solve(l[i], o);
            }, f.solve = function(l, t) {
              var o = l.bodyA, i = l.bodyB, c = l.pointA, P = l.pointB;
              if (!(!o && !i)) {
                o && !o.isStatic && (g.rotate(c, o.angle - l.angleA, c), l.angleA = o.angle), i && !i.isStatic && (g.rotate(P, i.angle - l.angleB, P), l.angleB = i.angle);
                var q = c, D = P;
                if (o && (q = g.add(o.position, c)), i && (D = g.add(i.position, P)), !(!q || !D)) {
                  var U = g.sub(q, D), x = g.magnitude(U);
                  x < f._minLength && (x = f._minLength);
                  var T = (x - l.length) / x, L = l.stiffness >= 1 || l.length === 0, I = L ? l.stiffness * t : l.stiffness * t * t, N = l.damping * t, F = g.mult(U, T * I), G = (o ? o.inverseMass : 0) + (i ? i.inverseMass : 0), m = (o ? o.inverseInertia : 0) + (i ? i.inverseInertia : 0), X = G + m, re, Z, ie, Y, ue;
                  if (N > 0) {
                    var Ne = g.create();
                    ie = g.div(U, x), ue = g.sub(
                      i && g.sub(i.position, i.positionPrev) || Ne,
                      o && g.sub(o.position, o.positionPrev) || Ne
                    ), Y = g.dot(ie, ue);
                  }
                  o && !o.isStatic && (Z = o.inverseMass / G, o.constraintImpulse.x -= F.x * Z, o.constraintImpulse.y -= F.y * Z, o.position.x -= F.x * Z, o.position.y -= F.y * Z, N > 0 && (o.positionPrev.x -= N * ie.x * Y * Z, o.positionPrev.y -= N * ie.y * Y * Z), re = g.cross(c, F) / X * f._torqueDampen * o.inverseInertia * (1 - l.angularStiffness), o.constraintImpulse.angle -= re, o.angle -= re), i && !i.isStatic && (Z = i.inverseMass / G, i.constraintImpulse.x += F.x * Z, i.constraintImpulse.y += F.y * Z, i.position.x += F.x * Z, i.position.y += F.y * Z, N > 0 && (i.positionPrev.x += N * ie.x * Y * Z, i.positionPrev.y += N * ie.y * Y * Z), re = g.cross(P, F) / X * f._torqueDampen * i.inverseInertia * (1 - l.angularStiffness), i.constraintImpulse.angle += re, i.angle += re);
                }
              }
            }, f.postSolveAll = function(l) {
              for (var t = 0; t < l.length; t++) {
                var o = l[t], i = o.constraintImpulse;
                if (!(o.isStatic || i.x === 0 && i.y === 0 && i.angle === 0)) {
                  h.set(o, !1);
                  for (var c = 0; c < o.parts.length; c++) {
                    var P = o.parts[c];
                    y.translate(P.vertices, i), c > 0 && (P.position.x += i.x, P.position.y += i.y), i.angle !== 0 && (y.rotate(P.vertices, i.angle, o.position), d.rotate(P.axes, i.angle), c > 0 && g.rotateAbout(P.position, i.angle, o.position, P.position)), S.update(P.bounds, P.vertices, o.velocity);
                  }
                  i.angle *= f._warming, i.x *= f._warming, i.y *= f._warming;
                }
              }
            }, f.pointAWorld = function(l) {
              return {
                x: (l.bodyA ? l.bodyA.position.x : 0) + (l.pointA ? l.pointA.x : 0),
                y: (l.bodyA ? l.bodyA.position.y : 0) + (l.pointA ? l.pointA.y : 0)
              };
            }, f.pointBWorld = function(l) {
              return {
                x: (l.bodyB ? l.bodyB.position.x : 0) + (l.pointB ? l.pointB.x : 0),
                y: (l.bodyB ? l.bodyB.position.y : 0) + (l.pointB ? l.pointB.y : 0)
              };
            };
          })();
        },
        /* 11 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(2), g = E(0);
          (function() {
            f.fromVertices = function(h) {
              for (var S = {}, d = 0; d < h.length; d++) {
                var w = (d + 1) % h.length, l = y.normalise({
                  x: h[w].y - h[d].y,
                  y: h[d].x - h[w].x
                }), t = l.y === 0 ? 1 / 0 : l.x / l.y;
                t = t.toFixed(3).toString(), S[t] = l;
              }
              return g.values(S);
            }, f.rotate = function(h, S) {
              if (S !== 0)
                for (var d = Math.cos(S), w = Math.sin(S), l = 0; l < h.length; l++) {
                  var t = h[l], o;
                  o = t.x * d - t.y * w, t.y = t.x * w + t.y * d, t.x = o;
                }
            };
          })();
        },
        /* 12 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(3), g = E(0), h = E(4), S = E(1), d = E(2);
          (function() {
            f.rectangle = function(w, l, t, o, i) {
              i = i || {};
              var c = {
                label: "Rectangle Body",
                position: { x: w, y: l },
                vertices: y.fromPath("L 0 0 L " + t + " 0 L " + t + " " + o + " L 0 " + o)
              };
              if (i.chamfer) {
                var P = i.chamfer;
                c.vertices = y.chamfer(
                  c.vertices,
                  P.radius,
                  P.quality,
                  P.qualityMin,
                  P.qualityMax
                ), delete i.chamfer;
              }
              return h.create(g.extend({}, c, i));
            }, f.trapezoid = function(w, l, t, o, i, c) {
              c = c || {}, i *= 0.5;
              var P = (1 - i * 2) * t, q = t * i, D = q + P, U = D + q, x;
              i < 0.5 ? x = "L 0 0 L " + q + " " + -o + " L " + D + " " + -o + " L " + U + " 0" : x = "L 0 0 L " + D + " " + -o + " L " + U + " 0";
              var T = {
                label: "Trapezoid Body",
                position: { x: w, y: l },
                vertices: y.fromPath(x)
              };
              if (c.chamfer) {
                var L = c.chamfer;
                T.vertices = y.chamfer(
                  T.vertices,
                  L.radius,
                  L.quality,
                  L.qualityMin,
                  L.qualityMax
                ), delete c.chamfer;
              }
              return h.create(g.extend({}, T, c));
            }, f.circle = function(w, l, t, o, i) {
              o = o || {};
              var c = {
                label: "Circle Body",
                circleRadius: t
              };
              i = i || 25;
              var P = Math.ceil(Math.max(10, Math.min(i, t)));
              return P % 2 === 1 && (P += 1), f.polygon(w, l, P, t, g.extend({}, c, o));
            }, f.polygon = function(w, l, t, o, i) {
              if (i = i || {}, t < 3)
                return f.circle(w, l, o, i);
              for (var c = 2 * Math.PI / t, P = "", q = c * 0.5, D = 0; D < t; D += 1) {
                var U = q + D * c, x = Math.cos(U) * o, T = Math.sin(U) * o;
                P += "L " + x.toFixed(3) + " " + T.toFixed(3) + " ";
              }
              var L = {
                label: "Polygon Body",
                position: { x: w, y: l },
                vertices: y.fromPath(P)
              };
              if (i.chamfer) {
                var I = i.chamfer;
                L.vertices = y.chamfer(
                  L.vertices,
                  I.radius,
                  I.quality,
                  I.qualityMin,
                  I.qualityMax
                ), delete i.chamfer;
              }
              return h.create(g.extend({}, L, i));
            }, f.fromVertices = function(w, l, t, o, i, c, P, q) {
              var D = g.getDecomp(), U, x, T, L, I, N, F, G, m, X, re;
              for (U = !!(D && D.quickDecomp), o = o || {}, T = [], i = typeof i < "u" ? i : !1, c = typeof c < "u" ? c : 0.01, P = typeof P < "u" ? P : 10, q = typeof q < "u" ? q : 0.01, g.isArray(t[0]) || (t = [t]), X = 0; X < t.length; X += 1)
                if (N = t[X], L = y.isConvex(N), I = !L, I && !U && g.warnOnce(
                  "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                ), L || !U)
                  L ? N = y.clockwiseSort(N) : N = y.hull(N), T.push({
                    position: { x: w, y: l },
                    vertices: N
                  });
                else {
                  var Z = N.map(function(We) {
                    return [We.x, We.y];
                  });
                  D.makeCCW(Z), c !== !1 && D.removeCollinearPoints(Z, c), q !== !1 && D.removeDuplicatePoints && D.removeDuplicatePoints(Z, q);
                  var ie = D.quickDecomp(Z);
                  for (F = 0; F < ie.length; F++) {
                    var Y = ie[F], ue = Y.map(function(We) {
                      return {
                        x: We[0],
                        y: We[1]
                      };
                    });
                    P > 0 && y.area(ue) < P || T.push({
                      position: y.centre(ue),
                      vertices: ue
                    });
                  }
                }
              for (F = 0; F < T.length; F++)
                T[F] = h.create(g.extend(T[F], o));
              if (i) {
                var Ne = 5;
                for (F = 0; F < T.length; F++) {
                  var be = T[F];
                  for (G = F + 1; G < T.length; G++) {
                    var Ce = T[G];
                    if (S.overlaps(be.bounds, Ce.bounds)) {
                      var pe = be.vertices, Ae = Ce.vertices;
                      for (m = 0; m < be.vertices.length; m++)
                        for (re = 0; re < Ce.vertices.length; re++) {
                          var je = d.magnitudeSquared(d.sub(pe[(m + 1) % pe.length], Ae[re])), Wn = d.magnitudeSquared(d.sub(pe[m], Ae[(re + 1) % Ae.length]));
                          je < Ne && Wn < Ne && (pe[m].isInternal = !0, Ae[re].isInternal = !0);
                        }
                    }
                  }
                }
              }
              return T.length > 1 ? (x = h.create(g.extend({ parts: T.slice(0) }, o)), h.setPosition(x, { x: w, y: l }), x) : T[0];
            };
          })();
        },
        /* 13 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(0), g = E(8);
          (function() {
            f.create = function(h) {
              var S = {
                bodies: [],
                pairs: null
              };
              return y.extend(S, h);
            }, f.setBodies = function(h, S) {
              h.bodies = S.slice(0);
            }, f.clear = function(h) {
              h.bodies = [];
            }, f.collisions = function(h) {
              var S = [], d = h.pairs, w = h.bodies, l = w.length, t = f.canCollide, o = g.collides, i, c;
              for (w.sort(f._compareBoundsX), i = 0; i < l; i++) {
                var P = w[i], q = P.bounds, D = P.bounds.max.x, U = P.bounds.max.y, x = P.bounds.min.y, T = P.isStatic || P.isSleeping, L = P.parts.length, I = L === 1;
                for (c = i + 1; c < l; c++) {
                  var N = w[c], F = N.bounds;
                  if (F.min.x > D)
                    break;
                  if (!(U < F.min.y || x > F.max.y) && !(T && (N.isStatic || N.isSleeping)) && t(P.collisionFilter, N.collisionFilter)) {
                    var G = N.parts.length;
                    if (I && G === 1) {
                      var m = o(P, N, d);
                      m && S.push(m);
                    } else
                      for (var X = L > 1 ? 1 : 0, re = G > 1 ? 1 : 0, Z = X; Z < L; Z++)
                        for (var ie = P.parts[Z], q = ie.bounds, Y = re; Y < G; Y++) {
                          var ue = N.parts[Y], F = ue.bounds;
                          if (!(q.min.x > F.max.x || q.max.x < F.min.x || q.max.y < F.min.y || q.min.y > F.max.y)) {
                            var m = o(ie, ue, d);
                            m && S.push(m);
                          }
                        }
                  }
                }
              }
              return S;
            }, f.canCollide = function(h, S) {
              return h.group === S.group && h.group !== 0 ? h.group > 0 : (h.mask & S.category) !== 0 && (S.mask & h.category) !== 0;
            }, f._compareBoundsX = function(h, S) {
              return h.bounds.min.x - S.bounds.min.x;
            };
          })();
        },
        /* 14 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(0);
          (function() {
            f.create = function(g) {
              var h = {};
              return g || y.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), h.element = g || document.body, h.absolute = { x: 0, y: 0 }, h.position = { x: 0, y: 0 }, h.mousedownPosition = { x: 0, y: 0 }, h.mouseupPosition = { x: 0, y: 0 }, h.offset = { x: 0, y: 0 }, h.scale = { x: 1, y: 1 }, h.wheelDelta = 0, h.button = -1, h.pixelRatio = parseInt(h.element.getAttribute("data-pixel-ratio"), 10) || 1, h.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null
              }, h.mousemove = function(S) {
                var d = f._getRelativeMousePosition(S, h.element, h.pixelRatio), w = S.changedTouches;
                w && (h.button = 0, S.preventDefault()), h.absolute.x = d.x, h.absolute.y = d.y, h.position.x = h.absolute.x * h.scale.x + h.offset.x, h.position.y = h.absolute.y * h.scale.y + h.offset.y, h.sourceEvents.mousemove = S;
              }, h.mousedown = function(S) {
                var d = f._getRelativeMousePosition(S, h.element, h.pixelRatio), w = S.changedTouches;
                w ? (h.button = 0, S.preventDefault()) : h.button = S.button, h.absolute.x = d.x, h.absolute.y = d.y, h.position.x = h.absolute.x * h.scale.x + h.offset.x, h.position.y = h.absolute.y * h.scale.y + h.offset.y, h.mousedownPosition.x = h.position.x, h.mousedownPosition.y = h.position.y, h.sourceEvents.mousedown = S;
              }, h.mouseup = function(S) {
                var d = f._getRelativeMousePosition(S, h.element, h.pixelRatio), w = S.changedTouches;
                w && S.preventDefault(), h.button = -1, h.absolute.x = d.x, h.absolute.y = d.y, h.position.x = h.absolute.x * h.scale.x + h.offset.x, h.position.y = h.absolute.y * h.scale.y + h.offset.y, h.mouseupPosition.x = h.position.x, h.mouseupPosition.y = h.position.y, h.sourceEvents.mouseup = S;
              }, h.mousewheel = function(S) {
                h.wheelDelta = Math.max(-1, Math.min(1, S.wheelDelta || -S.detail)), S.preventDefault();
              }, f.setElement(h, h.element), h;
            }, f.setElement = function(g, h) {
              g.element = h, h.addEventListener("mousemove", g.mousemove), h.addEventListener("mousedown", g.mousedown), h.addEventListener("mouseup", g.mouseup), h.addEventListener("mousewheel", g.mousewheel), h.addEventListener("DOMMouseScroll", g.mousewheel), h.addEventListener("touchmove", g.mousemove), h.addEventListener("touchstart", g.mousedown), h.addEventListener("touchend", g.mouseup);
            }, f.clearSourceEvents = function(g) {
              g.sourceEvents.mousemove = null, g.sourceEvents.mousedown = null, g.sourceEvents.mouseup = null, g.sourceEvents.mousewheel = null, g.wheelDelta = 0;
            }, f.setOffset = function(g, h) {
              g.offset.x = h.x, g.offset.y = h.y, g.position.x = g.absolute.x * g.scale.x + g.offset.x, g.position.y = g.absolute.y * g.scale.y + g.offset.y;
            }, f.setScale = function(g, h) {
              g.scale.x = h.x, g.scale.y = h.y, g.position.x = g.absolute.x * g.scale.x + g.offset.x, g.position.y = g.absolute.y * g.scale.y + g.offset.y;
            }, f._getRelativeMousePosition = function(g, h, S) {
              var d = h.getBoundingClientRect(), w = document.documentElement || document.body.parentNode || document.body, l = window.pageXOffset !== void 0 ? window.pageXOffset : w.scrollLeft, t = window.pageYOffset !== void 0 ? window.pageYOffset : w.scrollTop, o = g.changedTouches, i, c;
              return o ? (i = o[0].pageX - d.left - l, c = o[0].pageY - d.top - t) : (i = g.pageX - d.left - l, c = g.pageY - d.top - t), {
                x: i / (h.clientWidth / (h.width || h.clientWidth) * S),
                y: c / (h.clientHeight / (h.height || h.clientHeight) * S)
              };
            };
          })();
        },
        /* 15 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(0);
          (function() {
            f._registry = {}, f.register = function(g) {
              if (f.isPlugin(g) || y.warn("Plugin.register:", f.toString(g), "does not implement all required fields."), g.name in f._registry) {
                var h = f._registry[g.name], S = f.versionParse(g.version).number, d = f.versionParse(h.version).number;
                S > d ? (y.warn("Plugin.register:", f.toString(h), "was upgraded to", f.toString(g)), f._registry[g.name] = g) : S < d ? y.warn("Plugin.register:", f.toString(h), "can not be downgraded to", f.toString(g)) : g !== h && y.warn("Plugin.register:", f.toString(g), "is already registered to different plugin object");
              } else
                f._registry[g.name] = g;
              return g;
            }, f.resolve = function(g) {
              return f._registry[f.dependencyParse(g).name];
            }, f.toString = function(g) {
              return typeof g == "string" ? g : (g.name || "anonymous") + "@" + (g.version || g.range || "0.0.0");
            }, f.isPlugin = function(g) {
              return g && g.name && g.version && g.install;
            }, f.isUsed = function(g, h) {
              return g.used.indexOf(h) > -1;
            }, f.isFor = function(g, h) {
              var S = g.for && f.dependencyParse(g.for);
              return !g.for || h.name === S.name && f.versionSatisfies(h.version, S.range);
            }, f.use = function(g, h) {
              if (g.uses = (g.uses || []).concat(h || []), g.uses.length === 0) {
                y.warn("Plugin.use:", f.toString(g), "does not specify any dependencies to install.");
                return;
              }
              for (var S = f.dependencies(g), d = y.topologicalSort(S), w = [], l = 0; l < d.length; l += 1)
                if (d[l] !== g.name) {
                  var t = f.resolve(d[l]);
                  if (!t) {
                    w.push("❌ " + d[l]);
                    continue;
                  }
                  f.isUsed(g, t.name) || (f.isFor(t, g) || (y.warn("Plugin.use:", f.toString(t), "is for", t.for, "but installed on", f.toString(g) + "."), t._warned = !0), t.install ? t.install(g) : (y.warn("Plugin.use:", f.toString(t), "does not specify an install function."), t._warned = !0), t._warned ? (w.push("🔶 " + f.toString(t)), delete t._warned) : w.push("✅ " + f.toString(t)), g.used.push(t.name));
                }
              w.length > 0 && y.info(w.join("  "));
            }, f.dependencies = function(g, h) {
              var S = f.dependencyParse(g), d = S.name;
              if (h = h || {}, !(d in h)) {
                g = f.resolve(g) || g, h[d] = y.map(g.uses || [], function(l) {
                  f.isPlugin(l) && f.register(l);
                  var t = f.dependencyParse(l), o = f.resolve(l);
                  return o && !f.versionSatisfies(o.version, t.range) ? (y.warn(
                    "Plugin.dependencies:",
                    f.toString(o),
                    "does not satisfy",
                    f.toString(t),
                    "used by",
                    f.toString(S) + "."
                  ), o._warned = !0, g._warned = !0) : o || (y.warn(
                    "Plugin.dependencies:",
                    f.toString(l),
                    "used by",
                    f.toString(S),
                    "could not be resolved."
                  ), g._warned = !0), t.name;
                });
                for (var w = 0; w < h[d].length; w += 1)
                  f.dependencies(h[d][w], h);
                return h;
              }
            }, f.dependencyParse = function(g) {
              if (y.isString(g)) {
                var h = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                return h.test(g) || y.warn("Plugin.dependencyParse:", g, "is not a valid dependency string."), {
                  name: g.split("@")[0],
                  range: g.split("@")[1] || "*"
                };
              }
              return {
                name: g.name,
                range: g.range || g.version
              };
            }, f.versionParse = function(g) {
              var h = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              h.test(g) || y.warn("Plugin.versionParse:", g, "is not a valid version or range.");
              var S = h.exec(g), d = Number(S[4]), w = Number(S[5]), l = Number(S[6]);
              return {
                isRange: !!(S[1] || S[2]),
                version: S[3],
                range: g,
                operator: S[1] || S[2] || "",
                major: d,
                minor: w,
                patch: l,
                parts: [d, w, l],
                prerelease: S[7],
                number: d * 1e8 + w * 1e4 + l
              };
            }, f.versionSatisfies = function(g, h) {
              h = h || "*";
              var S = f.versionParse(h), d = f.versionParse(g);
              if (S.isRange) {
                if (S.operator === "*" || g === "*")
                  return !0;
                if (S.operator === ">")
                  return d.number > S.number;
                if (S.operator === ">=")
                  return d.number >= S.number;
                if (S.operator === "~")
                  return d.major === S.major && d.minor === S.minor && d.patch >= S.patch;
                if (S.operator === "^")
                  return S.major > 0 ? d.major === S.major && d.number >= S.number : S.minor > 0 ? d.minor === S.minor && d.patch >= S.patch : d.patch === S.patch;
              }
              return g === h || g === "*";
            };
          })();
        },
        /* 16 */
        /***/
        function(_, ge) {
          var E = {};
          _.exports = E, function() {
            E.create = function(f) {
              return {
                vertex: f,
                normalImpulse: 0,
                tangentImpulse: 0
              };
            };
          }();
        },
        /* 17 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(7), g = E(18), h = E(13), S = E(19), d = E(5), w = E(6), l = E(10), t = E(0), o = E(4);
          (function() {
            f.create = function(i) {
              i = i || {};
              var c = {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: !1,
                events: [],
                plugin: {},
                gravity: {
                  x: 0,
                  y: 1,
                  scale: 1e-3
                },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0
                }
              }, P = t.extend(c, i);
              return P.world = i.world || w.create({ label: "World" }), P.pairs = i.pairs || S.create(), P.detector = i.detector || h.create(), P.grid = { buckets: [] }, P.world.gravity = P.gravity, P.broadphase = P.grid, P.metrics = {}, P;
            }, f.update = function(i, c) {
              var P = t.now(), q = i.world, D = i.detector, U = i.pairs, x = i.timing, T = x.timestamp, L;
              c = typeof c < "u" ? c : t._baseDelta, c *= x.timeScale, x.timestamp += c, x.lastDelta = c;
              var I = {
                timestamp: x.timestamp,
                delta: c
              };
              d.trigger(i, "beforeUpdate", I);
              var N = w.allBodies(q), F = w.allConstraints(q);
              for (q.isModified && (h.setBodies(D, N), w.setModified(q, !1, !1, !0)), i.enableSleeping && y.update(N, c), f._bodiesApplyGravity(N, i.gravity), c > 0 && f._bodiesUpdate(N, c), l.preSolveAll(N), L = 0; L < i.constraintIterations; L++)
                l.solveAll(F, c);
              l.postSolveAll(N), D.pairs = i.pairs;
              var G = h.collisions(D);
              S.update(U, G, T), i.enableSleeping && y.afterCollisions(U.list), U.collisionStart.length > 0 && d.trigger(i, "collisionStart", { pairs: U.collisionStart });
              var m = t.clamp(20 / i.positionIterations, 0, 1);
              for (g.preSolvePosition(U.list), L = 0; L < i.positionIterations; L++)
                g.solvePosition(U.list, c, m);
              for (g.postSolvePosition(N), l.preSolveAll(N), L = 0; L < i.constraintIterations; L++)
                l.solveAll(F, c);
              for (l.postSolveAll(N), g.preSolveVelocity(U.list), L = 0; L < i.velocityIterations; L++)
                g.solveVelocity(U.list, c);
              return f._bodiesUpdateVelocities(N), U.collisionActive.length > 0 && d.trigger(i, "collisionActive", { pairs: U.collisionActive }), U.collisionEnd.length > 0 && d.trigger(i, "collisionEnd", { pairs: U.collisionEnd }), f._bodiesClearForces(N), d.trigger(i, "afterUpdate", I), i.timing.lastElapsed = t.now() - P, i;
            }, f.merge = function(i, c) {
              if (t.extend(i, c), c.world) {
                i.world = c.world, f.clear(i);
                for (var P = w.allBodies(i.world), q = 0; q < P.length; q++) {
                  var D = P[q];
                  y.set(D, !1), D.id = t.nextId();
                }
              }
            }, f.clear = function(i) {
              S.clear(i.pairs), h.clear(i.detector);
            }, f._bodiesClearForces = function(i) {
              for (var c = i.length, P = 0; P < c; P++) {
                var q = i[P];
                q.force.x = 0, q.force.y = 0, q.torque = 0;
              }
            }, f._bodiesApplyGravity = function(i, c) {
              var P = typeof c.scale < "u" ? c.scale : 1e-3, q = i.length;
              if (!(c.x === 0 && c.y === 0 || P === 0))
                for (var D = 0; D < q; D++) {
                  var U = i[D];
                  U.isStatic || U.isSleeping || (U.force.y += U.mass * c.y * P, U.force.x += U.mass * c.x * P);
                }
            }, f._bodiesUpdate = function(i, c) {
              for (var P = i.length, q = 0; q < P; q++) {
                var D = i[q];
                D.isStatic || D.isSleeping || o.update(D, c);
              }
            }, f._bodiesUpdateVelocities = function(i) {
              for (var c = i.length, P = 0; P < c; P++)
                o.updateVelocities(i[P]);
            };
          })();
        },
        /* 18 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(3), g = E(0), h = E(1);
          (function() {
            f._restingThresh = 2, f._restingThreshTangent = Math.sqrt(6), f._positionDampen = 0.9, f._positionWarming = 0.8, f._frictionNormalMultiplier = 5, f._frictionMaxStatic = Number.MAX_VALUE, f.preSolvePosition = function(S) {
              var d, w, l, t = S.length;
              for (d = 0; d < t; d++)
                w = S[d], w.isActive && (l = w.activeContacts.length, w.collision.parentA.totalContacts += l, w.collision.parentB.totalContacts += l);
            }, f.solvePosition = function(S, d, w) {
              var l, t, o, i, c, P, q, D, U = f._positionDampen * (w || 1), x = g.clamp(d / g._baseDelta, 0, 1), T = S.length;
              for (l = 0; l < T; l++)
                t = S[l], !(!t.isActive || t.isSensor) && (o = t.collision, i = o.parentA, c = o.parentB, P = o.normal, t.separation = P.x * (c.positionImpulse.x + o.penetration.x - i.positionImpulse.x) + P.y * (c.positionImpulse.y + o.penetration.y - i.positionImpulse.y));
              for (l = 0; l < T; l++)
                t = S[l], !(!t.isActive || t.isSensor) && (o = t.collision, i = o.parentA, c = o.parentB, P = o.normal, D = t.separation - t.slop * x, (i.isStatic || c.isStatic) && (D *= 2), i.isStatic || i.isSleeping || (q = U / i.totalContacts, i.positionImpulse.x += P.x * D * q, i.positionImpulse.y += P.y * D * q), c.isStatic || c.isSleeping || (q = U / c.totalContacts, c.positionImpulse.x -= P.x * D * q, c.positionImpulse.y -= P.y * D * q));
            }, f.postSolvePosition = function(S) {
              for (var d = f._positionWarming, w = S.length, l = y.translate, t = h.update, o = 0; o < w; o++) {
                var i = S[o], c = i.positionImpulse, P = c.x, q = c.y, D = i.velocity;
                if (i.totalContacts = 0, P !== 0 || q !== 0) {
                  for (var U = 0; U < i.parts.length; U++) {
                    var x = i.parts[U];
                    l(x.vertices, c), t(x.bounds, x.vertices, D), x.position.x += P, x.position.y += q;
                  }
                  i.positionPrev.x += P, i.positionPrev.y += q, P * D.x + q * D.y < 0 ? (c.x = 0, c.y = 0) : (c.x *= d, c.y *= d);
                }
              }
            }, f.preSolveVelocity = function(S) {
              var d = S.length, w, l;
              for (w = 0; w < d; w++) {
                var t = S[w];
                if (!(!t.isActive || t.isSensor)) {
                  var o = t.activeContacts, i = o.length, c = t.collision, P = c.parentA, q = c.parentB, D = c.normal, U = c.tangent;
                  for (l = 0; l < i; l++) {
                    var x = o[l], T = x.vertex, L = x.normalImpulse, I = x.tangentImpulse;
                    if (L !== 0 || I !== 0) {
                      var N = D.x * L + U.x * I, F = D.y * L + U.y * I;
                      P.isStatic || P.isSleeping || (P.positionPrev.x += N * P.inverseMass, P.positionPrev.y += F * P.inverseMass, P.anglePrev += P.inverseInertia * ((T.x - P.position.x) * F - (T.y - P.position.y) * N)), q.isStatic || q.isSleeping || (q.positionPrev.x -= N * q.inverseMass, q.positionPrev.y -= F * q.inverseMass, q.anglePrev -= q.inverseInertia * ((T.x - q.position.x) * F - (T.y - q.position.y) * N));
                    }
                  }
                }
              }
            }, f.solveVelocity = function(S, d) {
              var w = d / g._baseDelta, l = w * w, t = l * w, o = -f._restingThresh * w, i = f._restingThreshTangent, c = f._frictionNormalMultiplier * w, P = f._frictionMaxStatic, q = S.length, D, U, x, T;
              for (x = 0; x < q; x++) {
                var L = S[x];
                if (!(!L.isActive || L.isSensor)) {
                  var I = L.collision, N = I.parentA, F = I.parentB, G = N.velocity, m = F.velocity, X = I.normal.x, re = I.normal.y, Z = I.tangent.x, ie = I.tangent.y, Y = L.activeContacts, ue = Y.length, Ne = 1 / ue, be = N.inverseMass + F.inverseMass, Ce = L.friction * L.frictionStatic * c;
                  for (G.x = N.position.x - N.positionPrev.x, G.y = N.position.y - N.positionPrev.y, m.x = F.position.x - F.positionPrev.x, m.y = F.position.y - F.positionPrev.y, N.angularVelocity = N.angle - N.anglePrev, F.angularVelocity = F.angle - F.anglePrev, T = 0; T < ue; T++) {
                    var pe = Y[T], Ae = pe.vertex, je = Ae.x - N.position.x, Wn = Ae.y - N.position.y, We = Ae.x - F.position.x, Ze = Ae.y - F.position.y, Je = G.x - Wn * N.angularVelocity, Wi = G.y + je * N.angularVelocity, gi = m.x - Ze * F.angularVelocity, Ge = m.y + We * F.angularVelocity, Gi = Je - gi, zi = Wi - Ge, zr = X * Gi + re * zi, Jn = Z * Gi + ie * zi, ji = L.separation + zr, Ni = Math.min(ji, 1);
                    Ni = ji < 0 ? 0 : Ni;
                    var mr = Ni * Ce;
                    Jn < -mr || Jn > mr ? (U = Jn > 0 ? Jn : -Jn, D = L.friction * (Jn > 0 ? 1 : -1) * t, D < -U ? D = -U : D > U && (D = U)) : (D = Jn, U = P);
                    var Ki = je * re - Wn * X, Qi = We * re - Ze * X, yi = Ne / (be + N.inverseInertia * Ki * Ki + F.inverseInertia * Qi * Qi), Zr = (1 + L.restitution) * zr * yi;
                    if (D *= yi, zr < o)
                      pe.normalImpulse = 0;
                    else {
                      var ja = pe.normalImpulse;
                      pe.normalImpulse += Zr, pe.normalImpulse > 0 && (pe.normalImpulse = 0), Zr = pe.normalImpulse - ja;
                    }
                    if (Jn < -i || Jn > i)
                      pe.tangentImpulse = 0;
                    else {
                      var sr = pe.tangentImpulse;
                      pe.tangentImpulse += D, pe.tangentImpulse < -U && (pe.tangentImpulse = -U), pe.tangentImpulse > U && (pe.tangentImpulse = U), D = pe.tangentImpulse - sr;
                    }
                    var Jr = X * Zr + Z * D, Xr = re * Zr + ie * D;
                    N.isStatic || N.isSleeping || (N.positionPrev.x += Jr * N.inverseMass, N.positionPrev.y += Xr * N.inverseMass, N.anglePrev += (je * Xr - Wn * Jr) * N.inverseInertia), F.isStatic || F.isSleeping || (F.positionPrev.x -= Jr * F.inverseMass, F.positionPrev.y -= Xr * F.inverseMass, F.anglePrev -= (We * Xr - Ze * Jr) * F.inverseInertia);
                  }
                }
              }
            };
          })();
        },
        /* 19 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(9), g = E(0);
          (function() {
            f.create = function(h) {
              return g.extend({
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: []
              }, h);
            }, f.update = function(h, S, d) {
              var w = h.list, l = w.length, t = h.table, o = S.length, i = h.collisionStart, c = h.collisionEnd, P = h.collisionActive, q, D, U, x;
              for (i.length = 0, c.length = 0, P.length = 0, x = 0; x < l; x++)
                w[x].confirmedActive = !1;
              for (x = 0; x < o; x++)
                q = S[x], U = q.pair, U ? (U.isActive ? P.push(U) : i.push(U), y.update(U, q, d), U.confirmedActive = !0) : (U = y.create(q, d), t[U.id] = U, i.push(U), w.push(U));
              var T = [];
              for (l = w.length, x = 0; x < l; x++)
                U = w[x], U.confirmedActive || (y.setActive(U, !1, d), c.push(U), !U.collision.bodyA.isSleeping && !U.collision.bodyB.isSleeping && T.push(x));
              for (x = 0; x < T.length; x++)
                D = T[x] - x, U = w[D], w.splice(D, 1), delete t[U.id];
            }, f.clear = function(h) {
              return h.table = {}, h.list.length = 0, h.collisionStart.length = 0, h.collisionActive.length = 0, h.collisionEnd.length = 0, h;
            };
          })();
        },
        /* 20 */
        /***/
        function(_, ge, E) {
          var f = _.exports = E(21);
          f.Axes = E(11), f.Bodies = E(12), f.Body = E(4), f.Bounds = E(1), f.Collision = E(8), f.Common = E(0), f.Composite = E(6), f.Composites = E(22), f.Constraint = E(10), f.Contact = E(16), f.Detector = E(13), f.Engine = E(17), f.Events = E(5), f.Grid = E(23), f.Mouse = E(14), f.MouseConstraint = E(24), f.Pair = E(9), f.Pairs = E(19), f.Plugin = E(15), f.Query = E(25), f.Render = E(26), f.Resolver = E(18), f.Runner = E(27), f.SAT = E(28), f.Sleeping = E(7), f.Svg = E(29), f.Vector = E(2), f.Vertices = E(3), f.World = E(30), f.Engine.run = f.Runner.run, f.Common.deprecated(f.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead");
        },
        /* 21 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(15), g = E(0);
          (function() {
            f.name = "matter-js", f.version = "0.19.0", f.uses = [], f.used = [], f.use = function() {
              y.use(f, Array.prototype.slice.call(arguments));
            }, f.before = function(h, S) {
              return h = h.replace(/^Matter./, ""), g.chainPathBefore(f, h, S);
            }, f.after = function(h, S) {
              return h = h.replace(/^Matter./, ""), g.chainPathAfter(f, h, S);
            };
          })();
        },
        /* 22 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(6), g = E(10), h = E(0), S = E(4), d = E(12), w = h.deprecated;
          (function() {
            f.stack = function(l, t, o, i, c, P, q) {
              for (var D = y.create({ label: "Stack" }), U = l, x = t, T, L = 0, I = 0; I < i; I++) {
                for (var N = 0, F = 0; F < o; F++) {
                  var G = q(U, x, F, I, T, L);
                  if (G) {
                    var m = G.bounds.max.y - G.bounds.min.y, X = G.bounds.max.x - G.bounds.min.x;
                    m > N && (N = m), S.translate(G, { x: X * 0.5, y: m * 0.5 }), U = G.bounds.max.x + c, y.addBody(D, G), T = G, L += 1;
                  } else
                    U += c;
                }
                x += N + P, U = l;
              }
              return D;
            }, f.chain = function(l, t, o, i, c, P) {
              for (var q = l.bodies, D = 1; D < q.length; D++) {
                var U = q[D - 1], x = q[D], T = U.bounds.max.y - U.bounds.min.y, L = U.bounds.max.x - U.bounds.min.x, I = x.bounds.max.y - x.bounds.min.y, N = x.bounds.max.x - x.bounds.min.x, F = {
                  bodyA: U,
                  pointA: { x: L * t, y: T * o },
                  bodyB: x,
                  pointB: { x: N * i, y: I * c }
                }, G = h.extend(F, P);
                y.addConstraint(l, g.create(G));
              }
              return l.label += " Chain", l;
            }, f.mesh = function(l, t, o, i, c) {
              var P = l.bodies, q, D, U, x, T;
              for (q = 0; q < o; q++) {
                for (D = 1; D < t; D++)
                  U = P[D - 1 + q * t], x = P[D + q * t], y.addConstraint(l, g.create(h.extend({ bodyA: U, bodyB: x }, c)));
                if (q > 0)
                  for (D = 0; D < t; D++)
                    U = P[D + (q - 1) * t], x = P[D + q * t], y.addConstraint(l, g.create(h.extend({ bodyA: U, bodyB: x }, c))), i && D > 0 && (T = P[D - 1 + (q - 1) * t], y.addConstraint(l, g.create(h.extend({ bodyA: T, bodyB: x }, c)))), i && D < t - 1 && (T = P[D + 1 + (q - 1) * t], y.addConstraint(l, g.create(h.extend({ bodyA: T, bodyB: x }, c))));
              }
              return l.label += " Mesh", l;
            }, f.pyramid = function(l, t, o, i, c, P, q) {
              return f.stack(l, t, o, i, c, P, function(D, U, x, T, L, I) {
                var N = Math.min(i, Math.ceil(o / 2)), F = L ? L.bounds.max.x - L.bounds.min.x : 0;
                if (!(T > N)) {
                  T = N - T;
                  var G = T, m = o - 1 - T;
                  if (!(x < G || x > m)) {
                    I === 1 && S.translate(L, { x: (x + (o % 2 === 1 ? 1 : -1)) * F, y: 0 });
                    var X = L ? x * F : 0;
                    return q(l + X + x * c, U, x, T, L, I);
                  }
                }
              });
            }, f.newtonsCradle = function(l, t, o, i, c) {
              for (var P = y.create({ label: "Newtons Cradle" }), q = 0; q < o; q++) {
                var D = 1.9, U = d.circle(
                  l + q * (i * D),
                  t + c,
                  i,
                  { inertia: 1 / 0, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }
                ), x = g.create({ pointA: { x: l + q * (i * D), y: t }, bodyB: U });
                y.addBody(P, U), y.addConstraint(P, x);
              }
              return P;
            }, w(f, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"), f.car = function(l, t, o, i, c) {
              var P = S.nextGroup(!0), q = 20, D = -o * 0.5 + q, U = o * 0.5 - q, x = 0, T = y.create({ label: "Car" }), L = d.rectangle(l, t, o, i, {
                collisionFilter: {
                  group: P
                },
                chamfer: {
                  radius: i * 0.5
                },
                density: 2e-4
              }), I = d.circle(l + D, t + x, c, {
                collisionFilter: {
                  group: P
                },
                friction: 0.8
              }), N = d.circle(l + U, t + x, c, {
                collisionFilter: {
                  group: P
                },
                friction: 0.8
              }), F = g.create({
                bodyB: L,
                pointB: { x: D, y: x },
                bodyA: I,
                stiffness: 1,
                length: 0
              }), G = g.create({
                bodyB: L,
                pointB: { x: U, y: x },
                bodyA: N,
                stiffness: 1,
                length: 0
              });
              return y.addBody(T, L), y.addBody(T, I), y.addBody(T, N), y.addConstraint(T, F), y.addConstraint(T, G), T;
            }, w(f, "car", "Composites.car ➤ moved to car example"), f.softBody = function(l, t, o, i, c, P, q, D, U, x) {
              U = h.extend({ inertia: 1 / 0 }, U), x = h.extend({ stiffness: 0.2, render: { type: "line", anchors: !1 } }, x);
              var T = f.stack(l, t, o, i, c, P, function(L, I) {
                return d.circle(L, I, D, U);
              });
              return f.mesh(T, o, i, q, x), T.label = "Soft Body", T;
            }, w(f, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples");
          })();
        },
        /* 23 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(9), g = E(0), h = g.deprecated;
          (function() {
            f.create = function(S) {
              var d = {
                buckets: {},
                pairs: {},
                pairsList: [],
                bucketWidth: 48,
                bucketHeight: 48
              };
              return g.extend(d, S);
            }, f.update = function(S, d, w, l) {
              var t, o, i, c = w.world, P = S.buckets, q, D, U = !1;
              for (t = 0; t < d.length; t++) {
                var x = d[t];
                if (!(x.isSleeping && !l) && !(c.bounds && (x.bounds.max.x < c.bounds.min.x || x.bounds.min.x > c.bounds.max.x || x.bounds.max.y < c.bounds.min.y || x.bounds.min.y > c.bounds.max.y))) {
                  var T = f._getRegion(S, x);
                  if (!x.region || T.id !== x.region.id || l) {
                    (!x.region || l) && (x.region = T);
                    var L = f._regionUnion(T, x.region);
                    for (o = L.startCol; o <= L.endCol; o++)
                      for (i = L.startRow; i <= L.endRow; i++) {
                        D = f._getBucketId(o, i), q = P[D];
                        var I = o >= T.startCol && o <= T.endCol && i >= T.startRow && i <= T.endRow, N = o >= x.region.startCol && o <= x.region.endCol && i >= x.region.startRow && i <= x.region.endRow;
                        !I && N && N && q && f._bucketRemoveBody(S, q, x), (x.region === T || I && !N || l) && (q || (q = f._createBucket(P, D)), f._bucketAddBody(S, q, x));
                      }
                    x.region = T, U = !0;
                  }
                }
              }
              U && (S.pairsList = f._createActivePairsList(S));
            }, h(f, "update", "Grid.update ➤ replaced by Matter.Detector"), f.clear = function(S) {
              S.buckets = {}, S.pairs = {}, S.pairsList = [];
            }, h(f, "clear", "Grid.clear ➤ replaced by Matter.Detector"), f._regionUnion = function(S, d) {
              var w = Math.min(S.startCol, d.startCol), l = Math.max(S.endCol, d.endCol), t = Math.min(S.startRow, d.startRow), o = Math.max(S.endRow, d.endRow);
              return f._createRegion(w, l, t, o);
            }, f._getRegion = function(S, d) {
              var w = d.bounds, l = Math.floor(w.min.x / S.bucketWidth), t = Math.floor(w.max.x / S.bucketWidth), o = Math.floor(w.min.y / S.bucketHeight), i = Math.floor(w.max.y / S.bucketHeight);
              return f._createRegion(l, t, o, i);
            }, f._createRegion = function(S, d, w, l) {
              return {
                id: S + "," + d + "," + w + "," + l,
                startCol: S,
                endCol: d,
                startRow: w,
                endRow: l
              };
            }, f._getBucketId = function(S, d) {
              return "C" + S + "R" + d;
            }, f._createBucket = function(S, d) {
              var w = S[d] = [];
              return w;
            }, f._bucketAddBody = function(S, d, w) {
              var l = S.pairs, t = y.id, o = d.length, i;
              for (i = 0; i < o; i++) {
                var c = d[i];
                if (!(w.id === c.id || w.isStatic && c.isStatic)) {
                  var P = t(w, c), q = l[P];
                  q ? q[2] += 1 : l[P] = [w, c, 1];
                }
              }
              d.push(w);
            }, f._bucketRemoveBody = function(S, d, w) {
              var l = S.pairs, t = y.id, o;
              d.splice(g.indexOf(d, w), 1);
              var i = d.length;
              for (o = 0; o < i; o++) {
                var c = l[t(w, d[o])];
                c && (c[2] -= 1);
              }
            }, f._createActivePairsList = function(S) {
              var d, w = S.pairs, l = g.keys(w), t = l.length, o = [], i;
              for (i = 0; i < t; i++)
                d = w[l[i]], d[2] > 0 ? o.push(d) : delete w[l[i]];
              return o;
            };
          })();
        },
        /* 24 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(3), g = E(7), h = E(14), S = E(5), d = E(13), w = E(10), l = E(6), t = E(0), o = E(1);
          (function() {
            f.create = function(i, c) {
              var P = (i ? i.mouse : null) || (c ? c.mouse : null);
              P || (i && i.render && i.render.canvas ? P = h.create(i.render.canvas) : c && c.element ? P = h.create(c.element) : (P = h.create(), t.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
              var q = w.create({
                label: "Mouse Constraint",
                pointA: P.position,
                pointB: { x: 0, y: 0 },
                length: 0.01,
                stiffness: 0.1,
                angularStiffness: 1,
                render: {
                  strokeStyle: "#90EE90",
                  lineWidth: 3
                }
              }), D = {
                type: "mouseConstraint",
                mouse: P,
                element: null,
                body: null,
                constraint: q,
                collisionFilter: {
                  category: 1,
                  mask: 4294967295,
                  group: 0
                }
              }, U = t.extend(D, c);
              return S.on(i, "beforeUpdate", function() {
                var x = l.allBodies(i.world);
                f.update(U, x), f._triggerEvents(U);
              }), U;
            }, f.update = function(i, c) {
              var P = i.mouse, q = i.constraint, D = i.body;
              if (P.button === 0) {
                if (q.bodyB)
                  g.set(q.bodyB, !1), q.pointA = P.position;
                else
                  for (var U = 0; U < c.length; U++)
                    if (D = c[U], o.contains(D.bounds, P.position) && d.canCollide(D.collisionFilter, i.collisionFilter))
                      for (var x = D.parts.length > 1 ? 1 : 0; x < D.parts.length; x++) {
                        var T = D.parts[x];
                        if (y.contains(T.vertices, P.position)) {
                          q.pointA = P.position, q.bodyB = i.body = D, q.pointB = { x: P.position.x - D.position.x, y: P.position.y - D.position.y }, q.angleB = D.angle, g.set(D, !1), S.trigger(i, "startdrag", { mouse: P, body: D });
                          break;
                        }
                      }
              } else
                q.bodyB = i.body = null, q.pointB = null, D && S.trigger(i, "enddrag", { mouse: P, body: D });
            }, f._triggerEvents = function(i) {
              var c = i.mouse, P = c.sourceEvents;
              P.mousemove && S.trigger(i, "mousemove", { mouse: c }), P.mousedown && S.trigger(i, "mousedown", { mouse: c }), P.mouseup && S.trigger(i, "mouseup", { mouse: c }), h.clearSourceEvents(c);
            };
          })();
        },
        /* 25 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(2), g = E(8), h = E(1), S = E(12), d = E(3);
          (function() {
            f.collides = function(w, l) {
              for (var t = [], o = l.length, i = w.bounds, c = g.collides, P = h.overlaps, q = 0; q < o; q++) {
                var D = l[q], U = D.parts.length, x = U === 1 ? 0 : 1;
                if (P(D.bounds, i))
                  for (var T = x; T < U; T++) {
                    var L = D.parts[T];
                    if (P(L.bounds, i)) {
                      var I = c(L, w);
                      if (I) {
                        t.push(I);
                        break;
                      }
                    }
                  }
              }
              return t;
            }, f.ray = function(w, l, t, o) {
              o = o || 1e-100;
              for (var i = y.angle(l, t), c = y.magnitude(y.sub(l, t)), P = (t.x + l.x) * 0.5, q = (t.y + l.y) * 0.5, D = S.rectangle(P, q, c, o, { angle: i }), U = f.collides(D, w), x = 0; x < U.length; x += 1) {
                var T = U[x];
                T.body = T.bodyB = T.bodyA;
              }
              return U;
            }, f.region = function(w, l, t) {
              for (var o = [], i = 0; i < w.length; i++) {
                var c = w[i], P = h.overlaps(c.bounds, l);
                (P && !t || !P && t) && o.push(c);
              }
              return o;
            }, f.point = function(w, l) {
              for (var t = [], o = 0; o < w.length; o++) {
                var i = w[o];
                if (h.contains(i.bounds, l))
                  for (var c = i.parts.length === 1 ? 0 : 1; c < i.parts.length; c++) {
                    var P = i.parts[c];
                    if (h.contains(P.bounds, l) && d.contains(P.vertices, l)) {
                      t.push(i);
                      break;
                    }
                  }
              }
              return t;
            };
          })();
        },
        /* 26 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(4), g = E(0), h = E(6), S = E(1), d = E(5), w = E(2), l = E(14);
          (function() {
            var t, o;
            typeof window < "u" && (t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(x) {
              window.setTimeout(function() {
                x(g.now());
              }, 1e3 / 60);
            }, o = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), f._goodFps = 30, f._goodDelta = 1e3 / 60, f.create = function(x) {
              var T = {
                engine: null,
                element: null,
                canvas: null,
                mouse: null,
                frameRequestId: null,
                timing: {
                  historySize: 60,
                  delta: 0,
                  deltaHistory: [],
                  lastTime: 0,
                  lastTimestamp: 0,
                  lastElapsed: 0,
                  timestampElapsed: 0,
                  timestampElapsedHistory: [],
                  engineDeltaHistory: [],
                  engineElapsedHistory: [],
                  elapsedHistory: []
                },
                options: {
                  width: 800,
                  height: 600,
                  pixelRatio: 1,
                  background: "#14151f",
                  wireframeBackground: "#14151f",
                  hasBounds: !!x.bounds,
                  enabled: !0,
                  wireframes: !0,
                  showSleeping: !0,
                  showDebug: !1,
                  showStats: !1,
                  showPerformance: !1,
                  showBounds: !1,
                  showVelocity: !1,
                  showCollisions: !1,
                  showSeparations: !1,
                  showAxes: !1,
                  showPositions: !1,
                  showAngleIndicator: !1,
                  showIds: !1,
                  showVertexNumbers: !1,
                  showConvexHulls: !1,
                  showInternalEdges: !1,
                  showMousePosition: !1
                }
              }, L = g.extend(T, x);
              return L.canvas && (L.canvas.width = L.options.width || L.canvas.width, L.canvas.height = L.options.height || L.canvas.height), L.mouse = x.mouse, L.engine = x.engine, L.canvas = L.canvas || P(L.options.width, L.options.height), L.context = L.canvas.getContext("2d"), L.textures = {}, L.bounds = L.bounds || {
                min: {
                  x: 0,
                  y: 0
                },
                max: {
                  x: L.canvas.width,
                  y: L.canvas.height
                }
              }, L.controller = f, L.options.showBroadphase = !1, L.options.pixelRatio !== 1 && f.setPixelRatio(L, L.options.pixelRatio), g.isElement(L.element) && L.element.appendChild(L.canvas), L;
            }, f.run = function(x) {
              (function T(L) {
                x.frameRequestId = t(T), i(x, L), f.world(x, L), (x.options.showStats || x.options.showDebug) && f.stats(x, x.context, L), (x.options.showPerformance || x.options.showDebug) && f.performance(x, x.context, L);
              })();
            }, f.stop = function(x) {
              o(x.frameRequestId);
            }, f.setPixelRatio = function(x, T) {
              var L = x.options, I = x.canvas;
              T === "auto" && (T = q(I)), L.pixelRatio = T, I.setAttribute("data-pixel-ratio", T), I.width = L.width * T, I.height = L.height * T, I.style.width = L.width + "px", I.style.height = L.height + "px";
            }, f.lookAt = function(x, T, L, I) {
              I = typeof I < "u" ? I : !0, T = g.isArray(T) ? T : [T], L = L || {
                x: 0,
                y: 0
              };
              for (var N = {
                min: { x: 1 / 0, y: 1 / 0 },
                max: { x: -1 / 0, y: -1 / 0 }
              }, F = 0; F < T.length; F += 1) {
                var G = T[F], m = G.bounds ? G.bounds.min : G.min || G.position || G, X = G.bounds ? G.bounds.max : G.max || G.position || G;
                m && X && (m.x < N.min.x && (N.min.x = m.x), X.x > N.max.x && (N.max.x = X.x), m.y < N.min.y && (N.min.y = m.y), X.y > N.max.y && (N.max.y = X.y));
              }
              var re = N.max.x - N.min.x + 2 * L.x, Z = N.max.y - N.min.y + 2 * L.y, ie = x.canvas.height, Y = x.canvas.width, ue = Y / ie, Ne = re / Z, be = 1, Ce = 1;
              Ne > ue ? Ce = Ne / ue : be = ue / Ne, x.options.hasBounds = !0, x.bounds.min.x = N.min.x, x.bounds.max.x = N.min.x + re * be, x.bounds.min.y = N.min.y, x.bounds.max.y = N.min.y + Z * Ce, I && (x.bounds.min.x += re * 0.5 - re * be * 0.5, x.bounds.max.x += re * 0.5 - re * be * 0.5, x.bounds.min.y += Z * 0.5 - Z * Ce * 0.5, x.bounds.max.y += Z * 0.5 - Z * Ce * 0.5), x.bounds.min.x -= L.x, x.bounds.max.x -= L.x, x.bounds.min.y -= L.y, x.bounds.max.y -= L.y, x.mouse && (l.setScale(x.mouse, {
                x: (x.bounds.max.x - x.bounds.min.x) / x.canvas.width,
                y: (x.bounds.max.y - x.bounds.min.y) / x.canvas.height
              }), l.setOffset(x.mouse, x.bounds.min));
            }, f.startViewTransform = function(x) {
              var T = x.bounds.max.x - x.bounds.min.x, L = x.bounds.max.y - x.bounds.min.y, I = T / x.options.width, N = L / x.options.height;
              x.context.setTransform(
                x.options.pixelRatio / I,
                0,
                0,
                x.options.pixelRatio / N,
                0,
                0
              ), x.context.translate(-x.bounds.min.x, -x.bounds.min.y);
            }, f.endViewTransform = function(x) {
              x.context.setTransform(x.options.pixelRatio, 0, 0, x.options.pixelRatio, 0, 0);
            }, f.world = function(x, T) {
              var L = g.now(), I = x.engine, N = I.world, F = x.canvas, G = x.context, m = x.options, X = x.timing, re = h.allBodies(N), Z = h.allConstraints(N), ie = m.wireframes ? m.wireframeBackground : m.background, Y = [], ue = [], Ne, be = {
                timestamp: I.timing.timestamp
              };
              if (d.trigger(x, "beforeRender", be), x.currentBackground !== ie && U(x, ie), G.globalCompositeOperation = "source-in", G.fillStyle = "transparent", G.fillRect(0, 0, F.width, F.height), G.globalCompositeOperation = "source-over", m.hasBounds) {
                for (Ne = 0; Ne < re.length; Ne++) {
                  var Ce = re[Ne];
                  S.overlaps(Ce.bounds, x.bounds) && Y.push(Ce);
                }
                for (Ne = 0; Ne < Z.length; Ne++) {
                  var pe = Z[Ne], Ae = pe.bodyA, je = pe.bodyB, Wn = pe.pointA, We = pe.pointB;
                  Ae && (Wn = w.add(Ae.position, pe.pointA)), je && (We = w.add(je.position, pe.pointB)), !(!Wn || !We) && (S.contains(x.bounds, Wn) || S.contains(x.bounds, We)) && ue.push(pe);
                }
                f.startViewTransform(x), x.mouse && (l.setScale(x.mouse, {
                  x: (x.bounds.max.x - x.bounds.min.x) / x.options.width,
                  y: (x.bounds.max.y - x.bounds.min.y) / x.options.height
                }), l.setOffset(x.mouse, x.bounds.min));
              } else
                ue = Z, Y = re, x.options.pixelRatio !== 1 && x.context.setTransform(x.options.pixelRatio, 0, 0, x.options.pixelRatio, 0, 0);
              !m.wireframes || I.enableSleeping && m.showSleeping ? f.bodies(x, Y, G) : (m.showConvexHulls && f.bodyConvexHulls(x, Y, G), f.bodyWireframes(x, Y, G)), m.showBounds && f.bodyBounds(x, Y, G), (m.showAxes || m.showAngleIndicator) && f.bodyAxes(x, Y, G), m.showPositions && f.bodyPositions(x, Y, G), m.showVelocity && f.bodyVelocity(x, Y, G), m.showIds && f.bodyIds(x, Y, G), m.showSeparations && f.separations(x, I.pairs.list, G), m.showCollisions && f.collisions(x, I.pairs.list, G), m.showVertexNumbers && f.vertexNumbers(x, Y, G), m.showMousePosition && f.mousePosition(x, x.mouse, G), f.constraints(ue, G), m.hasBounds && f.endViewTransform(x), d.trigger(x, "afterRender", be), X.lastElapsed = g.now() - L;
            }, f.stats = function(x, T, L) {
              for (var I = x.engine, N = I.world, F = h.allBodies(N), G = 0, m = 55, X = 44, re = 0, Z = 0, ie = 0; ie < F.length; ie += 1)
                G += F[ie].parts.length;
              var Y = {
                Part: G,
                Body: F.length,
                Cons: h.allConstraints(N).length,
                Comp: h.allComposites(N).length,
                Pair: I.pairs.list.length
              };
              T.fillStyle = "#0e0f19", T.fillRect(re, Z, m * 5.5, X), T.font = "12px Arial", T.textBaseline = "top", T.textAlign = "right";
              for (var ue in Y) {
                var Ne = Y[ue];
                T.fillStyle = "#aaa", T.fillText(ue, re + m, Z + 8), T.fillStyle = "#eee", T.fillText(Ne, re + m, Z + 26), re += m;
              }
            }, f.performance = function(x, T) {
              var L = x.engine, I = x.timing, N = I.deltaHistory, F = I.elapsedHistory, G = I.timestampElapsedHistory, m = I.engineDeltaHistory, X = I.engineElapsedHistory, re = L.timing.lastDelta, Z = c(N), ie = c(F), Y = c(m), ue = c(X), Ne = c(G), be = Ne / Z || 0, Ce = 1e3 / Z || 0, pe = 4, Ae = 12, je = 60, Wn = 34, We = 10, Ze = 69;
              T.fillStyle = "#0e0f19", T.fillRect(0, 50, Ae * 4 + je * 5 + 22, Wn), f.status(
                T,
                We,
                Ze,
                je,
                pe,
                N.length,
                Math.round(Ce) + " fps",
                Ce / f._goodFps,
                function(Je) {
                  return N[Je] / Z - 1;
                }
              ), f.status(
                T,
                We + Ae + je,
                Ze,
                je,
                pe,
                m.length,
                re.toFixed(2) + " dt",
                f._goodDelta / re,
                function(Je) {
                  return m[Je] / Y - 1;
                }
              ), f.status(
                T,
                We + (Ae + je) * 2,
                Ze,
                je,
                pe,
                X.length,
                ue.toFixed(2) + " ut",
                1 - ue / f._goodFps,
                function(Je) {
                  return X[Je] / ue - 1;
                }
              ), f.status(
                T,
                We + (Ae + je) * 3,
                Ze,
                je,
                pe,
                F.length,
                ie.toFixed(2) + " rt",
                1 - ie / f._goodFps,
                function(Je) {
                  return F[Je] / ie - 1;
                }
              ), f.status(
                T,
                We + (Ae + je) * 4,
                Ze,
                je,
                pe,
                G.length,
                be.toFixed(2) + " x",
                be * be * be,
                function(Je) {
                  return (G[Je] / N[Je] / be || 0) - 1;
                }
              );
            }, f.status = function(x, T, L, I, N, F, G, m, X) {
              x.strokeStyle = "#888", x.fillStyle = "#444", x.lineWidth = 1, x.fillRect(T, L + 7, I, 1), x.beginPath(), x.moveTo(T, L + 7 - N * g.clamp(0.4 * X(0), -2, 2));
              for (var re = 0; re < I; re += 1)
                x.lineTo(T + re, L + 7 - (re < F ? N * g.clamp(0.4 * X(re), -2, 2) : 0));
              x.stroke(), x.fillStyle = "hsl(" + g.clamp(25 + 95 * m, 0, 120) + ",100%,60%)", x.fillRect(T, L - 7, 4, 4), x.font = "12px Arial", x.textBaseline = "middle", x.textAlign = "right", x.fillStyle = "#eee", x.fillText(G, T + I, L - 5);
            }, f.constraints = function(x, T) {
              for (var L = T, I = 0; I < x.length; I++) {
                var N = x[I];
                if (!(!N.render.visible || !N.pointA || !N.pointB)) {
                  var F = N.bodyA, G = N.bodyB, m, X;
                  if (F ? m = w.add(F.position, N.pointA) : m = N.pointA, N.render.type === "pin")
                    L.beginPath(), L.arc(m.x, m.y, 3, 0, 2 * Math.PI), L.closePath();
                  else {
                    if (G ? X = w.add(G.position, N.pointB) : X = N.pointB, L.beginPath(), L.moveTo(m.x, m.y), N.render.type === "spring")
                      for (var re = w.sub(X, m), Z = w.perp(w.normalise(re)), ie = Math.ceil(g.clamp(N.length / 5, 12, 20)), Y, ue = 1; ue < ie; ue += 1)
                        Y = ue % 2 === 0 ? 1 : -1, L.lineTo(
                          m.x + re.x * (ue / ie) + Z.x * Y * 4,
                          m.y + re.y * (ue / ie) + Z.y * Y * 4
                        );
                    L.lineTo(X.x, X.y);
                  }
                  N.render.lineWidth && (L.lineWidth = N.render.lineWidth, L.strokeStyle = N.render.strokeStyle, L.stroke()), N.render.anchors && (L.fillStyle = N.render.strokeStyle, L.beginPath(), L.arc(m.x, m.y, 3, 0, 2 * Math.PI), L.arc(X.x, X.y, 3, 0, 2 * Math.PI), L.closePath(), L.fill());
                }
              }
            }, f.bodies = function(x, T, L) {
              var I = L;
              x.engine;
              var N = x.options, F = N.showInternalEdges || !N.wireframes, G, m, X, re;
              for (X = 0; X < T.length; X++)
                if (G = T[X], !!G.render.visible) {
                  for (re = G.parts.length > 1 ? 1 : 0; re < G.parts.length; re++)
                    if (m = G.parts[re], !!m.render.visible) {
                      if (N.showSleeping && G.isSleeping ? I.globalAlpha = 0.5 * m.render.opacity : m.render.opacity !== 1 && (I.globalAlpha = m.render.opacity), m.render.sprite && m.render.sprite.texture && !N.wireframes) {
                        var Z = m.render.sprite, ie = D(x, Z.texture);
                        I.translate(m.position.x, m.position.y), I.rotate(m.angle), I.drawImage(
                          ie,
                          ie.width * -Z.xOffset * Z.xScale,
                          ie.height * -Z.yOffset * Z.yScale,
                          ie.width * Z.xScale,
                          ie.height * Z.yScale
                        ), I.rotate(-m.angle), I.translate(-m.position.x, -m.position.y);
                      } else {
                        if (m.circleRadius)
                          I.beginPath(), I.arc(m.position.x, m.position.y, m.circleRadius, 0, 2 * Math.PI);
                        else {
                          I.beginPath(), I.moveTo(m.vertices[0].x, m.vertices[0].y);
                          for (var Y = 1; Y < m.vertices.length; Y++)
                            !m.vertices[Y - 1].isInternal || F ? I.lineTo(m.vertices[Y].x, m.vertices[Y].y) : I.moveTo(m.vertices[Y].x, m.vertices[Y].y), m.vertices[Y].isInternal && !F && I.moveTo(m.vertices[(Y + 1) % m.vertices.length].x, m.vertices[(Y + 1) % m.vertices.length].y);
                          I.lineTo(m.vertices[0].x, m.vertices[0].y), I.closePath();
                        }
                        N.wireframes ? (I.lineWidth = 1, I.strokeStyle = "#bbb", I.stroke()) : (I.fillStyle = m.render.fillStyle, m.render.lineWidth && (I.lineWidth = m.render.lineWidth, I.strokeStyle = m.render.strokeStyle, I.stroke()), I.fill());
                      }
                      I.globalAlpha = 1;
                    }
                }
            }, f.bodyWireframes = function(x, T, L) {
              var I = L, N = x.options.showInternalEdges, F, G, m, X, re;
              for (I.beginPath(), m = 0; m < T.length; m++)
                if (F = T[m], !!F.render.visible)
                  for (re = F.parts.length > 1 ? 1 : 0; re < F.parts.length; re++) {
                    for (G = F.parts[re], I.moveTo(G.vertices[0].x, G.vertices[0].y), X = 1; X < G.vertices.length; X++)
                      !G.vertices[X - 1].isInternal || N ? I.lineTo(G.vertices[X].x, G.vertices[X].y) : I.moveTo(G.vertices[X].x, G.vertices[X].y), G.vertices[X].isInternal && !N && I.moveTo(G.vertices[(X + 1) % G.vertices.length].x, G.vertices[(X + 1) % G.vertices.length].y);
                    I.lineTo(G.vertices[0].x, G.vertices[0].y);
                  }
              I.lineWidth = 1, I.strokeStyle = "#bbb", I.stroke();
            }, f.bodyConvexHulls = function(x, T, L) {
              var I = L, N, F, G;
              for (I.beginPath(), F = 0; F < T.length; F++)
                if (N = T[F], !(!N.render.visible || N.parts.length === 1)) {
                  for (I.moveTo(N.vertices[0].x, N.vertices[0].y), G = 1; G < N.vertices.length; G++)
                    I.lineTo(N.vertices[G].x, N.vertices[G].y);
                  I.lineTo(N.vertices[0].x, N.vertices[0].y);
                }
              I.lineWidth = 1, I.strokeStyle = "rgba(255,255,255,0.2)", I.stroke();
            }, f.vertexNumbers = function(x, T, L) {
              var I = L, N, F, G;
              for (N = 0; N < T.length; N++) {
                var m = T[N].parts;
                for (G = m.length > 1 ? 1 : 0; G < m.length; G++) {
                  var X = m[G];
                  for (F = 0; F < X.vertices.length; F++)
                    I.fillStyle = "rgba(255,255,255,0.2)", I.fillText(N + "_" + F, X.position.x + (X.vertices[F].x - X.position.x) * 0.8, X.position.y + (X.vertices[F].y - X.position.y) * 0.8);
                }
              }
            }, f.mousePosition = function(x, T, L) {
              var I = L;
              I.fillStyle = "rgba(255,255,255,0.8)", I.fillText(T.position.x + "  " + T.position.y, T.position.x + 5, T.position.y - 5);
            }, f.bodyBounds = function(x, T, L) {
              var I = L;
              x.engine;
              var N = x.options;
              I.beginPath();
              for (var F = 0; F < T.length; F++) {
                var G = T[F];
                if (G.render.visible)
                  for (var m = T[F].parts, X = m.length > 1 ? 1 : 0; X < m.length; X++) {
                    var re = m[X];
                    I.rect(re.bounds.min.x, re.bounds.min.y, re.bounds.max.x - re.bounds.min.x, re.bounds.max.y - re.bounds.min.y);
                  }
              }
              N.wireframes ? I.strokeStyle = "rgba(255,255,255,0.08)" : I.strokeStyle = "rgba(0,0,0,0.1)", I.lineWidth = 1, I.stroke();
            }, f.bodyAxes = function(x, T, L) {
              var I = L;
              x.engine;
              var N = x.options, F, G, m, X;
              for (I.beginPath(), G = 0; G < T.length; G++) {
                var re = T[G], Z = re.parts;
                if (re.render.visible)
                  if (N.showAxes)
                    for (m = Z.length > 1 ? 1 : 0; m < Z.length; m++)
                      for (F = Z[m], X = 0; X < F.axes.length; X++) {
                        var ie = F.axes[X];
                        I.moveTo(F.position.x, F.position.y), I.lineTo(F.position.x + ie.x * 20, F.position.y + ie.y * 20);
                      }
                  else
                    for (m = Z.length > 1 ? 1 : 0; m < Z.length; m++)
                      for (F = Z[m], X = 0; X < F.axes.length; X++)
                        I.moveTo(F.position.x, F.position.y), I.lineTo(
                          (F.vertices[0].x + F.vertices[F.vertices.length - 1].x) / 2,
                          (F.vertices[0].y + F.vertices[F.vertices.length - 1].y) / 2
                        );
              }
              N.wireframes ? (I.strokeStyle = "indianred", I.lineWidth = 1) : (I.strokeStyle = "rgba(255, 255, 255, 0.4)", I.globalCompositeOperation = "overlay", I.lineWidth = 2), I.stroke(), I.globalCompositeOperation = "source-over";
            }, f.bodyPositions = function(x, T, L) {
              var I = L;
              x.engine;
              var N = x.options, F, G, m, X;
              for (I.beginPath(), m = 0; m < T.length; m++)
                if (F = T[m], !!F.render.visible)
                  for (X = 0; X < F.parts.length; X++)
                    G = F.parts[X], I.arc(G.position.x, G.position.y, 3, 0, 2 * Math.PI, !1), I.closePath();
              for (N.wireframes ? I.fillStyle = "indianred" : I.fillStyle = "rgba(0,0,0,0.5)", I.fill(), I.beginPath(), m = 0; m < T.length; m++)
                F = T[m], F.render.visible && (I.arc(F.positionPrev.x, F.positionPrev.y, 2, 0, 2 * Math.PI, !1), I.closePath());
              I.fillStyle = "rgba(255,165,0,0.8)", I.fill();
            }, f.bodyVelocity = function(x, T, L) {
              var I = L;
              I.beginPath();
              for (var N = 0; N < T.length; N++) {
                var F = T[N];
                if (F.render.visible) {
                  var G = y.getVelocity(F);
                  I.moveTo(F.position.x, F.position.y), I.lineTo(F.position.x + G.x, F.position.y + G.y);
                }
              }
              I.lineWidth = 3, I.strokeStyle = "cornflowerblue", I.stroke();
            }, f.bodyIds = function(x, T, L) {
              var I = L, N, F;
              for (N = 0; N < T.length; N++)
                if (T[N].render.visible) {
                  var G = T[N].parts;
                  for (F = G.length > 1 ? 1 : 0; F < G.length; F++) {
                    var m = G[F];
                    I.font = "12px Arial", I.fillStyle = "rgba(255,255,255,0.5)", I.fillText(m.id, m.position.x + 10, m.position.y - 10);
                  }
                }
            }, f.collisions = function(x, T, L) {
              var I = L, N = x.options, F, G, m, X;
              for (I.beginPath(), m = 0; m < T.length; m++)
                if (F = T[m], !!F.isActive)
                  for (G = F.collision, X = 0; X < F.activeContacts.length; X++) {
                    var re = F.activeContacts[X], Z = re.vertex;
                    I.rect(Z.x - 1.5, Z.y - 1.5, 3.5, 3.5);
                  }
              for (N.wireframes ? I.fillStyle = "rgba(255,255,255,0.7)" : I.fillStyle = "orange", I.fill(), I.beginPath(), m = 0; m < T.length; m++)
                if (F = T[m], !!F.isActive && (G = F.collision, F.activeContacts.length > 0)) {
                  var ie = F.activeContacts[0].vertex.x, Y = F.activeContacts[0].vertex.y;
                  F.activeContacts.length === 2 && (ie = (F.activeContacts[0].vertex.x + F.activeContacts[1].vertex.x) / 2, Y = (F.activeContacts[0].vertex.y + F.activeContacts[1].vertex.y) / 2), G.bodyB === G.supports[0].body || G.bodyA.isStatic === !0 ? I.moveTo(ie - G.normal.x * 8, Y - G.normal.y * 8) : I.moveTo(ie + G.normal.x * 8, Y + G.normal.y * 8), I.lineTo(ie, Y);
                }
              N.wireframes ? I.strokeStyle = "rgba(255,165,0,0.7)" : I.strokeStyle = "orange", I.lineWidth = 1, I.stroke();
            }, f.separations = function(x, T, L) {
              var I = L, N = x.options, F, G, m, X, re;
              for (I.beginPath(), re = 0; re < T.length; re++)
                if (F = T[re], !!F.isActive) {
                  G = F.collision, m = G.bodyA, X = G.bodyB;
                  var Z = 1;
                  !X.isStatic && !m.isStatic && (Z = 0.5), X.isStatic && (Z = 0), I.moveTo(X.position.x, X.position.y), I.lineTo(X.position.x - G.penetration.x * Z, X.position.y - G.penetration.y * Z), Z = 1, !X.isStatic && !m.isStatic && (Z = 0.5), m.isStatic && (Z = 0), I.moveTo(m.position.x, m.position.y), I.lineTo(m.position.x + G.penetration.x * Z, m.position.y + G.penetration.y * Z);
                }
              N.wireframes ? I.strokeStyle = "rgba(255,165,0,0.5)" : I.strokeStyle = "orange", I.stroke();
            }, f.inspector = function(x, T) {
              x.engine;
              var L = x.selected, I = x.render, N = I.options, F;
              if (N.hasBounds) {
                var G = I.bounds.max.x - I.bounds.min.x, m = I.bounds.max.y - I.bounds.min.y, X = G / I.options.width, re = m / I.options.height;
                T.scale(1 / X, 1 / re), T.translate(-I.bounds.min.x, -I.bounds.min.y);
              }
              for (var Z = 0; Z < L.length; Z++) {
                var ie = L[Z].data;
                switch (T.translate(0.5, 0.5), T.lineWidth = 1, T.strokeStyle = "rgba(255,165,0,0.9)", T.setLineDash([1, 2]), ie.type) {
                  case "body":
                    F = ie.bounds, T.beginPath(), T.rect(
                      Math.floor(F.min.x - 3),
                      Math.floor(F.min.y - 3),
                      Math.floor(F.max.x - F.min.x + 6),
                      Math.floor(F.max.y - F.min.y + 6)
                    ), T.closePath(), T.stroke();
                    break;
                  case "constraint":
                    var Y = ie.pointA;
                    ie.bodyA && (Y = ie.pointB), T.beginPath(), T.arc(Y.x, Y.y, 10, 0, 2 * Math.PI), T.closePath(), T.stroke();
                    break;
                }
                T.setLineDash([]), T.translate(-0.5, -0.5);
              }
              x.selectStart !== null && (T.translate(0.5, 0.5), T.lineWidth = 1, T.strokeStyle = "rgba(255,165,0,0.6)", T.fillStyle = "rgba(255,165,0,0.1)", F = x.selectBounds, T.beginPath(), T.rect(
                Math.floor(F.min.x),
                Math.floor(F.min.y),
                Math.floor(F.max.x - F.min.x),
                Math.floor(F.max.y - F.min.y)
              ), T.closePath(), T.stroke(), T.fill(), T.translate(-0.5, -0.5)), N.hasBounds && T.setTransform(1, 0, 0, 1, 0, 0);
            };
            var i = function(x, T) {
              var L = x.engine, I = x.timing, N = I.historySize, F = L.timing.timestamp;
              I.delta = T - I.lastTime || f._goodDelta, I.lastTime = T, I.timestampElapsed = F - I.lastTimestamp || 0, I.lastTimestamp = F, I.deltaHistory.unshift(I.delta), I.deltaHistory.length = Math.min(I.deltaHistory.length, N), I.engineDeltaHistory.unshift(L.timing.lastDelta), I.engineDeltaHistory.length = Math.min(I.engineDeltaHistory.length, N), I.timestampElapsedHistory.unshift(I.timestampElapsed), I.timestampElapsedHistory.length = Math.min(I.timestampElapsedHistory.length, N), I.engineElapsedHistory.unshift(L.timing.lastElapsed), I.engineElapsedHistory.length = Math.min(I.engineElapsedHistory.length, N), I.elapsedHistory.unshift(I.lastElapsed), I.elapsedHistory.length = Math.min(I.elapsedHistory.length, N);
            }, c = function(x) {
              for (var T = 0, L = 0; L < x.length; L += 1)
                T += x[L];
              return T / x.length || 0;
            }, P = function(x, T) {
              var L = document.createElement("canvas");
              return L.width = x, L.height = T, L.oncontextmenu = function() {
                return !1;
              }, L.onselectstart = function() {
                return !1;
              }, L;
            }, q = function(x) {
              var T = x.getContext("2d"), L = window.devicePixelRatio || 1, I = T.webkitBackingStorePixelRatio || T.mozBackingStorePixelRatio || T.msBackingStorePixelRatio || T.oBackingStorePixelRatio || T.backingStorePixelRatio || 1;
              return L / I;
            }, D = function(x, T) {
              var L = x.textures[T];
              return L || (L = x.textures[T] = new Image(), L.src = T, L);
            }, U = function(x, T) {
              var L = T;
              /(jpg|gif|png)$/.test(T) && (L = "url(" + T + ")"), x.canvas.style.background = L, x.canvas.style.backgroundSize = "contain", x.currentBackground = T;
            };
          })();
        },
        /* 27 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(5), g = E(17), h = E(0);
          (function() {
            var S, d;
            if (typeof window < "u" && (S = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, d = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), !S) {
              var w;
              S = function(l) {
                w = setTimeout(function() {
                  l(h.now());
                }, 1e3 / 60);
              }, d = function() {
                clearTimeout(w);
              };
            }
            f.create = function(l) {
              var t = {
                fps: 60,
                deltaSampleSize: 60,
                counterTimestamp: 0,
                frameCounter: 0,
                deltaHistory: [],
                timePrev: null,
                frameRequestId: null,
                isFixed: !1,
                enabled: !0
              }, o = h.extend(t, l);
              return o.delta = o.delta || 1e3 / o.fps, o.deltaMin = o.deltaMin || 1e3 / o.fps, o.deltaMax = o.deltaMax || 1e3 / (o.fps * 0.5), o.fps = 1e3 / o.delta, o;
            }, f.run = function(l, t) {
              return typeof l.positionIterations < "u" && (t = l, l = f.create()), function o(i) {
                l.frameRequestId = S(o), i && l.enabled && f.tick(l, t, i);
              }(), l;
            }, f.tick = function(l, t, o) {
              var i = t.timing, c;
              l.isFixed ? c = l.delta : (c = o - l.timePrev || l.delta, l.timePrev = o, l.deltaHistory.push(c), l.deltaHistory = l.deltaHistory.slice(-l.deltaSampleSize), c = Math.min.apply(null, l.deltaHistory), c = c < l.deltaMin ? l.deltaMin : c, c = c > l.deltaMax ? l.deltaMax : c, l.delta = c);
              var P = {
                timestamp: i.timestamp
              };
              y.trigger(l, "beforeTick", P), l.frameCounter += 1, o - l.counterTimestamp >= 1e3 && (l.fps = l.frameCounter * ((o - l.counterTimestamp) / 1e3), l.counterTimestamp = o, l.frameCounter = 0), y.trigger(l, "tick", P), y.trigger(l, "beforeUpdate", P), g.update(t, c), y.trigger(l, "afterUpdate", P), y.trigger(l, "afterTick", P);
            }, f.stop = function(l) {
              d(l.frameRequestId);
            }, f.start = function(l, t) {
              f.run(l, t);
            };
          })();
        },
        /* 28 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(8), g = E(0), h = g.deprecated;
          (function() {
            f.collides = function(S, d) {
              return y.collides(S, d);
            }, h(f, "collides", "SAT.collides ➤ replaced by Collision.collides");
          })();
        },
        /* 29 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f, E(1);
          var y = E(0);
          (function() {
            f.pathToVertices = function(g, h) {
              typeof window < "u" && !("SVGPathSeg" in window) && y.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
              var S, d, w, l, t, o, i, c, P, q, D = [], U, x, T = 0, L = 0, I = 0;
              h = h || 15;
              var N = function(G, m, X) {
                var re = X % 2 === 1 && X > 1;
                if (!P || G != P.x || m != P.y) {
                  P && re ? (U = P.x, x = P.y) : (U = 0, x = 0);
                  var Z = {
                    x: U + G,
                    y: x + m
                  };
                  (re || !P) && (P = Z), D.push(Z), L = U + G, I = x + m;
                }
              }, F = function(G) {
                var m = G.pathSegTypeAsLetter.toUpperCase();
                if (m !== "Z") {
                  switch (m) {
                    case "M":
                    case "L":
                    case "T":
                    case "C":
                    case "S":
                    case "Q":
                      L = G.x, I = G.y;
                      break;
                    case "H":
                      L = G.x;
                      break;
                    case "V":
                      I = G.y;
                      break;
                  }
                  N(L, I, G.pathSegType);
                }
              };
              for (f._svgPathToAbsolute(g), w = g.getTotalLength(), o = [], S = 0; S < g.pathSegList.numberOfItems; S += 1)
                o.push(g.pathSegList.getItem(S));
              for (i = o.concat(); T < w; ) {
                if (q = g.getPathSegAtLength(T), t = o[q], t != c) {
                  for (; i.length && i[0] != t; )
                    F(i.shift());
                  c = t;
                }
                switch (t.pathSegTypeAsLetter.toUpperCase()) {
                  case "C":
                  case "T":
                  case "S":
                  case "Q":
                  case "A":
                    l = g.getPointAtLength(T), N(l.x, l.y, 0);
                    break;
                }
                T += h;
              }
              for (S = 0, d = i.length; S < d; ++S)
                F(i[S]);
              return D;
            }, f._svgPathToAbsolute = function(g) {
              for (var h, S, d, w, l, t, o = g.pathSegList, i = 0, c = 0, P = o.numberOfItems, q = 0; q < P; ++q) {
                var D = o.getItem(q), U = D.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(U))
                  "x" in D && (i = D.x), "y" in D && (c = D.y);
                else
                  switch ("x1" in D && (d = i + D.x1), "x2" in D && (l = i + D.x2), "y1" in D && (w = c + D.y1), "y2" in D && (t = c + D.y2), "x" in D && (i += D.x), "y" in D && (c += D.y), U) {
                    case "m":
                      o.replaceItem(g.createSVGPathSegMovetoAbs(i, c), q);
                      break;
                    case "l":
                      o.replaceItem(g.createSVGPathSegLinetoAbs(i, c), q);
                      break;
                    case "h":
                      o.replaceItem(g.createSVGPathSegLinetoHorizontalAbs(i), q);
                      break;
                    case "v":
                      o.replaceItem(g.createSVGPathSegLinetoVerticalAbs(c), q);
                      break;
                    case "c":
                      o.replaceItem(g.createSVGPathSegCurvetoCubicAbs(i, c, d, w, l, t), q);
                      break;
                    case "s":
                      o.replaceItem(g.createSVGPathSegCurvetoCubicSmoothAbs(i, c, l, t), q);
                      break;
                    case "q":
                      o.replaceItem(g.createSVGPathSegCurvetoQuadraticAbs(i, c, d, w), q);
                      break;
                    case "t":
                      o.replaceItem(g.createSVGPathSegCurvetoQuadraticSmoothAbs(i, c), q);
                      break;
                    case "a":
                      o.replaceItem(g.createSVGPathSegArcAbs(i, c, D.r1, D.r2, D.angle, D.largeArcFlag, D.sweepFlag), q);
                      break;
                    case "z":
                    case "Z":
                      i = h, c = S;
                      break;
                  }
                (U == "M" || U == "m") && (h = i, S = c);
              }
            };
          })();
        },
        /* 30 */
        /***/
        function(_, ge, E) {
          var f = {};
          _.exports = f;
          var y = E(6);
          E(0), function() {
            f.create = y.create, f.add = y.add, f.remove = y.remove, f.clear = y.clear, f.addComposite = y.addComposite, f.addBody = y.addBody, f.addConstraint = y.addConstraint;
          }();
        }
        /******/
      ])
    );
  });
})(k7);
var My = k7.exports;
const Cr = /* @__PURE__ */ M7(My);
var T7 = { exports: {} };
/* @license Apache-2.0 */
(function(Ve, He) {
  (function(_) {
    Ve.exports = _();
  })(function() {
    var _ = typeof Object.defineProperty == "function" ? Object.defineProperty : null, ge = function() {
      try {
        return _({}, "x", {}), !0;
      } catch {
        return !1;
      }
    }, E = Object.defineProperty, f = Object.prototype, y = f.toString, g = f.__defineGetter__, h = f.__defineSetter__, S = f.__lookupGetter__, d = f.__lookupSetter__, w = function(e, n, r) {
      var a, s, u, p;
      if (typeof e != "object" || e === null || y.call(e) === "[object Array]")
        throw new TypeError("invalid argument. First argument must be an object. Value: `" + e + "`.");
      if (typeof r != "object" || r === null || y.call(r) === "[object Array]")
        throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + r + "`.");
      if ((s = "value" in r) && (S.call(e, n) || d.call(e, n) ? (a = e.__proto__, e.__proto__ = f, delete e[n], e[n] = r.value, e.__proto__ = a) : e[n] = r.value), u = "get" in r, p = "set" in r, s && (u || p))
        throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
      return u && g && g.call(e, n, r.get), p && h && h.call(e, n, r.set), e;
    }, l = ge() ? E : w, t = function(e, n, r) {
      l(e, n, { configurable: !1, enumerable: !0, writable: !1, value: r });
    }, o = function(e, n, r) {
      l(e, n, { configurable: !1, enumerable: !1, writable: !1, value: r });
    }, i = function(e) {
      return e != e;
    }, c = Math.sqrt, P = 0.7853981633974483, q = function(e) {
      var n, r;
      return e === 0 ? 0.16666666666666713 : ((e < 0 ? -e : e) <= 1 ? (n = e * (19.562619833175948 + e * (e * (5.444622390564711 + e * (0.004253011369004428 * e - 0.6019598008014124)) - 16.262479672107002)) - 8.198089802484825, r = e * (139.51056146574857 + e * (e * (70.49610280856842 + e * (1 * e - 14.740913729888538)) - 147.1791292232726)) - 49.18853881490881) : (n = 0.004253011369004428 + (e = 1 / e) * (e * (5.444622390564711 + e * (e * (19.562619833175948 + -8.198089802484825 * e) - 16.262479672107002)) - 0.6019598008014124), r = 1 + e * (e * (70.49610280856842 + e * (e * (139.51056146574857 + -49.18853881490881 * e) - 147.1791292232726)) - 14.740913729888538)), n / r);
    }, D = function(e) {
      var n, r;
      return e === 0 ? 0.08333333333333809 : ((e < 0 ? -e : e) <= 1 ? (n = 28.536655482610616 + e * (e * (6.968710824104713 + e * (0.002967721961301243 * e - 0.5634242780008963)) - 25.56901049652825), r = 342.43986579130785 + e * (e * (147.0656354026815 + e * (1 * e - 21.947795316429207)) - 383.8770957603691)) : (n = 0.002967721961301243 + (e = 1 / e) * (e * (6.968710824104713 + e * (28.536655482610616 * e - 25.56901049652825)) - 0.5634242780008963), r = 1 + e * (e * (147.0656354026815 + e * (342.43986579130785 * e - 383.8770957603691)) - 21.947795316429207)), n / r);
    }, U = 6123233995736766e-32, x = function(e) {
      var n, r, a, s, u;
      if (i(e))
        return NaN;
      if (e > 0 ? a = e : (n = !0, a = -e), a > 1)
        return NaN;
      if (a > 0.625)
        s = (r = 1 - a) * D(r), r = c(r + r), u = P - r, u -= r = r * s - U, u += P;
      else {
        if (a < 1e-8)
          return e;
        u = a * (u = (r = a * a) * q(r)) + a;
      }
      return n ? -u : u;
    }, T = 3.141592653589793, L = 2 / T, I = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n ? 0 : e >= r ? 1 : L * x(c((e - n) / (r - n)));
    }, N = function(e) {
      return function() {
        return e;
      };
    }, F = 2 / T;
    o(I, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e ? 0 : r >= n ? 1 : F * x(c((r - e) / (n - e)));
      };
    });
    var G = I, m = function(e, n, r) {
      l(e, n, { configurable: !1, enumerable: !1, get: r });
    }, X = function(e) {
      return typeof e == "number";
    }, re = function() {
      return typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
    }(), Z = function() {
      return re && typeof Symbol.toStringTag == "symbol";
    }, ie = Object.prototype.toString, Y = function(e) {
      return ie.call(e);
    }, ue = Object.prototype.hasOwnProperty, Ne = function(e, n) {
      return e != null && ue.call(e, n);
    }, be = typeof Symbol == "function" ? Symbol.toStringTag : "", Ce = function(e) {
      var n, r, a;
      if (e == null)
        return ie.call(e);
      r = e[be], n = Ne(e, be);
      try {
        e[be] = void 0;
      } catch {
        return ie.call(e);
      }
      return a = ie.call(e), n ? e[be] = r : delete e[be], a;
    }, pe = Z() ? Ce : Y, Ae = Number, je = Ae.prototype.toString, Wn = Boolean.prototype.toString, We = function(e) {
      try {
        return Wn.call(e), !0;
      } catch {
        return !1;
      }
    }, Ze = function(e) {
      try {
        return je.call(e), !0;
      } catch {
        return !1;
      }
    }, Je = Z(), Wi = function(e) {
      return typeof e == "object" && (e instanceof Ae || (Je ? Ze(e) : pe(e) === "[object Number]"));
    }, gi = function(e) {
      return X(e) || Wi(e);
    };
    o(gi, "isPrimitive", X), o(gi, "isObject", Wi);
    var Ge = gi, Gi = typeof Uint32Array == "function", zi = function(e) {
      return Gi && e instanceof Uint32Array || pe(e) === "[object Uint32Array]";
    }, zr = 4294967295, Jn = typeof Uint32Array == "function" ? Uint32Array : null, ji = typeof Uint32Array == "function" ? Uint32Array : void 0, Ni = function() {
      throw new Error("not implemented");
    }, mr = function() {
      var e, n;
      if (typeof Jn != "function")
        return !1;
      try {
        n = new Jn(n = [1, 3.14, -3.14, zr + 1, zr + 2]), e = zi(n) && n[0] === 1 && n[1] === 3 && n[2] === zr - 2 && n[3] === 0 && n[4] === 1;
      } catch {
        e = !1;
      }
      return e;
    }() ? ji : Ni, Ki = typeof Float64Array == "function", Qi = function(e) {
      return Ki && e instanceof Float64Array || pe(e) === "[object Float64Array]";
    }, yi = typeof Float64Array == "function" ? Float64Array : null, Zr = typeof Float64Array == "function" ? Float64Array : void 0, ja = function() {
      throw new Error("not implemented");
    }, sr = function() {
      var e, n;
      if (typeof yi != "function")
        return !1;
      try {
        n = new yi([1, 3.14, -3.14, NaN]), e = Qi(n) && n[0] === 1 && n[1] === 3.14 && n[2] === -3.14 && n[3] != n[3];
      } catch {
        e = !1;
      }
      return e;
    }() ? Zr : ja, Jr = typeof Uint8Array == "function", Xr = function(e) {
      return Jr && e instanceof Uint8Array || pe(e) === "[object Uint8Array]";
    }, Ka = 255, it = typeof Uint8Array == "function" ? Uint8Array : null, E7 = typeof Uint8Array == "function" ? Uint8Array : void 0, P7 = function() {
      throw new Error("not implemented");
    }, V7 = function() {
      var e, n;
      if (typeof it != "function")
        return !1;
      try {
        n = new it(n = [1, 3.14, -3.14, Ka + 1, Ka + 2]), e = Xr(n) && n[0] === 1 && n[1] === 3 && n[2] === Ka - 2 && n[3] === 0 && n[4] === 1;
      } catch {
        e = !1;
      }
      return e;
    }() ? E7 : P7, C7 = typeof Uint16Array == "function", A7 = function(e) {
      return C7 && e instanceof Uint16Array || pe(e) === "[object Uint16Array]";
    }, Qa = 65535, at = typeof Uint16Array == "function" ? Uint16Array : null, I7 = typeof Uint16Array == "function" ? Uint16Array : void 0, tt, B7 = function() {
      throw new Error("not implemented");
    }, ot = { uint16: function() {
      var e, n;
      if (typeof at != "function")
        return !1;
      try {
        n = new at(n = [1, 3.14, -3.14, Qa + 1, Qa + 2]), e = A7(n) && n[0] === 1 && n[1] === 3 && n[2] === Qa - 2 && n[3] === 0 && n[4] === 1;
      } catch {
        e = !1;
      }
      return e;
    }() ? I7 : B7, uint8: V7 };
    (tt = new ot.uint16(1))[0] = 4660;
    var Yr = new ot.uint8(tt.buffer)[0] === 52, R7 = Yr === !0 ? 1 : 0, st = new sr(1), L7 = new mr(st.buffer), Ke = function(e) {
      return st[0] = e, L7[R7];
    }, q7 = Yr === !0 ? 1 : 0, $a = new sr(1), F7 = new mr($a.buffer), Xn = function(e, n) {
      return $a[0] = e, F7[q7] = n >>> 0, $a[0];
    }, ur = 1023, j = Ae.NEGATIVE_INFINITY, O7 = function(e) {
      return e === 0 ? 0.3999999999940942 : 0.3999999999940942 + e * (0.22222198432149784 + 0.15313837699209373 * e);
    }, D7 = function(e) {
      return e === 0 ? 0.6666666666666735 : 0.6666666666666735 + e * (0.2857142874366239 + e * (0.1818357216161805 + 0.14798198605116586 * e));
    }, $i = 0.6931471803691238, Zi = 19082149292705877e-26, U7 = 18014398509481984, H7 = 0.3333333333333333, ut = 1048575, W7 = 2146435072, G7 = 1048576, z7 = 1072693248, M = function(e) {
      var n, r, a, s, u, p, k, b, C, O, B;
      return e === 0 ? j : i(e) || e < 0 ? NaN : (s = 0, (r = Ke(e)) < G7 && (s -= 54, r = Ke(e *= U7)), r >= W7 ? e + e : (s += (r >> 20) - ur | 0, s += (k = 614244 + (r &= ut) & 1048576 | 0) >> 20 | 0, p = (e = Xn(e, r | k ^ z7)) - 1, (ut & 2 + r) < 3 ? p === 0 ? s === 0 ? 0 : s * $i + s * Zi : (u = p * p * (0.5 - H7 * p), s === 0 ? p - u : s * $i - (u - s * Zi - p)) : (k = r - 398458 | 0, b = 440401 - r | 0, a = (O = (B = (C = p / (2 + p)) * C) * B) * O7(O), u = B * D7(O) + a, (k |= b) > 0 ? (n = 0.5 * p * p, s === 0 ? p - (n - C * (n + u)) : s * $i - (n - (C * (n + u) + s * Zi) - p)) : s === 0 ? p - C * (p - u) : s * $i - (C * (p - u) - s * Zi - p))));
    }, j7 = M(P), ft = function(e, n) {
      return i(e) || i(n) || e >= n ? NaN : j7 + M(n - e);
    }, ct = function(e, n) {
      return i(e) || i(n) || e >= n ? NaN : -1.5;
    }, lt = function(e, n) {
      return e >= n ? NaN : 0.5 * (e + n);
    }, vt = function(e, n) {
      return e >= n ? NaN : 0.5 * (e + n);
    }, pt = function(e, n) {
      return i(e) || i(n) || e >= n ? NaN : e;
    }, mt = function(e, n) {
      return i(e) || i(n) || e >= n ? NaN : 0;
    }, K7 = 0.35355339059327373, ht = function(e, n) {
      return e >= n ? NaN : K7 * (n - e);
    }, ye = Math.floor, me = function(e) {
      return ye(e) === e;
    }, Q7 = function(e) {
      return me(e / 2);
    }, bi = function(e) {
      return Q7(e > 0 ? e - 1 : e + 1);
    }, H = Number.POSITIVE_INFINITY, Yn = function(e) {
      return e === H || e === j;
    }, Za, Ja, J = function(e) {
      return Math.abs(e);
    };
    Yr === !0 ? (Za = 1, Ja = 0) : (Za = 0, Ja = 1);
    var Xa, Ya, dt = { HIGH: Za, LOW: Ja };
    Yr === !0 ? (Xa = 1, Ya = 0) : (Xa = 0, Ya = 1);
    var gt = { HIGH: Xa, LOW: Ya }, Nt = new sr(1), yt = new mr(Nt.buffer), $7 = gt.HIGH, Z7 = gt.LOW, bt = function(e, n) {
      return Nt[0] = n, e[0] = yt[$7], e[1] = yt[Z7], e;
    }, _r = function(e, n) {
      return arguments.length === 1 ? bt([0, 0], e) : bt(e, n);
    }, J7 = Yr === !0 ? 0 : 1, X7 = Yr === !0 ? 0 : 1, _a = new sr(1), Y7 = new mr(_a.buffer), _n = function(e, n) {
      return _a[0] = e, Y7[X7] = n >>> 0, _a[0];
    }, e0 = function(e) {
      return 0 | e;
    }, wt = new sr(1), xt = new mr(wt.buffer), _7 = dt.HIGH, ev = dt.LOW, n0 = function(e, n) {
      return xt[_7] = e, xt[ev] = n, wt[0];
    }, nv = 2147483648, rv = 2147483647, r0 = [0, 0], Rn = function(e, n) {
      var r, a;
      return _r(r0, e), r = r0[0], r &= rv, a = Ke(n), n0(r |= a &= nv, r0[1]);
    }, iv = function(e, n) {
      return n === j ? H : n === H ? 0 : n > 0 ? bi(n) ? e : 0 : bi(n) ? Rn(H, e) : H;
    }, av = 2147483647, tv = 1072693247, Ji = 1e300, Xi = 1e-300, ov = function(e, n) {
      return (Ke(e) & av) <= tv ? n < 0 ? Ji * Ji : Xi * Xi : n > 0 ? Ji * Ji : Xi * Xi;
    }, sv = function(e, n) {
      return e === -1 ? (e - e) / (e - e) : e === 1 ? 1 : J(e) < 1 == (n === H) ? 0 : H;
    }, uv = function(e) {
      return e === 0 ? 0.5999999999999946 : 0.5999999999999946 + e * (0.4285714285785502 + e * (0.33333332981837743 + e * (0.272728123808534 + e * (0.23066074577556175 + 0.20697501780033842 * e))));
    }, fv = 1048575, St = 1048576, cv = 1072693248, lv = 536870912, vv = 524288, pv = 20, mv = 9007199254740992, hv = 0.9617966939259756, dv = 0.9617967009544373, gv = -7028461650952758e-24, Nv = [1, 1.5], yv = [0, 0.5849624872207642], bv = [0, 1350039202129749e-23], wv = function(e, n, r) {
      var a, s, u, p, k, b, C, O, B, A, W, z, K, $, ae, Q, fe, le, se, te;
      return le = 0, r < St && (le -= 53, r = Ke(n *= mv)), le += (r >> pv) - ur | 0, r = (se = r & fv | 0) | cv | 0, se <= 235662 ? te = 0 : se < 767610 ? te = 1 : (te = 0, le += 1, r -= St), n = Xn(n, r), C = Nv[te], p = _n(s = (Q = n - C) * (fe = 1 / (n + C)), 0), a = (r >> 1 | lv) + vv, k = fe * (Q - p * (b = Xn(0, a += te << 18)) - p * (n - (b - C))), ae = (u = s * s) * u * uv(u), b = _n(b = 3 + (u = p * p) + (ae += k * (p + s)), 0), B = _n(B = (Q = p * b) + (fe = k * b + (ae - (b - 3 - u)) * s), 0), A = dv * B, W = gv * B + (fe - (B - Q)) * hv + bv[te], O = yv[te], K = W - ((z = _n(z = A + W + O + ($ = le), 0)) - $ - O - A), e[0] = z, e[1] = K, e;
    }, xv = function(e) {
      return e === 0 ? 0.5 : 0.5 + e * (0.25 * e - 0.3333333333333333);
    }, Sv = 1.4426950408889634, Mv = 1.4426950216293335, kv = 19259629911266175e-24, Tv = function(e, n) {
      var r, a, s, u, p, k;
      return u = (s = n - 1) * s * xv(s), r = (k = s * kv - u * Sv) - ((a = _n(a = (p = Mv * s) + k, 0)) - p), e[0] = a, e[1] = r, e;
    }, Ev = 1023, Pv = -1023, Vv = -1074, er = 22250738585072014e-324, Cv = 4503599627370496, Mt = function(e, n) {
      return i(n) || Yn(n) ? (e[0] = n, e[1] = 0, e) : n !== 0 && J(n) < er ? (e[0] = n * Cv, e[1] = -52, e) : (e[0] = n, e[1] = 0, e);
    }, Av = function(e, n) {
      return arguments.length === 1 ? Mt([0, 0], e) : Mt(e, n);
    }, Iv = 2146435072, Bv = function(e) {
      var n = Ke(e);
      return (n = (n & Iv) >>> 20) - ur | 0;
    }, Rv = 2220446049250313e-31, Lv = 2148532223, i0 = [0, 0], a0 = [0, 0], ir = function(e, n) {
      var r, a;
      return e === 0 || i(e) || Yn(e) ? e : (Av(i0, e), e = i0[0], n += i0[1], (n += Bv(e)) < Vv ? Rn(0, e) : n > Ev ? e < 0 ? j : H : (n <= Pv ? (n += 52, a = Rv) : a = 1, _r(a0, e), r = a0[0], r &= Lv, a * n0(r |= n + ur << 20, a0[1])));
    }, Oe = 0.6931471805599453, qv = function(e) {
      return e === 0 ? 0.16666666666666602 : 0.16666666666666602 + e * (e * (6613756321437934e-20 + e * (41381367970572385e-24 * e - 16533902205465252e-22)) - 0.0027777777777015593);
    }, Fv = function(e) {
      return e === 0 ? 0.16666666666666602 : 0.16666666666666602 + e * (e * (6613756321437934e-20 + e * (41381367970572385e-24 * e - 16533902205465252e-22)) - 0.0027777777777015593);
    }, kt = 2147483647, Tt = 1048575, Et = 1048576, Ov = 1071644672, wi = 20, Dv = 0.6931471824645996, Uv = -1904654299957768e-24, Hv = function(e, n, r) {
      var a, s, u, p, k, b, C, O, B;
      return B = ((O = e & kt | 0) >> wi) - ur | 0, C = 0, O > Ov && (s = Xn(0, ((C = e + (Et >> B + 1) >>> 0) & ~(Tt >> (B = ((C & kt) >> wi) - ur | 0))) >>> 0), C = (C & Tt | Et) >> wi - B >>> 0, e < 0 && (C = -C), n -= s), k = (p = (r - ((s = _n(s = r + n, 0)) - n)) * Oe + s * Uv) - ((b = (u = s * Dv) + p) - u), a = b - (s = b * b) * Fv(s), e = Ke(b = 1 - (b * a / (a - 2) - (k + b * k) - b)), e = e0(e), b = (e += C << wi >>> 0) >> wi <= 0 ? ir(b, C) : Xn(b, e);
    }, t0 = 2147483647, Wv = 1072693247, Gv = 1105199104, zv = 1139802112, Pt = 1083179008, jv = 1072693248, Kv = 1083231232, Qv = 3230714880, Vt = 31, Ar = 1e300, Ir = 1e-300, $v = 8008566259537294e-32, hr = [0, 0], Ct = [0, 0], V = function e(n, r) {
      var a, s, u, p, k, b, C, O, B, A, W, z, K, $;
      if (i(n) || i(r))
        return NaN;
      if (_r(hr, r), k = hr[0], hr[1] === 0) {
        if (r === 0)
          return 1;
        if (r === 1)
          return n;
        if (r === -1)
          return 1 / n;
        if (r === 0.5)
          return c(n);
        if (r === -0.5)
          return 1 / c(n);
        if (r === 2)
          return n * n;
        if (r === 3)
          return n * n * n;
        if (r === 4)
          return (n *= n) * n;
        if (Yn(r))
          return sv(n, r);
      }
      if (_r(hr, n), p = hr[0], hr[1] === 0) {
        if (p === 0)
          return iv(n, r);
        if (n === 1)
          return 1;
        if (n === -1 && bi(r))
          return -1;
        if (Yn(n))
          return n === j ? e(-0, -r) : r < 0 ? 0 : H;
      }
      if (n < 0 && me(r) === !1)
        return (n - n) / (n - n);
      if (u = J(n), a = p & t0 | 0, s = k & t0 | 0, C = k >>> Vt | 0, b = (b = p >>> Vt | 0) && bi(r) ? -1 : 1, s > Gv) {
        if (s > zv)
          return ov(n, r);
        if (a < Wv)
          return C === 1 ? b * Ar * Ar : b * Ir * Ir;
        if (a > jv)
          return C === 0 ? b * Ar * Ar : b * Ir * Ir;
        W = Tv(Ct, u);
      } else
        W = wv(Ct, u, a);
      if (A = (r - (O = _n(r, 0))) * W[0] + r * W[1], B = O * W[0], _r(hr, z = A + B), K = e0(hr[0]), $ = e0(hr[1]), K >= Pt) {
        if (K - Pt | $ || A + $v > z - B)
          return b * Ar * Ar;
      } else if ((K & t0) >= Kv && (K - Qv | $ || A <= z - B))
        return b * Ir * Ir;
      return b * (z = Hv(K, B, A));
    }, At = function(e, n) {
      return e >= n ? NaN : 0.125 * V(n - e, 2);
    }, ei = 1.1447298858494002, It = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n ? j : e >= r ? 0 : Oe - ei + M(x(c((e - n) / (r - n))));
    };
    o(It, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e ? j : r >= n ? 0 : Oe - ei + M(x(c((r - e) / (n - e))));
      };
    });
    var Bt = It, Rt = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n || e > r ? j : -(ei + M((e - n) * (r - e)) / 2);
    };
    o(Rt, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e || r > n ? j : -(ei + M((r - e) * (n - r)) / 2);
      };
    });
    var Lt = Rt, qt = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n || e > r ? 0 : 1 / (T * c((e - n) * (r - e)));
    };
    o(qt, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e || r > n ? 0 : 1 / (T * c((r - e) * (n - r)));
      };
    });
    var Ft = qt, Zv = function(e) {
      return e === 0 ? 0.0416666666666666 : 0.0416666666666666 + e * (2480158728947673e-20 * e - 0.001388888888887411);
    }, Jv = function(e) {
      return e === 0 ? -27557314351390663e-23 : e * (2087572321298175e-24 + -11359647557788195e-27 * e) - 27557314351390663e-23;
    }, xi = function(e, n) {
      var r, a, s, u;
      return s = (u = e * e) * u, a = u * Zv(u), a += s * s * Jv(u), (s = 1 - (r = 0.5 * u)) + (1 - s - r + (u * a - e * n));
    }, Ot = -0.16666666666666632, Xv = 0.00833333333332249, Yv = -1984126982985795e-19, _v = 27557313707070068e-22, e8 = -25050760253406863e-24, n8 = 158969099521155e-24, Si = function(e, n) {
      var r, a, s;
      return r = Xv + (s = e * e) * (Yv + s * _v) + s * (s * s) * (e8 + s * n8), a = s * e, n === 0 ? e + a * (Ot + s * r) : e - (s * (0.5 * n - a * r) - n - a * Ot);
    }, Dt = new sr(1), r8 = new mr(Dt.buffer), i8 = function(e) {
      return Dt[0] = e, r8[J7];
    }, Ut = [10680707, 7228996, 1387004, 2578385, 16069853, 12639074, 9804092, 4427841, 16666979, 11263675, 12935607, 2387514, 4345298, 14681673, 3074569, 13734428, 16653803, 1880361, 10960616, 8533493, 3062596, 8710556, 7349940, 6258241, 3772886, 3769171, 3798172, 8675211, 12450088, 3874808, 9961438, 366607, 15675153, 9132554, 7151469, 3571407, 2607881, 12013382, 4155038, 6285869, 7677882, 13102053, 15825725, 473591, 9065106, 15363067, 6271263, 9264392, 5636912, 4652155, 7056368, 13614112, 10155062, 1944035, 9527646, 15080200, 6658437, 6231200, 6832269, 16767104, 5075751, 3212806, 1398474, 7579849, 6349435, 12618859], a8 = [1.570796251296997, 7549789415861596e-23, 5390302529957765e-30, 3282003415807913e-37, 1270655753080676e-44, 12293330898111133e-52, 27337005381646456e-60, 21674168387780482e-67], o0 = 16777216, s0 = 5960464477539063e-23, u0 = _i(20), Ht = _i(20), Yi = _i(20), pn = _i(20);
    function _i(e) {
      var n, r;
      for (n = [], r = 0; r < e; r++)
        n.push(0);
      return n;
    }
    var t8 = function(e, n, r, a) {
      var s, u, p, k, b, C, O;
      for (p = a - 1, (u = (r - 3) / 24 | 0) < 0 && (u = 0), k = r - 24 * (u + 1), C = u - p, O = p + 4, b = 0; b <= O; b++)
        u0[b] = C < 0 ? 0 : Ut[C], C += 1;
      for (b = 0; b <= 4; b++) {
        for (s = 0, C = 0; C <= p; C++)
          s += e[C] * u0[p + (b - C)];
        Ht[b] = s;
      }
      return function B(A, W, z, K, $, ae, Q, fe, le) {
        var se, te, xe, Fe, he, De, en, Re, ne;
        for (Fe = ae, ne = K[z], Re = z, he = 0; Re > 0; he++)
          te = s0 * ne | 0, pn[he] = ne - o0 * te | 0, ne = K[Re - 1] + te, Re -= 1;
        if (ne = ir(ne, $), ne -= 8 * ye(0.125 * ne), ne -= en = 0 | ne, xe = 0, $ > 0 ? (en += he = pn[z - 1] >> 24 - $, pn[z - 1] -= he << 24 - $, xe = pn[z - 1] >> 23 - $) : $ === 0 ? xe = pn[z - 1] >> 23 : ne >= 0.5 && (xe = 2), xe > 0) {
          for (en += 1, se = 0, he = 0; he < z; he++)
            Re = pn[he], se === 0 ? Re !== 0 && (se = 1, pn[he] = 16777216 - Re) : pn[he] = 16777215 - Re;
          if ($ > 0)
            switch ($) {
              case 1:
                pn[z - 1] &= 8388607;
                break;
              case 2:
                pn[z - 1] &= 4194303;
            }
          xe === 2 && (ne = 1 - ne, se !== 0 && (ne -= ir(1, $)));
        }
        if (ne === 0) {
          for (Re = 0, he = z - 1; he >= ae; he--)
            Re |= pn[he];
          if (Re === 0) {
            for (De = 1; pn[ae - De] === 0; De++)
              ;
            for (he = z + 1; he <= z + De; he++) {
              for (le[fe + he] = Ut[Q + he], te = 0, Re = 0; Re <= fe; Re++)
                te += A[Re] * le[fe + (he - Re)];
              K[he] = te;
            }
            return B(A, W, z += De, K, $, ae, Q, fe, le);
          }
        }
        if (ne === 0)
          for (z -= 1, $ -= 24; pn[z] === 0; )
            z -= 1, $ -= 24;
        else
          (ne = ir(ne, -$)) >= o0 ? (te = s0 * ne | 0, pn[z] = ne - o0 * te | 0, $ += 24, pn[z += 1] = te) : pn[z] = 0 | ne;
        for (te = ir(1, $), he = z; he >= 0; he--)
          K[he] = te * pn[he], te *= s0;
        for (he = z; he >= 0; he--) {
          for (te = 0, De = 0; De <= Fe && De <= z - he; De++)
            te += a8[De] * K[he + De];
          Yi[z - he] = te;
        }
        for (te = 0, he = z; he >= 0; he--)
          te += Yi[he];
        for (W[0] = xe === 0 ? te : -te, te = Yi[0] - te, he = 1; he <= z; he++)
          te += Yi[he];
        return W[1] = xe === 0 ? te : -te, 7 & en;
      }(e, n, 4, Ht, k, 4, u, p, u0);
    }, jn = Math.round, o8 = 0.6366197723675814, s8 = 1.5707963267341256, u8 = 6077100506506192e-26, f8 = 6077100506303966e-26, c8 = 20222662487959506e-37, l8 = 20222662487111665e-37, v8 = 84784276603689e-45, Wt = 2047, ea = function(e, n, r) {
      var a, s, u, p, k;
      return u = e - (a = jn(e * o8)) * s8, p = a * u8, k = n >> 20 | 0, r[0] = u - p, k - (Ke(r[0]) >> 20 & Wt) > 16 && (p = a * c8 - ((s = u) - (u = s - (p = a * f8)) - p), r[0] = u - p, k - (Ke(r[0]) >> 20 & Wt) > 49 && (p = a * v8 - ((s = u) - (u = s - (p = a * l8)) - p), r[0] = u - p)), r[1] = u - r[0] - p, a;
    }, p8 = 0, m8 = 16777216, Br = 1.5707963267341256, jr = 6077100506506192e-26, na = 2 * jr, ra = 3 * jr, ia = 4 * jr, h8 = 2147483647, d8 = 2146435072, g8 = 1048575, N8 = 598523, y8 = 1072243195, b8 = 1073928572, w8 = 1074752122, x8 = 1074977148, S8 = 1075183036, M8 = 1075388923, k8 = 1075594811, T8 = 1094263291, Mi = [0, 0, 0], ki = [0, 0], f0 = function(e, n) {
      var r, a, s, u, p, k, b;
      if ((s = Ke(e) & h8 | 0) <= y8)
        return n[0] = e, n[1] = 0, 0;
      if (s <= w8)
        return (s & g8) === N8 ? ea(e, s, n) : s <= b8 ? e > 0 ? (b = e - Br, n[0] = b - jr, n[1] = b - n[0] - jr, 1) : (b = e + Br, n[0] = b + jr, n[1] = b - n[0] + jr, -1) : e > 0 ? (b = e - 2 * Br, n[0] = b - na, n[1] = b - n[0] - na, 2) : (b = e + 2 * Br, n[0] = b + na, n[1] = b - n[0] + na, -2);
      if (s <= k8)
        return s <= S8 ? s === x8 ? ea(e, s, n) : e > 0 ? (b = e - 3 * Br, n[0] = b - ra, n[1] = b - n[0] - ra, 3) : (b = e + 3 * Br, n[0] = b + ra, n[1] = b - n[0] + ra, -3) : s === M8 ? ea(e, s, n) : e > 0 ? (b = e - 4 * Br, n[0] = b - ia, n[1] = b - n[0] - ia, 4) : (b = e + 4 * Br, n[0] = b + ia, n[1] = b - n[0] + ia, -4);
      if (s < T8)
        return ea(e, s, n);
      if (s >= d8)
        return n[0] = NaN, n[1] = NaN, 0;
      for (r = i8(e), b = n0(s - ((a = (s >> 20) - 1046) << 20 | 0), r), p = 0; p < 2; p++)
        Mi[p] = 0 | b, b = (b - Mi[p]) * m8;
      for (Mi[2] = b, u = 3; Mi[u - 1] === p8; )
        u -= 1;
      return k = t8(Mi, ki, a, u), e < 0 ? (n[0] = -ki[0], n[1] = -ki[1], -k) : (n[0] = ki[0], n[1] = ki[1], k);
    }, E8 = 2147483647, P8 = 2146435072, V8 = 1072243195, C8 = 1045430272, dr = [0, 0], ar = function(e) {
      var n;
      if (n = Ke(e), (n &= E8) <= V8)
        return n < C8 ? e : Si(e, 0);
      if (n >= P8)
        return NaN;
      switch (3 & f0(e, dr)) {
        case 0:
          return Si(dr[0], dr[1]);
        case 1:
          return xi(dr[0], dr[1]);
        case 2:
          return -Si(dr[0], dr[1]);
        default:
          return -xi(dr[0], dr[1]);
      }
    }, gr = 1.5707963267948966, Gt = function(e, n, r) {
      return i(n) || i(r) || n >= r ? NaN : i(e) || e < 0 || e > 1 ? NaN : n + V(ar(gr * e), 2) * (r - n);
    };
    o(Gt, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : e + V(ar(gr * r), 2) * (n - e);
      };
    });
    var zt = Gt, aa = Ge.isPrimitive;
    function mn() {
      var e, n;
      if (!(this instanceof mn))
        return arguments.length === 0 ? new mn() : new mn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !aa(e) || i(e))
          throw new TypeError("invalid argument. Minimum support `a` must be a number primitive. Value: `" + e + "`");
        if (!aa(n) || i(n))
          throw new TypeError("invalid argument. Maximum support `b` must be a number primitive. Value: `" + n + "`");
        if (e >= n)
          throw new RangeError("invalid arguments. Minimum support `a` must be less than maximum support `b`. Value: `" + e + "," + n + "`");
      } else
        e = 0, n = 1;
      return l(this, "a", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!aa(r) || i(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        if (r >= n)
          throw new RangeError("invalid value. Must be less than `b`. Value: `" + r + "`");
        e = r;
      } }), l(this, "b", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!aa(r) || i(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        if (r <= e)
          throw new RangeError("invalid value. Must be greater than `a`. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(mn.prototype, "entropy", function() {
      return ft(this.a, this.b);
    }), m(mn.prototype, "kurtosis", function() {
      return ct(this.a, this.b);
    }), m(mn.prototype, "mean", function() {
      return lt(this.a, this.b);
    }), m(mn.prototype, "median", function() {
      return vt(this.a, this.b);
    }), m(mn.prototype, "mode", function() {
      return pt(this.a, this.b);
    }), m(mn.prototype, "skewness", function() {
      return mt(this.a, this.b);
    }), m(mn.prototype, "stdev", function() {
      return ht(this.a, this.b);
    }), m(mn.prototype, "variance", function() {
      return At(this.a, this.b);
    }), o(mn.prototype, "cdf", function(e) {
      return G(e, this.a, this.b);
    }), o(mn.prototype, "logcdf", function(e) {
      return Bt(e, this.a, this.b);
    }), o(mn.prototype, "logpdf", function(e) {
      return Lt(e, this.a, this.b);
    }), o(mn.prototype, "pdf", function(e) {
      return Ft(e, this.a, this.b);
    }), o(mn.prototype, "quantile", function(e) {
      return zt(e, this.a, this.b);
    });
    var A8 = mn, jt = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 ? NaN : e < 0 ? 0 : e >= 1 ? 1 : 1 - n;
    };
    o(jt, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        return i(n) ? NaN : n < 0 ? 0 : n >= 1 ? 1 : 1 - e;
      };
    });
    var Kt = jt, I8 = Ge.isPrimitive, Qt = function(e) {
      return I8(e) && e >= 0 && e <= 1;
    }, B8 = Ge.isObject, $t = function(e) {
      return B8(e) && e.valueOf() >= 0 && e.valueOf() <= 1;
    }, c0 = function(e) {
      return Qt(e) || $t(e);
    };
    o(c0, "isPrimitive", Qt), o(c0, "isObject", $t);
    var ta = c0, Zt = function(e) {
      var n;
      return i(e) || e < 0 || e > 1 ? NaN : e === 0 || e === 1 ? 0 : -(n = 1 - e) * M(n) - e * M(e);
    }, Jt = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : 1 / (e * (1 - e)) - 6;
    }, Xt = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : e;
    }, Yt = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : e <= 0.5 ? 0 : 1;
    }, _t = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : e <= 0.5 ? 0 : 1;
    }, eo = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : e === 0 ? H : e === 1 ? j : (1 - 2 * e) / c(e * (1 - e));
    }, no = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : c((1 - e) * e);
    }, ro = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : e * (1 - e);
    }, oa = function(e) {
      return e >= 0 && e <= 1;
    }, sa = Math.ceil, Ti = function(e) {
      return e < 0 ? sa(e) : ye(e);
    }, R8 = function(e, n, r) {
      var a, s, u;
      return u = (a = e - n) - (s = a * a) * qv(s), ir(1 - (n - a * u / (2 - u) - e), r);
    }, L8 = 0.6931471803691238, q8 = 19082149292705877e-26, io = 1.4426950408889634, F8 = 709.782712893384, O8 = -745.1332191019411, ao = 1 / (1 << 28), D8 = -ao, R = function(e) {
      var n;
      return i(e) || e === H ? e : e === j ? 0 : e > F8 ? H : e < O8 ? 0 : e > D8 && e < ao ? 1 + e : (n = Ti(e < 0 ? io * e - 0.5 : io * e + 0.5), R8(e - n * L8, n * q8, n));
    }, to = function(e, n) {
      return i(e) || !oa(n) ? NaN : 1 - n + n * R(e);
    };
    o(to, "factory", function(e) {
      return oa(e) ? function(n) {
        return i(n) ? NaN : 1 - e + e * R(n);
      } : N(NaN);
    });
    var oo = to, so = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 ? NaN : e === 0 ? 1 - n : e === 1 ? n : 0;
    };
    o(so, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        return i(n) ? NaN : n === 0 ? 1 - e : n === 1 ? e : 0;
      };
    });
    var uo = so, fo = function(e, n) {
      return i(n) || i(e) || n < 0 || n > 1 || e < 0 || e > 1 ? NaN : e <= 1 - n ? 0 : 1;
    };
    o(fo, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        return i(n) || n < 0 || n > 1 ? NaN : n <= 1 - e ? 0 : 1;
      };
    });
    var co = fo, lo = ta.isPrimitive;
    function Mn() {
      var e;
      if (!(this instanceof Mn))
        return arguments.length === 0 ? new Mn() : new Mn(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !lo(e))
          throw new TypeError("invalid argument. Mean parameter `p` must be a probability. Value: `" + e + "`");
      } else
        e = 0.5;
      return l(this, "p", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!lo(n))
          throw new TypeError("invalid value. Must be a probability. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(Mn.prototype, "entropy", function() {
      return Zt(this.p);
    }), m(Mn.prototype, "kurtosis", function() {
      return Jt(this.p);
    }), m(Mn.prototype, "mean", function() {
      return Xt(this.p);
    }), m(Mn.prototype, "median", function() {
      return _t(this.p);
    }), m(Mn.prototype, "mode", function() {
      return Yt(this.p);
    }), m(Mn.prototype, "skewness", function() {
      return eo(this.p);
    }), m(Mn.prototype, "stdev", function() {
      return no(this.p);
    }), m(Mn.prototype, "variance", function() {
      return ro(this.p);
    }), o(Mn.prototype, "cdf", function(e) {
      return Kt(e, this.p);
    }), o(Mn.prototype, "mgf", function(e) {
      return oo(e, this.p);
    }), o(Mn.prototype, "pmf", function(e) {
      return uo(e, this.p);
    }), o(Mn.prototype, "quantile", function(e) {
      return co(e, this.p);
    });
    var U8 = Mn, H8 = 0.34657359027997264, W8 = function(e) {
      return e === 0 ? -0.03333333333333313 : e * (0.0015873015872548146 + e * (e * (4008217827329362e-21 + -20109921818362437e-23 * e) - 793650757867488e-19)) - 0.03333333333333313;
    }, G8 = 709.782712893384, l0 = 0.6931471803691238, v0 = 19082149292705877e-26, vo = 1.4426950408889634, z8 = 38.816242111356935, j8 = 1.0397207708399179, Le = function(e) {
      var n, r, a, s, u, p, k, b, C, O, B, A;
      if (e === H || i(e))
        return e;
      if (e === j)
        return -1;
      if (e === 0)
        return e;
      if (e < 0 ? (r = !0, k = -e) : (r = !1, k = e), k >= z8) {
        if (r)
          return -1;
        if (k >= G8)
          return H;
      }
      if (u = 0 | Ke(k), k > H8)
        k < j8 ? r ? (a = e + l0, s = -v0, A = -1) : (a = e - l0, s = v0, A = 1) : (A = r ? vo * e - 0.5 : vo * e + 0.5, a = e - (O = A |= 0) * l0, s = O * v0), C = a - (e = a - s) - s;
      else {
        if (u < 1016070144)
          return e;
        A = 0;
      }
      return B = (b = e * (n = 0.5 * e)) * (((p = 1 + b * W8(b)) - (O = 3 - p * n)) / (6 - e * O)), A === 0 ? e - (e * B - b) : (B = e * (B - C) - C, B -= b, A === -1 ? 0.5 * (e - B) - 0.5 : A === 1 ? e < -0.25 ? -2 * (B - (e + 0.5)) : 1 + 2 * (e - B) : A <= -2 || A > 56 ? (a = Ke(k = 1 - (B - e)) + (A << 20) | 0, (k = Xn(k, a)) - 1) : (O = 1, A < 20 ? k = (O = Xn(O, a = 1072693248 - (2097152 >> A) | 0)) - (B - e) : (k = e - (B + (O = Xn(O, a = ur - A << 20 | 0))), k += 1), a = Ke(k) + (A << 20) | 0, Xn(k, a)));
    }, K8 = function(e) {
      return e === 0 ? 0.6666666666666735 : 0.6666666666666735 + e * (0.3999999999940942 + e * (0.2857142874366239 + e * (0.22222198432149784 + e * (0.1818357216161805 + e * (0.15313837699209373 + 0.14798198605116586 * e)))));
    }, p0 = 0.6931471803691238, m0 = 19082149292705877e-26, Q8 = 0.41421356237309503, $8 = -0.2928932188134525, Z8 = 1862645149230957e-24, J8 = 5551115123125783e-32, X8 = 9007199254740992, Y8 = 0.6666666666666666, oe = function(e) {
      var n, r, a, s, u, p, k, b, C, O;
      if (e < -1 || i(e))
        return NaN;
      if (e === -1)
        return j;
      if (e === H || e === 0)
        return e;
      if (O = 1, (a = e < 0 ? -e : e) < Q8) {
        if (a < Z8)
          return a < J8 ? e : e - e * e * 0.5;
        e > $8 && (O = 0, s = e, r = 1);
      }
      return O !== 0 && (a < X8 ? (u = (O = ((r = Ke(C = 1 + e)) >> 20) - ur) > 0 ? 1 - (C - e) : e - (C - 1), u /= C) : (O = ((r = Ke(C = e)) >> 20) - ur, u = 0), (r &= 1048575) < 434334 ? C = Xn(C, 1072693248 | r) : (O += 1, C = Xn(C, 1071644672 | r), r = 1048576 - r >> 2), s = C - 1), n = 0.5 * s * s, r === 0 ? s === 0 ? O * p0 + (u += O * m0) : O * p0 - ((b = n * (1 - Y8 * s)) - (O * m0 + u) - s) : (b = (k = (p = s / (2 + s)) * p) * K8(k), O === 0 ? s - (n - p * (n + b)) : O * p0 - (n - (p * (n + b) + (O * m0 + u)) - s));
    }, Kn = 2.718281828459045, kn = 2220446049250313e-31, h0 = function(e) {
      var n, r;
      return e === 0 ? 1 / 0 : ((e < 0 ? -e : e) <= 1 ? (n = 709811.662581658 + e * (679979.8474157227 + e * (293136.7857211597 + e * (74887.54032914672 + e * (12555.290582413863 + e * (1443.4299244417066 + e * (115.24194596137347 + e * (6.309239205732627 + e * (0.22668404630224365 + e * (0.004826466289237662 + 4624429436045379e-20 * e))))))))), r = 0 + e * (362880 + e * (1026576 + e * (1172700 + e * (723680 + e * (269325 + e * (63273 + e * (9450 + e * (870 + e * (45 + 1 * e)))))))))) : (n = 4624429436045379e-20 + (e = 1 / e) * (0.004826466289237662 + e * (0.22668404630224365 + e * (6.309239205732627 + e * (115.24194596137347 + e * (1443.4299244417066 + e * (12555.290582413863 + e * (74887.54032914672 + e * (293136.7857211597 + e * (679979.8474157227 + 709811.662581658 * e))))))))), r = 1 + e * (45 + e * (870 + e * (9450 + e * (63273 + e * (269325 + e * (723680 + e * (1172700 + e * (1026576 + e * (362880 + 0 * e)))))))))), n / r);
    }, d0 = 10.900511, Me = function(e, n) {
      var r, a, s, u, p, k, b;
      return i(e) || i(n) ? NaN : e < 0 || n < 0 ? NaN : n === 1 ? 1 / e : e === 1 ? 1 / n : (b = e + n) < kn ? (p = b / e, p /= n) : b === e && n < kn ? 1 / n : b === n && e < kn ? 1 / e : (e < n && (k = n, n = e, e = k), a = e + d0 - 0.5, s = n + d0 - 0.5, u = b + d0 - 0.5, p = h0(e) * (h0(n) / h0(b)), J(n * (r = e - 0.5 - n)) < 100 * u && e > 100 ? p *= R(r * oe(-n / u)) : p *= V(a / u, r), p *= V(u > 1e10 ? a / u * (s / u) : a * s / (u * u), n), p *= c(Kn / s));
    }, po = function(e) {
      return e === 0 && 1 / e === H;
    }, Ee = function(e, n) {
      var r, a, s, u;
      if ((r = arguments.length) === 2)
        return i(e) || i(n) ? NaN : e === H || n === H ? H : e === n && e === 0 ? po(e) ? e : n : e > n ? e : n;
      for (a = j, u = 0; u < r; u++) {
        if (s = arguments[u], i(s) || s === H)
          return s;
        (s > a || s === a && s === 0 && po(s)) && (a = s);
      }
      return a;
    }, g0 = function(e) {
      return e === 0 && 1 / e === j;
    }, Se = function(e, n) {
      var r, a, s, u;
      if ((r = arguments.length) === 2)
        return i(e) || i(n) ? NaN : e === j || n === j ? j : e === n && e === 0 ? g0(e) ? e : n : e < n ? e : n;
      for (a = H, u = 0; u < r; u++) {
        if (s = arguments[u], i(s) || s === j)
          return s;
        (s < a || s === a && s === 0 && g0(s)) && (a = s);
      }
      return a;
    }, Tn = 17976931348623157e292, _8 = 2147483647, Ei = 2.5066282746310007, e9 = function(e) {
      return e === 0 ? 0.08333333333334822 : 0.08333333333334822 + e * (0.0034722222160545866 + e * (e * (7873113957930937e-19 * e - 22954996161337813e-20) - 0.0026813261780578124));
    }, n9 = 143.01608, mo = function(e) {
      var n, r, a;
      return n = 1 + (n = 1 / e) * e9(n), r = R(e), r = e > n9 ? (a = V(e, 0.5 * e - 0.25)) * (a / r) : V(e, e - 0.5) / r, Ei * r * n;
    }, Rr = 0.5772156649015329, ho = function(e, n) {
      return n / ((1 + Rr * e) * e);
    }, r9 = function(e) {
      var n, r;
      return e === 0 ? 1 : ((e < 0 ? -e : e) <= 1 ? (n = 1 + e * (0.4942148268014971 + e * (0.20744822764843598 + e * (0.04763678004571372 + e * (0.010421379756176158 + e * (0.0011913514700658638 + e * (16011952247675185e-20 + 0 * e)))))), r = 1 + e * (0.0714304917030273 + e * (e * (0.035823639860549865 + e * (0.011813978522206043 + e * (e * (5396055804933034e-19 + -23158187332412014e-21 * e) - 0.004456419138517973))) - 0.23459179571824335))) : (n = 0 + (e = 1 / e) * (16011952247675185e-20 + e * (0.0011913514700658638 + e * (0.010421379756176158 + e * (0.04763678004571372 + e * (0.20744822764843598 + e * (0.4942148268014971 + 1 * e)))))), r = e * (5396055804933034e-19 + e * (e * (0.011813978522206043 + e * (0.035823639860549865 + e * (e * (0.0714304917030273 + 1 * e) - 0.23459179571824335))) - 0.004456419138517973)) - 23158187332412014e-21), n / r);
    }, ve = function(e) {
      var n, r, a, s;
      if (me(e) && e < 0 || e === j || i(e))
        return NaN;
      if (e === 0)
        return g0(e) ? j : H;
      if (e > 171.61447887182297)
        return H;
      if (e < -170.5674972726612)
        return 0;
      if ((r = J(e)) > 33)
        return e >= 0 ? mo(e) : (n = 1 & (a = ye(r)) ? 1 : -1, (s = r - a) > 0.5 && (s = r - (a += 1)), s = r * ar(T * s), n * T / (J(s) * mo(r)));
      for (s = 1; e >= 3; )
        s *= e -= 1;
      for (; e < 0; ) {
        if (e > -1e-9)
          return ho(e, s);
        s /= e, e += 1;
      }
      for (; e < 2; ) {
        if (e < 1e-9)
          return ho(e, s);
        s /= e, e += 1;
      }
      return e === 2 ? s : s * r9(e -= 2);
    }, i9 = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368e3, 20922789888e3, 355687428096e3, 6402373705728e3, 121645100408832e3, 243290200817664e4, 5109094217170944e4, 11240007277776077e5, 2585201673888498e7, 6204484017332394e8, 15511210043330986e9, 40329146112660565e10, 10888869450418352e12, 30488834461171387e13, 8841761993739702e15, 26525285981219107e16, 8222838654177922e18, 2631308369336935e20, 8683317618811886e21, 29523279903960416e22, 10333147966386145e24, 37199332678990125e25, 13763753091226346e27, 5230226174666011e29, 20397882081197444e30, 8159152832478977e32, 3345252661316381e34, 140500611775288e37, 6041526306337383e37, 2658271574788449e39, 11962222086548019e40, 5502622159812089e42, 25862324151116818e43, 12413915592536073e45, 6082818640342675e47, 30414093201713376e48, 15511187532873822e50, 8065817517094388e52, 42748832840600255e53, 2308436973392414e56, 12696403353658276e57, 7109985878048635e59, 40526919504877214e60, 23505613312828785e62, 13868311854568984e64, 832098711274139e67, 5075802138772248e68, 3146997326038794e70, 198260831540444e73, 12688693218588417e73, 8247650592082472e75, 5443449390774431e77, 3647111091818868e79, 24800355424368305e80, 1711224524281413e83, 11978571669969892e84, 8504785885678623e86, 61234458376886085e87, 44701154615126844e89, 3307885441519386e92, 248091408113954e95, 18854947016660504e95, 14518309202828587e97, 11324281178206297e99, 8946182130782976e101, 7156945704626381e103, 5797126020747368e105, 4753643337012842e107, 3945523969720659e109, 3314240134565353e111, 281710411438055e114, 24227095383672734e114, 2107757298379528e117, 18548264225739844e118, 1650795516090846e121, 14857159644817615e122, 1352001527678403e125, 12438414054641308e126, 11567725070816416e128, 1087366156656743e131, 1032997848823906e133, 9916779348709496e134, 9619275968248212e136, 9426890448883248e138, 9332621544394415e140, 9332621544394415e142, 942594775983836e145, 9614466715035127e146, 990290071648618e149, 10299016745145628e150, 1081396758240291e153, 11462805637347084e154, 1226520203196138e157, 1324641819451829e159, 14438595832024937e160, 1588245541522743e163, 17629525510902446e164, 1974506857221074e167, 22311927486598138e168, 25435597334721877e170, 2925093693493016e173, 3393108684451898e175, 3969937160808721e177, 4684525849754291e179, 5574585761207606e181, 6689502913449127e183, 8094298525273444e185, 9875044200833601e187, 1214630436702533e190, 1506141741511141e192, 1882677176888926e194, 2372173242880047e196, 30126600184576594e197, 3856204823625804e200, 4974504222477287e202, 6466855489220474e204, 847158069087882e207, 11182486511960043e208, 14872707060906857e210, 19929427461615188e212, 26904727073180504e214, 3659042881952549e217, 5012888748274992e219, 6917786472619489e221, 9615723196941089e223, 13462012475717526e225, 1898143759076171e228, 2695364137888163e230, 3854370717180073e232, 55502938327393044e233, 8047926057471992e236, 11749972043909107e238, 1727245890454639e241, 25563239178728654e242, 380892263763057e246, 5713383956445855e247, 862720977423324e250, 13113358856834524e251, 20063439050956823e253, 30897696138473508e255, 4789142901463394e258, 7471062926282894e260, 11729568794264145e262, 1853271869493735e265, 29467022724950384e266, 47147236359920616e268, 7590705053947219e271, 12296942187394494e273, 20044015765453026e275, 3287218585534296e278, 5423910666131589e280, 9003691705778438e282, 1503616514864999e285, 25260757449731984e286, 4269068009004705e289, 7257415615307999e291], a9 = 170, Pi = function(e) {
      return i(e) ? NaN : me(e) ? e < 0 ? NaN : e <= a9 ? i9[e] : H : ve(e + 1);
    }, go = function(e) {
      var n, r;
      return e === 0 ? 1 / 0 : ((e < 0 ? -e : e) <= 1 ? (n = 3847467039331777e-5 + e * (3685766504351951e-5 + e * (1588920245372942e-5 + e * (4059208354298835e-6 + e * (6805476611834733e-7 + e * (7823975500312005e-8 + e * (6246580776401795e-9 + e * (341986.3488721347 + e * (12287.194511824551 + e * (261.61404416416684 + 2.5066282746310007 * e))))))))), r = 0 + e * (362880 + e * (1026576 + e * (1172700 + e * (723680 + e * (269325 + e * (63273 + e * (9450 + e * (870 + e * (45 + 1 * e)))))))))) : (n = 2.5066282746310007 + (e = 1 / e) * (261.61404416416684 + e * (12287.194511824551 + e * (341986.3488721347 + e * (6246580776401795e-9 + e * (7823975500312005e-8 + e * (6805476611834733e-7 + e * (4059208354298835e-6 + e * (1588920245372942e-5 + e * (3685766504351951e-5 + 3847467039331777e-5 * e))))))))), r = 1 + e * (45 + e * (870 + e * (9450 + e * (63273 + e * (269325 + e * (723680 + e * (1172700 + e * (1026576 + e * (362880 + 0 * e)))))))))), n / r);
    }, qe = 10.900511, No = 170, t9 = 4269068009004705e289, o9 = function e(n, r) {
      var a, s, u;
      return n < kn ? r > No ? (s = e(r, No - r), s *= n, 1 / (s *= t9)) : 1 / (n * ve(n + r)) : (u = n + qe - 0.5, n + r === n ? a = J(r) < 10 ? R((0.5 - n) * oe(r / u)) : 1 : (a = J(r) < 10 ? R((0.5 - n) * oe(r / u)) : V(u / (u + r), n - 0.5), a *= go(n) / go(n + r)), a *= V(Kn / (u + r), r));
    }, yo = 170, N0 = function(e, n) {
      var r, a, s;
      if (e <= 0 || e + n <= 0)
        return ve(e) / ve(e + n);
      if ((a = ye(n)) === n) {
        if ((s = ye(e)) === e && e <= yo && e + n <= yo)
          return Pi(s - 1) / Pi(a + s - 1);
        if (J(n) < 20) {
          if (n === 0)
            return 1;
          if (n < 0) {
            for (r = e -= 1, n += 1; n !== 0; )
              r *= e -= 1, n += 1;
            return r;
          }
          for (r = 1 / e, n -= 1; n !== 0; )
            r /= e += 1, n -= 1;
          return r;
        }
      }
      return o9(e, n);
    }, Nr = [0, 0], s9 = 2147483647, u9 = 1072243195, f9 = 1044381696, c9 = 2146435072, Kr = function(e) {
      var n;
      if (n = Ke(e), (n &= s9) <= u9)
        return n < f9 ? 1 : xi(e, 0);
      if (n >= c9)
        return NaN;
      switch (3 & f0(e, Nr)) {
        case 0:
          return xi(Nr[0], Nr[1]);
        case 1:
          return -Si(Nr[0], Nr[1]);
        case 2:
          return -xi(Nr[0], Nr[1]);
        default:
          return Si(Nr[0], Nr[1]);
      }
    }, Lr = function(e) {
      var n, r;
      return i(e) ? NaN : Yn(e) ? NaN : (n = J(r = e % 2)) === 0 || n === 1 ? Rn(0, r) : n < 0.25 ? ar(T * r) : n < 0.75 ? Rn(Kr(T * (n = 0.5 - n)), r) : n < 1.25 ? (r = Rn(1, r) - r, ar(T * r)) : n < 1.75 ? -Rn(Kr(T * (n -= 1.5)), r) : (r -= Rn(2, r), ar(T * r));
    }, l9 = function(e) {
      return e === 0 ? 0.06735230105312927 : 0.06735230105312927 + e * (0.007385550860814029 + e * (0.0011927076318336207 + e * (22086279071390839e-20 + 25214456545125733e-21 * e)));
    }, v9 = function(e) {
      return e === 0 ? 0.020580808432516733 : 0.020580808432516733 + e * (0.0028905138367341563 + e * (5100697921535113e-19 + e * (10801156724758394e-20 + 44864094961891516e-21 * e)));
    }, p9 = function(e) {
      return e === 0 ? 1.3920053346762105 : 1.3920053346762105 + e * (0.7219355475671381 + e * (0.17193386563280308 + e * (0.01864591917156529 + e * (7779424963818936e-19 + 7326684307446256e-21 * e))));
    }, m9 = function(e) {
      return e === 0 ? 0.21498241596060885 : 0.21498241596060885 + e * (0.325778796408931 + e * (0.14635047265246445 + e * (0.02664227030336386 + e * (0.0018402845140733772 + 3194753265841009e-20 * e))));
    }, h9 = function(e) {
      return e === 0 ? -0.032788541075985965 : e * (0.006100538702462913 + e * (31563207090362595e-20 * e - 0.0014034646998923284)) - 0.032788541075985965;
    }, d9 = function(e) {
      return e === 0 ? 0.01797067508118204 : 0.01797067508118204 + e * (e * (881081882437654e-18 + -31275416837512086e-20 * e) - 0.0036845201678113826);
    }, g9 = function(e) {
      return e === 0 ? -0.010314224129834144 : e * (0.0022596478090061247 + e * (3355291926355191e-19 * e - 5385953053567405e-19)) - 0.010314224129834144;
    }, N9 = function(e) {
      return e === 0 ? 0.6328270640250934 : 0.6328270640250934 + e * (1.4549225013723477 + e * (0.9777175279633727 + e * (0.22896372806469245 + 0.013381091853678766 * e)));
    }, y9 = function(e) {
      return e === 0 ? 2.4559779371304113 : 2.4559779371304113 + e * (2.128489763798934 + e * (0.7692851504566728 + e * (0.10422264559336913 + 0.003217092422824239 * e)));
    }, b9 = function(e) {
      return e === 0 ? 0.08333333333333297 : 0.08333333333333297 + e * (e * (7936505586430196e-19 + e * (e * (8363399189962821e-19 + -0.0016309293409657527 * e) - 59518755745034e-17)) - 0.0027777777772877554);
    }, w9 = 0.07721566490153287, x9 = 0.3224670334241136, S9 = 1, M9 = -0.07721566490153287, k9 = 0.48383612272381005, T9 = -0.1475877229945939, E9 = 0.06462494023913339, P9 = -0.07721566490153287, V9 = 1, C9 = 0.4189385332046727, ua = 1.4616321449683622, A9 = 4503599627370496, I9 = 288230376151711740, B9 = 8470329472543003e-37, bo = 1.4616321449683622, R9 = -0.12148629053584961, L9 = -3638676997039505e-33, ke = function(e) {
      var n, r, a, s, u, p, k, b, C, O, B;
      if (i(e) || Yn(e))
        return e;
      if (e === 0)
        return H;
      if (e < 0 ? (n = !0, e = -e) : n = !1, e < B9)
        return -M(e);
      if (n) {
        if (e >= A9 || (k = Lr(e)) === 0)
          return H;
        r = M(T / J(k * e));
      }
      if (e === 1 || e === 2)
        return 0;
      if (e < 2)
        switch (e <= 0.9 ? (B = -M(e), e >= ua - 1 + 0.27 ? (C = 1 - e, a = 0) : e >= ua - 1 - 0.27 ? (C = e - (bo - 1), a = 1) : (C = e, a = 2)) : (B = 0, e >= ua + 0.27 ? (C = 2 - e, a = 0) : e >= ua - 0.27 ? (C = e - bo, a = 1) : (C = e - 1, a = 2)), a) {
          case 0:
            B += C * (p = w9 + (O = C * C) * l9(O)) + (u = O * (x9 + O * v9(O))) - 0.5 * C;
            break;
          case 1:
            p = k9 + (b = (O = C * C) * C) * h9(b), u = T9 + b * d9(b), s = E9 + b * g9(b), B += R9 + (O * p - (L9 - b * (u + C * s)));
            break;
          case 2:
            B += -0.5 * C + (p = C * (P9 + C * N9(C))) / (u = V9 + C * y9(C));
        }
      else if (e < 8)
        switch (B = 0.5 * (C = e - (a = Ti(e))) + C * (M9 + C * m9(C)) / (S9 + C * p9(C)), O = 1, a) {
          case 7:
            O *= C + 6;
          case 6:
            O *= C + 5;
          case 5:
            O *= C + 4;
          case 4:
            O *= C + 3;
          case 3:
            B += M(O *= C + 2);
        }
      else
        B = e < I9 ? (e - 0.5) * ((k = M(e)) - 1) + (b = C9 + (O = 1 / e) * b9(C = O * O)) : e * (M(e) - 1);
      return n && (B = r - B), B;
    }, wo = 14901161193847656e-24, ce = 709.782712893384, q9 = function(e, n) {
      var r, a, s;
      if ((a = R(-n)) !== 0)
        for (r = a, s = 1; s < e; ++s)
          r /= s, a += r *= n;
      return a;
    }, F9 = function(e) {
      return e === 0 ? -0.3250421072470015 : e * (e * (-23763016656650163e-21 * e - 0.005770270296489442) - 0.02848174957559851) - 0.3250421072470015;
    }, O9 = function(e) {
      return e === 0 ? -0.3250421072470015 : e * (e * (-23763016656650163e-21 * e - 0.005770270296489442) - 0.02848174957559851) - 0.3250421072470015;
    }, D9 = function(e) {
      return e === 0 ? 0.39791722395915535 : 0.39791722395915535 + e * (0.0650222499887673 + e * (0.005081306281875766 + e * (13249473800432164e-20 + -3960228278775368e-21 * e)));
    }, U9 = function(e) {
      return e === 0 ? 0.39791722395915535 : 0.39791722395915535 + e * (0.0650222499887673 + e * (0.005081306281875766 + e * (13249473800432164e-20 + -3960228278775368e-21 * e)));
    }, H9 = function(e) {
      return e === 0 ? 0.41485611868374833 : 0.41485611868374833 + e * (e * (0.31834661990116175 + e * (e * (0.035478304325618236 + -0.002166375594868791 * e) - 0.11089469428239668)) - 0.3722078760357013);
    }, W9 = function(e) {
      return e === 0 ? 0.41485611868374833 : 0.41485611868374833 + e * (e * (0.31834661990116175 + e * (e * (0.035478304325618236 + -0.002166375594868791 * e) - 0.11089469428239668)) - 0.3722078760357013);
    }, G9 = function(e) {
      return e === 0 ? 0.10642088040084423 : 0.10642088040084423 + e * (0.540397917702171 + e * (0.07182865441419627 + e * (0.12617121980876164 + e * (0.01363708391202905 + 0.011984499846799107 * e))));
    }, z9 = function(e) {
      return e === 0 ? 0.10642088040084423 : 0.10642088040084423 + e * (0.540397917702171 + e * (0.07182865441419627 + e * (0.12617121980876164 + e * (0.01363708391202905 + 0.011984499846799107 * e))));
    }, j9 = function(e) {
      return e === 0 ? -0.6938585727071818 : e * (e * (e * (e * (e * (-9.814329344169145 * e - 81.2874355063066) - 184.60509290671104) - 162.39666946257347) - 62.375332450326006) - 10.558626225323291) - 0.6938585727071818;
    }, K9 = function(e) {
      return e === 0 ? -0.6938585727071818 : e * (e * (e * (e * (e * (-9.814329344169145 * e - 81.2874355063066) - 184.60509290671104) - 162.39666946257347) - 62.375332450326006) - 10.558626225323291) - 0.6938585727071818;
    }, Q9 = function(e) {
      return e === 0 ? 19.651271667439257 : 19.651271667439257 + e * (137.65775414351904 + e * (434.56587747522923 + e * (645.3872717332679 + e * (429.00814002756783 + e * (108.63500554177944 + e * (6.570249770319282 + -0.0604244152148581 * e))))));
    }, $9 = function(e) {
      return e === 0 ? 19.651271667439257 : 19.651271667439257 + e * (137.65775414351904 + e * (434.56587747522923 + e * (645.3872717332679 + e * (429.00814002756783 + e * (108.63500554177944 + e * (6.570249770319282 + -0.0604244152148581 * e))))));
    }, Z9 = function(e) {
      return e === 0 ? -0.799283237680523 : e * (e * (e * (e * (-483.5191916086514 * e - 1025.0951316110772) - 637.5664433683896) - 160.63638485582192) - 17.757954917754752) - 0.799283237680523;
    }, J9 = function(e) {
      return e === 0 ? -0.799283237680523 : e * (e * (e * (e * (-483.5191916086514 * e - 1025.0951316110772) - 637.5664433683896) - 160.63638485582192) - 17.757954917754752) - 0.799283237680523;
    }, X9 = function(e) {
      return e === 0 ? 30.33806074348246 : 30.33806074348246 + e * (325.7925129965739 + e * (1536.729586084437 + e * (3199.8582195085955 + e * (2553.0504064331644 + e * (474.52854120695537 + -22.44095244658582 * e)))));
    }, Y9 = function(e) {
      return e === 0 ? 30.33806074348246 : 30.33806074348246 + e * (325.7925129965739 + e * (1536.729586084437 + e * (3199.8582195085955 + e * (2553.0504064331644 + e * (474.52854120695537 + -22.44095244658582 * e)))));
    }, fa = 1e-300, _9 = 13877787807814457e-33, xo = 0.8450629115104675, ep = 0.12837916709551256, np = 1, rp = -0.0023621185607526594, ip = 1, ap = -0.009864944034847148, tp = 1, op = -0.0098649429247001, sp = 1, qr = function(e) {
      var n, r, a, s, u, p, k, b;
      if (i(e))
        return NaN;
      if (e === H)
        return 0;
      if (e === j)
        return 2;
      if (e === 0)
        return 1;
      if (e < 0 ? (n = !0, r = -e) : (n = !1, r = e), r < 0.84375)
        return r < _9 ? 1 - e : (p = (s = ep + (a = e * e) * O9(a)) / (u = np + a * U9(a)), e < 0.25 ? 1 - (e + e * p) : (s = e * p, 0.5 - (s += e - 0.5)));
      if (r < 1.25)
        return k = rp + (u = r - 1) * W9(u), b = ip + u * z9(u), n ? 1 + xo + k / b : 1 - xo - k / b;
      if (r < 28) {
        if (u = 1 / (r * r), r < 2.857142857142857)
          s = ap + u * K9(u), u = tp + u * $9(u);
        else {
          if (e < -6)
            return 2 - fa;
          s = op + u * J9(u), u = sp + u * Y9(u);
        }
        return a = _n(r, 0), s = R(-a * a - 0.5625) * R((a - r) * (a + r) + s / u), n ? 2 - s / r : s / r;
      }
      return n ? 2 - fa : fa * fa;
    }, up = function(e, n) {
      var r, a, s, u, p;
      if ((u = qr(c(n))) !== 0 && e > 1) {
        for (a = R(-n) / c(T * n), a *= n, s = a /= r = 0.5, p = 2; p < e; ++p)
          a /= p - r, s += a *= n;
        u += s;
      }
      return u;
    }, de = -708.3964185322641, So = function(e, n) {
      var r;
      return r = e * M(n), n >= 1 ? r < ce && -n > de ? V(n, e) * R(-n) : e >= 1 ? V(n / R(n / e), e) : R(r - n) : r > de ? V(n, e) * R(-n) : n / e < ce ? V(n / R(n / e), e) : R(r - n);
    }, y0 = function(e, n) {
      var r, a;
      if ((a = e.length) < 2 || n === 0)
        return a === 0 ? 0 : e[0];
      for (r = e[a -= 1] * n + e[a - 1], a -= 2; a >= 0; )
        r = r * n + e[a], a -= 1;
      return r;
    };
    o(y0, "factory", function(e) {
      var n, r, a, s;
      if (e.length > 500)
        return function(u) {
          return y0(e, u);
        };
      if (n = "return function evalpoly(x){", (r = e.length) === 0)
        n += "return 0.0;";
      else if (r === 1)
        n += "return " + e[0] + ";";
      else {
        for (n += "if(x===0.0){return " + e[0] + ";}", n += "return " + e[0], a = r - 1, s = 1; s < r; s++)
          n += "+x*", s < a && (n += "("), n += e[s];
        for (s = 0; s < a - 1; s++)
          n += ")";
        n += ";";
      }
      return n += "}", n += "//# sourceURL=evalpoly.factory.js", new Function(n)();
    });
    var hn = y0, yr = 6.283185307179586, fp = function(e) {
      return e === 0 ? -0.3333333333333333 : e * (0.08333333333333333 + e * (e * (0.0011574074074074073 + e * (3527336860670194e-19 + e * (e * (3919263178522438e-20 + e * (e * (e * (8296711340953087e-22 + e * (e * (6707853543401498e-24 + e * (10261809784240309e-24 + e * (914769958223679e-24 * e - 4382036018453353e-24))) - 17665952736826078e-23)) - 185406221071516e-20) - 21854485106799924e-22)) - 1787551440329218e-19))) - 0.014814814814814815)) - 0.3333333333333333;
    }, cp = function(e) {
      return e === 0 ? -0.001851851851851852 : e * (e * (0.0026455026455026454 + e * (e * (20576131687242798e-20 + e * (e * (e * (764916091608111e-20 + e * (e * (4647127802807434e-24 + e * (1378633446915721e-22 + e * (11951628599778148e-24 * e - 5752545603517705e-23))) - 16120900894563446e-22)) - 18098550334489977e-21) - 4018775720164609e-22)) - 9902263374485596e-19)) - 0.003472222222222222) - 0.001851851851851852;
    }, lp = function(e) {
      return e === 0 ? 0.004133597883597883 : 0.004133597883597883 + e * (e * (7716049382716049e-19 + e * (20093878600823047e-22 + e * (e * (52923448829120125e-21 + e * (e * (3423578734096138e-23 + e * (13721957309062932e-22 + e * (14280614206064242e-23 * e - 6298992138380055e-22))) - 12760635188618728e-21)) - 10736653226365161e-20))) - 0.0026813271604938273);
    }, vp = function(e) {
      return e === 0 ? 6494341563786008e-19 : 6494341563786008e-19 + e * (22947209362139917e-20 + e * (e * (26772063206283885e-20 + e * (e * (e * (11082654115347302e-21 + e * (14230900732435883e-22 * e - 56749528269915965e-22)) - 2396505113867297e-22) - 7561801671883977e-20)) - 4691894943952557e-19));
    }, pp = function(e) {
      return e === 0 ? -8618882909167117e-19 : e * (7840392217200666e-19 + e * (e * (e * (6641498215465122e-20 + e * (11375726970678419e-21 * e - 3968365047179435e-20)) - 14638452578843418e-22) - 2990724803031902e-19)) - 8618882909167117e-19;
    }, mp = function(e) {
      return e === 0 ? -33679855336635813e-20 : e * (e * (2772753244959392e-19 + e * (e * (6797780477937208e-20 + e * (1419062920643967e-22 + e * (e * (8018470256334202e-21 + -2291481176508095e-21 * e) - 13594048189768693e-21))) - 19932570516188847e-20)) - 6972813758365858e-20) - 33679855336635813e-20;
    }, hp = function(e) {
      return e === 0 ? 5313079364639922e-19 : 5313079364639922e-19 + e * (e * (2708782096718045e-19 + e * (7902353232660328e-22 + e * (e * (561168275310625e-19 + -18329116582843375e-21 * e) - 8153969367561969e-20))) - 5921664373536939e-19);
    }, dp = function(e) {
      return e === 0 ? 34436760689237765e-20 : 34436760689237765e-20 + e * (5171790908260592e-20 + e * (e * (2812695154763237e-19 + -10976582244684731e-20 * e) - 33493161081142234e-20));
    }, gp = function(e) {
      return e === 0 ? -6526239185953094e-19 : e * (8394987206720873e-19 + -438297098541721e-18 * e) - 6526239185953094e-19;
    }, tr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Np = function(e, n) {
      var r, a, s, u, p;
      return u = e * (s = -M(1 + (a = (n - e) / e)) + a), p = c(2 * s), n < e && (p = -p), tr[0] = fp(p), tr[1] = cp(p), tr[2] = lp(p), tr[3] = vp(p), tr[4] = pp(p), tr[5] = mp(p), tr[6] = hp(p), tr[7] = dp(p), tr[8] = gp(p), tr[9] = -5967612901927463e-19, r = hn(tr, 1 / e), r *= R(-u) / c(yr * e), n < e && (r = -r), r += qr(c(u)) / 2;
    }, yp = eval, Mo = function() {
      var e;
      try {
        yp('"use strict"; (function* () {})'), e = !0;
      } catch {
        e = !1;
      }
      return e;
    }, bp = 1e6, wp = function(e, n) {
      var r, a, s, u, p;
      if (p = {}, arguments.length > 1 && (p = n), r = p.tolerance || kn, s = p.maxTerms || bp, u = p.initialValue || 0, typeof e.next == "function") {
        for (a of e)
          if (J(r * (u += a)) >= J(a) || --s == 0)
            break;
      } else
        do
          u += a = e();
        while (J(r * u) < J(a) && --s);
      return u;
    }, xp = 1e6, Sp = function(e, n) {
      var r, a, s, u, p;
      p = {}, arguments.length > 1 && (p = n), r = p.tolerance || kn, s = p.maxTerms || xp, u = p.initialValue || 0;
      do
        u += a = e();
      while (J(r * u) < J(a) && --s);
      return u;
    }, ca = Mo() ? wp : Sp, Mp = function(e, n) {
      var r = 1, a = e, s = n;
      return function() {
        var u = r;
        return r *= s / (a += 1), u;
      };
    }, b0 = function(e, n, r) {
      var a;
      return r = r || 0, a = Mp(e, n), ca(a, { initialValue: r });
    }, _e = function(e) {
      var n, r;
      return e === 0 ? 1 / 0 : ((e < 0 ? -e : e) <= 1 ? (n = 709811.662581658 + e * (679979.8474157227 + e * (293136.7857211597 + e * (74887.54032914672 + e * (12555.290582413863 + e * (1443.4299244417066 + e * (115.24194596137347 + e * (6.309239205732627 + e * (0.22668404630224365 + e * (0.004826466289237662 + 4624429436045379e-20 * e))))))))), r = 0 + e * (362880 + e * (1026576 + e * (1172700 + e * (723680 + e * (269325 + e * (63273 + e * (9450 + e * (870 + e * (45 + 1 * e)))))))))) : (n = 4624429436045379e-20 + (e = 1 / e) * (0.004826466289237662 + e * (0.22668404630224365 + e * (6.309239205732627 + e * (115.24194596137347 + e * (1443.4299244417066 + e * (12555.290582413863 + e * (74887.54032914672 + e * (293136.7857211597 + e * (679979.8474157227 + 709811.662581658 * e))))))))), r = 1 + e * (45 + e * (870 + e * (9450 + e * (63273 + e * (269325 + e * (723680 + e * (1172700 + e * (1026576 + e * (362880 + 0 * e)))))))))), n / r);
    }, ko = function(e, n) {
      var r, a, s, u, p, k, b;
      return b = (n - e - qe + 0.5) / (s = e + qe - 0.5), e < 1 ? n <= de ? R(e * M(n) - n - ke(e)) : V(n, e) * R(-n) / ve(e) : (J(b * b * e) <= 100 && e > 150 ? (r = e * (oe(b) - b) + n * (0.5 - qe) / s, r = R(r)) : (u = e * M(n / s), Se(u, p = e - n) <= de || Ee(u, p) >= ce ? (a = p / e, Se(u, p) / 2 > de && Ee(u, p) / 2 < ce ? r = (k = V(n / s, e / 2) * R(p / 2)) * k : Se(u, p) / 4 > de && Ee(u, p) / 4 < ce && n > e ? (r = (k = V(n / s, e / 4) * R(p / 4)) * k, r *= r) : r = a > de && a < ce ? V(n * R(a) / s, e) : R(u + p)) : r = V(n / s, e) * R(p)), r *= c(s / Kn) / _e(e));
    }, kp = function(e, n) {
      var r;
      if (i(e) || i(n))
        return NaN;
      if (n === 0)
        return 0;
      if (e === 0)
        return -1;
      if (e < 0 && n % 2 == 0 && (e = -e), e > 0) {
        if ((J(n * (e - 1)) < 0.5 || J(n) < 0.2) && (r = M(e) * n) < 0.5)
          return Le(r);
      } else if (Ti(n) !== n)
        return NaN;
      return V(e, n) - 1;
    }, Tp = function(e) {
      var n, r;
      return e === 0 ? -0.01803556856784494 : ((e < 0 ? -e : e) <= 1 ? (n = e * (0.02512664961998968 + e * (0.049410315156753225 + e * (0.0172491608709614 + e * (e * (e * (0 * e - 3245886498259485e-20) - 5410098692152044e-19) - 2594535632054381e-19)))) - 0.01803556856784494, r = 1 + e * (1.962029871977952 + e * (1.4801966942423133 + e * (0.5413914320717209 + e * (0.09885042511280101 + e * (0.008213096746488934 + e * (22493629192211576e-20 + -22335276320861708e-23 * e))))))) : (n = 0 + (e = 1 / e) * (e * (e * (e * (0.0172491608709614 + e * (0.049410315156753225 + e * (0.02512664961998968 + -0.01803556856784494 * e))) - 2594535632054381e-19) - 5410098692152044e-19) - 3245886498259485e-20), r = e * (22493629192211576e-20 + e * (0.008213096746488934 + e * (0.09885042511280101 + e * (0.5413914320717209 + e * (1.4801966942423133 + e * (1.962029871977952 + 1 * e)))))) - 22335276320861708e-23), n / r);
    }, Ep = function(e) {
      var n, r;
      return e === 0 ? 0.04906224540690395 : ((e < 0 ? -e : e) <= 1 ? (n = 0.04906224540690395 + e * (e * (e * (e * (e * (-0.0010034668769627955 * e - 0.024014982064857155) - 0.1584135863906922) - 0.4065671242119384) - 0.4149833583594954) - 0.09691175301595212), r = 1 + e * (3.0234982984646304 + e * (3.4873958536072385 + e * (1.9141558827442668 + e * (0.5071377386143635 + e * (0.05770397226904519 + 0.001957681026011072 * e)))))) : (n = (e = 1 / e) * (e * (e * (e * (e * (0.04906224540690395 * e - 0.09691175301595212) - 0.4149833583594954) - 0.4065671242119384) - 0.1584135863906922) - 0.024014982064857155) - 0.0010034668769627955, r = 0.001957681026011072 + e * (0.05770397226904519 + e * (0.5071377386143635 + e * (1.9141558827442668 + e * (3.4873958536072385 + e * (3.0234982984646304 + 1 * e)))))), n / r);
    }, Pp = function(e) {
      var n, r;
      return e === 0 ? -0.029232972183027003 : ((e < 0 ? -e : e) <= 1 ? (n = e * (0.14421626775719232 + e * (e * (0.05428096940550536 + e * (e * (4311713426792973e-19 + 0 * e) - 0.008505359768683364)) - 0.14244039073863127)) - 0.029232972183027003, r = 1 + e * (e * (0.846973248876495 + e * (e * (0.02558279715597587 + e * (-8271935218912905e-22 * e - 0.0010066679553914337)) - 0.22009515181499575)) - 1.5016935605448505)) : (n = 0 + (e = 1 / e) * (4311713426792973e-19 + e * (e * (0.05428096940550536 + e * (e * (0.14421626775719232 + -0.029232972183027003 * e) - 0.14244039073863127)) - 0.008505359768683364)), r = e * (e * (0.02558279715597587 + e * (e * (0.846973248876495 + e * (1 * e - 1.5016935605448505)) - 0.22009515181499575)) - 0.0010066679553914337) - 8271935218912905e-22), n / r);
    }, Vp = 0.15896368026733398, Cp = 0.5281534194946289, Ap = 0.45201730728149414, To = function(e, n, r) {
      var a, s, u, p;
      if (e < kn)
        return -M(e);
      if (n === 0 || r === 0)
        return 0;
      if (s = 0, e > 2) {
        if (e >= 3) {
          do
            r -= 1, s += M(e -= 1);
          while (e >= 3);
          r = e - 2;
        }
        return u = r * (e + 1), p = Tp(r), s += u * Vp + u * p;
      }
      return e < 1 && (s += -M(e), r = n, n = e, e += 1), e <= 1.5 ? (u = Ep(n), s += (a = n * r) * Cp + a * u) : (u = r * n, p = Pp(-r), s += u * Ap + u * p);
    }, Ip = function(e) {
      return i(e) ? NaN : e < 0 ? e < -0.5 ? ve(1 + e) - 1 : Le(-oe(e) + To(e + 2, e + 1, e)) : e < 2 ? Le(To(e + 1, e, e - 1)) : ve(1 + e) - 1;
    }, Bp = function(e, n) {
      var r, a, s, u;
      return r = -n, n = -n, a = e + 1, s = 1, function() {
        return u = r / a, r *= n, r /= s += 1, a += 1, u;
      };
    }, Rp = function(e, n, r) {
      var a, s, u, p;
      return s = ((a = Ip(e)) + 1) / e, a -= u = kp(n, e), a /= e, p = Bp(e, n), a = -(u += 1) * ca(p, { initialValue: ((r ? s : 0) - a) / u }), r && (a = -a), [a, s];
    }, nn = 11754943508222875e-54, Lp = 1e6, qp = function(e, n) {
      var r, a, s;
      return a = {}, arguments.length > 1 && (a = n), r = a.maxIter || Lp, s = a.tolerance || kn, a.keep ? function(u, p, k) {
        var b, C, O, B, A, W;
        if ((O = (W = (b = typeof u.next == "function") ? u.next().value : u())[1]) === 0 && (O = nn), B = O, A = 0, b === !0)
          do
            (W = u.next().value) && ((A = W[1] + W[0] * A) === 0 && (A = nn), (B = W[1] + W[0] / B) === 0 && (B = nn), O *= C = B * (A = 1 / A));
          while (W && J(C - 1) > p && --k);
        else
          do
            (W = u()) && ((A = W[1] + W[0] * A) === 0 && (A = nn), (B = W[1] + W[0] / B) === 0 && (B = nn), O *= C = B * (A = 1 / A));
          while (W && J(C - 1) > p && --k);
        return O;
      }(e, s, r) : function(u, p, k) {
        var b, C, O, B, A, W, z;
        if (B = (z = (b = typeof u.next == "function") ? u.next().value : u())[1], O = z[0], B === 0 && (B = nn), A = B, W = 0, b === !0)
          do
            (z = u.next().value) && ((W = z[1] + z[0] * W) === 0 && (W = nn), (A = z[1] + z[0] / A) === 0 && (A = nn), B *= C = A * (W = 1 / W));
          while (J(C - 1) > p && --k);
        else
          do
            (z = u()) && ((W = z[1] + z[0] * W) === 0 && (W = nn), (A = z[1] + z[0] / A) === 0 && (A = nn), B *= C = A * (W = 1 / W));
          while (z && J(C - 1) > p && --k);
        return O / B;
      }(e, s, r);
    }, Fp = 1e6, Op = function(e, n) {
      var r, a, s;
      return a = {}, arguments.length > 1 && (a = n), s = a.tolerance || kn, r = a.maxIter || Fp, a.keep ? function(u, p, k) {
        var b, C, O, B, A;
        (B = (A = u())[1]) === 0 && (B = nn), C = B, O = 0;
        do
          (A = u()) && ((O = A[1] + A[0] * O) === 0 && (O = nn), (C = A[1] + A[0] / C) === 0 && (C = nn), B *= b = C * (O = 1 / O));
        while (A && J(b - 1) > p && --k);
        return B;
      }(e, s, r) : function(u, p, k) {
        var b, C, O, B, A, W;
        A = (W = u())[1], C = W[0], A === 0 && (A = nn), O = A, B = 0;
        do
          (W = u()) && ((B = W[1] + W[0] * B) === 0 && (B = nn), (O = W[1] + W[0] / O) === 0 && (O = nn), A *= b = O * (B = 1 / B));
        while (W && J(b - 1) > p && --k);
        return C / A;
      }(e, s, r);
    }, Eo = Mo() ? qp : Op, Dp = function(e, n) {
      var r = n - e + 1, a = e, s = 0;
      return function() {
        return [(s += 1) * (a - s), r += 2];
      };
    }, Po = function(e, n) {
      var r = Dp(e, n);
      return 1 / (n - e + 1 + Eo(r));
    }, Up = 170, fr = function e(n, r, a, s) {
      var u, p, k, b, C, O, B, A, W, z, K, $, ae;
      if (n < 0 || r <= 0)
        return NaN;
      if (p = a === void 0 || a, B = s, A = 0, r >= Up && !p)
        return B && 4 * r < n ? (A = r * M(n) - n, A += M(Po(r, n))) : !B && r > 4 * n ? (A = r * M(n) - n, A += M(b0(r, n, b = 0) / r)) : (A = e(r, n, !0, B)) === 0 ? B ? (A = M(A = 1 + 1 / (12 * r) + 1 / (288 * r * r)) - r + (r - 0.5) * M(r), A += M(Ei)) : (A = r * M(n) - n, A += M(b0(r, n, b = 0) / r)) : A = M(A) + ke(r), A > ce ? H : R(A);
      switch (r < 30 && r <= n + 1 && n < ce ? C = !(W = ($ = ye(r)) === r) && J($ - r) === 0.5 : W = C = !1, W && n > 0.6 ? (B = !B, k = 0) : C && n > 0.2 ? (B = !B, k = 1) : n < wo && r > 1 ? k = 6 : n < 0.5 ? k = -0.4 / M(n) < r ? 2 : 3 : n < 1.1 ? k = 0.75 * n < r ? 2 : 3 : (O = !1, p && r > 20 && (z = J((n - r) / r), r > 200 ? 20 / r > z * z && (O = !0) : z < 0.4 && (O = !0)), O ? k = 5 : n - 1 / (3 * n) < r ? k = 2 : (k = 4, B = !B)), k) {
        case 0:
          A = q9(r, n), p === !1 && (A *= ve(r));
          break;
        case 1:
          A = up(r, n), p === !1 && (A *= ve(r));
          break;
        case 2:
          (A = p ? ko(r, n) : So(r, n)) !== 0 && (b = 0, u = !1, B && (b = p ? 1 : ve(r), p || A >= 1 || Tn * A > b ? (b /= A, p || r < 1 || Tn / r > b ? (b *= -r, u = !0) : b = 0) : b = 0)), A *= b0(r, n, b) / r, u && (B = !1, A = -A);
          break;
        case 3:
          A = (K = Rp(r, n, B = !B))[0], ae = K[1], B = !1, p && (A /= ae);
          break;
        case 4:
          (A = p ? ko(r, n) : So(r, n)) !== 0 && (A *= Po(r, n));
          break;
        case 5:
          A = Np(r, n), n >= r && (B = !B);
          break;
        case 6:
          A = p ? V(n, r) / ve(r + 1) : V(n, r) / r, A *= 1 - r * n / (r + 1);
      }
      return p && A > 1 && (A = 1), B && (A = (p ? 1 : ve(r)) - A), A;
    }, Hp = function(e, n) {
      var r;
      return r = e * M(n), n >= 1 ? r < ce && -n > de ? V(n, e) * R(-n) : e >= 1 ? V(n / R(n / e), e) : R(r - n) : r > de ? V(n, e) * R(-n) : n / e < ce ? V(n / R(n / e), e) : R(r - n);
    }, Wp = function(e, n) {
      var r, a, s, u, p, k, b;
      return b = (n - e - qe + 0.5) / (s = e + qe - 0.5), e < 1 ? n <= de ? R(e * M(n) - n - ke(e)) : V(n, e) * R(-n) / ve(e) : (J(b * b * e) <= 100 && e > 150 ? (r = e * (oe(b) - b) + n * (0.5 - qe) / s, r = R(r)) : (u = e * M(n / s), Se(u, p = e - n) <= de || Ee(u, p) >= ce ? (a = p / e, Se(u, p) / 2 > de && Ee(u, p) / 2 < ce ? r = (k = V(n / s, e / 2) * R(p / 2)) * k : Se(u, p) / 4 > de && Ee(u, p) / 4 < ce && n > e ? (r = (k = V(n / s, e / 4) * R(p / 4)) * k, r *= r) : r = a > de && a < ce ? V(n * R(a) / s, e) : R(u + p)) : r = V(n / s, e) * R(p)), r *= c(s / Kn) / _e(e));
    }, Fr = new Array(30), Or = function(e, n, r, a, s, u, p) {
      var k, b, C, O, B, A, W, z, K, $, ae, Q, fe, le, se, te, xe, Fe;
      if (xe = e + (A = n - 1) / 2, $ = a < 0.35 ? oe(-a) : M(r), (Q = Wp(n, Fe = -xe * $)) <= er)
        return s;
      for (p ? (k = Q / N0(e, n), k /= V(xe, n)) : k = Hp(n, Fe) / V(xe, n), k *= u, Fr[0] = 1, fe = fr(Fe, n, !0, !0), O = s + k * (fe /= Q), C = 1, W = $ / 2, W *= W, z = 1, ae = 4 * xe * xe, B = n, se = 1; se < Fr.length; ++se) {
        for (C += 2, Fr[se] = 0, K = n - se, b = 3, le = 1; le < se; ++le)
          K = le * n - se, Fr[se] += K * Fr[se - le] / Pi(b), b += 2;
        if (Fr[se] /= se, Fr[se] += A / Pi(C), fe = (B * (B + 1) * fe + (Fe + B + 1) * z) / ae, z *= W, B += 2, O += te = k * Fr[se] * fe, te > 1) {
          if (J(te) < J(kn * O))
            break;
        } else if (J(te / kn) < J(O))
          break;
      }
      return O;
    }, w0 = function(e, n, r) {
      var a, s;
      if (r === 0)
        return 1;
      for (a = 1, s = 0; s < r; s++)
        a *= (e + s) / (n + s);
      return a;
    }, Gp = function(e, n) {
      var r, a, s;
      if ((r = arguments.length) === 0)
        return H;
      if (r === 2)
        return Ee(J(e), J(n));
      for (a = [], s = 0; s < r; s++)
        a.push(J(arguments[s]));
      return Ee.apply(null, a);
    }, zp = function(e, n) {
      var r, a, s;
      if ((r = arguments.length) === 0)
        return H;
      if (r === 2)
        return Se(J(e), J(n));
      for (a = [], s = 0; s < r; s++)
        a.push(J(arguments[s]));
      return Se.apply(null, a);
    }, x0 = function(e, n, r, a, s) {
      var u, p, k, b, C, O, B, A, W, z, K, $, ae, Q;
      if (!s)
        return V(r, e) * V(a, n);
      if (b = e + qe - 0.5, C = n + qe - 0.5, O = (ae = e + n) + qe - 0.5, u = _e(ae), u /= _e(e) * _e(n), u *= c(C / Kn), u *= c(b / O), zp(B = (r * n - a * b) / b, A = (a * e - r * C) / C) < 0.2)
        if (B * A > 0 || Se(e, n) < 1)
          J(B) < 0.1 ? u *= R(e * oe(B)) : u *= V(r * O / b, e), J(A) < 0.1 ? u *= R(n * oe(A)) : u *= V(a * O / C, n);
        else if (Gp(B, A) < 0.5)
          k = n / e, (p = e < n) && k * A < 0.1 || !p && B / k > 0.1 ? (W = Le(k * oe(A)), W = e * oe(W = B + W + W * B), u *= R(W)) : (W = Le(oe(B) / k), W = n * oe(W = A + W + W * A), u *= R(W));
        else if (J(B) < J(A))
          if ((Q = e * oe(B) + n * M(a * O / C)) <= de || Q >= ce) {
            if ((Q += M(u)) >= ce)
              return NaN;
            u = R(Q);
          } else
            u *= R(Q);
        else if ((Q = n * oe(A) + e * M(r * O / b)) <= de || Q >= ce) {
          if ((Q += M(u)) >= ce)
            return NaN;
          u = R(Q);
        } else
          u *= R(Q);
      else if ($ = a * O / C, B = e * M(K = r * O / b), A = n * M($), B >= ce || B <= de || A >= ce || A <= de)
        if (e < n)
          if (z = V($, n / e), (W = e * (M(K) + M(z))) < ce && W > de)
            u *= V(z * K, e);
          else {
            if ((A += B + M(u)) >= ce)
              return NaN;
            u = R(A);
          }
        else if (z = V(K, e / n), (W = (M(z) + M($)) * n) < ce && W > de)
          u *= V(z * $, n);
        else {
          if ((A += B + M(u)) >= ce)
            return NaN;
          u = R(A);
        }
      else
        u *= V(K, e) * V($, n);
      return u;
    }, jp = { keep: !0, maxIter: 1e3 }, Vo = function(e, n, r, a, s, u) {
      var p, k;
      return p = x0(e, n, r, a, s), u && (u[1] = p), p === 0 ? p : (k = /* @__PURE__ */ function(b, C, O, B) {
        var A = 0;
        return function() {
          var W, z, K;
          return z = (b + A - 1) * (b + C + A - 1) * A * (C - A) * O * O, W = b + 2 * A - 1, K = A, K += A * (C - A) * O / (b + 2 * A - 1), K += (b + A) * (b * B - C * O + 1 + A * (2 - O)) / (b + 2 * A + 1), A += 1, [z /= W * W, K];
        };
      }(e, n, r, a), p / Eo(k, jp));
    }, Co = function e(n, r) {
      var a, s;
      if (i(n) || i(r))
        return NaN;
      if (!me(n) || !me(r))
        return NaN;
      if (r < 0)
        return 0;
      if (n < 0)
        return a = e(-n + r - 1, r), bi(r) && (a = -a), a;
      if (r > n)
        return 0;
      if (r === 0 || r === n)
        return 1;
      if (r === 1 || r === n - 1)
        return n;
      for (n - r < r && (r = n - r), a = n, s = 2; s <= r; s++)
        a *= (n - s + 1) / s;
      return me(a) ? a : jn(a);
    }, Kp = function(e, n, r, a) {
      var s, u, p, k, b;
      if ((u = V(r, e)) > er)
        for (k = u, b = ye(e - 1); b > n; b--)
          u += k *= (b + 1) * a / ((e - b) * r);
      else if ((p = ye(e * r)) <= n + 1 && (p = ye(n + 2)), u = V(r, p) * V(a, e - p), (u *= Co(ye(e), ye(p))) == 0)
        for (b = p - 1; b > n; b--)
          u += V(r, b) * V(a, e - b), u *= Co(ye(e), ye(b));
      else {
        for (k = u, s = u, b = p - 1; b > n; b--)
          u += k *= (b + 1) * a / ((e - b) * r);
        for (k = s, b = p + 1; b <= e; b++)
          u += k *= (e - b + 1) * r / (b * a);
      }
      return u;
    }, Vi = function(e, n, r, a, s, u, p) {
      var k, b, C, O;
      if (k = x0(e, n, r, a, u), p && (p[1] = k), (k /= e) == 0)
        return k;
      for (C = 1, b = 1, O = 0; O < s - 1; ++O)
        C += b *= (e + n + O) * r / (e + O + 1);
      return k *= C;
    }, Ao = { maxTerms: 100 }, cr = function(e, n, r, a, s, u, p) {
      var k, b, C, O, B, A, W, z;
      return s ? (b = e + qe - 0.5, C = n + qe - 0.5, O = (W = e + n) + qe - 0.5, k = _e(W) / (_e(e) * _e(n)), B = M(O / C) * (n - 0.5), A = M(r * O / b) * e, B > de && B < ce && A > de && A < ce ? (k *= e * n < 10 * C ? R((n - 0.5) * oe(e / C)) : V(O / C, n - 0.5), k *= V(r * O / b, e), k *= c(b / Kn), u && (u[1] = k * V(p, n))) : (k = M(k) + B + A + (M(b) - 1) / 2, u && (u[1] = R(k + n * M(p))), k = R(k))) : k = V(r, e), k < er ? a : (z = function(K, $, ae, Q) {
        var fe = 1 - $, le = 1;
        return function() {
          var se = Q / K;
          return K += 1, Q *= fe * ae / le, le += 1, fe += 1, se;
        };
      }(e, n, r, k), Ao.initialValue = a, ca(z, Ao));
    }, Qp = 1 / T, Io = function(e, n, r, a, s, u, p, k) {
      var b, C, O, B, A, W, z, K, $, ae, Q;
      if (Q = 1 - e, W = k, u[z = k + p] = -1, i(e) || e < 0 || e > 1)
        return u[W] = NaN, u[z] = NaN, u;
      if (a) {
        if (n < 0 || r < 0)
          return u[W] = NaN, u[z] = NaN, u;
        if (n === 0) {
          if (r === 0)
            return u[W] = NaN, u[z] = NaN, u;
          if (r > 0)
            return u[W] = s ? 0 : 1, u;
        } else if (r === 0 && n > 0)
          return u[W] = s ? 1 : 0, u;
      } else if (n <= 0 || r <= 0)
        return u[W] = NaN, u[z] = NaN, u;
      return e === 0 ? (u[z] = n === 1 ? 1 : n < 1 ? Tn / 2 : 2 * er, s ? (u[W] = a ? 1 : Me(n, r), u) : (u[W] = 0, u)) : e === 1 ? (u[z] = r === 1 ? 1 : r < 1 ? Tn / 2 : 2 * er, u[W] = s ? 0 : a ? 1 : Me(n, r), u) : n === 0.5 && r === 0.5 ? (u[z] = Qp * c(Q * e), ae = x(c(s ? Q : e)), ae /= gr, a || (ae *= T), u[W] = ae, u) : (n === 1 && (A = r, r = n, n = A, A = Q, Q = e, e = A, s = !s), r === 1 ? n === 1 ? (u[W] = s ? Q : e, u[z] = 1, u) : (u[z] = n * V(e, n - 1), ae = Q < 0.5 ? s ? -Le(n * oe(-Q)) : R(n * oe(-Q)) : s ? -(V(e, n) - 1) : V(e, n), a || (ae /= n), u[W] = ae, u) : (Se(n, r) <= 1 ? (e > 0.5 && (A = r, r = n, n = A, A = Q, Q = e, e = A, s = !s), Ee(n, r) <= 1 ? n >= Se(0.2, r) || V(e, n) <= 0.9 ? s ? (C = -(a ? 1 : Me(n, r)), s = !1, C = -cr(n, r, e, C, a, u, Q)) : C = cr(n, r, e, 0, a, u, Q) : (A = r, r = n, n = A, A = Q, Q = e, e = A, s = !s, Q >= 0.3 ? s ? (C = -(a ? 1 : Me(n, r)), s = !1, C = -cr(n, r, e, C, a, u, Q)) : C = cr(n, r, e, 0, a, u, Q) : (b = a ? 1 : w0(n + r, n, 20), C = Vi(n, r, e, Q, 20, a, u), s ? (C -= a ? 1 : Me(n, r), s = !1, C = -Or(n + 20, r, e, Q, C, b, a)) : C = Or(n + 20, r, e, Q, C, b, a))) : r <= 1 || e < 0.1 && V(r * e, n) <= 0.7 ? s ? (C = -(a ? 1 : Me(n, r)), s = !1, C = -cr(n, r, e, C, a, u, Q)) : C = cr(n, r, e, 0, a, u, Q) : (A = r, r = n, n = A, A = Q, Q = e, e = A, s = !s, Q >= 0.3 ? s ? (C = -(a ? 1 : Me(n, r)), s = !1, C = -cr(n, r, e, C, a, u, Q)) : C = cr(n, r, e, 0, a, u, Q) : n >= 15 ? s ? (C = -(a ? 1 : Me(n, r)), s = !1, C = -Or(n, r, e, Q, C, 1, a)) : C = Or(n, r, e, Q, 0, 1, a) : (b = a ? 1 : w0(n + r, n, 20), C = Vi(n, r, e, Q, 20, a, u), s ? (C -= a ? 1 : Me(n, r), s = !1, C = -Or(n + 20, r, e, Q, C, b, a)) : C = Or(n + 20, r, e, Q, C, b, a)))) : ((n < r ? n - (n + r) * e : (n + r) * Q - r) < 0 && (A = r, r = n, n = A, A = Q, Q = e, e = A, s = !s), r < 40 ? ye(n) === n && ye(r) === r && n < _8 - 100 ? (C = Kp($ = r + (K = n - 1), K, e, Q), a || (C *= Me(n, r))) : r * e <= 0.7 ? s ? (C = -(a ? 1 : Me(n, r)), s = !1, C = -cr(n, r, e, C, a, u, Q)) : C = cr(n, r, e, 0, a, u, Q) : n > 15 ? (($ = ye(r)) === r && ($ -= 1), O = r - $, b = a ? 1 : w0(n + O, O, $), C = Vi(O, n, Q, e, $, a), C = Or(n, O, e, Q, C, 1, a), C /= b) : a ? ((O = r - ($ = ye(r))) <= 0 && ($ -= 1, O += 1), C = Vi(O, n, Q, e, $, a), C += Vi(n, O, e, Q, 20, a), s && (C -= 1), C = Or(n + 20, O, e, Q, C, 1, a), s && (C = -C, s = !1)) : C = Vo(n, r, e, Q, a, u) : C = Vo(n, r, e, Q, a, u)), u[z] < 0 && (u[z] = x0(n, r, e, Q, !0)), B = Q * e, u[z] !== 0 && (Tn * B < u[z] ? u[z] = Tn / 2 : u[z] /= B), u[W] = s ? (a ? 1 : Me(n, r)) - C : C, u));
    }, Bo = function(e, n, r, a, s) {
      return Io(e, n, r, a, s, [0, 0], 1, 0);
    };
    o(Bo, "assign", Io);
    var Ro = Bo, $p = Ro.assign, Qe = function(e, n, r, a, s) {
      var u = [0, 0];
      return $p(e, n, r, a = a !== !1, s = s === !0, u, 1, 0), u[0];
    }, Lo = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? 0 : e >= 1 ? 1 : Qe(e, n, r);
    };
    o(Lo, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 ? 0 : r >= 1 ? 1 : Qe(r, e, n);
      };
    });
    var la = Lo, Zp = Ge.isPrimitive, qo = function(e) {
      return Zp(e) && e > 0;
    }, Jp = Ge.isObject, Fo = function(e) {
      return Jp(e) && e.valueOf() > 0;
    }, S0 = function(e) {
      return qo(e) || Fo(e);
    };
    o(S0, "isPrimitive", qo), o(S0, "isObject", Fo);
    var Ue = S0, Xp = function(e) {
      return e === 0 ? 0.13333333333320124 : 0.13333333333320124 + e * (0.021869488294859542 + e * (0.0035920791075913124 + e * (5880412408202641e-19 + e * (7817944429395571e-20 + -18558637485527546e-21 * e))));
    }, Yp = function(e) {
      return e === 0 ? 0.05396825397622605 : 0.05396825397622605 + e * (0.0088632398235993 + e * (0.0014562094543252903 + e * (2464631348184699e-19 + e * (7140724913826082e-20 + 2590730518636337e-20 * e))));
    }, _p = 0.7853981633974483, em = 3061616997868383e-32, nm = 0.3333333333333341, rm = 2147483647, Oo = function(e, n, r) {
      var a, s, u, p, k, b, C, O, B;
      return (s = (a = Ke(e)) & rm | 0) >= 1072010280 && (e < 0 && (e = -e, n = -n), e = (B = _p - e) + (O = em - n), n = 0), p = n + (B = e * e) * ((k = B * e) * ((p = Xp(O = B * B)) + (C = B * Yp(O))) + n), O = e + (p += nm * k), s >= 1072010280 ? (1 - (a >> 30 & 2)) * ((C = r) - 2 * (e - (O * O / (O + C) - p))) : r === 1 ? O : (_n(B = O, 0), C = p - (B - e), _n(b = u = -1 / O, 0), b + u * ((k = 1 + b * B) + b * C));
    }, M0 = [0, 0], im = 2147483647, am = 1072243195, tm = 2146435072, om = 1044381696, k0 = function(e) {
      var n, r;
      return n = Ke(e), (n &= im) <= am ? n < om ? e : Oo(e, 0, 1) : n >= tm ? NaN : (r = f0(e, M0), Oo(M0[0], M0[1], 1 - ((1 & r) << 1)));
    }, sm = function(e) {
      return e === 0 ? 0.08333333333333333 : 0.08333333333333333 + e * (e * (0.003968253968253968 + e * (e * (0.007575757575757576 + e * (e * (0.08333333333333333 + -0.4432598039215686 * e) - 0.021092796092796094)) - 0.004166666666666667)) - 0.008333333333333333);
    }, um = function(e) {
      var n;
      return M(e -= 1) + 1 / (2 * e) - (n = 1 / (e * e)) * sm(n);
    }, fm = function(e) {
      var n, r;
      return e === 0 ? 0.25479851061131553 : ((e < 0 ? -e : e) <= 1 ? (n = 0.25479851061131553 + e * (e * (e * (e * (e * (0 * e - 0.002071332116774595) - 0.04525132144873906) - 0.28919126444774784) - 0.6503185377089651) - 0.3255503118680449), r = 1 + e * (2.076711702373047 + e * (1.4606242909763516 + e * (0.43593529692665967 + e * (0.054151797245674226 + e * (0.0021284987017821146 + -5578984132167551e-22 * e)))))) : (n = 0 + (e = 1 / e) * (e * (e * (e * (e * (0.25479851061131553 * e - 0.3255503118680449) - 0.6503185377089651) - 0.28919126444774784) - 0.04525132144873906) - 0.002071332116774595), r = e * (0.0021284987017821146 + e * (0.054151797245674226 + e * (0.43593529692665967 + e * (1.4606242909763516 + e * (2.076711702373047 + 1 * e))))) - 5578984132167551e-22), n / r);
    }, cm = 1.4616321446374059, lm = 3309564688275257e-25, vm = 9016312093258695e-35, pm = 0.9955816268920898, mm = function(e) {
      var n, r;
      return n = e - cm, n -= lm, n -= vm, r = fm(e - 1), n * pm + n * r;
    }, hm = 10, Qn = function(e) {
      var n, r;
      if (i(e) || e === 0)
        return NaN;
      if (e <= -1) {
        if ((n = (e = 1 - e) - ye(e)) > 0.5 && (n -= 1), n === 0)
          return NaN;
        r = T / k0(T * n);
      } else
        r = 0;
      if (e >= hm)
        return r += um(e);
      for (; e > 2; )
        r += 1 / (e -= 1);
      for (; e < 1; )
        r -= 1 / e, e += 1;
      return r += mm(e);
    }, Ci = 0.9189385332046728, Do = [1276642195630063e-46, -3401102254316749e-45, 1025680058010471e-43, -35475981581010704e-43, 14292273559424982e-41, -6831888753985767e-39, 39628370610464347e-38, -2868042435334643e-35, 2683181998482699e-33, -3399615005417722e-31, 6221098041892606e-29, -1809129475572494e-26, 981082564692473e-23, -1384948176067564e-20, 0.16663894804518634], dm = Do.length, gm = function(e) {
      var n, r, a, s, u;
      if (e < -1.1 || e > 1.1)
        return NaN;
      for (a = 0, s = 0, n = 2 * e, u = 0; u < dm; u++)
        r = a, s = n * (a = s) - r + Do[u];
      return 0.5 * (s - r);
    }, Nm = 9490626562425156e-8, ym = 3745194030963158e291, Ai = function(e) {
      return e < 10 ? NaN : e >= ym ? 0 : e < Nm ? gm(2 * V(10 / e, 2) - 1) / e : 1 / (12 * e);
    }, lr = function(e, n) {
      var r, a, s;
      return a = Se(e, n), s = Ee(e, n), a < 0 ? NaN : a === 0 ? H : s === H ? j : a >= 10 ? (r = Ai(a) + Ai(s) - Ai(a + s), -0.5 * M(s) + Ci + r + (a - 0.5) * M(a / (a + s)) + s * oe(-a / (a + s))) : s >= 10 ? (r = Ai(s) - Ai(a + s), ke(a) + r + a - a * M(a + s) + (s - 0.5) * oe(-a / (a + s))) : M(ve(a) * (ve(s) / ve(a + s)));
    }, Uo = function(e, n) {
      var r;
      return e <= 0 || n <= 0 ? NaN : (r = lr(e, n), r -= (e - 1) * Qn(e), r -= (n - 1) * Qn(n), r += (e + n - 2) * Qn(e + n));
    }, Ho = function(e, n) {
      var r, a, s, u;
      return e <= 0 || n <= 0 ? NaN : (u = (a = e - n) * a * ((s = e + n) + 1), u -= (r = e * n) * (s + 2), u *= 6, u /= r * (s + 2) * (s + 3));
    }, Wo = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : e / (e + n);
    }, bm = function(e) {
      var n, r;
      return e === 0 ? -5087819496582806e-19 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.03348066254097446 + e * (e * (e * (0.02198786811111689 + e * (0.008226878746769157 + e * (e * (0 + 0 * e) - 0.005387729650712429))) - 0.03656379714117627) - 0.012692614766297404)) - 0.008368748197417368) - 5087819496582806e-19, r = 1 + e * (e * (e * (1.5622155839842302 + e * (0.662328840472003 + e * (e * (e * (0.07952836873415717 + e * (8862163904564247e-19 * e - 0.0023339375937419)) - 0.05273963823400997) - 0.7122890234154284))) - 1.5657455823417585) - 0.9700050433032906)) : (n = 0 + (e = 1 / e) * (0 + e * (e * (0.008226878746769157 + e * (0.02198786811111689 + e * (e * (e * (0.03348066254097446 + e * (-5087819496582806e-19 * e - 0.008368748197417368)) - 0.012692614766297404) - 0.03656379714117627))) - 0.005387729650712429)), r = 8862163904564247e-19 + e * (e * (0.07952836873415717 + e * (e * (e * (0.662328840472003 + e * (1.5622155839842302 + e * (e * (1 * e - 0.9700050433032906) - 1.5657455823417585))) - 0.7122890234154284) - 0.05273963823400997)) - 0.0023339375937419)), n / r);
    }, wm = function(e) {
      var n, r;
      return e === 0 ? -0.20243350835593876 : ((e < 0 ? -e : e) <= 1 ? (n = e * (0.10526468069939171 + e * (8.3705032834312 + e * (17.644729840837403 + e * (e * (e * (17.445385985570866 + e * (21.12946554483405 + -3.6719225470772936 * e)) - 44.6382324441787) - 18.851064805871424)))) - 0.20243350835593876, r = 1 + e * (6.242641248542475 + e * (3.971343795334387 + e * (e * (e * (48.560921310873994 + e * (10.826866735546016 + e * (1.7211476576120028 * e - 22.643693341313973))) - 20.14326346804852) - 28.66081804998)))) : (n = (e = 1 / e) * (21.12946554483405 + e * (17.445385985570866 + e * (e * (e * (17.644729840837403 + e * (8.3705032834312 + e * (0.10526468069939171 + -0.20243350835593876 * e))) - 18.851064805871424) - 44.6382324441787))) - 3.6719225470772936, r = 1.7211476576120028 + e * (e * (10.826866735546016 + e * (48.560921310873994 + e * (e * (e * (3.971343795334387 + e * (6.242641248542475 + 1 * e)) - 28.66081804998) - 20.14326346804852))) - 22.643693341313973)), n / r);
    }, xm = function(e) {
      var n, r;
      return e === 0 ? -0.1311027816799519 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.11703015634199525 + e * (0.38707973897260434 + e * (0.3377855389120359 + e * (0.14286953440815717 + e * (0.029015791000532906 + e * (0.0021455899538880526 + e * (e * (28522533178221704e-24 + -681149956853777e-24 * e) - 6794655751811263e-22))))))) - 0.16379404719331705) - 0.1311027816799519, r = 1 + e * (3.4662540724256723 + e * (5.381683457070069 + e * (4.778465929458438 + e * (2.5930192162362027 + e * (0.848854343457902 + e * (0.15226433829533179 + e * (0.011059242293464892 + e * (0 + e * (0 + 0 * e)))))))))) : (n = (e = 1 / e) * (28522533178221704e-24 + e * (e * (0.0021455899538880526 + e * (0.029015791000532906 + e * (0.14286953440815717 + e * (0.3377855389120359 + e * (0.38707973897260434 + e * (0.11703015634199525 + e * (-0.1311027816799519 * e - 0.16379404719331705))))))) - 6794655751811263e-22)) - 681149956853777e-24, r = 0 + e * (0 + e * (0 + e * (0.011059242293464892 + e * (0.15226433829533179 + e * (0.848854343457902 + e * (2.5930192162362027 + e * (4.778465929458438 + e * (5.381683457070069 + e * (3.4662540724256723 + 1 * e)))))))))), n / r);
    }, Sm = function(e) {
      var n, r;
      return e === 0 ? -0.0350353787183178 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.018557330651423107 + e * (0.009508047013259196 + e * (0.0018712349281955923 + e * (15754461742496055e-20 + e * (460469890584318e-20 + e * (26633922742578204e-28 * e - 2304047769118826e-25)))))) - 0.0022242652921344794) - 0.0350353787183178, r = 1 + e * (1.3653349817554064 + e * (0.7620591645536234 + e * (0.22009110576413124 + e * (0.03415891436709477 + e * (0.00263861676657016 + e * (7646752923027944e-20 + e * (0 + 0 * e)))))))) : (n = 26633922742578204e-28 + (e = 1 / e) * (e * (460469890584318e-20 + e * (15754461742496055e-20 + e * (0.0018712349281955923 + e * (0.009508047013259196 + e * (0.018557330651423107 + e * (-0.0350353787183178 * e - 0.0022242652921344794)))))) - 2304047769118826e-25), r = 0 + e * (0 + e * (7646752923027944e-20 + e * (0.00263861676657016 + e * (0.03415891436709477 + e * (0.22009110576413124 + e * (0.7620591645536234 + e * (1.3653349817554064 + 1 * e)))))))), n / r);
    }, Mm = function(e) {
      var n, r;
      return e === 0 ? -0.016743100507663373 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.001056288621524929 + e * (20938631748758808e-20 + e * (14962478375834237e-21 + e * (44969678992770644e-23 + e * (4625961635228786e-24 + e * (9905570997331033e-32 * e - 2811287356288318e-29)))))) - 0.0011295143874558028) - 0.016743100507663373, r = 1 + e * (0.5914293448864175 + e * (0.1381518657490833 + e * (0.016074608709367652 + e * (9640118070051656e-19 + e * (27533547476472603e-21 + e * (282243172016108e-21 + e * (0 + 0 * e)))))))) : (n = 9905570997331033e-32 + (e = 1 / e) * (e * (4625961635228786e-24 + e * (44969678992770644e-23 + e * (14962478375834237e-21 + e * (20938631748758808e-20 + e * (0.001056288621524929 + e * (-0.016743100507663373 * e - 0.0011295143874558028)))))) - 2811287356288318e-29), r = 0 + e * (0 + e * (282243172016108e-21 + e * (27533547476472603e-21 + e * (9640118070051656e-19 + e * (0.016074608709367652 + e * (0.1381518657490833 + e * (0.5914293448864175 + 1 * e)))))))), n / r);
    }, km = 0.08913147449493408, Tm = 2.249481201171875, Em = 0.807220458984375, Pm = 0.9399557113647461, Vm = 0.9836282730102539, $e = function(e) {
      var n, r, a, s;
      return i(e) ? NaN : e === 0 ? H : e === 2 ? j : e === 1 ? 0 : e > 2 || e < 0 ? NaN : (e > 1 ? (n = -1, r = 2 - e) : (n = 1, r = e), (e = 1 - r) <= 0.5 ? (a = e * (e + 10), s = bm(e), n * (a * km + a * s)) : r >= 0.25 ? (a = c(-2 * M(r)), s = wm(r -= 0.25), n * (a / (Tm + s))) : (r = c(-M(r))) < 3 ? (s = xm(r - 1.125), n * (Em * r + s * r)) : r < 6 ? (s = Sm(r - 3), n * (Pm * r + s * r)) : (s = Mm(r - 6), n * (Vm * r + s * r)));
    }, Cm = 6123233995736766e-32, Am = function(e) {
      var n;
      return i(e) ? NaN : e < -1 || e > 1 ? NaN : e > 0.5 ? 2 * x(c(0.5 - 0.5 * e)) : (n = P - x(e), n += Cm, n += P);
    }, Pe = 1.4142135623730951, Im = function(e) {
      return e === 0 ? 0.16666666666666666 : 0.16666666666666666 + 0.16666666666666666 * e;
    }, Bm = function(e) {
      return e === 0 ? 0.058333333333333334 : 0.058333333333333334 + e * (0.06666666666666667 + 0.008333333333333333 * e);
    }, Rm = function(e) {
      return e === 0 ? 0.0251984126984127 : 0.0251984126984127 + e * (0.026785714285714284 + e * (0.0017857142857142857 + 1984126984126984e-19 * e));
    }, Lm = function(e) {
      return e === 0 ? 0.012039792768959435 : 0.012039792768959435 + e * (0.010559964726631394 + e * (e * (3747795414462081e-19 + 27557319223985893e-22 * e) - 0.0011078042328042327));
    }, qm = function(e) {
      return e === 0 ? 0.003837005972422639 : 0.003837005972422639 + e * (0.00610392115600449 + e * (e * (5945867404200738e-19 + e * (2505210838544172e-23 * e - 6270542728876062e-20)) - 0.0016095979637646305));
    }, Fm = function(e) {
      return e === 0 ? 0.0032177478835464946 : 0.0032177478835464946 + e * (0.0010898206731540065 + e * (e * (6908420797309686e-19 + e * (e * (154012654012654e-19 + 16059043836821613e-26 * e) - 16376804137220805e-20)) - 0.0012579159844784845));
    }, Om = function(e) {
      return e === 0 ? 0.001743826229834001 : 0.001743826229834001 + e * (3353097688001788e-20 + e * (e * (6451304695145635e-19 + e * (e * (49255746366361444e-21 + e * (7647163731819816e-28 * e - 39851014346715405e-22)) - 249472580470431e-18)) - 7624513544032393e-19));
    }, Dm = function(e) {
      return e === 0 ? 9647274732138864e-19 : 9647274732138864e-19 + e * (e * (e * (5140660578834113e-19 + e * (e * (9086710793521991e-20 + e * (e * (10914179173496788e-22 + 28114572543455206e-31 * e) - 15303004486655377e-21)) - 29133414466938067e-20)) - 36307660358786886e-20) - 3110108632631878e-19);
    }, Um = function(e) {
      return e === 0 ? 5422926281312969e-19 : 5422926281312969e-19 + e * (e * (e * (35764655430568635e-20 + e * (e * (12645437628698076e-20 + e * (e * (4890304529197534e-21 + e * (822063524662433e-32 * e - 3123956959982987e-22)) - 33202652391372056e-21)) - 28690924218514614e-20)) - 10230378073700413e-20) - 3694266780000966e-19);
    }, Hm = 0, vr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], Go = function(e, n) {
      var r, a;
      return a = N0(e / 2, 0.5) * c(e * T) * (n - 0.5), r = 1 / e, vr[1] = Im(r), vr[2] = Bm(r), vr[3] = Rm(r), vr[4] = Lm(r), vr[5] = qm(r), vr[6] = Fm(r), vr[7] = Om(r), vr[8] = Dm(r), vr[9] = Um(r), Hm + a * hn(vr, a * a);
    }, Dr = [0, 0, 0, 0, 0, 0, 0], va = function(e, n) {
      var r, a, s, u, p, k, b;
      return b = N0(e / 2, 0.5) * c(e * T) * n, s = e + 2, u = e + 4, p = e + 6, Dr[0] = 1, Dr[1] = -(e + 1) / (2 * s), s *= e + 2, Dr[2] = -e * (e + 1) * (e + 3) / (8 * s * u), s *= e + 2, Dr[3] = -e * (e + 1) * (e + 5) * ((3 * e + 7) * e - 2) / (48 * s * u * p), s *= e + 2, u *= e + 4, Dr[4] = -e * (e + 1) * (e + 7) * (((((15 * e + 154) * e + 465) * e + 286) * e - 336) * e + 64) / (384 * s * u * p * (e + 8)), s *= e + 2, Dr[5] = -e * (e + 1) * (e + 3) * (e + 9) * ((((((35 * e + 452) * e + 1573) * e + 600) * e - 2020) * e + 928) * e - 128) / (1280 * s * u * p * (e + 8) * (e + 10)), s *= e + 2, u *= e + 4, p *= e + 6, Dr[6] = -e * (e + 1) * (e + 11) * (((((((((((945 * e + 31506) * e + 425858) * e + 2980236) * e + 11266745) * e + 20675018) * e + 7747124) * e - 22574632) * e - 8565600) * e + 18108416) * e - 7099392) * e + 884736) / (46080 * s * u * p * (e + 8) * (e + 10) * (e + 12)), k = c(e), a = V(k * b, 1 / e), r = hn(Dr, a * a), r *= k, -(r /= a);
    }, T0 = function(e, n) {
      var r, a, s, u, p, k;
      return e > 1e20 ? -$e(2 * n) * Pe : (u = ((94.5 / ((a = 48 / ((r = 1 / (e - 0.5)) * r)) + (s = ((20700 * r / a - 98) * r - 16) * r + 96.36)) - 3) / a + 1) * c(r * gr) * e, (k = V(2 * u * n, 2 / e)) > 0.05 + r ? (k = (p = -$e(2 * n) * Pe) * p, e < 5 && (s += 0.3 * (e - 4.5) * (p + 0.6)), k = Le(r * (k = (((((0.4 * k + 6.3) * k + 36) * k + 94.5) / (s += (((0.05 * u * p - 5) * p - 7) * p - 2) * p + a) - k - 3) / a + 1) * p) * k)) : k = ((1 / (((e + 6) / (e * k) - 0.089 * u - 0.822) * (e + 2) * 3) + 0.5 / (e + 4)) * k - 1) * (e + 1) / (e + 2) + 1 / k, -c(e * k));
    }, zo = 268435456, Wm = 1 / 3, Gm = 106 / 3, zm = 0.8549879733383485, jm = function(e, n, r) {
      var a, s, u, p, k, b, C, O, B, A, W, z, K;
      if (p = 0, n > r ? (k = r, r = n, n = k, u = !0) : u = !1, ye(e) === e && e < 20)
        switch (a = ir(1, Gm), ye(e)) {
          case 1:
            p = n === 0.5 ? 0 : -Kr(T * n) / ar(T * n);
            break;
          case 2:
            p = (2 * n - 1) / c(2 * n * r);
            break;
          case 4:
            s = c(4 * n * r), A = 4 * Kr(Am(s) / 3) / s, W = c(A - 4), p = n - 0.5 < 0 ? -W : W;
            break;
          case 6:
            if (n < 1e-150)
              return (u ? -1 : 1) * T0(e, n);
            K = V(z = 4 * (n - n * n), Wm), B = 6 * (1 + zm * (1 / K - 1));
            do
              b = B, B = 2 * (8 * z * (B * (O = (C = B * B) * C)) - 270 * C + 2187) / (5 * (4 * z * O - 216 * B - 243));
            while (J((B - b) / B) > a);
            B = c(B - e), p = n - 0.5 < 0 ? -B : B;
            break;
          default:
            p = e > zo ? $e(2 * n) * Pe : e < 3 ? n > 0.2742 - 0.0242143 * e ? Go(e, n) : va(e, n) : n > ir(1, jn(e / -0.654)) ? T0(e, n) : va(e, n);
        }
      else
        p = e > zo ? -$e(2 * n) * Pe : e < 3 ? n > 0.2742 - 0.0242143 * e ? Go(e, n) : va(e, n) : n > ir(1, jn(e / -0.654)) ? T0(e, n) : va(e, n);
      return u ? -p : p;
    }, Km = function(e, n, r) {
      var a, s, u;
      return u = jm(a = 2 * e, s = n / 2, 1 - s), r && (r.value = u * u / (a + u * u)), a / (a + u * u);
    }, ze = [0, 0, 0, 0, 0, 0, 0], Ii = [0, 0, 0, 0], Qm = function(e, n, r) {
      var a, s, u, p, k, b, C;
      return a = $e(2 * r), a /= -c(e / 2), Ii[0] = a, k = (p = (b = n - e) * b) * b, ze[0] = -b * Pe / 2, ze[1] = (1 - 2 * b) / 8, ze[2] = -b * Pe / 48, ze[3] = -1 / 192, ze[4] = -b * Pe / 3840, ze[5] = 0, ze[6] = 0, Ii[1] = hn(ze, a), ze[0] = b * Pe * (3 * b - 2) / 12, ze[1] = (20 * p - 12 * b + 1) / 128, ze[2] = b * Pe * (20 * b - 1) / 960, ze[3] = (16 * p + 30 * b - 15) / 4608, ze[4] = b * Pe * (21 * b + 32) / 53760, ze[5] = (-32 * p + 63) / 368640, ze[6] = -b * Pe * (120 * b + 17) / 25804480, Ii[2] = hn(ze, a), ze[0] = b * Pe * (-75 * p + 80 * b - 16) / 480, ze[1] = (-1080 * k + 868 * p - 90 * b - 45) / 9216, ze[2] = b * Pe * (-1190 * p + 84 * b + 373) / 53760, ze[3] = (-2240 * k - 2508 * p + 2100 * b - 165) / 368640, ze[4] = 0, ze[5] = 0, ze[6] = 0, Ii[3] = hn(ze, a), u = hn(Ii, 1 / e), C = -R(-(s = u * u) / 2), s === 0 ? 0.5 : (1 + u * c((1 + C) / s)) / 2;
    }, pa = Tn / 4, jo = function(e, n) {
      return function(r) {
        var a;
        return (a = 1 - r) == 0 ? [-pa, -pa] : r === 0 ? [-pa, -pa] : [M(r) + n * M(a) + e, 1 / r - n / a];
      };
    }, br = function(e) {
      return e === 0 || i(e) ? e : e < 0 ? -1 : 1;
    }, Ko = function(e, n, r, a, s, u) {
      var p, k, b, C, O, B, A, W, z, K;
      z = 0, p = 0, O = n, C = ir(1, 1 - s), A = Tn, k = Tn, b = Tn, B = u;
      do {
        if (p = z, b = k, k = A, z = (W = e(O))[0], K = W[1], B -= 1, z === 0)
          break;
        if (K === 0 ? (p === 0 && (p = e(n = O === r ? a : r), A = n - O), A = br(p) * br(z) < 0 ? A < 0 ? (O - r) / 2 : (O - a) / 2 : A < 0 ? (O - a) / 2 : (O - r) / 2) : A = z / K, J(2 * A) > J(b) && (A = A > 0 ? (O - r) / 2 : (O - a) / 2), n = O, (O -= A) <= r) {
          if ((O = n - (A = 0.5 * (n - r))) === r || O === a)
            break;
        } else if (O >= a && ((O = n - (A = 0.5 * (n - a))) === r || O === a))
          break;
        A > 0 ? a = n : r = n;
      } while (B && J(O * C) < J(A));
      return O;
    }, $m = function(e) {
      return e === 0 ? -1 : e * (5 * e - 5) - 1;
    }, Zm = function(e) {
      return e === 0 ? 1 : 1 + e * (21 + e * (46 * e - 69));
    }, Jm = function(e) {
      return e === 0 ? 1 : 1 + e * (21 + e * (46 * e - 69));
    }, Xm = function(e) {
      return e === 0 ? 7 : 7 + e * (e * (33 + e * (31 * e - 62)) - 2);
    }, Ym = function(e) {
      return e === 0 ? 25 : 25 + e * (e * (e * (88 + e * (46 * e - 115)) - 17) - 52);
    }, _m = function(e) {
      return e === 0 ? 7 : 7 + e * (12 + e * (52 * e - 78));
    }, eh = function(e) {
      return e === 0 ? -7 : e * (2 + e * (183 + e * (185 * e - 370))) - 7;
    }, nh = function(e) {
      return e === 0 ? -533 : e * (776 + e * (e * (10240 + e * (5410 * e - 13525)) - 1835)) - 533;
    }, rh = function(e) {
      return e === 0 ? -1579 : e * (3747 + e * (e * (e * (45588 + e * (15071 * e - 45213)) - 15821) - 3372)) - 1579;
    }, ih = function(e) {
      return e === 0 ? 449 : 449 + e * (e * (e * (6686 + e * (3704 * e - 9260)) - 769) - 1259);
    }, ah = function(e) {
      return e === 0 ? 63149 : 63149 + e * (e * (140052 + e * (e * (2239932 + e * (750479 * e - 2251437)) - 727469)) - 151557);
    }, th = function(e) {
      return e === 0 ? 29233 : 29233 + e * (e * (105222 + e * (146879 + e * (e * (3195183 + e * (729754 * e - 2554139)) - 1602610))) - 78755);
    }, oh = function(e) {
      return e === 0 ? 1 : 1 + e * (13 * e - 13);
    }, Te = [0, 0, 0, 0, 0, 0], Bi = [0, 0, 0, 0], sh = function(e, n, r) {
      var a, s, u, p, k, b, C, O, B, A, W, z, K, $, ae, Q, fe, le, se, te;
      return k = $e(2 * e) / -c(n / 2), le = ar(r), fe = Kr(r), Bi[0] = k, ae = le * le, Q = fe * fe, B = (z = (K = le * fe) * K) * (W = z * K), O = W * W, C = (A = z * z) * W, Te[0] = (2 * ae - 1) / (3 * K), Te[1] = -$m(ae) / (36 * z), Te[2] = Jm(ae) / (1620 * W), Te[3] = Xm(ae) / (6480 * A), Te[4] = Ym(ae) / (90720 * B), Te[5] = 0, Bi[1] = hn(Te, k), Te[0] = -_m(ae) / (405 * W), Te[1] = eh(ae) / (2592 * A), Te[2] = -nh(ae) / (204120 * B), Te[3] = -rh(ae) / (2099520 * O), Te[4] = 0, Te[5] = 0, Bi[2] = hn(Te, k), Te[0] = ih(ae) / (102060 * B), Te[1] = -ah(ae) / (20995200 * O), Te[2] = th(ae) / (36741600 * C), Te[3] = 0, Te[4] = 0, Te[5] = 0, Bi[3] = hn(Te, k), u = fe / le, u *= u, $ = -(b = hn(Bi, 1 / n)) * b / (2 * ae) + M(ae) + Q * M(Q) / ae, J(b) < 0.7 ? (Te[0] = ae, Te[1] = K, Te[2] = (1 - 2 * ae) / 3, Te[3] = oh(ae) / (36 * K), Te[4] = Zm(ae) / (270 * z), Te[5] = 0, te = hn(Te, b)) : (se = R($), Te[0] = se, Te[1] = u, Te[2] = 0, Te[3] = 3 * u * (3 * u + 1) / 6, Te[4] = 4 * u * (4 * u + 1) * (4 * u + 2) / 24, Te[5] = 5 * u * (5 * u + 1) * (5 * u + 2) * (5 * u + 3) / 120, ((te = hn(Te, se)) - ae) * b < 0 && (te = 1 - te)), b < 0 ? (s = 0, a = ae) : (s = ae, a = 1), (te < s || te > a) && (te = (s + a) / 2), p = jo(-$, u), te = Ko(p, te, s, a, 32, 100);
    }, Ri = 1e3, Li = 60 * Ri, qi = 60 * Li, Fi = 24 * qi, uh = 365.25 * Fi;
    function ma(e, n, r) {
      if (!(e < n))
        return e < 1.5 * n ? Math.floor(e / n) + " " + r : Math.ceil(e / n) + " " + r + "s";
    }
    var E0, Ie = {};
    function P0(e) {
      function n() {
        if (n.enabled) {
          var r = n, a = +/* @__PURE__ */ new Date(), s = a - (E0 || a);
          r.diff = s, r.prev = E0, r.curr = a, E0 = a;
          for (var u = new Array(arguments.length), p = 0; p < u.length; p++)
            u[p] = arguments[p];
          u[0] = Ie.coerce(u[0]), typeof u[0] != "string" && u.unshift("%O");
          var k = 0;
          u[0] = u[0].replace(/%([a-zA-Z%])/g, function(b, C) {
            if (b === "%%")
              return b;
            k++;
            var O = Ie.formatters[C];
            if (typeof O == "function") {
              var B = u[k];
              b = O.call(r, B), u.splice(k, 1), k--;
            }
            return b;
          }), Ie.formatArgs.call(r, u), (n.log || Ie.log || console.log.bind(console)).apply(r, u);
        }
      }
      return n.namespace = e, n.enabled = Ie.enabled(e), n.useColors = Ie.useColors(), n.color = function(r) {
        var a, s = 0;
        for (a in r)
          s = (s << 5) - s + r.charCodeAt(a), s |= 0;
        return Ie.colors[Math.abs(s) % Ie.colors.length];
      }(e), typeof Ie.init == "function" && Ie.init(n), n;
    }
    (Ie = Ie = P0.debug = P0.default = P0).coerce = function(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }, Ie.disable = function() {
      Ie.enable("");
    }, Ie.enable = function(e) {
      Ie.save(e), Ie.names = [], Ie.skips = [];
      for (var n = (typeof e == "string" ? e : "").split(/[\s,]+/), r = n.length, a = 0; a < r; a++)
        n[a] && ((e = n[a].replace(/\*/g, ".*?"))[0] === "-" ? Ie.skips.push(new RegExp("^" + e.substr(1) + "$")) : Ie.names.push(new RegExp("^" + e + "$")));
    }, Ie.enabled = function(e) {
      var n, r;
      for (n = 0, r = Ie.skips.length; n < r; n++)
        if (Ie.skips[n].test(e))
          return !1;
      for (n = 0, r = Ie.names.length; n < r; n++)
        if (Ie.names[n].test(e))
          return !0;
      return !1;
    }, Ie.humanize = function(e, n) {
      n = n || {};
      var r, a = typeof e;
      if (a === "string" && e.length > 0)
        return function(s) {
          if (!((s = String(s)).length > 100)) {
            var u = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(s);
            if (u) {
              var p = parseFloat(u[1]);
              switch ((u[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return p * uh;
                case "days":
                case "day":
                case "d":
                  return p * Fi;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return p * qi;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return p * Li;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return p * Ri;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return p;
                default:
                  return;
              }
            }
          }
        }(e);
      if (a === "number" && isNaN(e) === !1)
        return n.long ? ma(r = e, Fi, "day") || ma(r, qi, "hour") || ma(r, Li, "minute") || ma(r, Ri, "second") || r + " ms" : function(s) {
          return s >= Fi ? Math.round(s / Fi) + "d" : s >= qi ? Math.round(s / qi) + "h" : s >= Li ? Math.round(s / Li) + "m" : s >= Ri ? Math.round(s / Ri) + "s" : s + "ms";
        }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    }, Ie.names = [], Ie.skips = [], Ie.formatters = {};
    var Qo, wr, xr, Xe = Qo = {};
    function V0() {
      throw new Error("setTimeout has not been defined");
    }
    function C0() {
      throw new Error("clearTimeout has not been defined");
    }
    function $o(e) {
      if (wr === setTimeout)
        return setTimeout(e, 0);
      if ((wr === V0 || !wr) && setTimeout)
        return wr = setTimeout, setTimeout(e, 0);
      try {
        return wr(e, 0);
      } catch {
        try {
          return wr.call(null, e, 0);
        } catch {
          return wr.call(this, e, 0);
        }
      }
    }
    (function() {
      try {
        wr = typeof setTimeout == "function" ? setTimeout : V0;
      } catch {
        wr = V0;
      }
      try {
        xr = typeof clearTimeout == "function" ? clearTimeout : C0;
      } catch {
        xr = C0;
      }
    })();
    var Qr, Sr = [], ni = !1, ha = -1;
    function fh() {
      ni && Qr && (ni = !1, Qr.length ? Sr = Qr.concat(Sr) : ha = -1, Sr.length && Zo());
    }
    function Zo() {
      if (!ni) {
        var e = $o(fh);
        ni = !0;
        for (var n = Sr.length; n; ) {
          for (Qr = Sr, Sr = []; ++ha < n; )
            Qr && Qr[ha].run();
          ha = -1, n = Sr.length;
        }
        Qr = null, ni = !1, function(r) {
          if (xr === clearTimeout)
            return clearTimeout(r);
          if ((xr === C0 || !xr) && clearTimeout)
            return xr = clearTimeout, clearTimeout(r);
          try {
            xr(r);
          } catch {
            try {
              return xr.call(null, r);
            } catch {
              return xr.call(this, r);
            }
          }
        }(e);
      }
    }
    function Jo(e, n) {
      this.fun = e, this.array = n;
    }
    function Mr() {
    }
    Xe.nextTick = function(e) {
      var n = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
      Sr.push(new Jo(e, n)), Sr.length !== 1 || ni || $o(Zo);
    }, Jo.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, Xe.title = "browser", Xe.browser = !0, Xe.env = {}, Xe.argv = [], Xe.version = "", Xe.versions = {}, Xe.on = Mr, Xe.addListener = Mr, Xe.once = Mr, Xe.off = Mr, Xe.removeListener = Mr, Xe.removeAllListeners = Mr, Xe.emit = Mr, Xe.prependListener = Mr, Xe.prependOnceListener = Mr, Xe.listeners = function(e) {
      return [];
    }, Xe.binding = function(e) {
      throw new Error("process.binding is not supported");
    }, Xe.cwd = function() {
      return "/";
    }, Xe.chdir = function(e) {
      throw new Error("process.chdir is not supported");
    }, Xe.umask = function() {
      return 0;
    };
    var En = {};
    (function(e) {
      (function() {
        function n() {
          var r;
          try {
            r = En.storage.debug;
          } catch {
          }
          return !r && e !== void 0 && "env" in e && (r = e.env.DEBUG), r;
        }
        (En = En = Ie).log = function() {
          return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }, En.formatArgs = function(r) {
          var a = this.useColors;
          if (r[0] = (a ? "%c" : "") + this.namespace + (a ? " %c" : " ") + r[0] + (a ? "%c " : " ") + "+" + En.humanize(this.diff), !!a) {
            var s = "color: " + this.color;
            r.splice(1, 0, s, "color: inherit");
            var u = 0, p = 0;
            r[0].replace(/%[a-zA-Z%]/g, function(k) {
              k !== "%%" && k === "%c" && (p = ++u);
            }), r.splice(p, 0, s);
          }
        }, En.save = function(r) {
          try {
            r == null ? En.storage.removeItem("debug") : En.storage.debug = r;
          } catch {
          }
        }, En.load = n, En.useColors = function() {
          return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }, En.storage = typeof chrome < "u" && chrome.storage !== void 0 ? chrome.storage.local : function() {
          try {
            return window.localStorage;
          } catch {
          }
        }(), En.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], En.formatters.j = function(r) {
          try {
            return JSON.stringify(r);
          } catch (a) {
            return "[UnexpectedJSONParseError]: " + a.message;
          }
        }, En.enable(n());
      }).call(this);
    }).call(this, Qo);
    var da = 34028234663852886e22, Xo = En("gammaincinv:higher_newton"), ch = function(e, n, r, a, s, u, p, k) {
      var b, C, O, B, A, W, z, K, $;
      $ = e, W = 1, z = 1, B = n * n, C = e;
      do {
        if (A = ($ = e) * $, r === 0) {
          if ((b = (1 - n) * M($) + $ + u) > M(da))
            return Xo("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."), C;
          K = R(b);
        } else
          K = -p * $;
        K = k ? -K * (fr($, n, !0, !1) - a) : K * (fr($, n, !0, !0) - s), a > 1e-120 || z > 1 ? (O = (2 * A - 4 * $ * n + 4 * $ + 2 * B - 3 * n + 1) / A, e = $ + K * (1 + K * (0.5 * ($ - n + 1) / $ + K * (O /= 6)))) : e = $ + K, W = J($ / e - 1), z += 1, ($ = e) < 0 && ($ = C, z = 100);
      } while (W > 2e-14 && z < 35);
      return (W > 2e-14 || z > 99) && Xo("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."), $ || 0;
    }, lh = function(e) {
      return e === 0 ? 0 : 0 + e * (1 + e * (1 + e * (1.5 + e * (2.6666666666666665 + e * (5.208333333333333 + 10.8 * e)))));
    }, vh = function(e) {
      return e === 0 ? 1 : 1 + e * (1 + e * (0.3333333333333333 + e * (0.027777777777777776 + e * (e * (2314814814814815e-19 + 5878894767783657e-20 * e) - 0.003703703703703704))));
    }, ph = 1e-8, mh = 0.08333333333333333, hh = 0.008333333333333333, ri = [1, 0, 0, 0, 0, 0], A0 = function(e) {
      var n, r, a, s, u, p, k, b, C;
      if (C = e * e * 0.5, e === 0 ? u = 0 : e < -1 ? (b = R(-1 - C), u = lh(b)) : e < 1 ? u = vh(b = e) : (u = (b = 11 + C) + (p = M(b)), b = 1 / b, s = (a = (r = (n = p * p) * p) * p) * p, ri[1] = 0.5 * (2 - p), ri[2] = (-9 * p + 6 + 2 * n) / 6, ri[3] = -(3 * r + 36 * p - 22 * n - 12) * mh, ri[4] = (60 + 350 * n - 300 * p - 125 * r + 12 * a) / 60, ri[5] = -(-120 - 274 * a + 900 * p - 1700 * n + 1125 * r + 20 * s) * hh, u += p * b * hn(ri, b)), b = 1, e > -3.5 && e < -0.03 || e > 0.03 && e < 40) {
        b = 1, k = u;
        do
          u = k * (C + M(k)) / (k - 1), b = J(k / u - 1), k = u;
        while (b > ph);
      }
      return u;
    }, dh = [1.9963790515900766, -0.0017971032528832887, 13129285796384672e-21, -2340875228178749e-22, 72291210671127e-22, -3280997607821e-22, 19875070901e-21, -1509214183e-21, 1375340084e-22, -145728923e-22, 17532367e-22, -2351465e-22, 346551e-22, -55471e-22, 9548e-22, -1748e-22, 332e-22, -58e-22], gh = function(e, n) {
      var r, a, s, u, p;
      a = 0, s = 0, r = n + n, p = e;
      do
        u = s, a = r * (s = a) - u + dh[p], p -= 1;
      while (p >= 0);
      return (a - u) / 2;
    }, Nh = function(e) {
      return e === 0 ? 0.025721014990011306 : 0.025721014990011306 + e * (0.08247596616699963 + e * (e * (6099292666946337e-19 + e * (250505279903e-15 * e - 33543297638406e-17)) - 0.0025328157302663564));
    }, yh = function(e) {
      return e === 0 ? 0.08333333333333333 : 0.08333333333333333 + e * (e * (7936507936507937e-19 + -5952380952380953e-19 * e) - 0.002777777777777778);
    }, bh = 0.30865217988013566, wh = function(e) {
      var n;
      return e < nn ? da : e < 1 ? ke(e + 1) - (e + 0.5) * M(e) + e - Ci : e < 2 ? ke(e) - (e - 0.5) * M(e) + e - Ci : e < 3 ? ke(e - 1) - (e - 0.5) * M(e) + e - Ci + M(e - 1) : e < 12 ? gh(17, n = 18 / (e * e) - 1) / (12 * e) : (n = 1 / (e * e), e < 1e3 ? Nh(n) / (bh + n) / e : yh(n) / e);
    }, Yo = function(e) {
      return e >= 3 ? R(wh(e)) : e > 0 ? ve(e) / (R(-e + (e - 0.5) * M(e)) * Ei) : da;
    }, xh = function(e) {
      var n, r;
      return e === 0 ? -0.3333333333438 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (e * (-4293658292782e-17 * e - 0.004923635739372) - 0.05041806657154) - 0.2070740359969) - 0.3333333333438, r = 1 + e * (0.7045554412463 + e * (0.2118190062224 + e * (0.03048648397436 + 0.001605037988091 * e)))) : (n = (e = 1 / e) * (e * (e * (-0.3333333333438 * e - 0.2070740359969) - 0.05041806657154) - 0.004923635739372) - 4293658292782e-17, r = 0.001605037988091 + e * (0.03048648397436 + e * (0.2118190062224 + e * (0.7045554412463 + 1 * e)))), n / r);
    }, Sh = function(e) {
      var n;
      return J(e) < 1 ? xh(e) : (n = A0(e), M(e / (n - 1)) / e);
    }, Mh = function(e) {
      var n, r;
      return e === 0 ? -0.0172847633523 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (e * (-614830384279e-17 * e - 60683488776e-14) - 0.00464910887221) - 0.0159372646475) - 0.0172847633523, r = 1 + e * (0.764050615669 + e * (0.297143406325 + e * (0.0579490176079 + 0.00574558524851 * e)))) : (n = (e = 1 / e) * (e * (e * (-0.0172847633523 * e - 0.0159372646475) - 0.00464910887221) - 60683488776e-14) - 614830384279e-17, r = 0.00574558524851 + e * (0.0579490176079 + e * (0.297143406325 + e * (0.764050615669 + 1 * e)))), n / r);
    }, kh = function(e) {
      var n, r;
      return e === 0 ? -0.0172839517431 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (e * (249634036069e-17 * e - 391032032692e-15) - 0.00357406772616) - 0.0146362417966) - 0.0172839517431, r = 1 + e * (0.690560400696 + e * (0.249962384741 + e * (0.0443843438769 + 0.00424073217211 * e)))) : (n = 249634036069e-17 + (e = 1 / e) * (e * (e * (-0.0172839517431 * e - 0.0146362417966) - 0.00357406772616) - 391032032692e-15), r = 0.00424073217211 + e * (0.0443843438769 + e * (0.249962384741 + e * (0.690560400696 + 1 * e)))), n / r);
    }, Th = function(e) {
      var n, r;
      return e === 0 ? 0.99994466948 : ((e < 0 ? -e : e) <= 1 ? (n = 0.99994466948 + e * (104.649839762 + e * (857.204033806 + e * (731.901559577 + 45.5174411671 * e))), r = 1 + e * (104.526456943 + e * (823.313447808 + e * (3119.93802124 + 3970.03311219 * e)))) : (n = 45.5174411671 + (e = 1 / e) * (731.901559577 + e * (857.204033806 + e * (104.649839762 + 0.99994466948 * e))), r = 3970.03311219 + e * (3119.93802124 + e * (823.313447808 + e * (104.526456943 + 1 * e)))), n / r);
    }, Eh = function(e) {
      var n, r;
      return e < -5 ? (12 - (r = e * e) - (n = M(-e)) * n * 6) / (12 * r * e) : e < -2 ? Mh(e) : e < 2 ? kh(e) : e < 1e3 ? (r = 1 / e, Th(e) / (-12 * e)) : -1 / (12 * e);
    }, Ph = function(e) {
      var n, r;
      return e === 0 ? 0.0495346498136 : ((e < 0 ? -e : e) <= 1 ? (n = 0.0495346498136 + e * (0.0299521337141 + e * (0.00688296911516 + e * (512634846317e-15 + -201411722031e-16 * e))), r = 1 + e * (0.759803615283 + e * (0.261547111595 + e * (0.0464854522477 + 0.00403751193496 * e)))) : (n = (e = 1 / e) * (512634846317e-15 + e * (0.00688296911516 + e * (0.0299521337141 + 0.0495346498136 * e))) - 201411722031e-16, r = 0.00403751193496 + e * (0.0464854522477 + e * (0.261547111595 + e * (0.759803615283 + 1 * e)))), n / r);
    }, Vh = function(e) {
      var n, r;
      return e === 0 ? 0.00452313583942 : ((e < 0 ? -e : e) <= 1 ? (n = 0.00452313583942 + e * (0.00120744920113 + e * (e * (-535770949796e-17 * e - 504476066942e-16) - 789724156582e-16)), r = 1 + e * (0.912203410349 + e * (0.405368773071 + e * (0.0901638932349 + 0.00948935714996 * e)))) : (n = (e = 1 / e) * (e * (e * (0.00120744920113 + 0.00452313583942 * e) - 789724156582e-16) - 504476066942e-16) - 535770949796e-17, r = 0.00948935714996 + e * (0.0901638932349 + e * (0.405368773071 + e * (0.912203410349 + 1 * e)))), n / r);
    }, Ch = function(e) {
      var n, r;
      return e === 0 ? 0.00439937562904 : ((e < 0 ? -e : e) <= 1 ? (n = 0.00439937562904 + e * (487225670639e-15 + e * (e * (529110969589e-17 + 15716677175e-17 * e) - 128470657374e-15)), r = 1 + e * (0.794435257415 + e * (0.333094721709 + e * (0.0703527806143 + 0.00806110846078 * e)))) : (n = 15716677175e-17 + (e = 1 / e) * (529110969589e-17 + e * (e * (487225670639e-15 + 0.00439937562904 * e) - 128470657374e-15)), r = 0.00806110846078 + e * (0.0703527806143 + e * (0.333094721709 + e * (0.794435257415 + 1 * e)))), n / r);
    }, Ah = function(e) {
      var n, r;
      return e === 0 ? -0.0011481191232 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (1.51623048511 + e * (0.0730002451555 * e - 0.218472031183)) - 0.112850923276) - 0.0011481191232, r = 1 + e * (14.2482206905 + e * (69.7360396285 + e * (218.938950816 + 277.067027185 * e)))) : (n = 0.0730002451555 + (e = 1 / e) * (e * (1.51623048511 + e * (-0.0011481191232 * e - 0.112850923276)) - 0.218472031183), r = 277.067027185 + e * (218.938950816 + e * (69.7360396285 + e * (14.2482206905 + 1 * e)))), n / r);
    }, Ih = function(e) {
      var n, r;
      return e === 0 ? -145727889667e-15 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (e * (199.722374056 + -11.4311378756 * e) - 13.308504545) - 0.290806748131) - 145727889667e-15, r = 1 + e * (139.612587808 + e * (2189.01116348 + e * (7115.24019009 + 45574.6081453 * e)))) : (n = (e = 1 / e) * (199.722374056 + e * (e * (-145727889667e-15 * e - 0.290806748131) - 13.308504545)) - 11.4311378756, r = 45574.6081453 + e * (7115.24019009 + e * (2189.01116348 + e * (139.612587808 + 1 * e)))), n / r);
    }, Bh = function(e) {
      var n, r;
      return e < -8 ? (n = e * e, (e * (r = M(-e) / e) * (6 * n * r * r - 12 + n) - 30) / (12 * e * n * n)) : e < -4 ? Ph(e) / (e * e) : e < -2 ? Vh(e) : e < 2 ? Ch(e) : e < 10 ? Ah(n = 1 / e) / (e * e) : e < 100 ? Ih(n = 1 / e) / (e * e) : -M(e) / (12 * e * e * e);
    }, Rh = En("gammaincinv:compute"), Ur = 0.5, I0 = 0.3333333333333333, Lh = 0.25, _o = 0.2, es = 0.16666666666666666, qh = 0.08333333333333333, Fh = 0.041666666666666664, nr = [0, 0, 0, 0, 0], ns = function(e, n, r) {
      var a, s, u, p, k, b, C, O, B, A, W, z, K, $, ae, Q, fe, le, se, te, xe, Fe, he, De, en, Re, ne, Be, Ui, w7, _0, zn, Ye, et, Hn, Pr, Vr, nt, x7, rt;
      if (n < Ur ? (p = !0, k = n, nt = -1) : (p = !1, k = r, nt = 1), Hn = 0, J(e - 1) < 1e-4 && (Pr = 0, se = p ? n < 1e-3 ? n + (Ui = n * n) * Ur + (Re = Ui * n) * I0 + (Be = Re * n) * Lh + (le = Be * n) * _o + le * n * es : -M(1 - n) : -M(r), e === 1 ? (Hn = 2, _0 = se) : (u = ke(e), Hn = 1)), r < 1e-30 && e < Ur && (Pr = 0, se = -M(r * ve(e)) + (e - 1) * M(-M(r * ve(e))), Hn = 1, u = ke(e)), e > 1 && e < 500 && n < 1e-80) {
        for (Pr = 0, b = 1 / e, a = 1 / (e + 1), se = (ke(e + 1) + M(n)) * b, K = se = R(se), et = 0; et < 10; et++)
          se = K * R(se * b) * V(1 - se * a, b);
        Hn = 1, u = ke(e);
      }
      if ((C = 1 / e * (M(n) + ke(e + 1))) < M(_o * (1 + e)) && Hn === 0 && (Vr = R(C), Pr = 0, ne = (w7 = (te = e * e) * e) * e, A = ($ = e + 1) * (W = $ * $), B = W * W, O = (ae = e + 2) * ae, Q = e + 3, nr[0] = 1, nr[1] = 1 / $, nr[2] = Ur * (3 * e + 5) / (W * ae), nr[3] = I0 * (31 + 8 * te + 33 * e) / (A * ae * Q), nr[4] = Fh * (2888 + 1179 * w7 + 125 * ne + 3971 * te + 5661 * e) / (B * O * Q * (e + 4)), se = Vr * hn(nr, Vr), u = ke(e), Hn = 1), e < 10 && Hn === 0 && (z = c(e) / (Yo(e) * Ei), r < Se(0.02, z) && (Pr = 0, en = (De = (zn = 1 - e) * zn) * zn, fe = c(-2 / e * M(r / z)), se = e * A0(fe), Ye = M(se), se > 5 ? (he = (Fe = (xe = Ye * Ye) * Ye) * Ye, Vr = 1 / se, nr[0] = Ye - 1, nr[1] = (3 * zn - 2 * zn * Ye + xe - 2 * Ye + 2) * Ur, nr[2] = (24 * zn * Ye - 11 * De - 24 * zn - 6 * xe + 12 * Ye - 12 - 9 * zn * xe + 6 * De * Ye + 2 * Fe) * es, nr[3] = (-12 * en * Ye + 8.04 * zn * xe - 114 * De * Ye + (72 + 36 * xe) + (3 * he - 72 * Ye + 162) * (zn - 168 * zn * Ye) - (12 * Fe + 25 * en) - (22 * zn * Fe + 36 * De * xe + 120 * De)) * qh, nr[4] = 0, se = se - Ye + zn * Vr * hn(nr, Vr)) : (xe = Ye * Ye, (x7 = Ye - zn * (Vr = 1 / se) * (Ye - 1)) < se && (se -= x7)), u = ke(e), Hn = 1)), J(k - Ur) < 1e-5 && Hn === 0 && (Pr = 0, se = e - I0 + (0.019753086419753086 + 0.007211444248481286 * (b = 1 / e)) * b, u = ke(e), Hn = 1), e < 1 && Hn === 0 && (Pr = 0, se = R(p ? 1 / e * (M(k) + ke(e + 1)) : 1 / e * (M(1 - k) + ke(e + 1))), u = ke(e), Hn = 1), Hn === 0) {
        if (Pr = 1, b = 1 / e, fe = nt * (Vr = $e(2 * k)) / c(e * Ur), !(Vr < da))
          return Rh("Warning: Overflow problems in one or more steps of the computation."), NaN;
        fe += (Sh(fe) + (Eh(fe) + Bh(fe) * b) * b) * b, se = e * A0(fe), rt = fe, s = 1 / (-c(e / yr) * R(-Ur * e * rt * rt) / Yo(e));
      }
      return Hn < 2 && (_0 = ch(se, e, Pr, n, r, u, s, p)), _0;
    }, ii = function(e, n, r) {
      return i(e) || i(n) ? NaN : n < nn ? NaN : e > 1 || e < 0 ? NaN : r === !0 ? e === 0 ? H : e === 1 ? 0 : ns(n, 1 - e, e) : e === 0 ? 0 : e === 1 ? H : ns(n, e, 1 - e);
    }, Oh = 5e-324, Dh = function(e, n, r, a) {
      var s, u, p, k, b, C, O, B, A, W, z, K, $, ae, Q, fe, le, se, te, xe, Fe, he, De, en, Re, ne, Be, Ui;
      return b = r < a ? ii(r, n, !0) : ii(a, n, !1), b /= e, W = ((ne = c(1 + ($ = n / e))) + 2) * (ne - 1) / (3 * ne), W += ((le = (fe = ne * ne) * ne) + 9 * fe + 21 * ne + 5) * (Re = b - $) / (36 * fe * (en = ne + 1)), W -= ((se = fe * fe) - 13 * le + 69 * fe + 167 * ne + 46) * (ae = Re * Re) / (1620 * (O = en * en) * le), W -= (7 * (te = le * fe) + 21 * se + 70 * le + 26 * fe - 93 * ne - 31) * (Q = ae * Re) / (6480 * (B = en * O) * se), z = (28 * se + 131 * le + 402 * fe + 581 * ne + 208) * (ne - 1) / (1620 * en * le), z -= (35 * (xe = le * le) - 154 * te - 623 * se - 1636 * le - 3983 * fe - 3514 * ne - 925) * Re / (12960 * O * se), z -= (2132 * (Fe = se * le) + 7915 * xe + 16821 * te + 35066 * se + 87490 * le + 141183 * fe + 95993 * ne + 21640) * ae / (816480 * te * B), K = -(3592 * Fe + 8375 * xe - 1323 * te - 29198 * se - 89578 * le - 154413 * fe - 116063 * ne - 29632) * (ne - 1) / (816480 * te * O), K -= (442043 * (De = te * se) + 2054169 * (he = se * se) + 3803094 * Fe + 3470754 * xe + 2141568 * te - 2393568 * se - 19904934 * le - 34714674 * fe - 23128299 * ne - 5253353) * Re / (146966400 * xe * B), (C = b + (W -= ae * ae * (75 * xe + 202 * te + 188 * se - 888 * le - 1345 * fe + 118 * ne + 138) / (272160 * (A = O * O) * te)) / e + (z -= (11053 * he + 53308 * Fe + 117010 * xe + 163924 * te + 116188 * se - 258428 * le - 677042 * fe - 481940 * ne - 105497) * Q / (14696640 * A * xe)) / (e * e) + (K -= (te * te * 116932 + 819281 * De + 2378172 * he + 4341330 * Fe + 6806004 * xe + 10622748 * te + 18739500 * se + 30651894 * le + 30869976 * fe + 15431867 * ne + 2919016) * ae / (146966400 * A * Fe)) / (e * e * e)) <= 0 && (C = Oh), Be = C - $ * M(C) + (1 + $) * M(1 + $) - $, s = 1 / (1 + $), Ui = ((p = C < $ ? s : 0) + (k = C < $ ? 1 : s)) / 2, u = jo(Be, $), Ko(u, Ui, p, k, 32, 100);
    }, Uh = function(e, n, r, a, s, u) {
      var p, k, b, C, O, B, A, W, z, K, $, ae, Q, fe, le, se;
      fe = 0, k = !1, B = n, O = ir(1, 1 - s), A = 0, b = z = Ee(1e7 * n, 1e7), C = z, W = u;
      do {
        if (A = fe, C = b, b = z, fe = (Q = e(B))[0], le = Q[1], se = Q[2], W -= 1, fe === 0)
          break;
        if (le === 0 ? (A === 0 && (A = e(n = B === r ? a : r), z = n - B), z = br(A) * br(fe) < 0 ? z < 0 ? (B - r) / 2 : (B - a) / 2 : z < 0 ? (B - a) / 2 : (B - r) / 2) : se === 0 ? z = fe / le : (K = 2 * fe, (z = J(ae = 2 * le - fe * (se / le)) < 1 && J(K) >= J(ae) * Tn ? fe / le : K / ae) * le / fe < 0 && J(z = fe / le) > 2 * J(n) && (z = 2 * (z < 0 ? -1 : 1) * J(n))), (p = J(z / C)) > 0.8 && p < 2 && (J(z = z > 0 ? (B - r) / 2 : (B - a) / 2) > B && (z = br(z) * B), C = 3 * z), n = B, (B -= z) < r) {
          if ($ = J(r) < 1 && J(B) > 1 && Tn / J(B) < J(r) ? 1e3 : B / r, J($) < 1 && ($ = 1 / $), !k && $ > 0 && $ < 3)
            B = n - (z = 0.99 * (n - r)), k = !0;
          else if ((B = n - (z = (n - r) / 2)) === r || B === a)
            break;
        } else if (B > a) {
          if ($ = J(a) < 1 && J(B) > 1 && Tn / J(B) < J(a) ? 1e3 : B / a, J($) < 1 && ($ = 1 / $), !k && $ > 0 && $ < 3)
            B = n - (z = 0.99 * (n - a)), k = !0;
          else if ((B = n - (z = (n - a) / 2)) === r || B === a)
            break;
        }
        z > 0 ? a = n : r = n;
      } while (W && J(B * O) < J(z));
      return B;
    }, Hh = Ro.assign, Wh = function(e, n, r, a) {
      return function(s) {
        var u, p, k, b, C;
        return C = 1 - s, Hh(s, e, n, !0, a, u = [0, 0], 1, 0), b = u[0] - r, p = u[1], a && (p = -p), C === 0 && (C = 64 * er), s === 0 && (s = 64 * er), J(k = p * (-C * e + (n - 2) * s + 1)) < C * s * Tn && (k /= C * s), a && (k = -k), p === 0 && (p = (a ? -1 : 1) * er * 64), [b, p, k];
      };
    }, Gh = 32, zh = 1e3, $r = [0, 0, 0, 0, 0], ai = function(e, n, r, a) {
      var s, u, p, k, b, C, O, B, A, W, z, K, $, ae, Q, fe, le, se, te, xe, Fe, he, De, en, Re, ne, Be;
      if (u = !1, a === 0)
        return [1, 0];
      if (r === 0)
        return [0, 1];
      if (e === 1) {
        if (n === 1)
          return [r, 1 - r];
        K = n, n = e, e = K, K = a, a = r, r = K, u = !0;
      }
      if (ne = 0, k = 0, C = 1, e === 0.5) {
        if (n === 0.5)
          return ne = ar(r * gr), ne *= ne, Be = ar(a * gr), [ne, Be *= Be];
        n > 0.5 && (K = n, n = e, e = K, K = a, a = r, r = K, u = !u);
      }
      if (n === 0.5 && e >= 0.5 && r !== 1)
        ne = Km(e, r, xe = {}), Be = xe.value;
      else {
        if (n === 1)
          return r < a ? e > 1 ? (ne = V(r, 1 / e), Be = -Le(M(r) / e)) : Be = 1 - (ne = V(r, 1 / e)) : (ne = R(oe(-a) / e), Be = -Le(oe(-a) / e)), u && (K = Be, Be = ne, ne = K), [ne, Be];
        if (e + n > 5)
          r > 0.5 && (K = n, n = e, e = K, K = a, a = r, r = K, u = !u), A = Se(e, n), B = Ee(e, n), c(A) > B - A && A > 5 ? Be = 1 - (ne = Qm(e, n, r)) : (b = x(c(e / (en = e + n))), (p = A / en) >= 0.2 && p <= 0.8 && en >= 10 ? Be = 1 - (ne = (z = V(r, 1 / e)) < 25e-4 && e + n < 200 ? z * V(e * Me(e, n), 1 / e) : sh(r, en, b)) : (e < n && (K = n, n = e, e = K, K = a, a = r, r = K, u = !u), W = 0, n < 2 && (W = Me(e, n)), W === 0 ? Be = 1 : ne = 1 - (Be = V(n * a * W, 1 / n))), Be > 1e-5 && (Be = 1 - (ne = Dh(e, n, r, a))));
        else if (e < 1 && n < 1) {
          if (fe = Qe(te = (1 - e) / (2 - e - n), e, n) - r, J(fe) / r < 3 * kn)
            return u ? [1 - te, te] : [te, 1 - te];
          fe < 0 && (K = n, n = e, e = K, K = a, a = r, r = K, u = !u, te = 1 - te), Be = 1 / (1 + (se = V(e * r * Me(e, n), 1 / e))), (ne = se / (1 + se)) > te && (ne = te), C = te;
        } else
          e > 1 && n > 1 ? ($ = (n - 1) / (e + n - 2), Qe(te = (e - 1) / (e + n - 2), e, n) - r < 0 && (K = n, n = e, e = K, K = a, a = r, r = K, K = $, $ = te, te = K, u = !u), le = M(r * e * Me(e, n)) / e, Be = (ne = R(le)) < 0.9 ? 1 - ne : -Le(le), n < e && ne < 0.2 && (ae = e - 1, Q = n - 1, he = e * (Fe = e * e), De = n * n, $r[0] = 0, $r[1] = 1, $r[2] = Q / ae, ae *= ae, $r[3] = Q * (3 * e * n + 5 * n + Fe - e - 4) / (2 * (e + 2) * ae), ae *= e + 1, $r[4] = Q * (33 * e * De + 31 * De + 8 * Fe * De - 30 * e * n - 47 * n + 11 * Fe * n + 6 * he * n + 18 + 4 * e - he + Fe * Fe - 10 * Fe), $r[4] /= 3 * (e + 3) * (e + 2) * ae, ne = hn($r, ne)), ne > te && (ne = te), C = te) : (n < e && (K = n, n = e, e = K, K = a, a = r, r = K, u = !u), V(r, 1 / e) < 0.5 ? ((ne = V(r * e * Me(e, n), 1 / e)) === 0 && (ne = er), Be = 1 - ne) : ((Be = V(1 - V(r, n * Me(e, n)), 1 / n)) === 0 && (Be = er), ne = 1 - Be));
      }
      return ne > 0.5 && (K = n, n = e, e = K, K = a, a = r, r = K, K = Be, Be = ne, ne = K, u = !u, Re = 1 - k, k = 1 - C, C = Re), k === 0 && (u ? ne < (k = kn) && (ne = k) : k = er, ne < k && (ne = k)), s = Gh, ne < 1e-50 && (e < 1 || n < 1) && (s *= 3, s /= 2), O = Wh(e, n, r < a ? r : a, r >= a), (ne = Uh(O, ne, k, C, s, zh)) === k && (ne = 0), u ? [1 - ne, ne] : [ne, 1 - ne];
    }, Oi = function(e, n, r, a) {
      return i(e) || i(n) || i(r) ? NaN : n <= 0 || r <= 0 ? NaN : e < 0 || e > 1 ? NaN : a ? ai(n, r, 1 - e, e)[0] : ai(n, r, e, 1 - e)[0];
    }, rs = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : Oi(0.5, e, n);
    }, is = function(e, n) {
      return e <= 1 || n <= 1 ? NaN : (e - 1) / (e + n - 2);
    }, as = function(e, n) {
      var r, a;
      return e <= 0 || n <= 0 ? NaN : (r = 2 * (n - e) * c((a = e + n) + 1), r /= (a + 2) * c(e * n));
    }, ts = function(e, n) {
      var r, a;
      return e <= 0 || n <= 0 ? NaN : (a = c(e * n / ((r = e + n) + 1)), a /= r);
    }, os = function(e, n) {
      var r, a;
      return e <= 0 || n <= 0 ? NaN : (a = e * n, a /= (r = e + n) * r * (r + 1));
    }, ss = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? j : e >= 1 ? 0 : M(Qe(e, n, r));
    };
    o(ss, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 ? j : r >= 1 ? 0 : M(Qe(r, e, n));
      };
    });
    var ga = ss, us = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < 0 || e > 1 ? j : e === 0 ? n < 1 ? H : n > 1 ? j : M(r) : e === 1 ? r < 1 ? H : r > 1 ? j : M(n) : (a = (n - 1) * M(e), a += (r - 1) * oe(-e), a -= lr(n, r));
    };
    o(us, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = lr(e, n), function(a) {
        var s;
        return i(a) ? NaN : a < 0 || a > 1 ? j : a === 0 ? e < 1 ? H : e > 1 ? j : M(n) : a === 1 ? n < 1 ? H : n > 1 ? j : M(e) : (s = -r, s += (e - 1) * M(a) + (n - 1) * oe(-a));
      });
    });
    var fs = us, cs = function(e, n, r) {
      var a, s, u, p, k;
      s = Me(n, r), u = 1, p = 1, k = 1;
      do
        p *= e / k, u += a = Me(n + k, r) / s * p, k += 1;
      while (J(a / u) >= kn);
      return u;
    }, ls = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : cs(e, n, r);
    };
    o(ls, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : cs(r, e, n);
      };
    });
    var vs = ls, ps = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < 0 || e > 1 ? 0 : e === 0 ? n < 1 ? H : n > 1 ? 0 : r : e === 1 ? r < 1 ? H : r > 1 ? 0 : n : (a = (n - 1) * M(e), a += (r - 1) * oe(-e), a -= lr(n, r), R(a));
    };
    o(ps, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = lr(e, n), function(a) {
        var s;
        return i(a) ? NaN : a < 0 || a > 1 ? 0 : a === 0 ? e < 1 ? H : e > 1 ? 0 : n : a === 1 ? n < 1 ? H : n > 1 ? 0 : e : (s = -r, s += (e - 1) * M(a), s += (n - 1) * oe(-a), R(s));
      });
    });
    var ms = ps, hs = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 || e < 0 || e > 1 ? NaN : Oi(e, n, r);
    };
    o(hs, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : Oi(r, e, n);
      };
    });
    var ds = hs, Na = Ue.isPrimitive;
    function rn() {
      var e, n;
      if (!(this instanceof rn))
        return arguments.length === 0 ? new rn() : new rn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !Na(e))
          throw new TypeError("invalid argument. First shape parameter `alpha` must be a positive number. Value: `" + e + "`");
        if (!Na(n))
          throw new TypeError("invalid argument. Second shape parameter `beta` must be a positive number. Value: `" + n + "`");
      } else
        e = 1, n = 1;
      return l(this, "alpha", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Na(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "beta", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Na(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(rn.prototype, "entropy", function() {
      return Uo(this.alpha, this.beta);
    }), m(rn.prototype, "kurtosis", function() {
      return Ho(this.alpha, this.beta);
    }), m(rn.prototype, "mean", function() {
      return Wo(this.alpha, this.beta);
    }), m(rn.prototype, "median", function() {
      return rs(this.alpha, this.beta);
    }), m(rn.prototype, "mode", function() {
      return is(this.alpha, this.beta);
    }), m(rn.prototype, "skewness", function() {
      return as(this.alpha, this.beta);
    }), m(rn.prototype, "stdev", function() {
      return ts(this.alpha, this.beta);
    }), m(rn.prototype, "variance", function() {
      return os(this.alpha, this.beta);
    }), o(rn.prototype, "cdf", function(e) {
      return la(e, this.alpha, this.beta);
    }), o(rn.prototype, "logcdf", function(e) {
      return ga(e, this.alpha, this.beta);
    }), o(rn.prototype, "logpdf", function(e) {
      return fs(e, this.alpha, this.beta);
    }), o(rn.prototype, "mgf", function(e) {
      return vs(e, this.alpha, this.beta);
    }), o(rn.prototype, "pdf", function(e) {
      return ms(e, this.alpha, this.beta);
    }), o(rn.prototype, "quantile", function(e) {
      return ds(e, this.alpha, this.beta);
    });
    var jh = rn, gs = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? 0 : e === H ? 1 : la(e / (1 + e), n, r);
    }, Kh = la.factory;
    o(gs, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = Kh(e, n), function(a) {
        return i(a) ? NaN : a <= 0 ? 0 : a === H ? 1 : r(a / (1 + a));
      });
    });
    var Ns = gs, ys = function(e, n) {
      var r, a, s;
      return i(e) || e <= 0 || i(n) || n <= 4 ? NaN : (s = e * (r = e + n - 1) * (5 * n - 11) + (a = n - 1) * a * (a - 1), s *= 6, s /= e * r * (n - 3) * (n - 4));
    }, bs = function(e, n) {
      return e <= 0 || n <= 1 ? NaN : e / (n - 1);
    }, ws = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : e < 1 ? 0 : (e - 1) / (n + 1);
    }, xs = function(e, n) {
      var r;
      return i(e) || e <= 0 || i(n) || n <= 3 ? NaN : (r = 2 * (2 * e + n - 1) / (n - 3), r *= c((n - 2) / (e * (e + n - 1))));
    }, Ss = function(e, n) {
      var r;
      return i(e) || e <= 0 || i(n) || n <= 2 ? NaN : c(e * (e + (r = n - 1)) / ((r - 1) * r * r));
    }, Ms = function(e, n) {
      var r;
      return i(e) || e <= 0 || i(n) || n <= 2 ? NaN : e * (e + (r = n - 1)) / ((r - 1) * r * r);
    }, ks = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? j : e === H ? 0 : ga(e / (1 + e), n, r);
    }, Qh = ga.factory;
    o(ks, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = Qh(e, n), function(a) {
        return i(a) ? NaN : a <= 0 ? j : a === H ? 0 : r(a / (1 + a));
      });
    });
    var Ts = ks, Es = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? j : (a = (n - 1) * M(e), a -= (n + r) * oe(e), a -= lr(n, r));
    };
    o(Es, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = lr(e, n), function(a) {
        var s;
        return i(a) ? NaN : a <= 0 ? j : (s = (e - 1) * M(a), s -= (e + n) * oe(a), s -= r);
      });
    });
    var ya = Es, Ps = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : R(ya(e, n, r));
    }, $h = ya.factory;
    o(Ps, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = $h(e, n), function(a) {
        return i(a) ? NaN : R(r(a));
      });
    });
    var Vs = Ps, Cs = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 || e < 0 || e > 1 ? NaN : (a = Oi(e, n, r)) / (1 - a);
    };
    o(Cs, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) || r < 0 || r > 1 ? NaN : (a = Oi(r, e, n)) / (1 - a);
      };
    });
    var As = Cs, ba = Ue.isPrimitive;
    function Ln() {
      var e, n;
      if (!(this instanceof Ln))
        return arguments.length === 0 ? new Ln() : new Ln(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !ba(e))
          throw new TypeError("invalid argument. First shape parameter `alpha` must be a positive number. Value: `" + e + "`");
        if (!ba(n))
          throw new TypeError("invalid argument. Second shape parameter `beta` must be a positive number. Value: `" + n + "`");
      } else
        e = 1, n = 1;
      return l(this, "alpha", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!ba(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "beta", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!ba(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Ln.prototype, "kurtosis", function() {
      return ys(this.alpha, this.beta);
    }), m(Ln.prototype, "mean", function() {
      return bs(this.alpha, this.beta);
    }), m(Ln.prototype, "mode", function() {
      return ws(this.alpha, this.beta);
    }), m(Ln.prototype, "skewness", function() {
      return xs(this.alpha, this.beta);
    }), m(Ln.prototype, "stdev", function() {
      return Ss(this.alpha, this.beta);
    }), m(Ln.prototype, "variance", function() {
      return Ms(this.alpha, this.beta);
    }), o(Ln.prototype, "cdf", function(e) {
      return Ns(e, this.alpha, this.beta);
    }), o(Ln.prototype, "logcdf", function(e) {
      return Ts(e, this.alpha, this.beta);
    }), o(Ln.prototype, "logpdf", function(e) {
      return ya(e, this.alpha, this.beta);
    }), o(Ln.prototype, "pdf", function(e) {
      return Vs(e, this.alpha, this.beta);
    }), o(Ln.prototype, "quantile", function(e) {
      return As(e, this.alpha, this.beta);
    });
    var Zh = Ln, ee = function(e) {
      return ye(e) === e && e >= 0;
    }, Is = function(e, n, r) {
      return i(e) || i(n) || i(r) || r < 0 || r > 1 || !ee(n) || n === H ? NaN : e < 0 ? 0 : e >= n ? 1 : (e = ye(e + 1e-7), Qe(r, e + 1, n - e, !0, !0));
    };
    o(Is, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? N(NaN) : function(r) {
        return i(r) ? NaN : r < 0 ? 0 : r >= e ? 1 : (r = ye(r + 1e-7), Qe(n, r + 1, e - r, !0, !0));
      };
    });
    var ti = Is, Bs = function(e) {
      return e < H && e > j && me(e);
    }, Jh = Ge.isPrimitive, Rs = function(e) {
      return Jh(e) && Bs(e);
    }, Xh = Ge.isObject, Ls = function(e) {
      return Xh(e) && Bs(e.valueOf());
    }, B0 = function(e) {
      return Rs(e) || Ls(e);
    };
    o(B0, "isPrimitive", Rs), o(B0, "isObject", Ls);
    var Di = B0, Yh = Di.isPrimitive, qs = function(e) {
      return Yh(e) && e > 0;
    }, _h = Di.isObject, Fs = function(e) {
      return _h(e) && e.valueOf() > 0;
    }, R0 = function(e) {
      return qs(e) || Fs(e);
    };
    o(R0, "isPrimitive", qs), o(R0, "isObject", Fs);
    var Os = R0, Ds = function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? NaN : (1 - 6 * (r = n * (1 - n))) / (e * r);
    }, L0 = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? NaN : e * n;
    }, Us = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? NaN : jn(L0(e, n));
    }, Hs = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? NaN : ye((e + 1) * n);
    }, Ws = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? NaN : (1 - 2 * n) / c(e * n * (1 - n));
    }, Gs = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? NaN : c(e * n * (1 - n));
    }, zs = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? NaN : e * n * (1 - n);
    }, wa = function e(n, r) {
      return i(n) || i(r) ? NaN : me(n) && me(r) ? n < 0 ? e(-n + r - 1, r) : r < 0 ? j : r === 0 ? 0 : r === 1 ? M(J(n)) : n < r ? j : n - r < 2 ? e(n, n - r) : -M(n + 1) - lr(n - r + 1, r + 1) : NaN;
    }, js = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 || r > 1 || !ee(n) || n === H ? NaN : ee(e) ? e > n ? j : r === 0 ? e === 0 ? 0 : j : r === 1 ? e === n ? 0 : j : (a = wa(n, e), a += e * M(r) + (n - e) * oe(-r)) : j;
    }, Ks = function(e, n) {
      return i(e) || i(n) ? NaN : e === n ? 0 : j;
    };
    o(Ks, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) ? NaN : n === e ? 0 : j;
      };
    });
    var xa = Ks, Qs = xa.factory;
    o(js, "factory", function(e, n) {
      return i(e) || i(n) || !ee(e) || e === H || n < 0 || n > 1 ? N(NaN) : n === 0 || e === 0 ? Qs(0) : n === 1 ? Qs(e) : function(r) {
        var a;
        return i(r) ? NaN : ee(r) ? r > e ? j : (a = wa(e, r), a += r * M(n) + (e - r) * oe(-n)) : j;
      };
    });
    var $s = js, Zs = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 || r > 1 || !ee(n) || n === H ? NaN : (a = 1 - r + r * R(e), V(a, n));
    };
    o(Zs, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : (a = 1 - n + n * R(r), V(a, e));
      };
    });
    var Js = Zs, Xs = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 || r > 1 || !ee(n) || n === H ? NaN : ee(e) ? e > n ? 0 : r === 0 ? e === 0 ? 1 : 0 : r === 1 ? e === n ? 1 : 0 : (a = wa(n, e), a += e * M(r) + (n - e) * oe(-r), R(a)) : 0;
    }, Ys = function(e, n) {
      return i(e) || i(n) ? NaN : e === n ? 1 : 0;
    };
    o(Ys, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) ? NaN : n === e ? 1 : 0;
      };
    });
    var Sa = Ys, _s = Sa.factory;
    o(Xs, "factory", function(e, n) {
      return i(e) || i(n) || !ee(e) || e === H || n < 0 || n > 1 ? N(NaN) : n === 0 || e === 0 ? _s(0) : n === 1 ? _s(e) : function(r) {
        var a;
        return i(r) ? NaN : ee(r) ? r > e ? 0 : (a = wa(e, r), a += r * M(n) + (e - r) * oe(-n), R(a)) : 0;
      };
    });
    var eu = Xs, nu = function(e, n, r, a) {
      for (; e !== 0 && ti(e - 1, r, a) >= n; )
        e -= 1;
      return e;
    }, ru = function(e, n, r, a) {
      for (e += 1; ti(e, r, a) < n; )
        e += 1;
      return e;
    }, iu = function(e, n, r) {
      var a, s, u, p, k;
      return i(e) || i(n) || i(r) || e < 0 || e > 1 || r < 0 || r > 1 || !ee(n) || n === H ? NaN : e === 1 || r === 1 ? n : e === 0 || r === 0 || n === 0 ? 0 : (p = n * r, a = 1 / (u = c(n * r * (1 - r))), k = e < 0.5 ? -$e(2 * e) * Pe : $e(2 * (1 - e)) * Pe, s = jn(p + u * (k + a * (k * k - 1) / 6)), ti(s, n, r) >= e ? nu(s, e, n, r) : ru(s, e, n, r));
    }, au = function(e, n) {
      return i(e) || e < 0 || e > 1 ? NaN : n;
    };
    o(au, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) || n < 0 || n > 1 ? NaN : e;
      };
    });
    var kr = au, tu = kr.factory;
    o(iu, "factory", function(e, n) {
      var r, a, s;
      return i(e) || i(n) || !ee(e) || e === H || n < 0 || n > 1 ? N(NaN) : n === 0 || e === 0 ? tu(0) : n === 1 ? tu(e) : (s = e * n, a = c(e * n * (1 - n)), r = 1 / a, function(u) {
        var p, k;
        return i(u) || u < 0 || u > 1 ? NaN : u === 0 ? 0 : u === 1 ? e : (k = u < 0.5 ? -$e(2 * u) * Pe : $e(2 * (1 - u)) * Pe, p = jn(s + a * (k + r * (k * k - 1) / 6)), ti(p, e, n) >= u ? nu(p, u, e, n) : ru(p, u, e, n));
      });
    });
    var ou = iu, su = Os.isPrimitive, uu = ta.isPrimitive;
    function Pn() {
      var e, n;
      if (!(this instanceof Pn))
        return arguments.length === 0 ? new Pn() : new Pn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !su(e))
          throw new TypeError("invalid argument. Number of trials `n` must be a positive integer. Value: `" + e + "`");
        if (!uu(n))
          throw new TypeError("invalid argument. Success probability `p` must be a number between 0 and 1. Value: `" + n + "`");
      } else
        e = 1, n = 0.5;
      return l(this, "n", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!su(r))
          throw new TypeError("invalid value. Must be a positive integer. Value: `" + r + "`");
        e = r;
      } }), l(this, "p", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!uu(r))
          throw new TypeError("invalid value. Must be a number between 0 and 1. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Pn.prototype, "kurtosis", function() {
      return Ds(this.n, this.p);
    }), m(Pn.prototype, "mean", function() {
      return L0(this.n, this.p);
    }), m(Pn.prototype, "median", function() {
      return Us(this.n, this.p);
    }), m(Pn.prototype, "mode", function() {
      return Hs(this.n, this.p);
    }), m(Pn.prototype, "skewness", function() {
      return Ws(this.n, this.p);
    }), m(Pn.prototype, "stdev", function() {
      return Gs(this.n, this.p);
    }), m(Pn.prototype, "variance", function() {
      return zs(this.n, this.p);
    }), o(Pn.prototype, "cdf", function(e) {
      return ti(e, this.n, this.p);
    }), o(Pn.prototype, "logpmf", function(e) {
      return $s(e, this.n, this.p);
    }), o(Pn.prototype, "mgf", function(e) {
      return Js(e, this.n, this.p);
    }), o(Pn.prototype, "pmf", function(e) {
      return eu(e, this.n, this.p);
    }), o(Pn.prototype, "quantile", function(e) {
      return ou(e, this.n, this.p);
    });
    var ed = Pn, nd = function(e, n) {
      var r, a, s, u;
      if (i(e) || i(n) || n < 0 || n > 1 || !ee(e) || e === H)
        return NaN;
      if (n === 0 || n === 1 || e === 0)
        return 0;
      for (r = e * M(u = 1 - n), a = R(r) * r, s = 1; s <= e; s++)
        r += M((e - s + 1) / s) + M(n / u), a += R(r) * r;
      return -a;
    }, rd = function(e) {
      return !!(Ke(e) >>> 31);
    }, id = function(e) {
      return e === 0 ? -64.85021904942025 : e * (e * (e * (-0.8750608600031904 * e - 16.157537187333652) - 75.00855792314705) - 122.88666844901361) - 64.85021904942025;
    }, ad = function(e) {
      return e === 0 ? 194.5506571482614 : 194.5506571482614 + e * (485.3903996359137 + e * (432.88106049129027 + e * (165.02700983169885 + e * (24.858464901423062 + 1 * e))));
    }, fu = 6123233995736766e-32, td = 2.414213562373095, od = function(e) {
      var n, r, a, s;
      return i(e) || e === 0 ? e : e === H ? gr : e === j ? -gr : (e < 0 && (r = !0, e = -e), n = 0, e > td ? (a = gr, n = 1, e = -1 / e) : e <= 0.66 ? a = 0 : (a = P, n = 2, e = (e - 1) / (e + 1)), s = e * (s = (s = e * e) * id(s) / ad(s)) + e, n === 2 ? s += 0.5 * fu : n === 1 && (s += fu), a += s, r ? -a : a);
    }, Ma = function(e, n) {
      var r;
      return i(n) || i(e) ? NaN : Yn(n) ? n === H ? Yn(e) ? Rn(T / 4, e) : Rn(0, e) : Yn(e) ? Rn(3 * T / 4, e) : Rn(T, e) : Yn(e) ? Rn(T / 2, e) : e === 0 ? n >= 0 && !rd(n) ? Rn(0, e) : Rn(T, e) : n === 0 ? Rn(T / 2, e) : (r = od(e / n), n < 0 ? r <= 0 ? r + T : r - T : r);
    }, sd = 0.3183098861837907, cu = function(e, n, r) {
      return i(e) || i(r) || i(n) || r <= 0 ? NaN : sd * Ma(e - n, r) + 0.5;
    }, ud = 0.3183098861837907;
    o(cu, "factory", function(e, n) {
      return i(n) || i(e) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : ud * Ma(r - e, n) + 0.5;
      };
    });
    var lu = cu, fd = Ge.isPrimitive, vu = function(e) {
      return fd(e) && i(e);
    }, cd = Ge.isObject, pu = function(e) {
      return cd(e) && i(e.valueOf());
    }, q0 = function(e) {
      return vu(e) || pu(e);
    };
    o(q0, "isPrimitive", vu), o(q0, "isObject", pu);
    var Vn = q0, mu = function(e, n) {
      return i(n) || i(e) || n <= 0 ? NaN : M(n) + M(4 * T);
    }, hu = function(e, n) {
      return i(n) || i(e) || n <= 0 ? NaN : e;
    }, du = function(e, n) {
      return i(n) || i(e) || n <= 0 ? NaN : e;
    }, ld = 0.3183098861837907, gu = function(e, n, r) {
      return i(e) || i(r) || i(n) || r <= 0 ? NaN : M(ld * Ma(e - n, r) + 0.5);
    }, vd = 0.3183098861837907;
    o(gu, "factory", function(e, n) {
      return i(n) || i(e) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : M(vd * Ma(r - e, n) + 0.5);
      };
    });
    var Nu = gu, yu = function(e, n, r) {
      return i(e) || i(r) || i(n) || r <= 0 ? NaN : -(ei + M(r) + oe(V((e - n) / r, 2)));
    };
    o(yu, "factory", function(e, n) {
      return i(n) || i(e) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : -(ei + M(n) + oe(V((r - e) / n, 2)));
      };
    });
    var bu = yu, wu = function(e, n, r) {
      return i(e) || i(r) || i(n) || r <= 0 ? NaN : 1 / (T * r * (1 + V((e - n) / r, 2)));
    };
    o(wu, "factory", function(e, n) {
      var r;
      return i(n) || i(e) || n <= 0 ? N(NaN) : (r = n * T, function(a) {
        return i(a) ? NaN : 1 / (r * (1 + V((a - e) / n, 2)));
      });
    });
    var xu = wu, Su = function(e, n, r) {
      return i(n) || i(r) || r <= 0 || i(e) || e < 0 || e > 1 ? NaN : n + r * k0(T * (e - 0.5));
    };
    o(Su, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : e + n * k0(T * (r - 0.5));
      };
    });
    var Mu = Su, ku = Ue.isPrimitive, Tu = Ge.isPrimitive;
    function rr() {
      var e, n;
      if (!(this instanceof rr))
        return arguments.length === 0 ? new rr() : new rr(arguments[0], arguments[1]);
      if (arguments.length) {
        if (n = arguments[0], e = arguments[1], !Tu(n) || Vn(n))
          throw new TypeError("invalid argument. Location parameter `x0` must be a number primitive. Value: `" + n + "`");
        if (!ku(e))
          throw new TypeError("invalid argument. Scale parameter `gamma` must be a positive number. Value: `" + e + "`");
      } else
        n = 0, e = 1;
      return l(this, "x0", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Tu(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        n = r;
      } }), l(this, "gamma", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!ku(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), this;
    }
    m(rr.prototype, "entropy", function() {
      return mu(this.x0, this.gamma);
    }), m(rr.prototype, "median", function() {
      return hu(this.x0, this.gamma);
    }), m(rr.prototype, "mode", function() {
      return du(this.x0, this.gamma);
    }), o(rr.prototype, "cdf", function(e) {
      return lu(e, this.x0, this.gamma);
    }), o(rr.prototype, "logcdf", function(e) {
      return Nu(e, this.x0, this.gamma);
    }), o(rr.prototype, "logpdf", function(e) {
      return bu(e, this.x0, this.gamma);
    }), o(rr.prototype, "pdf", function(e) {
      return xu(e, this.x0, this.gamma);
    }), o(rr.prototype, "quantile", function(e) {
      return Mu(e, this.x0, this.gamma);
    });
    var pd = rr, Eu = function(e, n, r) {
      return i(e) || i(n) || i(r) || n < 0 || r <= 0 ? NaN : n === 0 ? e < 0 ? 0 : 1 : e <= 0 ? 0 : e === H ? 1 : fr(e * r, n);
    }, Pu = function(e, n) {
      return i(e) || i(n) ? NaN : e < n ? 0 : 1;
    };
    o(Pu, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) ? NaN : n < e ? 0 : 1;
      };
    });
    var Tr = Pu, md = Tr.factory;
    o(Eu, "factory", function(e, n) {
      return i(e) || i(n) || e < 0 || n <= 0 ? N(NaN) : e === 0 ? md(0) : function(r) {
        return r <= 0 ? 0 : r === H ? 1 : fr(r * n, e);
      };
    });
    var Er = Eu, Vu = function(e, n) {
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e < 0 ? 0 : 1 : e <= 0 ? 0 : Er(e * e, n / 2, 0.5);
    }, hd = Tr.factory, dd = Er.factory;
    o(Vu, "factory", function(e) {
      var n;
      return e === 0 ? hd(0) : (n = dd(e / 2, 0.5), function(r) {
        return i(r) ? NaN : r < 0 ? 0 : n(r * r);
      });
    });
    var Cu = Vu, Au = function(e) {
      var n;
      return i(e) || e <= 0 ? NaN : ke(n = e / 2) + 0.5 * (e - Oe - (e - 1) * Qn(n));
    }, oi = function(e) {
      return i(e) || e < 0 ? NaN : Pe * ve((e + 1) / 2) / ve(e / 2);
    }, ka = function(e) {
      var n;
      return i(e) || e < 0 ? NaN : e - (n = oi(e)) * n;
    }, F0 = function(e) {
      var n, r;
      return i(e) || e <= 0 ? NaN : oi(e) / ((n = (r = c(ka(e))) * r) * r) * (1 - 2 * n);
    }, Iu = function(e) {
      var n, r;
      return i(e) || e <= 0 ? NaN : (n = ka(e), r = c(n), 2 / n * (1 - oi(e) * r * F0(e) - n));
    }, Bu = function(e) {
      return i(e) || e < 1 ? NaN : c(e - 1);
    }, Ru = function(e) {
      var n;
      return i(e) || e < 0 ? NaN : (n = oi(e), c(e - n * n));
    }, Lu = function(e, n) {
      var r, a;
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e === 0 ? H : j : e < 0 || e === H ? j : (r = (1 - (a = n / 2)) * Oe + (n - 1) * M(e) - e * e / 2, r -= ke(a));
    }, qu = function(e, n) {
      return i(e) || i(n) ? NaN : e === n ? H : j;
    };
    o(qu, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) ? NaN : n === e ? H : j;
      };
    });
    var Hr = qu, gd = Hr.factory;
    o(Lu, "factory", function(e) {
      var n, r;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? gd(0) : (r = e / 2, n = e - 1, function(a) {
        var s;
        return i(a) ? NaN : a < 0 || a === H ? j : (s = (1 - r) * Oe + n * M(a) - a * a / 2, s -= ke(r));
      });
    });
    var Fu = Lu, Ou = function(e, n) {
      var r, a;
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e === 0 ? H : 0 : e < 0 ? 0 : (r = V(2, 1 - (a = n / 2)) * V(e, n - 1) * R(-e * e / 2), r /= ve(a));
    }, Du = function(e, n) {
      return i(e) || i(n) ? NaN : e === n ? H : 0;
    };
    o(Du, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) ? NaN : n === e ? H : 0;
      };
    });
    var Wr = Du, Nd = Wr.factory;
    o(Ou, "factory", function(e) {
      var n, r;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? Nd(0) : (r = e / 2, n = e - 1, function(a) {
        var s;
        return i(a) ? NaN : a < 0 ? 0 : (s = V(2, 1 - r) * V(a, n) * R(-a * a / 2), s /= ve(r));
      });
    });
    var Uu = Ou, Hu = function(e, n, r) {
      return i(n) || i(r) || i(e) || n < 0 || r <= 0 || e < 0 || e > 1 ? NaN : n === 0 ? 0 : 1 / r * ii(e, n);
    }, yd = kr.factory;
    o(Hu, "factory", function(e, n) {
      return i(e) || i(n) || e < 0 || n <= 0 ? N(NaN) : e === 0 ? yd(0) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : 1 / n * ii(r, e);
      };
    });
    var Gr = Hu, Wu = function(e, n) {
      return c(Gr(e, n / 2, 0.5));
    }, bd = Gr.factory;
    o(Wu, "factory", function(e) {
      var n = bd(e / 2, 0.5);
      return function(r) {
        return c(n(r));
      };
    });
    var Gu = Wu, zu = Ue.isPrimitive;
    function qn() {
      var e;
      if (!(this instanceof qn))
        return arguments.length === 0 ? new qn() : new qn(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !zu(e))
          throw new TypeError("invalid argument. Rate parameter `k` must be a positive number. Value: `" + e + "`");
      } else
        e = 1;
      return l(this, "k", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!zu(n))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(qn.prototype, "entropy", function() {
      return Au(this.k);
    }), m(qn.prototype, "kurtosis", function() {
      return Iu(this.k);
    }), m(qn.prototype, "mean", function() {
      return oi(this.k);
    }), m(qn.prototype, "mode", function() {
      return Bu(this.k);
    }), m(qn.prototype, "skewness", function() {
      return F0(this.k);
    }), m(qn.prototype, "stdev", function() {
      return Ru(this.k);
    }), m(qn.prototype, "variance", function() {
      return ka(this.k);
    }), o(qn.prototype, "cdf", function(e) {
      return Cu(e, this.k);
    }), o(qn.prototype, "logpdf", function(e) {
      return Fu(e, this.k);
    }), o(qn.prototype, "pdf", function(e) {
      return Uu(e, this.k);
    }), o(qn.prototype, "quantile", function(e) {
      return Gu(e, this.k);
    });
    var wd = qn, ju = function(e, n) {
      return Er(e, n / 2, 0.5);
    }, xd = Er.factory;
    o(ju, "factory", function(e) {
      return xd(e / 2, 0.5);
    });
    var Ku = ju, Qu = function(e) {
      var n;
      return i(e) || e <= 0 ? NaN : (n = e / 2) + M(2 * ve(n)) + (1 - n) * Qn(n);
    }, $u = function(e) {
      return i(e) || e <= 0 ? NaN : 12 / e;
    }, Zu = function(e) {
      return i(e) || e < 0 ? NaN : e;
    }, Ju = function(e, n) {
      return Gr(e, n / 2, 0.5);
    }, Sd = Gr.factory;
    o(Ju, "factory", function(e) {
      return Sd(e / 2, 0.5);
    });
    var O0 = Ju, Xu = function(e) {
      return O0(0.5, e);
    }, Yu = function(e) {
      return i(e) || e < 0 ? NaN : Ee(e - 2, 0);
    }, _u = function(e) {
      return i(e) || e <= 0 ? NaN : c(8 / e);
    }, e1 = function(e) {
      return i(e) || e < 0 ? NaN : c(2 * e);
    }, n1 = function(e) {
      return i(e) || e < 0 ? NaN : 2 * e;
    }, r1 = function(e, n) {
      return i(e) || i(n) || n < 0 || e >= 0.5 ? NaN : V(1 - 2 * e, -n / 2);
    };
    o(r1, "factory", function(e) {
      return i(e) || e < 0 ? N(NaN) : function(n) {
        return i(n) || n >= 0.5 ? NaN : V(1 - 2 * n, -e / 2);
      };
    });
    var i1 = r1, Md = function(e, n) {
      var r, a, s, u, p, k, b;
      return b = (n - e - qe + 0.5) / (s = e + qe - 0.5), e < 1 ? n <= de ? R(e * M(n) - n - ke(e)) : V(n, e) * R(-n) / ve(e) : (J(b * b * e) <= 100 && e > 150 ? (r = e * (oe(b) - b) + n * (0.5 - qe) / s, r = R(r)) : (u = e * M(n / s), Se(u, p = e - n) <= de || Ee(u, p) >= ce ? (a = p / e, Se(u, p) / 2 > de && Ee(u, p) / 2 < ce ? r = (k = V(n / s, e / 2) * R(p / 2)) * k : Se(u, p) / 4 > de && Ee(u, p) / 4 < ce && n > e ? (r = (k = V(n / s, e / 4) * R(p / 4)) * k, r *= r) : r = a > de && a < ce ? V(n * R(a) / s, e) : R(u + p)) : r = V(n / s, e) * R(p)), r *= c(s / Kn) / _e(e));
    }, kd = function(e, n) {
      var r, a, s, u, p, k, b;
      return b = (n - e - qe + 0.5) / (s = e + qe - 0.5), e < 1 ? n <= de ? R(e * M(n) - n - ke(e)) : V(n, e) * R(-n) / ve(e) : (J(b * b * e) <= 100 && e > 150 ? (r = e * (oe(b) - b) + n * (0.5 - qe) / s, r = R(r)) : (u = e * M(n / s), Se(u, p = e - n) <= de || Ee(u, p) >= ce ? (a = p / e, Se(u, p) / 2 > de && Ee(u, p) / 2 < ce ? r = (k = V(n / s, e / 2) * R(p / 2)) * k : Se(u, p) / 4 > de && Ee(u, p) / 4 < ce && n > e ? (r = (k = V(n / s, e / 4) * R(p / 4)) * k, r *= r) : r = a > de && a < ce ? V(n * R(a) / s, e) : R(u + p)) : r = V(n / s, e) * R(p)), r *= c(s / Kn) / _e(e));
    }, a1 = function(e, n) {
      var r;
      return e <= 0 ? NaN : n < 0 ? NaN : n === 0 ? e > 1 ? 0 : e === 1 ? 1 : H : (r = kd(e, n), n < 1 && Tn * n < r ? H : (r === 0 ? (r = e * M(n) - n - ke(e) - M(n), r = R(r)) : r /= n, r));
    }, t1 = function(e, n) {
      var r;
      return e <= 0 ? NaN : n < 0 ? NaN : n === 0 ? e > 1 ? 0 : e === 1 ? 1 : H : (r = Md(e, n), n < 1 && Tn * n < r ? H : (r === 0 ? (r = e * M(n) - n - ke(e) - M(n), r = R(r)) : r /= n, r));
    }, o1 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n < 0 || r <= 0 ? NaN : e < 0 || e === H ? 0 : n === 0 ? e === 0 ? H : 0 : t1(n, e * r) * r;
    }, Td = Wr.factory;
    o(o1, "factory", function(e, n) {
      return i(e) || i(n) || e < 0 || n <= 0 ? N(NaN) : e === 0 ? Td(0) : function(r) {
        return i(r) ? NaN : r < 0 || r === H ? 0 : t1(e, r * n) * n;
      };
    });
    var si = o1, s1 = function(e, n) {
      return si(e, n / 2, 0.5);
    }, Ed = si.factory;
    o(s1, "factory", function(e) {
      return Ed(e / 2, 0.5);
    });
    var u1 = s1, f1 = Ue.isPrimitive;
    function Cn() {
      var e;
      if (!(this instanceof Cn))
        return arguments.length === 0 ? new Cn() : new Cn(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !f1(e))
          throw new TypeError("invalid argument. Rate parameter `k` must be a positive number. Value: `" + e + "`");
      } else
        e = 1;
      return l(this, "k", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!f1(n))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(Cn.prototype, "entropy", function() {
      return Qu(this.k);
    }), m(Cn.prototype, "kurtosis", function() {
      return $u(this.k);
    }), m(Cn.prototype, "mean", function() {
      return Zu(this.k);
    }), m(Cn.prototype, "median", function() {
      return Xu(this.k);
    }), m(Cn.prototype, "mode", function() {
      return Yu(this.k);
    }), m(Cn.prototype, "skewness", function() {
      return _u(this.k);
    }), m(Cn.prototype, "stdev", function() {
      return e1(this.k);
    }), m(Cn.prototype, "variance", function() {
      return n1(this.k);
    }), o(Cn.prototype, "cdf", function(e) {
      return Ku(e, this.k);
    }), o(Cn.prototype, "mgf", function(e) {
      return i1(e, this.k);
    }), o(Cn.prototype, "pdf", function(e) {
      return u1(e, this.k);
    }), o(Cn.prototype, "quantile", function(e) {
      return O0(e, this.k);
    });
    var Pd = Cn, c1 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n < 0 || r <= 0 ? NaN : e < 0 || e === H ? j : n === 0 ? e === 0 ? H : j : M(a1(n, e * r)) + M(r);
    }, Vd = Hr.factory;
    o(c1, "factory", function(e, n) {
      return i(e) || i(n) || e < 0 || n <= 0 ? N(NaN) : e === 0 ? Vd(0) : function(r) {
        return i(r) ? NaN : r < 0 || r === H ? j : M(a1(e, r * n)) + M(n);
      };
    });
    var ui = c1, l1 = function(e, n) {
      return ui(e, n / 2, 0.5);
    }, Cd = ui.factory;
    o(l1, "factory", function(e) {
      return Cd(e / 2, 0.5);
    });
    var Ad = l1, v1 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e < n ? 0 : 1 : e < n - r ? 0 : e > n + r ? 1 : (1 + (a = (e - n) / r) + Lr(a) / T) / 2;
    }, Id = Tr.factory;
    o(v1, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Id(e) : function(r) {
        var a;
        return i(r) ? NaN : r < e - n ? 0 : r > e + n ? 1 : (1 + (a = (r - e) / n) + Lr(a) / T) / 2;
      };
    });
    var D0 = v1, or = 9.869604401089358, p1 = function(e, n) {
      var r;
      return i(e) || i(n) || n <= 0 ? NaN : (r = 6 * (90 - or * or), r /= 5 * V(or - 6, 2));
    }, m1 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, h1 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, d1 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, g1 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 0;
    }, N1 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : n * c(1 / 3 - 2 / or);
    }, y1 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : n * n * (1 / 3 - 2 / or);
    }, b1 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e < n ? j : 0 : e < n - r ? j : e > n + r ? 0 : M((1 + (a = (e - n) / r) + Lr(a) / T) / 2);
    }, w1 = function(e, n) {
      return i(e) || i(n) ? NaN : e < n ? j : 0;
    };
    o(w1, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) ? NaN : n < e ? j : 0;
      };
    });
    var fi = w1, Bd = fi.factory;
    o(b1, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Bd(e) : function(r) {
        var a;
        return i(r) ? NaN : r < e - n ? j : r > e + n ? 0 : M((1 + (a = (r - e) / n) + Lr(a) / T) / 2);
      };
    });
    var x1 = b1, S1 = 9007199254740991;
    S1 += 1;
    var Ta = function(e) {
      var n, r, a, s;
      return i(e) ? NaN : Yn(e) ? NaN : (n = J(e)) > S1 ? 1 : (a = n - (r = ye(n))) == 0.5 ? 0 : (s = a < 0.25 ? Kr(T * a) : a < 0.75 ? ar(T * (a = 0.5 - a)) : -Kr(T * (a = 1 - a)), r % 2 == 1 ? -s : s);
    }, M1 = function(e, n, r) {
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e === n ? H : j : e < n - r || e > n + r ? j : M(1 + Ta((e - n) / r)) - M(2 * r);
    }, Rd = Hr.factory;
    o(M1, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Rd(e) : function(r) {
        return i(r) ? NaN : r < e - n || r > e + n ? j : M(1 + Ta((r - e) / n)) - M(2 * n);
      };
    });
    var k1 = M1, Ld = function(e) {
      var n, r;
      return e === 0 ? 0.16666666666666666 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (-0.789474443963537 * e - 163.72585752598383) - 11561.443576500522) - 351754.9648081514, r = e * (36157.827983443196 + e * (1 * e - 277.7110814206028)) - 2.1105297888489086e6) : (n = (e = 1 / e) * (e * (-351754.9648081514 * e - 11561.443576500522) - 163.72585752598383) - 0.789474443963537, r = 1 + e * (e * (36157.827983443196 + -2.1105297888489086e6 * e) - 277.7110814206028)), n / r);
    }, qd = 709.782712893384 + Oe, Fd = -708.3964185322641 - Oe, Od = 709.782712893384 - Oe, T1 = function(e) {
      var n;
      return e === 0 ? e : (n = J(e), e > qd || e < Fd ? e > 0 ? H : j : n > 1 ? n >= Od ? (n = R(0.5 * n), n *= 0.5 * n, e < 0 && (n = -n), n) : (n = 0.5 * (n = R(n)) - 0.5 / n, e < 0 && (n = -n), n) : e + e * (n *= n) * Ld(n));
    }, E1 = function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : (a = or * T1(s = r * e), a /= s * (or + s * s), a *= R(n * e));
    };
    o(E1, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a, s;
        return i(r) ? NaN : (a = or * T1(s = n * r), a /= s * (or + s * s), a *= R(e * r));
      };
    });
    var P1 = E1, V1 = function(e, n, r) {
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e === n ? H : 0 : e < n - r || e > n + r ? 0 : (1 + Ta((e - n) / r)) / (2 * r);
    }, Dd = Wr.factory;
    o(V1, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Dd(e) : function(r) {
        return i(r) ? NaN : r < e - n || r > e + n ? 0 : (1 + Ta((r - e) / n)) / (2 * n);
      };
    });
    var C1 = V1, Ud = 1e4, Hd = 1e-12, A1 = function(e, n, r) {
      var a, s, u, p;
      for (p = 1, a = n - r, s = n + r; p < Ud; ) {
        if (u = (a + s) / 2, s - a < Hd)
          return u;
        e > D0(u, n, r) ? a = u : s = u, p += 1;
      }
      return u;
    }, I1 = function(e, n, r) {
      return i(n) || i(r) || i(e) || r < 0 || e < 0 || e > 1 ? NaN : r === 0 ? n : A1(e, n, r);
    }, Wd = kr.factory;
    o(I1, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Wd(e) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : A1(r, e, n);
      };
    });
    var B1 = I1, R1 = Ue.isPrimitive, L1 = Ge.isPrimitive;
    function dn() {
      var e, n;
      if (!(this instanceof dn))
        return arguments.length === 0 ? new dn() : new dn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !L1(e) || Vn(e))
          throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `" + e + "`");
        if (!R1(n))
          throw new TypeError("invalid argument. Scale parameter `s` must be a positive number. Value: `" + n + "`");
      } else
        e = 0, n = 1;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!L1(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        e = r;
      } }), l(this, "s", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!R1(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(dn.prototype, "kurtosis", function() {
      return p1(this.mu, this.s);
    }), m(dn.prototype, "mean", function() {
      return m1(this.mu, this.s);
    }), m(dn.prototype, "median", function() {
      return h1(this.mu, this.s);
    }), m(dn.prototype, "mode", function() {
      return d1(this.mu, this.s);
    }), m(dn.prototype, "skewness", function() {
      return g1(this.mu, this.s);
    }), m(dn.prototype, "stdev", function() {
      return N1(this.mu, this.s);
    }), m(dn.prototype, "variance", function() {
      return y1(this.mu, this.s);
    }), o(dn.prototype, "cdf", function(e) {
      return D0(e, this.mu, this.s);
    }), o(dn.prototype, "logcdf", function(e) {
      return x1(e, this.mu, this.s);
    }), o(dn.prototype, "logpdf", function(e) {
      return k1(e, this.mu, this.s);
    }), o(dn.prototype, "mgf", function(e) {
      return P1(e, this.mu, this.s);
    }), o(dn.prototype, "pdf", function(e) {
      return C1(e, this.mu, this.s);
    }), o(dn.prototype, "quantile", function(e) {
      return B1(e, this.mu, this.s);
    });
    var Gd = dn, q1 = function(e) {
      return i(e) ? NaN : 0;
    }, F1 = function(e) {
      return e;
    }, O1 = function(e) {
      return e;
    }, D1 = function(e) {
      return e;
    }, U1 = function(e) {
      return i(e) ? NaN : 0;
    }, H1 = function(e) {
      return i(e) ? NaN : 0;
    }, W1 = function(e, n) {
      return i(e) || i(n) ? NaN : R(n * e);
    };
    o(W1, "factory", function(e) {
      return i(e) ? N(NaN) : function(n) {
        return i(n) ? NaN : R(e * n);
      };
    });
    var U0 = W1;
    function an() {
      var e;
      if (!(this instanceof an))
        return arguments.length === 0 ? new an() : new an(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !Ge(e) || i(e))
          throw new TypeError("invalid argument. Mean parameter `mu` must be a number. Value: `" + e + "`");
      } else
        e = 0;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!Ge(n) || i(n))
          throw new TypeError("invalid value. Must be a number. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(an.prototype, "entropy", function() {
      return q1(this.mu);
    }), m(an.prototype, "mean", function() {
      return F1(this.mu);
    }), m(an.prototype, "mode", function() {
      return O1(this.mu);
    }), m(an.prototype, "median", function() {
      return D1(this.mu);
    }), m(an.prototype, "stdev", function() {
      return U1(this.mu);
    }), m(an.prototype, "variance", function() {
      return H1(this.mu);
    }), o(an.prototype, "cdf", function(e) {
      return Tr(e, this.mu);
    }), o(an.prototype, "logcdf", function(e) {
      return fi(e, this.mu);
    }), o(an.prototype, "logpdf", function(e) {
      return Hr(e, this.mu);
    }), o(an.prototype, "logpmf", function(e) {
      return xa(e, this.mu);
    }), o(an.prototype, "mgf", function(e) {
      return U0(e, this.mu);
    }), o(an.prototype, "pdf", function(e) {
      return Wr(e, this.mu);
    }), o(an.prototype, "pmf", function(e) {
      return Sa(e, this.mu);
    }), o(an.prototype, "quantile", function(e) {
      return kr(e, this.mu);
    });
    var zd = an, G1 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !me(n) || !me(r) || n > r ? NaN : e < n ? 0 : e >= r ? 1 : (ye(e) - n + 1) / (r - n + 1);
    };
    o(G1, "factory", function(e, n) {
      var r, a;
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? N(NaN) : (r = e - 1, a = n - e + 1, function(s) {
        return i(s) ? NaN : s < e ? 0 : s >= n ? 1 : (ye(s) - r) / a;
      });
    });
    var z1 = G1, j1 = function(e, n) {
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? NaN : M(n - e + 1);
    }, K1 = function(e, n) {
      var r;
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? NaN : -1.2 * ((r = V(n - e + 1, 2)) + 1) / (r - 1);
    }, Q1 = function(e, n) {
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? NaN : e / 2 + n / 2;
    }, $1 = function(e, n) {
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? NaN : e / 2 + n / 2;
    }, Z1 = function(e, n) {
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? NaN : 0;
    }, jd = c(1 / 12), J1 = function(e, n) {
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? NaN : jd * c(V(n - e + 1, 2) - 1);
    }, X1 = function(e, n) {
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? NaN : (V(n - e + 1, 2) - 1) / 12;
    }, Y1 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !me(n) || !me(r) || n > r ? NaN : e < n ? j : e >= r ? 0 : M(ye(e) - n + 1) - M(r - n + 1);
    };
    o(Y1, "factory", function(e, n) {
      var r, a;
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? N(NaN) : (a = e - 1, r = M(n - e + 1), function(s) {
        return i(s) ? NaN : s < e ? j : s >= n ? 0 : M(ye(s) - a) - r;
      });
    });
    var _1 = Y1, ef = function(e, n, r) {
      return i(e) || i(n) || i(r) || !me(n) || !me(r) || n > r ? NaN : e < n || e > r || !me(e) ? j : -M(r - n + 1);
    };
    o(ef, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? N(NaN) : (r = -M(n - e + 1), function(a) {
        return i(a) ? NaN : a < e || a > n || !me(a) ? j : r;
      });
    });
    var nf = ef, rf = function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || !me(n) || !me(r) || n > r ? NaN : e === 0 ? 1 : (s = r - n + 1, a = R(e * n) * Le(e * s), a /= s * Le(e));
    };
    o(rf, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? N(NaN) : (r = n - e + 1, function(a) {
        var s;
        return i(a) ? NaN : a === 0 ? 1 : (s = R(a * e) * Le(a * r), s /= r * Le(a));
      });
    });
    var af = rf, tf = function(e, n, r) {
      return i(e) || i(n) || i(r) || !me(n) || !me(r) || n > r ? NaN : e < n || e > r || !me(e) ? 0 : 1 / (r - n + 1);
    };
    o(tf, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? N(NaN) : (r = 1 / (n - e + 1), function(a) {
        return i(a) ? NaN : a < e || a > n || !me(a) ? 0 : r;
      });
    });
    var of = tf, sf = function(e, n, r) {
      return i(e) || i(n) || i(r) || !me(n) || !me(r) || n > r || e < 0 || e > 1 ? NaN : n + ye(e * (r - n + 1));
    };
    o(sf, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || !me(e) || !me(n) || e > n ? N(NaN) : (r = n - e + 1, function(a) {
        return i(a) || a < 0 || a > 1 ? NaN : e + ye(a * r);
      });
    });
    var uf = sf, Ea = Di.isPrimitive;
    function gn() {
      var e, n;
      if (!(this instanceof gn))
        return arguments.length === 0 ? new gn() : new gn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !Ea(e))
          throw new TypeError("invalid argument. Minimum support `a` must be an integer. Value: `" + e + "`");
        if (!Ea(n))
          throw new TypeError("invalid argument. Maximum support `b` must be an integer. Value: `" + n + "`");
        if (e > n)
          throw new RangeError("invalid arguments. Minimum support `a` must be less than or equal to maximum support `b`. Value: `" + e + "," + n + "`");
      } else
        e = 0, n = 1;
      return l(this, "a", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Ea(r))
          throw new TypeError("invalid value. Must be an integer. Value: `" + r + "`");
        if (r > n)
          throw new RangeError("invalid value. Must be smaller than or equal to `b`. Value: `" + r + "`");
        e = r;
      } }), l(this, "b", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Ea(r))
          throw new TypeError("invalid value. Must be an integer. Value: `" + r + "`");
        if (e > r)
          throw new RangeError("invalid value. Must be greater than or equal to `a`. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(gn.prototype, "entropy", function() {
      return j1(this.a, this.b);
    }), m(gn.prototype, "kurtosis", function() {
      return K1(this.a, this.b);
    }), m(gn.prototype, "mean", function() {
      return Q1(this.a, this.b);
    }), m(gn.prototype, "median", function() {
      return $1(this.a, this.b);
    }), m(gn.prototype, "skewness", function() {
      return Z1(this.a, this.b);
    }), m(gn.prototype, "stdev", function() {
      return J1(this.a, this.b);
    }), m(gn.prototype, "variance", function() {
      return X1(this.a, this.b);
    }), o(gn.prototype, "cdf", function(e) {
      return z1(e, this.a, this.b);
    }), o(gn.prototype, "logcdf", function(e) {
      return _1(e, this.a, this.b);
    }), o(gn.prototype, "logpmf", function(e) {
      return nf(e, this.a, this.b);
    }), o(gn.prototype, "mgf", function(e) {
      return af(e, this.a, this.b);
    }), o(gn.prototype, "pmf", function(e) {
      return of(e, this.a, this.b);
    }), o(gn.prototype, "quantile", function(e) {
      return uf(e, this.a, this.b);
    });
    var Kd = gn, ff = function(e, n, r) {
      return ee(n) ? Er(e, n, r) : NaN;
    }, Qd = Er.factory;
    o(ff, "factory", function(e, n) {
      return ee(e) ? Qd(e, n) : N(NaN);
    });
    var cf = ff, $n = function(e) {
      return ye(e) === e && e > 0;
    }, lf = function(e, n) {
      return !$n(e) || i(n) || n <= 0 ? NaN : (1 - e) * Qn(e) + M(ve(e) / n) + e;
    }, vf = function(e, n) {
      return !$n(e) || i(n) || n <= 0 ? NaN : 6 / e;
    }, pf = function(e, n) {
      return !$n(e) || i(n) || n <= 0 ? NaN : e / n;
    }, mf = function(e, n) {
      return !$n(e) || i(n) || n <= 0 ? NaN : (e - 1) / n;
    }, hf = function(e, n) {
      return !$n(e) || i(n) || n <= 0 ? NaN : 2 / c(e);
    }, df = function(e, n) {
      return !$n(e) || i(n) || n <= 0 ? NaN : c(e) / n;
    }, gf = function(e, n) {
      return !$n(e) || i(n) || n <= 0 ? NaN : e / (n * n);
    }, Nf = function(e, n, r) {
      return ee(n) ? ui(e, n, r) : NaN;
    }, $d = ui.factory;
    o(Nf, "factory", function(e, n) {
      return ee(e) ? $d(e, n) : N(NaN);
    });
    var yf = Nf, bf = function(e, n, r) {
      return i(e) || !ee(n) || i(r) || r < 0 || e >= r ? NaN : V(1 - e / r, -n);
    };
    o(bf, "factory", function(e, n) {
      return !ee(e) || i(n) || n < 0 ? N(NaN) : function(r) {
        return i(r) || r >= n ? NaN : V(1 - r / n, -e);
      };
    });
    var wf = bf, xf = function(e, n, r) {
      return ee(n) ? si(e, n, r) : NaN;
    }, Zd = si.factory;
    o(xf, "factory", function(e, n) {
      return ee(e) ? Zd(e, n) : N(NaN);
    });
    var Sf = xf, Mf = function(e, n, r) {
      return ee(n) ? Gr(e, n, r) : NaN;
    }, Jd = Gr.factory;
    o(Mf, "factory", function(e, n) {
      return ee(e) ? Jd(e, n) : N(NaN);
    });
    var kf = Mf, Tf = Os.isPrimitive, Ef = Ue.isPrimitive;
    function An() {
      var e, n;
      if (!(this instanceof An))
        return arguments.length === 0 ? new An() : new An(arguments[0], arguments[1]);
      if (arguments.length) {
        if (n = arguments[0], e = arguments[1], !Tf(n))
          throw new TypeError("invalid argument. Shape parameter `k` must be a positive integer. Value: `" + n + "`");
        if (!Ef(e))
          throw new TypeError("invalid argument. Rate parameter `lambda` must be a positive number. Value: `" + e + "`");
      } else
        n = 1, e = 1;
      return l(this, "k", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Tf(r))
          throw new TypeError("invalid value. Must be a positive integer. Value: `" + r + "`");
        n = r;
      } }), l(this, "lambda", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Ef(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), this;
    }
    m(An.prototype, "entropy", function() {
      return lf(this.k, this.lambda);
    }), m(An.prototype, "kurtosis", function() {
      return vf(this.k, this.lambda);
    }), m(An.prototype, "mean", function() {
      return pf(this.k, this.lambda);
    }), m(An.prototype, "mode", function() {
      return mf(this.k, this.lambda);
    }), m(An.prototype, "skewness", function() {
      return hf(this.k, this.lambda);
    }), m(An.prototype, "stdev", function() {
      return df(this.k, this.lambda);
    }), m(An.prototype, "variance", function() {
      return gf(this.k, this.lambda);
    }), o(An.prototype, "cdf", function(e) {
      return cf(e, this.k, this.lambda);
    }), o(An.prototype, "logpdf", function(e) {
      return yf(e, this.k, this.lambda);
    }), o(An.prototype, "mgf", function(e) {
      return wf(e, this.k, this.lambda);
    }), o(An.prototype, "pdf", function(e) {
      return Sf(e, this.k, this.lambda);
    }), o(An.prototype, "quantile", function(e) {
      return kf(e, this.k, this.lambda);
    });
    var Xd = An, Pf = function(e, n) {
      return i(n) || n < 0 || n === H ? NaN : e < 0 ? 0 : 1 - R(-n * e);
    };
    o(Pf, "factory", function(e) {
      return i(e) || e < 0 || e === H ? N(NaN) : function(n) {
        return n < 0 ? 0 : 1 - R(-e * n);
      };
    });
    var Vf = Pf, Cf = function(e) {
      return i(e) || e < 0 ? NaN : 1 - M(e);
    }, Af = function(e) {
      return i(e) || e < 0 ? NaN : 6;
    }, If = function(e) {
      return i(e) || e < 0 ? NaN : 1 / e;
    }, Bf = function(e) {
      return i(e) || e < 0 ? NaN : 1 / e * Oe;
    }, Rf = function(e) {
      return i(e) || e < 0 ? NaN : 0;
    }, Lf = function(e) {
      return i(e) || e < 0 ? NaN : 2;
    }, qf = function(e) {
      return i(e) || e < 0 ? NaN : 1 / e;
    }, Ff = function(e) {
      return i(e) || e < 0 ? NaN : 1 / (e * e);
    }, Of = function(e, n) {
      return i(n) || n < 0 || n === H ? NaN : e < 0 ? j : oe(-R(-n * e));
    };
    o(Of, "factory", function(e) {
      return i(e) || e < 0 || e === H ? N(NaN) : function(n) {
        return n < 0 ? j : oe(-R(-e * n));
      };
    });
    var Df = Of, Uf = function(e, n) {
      return i(e) || i(n) || n < 0 || n === H ? NaN : e < 0 ? j : -e * n + M(n);
    };
    o(Uf, "factory", function(e) {
      return i(e) || e < 0 || e === H ? N(NaN) : function(n) {
        return i(n) ? NaN : n < 0 ? j : -n * e + M(e);
      };
    });
    var Hf = Uf, Wf = function(e, n) {
      return i(e) || i(n) || n <= 0 || n === H || e >= n ? NaN : n / (n - e);
    };
    o(Wf, "factory", function(e) {
      return i(e) || e <= 0 || e === H ? N(NaN) : function(n) {
        return i(n) || n >= e ? NaN : e / (e - n);
      };
    });
    var Gf = Wf, zf = function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 || n === H ? NaN : e < 0 ? 0 : R(-e / (r = 1 / n)) / r;
    };
    o(zf, "factory", function(e) {
      var n;
      return i(e) || e < 0 || e === H ? N(NaN) : (n = 1 / e, function(r) {
        return i(r) ? NaN : r < 0 ? 0 : R(-r / n) / n;
      });
    });
    var jf = zf, Kf = function(e, n) {
      return i(n) || n < 0 || n === H || i(e) || e < 0 || e > 1 ? NaN : -M(1 - e) / n;
    };
    o(Kf, "factory", function(e) {
      return e < 0 || e === H || i(e) ? N(NaN) : function(n) {
        return i(n) || n < 0 || n > 1 ? NaN : -M(1 - n) / e;
      };
    });
    var Qf = Kf, $f = Ue.isPrimitive;
    function tn() {
      var e;
      if (!(this instanceof tn))
        return arguments.length === 0 ? new tn() : new tn(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !$f(e))
          throw new TypeError("invalid argument. Rate parameter `lambda` must be a positive number. Value: `" + e + "`");
      } else
        e = 1;
      return l(this, "lambda", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!$f(n))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(tn.prototype, "entropy", function() {
      return Cf(this.lambda);
    }), m(tn.prototype, "kurtosis", function() {
      return Af(this.lambda);
    }), m(tn.prototype, "mean", function() {
      return If(this.lambda);
    }), m(tn.prototype, "median", function() {
      return Bf(this.lambda);
    }), m(tn.prototype, "mode", function() {
      return Rf(this.lambda);
    }), m(tn.prototype, "skewness", function() {
      return Lf(this.lambda);
    }), m(tn.prototype, "stdev", function() {
      return qf(this.lambda);
    }), m(tn.prototype, "variance", function() {
      return Ff(this.lambda);
    }), o(tn.prototype, "cdf", function(e) {
      return Vf(e, this.lambda);
    }), o(tn.prototype, "logcdf", function(e) {
      return Df(e, this.lambda);
    }), o(tn.prototype, "logpdf", function(e) {
      return Hf(e, this.lambda);
    }), o(tn.prototype, "mgf", function(e) {
      return Gf(e, this.lambda);
    }), o(tn.prototype, "pdf", function(e) {
      return jf(e, this.lambda);
    }), o(tn.prototype, "quantile", function(e) {
      return Qf(e, this.lambda);
    });
    var Yd = tn, Zf = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? 0 : e === H ? 1 : n * e > r ? Qe(n * e / (r + n * e), n / 2, r / 2, !0, !1) : Qe(r / (r + n * e), r / 2, n / 2, !0, !0);
    };
    o(Zf, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 ? 0 : r === H ? 1 : e * r > n ? Qe(e * r / (n + e * r), e / 2, n / 2, !0, !1) : Qe(n / (n + e * r), n / 2, e / 2, !0, !0);
      };
    });
    var Jf = Zf, Xf = function(e, n) {
      var r, a, s, u;
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : (r = (e + n) / 2, a = e / 2, s = n / 2, u = M(n / e) + ke(a) + ke(s) - ke(r), u += (1 - a) * Qn(a), u += (-1 - s) * Qn(s), u += r * Qn(r));
    }, Yf = function(e, n) {
      return e <= 0 || n <= 8 ? NaN : 12 * (e * (5 * n - 22) * (e + n - 2) + (n - 4) * V(n - 2, 2)) / (e * (n - 6) * (n - 8) * (e + n - 2));
    }, _f = function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 2 ? NaN : n / (n - 2);
    }, e2 = function(e, n) {
      return e <= 2 || n <= 0 ? NaN : (e - 2) / e * (n / (n + 2));
    }, n2 = function(e, n) {
      var r;
      return e <= 0 || n <= 6 ? NaN : (r = (2 * e + n - 2) * c(8 * (n - 4)), r /= (n - 6) * c(e * (e + n - 2)));
    }, r2 = function(e, n) {
      var r;
      return e <= 0 || n <= 4 ? NaN : (r = Pe * (n / (n - 2)), r *= c((e + n - 2) / (e * (n - 4))));
    }, i2 = function(e, n) {
      var r;
      return e <= 0 || n <= 4 ? NaN : (r = 2 * n * n * (e + n - 2), r /= e * V(n - 2, 2) * (n - 4));
    }, _d = function(e, n, r, a, s) {
      var u, p, k, b, C, O, B, A, W, z, K, $, ae, Q;
      if (!s)
        return V(r, e) * V(a, n);
      if (b = e + qe - 0.5, C = n + qe - 0.5, O = (ae = e + n) + qe - 0.5, u = _e(ae), u /= _e(e) * _e(n), u *= c(C / Kn), u *= c(b / O), A = (a * e - r * C) / C, Se(J(B = (r * n - a * b) / b), J(A)) < 0.2)
        if (B * A > 0 || Se(e, n) < 1)
          J(B) < 0.1 ? u *= R(e * oe(B)) : u *= V(r * O / b, e), J(A) < 0.1 ? u *= R(n * oe(A)) : u *= V(a * O / C, n);
        else if (Ee(J(B), J(A)) < 0.5)
          k = n / e, (p = e < n) && k * A < 0.1 || !p && B / k > 0.1 ? (W = Le(k * oe(A)), W = e * oe(W = B + W + W * B), u *= R(W)) : (W = Le(oe(B) / k), W = n * oe(W = A + W + W * A), u *= R(W));
        else if (J(B) < J(A))
          if ((Q = e * oe(B) + n * M(a * O / C)) <= de || Q >= ce) {
            if ((Q += M(u)) >= ce)
              return NaN;
            u = R(Q);
          } else
            u *= R(Q);
        else if ((Q = n * oe(A) + e * M(r * O / b)) <= de || Q >= ce) {
          if ((Q += M(u)) >= ce)
            return NaN;
          u = R(Q);
        } else
          u *= R(Q);
      else if ($ = a * O / C, B = e * M(K = r * O / b), A = n * M($), B >= ce || B <= de || A >= ce || A <= de)
        if (e < n)
          if (z = V($, n / e), (W = e * (M(K) + M(z))) < ce && W > de)
            u *= V(z * K, e);
          else {
            if ((A += B + M(u)) >= ce)
              return NaN;
            u = R(A);
          }
        else if (z = V(K, e / n), (W = (M(z) + M($)) * n) < ce && W > de)
          u *= V(z * $, n);
        else {
          if ((A += B + M(u)) >= ce)
            return NaN;
          u = R(A);
        }
      else
        u *= V(K, e) * V($, n);
      return u;
    }, Pa = function(e, n, r) {
      var a;
      return a = _d(n, r, e, 1 - e, !0), a /= (1 - e) * e;
    }, a2 = function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < 0 || e === H ? 0 : e === 0 ? n < 2 ? H : n === 2 ? 1 : 0 : (a = n * e) > r ? r * n / ((r + a) * (r + a)) * Pa(r / (r + a), r / 2, n / 2) : ((s = r + a) * n - e * n * n) / (s * s) * Pa(a / (r + a), n / 2, r / 2);
    };
    o(a2, "factory", function(e, n) {
      var r, a, s, u;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (u = e * n, a = e / 2, s = n / 2, r = 0, e < 2 ? r = H : e === 2 && (r = 1), function(p) {
        var k, b;
        return i(p) ? NaN : p < 0 || p === H ? 0 : p === 0 ? r : (k = e * p) > n ? u / ((n + k) * (n + k)) * Pa(n / (n + k), s, a) : ((b = n + k) * e - p * e * e) / (b * b) * Pa(e * p / (n + k), a, s);
      });
    });
    var t2 = a2, o2 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 || e < 0 || e > 1 ? NaN : r * (a = ai(n / 2, r / 2, e, 1 - e))[0] / (n * a[1]);
    };
    o(o2, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) || r < 0 || r > 1 ? NaN : (a = ai(e / 2, n / 2, r, 1 - r), n * a[0] / (e * a[1]));
      };
    });
    var s2 = o2, Va = Ue.isPrimitive;
    function Gn() {
      var e, n;
      if (!(this instanceof Gn))
        return arguments.length === 0 ? new Gn() : new Gn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !Va(e))
          throw new TypeError("invalid argument. Numerator degrees of freedom `d1` must be a positive number. Value: `" + e + "`");
        if (!Va(n))
          throw new TypeError("invalid argument. Denominator degrees of freedom `d2` must be a positive number. Value: `" + n + "`");
      } else
        e = 1, n = 1;
      return l(this, "d1", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Va(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "d2", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Va(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Gn.prototype, "entropy", function() {
      return Xf(this.d1, this.d2);
    }), m(Gn.prototype, "kurtosis", function() {
      return Yf(this.d1, this.d2);
    }), m(Gn.prototype, "mean", function() {
      return _f(this.d1, this.d2);
    }), m(Gn.prototype, "mode", function() {
      return e2(this.d1, this.d2);
    }), m(Gn.prototype, "skewness", function() {
      return n2(this.d1, this.d2);
    }), m(Gn.prototype, "stdev", function() {
      return r2(this.d1, this.d2);
    }), m(Gn.prototype, "variance", function() {
      return i2(this.d1, this.d2);
    }), o(Gn.prototype, "cdf", function(e) {
      return Jf(e, this.d1, this.d2);
    }), o(Gn.prototype, "pdf", function(e) {
      return t2(e, this.d1, this.d2);
    }), o(Gn.prototype, "quantile", function(e) {
      return s2(e, this.d1, this.d2);
    });
    var eg = Gn, u2 = function(e, n, r, a) {
      return i(e) || i(n) || i(r) || i(a) || n <= 0 || r <= 0 ? NaN : e <= a ? 0 : R(-V((e - a) / r, -n));
    };
    o(u2, "factory", function(e, n, r) {
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? N(NaN) : function(a) {
        return i(a) ? NaN : a <= r ? 0 : R(-V((a - r) / n, -e));
      };
    });
    var f2 = u2, c2 = function(e, n, r) {
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : 1 + Rr / e + Rr + M(n / e);
    }, l2 = function(e, n, r) {
      var a, s, u, p;
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : e <= 4 ? H : (s = ve(1 - 1 / e), u = ve(1 - 2 / e), p = ve(1 - 3 / e), a = (ve(1 - 4 / e) - 4 * p * s + 3 * u * u) / V(u - s * s, 2), a -= 6);
    }, v2 = function(e, n, r) {
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : e <= 1 ? H : r + n * ve(1 - 1 / e);
    }, p2 = function(e, n, r) {
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : r + n * V(Oe, -1 / e);
    }, m2 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : r + n * V(1 + (a = 1 / e), -a);
    }, h2 = function(e, n, r) {
      var a, s, u;
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : e <= 3 ? H : (a = (s = ve(1 - 1 / e)) * s, u = ve(1 - 2 / e), (ve(1 - 3 / e) - 3 * u * s + 2 * a * s) / V(u - a, 1.5));
    }, d2 = function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : e <= 2 ? H : (a = ve(1 - 1 / e), s = ve(1 - 2 / e), n * c(s - a * a));
    }, g2 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? NaN : e <= 2 ? H : (a = ve(1 - 1 / e), n * n * (ve(1 - 2 / e) - a * a));
    }, N2 = function(e, n, r, a) {
      return i(e) || i(n) || i(r) || i(a) || n <= 0 || r <= 0 ? NaN : e <= a ? j : -V((e - a) / r, -n);
    };
    o(N2, "factory", function(e, n, r) {
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? N(NaN) : function(a) {
        return i(a) ? NaN : a <= r ? j : -V((a - r) / n, -e);
      };
    });
    var y2 = N2, b2 = function(e, n, r, a) {
      var s;
      return i(e) || i(n) || i(r) || i(a) || n <= 0 || r <= 0 ? NaN : e <= a ? j : (s = (e - a) / r, M(n / r) - (1 + n) * M(s) - V(s, -n));
    };
    o(b2, "factory", function(e, n, r) {
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? N(NaN) : function(a) {
        var s;
        return i(a) ? NaN : a <= r ? j : (s = (a - r) / n, M(e / n) - (1 + e) * M(s) - V(s, -e));
      };
    });
    var Ca = b2, w2 = function(e, n, r, a) {
      return i(e) || i(n) || i(r) || i(a) || n <= 0 || r <= 0 ? NaN : R(Ca(e, n, r, a));
    }, ng = Ca.factory;
    o(w2, "factory", function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? N(NaN) : (a = ng(e, n, r), function(s) {
        return i(s) ? NaN : R(a(s, e, n, r));
      });
    });
    var x2 = w2, S2 = function(e, n, r, a) {
      return i(e) || i(n) || i(r) || i(a) || e < 0 || e > 1 || n <= 0 || r <= 0 ? NaN : a + r * V(-M(e), -1 / n);
    };
    o(S2, "factory", function(e, n, r) {
      return i(e) || i(n) || i(r) || e <= 0 || n <= 0 ? N(NaN) : function(a) {
        return i(a) || a < 0 || a > 1 ? NaN : r + n * V(-M(a), -1 / e);
      };
    });
    var M2 = S2, Aa = Ue.isPrimitive, k2 = Ge.isPrimitive;
    function Nn() {
      var e, n, r;
      if (!(this instanceof Nn))
        return arguments.length === 0 ? new Nn() : new Nn(arguments[0], arguments[1], arguments[2]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], r = arguments[2], !Aa(e))
          throw new TypeError("invalid argument. Shape parameter `alpha` must be a positive number. Value: `" + e + "`");
        if (!Aa(n))
          throw new TypeError("invalid argument. Scale parameter `s` must be a number primitive. Value: `" + n + "`");
        if (!k2(r) || i(r))
          throw new TypeError("invalid argument. Location parameter `m` must be a number primitive. Value: `" + r + "`");
      } else
        e = 1, n = 1, r = 0;
      return l(this, "alpha", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(a) {
        if (!Aa(a))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + a + "`");
        e = a;
      } }), l(this, "s", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(a) {
        if (!Aa(a))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + a + "`");
        n = a;
      } }), l(this, "m", { configurable: !1, enumerable: !0, get: function() {
        return r;
      }, set: function(a) {
        if (!k2(a) || i(a))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + a + "`");
        r = a;
      } }), this;
    }
    m(Nn.prototype, "entropy", function() {
      return c2(this.alpha, this.s, this.m);
    }), m(Nn.prototype, "kurtosis", function() {
      return l2(this.alpha, this.s, this.m);
    }), m(Nn.prototype, "mean", function() {
      return v2(this.alpha, this.s, this.m);
    }), m(Nn.prototype, "median", function() {
      return p2(this.alpha, this.s, this.m);
    }), m(Nn.prototype, "mode", function() {
      return m2(this.alpha, this.s, this.m);
    }), m(Nn.prototype, "skewness", function() {
      return h2(this.alpha, this.s, this.m);
    }), m(Nn.prototype, "stdev", function() {
      return d2(this.alpha, this.s, this.m);
    }), m(Nn.prototype, "variance", function() {
      return g2(this.alpha, this.s, this.m);
    }), o(Nn.prototype, "cdf", function(e) {
      return f2(e, this.alpha, this.s, this.m);
    }), o(Nn.prototype, "logcdf", function(e) {
      return y2(e, this.alpha, this.s, this.m);
    }), o(Nn.prototype, "logpdf", function(e) {
      return Ca(e, this.alpha, this.s, this.m);
    }), o(Nn.prototype, "pdf", function(e) {
      return x2(e, this.alpha, this.s, this.m);
    }), o(Nn.prototype, "quantile", function(e) {
      return M2(e, this.alpha, this.s, this.m);
    });
    var rg = Nn, T2 = function(e, n) {
      var r;
      return e <= 0 || n <= 0 ? NaN : (r = e - M(n), r += ke(e), r += (1 - e) * Qn(e));
    }, E2 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : 6 / e;
    }, P2 = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : e / n;
    }, V2 = function(e, n) {
      return e < 1 || n <= 0 ? NaN : (e - 1) / n;
    }, C2 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : 2 / c(e);
    }, A2 = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : c(e) / n;
    }, I2 = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : e / (n * n);
    }, B2 = function(e, n, r) {
      return M(Er(e, n, r));
    }, ig = fi.factory;
    o(B2, "factory", function(e, n) {
      return i(e) || i(n) || e < 0 || n <= 0 ? N(NaN) : e === 0 ? ig(0) : function(r) {
        return r <= 0 ? j : r === H ? 0 : M(fr(r * n, e));
      };
    });
    var R2 = B2, L2 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n < 0 || r <= 0 || e >= r ? NaN : V(1 - e / r, -n);
    };
    o(L2, "factory", function(e, n) {
      return i(e) || i(n) || e < 0 || n <= 0 ? N(NaN) : function(r) {
        return r >= n ? NaN : V(1 - r / n, -e);
      };
    });
    var q2 = L2, Ia = Ue.isPrimitive;
    function yn() {
      var e, n;
      if (!(this instanceof yn))
        return arguments.length === 0 ? new yn() : new yn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !Ia(e))
          throw new TypeError("invalid argument. Shape parameter `alpha` must be a positive number. Value: `" + e + "`");
        if (!Ia(n))
          throw new TypeError("invalid argument. Rate parameter `beta` must be a positive number. Value: `" + n + "`");
      } else
        e = 1, n = 1;
      return l(this, "alpha", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Ia(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "beta", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Ia(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(yn.prototype, "entropy", function() {
      return T2(this.alpha, this.beta);
    }), m(yn.prototype, "kurtosis", function() {
      return E2(this.alpha, this.beta);
    }), m(yn.prototype, "mean", function() {
      return P2(this.alpha, this.beta);
    }), m(yn.prototype, "mode", function() {
      return V2(this.alpha, this.beta);
    }), m(yn.prototype, "skewness", function() {
      return C2(this.alpha, this.beta);
    }), m(yn.prototype, "stdev", function() {
      return A2(this.alpha, this.beta);
    }), m(yn.prototype, "variance", function() {
      return I2(this.alpha, this.beta);
    }), o(yn.prototype, "cdf", function(e) {
      return Er(e, this.alpha, this.beta);
    }), o(yn.prototype, "logcdf", function(e) {
      return R2(e, this.alpha, this.beta);
    }), o(yn.prototype, "logpdf", function(e) {
      return ui(e, this.alpha, this.beta);
    }), o(yn.prototype, "mgf", function(e) {
      return q2(e, this.alpha, this.beta);
    }), o(yn.prototype, "pdf", function(e) {
      return si(e, this.alpha, this.beta);
    }), o(yn.prototype, "quantile", function(e) {
      return Gr(e, this.alpha, this.beta);
    });
    var ag = yn, F2 = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 ? NaN : e < 0 ? 0 : e === H ? 1 : (e = ye(e), 1 - V(1 - n, e + 1));
    };
    o(F2, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        return i(n) ? NaN : n < 0 ? 0 : n === H ? 1 : (n = ye(n), 1 - V(1 - e, n + 1));
      };
    });
    var O2 = F2, D2 = function(e) {
      var n;
      return i(e) || e <= 0 || e >= 1 ? NaN : (n = 1 - e, (-e * M(e) - n * M(n)) / e);
    }, U2 = function(e) {
      return i(e) || e <= 0 || e >= 1 ? NaN : 6 + e * e / (1 - e);
    }, H2 = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : (1 - e) / e;
    }, tg = function(e) {
      return e === 0 ? 0.3999999999940942 : 0.3999999999940942 + e * (0.22222198432149784 + 0.15313837699209373 * e);
    }, og = function(e) {
      return e === 0 ? 0.6666666666666735 : 0.6666666666666735 + e * (0.2857142874366239 + e * (0.1818357216161805 + 0.14798198605116586 * e));
    }, W2 = 1048575, sg = 0.3333333333333333, ug = function(e) {
      var n, r, a, s, u, p, k, b, C, O;
      return a = Ke(e), s = e - 1, (W2 & 2 + a) < 3 ? s === 0 ? 0 : s * s * (sg * s - 0.5) : (C = (a &= W2) - 398458 | 0, O = 440401 - a | 0, r = (b = (p = (u = s / (2 + s)) * u) * p) * tg(b), k = p * og(b) + r, (C |= O) > 0 ? u * ((n = 0.5 * s * s) + k) - n : u * (k - s));
    }, fg = 18014398509481984, G2 = 1.4426950407214463, cg = 16751713164886512e-26, lg = 1048575, vg = 2146435072, pg = 1048576, mg = 1072693248, hg = 2147483647, H0 = [0, 0], dg = function(e) {
      var n, r, a, s, u, p;
      if (i(e) || e < 0)
        return NaN;
      if (_r(H0, e), r = H0[0], a = H0[1], p = 0, r < pg) {
        if (!(r & hg | a))
          return j;
        p -= 54, r = Ke(e *= fg);
      }
      return r >= vg ? e + e : (p += (r >> 20) - ur | 0, e = Xn(e, (r &= lg) | (u = r + 614244 & 1048576 | 0) ^ mg), p += u >> 20 | 0, s = ug(e), n = _n(e -= 1, 0), (e + s) * cg + (e - n + s) * G2 + n * G2 + p);
    }, z2 = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : sa(-1 / dg(1 - e)) - 1;
    }, j2 = function(e) {
      return i(e) || e < 0 || e > 1 ? NaN : 0;
    }, K2 = function(e) {
      return i(e) || e <= 0 || e >= 1 ? NaN : (2 - e) / c(1 - e);
    }, Q2 = function(e) {
      return i(e) || e <= 0 || e >= 1 ? NaN : c(1 - e) / e;
    }, $2 = function(e) {
      return i(e) || e <= 0 || e >= 1 ? NaN : (1 - e) / (e * e);
    }, Z2 = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 ? NaN : e < 0 ? j : e === H ? 0 : (e = ye(e), oe(-V(1 - n, e + 1)));
    };
    o(Z2, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        return i(n) ? NaN : n < 0 ? j : n === H ? 0 : (n = ye(n), oe(-V(1 - e, n + 1)));
      };
    });
    var J2 = Z2, X2 = function(e, n) {
      var r;
      return i(e) || i(n) ? NaN : n < 0 || n > 1 ? NaN : ee(e) ? (r = 1 - n, M(n) + e * M(r)) : j;
    };
    o(X2, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        var r;
        return i(n) ? NaN : ee(n) ? (r = 1 - e, M(e) + n * M(r)) : j;
      };
    });
    var Y2 = X2, _2 = function(e, n) {
      var r, a;
      return i(e) || !oa(n) ? NaN : e >= -M(a = 1 - n) ? NaN : n * (r = R(e)) / (1 - a * r);
    };
    o(_2, "factory", function(e) {
      return oa(e) ? function(n) {
        var r, a;
        return i(n) ? NaN : n >= -M(a = 1 - e) ? NaN : (r = R(n), e * r / (1 - a * r));
      } : N(NaN);
    });
    var ec = _2, nc = function(e, n) {
      return i(e) || i(n) || n < 0 || n > 1 ? NaN : ee(e) ? n * V(1 - n, e) : 0;
    };
    o(nc, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        return i(n) ? NaN : ee(n) ? e * V(1 - e, n) : 0;
      };
    });
    var rc = nc, ic = function(e, n) {
      return i(n) || i(e) || n < 0 || n > 1 || e < 0 || e > 1 ? NaN : e === 1 ? H : Ee(0, sa(M(1 - e) / oe(-n) - (1 + 1e-12)));
    };
    o(ic, "factory", function(e) {
      return i(e) || e < 0 || e > 1 ? N(NaN) : function(n) {
        return i(n) || n < 0 || n > 1 ? NaN : n === 1 ? H : Ee(0, sa(M(1 - n) / oe(-e) - (1 + 1e-12)));
      };
    });
    var ac = ic, tc = ta.isPrimitive;
    function on() {
      var e;
      if (!(this instanceof on))
        return arguments.length === 0 ? new on() : new on(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !tc(e))
          throw new TypeError("invalid argument. Mean parameter `p` must be a probability. Value: `" + e + "`");
      } else
        e = 0.5;
      return l(this, "p", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!tc(n))
          throw new TypeError("invalid value. Must be a probability. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(on.prototype, "entropy", function() {
      return D2(this.p);
    }), m(on.prototype, "kurtosis", function() {
      return U2(this.p);
    }), m(on.prototype, "mean", function() {
      return H2(this.p);
    }), m(on.prototype, "median", function() {
      return z2(this.p);
    }), m(on.prototype, "mode", function() {
      return j2(this.p);
    }), m(on.prototype, "skewness", function() {
      return K2(this.p);
    }), m(on.prototype, "stdev", function() {
      return Q2(this.p);
    }), m(on.prototype, "variance", function() {
      return $2(this.p);
    }), o(on.prototype, "cdf", function(e) {
      return O2(e, this.p);
    }), o(on.prototype, "logcdf", function(e) {
      return J2(e, this.p);
    }), o(on.prototype, "logpmf", function(e) {
      return Y2(e, this.p);
    }), o(on.prototype, "mgf", function(e) {
      return ec(e, this.p);
    }), o(on.prototype, "pmf", function(e) {
      return rc(e, this.p);
    }), o(on.prototype, "quantile", function(e) {
      return ac(e, this.p);
    });
    var gg = on, oc = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : R(-R(-(e - n) / r));
    };
    o(oc, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : R(-R(-(r - e) / n));
      };
    });
    var sc = oc, uc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : M(n) + Rr + 1;
    }, fc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 2.4;
    }, cc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e + n * Rr;
    }, Ng = M(Oe), lc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e - n * Ng;
    }, vc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, yg = [1.2020569031595942, 1.03692775514337, 1.008349277381923, 1.0020083928260821, 1.0004941886041194, 1.0001227133475785, 1.000030588236307, 1.0000076371976379, 1.0000019082127165, 1.0000004769329869, 1.000000119219926, 1.0000000298035034, 1.0000000074507118, 1.0000000018626598, 1.0000000004656628, 1.0000000001164155, 1.0000000000291038, 1.000000000007276, 1.000000000001819, 1.0000000000004547, 1.0000000000001137, 1.0000000000000284, 1.000000000000007, 1.0000000000000018, 1.0000000000000004, 1.0000000000000002, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], bg = [-0.5, 1.6449340668482264, 1.0823232337111381, 1.0173430619844492, 1.0040773561979444, 1.000994575127818, 1.000246086553308, 1.0000612481350588, 1.0000152822594086, 1.000003817293265, 1.0000009539620338, 1.0000002384505027, 1.000000059608189, 1.0000000149015549, 1.000000003725334, 1.0000000009313275, 1.000000000232831, 1.0000000000582077, 1.000000000014552, 1.000000000003638, 1.0000000000009095, 1.0000000000002274, 1.0000000000000568, 1.0000000000000142, 1.0000000000000036, 1.0000000000000009, 1.0000000000000002, 1], wg = [1, 0.16666666666666666, -0.03333333333333333, 0.023809523809523808, -0.03333333333333333, 0.07575757575757576, -0.2531135531135531, 1.1666666666666667, -7.092156862745098, 54.971177944862156, -529.1242424242424, 6192.123188405797, -86580.25311355312, 1.4255171666666667e6, -27298231067816094e-9, 6015808739006424e-7, -15116315767092157e-6, 4296146430611667e-4, -13711655205088332e-3, 4883323189735932e-1, -19296579341940068, 841693047573682600, -40338071854059454e3, 21150748638081993e5, -12086626522296526e7, 7500866746076964e9, -5038778101481069e11, 36528776484818122e12, -2849876930245088e15, 23865427499683627e16, -21399949257225335e18, 20500975723478097e20, -2093800591134638e23, 22752696488463515e24, -26257710286239577e26, 3212508210271803e29, -4159827816679471e31, 5692069548203528e33, -8218362941978458e35, 12502904327166994e37, -2001558323324837e40, 33674982915364376e41, -5947097050313545e44, 11011910323627977e46, -21355259545253502e48, 43328896986641194e50, -9188552824166933e53, 20346896776329074e55, -4700383395803573e58, 1131804344548425e61, -28382249570693707e62, 7406424897967885e65, -20096454802756605e67, 5665717005080594e70, -16584511154136216e72, 5036885995049238e75, -15861468237658186e77, 51756743617545625e79, -17488921840217116e82, 6116051999495218e85, -22122776912707833e87, 8272277679877097e90, -3195892511141571e93, 12750082223387793e95, -5250092308677413e98, 22301817894241627e100, -976845219309552e104, 4409836197845295e106, -2050857088646409e109, 9821443327979128e111, -4841260079820888e114, 24553088801480982e116, -12806926804084748e119, 6867616710466858e122, -37846468581969106e124, 2142610125066529e128, -12456727137183695e130, 7434578755100016e133, -45535795304641704e135, 2861211281685887e139, -1843772355203387e142, 12181154536221047e144, -8248218718531412e147, 5722587793783294e150, -40668530525059105e152, 29596092064642052e155, -22049522565189457e158, 168125970728896e163, -13116736213556958e164, 10467894009478039e167, -8543289357883371e170, 7128782132248655e173, -608029314555359e177, 5299677642484992e179, -4719425916874586e182, 4292841379140298e185, -39876744968232205e187, 3781978041935888e191, -3661423368368119e194, 3617609027237286e197, -3647077264519136e200, 3750875543645441e203, -3934586729643903e206, 4208821114819008e209, -4590229622061792e212, 5103172577262957e215, -5782276230365695e218, 6676248216783588e221, -7853530764445042e224, 9410689406705872e227, -11484933873465185e230, 14272958742848785e233, -1805955958690931e237, 23261535307660807e239, -30495751715499594e242, 4068580607643398e246, -5523103132197436e249, 76277279396434395e251, -10715571119697886e255, 15310200895969188e258, -22244891682179836e261, 3286267919069014e265, -4935592895596035e268, 7534957120083251e271, -11691485154584178e274, 1843526146783894e278, -2953682617296808e281, 4807932127750157e284, -7950212504588525e287, 13352784187354634e290], xg = function(e) {
      var n, r;
      return e === 0 ? 0.2433929443359375 : ((e < 0 ? -e : e) <= 1 ? (n = 0.2433929443359375 + e * (e * (0.055761621477604675 + e * (e * (4515345286457964e-19 + -9332412703570615e-21 * e) - 0.003209124988790859)) - 0.4909247051635357), r = 1 + e * (e * (0.04196762233099861 + e * (e * (24978985622317937e-20 + -10185578841856403e-21 * e) - 0.00413421406552171)) - 0.27996033431034445)) : (n = (e = 1 / e) * (4515345286457964e-19 + e * (e * (0.055761621477604675 + e * (0.2433929443359375 * e - 0.4909247051635357)) - 0.003209124988790859)) - 9332412703570615e-21, r = e * (24978985622317937e-20 + e * (e * (0.04196762233099861 + e * (1 * e - 0.27996033431034445)) - 0.00413421406552171)) - 10185578841856403e-21), n / r);
    }, Sg = function(e) {
      var n, r;
      return e === 0 ? 0.5772156649015329 : ((e < 0 ? -e : e) <= 1 ? (n = 0.5772156649015329 + e * (0.24321064694010716 + e * (0.04173646739882165 + e * (0.003902520870728433 + e * (2496063671518772e-19 + 1101084409767329e-20 * e)))), r = 1 + e * (0.29520127712663174 + e * (0.043460910607305496 + e * (0.004349305820858264 + e * (2557842261404885e-19 + 10991819782396113e-21 * e))))) : (n = 1101084409767329e-20 + (e = 1 / e) * (2496063671518772e-19 + e * (0.003902520870728433 + e * (0.04173646739882165 + e * (0.24321064694010716 + 0.5772156649015329 * e)))), r = 10991819782396113e-21 + e * (2557842261404885e-19 + e * (0.004349305820858264 + e * (0.043460910607305496 + e * (0.29520127712663174 + 1 * e))))), n / r);
    }, Mg = function(e) {
      var n, r;
      return e === 0 ? -0.053725830002359504 : ((e < 0 ? -e : e) <= 1 ? (n = e * (0.04451634732923656 + e * (0.012867767353451996 + e * (9754177045739176e-19 + e * (7698751015736541e-20 + e * (3280325100003831e-21 + 0 * e))))) - 0.053725830002359504, r = 1 + e * (0.3338319455303405 + e * (0.048779843129140764 + e * (0.0047903970857355845 + e * (27077670395633634e-20 + e * (10695186753205734e-21 + 23627662397497864e-24 * e)))))) : (n = 0 + (e = 1 / e) * (3280325100003831e-21 + e * (7698751015736541e-20 + e * (9754177045739176e-19 + e * (0.012867767353451996 + e * (0.04451634732923656 + -0.053725830002359504 * e))))), r = 23627662397497864e-24 + e * (10695186753205734e-21 + e * (27077670395633634e-20 + e * (0.0047903970857355845 + e * (0.048779843129140764 + e * (0.3338319455303405 + 1 * e)))))), n / r);
    }, kg = function(e) {
      var n, r;
      return e === 0 ? -2.497101906022594 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (e * (e * (e * (e * (0 + e * (0 + 0 * e)) - 22925731059489392e-21) - 0.007017212405498024) - 0.13844861799574154) - 0.9392604353771099) - 2.600133018094757) - 2.497101906022594, r = 1 + e * (0.7060390259377451 + e * (0.15739599649558628 + e * (0.010611795097684508 + e * (e * (49340956392759e-19 + e * (e * (7188337293654598e-24 + -11292001134749475e-26 * e) - 23405548702528722e-23)) - 36910273311764616e-21))))) : (n = 0 + (e = 1 / e) * (0 + e * (0 + e * (e * (e * (e * (e * (-2.497101906022594 * e - 2.600133018094757) - 0.9392604353771099) - 0.13844861799574154) - 0.007017212405498024) - 22925731059489392e-21))), r = e * (7188337293654598e-24 + e * (e * (49340956392759e-19 + e * (e * (0.010611795097684508 + e * (0.15739599649558628 + e * (0.7060390259377451 + 1 * e))) - 36910273311764616e-21)) - 23405548702528722e-23)) - 11292001134749475e-26), n / r);
    }, Tg = function(e) {
      var n, r;
      return e === 0 ? -4.785580284951356 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (e * (e * (0.0011514092388917874 + e * (6399492042131645e-20 + e * (1393489324453249e-21 + e * (0 + 0 * e)))) - 1892047582600767e-19) - 0.21140713487441282) - 1.8919736488197254) - 4.785580284951356, r = 1 + e * (0.24434533737818856 + e * (0.008733707544922887 + e * (e * (e * (e * (4710012640030765e-24 + e * (6998415452048457e-28 * e - 8333784406253855e-26)) - 21750464515767985e-22) - 7437436828999331e-20) - 0.0011759276533443448)))) : (n = 0 + (e = 1 / e) * (0 + e * (1393489324453249e-21 + e * (6399492042131645e-20 + e * (0.0011514092388917874 + e * (e * (e * (-4.785580284951356 * e - 1.8919736488197254) - 0.21140713487441282) - 1892047582600767e-19))))), r = 6998415452048457e-28 + e * (e * (4710012640030765e-24 + e * (e * (e * (e * (0.008733707544922887 + e * (0.24434533737818856 + 1 * e)) - 0.0011759276533443448) - 7437436828999331e-20) - 21750464515767985e-22)) - 8333784406253855e-26)), n / r);
    }, Eg = function(e) {
      var n, r;
      return e === 0 ? -10.39489505733089 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (e * (e * (e * (e * (-8214657090954655e-24 * e - 7855236337967234e-22) - 3825293235079675e-20) - 0.001194591734169687) - 0.025115606465534634) - 0.34772826653924577) - 2.858272196711067) - 10.39489505733089, r = 1 + e * (0.2081963335726719 + e * (0.019568765731720502 + e * (0.0011107963810248593 + e * (40850774626603926e-21 + e * (9555611230656935e-22 + e * (1185071534740229e-23 + 2226094836273526e-30 * e))))))) : (n = (e = 1 / e) * (e * (e * (e * (e * (e * (-10.39489505733089 * e - 2.858272196711067) - 0.34772826653924577) - 0.025115606465534634) - 0.001194591734169687) - 3825293235079675e-20) - 7855236337967234e-22) - 8214657090954655e-24, r = 2226094836273526e-30 + e * (1185071534740229e-23 + e * (9555611230656935e-22 + e * (40850774626603926e-21 + e * (0.0011107963810248593 + e * (0.019568765731720502 + e * (0.2081963335726719 + 1 * e))))))), n / r);
    }, Pg = 129, Vg = 170, Cg = 709, Ag = 1.2433929443359375, Ig = 0.6986598968505859, Bg = function e(n) {
      var r, a, s, u, p, k;
      if (i(n))
        return NaN;
      if (n === 1)
        return NaN;
      if (n >= 56)
        return 1;
      if (me(n) && (u = 0 | n) === n) {
        if (!(u < 0))
          return 1 & u ? yg[(u - 3) / 2] : bg[u / 2];
        if (!(1 & (s = 0 | -u)))
          return 0;
        if ((k = (s + 1) / 2 | 0) <= Pg)
          return -wg[k] / (s + 1);
      }
      return J(n) < wo ? -0.5 - Ci * n : (a = 1 - n, n < 0 ? ye(n / 2) === n / 2 ? 0 : (r = n, n = a, a = r, n > Vg ? (r = 2 * Lr(0.5 * a) * e(n), p = ke(n), (p -= n * M(yr)) > Cg ? r < 0 ? j : H : r * R(p)) : 2 * Lr(0.5 * a) * V(yr, -n) * ve(n) * e(n)) : n < 1 ? (r = xg(a), r -= Ag, r += a, r /= a) : n <= 2 ? (r = 1 / (a = -a)) + Sg(a) : n <= 4 ? (r = Ig + 1 / -a) + Mg(n - 2) : n <= 7 ? (r = kg(n - 4), 1 + R(r)) : n < 15 ? (r = Tg(n - 7), 1 + R(r)) : n < 36 ? (r = Eg(n - 15), 1 + R(r)) : 1 + V(2, -n));
    }, Rg = 12 * c(6) * Bg(3) / (T * T * T), pc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : Rg;
    }, Lg = c(6), mc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : T / Lg * n;
    }, hc = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : or / 6 * n * n;
    }, dc = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : -R(-(e - n) / r);
    };
    o(dc, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : -R(-(r - e) / n);
      };
    });
    var gc = dc, Nc = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e === j ? 0 : -(a = (e - n) / r) - R(-a) - M(r);
    };
    o(Nc, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || n <= 0 ? N(NaN) : (r = M(n), function(a) {
        var s;
        return i(a) ? NaN : a === j ? 0 : -(s = (a - e) / n) - R(-s) - r;
      });
    });
    var yc = Nc, bc = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 || e >= 1 / r ? NaN : ve(1 - r * e) * R(n * e);
    };
    o(bc, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return r >= 1 / n ? NaN : ve(1 - n * r) * R(e * r);
      };
    });
    var wc = bc, xc = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e === j ? 0 : 1 / r * R(-(a = (e - n) / r) - R(-a));
    };
    o(xc, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r === j ? 0 : 1 / n * R(-(a = (r - e) / n) - R(-a));
      };
    });
    var Sc = xc, Mc = function(e, n, r) {
      return i(n) || i(r) || i(e) || r <= 0 || e < 0 || e > 1 ? NaN : n - r * M(-M(e));
    };
    o(Mc, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : e - n * M(-M(r));
      };
    });
    var kc = Mc, Tc = Ue.isPrimitive, Ec = Ge.isPrimitive;
    function sn() {
      var e, n;
      if (!(this instanceof sn))
        return arguments.length === 0 ? new sn() : new sn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (n = arguments[0], e = arguments[1], !Ec(n) || Vn(n))
          throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `" + n + "`");
        if (!Tc(e))
          throw new TypeError("invalid argument. Scale parameter `beta` must be a positive number. Value: `" + e + "`");
      } else
        n = 0, e = 1;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Ec(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        n = r;
      } }), l(this, "beta", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Tc(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), this;
    }
    m(sn.prototype, "entropy", function() {
      return uc(this.mu, this.beta);
    }), m(sn.prototype, "kurtosis", function() {
      return fc(this.mu, this.beta);
    }), m(sn.prototype, "mean", function() {
      return cc(this.mu, this.beta);
    }), m(sn.prototype, "median", function() {
      return lc(this.mu, this.beta);
    }), m(sn.prototype, "mode", function() {
      return vc(this.mu, this.beta);
    }), m(sn.prototype, "skewness", function() {
      return pc(this.mu, this.beta);
    }), m(sn.prototype, "stdev", function() {
      return mc(this.mu, this.beta);
    }), m(sn.prototype, "variance", function() {
      return hc(this.mu, this.beta);
    }), o(sn.prototype, "cdf", function(e) {
      return sc(e, this.mu, this.beta);
    }), o(sn.prototype, "logcdf", function(e) {
      return gc(e, this.mu, this.beta);
    }), o(sn.prototype, "logpdf", function(e) {
      return yc(e, this.mu, this.beta);
    }), o(sn.prototype, "mgf", function(e) {
      return wc(e, this.mu, this.beta);
    }), o(sn.prototype, "pdf", function(e) {
      return Sc(e, this.mu, this.beta);
    }), o(sn.prototype, "quantile", function(e) {
      return kc(e, this.mu, this.beta);
    });
    var qg = sn, Fg = function(e) {
      return ye(e) === e && e < 0;
    }, we = function(e) {
      return Fg(e) ? NaN : ke(e + 1);
    }, Pc = function(e, n, r, a) {
      var s, u, p, k;
      return i(e) || i(n) || i(r) || i(a) || !ee(n) || !ee(r) || !ee(a) || n === H || r === H || r > n || a > n ? NaN : (k = Ee(0, a + r - n), p = Se(r, a), ee(e) && k <= e && e <= p ? (u = we(a) + we(r) + we(n - a) + we(n - r), s = we(n) + we(e) + we(a - e), s += we(r - e) + we(n - r + e - a), R(u - s)) : 0);
    };
    o(Pc, "factory", function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? N(NaN) : (s = Ee(0, r + n - e), a = Se(n, r), function(u) {
        var p, k;
        return i(u) ? NaN : ee(u) && s <= u && u <= a ? (k = we(r) + we(n) + we(e - r) + we(e - n), p = we(e) + we(u) + we(r - u), p += we(n - u) + we(e - n + u - r), R(k - p)) : 0;
      });
    });
    var Ba = Pc, Vc = function(e) {
      var n, r, a;
      for (n = e.length, r = 0, a = 0; a < n; a++)
        r += e[a];
      return r;
    }, Cc = function(e, n, r, a) {
      var s, u, p, k, b;
      if (i(e) || i(n) || i(r) || i(a) || !ee(n) || !ee(r) || !ee(a) || n === H || r === H || r > n || a > n)
        return NaN;
      if ((e = Ti(e)) < Ee(0, a + r - n))
        return 0;
      if (e >= Se(a, r))
        return 1;
      for ((u = new sr(e + 1))[e] = Ba(e, n, r, a), b = e - 1; b >= 0; b--)
        p = (b + 1) * (n - r - (a - b - 1)), s = (r - b) * (a - b), u[b] = p / s * u[b + 1];
      return k = Vc(u), Se(k, 1);
    };
    o(Cc, "factory", function(e, n, r) {
      return i(e) || i(n) || i(r) || !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? N(NaN) : function(a) {
        var s, u, p, k, b;
        if (i(a))
          return NaN;
        if ((a = Ti(a)) < Ee(0, r + n - e))
          return 0;
        if (a >= Se(r, n))
          return 1;
        for ((u = new sr(a + 1))[a] = Ba(a, e, n, r), b = a - 1; b >= 0; b--)
          p = (b + 1) * (e - n - (r - b - 1)), s = (n - b) * (r - b), u[b] = p / s * u[b + 1];
        return k = Vc(u), Se(k, 1);
      };
    });
    var Ra = Cc, Og = Di.isPrimitive, Ac = function(e) {
      return Og(e) && e >= 0;
    }, Dg = Di.isObject, Ic = function(e) {
      return Dg(e) && e.valueOf() >= 0;
    }, W0 = function(e) {
      return Ac(e) || Ic(e);
    };
    o(W0, "isPrimitive", Ac), o(W0, "isObject", Ic);
    var Ug = W0, Bc = function(e, n, r) {
      var a;
      return !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? NaN : (a = e * e * (e - 1) * (e * (e + 1) - 6 * n * (e - n) - 6 * r * (e - r)), (a += 6 * r * n * (e - n) * (e - r) * (5 * e - 6)) / (r * n * (e - n) * (e - r) * (e - 2) * (e - 3)));
    }, Rc = function(e, n, r) {
      return i(e) || i(n) || i(r) ? NaN : !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? NaN : r * (n / e);
    }, Lc = function(e, n, r) {
      return !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? NaN : ye((r + 1) * (n + 1) / (e + 2));
    }, qc = function(e, n, r) {
      return !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? NaN : (e - 2 * n) * c(e - 1) * (e - 2 * r) / (c(r * n * (e - n) * (e - r)) * (e - 2));
    }, Fc = function(e, n, r) {
      return !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? NaN : c(r * (n / e) * ((e - n) / e) * ((e - r) / (e - 1)));
    }, Oc = function(e, n, r) {
      return !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? NaN : r * (n / e) * ((e - n) / e) * ((e - r) / (e - 1));
    }, Dc = function(e, n, r, a) {
      var s, u, p, k;
      return i(e) || i(n) || i(r) || i(a) || !ee(n) || !ee(r) || !ee(a) || n === H || r === H || r > n || a > n ? NaN : (k = Ee(0, a + r - n), p = Se(r, a), ee(e) && k <= e && e <= p ? (u = we(a) + we(r) + we(n - a) + we(n - r), s = we(n) + we(e) + we(a - e), u - (s += we(r - e) + we(n - r + e - a))) : j);
    };
    o(Dc, "factory", function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? N(NaN) : (s = Ee(0, r + n - e), a = Se(n, r), function(u) {
        var p, k;
        return i(u) ? NaN : ee(u) && s <= u && u <= a ? (k = we(r) + we(n) + we(e - r) + we(e - n), p = we(e) + we(u) + we(r - u), p += we(n - u) + we(e - n + u - r), k - p) : j;
      });
    });
    var Uc = Dc, Hc = function(e, n, r, a) {
      var s;
      if (i(e) || i(n) || i(r) || i(a) || !ee(n) || !ee(r) || !ee(a) || n === H || r === H || r > n || a > n || e < 0 || e > 1)
        return NaN;
      if (e === 0)
        return Ee(0, a + r - n);
      if (e === 1)
        return Se(a, r);
      for (s = Ee(0, a + r - n); !(Ra(s, n, r, a) > e); )
        s += 1;
      return s;
    };
    o(Hc, "factory", function(e, n, r) {
      return i(e) || i(n) || i(r) || !ee(e) || !ee(n) || !ee(r) || e === H || n === H || n > e || r > e ? N(NaN) : function(a) {
        var s;
        if (i(a) || a < 0 || a > 1)
          return NaN;
        if (a === 0)
          return Ee(0, r + n - e);
        if (a === 1)
          return Se(r, n);
        for (s = Ee(0, r + n - e); !(Ra(s, e, n, r) > a); )
          s += 1;
        return s;
      };
    });
    var Wc = Hc, ci = Ug.isPrimitive;
    function Zn(e, n, r) {
      if (!(this instanceof Zn))
        return new Zn(e, n, r);
      if (!ci(e))
        throw new TypeError("invalid argument. Population size `N` must be a nonnegative integer. Value: `" + e + "`");
      if (!ci(n))
        throw new TypeError("invalid argument. Subpopulation size `K` must be a nonnegative integer. Value: `" + n + "`");
      if (!ci(r))
        throw new TypeError("invalid argument. Number of draws `n` must be a nonnegative integer. Value: `" + r + "`");
      if (n > e)
        throw new RangeError("invalid arguments. Subpopulation size `K` must be smaller than or equal to `N`.");
      if (r > e)
        throw new RangeError("invalid arguments. Number of draws `n` must be smaller than or equal to `N`.");
      return l(this, "N", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(a) {
        if (!ci(a))
          throw new TypeError("invalid value. Must be a nonnegative integer. Value: `" + a + "`");
        if (n > a)
          throw new RangeError("invalid value. Must be larger than or equal to `K`. Value: `" + a + "`");
        if (r > a)
          throw new RangeError("invalid value. Must be larger than or equal to `n`. Value: `" + a + "`");
        e = a;
      } }), l(this, "K", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(a) {
        if (!ci(a))
          throw new TypeError("invalid value. Must be a nonnegative integer. Value: `" + a + "`");
        if (a > e)
          throw new RangeError("invalid value. Must be smaller than or equal to `N`. Value: `" + a + "`");
        n = a;
      } }), l(this, "n", { configurable: !1, enumerable: !0, get: function() {
        return r;
      }, set: function(a) {
        if (!ci(a))
          throw new TypeError("invalid value. Must be a nonnegative integer. Value: `" + a + "`");
        if (a > e)
          throw new RangeError("invalid value. Must be smaller than or equal to `N`. Value: `" + a + "`");
        r = a;
      } }), this;
    }
    m(Zn.prototype, "kurtosis", function() {
      return Bc(this.N, this.K, this.n);
    }), m(Zn.prototype, "mean", function() {
      return Rc(this.N, this.K, this.n);
    }), m(Zn.prototype, "mode", function() {
      return Lc(this.N, this.K, this.n);
    }), m(Zn.prototype, "skewness", function() {
      return qc(this.N, this.K, this.n);
    }), m(Zn.prototype, "stdev", function() {
      return Fc(this.N, this.K, this.n);
    }), m(Zn.prototype, "variance", function() {
      return Oc(this.N, this.K, this.n);
    }), o(Zn.prototype, "cdf", function(e) {
      return Ra(e, this.N, this.K, this.n);
    }), o(Zn.prototype, "logpmf", function(e) {
      return Uc(e, this.N, this.K, this.n);
    }), o(Zn.prototype, "pmf", function(e) {
      return Ba(e, this.N, this.K, this.n);
    }), o(Zn.prototype, "quantile", function(e) {
      return Wc(e, this.N, this.K, this.n);
    });
    var Hg = Zn, Gc = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? 0 : fr(r / e, n, !0, !0);
    };
    o(Gc, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 ? 0 : fr(n / r, e, !0, !0);
      };
    });
    var zc = Gc, jc = function(e, n) {
      var r;
      return e <= 0 || n <= 0 ? NaN : (r = e + M(n * ve(e)), r -= (1 + e) * Qn(e));
    }, Kc = function(e, n) {
      return i(e) || i(n) || e <= 4 || n <= 0 ? NaN : (30 * e - 66) / ((e - 3) * (e - 4));
    }, Qc = function(e, n) {
      return e <= 1 || n <= 0 ? NaN : n / (e - 1);
    }, $c = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : n / (e + 1);
    }, Zc = function(e, n, r) {
      return i(n) || i(r) || i(e) || n <= 0 || r <= 0 || e < 0 || e > 1 ? NaN : r / ii(e, n, !0);
    };
    o(Zc, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : n / ii(r, e, !0);
      };
    });
    var Jc = Zc, Xc = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? j : (a = n * M(r) - ke(n), a -= (n + 1) * M(e), a -= r / e);
    };
    o(Xc, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = e * M(n) - ke(e), function(a) {
        return i(a) ? NaN : a <= 0 ? j : r - (e + 1) * M(a) - n / a;
      });
    });
    var Yc = Xc, _c = function(e, n) {
      return i(e) || i(n) || e <= 3 || n <= 0 ? NaN : 4 * c(e - 2) / (e - 3);
    }, e3 = function(e, n) {
      return e <= 2 || n <= 0 ? NaN : n / ((e - 1) * c(e - 2));
    }, n3 = function(e, n) {
      return e <= 2 || n <= 0 ? NaN : n * n / (V(e - 1, 2) * (e - 2));
    }, r3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? 0 : (a = n * M(r) - ke(n), a -= (n + 1) * M(e), R(a -= r / e));
    };
    o(r3, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = e * M(n) - ke(e), function(a) {
        var s;
        return i(a) ? NaN : a <= 0 ? 0 : (s = r - (e + 1) * M(a) - n / a, R(s));
      });
    });
    var i3 = r3, La = Ue.isPrimitive;
    function Fn() {
      var e, n;
      if (!(this instanceof Fn))
        return arguments.length === 0 ? new Fn() : new Fn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !La(e))
          throw new TypeError("invalid argument. First shape parameter `alpha` must be a positive number. Value: `" + e + "`");
        if (!La(n))
          throw new TypeError("invalid argument. Second shape parameter `beta` must be a positive number. Value: `" + n + "`");
      } else
        e = 1, n = 1;
      return l(this, "alpha", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!La(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "beta", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!La(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Fn.prototype, "entropy", function() {
      return jc(this.alpha, this.beta);
    }), m(Fn.prototype, "kurtosis", function() {
      return Kc(this.alpha, this.beta);
    }), m(Fn.prototype, "mean", function() {
      return Qc(this.alpha, this.beta);
    }), m(Fn.prototype, "mode", function() {
      return $c(this.alpha, this.beta);
    }), m(Fn.prototype, "skewness", function() {
      return _c(this.alpha, this.beta);
    }), m(Fn.prototype, "stdev", function() {
      return e3(this.alpha, this.beta);
    }), m(Fn.prototype, "variance", function() {
      return n3(this.alpha, this.beta);
    }), o(Fn.prototype, "cdf", function(e) {
      return zc(e, this.alpha, this.beta);
    }), o(Fn.prototype, "logpdf", function(e) {
      return Yc(e, this.alpha, this.beta);
    }), o(Fn.prototype, "pdf", function(e) {
      return i3(e, this.alpha, this.beta);
    }), o(Fn.prototype, "quantile", function(e) {
      return Jc(e, this.alpha, this.beta);
    });
    var Wg = Fn, a3 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? 0 : e >= 1 ? 1 : 1 - V(1 - V(e, n), r);
    };
    o(a3, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 ? 0 : r >= 1 ? 1 : 1 - V(1 - V(r, e), n);
      };
    });
    var t3 = a3, o3 = function(e, n) {
      var r, a, s, u, p, k;
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : (u = n * Me(1 + 1 / e, n), p = n * Me(1 + 2 / e, n), k = n * Me(1 + 3 / e, n), a = n * Me(1 + 4 / e, n) - 4 * k * u + 6 * p * (s = u * u) - 3 * s * s, a /= (r = p - u * u) * r);
    }, s3 = function(e, n) {
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : n * Me(1 + 1 / e, n);
    }, u3 = function(e, n) {
      return i(e) || e < 1 || i(n) || n < 1 || e === 1 && n === 1 ? NaN : V((e - 1) / (e * n - 1), 1 / e);
    }, f3 = function(e, n) {
      var r, a, s;
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : (a = n * Me(1 + 1 / e, n), s = n * Me(1 + 2 / e, n), (n * Me(1 + 3 / e, n) - 3 * a * (r = s - a * a) - a * a * a) / V(r, 1.5));
    }, c3 = function(e, n) {
      var r, a;
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : (r = n * Me(1 + 1 / e, n), a = n * Me(1 + 2 / e, n), c(a - r * r));
    }, l3 = function(e, n) {
      var r;
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : (r = n * Me(1 + 1 / e, n), n * Me(1 + 2 / e, n) - r * r);
    }, v3 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 ? j : e >= 1 ? 0 : M(1 - V(1 - V(e, n), r));
    };
    o(v3, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 ? j : r >= 1 ? 0 : M(1 - V(1 - V(r, e), n));
      };
    });
    var p3 = v3, m3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 || e >= 1 ? j : (a = M(n * r), a += (n - 1) * M(e), a += (r - 1) * M(1 - V(e, n)));
    };
    o(m3, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r <= 0 || r >= 1 ? j : (a = M(e * n), a += (e - 1) * M(r), a += (n - 1) * M(1 - V(r, e)));
      };
    });
    var h3 = m3, d3 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e <= 0 || e >= 1 ? 0 : n * r * V(e, n - 1) * V(1 - V(e, n), r - 1);
    };
    o(d3, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 || r >= 1 ? 0 : e * n * V(r, e - 1) * V(1 - V(r, e), n - 1);
      };
    });
    var g3 = d3, N3 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 || e < 0 || e > 1 ? NaN : V(1 - V(1 - e, 1 / r), 1 / n);
    };
    o(N3, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : V(1 - V(1 - r, 1 / n), 1 / e);
      };
    });
    var y3 = N3, qa = Ue.isPrimitive;
    function On() {
      var e, n;
      if (!(this instanceof On))
        return arguments.length === 0 ? new On() : new On(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !qa(e))
          throw new TypeError("invalid argument. First shape parameter `a` must be a positive number. Value: `" + e + "`");
        if (!qa(n))
          throw new TypeError("invalid argument. Second shape parameter `b` must be a positive number. Value: `" + n + "`");
      } else
        e = 1, n = 1;
      return l(this, "a", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!qa(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "b", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!qa(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(On.prototype, "kurtosis", function() {
      return o3(this.a, this.b);
    }), m(On.prototype, "mean", function() {
      return s3(this.a, this.b);
    }), m(On.prototype, "mode", function() {
      return u3(this.a, this.b);
    }), m(On.prototype, "skewness", function() {
      return f3(this.a, this.b);
    }), m(On.prototype, "stdev", function() {
      return c3(this.a, this.b);
    }), m(On.prototype, "variance", function() {
      return l3(this.a, this.b);
    }), o(On.prototype, "cdf", function(e) {
      return t3(e, this.a, this.b);
    }), o(On.prototype, "logcdf", function(e) {
      return p3(e, this.a, this.b);
    }), o(On.prototype, "logpdf", function(e) {
      return h3(e, this.a, this.b);
    }), o(On.prototype, "pdf", function(e) {
      return g3(e, this.a, this.b);
    }), o(On.prototype, "quantile", function(e) {
      return y3(e, this.a, this.b);
    });
    var Gg = On, zg = function(e, n) {
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : V(1 - V(2, -1 / n), 1 / e);
    }, b3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : (a = (e - n) / r, e < n ? 0.5 * R(a) : 1 - 0.5 * R(-a));
    };
    o(b3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : (a = (r - e) / n, r < e ? 0.5 * R(a) : 1 - 0.5 * R(-a));
      };
    });
    var w3 = b3, x3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : M(2 * n * Kn);
    }, S3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 3;
    }, M3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, k3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, T3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, E3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 0;
    }, P3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : Pe * n;
    }, V3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 2 * n * n;
    }, pr = -0.6931471805599453, C3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : (a = (e - n) / r, e < n ? pr + a : pr + oe(-Le(-a)));
    };
    o(C3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : (a = (r - e) / n, r < e ? pr + a : pr + oe(-Le(-a)));
      };
    });
    var A3 = C3, I3 = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : -(J((e - n) / r) + M(2 * r));
    };
    o(I3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : -(J((r - e) / n) + M(2 * n));
      };
    });
    var B3 = I3, R3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 || J(e) >= 1 / r ? NaN : (a = r * e, R(n * e) / (1 - V(a, 2)));
    };
    o(R3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return J(r) >= 1 / n ? NaN : (a = n * r, R(e * r) / (1 - V(a, 2)));
      };
    });
    var L3 = R3, q3 = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : 0.5 * R(-J((e - n) / r)) / r;
    };
    o(q3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : 0.5 * R(-J((r - e) / n)) / n;
      };
    });
    var F3 = q3, O3 = function(e, n, r) {
      return i(n) || i(r) || i(e) || r <= 0 || e < 0 || e > 1 ? NaN : n - r * br(e - 0.5) * M(1 - 2 * J(e - 0.5));
    };
    o(O3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : e - n * br(r - 0.5) * M(1 - 2 * J(r - 0.5));
      };
    });
    var D3 = O3, U3 = Ue.isPrimitive, H3 = Ge.isPrimitive;
    function un() {
      var e, n;
      if (!(this instanceof un))
        return arguments.length === 0 ? new un() : new un(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !H3(e) || Vn(e))
          throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `" + e + "`");
        if (!U3(n))
          throw new TypeError("invalid argument. Scale parameter `b` must be a positive number. Value: `" + n + "`");
      } else
        e = 0, n = 1;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!H3(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        e = r;
      } }), l(this, "b", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!U3(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(un.prototype, "entropy", function() {
      return x3(this.mu, this.b);
    }), m(un.prototype, "kurtosis", function() {
      return S3(this.mu, this.b);
    }), m(un.prototype, "mean", function() {
      return M3(this.mu, this.b);
    }), m(un.prototype, "median", function() {
      return k3(this.mu, this.b);
    }), m(un.prototype, "mode", function() {
      return T3(this.mu, this.b);
    }), m(un.prototype, "skewness", function() {
      return E3(this.mu, this.b);
    }), m(un.prototype, "stdev", function() {
      return P3(this.mu, this.b);
    }), m(un.prototype, "variance", function() {
      return V3(this.mu, this.b);
    }), o(un.prototype, "cdf", function(e) {
      return w3(e, this.mu, this.b);
    }), o(un.prototype, "logcdf", function(e) {
      return A3(e, this.mu, this.b);
    }), o(un.prototype, "logpdf", function(e) {
      return B3(e, this.mu, this.b);
    }), o(un.prototype, "mgf", function(e) {
      return L3(e, this.mu, this.b);
    }), o(un.prototype, "pdf", function(e) {
      return F3(e, this.mu, this.b);
    }), o(un.prototype, "quantile", function(e) {
      return D3(e, this.mu, this.b);
    });
    var jg = un, W3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e < n ? 0 : (a = c(r / (2 * (e - n))), qr(a));
    };
    o(W3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r < e ? 0 : (a = c(n / (2 * (r - e))), qr(a));
      };
    });
    var G3 = W3, Kg = 3 * Rr, z3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : (1 + Kg + M(16 * n * n * T)) / 2;
    }, j3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : H;
    }, Qg = 2 * V($e(0.5), 2), K3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e + n / Qg;
    }, Q3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e + n / 3;
    }, $3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : H;
    }, Z3 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : H;
    }, J3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e < n ? j : (a = c(r / (2 * (e - n))), M(qr(a)));
    };
    o(J3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r < e ? j : (a = c(n / (2 * (r - e))), M(qr(a)));
      };
    });
    var X3 = J3, Fa = 1.8378770664093456, Y3 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e <= n ? j : (a = e - n, 0.5 * (M(r) - Fa - r / a - 3 * M(a)));
    };
    o(Y3, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r <= e ? j : (a = r - e, 0.5 * (M(n) - Fa - n / a - 3 * M(a)));
      };
    });
    var _3 = Y3, el = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e <= n ? 0 : c(r / yr) * R(-r / (2 * (e - n))) / V(e - n, 1.5);
    };
    o(el, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= e ? 0 : c(n / yr) * R(-n / (2 * (r - e))) / V(r - e, 1.5);
      };
    });
    var nl = el, rl = function(e, n, r) {
      var a;
      return i(n) || i(r) || i(e) || r <= 0 || e < 0 || e > 1 ? NaN : n + r / (2 * (a = $e(e)) * a);
    };
    o(rl, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) || r < 0 || r > 1 ? NaN : (a = $e(r), e + n / (2 * a * a));
      };
    });
    var il = rl, al = Ue.isPrimitive, tl = Ge.isPrimitive;
    function Dn() {
      var e, n;
      if (!(this instanceof Dn))
        return arguments.length === 0 ? new Dn() : new Dn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !tl(e) || Vn(e))
          throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `" + e + "`");
        if (!al(n))
          throw new TypeError("invalid argument. Scale parameter `c` must be a positive number. Value: `" + n + "`");
      } else
        e = 0, n = 1;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!tl(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        e = r;
      } }), l(this, "c", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!al(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Dn.prototype, "entropy", function() {
      return z3(this.mu, this.c);
    }), m(Dn.prototype, "mean", function() {
      return j3(this.mu, this.c);
    }), m(Dn.prototype, "median", function() {
      return K3(this.mu, this.c);
    }), m(Dn.prototype, "mode", function() {
      return Q3(this.mu, this.c);
    }), m(Dn.prototype, "stdev", function() {
      return $3(this.mu, this.c);
    }), m(Dn.prototype, "variance", function() {
      return Z3(this.mu, this.c);
    }), o(Dn.prototype, "cdf", function(e) {
      return G3(e, this.mu, this.c);
    }), o(Dn.prototype, "logcdf", function(e) {
      return X3(e, this.mu, this.c);
    }), o(Dn.prototype, "logpdf", function(e) {
      return _3(e, this.mu, this.c);
    }), o(Dn.prototype, "pdf", function(e) {
      return nl(e, this.mu, this.c);
    }), o(Dn.prototype, "quantile", function(e) {
      return il(e, this.mu, this.c);
    });
    var $g = Dn, ol = function(e, n, r) {
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e < n ? 0 : 1 : 1 / (1 + R(-(e - n) / r));
    }, Zg = Tr.factory;
    o(ol, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Zg(e) : function(r) {
        return i(r) ? NaN : 1 / (1 + R(-(r - e) / n));
      };
    });
    var sl = ol, ul = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : M(n) + 2;
    }, fl = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 1.2;
    }, cl = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, ll = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, vl = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, pl = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 0;
    }, Jg = 1.7320508075688772, ml = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : n * T / Jg;
    }, hl = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : n * n * or / 3;
    }, dl = function(e) {
      return e <= 18 ? oe(R(e)) : e > 33.3 ? e : e + R(-e);
    }, gl = function(e, n, r) {
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e < n ? j : 0 : -dl(-(e - n) / r);
    }, Xg = fi.factory;
    o(gl, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Xg(e) : function(r) {
        return i(r) ? NaN : -dl(-(r - e) / n);
      };
    });
    var Nl = gl, yl = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 ? NaN : e === j ? j : r === 0 ? e === n ? H : j : (a = -J((e - n) / r)) - 2 * oe(R(a)) - M(r);
    }, Yg = Hr.factory;
    o(yl, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? Yg(e) : (r = M(n), function(a) {
        var s;
        return i(a) ? NaN : a === j ? j : (s = -J((a - e) / n)) - 2 * oe(R(s)) - r;
      });
    });
    var bl = yl, wl = function(e) {
      return i(e) ? NaN : Yn(e) ? 0 : e === 0 ? 1 : Lr(e) / (T * e);
    }, xl = function(e, n, r) {
      var a;
      return i(a = r * e) || i(n) || r < 0 || J(a) > 1 ? NaN : R(n * e) / wl(a);
    }, _g = U0.factory;
    o(xl, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? _g(e) : function(r) {
        var a = n * r;
        return J(a) > 1 ? NaN : R(e * r) / wl(a);
      };
    });
    var Sl = xl, Ml = function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || r < 0 ? NaN : e === j ? 0 : r === 0 ? e === n ? H : 0 : (s = J((e - n) / r), (a = R(-s)) / (r * V(1 + a, 2)));
    }, eN = Wr.factory;
    o(Ml, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? eN(e) : function(r) {
        var a, s;
        return i(r) ? NaN : r === j ? 0 : (s = J((r - e) / n), (a = R(-s)) / (n * V(1 + a, 2)));
      };
    });
    var kl = Ml, Tl = function(e, n, r) {
      return i(n) || i(r) || i(e) || r < 0 || e < 0 || e > 1 ? NaN : r === 0 ? n : n + r * M(e / (1 - e));
    }, nN = kr.factory;
    o(Tl, "factory", function(e, n) {
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? nN(e) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : e + n * M(r / (1 - r));
      };
    });
    var El = Tl, Pl = Ue.isPrimitive, Vl = Ge.isPrimitive;
    function fn() {
      var e, n;
      if (!(this instanceof fn))
        return arguments.length === 0 ? new fn() : new fn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !Vl(e) || Vn(e))
          throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `" + e + "`");
        if (!Pl(n))
          throw new TypeError("invalid argument. Scale parameter `s` must be a positive number. Value: `" + n + "`");
      } else
        e = 0, n = 1;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Vl(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        e = r;
      } }), l(this, "s", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Pl(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(fn.prototype, "entropy", function() {
      return ul(this.mu, this.s);
    }), m(fn.prototype, "kurtosis", function() {
      return fl(this.mu, this.s);
    }), m(fn.prototype, "mean", function() {
      return cl(this.mu, this.s);
    }), m(fn.prototype, "median", function() {
      return ll(this.mu, this.s);
    }), m(fn.prototype, "mode", function() {
      return vl(this.mu, this.s);
    }), m(fn.prototype, "skewness", function() {
      return pl(this.mu, this.s);
    }), m(fn.prototype, "stdev", function() {
      return ml(this.mu, this.s);
    }), m(fn.prototype, "variance", function() {
      return hl(this.mu, this.s);
    }), o(fn.prototype, "cdf", function(e) {
      return sl(e, this.mu, this.s);
    }), o(fn.prototype, "logcdf", function(e) {
      return Nl(e, this.mu, this.s);
    }), o(fn.prototype, "logpdf", function(e) {
      return bl(e, this.mu, this.s);
    }), o(fn.prototype, "mgf", function(e) {
      return Sl(e, this.mu, this.s);
    }), o(fn.prototype, "pdf", function(e) {
      return kl(e, this.mu, this.s);
    }), o(fn.prototype, "quantile", function(e) {
      return El(e, this.mu, this.s);
    });
    var rN = fn, Cl = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e < n ? 0 : 1 : (a = r * c(2), 0.5 * qr(-(e - n) / a));
    }, iN = Tr.factory;
    o(Cl, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? iN(e) : (r = n * c(2), function(a) {
        return i(a) ? NaN : 0.5 * qr(-(a - e) / r);
      });
    });
    var li = Cl, Al = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e <= 0 ? 0 : li(M(e), n, r);
    };
    o(Al, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r <= 0 ? 0 : li(M(r), e, n);
      };
    });
    var Il = Al, Bl = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : M(n * R(e + 0.5) * Ei);
    }, Rl = function(e, n) {
      var r, a;
      return i(e) || i(n) || n <= 0 ? NaN : (r = R(4 * (a = n * n)), r += 2 * R(3 * a), r += 3 * R(2 * a), r -= 6);
    }, Ll = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : R(e + n * n / 2);
    }, ql = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : R(e);
    }, Fl = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : R(e - n * n);
    }, Ol = function(e, n) {
      var r;
      return i(e) || i(n) || n <= 0 ? NaN : ((r = R(n * n)) + 2) * c(r - 1);
    }, Dl = function(e, n) {
      var r;
      return i(e) || i(n) || n <= 0 ? NaN : c((R(r = n * n) - 1) * R(2 * e + r));
    }, Ul = function(e, n) {
      var r;
      return i(e) || i(n) || n <= 0 ? NaN : (R(r = n * n) - 1) * R(2 * e + r);
    }, Hl = function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e <= 0 ? j : (s = -1 / (2 * (a = V(r, 2))), -0.5 * M(2 * a * T) - M(e) + s * V(M(e) - n, 2));
    };
    o(Hl, "factory", function(e, n) {
      var r, a, s;
      return i(e) || i(n) || n <= 0 ? N(NaN) : (r = V(n, 2), a = -0.5 * M(2 * r * T), s = -1 / (2 * r), function(u) {
        return i(u) ? NaN : u <= 0 ? j : a - M(u) + s * V(M(u) - e, 2);
      });
    });
    var Wl = Hl, Gl = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : e <= 0 ? 0 : (a = V(r, 2), 1 / e * (1 / c(2 * a * T)) * R(-1 / (2 * a) * V(M(e) - n, 2)));
    };
    o(Gl, "factory", function(e, n) {
      var r, a, s;
      return i(e) || i(n) || n <= 0 ? N(NaN) : (r = V(n, 2), a = 1 / c(2 * r * T), s = -1 / (2 * r), function(u) {
        return i(u) ? NaN : u <= 0 ? 0 : 1 / u * a * R(s * V(M(u) - e, 2));
      });
    });
    var zl = Gl, aN = function(e) {
      var n, r;
      return e === 0 ? -5087819496582806e-19 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.03348066254097446 + e * (e * (e * (0.02198786811111689 + e * (0.008226878746769157 + e * (e * (0 + 0 * e) - 0.005387729650712429))) - 0.03656379714117627) - 0.012692614766297404)) - 0.008368748197417368) - 5087819496582806e-19, r = 1 + e * (e * (e * (1.5622155839842302 + e * (0.662328840472003 + e * (e * (e * (0.07952836873415717 + e * (8862163904564247e-19 * e - 0.0023339375937419)) - 0.05273963823400997) - 0.7122890234154284))) - 1.5657455823417585) - 0.9700050433032906)) : (n = 0 + (e = 1 / e) * (0 + e * (e * (0.008226878746769157 + e * (0.02198786811111689 + e * (e * (e * (0.03348066254097446 + e * (-5087819496582806e-19 * e - 0.008368748197417368)) - 0.012692614766297404) - 0.03656379714117627))) - 0.005387729650712429)), r = 8862163904564247e-19 + e * (e * (0.07952836873415717 + e * (e * (e * (0.662328840472003 + e * (1.5622155839842302 + e * (e * (1 * e - 0.9700050433032906) - 1.5657455823417585))) - 0.7122890234154284) - 0.05273963823400997)) - 0.0023339375937419)), n / r);
    }, tN = function(e) {
      var n, r;
      return e === 0 ? -0.20243350835593876 : ((e < 0 ? -e : e) <= 1 ? (n = e * (0.10526468069939171 + e * (8.3705032834312 + e * (17.644729840837403 + e * (e * (e * (17.445385985570866 + e * (21.12946554483405 + -3.6719225470772936 * e)) - 44.6382324441787) - 18.851064805871424)))) - 0.20243350835593876, r = 1 + e * (6.242641248542475 + e * (3.971343795334387 + e * (e * (e * (48.560921310873994 + e * (10.826866735546016 + e * (1.7211476576120028 * e - 22.643693341313973))) - 20.14326346804852) - 28.66081804998)))) : (n = (e = 1 / e) * (21.12946554483405 + e * (17.445385985570866 + e * (e * (e * (17.644729840837403 + e * (8.3705032834312 + e * (0.10526468069939171 + -0.20243350835593876 * e))) - 18.851064805871424) - 44.6382324441787))) - 3.6719225470772936, r = 1.7211476576120028 + e * (e * (10.826866735546016 + e * (48.560921310873994 + e * (e * (e * (3.971343795334387 + e * (6.242641248542475 + 1 * e)) - 28.66081804998) - 20.14326346804852))) - 22.643693341313973)), n / r);
    }, oN = function(e) {
      var n, r;
      return e === 0 ? -0.1311027816799519 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.11703015634199525 + e * (0.38707973897260434 + e * (0.3377855389120359 + e * (0.14286953440815717 + e * (0.029015791000532906 + e * (0.0021455899538880526 + e * (e * (28522533178221704e-24 + -681149956853777e-24 * e) - 6794655751811263e-22))))))) - 0.16379404719331705) - 0.1311027816799519, r = 1 + e * (3.4662540724256723 + e * (5.381683457070069 + e * (4.778465929458438 + e * (2.5930192162362027 + e * (0.848854343457902 + e * (0.15226433829533179 + e * (0.011059242293464892 + e * (0 + e * (0 + 0 * e)))))))))) : (n = (e = 1 / e) * (28522533178221704e-24 + e * (e * (0.0021455899538880526 + e * (0.029015791000532906 + e * (0.14286953440815717 + e * (0.3377855389120359 + e * (0.38707973897260434 + e * (0.11703015634199525 + e * (-0.1311027816799519 * e - 0.16379404719331705))))))) - 6794655751811263e-22)) - 681149956853777e-24, r = 0 + e * (0 + e * (0 + e * (0.011059242293464892 + e * (0.15226433829533179 + e * (0.848854343457902 + e * (2.5930192162362027 + e * (4.778465929458438 + e * (5.381683457070069 + e * (3.4662540724256723 + 1 * e)))))))))), n / r);
    }, sN = function(e) {
      var n, r;
      return e === 0 ? -0.0350353787183178 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.018557330651423107 + e * (0.009508047013259196 + e * (0.0018712349281955923 + e * (15754461742496055e-20 + e * (460469890584318e-20 + e * (26633922742578204e-28 * e - 2304047769118826e-25)))))) - 0.0022242652921344794) - 0.0350353787183178, r = 1 + e * (1.3653349817554064 + e * (0.7620591645536234 + e * (0.22009110576413124 + e * (0.03415891436709477 + e * (0.00263861676657016 + e * (7646752923027944e-20 + e * (0 + 0 * e)))))))) : (n = 26633922742578204e-28 + (e = 1 / e) * (e * (460469890584318e-20 + e * (15754461742496055e-20 + e * (0.0018712349281955923 + e * (0.009508047013259196 + e * (0.018557330651423107 + e * (-0.0350353787183178 * e - 0.0022242652921344794)))))) - 2304047769118826e-25), r = 0 + e * (0 + e * (7646752923027944e-20 + e * (0.00263861676657016 + e * (0.03415891436709477 + e * (0.22009110576413124 + e * (0.7620591645536234 + e * (1.3653349817554064 + 1 * e)))))))), n / r);
    }, uN = function(e) {
      var n, r;
      return e === 0 ? -0.016743100507663373 : ((e < 0 ? -e : e) <= 1 ? (n = e * (e * (0.001056288621524929 + e * (20938631748758808e-20 + e * (14962478375834237e-21 + e * (44969678992770644e-23 + e * (4625961635228786e-24 + e * (9905570997331033e-32 * e - 2811287356288318e-29)))))) - 0.0011295143874558028) - 0.016743100507663373, r = 1 + e * (0.5914293448864175 + e * (0.1381518657490833 + e * (0.016074608709367652 + e * (9640118070051656e-19 + e * (27533547476472603e-21 + e * (282243172016108e-21 + e * (0 + 0 * e)))))))) : (n = 9905570997331033e-32 + (e = 1 / e) * (e * (4625961635228786e-24 + e * (44969678992770644e-23 + e * (14962478375834237e-21 + e * (20938631748758808e-20 + e * (0.001056288621524929 + e * (-0.016743100507663373 * e - 0.0011295143874558028)))))) - 2811287356288318e-29), r = 0 + e * (0 + e * (282243172016108e-21 + e * (27533547476472603e-21 + e * (9640118070051656e-19 + e * (0.016074608709367652 + e * (0.1381518657490833 + e * (0.5914293448864175 + 1 * e)))))))), n / r);
    }, fN = 0.08913147449493408, cN = 2.249481201171875, lN = 0.807220458984375, vN = 0.9399557113647461, pN = 0.9836282730102539, jl = function(e) {
      var n, r, a, s, u;
      return i(e) ? NaN : e === 1 ? H : e === -1 ? j : e === 0 ? e : e > 1 || e < -1 ? NaN : (e < 0 ? (n = -1, r = -e) : (n = 1, r = e), a = 1 - r, r <= 0.5 ? (s = r * (r + 10), u = aN(r), n * (s * fN + s * u)) : a >= 0.25 ? (s = c(-2 * M(a)), u = tN(a -= 0.25), n * (s / (cN + u))) : (a = c(-M(a))) < 3 ? (u = oN(a - 1.125), n * (lN * a + u * a)) : a < 6 ? (u = sN(a - 3), n * (vN * a + u * a)) : (u = uN(a - 6), n * (pN * a + u * a)));
    }, Kl = function(e, n, r) {
      return i(n) || i(r) || i(e) || r < 0 || e < 0 || e > 1 ? NaN : r === 0 ? n : n + r * c(2) * jl(2 * e - 1);
    }, mN = kr.factory;
    o(Kl, "factory", function(e, n) {
      var r, a;
      return i(e) || i(n) || n < 0 ? N(NaN) : (n === 0 && mN(e), r = e, a = n * c(2), function(s) {
        return i(s) || s < 0 || s > 1 ? NaN : r + a * jl(2 * s - 1);
      });
    });
    var Oa = Kl, Ql = function(e, n, r) {
      return i(n) || i(r) || i(e) || r <= 0 || e < 0 || e > 1 ? NaN : R(n + r * Oa(e, 0, 1));
    };
    o(Ql, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : R(e + n * Oa(r, 0, 1));
      };
    });
    var $l = Ql, Zl = Ue.isPrimitive, Jl = Ge.isPrimitive;
    function In() {
      var e, n;
      if (!(this instanceof In))
        return arguments.length === 0 ? new In() : new In(arguments[0], arguments[1]);
      if (arguments.length) {
        if (n = arguments[0], e = arguments[1], !Jl(n) || Vn(n))
          throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `" + n + "`");
        if (!Zl(e))
          throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `" + e + "`");
      } else
        n = 0, e = 1;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Jl(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        n = r;
      } }), l(this, "sigma", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Zl(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), this;
    }
    m(In.prototype, "entropy", function() {
      return Bl(this.mu, this.sigma);
    }), m(In.prototype, "kurtosis", function() {
      return Rl(this.mu, this.sigma);
    }), m(In.prototype, "mean", function() {
      return Ll(this.mu, this.sigma);
    }), m(In.prototype, "median", function() {
      return ql(this.mu, this.sigma);
    }), m(In.prototype, "mode", function() {
      return Fl(this.mu, this.sigma);
    }), m(In.prototype, "skewness", function() {
      return Ol(this.mu, this.sigma);
    }), m(In.prototype, "stdev", function() {
      return Dl(this.mu, this.sigma);
    }), m(In.prototype, "variance", function() {
      return Ul(this.mu, this.sigma);
    }), o(In.prototype, "cdf", function(e) {
      return Il(e, this.mu, this.sigma);
    }), o(In.prototype, "logpdf", function(e) {
      return Wl(e, this.mu, this.sigma);
    }), o(In.prototype, "pdf", function(e) {
      return zl(e, this.mu, this.sigma);
    }), o(In.prototype, "quantile", function(e) {
      return $l(e, this.mu, this.sigma);
    });
    var hN = In, Xl = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n <= 0 || r < 0 || r > 1 ? NaN : e < 0 ? 0 : e === H ? 1 : (a = ye(e + 1e-7), Qe(r, n, a + 1));
    };
    o(Xl, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r < 0 ? 0 : r === H ? 1 : (a = ye(r + 1e-7), Qe(n, e, a + 1));
      };
    });
    var vi = Xl, Yl = function(e, n) {
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? NaN : 6 / e + n * n / ((1 - n) * e);
    }, _l = function(e, n) {
      return i(e) || i(n) ? NaN : e <= 0 || n < 0 || n > 1 ? NaN : (1 - n) * e / n;
    }, e6 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? NaN : ye((1 - n) * (e - 1) / n);
    }, n6 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? NaN : (2 - n) / c((1 - n) * e);
    }, r6 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? NaN : c((1 - n) * e) / n;
    }, i6 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? NaN : (1 - n) * e / (n * n);
    }, dN = function(e, n, r, a, s) {
      var u, p, k, b, C, O, B, A, W, z, K, $, ae, Q;
      if (!s)
        return V(r, e) * V(a, n);
      if (b = e + qe - 0.5, C = n + qe - 0.5, O = (ae = e + n) + qe - 0.5, u = _e(ae), u /= _e(e) * _e(n), u *= c(C / Kn), u *= c(b / O), A = (a * e - r * C) / C, Se(J(B = (r * n - a * b) / b), J(A)) < 0.2)
        if (B * A > 0 || Se(e, n) < 1)
          J(B) < 0.1 ? u *= R(e * oe(B)) : u *= V(r * O / b, e), J(A) < 0.1 ? u *= R(n * oe(A)) : u *= V(a * O / C, n);
        else if (Ee(J(B), J(A)) < 0.5)
          k = n / e, (p = e < n) && k * A < 0.1 || !p && B / k > 0.1 ? (W = Le(k * oe(A)), W = e * oe(W = B + W + W * B), u *= R(W)) : (W = Le(oe(B) / k), W = n * oe(W = A + W + W * A), u *= R(W));
        else if (J(B) < J(A))
          if ((Q = e * oe(B) + n * M(a * O / C)) <= de || Q >= ce) {
            if ((Q += M(u)) >= ce)
              return NaN;
            u = R(Q);
          } else
            u *= R(Q);
        else if ((Q = n * oe(A) + e * M(r * O / b)) <= de || Q >= ce) {
          if ((Q += M(u)) >= ce)
            return NaN;
          u = R(Q);
        } else
          u *= R(Q);
      else if ($ = a * O / C, B = e * M(K = r * O / b), A = n * M($), B >= ce || B <= de || A >= ce || A <= de)
        if (e < n)
          if (z = V($, n / e), (W = e * (M(K) + M(z))) < ce && W > de)
            u *= V(z * K, e);
          else {
            if ((A += B + M(u)) >= ce)
              return NaN;
            u = R(A);
          }
        else if (z = V(K, e / n), (W = (M(z) + M($)) * n) < ce && W > de)
          u *= V(z * $, n);
        else {
          if ((A += B + M(u)) >= ce)
            return NaN;
          u = R(A);
        }
      else
        u *= V(K, e) * V($, n);
      return u;
    }, a6 = function(e, n, r) {
      var a;
      return e === 1 ? 0 : (a = dN(n, r, e, 1 - e, !0), a /= (1 - e) * e);
    }, t6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 || r > 1 ? NaN : ee(e) && r !== 0 ? M(r) - M(n + e) + M(a6(r, n, e + 1)) : j;
    };
    o(t6, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 || n > 1 ? N(NaN) : function(r) {
        return i(r) ? NaN : ee(r) ? M(n) - M(e + r) + M(a6(n, e, r + 1)) : j;
      };
    });
    var o6 = t6, s6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r < 0 || r > 1 || e >= -M(r) ? NaN : V((1 - r) * R(e) / (1 - r * R(e)), n);
    };
    o(s6, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? N(NaN) : function(r) {
        return r >= -M(n) ? NaN : V((1 - n) * R(r) / (1 - n * R(r)), e);
      };
    });
    var u6 = s6, gN = function(e, n, r, a, s) {
      var u, p, k, b, C, O, B, A, W, z, K, $, ae, Q;
      if (!s)
        return V(r, e) * V(a, n);
      if (b = e + qe - 0.5, C = n + qe - 0.5, O = (ae = e + n) + qe - 0.5, u = _e(ae), u /= _e(e) * _e(n), u *= c(C / Kn), u *= c(b / O), A = (a * e - r * C) / C, Se(J(B = (r * n - a * b) / b), J(A)) < 0.2)
        if (B * A > 0 || Se(e, n) < 1)
          J(B) < 0.1 ? u *= R(e * oe(B)) : u *= V(r * O / b, e), J(A) < 0.1 ? u *= R(n * oe(A)) : u *= V(a * O / C, n);
        else if (Ee(J(B), J(A)) < 0.5)
          k = n / e, (p = e < n) && k * A < 0.1 || !p && B / k > 0.1 ? (W = Le(k * oe(A)), W = e * oe(W = B + W + W * B), u *= R(W)) : (W = Le(oe(B) / k), W = n * oe(W = A + W + W * A), u *= R(W));
        else if (J(B) < J(A))
          if ((Q = e * oe(B) + n * M(a * O / C)) <= de || Q >= ce) {
            if ((Q += M(u)) >= ce)
              return NaN;
            u = R(Q);
          } else
            u *= R(Q);
        else if ((Q = n * oe(A) + e * M(r * O / b)) <= de || Q >= ce) {
          if ((Q += M(u)) >= ce)
            return NaN;
          u = R(Q);
        } else
          u *= R(Q);
      else if ($ = a * O / C, B = e * M(K = r * O / b), A = n * M($), B >= ce || B <= de || A >= ce || A <= de)
        if (e < n)
          if (z = V($, n / e), (W = e * (M(K) + M(z))) < ce && W > de)
            u *= V(z * K, e);
          else {
            if ((A += B + M(u)) >= ce)
              return NaN;
            u = R(A);
          }
        else if (z = V(K, e / n), (W = (M(z) + M($)) * n) < ce && W > de)
          u *= V(z * $, n);
        else {
          if ((A += B + M(u)) >= ce)
            return NaN;
          u = R(A);
        }
      else
        u *= V(K, e) * V($, n);
      return u;
    }, f6 = function(e, n, r) {
      var a;
      return e === 1 ? 0 : (a = gN(n, r, e, 1 - e, !0), a /= (1 - e) * e);
    }, c6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 || r > 1 ? NaN : ee(e) && r !== 0 ? r / (n + e) * f6(r, n, e + 1) : 0;
    };
    o(c6, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 || n > 1 ? N(NaN) : function(r) {
        return i(r) ? NaN : ee(r) ? n / (e + r) * f6(n, e, r + 1) : 0;
      };
    });
    var l6 = c6, Da = { left: function(e, n, r, a) {
      for (; ; ) {
        if (e === 0 || vi(e - 1, r, a) < n)
          return e;
        e -= 1;
      }
    }, right: function(e, n, r, a) {
      for (; ; )
        if (vi(e += 1, r, a) >= n)
          return e;
    } }, v6 = function(e, n, r) {
      var a, s, u, p, k, b;
      return i(n) || i(r) || i(e) || n <= 0 || r < 0 || r > 1 || e < 0 || e > 1 ? NaN : e === 0 ? 0 : e === 1 ? H : (p = n * (b = 1 - r) / r, a = 1 / (u = c(n * b) / r), k = e < 0.5 ? -$e(2 * e) * Pe : $e(2 * (1 - e)) * Pe, s = jn(p + u * (k + a * (k * k - 1) / 6)), vi(s, n, r) >= e ? Da.left(s, e, n, r) : Da.right(s, e, n, r));
    };
    o(v6, "factory", function(e, n) {
      var r, a, s, u;
      return i(e) || i(n) || e <= 0 || n < 0 || n > 1 ? N(NaN) : (s = e * (u = 1 - n) / n, a = c(e * u) / n, r = (2 / n - 1) / a, function(p) {
        var k, b;
        return i(p) || p < 0 || p > 1 ? NaN : p === 0 ? 0 : p === 1 ? H : (b = p < 0.5 ? -$e(2 * p) * Pe : $e(2 * (1 - p)) * Pe, k = jn(s + a * (b + r * (b * b - 1) / 6)), vi(k, e, n) >= p ? Da.left(k, p, e, n) : Da.right(k, p, e, n));
      });
    });
    var p6 = v6, m6 = ta.isPrimitive, h6 = Ue.isPrimitive;
    function Un() {
      var e, n;
      if (!(this instanceof Un))
        return arguments.length === 0 ? new Un() : new Un(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !h6(e))
          throw new TypeError("invalid argument. Number of trials until experiment is stopped `r` must be a positive number. Value: `" + e + "`");
        if (!m6(n))
          throw new TypeError("invalid argument. Success probability `p` must be a number between 0 and 1. Value: `" + n + "`");
      } else
        e = 1, n = 0.5;
      return l(this, "r", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!h6(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "p", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!m6(r))
          throw new TypeError("invalid value. Must be a number between 0 and 1. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Un.prototype, "kurtosis", function() {
      return Yl(this.r, this.p);
    }), m(Un.prototype, "mean", function() {
      return _l(this.r, this.p);
    }), m(Un.prototype, "mode", function() {
      return e6(this.r, this.p);
    }), m(Un.prototype, "skewness", function() {
      return n6(this.r, this.p);
    }), m(Un.prototype, "stdev", function() {
      return r6(this.r, this.p);
    }), m(Un.prototype, "variance", function() {
      return i6(this.r, this.p);
    }), o(Un.prototype, "cdf", function(e) {
      return vi(e, this.r, this.p);
    }), o(Un.prototype, "logpmf", function(e) {
      return o6(e, this.r, this.p);
    }), o(Un.prototype, "mgf", function(e) {
      return u6(e, this.r, this.p);
    }), o(Un.prototype, "pmf", function(e) {
      return l6(e, this.r, this.p);
    }), o(Un.prototype, "quantile", function(e) {
      return p6(e, this.r, this.p);
    });
    var NN = Un, d6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 0.5 * M(yr * Kn * n * n);
    }, g6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 0;
    }, N6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, y6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, b6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : e;
    }, w6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : 0;
    }, x6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : n;
    }, S6 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : n * n;
    }, M6 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e === n ? H : j : (a = V(r, 2), -0.5 * (2 * M(r) + Fa) + -1 / (2 * a) * V(e - n, 2));
    }, yN = Hr.factory;
    o(M6, "factory", function(e, n) {
      var r, a, s;
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? yN(e) : (r = V(n, 2), a = -0.5 * (2 * M(n) + Fa), s = -1 / (2 * r), function(u) {
        return a + s * V(u - e, 2);
      });
    });
    var k6 = M6, T6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || r <= 0 ? NaN : R(n * e + 0.5 * V(r * e, 2));
    };
    o(T6, "factory", function(e, n) {
      return i(e) || i(n) || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : R(e * r + 0.5 * V(n * r, 2));
      };
    });
    var E6 = T6, P6 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || r < 0 ? NaN : r === 0 ? e === n ? H : 0 : (a = V(r, 2), 1 / c(a * yr) * R(-1 / (2 * a) * V(e - n, 2)));
    }, bN = Wr.factory;
    o(P6, "factory", function(e, n) {
      var r, a, s;
      return i(e) || i(n) || n < 0 ? N(NaN) : n === 0 ? bN(e) : (r = V(n, 2), a = 1 / c(r * yr), s = -1 / (2 * r), function(u) {
        return i(u) ? NaN : a * R(s * V(u - e, 2));
      });
    });
    var V6 = P6, C6 = Ue.isPrimitive, A6 = Ge.isPrimitive;
    function bn() {
      var e, n;
      if (!(this instanceof bn))
        return arguments.length === 0 ? new bn() : new bn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (n = arguments[0], e = arguments[1], !A6(n) || Vn(n))
          throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `" + n + "`");
        if (!C6(e))
          throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `" + e + "`");
      } else
        n = 0, e = 1;
      return l(this, "mu", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!A6(r) || Vn(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        n = r;
      } }), l(this, "sigma", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!C6(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), this;
    }
    m(bn.prototype, "entropy", function() {
      return d6(this.mu, this.sigma);
    }), m(bn.prototype, "kurtosis", function() {
      return g6(this.mu, this.sigma);
    }), m(bn.prototype, "mean", function() {
      return N6(this.mu, this.sigma);
    }), m(bn.prototype, "median", function() {
      return y6(this.mu, this.sigma);
    }), m(bn.prototype, "mode", function() {
      return b6(this.mu, this.sigma);
    }), m(bn.prototype, "skewness", function() {
      return w6(this.mu, this.sigma);
    }), m(bn.prototype, "stdev", function() {
      return x6(this.mu, this.sigma);
    }), m(bn.prototype, "variance", function() {
      return S6(this.mu, this.sigma);
    }), o(bn.prototype, "cdf", function(e) {
      return li(e, this.mu, this.sigma);
    }), o(bn.prototype, "logpdf", function(e) {
      return k6(e, this.mu, this.sigma);
    }), o(bn.prototype, "mgf", function(e) {
      return E6(e, this.mu, this.sigma);
    }), o(bn.prototype, "pdf", function(e) {
      return V6(e, this.mu, this.sigma);
    }), o(bn.prototype, "quantile", function(e) {
      return Oa(e, this.mu, this.sigma);
    });
    var wN = bn, I6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < r ? 0 : 1 - V(r / e, n);
    };
    o(I6, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r < n ? 0 : 1 - V(n / r, e);
      };
    });
    var B6 = I6, R6 = function(e, n) {
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : M(n / e * R(1 + 1 / e));
    }, L6 = function(e, n) {
      var r;
      return i(e) || e <= 4 || i(n) || n <= 0 ? NaN : (r = 6 * (V(e, 3) + V(e, 2) - 6 * e - 2), r /= e * (e - 3) * (e - 4));
    }, q6 = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : e <= 1 ? H : e * n / (e - 1);
    }, F6 = function(e, n) {
      return e <= 0 || n <= 0 ? NaN : n * V(2, 1 / e);
    }, O6 = function(e, n) {
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : n;
    }, D6 = function(e, n) {
      return i(e) || e <= 3 || i(n) || n <= 0 ? NaN : 2 * (1 + e) / (e - 3) * c((e - 2) / e);
    }, U6 = function(e, n) {
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : e < 2 ? H : n * n * e / (V(e - 1, 2) * (e - 2));
    }, H6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < r ? j : oe(-V(r / e, n));
    };
    o(H6, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r < n ? j : oe(-V(n / r, e));
      };
    });
    var W6 = H6, G6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e >= r ? M(n) + n * M(r) - (n + 1) * M(e) : j;
    };
    o(G6, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = M(e) + e * M(n), function(a) {
        return i(a) ? NaN : a >= n ? r - (e + 1) * M(a) : j;
      });
    });
    var z6 = G6, j6 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e >= r ? n * V(r, n) / V(e, n + 1) : 0;
    };
    o(j6, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = e * V(n, e), function(a) {
        var s;
        return i(a) ? NaN : a >= n ? (s = V(a, e + 1), r / s) : 0;
      });
    });
    var K6 = j6, Q6 = function(e, n, r) {
      return i(n) || i(r) || i(e) || n <= 0 || r <= 0 || e < 0 || e > 1 ? NaN : r / V(1 - e, 1 / n);
    };
    o(Q6, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = 1 / e, function(a) {
        return i(a) || a < 0 || a > 1 ? NaN : n / V(1 - a, r);
      });
    });
    var $6 = Q6, Ua = Ue.isPrimitive;
    function Bn() {
      var e, n;
      if (!(this instanceof Bn))
        return arguments.length === 0 ? new Bn() : new Bn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !Ua(e))
          throw new TypeError("invalid argument. First shape parameter `alpha` must be a positive number. Value: `" + e + "`");
        if (!Ua(n))
          throw new TypeError("invalid argument. Second shape parameter `beta` must be a positive number. Value: `" + n + "`");
      } else
        e = 1, n = 1;
      return l(this, "alpha", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Ua(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), l(this, "beta", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Ua(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Bn.prototype, "entropy", function() {
      return R6(this.alpha, this.beta);
    }), m(Bn.prototype, "kurtosis", function() {
      return L6(this.alpha, this.beta);
    }), m(Bn.prototype, "mean", function() {
      return q6(this.alpha, this.beta);
    }), m(Bn.prototype, "median", function() {
      return F6(this.alpha, this.beta);
    }), m(Bn.prototype, "mode", function() {
      return O6(this.alpha, this.beta);
    }), m(Bn.prototype, "skewness", function() {
      return D6(this.alpha, this.beta);
    }), m(Bn.prototype, "variance", function() {
      return U6(this.alpha, this.beta);
    }), o(Bn.prototype, "cdf", function(e) {
      return B6(e, this.alpha, this.beta);
    }), o(Bn.prototype, "logcdf", function(e) {
      return W6(e, this.alpha, this.beta);
    }), o(Bn.prototype, "logpdf", function(e) {
      return z6(e, this.alpha, this.beta);
    }), o(Bn.prototype, "pdf", function(e) {
      return K6(e, this.alpha, this.beta);
    }), o(Bn.prototype, "quantile", function(e) {
      return $6(e, this.alpha, this.beta);
    });
    var xN = Bn, SN = function(e, n) {
      var r;
      return i(e) || e <= 0 || i(n) || n <= 0 ? NaN : e < 2 ? H : (r = n * n * e / (V(e - 1, 2) * (e - 2)), c(r));
    }, Z6 = function(e, n) {
      return i(e) || i(n) || n < 0 ? NaN : e < 0 ? 0 : n === 0 || e === H ? 1 : fr(n, ye(e) + 1, !0, !0);
    }, MN = Tr.factory;
    o(Z6, "factory", function(e) {
      return i(e) || e < 0 ? N(NaN) : e === 0 ? MN(0) : function(n) {
        return i(n) ? NaN : n < 0 ? 0 : n === H ? 1 : fr(e, ye(n) + 1, !0, !0);
      };
    });
    var pi = Z6, J6 = function(e) {
      var n, r;
      return i(e) || e < 0 ? NaN : e === 0 ? 0 : (n = function(a) {
        var s, u;
        return u = 1, s = a, function() {
          return (s *= a) * we(u += 1) / Pi(u);
        };
      }(e), r = e * (1 - M(e)), r += R(-e) * ca(n));
    }, X6 = function(e) {
      return i(e) || e <= 0 ? NaN : 1 / e;
    }, Y6 = function(e) {
      return i(e) || e < 0 ? NaN : e;
    }, _6 = function(e) {
      return i(e) || e < 0 ? NaN : e === 0 ? 0 : ye(e + 1 / 3 - 0.02 / e);
    }, e5 = function(e) {
      return i(e) || e < 0 ? NaN : ye(e);
    }, n5 = function(e) {
      return i(e) || e <= 0 ? NaN : 1 / c(e);
    }, r5 = function(e) {
      return i(e) || e < 0 ? NaN : c(e);
    }, i5 = function(e) {
      return i(e) || e < 0 ? NaN : e;
    }, a5 = function(e, n) {
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e === 0 ? 0 : j : ee(e) && e !== H ? e * M(n) - n - we(e) : j;
    }, kN = xa.factory;
    o(a5, "factory", function(e) {
      return i(e) || e < 0 ? N(NaN) : e === 0 ? kN(0) : function(n) {
        return i(n) ? NaN : ee(n) && n !== H ? n * M(e) - e - we(n) : j;
      };
    });
    var t5 = a5, o5 = function(e, n) {
      return i(e) || i(n) || n <= 0 ? NaN : R(n * (R(e) - 1));
    };
    o(o5, "factory", function(e) {
      return i(e) || e <= 0 ? N(NaN) : function(n) {
        return R(e * (R(n) - 1));
      };
    });
    var s5 = o5, u5 = function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e === 0 ? 1 : 0 : ee(e) && e !== H ? (r = e * M(n) - n - we(e), R(r)) : 0;
    }, TN = Sa.factory;
    o(u5, "factory", function(e) {
      return i(e) || e < 0 ? N(NaN) : e === 0 ? TN(0) : function(n) {
        var r;
        return i(n) ? NaN : ee(n) && n !== H ? (r = n * M(e) - e - we(n), R(r)) : 0;
      };
    });
    var f5 = u5, Ha = { left: function(e, n, r) {
      for (; ; ) {
        if (e === 0 || pi(e - 1, r) < n)
          return e;
        e -= 1;
      }
    }, right: function(e, n, r) {
      for (; ; )
        if (pi(e += 1, r) >= n)
          return e;
    } }, c5 = function(e, n) {
      var r, a, s, u;
      return i(n) || n < 0 ? NaN : i(e) || e < 0 || e > 1 ? NaN : n === 0 || e === 0 ? 0 : e === 1 ? H : (r = 1 / (s = c(n)), u = e < 0.5 ? -$e(2 * e) * Pe : $e(2 * (1 - e)) * Pe, a = jn(n + s * (u + r * (u * u - 1) / 6)), pi(a, n) >= e ? Ha.left(a, e, n) : Ha.right(a, e, n));
    }, EN = kr.factory;
    o(c5, "factory", function(e) {
      var n, r;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? EN(0) : (r = c(e), n = 1 / r, function(a) {
        var s, u;
        return i(a) || a < 0 || a > 1 ? NaN : a === 0 ? 0 : a === 1 ? H : (u = a < 0.5 ? -$e(2 * a) * Pe : $e(2 * (1 - a)) * Pe, s = jn(e + r * (u + n * (u * u - 1) / 6)), pi(s, e) >= a ? Ha.left(s, a, e) : Ha.right(s, a, e));
      });
    });
    var l5 = c5, v5 = Ue.isPrimitive;
    function wn() {
      var e;
      if (!(this instanceof wn))
        return arguments.length === 0 ? new wn() : new wn(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !v5(e))
          throw new TypeError("invalid argument. Mean parameter `lambda` must be a positive number. Value: `" + e + "`");
      } else
        e = 1;
      return l(this, "lambda", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!v5(n))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(wn.prototype, "entropy", function() {
      return J6(this.lambda);
    }), m(wn.prototype, "kurtosis", function() {
      return X6(this.lambda);
    }), m(wn.prototype, "mean", function() {
      return Y6(this.lambda);
    }), m(wn.prototype, "median", function() {
      return _6(this.lambda);
    }), m(wn.prototype, "mode", function() {
      return e5(this.lambda);
    }), m(wn.prototype, "skewness", function() {
      return n5(this.lambda);
    }), m(wn.prototype, "stdev", function() {
      return r5(this.lambda);
    }), m(wn.prototype, "variance", function() {
      return i5(this.lambda);
    }), o(wn.prototype, "cdf", function(e) {
      return pi(e, this.lambda);
    }), o(wn.prototype, "logpmf", function(e) {
      return t5(e, this.lambda);
    }), o(wn.prototype, "mgf", function(e) {
      return s5(e, this.lambda);
    }), o(wn.prototype, "pmf", function(e) {
      return f5(e, this.lambda);
    }), o(wn.prototype, "quantile", function(e) {
      return l5(e, this.lambda);
    });
    var PN = wn, p5 = function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e < 0 ? 0 : 1 : e < 0 ? 0 : (r = V(n, 2), 1 - R(-V(e, 2) / (2 * r)));
    }, VN = Tr.factory;
    o(p5, "factory", function(e) {
      var n;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? VN(0) : (n = V(e, 2), function(r) {
        return i(r) ? NaN : r < 0 ? 0 : 1 - R(-V(r, 2) / (2 * n));
      });
    });
    var m5 = p5, h5 = function(e) {
      return i(e) || e <= 0 ? NaN : 1 + M(e / Pe) + 0.5 * Rr;
    }, CN = -(6 * T * T - 24 * T + 16) / ((4 - T) * (4 - T)), d5 = function(e) {
      return i(e) || e < 0 ? NaN : CN;
    }, G0 = 1.2533141373155003, g5 = function(e) {
      return i(e) || e < 0 ? NaN : e * G0;
    }, AN = c(2 * Oe), N5 = function(e) {
      return i(e) || e < 0 ? NaN : e * AN;
    }, y5 = function(e) {
      return i(e) || e < 0 ? NaN : e;
    }, IN = 3.544907701811032 * (T - 3) / V(4 - T, 1.5), b5 = function(e) {
      return i(e) || e < 0 ? NaN : IN;
    }, BN = c(4 - T), w5 = function(e) {
      return i(e) || e < 0 ? NaN : BN * e / Pe;
    }, x5 = function(e) {
      return i(e) || e < 0 ? NaN : (4 - T) * e * e / 2;
    }, S5 = function(e, n) {
      var r, a;
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e < 0 ? j : 0 : e < 0 ? j : (r = V(n, 2), (a = -V(e, 2) / (2 * r)) < pr ? oe(-R(a)) : M(-Le(a)));
    }, RN = fi.factory;
    o(S5, "factory", function(e) {
      var n;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? RN(0) : (n = V(e, 2), function(r) {
        var a;
        return i(r) ? NaN : r < 0 ? j : (a = -V(r, 2) / (2 * n)) < pr ? oe(-R(a)) : M(-Le(a));
      });
    });
    var M5 = S5, k5 = function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e === 0 ? H : j : e < 0 || e === H ? j : (r = V(n, 2), M(1 / r * e) - V(e, 2) / (2 * r));
    }, LN = Hr.factory;
    o(k5, "factory", function(e) {
      var n, r;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? LN(0) : (r = V(e, 2), n = 1 / r, function(a) {
        return i(a) ? NaN : a < 0 || a === H ? j : M(n * a) - V(a, 2) / (2 * r);
      });
    });
    var T5 = k5, E5 = 1e-300, qN = 2848094538889218e-321, FN = 3725290298461914e-24, P5 = 0.8450629115104675, ON = 0.1283791670955126, DN = 1.0270333367641007, UN = 0.12837916709551256, HN = 1, WN = -0.0023621185607526594, GN = 1, zN = -0.009864944034847148, jN = 1, KN = -0.0098649429247001, QN = 1, V5 = function(e) {
      var n, r, a, s, u, p, k;
      return i(e) ? NaN : e === H ? 1 : e === j ? -1 : e === 0 ? e : (e < 0 ? (n = !0, r = -e) : (n = !1, r = e), r < 0.84375 ? r < FN ? r < qN ? 0.125 * (8 * e + DN * e) : e + ON * e : e + e * ((s = UN + (a = e * e) * F9(a)) / (u = HN + a * D9(a))) : r < 1.25 ? (p = WN + (u = r - 1) * H9(u), k = GN + u * G9(u), n ? -P5 - p / k : P5 + p / k) : r >= 6 ? n ? E5 - 1 : 1 - E5 : (u = 1 / (r * r), r < 2.857142857142857 ? (s = zN + u * j9(u), u = jN + u * Q9(u)) : (s = KN + u * Z9(u), u = QN + u * X9(u)), a = _n(r, 0), s = R(-a * a - 0.5625) * R((a - r) * (a + r) + s / u), n ? s / r - 1 : 1 - s / r));
    }, C5 = function(e, n) {
      var r, a;
      return i(e) || i(n) || n < 0 ? NaN : (a = 1 + (r = e * n) * R(r * r / 2), a *= G0 * (V5(r / Pe) + 1));
    };
    o(C5, "factory", function(e) {
      return i(e) || e < 0 ? N(NaN) : function(n) {
        var r, a;
        return i(n) ? NaN : (a = 1 + (r = n * e) * R(r * r / 2), a *= G0 * (V5(r / Pe) + 1));
      };
    });
    var A5 = C5, I5 = function(e, n) {
      var r;
      return i(e) || i(n) || n < 0 ? NaN : n === 0 ? e === 0 ? H : 0 : e < 0 || e === H ? 0 : 1 / (r = V(n, 2)) * e * R(-V(e, 2) / (2 * r));
    }, $N = Wr.factory;
    o(I5, "factory", function(e) {
      var n, r;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? $N(0) : (r = V(e, 2), n = 1 / r, function(a) {
        return i(a) ? NaN : a < 0 || a === H ? 0 : n * a * R(-V(a, 2) / (2 * r));
      });
    });
    var B5 = I5, R5 = function(e, n) {
      return i(n) || n < 0 ? NaN : i(e) || e < 0 || e > 1 ? NaN : n === 0 ? 0 : c(n * n * -2 * oe(-e));
    }, ZN = kr.factory;
    o(R5, "factory", function(e) {
      var n;
      return i(e) || e < 0 ? N(NaN) : e === 0 ? ZN(0) : (n = e * e, function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : c(-2 * n * oe(-r));
      });
    });
    var L5 = R5, q5 = Ue.isPrimitive;
    function cn() {
      var e;
      if (!(this instanceof cn))
        return arguments.length === 0 ? new cn() : new cn(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !q5(e))
          throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `" + e + "`");
      } else
        e = 1;
      return l(this, "sigma", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!q5(n))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(cn.prototype, "entropy", function() {
      return h5(this.sigma);
    }), m(cn.prototype, "kurtosis", function() {
      return d5(this.sigma);
    }), m(cn.prototype, "mean", function() {
      return g5(this.sigma);
    }), m(cn.prototype, "median", function() {
      return N5(this.sigma);
    }), m(cn.prototype, "mode", function() {
      return y5(this.sigma);
    }), m(cn.prototype, "skewness", function() {
      return b5(this.k, this.sigma);
    }), m(cn.prototype, "stdev", function() {
      return w5(this.sigma);
    }), m(cn.prototype, "variance", function() {
      return x5(this.sigma);
    }), o(cn.prototype, "cdf", function(e) {
      return m5(e, this.sigma);
    }), o(cn.prototype, "logcdf", function(e) {
      return M5(e, this.sigma);
    }), o(cn.prototype, "logpdf", function(e) {
      return T5(e, this.sigma);
    }), o(cn.prototype, "mgf", function(e) {
      return A5(e, this.sigma);
    }), o(cn.prototype, "pdf", function(e) {
      return B5(e, this.sigma);
    }), o(cn.prototype, "quantile", function(e) {
      return L5(e, this.sigma);
    });
    var JN = cn, mi = function(e) {
      return e == e && e > j && e < H;
    }, XN = /./, F5 = function(e) {
      return typeof e == "boolean";
    }, YN = Z(), O5 = function(e) {
      return typeof e == "object" && (e instanceof Boolean || (YN ? We(e) : pe(e) === "[object Boolean]"));
    }, z0 = function(e) {
      return F5(e) || O5(e);
    };
    o(z0, "isPrimitive", F5), o(z0, "isObject", O5);
    var _N = z0, ey = function() {
      return new Function("return this;")();
    }, D5 = typeof self == "object" ? self : null, U5 = typeof window == "object" ? window : null, j0 = {};
    (function(e) {
      (function() {
        j0 = typeof e == "object" ? e : null;
      }).call(this);
    }).call(this, typeof Hi < "u" ? Hi : typeof self < "u" ? self : typeof window < "u" ? window : {});
    var ny = _N.isPrimitive, H5 = function(e) {
      if (arguments.length) {
        if (!ny(e))
          throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `" + e + "`.");
        if (e)
          return ey();
      }
      if (D5)
        return D5;
      if (U5)
        return U5;
      if (j0)
        return j0;
      throw new Error("unexpected error. Unable to resolve global object.");
    }(), ry = H5.document && H5.document.childNodes, iy = Int8Array, ay = function() {
      return typeof XN == "function" || typeof iy == "object" || typeof ry == "function";
    }, K0 = function() {
      return /^\s*function\s*([^(]*)/i;
    }, ty = K0();
    o(K0, "REGEXP", ty);
    var oy = K0, sy = Array.isArray ? Array.isArray : function(e) {
      return pe(e) === "[object Array]";
    }, Q0 = function(e) {
      return e !== null && typeof e == "object";
    };
    o(Q0, "isObjectLikeArray", function(e) {
      if (typeof e != "function")
        throw new TypeError("invalid argument. Must provide a function. Value: `" + e + "`.");
      return function(n) {
        var r, a;
        if (!sy(n) || (r = n.length) === 0)
          return !1;
        for (a = 0; a < r; a++)
          if (e(n[a]) === !1)
            return !1;
        return !0;
      };
    }(Q0));
    var uy = Q0, fy = function(e) {
      return uy(e) && (e._isBuffer || e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e));
    }, cy = oy.REGEXP, W5 = function(e) {
      var n, r, a;
      if (((r = pe(e).slice(8, -1)) === "Object" || r === "Error") && e.constructor) {
        if (typeof (a = e.constructor).name == "string")
          return a.name;
        if (n = cy.exec(a.toString()))
          return n[1];
      }
      return fy(e) ? "Buffer" : r;
    }, ly = function(e) {
      var n;
      return e === null ? "null" : (n = typeof e) == "object" ? W5(e).toLowerCase() : n;
    }, vy = function(e) {
      return W5(e).toLowerCase();
    }, py = ay() ? vy : ly, G5 = function(e) {
      return py(e) === "function";
    }, my = function(e) {
      return e;
    }, $0, Z0 = function(e, n) {
      var r, a;
      if (!G5(e))
        throw new TypeError("invalid argument. First argument must be a function. Value: `" + e + "`.");
      if (arguments.length < 2)
        r = my;
      else if (!G5(r = n))
        throw new TypeError("invalid argument. Hash function argument must be a function. Value: `" + r + "`.");
      return o(s, "cache", a = {}), s;
      function s() {
        var u, p, k, b;
        for (u = new Array(arguments.length), b = 0; b < arguments.length; b++)
          u[b] = arguments[b];
        return k = r(u).toString(), Ne(a, k) ? a[k] : (p = e.apply(null, u), a[k] = p, p);
      }
    }, z5 = $0 = Z0(function(e, n) {
      var r;
      return n === 0 ? e === 0 ? 1 : 0 : (r = n * (n + 1) / 2, e < 0 || e > r ? 0 : (e > r / 2 && (e = r - e), $0(e - n, n - 1) + $0(e, n - 1)));
    }), j5 = function(e, n) {
      var r, a, s;
      if (i(e) || !$n(n) || !mi(n))
        return NaN;
      if (e < 0)
        return 0;
      if ((e = jn(e)) >= n * (n + 1) / 2)
        return 1;
      for (r = R(-n * Oe), s = 0, a = 0; a <= e; a++)
        s += z5(a, n) * r;
      return s;
    };
    o(j5, "factory", function(e) {
      var n, r;
      return $n(e) && mi(e) ? (r = R(-e * Oe), n = e * (e + 1) / 2, function(a) {
        var s, u;
        if (i(a))
          return NaN;
        if (a < 0)
          return 0;
        if ((a = jn(a)) >= n)
          return 1;
        for (u = 0, s = 0; s <= a; s++)
          u += z5(s, e) * r;
        return u;
      }) : N(NaN);
    });
    var J0, hy = j5, K5 = J0 = Z0(function(e, n) {
      var r;
      return n === 0 ? e === 0 ? 1 : 0 : (r = n * (n + 1) / 2, e < 0 || e > r ? 0 : (e > r / 2 && (e = r - e), J0(e - n, n - 1) + J0(e, n - 1)));
    }), Q5 = function(e, n) {
      return !i(e) && $n(n) && mi(n) ? e < 0 || e > n * (n + 1) / 2 ? 0 : R(M(K5(e, n)) - n * Oe) : NaN;
    };
    o(Q5, "factory", function(e) {
      var n;
      return $n(e) && mi(e) ? (n = e * (e + 1) / 2, function(r) {
        return i(r) ? NaN : r < 0 || r > n ? 0 : R(M(K5(r, e)) - e * Oe);
      }) : N(NaN);
    });
    var X0, dy = Q5, $5 = X0 = Z0(function(e, n) {
      var r;
      return n === 0 ? e === 0 ? 1 : 0 : (r = n * (n + 1) / 2, e < 0 || e > r ? 0 : (e > r / 2 && (e = r - e), X0(e - n, n - 1) + X0(e, n - 1)));
    }), Z5 = function(e, n) {
      var r, a, s;
      if (i(n) || !$n(n) || !mi(n))
        return NaN;
      if (i(e) || e < 0 || e > 1)
        return NaN;
      if (e === 0)
        return 0;
      if (e === 1)
        return n * (n + 1) / 2;
      for (r = R(-n * Oe), s = 0, a = -1; s < e; )
        s += r * $5(a += 1, n);
      return a;
    };
    o(Z5, "factory", function(e) {
      var n;
      return !i(e) && $n(e) && mi(e) ? (n = R(-e * Oe), function(r) {
        var a, s;
        if (i(r) || r < 0 || r > 1)
          return NaN;
        if (r === 0)
          return 0;
        if (r === 1)
          return e * (e + 1) / 2;
        for (a = 0, s = -1; a < r; )
          a += n * $5(s += 1, e);
        return s;
      }) : N(NaN);
    });
    var gy = Z5, J5 = function(e, n) {
      var r, a;
      return i(e) || i(n) || n <= 0 ? NaN : e === 0 ? 0.5 : (a = n > 2 * (r = V(e, 2)) ? Qe(r / (n + r), 0.5, n / 2, !0, !0) / 2 : Qe(n / (n + r), n / 2, 0.5, !0, !1) / 2, e > 0 ? 1 - a : a);
    };
    o(J5, "factory", function(e) {
      return i(e) || e <= 0 ? N(NaN) : function(n) {
        var r, a;
        return i(n) ? NaN : n === 0 ? 0.5 : (r = V(n, 2), a = e > 2 * r ? Qe(r / (e + r), 0.5, e / 2, !0, !0) / 2 : Qe(e / (e + r), e / 2, 0.5, !0, !1) / 2, n > 0 ? 1 - a : a);
      };
    });
    var X5 = J5, Y5 = function(e) {
      var n, r;
      return i(e) || e <= 0 ? NaN : (r = e / 2, n = (e + 1) / 2, n *= Qn((1 + e) / 2) - Qn(r), n += M(c(e) * Me(r, 0.5)));
    }, _5 = function(e) {
      return i(e) || e <= 2 ? NaN : e <= 4 ? H : 6 / (e - 4);
    }, e4 = function(e) {
      return i(e) || e <= 1 ? NaN : 0;
    }, n4 = function(e) {
      return i(e) || e < 0 ? NaN : 0;
    }, r4 = function(e) {
      return i(e) || e < 0 ? NaN : 0;
    }, i4 = function(e) {
      return i(e) || e <= 3 ? NaN : 0;
    }, a4 = function(e) {
      return i(e) || e <= 1 ? NaN : e <= 2 ? H : c(e / (e - 2));
    }, t4 = function(e) {
      return i(e) || e <= 1 ? NaN : e <= 2 ? H : e / (e - 2);
    }, o4 = function(e, n) {
      var r, a;
      return i(e) || i(n) || n <= 0 ? NaN : e === 0 ? pr : (a = n > 2 * (r = V(e, 2)) ? Qe(r / (n + r), 0.5, n / 2, !0, !0) / 2 : Qe(n / (n + r), n / 2, 0.5, !0, !1) / 2, e > 0 ? oe(-a) : M(a));
    };
    o(o4, "factory", function(e) {
      return i(e) || e <= 0 ? N(NaN) : function(n) {
        var r, a;
        return i(n) ? NaN : n === 0 ? pr : (r = V(n, 2), a = e > 2 * r ? Qe(r / (e + r), 0.5, e / 2, !0, !0) / 2 : Qe(e / (e + r), e / 2, 0.5, !0, !1) / 2, n > 0 ? oe(-a) : M(a));
      };
    });
    var s4 = o4, u4 = function(e, n) {
      var r;
      return i(e) || i(n) || n <= 0 ? NaN : (r = M(c(n)) + lr(n / 2, 0.5), (1 + n) / 2 * M(n / (n + V(e, 2))) - r);
    };
    o(u4, "factory", function(e) {
      var n, r;
      return i(e) || e <= 0 ? N(NaN) : (r = M(c(e)) + lr(e / 2, 0.5), n = (1 + e) / 2, function(a) {
        return i(a) ? NaN : n * M(e / (e + V(a, 2))) - r;
      });
    });
    var f4 = u4, c4 = function(e, n) {
      var r;
      return i(e) || i(n) || n <= 0 ? NaN : (r = c(n) * Me(n / 2, 0.5), V(n / (n + V(e, 2)), (1 + n) / 2) / r);
    };
    o(c4, "factory", function(e) {
      var n, r;
      return i(e) || e <= 0 ? N(NaN) : (r = c(e) * Me(e / 2, 0.5), n = (1 + e) / 2, function(a) {
        return i(a) ? NaN : V(e / (e + V(a, 2)), n) / r;
      });
    });
    var l4 = c4, v4 = function(e, n) {
      var r, a;
      return i(n) || i(e) || n <= 0 || e < 0 || e > 1 ? NaN : (a = ai(n / 2, 0.5, 2 * (r = e > 0.5 ? 1 - e : e), 1 - 2 * r), br(e - 0.5) * c(n * a[1] / a[0]));
    };
    o(v4, "factory", function(e) {
      return i(e) || e <= 0 ? N(NaN) : function(n) {
        var r, a;
        return i(n) || n < 0 || n > 1 ? NaN : (a = ai(e / 2, 0.5, 2 * (r = n > 0.5 ? 1 - n : n), 1 - 2 * r), br(n - 0.5) * c(e * a[1] / a[0]));
      };
    });
    var p4 = v4, m4 = Ue.isPrimitive;
    function xn() {
      var e;
      if (!(this instanceof xn))
        return arguments.length === 0 ? new xn() : new xn(arguments[0]);
      if (arguments.length) {
        if (e = arguments[0], !m4(e))
          throw new TypeError("invalid argument. Rate parameter `v` must be a positive number. Value: `" + e + "`");
      } else
        e = 1;
      return l(this, "v", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(n) {
        if (!m4(n))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + n + "`");
        e = n;
      } }), this;
    }
    m(xn.prototype, "entropy", function() {
      return Y5(this.v);
    }), m(xn.prototype, "kurtosis", function() {
      return _5(this.v);
    }), m(xn.prototype, "mean", function() {
      return e4(this.v);
    }), m(xn.prototype, "median", function() {
      return n4(this.v);
    }), m(xn.prototype, "mode", function() {
      return r4(this.v);
    }), m(xn.prototype, "skewness", function() {
      return i4(this.v);
    }), m(xn.prototype, "stdev", function() {
      return a4(this.v);
    }), m(xn.prototype, "variance", function() {
      return t4(this.v);
    }), o(xn.prototype, "cdf", function(e) {
      return X5(e, this.v);
    }), o(xn.prototype, "logcdf", function(e) {
      return s4(e, this.v);
    }), o(xn.prototype, "logpdf", function(e) {
      return f4(e, this.v);
    }), o(xn.prototype, "pdf", function(e) {
      return l4(e, this.v);
    }), o(xn.prototype, "quantile", function(e) {
      return p4(e, this.v);
    });
    var Ny = xn, h4 = function(e, n, r, a) {
      var s, u;
      return i(e) || i(n) || i(r) || i(a) || n > a || a > r ? NaN : e <= n ? 0 : (s = (r - n) * (a - n), u = (r - n) * (r - a), e <= a ? V(e - n, 2) / s : e < r ? 1 - V(r - e, 2) / u : 1);
    };
    o(h4, "factory", function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) ? N(NaN) : e <= r && r <= n ? (a = (n - e) * (r - e), s = (n - e) * (n - r), function(u) {
        return i(u) ? NaN : u <= e ? 0 : u <= r ? V(u - e, 2) / a : u < n ? 1 - V(n - u, 2) / s : 1;
      }) : N(NaN);
    });
    var d4 = h4, g4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : 0.5 + M(0.5 * (n - e));
    }, N4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : -0.6;
    }, y4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : (e + n + r) / 3;
    }, b4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : r >= (e + n) / 2 ? e + c(0.5 * (n - e) * (r - e)) : n - c(0.5 * (n - e) * (n - r));
    }, w4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : r;
    }, x4 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : (a = Pe * (e + n - 2 * r) * (2 * e - n - r) * (e - 2 * n + r), a /= 5 * V(e * e + n * n + r * r - e * n - e * r - n * r, 1.5));
    }, S4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : c((e * e + n * n + r * r - e * n - e * r - n * r) / 18);
    }, M4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || !(e <= r && r <= n) ? NaN : (e * e + n * n + r * r - e * n - e * r - n * r) / 18;
    }, k4 = function(e, n, r, a) {
      var s, u;
      return i(e) || i(n) || i(r) || i(a) || n > a || a > r ? NaN : e <= n ? j : (s = (r - n) * (a - n), u = (r - n) * (r - a), e <= a ? 2 * M(e - n) - M(s) : e < r ? M(1 - V(r - e, 2) / u) : 0);
    };
    o(k4, "factory", function(e, n, r) {
      var a, s;
      return i(e) || i(n) || i(r) ? N(NaN) : e <= r && r <= n ? (a = (n - e) * (r - e), s = (n - e) * (n - r), function(u) {
        return i(u) ? NaN : u <= e ? j : u <= r ? 2 * M(u - e) - M(a) : u < n ? M(1 - V(n - u, 2) / s) : 0;
      }) : N(NaN);
    });
    var T4 = k4, E4 = function(e, n, r, a) {
      var s, u, p;
      return i(e) || i(n) || i(r) || i(a) || n > a || a > r ? NaN : e < n ? j : (s = M(r - n) + M(a - n), u = M(r - n), p = M(r - n) + M(r - a), e < a ? Oe + M(e - n) - s : e === a ? Oe - u : e <= r ? Oe + M(r - e) - p : j);
    };
    o(E4, "factory", function(e, n, r) {
      var a, s, u;
      return i(e) || i(n) || i(r) || e > r || r > n ? N(NaN) : (a = M(n - e) + M(r - e), s = M(n - e), u = M(n - e) + M(n - r), function(p) {
        return i(p) ? NaN : p < e ? j : p < r ? Oe + M(p - e) - a : p === r ? Oe - s : p <= n ? Oe + M(n - p) - u : j;
      });
    });
    var P4 = E4, V4 = function(e, n, r, a) {
      var s, u, p, k;
      return i(e) || i(n) || i(r) || i(a) || n > a || a > r ? NaN : e === 0 ? 1 : (u = r - n, p = a - n, k = (s = r - a) * R(n * e) - u * R(a * e), k += p * R(r * e), k *= 2, k /= u * p * s * V(e, 2));
    };
    o(V4, "factory", function(e, n, r) {
      var a, s, u;
      return i(e) || i(n) || i(r) || e > r || r > n ? N(NaN) : (a = n - r, s = n - e, u = r - e, function(p) {
        var k;
        return i(p) ? NaN : p === 0 ? 1 : (k = a * R(e * p) - s * R(r * p), k += u * R(n * p), k *= 2, k /= s * u * a * V(p, 2));
      });
    });
    var C4 = V4, A4 = function(e, n, r, a) {
      return i(e) || i(n) || i(r) || i(a) || n > a || a > r ? NaN : e < n ? 0 : e < a ? 2 * (e - n) / ((r - n) * (a - n)) : e === a ? 2 / (r - n) : e <= r ? 2 * (r - e) / ((r - n) * (r - a)) : 0;
    };
    o(A4, "factory", function(e, n, r) {
      var a, s, u;
      return i(e) || i(n) || i(r) || e > r || r > n ? N(NaN) : (a = (n - e) * (r - e), s = n - e, u = (n - e) * (n - r), function(p) {
        return i(p) ? NaN : p < e ? 0 : p < r ? 2 * (p - e) / a : p === r ? 2 / s : p <= n ? 2 * (n - p) / u : 0;
      });
    });
    var I4 = A4, B4 = function(e, n, r, a) {
      var s, u;
      return i(e) || i(n) || i(r) || i(a) || n > a || a > r || e < 0 || e > 1 ? NaN : (u = (r - n) * (r - a), e < (s = (a - n) / (r - n)) ? n + c((r - n) * (a - n) * e) : e > s ? r - c(u * (1 - e)) : a);
    };
    o(B4, "factory", function(e, n, r) {
      var a, s, u;
      return i(e) || i(n) || i(r) || e > r || r > n ? N(NaN) : (a = (r - e) / (n - e), s = (n - e) * (r - e), u = (n - e) * (n - r), function(p) {
        return i(p) || p < 0 || p > 1 ? NaN : p < a ? e + c(s * p) : p > a ? n - c(u * (1 - p)) : r;
      });
    });
    var R4 = B4, hi = Ge.isPrimitive;
    function ln() {
      var e, n, r;
      if (!(this instanceof ln))
        return arguments.length === 0 ? new ln() : new ln(arguments[0], arguments[1], arguments[2]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], r = arguments[2], !hi(e) || i(e))
          throw new TypeError("invalid argument. Minimum support `a` must be a number primitive. Value: `" + e + "`");
        if (!hi(n) || i(n))
          throw new TypeError("invalid argument. Maximum support `b` must be a number primitive. Value: `" + n + "`");
        if (!hi(r) || i(r))
          throw new TypeError("invalid argument. Mode `c` must be a number primitive. Value: `" + r + "`");
        if (!(e <= r && r <= n))
          throw new RangeError("invalid arguments. Parameters must satisfy `a <= c <= b`. Value: `" + e + "," + n + "," + r + "`");
      } else
        e = 0, n = 1, r = 0.5;
      return l(this, "a", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(a) {
        if (!hi(a) || i(a))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + a + "`");
        if (a > n || a > r)
          throw new RangeError("invalid value. Must be smaller than or equal to `b` and `c`. Value: `" + a + "`");
        e = a;
      } }), l(this, "b", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(a) {
        if (!hi(a) || i(a))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + a + "`");
        if (e > a || r > a)
          throw new RangeError("invalid value. Must be greater than or equal to `a` and `c`. Value: `" + a + "`");
        n = a;
      } }), l(this, "c", { configurable: !1, enumerable: !0, get: function() {
        return r;
      }, set: function(a) {
        if (!hi(a) || i(a))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + a + "`");
        if (e > a || n < a)
          throw new RangeError("invalid value. Must be greater than or equal to `a` and smaller than or equal to `b`. Value: `" + a + "`");
        r = a;
      } }), this;
    }
    m(ln.prototype, "entropy", function() {
      return g4(this.a, this.b, this.c);
    }), m(ln.prototype, "kurtosis", function() {
      return N4(this.a, this.b, this.c);
    }), m(ln.prototype, "mean", function() {
      return y4(this.a, this.b, this.c);
    }), m(ln.prototype, "median", function() {
      return b4(this.a, this.b, this.c);
    }), m(ln.prototype, "mode", function() {
      return w4(this.a, this.b, this.c);
    }), m(ln.prototype, "skewness", function() {
      return x4(this.a, this.b, this.c);
    }), m(ln.prototype, "stdev", function() {
      return S4(this.a, this.b, this.c);
    }), m(ln.prototype, "variance", function() {
      return M4(this.a, this.b, this.c);
    }), o(ln.prototype, "cdf", function(e) {
      return d4(e, this.a, this.b, this.c);
    }), o(ln.prototype, "logcdf", function(e) {
      return T4(e, this.a, this.b, this.c);
    }), o(ln.prototype, "logpdf", function(e) {
      return P4(e, this.a, this.b, this.c);
    }), o(ln.prototype, "mgf", function(e) {
      return C4(e, this.a, this.b, this.c);
    }), o(ln.prototype, "pdf", function(e) {
      return I4(e, this.a, this.b, this.c);
    }), o(ln.prototype, "quantile", function(e) {
      return R4(e, this.a, this.b, this.c);
    });
    var yy = ln, L4 = (0, li.factory)(0, 1), q4 = function(e, n, r, a, s) {
      var u, p, k, b;
      return i(e) || i(n) || i(r) || s <= 0 || n >= r ? NaN : e < n || e > r ? 0 : (u = 2 * V(s, 2), p = 1 / c(u * T), k = -1 / u, b = L4((r - a) / s) - L4((n - a) / s), p * R(k * V(e - a, 2)) / b);
    }, F4 = (0, li.factory)(0, 1);
    o(q4, "factory", function(e, n, r, a) {
      var s, u, p, k;
      return i(e) || i(n) || i(r) || i(a) || a <= 0 || e >= n ? N(NaN) : (s = 2 * V(a, 2), u = 1 / c(s * T), p = -1 / s, k = F4((n - r) / a) - F4((e - r) / a), function(b) {
        return i(b) ? NaN : b < e || b > n ? 0 : u * R(p * V(b - r, 2)) / k;
      });
    });
    var by = q4, O4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n ? 0 : e >= r ? 1 : (e - n) / (r - n);
    };
    o(O4, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e ? 0 : r >= n ? 1 : (r - e) / (n - e);
      };
    });
    var D4 = O4, U4 = function(e, n) {
      return e >= n ? NaN : M(n - e);
    }, H4 = function(e, n) {
      return i(e) || i(n) || e >= n ? NaN : -1.2;
    }, W4 = function(e, n) {
      return e >= n ? NaN : 0.5 * (e + n);
    }, G4 = function(e, n) {
      return e >= n ? NaN : 0.5 * (e + n);
    }, z4 = function(e, n) {
      return i(e) || i(n) || e >= n ? NaN : 0;
    }, wy = c(1 / 12), j4 = function(e, n) {
      return e >= n ? NaN : wy * (n - e);
    }, K4 = function(e, n) {
      return e >= n ? NaN : 1 / 12 * V(n - e, 2);
    }, Q4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n ? j : e >= r ? 0 : M((e - n) / (r - n));
    };
    o(Q4, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e ? j : r >= n ? 0 : M((r - e) / (n - e));
      };
    });
    var $4 = Q4, Z4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n || e > r ? j : -M(r - n);
    };
    o(Z4, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e || r > n ? j : -M(n - e);
      };
    });
    var J4 = Z4, X4 = function(e, n, r) {
      var a;
      return i(e) || i(n) || i(r) || n >= r ? NaN : e === 0 ? 1 : (a = R(e * r) - R(e * n), a /= e * (r - n));
    };
    o(X4, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r === 0 ? 1 : (a = R(r * n) - R(r * e), a /= r * (n - e));
      };
    });
    var Y4 = X4, _4 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n >= r ? NaN : e < n || e > r ? 0 : 1 / (r - n);
    };
    o(_4, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) ? NaN : r < e || r > n ? 0 : 1 / (n - e);
      };
    });
    var e7 = _4, n7 = function(e, n, r) {
      return i(n) || i(r) || n >= r ? NaN : i(e) || e < 0 || e > 1 ? NaN : n + e * (r - n);
    };
    o(n7, "factory", function(e, n) {
      return i(e) || i(n) || e >= n ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : e + r * (n - e);
      };
    });
    var r7 = n7, Wa = Ge.isPrimitive;
    function Sn() {
      var e, n;
      if (!(this instanceof Sn))
        return arguments.length === 0 ? new Sn() : new Sn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (e = arguments[0], n = arguments[1], !Wa(e) || i(e))
          throw new TypeError("invalid argument. Minimum support `a` must be a number primitive. Value: `" + e + "`");
        if (!Wa(n) || i(n))
          throw new TypeError("invalid argument. Maximum support `b` must be a number primitive. Value: `" + n + "`");
        if (e >= n)
          throw new RangeError("invalid arguments. Minimum support `a` must be less than maximum support `b`. Value: `" + e + "," + n + "`");
      } else
        e = 0, n = 1;
      return l(this, "a", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!Wa(r) || i(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        if (r >= n)
          throw new RangeError("invalid value. Must be smaller than `b`. Value: `" + r + "`");
        e = r;
      } }), l(this, "b", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!Wa(r) || i(r))
          throw new TypeError("invalid value. Must be a number primitive. Value: `" + r + "`");
        if (e >= r)
          throw new RangeError("invalid value. Must be greater than `a`. Value: `" + r + "`");
        n = r;
      } }), this;
    }
    m(Sn.prototype, "entropy", function() {
      return U4(this.a, this.b);
    }), m(Sn.prototype, "kurtosis", function() {
      return H4(this.a, this.b);
    }), m(Sn.prototype, "mean", function() {
      return W4(this.a, this.b);
    }), m(Sn.prototype, "median", function() {
      return G4(this.a, this.b);
    }), m(Sn.prototype, "skewness", function() {
      return z4(this.a, this.b);
    }), m(Sn.prototype, "stdev", function() {
      return j4(this.a, this.b);
    }), m(Sn.prototype, "variance", function() {
      return K4(this.a, this.b);
    }), o(Sn.prototype, "cdf", function(e) {
      return D4(e, this.a, this.b);
    }), o(Sn.prototype, "logcdf", function(e) {
      return $4(e, this.a, this.b);
    }), o(Sn.prototype, "logpdf", function(e) {
      return J4(e, this.a, this.b);
    }), o(Sn.prototype, "mgf", function(e) {
      return Y4(e, this.a, this.b);
    }), o(Sn.prototype, "pdf", function(e) {
      return e7(e, this.a, this.b);
    }), o(Sn.prototype, "quantile", function(e) {
      return r7(e, this.a, this.b);
    });
    var xy = Sn, i7 = function(e, n, r) {
      return i(e) || i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < 0 ? 0 : -Le(-V(e / r, n));
    };
    o(i7, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) ? NaN : r < 0 ? 0 : -Le(-V(r / n, e));
      };
    });
    var a7 = i7, t7 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : Rr * (1 - 1 / e) + M(n / e) + 1;
    }, o7 = function(e, n) {
      var r, a, s, u, p;
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : (p = ve(1 + 1 / e), u = ve(1 + 2 / e), s = ve(1 + 3 / e), a = ve(1 + 4 / e), r = -6 * V(p, 4) + 12 * p * p * u - 3 * u * u - 4 * p * s + a, r /= V(u - p * p, 2));
    }, Ga = function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : n * ve(1 + 1 / e);
    }, s7 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : n * V(Oe, 1 / e);
    }, u7 = function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : e <= 1 ? 0 : n * V((e - 1) / e, 1 / e);
    }, Y0 = function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : (r = Ga(e, n), n * n * ve(1 + 2 / e) - r * r);
    }, f7 = function(e, n) {
      var r, a, s, u;
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : (u = Ga(e, n), r = Y0(e, n), a = c(r), s = ve(1 + 3 / e) * V(n, 3), s -= 3 * u * r + V(u, 3), s /= V(a, 3));
    }, c7 = function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? NaN : (r = ve(1 + 1 / e), n * c(ve(1 + 2 / e) - r * r));
    }, l7 = function(e, n, r) {
      var a;
      return i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < 0 ? j : (a = -V(e / r, n)) < pr ? oe(-R(a)) : M(-Le(a));
    };
    o(l7, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        var a;
        return i(r) ? NaN : r < 0 ? j : (a = -V(r / n, e)) < pr ? oe(-R(a)) : M(-Le(a));
      };
    });
    var v7 = l7, p7 = function(e, n, r) {
      var a;
      return i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < 0 || e === H || e === j ? j : e === 0 ? n === 1 ? M(n / r) : j : (a = e / r, M(n / r) + (n - 1) * M(a) - V(a, n));
    };
    o(p7, "factory", function(e, n) {
      var r;
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : (r = M(e / n), function(a) {
        var s;
        return a < 0 || a === H || a === j ? j : a === 0 ? e === 1 ? M(e / n) : j : r + (e - 1) * M(s = a / n) - V(s, e);
      });
    });
    var m7 = p7, h7 = function(e, n, r) {
      var a, s, u, p;
      if (i(e) || i(n) || i(r) || n <= 0 || r <= 0)
        return NaN;
      s = 1, u = 1, p = 0;
      do
        s += a = (u *= e * r / (p += 1)) == 0 ? 0 : u * ve(1 + p / n);
      while (a / s > kn);
      return s;
    };
    o(h7, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        var a, s, u, p;
        if (i(r))
          return NaN;
        s = 1, u = 1, p = 0;
        do
          a = (u *= r * n / (p += 1)) == 0 ? 0 : u * ve(1 + p / e), s += a;
        while (a / s > kn);
        return s;
      };
    });
    var d7 = h7, g7 = function(e, n, r) {
      var a;
      return i(n) || i(r) || n <= 0 || r <= 0 ? NaN : e < 0 || e === H || e === j ? 0 : e === 0 ? n === 1 ? n / r : 0 : n / r * V(a = e / r, n - 1) * R(-V(a, n));
    };
    o(g7, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        var a, s;
        return r < 0 || r === H || r === j ? 0 : r === 0 ? e === 1 ? e / n : 0 : (s = V(a = r / n, e - 1), e / n * s * R(-V(a, e)));
      };
    });
    var N7 = g7, y7 = function(e, n, r) {
      return i(n) || i(r) || i(e) || n <= 0 || r <= 0 || e < 0 || e > 1 ? NaN : r * V(-M(1 - e), 1 / n);
    };
    o(y7, "factory", function(e, n) {
      return i(e) || i(n) || e <= 0 || n <= 0 ? N(NaN) : function(r) {
        return i(r) || r < 0 || r > 1 ? NaN : n * V(-M(1 - r), 1 / e);
      };
    });
    var b7 = y7, za = Ue.isPrimitive;
    function vn() {
      var e, n;
      if (!(this instanceof vn))
        return arguments.length === 0 ? new vn() : new vn(arguments[0], arguments[1]);
      if (arguments.length) {
        if (n = arguments[0], e = arguments[1], !za(n))
          throw new TypeError("invalid argument. Shape parameter `k` must be a positive number. Value: `" + n + "`");
        if (!za(e))
          throw new TypeError("invalid argument. Scale parameter `lambda` must be a positive number. Value: `" + e + "`");
      } else
        n = 1, e = 1;
      return l(this, "k", { configurable: !1, enumerable: !0, get: function() {
        return n;
      }, set: function(r) {
        if (!za(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        n = r;
      } }), l(this, "lambda", { configurable: !1, enumerable: !0, get: function() {
        return e;
      }, set: function(r) {
        if (!za(r))
          throw new TypeError("invalid value. Must be a positive number. Value: `" + r + "`");
        e = r;
      } }), this;
    }
    m(vn.prototype, "entropy", function() {
      return t7(this.k, this.lambda);
    }), m(vn.prototype, "kurtosis", function() {
      return o7(this.k, this.lambda);
    }), m(vn.prototype, "mean", function() {
      return Ga(this.k, this.lambda);
    }), m(vn.prototype, "median", function() {
      return s7(this.k, this.lambda);
    }), m(vn.prototype, "mode", function() {
      return u7(this.k, this.lambda);
    }), m(vn.prototype, "skewness", function() {
      return f7(this.k, this.lambda);
    }), m(vn.prototype, "stdev", function() {
      return c7(this.k, this.lambda);
    }), m(vn.prototype, "variance", function() {
      return Y0(this.k, this.lambda);
    }), o(vn.prototype, "cdf", function(e) {
      return a7(e, this.k, this.lambda);
    }), o(vn.prototype, "logcdf", function(e) {
      return v7(e, this.k, this.lambda);
    }), o(vn.prototype, "logpdf", function(e) {
      return m7(e, this.k, this.lambda);
    }), o(vn.prototype, "mgf", function(e) {
      return d7(e, this.k, this.lambda);
    }), o(vn.prototype, "pdf", function(e) {
      return N7(e, this.k, this.lambda);
    }), o(vn.prototype, "quantile", function(e) {
      return b7(e, this.k, this.lambda);
    });
    var Sy = vn, v = {};
    return t(v, "base", {}), t(v.base, "dists", {}), t(v.base.dists, "arcsine", {}), t(v.base.dists.arcsine, "cdf", G), t(v.base.dists.arcsine, "Arcsine", A8), t(v.base.dists.arcsine, "entropy", ft), t(v.base.dists.arcsine, "kurtosis", ct), t(v.base.dists.arcsine, "logcdf", Bt), t(v.base.dists.arcsine, "logpdf", Lt), t(v.base.dists.arcsine, "mean", lt), t(v.base.dists.arcsine, "median", vt), t(v.base.dists.arcsine, "mode", pt), t(v.base.dists.arcsine, "pdf", Ft), t(v.base.dists.arcsine, "quantile", zt), t(v.base.dists.arcsine, "skewness", mt), t(v.base.dists.arcsine, "stdev", ht), t(v.base.dists.arcsine, "variance", At), t(v.base.dists, "bernoulli", {}), t(v.base.dists.bernoulli, "cdf", Kt), t(v.base.dists.bernoulli, "Bernoulli", U8), t(v.base.dists.bernoulli, "entropy", Zt), t(v.base.dists.bernoulli, "kurtosis", Jt), t(v.base.dists.bernoulli, "mean", Xt), t(v.base.dists.bernoulli, "median", _t), t(v.base.dists.bernoulli, "mgf", oo), t(v.base.dists.bernoulli, "mode", Yt), t(v.base.dists.bernoulli, "pmf", uo), t(v.base.dists.bernoulli, "quantile", co), t(v.base.dists.bernoulli, "skewness", eo), t(v.base.dists.bernoulli, "stdev", no), t(v.base.dists.bernoulli, "variance", ro), t(v.base.dists, "beta", {}), t(v.base.dists.beta, "cdf", la), t(v.base.dists.beta, "Beta", jh), t(v.base.dists.beta, "entropy", Uo), t(v.base.dists.beta, "kurtosis", Ho), t(v.base.dists.beta, "logcdf", ga), t(v.base.dists.beta, "logpdf", fs), t(v.base.dists.beta, "mean", Wo), t(v.base.dists.beta, "median", rs), t(v.base.dists.beta, "mgf", vs), t(v.base.dists.beta, "mode", is), t(v.base.dists.beta, "pdf", ms), t(v.base.dists.beta, "quantile", ds), t(v.base.dists.beta, "skewness", as), t(v.base.dists.beta, "stdev", ts), t(v.base.dists.beta, "variance", os), t(v.base.dists, "betaprime", {}), t(v.base.dists.betaprime, "cdf", Ns), t(v.base.dists.betaprime, "BetaPrime", Zh), t(v.base.dists.betaprime, "kurtosis", ys), t(v.base.dists.betaprime, "logcdf", Ts), t(v.base.dists.betaprime, "logpdf", ya), t(v.base.dists.betaprime, "mean", bs), t(v.base.dists.betaprime, "mode", ws), t(v.base.dists.betaprime, "pdf", Vs), t(v.base.dists.betaprime, "quantile", As), t(v.base.dists.betaprime, "skewness", xs), t(v.base.dists.betaprime, "stdev", Ss), t(v.base.dists.betaprime, "variance", Ms), t(v.base.dists, "binomial", {}), t(v.base.dists.binomial, "cdf", ti), t(v.base.dists.binomial, "Binomial", ed), t(v.base.dists.binomial, "entropy", nd), t(v.base.dists.binomial, "kurtosis", Ds), t(v.base.dists.binomial, "logpmf", $s), t(v.base.dists.binomial, "mean", L0), t(v.base.dists.binomial, "median", Us), t(v.base.dists.binomial, "mgf", Js), t(v.base.dists.binomial, "mode", Hs), t(v.base.dists.binomial, "pmf", eu), t(v.base.dists.binomial, "quantile", ou), t(v.base.dists.binomial, "skewness", Ws), t(v.base.dists.binomial, "stdev", Gs), t(v.base.dists.binomial, "variance", zs), t(v.base.dists, "cauchy", {}), t(v.base.dists.cauchy, "cdf", lu), t(v.base.dists.cauchy, "Cauchy", pd), t(v.base.dists.cauchy, "entropy", mu), t(v.base.dists.cauchy, "logcdf", Nu), t(v.base.dists.cauchy, "logpdf", bu), t(v.base.dists.cauchy, "median", hu), t(v.base.dists.cauchy, "mode", du), t(v.base.dists.cauchy, "pdf", xu), t(v.base.dists.cauchy, "quantile", Mu), t(v.base.dists, "chi", {}), t(v.base.dists.chi, "cdf", Cu), t(v.base.dists.chi, "Chi", wd), t(v.base.dists.chi, "entropy", Au), t(v.base.dists.chi, "kurtosis", Iu), t(v.base.dists.chi, "logpdf", Fu), t(v.base.dists.chi, "mean", oi), t(v.base.dists.chi, "mode", Bu), t(v.base.dists.chi, "pdf", Uu), t(v.base.dists.chi, "quantile", Gu), t(v.base.dists.chi, "skewness", F0), t(v.base.dists.chi, "stdev", Ru), t(v.base.dists.chi, "variance", ka), t(v.base.dists, "chisquare", {}), t(v.base.dists.chisquare, "cdf", Ku), t(v.base.dists.chisquare, "ChiSquare", Pd), t(v.base.dists.chisquare, "entropy", Qu), t(v.base.dists.chisquare, "kurtosis", $u), t(v.base.dists.chisquare, "logpdf", Ad), t(v.base.dists.chisquare, "mean", Zu), t(v.base.dists.chisquare, "median", Xu), t(v.base.dists.chisquare, "mgf", i1), t(v.base.dists.chisquare, "mode", Yu), t(v.base.dists.chisquare, "pdf", u1), t(v.base.dists.chisquare, "quantile", O0), t(v.base.dists.chisquare, "skewness", _u), t(v.base.dists.chisquare, "stdev", e1), t(v.base.dists.chisquare, "variance", n1), t(v.base.dists, "cosine", {}), t(v.base.dists.cosine, "cdf", D0), t(v.base.dists.cosine, "Cosine", Gd), t(v.base.dists.cosine, "kurtosis", p1), t(v.base.dists.cosine, "logcdf", x1), t(v.base.dists.cosine, "logpdf", k1), t(v.base.dists.cosine, "mean", m1), t(v.base.dists.cosine, "median", h1), t(v.base.dists.cosine, "mgf", P1), t(v.base.dists.cosine, "mode", d1), t(v.base.dists.cosine, "pdf", C1), t(v.base.dists.cosine, "quantile", B1), t(v.base.dists.cosine, "skewness", g1), t(v.base.dists.cosine, "stdev", N1), t(v.base.dists.cosine, "variance", y1), t(v.base.dists, "degenerate", {}), t(v.base.dists.degenerate, "cdf", Tr), t(v.base.dists.degenerate, "Degenerate", zd), t(v.base.dists.degenerate, "entropy", q1), t(v.base.dists.degenerate, "logcdf", fi), t(v.base.dists.degenerate, "logpdf", Hr), t(v.base.dists.degenerate, "logpmf", xa), t(v.base.dists.degenerate, "mean", F1), t(v.base.dists.degenerate, "median", D1), t(v.base.dists.degenerate, "mgf", U0), t(v.base.dists.degenerate, "mode", O1), t(v.base.dists.degenerate, "pdf", Wr), t(v.base.dists.degenerate, "pmf", Sa), t(v.base.dists.degenerate, "quantile", kr), t(v.base.dists.degenerate, "stdev", U1), t(v.base.dists.degenerate, "variance", H1), t(v.base.dists, "discreteUniform", {}), t(v.base.dists.discreteUniform, "cdf", z1), t(v.base.dists.discreteUniform, "DiscreteUniform", Kd), t(v, "entropy", j1), t(v.base.dists.discreteUniform, "kurtosis", K1), t(v.base.dists.discreteUniform, "logcdf", _1), t(v.base.dists.discreteUniform, "logpmf", nf), t(v.base.dists.discreteUniform, "mean", Q1), t(v.base.dists.discreteUniform, "median", $1), t(v.base.dists.discreteUniform, "mgf", af), t(v.base.dists.discreteUniform, "pmf", of), t(v.base.dists.discreteUniform, "quantile", uf), t(v.base.dists.discreteUniform, "skewness", Z1), t(v.base.dists.discreteUniform, "stdev", J1), t(v.base.dists.discreteUniform, "variance", X1), t(v.base.dists, "erlang", {}), t(v.base.dists.erlang, "cdf", cf), t(v.base.dists.erlang, "Erlang", Xd), t(v.base.dists.erlang, "entropy", lf), t(v.base.dists.erlang, "kurtosis", vf), t(v.base.dists.erlang, "logpdf", yf), t(v.base.dists.erlang, "mean", pf), t(v.base.dists.erlang, "mgf", wf), t(v.base.dists.erlang, "mode", mf), t(v.base.dists.erlang, "pdf", Sf), t(v.base.dists.erlang, "quantile", kf), t(v.base.dists.erlang, "skewness", hf), t(v.base.dists.erlang, "stdev", df), t(v.base.dists.erlang, "variance", gf), t(v.base.dists, "exponential", {}), t(v.base.dists.exponential, "cdf", Vf), t(v.base.dists.exponential, "Exponential", Yd), t(v.base.dists.exponential, "entropy", Cf), t(v.base.dists.exponential, "kurtosis", Af), t(v.base.dists.exponential, "logcdf", Df), t(v.base.dists.exponential, "logpdf", Hf), t(v.base.dists.exponential, "mean", If), t(v.base.dists.exponential, "median", Bf), t(v.base.dists.exponential, "mgf", Gf), t(v.base.dists.exponential, "mode", Rf), t(v.base.dists.exponential, "pdf", jf), t(v.base.dists.exponential, "quantile", Qf), t(v.base.dists.exponential, "skewness", Lf), t(v.base.dists.exponential, "stdev", qf), t(v.base.dists.exponential, "variance", Ff), t(v.base.dists, "f", {}), t(v.base.dists.f, "cdf", Jf), t(v.base.dists.f, "F", eg), t(v.base.dists.f, "entropy", Xf), t(v.base.dists.f, "kurtosis", Yf), t(v.base.dists.f, "mean", _f), t(v.base.dists.f, "mode", e2), t(v.base.dists.f, "pdf", t2), t(v.base.dists.f, "quantile", s2), t(v.base.dists.f, "skewness", n2), t(v.base.dists.f, "stdev", r2), t(v.base.dists.f, "variance", i2), t(v.base.dists, "frechet", {}), t(v.base.dists.frechet, "cdf", f2), t(v.base.dists.frechet, "Frechet", rg), t(v.base.dists.frechet, "entropy", c2), t(v.base.dists.frechet, "kurtosis", l2), t(v.base.dists.frechet, "logcdf", y2), t(v.base.dists.frechet, "logpdf", Ca), t(v.base.dists.frechet, "mean", v2), t(v.base.dists.frechet, "median", p2), t(v.base.dists.frechet, "mode", m2), t(v.base.dists.frechet, "pdf", x2), t(v.base.dists.frechet, "quantile", M2), t(v.base.dists.frechet, "skewness", h2), t(v.base.dists.frechet, "stdev", d2), t(v.base.dists.frechet, "variance", g2), t(v.base.dists, "gamma", {}), t(v.base.dists.gamma, "cdf", Er), t(v.base.dists.gamma, "Gamma", ag), t(v.base.dists.gamma, "entropy", T2), t(v.base.dists.gamma, "kurtosis", E2), t(v.base.dists.gamma, "logcdf", R2), t(v.base.dists.gamma, "logpdf", ui), t(v.base.dists.gamma, "mean", P2), t(v.base.dists.gamma, "mgf", q2), t(v.base.dists.gamma, "mode", V2), t(v.base.dists.gamma, "pdf", si), t(v.base.dists.gamma, "quantile", Gr), t(v.base.dists.gamma, "skewness", C2), t(v.base.dists.gamma, "stdev", A2), t(v.base.dists.gamma, "variance", I2), t(v.base.dists, "geometric", {}), t(v.base.dists.geometric, "cdf", O2), t(v.base.dists.geometric, "Geometric", gg), t(v.base.dists.geometric, "entropy", D2), t(v.base.dists.geometric, "kurtosis", U2), t(v.base.dists.geometric, "logcdf", J2), t(v.base.dists.geometric, "logpmf", Y2), t(v.base.dists.geometric, "mean", H2), t(v.base.dists.geometric, "median", z2), t(v.base.dists.geometric, "mgf", ec), t(v.base.dists.geometric, "mode", j2), t(v.base.dists.geometric, "pmf", rc), t(v.base.dists.geometric, "quantile", ac), t(v.base.dists.geometric, "skewness", K2), t(v.base.dists.geometric, "stdev", Q2), t(v.base.dists.geometric, "variance", $2), t(v.base.dists, "gumbel", {}), t(v.base.dists.gumbel, "cdf", sc), t(v.base.dists.gumbel, "Gumbel", qg), t(v.base.dists.gumbel, "entropy", uc), t(v.base.dists.gumbel, "kurtosis", fc), t(v.base.dists.gumbel, "logcdf", gc), t(v.base.dists.gumbel, "logpdf", yc), t(v.base.dists.gumbel, "mean", cc), t(v.base.dists.gumbel, "median", lc), t(v.base.dists.gumbel, "mgf", wc), t(v.base.dists.gumbel, "mode", vc), t(v.base.dists.gumbel, "pdf", Sc), t(v.base.dists.gumbel, "quantile", kc), t(v.base.dists.gumbel, "skewness", pc), t(v.base.dists.gumbel, "stdev", mc), t(v.base.dists.gumbel, "variance", hc), t(v.base.dists, "hypergeometric", {}), t(v.base.dists.hypergeometric, "cdf", Ra), t(v.base.dists.hypergeometric, "Hypergeometric", Hg), t(v.base.dists.hypergeometric, "kurtosis", Bc), t(v.base.dists.hypergeometric, "logpmf", Uc), t(v.base.dists.hypergeometric, "mean", Rc), t(v.base.dists.hypergeometric, "mode", Lc), t(v.base.dists.hypergeometric, "pmf", Ba), t(v.base.dists.hypergeometric, "quantile", Wc), t(v.base.dists.hypergeometric, "skewness", qc), t(v.base.dists.hypergeometric, "stdev", Fc), t(v.base.dists.hypergeometric, "variance", Oc), t(v.base.dists, "invgamma", {}), t(v.base.dists.invgamma, "cdf", zc), t(v.base.dists.invgamma, "InvGamma", Wg), t(v.base.dists.invgamma, "entropy", jc), t(v.base.dists.invgamma, "kurtosis", Kc), t(v.base.dists.invgamma, "logpdf", Yc), t(v.base.dists.invgamma, "mean", Qc), t(v.base.dists.invgamma, "mode", $c), t(v.base.dists.invgamma, "pdf", i3), t(v.base.dists.invgamma, "quantile", Jc), t(v.base.dists.invgamma, "skewness", _c), t(v.base.dists.invgamma, "stdev", e3), t(v.base.dists.invgamma, "variance", n3), t(v.base.dists, "kumaraswamy", {}), t(v.base.dists.kumaraswamy, "cdf", t3), t(v.base.dists.kumaraswamy, "Kumaraswamy", Gg), t(v.base.dists.kumaraswamy, "kurtosis", o3), t(v.base.dists.kumaraswamy, "logcdf", p3), t(v.base.dists.kumaraswamy, "logpdf", h3), t(v.base.dists.kumaraswamy, "mean", s3), t(v.base.dists.kumaraswamy, "median", zg), t(v.base.dists.kumaraswamy, "mode", u3), t(v.base.dists.kumaraswamy, "pdf", g3), t(v.base.dists.kumaraswamy, "quantile", y3), t(v.base.dists.kumaraswamy, "skewness", f3), t(v.base.dists.kumaraswamy, "stdev", c3), t(v.base.dists.kumaraswamy, "variance", l3), t(v.base.dists, "laplace", {}), t(v.base.dists.laplace, "cdf", w3), t(v.base.dists.laplace, "Laplace", jg), t(v.base.dists.laplace, "entropy", x3), t(v.base.dists.laplace, "kurtosis", S3), t(v.base.dists.laplace, "logcdf", A3), t(v.base.dists.laplace, "logpdf", B3), t(v.base.dists.laplace, "mean", M3), t(v.base.dists.laplace, "median", k3), t(v.base.dists.laplace, "mgf", L3), t(v.base.dists.laplace, "mode", T3), t(v.base.dists.laplace, "pdf", F3), t(v.base.dists.laplace, "quantile", D3), t(v.base.dists.laplace, "skewness", E3), t(v.base.dists.laplace, "stdev", P3), t(v.base.dists.laplace, "variance", V3), t(v.base.dists, "levy", {}), t(v.base.dists.levy, "cdf", G3), t(v.base.dists.levy, "Levy", $g), t(v.base.dists.levy, "entropy", z3), t(v.base.dists.levy, "logcdf", X3), t(v.base.dists.levy, "logpdf", _3), t(v.base.dists.levy, "mean", j3), t(v.base.dists.levy, "median", K3), t(v.base.dists.levy, "mode", Q3), t(v.base.dists.levy, "pdf", nl), t(v.base.dists.levy, "quantile", il), t(v.base.dists.levy, "stdev", $3), t(v.base.dists.levy, "variance", Z3), t(v.base.dists, "logistic", {}), t(v.base.dists.logistic, "cdf", sl), t(v.base.dists.logistic, "Logistic", rN), t(v.base.dists.logistic, "entropy", ul), t(v.base.dists.logistic, "kurtosis", fl), t(v.base.dists.logistic, "logcdf", Nl), t(v.base.dists.logistic, "logpdf", bl), t(v.base.dists.logistic, "mean", cl), t(v.base.dists.logistic, "median", ll), t(v.base.dists.logistic, "mgf", Sl), t(v.base.dists.logistic, "mode", vl), t(v.base.dists.logistic, "pdf", kl), t(v.base.dists.logistic, "quantile", El), t(v.base.dists.logistic, "skewness", pl), t(v.base.dists.logistic, "stdev", ml), t(v.base.dists.logistic, "variance", hl), t(v.base.dists, "lognormal", {}), t(v.base.dists.lognormal, "cdf", Il), t(v.base.dists.lognormal, "LogNormal", hN), t(v.base.dists.lognormal, "entropy", Bl), t(v.base.dists.lognormal, "kurtosis", Rl), t(v.base.dists.lognormal, "logpdf", Wl), t(v.base.dists.lognormal, "mean", Ll), t(v.base.dists.lognormal, "median", ql), t(v.base.dists.lognormal, "mode", Fl), t(v.base.dists.lognormal, "pdf", zl), t(v.base.dists.lognormal, "quantile", $l), t(v.base.dists.lognormal, "skewness", Ol), t(v.base.dists.lognormal, "stdev", Dl), t(v.base.dists.lognormal, "variance", Ul), t(v.base.dists, "negativeBinomial", {}), t(v.base.dists.negativeBinomial, "cdf", vi), t(v.base.dists.negativeBinomial, "NegativeBinomial", NN), t(v.base.dists.negativeBinomial, "kurtosis", Yl), t(v.base.dists.negativeBinomial, "logpmf", o6), t(v.base.dists.negativeBinomial, "mean", _l), t(v.base.dists.negativeBinomial, "mgf", u6), t(v.base.dists.negativeBinomial, "mode", e6), t(v.base.dists.negativeBinomial, "pmf", l6), t(v.base.dists.negativeBinomial, "quantile", p6), t(v.base.dists.negativeBinomial, "skewness", n6), t(v.base.dists.negativeBinomial, "stdev", r6), t(v.base.dists.negativeBinomial, "variance", i6), t(v.base.dists, "normal", {}), t(v.base.dists.normal, "cdf", li), t(v.base.dists.normal, "Normal", wN), t(v.base.dists.normal, "entropy", d6), t(v.base.dists.normal, "kurtosis", g6), t(v.base.dists.normal, "logpdf", k6), t(v.base.dists.normal, "mean", N6), t(v.base.dists.normal, "median", y6), t(v.base.dists.normal, "mgf", E6), t(v.base.dists.normal, "mode", b6), t(v.base.dists.normal, "pdf", V6), t(v.base.dists.normal, "quantile", Oa), t(v.base.dists.normal, "skewness", w6), t(v.base.dists.normal, "stdev", x6), t(v.base.dists.normal, "variance", S6), t(v.base.dists, "pareto1", {}), t(v.base.dists.pareto1, "cdf", B6), t(v.base.dists.pareto1, "Pareto1", xN), t(v.base.dists.pareto1, "entropy", R6), t(v.base.dists.pareto1, "kurtosis", L6), t(v.base.dists.pareto1, "logcdf", W6), t(v.base.dists.pareto1, "logpdf", z6), t(v.base.dists.pareto1, "mean", q6), t(v.base.dists.pareto1, "median", F6), t(v.base.dists.pareto1, "mode", O6), t(v.base.dists.pareto1, "pdf", K6), t(v.base.dists.pareto1, "quantile", $6), t(v.base.dists.pareto1, "skewness", D6), t(v.base.dists.pareto1, "stdev", SN), t(v.base.dists.pareto1, "variance", U6), t(v.base.dists, "poisson", {}), t(v.base.dists.poisson, "cdf", pi), t(v.base.dists.poisson, "Poisson", PN), t(v.base.dists.poisson, "entropy", J6), t(v.base.dists.poisson, "kurtosis", X6), t(v.base.dists.poisson, "logpmf", t5), t(v.base.dists.poisson, "mean", Y6), t(v.base.dists.poisson, "median", _6), t(v.base.dists.poisson, "mgf", s5), t(v.base.dists.poisson, "mode", e5), t(v.base.dists.poisson, "pmf", f5), t(v.base.dists.poisson, "quantile", l5), t(v.base.dists.poisson, "skewness", n5), t(v.base.dists.poisson, "stdev", r5), t(v.base.dists.poisson, "variance", i5), t(v.base.dists, "rayleigh", {}), t(v.base.dists.rayleigh, "cdf", m5), t(v.base.dists.rayleigh, "Rayleigh", JN), t(v.base.dists.rayleigh, "entropy", h5), t(v.base.dists.rayleigh, "kurtosis", d5), t(v.base.dists.rayleigh, "logcdf", M5), t(v.base.dists.rayleigh, "logpdf", T5), t(v.base.dists.rayleigh, "mean", g5), t(v.base.dists.rayleigh, "median", N5), t(v.base.dists.rayleigh, "mgf", A5), t(v.base.dists.rayleigh, "mode", y5), t(v.base.dists.rayleigh, "pdf", B5), t(v.base.dists.rayleigh, "quantile", L5), t(v.base.dists.rayleigh, "skewness", b5), t(v.base.dists.rayleigh, "stdev", w5), t(v.base.dists.rayleigh, "variance", x5), t(v.base.dists, "signrank", {}), t(v.base.dists.signrank, "cdf", hy), t(v.base.dists.signrank, "pdf", dy), t(v.base.dists.signrank, "quantile", gy), t(v.base.dists, "t", {}), t(v.base.dists.t, "cdf", X5), t(v.base.dists.t, "T", Ny), t(v.base.dists.t, "entropy", Y5), t(v.base.dists.t, "kurtosis", _5), t(v, "logcdf", s4), t(v, "logpdf", f4), t(v.base.dists.t, "mean", e4), t(v.base.dists.t, "median", n4), t(v.base.dists.t, "mode", r4), t(v.base.dists.t, "pdf", l4), t(v.base.dists.t, "quantile", p4), t(v.base.dists.t, "skewness", i4), t(v.base.dists.t, "stdev", a4), t(v.base.dists.t, "variance", t4), t(v.base.dists, "triangular", {}), t(v.base.dists.triangular, "cdf", d4), t(v.base.dists.triangular, "Triangular", yy), t(v.base.dists.triangular, "entropy", g4), t(v.base.dists.triangular, "kurtosis", N4), t(v.base.dists.triangular, "logcdf", T4), t(v.base.dists.triangular, "logpdf", P4), t(v.base.dists.triangular, "mean", y4), t(v.base.dists.triangular, "median", b4), t(v.base.dists.triangular, "mgf", C4), t(v.base.dists.triangular, "mode", w4), t(v.base.dists.triangular, "pdf", I4), t(v.base.dists.triangular, "quantile", R4), t(v.base.dists.triangular, "skewness", x4), t(v.base.dists.triangular, "stdev", S4), t(v.base.dists.triangular, "variance", M4), t(v, "pdf", by), t(v.base.dists, "uniform", {}), t(v.base.dists.uniform, "cdf", D4), t(v.base.dists.uniform, "Uniform", xy), t(v.base.dists.uniform, "entropy", U4), t(v.base.dists.uniform, "kurtosis", H4), t(v.base.dists.uniform, "logcdf", $4), t(v.base.dists.uniform, "logpdf", J4), t(v.base.dists.uniform, "mean", W4), t(v.base.dists.uniform, "median", G4), t(v.base.dists.uniform, "mgf", Y4), t(v.base.dists.uniform, "pdf", e7), t(v.base.dists.uniform, "quantile", r7), t(v.base.dists.uniform, "skewness", z4), t(v.base.dists.uniform, "stdev", j4), t(v.base.dists.uniform, "variance", K4), t(v.base.dists, "weibull", {}), t(v.base.dists.weibull, "cdf", a7), t(v.base.dists.weibull, "Weibull", Sy), t(v.base.dists.weibull, "entropy", t7), t(v.base.dists.weibull, "kurtosis", o7), t(v.base.dists.weibull, "logcdf", v7), t(v.base.dists.weibull, "logpdf", m7), t(v.base.dists.weibull, "mean", Ga), t(v.base.dists.weibull, "median", s7), t(v.base.dists.weibull, "mgf", d7), t(v.base.dists.weibull, "mode", u7), t(v.base.dists.weibull, "pdf", N7), t(v.base.dists.weibull, "quantile", b7), t(v.base.dists.weibull, "skewness", f7), t(v.base.dists.weibull, "stdev", c7), t(v.base.dists.weibull, "variance", Y0), v;
  });
})(T7);
var ky = T7.exports;
const Ty = /* @__PURE__ */ M7(ky), di = Ty.base.dists, S7 = di.normal.cdf;
function Ey(Ve, He, _, ge, E, f) {
  let y = S7(Ve, He, _), g = S7(Ve, ge, E);
  return f * y + (1 - f) * g;
}
const Py = {
  uniform: (Ve, He = 0, _ = 1) => di.uniform.cdf(Ve, He, _),
  normal: (Ve, He = 0, _ = 1) => di.normal.cdf(Ve, He, _),
  laplace: (Ve, He = 0, _ = 1) => di.laplace.cdf(Ve, He, _),
  logistic: (Ve, He = 0, _ = 1) => di.logistic.cdf(Ve, He, _),
  cauchy: (Ve, He = 0, _ = 1) => di.cauchy.cdf(Ve, He, _),
  bimodal: (Ve, He = -3, _ = 0.6, ge = 3, E = 1.3, f = 0.5) => Ey(Ve, He, _, ge, E, f)
}, Vy = (Ve, He, _) => Array.from(
  { length: (He - Ve) / _ + 1 },
  (ge, E) => Ve + E * _
);
Vy(-5, 5, 0.01);
function Cy(Ve, He) {
  for (var _ = He[0], ge = Math.abs(Ve - _), E = 0; E < He.length; E++) {
    var f = Math.abs(Ve - He[E]);
    f < ge && (ge = f, _ = He[E]);
  }
  return _;
}
function Ay(Ve, He) {
  let _ = Cr.Engine, ge = Cr.Render, E = Cr.Runner, f = Cr.Events, y = Cr.Body, g = Cr.World, h = Cr.Bodies, S = _.create({
    enableSleeping: !1
  }), d = S.world;
  const w = 500, l = 500;
  let t = ge.create({
    element: Ve,
    engine: S,
    options: {
      background: "#FFFFFF",
      width: w,
      height: l,
      wireframes: !1
    }
  });
  ge.run(t);
  let o = E.create({
    delta: 1e3 / (60 * 10),
    // 600Hz delta = 1.666ms = 10upf @ 60fps (10x default precision)
    maxFrameTime: 1e3 / 20
    // performance budget
  });
  E.run(o, S);
  const i = 20, c = l / 2, P = c - i, q = 4;
  let D = 1e3;
  const U = 14, x = (Z, ie, Y) => {
    g.add(d, h.rectangle(Z, ie, 1, 1, {
      isStatic: !0,
      render: {
        fillStyle: "#000000",
        visible: !0,
        opacity: Y
      },
      collisionFilter: {
        group: 0
      }
    }));
  };
  function T(Z, ie, Y, ue, Ne, be, Ce, pe) {
    const Ae = Math.abs(pe - be) > Math.abs(Ce - Ne);
    Ae && ([Ne, be] = [be, Ne], [Ce, pe] = [pe, Ce]), Ne > Ce && ([Ne, Ce] = [Ce, Ne], [be, pe] = [pe, be]);
    const je = Ce - Ne, We = (pe - be) / je;
    let Ze = be + ue(Ne) * We;
    for (let Je = Z(Ne) + 1; Je < ie(Ce); Je++)
      Ae ? (x(Z(Ze), Je, ue(Ze)), x(Z(Ze) + 1, Je, Y(Ze))) : (x(Je, Z(Ze), ue(Ze)), x(Je, Z(Ze) + 1, Y(Ze))), Ze += We;
  }
  function L(Z, ie, Y, ue) {
    const Ne = Math.floor, be = Math.round, Ce = (Ae) => Ae - Math.floor(Ae), pe = (Ae) => 1 - Ce(Ae);
    T(Ne, be, Ce, pe, Z, ie, Y, ue), T(Ne, be, Ce, pe, Y, ue, Z, ie), x(Z, ie, 1), x(Y, ue, 1);
  }
  S.gravity.y = 0;
  let I = {}, N = {}, F = [], G = 1 / 0, m = 0;
  const X = Py[He];
  for (let Z = 0; Z < w / q; Z++) {
    const ie = Z * q, Y = X((ie - w / 2) / 40);
    let ue = c - Y * P;
    N[ue] = ie, ue < G && (G = ue), ue > m && (m = ue), F.push(ue);
  }
  for (let Z = 0; Z < w / q; Z++) {
    const ie = Z * q, Y = (m - F[Z]) * (i - c) / (m - G) + c, ue = h.rectangle(ie, Y, q, q, {
      isSensor: !0,
      isStatic: !0,
      render: {
        fillStyle: "#428BCA",
        visible: !1
      },
      collisionFilter: {
        group: 0
      }
    });
    F[Z] = Y, N[Y] = ie, g.add(d, ue), Z > 0 && L(N[F[Z - 1]], F[Z - 1], N[F[Z]], F[Z]);
  }
  let re = {};
  return f.on(o, "beforeTick", function(Z) {
    for (let ie = 0; ie < d.bodies.length; ie++) {
      const Y = d.bodies[ie];
      if (Y.velocity.x > 0 && !Y.isStatic) {
        const ue = Y.position.x, Ne = Y.position.y, be = re[Y.id];
        ue >= be && (y.setPosition(Y, { x: be, y: Ne }), y.setVelocity(Y, { x: 0, y: U }));
      }
    }
    for (let ie = 0; ie < d.bodies.length; ie++) {
      const Y = d.bodies[ie];
      if (Y.velocity.y > 0 && !Y.isStatic) {
        const ue = Y.position.x, Ne = Y.position.y;
        (I[ue] && Ne >= l - I[ue] - q / 2 || Ne >= l - q / 2) && (I[ue] || (I[ue] = q / 2), y.setPosition(Y, { x: ue, y: l - I[ue] }), y.setStatic(Y, !0), I[ue] += q);
      }
    }
  }), setInterval(() => {
    if (D-- > 0) {
      const ie = Math.random() * (m - G) + G, Y = h.rectangle(
        10,
        ie,
        q,
        q,
        {
          isSensor: !0,
          frictionAir: 0,
          render: {
            fillStyle: "#428BCA",
            visible: !0
          },
          collisionFilter: {
            group: 0
          }
        }
      );
      Y.id = "square" + D, re[Y.id] = N[Cy(ie, F)], y.setVelocity(Y, { x: U, y: 0 }), g.add(d, Y);
    }
  }), {
    engine: S,
    runner: o,
    render: t,
    canvas: t.canvas,
    stop: function() {
      Cr.Render.stop(t), Cr.Runner.stop(o);
    }
  };
}
export {
  Py as cdfDict,
  di as dists,
  Ay as galton
};
//# sourceMappingURL=invcdfboard.js.map
