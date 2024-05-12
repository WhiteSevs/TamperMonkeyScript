import { HomePostsInfo, PanelUserInfo, TieBaApi, UserJSON } from "../../api/TiebaApi";
import { DOMUtils, Qmsg, httpx, utils } from "@/env";

type UserSex = {
    0: "保密",
    1: "男",
    2: "女"
}

interface UserInfo {
    /**
     * 用户唯一标识
     */
    id?: string | number;
    tbs?: string;
    /**
     * 用户名
     */
    name?: string;
    /**
     * 显示名称
     */
    showName?: string;
    /**
     * 性别
     * 
     * 0: 保密
     * 1: 男
     * 2: 女
     */
    sex?: keyof UserSex | number;
    /**
     * 等级
     */
    level?: number | string;
    /**
     * 头像地址
     */
    avatar?: string;
    portrait?: string;
    /**
     * 是否为VIP
     */
    is_vip?: boolean;
    ip?: {
        /**
         * 用户IP所在位置
         */
        location?: string;
    },
    /**
     * 个人签名
     */
    personalSignature?: string;
    postInfo?: {
        /**
         * 收到的点赞数
         */
        receivedLikes?: number;
        /**
         * 关注数
         */
        follow?: number;
        /**
         * 关注的贴吧数
         */
        forum?: number;
        /**
         * 粉丝数
         */
        fans?: number;
        /**
         * 帖子数
         */
        post?: number;
    };
    /**
     * 用户留下的印记图片数组（历史记录、足迹等）
     */
    imprint?: string[],
    /**
     * 是否已经关注
     */
    is_like?: boolean;
    /**
     * 是否在线
     */
    is_online?: boolean;
    /**
     * 其它数据
     */
    otherData?: {
        PCUserInfo?: PCUserInfo;
        UserJSON?: UserJSON;
        PanelUserInfo?: PanelUserInfo;
    }
}
interface PCUserInfo {
    /**
     * 等级
     */
    level?: string;
    ip?: {
        /**
         * 用户IP所在位置
         */
        location?: string;
    };
    postInfo?: {
        /**
         * 帖子数
         */
        post?: number;
        /**
         * 帖子数据
         */
        data?: HomePostsInfo[];
    }
}
const TiebaHomeData = {
    async getUserData(): Promise<UserInfo | undefined> {
        let $name = document.querySelector(".home_card_uname_link") as HTMLAnchorElement;
        let name = new URL($name.href).searchParams.get("un") as string;
        /* un可能为空 */
        if (utils.isNull(name)) {
            Qmsg.error("获取用户un失败")
            return
        }
        let $showName = document.querySelector(".home_card_uname_link") as HTMLAnchorElement
        let showName = $showName.innerText;
        let $avatar = document.querySelector("a.home_card_portrait_link img") as HTMLImageElement;
        let avatar = $avatar.src;
        let $followBtn = document.querySelector(".home_card_operate_icon_follow") as HTMLDivElement;
        let isLike = $followBtn.classList.contains("icon_hide");
        let $posts = document.querySelector(".home_tab .home_tab_item:nth-child(1) .home_tab_item_num") as HTMLSpanElement;
        let postsNum = parseInt($posts.innerText);
        let $forum = document.querySelector(".home_tab .home_tab_item:nth-child(2) .home_tab_item_num") as HTMLSpanElement;
        let forumNum = parseInt($forum.innerText);
        let $follow = document.querySelector(".home_tab .home_tab_item:nth-child(3) .home_tab_item_num") as HTMLSpanElement;
        let followNum = parseInt($follow.innerText);
        let $fans = document.querySelector(".home_tab .home_tab_item:nth-child(4) .home_tab_item_num") as HTMLSpanElement;
        let fansNum = parseInt($fans.innerText);
        let pcUserInfo = await TiebaHomeData.getUserDataWithPCDoc();
        if (!pcUserInfo) {
            return;
        }
        let panelUserInfo = await TieBaApi.getUserHomeInfo({
            un: name,
        });
        if (!panelUserInfo) {
            return;
        }
        let userJson = await TieBaApi.getUserJSON(name);
        if (!userJson) {
            return;
        }
        let portrait = panelUserInfo.portrait.replace(/\?t=(.+)/, "");
        let sex = 0;
        if (panelUserInfo.sex === "male") {
            sex = 1;
        } else if (panelUserInfo.sex == "female") {
            sex = 2;
        }
        let imprint: string[] = [];
        if (panelUserInfo.new_iconinfo) {
            Object.values(panelUserInfo.new_iconinfo).forEach((iconItem: any) => {
                if (iconItem.icon) {
                    imprint.push(iconItem.icon);
                }
            })
        }
        return {
            id: userJson.id,
            tbs: userJson.tbs,
            name: name,
            showName: panelUserInfo.show_nickname || panelUserInfo.name_show,
            sex: sex,
            ip: {
                location: pcUserInfo.ip?.location,
            },
            avatar: avatar,
            portrait: portrait,
            imprint: imprint,
            is_vip: panelUserInfo.tb_vip,
            is_like: isLike,
            is_online: userJson.creator.is_online,
            level: panelUserInfo.tb_age,
            postInfo: {
                fans: fansNum,
                follow: followNum,
                forum: forumNum,
                receivedLikes: fansNum,
                post: postsNum
            },
            otherData: {
                PanelUserInfo: panelUserInfo,
                UserJSON: userJson,
                PCUserInfo: pcUserInfo,
            }
        };
    },
    /**
     * 获取PC网页中的用户数据
     */
    async getUserDataWithPCDoc(): Promise<PCUserInfo | undefined> {
        let getResp = await httpx.get(window.location.href, {
            headers: {
                "User-Agent": utils.getRandomPCUA(),
            }
        })
        if (!getResp.status) {
            return;
        }
        let pcDoc = DOMUtils.parseHTML(getResp.data.responseText, true, true);
        // let $personalSignature = pcDoc.querySelector("")
        let level = "0";
        let postNum = 0;
        let ipLocation = "未知";
        Array.from(pcDoc.querySelectorAll(".userinfo_userdata span") as NodeListOf<HTMLSpanElement>).forEach((spanItem: HTMLSpanElement) => {
            let spanText = spanItem.innerText;
            if (spanText.includes("吧龄")) {
                level = spanText.replace(/(吧龄|年|:|：)/g, "")
            } else if (spanText.includes("IP属地")) {
                ipLocation = spanText.replace(/(IP属地|:|：)/g, "")
            }
        })
        let postsList: HomePostsInfo[] = [];
        Array.from(pcDoc.querySelectorAll("ul.new_list > div") as NodeListOf<HTMLDivElement>).forEach(listItem => {
            let postInfo: HomePostsInfo = {
                url: (listItem.querySelector("ul.new_list > div .title") as HTMLAnchorElement).href,
                title: (listItem.querySelector("ul.new_list > div .title") as HTMLSpanElement).getAttribute("title") ||
                    (listItem.querySelector("ul.new_list > div .title") as HTMLSpanElement).innerText,
                content: (listItem.querySelector("ul.new_list > div .n_txt") as HTMLDivElement).innerHTML,
                forumName: (listItem.querySelector("ul.new_list > div .n_name") as HTMLSpanElement).getAttribute("title") as string,
                createTime: (listItem.querySelector("ul.new_list > div .n_post_time") as HTMLSpanElement).innerText,
                /* 暂时获取不到 */
                replyNum: 0,
                mediaList: [],
            };
            if (listItem.querySelector("ul.new_list > div .n_media")) {
                (Array.from(listItem.querySelectorAll("ul.new_list > div .n_media img") as NodeListOf<HTMLImageElement>).forEach(
                    item => {
                        let imgSrc = item.getAttribute("original") || item.src
                        if (imgSrc) {
                            postInfo.mediaList.push(imgSrc)
                        }
                    }
                ))
            }
            postsList.push(postInfo)
        })
        return {
            level: level,
            ip: {
                location: ipLocation
            },
            postInfo: {
                data: postsList,
            }
        }
    },
}

export {
    TiebaHomeData
};
export type { UserInfo };
