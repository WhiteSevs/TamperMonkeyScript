// bvid to aid, ref: https://greasyfork.org/scripts/394296

/**
 * bv号转av号
 * @param {string} bvid
 * @returns
 */
export function b2a(bvid) {
  const XOR_CODE = 23442827791579n;
  const MASK_CODE = 2251799813685247n;
  const BASE = 58n;
  const BYTES = ["B", "V", 1, "", "", "", "", "", "", "", "", ""];
  const BV_LEN = BYTES.length;
  const ALPHABET = "FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf".split("");
  const DIGIT_MAP = [0, 1, 2, 9, 7, 5, 6, 4, 8, 3, 10, 11];

  let r = 0n;
  for (let i = 3; i < BV_LEN; i++) {
    r = r * BASE + BigInt(ALPHABET.indexOf(bvid[DIGIT_MAP[i]]));
  }
  return `${(r & MASK_CODE) ^ XOR_CODE}`;
}
