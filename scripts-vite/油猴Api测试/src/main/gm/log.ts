import { GM, GM_log } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_log extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_log === "function";
  }
  public getApiName() {
    return "GM_log";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.log",
      isSupport: this.isSupportGM() && typeof GM.log === "function",
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
              const ret = GM_log(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.log,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        let apiNameTag = data.name;

        data.formList.push(
          UIInfo(() => {
            try {
              let logText = "test " + data.name;
              return {
                text: CommonUtil.escapeHtml("请在控制台查看输出"),
                tag: "info",
                description: "test " + data.name,
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
                    DOMUtils.preventEvent(event);
                    try {
                      await data.fn(logText);
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
            } finally {
            }
          })
        );
      });
    }
    return result;
  }
}
