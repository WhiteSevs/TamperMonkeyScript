import { addStyle, DOMUtils, utils } from "@/env";
import { unsafeWindow } from "ViteGM";

type BilibiliPlayerToastConfig = {
	/** 显示的文字 */
	text: string;
	/** 多长时间关闭显示 @default 3500 */
	timeout?: number;
	/** 是否显示关闭按钮 @default false */
	showCloseBtn?: boolean;
	/** 时间文字 @default undefined */
	timeText?: string;
	/** 跳转文字 @default undefined */
	jumpText?: string;
	/** 插入的父元素 @default HTMLDivElement */
	parent?: HTMLDivElement;
};
/** 在.mplayer内使用的toast */
const BilibiliPlayerToast = {
	$flag: {
		isInitCSS: false,
	},
	toast(config: BilibiliPlayerToastConfig | string) {
		if (typeof config === "string") {
			config = {
				text: config,
			} as BilibiliPlayerToastConfig;
		}
		if (!this.$flag.isInitCSS) {
			this.$flag.isInitCSS = true;
			addStyle(/*css*/ `
            .mplayer-toast{
                -webkit-transition-property: opacity, bottom;
                transition-property: opacity, bottom;
            }
            `);
		}
		let showClassName = "mplayer-show";
		let $toast = DOMUtils.createElement(
			"div",
			{
				className: "mplayer-toast" + " " + showClassName,
			},
			{
				"data-from": "gm",
			}
		);
		if (config.showCloseBtn) {
			// 添加关闭按钮
			let $closeBtn = DOMUtils.createElement("div", {
				className: "mplayer-toast-close",
				innerHTML: /*html*/ `
                    <span class="bp-svgicon">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47 4.47a.75.75 0 011.06 0l5.541 5.54 5.54-5.54a.75.75 0 011.061 1.06l-5.54 5.541 5.54 5.54a.75.75 0 01.073.977l-.073.084a.75.75 0 01-1.06 0l-5.541-5.54-5.54 5.54a.75.75 0 01-1.061-1.06l5.54-5.541-5.54-5.54a.75.75 0 01-.073-.977z" fill="#FEFEFE" fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                `,
			});
			$toast.appendChild($closeBtn);
		}
		let $text = DOMUtils.createElement("span", {
			className: "mplayer-toast-text",
			innerText: config.text,
		});
		$toast.appendChild($text);

		if (typeof config.timeText === "string" && config.timeText.trim() != "") {
			let $time = DOMUtils.createElement("span", {
				className: "mplayer-toast-time",
				innerText: config.timeText,
			});
			$toast.appendChild($time);
		}
		if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
			let $jump = DOMUtils.createElement("span", {
				className: "mplayer-toast-jump",
				innerText: config.jumpText,
			});
			$toast.appendChild($jump);
		}

		// 插入的父元素
		let $parent =
			config.parent ?? (document.querySelector(".mplayer") as HTMLDivElement);
		// 事件名称列表
		let animationEndNameList = [
			"webkitTransitionEnd",
			"mozTransitionEnd",
			"MSTransitionEnd",
			"otransitionend",
			"transitionend",
		];
		DOMUtils.on($toast, animationEndNameList as any, function (event) {
			if ($toast.hasAttribute("data-stop-remove")) {
				// 移动的
				$toast.removeAttribute("data-stop-remove");
				return;
			}
			$parent.removeChild($toast);
			$toast?.remove();
		});
		if ($parent) {
			// 获取页面的所有的toast
			let pageToastList = Array.from(
				document.querySelectorAll<HTMLDivElement>(".mplayer-toast")
			);
			if (pageToastList.length > 1) {
				for (let index = 0; index < pageToastList.length - 2; index++) {
					// 删掉只有一个
					pageToastList[index].classList.remove(showClassName);
					pageToastList.splice(0, 1);
					index--;
				}
			}
			if (pageToastList.length) {
				// 只有一个了
				// 上移
				let multiple = pageToastList.length;
				for (let index = 0; index < pageToastList.length; index++) {
					const $ele = pageToastList[index];
					// toast高度是48px，padding是12px，计算出bottom需要36px（48px-36px）
					let bottom = 48 + 48 * multiple;
					$ele.setAttribute("data-stop-remove", "true");
					$ele.style.bottom = bottom + "px";
					multiple--;
				}
			}
			$parent.appendChild($toast);
		} else {
			throw new TypeError("toast parent is null");
		}
		let timeout =
			typeof config.timeout === "number" && !isNaN(config.timeout)
				? config.timeout
				: 3500;
		setTimeout(() => {
			$toast.classList.remove(showClassName);
		}, timeout);
	},
};
// @ts-ignore
unsafeWindow.BilibiliPlayerToast = BilibiliPlayerToast;
export { BilibiliPlayerToast };
