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
import { log } from "@/env";

const Baidu = {
	init() {
		if (BaiduRouter.isSearch()) {
			log.success("Router: 百度搜索");
			BaiduSearch.init();
		}
		if (BaiduRouter.isSearchHome()) {
			log.success("Router: 百度搜索-主页");
			BaiduSearchHome.init();
		}
		if (BaiduRouter.isBaiJiaHao()) {
			log.success("Router: 百家号");
			BaiduBaiJiaHao.init();
		}
		if (BaiduRouter.isTieBa()) {
			log.success("Router: 贴吧");
			BaiduTieBa.init();
		}
		if (BaiduRouter.isWenKu()) {
			log.success("Router: 百度文库");
			BaiduWenKu.init();
		}
		if (BaiduRouter.isJingYan()) {
			log.success("Router: 百度经验");
			BaiduJingYan.init();
		}
		if (BaiduRouter.isBaiKe()) {
			log.success("Router: 百度百科");
			BaiduBaiKe.init();
			if (BaiduRouter.isBaiKeTaShuo()) {
				log.success("Router: 百度百科-他说");
				BaiduBaiKeTaShuo.init();
			}
		}
		if (BaiduRouter.isZhiDao()) {
			log.success("Router: 百度知道");
			BaiduZhiDao.init();
		}
		if (BaiduRouter.isFanYi()) {
			log.success("Router: 百度翻译");
			BaiduFanYi.init();
		}
		if (BaiduRouter.isFanYiApp()) {
			log.success("Router: 百度翻译-App");
			BaiduFanYiApp.init();
		}
		if (BaiduRouter.isImage()) {
			log.success("Router: 百度图片");
			BaiduImage.init();
		}
		if (BaiduRouter.isMap()) {
			log.success("Router: 百度地图");
			BaiduMap.init();
		}
		if (BaiduRouter.isMbd()) {
			log.success("Router: mbd");
			BaiduMbd.init();
		}
		if (BaiduRouter.isXue()) {
			log.success("Router: 百度好学");
			BaiduXue.init();
		}
		if (BaiduRouter.isAiQiCha()) {
			log.success("Router: 百度爱企查");
			BaiduAiQiCha.init();
		}
		if (BaiduRouter.isPos()) {
			log.success("Router: 网盟");
			BaiduPos.init();
		}
		if (BaiduRouter.isHaoKan()) {
			log.success("Router: 好看视频");
			BaiduHaoKan.init();
		}
		if (BaiduRouter.isGraph()) {
			log.success("Router: 百度识图");
			BaiduGraph.init();
		}
		if (BaiduRouter.isPan()) {
			log.success("Router: 百度网盘");
			BaiduPan.init();
		}
		if (BaiduRouter.isYiYan()) {
			log.success("Router: 文心一言");
			BaiduYiYan.init();
		}
		if (BaiduRouter.isChat()) {
			log.success("Router: chat");
			BaiduChat.init();
		}
		if (BaiduRouter.isMiniJiaoYu()) {
			log.success("Router: 小程序-百度教育");
			BaiduMiniJiaoYu.init();
		}
		if (BaiduRouter.isEasyLearn()) {
			log.success("Router: 百度教育");
			BaiduEasyLearn.init();
		}
		if (BaiduRouter.isAiStudy()) {
			log.success("Router: 百度爱学");
			BaiduAiStudy.init();
		}
		if (BaiduRouter.isISite()) {
			log.success("Router: 百度基木鱼");
			BaiduISite.init();
		}
	},
};

export { Baidu };
