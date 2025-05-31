import { log } from "@/env";
import Qmsg from "qmsg";
import { GM_getValue } from "ViteGM";
import { ParseFileAbstract } from "../../../parse/NetDiskParseObject";
import { NetDiskRuleUtils } from "@/main/rule/NetDiskRuleUtils";
import { NetDiskLinkClickMode } from "@/main/link-click-mode/NetDiskLinkClickMode";

export class NetDiskParse_Baidu extends ParseFileAbstract {
	/**
	 * 入口
	 * @param ruleIndex 规则下标
	 * @param shareCode
	 * @param accessCode
	 */
	init(ruleIndex: number, shareCode: string, accessCode: AccessCodeType) {
		log.info(ruleIndex, shareCode, accessCode);
		this.ruleIndex = ruleIndex;
		this.shareCode = shareCode;
		this.accessCode = accessCode;
		let url = GM_getValue<string>("baidu-baiduwp-php-url");
		let postForm = GM_getValue<string>("baidu-baiduwp-php-post-form");
		let enableCopy = GM_getValue<boolean>("baidu-baiduwp-php-copy-url");
		if (!url) {
			Qmsg.error("请先在设置中配置百度网盘-网址");
			return void 0;
		}
		if (!postForm) {
			Qmsg.error("请先在设置中配置百度网盘-表单参数");
			return void 0;
		}
		postForm = NetDiskRuleUtils.replaceParam(postForm, {
			shareCode: shareCode,
			accessCode: accessCode!,
		});
		let formElement = document.createElement("form");
		/* POST的表单数据 */
		let formData: {
			[key: string]: string;
		} = {};
		let urlParams = new URLSearchParams(postForm);
		/* 解析网址 */
		formElement.action = url;
		formElement.method = "post";
		formElement.style.display = "none";
		formElement.target = "_blank";
		// @ts-ignore
		for (let [key, value] of urlParams) {
			let textAreaElement = document.createElement("textarea");
			textAreaElement.name = key;
			textAreaElement.value = value;
			formElement.appendChild(textAreaElement);
			formData[key] = value;
		}
		log.info("表单数据", formData);
		document.body.appendChild(formElement);
		log.info("访问网址", url);
		if (enableCopy) {
			NetDiskLinkClickMode.copy(
				"baidu",
				ruleIndex,
				shareCode,
				accessCode,
				"1.5秒后跳转至解析站"
			);
			setTimeout(() => {
				formElement.submit();
			}, 1500);
		} else {
			formElement.submit();
		}
	}
}
