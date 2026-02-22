/**
 * 视频信息处理过后的数据结构
 */
export interface DouYinVideoConversionInfo {
  /** 视频id */
  awemeId?: string;
  /** 作者名 */
  nickname?: string;
  /** 发布时间 */
  createTime?: number;
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
  /** 视频的背景音乐的播放时长 */
  musicDuration?: number;
  /** 视频的背景音乐的播放地址 */
  musicUrl?: string;
  /** 视频的背景音乐的播放地址（备用） */
  musicBackUrlList: string[];
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
  /** 是否已关注该用户 */
  isFollow: boolean;
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
  /**
   * 视频流的播放信息
   */
  videoBitRateList: {
    /**
     * 视频封面
     */
    cover: string;
    bitRate?: number;
    /**
     * 视频大小
     */
    dataSize: number;
    // featureId: string;
    // fileId: string;
    /** mp4 */
    format: string;
    isH265?: number;
    /** 帧率 */
    fps: number;
    /** adapt_lowest_4_1 */
    gearName?: string;
    /**
     * 画质
     */
    qualityType?: number;
    /**
     * 视频宽度
     */
    width: number;
    /**
     * 视频高度
     */
    height: number;
    /**
     * 播放地址
     */
    url: string;
    /**
     * 备用播放地址
     */
    backUrl: string[];
  }[];
  /**
   * 图文的信息
   */
  pictureList: {
    /**
     * 图片宽度
     */
    width: number;
    /**
     * 图片高度
     */
    height: number;
    /**
     * 无水印链接
     */
    url: string;
    /**
     * 视频流的播放信息
     */
    videoBitRateList: DouYinVideoConversionInfo["videoBitRateList"];
  }[];
}

/** 抖音视频的awemeInfo对象信息 */
export type DouYinVideoAwemeInfoWithDOM = {
  /** 创作者信息 */
  authorInfo: null | {
    /**
     * 头像
     */
    avatarThumb: {
      width: number;
      height: number;
      /** 不包含http */
      uri: string;
      urlList: string[];
    };
    /**
     * 关注状态
     */
    followStatus: 0 | 1;
    /** 视频创作者名 */
    nickname: string;
    /** 视频创作者uid */
    uid: string;
    secUid: string;
    /** 认证信息 */
    accountCertInfo: {
      labelStyle: number;
      labelText: string;
    };
    customVerify: string;
    /**
     * 企业认证信息
     * @example
     * ""
     * @example
     * "xxx官方账号"
     */
    enterpriseVerifyReason: string;
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
          // "id": number;
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
          // /** 直播间状态 */
          // stats: {
          //   /** 人数总数量（简称人气值） */
          //   total_user_str: string;
          //   /** 在线观众人数 */
          //   user_count_str: string;
          // };
          // /** 推流信息 */
          // stream_url: {
          //   extra: {
          //     width: number;
          //     height: number;
          //   };
          //   /** 推流地址字典 */
          //   flv_pull_url: {
          //     [key: string]: string;
          //   };
          //   /** 推流地址 */
          //   hls_pull_url: string;
          //   /** 推流地址字典 */
          //   hls_pull_url_map: {
          //     [key: string]: string;
          //   };
          // };
          dynamic_label: {
            splice_label: {
              text: string;
            };
          };
        };
      };
  /** 视频创建时间 */
  createTime: number;
  /** 视频描述 */
  desc: string;
  /** 产品信息（付费视频） */
  entertainmentProductInfo?: {
    sub_title: string[];
    market_info: {
      limit_free: {
        in_free: boolean;
      };
      // marketing_hint: {};
    };
    biz?: number;
    product_id: number;
    product_id_str?: string;
    title?: string;
    buy_schema?: string;
    buy_panel_schema?: string;
  };
  /** 背景音乐 */
  music:
    | undefined
    | {
        /**
         * 专辑可能是空字符串
         * @example
         * ""
         */
        album: string;
        author: string;
        id: number;
        id_str: string;
        mid: string;
        title: string;
        /**
         * 播放时长
         */
        duration: number;
        playUrl: {
          width: number;
          height: number;
          dataSize: number | undefined;
          /** 包含（http|https） */
          uri: string;
          urlList: string[];
        };
      };
  /**
   * 图片
   */
  images:
    | {
        width: number;
        height: number;
        /** 不包含http */
        uri: string;
        /** 无水印 */
        urlList: string[];
        /** 有水印 */
        downloadUrlList: string[];
        /** 实况图才会有的实况视频 */
        video?: DouYinVideoAwemeInfoWithDOM["video"];
      }[]
    | null;
  /** 是否是广告 */
  isAds: boolean;
  // isFriendLimit: boolean;
  // isPrivate: boolean;
  /**
   * 是否是混合信息，如：合集、短剧
   * @desc
   * 该键存在时，`seriesInfo`也存在
   */
  mixInfo?: {
    /** 合集名 */
    mixName?: string;
    /** 合集描述 */
    desc?: string;
  };
  /** 广告信息(如果存在) */
  rawAdData: string | undefined;
  /** 风险提示内容 */
  riskInfos:
    | {
        content?: string;
      }
    | undefined;
  /**
   * 系列
   * @desc
   * 该键存在时，`mixInfo`也存在
   */
  seriesInfo: {
    /** 系列名称 */
    seriesName?: string;
    /** 内容类型 */
    seriesContentTypes?: {
      name: string;
    }[];
  };
  /** 分享信息 */
  shareInfo: {
    /** 视频分享链接的描述 */
    shareLinkDesc: string;
    /** 视频分享链接 */
    shareUrl: string;
  };
  /** 作品状态 */
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
    // /** 下载数量 */
    // downloadCount: number;
    // /** 转发数量 */
    // forwardCount: number;
    // /** 在线观看数量 */
    // liveWatchCount: number;
  };
  suggestWords: {
    scene: string;
    words: {
      word: string;
      wordId: string;
      info: string;
    }[];
    hintText: string;
    iconUrl: string;
  }[];
  /**话题 */
  textExtra: {
    start: number;
    end: number;
    type: number;
    hashtagName?: string;
  }[];
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
    /** 不包含http|https */
    uri: string;
    playAddr: {
      src: string;
    }[];
    /** 视频播放地址大小 */
    playAddrSize: number;
    playApi: string;
    bitRateList: {
      width: number;
      height: number;
      bitRate: number;
      dataSize: number | undefined;
      fps: number;
      /** 一般是mp4 */
      format: string;
      isH265: number;
      gearName: string;
      qualityType: number;
      playAddr: {
        src: string;
      }[];
      playApi: string;
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
  };
  /** 视频标签 */
  videoTag:
    | undefined
    | {
        level: number;
        tagId: number;
        tagName: string;
      }[];
  webRawData: {
    brandAd?: {
      is_ad?: boolean;
    };
    insertInfo?: {
      is_ad?: boolean;
    };
  };
};

