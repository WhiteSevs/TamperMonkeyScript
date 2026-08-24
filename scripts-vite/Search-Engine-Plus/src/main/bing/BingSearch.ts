import { log, utils } from "@/env";
import { addBlockCSSWithEnd, addStyleWithEnd } from "@components/env.base";
import { Panel } from "@components/setting/panel";

export const BingSearch = {
  init() {
    Panel.execMenuOnce("bing-search-removeAds", () => {
      return this.removeAds();
    });
    Panel.execMenuOnce("bing-search-removeInputPrediction", () => {
      return this.removeInputPrediction();
    });
    Panel.execMenuOnce("bing-search-bing-search-removeInputHistory", () => {
      return this.removeInputHistory();
    });
    Panel.execMenuOnce("bing-search-bing-search-removeInputHistory-relatedToRecentSearches", () => {
      return this.removeInputHistoryAndRelatedToRecentSearches();
    });
    Panel.execMenuOnce("bing-search-removeRightMoreSearchResult", () => {
      return this.removeRightMoreSearchResult();
    });
    Panel.execMenuOnce("bing-search-removeCopilotSearch", () => {
      return this.removeCopilotSearch();
    });
    Panel.execMenuOnce("bing-search-removeBottomFloatingToolbar", () => {
      return this.removeBottomFloatingToolbar();
    });
    Panel.execMenuOnce("bing-search-removeOtherUserSearch", () => {
      return this.removeOtherUserSearch();
    });
    Panel.execMenuOnce("bing-search-removeTopLeftAreaSwtich", () => {
      return this.removeTopLeftAreaSwtich();
    });
    Panel.execMenuOnce("bing-search-removeTopRightAccountSetting", () => {
      return this.removeTopRightAccountSetting();
    });
    Panel.execMenuOnce("bing-search-removeAboutAnyResultsTip", () => {
      return this.removeAboutAnyResultsTip();
    });
    Panel.execMenuOnce("bing-search-removeBottomPartOfSearchResultTip", () => {
      return this.removeBottomPartOfSearchResultTip();
    });
    Panel.execMenuOnce("bing-search-removeBottomRightCopyright", () => {
      return this.removeBottomRightCopyright();
    });
    Panel.execMenuOnce(["bing-search-showOptimization-enable", "bing-search-showOptimization-mode"], (config) => {
      const [enable, mode] = config.value;
      if (!enable) return;
      if (utils.isNull(mode)) return;
      return this.searchResultShowOptimization(mode);
    });
    Panel.execMenuOnce(
      [
        "bing-search-ownBackgroundImage-enable",
        "bing-search-ownBackgroundImage-url",
        "bing-search-ownBackgroundImage-opacity",
      ],
      (config) => {
        const [enable, url, opacity] = config.value;
        if (!enable) return;
        if (utils.isNull(url)) return;
        if (!opacity) return;
        return this.ownBackgroundImage({
          enable,
          url,
          opacity,
        });
      }
    );
  },
  /**
   * 移除广告
   */
  removeAds() {
    return addBlockCSSWithEnd(
      // 使用微软积分商城扩展，即可通过搜索操作获得礼品卡。
      "#b_bnp_bopc",
      // 顶部推广广告
      "#b_topw:has(.b_ad)",
      "#b_results .b_ad",
      // 网页结果广告
      "#b_results .b_algo:has(.jrwmcyhr)",
      // 扫描二维码下载微软必应app，立即开始搜索并赚取积分奖励！
      ".b_vfly_c",
      // 搜索结果 - Microsoft推广  分享微软积分商城，即可在每次好友使用必应搜索时赚取 1 个积分!
      "#b_results .b_mop:has(.b_mrwu_c)"
    );
  },
  /**
   * 移除输入预测
   */
  removeInputPrediction() {
    log.info(`移除输入预测`);
    return addStyleWithEnd(/*css*/ `
    #b_header{
      & #sa_ul ~ * {
          display: none !important;
      }

      & #sa_ul {
          width: 100% !important;
      }

      & #sb_form {
          max-width: 600px;
          white-space: nowrap;
          & input.b_searchbox {
              width: 500px;
          }
      }
    }
    `);
  },
  /**
   * 移除输入历史记录
   */
  removeInputHistory() {
    log.info(`移除输入历史记录`);
    return addBlockCSSWithEnd("#b_header #sa_ul #sa_hs_block");
  },
  /**
   * 移除输入历史记录 - 与最近的搜索相关
   */
  removeInputHistoryAndRelatedToRecentSearches() {
    log.info(`移除输入历史记录 - 与最近的搜索相关`);
    return addBlockCSSWithEnd("#b_header #sa_ul #sa_sse_block");
  },
  /**
   * 移除右侧更多搜索结果
   */
  removeRightMoreSearchResult() {
    log.info(`移除右侧更多搜索结果`);
    return addBlockCSSWithEnd("#b_content aside");
  },
  /**
   * 移除Copilot Search
   */
  removeCopilotSearch() {
    log.info(`移除Copilot Search`);
    return addBlockCSSWithEnd(
      "#b_content .b_ans:has(.cht_container)",
      '#b_content .b_ans:has(.answer_container[aria-label*="Copilot 搜索"])'
    );
  },
  /**
   * 移除底部悬浮的工具栏
   */
  removeBottomFloatingToolbar() {
    log.info(`移除底部悬浮的工具栏`);
    return addBlockCSSWithEnd("#b_bop_cs_sb_place");
  },
  /**
   * 移除其它用户还搜索过/其他用户还问了以下问题
   */
  removeOtherUserSearch() {
    log.info(`移除其它用户还搜索过/其他用户还问了以下问题`);
    return addBlockCSSWithEnd(
      '#b_results .b_ans:has(a[aria-label*="还搜索"])',
      '#b_results .b_algo:has(a[aria-label*="还搜索"])',
      "#b_results .b_ans:has(#df_listaa)"
    );
  },
  /**
   * 移除左上角 国内版/国际版
   */
  removeTopLeftAreaSwtich() {
    log.info(`移除左上角 国内版/国际版`);
    return addBlockCSSWithEnd("#est_switch");
  },
  /**
   * 移除右上角 帐户奖励和偏好设置
   */
  removeTopRightAccountSetting() {
    log.info(`移除右上角 帐户奖励和偏好设置`);
    return addBlockCSSWithEnd("#id_h");
  },
  /**
   * 移除约xxx个结果
   */
  removeAboutAnyResultsTip() {
    log.info(`移除约xxx个结果`);
    return addBlockCSSWithEnd("#b_tween");
  },
  /**
   * 移除底部 部分搜索结果未予显示
   */
  removeBottomPartOfSearchResultTip() {
    log.info(`移除底部 部分搜索结果未予显示`);
    return addBlockCSSWithEnd('#b_results li.b_msg:has(a[href*="microsoft.com/fwlink"])');
  },
  /**
   * 移除底部右下角 备案信息
   */
  removeBottomRightCopyright() {
    log.info(`移除底部右下角 备案信息`);
    return addBlockCSSWithEnd("#b_footer");
  },
  /**
   * 搜索结果显示优化
   */
  searchResultShowOptimization(mode: SearchResultShowType) {
    const result: any[] = [
      // 顶部head样式
      addBlockCSSWithEnd(/*css*/ `
        header#b_header[style*="top"][role="banner"]{
            background-color: rgba(248, 248, 248, 0.4) !important;
            border-bottom: none !important;
            backdrop-filter: blur(10px);
        }
      `),
    ];

    const centerCSS = /*css*/ `
      #b_header {
          /* 输入框居中 */
          & #sb_form {
              display: block;
              justify-self: center;
              position: relative;


              /* 仅让输入框居中，左边的logo图标在里面会造成视觉上的不居中 */
              /* 这时候需要让logo移出文档流 */
              & .b_logoArea{
                left: 0;
                position: absolute;
                transform: translateX(-64px);
                margin-left: 0;
                margin-right: 0;
                vertical-align: unset;
                margin-top: 0px;
                place-self: center;
              }
          }

          /* 搜索结果类型居中 */
          & nav.b_scopebar {
              margin: 11px;
              justify-self: center;
          }
      }

      #b_content {
          padding: 0;

          /* 顶部某个网站的快捷功能 */
          & #b_pole{
            justify-items: center;
          }
          /* 约 xxx个结果 居中 */
          & #b_tween {
              text-align: center;
              padding: 0;
              margin: 10px;
          }
          /* 搜索结果居中 */
          & #b_results,
          & #b_mcw {
              display: block;
              justify-self: center;
              max-width: 1400px;
              width: auto;
              margin: 32px 0px 0px 0px !important;
          }
          /* 未登录的情况下 b_results会在 b_widemop_layout内，而b_widemop_layout会被设置为grid*/
          & .b_widemop_layout:has(#b_results){
            display: block !important;
          }
      }
    `;

    const resultCardCSS = /*css*/ `
      #b_results,
      #b_mcw {
        & .b_ans,
        & .b_algo,
        & .b_ans.b_vidAns {
            padding: 15px 20px;
            margin-top: 0;
            margin-left: 0;
            margin-bottom: 30px;
            border-radius: 8px;
            background-color: #fff;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        & .b_ans,
        & .b_algo {
          & .b_vlist2col{
            justify-content: space-between;
          }
        }
        /* xxx的视频 */
        & .b_ans.b_vidAns:has(#serpvidans),
        /* xxx的图片 */
        & .b_ans.b_imgansacf{
            padding: 15px 20px !important;
        }
        /* 页码 */
        & .b_pag{
            justify-self: center;
        }
      }
      /* 顶部的特殊搜索结果卡片宽度溢出适配 */
      #b_mcw #b_wpt_container{
        width: 100% !important;
      }
    `;

    const moreColumnCSS = /*css*/ `
      #b_content {
          & #b_results{
            display: grid;
            grid-template-columns: repeat(2, 48%);
            grid-gap: 0 20px;
            grid-template-areas: "xmain xmain";
            margin: 0 auto;
            position: relative;
            padding-left: 2%;
            float: unset;
            width: 90%;
            max-width: 1400px;
            margin-bottom: 30px;
          }
      }     
    `;
    result.push(addStyleWithEnd(resultCardCSS), addStyleWithEnd(centerCSS));
    if (mode === "single-center") {
      // 单列居中
    } else if (mode === "double-column-center") {
      // 双列居中
      result.push(addStyleWithEnd(moreColumnCSS));
    } else if (mode === "three-column-center") {
      // 三列居中
      result.push(
        addStyleWithEnd(moreColumnCSS),
        addBlockCSSWithEnd(/*css*/ `
        #b_content {
          & #b_results{
            grid-template-columns: repeat(3, 33.3%);
            grid-template-areas: "xmain xmain xmain";
          }
        }
      `)
      );
    } else if (mode === "four-column-center") {
      // 四列居中
      result.push(
        addStyleWithEnd(moreColumnCSS),
        addBlockCSSWithEnd(/*css*/ `
        #b_content {
          & #b_results{
            grid-template-columns: repeat(4, 25%);
            grid-template-areas: "xmain xmain xmain xmain";
          }
        }
      `)
      );
    }

    return result;
  },
  /**
   * 自定义背景图
   */
  ownBackgroundImage: (config: { enable: boolean; url: string; opacity: number }) => {
    log.info(`自定义背景图`);
    return addStyleWithEnd(/*css*/ `
      body:before {
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        background-image: url("${config.url.trim()}");
        background-size: 100% auto;
        opacity: ${config.opacity ?? 0.8};
      }
      #b_content{
        background: transparent;
      }
    `);
  },
};
