/**
 * 视频伴音音质代码
 */
export const VideoSoundQualityCode = {
  "30216": "64K",
  "30232": "132K",
  "30280": "192K",
  "30250": "杜比全景声",
  "30251": "Hi-Res无损",
} as {
  [key: string]: string;
};

/**
 * 视频编码代码
 */
export const VideoCodingCode = {
  /** 8K 视频不支持该格式 */
  "7": "AVC",
  "12": "HEVC",
  "13": "AV1",
} as {
  [key: string]: string;
};
