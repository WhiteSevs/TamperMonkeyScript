/* 数据 */
export const GlobalData = {
  /** .on添加在元素存储的事件 */
  domEventSymbol: Symbol("events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)),
};
