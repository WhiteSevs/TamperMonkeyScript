import { UserDataSwitcherData } from "@/main/userDataSwitcher/manager/data/UserDataSwitcherData";

/**
 * 切换器
 *
 * cookie localStorage sessionStorage
 */
export const UserDataSwitcher = {
  $key: {
    STORAGE_USER_CONFIG: "user-config",
  },
  init() {},
  /**
   * 获取所有的数据
   */
  getAllData() {
    const dataList = UserDataSwitcherData.get<SwitcherDataOption[]>(this.$key.STORAGE_USER_CONFIG, []);
    return dataList;
  },
  /**
   * 获取单个配置
   * @param uuid 唯一id
   */
  get(uuid: string | SwitcherDataOption) {
    if (typeof uuid === "object" && uuid) {
      uuid = uuid.uuid;
    }
    const allData = this.getAllData();
    const findIndex = allData.findIndex((it) => it.uuid === uuid);
    if (findIndex > -1) {
      const findValue = allData[findIndex];
      return findValue;
    }
  },
  /**
   * 添加数据（不覆盖）
   * @param data 数据
   * @returns
   * + true: 添加成功
   * + false: 添加失败，存在重复uuid的数据
   */
  add(data: SwitcherDataOption) {
    const allData = this.getAllData();
    const findIndex = allData.findIndex((it) => it.uuid === data.uuid);
    if (findIndex > -1) {
      return false;
    }
    allData.push(data);
    UserDataSwitcherData.set(this.$key.STORAGE_USER_CONFIG, allData);
    return true;
  },
  /**
   * 覆盖数据（没有就添加）
   * @param data 数据
   */
  set(data: SwitcherDataOption) {
    const allData = this.getAllData();
    const findIndex = allData.findIndex((it) => it.uuid === data.uuid);
    if (findIndex > -1) {
      allData[findIndex] = data;
    } else {
      allData.push(data);
    }
    UserDataSwitcherData.set(this.$key.STORAGE_USER_CONFIG, allData);
  },
  /**
   * 判断存储的数据中是否存在该数据
   * @param uuid 唯一id/数据
   */
  has(uuid: string | SwitcherDataOption) {
    if (typeof uuid === "object" && uuid) {
      uuid = uuid.uuid;
    }
    const allData = this.getAllData();
    const findIndex = allData.findIndex((it) => it.uuid === uuid);
    if (findIndex > -1) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 删除数据
   * @param uuid 唯一id/数据
   * @returns
   * + true 删除成功
   * + false 删除失败
   */
  delete(uuid: string | SwitcherDataOption) {
    if (typeof uuid === "object" && uuid) {
      uuid = uuid.uuid;
    }

    const allData = this.getAllData();
    const findIndex = allData.findIndex((it) => it.uuid === uuid);
    let flag = false;
    if (findIndex > -1) {
      allData.splice(findIndex, 1);
      flag = true;
    }
    UserDataSwitcherData.set(this.$key.STORAGE_USER_CONFIG, allData);
    return flag;
  },
};
