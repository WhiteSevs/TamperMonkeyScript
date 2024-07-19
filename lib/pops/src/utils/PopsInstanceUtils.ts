import type { PopsAlertDetails } from "../components/alert/indexType";
import type { PopsConfirmDetails } from "../components/confirm/indexType";
import type { PopsDrawerDetails } from "../components/drawer/indexType";
import type { PopsFolderDetails } from "../components/folder/indexType";
import type { PopsIframeDetails } from "../components/iframe/indexType";
import type { PopsLoadingDetails } from "../components/loading/indexType";
import type { PopsPanelDetails } from "../components/panel/indexType";
import type { PopsPromptDetails } from "../components/prompt/indexType";
import type { PopsLayerCommonConfig } from "../types/layer";
import type { PopsLayerMode } from "../types/main";
import { popsDOMUtils } from "./PopsDOMUtils";
import { popsUtils } from "./PopsUtils";
import { PopsCore } from "../Core";
import { pops } from "../Pops";

export const PopsInstanceUtils = {
	/**
	 * 获取所有弹窗中的最大的z-index
	 * @param defaultValue
	 */
	getPopsMaxZIndex(defaultValue: number) {
		let maxZIndex = 0;
		let maxZIndexElement = null as any as HTMLDivElement;

		Object.keys(pops.config.layer).forEach((layerName) => {
			let layerList = pops.config.layer[layerName as PopsLayerMode];
			layerList.forEach((layer) => {
				let itemZIndex = parseInt(getComputedStyle(layer.animElement).zIndex);
				maxZIndexElement =
					itemZIndex > maxZIndex ? layer.animElement : maxZIndexElement;
				maxZIndex = itemZIndex > maxZIndex ? itemZIndex : maxZIndex;
			});
		});
		maxZIndex = maxZIndex === 0 ? defaultValue : maxZIndex;
		return { zIndex: maxZIndex, animElement: maxZIndexElement };
	},
	/**
	 * 获取CSS Rule
	 * @param sheet
	 * @returns
	 */
	getKeyFrames(sheet: CSSStyleSheet) {
		let result = {};
		Object.keys(sheet.cssRules).forEach((key) => {
			if (
				(sheet.cssRules as any)[key].type === 7 &&
				(sheet.cssRules as any)[key].name.startsWith("pops-anim-")
			) {
				(result as any)[(sheet.cssRules as any)[key].name] = (
					sheet.cssRules as any
				)[key];
			}
		});
		return result;
	},
	/**
	 * 删除配置中对应的对象
	 * @param moreLayerConfigList 配置实例列表
	 * @param  guid 唯一标识
	 * @param isAll 是否全部删除
	 */
	removeInstance(
		moreLayerConfigList: PopsLayerCommonConfig[][],
		guid: string,
		isAll = false
	) {
		function removeItem(item: PopsLayerCommonConfig) {
			item?.animElement?.remove();
			item?.popsElement?.remove();
			item?.maskElement?.remove();
			item?.$shadowContainer?.remove();
		}
		// [ layer[], layer[],...]
		moreLayerConfigList.forEach((layerConfigList) => {
			//  layer[]
			layerConfigList.forEach((layerConfigItem, index) => {
				if (isAll || layerConfigItem["guid"] === guid) {
					if (
						pops.config.animation.hasOwnProperty(
							layerConfigItem.animElement.getAttribute("anim") as string
						)
					) {
						layerConfigItem.animElement.style.width = "100%";
						layerConfigItem.animElement.style.height = "100%";
						(layerConfigItem.animElement.style as any)["animation-name"] =
							layerConfigItem.animElement.getAttribute("anim") + "-reverse";
						if (
							pops.config.animation.hasOwnProperty(
								(layerConfigItem.animElement.style as any)["animation-name"]
							)
						) {
							popsDOMUtils.on(
								layerConfigItem.animElement,
								popsDOMUtils.getAnimationEndNameList(),
								function () {
									removeItem(layerConfigItem);
								},
								{
									capture: true,
								}
							);
						} else {
							removeItem(layerConfigItem);
						}
					} else {
						removeItem(layerConfigItem);
					}
					layerConfigList.splice(index, 1);
				}
			});
		});

		return moreLayerConfigList;
	},
	/**
	 * 隐藏
	 * @param popsType
	 * @param layerConfigList
	 * @param guid
	 * @param config
	 * @param animElement
	 * @param maskElement
	 */
	hide(
		popsType: PopsLayerMode,
		layerConfigList: PopsLayerCommonConfig[],
		guid: string,
		config:
			| PopsAlertDetails
			| PopsDrawerDetails
			| PopsPromptDetails
			| PopsConfirmDetails
			| PopsIframeDetails
			| PopsLoadingDetails
			| PopsPanelDetails
			| PopsFolderDetails,
		animElement: HTMLElement,
		maskElement: HTMLElement
	) {
		let popsElement =
			animElement.querySelector<HTMLDivElement>(".pops[type-value]")!;
		if (popsType === "drawer") {
			let drawerConfig = config as Required<PopsDrawerDetails>;
			setTimeout(() => {
				maskElement.style.setProperty("display", "none");
				if (["top", "bottom"].includes(drawerConfig.direction)) {
					popsElement.style.setProperty("height", "0");
				} else if (["left", "right"].includes(drawerConfig.direction)) {
					popsElement.style.setProperty("width", "0");
				} else {
					console.error("未知direction：", drawerConfig.direction);
				}
			}, drawerConfig.closeDelay);
		} else {
			layerConfigList.forEach((layerConfigItem) => {
				if (layerConfigItem.guid === guid) {
					/* 存在动画 */
					layerConfigItem.animElement.style.width = "100%";
					layerConfigItem.animElement.style.height = "100%";
					(layerConfigItem.animElement.style as any)["animation-name"] =
						layerConfigItem.animElement.getAttribute("anim") + "-reverse";
					if (
						pops.config.animation.hasOwnProperty(
							(layerConfigItem.animElement.style as any)["animation-name"]
						)
					) {
						function animationendCallBack() {
							layerConfigItem.animElement.style.display = "none";
							if (layerConfigItem.maskElement) {
								layerConfigItem.maskElement.style.display = "none";
							}
							popsDOMUtils.off(
								layerConfigItem.animElement,
								popsDOMUtils.getAnimationEndNameList(),
								animationendCallBack,
								{
									capture: true,
								}
							);
						}
						popsDOMUtils.on(
							layerConfigItem.animElement,
							popsDOMUtils.getAnimationEndNameList(),
							animationendCallBack,
							{
								capture: true,
							}
						);
					} else {
						layerConfigItem.animElement.style.display = "none";
						if (layerConfigItem.maskElement) {
							layerConfigItem.maskElement.style.display = "none";
						}
					}

					return;
				}
			});
		}
	},

	/**
	 * 显示
	 * @param popsType
	 * @param layerConfigList
	 * @param guid
	 * @param config
	 * @param animElement
	 * @param maskElement
	 */
	show(
		popsType: PopsLayerMode,
		layerConfigList: PopsLayerCommonConfig[],
		guid: string,
		config:
			| PopsAlertDetails
			| PopsDrawerDetails
			| PopsPromptDetails
			| PopsConfirmDetails
			| PopsIframeDetails
			| PopsLoadingDetails
			| PopsPanelDetails
			| PopsFolderDetails,
		animElement: HTMLElement,
		maskElement: HTMLElement
	) {
		let popsElement =
			animElement.querySelector<HTMLDivElement>(".pops[type-value]")!;
		if (popsType === "drawer") {
			let drawerConfig = config as PopsDrawerDetails;
			setTimeout(() => {
				maskElement.style.setProperty("display", "");
				let direction = drawerConfig.direction!;
				let size = drawerConfig.size!.toString();
				if (["top", "bottom"].includes(direction)) {
					popsElement.style.setProperty("height", size);
				} else if (["left", "right"].includes(direction)) {
					popsElement.style.setProperty("width", size);
				} else {
					console.error("未知direction：", direction);
				}
			}, drawerConfig.openDelay);
		} else {
			layerConfigList.forEach((layerConfigItem) => {
				if (layerConfigItem.guid === guid) {
					layerConfigItem.animElement.style.width = "";
					layerConfigItem.animElement.style.height = "";
					(layerConfigItem.animElement.style as any)["animation-name"] =
						layerConfigItem
							.animElement!.getAttribute("anim")!
							.replace("-reverse", "");
					if (
						pops.config.animation.hasOwnProperty(
							(layerConfigItem.animElement.style as any)["animation-name"]
						)
					) {
						layerConfigItem.animElement.style.display = "";
						if (layerConfigItem.maskElement) {
							layerConfigItem.maskElement.style.display = "";
						}
						function animationendCallBack() {
							popsDOMUtils.off(
								layerConfigItem.animElement,
								popsDOMUtils.getAnimationEndNameList(),
								animationendCallBack,
								{
									capture: true,
								}
							);
						}
						popsDOMUtils.on(
							layerConfigItem.animElement,
							popsDOMUtils.getAnimationEndNameList(),
							animationendCallBack,
							{
								capture: true,
							}
						);
					} else {
						layerConfigItem.animElement.style.display = "";
						if (layerConfigItem.maskElement) {
							layerConfigItem.maskElement.style.display = "";
						}
					}
				}
				return;
			});
		}
	},
	/**
	 * 关闭
	 * @param popsType
	 * @param layerConfigList
	 * @param guid
	 * @param config
	 * @param animElement
	 */
	close(
		popsType: string,
		layerConfigList: PopsLayerCommonConfig[],
		guid: string,
		config:
			| PopsAlertDetails
			| PopsDrawerDetails
			| PopsPromptDetails
			| PopsConfirmDetails
			| PopsIframeDetails
			| PopsLoadingDetails
			| PopsPanelDetails
			| PopsFolderDetails,
		animElement: HTMLElement
	) {
		let popsElement =
			animElement.querySelector<HTMLDivElement>(".pops[type-value]")!;
		let drawerConfig = config as Required<PopsDrawerDetails>;
		/**
		 * 动画结束事件
		 */
		function transitionendEvent() {
			function closeCallBack(event: Event) {
				if ((event as TransitionEvent).propertyName !== "transform") {
					return;
				}
				popsDOMUtils.off(
					popsElement,
					popsDOMUtils.getTransitionEndNameList(),
					void 0,
					closeCallBack
				);
				PopsInstanceUtils.removeInstance([layerConfigList], guid);
			}
			/* 监听过渡结束 */
			popsDOMUtils.on(
				popsElement,
				popsDOMUtils.getTransitionEndNameList(),
				closeCallBack
			);
			let popsTransForm = getComputedStyle(popsElement).transform;
			if (popsTransForm !== "none") {
				popsDOMUtils.trigger(
					popsElement,
					popsDOMUtils.getTransitionEndNameList(),
					void 0,
					true
				);
				return;
			}
			if (["top"].includes(drawerConfig.direction)) {
				popsElement.style.setProperty("transform", "translateY(-100%)");
			} else if (["bottom"].includes(drawerConfig.direction)) {
				popsElement.style.setProperty("transform", "translateY(100%)");
			} else if (["left"].includes(drawerConfig.direction)) {
				popsElement.style.setProperty("transform", "translateX(-100%)");
			} else if (["right"].includes(drawerConfig.direction)) {
				popsElement.style.setProperty("transform", "translateX(100%)");
			} else {
				console.error("未知direction：", drawerConfig.direction);
			}
		}

		if (popsType === "drawer") {
			setTimeout(() => {
				transitionendEvent();
			}, drawerConfig.closeDelay);
		} else {
			PopsInstanceUtils.removeInstance([layerConfigList], guid);
		}
	},
	/**
	 * 拖拽元素
	 * 说明：
	 * + 元素的position为absolute或者fixed
	 * + 会为元素的
	 * @param moveElement 需要拖拽的元素
	 * @param options 配置
	 */
	drag(
		moveElement: HTMLElement,
		options: {
			dragElement: HTMLElement;
			limit: boolean;
			extraDistance: number;
			container?: Window | typeof globalThis | HTMLElement;
			moveCallBack?: (
				moveElement: HTMLElement,
				left: number,
				top: number
			) => void;
			endCallBack?: (
				moveElement: HTMLElement,
				left: number,
				top: number
			) => void;
			preventEvent?: (event: TouchEvent | PointerEvent) => boolean;
		}
	) {
		options = Object.assign(
			{
				limit: true,
				extraDistance: 3,
				container: PopsCore.globalThis,
			},
			options
		);
		let isMove = false;
		/* 点击元素，left偏移 */
		let clickElementLeftOffset = 0;
		/* 点击元素，top偏移 */
		let clickElementTopOffset = 0;
		let AnyTouch = popsUtils.AnyTouch();
		let anyTouchElement = new AnyTouch(options.dragElement, {
			preventEvent(event: Event) {
				if (typeof options.preventEvent === "function") {
					return options.preventEvent(event as any);
				} else {
					return false;
				}
			},
		});
		popsDOMUtils.css(options.dragElement, {
			cursor: "move",
		});
		/**
		 * 获取移动元素的transform偏移
		 */
		function getTransform(element: HTMLElement) {
			let transform_left = 0;
			let transform_top = 0;
			let elementTransform =
				PopsCore.globalThis.getComputedStyle(element).transform;
			if (
				elementTransform !== "none" &&
				elementTransform != null &&
				elementTransform !== ""
			) {
				let elementTransformSplit = elementTransform
					.match(/\((.+)\)/)?.[1]
					.split(",")!;
				transform_left = Math.abs(parseInt(elementTransformSplit[4]));
				transform_top = Math.abs(parseInt(elementTransformSplit[5]));
			}
			return {
				transformLeft: transform_left,
				transformTop: transform_top,
			};
		}
		/**
		 * 修改移动的元素的style
		 */
		function changeMoveElementStyle(element: HTMLElement) {
			let old_transitionDuration = element.style.transitionDuration;
			if (globalThis.getComputedStyle(element).transitionDuration !== "0s") {
				element.style.transitionDuration = "0s";
			}
			return () => {
				element.style.transitionDuration = old_transitionDuration;
			};
		}
		/**
		 * 获取容器的高度、宽度，一般是window为容器
		 */

		function getContainerWidthOrHeight(
			container: HTMLElement | Window | typeof globalThis
		) {
			container = container ?? globalThis;
			return {
				width: popsDOMUtils.width(container),
				height: popsDOMUtils.height(container),
			};
		}
		/**
		 * 获取容器的最小left、top偏移
		 */

		function getContainerTopOrLeft(
			container: HTMLElement | Window | typeof globalThis
		) {
			container = container ?? globalThis;
			if (popsUtils.isWin(container)) {
				return {
					left: 0,
					top: 0,
				};
			} else {
				let rect = (container as HTMLElement).getBoundingClientRect();
				return {
					left: rect.left,
					top: rect.top,
				};
			}
		}
		let transformInfo = getTransform(moveElement);
		let transformLeft = transformInfo.transformLeft;
		let transformTop = transformInfo.transformTop;

		let resumeMoveElementStyle: Function | null = null;

		anyTouchElement.on(
			"pan",
			function (
				event: PointerEvent & {
					phase: string;
				}
			) {
				if (!isMove) {
					isMove = true;
					let rect = options.dragElement.getBoundingClientRect();
					clickElementLeftOffset = event.x - rect.left;
					clickElementTopOffset = event.y - rect.top;
					transformInfo = getTransform(moveElement);
					transformLeft = transformInfo.transformLeft;
					transformTop = transformInfo.transformTop;
					//if (event.nativeEvent.offsetX) {
					//  clickElementLeftOffset = parseInt(event.nativeEvent.offsetX);
					//} else {
					//  clickElementLeftOffset = parseInt(event.getOffset().x);
					//}
					//if (event.nativeEvent.offsetY) {
					//  clickElementTopOffset = parseInt(event.nativeEvent.offsetY);
					//} else {
					//  clickElementTopOffset = parseInt(event.getOffset().y);
					//}
					resumeMoveElementStyle = changeMoveElementStyle(moveElement);
				}

				/** 当前移动的left偏移 */
				let currentMoveLeftOffset =
					event.x - clickElementLeftOffset + transformLeft;
				/** 当前移动的top偏移 */
				let currentMoveTopOffset =
					event.y - clickElementTopOffset + transformTop;
				/* 拖拽移动 */
				if (event.phase === "move") {
					if (options.limit) {
						/* 限制在容器内移动 */
						/* left偏移最大值 */
						let maxLeftOffset =
							getContainerWidthOrHeight(options.container!).width -
							popsDOMUtils.width(moveElement) +
							transformLeft;
						let { left: minLeftOffset, top: minTopOffset } =
							getContainerTopOrLeft(options.container!);
						/* top偏移的最大值 */
						let maxTopOffset =
							getContainerWidthOrHeight(options.container!).height -
							popsDOMUtils.height(moveElement) +
							transformTop;
						if (currentMoveLeftOffset > maxLeftOffset) {
							/* 不允许超过容器的最大宽度 */
							currentMoveLeftOffset = maxLeftOffset;
						}
						if (currentMoveTopOffset > maxTopOffset) {
							/* 不允许超过容器的最大高度 */
							currentMoveTopOffset = maxTopOffset;
						}
						if (
							currentMoveLeftOffset - options.extraDistance * 2 <
							minLeftOffset + transformLeft
						) {
							/* 不允许left偏移小于容器最小值 */
							currentMoveLeftOffset = minLeftOffset + transformLeft;
							/* 最左边 +额外距离 */
							currentMoveLeftOffset += options.extraDistance;
						} else {
							/* 最右边 -额外距离 */
							currentMoveLeftOffset -= options.extraDistance;
						}
						if (
							currentMoveTopOffset - options.extraDistance * 2 <
							minTopOffset + transformTop
						) {
							/* 不允许top偏移小于容器最小值 */
							currentMoveTopOffset = minTopOffset + transformTop;
							/* 最上面 +额外距离 */
							currentMoveTopOffset += options.extraDistance;
						} else {
							/* 最下面 -额外距离 */
							currentMoveTopOffset -= options.extraDistance;
						}
					}
					if (typeof options.moveCallBack === "function") {
						options.moveCallBack(
							moveElement,
							currentMoveLeftOffset,
							currentMoveTopOffset
						);
					}

					popsDOMUtils.css(moveElement, {
						left: currentMoveLeftOffset + "px",
						top: currentMoveTopOffset + "px",
					});
				}

				/* 停止拖拽 */
				if (event.phase === "end") {
					isMove = false;
					if (typeof resumeMoveElementStyle === "function") {
						resumeMoveElementStyle();
						resumeMoveElementStyle = null;
					}
					if (typeof options.endCallBack === "function") {
						options.endCallBack(
							moveElement,
							currentMoveLeftOffset,
							currentMoveTopOffset
						);
					}
				}
			}
		);
		/* 因为会覆盖上面的点击事件，主动触发一下 */
		anyTouchElement.on(
			["click", "tap"],
			function (
				event: PointerEvent & {
					changedPoints: any[];
				}
			) {
				event.changedPoints.forEach((item) => {
					popsDOMUtils.trigger(item.target, "click", void 0, true);
				});
			}
		);
	},
	/**
	 * 排序数组
	 * @param getBeforeValueFun
	 * @param getAfterValueFun
	 * @param sortByDesc 排序是否降序，默认降序
	 */
	sortElementListByProperty<T extends any, R>(
		getBeforeValueFun: (value: T) => R,
		getAfterValueFun: (value: T) => R,
		sortByDesc = true
	) {
		if (typeof sortByDesc !== "boolean") {
			throw "参数 sortByDesc 必须为boolean类型";
		}
		if (getBeforeValueFun == null || getAfterValueFun == null) {
			throw "获取前面的值或后面的值的方法不能为空";
		}
		return function (after_obj: T, before_obj: T) {
			var beforeValue = getBeforeValueFun(before_obj); /*  前 */
			var afterValue = getAfterValueFun(after_obj); /* 后 */
			if (sortByDesc) {
				if (afterValue > beforeValue) {
					return -1;
				} else if (afterValue < beforeValue) {
					return 1;
				} else {
					return 0;
				}
			} else {
				if (afterValue < beforeValue) {
					return -1;
				} else if (afterValue > beforeValue) {
					return 1;
				} else {
					return 0;
				}
			}
		};
	},
};
