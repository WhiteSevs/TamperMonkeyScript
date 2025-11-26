import { DOMUtils, httpx, log, MenuRegister, pops, utils } from "@/env";
import { NetWorkHook } from "@/hook/NetWorkHook";
import { UIInput } from "@components/setting/components/ui-input";
import { UISwitch } from "@components/setting/components/ui-switch";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "@components/setting/panel-config";
import { RuleView } from "@components/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import { M3U8Filter } from "./M3U8Filter";
import { UITextArea } from "@components/setting/components/ui-textarea";
import { M3U8Menu } from "./M3U8Menu";
import { M3U8Parser } from "./M3U8Parser";
import { PanelUISize } from "@components/setting/panel-ui-size";

type RuleOption = {
  /** 唯一uuid */
  uuid: string;
  /** 启用状态 */
  enable: boolean;
  /** 规则名 */
  name: string;
  /** 规则数据 */
  data: {
    /** 匹配网站 */
    url: string;
    /** 是否启用通过过滤广告 */
    commonFilterAdsSegmentsFilePathLength: boolean;
    /** 是否启用通过相似度过滤广告 */
    commonFilterAdsSegmentsFilePathSimilar: boolean;
    /** 自定义过滤逻辑代码 */
    ownFilterCode: string;
  };
};

