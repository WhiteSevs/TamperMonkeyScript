import type Artplayer from "artplayer";
import { addStyle, DOMUtils, log, utils } from "@/env";

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

type ArtPlayerPluginToastOption = {};

type ArtPlayerPluginToastResult = {
	name: string;
	toast(option: BilibiliPlayerToastConfig): void;
};

/** 在.mplayer内使用的toast */
export const Toast = {
	$key: {
		plugin_KEY: "artplayer-plugin-toast",
	},
	$flag: {
		isInitCSS: false,
	},
	$config: {
		/** 默认的toast的className */
		originToast: "art-layer-auto-playback",
		/** 让Toast隐藏的className */
		hideClassName: "art-toast-hide-opacity",
		/** 自定义的toast的class，避免和页面原有的toast冲突 */
		prefix: "mplayer-toast-gm",
	},
	$data: {
		art: null as any as Artplayer,
	},
	$el: {
		get $originPlayer() {
			return document.querySelector<HTMLElement>(
				".art-video-player .art-layers"
			);
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
		let $parent = config.parent ?? this.$el.$originPlayer;
		if (!$parent) {
			throw new TypeError("toast parent is null");
		}
		this.mutationMPlayerOriginToast($parent);
		let $toast = DOMUtils.createElement("div", {
			"data-from": "gm",
		});
		DOMUtils.addClass($toast, this.$config.prefix);

		if (config.showCloseBtn) {
			// 添加关闭图标按钮
			let $closeBtn = DOMUtils.createElement("div", {
				className: this.$config.prefix + "-close",
				innerHTML: /*html*/ `
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `,
			});
			$toast.appendChild($closeBtn);
			DOMUtils.on($closeBtn, "click", (event) => {
				utils.preventEvent(event);
				this.closeToast($toast);
			});
		}
		let $text = DOMUtils.createElement("span", {
			className: this.$config.prefix + "-text",
			innerText: config.text,
		});
		$toast.appendChild($text);

		if (typeof config.timeText === "string" && config.timeText.trim() != "") {
			let $time = DOMUtils.createElement("span", {
				className: this.$config.prefix + "-time",
				innerText: config.timeText,
			});
			$toast.appendChild($time);
		}
		if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
			let $jump = DOMUtils.createElement("span", {
				className: this.$config.prefix + "-jump",
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
		.${this.$config.prefix}.mplayer-show {
			opacity: 1;
			visibility: visible;
			z-index: 40;
		}

		.mplayer-toast, .${this.$config.prefix} {
			-webkit-transition-property: opacity, bottom;
			transition-property: opacity, bottom;
		}

		.${this.$config.prefix} {
            backdrop-filter: saturate(180%) blur(20px);
            background-color: #000000bf !important;
			border-radius: var(--art-border-radius);
			/* bottom: 48px; */
            bottom: calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * 1 + 10px);
			opacity: 1;
			overflow: hidden;
			padding: 10px;
            gap: 10px;
            line-height: 1;
			position: absolute;
			text-align: center;
			-webkit-transition: opacity .3s;
			transition: opacity .3s;
            left: var(--art-padding);
            display: flex;
            align-items: center;
		}
        .art-video-player.art-backdrop .${this.$config.prefix}{
            backdrop-filter: saturate(180%) blur(20px);
            background-color: #000000bf !important;
        }

		.${this.$config.prefix}-close {
            cursor: pointer;
            justify-content: center;
            align-items: center;
            display: flex;
		}
		.${this.$config.prefix}-close svg{
            fill: var(--art-theme);
            width: 15px;
            height: 15px;
        }

		.${this.$config.prefix}-jump {
            color: var(--art-theme);
            cursor: pointer;
		}
		`);

		addStyle(/*css*/ `
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
        }
        `);
	},
	/**
	 * 观察mplayer
	 * 用于关闭页面自己的toast
	 * 动态更新自己的toast位置
	 */
	mutationMPlayerOriginToast($parent: HTMLElement) {
		let $mplayer = this.$el.$originPlayer;
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
			document.querySelectorAll<HTMLDivElement>(`.${this.$config.prefix}`)
		).concat(
			Array.from(
				document.querySelectorAll<HTMLDivElement>(
					".".concat(this.$config.originToast)
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
				// $pageToast.style.bottom = bottom + "px";
				$pageToast.style.bottom = `calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${
					index + 1
				} + 10px)`;
				// Reflect.set($pageToast, "__nextToast", DOMUtils.next($pageToast));
			});
		}
	},
	/**
	 * 关闭吐司
	 */
	closeToast($ele: HTMLElement) {
		$ele.classList.add(this.$config.hideClassName);
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
				if ($toast.classList.contains(that.$config.hideClassName)) {
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
export const artplayerPluginToast = (option?: ArtPlayerPluginToastOption) => {
	return (art: Artplayer): ArtPlayerPluginToastResult => {
		Toast.$data.art = art;
		return {
			name: Toast.$key.plugin_KEY,
			toast(...args) {
				Toast.toast(...args);
			},
		};
	};
};
