import { log } from "@/env";
import { ShortCut, type ShortCutOption } from "@/utils/ShortCut";
import { NetDiskUI } from "../ui/NetDiskUI";
import { NetDiskGlobalSettingView } from "../view/global-setting/NetDiskGlobalSettingView";
import { NetDiskUserRuleUI } from "../rule/user-rule/NetDiskUserRuleUI";
import { NetDiskWorker } from "../worker/NetDiskWorker";
import { CharacterMapping } from "../character-mapping/CharacterMapping";

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
					NetDiskGlobalSettingView.show();
				},
			},
			"netdisk-keyboard-open-history-matching-records": {
				target: "window",
				callback: () => {
					log.info("快捷键 ==> 【打开】⚙ 历史匹配记录");
					NetDiskUI.netDiskHistoryMatch.show();
				},
			},
			"netdisk-keyboard-open-user-rule": {
				target: "window",
				callback: () => {
					log.info("快捷键 ==> 【打开】⚙ 用户自定义规则");
					NetDiskUserRuleUI.show(false);
				},
			},
			"netdisk-keyboard-open-proactively-recognize-text": {
				target: "window",
				callback: () => {
					log.info("快捷键 ==> 【打开】⚙ 主动识别文本");
					NetDiskUI.matchPasteText.show();
				},
			},
			"netdisk-keyboard-performPageTextMatchingManually": {
				target: "window",
				callback() {
					log.info("快捷键 ==> 执行文本匹配");
					NetDiskWorker.dispatchMonitorDOMChange = true;
				},
			},
			"netdisk-keyboard-character-mapping": {
				target: "window",
				callback() {
					log.info("快捷键 ==> 【打开】⚙ 字符映射");
					CharacterMapping.show();
				},
			},
		};
	},
};
