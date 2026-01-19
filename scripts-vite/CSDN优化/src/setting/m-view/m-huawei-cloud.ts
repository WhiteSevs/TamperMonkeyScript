import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export const MSettingUIHuaWeiCloud: PopsPanelContentConfig = {
  id: "m-panel-hua-wei-cloud",
  title: "华为云开发者联盟",
  isDefault() {
    return CSDNRouter.isHuaWeiCloudBlog();
  },
  views: [
    {
      text: "功能",
      type: "container",
      views: [UISwitch("自动展开全文", "m-csdn-hua-wei-cloud-autoExpandContent", true)],
    },
    {
      text: "屏蔽",
      type: "container",
      views: [UISwitch("【屏蔽】底部加入社区", "m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity", true)],
    },
  ],
};
