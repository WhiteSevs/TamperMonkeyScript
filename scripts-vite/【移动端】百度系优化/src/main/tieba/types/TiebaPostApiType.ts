export interface Api_getPdData {
	agree: Agree;
	author: Author;
	content: (Content | Content_Image_Emoji | Content_Image)[];
	floor: number;
	id: number;
	is_bub: number;
	is_voice: number;
	is_vote: number;
	ptype: number;
	reply_num: number;
	sub_post_number: number;
	time: number;
	title: string;
}

interface Content {
	text: string;
	type: 1;
}

interface Content_Image_Emoji {
	/** 表情名称 */
	c: string;
	src: string;
	text: string;
	type: 2;
}

interface Content_Image {
	bsize: string;
	origin_size: number;
	origin_src: string;
	size: string;
	src: string;
	type: 3;
}

interface Author {
	id: number;
	name: string;
	name_show: string;
	portrait: string;
	show_nickname: string;
	type: number;
	userhide: number;
}

interface Agree {
	agree_num: number;
	agree_type: number;
	disagree_num: number;
	has_agree: number;
}