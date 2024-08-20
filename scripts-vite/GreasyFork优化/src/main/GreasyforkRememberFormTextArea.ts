import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

type IndexedDBReplaceRecordData = {
	/** 当前url */
	url: string;
	/** 输入框内容 */
	text: string;
	/** 时间戳 */
	time: number;
};
export const GreasyforkRememberFormTextArea = {
	$data: {
		DB_KEY: "data",
	},
	init() {
		PopsPanel.execMenuOnce("rememberReplyContent", () => {
			this.rememberReplyContent();
		});
		PopsPanel.execMenu("gf-autoClearRememberReplayContent", (value) => {
			this.autoClearRememberReplayContent(value);
		});
	},
	/**
	 * 获取数据库连接对象
	 */
	getDB() {
		const dbName = "reply_record";
		const storeName = "textarea_text";
		const dbVersion = 2;
		let db = new utils.indexedDB(dbName, storeName, dbVersion);
		return db;
	},
	/**
	 * 记住回复内容
	 */
	rememberReplyContent() {
		const TAG = "记住回复内容 -- ";
		let $formList = document.querySelectorAll<HTMLFormElement>("form");
		if (!$formList.length) {
			// 不存在表单
			log.warn(TAG + "不存在表单");
			return;
		}
		let db = this.getDB();

		const delyClear_rememberReplyContent_url_KEY =
			"delyClear_rememberReplyContent_url";
		let delyClear_rememberReplyContent_url = GM_getValue(
			delyClear_rememberReplyContent_url_KEY
		);
		if (delyClear_rememberReplyContent_url) {
			// 清空数据
			db.get<IndexedDBReplaceRecordData[]>(this.$data.DB_KEY).then((result) => {
				if (!result.success) {
					// 数据库是空的
					GM_deleteValue(delyClear_rememberReplyContent_url_KEY);
					return;
				}
				let localDataIndex = result.data.findIndex((item) => {
					return this.checkUrlIsSame(window.location.href, item.url);
				});
				if (localDataIndex == -1) {
					// 不存在该数据
					GM_deleteValue(delyClear_rememberReplyContent_url_KEY);
					return;
				}
				result.data.splice(localDataIndex, 1);
				db.save(this.$data.DB_KEY, result.data).then((result) => {
					if (result.success) {
						// 成功清除
						GM_deleteValue(delyClear_rememberReplyContent_url_KEY);
					} else {
						log.error(["清除失败", result]);
					}
				});
			});
		}
		$formList.forEach(async ($form) => {
			// 输入框
			let $textarea = $form.querySelector<HTMLTextAreaElement>("textarea");
			// 发表回复按钮
			let $replySubmit =
				$form.querySelector<HTMLButtonElement>(`input[type="submit"]`);

			if (!$textarea) {
				// 不存在输入框
				return;
			}
			if (!$replySubmit) {
				// 不存在发表回复按钮
				return;
			}
			log.success([`开始监听form --- 记住回复内容`, $form]);
			// 将indexeDB中的数据放入textarea中
			db.get<IndexedDBReplaceRecordData[]>(this.$data.DB_KEY).then((result) => {
				if (!result.success) {
					// 数据库是空的
					return;
				}
				let localDataIndex = result.data.findIndex((item) => {
					return this.checkUrlIsSame(window.location.href, item.url);
				});
				if (localDataIndex == -1) {
					return;
				}
				let historyInputText = result.data[localDataIndex].text;
				log.success("填入历史输入内容：" + historyInputText);
				$textarea.value = historyInputText;
			});

			// 监听内容改变
			DOMUtils.on(
				$textarea,
				["propertychange", "input"],
				utils.debounce((event) => {
					let data: IndexedDBReplaceRecordData = {
						url: window.location.href,
						text: $textarea.value,
						time: Date.now(),
					};
					db.get<IndexedDBReplaceRecordData[]>(this.$data.DB_KEY).then(
						(result) => {
							if (
								!result.success &&
								result.event &&
								result.event.type !== "success"
							) {
								log.warn(result);
								return;
							}
							if (result.data == null) {
								// 当没有数据的时候，初始化值
								result.data = [];
							}
							let localDataIndex = result.data.findIndex((item) => {
								return this.checkUrlIsSame(window.location.href, item.url);
							});
							if (localDataIndex !== -1) {
								// 本地已有该数据
								if (utils.isNull(data.text)) {
									// 空的，清除该数据
									result.data.splice(localDataIndex, 1);
								} else {
									result.data[localDataIndex] = utils.assign(
										result.data[localDataIndex],
										data
									);
								}
							} else {
								result.data = result.data.concat(data);
							}
							db.save(this.$data.DB_KEY, result.data).then((result) => {
								if (result.success) {
									// 成功保存
								} else {
									log.error(["保存失败", result]);
								}
							});
						}
					);
				}, 25)
			);

			// 监听表单提交
			DOMUtils.on(
				$form,
				"submit",
				(event) => {
					log.info(`提交表单，清空数据库`);
					GM_setValue(
						"delyClear_rememberReplyContent_url",
						window.location.href
					);
				},
				{
					capture: true,
				}
			);
		});
	},
	/**
	 * 检测两个url是否相同（不包括hash值）
	 * @param url1
	 * @param url2
	 */
	checkUrlIsSame(url1: string, url2: string) {
		let url1Obj = new URL(url1);
		let url2Obj = new URL(url2);
		return (
			url1Obj.origin === url2Obj.origin && url1Obj.pathname === url2Obj.pathname
		);
	},
	/**
	 * 自动清理空间
	 * @param intervalDay 间隔天数
	 */
	autoClearRememberReplayContent(intervalDay: number) {
		const KEY = "gf-last-time-autoClearRememberReplayContent";
		let lastClearTime = GM_getValue<number | undefined>(KEY);
		let intervalTime = intervalDay * 24 * 60 * 60 * 1000;
		if (lastClearTime) {
			if (Date.now() - lastClearTime > intervalTime) {
				// 开始清理
				GM_setValue(KEY, Date.now());
			} else {
				// 未到时间
				return;
			}
		}
		GM_setValue(KEY, Date.now());
	},
	/**
	 * 获取所有的记住的回复内容
	 */
	async getAllRememberReplyContent() {
		let db = this.getDB();
		let result = await db.get<IndexedDBReplaceRecordData[]>(this.$data.DB_KEY);
		return result.data ?? [];
	},
	/**
	 * 清空所有的记住的回复内容
	 */
	async clearAllRememberReplyContent() {
		let db = this.getDB();
		let result = await db.delete(this.$data.DB_KEY);
		return result.success;
	},
};
