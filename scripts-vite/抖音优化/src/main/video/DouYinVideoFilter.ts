import { $$, addStyle, DOMUtils, log, pops, utils } from "@/env";
import { UIInput } from "@components/setting/components/ui-input";
import { UISelectMultiple } from "@components/setting/components/ui-select-multiple";
import { UISwitch } from "@components/setting/components/ui-switch";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "@components/setting/panel-config";
import { RuleView } from "@components/utils/RuleView";
import { RuleStorage } from "@components/utils/RuleStorage";
import Qmsg from "qmsg";
import { DouYinVideoFilterBase } from "./DouYinVideoFilterBase";
import { Panel } from "@components/setting/panel";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { CommonUtil } from "@components/utils/CommonUtil";
import { PanelUISize } from "@components/setting/panel-ui-size";
import { UITextArea } from "@components/setting/components/ui-textarea";
import Utils from "@whitesev/utils";
import { DouYinRouter } from "@/router/DouYinRouter";
import type { UtilsAjaxHookRequestOptions } from "@whitesev/utils/dist/types/src/types/ajaxHooker";
import type { PopsPanelSelectMultipleDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-selectMultiple";
import type { DouYinVideoAwemeInfo, DouYinVideoHandlerInfo } from "./DouYinVideoType";

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
  | "xhr-related"
  | "xhr-video";

/** 过滤器规则-动态属性 */
export type DouYinVideoFilterDynamicOption = {
  /** 属性名 */
  ruleName: keyof DouYinVideoHandlerInfo | (keyof DouYinVideoHandlerInfo)[];
  /** 是否使用自定义函数处理 */
  isFunctionHandler?: boolean;
  /** 属性值 */
  ruleValue: string;
  /** 备注 */
  remarks: string;
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
  } & DouYinVideoFilterDynamicOption;
  /** 动态添加的数据 */
  dynamicData?: DouYinVideoFilterDynamicOption[];
};

