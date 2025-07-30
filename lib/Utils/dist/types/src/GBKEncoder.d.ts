export declare class GBKEncoder {
    #private;
    constructor();
    private handleText;
    private isAscii;
    /**
     * 编码
     * @param str
     */
    encode(str: string): string;
    /**
     * 解码
     * @param str
     */
    decode(str: string): string;
}
