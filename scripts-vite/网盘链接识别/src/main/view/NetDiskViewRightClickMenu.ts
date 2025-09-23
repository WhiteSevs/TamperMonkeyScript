import { DOMUtils, log, pops, utils } from "@/env";
import { NetDiskView } from "./NetDiskView";
import { NetDiskRuleManager } from "../NetDiskRuleManager";
import { NetDiskUserRuleUI } from "../rule/user-rule/NetDiskUserRuleUI";
import { NetDiskSettingView } from "./setting/NetDiskSettingView";
import Qmsg from "qmsg";
import { NetDiskLinkClickMode, NetDiskLinkClickModeUtils } from "../link-click-mode/NetDiskLinkClickMode";
import { NetDisk } from "../NetDisk";
import { LinkViewRegisterContextMenuShowTextOption, NetDiskLinkView } from "./link-view/NetDiskLinkView";
import setting_svg from "@/resource/svg/setting.svg?raw";
import history_svg from "@/resource/svg/history.svg?raw";
import add_rule_svg from "@/resource/svg/add_rule.svg?raw";
import manager_svg from "@/resource/svg/manager.svg?raw";
import identify_text_svg from "@/resource/svg/identify_text.svg?raw";
import link_svg from "@/resource/svg/link.svg?raw";
import open_svg from "@/resource/svg/open.svg?raw";
import password_svg from "@/resource/svg/password.svg?raw";
import other_svg from "@/resource/svg/other.svg?raw";
import { NetDiskLinkViewEvent } from "./link-view/NetDiskLinkViewEvent";

