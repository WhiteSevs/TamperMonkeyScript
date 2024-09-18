import { log } from "@/env";
import { ShortCut, type ShortCutOption } from "@/utils/ShortCut";
import { NetDiskUI } from "../ui/NetDiskUI";
import { NetDiskUserRule } from "../rule/user-rule/NetDiskUserRule";
import { NetDiskView_setting } from "../ui/view/NetDiskView_setting";

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
					log.info(`【打开】⚙ 设置`);
					NetDiskView_setting.show();
				},
			},
			"netdisk-keyboard-open-history-matching-records": {
				target: "window",
				callback: () => {
					log.info("【打开】⚙ 历史匹配记录");
					NetDiskUI.netDiskHistoryMatch.show();
				},
			},
			"netdisk-keyboard-open-accesscode-rule": {
				target: "window",
				callback: () => {
					log.info("【打开】⚙ 访问码规则");
					NetDiskUI.accessCodeRule.show();
				},
			},
			"netdisk-keyboard-open-user-rule": {
				target: "window",
				callback: () => {
					log.info("【打开】⚙ 用户自定义规则");
					NetDiskUserRule.showUI(false);
				},
			},
			"netdisk-keyboard-open-proactively-recognize-text": {
				target: "window",
				callback: () => {
					log.info("【打开】⚙ 主动识别文本");
					NetDiskUI.matchPasteText.show();
				},
			},
		};
	},
};
