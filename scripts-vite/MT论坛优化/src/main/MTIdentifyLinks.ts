import { DOMUtils, utils } from "@/env";

/**
 * 链接文本转超链接
 */
export const MTIdentifyLinks = () => {
  /*TEXT link to Clickable Hyperlink*/
  const HANDLER_CLASS_NAME = "texttolink";
  /**
   * URL匹配正则表达式
   */
  const url_regexp =
    /((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi;

  /**
   * 处理链接点击事件，确保链接有正确的协议前缀
   */
  const handleClearLink = function (event: MouseEvent) {
    // @ts-ignore
    let targetElement: HTMLElement | null = event.originalTarget ?? event.target;
    let url: string;
    if (
      null != targetElement &&
      "a" === targetElement.localName &&
      -1 !== targetElement.className.indexOf(HANDLER_CLASS_NAME) &&
      ((url = targetElement.getAttribute("href")!),
      typeof url === "string" &&
        0 !== url.indexOf("http") &&
        0 !== url.indexOf("ed2k://") &&
        0 !== url.indexOf("thunder://"))
    ) {
      return targetElement.setAttribute("href", "http://" + targetElement);
    }
  };

  /**
   * 将文本中的URL转换为可点击的超链接
   */
  const setLink = function (textNode: Node | null) {
    // 增加类型检查避免报错
    if (typeof textNode != "object" || textNode == null) {
      return;
    }

    const textContent = textNode?.textContent;
    const $parent = textNode?.parentNode as ParentNode | null;
    if ($parent == null) {
      return;
    }
    if (
      // @ts-ignore
      -1 === $parent?.className?.indexOf?.(HANDLER_CLASS_NAME) &&
      "#cdata-section" !== textNode.nodeName &&
      typeof textContent === "string"
    ) {
      // 修改后的文本
      const modifiedContent = textContent.replace(
        url_regexp,
        `<a href="$1" target="_blank" class="${HANDLER_CLASS_NAME}">$1</a>`
      );
      // 纯本文和修改后的链接文本长度对比
      // 如果长度一致，则说明没有修改，不需要处理
      // 如果长度不一致，则说明有修改，需要处理替换
      if (textContent.length !== modifiedContent.length) {
        const spanElement = document.createElement("span");
        DOMUtils.html(spanElement, modifiedContent);
        const $url = spanElement.querySelector("a")!;
        const url = $url.href!;
        console.log(`识别: ${url}`);
        const isSpanParent = $parent.nodeName.toLowerCase() === "span";
        if (isSpanParent) {
          return $parent.replaceChild($url, textNode);
        } else {
          return $parent.replaceChild(spanElement, textNode);
        }
      }
    }
  };

  /**
   * 排除不需要处理的标签
   */
  const excludedTags =
    "a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(
      " "
    );

  const xpath = `//text()[not(ancestor::${excludedTags.join(") and not(ancestor::")})]`;
  const filter = new RegExp(`^(${excludedTags.join("|")})$`, "i");

  /**
   * 分批处理链接以避免阻塞UI
   */
  const processLinksInBatches = function (textNodesSnapshot: XPathResult, startIndex: number) {
    let currentIndex, endIndex;
    if (startIndex + 10000 < textNodesSnapshot.snapshotLength) {
      let start = (currentIndex = startIndex);
      for (
        endIndex = startIndex + 10000;
        startIndex <= endIndex ? currentIndex <= endIndex : currentIndex >= endIndex;
        start = startIndex <= endIndex ? ++currentIndex : --currentIndex
      ) {
        setLink(textNodesSnapshot.snapshotItem(start));
      }

      setTimeout(function () {
        return processLinksInBatches(textNodesSnapshot, startIndex + 10000);
      }, 15);
    } else {
      let start;
      for (
        start = currentIndex = startIndex, endIndex = textNodesSnapshot.snapshotLength;
        startIndex <= endIndex ? currentIndex <= endIndex : currentIndex >= endIndex;
        start = startIndex <= endIndex ? ++currentIndex : --currentIndex
      ) {
        setLink(textNodesSnapshot.snapshotItem(start));
      }
    }
  };

  /**
   * 处理指定元素内的文本链接
   */
  const linkifyText = function (element: HTMLElement) {
    const textNodesSnapshot = document.evaluate(xpath, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    return processLinksInBatches(textNodesSnapshot, 0);
  };

  /**
   * 观察页面变化并处理新添加的内容
   */
  const observePageChanges = function (rootElement: Node) {
    for (
      const treeWalker = document.createTreeWalker(rootElement, NodeFilter.SHOW_TEXT, {
        acceptNode: function (node) {
          const localName = (<HTMLElement>node?.parentNode)?.localName;
          if (!filter.test(localName)) {
            return NodeFilter.FILTER_ACCEPT;
          } else {
            return NodeFilter.FILTER_SKIP;
          }
        },
      });
      treeWalker.nextNode();
    ) {
      setLink(treeWalker.currentNode);
    }
  };

  let lockFn = new utils.LockFunction((mutations: MutationRecord[]) => {
    for (const mutation of mutations) {
      if ("childList" === mutation.type) {
        const addedNodes = mutation.addedNodes;
        for (let nodeIndex = 0; nodeIndex < addedNodes.length; nodeIndex++) {
          const node = addedNodes[nodeIndex];
          observePageChanges(node);
        }
      }
    }
  });

  /**
   * 初始化链接处理
   */
  const initLinkProcessing = function () {
    linkifyText(document.body);
    /**
     * 监听DOM变化
     */
    const mutationObserver = utils.mutationObserver(document.body, {
      config: {
        subtree: true,
        childList: true,
      },
      callback: (mutations) => {
        lockFn.run(mutations);
      },
    });
    return mutationObserver;
  };

  /**
   * 清理链接函数
   */
  const clearLinkHelper = function (linkElement: HTMLElement) {
    const url = linkElement.getAttribute("href");
    if (
      typeof url === "string" &&
      0 !== url.indexOf("http") &&
      0 !== url.indexOf("ed2k://") &&
      0 !== url.indexOf("thunder://")
    ) {
      return linkElement.setAttribute("href", "http://" + url);
    }
  };
  /**
   * 清理所有链接
   */
  const clearAllLinks = function () {
    const linkElements = Array.from(document.getElementsByClassName(HANDLER_CLASS_NAME));
    for (const $link of linkElements) {
      clearLinkHelper($link as HTMLElement);
    }
  };

  document.addEventListener("mouseover", handleClearLink);
  setTimeout(clearAllLinks, 1500);
  setTimeout(initLinkProcessing, 100);
};
