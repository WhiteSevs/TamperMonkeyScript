import { GreasyforkApi } from "@/api/GreasyForkApi";
import { DOMUtils, log, pops, utils } from "@/env";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkMenu } from "../GreasyforkMenu";

export const PopsPanelUISetting = {
  /**
   * 面板-脚本列表|库
   * @param type
   * @param event
   * @param rightHeaderElement
   * @param rightContainerElement
   * @returns
   */
  async UIScriptList(type: "script-list" | "script-library", rightContainerElement: HTMLUListElement) {
    if (!GreasyforkMenu.isLogin) {
      Qmsg.error(i18next.t("请先登录账号！"));
      return;
    }
    let userLinkElement = GreasyforkMenu.getUserLinkElement();
    let userLink = userLinkElement!.href;
    let userId = userLink
      ?.split("/")
      ?.pop()
      ?.match(/([0-9]+)/)?.[0] as string;
    let loading = pops.loading({
      mask: {
        enable: true,
      },
      $parent: rightContainerElement,
      content: {
        text: i18next.t("获取信息中，请稍后..."),
      },
      addIndexCSS: false,
    });
    let userInfo = await GreasyforkApi.getUserInfo(userId);
    loading.close();
    if (!userInfo) {
      return;
    }
    log.info(userInfo);
    let scriptList = type === "script-list" ? userInfo["scriptList"] : userInfo["scriptLibraryList"];
    Qmsg.success(
      i18next.t("获取成功，共 {{count}} 个", {
        count: scriptList.length,
      })
    );
    for (const scriptInfo of scriptList) {
      let liElement = DOMUtils.createElement("li", {
        className: "w-script-list-item",
        innerHTML: /*html*/ `
				<div class="w-script-info">
				<div class="w-script-name">
					<a href="${scriptInfo["url"]}" target="_blank">${scriptInfo["name"]}</a>
				</div>
				<div class="w-script-fan-score">
					<p>${i18next.t("评分：")}${scriptInfo["fan_score"]}</p>
				</div>
				<div class="w-script-locale">
					<p>${i18next.t("语言：")}${scriptInfo["locale"]}</p>
				</div>
				<div class="w-script-version">
					<p>${i18next.t("版本：")}${scriptInfo["version"]}</p>
				</div>
				<div class="w-script-update-time">
					<p>${i18next.t("更新：")}${utils.getDaysDifference(
            new Date(scriptInfo["code_updated_at"]).getTime(),
            void 0,
            "auto"
          )}前</p>
				</div>
				</div>
            `,
      });
      const $scriptInfo = liElement.querySelector(".w-script-info") as HTMLElement;
      const $syncCode = DOMUtils.createElement("div", {
        className: "pops-panel-button",
        innerHTML: /*html*/ `
				<button type="button" data-type="primary" data-icon="" data-righticon="false">
				  <span>${i18next.t("同步代码")}</span>
				</button>
				`,
      });
      if (scriptInfo["deleted"]) {
        /* 该脚本已给删除 */
        liElement.classList.add("w-script-deleted");
        $syncCode.querySelector<HTMLButtonElement>("button")!.setAttribute("disabled", "true");
      }

      DOMUtils.on($syncCode, "click", async function () {
        log.success("同步", scriptInfo);
        const $button = $syncCode.querySelector("button") as HTMLButtonElement;
        const $span = $syncCode.querySelector("button span") as HTMLSpanElement;
        const $icon = DOMUtils.createElement(
          "i",
          {
            className: "pops-bottom-icon",
            innerHTML: pops.config.iconSVG.loading,
          },
          {
            "is-loading": true,
          }
        );
        $button.setAttribute("disabled", "true");
        $button.setAttribute("data-icon", "true");
        $span.innerText = i18next.t("同步中...");
        DOMUtils.before($span, $icon);
        const scriptId = scriptInfo?.["id"];
        const syncFormDataInfo = await GreasyforkApi.getSourceCodeSyncFormDataInfo(scriptId.toString());
        if (syncFormDataInfo) {
          const { formData: codeSyncFormData, url: syncUrl } = syncFormDataInfo;
          const SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY = "script[script_sync_type_id]";
          const SCRIPT_SYNC_TYPE = "script[sync_type]";
          if (codeSyncFormData.has(SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY) || codeSyncFormData.has(SCRIPT_SYNC_TYPE)) {
            /**
             * 同步方式
             */
            let syncMode = "";
            if (codeSyncFormData.has(SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY)) {
              /* 1是手动同步、2是自动同步、3是webhook同步 */
              // 旧版本是这样的
              let syncTypeId = codeSyncFormData.get(SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY) as FormDataEntryValue;
              if (syncTypeId.toString() === "1") {
                syncMode = i18next.t("手动");
              } else if (syncTypeId.toString() === "2") {
                syncMode = i18next.t("自动");
              } else if (syncTypeId.toString() === "3") {
                syncMode = "webhook";
              }
            } else if (codeSyncFormData.has(SCRIPT_SYNC_TYPE)) {
              // 新版本直接是 script[sync_type]
              syncMode = codeSyncFormData.get(SCRIPT_SYNC_TYPE) as string;
            }
            const $oldSyncType = liElement.querySelector<HTMLLIElement>(".w-script-sync-type")!;
            if ($oldSyncType) {
              $oldSyncType.querySelector("p")!.innerText = i18next.t("同步方式：{{syncMode}}", { syncMode });
            } else {
              DOMUtils.append(
                $scriptInfo,
                /*html*/ `
								<div class="w-script-sync-type">
									<p>${i18next.t("同步方式：{{syncMode}}", {
                    syncMode,
                  })}
									</p>
								</div>`
              );
            }
            const syncUpdateResponse = await GreasyforkApi.sourceCodeSync(
              scriptInfo["id"].toString(),
              codeSyncFormData,
              syncUrl
            );
            if (syncUpdateResponse) {
              Qmsg.success(i18next.t("同步成功"));
            } else {
              Qmsg.error(i18next.t("同步失败"));
            }
          } else {
            Qmsg.error(i18next.t("该脚本未设置同步信息"));
          }
        }

        $button.removeAttribute("disabled");
        $button.removeAttribute("data-icon");
        $span.innerText = i18next.t("同步代码");
        $icon.remove();
      });
      liElement.appendChild($syncCode);
      rightContainerElement.appendChild(liElement);
    }
  },
};
