/**
 * 文件解析的入口传入参数配置
 */
declare type ParseFileInitConfig = {
  ruleIndex: number;
  shareCode: string;
  accessCode: AccessCodeNonNullType;
};

/**
 * 单文件配置
 */
declare type NetDiskOneFileConfig = {
  /** 文件标题 */
  title: string;
  /** 文件名 */
  fileName: string;
  /** 文件类型（可选） */
  fileType?: string;
  /** 文件大小（可选），可以是字符串或数字形式 */
  fileSize?: string | number;
  /** 文件下载链接 */
  downloadUrl: string;
  /** 文件上传时间（可选），可以是字符串或数字形式 */
  fileUploadTime?: string | number;
  /** 文件最新时间（可选），可以是字符串或数字形式 */
  fileLatestTime?: string | number;
  /**
   * 点击回调函数（可选）
   * @returns
   *
   * + `false`: 阻止默认下载行为
   */
  clickCallBack?: (
    /**
     * 当前文件的详细信息
     */
    fileInfo: Omit<NetDiskOneFileConfig, "clickCallBack">
  ) => void | boolean | Promise<boolean | void>;
};
