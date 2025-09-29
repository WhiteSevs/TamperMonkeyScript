/**
 * 视频信息处理过后的数据结构
 */
export interface DouYinVideoHandlerInfo {
  /** 视频id */
  awemeId?: string;
  /** 作者名 */
  nickname?: string;
  /** 作者uid */
  uid?: string;
  /** 视频描述 */
  desc?: string;
  /** 视频话题 */
  textExtra: string[];
  /** 视频标签 */
  videoTag: string[];
  /** 视频标签的id */
  videoTagId: string[];
  /** 建议关键词 */
  suggestWord: string[];
  /** 视频的背景音乐专辑名 */
  musicAlbum?: string;
  /** 视频的背景音乐作者 */
  musicAuthor?: string;
  /** 视频的背景音乐标题名称 */
  musicTitle?: string;
  /** 作者的认证信息 */
  authorAccountCertInfo: string;
  /**  */
  authorCustomVerify: string;
  /** 作者的企业认证信息 */
  authorEnterpriseVerifyReason: string;
  /** 风险提示内容 */
  riskInfoContent?: string;
  /** 系列名称 */
  seriesInfoName?: string;
  /** 系列内容类型 */
  seriesInfoContentTypes: string[];
  /** 混合信息的名称 */
  mixInfoName?: string;
  /** 混合信息的描述 */
  mixInfoDesc?: string;
  /** 收藏数量 */
  collectCount: number;
  /** 评论数量 */
  commentCount: number;
  /** 点赞数量 */
  diggCount: number;
  /** 分享数量 */
  shareCount: number;
  /** 视频时长（单位：毫秒） */
  duration?: number;
  /** 直播间房间号 */
  liveStreamRoomId?: string;
  /** 直播间标题 */
  liveStreamRoomTitle?: string;
  /** 直播间的主播昵称 */
  liveStreamNickName?: string;
  /** 直播间人数 */
  liveStreamRoomUserCount?: number;
  /** 直播间标签？ */
  liveStreamRoomDynamicSpliceLabel?: string;
  /** 产品id（付费视频存在id，专属会员视频不存在id） */
  productId?: string;
  /** 产品标题 */
  productTitle?: string;
  /** 是否是直播 */
  isLive: boolean;
  /** 是否是广告 */
  isAds: boolean;
  /** 是否是系列信息-剧集 */
  isSeriesInfo: boolean;
  /** 是否是混合信息-合集 */
  isMixInfo: boolean;
  /** 是否是图文 */
  isPicture: boolean;
  /** 是否是产品（付费视频、专属会员视频） */
  isProduct: boolean;
}

