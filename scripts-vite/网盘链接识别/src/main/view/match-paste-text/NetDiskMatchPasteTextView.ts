import Qmsg from "qmsg";
import { NetDiskUI } from "../../ui/NetDiskUI";
import { NetDiskWorker } from "@/main/worker/NetDiskWorker";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskGlobalData } from "@/main/data/NetDiskGlobalData";
import { NetDiskRuleUtils } from "@/main/rule/NetDiskRuleUtils";
import indexCSS from "./index.css?raw";

export const NetDiskMatchPasteText = {
	show() {
		let popsConfirm = NetDiskPops.confirm(
			{
				title: {
					text: "主动识别文本",
					position: "center",
				},
				content: {
					text: /*html*/ `
                    <textarea class="netdisk-match-paste-text"></textarea>
                    `,
					html: true,
				},
				btn: {
					ok: {
						text: "识别",
						callback() {
							let inputText =
								popsConfirm.popsElement?.querySelector<HTMLInputElement>(
									".netdisk-match-paste-text"
								)?.value || "";
							if (inputText.trim() !== "") {
								/* 删除掉中文 */
								inputText = NetDiskRuleUtils.replaceChinese(inputText);
								NetDiskWorker.postMessage({
									characterMapping: [
										// 删除中文
										{
											searchValue: /[\u4e00-\u9fa5]/g,
											replaceValue: "",
										},
									],
									textList: [inputText],
									matchTextRange: NetDiskGlobalData.match.pageMatchRange.value,
									// 剪贴板匹配的话直接使用全部规则来进行匹配
									matchedRuleOption: NetDisk.$rule.ruleOption,
									startTime: Date.now(),
									from: "PasteText",
								});
							}
						},
					},
				},
				class: "whitesevPopNetDiskMatchPasteText",
				style: indexCSS,
			},
			NetDiskUI.popsStyle.matchPasteTextView
		);
		popsConfirm.popsElement
			.querySelector<HTMLTextAreaElement>("textarea")!
			.focus();
	},
	/**
	 * Worker匹配完毕后执行的回调函数
	 * @param data
	 */
	workerMatchEndCallBack(data: NetDiskWorkerCallBackOptions) {
		if (data.data.length) {
			Qmsg.success(
				`成功匹配${data.data.length}个，用时${Date.now() - data.startTime}ms`
			);
		} else {
			Qmsg.error("未识别到链接");
		}
	},
};
