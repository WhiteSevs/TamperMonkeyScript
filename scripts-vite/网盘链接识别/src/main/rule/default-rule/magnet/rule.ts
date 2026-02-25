export const NetDiskRule_magnet: NetDiskRuleOption = {
  /** 规则 */
  rule: <NetDiskMatchRuleConfig[]>[
    {
      link_innerText: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
      link_innerHTML: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
      shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
      shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
      uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
      blank: "magnet:?xt=urn:btih:{#shareCode#}",
      copyUrl: "magnet:?xt=urn:btih:{#shareCode#}",
    },
  ],
  /** 设置项 */
  setting: <NetDiskRuleSetting>{
    name: "BT磁力",
    key: "magnet",
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