/** 抖音视频的awemeInfo对象信息 */
export type DouYinVideoAwemeInfo = {
  /** 创作者信息 */
  authorInfo: {
    /** 头像 */
    avatarUri: string;
    /** 视频创作者名 */
    nickname: string;
    /** 视频创作者uid */
    uid: string;
    /** 认证信息 */
    accountCertInfo: {
      labelStyle: number;
      labelText: string;
    };
  };
  /** 视频id */
  awemeId: string;
  /** 视频类型，0是视频，68是图文 */
  awemeType: number;
  /** 直播间信息（如果存在） */
  cellRoom:
    | undefined
    | {
        /** 直播数据 */
        rawdata: {
          id_str: string;
          /** 直播间所有者信息 */
          owner: {
            /** 头像信息 */
            avatar_thumb: {
              /** 头像链接，但是这个链接参数有问题，需补充路径，即/aweme/ */
              uri: string;
              /** 头像链接数组，建议这个，包含完整的https:... */
              url_list: string[];
            };
            /** 用户id？可能是 */
            id_str: string;
            sec_uid: string;
            /** 直播间id（房间号） */
            web_rid: string;
            /** 用户名 */
            nickname: string;
          };
          /** 直播间标题 */
          title: string;
          /** 直播间人数 */
          user_count: number;
          /** 直播间状态 */
          stats: {
            /** 人数总数量（简称人气值） */
            total_user_str: string;
            /** 在线观众人数 */
            user_count_str: string;
          };
          /** 推流信息 */
          stream_url: {
            extra: {
              width: number;
              height: number;
            };
            /** 推流地址字典 */
            flv_pull_url: {
              [key: string]: string;
            };
            /** 推流地址 */
            hls_pull_url: string;
            /** 推流地址字典 */
            hls_pull_url_map: {
              [key: string]: string;
            };
          };
        };
      };
  /** 视频创建时间 */
  createTime: number;
  /** 视频描述 */
  desc: string;
  entertainmentProductInfo?: {
    product_id: number;
    has_re_purchase: boolean | number;
    is_personal_strategy_content: boolean;
    title: string;
  };
  /** 音乐信心 */
  music: {
    album: string;
    author: string;
    id: number;
    id_str: string;
    mid: string;
    title: string;
  };
  /** 是否是广告 */
  isAds: boolean;
  isFriendLimit: boolean;
  isPrivate: boolean;
  mixInfo?: {
    mixName?: string;
  };
  /** 广告信息(如果存在) */
  rawAdData: string | undefined;
  riskInfos:
    | {
        content?: string;
      }
    | undefined;
  seriesInfo: {
    author: {
      isBlockedV2: boolean;
      nickname: "";
      secUid: undefined;
      secret: 0;
      uid: "";
      userNotSee: 0;
    };
    chargeCount: undefined;
    chargeInfo: {
      buySchema: undefined;
      chargeCount: undefined;
      chargeType: undefined;
      hasPaid: undefined;
      promiseUpdateTime: undefined;
      sellType: undefined;
      unpaidCount: undefined;
      useDemotion: undefined;
    };
    collectVV: undefined;
    cover: "";
    currentEpisode: undefined;
    desc: undefined;
    hasUpdatedEpisode: 0;
    horizontalCover: "";
    isCharge: false;
    isCollected: 0;
    isExclusive: undefined;
    isIaa: false;
    playVV: undefined;
    seriesContentTypes: undefined;
    seriesIcp: undefined;
    seriesId: undefined;
    seriesName: undefined;
    stats: {
      currentEpisode: undefined;
      totalEpisode: undefined;
      updatedToEpisode: undefined;
    };
    status: -1;
    totalEpisode: undefined;
    watchedEpisode: undefined;
    watchedItem: undefined;
  };
  shareInfo: {
    /** 视频分享链接的描述 */
    shareLinkDesc: string;
    /** 视频分享链接 */
    shareUrl: string;
  };
  stats: {
    /** 评论数量 */
    commentCount: number;
    /** 点赞数量 */
    diggCount: number;
    /** 分享数量 */
    shareCount: number;
    playCount: number;
    /** 收藏数量 */
    collectCount: number;
    /** 下载数量 */
    downloadCount: number;
    /** 转发数量 */
    forwardCount: number;
    /** 在线观看数量 */
    liveWatchCount: number;
  };
  suggestWords: [
    {
      scene: string;
      words: {
        word: string;
        wordId: string;
        info: string;
      }[];
      hintText: string;
      iconUrl: string;
    },
  ][];
  /**话题 */
  textExtra: [];
  video: {
    /** 视频宽度 */
    width: number;
    /** 视频高度 */
    height: number;
    /** 视频分辨率 */
    ratio: string;
    /** 视频时长（单位：毫秒） */
    duration: number;
    /** 视频大小（单位：字节） */
    dataSize: number;
    uri: string;
    playAddr: {
      src: string;
    }[];
    /** 视频播放地址大小 */
    playAddrSize: number;
    playAddrFileHash: string;
    playApi: string;
    playAddrH265: {
      src: string;
    }[];
    /** 视频播放地址大小 */
    playAddrH265Size: number;
    playAddrH265FileHash: string;
    playApiH265: string;
    bitRateList: {
      uri: string;
      dataSize: number;
      width: number;
      height: number;
      playAddr: {
        src: string;
      }[];
      playApi: string;
      isH265: number;
      qualityType: number;
      bitRate: number;
      videoFormat: string;
      gearName: string;
      fps: number;
      playerAccessKey: string;
      featureId: string;
      format: string;
      fileId: string;
      pktOffsetMap: {
        time: number;
        offset: number;
      }[];
      realBitrate: number;
    }[];
    bitRateAudioList: {
      realBitrate: number;
      audioQuality: number;
      bitrate: number;
      codecType: string;
      fileHash: string;
      fileId: string;
      logoType: string;
      mediaType: string;
      quality: string;
      size: number;
      qualityDesc: string;
      urlList: {
        src: string;
      }[];
      indexRange: string;
      initRange: string;
      checkInfo: string;
      firstSegmentRange: string;
    }[];
    /** 视频封面 */
    cover: string;
    /** 视频封面url数组 */
    coverUrlList: string[];
    /** 视频封面uri */
    dynamicCover: string;
    /** 视频封面uri */
    coverUri: string;
    /** 原始封面 */
    originCover: string;
    /** 原始封面 */
    rawCover: string;
    /** 原始封面url数组 */
    originCoverUrlList: string[];
    /** 高斯模糊封面 */
    gaussianCover: string;
    meta: {};
    bigThumbs: {
      duration: number;
      fext: string;
      img_num: number;
      img_url: string[];
      img_urls: string[];
      img_x_len: number;
      img_x_size: number;
      img_y_len: number;
      img_y_size: number;
      interval: number;
      uri: string;
      uris: string[];
    }[];
    videoModel: null;
  };
  /** 视频标签 */
  videoTag: [];
  webRawData: {
    brandAd?: {
      is_ad?: boolean;
    };
    insertInfo?: {
      is_ad?: boolean;
    };
  };
};

/** 抖音视频的api接口的awemeInfo对象信息 */
export type DouYinVideoNetWorkAwemeInfo = {
  author: {
    nickname: string;
    uid: string;
    desc: string;
    sec_uid: string;
  };
  statistics: {
    admire_count: number;
    collect_count: number;
    comment_count: number;
    digg_count: number;
    play_count: number;
    share_count: number;
  };
  risk_infos: {
    content: string;
    icon_url: string;
    risk_sink: boolean;
    type: number;
    vote: boolean;
    warn: boolean;
    warn_level: number;
  };
};
