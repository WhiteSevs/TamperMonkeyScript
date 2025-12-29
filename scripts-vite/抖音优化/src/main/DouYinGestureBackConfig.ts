import { log } from "@/env";

/**
 * 手势返回使用的hash
 */
export const DouYinGestureBackHashConfig = {
  /** 进入视频评论区 */
  videoCommentDrawer: "videoCommentDrawer",
};

/**
 * 清理因刷新页面导致hash没清空的情况
 */
export const DouYinGestureBackClearHash = () => {
  const findValue = Object.values(DouYinGestureBackHashConfig).find((hash) => {
    return globalThis.location.hash.endsWith(hash);
  });
  if (findValue) {
    globalThis.location.hash = "";
    log.success(`发现残留的手势返回hash，已清理 ==> ` + findValue);
  }
};
