export const MDouYinRouter = {
  /**
   * 是否是移动端抖音
   */
  isMDouYin() {
    return window.location.hostname === "m.douyin.com" || window.location.hostname === "www.iesdouyin.com";
  },
  /**
   * 用户主页
   */
  isShareUser() {
    return this.isMDouYin() && window.location.pathname.startsWith("/share/user/");
  },
  /**
   * 分享的视频
   */
  isShareVideo() {
    return (
      this.isMDouYin() &&
      (window.location.pathname.startsWith("/share/video/") || window.location.pathname.startsWith("/shipin/"))
    );
  },
  /**
   * 笔记
   */
  isShareNote() {
    return this.isMDouYin() && window.location.pathname.startsWith("/share/note/");
  },
  /**
   * 音乐
   */
  isShareMusic() {
    return this.isMDouYin() && window.location.pathname.startsWith("/share/music/");
  },
  /**
   * 话题
   */
  isShareChallenge() {
    return this.isMDouYin() && window.location.pathname.startsWith("/share/challenge/");
  },
};
