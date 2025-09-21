import { QmsgMsg } from "./QmsgInst";
import { QmsgInstStorage, type QmsgInstStorageInfo } from "./QmsgInstStorage";
import type { QmsgConfig } from "./QmsgConfig";
import { QmsgUtils } from "./QmsgUtils";

/**
 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
 * @param config 配置项
 */
export function QmsgInstHandler(config: QmsgConfig = {} as QmsgConfig): QmsgMsg {
  const optionString = JSON.stringify(config);
  /* 寻找已生成的实例是否存在配置相同的 */
  let findQmsgItemInfo = QmsgInstStorage.insInfoList.find((item) => {
    return item.config === optionString;
  });
  let qmsgInst = findQmsgItemInfo?.instance;
  if (qmsgInst == null) {
    /* 不存在，创建个新的 */
    const uuid = QmsgUtils.getUUID();
    const qmsgInstStorageInfo = <QmsgInstStorageInfo>{
      uuid: uuid,
      config: optionString,
      instance: new QmsgMsg(config, uuid),
    };
    QmsgInstStorage.insInfoList.push(qmsgInstStorageInfo);
    const QmsgListLength = QmsgInstStorage.insInfoList.length;
    const maxNums = qmsgInstStorageInfo.instance.getSetting().maxNums;
    /**
     * 关闭多余的消息
     */
    if (QmsgListLength > maxNums) {
      for (let index = 0; index < QmsgListLength - maxNums; index++) {
        const item = QmsgInstStorage.insInfoList[index];
        item && item.instance.getSetting().autoClose && item.instance.close();
      }
    }
    findQmsgItemInfo = qmsgInstStorageInfo;
    qmsgInst = qmsgInstStorageInfo.instance;
  } else {
    if (!qmsgInst.getRepeatNum()) {
      qmsgInst.setRepeatNum(2);
    } else {
      if (qmsgInst.getRepeatNum() >= 99) {
        /* pass */
      } else {
        qmsgInst.setRepeatNumIncreasing();
      }
    }
    qmsgInst.setMsgCount();
  }
  if (qmsgInst) {
    qmsgInst.$Qmsg.setAttribute("data-count", qmsgInst?.getRepeatNum().toString());
  } else {
    throw new Error("QmsgInst is null");
  }

  return qmsgInst;
}
