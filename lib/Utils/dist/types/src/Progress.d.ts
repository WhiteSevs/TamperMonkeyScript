import type { ProgressParamConfig } from "./types/Progress";
export declare class Progress {
    #private;
    /**
     *
     * @param paramConfig 配置信息
     */
    constructor(paramConfig: ProgressParamConfig);
    /**
     * 绘制
     */
    draw(): void;
}
