# AGENTS.md

本文件面向在本仓库中工作的 AI 代理与人类协作者，描述 `scripts-vite/` 下各油猴脚本子包**实际使用**的编码习惯与工程约束。

> 事实优先原则：本文件由现有代码归纳而来。当本文件与代码冲突时，**以同目录/同类文件的既有写法为准**，并在改动后回头修正本文件，而不是为了"符合文档"去重写存量代码。

---

## 1. 仓库形态

- 根 `package.json` 为私有 monorepo（`type: module`），通过 `pnpm-workspace.yaml` 声明工作区：`scripts-vite/**`（`lib/**` 被排除）。
- 每个 `scripts-vite/<中文脚本名>/` 就是一个**独立可发布的油猴脚本**，拥有自己的 `package.json`、`vite.config.ts`、`tsconfig*.json`、`dist/`。
- 根脚本只是批量转发：

```jsonc
// 根 package.json
"build": "pnpm recursive run build",
"build:all": "pnpm recursive run build:all",
"format": "pnpm recursive run format"
```

因此：**任何包新增/改名 npm script，必须全仓所有包同步**，否则根目录的 `pnpm recursive run xxx` 会因缺脚本而报错。

- 共享代码在两个位置：
  - `script-components/components/`：跨脚本复用的运行时组件（设置面板、Hook、DOM/请求工具）。
  - `vite.utils.mts` + `script-components/components/vite.config.base.mts`：**构建期**工具与 Vite 配置生成器（不打包进用户脚本）。

---

## 2. 单个子包的标准结构

```
scripts-vite/抖音优化/
├─ src/
│  ├─ entrance.ts          # 唯一入口，顶层即执行
│  ├─ env.ts               # 环境出口（每个包必须有）
│  ├─ main/                # PC 端页面逻辑
│  ├─ m-main/              # 移动端页面逻辑（M 前缀）
│  ├─ setting/             # 设置面板声明（纯数据）
│  │  ├─ view/             # PC 面板分组，一文件一分类
│  │  ├─ mobile-view/      # 移动端面板分组
│  │  └─ all-open-or-close.ts
│  ├─ api/                 # 站点接口封装
│  ├─ hook/                # 原生 API / 页面函数劫持
│  ├─ router/              # URL 判定
│  ├─ utils/               # 包内工具
│  └─ main/**/css/         # 与模块同目录的样式
├─ types/                  # 全局 .d.ts（env.d.ts、站点数据 d.ts）
├─ vite.config.ts | .mts
├─ tsconfig.json / tsconfig.node.json
├─ .prettierignore
└─ dist/                   # 构建产物（<脚本名>.user.js / .min.user.js / .meta.js …）
```

命名习惯：

| 对象              | 约定                                           | 例子                                               |
| ----------------- | ---------------------------------------------- | -------------------------------------------------- |
| 业务类 / 模块文件 | PascalCase，前缀带上站点或业务名，避免跨包重名 | `DouYinVideoPlayer.ts`、`XHSArticleFilterBase.ts`  |
| 移动端            | 目录 `m-main`，类名前缀 `M` 或 `M_`            | `m-main/MDouYin.ts`、`M_XHSArticle.ts`             |
| 屏蔽逻辑          | 与主逻辑同名 + `Block` 后缀                    | `DouYinVideoBlock.ts`、`XHSBlock.ts`               |
| 屏蔽样式          | 固定叫 `css/block.css`；其它样式按用途命名     | `css/mobile.css`、`css/portraitCommentSplit.css`   |
| 设置分组          | 小写开头的语义名                               | `setting/view/video.ts`、`setting/view/general.ts` |
| 包名              | kebab-case 英文                                | `douyin`、`xiaohongshu-script`                     |
| 目录名            | 中文脚本名（与面板标题、`@name` 一致）         | `抖音优化/`                                        |

一个功能通常落在三件套里——**主逻辑 + `Block` + `css/block.css`**，由主逻辑用 `addStyle(blockCSS)` / `Panel.execMenuOnce` 挂载。

---

## 3. 入口与模块组织

### 3.1 对象字面量命名空间优先

全仓 `export const Xxx = { ... }` 有 350+ 处，`export class` 只有十几处。默认写法：

