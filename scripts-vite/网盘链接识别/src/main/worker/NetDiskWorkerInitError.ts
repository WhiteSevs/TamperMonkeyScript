import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDiskWorker } from "./NetDiskWorker";

export const NetDiskWorkerInitError = {
  /**
   * 添加不再提示的Host
   * @param hostName Host名称
   */
  addHost(hostName: string) {
    let neverTipHostNameList = this.getList();
    if (!neverTipHostNameList.includes(hostName)) {
      neverTipHostNameList.push(hostName);
    }
    this.updateList(neverTipHostNameList);
  },
  /**
   * 查找Host是否已添加
   * @param hostName Host名称
   */
  findHost(hostName: string) {
    let neverTipHostNameList = this.getList();
    let findIndex = neverTipHostNameList.findIndex((it) => it === hostName);
    return findIndex !== -1;
  },
  /**
   * 移除不再提示的Host
   * @param hostName Host名称
   */
  removeHost(hostName: string) {
    let neverTipHostNameList = this.getList();
    let flag = false;
    let findIndex = neverTipHostNameList.findIndex((it) => it === hostName);
    if (findIndex !== -1) {
      flag = true;
      neverTipHostNameList.splice(findIndex, 1);
      this.updateList(neverTipHostNameList);
    }
    return flag;
  },
  /**
   * 获取不再提示的Host列表
   */
  getList() {
    let neverTipHostNameList = GM_getValue<string[]>(NetDiskWorker.$key.neverTipWorkerInitErrorKey, []);
    if (!Array.isArray(neverTipHostNameList)) {
      neverTipHostNameList = [neverTipHostNameList];
    }
    return neverTipHostNameList;
  },
  /**
   * 更新Host列表
   * @param hostNameList Host名称列表
   */
  updateList(hostNameList: string[]) {
    GM_setValue(NetDiskWorker.$key.neverTipWorkerInitErrorKey, hostNameList);
  },
};
