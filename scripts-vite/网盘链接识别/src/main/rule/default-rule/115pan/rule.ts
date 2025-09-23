export const NetDiskRule_115pan: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `(115.com|115cdn.com|anxia.com)/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
      link_innerHTML: `(115.com|115cdn.com|anxia.com)\/s\/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
      shareCode: /(115.com|115cdn.com|anxia.com)\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
      shareCodeNeedRemoveStr: /(115.com|115cdn.com|anxia.com)\/s\//gi,
      checkAccessCode: /(提取码|密码|\?password=|访问码)[\s\S]+/gi,
      accessCode: /(提取码|密码|\?password=|访问码)([0-9a-zA-Z]{4})/i,
      paramMatch: /(115.com|115cdn.com|anxia.com)/i,
      uiLinkShow: "{#$1#}/s/{#shareCode#} 提取码: {#accessCode#}",
      blank: "https://{#$1#}/s/{#shareCode#}",
      copyUrl: "https://{#$1#}/s/{#shareCode#}\n密码：{#accessCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "115网盘",
    key: "_115pan",
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
