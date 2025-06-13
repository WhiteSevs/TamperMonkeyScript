import { httpx, utils } from "@/env";
import Qmsg from "qmsg";
import { NetDiskPops } from "../pops/NetDiskPops";
import { PanelUISize } from "@components/setting/panel-ui-size";

type MetaInfo = {
	type: string;
	file_type: string;
	name: string;
	size: number;
	count: number;
	error: string | null;
	screenshots:
		| {
				time: number;
				screenshot: string;
		  }[]
		| null;
};
export const MetaDataParser = {
	/**
	 * 解析文件链接的元数据
	 */
	async parseFileMetaInfo(url: string) {
		const response = await httpx.get(
			"https://whatslink.info/api/v1/link?url=" + url,
			{
				headers: {
					Referer: "https://whatslink.info/",
				},
				allowInterceptConfig: false,
			}
		);
		let data = utils.toJSON<MetaInfo>(response.data.responseText);
		if (!response.status) {
			if (typeof data.error === "string" && data.error.trim() !== "") {
				Qmsg.error(data.error);
				return;
			}
			Qmsg.error("请求失败");
			return;
		}
		return data;
	},
	/**
	 * 显示元数据弹窗
	 */
	showFileMetaInfoDialog(metaInfo: MetaInfo) {
		NetDiskPops.alert({
			title: {
				text: "元数据信息",
				position: "center",
			},
			content: {
				text: /*html*/ `
						<div class="wrapper">
							<div class="title">Summary</div>
							<div class="content">
								<div>Resource Name: ${metaInfo.name}</div>
								<div>Number of Files: ${metaInfo.count}</div>
								<div>Total File Size: ${utils.formatByteToSize(metaInfo.size)}</div>
								<div>File Type: ${metaInfo.type.toLowerCase()}</div>
							</div>
						</div>
						${
							Array.isArray(metaInfo.screenshots)
								? /*html*/ `
							<div class="wrapper">
								<div class="title">Screenshots</div>
								<div class="content">
									<div class="image-list">
										${metaInfo.screenshots
											.map(
												(screenshot: any) => /*html*/ `
											<div class="img">
												<img src="${screenshot.screenshot}" alt="img">
											</div>
										`
											)
											.join("")}
										
									</div>
								</div>
							</div>
						`
								: ""
						}
						`,
				html: true,
			},
			btn: {
				ok: {
					enable: false,
				},
			},
			width: PanelUISize.setting.width,
			height: "auto",
			style: /*css*/ `
                .pops-alert-content{
                    padding: 0 15px;
                }
                .wrapper{
                    border: 1px solid #2c3e50;
                    margin: 24px 0;
                    max-width: 100%;
                }
                .wrapper .title{
                    font-size: 18px;
                    font-weight: 700;
                    padding: 8px 24px;
                    border-bottom: 1px solid #2c3e50;
                }
                .wrapper .content{
                    padding: 24px;
                }
                .wrapper .image-list{
                    display: flex;
                    max-width: 100%;
                    overflow-x: auto;
                    overflow-y: hidden;
                    gap: 12px;
                }
                .wrapper .image-list .img{
                    flex-shrink: 0;
                    height: 120px;
                    width: 160px;
                }
                .wrapper .image-list img{
                    height: 100%;
                    width: 100%;
                    cursor: pointer;
                }
            `,
		});
	},
};
