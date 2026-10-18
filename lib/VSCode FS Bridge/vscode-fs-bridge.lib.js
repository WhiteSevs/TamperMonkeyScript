/**
 * VSCode FS Bridge Library
 * 
 * 一个可复用的库，用于在 vscode.dev 页面中伪造 File System Access API，
 * 让 vscode.dev 以为打开了一个真实的本地文件夹，实际读写的是你提供的虚拟文件系统。
 * 
 * UMD 格式导出，支持：
 *   - CommonJS / Node.js:  const { createVSCodeFSBridge } = require('./vscode-fs-bridge.lib.js')
 *   - AMD / RequireJS:     require(['vscode-fs-bridge.lib'], (lib) => lib.createVSCodeFSBridge)
 *   - 浏览器全局 / 油猴:    window.VSCodeFSBridge.createVSCodeFSBridge(unsafeWindow)
 * 
 * 用法：
 *   const bridge = VSCodeFSBridge.createVSCodeFSBridge(unsafeWindow);
 *   const root = bridge.createDirectory('My Scripts');
 *   root.addFile('demo.user.js', {
 *     read: async () => '...文件内容...',
 *     write: async (content) => { ...保存... }
 *   });
 *   await bridge.install({ root });
 */

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS / Node
        module.exports = factory();
    } else {
        // 浏览器全局（含油猴 @require 环境）
        root.VSCodeFSBridge = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    /**
     * 创建一个 VSCode FS Bridge 实例
     * @param {Window} pageWindow - 页面的 window 对象（油猴脚本里传 unsafeWindow）
     * @returns {object} bridge 实例
     */
    function createVSCodeFSBridge(pageWindow) {
    'use strict';

    const w = pageWindow;
    const DEBUG = false;
    const log = (...args) => { if (DEBUG) console.log('[VSCodeFS Bridge]', ...args); };

    // 保存原始 API 以便卸载时恢复
    const original = {
        showDirectoryPicker: w.showDirectoryPicker,
        showOpenFilePicker: w.showOpenFilePicker,
        showSaveFilePicker: w.showSaveFilePicker,
        Worker: w.Worker,
    };

    let installed = false;
    let rootHandle = null;

    // ============================================================
    // 虚拟文件系统类
    // ============================================================

    class VirtualDirectory {
        /**
         * @param {string} name - 目录名
         */
        constructor(name) {
            this.name = name;
            this.kind = 'directory';
            this._entries = new Map();  // name → VirtualDirectory | VirtualFile
        }

        /** 添加子目录 */
        addDirectory(name) {
            const dir = new VirtualDirectory(name);
            this._entries.set(name, dir);
            return dir;
        }

        /** 添加文件 */
        addFile(name, handlers) {
            const file = new VirtualFile(name, handlers);
            this._entries.set(name, file);
            return file;
        }

        /** 获取或创建子目录 */
        async getDirectoryHandle(name, opts = {}) {
            if (!this._entries.has(name)) {
                if (opts.create) {
                    const dir = new VirtualDirectory(name);
                    this._entries.set(name, dir);
                    return dir;
                }
                throw new DOMException(`Directory '${name}' not found`, 'NotFoundError');
            }
            const entry = this._entries.get(name);
            if (entry.kind !== 'directory') {
                throw new DOMException(`'${name}' is not a directory`, 'TypeMismatchError');
            }
            return entry;
        }

        /** 获取或创建文件 */
        async getFileHandle(name, opts = {}) {
            if (!this._entries.has(name)) {
                if (opts.create) {
                    // 创建一个空文件，默认 handler
                    const file = new VirtualFile(name, {
                        read: async () => '',
                        write: async () => {},
                    });
                    this._entries.set(name, file);
                    return file;
                }
                throw new DOMException(`File '${name}' not found`, 'NotFoundError');
            }
            const entry = this._entries.get(name);
            if (entry.kind !== 'file') {
                throw new DOMException(`'${name}' is not a file`, 'TypeMismatchError');
            }
            return entry;
        }

        /** 异步迭代所有条目 */
        async *entries() {
            for (const [name, entry] of this._entries) {
                yield [name, entry];
            }
        }

        /** 删除条目 */
        async removeEntry(name, opts = {}) {
            const entry = this._entries.get(name);
            if (!entry) throw new DOMException(`'${name}' not found`, 'NotFoundError');
            if (entry.kind === 'directory' && opts.recursive) {
                entry._entries.clear();
            }
            this._entries.delete(name);
        }

        async isSameEntry(other) { return this === other; }
    }

    class VirtualFile {
        /**
         * @param {string} name - 文件名
         * @param {object} handlers
         * @param {function(): Promise<string|Blob>} handlers.read - 读取文件内容
         * @param {function(string): Promise<void>} handlers.write - 写入文件内容
         * @param {number} [handlers.lastModified] - 最后修改时间（可选）
         */
        constructor(name, handlers) {
            this.name = name;
            this.kind = 'file';
            this._handlers = handlers;
        }

        /** 读取文件，返回 File 对象 */
        async getFile() {
            const content = await this._handlers.read();
            const lastModified = this._handlers.lastModified || Date.now();
            if (typeof content === 'string') {
                return new File([content], this.name, { lastModified });
            }
            // Blob / ArrayBuffer 等
            return new File([content], this.name, { lastModified });
        }

        /** 创建可写流 */
        async createWritable() {
            const self = this;
            let pendingContent = '';

            return {
                async write(chunk) {
                    if (typeof chunk === 'string') {
                        pendingContent = chunk;
                    } else if (chunk instanceof Blob) {
                        pendingContent = await chunk.text();
                    } else if (chunk && typeof chunk === 'object' && 'data' in chunk) {
                        const d = chunk.data;
                        pendingContent = typeof d === 'string' ? d : await d.text();
                    } else {
                        pendingContent = String(chunk);
                    }
                },
                async close() {
                    await self._handlers.write(pendingContent);
                    if (self._handlers.onWritable) {
                        await self._handlers.onWritable(pendingContent);
                    }
                },
                async seek() {},
                async truncate() {}
            };
        }

        async isSameEntry(other) { return this === other; }
    }

    // ============================================================
    // 包装层：把虚拟对象适配成浏览器 FileSystemHandle 接口形状
    // ============================================================

    function wrapDirectory(vdir) {
        return {
            kind: 'directory',
            name: vdir.name,
            async getDirectoryHandle(name, opts) {
                return wrapDirectory(await vdir.getDirectoryHandle(name, opts));
            },
            async getFileHandle(name, opts) {
                return wrapFile(await vdir.getFileHandle(name, opts));
            },
            async *entries() {
                for await (const [name, entry] of vdir.entries()) {
                    yield [name, entry.kind === 'directory' ? wrapDirectory(entry) : wrapFile(entry)];
                }
            },
            async removeEntry(name, opts) {
                return vdir.removeEntry(name, opts);
            },
            async isSameEntry(other) { return vdir.isSameEntry(other); },
            async resolve() { return null; },
            [Symbol.asyncIterator]() { return this.entries(); }
        };
    }

    function wrapFile(vfile) {
        return {
            kind: 'file',
            name: vfile.name,
            async getFile() { return vfile.getFile(); },
            async createWritable(opts) { return vfile.createWritable(opts); },
            async isSameEntry(other) { return vfile.isSameEntry(other); }
        };
    }

    // ============================================================
    // Worker 拦截
    // ============================================================

    function installWorkerInterceptor() {
        const NativeWorker = w.Worker;
        if (!NativeWorker) return;

        w.Worker = new Proxy(NativeWorker, {
            construct(target, [scriptUrl, options]) {
                const worker = new target(scriptUrl, options);
                let onmessage = null;

                return new Proxy(worker, {
                    get(target, prop) {
                        if (prop === 'postMessage') {
                            return (message) => {
                                const { method, vsWorker, req } = message || {};
                                // 目录索引类调用直接返回空结果
                                if (method === 'listDirectory' || method === 'searchDirectory') {
                                    setTimeout(() => {
                                        if (onmessage) {
                                            onmessage({
                                                data: {
                                                    vsWorker, seq: req, method, type: 1,
                                                    res: { results: [], limitHit: 0 }
                                                }
                                            });
                                        }
                                    }, 50);
                                    return;
                                }
                                target.postMessage(message);
                            };
                        }
                        if (prop === 'addEventListener') {
                            return (event, cb) => {
                                if (event === 'message') onmessage = cb;
                                return target.addEventListener(event, cb);
                            };
                        }
                        if (prop === 'onmessage') return onmessage;
                        if (typeof target[prop] === 'function') return target[prop].bind(target);
                        return target[prop];
                    },
                    set(target, prop, value) {
                        if (prop === 'onmessage') {
                            onmessage = value;
                            target.onmessage = (msg) => onmessage && onmessage(msg);
                            return true;
                        }
                        target[prop] = value;
                        return true;
                    }
                });
            }
        });
        log('Worker interceptor installed');
    }

    function uninstallWorkerInterceptor() {
        if (original.Worker) {
            w.Worker = original.Worker;
        }
    }

    // ============================================================
    // 公共 API
    // ============================================================

    return {
        /**
         * 创建一个虚拟目录
         * @param {string} name - 目录名
         * @returns {VirtualDirectory}
         */
        createDirectory(name) {
            return new VirtualDirectory(name);
        },

        /**
         * 创建一个虚拟文件
         * @param {string} name - 文件名
         * @param {object} handlers - { read, write, lastModified? }
         * @returns {VirtualFile}
         */
        createFile(name, handlers) {
            return new VirtualFile(name, handlers);
        },

        /**
         * 安装伪造的 File System Access API
         * @param {object} options
         * @param {VirtualDirectory} options.root - 虚拟文件系统根目录
         * @param {boolean} [options.interceptWorker=true] - 是否拦截 Worker
         * @param {boolean} [options.autoOpenFolder=true] - 是否自动发送快捷键打开文件夹
         * @param {object|object[]} [options.openFolderShortcut] - 打开文件夹的快捷键，默认 Ctrl+O
         * @param {number} [options.openFolderInterval=500] - 重试间隔 ms
         * @param {number} [options.openFolderMaxRetries=20] - 最大重试次数
         */
        async install(options) {
            const {
                root,
                interceptWorker = true,
                autoOpenFolder = true,
                openFolderShortcut = { key: 'o', ctrl: true },
                openFolderInterval = 500,
                openFolderMaxRetries = 20,
            } = options;

            if (!root) throw new Error('root directory is required');

            rootHandle = wrapDirectory(root);

            // 覆盖 showDirectoryPicker
            w.showDirectoryPicker = async () => {
                log('showDirectoryPicker called, returning root:', root.name);
                return rootHandle;
            };

            // showOpenFilePicker 返回空
            w.showOpenFilePicker = async () => [];

            // showSaveFilePicker（简单实现）
            w.showSaveFilePicker = async (opts) => {
                const name = opts?.suggestedName || 'untitled.txt';
                return wrapFile(new VirtualFile(name, {
                    read: async () => '',
                    write: async () => {},
                }));
            };

            if (interceptWorker) {
                installWorkerInterceptor();
            }

            installed = true;
            log('VSCode FS Bridge installed successfully');

            if (autoOpenFolder) {
                this.autoOpenFolder(openFolderShortcut, openFolderInterval, openFolderMaxRetries);
            }
        },

        /**
         * 发送一组键盘快捷键到页面
         * @param {object|object[]} shortcut - 快捷键配置，或 chord 数组
         * @param {string} shortcut.key - 按键名（如 'o', 'k'）
         * @param {boolean} [shortcut.ctrl] - 是否带 Ctrl
         * @param {boolean} [shortcut.alt] - 是否带 Alt
         * @param {boolean} [shortcut.shift] - 是否带 Shift
         * @param {number} [delay] - chord 之间的间隔 ms
         */
        sendShortcut(shortcut, delay = 200) {
            const keys = Array.isArray(shortcut) ? shortcut : [shortcut];

            const dispatchKey = (keyDef) => {
                const eventInit = {
                    key: keyDef.key,
                    code: 'Key' + keyDef.key.toUpperCase(),
                    ctrlKey: !!keyDef.ctrl,
                    altKey: !!keyDef.alt,
                    shiftKey: !!keyDef.shift,
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                };
                const keydown = new KeyboardEvent('keydown', eventInit);
                const keyup = new KeyboardEvent('keyup', eventInit);
                document.dispatchEvent(keydown);
                document.dispatchEvent(keyup);
            };

            keys.forEach((keyDef, i) => {
                setTimeout(() => dispatchKey(keyDef), i * delay);
            });
            log('Sent shortcut:', keys);
        },

        /**
         * 自动发送快捷键触发"打开文件夹"（不依赖 DOM 选择器）
         * @param {object|object[]} [shortcut] - 快捷键配置，默认 Ctrl+O
         * @param {number} [interval=500] - 重试间隔 ms
         * @param {number} [maxRetries=20] - 最大重试次数
         */
        autoOpenFolder(shortcut = { key: 'o', ctrl: true }, interval = 500, maxRetries = 20) {
            let retries = 0;
            const timer = setInterval(() => {
                retries++;
                // 发送快捷键，让 vscode.dev 自己触发 showDirectoryPicker
                this.sendShortcut(shortcut);
                log(`Auto-open folder attempt ${retries}/${maxRetries}`);
                if (retries >= maxRetries) {
                    clearInterval(timer);
                    log('Auto-open folder: max retries reached');
                }
            }, interval);

            // 第一次立即发送一次
            this.sendShortcut(shortcut);
        },

        /**
         * 卸载：恢复原始 API
         */
        uninstall() {
            if (!installed) return;
            w.showDirectoryPicker = original.showDirectoryPicker;
            w.showOpenFilePicker = original.showOpenFilePicker;
            w.showSaveFilePicker = original.showSaveFilePicker;
            uninstallWorkerInterceptor();
            installed = false;
            rootHandle = null;
            log('VSCode FS Bridge uninstalled');
        },

        /** 是否已安装 */
        isInstalled() { return installed; },
    };
    }

    // ============================================================
    // UMD 导出对象
    // ============================================================
    return {
        createVSCodeFSBridge: createVSCodeFSBridge,
    };
}));
//（注：内容由AI生成）
