import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { indexedDB } from "@whitesev/utils/dist/types/src/indexedDB";
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
	$key: {
		DB_KEY: "data",
	},
	$data: {
		db: null as any as indexedDB,
	},
	init() {
		this.$data.db = this.getDB();
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
		return new utils.indexedDB(dbName, storeName, dbVersion);
	},
	/**
	 * 记住回复内容
	 */
	async rememberReplyContent() {
		const TAG = "记住回复内容 -- ";
		let $formList = document.querySelectorAll<HTMLFormElement>("form");
		if (!$formList.length) {
			// 不存在表单
			log.warn(TAG + "不存在表单");
			return;
		}
		try {
			await this.clearRelayHistoryRememberContentText();
		} catch (error) {
			log.error(error);
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
			this.$data.db
				.get<IndexedDBReplaceRecordData[]>(this.$key.DB_KEY)
				.then((result) => {
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
					this.$data.db
						.get<IndexedDBReplaceRecordData[]>(this.$key.DB_KEY)
						.then((result) => {
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
							this.$data.db
								.save(this.$key.DB_KEY, result.data)
								.then((result) => {
									if (result.success) {
										// 成功保存
									} else {
										log.error(["保存失败", result]);
									}
								});
						});
				}, 25)
			);

			// 监听表单提交
			DOMUtils.on(
				$form,
				"submit",
				(event) => {
					log.info(`表单提交，刷新页面后清理内容：` + window.location.href);
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
	 * 清理历史记住的回复内容
	 */
	async clearRelayHistoryRememberContentText() {
		const KEY = "delyClear_rememberReplyContent_url";
		// 需要清理的url
		let delyClear_rememberReplyContent_url = GM_getValue<string | null>(KEY);
		if (delyClear_rememberReplyContent_url) {
			// 清空数据
			let result = await this.$data.db.get<IndexedDBReplaceRecordData[]>(
				this.$key.DB_KEY
			);
			if (!result.success) {
				// 数据库是空的
				log.info("表单记录：数据库是空的");
				return;
			}
			let localDataIndex = result.data.findIndex((item) => {
				return this.checkUrlIsSame(
					delyClear_rememberReplyContent_url,
					item.url
				);
			});
			if (localDataIndex == -1) {
				// 不存在该数据
				log.info("表单记录：已不存在该数据");
				GM_deleteValue(KEY);
				return;
			}
			result.data.splice(localDataIndex, 1);
			let saveResult = await this.$data.db.save(this.$key.DB_KEY, result.data);
			if (saveResult.success) {
				// 成功清除
				log.success("表单记录：成功清除");
				GM_deleteValue(KEY);
			} else {
				log.error(["表单记录：清除失败", result]);
			}
		}
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
		let result = await this.$data.db.get<IndexedDBReplaceRecordData[]>(
			this.$key.DB_KEY
		);
		return result.data ?? [];
	},
	/**
	 * 清空所有的记住的回复内容
	 */
	async clearAllRememberReplyContent() {
		let result = await this.$data.db.delete(this.$key.DB_KEY);
		return result.success;
	},
};
