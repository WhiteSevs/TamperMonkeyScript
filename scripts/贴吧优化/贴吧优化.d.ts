/**
 * 楼中楼用户评论信息
 */
interface TieBaLzlUserPostInfo {
    /**
     * 用户头像
     */
    userAvatar: string;
    /**
     * 主页地址Url
     */
    userHomeUrl: string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 用户portrait
     */
    userPortrait: string;
    /**
     * 回复的内容id
     */
    userPostId: number;
    /**
     * 回复的内容
     */
    userReplyContent: string;
    /**
     * 回复的时间
     */
    userReplyTime: string;
}