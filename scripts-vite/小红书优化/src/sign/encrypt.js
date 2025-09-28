// @ts-nocheck
import { esm_typeof } from "./esm_typeof";

const encrypt_lookup = [
  "Z",
  "m",
  "s",
  "e",
  "r",
  "b",
  "B",
  "o",
  "H",
  "Q",
  "t",
  "N",
  "P",
  "+",
  "w",
  "O",
  "c",
  "z",
  "a",
  "/",
  "L",
  "p",
  "n",
  "g",
  "G",
  "8",
  "y",
  "J",
  "q",
  "4",
  "2",
  "K",
  "W",
  "Y",
  "j",
  "0",
  "D",
  "S",
  "f",
  "d",
  "i",
  "k",
  "x",
  "3",
  "V",
  "T",
  "1",
  "6",
  "I",
  "l",
  "U",
  "A",
  "F",
  "M",
  "9",
  "7",
  "h",
  "E",
  "C",
  "v",
  "u",
  "R",
  "X",
  "5",
];

var encrypt_mcr = (function (t) {
  var e = 67,
    r = 15,
    n = 164,
    o = 126,
    i = 137,
    a = 39,
    u = 176,
    c = 72,
    s = 56,
    l = 21,
    f = 35,
    p = 34,
    d = 35,
    h = 18,
    v = 25,
    g = 185,
    m = 1149,
    y = 744,
    w = 1295,
    _ = 1248,
    b = 1310,
    E = 1096,
    x = 1166,
    T = 1095,
    k = 1196,
    S = 1180,
    L = 1039,
    O = 976,
    R = 1347,
    I = 1117,
    A = 1168,
    C = 1233,
    N = 1157,
    P = 1006,
    B = 1122,
    F = 1277,
    M = 1288,
    j = 1271,
    D = 986,
    q = 162,
    U = {};
  function G(t, e) {
    return a0_0x10f4ac(e, t - q);
  }
  ((U[G(-73, -66)] = function (t, e) {
    return t === e;
  }),
    (U[G(e, 186)] = function (t, e) {
      return t < e;
    }),
    (U[G(-r, -n)] = function (t, e) {
      return t ^ e;
    }),
    (U[G(r, -o)] = function (t, e) {
      return t & e;
    }),
    (U[G(-i, -a)] = function (t, e) {
      return t < e;
    }),
    (U[G(-175, -u)] = function (t, e) {
      return t ^ e;
    }),
    (U[G(-59, c)] = function (t, e) {
      return t ^ e;
    }),
    (U[G(-s, -l)] = function (t, e) {
      return t >>> e;
    }),
    (U[G(f, p)] = function (t, e) {
      return t >>> e;
    }));
  for (var Z, H, V = U, Y = 3988292384, W = 256, z = []; W--; z[W] = V[G(d, -66)](Z, 0))
    for (H = 8, Z = W; H--; ) Z = V[G(r, h)](Z, 1) ? V[G(35, v)](Z, 1) ^ Y : V[G(d, g)](Z, 1);
  return function (t) {
    function e(t, e) {
      return G(e - 1181, t);
    }
    if (V[e(m, 1108)]((0, esm_typeof)(t), e(y, 914))) {
      for (var r = 0, n = -1; V[e(w, _)](r, t[e(b, 1233)]); ++r)
        n = V[e(E, x)](z[V[e(T, k)](n, 255) ^ t[e(S, L) + e(1022, O)](r)], n >>> 8);
      return V[e(R, 1166)](n, -1) ^ Y;
    }
    for (r = 0, n = -1; V[e(I, 1044)](r, t[e(A, C)]); ++r)
      n = V[e(N, P)](z[V[e(1229, B)](V[e(F, k)](n, 255), t[r])], V[e(M, 1125)](n, 8));
    return V[e(j, B)](V[e(D, 1122)](n, -1), Y);
  };
})();

