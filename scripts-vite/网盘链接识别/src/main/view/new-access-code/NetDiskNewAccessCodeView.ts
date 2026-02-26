import { DOMUtils, log } from "@/env";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskRegularExtractor } from "@/main/NetDiskRegularExtractor";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskHandlerUtil } from "@/utils/NetDiskHandlerUtil";
import { NetDiskHistoryMatchView } from "../history-match/NetDiskHistoryMatchView";
import { NetDiskView } from "../NetDiskView";

type OkCallBackOption = {
  /** 该分享码是否在已匹配的字典中 */
  isFindInMatchedDict: boolean;
  /** 是否成功同步至已匹配的字典 */
  isUpdatedMatchedDict: boolean;
  /** 是否成功同步至历史匹配记录 */
  isUpdatedHistoryMatched: boolean;
  /** 新的访问码 */
  accessCode: AccessCodeNonNullType;
};
/**
 * 需要重新输入新密码的弹窗
 * @param title 标题
 * @param ruleKeyName 规则键名
 * @param ruleIndex 规则的索引下标
 * @param shareCode 分享码
 * @param accessCode 访问码
 * @param editSuccessCallBack 修改成功的回调
 * @param dialogConfig 弹窗配置
 */
export const NetDiskNewAccessCodeView = function (
  title: string = "密码错误",
  ruleKeyName: string = "",
  ruleIndex: number,
  shareCode: string,
  accessCode: AccessCodeType,
  editSuccessCallBack: (option: OkCallBackOption) => void = () => {},
  dialogConfig?: {
    /** （默认启用）是否启用弹窗，如果true，则可手动修改传入的访问码，如果false，则把传入的访问码自动更新为新的访问码 */
    enable?: boolean;
    /** 弹窗关闭的回调，如果enable为false，则不触发该回调 */
    closeCallBack?: () => void;
  }
) {
  const callback = (userInputAccessCode: AccessCodeType) => {
    // 处理已显示的链接
    userInputAccessCode = userInputAccessCode ?? "";
    const uiLink = NetDiskRegularExtractor.extractShowLink({
      ruleKeyName,
      ruleIndex,
      shareCode,
      accessCode: userInputAccessCode,
    });
    if (!uiLink) {
      return;
    }
    const $currentItem = NetDiskView.$el.$linkView?.$shadowRoot?.querySelector<HTMLElement>(
      `.netdisk-url a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`
    );
    const $currentHistoryItem = NetDiskView.$el.$historyView?.$shadowRoot?.querySelector<HTMLElement>(
      `.netdiskrecord-link a[data-rule-key='${ruleKeyName}'][data-sharecode='${shareCode}']`
    );
    if ($currentItem) {
      $currentItem.setAttribute("data-accesscode", userInputAccessCode);
      DOMUtils.html($currentItem, uiLink);
    }
    // 历史记录的弹出的
    if ($currentHistoryItem) {
      $currentHistoryItem.setAttribute("data-accesscode", userInputAccessCode);
      DOMUtils.html($currentHistoryItem, uiLink);
    }

    log.info(`${ruleKeyName} 重新输入的密码：${userInputAccessCode}`);

    let callbackOption: OkCallBackOption = {
      /** 该分享码是否在已匹配的字典中 */
      isFindInMatchedDict: false,
      /** 是否成功同步至已匹配的字典 */
      isUpdatedMatchedDict: false,
      /** 是否成功同步至历史匹配记录 */
      isUpdatedHistoryMatched: false,
      /** 新的访问码 */
      accessCode: userInputAccessCode,
    };
    // 更新已匹配到的字典
    // 如果来自历史匹配记录，那字典肯定是空的
    let netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
    if (netDiskDict.has(shareCode)) {
      callbackOption.isFindInMatchedDict = true;
      callbackOption.isUpdatedMatchedDict = true;
      // 字典中存在，更新访问码
      let currentDict = netDiskDict.get(shareCode);
      netDiskDict.set(
        shareCode,
        NetDiskHandlerUtil.createLinkStorageInst(userInputAccessCode, ruleIndex, true, currentDict.matchText)
      );
    }
    // 同步新的访问码到历史匹配记录
    callbackOption.isUpdatedHistoryMatched = NetDiskHistoryMatchView.syncAccessCode(
      ruleKeyName,
      ruleIndex,
      shareCode,
      userInputAccessCode
    );
    editSuccessCallBack(callbackOption);
  };
  if (dialogConfig?.enable ?? true) {
    const accessCodeConfirm = NetDiskPops.prompt(
      {
        title: {
          text: title,
          position: "center",
          html: false,
        },
        btn: {
          reverse: true,
          position: "end",
          cancel: {
            text: "取消",
            callback() {
              accessCodeConfirm.close();
              dialogConfig?.closeCallBack?.();
            },
          },
          close: {
            callback(details) {
              details.close();
              dialogConfig?.closeCallBack?.();
            },
          },
          ok: {
            callback: (event) => {
              // 把输入的新密码去空格
              const userInputAccessCode = event.text.replace(/[\s]*/gi, "");
              callback(userInputAccessCode);
              dialogConfig?.closeCallBack?.();
              event.close();
            },
          },
        },
        content: {
          placeholder: "请重新输入密码",
          focus: true,
          select: true,
          text: accessCode == null ? "" : typeof accessCode === "string" ? accessCode : "",
        },
        style: /*css*/ `
			input{
				font-size: larger;
			}
			`,
      },
      NetDiskView.$config.viewSizeConfig.inputNewAccessCodeView
    );
    /**
     * 注册键盘回车事件
     */
    DOMUtils.onKeyboard(accessCodeConfirm.$shadowRoot, "keypress", (keyName) => {
      if (keyName === "Enter") {
        const $ok = accessCodeConfirm.$shadowRoot.querySelector<HTMLElement>(".pops-prompt-btn-ok")!;
        $ok.click();
      }
    });
  } else {
    callback(accessCode as string);
  }
};
