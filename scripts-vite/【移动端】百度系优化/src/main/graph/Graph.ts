import { $, DOMUtils, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { BaiduGraphApi } from "./GraphApi";
import GraphShieldCSS from "./shield.css?raw";

const BaiduGraph = {
	init() {
		addStyle(GraphShieldCSS);
		log.info("插入CSS规则");
		Panel.execMenu("baidu-graph-repairHomeRecognitionPicture", () => {
			this.repairHomeRecognitionPicture();
		});
		Panel.execMenu("baidu-graph-baidu-graph-repairSearchButton", () => {
			this.repairSearchButton();
		});
		Panel.execMenu("baidu-graph-baidu-graph-repairSearchNoResult", () => {
			this.repairSearchNoResult();
		});
		Panel.execMenu("baidu-graph-baidu-graph-repairRetakeButton", () => {
			this.repairRetakeButton();
		});

		DOMUtils.ready(() => {
			this.addNewUploadImageButton();
		});
	},
	/**
	 * 添加上传图片按钮（不可见的）
	 */
	addNewUploadImageButton() {
		log.info("添加上传图片按钮（不可见的）");
		let uploadImageInput = DOMUtils.createElement(
			"input",
			{
				id: "whitesev-upload-image",
			},
			{
				type: "file",
				accept: "image/*",
				style: "display: none",
			}
		);
		DOMUtils.on(uploadImageInput, "change", BaiduGraphApi.uploadImage);
		DOMUtils.append(document.body, uploadImageInput);
	},
	/**
	 *重构主页的识图一下
	 */
	repairHomeRecognitionPicture() {
		utils
			.waitNode<HTMLDivElement>(
				"#app section.vf-home-booth div.vf-w-button.vf-home-booth-camera"
			)
			.then(($vfHomeBoothCamera) => {
				log.success("重构主页的识图一下");
				let uploadImageDivDOM = DOMUtils.createElement("div", {
					className: "vf-home-booth-camera",
				});
				DOMUtils.css(uploadImageDivDOM, {
					position: "absolute",
					bottom: "-.42rem",
					left: "50%",
					width: "2.2rem",
					height: ".74rem",
					"background-image":
						"url(https://imgn0.bdstatic.com/image/mobile/n/static/wiseik/static/img/camera_5e72a3a.png)",
					"background-repeat": "no-repeat",
					"background-size": "cover",
					"background-position": "top",
					"-webkit-transform": "translateX(-50%)",
					"-ms-transform": "translateX(-50%)",
					transform: "translateX(-50%)",
					"-webkit-tap-highlight-color": "transparent",
				});
				DOMUtils.on(uploadImageDivDOM, "click", function () {
					($("input#whitesev-upload-image") as HTMLInputElement).click();
				});

				DOMUtils.after($vfHomeBoothCamera, uploadImageDivDOM);
			});
	},
	/**
	 * 重构主页的往下滑动右下角出现的搜索图标按钮
	 */
	repairSearchButton() {
		utils.waitNode<HTMLDivElement>(".vf-home.view-page").then(($viewPage) => {
			log.success("重构主页的往下滑动右下角出现的搜索图标按钮");
			let divHomeCamera = DOMUtils.createElement("div", {
				className: "whitesev-vf-home-camera",
			});
			DOMUtils.css(divHomeCamera, {
				display: "none",
				position: "fixed",
				right: ".1rem",
				bottom: ".48rem",
				height: ".74rem",
				width: ".74rem",
				"border-radius": "3px",
				background:
					"url(https://imgn0.bdstatic.com/image/mobile/n/static/wiseik/static/img/cameraBtn_c19ac1e.png) no-repeat 50%/100% auto",
				"text-align": "center",
			});
			DOMUtils.on(divHomeCamera, "click", function () {
				($("input#whitesev-upload-image") as HTMLInputElement).click();
			});
			DOMUtils.append($viewPage, divHomeCamera);
			utils.watchObject(
				($viewPage as any).__vue__,
				"showBottomCamera",
				() => {
					return false;
				},
				(_value_) => {
					if (_value_) {
						DOMUtils.show(divHomeCamera);
					} else {
						DOMUtils.hide(divHomeCamera);
					}
				}
			);
		});
	},
	/**
	 * 如果出现识图没结果，重新识别，可能是因为后面参数多了tpl_from=pc的问题
	 */
	repairSearchNoResult() {
		utils.waitNode<HTMLElement>("#app .graph-noresult-text1").then(() => {
			log.info("判断网页参数是否包含tpl_from=pc");
			if (window.location.search.endsWith("&tpl_from=pc")) {
				window.location.href = window.location.href.replace(
					/&tpl_from=pc$/gi,
					""
				);
			}
		});
	},
	/**
	 * 在已搜索出相关结果的界面中的重构【重拍】按钮
	 */
	repairRetakeButton() {
		utils
			.waitNode<HTMLDivElement>("#viewport .graph-imagecut-banner-ctn")
			.then(($imageCutBanner) => {
				log.info("在已搜索出相关结果的界面中的重构【重拍】按钮");
				let retakeDivDOM = DOMUtils.createElement("div", {
					className: "retake-image",
					textContent: "重拍",
				});
				DOMUtils.css(retakeDivDOM, {
					position: "absolute",
					top: "50%",
					right: "0",
					padding: "0 .17rem",
					"font-size": "16px",
					"line-height": "60px",
					color: "#000",
					"-webkit-transform": "translateY(-50%)",
					transform: "translateY(-50%)",
				});
				DOMUtils.on(retakeDivDOM, "click", function (event) {
					utils.preventEvent(event);
					($("input#whitesev-upload-image") as HTMLInputElement).click();
					DOMUtils.trigger(
						$("input#whitesev-upload-image") as HTMLInputElement,
						"click"
					);
				});
				setTimeout(() => {
					DOMUtils.append($imageCutBanner, retakeDivDOM);
				}, 2000);
			});
	},
};

export { BaiduGraph };
