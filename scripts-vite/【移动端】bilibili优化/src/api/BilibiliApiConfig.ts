export const BilibiliApiConfig = {
  web_host: "api.bilibili.com",
};

/**
 * 视频编码代码
 *
 * 默认的是av1（13）
 */
export const BilibiliVideoCodingCode = {
  AVC: 7,
  HEVC: 12,
  AV1: 13,
};

/**
 * bilibili接口请求失败状态码
 */
export type BilibiliFailResponse = {
  /** 状态码 */
  code: number;
  /** 失败原因 */
  message: string;
};
