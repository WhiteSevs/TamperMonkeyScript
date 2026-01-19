import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const CSDNBlogArticleBlock = {
  init() {
    Panel.execMenuOnce("csdn-blog-shieldBottomSkillTree", () => {
      return this.shieldBottomSkillTree();
    });
    Panel.execMenuOnce("csdn-blog-shieldArticleSearchTip", () => {
      return this.shieldArticleSearchTip();
    });
    Panel.execMenuOnce("csdn-blog-blockGitCodeLinkCard", () => {
      return this.blockGitCodeLinkCard();
    });
  },
  /**
   * 【屏蔽】底部xx技能树
   */
  shieldBottomSkillTree() {
    log.info("【屏蔽】底部xx技能树");
    return CommonUtil.addBlockCSS(`#treeSkill`);
  },
  /**
   * 【屏蔽】选中文字悬浮栏
   */
  shieldArticleSearchTip() {
    log.info("【屏蔽】选中文字悬浮栏");
    return CommonUtil.addBlockCSS(`#articleSearchTip`);
  },
  /**
   * 【屏蔽】gitcode链接卡片
   */
  blockGitCodeLinkCard() {
    log.info(`【屏蔽】gitcode链接卡片`);
    return CommonUtil.addBlockCSS('a.has-card[href*="gitcode.com"]', ".t2-card-container");
  },
};
