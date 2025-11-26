import { $, DOMUtils, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import i18next from "i18next";
import { GreasyforkScriptsList } from "../scripts/GreasyforkScriptsList";
import { GreasyforkScriptsFilter } from "../scripts/GreasyforkScriptsFilter";
import { GreasyforkElementUtils } from "@/utils/GreasyforkElementUtils";
import { CommonUtil } from "@components/utils/CommonUtil";
import { PanelUISize } from "@components/setting/panel-ui-size";

export const GreasyforkUsers = {
  init() {
    Panel.execMenuOnce("users-changeConsoleToTopNavigator", () => {
      this.changeConsoleToTopNavigator();
    });
    Panel.execMenuOnce("gf-scripts-filter-enable", () => {
      GreasyforkScriptsFilter.init();
    });
    Panel.execMenuOnce("beautifyCenterContent", () => {
      return GreasyforkScriptsList.beautifyCenterContent();
    });
  },
  /**
   * 迁移【控制台】到顶部导航栏
   */
  changeConsoleToTopNavigator() {
    log.info("迁移【控制台】到顶部导航栏");
    CommonUtil.addBlockCSS("#about-user");
    DOMUtils.onReady(() => {
      let $aboutUser = $<HTMLElement>("#about-user");
      if (!$aboutUser) {
        log.error("#about-user元素不存在");
        return;
      }
      $aboutUser = $aboutUser.cloneNode(true) as HTMLElement;
      GreasyforkElementUtils.registerTopNavMenu({
        name: i18next.t("控制台"),
        className: "scripts-console",
        clickEvent(event) {
          let $dialog = pops.alert({
            title: {
              text: i18next.t("控制台"),
              position: "center",
            },
            content: {
              text: "",
              html: true,
            },
            btn: {
              ok: { enable: false },
            },
            mask: {
              enable: true,
              clickEvent: {
                toClose: true,
              },
            },
            drag: true,
            useShadowRoot: true,
            width: PanelUISize.setting.width,
            height: PanelUISize.setting.height,
            zIndex: utils.getMaxZIndex(100),
            style: /*css*/ `
						#about-user{
							border: 0;
							box-shadow: none;
						}
						#about-user a{
							color: #670000;
						}
						#about-user a:hover{
							color: #00a3f5;
						}
						.text-content{
							list-style-type: none;
							box-shadow: rgb(221, 221, 221) 0px 0px 5px;
							background-color: rgb(255, 255, 255);
							box-sizing: border-box;
							border-width: 1px;
							border-style: solid;
							border-color: rgb(187, 187, 187);
							border-image: initial;
							border-radius: 5px;
							margin: 14px 0px;
							padding: 10px 40px;
						}
						a.report-link{
							position: absolute;
							right: 0px;
							font-size: smaller;
							margin-right: 16px;
							margin-top: 8px;
						}
						.notification-widget{
							display: inline-block;
							width: 1.2em;
							height: 1.2em;
							text-align: center;
							line-height: 1.2em;
							padding: 0;
							background-color: #31708f;
							border-radius: 50%;
							color: #fff;
							text-decoration: none;
						}
						`,
          });
          let $content = $dialog.$shadowRoot.querySelector<HTMLElement>(".pops-alert-content")!;
          $content.appendChild($aboutUser);
        },
      });
    });
  },
};
