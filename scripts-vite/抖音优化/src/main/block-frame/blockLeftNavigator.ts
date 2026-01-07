import { addStyle, log } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const BlockLeftNavigator = {
  init() {
    Panel.exec(
      ["shieldLeftNavigator", "search-shieldLeftNavigator"],
      () => {
        return this.shieldLeftNavigator();
      },
      (keyList) => {
        const [mainKey, childKey] = keyList;
        const mainValue = Panel.getValue<boolean>(mainKey);
        const childValue = Panel.getValue<number>(childKey);
        if (DouYinRouter.isSearch()) {
          if (childValue == 1) {
            // 开
            return true;
          } else if (childValue == 0) {
            // 关
            return false;
          } else {
            // 跟随主设置
          }
        }
        return mainValue;
      }
    );
    Panel.execMenuOnce("shieldLeftNavigator-tab-home", () => {
      return this.block_tab_home();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-recommend", () => {
      return this.block_tab_recommend();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-follow", () => {
      return this.block_tab_follow();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-friend", () => {
      return this.block_tab_friend();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-user_self", () => {
      return this.block_tab_user_self();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-live", () => {
      return this.block_tab_live();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-vs", () => {
      return this.block_tab_vs();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-series", () => {
      return this.block_tab_series();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-microgame", () => {
      return this.block_tab_microgame();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-ai-search", () => {
      return this.block_tab_ai_search();
    });
    Panel.execMenuOnce("shieldLeftNavigator-tab-activity", () => {
      return this.block_tab_activity();
    });
    Panel.execMenuOnce("shieldLeftNavigator-panel-menu-setting", () => {
      return this.block_panel_menu_setting();
    });
    Panel.execMenuOnce("shieldLeftNavigator-panel-menu-about", () => {
      return this.block_panel_menu_about();
    });
    Panel.execMenuOnce("shieldLeftNavigator-panel-menu-q_a", () => {
      return this.block_panel_menu_q_a();
    });
    Panel.execMenuOnce("shieldLeftNavigator-panel-menu-survey", () => {
      return this.block_panel_menu_survey();
    });
  },
  /**
   * 【屏蔽】左侧导航栏
   */
  shieldLeftNavigator() {
    log.info("【屏蔽】左侧导航栏");
    const result = [];
    result.push(CommonUtil.addBlockCSS("#douyin-navigation"));
    result.push(
      addStyle(/*css*/ `
			/* 修复顶部导航栏的宽度 */
			#douyin-header{
				width: 100%;
			}`)
    );
    return result;
  },
  /**
   * 【屏蔽】精选
   */
  block_tab_home() {
    log.info("【屏蔽】精选");
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-discover)');
  },
  /**
   * 【屏蔽】推荐
   */
  block_tab_recommend() {
    log.info("【屏蔽】推荐");
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-recommend)');
  },
  /**
   * 【屏蔽】AI搜索/抖音
   */
  block_tab_ai_search() {
    log.info(`【屏蔽】AI搜索/抖音`);
    return CommonUtil.addBlockCSS(
      '[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-aisearch"])'
    );
  },
  /**
   * 【屏蔽】关注
   */
  block_tab_follow() {
    log.info("【屏蔽】关注");
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-follow)');
  },
  /**
   * 【屏蔽】朋友
   */
  block_tab_friend() {
    log.info("【屏蔽】朋友");
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-friend)');
  },
  /**
   * 【屏蔽】我的
   */
  block_tab_user_self() {
    log.info("【屏蔽】我的");
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self)');
  },
  /**
   * 【屏蔽】activity
   */
  block_tab_activity() {
    log.info(`【屏蔽】activity`);
    return CommonUtil.addBlockCSS(
      '[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-activity_"])'
    );
  },
  /**
   * 【屏蔽】直播
   */
  block_tab_live() {
    log.info("【屏蔽】直播");
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-live)');
  },
  /**
   * 【屏蔽】放映厅
   */
  block_tab_vs() {
    log.info("【屏蔽】放映厅");
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-vs)');
  },
  /**
   * 【屏蔽】短剧
   */
  block_tab_series() {
    log.info(`短剧`);
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-series)');
  },
  /**
   * 【屏蔽】小游戏
   */
  block_tab_microgame() {
    log.info(`【屏蔽】小游戏`);
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-microgame)');
  },
  /**
   * 【屏蔽】设置
   */
  block_panel_menu_setting() {
    log.info(`【屏蔽】设置`);
    return CommonUtil.addBlockCSS(
      '[data-e2e="douyin-navigation"] #panel-menu > div:has(path[d="M13.6032 3.57455L13.6012 3.5734C13.1238 3.29458 12.5424 3.17798 12.003 3.17798C11.4626 3.17798 10.8801 3.29506 10.4003 3.57252L10.4002 3.57256L5.91125 6.16801C5.8962 6.17671 5.88145 6.18593 5.86705 6.19566L5.84354 6.21152C5.45545 6.47347 5.12936 6.69357 4.8772 6.89334C4.615 7.10106 4.37899 7.32726 4.20899 7.62136C4.03466 7.92295 3.96491 8.23437 3.93338 8.55508C3.90423 8.8515 3.90425 9.20597 3.90427 9.6083V9.60833L3.90427 9.64131V14.3507L3.90427 14.3836V14.3837C3.90425 14.7881 3.90423 15.144 3.93334 15.4414C3.96481 15.7628 4.03439 16.0749 4.20852 16.377C4.37847 16.6719 4.61457 16.8985 4.877 17.1066C5.12925 17.3066 5.45543 17.5267 5.84343 17.7886L5.86705 17.8046C5.88145 17.8143 5.8962 17.8235 5.91125 17.8322L10.4002 20.4276C10.8801 20.7051 11.4625 20.8222 12.003 20.8222C12.5424 20.8222 13.1239 20.7056 13.6013 20.4267L13.6032 20.4257L18.0887 17.8322C18.1038 17.8235 18.1185 17.8143 18.1329 17.8046L18.1565 17.7887C18.5445 17.5267 18.8706 17.3066 19.1228 17.1069C19.385 16.8991 19.621 16.6729 19.791 16.3789C19.9653 16.0773 20.0351 15.7658 20.0666 15.4451C20.0957 15.1487 20.0957 14.7942 20.0957 14.3919V14.3919L20.0957 14.3589V9.64131L20.0957 9.60833V9.60831C20.0957 9.20598 20.0957 8.8515 20.0666 8.55508C20.0351 8.23437 19.9653 7.92295 19.791 7.62136C19.621 7.32726 19.385 7.10106 19.1228 6.89334C18.8706 6.69357 18.5445 6.47347 18.1564 6.21153L18.1329 6.19566C18.1185 6.18593 18.1038 6.17671 18.0887 6.16801L13.6032 3.57455ZM11.1512 4.87106C11.3488 4.75678 11.656 4.67798 12.003 4.67798C12.3506 4.67798 12.6538 4.75694 12.8454 4.86907L12.8454 4.86908L12.8489 4.87109L17.3153 7.45352C17.7211 7.72744 17.9929 7.91194 18.1913 8.06909C18.3882 8.22508 18.4583 8.31311 18.4923 8.37202C18.522 8.42343 18.5543 8.50378 18.5738 8.70186C18.5949 8.91616 18.5957 9.1962 18.5957 9.64131V14.3589C18.5957 14.804 18.5949 15.0841 18.5738 15.2983C18.5543 15.4964 18.522 15.5768 18.4923 15.6282C18.4583 15.6871 18.3882 15.7751 18.1913 15.9311C17.9929 16.0883 17.7211 16.2728 17.3153 16.5467L12.8489 19.1291L12.8489 19.1291L12.8454 19.1311C12.6538 19.2433 12.3506 19.3222 12.003 19.3222C11.656 19.3222 11.3488 19.2434 11.1512 19.1292L11.1511 19.1291L6.68465 16.5467C6.27885 16.2727 6.00712 16.0883 5.80886 15.9311C5.61219 15.7752 5.54221 15.6871 5.50811 15.628C5.47819 15.5761 5.44575 15.4948 5.42621 15.2952C5.4051 15.0796 5.40427 14.7978 5.40427 14.3507V9.64131C5.40427 9.1962 5.40511 8.91616 5.42618 8.70186C5.44565 8.50378 5.47793 8.42343 5.50764 8.37202C5.54169 8.31311 5.61175 8.22508 5.80866 8.06909C6.00703 7.91194 6.27888 7.72744 6.68464 7.45352L11.1511 4.87109L11.1512 4.87106ZM10.029 12C10.029 10.9114 10.9114 10.0289 12 10.0289C13.0886 10.0289 13.9711 10.9114 13.9711 12C13.9711 13.0886 13.0886 13.971 12 13.971C10.9114 13.971 10.029 13.0886 10.029 12ZM12 8.52893C10.083 8.52893 8.52896 10.083 8.52896 12C8.52896 13.917 10.083 15.471 12 15.471C13.917 15.471 15.4711 13.917 15.4711 12C15.4711 10.083 13.917 8.52893 12 8.52893Z"])'
    );
  },
  /**
   * 【屏蔽】关于
   */
  block_panel_menu_about() {
    log.info(`【屏蔽】关于`);
    return CommonUtil.addBlockCSS(
      '[data-e2e="douyin-navigation"] #panel-menu > div:has(path[d="M5.68365 7.62549C5.68365 6.55301 6.55307 5.68359 7.62555 5.68359C8.69803 5.68359 9.56744 6.55301 9.56744 7.62549C9.56744 8.69797 8.69803 9.56738 7.62555 9.56738C6.55307 9.56738 5.68365 8.69797 5.68365 7.62549ZM7.62555 4.18359C5.72464 4.18359 4.18365 5.72458 4.18365 7.62549C4.18365 9.52639 5.72464 11.0674 7.62555 11.0674C9.52645 11.0674 11.0674 9.52639 11.0674 7.62549C11.0674 5.72458 9.52645 4.18359 7.62555 4.18359ZM5.68365 16.3741C5.68365 15.3017 6.55307 14.4322 7.62555 14.4322C8.69803 14.4322 9.56744 15.3017 9.56744 16.3741C9.56744 17.4466 8.69803 18.316 7.62555 18.316C6.55307 18.316 5.68365 17.4466 5.68365 16.3741ZM7.62555 12.9322C5.72464 12.9322 4.18365 14.4732 4.18365 16.3741C4.18365 18.275 5.72464 19.816 7.62555 19.816C9.52646 19.816 11.0674 18.275 11.0674 16.3741C11.0674 14.4732 9.52646 12.9322 7.62555 12.9322ZM16.3741 5.68359C15.3017 5.68359 14.4322 6.55301 14.4322 7.62549C14.4322 8.69797 15.3017 9.56738 16.3741 9.56738C17.4466 9.56738 18.316 8.69797 18.316 7.62549C18.316 6.55301 17.4466 5.68359 16.3741 5.68359ZM12.9322 7.62549C12.9322 5.72458 14.4732 4.18359 16.3741 4.18359C18.275 4.18359 19.816 5.72458 19.816 7.62549C19.816 9.52639 18.275 11.0674 16.3741 11.0674C14.4732 11.0674 12.9322 9.52639 12.9322 7.62549ZM14.4322 16.3741C14.4322 15.3017 15.3017 14.4322 16.3741 14.4322C17.4466 14.4322 18.316 15.3017 18.316 16.3741C18.316 17.4466 17.4466 18.316 16.3741 18.316C15.3017 18.316 14.4322 17.4466 14.4322 16.3741ZM16.3741 12.9322C14.4732 12.9322 12.9322 14.4732 12.9322 16.3741C12.9322 18.275 14.4732 19.816 16.3741 19.816C18.275 19.816 19.816 18.275 19.816 16.3741C19.816 14.4732 18.275 12.9322 16.3741 12.9322Z"])'
    );
  },
  /**
   * 【屏蔽】问题/反馈
   */
  block_panel_menu_q_a() {
    log.info(`【屏蔽】问题/反馈`);
    return CommonUtil.addBlockCSS(
      '[data-e2e="douyin-navigation"] #panel-menu > div:has(path[d="M11.9999 4.75C7.99575 4.75 4.74976 7.99599 4.74976 12.0001C4.74976 16.0043 7.99575 19.2502 11.9999 19.2502C16.004 19.2502 19.25 16.0043 19.25 12.0001C19.25 10.5774 18.841 9.2525 18.1344 8.13394C16.8488 6.0989 14.5816 4.75 11.9999 4.75ZM3.24976 12.0001C3.24976 7.16756 7.16732 3.25 11.9999 3.25C15.1176 3.25 17.8537 4.88105 19.4025 7.33284C20.2561 8.68408 20.75 10.2856 20.75 12.0001C20.75 16.8327 16.8324 20.7502 11.9999 20.7502C7.16732 20.7502 3.24976 16.8327 3.24976 12.0001ZM8.25 10C8.25 7.92894 9.92894 6.25 12 6.25C14.0711 6.25 15.75 7.92894 15.75 10C15.75 11.8142 14.4617 13.3275 12.75 13.675V14.5H11.25V13C11.25 12.5858 11.5858 12.25 12 12.25C13.2426 12.25 14.25 11.2426 14.25 10C14.25 8.75736 13.2426 7.75 12 7.75C10.7574 7.75 9.75 8.75736 9.75 10H8.25ZM13.25 16.5625C13.25 17.2528 12.6903 17.8125 12 17.8125C11.3097 17.8125 10.75 17.2528 10.75 16.5625C10.75 15.8722 11.3097 15.3125 12 15.3125C12.6903 15.3125 13.25 15.8722 13.25 16.5625Z"])'
    );
  },
  /**
   * 【屏蔽】用户体验调研
   */
  block_panel_menu_survey() {
    log.info(`【屏蔽】用户体验调研`);
    return CommonUtil.addBlockCSS('[data-e2e="douyin-navigation"] #panel-menu #btn-feelgood');
  },
};
