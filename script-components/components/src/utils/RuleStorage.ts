import Qmsg from "qmsg";
import { GM_getValue, GM_setValue } from "ViteGM";
import { DOMUtils, httpx, log, pops, utils } from "../base.env";
import { PanelUISize } from "../setting/panel-ui-size";

type RuleStorageConstructOption = {
  /**
   * 存储的主键名
   */
  STORAGE_API_KEY: string;
};

/**
 * 规则的存储
 */
class RuleStorage<
  T extends {
    /** 唯一键 */
    uuid: string;
    /** 是否启用 */
    enable: boolean;
  },
> {
  option;
  /**
   * @param option 配置项
   */
  constructor(option: RuleStorageConstructOption) {
    this.option = option;
  }
  /**
   * 获取所有规则
   */
  getAllRule() {
    const allRules = GM_getValue<T[]>(this.option.STORAGE_API_KEY, []);
    return allRules;
  }
  /**
   * 设置全部规则
   * @param rules 规则列表
   */
  setAllRule(rules: T[]) {
    GM_setValue(this.option.STORAGE_API_KEY, rules);
  }
  /**
   * 清空所有规则
   */
  clearAllRule() {
    this.setAllRule([]);
  }
  /**
   * 获取规则
   * @param uuid
   */
  getRule(uuid: string) {
    const allRules = this.getAllRule();
    const findIndex = allRules.findIndex((item) => item.uuid === uuid);
    if (findIndex !== -1) {
      const rule = allRules[findIndex];
      return rule;
    }
  }
  /**
   * 设置规则（覆盖规则）
   * @param rule 规则
   * @returns
   * + true 成功覆盖
   * + false 未找到规则
   */
  setRule(rule: T) {
    const allRules = this.getAllRule();
    const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
    let updateFlag = false;
    if (findIndex !== -1) {
      // 存在相同uuid，更新数据
      allRules[findIndex] = rule;
      this.setAllRule(allRules);
      updateFlag = true;
    } else {
      // 不存在
    }
    return updateFlag;
  }
  /**
   * 添加规则
   * @param rule 规则
   */
  addRule(rule: T) {
    const allRules = this.getAllRule();
    const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
    let addFlag = false;
    if (findIndex !== -1) {
      // 存在相同uuid
    } else {
      // 不存在
      allRules.push(rule);
      this.setAllRule(allRules);
      addFlag = true;
    }
    return addFlag;
  }
  /**
   * 规则规则（有就更新，没有就添加）
   * @param rule 规则
   */
  updateRule(rule: T) {
    const allRules = this.getAllRule();
    const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
    if (findIndex !== -1) {
      // 存在相同uuid，更新数据
      allRules[findIndex] = rule;
    } else {
      // 不存在
      allRules.push(rule);
    }
    this.setAllRule(allRules);
  }
  /**
   * 删除规则
   * @param rule 规则/规则的uuid
   */
  deleteRule(rule: T | string) {
    const allRules = this.getAllRule();
    const ruleUUID = typeof rule === "string" ? rule : rule.uuid;
    const findIndex = allRules.findIndex((item) => item.uuid === ruleUUID);
    if (findIndex !== -1) {
      allRules.splice(findIndex, 1);
      this.setAllRule(allRules);
      return true;
    } else {
      return false;
    }
  }
  /**
   * 导入规则
   * @param importEndCallBack 导入完毕后的回调
   */
  importRules(importEndCallBack?: () => void) {
    const $alert = pops.alert({
      title: {
        text: "请选择导入方式",
        position: "center",
      },
      content: {
        text: /*html*/ `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
        html: true,
      },
      btn: {
        ok: { enable: false },
        close: {
          enable: true,
          callback(details, event) {
            details.close();
          },
        },
      },
      mask: { enable: true },
      drag: true,
      width: PanelUISize.info.width,
      height: PanelUISize.info.height,
      style: /*css*/ `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `,
    });
    /** 本地导入 */
    const $local = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='local']")!;
    /** 网络导入 */
    const $network = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='network']")!;
    /** 剪贴板导入 */
    const $clipboard = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='clipboard']")!;
    /**
     * 将获取到的规则更新至存储
     */
    const updateRuleToStorage = async (data: any[]) => {
      let allData = this.getAllRule();
      const addNewData: typeof allData = [];
      const repeatData: {
        index: number;
        data: (typeof allData)["0"];
      }[] = [];
      let isRepeat = false;
      for (let index = 0; index < data.length; index++) {
        const dataItem = data[index];
        const findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
        if (findIndex !== -1) {
          // 存在相同的uuid的规则
          repeatData.push({
            index: findIndex,
            data: dataItem,
          });
        } else {
          // 追加
          addNewData.push(dataItem);
        }
      }
      if (repeatData.length) {
        const confirmRepeat = await new Promise<boolean>((resolve) => {
          pops.alert({
            title: {
              text: "覆盖规则",
              position: "center",
            },
            content: {
              text: `存在相同的uuid的规则 ${repeatData.length}条，是否进行覆盖？`,
              html: true,
            },
            btn: {
              close: {
                callback(details, event) {
                  details.close();
                  resolve(false);
                },
              },
              ok: {
                text: "覆盖",
                callback(details, event) {
                  details.close();
                  resolve(true);
                },
              },
            },
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            mask: { enable: true },
            drag: true,
          });
        });
        if (confirmRepeat) {
          // 覆盖
          for (const repeatDataItem of repeatData) {
            allData[repeatDataItem.index] = repeatDataItem.data;
          }
          isRepeat = true;
        }
      }

      if (addNewData.length) {
        allData = allData.concat(addNewData);
      }
      this.setAllRule(allData);
      const message = `共 ${data.length} 条规则，新增 ${
        addNewData.length
      } 条，覆盖 ${isRepeat ? repeatData.length : 0} 条`;
      Qmsg.success(message);
      importEndCallBack?.();
    };
    /**
     * @param subscribeText 订阅文件文本
     */
    const importFile = (subscribeText: string) => {
      return new Promise<boolean>(async (resolve) => {
        const data = utils.toJSON(subscribeText);
        if (!Array.isArray(data)) {
          log.error(data);
          Qmsg.error("导入失败，格式不符合（不是数组）", {
            consoleLogContent: true,
          });
          resolve(false);
          return;
        }
        if (!data.length) {
          Qmsg.error("导入失败，解析出的数据为空", {
            consoleLogContent: true,
          });
          resolve(false);
          return;
        }

        await updateRuleToStorage(data);
        resolve(true);
      });
    };
    // 本地导入
    DOMUtils.on($local, "click", (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      const $input = DOMUtils.createElement("input", {
        type: "file",
        accept: ".json",
      });
      DOMUtils.on($input, ["propertychange", "input"], (event) => {
        if (!$input.files?.length) {
          return;
        }
        const uploadFile = $input.files![0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
          importFile(fileReader.result as string);
        };
        fileReader.readAsText(uploadFile, "UTF-8");
      });
      $input.click();
    });
    // 网络导入
    DOMUtils.on($network, "click", (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      const $prompt = pops.prompt({
        title: {
          text: "网络导入",
          position: "center",
        },
        content: {
          text: "",
          placeholder: "请填写URL",
          focus: true,
        },
        btn: {
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
          ok: {
            text: "导入",
            callback: async (details, event) => {
              const url = details.text;
              if (utils.isNull(url)) {
                Qmsg.error("请填入完整的url");
                return;
              }
              const $loading = Qmsg.loading("正在获取配置...");
              const response = await httpx.get(url, {
                allowInterceptConfig: false,
              });
              $loading.close();
              if (!response.status) {
                log.error(response);
                Qmsg.error("获取配置失败", { consoleLogContent: true });
                return;
              }
              const flag = await importFile(response.data.responseText);
              if (!flag) {
                return;
              }
              details.close();
            },
          },
          cancel: {
            enable: false,
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: "auto",
      });
      const $promptInput = $prompt.$shadowRoot.querySelector<HTMLInputElement>("input")!;
      const $promptOk = $prompt.$shadowRoot.querySelector<HTMLElement>(".pops-prompt-btn-ok")!;
      DOMUtils.on($promptInput, ["input", "propertychange"], (event) => {
        const value = DOMUtils.val($promptInput);
        if (value === "") {
          DOMUtils.attr($promptOk, "disabled", "true");
        } else {
          DOMUtils.removeAttr($promptOk, "disabled");
        }
      });
      DOMUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
        if (keyName === "Enter" && otherCodeList.length === 0) {
          const value = DOMUtils.val($promptInput);
          if (value !== "") {
            DOMUtils.trigger($promptOk, "click");
          }
        }
      });
      DOMUtils.trigger($promptInput, "input");
    });
    // 剪贴板导入
    DOMUtils.on($clipboard, "click", async (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      const clipboardInfo = await utils.getClipboardInfo();
      if (clipboardInfo.error != null) {
        Qmsg.error(clipboardInfo.error.toString());
        return;
      }
      if (clipboardInfo.content.trim() === "") {
        Qmsg.warning("获取到的剪贴板内容为空");
        return;
      }
      const flag = await importFile(clipboardInfo.content);
      if (!flag) {
        return;
      }
    });
  }
  /**
   * 导出规则
   * @param fileName 文件名
   */
  exportRules(fileName = "rule.json") {
    const allRules = this.getAllRule();
    const blob = new Blob([JSON.stringify(allRules, null, 4)]);
    const blobUrl = globalThis.URL.createObjectURL(blob);
    const $a = document.createElement("a");
    $a.href = blobUrl;
    $a.download = fileName;
    $a.click();
    setTimeout(() => {
      globalThis.URL.revokeObjectURL(blobUrl);
    }, 1500);
  }
}

export { RuleStorage, type RuleStorageConstructOption };
