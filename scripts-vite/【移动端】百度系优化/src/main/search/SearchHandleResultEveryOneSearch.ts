import { $, $$, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";

export const SearchHandleResultEveryOneSearch = {
  /**
   * 是否重构大家都在搜
   */
  get refactorEveryoneIsStillSearching() {
    return Panel.getValue("baidu_search_refactor_everyone_is_still_searching", false);
  },
  /**
   * 处理中间的
   * @param centerElement
   */
  handleCenter(centerElement: HTMLElement[]) {
    log.success("大家还在搜: 处理中间的");
    centerElement.forEach(($recommend) => {
      if ($recommend.hasAttribute("gm-refactor-everyone-search-center")) {
        return;
      }
      if (
        !$recommend.querySelector("div.c-gap-inner-bottom-small") &&
        !$recommend.querySelector("div.cos-row div.cos-col")
      ) {
        return;
      }
      $recommend.setAttribute("gm-refactor-everyone-search-center", "true");
      let rwListContainerHTML = "";
      let innerBottomSmallElementList = $recommend.querySelectorAll<HTMLElement>("div.c-gap-inner-bottom-small");
      if (!innerBottomSmallElementList.length) {
        innerBottomSmallElementList = $recommend.querySelectorAll<HTMLElement>("div.cos-row div.cos-col");
      }
      innerBottomSmallElementList.forEach((item) => {
        let searchText = DOMUtils.text(item).trim();
        rwListContainerHTML += /*html*/ `
                <div class="rw-list-new rw-list-new2" style="padding: 0.06rem;width: 49%;">
                    <a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
                    	<span>${searchText}</span>
                    </a>
                </div>`;
      });
      DOMUtils.html(
        $recommend,
        /*html*/ `
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
                </div>`
      );
      DOMUtils.on($recommend, "click", ".rw-list-new", (event, selectorTarget) => {
        let searchText = DOMUtils.text(selectorTarget.querySelector("span")!).trim();
        log.success("中间 点击大家还在搜 ==> " + searchText);
        utils.preventEvent(event);
        window.location.href = `https://m.baidu.com/s?word=${searchText}`;
      });
    });
  },
  /**
   * 处理底部的
   * @param everyOnceList
   */
  handleBottom(everyOnceList: HTMLElement[]) {
    log.success("大家还在搜: 处理底部的");
    everyOnceList.forEach(($everyOne) => {
      if ($everyOne.hasAttribute("gm-refactor-everyone-search-bottom")) {
        return;
      }
      $everyOne.removeAttribute("class");
      $everyOne.removeAttribute("id");
      $everyOne.setAttribute("gm-refactor-everyone-search-bottom", "true");
      $everyOne.querySelectorAll<HTMLElement>(".rw-list-container .rw-list-new").forEach(($searchItem) => {
        let searchText = DOMUtils.text($searchItem).trim();
        DOMUtils.html(
          $searchItem,
          /*html*/ `
					<a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
						<span>${searchText}</span>
					</a>`
        );
        DOMUtils.css($searchItem, "padding", "0.06rem");
      });
      $everyOne.querySelector("div.c-line-clamp1")?.remove();
      if (!$everyOne.closest("#results")) {
        $("#results")?.appendChild($everyOne);
      }
      DOMUtils.on($everyOne, "click", ".rw-list-new", (event, selectorTarget) => {
        let searchText = selectorTarget.querySelector("span")?.textContent?.trim();
        log.success("底部 点击大家还在搜 ==> " + searchText);
        utils.preventEvent(event);
        window.location.href = `https://m.baidu.com/s?word=${selectorTarget?.textContent?.trim()}`;
      });
    });
  },
};