export const NetDiskViewRightClickMenu = {
  /**
   * 设置标题的右键菜单
   * @param $el
   */
  setGlobalRightClickMenu($el: HTMLElement) {
    NetDiskLinkViewEvent.registerContextMenu($el, void 0, [
      {
        text: "设置",
        icon: setting_svg,
        callback() {
          log.info("右键菜单-打开-" + this.text);
          NetDiskSettingView.show();
        },
      },
      {
        text: "历史匹配记录",
        icon: history_svg,
        callback() {
          log.info("右键菜单-打开-" + this.text);
          NetDiskView.$inst.historyMatch.show();
        },
      },
      {
        text: "添加链接识别规则",
        icon: add_rule_svg,
        callback() {
          log.info("右键菜单-打开-" + this.text);
          NetDiskUserRuleUI.show(false);
        },
      },
      {
        text: "规则管理器",
        icon: manager_svg,
        callback() {
          log.info("右键菜单-打开-" + this.text);
          NetDiskRuleManager.showView();
        },
      },
      {
        text: "主动识别文本",
        icon: identify_text_svg,
        callback() {
          log.info("右键菜单-打开-" + this.text);
          NetDiskView.$inst.matchPasteText.show();
        },
      },
    ]);
  },
  /**
   * 设置右键菜单
   * @param $el
   * @param selector
   * @param isHistoryView 是否是历史界面的
   */
  setRightClickMenu(
    $el: HTMLElement | (Window & typeof globalThis) | ShadowRoot,
    selector: string,
    isHistoryView?: boolean
  ) {
    let showTextList: LinkViewRegisterContextMenuShowTextOption[] = [
      {
        text: "链接",
        icon: link_svg,
        callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
          return false;
        },
        item: [
          {
            text: "复制",
            icon: "documentCopy",
            callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
              NetDiskLinkClickMode.copy(ruleKeyName, ruleIndex, shareCode, accessCode);
            },
          },
          {
            text: "打开",
            icon: open_svg,
            callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
              let url = NetDiskLinkClickModeUtils.getBlankUrl({
                ruleKeyName,
                ruleIndex,
                shareCode,
                accessCode,
              });
              NetDiskLinkClickMode.openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode);
            },
          },
          {
            text: "后台打开",
            icon: open_svg,
            callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
              let url = NetDiskLinkClickModeUtils.getBlankUrl({
                ruleKeyName,
                ruleIndex,
                shareCode,
                accessCode,
              });
              NetDiskLinkClickMode.openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode, true);
            },
          },
        ],
      },
      {
        text: "密码",
        icon: password_svg,
        callback: function (event, contextMenuEvent, liElement) {
          return false;
        },
        item: [
          {
            text: "复制",
            icon: "documentCopy",
            callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
              if (accessCode == null || (typeof accessCode === "string" && accessCode.trim() === "")) {
                Qmsg.warning("无访问码");
                return;
              }
              utils
                .setClip(accessCode)
                .then((status) => {
                  if (status) {
                    Qmsg.success("已复制");
                  } else {
                    Qmsg.error("执行复制失败", { consoleLogContent: true });
                  }
                })
                .catch(() => {
                  Qmsg.error("执行复制失败", { consoleLogContent: true });
                });
            },
          },
          {
            text: "修改",
            icon: `edit`,
            callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);

              NetDiskView.$inst.newAccessCodeView(
                this.text as string,
                ruleKeyName,
                ruleIndex,
                shareCode,
                accessCode,
                (option) => {
                  if (isHistoryView) {
                    // 来自历史匹配记录界面的
                    if (option.isUpdatedMatchedDict) {
                      let currentTime = new Date().getTime();
                      let $updateTime = $link.closest("li")!.querySelector<HTMLElement>(".netdiskrecord-update-time")!;
                      DOMUtils.text($updateTime, utils.formatTime(currentTime));
                      DOMUtils.attr($link, "data-accesscode", option.accessCode!);
                      Qmsg.success(
                        /*html*/ `
												<div style="text-align: left;">旧: ${accessCode}</div>
												<div style="text-align: left;">新: ${option.accessCode}</div>`,
                        {
                          isHTML: true,
                        }
                      );
                    } else {
                      Qmsg.error("修改失败");
                    }
                  } else {
                    DOMUtils.attr($link, "data-accesscode", option.accessCode!);
                    if (option.isUpdatedMatchedDict) {
                      Qmsg.success(
                        /*html*/ `
												<div style="text-align: left;">旧: ${accessCode}</div>
												<div style="text-align: left;">新: ${option.accessCode}</div>`,
                        {
                          isHTML: true,
                        }
                      );
                    } else {
                      if (option.isFindInMatchedDict) {
                        Qmsg.error("修改访问码失败");
                      } else {
                        Qmsg.error("修改访问码失败，因为当前已匹配字典中未找到对应的访问码");
                      }
                    }
                  }
                }
              );
            },
          },
        ],
      },
      {
        text: "其它",
        icon: other_svg,
        callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
          return false;
        },
        item: [
          {
            text: "复制全部",
            icon: "documentCopy",
            callback(clickEvent, contextMenuEvent, liElement, menuListenerRootNode) {
              let $link = menuListenerRootNode;
              let $boxAll = $link.closest<HTMLElement>(".netdisk-url-box-all")!;
              // 获取全部链接的复制文本
              let copyTextList: string[] = [];
              $boxAll.querySelectorAll<HTMLElement>(selector).forEach(($linkItem) => {
                const { ruleKeyName, ruleIndex, shareCode, accessCode } =
                  NetDiskLinkView.parseBoxAttrRuleInfo($linkItem);
                // 复制的文本
                let copyUrlText = NetDiskLinkClickModeUtils.getCopyUrlInfo({
                  ruleKeyName,
                  ruleIndex,
                  shareCode,
                  accessCode,
                });
                copyTextList.push(copyUrlText);
              });
              utils
                .setClip(copyTextList.join("\n"))
                .then((status) => {
                  if (status) {
                    Qmsg.success("成功复制全部");
                  } else {
                    Qmsg.error("复制全部失败");
                  }
                })
                .catch(() => {
                  Qmsg.error("复制全部失败");
                });
            },
          },
        ],
      },
    ];

    if (!isHistoryView) {
      // 如果当前视图不是历史匹配记录的
      // 那么添加清空当前or所有已匹配的项
      showTextList[2].item!.push(
        {
          text: "删除当前",
          icon: "delete",
          callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
            let $link = menuListenerRootNode;
            let $box = $link.closest<HTMLElement>(".netdisk-url-box")!;
            const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
            let flag = false;
            NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
              if (netDiskKeyName !== ruleKeyName) {
                return;
              }
              netDiskItem.forEach((matchedInfo, matchedShareCode) => {
                if (matchedShareCode === shareCode) {
                  flag = true;
                  netDiskItem.delete(matchedShareCode);
                  log.info(`删除：`, netDiskKeyName, JSON.stringify(matchedInfo));
                }
              });
            });
            // 更新匹配到的key
            NetDisk.$match.matchedInfoRuleKey.clear();
            NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
              if (netDiskItem.length) {
                NetDisk.$match.matchedInfoRuleKey.add(netDiskKeyName);
              }
            });
            if (flag) {
              $box.remove();
            } else {
              Qmsg.error("发生意外情况，未在已匹配到的信息中到对应的网盘信息");
            }
          },
        },
        {
          text: "删除所有",
          icon: "delete",
          callback: function (event, contextMenuEvent, liElement, menuListenerRootNode) {
            let $link = menuListenerRootNode;
            let $boxAll = $link.closest<HTMLElement>(".netdisk-url-box-all")!;
            const { ruleKeyName, ruleIndex, shareCode, accessCode } = NetDiskLinkView.parseBoxAttrRuleInfo($link);
            NetDisk.$match.matchedInfo.forEach((netDiskItem, netDiskKeyName) => {
              netDiskItem.clear();
            });
            NetDisk.$match.matchedInfoRuleKey.clear();
            DOMUtils.html($boxAll, "");
          },
        }
      );
    }

    NetDiskLinkViewEvent.registerContextMenu($el, selector, showTextList);
  },
};
