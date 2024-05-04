import { unsafeWindow } from "ViteGM";
import { BaiDu } from "./business";
import { log } from "./env";
import { PopsPanel } from "./ui";

if (typeof (unsafeWindow as any).BaiDuOptimization !== "number") {
  (unsafeWindow as any).BaiDuOptimization = 0;
  PopsPanel.init();
  BaiDu.init();
} else {
  (unsafeWindow as any).BaiDuOptimization++;
  log.warn(
    "阻止脚本容器反复执行本脚本 " + (unsafeWindow as any).BaiDuOptimization + " 次"
  );
}