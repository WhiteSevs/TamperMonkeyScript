import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIButton, UIInput, UITextArea } from "@components/setting/panel-components";
import { Panel } from "@components/setting/panel";
import { utils } from "@/env";
import Qmsg from "qmsg";

export const PanelChatConfig: PopsPanelContentConfig = {
  id: "panel-config-chat",
  title: "聊天",
  views: [
    {
      type: "container",
      text: "续火花",
      views: [
        UISwitch("启用", "dy-chat-autoKeepTheSparkAlive", false),
        UIButton(
          "最后执行时间",
          "自动执行续火花的时间，可点击按钮进行时间重置",
          () => {
            const timeStamp = Panel.getValue<number>("dy-chat-autoKeepTheSparkAlive-latestRunTimeStamp");
            if (timeStamp) {
              return utils.formatTime(timeStamp);
            }
            return "无";
          },
          void 0,
          false,
          false,
          "primary",
          () => {
            if (confirm("是否要重置最后执行时间？")) {
              Panel.deleteValue("dy-chat-autoKeepTheSparkAlive-latestRunTimeStamp");
              Qmsg.success("重置成功");
            }
          }
        ),
        UIInput(
          "",
          "dy-chat-autoKeepTheSparkAlive-sendText",
          "续火花",
          "用于发送消息的内容",
          void 0,
          "请输入发送消息的内容"
        ),
        UITextArea("用户列表", "dy-chat-autoKeepTheSparkAlive-userList", "", "用户uid，每行一个（注意：不是抖音号）"),
      ],
      afterAddToUListCallBack(viewConfig, container) {
        const $style = document.createElement("style");
        $style.textContent = /*css*/ `
            [data-key="dy-chat-autoKeepTheSparkAlive-userList"] .pops-panel-textarea textarea{
                height: 150px;
            }
          `;
        container.target?.appendChild($style);
      },
    },
  ],
};
