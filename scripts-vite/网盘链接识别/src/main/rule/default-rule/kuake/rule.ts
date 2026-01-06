export const NetDiskRule_kuake: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
      link_innerHTML: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
      shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
      shareCodeNeedRemoveStr: /quark.cn\/s\//gi,
      checkAccessCode: /(提取码|密码|访问码|password=|pwd=)[\s\S]+/gi,
      accessCode: /([0-9a-zA-Z]{4})/gi,
      uiLinkShow: "quark.cn/s/{#shareCode#}?pwd={#accessCode#}",
      blank: "https://pan.quark.cn/s/{#shareCode#}?pwd={#accessCode#}",
      copyUrl: "https://pan.quark.cn/s/{#shareCode#}?pwd={#accessCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "夸克网盘",
    key: "kuake",
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
