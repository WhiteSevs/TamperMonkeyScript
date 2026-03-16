import type { HttpxHeaders, HttpxMethod, HttpxStatus } from "./Httpx";

/** 请求的response配置 */
export declare interface UtilsAjaxHookResponseOptions {
  /**
   * （重定向后的）Url
   */
  finalUrl: string;
  /**
   * 响应码
   */
  status: HttpxStatus;
  /**
   * 响应头
   */
  responseHeaders: HttpxHeaders;
  /**
   * 响应内容
   */
  response?: string | Blob | ArrayBuffer | XMLDocument | FormData;
  /**
   * 响应内容文本
   */
  responseText?: string;
}

/** hook请求的配置 */
export declare interface UtilsAjaxHookRequestOptions {
  /**
   * 只读属性。一个字符串，表明请求类型是xhr还是fetch
   */
  type: "xhr";
  /**
   * 请求的Url
   */
  url: string;
  /**
   * 请求的url和method，可以直接修改
   */
  method: HttpxMethod;
  /**
   * 是否取消请求，设置为true即可取消本次请求
   */
  abort: boolean;
  /**
   * 请求头，可以直接修改
   */
  headers: HttpxHeaders;
  /**
   * 请求携带的数据，可以直接修改
   */
  data?: any;
  /**
   * 响应内容，必须通过一个回调函数进行读取和修改。
   *
   * 响应内容为一个对象，包含finalUrl、status、responseHeaders和被读取的响应数据，除响应数据可修改，其他属性是只读的。
   *
   * 响应数据是哪个属性取决于哪个属性被读取，xhr可能的属性为response、responseText、responseXML，fetch可能的属性为arrayBuffer、blob、formData、json、text。
   *
   * 在控制台输出时，xhr响应将包含所有属性，但只有被读取过的属性具有明确的值。修改对应属性即可影响读取结果，进而实现响应数据的修改。
   */
  response?: (res: Required<UtilsAjaxHookResponseOptions>) => void;
  /**
   * 只读属性。异步请求为true，同步请求为false，异步特性无法作用于同步请求
   */
  async: boolean;
}

/** 过滤规则配置 */
export declare interface UtilsAjaxHookFilterOptions {
  /**
   * 应是xhr或fetch
   */
  type?: "xhr" | "fetch";
  /**
   * 字符串或正则表达式，无需完全匹配
   */
  url?: string;
  /**
   * 请求方法
   */
  method?: HttpxMethod;
  /**
   * 是否异步
   */
  async?: boolean;
}

/** Utils.ajaxHooker */
export declare interface UtilsAjaxHookResult {
  /**
   * 劫持xhr和fetch
   *
   * 提示：如果多次调用.hook方法，将会多次处理同一个请求
   * @example
   *   ajaxHooker.hook(request => {
   *       if (request.url === 'https://www.example.com/') {
   *           request.response = res => {
   *               console.log(res);
   *               res.responseText += 'test';
   *           };
   *       }
   *   });
   * * @example
   *   // 异步特性无法作用于同步请求，但同步修改仍然有效
   *   // 你可以将以上所有可修改属性赋值为Promise，原请求将被阻塞直至Promise完成（若发生reject，数据将不会被修改）
   *   // 此特性可用于异步劫持。以下是一个异步修改响应数据的例子
   *   ajaxHooker.hook(request => {
   *       request.response = res => {
   *           const responseText = res.responseText; // 注意保存原数据
   *           res.responseText = new Promise(resolve => {
   *               setTimeout(() => {
   *                   resolve(responseText + 'test');
   *               }, 3000);
   *           });
   *       };
   *   });
   *   // 也可以传入async回调函数以实现异步
   *   ajaxHooker.hook(async request => {
   *       request.data = await modifyData(request.data);
   *       request.response = async res => {
   *           res.responseText = await modifyResponse(res.responseText);
   *       };
   *   });
   */
  hook(
    callback: (
      /**
       * hook请求的配置
       */
      request: UtilsAjaxHookRequestOptions,
      /**
       * 当前的`callback`的索引下标
       */
      index: number
    ) => void | undefined | null | Promise<void | undefined | null>
  ): {
    /**
     * 该函数是额外添加的，原版仅返回空值
     */
    remove: () => boolean;
  };
  /**
   * 过滤
   *
   * 注意：重复调用`.filter`设置规则会覆盖之前设置的规则
   * @example
   *   // 应于hook方法之前执行，此方法若尽早执行，有助于提升性能。
   *   // 为hook方法设置过滤规则，只有符合规则的请求才会触发hook。过滤规则是一个对象数组，参考下例
   *   ajaxHooker.filter([
   *       {type: 'xhr', url: 'www.example.com', method: 'GET', async: true},
   *       {url: /^http/},
   *   ]);
   */
  filter(filterOptions: UtilsAjaxHookFilterOptions[]): {
    /**
     * 该函数是额外添加的，原版仅返回空值
     */
    remove: () => void;
  };
  /**
   * 阻止xhr和fetch被改写
   * @example
   *  // 如果库劫持失败，可能是其他代码对xhr/fetch进行了二次劫持，protect方法会尝试阻止xhr和fetch被改写。应于document-start阶段尽早执行，部分网页下可能引发错误，谨慎使用。
   *   ajaxHooker.protect();
   */
  protect(): void;
  /**
   * 取消劫持
   * @example
   *   // 将xhr和fetch恢复至劫持前的状态，调用此方法后，hook方法不再生效。
   *   ajaxHooker.unhook();
   */
  unhook(): void;
  /**
   * 移除通过`.hook`添加的函数
   *
   * @description 此函数为额外添加的增强函数
   * @param fn `.hook`添加的函数
   * @param onlyRemove （可选）是否仅移除一个（如果命中的话），默认false
   */
  removeHook(
    fn: (request: UtilsAjaxHookRequestOptions) => void | undefined | null | Promise<void | undefined | null>,
    onlyRemove: boolean
  ): boolean;
  /**
   * 重置通过`.filter`设置的规则
   * @description 此函数为额外添加的增强函数
   */
  removeFilter(): void;
}
