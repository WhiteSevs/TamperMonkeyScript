import { DOMUtils, log, SCRIPT_NAME, utils } from "@/env";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIButton } from "@components/setting/components/ui-button";
import { DouYinVideoPlayerShortCut } from "@/main/video/DouYinVideoPlayerShortCut";
import { Panel } from "@components/setting/panel";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UIButtonShortCut } from "@components/setting/components/ui-button-shortcut";
import { UISlider } from "@components/setting/components/ui-slider";
import { AutoOpenOrClose } from "../all-open-or-close";
import { DouYinVideoFilter } from "@/main/video/DouYinVideoFilter";

export const PanelVideoConfig: PopsPanelContentConfig = {
  id: "panel-config-video",
  title: "视频",
  forms: [
    {
      text: "",
      type: "forms",
      forms: [
        {
          text: "功能",
          type: "deepMenu",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                UISelect<number>(
                  "清晰度",
                  "chooseVideoDefinition",
                  -2,
                  [
                    {
                      text: "超清 4K",
                      // ↓gearType
                      value: -2,
                    },
                    {
                      text: "超清 2K",
                      value: -1,
                    },
                    {
                      text: "高清 1080P",
                      value: 1,
                    },
                    {
                      text: "高清 720P",
                      value: 2,
                    },
                    {
                      text: "标清 540P",
                      value: 3,
                    },
                    {
                      text: "极速",
                      value: 4,
                    },
                    {
                      text: "智能",
                      value: 0,
                    },
                  ],
                  void 0,
                  "自行选择清晰度"
                ),
                UISwitch("沉浸模式", "fullScreen", false, void 0, "移除右侧工具栏、底部信息栏等"),
                UISwitch("手机模式", "mobileMode", false, void 0, "放大文字和图标"),
                UISwitch("评论区移到中间", "changeCommentToBottom", true, void 0, "修改评论区为中间弹出而非右侧区域"),
                UISwitch(
                  "修复进度条",
                  "repairProgressBar",
                  false,
                  void 0,
                  "修复移动端不能点击拖拽和定位进度的问题（仅移动端使用）"
                ),
                UISwitch("禁用双击点赞", "dy-video-disableDoubleClickLike", false, void 0, "禁止视频区域双击点赞"),
                UISwitch(
                  "手势返回关闭评论区",
                  "dy-video-gestureBackCloseComment",
                  false,
                  void 0,
                  "浏览器手势返回时关闭评论区"
                ),
                UISwitch(
                  "监听并关闭【长时间无操作，已暂停播放】弹窗",
                  "dy-video-waitToRemovePauseDialog",
                  true,
                  void 0,
                  "自动监听并检测弹窗"
                ),
                UISwitch(
                  "修改复制链接内容",
                  "dy-video-hookCopyLinkButton",
                  true,
                  void 0,
                  "分享->复制链接，复制的内容仅为链接，不包含其它"
                ),
                UISwitch(
                  "自动进入网页全屏",
                  "autoEnterElementFullScreen",
                  false,
                  void 0,
                  "网页加载完毕后自动点击网页全屏按钮进入全屏"
                ),
                UISwitch(
                  "双击进入网页全屏",
                  "dy-video-doubleClickEnterElementFullScreen",
                  false,
                  void 0,
                  "双击视频自动进入网页全屏，检测间隔250ms"
                ),
                UISwitch("移除video的bottom偏移", "dy-video-removeStyle-bottom", false, void 0, ""),
                UISwitch("禁用右侧工具栏的transform", "dy-video-disableRightToolbarTransform", false, void 0, ""),
              ],
            },
            {
              type: "forms",
              text: "解析下载",
              forms: [
                UISwitch(
                  "视频解析",
                  "parseVideo",
                  true,
                  void 0,
                  "点击视频右侧工具栏的分享按钮-下载（无视<code>该视频不支持下载</code>的提示）"
                ),
                UISwitch(
                  "弹出下载重命名文件名弹窗",
                  "dy-video-popupDownloadRenameFileName",
                  false,
                  void 0,
                  "当点击下载时，如果启用该功能，则弹出下载重命名文件名弹窗，可自定义文件名"
                ),
              ],
            },
            {
              text: "视频区域背景色",
              type: "forms",
              forms: [
                UISwitch("启用", "dy-video-bgColor-enable", false, void 0, "自定义视频背景色"),
                {
                  type: "own",
                  attributes: {
                    "data-key": "dy-video-changeBackgroundColor",
                    "data-default-value": "#000000",
                  },
                  getLiElementCallBack(liElement) {
                    let $left = DOMUtils.createElement("div", {
                      className: "pops-panel-item-left-text",
                      innerHTML: /*html*/ `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
											`,
                    });
                    let $right = DOMUtils.createElement("div", {
                      className: "pops-panel-item-right",
                      innerHTML: /*html*/ `
											<input type="color" class="pops-color-choose" />
											`,
                    });
                    let $color = $right.querySelector<HTMLInputElement>(".pops-color-choose")!;
                    $color.value = Panel.getValue("dy-video-changeBackgroundColor");
                    let $style = DOMUtils.createElement("style");
                    DOMUtils.append(document.head, $style);
                    DOMUtils.on($color, ["input", "propertychange"], (event) => {
                      log.info("选择颜色：" + $color.value);
                      $style.innerHTML = /*css*/ `
												#sliderVideo > div{
													background: ${$color.value};
												}
												`;
                      Panel.setValue("dy-video-changeBackgroundColor", $color.value);
                    });

                    liElement.appendChild($left);
                    liElement.appendChild($right);
                    return liElement;
                  },
                },
              ],
            },
            {
              type: "forms",
              text: "视频标题",
              forms: [
                UISwitch(
                  "自动隐藏视频标题",
                  "dy-video-titleInfoAutoHide",
                  false,
                  void 0,
                  "鼠标移入时自动显示，鼠标移除时自动隐藏"
                ),
                UISlider(
                  "延迟自动隐藏的时间",
                  "dy-video-titleInfoAutoHide-delayTime",
                  3000,
                  0,
                  8000,
                  void 0,
                  (value) => {
                    return `${value}ms`;
                  },
                  "设置首次延迟自动隐藏视频标题的时间，单位（ms）",
                  100
                ),
              ],
            },
            {
              type: "forms",
              text: "底部的视频控件",
              forms: [
                UISwitch(
                  "自动隐藏视频控件",
                  "dy-video-videoControlsAutoHide",
                  false,
                  void 0,
                  "鼠标移入时自动显示，鼠标移除时自动隐藏"
                ),
                UISlider(
                  "延迟自动隐藏的时间",
                  "dy-video-videoControlsAutoHide-delayTime",
                  3000,
                  0,
                  8000,
                  void 0,
                  (value) => {
                    return `${value}ms`;
                  },
                  "设置首次延迟自动隐藏视频标题的时间，单位（ms）",
                  100
                ),
              ],
            },
            {
              type: "forms",
              text: "右侧工具栏",
              forms: [
                UISwitch(
                  "自动隐藏右侧工具栏",
                  "dy-video-rightToolBarAutoHide",
                  false,
                  void 0,
                  "鼠标移入时自动显示，鼠标移除时自动隐藏"
                ),
                UISlider(
                  "延迟自动隐藏的时间",
                  "dy-video-rightToolBarAutoHide-delayTime",
                  3000,
                  0,
                  8000,
                  void 0,
                  (value) => {
                    return `${value}ms`;
                  },
                  "设置首次延迟自动隐藏视频标题的时间，单位（ms）",
                  100
                ),
              ],
            },
          ],
        },
        {
          text: "自定义快捷键",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UIButtonShortCut(
                  "倍速 -> 小",
                  "视频倍速变小",
                  "dy-video-rate-low",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinVideoPlayerShortCut.shortCut
                ),
                UIButtonShortCut(
                  "倍速 -> 大",
                  "视频倍速变大",
                  "dy-video-rate-up",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinVideoPlayerShortCut.shortCut
                ),
                UIButtonShortCut(
                  "沉浸模式",
                  "移除右侧工具栏、底部信息栏等",
                  "dy-video-shortcut-immersionMode",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinVideoPlayerShortCut.shortCut
                ),
                UIButtonShortCut(
                  "切换静音状态",
                  "切换video标签的muted属性",
                  "dy-video-shortcut-changeVideoMuted",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinVideoPlayerShortCut.shortCut
                ),
                UIButtonShortCut(
                  "视频解析",
                  "解析视频链接",
                  "dy-video-shortcut-parseVideo",
                  void 0,
                  "点击录入快捷键",
                  void 0,
                  DouYinVideoPlayerShortCut.shortCut
                ),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "禁用抖音快捷键",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          forms: [
            {
              type: "forms",
              text: AutoOpenOrClose.text,
              forms: [
                UISwitch("上翻页", "dy-keyboard-hook-arrowUp-w", false, void 0, "W"),
                UISwitch("下翻页", "dy-keyboard-hook-arrowDown-s", false, void 0, "S"),
                UISwitch("快退", "dy-keyboard-hook-videoRewind", false, void 0, "A"),
                UISwitch("快进", "dy-keyboard-hook-videoFastForward", false, void 0, "D"),
              ],
            },
          ],
        },
        {
          text: "过滤器",
          type: "deepMenu",
          forms: [
            {
              text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
              type: "forms",
              forms: [
                UISwitch("启用", "shieldVideo-exec-network-enable", true, void 0, "开启后以下功能才会生效"),
                UISwitch(
                  "仅显示被过滤的视频",
                  "shieldVideo-only-show-filtered-video",
                  false,
                  void 0,
                  "只会显示过滤规则命中的视频"
                ),
                UISwitch(
                  "新增 {...} 按钮",
                  "shieldVideo-add-parseVideoInfoButton",
                  true,
                  void 0,
                  "在视频的底部的工具栏中显示 {...} 按钮，用于查看视频信息以便于进行添加过滤规则"
                ),
                UIButton("视频过滤规则", "可过滤视频", "自定义", void 0, false, false, "primary", () => {
                  DouYinVideoFilter.showView();
                }),
              ],
            },
            {
              type: "forms",
              text: "",
              forms: [
                UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
                  DouYinVideoFilter.$data.videoFilterRuleStorage.importRules();
                }),
                UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
                  DouYinVideoFilter.$data.videoFilterRuleStorage.exportRules(SCRIPT_NAME + "-视频过滤规则.json");
                }),
              ],
            },
          ],
        },
      ],
    },
    {
      text: "",
      type: "forms",
      forms: [
        {
          text: "布局屏蔽-视频区域内",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          forms: [
            {
              text: AutoOpenOrClose.text + "<br>右侧工具栏",
              type: "forms",
              forms: [
                UISwitch(
                  "【屏蔽】切换播放",
                  "shieldPlaySwitchButton",
                  false,
                  void 0,
                  "屏蔽元素，在右侧作者头像上方或者是在右侧区域"
                ),
                UISwitch("【屏蔽】AI抖音", "blockAIDouYin", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】作者头像", "shieldAuthorAvatar", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】点赞", "shieldLikeButton", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】评论", "shieldCommentButton", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】收藏", "shieldCollectionButton", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】分享", "shieldSharenButton", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】听抖音", "shieldListenDouYinButton", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】看相关", "shieldRelatedRecommendationsButton", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】更多", "shieldMoreButton", false, void 0, "<code>...</code>按钮"),
              ],
            },
            {
              text: "底部工具栏-视频信息区域",
              type: "forms",
              forms: [
                UISwitch(
                  "【屏蔽】视频信息",
                  "dy-video-bottom-shieldVideoInfoWrap",
                  false,
                  void 0,
                  "屏蔽元素，可代替【清屏】功能"
                ),
                UISwitch(
                  "<code>【屏蔽】点击推荐</code>或<code>【屏蔽】共xx人推荐</code>",
                  "dy-video-blockClickRecommend",
                  false,
                  void 0,
                  "屏蔽元素"
                ),
                UISwitch(
                  "【屏蔽】视频标题上面的标签",
                  "dy-video-blockTitleTopTag",
                  false,
                  void 0,
                  "例如：每周精选、抖音精选"
                ),
                UISwitch(
                  "【屏蔽】视频标题下面的标签",
                  "dy-video-bottom-shieldVideoUnderTitleTag",
                  false,
                  void 0,
                  "例如：相关搜索、AI搜索、合集...等"
                ),
                UISwitch(
                  "【屏蔽】及时接收作品更新提醒",
                  "dy-video-blockClickUpdateReminder",
                  false,
                  void 0,
                  "屏蔽元素"
                ),
                UISwitch(
                  "【屏蔽】作者声明",
                  "dy-video-blockAuthorDeclaration",
                  false,
                  void 0,
                  "例如：<code>作者声明：虚构演绎，仅供娱乐</code>"
                ),
                UISwitch("【屏蔽】识别画面", "dy-video-blockAIIdentifyTheScreen", false, void 0, "屏蔽元素"),
              ],
            },
            {
              type: "forms",
              text: "底部工具栏-播放工具",
              forms: [
                UISwitch("【屏蔽】播放工具组件", "shieldBottomVideoToolBar", false, void 0, "屏蔽元素"),
                UISwitch(
                  "【屏蔽】弹幕容器",
                  "shieldBottomVideoToolbarDanmuContainer",
                  false,
                  void 0,
                  "屏蔽元素（不包括屏蔽弹幕）"
                ),
                UISwitch("【屏蔽】AI笔记", "shieldBottomVideoToolbar-aiNotes", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】连播", "shieldBottomVideoToolbar-autoPlay", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】清屏", "shieldBottomVideoToolbar-clearScreen", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】清晰度", "shieldBottomVideoToolbar-playclarity", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】倍速", "shieldBottomVideoToolbar-playback", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】稍后再看", "shieldBottomVideoToolbar-watchLater", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】小窗模式", "shieldBottomVideoToolbar-miniMode", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】网页全屏", "shieldBottomVideoToolbar-pageFullScreen", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】进入全屏", "shieldBottomVideoToolbar-fullScreen", false, void 0, "屏蔽元素"),
              ],
            },
            {
              text: "其它",
              type: "forms",
              forms: [
                UISwitch("【屏蔽】右侧的展开评论按钮", "shieldRightExpandCommentButton", true, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】搜索悬浮栏", "shieldSearchFloatingBar", true, void 0, "屏蔽元素，一般出现在左上角"),
                UISwitch(
                  "【屏蔽】网页全屏关闭按钮",
                  "shieldCloseFullScreenButton",
                  true,
                  void 0,
                  "屏蔽元素，一般开启网页全屏后出现在左上角"
                ),
                UISwitch(
                  "【屏蔽】购物信息",
                  "dy-video-blockShopInfo",
                  true,
                  void 0,
                  "屏蔽元素，该元素出现在视频底部的用户名、标题信息的上面"
                ),
              ],
            },
          ],
        },
        {
          text: "布局屏蔽-评论区域内",
          type: "deepMenu",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          forms: [
            {
              text: AutoOpenOrClose.text,
              type: "forms",
              forms: [
                UISwitch("【屏蔽】评论工具栏", "dy-video-shieldUserCommentToolBar", false, void 0, "屏蔽元素"),
                UISwitch(
                  "【屏蔽】大家都在搜",
                  "dy-video-shieldUserCommentEveryOneAllSearch",
                  false,
                  void 0,
                  "在评论区的顶部出现"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
