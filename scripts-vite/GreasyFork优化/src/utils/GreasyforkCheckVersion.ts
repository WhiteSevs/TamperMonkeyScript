import { utils } from "@/env";
import { unsafeWindow } from "ViteGM";

type ScriptContainerName = "Tampermonkey" | "Violentmonkey" | "ScriptCat";

type TMInstalledDataTrue = {
	/** 脚本名 */
	name: string;
	/** 是否已安装 */
	installed: true;
	/** 是否启用 */
	enabled: boolean;
	/** 版本号 */
	version: string;
};

type TMInstalledDataFalse = {
	/** 脚本名 */
	name: string;
	/** 是否已安装 */
	installed: false;
};
type TMInstalledData = TMInstalledDataTrue | TMInstalledDataFalse;

type ScriptCatInstalledDataTrue = {
	/** 是否已安装 */
	installed: true;
	/** 版本号 */
	version: string;
};
type ScriptCatInstalledDataFalse = {
	/** 是否已安装 */
	installed: false;
};
type ScriptCatInstalledData =
	| ScriptCatInstalledDataTrue
	| ScriptCatInstalledDataFalse;

// https://greasyfork.org/zh-CN/scripts/447149-checkversion
export const GreasyforkCheckVersion = {
	/** 获取 TamperMonkey 暴露在window下的函数 */
	getTampermonkey: () => {
		return (unsafeWindow.external as any)?.Tampermonkey as
			| {
					/** 获取TamperMonkey版本号 */
					getVersion: (
						callback: (data: { version: string; id: string }) => void
					) => void;
					/** 获取脚本安装信息 */
					isInstalled: (
						name: string,
						namespace: string | undefined | null,
						callback: (data: TMInstalledData) => Promise<void> | void
					) => void;
					/** 打开TamperMonkey脚步设置页面 */
					openOptions: (name: string, namespace?: string | null) => void;
			  }
			| undefined;
	},
	/** 获取 Violentmonkey 暴露在window下的函数 */
	getViolentmonkey: () => {
		return (unsafeWindow.external as any)?.Violentmonkey as
			| {
					/** 容器版本号 */
					version: string;
					/** 获取脚本安装信息，返回版本号 */
					isInstalled: (
						name: string,
						namespace: string
					) => Promise<null | string>;
			  }
			| undefined;
	},
	/** 获取 ScriptCat 暴露在window下的函数 */
	getScriptCat: () => {
		return (unsafeWindow.external as any)?.Scriptcat as
			| {
					/** 获取脚本安装信息 */
					isInstalled: (
						name: string,
						namespace: string | undefined | null,
						callback: (data: ScriptCatInstalledData) => Promise<void> | void
					) => void;
			  }
			| undefined;
	},
	/**
	 * 获取脚本容器启用状态
	 */
	getScriptContainerStatus() {
		let containerStatus = {
			Tampermonkey: false,
			Violentmonkey: false,
			ScriptCat: false,
		} as {
			[key in ScriptContainerName]: boolean;
		};
		if ((unsafeWindow.external as any)?.Tampermonkey) {
			containerStatus.Tampermonkey = true;
		}
		if ((unsafeWindow.external as any)?.Violentmonkey) {
			containerStatus.Violentmonkey = true;
		}
		if ((unsafeWindow.external as any)?.Scriptcat) {
			containerStatus.ScriptCat = true;
		}
		return containerStatus;
	},
	/**
	 * 获取已注册的脚本容器名
	 */
	getRegisterScriptContainerNameList() {
		let allScriptContainerStatus = this.getScriptContainerStatus();
		/** 获取当前已注册的脚本容器 */
		let isRegisterScriptContainer = allScriptContainerStatus;
		let scriptContainerNameList: string[] = [];
		Object.keys(isRegisterScriptContainer).forEach((containerName) => {
			let containerEnable = Reflect.get(
				isRegisterScriptContainer,
				containerName
			) as (typeof isRegisterScriptContainer)[keyof typeof isRegisterScriptContainer];
			if (containerEnable) {
				scriptContainerNameList.push(containerName);
			}
		});
		return scriptContainerNameList;
	},
	/**
	 * 获取脚本安装的版本号
	 * @param name 脚本名
	 * @param namespace 脚本命名空间
	 */
	getInstalledVersion(name: string, namespace: string): Promise<null | string> {
		return new Promise((resolve, reject) => {
			// Tampermonkey
			const tm = this.getTampermonkey();
			if (tm) {
				tm.isInstalled(name, namespace, function (data) {
					if (data.installed) {
						resolve(data.version);
					} else {
						resolve(null);
					}
				});
				return;
			}
			// Violentmonkey
			const vm = this.getViolentmonkey();
			if (vm) {
				vm.isInstalled(name, namespace).then(resolve);
				return;
			}
			// ScriptCat
			const scriptCat = this.getScriptCat();
			if (scriptCat) {
				scriptCat.isInstalled(name, namespace, function (data) {
					if (data.installed) {
						resolve(data.version);
					} else {
						resolve(null);
					}
				});
				return;
			}

			reject(new TypeError("获取脚本容器暴露的external信息失败"));
		});
	},
	/**
	 * https://developer.mozilla.org/en/docs/Toolkit_version_format
	 *
	 * 比较版本号
	 * @param a 版本号
	 * @param b 版本号
	 * @returns
	 * + -1 该版本号低
	 * + 0 该版本号和比较的版本号相同
	 * + 1 该版本号高
	 */
	compareVersions(a: string, b: string) {
		if (a === b) {
			return 0;
		}
		const aParts = a.split(".");
		const bParts = b.split(".");
		for (let i = 0; i < aParts.length; i++) {
			const result = this.compareVersionPart(aParts[i], bParts[i]);
			if (result !== 0) {
				return result;
			}
		}
		return 0;
	},
	compareVersionPart(partA: string, partB: string) {
		const partAParts = this.parseVersionPart(partA);
		const partBParts = this.parseVersionPart(partB);
		for (let i = 0; i < partAParts.length; i++) {
			// "A string-part that exists is always less than a string-part that doesn't exist"
			if (
				(partAParts[i] as any).length > 0 &&
				(partBParts[i] as any).length === 0
			) {
				return -1;
			}
			if (
				(partAParts[i] as any).length === 0 &&
				(partBParts[i] as any).length > 0
			) {
				return 1;
			}
			if (partAParts[i] > partBParts[i]) {
				return 1;
			}
			if (partAParts[i] < partBParts[i]) {
				return -1;
			}
		}
		return 0;
	},
	// It goes number, string, number, string. If it doesn't exist, then
	// 0 for numbers, empty string for strings.
	parseVersionPart(part: string) {
		if (!part) {
			return [0, "", 0, ""];
		}
		const partParts = /([0-9]*)([^0-9]*)([0-9]*)([^0-9]*)/.exec(part)!;
		return [
			partParts[1] ? parseInt(partParts[1]) : 0,
			partParts[2],
			partParts[3] ? parseInt(partParts[3]) : 0,
			partParts[4],
		];
	},
	/**
	 *
	 * @param installButton 安装按钮
	 * 必须属性
	 * + data-update-label 按钮升级的文字
	 * + data-downgrade-label 按钮降级的文字
	 * + data-reinstall-label 按钮重装的文字
	 * @param installedVersion 安装版本
	 * @param version 版本号
	 * @returns
	 */
	handleInstallResult(
		installButton: HTMLElement,
		installedVersion: string,
		version: string
	) {
		if (installedVersion == null) {
			// Not installed, do nothing
			return;
		}

		installButton.removeAttribute("data-ping-url");

		switch (this.compareVersions(installedVersion, version)) {
			// Upgrade
			case -1:
				installButton.textContent =
					installButton.getAttribute("data-update-label");
				break;
			// Downgrade
			case 1:
				installButton.textContent = installButton.getAttribute(
					"data-downgrade-label"
				);
				break;
			// Equal
			case 0:
				installButton.textContent = installButton.getAttribute(
					"data-reinstall-label"
				);
				break;
			// Invalid
		}
	},
	/**
	 * 检测js脚本的更新
	 * @param installButton 安装按钮
	 * 必须属性
	 * + data-script-name 脚本名
	 * + data-script-namespace 脚本命名空间
	 * + data-script-version 脚本当前版本号
	 * @param retry 重试
	 */
	async checkForUpdatesJS(
		installButton: HTMLElement,
		retry: boolean
	): Promise<boolean> {
		const name = installButton.getAttribute("data-script-name")!;
		const namespace = installButton.getAttribute("data-script-namespace")!;
		const version = installButton.getAttribute("data-script-version")!;
		try {
			let installedVersion = await this.getInstalledVersion(name, namespace);
			if (installedVersion == null) {
				return false;
			}
			this.handleInstallResult(installButton, installedVersion, version);
			return true;
		} catch (error) {
			if (retry) {
				await utils.sleep(1000);
				try {
					return await this.checkForUpdatesJS(installButton, false);
				} catch (error) {}
			}
			return false;
		}
	},
	/**
	 * 检测css脚本的更新
	 * @param installButton 安装按钮
	 * 必须属性
	 * + data-script-name 脚本名
	 * + data-script-namespace 脚本命名空间
	 */
	checkForUpdatesCSS(installButton: HTMLElement) {
		const name = installButton.getAttribute("data-script-name");
		const namespace = installButton.getAttribute("data-script-namespace");
		postMessage(
			{ type: "style-version-query", name, namespace, url: location.href },
			location.origin
		);
	},
};

// Response from Stylus
// window.addEventListener('message', function (event) {
//     if (event.origin !== 'https://greasyfork.org' && event.origin !== 'https://sleazyfork.org') { return }
//     if (event.data.type !== 'style-version') { return }
//     const installButton = document.querySelector('.install-link[data-install-format=css]')
//     if (installButton == null) { return }
//     const version = installButton.getAttribute('data-script-version')
//     const installedVersion = event.data.version
//     handleInstallResult(installButton, installedVersion, version)
// }, false)
// document.addEventListener('DOMContentLoaded', function () {
//     const installButtonJS = document.querySelector('.install-link[data-install-format=js]')
//     if (installButtonJS) {
//         checkForUpdatesJS(installButtonJS, true)
//     }
//     const installButtonCSS = document.querySelector('.install-link[data-install-format=css]')
//     if (installButtonCSS) {
//         checkForUpdatesCSS(installButtonCSS)
//     }
// })
