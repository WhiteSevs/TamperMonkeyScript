import type { WindowApiOption } from "./types/WindowApi";
declare class Utils {
    private windowApi;
    constructor(option?: WindowApiOption);
    /**
     * 判断对象是否是jQuery对象
     * @param target
     * @returns
     * + true 是jQuery对象
     * + false 不是jQuery对象
     * @example
     * Utils.isJQuery($("a"))
     * > true
     */
    isJQuery(target: any): boolean;
    /**
       * JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
       * @param target 目标数据
       * @param source 源数据
       * @param isAdd 是否可以追加键，默认false
       * @example
       * Utils.assign({"1":1,"2":{"3":3}}, {"2":{"3":4}});
       * >
       * {
              "1": 1,
              "2": {
                  "3": 4
              }
          }
       */
    assign<T1, T2 extends object, T3 extends boolean>(target: T1, source: T2, isAdd?: T3): T3 extends true ? T1 & T2 : T1;
    /**
     * 监听页面元素改变并处理
     * @param target 需要监听的元素，如果不存在，可以等待它出现
     * @param observer_config MutationObserver的配置
     * @example
      Utils.mutationObserver(document.querySelector("div.xxxx"),{
        "callback":(mutations, observer)=>{},
        "config":{childList:true,attributes:true}
      });
      * @example
      Utils.mutationObserver(document.querySelectorAll("div.xxxx"),{
        "callback":(mutations, observer)=>{},
        "config":{childList:true,attributes:true}}
      );
      * @example
      Utils.mutationObserver($("div.xxxx"),{
      "callback":(mutations, observer)=>{},
      "config":{childList:true,attributes:true}}
      );
      **/
    mutationObserver(target: HTMLElement | Node | NodeList | Document, observer_config: {
        /**
         * observer的配置
         */
        config?: MutationObserverInit;
        /**
         * 是否主动触发一次
         */
        immediate?: boolean;
        /**
         * 触发的回调函数
         */
        callback: MutationCallback;
    }): MutationObserver;
}
declare const utils: Utils;
export { utils, Utils };
