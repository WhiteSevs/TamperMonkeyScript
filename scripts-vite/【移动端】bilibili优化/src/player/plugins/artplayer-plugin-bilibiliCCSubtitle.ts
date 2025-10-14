import { BilibiliApiResponseCheck } from "@/api/BilibiliApiResponseCheck";
import { BilibiliApiConfig } from "@/api/BilibiliApiConfig";
import { httpx, utils } from "@/env";
import Artplayer from "artplayer";
import type { Setting, SettingOption } from "artplayer";
import Chinese, { type CustomStr } from "s2t-chinese";
import { Panel } from "@components/setting/panel";

const TAG = "[artplayer-plugin-bilibiliCCSubTitle]：";
/**
 * 自定义字符库（补充）
 */
const SubTitleCustomStr = {
  src: "臟妳為傢蔔餵眾係姊託迴蹟儘封啟",
  des: "脏你为家卜喂众系姐托回迹尽对启",
  more_src: ["乾脆", "随著", "相信著", "奇蹟", "拚命", "採取", "製造"],
  more_des: ["干脆", "随着", "相信着", "奇迹", "拼命", "采取", "制造"],
  _custom_str: [] as CustomStr,
  generteCustomStr() {
    for (let index = 0; index < this.src.length; index++) {
      this._custom_str.push({
        src: this.src[index],
        des: this.des[index],
      });
    }
    for (let index = 0; index < this.more_src.length; index++) {
      this._custom_str.push({
        src: this.more_src[index],
        des: this.more_des[index],
      });
    }
  },
  getCustomStr(): CustomStr {
    return this._custom_str;
  },
};

const SubTitleEvent = {
  /**
   * 重置
   */
  reset() {
    this.unbind();
  },
  /**
   * 绑定事件
   */
  bind() {
    SubTitle.art.on("video:timeupdate", this.event, this);
  },
  /**
   * 取消绑定事件
   */
  unbind() {
    // 清空字幕内容
    SubTitle.clearSubTitle();
    SubTitle.art.off("video:timeupdate", this.event);
  },
  /**
   * 事件
   */
  event() {
    // 视频进度更新（频繁触发）
    let currentTime = SubTitle.art.currentTime;
    let currentSubTitleData = SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex]?.data;
    if (!currentSubTitleData) {
      // 没有字幕信息
      return;
    }
    // 获取字幕信息
    let findValue = currentSubTitleData.find((item) => {
      // 获取在当前时间区间的弹幕
      if (item.to >= currentTime && item.from <= currentTime) {
        return true;
      } else {
        return false;
      }
    });
    // 遍历已有的字幕元素
    // 先排查跟旧的字幕元素是否相同
    let $allSubTitleLine = Array.from(SubTitle.$el.$subtitle.querySelectorAll(".art-subtitle-line"));
    for (let index = 0; index < $allSubTitleLine.length; index++) {
      const $oldSubtitleLine = $allSubTitleLine[index];
      const { from: oldFrom, to: oldTo } = Reflect.get($oldSubtitleLine, "data-subtitle-line-info");
      if (oldTo <= currentTime || oldFrom >= currentTime) {
        // 不在事件范围内
        $oldSubtitleLine.remove();
      } else {
        if (findValue) {
          if (findValue.from === oldFrom && findValue.to === oldTo) {
            // 是相同的字幕
            return;
          }
        }
      }
    }
    if (findValue) {
      let $subtitleLine = document.createElement("div");
      $subtitleLine.className = "art-subtitle-line";
      Reflect.set($subtitleLine, "data-subtitle-line-info", findValue);
      $subtitleLine.setAttribute("data-group", "0");
      $subtitleLine.innerHTML = findValue.content;
      SubTitle.$el.$subtitle.appendChild($subtitleLine);
    }
  },
};

const SubTitleData = {
  /**
   * 所有的字幕信息
   */
  allSubTitleInfo: <SubTitleData[]>[],
  /**
   * 当前选择的字幕下标
   */
  currentSelectIndex: -1,
  /**
   * 重置所有data数据
   */
  reset() {
    this.allSubTitleInfo.length = 0;
    this.currentSelectIndex = -1;
  },
};

