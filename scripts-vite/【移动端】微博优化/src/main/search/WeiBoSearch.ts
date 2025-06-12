import { DOMUtils, log, utils } from "@/env";
import { WeiBoRouter } from "@/router/WeiBoRouter";
import { Panel } from "@components/setting/panel";
import { VueUtils } from "@components/utils/VueUtils";
import Qmsg from "qmsg";

export const WeiBoSearch = {
	init() {
		Panel.execMenuOnce("weibo-search-addOpenBlankBtn", () => {
			this.addOpenBlankBtn();
		});
		DOMUtils.ready(() => {
			Panel.execMenu("weibo-search-autoFocusSearchInput", () => {
				this.autoFocusSearchInput();
			});
		});
	},
	/**
	 * 自动聚焦搜索框
	 */
	autoFocusSearchInput() {
		log.info(`自动聚焦搜索框`);
		utils
			.waitNode<HTMLInputElement>(`.ntop-nav input[type="search"]`)
			.then(($input) => {
				if (!$input) {
					log.error("未找到搜索框");
					Qmsg.error("未找到搜索框");
					return;
				}
				let searchParams = new URLSearchParams(window.location.search);
				if (!searchParams.has("containerid")) {
					log.warn("不存在containerid参数");
					return;
				}
				let containeridSearchParams = new URLSearchParams(
					searchParams.get("containerid")!
				);
				if (containeridSearchParams.has("q")) {
					log.warn("containerid参数中存在q参数，是搜索结果页面");
					return;
				}
				log.success(
					"containerid参数中不存在q参数，所以是主搜索页面，聚焦输入框"
				);
				setTimeout(() => {
					$input.focus();
				}, 250);
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
				if (!WeiBoRouter.isMWeiBo_search()) {
					return;
				}
				document
					.querySelectorAll<HTMLElement>(
						".card footer.m-ctrl-box:not(:has(.gm-open-blank))"
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
							"m-box-col",
							"m-box-center",
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
