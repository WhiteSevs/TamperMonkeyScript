// @ts-nocheck
const crc32 = function (t) {
  for (var e, r = [], n = 0; n < 256; n++) {
    e = n;
    for (var o = 0; o < 8; o++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
    r[n] = e;
  }
  for (var i = -1, a = 0; a < t.length; a++) i = (i >>> 8) ^ r[255 & (i ^ t.charCodeAt(a))];
  return (-1 ^ i) >>> 0;
};
const genRandomString = function (t) {
  const r = Array(t).fill(undefined);
  return r
    .map((i) => {
      return "abcdefghijklmnopqrstuvwxyz1234567890"[Math.floor(36 * Math.random())];
    })
    .join("");
};
const generateA1 = function () {
  const a = 3;
  const o = "".concat((+new Date()).toString(16));
  const n = o.concat(genRandomString(30));
  const r = n.concat(a);
  const e = r.concat("0");
  const u = e.concat("000");
  const c = crc32(u);
  const i = "".concat(u);
  return i.concat(c).substring(0, 52);
};
const a1 = generateA1();

export { a1 };
