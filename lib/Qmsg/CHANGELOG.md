# v1.6.0

## Fix

- 调整图标垂直位置
- 修复`limitWidthWrap`的默认值的提示错误的问题
- 修复调用`.config`修改全局配置未生效的问题
- 修复当页面已存在实例时，通过调用`.config`修改位置后再调用显示实例，实例不会重新创建的问题

## Feat

- 移除配置项`showMoreContent`，请使用`isLimitWidth`配合`limitWidthNum`、`limitWidthWrap`
- 在元素上添加`data-inst`属性
- 重构`QmsgMsg`内部方法
- 更新依赖库
