import { log, utils } from "@/env";

/**
 * 规则的工具
 */
export const NetDiskRuleUtils = {
  /**
   * 获取点击动作的默认配置
   */
  getDefaultLinkClickMode() {
    let data: Required<NetDiskRuleSettingConfigurationInterface_Function["linkClickMode"]> = {
      copy: {
        default: false,
        enable: true,
        text: "复制到剪贴板",
      },
      "copy-closePopup": {
        default: false,
        enable: true,
        text: "复制到剪贴板 & 关闭弹窗",
      },
      openBlank: {
        default: false,
        enable: true,
        text: "新标签页打开",
      },
      "openBlank-closePopup": {
        default: false,
        enable: true,
        text: "新标签页打开 & 关闭弹窗",
      },
      parseFile: {
        default: false,
        enable: false,
        text: "文件解析",
      },
      "parseFile-closePopup": {
        default: false,
        enable: false,
        text: "文件解析 & 关闭弹窗",
      },
      own: {
        default: false,
        enable: false,
        text: "自定义动作",
      },
    };
    return data;
  },
  /**
   * 替换占位符，注意区分大小写
   *
   * 例如
   * + {#shareCode#} => xxxx
   * + {#accessCode#} => xxxx
   * + {#$1#} => xxxx
   * @param text
   * @param data
   */
  replacePlaceholder(
    text: string,
    data:
      | {
          [key: string]: string;
        }
      | {
          key: string;
          value: string;
        }[] = {}
  ): string {
    if (typeof text !== "string") {
      return text;
    }
    let iterator: {
      key: string;
      value: string;
    }[] = [];
    if (Array.isArray(data)) {
      iterator = data;
    } else {
      const keys = Object.keys(data);
      iterator = keys.map((key) => {
        const value = data[key];
        return {
          key,
          value,
        };
      });
    }
    for (let i = 0; i < iterator.length; i++) {
      const { key, value: replacedText } = iterator[i];
      if (utils.isNotNull(replacedText)) {
        try {
          text = text.replaceAll(`{#encodeURI-${key}#}`, encodeURI(replacedText));
        } catch {
          log.error("encodeURI-替换的文本失败", [replacedText]);
        }

        try {
          text = text.replaceAll(`{#encodeURIComponent-${key}#}`, encodeURIComponent(replacedText));
        } catch {
          log.error("encodeURIComponent-替换的文本失败", [replacedText]);
        }
        try {
          text = text.replaceAll(`{#decodeURI-${key}#}`, decodeURI(replacedText));
        } catch {
          log.error("decodeURI-替换的文本失败", [replacedText]);
        }
        try {
          text = text.replaceAll(`{#decodeURIComponent-${key}#}`, decodeURIComponent(replacedText));
        } catch {
          log.error("encodeURIComponent-替换的文本失败", [replacedText]);
        }
        text = text.replaceAll(`{#${key}#}`, replacedText);
      }
    }
    return text;
  },
  /**
   * 删除掉所有中文
   *
   * 保留：密码、提取码、访问码
   * @param text
   */
  replaceChinese(text: string) {
    const keywordList = [
      {
        code: "密码",
        replacer: `{#retain-keyword-accesscode-${performance.now() + Math.random()}#}`,
      },
      {
        code: "提取码",
        replacer: `{#retain-keyword-accesscode-${performance.now() + Math.random()}#}`,
      },
      {
        code: "访问码",
        replacer: `{#retain-keyword-accesscode-${performance.now() + Math.random()}#}`,
      },
    ];
    // 删除
    for (let i = 0; i < keywordList.length; i++) {
      const item = keywordList[i];
      text = text.replaceAll(item.code, item.replacer);
    }
    text = text.replace(/[\u4e00-\u9fa5]/g, "");
    // 恢复
    for (let i = 0; i < keywordList.length; i++) {
      const item = keywordList[i];
      text = text.replaceAll(item.replacer, item.code);
    }
    return text;
  },
  /**
   * 获取已解码的当前url
   * @param decodeUrl 当前url
   */
  getDecodeComponentUrl(decodeUrl = window.location.href): string {
    try {
      decodeUrl = decodeURIComponent(decodeUrl);
    } catch {
      // 当前url解码失败
    }
    return decodeUrl;
  },
};