```ts
// src/main/DouYin.ts
export const DouYin = {
  init() {
    if (!(DouYinRouter.isIndex() || DouYinRouter.isLive()) || DouYinRouter.isLiveUCenter()) {
      log.error(`当前仅主站和直播页面支持${CommonUtil.isTopWindow() ? "" : "（iframe）"}`);
      return;
    }
    DouYinVideoFilter.init();
    DouYinBlock.init();
    Panel.execMenuOnce("watchLoginDialogToClose", () => {
      return DouYinAccount.watchLoginDialogToClose();
    });
  },
  /** 移除ads */
  removeAds() {
    /* ... */
  },
};
```

- 每个可独立启动的模块暴露 **`init()`**，内部按"守卫 → 各子功能 `init()` → 菜单回调注册"的顺序展开；`init()` 必须可被 Router 变化重复调用而幂等。
- 有 `$data` 的可变状态直接挂对象上（`DouYinHook.$data.hookElementAddEventListener`），不要藏在模块级 `let` 里。
- 只有**需要多实例、泛型、继承**时才写 `class`（如 `DouYinVideoFilterBase`、`XHSArticleFilterBase`、`ApiTest_* extends ApiAsyncTestBase`）。

### 3.2 `entrance.ts` 是唯一入口

两种形态，二选一：

```ts
// 形态 A：同步装配 + 分支初始化（PC/移动端分叉）
PanelContent.addContentConfig([PanelGeneralConfig, PanelVideoConfig /* ... */]);
PanelMenu.addMenuOption({ key: "show_pops_m_panel_setting", text: "⚙ 移动端设置" /* ... */ });
Panel.init();
if (MDouYinRouter.isMDouYin()) MDouYin.init();
else DouYin.init();
```

```ts
// 形态 B：async 包装 + 顶层 await
const entrance = async () => {
  /* ... */
};
await entrance();
```

- 入口只做**装配**（注册面板、菜单、初始化各模块），不写业务细节。
- 初始化顺序典型为：`PanelContent` → `PanelMenu` → `Panel.init()` → 业务模块 `init()` → `DOMUtils.onReady(...)`。

### 3.3 回调返回"可清理物"的约定

`Panel.execMenu` / `execMenuOnce` 的回调可返回约定值，开关关闭时由框架自动清理：

- 返回 `Element`（如 `addStyle(...)` 的 `<style>`）→ 关闭时移除
- 返回函数 → 关闭时执行（卸载/`off`）
- 返回 `[styleEl, listener.off]` 之类的混合数组 → 逐项处理
- 返回 `{ $css, destory }` → 同上

```ts
Panel.execMenuOnce("dy-global-block-css", () => {
  return this.removeAds();          // removeAds() 返回 [addStyle(blockCSS)]
});

listenRouterChange() {
  const listener = DOMUtils.on(window, "wb_url_change", callback);
  return [listener.off];            // 交给框架在关闭时解绑
}
```

---

## 4. 导入规范

### 4.1 路径别名

| 别名            | 指向                                 | 用途                                   |
| --------------- | ------------------------------------ | -------------------------------------- |
| `@/*`           | 包内 `src/*`                         | 业务代码互相引用                       |
| `@components/*` | `script-components/components/src/*` | 共享组件                               |
| `@lib/*`        | 仓库根 `lib/*`                       | 随包引入的第三方库（少用）             |
| `ViteGM`        | `vite-plugin-monkey` 虚拟模块        | `unsafeWindow`、`GM_*`、`monkeyWindow` |

**GM API 一律从 `ViteGM` 导入**，不要依赖全局变量：

```ts
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
```

### 4.2 业务代码只从 `@/env` 取环境能力

每个 `src/env.ts` 是本包的"环境出口"，把 `@components/env.base` 的成员按需透传，并兜底脚本名：

```ts
import { SCRIPT_NAME } from "@components/env.base";
const _SCRIPT_NAME_ = SCRIPT_NAME || "抖音优化";

export {
  utils,
  DOMUtils,
  log,
  MenuRegister,
  httpx,
  addStyle,
  pops,
  $,
  $$,
  MountVue,
  cookieManager,
} from "@components/env.base";
export { _SCRIPT_NAME_ as SCRIPT_NAME };
```

- 业务文件写 `import { DOMUtils, log } from "@/env";`，**不要**到处引 `@components/env.base`。
- 仅当需要 `env.base` 未透出的成员（如 `OriginPrototype`、`DEBUG`、`addBlockCSS`）时，才直接从 `@components/env.base` 引入，并把它补进 `env.ts`。
- `env.ts` 里也可以放本包专属的库再导出（`Viewer`、`DataPaging`、`CryptoJS`）。

