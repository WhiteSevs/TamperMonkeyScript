import { unsafeWindow } from "ViteGM";
import { $, DOMUtils, addStyle, log } from "@/env";
import YiYanShieldCSS from "./shield.css?raw";
import { Panel } from "@components/setting/panel";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

const BaiduYiYan = {
  init() {
    addStyle(YiYanShieldCSS);
    log.info("插入CSS规则");
    Panel.execMenuOnce("baidu_yiyan_remove_ai_mask", () => {
      this.blockWaterMark();
    });
    Panel.execMenu("baidu_yiyan-execByUrlSearchParams", () => {
      this.execByUrlSearchParams();
    });
  },
  /**
   * 通过处理attachShadow和appendChild原型来去除水印
   * 屏蔽 AI生成内容仅供参考
   * 屏蔽 AI作图
   */
  blockWaterMark() {
    log.info("hook: Element.attachShadow");
    let oldShadow = unsafeWindow.Element.prototype.attachShadow;
    unsafeWindow.Element.prototype.attachShadow = function (this: any, ...args: any[]) {
      // @ts-ignore
      const shadowRoot = oldShadow.call(this, ...args);
      this._shadowRoot = shadowRoot;
      shadowRoot.appendChild(DOMUtils.createElement("style", "div[id^='mask']{display: none !important;}"));
      return shadowRoot;
    };
    log.success("hook: Element.appendChild");
    let oldAppendChild = unsafeWindow.Element.prototype.appendChild;
    unsafeWindow.Element.prototype.appendChild = function <T extends Node>(element: T): T {
      if ((element as any).localName === "img") {
        setTimeout(() => {
          document.querySelectorAll<HTMLImageElement>("img").forEach((imageElement) => {
            if (imageElement.src.endsWith("style/wm_ai")) {
              imageElement.src = imageElement.src.replace(/style\/wm_ai$/gi, "");
            }
          });
        }, 150);
      }
      return oldAppendChild.call(this, element) as T;
    };
  },
  /**
   * 提供对外的搜索链接
   *
   * 判断方式为location.search中包含查询关键字gmsearch
   */
  execByUrlSearchParams() {
    let searchParams = new URLSearchParams(window.location.search);
    // 获取查询关键字
    const KEY_searchText = "gmsearch";
    // 是否对查询关键字进行解码
    const KEY_decodeSearchText = "gmdecode";
    if (!searchParams.has(KEY_searchText)) {
      // 不存在搜索文字
      return;
    }
    // 获取查询内容
    let searchText = searchParams.get(KEY_searchText)!;
    // 是否对查询关键字进行解码
    let decodeSearchText = searchParams.get(KEY_decodeSearchText)!;
    if (decodeSearchText) {
      // 解码
      searchText = decodeURIComponent(searchText);
    }
    log.info("存在搜索接口，查询内容：" + searchText);
    // this.$ele.$searchInput.value = searchText;
    let $loading = Qmsg.loading("等待编辑框加载完成...", {
      showClose: true,
    });
    ReactUtils.waitReactPropsToSet("#dialogueFooter", "reactProps", {
      msg: "等待元素#dialogueFooter",
      check(reactInstance) {
        return typeof reactInstance?.children?.props?.setText === "function";
      },
      set(reactInstance) {
        $loading.close();
        let props = reactInstance.children.props;
        // let onChange =
        // 	reactInstance.return.return.return.memoizedProps.onChange;
        // onChange(searchText);
        // let changeInput = props.changeInput;
        // changeInput({ demo: {}, e: searchText });
        let setText: Function = props.setText;
        // send没有用
        // let send: Function = props.send;
        let isLogin: boolean = props.userInfo.isLogin;
        setText(searchText);
        if (!isLogin) {
          log.error("先登录才可以提问");
          Qmsg.error("先登录才可以提问");
          return;
        }
        let current = props.areaRef.current;
        if (current instanceof HTMLElement) {
          ReactUtils.waitReactPropsToSet(current, "reactProps", {
            msg: "等待提问按钮元素",
            check(reactInstance) {
              return typeof reactInstance?.children?.[3]?.props?.onClick === "function";
            },
            set(reactInstance) {
              let onClick: Function = reactInstance.children[3].props.onClick;
              onClick({ type: 10 });
              log.success(`点击提问按钮`);
            },
          });
        }
      },
      failWait(isTimeout) {
        $loading.close();
      },
    });
    ReactUtils.waitReactPropsToSet("#eb_model_footer", "reactProps", {
      msg: "等待元素#eb_model_footer",
      check(reactInstance) {
        return (
          typeof reactInstance?.children?.[2]?.props?.children?.[2]?.props?.children?.[0]?.props?.setText === "function"
        );
      },
      set(reactInstance) {
        $loading.close();
        let props = reactInstance?.children?.[2]?.props?.children?.[2]?.props?.children?.[0]?.props;
        let setText: Function = props.setText;
        let isLogin: boolean = props.userInfo.isLogin;
        setText(searchText);
        if (!isLogin) {
          log.error("先登录才可以提问");
          Qmsg.error("先登录才可以提问");
          return;
        }
        let $sendBtn = $<HTMLSpanElement>(`#eb_model_footer div:has(+footer) span:has(svg[preserveAspectRatio])`);
        if ($sendBtn) {
          $sendBtn.click();
        } else {
          log.error("未找到发送按钮");
        }
      },
      failWait(isTimeout) {
        $loading.close();
      },
    });
  },
};

export { BaiduYiYan };
