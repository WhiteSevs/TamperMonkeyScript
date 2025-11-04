import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const PanelZhiDaoSettingUI: PopsPanelContentConfig = {
  id: "baidu-panel-config-zhidao",
  title: "知道",
  headerTitle: "百度知道<br />zhidao.baidu.com",
  isDefault() {
    return BaiduRouter.isZhiDao();
  },
  scrollToDefaultView: true,
  views: [
    {
      text: "屏蔽",
      type: "container",
      views: [
        UISwitch("【屏蔽】推荐更多精彩内容", "baidu_zhidao_block_recommend_more_exciting_content", true),
        UISwitch("【屏蔽】相关问题", "baidu_zhidao_block_related_issues", true),
        UISwitch("【屏蔽】其他回答", "baidu_zhidao_block_other_answers", false),
        UISwitch("【屏蔽】顶部浮动工具栏", "baidu_zhidao_shield_top_fixed_toolbar", false),
      ],
    },
  ],
};

export { PanelZhiDaoSettingUI };
