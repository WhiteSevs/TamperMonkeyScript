import { $$, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { GM_setValue, GM_getValue } from "ViteGM";

export const DouYinLiveMessageFilter = {
  key: "douyin-live-danmu-rule",
  $data: {
    rule: <RegExp[]>[],
    /** 屏蔽礼物 */
    block_gift: false,
    /** 屏福袋带口令 */
    block_lucky_bag: false,
    block_biz_scene: false,
  },
  init() {
    this.initRule();
    const block_gift = "live-danmu-shield-gift";
    const block_lucky_bag = "live-danmu-shield-lucky-bag";
    const block_biz_scene = "live-message-shield-biz_scene-common_text_game_score";
    Panel.addValueChangeListener(
      block_gift,
      (_, value) => {
        this.$data.block_gift = value;
      },
      {
        immediate: true,
      }
    );
    Panel.addValueChangeListener(
      block_lucky_bag,
      (_, value) => {
        this.$data.block_lucky_bag = value;
      },
      {
        immediate: true,
      }
    );
    Panel.addValueChangeListener(
      block_biz_scene,
      (_, value) => {
        this.$data.block_biz_scene = value;
      },
      {
        immediate: true,
      }
    );
  },
  /**
   * 初始化|重置解析规则
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
    this.execMessageFilterWithNode(
      Array.from($$<HTMLElement>("#chatroom .webcast-chatroom .webcast-chatroom___item:not([data-is-filter])"))
    );
  },
  /**
   * 执行过滤
   * @param messageQueue 消息元素队列
   */
  execMessageFilterWithNode(messageQueue: HTMLElement[]) {
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
      const flag = this.checkMessageFilter(messageIns);

      if (flag) {
        $danmu.setAttribute("data-is-filter", "true");
        if (import.meta.env.DEV) {
          const message = messageIns?.payload?.content || messageIns?.payload?.common?.describe;
          log.info("过滤信息: " + message);
        }
        // DOMUtils.hide($danmu, false);
        DOMUtils.remove($danmu);
      }
    }
  },
  /**
   * 检测该消息是否应该被过滤
   * @returns {boolean}
   * + true 过滤
   * + false 不过滤
   */
  checkMessageFilter(messageInst: any, method?: string) {
    const message = messageInst?.payload?.content || messageInst?.payload?.common?.describe;

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
    method = method ?? messageInst?.method;
    const chat_by: undefined | string = messageInst?.payload?.chat_by;
    const biz_scene: undefined | string = messageInst?.payload?.biz_scene;
    let flag = false;
    if (!flag) {
      if (method === "WebcastGiftMessage") {
        // 礼物信息
        if (this.$data.block_gift) {
          flag = true;
        }
      } else if (method === "WebcastChatMessage") {
        // 普通信息
        if (chat_by === "0") {
          //
        } else if (chat_by === "9" || chat_by === "10") {
          // 来自福袋一键发送
          // 福袋口令
          if (this.$data.block_lucky_bag) {
            flag = true;
          }
        } else if (chat_by === "5") {
          // 主播@ 别人
        } else if (chat_by === "11") {
          // 超管的发言
        } else {
          if (import.meta.env.DEV) {
            log.info("未知信息实例chat_by：" + chat_by, messageInst);
          }
        }
      } else if (method === "WebcastRoomMessage") {
        // 聊天室的信息
        // 例如：欢迎来到直播间！抖音严禁未成年人直播或礼物消费。严禁违法违规、低俗色情、吸烟酗酒、人身伤害等直播内容。理性消费，如主播在直播中以不当方式诱导消费，请谨慎辨别。切勿私下交易，以防人身财产损失，谨防网络诈骗。
        // 是否是置顶信息
        const system_top_msg = messageInst?.payload?.system_top_msg;
        const biz_scene = messageInst?.payload?.biz_scene;
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
          log.info("未知消息实例类型：" + method, messageInst);
        }
      }
    }
    if (!flag && typeof biz_scene === "string") {
      if (biz_scene === "common_text_game_score") {
        // xxx 为主播加了 xx分
        if (this.$data.block_biz_scene) {
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
            if (import.meta.env.DEV) {
              log.info("自定义规则成功过滤消息: " + message);
            }
            return true;
          }
        });
    }

    return flag;
  },
  set(value: string) {
    GM_setValue(this.key, value);
  },
  get() {
    return GM_getValue(this.key, "");
  },
};
