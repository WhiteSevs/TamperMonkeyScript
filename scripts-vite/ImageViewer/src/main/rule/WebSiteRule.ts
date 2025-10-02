import { $, $$, DOMUtils, log, utils } from "@/env";
import { WebSiteStorage } from "./WebSiteStorage";
import { WebSiteDefaultRule } from "./default/WebSiteDefaultRule";
import { Panel } from "@components/setting/panel";
import { ImageUtils } from "../utils/ImageUtils";
import { ImageViewer } from "../ImageViewer";

export const WebSiteRule = {
  $data: {
    /**
     * 默认规则
     */
    get defaultRule() {
      return WebSiteDefaultRule();
    },
    /**
     * 本地存储的用户规则
     */
    get userRule() {
      return WebSiteStorage.get<ImageViewerRule[]>("user-rule", []);
    },
    /**
     * 当前筛选出的匹配的规则
     */
    currentRule: [] as ImageViewerRule[],
  },
  /**
   * 执行规则
   */
  execRule() {
    /* 筛选出当前网站的规则 */
    log.info("正在匹配当前网站规则...");
    this.$data.userRule.forEach((rule, index) => {
      if (utils.isNull(rule)) {
        log.error(["改规则不存在匹配Url", [rule, index]]);
        return;
      }
      let urlPattern = new RegExp(rule.url, "gi");
      if (!urlPattern.test(window.location.href)) {
        return;
      }
      this.$data.currentRule.push(rule);
    });

    if (this.$data.currentRule.length === 0 && Panel.getValue("user-rule-default-enable")) {
      /* 没有规则，使用默认规则 */
      this.$data.currentRule.push(this.$data.defaultRule);
    }
    log.success(["当前的看图规则", this.$data.currentRule]);
    this.$data.currentRule.forEach((rule) => {
      if (rule.mode === "handleClickEvent") {
        this.handleClickEvent(rule);
      } else if (rule.mode === "handleElement") {
        this.handleElement(rule);
      } else {
        log.error(["未知模式的规则", rule]);
      }
    });
  },
  /**
   * 处理点击事件
   * @param rule 规则
   */
  handleClickEvent(rule: ImageViewerHandleClickEventRule) {
    /**
     * 设置点击事件
     * @param $el 元素
     */
    function setClickEvent($el: Element | Element[] | Document | undefined) {
      if ($el == null) return;
      DOMUtils.on(
        $el,
        "click",
        rule.selector,
        async (event) => {
          /* 阻止默认事件触发 */
          if (rule.isPreventDefault) {
            DOMUtils.preventEvent(event);
          }
          const targetElement = event.target;
          /* Viewer的图片浏览 */
          if (targetElement instanceof HTMLImageElement && targetElement.closest(".viewer-container")) {
            return;
          }
          /* 图片列表 */
          let imageList: string[] = [];
          /* 图片列表下标 */
          let imageIndex = 0;
          if (typeof rule.clickEvent === "string") {
            const asyncUserClickEvent = function (event: MouseEvent | PointerEvent) {
              return new Promise<ImageViewerHandleClickEventRuleResult>((resolve, reject) => {
                let userClickEvent = new Function("event", "resolve", "reject", rule.clickEvent!).bind({
                  ImageUtils: ImageUtils,
                  utils: utils,
                  DOMUtils: DOMUtils,
                });
                userClickEvent(event, resolve, reject);
              });
            };
            let result = await asyncUserClickEvent(event);
            if (!Boolean(result.isView)) {
              return;
            }
            if (Array.isArray(result.imageList)) {
              /* 覆盖当前的图片列表 */
              imageList = result.imageList;
            }
            if (typeof result.imageIndex === "number") {
              imageIndex = result.imageIndex;
              if (imageIndex < 0 || imageIndex >= imageList.length) {
                /* 下标不在范围内，重置为0 */
                imageIndex = 0;
              }
            }
          }
          ImageViewer.viewIMG(imageList, imageIndex);
        },
        {
          capture: true,
        }
      );
    }
    if (typeof rule.context === "string") {
      DOMUtils.waitNode(rule.context).then((contextElement) => {
        if (rule.useSelector === "querySelector") {
          setClickEvent($(rule.context));
        } else {
          setClickEvent($$(rule.context));
        }
      });
    } else {
      setClickEvent(document);
    }
  },
  /**
   * 处理元素
   * @param rule 规则
   */
  handleElement(rule: ImageViewerHandleElementRule) {},
};
