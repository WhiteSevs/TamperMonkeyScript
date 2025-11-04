import { DOMUtils } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { UISlider } from "@components/setting/components/ui-slider";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const MSettingUIBlog: PopsPanelContentConfig = {
  id: "m-panel-blog",
  title: "博客",
  isDefault() {
    return CSDNRouter.isBlog();
  },
  views: [
    {
      type: "container",
      text: "",
      views: [
        {
          type: "deepMenu",
          text: "文章",
          views: [
            {
              text: "",
              type: "container",
              views: [
                {
                  type: "deepMenu",
                  text: "顶部工具栏",
                  views: [
                    {
                      type: "container",
                      text: "",
                      views: [UISwitch("启用", "m-csdn-blog-shieldTopToolbar", false, void 0, "关闭是屏蔽顶部工具栏")],
                    },
                  ],
                },
                {
                  text: "内容",
                  type: "deepMenu",
                  views: [
                    {
                      text: "",
                      type: "container",
                      views: [
                        UISwitch("允许选中文字", "m-csdn-blog-allowSelectText", true, void 0, "设置user-select: text;"),
                        UISwitch("自动展开", "m-csdn-blog-autoExpandContent", true, void 0, "包括内容、代码块"),
                        UISwitch(
                          "不限制代码块的最大高度",
                          "m-csdn-blog-notLimitCodePreMaxHeight",
                          false,
                          void 0,
                          "让代码块的高度直接被撑开"
                        ),
                      ],
                    },
                  ],
                },
                {
                  text: "评论",
                  type: "deepMenu",
                  views: [
                    {
                      text: "",
                      type: "container",
                      views: [
                        UISwitch("启用", "m-csdn-blog-comment-enable", true, void 0, "关闭是屏蔽评论区"),
                        UISwitch(
                          "不限制评论区的最大高度",
                          "m-csdn-blog-notLimitCommentMaxHeight",
                          true,
                          void 0,
                          "让评论区高度直接被撑开"
                        ),
                      ],
                    },
                  ],
                },
                {
                  text: "底部文章",
                  type: "deepMenu",
                  views: [
                    {
                      text: "",
                      type: "container",
                      views: [
                        UISwitch("启用", "m-csdn-blog-bottomArticleEnable", true, void 0, "关闭是屏蔽底部文章"),
                        UISwitch(
                          "移除资源下载",
                          "m-csdn-blog-removeResourceArticle",
                          false,
                          void 0,
                          "download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
                        ),
                        UISwitch("重构", "m-csdn-blog-refactoringRecommendation", true, void 0, "文章的样式统一"),
                        UISwitch("新标签页打开", "m-csdn-blog-openNewTab", true, void 0, "新标签页打开文章"),
                      ],
                    },
                  ],
                },
                {
                  type: "deepMenu",
                  text: "底部工具栏",
                  views: [
                    {
                      type: "container",
                      text: "",
                      views: [
                        UISwitch("启用", "m-csdn-blog-bottom-toolbar-enable", false, void 0, "关闭是屏蔽底部工具栏"),
                        UISwitch(
                          "常驻底部",
                          "m-csdn-blog-bottom-toolbar-always-bottom",
                          false,
                          void 0,
                          "开启后底部工具栏不随下滑滚动而隐藏"
                        ),
                        UISwitch(
                          "优化收藏按钮",
                          "m-csdn-blog-bottom-toolbar-optimizationCollectButton",
                          false,
                          void 0,
                          "可以自行选择收藏夹"
                        ),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "container",
      text: "",
      views: [
        {
          text: "功能",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch(
                  "【屏蔽】广告",
                  "m-csdn-blog-removeAds",
                  true,
                  void 0,
                  "包括：登录弹窗、打开APP、ios版本提示等"
                ),
                UISwitch("允许复制", "m-csdn-blog-unBlockCopy", true, void 0, "允许点击复制按钮进行复制"),
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { MSettingUIBlog };
