declare class CommonUtil {
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
       * 判断对象或数据是否为空
       * + `String`判空的值，如 ""、"null"、"undefined"、"   "
       * + `Number`判空的值，如 0
       * + `Object`判空的值，如 {}、null、undefined
       * + `Array`(存在属性Symbol.iterator)判空的值，如 []
       * + `Boolean`判空的值，如false
       * + `Function`判空的值，如()=>{}、(xxx="")=>{}、function(){}、function(xxx=""){}
       * @returns
       * + true 为空
       * + false 不为空
       * @example
        Utils.isNull({});
        > true
       * @example
        Utils.isNull([]);
        > true
       * @example
        Utils.isNull(" ");
        > true
       * @example
        Utils.isNull(function(){});
        > true
       * @example
        Utils.isNull(()=>{}));
        > true
       * @example
        Utils.isNull("undefined");
        > true
       * @example
        Utils.isNull("null");
        > true
       * @example
        Utils.isNull(" ", false);
        > true
       * @example
        Utils.isNull([1],[]);
        > false
       * @example
        Utils.isNull([],[1]);
        > false
       * @example
        Utils.isNull(false,[123]);
        > false
       **/
    isNull<T>(value: T | undefined | null): value is null | undefined;
    isNull(...args: any[]): boolean;
    /**
     * 判断对象是否是元素
     * @param target
     * @returns
     * + true 是元素
     * + false 不是元素
     * @example
     * Utils.isDOM(document.querySelector("a"))
     * > true
     */
    isDOM(target: any): boolean;
    /**
     * 判断对象是否不为空
     * @returns {boolean}
     * + true 不为空
     * + false 为空
     * @example
     * Utils.isNotNull("123");
     * > true
     */
    isNotNull<T>(value: T | null | undefined): value is T;
    isNotNull(...args: any[]): boolean;
    /**
     * 深拷贝
     * @param obj 对象
     */
    deepClone<T extends object | undefined | null>(obj?: T): T;
    /**
     * 覆盖对象中的函数this指向
     * @param target 需要覆盖的对象
     * @param [objectThis] 覆盖的this指向，如果为传入，则默认为对象本身
     */
    coverObjectFunctionThis(target: any, objectThis?: any): void;
    /**
     * 字符串转Object对象，类似'{"test":""}' => {"test":""}
     * @param data
     * @param errorCallBack （可选）错误回调
     * @example
     * Utils.toJSON("{123:123}")
     * > {123:123}
     */
    toJSON<T = any>(data: string | null, errorCallBack?: (error: Error) => void): T;
}
declare const commonUtil: CommonUtil;
export { commonUtil as CommonUtil };
