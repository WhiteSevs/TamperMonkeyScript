export declare class ColorConversion {
    /**
     * 判断是否是16进制颜色
     * @param str
     */
    isHex(str: string): boolean;
    /**
     * 16进制颜色转rgba
     *
     * 例如：`#ff0000` 转为 `rgba(123,123,123, 0.4)`
     * @param hex
     * @param opacity
     */
    hexToRgba(hex: string, opacity: number): string;
    /**
     * hex转rgb
     * @param str
     */
    hexToRgb(str: string): RegExpMatchArray;
    /**
     * rgb转hex
     * @param redValue
     * @param greenValue
     * @param blueValue
     */
    rgbToHex(redValue: string | number, greenValue: string | number, blueValue: string | number): string;
    /**
     * 获取颜色变暗或亮
     * @param color 颜色
     * @param level 0~1.0
     */
    getDarkColor(color: string, level: string): string;
    /**
     * 获取颜色变亮
     * @param color 颜色
     * @param level 0~1.0
     */
    getLightColor(color: string, level: number): string;
}
