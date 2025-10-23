export declare class ColorConversion {
    /**
     * 判断是否是16进制颜色
     * @param str 十六进制颜色，如`#000000`
     */
    isHex(str: string): boolean;
    /**
     * 16进制颜色转rgba
     *
     * 例如：`#ff0000` 转为 `rgba(123,123,123, 0.4)`
     * @param hex 十六进制颜色，如`#000000`
     * @param opacity 透明度，0~1
     */
    hexToRgba(hex: string, opacity: number): string;
    /**
     * hex转rgb
     * @param hex 十六进制颜色，如`#000000`
     */
    hexToRgb(hex: string): RegExpMatchArray;
    /**
     * rgb转hex
     * @param redValue 红色值
     * @param greenValue 绿色值
     * @param blueValue 蓝色值
     * @returns hex
     */
    rgbToHex(redValue: string | number, greenValue: string | number, blueValue: string | number): string;
    /**
     * 获取颜色变暗或亮
     * @param color hex颜色，如`#000000`
     * @param level 0~1.0 系数越大，颜色越变暗
     */
    getDarkColor(color: string, level: number | string): string;
    /**
     * 获取颜色变亮
     * @param color hex颜色，如`#000000`
     * @param level 0~1.0 系数越大，颜色越变亮
     */
    getLightColor(color: string, level: number | string): string;
}
