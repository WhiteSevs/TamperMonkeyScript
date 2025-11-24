import { $$, addStyle, DOMUtils, log, pops, utils } from "@/env";
import { UIInput } from "@components/setting/components/ui-input";
import { UISelectMultiple } from "@components/setting/components/ui-select-multiple";
import { UISwitch } from "@components/setting/components/ui-switch";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "@components/setting/panel-config";
import { RuleView, type RuleViewOption } from "@components/utils/RuleView";
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
import type { PopsPanelSelectMultipleConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-selectMultiple";
import type { DouYinVideoAwemeInfo, DouYinVideoHandlerInfo } from "../DouYinVideoType";

type DouYinVideoFilterRuleOptionScope =
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
export type DouYinVideoFilterRuleDynamicOption = {
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
export type DouYinVideoFilterRule = {
  /** 是否启用 */
  enable: boolean;
  /** 唯一uuid */
  uuid: string;
  /** 规则名 */
  name: string;
  /** 配置的数据 */
  data: {
    /** 作用域（让规则在哪个下面生效） */
    scope: DouYinVideoFilterRuleOptionScope[];
    /** 是否自动发送不感兴趣的请求 */
    // autoSendDisLikeRequest: boolean;
  } & DouYinVideoFilterRuleDynamicOption;
  /** 动态添加的数据 */
  dynamicData?: DouYinVideoFilterRuleDynamicOption[];
};

export const DouYinVideoFilter = {
  $key: {
    ENABLE_KEY: "shieldVideo-exec-network-enable",
  },
  $data: {
    /**
     * 已过滤的视频信息（仅显示被过滤的视频）
     */
    isFilterAwemeInfoListWithOnlyShowFilteredVideo: new Utils.Dictionary<string, DouYinVideoFilterRule[]>(),
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
    __videoFilterRuleStorage: null as null | RuleStorage<DouYinVideoFilterRule>,
    get videoFilterRuleStorage() {
      if (this.__videoFilterRuleStorage == null) {
        this.__videoFilterRuleStorage = new RuleStorage<DouYinVideoFilterRule>({
          STORAGE_API_KEY: "dy-video-filter-rule",
        });
      }
      return this.__videoFilterRuleStorage;
    },
    /**
     * 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
     */
    get onlyShowFilteredVideo() {
      return Panel.getValue<boolean>("shieldVideo-only-show-filtered-video");
    },
    /**
     * 视频过滤规则
     */
    videoFilterRules: <DouYinVideoFilterRule[]>[],
  },
  init() {
    if (DouYinRouter.isLive()) {
      Panel.deleteExecMenuOnce(this.$key.ENABLE_KEY);
      return;
    }
    this.execFilter();
    DOMUtils.ready(() => {
      Panel.execMenuOnce("shieldVideo-add-parseVideoInfoButton", () => {
        return this.addParseButton();
      });
    });
  },
  /**
   * 获取过滤规则（启用状态）
   * @param scopeName 作用域 不传入的话就是全部规则
   * @param [useEnableRule=true] 是否使用启用状态的规则，true：启用状态的规则，false：所有规则
   */
  getFilterRules(scopeName?: DouYinVideoFilterRuleOptionScope, useEnableRule: boolean = true) {
    if (!Panel.getValue(this.$key.ENABLE_KEY)) {
      return [];
    }
    const videoFilterRules = this.$data.videoFilterRuleStorage.getAllRule();
    if (!videoFilterRules.length) {
      // 无规则，不过滤
      return [];
    }
    // 排序
    // 非isFunctionHandler优先级最低
    // 所以isFunctionHandler排在最后
    videoFilterRules.sort((a, b) => {
      if (a.data.isFunctionHandler && !b.data.isFunctionHandler) {
        return 1;
      }
      if (!a.data.isFunctionHandler && b.data.isFunctionHandler) {
        return -1;
      }
      return 0;
    });
    if (typeof scopeName === "string") {
      // 获取在作用域内的规则（该规则为启用状态）
      const scopeNameList: DouYinVideoFilterRuleOptionScope[] = Array.isArray(scopeName) ? scopeName : [scopeName];
      const matchedFilterOptionList = videoFilterRules.filter((it) => {
        if (typeof useEnableRule === "boolean" && useEnableRule) {
          if (!it.enable) {
            return false;
          }
        }
        return it.data.scope.includes("all") || scopeNameList.findIndex((item) => it.data.scope.includes(item)) !== -1;
      });
      return matchedFilterOptionList;
    } else {
      const matchedFilterOptionList = videoFilterRules.filter((it) => {
        if (typeof useEnableRule === "boolean" && useEnableRule) {
          if (!it.enable) {
            return false;
          }
        }
        return true;
      });
      return matchedFilterOptionList;
    }
  },
  /**
   * 执行过滤
   */
  execFilter() {
    const that = this;
    Panel.execMenuOnce(this.$key.ENABLE_KEY, async () => {
      log.info(`执行视频过滤器`);
      const filterBase = new DouYinVideoFilterBase();
      /** 获取接口信息后的回调 */
      const checkFilterCallBack = (
        awemeFilterInfoResult: Awaited<ReturnType<typeof DouYinVideoFilterBase.prototype.checkAwemeInfoIsFilter<false>>>
      ) => {
        // 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
        // 并添加记录
        if (this.$data.onlyShowFilteredVideo) {
          // 这时候需要过滤掉非命中规则的视频
          awemeFilterInfoResult.isFilter = !awemeFilterInfoResult.isFilter;
          // 添加过滤信息记录
          if (
            typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string" &&
            awemeFilterInfoResult.matchedFilterRule
          ) {
            const filterOptionList: DouYinVideoFilterRule[] =
              this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.get(
                awemeFilterInfoResult.transformAwemeInfo.awemeId
              ) || [];
            filterOptionList.push(awemeFilterInfoResult.matchedFilterRule);
            this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.set(
              awemeFilterInfoResult.transformAwemeInfo.awemeId,
              filterOptionList
            );
          }
        }
        // 添加网络接口的视频信息字典映射
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
      const xhr_hook_callback_1 = (
        scopeName: DouYinVideoFilterRuleOptionScope,
        request: UtilsAjaxHookRequestOptions
      ) => {
        request.response = async (response) => {
          const filterRules = that.getFilterRules(scopeName);
          if (!filterRules.length) {
            return;
          }
          const data = utils.toJSON(response.responseText);
          const aweme_list = data["aweme_list"];
          if (Array.isArray(aweme_list)) {
            for (let index = 0; index < aweme_list.length; index++) {
              const awemeInfo: DouYinVideoAwemeInfo = aweme_list[index] || {};
              const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.sendDislikeVideo(filterResult.matchedFilterRule!, awemeInfo);
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
      const xhr_hook_callback_2 = (
        scopeName: DouYinVideoFilterRuleOptionScope,
        request: UtilsAjaxHookRequestOptions
      ) => {
        request.response = async (response) => {
          const filterRules = that.getFilterRules(scopeName);
          if (!filterRules.length) {
            return;
          }
          const data = utils.toJSON(response.responseText);
          const aweme_list = data["data"];
          if (Array.isArray(aweme_list)) {
            for (let index = 0; index < aweme_list.length; index++) {
              const awemeItem = aweme_list[index];
              const awemeInfo: DouYinVideoAwemeInfo = awemeItem["aweme"] || {};
              // 如果cell_room不为空，这时候aweme是空的
              if (typeof awemeItem?.["cell_room"] === "object" && awemeItem?.["cell_room"] != null) {
                (awemeInfo as any)["cell_room"] = awemeItem?.["cell_room"];
              }
              const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.sendDislikeVideo(filterResult.matchedFilterRule!, awemeInfo);
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
      const xhr_hook_callback_3 = (
        scopeName: DouYinVideoFilterRuleOptionScope,
        request: UtilsAjaxHookRequestOptions
      ) => {
        request.response = async (response) => {
          const filterRules = that.getFilterRules(scopeName);
          if (!filterRules.length) {
            return;
          }
          const data = utils.toJSON(response.responseText);
          const cards = data["cards"];
          if (Array.isArray(cards)) {
            for (let index = 0; index < cards.length; index++) {
              const awemeItem = cards[index];
              const awemeInfo: DouYinVideoAwemeInfo = utils.toJSON(awemeItem?.["aweme"] || "{}");
              const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.sendDislikeVideo(filterResult.matchedFilterRule!, awemeInfo);
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
      const xhr_hook_callback_4 = (
        scopeName: DouYinVideoFilterRuleOptionScope,
        request: UtilsAjaxHookRequestOptions
      ) => {
        request.response = async (response) => {
          const filterRules = that.getFilterRules(scopeName);
          if (!filterRules.length) {
            return;
          }
          const data = utils.toJSON(response.responseText);
          const aweme_list = data["data"];
          if (Array.isArray(aweme_list)) {
            for (let index = 0; index < aweme_list.length; index++) {
              const awemeItem = aweme_list[index];
              const awemeInfo: DouYinVideoAwemeInfo = awemeItem["aweme_info"] || {};
              const awemeMixInfo = awemeItem?.["aweme_mix_info"];
              if (awemeInfo == null && typeof awemeMixInfo && awemeMixInfo != null) {
                // 对混合的信息进行过滤
                const awemeMixInfoItems = awemeMixInfo?.["mix_items"];
                if (Array.isArray(awemeMixInfoItems)) {
                  for (let mixIndex = 0; mixIndex < awemeMixInfoItems.length; mixIndex++) {
                    const mixItem: DouYinVideoAwemeInfo = awemeMixInfoItems[mixIndex];
                    const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, mixItem);
                    checkFilterCallBack(filterResult);
                    if (filterResult.isFilter) {
                      filterBase.sendDislikeVideo(filterResult.matchedFilterRule!, mixItem);
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
                const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(filterResult.matchedFilterRule!, awemeInfo);
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
      const xhr_hook_callback_5 = (
        scopeName: DouYinVideoFilterRuleOptionScope,
        request: UtilsAjaxHookRequestOptions
      ) => {
        request.response = async (response) => {
          const filterRules = that.getFilterRules(scopeName);
          if (!filterRules.length) {
            return;
          }
          const data = utils.toJSON(response.responseText);
          // 单个记录
          const awemeInfo: DouYinVideoAwemeInfo = data["aweme_detail"];
          if (typeof awemeInfo === "object" && awemeInfo != null) {
            const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
            checkFilterCallBack(filterResult);
            if (filterResult.isFilter) {
              // 只记录，不移除
              filterBase.sendDislikeVideo(filterResult.matchedFilterRule!, awemeInfo);
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
        const url = CommonUtil.fixUrl(request.url);
        const urlInst = new URL(url);
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
    const filterBase = new DouYinVideoFilterBase();

    // 按钮的点击回调
    const awemeInfoClickCallBack = async ($container: HTMLElement) => {
      const that = this;
      const reactFiber = utils.getReactInstance($container)?.reactFiber;
      const awemeInfo =
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
      const transformAwemeInfoWithPage = filterBase.parseAwemeInfoDictData(awemeInfo, false);
      log.info(["DOM上的的awemeInfo：", awemeInfo]);
      log.info(["DOM上解析出的transformAwemeInfo：", transformAwemeInfoWithPage]);
      if (
        typeof transformAwemeInfoWithPage.awemeId === "string" &&
        DouYinVideoFilter.$data.networkAwemeInfoMap.has(transformAwemeInfoWithPage.awemeId)
      ) {
        const awemeInfoMapData = DouYinVideoFilter.$data.networkAwemeInfoMap.get(transformAwemeInfoWithPage.awemeId);
        transformAwemeInfo = awemeInfoMapData.transformAwemeInfo;
        log.info([`网络请求的awemeInfo：`, awemeInfoMapData.awemeInfo]);
        log.info([`网络请求解析出的transformAwemeInfo：`, awemeInfoMapData.transformAwemeInfo]);
      } else {
        transformAwemeInfo = transformAwemeInfoWithPage;
      }
      /**
       * 命中的规则
       */
      let targetFilterOption: DouYinVideoFilterRule[] = [];
      let isHasMatchedRules = false;
      if (
        this.$data.onlyShowFilteredVideo &&
        this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.has(transformAwemeInfo.awemeId!)
      ) {
        // 已开启 仅显示被过滤的视频
        // 提取出命中的规则
        isHasMatchedRules = true;
        const matchedFilterOption = this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.get(
          transformAwemeInfo.awemeId!
        );
        targetFilterOption = targetFilterOption.concat(matchedFilterOption);
      } else {
        const filterRules = this.getFilterRules();
        const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo, true);
        if (filterResult.matchedFilterRule.length) {
          isHasMatchedRules = true;
          targetFilterOption = targetFilterOption.concat(filterResult.matchedFilterRule);
        } else {
          isHasMatchedRules = false;
          targetFilterOption = targetFilterOption.concat(filterResult.notMatchedFilterRule);
        }
      }
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
              const ruleView = that.getRuleViewInstance();
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
            enable: Boolean(targetFilterOption.length),
            text: `${isHasMatchedRules ? "" : "非"}命中的规则(${targetFilterOption.length})`,
            type: isHasMatchedRules ? "xiaomi-primary" : "violet",
            callback(btnConfig, event) {
              that.getRuleViewInstance().showView((data) => {
                const find = targetFilterOption.find((it) => {
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
    const createFilterParseButton = () => {
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
    const lockFn = new utils.LockFunction(() => {
      if (DouYinRouter.isLive()) {
        return;
      }
      // 普通视频
      $$<HTMLElement>(".basePlayerContainer xg-right-grid:not(:has(.gm-video-filter-parse-btn))").forEach(
        ($xgRightGrid) => {
          const $gmFilterParseBtn = createFilterParseButton();
          DOMUtils.on($gmFilterParseBtn, "click", async (event) => {
            DOMUtils.preventEvent(event);
            const $basePlayerContainer = $xgRightGrid.closest<HTMLElement>(".basePlayerContainer")!;
            await awemeInfoClickCallBack($basePlayerContainer);
          });
          DOMUtils.prepend($xgRightGrid, $gmFilterParseBtn);
        }
      );
      // 直播间
      [
        ...Array.from($$<HTMLElement>('[data-e2e="feed-live"] xg-right-grid:not(:has(.gm-video-filter-parse-btn))')),
        ...Array.from(
          $$<HTMLElement>('[data-e2e="feed-live"] .douyin-player-controls-right:not(:has(.gm-video-filter-parse-btn))')
        ),
      ].forEach(($xgRightGrid) => {
        if (!utils.isVisible($xgRightGrid, false)) {
          return;
        }
        const $gmFilterParseBtn = createFilterParseButton();
        DOMUtils.on($gmFilterParseBtn, "click", async (event) => {
          DOMUtils.preventEvent(event);
          const $liveContainer = $xgRightGrid.closest<HTMLElement>('[data-e2e="feed-live"]')!;
          await awemeInfoClickCallBack($liveContainer);
        });
        DOMUtils.prepend($xgRightGrid, $gmFilterParseBtn);
      });
    });
    const observer = utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
    return [
      addStyle(/*css*/ `
      xg-icon .xg-tips{
        display: none;
      }
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
			}`),
      () => {
        DOMUtils.remove(".gm-video-filter-parse-btn");
        observer?.disconnect();
      },
    ];
  },
  /**
   * 获取规则视图实例
   */
  getRuleViewInstance() {
    const that = this;
    const panelHandlerComponents = pops.config.PanelHandlerComponents();
    /**
     * 存储配置
     */
    const generateStorageApi = (data: any) => {
      return {
        get(key: string, defaultValue: any) {
          return data[key] ?? defaultValue;
        },
        set(key: string, value: any) {
          data[key] = value;
        },
      };
    };
    /**
     * 通知更新规则实例
     */
    const notifyUpdateRuleInst = (rule?: DouYinVideoFilterRule) => {
      if (!rule) {
        // 此乃清空全部规则
      }
      // TODO
    };
    const ruleViewOption: RuleViewOption<DouYinVideoFilterRule> = {
      title: "视频过滤器",
      data: () => {
        return this.$data.videoFilterRuleStorage.getAllRule();
      },
      getAddData: () => {
        return this.getTemplateData();
      },
      getDataItemName: (data) => {
        return data.name;
      },
      updateData: (data) => {
        const setFlag = this.$data.videoFilterRuleStorage.setRule(data);
        notifyUpdateRuleInst(data);
        return setFlag;
      },
      deleteData: (data) => {
        const deleteFlag = this.$data.videoFilterRuleStorage.deleteRule(data);
        notifyUpdateRuleInst(data);
        return deleteFlag;
      },
      getData: (data) => {
        const allData = DouYinVideoFilter.$data.videoFilterRuleStorage.getAllRule();
        const findValue = allData.find((item) => item.uuid === data.uuid);
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
            ruleViewOption.updateData(data);
          },
        },
        edit: {
          enable: true,
          getView: (data, isEdit) => {
            const $fragment = document.createDocumentFragment();
            if (!isEdit) {
              data = this.getTemplateData();
            }

            // 启用
            const enable_template = UISwitch("启用", "enable", true);
            Reflect.set(enable_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            const { $el: $enable } = panelHandlerComponents.createSectionContainerItem_switch(enable_template);

            // 规则名称
            const name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
            Reflect.set(name_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            const { $el: $name } = panelHandlerComponents.createSectionContainerItem_input(name_template);

            // 作用域
            const scope_template = UISelectMultiple<DouYinVideoFilterRuleOptionScope>(
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
                ] as PopsPanelSelectMultipleConfig<DouYinVideoFilterRuleOptionScope>["data"]
              ).map((it) => {
                const result: PopsPanelSelectMultipleConfig<DouYinVideoFilterRuleOptionScope>["data"]["0"] = {
                  ...it,
                  value: it.value as DouYinVideoFilterRuleOptionScope,
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
            const { $el: $scope } = panelHandlerComponents.createSectionContainerItem_select_multiple(scope_template);

            // const autoSendDisLikeRequest_template = UISwitch(
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
            // const { $el: $autoSendDisLikeRequest } = panelHandlerComponents.createSectionContainerItem_switch(
            //   autoSendDisLikeRequest_template
            // );

            // 属性名列表
            const douYinVideoHandlerInfoKey = <(keyof DouYinVideoHandlerInfo)[]>[
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
              "productId",
              "productTitle",
              "videoBitRateList",
            ];

            /**
             * 生成动态的元素
             * @param storageData 存储的数据
             */
            const createDynamicItemNode = (
              storageData: DouYinVideoFilterRule["data"] | DouYinVideoFilterRuleDynamicOption
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
              const { $el: $ruleName } =
                panelHandlerComponents.createSectionContainerItem_select_multiple(ruleName_template);

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
              const { $el: $ownFunctionHandler } =
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
              const { $el: $ruleValue } =
                panelHandlerComponents.createSectionContainerItem_textarea(ruleValue_template);
              const $ruleValueLeftMainText = $ruleValue.querySelector<HTMLElement>(".pops-panel-item-left-main-text")!;
              const $ruleValueLeftDescText = $ruleValue.querySelector<HTMLElement>(".pops-panel-item-left-desc-text")!;

              // 备注
              const remarks_template = UITextArea("备注", "remarks", "", "", void 0);
              Reflect.set(remarks_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));
              const { $el: $remarks } = panelHandlerComponents.createSectionContainerItem_textarea(remarks_template);

              // 值初始化
              if (storageData.isFunctionHandler) {
                isFunctionHandler_template_valueChange(null, isFunctionHandler_template.getValue());
              }
              return [$ruleName, $ownFunctionHandler, $ruleValue, $remarks];
            };

            // 动态属性
            const $dynamicContainer = DOMUtils.createElement("div", {
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
            const $dynamicInner = $dynamicContainer.querySelector<HTMLElement>(".rule-form-ulist-dynamic__inner")!;
            const $addDynamicButton = $dynamicContainer.querySelector<HTMLButtonElement>(".pops-panel-button")!;

            /**
             * 添加动态项
             */
            const addDynamicElementItem = (
              dynamicData: DouYinVideoFilterRuleDynamicOption = {
                ruleName: [],
                isFunctionHandler: false,
                ruleValue: "",
                remarks: "",
              }
            ) => {
              const $dynamicUListContainer = DOMUtils.createElement("div", {
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
              const $dynamicDelete = $dynamicUListContainer.querySelector<HTMLDivElement>(".dynamic-control-delete")!;
              // 设置删除事件
              DOMUtils.on($dynamicDelete, "click", (event) => {
                DOMUtils.preventEvent(event);
                $dynamicUListContainer.remove();
                if (Array.isArray(data.dynamicData)) {
                  const findIndex = data.dynamicData.findIndex((it) => it == dynamicData);
                  if (findIndex !== -1) {
                    data.dynamicData.splice(findIndex, 1);
                  }
                }
              });
              /** 动态添加的项 */
              const $dynamicUList = $dynamicUListContainer.querySelector<HTMLUListElement>(".dynamic-forms")!;
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
          onsubmit: async ($form, isEdit, editData) => {
            // 提交表单
            const $ulist_li = $form.querySelectorAll<HTMLLIElement>(".rule-form-ulist > li");
            const data: DouYinVideoFilterRule = this.getTemplateData();
            if (isEdit) {
              data.uuid = editData!.uuid;
            }
            $ulist_li.forEach(($li) => {
              const viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
              if (!viewConfig) {
                return;
              }
              const attrs = Reflect.get(viewConfig, "attributes");
              if (!attrs) {
                return;
              }
              const storageApi = Reflect.get($li, PROPS_STORAGE_API);
              const key = Reflect.get(attrs, ATTRIBUTE_KEY);
              const defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
              const value = storageApi.get(key, defaultValue);
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
              const dynamicData = {} as DouYinVideoFilterRuleDynamicOption;
              $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
                const viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                if (!viewConfig) {
                  return;
                }
                const attrs = Reflect.get(viewConfig, "attributes");
                if (!attrs) {
                  return;
                }
                const storageApi = Reflect.get($li, PROPS_STORAGE_API);
                const key = Reflect.get(attrs, ATTRIBUTE_KEY);
                const defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                const value = storageApi.get(key, defaultValue);
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
              Qmsg.error((data.data.isFunctionHandler ? "自定义函数" : "属性值") + "不能为空");
              return {
                success: false,
                data: data,
              };
            }
            let successFlag: boolean = false;
            if (isEdit) {
              // 编辑、修改
              successFlag = Boolean(await ruleViewOption.updateData(data));
            } else {
              // 新增、添加
              successFlag = this.$data.videoFilterRuleStorage.addRule(data);
            }
            notifyUpdateRuleInst(data);
            return {
              success: successFlag,
              data: data,
            };
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
          deleteCallBack: async (data) => {
            return (await ruleViewOption.deleteData(data))!;
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
            this.$data.videoFilterRuleStorage.clearAllRule();
            notifyUpdateRuleInst();
          },
        },
      },
    };
    const ruleView = new RuleView(ruleViewOption);
    return ruleView;
  },
  /**
   * 显示视图
   */
  showView() {
    const ruleView = this.getRuleViewInstance();
    ruleView.showView(Panel.getValue("dy-video-ui-rule-filter-option-index"));
  },
  /**
   * 获取模板数据
   */
  getTemplateData(): DouYinVideoFilterRule {
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