function encrypt_encodeUtf8(t) {
  var e = 185,
    r = 410,
    n = 480,
    o = 222,
    i = 194,
    a = 165,
    u = 147,
    c = 290,
    s = 460,
    l = 472,
    f = 497,
    p = 462,
    d = 286,
    h = 209,
    v = 223,
    g = 590,
    m = {
      bIGxm: function (t, e) {
        return t(e);
      },
      MahgM: function (t, e) {
        return t < e;
      },
      czxKn: function (t, e) {
        return t === e;
      },
      clYIu: function (t, e) {
        return t + e;
      },
    },
    y = m[_(477, 488)](encodeURIComponent, t),
    w = [];
  function _(t, e) {
    return a0_0x10f4ac(t, e - g);
  }
  for (var b = 0; m[_(333, e)](b, y[_(r, n)]); b++) {
    var E = y[_(o, 290)](b);
    if (m[_(i, a)](E, "%")) {
      var x = y[_(u, c)](m[_(574, 472)](b, 1)) + y[_(s, 290)](m[_(605, l)](b, 2)),
        T = parseInt(x, 16);
      (w[_(592, f)](T), (b += 2));
    } else w[_(p, f)](E[_(217, d) + _(h, v)](0));
  }
  return w;
}

function encrypt_b64Encode(t) {
  var e = 664,
    r = 634,
    n = 448,
    o = 599,
    i = 315,
    a = 416,
    u = 512,
    c = 361,
    s = 406,
    l = 487,
    f = 496,
    p = 333,
    d = 630,
    h = 639,
    v = 548,
    g = 582,
    m = 447,
    y = 468,
    w = 375,
    _ = 331,
    b = 149,
    E = 382,
    x = 265,
    T = 625,
    k = 570,
    S = 551,
    L = 582,
    O = 581,
    R = 638,
    I = 618,
    A = 606,
    C = 429,
    N = 651,
    P = 667,
    B = 817,
    F = 333,
    M = 567,
    j = 747,
    D = 561,
    q = 570,
    U = 676,
    G = 840,
    Z = 240,
    H = {
      udFrB: function (t, e) {
        return t % e;
      },
      cCZFe: function (t, e) {
        return t === e;
      },
      jevwl: function (t, e) {
        return t - e;
      },
      aqlTy: function (t, e) {
        return t + e;
      },
      rceYY: function (t, e) {
        return t >> e;
      },
      OwjMq: function (t, e) {
        return t & e;
      },
      kSGXO: function (t, e) {
        return t << e;
      },
      veNiI: function (t, e) {
        return t === e;
      },
      QLthP: function (t, e) {
        return t + e;
      },
      wDtJz: function (t, e) {
        return t + e;
      },
      nYqUQ: function (t, e) {
        return t & e;
      },
      TCArD: function (t, e) {
        return t << e;
      },
      RHteb: function (t, e) {
        return t - e;
      },
      mZPJZ: function (t, e) {
        return t < e;
      },
      zDETq: function (t, e, r, n) {
        return t(e, r, n);
      },
      YlZGp: function (t, e) {
        return t > e;
      },
    };
  function V(t, e) {
    return a0_0x10f4ac(e, t - -Z);
  }
  for (var Y = (V(-413, -442) + V(-e, -r) + "7")[V(-n, -o)]("|"), W = 0; ; ) {
    switch (Y[W++]) {
      case "0":
        var z;
        continue;
      case "1":
        var X = [];
        continue;
      case "2":
        var K = H[V(-i, -a)](J, 3);
        continue;
      case "3":
        var J = t[V(-350, -u)];
        continue;
      case "4":
        H[V(-c, -s)](K, 1)
          ? ((z = t[H[V(-l, -f)](J, 1)]),
            X[V(-p, -346)](
              H[V(-d, -h)](
                encrypt_lookup[H[V(-503, -v)](z, 2)] + encrypt_lookup[H[V(-g, -741)](H[V(-331, -m)](z, 4), 63)],
                "=="
              )
            ))
          : H[V(-y, -w)](K, 2) &&
            ((z = H[V(-_, -b)](t[J - 2], 8) + t[H[V(-l, -E)](J, 1)]),
            X[V(-333, -x)](
              H[V(-T, -505)](
                H[V(-k, -S)](encrypt_lookup[z >> 10], encrypt_lookup[H[V(-L, -O)](z >> 4, 63)]) +
                  encrypt_lookup[H[V(-R, -I)](H[V(-A, -C)](z, 2), 63)],
                "="
              )
            ));
        continue;
      case "5":
        var $ = 16383;
        continue;
      case "6":
        for (var Q = 0, tt = H[V(-509, -N)](J, K); H[V(-P, -B)](Q, tt); Q += $)
          X[V(-F, -153)](
            H[V(-M, -j)](encrypt_encodeChunk, t, Q, H[V(-D, -413)](Q + $, tt) ? tt : H[V(-q, -501)](Q, $))
          );
        continue;
      case "7":
        return X[V(-U, -G)]("");
    }
    break;
  }
}

