import { unsafeWindow } from "ViteGM";
const MTUtils = {
    /**
     * STYLEID
     * 检测dz论坛使用的模板id，判断是桌面端还是移动端
     * + 4 桌面端
     * + 3 移动端
     */
    isMobile() {
        return (
            (unsafeWindow as any).STYLEID ===
            "3"
        );
    }
}

export {
    MTUtils
}