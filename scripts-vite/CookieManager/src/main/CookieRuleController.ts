import { DOMUtils, log } from "@/env";
import { CookieManagerService } from "./CookieManagerService";
import { CookieRule } from "./CookieRule";

export const CookieRuleController = {
  init() {
    this.execController();
    DOMUtils.onReady(() => {
      this.execController();
    });
  },
  /**
   * 执行cookie规则处理操作
   */
  async execController() {
    for (let index = 0; index < CookieRule.$data.matchedRuleList.length; index++) {
      const cookieRuleItem = CookieRule.$data.matchedRuleList[index];
      // 对Cookie使用的操作模式
      const operationMode = cookieRuleItem.data.operationMode;
      log.success(`执行规则：${cookieRuleItem.name}`);
      let apiName = cookieRuleItem.data.execApiName;
      if (apiName === "use-global") {
        apiName = void 0;
      }
      const cookieManager = new CookieManagerService(apiName);
      const cookieListResult = await cookieManager.queryAllCookie();
      for (let cookieInfoIndex = 0; cookieInfoIndex < cookieListResult.length; cookieInfoIndex++) {
        // cookie信息
        let cookieInfo = cookieListResult[cookieInfoIndex];
        // 当前cookie名
        const cookieName = cookieInfo.name;
        // 匹配cookie名的规则
        const ruleCookieName = cookieRuleItem.data.cookieName;
        // 该cookie名是否符合规则
        let flag = false;
        if (cookieRuleItem.data.enableRegExpToMatchCookieName) {
          // 使用正则来匹配Cookie名
          let regExpCookieName = new RegExp(ruleCookieName, "i");
          if (regExpCookieName.test(cookieName)) {
            flag = true;
          }
        } else {
          // 使用字符匹配Cookie名
          if (cookieName.includes(ruleCookieName)) {
            flag = true;
          }
        }
        if (flag) {
          if (operationMode === "delete") {
            // 删除Cookie
            cookieManager.deleteCookie(cookieInfo);
          } else if (operationMode.startsWith("extended")) {
            // 延期Cookie
            let currentTime = Date.now();
            let oneMonth = 30 * 24 * 60 * 60 * 1000;
            let threeMonth = oneMonth * 3;
            let halfAYear = oneMonth * 6;
            let oneYear = oneMonth * 12;
            let checkTime = oneMonth;
            if (operationMode === "extended-90") {
              checkTime = threeMonth;
            } else if (operationMode === "extended-180") {
              checkTime = halfAYear;
            } else if (operationMode === "extended-360") {
              checkTime = oneYear;
            }
            let updateFlag = false;
            if (cookieManager.cookieManagerApiName === "document.cookie") {
              // 直接延期，毕竟不知道过期时间
              (<GMCookieInstance>cookieInfo).expirationDate = currentTime + checkTime;
              updateFlag = true;
            } else if (cookieManager.cookieManagerApiName === "cookieStore") {
              let expireTime = (<CookieStoreData>cookieInfo).expires;
              // 毫秒
              if (typeof expireTime === "number" && expireTime - currentTime < checkTime) {
                (<CookieStoreData>cookieInfo).expires = expireTime + checkTime;
                updateFlag = true;
              }
            } else if (
              cookieManager.cookieManagerApiName === "GM_cookie" ||
              cookieManager.cookieManagerApiName === "GM.cookie"
            ) {
              let expireTime = (<GMCookieInstance>cookieInfo).expirationDate;
              // 秒级
              if (typeof expireTime === "number" && expireTime * 1000 - currentTime < checkTime) {
                (<GMCookieInstance>cookieInfo).expirationDate = expireTime + checkTime / 1000;
                updateFlag = true;
              }
            } else {
              log.error("未知的cookieManagerApiName", cookieManager.cookieManagerApiName);
            }
            if (updateFlag) {
              await cookieManager.updateCookie(cookieInfo);
            }
          }
        }
      }
    }
  },
};
