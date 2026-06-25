import { addStyle, log } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { CSDNBlog } from "./blog/CSDNBlog";
import { CSDNDevPressArticle as CSDNDevPressArticle } from "./devpress/CSDNDevPressArticle";
import { CSDNLink } from "./link/CSDNLink";
import { CSDNWenKu } from "./wenku/CSDNWenKu";
import { CSDNBlogArticle } from "./blog/CSDNBlogArticle";
import { CSDNDownload } from "./download/CSDNDownload";
import blockCSS from "@/css/block.css?raw";

export const CSDN = {
  init() {
    addStyle(blockCSS);
    if (CSDNRouter.isLink()) {
      log.info("Router: 中转链接");
      CSDNLink.init();
    } else if (CSDNRouter.isBlog()) {
      log.info("Router: 博客");
      CSDNBlog.init();

      if (CSDNRouter.isBlogArticle()) {
        log.info("Router: 帖子");
        CSDNBlogArticle.init();
      }
    } else if (CSDNRouter.isWenKu()) {
      log.info("Router: 文库");
      CSDNWenKu.init();
    } else if (CSDNRouter.isDownload()) {
      log.info("Router: 下载");
      CSDNDownload.init();
    } else if (CSDNRouter.isDevPressArticle()) {
      log.info("Router: 社区-文章");
      CSDNDevPressArticle.init();
    } else {
      log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
    }
  },
};
