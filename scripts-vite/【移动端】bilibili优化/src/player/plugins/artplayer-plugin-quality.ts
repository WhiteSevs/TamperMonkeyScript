import Artplayer from "artplayer";
import type { ComponentOption, Selector } from "artplayer/types/component";

const TAG = "[artplayer-plugin-quality]：";

export const ArtPlayer_PLUGIN_QUALITY_KEY = "artplayer-plugin-quality";

export type ArtPlayerPluginQualityOption = {
  /** 播放器来自 */
  from: "video" | "bangumi";
  qualityList: {
    /** 画质显示的文字 */
    html: string;
    /** 画质对应的链接 */
    url: string;
    /** 画质代码，会根据画质代码进行排序 */
    quality: number;
    /** 帧率信息 */
    frameRate: string;
    /** 类型，一般是video/mp4 */
    mimeType: string;
    /** 编码类型 */
    codecid: number;
    /** 编码信息 */
    codecs: string;
    /** 码率 */
    bandwidth: number;
  }[];
};

export type ArtPlayerPluginQualityResult = {
  name: string;
  update(option: ArtPlayerPluginQualityOption): void;
  getCurrentQualityOption(): ArtPlayerPluginQualityOption["qualityList"]["0"] | null;
};

export type ArtPlayerPluginQualityStorageOption = {
  /** 画质代码 */
  quality: number;
};
/**
 * 视频编码类型
 */
const VideoCodingCodeMap = {
  AVC: 7,
  HEVC: 12,
  AV1: 13,
};

/**
 * 视频编码
 *
 * 播放策略
 */
