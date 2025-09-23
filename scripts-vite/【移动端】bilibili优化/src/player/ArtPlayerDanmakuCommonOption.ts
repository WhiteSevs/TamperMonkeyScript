import { utils } from "@/env";
import { type Option } from "artplayer-plugin-danmuku";
export const ArtPlayerDanmakuCommonOption = (): Partial<Option> => {
  return {
    heatmap: false,
    // 默认弹幕颜色，可以被单独弹幕项覆盖
    color: "#FFFFFF",
    // 默认弹幕模式: 0: 滚动，1: 顶部，2: 底部
    mode: 0,
    // 弹幕发射器挂载点, 默认为播放器控制栏中部
    mount: void 0,
    // 当播放器宽度小于此值时，弹幕发射器置于播放器底部
    width: 800,
    // 热力图数据
    points: [],
    // 弹幕载入前的过滤器
    filter: (danmu) => danmu.text.length <= 100,
    // 弹幕显示前的过滤器，返回 true 则可以发送
    beforeVisible: () => true,
    // 是否开启弹幕发射器
    emitter: false,
    // 弹幕输入框最大长度, 范围在[1 ~ 1000]
    maxLength: 50,
    // 输入框锁定时间，范围在[1 ~ 60]
    lockTime: 3,
    // 弹幕主题，支持 dark 和 light，只在自定义挂载时生效
    theme: utils.isThemeDark() ? "dark" : "light",
    // OPACITY: {}, // 不透明度配置项
    // FONT_SIZE: {}, // 弹幕字号配置项
    // MARGIN: {}, // 显示区域配置项
    // SPEED: {}, // 弹幕速度配置项
    // COLOR: [], // 颜色列表配置项
  };
};
