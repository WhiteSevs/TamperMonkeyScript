import { DOMUtils, log } from "@/env";
import { NetDiskLinkClickMode } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskRuleUtils } from "@/main/rule/NetDiskRuleUtils";
import Qmsg from "qmsg";
import { GM_getValue } from "ViteGM";
import { ParseFileCore } from "../../../parse/NetDiskParseAbstract";

export class NetDiskParse_Baidu extends ParseFileCore {
  /**
   * 入口
   */
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const url = GM_getValue<string>("baidu-baiduwp-php-url");
    let postForm = GM_getValue<string>("baidu-baiduwp-php-post-form");
    const enableCopy = GM_getValue<boolean>("baidu-baiduwp-php-copy-url");
    if (!url) {
      Qmsg.error("请先在设置中配置百度网盘-网址");
      return;
    }
    if (!postForm) {
      Qmsg.error("请先在设置中配置百度网盘-表单参数");
      return;
    }
    postForm = NetDiskRuleUtils.replaceParam(postForm, {
      shareCode: shareCode,
      accessCode: accessCode!,
    });
    const $form = DOMUtils.createElement("form", {
      action: url,
      method: "post",
      target: "_blank",
    });
    /* POST的表单数据 */
    const formData: {
      [key: string]: string;
    } = {};
    const urlParams = new URLSearchParams(postForm);
    DOMUtils.css($form, "display", "none");
    urlParams.forEach((value, key) => {
      const textAreaElement = document.createElement("textarea");
      textAreaElement.name = key;
      textAreaElement.value = value;
      $form.appendChild(textAreaElement);
      formData[key] = value;
    });
    log.info("表单数据：", formData);
    log.info("访问网址：", url);
    (document.body || document.documentElement).appendChild($form);
    if (enableCopy) {
      NetDiskLinkClickMode.copy("baidu", ruleIndex, shareCode, accessCode, "1.5秒后跳转至解析站");
      setTimeout(() => {
        $form.submit();
      }, 1500);
    } else {
      $form.submit();
    }
  }
}
