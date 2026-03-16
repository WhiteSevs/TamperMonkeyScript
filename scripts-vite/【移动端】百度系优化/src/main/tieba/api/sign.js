function s() {}
/**
 * @param {number} e
 * @param {number} t
 */
function c(e, t) {
  var n = (65535 & e) + (65535 & t);
  return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
}
/**
 * @param {number} e
 * @param {any} t
 * @param {any} n
 * @param {any} r
 * @param {any} i
 * @param {any} a
 */
function u(e, t, n, r, i, a) {
  return c(((o = c(c(t, e), c(r, a))) << (s = i)) | (o >>> (32 - s)), n);
  var o, s;
}
/**
 * @param {number} e
 * @param {number} t
 * @param {number} n
 * @param {number} r
 * @param {any} i
 * @param {number} a
 * @param {number} o
 */
function l(e, t, n, r, i, a, o) {
  return u((t & n) | (~t & r), e, t, i, a, o);
}
/**
 * @param {number} e
 * @param {number} t
 * @param {number} n
 * @param {number} r
 * @param {any} i
 * @param {number} a
 * @param {number} o
 */
function p(e, t, n, r, i, a, o) {
  return u((t & r) | (n & ~r), e, t, i, a, o);
}
/**
 * @param {number} e
 * @param {number} t
 * @param {number} n
 * @param {number} r
 * @param {any} i
 * @param {number} a
 * @param {number} o
 */
function f(e, t, n, r, i, a, o) {
  return u(t ^ n ^ r, e, t, i, a, o);
}
/**
 * @param {number} e
 * @param {number} t
 * @param {number} n
 * @param {number} r
 * @param {any} i
 * @param {number} a
 * @param {number} o
 */
function d(e, t, n, r, i, a, o) {
  return u(n ^ (t | ~r), e, t, i, a, o);
}
/**
 * @param {string | any[]} e
 * @param {number} t
 */
function m(e, t) {
  var n, r, i, a, o;
  // @ts-ignore
  ((e[t >> 5] |= 128 << (t % 32)), (e[14 + (((t + 64) >>> 9) << 4)] = t));
  var s = 1732584193,
    u = -271733879,
    m = -1732584194,
    g = 271733878;
  for (n = 0; n < e.length; n += 16)
    ((r = s),
      (i = u),
      (a = m),
      (o = g),
      (s = l(s, u, m, g, e[n], 7, -680876936)),
      (g = l(g, s, u, m, e[n + 1], 12, -389564586)),
      (m = l(m, g, s, u, e[n + 2], 17, 606105819)),
      (u = l(u, m, g, s, e[n + 3], 22, -1044525330)),
      (s = l(s, u, m, g, e[n + 4], 7, -176418897)),
      (g = l(g, s, u, m, e[n + 5], 12, 1200080426)),
      (m = l(m, g, s, u, e[n + 6], 17, -1473231341)),
      (u = l(u, m, g, s, e[n + 7], 22, -45705983)),
      (s = l(s, u, m, g, e[n + 8], 7, 1770035416)),
      (g = l(g, s, u, m, e[n + 9], 12, -1958414417)),
      (m = l(m, g, s, u, e[n + 10], 17, -42063)),
      (u = l(u, m, g, s, e[n + 11], 22, -1990404162)),
      (s = l(s, u, m, g, e[n + 12], 7, 1804603682)),
      (g = l(g, s, u, m, e[n + 13], 12, -40341101)),
      (m = l(m, g, s, u, e[n + 14], 17, -1502002290)),
      (s = p(s, (u = l(u, m, g, s, e[n + 15], 22, 1236535329)), m, g, e[n + 1], 5, -165796510)),
      (g = p(g, s, u, m, e[n + 6], 9, -1069501632)),
      (m = p(m, g, s, u, e[n + 11], 14, 643717713)),
      (u = p(u, m, g, s, e[n], 20, -373897302)),
      (s = p(s, u, m, g, e[n + 5], 5, -701558691)),
      (g = p(g, s, u, m, e[n + 10], 9, 38016083)),
      (m = p(m, g, s, u, e[n + 15], 14, -660478335)),
      (u = p(u, m, g, s, e[n + 4], 20, -405537848)),
      (s = p(s, u, m, g, e[n + 9], 5, 568446438)),
      (g = p(g, s, u, m, e[n + 14], 9, -1019803690)),
      (m = p(m, g, s, u, e[n + 3], 14, -187363961)),
      (u = p(u, m, g, s, e[n + 8], 20, 1163531501)),
      (s = p(s, u, m, g, e[n + 13], 5, -1444681467)),
      (g = p(g, s, u, m, e[n + 2], 9, -51403784)),
      (m = p(m, g, s, u, e[n + 7], 14, 1735328473)),
      (s = f(s, (u = p(u, m, g, s, e[n + 12], 20, -1926607734)), m, g, e[n + 5], 4, -378558)),
      (g = f(g, s, u, m, e[n + 8], 11, -2022574463)),
      (m = f(m, g, s, u, e[n + 11], 16, 1839030562)),
      (u = f(u, m, g, s, e[n + 14], 23, -35309556)),
      (s = f(s, u, m, g, e[n + 1], 4, -1530992060)),
      (g = f(g, s, u, m, e[n + 4], 11, 1272893353)),
      (m = f(m, g, s, u, e[n + 7], 16, -155497632)),
      (u = f(u, m, g, s, e[n + 10], 23, -1094730640)),
      (s = f(s, u, m, g, e[n + 13], 4, 681279174)),
      (g = f(g, s, u, m, e[n], 11, -358537222)),
      (m = f(m, g, s, u, e[n + 3], 16, -722521979)),
      (u = f(u, m, g, s, e[n + 6], 23, 76029189)),
      (s = f(s, u, m, g, e[n + 9], 4, -640364487)),
      (g = f(g, s, u, m, e[n + 12], 11, -421815835)),
      (m = f(m, g, s, u, e[n + 15], 16, 530742520)),
      (s = d(s, (u = f(u, m, g, s, e[n + 2], 23, -995338651)), m, g, e[n], 6, -198630844)),
      (g = d(g, s, u, m, e[n + 7], 10, 1126891415)),
      (m = d(m, g, s, u, e[n + 14], 15, -1416354905)),
      (u = d(u, m, g, s, e[n + 5], 21, -57434055)),
      (s = d(s, u, m, g, e[n + 12], 6, 1700485571)),
      (g = d(g, s, u, m, e[n + 3], 10, -1894986606)),
      (m = d(m, g, s, u, e[n + 10], 15, -1051523)),
      (u = d(u, m, g, s, e[n + 1], 21, -2054922799)),
      (s = d(s, u, m, g, e[n + 8], 6, 1873313359)),
      (g = d(g, s, u, m, e[n + 15], 10, -30611744)),
      (m = d(m, g, s, u, e[n + 6], 15, -1560198380)),
      (u = d(u, m, g, s, e[n + 13], 21, 1309151649)),
      (s = d(s, u, m, g, e[n + 4], 6, -145523070)),
      (g = d(g, s, u, m, e[n + 11], 10, -1120210379)),
      (m = d(m, g, s, u, e[n + 2], 15, 718787259)),
      (u = d(u, m, g, s, e[n + 9], 21, -343485551)),
      (s = c(s, r)),
      (u = c(u, i)),
      (m = c(m, a)),
      (g = c(g, o)));
  return [s, u, m, g];
}
/**
 * @param {string | any[]} e
 */
