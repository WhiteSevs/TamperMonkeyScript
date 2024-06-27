import { UtilsCore } from "./UtilsCore";

/**
 * 生成uuid
 */
export const GenerateUUID = function () {
	if (typeof UtilsCore.globalThis?.crypto?.randomUUID === "function") {
		return UtilsCore.globalThis.crypto.randomUUID();
	} else {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (charStr) {
				var randomValue = (Math.random() * 16) | 0,
					randomCharValue =
						charStr === "x" ? randomValue : (randomValue & 0x3) | 0x8;
				return randomCharValue.toString(16);
			}
		);
	}
};
