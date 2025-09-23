export declare interface PagingStepButtonConfig {
  /**
   * 是否启用按钮
   * @default true
   */
  enable: boolean;
  /**
   * 点击回调
   */
  callBack?: (event: PointerEvent) => Promise<void> | void;
}

export declare interface PagingConfig<T> {
  /**
   * 数据源
   */
  data: T[];
  /**
   * 每一页显示的数据的最大数量
   * @default 5
   */
  pageShowDataMaxCount?: number;
  /**
   * 显示的最大的分页页码数量
   * @default 3
   */
  pageMaxStep?: number;
  /**
   * 当前显示的页码
   * @default 1
   */
  currentPage?: number;
  /**
   * 页码改变的回调
   */
  pageChangeCallBack: (
    /**
     * 当前的页码
     */
    page: number
  ) => Promise<void> | void;
  /**
   * 上一页按钮的配置
   */
  prevBtn?: PagingStepButtonConfig;
  /**
   * 下一页按钮的配置
   */
  nextBtn?: PagingStepButtonConfig;
  /**
   * 第一页按钮的配置
   */
  firstBtn?: PagingStepButtonConfig;
  /**
   * 最后一页按钮的配置
   */
  lastBtn?: PagingStepButtonConfig;
}
