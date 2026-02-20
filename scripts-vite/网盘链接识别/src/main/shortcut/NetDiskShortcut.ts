import { log } from "@/env";
import { ShortCut, type ShortCutOption } from "@components/utils/ShortCut";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDisk } from "../NetDisk";
import { NetDiskRuleManager } from "../NetDiskRuleManager";
import { NetDiskUserRuleUI } from "../rule/user-rule/NetDiskUserRuleUI";
import { NetDiskView } from "../view/NetDiskView";
import { NetDiskSettingView } from "../view/setting/NetDiskSettingView";
import { NetDiskWorker } from "../worker/NetDiskWorker";
import { NetDiskWorkerUtils } from "../worker/NetDiskWorkerUtils";

export const NetDiskShortcut = {
  shortCut: new ShortCut("GM_shortcut"),
  init() {
    this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
  },
  getShortCutMap(): ShortCutOption {
    return {
      "netdisk-keyboard-open-setting": {
        target: "window",
        callback: () => {
          log.info("快捷键 ==> 【打开】⚙ 设置");
          NetDiskSettingView.show();
        },
      },
      "netdisk-keyboard-open-history-matching-records": {
        target: "window",
        callback: () => {
          log.info("快捷键 ==> 【打开】⚙ 历史匹配记录");
          NetDiskView.$inst.historyMatch.show();
        },
      },
      "netdisk-keyboard-open-user-rule": {
        target: "window",
        callback: () => {
          log.info("快捷键 ==> 【打开】⚙ 链接识别规则");
          NetDiskUserRuleUI.show(false);
        },
      },
      "netdisk-keyboard-open-proactively-recognize-text": {
        target: "window",
        callback: () => {
          log.info("快捷键 ==> 【打开】⚙ 主动识别文本");
          NetDiskView.$inst.matchPasteText.show();
        },
      },
      "netdisk-keyboard-performPageTextMatchingManually": {
        target: "window",
        callback() {
          log.info("快捷键 ==> 执行文本匹配");
          NetDiskWorker.$flag.dispatchMonitorDOMChange = true;
        },
      },
      "netdisk-keyboard-character-mapping": {
        target: "window",
        callback() {
          log.info("快捷键 ==> 【打开】⚙ 字符映射规则");
          NetDiskRuleManager.showView("字符映射");
        },
      },
      "netdisk-keyboard-identifyTheSelectedContent": {
        target: "window",
        callback() {
          log.info(`快捷键 ==> 识别选中内容`);
          const { text, html } = NetDiskWorkerUtils.getSelectContent();
          log.info(`选中的内容信息：`, [text, html]);
          NetDiskWorker.postMessage({
            characterMapping: [],
            textList: [text, html],
            matchTextRange: NetDiskGlobalData.match.pageMatchRange.value,
            // 剪贴板匹配的话直接使用全部规则来进行匹配
            matchedRuleOption: NetDisk.$rule.ruleOption,
            startTime: Date.now(),
            from: "ShortCut-Select-Content",
          });
        },
      },
    };
  },
};
