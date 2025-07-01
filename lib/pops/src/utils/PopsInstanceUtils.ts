import type { PopsAlertDetails } from "../components/alert/types";
import type { PopsConfirmDetails } from "../components/confirm/types";
import type { PopsDrawerDetails } from "../components/drawer/types";
import type { PopsFolderDetails } from "../components/folder/types";
import type { PopsIframeDetails } from "../components/iframe/types";
import type { PopsLoadingDetails } from "../components/loading/types";
import type { PopsPanelDetails } from "../components/panel/types";
import type { PopsPromptDetails } from "../components/prompt/types/index";
import type { PopsLayerCommonConfig } from "../types/layer";
import type { PopsLayerMode } from "../types/main";
import { popsDOMUtils } from "./PopsDOMUtils";
import { popsUtils } from "./PopsUtils";
import { PopsCore } from "../PopsCore";
import { PopsLayerData } from "../PopsLayer";
import { PopsAnimation } from "../PopsAnimation";

export const PopsInstanceUtils = {
	/**
	 * 获取页面中最大的z-index的元素信息
	 * @param deviation 获取最大的z-index值的偏移，默认是+1
	 * @param node 进行判断的元素，默认是document
	 * @param ignoreCallBack 执行元素处理时调用的函数，返回false可忽略不想要处理的元素
	 * @example
	 * Utils.getMaxZIndexNodeInfo();
	 * > {
	 *   node: ...,
	 *   zIndex: 1001
	 * }
	 **/
	getMaxZIndexNodeInfo(
		deviation = 1,
		target: Element | ShadowRoot | Document = PopsCore.document,
		ignoreCallBack?: (
			$ele: Element | HTMLElement | ShadowRoot
		) => boolean | void
	): {
		node: Element;
		zIndex: number;
	} {
		deviation = Number.isNaN(deviation) ? 1 : deviation;
		// 最大值 2147483647
		// const maxZIndex = Math.pow(2, 31) - 1;
		// 比较值 2000000000
		const maxZIndexCompare = 2 * Math.pow(10, 9);
		// 当前页面最大的z-index
		let zIndex = 0;
		// 当前的最大z-index的元素，调试使用
		// @ts-ignore
		let maxZIndexNode: Element = null;
		/**
		 * 元素是否可见
		 * @param $css
		 */
		function isVisibleNode($css: CSSStyleDeclaration): boolean {
			return $css.position !== "static" && $css.display !== "none";
		}
		/**
		 * 查询元素的z-index
		 * 并比较值是否是已获取的最大值
		 * @param $ele
		 */
		function queryMaxZIndex($ele: Element) {
			if (typeof ignoreCallBack === "function") {
				let ignoreResult = ignoreCallBack($ele);
				if (typeof ignoreResult === "boolean" && !ignoreResult) {
					return;
				}
			}
			/** 元素的样式 */
			const nodeStyle = PopsCore.window.getComputedStyle($ele);
			/* 不对position为static和display为none的元素进行获取它们的z-index */
			if (isVisibleNode(nodeStyle)) {
				let nodeZIndex = parseInt(nodeStyle.zIndex);
				if (!isNaN(nodeZIndex)) {
					if (nodeZIndex > zIndex) {
						// 赋值到全局
						zIndex = nodeZIndex;
						maxZIndexNode = $ele;
					}
				}
				// 判断shadowRoot
				if ($ele.shadowRoot != null && $ele instanceof ShadowRoot) {
					$ele.shadowRoot.querySelectorAll("*").forEach(($shadowEle) => {
						queryMaxZIndex($shadowEle);
					});
				}
			}
		}
		target.querySelectorAll("*").forEach(($ele, index) => {
			queryMaxZIndex($ele);
		});
		zIndex += deviation;
		if (zIndex >= maxZIndexCompare) {
			// 最好不要超过最大值
			zIndex = maxZIndexCompare;
		}
		return {
			node: maxZIndexNode,
			zIndex: zIndex,
		};
	},
	/**
	 * 获取pops所有弹窗中的最大的z-index
	 * @param deviation
	 */
	getPopsMaxZIndex(deviation: number = 1) {
		deviation = Number.isNaN(deviation) ? 1 : deviation;
		// 最大值 2147483647
		// const browserMaxZIndex = Math.pow(2, 31) - 1;
		// 比较值 2000000000
		const maxZIndex = 2 * Math.pow(10, 9);
		// 当前页面最大的z-index
		let zIndex = 0;
		// 当前的最大z-index的元素，调试使用
		let maxZIndexNode = null as HTMLDivElement | null;

		/**
		 * 元素是否可见
		 * @param $css
		 */
		function isVisibleNode($css: CSSStyleDeclaration): boolean {
			return $css.position !== "static" && $css.display !== "none";
		}
		Object.keys(PopsLayerData).forEach((layerName) => {
			let layerList = PopsLayerData[layerName as PopsLayerMode];
			for (let index = 0; index < layerList.length; index++) {
				const layer = layerList[index];
				let nodeStyle = window.getComputedStyle(layer.animElement);
				/* 不对position为static和display为none的元素进行获取它们的z-index */
				if (isVisibleNode(nodeStyle)) {
					let nodeZIndex = parseInt(nodeStyle.zIndex);
					if (!isNaN(nodeZIndex)) {
						if (nodeZIndex > zIndex) {
							zIndex = nodeZIndex;
							maxZIndexNode = layer.animElement;
						}
					}
				}
			}
		});
		zIndex += deviation;
		let isOverMaxZIndex = zIndex >= maxZIndex;
		if (isOverMaxZIndex) {
			// 超出z-index最大值
			zIndex = maxZIndex;
		}
		return { zIndex: zIndex, animElement: maxZIndexNode, isOverMaxZIndex };
	},
	/**
	 * 获取页面中最大的z-index
	 * @param deviation 获取最大的z-index值的偏移，默认是+1
	 * @example
	 * getMaxZIndex();
	 * > 1001
	 **/
	getMaxZIndex(deviation = 1): number {
		return this.getMaxZIndexNodeInfo(deviation).zIndex;
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
		/**
		 * 移除元素实例
		 * @param layerCommonConfig
		 */
		function removeItem(layerCommonConfig: PopsLayerCommonConfig) {
			if (typeof layerCommonConfig.beforeRemoveCallBack === "function") {
				// 调用移除签的回调
				layerCommonConfig.beforeRemoveCallBack(layerCommonConfig);
			}
			layerCommonConfig?.animElement?.remove();
			layerCommonConfig?.popsElement?.remove();
			layerCommonConfig?.maskElement?.remove();
			layerCommonConfig?.$shadowContainer?.remove();
		}
		// [ layer[], layer[],...]
		moreLayerConfigList.forEach((layerConfigList) => {
			//  layer[]
			layerConfigList.forEach((layerConfigItem, index) => {
				// 移除全部或者guid相同
				if (isAll || layerConfigItem["guid"] === guid) {
					// 判断是否有动画
					let animName = layerConfigItem.animElement.getAttribute(
						"anim"
					) as string;
					if (PopsAnimation.hasAnim(animName)) {
						let reverseAnimName = animName + "-reverse";
						layerConfigItem.animElement.style.width = "100%";
						layerConfigItem.animElement.style.height = "100%";
						(layerConfigItem.animElement.style as any)["animation-name"] =
							reverseAnimName;
						if (
							PopsAnimation.hasAnim(
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
		return new Promise<void>((resolve) => {
			let popsElement =
				animElement.querySelector<HTMLDivElement>(".pops[type-value]")!;
			if (popsType === "drawer") {
				let drawerConfig = config as Required<PopsDrawerDetails>;
				popsUtils.setTimeout(() => {
					maskElement.style.setProperty("display", "none");
					if (["top", "bottom"].includes(drawerConfig.direction)) {
						popsElement.style.setProperty("height", "0");
					} else if (["left", "right"].includes(drawerConfig.direction)) {
						popsElement.style.setProperty("width", "0");
					} else {
						console.error("未知direction：", drawerConfig.direction);
					}
					resolve();
				}, drawerConfig.closeDelay);
			} else {
				let findLayerIns = layerConfigList.find(
					(layerConfigItem) => layerConfigItem.guid === guid
				);
				if (findLayerIns) {
					/* 存在动画 */
					let layerConfigItem = findLayerIns;
					layerConfigItem.animElement.style.width = "100%";
					layerConfigItem.animElement.style.height = "100%";
					(layerConfigItem.animElement.style as any)["animation-name"] =
						layerConfigItem.animElement.getAttribute("anim") + "-reverse";
					if (
						PopsAnimation.hasAnim(
							(layerConfigItem.animElement.style as any)["animation-name"]
						)
					) {
						/**
						 * 动画结束的回调
						 */
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
							resolve();
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

						resolve();
					}
				}
			}
		});
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
		maskElement?: HTMLElement
	) {
		return new Promise<void>((resolve) => {
			let popsElement =
				animElement.querySelector<HTMLDivElement>(".pops[type-value]")!;
			if (popsType === "drawer") {
				let drawerConfig = config as PopsDrawerDetails;
				popsUtils.setTimeout(() => {
					popsDOMUtils.css(maskElement!, "display", "");
					let direction = drawerConfig.direction!;
					let size = drawerConfig.size!.toString();
					if (["top", "bottom"].includes(direction)) {
						popsElement.style.setProperty("height", size);
					} else if (["left", "right"].includes(direction)) {
						popsElement.style.setProperty("width", size);
					} else {
						console.error("未知direction：", direction);
					}
					resolve();
				}, drawerConfig.openDelay ?? 0);
			} else {
				let findLayerIns = layerConfigList.find(
					(layerConfigItem) => layerConfigItem.guid === guid
				);
				if (findLayerIns) {
					let layerConfigItem = findLayerIns;
					layerConfigItem.animElement.style.width = "";
					layerConfigItem.animElement.style.height = "";
					(layerConfigItem.animElement.style as any)["animation-name"] =
						layerConfigItem
							.animElement!.getAttribute("anim")!
							.replace("-reverse", "");
					if (
						PopsAnimation.hasAnim(
							(layerConfigItem.animElement.style as any)["animation-name"]
						)
					) {
						/**
						 * 动画结束的回调
						 */
						function animationendCallBack() {
							popsDOMUtils.off(
								layerConfigItem.animElement,
								popsDOMUtils.getAnimationEndNameList(),
								animationendCallBack,
								{
									capture: true,
								}
							);
							resolve();
						}
						layerConfigItem.animElement.style.display = "";
						if (layerConfigItem.maskElement) {
							layerConfigItem.maskElement.style.display = "";
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
						resolve();
					}
				}
			}
		});
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
		return new Promise<void>((resolve) => {
			let popsElement =
				animElement.querySelector<HTMLDivElement>(".pops[type-value]")!;
			let drawerConfig = config as Required<PopsDrawerDetails>;
			/**
			 * 动画结束事件
			 */
			function transitionendEvent() {
				/**
				 * 弹窗已关闭的回调
				 */
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
					resolve();
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
				popsUtils.setTimeout(() => {
					transitionendEvent();
				}, drawerConfig.closeDelay);
			} else {
				PopsInstanceUtils.removeInstance([layerConfigList], guid);
				resolve();
			}
		});
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
			triggerClick?: boolean;
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
				triggerClick: true,
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
			preventDefault(event: Event) {
				if (typeof options.preventEvent === "function") {
					return options.preventEvent(event as any);
				} else {
					// 返回true阻止滑动
					return true;
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

		anyTouchElement.on("pan", function (event) {
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
			let currentMoveTopOffset = event.y - clickElementTopOffset + transformTop;
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
		});
		if (options.triggerClick) {
			/* 因为会覆盖上面的点击事件，主动触发一下 */
			anyTouchElement.on(["tap"], function (event) {
				event.changedPoints.forEach((item) => {
					popsDOMUtils.trigger(
						item.target! as HTMLElement,
						"click",
						void 0,
						true
					);
				});
			});
		}
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
			throw new TypeError("参数 sortByDesc 必须为boolean类型");
		}
		if (getBeforeValueFun == null || getAfterValueFun == null) {
			throw new Error("获取前面的值或后面的值的方法不能为空");
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
