import { addStyle, DOMUtils, log, utils } from "@/env";
import { WeiBoRouter } from "@/router/WeiBoRouter";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";

export const WeiBoHome = {
	init() {
		PopsPanel.execMenuOnce("weibo-home-blockMessageCount", () => {
			return this.blockMessageCount();
		});
		PopsPanel.execMenuOnce("weibo-home-addOpenBlankBtn", () => {
			this.addOpenBlankBtn();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("weibo-home-addSupertalkTab", () => {
				this.addSupertalkTab();
			});
		});
	},
	/**
	 * 屏蔽右上角的信息红点（登录后）
	 */
	blockMessageCount() {
		log.info(`屏蔽右上角的信息红点（登录后）`);
		return CommonUtil.addBlockCSS(".nav-right .m-bubble");
	},
	/**
	 * 新增Tab - 超话
	 */
	addSupertalkTab() {
		VueUtils.waitVuePropToSet(".main-top", {
			check(vueObj) {
				return Array.isArray(vueObj?.tabs);
			},
			set(vueObj) {
				log.success(`添加顶部Tab - 超话`);
				vueObj?.tabs?.push({
					children: [
						{
							api: "api/container/getIndex?containerid=100803",
							gid: "100803",
							name: "超话社区",
							type: 1,
						},
					],
				});
				return;
				// 再监听list_all 的变化，如果存在超话，就同步至list_cur中
				// VueUtils.waitVuePropToSet(".main-wrap", {
				// 	check(vueIns) {
				// 		return typeof vueIns?.$watch === "function";
				// 	},
				// 	set(vueIns) {
				// 		vueIns.$watch("list_all", function (newVal: any[], oldVal: any[]) {
				// 			if (this.cur_group["gid"] !== "100803") {
				// 				return;
				// 			}
				// 			// 7
				// 			let cur_length = this.list_cur.length;
				// 			// 8
				// 			let all_length = this.list_all.length;
				// 			// 截取多出来的
				// 			let slice_list = this.list_all.slice(cur_length);
				// 			for (let index = 0; index < slice_list.length; index++) {
				// 				const slice_item = slice_list[index];
				// 				slice_item["hei"] = 1345;
				// 			}
				// 			let last_feed_id = slice_list[slice_list.length - 1]?.["feed_id"];
				// 			if (last_feed_id != null) {
				// 				// 更新max
				// 				this.max = last_feed_id;
				// 				this.since = last_feed_id;
				// 			}
				// 			this.list_cur = this.list_cur.concat(slice_list);

				// 			const updateFirstScroll = () => {
				// 				if (this.$refs?.cont) {
				// 					// 每次更新数据都要重新初始化滚动判断条
				// 					// 它的判断方式是scrollY>this.first_scroll
				// 					// 而scrollY的最大值为this.$refs.cont的高度-屏幕高度
				// 					// 所以获取this.$refs.cont的高度-屏幕高度*1.2
				// 					let clientHeight =
				// 						document.documentElement.clientHeight || window.innerHeight;
				// 					this.first_scroll =
				// 						this.$refs.cont.offsetHeight - clientHeight * 1.4;
				// 				}
				// 			};
				// 			// 2.5s内更新滚动判断高度
				// 			let intervalCount = 0;
				// 			let intervalId = setInterval(() => {
				// 				if (intervalCount > 50) {
				// 					clearInterval(intervalId);
				// 					return;
				// 				}
				// 				intervalCount++;
				// 				updateFirstScroll();
				// 			}, 50);
				// 		});
				// 	},
				// });
			},
		});
	},
	/**
	 * 新增新标签页打开按钮
	 */
	addOpenBlankBtn() {
		utils.mutationObserver(document.documentElement, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback() {
				if (!WeiBoRouter.isMWeiBoHome()) {
					return;
				}
				document
					.querySelectorAll<HTMLElement>(
						".main-wrap .wb-item .card .f-footer-ctrl:not(:has(.gm-open-blank))"
					)
					.forEach(($footerCtrl) => {
						if ($footerCtrl.querySelector(".gm-open-blank")) {
							return;
						}
						let $ownDiyBtn = DOMUtils.createElement("div", {
							innerHTML: /*html*/ `
								<h4>新标签页打开</h4>
							`,
						});
						$ownDiyBtn.classList.add(
							"m-diy-btn",
							"m-box-center-a",
							"gm-open-blank"
						);
						DOMUtils.on($ownDiyBtn, "click", (event) => {
							utils.preventEvent(event);
							let vueIns = VueUtils.getVue($footerCtrl);
							if (!vueIns) {
								Qmsg.error("没有找到对应的Vue实例");
								return;
							}
							let id = vueIns?.item?.id;
							if (typeof id !== "string") {
								Qmsg.error("没有找到对应的id");
								return;
							}
							let url = `${window.location.origin}/detail/${id}`;
							log.info(`新标签页打开：${url}`);
							window.open(url, "_blank");
						});
						let $diyBtnList =
							$footerCtrl.querySelectorAll<HTMLElement>(".m-diy-btn");
						if ($diyBtnList.length) {
							DOMUtils.after($diyBtnList[$diyBtnList.length - 1], $ownDiyBtn);
						} else {
							DOMUtils.append($footerCtrl, $ownDiyBtn);
						}
					});
			},
		});
	},
};
