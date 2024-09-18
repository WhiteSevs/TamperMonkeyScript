import type { PopsPanelDetails } from "./indexType";

export const PopsPanelConfig = (): Required<PopsPanelDetails> => {
	return {
		title: {
			text: "默认标题",
			position: "center",
			html: false,
			style: "",
		},
		content: [
			{
				id: "whitesev-panel-config-1",
				title: "菜单配置1",
				headerTitle: "菜单配置1",
				isDefault: false,
				attributes: [
					{
						"data-test": "test",
						"data-test-2": "test2",
					},
				],
				forms: [
					{
						className: "forms-1",
						text: "区域设置",
						type: "forms",
						attributes: [],
						forms: [
							{
								className: "panel-switch",
								text: "switch",
								type: "switch",
								attributes: [],
								getValue() {
									return true;
								},
								callback(event, value) {
									console.log("按钮开启状态：", value);
								},
							},
							{
								className: "panel-slider",
								text: "slider",
								type: "slider",
								attributes: [],
								getValue() {
									return 50;
								},
								callback(event, value) {
									console.log("滑块当前数值：", value);
								},
								min: 1,
								max: 100,
							},
							{
								className: "panel-button",
								text: "button",
								type: "button",
								attributes: [],
								buttonIcon: "eleme",
								buttonIconIsLoading: true,
								buttonType: "warning",
								buttonText: "warning按钮",
								callback(event) {
									console.log("点击按钮", event);
								},
							},
							{
								className: "panel-button",
								text: "button",
								type: "button",
								attributes: [],
								buttonIcon: "chromeFilled",
								buttonIconIsLoading: true,
								buttonType: "danger",
								buttonText: "danger按钮",
								callback(event) {
									console.log("点击按钮", event);
								},
							},
							{
								className: "panel-button",
								text: "button",
								type: "button",
								attributes: [],
								buttonIcon: "upload",
								buttonIconIsLoading: false,
								buttonType: "info",
								buttonText: "info按钮",
								callback(event) {
									console.log("点击按钮", event);
								},
							},
						],
					},
				],
			},
			{
				id: "whitesev-panel-config-2",
				title: "菜单配置2",
				headerTitle: "菜单配置2",
				isDefault: true,
				attributes: [
					{
						"data-value": "value",
						"data-value-2": "value2",
					},
				],
				forms: [
					{
						className: "panel-input",
						text: "input",
						type: "input",
						attributes: [],
						getValue() {
							return "50";
						},
						callback(event, value) {
							console.log("输入框内容改变：", value);
						},
						placeholder: "请输入内容",
					},
					{
						className: "panel-input-password",
						text: "input-password",
						type: "input",
						attributes: [],
						getValue() {
							return "123456";
						},
						callback(event, value) {
							console.log("密码输入框内容改变：", value);
						},
						isPassword: true,
						placeholder: "请输入密码",
					},
					{
						className: "panel-textarea",
						text: "textarea",
						type: "textarea",
						attributes: [],
						getValue() {
							return "50";
						},
						callback(event, value) {
							console.log("textarea输入框内容改变：", value);
						},
						placeholder: "请输入内容",
					},
					{
						className: "panel-select",
						text: "select",
						type: "select",
						attributes: [],
						getValue() {
							return 50;
						},
						callback(event, isSelectedValue, isSelectedText) {
							console.log(
								`select当前选项：${isSelectedValue}，当前选项文本：${isSelectedText}`
							);
						},
						data: [
							{
								value: "all",
								text: "所有",
							},
							{
								value: "text",
								text: "文本",
							},
							{
								value: "html",
								text: "超文本",
							},
						],
					},
					{
						className: "panel-select-multiple",
						type: "select-multiple",
						text: "select-multiple",

						attributes: [],
						placeholder: "请至少选择一个选项",
						getValue() {
							return ["select-1", "select-2"];
						},
						callback(selectInfo) {
							console.log(`select值改变，多选信息`, selectInfo);
						},
						clickCallBack(event, isSelectedInfo) {
							console.log("点击", event, isSelectedInfo);
						},
						closeIconClickCallBack(event, data) {
							console.log("点击关闭图标的事件", data);
						},
						data: [
							{
								value: "select-1",
								text: "单选1",
							},
							{
								value: "select-2",
								text: "单选2",
							},
							{
								value: "select-3",
								text: "单选3",
							},
							{
								value: "select-4",
								text: "单选4",
							},
							{
								value: "select-5",
								text: "单选5",
							},
						],
					},
					{
						type: "forms",
						text: "deep菜单",
						forms: [
							{
								type: "deepMenu",
								className: "panel-deepMenu",
								text: "deepMenu",
								description: "二级菜单",
								rightText: "自定义配置",
								arrowRightIcon: true,
								clickCallBack(event, formConfig) {
									console.log("进入子配置", event, formConfig);
								},
								forms: [
									{
										className: "forms-1",
										text: "区域设置",
										type: "forms",
										attributes: [],
										forms: [
											{
												className: "panel-switch",
												text: "switch",
												type: "switch",
												attributes: [],
												getValue() {
													return true;
												},
												callback(event, value) {
													console.log("按钮开启状态：", value);
												},
											},
											{
												className: "panel-slider",
												text: "slider",
												type: "slider",
												attributes: [],
												getValue() {
													return 50;
												},
												callback(event, value) {
													console.log("滑块当前数值：", value);
												},
												min: 1,
												max: 100,
											},
											{
												className: "panel-button",
												text: "button",
												type: "button",
												attributes: [],
												buttonIcon: "eleme",
												buttonIconIsLoading: true,
												buttonType: "warning",
												buttonText: "warning按钮",
												callback(event) {
													console.log("点击按钮", event);
												},
											},
											{
												className: "panel-button",
												text: "button",
												type: "button",
												attributes: [],
												buttonIcon: "chromeFilled",
												buttonIconIsLoading: true,
												buttonType: "danger",
												buttonText: "danger按钮",
												callback(event) {
													console.log("点击按钮", event);
												},
											},
											{
												className: "panel-button",
												text: "button",
												type: "button",
												attributes: [],
												buttonIcon: "upload",
												buttonIconIsLoading: false,
												buttonType: "info",
												buttonText: "info按钮",
												callback(event) {
													console.log("点击按钮", event);
												},
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
		btn: {
			close: {
				enable: true,
				callback(event) {
					event.close();
				},
			},
		},
		mask: {
			enable: false,
			clickEvent: {
				toClose: false,
				toHide: false,
			},
			clickCallBack: void 0,
		},
		class: "",
		mobileClassName: "pops-panel-is-mobile",
		isMobile: false,
		only: false,
		width: "700px",
		height: "500px",
		position: "center",
		animation: "pops-anim-fadein-zoom",
		zIndex: 10000,
		drag: false,
		dragLimit: true,
		dragExtraDistance: 3,
		dragMoveCallBack() {},
		dragEndCallBack() {},
		forbiddenScroll: false,
		style: null,
		beforeAppendToPageCallBack() {},
	};
};
