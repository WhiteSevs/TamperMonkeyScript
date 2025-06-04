import type { PopsIconType } from "./types/icon";
export declare const PopsIcon: {
    $data: { [key in PopsIconType]: string; };
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
