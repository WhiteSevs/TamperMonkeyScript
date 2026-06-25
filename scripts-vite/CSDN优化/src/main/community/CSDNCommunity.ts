import { addStyle, log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";
import ShieldCSS from "./css/shield.css?raw";

// 社区
export const CSDNCommunity = {
  init() {
    addStyle(ShieldCSS);
    Panel.execMenuOnce("csdn-community-centerContent", () => {
      return this.centerContent();
    });
    Panel.execMenuOnce("csdn-community-shieldCloudDeveloperTaskChallengeEvent", () => {
      return this.blockCloudDeveloperTaskChallengeEvent();
    });
    Panel.execMenuOnce("csdn-community-autoExpandContent", () => {
      return this.autoExpandContent();
    });
    Panel.execMenuOnce("csdn-community-shieldLeftFloatingButton", () => {
      return this.blockLeftFloatingButton();
    });
    Panel.execMenuOnce("csdn-community-blockRightColumn", () => {
      return this.blockRightColumn();
    });
    Panel.execMenuOnce("csdn-community-blockBottomCSo", () => {
      return this.blockBottomCSo();
    });
    Panel.execMenuOnce("csdn-community-blockRecommendedContentAtTheBottom", () => {
      return this.blockRecommendedContentAtTheBottom();
    });
    Panel.execMenuOnce("csdn-community-shieldTheBottomForMoreRecommendations", () => {
      return this.blockTheBottomForMoreRecommendations();
    });
  },
  /**
   * 全文居中
   */
  centerContent() {
    log.info(`全文居中`);
    return addStyle(/*css*/ `
      /* 左侧的悬浮工具栏 阅读量 点赞 收藏 评论 分享 */
      .toolbar-wrapper,
      /* 右侧的目录 相关产品 活动日历等 */
      .page-home-right{
        display: none !important;
      }
      /* 正文宽度 */
      .article-detail{
        margin: 0 auto;
      }
      @media (min-width: 768px) and (max-width: 1500px) {
        .article-detail,
        .article-detail .main-content{
          max-width: 88dvw !important;
        }
      }
      @media (min-width: 1500px){
        .article-detail,
        .article-detail .main-content{
          max-width: 1360px !important;
        }
      }
    `);
  },
  /**
   * 自动展开内容
   */
  autoExpandContent() {
    log.info("自动展开全文");
    return [
      /* 点击阅读全文 */
      addBlockCSS(".article-show-more"),
      addStyle(/*css*/ `
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`),
    ];
  },
  /**
   * 【屏蔽】开发者任务挑战活动
   */
  blockCloudDeveloperTaskChallengeEvent() {
    log.info("【屏蔽】云开发者任务挑战活动");
    return addBlockCSS(".luck-draw-modal-warp");
  },
  /**
   * 【屏蔽】左侧悬浮按钮
   */
  blockLeftFloatingButton() {
    log.info("【屏蔽】左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮");
    return addBlockCSS(".toolbar-wrapper.article-interact-bar");
  },
  /**
   * 【屏蔽】右侧栏
   */
  blockRightColumn() {
    log.info("【屏蔽】右侧栏，包括相关产品-活动日历-运营活动-热门标签");
    return addBlockCSS(".page-home-right.dp-aside-right");
  },
  /**
   * 【屏蔽】底部C知道
   */
  blockBottomCSo() {
    log.info(`【屏蔽】底部C知道`);
    return addBlockCSS('[class^="pcContainer_"]');
  },
  /**
   * 【屏蔽】推荐内容
   */
  blockRecommendedContentAtTheBottom() {
    log.info("【屏蔽】推荐内容");
    return addBlockCSS(".recommend-card-box");
  },
  /**
   * 【屏蔽】底部更多推荐
   */
  blockTheBottomForMoreRecommendations() {
    log.info("【屏蔽】底部更多推荐");
    return addBlockCSS(".more-article");
  },
};
