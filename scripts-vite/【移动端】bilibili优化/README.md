# TypeScript + Vite

[脚手架](https://github.com/lisonge/vite-plugin-monkey)

## 介绍

建议开启设置中 的`tinyApp`

* 解锁充电限制（虽然没有用）
* 解锁视频画质（最高720p，需要登录账号）
* 解锁番剧画质（最高720p，需要登录账号）注意：需该源有`Referer`和`User-Agent`鉴权
* App推荐视频（需通过油猴菜单->扫码获取access_token，或者设置中手动输入access_token）
* 去除影响观看的元素
* 美化显示
* 伪装登录（对解锁画质无效）
* 覆盖点击事件（阻止唤醒App或下载App）
* 阻止调用App
* 补充视频UP信息
* ...等

## 画质解锁的限制

番剧画质解锁需要设置`Referer`和`User-Agent`鉴权，但`Referer`和`User-Agent`无法通过油猴脚本设置，所以只能通过插件设置

## 画质解锁

需安装插件`Header Editor`

| 商店名  | 链接                                                                                                                                                                                                 |
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
