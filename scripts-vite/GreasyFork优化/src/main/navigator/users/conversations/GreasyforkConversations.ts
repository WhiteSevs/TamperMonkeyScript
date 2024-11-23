import { PopsPanel } from "@/setting/setting";
import beautifyContentCSS from "./css/beautifyContent.css?raw";
import { addStyle, DOMUtils, log, utils } from "@/env";
import i18next from "i18next";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";

export const GreasyforkConversations = {
	init() {
		PopsPanel.execMenuOnce("conversations-beautifyDialogBox", () => {
			return this.beautifyDialogBox();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("conversations-beautifyPrivateMessageList", () => {
				this.beautifyPrivateMessageList();
			});
		});
	},
	/**
	 * 美化对话框
	 */
	beautifyDialogBox() {
		log.info("美化对话框");
		return addStyle(beautifyContentCSS);
	},
	/**
	 * 美化私信列表
	 */
	beautifyPrivateMessageList() {
		log.info(`美化私信列表`);
		addStyle(/*css*/ `
		.user-conversations-item{
			list-style: none;
			border: 1px solid #bfbfbf;
			border-radius: 4px;
			display: flex;
			gap: 10px;
			flex-direction: column;
			padding: 4px 20px;
			margin: 10px 0px;
		}
		.user-conversations-item .user-link-container{

		}
		.user-conversations-item .user-link-container .user-latest-send-time{
			float: right;
		}
		.user-conversations-item .enter-coversations{
			float: right;
		}
		`);
		document.querySelectorAll("section.text-content ul li").forEach(($li) => {
			// 私聊的用户
			let $user = $li.querySelector<HTMLAnchorElement>(
				'a[href*="conversations"]'
			)!;
			// 私聊的地址
			let chatUrl = $user.href;
			// 用户名
			let userName = $user.textContent?.split(" ")[1]!;
			// 最后发送消息的用户
			let $latestMsgUser = $li.querySelector<HTMLAnchorElement>("a.user-link");
			// 最后发送消息的用户名
			let latestSendMsgUser: string | null = null;
			// 最后发送消息的用户地址
			let latestSendMsgUserHomeUrl: string | null = null;
			// 最后发送消息的时间
			let latestSendMsgTime: Date | null = null;
			// 最后发送消息的时间的文字
			let latestSendMsgTimeText: string | null = null;
			if ($latestMsgUser) {
				latestSendMsgUser = $latestMsgUser.textContent;
				latestSendMsgUserHomeUrl = $latestMsgUser.href;
				let $relativeTime = $li.querySelector<HTMLElement>("relative-time")!;
				latestSendMsgTime = new Date($relativeTime.getAttribute("datetime")!);
				latestSendMsgTimeText =
					$relativeTime.shadowRoot!.lastChild!.textContent;
			}
			$li.classList.add("user-conversations-item");
			let currentLoginUserId = GreasyforkUrlUtils.getUserId();
			// 清空原来的
			$li.innerHTML = /*html*/ `
			<div class="user-link-container">
				<a class="user-link" href="${chatUrl}">${userName}</a>
				<span class="user-latest-send-time">${latestSendMsgTimeText}</span>
			</div>
			<div class="latest-send-user-container">
				${i18next.t("最后回复：")}
				<a href="${latestSendMsgUserHomeUrl}">${latestSendMsgUser}</a>
				<a class="enter-coversations" href="${chatUrl}">${i18next.t("进入")}</a>
			</div>
			`;
		});
	},
};
