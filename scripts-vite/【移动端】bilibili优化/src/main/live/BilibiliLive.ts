import { DOMUtils, log, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { Panel } from "@components/setting/panel";
import { BilibiliNetworkHook } from "@/hook/BilibiliNetworkHook";
import { VueUtils } from "@components/utils/VueUtils";

// 屏蔽元素
const BilibiliLiveBlockNode = {
  init() {
    Panel.execMenuOnce("bili-live-block-chatRoom", () => {
      return this.blockChatRoom();
    });
    Panel.execMenuOnce("bili-live-block-brush-prompt", () => {
      return this.blockBrushPrompt();
    });
    Panel.execMenuOnce("bili-live-block-control-panel", () => {
      return this.blockControlPanel();
    });
  },
  /**
   * 屏蔽聊天室
   */
  blockChatRoom() {
    log.info("屏蔽聊天室");
    return CommonUtil.addBlockCSS("#chat-items");
  },
  /**
   * 屏蔽xxx进入直播间
   */
  blockBrushPrompt() {
    log.info("屏蔽xxx进入直播间");
    return CommonUtil.addBlockCSS("#brush-prompt");
  },
  /**
   * 屏蔽底部工具栏
   */
  blockControlPanel() {
    log.info("屏蔽底部工具栏");
    return CommonUtil.addBlockCSS(".control-panel");
  },
};

export const BilibiliLive = {
  init() {
    BilibiliLiveBlockNode.init();
    Panel.execMenuOnce("bili-live-prevent-openAppBtn", () => {
      this.preventOpenAppBtn();
    });
  },
  /**
   * 阻止触发打开App
   */
  preventOpenAppBtn() {
    DOMUtils.waitNode("body").then(($body) => {
      log.info("阻止.open-app-btn元素触发点击事件");
      DOMUtils.on<PointerEvent | MouseEvent>(
        $body,
        "click",
        ".open-app-btn",
        function (event, selectorTarget) {
          const vueInst = VueUtils.getVue(selectorTarget);
          if (typeof vueInst?.open === "function") {
            vueInst.open = function () {
              log.info(`成功阻止.open-app-btn元素触发点击事件`);
            };
          }
        },
        {
          capture: true,
        }
      );
    });
  },
};
