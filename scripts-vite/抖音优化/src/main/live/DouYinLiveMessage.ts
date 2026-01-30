import { $$, addStyle, DOMUtils, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { GM_getValue, GM_setValue } from "ViteGM";

export const DouYinMessageFilter = {
  key: "douyin-live-danmu-rule",
  $data: {
    rule: <RegExp[]>[],
  },
  init() {
    this.initRule();
  },
  /**
   * 初始化解析规则
   */
  initRule() {
    this.$data.rule.length = 0;
    const localRule = this.get().trim();
    const localRuleSplit = localRule.split("\n");
    localRuleSplit.forEach((item: string) => {
      if (item.trim() == "") return;
      item = item.trim();
      const itemRegExp = new RegExp(item.trim());
      this.$data.rule.push(itemRegExp);
    });
  },
  /**
   * 通知消息改变(可能是新增)
   */
  change() {
    this.execMessageFilter(
      Array.from($$<HTMLElement>("#chatroom .webcast-chatroom .webcast-chatroom___item:not([data-is-filter])")),
      "聊天室"
    );
  },
  /**
   * 执行过滤
   * @param messageQueue 消息元素队列
   * @param from 来自
   */
  execMessageFilter(messageQueue: HTMLElement[], from: string) {
    for (let index = 0; index < messageQueue.length; index++) {
      const $danmu = messageQueue[index];
      // 获取消息对象
      const react = utils.getReactInstance($danmu);
      const messageIns =
        react?.reactFiber?.return?.memoizedProps?.message ||
        react?.reactFiber?.memoizedProps?.children?.props?.children?.props?.message ||
        react?.reactContainer?.memoizedState?.element?.props?.message;
      if (typeof messageIns !== "object" || messageIns == null) {
        continue;
      }
      const message = messageIns?.payload?.content || messageIns?.payload?.common?.describe;

      /**
       * 消息类型
       *
       * + WebcastChatMessage 普通消息
       * + WebcastGiftMessage 礼物消息
       * + WebcastRoomMessage
       * + WebcastFansclubMessage
       * + WebcastEmojiChatMessage
       * + WebcastExhibitionChatMessage
       * + WebcastScreenChatMessage
       * + WebcastLikeMessage
       */
      const method = messageIns.method;
      const chat_by: undefined | string = messageIns?.payload?.chat_by;
      const biz_scene: undefined | string = messageIns?.payload?.biz_scene;
      let flag = false;
      if (!flag) {
        if (method === "WebcastGiftMessage") {
          // 礼物弹幕
          if (Panel.getValue("live-danmu-shield-gift")) {
            flag = true;
          }
        } else if (method === "WebcastChatMessage") {
          // 普通弹幕
          if (chat_by === "0") {
            //
          } else if (chat_by === "9" || chat_by === "10") {
            // 来自福袋一键发送
            // 福袋口令
            if (Panel.getValue("live-danmu-shield-lucky-bag")) {
              flag = true;
            }
          } else if (chat_by === "5") {
            // 主播@ 别人
          } else if (chat_by === "11") {
            // 超管的发言
          } else {
            if (import.meta.env.DEV) {
              log.info("未知弹幕实例chat_by：" + chat_by, messageIns);
            }
          }
        } else if (method === "WebcastRoomMessage") {
          // 聊天室的信息
          // 例如：欢迎来到直播间！抖音严禁未成年人直播或礼物消费。严禁违法违规、低俗色情、吸烟酗酒、人身伤害等直播内容。理性消费，如主播在直播中以不当方式诱导消费，请谨慎辨别。切勿私下交易，以防人身财产损失，谨防网络诈骗。
          // 是否是置顶信息
          const system_top_msg = messageIns?.payload?.system_top_msg;
          const biz_scene = messageIns?.payload?.biz_scene;
          if (biz_scene === "live_recommend") {
            // xxx推荐了直播
            // 黄色的信息播报
          } else if (system_top_msg) {
            // 系统消息
          }
        } else if (method === "WebcastFansclubMessage") {
          // 恭喜 xxx 成为第xxx名xxx成员
        } else if (method === "WebcastEmojiChatMessage") {
          // 表情包|图片|emoji
        } else if (method === "WebcastExhibitionChatMessage") {
          //
        } else if (method === "WebcastScreenChatMessage") {
          //
        } else if (method === "WebcastLikeMessage") {
          // 点赞信息
        } else {
          if (import.meta.env.DEV) {
            log.info("未知消息实例类型：" + method, messageIns, $danmu);
          }
        }
      }
      if (!flag && typeof biz_scene === "string") {
        if (biz_scene === "common_text_game_score") {
          // xxx 为主播加了 xx分
          if (Panel.getValue("live-message-shield-biz_scene-common_text_game_score")) {
            flag = true;
          }
        }
      }
      if (!flag) {
        // 自定义消息过滤器
        flag =
          typeof message === "string" &&
          this.$data.rule.some((ruleText) => {
            if (message.match(ruleText)) {
              log.info("自定义规则过滤 " + from + " 消息: " + message);
              return true;
            }
          });
      }

      if (flag) {
        $danmu.setAttribute("data-is-filter", "true");
        if (import.meta.env.DEV) {
          log.info("过滤弹幕: " + message);
        }
        DOMUtils.hide($danmu, false);
      }
    }
  },
  set(value: string) {
    GM_setValue(this.key, value);
  },
  get() {
    return GM_getValue(this.key, "");
  },
};

export const DouYinLiveMessage = {
  /**
   * 消息过滤
   */
  filterMessage() {
    log.info("消息过滤");
    const lockFn = new utils.LockFunction(() => {
      if (!DouYinRouter.isLive()) return;
      DouYinMessageFilter.change();
    });
    DouYinMessageFilter.init();
    const observer = utils.mutationObserver(document.body, {
      config: {
        childList: true,
        subtree: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });

    return [
      addStyle(/*css*/ `
				/* 修复一下聊天室屏蔽了某些聊天导致上下抖动不停 */
				.webcast-chatroom___list > div{
					height: 100% !important;
				}
			`),
      () => observer.disconnect(),
    ];
  },
};
