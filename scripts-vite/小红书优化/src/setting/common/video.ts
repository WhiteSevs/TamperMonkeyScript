import { XHSVideo, XHSVideoPlaybackRates } from "@/video/XHSVideo";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";

/** PC 和移动端分别保存默认倍速设置。 */
export const getVideoSettingViews = (isMobile = false) => {
  const keys = XHSVideo.getKeys(isMobile);
  return [
    UISwitch("启用视频默认倍速", keys.enable, false, void 0, "新视频自动使用默认倍速；关闭后恢复1倍速"),
    UISelect(
      "视频默认倍速",
      keys.rate,
      1.5,
      XHSVideoPlaybackRates.map((value) => ({ value, text: `${value}倍速` })),
      void 0,
      "修改后立即生效；播放器中手动选择的倍速会保留到切换视频"
    ),
  ];
};
