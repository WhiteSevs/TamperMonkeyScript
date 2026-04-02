import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const MSettingUIBlog: PopsPanelContentConfig = {
  id: "m-panel-blog",
  title: "博客",
  isDefault() {
    return CSDNRouter.isBlog();
  },
  views: [
    {
      text: "",
      type: "container",
      views: [
        {
          text: "劫持/拦截",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [UISwitch("允许复制", "m-csdn-blog-unBlockCopy", true, void 0, "允许点击复制按钮进行复制")],
            },
          ],
        },
      ],
    },
    {
      type: "container",
      text: "文章",
      views: [
        {
          text: "布局屏蔽",
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
                UISwitch("【屏蔽】顶部工具栏", "m-csdn-blog-blockTopToolbar", false),
                UISwitch("【屏蔽】评论区", "m-csdn-blog-blockComment", false),
                UISwitch("【屏蔽】底部文章", "m-csdn-blog-blockBottomArticle", false),
                UISwitch("【屏蔽】底部工具栏", "m-csdn-blog-blockBottomToolbar", false),
                UISwitch("【屏蔽】底部的AI伴读", "m-csdn-blog-blockBottomAskAIToolbar", false),
              ],
            },
          ],
        },
        {
          text: "内容",
          type: "deepMenu",
          views: [
            {
              text: "功能",
              type: "container",
              views: [
                UISwitch("允许选择内容", "m-csdn-blog-allowSelectText", true, void 0, "解除文字选中限制"),
                UISwitch(
                  "自动展开",
                  "m-csdn-blog-autoExpandContent",
                  true,
                  void 0,
                  "懒人操作，免手动点击展开，包括：内容、代码块"
                ),
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
                UISwitch("重构", "m-csdn-blog-refactoringRecommendation", true, void 0, "文章的样式统一"),
                UISwitch(
                  "移除资源下载的文章",
                  "m-csdn-blog-removeResourceArticle",
                  false,
                  void 0,
                  "download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
                ),
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
};
