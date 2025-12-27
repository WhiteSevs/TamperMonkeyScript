import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { MetaDataParser } from "@/main/parse/MetaDataParser";
import { ParseFileCore } from "@/main/parse/NetDiskParseAbstract";
import Qmsg from "qmsg";

export class NetDiskParse_magnet extends ParseFileCore {
  async init(netDiskInfo: ParseFileInitConfig) {
    super.init(netDiskInfo);
    const { ruleIndex, shareCode, accessCode } = netDiskInfo;
    const that = this;

    const url = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName: "magnet",
      ruleIndex,
      shareCode,
      accessCode,
    });
    const $loading = Qmsg.loading("正在请求Api中...");
    const metaInfo = await MetaDataParser.parseFileMetaInfo(url);
    $loading.close();
    if (!metaInfo) {
      return;
    }
    MetaDataParser.showFileMetaInfoDialog(metaInfo);
  }
}
