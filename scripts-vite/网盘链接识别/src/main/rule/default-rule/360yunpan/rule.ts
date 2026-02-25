export const NetDiskRule_360yunpan: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `[0-9a-z]+.(link.yunpan.com|link.yunpan.360.cn)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
      link_innerHTML: `[0-9a-z]+.(link.yunpan.com|link.yunpan.360.cn)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
      shareCode: /(link.yunpan.com|link.yunpan.360.cn)\/lk\/surl_([0-9a-zA-Z]{8,24})/gi,
      shareCodeNeedRemoveStr: /(link.yunpan.com|link.yunpan.360.cn)\/lk\/surl_/gi,
      checkAccessCode: /(访问码|密码|提取码|\?password=)[\s\S]+/gi,
      accessCode: /([0-9a-zA-Z]+)/gi,
      paramMatch: /([0-9a-z]+).(link.yunpan.com|link.yunpan.360.cn)\/lk\//i,
      uiLinkShow: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#} 提取码: {#accessCode#}",
      blank: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#}",
      copyUrl: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#}\n密码：{#accessCode#}",
    },
    {
      link_innerText: `(yunpan.360.cn|www.yunpan.com)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)`,
      link_innerHTML: `(yunpan.360.cn|www.yunpan.com)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)`,
      shareCode: /(yunpan.360.cn|www.yunpan.com)\/lk\/surl_([0-9a-zA-Z]{8,24})/gi,
      shareCodeNeedRemoveStr: /(yunpan.360.cn|www.yunpan.com)\/lk\/surl_/gi,
      checkAccessCode: /(访问码|密码|提取码|\?password=)[\s\S]+/gi,
      accessCode: /([0-9a-zA-Z]+)/gi,
      paramMatch: /(yunpan.360.cn|www.yunpan.com)/i,
      uiLinkShow: "https://{#$1#}/lk/surl_{#shareCode#} 提取码: {#accessCode#}",
      blank: "https://{#$1#}/lk/surl_{#shareCode#}",
      copyUrl: "https://{#$1#}/lk/surl_{#shareCode#}\n密码：{#accessCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "360AI云盘",
    key: "360yunpan",
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
        isForwardLinearChain: false,
        isForwardBlankLink: false,
        uri: "",
      },
    },
  },
};