class VideoEncoding {
  art;
  from;
  $key = {
    SETTING_KEY: "video-playback-codeid",
  };
  constructor(art: Artplayer, from: string) {
    this.art = art;
    this.from = from;
    this.updateSetting();
  }
  /**
   * 更新设置菜单
   * @param codeIdConfig 配置
   */
  updateSetting(codeIdConfig?: {
    /** 允许的画质编码列表 */
    acceptCodeIdList?: (number | string)[];
    /** 默认的画质编码（当不存在选择的画质编码时，将使用该值） */
    defaultCodeId?: number;
  }) {
    // 先判断setting中是否存在该配置
    let setting = this.getSetting();
    if (Array.isArray(codeIdConfig?.acceptCodeIdList)) {
      for (let index = 0; index < setting.selector.length; index++) {
        const selectorItem = setting.selector[index];
        let findIndex = codeIdConfig.acceptCodeIdList.findIndex(
          (item) => item.toString() === selectorItem.value.toString()
        );
        if (findIndex === -1) {
          // 不存在该编码，移除
          setting.selector.splice(index, 1);
          index--;
        }
      }
      // 重新处理defalut的值
      let hasDefault = setting.selector.find((it) => it.default);
      if (!hasDefault && setting.selector.length) {
        // 由于默认画质编码id不存在
        if (typeof codeIdConfig?.defaultCodeId === "number") {
          let findDefaultIndex = setting.selector.findIndex((it) => it.value === codeIdConfig.defaultCodeId);
          if (findDefaultIndex !== -1) {
            // 存在该编码，设置为默认
            setting.selector[findDefaultIndex].default = true;
            setting.tooltip = setting.selector[findDefaultIndex].html;
          } else {
            // 不存在该编码，默认第一个
            setting.selector[0].default = true;
            setting.tooltip = setting.selector[0].html;
          }
        } else {
          setting.selector[0].default = true;
          setting.tooltip = setting.selector[0].html;
        }
      }
    }
    if (this.art.setting.find(this.$key.SETTING_KEY)) {
      // 已有该菜单，更新
      this.art.setting.update(setting);
    } else {
      // 还没有该菜单，添加
      this.art.setting.add(setting);
    }
  }
  /**
   * 获取设置界面的配置
   */
  getSetting() {
    const that = this;
    let userChooseVideoCodingCode = this.getUserChooseVideoCodingCode();
    let selectorList = [
      {
        html: "AV1",
        value: VideoCodingCodeMap["AV1"],
      },
      {
        html: "HEVC",
        value: VideoCodingCodeMap["HEVC"],
      },
      {
        html: "AVC",
        value: VideoCodingCodeMap["AVC"],
      },
    ].map((it) =>
      Object.assign(it, {
        default: it.value === userChooseVideoCodingCode,
      })
    );
    let findValue = selectorList.find((it) => it.default);
    if (!findValue) {
      // 都没有，那么默认第一个
      selectorList = selectorList.map((it, index) => {
        it.default = index === 0;
        return it;
      });
      console.warn(TAG + "没有找到用户选择对应的画质编码，将使用排序第一个的画质：" + selectorList[0].html);
    }
    let tooltip = selectorList.find((it) => it.default)!;
    return {
      name: this.$key.SETTING_KEY,
      html: "播放策略",
      tooltip: tooltip.html,
      icon: `<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,
      selector: selectorList,
      onSelect: function (item: any) {
        let videoCodingCode: number = item.value;
        // 切换编码
        that.setCurrentVideoCodingCode(videoCodingCode);
        // 更新菜单
        that.onSettingSelect(videoCodingCode);
        return item.html;
      },
    };
  }
  /**
   * 菜单选项选中后的回调
   */
  onSettingSelect(selectValue: number) {
    // TODO
  }
  get storageVideoCodingKey() {
    return `bili-${this.from}-artplayer-videoCodingCode`;
  }
  /**
   * 设置当前视频编码
   */
  setCurrentVideoCodingCode(videoCodingCode: number) {
    this.art.storage.set(this.storageVideoCodingKey, videoCodingCode);
  }
  /**
   * 获取用户选择的视频编码
   */
  getUserChooseVideoCodingCode() {
    // 遍历视频
    let codingCode = (this.art.storage.get(this.storageVideoCodingKey) as number) || VideoCodingCodeMap.AV1;

    if (!Object.values(VideoCodingCodeMap).includes(codingCode)) {
      console.error(
        TAG + "意外情况，选择的编码格式不是允许的编码，将强制使用默认(av1)，防止过滤掉的视频链接为空：" + codingCode
      );
      codingCode = VideoCodingCodeMap.AV1;
    }

    return codingCode;
  }
}

class VideoQuality extends VideoEncoding {
  $data = {
    /** 请求到的视频画质信息数据 */
    qualityOption: null as any as ArtPlayerPluginQualityOption,
    /** 处理后的画质列表 */
    qualityOptionList: <ArtPlayerPluginQualityOption["qualityList"]>[],
    /** 请求到的视频的画质编码列表 */
    qualityCodeIdList: <string[]>[],
    /** 当前的画质编码id */
    currentQualityCodecId: VideoCodingCodeMap["AV1"] as number | undefined,
    /** 当前选中的画质信息 */
    currentSelectQualityInfo: null as {
      index: number;
      html: string;
      url: string;
    } | null,
    /** 当前选中的画质配置  */
    currentQualityOption: null as any as ArtPlayerPluginQualityOption["qualityList"]["0"] | null,
  };
  constructor(art: Artplayer, from: string) {
    super(art, from);
  }
  /**
   * 设置当前画质配置数据
   */
  setCurrentQualityOption(qualityOption: ArtPlayerPluginQualityOption["qualityList"]["0"] | null = null) {
    this.$data.currentQualityOption = null;
    this.$data.currentQualityOption = qualityOption;
  }
  /**
   * 获取存储键
   */
  getStorageKey(from: string) {
    return `artplayer-quality-${from}`;
  }
  /**
   * 更新画质信息
   */
  update(option: ArtPlayerPluginQualityOption) {
    // @ts-ignore
    this.$data.qualityOption = null;
    this.$data.qualityOption = option;
    this.$data.qualityOptionList = [];
    this.$data.qualityCodeIdList = [];
    this.$data.currentSelectQualityInfo = null;
    this.$data.currentQualityCodecId = void 0;
    if (import.meta.hot) {
      console.log(TAG + "更新画质信息：", option);
    }
    this.setCurrentQualityOption();
    if (option.qualityList.length) {
      // 如果存在画质选项
      // 更新画质信息
      let currentSelectQualityInfo = this.getQualityInfo();
      this.addControls();
      super.updateSetting({
        acceptCodeIdList: this.$data.qualityCodeIdList,
        defaultCodeId: this.$data.currentQualityCodecId,
      });

      // 设置播放地址
      this.art.url = currentSelectQualityInfo.url;
    } else {
      this.removeControls();
    }
  }
  /**
   * 获取面板配置
   */
  getControlsOption(): ComponentOption {
    const that = this;
    // 调整一下select的default的值
    let selectorList: (Selector & ArtPlayerPluginQualityOption["qualityList"]["0"])[] =
      this.$data.qualityOptionList.map((itemInfo, index) => {
        return {
          default: index === this.$data.currentSelectQualityInfo?.index,
          html: itemInfo.html,
          url: itemInfo.url,
          quality: itemInfo.quality,
          frameRate: itemInfo.frameRate,
          mimeType: itemInfo.mimeType,
          codecid: itemInfo.codecid,
          codecs: itemInfo.codecs,
          bandwidth: itemInfo.bandwidth,
        };
      });
    const controlsOption: ComponentOption = {
      name: ArtPlayer_PLUGIN_QUALITY_KEY,
      index: 10,
      position: "right",
      html: this.$data.currentSelectQualityInfo!.html,
      selector: selectorList,
      onSelect: function (selector) {
        let itemInfo = selector as Selector & ArtPlayerPluginQualityOption["qualityList"]["0"];
        // 切换画质
        console.log(TAG + "切换画质", itemInfo);
        that.art.switchQuality(itemInfo.url);
        // 保存切换的画质
        that.art.storage.set(that.getStorageKey(that.$data.qualityOption.from), {
          quality: itemInfo.quality,
        } as ArtPlayerPluginQualityStorageOption);
        that.setCurrentQualityOption({
          html: itemInfo.html,
          url: itemInfo.url,
          quality: itemInfo.quality,
          frameRate: itemInfo.frameRate,
          mimeType: itemInfo.mimeType,
          codecid: itemInfo.codecid,
          codecs: itemInfo.codecs,
          bandwidth: itemInfo.bandwidth,
        });
        return selector.html;
      },
    };
    return controlsOption;
  }
  /**
   * 添加面板
   */
  addControls() {
    if (this.isAddControls()) {
      this.updateQualityControls();
    } else {
      let controlOption = this.getControlsOption();
      this.art.controls.add(controlOption);
    }
  }
  /**
   * 更新画质信息
   */
  getQualityInfo() {
    // 获取选择的编码
    let userChooseVideoCodingCode = this.getUserChooseVideoCodingCode();
    // 按编码筛选画质
    let qualityList = this.$data.qualityOption.qualityList.filter((item) => item.codecid === userChooseVideoCodingCode);
    // 按画质排序（降序）
    qualityList.sort((leftItem, rightItem) => {
      return rightItem.quality - leftItem.quality;
    });
    // 根据画质编码分类映射字典
    const qualityListMap: {
      [key: number | string]: ArtPlayerPluginQualityOption["qualityList"];
    } = {};
    for (let index = 0; index < this.$data.qualityOption.qualityList.length; index++) {
      const qualityItem = this.$data.qualityOption.qualityList[index];
      const qualityMapValue = qualityListMap[qualityItem.codecid] || [];
      qualityMapValue.push(qualityItem);
      qualityListMap[qualityItem.codecid] = qualityMapValue;
    }
    if (qualityList.length === 0) {
      // 未登录的情况
      // mp4的情况
      // 又或者是不存在该编码的画质
      qualityList = Object.values(qualityListMap)[0];
      this.$data.currentQualityCodecId = qualityList[0].codecid;
      console.warn(TAG + "该画质：" + userChooseVideoCodingCode + "不存在，将使用第一个画质", qualityList);
    }
    this.$data.qualityOptionList = [];
    this.$data.qualityOptionList = qualityList;
    this.$data.qualityCodeIdList = Object.keys(qualityListMap);
    let firstQualityInfo = qualityList[0];
    // 存储键
    const storageKey = this.getStorageKey(this.$data.qualityOption.from);
    // 获取本地存储的上次选的画质，默认最高画质
    const storageQualityInfo = this.art.storage.get(storageKey) as ArtPlayerPluginQualityStorageOption;

    // 根据本地保存的记录和当前提供的画质列表筛选出当前的画质
    let currentSelectQualityInfo = {
      index: 0,
      html: firstQualityInfo?.html,
      /** 播放的地址 */
      url: firstQualityInfo?.url,
    };
    this.setCurrentQualityOption(qualityList[0]);
    if (storageQualityInfo) {
      // 判断当前的画质中是否命中上次选择的画质，若未命中，默认使用第一个画质（最高画质）
      const findQualityIndex = qualityList.findIndex((item) => item.quality === storageQualityInfo.quality);
      if (findQualityIndex !== -1) {
        const findQuality = qualityList[findQualityIndex];
        currentSelectQualityInfo.index = findQualityIndex;
        currentSelectQualityInfo.url = findQuality.url;
        currentSelectQualityInfo.html = findQuality.html;
        this.setCurrentQualityOption(findQuality);
      } else {
        console.warn(TAG + "没有找到上次选的画质，使用当前默认第一个画质");
      }
    }
    this.$data.currentSelectQualityInfo = null;
    this.$data.currentSelectQualityInfo = currentSelectQualityInfo;
    return currentSelectQualityInfo;
  }
  /**
   * 更新画质切换面板
   */
  updateQualityControls() {
    let controlOption = this.getControlsOption();
    console.log(TAG + "更新画质切换面板信息", this.$data.qualityOptionList, this.$data.currentQualityOption);
    this.art.controls.update(controlOption);
  }
  /**
   * 移除画质切换面板
   */
  removeControls() {
    if (this.isAddControls()) {
      this.art.controls.remove(ArtPlayer_PLUGIN_QUALITY_KEY);
    }
  }
  /**
   * 是否已经添加了面板
   */
  isAddControls() {
    return Reflect.has(this.art.controls, ArtPlayer_PLUGIN_QUALITY_KEY);
  }
  onSettingSelect(selectValue: number): void {
    this.getQualityInfo();
    this.updateQualityControls();
    this.updateSetting({
      acceptCodeIdList: this.$data.qualityCodeIdList,
      defaultCodeId: this.$data.currentQualityCodecId,
    });
    if (this.$data.currentSelectQualityInfo) {
      // 更新播放地址
      this.art.url = this.$data.currentSelectQualityInfo.url;
    }
  }
}

/**
 * 画质切换工具
 * @param option
 */
export const artplayPluginQuality = (option: ArtPlayerPluginQualityOption) => {
  return (art: Artplayer) => {
    let videoQuality = new VideoQuality(art, option.from);
    videoQuality.update(option);
    return {
      name: ArtPlayer_PLUGIN_QUALITY_KEY,
      update(option: ArtPlayerPluginQualityOption) {
        videoQuality.update(option);
      },
      getCurrentQualityOption() {
        return videoQuality.$data.currentQualityOption;
      },
    } as ArtPlayerPluginQualityResult;
  };
};
