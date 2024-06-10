import { QmsgOption } from "./Qmsg";
import { QmsgAnimation, QmsgAnimationState } from "./QmsgAnimation";
import { QmsgCSS } from "./QmsgCSS";
import { QmsgStore } from "./QmsgStore";
import { QmsgIcon, QmsgHeaderCloseIcon } from "./QmsgIcon";
import { QmsgObj } from "./QmsgInstance";
import { QmsgUtils } from "./QmsgUtils";

/**
 * 每条消息的构造函数
 */
export class QmsgMsg {
	/**
	 * setTimeout的id
	 */
	#timerId: NodeJS.Timeout | undefined;
	/**
	 * 启动时间
	 */
	#startTime: number | null;
	/**
	 * 关闭时间
	 */
	#endTime: number | null;
	/**
	 * Qmsg的配置
	 */
	#setting: Required<QmsgOption>;
	/**
	 * uuid
	 */
	#uuid: string;
	/**
	 * 当前动画状态
	 */
	#state: keyof QmsgAnimationState;
	/**
	 * 当前相同消息的数量
	 */
	#repeatNum: number;
	/**
	 * 主元素
	 */
	$Qmsg: HTMLDivElement;
	constructor(public option: QmsgOption, public uuid: string) {
		this.#timerId = void 0;
		this.#startTime = null;
		this.#endTime = null;
		// this.#setting = Object.assign({}, QmsgStore.DEFAULT, this.option);
		this.#setting = QmsgUtils.toDynamicObject(
			QmsgStore.DEFAULT,
			option,
			QmsgStore.INS_DEFAULT
		);
		this.#uuid = uuid;
		this.#state = "opening";
		this.$Qmsg = document.createElement("div");
		this.#repeatNum = 1;

