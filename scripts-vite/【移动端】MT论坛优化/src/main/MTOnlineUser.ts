import { ElementUtils } from "@/utils/ElementUtils";
import onlineUserCSS from "./css/online-user.css?raw";
import Qmsg from "qmsg";
import { httpx, pops, utils } from "@/env";
import DOMUtils from "@whitesev/domutils";
import { MTUtils } from "@/utils/MTUtils";

type OnlineUserInfo = {
	uid: string;
	avatar: string;
	name: string;
	sf: string;
	space: string;
};

export const MTOnlineUser = {
	$data: {},
	init() {
		this.registerMenu();
	},
	/**
	 * 注册菜单
	 */
	registerMenu() {
		ElementUtils.registerLeftMenu({
			name: "在线用户",
			iconColor: "#2d92ff",
			icon: "",
			callback: () => {
				this.showOnlineUser();
			},
		});
	},
	/**
	 * 显示在线用户dialog
	 */
	async showOnlineUser() {
		let $loading = Qmsg.loading("正在获取在线用户名单中...");
		let onlineUserInfo = await this.getOnlineUserListInfo();
		$loading.close();
		if (!onlineUserInfo) {
			return;
		}
		let $alert = pops.alert({
			title: {
				text: "在线用户",
				position: "center",
			},
			content: {
				text: /*html*/ `
                <div class="online-user-info">${
									onlineUserInfo.totalOnline
								} 人在线 - ${onlineUserInfo.onlineUser} 会员${
					onlineUserInfo.invisibleUser == 0
						? ""
						: `(${onlineUserInfo.invisibleUser}隐身)`
				} - ${onlineUserInfo.noRegisterUser} 位游客</div>
                <div class="online-user-filter">
                    <input placeholder="过滤用户名/身份/UID(可正则)"></div>
                <div class="online-user-list"></div>
                `,
				html: true,
			},
			btn: {
				ok: {
					text: "关闭",
					type: "default",
				},
			},
			width: "88vw",
			height: "82vh",
			style: onlineUserCSS,
			mask: {
				enable: true,
			},
		});

		let $list =
			$alert.$shadowRoot.querySelector<HTMLDivElement>(".online-user-list")!;
		let $filterInput = $alert.$shadowRoot.querySelector<HTMLInputElement>(
			".online-user-filter input"
		)!;

		onlineUserInfo.data.forEach((item) => {
			let $item = this.createListViewItem(item);
			$list.appendChild($item);
		});
		Qmsg.success(`成功获取 ${onlineUserInfo.data.length}条数据`);

		// 设置过滤事件
		/* 过滤用户/UID */
		let isSeaching = false;
		DOMUtils.on(
			$filterInput,
			["propertychange", "input"],
			utils.debounce(() => {
				let inputText = $filterInput.value.trim();
				if (isSeaching) {
					return;
				}
				isSeaching = true;
				if (inputText == "") {
					$alert.$shadowRoot
						.querySelectorAll(".online-user-list .online-item")
						.forEach((item) => {
							item.removeAttribute("style");
						});
					isSeaching = false;
					return;
				}
				let isFind = false;
				$alert.$shadowRoot
					.querySelectorAll<HTMLDivElement>(".online-user-list .online-item")
					.forEach((item) => {
						if (
							item
								.getAttribute("data-name")!
								.match(new RegExp(inputText, "ig")) ||
							item
								.getAttribute("data-sf")!
								.match(new RegExp(inputText, "ig")) ||
							item.getAttribute("data-uid")!.match(new RegExp(inputText, "ig"))
						) {
							isFind = true;
							item.removeAttribute("style");
						} else {
							item.setAttribute("style", "display:none;");
						}
					});
				isSeaching = false;
			})
		);
	},
	/**
	 * 获取在线用户名单信息
	 */
	async getOnlineUserListInfo() {
		let searchParamsData = {
			showoldetails: "yes",
		};
		let response = await httpx.get(
			`/forum.php?${utils.toSearchParamsStr(searchParamsData)}`,
			{
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
			}
		);
		if (!response.status) {
			return;
		}
		let pageHTML = utils.parseFromString(
			response.data.responseText,
			"text/html"
		);
		let result: {
			data: OnlineUserInfo[];
			totalOnline: number;
			onlineUser: number;
			noRegisterUser: number;
			invisibleUser: number;
		} = {
			data: [],
			totalOnline: 0,
			onlineUser: 0,
			noRegisterUser: 0,
			invisibleUser: 0,
		};
		let onlineList =
			pageHTML.querySelectorAll<HTMLLIElement>("#onlinelist ul li");
		onlineList.forEach((item) => {
			/* uid */
			let uid = item
				.querySelector<HTMLAnchorElement>("a")!
				.getAttribute("href")!
				.match("uid-(.+?).html")![1];
			/* 头像 */
			let avatar = MTUtils.getAvatar(uid, "middle");
			/* 名字 */
			let name = item.querySelector<HTMLAnchorElement>("a")!.innerText;
			/* 身份 */
			let sf = "";
			/* 个人空间页 */
			let space = item
				.querySelector<HTMLAnchorElement>("a")!
				.getAttribute("href")!;
			let memberSrc = item.querySelector<HTMLImageElement>("img")!.src;
			if (memberSrc.indexOf("online_member") != -1) {
				sf = "会员";
			} else if (memberSrc.indexOf("online_moderator") != -1) {
				sf = "版主";
			} else if (memberSrc.indexOf("online_supermod") != -1) {
				sf = "超级版主";
			} else if (memberSrc.indexOf("online_admin") != -1) {
				sf = "管理员";
			} else {
				sf = "未知身份";
			}
			result.data.push({
				uid: uid,
				avatar: avatar,
				name: name,
				sf: sf,
				space: space,
			});
		});

		let onlineInfo = pageHTML.querySelector("#online div.bm_h span.xs1")!
			.textContent!;

		result.totalOnline = utils.parseInt(
			onlineInfo.match(/([0-9]*)\s*人在线/i)!,
			0
		);
		result.onlineUser = utils.parseInt(
			onlineInfo.match(/([0-9]*)\s*会员/i)!,
			0
		);
		result.noRegisterUser = utils.parseInt(
			onlineInfo.match(/([0-9]*)\s*位游客/i)!,
			0
		);
		result.invisibleUser = utils.parseInt(
			onlineInfo.match(/([0-9]*)\s*隐身/i)!,
			0
		);

		return result;
	},
	/**
	 * 创建在线用户节点
	 */
	createListViewItem(userInfo: OnlineUserInfo) {
		let $item = DOMUtils.createElement(
			"div",
			{
				className: "online-item",
				innerHTML: /*html*/ `
                <div class="online-user">
                    <img data-avatar src="${userInfo["avatar"]}" loading="lazy" class="online-user-avatar">
                    <div class="online-user-info">
                        <p data-name>${userInfo["name"]}</p>
                        <span data-sf="${userInfo["sf"]}">${userInfo["sf"]}</span>
                        <span data-uid>UID: ${userInfo["uid"]}</span>
                    </div>
                </div>
            `,
			},
			{
				"data-name": userInfo.name,
				"data-uid": userInfo.uid,
				"data-sf": userInfo.sf,
			}
		);

		// 添加头像点击事件
		DOMUtils.on($item, "click", ".online-user-avatar", (event) => {
			utils.preventEvent(event);
			window.open(
				`home.php?mod=space&uid=${userInfo.uid}&do=profile`,
				"_blank"
			);
		});
		return $item;
	},
};
