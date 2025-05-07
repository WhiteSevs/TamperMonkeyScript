import { $$, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import { UIInput } from "@/setting/components/ui-input";
import { UISelectMultiple } from "@/setting/components/ui-select-multiple";
import { UISwitch } from "@/setting/components/ui-switch";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "@/setting/config";
import { RuleView } from "@/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import {
	DouYinVideoFilterBase,
	type DouYinVideoAwemeInfo,
	type DouYinVideoHandlerInfo,
} from "./DouYinVideoFilterBase";
import { PopsPanel } from "@/setting/setting";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { CommonUtil } from "@/utils/CommonUtil";
import { PanelUISize } from "@/setting/panel-ui-size";
import { UITextArea } from "@/setting/components/ui-textarea";
import Utils from "@whitesev/utils";
import { DouYinRouter } from "@/router/DouYinRouter";
import type { UtilsAjaxHookRequestOptions } from "@whitesev/utils/dist/types/src/types/ajaxHooker";

type DouYinVideoFilterOptionScope =
	| "all"
	| "xhr-tab"
	| "xhr-channel"
	| "xhr-follow"
	| "xhr-familiar"
	| "xhr-module"
	| "xhr-userHome"
	| "xhr-search"
	| "xhr-mix"
	| "xhr-related";

/** 过滤器规则-动态属性 */
export type DouYinVideoFilterDynamicOption = {
	/** 属性名 */
	ruleName: DouYinVideoFilterOption["data"]["ruleName"];
	/** 属性值 */
	ruleValue: DouYinVideoFilterOption["data"]["ruleValue"];
	/** 备注 */
	remarks: DouYinVideoFilterOption["data"]["remarks"];
};

/** 过滤器规则 */
export type DouYinVideoFilterOption = {
	/** 是否启用 */
	enable: boolean;
	/** 唯一uuid */
	uuid: string;
	/** 规则名 */
	name: string;
	/** 配置的数据 */
	data: {
		/** 作用域（让规则在哪个下面生效） */
		scope: DouYinVideoFilterOptionScope[];
		/** 是否自动发送不感兴趣的请求 */
		// autoSendDisLikeRequest: boolean;
		/** 属性名 */
		ruleName: keyof DouYinVideoHandlerInfo | (keyof DouYinVideoHandlerInfo)[];
		/** 属性值 */
		ruleValue: string;
		/** 备注 */
		remarks: string;
	};
	/** 动态添加的数据 */
	dynamicData?: DouYinVideoFilterDynamicOption[];
};