### 4.3 import 排序（与代码实际一致，不强制但要跟随）

1. `@/...`（`@/env` 常在最前）
2. `@components/...`、`@lib/...`
3. 第三方裸包（`qmsg`、`vue`、`@whitesev/pops/...`）
4. 相对路径 `./`、`../`
5. 资源：`import blockCSS from "./css/block.css?raw";`

### 4.4 `.mjs` 后缀是刻意的

`vite.config.ts` 与 `vite.config.base.mts` 里写：

```ts
import { ViteUtils } from "./../../vite.utils.mjs";
import { GenerateUserConfig } from "./../../script-components/components/vite.config.base.mjs";
```

仓库里只有 `vite.utils.mts` / `vite.config.base.mts`。Vite 打包配置时用 esbuild，会自动把 `.mjs` 解析到同名 `.mts`。**不要"修正"成 `.mts` 或新建 `.mjs` 副本**，否则配置加载会失败。

### 4.5 只导入类型时用 `import type`

`tsconfig.base.json` 开了 `verbatimModuleSyntax: true`，类型导入必须显式标注：

```ts
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";
import { PanelComponents, type PanelComponentsType } from "@components/setting/panel-components";
```

---

## 5. TypeScript 约定

继承链：`<包>/tsconfig.json` → `script-components/components/tsconfig.base.json`（`strict: true`、`target/module: esnext`、`moduleResolution: bundler`、`checkJs: true`、`noEmit: true`）。

- **不写 `enum`**（全仓仅 7 处），用字符串联合 / `interface` / `type` + `as const`。
- 优先 `interface` 描述对象结构，`type` 描述联合与工具类型；接口命名不加 `I` 前缀。
- 非空断言 `!` 只用于"查询后立刻确认存在"的场景（`document.querySelector<HTMLInputElement>("input")!`），其余用早返回。
- `@ts-ignore` / `as any` 允许存在，但必须紧跟一行中文说明原因（现有代码就是这样：`// ElementPlusIconsVue是var定义的，不在window上`）。
- 动态读写对象属性用 `Reflect.set` / `Reflect.get`（绕过类型收窄），这是本仓的固定习惯：

```ts
Reflect.set(postParam, "a_bogus", a_bogus);
Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
```

- 函数可选参数占位用 `void 0`（1200+ 处），**不要**用 `undefined` 字面量或 `null` 去顶位置：

```ts
UISwitch("逆序弹出", "qmsg-config-showreverse", false, void 0, "修改Toast弹出的顺序");
```

- 可选参数一律 `name?: T`；布尔开关参数给默认值并写进 JSDoc 的 `@default`。

---

## 6. 注释与文案

- **注释一律中文**，`/** */` 用于导出成员（模块、公开方法、配置项），`//` 用于解释"为什么这么写"。
- 一个模块的文档注释习惯用 `+` 列表补充细节：

```ts
/**
 * 是否是抖音主站
 */
isIndex(href?: string) {
  return RouterUtil.builder(href).hostName("www.douyin.com").or(href).hostName("douyin.com").r();
}

/**
 * 关注
 *
 * + /follow
 */
```

- 公开方法的 `@param` 要写清默认值与语义（如"如果返回 true，则阻止默认行为（存储值）"）。
- 用户可见文案（面板标题、描述、Toast）用中文；`log` 内容可以是中文 + 少量英文技术词（`Router Change Before:`、`[Httpx-HttpxRequest.request]`）。
- 注释掉的旧代码**保留**（本项目大量存在 `//` 掉的分支），除非你在同一处重构，否则不要顺手删。

---

## 7. 日志与提示

`log` 与 `Qmsg` 分工明确：

| 场景               | 用法                                                       |
| ------------------ | ---------------------------------------------------------- |
| 调试/流程信息      | `log.info(...)`、`log.success(...)`                        |
| 异常但可继续       | `log.error(...)` + `Qmsg.error("中文提示")`，然后 `return` |
| 未适配页面         | `log.warn("子router: " + window.location.href)`            |
| 面向用户的操作结果 | `Qmsg.success / warning / error / loading`                 |

请求/接口失败的固定三段式（几乎每个 `api/*.ts` 都这样写）：

```ts
if (!response.status) {
  log.error(response); // 对象整体打印，便于排查
  Qmsg.error("获取视频配置失败");
  return; // 返回 undefined 表示失败
}
```

