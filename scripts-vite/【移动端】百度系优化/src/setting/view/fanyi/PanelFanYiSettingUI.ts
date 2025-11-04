import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const PanelFanYiSettingUI: PopsPanelContentConfig = {
  id: "baidu-panel-config-fanyi",
  title: "翻译",
  headerTitle: "百度翻译<br />fanyi.baidu.com<br />fanyi-app.baidu.com",
  isDefault() {
    return BaiduRouter.isFanYi() || BaiduRouter.isFanYiApp();
  },
  scrollToDefaultView: true,
  views: [
    {
      text: "",
      type: "container",
      views: [
        {
          text: "App",
          type: "deepMenu",
          description: "fanyi-app",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("【屏蔽】专栏信息", "baidu_fanyi_app_shield_column_information", false),
                UISwitch("【屏蔽】为你推荐", "baidu_fanyi_app_shield_recommended_for_you", false),
                UISwitch("【屏蔽】我要跟读", "baidu_fanyi_app_shield_i_need_to_follow_along", false),
              ],
            },
          ],
        },
      ],
    },
    {
      text: "",
      type: "container",
      views: [
        {
          text: "功能",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [UISwitch("自动聚焦输入框", "baidu_fanyi_auto_focus", true)],
            },
          ],
        },
        {
          text: "屏蔽",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("【屏蔽】底部推荐", "baidu_fanyi_recommended_shielding_bottom", true),
                UISwitch("【屏蔽】底部其它", "baidu_fanyi_other_shielding_bottom", true),
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { PanelFanYiSettingUI };
