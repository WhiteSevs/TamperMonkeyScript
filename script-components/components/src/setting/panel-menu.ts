import type { UtilsGMMenuOption } from "@whitesev/utils/dist/types/src/types/UtilsGMMenu";
import { MenuRegister } from "../env.base";
import { Panel } from "./panel";
import { PanelContent } from "./panel-content";
import { CommonUtil } from "./../utils/CommonUtil";

/**
 * 油猴菜单
 */
const PanelMenu = {
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
    if (!CommonUtil.isTopWindow()) {
      /* 不允许在iframe内重复注册 */
      return;
    }
    MenuRegister.add(this.$data.menuOption);
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
   * 更新菜单项（如果该菜单项已存在，则更新，不存在则不做处理）
   * @param option 菜单配置
   */
  updateMenuOption(option: UtilsGMMenuOption[] | UtilsGMMenuOption) {
    if (!Array.isArray(option)) {
      option = [option];
    }
    option.forEach((optionItem) => {
      // 找到对应的菜单项
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
   * @param [index=0] 索引
   */
  getMenuOption(index: number = 0) {
    return this.$data.menuOption[index];
  },
  /**
   * 删除菜单项
   * @param [index=0] 索引
   */
  deleteMenuOption(index: number = 0) {
    this.$data.menuOption.splice(index, 1);
  },
};
export { PanelMenu };
