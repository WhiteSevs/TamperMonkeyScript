import { Qmsg, log, pops, QRCodeJS, utils } from "@/env";
import { BilibiliLogin } from "./BilibiliLogin";
import { GM_getValue, GM_setValue } from "ViteGM";

export const BilibiliQrCodeLogin = {
	async init() {
		Qmsg.info("正在申请二维码...");
		let qrcodeInfo = await this.getQRCodeInfo();
		if (!qrcodeInfo) {
			return;
		}
		this.confirmScanQrcode(qrcodeInfo);
	},
	getQRCodeInfo: async function () {
		log.info("正在申请二维码...");
		let qrcodeInfo = await BilibiliLogin.getQrCodeInfo();
		log.info(["获取到二维码信息", qrcodeInfo]);
		return qrcodeInfo;
	},
	/**
	 * 确认扫码
	 * @param qrcodeInfo
	 */
	async confirmScanQrcode(qrcodeInfo: { url: string; auth_code: string }) {
		let $alert = pops.alert({
			title: {
				text: "请扫描二维码登录",
				position: "center",
				html: false,
				style: "",
			},
			content: {
				text: `<div id="bili-qrcode-canvas"></div>`,
				html: true,
			},
			btn: {
				ok: {
					enable: false,
				},
				close: {
					enable: true,
					callback(event) {
						isUserCloseScanDialog = true;
						event.close();
					},
				},
			},
			mask: {
				enable: true,
				clickEvent: {
					toClose: false,
					toHide: false,
				},
			},
			only: true,
			width: "310px",
			height: "365px",
			drag: true,
			dragLimit: true,
			style: `
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `,
		});
		let $biliQrcodeCanvas = $alert.$shadowRoot.querySelector<HTMLCanvasElement>(
			"#bili-qrcode-canvas"
		)!;
		let qrcode = new QRCodeJS($biliQrcodeCanvas, {
			text: qrcodeInfo.url,
			width: 300,
			height: 300,
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: QRCodeJS.CorrectLevel.H,
		});
		/** 是否成功登录 */
		let isSuccessLogin = false;
		/** 用户是否取消登录弹窗 */
		let isUserCloseScanDialog = false;
		while (true) {
			if (isUserCloseScanDialog) {
				log.error("用户关闭扫码登录弹窗、取消扫码登录");
				break;
			}
			log.info("正在等待扫码登录...");
			let pollInfo = await BilibiliLogin.poll(qrcodeInfo.auth_code);
			if (pollInfo?.success) {
				this.setAccessTokenInfo({
					access_token: pollInfo.accessKey,
					expireAt: pollInfo.accessKeyExpireAt as any,
				});
				isSuccessLogin = true;
				log.info(["扫码登录成功", pollInfo]);
				log.success("扫码登录成功");
				Qmsg.success("扫码登录成功");
				break;
			} else {
				if (pollInfo?.action === "refresh") {
					// 刷新二维码
					log.info("刷新二维码");
					Qmsg.info("刷新二维码");
					let qrcodeInfo = await this.getQRCodeInfo();
					if (qrcodeInfo) {
						qrcode.clear();
						qrcode.makeCode(qrcodeInfo.url);
					}
				} else if (pollInfo.action === "wait") {
					if (pollInfo.message === "二维码已扫码未确认") {
						// 等待确认
						log.info("已扫码，等待确认...");
						pops.loading({
							parent: $biliQrcodeCanvas,
							content: {
								text: "已扫码，等待确认",
							},
							mask: {
								enable: true,
							},
						});
					} else {
						// 尚未扫码
					}
				} else {
					// 失败返回
					isSuccessLogin = false;
					log.error(pollInfo.message);
					Qmsg.error(pollInfo.message);
					break;
				}
			}
			await utils.sleep(1500);
		}
		$alert.close();
	},
	/**
	 * 设置获取到的access_token和过期时间
	 * @param data
	 */
	setAccessTokenInfo(data: { access_token: string; expireAt: number }) {
		GM_setValue("bili-accessTokenInfo", data);
	},
	/**
	 * 获取access_token和过期时间
	 * 自动根据过期时间处理数据
	 * @returns
	 */
	getAccessTokenInfo() {
		let data = GM_getValue("bili-accessTokenInfo") as null | {
			access_token: string;
			expireAt: number;
		};
		if (data && data.expireAt > Date.now()) {
			return data;
		} else {
			return null;
		}
	},
};
