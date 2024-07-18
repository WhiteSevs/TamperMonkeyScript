# 油猴脚本

脚本一般在`./packages`下

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

## Markdown替换图片正则

```js
// 替换图片的点击跳转至xx链接
\[!\[(.+?)\]\((.+?)\)\]\((.+?)\)
// 替换成
![$1]($2)
```
