import { DOMUtils } from "@/env";

class LoadingView {
  config: {
    className: string;
    textClassName: string;
    iconClassName: string;
    outSideClassName: string;
    withInClassName: string;
  };
  loadingViewElement?: HTMLDivElement;
  loadingViewHTML: string;
  loadingViewIconHTML: string;
  /**
   *
   * @param withIcon 是否添加icon
   * @param isEnd icon是否添加在后面
   */
  constructor(withIcon?: boolean, isEnd?: boolean) {
    this.config = {
      className: "gm-load-view",
      textClassName: "gm-load-view-text",
      iconClassName: "gm-load-view-icon",
      outSideClassName: "gm-load-view-icon-outside",
      withInClassName: "gm-load-view-icon-within",
    };
    this.loadingViewElement = void 0;
    this.loadingViewHTML = /*html*/ `
        <div class="${this.config.className}">
          <span class="${this.config.textClassName}">Loading...</span>
        </div>`.trim();
    this.loadingViewIconHTML = /*html*/ `
        <div class="${this.config.iconClassName}">
          <div class="${this.config.outSideClassName}"></div>
          <div class="${this.config.withInClassName}"></div>
        </div>`.trim();
    this.addStyle();
    this.initLoadingView(withIcon, isEnd);
  }
  /**
   * 加载需要的CSS
   */
  addStyle() {
    if (this.isExistsCSS()) {
      return;
    }
    const cssText = /*css*/ `
      .${this.config.className}{
        margin: 0.08rem;
        background: #fff;
        font-size: 15px;
        text-align: center;
        width: inherit;
        border-radius: 0.12rem;
      }
      .${this.config.iconClassName}{
        width: 45px;
      }
      .${this.config.className},
      .${this.config.iconClassName}{
        height: 45px;
        line-height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .${this.config.outSideClassName},
      .${this.config.withInClassName}{
        position: absolute;
        margin-left: 140px;
        border: 5px solid rgba(0, 183, 229, 0.9);
        opacity: .9;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        margin: 0 auto;
      }
      .${this.config.outSideClassName}{
        background-color: rgba(0, 0, 0, 0);
        border-right: 5px solid rgba(0, 0, 0, 0);
        border-left: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 35px #2187e7;
        -moz-animation: spinPulse 1s infinite ease-in-out;
        -webkit-animation: spinPulse 1s infinite ease-in-out;
        -o-animation: spinPulse 1s infinite ease-in-out;
        -ms-animation: spinPulse 1s infinite ease-in-out;
      }
      .${this.config.withInClassName}{
        background: rgba(0, 0, 0, 0) no-repeat center center;
        border-top: 5px solid rgba(0, 0, 0, 0);
        border-bottom: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 15px #2187e7;
        -moz-animation: spinoffPulse 3s infinite linear;
        -webkit-animation: spinoffPulse 3s infinite linear;
        -o-animation: spinoffPulse 3s infinite linear;
        -ms-animation: spinoffPulse 3s infinite linear;
      }
      @-moz-keyframes spinPulse{0%{-moz-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-moz-transform:rotate(145deg);opacity:1}
      100%{-moz-transform:rotate(-320deg);opacity:0}
      }
      @-moz-keyframes spinoffPulse{0%{-moz-transform:rotate(0)}
      100%{-moz-transform:rotate(360deg)}
      }
      @-webkit-keyframes spinPulse{0%{-webkit-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-webkit-transform:rotate(145deg);opacity:1}
      100%{-webkit-transform:rotate(-320deg);opacity:0}
      }
      @-webkit-keyframes spinoffPulse{0%{-webkit-transform:rotate(0)}
      100%{-webkit-transform:rotate(360deg)}
      }
      @-o-keyframes spinPulse{0%{-o-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-o-transform:rotate(145deg);opacity:1}
      100%{-o-transform:rotate(-320deg);opacity:0}
      }
      @-o-keyframes spinoffPulse{0%{-o-transform:rotate(0)}
      100%{-o-transform:rotate(360deg)}
      }
      @-ms-keyframes spinPulse{0%{-ms-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-ms-transform:rotate(145deg);opacity:1}
      100%{-ms-transform:rotate(-320deg);opacity:0}
      }
      @-ms-keyframes spinoffPulse{0%{-ms-transform:rotate(0)}
      100%{-ms-transform:rotate(360deg)}
      }
      `;
    const $style = DOMUtils.addStyle(cssText);
    $style.setAttribute("data-from", "loadingView");
    $style.setAttribute("type", "text/css");
  }
  /**
   * 获取LoadingView元素
   */
  get $el() {
    return this.getLoadingViewElement();
  }
  /**
   * 获取实例化的loadingView的icon元素
   */
  get $icon() {
    return this.getIconElement();
  }
  /**
   * 初始化loadingView元素
   * @param withIcon 是否添加icon
   * @param isEnd icon是否添加在后面
   */
  initLoadingView(withIcon: boolean = false, isEnd: boolean = true) {
    this.setLoadingViewElement();
    const $wrapper = DOMUtils.createElement("div", {
      innerHTML: this.loadingViewHTML,
    });
    const $wrapperFirst = $wrapper.firstChild as HTMLDivElement;
    if (withIcon) {
      const $iconWrapper = DOMUtils.createElement("div", {
        innerHTML: this.loadingViewIconHTML,
      });
      if (isEnd) {
        $wrapperFirst.appendChild($iconWrapper.firstChild as HTMLDivElement);
      } else {
        $wrapperFirst.insertBefore($iconWrapper.firstChild as HTMLDivElement, $wrapperFirst.firstChild);
      }
    }
    this.setLoadingViewElement($wrapperFirst);
    return $wrapperFirst;
  }
  /**
   * 设置LoadingView
   * @param element
   */
  setLoadingViewElement(element?: HTMLDivElement) {
    this.loadingViewElement = element;
  }
  /**
   * 获取LoadingView元素
   */
  getLoadingViewElement() {
    if (!this.loadingViewElement) {
      throw new TypeError("object loadingViewElement is null");
    }
    return this.loadingViewElement;
  }
  /**
   * 获取实例化的loadingView的icon元素
   */
  getIconElement() {
    return this.$el.querySelector("." + this.config.iconClassName) as HTMLElement | null;
  }
  /**
   * 显示LoadingView
   */
  show() {
    DOMUtils.show(this.$el, false);
  }
  /**
   * 隐藏LoadingView
   */
  hide() {
    DOMUtils.hide(this.$el, false);
  }
  /**
   * 显示icon
   */
  showIcon() {
    const $icon = this.$icon;
    if ($icon) {
      DOMUtils.show($icon, false);
    }
  }
  /**
   * 隐藏icon
   */
  hideIcon() {
    const $icon = this.$icon;
    if ($icon) {
      DOMUtils.hide($icon, false);
    }
  }
  /**
   * 设置文本
   * @param text 文本
   * @param withIcon 是否设置Icon图标
   * @param isEnd icon是否添加在后面
   */
  setText(text: string, withIcon: boolean = false, isEnd: boolean = true) {
    DOMUtils.html(this.$el, `<span>${text}</span>`);
    if (withIcon) {
      let $icon = this.$icon;
      if (!$icon) {
        const $wrapper = DOMUtils.createElement("div", {
          innerHTML: this.loadingViewIconHTML,
        });
        $icon = $wrapper.firstChild as HTMLDivElement;
        if (isEnd) {
          this.$el.appendChild($icon);
        } else {
          this.$el.insertBefore($icon, this.$el.firstChild);
        }
      }
      this.showIcon();
    } else {
      this.$icon?.remove();
    }
  }
  /**
   * 设置超文本
   * @param text 文本
   */
  setHTML(text: string) {
    DOMUtils.html(this.$el, text);
  }
  /**
   * 删除Loading元素
   */
  destory() {
    this.$el?.remove();
    this.setLoadingViewElement();
  }
  /**
   * 删除页面中所有的loadingView
   */
  removeAll() {
    document.querySelectorAll("." + this.config.className).forEach(($it) => $it.remove());
  }
  /**
   * 判断Loading是否已加载到页面中
   */
  isExists() {
    return !!document.querySelector(`.${this.config.className}`);
  }
  /**
   * 判断Loading是否存在Loading图标
   */
  isExistsIcon() {
    return !!this.$icon;
  }
  /**
   * 判断Loading中的文本是否存在
   */
  isExistsText() {
    return !!this.$el.querySelector(`.${this.config.textClassName}`);
  }
  /**
   * 判断页面中是否存在CSS的style
   */
  isExistsCSS() {
    return !!document.querySelector("style[data-from='loadingView'][type='text/css']");
  }
}

export { LoadingView };
