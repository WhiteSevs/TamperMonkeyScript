import { DOMUtils, httpx, log, pops, utils } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UITextArea } from "@components/setting/components/ui-textarea";
import { UISelect } from "@components/setting/components/ui-select";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIButton } from "@components/setting/components/ui-button";
import { UIOwn } from "@components/setting/components/ui-own";
import { MTUtils } from "@/utils/MTUtils";
import { MTDyncmicAvatar } from "@/main/MTDyncmicAvatar";
import Utils from "@whitesev/utils";

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
				{
					text: "Cookie配置",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"httpx-use-cookie-enable",
									false,
									void 0,
									"启用后，将根据下面的配置进行添加cookie"
								),
								UISwitch(
									"使用document.cookie",
									"httpx-use-document-cookie",
									false,
									void 0,
									"自动根据请求的域名来设置对应的cookie"
								),
								UITextArea(
									"bbs.binmt.cc",
									"httpx-cookie-bbs.binmt.cc",
									"",
									void 0,
									void 0,
									"Cookie格式：xxx=xxxx;xxx=xxxx"
								),
							],
						},
					],
				},
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
									"文本转超链接",
									"mt-link-text-to-hyperlink",
									true,
									void 0,
									"自动把符合超链接格式的文字转为超链接"
								),
								UISwitch(
									"显示用户UID",
									"mt-show-user-uid",
									true,
									void 0,
									"格式为UID：xxx"
								),
								UISwitch(
									"小窗模式",
									"mt-small-window",
									true,
									void 0,
									"开启后点击帖子右侧区域为小窗打开"
								),
								UISwitch(
									"延长登录Cookie过期时间",
									"mt-extend-cookie-expire",
									false,
									void 0,
									"减少频繁登录账号的问题"
								),
							],
						},
					],
				},
				{
					text: "额外菜单项",
					type: "deepMenu",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"小黑屋",
									"mt-black-home",
									true,
									void 0,
									"将会在左侧面板添加【小黑屋】菜单"
								),
								UISwitch(
									"在线用户",
									"mt-online-user",
									true,
									void 0,
									"将会在左侧面板添加【在线用户】菜单"
								),
								UISwitch(
									"付费主题白嫖提醒",
									"mt-post-paidThemePost",
									true,
									void 0,
									"将会在左侧面板添加【付费主题白嫖提醒】菜单"
								),
								UISwitch(
									"我的屏蔽",
									"mt-ownBlock",
									true,
									void 0,
									"将会在左侧面板添加【我的屏蔽】菜单"
								),
								UISwitch(
									"商品上架提醒",
									"mt-productListingReminder",
									true,
									void 0,
									"将会在左侧面板添加【商品上架提醒】菜单"
								),
								UISwitch(
									"自定义用户标签",
									"mt-customizeUserLabels",
									true,
									void 0,
									"将会在左侧面板添加【自定义用户标签】菜单"
								),
								UISwitch(
									"评论过滤器",
									"mt-post-comment-filter",
									true,
									void 0,
									"将会在左侧面板添加【评论过滤器】菜单"
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
							text: "<a href='https://ezgif.com/resize' target='_blank'>Resize Image</a>",
							type: "forms",
							forms: [
								UIOwn(($li) => {
									let $left = DOMUtils.createElement("div", {
										className: "pops-panel-item-left-text",
										innerHTML: /*html*/ `
											<p class="pops-panel-item-left-main-text">头像（有缓存）</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`,
									});
									let $right = DOMUtils.createElement("div", {
										className: "pops-panel-avatar-img",
										innerHTML: /*html*/ `
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big"
												class="avatar-img" data-size="big">
											`,
									});
									let $style = DOMUtils.createElement("style", {
										innerHTML: /*css*/ `
											.avatar-img {
												width: 30px;
												height: 30px;
												border-radius: 50%;
												overflow: hidden;
											}
										`,
									});
									let $small = $right.querySelector<HTMLImageElement>(
										".avatar-img[data-size='small']"
									)!;
									let $middle = $right.querySelector<HTMLImageElement>(
										".avatar-img[data-size='middle']"
									)!;
									let $big = $right.querySelector<HTMLImageElement>(
										".avatar-img[data-size='big']"
									)!;
									$li.appendChild($left);
									$li.appendChild($right);
									$li.appendChild($style);
									return $li;
								}),
								UIOwn(($li) => {
									let $left = DOMUtils.createElement("div", {
										className: "pops-panel-item-left-text",
										innerHTML: /*html*/ `
											<p class="pops-panel-item-left-main-text">头像</p>
											<p class="pops-panel-item-left-desc-text">小、中、大</p>
											`,
									});
									let $right = DOMUtils.createElement("div", {
										className: "pops-panel-avatar-img",
										innerHTML: /*html*/ `
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=small&ts=${Date.now()}"
												class="avatar-img" data-size="small">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=middle&ts=${Date.now()}"
												class="avatar-img" data-size="middle">
											<img 
												src="/uc_server/avatar.php?uid=${MTUtils.getCurrentUID()}&size=big&ts=${Date.now()}"
												class="avatar-img" data-size="big">
											`,
									});
									$li.appendChild($left);
									$li.appendChild($right);
									return $li;
								}),
								UIButton(
									"修改头像",
									`可以上传gif图片，注意图片最大限制为${Utils.formatByteToSize(
										MTDyncmicAvatar.$data.avatarInfo.maxSize
									)}`,
									"上传",
									void 0,
									false,
									false,
									"primary",
									() => {
										MTDyncmicAvatar.showView();
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
