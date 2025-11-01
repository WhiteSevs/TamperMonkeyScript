import { QmsgAnimation, type QmsgAnimationState } from "./QmsgAnimation";
import { QmsgCSS } from "./QmsgCSS";
import { QmsgDefaultConfig } from "./QmsgDefaultConfig";
import { QmsgIcon, QmsgHeaderCloseIcon } from "./QmsgIcon";
import { QmsgInstStorage } from "./QmsgInstStorage";
import type { QmsgConfig } from "./QmsgConfig";
import { QmsgUtils } from "./QmsgUtils";
/**
 * 每条消息的构造函数
 */
export class QmsgMsg {
  /**
   * setTimeout的id
   */
  timeId: number | undefined = void 0;
  /**
   * 启动时间
   */
  startTime: number | null;
  /**
   * 关闭时间
   */
  endTime: number | null;
  /**
   * 实例的配置（动态获取）
   */
  setting: Required<QmsgConfig>;
  /**
   * 实例的配置的字符串
   */
  settingStr: string;
  /**
   * 把动态的`setting`转为普通的对象
   */
  settingJSON: Required<QmsgConfig>;
  /**
   * uuid
   */
  uuid: string;
  /**
   * 当前实例的动画状态
   */
  state: keyof QmsgAnimationState;
  /**
   * 当前实例的相同消息的数量
   */
  repeatNum: number;
  /**
   * 元素
   */
  $el = {
    /**
     * 主元素
     */
    $item: null as any as HTMLElement,
    /**
     * 获取内容元素
     */
    get $content() {
      const $el = this.$item.querySelector<HTMLSpanElement>('[class^="qmsg-content-"] .qmsg-content-text');
      if (!$el) {
        throw new TypeError("QmsgInst $content is null");
      }
      return $el;
    },
  };
  constructor(config: QmsgConfig, uuid: string) {
    this.timeId = void 0;
    this.startTime = Date.now();
    this.endTime = null;
    // 按顺序获取值
    // 先获取用户的配置值，如果没有，获取自定义的全局配置值，如果没有，最后获取全局默认值
    this.setting = QmsgUtils.toDynamicObject(QmsgDefaultConfig.config, config, QmsgDefaultConfig.INS_DEFAULT);
    this.settingStr = JSON.stringify(this.setting);
    this.settingJSON = Object.assign({}, this.setting);
    this.uuid = uuid;
    this.state = "opening";
    this.$el.$item = document.createElement("div");
    this.repeatNum = 1;

    this.detectionType();
    this.initEl();

    const consoleLogContent =
      typeof this.setting.consoleLogContent === "function"
        ? this.setting.consoleLogContent(this)
        : this.setting.consoleLogContent;
    if (consoleLogContent) {
      // 控制台输出content
      console.log(this.setting.content);
    }

    Reflect.set(this.$el.$item, "data-inst", this);
    if (typeof this.setting.afterRender === "function") {
      this.setting.afterRender(this);
    }
  }
  /**
   * 初始化元素
   */
  private initEl() {
    const that = this;
    if (this.setting.customClass && typeof this.setting.customClass === "string") {
      // 设置自定义类名
      this.$el.$item.classList.add(this.setting.customClass);
    }
    // 设置svg图标
    const $svg = QmsgIcon[this.setting.type || "info"];
    let contentClassName = QmsgUtils.getNameSpacify("content-" + this.setting.type || "info");
    if (this.setting.showClose) {
      // 显示 关闭图标
      contentClassName += " " + QmsgUtils.getNameSpacify("content-with-close");
    }
    // 内容兼容处理
    const content = this.setting.content || "";
    // 关闭图标svg
    const $closeSvg = QmsgHeaderCloseIcon;
    let $closeIcon = "";
    if (this.setting.showClose) {
      // 显示右上角的关闭图标按钮
      $closeIcon = /*html*/ `<i class="qmsg-icon qmsg-icon-close">${$closeSvg}</i>`;
    }
    // 内容
    const $content = document.createElement("span");
    $content.className = "qmsg-content-text";
    const positionClassName = QmsgUtils.getNameSpacify("data-position", this.setting.position.toLowerCase());
    const isHTML = this.setting.isHTML;
    if (isHTML) {
      // 内容是html
      QmsgUtils.setSafeHTML($content, content);
    } else {
      // 内容是纯文本
      $content.innerText = content;
    }
    if (this.setting.isLimitWidth) {
      // 限制宽度、自动换行
      let limitWidthNum = this.setting.limitWidthNum;
      if (typeof limitWidthNum === "string") {
        if (QmsgUtils.isNumber(limitWidthNum)) {
          limitWidthNum = limitWidthNum + "px";
        }
      } else {
        limitWidthNum = limitWidthNum.toString() + "px";
      }
      $content.style.maxWidth = limitWidthNum;
      $content.style.width = limitWidthNum;
      // 设置换行信息
      $content.setAttribute("data-limitWidthWrap", this.setting.limitWidthWrap);
    } else {
      $content.setAttribute("data-limitWidthWrap", "no-wrap" as NonNullable<QmsgConfig["limitWidthWrap"]>);
    }
    QmsgUtils.setSafeHTML(
      this.$el.$item,
      /*html*/ `
			<div class="qmsg-content-wrapper">
				<div class="${contentClassName}">
				${this.setting.showIcon ? `<i class="qmsg-icon">${$svg}</i>` : ""}
					${$content.outerHTML}
					${$closeIcon}
				</div>
			</div>
			`
    );
    /** 内容容器 */
    const $contentContainer = this.$el.$item.querySelector<HTMLElement>(".qmsg-content-wrapper")!;

    this.$el.$item.classList.add(QmsgUtils.getNameSpacify("item"));
    this.$el.$item.setAttribute(QmsgUtils.getNameSpacify("uuid"), this.uuid);
    /** 总根元素 */
    let $shadowContainer: HTMLElement | null;
    /** 根元素 */
    let $shadowRoot: ShadowRoot | null | undefined | HTMLElement;
    /** 容器包裹的元素 */
    let $wrapper: HTMLElement | null;
    $shadowContainer = document.querySelector<HTMLElement>(".qmsg-shadow-container");
    $shadowRoot = this.setting.useShadowRoot ? $shadowContainer?.shadowRoot : $shadowContainer;
    if (!$shadowContainer) {
      // 页面中不存在ShadowRoot容器元素
      // 添加新增的ShadowRoot容器元素
      $shadowContainer = document.createElement("div");
      $shadowContainer.className = "qmsg-shadow-container";
      if (this.setting.useShadowRoot) {
        $shadowRoot = $shadowContainer.attachShadow({
          mode: this.setting.shadowRootMode,
        });
      } else {
        $shadowRoot = $shadowContainer;
      }
      $shadowRoot.appendChild(QmsgCSS.getStyleElement());
      if (this.setting.style != null) {
        // 插入自定义的style
        // 这里需要插入到每一条的Qmsg内，以便移除实例时把style也移除
        const __$ownStyle__ = document.createElement("style");
        __$ownStyle__.setAttribute("type", "text/css");
        __$ownStyle__.setAttribute("data-id", this.uuid);
        QmsgUtils.setSafeHTML(__$ownStyle__, this.setting.style);
        $contentContainer.insertAdjacentElement("afterend", __$ownStyle__);
      }

      this.setting.parent.appendChild($shadowContainer);
    }
    if ($shadowRoot == null) {
      throw new TypeError("QmsgInst " + QmsgDefaultConfig.PLUGIN_NAME + " $shadowRoot is null");
    }
    // 每个位置都有一个wrapper元素
    $wrapper = $shadowRoot.querySelector<HTMLElement>(
      `.${QmsgDefaultConfig.NAMESPACE}.${QmsgUtils.getNameSpacify("wrapper")}.${positionClassName}`
    );
    if (!$wrapper) {
      $wrapper = document.createElement("div");
      $wrapper.classList.add(
        QmsgDefaultConfig.NAMESPACE,
        QmsgUtils.getNameSpacify("wrapper"),
        QmsgUtils.getNameSpacify("is-initialized"),
        positionClassName
      );
      $shadowRoot.appendChild($wrapper);
    }
    if (this.setting.showReverse) {
      $wrapper.style.flexDirection = "column-reverse";
    } else {
      $wrapper.style.flexDirection = "column";
    }
    let zIndex = this.setting.zIndex;
    if (typeof zIndex === "function") {
      zIndex = zIndex();
    }
    if (!isNaN(zIndex)) {
      $wrapper.style.zIndex = zIndex.toString();
    }
    $wrapper.appendChild(this.$el.$item);
    this.setState(this.$el.$item, "opening");
    if (this.setting.showClose) {
      // 关闭按钮绑定点击事件
      const $closeIcon = this.$el.$item.querySelector<HTMLElement>(".qmsg-icon-close");
      if ($closeIcon) {
        $closeIcon.addEventListener("click", () => {
          that.close();
        });
      }
    }
    // 监听动画完成
    const animationendEvent = () => {
      const animationNameValue = QmsgAnimation.getStyleAnimationNameValue(that.$el.$item);
      if (animationNameValue === QmsgAnimation.$state.closing) {
        // 当前触发的是关闭
        that.endTime = Date.now();
        that.destroy();
      }
      QmsgAnimation.setStyleAnimationName(this.$el.$item);
    };

    QmsgAnimation.$name.endNameList.forEach(function (animationendName) {
      that.$el.$item.addEventListener(animationendName as "animationend", animationendEvent);
    });

    // 自动关闭
    if (this.setting.autoClose && this.setting.listenEventToPauseAutoClose) {
      // 鼠标|触摸滑入时，清除自动关闭的定时器
      // 鼠标|触摸滑出时，重新设置定时器
      this.resetAutoCloseTimer();
      /**
       * 鼠标滑入
       *
       * + 清除定时器
       * + 清除开始时间
       * + 清除结束时间
       */
      const enterEvent = () => {
        this.clearAutoCloseTimer();
      };
      /**
       * 鼠标滑出，重启定时器，创建新的开始时间和timeId
       */
      const leaveEvent = () => {
        if (this.timeId != null) {
          // 似乎enterEvent函数未正确调用？
          console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId：" + this.timeId);
          return;
        }
        this.startAutoCloseTimer();
      };
      let isRemoveMouseEvent = false;
      this.$el.$item.addEventListener("mouseenter", enterEvent);
      this.$el.$item.addEventListener("mouseleave", leaveEvent);

      this.$el.$item.addEventListener(
        "touchstart",
        () => {
          // 由于移动端不支持mouseout且会触发mouseenter
          // 那么需要移除该监听
          if (!isRemoveMouseEvent) {
            isRemoveMouseEvent = true;
            this.$el.$item.removeEventListener("mouseenter", enterEvent);
            this.$el.$item.removeEventListener("mouseleave", leaveEvent);
          }
          enterEvent();
        },
        { passive: true }
      );
      this.$el.$item.addEventListener("touchend", leaveEvent);
      this.$el.$item.addEventListener("touchcancel", leaveEvent);
    }
  }
  /**
   * 对timeout进行检测并转换
   * 当timeout为string时，转换为number
   * timeout必须在规定范围内
   */
  private detectionType() {
    if (this.setting.timeout != null && typeof this.setting.timeout === "string") {
      this.setting.timeout = parseInt(this.setting.timeout);
    }
    if (isNaN(this.setting.timeout)) {
      this.setting.timeout = QmsgDefaultConfig.config.timeout;
    }
    if (
      !(
        this.setting.timeout != null &&
        parseInt(this.setting.timeout.toString()) >= 0 &&
        parseInt(this.setting.timeout.toString()) <= Number.MAX_VALUE
      )
    ) {
      this.setting.timeout = QmsgDefaultConfig.config.timeout;
    }

    if (typeof this.setting.zIndex === "function") {
      this.setting.zIndex = this.setting.zIndex();
    }
    if (this.setting.zIndex != null && typeof this.setting.zIndex === "string") {
      this.setting.zIndex = parseInt(this.setting.zIndex);
    }
    if (isNaN(this.setting.zIndex)) {
      this.setting.zIndex =
        typeof QmsgDefaultConfig.config.zIndex === "function"
          ? QmsgDefaultConfig.config.zIndex()
          : QmsgDefaultConfig.config.zIndex;
    }
  }
  /**
   * 设置元素动画状态 开启/关闭
   * @param QmsgMsg
   * @param state
   */
  private setState(element: HTMLElement, state: keyof QmsgAnimationState) {
    if (!state || !QmsgAnimation.$state[state]) return;
    this.state = state;
    QmsgAnimation.setStyleAnimationName(element, QmsgAnimation.$state[state]);
  }
  /**
   * 设置`repeatNum`自增
   */
  setRepeatNumIncreasing() {
    this.repeatNum++;
  }
  /**
   * 设置消息数量统计
   */
  setMsgCount() {
    const countClassName = QmsgUtils.getNameSpacify("count");
    const $content = this.$el.$item.querySelector<HTMLElement>(
      `.${QmsgDefaultConfig.NAMESPACE}.${QmsgUtils.getNameSpacify("wrapper")} [class^="qmsg-content-"]`
    );
    if (!$content) {
      throw new TypeError("QmsgInst $content is null");
    }
    let $count = $content.querySelector<HTMLElement>("." + countClassName);
    if (!$count) {
      $count = document.createElement("span");
      $count.classList.add(countClassName);
      $content.appendChild($count);
    }
    // 获取重复显示内容的实例数量
    const repeatNum = this.repeatNum;
    QmsgUtils.setSafeHTML($count, repeatNum.toString());
    QmsgAnimation.setStyleAnimationName($count);
    QmsgAnimation.setStyleAnimationName($count, "MessageShake");
    this.resetAutoCloseTimer();
  }
  /**
   * 清除旧的自动关闭定时器
   */
  clearAutoCloseTimer() {
    // 重置定时器
    QmsgUtils.clearTimeout(this.timeId);
    this.timeId = void 0;
    this.startTime = null;
    this.endTime = null;
  }
  /**
   * 开始自动关闭定时器
   */
  startAutoCloseTimer() {
    if (this.setting.autoClose && this.setting.listenEventToPauseAutoClose) {
      this.startTime = Date.now();
      this.endTime = null;
      this.timeId = QmsgUtils.setTimeout(() => {
        this.close();
      }, this.setting.timeout);
    }
  }
  /**
   * 重置自动关闭定时器（会自动清理旧的定时器）
   */
  resetAutoCloseTimer() {
    this.clearAutoCloseTimer();
    this.startAutoCloseTimer();
  }
  /**
   * 关闭Qmsg（会触发动画）
   */
  close() {
    this.setState(this.$el.$item, "closing");
    if (QmsgAnimation.CAN_ANIMATION) {
      // 支持动画
      QmsgInstStorage.remove(this.uuid);
    } else {
      // 不支持动画
      this.destroy();
    }
    const onCloseCallBack = this.setting.onClose;
    if (onCloseCallBack && typeof onCloseCallBack === "function") {
      onCloseCallBack.call(this);
    }
  }
  /**
   * 销毁Qmsg
   */
  destroy() {
    this.endTime = Date.now();
    this.$el.$item.remove();
    QmsgUtils.clearTimeout(this.timeId);
    QmsgInstStorage.remove(this.uuid);
    this.timeId = void 0;
  }
  /**
   * 设置内容文本
   * @param text 字符串
   */
  setText(text: string) {
    const $content = this.$el.$content;
    $content.innerText = text;
    this.setting.content = text;
  }
  /**
   * 设置内容超文本
   * @param text 字符串
   */
  setHTML(text: string) {
    const $content = this.$el.$content;
    QmsgUtils.setSafeHTML($content, text);
    this.setting.content = text;
  }
}
