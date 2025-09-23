import { log } from "@/env";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { MetaDataParser } from "@/main/parse/MetaDataParser";
import { ParseFileCore } from "@/main/parse/NetDiskParseAbstract";
import Qmsg from "qmsg";

export class NetDiskParse_magnet extends ParseFileCore {
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    let { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const that = this;

    let url = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName: "magnet",
      ruleIndex,
      shareCode,
      accessCode,
    });
    let $loading = Qmsg.loading("正在请求Api中...");
    let metaInfo = await MetaDataParser.parseFileMetaInfo(url);
    $loading.close();
    if (!metaInfo) {
      return;
    }
    MetaDataParser.showFileMetaInfoDialog(metaInfo);
  }
}