const SubTitle = {
  art: null as any as Artplayer,
  $key: {
    plugin_KEY: "plugin-bilibili-cc-subtitle",
  },
  $el: {
    /**
     * 字幕容器
     */
    $subtitle: null as any as HTMLDivElement,
  },
  /**
   * 更新字幕信息
   * @param option
   */
  async update(option: ArtPlayerPluginBilibiliSubTitleOption) {
    const that = this;
    const STORAGE_KEY = `artplayer-bili-cc-subtitle-${option.from}`;
    const SubTitleSettingLayer = {
      config: {
        NAME: "setting-bilibili-cc-subtitle",
      },
      /**
       * 获取默认的配置项
       */
      getDefaultSettingOption: (): Setting => {
        return {
          name: SubTitleSettingLayer.config.NAME,
          width: 200,
          html: "字幕",
          tooltip: "",
          icon: /*html*/ `
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,
          selector: [],
          onSelect: function (selector) {
            let itemInfo = selector as any as SettingOption & SubTitleSettingExtraOption;
            that.art.storage.set(STORAGE_KEY, {
              lan: itemInfo.subTitle_lan,
            } as ArtPlayerPluginBilibiliSubTitleStorageOption);
            SubTitleEvent.unbind();
            SubTitleData.currentSelectIndex = itemInfo.subTitle_index;
            if (itemInfo.subTitle_index !== -1) {
              SubTitleEvent.bind();
            }
            return selector.html;
          },
        };
      },
      /**
       * 获取配置项
       *
       * 因为配置会被动态修改，
       */
      getSettingOption: (): Setting => {
        // 设置菜单项
        const settingOption: Setting = SubTitleSettingLayer.getDefaultSettingOption();
        // 配置selector列表
        const defaultSelector = SubTitleSettingLayer.getDefaultSettingSelector();
        settingOption!.selector!.push(defaultSelector);
        // 配置默认数据
        settingOption.tooltip = defaultSelector.html;
        return settingOption;
      },
      /**
       * 获取默认的selector配置项
       */
      getDefaultSettingSelector: (): Setting & SubTitleSettingExtraOption => {
        return {
          default: true,
          html: "无",
          subTitle_lan: "",
          subTitle_index: 0,
          subTitle_data: [],
        };
      },
      /**
       * 添加配置菜单
       */
      addSetting(selectorList?: Setting[]) {
        let settingOption = this.getSettingOption();
        if (selectorList && selectorList.length) {
          settingOption.selector!.push(...selectorList);

          // 处理菜单中的默认选项
          let firstSubTitle = settingOption!.selector![0];
          let currentSelectSubTitle = {
            index: 0,
            html: firstSubTitle.html,
          };
          // 获取本地存储的上次选的字幕，默认无
          const storageInfo = that.art.storage.get(STORAGE_KEY) as ArtPlayerPluginBilibiliSubTitleStorageOption | null;
          if (storageInfo) {
            // 判断当前的字幕中是否同样的字幕，存在的话就使用这个字幕，默认第一个
            const findInfoIndex = settingOption.selector!.findIndex(
              (item: any) => item.subTitle_lan === storageInfo.lan
            );
            if (findInfoIndex !== -1) {
              const findInfo = settingOption.selector![findInfoIndex];
              console.log(TAG + "选择字幕：" + findInfo.html);
              currentSelectSubTitle.index = findInfoIndex;
              currentSelectSubTitle.html = findInfo.html;
            } else {
              console.warn(TAG + "没有找到上次选的字幕，使用当前默认无");
            }
          }
          // 更新default
          for (let index = 0; index < settingOption.selector!.length; index++) {
            settingOption.selector![index].default = index === currentSelectSubTitle.index;
          }
          // 更新tooltip
          settingOption.tooltip = currentSelectSubTitle.html;
          // 更新data
          SubTitleData.currentSelectIndex = currentSelectSubTitle.index;
        }
        if (this.isAddSetting()) {
          console.log(TAG + "更新字幕菜单", selectorList ?? []);
          that.art.setting.update(settingOption);
        } else {
          // 添加菜单
          that.art.setting.add(settingOption);
        }
      },
      /**
       * 判断是否已经添加了配置菜单
       */
      isAddSetting() {
        return that.art.setting.find(this.config.NAME) != null;
      },
    };

    SubTitleData.reset();
    SubTitleEvent.reset();

    // 配置selector列表
    const defaultSelector = SubTitleSettingLayer.getDefaultSettingSelector();

    SubTitleData.currentSelectIndex = 0;
    SubTitleData.allSubTitleInfo.push({
      name: defaultSelector.html as string,
      lan: defaultSelector.subTitle_lan,
      data: defaultSelector.subTitle_data,
    });
    SubTitleSettingLayer.addSetting();
    // 额外的菜单项
    const settingSelectorList: Setting[] = [];
    // 初始化字幕容器
    this.$el.$subtitle = this.art.template.$subtitle;

    const searchParamsData = {
      cid: option.cid,
    };
    if (option.ep_id) {
      Reflect.set(searchParamsData, "ep_id", option.ep_id);
    }
    if (option.aid) {
      Reflect.set(searchParamsData, "aid", option.aid);
    } else if (option.bvid) {
      Reflect.set(searchParamsData, "bvid", option.bvid);
    } else {
      throw new TypeError("avid or bvid must give one");
    }
    // 获取视频信息（里面有字幕信息）
    const videoInfoResponse = await httpx.get(
      `https://${BilibiliApiConfig.web_host}/x/player/v2?${utils.toSearchParamsStr(searchParamsData)}`,
      {
        fetch: true,
        allowInterceptConfig: false,
        responseType: "json",
        headers: {
          Host: "www.bilibili.com",
          Referer: "https://www.bilibili.com",
        },
      }
    );

    if (!videoInfoResponse.status) {
      console.error(TAG + "网络异常，获取视频的字幕信息失败", videoInfoResponse);
      return;
    }
    console.log(TAG + "视频的字幕信息", videoInfoResponse);
    // 解析json
    const videoInfoResultJSON = utils.toJSON(videoInfoResponse.data.responseText);
    if (!BilibiliApiResponseCheck.isWebApiSuccess(videoInfoResultJSON)) {
      console.error(TAG + "获取视频的字幕信息失败", videoInfoResultJSON);
      return;
    }
    // 字幕链接列表
    let subTitleUrlInfoList = videoInfoResultJSON["data"]["subtitle"]["subtitles"] as {
      ai_status: number;
      ai_type: number;
      id: number;
      id_str: string;
      is_lock: boolean;
      lan: string;
      lan_doc: string;
      subtitle_url: string;
      type: number;
    }[];

    if (!subTitleUrlInfoList.length) {
      console.warn(TAG + "获取字幕链接列表为空", videoInfoResultJSON);
      return;
    }
    // 依次加载字幕json
    for (let index = 0; index < subTitleUrlInfoList.length; index++) {
      const subTitleUrlInfo = subTitleUrlInfoList[index];
      console.log(TAG + "请求字幕链接信息：" + subTitleUrlInfo.subtitle_url);
      if (utils.isNull(subTitleUrlInfo.subtitle_url)) {
        continue;
      }
      const subTitleInfoResponse = await httpx.get(subTitleUrlInfo.subtitle_url, {
        responseType: "json",
        allowInterceptConfig: false,
        headers: {
          // Host: "www.bilibili.com",
          Referer: "https://www.bilibili.com",
          "User-Agent": utils.getRandomPCUA(),
        },
      });
      if (subTitleInfoResponse.status) {
        console.log(TAG + "成功获取字幕信息");
        // 解析json
        const subTitleInfoJSON = utils.toJSON(subTitleInfoResponse.data.responseText);
        // 字幕信息JSON
        const subTitleInfo = subTitleInfoJSON["body"] as {
          content: string;
          from: number;
          location: number;
          to: number;
        }[];
        let currentIndex = SubTitleData.allSubTitleInfo.length;
        let data: SubTitleData = {
          name: subTitleUrlInfo.lan_doc,
          lan: subTitleUrlInfo.lan,
          data: subTitleInfo,
        };
        SubTitleData.allSubTitleInfo.push(data);
        // 添加菜单新的信息
        settingSelectorList.push({
          html: subTitleUrlInfo.lan_doc,
          subTitle_index: currentIndex,
          subTitle_lan: subTitleUrlInfo.lan,
          subTitle_data: subTitleInfo,
        });
      } else {
        console.error(TAG + "请求字幕链接信息失败", subTitleInfoResponse);
      }
    }
    if (Panel.getValue("bili-bangumi-generateSimpleChineseSubtitle")) {
      // 繁体转简体
      let subTitleHant = SubTitleData.allSubTitleInfo.find((item) => {
        return item.lan === "zh-Hant" || item.name.includes("繁体");
      });
      if (subTitleHant) {
        // 繁体转简体
        // 生成简中字幕
        let simpleChineseSubtitleData: ArtPlayerPluginBilibiliSubTitleInfo[] = [];
        subTitleHant.data.forEach((item) => {
          const { content, ...otherData } = item;
          const translateContent = Chinese.t2s(content, SubTitleCustomStr.getCustomStr());
          simpleChineseSubtitleData.push({
            content: translateContent,
            ...otherData,
          });
        });

        let subTitleName = "简体（自动生成）";
        let currentIndex = SubTitleData.allSubTitleInfo.length;
        SubTitleData.allSubTitleInfo.push({
          name: subTitleName,
          lan: "zh-CN-auto",
          data: simpleChineseSubtitleData,
        });
        // 动态添加菜单
        settingSelectorList.push({
          html: subTitleName,
          subTitle_index: currentIndex,
          subTitle_lan: "zh-CN-auto",
          subTitle_data: simpleChineseSubtitleData,
        } as Setting & SubTitleSettingExtraOption);
      }
    }

    console.log(TAG + "加载视频CC字幕信息", SubTitleData.allSubTitleInfo);

    if (
      SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex].data == null ||
      SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex].data.length == 0
    ) {
      // 空字幕
    } else {
      SubTitleEvent.bind();
    }

    // 更新菜单数据
    SubTitleSettingLayer.addSetting(settingSelectorList);
  },
  /**
   * 清空字幕
   */
  clearSubTitle() {
    if (this.$el.$subtitle) {
      this.$el.$subtitle.innerHTML = "";
    }
  },
  /**
   * 更新artplayer实例
   * @param art
   */
  updateArtPlayer(art: Artplayer) {
    this.art = art;
  },
};

