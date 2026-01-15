import { RulePanelView, type RulePanelOption } from "@components/utils/RulePanelView";
import { WebsiteRule } from "./website-rule/WebsiteRule";
import { CharacterMapping } from "./character-mapping/CharacterMapping";
import { WebsiteSubscribeRule } from "./website-rule/WebsiteSubscribeRule";
import { CharacterMappingSubscribe } from "./character-mapping/CharacterMappingSubscribe";
import { NetDiskUserRule } from "./rule/user-rule/NetDiskUserRule";
import { NetDiskUserRuleSubscribeRule } from "./rule/user-rule/NetDiskUserRuleSubscribeRule";

/**
 * 规则管理器
 */
export const NetDiskRuleManager = {
  init() {
    this.updateAllSubscribe();
  },
  /**
   * 获取规则管理器视图
   * @param defaultTab 左侧默认的选项卡，可以是索引下标，也可以是标题
   */
  getPanelView(defaultTab: number | string = 0) {
    const option: RulePanelOption<any> = {
      title: "规则管理器",
      contentConfig: [
        NetDiskUserRule.getRulePanelViewOption(),
        WebsiteRule.getRulePanelViewOption(),
        CharacterMapping.getRulePanelViewOption(),
      ],
    };
    option.contentConfig = option.contentConfig.map((it, index) => {
      if (
        (typeof defaultTab === "number" && defaultTab === index) ||
        (typeof defaultTab === "string" && defaultTab === it.title)
      ) {
        it.isDefault = true;
      } else {
        it.isDefault = false;
      }
      return it;
    });
    const rulePanelView = new RulePanelView<NetDiskUserCustomRule | WebsiteRuleOption | CharacterMappingOption>(option);
    return rulePanelView;
  },
  /**
   * 显示视图
   * @param defaultTab 左侧默认的选项卡，可以是索引下标，也可以是标题
   */
  showView(defaultTab?: number | string) {
    const rulePanelView = this.getPanelView(defaultTab);
    rulePanelView.showView();
  },
  /**
   * 更新所有订阅
   */
  updateAllSubscribe() {
    NetDiskUserRuleSubscribeRule.updateAllSubscribe();
    WebsiteSubscribeRule.updateAllSubscribe();
    CharacterMappingSubscribe.updateAllSubscribe();
  },
};
