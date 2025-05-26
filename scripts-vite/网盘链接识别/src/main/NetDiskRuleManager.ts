import { RulePanelView } from "@/utils/RulePanelView";
import { WebsiteRule } from "./website-rule/WebsiteRule";
import { CharacterMapping } from "./character-mapping/CharacterMapping";
import { WebsiteSubscribeRule } from "./website-rule/WebsiteSubscribeRule";
import { CharacterMappingSubscribe } from "./character-mapping/CharacterMappingSubscribe";

/**
 * 规则管理器
 */
export const NetDiskRuleManager = {
	init() {
		if (import.meta.env.DEV) {
			NetDiskRuleManager.showView();
		}
		this.updateAllSubscribe();
	},
	/**
	 * 获取规则管理器视图
	 * @param defaultTab 左侧默认的选项卡
	 */
	getPanelView(defaultTab: number = 0) {
		let option: typeof RulePanelView.prototype.option = {
			title: "规则管理器",
			contentConfig: [
				WebsiteRule.getRulePanelViewOption(),
				CharacterMapping.getRulePanelViewOption(),
			],
		};
		option.contentConfig = option.contentConfig.map((it, index) => {
			it.isDefault = index === defaultTab;
			return it;
		});
		let rulePanelView = new RulePanelView<
			WebsiteRuleOption | CharacterMappingOption
		>(option);
		return rulePanelView;
	},
	/**
	 * 显示视图
	 * @param defaultTab 左侧默认的选项卡
	 */
	showView(defaultTab: number = 0) {
		let rulePanelView = this.getPanelView(defaultTab);
		rulePanelView.showView();
	},
	/**
	 * 更新所有订阅
	 */
	updateAllSubscribe() {
		WebsiteSubscribeRule.updateAllSubscribe();
		CharacterMappingSubscribe.updateAllSubscribe();
	},
};
