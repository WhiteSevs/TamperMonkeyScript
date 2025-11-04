import { log, SCRIPT_NAME } from "@/env";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIButton } from "@components/setting/components/ui-button";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { XHSArticleFilter } from "@/main/article/XHSArticleFilter";

export const SettingUI_Common: PopsPanelContentConfig = {
  id: "xhs-panel-config-common",
  title: "通用",
  views: [
    {
      type: "container",
      text: "",
      views: [
        {
          text: "Toast配置",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISelect(
                  "Toast位置",
                  "qmsg-config-position",
                  "bottom",
                  [
                    {
                      value: "topleft",
                      text: "左上角",
                    },
                    {
                      value: "top",
                      text: "顶部",
                    },
                    {
                      value: "topright",
                      text: "右上角",
                    },
                    {
                      value: "left",
                      text: "左边",
                    },
                    {
                      value: "center",
                      text: "中间",
                    },
                    {
                      value: "right",
                      text: "右边",
                    },
                    {
                      value: "bottomleft",
                      text: "左下角",
                    },
                    {
                      value: "bottom",
                      text: "底部",
                    },
                    {
                      value: "bottomright",
                      text: "右下角",
                    },
                  ],
                  (event, isSelectValue, isSelectText) => {
                    log.info("设置当前Qmsg弹出位置" + isSelectText);
                  },
                  "Toast显示在页面九宫格的位置"
                ),
                UISelect(
                  "最多显示的数量",
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
                  "限制Toast显示的数量"
                ),
                UISwitch("逆序弹出", "qmsg-config-showreverse", false, void 0, "修改Toast弹出的顺序"),
              ],
            },
          ],
        },
      ],
    },
    {
      text: "",
      type: "container",
      views: [
        {
          text: "功能",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("允许复制", "pc-xhs-allowCopy", true, void 0, "可以选择文字并复制"),
                UISwitch(
                  "新标签页打开文章",
                  "pc-xhs-open-blank-article",
                  false,
                  void 0,
                  "点击文章不会在本页展开，会打开新标签页"
                ),
              ],
            },
          ],
        },
        {
          text: "搜索",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch(
                  "新标签页打开-搜索按钮",
                  "pc-xhs-search-open-blank-btn",
                  false,
                  void 0,
                  "点击右边的搜索按钮直接新标签页打开搜索内容"
                ),
                UISwitch(
                  "新标签页打开-回车键",
                  "pc-xhs-search-open-blank-keyboard-enter",
                  false,
                  void 0,
                  "按下回车键直接新标签页打开搜索内容"
                ),
              ],
            },
          ],
        },
        {
          text: "屏蔽",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("【屏蔽】广告", "pc-xhs-shieldAd", true, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】登录弹窗", "pc-xhs-shield-login-dialog", true, void 0, "屏蔽会自动弹出的登录弹窗"),
                UISwitch(
                  "【屏蔽】选择文字弹出的搜索提示",
                  "pc-xhs-shield-select-text-search-position",
                  false,
                  void 0,
                  "屏蔽元素"
                ),
                UISwitch("【屏蔽】顶部工具栏", "pc-xhs-shield-topToolbar", false, void 0, "屏蔽元素"),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "笔记过滤器",
          views: [
            {
              text: '<a href="https://greasyfork.org/zh-CN/scripts/483960-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
              type: "container",
              views: [
                UISwitch("启用", "shieldVideo-exec-network-enable", true, void 0, "开启后以下功能才会生效"),
                UISwitch(
                  "仅显示被过滤的笔记",
                  "xhs-article-filter-only-show-filtered-video",
                  false,
                  void 0,
                  "只会显示过滤规则命中的笔记"
                ),
                UIButton("笔记过滤规则", "可过滤笔记", "自定义", void 0, false, false, "primary", () => {
                  XHSArticleFilter.showView();
                }),
              ],
            },
            {
              type: "container",
              text: "",
              views: [
                UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
                  XHSArticleFilter.$data.videoFilterRuleStorage.importRules();
                }),
                UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
                  XHSArticleFilter.$data.videoFilterRuleStorage.exportRules(SCRIPT_NAME + "-视频过滤规则.json");
                }),
              ],
            },
          ],
        },
        {
          text: "劫持/拦截",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [UISwitch("劫持Vue", "pc-xhs-hook-vue", true, void 0, "恢复__vue__属性")],
            },
          ],
        },
      ],
    },
  ],
};
