import { $$, DOMUtils, log, MenuRegister, utils } from "@/env";
import { NetDiskHandlerUtil } from "@/utils/NetDiskHandlerUtil";
import { CommonUtil } from "@components/utils/CommonUtil";
import { RulePanelView } from "@components/utils/RulePanelView";
import type { UtilsGMMenuOption } from "@whitesev/utils/dist/types/src/types/UtilsGMMenu";
import { GM_getValue } from "ViteGM";
import Qmsg from "qmsg";
import { NetDisk } from "../NetDisk";
import { NetDiskHandler } from "../NetDiskHandler";
import { NetDiskRuleManager } from "../NetDiskRuleManager";
import { CharacterMapping } from "../character-mapping/CharacterMapping";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDiskPops } from "../pops/NetDiskPops";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";
import { NetDiskView } from "../view/NetDiskView";
import { NetDiskHistoryMatchView } from "../view/history-match/NetDiskHistoryMatchView";
import { NetDiskSuspensionConfig } from "../view/suspension/NetDiskSuspensionView";
import { WebsiteRule } from "../website-rule/WebsiteRule";
import { NetDiskWorkerInitError } from "./NetDiskWorkerInitError";
import { NetDiskWorkerUtils } from "./NetDiskWorkerUtils";
import { NetDiskXhrHook } from "./NetDiskXhrHook";

const vue = new utils.Vue();

const reactive = vue.reactive({
  domChange: true,
});

