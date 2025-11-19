import { GreasyforkApi } from "@/api/GreasyForkApi";
import { $, $$, log, MenuRegister, utils } from "@/env";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { Panel } from "@components/setting/panel";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import i18next from "i18next";
import Qmsg from "qmsg";

export const GreasyforkMenu = {
  /**
   * @class
   */
  menu: MenuRegister,
  /**
   * 当前是否已登录
   */
  isLogin: false,
  /**
   * 初始化环境变量
   */
  initEnv() {
    let userLinkElement = this.getUserLinkElement();
    this.isLogin = Boolean(userLinkElement);
  },
  /**
   * 获取当前登录用户的a标签元素
   */
  getUserLinkElement() {
    return $<HTMLAnchorElement>("#nav-user-info span.user-profile-link a");
  },
  /**
   * 更新脚本
   * @param scriptUrlList
   */
  async updateScript(scriptUrlList: string[]) {
    let getLoadingHTML = function (scriptName: string, progress = 1) {
      return `
			<div style="display: flex;flex-direction: column;align-items: flex-start;">
				<div style="height: 30px;line-height: 30px;">${i18next.t("名称：")}${scriptName}</div>
				<div style="height: 30px;line-height: 30px;">${i18next.t("进度：")}${progress}/${scriptUrlList.length}</div>
			</div>`;
    };
    if (utils.isNull(scriptUrlList)) {
      Qmsg.error(i18next.t("未获取到【脚本列表】"));
    } else {
      let loading = Qmsg.loading(getLoadingHTML(GreasyforkUrlUtils.getScriptName(scriptUrlList[0]) as string), {
        isHTML: true,
      });
      let successNums = 0;
      let failedNums = 0;
      for (let index = 0; index < scriptUrlList.length; index++) {
        let scriptUrl = scriptUrlList[index];
        let scriptId = GreasyforkUrlUtils.getScriptId(scriptUrl) as string;
        log.success("更新：" + scriptUrl);
        let scriptName = GreasyforkUrlUtils.getScriptName(scriptUrl) as string;
        loading.setHTML(getLoadingHTML(scriptName, index + 1));
        let syncFormDataInfo = await GreasyforkApi.getSourceCodeSyncFormDataInfo(scriptId);
        if (syncFormDataInfo) {
          const { formData: codeSyncFormData, url: syncUrl } = syncFormDataInfo;
          let syncUpdateStatus = await GreasyforkApi.sourceCodeSync(scriptId, codeSyncFormData, syncUrl);
          if (syncUpdateStatus) {
            Qmsg.success(i18next.t("源代码同步成功，3秒后更新下一个"));
            await utils.sleep(3000);
            successNums++;
          } else {
            Qmsg.error(i18next.t("源代码同步失败"));
            failedNums++;
          }
        } else {
          Qmsg.error(i18next.t("源代码同步失败"));
          failedNums++;
        }
      }
      loading.close();
      if (successNums === 0) {
        Qmsg.error(i18next.t("全部更新失败"));
      } else {
        Qmsg.success(
          i18next.t(
            "全部更新完毕<br >成功：{{successNums}}<br >失败：{{failedNums}}<br >总计：{{scriptUrlListLength}}",
            {
              successNums,
              failedNums,
              scriptUrlListLength: scriptUrlList.length,
            }
          ),
          {
            isHTML: true,
          }
        );
      }
    }
  },
  /**
   * 处理本地的goto事件
   */
  handleLocalGotoCallBack() {
    if (Panel.getValue("goto_updateSettingsAndSynchronize_scriptList")) {
      Panel.deleteValue("goto_updateSettingsAndSynchronize_scriptList");
      if (!GreasyforkRouter.isUsers()) {
        /* 当前不在用户主页 */
        Panel.setValue("goto_updateSettingsAndSynchronize_scriptList", true);
        if (GreasyforkMenu.getUserLinkElement()) {
          Qmsg.success(i18next.t("前往用户主页"));
          window.location.href = GreasyforkMenu.getUserLinkElement()!.href;
        } else {
          Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
        }
        return;
      }
      let scriptUrlList: string[] = [];
      $$<HTMLAnchorElement>("#user-script-list-section li a.script-link").forEach(($anchor) => {
        scriptUrlList = scriptUrlList.concat(GreasyforkUrlUtils.getAdminUrl($anchor.href));
      });
      GreasyforkMenu.updateScript(scriptUrlList);
    } else if (Panel.getValue("goto_updateSettingsAndSynchronize_unlistedScriptList")) {
      Panel.deleteValue("goto_updateSettingsAndSynchronize_unlistedScriptList");
      if (!GreasyforkRouter.isUsers()) {
        /* 当前不在用户主页 */
        Panel.setValue("goto_updateSettingsAndSynchronize_unlistedScriptList", true);
        if (GreasyforkMenu.getUserLinkElement()) {
          Qmsg.success(i18next.t("前往用户主页"));
          window.location.href = GreasyforkMenu.getUserLinkElement()!.href;
        } else {
          Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
        }
        return;
      }
      let scriptUrlList: string[] = [];
      $$<HTMLAnchorElement>("#user-unlisted-script-list li a.script-link").forEach(($anchor) => {
        scriptUrlList = scriptUrlList.concat(GreasyforkUrlUtils.getAdminUrl($anchor.href));
      });
      GreasyforkMenu.updateScript(scriptUrlList);
    } else if (Panel.getValue("goto_updateSettingsAndSynchronize_libraryScriptList")) {
      Panel.deleteValue("goto_updateSettingsAndSynchronize_libraryScriptList");
      if (!GreasyforkRouter.isUsers()) {
        /* 当前不在用户主页 */
        Panel.setValue("goto_updateSettingsAndSynchronize_libraryScriptList", true);
        if (GreasyforkMenu.getUserLinkElement()) {
          Qmsg.success(i18next.t("前往用户主页"));
          window.location.href = GreasyforkMenu.getUserLinkElement()!.href;
        } else {
          Qmsg.error(i18next.t("获取当前已登录的用户主页失败"));
        }
        return;
      }
      let scriptUrlList: string[] = [];
      $$<HTMLAnchorElement>("#user-library-script-list li a.script-link").forEach(($anchor) => {
        scriptUrlList = scriptUrlList.concat(GreasyforkUrlUtils.getAdminUrl($anchor.href));
      });
      GreasyforkMenu.updateScript(scriptUrlList);
    }
  },
};
