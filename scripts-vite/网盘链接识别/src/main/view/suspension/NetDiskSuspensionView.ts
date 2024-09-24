import { AnyTouch, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { NetDiskUI } from "../../ui/NetDiskUI";
import { NetDiskGlobalSettingView } from "../global-setting/NetDiskGlobalSettingView";
import { NetDiskGlobalData } from "../../data/NetDiskGlobalData";
import indexCSS from "./index.css?raw";
import { GenerateData } from "@/main/data/NetDiskGenerateDataUtils";
import DOMUtils from "@whitesev/domutils";

export const NetDiskSuspensionConfig = {
	position: {
		suspensionX: GenerateData("suspensionX", DOMUtils.width(window) - 50),
		suspensionY: GenerateData(
			"suspensionY",
			(DOMUtils.height(window) - 50) / 2
		),
		isRight: GenerateData("isRight", false),
	},
	mode: {
		current_suspension_smallwindow_mode: GenerateData(
			"current_suspension_smallwindow_mode",
			"suspension" as "smallwindow" | "suspension"
		),
	},
};

export const NetDiskSuspension = {
	suspensionNode: null as any as HTMLDivElement,
	/** 是否已显示 */
	isShow: false,
	/** 是否已设置事件 */
	isSetEvent: false,
	/** 是否正在切换背景 */
	isRandBg: false,
	/**
	 * 显示悬浮按钮
	 */
	show() {
		if (!this.isShow) {
			this.isShow = true;
			this.createUI();
			this.setSuspensionPosition();
		}
		if (!this.isSetEvent) {
			this.isSetEvent = true;
			this.setSuspensionEvent();
			this.setResizeEventListener();
		}
		this.backgroundSwitch();
		this.showSuspension();
	},
	showSuspension() {
		this.suspensionNode.style.display = "";
	},
	hideSuspension() {
		this.suspensionNode.style.display = "none";
	},
	/**
	 * 判断当前是否是顶部窗口
	 * @returns {boolean}
	 */
	isTopWindow(): boolean {
		return unsafeWindow.self.window === unsafeWindow.top!.window;
	},
	/**
	 * 创建UI界面
	 */
	createUI() {
		if (NetDiskGlobalData.suspension.size.value < 15) {
			/* 大小不能小于 15px */
			NetDiskGlobalData.suspension.size.value = 15;
		}
		if (NetDiskGlobalData.suspension.size.value > 250) {
			/* 大小不能大于 250px */
			NetDiskGlobalData.suspension.size.value = 250;
		}
		if (NetDiskGlobalData.suspension.opacity.value < 0.1) {
			/* 透明度不能小于 0.1 */
			NetDiskGlobalData.suspension.opacity.value = 0.1;
		}
		if (NetDiskGlobalData.suspension.opacity.value > 1.0) {
			/* 透明度不能大于 1.0 */
			NetDiskGlobalData.suspension.opacity.value = 1.0;
		}
		let $shadowContainer = DOMUtils.createElement("div", {
			className: "whitesev-suspension-shadow-container",
		});
		let $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
		this.suspensionNode = DOMUtils.createElement(
			"div",
			{
				id: "whitesevSuspensionId",
				className: "whitesevSuspension",
				innerHTML: /*html*/ `
                <style type="text/css">
				/* 动态生成z-index */
				.whitesevSuspension{
					z-index: ${utils.getMaxValue(4000, utils.getMaxZIndex(10))};;
				}

				${indexCSS}

                </style>
                <div class="whitesevSuspensionMain">
                <div class="whitesevSuspensionFloor">
                    <div class="netdisk"></div>
                </div>
                </div>
                `,
			},
			{
				style: `
                    width: ${NetDiskGlobalData.suspension.size.value}px;
                    height: ${NetDiskGlobalData.suspension.size.value}px;
                    opacity: ${NetDiskGlobalData.suspension.opacity.value}
                `,
			}
		);
		$shadowRoot.appendChild(this.suspensionNode);
		document.body.appendChild($shadowContainer);
	},
	/**
	 * 设置 悬浮按钮所有事件
	 */
	setSuspensionEvent() {
		let that = this;
		let needDragElement = NetDiskUI.suspension.suspensionNode;
		let dragNode = new AnyTouch(needDragElement);
		let netDiskLinkViewTimer: number | undefined = void 0;
		let moveFlag = false;
		/* 是否是双击 */
		let isDouble = false;
		/* 点击元素，left偏移 */
		let clickElementLeftOffset = 0;
		/* 点击元素，top偏移 */
		let clickElementTopOffset = 0;
		/* 设置悬浮按钮 按下事件 */
		dragNode.on("pan", function (event: any) {
			if (!moveFlag) {
				moveFlag = true;
				let rect = needDragElement.getBoundingClientRect();
				clickElementLeftOffset = event.x - rect.left;
				clickElementTopOffset = event.y - rect.top;
				DOMUtils.css(needDragElement, {
					cursor: "move",
					transition: "none",
				});
			}
			/**
			 * 移动
			 */
			if (event.phase === "move") {
				/* 悬浮按钮大小不能超过250px */
				/* left偏移最大值 */
				let maxLeftOffset =
					DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
				/* top偏移的最大值 */
				let maxTopOffset =
					DOMUtils.height(window) - NetDiskGlobalData.suspension.size.value;
				/* 当前移动的left偏移 */
				let currentSuspensionLeftOffset = event.x - clickElementLeftOffset;
				/* 当前移动的top偏移 */
				let currentSuspensionTopOffset = event.y - clickElementTopOffset;
				/* 不允许超过窗口最大宽度 */
				currentSuspensionLeftOffset =
					currentSuspensionLeftOffset > maxLeftOffset
						? maxLeftOffset
						: currentSuspensionLeftOffset;
				/* 不允许超过窗口最大高度 */
				currentSuspensionTopOffset =
					currentSuspensionTopOffset > maxTopOffset
						? maxTopOffset
						: currentSuspensionTopOffset;
				/* 不允许小于0 */
				currentSuspensionLeftOffset =
					currentSuspensionLeftOffset < 0 ? 0 : currentSuspensionLeftOffset;
				/* 不允许小于0 */
				currentSuspensionTopOffset =
					currentSuspensionTopOffset < 0 ? 0 : currentSuspensionTopOffset;
				if (NetDiskUI.suspension.isTopWindow()) {
					NetDiskSuspensionConfig.position.suspensionX.value =
						currentSuspensionLeftOffset;
					NetDiskSuspensionConfig.position.suspensionY.value =
						currentSuspensionTopOffset;
				}
				DOMUtils.css(needDragElement, {
					left: currentSuspensionLeftOffset + "px",
					top: currentSuspensionTopOffset + "px",
				});
			}

			/**
			 * 停止移动
			 */
			if (event.phase === "end") {
				moveFlag = false;
				DOMUtils.css(needDragElement, {
					cursor: "auto",
				});
				/* 获取当前悬浮按钮left偏移 */
				let currentSuspensionLeftOffset = parseInt(
					DOMUtils.css(needDragElement, "left")
				);
				if (
					NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].value
				) {
					let setCSSLeft = 0;
					/* 判断悬浮按钮是否在右边区域 */
					if (currentSuspensionLeftOffset >= DOMUtils.width(window) / 2) {
						/* 设置悬浮按钮的left偏移 */
						setCSSLeft =
							DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
						if (NetDiskUI.suspension.isTopWindow()) {
							NetDiskSuspensionConfig.position.isRight.value = true;
						}
					} else {
						if (NetDiskUI.suspension.isTopWindow()) {
							NetDiskSuspensionConfig.position.isRight.value = false;
						}
					}
					if (NetDiskUI.suspension.isTopWindow()) {
						NetDiskSuspensionConfig.position.suspensionX.value = setCSSLeft;
					}
					DOMUtils.css(needDragElement, {
						left: setCSSLeft + "px",
					});
				}
				DOMUtils.css(needDragElement, {
					transition: "left 300ms ease 0s",
				});
			}
		});
		/* 设置悬浮按钮 点击/按下事件 */
		dragNode.on(["click", "tap"], function (event: any) {
			clearTimeout(netDiskLinkViewTimer);
			netDiskLinkViewTimer = void 0;
			if (isDouble) {
				isDouble = false;
				/* 判定为双击 */
				NetDiskGlobalSettingView.show();
			} else {
				netDiskLinkViewTimer = setTimeout(() => {
					isDouble = false;
					if (
						NetDiskGlobalData.function["netdisk-behavior-mode"].value.includes(
							"smallwindow"
						)
					) {
						NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value =
							"smallwindow";
						NetDiskUI.suspension.hideSuspension();
					}
					NetDiskUI.view.show();
				}, 200);
				isDouble = true;
			}
		});
		NetDiskUI.setGlobalRightClickMenu(needDragElement);
	},
	/**
	 * 设置window的resize事件监听，来重新设置悬浮按钮的位置
	 */
	setResizeEventListener() {
		DOMUtils.on(globalThis, "resize", void 0, () => {
			let activeElement = document.activeElement as HTMLElement;
			if (utils.isPhone()) {
				if (["input", "textarea"].includes(activeElement.localName)) {
					/* 可能是移动端的输入框弹出的键盘导致的resize */
					return;
				} else if (
					(activeElement.hasAttribute("contenteditable") &&
						activeElement.getAttribute("contenteditable") === "true") ||
					activeElement.closest("[contenteditable='true']")
				) {
					/* 可能是移动端的输入框弹出的键盘导致的resize */
					return;
				} else if (!document.hasFocus()) {
					/* 页面失焦 */
					return;
				}
			}
			this.setSuspensionPosition();
		});
	},
	/**
	 * 设置悬浮按钮位置
	 */
	setSuspensionPosition() {
		/* 最大的left偏移*/
		let maxLeftOffset =
			DOMUtils.width(window) - NetDiskGlobalData.suspension.size.value;
		/* 最大的top偏移 */
		let maxTopOffset =
			DOMUtils.height(window) - NetDiskGlobalData.suspension.size.value;
		/* 用户自己拖动设置的悬浮按钮left偏移 */
		let userSetLeftOffset = NetDiskSuspensionConfig.position.suspensionX.value;

		/* 用户自己拖动设置的悬浮按钮top偏移 */
		let userSetTopOffset = NetDiskSuspensionConfig.position.suspensionY.value;

		if (
			NetDiskGlobalData.suspension["suspended-button-adsorption-edge"].value
		) {
			/* 如果isRight为true，悬浮按钮放到最右边，否则最左边 */
			if (NetDiskSuspensionConfig.position.isRight.value) {
				userSetLeftOffset = maxLeftOffset;
			} else {
				userSetLeftOffset = 0;
			}
			/* 如果用户设置的top偏移超出最大的top偏移，那么设置用户的偏移为默认的最大top偏移 */
			if (userSetTopOffset > maxTopOffset) {
				userSetTopOffset = maxTopOffset;
			} else if (userSetTopOffset < 0) {
				/* 如果用户设置的top偏移为负的，那么是超出边界，归位设置为0 */
				userSetTopOffset = 0;
			}

			if (NetDiskUI.suspension.isTopWindow()) {
				/* 当前窗口是顶部窗口，才可以保存移动的值 */
				NetDiskSuspensionConfig.position.suspensionX.value = userSetLeftOffset;
				NetDiskSuspensionConfig.position.suspensionY.value = userSetTopOffset;
			}
		}
		DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
			left: userSetLeftOffset + "px",
			top: userSetTopOffset + "px",
		});
	},
	/**
	 * 悬浮按钮背景轮播 效果为淡入淡出
	 */
	backgroundSwitch() {
		if (this.isRandBg) {
			return;
		}
		/**
		 * 获取随机背景的数组
		 */
		function getRandBgList() {
			let resultList: string[] = [];
			NetDiskUI.isMatchedNetDiskIconMap.forEach((item) => {
				resultList = [...resultList, NetDiskUI.src.icon[item]];
			});
			return resultList;
		}
		/**
		 * 进行切换 淡入淡出
		 * @param fadeTime 淡入\淡出的时间
		 * @param currentBackgroundSrc 当前的背景资源
		 */
		function startSwitch(fadeTime: number, currentBackgroundSrc: string) {
			currentList = getRandBgList();
			DOMUtils.fadeOut(randBgNode, fadeTime, function () {
				currentIndex++;
				currentIndex = currentIndex < currentList.length ? currentIndex : 0;
				currentBackgroundSrc = currentList[currentIndex];
				DOMUtils.css(randBgNode, {
					"background-image": `url(${currentBackgroundSrc})`,
				});
				DOMUtils.fadeIn(randBgNode, fadeTime, function () {
					setTimeout(() => {
						startSwitch(
							parseInt(
								NetDiskGlobalData.suspension["randbg-time"].value.toString()
							),
							currentBackgroundSrc
						);
					}, parseInt(NetDiskGlobalData.suspension["randbg-show-time"].value.toString()));
				});
			});
		}
		let currentList: string[] = [];
		let currentIndex = 0;
		currentList = getRandBgList();
		let randBgSrc = currentList[currentIndex];
		let randBgNode =
			NetDiskUI.suspension.suspensionNode.querySelector<HTMLElement>(
				".whitesevSuspension .netdisk"
			)!;
		DOMUtils.css(randBgNode, {
			"background-image": `url(${randBgSrc})`,
		});
		if (
			currentList.length < 2 ||
			NetDiskGlobalData.suspension["randbg-time"].value <= 0
		) {
			/* 只有一个的话或淡入/淡出的时间<=0 就不进行背景切换 */
			return;
		}
		this.isRandBg = true;

		startSwitch(
			parseInt(
				NetDiskGlobalData.suspension["randbg-time"].value.toString().toString()
			),
			randBgSrc
		);
	},
};
