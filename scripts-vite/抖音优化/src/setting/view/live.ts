import { DOMUtils, log, utils } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import { DouYinMessageFilter } from "@/main/live/DouYinLiveMessage";
import { Panel } from "@components/setting/panel";
import { UISelect } from "@components/setting/components/ui-select";
import { VideoQualityMap } from "@/main/live/DouYinLive";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { AutoOpenOrClose } from "../all-open-or-close";
import { UIButtonShortCut } from "@components/setting/components/ui-button-shortcut";
import { DouYinLiveShortCut } from "@/main/live/DouYinLiveShortCut";
import { UIOwn } from "@components/setting/components/ui-own";

export const PanelLiveConfig: PopsPanelContentConfig = {
  id: "panel-config-live",
  title: "直播",
  views: [
    {
      text: "",
      type: "container",
      views: [
        {
          text: "功能",
          type: "deepMenu",
          views: [
            {
              text: "功能",
              type: "container",
              views: [
                UISelect<string>(
                  "清晰度",
                  "live-chooseQuality",
                  "origin",
                  (() => {
                    return Object.keys(VideoQualityMap).map((key: string) => {
                      let item = VideoQualityMap[key];
                      return {
                        value: key,
                        text: item.label,
                      };
                    });
                  })(),
                  void 0,
                  "自行选择清晰度"
                ),
                // UISwitch(
                // 	"解锁画质选择（已失效，请关闭该功能）",
                // 	"live-unlockImageQuality",
                // 	false,
                // 	void 0,
                // 	"未登录的情况下选择原画实际上是未登录的情况下最高选择的画质"
                // ),
                UISwitch(
                  "自动进入网页全屏",
                  "live-autoEnterElementFullScreen",
                  false,
                  void 0,
                  "网页加载完毕后自动点击网页全屏按钮进入全屏"
                ),
                UISwitch(
                  "监听并关闭【长时间无操作，已暂停播放】弹窗",
                  "live-waitToRemovePauseDialog",
                  true,
                  void 0,
                  "自动监听并检测弹窗"
                ),
                UISwitch("禁止自动播放", "live-pauseVideo", false, void 0, "3秒内禁止任何形式的播放"),
                UISwitch("禁用双击点赞", "dy-live-disableDoubleClickLike", false, void 0, "禁止直播视频区域双击点赞"),
                UISwitch("自动关闭聊天室", "dy-live-autoCloseChatRoom", false, void 0, "自动点击关闭聊天室按钮"),
                UISwitch("禁用鼠标滚轮切换直播间", "live-prevent-wheel-switchLiveRoom", false, void 0, ""),
              ],
            },
            {
              text: "视频区域背景色",
              type: "container",
              views: [
                UISwitch("启用", "live-bgColor-enable", false, void 0, "自定义视频背景色"),
                UIOwn(
                  ($li) => {
                    const $left = DOMUtils.createElement("div", {
                      className: "pops-panel-item-left-text",
                      innerHTML: /*html*/ `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色</p>
											`,
                    });
                    const $right = DOMUtils.createElement("div", {
                      className: "pops-panel-item-right",
                      innerHTML: /*html*/ `
											<input type="color" class="pops-color-choose" />
											`,
                    });
                    const $color = $right.querySelector<HTMLInputElement>(".pops-color-choose")!;
                    $color.value = Panel.getValue("live-changeBackgroundColor");
                    DOMUtils.on($color, ["input", "propertychange"], (event) => {
                      log.info("选择颜色：" + $color.value);
                      Panel.setValue("live-changeBackgroundColor", $color.value);
                    });

                    $li.appendChild($left);
                    $li.appendChild($right);
                    return $li;
                  },
                  {
                    "live-changeBackgroundColor": "#000000",
                  },
                  {
                    text: "视频背景颜色",
                    desc: "自定义视频背景颜色",
                  }
                ),
              ],
            },
          ],
        },
        {
          text: "消息过滤器",
          type: "deepMenu",
          description: "包括：弹幕、聊天室",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("启用", "live-danmu-shield-rule-enable", false, void 0, "启用自定义的弹幕过滤规则"),
                UISwitch("【屏蔽】送礼信息", "live-danmu-shield-gift", false, void 0, ""),
                UISwitch("【屏蔽】福袋口令", "live-danmu-shield-lucky-bag", false, void 0, ""),
              ],
            },
            {
              type: "container",
              text: "聊天室",
              views: [
                UISwitch(
                  "【屏蔽】xxx 为主播加了 xx分",
                  "live-message-shield-biz_scene-common_text_game_score",
                  false,
                  void 0,
                  ""
                ),
                UISwitch("【屏蔽】emoji", "live-message-shield-method-emoji-chat", false, void 0, ""),
              ],
            },
            {
              type: "container",
              text: "",
              views: [
                UIOwn(($li: HTMLLIElement) => {
                  const $textareaWrapper = DOMUtils.createElement(
                    "div",
                    {
                      className: "pops-panel-textarea",
                      innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个\n例如：屏蔽包含'主播'的消息\n主播" style="height:350px;"></textarea>`,
                    },
                    {
                      style: "width: 100%;",
                    }
                  );
                  const textarea = $textareaWrapper.querySelector("textarea")!;
                  textarea.value = DouYinMessageFilter.get();
                  DOMUtils.on(
                    textarea,
                    ["input", "propertychange"],
                    utils.debounce(function () {
                      DouYinMessageFilter.set(textarea.value);
                      DouYinMessageFilter.init();
                    }, 1000)
                  );
                  $li.appendChild($textareaWrapper);
                  return $li;
                }),
              ],
            },
          ],
        },
        {
          text: "自定义快捷键",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UIButtonShortCut(
                  "【屏蔽】聊天室",
                  "",
                  "dy-live-block-chatroom",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinLiveShortCut.shortCut
                ),
                UIButtonShortCut(
                  "【屏蔽】礼物特效",
                  "",
                  "dy-live-shieldGiftEffects",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinLiveShortCut.shortCut
                ),
                UIButtonShortCut(
                  "切换静音状态",
                  "切换video标签的muted属性",
                  "dy-live-shortcut-changeVideoMuted",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinLiveShortCut.shortCut
                ),
              ],
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
                UISwitch("三屏画面", "dy-live-threeScreen", false, void 0, "S"),
                UISwitch("刷新", "dy-live-refresh", false, void 0, "E"),
                UISwitch("屏幕旋转", "dy-live-screenRotation", false, void 0, "D"),
                UISwitch("开启小窗模式", "dy-live-enableSmallWindowMode", false, void 0, "U"),
                UISwitch("切换直播间", "dy-live-switchLiveRoom", false, void 0, "↑↓"),
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
          text: "布局屏蔽-视频区域内",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              text: AutoOpenOrClose.text,
              type: "container",
              views: [
                UISwitch(
                  "【屏蔽】顶栏信息",
                  "live-shieldTopToolBarInfo",
                  false,
                  void 0,
                  "包括直播作者、右侧的礼物展馆"
                ),
                UISwitch("【屏蔽】底部的礼物栏", "live-shieldGiftColumn", false),
                UISwitch("【屏蔽】礼物特效", "live-shieldGiftEffects", false),
                UISwitch("【屏蔽】福袋", "live-shieldLucky", false),
                UISwitch("【屏蔽】弹幕", "live-shieldDanmuku", false),
                UISwitch("【屏蔽】小黄车", "live-shielYellowCar", false),
                UISwitch(
                  "【屏蔽】点亮展馆帮主播集星",
                  "live-block-exhibition-banner-dylive-tooltip",
                  false,
                  void 0,
                  "礼物展馆下面的悬浮提示"
                ),
              ],
            },
            {
              type: "container",
              text: "右键菜单",
              views: [
                UISwitch(
                  "【屏蔽】下载客户端",
                  "dy-live-blockVideoRightMenu-downloadClient",
                  true,
                  void 0,
                  "屏蔽右键菜单项"
                ),
              ],
            },
          ],
        },
        {
          text: "布局屏蔽-聊天室",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              text: AutoOpenOrClose.text,
              type: "container",
              views: [
                UISwitch("【屏蔽】聊天室", "live-shieldChatRoom", false),
                UISwitch("【屏蔽】贵宾席", "live-shielChatRoomVipSeats", false),
                UISwitch("【屏蔽】用户等级图标", "dy-live-shieldUserLevelIcon", false),
                UISwitch("【屏蔽】VIP图标", "dy-live-shieldUserVIPIcon", false),
                UISwitch("【屏蔽】粉丝牌", "dy-live-shieldUserFansIcon", false),
                UISwitch(
                  "【屏蔽】信息播报",
                  "dy-live-shieldMessage",
                  false,
                  void 0,
                  "顶部左右滚动播报（xxx进入/加入直播间），底部滚动播报（xxx来了，xxx给主播点赞）"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
