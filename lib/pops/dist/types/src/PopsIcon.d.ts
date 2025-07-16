export declare const PopsIcon: {
    $data: {
        loading: string;
        close: string;
        min: string;
        mise: string;
        max: string;
        edit: string;
        share: string;
        delete: string;
        search: string;
        upload: string;
        next: string;
        prev: string;
        eleme: string;
        elemePlus: string;
        chromeFilled: string;
        cpu: string;
        videoPlay: string;
        videoPause: string;
        headset: string;
        monitor: string;
        documentCopy: string;
        picture: string;
        circleClose: string;
        view: string;
        hide: string;
        keyboard: string;
        arrowRight: string;
        arrowLeft: string;
    };
    /**
     * 判断是否存在某个icon
     * @param iconName 图标名
     */
    hasIcon(iconName: string): boolean;
    /**
     * 获取icon
     * @param iconName 图标名
     */
    getIcon(iconName: string): string | null;
    /**
     * 删除图标
     * @param iconName 图标名
     */
    deleteIcon(iconName: string): boolean;
    /**
     * 设置图标
     * @param iconName 图标名
     * @param iconHTML 图标html
     */
    setIcon(iconName: string, iconHTML: string): void;
};
