import { DOMUtils, log, pops, utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { UITextArea } from "../common-components/ui-textarea";
import { UISelect } from "../common-components/ui-select";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIButton } from "../common-components/ui-button";
import { GM_deleteValue, GM_getValue } from "ViteGM";
import { MTAutoSignIn } from "@/main/sign/MTAutoSignIn";
import Qmsg from "qmsg";
import { UIOwn } from "../common-components/ui-own";
import { MTUtils } from "@/utils/Utils";
import { MTDyncmicAvatar } from "@/main/MTDyncmicAvatar";

export const Component_Common: PopsPanelContentConfig = {
	id: "component-common",
	title: "通用",
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "Toast配置",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISelect(
									"Toast位置",
									"qmsg-config-position",
									"bottom",
									[
										{
											value: "topleft",
											text: "左上角",
										},
										{
											value: "top",
											text: "顶部",
										},
										{
											value: "topright",
											text: "右上角",
										},
										{
											value: "left",
											text: "左边",
										},
										{
											value: "center",
											text: "中间",
										},
										{
											value: "right",
											text: "右边",
										},
										{
											value: "bottomleft",
											text: "左下角",
										},
										{
											value: "bottom",
											text: "底部",
										},
										{
											value: "bottomright",
											text: "右下角",
										},
									],
									(event, isSelectValue, isSelectText) => {
										log.info("设置当前Qmsg弹出位置" + isSelectText);
									},
									"Toast显示在页面九宫格的位置"
								),
								UISelect(
									"最多显示的数量",
									"qmsg-config-maxnums",
									3,
									[
										{
											value: 1,
											text: "1",
										},
										{
											value: 2,
											text: "2",
										},
										{
											value: 3,
											text: "3",
										},
										{
											value: 4,
											text: "4",
										},
										{
											value: 5,
											text: "5",
										},
									],
									void 0,
									"限制Toast显示的数量"
								),
								UISwitch(
									"逆序弹出",
									"qmsg-config-showreverse",
									false,
									void 0,
									"修改Toast弹出的顺序"
								),
							],
						},
					],
				},
				// {
				// 	text: "Cookie配置",
				// 	type: "deepMenu",
				// 	forms: [
				// 		{
				// 			text: "",
				// 			type: "forms",
				// 			forms: [
				// 				UISwitch(
				// 					"启用",
				// 					"httpx-use-cookie-enable",
				// 					false,
				// 					void 0,
				// 					"启用后，将根据下面的配置进行添加cookie"
				// 				),
				// 				UISwitch(
				// 					"使用document.cookie",
				// 					"httpx-use-document-cookie",
				// 					false,
				// 					void 0,
				// 					"自动根据请求的域名来设置对应的cookie"
				// 				),
				// 				UITextArea(
				// 					"bbs.binmt.cc",
				// 					"httpx-cookie-bbs.binmt.cc",
				// 					"",
				// 					void 0,
				// 					void 0,
				// 					"Cookie格式：xxx=xxxx;xxx=xxxx"
				// 				),
				// 			],
				// 		},
				// 	],
				// },
			],
		},
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "功能",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"新增【最新发表】",
									"mt-addLatestPostBtn",
									true,
									void 0,
									"便于快捷跳转"
								),
								UISwitch(
									"超链接文字转换",
									"mt-link-text-to-hyperlink",
									true,
									void 0,
									"自动把符合超链接格式的文字转为超链接"
								),
							],
						},
					],
				},
				{
					text: "头像",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UIOwn(($li) => {
									let $left = DOMUtils.createElement("div", {
										className: "pops-panel-item-left-text",
										innerHTML: /*html*/ `
											<p class="pops-panel-item-left-main-text">小头像</p>
											`,
									});
									let $right = DOMUtils.createElement("div", {
										className: "pops-panel-avatar-img",
										innerHTML: /*html*/ `
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`,
									});
									$li.appendChild($left);
									$li.appendChild($right);
									return $li;
								}),
								UIOwn(($li) => {
									let $left = DOMUtils.createElement("div", {
										className: "pops-panel-item-left-text",
										innerHTML: /*html*/ `
											<p class="pops-panel-item-left-main-text">中头像</p>
											`,
									});
									let $right = DOMUtils.createElement("div", {
										className: "pops-panel-avatar-img",
										innerHTML: /*html*/ `
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`,
									});
									$li.appendChild($left);
									$li.appendChild($right);
									return $li;
								}),
								UIOwn(($li) => {
									let $left = DOMUtils.createElement("div", {
										className: "pops-panel-item-left-text",
										innerHTML: /*html*/ `
											<p class="pops-panel-item-left-main-text">大头像</p>
											`,
									});
									let $right = DOMUtils.createElement("div", {
										className: "pops-panel-avatar-img",
										innerHTML: /*html*/ `
											<img 
												loading="lazy"
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big&ts=1"
												style="
													width: 30px;
													height: 30px;
													border-radius: 50%;
													overflow: hidden;
												">
											`,
									});
									$li.appendChild($left);
									$li.appendChild($right);
									return $li;
								}),
								UIButton(
									"修改头像",
									"可以上传gif图片，注意图片大小限制",
									"上传",
									void 0,
									false,
									false,
									"primary",
									() => {
										MTDyncmicAvatar.init();
									}
								),
							],
						},
					],
				},
			],
		},
	],
};