export const DouYinVideoFilter = {
  $key: {
    ENABLE_KEY: "shieldVideo-exec-network-enable",
  },
  $data: {
    /** 已经过滤的信息 */
    isFilterAwemeInfoList: new Utils.Dictionary<string, DouYinVideoFilterOption[]>(),
    /**
     * 网络接口的视频信息字典
     */
    networkAwemeInfoMap: new Utils.Dictionary<
      string,
      {
        /** 网络接口的原始视频信息 */
        awemeInfo: DouYinVideoAwemeInfo;
        /** 解析出的所需的信息 */
        transformAwemeInfo: DouYinVideoHandlerInfo;
      }
    >(),
    __videoFilterRuleStorage: null as null | RuleStorage<DouYinVideoFilterOption>,
    get videoFilterRuleStorage() {
      if (this.__videoFilterRuleStorage == null) {
        this.__videoFilterRuleStorage = new RuleStorage<DouYinVideoFilterOption>({
          STORAGE_API_KEY: "dy-video-filter-rule",
        });
      }
      return this.__videoFilterRuleStorage;
    },
    /**
     * 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
     */
    get isReverse() {
      return Panel.getValue<boolean>("shieldVideo-only-show-filtered-video");
    },
  },
  init() {
    if (DouYinRouter.isLive()) {
      Panel.deleteExecMenuOnce(this.$key.ENABLE_KEY);
      return;
    }
    this.execFilter();
    Panel.execMenuOnce("shieldVideo-add-parseVideoInfoButton", () => {
      this.addParseButton();
    });
  },
  /**
   * 执行过滤
   */
  execFilter() {
    const that = this;
    Panel.execMenuOnce(this.$key.ENABLE_KEY, async () => {
      log.info(`执行视频过滤器`);
      // let webid = Panel.getValue("dy-webid");
      // if (utils.isNull(webid)) {
      // 	let temp_webid = await DouYinQueryApi.webid();
      // 	if (typeof temp_webid === "string") {
      // 		webid = temp_webid;
      // 		Panel.setValue("dy-webid", webid);
      // 	}
      // }
      let filterBase = new DouYinVideoFilterBase();
      /**
       * 获取作用域的规则
       */
      let queryScopeFilterOptionList = (scopeName: DouYinVideoFilterOptionScope) => {
        if (!Panel.getValue(that.$key.ENABLE_KEY)) {
          return [];
        }
        let filterOptionList = that.$data.videoFilterRuleStorage.getAllRule();
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
                it.data.scope.includes(item as any as DouYinVideoFilterOptionScope)
              ) !== -1)
        );
        return matchedFilterOptionList;
      };
      /** 获取接口信息后的回调 */
      let checkFilterCallBack = (awemeFilterInfoResult: {
        isFilter: boolean;
        matchedFilterOption: DouYinVideoFilterOption | null;
        transformAwemeInfo: DouYinVideoHandlerInfo;
        awemeInfo: DouYinVideoAwemeInfo;
      }) => {
        // 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
        // 并添加记录
        if (this.$data.isReverse) {
          // 逆反是否过滤
          awemeFilterInfoResult.isFilter = !awemeFilterInfoResult.isFilter;
          if (
            typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string" &&
            awemeFilterInfoResult.matchedFilterOption
          ) {
            let filterOptionList: DouYinVideoFilterOption[] =
              this.$data.isFilterAwemeInfoList.get(awemeFilterInfoResult.transformAwemeInfo.awemeId) || [];
            filterOptionList.push(awemeFilterInfoResult.matchedFilterOption);
            this.$data.isFilterAwemeInfoList.set(awemeFilterInfoResult.transformAwemeInfo.awemeId, filterOptionList);
          }
        }

        // 添加映射
        if (typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string") {
          DouYinVideoFilter.$data.networkAwemeInfoMap.set(awemeFilterInfoResult.transformAwemeInfo.awemeId, {
            awemeInfo: awemeFilterInfoResult.awemeInfo,
            transformAwemeInfo: awemeFilterInfoResult.transformAwemeInfo,
          });
        }
      };
      /**
       * 类型1接口结果的hook
       */
      let xhr_hook_callback_1 = (scopeName: DouYinVideoFilterOptionScope, request: UtilsAjaxHookRequestOptions) => {
        request.response = async (response) => {
          let filterOptionList = queryScopeFilterOptionList(scopeName);
          if (!filterOptionList.length) {
            return;
          }
          let data = utils.toJSON(response.responseText);
          let aweme_list = data["aweme_list"];
          if (Array.isArray(aweme_list)) {
            for (let index = 0; index < aweme_list.length; index++) {
              let awemeInfo: DouYinVideoAwemeInfo = aweme_list[index] || {};
              let filterResult = await filterBase.checkAwemeInfoIsFilter(filterOptionList, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.sendDislikeVideo(filterResult.matchedFilterOption!, awemeInfo);
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
      let xhr_hook_callback_2 = (scopeName: DouYinVideoFilterOptionScope, request: UtilsAjaxHookRequestOptions) => {
        request.response = async (response) => {
          let filterOptionList = queryScopeFilterOptionList(scopeName);
          if (!filterOptionList.length) {
            return;
          }
          let data = utils.toJSON(response.responseText);
          let aweme_list = data["data"];
          if (Array.isArray(aweme_list)) {
            for (let index = 0; index < aweme_list.length; index++) {
              let awemeItem = aweme_list[index];
              let awemeInfo: DouYinVideoAwemeInfo = awemeItem["aweme"] || {};
              // 如果cell_room不为空，这时候aweme是空的
              if (typeof awemeItem?.["cell_room"] === "object" && awemeItem?.["cell_room"] != null) {
                (awemeInfo as any)["cell_room"] = awemeItem?.["cell_room"];
              }
              let filterResult = await filterBase.checkAwemeInfoIsFilter(filterOptionList, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.sendDislikeVideo(filterResult.matchedFilterOption!, awemeInfo);
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
      let xhr_hook_callback_3 = (scopeName: DouYinVideoFilterOptionScope, request: UtilsAjaxHookRequestOptions) => {
        request.response = async (response) => {
          let filterOptionList = queryScopeFilterOptionList(scopeName);
          if (!filterOptionList.length) {
            return;
          }
          let data = utils.toJSON(response.responseText);
          let cards = data["cards"];
          if (Array.isArray(cards)) {
            for (let index = 0; index < cards.length; index++) {
              let awemeItem = cards[index];
              let awemeInfo: DouYinVideoAwemeInfo = utils.toJSON(awemeItem?.["aweme"] || "{}");
              let filterResult = await filterBase.checkAwemeInfoIsFilter(filterOptionList, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.sendDislikeVideo(filterResult.matchedFilterOption!, awemeInfo);
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
      let xhr_hook_callback_4 = (scopeName: DouYinVideoFilterOptionScope, request: UtilsAjaxHookRequestOptions) => {
        request.response = async (response) => {
          let filterOptionList = queryScopeFilterOptionList(scopeName);
          if (!filterOptionList.length) {
            return;
          }
          let data = utils.toJSON(response.responseText);
          let aweme_list = data["data"];
          if (Array.isArray(aweme_list)) {
            for (let index = 0; index < aweme_list.length; index++) {
              let awemeItem = aweme_list[index];
              let awemeInfo: DouYinVideoAwemeInfo = awemeItem["aweme_info"] || {};
              let awemeMixInfo = awemeItem?.["aweme_mix_info"];
              if (awemeInfo == null && typeof awemeMixInfo && awemeMixInfo != null) {
                // 对混合的信息进行过滤
                let awemeMixInfoItems = awemeMixInfo?.["mix_items"];
                if (Array.isArray(awemeMixInfoItems)) {
                  for (let mixIndex = 0; mixIndex < awemeMixInfoItems.length; mixIndex++) {
                    let mixItem: DouYinVideoAwemeInfo = awemeMixInfoItems[mixIndex];
                    let filterResult = await filterBase.checkAwemeInfoIsFilter(filterOptionList, mixItem);
                    checkFilterCallBack(filterResult);
                    if (filterResult.isFilter) {
                      filterBase.sendDislikeVideo(filterResult.matchedFilterOption!, mixItem);
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
                let filterResult = await filterBase.checkAwemeInfoIsFilter(filterOptionList, awemeInfo);
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(filterResult.matchedFilterOption!, awemeInfo);
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
      /**
       * 类型5接口结果的hook
       *
       * 此回调不会对请求数据进行过滤，因为它的结果是单个aweme，而不是数组
       */
      let xhr_hook_callback_5 = (scopeName: DouYinVideoFilterOptionScope, request: UtilsAjaxHookRequestOptions) => {
        request.response = async (response) => {
          let filterOptionList = queryScopeFilterOptionList(scopeName);
          if (!filterOptionList.length) {
            return;
          }
          let data = utils.toJSON(response.responseText);
          // 单个记录
          let awemeInfo: DouYinVideoAwemeInfo = data["aweme_detail"];
          if (typeof awemeInfo === "object" && awemeInfo != null) {
            let filterResult = await filterBase.checkAwemeInfoIsFilter(filterOptionList, awemeInfo);
            checkFilterCallBack(filterResult);
            if (filterResult.isFilter) {
              // 只记录，不移除
              filterBase.sendDislikeVideo(filterResult.matchedFilterOption!, awemeInfo);
            }
            if (import.meta.hot) {
              console.log(awemeInfo);
            }
            response.responseText = JSON.stringify(data);
          }
        };
      };
      // xhr hook
      DouYinNetWorkHook.ajaxHooker.hook((request) => {
        let url = CommonUtil.fixUrl(request.url);
        let urlInst = new URL(url);
        if (urlInst.pathname.startsWith("/aweme/v1/web/tab/feed")) {
          // 推荐
          xhr_hook_callback_1("xhr-tab", request);
        } else if (urlInst.pathname.startsWith("/aweme/v1/web/aweme/post/")) {
          // 用户主页视频
          xhr_hook_callback_1("xhr-userHome", request);
        } else if (urlInst.pathname.startsWith("/aweme/v1/web/mix/aweme/")) {
          // 混合信息
          xhr_hook_callback_1("xhr-mix", request);
        } else if (urlInst.pathname.startsWith("/aweme/v1/web/aweme/related/")) {
          // 相关推荐
          xhr_hook_callback_1("xhr-related", request);
        } else if (urlInst.pathname.startsWith("/aweme/v1/web/follow/feed")) {
          // 关注
          xhr_hook_callback_2("xhr-follow", request);
        } else if (urlInst.pathname.startsWith("/aweme/v1/web/familiar/feed")) {
          // 朋友
          xhr_hook_callback_2("xhr-familiar", request);
        } else if (urlInst.pathname.startsWith("/aweme/v1/web/module/feed")) {
          // 精选
          // 游戏、二次元、音乐、美食、知识、体育从左侧边栏迁移到了这里面
          xhr_hook_callback_3("xhr-module", request);
        } else if (
          // 搜索-综合
          urlInst.pathname.startsWith("/aweme/v1/web/general/search/single/") ||
          // 搜索-视频
          urlInst.pathname.startsWith("/aweme/v1/web/search/item/")
        ) {
          xhr_hook_callback_4("xhr-search", request);
        } else if (urlInst.pathname.startsWith("/aweme/v1/web/aweme/detail/")) {
          // 单个视频页面
          // /video/xxx
          // 这里没有必要屏蔽，单纯的存储网络awemeinfo记录
          xhr_hook_callback_5("xhr-video", request);
        }
      });
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
    let awemeInfoClickCallBack = ($container: HTMLElement) => {
      let that = this;
      let reactFiber = utils.getReactInstance($container)?.reactFiber;
      let awemeInfo =
        reactFiber?.return?.memoizedProps?.awemeInfo ||
        reactFiber?.return?.return?.memoizedProps?.awemeInfo ||
        reactFiber?.return?.memoizedProps?.originData;
      if (awemeInfo == null) {
        Qmsg.error("未获取到awemeInfo信息");
        return;
      }
      if (typeof awemeInfo !== "object") {
        Qmsg.error("获取到的awemeInfo信息不是对象");
        return;
      }
      let transformAwemeInfo: DouYinVideoHandlerInfo;
      let transformAwemeInfoWithPage = filterBase.parseAwemeInfoDictData(awemeInfo, false);
      log.info(["视频页面原始awemeInfo：", awemeInfo]);
      log.info(["视频页面解析出的transformAwemeInfo：", transformAwemeInfoWithPage]);
      if (
        typeof transformAwemeInfoWithPage.awemeId === "string" &&
        DouYinVideoFilter.$data.networkAwemeInfoMap.has(transformAwemeInfoWithPage.awemeId)
      ) {
        let awemeInfoMapData = DouYinVideoFilter.$data.networkAwemeInfoMap.get(transformAwemeInfoWithPage.awemeId);
        transformAwemeInfo = awemeInfoMapData.transformAwemeInfo;
        log.info([`视频网络接口存储的Info：`, awemeInfoMapData]);
      } else {
        transformAwemeInfo = transformAwemeInfoWithPage;
      }
      /** 命中的规则 */
      let targetFilterOption = that.$data.isFilterAwemeInfoList.get(transformAwemeInfo.awemeId!) || [];
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
    /**
     * 创建解析按钮
     */
    let createFilterParseButton = () => {
      // @ts-ignore
      return DOMUtils.createElement("xg-icon", {
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
      }) as HTMLElement;
    };
    let lockFn = new utils.LockFunction(() => {
      if (DouYinRouter.isLive()) {
        return;
      }
      // 普通视频
      $$<HTMLElement>(".basePlayerContainer xg-right-grid:not(:has(.gm-video-filter-parse-btn))").forEach(
        ($xgRightGrid) => {
          let $gmFilterParseBtn = createFilterParseButton();
          DOMUtils.on($gmFilterParseBtn, "click", (event) => {
            DOMUtils.preventEvent(event);
            let $basePlayerContainer = $xgRightGrid.closest<HTMLElement>(".basePlayerContainer")!;
            awemeInfoClickCallBack($basePlayerContainer);
          });
          DOMUtils.prepend($xgRightGrid, $gmFilterParseBtn);
        }
      );
      // 直播间
      $$<HTMLElement>('[data-e2e="feed-live"] xg-right-grid:not(:has(.gm-video-filter-parse-btn))').forEach(
        ($xgRightGrid) => {
          if (!utils.isVisible($xgRightGrid, false)) {
            return;
          }
          let $gmFilterParseBtn = createFilterParseButton();
          DOMUtils.on($gmFilterParseBtn, "click", (event) => {
            DOMUtils.preventEvent(event);
            let $liveContainer = $xgRightGrid.closest<HTMLElement>('[data-e2e="feed-live"]')!;
            awemeInfoClickCallBack($liveContainer);
          });
          DOMUtils.prepend($xgRightGrid, $gmFilterParseBtn);
        }
      );
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
    let panelHandlerComponents = pops.config.PanelHandlerComponents();
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
        return that.$data.videoFilterRuleStorage.getAllRule();
      },
      getAddData: () => {
        return this.getTemplateData();
      },
      getDataItemName: (data) => {
        return data["name"];
      },
      updateData: (data) => {
        return that.$data.videoFilterRuleStorage.setRule(data);
      },
      deleteData: (data) => {
        return that.$data.videoFilterRuleStorage.deleteRule(data);
      },
      getData: (data) => {
        let allData = DouYinVideoFilter.$data.videoFilterRuleStorage.getAllRule();
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
            that.$data.videoFilterRuleStorage.setRule(data);
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
            Reflect.set(enable_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template);

            // 规则名称
            let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
            Reflect.set(name_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $name = panelHandlerComponents.createSectionContainerItem_input(name_template);

            // 作用域
            let scope_template = UISelectMultiple<DouYinVideoFilterOptionScope>(
              "作用域",
              "scope",
              [],
              (
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
                  // {
                  //   text: "视频",
                  //   value: "xhr-video",
                  // },
                ] as PopsPanelSelectMultipleDetails<DouYinVideoFilterOptionScope>["data"]
              ).map((it) => {
                let result: PopsPanelSelectMultipleDetails<DouYinVideoFilterOptionScope>["data"]["0"] = {
                  ...it,
                  value: it.value as DouYinVideoFilterOptionScope,
                };
                if (result.value !== "all") {
                  // result.disable = function (value, allSelectedInfo) {
                  // 	return allSelectedInfo.some(
                  // 		(selectInfo) => selectInfo.value === "all"
                  // 	);
                  // };
                }
                return result;
              }),
              void 0,
              "选择需要在xxx上生效的作用域"
            );
            Reflect.set(scope_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $scope = panelHandlerComponents.createSectionContainerItem_select_multiple_new(scope_template);

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
              "isProduct",
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
              "liveStreamRoomId",
              "liveStreamRoomTitle",
              "liveStreamNickName",
              "liveStreamRoomUserCount",
              "liveStreamRoomDynamicSpliceLabel",
              "videoBitRateList",
              "productId",
              "productTitle",
            ];

            /**
             * 生成动态的元素
             * @param storageData 存储的数据
             */
            let createDynamicItemNode = (
              storageData: DouYinVideoFilterOption["data"] | DouYinVideoFilterDynamicOption
            ) => {
              // 属性名
              const ruleNameDefaultValue: (keyof DouYinVideoHandlerInfo)[] = Array.isArray(storageData["ruleName"])
                ? storageData["ruleName"]
                : [storageData["ruleName"]];
              const ruleName_template = UISelectMultiple<keyof DouYinVideoHandlerInfo>(
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
              Reflect.set(ruleName_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));
              const $ruleName =
                panelHandlerComponents.createSectionContainerItem_select_multiple_new(ruleName_template);

              // 自定义函数处理
              const isFunctionHandler_template_valueChange = (_: any, enableValue: boolean) => {
                if (enableValue) {
                  // 开启
                  // 将下面的属性值的介绍改变
                  DOMUtils.html($ruleValueLeftMainText, `自定义函数`);
                  DOMUtils.html($ruleValueLeftDescText, `返回值必须为boolean值`);
                } else {
                  // 关闭
                  // 将下面的属性值的介绍恢复
                  DOMUtils.html($ruleValueLeftMainText, ruleValue_template.text);
                  DOMUtils.html($ruleValueLeftDescText, ruleValue_template.description ?? "");
                }
              };
              const isFunctionHandler_template = UISwitch(
                "是否使用自定义函数处理",
                "isFunctionHandler",
                false,
                void 0,
                "执行自定义函数来判断是否进行过滤",
                void 0,
                false,
                isFunctionHandler_template_valueChange
              );
              Reflect.set(isFunctionHandler_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));
              const $ownFunctionHandler =
                panelHandlerComponents.createSectionContainerItem_switch(isFunctionHandler_template);

              // 属性值
              const ruleValue_template = UITextArea(
                "属性值",
                "ruleValue",
                "",
                "如果是字符串，可正则，注意转义",
                void 0
              );
              Reflect.set(ruleValue_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));
              const $ruleValue = panelHandlerComponents.createSectionContainerItem_textarea(ruleValue_template);
              const $ruleValueLeftMainText = $ruleValue.querySelector<HTMLElement>(".pops-panel-item-left-main-text")!;
              const $ruleValueLeftDescText = $ruleValue.querySelector<HTMLElement>(".pops-panel-item-left-desc-text")!;

              // 备注
              const remarks_template = UITextArea("备注", "remarks", "", "", void 0);
              Reflect.set(remarks_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));
              const $remarks = panelHandlerComponents.createSectionContainerItem_textarea(remarks_template);

              // 值初始化
              if (storageData.isFunctionHandler) {
                isFunctionHandler_template_valueChange(null, isFunctionHandler_template.getValue());
              }
              return [$ruleName, $ownFunctionHandler, $ruleValue, $remarks];
            };

            // 动态属性
            let $dynamicContainer = DOMUtils.createElement("div", {
              className: "rule-form-ulist-dynamic",
              innerHTML: /*html*/ `
							<div class="rule-form-ulist-dynamic__inner"></div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="button" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`,
            });
            let $dynamicInner = $dynamicContainer.querySelector<HTMLElement>(".rule-form-ulist-dynamic__inner")!;
            let $addDynamicButton = $dynamicContainer.querySelector<HTMLButtonElement>(".pops-panel-button")!;

            /**
             * 添加动态项
             */
            let addDynamicElementItem = (
              dynamicData: DouYinVideoFilterDynamicOption = {
                ruleName: [],
                isFunctionHandler: false,
                ruleValue: "",
                remarks: "",
              }
            ) => {
              let $dynamicUListContainer = DOMUtils.createElement("div", {
                className: "rule-form-ulist-dynamic__inner-container",
                innerHTML: /*html*/ `
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms"></ul>
								`,
              });
              /** 删除按钮 */
              let $dynamicDelete = $dynamicUListContainer.querySelector<HTMLDivElement>(".dynamic-control-delete")!;
              // 设置删除事件
              DOMUtils.on($dynamicDelete, "click", (event) => {
                DOMUtils.preventEvent(event);
                $dynamicUListContainer.remove();
                if (Array.isArray(data.dynamicData)) {
                  let findIndex = data.dynamicData.findIndex((it) => it == dynamicData);
                  if (findIndex !== -1) {
                    data.dynamicData.splice(findIndex, 1);
                  }
                }
              });
              /** 动态添加的项 */
              let $dynamicUList = $dynamicUListContainer.querySelector<HTMLUListElement>(".dynamic-forms")!;
              const dynamicItemNodes = createDynamicItemNode(dynamicData);
              $dynamicUList.append(...dynamicItemNodes);
              $dynamicInner.appendChild($dynamicUListContainer);
            };
            // 设置添加动态项的点击事件
            DOMUtils.on($addDynamicButton, "click", (event) => {
              DOMUtils.preventEvent(event);
              addDynamicElementItem();
            });

            // 初始化的动态项
            if (Array.isArray(data.dynamicData)) {
              for (let index = 0; index < data.dynamicData.length; index++) {
                const moreDataItem = data.dynamicData[index];
                addDynamicElementItem(moreDataItem);
              }
            }

            $fragment.append(
              $enable,
              $name,
              $scope,
              // $autoSendDisLikeRequest,
              ...createDynamicItemNode(data.data),
              $dynamicContainer
            );
            return $fragment;
          },
          onsubmit: ($form, isEdit, editData) => {
            // 提交表单
            let $ulist_li = $form.querySelectorAll<HTMLLIElement>(".rule-form-ulist > li");
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
              } else if (Reflect.has(data.data, key)) {
                Reflect.set(data.data, key, value);
              } else {
                log.error(`${key}不在数据中`);
              }
            });
            // 添加的动态属性
            $form.querySelectorAll<HTMLLIElement>(".rule-form-ulist-dynamic__inner-container").forEach(($inner) => {
              let dynamicData = {} as DouYinVideoFilterDynamicOption;
              $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
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
                success: that.$data.videoFilterRuleStorage.setRule(data),
                data: data,
              };
            } else {
              return {
                success: that.$data.videoFilterRuleStorage.addRule(data),
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
          li[data-key="isFunctionHandler"]:has(.pops-panel-switch-is-checked) + li[data-key="ruleValue"] .pops-panel-textarea {
            flex: 1;
            justify-items: end;
          }
          li[data-key="isFunctionHandler"]:has(.pops-panel-switch-is-checked) + li[data-key="ruleValue"] textarea {
            height: 200px;
            width: calc(100% - 100px);
            max-width: unset;
          }
          `,
          width: () => {
            return window.innerWidth > 700 ? "700px" : "88vw";
          },
        },
        delete: {
          enable: true,
          deleteCallBack: (data) => {
            return that.$data.videoFilterRuleStorage.deleteRule(data);
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
              callback(event, closeDialog) {
                Panel.setValue("dy-video-ui-rule-filter-option-index", 0);
                return true;
              },
            },
            {
              name: "过滤-未启用",
              filterCallBack(data) {
                return !data.enable;
              },
              callback(event, closeDialog) {
                Panel.setValue("dy-video-ui-rule-filter-option-index", 1);
                return true;
              },
            },
          ],
          cancelFilterCallback(config) {
            Panel.deleteValue("dy-video-ui-rule-filter-option-index");
          },
        },
        clear: {
          enable: true,
          callback: () => {
            that.$data.videoFilterRuleStorage.clearAllRule();
          },
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
    ruleView.showView(Panel.getValue("dy-video-ui-rule-filter-option-index"));
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
        isFunctionHandler: false,
        ruleValue: "",
        remarks: "",
      },
      dynamicData: [],
    };
  },
};
