import { addStyle, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { Panel } from "@components/setting/panel";

export const CSDNBlogArticleBottomRecommend = {
  init() {
    Panel.exec(
      "csdn-blog-bottomRecommendArticleEnable",
      () => {
        return this.shieldBottomRecommendArticle();
      },
      (keyList) => !Panel.getValue(keyList[0]),
      true
    );
    Panel.execMenuOnce("csdn-blog-identityCSDNDownload", () => {
      return this.identityCSDNDownload();
    });
    Panel.execMenuOnce("csdn-blog-removeResourceDownloadArticle", () => {
      return this.removeResourceDownloadArticle();
    });
  },
  /**
   * 启用/关闭 底部文章
   */
  shieldBottomRecommendArticle() {
    log.info("启用/关闭 底部文章");
    return CommonUtil.addBlockCSS(`main > div.recommend-box`);
  },
  /**
   * 标识CSDN下载的链接
   */
  identityCSDNDownload() {
    log.info("标识CSDN下载的链接");
    return addStyle(/*css*/ `
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `);
  },
  /**
   * 移除资源下载的文章
   */
  removeResourceDownloadArticle() {
    log.info(`移除资源下载的文章`);
    return CommonUtil.addBlockCSS(`.recommend-item-box[data-url*='https://download.csdn.net/']`);
  },
};
