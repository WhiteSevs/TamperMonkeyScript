import { log } from "../env.base";
import { Panel } from "./../setting/panel";
import { ShortCut, type ShortCutOption } from "./ShortCut";

export type SwitchShortCutExecMenuConfig = { key: string; name: string };
export const SwitchShortCut = (KEY: string) => {
  return {
    shortCut: new ShortCut(KEY),
    /**
     * 待执行的键
     * @private
     */
    execConfig: [] as SwitchShortCutExecMenuConfig[],
    init() {
      const shortCutOption: ShortCutOption = {};
      this.execConfig.forEach((it) => {
        const { key, name } = it;
        shortCutOption[key] = {
          target: "window",
          callback() {
            log.info(`快捷键 ==> ${name ?? key}`);
            const enable = Panel.getValue(key);
            Panel.setValue(key, !enable);
          },
        };
      });
      this.shortCut.initGlobalKeyboardListener(shortCutOption);
    },
    /**
     * 添加
     * @param key 待执行的快捷键配置
     */
    add(key: SwitchShortCutExecMenuConfig) {
      if (this.execConfig.includes(key)) return;
      this.execConfig.push(key);
    },
    /**
     * 删除
     * @param key 需移除待执行的快捷键配置
     */
    delete(key: SwitchShortCutExecMenuConfig) {
      const findIndex = this.execConfig.findIndex((item) => item === key);
      if (findIndex === -1) return;
      this.execConfig.splice(findIndex, 1);
    },
  };
};
