import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const SettingUIHuaWeiCloud: PopsPanelContentConfig = {
  id: "panel-hua-wei-cloud",
  title: "华为云开发者联盟",
  isDefault() {
    return CSDNRouter.isHuaWeiCloudBlog();
  },
  forms: [
    {
      text: "功能",
      type: "forms",
      forms: [UISwitch("自动展开全文", "csdn-hua-wei-cloud-autoExpandContent", true)],
    },
    {
      text: "屏蔽",
      type: "forms",
      forms: [
        UISwitch("【屏蔽】云开发者任务挑战活动", "csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent", true),
        UISwitch(
          "【屏蔽】左侧悬浮按钮",
          "csdn-hua-wei-cloud-shieldLeftFloatingButton",
          false,
          function (event, enable) {
            if (enable) {
              alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");
            }
          }
        ),
        UISwitch("【屏蔽】右侧栏", "csdn-hua-wei-cloud-blockRightColumn", false, function (event, enable) {
          if (enable) {
            alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");
          }
        }),
        UISwitch("【屏蔽】底部推荐内容", "csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom", false),
        UISwitch("【屏蔽】底部更多推荐", "csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations", false),
      ],
    },
  ],
};

export { SettingUIHuaWeiCloud };
