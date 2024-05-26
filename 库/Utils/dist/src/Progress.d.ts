declare interface ProgressParamConfig {
    /** canvas元素节点 */
    canvasNode: HTMLCanvasElement;
    /** 绘制角度，默认：95 */
    deg: number;
    /** 进度，默认：0 */
    progress: number;
    /** 绘制的线宽度，默认：10 */
    lineWidth: number;
    /** 绘制的背景颜色，默认：#1e637c */
    lineBgColor: string;
    /** 绘制的线的颜色，默认：#25deff */
    lineColor: string;
    /** 绘制的字体颜色，默认：#000000 */
    textColor: string;
    /** 绘制的字体大小(px)，默认：22px */
    fontSize: number;
    /** 绘制的圆的半径，默认：50 */
    circleRadius: number;
}
declare class Progress {
    #private;
    /**
     *
     * @param paramConfig 配置信息
     */
    constructor(paramConfig: ProgressParamConfig);
    /**
     * 初始化
     */
    private init;
    /**
     * 绘制
     */
    draw(): void;
}
export { Progress };
