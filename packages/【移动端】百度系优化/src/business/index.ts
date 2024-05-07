import { BaiduRouter } from "@/router";
import { BaiduSearch } from "./search/search";
import { BaiduSearchHome } from "./search/home/searhHome";
import { BaiduBaiJiaHao } from "./baijiahao/baijiahao";
import { BaiduTieBa } from "./tieba/tieba";
import { BaiduWenKu } from "./wenku/wenku";
import { BaiduJingYan } from "./jingyan/jingyan";
import { BaiduBaiKe } from "./baike/baike";
import { BaiduBaiKeTaShuo } from "./baike/tashuo/baikeTaShuo";
import { BaiduZhiDao } from "./zhidao/zhidao";
import { BaiduFanYi } from "./fanyi/fanyi";
import { BaiduFanYiApp } from "./fanyi-app/fanyi-app";
import { BaiduImage } from "./image/image";
import { BaiduMap } from "./map/map";
import { BaiduMbd } from "./mbd/mbd";
import { BaiduXue } from "./xue/xue";
import { BaiduAiQiCha } from "./aiqicha/aiqicha";
import { BaiduPos } from "./pos/pos";
import { BaiduHaoKan } from "./haokan/haokan";
import { BaiduGraph } from "./graph/graph";
import { BaiduPan } from "./pan/pan";
import { BaiduYiYan } from "./yiyan/yiyan";
import { BaiduChat } from "./chat/chat";
import { BaiduMiniJiaoYu } from "./mini-jiaoyu/mini-jiaoyu";
import { BaiduEasyLearn } from "./easylearn/easylearn";
import { BaiduAiStudy } from "./aistudy/aistudy";
import { BaiduISite } from "./isite/isite";

const BaiDu = {
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
    BaiDu
}