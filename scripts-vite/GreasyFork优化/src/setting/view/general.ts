import Qmsg from "qmsg";
import { UIButton } from "@components/setting/components/ui-button";
import { UIInput } from "@components/setting/components/ui-input";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIInputPassword } from "@components/setting/components/ui-input-password";
import { GreasyforkMenu } from "@/main/GreasyforkMenu";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import i18next from "i18next";
import { UISelect } from "@components/setting/components/ui-select";
import { $$, DOMUtils, log, utils } from "@/env";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";
import { UIButtonShortCut } from "@components/setting/components/ui-button-shortcut";
import { GreasyforkShortCut } from "@/main/GreasyforkShortCut";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import { GreasyforkRememberFormTextArea } from "@/main/GreasyforkRememberFormTextArea";
import { PopsPanelUISetting } from "@/main/ui-setting/PopsPanelUISetting";
import { GreasyforkScriptsFilter } from "@/main/navigator/scripts/GreasyforkScriptsFilter";
import { Panel } from "@components/setting/panel";
import { UIOwn } from "@components/setting/components/ui-own";

export const SettingUIGeneral: PopsPanelContentConfig = {
  id: "greasy-fork-panel-config-account",
  title: i18next.t("通用"),
  views: [
    {
      text: "",
      type: "container",
      views: [
        {
          text: i18next.t("Toast配置"),
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISelect(
                  i18next.t("Toast位置"),
                  "qmsg-config-position",
                  "bottom",
                  [
                    {
                      value: "topleft",
                      text: i18next.t("左上角"),
                    },
                    {
                      value: "top",
                      text: i18next.t("顶部"),
                    },
                    {
                      value: "topright",
                      text: i18next.t("右上角"),
                    },
                    {
                      value: "left",
                      text: i18next.t("左边"),
                    },
                    {
                      value: "center",
                      text: i18next.t("中间"),
                    },
                    {
                      value: "right",
                      text: i18next.t("右边"),
                    },
                    {
                      value: "bottomleft",
                      text: i18next.t("左下角"),
                    },
                    {
                      value: "bottom",
                      text: i18next.t("底部"),
                    },
                    {
                      value: "bottomright",
                      text: i18next.t("右下角"),
                    },
                  ],
                  (isSelectedInfo) => {
                    log.info("设置当前Qmsg弹出位置" + isSelectedInfo.text);
                  },
                  i18next.t("Toast显示在页面九宫格的位置")
                ),
                UISelect(
                  i18next.t("最多显示的数量"),
                  "qmsg-config-maxnums",
                  3,
                  [
                    {
                      value: 1,
                      text: "1",
                    },
                    {
                      value: 2,
                      text: "2",
                    },
                    {
                      value: 3,
                      text: "3",
                    },
                    {
                      value: 4,
                      text: "4",
                    },
                    {
                      value: 5,
                      text: "5",
                    },
                  ],
                  void 0,
                  i18next.t("限制Toast显示的数量")
                ),
                UISwitch(
                  i18next.t("逆序弹出"),
                  "qmsg-config-showreverse",
                  false,
                  void 0,
                  i18next.t("修改Toast弹出的顺序")
                ),
              ],
            },
          ],
        },
        UISelect(
          i18next.t("语言"),
          "setting-language",
          "zh-CN",
          [
            {
              value: "zh-CN",
              text: "中文",
            },
            {
              value: "en-US",
              text: "English",
            },
          ],
          (isSelectedInfo) => {
            log.info("改变语言：" + isSelectedInfo.text);
            i18next.changeLanguage(isSelectedInfo.value);
          },
          void 0,
          () => {
            window.location.reload();
          }
        ),
      ],
    },
    {
      text: "",
      type: "container",
      views: [
        {
          text: i18next.t("账号/密码"),
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UIInput(i18next.t("账号"), "user", "", void 0, void 0, i18next.t("请输入账号")),
                UIInputPassword(i18next.t("密码"), "pwd", "", void 0, void 0, i18next.t("请输入密码")),
                UIInputPassword(
                  i18next.t("secret"),
                  "secret",
                  "",
                  i18next.t("两步验证（2FA）"),
                  void 0,
                  i18next.t("请输入secret")
                ),
              ],
            },
            {
              text: "",
              type: "container",
              views: [
                UISwitch(i18next.t("自动登录"), "autoLogin", true, void 0, i18next.t("自动登录当前保存的账号")),
                UIButton(
                  i18next.t("清空账号/密码"),
                  void 0,
                  i18next.t("点击清空"),
                  void 0,
                  void 0,
                  false,
                  "default",
                  (event) => {
                    if (confirm(i18next.t("确定清空账号和密码？"))) {
                      Panel.deleteValue("user");
                      Panel.deleteValue("pwd");
                      Qmsg.success(i18next.t("已清空账号/密码"));
                      let $shadowRoot = (event.target as HTMLInputElement).getRootNode() as ShadowRoot;
                      $shadowRoot.querySelector<HTMLInputElement>(
                        `li[data-key="user"] .pops-panel-input input`
                      )!.value = "";
                      $shadowRoot.querySelector<HTMLInputElement>(`li[data-key="pwd"] .pops-panel-input input`)!.value =
                        "";
                    }
                  }
                ),
              ],
            },
          ],
        },
        {
          text: i18next.t("功能"),
          type: "deepMenu",
          views: [
            {
              text: i18next.t("功能"),
              type: "container",
              views: [
                UISelect(
                  i18next.t("固定当前语言"),
                  "language-selector-locale",
                  "",
                  (function () {
                    const result = [
                      {
                        value: "",
                        text: i18next.t("无"),
                      },
                    ];
                    DOMUtils.onReady(() => {
                      $$<HTMLOptionElement>("select.language-selector-locale option").forEach(($languageOption) => {
                        const value = $languageOption.getAttribute("value") as string;
                        if (value === "help") {
                          return;
                        }
                        const text = DOMUtils.text($languageOption).trim();
                        result.push({
                          value: value,
                          text: text,
                        });
                      });
                    });
                    return result;
                  })()
                ),
                UISwitch(
                  i18next.t("修复图片宽度显示问题"),
                  "fixImageWidth",
                  true,
                  void 0,
                  i18next.t("修复图片在移动端宽度超出浏览器宽度问题")
                ),
                UISwitch(
                  i18next.t("优化图片浏览"),
                  "optimizeImageBrowsing",
                  true,
                  void 0,
                  i18next.t("使用Viewer浏览图片")
                ),
                UISwitch(
                  i18next.t("覆盖图床图片跳转"),
                  "overlayBedImageClickEvent",
                  true,
                  void 0,
                  i18next.t("配合上面的【优化图片浏览】更优雅浏览图片")
                ),
                UISwitch(
                  i18next.t("添加【操作面板】按钮"),
                  "scripts-addOperationPanelBtnWithNavigator",
                  true,
                  void 0,
                  i18next.t("在脚本列表页面时为顶部导航栏添加【操作面板】按钮")
                ),
                UISwitch(
                  i18next.t("给Markdown添加【复制】按钮"),
                  "addMarkdownCopyButton",
                  true,
                  void 0,
                  i18next.t("在Markdown内容右上角添加【复制】按钮，点击一键复制Markdown内容")
                ),
                UISwitch(
                  i18next.t("查询用户注册时间"),
                  "queryUserRegisterTime",
                  true,
                  void 0,
                  i18next.t("在用户名称后面添加查询按钮，点击查询用户注册时间")
                ),
              ],
            },
            {
              text: i18next.t("检测页面加载"),
              type: "container",
              views: [
                UISwitch(
                  i18next.t("启用"),
                  "checkPage",
                  true,
                  void 0,
                  i18next.t("检测Greasyfork页面是否正常加载，如加载失败则自动刷新页面")
                ),
                UISelect<number>(
                  i18next.t("检测间隔"),
                  "greasyfork-check-page-timeout",
                  5,
                  (() => {
                    let result: {
                      value: number;
                      text: string;
                    }[] = [];
                    for (let index = 0; index < 5; index++) {
                      result.push({
                        value: index + 1,
                        text: index + 1 + "s",
                      });
                    }
                    return result;
                  })(),
                  void 0,
                  i18next.t("设置检测上次刷新页面的间隔时间，当距离上次刷新页面的时间超过设置的值，将不再刷新页面")
                ),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: i18next.t("表单"),
          views: [
            {
              type: "container",
              text: "",
              views: [
                UISwitch(
                  i18next.t("记住回复内容"),
                  "rememberReplyContent",
                  true,
                  void 0,
                  i18next.t(
                    "监听表单内的textarea内容改变并存储到indexDB中，提交表单将清除保存的数据，误刷新页面时可动态恢复"
                  )
                ),
                UISelect(
                  i18next.t("自动清理空间"),
                  "gf-autoClearRememberReplayContent",
                  7,
                  [
                    {
                      text: i18next.t("不清理"),
                      value: -1,
                    },
                    {
                      text: i18next.t("{{value}} 天", {
                        value: 1,
                      }),
                      value: 1,
                    },
                    {
                      text: i18next.t("{{value}} 周", {
                        value: 1,
                      }),
                      value: 7,
                    },
                    {
                      text: i18next.t("{{value}} 个月", {
                        value: 1,
                      }),
                      value: 30,
                    },
                    {
                      text: i18next.t("{{value}} 个月", {
                        value: 2,
                      }),
                      value: 60,
                    },
                    {
                      text: i18next.t("{{value}} 个月", {
                        value: 3,
                      }),
                      value: 90,
                    },
                    {
                      text: i18next.t("半年"),
                      value: 180,
                    },
                  ],
                  void 0,
                  i18next.t("根据设置的间隔时间自动清理保存的回复内容")
                ),
                UIButton(
                  i18next.t(`数据占用空间：{{size}}`, {
                    size: i18next.t("计算中"),
                  }),
                  i18next.t("当前存储的数据所占用的空间大小"),
                  i18next.t("清空"),
                  void 0,
                  void 0,
                  void 0,
                  "default",
                  async () => {
                    let isClear = await GreasyforkRememberFormTextArea.clearAllRememberReplyContent();
                    if (isClear) {
                      Qmsg.success(i18next.t("清理成功"));
                    } else {
                      Qmsg.error(i18next.t("清理失败"));
                    }
                  },
                  async (viewConfig, container) => {
                    let $leftTopText = container.ulElement.querySelector<HTMLDivElement>(
                      'li[data-key="gf-autoClearRememberReplayContent"]+li .pops-panel-item-left-main-text'
                    )!;
                    let allText = await GreasyforkRememberFormTextArea.getAllRememberReplyContent();
                    let showSize = "";
                    if (allText.length) {
                      showSize = utils.getTextStorageSize<true>(JSON.stringify(allText));
                    } else {
                      showSize = utils.getTextStorageSize<true>("");
                    }
                    $leftTopText.innerText = i18next.t(`数据占用空间：{{size}}`, {
                      size: showSize,
                    });
                  }
                ),
              ],
            },
          ],
        },
        {
          text: i18next.t("美化"),
          type: "deepMenu",
          views: [
            {
              text: i18next.t("全局"),
              type: "container",
              views: [
                UISwitch(
                  i18next.t("美化页面元素"),
                  "beautifyPage",
                  true,
                  void 0,
                  i18next.t("如button、input、textarea")
                ),
                UISwitch(i18next.t("美化上传图片按钮"), "beautifyUploadImage", true, void 0, i18next.t("放大上传区域")),
                UISwitch(
                  i18next.t("美化顶部导航栏"),
                  "beautifyTopNavigationBar",
                  true,
                  void 0,
                  i18next.t("可能会跟Greasyfork Beautify脚本有冲突")
                ),
                UISwitch(
                  i18next.t("美化Greasyfork Beautify脚本"),
                  "beautifyGreasyforkBeautify",
                  false,
                  void 0,
                  i18next.t(
                    '需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>'
                  )
                ),
              ],
            },
            {
              type: "container",
              text: i18next.t("脚本列表"),
              views: [
                UISwitch(
                  i18next.t("美化脚本列表"),
                  "beautifyCenterContent",
                  true,
                  void 0,
                  i18next.t("双列显示且添加脚本卡片操作项（安装、收藏）")
                ),
                UISwitch(
                  "↑" + i18next.t("使用namespace查询脚本信息"),
                  "beautifyCenterContent-queryNameSpace",
                  true,
                  void 0,
                  i18next.t("开启后检测已安装的脚本信息更准确，但是速度会更慢")
                ),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: i18next.t("自定义快捷键"),
          views: [
            {
              type: "container",
              text: "",
              views: [
                UIButtonShortCut(
                  i18next.t("快捷键发表回复"),
                  i18next.t("在输入框内按下快捷发表回复，例如：{{key}}", {
                    key: "Ctrl + Enter",
                  }),
                  "gf-quickReply",
                  {
                    keyName: "Enter",
                    keyValue: "13",
                    ohterCodeList: ["ctrl"],
                  },
                  i18next.t("点击录入快捷键"),
                  void 0,
                  GreasyforkShortCut.shortCut
                ),
              ],
            },
          ],
        },
        {
          text: i18next.t("过滤"),
          type: "deepMenu",
          views: [
            {
              text: `<a target="_blank" href="https://greasyfork.org/zh-CN/scripts/475722-greasyfork%E4%BC%98%E5%8C%96#:~:text=%E8%84%9A%E6%9C%AC%E8%BF%87%E6%BB%A4%E8%A7%84%E5%88%99">${i18next.t(
                "帮助文档"
              )}</a>`,
              type: "container",
              views: [
                UISwitch(
                  i18next.t("启用"),
                  "gf-scripts-filter-enable",
                  true,
                  void 0,
                  i18next.t("作用域：脚本、脚本搜索、用户主页")
                ),
                UIOwn(($li) => {
                  const textareaDiv = DOMUtils.createElement(
                    "div",
                    {
                      className: "pops-panel-textarea",
                      innerHTML: `
												<textarea placeholder="${i18next.t("请输入规则，每行一个")}" style="height:200px;"></textarea>`,
                    },
                    {
                      style: "width: 100%;",
                    }
                  );
                  const $textarea = textareaDiv.querySelector<HTMLTextAreaElement>("textarea")!;
                  $textarea.value = GreasyforkScriptsFilter.getValue();
                  DOMUtils.on(
                    $textarea,
                    ["input", "propertychange"],
                    void 0,
                    utils.debounce(function (event) {
                      GreasyforkScriptsFilter.setValue($textarea.value);
                    }, 200)
                  );
                  $li.appendChild(textareaDiv);
                  return $li;
                }),
              ],
            },
          ],
        },
      ],
    },
    {
      type: "container",
      text: i18next.t("脚本管理"),
      views: [
        {
          type: "deepMenu",
          text: i18next.t("代码同步"),
          views: [
            {
              text: i18next.t("代码同步"),
              type: "container",
              views: [
                UIButton(
                  i18next.t("源代码同步【脚本列表】"),
                  void 0,
                  i18next.t("一键同步"),
                  void 0,
                  void 0,
                  false,
                  "primary",
                  (event) => {
                    if (!GreasyforkRouter.isUsers()) {
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
                    $$<HTMLAnchorElement>("#user-script-list-section li a.script-link").forEach((item) => {
                      scriptUrlList = scriptUrlList.concat(GreasyforkUrlUtils.getAdminUrl(item.href));
                    });
                    GreasyforkMenu.updateScript(scriptUrlList);
                  }
                ),
                UIButton(
                  i18next.t("源代码同步【未上架的脚本】"),
                  void 0,
                  i18next.t("一键同步"),
                  void 0,
                  void 0,
                  false,
                  "primary",
                  (event) => {
                    if (!GreasyforkRouter.isUsers()) {
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
                    $$<HTMLAnchorElement>("#user-unlisted-script-list li a.script-link").forEach((item) => {
                      scriptUrlList = scriptUrlList.concat(GreasyforkUrlUtils.getAdminUrl(item.href));
                    });
                    GreasyforkMenu.updateScript(scriptUrlList);
                  }
                ),
                UIButton(
                  i18next.t("源代码同步【库】"),
                  void 0,
                  i18next.t("一键同步"),
                  void 0,
                  void 0,
                  false,
                  "primary",
                  (event) => {
                    if (!GreasyforkRouter.isUsers()) {
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
                    $$<HTMLAnchorElement>("#user-library-script-list li a.script-link").forEach((item) => {
                      scriptUrlList = scriptUrlList.concat(GreasyforkUrlUtils.getAdminUrl(item.href));
                    });
                    GreasyforkMenu.updateScript(scriptUrlList);
                  }
                ),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: i18next.t("脚本列表"),
          views: [],
          afterEnterDeepMenuCallBack(viewConfig, container) {
            PopsPanelUISetting.UIScriptList("script-list", container.$sectionBodyContainer);
          },
        },
        {
          type: "deepMenu",
          text: i18next.t("库"),
          views: [],
          afterEnterDeepMenuCallBack(viewConfig, container) {
            PopsPanelUISetting.UIScriptList("script-library", container.$sectionBodyContainer);
          },
        },
      ],
    },
  ],
};
