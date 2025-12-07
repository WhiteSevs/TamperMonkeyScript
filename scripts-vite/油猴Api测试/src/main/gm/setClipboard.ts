import { GM, GM_setClipboard } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import { TagUtil } from "@/setting/tag";
import Qmsg from "qmsg";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { CommonUtil } from "@components/utils/CommonUtil";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_setClipboard extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_setClipboard === "function";
  }
  public getApiName() {
    return "GM_setClipboard";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.setClipboard",
      isSupport: this.isSupportGM() && typeof GM.setClipboard === "function",
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
              if (typeof args[2] === "function") {
                const cb = args[2];
                args[2] = (...args2: any[]) => {
                  cb(...args2);
                  resolve(undefined);
                };
              }
              // @ts-ignore
              GM_setClipboard(...args);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: async (...args: any[]) => {
            const cb = args[2];
            // @ts-ignore
            await GM.setClipboard(...args);
            if (typeof cb === "function") {
              cb();
            }
          },
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        data.formList.push(
          UIInfo(() => {
            return {
              text: "复制内容到剪贴板：Test " + data.name,
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
                let timeId: number;
                DOMUtils.on($button, "click", async (event) => {
                  try {
                    DOMUtils.preventEvent(event);
                    clearTimeout(timeId);
                    Qmsg.info("等待3s内触发成功复制的回调");
                    timeId = setTimeoutLog(() => {
                      TagUtil.setTag(container.$leftText, "error", "不支持触发回调函数");
                    }, 3000);
                    await data.fn("Test " + data.name, "text", () => {
                      clearTimeout(timeId);
                      TagUtil.setTag(container.$leftText, "success", "支持触发回调函数");
                    });
                  } catch (error: any) {
                    Qmsg.error(error.toString());
                  }
                });
              },
            };
          })
        );
      });
    }
    return result;
  }
}
