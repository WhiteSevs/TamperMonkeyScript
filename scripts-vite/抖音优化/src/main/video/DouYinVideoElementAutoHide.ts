import { $, addStyle, DOMUtils, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";

export const DouYinVideoElementAutoHide = (
	delayTimeKey: string,
	selectors: string[]
) => {
	let isInjectAttrName = "data-is-inject-mouse-hide";
	let opacityShowAttrName = "data-opacity-show";
	let opacityHideAttrName = "data-opacity-hide";
	let delayTime = () => PopsPanel.getValue<number>(delayTimeKey);

	let styleCSS = (__delayTime__ = delayTime()) => {
		if (__delayTime__ === 0) {
			// 默认隐藏
			return /*css*/ `
            ${selectors.join(",")}{
                opacity: 0 !important;
                
                &:hover,
                &[${opacityShowAttrName}]{
                    opacity: 1 !important;
                }
                ${__delayTime__ === 0 ? "transition: none !important;" : ""}
            }
            `;
		} else {
			// 默认无效果
			// 延迟后自动隐藏
			return /*css*/ `
            ${selectors.join(",")}{
                &[${opacityHideAttrName}]{
                    opacity: 0 !important;
                }
                &:hover{
                    opacity: 1 !important;
                }
            }
            `;
		}
	};
	let $style = addStyle(styleCSS());
	PopsPanel.addValueChangeListener(delayTimeKey, (key, oldValue, newValue) => {
		DOMUtils.html($style, styleCSS(newValue));
	});
	let lockFn = new utils.LockFunction(() => {
		/** 视频信息列表 */
		selectors.forEach((selector) => {
			let $el = $<HTMLElement>(`${selector}:not([${isInjectAttrName}])`);
			if (!$el) {
				return;
			}

			$el.setAttribute(isInjectAttrName, "");
			let timeId: number | undefined = 0;
			DOMUtils.on($el, ["mouseenter", "touchstart"], (event) => {
				clearTimeout(timeId);
				if (delayTime() === 0) {
					// 默认隐藏的，强制显示
					$el.setAttribute(opacityShowAttrName, "");
				} else {
					// 移除隐藏的
					$el.removeAttribute(opacityHideAttrName);
				}
			});
			DOMUtils.on($el, ["mouseleave", "touchend"], (event) => {
				if (delayTime() === 0) {
					// 这个是默认隐藏，移除显示的
					$el.removeAttribute(opacityShowAttrName);
				} else {
					// 隐藏
					$el.setAttribute(opacityHideAttrName, "");
				}
			});
			if (delayTime() === 0) {
				// 直接默认隐藏
			} else {
				// 默认显示
				// 延迟隐藏
				timeId = setTimeout(() => {
					$el.setAttribute(opacityHideAttrName, "");
				}, delayTime());
			}
		});
	});
	let observer = utils.mutationObserver(document, {
		config: {
			subtree: true,
			childList: true,
		},
		immediate: true,
		callback: () => {
			lockFn.run();
		},
	});

	return {
		destory() {
			observer.disconnect();
			$style.remove();
		},
		$style,
	};
};