/** Woker */
export const NetDiskWorker = {
  $data: {
    /** 触发匹配，但是处于匹配中，计数器保存匹配数，等待完成匹配后再执行一次匹配 */
    delayNotMatchCount: 0,
    /** worker的Blob链接 */
    blobUrl: "",
    /** worker对象 */
    GM_matchWorker: null as any as Worker,
  },
  $flag: {
    /**
     * 是否成功初始化Worker传入执行
     */
    isInit: false,
    /** 是否正在匹配中 */
    isHandleMatch: false,
    /**
     * 主动触发监听DOM变化的事件
     *
     * 主动设置true将会主动触发识别
     */
    dispatchMonitorDOMChange: false,
  },
  $key: {
    /** 不再弹出Worker初始化失败的提示 */
    neverTipWorkerInitErrorKey: "never-toast-worker-error",
    /** 跨域传递消息的类型 */
    postMessageType: "worker-init-error",
  },
  $check: {
    checkTimeId: void 0 as number | undefined,
    /** 初始化Worker失败的错误的对象实例 */
    workerInitError: null as Error | null | undefined,
  },
  init() {
    this.listenWorkerInitErrorDialog();
    this.initWorker();
    this.monitorDOMChange();
    this.testWorkerConnect();
  },
  /**
   * 初始化Worker对象
   */
  initWorker() {
    try {
      // 需要注意的是Worker内是不能访问全局document的
      const workerJs = /*js*/ `
(() => {
    function ${NetDiskWorker.handleRegularMatch.toString()}

    function ${NetDiskWorker.uniqueArr}
    
    this.addEventListener(
    "message",
    function (event) {
        const data = event.data;
        let matchedList = [];
        ${NetDiskWorker.handleRegularMatch.name}(data,(matchData)=>{
          matchedList.push(matchData);
          data.textList = matchData.textList;
        })
        matchedList = ${NetDiskWorker.uniqueArr.name}(matchedList);
        this.postMessage({
          options: data,
          msg: "Match End",
          data: matchedList,
          startTime: data.startTime,
          endTime: Date.now(),
        });
    },
    {
        capture: true,
    }
    );
})();`;
      const workerScript = new Blob([workerJs], {
        type: "application/javascript",
      });
      let workerUrl: string = window.URL.createObjectURL(workerScript);
      if (window.trustedTypes && typeof window.trustedTypes.createPolicy === "function") {
        // 使用这个后虽然不报错，但是仍会有blob错误
        // violates the following Content Security Policy directive: "worker-src 'self'". The action has been blocked.
        // 且这个错误无法使用try/catch捕捉，导致本该提醒使用手动匹配的结果并无提醒弹窗
        const workerPolicy = window.trustedTypes.createPolicy("workerPolicy", {
          createScriptURL: (url: string) => url,
        });
        workerUrl = workerPolicy.createScriptURL(workerUrl);
      }
      this.$data.blobUrl = workerUrl;
      this.$data.GM_matchWorker = new Worker(this.$data.blobUrl);
      this.$data.GM_matchWorker.onmessage = this.onMessage;
      this.$data.GM_matchWorker.onerror = this.onError;
      log.info(`Worker(Blob Url): ${this.$data.blobUrl}`);
    } catch (error: any) {
      this.coverWorker(error);
    } finally {
      // 释放
      if (typeof this.$data.blobUrl === "string") {
        globalThis.URL.revokeObjectURL(this.$data.blobUrl);
      }
      this.$data.blobUrl = "";
    }
  },
  /**
   * 检测页面中是否存在Worker的CSP策略
   */
  testWorkerConnect() {
    const timeout = 2500;
    utils.hasWorkerCSP(timeout).then((isCSP) => {
      if (isCSP) {
        this.$check.workerInitError = new Error(
          `test Worker postMessage data timeout with ${timeout}ms, maybe violates Content Security Policy directive`
        );
        log.error(`page${CommonUtil.isTopWindow() ? "" : "(iframe)"} has Worker CSP`);
        this.workerInitFailed();
      } else {
        log.info(`page${CommonUtil.isTopWindow() ? "" : "(iframe)"} not has Worker CSP`);
      }
    });
  },
  /**
   * 自定义覆盖Worker
   */
  coverWorker(error?: Error) {
    if (error != null) {
      this.$check.workerInitError = error;
    }
    log.info(`use local GM_matchWorker`, error);
    // @ts-expect-error
    this.$data.GM_matchWorker = {
      postMessage(data: NetDiskWorkerOptions) {
        return new Promise((resolve) => {
          let matchedList: NetDiskWorkerMatchOption[] = [];
          try {
            NetDiskWorker.handleRegularMatch(data, (matchData) => {
              matchedList.push(matchData);
              data.textList = matchData.textList;
            });
          } catch (error: any) {
            NetDiskWorker.onError(error);
          } finally {
            matchedList = NetDiskWorker.uniqueArr(matchedList);
            NetDiskWorker.onMessage(
              new MessageEvent("message", {
                data: {
                  isInitTest: true,
                  options: data,
                  msg: "Match End",
                  data: matchedList,
                  startTime: data.startTime,
                  endTime: Date.now(),
                },
              })
            );
            resolve(null);
          }
        });
      },
    };
  },
  /**
   * 处理规则匹配
   *
   * 传入的规则肯定是允许执行匹配的规则
   * @param workerOptionData 数据
   * @param callback 成功匹配到的回调
   */
  handleRegularMatch(workerOptionData: NetDiskWorkerOptions, callback: (matchData: NetDiskWorkerMatchOption) => void) {
    // 规则名列表
    const ruleKeyNameList = Object.keys(workerOptionData.matchedRuleOption);

    // 待匹配的文本
    // 进行字符映射处理
    const matchTextList: string[] = [];
    for (let matchTextItem of workerOptionData.textList) {
      for (let index = 0; index < workerOptionData.characterMapping.length; index++) {
        const characterMapping = workerOptionData.characterMapping[index];
        try {
          if (typeof characterMapping.searchValue === "string") {
            matchTextItem = matchTextItem.replaceAll(characterMapping.searchValue, characterMapping.replaceValue);
          } else {
            matchTextItem = matchTextItem.replace(characterMapping.searchValue, characterMapping.replaceValue);
          }
        } catch {}
      }
      matchTextList.push(matchTextItem);
    }

    for (const ruleKeyName of ruleKeyNameList) {
      const ruleOption = workerOptionData.matchedRuleOption[ruleKeyName];
      for (let index = 0; index < ruleOption.length; index++) {
        const netDiskRegularItem = ruleOption[index];
        // if (
        // 	netDiskRegularItem["enable"] != null &&
        // 	!netDiskRegularItem["enable"]
        // ) {
        // 	continue;
        // }
        // 匹配规则数组
        let matchRegExpList: RegExp[] = [];
        if (workerOptionData.matchTextRange.includes("innerText")) {
          matchRegExpList.push(new RegExp(netDiskRegularItem["link_innerText"], "gi"));
        }
        if (workerOptionData.matchTextRange.includes("innerHTML")) {
          matchRegExpList.push(new RegExp(netDiskRegularItem["link_innerHTML"], "gi"));
        }
        if (!workerOptionData.matchTextRange.length) {
          log.error(workerOptionData);
          throw new TypeError("未设置匹配范围");
        }
        if (!matchRegExpList.length) {
          throw new TypeError("未知的匹配范围: " + workerOptionData.matchTextRange);
        }
        // 遍历匹配规则进行匹配
        for (let matchRegExpIndex = 0; matchRegExpIndex < matchRegExpList.length; matchRegExpIndex++) {
          // 匹配规则
          const matchRegExp = matchRegExpList[matchRegExpIndex];
          for (let textIndex = 0; textIndex < matchTextList.length; textIndex++) {
            // 匹配文本
            let text = matchTextList[textIndex];
            // 进行规则匹配
            let matchArray = text.match(matchRegExp);
            if (matchArray && matchArray.length) {
              // 匹配成功
              callback({
                ruleKeyName: ruleKeyName,
                ruleIndex: index,
                data: matchArray,
                textList: matchTextList,
              });
            }
          }
        }
      }
    }
  },
  /**
   * 数组去重
   * @param arr 待去重的数组
   */
  uniqueArr(arr: Array<any>) {
    return arr.filter((obj, index, selfArray) => {
      return (
        index ===
        selfArray.findIndex((item) => {
          return JSON.stringify(item) === JSON.stringify(obj);
        })
      );
    });
  },
  /**
   * 监听Worker初始化失败的弹窗
   */
  listenWorkerInitErrorDialog() {
    if (!CommonUtil.isTopWindow()) {
      return;
    }
    // 只做顶层的监听
    DOMUtils.on<MessageEvent>(
      globalThis,
      "message",
      (event) => {
        const messageData = event.data;
        if (typeof messageData === "object" && messageData && messageData?.["type"] === this.$key.postMessageType) {
          const data: NetDiskInitErrorPostMessageObject = messageData.data;
          NetDiskWorker.$check.workerInitError = data.error;
          this.registerWorkerInitErrorNeverTipToast(data.hostname);
          NetDiskPops.confirm(
            {
              title: {
                text: "Worker Init Error",
                position: "center",
              },
              content: {
                text: /*html*/ `
                <div style="padding: 10px;gap: 10px;display: flex;flex-direction: column;">
                  <div class="msg-wrapper">
                    <div class="tip-text">错误：</div>
                    <div class="msg-container" data-type="error">
                      <p>${data.error}</p>
                    </div>
                  </div>
                  <div class="msg-wrapper">
                    <div class="tip-text">链接${CommonUtil.isTopWindow() ? "" : "（iframe）"}：</div>  
                    <div class="msg-container" data-type="url">
                      <p>${data.url}</p>
                    </div>
                  </div>
                  <div class="msg-wrapper">
                    <div class="tip-text">信息：</div>  
                    <div class="msg-container" data-type="msg">
                      <p>初始化Worker失败，若页面文本过大，则执行文本匹配时会导致页面卡死</p>
                    </div>
                  </div>
                  <div class="msg-wrapper">
                    <div class="tip-text">解决：</div>
                    <div class="msg-container" data-type="solution">
                      <div>方案1. 点击下面的<code>快捷添加</code>-<code>自定义</code>，进入后点击<code>设置</code>-<code>功能</code>，然后把<code>匹配模式</code>切换为<code>Menu</code></div>
                      <div>方案2. 安装<code>CSP插件</code>禁用CSP策略（不建议使用）</div>
                    </div>
                  </div>
                </div>
                `,
                html: true,
              },
              style: /*css*/ `
              .msg-wrapper{
                display: flex;
                align-items: baseline;
              }
              .tip-text{
                white-space: nowrap;
              }
              .msg-container{

              }
              .msg-container > p{

              }
              .msg-container[data-type="error"]{
                color: red;
              }
              `,
              btn: {
                merge: true,
                position: "space-between",
                ok: {
                  text: "快捷添加",
                  callback() {
                    const ruleOption = WebsiteRule.getTemplateData();
                    ruleOption.name = "手动匹配：" + data.hostname;
                    ruleOption.url = `^http(s|):\\/\\/${data.hostname}\\/`;
                    ruleOption.data[NetDiskGlobalData.features["netdisk-match-mode"].KEY] =
                      "Menu" as (typeof NetDiskGlobalData.features)["netdisk-match-mode"]["value"];

                    const rulePanelView = new RulePanelView<WebsiteRuleOption>({
                      title() {
                        return "规则管理";
                      },
                      contentConfig: [WebsiteRule.getRulePanelViewOption(ruleOption)],
                    });
                    rulePanelView.showEditView(
                      rulePanelView.option.contentConfig[0].ruleOption,
                      void 0,
                      false,
                      ruleOption,
                      void 0,
                      void 0,
                      void 0,
                      () => {
                        Qmsg.success("添加成功");
                      }
                    );
                  },
                },
                cancel: {
                  text: "网站规则",
                  callback() {
                    NetDiskRuleManager.showView("网站规则");
                  },
                },
                other: {
                  enable: true,
                  text: "不再提示",
                  type: "xiaomi-primary",
                  callback() {
                    NetDiskPops.confirm(
                      {
                        title: {
                          text: "提示",
                          position: "center",
                        },
                        content: {
                          text: `确定不再弹出该提示？（仅针对域名：${data.hostname}）`,
                        },
                        btn: {
                          ok: {
                            callback(eventDetails) {
                              NetDiskWorkerInitError.addHost(data.hostname);
                              eventDetails.close();
                            },
                          },
                        },
                      },
                      {
                        PC: {
                          width: "400px",
                          height: "200px",
                        },
                        Mobile: {
                          width: "80vw",
                          height: "200px",
                        },
                      }
                    );
                  },
                },
              },
            },
            {
              PC: {
                width: "550px",
                height: "450px",
              },
              Mobile: {
                width: "88vw",
                height: "500px",
              },
            }
          );
        }
      },
      { capture: true }
    );
  },
  /**
   * 主动触发Worker初始化失败的弹窗
   */
  dispatchWorkerInitErrorDialog(error?: Error | null) {
    top?.postMessage(
      {
        type: this.$key.postMessageType,
        data: {
          url: window.location.href,
          hostname: window.location.hostname,
          error: error ?? this.$check.workerInitError,
        },
      },
      "*"
    );
  },
  /**
   * 注册油猴菜单-Worker初始化失败但是设置了不再提醒
   * @param hostname
   */
  registerWorkerInitErrorNeverTipToast(hostname: string) {
    let menuText = "💀 Worker初始化失败";
    const menuTextDynamic = () => {
      let flag = NetDiskWorkerInitError.findHost(hostname);
      if (flag) {
        return menuText + "（已设置不再提示）";
      } else {
        return menuText;
      }
    };
    const menuOption: UtilsGMMenuOption = {
      key: "workerInitErrorNeverTipToast-" + hostname,
      text: menuTextDynamic(),
      autoReload: false,
      isStoreValue: false,
      showText: menuTextDynamic,
      callback: () => {
        const findHostFlag = NetDiskWorkerInitError.findHost(hostname);
        if (findHostFlag) {
          const confirmFlag = confirm("是否允许弹出Worker初始化失败的弹窗提示？");
          if (confirmFlag) {
            const flag = NetDiskWorkerInitError.removeHost(hostname);
            if (flag) {
              Qmsg.success(`删除成功`);
            } else {
              Qmsg.error(`删除失败`);
            }
            MenuRegister.update(menuOption);
          }
        } else {
          this.dispatchWorkerInitErrorDialog();
        }
      },
    };
    MenuRegister.update(menuOption);
  },
  /**
   * 传递数据给worker内进行处理匹配
   * @param message 数据
   * @param options 配置
   */
  postMessage(message: NetDiskWorkerOptions, options?: StructuredSerializeOptions) {
    // DEBUG && log.info("Debug-传递数据给worker内进行处理匹配: ", message);
    NetDiskWorker.$data.GM_matchWorker.postMessage(message, options);
  },
  /**
   * Worker的onmessage
   * 这里的this指向会被修改
   * @param event
   */
  onMessage(event: MessageEvent<NetDiskWorkerCallBackOptions>) {
    const data = event.data;
    // DEBUG && log.info(`Debug-匹配结束,用时${Date.now() - data.startTime}ms: `, data);
    // if (data.data.length) {
    // 	DEBUG && log.success(`Debug-成功匹配${data.data.length}个，用时${Date.now() - data.startTime}ms`);
    // }
    if (data.options.from === "PasteText" || data.options.from === "ShortCut-Select-Content") {
      NetDiskView.$inst.matchPasteText.workerMatchEndCallBack(data);
    }
    if (data.options.from.startsWith("FirstLoad")) {
      // 依次执行所有的首次加载
      NetDiskWorker.$data.delayNotMatchCount++;
    }
    NetDiskWorker.successCallBack(data);
  },
  /**
   * Worker的onerror
   * @param error
   */
  onError(error: ErrorEvent) {
    NetDiskWorker.errorCallBack(error);
  },
  /**
   * worker处理文件匹配后的回调
   * @param options
   */
  successCallBack(options: NetDiskWorkerCallBackOptions) {
    // 匹配为空，释放锁
    if (!options.data.length) {
      NetDiskWorker.matchingEndCallBack();
      return;
    }

    const handleNetDiskList: NetDiskWorkerHandleObject[] = [];
    for (const matchData of options.data) {
      // 已匹配到的网盘，用于显示图标
      NetDisk.$match.matchedInfoRuleKey.add(matchData.ruleKeyName!);
      /**
       * 匹配到的可能很多，使用集合去重
       */
      const matchLinkSet = new Set<string>();
      matchData.data.forEach((item) => {
        matchLinkSet.add(item);
      });

      matchLinkSet.forEach((item) => {
        const handleLink = NetDiskHandler.handleLink({
          ruleKeyName: matchData.ruleKeyName!,
          ruleIndex: matchData.ruleIndex!,
          matchText: item,
        });
        if (handleLink) {
          handleNetDiskList.push({
            shareCode: handleLink.shareCode!,
            accessCode: handleLink.accessCode!,
            ruleKeyName: matchData.ruleKeyName!,
            ruleIndex: matchData.ruleIndex!,
            matchText: item,
          });
        }
      });
    }
    // 过滤掉重复的
    const filterHandleNetDiskList = handleNetDiskList.filter((value, index, selfArray) => {
      const isFind =
        selfArray.findIndex((obj) => {
          // 过滤掉同样配置的
          return (
            obj.accessCode === value.accessCode &&
            obj.ruleIndex === value.ruleIndex &&
            obj.ruleKeyName === value.ruleKeyName &&
            obj.shareCode === value.shareCode
          );
        }) === index;
      return isFind;
    });
    // 设置临时值
    filterHandleNetDiskList.forEach((item) => {
      if (NetDisk.$match.tempMatchedInfo.has(item.ruleKeyName)) {
        const currentTempDict = NetDisk.$match.tempMatchedInfo.get(item.ruleKeyName);
        currentTempDict.set(item.shareCode, item);
      }
    });
    /** 按规则过滤掉当前匹配到的分享码 */
    filterHandleNetDiskList.forEach((item) => {
      let { shareCode, accessCode, ruleKeyName, ruleIndex, matchText } = item;
      // 先找到对应的规则
      const findRuleOptions = NetDisk.$rule.rule.find((item) => item.setting.key === ruleKeyName);
      // 对应的匹配规则
      const ruleOption = findRuleOptions!.rule[ruleIndex];

      // 过滤掉黑名单中的
      let isBlackListShareCode = false;
      NetDisk.$match.blackMatchedInfo.forEach((blackMatchInfoItem, blackList_ruleKeyName) => {
        // 规则名也要相同
        if (blackList_ruleKeyName !== item.ruleKeyName) {
          return;
        }
        const isFindBlackShareCode = blackMatchInfoItem.has(shareCode);
        if (isFindBlackShareCode) {
          // 黑名单的分享码相同
          isBlackListShareCode = true;
          log.warn(`匹配到黑名单分享码，已过滤：${shareCode}`, CommonUtil.toStr(item));
        }
      });
      if (isBlackListShareCode) {
        // 是黑名单的访问码，退出
        return;
      }
      if (ruleOption.shareCodeExcludeRegular && Array.isArray(ruleOption.shareCodeExcludeRegular)) {
        // 排除掉在目标规则已匹配到的shareCode
        for (const excludeRegularName of ruleOption.shareCodeExcludeRegular) {
          const excludeDict = NetDisk.$match.matchedInfo.get(excludeRegularName);
          const currentTempDict = NetDisk.$match.tempMatchedInfo.get(excludeRegularName);
          if (excludeDict.startsWith(shareCode) || currentTempDict.startsWith(shareCode)) {
            log.warn(`${ruleKeyName}：该分享码【${shareCode}】与已匹配到该分享码的规则【${excludeRegularName}】冲突`);
            return;
          }
        }
      }

      /** 当前存储的 */
      const currentDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
      NetDisk.$data.isMatchedLink = true;
      if (currentDict.startsWith(shareCode)) {
        // 存在该分享码
        // 根据分享码获取访问码等信息
        const shareCodeDict = currentDict.getStartsWith(shareCode)!;
        if (typeof shareCodeDict.isForceAccessCode === "boolean" && shareCodeDict.isForceAccessCode) {
          // 该访问码已被锁定，禁止修改，应该是自己修改的访问码
          return;
        }
        if (utils.isNotNull(shareCodeDict.accessCode)) {
          // 已匹配到的访问码已有值，不替换
          return;
        }
        if (utils.isNull(accessCode)) {
          // 新获取到的访问码为空，不替换
          return;
        }

        currentDict.set(shareCode, NetDiskHandlerUtil.createLinkStorageInst(accessCode, ruleIndex, false, matchText));
        // 修改视图
        NetDiskView.$inst.linkView.changeBoxItemView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
        log.info(`该匹配项无密码，设置密码 ${ruleKeyName} ${ruleIndex}: ${shareCode}  ===> ${accessCode}`);
      } else {
        // 不存在该访问码，添加新的进去

        // 判断访问码是否为空，为空则从历史匹配记录中获取（如果开启了功能）
        if (utils.isNull(accessCode) && NetDiskGlobalData.accessCode.allowQueryHistoryMatchingAccessCode.value) {
          const historyMatchAccessCode = NetDiskHistoryMatchView.queryAccessCode(ruleKeyName, shareCode, true);
          if (historyMatchAccessCode) {
            log.info("历史匹配记录 ==> 查询到访问码：" + historyMatchAccessCode);
            accessCode = historyMatchAccessCode;
          }
        }
        currentDict.set(shareCode, NetDiskHandlerUtil.createLinkStorageInst(accessCode, ruleIndex, false, matchText));
        NetDiskView.$data.isMatchedNetDiskIconMap.add(ruleKeyName);
        NetDiskView.$inst.linkView.addBoxItemView(ruleKeyName, ruleIndex, shareCode, accessCode, matchText);
        log.success(`添加链接 ${ruleKeyName} ${ruleIndex}: ${shareCode}  ===> ${accessCode}`);
      }
    });

    // 清空临时的
    Object.keys(NetDisk.$match.tempMatchedInfo.getItems()).forEach((keyName) => {
      NetDisk.$match.tempMatchedInfo.get(keyName).clear();
    });
    // 判断是否有匹配
    if (NetDisk.$data.isMatchedLink) {
      // 根据当前情况选择显示的视图
      switch (NetDiskGlobalData.features["netdisk-behavior-mode"].value) {
        case "suspension_smallwindow".toLowerCase():
          if (NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value === "suspension") {
            NetDiskView.$inst.suspension.init();
          } else {
            NetDiskView.$inst.linkView.show();
          }
          break;
        case "suspension_window".toLowerCase():
          if (NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode.value === "suspension") {
            NetDiskView.$inst.suspension.init();
          } else {
            NetDiskView.$inst.linkView.show();
          }
          break;
        case "smallwindow".toLowerCase():
          NetDiskView.$inst.linkView.show();
          break;
        default:
          log.error("未知的行为模式：" + NetDiskGlobalData.features["netdisk-behavior-mode"].value);
      }
    }
    NetDiskWorker.matchingEndCallBack();
  },
  /**
   * Worker失败回调
   * @param error
   */
  errorCallBack(error: ErrorEvent) {
    NetDiskWorker.matchingEndCallBack(true);
    log.error("Worker Error CallBack" + (CommonUtil.isTopWindow() ? "" : " (iframe)"), error);
  },
  /**
   * 匹配结束回调
   * @param isResolveLock 是否立刻释放锁
   */
  matchingEndCallBack(isResolveLock?: boolean) {
    if (isResolveLock) {
      NetDiskWorker.$flag.isHandleMatch = false;
      if (NetDiskWorker.$data.delayNotMatchCount > 0) {
        NetDiskWorker.$data.delayNotMatchCount = 0;
        reactive.domChange = true;
      }
    } else {
      const delaytime = parseFloat(NetDiskGlobalData.match.delaytime.value.toString()) * 1000;
      setTimeout(() => {
        NetDiskWorker.matchingEndCallBack(true);
      }, delaytime);
    }
  },
  /**
   * Worker初始化失败了
   */
  workerInitFailed() {
    this.coverWorker();
    const matchMode = NetDiskGlobalData.features["netdisk-match-mode"].value;
    if (matchMode === "Menu") {
      return;
    }
    /** 是否 不再提示Worker错误 */
    let neverToastWorkerError = GM_getValue<string[]>(this.$key.neverTipWorkerInitErrorKey, []);
    if (!Array.isArray(neverToastWorkerError)) {
      neverToastWorkerError = [neverToastWorkerError];
    }
    if (this.$check.workerInitError != null || this.$flag.isInit == false) {
      log.error(
        "初始化Worker失败，可能页面使用了Content-Security-Policy策略，当前已使用其它函数来代替Worker执行文本匹配，如果执行匹配的文本的内容过大会时，则会导致页面卡死",
        this.$check.workerInitError
      );
      const findHostName = neverToastWorkerError.find((it) => it === window.location.hostname);
      if (findHostName) {
        this.registerWorkerInitErrorNeverTipToast(findHostName);
      } else {
        // 弹出弹窗
        this.dispatchWorkerInitErrorDialog();
      }
    }
  },
  /**
   * 监听页面节点内容或节点文本的变动，从而进行匹配网盘链接
   */
  monitorDOMChange() {
    /** 设置-判定为添加元素才进行匹配 */
    const isAddedNodeToMatch = NetDiskGlobalData.match.isAddedNodesToMatch.value;
    /** 读取剪贴板内容 */
    const readClipboard = NetDiskGlobalData.match.readClipboard.value;
    /** 匹配文本范围 */
    const matchRange = NetDiskGlobalData.match.pageMatchRange.value;
    /** 是否是首次加载，首次加载时，优先进行当前网址和剪贴板的匹配，然后才是页面内容匹配，防止页面内容匹配时间过长影响体验 */
    let isFirstLoad = true;
    /** 是否是首次加载页面文本，该项需要匹配范围为all，那么会分批次匹配，优先innerText，然后innerHTML */
    let isFirstLoadPageText = true;
    /** 是否是首次加载页面文本，该项需要匹配范围为all，那么会分批次匹配，优先innerText，然后innerHTML */
    let isFirstLoadPageHTML = true;
    /** 是否深度遍历shadowRoot */
    const isDepthAcquisitionWithShadowRoot = NetDiskGlobalData.match.depthQueryWithShadowRoot.value;

    /** 过滤出执行匹配的规则 */
    const matchedRuleOption: NetDiskMatchedRuleOption = {};
    /** 字符映射规则 */
    const characterMapping = CharacterMapping.getMappingData();
    // 循环
    NetDisk.$rule.rule.forEach((item) => {
      // 规则键名
      const ruleKeyName = item.setting.key;
      // 启用状态
      const ruleEnable = NetDiskRuleData.function.enable(ruleKeyName);
      if (!ruleEnable) {
        return;
      }
      if (Reflect.has(matchedRuleOption, ruleKeyName)) {
        // 已有规则、追加
        matchedRuleOption[ruleKeyName] = [...matchedRuleOption[ruleKeyName], ...item.rule];
      } else {
        // 设置规则
        Reflect.set(matchedRuleOption, ruleKeyName, item.rule);
      }
    });
    /**
     * 观察者的事件
     * @param mutations 改变的节点集合
     */
    const observeEvent = async function (mutations?: MutationRecord[]) {
      if (NetDiskWorker.$flag.isHandleMatch) {
        // 判断当前是否正在处理规则匹配字符串中
        NetDiskWorker.$data.delayNotMatchCount++;
        return;
      }
      if (isAddedNodeToMatch && mutations && mutations.length) {
        // 设定为添加元素才匹配且观察器检测到改变的元素
        /** 判断是否存在添加的元素 */
        let hasAddedNode = false;
        for (let index = 0; index < mutations.length; index++) {
          const mutation = mutations[index];
          if (mutation.addedNodes && mutation.addedNodes instanceof NodeList) {
            if (mutation.addedNodes.length) {
              hasAddedNode = true;
              break;
            }
          }
        }
        if (!hasAddedNode) {
          return;
        }
      }
      NetDiskWorker.$flag.isHandleMatch = true;
      /** 开始时间 */
      const startTime = Date.now();
      if (readClipboard) {
        try {
          let clipboardInfo = await utils.getClipboardInfo();
          if (clipboardInfo.error != null) {
            NetDisk.$data.clipboardText = clipboardInfo.content;
          }
        } catch {
          // 获取剪贴板内容失败
        }
      }
      if (typeof NetDisk.$data.clipboardText !== "string") {
        NetDisk.$data.clipboardText = "";
      }
      /** 待匹配的文字列表 */
      const toMatchedTextList: string[] = [];

      // 剪贴板内容
      if (utils.isNotNull(NetDisk.$data.clipboardText)) {
        const clipboardText = NetDisk.$data.clipboardText;
        toMatchedTextList.push(clipboardText);
      }
      // 当前的网页链接
      if (NetDiskGlobalData.match.allowMatchLocationHref.value) {
        const decodeComponentUrl = NetDiskRuleUtils.getDecodeComponentUrl();
        toMatchedTextList.push(decodeComponentUrl);
      }
      if (isFirstLoad) {
        // 首次加载
        isFirstLoad = false;
        // 通知worker执行匹配，优先匹配当前url、剪贴板的内容
        if (toMatchedTextList.length) {
          NetDiskWorker.postMessage({
            characterMapping: characterMapping,
            textList: toMatchedTextList,
            matchTextRange: matchRange,
            matchedRuleOption: matchedRuleOption,
            startTime: startTime,
            from: "FirstLoad-DOMChange",
          });
          return;
        }
      }
      // 匹配页面文本
      if (matchRange.includes("innerText")) {
        // innerText
        const pageTextList = NetDiskWorkerUtils.getPageText(document.documentElement, isDepthAcquisitionWithShadowRoot);
        toMatchedTextList.push(...pageTextList);
        if (isFirstLoadPageText) {
          // 首次加载text
          isFirstLoadPageText = false;
          NetDiskWorker.postMessage({
            characterMapping: characterMapping,
            textList: toMatchedTextList,
            matchTextRange: matchRange,
            matchedRuleOption: matchedRuleOption,
            startTime: startTime,
            from: "FirstLoad-Text-DOMChange",
          });
          return;
        }
      }
      // 匹配页面超文本
      if (matchRange.includes("innerHTML")) {
        // innerHTML
        const pageHTMLList = NetDiskWorkerUtils.getPageHTML(document.documentElement, isDepthAcquisitionWithShadowRoot);
        toMatchedTextList.push(...pageHTMLList);
        if (isFirstLoadPageHTML) {
          // 首次加载html
          isFirstLoadPageHTML = false;
          NetDiskWorker.postMessage({
            characterMapping: characterMapping,
            textList: toMatchedTextList,
            matchTextRange: matchRange,
            matchedRuleOption: matchedRuleOption,
            startTime: startTime,
            from: "FirstLoad-HTML-DOMChange",
          });
          return;
        }
      }
      // 匹配input标签的内容
      if (NetDiskGlobalData.match.toBeMatchedWithInputElementValue.value) {
        const inputValueList = NetDiskWorkerUtils.getInputElementValue(
          document.documentElement,
          isDepthAcquisitionWithShadowRoot
        );
        toMatchedTextList.push(...inputValueList);
      }
      // 匹配textarea标签的内容
      if (NetDiskGlobalData.match.toBeMatchedTextAreaElementValue.value) {
        const textAreaValueList = NetDiskWorkerUtils.getTextAreaElementValue(
          document.documentElement,
          isDepthAcquisitionWithShadowRoot
        );
        toMatchedTextList.push(...textAreaValueList);
      }
      // 发送执行匹配的消息
      NetDiskWorker.postMessage({
        characterMapping: characterMapping,
        textList: toMatchedTextList,
        matchTextRange: matchRange,
        matchedRuleOption: matchedRuleOption,
        startTime: startTime,
        from: "DOMChange",
      });
    };
    // 动态监听是否主动触发监听器
    vue.watch(
      () => reactive.domChange,
      (newValue) => {
        if (newValue) {
          const addedNodes = $$<HTMLElement>("html") as any as NodeList;
          observeEvent([
            {
              addedNodes: addedNodes,
              attributeName: null,
              attributeNamespace: null,
              nextSibling: null,
              oldValue: null,
              previousSibling: null,
              removedNodes: addedNodes,
              target: addedNodes[0],
              type: "attributes",
            },
          ]);
        }
      },
      {
        triggerMethod: "set",
      }
    );
    /** 匹配模式 */
    const matchMode = NetDiskGlobalData.features["netdisk-match-mode"].value;
    // 匹配网络请求的内容
    NetDiskXhrHook.execMatch({
      characterMapping: characterMapping,
      matchTextRange: matchRange,
      matchedRuleOption: matchedRuleOption,
      startTime: Date.now(),
    });
    // 匹配模式 - MutationObserver
    if (matchMode === "MutationObserver") {
      utils.mutationObserver(document.documentElement, {
        callback: observeEvent,
        config: {
          // 子节点的变动（新增、删除或者更改）
          childList: NetDiskGlobalData.match["mutationObserver-childList"].value,
          // 节点内容或节点文本的变动
          characterData: NetDiskGlobalData.match["mutationObserver-characterData"].value,
          // 是否将观察器应用于该节点的所有后代节点
          subtree: NetDiskGlobalData.match["mutationObserver-subtree"].value,
        },
      });
      // 主动触发一下
      reactive.domChange = true;
    } else if (matchMode === "Menu") {
      // 匹配模式 - Menu
      // 注册油猴菜单
      MenuRegister.add({
        key: "performPageTextMatchingManually" + "_" + window.location.href,
        text: "点击执行文本匹配" + (CommonUtil.isTopWindow() ? "" : "（iframe）"),
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          reactive.domChange = true;
        },
      });
    } else {
      log.error("未知匹配模式：" + matchMode);
    }
  },
};
