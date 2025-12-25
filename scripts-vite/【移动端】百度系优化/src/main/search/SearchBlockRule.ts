import { addStyle, DOMUtils, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { PanelUISize } from "@components/setting/panel-ui-size";
import Qmsg from "qmsg";
import { BaiduHandleResultItem } from "./SearchHandleResultItem";

type BaiDuSearchRuleMode = "match-href" | "match-attr" | "contains-child" | "remove-child";
interface BaiDuSearchRuleDetail {
  mode: BaiDuSearchRuleMode;
  matchText?: string | RegExp;
  attr?: string;
}
interface BaiduSearchRuleConfig extends BaiDuSearchRuleDetail {
  moreRule?: BaiDuSearchRuleDetail[];
}

/** 百度搜索自定义拦截规则 */
export const BaiduSearchBlockRule = {
  defaultRule: `
// 百度健康
// match-href##expert.baidu.com
match-attr##srcid##med_wz
// 百度健康病案库
match-attr##srcid##med_medical_records_san
// 百度健康卖药的
match-attr##srcid##med_disease_drug
// 大家还在搜
match-href##recommend_list.baidu.com&&&&match-attr##tpl##recommend_list
// 大家还在搜:隐藏的(点击后，跳出来的)
remove-child##.c-atom-afterclick-recomm-wrap
// 百家号聚合
match-href##author.baidu.com/home/
// xxx 相关 xxx
match-attr##srcid##(sigma|vid_fourfold)
// 问一问
match-attr##data-log##wenda_inquiry
// 百度游戏
match-attr##srcid##yx_entity_san
// 大家还在看
match-attr##srcid##yl_recommend_list
// 百度-智能小程序
match-attr##srcid##xcx_multi
// 百度 xx精选商品问答
match-attr##srcid##b2b_wenda_wise
// 百度爱采购
match-attr##srcid##b2b_straight_wise_vertical
// ↓会误杀有些情况下是百度知道的回答链接
// match-attr##srcid##lego_tpl
match-href##^http(s|)://b2b.baidu.com
// 百度优选
match-attr##srcid##sp_purc_san
// 全网热卖
match-attr##srcid##sp_purc_atom
// 百度本地生活
match-attr##srcid##jy_bdb_in_store_service_2nd
// AI智能体推广
match-attr##srcid##ai_agent_distribute
// AI智能体 智能回复
match-attr##srcid##ai_agent_qa_recommend
// AI智能体 超多相关角色-等你来聊 
match-attr##srcid##yl_actor_agent
// 百度游戏中心
match-attr##srcid##yx_entity_pc_san


// 搜索聚合
// match-attr##srcid##note_lead
// 资讯
// match-attr##srcid##realtime
// 百度有驾
// match-attr##srcid##(car_kg2_san|car_view_point_san)
// 动态(微博、百度动态...等)
// match-attr##srcid##rel_ugc_san
`,
  /**
   * 搜索规则
   */
  rule: [] as BaiduSearchRuleConfig[],
  init() {
    this.initRule();
    Panel.execMenuOnce("baidu-search-add-filter-button", () => {
      const $css = addStyle(/*css*/ `
        .gm-search-filter-wrapper{
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .sc-feedback:has(.gm-search-filter-wrapper){
          justify-content: center;
          gap: 6px;
        }
      `);
      const lockFn = new utils.LockFunction(() => {
        BaiduHandleResultItem.$el.$resultList.forEach(($result) => {
          const url = BaiduHandleResultItem.getSearchArticleOriginal_link($result);
          if (Panel.getValue("baidu-search-filter-enable") && BaiduSearchBlockRule.checkFilter($result, url)) {
            log.info("触发自定义规则，屏蔽该搜索结果，url：", url);
            $result.remove();
            return;
          }
          // 添加过滤按钮
          BaiduSearchBlockRule.addFilterButton($result);
        });
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        $css,
        () => {
          observer.disconnect();
        },
        () => {
          DOMUtils.remove(".gm-search-filter-wrapper");
        },
      ];
    });
  },
  /** 获取本地存储的自定义拦截规则 */
  getLocalRule() {
    let localRule = Panel.getValue("baidu-search-interception-rules", "");
    localRule = localRule.trim();
    return localRule;
  },
  /** 设置本地存储的自定义拦截规则 */
  setLocalRule(rule: string) {
    Panel.setValue("baidu-search-interception-rules", rule);
  },
  /** 清空规则 */
  clearLocalRule() {
    Panel.deleteValue("baidu-search-interception-rules");
  },
  /**
   * 追加规则
   */
  addRule(rule: string) {
    let localRule = this.getLocalRule();
    localRule += "\n" + rule.trim();
    this.setLocalRule(localRule);
  },
  /**
   * 初始化转换后的规则
   */
  initRule() {
    let localRule = this.getLocalRule();
    if (Panel.getValue("baidu-search-blockNoteLead")) {
      this.defaultRule += "\n" + "match-attr##srcid##note_lead";
    }
    if (Panel.getValue("baidu-search-enable-default-interception-rules")) {
      localRule = this.defaultRule + "\n\n" + localRule;
    }
    if (Array.isArray(this.rule) && this.rule.length) {
      this.rule.length = 0;
    } else {
      this.rule = [];
    }
    this.rule = this.parseRule(localRule);
  },
  /**
   * 把规则进行转换
   * @param localRule
   */
  parseRule(localRule: string) {
    let result: BaiduSearchRuleConfig[] = [];
    function parseOneRule(ruleItem: string) {
      let cRuleItemSplit = ruleItem.split("##");
      if (!cRuleItemSplit.length) {
        log.error("无效规则", ruleItem);
        return;
      }
      let ruleName = cRuleItemSplit[0];
      let ruleNameLowerCase = ruleName.toLowerCase();
      let endRule = ruleItem.replace(ruleName + "##", "");
      if (ruleNameLowerCase === "match-href") {
        return {
          rule: ruleItem,
          mode: ruleNameLowerCase as BaiDuSearchRuleMode,
          matchText: new RegExp(endRule),
        };
      } else if (ruleNameLowerCase === "match-attr") {
        let otherRuleSplit = endRule.split("##");
        if (otherRuleSplit.length === 1) {
          log.error("无效规则", ruleItem);
          return;
        }
        let attrName = otherRuleSplit[0];
        let attrValueMatch = endRule.replace(attrName + "##", "");
        return {
          rule: ruleItem,
          mode: ruleNameLowerCase as BaiDuSearchRuleMode,
          attr: attrName,
          matchText: new RegExp(attrValueMatch),
        };
      } else if (ruleNameLowerCase === "contains-child" || ruleNameLowerCase === "remove-child") {
        return {
          rule: ruleItem,
          mode: ruleNameLowerCase as BaiDuSearchRuleMode,
          matchText: endRule,
        };
      } else {
        log.error("无效规则", ruleItem);
      }
    }

    localRule.split("\n").forEach((ruleItem) => {
      ruleItem = ruleItem.trim();
      if (ruleItem === "") {
        return;
      }
      if (ruleItem.startsWith("//")) {
        return;
      }
      let moreRule = ruleItem.split("&&&&");
      if (moreRule.length === 1) {
        let parsedRule = parseOneRule(ruleItem);
        if (parsedRule) {
          result.push(parsedRule);
        }
      } else {
        let resultRule: BaiduSearchRuleConfig[] = [];
        moreRule.forEach((oneRule) => {
          oneRule = oneRule.trim();
          let parsedRule = parseOneRule(oneRule);
          if (parsedRule) {
            resultRule.push(parsedRule);
          }
        });
        result.push({
          mode: "more-rule" as BaiDuSearchRuleMode,
          moreRule: resultRule,
        });
      }
    });
    return result;
  },
  /**
   * 执行自定义规则，拦截返回true
   * @param $el
   * @param url 真实链接
   */
  checkFilter($el: HTMLElement, url?: string) {
    function handleOneRule(ruleItem: BaiduSearchRuleConfig) {
      if (ruleItem.mode === "match-href") {
        if (typeof url === "string" && url.match(ruleItem.matchText as RegExp)) {
          return true;
        }
      } else if (ruleItem.mode === "match-attr") {
        if (
          $el.hasAttribute(ruleItem.attr as string) &&
          $el.getAttribute(ruleItem.attr as string)?.match(ruleItem.matchText as RegExp)
        ) {
          return true;
        }
      } else if (ruleItem.mode === "contains-child") {
        if ($el.querySelector(ruleItem.matchText as string)) {
          return true;
        }
      } else if (ruleItem.mode === "remove-child") {
        $el.querySelector(ruleItem["matchText"] as string)?.remove();
      }
    }
    for (const ruleItem of this.rule) {
      if (ruleItem.moreRule) {
        for (const oneRule of ruleItem.moreRule) {
          if (handleOneRule(oneRule)) {
            if (import.meta.hot) {
              console.log("自定义规则：", ruleItem);
            }
            return true;
          }
        }
      } else {
        if (handleOneRule(ruleItem)) {
          if (import.meta.hot) {
            console.log("自定义规则：", ruleItem);
          }
          return true;
        }
      }
    }
  },
  /**
   * 创建过滤按钮
   * @param $searchResult 每一个搜索项
   */
  createFilterButton() {
    const $btn = DOMUtils.createElement("div", {
      className: "gm-search-filter-wrapper",
      innerHTML: /*html*/ `
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M512 512m-465.454545 0a465.454545 465.454545 0 1 0 930.90909 0 465.454545 465.454545 0 1 0-930.90909 0Z" fill="#FFF1F0"></path>
          <path d="M512 1000.727273c269.917091 0 488.727273-218.810182 488.727273-488.727273S781.917091 23.272727 512 23.272727 23.272727 242.082909 23.272727 512 242.082909 1000.727273 512 1000.727273z m0-46.545455a442.181818 442.181818 0 1 1 0-884.363636 442.181818 442.181818 0 0 1 0 884.363636z" fill="#FFA39E"></path>
          <path d="M621.940364 338.385455h51.944727c19.083636 0 34.583273 15.546182 34.583273 34.769454v176.407273c12.520727 5.864727 24.203636 13.312 34.676363 22.295273v-198.749091a69.352727 69.352727 0 0 0-69.306182-69.492364H327.493818a69.352727 69.352727 0 0 0-69.259636 69.538909v347.648c0 38.4 30.999273 69.492364 69.259636 69.492364h202.612364a153.181091 153.181091 0 0 1-23.458909-34.769455H327.493818a34.676364 34.676364 0 0 1-34.629818-34.722909v-347.694545c0-19.176727 15.499636-34.722909 34.629818-34.722909h294.446546z" fill="#F5222D"></path>
          <path d="M362.123636 668.578909c0 9.634909 7.726545 17.408 17.314909 17.408h111.709091a153.134545 153.134545 0 0 1 4.514909-34.769454H379.438545a17.314909 17.314909 0 0 0-17.268363 17.361454z m259.770182-191.162182H379.438545a17.314909 17.314909 0 0 0-17.268363 17.408c0 9.588364 7.68 17.361455 17.268363 17.361455h242.501819a17.361455 17.361455 0 0 0 0-34.769455z m-100.072727-77.405091H379.438545a17.314909 17.314909 0 0 0-17.268363 17.408c0 9.588364 7.68 17.361455 17.268363 17.361455h142.382546a17.361455 17.361455 0 0 0 0-34.769455z m-159.650909 181.713455c0 9.588364 7.68 17.361455 17.268363 17.361454h140.427637c9.634909-13.405091 21.410909-25.134545 34.769454-34.769454H379.438545a17.314909 17.314909 0 0 0-17.268363 17.408z m368.360727 22.481454a124.741818 124.741818 0 0 0-172.916364 0 116.782545 116.782545 0 0 0 0 168.261819 124.648727 124.648727 0 0 0 172.916364 0 116.782545 116.782545 0 0 0 0-168.261819z m-24.808727 23.45891c30.021818 29.184 33.698909 74.286545 11.077818 107.426909l-121.483636-118.225455a89.460364 89.460364 0 0 1 110.405818 10.798546z m-123.997091 120.692363a83.688727 83.688727 0 0 1-11.077818-107.473454l121.483636 118.272a89.553455 89.553455 0 0 1-110.405818-10.798546z" fill="#F5222D"></path>
        </svg>
      `,
    });
    return $btn;
  },
  /**
   * 新增过滤按钮
   * @param $searchResult 每一个搜索项
   */
  addFilterButton($searchResult: HTMLElement) {
    if ($searchResult.hasAttribute("data-is-add-search-result-filter-button")) {
      return;
    }
    $searchResult.setAttribute("data-is-add-search-result-filter-button", "true");
    const $filterBtn = this.createFilterButton();

    DOMUtils.on(
      $filterBtn,
      "click",
      (evt) => {
        DOMUtils.preventEvent(evt);
        const url = BaiduHandleResultItem.getSearchArticleOriginal_link($searchResult);
        const ruleList: string[] = [];
        const srcid = $searchResult.getAttribute("srcid");
        let rule_attr_srcid, rule_attr_new_srcid, rule_attr_tpl, rule_href_hostname, rule_href_hostname_pathname;
        if (utils.isNotNull(srcid)) {
          rule_attr_srcid = `match-attr##srcid##${srcid}`;
          ruleList.push(rule_attr_srcid);
        }
        const new_srcid = $searchResult.getAttribute("new_srcid");
        if (utils.isNotNull(new_srcid)) {
          rule_attr_new_srcid = `match-attr##new_srcid##${new_srcid}`;
          ruleList.push(rule_attr_new_srcid);
        }
        const tpl = $searchResult.getAttribute("tpl");
        if (utils.isNotNull(tpl)) {
          rule_attr_tpl = `match-attr##tpl##${tpl}`;
          ruleList.push(rule_attr_tpl);
        }
        if (utils.isNotNull(url)) {
          try {
            const urlInst = new URL(url);
            rule_href_hostname = `match-href##${urlInst.hostname}`;
            rule_href_hostname_pathname = `match-href##${urlInst.hostname}${urlInst.pathname}`;
            ruleList.push(rule_href_hostname);
            ruleList.push(rule_href_hostname_pathname);
            if (utils.isNotNull(srcid)) {
              ruleList.push([rule_attr_srcid, rule_href_hostname].join("&&&&"));
            }
            if (utils.isNotNull(new_srcid)) {
              ruleList.push([rule_attr_new_srcid, rule_href_hostname].join("&&&&"));
            }
            if (utils.isNotNull(tpl)) {
              ruleList.push([rule_attr_tpl, rule_href_hostname].join("&&&&"));
            }
          } catch (error) {
            ruleList.push(`match-href##url##${url}`);
          }
        }
        if (!ruleList.length) {
          Qmsg.error("生成过滤规则失败");
          return;
        }
        const $dialog = pops.confirm({
          title: {
            text: "快捷添加过滤规则",
            position: "center",
          },
          content: {
            text: /*html*/ `
              <div class="quick-add-rule-wrapper">
                ${ruleList
                  .map((it, index) => {
                    return /*html*/ `
                      <div class="quick-add-rule-item" data-list-index="${index}">
                        <code>${it}</code>
                      </div>
                    `;
                  })
                  .join("\n")}
              </div>
            `,
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
            cancel: {
              enable: false,
            },
          },
          mask: {
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.setting.width,
          height: "auto",
          style: /*css*/ `
            .quick-add-rule-wrapper{
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 15px;
              padding: 10px;
            }
            .quick-add-rule-item{
              cursor: pointer;
            }
            .quick-add-rule-item code {
              display: flex;
              flex-wrap: nowrap;
            }
          `,
        });
        DOMUtils.on($dialog.$pops, "click", ".quick-add-rule-item", (evt2, selectorTarget) => {
          DOMUtils.preventEvent(evt);
          const index = Number(selectorTarget.getAttribute("data-list-index")!);
          const rule = ruleList[index];
          if (rule == null) {
            log.error(rule, index);
            Qmsg.error("规则不存在");
            return;
          }
          log.info("添加过滤规则：", rule);
          Qmsg.success("添加成功");
          this.addRule(rule);
          this.initRule();
          BaiduHandleResultItem.removeAds();
          $dialog.close();
        });
      },
      {
        capture: true,
      }
    );
    const setButtonRuleMap: (() => string | void)[] = [
      () => {
        if ($searchResult.getAttribute("srcid") !== "new_baikan_index") return;
        // AI总结
        // 动态的，等待它加载
        DOMUtils.waitNode<HTMLElement>(
          '[data-show="interaction"] [class^="interact-container"]',
          $searchResult,
          10000
        ).then(($interaction) => {
          if (!$interaction) return;
          DOMUtils.append($interaction, $filterBtn);
        });
        return "interaction";
      },
      () => {
        let $feedback =
          $searchResult.querySelector<HTMLElement>(".cosc-feedback") ||
          $searchResult.querySelector<HTMLElement>(".sc-feedback") ||
          $searchResult.querySelector<HTMLElement>("div:has(>.c-gap-left-middle)");
        if (!$feedback) return;
        const srcid = $searchResult.getAttribute("srcid") || "";
        if (["poi_map", "lego_tpl"].includes(srcid)) {
          // 百度地图
          // 爱企查
          const $leftMiddle = $feedback.querySelector<HTMLElement>(".c-gap-left-middle")!;
          if (srcid === "lego_tpl") {
            $feedback = $leftMiddle;
          }
          const lockFn = new utils.LockFunction(() => {
            if ($searchResult.contains($filterBtn)) return;
            if (DOMUtils.prev($feedback!) === $filterBtn) return;
            DOMUtils.before($feedback!, $filterBtn);
          });
          utils.mutationObserver($searchResult, {
            config: {
              subtree: true,
              childList: true,
              attributes: true,
            },
            immediate: true,
            callback: () => {
              lockFn.run();
            },
          });
        } else if ($feedback) {
          const feedbackRect = $feedback.getBoundingClientRect();
          if (!feedbackRect.width || !feedbackRect.height) return;
          // 右下角反馈按钮里面（必须是显示的）
          DOMUtils.prepend($feedback, $filterBtn);
        }
        return "feedback";
      },
      () => {
        const $cardSection = $searchResult.querySelector<HTMLElement>("article.cosc-card section");
        if (!$cardSection) return;
        DOMUtils.append($cardSection, $filterBtn);
        return "cardSection";
      },
      () => {
        const $section = $searchResult.querySelector<HTMLElement>("article section");
        if (!$section) return;
        DOMUtils.append($section, $filterBtn);
        return "section";
      },
    ];
    let attrValue = "";
    for (let index = 0; index < setButtonRuleMap.length; index++) {
      const item = setButtonRuleMap[index];
      const result = item();
      if (typeof result === "string") {
        attrValue = result;
        break;
      }
    }
    if (import.meta.env.DEV && attrValue === "") {
      log.error("未找到用于添加过滤按钮的父元素，无法新增过滤按钮", $searchResult);
    }
    $filterBtn.setAttribute("data-filter-type", attrValue);
    $searchResult.setAttribute("data-is-add-search-result-filter-button", attrValue);
  },
};
