import { log } from "@/env";
import Utils from "@whitesev/utils";

export const NetDiskIcon = {
  /**
   * 图标RESOURCE_ICON
   * 从图标库中引入并覆盖
   */
  src: new Utils.Dictionary<string, string>(),
  /**
   * 判断图标字典中是否存在该键
   * @param iconKey 图标键
   */
  hasIcon(iconKey: string) {
    return this.src.has(iconKey);
  },
  /**
   * 添加图标数据
   * @param iconKey 图标键
   * @param iconValue 图标值
   */
  addIcon(iconKey: string, iconValue: string) {
    if (this.hasIcon(iconKey)) {
      log.warn("图标字典中已存在该icon：" + iconKey);
      return false;
    } else {
      return this.src.set(iconKey, iconValue);
    }
  },
  /**
   * 获取图标数据
   * @param iconKey 图标键
   */
  getIcon(iconKey: string) {
    return this.src.get(iconKey);
  },
  /**
   * 合并图标数据
   * @param icon_src 图标数据
   */
  assign(icon_src: { [key: string]: string }) {
    const icon_keys = Object.keys(icon_src);
    for (let index = 0; index < icon_keys.length; index++) {
      const icon_key = icon_keys[index];
      const icon_value = icon_src[icon_key];
      this.addIcon(icon_key, icon_value);
    }
  },
};
