import { DOMUtils, log, utils } from "@/env";
import { CharacterMapping } from "@/main/character-mapping/CharacterMapping";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskView } from "@/main/view/NetDiskView";
import { NetDiskWorker } from "@/main/worker/NetDiskWorker";
import Qmsg from "qmsg";
import { NetDiskRegularExtractor } from "../NetDiskRegularExtractor";
import { NetDiskUserRule } from "../rule/user-rule/NetDiskUserRule";

/**
 * 调试用户规则
 */
export const NetDiskUserRuleDebug = {
  $el: {
    $select: null as any as HTMLSelectElement,
    $log: null as any as HTMLElement,
    $matchText: null as any as HTMLTextAreaElement,
    $button: null as any as HTMLSpanElement,
  },
  /**
   * 重置环境变量
   */
  reset() {
    Object.keys(this.$el).forEach((keyName) => {
      Reflect.deleteProperty(this.$el, keyName);
    });
  },
  /**
   * 设置日志输出
   * @param tag 日志等级
   * @param args
   */
  setLog(tag: "info" | "error" | "success" | "warn", ...args: any[]) {
    let text = "";
    args.forEach((item) => {
      if (text !== "") {
        text += "\n";
      }
      if (typeof item !== "string") {
        text += JSON.stringify(item, void 0, 4);
      } else {
        text += item;
      }
    });
    const $log = DOMUtils.createElement(
      "p",
      {
        innerText: text,
      },
      {
        "data-tag": tag,
      }
    );
    DOMUtils.append(this.$el.$log, $log);
  },
  /**
   * 清空日志
   */
  clearLog() {
    DOMUtils.empty(this.$el.$log);
  },
  /**
   * 显示调试规则的界面
   * @param ruleJSON
   */
  showUI(ruleJSON: NetDiskUserCustomRule) {
    this.reset();
    if (utils.isNull(ruleJSON.regexp)) {
      Qmsg.error("请先配置regexp");
      return;
    }
    const that = this;
    const customRule = NetDiskUserRule.parseRule([ruleJSON]);
    const regexp = customRule[0].rule;
    const dialog = NetDiskPops.confirm(
      {
        title: {
          text: `调试规则 ${ruleJSON.key}`,
          position: "center",
        },
        content: {
          text: /*html*/ `
          <div class="custom-rule-container">
              <textarea class="custom-rule-match-text" placeholder="请输入需要测试匹配的字符串"></textarea>
              <div class="custom-rule-input-container">
              <select class="custom-rule-select-regexp"></select>
              <button class="custom-rule-run-match-button" type="button" data-type="primary" data-icon="" data-righticon="false">
                  <span>执行</span>
              </button>
              </div>
          </div>
          <div class="custom-rule-match-log">
              <div>匹配日志↓</div>
              <div class="custom-rule-match-log-container"></div>
          </div>
          `,
          html: true,
        },
        btn: {
          ok: {
            enable: false,
          },
        },
        style: /*css*/ `
        .custom-rule-container{
            display: flex;
            align-items: center;
        }
        .custom-rule-select-regexp{
            width: 100%;
            height: 32px;
            line-height: normal;
            border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
            border-radius: 5px;
            text-align: center;
            outline: 0;
            background: rgb(255, 255, 255, var(--pops-bg-opacity));
            box-shadow: none;
        }
        .custom-rule-input-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 5px;
            width: 30%;
        }
        .custom-rule-select-regexp-item{

        }
        button.custom-rule-run-match-button{
            margin-top: 5px;
        }
        textarea.custom-rule-match-text{
            width: 100%;
            min-height: 70px;
            outline: none;
            margin: 0px;
            background-image: none;
            background-color: transparent;
            display: inline-block;
            resize: vertical;
            padding: 5px;
            line-height: normal;
            box-sizing: border-box;
            border: 1px solid rgb(220, 223, 230);
            appearance: none;
        }
        .custom-rule-match-log{

        }
        .custom-rule-match-log-container{
            padding: 5px;
            background: rgb(229, 229, 229);
        }
        .custom-rule-match-log-container p{
            margin: 2px 0px;
            border-bottom: 1px solid #000000;
        }
        .custom-rule-match-log-container p:last-child{
            border-bottom: 0px;
            margin-bottom: 0px;
        }
        .custom-rule-match-log-container p[data-tag]{
          padding: 10px 0px;
        }
        .custom-rule-match-log-container p[data-tag="info"]{

        }
        .custom-rule-match-log-container p[data-tag="success"]{
            color: green;
        }
        .custom-rule-match-log-container p[data-tag="warn"]{
            color: yellow;
        }
        .custom-rule-match-log-container p[data-tag="error"]{
            color: red;
        }
        `,
      },
      NetDiskView.$config.viewSizeConfig.customRuleDebugView
    );
    this.$el.$select = dialog.$shadowRoot.querySelector<HTMLSelectElement>(".custom-rule-select-regexp")!;
    this.$el.$matchText = dialog.$shadowRoot.querySelector<HTMLTextAreaElement>(".custom-rule-match-text")!;
    this.$el.$log = dialog.$shadowRoot.querySelector<HTMLDivElement>(".custom-rule-match-log-container")!;
    this.$el.$button = dialog.$shadowRoot.querySelector<HTMLButtonElement>(".custom-rule-run-match-button")!;
    regexp.forEach((regExpItem, index) => {
      this.$el.$select.appendChild(
        DOMUtils.createElement("option", {
          className: "custom-rule-select-regexp-item",
          innerText: "regexp下标:" + index,
          "data-value": regExpItem,
        })
      );
    });
    /**
     * 日志回调
     * @param logData
     */
    const logCallBack = function (logData: NetDiskDebugLogData) {
      if (Array.isArray(logData.msg)) {
        that.setLog(logData.status ? "info" : "error", ...logData.msg);
      } else {
        that.setLog(logData.status ? "info" : "error", logData.msg);
      }
      if (!logData.status) {
        that.setLog("error", "执行完毕");
      }
    };
    /**
     * 开始调试的事件
     */
    const debugRunClickEvent = function () {
      try {
        if (utils.isNull(that.$el.$matchText.value)) {
          Qmsg.error("请先输入待匹配的字符串");
          return;
        }
        // 清空日志
        that.clearLog();
        /** 网盘名 */
        const ruleKeyName = ruleJSON.key;
        /** 网盘索引下标 */
        const ruleIndex = that.$el.$select.selectedIndex;
        /** 选择的规则 */
        const selectRegularOption = (that.$el.$select.options[ruleIndex] as any)[
          "data-value"
        ] as NetDiskMatchRuleConfig;
        log.info("当前选中的规则: ", selectRegularOption);
        const testCustomRuleOption = <NetDiskMatchedRuleOption>{};
        testCustomRuleOption[ruleJSON.key] = [selectRegularOption];
        let matchTextList: string[] = [];
        NetDiskWorker.handleRegularMatch(
          {
            characterMapping: CharacterMapping.getMappingData(),
            matchedRuleOption: testCustomRuleOption,
            textList: [that.$el.$matchText.value],
            matchTextRange: ["innerText", "innerHTML"],
            startTime: Date.now(),
            from: "Debug",
          },
          (matchData) => {
            matchTextList.push(...matchData.data);
          }
        );
        if (!matchTextList.length) {
          that.setLog("error", "未成功匹配到数据");
          return;
        }
        matchTextList = NetDiskWorker.uniqueArr(matchTextList);
        that.setLog("info", "成功匹配到的数据 ==> ", matchTextList);
        matchTextList.forEach((matchText) => {
          that.setLog("success", "当前处理的字符串: " + matchText);
          that.setLog("success", "当前执行: 对shareCode进行处理获取");
          const shareCode = NetDiskRegularExtractor.extractShareCode({
            ruleKeyName: ruleKeyName,
            ruleIndex: ruleIndex,
            matchText: matchText,
            debugConfig: {
              matchText,
              config: selectRegularOption,
              logCallBack,
            },
          });
          if (utils.isNull(shareCode)) {
            return;
          }
          that.setLog("info", " ");
          that.setLog("info", `================分割线================`);
          that.setLog("info", " ");
          that.setLog("success", "当前执行: 对accessCode进行处理获取");
          const handlerConfig = {
            ruleKeyName,
            ruleIndex,
            shareCode,
            matchText,
            debugConfig: {
              matchText,
              config: selectRegularOption,
              logCallBack,
            },
          };
          const accessCode = NetDiskRegularExtractor.extractAccessCode(handlerConfig);

          that.setLog("info", " ");
          that.setLog("info", `================分割线================`);
          that.setLog("info", " ");
          that.setLog("success", "当前执行: 对uiLinkShow进行处理获取");
          const uiLinkShow = NetDiskRegularExtractor.extractShowLink({
            ruleKeyName: ruleKeyName,
            ruleIndex: ruleIndex,
            shareCode: shareCode,
            accessCode: accessCode,
            matchText: matchText,
            debugConfig: {
              matchText,
              config: selectRegularOption,
              logCallBack,
            },
          });
          that.setLog("info", " ");
          that.setLog("info", `================分割线================`);
          that.setLog("info", " ");
          that.setLog("success", "当前执行: 对blank进行处理获取");
          const blankUrl = NetDiskLinkClickModeUtils.getBlankUrl({
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
            debugConfig: {
              matchText: matchText,
              config: selectRegularOption,
              logCallBack: logCallBack,
            },
          });
          that.setLog("info", " ");
          that.setLog("info", `================分割线================`);
          that.setLog("info", " ");
          that.setLog("success", "当前执行: 对copyUrl进行处理获取");
          const copyUrl = NetDiskLinkClickModeUtils.getCopyUrlInfo({
            ruleKeyName,
            ruleIndex,
            shareCode,
            accessCode,
            debugConfig: {
              matchText,
              config: selectRegularOption,
              logCallBack,
            },
          });
          that.setLog("success", "执行完毕");
        });
      } catch (error: any) {
        log.error(error);
        that.setLog(error.toString());
      }
    };
    DOMUtils.on(that.$el.$button, "click", debugRunClickEvent);
  },
};