export const DouYinVideoFilter = {
	$key: {
		STORAGE_KEY: "dy-video-filter-rule",
		ENABLE_KEY: "shieldVideo-exec-network-enable",
	},
	$data: {
		/** 已经过滤的信息 */
		isFilterAwemeInfoList: new Utils.Dictionary<
			string,
			DouYinVideoFilterOption[]
		>(),
		/**
		 * 网络接口的视频信息字典
		 */
		awemeInfoMap: new Utils.Dictionary<
			string,
			{
				/** 网络接口的原始视频信息 */
				awemeInfo: DouYinVideoAwemeInfo;
				/** 解析出的所需的信息 */
				transformAwemeInfo: DouYinVideoHandlerInfo;
			}
		>(),
		/**
		 * 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
		 */
		get isReverse() {
			return PopsPanel.getValue<boolean>(
				"shieldVideo-only-show-filtered-video"
			);
		},
	},
	init() {
		if (DouYinRouter.isLive()) {
			PopsPanel.deleteExecMenuOnce(this.$key.ENABLE_KEY);
			return;
		}
		this.execFilter();
		PopsPanel.execMenuOnce("shieldVideo-add-parseVideoInfoButton", () => {
			this.addParseButton();
		});
	},
	/**
	 * 执行过滤
	 */
	execFilter() {
		const that = this;
		PopsPanel.execMenuOnce(this.$key.ENABLE_KEY, async () => {
			log.info(`执行视频过滤器`);
			// let webid = PopsPanel.getValue("dy-webid");
			// if (utils.isNull(webid)) {
			// 	let temp_webid = await DouYinQueryApi.webid();
			// 	if (typeof temp_webid === "string") {
			// 		webid = temp_webid;
			// 		PopsPanel.setValue("dy-webid", webid);
			// 	}
			// }
			let filterBase = new DouYinVideoFilterBase();
			/**
			 * 获取作用域的规则
			 */
			let queryScopeFilterOptionList = (
				scopeName: DouYinVideoFilterOptionScope
			) => {
				if (!PopsPanel.getValue(that.$key.ENABLE_KEY)) {
					return [];
				}
				let filterOptionList = that.getData();
				if (!filterOptionList.length) {
					// 无规则，不过滤
					return [];
				}
				// 作用域列表
				let scopeNameList = Array.isArray(scopeName) ? scopeName : [scopeName];
				let matchedFilterOptionList = filterOptionList.filter(
					(it) =>
						it.enable &&
						(it.data.scope.includes("all") ||
							Array.from(scopeNameList).findIndex((item) =>
								it.data.scope.includes(
									item as any as DouYinVideoFilterOptionScope
								)
							) !== -1)
				);
				return matchedFilterOptionList;
			};
			/** 获取接口信息后的回调 */
			let checkFilterCallBack = (
				awemeFilterInfoResult: ReturnType<
					(typeof DouYinVideoFilterBase)["prototype"]["checkAwemeInfoIsFilter"]
				>
			) => {
				// 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
				// 并添加记录
				if (that.$data.isReverse) {
					awemeFilterInfoResult.isFilter = !awemeFilterInfoResult.isFilter;
					if (
						typeof awemeFilterInfoResult.transformAwemeInfo.awemeId ===
							"string" &&
						awemeFilterInfoResult.matchedFilterOption
					) {
						let filterOptionList: DouYinVideoFilterOption[] =
							that.$data.isFilterAwemeInfoList.get(
								awemeFilterInfoResult.transformAwemeInfo.awemeId
							) || [];
						filterOptionList.push(awemeFilterInfoResult.matchedFilterOption);
						that.$data.isFilterAwemeInfoList.set(
							awemeFilterInfoResult.transformAwemeInfo.awemeId,
							filterOptionList
						);
					}
				}

				// 添加映射
				if (
					typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string"
				) {
					DouYinVideoFilter.$data.awemeInfoMap.set(
						awemeFilterInfoResult.transformAwemeInfo.awemeId,
						{
							awemeInfo: awemeFilterInfoResult.awemeInfo,
							transformAwemeInfo: awemeFilterInfoResult.transformAwemeInfo,
						}
					);
				}
			};
			/**
			 * 类型1接口结果的hook
			 */
			let xhr_hook_callback_1 = (
				scopeName: DouYinVideoFilterOptionScope,
				request: UtilsAjaxHookRequestOptions
			) => {
				request.response = (response) => {
					let filterOptionList = queryScopeFilterOptionList(scopeName);
					if (!filterOptionList.length) {
						return;
					}
					let data = utils.toJSON(response.responseText);
					let aweme_list = data["aweme_list"];
					if (Array.isArray(aweme_list)) {
						for (let index = 0; index < aweme_list.length; index++) {
							let awemeInfo = aweme_list[index] || {};
							let filterResult = filterBase.checkAwemeInfoIsFilter(
								filterOptionList,
								awemeInfo
							);
							checkFilterCallBack(filterResult);
							if (filterResult.isFilter) {
								filterBase.sendDislikeVideo(
									filterResult.matchedFilterOption!,
									awemeInfo
								);
								filterBase.removeAweme(aweme_list, index--);
							}
						}
						if (import.meta.hot) {
							console.log(aweme_list);
						}
						response.responseText = JSON.stringify(data);
					}
				};
			};

			/**
			 * 类型2接口结果的hook
			 */
			let xhr_hook_callback_2 = (
				scopeName: DouYinVideoFilterOptionScope,
				request: UtilsAjaxHookRequestOptions
			) => {
				request.response = (response) => {
					let filterOptionList = queryScopeFilterOptionList(scopeName);
					if (!filterOptionList.length) {
						return;
					}
					let data = utils.toJSON(response.responseText);
					let aweme_list = data["data"];
					if (Array.isArray(aweme_list)) {
						for (let index = 0; index < aweme_list.length; index++) {
							let awemeItem = aweme_list[index];
							let awemeInfo = awemeItem["aweme"] || {};
							// 如果cell_room不为空，这时候aweme是空的
							if (
								typeof awemeItem?.["cell_room"] === "object" &&
								awemeItem?.["cell_room"] != null
							) {
								awemeInfo["cell_room"] = awemeItem?.["cell_room"];
							}
							let filterResult = filterBase.checkAwemeInfoIsFilter(
								filterOptionList,
								awemeInfo
							);
							checkFilterCallBack(filterResult);
							if (filterResult.isFilter) {
								filterBase.sendDislikeVideo(
									filterResult.matchedFilterOption!,
									awemeInfo
								);
								filterBase.removeAweme(aweme_list, index--);
							}
						}
						if (import.meta.hot) {
							console.log(aweme_list);
						}
						response.responseText = JSON.stringify(data);
					}
				};
			};

			/**
			 * 类型3接口结果的hook
			 */
			let xhr_hook_callback_3 = (
				scopeName: DouYinVideoFilterOptionScope,
				request: UtilsAjaxHookRequestOptions
			) => {
				request.response = (response) => {
					let filterOptionList = queryScopeFilterOptionList(scopeName);
					if (!filterOptionList.length) {
						return;
					}
					let data = utils.toJSON(response.responseText);
					let cards = data["cards"];
					if (Array.isArray(cards)) {
						for (let index = 0; index < cards.length; index++) {
							let awemeItem = cards[index];
							let awemeInfo = utils.toJSON(awemeItem?.["aweme"] || "{}");
							let filterResult = filterBase.checkAwemeInfoIsFilter(
								filterOptionList,
								awemeInfo
							);
							checkFilterCallBack(filterResult);
							if (filterResult.isFilter) {
								filterBase.sendDislikeVideo(
									filterResult.matchedFilterOption!,
									awemeInfo
								);
								filterBase.removeAweme(cards, index--);
							}
						}
						if (import.meta.hot) {
							console.log(cards);
						}
						response.responseText = JSON.stringify(data);
					}
				};
			};

			/**
			 * 类型4接口结果的hook
			 */
			let xhr_hook_callback_4 = (
				scopeName: DouYinVideoFilterOptionScope,
				request: UtilsAjaxHookRequestOptions
			) => {
				request.response = (response) => {
					let filterOptionList = queryScopeFilterOptionList(scopeName);
					if (!filterOptionList.length) {
						return;
					}
					let data = utils.toJSON(response.responseText);
					let aweme_list = data["data"];
					if (Array.isArray(aweme_list)) {
						for (let index = 0; index < aweme_list.length; index++) {
							let awemeItem = aweme_list[index];
							let awemeInfo = awemeItem["aweme_info"] || {};
							let awemeMixInfo = awemeItem?.["aweme_mix_info"];
							if (
								awemeInfo == null &&
								typeof awemeMixInfo &&
								awemeMixInfo != null
							) {
								// 对混合的信息进行过滤
								let awemeMixInfoItems = awemeMixInfo?.["mix_items"];
								if (Array.isArray(awemeMixInfoItems)) {
									for (
										let mixIndex = 0;
										mixIndex < awemeMixInfoItems.length;
										mixIndex++
									) {
										let mixItem = awemeMixInfoItems[mixIndex];
										let filterResult = filterBase.checkAwemeInfoIsFilter(
											filterOptionList,
											mixItem
										);
										checkFilterCallBack(filterResult);
										if (filterResult.isFilter) {
											filterBase.sendDislikeVideo(
												filterResult.matchedFilterOption!,
												mixItem
											);
											filterBase.removeAweme(awemeMixInfoItems, mixIndex--);
										}
									}
									// 混合的信息都被过滤掉了
									if (awemeMixInfoItems.length === 0) {
										// 移除整个
										filterBase.removeAweme(aweme_list, index--);
									}
								}
							} else {
								let filterResult = filterBase.checkAwemeInfoIsFilter(
									filterOptionList,
									awemeInfo
								);
								checkFilterCallBack(filterResult);
								if (filterResult.isFilter) {
									filterBase.sendDislikeVideo(
										filterResult.matchedFilterOption!,
										awemeInfo
									);
									filterBase.removeAweme(aweme_list, index--);
								}
							}
						}
						if (import.meta.hot) {
							console.log(aweme_list);
						}
						response.responseText = JSON.stringify(data);
					}
				};
			};
			// xhr hook
			DouYinNetWorkHook.ajaxHooker.hook((request) => {
				let url = CommonUtil.fixUrl(request.url);
				let urlInstance = new URL(url);
				if (urlInstance.pathname.startsWith("/aweme/v1/web/tab/feed")) {
					// 推荐
					xhr_hook_callback_1("xhr-tab", request);
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/aweme/post/")
				) {
					// 用户主页视频
					xhr_hook_callback_1("xhr-userHome", request);
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/mix/aweme/")
				) {
					// 混合信息
					xhr_hook_callback_1("xhr-mix", request);
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/aweme/related/")
				) {
					// 相关推荐
					xhr_hook_callback_1("xhr-related", request);
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/follow/feed")
				) {
					// 关注
					xhr_hook_callback_2("xhr-follow", request);
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/familiar/feed")
				) {
					// 朋友
					xhr_hook_callback_2("xhr-familiar", request);
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/module/feed")
				) {
					// 精选
					// 游戏、二次元、音乐、美食、知识、体育从左侧边栏迁移到了这里面
					xhr_hook_callback_3("xhr-module", request);
				} else if (
					urlInstance.pathname.startsWith(
						"/aweme/v1/web/general/search/single/"
					)
				) {
					// 搜索-综合
					xhr_hook_callback_4("xhr-search", request);
				} else if (
					urlInstance.pathname.startsWith("/aweme/v1/web/search/item/")
				) {
					// 搜索-视频
					xhr_hook_callback_4("xhr-search", request);
				}
			});

			// 搜索页面的api过于乱，采用元素过滤
			// if (DouYinRouter.isSearch()) {
			// 	DOMUtils.ready(() => {
			// 		DouYinElement.watchFeedVideoListChange(($os, observer) => {
			// 			if (!DouYinRouter.isSearch()) {
			// 				// 必须是在搜索页面
			// 				return;
			// 			}
			// 			let filterOptionList = getScopeFilterOptionList("dom-search");
			// 			if (!filterOptionList.length) {
			// 				return;
			// 			}
			// 			let $awemeInfoList = Array.from(
			// 				$$<HTMLLIElement>(
			// 					'#search-content-area ul[data-e2e="scroll-list"] li'
			// 				)
			// 			);
			// 			for (let index = 0; index < $awemeInfoList.length; index++) {
			// 				const $li = $awemeInfoList[index];
			// 				if ($awemeInfoList.length === 2) {
			// 					break;
			// 				}
			// 				if (!document.contains($li)) {
			// 					continue;
			// 				}
			// 				let reactProps = utils.getReactObj($li)?.reactProps;
			// 				if (reactProps == null) {
			// 					log.error("search-result ==> 元素上不存在reactProps属性", $li);
			// 					continue;
			// 				}
			// 				let awemeInfo = reactProps?.children?.props?.data
			// 					?.awemeInfo as DouYinVideoAwemeInfo;
			// 				if (awemeInfo == null) {
			// 					log.error("search-result ==> 元素上不存在awemeInfo属性", $li);
			// 					continue;
			// 				}
			// 				let flag = filterBase.checkAwemeInfoIsFilter(
			// 					filterOptionList,
			// 					awemeInfo
			// 				);
			// 				if (flag) {
			// 					filterBase.removeAweme($awemeInfoList, index--);
			// 				}
			// 			}
			// 		});
			// 	});
			// }
		});
	},
	/**
	 * 添加解析按钮
	 */
	addParseButton() {
		addStyle(/*css*/ `
			.basePlayerContainer .gm-video-filter-parse-btn{
				margin-left: 4px;
			}
			.basePlayerContainer .gm-video-filter-parse-btn .semi-icon{
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.basePlayerContainer .gm-video-filter-parse-btn .semi-icon svg{
				
			}
			  /* 修复搜索结果单列页面 解析按钮的高度错位 */
  			.searchControl33px .xg-right-grid xg-icon.gm-video-filter-parse-btn span svg{
				transform: translateY(-6px) !important;
			}

		`);
		let filterBase = new DouYinVideoFilterBase();

		// 按钮的点击回调
		let awemeInfoClickCallBack = ($basePlayerContainer: HTMLElement) => {
			let that = this;
			let reactFiber = utils.getReactObj($basePlayerContainer)?.reactFiber;
			let awemeInfo =
				reactFiber?.return?.memoizedProps?.awemeInfo ||
				reactFiber?.return?.return?.memoizedProps?.awemeInfo;
			if (awemeInfo == null) {
				Qmsg.error("未获取到awemeInfo信息", { consoleLogContent: true });
				return;
			}
			if (typeof awemeInfo !== "object") {
				Qmsg.error("获取到的awemeInfo信息不是对象", {
					consoleLogContent: true,
				});
				return;
			}
			let transformAwemeInfo: DouYinVideoHandlerInfo;
			let transformAwemeInfoWithPage = filterBase.parseAwemeInfoDictData(
				awemeInfo,
				false
			);
			log.info(["视频页面原始awemeInfo：", awemeInfo]);
			log.info([
				"视频页面解析出的transformAwemeInfo：",
				transformAwemeInfoWithPage,
			]);
			if (
				typeof transformAwemeInfoWithPage.awemeId === "string" &&
				DouYinVideoFilter.$data.awemeInfoMap.has(
					transformAwemeInfoWithPage.awemeId
				)
			) {
				let awemeInfoMapData = DouYinVideoFilter.$data.awemeInfoMap.get(
					transformAwemeInfoWithPage.awemeId
				);
				transformAwemeInfo = awemeInfoMapData.transformAwemeInfo;
				log.info([`视频网络接口解析出的Info：`, awemeInfoMapData]);
			} else {
				transformAwemeInfo = transformAwemeInfoWithPage;
			}
			/** 命中的规则 */
			let targetFilterOption =
				that.$data.isFilterAwemeInfoList.get(transformAwemeInfo.awemeId!) || [];
			pops.confirm({
				title: {
					text: "视频awemeInfo",
					position: "center",
				},
				content: {
					text: JSON.stringify(transformAwemeInfo, null, 4).trim(),
					html: false,
				},
				drag: true,
				btn: {
					merge: targetFilterOption.length ? true : false,
					position: targetFilterOption.length ? "space-between" : "flex-end",
					ok: {
						enable: true,
						text: "添加过滤规则",
						callback(eventDetails, event) {
							let ruleView = that.getRuleViewInstance();
							ruleView.showEditView(false, that.getTemplateData());
						},
					},
					cancel: {
						enable: true,
						text: "规则管理器",
						callback(eventDetails, event) {
							that.showView();
						},
					},
					other: {
						enable: targetFilterOption.length ? true : false,
						text: `命中的规则（${targetFilterOption.length}）`,
						type: "xiaomi-primary",
						callback(eventDetails, event) {
							that.getRuleViewInstance().showView((data) => {
								let find = targetFilterOption.find((it) => {
									return data.uuid === it.uuid;
								});
								return Boolean(find);
							});
						},
					},
				},
				mask: {
					enable: true,
					clickEvent: {
						toClose: true,
					},
				},
				width: PanelUISize.setting.width,
				height: PanelUISize.setting.height,
				style: /*css*/ `
				.pops-confirm-content p{
					white-space: break-spaces;
				}
			`,
			});
		};
		let lockFn = new utils.LockFunction(() => {
			$$<HTMLElement>(
				".basePlayerContainer xg-right-grid:not(:has(.gm-video-filter-parse-btn))"
			).forEach(($xgRightGrid) => {
				// @ts-ignore
				let $gmFilterParseBtn = DOMUtils.createElement("xg-icon", {
					className: "gm-video-filter-parse-btn",
					innerHTML: /*html*/ `
						<div class="xgplayer-icon">
							<span role="img" class="semi-icon semi-icon-default">
								<svg
									viewBox="0 0 32 32"
									width="1em"
									height="1em"
									style="font-size: 32px"
									xmlns="http://www.w3.org/2000/svg"
									focusable="false"
									fill="none">
									<g>
										<path
											stroke="null"
											fill="currentColor"
											d="m9.78829,8.17117l1.77477,0l0,1.73974l-1.77477,0l0,4.34935a1.77477,1.73974 0 0 1 -1.77477,1.73974a1.77477,1.73974 0 0 1 1.77477,1.73974l0,4.34935l1.77477,0l0,1.73974l-1.77477,0c-0.9495,-0.23486 -1.77477,-0.78288 -1.77477,-1.73974l0,-3.47948a1.77477,1.73974 0 0 0 -1.77477,-1.73974l-0.88739,0l0,-1.73974l0.88739,0a1.77477,1.73974 0 0 0 1.77477,-1.73974l0,-3.47948a1.77477,1.73974 0 0 1 1.77477,-1.73974m12.42342,0a1.77477,1.73974 0 0 1 1.77477,1.73974l0,3.47948a1.77477,1.73974 0 0 0 1.77477,1.73974l0.88739,0l0,1.73974l-0.88739,0a1.77477,1.73974 0 0 0 -1.77477,1.73974l0,3.47948a1.77477,1.73974 0 0 1 -1.77477,1.73974l-1.77477,0l0,-1.73974l1.77477,0l0,-4.34935a1.77477,1.73974 0 0 1 1.77477,-1.73974a1.77477,1.73974 0 0 1 -1.77477,-1.73974l0,-4.34935l-1.77477,0l0,-1.73974l1.77477,0m-6.21171,10.43844a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987m-3.54955,0a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987m7.0991,0a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987z"
											clip-rule="evenodd"
											fill-rule="evenodd" />
									</g>
								</svg>
							</span>
						</div>
						<div class="xg-tips">解析信息</div>
					`,
				});
				DOMUtils.on($gmFilterParseBtn, "click", (event) => {
					utils.preventEvent(event);
					let $basePlayerContainer = $xgRightGrid.closest<HTMLElement>(
						".basePlayerContainer"
					)!;
					awemeInfoClickCallBack($basePlayerContainer);
				});
				DOMUtils.prepend($xgRightGrid, $gmFilterParseBtn);
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				lockFn.run();
			},
		});
	},
	/**
	 * 获取规则视图实例
	 */
	getRuleViewInstance() {
		const that = this;
		let popsPanelContentUtils = pops.config.panelHandleContentUtils();
		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		function generateStorageApi(data: any) {
			return {
				get(key: string, defaultValue: any) {
					return (data as any)[key] ?? defaultValue;
				},
				set(key: string, value: any) {
					(data as any)[key] = value;
				},
			};
		}
		let ruleView = new RuleView({
			title: "视频过滤器",
			data: () => {
				return this.getData();
			},
			getAddData: () => {
				return this.getTemplateData();
			},
			getDataItemName: (data) => {
				return data["name"];
			},
			updateData: (data) => {
				return this.updateData(data);
			},
			deleteData: (data) => {
				return this.deleteData(data);
			},
			getData: (data) => {
				let allData = this.getData();
				let findValue = allData.find((item) => item.uuid === data.uuid);
				return findValue ?? data;
			},
			itemControls: {
				enable: {
					enable: true,
					getEnable(data) {
						return data.enable;
					},
					callback: (data, enable) => {
						data.enable = enable;
						this.updateData(data);
					},
				},
				edit: {
					enable: true,
					getView: (data, isEdit) => {
						let $fragment = document.createDocumentFragment();
						if (!isEdit) {
							data = this.getTemplateData();
						}

						// 启用
						let enable_template = UISwitch("启用", "enable", true);
						Reflect.set(
							enable_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);
						let $enable =
							popsPanelContentUtils.createSectionContainerItem_switch(
								enable_template
							);

						// 规则名称
						let name_template = UIInput(
							"规则名称",
							"name",
							"",
							"",
							void 0,
							"必填"
						);
						Reflect.set(
							name_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data)
						);
						let $name =
							popsPanelContentUtils.createSectionContainerItem_input(
								name_template
							);

						// 作用域
						let scope_template = UISelectMultiple<DouYinVideoFilterOptionScope>(
							"作用域",
							"scope",
							[],
							[
								{
									text: "所有",
									value: "all",
								},
								{
									text: "精选",
									value: "xhr-module",
								},
								{
									text: "推荐",
									value: "xhr-tab",
								},
								{
									text: "关注",
									value: "xhr-follow",
								},
								{
									text: "朋友",
									value: "xhr-familiar",
								},
								{
									text: "搜索",
									value: "xhr-search",
								},
								{
									text: "用户主页",
									value: "xhr-userHome",
								},
								{
									text: "混合信息",
									value: "xhr-mix",
								},
								{
									text: "相关推荐",
									value: "xhr-related",
								},
							],
							void 0,
							"选择需要在xxx上生效的作用域"
						);
						Reflect.set(
							scope_template.props!,
							PROPS_STORAGE_API,
							generateStorageApi(data.data)
						);
						let $scope =
							popsPanelContentUtils.createSectionContainerItem_select_multiple_new(
								scope_template
							);

						// let autoSendDisLikeRequest_template = UISwitch(
						// 	"是否自动发送不感兴趣请求",
						// 	"autoSendDisLikeRequest",
						// 	false,
						// 	void 0,
						// 	"beta测试阶段"
						// );
						// Reflect.set(
						// 	autoSendDisLikeRequest_template.props!,
						// 	PROPS_STORAGE_API,
						// 	generateStorageApi(data.data)
						// );
						// let $autoSendDisLikeRequest =
						// 	popsPanelContentUtils.createSectionContainerItem_switch(
						// 		autoSendDisLikeRequest_template
						// 	);

						// 属性名列表
						let douYinVideoHandlerInfoKey = <(keyof DouYinVideoHandlerInfo)[]>[
							"isLive",
							"isAds",
							"isSeriesInfo",
							"isMixInfo",
							"isPicture",
							"awemeId",
							"nickname",
							"uid",
							"desc",
							"textExtra",
							"videoTag",
							"videoTagId",
							"suggestWord",
							"musicAlbum",
							"musicAuthor",
							"musicTitle",
							"authorAccountCertInfo",
							"authorCustomVerify",
							"authorEnterpriseVerifyReason",
							"riskInfoContent",
							"seriesInfoName",
							"seriesInfoContentTypes",
							"mixInfoName",
							"mixInfoDesc",
							"collectCount",
							"commentCount",
							"diggCount",
							"shareCount",
							"duration",
						];

						/**
						 * 获取动态的元素
						 * @param storageData 存储的数据
						 */
						let getDynamicProp = (storageData: any) => {
							// 属性名
							let ruleNameDefaultValue = Array.isArray(storageData["ruleName"])
								? storageData["ruleName"]
								: [storageData["ruleName"]];
							let ruleName_template = UISelectMultiple<
								keyof DouYinVideoHandlerInfo
							>(
								"属性名",
								"ruleName",
								ruleNameDefaultValue,
								douYinVideoHandlerInfoKey.map((item) => {
									return {
										text: item,
										value: item,
									};
								}),
								void 0,
								"选择需要的属性名 "
							);
							Reflect.set(
								ruleName_template.props!,
								PROPS_STORAGE_API,
								generateStorageApi(storageData)
							);

							// 属性值
							let $ruleName =
								popsPanelContentUtils.createSectionContainerItem_select_multiple_new(
									ruleName_template
								);

							let ruleValue_template = UITextArea(
								"属性值",
								"ruleValue",
								"",
								"如果是字符串，可正则，注意转义",
								void 0
							);
							Reflect.set(
								ruleValue_template.props!,
								PROPS_STORAGE_API,
								generateStorageApi(storageData)
							);
							let $ruleValue =
								popsPanelContentUtils.createSectionContainerItem_textarea(
									ruleValue_template
								);

							// 备注
							let remarks_template = UITextArea(
								"备注",
								"remarks",
								"",
								"",
								void 0
							);
							Reflect.set(
								remarks_template.props!,
								PROPS_STORAGE_API,
								generateStorageApi(storageData)
							);
							let $remarks =
								popsPanelContentUtils.createSectionContainerItem_textarea(
									remarks_template
								);

							return {
								$ruleName,
								$ruleValue,
								$remarks,
							};
						};

						// 动态属性
						let $dynamicContainer = DOMUtils.createElement("div", {
							className: "rule-form-ulist-dynamic",
							innerHTML: /*html*/ `
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`,
						});
						let $dynamicInner = $dynamicContainer.querySelector<HTMLElement>(
							".rule-form-ulist-dynamic__inner"
						)!;
						let $addDynamicButton =
							$dynamicContainer.querySelector<HTMLButtonElement>(
								".pops-panel-button"
							)!;

						/**
						 * 添加动态项
						 */
						let addDynamicElementItem = (
							dynamicData: DouYinVideoFilterDynamicOption = {
								ruleName: [],
								ruleValue: "",
								remarks: "",
							}
						) => {
							let $dynamicUListContainer = DOMUtils.createElement("div", {
								className: "rule-form-ulist-dynamic__inner-container",
								innerHTML: /*html*/ `
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`,
							});
							/** 删除按钮 */
							let $dynamicDelete =
								$dynamicUListContainer.querySelector<HTMLDivElement>(
									".dynamic-control-delete"
								)!;
							// 设置删除事件
							DOMUtils.on($dynamicDelete, "click", (event) => {
								utils.preventEvent(event);
								$dynamicUListContainer.remove();
								if (Array.isArray(data.dynamicData)) {
									let findIndex = data.dynamicData.findIndex(
										(it) => it == dynamicData
									);
									if (findIndex !== -1) {
										data.dynamicData.splice(findIndex, 1);
									}
								}
							});
							/** 动态添加的项 */
							let $dynamicUList =
								$dynamicUListContainer.querySelector<HTMLUListElement>(
									".dynamic-forms"
								)!;
							let {
								$ruleName: $dynamic_ruleName,
								$ruleValue: $dynamic_ruleValue,
								$remarks: $dynamic_remarks,
							} = getDynamicProp(dynamicData);
							$dynamicUList.appendChild($dynamic_ruleName);
							$dynamicUList.appendChild($dynamic_ruleValue);
							$dynamicUList.appendChild($dynamic_remarks);
							$dynamicInner.appendChild($dynamicUListContainer);
						};
						// 设置添加动态项的点击事件
						DOMUtils.on($addDynamicButton, "click", (event) => {
							utils.preventEvent(event);
							addDynamicElementItem();
						});

						// 初始化的动态项
						if (Array.isArray(data.dynamicData)) {
							for (let index = 0; index < data.dynamicData.length; index++) {
								const moreDataItem = data.dynamicData[index];
								addDynamicElementItem(moreDataItem);
							}
						}

						let { $ruleName, $ruleValue, $remarks } = getDynamicProp(data.data);
						$fragment.append(
							$enable,
							$name,
							$scope,
							// $autoSendDisLikeRequest,
							$ruleName,
							$ruleValue,
							$remarks,
							$dynamicContainer
						);
						return $fragment;
					},
					onsubmit: ($form, isEdit, editData) => {
						// 提交表单
						let $ulist_li = $form.querySelectorAll<HTMLLIElement>(
							".rule-form-ulist > li"
						);
						let data: DouYinVideoFilterOption = this.getTemplateData();
						if (isEdit) {
							data.uuid = editData!.uuid;
						}
						$ulist_li.forEach(($li) => {
							let formConfig = Reflect.get($li, "__formConfig__");
							if (!formConfig) {
								return;
							}
							let attrs = Reflect.get(formConfig, "attributes");
							if (!attrs) {
								return;
							}
							let storageApi = Reflect.get($li, PROPS_STORAGE_API);
							let key = Reflect.get(attrs, ATTRIBUTE_KEY);
							let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
							let value = storageApi.get(key, defaultValue);
							if (Reflect.has(data, key)) {
								Reflect.set(data, key, value);
							} else if (Reflect.has(data["data"], key)) {
								Reflect.set(data["data"], key, value);
							} else {
								log.error(`${key}不在数据中`);
							}
						});
						$form
							.querySelectorAll<HTMLLIElement>(
								".rule-form-ulist-dynamic__inner-container"
							)
							.forEach(($inner) => {
								let dynamicData = {} as DouYinVideoFilterDynamicOption;
								$inner
									.querySelectorAll(".dynamic-forms > li")
									.forEach(($li) => {
										let formConfig = Reflect.get($li, "__formConfig__");
										if (!formConfig) {
											return;
										}
										let attrs = Reflect.get(formConfig, "attributes");
										if (!attrs) {
											return;
										}
										let storageApi = Reflect.get($li, PROPS_STORAGE_API);
										let key = Reflect.get(attrs, ATTRIBUTE_KEY);
										let defaultValue = Reflect.get(
											attrs,
											ATTRIBUTE_DEFAULT_VALUE
										);
										let value = storageApi.get(key, defaultValue);
										Reflect.set(dynamicData, key, value);
									});
								data.dynamicData!.push(dynamicData);
							});
						if (data.name.trim() === "") {
							Qmsg.error("规则名称不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (data.data.scope.length === 0) {
							Qmsg.error("请选择作用域");
							return {
								success: false,
								data: data,
							};
						}
						if (data.data.ruleName.length === 0) {
							Qmsg.error("请选择属性名");
							return {
								success: false,
								data: data,
							};
						}
						if (data.data.ruleValue.trim() === "") {
							Qmsg.error("属性值不能为空");
							return {
								success: false,
								data: data,
							};
						}
						if (isEdit) {
							return {
								success: this.updateData(data),
								data: data,
							};
						} else {
							return {
								success: this.addData(data),
								data: data,
							};
						}
					},
					style: /*css*/ `
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
					}
					.rule-form-ulist-dynamic{
						--button-margin-top: 0px;
						--button-margin-right: 0px;
						--button-margin-bottom: 0px;
						--button-margin-left: 0px;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 5px 20px;
					}
					.rule-form-ulist-dynamic__inner{
						width: 100%;
					}
					.rule-form-ulist-dynamic__inner-container{
						display: flex;
						align-items: center;
					}
					.dynamic-forms{
						width: 100%;
					}
					.pops-panel-textarea textarea{
						height: 60px;
						min-height: 60px;
						width: 250px;
						max-width: 400px;
						min-width: 250px;
						resize: auto;
						transition: unset;
					}
                    `,
					width: () => {
						return window.innerWidth > 700 ? "700px" : "88vw";
					},
				},
				delete: {
					enable: true,
					deleteCallBack: (data) => {
						return this.deleteData(data);
					},
				},
			},
			bottomControls: {
				filter: {
					enable: true,
					option: [
						{
							name: "过滤-已启用",
							filterCallBack(data) {
								return data.enable;
							},
						},
						{
							name: "过滤-未启用",
							filterCallBack(data) {
								return !data.enable;
							},
						},
					],
				},
			},
		});
		return ruleView;
	},
	/**
	 * 显示视图
	 */
	showView() {
		let ruleView = this.getRuleViewInstance();
		ruleView.showView();
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): DouYinVideoFilterOption {
		return {
			uuid: utils.generateUUID(),
			enable: true,
			name: "",
			data: {
				scope: [],
				// autoSendDisLikeRequest: false,
				ruleName: "nickname",
				ruleValue: "",
				remarks: "",
			},
			dynamicData: [],
		};
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<DouYinVideoFilterOption[]>(this.$key.STORAGE_KEY, []);
	},
	/**
	 * 设置数据
	 * @param data
	 */
	setData(data: DouYinVideoFilterOption[]) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
	/**
	 * 添加数据
	 * @param data
	 */
	addData(data: DouYinVideoFilterOption) {
		let localData = this.getData();
		let findIndex = localData.findIndex((item) => item.uuid == data.uuid);
		if (findIndex === -1) {
			localData.push(data);
			GM_setValue(this.$key.STORAGE_KEY, localData);
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 更新数据
	 * @param data
	 */
	updateData(data: DouYinVideoFilterOption) {
		let localData = this.getData();
		let index = localData.findIndex((item) => item.uuid == data.uuid);
		let updateFlag = false;
		if (index !== -1) {
			updateFlag = true;
			localData[index] = data;
		}
		this.setData(localData);
		return updateFlag;
	},
	/**
	 * 删除数据
	 * @param data
	 */
	deleteData(data: DouYinVideoFilterOption) {
		let localData = this.getData();
		let index = localData.findIndex((item) => item.uuid == data.uuid);
		let deleteFlag = false;
		if (index !== -1) {
			deleteFlag = true;
			localData.splice(index, 1);
		}
		this.setData(localData);
		return deleteFlag;
	},
	/**
	 * 清空数据
	 */
	clearData() {
		GM_deleteValue(this.$key.STORAGE_KEY);
	},
	/**
	 * 导出规则
	 */
	exportRule(fileName = "rule.json") {
		let allRule = this.getData();
		let blob = new Blob([JSON.stringify(allRule, null, 4)]);
		let blobUrl = window.URL.createObjectURL(blob);
		let $a = document.createElement("a");
		$a.href = blobUrl;
		$a.download = fileName;
		$a.click();
		setTimeout(() => {
			window.URL.revokeObjectURL(blobUrl);
		}, 1500);
	},
	/**
	 * 导入规则
	 */
	importRule() {
		let $alert = pops.alert({
			title: {
				text: "请选择导入方式",
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,
				html: true,
			},
			width: PanelUISize.info.width,
			height: PanelUISize.info.height,
			style: /*css*/ `
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `,
		});
		let $local = $alert.$shadowRoot.querySelector<HTMLElement>(
			".import-mode[data-mode='local']"
		)!;
		let $network = $alert.$shadowRoot.querySelector<HTMLElement>(
			".import-mode[data-mode='network']"
		)!;
		DOMUtils.on($local, "click", (event) => {
			utils.preventEvent(event);
			$alert.close();
			let $input = DOMUtils.createElement("input", {
				type: "file",
				accept: ".json",
			});
			DOMUtils.on($input, ["propertychange", "input"], (event) => {
				if (!$input.files?.length) {
					return;
				}
				let uploadFile = $input.files![0];
				let fileReader = new FileReader();
				fileReader.onload = () => {
					let data = utils.toJSON(fileReader.result as string);
					if (!Array.isArray(data)) {
						log.error("不是正确的规则文件", data);
						Qmsg.error("不是正确的规则文件");
						return;
					}
					this.setData(data);
					Qmsg.success(`成功导入 ${data.length}条规则`);
				};
				fileReader.readAsText(uploadFile, "UTF-8");
			});
			$input.click();
		});
		DOMUtils.on($network, "click", (event) => {
			utils.preventEvent(event);
			$alert.close();
			pops.prompt({
				title: {
					text: "网络导入",
					position: "center",
				},
				content: {
					text: "",
					placeholder: "url",
					focus: true,
				},
				btn: {
					ok: {
						callback: async (eventDetails, event) => {
							let url = eventDetails.text;
							if (utils.isNull(url)) {
								Qmsg.error("请填入完整的url");
								return;
							}
							let response = await httpx.get(url);
							if (!response.status) {
								return;
							}
							let data = utils.toJSON(response.data.responseText);
							if (!Array.isArray(data)) {
								log.error("不是正确的规则文件", response, data);
								Qmsg.error("不是正确的规则文件");
								return;
							}
							this.setData(data);
							eventDetails.close();
							Qmsg.success(`成功导入 ${data.length}条规则`);
						},
					},
				},
				width: PanelUISize.info.width,
				height: "auto",
			});
		});
	},
};
