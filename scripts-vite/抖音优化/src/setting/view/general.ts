import { DOMUtils, log } from "@/env";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { AutoOpenOrClose } from "../all-open-or-close";
import { UIOwn } from "@components/setting/components/ui-own";

/**
 * 获取渲染的显卡信息，可能是核显，也可能是独显
 */
function queryGPUInfo() {
  const isFirefox = /Firefox/.test(window.navigator.userAgent);
  const $canvas = DOMUtils.createElement("canvas");
  const gl = ($canvas.getContext("webgl") || $canvas.getContext("experimental-webgl")) as WebGLRenderingContext;
  const debugRenderInfo = isFirefox ? null : gl.getExtension("WEBGL_debug_renderer_info");
  const info: string = gl.getParameter(debugRenderInfo?.UNMASKED_RENDERER_WEBGL ?? gl?.RENDERER);
  return info;
}
export const PanelGeneralConfig: PopsPanelContentConfig = {
  id: "panel-general-config",
  title: "通用",
  views: [
    {
      text: "",
      type: "container",
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
                  (isSelectedInfo) => {
                    log.info("设置当前Qmsg弹出位置" + isSelectedInfo.text);
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
      type: "container",
      text: "",
      views: [
        UIOwn(
          ($li) => {
            const $left = DOMUtils.createElement("div", {
              className: "pops-panel-item-left-text",
              innerHTML: /*html*/ `
							<p class="pops-panel-item-left-main-text">WebGL</p>
							<p class="pops-panel-item-left-desc-text"></p>
							`,
            });
            const $leftDesc = $left.querySelector<HTMLElement>(".pops-panel-item-left-desc-text")!;
            let gpuInfo = "";
            try {
              gpuInfo = queryGPUInfo();
            } catch (error: any) {
              log.error(error);
              gpuInfo = error.toString();
            }
            DOMUtils.text($leftDesc, gpuInfo);
            DOMUtils.append($li, $left);
            return $li;
          },
          void 0,
          {
            text: "WebGL",
          }
        ),
        {
          text: "功能",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("伪装登录", "disguiseLogin", false, void 0, "该功能残缺，在部分区域内会失效或者导致功能异常"),
                UISwitch("initial-scale=1", "dy-initialScale", false, void 0, "可配合手机模式放大页面"),
                UISwitch(
                  "移除<meta> apple-itunes-app",
                  "dy-apple-removeMetaAppleItunesApp",
                  true,
                  void 0,
                  "Safari使用，移除顶部横幅【Open in the 抖音 app】"
                ),
                UISwitch(
                  "监听Router改变",
                  "dy-common-listenRouterChange",
                  true,
                  void 0,
                  "当地址栏改变时，功能重载，建议开启"
                ),
                UISwitch("移除某些Cookie", "dy-cookie-remove__ac__", false, void 0, "阻止触发验证弹窗（maybe）"),
                UISwitch(
                  "新标签页打开搜索结果",
                  "dy-search-click-to-new-tab",
                  false,
                  void 0,
                  "点击搜索框的<code>搜索</code>按钮时，点击视频区域的<code>#话题</code>时，新标签页打开"
                ),
              ],
            },
            {
              text: "Url重定向",
              type: "container",
              views: [UISwitch("重定向/home", "douyin-redirect-url-home-to-root", false, void 0, "/home => /")],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "禁用抖音快捷键",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              type: "container",
              text: AutoOpenOrClose.text,
              views: [
                UISwitch("赞|取消赞", "dy-keyboard-hook-likeOrDislike", false, void 0, "Z/双击空格"),
                UISwitch("评论", "dy-keyboard-hook-comment", false, void 0, "X"),
                UISwitch("开启/关闭弹幕", "dy-keyboard-hook-danmaku-enable", false, void 0, "B"),
                UISwitch("收藏/取消收藏", "dy-keyboard-hook-collect-enable", false, void 0, "C"),
                UISwitch("复制分享口令", "dy-keyboard-hook-copyShareLink", false, void 0, "V"),
                UISwitch("清屏", "dy-keyboard-hook-clearScreen", false, void 0, "J"),
                UISwitch("自动连播", "dy-keyboard-hook-automaticBroadcast", false, void 0, "K"),
                UISwitch("视频信息", "dy-keyboard-hook-videoInfo", false, void 0, "I"),
                UISwitch("不感兴趣", "dy-keyboard-hook-notInterested", false, void 0, "R"),
                UISwitch("进入作者主页", "dy-keyboard-hook-enterAuthorHomePage", false, void 0, "F"),
                UISwitch("关注/取消关注", "dy-keyboard-hook-follow", false, void 0, "G"),
                UISwitch("抖音搜索", "dy-keyboard-hook-search", false, void 0, "Shift+F"),
                UISwitch(
                  "一键关闭当前页",
                  "dy-keyboard-hook-closeTheCurrentPageWithOneClick",
                  false,
                  void 0,
                  "Shift+Q"
                ),
                UISwitch("上下翻页", "dy-keyboard-hook-pageUpAndDown", false, void 0, "↑↓"),
                UISwitch("快进快退", "dy-keyboard-hook-fastForwardAndFastBack", false, void 0, "← →"),
                UISwitch("暂停", "dy-keyboard-hook-pause", false, void 0, "空格"),
                UISwitch("网页内全屏", "dy-keyboard-hook-fullScreenInsideThePage", false, void 0, "Y"),
                UISwitch("全屏", "dy-keyboard-hook-fullScreen", false, void 0, "H"),
                UISwitch("稍后再看", "dy-keyboard-hook-watchItOutLater", false, void 0, "L"),
                UISwitch("音量调整", "dy-keyboard-hook-volumeAdjustment", false, void 0, "Shift + / Shift -"),
                UISwitch("呼出快捷键列表", "dy-keyboard-hook-listOfCallShortcutKeys", false, void 0, "?"),
                UISwitch("关闭快捷键列表", "dy-keyboard-hook-closeTheShortcutKeyList", false, void 0, "ESC"),
                UISwitch("相关推荐", "dy-keyboard-hook-relevantRecommendation", false, void 0, "N"),
                UISwitch("听抖音", "dy-keyboard-hook-listenToDouyin", false, void 0, "T"),
                UISwitch("小窗播放", "dy-keyboard-hook-smallWindowPlay", false, void 0, "U"),
                UISwitch("推荐视频", "dy-keyboard-hook-recommendVideo", false, void 0, "P"),
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
          text: "布局屏蔽-全局",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              type: "container",
              text: AutoOpenOrClose.text,
              views: [
                UISwitch(
                  "【屏蔽】登录弹窗",
                  "watchLoginDialogToClose",
                  false,
                  void 0,
                  "自动等待元素出现并关闭登录弹窗"
                ),
              ],
            },
          ],
        },
        {
          text: "布局屏蔽-左侧导航栏",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              type: "container",
              text: AutoOpenOrClose.text,
              views: [UISwitch("【屏蔽】左侧导航栏", "shieldLeftNavigator", false)],
            },
            {
              type: "container",
              text: "",
              views: [
                UISwitch("【屏蔽】精选", "shieldLeftNavigator-tab-home", false),
                UISwitch("【屏蔽】推荐", "shieldLeftNavigator-tab-recommend", false),
                UISwitch("【屏蔽】AI搜索/抖音", "shieldLeftNavigator-tab-ai-search", false),
              ],
            },
            {
              type: "container",
              text: "",
              views: [
                UISwitch("【屏蔽】关注", "shieldLeftNavigator-tab-follow", false),
                UISwitch("【屏蔽】朋友", "shieldLeftNavigator-tab-friend", false),
                UISwitch("【屏蔽】我的", "shieldLeftNavigator-tab-user_self", false),
              ],
            },
            {
              type: "container",
              text: "",
              views: [
                UISwitch("【屏蔽】科技特辑", "shieldLeftNavigator-tab-activity_2753848", false),
                UISwitch("【屏蔽】直播", "shieldLeftNavigator-tab-live", false),
                UISwitch("【屏蔽】放映厅", "shieldLeftNavigator-tab-vs", false),
                UISwitch("【屏蔽】短剧", "shieldLeftNavigator-tab-series", false),
              ],
            },
          ],
        },
        {
          text: "布局屏蔽-顶部导航栏",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              text: AutoOpenOrClose.text,
              type: "container",
              views: [
                UISwitch("【屏蔽】顶部导航栏", "shieldTopNavigator", false),
                UISwitch("【屏蔽】右侧菜单栏", "shield-topNav-rightMenu", false),
              ],
            },
            {
              type: "container",
              text: "",
              views: [
                UISwitch("【屏蔽】AI搜索", "shield-topNav-ai-search", false),
                UISwitch("【屏蔽】客户端提示", "shieldClientTip", true),
                UISwitch("【屏蔽】充钻石", "shieldFillingBricksAndStones", true),
                UISwitch("【屏蔽】客户端", "shieldClient", true),
                UISwitch("【屏蔽】快捷访问", "shieldQuickAccess", false),
                UISwitch("【屏蔽】通知", "shieldNotifitation", false),
                UISwitch("【屏蔽】私信", "shieldPrivateMessage", false),
                UISwitch("【屏蔽】投稿", "shieldSubmission", false),
                UISwitch("【屏蔽】壁纸", "shieldWallpaper", false),
                UISwitch("【屏蔽】更多", "shield-topNav-rightMenu-more", false),
                UISwitch("【屏蔽】登录头像", "shield-topNav-rightMenu-loginAvatar", false),
              ],
            },
          ],
        },
        {
          text: "布局屏蔽-搜索",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              text: AutoOpenOrClose.text,
              type: "container",
              views: [
                UISwitch("【屏蔽】搜索框", "shieldSearch", false),
                UISwitch("【屏蔽】搜索框的提示", "shieldSearchPlaceholder", false),
                UISwitch("【屏蔽】猜你想搜", "shieldSearchGuessYouWantToSearch", false),
                UISwitch("【屏蔽】抖音热点", "shieldSearchTiktokHotspot", false),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "布局屏蔽-鼠标悬浮提示",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              type: "container",
              text: AutoOpenOrClose.text + "<br>视频区域-右侧工具栏",
              views: [
                UISwitch("进入作者主页", "dy-video-mouseHoverTip-rightToolBar-enterUserHome", false),
                UISwitch("关注", "dy-video-mouseHoverTip-rightToolBar-follow", false),
                UISwitch("点赞", "dy-video-mouseHoverTip-rightToolBar-addLike", false),
                UISwitch("评论", "dy-video-mouseHoverTip-rightToolBar-comment", false),
                UISwitch("收藏", "dy-video-mouseHoverTip-rightToolBar-collect", false),
                UISwitch("分享", "dy-video-mouseHoverTip-rightToolBar-share", false),
                UISwitch("看相关", "dy-video-mouseHoverTip-rightToolBar-seeCorrelation", false),
                UISwitch("更多", "dy-video-mouseHoverTip-rightToolBar-more", false),
              ],
            },
            {
              type: "container",
              text: "视频区域-底部工具栏",
              views: [
                UISwitch("自动连播", "dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast", false),
                UISwitch("清屏", "dy-video-mouseHoverTip-bottomToolBar-clearScreen", false),
                UISwitch("稍后再看", "dy-video-mouseHoverTip-bottomToolBar-watchLater", false),
                UISwitch("网页全屏", "dy-video-mouseHoverTip-bottomToolBar-pageFullScreen", false),
                UISwitch("全屏", "dy-video-mouseHoverTip-bottomToolBar-fullScreen", false),
              ],
            },
          ],
        },
      ],
    },
  ],
};
