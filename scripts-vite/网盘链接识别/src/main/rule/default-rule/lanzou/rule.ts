import { UIInput } from "@components/setting/components/ui-input";
import { NetDiskParse_Lanzou_Config } from "./parse";

export const NetDiskRule_lanzou = (): NetDiskRuleOption => {
  return {
    /** 规则 */
    rule: <NetDiskMatchRuleConfig[]>[
      {
        link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)`,
        link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)`,
        shareCode:
          /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
        shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)/gi,
        shareCodeExcludeRegular: ["lanzouyx"],
        checkAccessCode: /(访问码|密码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{3,})/gi,
        uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#} 提取码: {#accessCode#}`,
        blank: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}`,
        copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}\n密码：{#accessCode#}`,
      },
      {
        link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)`,
        link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)`,
        shareCode:
          /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
        shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\//gi,
        shareCodeExcludeRegular: ["lanzouyx"],
        checkAccessCode: /(访问码|密码|提取码)[\s\S]+/g,
        accessCode: /([0-9a-zA-Z]{3,})/gi,
        uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#} 提取码: {#accessCode#}`,
        blank: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}`,
        copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}\n密码：{#accessCode#}`,
      },
    ],
    /** 设置项 */
    setting: <NetDiskRuleSetting>{
      name: "蓝奏云",
      key: "lanzou",
      configurationInterface: {
        matchRange_text: {
          before: 20,
          after: 10,
        },
        matchRange_html: {
          before: 100,
          after: 15,
        },
        function: {
          enable: true,
          linkClickMode: {
            openBlank: {
              default: true,
            },
            parseFile: {
              enable: true,
            },
            "parseFile-closePopup": {
              enable: true,
            },
          },
          checkLinkValidity: true,
          checkLinkValidityHoverTip: true,
        },
        linkClickMode_openBlank: {
          openBlankAutoFilleAccessCode: true,
          openBlankWithCopyAccessCode: true,
        },
        schemeUri: {
          enable: false,
          isForwardLinearChain: false,
          isForwardBlankLink: false,
          uri: "",
        },
        ownFormList: [
          {
            text: "其它配置",
            type: "container",
            views: [
              UIInput(
                "蓝奏云域名",
                NetDiskParse_Lanzou_Config.MENU_KEY,
                NetDiskParse_Lanzou_Config.DEFAULT_HOST_NAME,
                "",
                void 0,
                `例如：${NetDiskParse_Lanzou_Config.DEFAULT_HOST_NAME}`
              ),
            ],
          },
        ],
      },
    },
  };
};
