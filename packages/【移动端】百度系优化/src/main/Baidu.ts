import { BaiduRouter } from "@/router/BaiduRouter";
import { BaiduSearch } from "./search/Search";
import { BaiduSearchHome } from "./search/home/SearchHome";
import { BaiduBaiJiaHao } from "./baijiahao/BaiJiaHao";
import { BaiduTieBa } from "./tieba/Tieba";
import { BaiduWenKu } from "./wenku/WenKu";
import { BaiduJingYan } from "./jingyan/JingYan";
import { BaiduBaiKe } from "./baike/BaiKe";
import { BaiduBaiKeTaShuo } from "./baike/tashuo/BaiKeTaShuo";
import { BaiduZhiDao } from "./zhidao/ZhiDao";
import { BaiduFanYi } from "./fanyi/FanYi";
import { BaiduFanYiApp } from "./fanyi-app/FanYiApp";
import { BaiduImage } from "./image/Image";
import { BaiduMap } from "./map/Map";
import { BaiduMbd } from "./mbd/Mbd";
import { BaiduXue } from "./xue/Xue";
import { BaiduAiQiCha } from "./aiqicha/AiQiCha";
import { BaiduPos } from "./pos/Pos";
import { BaiduHaoKan } from "./haokan/HaoKan";
import { BaiduGraph } from "./graph/Graph";
import { BaiduPan } from "./pan/Pan";
import { BaiduYiYan } from "./yiyan/YiYan";
import { BaiduChat } from "./chat/Chat";
import { BaiduMiniJiaoYu } from "./mini-jiaoyu/MiniJiaoYu";
import { BaiduEasyLearn } from "./easylearn/EasyLearn";
import { BaiduAiStudy } from "./aistudy/AiStudy";
import { BaiduISite } from "./isite/ISite";

const Baidu = {
    init() {
        if (BaiduRouter.isSearch()) {
            BaiduSearch.init();
        }
        if (BaiduRouter.isSearchHome()) {
            BaiduSearchHome.init();
        }
        if (BaiduRouter.isBaiJiaHao()) {
            BaiduBaiJiaHao.init();
        }
        if (BaiduRouter.isTieBa()) {
            BaiduTieBa.init();
        }
        if (BaiduRouter.isWenKu()) {
            BaiduWenKu.init();
        }
        if (BaiduRouter.isJingYan()) {
            BaiduJingYan.init();
        }
        if (BaiduRouter.isBaiKe()) {
            BaiduBaiKe.init();
            if (BaiduRouter.isBaiKeTaShuo()) {
                BaiduBaiKeTaShuo.init();
            }
        }
        if (BaiduRouter.isZhiDao()) {
            BaiduZhiDao.init();
        }
        if (BaiduRouter.isFanYi()) {
            BaiduFanYi.init();
        }
        if (BaiduRouter.isFanYiApp()) {
            BaiduFanYiApp.init();
        }
        if (BaiduRouter.isImage()) {
            BaiduImage.init();
        }
        if (BaiduRouter.isMap()) {
            BaiduMap.init();
        }
        if (BaiduRouter.isMbd()) {
            BaiduMbd.init();
        }
        if (BaiduRouter.isXue()) {
            BaiduXue.init();
        }
        if (BaiduRouter.isAiQiCha()) {
            BaiduAiQiCha.init();
        }
        if (BaiduRouter.isPos()) {
            BaiduPos.init();
        }
        if (BaiduRouter.isHaoKan()) {
            BaiduHaoKan.init();
        }
        if (BaiduRouter.isGraph()) {
            BaiduGraph.init();
        }
        if (BaiduRouter.isPan()) {
            BaiduPan.init();
        }
        if (BaiduRouter.isYiYan()) {
            BaiduYiYan.init();
        }
        if (BaiduRouter.isChat()) {
            BaiduChat.init();
        }
        if (BaiduRouter.isMiniJiaoYu()) {
            BaiduMiniJiaoYu.init();
        }
        if (BaiduRouter.isEasyLearn()) {
            BaiduEasyLearn.init();
        }
        if (BaiduRouter.isAiStudy()) {
            BaiduAiStudy.init();
        }
        if (BaiduRouter.isISite()) {
            BaiduISite.init();
        }
    }
}


export {
    Baidu
}