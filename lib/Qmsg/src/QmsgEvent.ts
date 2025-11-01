import { QmsgInstStorage } from "./QmsgInstStorage";

export const QmsgEvent = {
  visibilitychange: {
    eventConfig: {
      /**
       * 添加visibilitychange事件监听
       * 当页面切换时，如果切换前的页面存在Qmsg实例且未关闭，切换后，页面活跃度会降低，导致setTimeout/setInterval失效或丢失事件
       * 监听visibilitychange，判断切换回来时，如果当前时间-开始时间大于timeout，则关闭
       * 如果设置了动画，使用close，否则使用destroy
       */
      callback() {
        if (document.visibilityState === "visible") {
          // 回到页面
          for (let index = 0; index < QmsgInstStorage.insInfoList.length; index++) {
            const qmsgStorageItem = QmsgInstStorage.insInfoList[index];
            const qmsgInst = qmsgStorageItem.inst;
            const qmsgSetting = qmsgInst.setting;
            const now = Date.now();
            if (
              // loading类型不被自动关闭
              qmsgSetting.type !== "loading" &&
              // 必须为自动关闭
              qmsgSetting.autoClose &&
              // 存在启动时间，不存在结束时间（未关闭）
              typeof qmsgInst.endTime !== "number" &&
              typeof qmsgInst.startTime === "number" &&
              typeof qmsgSetting.timeout === "number" &&
              now - qmsgInst.startTime >= qmsgSetting.timeout
            ) {
              // 超出时间，关闭
              qmsgInst.close();
            }
          }
        } else {
          // 离开页面
        }
      },
      option: {
        capture: true,
      } as AddEventListenerOptions,
    },
    /**
     * 监听事件
     */
    addEvent() {
      if ("visibilityState" in document) {
        document.addEventListener(
          "visibilitychange",
          QmsgEvent.visibilitychange.eventConfig.callback,
          QmsgEvent.visibilitychange.eventConfig.option
        );
      } else {
        console.error("Qmsg addEvent visibilityState not support");
      }
    },
    /**
     * 移除监听事件
     */
    removeEvent() {
      document.removeEventListener(
        "visibilitychange",
        QmsgEvent.visibilitychange.eventConfig.callback,
        QmsgEvent.visibilitychange.eventConfig.option
      );
    },
  },
};
