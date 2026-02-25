export const NetDiskRule_weiyun: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
      link_innerHTML: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
      shareCode: /weiyun.com\/([0-9a-zA-Z-_]{7,24})/gi,
      shareCodeNeedRemoveStr: /weiyun.com\//gi,
      shareCodeNotMatch: /^(ftn_handler)/,
      checkAccessCode: /(访问码|密码|提取码)[\s\S]+/g,
      accessCode: /([0-9a-zA-Z]{4,6})/gi,
      uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
      blank: "https://share.weiyun.com/{#shareCode#}",
      copyUrl: "https://share.weiyun.com/{#shareCode#}\n密码：{#accessCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "微云",
    key: "weiyun",
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
