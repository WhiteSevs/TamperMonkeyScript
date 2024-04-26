import { GM_addStyle, unsafeWindow } from "$";
import { DOMUtils, Qmsg, log, pops, utils } from "@/api/env";
import { DouYinElement } from "../Element/element";
import { PopsPanel } from "@/ui";
import { DouYinVideoShield } from "./shield";
import { DouYinVideoHideElement } from "./hideElement";

const DouYinVideo = {
    init() {
        DouYinVideoHideElement.init();


        PopsPanel.execMenu("shieldVideo", () => {
            DouYinVideoShield.init();
        });
        PopsPanel.execMenu("changeCommentToBottom", () => {
            DouYinVideo.changeCommentToBottom();
        });
        PopsPanel.execMenu("fullScreen", () => {
            this.fullScreen();
        });
        PopsPanel.execMenu("parseVideo", () => {
            DouYinVideo.parseVideo();
        });
        PopsPanel.execMenu("autoEnterElementFullScreen", () => {
            this.autoEnterElementFullScreen();
        });
        DOMUtils.ready(() => {
            DouYinVideo.chooseVideoDefinition(PopsPanel.getValue("chooseVideoDefinition"));
            PopsPanel.execMenu("mobileMode", () => {
                this.mobileMode();
            });
        });
    },
    /**
     * 全屏
     */
    fullScreen() {
        DouYinElement.addShieldStyle(
            /* 右侧工具栏 */
            ".slider-video .positionBox",
            /* 中间底部的视频信息（描述、作者、话题等） */
            "#video-info-wrap",
            /* 中间底部的视频控制工具栏 */
            "xg-controls.xgplayer-controls"
        );
        DouYinVideoHideElement.shieldSearchFloatingBar();
        GM_addStyle(`
        /* 视频全屏 */
        xg-video-container.xg-video-container{
            bottom: 0px !important;
        }
        `);
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
        utils
            .waitNode(
                'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon:has([d="M9.75 8.5a2 2 0 00-2 2v11a2 2 0 002 2h12.5a2 2 0 002-2v-11a2 2 0 00-2-2H9.75zM15 11.25h-3.75a1 1 0 00-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 01-1 1z"])'
            )
            .then((element) => {
                element.click();
            });
    },
    /**
     * 评论区修改为底部
     */
    changeCommentToBottom() {
        DouYinElement.addShieldStyle(
            '#sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard'
        );
        GM_addStyle(`
        #sliderVideo[data-e2e] .playerContainer,
        #slideMode[data-e2e] .playerContainer{
            width: 100% !important;
        }
        #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
        #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard){
            width: 100%;
            height: 75%;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.9);
            transition: height .15s linear !important;
            position: absolute;
        }
        `);
    },
    /**
     * 选择视频清晰度
     * @param [mode=0] 视频播放模式
     */
    chooseVideoDefinition(mode = 0) {
        let Definition_Key = "MANUAL_SWITCH";
        let definition = [
            {
                clarityReal: [
                    "normal_1080_0",
                    "normal_720_0",
                    "low_720_0",
                    "normal_540_0",
                    "low_540_0",
                    "adapt_low_540_0",
                    "lower_540_0",
                ],
                done: 1,
                gearClarity: "5",
                gearName: "高清",
                gearType: 1,
                qualityType: 1,
            },
            {
                clarityReal: [
                    "normal_1080_0",
                    "low_540_0",
                    "low_720_0",
                    "normal_720_0",
                    "normal_540_0",
                    "adapt_low_540_0",
                    "lower_540_0",
                    "adapt_lowest_720_1",
                    "adapt_540_1",
                    "adapt_lower_540_1",
                ],
                done: 1,
                gearClarity: "4",
                gearName: "清晰",
                gearType: 2,
                qualityType: 15,
            },
            {
                clarityReal: [
                    "normal_1080_0",
                    "low_540_0",
                    "low_720_0",
                    "normal_720_0",
                    "normal_540_0",
                    "adapt_low_540_0",
                    "lower_540_0",
                    "adapt_lowest_720_1",
                    "adapt_540_1",
                    "adapt_lower_540_1",
                ],
                done: 1,
                gearClarity: "3",
                gearName: "流畅",
                gearType: 3,
                qualityType: 28,
            },
            {
                clarityReal: [
                    "normal_1080_0",
                    "low_540_0",
                    "low_720_0",
                    "normal_720_0",
                    "normal_540_0",
                    "adapt_low_540_0",
                    "lower_540_0",
                    "adapt_lowest_720_1",
                    "adapt_540_1",
                    "adapt_lower_540_1",
                ],
                done: 1,
                gearClarity: "2",
                gearName: "极速",
                gearType: 4,
                qualityType: 21,
            },
            {
                clarityReal: [
                    "normal_1080_0",
                    "low_540_0",
                    "low_720_0",
                    "normal_720_0",
                    "normal_540_0",
                    "adapt_low_540_0",
                    "lower_540_0",
                    "adapt_lowest_720_1",
                    "adapt_540_1",
                    "adapt_lower_540_1",
                ],
                done: 1,
                gearClarity: "0",
                gearName: "智能",
                gearType: 0,
            },
        ];
        let choose = definition.find((item) => item.gearType === mode);
        function setStorage(value: any) {
            unsafeWindow.sessionStorage.setItem(Definition_Key, value);
        }
        if (choose) {
            let count = 0;
            let chooseStr = JSON.stringify(choose);
            let interval = setInterval(() => {
                setStorage(chooseStr);
                count++;
                if (count >= 20) {
                    clearInterval(interval);
                }
            }, 500);
            log.success("设置当前视频的清晰度: " + mode);
        } else {
            log.error("该清晰度不存在: " + mode);
        }
    },
    /**
     * 让下载按钮变成解析视频
     */
    parseVideo() {
        function showParseInfoDialog(srcList: string[]) {
            let contentHTML = "";
            srcList.forEach((url) => {
                contentHTML += `
          <div class="douyin-video-link-item"><a href="${url}" target="_blank">${url}</a></div>
            `;
            });
            contentHTML = `<div class="douyin-video-link-container">${contentHTML}</div>`;
            pops.alert({
                title: {
                    text: "视频解析",
                    position: "center",
                },
                content: {
                    text: contentHTML,
                    html: true,
                },
                mask: {
                    enable: true,
                    clickEvent: {
                        toClose: true,
                    },
                },
                width: "50dvw",
                height: "50dvh",
                drag: true,
                dragLimit: true,
                style: `
                .douyin-video-link-container{

                }
                .douyin-video-link-item{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 10px;
                }
                .douyin-video-link-item a{

                }
                `
            });
        }
        DOMUtils.on(
            document,
            "click",
            'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
            function (event) {
                let clickElement = event.target as HTMLDivElement;
                let rectFiber = utils.getReactObj(
                    clickElement.parentElement as HTMLElement
                )?.reactFiber;
                if (!rectFiber) {
                    Qmsg.error("获取rectFiber属性失败");
                    return;
                }
                try {
                    let playTotalAddr: { src: string }[] = [];
                    let playAddr = rectFiber.return.memoizedProps.awemeInfo.video.playAddr;
                    let playAddrH265 = rectFiber.return.memoizedProps.awemeInfo.video.playAddrH265;
                    if (playAddr != null && Array.isArray(playAddr)) {
                        playTotalAddr = playTotalAddr.concat(playAddr);
                    }
                    if (playAddrH265 != null && Array.isArray(playAddrH265)) {
                        playTotalAddr = playTotalAddr.concat(playAddrH265);
                    }
                    if (!playTotalAddr.length) {
                        Qmsg.error("未获取到视频的有效链接信息");
                        return;
                    }
                    let videoInfo = playTotalAddr.map((item) => item.src);
                    showParseInfoDialog(videoInfo);
                } catch (error) {
                    Qmsg.error("解析视频失败");
                }
            },
            {
                capture: true,
            }
        );
    },
    /**
     * 手机模式
     */
    mobileMode() {
        log.success("启用手机模式");
        let meta = DOMUtils.createElement(
            "meta",
            {},
            {
                name: "viewport",
                content:
                    "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
            }
        );
        document
            .querySelectorAll("meta[name='viewport']")
            .forEach((ele) => ele.remove());
        document.head.appendChild(meta);
        /* 屏蔽底部视频工具栏右侧的?帮助反馈按钮 */
        DouYinElement.addShieldStyle(
            "img#douyin-temp-sidebar"
        )
        GM_addStyle(`
      /* 右侧工具栏放大 */
      .basePlayerContainer .positionBox{
        scale: 1.12;
        bottom: 80px !important;
        padding-right: 5px !important;
      }
      /* 图标再放大 */
      .basePlayerContainer .positionBox svg{
        scale: 1.12;
      }
      /* 重置关注按钮的scale */
      .basePlayerContainer .positionBox .dy-tip-container div[data-e2e="feed-follow-icon"] svg{
        scale: unset;
      }
      `)
    },
}

export {
    DouYinVideo
}