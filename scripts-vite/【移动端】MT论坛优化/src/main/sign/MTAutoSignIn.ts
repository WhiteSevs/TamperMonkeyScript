import { $, DOMUtils, httpx, log, utils } from "@/env";
import { Panel } from "@/setting/panel";
import { MTUtils } from "@/utils/MTUtils";
import pops from "@whitesev/pops";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

interface MTSignInfo {
	/**
	 * 签到的域名
	 */
	hostName: string;
	/**
	 * 签到的时间
	 */
	time: number;
}

export const MTAutoSignIn = {
	$key: {
		sign: "mt-sign-time",
	},
	init() {
		this.sign();
	},
	/**
	 * 判断今日是否已签到
	 */
	checkSignInfo() {
		let signInfo = this.getSignInfo();
		let findValue = signInfo.find((it) => {
			return it.hostName === window.location.hostname;
		});
		if (findValue) {
			// 存储的时间和当前时间不是同一天的话那就是未签到
			// 否则为签到
			if (
				utils.formatTime(Date.now(), "yyyyMMdd") !==
				utils.formatTime(findValue.time, "yyyyMMdd")
			) {
				return false;
			}
			return true;
		}
		// 没有签到信息，说明没有签到
		return false;
	},
	/**
	 * 设置签到信息
	 */
	setSignInfo() {
		let signInfo: MTSignInfo = {
			hostName: window.location.hostname,
			time: Date.now(),
		};
		let localSignInfo = this.getSignInfo();
		let findIndex = localSignInfo.findIndex((it) => {
			return it.hostName === signInfo.hostName;
		});
		if (findIndex !== -1) {
			localSignInfo.splice(findIndex, 1);
		}
		localSignInfo.push(signInfo);
		GM_setValue(this.$key.sign, localSignInfo);
	},
	/**
	 * 获取签到信息
	 */
	getSignInfo() {
		let localSignInfo = GM_getValue<MTSignInfo[]>(this.$key.sign, []);
		if (!Array.isArray(localSignInfo)) {
			this.clearSignInfo();
			return [];
		}
		return localSignInfo;
	},
	/**
	 * 获取域名的签到信息
	 * @param hostName 域名
	 */
	getHostNameSignInfo(hostName: string = window.location.hostname) {
		let localSignInfo = this.getSignInfo();
		return localSignInfo.find((it) => {
			return it.hostName === hostName;
		});
	},
	/**
	 * 清空签到信息
	 * @param hostName 域名
	 */
	clearSignInfo(hostName?: string) {
		if (typeof hostName === "string") {
			let signInfo = this.getSignInfo();
			let findIndex = signInfo.findIndex((it) => {
				return it.hostName === hostName;
			});
			if (findIndex !== -1) {
				signInfo.splice(findIndex, 1);
			}
			GM_setValue(this.$key.sign, signInfo);
		} else {
			GM_deleteValue(this.$key.sign);
		}
	},
	/**
	 * 检测是否登录
	 */
	checkLogin() {
		if (MTUtils.envIsMobile()) {
			/* 移动端的退出按钮，不登录是不会出现的 */
			let mobile_login_exitBtn = $<HTMLAnchorElement>(
				"a[href*='member.php?mod=logging&action=logout']"
			);
			return Boolean(mobile_login_exitBtn);
		} else {
			/* 桌面端登录 */
			let pc_login = $("#comiis_key");
			return Boolean(pc_login);
		}
	},
	/**
	 * 签到
	 */
	async sign() {
		if (this.checkSignInfo()) {
			log.info("今日已签到");
			return;
		}
		let formHash = await MTUtils.getFormHash();
		if (formHash == null) {
			if ($("#comiis_picshowbox")) {
				/* 当前为评论区的看图模式 */
				log.info("当前为评论区的看图模式 ");
				return;
			}
			this.clearSignInfo(window.location.hostname);
			Qmsg.error("自动签到：获取账号formhash失败", {
				consoleLogContent: true,
			});
			return;
		}
		let useFetch = Boolean(Panel.getValue("mt-auto-sign-useFetch"));
		let userAgent = utils.getRandomPCUA();

		/** 签到成功的回调 */
		let signSuccessCallBack = () => {
			this.setSignInfo();
		};
		/** 签到失败的回调 */
		let signFailedCallBack = () => {
			this.clearSignInfo(window.location.hostname);
		};
		/** 签到的未知的内容的回调 */
		let unknownSignContentCallback = (content: string) => {
			let $alert = pops.alert({
				title: {
					text: "未知签到内容",
					position: "center",
				},
				content: {
					text: "",
					html: false,
				},
				width: "88vw",
				height: "300px",
			});
			let $content = $alert.$shadowRoot.querySelector<HTMLElement>(
				".pops-alert-content"
			)!;
			$content.innerText = content;
		};
		/**
		 * 签到的插件列表
		 */
		let sign_plugin = [
			{
				checkPluginEnableUrl: "/plugin.php?id=k_misign:sign",
				async sign() {
					let searchParamsData = {
						operation: "qiandao",
						format: "button",
						formhash: formHash,
						inajax: 1,
						ajaxtarget: "midaben_sign",
					};
					let response = await httpx.get(
						`/k_misign-sign.html?${utils.toSearchParamsStr(searchParamsData)}`,
						{
							fetch: useFetch,
							headers: {
								"User-Agent": userAgent,
							},
							allowInterceptConfig: false,
						}
					);

					if (!response.status) {
						Qmsg.error("签到：网络异常，请求失败", {
							consoleLogContent: true,
						});
						return;
					}

					signSuccessCallBack();
					log.info("签到信息：", response);

					let responseText = response.data.responseText;
					let CDATA = utils.parseCDATA(responseText);
					let CDATAElement = DOMUtils.parseHTML(
						`<div>${CDATA}</div>`,
						true,
						false
					);
					let content = DOMUtils.text(CDATAElement);
					if (content.includes("需要先登录")) {
						Qmsg.error("签到：" + "请先登录账号", {
							timeout: 3000,
							consoleLogContent: true,
						});
						// 签到失败、清空签到信息
						signFailedCallBack();
						return;
					} else if (
						content.includes("请稍后再试") ||
						content.includes("您已经被列入黑名单") ||
						content.includes("绑定手机号后才可以签到") ||
						content.includes("您所在用户组不允许使用")
					) {
						Qmsg.error("签到：" + content, {
							timeout: 5000,
						});
						return;
					} else if (
						content.includes("今日已签") ||
						content.includes("今日已经签到")
					) {
						Qmsg.info("签到：" + content);
						return;
					} else if (
						responseText.includes(
							"您当前的访问请求当中含有非法字符，已经被系统拒绝"
						)
					) {
						Qmsg.error(
							"签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝",
							{
								timeout: 6000,
							}
						);
						return;
					} else if (useFetch && "location" in utils.toJSON(responseText)) {
						// fetch请求
						// 签到成功返回{"location":null}
						Qmsg.success("签到: 签到成功");
						return;
					}
					// 输出签到的具体奖励信息
					/* 签到奖励 */
					let signIn_con = CDATAElement.querySelector<HTMLElement>(".con");
					/* 签到排名 */
					let signIn_line = CDATAElement.querySelector<HTMLElement>(".line");
					if (signIn_con && signIn_line) {
						let conMatch = DOMUtils.text(signIn_con).match(/([0-9]+)金币/)!;
						let lineMatch = DOMUtils.text(signIn_line).match(/([0-9]+)/)!;
						let con = conMatch[conMatch.length - 1];
						let line = lineMatch[lineMatch.length - 1];
						log.success(`金币${con}，排名${line}`);
						Qmsg.info(
							/*html*/ `
							<div style="display: flex;${!MTUtils.envIsMobile() ? "padding: 20px;" : ""}">
								<div style="align-self: center;margin-right: 20px;">签到</div>
								<div>排名 ${line}<br>金币 ${con}</div>
							</div>`,
							{
								timeout: 4000,
								isHTML: true,
							}
						);
						return;
					}
					unknownSignContentCallback(responseText);
				},
			},
			{
				checkPluginEnableUrl: "/plugin.php?id=dsu_paulsign:sign",
				async sign() {
					let searchParamsData = {
						id: "dsu_paulsign:sign",
						operation: "qiandao",
						infloat: 1,
						inajax: 1,
					};
					let response = await httpx.post(
						`/plugin.php?${utils.toSearchParamsStr(searchParamsData)}`,
						{
							data: {
								formhash: formHash,
								qdxq: "kx",
								qdmode: 3,
								todaysay: "",
								fastreply: 0,
							},
							processData: true,
							fetch: useFetch,
							headers: {
								"User-Agent": userAgent,
								"Content-Type": "application/x-www-form-urlencoded",
							},
							allowInterceptConfig: false,
						}
					);
					if (!response.status) {
						Qmsg.error("签到：网络异常，请求失败", {
							consoleLogContent: true,
						});
						return;
					}

					signSuccessCallBack();
					log.info("签到信息：", response);

					let responseText = response.data.responseText;
					if (responseText.includes("签到成功")) {
						Qmsg.success("签到：签到成功");
						return;
					}
					if (responseText.includes("今日已经签到")) {
						Qmsg.info("签到：您今日已经签到，请明天再来！");
						return;
					}
					unknownSignContentCallback(responseText);
				},
			},
		];

		for (let index = 0; index < sign_plugin.length; index++) {
			const signPluginItem = sign_plugin[index];
			let checkResponse = await httpx.get(signPluginItem.checkPluginEnableUrl, {
				fetch: useFetch,
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
			});
			if (!checkResponse.status) {
				log.error("签到：检查签到插件是否启用的请求失败", checkResponse);
				continue;
			}
			let pluginDoc = DOMUtils.parseHTML(
				checkResponse.data.responseText,
				true,
				true
			);
			if (
				pluginDoc.querySelector("#messagetext") ||
				checkResponse.data.responseText.includes("插件不存在或已关闭")
			) {
				// 插件未启用或不存在
				log.error(
					`插件：${signPluginItem.checkPluginEnableUrl} 未启用或不存在`
				);
				continue;
			}
			await signPluginItem.sign();
			break;
		}
	},
};
