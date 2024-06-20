import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { SearchResultEveryOneSearch } from "./SearchResultEveryOneSearch";
import { BaiduSearchRule } from "./SearchRule";
import type { UtilsDictionary } from "@whitesev/utils/dist/src/Dictionary";

const BaiduResultItem = {
	originURLMap: null as unknown as UtilsDictionary<string, string>,
	/**
	 * 判断链接是否是百度的中转链接
	 * @param url
	 * @returns
	 * + true 是百度的中转链接
	 * + false 不是百度的中转链接
	 */
	isBaiDuTransferStation(url: string) {
		try {
			url = decodeURIComponent(url);
			return utils.startsWith(
				url,
				"http(s|)://(m[0-9]{0,2}|www).baidu.com/from"
			);
		} catch (error) {
			log.error(error);
			return false;
		}
	},
	/**
	 * 判断链接是否是黑名单链接，不进行处理
	 * @param url
	 * @returns
	 * + true 是黑名单url
	 * + false 不是黑名单url
	 */
	isBlackList(url: string) {
		let blackList = [
			/^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/productcard/,
			/^http(s|):\/\/ks.baidu.com/,
			/^http(s|):\/\/mbd.baidu.com\/ma\/tips/,
		];
		for (const blackUrlRegexp of blackList) {
			if (url.match(blackUrlRegexp)) {
				return true;
			}
		}
		return false;
	},
	/**
	 * 为搜索结果每一条设置原始链接
	 * @param targetNode
	 * @param articleURL article的真实url
	 */
	setArticleOriginUrl(targetNode: HTMLElement, articleURL: string) {
		/* 处理超链接 */
		targetNode.querySelectorAll("a").forEach(async (item) => {
			if (BaiduResultItem.originURLMap.has(item.href)) {
				articleURL = BaiduResultItem.originURLMap.get(item.href) as string;
			}
			let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl(item);
			if (!utils.isNull(domOriginUrl)) {
				articleURL = domOriginUrl;
			}
			if (utils.isNull(articleURL) || articleURL === item.href) {
				return;
			}
			if (BaiduResultItem.isBlackList(articleURL)) {
				return;
			}
			item.href = articleURL;
			//log.info("替换成新链接: " + articleURL);
		});
		/* 这个是百度笔记(可能) */
		Array.from(
			targetNode.querySelectorAll<HTMLDivElement>(
				"div[data-aftclk][class*=img-container]"
			)
		).forEach(($imgContainer) => {
			let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl($imgContainer);
			if (
				!utils.isNull(domOriginUrl) &&
				!BaiduResultItem.isBlackList(domOriginUrl)
			) {
				$imgContainer.setAttribute("href", domOriginUrl);
				$imgContainer.setAttribute("rl-link-href", domOriginUrl);
				//log.info("替换成新链接2: " + domOriginUrl);
			}
		});
		/* 对搜索结果中存在的视频进行处理 */
		Array.from(
			targetNode.querySelectorAll<HTMLDivElement>(
				"div.c-video-container div[data-aftclk]"
			)
		).forEach(($aftclk) => {
			let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl($aftclk);
			if (
				!utils.isNull(domOriginUrl) &&
				!BaiduResultItem.isBlackList(domOriginUrl)
			) {
				$aftclk.setAttribute("href", domOriginUrl);
				$aftclk.setAttribute("rl-link-href", domOriginUrl);
				//log.info("视频替换成新链接1: " + domOriginUrl);
			}
		});
		/* 对搜索结果中存在的视频进行处理 */
		Array.from(
			targetNode.querySelectorAll<HTMLDivElement>(
				'div[data-module="sc_pc"] div[rl-link-href]'
			)
		).forEach(($rlLinkHref) => {
			let domOriginUrl = BaiduResultItem.parseDOMAttrOriginUrl($rlLinkHref);
			if (
				!utils.isNull(domOriginUrl) &&
				!BaiduResultItem.isBlackList(domOriginUrl)
			) {
				$rlLinkHref.setAttribute("href", domOriginUrl);
				$rlLinkHref.setAttribute("rl-link-href", domOriginUrl);
				//log.info("视频替换成新链接2: " + domOriginUrl);
			}
		});
	},
	/**
	 * 解析在JSON数据中的urlParams中真正的链接，如果不存在，返回undefined
	 * @param data 传入 {"urlParams":{...}} 中的urlParams
	 */
	parseURLParamsOriginURL(data: { [x: string]: any }) {
		if (data["originUrl"]) {
			return data["originUrl"];
		} else if (data["log"]) {
			/* 隐藏在log的mu中 */
			let url = void 0;
			try {
				url = utils.toJSON(data["log"])["mu"];
				utils.isNull(url) && (url = void 0);
			} catch (error) {}
			return url;
		}
	},
	/**
	 * 由于部分真实链接存储在 script 标签中，得取出
	 * @param targetNode 目标元素
	 */
	parseScriptDOMOriginUrlMap(targetNode: HTMLElement | Document) {
		let urlMap = new utils.Dictionary<string, string>();
		targetNode.querySelectorAll("script[id^='atom-data-']").forEach((item) => {
			let jsonData = utils.toJSON(item.innerHTML);
			if (jsonData["data"]["resultAtomData"] == null) {
				return;
			}
			let resultAtomData = jsonData["data"][
				"resultAtomData"
			] as NestedObjectWithToString;
			if (
				resultAtomData["abstract"] &&
				resultAtomData["abstract"]["urlParams"] &&
				resultAtomData["abstract"]["urlParams"]["tcUrl"]
			) {
				let url = BaiduResultItem.parseURLParamsOriginURL(
					resultAtomData["abstract"]["urlParams"]
				);
				if (url) {
					urlMap.set(resultAtomData["abstract"]["urlParams"]["tcUrl"], url);
				}
			}
			if (
				resultAtomData["content"] &&
				resultAtomData["content"]["abstract"] &&
				resultAtomData["content"]["abstract"]["urlParams"] &&
				resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"]
			) {
				let url = BaiduResultItem.parseURLParamsOriginURL(
					resultAtomData["content"]["abstract"]["urlParams"]
				);
				if (url) {
					urlMap.set(
						resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"],
						url
					);
				}
			}
			if (
				resultAtomData["content"] &&
				resultAtomData["content"]["links"] &&
				resultAtomData["content"]["links"]["list"]
			) {
				resultAtomData["content"]["links"]["list"].forEach((item: any[]) => {
					item.forEach((item2) => {
						if (item2["urlParams"]["tcUrl"]) {
							let url = BaiduResultItem.parseURLParamsOriginURL(
								item2["urlParams"]
							);
							if (url) {
								urlMap.set(item2["urlParams"]["tcUrl"], url);
							}
						}
					});
				});
			}
			if (resultAtomData["content"] && resultAtomData["content"]["site"]) {
				resultAtomData["content"]["site"]["list"].forEach(
					(item: { [x: string]: { [x: string]: any } }) => {
						if (item["urlParams"]["tcUrl"]) {
							let url = BaiduResultItem.parseURLParamsOriginURL(
								item["urlParams"]
							);
							if (url) {
								urlMap.set(item["urlParams"]["tcUrl"], url);
							}
						}
					}
				);
			}
		});
		return urlMap;
	},
	/**
	 * 判断传入的链接是否不是正确的真实链接
	 * @param url
	 */
	isNotRlLinkUrl(url: string) {
		if (utils.isNull(url)) {
			return true;
		}
		if (typeof url !== "string") {
			return true;
		}
		if (!url.startsWith("http")) {
			return true;
		}
		if (url.match(/^http(s|):\/\/nourl\.(ubs\.|)baidu\.com/gi)) {
			return true;
		}
		return false;
	},
	/**
	 * 解析DOM节点上隐藏在属性中的真正url
	 * @param element 目标元素
	 */
	parseDOMAttrOriginUrl(element: HTMLElement) {
		let url = null;
		let dataLogStr = element.getAttribute("data-log");
		let $article = element.querySelector("article");
		if (dataLogStr && dataLogStr !== "{") {
			/* 百度在a标签上的data-log="{" */
			try {
				let dataLog = utils.toJSON(dataLogStr);
				url = dataLog.mu;
			} catch (error) {
				log.error("DOM的属性data-log不存在👇");
				log.error(error);
			}
		}
		if (this.isNotRlLinkUrl(url)) {
			let rlLinkDataUrl =
				$article?.getAttribute("rl-link-data-url") ||
				element.getAttribute("rl-link-data-url");
			if (rlLinkDataUrl) {
				url = rlLinkDataUrl;
			}
		}

		if (this.isNotRlLinkUrl(url)) {
			let dataIVKStr = element.getAttribute("data-ivk");
			if (dataIVKStr) {
				try {
					let dataIVK = utils.toJSON(dataIVKStr);
					if (
						dataIVK?.control?.default_url &&
						!BaiduResultItem.isBaiDuTransferStation(
							dataIVK?.control?.default_url
						)
					) {
						url = dataIVK?.control?.default_url;
					} else if (
						dataIVK?.control?.dataUrl &&
						!BaiduResultItem.isBaiDuTransferStation(dataIVK?.control?.dataUrl)
					) {
						url = dataIVK?.control?.dataUrl;
					} else if (
						dataIVK?.control?.ext?.url &&
						!BaiduResultItem.isBaiDuTransferStation(dataIVK?.control?.ext?.url)
					) {
						url = dataIVK?.control?.ext?.url;
					}
				} catch (error) {
					log.error("DOM的属性data-ivk不存在👇");
					log.error(error);
				}
			}
		}

		if (this.isNotRlLinkUrl(url)) {
			let rlLinkDataLogStr = element.getAttribute("rl-link-data-log");
			if (rlLinkDataLogStr) {
				try {
					let rlLinkDataLog = utils.toJSON(rlLinkDataLogStr);
					if (utils.isNull(rlLinkDataLog.mu) && rlLinkDataLog.extra) {
						try {
							let rlLinkDataLogExtra = utils.toJSON(rlLinkDataLog.extra);
							if (
								rlLinkDataLogExtra.loc &&
								!BaiduResultItem.isBaiDuTransferStation(rlLinkDataLogExtra.loc)
							) {
								url = decodeURIComponent(rlLinkDataLogExtra.loc);
							} else if (
								rlLinkDataLogExtra.log_loc &&
								!BaiduResultItem.isBaiDuTransferStation(
									rlLinkDataLogExtra.log_loc
								)
							) {
								url = decodeURIComponent(rlLinkDataLogExtra.log_loc);
							}
						} catch (error) {
							log.error("DOM的属性rl-link-data-log的extra不存在👇");
							log.error(error);
						}
					} else {
						url = rlLinkDataLog.mu;
					}
				} catch (error) {
					log.error("DOM的属性rl-link-data-log不存在👇");
					log.error(error);
				}
			}
		}

		if (this.isNotRlLinkUrl(url)) {
			let rlLinkDataIvkStr = element.getAttribute("rl-link-data-ivk");
			if (rlLinkDataIvkStr) {
				try {
					let rlLinkDataIvk = utils.toJSON(rlLinkDataIvkStr);
					if (
						rlLinkDataIvk?.control?.default_url &&
						!BaiduResultItem.isBaiDuTransferStation(
							rlLinkDataIvk?.control?.default_url
						)
					) {
						url = rlLinkDataIvk?.control?.default_url;
					} else if (
						rlLinkDataIvk?.control?.invoke_url &&
						!BaiduResultItem.isBaiDuTransferStation(
							rlLinkDataIvk?.control?.invoke_url
						)
					) {
						url = rlLinkDataIvk?.control?.invoke_url;
					} else if (
						rlLinkDataIvk?.control?.ext?.url &&
						!BaiduResultItem.isBaiDuTransferStation(
							rlLinkDataIvk?.control?.ext?.url
						)
					) {
						url = rlLinkDataIvk?.control?.ext?.url;
					}
				} catch (error) {
					log.error("DOM的属性rl-link-data-ivk不存在👇");
					log.error(error);
				}
			}
		}

		if (this.isNotRlLinkUrl(url)) {
			let articleDataLogStr = $article?.getAttribute("rl-link-data-log");
			if (articleDataLogStr) {
				try {
					let articleDataLog = utils.toJSON(articleDataLogStr);
					url = articleDataLog.mu;
				} catch (error) {
					log.error("article DOM的属性的rl-link-data-log不存在👇");
					log.error(element);
				}
			}
		}
		if (this.isNotRlLinkUrl(url)) {
			let articleLinkDataIVKStr = $article?.getAttribute("rl-link-data-ivk");
			if (articleLinkDataIVKStr) {
				try {
					let articleLinkDataIVK = utils.toJSON(articleLinkDataIVKStr);
					if (
						articleLinkDataIVK?.control?.default_url &&
						!BaiduResultItem.isBaiDuTransferStation(
							articleLinkDataIVK?.control?.default_url
						)
					) {
						url = articleLinkDataIVK?.control?.default_url;
					} else if (
						articleLinkDataIVK?.control?.dataUrl &&
						!BaiduResultItem.isBaiDuTransferStation(
							articleLinkDataIVK?.control?.dataUrl
						)
					) {
						url = articleLinkDataIVK?.control?.dataUrl;
					}
				} catch (error) {
					log.error("article DOM的属性rl-link-data-ivk不存在👇");
					log.error(error);
				}
			}
		}

		if (this.isNotRlLinkUrl(url)) {
			url = null;
			/* log.error(["未在元素节点中找到隐藏的原始URL", jQDOM]); */
		} else {
			/* 对每个中文字符进行编码 */
			let chineseArr = url.match(/[\u4e00-\u9fa5]/g);
			if (chineseArr) {
				for (let i = 0; i < chineseArr.length; i++) {
					url = url.replace(chineseArr[i], encodeURI(chineseArr[i]));
				}
			}
		}

		if (this.isNotRlLinkUrl(url)) {
			/* 最新资讯上的隐藏的链接 */
			let labelUrl = element.getAttribute("label-url");
			if (labelUrl) {
				url = labelUrl;
			}
		}
		/* 因为链接中存在%25，需要正确替换成% */
		if (
			!this.isNotRlLinkUrl(url) &&
			utils.startsWith(url, "http(s|)://(m[0-9]{0,2}|www).baidu.com/sf?")
		) {
			url = decodeURIComponent(url);
			/* url = url.replaceAll("%25","%") */
		}
		/* 有些url是错误的， */
		if (!this.isNotRlLinkUrl(url)) {
			if (utils.startsWith(url, "http(s|)://nourl.baidu.com")) {
				url = "";
			}
		}
		return url;
	},
	/**
	 * 获取每一项的标题元素
	 * @param targetNode 目标项
	 */
	getItemTitleElement(targetNode: HTMLElement) {
		return (targetNode.querySelector(".c-title-text") ||
			targetNode.querySelector("p.cu-title") ||
			targetNode.querySelector("div[class^=header-wrapper]") ||
			targetNode.querySelector(".c-title")) as HTMLDivElement;
	},
	/**
	 * 添加CSDN的CSS
	 */
	addCSDNFlagCSS() {
		addStyle(`
        .csdn-flag-component-box{display:flex;margin:0;text-align:left;font-size:0;position:relative;width:260px;margin:5px 0}
        .csdn-flag-component-box a{display:inline-block;font-size:14px}
        .csdn-flag-component-box .praise {
            padding-right: 20px;
            background: #ff5722;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
            background: -webkit-linear-gradient(left,#ff5722,#f78d6b);
            background: -o-linear-gradient(right,#ff5722,#f78d6b);
            background: -moz-linear-gradient(right,#ff5722,#f78d6b);
            background: linear-gradient(to right,#ff5722,#f78d6b);
        }
        .csdn-flag-component-box .praise,
        .csdn-flag-component-box .share {
            height:auto;
            line-height:normal;
            color: #fff;
            background: #ff0505;
            border-radius: 5px;
            padding: 2px 4px;
        }`);
	},
	/**
	 * 给元素添加【CSDN】下载标识
	 * @param $result
	 */
	addCSDNFlag($result: HTMLElement) {
		if ($result.querySelector<HTMLDivElement>(".csdn-flag-component-box")) {
			return;
		}
		let $titleText = BaiduResultItem.getItemTitleElement($result);
		if ($titleText) {
			DOMUtils.append(
				$titleText,
				`<div class="csdn-flag-component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`
			);
			log.success("插入CSDN下载提示标题");
		}
	},
	/**
	 * 移除广告、推广
	 */
	removeAds() {
		if (
			PopsPanel.getValue("baidu_search_blocking_everyone_is_still_searching")
		) {
			let pageRelativeElement = document.querySelectorAll("#page-relative");
			if (pageRelativeElement.length) {
				log.success(
					`删除广告位 ==> 末尾 大家都在搜 ${pageRelativeElement.length}个`
				);
				DOMUtils.remove(pageRelativeElement);
			}
			let centerRecommandWarpperElement = document.querySelectorAll(
				".c-recomm-wrap.new-ux-recom-wrapper.c-bg-color-white.animation"
			);
			if (centerRecommandWarpperElement.length) {
				log.success(
					`删除广告位 ==> 中间 大家都在搜 ${centerRecommandWarpperElement.length}个`
				);
				DOMUtils.remove(centerRecommandWarpperElement);
			}
			let relativewordsElement = document.querySelectorAll("#relativewords");
			if (relativewordsElement.length) {
				log.success(
					`删除广告位 ==> 简单搜索加载下一页出现的 大家都在搜 ${relativewordsElement.length}个`
				);
				DOMUtils.remove(relativewordsElement);
			}
		} else {
			if (SearchResultEveryOneSearch.refactorEveryoneIsStillSearching) {
				/* 重构大家都在搜 */
				SearchResultEveryOneSearch.handleBottom(
					Array.from(document.querySelectorAll("#page-relative"))
				);
				SearchResultEveryOneSearch.handleCenter(
					Array.from(
						document.querySelectorAll('.c-result.result[tpl^="recommend_list"]')
					)
				);
			}
		}
		let popUpElement = document.querySelectorAll("#pop-up");
		if (popUpElement.length) {
			log.success(`删除 ==> 跳转百度app提示 ${popUpElement.length}个`);
			DOMUtils.remove(popUpElement);
		}
		let ecWiseAdElement = document.querySelectorAll(".ec_wise_ad");
		if (ecWiseAdElement.length) {
			log.success(`删除 ==> 顶部的部分商品广告 ${ecWiseAdElement.length}个`);
			DOMUtils.remove(DOMUtils.parent(ecWiseAdElement));
		}

		document
			.querySelectorAll<HTMLDivElement>(".c-result.result")
			.forEach(($result) => {
				/* 获取属性上的LOG */
				let dataLog = utils.toJSON($result.getAttribute("data-log"));
				/* 真实链接 */
				let searchArticleOriginal_link =
					dataLog["mu"] ||
					$result.querySelector("article")?.getAttribute("rl-link-href");
				if (
					utils.isNotNull(searchArticleOriginal_link) &&
					BaiduSearchRule.handleCustomRule($result, searchArticleOriginal_link)
				) {
					log.info(["触发自定义规则，拦截该项：", searchArticleOriginal_link]);
					$result.remove();
					return;
				}
				// 禁止自动播放视频
				// 原自定义规则：remove-child##[class*='-video-player']
				// 因为直接删除播放视频的元素会导致在webview和Safari上第一个智能卡片上的按钮点击无法应，如更多按钮
				if (PopsPanel.getValue("baidu-search-blockAutomaticVideoPlayback")) {
					$result
						.querySelectorAll("[class*='-video-player']")
						.forEach((ele) => ele.remove());
				}
				if (utils.isNotNull(searchArticleOriginal_link)) {
					/* 添加CSDN下载标识 */
					if (
						searchArticleOriginal_link.match(
							/^http(s|):\/\/(download.csdn.net|www.iteye.com\/resource)/g
						)
					) {
						log.success("添加CSDN下载标识");
						BaiduResultItem.addCSDNFlag($result);
					}
				}
				if (
					PopsPanel.getValue(
						"baidu_search_blocking_everyone_is_still_searching"
					)
				) {
					let $title = $result.querySelector<HTMLDivElement>(
						".rw-little-title"
					) as HTMLDivElement;
					if ($title && $title.textContent?.startsWith("大家还在搜")) {
						$result?.remove();
						log.success("删除广告 ==> 大家都在搜（能看到的）");
					}
					/* APP内打开 */
					$result.querySelectorAll("span").forEach((item) => {
						let resultParentElement = item.parentElement
							?.parentElement as HTMLElement;
						if (
							item.innerText.match(/百度APP内打开/) ||
							resultParentElement.getAttribute("data-from") === "etpl"
						) {
							resultParentElement.remove();
							log.success(
								"删除广告 ==> 百度APP内打开，隐藏的广告，会在滚动时跳出来的"
							);
						}
					});
				}
				/* 底部标识 */
				Array.from(
					$result.querySelectorAll<HTMLDivElement>(".c-color-source")
				).forEach(($bottomLogo) => {
					if ($bottomLogo.outerText?.match(/百度(APP内打开|手机助手)/)) {
						$result.remove();
						log.success("删除广告 ==> 百度APP内打开|百度手机助手");
					}
				});
			});
	},
	/**
	 * 重定向顶部的链接，如全部、视频、图片、贴吧、咨询...
	 */
	redirectTopLink() {
		document.querySelectorAll(".se-head-tablink a").forEach((item) => {
			if (
				item.hasAttribute("data-sflink") &&
				!utils.isNull(item.getAttribute("data-sflink")) &&
				BaiduResultItem.isBaiDuTransferStation(
					item.getAttribute("href") as string
				) &&
				item.getAttribute("href") !== item.getAttribute("data-sflink")
			) {
				/* log.success(
                  "重定向顶部按钮: " + item.outerText.trim(),
                  "#ba00f8"
                ); */
				(item as HTMLAnchorElement).href = item.getAttribute(
					"data-sflink"
				) as string;
			}
		});
	},
	/**
	 * 删除script标签中的百度APP提示
	 */
	replaceScriptBaiDuTip() {
		document.querySelectorAll("script").forEach((item) => {
			if (item.innerText.match(/define\(\"@molecule\/aftclk\/index\",/g)) {
				item.remove();
				log.success("删除广告 ==> script元素 跳转百度app提示");
			}
		});
	},
	/**
	 * 替换链接
	 */
	async replaceLink() {
		let searchResultList = Array.from(
			document.querySelectorAll<HTMLDivElement>(".c-result.result")
		);
		for (const searchResultItem of searchResultList) {
			let resultItemOriginURL =
				BaiduResultItem.parseDOMAttrOriginUrl(searchResultItem);
			/* 根据已获取的真实链接取值 */
			if (utils.isNull(resultItemOriginURL)) {
				/* 未取到值 */
				continue;
			}
			let articleElement = searchResultItem.querySelector("article");
			/* 不处理没有article标签的元素 */
			if (!articleElement) {
				continue;
			}
			/* 移除属性rl-link-data-click，猜测该属性是用于点击事件触发 */
			// articleElement.removeAttribute("rl-link-data-click");
			/* ivk应该是invoke缩写，可能是调用跳转百度APP */
			// articleElement.removeAttribute("rl-link-data-ivk");
			/* 不对黑名单链接进行处理 */
			if (BaiduResultItem.isBlackList(resultItemOriginURL)) {
				log.error("黑名单链接不进行替换👉" + resultItemOriginURL);
				continue;
			}

			if (
				searchResultItem.getAttribute("tpl") === "wenda_abstract" &&
				searchResultItem.getAttribute("preventClick") == null
			) {
				/* 该item为搜索智能生成该为点击该块，获取url进行跳转 */
				searchResultItem.setAttribute("preventClick", "true");
				DOMUtils.on<MouseEvent | PointerEvent>(
					searchResultItem,
					"click",
					function (event) {
						utils.preventEvent(event);
						let clickNode = event.target as HTMLElement;
						if (
							clickNode.localName &&
							clickNode.localName === "sup" &&
							clickNode.getAttribute("rl-type") === "stop"
						) {
							return;
						} else {
							window.stop();
							window.location.href = decodeURI(resultItemOriginURL);
						}
					}
				);
				continue;
			}

			/* 视频 */
			if (
				resultItemOriginURL.match(/^http(s|):\/\/www.internal.video.baidu.com/g)
			) {
				let internalVideo = decodeURI(
					articleElement.getAttribute("rl-link-data-log") as string
				);
				let internalVideoMatch = internalVideo.match(
					/\/sf\?pd=video_pag(.*?)={/g
				);
				if (internalVideoMatch) {
					let internalVideoText = internalVideoMatch[0];
					let newinternalVideo = internalVideoText.substring(
						0,
						internalVideoMatch.length - 2
					);
					resultItemOriginURL = newinternalVideo;
					log.info(`视频链接 ${newinternalVideo}`);
				}
			}
			/* 替换链接 */
			BaiduResultItem.setArticleOriginUrl(
				searchResultItem,
				resultItemOriginURL
			);
			articleElement.setAttribute("rl-link-href", resultItemOriginURL);
		}
	},
	/**
	 * 替换链接-vsearch
	 */
	replaceVSearchLink() {
		document
			.querySelectorAll<HTMLDivElement>("#realtime-container  div:not([class])")
			.forEach((element) => {
				let linkElement = element.querySelector<HTMLAnchorElement>("a");
				if (!linkElement) {
					return;
				}
				if (linkElement.hasAttribute("data-sf-visited")) {
					let dataSfVisited = linkElement.getAttribute(
						"data-sf-visited"
					) as string;
					if (dataSfVisited !== linkElement.href) {
						linkElement!.href = dataSfVisited;
						log.success("替换链接  " + dataSfVisited);
					}
				}
			});
	},
};

export { BaiduResultItem };
