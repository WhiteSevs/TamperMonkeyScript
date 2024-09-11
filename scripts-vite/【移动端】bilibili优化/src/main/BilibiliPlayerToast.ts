import { addStyle, DOMUtils, log, utils } from "@/env";
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
	$data: {
		/** 让Toast显示的className */
		showClassName: "mplayer-show",
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
		let $toast = DOMUtils.createElement(
			"div",
			{
				className: "mplayer-toast" + " " + this.$data.showClassName,
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
		this.setTransitionendEvent($toast);
		let timeout =
			typeof config.timeout === "number" && !isNaN(config.timeout)
				? config.timeout
				: 3500;
		if ($parent) {
			// 获取页面的所有的toast
			let pageToastList = Array.from(
				document.querySelectorAll<HTMLDivElement>(
					`.mplayer-toast[data-from="gm"]`
				)
			);
			// 主动给页面中的原来的toast添加动画监听结束事件
			Array.from(
				document.querySelectorAll<HTMLDivElement>(
					`.mplayer-toast:not([data-from="gm"])`
				)
			).forEach(($ele) => {
				if (!$ele.classList.contains(this.$data.showClassName)) {
					$ele.remove();
					return;
				}
				if ($ele.textContent?.includes("记忆你上次看到")) {
					// 主动添加延迟关闭Toast
					setTimeout(() => {
						let $close = $ele.querySelector<HTMLElement>(
							".mplayer-toast-close"
						);
						if ($close) {
							$close.click();
						} else {
							$ele.remove();
						}
					}, 3000);
				}
				this.setTransitionendEvent($ele);
			});
			if (pageToastList.length > 1) {
				// >1 ==> 2、3、4...个
				for (let index = 0; index <= pageToastList.length - 1 - 1; index++) {
					// 只保留一个
					const $ele = pageToastList[index];
					$ele.classList.remove(this.$data.showClassName);
					pageToastList.splice(index, 1);
					index--;
				}
			}
			if (pageToastList.length) {
				if (pageToastList.length > 1) {
					log.warn("意外情况。pageToastList内不止一个");
				}
				// 只有一个了
				// 上移
				const $ele = pageToastList[0];
				// toast高度是48px，padding是12px，计算出bottom需要36px（48px-36px）
				let bottom = 46 + 46 * 1;
				$ele.setAttribute("data-transition", "move");
				$ele.style.bottom = bottom + "px";
				Reflect.set($ele, "__nextToast", $toast);
			} else {
				$parent.appendChild($toast);
			}
		} else {
			throw new TypeError("toast parent is null");
		}
		setTimeout(() => {
			$toast.classList.remove(this.$data.showClassName);
		}, timeout);
		return $toast;
	},
	/**
	 * 获取事件名称列表
	 */
	getTransitionendEventNameList() {
		return [
			"webkitTransitionEnd",
			"mozTransitionEnd",
			"MSTransitionEnd",
			"otransitionend",
			"transitionend",
		];
	},
	/**
	 * 监听过渡结束
	 */
	setTransitionendEvent($toast: HTMLDivElement) {
		// 事件名称列表
		let animationEndNameList = this.getTransitionendEventNameList();
		let that = this;
		DOMUtils.on(
			$toast,
			animationEndNameList as any,
			function (event) {
				let $nextToast = Reflect.get($toast, "__nextToast");
				let dataTransition = $toast.getAttribute("data-transition");
				if ($nextToast) {
					DOMUtils.after($toast, $nextToast);
				}
				if (!$toast.classList.contains(that.$data.showClassName)) {
					// 不显示了，移除元素
					$toast.remove();
					return;
				}
				if (dataTransition === "move") {
					// 移动的
					$toast.removeAttribute("data-transition");
					return;
				}
			},
			{
				capture: true,
			}
		);
	},
};
if (import.meta.hot) {
	Reflect.set(unsafeWindow, "BilibiliPlayerToast", BilibiliPlayerToast);
}
export { BilibiliPlayerToast };
