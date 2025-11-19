import { MenuRegister } from "@/env";
import { M3U8Rule } from "./M3U8Rule";
import type { UtilsGMMenuOption } from "@whitesev/utils/dist/types/src/types/UtilsGMMenu";

/**
 * 脚本菜单相关
 */
export const M3U8Menu = {
  /**
   * 添加已匹配到的规则数量
   */
  updateISMatchedRuleMenu() {
    let option: UtilsGMMenuOption = {
      key: "matched-rule-count",
      text: `🔧 当前页面执行规则数量： ${M3U8Rule.$data.matchedRule.length}`,
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback: () => {},
    };
    MenuRegister.update(option);
  },
  /**
   * 添加/更新当前已过滤的广告片段的时长
   */
  updateIsFilterAdsDurationInfoMenu(durationTotal: number) {
    let option: UtilsGMMenuOption = {
      key: "is-filter-segment-duration",
      text: `🍵 已过滤时长：${durationTotal}s`,
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback: () => {},
    };
    MenuRegister.update(option);
  },
};