		this.detectionType();
		this.init();
	}
	/**
	 * 获取当前配置
	 * @returns
	 */
	getSetting() {
		return this.#setting;
	}
	/**
	 * 获取当前相同的数量
	 * @returns
	 */
	getRepeatNum() {
		return this.#repeatNum;
	}
	/**
	 * 设置repeatNum值
	 */
	setRepeatNum(num: number) {
		this.#repeatNum = num;
	}
	/**
	 * 设置repeatNum自增
	 */
	setRepeatNumIncreasing() {
		this.#repeatNum++;
	}
	/**
	 * 初始化元素
	 */
	private init() {
		let QmsgContext = this;
		if (
			this.#setting.customClass &&
			typeof this.#setting.customClass === "string"
		) {
			/* 设置自定义类名 */
			this.$Qmsg.classList.add(this.#setting.customClass);
		}
		let $svg = QmsgIcon[this.#setting.type || "info"];
		let contentClassName = QmsgUtils.getNameSpacify(
			"content-" + this.#setting.type || "info"
		);
		if (this.#setting.showClose) {
			contentClassName += " " + QmsgUtils.getNameSpacify("content-with-close");
		}
		let content = this.#setting.content || "";
		let extraCloseIconClassName = "";
		let $closeSvg = QmsgHeaderCloseIcon;
		if (this.#setting.showMoreContent) {
			contentClassName += "qmsg-show-more-content";
			extraCloseIconClassName += "qmsg-show-more-content";
		}
		let $closeIcon = "";
		if (this.#setting.showClose) {
			/* 显示右上角的关闭图标按钮 */
			$closeIcon = `<i class="qmsg-icon qmsg-icon-close ${extraCloseIconClassName}">${$closeSvg}</i>`;
		}
		/* 内容 */
		let $content = document.createElement("span");
		let $positionClassName = QmsgUtils.getNameSpacify(
			"data-position",
			this.#setting.position.toLowerCase()
		);
		if (this.#setting.html || this.#setting.isHTML) {
			/* 内容是html */
			$content.innerHTML = content;
		} else {
			$content.innerText = content;
		}
		if (this.#setting.isLimitWidth) {
			/* 限制宽度 */
			let limitWidthNum = this.#setting.limitWidthNum;
			if (typeof limitWidthNum === "string") {
				let isNumberPattern = /^\d+$/;
				if (isNumberPattern.test(limitWidthNum)) {
					limitWidthNum = limitWidthNum + "px";
				}
			} else {
				limitWidthNum = limitWidthNum.toString() + "px";
			}
			$content.style.maxWidth = limitWidthNum;
			$content.style.width = limitWidthNum;

			/* 设置换行 */
			if (this.#setting.limitWidthWrap === "no-wrap") {
				/* 禁止换行 */
				$content.style.whiteSpace = "nowrap";
			} else if (this.#setting.limitWidthWrap === "ellipsis") {
				/* 禁止换行且显示省略号 */
				$content.style.whiteSpace = "nowrap";
				$content.style.overflow = "hidden";
				$content.style.textOverflow = "ellipsis";
			} else if (this.#setting.limitWidthWrap === "wrap") {
				/* 允许换行 */
				/* 默认的 */
				$content.style.whiteSpace = "";
			}
		}
		this.$Qmsg.innerHTML = `
        <div class="qmsg-content">
            <div class="${contentClassName}">
            ${this.#setting.showIcon ? `<i class="qmsg-icon">${$svg}</i>` : ""}
                ${$content.outerHTML}
                ${$closeIcon}
            </div>
        </div>
        `;
		this.$Qmsg.classList.add(QmsgUtils.getNameSpacify("item"));
		this.$Qmsg.setAttribute(QmsgUtils.getNameSpacify("uuid"), this.#uuid);
		let $shadowContainer = document.querySelector(".qmsg-shadow-container");
		let $shadowRoot = $shadowContainer?.shadowRoot;
		if (!$shadowContainer) {
			$shadowContainer = document.createElement("div");
			$shadowContainer.className = "qmsg-shadow-container";
			$shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
			let __$wrapper__ = document.createElement("div");
			__$wrapper__.classList.add(
				QmsgStore.NAMESPACE,
				QmsgUtils.getNameSpacify("wrapper"),
				QmsgUtils.getNameSpacify("is-initialized")
			);
			__$wrapper__.classList.add($positionClassName);
			$shadowRoot.appendChild(QmsgCSS.getStyleElement());
			$shadowRoot.appendChild(__$wrapper__);
			if (this.#setting.style != null) {
				let __$ownStyle__ = document.createElement("style");
				__$ownStyle__.setAttribute("type", "text/css");
				__$ownStyle__.innerHTML = this.#setting.style;
				$shadowRoot.appendChild(__$ownStyle__);
			}
			document.body.appendChild($shadowContainer);
		}
		if ($shadowRoot == null) {
			throw new TypeError(QmsgStore.PLUGIN_NAME + " $shadowRoot is null");
		}
		let $wrapper = $shadowRoot.querySelector(
			`.${QmsgStore.NAMESPACE}.${$positionClassName}`
		) as HTMLDivElement | null;
		if (!$wrapper) {
			$wrapper = document.createElement("div");
			$wrapper.classList.add(
				QmsgStore.NAMESPACE,
				QmsgUtils.getNameSpacify("wrapper"),
				QmsgUtils.getNameSpacify("is-initialized")
			);
			$wrapper.classList.add($positionClassName);
			$shadowRoot.appendChild($wrapper);
		}
		if (this.#setting.showReverse) {
			$wrapper.style.flexDirection = "column-reverse";
		} else {
			$wrapper.style.flexDirection = "column";
		}
		let zIndex = this.#setting.zIndex;
		if (typeof zIndex === "function") {
			zIndex = zIndex();
		}
		if (!isNaN(zIndex)) {
			$wrapper.style.zIndex = zIndex.toString();
		}
		$wrapper.appendChild(this.$Qmsg);
		this.setState(this.$Qmsg, "opening");
		if (this.#setting.showClose) {
			/* 关闭按钮绑定点击事件 */
			let $closeIcon = this.$Qmsg.querySelector(".qmsg-icon-close");
			if ($closeIcon) {
				$closeIcon.addEventListener("click", function () {
					QmsgContext.close();
				});
			}
		}
		let animationendEvent = function (event: AnimationEvent) {
			/* 监听动画完成 */
			let target = event.target as HTMLDivElement,
				animationName = event.animationName;
			if (animationName === QmsgAnimation.$state.closing) {
				QmsgContext.#endTime = new Date().getTime();
				clearTimeout(QmsgContext.#timerId);
				QmsgContext.destroy();
			}
			QmsgAnimation.setStyleAnimationName(target);
		};

		QmsgAnimation.$name.endNameList.forEach(function (animationendName) {
			// @ts-ignore
			QmsgContext.$Qmsg.addEventListener(animationendName, animationendEvent);
		});

		if (this.#setting.autoClose) {
			/* 自动关闭 */
			this.#startTime = new Date().getTime();
			this.#timerId = setTimeout(function () {
				QmsgContext.close();
			}, this.#setting.timeout);

			this.$Qmsg.addEventListener("mouseover", function () {
				/* 鼠标滑入，清除定时器 */
				QmsgContext.#startTime = null;
				QmsgContext.#endTime = null;
				clearTimeout(QmsgContext.#timerId);
			});
			this.$Qmsg.addEventListener("mouseout", function () {
				/* 鼠标滑出，重启定时器 */
				if (QmsgContext.#state !== "closing") {
					/* 状态为关闭则不重启定时器 */
					QmsgContext.#startTime = new Date().getTime();
					QmsgContext.#timerId = setTimeout(function () {
						QmsgContext.close();
					}, QmsgContext.#setting.timeout);
				}
			});
		}
	}
	/**
	 * 对timeout进行检测并转换
	 * 当timeout为string时，转换为number
	 * timeout必须在规定范围内
	 */
	private detectionType() {
		if (
			this.#setting.timeout != null &&
			typeof this.#setting.timeout === "string"
		) {
			this.#setting.timeout = parseInt(this.#setting.timeout);
		}
		if (isNaN(this.#setting.timeout)) {
			this.#setting.timeout = QmsgStore.DEFAULT.timeout;
		}
		if (
			!(
				this.#setting.timeout != null &&
				parseInt(this.#setting.timeout.toString()) >= 0 &&
				parseInt(this.#setting.timeout.toString()) <= Number.MAX_VALUE
			)
		) {
			this.#setting.timeout = QmsgStore.DEFAULT.timeout;
		}

		if (typeof this.#setting.zIndex === "function") {
			this.#setting.zIndex = this.#setting.zIndex();
		}
		if (
			this.#setting.zIndex != null &&
			typeof this.#setting.zIndex === "string"
		) {
			this.#setting.zIndex = parseInt(this.#setting.zIndex);
		}
		if (isNaN(this.#setting.zIndex)) {
			this.#setting.zIndex =
				typeof QmsgStore.DEFAULT.zIndex === "function"
					? QmsgStore.DEFAULT.zIndex()
					: QmsgStore.DEFAULT.zIndex;
		}
	}
	/**
	 * 设置元素动画状态 开启/关闭
	 * @param QmsgMsg
	 * @param state
	 * @returns
	 */
	private setState(element: HTMLDivElement, state: keyof QmsgAnimationState) {
		if (!state || !QmsgAnimation.$state[state]) return;
		this.#state = state;
		QmsgAnimation.setStyleAnimationName(element, QmsgAnimation.$state[state]);
	}
	/**
	 * 设置消息数量统计
	 */
	setMsgCount() {
		let QmsgContext = this;
		let countClassName = QmsgUtils.getNameSpacify("count");
		let wrapperClassName = `div.${QmsgUtils.getNameSpacify(
			"data-position",
			this.#setting.position.toLowerCase()
		)} [class^="qmsg-content-"]`;
		let $content = this.$Qmsg.querySelector(wrapperClassName);
		if (!$content) {
			throw new TypeError("$content is null");
		}
		let $count = $content.querySelector("." + countClassName) as HTMLElement;
		if (!$count) {
			$count = document.createElement("span");
			$count.classList.add(countClassName);
			$content.appendChild($count);
		}
		$count.innerHTML = this.getRepeatNum().toString();
		QmsgAnimation.setStyleAnimationName($count);
		QmsgAnimation.setStyleAnimationName($count, "MessageShake");
		/* 重置定时器 */
		clearTimeout(this.#timerId);
		if (this.#setting.autoClose) {
			this.#timerId = setTimeout(function () {
				QmsgContext.close();
			}, this.#setting.timeout);
		}
	}
	/**
	 * 关闭Qmsg（会触发动画）
	 */
	close() {
		this.setState(this.$Qmsg, "closing");
		if (QmsgStore.CAN_ANIMATION) {
			/* 支持动画 */
			QmsgObj.remove(this.#uuid);
		} else {
			/* 不支持动画 */
			this.destroy();
		}
		let onCloseCallBack = this.#setting.onClose;
		if (onCloseCallBack && typeof onCloseCallBack === "function") {
			onCloseCallBack.call(this);
		}
	}
	/**
	 * 销毁Qmsg
	 */
	destroy() {
		this.#endTime = new Date().getTime();
		this.$Qmsg.remove();
		clearTimeout(this.#timerId);
		QmsgObj.remove(this.uuid);
	}
	/**
	 * 设置内容文本
	 */
	setText(text: string) {
		let $content = this.$Qmsg.querySelector(
			"div[class^=qmsg-content-] > span"
		) as HTMLSpanElement | null;
		if ($content) {
			$content.innerText = text;
			this.#setting.content = text;
		} else {
			throw new TypeError("$content is null");
		}
	}
	/**
	 * 设置内容超文本
	 */
	setHTML(text: string) {
		let $content = this.$Qmsg.querySelector(
			"div[class^=qmsg-content-] > span"
		) as HTMLSpanElement | null;
		if ($content) {
			$content.innerHTML = text;
			this.#setting.content = text;
		} else {
			throw new TypeError("$content is null");
		}
	}
}
