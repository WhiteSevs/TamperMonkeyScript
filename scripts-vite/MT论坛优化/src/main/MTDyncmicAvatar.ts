import { DOMUtils, httpx, log, pops, utils } from "@/env";
import { MTUtils } from "@/utils/Utils";
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
	init() {
		this.showView();
	},
	showView() {
		let $confirm = pops.confirm({
			title: {
				text: "修改头像",
				position: "center",
			},
			content: {
				text: /*html*/ `
                <div class="avatar-container">
                    <p class="avatar-tip">1. 小头像（图片宽高限制最大：48×48）</p>
                    <p class="avatar-upload-status" data-type="small">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="small" data-maxwidth="48" data-maxheight="48" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">2. 中头像（图片宽高限制最大：120×120）</p>
                    <p class="avatar-upload-status" data-type="middle">🤡请先上传图片</p>
                    <input type="file" class="avatar-upload" data-type="middle" data-maxwidth="120" data-maxheight="120" accept="image/*">
                </div>
                <div class="avatar-container">
                    <p class="avatar-tip">3. 大头像（图片宽高限制最大：200×250）</p>
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
						if (
							!MTDyncmicAvatar.$upload.small ||
							!MTDyncmicAvatar.$upload.middle ||
							!MTDyncmicAvatar.$upload.big
						) {
							Qmsg.error("校验失败");
							return;
						}
						let $loading = Qmsg.loading("正在处理数据中...");

						let smallAvatarBase64 = await utils.parseFileToBase64(
							this.$el.$smallUpload.files![0]
						);
						let middleAvatarBase64 = await utils.parseFileToBase64(
							this.$el.$middleUpload.files![0]
						);
						let bigAvatarBase64 = await utils.parseFileToBase64(
							this.$el.$bigUpload.files![0]
						);
						let avatarBase64List = [
							bigAvatarBase64,
							middleAvatarBase64,
							smallAvatarBase64,
						];
						/* 拿到3个头像的Base64字符串 */
						const dataArr = avatarBase64List.map((str) =>
							str.substring(str.indexOf(",") + 1)
						);
						let uploadUrl = await this.getUploadUrl();
						$loading.close();
						if (uploadUrl == null) {
							return;
						}
						let formhash = MTUtils.getCurrentFormHash();
						if (formhash == null) {
							Qmsg.error("获取formhash失败");
							return;
						}
						let formData = new FormData();
						formData.append("Filedata", "");
						formData.append("avatar1", dataArr[0]);
						formData.append("avatar2", dataArr[1]);
						formData.append("avatar3", dataArr[2]);
						formData.append("formhash", formhash);

						let response = await httpx.post(uploadUrl, {
							data: formData,
							headers: {
								Referer: `${window.location.origin}/home.php?mod=spacecp&ac=avatar`,
								Accept:
									"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
								"User-Agent": utils.getRandomPCUA(),
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
							Qmsg.success("上传成功");
							$confirm.close();
							setTimeout(() => {
								window.location.reload();
							}, 1500);
						} else {
							log.error(response);
							Qmsg.error(response.data.responseText);
						}
					},
				},
			},
			mask: {
				enable: true,
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
			Qmsg.error("获取PC数据失败");
			return;
		}
		let dataMatch = response.data.responseText.match(
			/var[\s]*data[\s]*=[\s]*"(.+?)"/
		);
		if (dataMatch == null || dataMatch.length != 2) {
			Qmsg.error("获取变量-data失败");
			return;
		}
		let data = dataMatch[dataMatch.length - 1];
		let data_split = data.split(",");
		let uploadUrl = data_split[data_split.indexOf("src") + 1].replace(
			"images/camera.swf?inajax=1",
			"index.php?m=user&a=rectavatar&base64=yes"
		);

		return uploadUrl;
	},
};
