import { NetDisk } from "@/main/NetDisk";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskUI } from "../../ui/NetDiskUI";
import { DOMUtils, log } from "@/env";
import { NetDiskHistoryMatchView } from "../history-match/NetDiskHistoryMatchView";

type OkCallBackOption = {
	/** 该分享码是否在已匹配的字典中 */
	isFindInMatchedDict: boolean;
	/** 是否成功同步至已匹配的字典 */
	isUpdatedMatchedDict: boolean;
	/** 是否成功同步至历史匹配记录 */
	isUpdatedHistoryMatched: boolean;
	/** 新的访问码 */
	accessCode: AccessCodeNonNullType;
};
/**
 * 需要重新输入新密码的弹窗
 * @param title 标题
 * @param ruleKeyName 规则键名
 * @param ruleIndex 规则的索引下标
 * @param shareCode 分享码
 * @param accessCode 访问码
 * @param okCallBack 成功的回调
 * @param closeCallBack 弹窗关闭的回调
 */
export const NetDiskNewAccessCodeView = function (
	title: string = "密码错误",
	ruleKeyName: string = "",
	ruleIndex: number,
	shareCode: string,
	accessCode: AccessCodeType,
	okCallBack: (option: OkCallBackOption) => void = () => {},
	closeCallBack?: () => void
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
					callback(eventDetails, event) {
						accessCodeConfirm.close();
						closeCallBack?.();
					},
				},
				close: {
					callback(details, event) {
						details.close();

						closeCallBack?.();
					},
				},
				ok: {
					callback: (event) => {
						/* 把输入的新密码去空格 */
						let userInputAccessCode = event.text.replace(/[\s]*/gi, "");
						/* 处理已显示的链接 */
						let uiLink = NetDisk.handleLinkShow({
							ruleKeyName,
							ruleIndex,
							shareCode,
							accessCode: userInputAccessCode,
						});
						if (!uiLink) {
							return;
						}
						let currentItemSelector = `.netdisk-url a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`;
						let currentHistoryItemSelector = `.netdiskrecord-link a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`;
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

						log.info(`${ruleKeyName} 重新输入的密码：${userInputAccessCode}`);

						let callbackOption: OkCallBackOption = {
							/** 该分享码是否在已匹配的字典中 */
							isFindInMatchedDict: false,
							/** 是否成功同步至已匹配的字典 */
							isUpdatedMatchedDict: false,
							/** 是否成功同步至历史匹配记录 */
							isUpdatedHistoryMatched: false,
							/** 新的访问码 */
							accessCode: userInputAccessCode,
						};
						// 更新已匹配到的字典
						// 如果来自历史匹配记录，那字典肯定是空的
						let netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
						if (netDiskDict.has(shareCode)) {
							callbackOption.isFindInMatchedDict = true;
							callbackOption.isUpdatedMatchedDict = true;
							// 字典中存在，更新访问码
							let currentDict = netDiskDict.get(shareCode);
							netDiskDict.set(
								shareCode,
								NetDisk.createLinkStorageInst(
									userInputAccessCode,
									ruleIndex,
									true,
									currentDict.matchText
								)
							);
						}
						// 同步新的访问码到历史匹配记录
						callbackOption.isUpdatedHistoryMatched =
							NetDiskHistoryMatchView.syncAccessCode(
								ruleKeyName,
								ruleIndex,
								shareCode,
								userInputAccessCode
							);
						okCallBack(callbackOption);
						event.close();
						closeCallBack?.();
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
			style: /*css*/ `
			input{
				font-size: larger;
			}
			`,
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
