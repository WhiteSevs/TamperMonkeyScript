import { DOMUtils, httpx, log, pops, utils } from "@/env";
import { MTUtils } from "@/utils/MTUtils";
import Qmsg from "qmsg";

/**
 * + https://greasyfork.org/zh-CN/scripts/11969-discuz论坛头像上传助手
 */
export const MTDyncmicAvatar = {
	$upload: {
		small: false,
		middle: false,
		big: false,
	},
	$data: {
		/**
		 * 图片文件最大大小
		 */
		avatarInfo: {
			maxSize: 2097152,
			small: {
				width: 48,
				height: 48,
			},
			middle: {
				width: 120,
				height: 120,
			},
			big: {
				width: 200,
				height: 250,
			},
		},
	},
	$el: {
		$smallUpload: null as any as HTMLInputElement,
		$middleUpload: null as any as HTMLInputElement,
		$bigUpload: null as any as HTMLInputElement,
		$smallStatus: null as any as HTMLElement,
		$middleStatus: null as any as HTMLElement,
		$bigStatus: null as any as HTMLElement,
	},
	$avatar: {
		get small() {
			return MTDyncmicAvatar.$el.$smallUpload.files![0];
		},
		get middle() {
			return MTDyncmicAvatar.$el.$middleUpload.files![0];
		},
		get big() {
			return MTDyncmicAvatar.$el.$bigUpload.files![0];
		},
	},
	init() {
		this.showView();
	},
	showView() {
		const that = this;
		let $confirm = pops.confirm({
			title: {
				text: "修改头像",
				position: "center",
			},
			content: {
				text: /*html*/ `
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大尺寸：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大尺寸：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大尺寸：200×250）</p>
                    <p class="avatar-upload-status" data-type="big">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="big" data-maxwidth="200" data-maxheight="250" accept="image/*">
                </div>
                `,
				html: true,
			},
			btn: {
				ok: {
					text: "上传",
					callback: async () => {
						if (!that.$upload.small) {
							Qmsg.error("请上传小头像");
							return;
						}
						if (!that.$upload.middle) {
							Qmsg.error("请上传中头像");
							return;
						}
						if (!that.$upload.big) {
							Qmsg.error("请上传大头像");
							return;
						}
						let $loading = Qmsg.loading("正在处理数据中...");
						try {
							// 获取上传头像的地址
							let uploadUrl = await this.getUploadUrl();
							if (uploadUrl == null) {
								return;
							}
							// 获取当前登录用户的formhash
							let formhash = await MTUtils.getFormHash();
							if (formhash == null) {
								Qmsg.error("获取formhash失败");
								return;
							}
							let avatarInfo = {
								big: {
									base64: await utils.parseFileToBase64(this.$avatar.big),
								},
								middle: {
									base64: await utils.parseFileToBase64(this.$avatar.middle),
								},
								small: {
									base64: await utils.parseFileToBase64(this.$avatar.small),
								},
							};
							Object.keys(avatarInfo).forEach((keyName) => {
								let value =
									avatarInfo[keyName as any as keyof typeof avatarInfo];
								value.base64 = value.base64.substring(
									value.base64.indexOf(",") + 1
								);
							});
							let formData = new FormData();
							formData.append("Filedata", this.$avatar.big || "");
							formData.append("confirm", "确定");
							// 大
							formData.append("avatar1", avatarInfo.big.base64);
							// 中
							formData.append("avatar2", avatarInfo.middle.base64);
							// 小
							formData.append("avatar3", avatarInfo.small.base64);
							formData.append("formhash", formhash);
							log.info(`头像的base64字符串`, avatarInfo);
							let response = await httpx.post(uploadUrl, {
								data: formData,
								processData: false,
								headers: {
									Accept:
										"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
									"User-Agent": utils.getRandomPCUA(),
									Host: window.location.hostname,
									Origin: window.location.origin,
									Referer: `${window.location.origin}/home.php?mod=spacecp&ac=avatar`,
								},
							});
							if (!response.status) {
								return;
							}
							if (
								response.data.responseText.indexOf(
									"window.parent.postMessage('success','*')"
								) != -1
							) {
								$confirm.close();
								Qmsg.success("上传成功");
							} else {
								log.error("上传失败", response);
								Qmsg.error(response.data.responseText, {
									timeout: 6000,
									isHTML: false,
									html: false,
								});
							}
						} catch (error) {
							log.error(error);
						} finally {
							$loading.close();
						}
					},
				},
			},
			width: window.innerWidth > 500 ? "500px" : "88vw",
			height: window.innerHeight > 500 ? "500px" : "80vh",
			style: /*css*/ `
            .avatar-container{
                display: flex;
                width: -webkit-fill-available;
                width: -moz-available;
                margin: 6px 10px;
                flex-direction: column;
            }
            .avatar-tip{
                float: left;
                font-weight: bold;
            }
            .avatar-upload-status {
                padding: 0px;
                padding-left: 10px;
                font-weight: bold;
                width: -webkit-fill-available;
                text-align: left;
                font-size: small;
            }
            .avatar-upload-status[data-success="false"]{
                color: red;
            }
            .avatar-upload-status[data-success="true"]{
                color: green;
            }
            .avatar-upload {
                margin: 20px 0px;
            }
            `,
		});

		this.$el.$smallUpload =
			$confirm.$shadowRoot.querySelector<HTMLInputElement>(
				".avatar-upload[data-type='small']"
			)!;
		this.$el.$middleUpload =
			$confirm.$shadowRoot.querySelector<HTMLInputElement>(
				".avatar-upload[data-type='middle']"
			)!;
		this.$el.$bigUpload = $confirm.$shadowRoot.querySelector<HTMLInputElement>(
			".avatar-upload[data-type='big']"
		)!;

		this.$el.$smallStatus = $confirm.$shadowRoot.querySelector<HTMLElement>(
			".avatar-upload-status[data-type='small']"
		)!;
		this.$el.$middleStatus = $confirm.$shadowRoot.querySelector<HTMLElement>(
			".avatar-upload-status[data-type='middle']"
		)!;
		this.$el.$bigStatus = $confirm.$shadowRoot.querySelector<HTMLElement>(
			".avatar-upload-status[data-type='big']"
		)!;

		this.setUploadChangeEvent(
			this.$el.$smallUpload,
			this.$el.$smallStatus,
			this.$data.avatarInfo.small,
			() => {
				this.$upload.small = true;
			}
		);
		this.setUploadChangeEvent(
			this.$el.$middleUpload,
			this.$el.$middleStatus,
			this.$data.avatarInfo.middle,
			() => {
				this.$upload.middle = true;
			}
		);
		this.setUploadChangeEvent(
			this.$el.$bigUpload,
			this.$el.$bigStatus,
			this.$data.avatarInfo.big,
			() => {
				this.$upload.big = true;
			}
		);
	},
	/**
	 * 设置文件改变事件
	 */
	setUploadChangeEvent(
		$file: HTMLInputElement,
		$status: HTMLElement,
		sizeInfo: {
			width: number;
			height: number;
		},
		successCallBack: Function
	) {
		DOMUtils.on<InputEvent>($file, "change", (event) => {
			if (!$file.files?.length) {
				return;
			}
			DOMUtils.text($status, "🤡获取文件信息中...");
			$status.removeAttribute("data-success");
			let uploadImageFile = $file.files![0];
			let fileSize = uploadImageFile.size;
			let $image = new Image();
			let reader = new FileReader();
			reader.readAsDataURL(uploadImageFile);
			reader.onload = function (response) {
				$image.src = response!.target!.result as string;
				$image.onload = function () {
					if (
						$image.width > sizeInfo.width ||
						$image.height > sizeInfo.height
					) {
						$file.value = "";
						$status.setAttribute("data-success", "false");
						DOMUtils.text(
							$status,
							`🤡校验失败 ==> 图片尺寸不符合，宽：${$image.width} 高：${$image.height}`
						);
						return;
					}
					if (fileSize > MTDyncmicAvatar.$data.avatarInfo.maxSize) {
						$file.value = "";
						$status.setAttribute("data-success", "false");
						DOMUtils.text(
							$status,
							`🤡校验失败 ==> 图片大小不符合：${fileSize}byte，限制最大：${MTDyncmicAvatar.$data.avatarInfo.maxSize}byte`
						);
						return;
					}
					$status.setAttribute("data-success", "true");
					DOMUtils.text(
						$status,
						`🤣 通过 宽:${$image.width} 高:${$image.height} 大小(byte):${fileSize}`
					);
					successCallBack();
				};
			};
		});
	},
	/**
	 * 获取上传地址
	 */
	async getUploadUrl() {
		let response = await httpx.get("/home.php?mod=spacecp&ac=avatar", {
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
		});
		if (!response.status) {
			return;
		}
		if (utils.isNull(response.data.responseText)) {
			Qmsg.error("动态头像：获取上传地址的内容失败");
			return;
		}
		let dataMatch = response.data.responseText.match(
			/var[\s]*data[\s]*=[\s]*"(.+?)"/
		);
		if (dataMatch == null || dataMatch.length != 2) {
			Qmsg.error("动态头像：获取变量data失败");
			return;
		}
		let data = dataMatch[dataMatch.length - 1];
		let data_split = data.split(",");
		let srcIndex = data_split.indexOf("stl_src");
		if (srcIndex === -1) {
			srcIndex = data_split.indexOf("src");
		}
		if (srcIndex === -1) {
			Qmsg.error("动态头像：获取上传地址失败");
			return;
		}
		let uploadUrl = data_split[srcIndex + 1];
		let uploadUrlInst = new URL(uploadUrl);
		uploadUrlInst.pathname = uploadUrlInst.pathname.replace(
			"/images/camera.swf",
			"/index.php"
		);
		uploadUrlInst.searchParams.delete("inajax");
		uploadUrlInst.searchParams.set("m", "user");
		uploadUrlInst.searchParams.set("a", "rectavatar");
		uploadUrlInst.searchParams.set("base64", "yes");
		uploadUrl = uploadUrlInst.toString();
		log.info(`上传地址：` + uploadUrl);
		return uploadUrl;
	},
};
