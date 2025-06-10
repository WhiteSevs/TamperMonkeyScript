import type { UtilsGMMenuOption } from "@whitesev/utils/dist/types/src/types/UtilsGMMenu";
import { GM_Menu } from "../base.env";
import { Panel } from "./panel";
import { PanelContent } from "./panel-content";

/**
 * 油猴菜单
 */
export const PanelMenu = {
	$data: {
		__menuOption: [
			{
				key: "show_pops_panel_setting",
				text: "⚙ 设置",
				autoReload: false,
				isStoreValue: false,
				showText(text: string) {
					return text;
				},
				callback: () => {
					Panel.showPanel(PanelContent.getConfig(0));
				},
			},
		] as UtilsGMMenuOption[],
		get menuOption() {
			return this.__menuOption;
		},
	},
	init() {
		this.initExtensionsMenu();
	},
	/**
	 * 初始化菜单项
	 */
	initExtensionsMenu() {
		if (!Panel.isTopWindow()) {
			/* 不允许在iframe内重复注册 */
			return;
		}
		GM_Menu.add(this.$data.menuOption);
	},
	/**
	 * 添加菜单项
	 * @param option 菜单配置
	 */
	addMenuOption(option: UtilsGMMenuOption[] | UtilsGMMenuOption) {
		if (!Array.isArray(option)) {
			option = [option];
		}
		this.$data.menuOption.push(...option);
	},
	/**
	 * 更新菜单项
	 * @param option 菜单配置
	 */
	updateMenuOption(option: UtilsGMMenuOption[] | UtilsGMMenuOption) {
		if (!Array.isArray(option)) {
			option = [option];
		}
		option.forEach((optionItem) => {
			let findIndex = this.$data.menuOption.findIndex((it) => {
				return it.key === optionItem.key;
			});
			if (findIndex !== -1) {
				this.$data.menuOption[findIndex] = optionItem;
			}
		});
	},
	/**
	 * 获取菜单项
	 * @param index 索引
	 */
	getMenuOption(index: number) {
		return this.$data.menuOption[index];
	},
};
