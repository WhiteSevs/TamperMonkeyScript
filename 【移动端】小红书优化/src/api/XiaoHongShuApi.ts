import { Qmsg, httpx, log, utils } from "@/env";

interface PageInfo {
    comments: any[],
    cursor: string,
    has_more: boolean,
    time: number,
    user_id: string,
}
interface LzlPageInfo extends PageInfo {

}
const XiaoHongShuApi = {
    /**
     * 获取页信息
     */
    async getPageInfo(
        note_id: string | number,
        cursor = "",
        top_comment_id = "",
        image_formats = "jpg,webp"
    ) {
        let getResp = await httpx.get(
            `https://edith.xiaohongshu.com/api/sns/web/v2/comment/page?note_id=${note_id}&cursor=${cursor}&top_comment_id=${top_comment_id}&image_formats=${image_formats}`,
            {
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "User-Agent": utils.getRandomPCUA(),
                    Origin: "https://www.xiaohongshu.com",
                    Referer: "https://www.xiaohongshu.com/",
                    "X-T": Date.now(),
                },
            }
        );
        if (!getResp.status) {
            return;
        }
        let data = utils.toJSON(getResp.data.responseText);
        log.info(["获取页信息", data]);
        if (data["code"] === 0 || data["success"]) {
            return data["data"] as PageInfo;
        } else if (data["code"] === -101) {
            /* 未登录 */
            return;
        } else {
            Qmsg.error(data["msg"]);
        }
    },
    /**
     * 获取楼中楼页信息
     */
    async getLzlPageInfo(
        note_id = "",
        root_comment_id = "",
        num = 10,
        cursor = "",
        image_formats = "jpg,webp"
    ) {
        let getResp = await httpx.get(
            `https://edith.xiaohongshu.com/api/sns/web/v2/comment/sub/page?note_id=${note_id}&root_comment_id=${root_comment_id}&num=${num}&cursor=${cursor}&image_formats=${image_formats}`,
            {
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "User-Agent": utils.getRandomPCUA(),
                    Origin: "https://www.xiaohongshu.com",
                    Referer: "https://www.xiaohongshu.com/",
                    "X-T": Date.now(),
                },
            }
        );
        if (!getResp.status) {
            return;
        }
        let data = utils.toJSON(getResp.data.responseText);
        log.info(["获取楼中楼页信息", data]);
        if (data["code"] === 0 || data["success"]) {
            return data["data"] as LzlPageInfo;
        } else {
            Qmsg.error(data["msg"]);
        }
    },
};

export {
    XiaoHongShuApi
}