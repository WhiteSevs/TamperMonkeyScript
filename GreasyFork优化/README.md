### GreasyFork的优化

* 在菜单按钮中增加录入登录账号/密码
* 自动登录账号
* 清空已录入的账号/密码
* 在脚本页面添加一个`寻找引用`，用于查询该脚本/库是否被其它的脚本调用
* 在脚本页面中的`今日安装`下面添加`今日检查`
* 美化页面（Markdown/Button/Radio/TextArea）
* 添加复制代码按钮
* 添加Markdown右上角复制按钮
* 源代码同步【脚本列表】
* 源代码同步【未上架的脚本】
* 源代码同步【库】

### 屏蔽规则

| 规则名 | 含义 | 备注 |
| :-- | :-- | :-- |
| codeUrl |脚本代码链接 | 字符串，可正则匹配 |
| scriptId |脚本id | 字符串，可正则匹配 |
| scriptName |脚本名 | 字符串，可正则匹配 |
| scriptDescription | 脚本描述 | 字符串，可正则匹配 |
| scriptAuthorId | 脚本作者id | 字符串，可正则匹配 |
| scriptAuthorName | 脚本作者名 | 字符串，可正则匹配 |
| scriptRatingScore | 脚本评分 | 只支持`>`和`<` |

* 屏蔽脚本名包含`网盘`、`网课`、`视频`、`网购`、`优惠券`

```js
scriptName##网盘|网课|视频|网购|优惠券
```

* 屏蔽脚本评分>`50`或者<`80`的脚本

```js
scriptRatingScore##>50
scriptRatingScore##<80
```

### 菜单截图

![PixPin_2024-03-17_14-09-00.png](https://vip.helloimg.com/i/2024/03/17/65f6893890cc4.png)

![PixPin_2024-03-17_14-02-58.png](https://vip.helloimg.com/i/2024/03/17/65f68723aed08.png)

![PixPin_2024-03-17_14-03-05.png](https://vip.helloimg.com/i/2024/03/17/65f68725b4362.png)

![PixPin_2024-03-17_14-03-16.png](https://vip.helloimg.com/i/2024/03/17/65f6872714cc5.png)

![PixPin_2024-03-17_14-03-23.png](https://vip.helloimg.com/i/2024/03/17/65f6872841136.png)

### 其它图片

![PixPin_2024-03-17_14-16-08.png](https://vip.helloimg.com/i/2024/03/17/65f68a1187455.png)

![PixPin_2024-03-17_14-15-43.png](https://vip.helloimg.com/i/2024/03/17/65f68a14a3537.png)

![PixPin_2024-03-17_14-09-00.png](https://vip.helloimg.com/i/2024/03/17/65f68a163e72b.png)
