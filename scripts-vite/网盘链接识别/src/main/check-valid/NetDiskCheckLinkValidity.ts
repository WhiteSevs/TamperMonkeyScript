import { DOMUtils, log, pops, utils } from "@/env";
import { NetDiskCheckLinkValidity_baidu } from "../rule/default-rule/baidu/checkLinkValidity";
import { NetDiskCheckLinkValidity_lanzou } from "../rule/default-rule/lanzou/checkLinkValidity";
import { NetDiskCheckLinkValidity_lanzouyx } from "../rule/default-rule/lanzouyx/checkLinkValidity";
import { NetDiskCheckLinkValidity_tianyiyun } from "../rule/default-rule/tianyiyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_aliyun } from "../rule/default-rule/aliyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_wenshushu } from "../rule/default-rule/wenshushu/checkLinkValidity";
import { NetDiskCheckLinkValidity_123pan } from "../rule/default-rule/123pan/checkLinkValidity";
import { NetDiskCheckLinkValidity_weiyun } from "../rule/default-rule/weiyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_xunlei } from "../rule/default-rule/xunlei/checkLinkValidity";
import { NetDiskCheckLinkValidity_chengtong } from "../rule/default-rule/chengtong/checkLinkValidity";
import { NetDiskCheckLinkValidity_kuake } from "../rule/default-rule/kuake/checkLinkValidity";
import { NetDiskCheckLinkValidity_jianguoyun } from "../rule/default-rule/jianguoyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_onedrive } from "../rule/default-rule/onedrive/checkLinkValidity";
import { NetDiskCheckLinkValidity_uc } from "../rule/default-rule/uc/checkLinkValidity";
import { NetDiskLinkView } from "../view/link-view/NetDiskLinkView";
import { NetDiskCheckLinkValidity_115pan } from "../rule/default-rule/115pan/checkLinkValidity";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import type { HttpxRequestOption } from "@whitesev/utils/dist/types/src/types/Httpx";
import { NetDiskCheckLinkValidity_360yunpan } from "../rule/default-rule/360yunpan/checkLinkValidity";
import { NetDiskCheckLinkValidityStatus } from "./NetDiskCheckLinkValidityStatus";

// 配置的需要校验的网盘
const AllCheckLinkValidityFunction: NetDiskCheckLinkValidityEntrance = {
  baidu: NetDiskCheckLinkValidity_baidu,
  lanzou: NetDiskCheckLinkValidity_lanzou,
  lanzouyx: NetDiskCheckLinkValidity_lanzouyx,
  tianyiyun: NetDiskCheckLinkValidity_tianyiyun,
  // 和彩云校验已失效，需要验证参数
  // hecaiyun: NetDiskCheckLinkValidity_hecaiyun,
  aliyun: NetDiskCheckLinkValidity_aliyun,
  wenshushu: NetDiskCheckLinkValidity_wenshushu,
  _123pan: NetDiskCheckLinkValidity_123pan,
  weiyun: NetDiskCheckLinkValidity_weiyun,
  xunlei: NetDiskCheckLinkValidity_xunlei,
  _115pan: NetDiskCheckLinkValidity_115pan,
  chengtong: NetDiskCheckLinkValidity_chengtong,
  kuake: NetDiskCheckLinkValidity_kuake,
  jianguoyun: NetDiskCheckLinkValidity_jianguoyun,
  onedrive: NetDiskCheckLinkValidity_onedrive,
  uc: NetDiskCheckLinkValidity_uc,
  "360yunpan": NetDiskCheckLinkValidity_360yunpan,
};

/**
 * 校验链接有效性的通用配置
 */
export const NetDiskCheckLinkValidityRequestOption: Partial<HttpxRequestOption> = {
  // 有效性校验时，如果请求错误，禁止Qmsg弹出
  allowInterceptConfig: false,
  // 有效性校验时，如果请求错误，禁止Qmsg弹出
  onerror() {},
  // 有效性校验时，如果请求错误，禁止Qmsg弹出
  ontimeout() {},
};

export type NetDiskCheckLinkValidityInfoConfig = {
  $urlBox: HTMLElement;
  ruleKeyName: string;
  ruleIndex: number;
  shareCode: string;
  accessCode: AccessCodeType;
};

