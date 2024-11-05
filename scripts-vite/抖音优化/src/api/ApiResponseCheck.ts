import Qmsg from "qmsg";

export const ApiResponseCheck = {
	/**
	 * 接口是否请求成功
	 * @param responseData
	 */
	isSuccess(responseData: any) {
		if (responseData == null) {
			Qmsg.error("接口返回数据为空");
			return false;
		}
		if (typeof responseData !== "object") {
			Qmsg.error("接口返回数据不是JSON");
			return false;
		}
		let status_code = responseData["status_code"];
		if (status_code == 0) {
			return true;
		} else {
			Qmsg.error("接口返回数据状态码不为0");
			return false;
		}
	},
};
