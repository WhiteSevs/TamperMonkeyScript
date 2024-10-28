import type { ProgressParamConfig } from "./types/Progress";
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
