import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";

const SearchResultEveryOneSearch = {
	/**
	 * 是否重构大家都在搜
	 */
	get refactorEveryoneIsStillSearching() {
		return PopsPanel.getValue(
			"baidu_search_refactor_everyone_is_still_searching",
			false
		);
	},
	/**
	 * 处理底部的
	 * @param bottomElement
	 */
	handleBottom(bottomElement: HTMLElement[]) {
		log.success("大家还在搜: 处理底部的");
		bottomElement.forEach((item) => {
			if (item.hasAttribute("gm-refactor-everyone-search-bottom")) {
				return;
			}
			item.removeAttribute("class");
			item.removeAttribute("id");
			item.setAttribute("gm-refactor-everyone-search-bottom", "true");
			item
				.querySelectorAll(".rw-list-container .rw-list-new")
				.forEach((searchItemEle) => {
					let searchText = searchItemEle?.textContent?.trim();
					searchItemEle.innerHTML = `
                        <a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
                        <span>${searchText}</span>
                        </a>`;
					(searchItemEle as HTMLElement).style.setProperty(
						"padding",
						"0.06rem"
					);
				});
			item.querySelector("div.c-line-clamp1")?.remove();
			if (!item.closest("#results")) {
				document.querySelector("#results")?.appendChild(item);
			}
			DOMUtils.on(item, "click", "div.rw-list-new", function (event) {
				let searchText = (event.target as HTMLElement)
					.querySelector("span")
					?.textContent?.trim();
				log.success("底部 点击大家还在搜 ==> " + searchText);
				utils.preventEvent(event);
				window.location.href = `https://m.baidu.com/s?word=${(
					event.target as HTMLElement
				)?.textContent?.trim()}`;
			});
		});
	},
	/**
	 * 处理中间的
	 * @param centerElement
	 */
	handleCenter(centerElement: HTMLElement[]) {
		log.success("大家还在搜: 处理中间的");
		centerElement.forEach((recommendElement) => {
			if (recommendElement.hasAttribute("gm-refactor-everyone-search-center")) {
				return;
			}
			if (
				!recommendElement.querySelector("div.c-gap-inner-bottom-small") &&
				!recommendElement.querySelector("div.cos-row div.cos-col")
			) {
				return;
			}
			recommendElement.setAttribute(
				"gm-refactor-everyone-search-center",
				"true"
			);
			let rwListContainerHTML = "";
			let innerBottomSmallElementList = recommendElement.querySelectorAll(
				"div.c-gap-inner-bottom-small"
			);
			if (!innerBottomSmallElementList.length) {
				innerBottomSmallElementList = recommendElement.querySelectorAll(
					"div.cos-row div.cos-col"
				);
			}
			innerBottomSmallElementList.forEach((item) => {
				let searchText = item.textContent?.trim();
				rwListContainerHTML += `
                <div class="rw-list-new rw-list-new2" style="padding: 0.06rem;width: 49%;">
                    <a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
                    <span>${searchText}</span>
                    </a>
                </div>`;
			});
			recommendElement.innerHTML = `
                <div m-service="relative" data-tpl="san" id="relativewords" class="se-relativewords c-container se-relativewords-new c-bg-color-white">
                <div class="rw-little-title">
                    <div class="c-row">
                    <div class="c-color little-title c-span10 c-row-youth c-row-gap-zero-two-youth c-fwb">大家还在搜</div>
                    <div class="func-btn">
                        <div class="func-btn-bg"><i class="c-icon c-color-gray"></i></div>
                    </div>
                    </div>
                </div>
                <div class="rw-list-container rw-list-container2" style="display: inline-table;display: -webkit-inline-box;">
                    ${rwListContainerHTML}</div>
                </div>`;
			DOMUtils.on(
				recommendElement,
				"click",
				"div.rw-list-new",
				function (event) {
					let searchText = (event.target as HTMLElement)
						.querySelector("span")
						?.textContent?.trim();
					log.success("中间 点击大家还在搜 ==> " + searchText);
					utils.preventEvent(event);
					window.location.href = `https://m.baidu.com/s?word=${searchText}`;
				}
			);
		});
	},
};

export { SearchResultEveryOneSearch };