/** 网络接口上的抖音视频的awemeInfo对象信息 */
export type DouYinVideoAwemeInfoWithNetWork = {
  /** 该条存在广告时有该键 */
  // ad_aweme_source?: 1;
  /** 创作者信息 */
  author: null | {
    /**
     * 头像
     */
    avatar_thumb: {
      width: number;
      height: number;
      /** 不包含http */
      uri: string;
      url_list: string[];
    };
    // /**
    //  * 作者主页背景
    //  */
    // cover_url: {
    //   width: number;
    //   height: number;
    //   /** 不包含http */
    //   uri: string;
    //   url_list: string[];
    // }[];
    /**
     * 关注状态
     */
    follow_status: 0 | 1;
    /**
     * 位置
     */
    // location: string;
    /**
     * 个性签名
     */
    // signature: string;
    /** 视频创作者名 */
    nickname: string;
    /** 视频创作者uid */
    uid: string;
    sec_uid: string;
    /**
     * 认证信息
     *
     * @example
     * "{}"
     * @example
     * 先进行json解析
     *
     * {
     *  "label_text": string;
     *  "label_style": number;
     *  "is_biz_account": number;
     * }
     */
    account_cert_info: string;
    custom_verify: string;
    /**
     * 企业认证信息
     * @example
     * ""
     * @example
     * "xxx官方账号"
     */
    enterprise_verify_reason: string;
  };
  /** 视频id */
  aweme_id: string;
  /** 视频类型，0是视频，68是图文 */
  aweme_type: number;
  /** 直播间信息（如果存在） */
  cell_room?: {
    /**
     * 直播数据
     * @example
     * json解析后得到
     * {
     *   // "id": number;
     *   "id_str": string;
     *   // "status": number;
     *   "owner": {
     *       // 头像信息
     *      avatar_thumb: {
     *        // 头像链接，但是这个链接参数有问题，需补充路径，即/aweme/
     *        uri: string;
     *        // 头像链接数组，建议这个，包含完整的https:...
     *        url_list: string[];
     *      };
     *      // 用户id？可能是
     *      id_str: string;
     *      sec_uid: string;
     *      // 直播间id（房间号）
     *      web_rid: string;
     *      // 用户名
     *      nickname: string;
     *   }
     * }
     */
    rawdata: string;
  };
  /** 视频创建时间 */
  create_time: number;
  /** 视频描述 */
  desc: string;
  /** 产品信息（付费视频） */
  entertainment_product_info?: null | {
    sub_title?: string | null;
    market_info: {
      limit_free: {
        in_free: boolean;
      };
      // marketing_tag: string | null;
    };
    biz?: number;
    product_id?: number;
    product_id_str?: string;
    title?: string;
    buy_schema?: string;
    buy_panel_schema?: string;
  };
  /** 背景音乐（可能不存在） */
  music?: {
    /**
     * 专辑可能是空字符串
     * @example
     * ""
     */
    album: string;
    author: string;
    id: number;
    id_str: string;
    mid: string;
    title: string;
    /**
     * 播放时长
     */
    duration: number;
    play_url: {
      width: number;
      height: number;
      /** 包含（http|https） */
      uri: string;
      url_list: string[];
    };
  };
  /**
   * 图片
   */
  images:
    | null
    | {
        width: number;
        height: number;
        // is_new_text_mode: number;
        /** 不包含http */
        uri: string;
        /** 无水印 */
        url_list: string[];
        /** 有水印 */
        download_url_list: string[];
        /** 实况图才会有的实况视频 */
        video?: DouYinVideoAwemeInfoWithNetWork["video"];
      }[];
  /** 是否是广告 */
  is_ads: boolean;
  /**
   * 是否是混合信息，如：合集、短剧
   * @desc
   * 该键存在时，`series_info`也存在
   */
  mix_info?: {
    /** 合集名 */
    mix_name?: string;
    /** 合集描述 */
    desc?: string;
  };
  /** 广告信息(如果存在) */
  raw_ad_data?: string;
  /** 风险提示内容 */
  risk_infos?: {
    content?: string;
  };
  /**
   * 系列
   * @desc
   * 该键存在时，`mix_info`也存在
   */
  series_info?: {
    /** 系列名称 */
    series_name?: string;
    /** 内容类型 */
    series_content_types?: {
      name: string;
    }[];
  };
  /** 分享信息 */
  share_info: null | {
    /** 视频分享链接的描述 */
    share_link_desc: string;
    /** 视频分享链接 */
    share_url: string;
  };
  /** 作品状态 */
  statistics: null | {
    /** 评论数量 */
    comment_count: number;
    /** 点赞数量 */
    digg_count: number;
    /** 分享数量 */
    share_count: number;
    play_count: number;
    /** 收藏数量 */
    collect_count: number;
  };
  suggest_words?: {
    suggest_words: {
      scene: string;
      words: {
        word: string;
        word_id: string;
        info: string;
      }[];
      hint_text: string;
      icon_url: string;
    }[];
  };
  /**话题 */
  text_extra?:
    | null
    | {
        start: number;
        end: number;
        type: number;
        hashtag_name?: string;
      }[];
  video?: null | {
    /** 视频宽度 */
    width: number;
    /** 视频高度 */
    height: number;
    /** 视频分辨率 */
    ratio: string;
    /** 视频时长（单位：毫秒） */
    duration: number;
    /** 视频大小（单位：字节） */
    play_addr: {
      /** 视频大小（单位：字节），该键有时会不存在 */
      data_size?: number;
      width: number;
      height: number;
      /** 包含了http|https */
      uri: string;
      /** 视频id? */
      url_key: string;
      url_list: string[];
    };
    bit_rate:
      | null
      | {
          bit_rate: number;
          FPS: number;
          /** 一般是mp4 */
          format: string;
          gear_name: string;
          is_h265: 0 | 1;
          /** 一般是1 */
          quality_type: number;
          play_addr: {
            width: number;
            height: number;
            data_size: number;
            url_list: string[];
          };
        }[];
    /** 视频封面 */
    cover: {
      width: number;
      height: number;
      /** 不包含（http|https） */
      uri: string;
      url_list: string[];
    };
    /** 视频封面 */
    origin_cover: {
      width: number;
      height: number;
      /** 不包含（http|https），里面可能是空字符串 */
      uri: string;
      url_list: string[];
    };
  };
  /** 视频标签 */
  video_tag:
    | null
    | {
        level: number;
        tag_id: number;
        tag_name: string;
      }[];
  /**
   * 需转换为JSON
   *
   * 此项在推荐视频中存在
   * @example
   * 先转换一次json得到
   * {
   *   "brand_ad": string;
   *   "recommend_score": {
   *    ...
   *   }
   * }
   *
   * 再把`brand_ad`转为json得到
   * {
   *   "item_id": string;
   *   "object_type": number;
   *   "brand_type": number;
   *   "is_ad": 1|0;
   *   "brand_title": string;
   *   "open_url": string;
   *   "task_id": string;
   *   "expose_limit": number;
   *   "biz_content": string;
   * }
   *
   * 再把`biz_content`转为json得到
   * {
   *   "is_ad": boolean;
   *   "brand_ad_component_config": {
   *     "left": {
   *       "brand_ad_component_type": string;
   *       "brand_ad_component_float_tip": {
   *         ...
   *       }
   *     }[];
   *   };
   * }
   */
  web_raw_data?: string;
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
