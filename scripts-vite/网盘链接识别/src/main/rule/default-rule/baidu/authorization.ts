import { unsafeWindow } from "ViteGM";

export const NetDiskAuthorization_baidu = function () {
  if (window.location.hostname !== "pan.baidu.com") {
    return;
  }

  Object.keys(unsafeWindow.localStorage).forEach((keyName) => {
    if (keyName.endsWith("_bdclnd")) {
      const shareCode = keyName.replace(/_bdclnd$/, "");
      const accessCodeStore = unsafeWindow.localStorage.getItem(`${shareCode}_pwd`);
      if (accessCodeStore) {
        // 有密码
      }
    }
  });
};
