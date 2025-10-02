declare interface ImageViewerHandleRule {
  /**
   * 匹配Url，可正则
   */
  url: string;
  /**
   * （可选）上下文，可以是document，也可以是一个元素选择器(会自动等待该元素出现)，默认为document
   */
  context: string;
  /**
   * （可选）context下的子元素选择器
   */
  selector?: string;
}

declare interface ImageViewerHandleClickEventRule extends ImageViewerHandleRule {
  /**
   * 处理模式
   */
  mode: "handleClickEvent";
  /**
   * （可选）是否阻止默认事件触发，默认false
   */
  isPreventDefault?: boolean;
  /**
   * （可选）使用的元素选择器，默认querySelectorAll
   * 当context存在且为字符串时，该选项生效
   */
  useSelector: "querySelector" | "querySelectorAll";
  /**
   * 点击事件的触发，可用于判断该点击的元素是否是图片，也可用于处理连续多图查看
   *
   * 传入参数event: PointerEvent
   * 返回格式 @type {ImageViewerHandleClickEventRuleResult}
   * {
   *     "isView": false,
   * }
   * 或者
   * {
   *     "isView": true,
   *      "imageList": [],
   *      "imageIndex": 0,
   * }
   */
  clickEvent?: string;
}

declare interface ImageViewerHandleClickEventRuleResult {
  /**
   * 是否继续查看图片
   */
  isView: boolean;
  /**
   * （可选）覆盖当前查看的图片列表
   */
  imageList?: string[];
  /**
   * （可选）为覆盖当前查看的图片的下标，该下标的值必须是有效的，否则会被重置为0
   */
  imageIndex?: number;
}

declare interface ImageViewerHandleElementRule extends ImageViewerHandleRule {
  /**
   * 处理模式
   */
  mode: "handleElement";
}

declare interface ImageViewerHandleClickEventCallBackResult {
  /**
   * 是否继续查看，默认false
   * + true 继续查看
   * + false 阻止查看
   */
  isView: boolean;
  /**
   * （可选）为覆盖当前查看的图片列表
   */
  imageList?: string[];
  /**
   * （可选）为覆盖当前查看的图片的下标，该下标的值必须是有效的，否则会被重置为0
   */
  imageIndex?: number;
}
declare type ImageViewerRule = ImageViewerHandleClickEventRule | ImageViewerHandleElementRule;
