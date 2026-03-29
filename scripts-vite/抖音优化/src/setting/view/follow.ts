import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const PanelFollowrConfig: PopsPanelContentConfig = {
  id: "panel-config-follow",
  title: "关注",
  views: [
    {
      text: "布局屏蔽-关注列表",
      type: "container",
      views: [UISwitch("【屏蔽】用户直播时闪烁的头像", "dy-follow-blockUserLiveFlashingAvatar")],
    },
  ],
};