function encrypt_encodeChunk(t, e, r) {
  var n,
    o = 165,
    i = 246,
    a = 205,
    u = 353,
    c = 162,
    s = 17,
    l = 351,
    f = 191,
    p = 139,
    d = 79,
    h = 86,
    v = 233,
    g = 270,
    m = 166,
    y = {
      hwomB: function (t, e) {
        return t < e;
      },
      iHUeL: function (t, e) {
        return t & e;
      },
      ELxEv: function (t, e) {
        return t << e;
      },
      lBuRH: function (t, e) {
        return t << e;
      },
      SkIJl: function (t, e) {
        return t & e;
      },
      JYxWY: function (t, e) {
        return t + e;
      },
      CxjtF: function (t, e) {
        return t(e);
      },
    },
    w = [];
  function _(t, e) {
    return a0_0x10f4ac(t, e - m);
  }
  for (var b = e; y[_(-63, -o)](b, r); b += 3)
    ((n =
      y[_(-i, -a)](y[_(-166, -124)](t[b], 16), 16711680) +
      y[_(-u, -205)](y[_(c, -s)](t[b + 1], 8), 65280) +
      y[_(-l, -208)](t[y[_(-350, -f)](b, 2)], 255)),
      w[_(p, 73)](y[_(d, h)](encrypt_tripletToBase64, n)));
  return w[_(-v, -g)]("");
}

function encrypt_tripletToBase64(t) {
  var e = 11,
    r = 15,
    n = 199,
    o = 34,
    i = 4,
    a = 102,
    u = 276,
    c = 205,
    s = 218,
    l = 11,
    f = 115,
    p = 34,
    d = 161,
    h = 123,
    v = 335,
    g = {};
  function m(t, e) {
    return a0_0x10f4ac(e, t - v);
  }
  ((g[m(205, 328)] = function (t, e) {
    return t + e;
  }),
    (g[m(e, 53)] = function (t, e) {
      return t >> e;
    }),
    (g[m(r, n)] = function (t, e) {
      return t & e;
    }),
    (g[m(o, i)] = function (t, e) {
      return t >> e;
    }),
    (g[m(-a, -u)] = function (t, e) {
      return t & e;
    }));
  var y = g;
  return (
    y[m(c, s)](encrypt_lookup[63 & y[m(l, -75)](t, 18)], encrypt_lookup[y[m(r, f)](y[m(p, d)](t, 12), 63)]) +
    encrypt_lookup[(t >> 6) & 63] +
    encrypt_lookup[y[m(-a, -h)](t, 63)]
  );
}

function a0_0x10f4ac(t, e) {
  return a0_0x3693(e - -570, t);
}

