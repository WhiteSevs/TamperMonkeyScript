import type { UtilsGMMenuOption } from "@whitesev/utils/dist/types/src/types/UtilsGMMenu";
import { GM_Menu } from "../base.env";
import { Panel } from "./panel";
import { PanelContent } from "./panel-content";

/**
 * 油猴菜单
 */
export const PanelMenu = {
	$data: {
		__menuOption: [] as UtilsGMMenuOption[],
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
		GM_Menu.add([
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
			...this.$data.menuOption,
		]);
	},
	/**
	 * 添加菜单项
	 */
	addMenuOption(option: UtilsGMMenuOption[] | UtilsGMMenuOption) {
		if (!Array.isArray(option)) {
			option = [option];
		}
		this.$data.menuOption.push(...option);
	},
};
