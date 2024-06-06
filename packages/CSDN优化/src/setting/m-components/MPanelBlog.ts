import { DOMUtils } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { UISlider } from "@/setting/common-components/ui-slider";
import { UISwitch } from "@/setting/common-components/ui-switch";

const MSettingUIBlog: PopsPanelContentConfig = {
    id: "m-panel-blog",
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
                    "【屏蔽】广告",
                    "m-csdn-blog-removeAds",
                    true,
                    void 0,
                    "包括：登录弹窗、打开APP、ios版本提示等"
                ),
                UISwitch(
                    "【屏蔽】顶部Toolbar",
                    "m-csdn-blog-shieldTopToolbar",
                    false
                ),
            ],
        },
        {
            text: "内容",
            type: "forms",
            forms: [
                UISwitch(
                    "允许选中文字",
                    "m-csdn-blog-allowSelectText",
                    true,
                    void 0,
                    "设置user-select: text;"
                ),
                UISwitch(
                    "自动展开",
                    "m-csdn-blog-autoExpandContent",
                    true,
                    void 0,
                    "包括内容、代码块"
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
        {
            text: "评论",
            type: "forms",
            forms: [
                UISwitch(
                    "屏蔽",
                    "m-csdn-blog-blockComment",
                    false,
                    void 0,
                    "屏蔽评论区"
                ),
                UISwitch(
                    "不限制评论区的最大高度",
                    "m-csdn-blog-notLimitCommentMaxHeight",
                    true,
                    void 0,
                    "让评论区高度直接被撑开"
                ),
            ],
        },
        {
            text: "底部文章",
            type: "forms",
            forms: [
                UISwitch(
                    "屏蔽",
                    "m-csdn-blog-blockBottomArticle",
                    false,
                    void 0,
                    "屏蔽底部文章"
                ),
                UISwitch(
                    "移除资源下载的文章",
                    "m-csdn-blog-removeResourceArticle",
                    false,
                    void 0,
                    "移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"
                ),
                UISwitch(
                    "重构",
                    "m-csdn-blog-refactoringRecommendation",
                    true,
                    void 0,
                    "样式统一化"
                ),
                UISwitch(
                    "新标签页打开",
                    "m-csdn-blog-openNewTab",
                    true,
                    void 0,
                    "点击文章，新标签页打开"
                ),
            ],
        },
        {
            text: "劫持/拦截",
            type: "forms",
            forms: [
                UISwitch(
                    "劫持-禁止复制",
                    "m-csdn-blog-unBlockCopy",
                    true,
                    undefined,
                    "允许点击复制按钮进行复制"
                ),
            ],
        },
    ]
}

export {
    MSettingUIBlog
}