- 日志用模板字符串或用 `+` 拼接中文与变量都可（存量两种都有），**单文件内保持一致**。
- 不要静默 `catch`；至少 `log.error("xxx error", error)`。
- 性能敏感的监听里加日志前先想清楚是否会被高频触发。

---

## 8. DOM 与样式

- DOM 操作统一走 `DOMUtils`（`on` / `waitNode` / `waitNodeList` / `createElement` / `remove` / `preventEvent` / `onReady`），不要用原生 `querySelector` 到处写（`closest` 等只读查询可以）。
- 常用短别名在 `env.ts` 透出：`$`（单选）、`$$`（多选）。
- 元素选择使用`$`或`$$`
- 等待元素要带超时并处理 `null`：

```ts
const $el = await DOMUtils.waitNode<HTMLElement>(() => DOMUtils.selector<HTMLElement>("#xxx"), 10000);
if (!$el) return;
DOMUtils.remove($el);
```

- 样式以 `.css` 文件维护，用 `?raw` 导入后 `addStyle`，**不要**在 TS 里拼大段样式字符串（除极小的内联 style）。
- 屏蔽类样式集中在 `css/block.css`，用注释分组，选择器逐行罗列，最后统一 `display: none !important;`：

```css
/* 从顶部往下弹出的下载抖音电脑版的drawer提示 */
#douyin-web-download-guide-container
/* 左侧导航栏的下面的下载抖音精选 */
[data-e2e="douyin-navigation"] div:has(>div:first-child>img[src*="douyin-pc-web"]) {
  display: none !important;
}
```

- 需要出现在页面最末的样式用 `addStyleWithEnd`；屏蔽用 `addBlockCSS` / `addBlockCSSWithEnd`。
- Vue 以外的 UI 一律用 `pops`（弹窗、面板、右键菜单、tooltip），不要自己写弹层。

---

## 9. 设置面板（本项目最核心的约定）

设置是"纯数据声明"，放在 `src/setting/**`，不要在里面写业务逻辑。

```ts
export const PanelVideoConfig: PopsPanelContentConfig = {
  id: "panel-config-video",
  title: "视频",
  views: [{ text: "", type: "container", views: [{ text: "功能", type: "deepMenu", views: [/* ... */] }] }],
};
```

- 控件用工厂函数，**不要手工拼 `props`**：`UISwitch`（974 处）、`UIInput`、`UISelect`、`UISlider`、`UIButton`、`UIButtonShortCut`、`UIOwn`、`UIInputNumber`、`UIInputDateTime`、`UIInputFile`、`UIInputPassword`、`UITextArea`、`UISelectDialog`、`UISelectHorizontal`、`UISelectMultiple`、`UIDialogCode`。
- 各工厂参数是**按位置传的可选参数**，顺序固定且语义各不相同；以 `UISwitch` 为例：`(text, key, defaultValue, callback?, description?, afterAddToUListCallBack?, disabled?, valueChangeCallBack?, shortCutOption?)`。调用前查该工厂的 JSDoc，不用的位置用 `void 0` 占位。
- `key` 全局唯一，命名两种风格并存：
  - 新功能倾向"模块前缀 + 语义"，如 `dy-video-changeBackgroundColor`、`dy-cookie-remove__ac__`；
  - 通用/老功能用 camelCase，如 `chooseVideoDefinition`、`hookKeyboard`、`qmsg-config-position`。
  - **新增时跟随所在面板已有风格**，不要在同一文件里混第三套命名。
- 功能的启用由面板值驱动，一律通过 `Panel` 执行，不要自己读 `GM_getValue`：

```ts
Panel.execMenuOnce("disguiseLogin", () => DouYinAccount.disguiseLogin()); // 开关打开时执行一次，并可自动卸载
Panel.execMenu("dy-apple-removeMetaAppleItunesApp", () => this.removeMetaAppleItunesApp()); // 跟随开关反复执行
Panel.getValue<number>("x", 1); // 读取
```

- 菜单 `key` 必须与面板里对应项的 `key` 一致，否则永远不生效。
- 每个分组文件导出 `PanelXxxConfig`；入口用 `PanelContent.addContentConfig([...])` 批量注册，移动端单独一批。
- **面板标题/描述与 `vite.config.ts` 的 `userscript.description` 要同步更新**，两者都在描述功能清单。

跨页面生效的样式/监听，用 `Panel.execMenuOnce(key, cb, void 0, true)` 让 Router 变化时重载（`listenUrlChange` 参数），但"监听 Router 变化"本身必须传 `false`，否则会重复绑定。

---

## 10. 网络层

