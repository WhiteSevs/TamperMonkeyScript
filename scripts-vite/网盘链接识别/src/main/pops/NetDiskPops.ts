import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDiskUI } from "../ui/NetDiskUI";
import { pops, utils } from "@/env";
import type { PopsPanelDetails } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import type { PopsCallResult } from "@whitesev/pops/dist/types/src/types/main";
import { PopsLoadingDetails } from "@whitesev/pops/dist/types/src/components/loading/indexType";
import { PopsConfirmDetails } from "@whitesev/pops/dist/types/src/components/confirm/indexType";
import { PopsFolderDetails } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { PopsAlertDetails } from "@whitesev/pops/dist/types/src/components/alert/indexType";
import { PopsPromptDetails } from "@whitesev/pops/dist/types/src/components/prompt/indexType";
import { PopsAnimation } from "@whitesev/pops/dist/types/src/types/animation";
import { PopsPanel } from "@/setting/setting";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { PopsRightClickMenuDetails } from "@whitesev/pops/dist/types/src/components/rightClickMenu/indexType";

export type PopsSizeConfig = {
	/** PC端 */
	PC: {
		/** 宽度，不建议使用dvw或dvh，因为这个api有点新 */
		width: string;
		/** 高度，不建议使用dvw或dvh，因为这个api有点新 */
		height: string;
	};
	/** 移动端 */
	Mobile: {
		/** 宽度，不建议使用dvw或dvh，因为这个api有点新 */
		width: string;
		/** 高度，不建议使用dvw或dvh，因为这个api有点新 */
		height: string;
	};
};

type NetDiskPopsDetails<T> = Omit<T, "width" | "height"> & {
	/** 宽度 */
	width?: string;
	/** 高度 */
	height?: string;
};

/** pops弹窗 */
export const NetDiskPops = {
	/**
	 * 普通信息框
	 * @param details 配置
	 * @param sizeConfig 大小配置
	 */
	alert(
		details: NetDiskPopsDetails<PopsAlertDetails>,
		sizeConfig?: PopsSizeConfig
	) {
		details = this.handleDetails(details, sizeConfig);
		// @ts-ignore
		return pops.alert(details);
	},
	/**
	 * 询问框
	 * @param details 配置
	 * @param sizeConfig 大小配置
	 */
	confirm(
		details: NetDiskPopsDetails<PopsConfirmDetails>,
		sizeConfig?: PopsSizeConfig
	) {
		details = this.handleDetails(details, sizeConfig);
		// @ts-ignore
		return pops.confirm(details);
	},
	/**
	 * 加载层
	 * @param details 配置
	 */
	loading(details: NetDiskPopsDetails<PopsLoadingDetails>) {
		if (typeof details["animation"] === "undefined") {
			// @ts-ignore
			details["animation"] = NetDiskGlobalData.pops.popsAnimation.value;
		}
		if (typeof details["forbiddenScroll"] === "undefined") {
			details["forbiddenScroll"] = NetDiskUI.defaultForbiddenScroll;
		}
		return pops.loading(details);
	},
	/**
	 * 输入框
	 * @param details 配置
	 * @param sizeConfig 大小配置
	 */
	prompt(
		details: NetDiskPopsDetails<PopsPromptDetails>,
		sizeConfig?: PopsSizeConfig
	) {
		details = this.handleDetails(details, sizeConfig);
		// @ts-ignore
		return pops.prompt(details);
	},
	/**
	 * 文件夹
	 * @param details 配置
	 */
	folder(
		details: Omit<NetDiskPopsDetails<PopsFolderDetails>, "sort">,
		sizeConfig?: PopsSizeConfig
	) {
		details = this.handleDetails(details, sizeConfig);
		// @ts-ignore
		details["sort"] = {
			name: NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value,
			isDesc: NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value,
			// @ts-ignore
			callback(target, event, sortName, sortDesc) {
				NetDiskGlobalData.popsFolder["pops-folder-sort-name"].value = sortName;
				NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].value = sortDesc;
			},
		};
		// @ts-ignore
		return pops.folder(details);
	},
	/**
	 * 菜单面板
	 * @param details 配置
	 */
	panel(
		details: NetDiskPopsDetails<PopsPanelDetails>,
		sizeConfig?: PopsSizeConfig
	) {
		details = this.handleDetails(details, sizeConfig);
		// @ts-ignore
		return pops.panel(details);
	},
	/**
	 * 右键菜单
	 */
	rightClickMenu(details: NetDiskPopsDetails<PopsRightClickMenuDetails>) {
		details = this.handleDetails(details);
		return pops.rightClickMenu(details);
	},
	/**
	 *
	 * @param details
	 * @param sizeConfig 大小配置
	 */
	handleDetails(
		details: any,
		sizeConfig?: {
			PC: {
				width: string;
				height: string;
			};
			Mobile: {
				width: string;
				height: string;
			};
		}
	) {
		details = Object.assign(
			{
				animation: NetDiskGlobalData.pops.popsAnimation.value,
				drag: NetDiskGlobalData.pops.pcDrag.value,
				dragLimit: NetDiskGlobalData.pops.pcDragLimit.value,
				forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
			},
			details
		);
		if (sizeConfig != null) {
			details.width = pops.isPhone()
				? sizeConfig.Mobile.width
				: sizeConfig.PC.width;
			details.height = pops.isPhone()
				? sizeConfig.Mobile.height
				: sizeConfig.PC.height;
		}
		// 设置遮罩层
		if (details.mask == null) {
			details.mask = {};
		}
		if (typeof details.mask.enable !== "boolean") {
			details.mask.enable = true;
		}
		if (details.mask.clickEvent == null) {
			details.mask.clickEvent = {};
		}
		if (typeof details.mask.clickEvent.toClose !== "boolean") {
			details.mask.clickEvent.toClose =
				NetDiskGlobalData.pops.clickMaskToCloseDialog.value;
		}
		// 亚克力效果
		if (NetDiskGlobalData.pops.popsAcrylic.value) {
			let acrylicCSS = /*css*/ `
            .pops {
                --acrylic-opacity: 0.7;
                --acrylic-color: rgba(232, 232, 232, var(--acrylic-opacity));
                --acrylic-blur: 30px;
                --acrylic-saturate: 125%;
                --pops-bg-opacity: var(--acrylic-opacity);
            }
            .pops {
                backdrop-filter: blur(var(--acrylic-blur)) saturate(var(--acrylic-saturate));
                background-color: var(--acrylic-color);
            }
            .pops[type-value=panel]{
                --aside-bg-color: rgba(221, 221, 221, var(--acrylic-opacity));
            }
            `;
			if (typeof details.style === "string") {
				details.style += acrylicCSS;
			} else {
				details.style = acrylicCSS;
			}
		}
		// 设置z-index获取方式
		details.zIndex = () => {
			let maxZIndex = utils.getMaxZIndex(10);
			let popsMaxZIndex =
				pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
			let zIndex = utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
			return zIndex;
		};
		return details;
	},
};
