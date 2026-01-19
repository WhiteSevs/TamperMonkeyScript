import { CSDNFavoriteApi, type CSDNFavoriteDataOption } from "@/api/CSDNFavoriteApi";
import { $, addStyle, DOMUtils, log, pops } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { Panel } from "@components/setting/panel";
import { PanelUISize } from "@components/setting/panel-ui-size";
import Qmsg from "qmsg";
import { unsafeWindow } from "ViteGM";

export const M_CSDNBlogArticleBottomToolBar = {
  init() {
    Panel.exec(
      "m-csdn-blog-bottom-toolbar-enable",
      () => {
        return this.blockBottomToolBar();
      },
      (keyList) => {
        return !Panel.getValue(keyList[0]);
      },
      true
    );
    Panel.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom", () => {
      return this.bottomToolBarAlwaysShow();
    });

    DOMUtils.onReady(() => {
      Panel.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton", () => {
        return this.optimizationCollectButton();
      });
    });
  },
  /**
   * 屏蔽底部工具栏
   */
  blockBottomToolBar() {
    log.info(`屏蔽底部工具栏`);
    return CommonUtil.addBlockCSS("#operate");
  },
  /**
   * 底部工具栏常驻
   */
  bottomToolBarAlwaysShow() {
    log.info(`底部工具栏常驻`);
    return addStyle(/*css*/ `
    #operate {
        bottom: 0 !important;
    }
    `);
  },
  /**
   * 优化收藏按钮
   */
  async optimizationCollectButton() {
    log.info(`优化收藏按钮`);

    const $collectBtn = await DOMUtils.waitNode<HTMLElement>("#operate .collect-btn", 10000);
    if (!$collectBtn) {
      return;
    }

    // 覆盖点击事件
    const listener = DOMUtils.on(
      $collectBtn,
      "click",
      async (event) => {
        DOMUtils.preventEvent(event);
        const $isCollect = $collectBtn.querySelector<HTMLElement>(".collect")!;
        const $unCollect = $collectBtn.querySelector<HTMLElement>(".uncollect")!;
        // 获取收藏夹信息
        const folderInfo = await CSDNFavoriteApi.folderListWithCheck(window.location.origin + window.location.pathname);
        if (!folderInfo) {
          return;
        }
        const isFavoriteFolderIdList: number[] = [];
        folderInfo.forEach((item) => {
          if (item.IsFavorite) {
            isFavoriteFolderIdList.push(item.ID);
          }
        });
        const createCollectItem = (data: CSDNFavoriteDataOption) => {
          let folderId = data.ID;
          let $item = DOMUtils.createElement(
            "li",
            {
              className: "csdn-collection-item",
              innerHTML: /*html*/ `
                <div class="csdn-collection-item_left">
                    <div class="csdn-collection-item_title">
                        <span class="title-m">${data.Name}</span>
                    </div>
                    <span class="csdn-collection-item_ext">
                        <span class="csdn-collection-item_length">${data.FavoriteNum}条内容</span>
                        <span class="dot">・</span>
                        <span class="csdn-collection-controls">${data.IsPrivate ? "私密" : "公开"}</span>
                    </span>
                </div>
                <span class="collect-btn">${data.IsFavorite ? "已收藏" : "收藏"}</span>
            `,
            },
            {
              "data-is-collect": data.IsFavorite,
            }
          );
          let $title = $item.querySelector<HTMLElement>(".title-m")!;
          let $contentLength = $item.querySelector<HTMLSpanElement>(".csdn-collection-item_length")!;
          let $controls = $item.querySelector<HTMLSpanElement>(".csdn-collection-controls")!;
          let $collectBtn = $item.querySelector<HTMLButtonElement>(".collect-btn")!;

          // 点击进行收藏/取消收藏
          DOMUtils.on($collectBtn, "click", async (event) => {
            let articleDetailUrl = unsafeWindow.articleDetailUrl;
            if (articleDetailUrl == null) {
              articleDetailUrl = window.location.origin + window.location.pathname;
            }
            let articleId = unsafeWindow.articleId;
            if (articleId == null) {
              log.error("获取文章ID失败");
              Qmsg.error("获取文章ID失败");
              return;
            }
            let username = unsafeWindow.username;
            if (username == null) {
              log.error("获取文章作者失败");
              Qmsg.error("获取文章作者失败");
              return;
            }
            let articleTitle = unsafeWindow.articleTitle;
            if (articleTitle == null) {
              articleTitle = document.title.replace(/-CSDN博客$/, "");
            }
            if (articleTitle == null) {
              log.error("获取文章标题失败");
              Qmsg.error("获取文章标题失败");
              return;
            }
            let articleDesc = unsafeWindow.articleDesc;
            if (articleDesc == null) {
              const $meta = $("meta[name='description']");
              if ($meta) {
                articleDesc = $meta.getAttribute("content");
              }
            }
            if (articleDesc == null) {
              log.error("获取文章描述失败");
              Qmsg.error("获取文章描述失败");
              return;
            }
            const folderIdList: number[] = [...isFavoriteFolderIdList];
            let $loading = Qmsg.loading("处理中...");
            try {
              let checkResponse = await CSDNFavoriteApi.checkFavoriteByUrl(articleDetailUrl);
              if (checkResponse == null) {
                return;
              }
              log.info(folderId, checkResponse);
              /** 如果收藏夹是空的，当前为添加，否则是取消 */
              let toCollect = !checkResponse[folderId];
              if (toCollect) {
                // 未收藏-当前操作为添加收藏
                log.info(`添加收藏`);
                folderIdList.push(folderId);
              } else {
                // 已收藏-当前操作为取消收藏
                log.info(`取消收藏`);
                folderIdList.splice(folderIdList.indexOf(folderId), 1);
              }

              const response = await CSDNFavoriteApi.addFavoriteInFolds({
                author: username,
                url: articleDetailUrl,
                source: "blog",
                sourceId: articleId,
                title: articleTitle,
                description: articleDesc,
                fromType: "PC",
                username: data.Username,
                folderIdList: folderIdList,
              });
              if (!response) {
                return;
              }
              const check_isCollect = await CSDNFavoriteApi.checkFavoriteByUrl(articleDetailUrl);
              if (check_isCollect == null) {
                return;
              }
              log.info(folderId, check_isCollect);
              $item.setAttribute("data-is-collect", (!!check_isCollect[folderId]).toString());
              if (toCollect) {
                // 收藏 判断是否收藏成功
                if (!check_isCollect[folderId]) {
                  log.error("收藏失败", check_isCollect, folderId);
                  Qmsg.error("收藏失败");
                } else {
                  log.success("收藏成功");
                  Qmsg.success("收藏成功");
                  DOMUtils.text($collectBtn, "已收藏");
                  if (!isFavoriteFolderIdList.includes(folderId)) {
                    isFavoriteFolderIdList.push(folderId);
                  }
                  data.FavoriteNum++;
                }
              } else {
                // 取消收藏 判断是否取消收藏成功
                if (!check_isCollect[folderId]) {
                  // 成功
                  log.success("取消收藏成功");
                  Qmsg.success("取消收藏成功");
                  DOMUtils.text($collectBtn, "收藏");
                  if (isFavoriteFolderIdList.includes(folderId)) {
                    isFavoriteFolderIdList.splice(isFavoriteFolderIdList.indexOf(folderId), 1);
                  }
                  data.FavoriteNum--;
                } else {
                  // 失败
                  log.error("取消收藏失败", check_isCollect, folderId);
                  Qmsg.error("取消收藏失败");
                }
              }
              DOMUtils.text($contentLength, `${data.FavoriteNum}条内容`);

              // 如果所有的收藏夹都没有收藏，则取消按钮变红
              let findValue = Object.values(check_isCollect).find((item) => item);
              if (findValue) {
                DOMUtils.show($isCollect, false);
                DOMUtils.hide($unCollect, false);
              } else {
                DOMUtils.show($unCollect, false);
                DOMUtils.hide($isCollect, false);
              }
              $loading.close();
            } catch (error) {
              log.error(error);
            } finally {
              $loading.close();
            }
          });
          return $item;
        };
        let $alert = pops.alert({
          title: {
            text: "添加收藏夹",
            position: "center",
          },
          content: {
            text: /*html*/ `
									<ul class="csdn-collection-items"></ul>
								`,
            html: true,
          },
          btn: {
            ok: {
              enable: false,
            },
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          drag: true,
          mask: {
            enable: true,
          },
          style: /*css*/ `
            .csdn-collection-items{
                --font-size: 16px;
            }
            .csdn-collection-items{
                font-size: var(--font-size);
                font-weight: 400;
                padding: 0 20px 0;
                margin: 24px 0;
                overflow: auto;
                -ms-scroll-chaining: none;
                overscroll-behavior: contain;
            }
            .csdn-collection-item{
                width: 100%;
                height: 62px;
                line-height: normal;
                position: relative;
                padding: 8px 12px;
                cursor: pointer;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                border-bottom: 1px solid #f0f0f5;
            }
            .csdn-collection-item_left{
                line-height: normal;
                flex: 1;
                overflow: hidden;
            }
            .csdn-collection-item_title{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
            .csdn-collection-item_ext{
                font-weight: 400;
                color: #999aaa;
                line-height: 17px;
                margin-top: 8px;
                font-size: .8em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                display: inline-flex;
                align-items: center;
            }
            .collect-btn{
                color: #555666;
                font-size: var(--font-size);
                width: 64px;
                height: 30px;
                line-height: 30px;
                border-radius: 20px;
                text-align: center;
                -webkit-transition: all .2s;
                transition: all .2s;
                border: 1px solid #ccccd8;
            }
            .csdn-collection-item[data-is-collect="true"] .collect-btn{
                color: #999aaa;
                background: rgba(232, 232, 237, .3);
                border: 1px solid #e8e8ed;
            }
            /* .csdn-collection-item:hover{
                background: #f5f6f7;
            }
            .csdn-collection-item:hover .collect-btn{
                border: 1px solid #555666;
            } */
        `,
        });

        const $collectionContainer = $alert.$shadowRoot.querySelector<HTMLUListElement>(".csdn-collection-items")!;
        folderInfo.forEach((folderInfoItem) => {
          const $item = createCollectItem(folderInfoItem);
          $collectionContainer.appendChild($item);
        });
      },
      { capture: true }
    );

    return [
      () => {
        listener.off();
      },
    ];
  },
};
