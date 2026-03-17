import { httpx, log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { TiebaApiStatus } from "./TiebaApiStatus";

export const TiebaNewPCApi = {
  /**
   * 获取主页帖子
   * @param portrait
   * @param pn 页码
   */
  async myThread(portrait: string, pn: number = 1) {
    const params = {
      pn: pn,
      rn: 20,
      portrait: portrait,
      type: 1,
      un: "",
      subapp_type: "pc",
      _client_type: 20,
    };
    const response = await httpx.get(`https://tieba.baidu.com/c/u/feed/myThread`, {
      data: params,
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });
    if (!response.status) {
      return;
    }
    const data = utils.toJSON<{
      ctime: string;
      error_code: number;
      data: {
        list?: {
          type: number;
          /** 一般是0 */
          private: number;
          thread_info: {
            id: number;
            tid: number;
            /** 标题 */
            title: string;
            /** 回复数量 */
            reply_num: number;
            /** 浏览量 */
            view_num: number;
            last_time: string;
            /** Date.now() / 1000 */
            last_time_int: number;
            thread_types: number;
            // /** 0 */
            // is_top: number;
            // /** 0 */
            // is_good: number;
            // /** 0 */
            // is_vote: number;
            // /** 0 */
            // is_bakan: number;
            // /** 0 */
            // is_protal: number;
            // /** 0 */
            // is_meizhi: number;
            // /** 0 */
            // is_voice_thread: number;
            // /** 0 */
            // is_activity: number;
            // /** 0 */
            // is_notice: number;
            comment_num: 0;
            /** 摘要（也可以是内容） */
            abstract: {
              /**
               * + 0 普通内容
               */
              type: number;
              text: string;
            }[];
            rich_abstract?: {
              // abstract和media的合体
            }[];
            /**
             * 视频、图片媒体
             */
            media?: ({
              /**
               * 3 图片
               * 5 视频
               */
              type: number;
              big_pic: string;
              src_pic: string;
              width: number;
              height: number;
              origin_pic: string;
              origin_size: number;
              post_id: number;
              dynamic_pic: string;
              is_long_pic: 0 | 1;
              show_original_btn: 0 | 1;
              wth_mid_loc: number;
              hth_mid_loc: number;
              /** empty */
              jump_url: string;
              /** empty */
              guide_text: string;
              lottie_type: number;
            } & {
              vhsrc: string;
              vpic: string;
              vsrc: string;
            })[];
            thread_type: number;
            fid: number;
            /** 吧名 */
            fname: string;
            // is_ntitle: 0;
            // is_bub: 0;
            first_post_id: number;
            /** Date.now() / 1000 */
            create_time: number;
            // is_membertop: 0;
            author_id: number;
            // is_novel: 0;
            // is_novel_thank: 0;
            // is_novel_reward: 0;
            // is_book_chapter: 0;
            agree_num: 2;
            agree: {
              agree_num: 2;
              has_agree: 0;
              agree_type: 0;
              disagree_num: 0;
              diff_agree_num: 2;
            };
            // is_partial_visible: 0;
            // is_god: 0;
            share_num: 0;
            first_post_content?: {
              // abstract和media的合体
            }[];
            forum_info: {
              id: number;
              name: string;
              avatar: string;
              is_liked: 0 | 1;
              member_num: number;
              post_num: number;
            };
            nid: string;
            /** 帖子链接 */
            thread_share_link: string;
            is_deleted: 0 | 1;
            is_tiebaplus_ad: "0";
            tiebaplus_cant_delete: 0;
            is_highlight: 0;
            is_xiuxiu_thread: 0;
            is_excellent_thread: 0;
            top_thread_set_time: 0;
            feed_nid: string;
          };
        }[];
        has_more: 1 | 0;
      };
    }>(response.data.responseText);
    if (!TiebaApiStatus.isWebSuccess(data)) {
      log.error(data);
      return;
    }
    if (Array.isArray(data.data.list)) {
      data.data.list.forEach((it) => {
        if (Array.isArray(it.thread_info.media)) {
          const uniqueMedia = new Set();
          for (let i = 0; i < it.thread_info.media.length; i++) {
            const item = it.thread_info.media[i];
            const itemStr = JSON.stringify(item);
            if (uniqueMedia.has(itemStr)) {
              it.thread_info.media.splice(i--, 1);
            } else {
              uniqueMedia.add(itemStr);
            }
          }
          uniqueMedia.clear();
        }
      });
    }
    return data.data;
  },
  /**
   * 获取用户主页信息
   * @param portrait
   */
  async homeSidebarRight(portrait?: string) {
    const params = {
      portrait: portrait,
      type: 1,
      un: "",
      subapp_type: "pc",
      _client_type: 20,
    };
    if (utils.isNull(portrait)) {
      // 获取当前登录用户的信息
      Reflect.deleteProperty(params, "portrait");
      Reflect.deleteProperty(params, "type");
      Reflect.deleteProperty(params, "un");
    }
    const response = await httpx.get(`https://tieba.baidu.com/c/u/pc/homeSidebarRight`, {
      data: params,
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });
    if (!response.status) {
      return;
    }
    const data = utils.toJSON<{
      ctime: string;
      error_code: number;
      data: {
        user: {
          id: number;
          name: string;
          name_show: string;
          portrait: string;
          /** 粉丝数量 */
          fans_num: number;
          /** 关注数量 */
          concern_num: 1;
          /** 性别 0未知 1男 2女 */
          sex: 0 | 1 | 2;
          /** 获赞 */
          total_agree_num: number;
          /** 吧龄 */
          tb_age: string;
          ip_address: string;
          /** 贴吧id */
          tieba_uid: string;
          /** 是否已注销 */
          deregistered: 0 | 1;
          /** 是否已关注 */
          followed: 0 | 1;
          /** 修改昵称剩余日 */
          modify_nickname_left_day: 0;
          user_show_info: {
            feed_head: {
              image_data: {
                /** 头像 */
                img_url: string;
                shape_type: 1;
                pendant_url: "";
                corner_url: "";
                /** 主页地址 */
                schema: string;
              };
              /** 主页地址 */
              schema: string;
            };
          };
          is_self: 0 | 1;
          priv_sets: {
            follow: 0 | 1;
          };
          is_follow: 0 | 1;
          is_followed: 0 | 1;
          is_friend: 0 | 1;
        };
        icon_info: {
          my_icon?: {
            name: string;
            pic: string;
            has_wared: 0;
            slot_no: 0;
            title: string;
            intro: string;
            /** 链接 */
            url: string;
            /** s */
            start_time: number;
            /** s */
            end_time: number;
            /** s */
            op_time: number;
          }[];
          total_slot_num: number;
        };
      };
    }>(response.data.responseText);
    if (!TiebaApiStatus.isWebSuccess(data)) {
      log.error(data);
      return;
    }
    return data.data;
  },
  /**
   * 获取用户关注信息（仅展示登录用户和正常账号）
   * @param tbs
   * @param uid 用户id
   * @param pn 页码
   */
  async followList_pc(tbs: string, uid: string | number, pn: number = 1) {
    const response = await httpx.post(`https://tieba.baidu.com/c/u/follow/followList_pc`, {
      data: {
        pn: pn,
        tab: 0,
        follow_list_switch: 1,
        uid: uid,
        tbs: tbs,
        subapp_type: "pc",
        _client_type: 20,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    if (!response.status) {
      return;
    }
    const data = utils.toJSON<{
      ctime: string;
      error_code: number;
      follow_list: {
        name_show: string;
        portrait: string;
        portraith: string;
        business_account_info: {
          is_business_account: 0 | 1;
          is_forum_business_account: 0 | 1;
        };
        /** 来自百度关注 */
        follow_from: string;
        display_auth_type: 0;
        work_creator_info: {
          auth_desc: "";
        };
        id: number;
        name: string;
        intro: string;
        has_concerned: 0 | 1;
        priv_sets: {
          like: number;
          live: number;
          reply: 0 | 1;
        };
        bazhu_grade: {};
      }[];
      /** 是否有下一页 */
      has_more: 0 | 1;
    }>(response.data.responseText);
    if (!TiebaApiStatus.isWebSuccess(data)) {
      log.error(data);
      return;
    }
    if (!Array.isArray(data.follow_list)) {
      log.error("数据格式错误", data);
      return;
    }
    return data;
  },
  /**
   * 获取用户粉丝信息（仅展示登录粉丝和正常账号）
   * @param tbs
   * @param uid 用户id
   * @param pn 页码
   */
  async fans_page_pc(tbs: string, uid: string | number, pn: number = 1) {
    const response = await httpx.post(`https://tieba.baidu.com/c/u/fans/page_pc`, {
      data: {
        pn: pn,
        tab: 0,
        follow_list_switch: 1,
        uid: uid,
        tbs: tbs,
        subapp_type: "pc",
        _client_type: 20,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    if (!response.status) {
      return;
    }
    const data = utils.toJSON<{
      ctime: string;
      error_code: number;
      page: {
        /** "100" */
        page_size: string;
        /** "0" */
        offset: string;
        /** "1" */
        current_page: string;
        /** "xxx" */
        total_count: string;
        /** "xxx" */
        total_page: string;
        /** "0"|"1" */
        has_more: string;
        /** "0"|"1" */
        has_prev: string;
      };
      user_list: {
        id: string;
        name: string;
        portrait: string;
        follow_from: string;
        name_show: string;
        live_status: "0" | "1";
        live_id: "0" | "1";
        display_auth_type: string;
        work_creator_info: string;
        bazhu_grade: string;
        priv_sets: string;
        intro: string;
        is_followed: "0" | "1";
        is_friend: "0" | "1";
        has_concerned: "0" | "1";
        is_fans: "0" | "1";
        is_new: "0" | "1";
      }[];
    }>(response.data.responseText);

    if (!TiebaApiStatus.isWebSuccess(data)) {
      log.error(data);
      return;
    }
    if (!Array.isArray(data.user_list)) {
      log.error("数据格式错误", data);
      return;
    }

    return data;
  },
  /**
   * 获取at用户的信息
   * @param tbs
   */
  async atme_pc(tbs: string) {
    const response = await httpx.post(`https://tieba.baidu.com/c/u/atme/list_pc`, {
      data: {
        pn: 1,
        rn: 10,
        client_type: 20,
        _client_type: 20,
        tbs: tbs,
        subapp_type: "pc",
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    if (!response.status) {
      return;
    }
    const data = utils.toJSON<{
      ctime: string;
      error_code: number;
      page: {
        /** "1" */
        current_page: string;
        /** "0" */
        has_more: string;
        /** "0" */
        has_prev: string;
      };
      message: {
        /** "0" */
        fans: string;
        /** "0" */
        evaluate: string;
        /** "0" */
        money: string;
        /** "0" */
        replyme: string;
        /** "0" */
        feature: string;
        /** "0" */
        guess: string;
        /** "0" */
        anti: string;
        /** "0" */
        atme: string;
        /** "0" */
        recycle: string;
        /** "0" */
        storethread: string;
      };
      at_list: string;
    }>(response.data.responseText);
    if (!TiebaApiStatus.isWebSuccess(data)) {
      log.error(data);
      return;
    }
    return data;
  },
};

if (import.meta.env.DEV) {
  Reflect.set(unsafeWindow, "TiebaNewPCApi", TiebaNewPCApi);
}
