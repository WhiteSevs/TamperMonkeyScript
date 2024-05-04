import { DOMUtils, httpx, utils } from "@/env"
interface UserConcernInfoData {
    data: {
        content: string;
        page: {
            "has_more": 1 | 0
        }
    },
    no: number;
}
interface UserConcernInfo {
    url: string;
    forumName: string;
    level: number | string;
    intro: string;
}
interface UserFollowInfoData {
    data: {
        content: string;
        page: {
            "total_num": number,
            "total_page": number,
            "page_size": number,
            "current_page": number,
            "has_next": boolean
        }
    },
    no: number
}
interface UserFollowInfo {
    url: string;
    userName: string;
    avatar: string;
    portrait: string;
}
interface UserFansInfoData extends UserFollowInfoData {

}
interface UserFansInfo extends UserFollowInfo {

}
const TiebaHomeApi = {
    /**
     * 获取用户的关注的吧信息
     * User-Agent默认为移动端
     * @param un 用户名，不是show_nickname|nameshow
     * @param pn 第xx页
     */
    async getConcern(un: string, pn = 1) {
        let gbkEncoder = new utils.GBKEncoder();
        un = gbkEncoder.encode(un);
        let getResp = await httpx.get(`https://tieba.baidu.com/home/concern?un=${un}&is_ajax=1&lp=home_main_concern_more&pn=${pn}`, {
            fetch: true
        })
        if (!getResp.status) {
            return;
        }
        let data = utils.toJSON<UserConcernInfoData>(getResp.data.responseText)
        if (data.no != 0) {
            return;
        }
        if (utils.isNull(data.data.content)) {
            return;
        }
        let $doc = DOMUtils.parseHTML(data.data.content, true, true);
        let result: UserConcernInfo[] = [];
        Array.from($doc.querySelectorAll(".home_concern_forum_item") as NodeListOf<HTMLLIElement>).forEach($li => {
            let $url = $li.querySelector("a.home_concern_forum_item_link") as HTMLAnchorElement;
            let url = $url.href;
            let forumName = $url.getAttribute("data-start-app-param") as string;
            let $level = $li.querySelector(".home_concern_forum_info .level") as HTMLSpanElement;
            let level = parseInt($level.innerText);
            if (isNaN(level)) {
                level = 0;
            }
            let $intro = $li.querySelector(".home_concern_forum_intro") as HTMLDivElement;
            let intro = $intro.innerText;
            result.push({
                url,
                forumName,
                level,
                intro,
            })
        })
        return {
            data: result,
            has_more: data.data.page.has_more
        };
    },
    /**
     * 获取用户关注的人
     * @param un 用户名，不是show_nickname|nameshow
     * @param offset 根据page_size的偏移，一般是page_size的n倍
     * @param page_size 限制返回的数量
     * @returns 
     */
    async getFollow(un: string, offset = 12, page_size = 12) {
        let getResp = await httpx.get(`https://tieba.baidu.com/mo/q/follow?un=${un}&lp=home_main_follow_more&is_ajax=1&offset=${offset}&rn=${page_size}`, {
            fetch: true,
        })
        if (!getResp.status) {
            return;
        }
        let data = utils.toJSON<UserFollowInfoData>(getResp.data.responseText)
        if (data.no != 0) {
            return;
        }
        if (utils.isNull(data.data.content)) {
            return;
        }
        let $doc = DOMUtils.parseHTML(data.data.content, true, true);
        let result: UserFollowInfo[] = [];
        Array.from($doc.querySelectorAll(".uloader_grid_item_user") as NodeListOf<HTMLAnchorElement>).forEach(($url) => {
            let url = $url.href;
            let $userName = $url.querySelector(".uloader_user_name") as HTMLSpanElement;
            let userName = $userName.innerText;
            let $avatar = $url.querySelector(".uloader_user_portrait") as HTMLDivElement;
            let avatar = $avatar.style.backgroundImage.replace(/^url\("/, "").replace(/"\)$/, "");
            let portrait = new URL(avatar).pathname.split("/").pop() as string;
            result.push({
                url: url,
                userName: userName,
                avatar: avatar,
                portrait: portrait,
            })
        })
        return {
            data: result,
            has_next: data.data.page.has_next
        };
    },
    /**
     * 获取用户的粉丝
     * @param un 用户名，不是show_nickname|nameshow
     * @param offset 根据page_size的偏移，一般是page_size的n倍
     * @param page_size 限制返回的数量
     * @returns 
     */
    async getFans(un: string, offset = 12, page_size = 12) {
        let getResp = await httpx.get(`https://tieba.baidu.com/mo/q/fans?un=${un}&lp=home_main_fans_more&is_ajax=1&offset=${offset}&rn=${page_size}`, {
            fetch: true,
        })
        if (!getResp.status) {
            return;
        }
        let data = utils.toJSON<UserFansInfoData>(getResp.data.responseText)
        if (data.no != 0) {
            return;
        }
        if (utils.isNull(data.data.content)) {
            return;
        }
        let $doc = DOMUtils.parseHTML(data.data.content, true, true);
        let result: UserFansInfo[] = [];
        Array.from($doc.querySelectorAll(".uloader_grid_item_user") as NodeListOf<HTMLAnchorElement>).forEach(($url) => {
            let url = $url.href;
            let $userName = $url.querySelector(".uloader_user_name") as HTMLSpanElement;
            let userName = $userName.innerText;
            let $avatar = $url.querySelector(".uloader_user_portrait") as HTMLDivElement;
            let avatar = $avatar.style.backgroundImage.replace(/^url\("/, "").replace(/"\)$/, "");
            let portrait = new URL(avatar).pathname.split("/").pop() as string;
            result.push({
                url: url,
                userName: userName,
                avatar: avatar,
                portrait: portrait,
            })
        })
        return {
            data: result,
            has_next: data.data.page.has_next
        };
    },
}

export {
    TiebaHomeApi,
    type UserConcernInfo,
    type UserFollowInfo,
    type UserFansInfo,
}