import { addStyle, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";
import { VueUtils } from "@/utils/VueUtils";

export const WeiBoHome = {
	init() {
		PopsPanel.execMenuOnce("weibo-home-blockArticleAds", () => {
			this.blockArticleAds();
		});
		PopsPanel.execMenuOnce("weibo-home-blockMessageCount", () => {
			return this.blockMessageCount();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("weibo-home-addSupertalkTab", () => {
				this.addSupertalkTab();
			});
		});
	},
	/**
	 * 屏蔽隐藏在card内的微博广告
	 */
	blockArticleAds() {
		let isHandling = false;
		/**
		 * 移除广告card
		 * @param cardList
		 */
		function removeAdsCard(cardList: any[]) {
			if (isHandling) {
				return;
			}
			isHandling = true;
			for (let index = 0; index < cardList.length; index++) {
				const card = cardList[index];
				let cardInfo = card?.mblog;
				if (!cardInfo) {
					continue;
				}
				let id = cardInfo.id;
				let ad_state = cardInfo?.ad_state;
				let cardText = cardInfo?.text;
				let page_title = cardInfo?.page_info?.page_title;
				// page_title.includes("微博广告")
				if (ad_state) {
					cardList.splice(index, 1);
					index--;
					log.info(`移除广告url：` + "https://m.weibo.cn/detail/" + id);
					log.info(`移除广告card：` + cardText);
				}
			}
			isHandling = false;
		}
		VueUtils.waitVuePropToSet(".main-wrap", {
			check(vueIns) {
				return typeof vueIns?.$watch === "function";
			},
			set(vueIns) {
				vueIns.$watch(
					"list_all",
					function (newVal: any[], oldVal: any[]) {
						removeAdsCard(newVal);
					},
					{
						immediate: true,
					}
				);
			},
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: utils.debounce(() => {
				let $mainWrap = document.querySelector<HTMLElement>(".main-wrap");
				let vueIns = VueUtils.getVue($mainWrap);
				if (!vueIns) {
					return;
				}
				let cardInfo = vueIns?.list_all;
				if (!cardInfo) {
					return;
				}
				if (!Array.isArray(cardInfo)) {
					return;
				}
				removeAdsCard(cardInfo);
			}, 150),
		});
	},
	/**
	 * 屏蔽右上角的信息红点（登录后）
	 */
	blockMessageCount() {
		return CommonUtils.addBlockCSS(".nav-right .m-bubble");
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
				// 再监听list_all 的变化，如果存在超话，就同步至list_cur中
				VueUtils.waitVuePropToSet(".main-wrap", {
					check(vueIns) {
						return typeof vueIns?.$watch === "function";
					},
					set(vueIns) {
						vueIns.$watch("list_all", function (newVal: any[], oldVal: any[]) {
							if (this.cur_group["gid"] !== "100803") {
								return;
							}
							// 7
							let cur_length = this.list_cur.length;
							// 8
							let all_length = this.list_all.length;
							// 截取多出来的
							let slice_list = this.list_all.slice(cur_length);
							for (let index = 0; index < slice_list.length; index++) {
								const slice_item = slice_list[index];
								slice_item["hei"] = 1345;
							}
							let last_feed_id = slice_list[slice_list.length - 1]?.["feed_id"];
							if (last_feed_id != null) {
								// 更新max
								this.max = last_feed_id;
								this.since = last_feed_id;
							}
							this.list_cur = this.list_cur.concat(slice_list);

							const updateFirstScroll = () => {
								if (this.$refs?.cont) {
									// 每次更新数据都要重新初始化滚动判断条
									// 它的判断方式是scrollY>this.first_scroll
									// 而scrollY的最大值为this.$refs.cont的高度-屏幕高度
									// 所以获取this.$refs.cont的高度-屏幕高度*1.2
									let clientHeight =
										document.documentElement.clientHeight || window.innerHeight;
									this.first_scroll =
										this.$refs.cont.offsetHeight - clientHeight * 1.4;
								}
							};
							// 2.5s内更新滚动判断高度
							let intervalCount = 0;
							let intervalId = setInterval(() => {
								if (intervalCount > 50) {
									clearInterval(intervalId);
									return;
								}
								intervalCount++;
								updateFirstScroll();
							}, 50);
						});
					},
				});
			},
		});
	},
};
