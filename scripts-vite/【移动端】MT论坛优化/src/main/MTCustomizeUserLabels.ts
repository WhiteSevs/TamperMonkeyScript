import { DOMUtils, log, pops, utils } from "@/env";
import { MTRouter } from "@/router/MTRouter";
import { UIInput } from "@components/setting/components/ui-input";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UITextArea } from "@components/setting/components/ui-textarea";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "@components/setting/panel-config";
import { ElementUtils } from "@/utils/ElementUtils";
import { MTRegExp } from "@/utils/MTRegExp";
import { RuleView } from "@components/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";

type LabelOption = {
  /** 是否启用 */
  enable: boolean;
  /** 唯一uuid */
  uuid: string;
  /** 规则名 */
  name: string;
  /** 用户uid */
  userUID: string;
  /** 标签名 */
  labelName: string;
  /** 标签颜色 */
  labelColor: string;
  /** 标签style */
  labelStyle: string;
  /** 标签自定义的点击事件 */
  labelClickEvent: string;
};

export const MTCustomizeUserLabels = {
  $key: {
    STORAGE_KEY: "mt-customizeUserLabels-rule",
  },
  init() {
    this.registerMenu();
    if (
      MTRouter.isPage() ||
      MTRouter.isGuide() ||
      MTRouter.isPlate() ||
      MTRouter.isPost() ||
      MTRouter.isSearch() ||
      MTRouter.isSpace()
    ) {
      let allData = this.getData();
      if (!allData.length) {
        return;
      }
      let lockFn = new utils.LockFunction(() => {
        this.runRule(allData);
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        callback: () => {
          lockFn.run();
        },
      });
    }
  },
  /**
   * 注册菜单
   */
  registerMenu() {
    ElementUtils.registerLeftMenu({
      name: "自定义用户标签",
      icon: "",
      iconColor: "#c70ea6",
      callback: () => {
        this.showView();
      },
    });
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
      title: "自定义用户标签",
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

            let userUID_template = UIInput("用户UID", "userUID", "", "", void 0, "必填，可正则，注意转义");
            Reflect.set(userUID_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $userUID = panelHandlerComponents.createSectionContainerItem_input(userUID_template).$el;

            let labelName_template = UIInput("标签名", "labelName", "", "", void 0, "必填");
            Reflect.set(labelName_template.props!, PROPS_STORAGE_API, generateStorageApi(data));

            let $labelName = panelHandlerComponents.createSectionContainerItem_input(labelName_template).$el;

            let labelColor_template = UIInput("标签颜色", "labelColor", "", "", void 0);
            Reflect.set(labelColor_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $labelColor = panelHandlerComponents.createSectionContainerItem_input(labelColor_template).$el;
            let $labelColor_input = $labelColor.querySelector("input")!;
            $labelColor.querySelector(".pops-panel-input__suffix")?.remove();
            $labelColor_input.setAttribute("type", "color");
            DOMUtils.css($labelColor_input, {
              margin: "unset",
              padding: "unset",
              width: "80px",
            });

            let labelStyle_template = UIInput("标签CSS", "labelStyle", "", "", void 0);
            Reflect.set(labelStyle_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $labelStyle = panelHandlerComponents.createSectionContainerItem_input(labelStyle_template).$el;

            let labelClickEvent_template = UITextArea("标签点击事件", "labelClickEvent", "", "", void 0);
            Reflect.set(labelClickEvent_template.props!, PROPS_STORAGE_API, generateStorageApi(data));
            let $labelClickEvent =
              panelHandlerComponents.createSectionContainerItem_textarea(labelClickEvent_template).$el;

            $fragment.append($enable, $name, $userUID, $labelName, $labelColor, $labelStyle, $labelClickEvent);
            return $fragment;
          },
          onsubmit: ($form, isEdit, editData) => {
            // 提交表单
            let $ulist_li = $form.querySelectorAll<HTMLLIElement>(".rule-form-ulist > li");
            let data: LabelOption = this.getTemplateData();
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
            if (data.userUID.trim() === "") {
              Qmsg.error("用户UID不能为空");
              return {
                success: false,
                data: data,
              };
            }
            if (data.labelName.trim() === "") {
              Qmsg.error("标签名不能为空");
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
                    .pops-panel-textarea textarea{
                        height: 150px;
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
    });
    ruleView.showView();
  },
  /**
   * 执行规则
   */
  runRule(ruleDataList: LabelOption[]) {
    let forumList = utils.getNodeListValue(
      ElementUtils.comiisForumList(),
      ElementUtils.comiisPostli(),
      ElementUtils.comiisMmlist()
    );
    if (!forumList.length) {
      return;
    }
    forumList.forEach(($post) => {
      if ($post.hasAttribute("data-custom-label")) {
        return;
      }
      $post.setAttribute("data-custom-label", "true");
      let mt_uid_array = Array.from($post.querySelectorAll("a"))
        .map((item) => {
          let url = item.href;
          let uid = url.match(MTRegExp.uid);
          if (uid) {
            return uid[uid.length - 1];
          }
        })
        .filter((item) => item != null);
      if (mt_uid_array.length) {
        let mt_uid = mt_uid_array[0];

        // 遍历规则
        let ownLabelList = ruleDataList.filter((item) => item.enable && mt_uid.match(new RegExp(item.userUID)));

        if (!ownLabelList.length) {
          return;
        }

        let $label = document.createElement("a");
        let $topLev = $post.querySelector(".top_lev")!;

        ownLabelList.forEach((labelOption) => {
          $label.className = $topLev.className;
          $label.classList.add("gm-custom-label");
          $label.style.cssText = `
                    background: ${labelOption.labelColor} !important;${labelOption.labelStyle || ""}`;
          $label.innerHTML = labelOption.labelName;
          DOMUtils.on($label, "click", async (event) => {
            DOMUtils.preventEvent(event);
            if (utils.isNotNull(labelOption.labelClickEvent)) {
              unsafeWindow.eval(labelOption.labelClickEvent);
            }
          });

          $topLev.parentElement!.append($label);
        });
      }
    });
  },
  /**
   * 获取模板数据
   */
  getTemplateData(): LabelOption {
    return {
      uuid: utils.generateUUID(),
      enable: true,
      name: "",
      userUID: "",
      labelName: "",
      labelColor: "",
      labelStyle: "",
      labelClickEvent: "",
    };
  },

  /**
   * 获取数据
   */
  getData() {
    return GM_getValue<LabelOption[]>(this.$key.STORAGE_KEY, []);
  },
  /**
   * 设置数据
   * @param data
   */
  setData(data: LabelOption[]) {
    GM_setValue(this.$key.STORAGE_KEY, data);
  },
  /**
   * 添加数据
   * @param data
   */
  addData(data: LabelOption) {
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
  updateData(data: LabelOption) {
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
  deleteData(data: LabelOption) {
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
};