function g(e) {
  var t,
    n = "",
    r = 32 * e.length;
  for (t = 0; t < r; t += 8) n += String.fromCharCode((e[t >> 5] >>> (t % 32)) & 255);
  return n;
}
/**
 * @param {string} e
 */
function v(e) {
  var t,
    n = [];
  for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
  var r = 8 * e.length;
  // @ts-ignore
  for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << (t % 32);
  return n;
}
/**
 * @param {string} e
 */
function hh(e) {
  var t,
    n,
    r = "";
  for (n = 0; n < e.length; n += 1)
    ((t = e.charCodeAt(n)), (r += "0123456789abcdef".charAt((t >>> 4) & 15) + "0123456789abcdef".charAt(15 & t)));
  return r;
}
/**
 * @param {string | number | boolean} e
 */
function b(e) {
  return unescape(encodeURIComponent(e));
}

/**
 * @param {any} e
 */
function y(e) {
  return (function (e) {
    return g(m(v(e), 8 * e.length));
  })(b(e));
}

/**
 * @param {string | number | boolean} e
 * @param {string | number | boolean} t
 */
function A(e, t) {
  return (function (e, t) {
    var n,
      r,
      i = v(e),
      a = [],
      o = [];
    for (a[15] = o[15] = void 0, i.length > 16 && (i = m(i, 8 * e.length)), n = 0; n < 16; n += 1)
      // @ts-ignore
      ((a[n] = 909522486 ^ i[n]), (o[n] = 1549556828 ^ i[n]));
    return ((r = m(a.concat(v(t)), 512 + 8 * t.length)), g(m(o.concat(r), 640)));
  })(b(e), b(t));
}
/**
 * @param {any} e
 * @param {any} t
 * @param {any} n
 */
function w(e, t, n) {
  return t ? (n ? A(t, e) : hh(A(t, e))) : n ? y(e) : hh(y(e));
}

const _ = {
  Client: "client_fe",
  Harmony: "client_fe",
  PC: "pc",
  ShoubaiUgc: "shoubai_ugc",
  SmallappBaidu: "smallapp",
  SmallappQq: "smallapp_qq",
  SmallappWeixin: "smallapp_weixin",
  Wise: "newwise",
};
const O = Object.assign;
/**
 *
 * @param {any} e 请求参数
 * @param {string} t
 */
export const tieba_add_request_params_sign = (e, t = "pc") => {
  var n = "",
    r = [],
    i =
      t === _.PC
        ? "36770b1f34c9bbf2e7d1a99d2b82fa9e"
        : ["newwise", "shoubai_ugc", "smallapp", "smallapp_weixin", "smallapp_qq"].includes(t)
          ? "0039d79dc3cc2075129745a30237a3c4"
          : "tiebaclient!!!";
  for (var a in e) ["sign", "sig"].includes(a) || r.push(a);
  const ret =
    ((r = r.sort(function (e, t) {
      return e > t ? 1 : -1;
    })).forEach(function (t) {
      n += t + "=" + e[t];
    }),
    (n += i),
    O(O({}, e), { sign: w(n, "", "") }));
  e.sign = ret.sign;
  return e;
};
