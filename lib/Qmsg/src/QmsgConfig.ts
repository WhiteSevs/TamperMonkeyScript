import type { QmsgMsg } from "./QmsgInst";

/** 实例所在的位置 */
export type QmsgPosition =
  | "topleft"
  | "top"
  | "topright"
  | "left"
  | "center"
  | "right"
  | "bottomleft"
  | "bottom"
  | "bottomright";

/** 实例类型 */
export type QmsgType = "info" | "warning" | "success" | "error" | "loading";

/** 实例内容超出宽度时的处理方式 */
export type QmsgLimitWidthWrap = "no-wrap" | "wrap" | "ellipsis";

/** 实例配置 */
export interface QmsgConfig {
  /**
   * 实例插入到页面的父元素
   * @default document.body || document.documentElement
   */
  parent?: HTMLElement | Document | DocumentFragment | Node | Element;
  /**
   * 是否使用shadowRoot（在其内部插入实例元素）
   * @default true
   */
  useShadowRoot?: boolean;
  /**
   * shadowRoot模式
   * @default "open"
   */
  shadowRootMode?: ShadowRootMode;
  /**
   * 是否使用动画
   * @default true
   */
  animation?: boolean;
  /**
   * 是否自动关闭
   *
   * 注意：在`type`为`loading`时，强制该值为`false`
   * @default true
   */
  autoClose?: boolean;
  /**
   * 通过监听事件来判断是否(鼠标悬停|触摸进入)时暂停自动关闭，当(鼠标离开|触摸离开)时会自动重启自动关闭定时器
   * @default true
   */
  listenEventToPauseAutoClose?: boolean;
  /**
   * 通过监听`visibilitychange`事件在来回切换标签页时自动关闭实例
   *
   * 前置条件：`autoClose`: true，`timeout`: >0
   * @default true
   */
  listenEventToCloseInstance?: boolean;
  /**
   * 显示的内容
   * @default ""
   */
  content?: string;
  /**
   * 显示的内容是否是html，否则是普通的text
   * @default false
   */
  isHTML?: boolean;
  /**
   * 弹出的位置
   * @default "center"
   */
  position?: QmsgPosition;
  /**
   * 是否在最右边显示关闭图标
   * @default false
   */
  showClose?: boolean;
  /**
   * Qmsg最大显示的数量，超出最大数量时，会自动关闭最旧的实例
   * @default 5
   */
  maxNums?: number;
  /**
   * 关闭Qmsg时触发的回调函数
   * @default null
   */
  onClose?: (<T extends QmsgMsg>(this: T) => void) | null;
  /**
   * 是否显示左边的icon图标
   * @default true
   */
  showIcon?: boolean;
  /**
   * 是否使内容进行换行显示
   * @default false
   */
  showMoreContent?: boolean;
  /**
   * 弹出顺序是否逆反
   * + `true`：按顺序追加弹出
   * + `false`：逆序追加弹出
   * @default false
   */
  showReverse?: boolean;
  /**
   * 最大显示的时长(ms)
   * @default 2500
   */
  timeout?: number;
  /**
   * 弹出类型
   *
   * 信息、警告、成功、错误、加载中
   */
  type: QmsgType;
  /**
   * 元素层级
   * @default 50000
   */
  zIndex?: number | (() => number);
  /**
   * 自定义的样式
   * @default ""
   */
  style?: string;
  /**
   * 自定义类名
   * @default ""
   */
  customClass?: string;
  /**
   * 是否限制宽度，当该值为`true`时，会限制宽度，超出限制宽度时，会进行换行或显示为省略号
   *
   * 前置条件：`limitWidthNum`: >0
   * @default false
   */
  isLimitWidth?: boolean;
  /**
   * 限制宽度的数值
   *
   * 前置条件：`isLimitWidth`: true
   * @default 200
   */
  limitWidthNum?: number | string;
  /**
   * 当超出限制宽度时，是否换行还是显示为省略号
   * @default "wrap"
   */
  limitWidthWrap?: "no-wrap" | "wrap" | "ellipsis";
  /**
   * 是否在控制台打印content信息
   *
   * 如果为函数，返回`boolean`类型，当为`true`时，通过`console.log`输出`content`，当为`false`时，不输出content信息
   * @default false
   */
  consoleLogContent?:
    | boolean
    | ((
        /**
         * 配置项
         */
        qmsgInst: typeof QmsgMsg.prototype
      ) => boolean);
  /**
   * 在实例初始化完毕（元素创建完成且添加到`parent`内）后自动调用该函数
   * @default null
   */
  afterRender?:
    | ((
        /**
         * 配置项
         */
        qmsgInst: typeof QmsgMsg.prototype
      ) => void)
    | null
    | undefined;
}
