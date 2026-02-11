import { addStyle, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinLiveMessageFilter } from "./DouYinLiveMessageFilter";

export const DouYinLiveMessage = {
  /**
   * 消息过滤
   */
  filterMessage() {
    log.info("消息过滤");
    const lockFn = new utils.LockFunction(() => {
      if (!DouYinRouter.isLive()) return;
      DouYinLiveMessageFilter.change();
    });
    DouYinLiveMessageFilter.init();
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
  /**
   * 执行消息过滤
   * @returns {boolean}
   * + true 过滤
   * + false 不过滤
   */
  execFilter(messageInst: any, method: string) {
    return DouYinLiveMessageFilter.checkMessageFilter(messageInst, method);
  },
};
