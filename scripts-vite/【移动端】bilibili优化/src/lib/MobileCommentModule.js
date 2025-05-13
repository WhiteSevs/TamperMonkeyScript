// @ts-nocheck
import Viewer from "viewerjs";
import { wbi } from "./wbi";
import { b2a } from "./b2a";
import { unsafeWindow } from "ViteGM";
/*
 * Comment module for https://greasyfork.org/scripts/497732
 * @version v0.0.1.20250408145554
 */
export const MobileCommentModule = (function () {
	"use strict";

	// patch for 'unsafeWindow is not defined'
	const global = typeof unsafeWindow === "undefined" ? window : unsafeWindow;

	// RegExp
	const videoRE = /https:\/\/m\.bilibili\.com\/video\/.*/;
	const dynamicRE = /https:\/\/m.bilibili.com\/dynamic\/\d+/;
	const opusRE = /https:\/\/m.bilibili.com\/opus\/\d+/;

	// essential data or elements
	let oid, createrID, commentType, replyList;

	// define sort types
	const sortTypeConstant = { LATEST: 0, HOT: 2 };
	let currentSortType;

	// offset data for time sort
	let timeSortOffsets;

	// use to prevent loading duplicated main reply
	let replyPool;

	// ---------- variables above ----------

	// help to get oid and comment type in dynamic page
	if (dynamicRE.test(global.location.href)) setupXHRInterceptor();

	// add style patch
	addStyle();

	return { init };

	// ---------- functions below ----------

	async function init(commentModuleWrapper) {
		// initialize
		oid = createrID = commentType = undefined;
		replyPool = {};
		currentSortType = sortTypeConstant.HOT;

		// setup standard comment container & get reply list
		setupStandardCommentContainer(commentModuleWrapper);
		replyList = commentModuleWrapper.querySelector(".reply-list");

		// collect oid & commentType
		await new Promise((resolve) => {
			const timer = setInterval(async () => {
				if (videoRE.test(global.location.href)) {
					const videoID = global.location.pathname
						.replace("/video/", "")
						.replace("/", "");
					if (videoID.startsWith("av")) oid = videoID.slice(2);
					if (videoID.startsWith("BV")) oid = b2a(videoID);
					commentType = 1;
				} else if (dynamicRE.test(global.location.href)) {
					oid = global.dynamicDetail?.oid;
					commentType = global.dynamicDetail?.commentType;
				} else if (opusRE.test(global.location.href)) {
					oid = global?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_id_str;
					commentType =
						global?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_type; // should be '11'
				}

				// final check
				if (oid && commentType) {
					clearInterval(timer);
					resolve();
				}
			}, 200);
		});

		// enable switching sort type
		await enableSwitchingSortType(commentModuleWrapper);

		// load first pagination
		await loadFirstPagination(commentModuleWrapper);
	}

	function setupStandardCommentContainer(commentModuleWrapper) {
		commentModuleWrapper.innerHTML = `
        <div class="comment-container">
          <div class="reply-header">
            <div class="reply-navigation">
              <ul class="nav-bar">
                <li class="nav-title">
                  <span class="nav-title-text">评论</span>
                  <span class="total-reply">-</span>
                </li>
                <li class="nav-sort hot">
                  <div class="hot-sort">最热</div>
                  <div class="part-symbol"></div>
                  <div class="time-sort">最新</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="reply-warp">
            <div class="reply-list"></div>
          </div>  
        </div>
      `;
	}

	async function enableSwitchingSortType(commentModuleWrapper) {
		// collect elements
		const navSortElement = commentModuleWrapper.querySelector(
			".comment-container .reply-header .nav-sort"
		);
		const hotSortElement = navSortElement.querySelector(".hot-sort");
		const timeSortElement = navSortElement.querySelector(".time-sort");

		// reset classes
		navSortElement.classList.add("hot");
		navSortElement.classList.remove("time");

		// setup click event listener
		hotSortElement.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
			if (currentSortType === sortTypeConstant.HOT) return;
			currentSortType = sortTypeConstant.HOT;
			navSortElement.classList.add("hot");
			navSortElement.classList.remove("time");
			commentModuleWrapper.scrollTo(0, 0);
			loadFirstPagination(commentModuleWrapper);
		});

		timeSortElement.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
			if (currentSortType === sortTypeConstant.LATEST) return;
			currentSortType = sortTypeConstant.LATEST;
			navSortElement.classList.add("time");
			navSortElement.classList.remove("hot");
			commentModuleWrapper.scrollTo(0, 0);
			loadFirstPagination(commentModuleWrapper);
		});
	}

	async function loadFirstPagination(commentModuleWrapper) {
		// reset offset data
		timeSortOffsets = { 1: `{"offset":""}` };

		// get data of first pagination
		const { data: firstPaginationData, code: resultCode } =
			await getPaginationData(1);

		// get creater ID
		createrID = firstPaginationData.upper.mid;

		// clear replyList
		replyList.innerHTML = "";

		// clear replyPool
		replyPool = {};

		// clear bottom modules
		document
			.querySelector(".comment-container .reply-warp .no-more-replies-info")
			?.remove();
		document
			.querySelector(".comment-container .reply-warp .anchor-for-loading")
			?.remove();

		// script ends here if not able to fetch pagination data
		if (resultCode !== 0) {
			// ref: BV12r4y147Bj
			const info =
				resultCode === 12061 ? "UP主已关闭评论区" : "无法从API获取评论数据";
			replyList.innerHTML = `<p style="padding: 100px 0; text-align: center; color: #999;">${info}</p>`;
			return;
		}

		// load reply count
		const totalReplyElement = commentModuleWrapper.querySelector(
			".comment-container .reply-header .total-reply"
		);
		const totalReplyCount =
			parseInt(firstPaginationData?.cursor?.all_count) || 0;
		totalReplyElement.textContent = totalReplyCount;

		// check whether replies are selected
		// ref: BV1Dy2mY3EGy
		if (firstPaginationData?.cursor?.name?.includes("精选")) {
			const navSortElement = commentModuleWrapper.querySelector(
				".comment-container .reply-header .nav-sort"
			);
			navSortElement.innerHTML = `<div class="selected-sort">精选评论</div>`;
		}

		// get top reply data from latest sort mode
		if (currentSortType === sortTypeConstant.HOT) {
			currentSortType = sortTypeConstant.LATEST;
			firstPaginationData.top_replies = await getPaginationData(1).then(
				(result) => result.data.top_replies
			);
			currentSortType = sortTypeConstant.HOT;
		}

		// load the top reply if it exists
		if (
			firstPaginationData.top_replies &&
			firstPaginationData.top_replies.length !== 0
		) {
			const topReplyData = firstPaginationData.top_replies[0];
			appendReplyItem(topReplyData, true);
		}

		// script ends here if there are no more replies
		if (firstPaginationData.replies.length === 0) {
			const infoElement = document.createElement("p");
			infoElement.classList.add("no-more-replies-info");
			infoElement.style =
				"padding-bottom: 100px; text-align: center; color: #999;";
			infoElement.textContent = "没有更多评论";
			document
				.querySelector(".comment-container .reply-warp")
				.appendChild(infoElement);
			return;
		}

		// load normal replies
		for (const replyData of firstPaginationData.replies) {
			appendReplyItem(replyData);
		}

		// add page loader
		addAnchor();
	}

	async function getPaginationData(paginationNumber) {
		const params = {
			oid,
			type: commentType,
			wts: parseInt(Date.now() / 1000),
		};

		if (currentSortType === sortTypeConstant.HOT) {
			params.mode = 3;
			params.pagination_str = `{"offset":"{\\"type\\":1,\\"data\\":{\\"pn\\":${paginationNumber}}}"}`;
			return await fetch(
				`https://api.bilibili.com/x/v2/reply/wbi/main?${await wbi(params)}`
			).then((res) => res.json());
		}

		if (currentSortType === sortTypeConstant.LATEST) {
			params.mode = 2;
			params.pagination_str = timeSortOffsets[paginationNumber];
			const fetchResult = await fetch(
				`https://api.bilibili.com/x/v2/reply/wbi/main?${await wbi(params)}`
			).then((res) => res.json());

			// prepare offset data of next pagination
			if (fetchResult.code === 0) {
				const nextOffset = fetchResult.data.cursor.pagination_reply.next_offset;
				let nextOffsetObject = null;
				try {
					// 例如这个视频下的评论区获取到的next_offset不是一个对象字符串，而是一个普通的字符串，进行序列化会发生错误
					// https://m.bilibili.com/video/BV1tf5NzEE5r
					nextOffset = JSON.parse(nextOffset);
				} catch (error) {
					console.warn(
						"MobileCommentModule next_offset serialize error",
						error
					);
				}
				const cursor = nextOffset ? nextOffsetObject?.Data?.cursor : -1;
				timeSortOffsets[
					paginationNumber + 1
				] = `{"offset":"{\\"type\\":3,\\"data\\":{\\"cursor\\":${cursor}}}"}`;
			} else {
				fetchResult.data = fetchResult.data || {};
			}

			return fetchResult;
		}
	}

	function appendReplyItem(replyData, isTopReply) {
		if (replyPool[replyData.rpid_str]) return;

		const replyItemElement = document.createElement("div");
		replyItemElement.classList.add("reply-item");
		replyItemElement.innerHTML = `
        <div class="root-reply-container">
          <a class="root-reply-avatar" href="https://space.bilibili.com/${
						replyData.mid
					}" target="_blank" data-user-id="${
			replyData.mid
		}" data-root-reply-id="${replyData.rpid}">
            <div class="avatar">
              <div class="bili-avatar">
                <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${
									replyData.member.avatar
								}" alt="" src="${replyData.member.avatar}">
                <span class="bili-avatar-icon bili-avatar-right-icon bili-avatar-size-40"></span>
              </div>
            </div>
          </a>
          <div class="content-warp">
            <div class="user-info">
              <a class="user-name" href="https://space.bilibili.com/${
								replyData.mid
							}" target="_blank" data-user-id="${
			replyData.mid
		}" data-root-reply-id="${replyData.rpid}" style="color: ${
			replyData.member.vip.nickname_color
				? replyData.member.vip.nickname_color
				: "#61666d"
		}">${replyData.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${getMemberLevelColor(
								replyData.member.level_info.current_level
							)};">LV${replyData.member.level_info.current_level}</span>
              ${
								createrID === replyData.mid
									? '<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>'
									: ""
							}
            </div>
            <div class="root-reply">
              <span class="reply-content-container root-reply" style="padding-bottom: 8px;">
                <span class="reply-content">${
									isTopReply
										? '<span class="top-icon" style="top: -1px;">置顶</span>'
										: ""
								}${
			replyData.content.pictures
				? `<div class="note-prefix" style="transform: translateY(-1px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>`
				: ""
		}${getConvertedMessage(replyData.content)}</span>
              </span>
              ${
								replyData.content.pictures
									? `
                <div class="image-exhibition" style="margin-top: 0; margin-bottom: 8px;">
                  <div class="preview-image-container" style="display: flex; width: 300px;">
                    ${getImageItems(replyData.content.pictures)}
                  </div>
                </div>
                `
									: ""
							}
              <div class="reply-info">
                <span class="reply-time" style="margin-right: 20px;">${getFormattedTime(
									replyData.ctime
								)}</span>
                <span class="reply-like">
                  <i class="svg-icon like use-color like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                  <span>${replyData.like}</span>
                </span>
              </div>
              <div class="reply-tag-list">
                ${
									replyData.card_label
										? replyData.card_label.reduce(
												(acc, cur) =>
													acc +
													`<span class="reply-tag-item ${
														cur.text_content === "热评" ? "reply-tag-hot" : ""
													} ${
														cur.text_content === "UP主觉得很赞"
															? "reply-tag-liked"
															: ""
													}" style="font-size: 12px; background-color: ${
														cur.label_color_day
													}; color: ${cur.text_color_day};">${
														cur.text_content
													}</span>`,
												""
										  )
										: ""
								}
              </div>
            </div>
          </div>
        </div>
        <div class="sub-reply-container">
          <div class="sub-reply-list">
            ${getSubReplyItems(replyData.replies)}
            ${
							replyData.rcount > replyData.replies.length
								? `
              <div class="view-more" style="padding-left: 8px; font-size: 13px; color: #9499A0;">
                <div class="view-more-default">
                  <span>共${replyData.rcount}条回复, </span>
                  <span class="view-more-btn" style="cursor: pointer;">点击查看</span>
                </div>
              </div>
              `
								: ""
						}
          </div>
        </div>
      `;
		replyList.appendChild(replyItemElement);
		replyPool[replyData.rpid_str] = true;

		// setup image viewer
		const previewImageContainer = replyItemElement.querySelector(
			".preview-image-container"
		);
		if (previewImageContainer)
			new Viewer(previewImageContainer, {
				title: false,
				toolbar: false,
				tooltip: false,
				keyboard: false,
			});

		// setup view more button
		const subReplyList = replyItemElement.querySelector(".sub-reply-list");
		const viewMoreBtn = replyItemElement.querySelector(".view-more-btn");
		viewMoreBtn &&
			viewMoreBtn.addEventListener("click", () =>
				loadPaginatedSubReplies(
					replyData.rpid,
					subReplyList,
					replyData.rcount,
					1
				)
			);
	}

	function getFormattedTime(ms) {
		const time = new Date(ms * 1000);
		const year = time.getFullYear();
		const month = (time.getMonth() + 1).toString().padStart(2, "0");
		const day = time.getDate().toString().padStart(2, "0");
		const hour = time.getHours().toString().padStart(2, "0");
		const minute = time.getMinutes().toString().padStart(2, "0");
		return `${year}-${month}-${day} ${hour}:${minute}`;
	}

	function getMemberLevelColor(level) {
		return {
			0: "#C0C0C0",
			1: "#BBBBBB",
			2: "#8BD29B",
			3: "#7BCDEF",
			4: "#FEBB8B",
			5: "#EE672A",
			6: "#F04C49",
		}[level];
	}

	function getConvertedMessage(content) {
		let result = content.message;

		// built blacklist of keyword, to avoid being converted to link incorrectly
		const keywordBlacklist = [
			"https://www.bilibili.com/video/av",
			"https://b23.tv/mall-",
		];

		// convert vote to link
		if (content.vote && content.vote.deleted === false) {
			const linkElementHTML = `<a class="jump-link normal" href="${content.vote.url}" target="_blank" noopener noreferrer>${content.vote.title}</a>`;
			keywordBlacklist.push(linkElementHTML);
			result = result.replace(`{vote:${content.vote.id}}`, linkElementHTML);
		}

		// convert emote tag to image
		if (content.emote) {
			for (const [key, value] of Object.entries(content.emote)) {
				const imageElementHTML = `<img class="emoji-${
					["", "small", "large"][value.meta.size]
				}" src="${value.url}" alt="${key}">`;
				keywordBlacklist.push(imageElementHTML);
				result = result.replaceAll(key, imageElementHTML);
			}
		}

		// convert timestamp to link
		result = result.replaceAll(/(\d{1,2}[:：]){1,2}\d{1,2}/g, (timestamp) => {
			timestamp = timestamp.replaceAll("：", ":");

			// return plain text if no video in page
			if (!videoRE.test(global.location.href)) return timestamp;

			const parts = timestamp.split(":");
			// return plain text if any part of timestamp equal to or bigger than 60
			if (parts.some((part) => parseInt(part) >= 60)) return timestamp;

			let totalSecond;
			if (parts.length === 2)
				totalSecond = parseInt(parts[0]) * 60 + parseInt(parts[1]);
			else if (parts.length === 3)
				totalSecond =
					parseInt(parts[0]) * 3600 +
					parseInt(parts[1]) * 60 +
					parseInt(parts[2]);
			// return plain text if failed to get vaild number of second
			if (Number.isNaN(totalSecond)) return timestamp;

			const linkElementHTML = `<a class="jump-link video-time" onclick="(async () => {
          // jump to exact time
          const videoElement = document.querySelector('video.gsl-video');
          videoElement.currentTime = ${totalSecond};
  
          // close comment module
          document.querySelector('.close-comment-module-btn').click();
  
          // scroll to top
          window.scrollTo(0, 0);
  
          // play video if it is paused
          if (videoElement.paused) videoElement.play();
        })()">${timestamp}</a>`;
			keywordBlacklist.push(linkElementHTML);

			return linkElementHTML;
		});

		// convert @ user
		if (content.at_name_to_mid) {
			for (const [key, value] of Object.entries(content.at_name_to_mid)) {
				const linkElementHTML = `<a class="jump-link user" data-user-id="${value}" href="https://space.bilibili.com/${value}" target="_blank" noopener noreferrer>@${key}</a>`;
				keywordBlacklist.push(linkElementHTML);
				result = result.replaceAll(`@${key}`, linkElementHTML);
			}
		}

		// convert url to link
		if (Object.keys(content.jump_url).length) {
			// make sure links are converted first
			const entries = [].concat(
				Object.entries(content.jump_url).filter((entry) =>
					entry[0].startsWith("https://")
				),
				Object.entries(content.jump_url).filter(
					(entry) => !entry[0].startsWith("https://")
				)
			);

			for (const [key, value] of entries) {
				const href =
					key.startsWith("BV") || /^av\d+$/.test(key)
						? `https://www.bilibili.com/video/${key}`
						: value.pc_url || key;
				if (
					href.includes("search.bilibili.com") &&
					keywordBlacklist.join("").includes(key)
				)
					continue;
				const linkElementHTML = `<img class="icon normal" src="${
					value.prefix_icon
				}" style="${
					value.extra && value.extra.is_word_search && "width: 12px;"
				}"><a class="jump-link normal" href="${href}" target="_blank" noopener noreferrer>${
					value.title
				}</a>`;
				keywordBlacklist.push(linkElementHTML);
				result = result.replaceAll(key, linkElementHTML);
			}
		}

		return result;
	}

	function getImageItems(images) {
		let imageSizeConfig = "width: 84px; height: 84px;";
		if (images.length === 1)
			imageSizeConfig = "max-width: 260px; max-height: 180px;";
		if (images.length === 2) imageSizeConfig = "width: 128px; height: 128px;";

		let result = "";
		for (const image of images) {
			result += `<div class="image-item-wrap" style="margin-top: 4px; margin-right: 4px; cursor: zoom-in;"><img src="${image.img_src}" style="border-radius: 4px; ${imageSizeConfig}"></div>`;
		}
		return result;
	}

	function getSubReplyItems(subReplies) {
		if (!(subReplies instanceof Array)) return "";

		let result = "";
		for (const replyData of subReplies) {
			result += `
          <div class="sub-reply-item">
            <div class="sub-user-info">
              <a class="sub-reply-avatar" href="https://space.bilibili.com/${
								replyData.mid
							}" target="_blank" data-user-id="${
				replyData.mid
			}" data-root-reply-id="${replyData.rpid}">
                <div class="avatar">
                  <div class="bili-avatar">
                    <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${
											replyData.member.avatar
										}" alt="" src="${replyData.member.avatar}">
                    <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-24"></span>
                  </div>
                </div>
              </a>
              <a class="sub-user-name" href="https://space.bilibili.com/${
								replyData.mid
							}" target="_blank" data-user-id="${
				replyData.mid
			}" data-root-reply-id="${replyData.rpid}" style="color: ${
				replyData.member.vip.nickname_color
					? replyData.member.vip.nickname_color
					: "#61666d"
			}">${replyData.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${getMemberLevelColor(
								replyData.member.level_info.current_level
							)};">LV${replyData.member.level_info.current_level}</span>
              ${
								createrID === replyData.mid
									? `<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>`
									: ""
							}
            </div>
            <span class="reply-content-container sub-reply-content">
              <span class="reply-content">${getConvertedMessage(
								replyData.content
							)}</span>
            </span>
            <div class="sub-reply-info" style="margin: 4px 0;">
              <span class="sub-reply-time" style="margin-right: 20px;">${getFormattedTime(
								replyData.ctime
							)}</span>
              <span class="sub-reply-like">
                <i class="svg-icon like use-color sub-like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${replyData.like}</span>
              </span>
            </div>
          </div>
        `;
		}

		return result;
	}

	async function loadPaginatedSubReplies(
		rootReplyID,
		subReplyList,
		subReplyAmount,
		paginationNumber
	) {
		// replace reply list with new replies
		const subReplyData = await fetch(
			`https://api.bilibili.com/x/v2/reply/reply?oid=${oid}&pn=${paginationNumber}&ps=10&root=${rootReplyID}&type=${commentType}`
		)
			.then((res) => res.json())
			.then((json) => json.data);
		subReplyList.innerHTML = getSubReplyItems(subReplyData.replies);

		// add page switcher
		addSubReplyPageSwitcher(
			rootReplyID,
			subReplyList,
			subReplyAmount,
			paginationNumber
		);

		// scroll to the top of replyItem
		const replyItem = subReplyList.parentElement.parentElement;
		replyItem.scrollIntoView({ behavior: "instant" });

		// scroll up a bit more because of the fixed header
		global.scrollTo(0, document.documentElement.scrollTop - 60);
	}

	function addSubReplyPageSwitcher(
		rootReplyID,
		subReplyList,
		subReplyAmount,
		currentPageNumber
	) {
		if (subReplyAmount <= 10) return;

		const pageAmount = Math.ceil(subReplyAmount / 10);
		const pageSwitcher = document.createElement("div");
		pageSwitcher.classList.add("view-more");
		pageSwitcher.innerHTML = `
        <div class="view-more-pagination">
          <span class="pagination-page-count">共${pageAmount}页</span>
          ${
						currentPageNumber !== 1
							? '<span class="pagination-btn pagination-to-prev-btn">上一页</span>'
							: ""
					}
          ${(() => {
						// 4 on the left, 4 on the right, then merge
						const left = [
							currentPageNumber - 4,
							currentPageNumber - 3,
							currentPageNumber - 2,
							currentPageNumber - 1,
						].filter((num) => num >= 1);
						const right = [
							currentPageNumber + 1,
							currentPageNumber + 2,
							currentPageNumber + 3,
							currentPageNumber + 4,
						].filter((num) => num <= pageAmount);
						const merge = [].concat(left, currentPageNumber, right);

						// chosen 5(if able)
						let chosen;
						if (currentPageNumber <= 3) chosen = merge.slice(0, 5);
						else if (currentPageNumber >= pageAmount - 3)
							chosen = merge.reverse().slice(0, 5).reverse();
						else
							chosen = merge.slice(
								merge.indexOf(currentPageNumber) - 2,
								merge.indexOf(currentPageNumber) + 3
							);

						// add first and dots
						let final = JSON.parse(JSON.stringify(chosen));
						if (!final.includes(1)) {
							let front = [1];
							if (final.at(0) !== 2) front = [1, "..."];
							final = [].concat(front, final);
						}

						// add last and dots
						if (!final.includes(pageAmount)) {
							let back = [pageAmount];
							if (final.at(-1) !== pageAmount - 1) back = ["...", pageAmount];
							final = [].concat(final, back);
						}

						// assemble to html
						return final.reduce((acc, cur) => {
							if (cur === "...")
								return acc + '<span class="pagination-page-dot">...</span>';
							if (cur === currentPageNumber)
								return (
									acc +
									`<span class="pagination-page-number current-page">${cur}</span>`
								);
							return acc + `<span class="pagination-page-number">${cur}</span>`;
						}, "");
					})()}
          ${
						currentPageNumber !== pageAmount
							? '<span class="pagination-btn pagination-to-next-btn">下一页</span>'
							: ""
					}
        </div>
      `;

		// add click event listener
		pageSwitcher
			.querySelector(".pagination-to-prev-btn")
			?.addEventListener("click", () =>
				loadPaginatedSubReplies(
					rootReplyID,
					subReplyList,
					subReplyAmount,
					currentPageNumber - 1
				)
			);
		pageSwitcher
			.querySelector(".pagination-to-next-btn")
			?.addEventListener("click", () =>
				loadPaginatedSubReplies(
					rootReplyID,
					subReplyList,
					subReplyAmount,
					currentPageNumber + 1
				)
			);
		pageSwitcher
			.querySelectorAll(".pagination-page-number:not(.current-page)")
			?.forEach((pageNumberElement) => {
				const number = parseInt(pageNumberElement.textContent);
				pageNumberElement.addEventListener("click", () =>
					loadPaginatedSubReplies(
						rootReplyID,
						subReplyList,
						subReplyAmount,
						number
					)
				);
			});

		// append page switcher
		subReplyList.appendChild(pageSwitcher);
	}

	function addAnchor() {
		const anchorElement = document.createElement("div");
		anchorElement.classList.add("anchor-for-loading");
		anchorElement.textContent = "正在加载...";
		anchorElement.style = `text-align: center; color: #61666d; transform: translateY(-50px);`;
		document
			.querySelector(".comment-container .reply-warp")
			.appendChild(anchorElement);

		let paginationCounter = 1;
		const ob = new IntersectionObserver(async (entries) => {
			if (!entries[0].isIntersecting) return;

			const { data: newPaginationData } = await getPaginationData(
				++paginationCounter
			);
			if (
				!newPaginationData.replies ||
				newPaginationData.replies.length === 0
			) {
				anchorElement.textContent = "所有评论已加载完毕";
				ob.disconnect();
				return;
			}

			for (const replyData of newPaginationData.replies) {
				appendReplyItem(replyData);
			}
		});

		ob.observe(anchorElement);
	}

	function setupXHRInterceptor() {
		const originXHROpen = XMLHttpRequest.prototype.open;
		XMLHttpRequest.prototype.open = function () {
			const url = arguments[1];
			if (typeof url === "string" && url.includes("reply/wbi/main")) {
				const { searchParams } = new URL(
					`${url.startsWith("//") ? "https:" : ""}${url}`
				);
				global.dynamicDetail = {
					oid: searchParams.get("oid"),
					commentType: searchParams.get("type"),
				};
			}
			return originXHROpen.apply(this, arguments);
		};
	}

	async function addStyle() {
		// wait until document is ready
		await new Promise((resolve) => {
			const timer = setInterval(() => {
				if (
					document &&
					document.createElement &&
					document.head &&
					document.head.appendChild
				) {
					clearInterval(timer);
					resolve();
				}
			}, 100);
		});

		// reply header CSS
		const replyHeaderCSS = document.createElement("style");
		replyHeaderCSS.textContent = `
        .reply-header {
          padding: 12px;
          border-bottom: 1px solid #f1f2f3;
        }
  
        .reply-navigation {
          margin-bottom: 0 !important;
        }
  
        .reply-navigation .nav-bar .nav-title {
          font-size: 1rem !important;
        }
      `;
		document.head.appendChild(replyHeaderCSS);

		// reply list CSS
		const replyListCSS = document.createElement("style");
		replyListCSS.textContent = `
        .reply-list {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
  
        .reply-item {
          padding: 12px !important;
          font-size: 1rem !important;
          border-bottom: 1px solid #f4f5f7;
        }
  
        .reply-item .root-reply-container {
          padding: 0 !important;
          display: flex;
        }
  
        .reply-item .root-reply-container .root-reply-avatar {
          position: relative !important;
          width: initial !important;
        }
  
        .reply-item .root-reply-container .content-warp {
          margin-left: 12px;
        }
  
        .reply-item .root-reply-container .content-warp .user-info,
        .reply-item .root-reply-container .content-warp .root-reply .reply-content {
          font-size: 14px !important;
        }
  
        .reply-item .root-reply-container .content-warp .root-reply .reply-content-container {
          width: calc(100vw - 88px) !important;
        }
  
        .reply-item .root-reply-container .content-warp .root-reply .reply-content .note-prefix {
          margin-right: 4px !important;
        }
  
        .reply-item .sub-reply-container {
          padding-left: 44px !important;
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item {
          width: calc(100% - 24px);
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info {
          margin-right: 0 !important;
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info .sub-user-name,
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .reply-content {
          font-size: 14px !important;
        }
  
        .reply-info .reply-time,
        .reply-info .reply-like,
        .sub-reply-info .sub-reply-time,
        .sub-reply-info .sub-reply-like {
          margin-right: 12px !important;
        }
      `;
		document.head.appendChild(replyListCSS);

		// avatar CSS
		const avatarCSS = document.createElement("style");
		avatarCSS.textContent = `
        .reply-item .root-reply-avatar .avatar .bili-avatar {
          width: 40px;
          height: 40px;
        }
  
        .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
          width: 24px;
          height: 24px;
        }
      `;
		document.head.appendChild(avatarCSS);

		// view-more CSS
		const viewMoreCSS = document.createElement("style");
		viewMoreCSS.textContent = `
        .sub-reply-container .view-more-btn:hover {
          color: #00AEEC;
        }
  
        .view-more {
          padding-left: 8px;
          color: #222;
          font-size: 13px;
          user-select: none;
        }
  
        .pagination-page-count {
          margin-right: 4px !important;
        }
  
        .pagination-page-dot,
        .pagination-page-number {
          margin: 0 4px;
        }
  
        .pagination-btn,
        .pagination-page-number {
          cursor: pointer;
        }
  
        .current-page,
        .pagination-btn:hover,
        .pagination-page-number:hover {
          color: #00AEEC;
        }
      `;
		(document.head || document.documentElement).appendChild(viewMoreCSS);

		// add other CSS
		const otherCSS = document.createElement("style");
		otherCSS.textContent = `
        :root {
          --text1: #18191C;
          --text3: #9499A0;
          --brand_blue: #00AEEC;
          --brand_pink: #FF6699;
          --bg2: #F6F7F8;
        }
  
        .jump-link {
          color: #008DDA;
        }
      `;
		(document.head || document.documentElement).appendChild(otherCSS);
	}
})();
