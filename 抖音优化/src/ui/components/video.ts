import { DOMUtils, utils } from "@/api/env";
import { UISelect } from "../core/ui-select"
import { UISwitch } from "../core/ui-switch"
import { DouYinVideoShield } from "@/core/Video/shield";

const PanelVideoConfig: PopsPanelFormsDetails[] = [
    {
        text: "功能",
        type: "forms",
        forms: [
            UISelect(
                "清晰度",
                "自行选择清晰度",
                "chooseVideoDefinition",
                1,
                [
                    {
                        text: "智能",
                        value: 0,
                    },
                    {
                        text: "极速",
                        value: 4,
                    },
                    {
                        text: "流畅",
                        value: 3,
                    },
                    {
                        text: "清晰",
                        value: 2,
                    },
                    {
                        text: "高清",
                        value: 1,
                    },
                ],
                void 0,
            ),
            UISwitch(
                "视频解析",
                "分享->下载(灰色的也可点击)",
                "parseVideo",
                false,
                void 0
            ),
            UISwitch(
                "自动进入网页全屏",
                "网页加载完毕后自动点击网页全屏按钮进入全屏",
                "autoEnterElementFullScreen",
                false,
                void 0
            ),
            UISwitch(
                "评论区移到中间",
                "修改评论区为中间弹出而非右侧区域",
                "changeCommentToBottom",
                true,
                void 0
            ),
            UISwitch(
                "网页全屏净化",
                "移除右侧工具栏、底部信息栏等",
                "fullScreen",
                false,
                void 0
            ),
            UISwitch(
                "手机模式",
                "放大各种文字和图标",
                "mobileMode",
                false,
                void 0
            ),
        ]
    },
    {
        text: "视频区域内-屏蔽",
        type: "forms",
        forms: [
            UISwitch(
                "【屏蔽】右侧的展开评论按钮",
                "屏蔽元素",
                "shieldRightExpandCommentButton",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】搜索悬浮栏",
                "屏蔽元素，一般出现在左上角",
                "shieldSearchFloatingBar",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】网页全屏关闭按钮",
                "屏蔽元素，一般开启网页全屏后出现在左上角",
                "shieldCloseFullScreenButton",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】切换播放",
                "屏蔽元素，在右侧作者头像上方",
                "shieldPlaySwitchButton",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】作者头像",
                "屏蔽元素",
                "shieldAuthorAvatar",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】点赞",
                "屏蔽元素",
                "shieldLikeButton",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】评论",
                "屏蔽元素",
                "shieldCommentButton",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】收藏",
                "屏蔽元素",
                "shieldCollectionButton",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】分享",
                "屏蔽元素",
                "shieldSharenButton",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】看相关",
                "屏蔽元素",
                "shieldRelatedRecommendationsButton",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】更多",
                "屏蔽元素",
                "shieldMoreButton",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】底部视频工具栏",
                "屏蔽元素",
                "shieldBottomVideoToolBar",
                false,
                void 0
            ),
        ],
    },
    {
        text: "视频过滤规则(可正则)",
        type: "forms",
        forms: [
            UISwitch(
                "启用",
                "开启后可启用下面的屏蔽功能",
                "shieldVideo",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】直播",
                "过滤掉直播",
                "shieldVideo-live",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】广告",
                "过滤掉广告",
                "shieldVideo-ads",
                true,
                void 0
            ),

            {
                type: "own",
                getLiElementCallBack(liElement: HTMLLIElement) {
                    let textareaDiv = DOMUtils.createElement(
                        "div",
                        {
                            className: "pops-panel-textarea",
                            innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`,
                        },
                        {
                            style: "width: 100%;",
                        }
                    );
                    let textarea = textareaDiv.querySelector("textarea") as HTMLTextAreaElement;
                    textarea.value = DouYinVideoShield.get();
                    DOMUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        utils.debounce(function () {
                            DouYinVideoShield.set(textarea.value);
                        }, 200)
                    );
                    liElement.appendChild(textareaDiv);
                    return liElement;
                },
            },
        ]
    }
]

export {
    PanelVideoConfig
}