import { QmsgOption } from ".";
import { QmsgAnimation, QmsgAnimationState } from "./QmsgAnimation";
import { QmsgCSS } from "./QmsgCSS";
import { QmsgStore } from "./QmsgStore";
import { QmsgIcon } from "./QmsgIcon";
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
	#count: number;
	/**
	 * 主元素
	 */
	$Qmsg: HTMLDivElement;
	constructor(public option: QmsgOption, public uuid: string) {
		this.#timerId = void 0;
		this.#startTime = null;
		this.#endTime = null;
		this.#setting = Object.assign({}, QmsgStore.DEFAULT, this.option);
		this.#uuid = uuid;
		this.#state = "opening";
		this.$Qmsg = document.createElement("div");
		this.#count = 1;

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
	getCount() {
		return this.#count;
	}
	/**
	 * 设置count值
	 */
	setCount(num: number) {
		this.#count = num;
	}
	/**
	 * 设置count自增
	 */
	setCountIncreasing() {
		this.#count++;
	}
	/**
	 * 初始化元素
	 */
	private init() {
		let QmsgContext = this;
		let $svg = QmsgIcon[this.#setting.type || "info"];
		let contentClassName = QmsgUtils.getNameSpacify(
			"content-" + this.#setting.type || "info"
		);
		if (this.#setting.showClose) {
			contentClassName += " " + QmsgUtils.getNameSpacify("content-with-close");
		}
		let content = this.#setting.content || "";
		let contentStyle = "";
		let $closeIconStyle = "";
		let $closeSvg = QmsgIcon.close;
		if (this.#setting.showMoreContent) {
			contentStyle = `
			  display: flex;
			  align-items: center;
			  white-space: unset;
			  overflow: unset;
			  text-overflow: unset;
			  padding-right: unset;
		    `;
			$closeIconStyle = `
			  position:unset;
			  overflow:unset;
			  padding-left: 6px;
			  margin-right: 0px;
		    `;
		}
		let $closeIcon = "";
		if (this.#setting.showClose) {
			$closeIcon = `<i class="qmsg-icon qmsg-icon-close" style="${$closeIconStyle}">${$closeSvg}</i>`;
		}
		let $span = document.createElement("span");
		let $positionClassName = QmsgUtils.getNameSpacify(
			"data-position",
			this.#setting.position.toLowerCase()
		);
		if (this.#setting.html || this.#setting.isHTML) {
			$span.innerHTML = content;
		} else {
			$span.innerText = content;
		}
		this.$Qmsg.innerHTML = `
        <div class="qmsg-content">
            <div class="${contentClassName}" style="${contentStyle}">
            ${this.#setting.showIcon ? `<i class="qmsg-icon">${$svg}</i>` : ""}
                ${$span.outerHTML}
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

		if (
			this.#setting.zIndex != null &&
			typeof this.#setting.zIndex === "string"
		) {
			this.#setting.zIndex = parseInt(this.#setting.zIndex);
		}
		if (isNaN(this.#setting.zIndex)) {
			this.#setting.zIndex = QmsgStore.DEFAULT.zIndex;
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
		$count.innerHTML = this.getCount().toString();
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
