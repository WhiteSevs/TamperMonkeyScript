import { BilibiliUserApi } from "@/api/BilibiliUserApi";
import { $$, addStyle, DOMUtils, log, pops, utils } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";
import { BilibiliComponentDetectionRule, type BilibiliUserLabelRule } from "./BilibiliComponentDetectionRule";
import { BilibiliUrl } from "@/utils/BilibiliUrl";
import Qmsg from "qmsg";
import { PanelUISize } from "@components/setting/panel-ui-size";

/** 匹配信息 */
type MatchedInfo = {
  rule: BilibiliUserLabelRule;
  /** 匹配的数据信息 */
  matchedInfoList: {
    /** 符合规则的原因 */
    reason: string;
    /** 符合规则的匹配的文本 */
    reasonText: string;
    /** 符合规则的链接 */
    reasonLink: string | null;
    reasonTime: number | null;
  }[];
};

export const BilibiliComponentDetection = {
  $data: {
    /** 查询图标svg */
    searchIcon: /*html*/ `
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `,
  },
  init() {
    BilibiliComponentDetectionRule.init();
    addStyle(/*css*/ `
            .composition-checkable,
			.composition-checked{
                display: inline-flex;
                vertical-align: middle;
            }
			/* 查询按钮 */
			.composition-checkable .composition-badge-control {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: fit-content;
				background: #574AB830;
				border-radius: 8px;
				margin: 0 6px 0 6px;
				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
			}

			.composition-checkable .composition-name-control {
				color: #7367F0;
				padding: 2px 8px;
                font-size: 0.8rem;
                display: flex;
                align-items: center;
                height: 20px;
                line-height: normal;
			}
            
			.composition-checkable .composition-name-control svg {
				vertical-align: middle;
                width: 1em;
                height: 1em;
			}
			/* ↑查询按钮 */

			/* 标签按钮 */
			.composition-checked .composition-badge {
				display: inline-flex;
 				justify-content: center;
 				align-items: center;
				width: fit-content;
 				background: #574AB825;
 				border-radius: 10px;
 				margin: 0 6px 0 6px;
 				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
				font-weight: normal;
				cursor: pointer;
			}

			.composition-checked .composition-name {
				color: #574AB8;
				padding: 2px 8px;
                font-size: 0.8rem;
			}

			.composition-checked .composition-icon {
				color: #574AB8 !important;
				background: transparent !important;
				border-radius: 50% !important;
				width: 1.44rem !important;
				height: 1.44rem !important;
				border: 2px solid #574AB880 !important;
				margin: -6px;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
				font-size: 1rem !important;
			}
			.composition-checked .composition-badge > *:first-child{
				margin-left: 6px;
			}
			.composition-checked .composition-badge > *:last-child{
				margin-right: 6px;
			}
			.composition-checked .composition-badge .composition-icon,
			.composition-checked .composition-badge .composition-name{
				margin: 0;
			}
        `);
    DOMUtils.ready(() => {
      let lockFn = new utils.LockFunction(async () => {
        // 评论区的
        $$(".reply-item:not([data-is-inject-search-label])").forEach(($replyItem) => {
          $replyItem.setAttribute("data-is-inject-search-label", "");
          let $floorTime =
            $replyItem.querySelector<HTMLElement>(".info .floor-time")! ||
            $replyItem.querySelector<HTMLElement>(".content-warp .user-info");
          let { $container, $compositionNameControl } = this.createSearchButton(() => {
            // let vueIns = VueUtils.getVue($replyItem);

            // if (!vueIns) {
            // 	throw new TypeError("获取vue属性失败");
            // }
            // let mid: null | number = vueIns.info.mid;
            // if (mid == null) {
            // 	throw new TypeError("获取mid失败");
            // }
            let $userName = $replyItem.querySelector<HTMLElement>(".user-name[data-user-id]");
            if (!$userName) {
              throw new TypeError("获取用户名元素失败");
            }
            let mid = $userName.getAttribute("data-user-id");
            if (mid == null) {
              throw new TypeError("获取mid失败");
            }
            return mid;
          });
          DOMUtils.after($floorTime, $container);
        });
        // 评论内容里面的@别人的
        [
          ...Array.from($$<HTMLElement>(".reply-item .member-link[data-url]:not([data-is-inject-search-label])")),
          ...Array.from(
            $$<HTMLElement>(".reply-item .jump-link.user[data-user-id]:not([data-is-inject-search-label])")
          ),
          ...Array.from($$<HTMLElement>(".reply-item .sub-user-name[data-user-id]:not([data-is-inject-search-label])")),
        ].forEach(($memberLink) => {
          $memberLink.setAttribute("data-is-inject-search-label", "");
          let { $container: $memberContainer, $compositionNameControl: $memberCompositionNameControl } =
            this.createSearchButton(() => {
              let spaceUrl = $memberLink.getAttribute("href")!;
              let mid = spaceUrl.match(/space.bilibili.com\/([\d]+)/i)?.[1];
              if (mid == null) {
                throw new TypeError("获取mid失败");
              }
              return mid;
            });
          DOMUtils.after($memberLink, $memberContainer);
        });
        // 个人空间的顶部的用户名下面
        $$<HTMLElement>(".m-space-info .base:not([data-is-inject-search-label])").forEach(($base) => {
          $base.setAttribute("data-is-inject-search-label", "");
          let $spaceInfo = $base.closest<HTMLElement>(".m-space-info")!;
          let { $container } = this.createSearchButton(() => {
            let vueIns = VueUtils.getVue($spaceInfo);

            if (!vueIns) {
              throw new TypeError("获取vue属性失败");
            }
            let mid: null | number = vueIns.info.mid;
            if (mid == null) {
              throw new TypeError("获取mid失败");
            }
            return mid;
          });
          DOMUtils.after($base, $container);
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
    });
  },
  /**
   * 查询用户信息
   *
   * 即提取需要判断的信息
   * @param mid
   */
  async queryUserInfo(mid: number | string) {
    let followingPN = 1;
    // 关注的数据
    let allFollowingData: BilibiliUserFollowingInfoType[] = [];
    while (true) {
      log.info(`正在获取用户的关注：${mid} ==> 第${followingPN}页`);
      // 获取关注列表
      let followingData = await BilibiliUserApi.following(mid, followingPN);
      if (!followingData) {
        log.error("获取关注列表失败");
        break;
      }
      if (typeof followingData === "string") {
        log.error("获取关注列表失败，原因：" + followingData);
        break;
      }
      if (!followingData.list.length) {
        // log.info(`获取为空，可能是已经获取到全部数据`);
        break;
      }
      allFollowingData = allFollowingData.concat(followingData.list);
      if (followingData.list.length === followingData.total && followingPN === 1) {
        // 只有一页数据
        // 已获取到的数量是少于等于总数量
        break;
      }
      followingPN++;
      utils.sleep(250);
    }
    let spaceOffset = "";
    let spacePNCount = 1;
    // 空间动态
    let allSpaceContentData: BilibiliUserSpaceInfoType["items"] = [];
    while (true) {
      log.info(`正在获取用户的空间动态：${mid} ==> 偏移：${spaceOffset}`);
      let spaceData = await BilibiliUserApi.space(mid, spaceOffset);
      if (!spaceData) {
        log.error("获取用户空间动态数据失败");
        break;
      }
      if (typeof spaceData === "string") {
        log.error("获取用户空间动态数据失败，原因：" + spaceData);
        break;
      }
      if (spaceOffset === spaceData.offset && spaceOffset != "") {
        // 以防万一偏移没有更新
        break;
      }
      // 更新偏移
      spaceOffset = spaceData.offset;
      allSpaceContentData = allSpaceContentData.concat(spaceData.items);
      if (!spaceData.has_more) {
        // 没有更多数据了
        break;
      }
      spacePNCount++;
      if (spacePNCount > 5) {
        // 最多请求5页数据
        log.info(`最多请求5页空间动态的数据`);
        break;
      }
      utils.sleep(250);
    }

    // 提取获取到的数据
    let result = {
      /** 关注列表信息 */
      following: [] as {
        /** 用户名 */
        name: string;
        /** 用户id */
        mid: number;
        /** 个性签名 */
        sign: string;
      }[],
      /** 空间动态信息 */
      space: [] as {
        /** 投稿的内容信息 和forwardInfo互斥，只会存在一个 */
        contentInfo: {
          /**
           * 内容标题
           *
           * 如果存在forwardInfo，那它是null
           */
          title: string | null | undefined;
          /**
           * 内容
           *
           * 如果存在forwardInfo，那它是转发的内容
           */
          desc: string | null | undefined;
          /** 发布的动态id */
          id_str: string;
          /** 发布的时间戳 */
          pub_ts: number;
        };
        /** 转发的信息 和contentInfo互斥，只会存在一个 */
        forwardInfo?: {
          /** 发布的动态id */
          id_str: string;
          /** 发布的时间戳 */
          pub_ts: number;
          /** 用户id */
          mid: number;
          /** 用户名 */
          name: string;
          /** 内容标题 */
          title: string | null | undefined;
          /** 内容 */
          desc: string | null | undefined;
        };
      }[],
    };
    allFollowingData.forEach((followingData) => {
      result.following.push({
        name: followingData.uname,
        mid: followingData.mid,
        sign: followingData.sign,
      });
    });
    allSpaceContentData.forEach((spaceData) => {
      if (spaceData.orig == null) {
        // 投稿
        let contentInfo: (typeof result.space)[0]["contentInfo"] = {
          title: spaceData.modules.module_dynamic.major?.archive?.title,
          desc: spaceData.modules.module_dynamic.major?.archive?.desc || spaceData.modules.module_dynamic.desc?.text,
          pub_ts: spaceData.modules.module_author.pub_ts * 1000,
          id_str: spaceData.id_str,
        };
        result.space.push({
          contentInfo: contentInfo,
        });
      } else {
        // 转发
        let contentInfo: (typeof result.space)[0]["contentInfo"] = {
          title: null,
          desc: spaceData.modules.module_dynamic.desc?.text,
          pub_ts: spaceData.modules.module_author.pub_ts * 1000,
          id_str: spaceData.id_str,
        };
        let forwardInfo: (typeof result.space)[0]["forwardInfo"] = {
          mid: spaceData.orig.modules.module_author.mid,
          name: spaceData.orig.modules.module_author.name,
          title:
            // 转发的内容的标题
            spaceData.orig.modules.module_dynamic?.major?.archive?.title || null,
          desc:
            spaceData.orig.modules.module_dynamic.desc?.text ??
            // 转发的内容的描述
            spaceData.orig.modules.module_dynamic?.major?.archive?.desc,
          pub_ts: spaceData.orig.modules.module_author.pub_ts * 1000,
          id_str: spaceData.orig.id_str,
        };
        if (
          typeof forwardInfo.desc === "string" &&
          Array.isArray(spaceData.orig.modules.module_dynamic?.desc?.rich_text_nodes)
        ) {
          // 把@用户给替换为空
          spaceData.orig.modules.module_dynamic.desc.rich_text_nodes.forEach((richInfo) => {
            if (richInfo.type === "RICH_TEXT_NODE_TYPE_AT") {
              forwardInfo.desc = forwardInfo.desc?.replace(richInfo.text, "");
            }
          });
        }
        result.space.push({
          contentInfo: contentInfo,
          forwardInfo: forwardInfo,
        });
      }
    });
    return result;
  },
  /**
   * 创建查询按钮
   * @param queryMIDFn 查询mid的函数
   */
  createSearchButton(queryMIDFn: () => number | string) {
    let $compositionCheckable = DOMUtils.createElement("div", {
      className: "composition-checkable",
      innerHTML: /*html*/ `
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `,
    });
    let $compositionNameControl = $compositionCheckable.querySelector<HTMLElement>(".composition-name-control")!;

    DOMUtils.on($compositionCheckable, "click", async (event) => {
      utils.preventEvent(event);
      if ($compositionCheckable.hasAttribute("data-is-searching")) {
        log.error("正在搜索中，请稍后再试");
        return;
      }
      $compositionCheckable.setAttribute("data-is-searching", "");
      DOMUtils.html($compositionNameControl, "...");
      try {
        if (BilibiliComponentDetectionRule.$data.ruleData.length === 0) {
          // 没有规则
          Qmsg.warning("未配置规则，请在设置中进行添加");
          // 重置状态为搜索图标
          DOMUtils.html($compositionNameControl, this.$data.searchIcon);
          return;
        }
        let mid = queryMIDFn();
        this.clearLabel($compositionCheckable);
        let userInfo = await this.queryUserInfo(mid);
        this.handleShowLabel(mid, userInfo, $compositionCheckable);
        // 重置状态为搜索图标
        DOMUtils.html($compositionNameControl, this.$data.searchIcon);
      } catch (error: any) {
        log.error(error);
        Qmsg.error(error.message, {
          timeout: 3500,
        });
        DOMUtils.html($compositionNameControl, "重试");
      } finally {
        $compositionCheckable.removeAttribute("data-is-searching");
      }
    });
    return {
      $container: $compositionCheckable,
      $compositionNameControl,
    };
  },
  /**
   * 创建标签
   * @param data
   */
  createLabel(data: MatchedInfo) {
    let $label = DOMUtils.createElement("div", {
      className: "composition-checked",
      innerHTML: /*html*/ `
				<div class="composition-badge">
				</div>
			`,
    });
    let $badge = $label.querySelector<HTMLElement>(".composition-badge")!;
    if (data.rule.data.isShowDisplayName) {
      // 显示标签名
      let $compositionName = DOMUtils.createElement("span", {
        className: "composition-name",
        innerHTML: data.rule.data.displayName,
      });
      DOMUtils.append($badge, $compositionName);
    }
    if (data.rule.data.isShowDisplayIcon) {
      // 显示图标

      let $compositionIcon: HTMLElement | null = null;
      if (data.rule.data.displayIcon.startsWith("http")) {
        // 网络图片
        $compositionIcon = DOMUtils.createElement(
          "img",
          {
            className: "composition-icon",
            src: data.rule.data.displayIcon,
          },
          {
            referrer: "no-referrer",
            referrerPolicy: "no-referrer",
          }
        );
      } else {
        $compositionIcon = DOMUtils.createElement("span", {
          className: "composition-icon",
          innerHTML: data.rule.data.displayIcon,
        });
      }
      DOMUtils.append($badge, $compositionIcon);
    }
    DOMUtils.on($badge, "click", (event) => {
      utils.preventEvent(event);
      pops.alert({
        title: {
          text: "识别信息",
          html: false,
          position: "center",
        },
        content: {
          text: /*html*/ `
						${data.matchedInfoList
              .map((it) => {
                let $el = DOMUtils.createElement("div", {
                  className: "reason-container",
                  innerHTML: /*html*/ `
										<div class="reason-text"><span>原因：</span>${it.reason}</div>
										<div class="reason-text"><span>匹配：</span>${
                      typeof it.reasonLink === "string"
                        ? /*html*/ `
											<a href="${it.reasonLink}" target="_blank">${it.reasonText}</a>
										`
                        : it.reasonText
                    }</div>
									`,
                });
                if (typeof it.reasonTime === "number") {
                  let $reasonTime = DOMUtils.createElement("div", {
                    className: "reason-text",
                    innerHTML: /*html*/ `
										<span>时间：</span>${utils.formatTime(it.reasonTime)}
										`,
                  });
                  DOMUtils.append($el, $reasonTime);
                }
                return $el.outerHTML;
              })
              .join("\n")}
					`,
          html: true,
        },
        btn: {
          ok: { enable: false },
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        style: /*css*/ `
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`,
      });
    });
    return $label;
  },
  /**
   * 清空标签
   * @param $ele
   */
  clearLabel($ele: HTMLElement) {
    while (true) {
      let $prev = DOMUtils.prev($ele);
      if (!$prev) {
        break;
      }
      if ($prev?.classList?.contains("composition-checked")) {
        $prev.remove();
      } else {
        break;
      }
    }
  },
  /**
   * 处理并显示标签
   * @param mid 用户mid
   * @param data
   * @param $searchContainer
   */
  handleShowLabel(
    mid: number | string,
    data: Awaited<ReturnType<typeof this.queryUserInfo>>,
    $searchContainer: HTMLElement
  ) {
    if (import.meta.hot) {
      log.info(`用户数据：`, data);
    }
    if (BilibiliComponentDetectionRule.$data.ruleData.length === 0) {
      // 没有规则
      Qmsg.warning("未配置规则，请在设置中进行添加");
      return;
    }
    mid = mid.toString();
    if (BilibiliComponentDetectionRule.$data.whiteList.includes(mid)) {
      // 白名单用户
      // 不处理
      return;
    }
    /** 命中的规则 */
    let matchedAllRule: MatchedInfo[] = [];
    /**
     * 添加命中的规则
     * @param rule
     * @param matchedInfo
     */
    let pushMatchedRule = (rule: MatchedInfo["rule"], matchedInfo: MatchedInfo["matchedInfoList"]["0"]) => {
      let findValue = matchedAllRule.find((it) => it.rule === rule);
      if (findValue) {
        findValue.matchedInfoList.push(matchedInfo);
      } else {
        matchedAllRule.push({
          rule: rule,
          matchedInfoList: [matchedInfo],
        });
      }
    };
    BilibiliComponentDetectionRule.$data.ruleData.forEach((ruleData) => {
      if (Array.isArray(ruleData.data.blacklist) && ruleData.data.blacklist.find((it) => it.toString() === mid)) {
        // 黑名单中存在符合的mid
        pushMatchedRule(ruleData, {
          reason: "黑名单用户",
          reasonText: mid,
          reasonLink: BilibiliUrl.getUserSpaceUrl(mid),
          reasonTime: null,
        });
        return;
      }
      if (Array.isArray(ruleData.data.followings)) {
        let reason = "关注列表";
        let reasonText = "";
        let checkFlag = ruleData.data.followings.some((followId) => {
          let __check__flag__ = data.following.some((followingData) => {
            return followingData.mid.toString() === followId.toString();
          });
          if (__check__flag__) {
            reasonText = followId.toString();
          }
          return __check__flag__;
        });
        if (checkFlag) {
          // 关注列表中存在符合的mid
          pushMatchedRule(ruleData, {
            reason: reason,
            reasonText: reasonText,
            reasonLink: BilibiliUrl.getUserSpaceUrl(reasonText),
            reasonTime: null,
          });
        }
      }
      if (Array.isArray(ruleData.data.keywords)) {
        ruleData.data.keywords.forEach((keyword) => {
          for (let spaceIndex = 0; spaceIndex < data.space.length; spaceIndex++) {
            const spaceData = data.space[spaceIndex];
            let reason = "";
            let reasonText = keyword;
            let reasonLink = `/opus/${spaceData.contentInfo.id_str}`;
            let reasonTime = spaceData.contentInfo.pub_ts;
            if (spaceData.forwardInfo == null) {
              // 投稿
              if (typeof spaceData.contentInfo.desc === "string" && spaceData.contentInfo.desc.match(keyword)) {
                // 视频简介中存在关键词
                reason = "投稿视频简介";
              } else if (
                typeof spaceData.contentInfo.title === "string" &&
                spaceData.contentInfo.title.match(keyword)
              ) {
                // 视频标题中存在关键词
                reason = "投稿视频标题";
              }
            } else {
              // 转发
              if (typeof spaceData.contentInfo.desc === "string" && spaceData.contentInfo.desc.match(keyword)) {
                // 转发的评论内容中存在关键词
                reason = "空间动态转发";
              } else if (
                typeof spaceData.forwardInfo?.title === "string" &&
                spaceData.forwardInfo.title.match(keyword)
              ) {
                // 转发的发布的标题存在关键词
                reason = "空间动态视频标题";
              } else if (typeof spaceData.forwardInfo?.desc === "string" && spaceData.forwardInfo.desc.match(keyword)) {
                // 转发的发布的描述存在关键词
                reason = "空间动态视频简介";
              }
            }
            if (reason !== "") {
              pushMatchedRule(ruleData, {
                reason: reason,
                reasonText: reasonText,
                reasonLink: reasonLink,
                reasonTime: reasonTime,
              });
            }
          }
        });
      }
    });

    // 排序
    utils.sortListByProperty(
      matchedAllRule,
      (value) => {
        return value.matchedInfoList.length;
      },
      true
    );
    matchedAllRule.forEach((it) => {
      let $label = this.createLabel(it);
      DOMUtils.before($searchContainer, $label);
    });
  },
};
