import { GM, GM_addValueChangeListener, GM_setValue } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";
import { DOMUtils, utils } from "@/env";
import { Tag, TagUtil } from "@/setting/tag";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_addValueChangeListener extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_addValueChangeListener === "function";
  }
  public getApiName() {
    return "GM_addValueChangeListener";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.addValueChangeListener",
      isSupport: this.isSupportGM() && typeof GM.addValueChangeListener === "function",
    };
  }
  public getUIOption() {
    const that = this;
    let apiName = this.getApiName();
    let apiAsyncInfo = this.getAsyncApiOption();

    let result: PopsPanelContentConfig = {
      id: "aside-" + apiName,
      title: "" + apiName,
      headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName, `${apiName} & ${apiAsyncInfo.name}`)}`,
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
      },
      clickCallback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
      },
      views: [
        {
          type: "container",
          text: "函数测试",
          views: [
            UIInfo(() =>
              this.isSupport()
                ? {
                    text: "支持 " + apiName,
                    tag: "success",
                  }
                : {
                    text: "不支持 " + apiName,
                    tag: "error",
                  }
            ),
            UIInfo(() =>
              apiAsyncInfo.isSupport
                ? {
                    text: "支持 " + apiAsyncInfo.name,
                    tag: "success",
                  }
                : {
                    text: "不支持 " + apiAsyncInfo.name,
                    tag: "error",
                  }
            ),
          ],
        },
        {
          type: "container",
          text: "功能测试",
          views: [],
        },
        {
          type: "container",
          text: "功能测试（异步）",
          views: [],
        },
      ],
    };
    if (this.isSupport()) {
      [
        {
          name: apiName,
          fn: async (...args: any[]) => {
            return new Promise<any>((resolve) => {
              // @ts-ignore
              const ret = GM_addValueChangeListener(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.addValueChangeListener,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        let apiNameTag = data.name;

        data.formList.push(
          (() => {
            let localStorageDataKey = apiNameTag + "_key_1";
            return UIInfo(() => {
              return {
                text: "测试监听数据存储改变",
                description: ``,
                tag: "info",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,
                    false,
                    false
                  );
                  DOMUtils.after(container.$leftContainer, $button);
                  // 点击事件
                  let timeoutId: undefined | number = void 0;
                  let listenerId: undefined | string | number = void 0;
                  let tagTextList: {
                    tag: keyof typeof Tag;
                    text?: string;
                  }[] = [];
                  DOMUtils.on($button, "click", async (event) => {
                    DOMUtils.preventEvent(event);
                    try {
                      tagTextList.length = 0;
                      clearTimeout(timeoutId);
                      TagUtil.setTag(container.$leftText, "info", "等待触发回调");
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);
                      let delaySetValue = utils.formatTime(Date.now());
                      listenerId =
                        listenerId ??
                        (await data.fn(
                          localStorageDataKey,
                          function (key: string, oldValue: any, newValue: any, remote: any) {
                            console.log(arguments);
                            clearTimeout(timeoutId);
                            tagTextList.push({
                              tag: "success",
                              text: "支持触发回调",
                            });
                            if (typeof key !== "string") {
                              tagTextList.push({
                                tag: "error",
                                text: `不支持回调参数key，当前类型：${typeof key}`,
                              });
                            } else {
                              tagTextList.push({
                                tag: "success",
                                text: `支持回调参数key，当前类型：${typeof key}`,
                              });
                            }
                            if (typeof newValue !== typeof delaySetValue) {
                              tagTextList.push({
                                tag: "error",
                                text: `不支持回调参数newValue，当前类型：${typeof delaySetValue}`,
                              });
                            } else {
                              tagTextList.push({
                                tag: "success",
                                text: `支持回调参数newValue，当前类型：${typeof delaySetValue}`,
                              });
                            }
                            if (typeof remote !== "boolean") {
                              tagTextList.push({
                                tag: "error",
                                text: `不支持回调参数remote，当前类型：${typeof remote}`,
                              });
                            } else {
                              tagTextList.push({
                                tag: "success",
                                text: `支持回调参数remote，当前类型：${typeof remote}`,
                              });
                            }
                            TagUtil.setTagList(container.$leftText, tagTextList);
                          }
                        ));
                      console.log(data.name + " listenerId：" + listenerId + " typeof：" + typeof listenerId);
                      if (typeof listenerId !== "number" && typeof listenerId !== "string") {
                        tagTextList.push({
                          tag: "warn",
                          text: "listenerId类型不是number或string",
                        });
                      } else {
                        tagTextList.push({
                          tag: "success",
                          text: "listenerId类型：" + typeof listenerId,
                        });
                      }
                      timeoutId = setTimeout(() => {
                        tagTextList.push({
                          tag: "error",
                          text: "不支持触发回调",
                        });
                        TagUtil.setTagList(container.$leftText, tagTextList);
                      }, 3000);
                      GM_setValue(localStorageDataKey, delaySetValue);
                    } catch (error: any) {
                      Qmsg.error(error.toString());
                    }
                  });
                },
              };
            });
          })()
        );
      });
    }
    return result;
  }
}
