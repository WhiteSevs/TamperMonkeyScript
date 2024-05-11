const ScriptRouter = {
    /**
     * 判断当前路径
     * + /video/
     */
    isVideo() {
        return window.location.pathname.startsWith("/video/")
    },
    /**
     * 判断当前路径
     * + /banggumi/
     */
    isBangumi() {
        return window.location.pathname.startsWith("/bangumi/")
    },
    /**
     * 判断当前路径
     * + /search
     */
    isSearch() {
        return window.location.pathname.startsWith("/search")
    },
    /**
     * 判断当前路径
     * + live.bilibili.com
     */
    isLive() {
        return window.location.hostname === "live.bilibili.com"
    }
}


export {
    ScriptRouter
}