- 统一用 `httpx`，带请求/响应拦截器与错误 Toast，**禁止使用 `fetch` / `GM_xmlhttpRequest`**。
- 接口按站点分组：`src/api/<站点><模块>Api.ts`，导出对象，一个方法一个接口。
- 站点公共参数走 `ApiConfig.getCommonData()`、`ApiConfig.BASE_URL`；签名（`a_bogus`、`msToken`、`sign`）放 `src/api-utils/` 或 `src/sign/`。
- 手写/反混淆的 `.js` 脚本不参与格式化，需登记到包内 `.prettierignore`（如 `src/api-utils/a_bogus.js`）。
- 业务层拿到的返回值约定：**成功返回数据对象，失败返回 `undefined`**（用 `if (!data) return;` 处理），不要 `throw` 穿透到 UI。

```ts
export const DouYinAwemeApi = {
  /**
   * 获取视频配置
   * @param aweme_id 视频id
   */
  async detail(aweme_id: string) {
    const response = await httpx.get("/aweme/v1/web/aweme/detail/", {
      data: { ...ApiConfig.getCommonData(), aweme_id },
      fetch: true,
      allowInterceptConfig: false,
    });
    if (!response.status) {
      log.error(response);
      Qmsg.error("获取视频配置失败");
      return;
    }
    const data = utils.toJSON(response.data.responseText);
    if (!ApiResponseCheck.isSuccess(data)) return;
    return data;
  },
};
```

---

## 11. Hook 与页面上下文

- 页面级劫持放 `src/hook/`，命名 `XxxHook`（快捷键、`defineProperty`、`XMLHttpRequest`、`addEventListener`）。
- 需要调用/还原页面原生实现时，用 `env.base` 暴露的 `OriginPrototype`（已保存 `Object.defineProperty`、`Function.apply`、`setTimeout` 等的原始引用），不要直接用被站点改写过的全局函数。
- `unsafeWindow` 从 `ViteGM` 导入；`monkeyWindow` 用于沙箱内的 window。
- Hook 必须在 `init()` 里保证幂等（复用 `$data` 里的记录数组，避免重复 `defineProperty` 报错）。
- Hook 通常**最后初始化**（如 `DouYinHook.init()` 放在 `DouYin.init()` 末尾），以免自己的快捷键也被劫持。
- 只应在顶层窗口执行的重逻辑，先判断 `CommonUtil.isTopWindow()`。

---

## 12. Vue 的使用

只有少数包用 Vue（19 个 `.vue`，集中在 `【移动端】百度系优化`）。用时遵守：

- `<script lang="ts" setup>`，`setup` 内部按 `vueIndentScriptAndStyle: true` **整体缩进两格**。
- 根组件用 `MountVue(RootComponent, [router, ElementPlus])` 挂载，根节点 id 固定 `vite-app`（`VUE_ROOT_ID`）。
- Element Plus 组件/图标由 `unplugin-auto-import` + `unplugin-vue-components` 自动导入（`ElLoading` 等直接用），**不要手写 `import { ElLoading } from "element-plus"`**。
- 全局状态用 pinia；路由用 `vue-router`；两者按需在 `plugins` 数组里 `app.use`。
- 非 Vue 场景不要引入 Vue。

---

## 13. 格式、校验与构建

### 13.1 格式化

唯一配置：根 `.oxfmtrc.jsonc`（oxfmt，Prettier 兼容语义）：

- 双引号、结尾分号、`printWidth: 120`、`tabWidth: 2`（空格）、`trailingComma: es5`、`arrowParens: always`、`bracketSameLine: true`
- `endOfLine: crlf`（Windows + `git core.autocrlf=true`），**不要改成 LF**
- 忽略项由各包 `.prettierignore` 控制（注意文件名仍是 `.prettierignore`，oxfmt 复用它）

**不要手写对齐/换行**，改完代码跑 `pnpm run format`。`build` 脚本自带 `format`，所以产物会被再次规范化（`format:dist`）。

### 13.2 校验

- 类型校验用 `vue-tsc --noEmit`（纯 TS 包也一样），`build`/`dev` 前都会跑，**类型错误必须修掉，不要用 `// @ts-nocheck` 绕过**。
- 仓库根装了 `oxlint`，但脚本里**没有**接入 lint；`lib/*` 里各自有 `oxlint` 配置，改动 `lib` 时按该包的命令执行。

### 13.3 命令

在**目标包目录内**执行（不要为了改一个脚本在根目录跑全量构建）：

