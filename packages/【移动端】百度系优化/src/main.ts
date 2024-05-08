import { unsafeWindow } from "ViteGM";
import { BaiDu } from "./business";
import { log } from "./env";
import { PopsPanel } from "./ui";

if (typeof (unsafeWindow as any).BaiduOptimizationScriptRunCount !== "number") {
  (unsafeWindow as any).BaiduOptimizationScriptRunCount = 0;
  PopsPanel.init();
  BaiDu.init();
} else {
  (unsafeWindow as any).BaiduOptimizationScriptRunCount++;
  log.warn(
    "阻止脚本容器反复执行本脚本 " + (unsafeWindow as any).BaiduOptimizationScriptRunCount + " 次"
  );
}