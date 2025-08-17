import type { PopsEventDetails } from "@whitesev/pops/dist/types/src/types/event";
import { log } from "@/env";
import { NetDiskUISizeConfig } from "./NetDiskUISizeConfig";
import { NetDiskSuspension } from "../view/suspension/NetDiskSuspensionView";
import { NetDiskView } from "../view/NetDiskView";
import { NetDiskLinearChainDialogView } from "../view/linear-chain-dialog/NetDiskLinearChainDialogView";
import { NetDiskNewAccessCodeView } from "../view/new-access-code/NetDiskNewAccessCodeView";
import { NetDiskMatchPasteText } from "../view/match-paste-text/NetDiskMatchPasteTextView";
import { NetDiskHistoryMatchView } from "../view/history-match/NetDiskHistoryMatchView";

/** 弹窗UI界面 */
export const NetDiskUI = {
	/** 元素对象实例 */
	Alias: {
		/**
		 * 链接弹窗的对象
		 */
		uiLinkAlias: void 0 as any as PopsEventDetails,
		/**
		 * 历史匹配记录弹窗的对象
		 */
		historyAlias: void 0 as any as PopsEventDetails,
		/**
		 * 设置弹窗的对象
		 */
		settingAlias: void 0 as any as PopsEventDetails,
	},
	/**
	 * 已匹配到的网盘图标字典
	 */
	isMatchedNetDiskIconMap: new Set<string>(),
	/**
	 * 是否默认禁用弹窗弹出后背景可以滚动
	 */
	defaultForbiddenScroll: false,
	/**
	 * 弹窗的配置
	 * 规定格式
	 * {
	 *  PC:{
	 *    width: "",
	 *    height: "",
	 *  },
	 *  Mobile: {
	 *    width: "",
	 *    height: "",
	 *  }
	 * }
	 */
	popsStyle: NetDiskUISizeConfig,
	src: {
		/**
		 * 图标RESOURCE_ICON
		 * 从图标库中引入并覆盖
		 */
		icon: {} as {
			[key: string]: string;
		},
		/**
		 * 判断图标字典中是否存在该键
		 * @param iconKey
		 */
		hasIcon(iconKey: string) {
			return Reflect.has(this.icon, iconKey);
		},
		/**
		 * 添加图标数据
		 * @param iconKey
		 * @param iconValue
		 */
		addIcon(iconKey: string, iconValue: string) {
			if (this.hasIcon(iconKey)) {
				log.warn("图标字典中已存在该icon：" + iconKey);
				return false;
			} else {
				return Reflect.set(this.icon, iconKey, iconValue);
			}
		},
	},
	/**
	 * 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮
	 */
	suspension: NetDiskSuspension,
	/**
	 * 主视图
	 */
	view: NetDiskView,
	/**
	 * 显示直链的弹窗
	 */
	staticView: NetDiskLinearChainDialogView,
	/**
	 * 需要重新输入新密码的弹窗
	 */
	newAccessCodeView: NetDiskNewAccessCodeView,
	/**
	 * 网盘历史匹配到的记录弹窗
	 */
	netDiskHistoryMatch: NetDiskHistoryMatchView,
	/**
	 * 主动识别文本
	 */
	matchPasteText: NetDiskMatchPasteText,
};
