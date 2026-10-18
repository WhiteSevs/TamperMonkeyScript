# VSCode FS Bridge

在 vscode.dev 中用伪造的 File System Access API 打开虚拟文件系统，让你可以用 VS Code 的完整编辑器体验来编辑任意数据源的内容。

***

## 这是什么？

vscode.dev 是微软推出的网页版 VS Code，它通过 **File System Access API** 打开本地文件夹来编辑文件。

**VSCode FS Bridge** 是一个 UMD 库，它在 vscode.dev 页面中**伪造一套 File System Access API**——让 vscode.dev 以为打开了一个真实的本地文件夹，而实际读写的是你提供的**虚拟文件系统**（可以是 GM 存储、远程 API、内存数据等任何你能想到的数据源）。

```
vscode.dev 编辑器
    ↓ 调用 showDirectoryPicker()
我们伪造的虚拟文件系统
    ↓ read / write handler
你的数据源（GM 存储 / 远程 API / 内存 ...）
```

***

## 特性

- ✅ **不依赖 DOM 选择器** — 通过模拟快捷键触发打开文件夹，vscode.dev 更新 UI 不失效
- ✅ **UMD 格式** — 支持 CommonJS / AMD / 浏览器全局，油猴 `@require` 直接引入
- ✅ **数据源自由** — 你只需要提供 `read` / `write` 两个函数，剩下的事库全包了
- ✅ **自动挂载** — 安装后自动发送快捷键打开虚拟文件夹，开箱即用
- ✅ **Worker 拦截** — 拦截 vscode.dev 的目录索引 Worker，避免报错
- ✅ **虚拟文件系统** — 内置 `VirtualDirectory` / `VirtualFile`，层级结构自由组合

***

## 安装

### 方式一：油猴 @require 引入（推荐）

```javascript
// ==UserScript==
// @name         你的脚本名
// @require      https://scriptcat.org/lib/8530/^1.0.0/VSCode%20FS%20Bridge.js
// @match        https://vscode.dev/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
```

### 方式二：本地文件

```javascript
const { createVSCodeFSBridge } = require('./vscode-fs-bridge.lib.js');
```

***

## 快速开始

```javascript
// 1. 创建 bridge 实例，传入页面 window
const bridge = VSCodeFSBridge.createVSCodeFSBridge(unsafeWindow);

// 2. 构建虚拟文件系统
const root = bridge.createDirectory('My Scripts');

// 3. 添加文件，提供 read/write handler
root.addFile('hello.user.js', {
  read: async () => 'console.log("hello");',   // 读取
  write: async (content) => {                    // 写入/保存
    console.log('保存了:', content);
  },
});

// 4. 安装并自动打开
await bridge.install({
  root: root,
  autoOpenFolder: true,  // 自动发送快捷键打开
});
```

就这样。打开 vscode.dev，等它加载完，虚拟文件夹就自动弹出来了。

***

## API 文档

### `createVSCodeFSBridge(pageWindow)`

创建一个 Bridge 实例。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `pageWindow` | `Window` | 页面的 window 对象，油猴脚本里传 `unsafeWindow` |

**返回**：Bridge 实例

***

### `bridge.createDirectory(name)`

创建一个虚拟目录。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `name` | `string` | 目录名 |

**返回**：`VirtualDirectory`

***

### `VirtualDirectory`

| 方法 | 说明 |
| --- | --- |
| `addDirectory(name)` | 添加子目录，返回子目录实例 |
| `addFile(name, handlers)` | 添加文件，返回文件实例 |

***

### `bridge.createFile(name, handlers)`

创建一个虚拟文件。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `name` | `string` | 文件名 |
| `handlers.read` | `function(): Promise<string>` | 读取文件内容 |
| `handlers.write` | `function(content: string): Promise<void>` | 写入文件内容（保存时调用） |
| `handlers.lastModified` | `number` | 可选，最后修改时间戳 |

**返回**：`VirtualFile`

***

### `bridge.install(options)`

安装伪造的 File System Access API 到页面。

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `root` | `VirtualDirectory` | 必填 | 虚拟文件系统根目录 |
| `interceptWorker` | `boolean` | `true` | 是否拦截 Worker 目录索引 |
| `autoOpenFolder` | `boolean` | `true` | 是否自动发送快捷键打开文件夹 |
| `openFolderShortcut` | `object | object[]` | `{ key: 'o', ctrl: true }` | 打开文件夹的快捷键 |
| `openFolderInterval` | `number` | `500` | 重试间隔 ms |
| `openFolderMaxRetries` | `number` | `20` | 最大重试次数 |

**快捷键格式**：

```javascript
// 单键：Ctrl+O
{ key: 'o', ctrl: true }

// chord 连按：Ctrl+K 然后 Ctrl+O（VS Code 桌面版默认"打开文件夹"）
[
  { key: 'k', ctrl: true },
  { key: 'o', ctrl: true }
]
```

***

### `bridge.sendShortcut(shortcut)`

手动发送一组键盘快捷键。

```javascript
bridge.sendShortcut({ key: 'o', ctrl: true });
// 或 chord
bridge.sendShortcut([
  { key: 'k', ctrl: true },
  { key: 'o', ctrl: true }
]);
```

***

### `bridge.uninstall()`

卸载，恢复原始的 File System Access API。

***

## 完整 Demo：GM 存储版

下面是一个完整可运行的油猴脚本，用 **GM 存储**作为数据源，让你在 vscode.dev 中编辑存在 Tampermonkey / 脚本猫里的脚本。

