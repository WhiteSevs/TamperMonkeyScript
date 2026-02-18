import CryPto from "crypto-js";

function o() {
  return CryPto;
}
const s = "ZGluZ0hhby1kaXNrLWFwcA==",
  u = [
    "T",
    "U",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "0",
    "M",
    "N",
    "O",
    "P",
    "X",
    "Y",
    "Z",
    "V",
    "W",
    "Q",
    "1",
    "2",
    "3",
    "4",
    "a",
    "b",
    "c",
    "d",
    "e",
    "5",
    "6",
    "7",
    "8",
    "9",
    "v",
    "w",
    "x",
    "y",
    "z",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "L",
    "R",
    "S",
    "I",
    "J",
    "K",
  ];

function c() {
  const e = new Uint8Array(
      atob(s)
        .split("")
        .map((e) => e.charCodeAt(0))
    ),
    t = new TextDecoder("utf-8").decode(e);
  return t;
}

export const EncryUtil = {
  // @ts-expect-error
  encrypt(e) {
    const t = o().enc.Utf8.parse(c()),
      n = o().enc.Utf8.parse(e),
      r = o().AES.encrypt(n, t, {
        mode: o().mode.ECB,
        padding: o().pad.Pkcs7,
      });
    return r;
  },
  // @ts-expect-error
  decryptBase64(e) {
    var t = o().enc.Utf8.parse(c()),
      n = o().AES.decrypt(e, t, {
        mode: o().mode.ECB,
        padding: o().pad.Pkcs7,
      });
    return o().enc.Utf8.stringify(n).toString();
  },
  // @ts-expect-error
  encryptHex(e) {
    const t = this.encrypt(e);
    return (() => t.ciphertext.toString().toUpperCase())();
  },
  // @ts-expect-error
  encryptBase64(e) {
    const t = this.encrypt(e);
    return o().enc.Base64.stringify(t.ciphertext);
  },
  // @ts-expect-error
  decryptHex(e) {
    const t = o().enc.Hex.parse(e),
      n = o().enc.Base64.stringify(t);
    return this.decryptBase64(n);
  },
  // @ts-expect-error
  idEncrypt(e) {
    return 111;
  },
  // @ts-expect-error
  decodeChar(e) {
    for (let t = 0; t < u.length; t++) if (e == u[t]) return t;
    return -1;
  },
  //   md5Encry(e) {
  //     return "" != e ? a()(e) : void 0;
  //   },
};
