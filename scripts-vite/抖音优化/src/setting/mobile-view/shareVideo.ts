import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const MPanelShareVideoConfig: PopsPanelContentConfig = {
  id: "m-panel-config-share-video",
  title: "视频",
  headerTitle: "/share/video<br />视频",
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
              views: [UISwitch("全局点击", "m-dy-share-video-coverGlobalClick", true, void 0, "阻止跳转至下载页")],
            },
          ],
        },
      ],
    },
  ],
};
