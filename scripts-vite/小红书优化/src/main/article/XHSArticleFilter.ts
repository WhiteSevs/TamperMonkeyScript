import { DOMUtils, log, pops, utils } from "@/env";
import { XHSNetworkHook } from "@/hook/XHSNetWorkHook";
import { UIInput } from "@components/setting/components/ui-input";
import { UISelectMultiple } from "@components/setting/components/ui-select-multiple";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UITextArea } from "@components/setting/components/ui-textarea";
import { Panel } from "@components/setting/panel";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "@components/setting/panel-config";
import { CommonUtil } from "@components/utils/CommonUtil";
import { RuleStorage } from "@components/utils/RuleStorage";
import { RuleView } from "@components/utils/RuleView";
import type { PopsPanelSelectMultipleConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-selectMultiple";
import Utils from "@whitesev/utils";
import type { UtilsAjaxHookRequestOptions } from "@whitesev/utils/dist/types/src/types/ajaxHooker";
import Qmsg from "qmsg";
import { XHSArticleFilterBase } from "./XHSArticleFilterBase";

type XHSArticleFilterOptionScope = "all" | "xhr-explore";

/** 过滤器规则-动态属性 */
export type XHSArticleFilterDynamicOption = {
  /** 属性名 */
  ruleName: keyof XHSArticleHandlerInfo | (keyof XHSArticleHandlerInfo)[];
  /** 属性值 */
  ruleValue: string;
  /** 备注 */
  remarks: string;
};

/** 过滤器规则 */
export type XHSArticleFilterOption = {
  /** 是否启用 */
  enable: boolean;
  /** 唯一uuid */
  uuid: string;
  /** 规则名 */
  name: string;
  /** 配置的数据 */
  data: {
    /** 作用域（让规则在哪个下面生效） */
    scope: XHSArticleFilterOptionScope[];
    /** 是否自动发送不感兴趣的请求 */
    // autoSendDisLikeRequest: boolean;
  } & XHSArticleFilterDynamicOption;
  /** 动态添加的数据 */
  dynamicData?: XHSArticleFilterDynamicOption[];
};

export const XHSArticleFilter = {
  $key: {
    ENABLE_KEY: "shieldVideo-exec-network-enable",
  },
  $data: {
    /** 已经过滤的信息 */
    isFilterAwemeInfoList: new Utils.Dictionary<string, XHSArticleFilterOption[]>(),
    /**
     * 网络接口的视频信息字典
     */
    articleInfoMap: new Utils.Dictionary<
      string,
      {
        /** 网络接口的原始视频信息 */
        articleInfo: XHSArticleInfo;
        /** 解析出的所需的信息 */
        transformArticleInfo: XHSArticleHandlerInfo;
      }
    >(),
    __videoFilterRuleStorage: null as null | RuleStorage<XHSArticleFilterOption>,
    get videoFilterRuleStorage() {
      if (this.__videoFilterRuleStorage == null) {
        this.__videoFilterRuleStorage = new RuleStorage<XHSArticleFilterOption>({
          STORAGE_API_KEY: "xhs-article-filter-rule",
        });
      }
      return this.__videoFilterRuleStorage;
    },
    /**
     * 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
     */
    get isReverse() {
      return Panel.getValue<boolean>("xhs-article-filter-only-show-filtered-video");
    },
  },
  init() {
    this.execFilter();
  },
  /**
   * 执行过滤
   */
  execFilter() {
    Panel.execMenuOnce(this.$key.ENABLE_KEY, async () => {
      log.info(`执行笔记过滤器`);
      let filterBase = new XHSArticleFilterBase();
      /** 获取接口信息后的回调 */
      let checkFilterCallBack = (
        filterTransformInfoResult: ReturnType<(typeof XHSArticleFilterBase)["prototype"]["checkInfoIsFilter"]>
      ) => {
        // 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
        // 并添加记录
        if (this.$data.isReverse) {
          filterTransformInfoResult.isFilter = !filterTransformInfoResult.isFilter;
          if (
            typeof filterTransformInfoResult.transformInfo.articleId === "string" &&
            filterTransformInfoResult.matchedFilterOption
          ) {
            let filterOptionList: XHSArticleFilterOption[] =
              this.$data.isFilterAwemeInfoList.get(filterTransformInfoResult.transformInfo.articleId) || [];
            filterOptionList.push(filterTransformInfoResult.matchedFilterOption);
            this.$data.isFilterAwemeInfoList.set(filterTransformInfoResult.transformInfo.articleId, filterOptionList);
          }
        }

        // 添加映射
        if (typeof filterTransformInfoResult.transformInfo.articleId === "string") {
          this.$data.articleInfoMap.set(filterTransformInfoResult.transformInfo.articleId, {
            articleInfo: filterTransformInfoResult.info,
            transformArticleInfo: filterTransformInfoResult.transformInfo,
          });
        }
      };
      /**
       * 获取作用域的规则
       */
      let queryScopeFilterOptionList = (scopeName: XHSArticleFilterOptionScope) => {
        if (!Panel.getValue(this.$key.ENABLE_KEY)) {
          return [];
        }
        let filterOptionList = this.$data.videoFilterRuleStorage.getAllRule();
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
                it.data.scope.includes(item as any as XHSArticleFilterOptionScope)
              ) !== -1)
        );
        return matchedFilterOptionList;
      };
      /**
       * 类型1接口结果的hook
       */
      let xhr_hook_callback_1 = (scopeName: XHSArticleFilterOptionScope, request: UtilsAjaxHookRequestOptions) => {
        request.response = (response) => {
          let filterOptionList = queryScopeFilterOptionList(scopeName);
          if (!filterOptionList.length) {
            return;
          }
          let data = utils.toJSON(response.responseText);
          let items = data?.["data"]?.["items"];
          if (Array.isArray(items)) {
            for (let index = 0; index < items.length; index++) {
              let awemeInfo: XHSArticleInfo = items[index] || {};
              let filterResult = filterBase.checkInfoIsFilter(filterOptionList, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.removeArticle(items, index--);
              }
            }
            if (import.meta.hot) {
              console.log(items);
            }
            response.responseText = JSON.stringify(data);
          }
        };
      };
      XHSNetworkHook.ajaxHooker.hook((request) => {
        let url = CommonUtil.fixUrl(request.url);
        let urlInst = new URL(url);
        if (urlInst.pathname.startsWith("/api/sns/web/v1/homefeed")) {
          // 发现
          xhr_hook_callback_1("xhr-explore", request);
        }
      });
    });
  },
  /**
   * 获取模板数据
   */
  getTemplateData(): XHSArticleFilterOption {
    // .note_card.type === "video"
    // .note_card.video.capa.duration
    return {
      uuid: utils.generateUUID(),
      enable: true,
      name: "",
      data: {
        scope: [],
        ruleName: "display_title",
        ruleValue: "",
        remarks: "",
      },
      dynamicData: [],
    };
  },
  /**
   * 显示视图
   */
  showView() {
    let ruleView = this.getRuleViewInstance();
    ruleView.showView();
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
      title: "笔记过滤器",
      data: () => {
        return this.$data.videoFilterRuleStorage.getAllRule();
      },
      getAddData: () => {
        return this.getTemplateData();
      },
      getDataItemName: (data) => {
        return data["name"];
      },
      updateData: (data) => {
        return this.$data.videoFilterRuleStorage.setRule(data);
      },
      deleteData: (data) => {
        return this.$data.videoFilterRuleStorage.deleteRule(data);
      },
      getData: (data) => {
        let allData = this.$data.videoFilterRuleStorage.getAllRule();
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
            this.$data.videoFilterRuleStorage.setRule(data);
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
            let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template).$el;

            // 规则名称
            let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
            Reflect.set(name_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $name = panelHandlerComponents.createSectionContainerItem_input(name_template).$el;

            // 作用域
            let scope_template = UISelectMultiple<XHSArticleFilterOptionScope>(
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
                    text: "发现",
                    value: "xhr-explore",
                  },
                ] as PopsPanelSelectMultipleConfig<XHSArticleFilterOptionScope>["data"]
              ).map((it) => {
                let result: PopsPanelSelectMultipleConfig<XHSArticleFilterOptionScope>["data"]["0"] = {
                  ...it,
                  value: it.value as XHSArticleFilterOptionScope,
                };
                return result;
              }),
              void 0,
              "选择需要在xxx上生效的作用域"
            );
            Reflect.set(scope_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $scope = panelHandlerComponents.createSectionContainerItem_select_multiple(scope_template).$el;

            // 属性名列表
            let keyNameHandlerInfo = <(keyof XHSArticleHandlerInfo)[]>[
              "display_title",
              "isLike",
              "liked_count",
              "nick_name",
              "user_id",
              "isVideo",
              "videoDuration",
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
              let ruleName_template = UISelectMultiple<keyof XHSArticleHandlerInfo>(
                "属性名",
                "ruleName",
                ruleNameDefaultValue,
                keyNameHandlerInfo.map((item) => {
                  return {
                    text: item,
                    value: item,
                  };
                }),
                void 0,
                "选择需要的属性名 "
              );
              Reflect.set(ruleName_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));

              // 属性值
              let $ruleName = panelHandlerComponents.createSectionContainerItem_select_multiple(ruleName_template).$el;

              let ruleValue_template = UITextArea("属性值", "ruleValue", "", "如果是字符串，可正则，注意转义", void 0);
              Reflect.set(ruleValue_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));
              let $ruleValue = panelHandlerComponents.createSectionContainerItem_textarea(ruleValue_template).$el;

              // 备注
              let remarks_template = UITextArea("备注", "remarks", "", "", void 0);
              Reflect.set(remarks_template.props!, PROPS_STORAGE_API, generateStorageApi(storageData));
              let $remarks = panelHandlerComponents.createSectionContainerItem_textarea(remarks_template).$el;

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
								<button class="pops-panel-button_inner" data-type="default">
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
              dynamicData: XHSArticleFilterDynamicOption = {
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
											<button class="pops-panel-button_inner" data-type="danger">
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
            let $ulist_li = $form.querySelectorAll<HTMLLIElement>(".rule-form-ulist > li");
            let data: XHSArticleFilterOption = this.getTemplateData();
            if (isEdit) {
              data.uuid = editData!.uuid;
            }
            $ulist_li.forEach(($li) => {
              let viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
              if (!viewConfig) {
                return;
              }
              let attrs = Reflect.get(viewConfig, "attributes");
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
              let dynamicData = {} as XHSArticleFilterDynamicOption;
              $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
                let viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                if (!viewConfig) {
                  return;
                }
                let attrs = Reflect.get(viewConfig, "attributes");
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
              name: "启用",
              value: "enable",
              filterCallBack(data) {
                return data.enable;
              },
            },
            {
              name: "未启用",
              value: "notEnable",
              filterCallBack(data) {
                return !data.enable;
              },
            },
          ],
          inputOption: [
            {
              name: "规则名称",
              value: "name",
              filterCallBack(data, value) {
                return !!data.name.match(value);
              },
            },
            {
              name: "备注",
              value: "remarks",
              filterCallBack(data, value) {
                let flag = !!data.data.remarks.match(value);
                if (!flag) {
                  flag = !!data.dynamicData?.find((it) => {
                    return !!it.remarks.match(value);
                  });
                }
                return flag;
              },
            },
          ],
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
};
