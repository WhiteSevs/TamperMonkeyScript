import { log, utils } from "@/env";
import { CommonUtils } from "@/utils/CommonUtils";
import { M3U8Menu } from "./M3U8Menu";

type SegmentInfo = {
	/** ts名 */
	fileName: string;
	/** 开始的时长 */
	startDuration: number;
	/** 结束的时长 */
	endDuration: number;
	/** 持续时长 */
	duration: number;
	/** 索引下标 */
	index: number;
};

/**
 * 解析播放信息
 * @param durationText 时长所在的行
 * @param fileNameText ts名所在的行
 * @param currentDuration 当前时长
 */
const parseM3U8Info = (
	durationText: string,
	fileNameText: string,
	currentDuration: number
) => {
	// 解析片段时长
	let duration = Number(durationText.replace(/(^#EXTINF:\s*|,)/g, ""));
	// 开始的时长
	let startDuration = currentDuration;
	// 结束的时长
	let endDuration = currentDuration + duration;
	// ts名称
	let fileName = fileNameText.trim();

	return {
		fileName: fileName,
		startDuration: startDuration,
		endDuration: endDuration,
		duration: duration,
	};
};

/**
 * 统计已过滤时长
 * @param segmentInfo
 */
const calcIsFiterDuration = (segmentInfo: SegmentInfo) => {
	M3U8Filter.$data.isFilterDuration += segmentInfo.duration;
	M3U8Menu.updateIsFilterAdsDurationInfoMenu(M3U8Filter.$data.isFilterDuration);
};

export const M3U8Filter = {
	$data: {
		/** 已过滤的时长 */
		isFilterDuration: 0,
	},
	/**
	 * 通用-广告过滤-名称长度
	 *
	 * 该方法仅用于测试，不建议使用，因为无法确定广告片段的格式，可能无法正确过滤广告片段
	 * @param m3u8Text m3u8的内容
	 * @param consoleLog 是否输出日志
	 */
	filterAdsWithFileNameLength(m3u8Text: string, consoleLog: boolean) {
		let m3u8Split = m3u8Text.split("\n");
		// 正常视频片段的长度相同，且占大部分
		// 广告片段的长度不同于正常片段，且占少量
		// m3u8的片段解析信息
		let segmentsParseInfo = new utils.Dictionary<string, SegmentInfo[]>();
		let durationTotal = 0;
		for (let index = 0; index < m3u8Split.length; index++) {
			const m3u8Info = m3u8Split[index].trim();
			if (!m3u8Info.startsWith("#EXTINF:")) {
				continue;
			}
			// 视频信息
			// 解析片段信息
			const { duration, startDuration, endDuration, fileName } = parseM3U8Info(
				m3u8Info,
				m3u8Split[index + 1],
				durationTotal
			);
			durationTotal += duration;
			// 片段名称长度
			let fileNameLength = fileName.length.toString();
			// 获取字典中已有的信息
			let segmentInfo = segmentsParseInfo.get(fileNameLength) || [];
			// 添加信息
			segmentInfo.push({
				fileName: fileName,
				startDuration: startDuration,
				endDuration: endDuration,
				duration: duration,
				index: index,
			});
			segmentsParseInfo.set(fileNameLength, segmentInfo);
			index++;
		}
		// 需要过滤的片段
		let needFilterSegments: {
			fileNameLength: string;
			segmentsInfoList: SegmentInfo[];
		}[] = [];
		segmentsParseInfo.forEach((value, key) => {
			needFilterSegments.push({
				fileNameLength: key,
				segmentsInfoList: value,
			});
		});
		// 按照片段量-降序
		needFilterSegments = utils.sortListByProperty(
			needFilterSegments,
			(item) => item.segmentsInfoList.length,
			true
		);
		// 剔除正常的视频片段（第一个）
		needFilterSegments.splice(0, 1);
		if (needFilterSegments.length) {
			let adsSegmentIndexList: {
				index: number;
				data: SegmentInfo;
			}[] = [];
			// 把广告片段的索引加入数组
			needFilterSegments.forEach((item) => {
				item.segmentsInfoList.forEach((segmentInfo) => {
					adsSegmentIndexList.push({
						index: segmentInfo.index,
						data: segmentInfo,
					});
				});
			});
			// 索引偏移
			let indexOffset = 0;
			for (let index = 0; index < m3u8Split.length; index++) {
				// 判断当前索引是否和广告索引列表中的索引是否相等
				let findIndex = adsSegmentIndexList.findIndex(
					(item) => item.index === index + indexOffset
				);
				if (findIndex != -1) {
					let adsSegmentInfo = adsSegmentIndexList[findIndex];
					consoleLog &&
						log.info(
							`通杀1：过滤广告片段 ==> 索引：${index + indexOffset} 文件名：${
								adsSegmentInfo.data.fileName
							} 开始：${CommonUtils.duration2Text(
								adsSegmentInfo.data.startDuration
							)} 持续时长：${adsSegmentInfo.data.duration}s`
						);

					// 1. 移除原始列表的内容
					m3u8Split.splice(index, 2);
					index -= 2;
					// 2. 移除广告列表的内容（因为已剔除，索引变化）
					adsSegmentIndexList.splice(findIndex, 1);
					// 3. 索引偏移
					indexOffset = indexOffset + 2;
				}
			}
		}

		// 统计过滤时长
		needFilterSegments.forEach((item) => {
			item.segmentsInfoList.forEach((segmentInfo) => {
				calcIsFiterDuration(segmentInfo);
			});
		});

		return {
			/** 处理后的m3u8文本 */
			m3u8Text: m3u8Split.join("\n"),
			/** 过滤的片段信息 */
			filterInfo: needFilterSegments,
		};
	},
	/**
	 * 通用-广告过滤-名称相似度
	 *
	 * 该方法仅用于测试，不建议使用，因为无法确定广告片段的格式，可能无法正确过滤广告片段
	 * @param m3u8Text m3u8的内容
	 * @param consoleLog 是否输出日志
	 */
	filterAdsWithFileNameSimilar(m3u8Text: string, consoleLog: boolean) {
		let m3u8Split = m3u8Text.split("\n");
		// 正常视频片段的长度相同，且占大部分
		// 广告片段的长度不同于正常片段，且占少量
		// m3u8的片段解析信息
		let segmentsParseInfoList: SegmentInfo[] = [];
		// 相似度阈值
		let similarCompareValue = 0.45;
		// 占据的比例
		let includePercent = 0.5;

		let durationTotal = 0;
		for (let index = 0; index < m3u8Split.length; index++) {
			const m3u8Info = m3u8Split[index].trim();
			if (!m3u8Info.startsWith("#EXTINF:")) {
				continue;
			}
			// 视频信息
			// 解析片段信息
			const { duration, startDuration, endDuration, fileName } = parseM3U8Info(
				m3u8Info,
				m3u8Split[index + 1],
				durationTotal
			);
			durationTotal += duration;
			// 添加信息
			segmentsParseInfoList.push({
				fileName: fileName,
				startDuration: startDuration,
				endDuration: endDuration,
				duration: duration,
				index: index,
			});
			index++;
		}

		// 进行相似度排查
		// 当相似度>45且占据的比例>50%时为正常片段
		// 否则为广告片段
		let isFilterSegmentsInfoList: SegmentInfo[] = [];
		// 索引偏移
		let indexOffset = 0;

		for (let index = 0; index < segmentsParseInfoList.length; index++) {
			const segmentInfo = segmentsParseInfoList[index];

			/** 是否是广告片段 */
			let isAdsSegment = true;
			/** 相似度超过阈值的数量 */
			let similarCount = 0;
			/** 片段比较的迭代列表 */
			let iteratorSegmentsParseInfoList = segmentsParseInfoList;
			for (
				let iteratorIndex = 0;
				iteratorIndex < iteratorSegmentsParseInfoList.length;
				iteratorIndex++
			) {
				const compareSegmentInfo = iteratorSegmentsParseInfoList[iteratorIndex];
				let similar = CommonUtils.similar(
					segmentInfo.fileName,
					compareSegmentInfo.fileName
				);
				if (similar >= similarCompareValue) {
					// 很相似
					similarCount++;
				} else {
					// 不相似
				}
				if (
					similarCount / iteratorSegmentsParseInfoList.length >
					includePercent
				) {
					// 与其它的片段的相似度大于设定的比例值
					// 认为它是正常视频的片段
					isAdsSegment = false;
					break;
				}
			}

			if (isAdsSegment) {
				isFilterSegmentsInfoList.push(segmentInfo);
				consoleLog &&
					log.info(
						`通杀2：过滤广告片段 ==> 索引：${segmentInfo.index} 文件名：${
							segmentInfo.fileName
						} 开始：${CommonUtils.duration2Text(
							segmentInfo.startDuration
						)} 持续时长：${segmentInfo.duration}s`
					);
				// 1. 移除原始列表的内容
				m3u8Split.splice(segmentInfo.index - indexOffset, 2);
				// 2. 索引偏移
				indexOffset += 2;
			}
		}

		// 统计过滤时长
		isFilterSegmentsInfoList.forEach((segmentInfo) => {
			calcIsFiterDuration(segmentInfo);
		});
		return {
			/** 处理后的m3u8文本 */
			m3u8Text: m3u8Split.join("\n"),
			/** 过滤的片段信息 */
			filterInfo: isFilterSegmentsInfoList,
		};
	},
};
