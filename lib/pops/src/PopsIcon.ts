import type { PopsIconType } from "./types/icon";
import SVG_min from "./svg/min.svg";
import SVG_mise from "./svg/mise.svg";
import SVG_max from "./svg/max.svg";
import SVG_close from "./svg/close.svg";
import SVG_edit from "./svg/edit.svg";
import SVG_share from "./svg/share.svg";
import SVG_delete from "./svg/delete.svg";
import SVG_search from "./svg/search.svg";
import SVG_upload from "./svg/upload.svg";
import SVG_loading from "./svg/loading.svg";
import SVG_next from "./svg/next.svg";
import SVG_prev from "./svg/prev.svg";
import SVG_eleme from "./svg/eleme.svg";
import SVG_elemePlus from "./svg/elemePlus.svg";
import SVG_chromeFilled from "./svg/chromeFilled.svg";
import SVG_cpu from "./svg/cpu.svg";
import SVG_videoPlay from "./svg/videoPlay.svg";
import SVG_videoPause from "./svg/videoPause.svg";
import SVG_headset from "./svg/headset.svg";
import SVG_monitor from "./svg/monitor.svg";
import SVG_documentCopy from "./svg/documentCopy.svg";
import SVG_picture from "./svg/picture.svg";
import SVG_circleClose from "./svg/circleClose.svg";
import SVG_view from "./svg/view.svg";
import SVG_hide from "./svg/hide.svg";
import SVG_keyboard from "./svg/keyboard.svg";
import SVG_arrowRight from "./svg/arrowRight.svg";
import SVG_arrowLeft from "./svg/arrowLeft.svg";

const PopsIconData: {
  [key in PopsIconType]: string;
} = {
  min: SVG_min,
  mise: SVG_mise,
  max: SVG_max,
  close: SVG_close,
  edit: SVG_edit,
  share: SVG_share,
  delete: SVG_delete,
  search: SVG_search,
  upload: SVG_upload,
  loading: SVG_loading,
  next: SVG_next,
  prev: SVG_prev,
  eleme: SVG_eleme,
  elemePlus: SVG_elemePlus,
  chromeFilled: SVG_chromeFilled,
  cpu: SVG_cpu,
  videoPlay: SVG_videoPlay,
  videoPause: SVG_videoPause,
  headset: SVG_headset,
  monitor: SVG_monitor,
  documentCopy: SVG_documentCopy,
  picture: SVG_picture,
  circleClose: SVG_circleClose,
  view: SVG_view,
  hide: SVG_hide,
  keyboard: SVG_keyboard,
  arrowRight: SVG_arrowRight,
  arrowLeft: SVG_arrowLeft,
};

export const PopsIcon = {
  $data: PopsIconData,
  /**
   * 判断是否存在某个icon
   * @param iconName 图标名
   */
  hasIcon(iconName: string) {
    return Object.keys(PopsIcon.$data).includes(iconName);
  },
  /**
   * 获取icon
   * @param iconName 图标名
   */
  getIcon(iconName: string): string | null {
    return PopsIcon.$data[iconName as keyof typeof this.$data];
  },
  /**
   * 删除图标
   * @param iconName 图标名
   */
  deleteIcon(iconName: string) {
    return Reflect.deleteProperty(PopsIcon.$data, iconName);
  },
  /**
   * 设置图标
   * @param iconName 图标名
   * @param iconHTML 图标html
   */
  setIcon(iconName: string, iconHTML: string) {
    Reflect.set(PopsIcon.$data, iconName, iconHTML);
  },
};
