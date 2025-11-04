import { GM, GM_openInTab, unsafeWindow } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";
import { TagUtil } from "@/setting/tag";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_openInTab extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_openInTab === "function";
  }
  public getApiName() {
    return "GM_openInTab";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.openInTab",
      isSupport: this.isSupportGM() && typeof GM.openInTab === "function",
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
              const ret = GM_openInTab(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.openInTab,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        data.formList.push(
          UIInfo(() => {
            try {
              return {
                text: "后台打开：https://www.example.com/",
                tag: "info",
                afterRender(container) {
                  let $target = container.target!;
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
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);
                      let result = await data.fn("https://www.example.com/");
                      if (typeof result === "object") {
                        if (result == null) {
                          TagUtil.setTag(container.$leftText, "error", "返回值为null");
                        } else {
                          let support_close = "close" in result && typeof result.close === "function";
                          let support_closed = "closed" in result && typeof result.closed === "boolean";
                          let support_onclose = "onclose" in result;

                          DOMUtils.html(
                            container.$leftText,
                            /*html*/ `
													${support_close ? `<p class="success">支持 .close()</p>` : `<p class="error">不支持 .close()</p>`}
													${support_closed ? `<p class="success">支持 .closed</p>` : `<p class="error">不支持 .closed</p>`}
													${support_onclose ? `<p class="success">支持设置属性 .onclose</p>` : `<p class="error">不支持设置属性 .onclose</p>`}
										`
                          );
                        }
                      } else {
                        TagUtil.setTag(container.$leftText, "error", "返回值不是对象：" + typeof result);
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
                    }
                  });
                  DOMUtils.after(container.$leftContainer, $button);
                },
              };
            } catch (error) {
              console.error(error);
              return {
                text: "执行错误 " + error,
                tag: "error",
              };
            }
          }),
          UIInfo(() => {
            try {
              return {
                text: "配置 active: true",
                description: "",
                tag: "info",
                afterRender(container) {
                  let $target = container.target!;
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
                  let timeId: number;
                  let blurEvent = () => {
                    clearTimeout(timeId);
                    TagUtil.setTag(container.$leftText, "success", "测试新标签页打开成功");
                  };
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      DOMUtils.off(unsafeWindow, "blur", blurEvent, {
                        capture: true,
                      });
                      clearTimeout(timeId);
                      TagUtil.setTag(container.$leftText, "info", "等待页面失去焦点...");
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);

                      DOMUtils.on(unsafeWindow, "blur", blurEvent, {
                        capture: true,
                        once: true,
                      });
                      await data.fn("https://www.example.com/", {
                        active: true,
                      });
                      timeId = setTimeoutLog(() => {
                        DOMUtils.off(unsafeWindow, "blur", blurEvent, {
                          capture: true,
                        });
                        TagUtil.setTag(container.$leftText, "error", "测试超时，未打开新标签页并获取焦点");
                      }, 3000);
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
                    }
                  });
                  DOMUtils.after(container.$leftContainer, $button);
                },
              };
            } catch (error) {
              console.error(error);
              return {
                text: "执行错误 " + error,
                tag: "error",
              };
            }
          }),
          UIInfo(() => {
            try {
              return {
                text: "测试调用返回值 .close()",
                tag: "info",
                afterRender(container) {
                  let $target = container.target!;
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
                  let timeId: number;
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      clearTimeout(timeId);
                      TagUtil.setTag(container.$leftText, "info", "等待调用 .close()");
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);
                      let result = await data.fn("https://www.example.com/");
                      if (result && typeof result?.close === "function") {
                        timeId = setTimeoutLog(() => {
                          try {
                            result.close();
                            TagUtil.setTag(container.$leftText, "success", "成功调用 .close()");
                          } catch (error) {
                            TagUtil.setTag(container.$leftText, "error", "调用 .close() 方法失败 " + error);
                          }
                        }, 1000);
                      } else {
                        TagUtil.setTag(container.$leftText, "error", "返回对象中不支持 .close() 方法");
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
                    }
                  });
                  DOMUtils.after(container.$leftContainer, $button);
                },
              };
            } catch (error) {
              console.error(error);
              return {
                text: "执行错误 " + error,
                tag: "error",
              };
            }
          }),
          UIInfo(() => {
            try {
              return {
                text: "测试监听关闭是否生效 .onclose",
                tag: "info",
                afterRender(container) {
                  let $target = container.target!;
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
                  let timeId: number;
                  let timeId2: number;
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      clearTimeout(timeId2);
                      clearTimeout(timeId);
                      TagUtil.setTag(container.$leftText, "info", "等待触发监听 .onclose");
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);
                      let result = await data.fn("https://www.example.com/");
                      if (typeof result === "object" && result != null) {
                        result.onclose = () => {
                          clearTimeout(timeId);
                          clearTimeout(timeId2);
                          TagUtil.setTag(container.$leftText, "success", "成功触发 .onclose");
                        };
                      }
                      if (result && typeof result?.close === "function") {
                        timeId = setTimeoutLog(() => {
                          try {
                            result.close();
                            timeId2 = setTimeoutLog(() => {
                              TagUtil.setTag(container.$leftText, "error", "测试超时，未触发回调 .onclose");
                            }, 2000);
                          } catch (error) {
                            TagUtil.setTag(container.$leftText, "error", "调用 .close() 方法失败 " + error);
                          }
                        }, 1000);
                      } else {
                        TagUtil.setTag(container.$leftText, "error", "返回对象中不支持 .close() 方法");
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
                    }
                  });
                  DOMUtils.after(container.$leftContainer, $button);
                },
              };
            } catch (error) {
              console.error(error);
              return {
                text: "执行错误 " + error,
                tag: "error",
              };
            }
          })
        );
      });
    }
    return result;
  }
}
