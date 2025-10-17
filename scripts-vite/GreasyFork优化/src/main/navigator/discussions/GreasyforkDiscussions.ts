import { addStyle, DOMUtils, log, pops, utils } from "@/env";
import { DiscuessionsFilterRule, GreasyforkDiscussionsFilter } from "./GreasyforkDiscussionsFilter";
import { Panel } from "@components/setting/panel";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import type { PopsRightClickMenuDataDetails } from "@whitesev/pops/dist/types/src/components/rightClickMenu/types";

export const GreasyforkForum = {
  init() {
    this.readBgColor();
    DOMUtils.ready(() => {
      Panel.execMenuOnce("greasyfork-discussions-filter-enable", () => {
        this.filterEnable();
      });
      addStyle(/*css*/ `
        .discussion-meta-item[data-type="more"]{
          display: none;
        }
        .discussion-meta-item[data-type="more"] button{
          padding-left: 10px;
          padding-right: 10px;
        }

        @media screen and (max-width: 600px){
          /* 移动端时隐藏过滤、举报按钮 */
          .discussion-meta-item[data-type="filter"],
          .discussion-meta-item[data-type="report"]{
            display: none;
          }
          /* 显示举报按钮 */
          .discussion-meta-item[data-type="more"]{
            display: block;
          }
        }
      `);
      const lockFn = new utils.LockFunction(() => {
        const addFilterButton = Panel.getValue("discussions-addShortcutOperationButton")!;
        const addReportButton = Panel.getValue("discussions-addReportButton")!;
        if (addFilterButton) {
          this.addFilterButton();
        }
        if (addReportButton) {
          this.addReportButton();
        }
        if (addFilterButton || addReportButton) {
          this.addMoreButton({
            addFilterButton,
            addReportButton,
          });
        }
      });
      utils.mutationObserver(document.body, {
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
   * 启用Greasyfork论坛过滤器
   */
  filterEnable() {
    log.info("启用Greasyfork论坛过滤器");
    GreasyforkDiscussionsFilter.init();
  },
  /**
   * 设置已读背景颜色
   */
  readBgColor() {
    log.info("设置已读背景颜色");
    let color = Panel.getValue("discussions-readBgColor");
    return addStyle(/*css*/ `
        .discussion-read{
            background: ${color} !important;
        }
        `);
  },
  /**
   * 添加【过滤】按钮
   */
  addFilterButton() {
    const buttonClassName = "discussion-filter-button";
    GreasyforkDiscussionsFilter.getElementList().forEach(($listContainer) => {
      if ($listContainer.querySelector<HTMLAnchorElement>(`.${buttonClassName}`)) {
        return;
      }
      let $listItem = $listContainer.querySelector<HTMLElement>(".discussion-list-item")!;
      let $meta = $listItem.querySelector<HTMLElement>(".discussion-meta")!;
      let $ownMetaItem = DOMUtils.createElement(
        "div",
        {
          className: "discussion-meta-item",
          innerHTML: `
					<button class="${buttonClassName}">${i18next.t("过滤")}</button>
					`,
        },
        {
          style: "flex: 0;",
          "data-type": "filter",
        }
      );
      let $button = $ownMetaItem.querySelector<HTMLButtonElement>(`.${buttonClassName}`)!;
      $meta.appendChild($ownMetaItem);
      DOMUtils.on($button, "click", (event) => {
        DOMUtils.preventEvent(event);

        const discussionInfo = GreasyforkDiscussionsFilter.parseDiscuessionListContainerInfo($listContainer);
        if (!discussionInfo) {
          return;
        }
        let attr_filter_key = "data-filter-key";
        let attr_filter_value = "data-filter-value";
        let $dialog = pops.alert({
          title: {
            text: i18next.t("选择需要过滤的选项"),
            position: "center",
            html: false,
          },
          content: {
            text: /*html*/ `
								<button ${attr_filter_key}="scriptId" ${attr_filter_value}="^${discussionInfo.scriptId}$">${i18next.t(
                  "脚本id：{{text}}",
                  {
                    text: discussionInfo.scriptId,
                  }
                )}</button>
								<button ${attr_filter_key}="scriptName" ${attr_filter_value}="^${utils.toRegExpStr(
                  discussionInfo.scriptName
                )}$">${i18next.t("脚本名：{{text}}", {
                  text: discussionInfo.scriptName,
                })}</button>
								<button ${attr_filter_key}="postUserId" ${attr_filter_value}="^${utils.toRegExpStr(
                  discussionInfo.postUserId!
                )}$">${i18next.t("发布的用户id：{{text}}", {
                  text: discussionInfo.postUserId,
                })}</button>
							`,
            html: true,
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
            },
          },
          btn: {
            ok: {
              enable: false,
            },
          },
          drag: true,
          dragLimit: true,
          width: "350px",
          height: "300px",
          style: /*css*/ `
						.pops-alert-content{
							display: flex;
							flex-direction: column;
							gap: 20px;
						}
						.pops-alert-content button{
							text-wrap: wrap;
							padding: 8px;
							height: auto;
							text-align: left;
						}
						`,
        });
        let $content = $dialog.$shadowRoot.querySelector<HTMLDivElement>(".pops-alert-content")!;
        if (discussionInfo.scriptId == null) {
          $content.querySelector(`button[${attr_filter_key}="scriptId"]`)?.remove();
        }
        if (discussionInfo.scriptName == null) {
          $content.querySelector(`button[${attr_filter_key}="scriptName"]`)?.remove();
        }
        if (discussionInfo.postUserId == null) {
          $content.querySelector(`button[${attr_filter_key}="postUserId"]`)?.remove();
        }
        if (discussionInfo.replyUserId != null) {
          let $replyUserIdButton = DOMUtils.createElement("button", {
            innerHTML: i18next.t("作者id：{{text}}", {
              text: discussionInfo.replyUserId,
            }),
          });
          $replyUserIdButton.setAttribute(attr_filter_key, "scriptAuthorId");
          $replyUserIdButton.setAttribute(attr_filter_value, "^" + discussionInfo.replyUserId + "$");
          $content.appendChild($replyUserIdButton);
        }
        DOMUtils.on($dialog.$shadowRoot, "click", `button[${attr_filter_key}]`, (event) => {
          DOMUtils.preventEvent(event);
          let $click = event.target as HTMLButtonElement;
          let key = $click.getAttribute(attr_filter_key)! as keyof DiscuessionsFilterRule;
          let value = $click.getAttribute(attr_filter_value)!;
          GreasyforkDiscussionsFilter.addValue(key, value);
          $dialog.close();
          GreasyforkDiscussionsFilter.filter();
          Qmsg.success(i18next.t("添加成功"));
        });
      });
    });
  },
  /**
   * 添加【举报】按钮
   */
  addReportButton() {
    const buttonClassName = "discussion-report-button";
    GreasyforkDiscussionsFilter.getElementList().forEach(($listContainer) => {
      if ($listContainer.querySelector(`.${buttonClassName}`)) {
        return;
      }
      let $listItem = $listContainer.querySelector<HTMLElement>(".discussion-list-item")!;
      let $meta = $listItem.querySelector<HTMLElement>(".discussion-meta")!;
      let $ownMetaItem = DOMUtils.createElement(
        "div",
        {
          className: "discussion-meta-item",
          innerHTML: `
					<button class="${buttonClassName} pops-button--danger">${i18next.t("举报")}</button>
					`,
        },
        {
          style: "flex: 0;",
          "data-type": "report",
        }
      );
      let $button = $ownMetaItem.querySelector<HTMLButtonElement>(`.${buttonClassName}`)!;
      $meta.appendChild($ownMetaItem);

      DOMUtils.on($button, "click", (event) => {
        DOMUtils.preventEvent(event);

        const discussionInfo = GreasyforkDiscussionsFilter.parseDiscuessionListContainerInfo($listContainer);
        if (!discussionInfo) {
          return;
        }
        let attr_filter_key = "data-filter-key";
        let attr_filter_value = "data-filter-value";
        let $dialog = pops.alert({
          title: {
            text: i18next.t("举报"),
            position: "center",
            html: false,
          },
          content: {
            text: /*html*/ `
						<div class="report-item">
							${i18next.t("举报讨论：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
                "discussion",
                discussionInfo.snippetId!
              )}" target="_blank">${discussionInfo.snippet}</a>
						</div>
						${
              discussionInfo.scriptId
                ? /*html*/ `
							<div class="report-item">
							${i18next.t("举报脚本：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
                "script",
                discussionInfo.scriptId
              )}" target="_blank">${discussionInfo.scriptName}</a>
						</div>
						`
                : ""
            }
						
						<div class="report-item">
							${i18next.t("举报用户：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
                "user",
                discussionInfo.postUserId!
              )}" target="_blank">${discussionInfo.postUserName}</a>
						</div>
						${
              discussionInfo.replyUserId && discussionInfo.replyUserId != discussionInfo.postUserId
                ? /*html*/ `
								<div class="report-item">
									${i18next.t("举报用户：")}
									<a href="${GreasyforkUrlUtils.getReportUrl(
                    "user",
                    discussionInfo.replyUserId!
                  )}" target="_blank">${discussionInfo.replyUserName}</a>
								</div>
								`
                : ""
            }
							
								`,
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
            },
          },
          drag: true,
          dragLimit: true,
          width: "350px",
          height: "300px",
          style: /*css*/ `
							.pops-alert-content{
								display: flex;
								flex-direction: column;
								gap: 20px;
							}
							.pops-alert-content .report-item{
								text-wrap: wrap;
								padding: 8px;
								height: auto;
								text-align: left;
								margin: var(--button-margin-top) var(--button-margin-right)
								var(--button-margin-bottom) var(--button-margin-left);
								border-radius: var(--button-radius);
								color: var(--button-color);
								border-color: var(--button-bd-color);
   								background-color: var(--button-bg-color);
							}
							`,
        });
      });
    });
  },
  /**
   * 添加【...】按钮
   */
  addMoreButton(config: { addFilterButton: boolean; addReportButton: boolean }) {
    const buttonClassName = "discussion-more-button";
    GreasyforkDiscussionsFilter.getElementList().forEach(($listContainer) => {
      if ($listContainer.querySelector(`.${buttonClassName}`)) {
        return;
      }
      let $listItem = $listContainer.querySelector<HTMLElement>(".discussion-list-item")!;
      let $meta = $listItem.querySelector<HTMLElement>(".discussion-meta")!;
      let $ownMetaItem = DOMUtils.createElement(
        "div",
        {
          className: "discussion-meta-item",
          innerHTML: `
					<button class="${buttonClassName}">${i18next.t("...")}</button>
					`,
        },
        {
          style: "flex: 0;",
          "data-type": "more",
        }
      );
      const $button = $ownMetaItem.querySelector<HTMLButtonElement>(`.${buttonClassName}`)!;
      const data: PopsRightClickMenuDataDetails[] = [];
      if (config.addFilterButton) {
        data.push({
          text: i18next.t("过滤"),
          callback: () => {
            const $parent = DOMUtils.parent($listItem);
            const $filter = $parent.querySelector<HTMLElement>('.discussion-meta-item[data-type="filter"] button');
            if (!$filter) {
              Qmsg.error(i18next.t("未找到【过滤】按钮"));
              return;
            }
            $filter.click();
          },
        });
      }
      if (config.addReportButton) {
        data.push({
          text: i18next.t("举报"),
          callback: () => {
            const $parent = DOMUtils.parent($listItem);
            const $report = $parent.querySelector<HTMLElement>('.discussion-meta-item[data-type="report"] button');
            if (!$report) {
              Qmsg.error(i18next.t("未找到【举报】按钮"));
              return;
            }
            $report.click();
          },
        });
      }
      if (!data.length) {
        return;
      }
      const rightClickMenu = pops.rightClickMenu({
        target: document.documentElement,
        position: "absolute",
        limitPositionYInView: false,
        data: data,
      });
      rightClickMenu.removeContextMenuEvent(document.documentElement);
      DOMUtils.on($button, "click", (event) => {
        DOMUtils.preventEvent(event);
        const rect = $button.getBoundingClientRect();
        rightClickMenu.PopsContextMenu.contextMenuEvent(
          new PointerEvent("contextmenu", {
            clientX: rect.left + window.scrollX,
            clientY: rect.top + rect.height + window.scrollY,
          }),
          $button
        );
      });
      $meta.appendChild($ownMetaItem);
    });
  },
};
