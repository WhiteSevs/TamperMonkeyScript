import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { ShortCut, ShortCutOption } from "@components/utils/ShortCut";

export const DouYinShortCut = {
  shortCut: new ShortCut("general-short-cut"),
  $data: {},
  init() {
    this.shortCut.initGlobalKeyboardListener(this.shorCutMapOption(), {
      capture: true,
      beforeCallBack() {},
    });
  },
  /**
   * 快捷键配置
   */
  shorCutMapOption(): ShortCutOption {
    return {
      "shortcut-shieldLeftNavigator": {
        callback() {
          log.info("触发快捷键 ==> 【屏蔽】左侧导航栏");
          const KEY = "shieldLeftNavigator";
          const enable = Panel.getValue(KEY);
          Panel.setValue(KEY, !enable);
        },
      },
      "shortcut-shieldTopNavigator": {
        callback() {
          log.info("触发快捷键 ==> 【屏蔽】顶部导航栏");
          const KEY = "shieldTopNavigator";
          const enable = Panel.getValue(KEY);
          Panel.setValue(KEY, !enable);
        },
      },
    };
  },
};
