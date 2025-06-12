import { BilibiliUserApi } from "@/api/BilibiliUserApi";

export const BilibiliGlobalData = {
	$data: {
		isLogin: new Promise<boolean>(() => false),
	},
	$flag: {
		isQueryLoginStatus: false,
	},
	async init() {
		this.setLoginStatus();
	},
	setLoginStatus() {
		let __isLogin__ = false;
		this.$data.isLogin = new Promise<boolean>(async (resolve) => {
			if (!this.$flag.isQueryLoginStatus) {
				this.$flag.isQueryLoginStatus = true;
				let userNavInfo = await BilibiliUserApi.nav(false);
				if (userNavInfo && userNavInfo.isLogin) {
					__isLogin__ = true;
				}
			}
			resolve(__isLogin__);
		});
	},
};
