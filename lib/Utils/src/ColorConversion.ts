export class ColorConversion {
  /**
   * 判断是否是16进制颜色
   * @param str
   */
  isHex(str: string): boolean {
    if (typeof str !== "string") {
      return false;
    }
    if (!str.match(/^(#|)[0-9a-fA-F]{6}$/)) {
      return false;
    }
    return true;
  }
  /**
   * 16进制颜色转rgba
   *
   * 例如：`#ff0000` 转为 `rgba(123,123,123, 0.4)`
   * @param hex
   * @param opacity
   */
  hexToRgba(hex: string, opacity: number): string {
    if (!this.isHex(hex)) {
      throw new TypeError(`输入错误的hex：${hex}`);
    }
    return hex && hex.replace(/\s+/g, "").length === 7
      ? `rgba(${parseInt(`0x${hex.slice(1, 3)}`)},${parseInt(`0x${hex.slice(3, 5)}`)},${parseInt(
          `0x${hex.slice(5, 7)}`
        )},${opacity})`
      : "";
  }
  /**
   * hex转rgb
   * @param str
   */
  hexToRgb(str: string) {
    if (!this.isHex(str)) {
      throw new TypeError(`输入错误的hex：${str}`);
    }
    /* replace替换查找的到的字符串 */
    str = str.replace("#", "");
    /* match得到查询数组 */
    const hxs = str.match(/../g)!;
    for (let index = 0; index < 3; index++) {
      const value = parseInt(hxs[index], 16);
      Reflect.set(hxs, index, value);
    }

    return hxs;
  }
  /**
   * rgb转hex
   * @param redValue
   * @param greenValue
   * @param blueValue
   */
  rgbToHex(redValue: string | number, greenValue: string | number, blueValue: string | number): string {
    /* 验证输入的rgb值是否合法 */
    const validPattern = /^\d{1,3}$/;
    if (
      !validPattern.test(redValue.toString()) ||
      !validPattern.test(greenValue.toString()) ||
      !validPattern.test(blueValue.toString())
    )
      throw new TypeError("输入错误的rgb颜色值");
    const hexs = [redValue.toString(16), greenValue.toString(16), blueValue.toString(16)];
    for (let index = 0; index < 3; index++) if (hexs[index].length == 1) hexs[index] = `0${hexs[index]}`;
    return `#${hexs.join("")}`;
  }
  /**
   * 获取颜色变暗或亮
   * @param color 颜色
   * @param level 0~1.0
   */
  getDarkColor(color: string, level: string): string {
    if (!this.isHex(color)) {
      throw new TypeError(`输入错误的hex：${color}`);
    }
    const rgbc = this.hexToRgb(color);
    for (let index = 0; index < 3; index++) {
      const rgbcItemValue = rgbc[index];
      const value = Math.floor(Number(rgbcItemValue) * (1 - Number(level)));
      Reflect.set(rgbc, index, value);
    }

    return this.rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
  }
  /**
   * 获取颜色变亮
   * @param color 颜色
   * @param level 0~1.0
   */
  getLightColor(color: string, level: number): string {
    if (!this.isHex(color)) {
      throw new TypeError(`输入错误的hex：${color}`);
    }
    const rgbc = this.hexToRgb(color);
    for (let index = 0; index < 3; index++) {
      const rgbcItemValue = Number(rgbc[index]);
      const value = Math.floor(255 - rgbcItemValue * level + rgbcItemValue);
      Reflect.set(rgbc, index, value);
    }
    return this.rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
  }
}