export type ArtPlayerPluginBilibiliSubTitleOption = {
  /** 视频的aid */
  aid: string | number;
  /** 视频的bvid */
  bvid: string;
  /** 视频的cid */
  cid: string | number;
  /** 视频的ep_id，一般是番剧的 */
  ep_id?: string | number;
  /** 来源 */
  from: "video" | "bangumi";
};
type ArtPlayerPluginBilibiliSubTitleInfo = {
  /** 字幕内容 */
  content: string;
  /** 开始时间 */
  from: number;
  /** 结束时间 */
  to: number;
};

type SubTitleData = {
  /** 字幕显示的名字 */
  name: string;
  /** 语言（代码） */
  lan: string;
  /** 字幕的位置信息 */
  data: ArtPlayerPluginBilibiliSubTitleInfo[];
};

type SubTitleSettingExtraOption = {
  /** 字幕语言代码 */
  subTitle_lan: string;
  /** 字幕数据下标 */
  subTitle_index: number;
  /** 字幕数据 */
  subTitle_data: ArtPlayerPluginBilibiliSubTitleInfo[];
};
type ArtPlayerPluginBilibiliSubTitleStorageOption = {
  /** 字幕语言代码 */
  lan: string;
};

export type ArtPlayerPluginBilibiliSubTitleResult = {
  name: string;
  /** 更新视频时调用，更新字幕 */
  update: (option: ArtPlayerPluginBilibiliSubTitleOption) => void;
};
/**
 * 加载Bilibili的CC字幕的插件
 */
export function artplayerPluginBilibiliCCSubTitle(option: ArtPlayerPluginBilibiliSubTitleOption) {
  return (art: Artplayer): ArtPlayerPluginBilibiliSubTitleResult => {
    SubTitleCustomStr.generteCustomStr();
    // 更新实例
    SubTitle.updateArtPlayer(art);
    SubTitle.update(option);
    return {
      name: SubTitle.$key.plugin_KEY,
      update(option: ArtPlayerPluginBilibiliSubTitleOption) {
        SubTitle.update(option);
      },
    };
  };
}

/**
 * 插件id
 */
export const ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY = SubTitle.$key.plugin_KEY;