```javascript
// ==UserScript==
// @name         VSCode 编辑器 - GM 存储版
// @namespace    https://github.com/your-name/vscode-fs-bridge
// @version      0.1.0
// @description  在 vscode.dev 中用 GM 存储编辑油猴脚本
// @match        https://vscode.dev/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @require      file:///path/to/vscode-fs-bridge.lib.js
// ==/UserScript==

(function () {
    'use strict';

    const STORAGE_PREFIX = 'userscript_fs_';

    // ============================================================
    // GM 存储 → 虚拟文件系统 适配器
    // ============================================================
    async function buildRootFromGMStorage(bridge) {
        const root = bridge.createDirectory('My Scripts');

        const allKeys = await GM_listValues();
        const fileKeys = allKeys.filter(k =>
            k.startsWith(STORAGE_PREFIX) && !k.endsWith('_meta')
        );

        // 按目录分组：路径格式 "脚本名/文件名"
        const dirMap = new Map();
        dirMap.set(root.name, root);

        for (const key of fileKeys) {
            const relPath = key.slice(STORAGE_PREFIX.length);
            const parts = relPath.split('/');
            if (parts.length < 2) continue;

            const dirName = parts[0];
            const fileName = parts.slice(1).join('/');

            let dir = dirMap.get(dirName);
            if (!dir) {
                dir = root.addDirectory(dirName);
                dirMap.set(dirName, dir);
            }

            dir.addFile(fileName, {
                read: async () => GM_getValue(key, ''),
                write: async (content) => {
                    await GM_setValue(key, content);
                    await GM_setValue(key + '_meta', Date.now());
                },
                lastModified: await GM_getValue(key + '_meta', Date.now()),
            });
        }

        // 首次使用：放一个示例脚本
        if (root._entries.size === 0) {
            const demoDir = root.addDirectory('Hello World');
            const demoContent = `// ==UserScript==
// @name         Hello World
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('Hello from userscript!');
})();`;

            const demoKey = STORAGE_PREFIX + 'Hello World/script.user.js';
            await GM_setValue(demoKey, demoContent);
            await GM_setValue(demoKey + '_meta', Date.now());
            demoDir.addFile('script.user.js', {
                read: async () => GM_getValue(demoKey, ''),
                write: async (content) => {
                    await GM_setValue(demoKey, content);
                    await GM_setValue(demoKey + '_meta', Date.now());
                },
            });
        }

        return root;
    }

    // ============================================================
    // GM 菜单
    // ============================================================
    function registerMenu() {
        GM_registerMenuCommand('📥 导入脚本', async () => {
            const name = prompt('输入脚本名称：', 'My Script');
            if (!name) return;
            const content = prompt('粘贴脚本内容：');
            if (!content) return;
            await GM_setValue(STORAGE_PREFIX + name + '/script.user.js', content);
            await GM_setValue(STORAGE_PREFIX + name + '/script.user.js_meta', Date.now());
            alert('已导入！刷新 vscode.dev 页面查看。');
        });

        GM_registerMenuCommand('📤 导出全部（剪贴板）', async () => {
            const keys = await GM_listValues();
            const fileKeys = keys.filter(k => k.startsWith(STORAGE_PREFIX) && !k.endsWith('_meta'));
            let output = '';
            for (const key of fileKeys) {
                const relPath = key.slice(STORAGE_PREFIX.length);
                const content = await GM_getValue(key, '');
                output += `// ===== ${relPath} =====\n${content}\n\n`;
            }
            await GM_setClipboard(output);
            alert(`已复制 ${fileKeys.length} 个文件`);
        });

        GM_registerMenuCommand('🗑 清空', async () => {
            if (!confirm('确定清空所有虚拟文件吗？')) return;
            const keys = await GM_listValues();
            for (const key of keys) {
                if (key.startsWith(STORAGE_PREFIX)) await GM_deleteValue(key);
            }
            alert('已清空，刷新页面生效。');
        });
    }

    // ============================================================
    // 启动
    // ============================================================
    async function main() {
        const bridge = VSCodeFSBridge.createVSCodeFSBridge(unsafeWindow);
        const root = await buildRootFromGMStorage(bridge);

        await bridge.install({
            root: root,
            interceptWorker: true,
            autoOpenFolder: true,
            // 自定义快捷键：
            // openFolderShortcut: [{ key: 'k', ctrl: true }, { key: 'o', ctrl: true }],
        });

        registerMenu();
        console.log('[Demo] VSCode FS Bridge ready!');
    }

    main().catch(err => console.error('[Demo] Init failed:', err));

})();
```

***

## 工作原理

```
┌─────────────────────────────────────────────────┐
│  vscode.dev 页面                                │
│  ┌─────────────────────────────────────────┐    │
│  │ 我们覆盖的 showDirectoryPicker()         │    │
│  │   → 返回虚拟根目录的包装对象              │    │
│  └─────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────┐    │
│  │ VirtualDirectory / VirtualFile           │    │
│  │   getFile() → 调你的 read()              │    │
│  │   createWritable() → 调你的 write()     │    │
│  └─────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────┐    │
│  │ Worker 拦截                              │    │
│  │   listDirectory → 直接返回空结果         │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

1. **覆盖 `showDirectoryPicker`**：vscode.dev 调用这个 API 打开文件夹时，拿到的是我们伪造的目录句柄
2. **虚拟文件系统适配**：所有文件读写都走你提供的 `read` / `write` handler
3. **快捷键触发**：模拟 `Ctrl+O` 键盘事件，让 vscode.dev 自己触发"打开文件夹"动作
4. **Worker 拦截**：vscode.dev 会用 Worker 做目录索引，我们直接返回空结果，避免 Worker 访问不到虚拟 FS 报错

***

## 兼容性

- **浏览器**：Chrome / Edge 86+（支持 File System Access API）
- **油猴管理器**：Tampermonkey / 脚本猫 / Greasemonkey 4+
- **vscode.dev**：桌面端浏览器访问 https://vscode.dev

***

## License

MIT
