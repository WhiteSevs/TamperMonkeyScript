import { GM, GM_setValues } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { DOMUtils, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";

export class ApiTest_setValues extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_setValues === "function";
  }
  public getApiName() {
    return "GM_setValues";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.setValues",
      isSupport: this.isSupportGM() && typeof GM.setValues === "function",
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
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
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
    if (this.isSupport()) {
      [
        {
          name: apiName,
          fn: async (...args: any[]) => {
            return new Promise<any>((resolve) => {
              // @ts-ignore
              const ret = GM_setValues(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.setValues,
          formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
        },
      ].forEach((data) => {
        let apiNameTag = data.name;

        data.formList.push(
          (() => {
            let localStorageDataValue = { foo: 1, bar: 2 };
            return UIInfo(() => {
              return {
                text: "测试存储对象",
                description: JSON.stringify(localStorageDataValue),
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
                      await data.fn(localStorageDataValue);
                      Qmsg.info("执行写入完毕，请自行查看是否成功写入");
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
