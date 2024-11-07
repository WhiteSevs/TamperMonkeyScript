import { DOMUtils, httpx, log, utils } from "@/env";
import { Router } from "@/router/router";
import { PopsPanel } from "@/setting/setting";
import { MTRegExp } from "@/utils/MTRegExp";
import { MTUtils } from "@/utils/Utils";
import pops from "@whitesev/pops";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

export const MTAutoSignIn = {
	$key: {
		signTime: "mt-sign-time",
	},
	init() {
		this.sign();
	},
	/**
	 * 判断今日是否已签到
	 */
	todayIsSign() {
		let signTime = this.getSignTime();
		if (signTime == null) {
			return false;
		}
		if (
			utils.formatTime(Date.now(), "yyyyMMdd") !==
			utils.formatTime(signTime, "yyyyMMdd")
		) {
			return false;
		}

		return true;
	},
	/**
	 * 设置签到时间
	 */
	setSignTime() {
		GM_setValue(this.$key.signTime, Date.now());
	},
	/**
	 * 获取签到时间
	 */
	getSignTime() {
		return GM_getValue<number | undefined>(this.$key.signTime);
	},
	/**
	 * 清空签到信息
	 */
	clearSignTime() {
		GM_deleteValue(this.$key.signTime);
	},
	/**
	 * 检测是否登录
	 */
	async checkLogin() {
		if (MTUtils.envIsMobile()) {
			/* 移动端的退出按钮，不登录是不会出现的 */
			let mobile_login_exitBtn = document.querySelector<HTMLAnchorElement>(
				".sidenv_exit a[href*='member.php?mod=logging&action=logout']"
			);
			return mobile_login_exitBtn;
		} else {
			/* 桌面端登录 */
			let pc_login = document.querySelector("#comiis_key");
			return pc_login;
		}
	},
	/**
	 * 获取账号的formhash
	 */
	getFormHash() {
		let $inputFormHash = (
			top || globalThis
		).document.querySelector<HTMLInputElement>("input[name=formhash]");
		/* 退出按钮(登录状态才有)，电脑版的 */
		let sidenv_exit = (
			top || globalThis
		).document.querySelector<HTMLAnchorElement>("div[class=sidenv_exit]>a");
		let sidenv_exit_match = null;
		/* 论坛浏览图片下的点赞按钮，获取formhash */
		let comiis_recommend_addkey = (
			top || globalThis
		).document.querySelector<HTMLAnchorElement>("a.comiis_recommend_addkey");
		let comiis_recommend_addkey_match = null;
		let inputFormHash = $inputFormHash ? $inputFormHash.value : null;
		if (sidenv_exit) {
			sidenv_exit_match = sidenv_exit.href.match(MTRegExp.formhash);
			sidenv_exit_match = sidenv_exit_match
				? sidenv_exit_match[sidenv_exit_match.length - 1]
				: null;
		}
		if (comiis_recommend_addkey) {
			comiis_recommend_addkey_match = comiis_recommend_addkey.href.match(
				MTRegExp.hash
			);
			comiis_recommend_addkey_match = comiis_recommend_addkey_match
				? comiis_recommend_addkey_match[
						comiis_recommend_addkey_match.length - 1
				  ]
				: null;
		}

		return inputFormHash || sidenv_exit_match || comiis_recommend_addkey_match;
	},
	/**
	 * 签到
	 */
	async sign() {
		let formHash = this.getFormHash();
		if (formHash == null) {
			if (document.querySelector("#comiis_picshowbox")) {
				/* 当前为评论区的看图模式 */
				log.info("当前为评论区的看图模式 ");
				return;
			}
			log.error("自动签到：获取账号formhash失败");
			GM_deleteValue("mt_sign");
			Qmsg.error({
				content: "自动签到：获取账号formhash失败",
			});
			return;
		}
		if (this.todayIsSign()) {
			log.info("今日已签到");
			return;
		}
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
				fetch: Boolean(PopsPanel.getValue("mt-auto-sign-useFetch")),
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
			}
		);

		if (!response.status) {
			log.error("签到：网络异常，请求失败");
			Qmsg.error("签到：网络异常，请求失败");
			return;
		}

		this.setSignTime();
		log.info("签到信息：", response);

		let CDATA = utils.parseCDATA(response.data.responseText);
		let CDATAElement = DOMUtils.parseHTML(`<div>${CDATA}</div>`, true, false);
		let content = DOMUtils.text(CDATAElement);
		if (content.includes("需要先登录")) {
			Qmsg.error("签到：" + "请先登录账号", {
				timeout: 3000,
			});
			this.clearSignTime();
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
		} else if (content.includes("今日已签")) {
			Qmsg.info("签到：" + content);
			return;
		} else if (
			response.data.responseText.includes(
				"您当前的访问请求当中含有非法字符，已经被系统拒绝"
			)
		) {
			Qmsg.error("签到: 您当前的访问请求当中含有非法字符，已经被系统拒绝", {
				timeout: 6000,
			});
			return;
		}
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
                <div style="display: flex;${
									!MTUtils.envIsMobile() ? "padding: 20px;" : ""
								}">
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
			height: "400px",
		});
		let $content = $alert.$shadowRoot.querySelector<HTMLElement>(
			".pops-alert-content"
		)!;
		$content.innerText = response.data.responseText;
		Qmsg.error("签到: 未知结果,请查看控制台信息", {
			timeout: 4000,
		});
	},
};
