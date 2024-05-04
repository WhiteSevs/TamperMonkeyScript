import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/ui";
import { BaiduGraphApi } from "./graphApi";
import GraphShieldCSS from "./shield.css?raw";
import { GM_addStyle } from "ViteGM";


const BaiduGraph = {
    init() {
        GM_addStyle(GraphShieldCSS);
        log.info("插入CSS规则");
        this.addNewUploadImageButton();
        PopsPanel.execMenu("baidu-graph-repairHomeRecognitionPicture", () => {
            this.repairHomeRecognitionPicture();
        })
        PopsPanel.execMenu("baidu-graph-baidu-graph-repairSearchButton", () => {
            this.repairSearchButton();
        })
        PopsPanel.execMenu("baidu-graph-baidu-graph-repairSearchNoResult", () => {
            this.repairSearchNoResult();
        })
        PopsPanel.execMenu("baidu-graph-baidu-graph-repairRetakeButton", () => {
            this.repairRetakeButton();
        })
    },
    /**
     * 添加上传图片按钮（不可见的）
     */
    addNewUploadImageButton() {
        DOMUtils.ready(function () {
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
        });
    },
    /**
     *重构主页的识图一下
     */
    repairHomeRecognitionPicture() {
        utils.waitNode("#app section.vf-home-booth div.vf-w-button.vf-home-booth-camera").then((element) => {
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
                (document.querySelector("input#whitesev-upload-image") as HTMLInputElement).click();
            });

            DOMUtils.after(element, uploadImageDivDOM);
        });
    },
    /**
     * 重构主页的往下滑动右下角出现的搜索图标按钮
     */
    repairSearchButton() {
        utils.waitNode(".vf-home.view-page").then((element) => {
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
                (document.querySelector("input#whitesev-upload-image") as HTMLInputElement).click();
            });
            DOMUtils.append(element, divHomeCamera);
            utils.watchObject(
                (element as any).__vue__,
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
        utils.waitNode("#app .graph-noresult-text1").then(() => {
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
            .waitNode("#viewport .graph-imagecut-banner-ctn")
            .then((element) => {
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
                    (document.querySelector("input#whitesev-upload-image") as HTMLInputElement).click();
                    DOMUtils.trigger(
                        (document.querySelector("input#whitesev-upload-image") as HTMLInputElement),
                        "click"
                    );
                });
                setTimeout(() => {
                    DOMUtils.append(element, retakeDivDOM);
                }, 2000);
            });
    },
};

export {
    BaiduGraph
}