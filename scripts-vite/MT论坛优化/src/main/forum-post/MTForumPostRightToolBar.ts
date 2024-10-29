import { $, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { MTUtils } from "@/utils/Utils";
import { unsafeWindow } from "ViteGM";

export const MTForumPostRightToolBar = {
	init() {
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("mt-forum-post-quickCollentBtn", () => {
				this.quickCollentBtn();
			});
			PopsPanel.execMenuOnce("mt-forum-post-quickReplyOptimization", () => {
				this.quickReplyOptimization();
			});
		});
	},
	/**
	 * 【快捷收藏】
	 */
	quickCollentBtn() {
		log.info(`【快捷收藏】`);
		utils.waitNode<HTMLDivElement>("#scrolltop", 10000).then(($scrollTop) => {
			if (!$scrollTop) {
				return;
			}
			let formhash = $<HTMLInputElement>(
				'#scform input[name="formhash"]'
			)!.value;
			let threadId = MTUtils.getThreadId(window.location.href)!;
			// 收藏的链接
			let collectUrl = `/home.php?${utils.toSearchParamsStr({
				mod: "spacecp",
				ac: "favorite",
				type: "thread",
				id: threadId,
				formhash: formhash,
				infloat: "yes",
				handlekey: "k_favorite",
				inajax: 1,
				ajaxtarget: "fwin_content_k_favorite",
			})}`;
			let $collect = document.createElement("span");
			$collect.innerHTML = /*html*/ `
			<a href="${collectUrl}" 
				id="k_favorite"
				onclick="showWindow(this.id, this.href, 'get', 0);"
				onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
				<img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
						height="26" 
						width="26" 
						style="position:absolute;top:10px;left:11px">
			</a>
			`;
			DOMUtils.prepend($scrollTop, $collect);
		});
	},
	/**
	 * 快捷回复优化
	 */
	quickReplyOptimization() {
		utils
			.waitNode<HTMLAnchorElement>("#scrolltop > span:nth-child(2) > a", 10000)
			.then(($ele) => {
				if (!$ele) {
					return;
				}
				log.info(`快捷回复优化`);
				DOMUtils.on($ele, "click", function (this: HTMLAnchorElement) {
					unsafeWindow.showWindow("reply", this.href);
					utils
						.waitNode<HTMLDivElement>("#moreconf", 10000)
						.then(($moreconf) => {
							if (!$moreconf) {
								return;
							}
							let $oneKeySpace = DOMUtils.createElement(
								"button",
								{
									innerText: "一键空格",
									type: "button",
									id: "insertspace2",
								},
								{
									style: "float: left;",
								}
							);
							DOMUtils.on($oneKeySpace, "click", (event) => {
								utils.preventEvent(event);
								DOMUtils.val(
									$<HTMLInputElement>("#postmessage")!,
									DOMUtils.val($<HTMLInputElement>("#postmessage")!) +
										"           "
								);
							});
							DOMUtils.append($moreconf, $oneKeySpace);
						});
				});
			});
	},
};
