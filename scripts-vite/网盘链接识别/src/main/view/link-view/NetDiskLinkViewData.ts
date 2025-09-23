import type { LinkViewData } from "./NetDiskLinkView";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskView } from "@/main/view/NetDiskView";
import utils from "@whitesev/utils";

export const NetDiskLinkViewData = {
  /**
   * 生成视图数据
   */
  generateViewData() {
    let data: LinkViewData[] = [];
    // 分页显示
    NetDiskView.$data.isMatchedNetDiskIconMap.forEach((ruleKeyName) => {
      const netDiskDict = NetDisk.$match.matchedInfo.get(ruleKeyName);
      netDiskDict.forEach((netDiskDictData, shareCode) => {
        data.push({
          ruleKeyName,
          shareCode,
          netDiskDictData,
        });
      });
    });
    // 排序
    data = utils.sortListByProperty(data, (value) => value.netDiskDictData.matchTime, false);
    return data;
  },
};
