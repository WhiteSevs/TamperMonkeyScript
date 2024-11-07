import { DOMUtils, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import Qmsg from "qmsg";
import { TiebaComment } from "./TiebaComment";
import { VueUtils } from "@/utils/VueUtils";

export const Toolbar = {
	$data: {},
	/**
	 * 更新环境参数
	 * 使用$watch好像不生效
	 */
	updateEnvParam() {
		VueUtils.waitVuePropToSet(".main-thread-content .interaction-bar", [
			{
				msg: "获取参数 thread",
				check(vueObj) {
					return (
						typeof vueObj?.interactionNum === "object" &&
						typeof vueObj?.interactionStates === "object"
					);
				},
				set(vueObj) {
					vueObj.$watch(
						"interactionNum",
						(newValue) => {
							TiebaComment.reply_num.value = newValue.reply;
							TiebaComment.agree_num.value = newValue.good;
							log.success(
								"更新参数 reply_num：" + TiebaComment.reply_num.value
							);
							log.success(
								"更新参数 agree_num：" + TiebaComment.agree_num.value
							);
						},
						{
							deep: true,
							immediate: true,
						}
					);
					vueObj.$watch(
						"interactionStates",
						(newValue) => {
							TiebaComment.has_agree.value = newValue.good;
							log.success(
								"更新参数 has_agree：" + TiebaComment.has_agree.value
							);
						},
						{
							deep: true,
							immediate: true,
						}
					);
				},
			},
		]);
		VueUtils.waitVuePropToSet(".app-view", [
			{
				msg: "获取登录用户参数 user",
				check(vueObj) {
					return vueObj?.user?.is_login != null;
				},
				set(vueObj) {
					if (vueObj.user.is_login) {
						TiebaComment.userInfo.value.id = vueObj.user.id;
						TiebaComment.userInfo.value.is_login = vueObj.user.is_login;
						TiebaComment.userInfo.value.name = vueObj.user.name;
						TiebaComment.userInfo.value.name_show = vueObj.user?.name_show;
						TiebaComment.userInfo.value.portrait = vueObj.user.portrait;
						TiebaComment.userInfo.value.show_nickname =
							vueObj.user?.show_nickname;
						// TiebaComment.userInfo.value.type = vueObj.user.type;
						// TiebaComment.userInfo.value.userhide = vueObj.user.userhide;
						log.success(
							`更新参数 userId: ${TiebaComment.userInfo.value.id} userName: ${TiebaComment.userInfo.value.name} userShowName: ${TiebaComment.userInfo.value.show_nickname}`
						);
					}
				},
			},
			{
				msg: "获取forum信息",
				check(vueObj) {
					return typeof vueObj?.forum?.id === "number";
				},
				set(vueObj) {
					TiebaComment.forumInfo.value.id = vueObj.forum.id;
					TiebaComment.forumInfo.value.name = vueObj.forum.name;
					log.success(
						`成功设置参数 forum信息，id: ${TiebaComment.forumInfo.value.id} name: ${TiebaComment.forumInfo.value.name}`
					);
				},
			},
			{
				msg: "获取 tbs 值",
				check(vueObj) {
					return typeof vueObj?.$store?.state?.common?.tbs === "string";
				},
				set(vueObj) {
					TiebaComment.tbs = vueObj.$store.state.common.tbs;
					log.success(`成功设置参数 tbs: ${TiebaComment.tbs}`);
				},
			},
		]);
	},
	/**
	 * 工具栏的评论按钮的点击事件
	 * @param event
	 */
	goToReplyArea(event: MouseEvent) {
		let $affixLine = document.querySelector<HTMLDivElement>(".affix-line");
		if (!$affixLine) {
			Qmsg.error("未找到元素.affix-line");
			return;
		}
		let scrollHeight =
			DOMUtils.offset($affixLine)!.top -
			DOMUtils.height(document.querySelector<HTMLDivElement>(".nav-bar-top")!);
		/* 前往评论区 */

		log.info("前往评论区：" + scrollHeight);
		document.documentElement.scrollTo({
			top: scrollHeight,
			behavior: "smooth",
		});
	},
	/**
	 * 工具栏的点赞按钮的点击事件
	 */
	goodClickEvent() {
		log.info("点赞");
		let $good = document.querySelector<HTMLDivElement>(
			".interaction-item.good"
		);
		if (!$good) {
			Qmsg.error("未找到元素.interaction-item.good");
			return;
		}
		$good.click();
		setTimeout(() => {
			this.updateEnvParam();
		}, 500);
	},
	/**
	 * 发表回复
	 */
	postMsg(content: string) {},
};
