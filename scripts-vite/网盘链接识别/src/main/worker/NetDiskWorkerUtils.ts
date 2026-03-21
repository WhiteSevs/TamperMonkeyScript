import { DOMUtils } from "@/env";

export const NetDiskWorkerUtils = {
  /**
   * 检索目标元素内所有可访问的ShadowRoot的所有节点的信息
   * @param $target 目标元素
   */
  depthQueryShadowRootAllNode($target: HTMLElement | ShadowRoot) {
    const result: {
      /** 所有shadowRoot节点 */
      shadowRoot: ShadowRoot;
      /** 所有shadowRoot内的子节点 */
      childNode: Element[];
    }[] = [];

    /**
     * 查询ShadowRoot信息
     * @param $el
     */
    function queryShadowRoot($el: Element | ShadowRoot) {
      const $queryChildNodeList = Array.from($el.querySelectorAll("*"));
      for (let index = 0; index < $queryChildNodeList.length; index++) {
        const $childNode = $queryChildNodeList[index];
        if ($childNode.classList && $childNode.classList.contains("pops-shadow-container")) {
          // 忽略pops库的ShadowRoot
          continue;
        }
        const $childNodeShadowRoot = $childNode.shadowRoot;
        if ($childNodeShadowRoot && $childNodeShadowRoot instanceof ShadowRoot) {
          // 存在ShadowRoot
          // 添加ShadowRoot节点和子节点信息
          result.push({
            shadowRoot: $childNodeShadowRoot,
            childNode: queryShadowRoot($childNodeShadowRoot),
          });
        }
      }

      return $queryChildNodeList;
    }

    queryShadowRoot($target);

    return result;
  },
  /**
   * 删除某些需要忽略的text或html，如：设置、直链弹窗
   * @param text 需要进行处理的字符串
   * @param isHTML 是否是html属性
   */
  ignoreStrRemove(text: string, isHTML: boolean = false): string {
    const ignoreNodeList: HTMLElement[] = [];
    for (let index = 0; index < ignoreNodeList.length; index++) {
      const $ignore = ignoreNodeList[index];
      if ($ignore == null) {
        continue;
      }
      if (isHTML) {
        if ($ignore.innerHTML != null) {
          text = text.replaceAll($ignore.innerHTML, "");
        }
      } else {
        let text = $ignore.innerText || $ignore.textContent;
        if (text != null) {
          text = text.replaceAll(text, "");
        }
      }
    }
    return text;
  },
  /**
   * 获取页面上所有文本
   * @param target 目标元素
   * @param isCheckShadowRoot 是否检索ShadowRoot
   */
  getPageText(target: HTMLElement = document.documentElement, isCheckShadowRoot: boolean): string[] {
    // 先把页面的内容添加进去
    const pageText = target?.textContent || target?.innerText || "";
    let strList: string[] = [pageText];

    if (isCheckShadowRoot) {
      // 检索ShadowRoot
      const queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
      for (let index = 0; index < queryShadowRootAllNodeInfo.length; index++) {
        const queryShadowRootInfo = queryShadowRootAllNodeInfo[index];
        const shadowRootText = queryShadowRootInfo.shadowRoot.textContent;
        if (shadowRootText) {
          strList.push(shadowRootText);
        }
      }
    }
    strList = strList.filter((item) => item !== "");
    return strList;
  },
  /**
   * 获取页面上所有超文本
   * @param target 目标元素
   * @param isCheckShadowRoot 是否检索ShadowRoot
   */
  getPageHTML(target: HTMLElement = document.documentElement, isCheckShadowRoot: boolean): string[] {
    // 先把页面的超文本内容添加进去
    let strList: string[] = [target.innerHTML];

    if (isCheckShadowRoot) {
      // 检索ShadowRoot
      const queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
      // 遍历ShadowRoot并把innerHTML添加进去
      for (let i = 0; i < queryShadowRootAllNodeInfo.length; i++) {
        const queryShadowRootInfo = queryShadowRootAllNodeInfo[i];
        const shadowRootHTML = queryShadowRootInfo.shadowRoot.innerHTML;
        if (shadowRootHTML) {
          strList.push(shadowRootHTML);
        }
      }
    }
    strList = strList.filter((item) => item !== "");
    return strList;
  },
  /**
   * 获取页面上所有input的值
   * @param target 目标元素
   * @param isCheckShadowRoot 是否检索ShadowRoot
   */
  getInputElementValue(target: HTMLElement = document.documentElement, isCheckShadowRoot: boolean): string[] {
    const result: string[] = Array.from(target.querySelectorAll("input")).map(($input) => {
      return $input.value;
    });

    if (isCheckShadowRoot) {
      // 检索ShadowRoot
      const queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
      for (let i = 0; i < queryShadowRootAllNodeInfo.length; i++) {
        const queryShadowRootInfo = queryShadowRootAllNodeInfo[i];
        for (let j = 0; j < queryShadowRootInfo.childNode.length; j++) {
          const $childNode = queryShadowRootInfo.childNode[j];
          if ($childNode instanceof HTMLInputElement && $childNode.value) {
            result.push($childNode.value);
          }
        }
      }
    }
    return result;
  },
  /**
   * 获取页面上所有textarea的值
   * @param target 目标元素
   * @param isCheckShadowRoot 是否检索ShadowRoot
   */
  getTextAreaElementValue(target: HTMLElement = document.documentElement, isCheckShadowRoot: boolean): string[] {
    const result: string[] = Array.from(target.querySelectorAll("textarea")).map(($textarea) => {
      return $textarea.value;
    });

    if (isCheckShadowRoot) {
      // 检索ShadowRoot
      const queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
      for (let i = 0; i < queryShadowRootAllNodeInfo.length; i++) {
        const queryShadowRootInfo = queryShadowRootAllNodeInfo[i];
        // 遍历ShadowRoot并把textContent添加进去
        for (let j = 0; j < queryShadowRootInfo.childNode.length; j++) {
          const $childNode = queryShadowRootInfo.childNode[j];
          if ($childNode instanceof HTMLTextAreaElement && $childNode.value) {
            result.push($childNode.value);
          }
        }
      }
    }
    return result;
  },
  /**
   * 获取光标选中的内容
   *
   * 获取两种：纯文本和超文本
   */
  getSelectContent() {
    let result = {
      text: "",
      html: "",
    };
    let selection = window.getSelection();
    if (selection) {
      result.text = selection.toString();
      let $tempDiv = DOMUtils.createElement("div");
      if (!selection.isCollapsed) {
        // Range 转 DocumentFragment
        const docFragment = selection.getRangeAt(0).cloneContents();
        $tempDiv.appendChild(docFragment);
        result.html = DOMUtils.html($tempDiv);
      }
    }
    return result;
  },
};
