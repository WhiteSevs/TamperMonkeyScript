# 油猴脚本

单文件脚本在`./scripts`下
Vite开发的脚本在`./scripts-vite`下

## 发布地址

```html
https://greasyfork.org/zh-CN/users/521923-whitesevs
```

## 开发

```text
git clonse https://github.com/WhiteSevs/TamperMonkeyScript.git
cd ./TamperMonkeyScript
pnpm i
```

更新包依赖

```text
pnpm update --latest
```

构建所有的脚本

```text
pnpm run build:all

```

获取包依赖更新

```text
pnpm outdated
```

## Markdown替换图片正则

```js
// 替换图片的点击跳转至xx链接
\[!\[(.+?)\]\((.+?)\)\]\((.+?)\)
// 替换成
![$1]($2)
```

## 兼容事项

* has的语法兼容性，[:has()兼容性查看 Chrome最低105](https://caniuse.com/css-has)
* 优先使用`vw`或`vh`，`dvw`和`dvh`[兼容性查看 Chrome最低108，华为鸿蒙才90多](https://caniuse.com/mdn-css_types_length_viewport_percentage_units_dynamic)
* CSS嵌套语法最好不要用，[Nesting兼容性查看 Chrome最低120](https://caniuse.com/css-nesting)

## 插件`vite-plugin-mkcert`的使用事项

如果想要局域网其它设备信任该证书，需要把`%USERPROFILE%\.vite-plugin-mkcert`下的`rootCA.pem`安装到该设备中
