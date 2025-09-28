import { NetDiskGlobalData } from "@/main/data/NetDiskGlobalData";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import { NetDiskLinkClickModeUtils, NetDiskLinkClickMode } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { log } from "@components/base.env";
import { CommonUtil } from "@components/utils/CommonUtil";
import DOMUtils from "@whitesev/domutils";
import type {
  PopsRightClickMenuDataDetails,
  PopsRightClickMenuDetails,
} from "@whitesev/pops/dist/types/src/components/rightClickMenu/types";
import utils from "@whitesev/utils";
import Qmsg from "qmsg";
import {
  NetDiskLinkView,
  type LinkViewRegisterContextMenuShowTextOption,
  type LinkViewItemInfo,
} from "./NetDiskLinkView";
import { NetDiskViewRightClickMenu } from "@/main/view/NetDiskViewRightClickMenu";
import { NetDiskView } from "@/main/view/NetDiskView";

export const NetDiskLinkViewEvent = {
  /**
   * 初始化事件（在创建视图后）
   */
  init() {
    // 右键菜单
    NetDiskViewRightClickMenu.setRightClickMenu(NetDiskView.$el.$linkView.$shadowRoot, ".whitesevPop .netdisk-url a");
    // 网盘图标的点击定位
    this.registerIconGotoPagePosition(NetDiskView.$el.$linkView.$shadowRoot);
    // 点击链接
    this.setNetDiskUrlClickEvent(NetDiskView.$el.$linkView.$shadowRoot, ".netdisk-url a");
    // 链接的右键菜单
    NetDiskViewRightClickMenu.setGlobalRightClickMenu(
      NetDiskView.$el.$linkView.$shadowRoot.querySelector<HTMLElement>(".pops .pops-alert-title > p")!
    );
  },
  /**
   * 设置网盘链接的点击事件
   *
   * 内部执行点击动作
   * @param $el 监听的元素
   * @param childSelector 子元素选择器
   */
  setNetDiskUrlClickEvent($el: HTMLElement | ShadowRoot, childSelector: string) {
    // 点击事件
    DOMUtils.on($el, "click", childSelector, (event) => {
      let $click = event.target as HTMLElement;
      $click.setAttribute("isvisited", "true");

      // 解析数据
      const data = NetDiskLinkView.parseBoxAttrRuleInfo($click);
      // 是否是按下左键
      // 如果是，那么就是新标签页打开
      let ctrlClick = event.ctrlKey;
      if (ctrlClick) {
        this.netDiskUrlClickEvent({
          data: data,
          clickMode: "openBlank",
          $click: $click,
        });
      } else {
        this.netDiskUrlClickEvent({
          data: data,
          $click: $click,
        });
      }
    });
    // 鼠标中键的点击事件
    DOMUtils.on<PointerEvent>($el, "auxclick", childSelector, (event, $click) => {
      if (event.button !== 1) {
        // 1是鼠标中键
        // 2是鼠标右键
        return;
      }
      DOMUtils.preventEvent(event);
      $click.setAttribute("isvisited", "true");
      // 解析数据
      const data = NetDiskLinkView.parseBoxAttrRuleInfo($click);
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName: data.ruleKeyName,
        ruleIndex: data.ruleIndex,
        shareCode: data.shareCode,
        accessCode: data.accessCode,
      });
      NetDiskLinkClickMode.openBlankUrl(url, data.ruleKeyName, data.ruleIndex, data.shareCode, data.accessCode, true);
    });
  },
  /**
   * 网盘链接点击事件
   * @param option
   */
  netDiskUrlClickEvent(option: {
    data: LinkViewItemInfo;
    /** 自定义的点击动作，优先级最高 */
    clickMode?: NetDiskRuleSettingConfigurationInterface_linkClickMode;
    /** 点击的元素 */
    $click?: HTMLElement;
  }) {
    const { ruleKeyName, ruleIndex, shareCode, accessCode } = option.data;
    // 获取对应的点击动作
    let linkClickMode = option.clickMode ?? NetDiskRuleData.function.linkClickMode(option.data.ruleKeyName);
    /** 关闭弹窗 */
    let closePopup = () => {
      if (option.$click) {
        let $pops = option.$click.closest<HTMLElement>(".pops");
        if ($pops) {
          let $close = $pops.querySelector<HTMLElement>('.pops-header-control[type="close"]');
          $close && $close.click();
        }
      }
    };
    if (linkClickMode === "copy" || linkClickMode === "copy-closePopup") {
      // 复制
      NetDiskLinkClickMode.copy(ruleKeyName, ruleIndex, shareCode, accessCode);
      if (linkClickMode === "copy-closePopup") {
        // 关闭弹窗
        closePopup();
      }
    } else if (linkClickMode === "openBlank" || linkClickMode === "openBlank-closePopup") {
      // 新页打开
      let url = NetDiskLinkClickModeUtils.getBlankUrl({
        ruleKeyName,
        ruleIndex,
        shareCode,
        accessCode,
      });
      // 判断scheme转发新标签页链接是否开启
      let isForwardBlankUrl = NetDiskFilterScheme.isForwardBlankLink(ruleKeyName);
      if (isForwardBlankUrl) {
        // 用scheme处理的进行新标签打开
        NetDiskLinkClickMode.openBlankWithScheme(ruleKeyName, ruleIndex, shareCode, accessCode);
      } else {
        // 否则用原链接打开
        NetDiskLinkClickMode.openBlankUrl(url, ruleKeyName, ruleIndex, shareCode, accessCode);
      }
      if (linkClickMode === "openBlank-closePopup") {
        // 关闭弹窗
        closePopup();
      }
    } else if (linkClickMode === "parseFile" || linkClickMode === "parseFile-closePopup") {
      // 文件解析
      NetDiskLinkClickMode.parseFile(ruleKeyName, ruleIndex, shareCode, accessCode).then(() => {
        if (linkClickMode === "parseFile-closePopup") {
          // 关闭弹窗
          closePopup();
        }
      });
    } else {
      log.error("未知点击动作：" + linkClickMode);
      Qmsg.error("未知点击动作：" + linkClickMode);
    }
  },
  /**
   * 注册右键菜单
   * @param target
   * @param selector
   * @param showTextList 右键菜单的内容
   * @param className className属性
   */
  registerContextMenu(
    target: HTMLElement | (Window & typeof globalThis) | ShadowRoot,
    selector?: string,
    showTextList: LinkViewRegisterContextMenuShowTextOption[] = [],
    className: string = "whitesevSuspensionContextMenu"
  ) {
    let data: PopsRightClickMenuDataDetails[] = [];
    showTextList.forEach((item) => {
      data.push({
        text: item.text,
        callback: item.callback,
        icon: item?.icon ?? "",
        iconIsLoading: item?.iconIsLoading ?? false,
        item: item?.item ?? null,
      });
    });
    let detail: PopsRightClickMenuDetails = {
      target: target,
      targetSelector: selector,
      data: data,
      isAnimation: false,
      className: className,
      only: true,
      chileMenuLeftOrRightDistance: -3,
      childMenuTopOrBottomDistance: -5,
    };
    NetDiskPops.rightClickMenu(detail);
  },
  /**
   * 设置点击图标按钮导航至该网盘链接所在网页中位置
   */
  registerIconGotoPagePosition(targetElement: ShadowRoot | Document | HTMLElement) {
    let findGenerator: Generator<HTMLElement | ChildNode, void, any> | undefined = void 0;
    let iterator: IteratorResult<HTMLElement | ChildNode, void> | undefined = void 0;
    /**
     * 上一个的shareCode
     */
    let prevSearchShareCode: string | undefined = void 0;
    DOMUtils.on(targetElement, "click", ".whitesevPop .netdisk-icon .netdisk-icon-img", (event, selectorTarget) => {
      let $click = selectorTarget;
      let dataSharecode = $click.getAttribute("data-sharecode")!;
      if (!NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode"].value) {
        return;
      }
      if (typeof dataSharecode !== "string") {
        Qmsg.error("获取data-sharecode属性失败");
        return;
      }
      if (prevSearchShareCode == void 0) {
        prevSearchShareCode = dataSharecode;
      } else if (prevSearchShareCode !== dataSharecode) {
        /* 切换到另一个shareCode搜索 */
        log.info(`上一个搜索：${prevSearchShareCode}，切换至：${dataSharecode}`);
        findGenerator = void 0;
        iterator = void 0;
        prevSearchShareCode = dataSharecode;
      }
      if (findGenerator == void 0) {
        /* 未找到元素或者已迭代完毕 */
        findGenerator = DOMUtils.findElementsWithText(document.documentElement, dataSharecode);
        iterator = findGenerator.next();
      }
      if (iterator?.value) {
        log.success("定位元素", iterator);
        if (iterator.value.nodeType === Node.ELEMENT_NODE && (<HTMLElement>iterator.value).getClientRects().length) {
          /* 可见 */
          /* 滚动到该元素 */
          (<HTMLElement>iterator.value).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
          if (NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value) {
            /* 开启功能 */
            let elementText = (<HTMLElement>iterator.value).innerText || (<HTMLElement>iterator.value).textContent!;
            let childTextNode: ChildNode | undefined = void 0;
            let startIndex: number | undefined = void 0;
            let endIndex: number | undefined = void 0;
            if (elementText.includes(dataSharecode)) {
              /* 文字包含shareCode */
              let textNodeList = Array.from((<HTMLElement>iterator.value).childNodes).filter(
                (ele) => ele.nodeType === Node.TEXT_NODE
              );
              for (const textNode of textNodeList) {
                if ((textNode as HTMLElement)!.textContent!.includes(dataSharecode)) {
                  childTextNode = textNode;
                  startIndex = textNode!.textContent!.indexOf(dataSharecode);
                  endIndex = startIndex + dataSharecode.length;
                  break;
                }
              }
            }
            try {
              DOMUtils.setElementSelection(iterator.value, childTextNode!, startIndex, endIndex);
            } catch (error) {
              log.error(error);
              DOMUtils.setElementSelection(<HTMLElement>iterator.value);
            }
          }
        } else if (
          iterator.value.nodeType === Node.TEXT_NODE &&
          iterator.value!.parentElement!.getClientRects().length
        ) {
          /* #text元素且可见 */
          if (NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value) {
            let elementText = iterator.value.textContent || iterator.value.nodeValue!;
            let childTextNode = iterator.value;
            let startIndex = elementText.indexOf(dataSharecode);
            let endIndex = startIndex + dataSharecode.length;
            try {
              DOMUtils.setElementSelection(iterator.value, childTextNode, startIndex, endIndex);
            } catch (error) {
              log.error(error);
              DOMUtils.setElementSelection(iterator.value.parentElement!);
            }
            let selection = globalThis.getSelection()!;
            if (selection.rangeCount > 0) {
              let range = selection.getRangeAt(0);
              let rect = range.getBoundingClientRect();
              let scrollYOffset = globalThis.scrollY;
              /* 居中定位 */
              let position = rect.top + scrollYOffset - globalThis.innerHeight / 2;
              globalThis.scrollTo({
                behavior: "smooth",
                top: position,
              });
            } else {
              iterator.value.parentElement!.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }
          } else {
            try {
              let range = new Range();
              range.selectNodeContents(iterator.value);
              let rect = range.getBoundingClientRect();
              let scrollYOffset = globalThis.scrollY;
              /* 居中定位 */
              let position = rect.top + scrollYOffset - globalThis.innerHeight / 2;
              globalThis.scrollTo({
                behavior: "smooth",
                top: position,
              });
            } catch (error) {
              log.error(error);
              iterator.value.parentElement!.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }
          }
        } else {
          log.error("无法定位该元素位置", iterator.value);
          const tagName = (
            iterator.value.nodeName ||
            (<HTMLElement>iterator.value).localName ||
            (<HTMLElement>iterator.value).tagName
          ).toLowerCase();
          Qmsg.error(`无法定位该元素位置，类型：${CommonUtil.escapeHtml("<")}${tagName}${CommonUtil.escapeHtml(">")}`, {
            isHTML: true,
          });
        }
      }

      iterator = findGenerator.next();
      if (iterator.done) {
        /* 循环查找 */
        if (!NetDiskGlobalData.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].value) {
          Qmsg.info("已经定位至最后一个元素了");
          return;
        }
        findGenerator = void 0;
        iterator = void 0;
      }
    });
  },
};
