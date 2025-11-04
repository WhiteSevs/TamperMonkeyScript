import { GM, GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { DOMUtils, utils } from "@/env";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_deleteValue extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_deleteValue === "function";
  }
  public getApiName() {
    return "GM_deleteValue";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.deleteValue",
      isSupport: this.isSupportGM() && typeof GM.deleteValue === "function",
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
              apiAsyncInfo.name
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
              const ret = GM_deleteValue(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.deleteValue,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        let apiNameTag = data.name;

        data.formList.push(
          (() => {
            let localStorageDataKey = `Test ${apiNameTag} null`;
            let localStorageDataValue = null;
            return UIInfo(() => {
              return {
                text: "测试存储null值并删除",
                description: `"${localStorageDataKey}": ${localStorageDataValue}`,
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
                  DOMUtils.on($button, "click", async (event) => {
                    DOMUtils.preventEvent(event);
                    try {
                      GM_setValue(localStorageDataKey, localStorageDataValue);
                      await data.fn(localStorageDataKey);
                      let value = GM_getValue(localStorageDataKey);
                      if (typeof value === "object" && value === null) {
                        Qmsg.error("该值未删除，读取的值：" + value);
                      } else {
                        Qmsg.success("成功删除该值");
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
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
