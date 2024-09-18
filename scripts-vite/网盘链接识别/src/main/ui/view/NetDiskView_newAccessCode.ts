import { NetDisk } from "@/main/NetDisk";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskUI } from "../NetDiskUI";
import { DOMUtils, log } from "@/env";

/**
 * 需要重新输入新密码的弹窗
 * @param title 标题
 * @param netDiskName 网盘名称
 * @param netDiskIndex 网盘名称索引下标
 * @param shareCode 分享码
 * @param accessCode 访问码
 * @param okCallBack
 */
export const NetDiskView_newAccessCode = function (
	title: string = "密码错误",
	netDiskName: string = "",
	netDiskIndex: number,
	shareCode: string,
	accessCode: string | null | undefined,
	okCallBack: (userInputAccessCode: string) => void = () => {}
) {
	const accessCodeConfirm = NetDiskPops.prompt(
		{
			title: {
				text: title,
				position: "center",
				html: false,
			},
			btn: {
				reverse: true,
				position: "end",
				cancel: {
					text: "取消",
				},
				ok: {
					callback: (event) => {
						/* 把输入的新密码去空格 */
						let userInputAccessCode = event.text.replace(/[\s]*/gi, "");
						/* 处理已显示的链接 */
						let uiLink = NetDisk.handleLinkShow(
							netDiskName,
							netDiskIndex,
							shareCode,
							userInputAccessCode,
							void 0
						);
						let currentItemSelector = `.netdisk-url a[data-netdisk='${netDiskName}'][data-sharecode='${shareCode}']`;
						let currentHistoryItemSelector = `.netdiskrecord-link a[data-netdisk='${netDiskName}'][data-sharecode='${shareCode}']`;
						let currentItemElement =
							NetDiskUI.Alias.uiLinkAlias?.$shadowRoot?.querySelector<HTMLElement>(
								currentItemSelector
							);
						let currentHistoryItemElement =
							NetDiskUI.Alias.historyAlias?.$shadowRoot?.querySelector<HTMLElement>(
								currentHistoryItemSelector
							);
						if (currentItemElement) {
							currentItemElement.setAttribute(
								"data-accesscode",
								userInputAccessCode
							);
							DOMUtils.html(currentItemElement, uiLink);
						}
						/* 历史记录的弹出的 */
						if (currentHistoryItemElement) {
							currentHistoryItemElement.setAttribute(
								"data-accesscode",
								userInputAccessCode
							);
							DOMUtils.html(currentHistoryItemElement, uiLink);
						}

						log.info(`${netDiskName} 重新输入的密码：${userInputAccessCode}`);
						okCallBack(userInputAccessCode);
						event.close();
					},
				},
			},
			content: {
				placeholder: "请重新输入密码",
				focus: true,
				select: true,
				text:
					accessCode == null
						? ""
						: typeof accessCode === "string"
						? accessCode
						: "",
			},
		},
		NetDiskUI.popsStyle.inputNewAccessCodeView
	);
	/**
	 * 注册键盘回车事件
	 */
	DOMUtils.listenKeyboard(
		accessCodeConfirm.$shadowRoot,
		"keypress",
		(keyName) => {
			if (keyName === "Enter") {
				const $ok = accessCodeConfirm.$shadowRoot.querySelector<HTMLElement>(
					".pops-prompt-btn-ok"
				)!;
				$ok.click();
			}
		}
	);
};
