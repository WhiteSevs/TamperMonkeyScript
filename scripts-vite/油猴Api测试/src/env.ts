import { addStyle, SCRIPT_NAME } from "@components/base.env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "@components/GM_Resource_Mapping";
import Qmsg from "qmsg";

const _SCRIPT_NAME_ = SCRIPT_NAME || "Monkey Api Test";

let injectDocumentTime = "";
if (document.documentElement) {
  if (document.head) {
    if (document.body) {
      injectDocumentTime = `<html>
    <head>
	    ...${document.head.childNodes.length} nodes
	</head>
    <body>
        ...${document.body.childNodes.length} nodes
    </body>
</html>

注入速度等级：4
`;
    } else {
      if (document.head.childNodes.length) {
        injectDocumentTime = `<html>
	<head>
	    ...${document.head.childNodes.length} nodes
	</head>
</html>
		
注入速度等级：3`;
      } else {
        injectDocumentTime = `<html>
	<head></head>
</html>

注入速度等级：2`;
      }
    }
  } else {
    injectDocumentTime = `<html>
</html>

注入速度等级：1`;
  }
} else {
  injectDocumentTime = `document.documentElement is null
	
注入速度等级：0`;
}
/**
 * 延迟执行，并捕捉异常
 */
const setTimeoutLog = (handler: (...args: any[]) => IPromise<void>, timeout: number, ...args: any[]) => {
  return setTimeout(async () => {
    try {
      await handler(...args);
    } catch (error: any) {
      Qmsg.error(error.toString(), { consoleLogContent: true });
    }
  }, timeout);
};

export {
  utils,
  DOMUtils,
  log,
  GM_Menu,
  addStyle,
  pops,
  $,
  $$,
  MountVue,
  VUE_ELE_NAME_ID,
  cookieManager,
} from "@components/base.env";

export { _SCRIPT_NAME_ as SCRIPT_NAME, injectDocumentTime, setTimeoutLog };
