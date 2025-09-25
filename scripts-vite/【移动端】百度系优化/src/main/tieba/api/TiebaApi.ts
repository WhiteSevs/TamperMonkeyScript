import { DOMUtils, httpx, log, utils } from "@/env";
import { TiebaCore } from "../TiebaCore";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";
import { VueUtils } from "@components/utils/VueUtils";

interface HonorGradeInfo {
  count: number;
  forum_list: string[];
}
interface PanelUserInfo {
  /**
   * 用户名，一般标识为un
   */
  name: string;
  identity: number;
  /**
   * 显示的用户名
   */
  name_show: string;
  /**
   * 显示的用户名
   */
  show_nickname: string;
  profession_manager_nick_name: string;
  iconinfo: null;
  /**
   * 印记信息
   */
  new_iconinfo: any;
  /**
   * 背景图ID
   */
  bg_id: number;
  /**
   * 详细头像代码带时间戳
   */
  portrait: string;
  /**
   * 短头像代码带时间戳
   */
  portrait_h: string;
  /**
   * 头像时间戳
   */
  portrait_time: number;
  /**
   * 性别
   */
  sex: "male" | "female";
  /**
   * 吧龄
   */
  tb_age: string;
  /**
   * 发帖量
   */
  post_num: number;
  honor: {
    manager: null;
    grade: {
      [key: string]: HonorGradeInfo;
    };
    novice: number;
  };
  /**
   * 是否允许关注
   *
   * + 0 不可以
   * + 1 可以
   */
  can_followed: number;
  /**
   * 是否被屏蔽
   *
   * + 0 是
   * + 1 不是
   */
  is_block: number;
  /**
   * 是否是私密的
   *
   * + 0 是
   * + 1 不是
   */
  is_private: number;
  mParr_props: any;
  tbmall_month_icon: {
    [key: string]: number;
  };
  free_flag: null;
  marriage: [];
  vipInfo: {
    a_score: -50;
    /**
     * VIP结束时间戳
     */
    e_time: string;
    /**
     * 积分
     */
    ext_score: string;
    /**
     * 会员图标
     */
    icon_url: string;
    n_score: string;
    /**
     * VIP开始时间戳
     */
    s_time: string;
    v_level: string;
    v_status: string;
  };
  /**
   * 是否是会员
   */
  tb_vip: boolean;
  /**
   * 粉丝数
   */
  followed_count: number;
}

interface UserJSON {
  creator: {
    name_link: string;
    inner_id: string;
    /**
     * 是否在线
     */
    is_online: boolean;
    /**
     * portrait
     */
    itieba_portrait: string;
    /**
     * 用户名
     * 乱码
     */
    name: string;
    /**
     * 显示的用户名
     * 乱码
     */
    name_show: string;
    /**
     * 显示的用户名
     * 乱码
     */
    show_nickname: string;
    itieba_id: string;
    portrait: string;
    is_prison: false;
    /**
     * id
     */
    id: number;
    is_private: true;
    is_verify: false;
  };
  id: number;
  inner_id: string;
  /**
   * 乱码
   **/
  raw_name: string;
  tbs: string;
}
interface HomePostsInfo {
  /** 帖子链接 */
  url: string;
  /** 帖子标题 */
  title: string;
  /** 帖子内容 */
  content: string;
  /** 吧名 */
  forumName: string;
  /** 发帖事件 */
  createTime: string;
  /** 回复数量 */
  replyNum: number;
  /** 媒体数据，一般是图片 */
  mediaList: string[];
}
interface ChatUserInfo {
  lastReadMsgId: number;
  portrait: string;
  show_nickname: string;
  uid: number;
  /** 当为数字时，查不到信息 */
  uname: string | number;
  unread: number;
}
/**
 * 贴吧api
 * + https://www.52fisher.cn/93.html
 */
