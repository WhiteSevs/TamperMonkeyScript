import { DOMUtils, log, utils } from "@/env";

export const ElementUtils = {
  /**
   * 在左侧菜单注册功能
   */
  registerLeftMenu(config: {
    name: string;
    icon?: string;
    iconColor?: string;
    iconSize?: string;
    style?: string;
    callback: Function;
  }) {
    DOMUtils.waitNode<HTMLLIElement>(".comiis_sidenv_box .sidenv_li .comiis_left_Touch", 10000).then(($leftTouch) => {
      if (!$leftTouch) {
        log.error("注册左侧面板菜单失败，原因：该元素不存在");
        return;
      }
      let $setting = DOMUtils.createElement("li", {
        className: "comiis_left_Touch",
        innerHTML: /*html*/ `
						<a href="javascript:;" class="comiis_left_Touch">
							<i class="comiis_font"></i>
							${config.name}
						</a>
						`,
      });
      let $icon = $setting.querySelector<HTMLElement>(".comiis_font")!;
      if (typeof config.style === "string") {
        $icon.style.cssText = config.style;
      }
      if (typeof config.icon === "string") {
        $icon.innerHTML = config.icon;
      }
      if (typeof config.iconColor === "string") {
        $icon.style.color = config.iconColor;
      }
      if (typeof config.iconSize === "string") {
        $icon.style.fontSize = config.iconSize;
      }
      DOMUtils.on($setting, "click", (event) => {
        DOMUtils.preventEvent(event);
        if (typeof config.callback === "function") {
          config.callback();
        }
      });
      DOMUtils.append($leftTouch, $setting);
    });
  },
  /**
   * 导读中最新、热门、精华、回复、抢沙发的各个帖子【list】
   */
  comiisForumList: () => {
    return document.querySelectorAll<HTMLLIElement>("li.forumlist_li");
  },
  /**
   * 帖子内评论，包括帖子内容主体，第一个就是主体【list】
   */
  comiisPostli: () => {
    return document.querySelectorAll<HTMLDivElement>("div.comiis_postli.comiis_list_readimgs.nfqsqi");
  },
  /**
   * 帖子内评论，包括帖子内容主体，第一个就是主体【list】
   */
  comiisMmlist: () => {
    return document.querySelectorAll<HTMLElement>(".comiis_mmlist");
  },
};
