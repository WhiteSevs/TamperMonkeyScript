import { unsafeWindow } from "ViteGM";
import { GMTotal } from "./GMTotal";

export const GlobalUtil = {
  getWindow(): any {
    return GMTotal.unsafeWindow.isSupport() ? unsafeWindow : window;
  },
};
