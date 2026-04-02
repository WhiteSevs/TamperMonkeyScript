import { DOMUtils } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { UISlider } from "@components/setting/components/ui-slider";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const SettingUIBlog: PopsPanelContentConfig = {
  id: "panel-blog",
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
              views: [
                UISwitch("拦截-复制的小尾巴", "csdn-blog-removeClipboardHijacking", true),
                UISwitch("劫持-禁止复制", "csdn-blog-unBlockCopy", true, void 0, "允许点击复制按钮进行复制"),
              ],
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
                UISwitch("【屏蔽】登录弹窗", "csdn-blog-shieldLoginDialog", true),
                UISwitch("【屏蔽】顶部工具栏", "csdn-blog-shieldTopToolbar", false),
                UISwitch("【屏蔽】左侧博客信息", "csdn-blog-shieldLeftBlogContainerAside", false),
                UISwitch("【屏蔽】右侧目录信息", "csdn-blog-shieldRightDirectoryInformation", false),
                UISwitch("【屏蔽】评论区", "csdn-blog-blockComment", false),
                UISwitch("【屏蔽】底部文章", "csdn-blog-blockBottomRecommendArticle", false),
                UISwitch("【屏蔽】底部的悬浮工具栏", "csdn-blog-shieldBottomFloatingToolbar", false),
                UISwitch("【屏蔽】底部的AI伴读", "csdn-blog-blockBottomAskAIToolbar", false),
                UISwitch("【屏蔽】runner-box", "csdn-blog-blockRunnerBox", true),
              ],
            },
          ],
        },
        {
          text: "右侧悬浮工具栏",
          type: "deepMenu",
          views: [
            {
              text: "功能",
              type: "container",
              views: [
                UISwitch(
                  "【添加按钮】前往评论",
                  "csdn-blog-addGotoRecommandButton",
                  true,
                  void 0,
                  "在悬浮工具栏最后面添加"
                ),
              ],
            },
            {
              text: "坐标偏移",
              type: "container",
              views: [
                UISwitch("启用", "csdn-blog-coverRightToolOffSet", false),
                UISlider(
                  "top偏移",
                  "csdn-blog-rightToolbarTopOffset",
                  140,
                  0,
                  Math.max(document.documentElement.clientHeight / 2, 400),
                  void 0,
                  (value) => {
                    return `当前：${value}px，默认：140px`;
                  }
                ),
                UISlider(
                  "right偏移",
                  "csdn-blog-rightToolbarRightOffset",
                  90,
                  0,
                  Math.max(document.documentElement.clientWidth / 2, 400),
                  void 0,
                  (value) => {
                    return `当前：${value}px，默认：90px`;
                  }
                ),
              ],
            },
            {
              text: "屏蔽",
              type: "container",
              views: [
                UISwitch("【屏蔽】右侧工具栏", "csdn-blog-rightToolbarEnable", false),
                UISwitch("【屏蔽】创作中心", "csdn-blog-rightToolbarCreativeCenter", false),
                UISwitch("【屏蔽】显示/隐藏侧栏", "csdn-blog-rightToolbarShowOrSidebar", false),
                UISwitch("【屏蔽】新手引导", "csdn-blog-rightToolbarBeginnerGuidance", false),
                UISwitch("【屏蔽】客服", "csdn-blog-rightToolbarCustomerService", false),
                UISwitch("【屏蔽】举报", "csdn-blog-rightToolbarReport", false),
                UISwitch("【屏蔽】返回顶部", "csdn-blog-rightToolbarBackToTop", false),
              ],
            },
          ],
        },
        {
          text: "右侧悬浮工具栏（AI助读版）",
          type: "deepMenu",
          views: [
            {
              text: "坐标偏移",
              type: "container",
              views: [
                UISwitch("启用", "csdn-blog-ai-coverRightToolOffSet", false),
                UISlider(
                  "top偏移",
                  "csdn-blog-ai-coverRightToolOffSet-top",
                  48,
                  0,
                  Math.max(document.documentElement.clientHeight / 2, 400),
                  void 0,
                  (value) => {
                    return `当前：${value}px，默认：48px`;
                  }
                ),
                UISlider(
                  "right偏移",
                  "csdn-blog-ai-coverRightToolOffSet-right",
                  150,
                  0,
                  Math.max(document.documentElement.clientWidth / 2, 400),
                  void 0,
                  (value) => {
                    return `当前：${value}px，默认：150px`;
                  }
                ),
              ],
            },
            {
              text: "屏蔽",
              type: "container",
              views: [
                UISwitch("【屏蔽】右侧工具栏", "csdn-blog-ai-blockRightToolbar", false),
                UISwitch("【屏蔽】目录", "csdn-blog-ai-blockRightToolbarCatalogue", false),
                UISwitch("【屏蔽】点赞", "csdn-blog-ai-blockRightToolbarLike", false),
                UISwitch("【屏蔽】评论", "csdn-blog-ai-blockRightToolbarComment", false),
                UISwitch("【屏蔽】收藏", "csdn-blog-ai-blockRightToolbarCollect", false),
                UISwitch("【屏蔽】分享", "csdn-blog-ai-blockRightToolbarShare", false),
                UISwitch("【屏蔽】...", "csdn-blog-ai-blockRightToolbarMore", false),
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
                UISwitch(
                  "点击代码块自动展开",
                  "csdn-blog-clickPreCodeAutomatically",
                  true,
                  void 0,
                  "当鼠标点击代码块区域时，将自动展开内容"
                ),
                UISwitch("自动展开代码块", "csdn-blog-autoExpandCodeContent", true, void 0, "懒人操作，免手动点击展开"),
                UISwitch("自动展开内容", "csdn-blog-autoExpandContent", true, void 0, "懒人操作，免手动点击展开"),
                UISwitch(
                  "全文居中",
                  "csdn-blog-articleCenter",
                  true,
                  void 0,
                  "自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"
                ),
                UISwitch("允许选择内容", "csdn-blog-allowSelectContent", true, void 0, "解除文字选中限制"),
              ],
            },
            {
              text: "屏蔽",
              type: "container",
              views: [
                UISwitch("【屏蔽】底部xx技能树", "csdn-blog-shieldBottomSkillTree", false),
                UISwitch(
                  "【屏蔽】选中文字悬浮栏",
                  "csdn-blog-shieldArticleSearchTip",
                  false,
                  void 0,
                  "选中文字弹出的，例如：搜索、评论、笔记"
                ),
                UISwitch("【屏蔽】gitcode链接卡片", "csdn-blog-blockGitCodeLinkCard", false),
              ],
            },
          ],
        },
        {
          text: "评论区",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [UISwitch("优化评论区的位置", "csdn-blog-restoreComments", true)],
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
                UISwitch("标识CSDN下载", "csdn-blog-identityCSDNDownload", true, void 0, "使用红框标识"),
                UISwitch(
                  "移除资源下载的文章",
                  "csdn-blog-removeResourceDownloadArticle",
                  false,
                  void 0,
                  "download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