function a0_0x3693(t, e) {
  var r = [
    "xUKNL",
    "jUrZI",
    "rviFu",
    "join",
    "get",
    "LjDtD",
    "ZJHyP",
    "wOmGY",
    "enumera",
    "aONWR",
    "string",
    "kQpMi",
    "mZPJZ",
    "Ysiay",
    "czxKn",
    "|5|6|4|",
    "prototy",
    "jklmnop",
    "MuYbw",
    "diDwk",
    "TRFtx",
    "drDHI",
    "WLARA",
    "xyz0123",
    "asBytes",
    "|6|0|1|",
    "JOtEi",
    "Oialn",
    "OQrEi",
    "uPnXq",
    "VWXYZab",
    "cIbFa",
    "qYuta",
    "QDOZZ",
    "MahgM",
    "iRXZq",
    "22098XlFGYn",
    "mmLKn",
    "jMcIE",
    "stringi",
    "[object",
    "nYqUQ",
    "jSgjk",
    "ucyEo",
    "iewJI",
    "vgTwl",
    "DnNGR",
    "oBytes",
    "Xtwzk",
    "aqlTy",
    "JWnPK",
    "1|0|2|4",
    "qrstuvw",
    "_gg",
    "QLthP",
    "FJIWy",
    "yRnhISG",
    "pjUsr",
    "KAwuh",
    "Thhoa",
    "jarkJ",
    "WjRNN",
    "asStrin",
    "x3VT16I",
    "357835LaQWjW",
    "SkIJl",
    "size",
    "iyorr",
    "iHUeL",
    "tTanW",
    "tNusJ",
    "NiSrP",
    "eAt",
    "TCArD",
    "a2r1ZQo",
    "iamspam",
    "bOnfu",
    "UNSKg",
    "HIJKLMN",
    "ZfMKC",
    "bJhXU",
    "zwAAc",
    "JYxWY",
    "lUAFM97",
    "mwaRe",
    "EzYWD",
    "replace",
    "uOtUJ",
    "__esMod",
    "ViQWI",
    "aCMFL",
    "EAKSd",
    "ule",
    "pqnFP",
    "qYDsL",
    "270726pnaYfG",
    "glBZG",
    "OwjMq",
    "YGrjc",
    "ZhAcd",
    "JDqFL",
    "456789+",
    "kEjQs",
    "lWhbD",
    "OaLTI",
    "dXlgm",
    "cVte9UJ",
    "ctor",
    "hwomB",
    "wDtJz",
    "constru",
    "ABHuC",
    "zDETq",
    "SYNeA",
    "BGbij",
    "ionFq",
    "QzaNS",
    "7|3|5|4",
    "YlZGp",
    "Bjniw",
    "ZITuN",
    "KPTzH",
    "HrBeq",
    "xobsT",
    "kXJkC",
    "QSrEZ",
    "ENXtO",
    "FYbRJ",
    "wOcza/L",
    "_hh",
    "dVXMb",
    "ppkua",
    "WgamZ",
    "HuwCW",
    "362424fnLCuh",
    "charCod",
    "HhPqg",
    "ODunI",
    "eJzqq",
    "charAt",
    "JGAgI",
    "ZmserbB",
    "TURcG",
    "WyrqF",
    "iYJzH",
    "VIwfH",
    "tzzOB",
    "YgiCH",
    "byyMQ",
    "ELxEv",
    "0DSfdik",
    "HRihr",
    "_ii",
    "aDsrp",
    "ble",
    "jTGtW",
    "configu",
    "cXiYW",
    "56kSpAsC",
    "158KIldlA",
    "oHQtNP+",
    "BHavO",
    "PCIlh",
    "QatIf",
    "IKyqh",
    "Words",
    "Qwnrg",
    "44lQAgNu",
    "cdefghi",
    "nTwxD",
    "RHteb",
    "coqPr",
    "rJwmI",
    "aBoeK",
    "default",
    "exports",
    "rceYY",
    "isArray",
    "mdKKO",
    "kzxWE",
    "DeBtm",
    "tjjUn",
    "vJEcD",
    "LpfE8xz",
    "bin",
    "HKazo",
    "rable",
    "call",
    "wordsTo",
    "zBiyt",
    "GrsGL",
    "fqulF",
    "jevwl",
    "mxfLj",
    "xlUnt",
    "q42KWYj",
    "endian",
    "eEqDc",
    "oyGAZ",
    "bytesTo",
    "OzjuJ",
    "IfwWq",
    "ize",
    "6648810piiNEz",
    "lTHdy",
    "vDLZJ",
    "stringT",
    "A4NjFqY",
    "GkjTz",
    "eooJA",
    "substr",
    "veNiI",
    "LYfDp",
    "ljKsP",
    "jJYWG",
    "bcYAf",
    "srikB",
    "utf8",
    "qTbeY",
    "yqRzd",
    "|3|5",
    "bjbAy",
    " Array]",
    "rMbXP",
    "u5wPHsO",
    "test",
    "gMIMC",
    "Deyqv",
    " argume",
    "ABCDEFG",
    "undefin",
    "split",
    "QTlsj",
    "_isBuff",
    "OPQRSTU",
    "Illegal",
    "loSen",
    "navigat",
    "ObwNo",
    "qPbcq",
    "7182692QogvXX",
    "tvqSn",
    "DGptJ",
    "HhTfW",
    "avIYx",
    "defineP",
    "PFQbW",
    "CjFyM",
    "toStrin",
    "yMWXS",
    "yMyOy",
    "0XTdDgM",
    "eXkru",
    "_blocks",
    "indexOf",
    "mbBQr",
    "lBuRH",
    "HzGjH",
    "HNErV",
    "mEokX",
    "userAge",
    "UpmtD",
    "sgomx",
    "KDfKS",
    "OTbSq",
    "lxMGW",
    "0|3|2|1",
    "dfWyB",
    "lWzAd",
    "eyXTL",
    "5624qreyZK",
    "pow",
    "IJstz",
    "LMlMB",
    "INlwI",
    "lRulU",
    "TCgZh",
    "_digest",
    "UBhIl",
    "fLtZZ",
    "FYSKq",
    "2|8|0",
    "IoCeZ",
    " Object",
    "UuTvI",
    "lNKLD",
    "String",
    "Bytes",
    "rBVvW",
    "KblCWi+",
    "pRaIH",
    "roperty",
    "vTINI",
    "atLE",
    "functio",
    "Udqoy",
    "nt ",
    "htSWx",
    "hEwRK",
    "encodin",
    "sCSVK",
    "VuAZF",
    "xeIIy",
    "RBjMb",
    "taTrq",
    "vDLFJ",
    "bPkya",
    "HzimH",
    "nCffO",
    "BWbtU",
    "2|8",
    "slice",
    "lxMGQ",
    "tTiwe",
    "JDhJB",
    "rCode",
    "gNDzY",
    "wJkyu",
    "cCZFe",
    "RNGSl",
    "floor",
    "clYIu",
    "vLiwz",
    "BiNSE",
    "MtYWB",
    "fromCha",
    "StNOc",
    "|7|5|3|",
    "9|1|4|6",
    "length",
    "UNYAE",
    "pngG8yJ",
    "hasOwnP",
    "pYeWu",
    "wTjkk",
    "Bvk6/7=",
    "KTmgk",
    "bIGxm",
    "readFlo",
    "LFZch",
    "_ff",
    "1|3|4|2",
    "binary",
    "LLdJZ",
    "ZofOU",
    "6399uFPxTQ",
    "push",
    "YntPT",
    "kSGXO",
    "random",
    "HfpCU",
    "hECvuRX",
    "getTime",
    "iwSyV",
    "alert",
    "LKMcb",
    "DJVdg",
    "Hex",
    "URzKO",
    "CxjtF",
    "ZVOCs",
    "isBuffe",
    "vGpbT",
    "rotl",
    "udFrB",
    "CnbsH",
    "crLST",
  ];
  return r[(t -= 131)];
}

function genTraceId() {
  for (var t = "", e = 0; e < 16; e++) t += "abcdef0123456789".charAt(Math.floor(16 * Math.random()));
  return t;
}

export { genTraceId, encrypt_mcr, encrypt_encodeUtf8, encrypt_b64Encode };