/** 网盘-校验链接有效性 */
export const NetDiskCheckLinkValidity = {
  $data: {
    /** 待检测的列表 */
    subscribeMap: new Map<string, NetDiskCheckLinkValidityOption[]>(),
    /** 待检测的列表是否正在消费中（验证有效性中） */
    subscribeMapConsuming: new Map<string, boolean>(),
    /** 缓存检测完毕的链接 */
    checkValidStatusMapCache: new Map<string, NetDiskCheckLinkValidityStatusInstanceResult>(),
  },
  /**
   * 网盘检查的状态码
   */
  get status() {
    return NetDiskCheckLinkValidityStatus;
  },
  /**
   * 所有的规则的校验函数
   */
  ruleCheckValidFunction: AllCheckLinkValidityFunction,
  /**
   * 校验链接的有效性，这里是用于订阅-消费
   * @param $urlBox
   * @param ruleKeyName
   * @param ruleIndex
   * @param shareCode
   * @param accessCode
   */
  async check(checkInfoConfigList: NetDiskCheckLinkValidityInfoConfig | NetDiskCheckLinkValidityInfoConfig[]) {
    if (!Array.isArray(checkInfoConfigList)) {
      checkInfoConfigList = [checkInfoConfigList];
    }
    for (const checkInfoConfigItem of checkInfoConfigList) {
      const { ruleKeyName } = checkInfoConfigItem;
      if (!this.$data.subscribeMap.has(ruleKeyName)) {
        this.$data.subscribeMap.set(ruleKeyName, []);
      }
      let subscribeMapValue = this.$data.subscribeMap.get(ruleKeyName)!;
      subscribeMapValue.push(checkInfoConfigItem);
    }
    let execCheck = async () => {
      let promiseList: Promise<null>[] = [];
      for (const [ruleKeyName, checkInfoList] of this.$data.subscribeMap.entries()) {
        promiseList.push(
          new Promise(async (resolve) => {
            let isConsuming = this.$data.subscribeMapConsuming.get(ruleKeyName);
            if (isConsuming) {
              // 当前单个规则的有效性校验正在执行中...
              resolve(null);
              return;
            }
            let execCheckConfig = async () => {
              for (let index = 0; index < checkInfoList.length; index++) {
                try {
                  const checkInfo = checkInfoList[index];
                  if (checkInfo.$urlBox.parentElement) {
                    const { needAwait } = await this.checkLinkValidity(checkInfo, false);
                    needAwait && (await utils.sleep(250));
                  }
                  checkInfoList.splice(index, 1);
                  index--;
                } catch (error) {
                  log.error(error);
                }
              }
              const delayCheckCount = this.$data.subscribeMap.get(ruleKeyName)?.length;
              if (delayCheckCount && checkInfoList.length) {
                // 仍有剩余，继续执行
                await execCheckConfig();
              }
            };
            await execCheckConfig();
            this.$data.subscribeMapConsuming.delete(ruleKeyName);
            resolve(null);
          })
        );
      }
      await Promise.all(promiseList);
    };
    await execCheck();
  },
  /**
   * 清空所有待检测的链接
   */
  clearAllDelayCheckLinkValidity() {
    this.$data.subscribeMap.clear();
    this.$data.subscribeMapConsuming.clear();
  },
  /**
   * 开始校验链接的有效性
   * @param checkInfo
   * @param isForceCheck 是否强制检测
   */
  async checkLinkValidity(checkInfo: NetDiskCheckLinkValidityOption, isForceCheck: boolean) {
    const result = {
      needAwait: false,
    };
    const { $checkValidStatus } = NetDiskLinkView.parseBoxItemInfo(checkInfo.$urlBox);
    if (this.isViewCheckValid($checkValidStatus) && !isForceCheck) {
      return result;
    }
    this.setCheckStatusElementToolTip(checkInfo);
    // 网盘键
    const ruleKeyName = checkInfo.ruleKeyName;
    if (!NetDiskRuleData.function.checkLinkValidity(ruleKeyName)) {
      if (import.meta.env.DEV) {
        log.error("该规则未开启checkLinkValidity功能", checkInfo);
      }
      return result;
    }
    const netDiskCheck = this.ruleCheckValidFunction[checkInfo.ruleKeyName];
    if (!netDiskCheck || (netDiskCheck && typeof netDiskCheck.init !== "function")) {
      /* 没有配置该网盘的校验有效性 */
      log.error("该规则未配置有效性校验函数", checkInfo);
      return result;
    }
    const checkConfig: NetDiskCheckLinkValidityInitConfig = {
      ruleIndex: checkInfo.ruleIndex,
      shareCode: checkInfo.shareCode,
      accessCode: checkInfo.accessCode,
    };
    const checkConfigStr = JSON.stringify(checkConfig);
    let checkStatusResult: NetDiskCheckLinkValidityStatusInstanceResult;
    if (!isForceCheck && NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.has(checkConfigStr)) {
      // 命中缓存
      checkStatusResult = NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.get(checkConfigStr)!;
    } else {
      NetDiskCheckLinkValidityStatus.loading.setView($checkValidStatus, checkInfo);
      checkStatusResult = await netDiskCheck.init(checkConfig);
      result.needAwait = true;
      if (!checkStatusResult) {
        log.error("该规则的有效性验证函数的返回值不是有效值", [checkStatusResult, checkInfo]);
        return result;
      }
      if (
        checkStatusResult.code === NetDiskCheckLinkValidityStatus.loading.code ||
        checkStatusResult.code === NetDiskCheckLinkValidityStatus.networkError.code ||
        checkStatusResult.code === NetDiskCheckLinkValidityStatus.verify.code ||
        checkStatusResult.code === NetDiskCheckLinkValidityStatus.unknown.code
      ) {
        // 验证中、网络异常、触发安全验证、未知状态 不进行缓存
        NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.delete(checkConfigStr);
      } else {
        // 缓存检测结果
        NetDiskCheckLinkValidity.$data.checkValidStatusMapCache.set(checkConfigStr, checkStatusResult);
      }
    }
    checkStatusResult.setView($checkValidStatus, checkInfo, checkStatusResult.tipMsg);
    if (checkStatusResult.data) {
      // 设置属性
      Reflect.set($checkValidStatus, "data-httpx-response", checkStatusResult.data);
    }
    return result;
  },
  /**
   * 添加重复检查的点击事件（只触发一次）
   * @param $el 目标元素
   * @param checkInfo 检查信息
   */
  setViewAgainCheckClickEvent($el: HTMLElement, checkInfo: NetDiskCheckLinkValidityOption) {
    DOMUtils.off($el, "click", void 0, void 0, void 0, (value) => {
      return Boolean(value.option.once) && value.originCallBack.toString().includes("this.checkLinkValidity");
    });
    DOMUtils.on(
      $el,
      "click",
      () => {
        const { $urlBox, $link } = NetDiskLinkView.parseBoxItemInfo($el);
        // 解析出元素上的数据
        const ruleInfo = NetDiskLinkView.parseBoxAttrRuleInfo($link);
        // 设置新的检测数据
        let newCheckInfo: NetDiskCheckLinkValidityOption = {
          $urlBox: $urlBox,
          ruleKeyName: ruleInfo.ruleKeyName,
          ruleIndex: ruleInfo.ruleIndex,
          shareCode: ruleInfo.shareCode,
          accessCode: ruleInfo.accessCode,
        };
        this.checkLinkValidity(newCheckInfo, true);
      },
      { once: true }
    );
  },
  /**
   * 判断元素当前是否处于验证状态且验证是error或未验证状态
   *
   * 简而言之。验证成功的图标点击后将不触发验证请求
   * + `true` 已验证(成功/需要密码)
   * + `false` 尚未验证/验证超时/验证网络异常
   * @param $ele
   */
  isViewCheckValid($ele: HTMLElement) {
    if (!$ele.hasAttribute("data-check-valid")) {
      return false;
    }
    if ($ele.getAttribute("data-check-valid") === "error") {
      return false;
    }
    return true;
  },
  /**
   * 设置当前的验证状态
   * @param $ele
   * @param value
   * @param msg
   */
  setViewCheckValid($ele: HTMLElement, value: string, msg: string) {
    $ele.setAttribute("data-check-valid", value);
    $ele.setAttribute("data-msg", msg);
    // Reflect.set($ele, "data-check-valid", value);
    Reflect.set($ele, "data-msg", msg);
  },
  /**
   * 取消设置当前的验证状态
   * @param $ele
   */
  removeViewCheckValid($ele: HTMLElement) {
    $ele.removeAttribute("data-check-valid");
    $ele.removeAttribute("data-msg");
    // Reflect.deleteProperty($ele, "data-check-valid");
    Reflect.deleteProperty($ele, "data-msg");
  },
  /**
   * 判断状态码是成功的
   * @param statusInfo
   */
  isStatusSuccess(statusInfo: NetDiskCheckLinkValidityStatusInstance) {
    if (Math.floor(statusInfo.code / 100) === 2) {
      return true;
    }
    return false;
  },
  /**
   * 根据code获取code的名字
   * @param statusInfo
   */
  getStatusName(statusInfo: NetDiskCheckLinkValidityStatusInstance) {
    for (const statusName of Object.keys(NetDiskCheckLinkValidityStatus)) {
      let statusNewInfo = NetDiskCheckLinkValidityStatus[statusName as keyof typeof NetDiskCheckLinkValidityStatus];
      if (statusInfo.code === statusNewInfo.code) {
        return statusName;
      }
    }
  },
  /**
   * 设置鼠标悬浮事件
   */
  setCheckStatusElementToolTip(checkInfo: NetDiskCheckLinkValidityOption) {
    if (!NetDiskRuleData.function.checkLinlValidityHoverTip(checkInfo.ruleKeyName)) {
      return;
    }
    /**
     * 获取网盘校验状态
     */
    function getNetDiskStatus() {
      const { $checkValidStatus } = NetDiskLinkView.parseBoxItemInfo(checkInfo.$urlBox);
      return $checkValidStatus;
    }
    let $netDiskStatus = getNetDiskStatus();

    if ($netDiskStatus.hasAttribute("data-pops-tooltip")) {
      return;
    }
    $netDiskStatus.setAttribute("data-pops-tooltip", "true");

    /**
     * 获取提示的信息
     */
    let queryMsg = ($el: HTMLElement) => {
      let msgProp: string = Reflect.get($el, "data-msg");
      let msg = $el.getAttribute("data-msg");
      return msgProp ?? msg;
    };
    pops.tooltip({
      $target: $netDiskStatus,
      className: "github-tooltip",
      isFixed: true,
      content() {
        let msg = queryMsg($netDiskStatus);
        return msg;
      },
      showBeforeCallBack() {
        let msg = queryMsg($netDiskStatus);
        if (msg == null || (typeof msg === "string" && msg.trim() === "")) {
          return false;
        }
      },
      zIndex() {
        let maxZIndex = utils.getMaxZIndex(10);
        let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(10).zIndex;
        return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
      },
    });
  },
};
