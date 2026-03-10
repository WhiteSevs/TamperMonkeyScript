import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CSDNBlogArticleAISupportRightToolBarBlock } from "./CSDNBlogArticleAISupportRightToolBarBlock";

export const CSDNBlogArticleAISupportRightToolBar = {
  init() {
    CSDNBlogArticleAISupportRightToolBarBlock.init();
    Panel.execMenuOnce(
      [
        "csdn-blog-ai-coverRightToolOffSet",
        "csdn-blog-ai-coverRightToolOffSet-top",
        "csdn-blog-ai-coverRightToolOffSet-right",
      ],
      (option) => {
        if (!option.value[0]) {
          return;
        }
        return this.coverRightToolOffSet(option.value[1], option.value[2]);
      }
    );
  },
  /**
   * 覆盖右侧工具栏的偏移（top、right）
   */
  async coverRightToolOffSet(top: number, right: number) {
    log.info("覆盖右侧工具栏的偏移（top、right）");
    return addStyle(/*css*/ `
    #mainBox .article-aside-container{
      left: unset !important;
      top: ${top}px !important;
      right: ${right}px !important;
    }
    `);
  },
};
