export const DouYinUrl = {
  /**
   * 获取视频链接
   * @param videoId 视频id
   */
  getVideoUrl(videoId: string) {
    return "https://www.douyin.com/video/" + videoId;
  },
  /**
   * 获取视频合集链接
   * @param collectionId 合集id
   */
  getCollectionUrl(collectionId: string) {
    return "https://www.douyin.com/collection/" + collectionId;
  },
  /**
   * 获取笔记链接
   * @param noteId 笔记id
   */
  getNoteUrl(noteId: string | number) {
    return "https://www.douyin.com/note/" + noteId;
  },
  /**
   * 获取话题链接
   * @param hashTagId 话题id
   */
  getHashTagUrl(hashTagId: string | number) {
    return "https://www.douyin.com/hashtag/" + hashTagId;
  },
  /**
   * 获取用户主页链接
   * @param sec_uid
   */
  getUserHomeUrl(sec_uid: string) {
    return "https://www.douyin.com/user/" + sec_uid;
  },
  /**
   * 获取音乐链接
   * @param musicId 音乐id
   */
  getMusicUrl(musicId: string | number) {
    return "https://www.douyin.com/music/" + musicId;
  },
};
