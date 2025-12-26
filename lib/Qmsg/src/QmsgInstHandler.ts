import { QmsgDefaultConfig } from "./QmsgDefaultConfig";
import { QmsgMsg } from "./QmsgInst";
import { QmsgInstStorage, type QmsgInstStorageInfo } from "./QmsgInstStorage";
import { QmsgUtils } from "./QmsgUtils";
import type { QmsgConfig } from "./types/config";

/**
 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
 * @param config 配置项
 */
export function QmsgInstHandler(config: QmsgConfig = {} as QmsgConfig): QmsgMsg {
  const optionStr = QmsgUtils.toStr(config);
  // 处理后的配置
  const setting = QmsgUtils.toDynamicObject(QmsgDefaultConfig.config, config, QmsgDefaultConfig.INS_DEFAULT);
  // 处理后的配置字符串
  const settingStr = QmsgUtils.toStr(setting);
  // 寻找已生成的实例是否存在配置相同的
  let qmsgItemInfo = QmsgInstStorage.insInfoList.find((item) => {
    return item.configStr === optionStr && item.inst.settingStr === settingStr;
  });
  let qmsgInst = qmsgItemInfo?.inst;
  if (qmsgInst == null) {
    // 不存在，创建个新的
    const uuid = QmsgUtils.getUUID();
    const inst = new QmsgMsg(setting, uuid);
    const qmsgInstStorageInfo = <QmsgInstStorageInfo>{
      uuid: uuid,
      configStr: optionStr,
      inst: inst,
    };
    QmsgInstStorage.insInfoList.push(qmsgInstStorageInfo);
    const QmsgListLength = QmsgInstStorage.insInfoList.length;
    const maxNums = qmsgInstStorageInfo.inst.setting.maxNums;
    /**
     * 关闭多余的消息
     */
    if (QmsgListLength > maxNums) {
      for (let index = 0; index < QmsgListLength - maxNums; index++) {
        const item = QmsgInstStorage.insInfoList[index];
        item && item.inst.setting.autoClose && item.inst.close();
      }
    }
    qmsgItemInfo = qmsgInstStorageInfo;
    qmsgInst = qmsgInstStorageInfo.inst;
  } else {
    if (!qmsgInst.repeatNum) {
      qmsgInst.repeatNum = 2;
    } else {
      if (qmsgInst.repeatNum >= 99) {
        // pass
      } else {
        qmsgInst.setRepeatNumIncreasing();
      }
    }
    qmsgInst.setMsgCount();
  }
  if (qmsgInst) {
    qmsgInst.$el.$item.setAttribute("data-count", qmsgInst?.repeatNum.toString());
  } else {
    throw new Error("QmsgInst is null");
  }

  return qmsgInst;
}
