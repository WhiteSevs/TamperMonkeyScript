import { DOMUtils, log, pops, utils, DataPaging } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskGlobalData } from "@/main/data/NetDiskGlobalData";
import { NetDiskView } from "../NetDiskView";
import { NetDiskLinkView } from "../link-view/NetDiskLinkView";
import indexCSS from "./index.css?raw";
import { NetDiskViewRightClickMenu } from "@/main/view/NetDiskViewRightClickMenu";
import { NetDiskLinkViewEvent } from "../link-view/NetDiskLinkViewEvent";

export const NetDiskHistoryMatchView = {
  /**
   * 本地存储的keyName
   */
  storageKey: "netDiskHistoryMatch",
  /**
   * 是否已设置其它DOM事件
   */
  isSetOtherEvent: false,
  /**
   * 分页
   */
  dataPaging: void 0 as any as (typeof DataPaging)["prototype"],
  /**
   * 显示弹窗
   */
  show() {
    let data = this.getStorageData();
    let dataHTML = "";
    let that = this;
    data = this.orderNetDiskHistoryMatchData(data);
    dataHTML = /*html*/ `
        <div class="netdiskrecord-search">
            <input type="text" placeholder="搜索链接/网址/网址标题，按下回车进行搜索（可正则）">
        </div>
        <div class="netdiskrecord-table">
			<ul></ul>
		</div>
        <div class="netdiskrecord-page">

        </div>`;
    NetDiskView.$el.$historyView = NetDiskPops.confirm(
      {
        title: {
          text: "历史匹配记录",
          position: "center",
        },
        content: {
          text: dataHTML,
          html: true,
        },
        btn: {
          reverse: true,
          position: "space-between",
          close: {
            callback(details) {
              details.close();
              // @ts-ignore
              NetDiskView.$el.$historyView = void 0;
            },
          },
          ok: {
            enable: false,
            callback(details) {
              details.close();
              // @ts-ignore
              NetDiskView.$el.$historyView = void 0;
            },
          },
          cancel: {
            enable: true,
            text: "关闭",
            callback(details) {
              details.close();
              // @ts-ignore
              NetDiskView.$el.$historyView = void 0;
            },
          },
          other: {
            enable: true,
            text: `清空所有(${data.length})`,
            type: "xiaomi-primary",
            callback: () => {
              NetDiskPops.confirm({
                title: {
                  text: "删除",
                  position: "center",
                },
                content: {
                  text: "确定清空所有的记录？",
                  html: false,
                },
                btn: {
                  ok: {
                    enable: true,
                    callback(clearAllDialog) {
                      that.clearStorageData();
                      that.clearLinkElements();
                      that.clearPageNavigator();
                      clearAllDialog.close();
                      let $recordPage =
                        NetDiskView.$el.$historyView.$shadowRoot.querySelector<HTMLElement>(".netdiskrecord-page")!;
                      let $btnOther =
                        NetDiskView.$el.$historyView.$shadowRoot.querySelector<HTMLElement>(".pops-confirm-btn-other")!;
                      DOMUtils.html($recordPage, "");
                      DOMUtils.text($btnOther, DOMUtils.text($btnOther).replace(/[\d]+/gi, "0"));
                    },
                  },
                  cancel: {
                    text: "取消",
                    enable: true,
                  },
                },
              });
            },
          },
        },
        mask: {
          clickCallBack(originalRun) {
            originalRun();
            // @ts-ignore
            NetDiskView.$el.$historyView = null;
          },
        },
        class: "whitesevPopNetDiskHistoryMatch",
        style: indexCSS,
      },
      NetDiskView.$config.viewSizeConfig.historyMatchView
    );
    this.addLinkElements(data.slice(0, 9));
    this.setDataPaging(data);
    this.setEvent(NetDiskView.$el.$historyView.$shadowRoot);
    this.setSearchEvent();
    NetDiskViewRightClickMenu.setRightClickMenu(
      NetDiskView.$el.$historyView.$shadowRoot.querySelector<HTMLElement>(".whitesevPopNetDiskHistoryMatch")!,
      ".netdiskrecord-link a",
      true
    );
  },
  /**
   * 获取链接项的容器
   */
  getLinkContainer() {
    let $linkContainer =
      NetDiskView.$el.$historyView.$shadowRoot.querySelector<HTMLUListElement>(".netdiskrecord-table ul")!;
    return $linkContainer;
  },
  /**
   * 添加链接元素
   */
  addLinkElements(data: NetDiskHistoryDataOption | NetDiskHistoryDataOption[]) {
    if (!Array.isArray(data)) {
      data = [data];
    }
    let documentFragment = document.createDocumentFragment();
    for (let index = 0; index < data.length; index++) {
      let dataItem = data[index];
      let $item = this.createLinkItemElementInfo(dataItem);
      documentFragment.appendChild($item.$liItemContainer);
    }
    let $linkContainer = this.getLinkContainer();
    $linkContainer.appendChild(documentFragment);
  },
  /**
   * 获取显示出的每一项的信息
   * @param data
   */
  createLinkItemElementInfo(data: NetDiskHistoryDataOption) {
    /** 获取处理后的显示的链接 */
    let uiLink = NetDisk.handleLinkShow({
      ruleKeyName: data.ruleKeyName,
      ruleIndex: data.ruleIndex,
      shareCode: data.shareCode,
      accessCode: data.accessCode,
      matchText: data.matchText,
    });
    let $liItemContainer = DOMUtils.createElement("li", {
      innerHTML: /*html*/ `
			<div class="netdiskrecord-link">
				<p>链接</p>
				<a  href="javascript:;" isvisited="false">${uiLink}</a>
			</div>
			<div class="netdiskrecord-icon">
				<p>网盘</p>
				<div class="netdisk-icon-img"></div>
			</div>
			<div class="netdiskrecord-url">
				<p>网址</p>
				<a href="${data.url}" target="_blank">${data.url}</a>
			</div>
			<div class="netdiskrecord-url-title">
				<p>网址标题</p>
				${data.title}
			</div>
			<div class="netdiskrecord-add-time">
				<p>记录时间</p>
				${utils.formatTime(data.addTime)}
			</div>
			<div class="netdiskrecord-update-time">
				<p>更新时间</p>
				${utils.formatTime(data.updateTime)}
			</div>
			<div class="netdiskrecord-functions">
				<p>功能</p>
				<button class="btn-delete" type="button">删除</button>
			</div>
			`,
    });

    let $link = $liItemContainer.querySelector<HTMLDivElement>(".netdiskrecord-link")!;
    let $linkAnchor = $link.querySelector<HTMLAnchorElement>("a")!;
    let $icon = $liItemContainer.querySelector<HTMLDivElement>(".netdiskrecord-icon");
    let $iconImg = $liItemContainer!.querySelector<HTMLDivElement>(".netdisk-icon-img")!;

    let $url = $liItemContainer.querySelector<HTMLDivElement>(".netdiskrecord-url")!;
    let $urlTitle = $liItemContainer.querySelector<HTMLDivElement>(".netdiskrecord-url-title")!;
    let $addTime = $liItemContainer.querySelector<HTMLDivElement>(".netdiskrecord-add-time");
    let $updateTime = $liItemContainer.querySelector<HTMLDivElement>(".netdiskrecord-update-time")!;
    let $features = $liItemContainer.querySelector<HTMLDivElement>(".netdiskrecord-functions");
    let $featuresBtnDelete = $features!.querySelector<HTMLButtonElement>(".btn-delete")!;
    NetDiskLinkView.handleBoxAttrRuleInfo(
      {
        ruleKeyName: data.ruleKeyName,
        ruleIndex: data.ruleIndex,
        shareCode: data.shareCode,
        accessCode: data.accessCode,
      },
      $linkAnchor
    );

    $iconImg.style.cssText = `background: url(${NetDiskView.$inst.icon.getIcon(data.ruleKeyName)}) no-repeat;background-size:100%`;

    if (data.url !== data.topURL) {
      // 添加top信息
      let $topUrl = DOMUtils.createElement("div", {
        className: "netdiskrecord-top-url",
        innerHTML: /*html*/ `
				<p>Top网址</p>
				<a href="${data.topURL}" target="_blank">${data.topURL}</a>
				`,
      });
      DOMUtils.after($url, $topUrl);
    }

    $featuresBtnDelete.setAttribute("data-json", JSON.stringify(data));
    Reflect.set($featuresBtnDelete, "data-json", data);

    return {
      $liItemContainer,
      $link,
      $linkAnchor,
      $icon,
      $iconImg,
      $url,
      $urlTitle,
      $addTime,
      $updateTime,
      $features,
      $featuresBtnDelete,
      html: $liItemContainer.outerHTML,
    };
  },
  /**
   * 清空链接元素
   */
  clearLinkElements() {
    let $liItemContainer = this.getLinkContainer();
    DOMUtils.empty($liItemContainer);
  },
  /**
   * 清空分页元素
   */
  clearPageNavigator() {
    DOMUtils.remove(NetDiskView.$el.$historyView.$shadowRoot.querySelectorAll<HTMLElement>(".netdiskrecord-page > *"));
  },
  /**
   * 设置只执行一次的事件
   * @param target
   */
  setEvent(target: HTMLElement | ShadowRoot) {
    let that = this;
    NetDiskLinkViewEvent.setNetDiskUrlClickEvent(target, ".netdiskrecord-link a");

    /**
     * 设置删除按钮点击事件
     */
    DOMUtils.on(target, "click", ".netdiskrecord-functions button.btn-delete", function (event) {
      let $btnOther = target.querySelector<HTMLElement>(".pops-confirm-btn-other")!;
      /* 删除中的遮罩层 */
      let deleteLoading = NetDiskPops.loading({
        parent: that.getLinkContainer(),
        content: {
          text: "删除中...",
        },
        only: true,
        addIndexCSS: false,
      });
      let clickNode = event.target as HTMLElement;
      let dataJSON = clickNode.getAttribute("data-json")!;
      clickNode.closest("li")?.remove();
      that.deleteStorageData(dataJSON);
      deleteLoading?.close();
      let totalNumberText = DOMUtils.text($btnOther);
      let totalNumberMatch = totalNumberText.match(/[\d]+/gi)!;
      let totalNumber = parseInt(totalNumberMatch[totalNumberMatch.length - 1]);
      totalNumber--;
      totalNumberText = totalNumberText.replace(/[\d]+/gi, totalNumber.toString());
      DOMUtils.text($btnOther, totalNumberText);
      let data = that.getStorageData();
      data = that.orderNetDiskHistoryMatchData(data);
      that.dataPaging.refresh(data);
      that.pageChangeCallBack(data, that.dataPaging.CONFIG.currentPage);
    });
  },
  /**
   * 页码改变的回调
   * @param data
   * @param page
   */
  pageChangeCallBack(data: NetDiskHistoryDataOption[], page: number) {
    let startIndex = (page - 1) * 10;
    let startData = data.slice(startIndex, startIndex + 9);
    this.clearLinkElements();
    this.addLinkElements(startData);
  },
  /**
   * 设置分页
   * @param data
   */
  setDataPaging(data: NetDiskHistoryDataOption[]) {
    let that = this;
    let dataPaging = new DataPaging({
      data: data,
      pageShowDataMaxCount: 10,
      pageMaxStep: pops.isPhone() ? 2 : 4,
      currentPage: 1,
      pageChangeCallBack: function (page) {
        that.pageChangeCallBack(data, page);
      },
    });
    this.dataPaging = dataPaging;

    dataPaging.addCSS(NetDiskView.$el.$historyView.$shadowRoot);
    const $paginationWrapper = NetDiskView.$el.$historyView.$shadowRoot.querySelector<HTMLElement>(
      ".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
    )!;
    dataPaging.append($paginationWrapper);
  },
  /**
   * 设置搜索框的回车事件
   */
  setSearchEvent() {
    let isSeaching = false; /* 当前搜索的状态 */
    let $searchLoading = void 0 as undefined | ReturnType<(typeof NetDiskPops)["loading"]>; /* 搜索中的遮罩层 */
    let that = this;
    function searchEvent() {
      if (isSeaching) {
        return;
      }
      isSeaching = true;
      $searchLoading = NetDiskPops.loading({
        parent: that.getLinkContainer(),
        content: {
          text: "搜索中...",
        },
        only: true,
        addIndexCSS: false,
      });
      let searchText = NetDiskView.$el.$historyView.$shadowRoot
        .querySelector<HTMLInputElement>(".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input")!
        .value.trim();
      let data = that.getStorageData();
      data = that.orderNetDiskHistoryMatchData(data);
      if (searchText === "") {
        /* 输入空就关闭遮罩层且恢复style */
        that.clearLinkElements();
        that.clearPageNavigator();
        that.addLinkElements(data.slice(0, 9));
        $searchLoading?.close();
        isSeaching = false;
        that.setDataPaging(data);
        return;
      }
      log.info(`历史匹配记录-搜索：` + searchText);
      /** 搜索到的链接 */
      let searchData = data.filter((dataOption) => {
        let uiLink = NetDisk.handleLinkShow({
          ruleKeyName: dataOption.ruleKeyName,
          ruleIndex: dataOption.ruleIndex,
          shareCode: dataOption.shareCode,
          accessCode: dataOption.accessCode,
          matchText: dataOption.matchText,
          showToast: false,
        });
        if (!uiLink) {
          log.info(dataOption);
        }
        let searchTextRegExp = utils.toRegExp(searchText, "i");
        if (
          (typeof uiLink === "string" && uiLink.match(searchTextRegExp)) ||
          dataOption.shareCode.match(searchTextRegExp) ||
          dataOption.url.match(searchTextRegExp) ||
          dataOption.topURL.match(searchTextRegExp) ||
          dataOption.title.match(searchTextRegExp)
        ) {
          /* 匹配到 */
          return true;
        }
      });
      that.clearLinkElements();
      that.clearPageNavigator();
      that.addLinkElements(searchData);
      $searchLoading?.close();
      $searchLoading = void 0;
      isSeaching = false;
    }

    DOMUtils.listenKeyboard(
      NetDiskView.$el.$historyView.$shadowRoot.querySelector<HTMLInputElement>(
        ".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
      )!,
      "keypress",
      (keyName) => {
        if (keyName === "Enter") {
          searchEvent();
        }
      }
    );
  },
  /**
   * 排序数据
   * @param data
   */
  orderNetDiskHistoryMatchData(data: NetDiskHistoryDataOption[]) {
    let localOrder = NetDiskGlobalData.historyMatch["netdisk-history-match-ordering-rule"].value;
    let isDesc = localOrder.indexOf("降序") !== -1 ? true : false; /* 降序 */
    let orderField = localOrder.indexOf("记录时间") !== -1 ? "addTime" : "updateTime"; /* 排序字段 */

    utils.sortListByProperty(
      data,
      (item) => {
        return item[orderField as keyof NetDiskHistoryDataOption];
      },
      isDesc
    );
    return data;
  },
  /**
   * 查询访问码
   * @param ruleKeyName
   * @param shareCode
   * @param isNotNull 查询的访问码是否不为空
   * + true 不能是空的
   * + false 允许为空
   */
  queryAccessCode(ruleKeyName: string, shareCode: string, isNotNull: boolean) {
    let storageDataList = this.getStorageData();
    for (let index = 0; index < storageDataList.length; index++) {
      const localData = storageDataList[index];
      if (localData.ruleKeyName === ruleKeyName && localData.shareCode === shareCode) {
        if (isNotNull && utils.isNotNull(localData.accessCode)) {
          // 不要空的
          return localData.accessCode;
        }
        return localData.accessCode;
      }
    }
  },
  /**
   * 同步访问码
   * @param ruleKeyName 规则名称
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 新的访问码
   */
  syncAccessCode(ruleKeyName: string, ruleIndex: number, shareCode: string, accessCode: AccessCodeType) {
    if (NetDiskGlobalData.historyMatch.saveMatchNetDisk.value) {
      let flag = NetDiskHistoryMatchView.changeMatchedDataAccessCode(ruleKeyName, ruleIndex, shareCode, accessCode);
      if (flag) {
        log.success("已成功同步访问码至历史匹配记录");
        return true;
      } else {
        log.error("同步访问码至历史匹配记录失败");
      }
    }
    return false;
  },
  /**
   * 修改存储的数据的访问码
   * @param ruleKeyName 规则名称
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 新的访问码
   */
  changeMatchedDataAccessCode(ruleKeyName: string, ruleIndex: number, shareCode: string, accessCode: AccessCodeType) {
    let storageDataList = this.getStorageData();
    let flag = false;
    for (let index = 0; index < storageDataList.length; index++) {
      const localData = storageDataList[index];
      if (
        localData.ruleKeyName === ruleKeyName &&
        String(localData.ruleIndex) === String(ruleIndex) &&
        localData.shareCode === shareCode
      ) {
        flag = true;
        storageDataList[index].accessCode = accessCode;
        storageDataList[index].updateTime = Date.now();
      }
    }
    if (flag) {
      this.saveStorageData(storageDataList);
    }

    return flag;
  },
  /**
   * 存储匹配到的链接
   * @param ruleKeyName 规则名称
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 访问码
   * @param matchText 匹配到的文本
   */
  changeMatchedData(
    ruleKeyName: string,
    ruleIndex: number,
    shareCode: string,
    accessCode: AccessCodeType,
    matchText: string
  ) {
    if (!NetDiskGlobalData.historyMatch.saveMatchNetDisk.value) {
      return false;
    }
    let storageDataList = this.getStorageData();

    let flag = false;
    // 先从已有的数据中查找是否存在相同的
    // 有的话修改，没有的话添加新的
    for (let index = 0; index < storageDataList.length; index++) {
      const localData = storageDataList[index];
      // 按照匹配的网址的区分的
      if (
        localData.ruleKeyName === ruleKeyName &&
        shareCode.startsWith(localData.shareCode) &&
        localData.ruleIndex === ruleIndex
      ) {
        if (
          NetDiskGlobalData.historyMatch["netdisk-history-match-merge-same-link"].value ||
          (localData.url === window.location.href && localData.topURL === top!.window.location.href)
        ) {
          flag = true;
          let editFlag = false;
          if (matchText.trim() !== "" && localData.matchText !== matchText) {
            /* 修改/设置新的matchText */
            editFlag = true;
            log.success("匹配历史记录 -> 设置新的matchText", [matchText]);
            storageDataList[index].matchText = matchText;
          }
          if (utils.isNotNull(accessCode) && localData.accessCode !== accessCode) {
            // 修改accessCode
            editFlag = true;
            log.success("匹配历史记录 -> 修改accessCode");
            storageDataList[index].accessCode = accessCode;
          }

          if (editFlag) {
            storageDataList[index].updateTime = Date.now();
            if (storageDataList[index].title) {
              storageDataList[index].title = document.title;
            }
            if (NetDiskGlobalData.historyMatch["netdisk-history-match-merge-same-link"].value) {
              storageDataList[index].url = window.location.href;
              storageDataList[index].topURL = top!.window.location.href;
            }
            break;
          }
        }
      }
    }
    if (!flag) {
      flag = true;
      log.success("匹配历史记录 -> 增加新的");
      let time = Date.now();
      storageDataList = [
        ...storageDataList,
        {
          url: window.location.href,
          topURL: top!.window.location.href,
          ruleKeyName: ruleKeyName,
          ruleIndex: ruleIndex,
          shareCode: shareCode,
          accessCode,
          addTime: time,
          updateTime: time,
          title: document.title || top!.document.title,
          matchText: matchText,
        },
      ];
    }
    this.saveStorageData(storageDataList);
    return true;
  },
  /**
   * 检测并尝试修复本地的数据
   */
  checkAndRepairLocalData() {
    let repairCount = 0;
    let data = GM_getValue<NetDiskHistoryDataOption[]>(this.storageKey);
    if (Array.isArray(data)) {
      for (let index = 0; index < data.length; index++) {
        let repairFlag = false;
        const itemData = data[index];
        if (typeof itemData.matchText !== "string") {
          itemData.matchText = "";
          repairFlag = true;
        }
        if (
          typeof itemData.ruleKeyName !== "string" &&
          // @ts-ignore
          typeof itemData.netDiskName === "string"
        ) {
          // @ts-ignore
          itemData.ruleKeyName = itemData.netDiskName;
          // @ts-ignore
          delete itemData.netDiskName;
          repairFlag = true;
        }
        if (
          typeof itemData.ruleIndex !== "number" &&
          // @ts-ignore
          typeof itemData.netDiskIndex === "number"
        ) {
          // @ts-ignore
          itemData.ruleIndex = itemData.netDiskIndex;
          // @ts-ignore
          delete itemData.netDiskIndex;
          repairFlag = true;
        }
        repairFlag && repairCount++;
      }
    } else {
      data = [];
    }
    this.saveStorageData(data);
    return {
      count: data.length,
      repairCount: repairCount,
    };
  },
  /**
   * 获取历史匹配到的链接
   */
  getStorageData(): NetDiskHistoryDataOption[] {
    let data = GM_getValue<NetDiskHistoryDataOption[]>(this.storageKey, []);
    if (data == null) {
      data = [];
      this.saveStorageData(data);
    }
    return data;
  },
  /**
   * 保存数据到本地存储的链接数据
   */
  saveStorageData(data: NetDiskHistoryDataOption[]) {
    GM_setValue(this.storageKey, data);
  },
  /**
   * 删除存储的某个项
   * @param dataJSONText
   */
  deleteStorageData(dataJSONText: string) {
    let isSuccess = false;
    let data = this.getStorageData();
    for (let index = 0; index < data.length; index++) {
      if (JSON.stringify(data[index]) === dataJSONText) {
        log.success("删除 ===> ", data[index]);
        data.splice(index, 1);
        isSuccess = true;
        break;
      }
    }
    if (isSuccess) {
      this.saveStorageData(data);
    }
    return isSuccess;
  },
  /**
   * 清空所有配置
   */
  clearStorageData() {
    this.saveStorageData([]);
  },
};
