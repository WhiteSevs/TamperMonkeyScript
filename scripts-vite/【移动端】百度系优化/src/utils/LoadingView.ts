import { utils } from "@/env";

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
      className: "whitesev-load-view",
      textClassName: "whitesev-load-view-text",
      iconClassName: "whitesev-load-view-icon",
      outSideClassName: "whitesev-load-view-icon-outside",
      withInClassName: "whitesev-load-view-icon-within",
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
    this.initCSS();
    this.initLoadingView(withIcon, isEnd);
  }
  /**
   * 加载需要的CSS
   */
  initCSS() {
    if (this.isExistsCSS()) {
      return;
    }
    let loadingViewCSSText = /*css*/ `
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
    utils.addStyle(loadingViewCSSText);
  }
  /**
   * 初始化loadingView元素
   * @param withIcon 是否添加icon
   * @param isEnd icon是否添加在后面
   */
  initLoadingView(withIcon: boolean = false, isEnd: boolean = true) {
    this.setLoadingViewElement();
    let divElement = document.createElement("div");
    divElement.innerHTML = this.loadingViewHTML;
    let resultElement = divElement.firstChild as HTMLDivElement;
    if (withIcon) {
      let iconElement = document.createElement("div");
      iconElement.innerHTML = this.loadingViewIconHTML;
      if (isEnd) {
        resultElement.appendChild(iconElement.firstChild as HTMLDivElement);
      } else {
        resultElement.insertBefore(iconElement.firstChild as HTMLDivElement, resultElement.firstChild);
      }
    }
    this.setLoadingViewElement(resultElement);
    return resultElement;
  }
  /**
   * 设置LoadingView
   * @param element
   */
  setLoadingViewElement(element?: HTMLDivElement) {
    this.loadingViewElement = element;
  }
  /**
   * 获取LoadingView
   */
  getLoadingViewElement() {
    if (!this.loadingViewElement) {
      throw new Error("object loadingViewElement is null");
    }
    return this.loadingViewElement;
  }
  /**
   * 获取实例化的loadingView的icon
   */
  getIconElement() {
    return this.getLoadingViewElement().querySelector("." + this.config.iconClassName) as HTMLElement | null;
  }
  /**
   * 显示LoadingView
   */
  show() {
    this.getLoadingViewElement().style.display = "";
  }
  /**
   * 隐藏LoadingView
   */
  hide() {
    this.getLoadingViewElement().style.display = "none";
  }
  /**
   * 显示icon
   */
  showIcon() {
    let iconElement = this.getIconElement();
    iconElement && (iconElement.style.display = "");
  }
  /**
   * 隐藏icon
   */
  hideIcon() {
    let iconElement = this.getIconElement();
    iconElement && (iconElement.style.display = "none");
  }
  /**
   * 设置文本
   * @param text 文本
   * @param withIcon 是否设置Icon图标
   * @param isEnd icon是否添加在后面
   */
  setText(text: string, withIcon: boolean = false, isEnd: boolean = true) {
    this.getLoadingViewElement().innerHTML = `<span>${text}</span>`;
    if (withIcon) {
      let iconElement = this.getIconElement();
      if (!iconElement) {
        let divElement = document.createElement("div");
        divElement.innerHTML = this.loadingViewIconHTML;
        iconElement = divElement.firstChild as HTMLDivElement;
        if (isEnd) {
          this.getLoadingViewElement().appendChild(iconElement);
        } else {
          this.getLoadingViewElement().insertBefore(iconElement, this.getLoadingViewElement().firstChild);
        }
      }
      iconElement.style.display = "";
    } else {
      this.getIconElement()?.remove();
    }
  }
  /**
   * 设置超文本
   * @param text 文本
   */
  setHTML(text: string) {
    this.getLoadingViewElement().innerHTML = text;
  }
  /**
   * 删除Loading元素
   */
  destory() {
    this.getLoadingViewElement()?.remove();
    this.setLoadingViewElement();
  }
  /**
   * 删除页面中所有的loadingView
   */
  removeAll() {
    document.querySelectorAll("." + this.config.className).forEach((item) => item.remove());
  }
  /**
   * 判断Loading是否已加载到页面中
   */
  isExists() {
    return Boolean(document.querySelector(`.${this.config.className}`));
  }
  /**
   * 判断Loading是否存在Loading图标
   */
  isExistsIcon() {
    return Boolean(this.getIconElement());
  }
  /**
   * 判断Loading中的文本是否存在
   */
  isExistsText() {
    return Boolean(this.getLoadingViewElement().querySelector(`.${this.config.textClassName}`));
  }
  /**
   * 判断页面中是否存在CSS的style
   */
  isExistsCSS() {
    return Boolean(document.querySelector("style[data-from='loadingView'][type='text/css'][data-author='whitesev']"));
  }
}

export { LoadingView };
