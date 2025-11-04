import { GM, GM_xmlhttpRequest } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { DOMUtils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_xmlHttpRequest extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_xmlhttpRequest === "function";
  }
  public getApiName() {
    return "GM_xmlhttpRequest";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.xmlHttpRequest",
      isSupport: this.isSupportGM() && typeof GM.xmlHttpRequest === "function",
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
      ],
    };
    if (this.isSupport()) {
      (<PopsPanelContainerConfig>result["views"][1]).views.push(
        UIInfo(() => {
          try {
            return {
              text: CommonUtil.escapeHtml("TODO"),
              tag: "info",
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
    }
    return result;
  }
}
