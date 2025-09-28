import { DOMUtils } from "@/env";

export const M3U8Util = {
  /**
   * 把时长转为字符串文本
   *
   * @example
   * 126
   * > 02:06:00
   */
  duration2Text(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const secs = parseInt((duration % 60).toString());

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
    ].join(":");
  },
  /**
   * 计算字符串的相似度
   * @param sourceText 源文本
   * @param targetText 比较文本
   */
  similar(sourceText: string, targetText: string) {
    if (!sourceText || !targetText) {
      return 0;
    }
    var l = sourceText.length > targetText.length ? sourceText.length : targetText.length;
    var n = sourceText.length;
    var m = targetText.length;
    var d: any[] = [];
    var min = function (a: number, b: number, c: number) {
      return a < b ? (a < c ? a : c) : b < c ? b : c;
    };
    var i, j, si, tj, cost;
    if (n === 0) return m;
    if (m === 0) return n;
    for (i = 0; i <= n; i++) {
      d[i] = [];
      d[i][0] = i;
    }
    for (j = 0; j <= m; j++) {
      d[0][j] = j;
    }
    for (i = 1; i <= n; i++) {
      si = sourceText.charAt(i - 1);
      for (j = 1; j <= m; j++) {
        tj = targetText.charAt(j - 1);
        if (si === tj) {
          cost = 0;
        } else {
          cost = 1;
        }
        d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      }
    }
    let res = 1 - d[n][m] / l;
    // return res.toFixed(f);
    return res;
  },
};
