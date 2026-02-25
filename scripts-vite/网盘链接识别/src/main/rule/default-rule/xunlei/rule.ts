export const NetDiskRule_xunlei: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|提取码|密码|\\?pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
      link_innerHTML: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|提取码|密码|\\?pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
      shareCode: /xunlei.com\/s\/([0-9a-zA-Z-_]{8,30})/gi,
      shareCodeNeedRemoveStr: /xunlei.com\/s\//gi,
      checkAccessCode: /(访问码|密码|提取码|\?pwd=)[\s\S]+/g,
      accessCode: /([0-9a-zA-Z]{4})/gi,
      uiLinkShow: "pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}",
      blank: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
      copyUrl: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "迅雷云盘",
    key: "xunlei",
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
        isForwardBlankLink: true,
        uri: "",
      },
    },
  },
};
