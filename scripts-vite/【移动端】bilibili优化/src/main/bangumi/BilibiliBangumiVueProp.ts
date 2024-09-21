import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { VueUtils } from "@/utils/VueUtils";
import { Vue2Context } from "@whitesev/utils/dist/types/src/Utils";

export const BilibiliBangumiVueProp = {
	init() {
		PopsPanel.execMenu("bili-bangumi-setPay", () => {
			this.setPay();
		});
	},

	/**
	 * 设置已购买番剧(会员？)
	 *
	 * + $store.state.userStat.pay 1
	 * + $store.state.mediaInfo.user_status.pay 1
	 */
	setPay() {
		VueUtils.waitVuePropToSet("#app", [
			{
				msg: "设置参数 $store.state.userStat.pay",
				check(vueIns: Vue2Context) {
					return (
						typeof typeof vueIns?.$store?.state?.userStat?.pay === "number"
					);
				},
				set(vueIns: Vue2Context) {
					log.success("成功设置参数 $store.state.userStat.pay=1");
					vueIns.$store.state.userStat.pay = 1;
				},
			},
			{
				msg: "设置参数 $store.state.mediaInfo.user_status.pay",
				check(vueObj: Vue2Context) {
					return (
						typeof vueObj?.$store?.state?.mediaInfo?.user_status?.pay ===
						"number"
					);
				},
				set(vueObj: Vue2Context) {
					log.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1");
					vueObj.$store.state.mediaInfo.user_status.pay = 1;
				},
			},
		]);
	},
};
