import { $, $$, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import i18next from "i18next";

export type DiscuessionsFilterRule = {
  /** 脚本名 */
  scriptName: string;
  /** 脚本id */
  scriptId: string;
  /** 发布的用户id */
  postUserId: string;
  /** 回复的用户id */
  replyUserId: string;
};

export const GreasyforkDiscussionsFilter = {
  /** 存储的键 */
  key: "gf-discuessions-filter-rule",
  $data: {
    /** 脚本 */
    FILTER_SCRIPT_KEY: "greasyfork-discussions-filter-script",
    /** 发布用户 */
    FILTER_POST_USER_KEY: "greasyfork-discussions-filter-post-user",
    /** 回复用户 */
    FILTER_REPLY_USER_KEY: "greasyfork-discussions-filter-reply-user",
  },
  init() {
    log.info("论坛-过滤");
    addStyle(/*css*/ `
        .discussion-list-container {
          --discusstion-repeat-color: #ffa700;
        }
        
        .discussion-list-container a.discussion-title[data-repeat-tip-show]::before {
          content: attr(data-repeat-tip-show);
          color: var(--discusstion-repeat-color);
          border-radius: 5px;
          border: 2px solid var(--discusstion-repeat-color);
          padding: 2px 5px;
          font-weight: 800;
          font-size: 14px;
        }
        `);
    let lockFunction = new utils.LockFunction(() => {
      this.filter();
    }, 50);
    utils.mutationObserver(document.body, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFunction.run();
      },
    });
    lockFunction.run();
  },
  /**
   * 获取反馈列表元素
   */
  getElementList() {
    let discussionsListContainer: HTMLDivElement[] = [];
    discussionsListContainer = discussionsListContainer.concat(
      Array.from($$<HTMLDivElement>(".discussion-list-container"))
    );
    return discussionsListContainer;
  },
  /**
   * 论坛-过滤
   */
  filter() {
    // 存储的列表元素，用于判断该元素是否重复
    const SNIPPET_MAP = new Map<string, HTMLElement>();

    this.getElementList().forEach(($listContainer, index) => {
      const discussionInfo = this.parseDiscuessionListContainerInfo($listContainer);
      if (!discussionInfo) return;
      let localValueSplit = this.getValue().split("\n");
      if (
        SNIPPET_MAP.has(discussionInfo.snippet) &&
        Panel.getValue("greasyfork-discussions-filter-duplicate-comments")
      ) {
        // 过滤重复评论
        let discussionTitleElement = SNIPPET_MAP.get(discussionInfo.snippet)!.querySelector<HTMLAnchorElement>(
          "a.discussion-title"
        )!;
        discussionTitleElement.setAttribute("data-repeat-tip-show", "true");
        let oldCount = 0;

        if (discussionTitleElement.hasAttribute("data-repeat-count")) {
          oldCount = parseInt(discussionTitleElement.getAttribute("data-repeat-count")!);
        }
        oldCount++;
        discussionTitleElement.setAttribute("data-repeat-count", oldCount.toString());
        discussionTitleElement.setAttribute("data-repeat-tip-show", i18next.t("已过滤：{{oldCount}}", { oldCount }));
        log.success([`过滤重复内容：${discussionInfo.snippet}`, discussionInfo]);
        $listContainer.remove();
        return;
      }

      SNIPPET_MAP.set(discussionInfo.snippet, $listContainer as HTMLElement);
      for (let index = 0; index < localValueSplit.length; index++) {
        let localRule = localValueSplit[index];
        let ruleSplit = localRule.split("##");
        /** 规则名 */
        let ruleName = ruleSplit[0] as keyof DiscuessionsFilterRule;
        /** 规则值 */
        let ruleValue = ruleSplit[1];
        if (ruleName in discussionInfo) {
          let ruleValueRegExp = new RegExp(ruleValue, "ig");
          if (discussionInfo[ruleName] != null) {
            let scriptInfoString = String(discussionInfo[ruleName]);
            if (scriptInfoString.match(ruleValueRegExp)) {
              log.info("触发论坛过滤规则", localRule, discussionInfo);
              $listContainer.remove();
              return;
            }
          }
        }
      }
    });
  },
  /**
   * 解析出元素上的属性
   */
  parseDiscuessionListContainerInfo($listContainer: HTMLElement) {
    const $title = $listContainer.querySelector<HTMLAnchorElement>("a.discussion-title");
    if (!$title) {
      return;
    }
    const discussionUrl = $title.href;
    const discuessionIdMatch = discussionUrl.match(/\/discussions(|\/greasyfork)\/([\d]+)/);
    if (!discuessionIdMatch) {
      return;
    }
    const discuessionId = discuessionIdMatch[discuessionIdMatch.length - 1];

    const $scriptName = $listContainer.querySelector<HTMLDivElement>(".discussion-meta-item-script-name");
    const $scriptNameLink = $scriptName?.querySelector<HTMLAnchorElement>("a");
    const $userLink = $listContainer.querySelector<HTMLAnchorElement>("a.user-link");
    const info = {
      /** 脚本名 */
      scriptName: $scriptName!.innerText,
      /** 脚本主页地址 */
      scriptUrl: $scriptNameLink?.href,
      /** 脚本id */
      scriptId: GreasyforkUrlUtils.getScriptId($scriptNameLink?.href),
      /** 发布的用户名 */
      postUserName: $userLink?.innerText,
      /** 发布的用户主页地址 */
      postUserHomeUrl: $userLink?.href,
      /** 发布的用户id */
      postUserId: GreasyforkUrlUtils.getUserId($userLink?.href)!,
      /** 发布的时间 */
      postTimeStamp: new Date(
        $listContainer.querySelector<HTMLElement>("relative-time")!.getAttribute("datetime") as any
      ),
      /**  发布的id */
      snippetId: discuessionId,
      /** 发布的地址*/
      snippetUrl: discussionUrl,
      /** 发布的内容片段*/
      snippet: $listContainer.querySelector<HTMLSpanElement>("span.discussion-snippet")?.innerText || "",
      /** （如果有）回复的用户名*/
      replyUserName: void 0 as string | undefined,
      /** （如果有）回复的用户主页地址*/
      replyUserHomeUrl: void 0 as string | undefined,
      /** （如果有）回复的用户id*/
      replyUserId: void 0 as string | undefined,
      /** （如果有）回复的时间 */
      replyTimeStamp: void 0 as Date | undefined,
    };
    let $reply = $listContainer.querySelector<HTMLDivElement>(".discussion-meta-item .discussion-meta-item");
    if ($reply) {
      // 回复的用户
      const $replyUserLink = $reply.querySelector<HTMLAnchorElement>("a.user-link");
      if (!$replyUserLink) {
        if (import.meta.env.DEV) {
          console.log("获取回复用户信息失败，该用户可能被删除");
        }
        return info;
      }
      info.replyUserName = $replyUserLink.innerText;
      info.replyUserHomeUrl = $replyUserLink.href;
      info.replyUserId = GreasyforkUrlUtils.getUserId(info.replyUserHomeUrl);
      info.replyTimeStamp = new Date($reply.querySelector<HTMLElement>("relative-time")!.getAttribute("datetime")!);
    }
    return info;
  },
  setValue(value: string) {
    Panel.setValue(this.key, value);
  },
  addValue(key: keyof DiscuessionsFilterRule, value: DiscuessionsFilterRule[keyof DiscuessionsFilterRule]) {
    let localValue = this.getValue();
    if (localValue.trim() !== "") {
      localValue += "\n";
    }
    if (utils.isNull(key)) {
      return;
    }
    key = key.toString().trim() as keyof DiscuessionsFilterRule;
    let rule = key + "##" + value;
    localValue += rule;
    this.setValue(localValue);
  },
  getValue() {
    return Panel.getValue(this.key, "");
  },
};
