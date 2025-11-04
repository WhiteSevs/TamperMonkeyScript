import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const MPanelShareMusicConfig: PopsPanelContentConfig = {
  id: "m-panel-config-share-music",
  title: "音乐",
  headerTitle: "/share/music<br />音乐",
  views: [
    {
      text: "",
      type: "container",
      views: [
        {
          text: "覆盖点击事件",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [UISwitch("视频卡片", "m-dy-share-music-coverVideoCard", true, void 0, "正确跳转视频页面")],
            },
          ],
        },
      ],
    },
  ],
};
