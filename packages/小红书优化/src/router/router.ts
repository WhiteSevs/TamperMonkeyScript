/* 小红书router */
const ScriptRouter = {
    /**
     * 判断是否是笔记页面
     */
    isNotePage() {
        return globalThis.location.pathname.startsWith("/discovery/item/");
    },
    /**
     * 判断是否是用户主页页面
     */
    isUserHomePage() {
        return globalThis.location.pathname.startsWith("/user/profile/");
    },
    /**
     * 判断是否是主页
     */
    isHomePage() {
        return (
            globalThis.location.href === "https://www.xiaohongshu.com/" ||
            globalThis.location.href === "https://www.xiaohongshu.com"
        );
    },
    /**
     * 判断是否是搜索页面
     */
    isSearchPage() {
        return globalThis.location.pathname.startsWith("/search_result/");
    },
};


export {
    ScriptRouter
}