interface TiebaData {
    /**
     * 当前吧名
     */
    forumName?: string;
    /**
     * 高清图片映射
     */
    imageMap: Map<string, string>;
}

/**
 * 贴吧数据信息
 */
const TiebaData: TiebaData = {
    forumName: void 0,
    imageMap: new Map(),
};

export {
    TiebaData
}