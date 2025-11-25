import { log } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { BaiduAiQiCha } from "./aiqicha/AiQiCha";
import { BaiduAiStudy } from "./aistudy/AiStudy";
import { BaiduBaiJiaHao } from "./baijiahao/BaiJiaHao";
import { BaiduBaiKe } from "./baike/BaiKe";
import { BaiduBaiKeTaShuo } from "./baike/tashuo/BaiKeTaShuo";
import { BaiduChat } from "./chat/Chat";
import { BaiduEasyLearn } from "./easylearn/EasyLearn";
import { BaiduFanYiApp } from "./fanyi-app/FanYiApp";
import { BaiduFanYi } from "./fanyi/FanYi";
import { BaiduGraph } from "./graph/Graph";
import { BaiduHaoKan } from "./haokan/HaoKan";
import { BaiduHealth } from "./health/Health";
import { BaiduImage } from "./image/Image";
import { BaiduISite } from "./isite/ISite";
import { BaiduJingYan } from "./jingyan/JingYan";
import { BaiduMap } from "./map/Map";
import { BaiduMbd } from "./mbd/Mbd";
import { BaiduMiniJiaoYu } from "./mini-jiaoyu/MiniJiaoYu";
import { BaiduPan } from "./pan/Pan";
import { BaiduPos } from "./pos/Pos";
import { BaiduSearch } from "./search/Search";
import { BaiduSearchHome } from "./search/home/SearchHome";
import { SmartAppsTieba } from "./smartapps/tieba/SmartAppsTieba";
import { BaiduTieBa } from "./tieba/Tieba";
import { BaiduWenKu } from "./wenku/WenKu";
import { BaiduXue } from "./xue/Xue";
import { BaiduYiYan } from "./yiyan/YiYan";
import { BaiduZhiDao } from "./zhidao/ZhiDao";

const Baidu = {
  init() {
    if (BaiduRouter.isBaiJiaHao()) {
      log.success("Router: 百家号");
      BaiduBaiJiaHao.init();
    } else if (BaiduRouter.isTieBa()) {
      log.success("Router: 贴吧");
      BaiduTieBa.init();
    } else if (BaiduRouter.isWenKu()) {
      log.success("Router: 百度文库");
      BaiduWenKu.init();
    } else if (BaiduRouter.isJingYan()) {
      log.success("Router: 百度经验");
      BaiduJingYan.init();
    } else if (BaiduRouter.isBaiKe()) {
      log.success("Router: 百度百科");
      BaiduBaiKe.init();
      if (BaiduRouter.isBaiKeTaShuo()) {
        log.success("Router: 百度百科-他说");
        BaiduBaiKeTaShuo.init();
      }
    } else if (BaiduRouter.isZhiDao()) {
      log.success("Router: 百度知道");
      BaiduZhiDao.init();
    } else if (BaiduRouter.isFanYi()) {
      log.success("Router: 百度翻译");
      BaiduFanYi.init();
    } else if (BaiduRouter.isFanYiApp()) {
      log.success("Router: 百度翻译-App");
      BaiduFanYiApp.init();
    } else if (BaiduRouter.isImage()) {
      log.success("Router: 百度图片");
      BaiduImage.init();
    } else if (BaiduRouter.isMap()) {
      log.success("Router: 百度地图");
      BaiduMap.init();
    } else if (BaiduRouter.isMbd()) {
      log.success("Router: mbd");
      BaiduMbd.init();
    } else if (BaiduRouter.isXue()) {
      log.success("Router: 百度好学");
      BaiduXue.init();
    } else if (BaiduRouter.isAiQiCha()) {
      log.success("Router: 百度爱企查");
      BaiduAiQiCha.init();
    } else if (BaiduRouter.isPos()) {
      log.success("Router: 网盟");
      BaiduPos.init();
    } else if (BaiduRouter.isHaoKan()) {
      log.success("Router: 好看视频");
      BaiduHaoKan.init();
    } else if (BaiduRouter.isGraph()) {
      log.success("Router: 百度识图");
      BaiduGraph.init();
    } else if (BaiduRouter.isPan()) {
      log.success("Router: 百度网盘");
      BaiduPan.init();
    } else if (BaiduRouter.isYiYan()) {
      log.success("Router: 文心一言");
      BaiduYiYan.init();
    } else if (BaiduRouter.isChat()) {
      log.success("Router: chat");
      BaiduChat.init();
    } else if (BaiduRouter.isMiniJiaoYu()) {
      log.success("Router: 小程序-百度教育");
      BaiduMiniJiaoYu.init();
    } else if (BaiduRouter.isEasyLearn()) {
      log.success("Router: 百度教育");
      BaiduEasyLearn.init();
    } else if (BaiduRouter.isAiStudy()) {
      log.success("Router: 百度爱学");
      BaiduAiStudy.init();
    } else if (BaiduRouter.isISite()) {
      log.success("Router: 百度基木鱼");
      BaiduISite.init();
    } else if (BaiduRouter.isSmartApps_Tieba()) {
      log.success(`Router: 小程序 - 百度贴吧`);
      SmartAppsTieba.init();
    } else if (BaiduRouter.isHealth()) {
      log.success(`Router: 百度健康`);
      BaiduHealth.init();
    } else if (BaiduRouter.isSearch()) {
      log.success("Router: 百度搜索");
      if (BaiduRouter.isSearchHome()) {
        log.success("Router: 百度搜索-主页");
        BaiduSearchHome.init();
      } else {
        BaiduSearch.init();
      }
    } else {
      log.error("该Router暂未适配，请联系开发者：" + window.location.href);
    }
  },
};

export { Baidu };
