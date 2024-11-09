import { DOMUtils, httpx, log } from "@/env";
import i18next from "i18next";
import Qmsg from "qmsg";

export const GreasyforkReportsApi = {
	/**
	 * 获取举报表单的信息
	 * @param item_class
	 * @param item_id
	 */
	async new(
		item_class: "script" | "discussion" | "user",
		item_id: string | number
	) {
		let response = await httpx.get(`/reports/new`, {
			data: {
				item_class: item_class,
				item_id: item_id,
			},
			fetch: true,
			allowInterceptConfig: false,
		});
		log.info(response);
		if (!response.status) {
			Qmsg.error(i18next.t("获取举报表单信息失败"));
			return;
		}
		let doc = DOMUtils.parseHTML(response.data.responseText, true, true);
		let form = doc.querySelector<HTMLFormElement>('form[action*="/reports"]')!;
		return form;
	},
	/**
	 * 举报
	 * @param form
	 */
	async reports(form: FormData) {
		let response = await httpx.post("/reports", {
			data: form,
			fetch: true,
			allowInterceptConfig: false,
		});
		log.info(response);
		if (!response.status) {
			Qmsg.error(i18next.t("发送举报表单失败"));
			return;
		}
		let doc = DOMUtils.parseHTML(response.data.responseText, true, true);
		let $validErrors = doc.querySelector<HTMLElement>(".validation-errors");
		if ($validErrors) {
			// 返回的报错信息
			return {
				success: false,
				msg: $validErrors.innerHTML,
			};
		} else {
			let $notice = doc.querySelector<HTMLElement>(".width-constraint .notice");
			return {
				success: true,
				msg: ($notice && DOMUtils.text($notice)) || "",
			};
		}
	},
};
