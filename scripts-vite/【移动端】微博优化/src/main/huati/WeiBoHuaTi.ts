import { httpx, log, utils } from "@/env";
import { WeiBoNetWorkHook } from "@/hook/WeiBoNetWorkHook";
import { Panel } from "@components/setting/panel";
import { VueUtils } from "@components/utils/VueUtils";

const WeiBoHuaTi = {
	init() {
		Panel.execMenu("huati_weibo_masquerade_weibo_client_app", () => {
			this.isWeibo();
		});
		Panel.execMenuOnce(
			"huati_weibo_get_more_celebrity_calendar_information",
			() => {
				this.hookNetWorkWithGetMoreCelebrityCalendarInformation();
			}
		);
	},
	/**
	 * 伪装微博
	 */
	isWeibo() {
		log.info("伪装微博");
		VueUtils.waitVuePropToSet("#loadMore", [
			{
				msg: "等待设置属性 __vue__.isWeibo",
				check(vueObj) {
					return typeof vueObj.isWeibo === "boolean";
				},
				set(vueObj) {
					vueObj.isWeibo = true;
					log.success("成功设置属性 __vue__.isWeibo=true");
				},
			},
		]);
	},
	/**
	 * 劫持请求让获取更多名人日历信息
	 */
	hookNetWorkWithGetMoreCelebrityCalendarInformation() {
		WeiBoNetWorkHook.ajaxHooker.hook((request) => {
			log.info("ajaxHookr: ", request.url);
			if (!request.url.startsWith("/ajax/super/starschedule?")) {
				return;
			}
			request.response = async (res) => {
				let getResp = await httpx.get(request.url, {
					headers: {
						Host: globalThis.location.hostname,
						Accept: "application/json, text/plain, */*",
						"X-Requested-With": "XMLHttpRequest",
						"sec-ch-ua-mobile": "?1",
						"User-Agent": utils.getRandomAndroidUA() + " Weibo (__weibo__)",
						"sec-ch-ua-platform": "Android",
						"Sec-Fetch-Site": "same-origin",
						"Sec-Fetch-Mode": "cors",
						"Sec-Fetch-Dest": "empty",
						Referer: globalThis.location.href,
						"Accept-Encoding": "gzip, deflate, br",
						"Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
					},
				});
				res.response = getResp.data.responseText;
				res.responseText = getResp.data.responseText;
			};
		});
	},
};

export { WeiBoHuaTi };
