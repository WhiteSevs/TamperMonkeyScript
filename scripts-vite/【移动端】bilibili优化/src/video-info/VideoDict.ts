/**
 * 画质代码字典
 *
 *
 * 画质名-画质代码
 */
export const VideoQualityNameMap = {
  /**
   * 仅mp4方式支持
   * + 6
   */
  "240P 极速": 6,
  /**
   * 仅mp4方式支持
   * + 16
   */
  "360P 流畅": 16,
  /**
   * 仅mp4方式支持
   * + 32
   */
  "480P 清晰": 32,
  /**
   * web端默认值
   *
   * B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到720P的取流地址
   *
   * 无720P时则为720P60
   * + 64
   */
  "720P 高清": 64,
  /**
   * 需要认证登录账号
   * + 74
   */
  "720P60 高帧率": 74,
  /**
   * TV端与APP端默认值
   *
   * 需要认证登录账号
   * + 80
   */
  "1080P 高清": 80,
  /**
   * 大多情况需求认证大会员账号
   * + 112
   */
  "1080P+ 高码率": 112,
  /**
   * 大多情况需求认证大会员账号
   * + 116
   */
  "1080P60 高帧率": 116,
  /**
   * 需要fnval&128=128且fourk=1
   *
   * 大多情况需求认证大会员账号
   * + 120
   */
  "4K 超清": 120,
  /**
   * 仅支持dash方式
   *
   * 需要fnval&64=64
   * + 125
   */
  "HDR 真彩色": 125,
  /**
   * 仅支持dash方式
   *
   * 需要fnval&512=512
   *
   * 大多情况需求认证大会员账号
   * + 126
   */
  杜比视界: 126,
  /**
   * 仅支持dash方式
   *
   * 需要fnval&1024=1024
   *
   * 大多情况需求认证大会员账号
   * + 127
   */
  "8K 超高清": 127,
};

/**
 * 画质代码字典
 *
 * 画质代码-画质名
 */
const VideoQualityMap = {} as {
  [key: number]: string;
};

Object.keys(VideoQualityNameMap).forEach((qualityName) => {
  let qualityValue = Reflect.get(VideoQualityNameMap, qualityName);
  Reflect.set(VideoQualityMap, qualityValue, qualityName);
});

export { VideoQualityMap };
