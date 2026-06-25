import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const MSettingUIHuaWeiCloud: PopsPanelContentConfig = {
  id: "m-panel-devpress",
  title: "开发者社区",
  isDefault() {
    return CSDNRouter.isDevPressArticle();
  },
  views: [
    {
      text: "功能",
      type: "container",
      views: [UISwitch("自动展开全文", "m-csdn-devpress-autoExpandContent", true)],
    },
    {
      text: "布局屏蔽",
      type: "container",
      views: [
        UISwitch("【屏蔽】推荐内容", "m-csdn-devpress-blockRecommendedContentAtTheBottom", false),
        UISwitch("【屏蔽】底部的加入社区", "m-csdn-devpress-blockBottomJoinTheCommunity", true),
      ],
    },
  ],
};
