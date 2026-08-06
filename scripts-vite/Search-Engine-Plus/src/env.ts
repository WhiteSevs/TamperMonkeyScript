import { log, SCRIPT_NAME, utils } from "@components/env.base";
import { GM_getValue, GM_setValue } from "ViteGM";
import { BingWallpaper } from "./utils/BingWallpaper";

const _SCRIPT_NAME_ = SCRIPT_NAME || "SearchEnginePlus";

// const BACKGROUND_URL = "https://bing.img.run/uhd.php";
// const RANDOM_BACKGROUND_URL = "https://bing.img.run/rand_uhd.php";
let BACKGROUND_URL = "https://api.paugram.com/bing";

const localWallpaperInfo = GM_getValue<
  | {
      url: string;
      time: number;
    }
  | undefined
>("wallpaper-today-url");

if (
  localWallpaperInfo &&
  utils.formatTime(localWallpaperInfo.time, "yyyy-MM-dd") === utils.formatTime(Date.now(), "yyyy-MM-dd")
) {
  // 本地缓存的今日壁纸
  BACKGROUND_URL = localWallpaperInfo.url;
  log.info("今日壁纸url已获取，使用该url作为壁纸：" + BACKGROUND_URL);
} else {
  BingWallpaper.getTodayImgUrlInfos().then((todayWallpaper) => {
    if (todayWallpaper && todayWallpaper.length) {
      // 优先使用4k
      BACKGROUND_URL = todayWallpaper[0].uhd;
      GM_setValue("wallpaper-today-url", {
        url: todayWallpaper[0].uhd,
        time: Date.now(),
      });
    }
  });
}

export {
  $,
  $$,
  addStyle,
  cookieManager,
  DOMUtils,
  httpx,
  log,
  MenuRegister,
  MountVue,
  pops,
  utils,
  VUE_ROOT_ID,
} from "@components/env.base";
export { BACKGROUND_URL, _SCRIPT_NAME_ as SCRIPT_NAME };
