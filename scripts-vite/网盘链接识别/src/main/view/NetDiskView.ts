import type { PopsEventDetails } from "@whitesev/pops/dist/types/src/types/event";
import { NetDiskViewSizeConfig } from "./NetDiskViewSizeConfig";
import { NetDiskSuspension } from "./suspension/NetDiskSuspensionView";
import { NetDiskLinkView } from "./link-view/NetDiskLinkView";
import { NetDiskLinearChainDialogView } from "./linear-chain-dialog/NetDiskLinearChainDialogView";
import { NetDiskNewAccessCodeView } from "./new-access-code/NetDiskNewAccessCodeView";
import { NetDiskMatchPasteText } from "./match-paste-text/NetDiskMatchPasteTextView";
import { NetDiskHistoryMatchView } from "./history-match/NetDiskHistoryMatchView";
import { NetDiskIcon } from "./NetDiskIcon";

/** 弹窗UI界面 */
export const NetDiskView = {
  /** 元素对象实例 */
  $el: {
    /**
     * 链接弹窗的对象
     */
    $linkView: void 0 as any as PopsEventDetails,
    /**
     * 历史匹配记录弹窗的对象
     */
    $historyView: void 0 as any as PopsEventDetails,
    /**
     * 设置弹窗的对象
     */
    $settingView: void 0 as any as PopsEventDetails,
  },
  $inst: {
    /**
     * 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮
     */
    suspension: NetDiskSuspension,
    /**
     * 主视图实例函数
     */
    linkView: NetDiskLinkView,
    /**
     * 链接直链的视图
     */
    linearChainDialogView: NetDiskLinearChainDialogView,
    /**
     * 重新输入新密码的视图
     */
    newAccessCodeView: NetDiskNewAccessCodeView,
    /**
     * 网盘历史匹配到记录的视图
     */
    historyMatch: NetDiskHistoryMatchView,
    /**
     * 主动识别文本视图
     */
    matchPasteText: NetDiskMatchPasteText,
    /**
     * 图标
     */
    icon: NetDiskIcon,
  },
  $data: {
    /**
     * 存储当前已匹配到的网盘的图标
     */
    isMatchedNetDiskIconMap: new Set<string>(),
    /**
     * 是否默认禁用弹窗弹出后背景可以滚动
     * @default false
     */
    isForbiddenScrollByDefault: false,
  },
  $config: {
    /**
     * 弹窗的配置
     * 规定格式
     * {
     *  PC:{
     *    width: "",
     *    height: "",
     *  },
     *  Mobile: {
     *    width: "",
     *    height: "",
     *  }
     * }
     */
    viewSizeConfig: NetDiskViewSizeConfig,
  },
};
