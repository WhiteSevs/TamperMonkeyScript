/** Utils.Log的初始化配置 */
export interface UtilsLogOptions {
  /** 是否输出Tag，false的话其它的颜色也不输出 @default true */
  tag: boolean;
  /** log.success的颜色 @default "#0000FF" */
  successColor: string;
  /** log.warn的颜色 @default "0" */
  warnColor: string;
  /** log.error的颜色 @default "#FF0000" */
  errorColor: string;
  /** log.info的颜色 @default "0" */
  infoColor: string;
  /** 是否开启debug模式，true会在控制台每次调用时输出调用函数的所在位置，false不会输出位置 @default false */
  debug: boolean;
  /** 当console输出超过logMaxCount数量自动清理控制台 @default false */
  autoClearConsole: boolean;
  /** console输出的最高数量，autoClearConsole开启则生效 @default 999 */
  logMaxCount: number;
}
