import Qmsg from "qmsg";
import { NetDiskUI } from "../NetDiskUI";
import { NetDiskWorker } from "@/main/worker/NetDiskWorker";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskConfig } from "@/main/data/NetDiskData";
import { NetDiskRuleUtils } from "@/main/rule/NetDiskRuleUtils";

export const NetDiskView_matchPasteText = {
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
								/* 排除中文 */
								inputText = NetDiskRuleUtils.replaceChinese(inputText);
								NetDiskWorker.postMessage({
									textList: [inputText],
									matchTextRange: NetDiskConfig.match.pageMatchRange.value,
									regular: NetDisk.regular,
									startTime: Date.now(),
									from: "PasteText",
								});
							}
						},
					},
				},
				class: "whitesevPopNetDiskMatchPasteText",
				style: this.getCSS(),
			},
			NetDiskUI.popsStyle.matchPasteTextView
		);
		popsConfirm.popsElement
			.querySelector<HTMLTextAreaElement>("textarea")!
			.focus();
	},
	getCSS() {
		return /*css*/ `
		.pops[type-value=confirm] .pops-confirm-content{
			overflow: hidden;
		}
		.netdisk-match-paste-text {
			--textarea-bd-color: #dcdfe6;
			display: inline-block;
			resize: vertical;
			padding: 5px 15px;
			line-height: 1.5;
			box-sizing: border-box;
			color: #606266;
			border: 1px solid var(--textarea-bd-color);
			border-radius: 4px;
			transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
			outline: none;
			margin: 0;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			background: none;
			width: 100%;
			height: 100%;
			appearance: none;
			resize: none;
		}
		.netdisk-match-paste-text:hover{
			--textarea-bd-color: #c0c4cc;
		}
		.netdisk-match-paste-text:focus{
			--textarea-bd-color: #3677f0;
		}
		`;
	},
	/**
	 * Worker匹配完毕后执行的回调函数
	 * @param {NetDiskWorkerCallBackOptions} data
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
