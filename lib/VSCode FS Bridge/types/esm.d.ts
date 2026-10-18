/**
 * VSCode FS Bridge
 * 
 * 在 vscode.dev 中用伪造的 File System Access API 打开虚拟文件系统。
 */

/** 虚拟文件的读写处理器 */
export interface VirtualFileHandlers {
    /** 读取文件内容 */
    read(): Promise<string | Blob | ArrayBuffer>;
    /** 写入文件内容（保存时调用） */
    write(content: string): Promise<void>;
    /** 最后修改时间戳（可选） */
    lastModified?: number;
    /** 文件写入完成后的回调（可选） */
    onWritable?(content: string): Promise<void>;
}

/** 键盘快捷键配置 */
export interface ShortcutKey {
    /** 按键名，如 'o', 'k', 'Enter' */
    key: string;
    /** 是否带 Ctrl */
    ctrl?: boolean;
    /** 是否带 Alt */
    alt?: boolean;
    /** 是否带 Shift */
    shift?: boolean;
}

/** 安装选项 */
export interface InstallOptions {
    /** 虚拟文件系统根目录（必填） */
    root: VirtualDirectory;
    /** 是否拦截 Worker 目录索引，默认 true */
    interceptWorker?: boolean;
    /** 是否自动发送快捷键打开文件夹，默认 true */
    autoOpenFolder?: boolean;
    /** 打开文件夹的快捷键，默认 Ctrl+O */
    openFolderShortcut?: ShortcutKey | ShortcutKey[];
    /** 重试间隔 ms，默认 500 */
    openFolderInterval?: number;
    /** 最大重试次数，默认 20 */
    openFolderMaxRetries?: number;
}

/** 虚拟文件 */
export class VirtualFile {
    /** 文件名 */
    readonly name: string;
    /** 类型标识 */
    readonly kind: 'file';

    constructor(name: string, handlers: VirtualFileHandlers);

    /** 读取文件，返回 File 对象 */
    getFile(): Promise<File>;
    /** 创建可写流 */
    createWritable(): Promise<FileSystemWritableFileStreamLike>;
    /** 判断是否为同一条目 */
    isSameEntry(other: VirtualFile | VirtualDirectory): Promise<boolean>;
}

/** FileSystemWritableFileStream 的简化形状（vscode.dev 期望的接口） */
export interface FileSystemWritableFileStreamLike {
    write(chunk: string | Blob | { type: 'write'; data: string | Blob; position?: number }): Promise<void>;
    close(): Promise<void>;
    seek(position: number): Promise<void>;
    truncate(size: number): Promise<void>;
}

/** 虚拟目录 */
export class VirtualDirectory {
    /** 目录名 */
    readonly name: string;
    /** 类型标识 */
    readonly kind: 'directory';
    /** 内部条目表（不建议直接操作） */
    _entries: Map<string, VirtualDirectory | VirtualFile>;

    constructor(name: string);

    /** 添加子目录 */
    addDirectory(name: string): VirtualDirectory;
    /** 添加文件 */
    addFile(name: string, handlers: VirtualFileHandlers): VirtualFile;

    /** 获取或创建子目录 */
    getDirectoryHandle(name: string, opts?: { create?: boolean }): Promise<VirtualDirectory>;
    /** 获取或创建文件 */
    getFileHandle(name: string, opts?: { create?: boolean }): Promise<VirtualFile>;
    /** 异步迭代所有条目 */
    entries(): AsyncIterableIterator<[string, VirtualDirectory | VirtualFile]>;
    /** 删除条目 */
    removeEntry(name: string, opts?: { recursive?: boolean }): Promise<void>;
    /** 判断是否为同一条目 */
    isSameEntry(other: VirtualDirectory | VirtualFile): Promise<boolean>;
}

/** Bridge 实例接口 */
export interface VSCodeFSBridgeInstance {
    /** 创建一个虚拟目录 */
    createDirectory(name: string): VirtualDirectory;
    /** 创建一个虚拟文件 */
    createFile(name: string, handlers: VirtualFileHandlers): VirtualFile;
    /** 安装伪造的 File System Access API */
    install(options: InstallOptions): Promise<void>;
    /** 发送一组键盘快捷键到页面 */
    sendShortcut(shortcut: ShortcutKey | ShortcutKey[], delay?: number): void;
    /** 自动发送快捷键触发"打开文件夹" */
    autoOpenFolder(shortcut?: ShortcutKey | ShortcutKey[], interval?: number, maxRetries?: number): void;
    /** 卸载，恢复原始 API */
    uninstall(): void;
    /** 是否已安装 */
    isInstalled(): boolean;
}

/**
 * 创建一个 VSCode FS Bridge 实例
 * @param pageWindow 页面的 window 对象（油猴脚本里传 unsafeWindow）
 */
export function createVSCodeFSBridge(pageWindow: Window): VSCodeFSBridgeInstance;

export default createVSCodeFSBridge;
