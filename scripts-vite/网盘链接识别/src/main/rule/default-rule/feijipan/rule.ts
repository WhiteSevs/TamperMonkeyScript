export const NetDiskRule_feijipan: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `share.feijipan.com/s/([a-zA-Z0-9_-]{7,14})([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
      link_innerHTML: `share.feijipan.com/s/([a-zA-Z0-9_-]{7,14})([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
      shareCode: new RegExp(`share.feijipan.com/s/([a-zA-Z0-9_-]{7,14})`, "gi"),
      shareCodeNeedRemoveStr: new RegExp(`share.feijipan.com/s/`, "gi"),
      checkAccessCode: /(访问码|密码|提取码)[\s\S]+/g,
      accessCode: /([0-9a-zA-Z]{4})/gi,
      uiLinkShow: "share.feijipan.com/s/{#shareCode#} 提取码: {#accessCode#}",
      blank: "https://share.feijipan.com/s/{#shareCode#}",
      copyUrl: "https://share.feijipan.com/s/{#shareCode#}\n密码：{#accessCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "小飞机网盘",
    key: "feijipan",
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
        isForwardLinearChain: true,
        isForwardBlankLink: true,
        uri: "",
      },
    },
  },
};
