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
	/** 跳转的文字的点击事件 */
	jumpClickCallback?: (event: MouseEvent | PointerEvent) => void;
	/** 插入的父元素 @default HTMLDivElement */
	parent?: HTMLDivElement;
};
/** 在.mplayer内使用的toast */
export const BilibiliPlayerToast = {
	$flag: {
		isInitCSS: false,
	},
	$data: {
		/** 默认的toast的className */
		originToast: "mplayer-toast",
		/** 让Toast显示的className */
		showClassName: "mplayer-show",
		/** 自定义的toast的class，避免和页面原有的toast冲突 */
		prefix: "mplayer-toast-gm",
	},
	$el: {
		get $mplayer() {
			return document.querySelector<HTMLElement>(".mplayer");
		},
	},
	/**
	 * 弹出吐司
	 * @param config
	 */
	toast(config: BilibiliPlayerToastConfig | string) {
		const that = this;
		if (typeof config === "string") {
			config = {
				text: config,
			} as BilibiliPlayerToastConfig;
		}
		this.initCSS();
		// 插入的父元素
		let $parent = config.parent ?? this.$el.$mplayer;
		if (!$parent) {
			throw new TypeError("toast parent is null");
		}
		this.mutationMPlayerOriginToast($parent);
		let $toast = DOMUtils.createElement("div", {
			"data-from": "gm",
		});
		DOMUtils.addClass($toast, this.$data.prefix);
		DOMUtils.addClass($toast, this.$data.showClassName);

		if (config.showCloseBtn) {
			// 添加关闭按钮
			let $closeBtn = DOMUtils.createElement("div", {
				className: this.$data.prefix + "-close",
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
			className: this.$data.prefix + "-text",
			innerText: config.text,
		});
		$toast.appendChild($text);

		if (typeof config.timeText === "string" && config.timeText.trim() != "") {
			let $time = DOMUtils.createElement("span", {
				className: this.$data.prefix + "-time",
				innerText: config.timeText,
			});
			$toast.appendChild($time);
		}
		if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
			let $jump = DOMUtils.createElement("span", {
				className: this.$data.prefix + "-jump",
				innerText: config.jumpText,
			});
			$toast.appendChild($jump);
			DOMUtils.on($jump, "click", (event) => {
				if (typeof config.jumpClickCallback === "function") {
					utils.preventEvent(event);
					config.jumpClickCallback(event);
				}
			});
		}

		this.setTransitionendEvent($toast);
		let timeout =
			typeof config.timeout === "number" && !isNaN(config.timeout)
				? config.timeout
				: 3500;

		// 主动给页面中的原来的toast添加动画监听结束事件
		Array.from(
			document.querySelectorAll<HTMLDivElement>(`.mplayer-toast`)
		).forEach(($mplayerOriginToast) => {
			// if (!$mplayerOriginToast.classList.contains(this.$data.showClassName)) {
			// 	$mplayerOriginToast.remove();
			// 	return;
			// }
			if ($mplayerOriginToast.hasAttribute("data-is-set-transitionend")) {
				return;
			}
			$mplayerOriginToast.setAttribute("data-is-set-transitionend", "true");
			if ($mplayerOriginToast.textContent?.includes("记忆你上次看到")) {
				// 主动添加延迟关闭Toast
				setTimeout(() => {
					let $close = $mplayerOriginToast.querySelector<HTMLElement>(
						".mplayer-toast-close"
					);
					if ($close) {
						$close.click();
					} else {
						$mplayerOriginToast.remove();
					}
				}, 3000);
			}
			this.setTransitionendEvent($mplayerOriginToast);
		});
		$parent.appendChild($toast);

		setTimeout(() => {
			this.closeToast($toast);
		}, timeout);
		return {
			$toast: $toast,
			close: () => {
				this.closeToast($toast);
			},
		};
	},
	/**
	 * 初始化css
	 */
	initCSS() {
		if (this.$flag.isInitCSS) {
			return;
		}
		this.$flag.isInitCSS = true;

		addStyle(/*css*/ `
		.${this.$data.prefix}.mplayer-show {
			opacity: 1;
			visibility: visible;
			z-index: 40;
		}

		.mplayer-toast, .${this.$data.prefix} {
			-webkit-transition-property: opacity, bottom;
			transition-property: opacity, bottom;
		}

		.${this.$data.prefix} {
			background-color: rgba(0, 0, 0, .8);
			border-radius: 4px;
			bottom: 48px;
			color: #fafafa;
			font-size: 12px;
			left: 8px;
			line-height: 24px;
			opacity: 0;
			overflow: hidden;
			padding: 6px 8px;
			position: absolute;
			text-align: center;
			-webkit-transition: opacity .3s;
			transition: opacity .3s;
			visibility: hidden;
			z-index: 4;
		}

		.${this.$data.prefix}-close {
			fill: #fff;
			float: left;
			height: 14px;
			margin-right: 4px;
			position: relative;
			top: 1px;
			width: 26px;
		}

		.${this.$data.prefix}-jump {
			color: #f25d8e;
			margin: 0 8px 0 16px;
			text-decoration: none;
		}

		`);
	},
	/**
	 * 观察mplayer
	 * 用于关闭页面自己的toast
	 * 动态更新自己的toast位置
	 */
	mutationMPlayerOriginToast($parent: HTMLElement) {
		let $mplayer = this.$el.$mplayer;
		if (!$mplayer) {
			return;
		}
		if ($mplayer.hasAttribute("data-mutation")) {
			return;
		}
		log.success(`添加观察器，动态更新toast的位置`);
		$mplayer.setAttribute("data-mutation", "gm");
		utils.mutationObserver($mplayer, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				this.updatePageToastBottom();
			},
		});
	},
	/**
	 * 更新页面上的bottom的位置
	 */
	updatePageToastBottom() {
		// 获取页面的所有的toast
		let pageToastList = Array.from(
			document.querySelectorAll<HTMLDivElement>(`.${this.$data.prefix}`)
		).concat(
			Array.from(
				document.querySelectorAll<HTMLDivElement>(
					"."
						.concat(this.$data.originToast)
						.concat(".")
						.concat(this.$data.showClassName)
				)
			)
		);
		if (pageToastList.length) {
			// 所有toast重新设置位置
			let count = pageToastList.length - 1;
			/** toast的高度 */
			const toastHeight = 46;
			// 按顺序来
			pageToastList.forEach(($pageToast, index) => {
				// toast高度是48px，padding是12px，计算出bottom需要36px（48px-36px）
				// toast初始的bottom为48px
				// bottom计算公式：toast的高度+剩余的toast的数量（不包括自己）
				let bottom = toastHeight + toastHeight * (count - index);
				$pageToast.setAttribute("data-transition", "move");
				$pageToast.style.bottom = bottom + "px";
				// Reflect.set($pageToast, "__nextToast", DOMUtils.next($pageToast));
			});
		}
	},
	/**
	 * 关闭吐司
	 */
	closeToast($ele: HTMLElement) {
		$ele.classList.remove(this.$data.showClassName);
	},
	/**
	 * 获取事件名称列表
	 * @private
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
	 * @private
	 */
	setTransitionendEvent($toast: HTMLDivElement) {
		let that = this;
		// 事件名称列表
		let animationEndNameList = this.getTransitionendEventNameList();
		DOMUtils.on(
			$toast,
			animationEndNameList as any,
			function (event) {
				// let $nextToast: HTMLElement | null = Reflect.get($toast, "__nextToast");
				let dataTransition = $toast.getAttribute("data-transition");
				// if ($nextToast) {
				// 	DOMUtils.after($toast, $nextToast);
				// }
				if (!$toast.classList.contains(that.$data.showClassName)) {
					// 不显示了，移除元素
					$toast.remove();
					return;
				}
				if (dataTransition === "move") {
					// 触发的事件是toast移动而触发的
					// 不做处理，移除当前的transition属性
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
