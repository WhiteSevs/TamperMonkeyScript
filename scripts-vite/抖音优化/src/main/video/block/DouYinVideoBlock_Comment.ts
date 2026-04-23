import { log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

/**
 * 评论区
 */
export const DouYinVideoBlock_Comment = {
  init() {
    Panel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
      return this.shieldUserCommentToolBar();
    });
    Panel.execMenuOnce("dy-video-shieldUserCommentEveryOneAllSearch", () => {
      return this.shieldUserCommentEveryOneAllSearch();
    });
    Panel.execMenuOnce("dy-video-comment-blockDetails", () => {
      return this.blockDetails();
    });
    Panel.execMenuOnce("dy-video-comment-blockTAWork", () => {
      return this.blockTAWork();
    });
    Panel.execMenuOnce("dy-video-comment-blockComment", () => {
      return this.blockComment();
    });
    Panel.execMenuOnce("dy-video-comment-blockCollection", () => {
      return this.blockCollection();
    });
    Panel.execMenuOnce("dy-video-comment-blockAskAI", () => {
      return this.blockAskAI();
    });
    Panel.execMenuOnce("dy-video-comment-blockRelatedRecommend", () => {
      return this.blockRelatedRecommend();
    });
    Panel.execMoreMenuOnce(
      [
        [
          "dy-video-comment-blockReply",
          () => {
            return this.blockReply();
          },
        ],
        [
          "dy-video-comment-blockShare",
          () => {
            return this.blockShare();
          },
        ],
        [
          "dy-video-comment-blockLike",
          () => {
            return this.blockLike();
          },
        ],
        [
          "dy-video-comment-blockDislike",
          () => {
            return this.blockDislike();
          },
        ],
      ],
      () => {
        return addBlockCSS("#videoSideCard .comment-item-stats-container");
      }
    );
  },

  /**
   * 【屏蔽】评论工具栏
   */
  shieldUserCommentToolBar() {
    log.info("【屏蔽】评论工具栏");
    return [addBlockCSS(".comment-input-container")];
  },
  /**
   * 【屏蔽】大家都在搜
   */
  shieldUserCommentEveryOneAllSearch() {
    log.info("【屏蔽】大家都在搜");
    return [addBlockCSS(".comment-header-with-search")];
  },
  /**
   * 【屏蔽】详情
   */
  blockDetails() {
    log.info("【屏蔽】详情");
    return addBlockCSS(
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPaneldetail_tab"][aria-selected="false"]'
    );
  },
  /**
   * 【屏蔽】TA的作品
   */
  blockTAWork() {
    log.info("【屏蔽】TA的作品");
    return addBlockCSS(
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPanelauthor_card"][aria-selected="false"]'
    );
  },
  /**
   * 【屏蔽】评论
   */
  blockComment() {
    log.info("【屏蔽】评论");
    return addBlockCSS('#videoSideCard [role="tablist"] [aria-controls="semiTabPanelcomment"][aria-selected="false"]');
  },
  /**
   * 【屏蔽】合集
   */
  blockCollection() {
    log.info("【屏蔽】合集");
    return addBlockCSS(
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPanelplaylet_card"][aria-selected="false"]',
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPanelcompilation_card"][aria-selected="false"]'
    );
  },
  /**
   * 【屏蔽】问AI
   */
  blockAskAI() {
    log.info("【屏蔽】问AI");
    return addBlockCSS('#videoSideCard [role="tablist"] [aria-controls="semiTabPanelai_card"][aria-selected="false"]');
  },
  /**
   * 【屏蔽】相关推荐
   */
  blockRelatedRecommend() {
    log.info("【屏蔽】相关推荐");
    return addBlockCSS(
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPanelrelated_card"][aria-selected="false"]'
    );
  },
  /**
   * 【屏蔽】回复
   */
  blockReply() {
    log.info("【屏蔽】回复");
    return addBlockCSS(
      '#videoSideCard .comment-item-stats-container > div:has([d="M6 17.617C6 11.561 11.578 7 18 7s12 4.561 12 10.617c0 3.036-1.51 5.529-3.749 7.728-.187.184-.381.364-.58.54-1.925 2.082-3.911 3.417-5.847 3.973-.77.221-1.702.242-2.454-.381-.68-.564-.837-1.361-.878-1.823a3.848 3.848 0 0 1-.01-.136C10.898 26.91 6 23.264 6 17.617zM18 10c-5.177 0-9 3.602-9 7.617 0 3.867 3.794 6.992 9.152 6.992h1.5v1.717l-.06.206c0-.001-.03.104-.06.259 1.155-.46 2.515-1.394 3.984-2.996l.056-.06.063-.055c.182-.16.353-.318.514-.475C26.075 21.312 27 19.543 27 17.617 27 13.602 23.177 10 18 10z"])'
    );
  },
  /**
   * 【屏蔽】分享
   */
  blockShare() {
    log.info("【屏蔽】分享");
    return addBlockCSS(
      '#videoSideCard .comment-item-stats-container > div:has([d="M12.066 5.295l-.553.578.553-.578zM10.281 7.3v.8h.8v-.8h-.8zm-.213.002l-.022.8h.035l-.013-.8zM4.823 9.35l.585.545-.585-.545zm-1.821 4.688l.8.024v-.049l-.8.025zm.632.765l-.703-.383.703.383zm6.647-2.056h.8v-.67l-.658-.118-.142.787zm1.754 1.965l.53.6-.53-.6zm4.275-3.776l.53.599-.53-.6zm.03-1.554l.553-.578-.553.578zm-5.259-3.326c0-.224.27-.34.432-.184l1.106-1.156c-1.18-1.13-3.138-.293-3.138 1.34h1.6zm0 1.244V6.057h-1.6v1.244h1.6zm-1 .801l.2-.001V6.5c-.076 0-.152 0-.228.002l.028 1.6zM5.408 9.896c1.605-1.72 3.93-1.813 4.638-1.794l.043-1.6c-.813-.021-3.754.054-5.851 2.303l1.17 1.091zm-1.607 4.118c-.014-.44.096-1.169.373-1.963.275-.79.69-1.572 1.234-2.155l-1.17-1.09c-.738.79-1.25 1.788-1.575 2.718-.322.924-.483 1.853-.461 2.54l1.6-.05zm-.87.407a.463.463 0 0 1 .234-.208.558.558 0 0 1 .485.034c.158.09.187.207.178.177a1.205 1.205 0 0 1-.027-.36l-1.6-.049c-.01.335.02.639.104.9.084.26.247.546.55.72.318.183.66.165.921.056.246-.101.442-.286.56-.504l-1.405-.766zm7.35-1.673l.141-.788h-.002l-.005-.001-.014-.003a3.758 3.758 0 0 0-.232-.034 11.84 11.84 0 0 0-2.684-.053c-1.532.15-3.549.708-4.554 2.552l1.405.766c.61-1.12 1.916-1.59 3.305-1.726a10.234 10.234 0 0 1 2.492.073h.007v.001l.141-.787zm.8 1.174v-1.175h-1.6v1.175h1.6zm.425.192a.255.255 0 0 1-.425-.192h-1.6c0 1.599 1.886 2.449 3.084 1.39l-1.06-1.198zm4.274-3.777l-4.274 3.777 1.059 1.199 4.274-3.777-1.059-1.199zm.007-.376a.255.255 0 0 1-.007.376l1.06 1.199c.813-.72.838-1.98.053-2.731L15.787 9.96zm-4.274-4.088l4.274 4.088 1.106-1.156-4.274-4.088-1.106 1.156z"])'
    );
  },
  /**
   * 【屏蔽】点赞
   */
  blockLike() {
    log.info("【屏蔽】点赞");
    return addBlockCSS(
      '#videoSideCard .comment-item-stats-container > div>p:has([d="M7.646 4.168c-2.238 0-4.035 1.919-4.035 4.152l.002.13a.834.834 0 0 0-.001.073c.006.3.075.66.15.962.074.294.178.622.294.86.467 1.004 1.284 1.979 2.071 2.78a23.69 23.69 0 0 0 2.646 2.323l.015.012.012.01c.174.175.543.54 1.2.54h.019c.186 0 .63 0 1.028-.387l.033-.027c.033-.029.08-.067.14-.117l.003-.003c.436-.359 1.456-1.2 2.462-2.214.644-.646 1.312-1.396 1.822-2.17a7.94 7.94 0 0 0 .2-.318.84.84 0 0 0 .063-.13.956.956 0 0 1 .11-.214.835.835 0 0 0 .074-.144c.029-.073.05-.121.066-.154l.003-.007a.832.832 0 0 0 .147-.29c.125-.444.21-.835.219-1.316a.82.82 0 0 0-.002-.067 5.39 5.39 0 0 0 .002-.16c-.015-2.22-1.807-4.124-4.035-4.124-.845 0-1.667.262-2.316.789a4.029 4.029 0 0 0-2.392-.789zm7.076 4.153V8.424l-.002.07c0 .008 0 .022.002.039a3.065 3.065 0 0 1-.121.721 1.9 1.9 0 0 0-.078.144 3.297 3.297 0 0 0-.089.2c-.083.135-.137.24-.193.38a6.64 6.64 0 0 1-.124.195v.001c-.425.644-1.007 1.305-1.613 1.912l-.002.001a31.607 31.607 0 0 1-2.342 2.106l-.032.026-.12.1-.048-.046c-.05-.05-.119-.105-.152-.131l-.006-.005A22.003 22.003 0 0 1 7.32 11.96l-.003-.003c-.747-.76-1.408-1.577-1.753-2.323a3.149 3.149 0 0 1-.185-.555 3.468 3.468 0 0 1-.1-.553.964.964 0 0 0 0-.104V8.42a3.56 3.56 0 0 1-.001-.099c0-1.373 1.11-2.485 2.368-2.485.662 0 1.288.269 1.848.85a.833.833 0 0 0 1.282-.099c.33-.47.892-.751 1.578-.751 1.258 0 2.368 1.113 2.368 2.485z"])'
    );
  },
  /**
   * 【屏蔽】不喜欢
   */
  blockDislike() {
    log.info("【屏蔽】不喜欢");
    return addBlockCSS(
      '#videoSideCard .comment-item-stats-container > div>p:has([d="M15.58 8.58c0 .1 0 .21-.01.31v.13l-.01.06c-.04.44-.13.8-.27 1.22-.02.08-.06.15-.12.21h.01c-.04.07-.07.13-.1.19a.37.37 0 0 1-.05.11c-.07.11-.09.14-.13.23-.01.04-.03.07-.05.1-.67 1.09-1.71 2.14-2.56 2.91-.43.39-.83.72-1.12.97-.13.1-.25.19-.33.26l-.03.03-.11.08h-.01l-.01.02h-.01c-.1.11-.33.33-.67.41h-.01c-.09.04-.19.07-.29.08-.58.08-.95-.23-1.11-.37l-.03-.03c-.64-.45-1.27-.93-1.87-1.43-.98-.83-2.16-1.95-2.84-3.13-.14-.24-.26-.5-.36-.77-.11-.29-.2-.59-.25-.89h-.01v-.06l-.02-.14c-.29-2.05.92-4.16 2.92-4.45.15-.02.29-.03.43-.03.88 0 1.7.36 2.41.99.14.13.23.31.23.5l.02 1.29 1.3.96c.14.1.23.26.26.44.03.17-.01.35-.12.5l-.94 1.32.63 1.34c.07.17.08.35.02.51a.69.69 0 0 1-.35.38c-.16.08-.34.09-.51.03a.67.67 0 0 1-.38-.34l-.81-1.7a.702.702 0 0 1-.06-.35c.01-.12.05-.23.12-.33l.79-1.11-1.02-.76a.55.55 0 0 1-.2-.23.641.641 0 0 1-.08-.3l-.02-1.31c-.43-.32-.86-.47-1.28-.47-.08 0-.17 0-.25.02-1.07.15-1.98 1.39-1.77 2.92l.02.1v.02s.01.05.01.08c.03.14.09.36.18.59.09.26.19.46.24.55h.01c.57.98 1.6 1.98 2.55 2.79.54.45 1.09.87 1.66 1.28l.03.02c.07.06.16.12.2.15.03.03.06.05.09.07.03-.01.07-.02.11-.03l.09-.09c.05-.04.13-.11.2-.16l.02-.02.03-.03.32-.26c.36-.29.72-.6 1.07-.91.81-.74 1.72-1.67 2.29-2.58.06-.13.11-.23.19-.36.03-.06.06-.13.09-.19.02-.04.05-.09.09-.14.09-.31.14-.53.17-.78v-.2c.12-1.49-.85-2.63-1.89-2.7h-.12c-.57 0-1.19.26-1.49.68-.05.07-.11.14-.19.18a.55.55 0 0 1-.25.1c-.09.02-.18.02-.27 0a.545.545 0 0 1-.24-.12.54.54 0 0 1-.18-.19.825.825 0 0 1-.1-.26.576.576 0 0 1 .02-.26c.02-.09.06-.17.11-.24.6-.84 1.67-1.25 2.59-1.25.08 0 .15 0 .22.01 1.87.12 3.16 1.92 3.16 3.83z"])'
    );
  },
};
