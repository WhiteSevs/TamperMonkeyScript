export const NetDiskRule_ed2k: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|`,
      link_innerHTML: `ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|`,
      shareCode: /ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|([a-fA-F0-9]{32})\|/gi,
      shareCodeNeedRemoveStr: / /gi,
      checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
      accessCode: /([0-9a-zA-Z]{4})/gi,
      paramMatch: /ed2k:\/\/\|file\|([^\|]+)\|(\d+)\|([a-fA-F0-9]{32})\|/i,
      uiLinkShow: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
      blank: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
      copyUrl: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "ed2k",
    key: "ed2k",
    configurationInterface: {
      function: {
        enable: true,
        linkClickMode: {
          openBlank: {
            default: true,
          },
          "openBlank-closePopup": {
            enable: true,
          },
          parseFile: {
            enable: true,
            text: "元数据预览",
          },
          "parseFile-closePopup": {
            enable: true,
            text: "元数据预览 & 关闭弹窗",
          },
        },
      },
      schemeUri: {
        enable: false,
        isForwardBlankLink: true,
        uri: "",
      },
    },
  },
};
