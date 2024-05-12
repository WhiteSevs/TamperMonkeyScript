import { unsafeWindow } from "ViteGM";
import { Baidu } from "./main/Baidu";
import { log } from "./env";
import { PopsPanel } from "./setting/setting";

if (typeof (unsafeWindow as any).BaiduOptimizationScriptRunCount !== "number") {
  (unsafeWindow as any).BaiduOptimizationScriptRunCount = 0;
  PopsPanel.init();
  Baidu.init();
} else {
  (unsafeWindow as any).BaiduOptimizationScriptRunCount++;
  log.warn(
    "阻止脚本容器反复执行本脚本 " + (unsafeWindow as any).BaiduOptimizationScriptRunCount + " 次"
  );
}