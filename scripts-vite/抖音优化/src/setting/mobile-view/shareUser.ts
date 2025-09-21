import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const MPanelShareUserConfig: PopsPanelContentConfig = {
  id: "m-panel-config-share-user",
  title: "主页",
  headerTitle: "/share/user<br />主页",
  forms: [
    {
      text: "",
      type: "forms",
      forms: [
        {
          text: "覆盖点击事件",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch("视频合集", "m-dy-share-user-coverPlayletList", true, void 0, "正确跳转视频合集页面"),
                UISwitch("视频列表", "m-dy-share-user-coverPostListContainer", true, void 0, "正确跳转视频页面"),
              ],
            },
          ],
        },
      ],
    },
  ],
};
