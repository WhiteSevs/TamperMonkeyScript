import type {
  PopsTitleConfig,
  PopsDragConfig,
  PopsGeneralConfig,
  PopsMoreButtonConfig,
} from "../../../types/components";

/**
 * pops.folder的下载配置选项
 */
export type PopsFolderDownloadOption = {
  /**
   * 是否点击后自动触发下载
   *
   * + `true`: 自动根据设置的`mode`值来选择下载方式
   * + `false`: 不触发下载
   */
  autoDownload: boolean;
  /**
   * 触发下载后会根据提供的url链接进行下载
   */
  url: string;
  /**
   * 下载方式
   *
   * + `a`: 使用`a标签`进行下载
   * + `aBlank`: 使用`a标签`进行下载（添加属性`target="_blank"`）
   * + `iframe`: 使用`iframe`进行下载
   * + `open`: 使用`window.open`进行下载
   * + `openBlank`: 使用`window.open`进行下载（添加参数`_blank`）
   *
   * @default "aBlank"
   */
  mode?: "a" | "aBlank" | "iframe" | "open" | "openBlank";
};
/**
 * pops.folder的folder配置信息
 */
export interface PopsFolderDataConfig {
  /**
   * 文件/文件夹名
   */
  fileName: string;
  /**
   * 文件大小，如果是文件夹的话，请设置为`0`
   */
  fileSize: number | string;
  /**
   * 文件类型，如果是文件夹，填入`""`即可
   *
   * 填入后会根据文件类型，自动设置图标
   */
  fileType: string;
  /**
   * 文件图标
   * @default undefined
   */
  fileIcon?: string;
  /**
   * 创建时间
   */
  createTime:
    | number
    | (() => {
        /**
         * 该值用于排序
         */
        timeStamp: number;
        /**
         * 用于显示的文本
         */
        showText: string;
      });
  /**
   * 修改时间(最新时间)
   */
  latestTime:
    | number
    | (() => {
        /**
         * 该值用于排序
         */
        timeStamp: number;
        /**
         * 用于显示的文本
         */
        showText: string;
      });
  /**
   * 是否是文件夹
   * @default false
   */
  isFolder: boolean;
  /**
   * 层级
   */
  index: number;
  /**
   * 点击事件
   */
  clickEvent?: (
    event: MouseEvent | PointerEvent,
    /**
     * 当前层级的文件|文件夹信息配置
     */
    config: PopsFolderDataConfig
  ) => IPromise<PopsFolderDownloadOption | PopsFolderDataConfig[] | null | undefined | void>;
}

/**
 * pops.folder
 */
export interface PopsFolderConfig extends PopsTitleConfig, PopsDragConfig, PopsMoreButtonConfig, PopsGeneralConfig {
  /**
   * 排序
   */
  sort: {
    /**
     * 比较的名字，默认为fileName
     */
    name: "fileName" | "fileSize" | "latestTime";
    /**
     * 是否降序，默认false（升序）
     * @default false
     */
    isDesc: boolean;
    /**
     * 触发排序的回调
     * @returns
     * + true 中止内部的排序
     */
    callback?: (
      targert: HTMLElement,
      event: PointerEvent | MouseEvent,
      sortName: "fileName" | "fileSize" | "latestTime",
      sortDesc: boolean
    ) => boolean | undefined | void;
  };
  /**
   * 文件夹信息
   */
  folder: PopsFolderDataConfig[];
}
