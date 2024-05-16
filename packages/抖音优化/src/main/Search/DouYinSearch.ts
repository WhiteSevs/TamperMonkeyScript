import { DOMUtils, log, utils } from "@/env";
import { GM_addStyle } from "ViteGM";
import { DouYinSearchHideElement } from "./DouYinSearchHideElement";

const DouYinSearch = {
	init() {
		DouYinSearchHideElement.init();
	},
	/**
	 * 手机模式
	 */
	mobileMode() {
		log.info("搜索-手机模式");
		GM_addStyle(`
        /* 去除顶部的padding距离 */
        #douyin-right-container{
            padding-top: 0;
        }
		/* 放大放大顶部的综合、视频、用户等header的宽度 */
        #search-content-area > div > div:nth-child(1) > div:nth-child(1){
			width: 100dvw;
        }
		/* 放大顶部的综合、视频、用户等header */
		#search-content-area > div > div:nth-child(1) > div:nth-child(1) > div{
			transform: scale(0.8);
		}
		/* 视频宽度 */
		ul[data-e2e="scroll-list"]{
			width: 100dvw;
			padding: 0px 10px;
		}
        `);
	},
};

export { DouYinSearch };
