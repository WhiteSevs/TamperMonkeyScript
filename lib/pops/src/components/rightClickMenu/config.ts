import { pops } from "../../Pops";
import type { PopsRightClickMenuDetails } from "./indexType";

export const rightClickMenuConfig = () => {
	let config: Required<PopsRightClickMenuDetails> = {
		target: document.documentElement,
		targetSelector: null,
		data: [
			{
				icon: pops.config.iconSVG.search,
				iconIsLoading: false,
				text: "搜索",
				callback(clickEvent, contextMenuEvent, liElement) {
					console.log("点击：" + this.text, [
						clickEvent,
						contextMenuEvent,
						liElement,
					]);
				},
			},
			{
				icon: pops.config.iconSVG.documentCopy,
				iconIsLoading: false,
				text: "复制",
				callback(clickEvent, contextMenuEvent, liElement) {
					console.log("点击：" + this.text, [
						clickEvent,
						contextMenuEvent,
						liElement,
					]);
				},
			},
			{
				icon: pops.config.iconSVG.delete,
				text: "删除",
				iconIsLoading: false,
				callback(clickEvent, contextMenuEvent, liElement) {
					console.log("点击：" + this.text, [
						clickEvent,
						contextMenuEvent,
						liElement,
					]);
				},
			},
			{
				icon: pops.config.iconSVG.loading,
				iconIsLoading: true,
				text: "加载",
				callback(clickEvent, contextMenuEvent, liElement) {
					console.log("点击：" + this.text, [
						clickEvent,
						contextMenuEvent,
						liElement,
					]);
					return false;
				},
			},
			{
				icon: pops.config.iconSVG.elemePlus,
				iconIsLoading: true,
				text: "饿了么",
				callback(clickEvent, contextMenuEvent, liElement) {
					console.log("点击：" + this.text, [
						clickEvent,
						contextMenuEvent,
						liElement,
					]);
					return false;
				},
				item: [
					{
						icon: "",
						iconIsLoading: false,
						text: "处理文件",
						callback(clickEvent, contextMenuEvent, liElement) {
							console.log("点击：" + this.text, [
								clickEvent,
								contextMenuEvent,
								liElement,
							]);
						},
					},
					{
						icon: "",
						iconIsLoading: false,
						text: "其它处理",
						callback(clickEvent, contextMenuEvent, liElement) {
							console.log("点击：" + this.text, [
								clickEvent,
								contextMenuEvent,
								liElement,
							]);
						},
						item: [
							{
								icon: pops.config.iconSVG.view,
								iconIsLoading: false,
								text: "查看",
								callback(clickEvent, contextMenuEvent, liElement) {
									console.log("点击：" + this.text, [
										clickEvent,
										contextMenuEvent,
										liElement,
									]);
								},
							},
						],
					},
				],
			},
		],
		className: "",
		isAnimation: true,
		only: false,
		zIndex: 10000,
		preventDefault: true,
		style: null,
		beforeAppendToPageCallBack() {},
	};

	return config;
};