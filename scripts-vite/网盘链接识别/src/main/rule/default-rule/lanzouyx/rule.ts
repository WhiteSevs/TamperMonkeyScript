export const NetDiskRule_lanzouyx: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?code=)[\\s\\S]{0,{#matchRange-text-after#}}[a-zA-Z0-9]{3,6}|)`,
      link_innerHTML: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?code=)[\\s\\S]{0,{#matchRange-html-after#}}[a-zA-Z0-9]{3,6}|)`,
      shareCode: /ilanzou.com\/s\/([a-zA-Z0-9_-]{5,22})/gi,
      shareCodeNeedRemoveStr: /ilanzou.com\/s\//gi,
      checkAccessCode: /(访问码|密码|提取码|\?code=)[\s\S]+/g,
      accessCode: /([0-9a-zA-Z]{3,})/gi,
      uiLinkShow: `www.ilanzou.com/s/{#shareCode#} 提取码: {#accessCode#}`,
      blank: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
      copyUrl: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "蓝奏云优享",
    key: "lanzouyx",
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