| 命令                                              | 作用                                                           |
| ------------------------------------------------- | -------------------------------------------------------------- |
| `pnpm dev`                                        | `vue-tsc --noEmit && vite --force`，本地热更（含 mkcert 证书） |
| `pnpm build`                                      | 格式化 → 类型检查 → `vite build` → 产物格式化                  |
| `pnpm build:min`                                  | 同上 + `--minify`                                              |
| `pnpm build:all`                                  | 普通 + 压缩两版（`--no-empty-outDir`）                         |
| `pnpm build:all-new`                              | 同上，并强制生成新版本号                                       |
| `pnpm build:watch` / `build:no-cache` / `preview` | 监听构建 / 清 pnpm 缓存后构建 / 本地预览                       |
| `pnpm format` / `format:dist`                     | 只格式化源码 / 只格式化产物                                    |

### 13.4 版本号与产物

- `@version` 由构建脚本自动生成/递增（读取 git 历史版本，或 `SCRIPT_VERSION.json`，规则 `yyyy.MM.dd[.HH]`）。**不要手改 `dist` 里的版本号**，也不要在源码里硬编码版本。
- `SCRIPT_VERSION.json`（部分包有）是版本缓存文件，由构建写入。
- 产物：`dist/<脚本名>.user.js`、`<脚本名>.min.user.js`、`*.meta.js`、`*.meta.local.user.js`（本地调试用，`metaLocalFileName` 控制，已被 `.gitignore` 忽略）。
- `dist/` 属于生成物：除非该包历史提交中包含 `dist`（如 `CSDN优化`），否则不要提交。

---

## 14. Git 与协作

- 主开发分支是 `dev`，PR 目标为 `dev`；`master` 用于发布。
- 不要提交：`node_modules`、`*.meta.local.user.js`、`pnpm-lock.yaml`（根已忽略，仅在需要锁定依赖时才特殊处理）、编辑器目录。
- 提交前自查：`pnpm run format` 是否已跑过、`vue-tsc` 是否通过、新增设置项是否在 README/描述里同步。
- PR提交前先与远程仓库进行同步，解决冲突后再进行提交。
- PR的文件不要包含`dist`构建的文件目录和测试项。

---

## 15. 新增一个脚本（checklist）

1. 复制一个结构最简单的包（如 `简书优化`），重命名目录为中文脚本名。
2. 改 `package.json`：`name` 用 kebab-case，`description` 写功能清单；`scripts` 与其他包**完全一致**。
3. 改 `vite.config.ts`：`GenerateUserConfig({ projectDirName: utils.dirName, monkeyOption: { userscript: { name, connect, description, icon, match, exclude, require, resource } } })`；`match`/`exclude` 精确到域，`connect` 跟随同站点脚本的既有写法（多数是 `["*"]`，能收窄就收窄）。
4. `src/env.ts` 写脚本名兜底 + 从 `@components/env.base` 透传所需能力。
5. `src/entrance.ts` 装配 `PanelContent`/`PanelMenu` → `Panel.init()` → 业务 `init()`。
6. 按 `main/` `setting/view/` `api/` `router/` 分层落文件；屏蔽逻辑配 `css/block.css`。
7. 本地 `pnpm dev` 验证（Tampermonkey 需开启开发者模式 / MV3 要求），再 `pnpm build` 确认产物。
8. 更新根 `README.md` 的脚本列表。

---

## 16. 反模式清单（本项目明确避免的写法）

- ❌ 在业务代码里直接 `GM_getValue` / `GM_setValue`（走 `Panel.getValue` / `Panel.setValue`）
- ❌ 直接 `fetch` / `GM_xmlhttpRequest`（走 `httpx`）
- ❌ 业务文件满屏 `@components/env.base`（走 `@/env`）
- ❌ 自己写弹窗/面板 DOM（用 `pops` 与 `UI*` 工厂）
- ❌ 在 TS 里写长 CSS 字符串（放 `.css` + `?raw`）
- ❌ 把 `.mjs` 导入改成 `.mts`
- ❌ 手改 `dist/` 或 `package.json` 的 `@version`
- ❌ 改换行符为 LF、改引号风格、手动折行（交给 oxfmt）
- ❌ 只为"更现代"就把对象命名空间重构成 class
- ❌ 面板 `key` 与 `execMenu` 的 `key` 不一致导致功能静默失效
- ❌ 在 `init()` 里无幂等保护的重复 `addEventListener` / `defineProperty`
