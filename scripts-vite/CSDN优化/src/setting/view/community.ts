import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const SettingUICommunity: PopsPanelContentConfig = {
  id: "panel-community",
  title: "社区",
  isDefault() {
    return CSDNRouter.isCommunity();
  },
  views: [
    {
      text: "功能",
      type: "container",
      views: [
        UISwitch("自动展开全文", "csdn-community-autoExpandContent", true),
        UISwitch("全文居中", "csdn-community-centerContent", false),
      ],
    },
    {
      text: "布局屏蔽",
      type: "container",
      views: [
        UISwitch("【屏蔽】云开发者任务挑战活动", "csdn-community-shieldCloudDeveloperTaskChallengeEvent", true),
        UISwitch("【屏蔽】推荐内容", "csdn-community-blockRecommendedContentAtTheBottom", true),
        UISwitch(
          "【屏蔽】左侧悬浮按钮",
          "csdn-community-shieldLeftFloatingButton",
          false,
          void 0,
          "开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】"
        ),
        UISwitch(
          "【屏蔽】右侧栏",
          "csdn-community-blockRightColumn",
          false,
          void 0,
          "开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】"
        ),
        UISwitch("【屏蔽】底部C知道", "csdn-community-blockBottomCSo", false),
        UISwitch("【屏蔽】底部更多推荐", "csdn-community-shieldTheBottomForMoreRecommendations", false),
      ],
    },
  ],
};
