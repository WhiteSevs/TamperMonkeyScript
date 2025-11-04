import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const SettingUIWenKu: PopsPanelContentConfig = {
  id: "panel-wenku",
  title: "资源",
  isDefault() {
    return CSDNRouter.isLink();
  },
  views: [
    {
      text: "屏蔽",
      type: "container",
      views: [
        UISwitch("【屏蔽】资源推荐", "csdn-wenku-shieldResourceRecommend", false),
        UISwitch("【屏蔽】右侧用户信息", "csdn-wenku-shieldRightUserInfo", false),
        UISwitch("【屏蔽】右侧悬浮工具栏", "csdn-wenku-shieldRightToolBar", false),
      ],
    },
  ],
};

export { SettingUIWenKu };
