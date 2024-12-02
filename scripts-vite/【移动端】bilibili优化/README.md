# 【移动端】bilibili优化

> 注：并非所有功能都是默认开启，有些功能需要到油猴菜单中打开【设置】，手动开启功能。
>

一个对移动端bilibili进行优化的油猴脚本。

## 特性

- [x] 修复用户主页跳转404
- [x] 新标签页打开
- [x] 允许复制网页内容
- [x] 阻止唤醒App
- [x] 成分检测（评论区、用户主页）
- [x] 美化视频卡片
- [x] 新增推荐视频tab
- [x] tinyApp（可查看评论-登陆后可看更多）
- [x] 禁止滑动切换底部tab
- [x] ArtPlayer播放器（播放功能强化，可选择视频清晰度）
- [x] 解除番剧区域搜索和播放
- [x] 自动展开全文
- [x] 修复点击跳转视频、用户主页、其它内容
- [x] 等其它功能...

## 安装

> 注：建议使用浏览器扩展执行本脚本。
>
> - 浏览器扩展的功能和Api更完整
> - 非浏览器扩展使用脚本会遇到更多使用上的问题（跨域问题、脚本冲突等）
>

- [x] 浏览器扩展
  - [x] Chrome/Edge [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)、[ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/%E6%9A%B4%E5%8A%9B%E7%8C%B4/eeagobfjdenkkddmbclomhiblgggliao?hl=zh-CN)、[ScriptCat](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB/liilgpjgabokdklappibcjfablkpcekh?hl=zh-CN)
  - [x] Firefox [TamperMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)、[ViolentMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/violentmonkey/)、[ScriptCat](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/)
  - [x] Safari [Stay](https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171)

## 画质解锁

> 注：番剧画质解锁需要设置`Referer`和`User-Agent`鉴权，但`Referer`和`User-Agent`无法通过油猴脚本设置，所以只能通过插件设置。
>
> - 套壳类浏览器例如：`Via浏览器`、`X浏览器`可以把`m.bilibili.com`设定`浏览器标识(UserAgent)`为`iPhone`
> - 可安装扩展的浏览器例如：`可拓`、`Kiwi`、`狐猴`等，需安装插件`Header Editor`
>

| 商店名  | `Header Editor`插件的链接                                                                                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge    | [https://microsoftedge.microsoft.com/addons/detail/header-editor/afopnekiinpekooejpchnkgfffaeceko](https://microsoftedge.microsoft.com/addons/detail/header-editor/afopnekiinpekooejpchnkgfffaeceko) |
| Chrome  | [https://chromewebstore.google.com/detail/header-editor/eningockdidmgiojffjmkdblpjocbhgh?hl=zh-CN](https://chromewebstore.google.com/detail/header-editor/eningockdidmgiojffjmkdblpjocbhgh?hl=zh-CN) |
| Firefox | [https://addons.mozilla.org/zh-CN/firefox/addon/header-editor](https://addons.mozilla.org/zh-CN/firefox/addon/header-editor)                                                                         |

将下面的规则自行创建一个`xxx.json`文件，粘贴进去，导入到插件即可，或者复制链接

[复制配置链接(fastly节点)](https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/scripts-vite/%E3%80%90%E7%A7%BB%E5%8A%A8%E7%AB%AF%E3%80%91bilibili%E4%BC%98%E5%8C%96/HeaderEditor_bangumiRule.json)
[复制配置链接(testingcf节点)](https://testingcf.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/scripts-vite/%E3%80%90%E7%A7%BB%E5%8A%A8%E7%AB%AF%E3%80%91bilibili%E4%BC%98%E5%8C%96/HeaderEditor_bangumiRule.json)
[复制配置链接(gcore节点)](https://gcore.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/scripts-vite/%E3%80%90%E7%A7%BB%E5%8A%A8%E7%AB%AF%E3%80%91bilibili%E4%BC%98%E5%8C%96/HeaderEditor_bangumiRule.json)

```json
{
 "request": [],
 "sendHeader": [
  {
   "enable": true,
   "name": "哔哩哔哩解锁播放限制",
   "ruleType": "modifySendHeader",
   "matchType": "regexp",
   "pattern": "https://.*.(bilivideo.com|akamaized.net|bilivideo.cn).*?",
   "exclude": "",
   "group": "未分组",
   "isFunction": true,
   "action": {
    "name": "referer",
    "value": "https://www.bilibili.com/"
   },
   "code": "for (const index in val) {\n    let headerItem = val[index];\n\tif (headerItem.name.toLowerCase() === 'referer') {\n\t\theaderItem.value = \"https://www.bilibili.com/\"\n\t}else if(headerItem.name.toLowerCase() === 'user-agent'){\n                headerItem.value = \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36\"\n        }\n}"
  }
 ],
 "receiveHeader": [],
 "receiveBody": []
}
```

## 赞赏支持

<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/wx_zsm.png" alt="微信赞赏" width="250" height="250">
<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/zfb_skm.png" alt="支付宝赞赏" width="250" height="250">
