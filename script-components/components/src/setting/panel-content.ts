import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { utils } from "../base.env";
import { GM_info } from "ViteGM";

/**
 * 油猴菜单内容配置
 */
export const PanelContent = {
  $data: {
    /**
     * @private
     */
    __contentConfig: null as null | UtilsDictionary<number, PopsPanelContentConfig[]>,
    get contentConfig() {
      if (this.__contentConfig == null) {
        this.__contentConfig = new utils.Dictionary<number, PopsPanelContentConfig[]>();
      }
      return this.__contentConfig;
    },
  },
  /**
   * 设置所有配置项，用于初始化默认的值
   *
   * 如果是第一组添加的话，那么它默认就是设置菜单打开的配置
   * @param configList 配置项
   */
  addContentConfig(configList: PopsPanelContentConfig | PopsPanelContentConfig[]) {
    if (!Array.isArray(configList)) {
      configList = [configList];
    }
    let index = this.$data.contentConfig.keys().length;
    this.$data.contentConfig.set(index, configList);
  },
  /**
   * 获取所有的配置内容，用于初始化默认的值
   */
  getAllContentConfig(): PopsPanelContentConfig[] {
    return this.$data.contentConfig.values().flat();
  },
  /**
   * 获取配置内容
   * @param index 配置索引
   */
  getConfig(index: number = 0): PopsPanelContentConfig[] {
    return this.$data.contentConfig.get(index) ?? [];
  },
  /**
   * 获取默认左侧底部的配置项
   */
  getDefaultBottomContentConfig(): PopsPanelContentConfig[] {
    return [
      {
        id: "script-version",
        title: `版本：${GM_info?.script?.version || "未知"}`,
        isBottom: true,
        forms: [],
        clickFirstCallback(event, rightHeaderElement, rightContainerElement) {
          let supportURL = GM_info?.script?.supportURL || GM_info?.script?.namespace;
          if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
            window.open(supportURL, "_blank");
          }
          return false;
        },
      },
    ];
  },
};
