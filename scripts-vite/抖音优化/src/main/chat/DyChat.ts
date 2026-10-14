import { $, $$, DOMUtils, log, utils } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";

export const DyChat = {
  init() {},
  /**
   * 自动续火花
   */
  async autoKeepTheSparkAlive() {
    if (!CommonUtil.isTopWindow()) {
      return;
    }
    const execTimeKey = "dy-chat-autoKeepTheSparkAlive-latestRunTimeStamp";
    const latestRunTime = Panel.getValue<number>(execTimeKey);
    if (latestRunTime && utils.formatTime(latestRunTime, "yyyy-MM-dd") === utils.formatTime(Date.now(), "yyyy-MM-dd")) {
      // 今天已经运行过了
      log.info("自动续火花：今天已经运行过了。执行时间：" + utils.formatTime(latestRunTime));
      return;
    }
    if (!DouYinRouter.isChat()) {
      window.open("https://www.douyin.com/chat", "_blank");
      return;
    }
    const needRunUserList: string[] = Panel.getValue("dy-chat-autoKeepTheSparkAlive-userList", "")
      .split("\n")
      .map((it) => {
        it = it.trim();
        if (it === "") {
          return;
        }
        if (isNaN(parseInt(it))) {
          // 必须是数字
          return;
        }
        return it;
      })
      .filter((it) => it != null);
    if (needRunUserList.length !== 0) {
      await DOMUtils.onReady();

      const getFireTip = (text: string) => {
        const message = /*html*/ `
            <div style="text-align: center;">「续火花」</div>
            ${
              text.trim().startsWith("<") || text.trim().endsWith(">")
                ? text
                : /*html*/ `
                <p style="text-align: left;">${text}</p>
            `
            }
        `;
        log.info(message);
        return message;
      };
      const $loading = Qmsg.loading(getFireTip("正在获取消息列表中，请稍后..."), {
        onClose() {
          Panel.setValue(execTimeKey, Date.now());
        },
      });
      await DOMUtils.waitNode('.conversationConversationListwrapper [data-e2e="conversation-item"]', 60000);

      log.info(`自动续火花`);
      const chatUserList: {
        $el: HTMLElement;
        itemInfo: {};
        userInfo: {
          uid: number | string;
          userId: string;
          latestChatTime: Date;
          latestChatTimeStr: string;
        };
      }[] = [];
      $$('[data-e2e="conversation-item"]').forEach(($item) => {
        const reactFiber = utils.getReactInstance($item).reactFiber;
        if (!reactFiber) {
          return;
        }
        const conversation = reactFiber?.return?.memoizedProps?.conversation;
        if (!conversation) {
          return;
        }
        const uid = conversation?.toParticipantUserId;
        const userId = conversation?.toParticipantSecUserId;
        // 由于对面用户可能拉黑当前用户或者陌生人仅能发送一条消息
        // 所以这里需要获取最后可见消息的时间
        const latestChatTime = conversation?.myLastVisibleMessage?.createdAt || conversation?.myLastMessage?.createdAt;
        chatUserList.push({
          $el: $item,
          itemInfo: conversation,
          userInfo: {
            uid,
            userId,
            latestChatTime,
            latestChatTimeStr: utils.formatTime(latestChatTime),
          },
        });
      });
      if (import.meta.hot) {
        console.log(chatUserList);
      }
      if (!chatUserList.length) {
        $loading.close();
        Qmsg.error("获取消息列表失败");
        return;
      }
      const sendText = Panel.getValue("dy-chat-autoKeepTheSparkAlive-sendText", "续火花");
      let isRunCount = 0;
      let successCount = 0;
      let failCount = 0;
      for (const runUserItem of needRunUserList) {
        isRunCount++;
        const userItem = chatUserList.find((it) => it.userInfo.uid.toString() === runUserItem.toString());
        if (!userItem) {
          failCount++;
          $loading.setHTML(
            getFireTip(/*html*/ `
          <div style="text-align: left;">
            <p>进度：${isRunCount}/${needRunUserList.length}</p>
            <p>成功：${successCount} 失败：${failCount}</p>
            <p>用户id：${runUserItem}</p>
            <p>日志：未找到该用户，3s后执行下一个</p>
          </div>
        `)
          );
          log.error(`消息列表中未找到用户id为${runUserItem}的用户`);
          await utils.sleep(3000);
          continue;
        }
        if (
          utils.formatTime(userItem.userInfo.latestChatTime, "yyyy-MM-dd") ===
          utils.formatTime(new Date(), "yyyy-MM-dd")
        ) {
          successCount++;
          $loading.setHTML(
            getFireTip(/*html*/ `
          <div style="text-align: left;">
            <p>进度：${isRunCount}/${needRunUserList.length}</p>
            <p>成功：${successCount} 失败：${failCount}</p>
            <p>用户id：${runUserItem}</p>
            <p>日志：该用户今日已发送消息，3s后执行下一个</p>
          </div>
        `)
          );
          await utils.sleep(3000);
          continue;
        }
        $loading.setHTML(
          getFireTip(/*html*/ `
          <div style="text-align: left;">
            <p>进度：${isRunCount}/${needRunUserList.length}</p>
            <p>成功：${successCount} 失败：${failCount}</p>
            <p>用户id：${userItem.userInfo.uid}</p>
            <p>最后聊天时间：${userItem.userInfo.latestChatTimeStr}</p>
            <p>日志：正在等待进入聊天窗口，请稍后...</p>
          </div>
        `)
        );
        DouYinUtils.simulateClick(userItem.$el);
        const $componentsRightPanelwrapper = $(".componentsRightPanelwrapper");
        if (!$componentsRightPanelwrapper) {
          Qmsg.error("获取聊天窗口失败");
          $loading.close();
          return;
        }
        await utils.sleep(3000);
        $loading.setHTML(
          getFireTip(/*html*/ `
          <div style="text-align: left;">
            <p>进度：${isRunCount}/${needRunUserList.length}</p>
            <p>成功：${successCount} 失败：${failCount}</p>
            <p>用户id：${userItem.userInfo.uid}</p>
            <p>最后聊天时间：${userItem.userInfo.latestChatTimeStr}</p>
            <p>日志：发送消息中，请稍后...</p>
          </div>
        `)
        );
        const $editor = $(".editor-kit-container");
        if (!$editor) {
          Qmsg.error("获取editor元素失败");
          $loading.close();
          return;
        }
        const editor = utils.getReactInstance($editor).reactFiber?.return?.memoizedProps?.editor;
        if (!editor) {
          Qmsg.error("获取editor实例失败");
          $loading.close();
          return;
        }
        if (typeof editor?.setHTML !== "function") {
          Qmsg.error("获取editor实例的setHTML函数失败");
          $loading.close();
          return;
        }
        editor?.setHTML(sendText);
        const $sendBtn = $(".messageMsgInputpublishBtn");
        if (!$sendBtn) {
          Qmsg.error("获取发送按钮失败");
          $loading.close();
          return;
        }
        // 发送
        await utils.sleep(1000);
        DouYinUtils.simulateClick($sendBtn);
        successCount++;
        $loading.setHTML(
          getFireTip(/*html*/ `
          <div style="text-align: left;">
            <p>进度：${isRunCount}/${needRunUserList.length}</p>
            <p>成功：${successCount} 失败：${failCount}</p>
            <p>用户id：${userItem.userInfo.uid}</p>
            <p>最后聊天时间：${userItem.userInfo.latestChatTimeStr}</p>
            <p>日志：已发送消息，3s后执行下一个</p>
          </div>
        `)
        );
        await utils.sleep(3000);
      }
      Qmsg.info("续火花执行完毕");
      $loading.setHTML(
        getFireTip(/*html*/ `
          <div style="text-align: left;">
            <p>进度：${isRunCount}/${needRunUserList.length}</p>
            <p>成功：${successCount} 失败：${failCount}</p>
            <p>日志：已全部执行完毕，5s后自动关闭该消息提示</p>
          </div>
        `)
      );
      await utils.sleep(5000);
      $loading.close();
    }
  },
};
