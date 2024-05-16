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
			padding: 0px 10px;
		}
		#sliderVideo{
			width: -webkit-fill-available;
		}
		/* 距离是顶部导航栏的高度 */
		#search-content-area{
			margin-top: 65px;
		}
		/* 调整搜索框的宽度 */
		#component-header div[data-click="doubleClick"] > div[data-click="doubleClick"]>div:has(input[data-e2e="searchbar-input"]){
			width: -webkit-fill-available;
    		padding-right: 0;
		}
        `);
	},
};

export { DouYinSearch };
