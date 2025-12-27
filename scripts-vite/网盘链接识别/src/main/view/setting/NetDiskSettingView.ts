import { DOMUtils, log, SCRIPT_NAME } from "@/env";
import { NetDiskView } from "../NetDiskView";
import Qmsg from "qmsg";
import { NetDiskUserRule } from "@/main/rule/user-rule/NetDiskUserRule";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { GM_info } from "ViteGM";
import { NetDiskRule } from "@/main/rule/NetDiskRule";
import { NetDiskUserRuleUI } from "@/main/rule/user-rule/NetDiskUserRuleUI";
import indexCSS from "./index.css?raw";
import { NetDiskUserRuleSubscribeRule } from "@/main/rule/user-rule/NetDiskUserRuleSubscribeRule";
import { PanelContent } from "@components/setting/panel-content";
import { Panel } from "@components/setting/panel";

export const NetDiskSettingView = {
  show() {
    if (NetDiskView.$el.$settingView) {
      Qmsg.error("设置界面已存在");
      return;
    }
    // 规则的设置
    const ruleContent = NetDiskRule.getRulePanelContent();
    // 总设置
    const content = [...PanelContent.getConfig(0), ...ruleContent, ...PanelContent.getDefaultBottomContentConfig()];
    const $panel = NetDiskPops.panel(
      {
        title: {
          text: `${GM_info?.script?.name || SCRIPT_NAME}-设置`,
          position: "center",
        },
        content: content,
        btn: {
          close: {
            enable: true,
            callback(event) {
              event.close();
              // @ts-expect-error
              NetDiskView.$el.$settingView = void 0;
            },
          },
        },
        mask: {
          clickCallBack(originalRun) {
            originalRun();
            // @ts-expect-error
            NetDiskView.$el.$settingView = void 0;
          },
        },
        class: "whitesevPopSetting",
        style: indexCSS,
      },
      NetDiskView.$config.viewSizeConfig.settingView
    );
    Panel.registerConfigSearch({
      $panel,
      content,
      searchDialogStyle: /*css*/ `
			/* 网盘图标 */
			.netdisk-aside-icon {
				width: 20px;
				height: 20px;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin: 0px 4px;
			}
		`,
    });
    NetDiskView.$el.$settingView = $panel;
    this.setRuleHeaderControlsClickEvent($panel.$shadowRoot);
  },
  /**
   * 设置规则顶部的编辑|删除的点击事件
   */
  setRuleHeaderControlsClickEvent($shadowRoot: ShadowRoot | HTMLElement) {
    DOMUtils.on($shadowRoot, "click", ".netdisk-custom-rule-edit", function (event) {
      const $click = event.target as HTMLElement;
      const ruleKey = $click.getAttribute("data-key")!;
      const ruleName = $click.getAttribute("data-type")!;
      const subscribeUUID = $click.getAttribute("data-subscribe-uuid");
      if (typeof subscribeUUID === "string" && subscribeUUID.trim() !== "") {
        // 来自订阅的规则
        NetDiskUserRuleUI.showSubscribe(subscribeUUID, ruleKey, function (rule) {
          NetDiskUserRule.updateRule(ruleKey, rule);
        });
      } else {
        NetDiskUserRuleUI.show(true, ruleKey);
      }
    });

    DOMUtils.on($shadowRoot, "click", ".netdisk-custom-rule-delete", function (event) {
      const $click = event.target as HTMLElement;
      const ruleKey = $click.getAttribute("data-key")!;
      const ruleName = $click.getAttribute("data-type")!;
      const subscribeUUID = $click.getAttribute("data-subscribe-uuid");
      NetDiskPops.alert({
        title: {
          text: "提示",
          position: "center",
        },
        content: {
          text: `确定删除规则 ${ruleName}(${ruleKey}) 吗？`,
        },
        btn: {
          ok: {
            callback(okEvent) {
              let flag;
              if (typeof subscribeUUID === "string" && subscribeUUID.trim() !== "") {
                // 来自订阅的规则
                flag = NetDiskUserRuleSubscribeRule.deleteSubscribeRule(subscribeUUID, ruleKey);
              } else {
                flag = NetDiskUserRule.deleteRule(ruleKey);
              }
              if (flag) {
                const $aside = NetDiskView.$el.$settingView.$shadowRoot.querySelector<HTMLLIElement>(
                  `.pops-panel-aside > ul > li[data-key="${ruleKey}"]`
                )!;
                const $prev = $aside.previousElementSibling as HTMLElement;
                const $next = $aside.nextElementSibling as HTMLElement;
                if ($prev) {
                  $prev.click();
                } else if ($next) {
                  $next.click();
                }
                $aside?.remove();
                Qmsg.success("删除成功");
                okEvent.close();
              } else {
                Qmsg.error("删除规则失败");
              }
            },
          },
        },
      });
    });
  },
};
