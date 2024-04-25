import { UISelect } from "../core/ui-select"
import { UISwitch } from "../core/ui-switch"


const PanelCommonConfig: PopsPanelFormsDetails[] = [
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
                "debug模式",
                "移除抖音的开发者模式检测",
                "debug",
                false,
                void 0
            ),
            UISwitch(
                "伪装登录",
                "使用随机UID进行伪装",
                "disguiseLogin",
                false,
                void 0
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
        ],
    },
    {
        text: "屏蔽",
        type: "forms",
        forms: [
            UISwitch(
                "【屏蔽】登录弹窗",
                "屏蔽元素且自动等待元素出现并关闭登录弹窗",
                "watchLoginDialogToClose",
                true,
                void 0
            ),
        ],
    },
    {
        text: "主框架-屏蔽",
        type: "forms",
        forms: [
            UISwitch(
                "【屏蔽】客户端提示",
                "屏蔽元素",
                "shieldClientTip",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】充砖石",
                "屏蔽元素",
                "shieldFillingBricksAndStones",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】客户端",
                "屏蔽元素",
                "shieldClient",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】快捷访问",
                "屏蔽元素",
                "shieldQuickAccess",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】通知",
                "屏蔽元素",
                "shieldNotifitation",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】私信",
                "屏蔽元素",
                "shieldPrivateMessage",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】投稿",
                "屏蔽元素",
                "shieldSubmission",
                false,
                void 0
            ),
        ],
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
        text: "搜索-屏蔽",
        type: "forms",
        forms: [
            UISwitch(
                "【屏蔽】搜索框",
                "屏蔽元素",
                "shieldSearch",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】搜索框的提示",
                "屏蔽元素",
                "shieldSearchPlaceholder",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】猜你想搜",
                "屏蔽元素",
                "shieldSearchGuessYouWantToSearch",
                false,
                void 0
            ),
            UISwitch(
                "【屏蔽】抖音热点",
                "屏蔽元素",
                "shieldSearchTiktokHotspot",
                false,
                void 0
            ),
        ],
    },
]

export {
    PanelCommonConfig
}