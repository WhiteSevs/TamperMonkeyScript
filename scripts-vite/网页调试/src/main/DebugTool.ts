import { console, copy, MenuRegister } from "@/env";
import type { UtilsGMMenuClickCallBackData, UtilsGMMenuOption } from "@whitesev/utils/dist/types/src/types/UtilsGMMenu";
import { Eruda } from "./Eruda/Eruda";
import { vConsole } from "./vConsole/vConsole";
import { PageSpy } from "./PageSpy/PageSpy";
import { Chii } from "./Chii/Chii";
import { Panel } from "@components/setting/panel";
import { GlobalSettingConfig } from "@/setting/config";

export const DebugTool = {
  $data: {
    /** 当前的调试工具是否已执行 */
    isLoadDebugTool: false,
    /** 当前已执行的调试工具名 */
    loadDebugToolName: void 0 as undefined | string,
    /** 当前执行了调试工具的iframe */
    iframeUrlList: [] as string[],
  },
  $ele: {
    /** 隐藏调试工具的style元素 */
    hideDebugToolCSSNode: void 0 as HTMLStyleElement | undefined,
  },
  /**
   * 处理当在iframe内加载时，是否允许执行，如果允许，那么把url添加到菜单中
   */
  handleToolWithIframe() {
    if (Panel.isTopWindow()) {
      return true;
    }
    if (!Panel.getValue(GlobalSettingConfig.allowRunInIframe.key)) {
      return false;
    }
    this.$data.iframeUrlList.push(window.location.href);
    try {
      // @ts-ignore
      top.console.log("iframe信息：" + window.location.href);
    } catch (error) {
      console.error(error);
    }
    MenuRegister.add({
      key: "iframeUrl",
      text: window.location.href,
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        copy(window.location.href, "text");
      },
    });
    return true;
  },
  /**
   * 执行当前的调试工具
   */
  execDebugTool() {
    /* 当前的调试工具，默认为eruda */
    let debugTool = Panel.getValue<string>(GlobalSettingConfig.debugTool.key);
    debugTool = debugTool.toString().toLowerCase();
    console.log(`网页调试：当前使用的调试工具【${debugTool}】`);
    if (debugTool === "vconsole") {
      /* vConsole */
      this.$data.isLoadDebugTool = true;
      this.$data.loadDebugToolName = "vconsole";
      vConsole();
    } else if (debugTool === "pagespy") {
      /* PageSpy */
      this.$data.isLoadDebugTool = true;
      this.$data.loadDebugToolName = "pagespy";
      PageSpy();
    } else if (debugTool === "eruda") {
      /* eruda */
      this.$data.isLoadDebugTool = true;
      this.$data.loadDebugToolName = "eruda";
      Eruda();
    } else if (debugTool === "chii") {
      /* chii */
      this.$data.isLoadDebugTool = true;
      this.$data.loadDebugToolName = "chii";
      Chii();
    } else {
      console.error("当前未配置该调试工具的运行");
    }
  },
  /**
   * 在脚本菜单中添加控制当前的调试工具状态的菜单按钮
   */
  registerDebugToolMenuControls() {
    if (!Panel.isTopWindow()) {
      console.warn("不在iframe内重复添加菜单按钮");
      return;
    }
    let menuData: UtilsGMMenuOption = {
      key: "debug_tool_show_hide_control",
      text: "☯ 加载并显示调试工具",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback: (data) => {
        changeMenu(data);
      },
    };
    /**
     *
     * @param data
     */
    const changeMenu = (data: UtilsGMMenuClickCallBackData) => {
      if (DebugTool.$data.isLoadDebugTool) {
        /* 状态：已加载 */
        if (DebugTool.$ele.hideDebugToolCSSNode) {
          /* 状态：已加载且添加了隐藏CSS */
          /* 进行移除隐藏CSS */
          /* 菜单状态：【隐藏调试工具】 */
          this.showCurrentDebugTool();
          menuData.text = "🌑 隐藏调试工具";
          MenuRegister.update(menuData);
        } else {
          /* 状态：已加载且未添加隐藏CSS */
          /* 进行添加隐藏CSS */
          /* 菜单状态：【显示调试工具】 */
          this.hideCurrentDebugTool();
          menuData.text = "🌕 显示调试工具";
          MenuRegister.update(menuData);
        }
      } else {
        /* 状态：未加载，加载并显示 */
        /* 进行执行调试工具 */
        /* 菜单状态：【隐藏调试工具】 */
        this.showCurrentDebugTool();
        menuData.text = "🌑 隐藏调试工具";
        MenuRegister.update(menuData);
      }
    };
    MenuRegister.add(menuData);
  },
  /**
   * 判断页面中是否已存在隐藏调试工具的CSS元素节点
   * @returns
   */
  isInjectDebugToolHideCSS() {
    return Boolean(
      this.$ele.hideDebugToolCSSNode && document.documentElement.contains(this.$ele.hideDebugToolCSSNode!)
    );
  },
  /**
   * 创建隐藏调试工具的CSS元素
   * @returns
   */
  createDebugToolHideCSS() {
    let $css = document.createElement("style");
    $css.setAttribute("type", "text/css");
    $css.setAttribute("data-from", "hide-debug-tool");
    $css.innerHTML = /*css*/ `
		/* Eruda的按钮 */
        #eruda{
            display: none !important;
        }
		/* vConsole的按钮 */
        #__vconsole{
            display: none !important;
        }
		/* PageSpy的按钮 */
        #__pageSpy{
            display: none !important;
        }
		/* Chii的面板 */
        .__chobitsu-hide__ > iframe,
        .__chobitsu-hide__:has(iframe){
            display: none !important;
        }
        `;
    return $css;
  },
  /**
   * 隐藏当前的调试工具
   */
  hideCurrentDebugTool() {
    if (this.$ele.hideDebugToolCSSNode == null) {
      console.log("未创建隐藏【调试工具】的style元素 => 创建元素");
      this.$ele.hideDebugToolCSSNode = this.createDebugToolHideCSS();
    }
    if (!this.isInjectDebugToolHideCSS()) {
      console.log("页面不存在隐藏【调试工具】的style元素 => 添加元素");
      document.documentElement.appendChild(this.$ele.hideDebugToolCSSNode);
    }
  },
  /**
   * 显示当前的调试工具
   */
  showCurrentDebugTool() {
    if (this.$ele.hideDebugToolCSSNode) {
      console.log("页面存在隐藏【调试工具】的style元素 => 移除元素");
      document.documentElement.removeChild(this.$ele.hideDebugToolCSSNode);
      this.$ele.hideDebugToolCSSNode = void 0;
    }
    if (!this.$data.isLoadDebugTool) {
      console.log("尚未运行【调试工具】 => 运行调试工具");
      this.execDebugTool();
    }
  },
};