const TieBaApi = {
  /**
   * 根据un|portrait获取个人主页信息
   *
   * /home/get/panel
   * @param userInfo
   */
  async getUserHomeInfo(userInfo: { un?: string; portrait?: string }) {
    let searchParams = "";
    if (userInfo["un"]) {
      searchParams = `un=${userInfo["un"]}`;
    } else if (userInfo["portrait"]) {
      searchParams = `portrait=${userInfo["portrait"]}`;
    } else {
      throw new TypeError("userInfo.un|userInfo.portrait is undefined");
    }
    let getResp = await httpx.get(`https://tieba.baidu.com/home/get/panel?ie=utf-8&${searchParams}`, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: "tieba.baidu.com",
        Referer: "https://tieba.baidu.com/",
      },
    });
    if (!getResp.status) {
      return;
    }
    let data = utils.toJSON<{
      data: PanelUserInfo;
      error: string;
      no: number;
    }>(getResp.data.responseText);
    if (data["no"] !== 0) {
      return;
    }
    return data.data;
  },
  /**
   * 根据un获取帖子信息
   *
   * /home/post
   * @param un 用户的un(userName)
   * @param [pn=1] 第xx页
   */
  async getUserPosts(un: string, pn = 1) {
    let response = await httpx.get(`https://tieba.baidu.com/home/post?un=${un}&is_ajax=1&lp=&pn=${pn}`, {
      // 该请求为http，页面为https，会报错
      fetch: true,
      headers: {
        "User-Agent": utils.getRandomPCUA(),
      },
      allowInterceptConfig: false,
    });
    if (!response.status) {
      log.error("获取用户帖子信息失败", response);
      return;
    }
    let data = utils.toJSON<{
      data: {
        content: string;
        page: {
          has_more: boolean | number;
        };
      };
      no: number;
    }>(response.data.responseText);
    if (data.no != 0) {
      return;
    }
    if (utils.isNull(data.data.content)) {
      return;
    }
    let result = {
      has_more: Boolean(data.data.page.has_more),
      data: [] as HomePostsInfo[],
    };
    let contentDoc = DOMUtils.parseHTML(data.data.content, true, true);
    Array.from(contentDoc.querySelectorAll(".list_item")).forEach((liElement) => {
      let postInfo: HomePostsInfo = {
        url: (liElement.querySelector("a.list_item_link") as HTMLAnchorElement).href,
        title: (liElement.querySelector(".post_list_item_title") as HTMLSpanElement).innerHTML,
        content: (liElement.querySelector(".post_abstract_text") as HTMLDivElement).innerHTML,
        forumName: (liElement.querySelector(".post_list_item_info_forum") as HTMLSpanElement).innerText.replace(
          /吧$/,
          ""
        ),
        createTime: (liElement.querySelector(".post_list_item_info_time") as HTMLSpanElement).innerText,
        replyNum: parseInt((liElement.querySelector(".post_item_info_reply_icon") as HTMLSpanElement).innerText),
        mediaList: [],
      };
      if (isNaN(postInfo.replyNum)) {
        postInfo.replyNum = 0;
      }
      if (liElement.querySelector(".thread_body_media")) {
        postInfo.mediaList.concat(
          Array.from(liElement.querySelectorAll(".thread_body_media img") as NodeListOf<HTMLImageElement>).map(
            (item) => item.src
          )
        );
      }
      result.data.push(postInfo);
    });
    return result;
  },
  /**
   * 根据un获取用户信息
   * @param un 用户的un(userName)，自动进行gbk编码
   */
  async getUserInfo(un: string) {
    let gbkEncoder = new utils.GBKEncoder();
    un = gbkEncoder.encode(un);
    let getResp = await httpx.get(`https://tieba.baidu.com/i/sys/user_json?un=${un}`, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: "tieba.baidu.com",
        Referer: "https://tieba.baidu.com/",
      },
    });
    if (!getResp.status) {
      return;
    }
    let data = utils.toJSON<UserJSON>(getResp.data.responseText);
    return data;
  },
  /**
   * 根据uid获取用户信息
   *
   * 注意：该请求是http非安全请求
   * @param uid
   * @returns
   */
  async getChatUserInfo(uid: string | number) {
    let getResp = await httpx.get(`http://tieba.baidu.com/im/pcmsg/query/getUserInfo?chatUid=${uid}`, {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Host: "tieba.baidu.com",
        Referer: "https://tieba.baidu.com/",
      },
    });
    if (!getResp.status) {
      return;
    }
    let data = utils.toJSON<{
      chatUser: ChatUserInfo;
      errno: number;
      errmsg: string;
    }>(getResp.data.responseText);
    if (data.errno !== 0) {
      log.error(data);
      return;
    }
    return data.chatUser;
  },
  /**
   * 签到吧
   *
   * /sign/add
   * @param forumName 吧名
   * @param tbs 应该是用户token
   */
  async forumSign(forumName: string, tbs: string) {
    log.success(["发送签到请求→", forumName, tbs]);
    let postResp = await httpx.post("https://tieba.baidu.com/sign/add", {
      data: `ie=utf-8&kw=${forumName}&tbs=${tbs}`,
      responseType: "json",
      headers: {
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Host: "tieba.baidu.com",
        Origin: "https://tieba.baidu.com",
        "User-Agent": utils.getRandomPCUA(),
        Referer: "https://tieba.baidu.com/p/",
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    log.success(postResp);
    if (!postResp.status) {
      return;
    }
    let data = utils.toJSON(postResp.data.responseText);
    log.success(data);
    return data as {
      data: {
        finfo: {
          current_rank_info: {
            sign_count: number;
          };
        };
      };
      error?: string;
    };
  },
  /**
   * 获取用户所有关注的吧
   * 需要cookie
   * 如果未登录，那么会获取到空列表
   *
   * /mo/q/sug
   */
  async getUserAllLikeForum() {
    let response = await httpx.get("https://tieba.baidu.com/mo/q/sug?query=&is_ajax=1&sug=1", {
      headers: {
        Accept: "application/json",
        Host: "tieba.baidu.com",
        Referer: "https://tieba.baidu.com/i/i/forum",
        "User-Agent": utils.getRandomAndroidUA(),
      },
    });
    log.success(response);
    if (!response.status) {
      return;
    }
    let data = utils.toJSON(response.data.responseText) as NestedObjectWithToString;
    log.success(data);
    return data["data"]["like_forum"] as {
      length: number;
      forum_name: string;
      is_brand_forum: 0 | number;
    }[];
  },
  /**
   * 获取吧的tbs值
   */
  async getForumTbs(forumName: string) {
    let getResp = await httpx.get(`https://tieba.baidu.com/f?kw=${forumName}&ie=utf-8`, {
      headers: {
        Host: "tieba.baidu.com",
        Referer: `https://tieba.baidu.com/f?kw=${forumName}&ie=utf-8`,
      },
    });
    if (!getResp.status) {
      return;
    }
    let PageData = getResp.data.responseText.match(/var[\s]*PageData[\s\S]*'tbs'.*"(.+)"/);
    if (!PageData) {
      return;
    }
    return PageData[1];
  },
  /**
   * 获取帖子内的图片
   *
   * /photo/bw/picture/guide
   * @param forumName
   * @param tid
   * @param see_lz
   * @param from_page
   * @param alt
   * @param next
   * @param prev
   */
  async getPictureGuide(
    forumName: string,
    tid: string,
    see_lz = 0,
    from_page = 0,
    alt = "jview",
    next = 1000,
    prev = 1000
  ) {
    let getResp = await httpx.get(
      `https://tieba.baidu.com/photo/bw/picture/guide?kw=${forumName}&tid=${tid}&see_lz=${see_lz}&from_page=${from_page}&alt=${alt}&next=${next}&prev=${prev}&_=${Date.now()}`,
      {
        headers: {
          Accept: "*/*",
          Host: "tieba.baidu.com",
          "User-Agent": utils.getRandomPCUA(),
        },
        responseType: "json",
        allowInterceptConfig: false,
      }
    );
    if (!getResp.status) {
      return;
    }
    let data = utils.toJSON(getResp.data.responseText) as NestedObjectWithToString;
    if (data["no"] === 0 || data["error"] === "sucess!") {
      return data["data"] as {
        has_sep?: boolean;
        pic_amount: number;
        pic_list: NestedObjectWithToString;
      };
    }
  },
};

if (import.meta.hot) {
  Reflect.set(window, "TieBaApi", TieBaApi);
}
export { TieBaApi, type HomePostsInfo, type PanelUserInfo, type UserJSON };
