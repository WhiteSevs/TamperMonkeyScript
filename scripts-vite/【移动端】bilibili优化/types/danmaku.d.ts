/** 单个弹幕的配置 */
declare type DanmaConfig = {
  /** 弹幕所在视频的具体时间 */
  stime: number;
  /**
   * 类型
   * + 1 顶部-从右往左
   * + 4 底部
   * + 5 顶部-固定不动
   * + 6 顶部-从左往右
   */
  mode: 1 | 4 | 5 | 6;
  /** 大小 */
  size: number;
  /**
   * 颜色
   * + 白色 16777215
   * + 红色 15138834
   */
  color: number;
  /**
   * 发送日期时间戳
   */
  date: number;
  class: number;
  pool: number;
  uid: string;
  uhash: string;
  /**
   * 弹幕id
   */
  dmid: string;
  /** 弹幕文字 */
  text: string;
  renderAs: number;
  /** 是否已显示 */
  showed: boolean;
};

/** 番剧的单个弹幕的配置 */
declare type BangumiDanmaConfig = {
  /**
   * 边框
   */
  border: boolean;
  /**
   * 边框颜色
   */
  borderColor: number;
  class: number;
  /**
   * 颜色
   * + 白色 16777215
   * + 红色 15138834
   */
  color: number;
  /**
   * 发送日期时间戳
   */
  date: number;
  /**
   * 弹幕id
   */
  dmid: string;
  /**
   * 类型
   * + 1 顶部-从右往左
   * + 4 底部
   * + 5 顶部-固定不动
   * + 6 顶部-从左往右
   */
  mode: 1 | 4 | 5 | 6;
  on: boolean;
  size: number;
  stime: number;
  text: string;
  uid: string;
  vDanmaku: boolean;
};

/** 弹幕配置 */
declare type DanmakuCoreConfig = {
  /**
   * 弹幕容器
   */
  container: HTMLDivElement;
  /**
   * 是否粗体
   * @default true
   */
  bold: boolean;
  /**
   * 弹幕速度
   * 10 极慢
   * 8  较慢
   * 6  适中
   * 4  较快
   * 2  极快
   * @default 6
   */
  duration: number;
  /**
   * 当前弹幕数量
   */
  danmakuNumber: number;
  /**
   * 弹幕显示区域
   * + 10  全屏
   * + 7.5 3/4屏
   * + 5   半屏
   * + 2.5 1/4屏
   * @default 10
   */
  danmakuArea: number;
  /**
   * 字体边框大小
   * @default 2
   */
  fontBorder: number;
  /**
   * 字体类型
   * @default "SimHei, 'Microsoft JhengHei'"
   */
  fontFamily: string;
  /**
   * 字体大小
   * @default 0.6816666641367808
   */
  fontSize: number;
  /**
   * 弹幕随屏幕缩放
   * @default false
   */
  fullScreenSync: boolean;
  /**
   * 透明度
   * @default 0.75
   */
  opacity: number;
  /**
   * 是否阻止遮罩
   * @default false
   */
  preventShade: boolean;
  /**
   * 速度倍率
   * @default 1
   */
  speedPlus: number;
  /**
   * 弹幕速度同步播放倍速
   * ↓videoSpeed
   * @default false
   */
  speedSync: boolean;
  /**
   * 密度
   * @default true
   */
  density: boolean;
  /**
   * 视频速度
   * @default 1
   */
  videoSpeed: number;
  /**
   * 弹幕是否可见
   * @default true
   */
  visible: boolean;
  /**
   * 是否回收
   * @default true
   */
  isRecycling: boolean;
  /**
   * 是否垂直弹幕
   * @default false
   */
  verticalDanmaku: boolean;
  /**
   * 弹幕间隔
   * @default 1
   */
  preTime: number;
  /**
   * 弹幕类型
   * @default "div"
   */
  type: "div";
  /**
   * 设备像素比
   * @default 1
   */
  devicePR: number;
  width: number;
  height: number;

  containerUpdating: () => void;
  countUpdating: () => void;
  /**
   * 弹幕过滤
   * @param danmuConfig 当前弹幕的配置
   * @returns
   * + true 过滤
   * + false 不过滤
   */
  danmakuFilter: (danmuConfig: DanmaConfig) => boolean;
  danmakuInserting: () => void;
};
