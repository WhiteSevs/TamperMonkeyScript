import { GreasyforkApi } from "@/api/GreasyForkApi";
import { GM_Menu, log, utils } from "@/env";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { PopsPanel } from "@/setting/setting";
import Qmsg from "qmsg";

const GreasyforkMenu = {
	/**
	 * @class
	 */
	menu: GM_Menu,
	/**
	 * 当前是否已登录
	 */
	isLogin: false,
	/**
	 * 初始化环境变量
	 */
	initEnv() {
		let userLinkElement = this.getUserLinkElement();
		this.isLogin = Boolean(userLinkElement);
	},
	/**
	 * 获取当前登录用户的a标签元素
	 */
	getUserLinkElement() {
		return document.querySelector<HTMLAnchorElement>(
			"#nav-user-info span.user-profile-link a"
		);
	},
	/**
	 * 更新脚本
	 * @param scriptUrlList
	 */
	async updateScript(scriptUrlList: string[]) {
		let getLoadingHTML = function (scriptName: string, progress = 1) {
			return `
        <div style="display: flex;flex-direction: column;align-items: flex-start;">
          <div style="height: 30px;line-height: 30px;">名称：${scriptName}</div>
          <div style="height: 30px;line-height: 30px;">进度：${progress}/${scriptUrlList.length}</div>
        </div>`;
		};
		if (utils.isNull(scriptUrlList)) {
			Qmsg.error("未获取到【脚本列表】");
		} else {
			let loading = Qmsg.loading(
				getLoadingHTML(GreasyforkApi.getScriptName(scriptUrlList[0]) as string),
				{
					html: true,
				}
			);
			let successNums = 0;
			let failedNums = 0;
			for (let index = 0; index < scriptUrlList.length; index++) {
				let scriptUrl = scriptUrlList[index];
				let scriptId = GreasyforkApi.getScriptId(scriptUrl) as string;
				log.success("更新：" + scriptUrl);
				let scriptName = GreasyforkApi.getScriptName(scriptUrl) as string;
				loading.setHTML(getLoadingHTML(scriptName, index + 1));
				let codeSyncFormData = await GreasyforkApi.getSourceCodeSyncFormData(
					scriptId
				);
				if (codeSyncFormData) {
					let syncUpdateStatus = await GreasyforkApi.sourceCodeSync(
						scriptId,
						codeSyncFormData
					);
					if (syncUpdateStatus) {
						Qmsg.success("源代码同步成功，3秒后更新下一个");
						await utils.sleep(3000);
						successNums++;
					} else {
						Qmsg.error("源代码同步失败");
						failedNums++;
					}
				} else {
					Qmsg.error("源代码同步失败");
					failedNums++;
				}
			}
			loading.close();
			if (successNums === 0) {
				Qmsg.error("全部更新失败");
			} else {
				Qmsg.success(
					`全部更新完毕<br >
          成功：${successNums}<br >
          失败：${failedNums}<br >
          总计：${scriptUrlList.length}`,
					{
						html: true,
					}
				);
			}
		}
	},
	/**
	 * 处理本地的goto事件
	 */
	handleLocalGotoCallBack() {
		if (PopsPanel.getValue("goto_updateSettingsAndSynchronize_scriptList")) {
			PopsPanel.deleteValue("goto_updateSettingsAndSynchronize_scriptList");
			if (!GreasyforkRouter.isUserHome()) {
				/* 当前不在用户主页 */
				PopsPanel.setValue(
					"goto_updateSettingsAndSynchronize_scriptList",
					true
				);
				if (GreasyforkMenu.getUserLinkElement()) {
					Qmsg.success("前往用户主页");
					window.location.href = GreasyforkMenu.getUserLinkElement()!.href;
				} else {
					Qmsg.error("获取当前已登录的用户主页失败");
				}
				return;
			}
			let scriptUrlList: string[] = [];
			document
				.querySelectorAll<HTMLAnchorElement>(
					"#user-script-list-section li a.script-link"
				)
				.forEach((item) => {
					scriptUrlList = scriptUrlList.concat(
						GreasyforkApi.getAdminUrl(item.href)
					);
				});
			GreasyforkMenu.updateScript(scriptUrlList);
		} else if (
			PopsPanel.getValue("goto_updateSettingsAndSynchronize_unlistedScriptList")
		) {
			PopsPanel.deleteValue(
				"goto_updateSettingsAndSynchronize_unlistedScriptList"
			);
			if (!GreasyforkRouter.isUserHome()) {
				/* 当前不在用户主页 */
				PopsPanel.setValue(
					"goto_updateSettingsAndSynchronize_unlistedScriptList",
					true
				);
				if (GreasyforkMenu.getUserLinkElement()) {
					Qmsg.success("前往用户主页");
					window.location.href = GreasyforkMenu.getUserLinkElement()!.href;
				} else {
					Qmsg.error("获取当前已登录的用户主页失败");
				}
				return;
			}
			let scriptUrlList: string[] = [];
			document
				.querySelectorAll<HTMLAnchorElement>(
					"#user-unlisted-script-list li a.script-link"
				)
				.forEach((item) => {
					scriptUrlList = scriptUrlList.concat(
						GreasyforkApi.getAdminUrl(item.href)
					);
				});
			GreasyforkMenu.updateScript(scriptUrlList);
		} else if (
			PopsPanel.getValue("goto_updateSettingsAndSynchronize_libraryScriptList")
		) {
			PopsPanel.deleteValue(
				"goto_updateSettingsAndSynchronize_libraryScriptList"
			);
			if (!GreasyforkRouter.isUserHome()) {
				/* 当前不在用户主页 */
				PopsPanel.setValue(
					"goto_updateSettingsAndSynchronize_libraryScriptList",
					true
				);
				if (GreasyforkMenu.getUserLinkElement()) {
					Qmsg.success("前往用户主页");
					window.location.href = GreasyforkMenu.getUserLinkElement()!.href;
				} else {
					Qmsg.error("获取当前已登录的用户主页失败");
				}
				return;
			}
			let scriptUrlList: string[] = [];
			document
				.querySelectorAll<HTMLAnchorElement>(
					"#user-library-script-list li a.script-link"
				)
				.forEach((item) => {
					scriptUrlList = scriptUrlList.concat(
						GreasyforkApi.getAdminUrl(item.href)
					);
				});
			GreasyforkMenu.updateScript(scriptUrlList);
		}
	},
};

export { GreasyforkMenu };
