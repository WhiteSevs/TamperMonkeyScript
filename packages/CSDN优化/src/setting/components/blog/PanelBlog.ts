import { DOMUtils } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { UISlider } from "@/setting/common-components/ui-slider";
import { UISwitch } from "@/setting/common-components/ui-switch";

const SettingUIBlog: PopsPanelContentConfig = {
    id: "panel-blog",
    title: "博客",
    isDefault() {
        return CSDNRouter.isBlog()
    },
    forms: [
        {
            text: "屏蔽",
            type: "forms",
            forms: [
                UISwitch(
                    "【屏蔽】登录弹窗",
                    "csdn-blog-shieldLoginDialog",
                    true
                ),
                UISwitch(
                    "【屏蔽】底部xx技能树",
                    "csdn-blog-shieldBottomSkillTree",
                    false
                ),
                UISwitch(
                    "【屏蔽】左侧博客信息",
                    "csdn-blog-shieldLeftBlogContainerAside",
                    false
                ),
                UISwitch(
                    "【屏蔽】右侧目录信息",
                    "csdn-blog-shieldRightDirectoryInformation",
                    false
                ),
                UISwitch(
                    "【屏蔽】右侧工具栏",
                    "csdn-blog-shieldfloatingButton",
                    false
                ),
                UISwitch(
                    "【屏蔽】顶部工具栏",
                    "csdn-blog-shieldTopToolbar",
                    false
                ),
                UISwitch(
                    "【屏蔽】搜索悬浮工具栏",
                    "csdn-blog-shieldArticleSearchTip",
                    false,
                    void 0,
                    "选中文字弹出的，例如：搜索、评论、笔记"
                ),
                UISwitch(
                    "【屏蔽】底部的悬浮工具栏",
                    "csdn-blog-shieldBottomFloatingToolbar",
                    false
                ),
            ],
        },
        {
            text: "功能",
            type: "forms",
            forms: [
                UISlider(
                    "右侧工具栏的right偏移",
                    "csdn-blog-rightToolbarRightOffset",
                    90,
                    0,
                    document.documentElement.clientWidth,
                    (event, value) => {
                        let csdnSideToolbar = document.querySelector(".csdn-side-toolbar") as HTMLDivElement;
                        DOMUtils.css(csdnSideToolbar, {
                            right: value + "px",
                        });
                    },
                    (value) => {
                        return `当前：${value}px，默认：90px`;
                    }
                ),
                UISlider(
                    "右侧工具栏的top偏移",
                    "csdn-blog-rightToolbarTopOffset",
                    140,
                    0,
                    document.documentElement.clientHeight,
                    (event, value) => {
                        let csdnSideToolbar = document.querySelector(".csdn-side-toolbar") as HTMLDivElement;
                        DOMUtils.css(csdnSideToolbar, {
                            top: value + "px",
                        });
                    },
                    (value) => {
                        return `当前：${value}px，默认：90px`;
                    }
                ),
            ],
        },
        {
            text: "内容",
            type: "forms",
            forms: [
                UISwitch(
                    "自动展开内容块",
                    "csdn-blog-autoExpandContent",
                    false
                ),
                UISwitch(
                    "全文居中",
                    "csdn-blog-articleCenter",
                    true,
                    function (event, enable) {
                        if (enable) {
                            alert(
                                "为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息"
                            );
                        }
                    }
                ),
            ],
        },
        {
            text: "评论",
            type: "forms",
            forms: [
                UISwitch(
                    "屏蔽",
                    "csdn-blog-blockComment",
                    false,
                    void 0,
                    "屏蔽评论"
                ),
                UISwitch(
                    "优化评论的位置",
                    "csdn-blog-restoreComments",
                    true
                ),
                UISwitch(
                    "添加前往评论的按钮",
                    "csdn-blog-addGotoRecommandButton",
                    true
                ),
            ],
        },
        {
            text: "底部文章",
            type: "forms",
            forms: [
                UISwitch(
                    "屏蔽",
                    "csdn-blog-shieldBottomRecommendArticle",
                    false,
                    void 0,
                    "屏蔽底部文章"
                ),
                UISwitch(
                    "标识CSDN下载",
                    "csdn-blog-identityCSDNDownload",
                    true,
                    void 0,
                    "使用红框标识"
                ),
                UISwitch(
                    "移除资源下载的文章",
                    "csdn-blog-removeResourceDownloadArticle",
                    false,
                    void 0,
                    "移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"
                ),
            ],
        },
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "拦截-复制的小尾巴",
                    "csdn-blog-removeClipboardHijacking",
                    true
                ),
                UISwitch(
                    "劫持-禁止复制",
                    "csdn-blog-unBlockCopy",
                    true,
                    undefined,
                    "允许点击复制按钮进行复制"
                ),
            ],
        },

    ]
}

export {
    SettingUIBlog
}