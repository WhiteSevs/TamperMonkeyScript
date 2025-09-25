import { addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import BaiKeTaShuoShieldCSS from "./shield.css?raw";

const BaiduBaiKeTaShuo = {
  init() {
    addStyle(BaiKeTaShuoShieldCSS);
    log.info("插入CSS规则");
    Panel.execMenuOnce("baidu_baike_tashuo_remove_bottom_ad", () => {
      this.removeBottomAd();
    });
  },
  /**
   * 去除底部广告
   */
  removeBottomAd() {
    utils.waitNode("#index_tashuo_list").then(($tashuoList) => {
      log.info("去除底部广告");
      utils.mutationObserver($tashuoList, {
        callback() {
          Array.from($tashuoList.children).forEach((item) => {
            if (item.className !== "J-hot-item-container") {
              log.info("存在广告-删除！");
              item.remove();
            }
          });
        },
        config: { subtree: true, childList: true, attributes: true },
      });
    });
  },
};

export { BaiduBaiKeTaShuo };
