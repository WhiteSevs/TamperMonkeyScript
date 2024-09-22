export const BilibiliApiCheck = {
	/**
	 * check json has {code: 0, message: "0"}
	 */
	isWebApiSuccess(json: any) {
		return (
			json?.code === 0 && (json?.message === "0" || json?.message === "success")
		);
	},
};