export const M3U8Rule = {
  $key: {
    STORAGE_KEY: "m3u8-rule",
  },
  $data: {
    /** 当前网站匹配到的规则 */
    matchedRule: <RuleOption[]>[],
  },
  init() {
    let allData = this.getData();
    this.registerMenu(allData);
    for (let index = 0; index < allData.length; index++) {
      try {
        const ruleOption = allData[index];
        if (ruleOption.enable && window.location.href.match(new RegExp(ruleOption.data.url))) {
          this.$data.matchedRule.push(ruleOption);
        }
      } catch (error) {
        log.error("m3u8过滤器 ==> 规则初始化出错", error);
      }
    }

    if (this.$data.matchedRule.length) {
      log.info("m3u8过滤器 ==> 当前网站执行的规则：", this.$data.matchedRule);
      // 启用hook
      NetWorkHook.hook();
      // 注册菜单
      M3U8Menu.updateISMatchedRuleMenu();
    } else {
    }
  },
  /**
   * 注册菜单
   */
  registerMenu(allData: RuleOption[]) {
    MenuRegister.update([
      {
        key: "m3u8-rule",
        text: `⚙ 自定义规则（${allData.length}条）`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          this.showView();
        },
      },
      {
        key: "m3u8-export-rule",
        text: `⚙ 规则导出`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          this.exportRule("m3u8-filter-rule.json");
        },
      },
      {
        key: "m3u8-import-rule",
        text: "⚙ 规则导入",
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          this.importRule();
        },
      },
    ]);
  },
  /**
   * 获取模板数据
   */
  getTemplateData(): RuleOption {
    return {
      uuid: utils.generateUUID(),
      enable: true,
      name: "",
      data: {
        url: "",
        commonFilterAdsSegmentsFilePathLength: true,
        commonFilterAdsSegmentsFilePathSimilar: false,
        ownFilterCode: "",
      },
    };
  },
  /**
   * 显示视图
   */
  showView() {
    const that = this;
    let panelHandlerComponents = pops.config.PanelHandlerComponents();
    /**
     * 自定义存储api的配置
     * @param uuid
     */
    function generateStorageApi(data: any) {
      return {
        get(key: string, defaultValue: any) {
          return (data as any)[key] ?? defaultValue;
        },
        set(key: string, value: any) {
          (data as any)[key] = value;
        },
      };
    }
    let ruleView = new RuleView({
      title: "m3u8自定义规则",
      data: () => {
        return this.getData();
      },
      getAddData: () => {
        return this.getTemplateData();
      },
      getDataItemName: (data) => {
        return data["name"];
      },
      updateData: (data) => {
        return this.updateData(data);
      },
      deleteData: (data) => {
        return this.deleteData(data);
      },
      getData: (data) => {
        let allData = this.getData();
        let findValue = allData.find((item) => item.uuid === data.uuid);
        return findValue ?? data;
      },
      itemControls: {
        enable: {
          enable: true,
          getEnable(data) {
            return data.enable;
          },
          callback: (data, enable) => {
            data.enable = enable;
            this.updateData(data);
          },
        },
        edit: {
          enable: true,
          getView: (data, isEdit) => {
            let $fragment = document.createDocumentFragment();
            if (!isEdit) {
              // @ts-ignore
              data = this.getTemplateData();
            }

            // 启用
            let enable_template = UISwitch("启用", "enable", true);
            Reflect.set(enable_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template).$el;

            // 规则名称
            let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
            Reflect.set(name_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $name = panelHandlerComponents.createSectionContainerItem_input(name_template).$el;

            // 匹配网址
            let data_url_template = UIInput("匹配网址", "url", "", "", void 0, "必填，可正则，注意转义");
            Reflect.set(data_url_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_url = panelHandlerComponents.createSectionContainerItem_input(data_url_template).$el;

            // 是否启用通用1过滤广告
            let data_commonFilterAdsSegmentsFilePathLength_template = UISwitch(
              "广告通杀1",
              "commonFilterAdsSegmentsFilePathLength",
              true,
              void 0,
              "使用文件名称长度比较"
            );
            Reflect.set(
              data_commonFilterAdsSegmentsFilePathLength_template.props!,
              PROPS_STORAGE_API,
              generateStorageApi(data.data)
            );
            let $data_commonFilterAdsSegmentsFilePathLength = panelHandlerComponents.createSectionContainerItem_switch(
              data_commonFilterAdsSegmentsFilePathLength_template
            ).$el;

            // 是否启用通用2过滤广告
            let data_commonFilterAdsSegmentsFilePathSimilar_template = UISwitch(
              "广告通杀2",
              "commonFilterAdsSegmentsFilePathSimilar",
              false,
              void 0,
              "使用文件名称相似度比较"
            );
            Reflect.set(
              data_commonFilterAdsSegmentsFilePathSimilar_template.props!,
              PROPS_STORAGE_API,
              generateStorageApi(data.data)
            );
            let $data_commonFilterAdsSegmentsFilePathSimilar = panelHandlerComponents.createSectionContainerItem_switch(
              data_commonFilterAdsSegmentsFilePathSimilar_template
            ).$el;

            // 自定义过滤代码
            let data_ownFilterCode_template = UITextArea(
              "自定义过滤js",
              "ownFilterCode",
              "",
              "",
              void 0,
              "参数：\n" +
                "    [m3u8Text]：需要处理的m3u8字符串\n" +
                "返回：[String]\n" +
                "\n" +
                "例如：\n" +
                "m3u8Text = m3u8Text.replace('','');\n" +
                "return m3u8Text;\n"
            );
            Reflect.set(data_ownFilterCode_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_ownFilterCode =
              panelHandlerComponents.createSectionContainerItem_textarea(data_ownFilterCode_template).$el;

            $fragment.appendChild($enable);
            $fragment.appendChild($name);
            $fragment.appendChild($data_url);
            $fragment.appendChild($data_commonFilterAdsSegmentsFilePathLength);
            $fragment.appendChild($data_commonFilterAdsSegmentsFilePathSimilar);
            $fragment.appendChild($data_ownFilterCode);
            return $fragment;
          },
          onsubmit: ($form, isEdit, editData) => {
            // 提交表单
            let $ulist_li = $form.querySelectorAll<HTMLLIElement>(".rule-form-ulist > li");
            let data: RuleOption = this.getTemplateData();
            if (isEdit) {
              data.uuid = editData!.uuid;
            }
            $ulist_li.forEach(($li) => {
              let viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
              let attrs = Reflect.get(viewConfig, "attributes");
              let storageApi = Reflect.get($li, PROPS_STORAGE_API);
              let key = Reflect.get(attrs, ATTRIBUTE_KEY);
              let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
              let value = storageApi.get(key, defaultValue);
              if (Reflect.has(data, key)) {
                Reflect.set(data, key, value);
              } else if (Reflect.has(data.data, key)) {
                Reflect.set(data.data, key, value);
              } else {
                log.error(`${key}不在数据中`);
              }
            });
            if (data.name.trim() === "") {
              Qmsg.error("规则名称不能为空");
              return {
                success: false,
                data: data,
              };
            }
            if (data.data.url.trim() === "") {
              Qmsg.error("匹配网址不能为空");
              return {
                success: false,
                data: data,
              };
            }
            if (isEdit) {
              return {
                success: this.updateData(data),
                data: data,
              };
            } else {
              return {
                success: this.addData(data),
                data: data,
              };
            }
          },

          style: /*css*/ `
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `,
        },
        delete: {
          enable: true,
          deleteCallBack: (data) => {
            return this.deleteData(data);
          },
        },
      },
      bottomControls: {
        filter: {
          enable: true,
          option: [
            {
              name: "过滤【启用】",
              filterCallBack(data) {
                return data.enable;
              },
            },
            {
              name: "过滤【未启用】",
              filterCallBack(data) {
                return !data.enable;
              },
            },
            {
              name: "过滤【当前网址运行的规则】",
              filterCallBack(data) {
                try {
                  return Boolean(window.location.href.match(new RegExp(data.data.url)));
                } catch (error) {
                  return false;
                }
              },
            },
          ],
        },
      },
    });
    ruleView.showView();
  },
  /**
   * 执行规则
   */
  runRule(m3u8Text: string): string {
    let handlerM3U8Text = m3u8Text;
    for (let index = 0; index < this.$data.matchedRule.length; index++) {
      try {
        const RuleOption = this.$data.matchedRule[index];
        const RuleOptionData = RuleOption.data;
        if (RuleOptionData.commonFilterAdsSegmentsFilePathLength) {
          const { filterInfo, m3u8Text: __handler_m3u8_text__ } =
            M3U8Filter.filterAdsWithFilePathLength(handlerM3U8Text);
          handlerM3U8Text = __handler_m3u8_text__;
        }
        if (RuleOptionData.commonFilterAdsSegmentsFilePathSimilar) {
          const { filterInfo, m3u8Text: __handler_m3u8_text__ } =
            M3U8Filter.filterAdsWithFilePathSimilar(handlerM3U8Text);
          handlerM3U8Text = __handler_m3u8_text__;
        }

        if (RuleOptionData.ownFilterCode.trim() !== "") {
          // 执行自定义js代码
          let ownFilterCodeFunction = new Function(
            "m3u8Text",
            "M3U8Filter",
            "M3U8Parser",
            RuleOptionData.ownFilterCode
          );
          let ownFilter_m3u8_text = ownFilterCodeFunction(handlerM3U8Text, M3U8Filter, M3U8Parser);
          if (typeof ownFilter_m3u8_text === "string") {
            handlerM3U8Text = ownFilter_m3u8_text;
          } else {
            log.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串", ownFilter_m3u8_text);
          }
        }

        // 只执行一次
        break;
      } catch (error) {
        log.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常", error);
      }
    }

    return handlerM3U8Text;
  },
  /**
   * 获取数据
   */
  getData() {
    return GM_getValue<RuleOption[]>(this.$key.STORAGE_KEY, []);
  },
  /**
   * 设置数据
   * @param data
   */
  setData(data: RuleOption[]) {
    GM_setValue(this.$key.STORAGE_KEY, data);
  },
  /**
   * 添加数据
   * @param data
   */
  addData(data: RuleOption) {
    let localData = this.getData();
    let findIndex = localData.findIndex((item) => item.uuid == data.uuid);
    if (findIndex === -1) {
      localData.push(data);
      GM_setValue(this.$key.STORAGE_KEY, localData);
      return true;
    } else {
      return false;
    }
  },
  /**
   * 更新数据
   * @param data
   */
  updateData(data: RuleOption) {
    let localData = this.getData();
    let index = localData.findIndex((item) => item.uuid == data.uuid);
    let updateFlag = false;
    if (index !== -1) {
      updateFlag = true;
      localData[index] = data;
    }
    this.setData(localData);
    return updateFlag;
  },
  /**
   * 删除数据
   * @param data
   */
  deleteData(data: RuleOption) {
    let localData = this.getData();
    let index = localData.findIndex((item) => item.uuid == data.uuid);
    let deleteFlag = false;
    if (index !== -1) {
      deleteFlag = true;
      localData.splice(index, 1);
    }
    this.setData(localData);
    return deleteFlag;
  },
  /**
   * 清空数据
   */
  clearData() {
    GM_deleteValue(this.$key.STORAGE_KEY);
  },
  /**
   * 导出规则
   */
  exportRule(fileName = "rule.json") {
    let allRule = this.getData();
    let blob = new Blob([JSON.stringify(allRule, null, 4)]);
    let blobUrl = window.URL.createObjectURL(blob);
    let $a = DOMUtils.createElement("a");
    $a.href = blobUrl;
    $a.download = fileName;
    $a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);
  },
  /**
   * 导入规则
   * @param importEndCallBack 导入完毕后的回调
   */
  importRule(importEndCallBack?: () => void) {
    let $alert = pops.alert({
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
    let $local = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='local']")!;
    /** 网络导入 */
    let $network = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='network']")!;
    /** 剪贴板导入 */
    let $clipboard = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='clipboard']")!;
    /**
     * 将获取到的规则更新至存储
     */
    let updateRuleToStorage = (data: any[]) => {
      let allData = this.getData();
      let addNewData: typeof allData = [];
      for (let index = 0; index < data.length; index++) {
        const dataItem = data[index];
        let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
        if (findIndex !== -1) {
          // 存在相同的uuid的规则
          // 不做处理
        } else {
          // 追加
          addNewData.push(dataItem);
        }
      }
      allData = allData.concat(addNewData);
      this.setData(allData);

      Qmsg.success(`共 ${data.length} 条规则，新增 ${addNewData.length} 条`);
      importEndCallBack?.();
    };
    /**
     * @param subscribeText 订阅文件文本
     */
    let importFile = (subscribeText: string) => {
      return new Promise<boolean>((resolve) => {
        let data = utils.toJSON(subscribeText);
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

        updateRuleToStorage(data);
        resolve(true);
      });
    };
    // 本地导入
    DOMUtils.on($local, "click", (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      let $input = DOMUtils.createElement("input", {
        type: "file",
        accept: ".json",
      });
      DOMUtils.on($input, ["propertychange", "input"], (event) => {
        if (!$input.files?.length) {
          return;
        }
        let uploadFile = $input.files![0];
        let fileReader = new FileReader();
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
      let $prompt = pops.prompt({
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
            callback: async (eventDetails, event) => {
              let url = eventDetails.text;
              if (utils.isNull(url)) {
                Qmsg.error("请填入完整的url");
                return;
              }
              let $loading = Qmsg.loading("正在获取配置...");
              let response = await httpx.get(url, {
                allowInterceptConfig: false,
              });
              $loading.close();
              if (!response.status) {
                log.error(response);
                Qmsg.error("获取配置失败", { consoleLogContent: true });
                return;
              }
              let flag = await importFile(response.data.responseText);
              if (!flag) {
                return;
              }
              eventDetails.close();
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
      let $promptInput = $prompt.$shadowRoot.querySelector<HTMLInputElement>("input")!;
      let $promptOk = $prompt.$shadowRoot.querySelector<HTMLElement>(".pops-prompt-btn-ok")!;
      DOMUtils.on($promptInput, ["input", "propertychange"], (event) => {
        let value = DOMUtils.val($promptInput);
        if (value === "") {
          DOMUtils.attr($promptOk, "disabled", "true");
        } else {
          DOMUtils.removeAttr($promptOk, "disabled");
        }
      });
      DOMUtils.onKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
        if (keyName === "Enter" && otherCodeList.length === 0) {
          let value = DOMUtils.val($promptInput);
          if (value !== "") {
            DOMUtils.emit($promptOk, "click");
          }
        }
      });
      DOMUtils.emit($promptInput, "input");
    });
    // 剪贴板导入
    DOMUtils.on($clipboard, "click", async (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      let clipboardInfo = await utils.getClipboardInfo();
      if (clipboardInfo.error != null) {
        Qmsg.error(clipboardInfo.error.toString());
        return;
      }
      if (clipboardInfo.content.trim() === "") {
        Qmsg.warning("获取到的剪贴板内容为空");
        return;
      }
      let flag = await importFile(clipboardInfo.content);
      if (!flag) {
        return;
      }
    });
  },
};
