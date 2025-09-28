import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types";
import { GM, GM_audio } from "ViteGM";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";
import Qmsg from "qmsg";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { Tag, TagUtil } from "@/setting/tag";
import type { QmsgMsg } from "qmsg/dist/src/QmsgInst";

export class ApiTest_audio extends ApiAsyncTestBase {
  public isSupport() {
    return (
      (typeof GM_audio === "object" || typeof GM_audio === "function") &&
      GM_audio != null &&
      typeof GM_audio?.setMute === "function" &&
      typeof GM_audio?.getState === "function" &&
      typeof GM_audio?.addStateChangeListener === "function" &&
      typeof GM_audio?.removeStateChangeListener === "function"
    );
  }
  public getApiOption() {
    let isSupport = this.isSupport();
    return {
      isSupport_setMute: isSupport && typeof GM_audio?.setMute === "function",
      isSupport_getState: isSupport && typeof GM_audio?.getState === "function",
      isSupport_addStateChangeListener: isSupport && typeof GM_audio?.addStateChangeListener === "function",
      isSupport_removeStateChangeListener: isSupport && typeof GM_audio?.removeStateChangeListener === "function",
    };
  }
  public getApiName() {
    return "GM_audio";
  }
  public getAsyncApiOption() {
    let isSupportAsync =
      this.isSupportGM() &&
      (typeof GM.audio === "object" || typeof GM.audio === "function") &&
      GM.audio != null &&
      typeof GM.audio?.setMute === "function" &&
      typeof GM.audio?.getState === "function" &&
      typeof GM.audio?.addStateChangeListener === "function" &&
      typeof GM.audio?.removeStateChangeListener === "function";
    return {
      name: "GM.audio",
      isSupport: isSupportAsync,
      isSupport_setMute: isSupportAsync && typeof GM.audio?.setMute === "function",
      isSupport_getState: isSupportAsync && typeof GM.audio?.getState === "function",
      isSupport_addStateChangeListener: isSupportAsync && typeof GM.audio?.addStateChangeListener === "function",
      isSupport_removeStateChangeListener: isSupportAsync && typeof GM.audio?.removeStateChangeListener === "function",
    };
  }
  public getUIOption() {
    const that = this;
    let apiName = this.getApiName();
    let apiInfo = this.getApiOption();
    let apiAsyncInfo = this.getAsyncApiOption();

    let result: PopsPanelContentConfig = {
      id: "aside-" + apiName,
      title: "" + apiName,
      headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName + ".setMute", `${apiName} & ${apiAsyncInfo.name}`)}`,
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
      },
      clickCallback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
      },
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
            UIInfo(() =>
              this.isSupport()
                ? {
                    text: `支持 ${apiName}，类型：${typeof GM_audio}`,
                    tag: "success",
                  }
                : {
                    text: "不支持 " + apiName,
                    tag: "error",
                  }
            ),
          ],
        },
        {
          type: "forms",
          text: "功能测试",
          forms: [],
        },
        {
          type: "forms",
          text: "功能测试（异步）",
          forms: [],
        },
      ],
    };
    let firstFormList = (result["forms"][0] as any).forms as PopsPanelFormsTotalDetails[];
    if (this.isSupport()) {
      firstFormList.push(
        UIInfo(() => {
          return apiInfo.isSupport_setMute
            ? {
                text: `支持 ${apiName}.setMute`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiName}.setMute`,
                tag: "error",
              };
        }),
        UIInfo(() => {
          return apiInfo.isSupport_getState
            ? {
                text: `支持 ${apiName}.getState`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiName}.getState`,
                tag: "error",
              };
        }),
        UIInfo(() => {
          return apiInfo.isSupport_addStateChangeListener
            ? {
                text: `支持 ${apiName}.addStateChangeListener`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiName}.addStateChangeListener`,
                tag: "error",
              };
        }),
        UIInfo(() => {
          return apiInfo.isSupport_removeStateChangeListener
            ? {
                text: `支持 ${apiName}.removeStateChangeListener`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiName}.removeStateChangeListener`,
                tag: "error",
              };
        })
      );
    }
    if (apiAsyncInfo.isSupport) {
      firstFormList.push(
        UIInfo(() => {
          return apiAsyncInfo.isSupport_setMute
            ? {
                text: `支持 ${apiAsyncInfo.name}.setMute`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiAsyncInfo.name}.setMute`,
                tag: "error",
              };
        }),
        UIInfo(() => {
          return apiAsyncInfo.isSupport_getState
            ? {
                text: `支持 ${apiAsyncInfo.name}.getState`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiAsyncInfo.name}.getState`,
                tag: "error",
              };
        }),
        UIInfo(() => {
          return apiAsyncInfo.isSupport_addStateChangeListener
            ? {
                text: `支持 ${apiAsyncInfo.name}.addStateChangeListener`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiAsyncInfo.name}.addStateChangeListener`,
                tag: "error",
              };
        }),
        UIInfo(() => {
          return apiAsyncInfo.isSupport_removeStateChangeListener
            ? {
                text: `支持 ${apiAsyncInfo.name}.removeStateChangeListener`,
                tag: "success",
              }
            : {
                text: `不支持 ${apiAsyncInfo.name}.removeStateChangeListener`,
                tag: "error",
              };
        })
      );
    } else {
      firstFormList.push(
        UIInfo(() => {
          return { text: "不支持 " + apiAsyncInfo.name, tag: "error" };
        })
      );
    }

    if (this.isSupport()) {
      [
        {
          name: apiName,
          setMute: async (...args: any[]) => {
            return new Promise<any>((resolve, reject) => {
              const [details, cb] = args;
              GM_audio.setMute(details, (error: Error | undefined) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(void 0);
                }
              });
            });
          },
          getState: async (...args: any[]) => {
            return new Promise<any>((resolve, reject) => {
              const [details, cb] = args;
              GM_audio.getState((info: any) => {
                if (!info) reject(new Error("failed to read state"));
                resolve(info);
              });
            });
          },
          addStateChangeListener: async (...args: any[]) => {
            return new Promise<any>((resolve, reject) => {
              const [cb] = args;
              GM_audio.addStateChangeListener(cb, (err: Error | undefined) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(void 0);
                }
              });
            });
          },
          removeStateChangeListener: async (...args: any[]) => {
            return new Promise<any>((resolve, reject) => {
              const [cb] = args;
              GM_audio.removeStateChangeListener(cb, (err: Error | undefined) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(void 0);
                }
              });
            });
          },
          formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
        },
        {
          name: apiAsyncInfo.name,
          setMute: async (...args: any[]) => {
            const [details] = args;
            const stat = await GM.audio?.setMute(details);
            return stat;
          },
          getState: async (...args: any[]) => {
            const stat = await GM.audio?.getState();
            if (typeof stat === "object" && stat != null) {
              if (typeof stat?.isMuted !== "boolean") {
                throw new Error("GM.audio.getState 返回值类型错误");
              }
              return stat;
            } else {
              throw new Error("返回值不是一个对象");
            }
          },
          addStateChangeListener: GM.audio?.addStateChangeListener,
          removeStateChangeListener: GM.audio?.removeStateChangeListener,
          formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
        },
      ].forEach((data) => {
        let apiNameTag = data.name;

        data.formList.push(
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("测试设置当前tab静音"),
                tag: "info",
                description: "点击按钮进行测试",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,
                    false,
                    false
                  );
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      const stat = await data.setMute({ isMuted: true });
                      console.log(data.name + ".setMute result：", stat);
                      if (stat === void 0) {
                        TagUtil.setTag(container.$leftText, "success", "执行成功");
                      } else {
                        TagUtil.setTag(container.$leftText, "warn", "执行成功，但返回值类型不同：" + stat);
                      }
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);
                    } catch (error: any) {
                      Qmsg.error(error.toString(), {
                        consoleLogContent: true,
                      });
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
            } finally {
            }
          }),
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("测试取消当前tab静音"),
                tag: "info",
                description: "点击按钮进行测试",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
                                        <div class="pops-panel-button pops-panel-button-no-icon">
                                            <button class="pops-panel-button_inner" type="button" data-type="default">
                                                <i class="pops-bottom-icon" is-loading="false"></i>
                                                <span class="pops-panel-button-text">点击执行</span>
                                            </button>
                                        </div>
                                        `,
                    false,
                    false
                  );
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      const state = await data.setMute({ isMuted: false });
                      console.log(data.name + ".setMute result：", state);
                      if (state === void 0) {
                        TagUtil.setTag(container.$leftText, "success", "执行成功");
                      } else {
                        TagUtil.setTag(container.$leftText, "warn", "执行成功，但返回值类型不同：" + state);
                      }
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);
                    } catch (error: any) {
                      Qmsg.error(error.toString(), {
                        consoleLogContent: true,
                      });
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
            } finally {
            }
          }),
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("获取当前tab静音状态信息"),
                tag: "info",
                description: "点击按钮进行测试",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,
                    false,
                    false
                  );
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      const stateInfo = await data.getState();
                      console.log(data.name + ".getState result：", stateInfo);
                      if (typeof stateInfo === "object" && stateInfo !== null) {
                        const propSupport: string[] = [];
                        if (typeof stateInfo?.isMuted === "boolean") {
                          propSupport.push(/*html*/ `
                                                        <p class="support-info success">支持属性：isMuted，当前类型：${typeof stateInfo?.isMuted}</p>    
                                                    `);
                        } else {
                          propSupport.push(/*html*/ `
                                                        <p class="support-info error">不支持属性：isMuted，当前类型：${typeof stateInfo?.isMuted}</p>    
                                                    `);
                        }
                        if (
                          ("muteReason" in stateInfo && typeof stateInfo?.muteReason === "string") ||
                          stateInfo?.muteReason === void 0
                        ) {
                          propSupport.push(/*html*/ `
                                                        <p class="support-info success">支持属性：muteReason，当前类型：${typeof stateInfo?.muteReason}</p>    
                                                    `);
                        } else {
                          propSupport.push(/*html*/ `
                                                        <p class="support-info error">不支持属性：muteReason，当前类型：${typeof stateInfo?.muteReason}</p>    
                                                    `);
                        }
                        if (typeof stateInfo?.isAudible === "boolean") {
                          propSupport.push(/*html*/ `
                                                        <p class="support-info success">支持属性：isAudible，当前类型：${typeof stateInfo?.isAudible}</p>
                                                    `);
                        } else {
                          propSupport.push(/*html*/ `
                                                        <p class="support-info error">不支持属性：isAudible，当前类型：${typeof stateInfo?.isAudible}</p>
                                                    `);
                        }
                        TagUtil.setTag(container.$leftText, "success", propSupport.join("\n"));
                      } else {
                        TagUtil.setTag(container.$leftText, "error", "返回值类型错误：" + typeof stateInfo);
                      }
                      DOMUtils.text(container.$leftDesc, this.text);
                      DOMUtils.show(container.$leftDesc, false);
                      alert(JSON.stringify(stateInfo, null, 4));
                    } catch (error: any) {
                      Qmsg.error(error.toString(), {
                        consoleLogContent: true,
                      });
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
            } finally {
            }
          }),
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("测试监听静音状态改变"),
                tag: "info",
                description: "点击按钮进行测试",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,
                    false,
                    false
                  );
                  let timeId;
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      await data.addStateChangeListener((statusInfo: any) => {
                        console.log(data.name + ".addStateChangeListener callback change value：", statusInfo);
                        alert(JSON.stringify(statusInfo, null, 4));
                      });
                      await utils.sleep(500);
                      await data.setMute({ isMuted: true });
                      await utils.sleep(500);
                      await data.setMute({ isMuted: false });
                    } catch (error: any) {
                      Qmsg.error(error.toString(), {
                        consoleLogContent: true,
                      });
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
            } finally {
            }
          }),
          UIInfo(() => {
            try {
              return {
                text: CommonUtil.escapeHtml("测试移除监听器"),
                tag: "info",
                description: "点击按钮进行测试",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">点击执行</span>
										</button>
									</div>
									`,
                    false,
                    false
                  );
                  let isSuccessRemove = true;
                  let $loading: QmsgMsg;
                  DOMUtils.on($button, "click", async (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      let listener = (statusInfo: any) => {
                        isSuccessRemove = false;
                        Qmsg.error("移除监听器失败");
                      };
                      $loading = Qmsg.loading("处理监听器中...");
                      await data.addStateChangeListener(listener);
                      await data.removeStateChangeListener(listener);
                      $loading.setText("等待500ms，设置当前Tab静音");
                      await utils.sleep(500);
                      await data.setMute({ isMuted: true });
                      $loading.setText("等待500ms，设置当前Tab取消静音");
                      await utils.sleep(500);
                      await data.setMute({ isMuted: false });
                      $loading.close();
                      if (isSuccessRemove) {
                        Qmsg.success("移除监听器成功");
                      }
                    } catch (error: any) {
                      $loading?.close();
                      Qmsg.error(error.toString(), {
                        consoleLogContent: true,
                      });
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
            } finally {
            }
          })
        );
      });
    }
    return result;
  }
}
