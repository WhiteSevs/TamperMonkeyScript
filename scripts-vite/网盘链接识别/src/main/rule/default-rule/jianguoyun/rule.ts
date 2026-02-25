export const NetDiskRule_jianguoyun: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
      link_innerHTML: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
      shareCode: /jianguoyun.com\/p\/([0-9a-zA-Z-_]{16,24})/gi,
      shareCodeNeedRemoveStr: /jianguoyun.com\/p\//gi,
      checkAccessCode: /(访问码|密码|提取码|\?password=)[\s\S]+/gi,
      accessCode: /([0-9a-zA-Z]{3,6})/gi,
      uiLinkShow: "jianguoyun.com/p/{#shareCode#} 提取码: {#accessCode#}",
      blank: "https://www.jianguoyun.com/p/{#shareCode#}",
      copyUrl: "https://www.jianguoyun.com/p/{#shareCode#}\n密码：{#accessCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "坚果云",
    key: "jianguoyun",
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
    },
  },
};
