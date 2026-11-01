export const BilibiliData = {
  className: {
    bangumi: "#app.main-container",
    bangumi_new: "body > #__next",
    dynamic: "#app .m-dynamic",
    opus: "#app .m-opus",
    search: "#app .m-search",
    "topic-detail": "#app .topic-detail",
    video: "#app .video",
    mVideo: "#app .m-video",
    head: "#app .m-head",
    playlist: "#app .playlist",
    space: "#app .m-space",
  },
  /** 主题色 */
  theme: "#FB7299",
  /**
   * 视频排序
   *
   * + `click` 最多播放
   * + `pubdate` 最新发布
   * + `stow` 最多收藏
   * @default "pubdata"
   */
  spaceVideoSortByButton: "pubdate" as "click" | "pubdate" | "stow",
};

export const BilibiliPCData = {
  className: {
    read: {
      mobile: "#app .read-app-main",
    },
  },
};
