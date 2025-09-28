declare interface VideoQualityMapInfo {
  label: string;
  sign: number;
  name: string;
  /** 链接 */
  src: string;
}

declare interface VideoQualityMapData {
  [key: string]: {
    /** 显示的选项名 */
    label: string;
    /** 值 */
    sign: number;
    /** 值 */
    name: string;
  };
}
