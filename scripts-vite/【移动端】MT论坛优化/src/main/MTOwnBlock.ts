import { $$, log, pops, utils } from "@/env";
import { MTRouter } from "@/router/MTRouter";
import { UIInput } from "@components/setting/components/ui-input";
import { UISwitch } from "@components/setting/components/ui-switch";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "@components/setting/panel-config";
import { ElementUtils } from "@/utils/ElementUtils";
import { MTRegExp } from "@/utils/MTRegExp";
import { RuleView } from "@components/utils/RuleView";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

type BlockOption = {
  /** 唯一uuid */
  uuid: string;
  /** 启用状态 */
  enable: boolean;
  /** 规则名 */
  name: string;
  /** 规则数据 */
  data: {
    /** 用户名 */
    userName: string;
    /** 用户UID */
    userUID: string;
    /** 用户等级 */
    userLevel: string;
    /** 帖子url */
    postUrl: string;
    /** 帖子标题 */
    postTitle: string;
    /** 帖子内容 */
    postContent: string;
    /** 帖子所在的板块名 */
    postPlateName: string;
  };
};

export const MTOwnBlock = {
  $key: {
    STORAGE_KEY: "mt-own-block-rule",
  },
  $data: {
    isRegister: false,
  },
  init() {
    this.registerMenu();
    let lockFn = new utils.LockFunction(() => {
      this.runRule();
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
  },
  /**
   * 注册菜单
   */
  registerMenu() {
    if (this.$data.isRegister) {
      return;
    }
    this.$data.isRegister = true;
    ElementUtils.registerLeftMenu({
      name: "我的屏蔽",
      icon: "",
      iconColor: "#000",
      callback: () => {
        this.showView();
      },
    });
  },
  /**
   * 获取模板数据
   */
  getTemplateData(): BlockOption {
    return {
      uuid: utils.generateUUID(),
      enable: true,
      name: "",
      data: {
        userName: "",
        userUID: "",
        userLevel: "",
        postUrl: "",
        postTitle: "",
        postContent: "",
        postPlateName: "",
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
      title: "我的屏蔽",
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

            // 用户名
            let data_userName_template = UIInput("用户名", "userName", "", "", void 0, "可正则");
            Reflect.set(data_userName_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_userName = panelHandlerComponents.createSectionContainerItem_input(data_userName_template).$el;

            // 用户UID
            let data_userUID_template = UIInput("用户UID", "userUID", "", "", void 0, "可正则");
            Reflect.set(data_userUID_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_userUID = panelHandlerComponents.createSectionContainerItem_input(data_userUID_template).$el;

            // 用户等级
            let data_userLevel_template = UIInput("用户等级", "userLevel", "", "", void 0, "可正则");
            Reflect.set(data_userLevel_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_userLevel = panelHandlerComponents.createSectionContainerItem_input(data_userLevel_template).$el;

            // 帖子url
            let data_postUrl_template = UIInput("帖子url", "postUrl", "", "", void 0, "可正则");
            Reflect.set(data_postUrl_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_postUrl = panelHandlerComponents.createSectionContainerItem_input(data_postUrl_template).$el;

            // 帖子标题
            let data_postTitle_template = UIInput("帖子标题", "postTitle", "", "", void 0, "可正则");
            Reflect.set(data_postTitle_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_postTitle = panelHandlerComponents.createSectionContainerItem_input(data_postTitle_template).$el;

            // 帖子内容
            let data_postContent_template = UIInput("帖子内容", "postContent", "", "", void 0, "可正则");
            Reflect.set(data_postContent_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_postContent =
              panelHandlerComponents.createSectionContainerItem_input(data_postContent_template).$el;

            // 帖子所在的板块名
            let data_postPlateName_template = UIInput("帖子所在的板块名", "postPlateName", "", "", void 0, "可正则");
            Reflect.set(data_postPlateName_template.props!, PROPS_STORAGE_API, generateStorageApi(data.data));
            let $data_postPlateName =
              panelHandlerComponents.createSectionContainerItem_input(data_postPlateName_template).$el;
            $fragment.appendChild($enable);
            $fragment.appendChild($name);
            $fragment.appendChild($data_userName);
            $fragment.appendChild($data_userUID);
            $fragment.appendChild($data_userLevel);
            $fragment.appendChild($data_postUrl);
            $fragment.appendChild($data_postTitle);
            $fragment.appendChild($data_postContent);
            $fragment.appendChild($data_postPlateName);
            return $fragment;
          },
          onsubmit: ($form, isEdit, editData) => {
            // 提交表单
            let $ulist_li = $form.querySelectorAll<HTMLLIElement>(".rule-form-ulist > li");
            let data: BlockOption = this.getTemplateData();
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
  runRule() {
    let shieldUserList = this.getData();
    function checkIsFilter(postForumInfo: BlockOption["data"]) {
      for (const shieldItem of shieldUserList) {
        let shieldOption = shieldItem["data"];
        let findValue = Object.keys(shieldOption).find((keyName) => {
          let value = (shieldOption as any)[keyName];
          if (utils.isNotNull(value)) {
            let regExpValue = new RegExp(value, "i");
            let postForumValue = Reflect.get(postForumInfo, keyName);
            if (
              typeof postForumValue === "string" &&
              utils.isNotNull(postForumValue) &&
              postForumValue.match(regExpValue)
            ) {
              log.info(`屏蔽`, [shieldOption, postForumValue]);
              return true;
            }
          }
          return false;
        });
        if (findValue) {
          return true;
        }
      }
      return false;
    }
    if (MTRouter.isGuide() || MTRouter.isPlate() || MTRouter.isPost()) {
      // 导航、板块、帖子
      let shieldUserList = this.getData();
      /* 帖子元素列表 */
      document.querySelectorAll<HTMLElement>(".comiis_forumlist .forumlist_li").forEach((item) => {
        let $topUser = item.querySelector<HTMLAnchorElement>("a.top_user")!;
        let uidMatch = $topUser.href.match(MTRegExp.uid)!;
        let postForumInfo: BlockOption["data"] = {
          /* 用户名 */
          userName: $topUser.innerText,
          /* 用户UID */
          userUID: uidMatch[uidMatch.length - 1].trim(),
          /* 用户等级 */
          userLevel: item.querySelector<HTMLSpanElement>("span.top_lev")!.innerText.replace("Lv.", ""),
          /* 帖子Url */
          postUrl:
            item.querySelector<HTMLAnchorElement>(".mmlist_li_box a")!.getAttribute("href") ||
            item.querySelector<HTMLAnchorElement>(".mmlist_li_box a")!.getAttribute("data-href")!,
          /* 帖子标题 */
          postTitle: item.querySelector<HTMLAnchorElement>(".mmlist_li_box h2 a")?.innerText || "",
          /* 帖子内容(缩略) */
          postContent: item.querySelector<HTMLElement>(".mmlist_li_box .list_body")!.innerText,
          /* 帖子板块 */
          postPlateName: (item.querySelector<HTMLAnchorElement>(".forumlist_li_time a.f_d") ||
            item.querySelector<HTMLElement>(".comiis_xznalist_bk.cl"))!.innerText
            .replace(//g, "")
            .replace(/\s*/g, "")
            .replace(/来自/g, ""),
        };
        if (utils.isNull(postForumInfo.postPlateName)) {
          postForumInfo.postPlateName = document.querySelector<HTMLElement>("#comiis_wx_title_box")!.innerText;
        }
        /* console.log(`
                    用户名: ${postForumInfo.user}
                    用户UID: ${postForumInfo.uid}
                    用户等级: ${postForumInfo.level}
                    帖子Url: ${postForumInfo.url}
                    帖子标题: ${postForumInfo.title}
                    帖子内容(缩略): ${postForumInfo.content}
                    帖子板块: ${postForumInfo.plate}
                    `); */
        if (checkIsFilter(postForumInfo)) {
          item.remove();
        }
      });
      /* 帖子内的每个人的元素列表 */
      document.querySelectorAll<HTMLElement>(".comiis_postlist .comiis_postli").forEach((item) => {
        let $topUser = item.querySelector<HTMLAnchorElement>("a.top_user")!;
        let uidMatch = $topUser.href.match(MTRegExp.uid)!;
        let postForumInfo: BlockOption["data"] = {
          /* 用户名 */
          userName: $topUser.innerText!,
          /* 用户UID */
          userUID: uidMatch[uidMatch.length - 1].trim(),
          /* 用户等级 */
          userLevel: item.querySelector<HTMLAnchorElement>("a.top_lev")!.innerText.replace("Lv.", ""),
          /* 帖子Url */
          postUrl: undefined as any,
          /* 帖子标题 */
          postTitle: undefined as any,
          /* 帖子内容(缩略) */
          postContent: item.querySelector<HTMLElement>(".comiis_message_table")!.innerText,
          /* 帖子板块 */
          postPlateName: undefined as any,
        };

        /* console.log(`
                    用户名: ${postForumInfo.user}
                    用户UID: ${postForumInfo.uid}
                    用户等级: ${postForumInfo.level}
                    帖子内容: ${postForumInfo.content}
                    `); */
        if (checkIsFilter(postForumInfo)) {
          item.remove();
        }
      });
    }
    if (MTRouter.isMessageList()) {
      // 消息列表
      let shieldUserList = this.getData();
      $$<HTMLLIElement>(".comiis_pms_box .comiis_pmlist ul li").forEach((item) => {
        let uidMatch = item.querySelector<HTMLAnchorElement>("a.b_b")!.href.match(MTRegExp.uid)!;
        let postForumInfo: BlockOption["data"] = {
          /* 用户名 */
          userName: item
            .querySelector("h2")!
            .innerText.replace(item.querySelector<HTMLSpanElement>("h2 span")!.innerText, "")
            .replace(/\s*/, ""),
          /* 用户UID */
          userUID: uidMatch[uidMatch.length - 1].trim(),
          /* 用户等级 */
          userLevel: void 0 as any,
          /* 帖子Url */
          postUrl: item.querySelector<HTMLAnchorElement>("a.b_b")!.href,
          /* 帖子标题 */
          postTitle: undefined as any,
          /* 帖子内容(缩略) */
          postContent: item.querySelector<HTMLElement>("p.f_c")!.innerText!.trim(),
          /* 帖子板块 */
          postPlateName: undefined as any,
        };
        /* console.log(`
                        用户名: ${postForumInfo.user}
                        用户UID: ${postForumInfo.uid}
                        帖子内容: ${postForumInfo.content}
                        `); */
        if (checkIsFilter(postForumInfo)) {
          item.remove();
        }
      });
    }
  },
  /**
   * 获取数据
   */
  getData() {
    return GM_getValue<BlockOption[]>(this.$key.STORAGE_KEY, []);
  },
  /**
   * 设置数据
   * @param data
   */
  setData(data: BlockOption[]) {
    GM_setValue(this.$key.STORAGE_KEY, data);
  },
  /**
   * 添加数据
   * @param data
   */
  addData(data: BlockOption) {
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
  updateData(data: BlockOption) {
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
  deleteData(data: BlockOption) {
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
