import { $, DOMUtils, log, utils } from "@/env";
import { GreasyforkUrlUtils } from "./GreasyforkUrlUtils";

export const GreasyforkElementUtils = {
  /**
   * 获取当前登录用户id
   */
  getCurrentLoginUserId() {
    let $anchor = $<HTMLAnchorElement>("#nav-user-info .user-profile-link a");
    if (!$anchor) {
      return;
    }
    let userId = GreasyforkUrlUtils.getUserId($anchor.href);
    if (userId == null) {
      return;
    }
    return userId;
  },
  /**
   * 解析出<li>元素上存储的脚本信息
   * @param $script 元素
   */
  parseScriptListInfo($script: HTMLLIElement) {
    let dataset = $script.dataset as any as GreasyforkScriptListInfoDataset;
    const info = {
      scriptId: parseInt(dataset.scriptId),
      scriptName: dataset.scriptName,
      scriptAuthors: [],
      scriptDailyInstalls: parseInt(dataset.scriptDailyInstalls),
      scriptTotalInstalls: parseInt(dataset.scriptTotalInstalls),
      scriptRatingScore: parseFloat(dataset.scriptRatingScore),
      scriptCreatedDate: new Date(dataset.scriptCreatedDate),
      scriptUpdatedDate: new Date(dataset.scriptUpdatedDate),
      scriptType: dataset.scriptType,
      scriptVersion: dataset.scriptVersion,
      sensitive: dataset.sensitive === "true",
      scriptLanguage: dataset.scriptLanguage,
      cssAvailableAsJs: dataset.cssAvailableAsJs === "true",
      codeUrl: dataset.codeUrl,
      scriptDescription: dataset.scriptDescription,
      scriptAuthorId: parseInt(dataset.scriptAuthorId),
      scriptAuthorName: dataset.scriptAuthorName,
    } as GreasyforkScriptListInfo;

    let scriptAuthorsObj = utils.toJSON(dataset.scriptAuthors);
    Object.keys(scriptAuthorsObj).forEach((authorId) => {
      let authorName = scriptAuthorsObj[authorId];
      info.scriptAuthors.push({
        authorId: parseInt(authorId),
        authorName: authorName,
      });
    });
    // scriptAuthorName可能是空的
    // scriptAuthorId可能是空的
    if ((info.scriptAuthorName == null || isNaN(info.scriptAuthorId)) && info.scriptAuthors.length) {
      info.scriptAuthorName = info.scriptAuthors[0].authorName;
      info.scriptAuthorId = info.scriptAuthors[0].authorId;
    }
    // scriptDescription可能是空的
    if (info.scriptDescription == null) {
      let $description =
        $script.querySelector<HTMLSpanElement>(".script-description")! ||
        $script.querySelector<HTMLSpanElement>(".description")!;
      if ($description) {
        info.scriptDescription = $description.innerText || $description.textContent!;
      }
    }
    return info;
  },
  /**
   * 注册顶部导航菜单
   */
  registerTopNavMenu(config: {
    name: string;
    className: string;
    clickEvent: (event: MouseEvent | PointerEvent) => void;
  }) {
    DOMUtils.onReady(() => {
      let $nav = $<HTMLElement>("#site-nav nav");
      // 更多
      let $subNav = $<HTMLElement>("#site-nav .with-submenu nav");
      if (!$nav) {
        log.error("元素#site-nav nav不存在");
        return;
      }

      let $menuLink = DOMUtils.createElement("li", {
        className: config.className,
        innerHTML: /*html*/ `
                <a href="javascript:;">${config.name}</a>
                `,
      });
      DOMUtils.on($menuLink, "click", (event) => {
        DOMUtils.preventEvent(event);
        config.clickEvent(event);
      });

      if ($subNav && $subNav.children.length) {
        $subNav.appendChild($menuLink);
      } else {
        $nav.appendChild($menuLink);
      }

      // 再克隆一个，新版新增的移动端的更多的样式

      let $mobileMenuLink = DOMUtils.createElement("li", {
        className: config.className,
        innerHTML: /*html*/ `
                <a href="javascript:;">${config.name}</a>
                `,
      });
      DOMUtils.on($mobileMenuLink, "click", (event) => {
        DOMUtils.preventEvent(event);
        config.clickEvent(event);
      });
      let $mobileNav = $<HTMLElement>("#mobile-nav nav");
      // 已登录的账号的元素
      let $multiLinkNav = $<HTMLElement>("#mobile-nav nav .multi-link-nav");
      if ($multiLinkNav) {
        DOMUtils.before($multiLinkNav, $mobileMenuLink);
      } else {
        if ($mobileNav) {
          DOMUtils.append($mobileNav, $mobileMenuLink);
        } else {
          log.error("元素#mobile-nav nav不存在");
        }
      }
    });
  },
};
