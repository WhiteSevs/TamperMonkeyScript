import Qmsg from "qmsg";

export const ApiResponseCheck = {
  /**
   * 接口是否请求成功
   * @param responseData
   * @param showToast 是否显示toast
   */
  isSuccess(responseData: any, showToast: boolean = true) {
    if (responseData == null) {
      showToast && Qmsg.error("接口返回数据为空");
      return false;
    }
    if (typeof responseData !== "object") {
      showToast && Qmsg.error("接口返回数据不是JSON");
      return false;
    }
    const status_code = responseData["status_code"];
    if (status_code == 0) {
      return true;
    } else {
      showToast && Qmsg.error("接口返回数据状态码不为0");
      return false;
    }
  },
};
