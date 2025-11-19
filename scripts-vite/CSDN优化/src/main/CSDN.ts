import { log } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { CSDNHuaWeiCloud } from "./huaWeiCloud/CSDNHuaWeiCloud";
import { CSDNBlogArticle } from "./blog/CSDNBlogArticle";
import { CSDNWenKu } from "./wenku/CSDNWenKu";
import { CSDNLink } from "./link/CSDNLink";
import { CSDNBlog } from "./blog/CSDNBlog";

export const CSDN = {
  init() {
    if (CSDNRouter.isLink()) {
      log.info("Router: 中转链接");
      CSDNLink.init();
    } else if (CSDNRouter.isHuaWeiCloudBlog()) {
      log.info("Router: 华为云联盟");
      CSDNHuaWeiCloud.init();
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
    } else {
      log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
    }
  },
};
