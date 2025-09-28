import { addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import { ElementUtils } from "@/utils/ElementUtils";
import Qmsg from "qmsg";
import blackHomeCSS from "./css/black-home.css?raw";
import { MTUtils } from "@/utils/MTUtils";

type BlackUserInfo = {
  action: string;
  cid: string;
  dateline: string;
  groupexpiry: string;
  operator: string;
  operatorid: string;
  reason: string;
  uid: string;
  username: string;
  time: number;
};

export const MTBlackHome = {
  $data: {
    cid: "",
  },
  init() {
    this.registerMenu();
  },
  /**
   * 注册菜单
   */
  registerMenu() {
    ElementUtils.registerLeftMenu({
      name: "小黑屋",
      iconColor: "#000000",
      icon: "",
      callback: () => {
        this.showBlackHome();
      },
    });
  },
  /**
   * 显示小黑屋dialog
   */
  async showBlackHome() {
    let $loading = Qmsg.loading("正在获取小黑屋名单中...");
    let blackListInfo = await this.getBlackListInfo("");
    $loading.close();
    if (!blackListInfo) {
      return;
    }
    if (blackListInfo.data.length === 0) {
      Qmsg.error("获取小黑屋名单为空");
      return;
    }
    this.$data.cid = blackListInfo.next_cid;
    let $confirm = pops.confirm({
      title: {
        text: "小黑屋名单",
        position: "center",
      },
      content: {
        text: /*html*/ `
                <div class="blackhome-user-filter">
                    <input placeholder="过滤用户名/操作人员/UID(可正则)">
                </div>
                <div class="blackhome-user-list"></div>
                `,
        html: true,
      },
      btn: {
        ok: {
          text: "下一页",
          callback: async () => {
            let $loading = Qmsg.loading("正在获取小黑屋名单中...");
            log.info("下一页的cid: ", this.$data.cid);
            let nextBlackListInfo = await this.getBlackListInfo(this.$data.cid);
            $loading.close();
            if (!nextBlackListInfo) {
              return;
            }
            this.$data.cid = nextBlackListInfo.next_cid;
            nextBlackListInfo.data.forEach((item) => {
              let $item = this.createListViewItem(item);
              $list.appendChild($item);
            });
            if (nextBlackListInfo.data.length === 0) {
              Qmsg.error("获取小黑屋名单为空");
            } else {
              Qmsg.success(`成功获取 ${nextBlackListInfo.data.length}条数据`);
            }
            DOMUtils.trigger($filterInput, "input");
          },
        },
        cancel: {
          text: "关闭",
        },
      },
      width: "88vw",
      height: "82vh",
      style: blackHomeCSS,
    });

    let $list = $confirm.$shadowRoot.querySelector<HTMLDivElement>(".blackhome-user-list")!;
    let $filterInput = $confirm.$shadowRoot.querySelector<HTMLInputElement>(".blackhome-user-filter input")!;

    blackListInfo.data.forEach((item) => {
      let $item = this.createListViewItem(item);
      $list.appendChild($item);
    });
    Qmsg.success(`成功获取 ${blackListInfo.data.length}条数据`);

    // 设置过滤事件
    let isSeaching = false;
    DOMUtils.on(
      $filterInput,
      ["input", "propertychange"],
      utils.debounce(() => {
        let inputText = $filterInput.value.trim();
        if (isSeaching) {
          return;
        }
        isSeaching = true;
        if (inputText == "") {
          $confirm.$shadowRoot.querySelectorAll(".blackhome-user-item").forEach((item) => {
            item.removeAttribute("style");
          });
          isSeaching = false;
          return;
        }
        let isFind = false;
        $confirm.$shadowRoot.querySelectorAll<HTMLDivElement>(".blackhome-user-item").forEach((item) => {
          if (
            item.getAttribute("data-name")!.match(new RegExp(inputText, "ig")) ||
            item.getAttribute("data-uid")!.trim().match(new RegExp(inputText, "ig")) ||
            item.getAttribute("data-operator")!.match(new RegExp(inputText, "ig"))
          ) {
            /* 匹配到 */
            isFind = true;
            item.removeAttribute("style");
          } else {
            item.setAttribute("style", "display:none;");
          }
        });
        isSeaching = false;
      })
    );

    // 再请求一次更新cid
    let nextBlackListInfo = await this.getBlackListInfo(this.$data.cid);
    if (!nextBlackListInfo) {
      return;
    }
    this.$data.cid = nextBlackListInfo.next_cid;
  },
  /**
   * 获取小黑屋名单信息
   */
  async getBlackListInfo(cid = "") {
    let searchParamsData = {
      mod: "misc",
      action: "showdarkroom",
      cid: cid,
      ajaxdata: "json",
    };
    let response = await httpx.get(`/forum.php?${utils.toSearchParamsStr(searchParamsData)}`, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
      },
      responseType: "json",
    });
    if (!response.status) {
      return;
    }
    let data = utils.toJSON(response.data.responseText) as {
      message: string;
      data: {
        [key: string]: Omit<BlackUserInfo, "time">;
      };
    };
    let cidSplit = data["message"].split("|");
    let next_cid = cidSplit[cidSplit.length - 1]!;

    let blackListData = utils.parseObjectToArray(data["data"]);
    // 添加time值并排序(降序)
    let new_blackListData: BlackUserInfo[] = [];
    let new_blackListData_noTime: BlackUserInfo[] = [];
    blackListData.forEach((item) => {
      let date = item["dateline"].match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g);
      if (date == null) {
        let _time_ = parseInt((Date.now() / 1000).toString());
        let _time_after_count_ = 0;
        let sec_data = item["dateline"].match(/([0-9]+|半)[\s\S]*秒前/); /* xx|半秒前 */
        let min_data = item["dateline"].match(/([0-9]+|半)[\s\S]*分钟前/); /* xx|半分钟前 */
        let hour_data = item["dateline"].match(/([0-9]+|半)[\s\S]*小时前/); /* xx|半小时前 */
        let yesterday_time_data = item["dateline"].match(/昨天[\s\S]*(\d{2}):(\d{2})/); /* 昨天 xx:xx */
        let before_yesterday_time_data = item["dateline"].match(/前天[\s\S]*(\d{2}):(\d{2})/); /* 前天 xx:xx */
        let day_data = item["dateline"].match(/([0-9]+|半)[\s\S]*天前/); /* xx天前 */
        if (sec_data) {
          // @ts-ignore
          sec_data = sec_data[sec_data.length - 1];
          // @ts-ignore
          sec_data = sec_data.replace(/半/g, 0.5);
          // @ts-ignore
          sec_data = parseFloat(sec_data);
          // @ts-ignore
          _time_after_count_ = _time_ - sec_data;
        } else if (min_data) {
          // @ts-ignore
          min_data = min_data[min_data.length - 1];
          // @ts-ignore
          min_data = min_data.replace(/半/g, 0.5);
          // @ts-ignore
          min_data = parseFloat(min_data);
          // @ts-ignore
          _time_after_count_ = _time_ - min_data * 60;
        } else if (hour_data) {
          // @ts-ignore
          hour_data = hour_data[hour_data.length - 1];
          // @ts-ignore
          hour_data = hour_data.replace(/半/g, 0.5);
          // @ts-ignore
          hour_data = parseFloat(hour_data);
          // @ts-ignore
          _time_after_count_ = _time_ - hour_data * 60 * 60;
        } else if (yesterday_time_data) {
          let yesterday_hour_data = yesterday_time_data[1];
          let yesterday_min_data = yesterday_time_data[2];
          _time_after_count_ =
            _time_ - 86400 - parseInt(yesterday_hour_data) * 3600 - parseInt(yesterday_min_data) * 60;
        } else if (before_yesterday_time_data) {
          let before_yesterday_hour_data = before_yesterday_time_data[1];
          let before_yesterday_min_data = before_yesterday_time_data[2];
          _time_after_count_ =
            _time_ - 86400 * 2 - parseInt(before_yesterday_hour_data) * 3600 - parseInt(before_yesterday_min_data) * 60;
        } else if (day_data) {
          // @ts-ignore
          day_data = day_data[day_data.length - 1];
          // @ts-ignore
          day_data = day_data.replace(/半/g, 0.5);
          // @ts-ignore
          day_data = parseFloat(day_data);
          // @ts-ignore
          _time_after_count_ = _time_ - day_data * 60 * 60 * 24;
        }
        // @ts-ignore
        item["time"] = parseInt(_time_after_count_.toString()) * 1000;
        // @ts-ignore
        new_blackListData = new_blackListData.concat(item);
        return;
      } else {
        // @ts-ignore
        date = date[0];
      }
      // @ts-ignore
      item["time"] = utils.formatToTimeStamp(date);
      // @ts-ignore
      new_blackListData = new_blackListData.concat(item);
    });
    utils.sortListByProperty(new_blackListData, "time");
    utils.sortListByProperty(new_blackListData_noTime, "time", false);
    new_blackListData = new_blackListData.concat(new_blackListData_noTime);
    return {
      next_cid: next_cid,
      data: new_blackListData,
    };
  },
  /**
   * 创建黑名单节点
   */
  createListViewItem(userInfo: BlackUserInfo) {
    let $item = DOMUtils.createElement(
      "div",
      {
        className: "blackhome-user-item",
        innerHTML: /*html*/ `
                <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                    <img src="${MTUtils.getAvatar(userInfo["uid"], "big")}" loading="lazy">
                    <div class="blackhome-user-info">
                        <p>${userInfo["username"]}</p>
                        <p>${userInfo["dateline"]}</p>
                    </div>
                    </div>
                    <div class="blackhome-user-action">
                    <p>${userInfo["action"]}</p>
                    <p>到期: ${userInfo["groupexpiry"]}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${userInfo["uid"]}</div>
                    <div class="blackhome-operator">
                    <div class="blackhome-operator-user">
                        <img loading="lazy" src="${MTUtils.getAvatar(userInfo["operatorid"], "big")}">
                        <p>${userInfo["operator"]}</p>
                    </div>
                    <div class="blackhome-operator-user-info">
                    ${userInfo["reason"]}
                    </div>
                    </div>
                </div>
                `,
      },
      {
        "data-name": userInfo.username,
        "data-uid": userInfo.uid,
        "data-operator": userInfo.operator,
        "data-operator-uid": userInfo.operatorid,
      }
    );

    // 添加黑名单头像点击事件
    DOMUtils.on($item, "click", ".blackhome-user img", function () {
      window.open(`home.php?mod=space&uid=${userInfo.uid}&do=profile`, "_blank");
    });
    // 添加操作人头像点击事件
    DOMUtils.on($item, "click", ".blackhome-operator-user img", function () {
      window.open(`home.php?mod=space&uid=${userInfo.operatorid}&do=profile`, "_blank");
    });
    return $item;
  },
};
