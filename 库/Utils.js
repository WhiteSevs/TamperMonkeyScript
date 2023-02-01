/*
 * @overview	 自己常用的工具类定义
 * @copyright  GPL-3.0-only
 * @author  WhiteSevs
 * @version  1.0
 */
let Utils = {};

/*
 * @param {string|function} func - 需要捕获错误的函数或函数格式的字符串
 * @param {object} params - 该函数的参数和捕获到错误的函数的参数，类型为数组Array
 * @param {string|function} errorFunc - 捕获到错误后执行的函数或函数格式的字符串
 * @example Utils.tryCatch("(pam)=>{console.log('this is a function and params is' + pam[0])}",["参数1"],"()=>{console.log('对错误进行处理判断')}");
 * @example Utils.tryCatch((pam)=>{console.log('this is a function and params is' + pam[0])},["参数1"],"()=>{console.log('对错误进行处理判断')}");
 */
Utils.tryCatch = function (func, params, errorFunc) {
	/* 捕获错误 */
	if (func == null) {
		throw "Utils.tryCatch 警告: 参数 func 为不存在";
	}
	if (typeof func !== "function" && typeof func !== "string") {
		throw "Utils.tryCatch 参数 func 必须为 Function|String 类型";
	}
	if (
		params != null &&
		typeof params !== "object" &&
		typeof params !== "string"
	) {
		throw "Utils.tryCatch 参数 params 必须为 object|String 类型";
	}
	if (
		errorFunc != null &&
		typeof errorFunc !== "object" &&
		typeof errorFunc !== "string"
	) {
		throw "Utils.tryCatch 参数 errorFunc 必须为 Function|String 类型";
	}
	var result = null;
	try {
		result = typeof func === "string" ? window.eval(func) : func(params);
	} catch (error) {
		console.log(
			"%c" + (func?.name ? func?.name : func + "出现错误"),
			"color: #f20000"
		);
		console.log("%c" + ("错误原因：" + error), "color: #f20000");
		console.trace(func);
		result =
			typeof func === "string" ? window.eval(errorFunc) : errorFunc(params);
	} finally {
		return result;
	}
};

/*
 * @description 字符串格式的时间转时间戳
 * @param {string} str - 字符串格式的时间，例如：2022-11-21 00:00:00，或者是 00:00:00
 * @return {number} - 返回时间戳
 * @example Utils.formatTextToTimeStamp("2022-11-21 00:00:00");
 */
Utils.formatTextToTimeStamp = function (text) {
	/* 把字符串格式的时间（完整，包括日期和时间）格式化成时间戳 */
	if (typeof text !== "string") {
		throw "Utils.formatTextToTimeStamp 参数 text 必须为 string 类型";
	}
	if (text.length === 8) {
		/* 参数只有时间 */
		var today = new Date();
		text =
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate() +
			" " +
			text;
	}
	text = text.substring(0, 19);
	text = text.replace(/-/g, "/");
	var timestamp = new Date(text).getTime();
	return timestamp;
};

/*
 * @description 定位网页中字符串位置并标亮，注意，该字符串必须是能在网页中看得到的，隐藏的是无法定位的
 * @param {string} str - 需要寻找的字符串
 * @param {boolean} caseSensitive - 区分大小写
 * @return {boolean} true/false - 找到为true，否则false
 * @example Utils.findWindowPageString("xxxxx");
 * @exampleResult  true
 */
Utils.findWindowPageString = function (str = "", caseSensitive = false) {
	var TRange = null;
	var strFound;
	if (window.find) {
		/* CODE FOR BROWSERS THAT SUPPORT window.find */
		strFound = self.find(str, caseSensitive, true, true, false);
		if (strFound && self.getSelection && !self.getSelection().anchorNode) {
			strFound = self.find(str, caseSensitive, true, true, false);
		}
		if (!strFound) {
			strFound = self.find(str, 0, 1);
			while (self.find(str, 0, 1)) continue;
		}
	} else if (navigator.appName.indexOf("Microsoft") != -1) {
		/* EXPLORER-SPECIFIC CODE */
		if (TRange != null) {
			TRange.collapse(false);
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
		if (TRange == null || strFound == 0) {
			TRange = self.document.body.createTextRange();
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
	} else if (navigator.appName == "Opera") {
		alert("Opera browsers not supported, sorry...");
		return;
	}
	return strFound ? true : false;
};

/*
 * @description 格式化byte为KB、MB、GB、TB、PB、EB、ZB、YB、BB、NB、DB
 * @param {number} bitSize - 字节
 * @param {boolean} addType - 是否添加单位，默认添加
 * @return {string|number} - 添加单位就是字符串，否则为float类型，保留两位
 * @example Utils.formatByteToSize("812304");
 * @exampleResult
 */
Utils.formatByteToSize = function (byteSize, addType = true) {
	/* B字节转KB、MB、GB */
	byteSize = parseInt(byteSize);
	if (isNaN(byteSize)) {
		throw "Utils.formatByteToSize 参数 byteSize 格式不正确";
	}
	var result = 0;
	var resultType = "KB";
	var sizeData = {};
	sizeData.KB = 1024;
	sizeData.MB = sizeData.KB * sizeData.KB;
	sizeData.GB = sizeData.MB * sizeData.KB;
	sizeData.TB = sizeData.GB * sizeData.KB;
	sizeData.PB = sizeData.TB * sizeData.KB;
	sizeData.EB = sizeData.PB * sizeData.KB;
	sizeData.ZB = sizeData.EB * sizeData.KB;
	sizeData.YB = sizeData.ZB * sizeData.KB;
	sizeData.BB = sizeData.YB * sizeData.KB;
	sizeData.NB = sizeData.BB * sizeData.KB;
	sizeData.DB = sizeData.NB * sizeData.KB;
	for (key in sizeData) {
		result = byteSize / sizeData[key];
		resultType = key;
		if (sizeData.KB >= result) {
			break;
		}
	}
	result = result.toFixed(2);
	result = addType ? result + resultType.toString() : parseFloat(result);
	return result;
};

/*
 * @description 数组按照内部某个值的大小比对排序，如[{"time":"2022-1-1"},{"time":"2022-2-2"}]
 * @param {string} getPropertyValueFunc - 数组内部项的某个属性的值的方法，参数为这个项
 * @param {boolean} sortByDesc - 排序方式，true倒序(值最大排第一个，如:6、5、4、3...)，false为正序(值最小排第一个，如:1、2、3、4...)
 * @return {object} - 返回比较排序完成的数组
 * @example [{"time":"2022-1-1"},{"time":"2022-2-2"}].sort(Utils.sortListByProperty((item)=>{return item["time"]}))
 * @example [{"time":"2022-1-1"},{"time":"2022-2-2"}].sort(Utils.sortListByProperty((item)=>{return item["time"]},false))
 */
Utils.sortListByProperty = function (getPropertyValueFunc, sortByDesc = true) {
	if (typeof getPropertyValueFunc !== "function") {
		throw "Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function 类型";
	}
	if (typeof sortByDesc !== "boolean") {
		throw "Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型";
	}

	return function (after_obj, before_obj) {
		var beforeValue = getPropertyValueFunc(before_obj); /*  前 */
		var afterValue = getPropertyValueFunc(after_obj); /* 后 */
		if (sortByDesc) {
			if (afterValue > beforeValue) {
				return -1;
			} else if (afterValue < beforeValue) {
				return 1;
			} else {
				return 0;
			}
		} else {
			if (afterValue < beforeValue) {
				return -1;
			} else if (afterValue > beforeValue) {
				return 1;
			} else {
				return 0;
			}
		}
	};
};

/*
 * @description 数组内数据部分字段合并成字符串
 * @example Utils.mergeArrayToString([{"name":"数组内数据部分字段合并成字符串->"},{"name":"mergeToString"}],(item)=>{return item["name"]});
 * @exampleResult 数组内数据部分字段合并成字符串->mergeArrayToString
 */
Utils.mergeArrayToString = function (data, handleFunc) {
	if (!(data instanceof Array)) {
		throw "Utils.mergeArrayToString 参数 data 必须为 Array 类型";
	}
	if (typeof handleFunc !== "function") {
		throw "Utils.mergeArrayToString 参数 handleFunc 必须为 Function 类型";
	}
	let content = "";
	data.forEach((item) => {
		content = content + handleFunc(item);
	});
	return content;
};

/*
 * @description JSON内所有的值转为Array数组
 * @param {object} _json_ - JSON数据
 * @return {object} - 返回数组
 * @example Utils.jsonAllValueToArray({"Utils":"jsonToArray","return","Array"});
 * @exampleResult ['jsonToArray', 'Array']
 */
Utils.jsonAllValueToArray = function (_json_) {
	if (typeof _json_ !== "object") {
		throw "Utils.jsonAllValueToArray 参数 _json_ 必须为 object 类型";
	}
	var retArray = [];
	Object.keys(_json_).forEach(function (key) {
		retArray = [...retArray, _json_[key]];
	});
	return retArray;
};

/*
 * @description JSON格式的字符串转为JSON对象
 * @param {string} text - JSON格式的字符串
 * @return {object} - 返回JSON对象
 * @example Utils.jsonStrToObject('{"Utils":"jsonStrToObject","return","json"}');
 * @exampleResult {"Utils":"jsonStrToObject","return","json"}
 */
Utils.jsonStrToObject = function (text) {
	if (typeof text !== "string") {
		throw "Utils.jsonStrToObject 参数 text 必须为 string 类型";
	}
	return window.eval("(" + text + ")");
};

/*
 * @description 获取数组的随机值
 * @param {string} array - 数组数据
 * @return {string} - 返回数组的随机值
 * @example Utils.getArrayRandValue(["Utils","getArrayRandValue"]);
 * @exampleResult getArrayRandValue
 */
Utils.getArrayRandValue = function (_array_) {
	return _array_[Math.floor(Math.random() * _array_.length)];
};

/*
 * @description 获取两个数字区间的随机值
 * @param {number} number - 数字区间
 * @param {number} number2 - 数字区间
 * @return {number} - 返回两个数字区间的随机值
 * @example Utils.getRandNumber(1,10);
 * @exampleResult 5
 * @example Utils.getRandNumber(10,1);
 * @exampleResult 8
 */
Utils.getRandNumber = function (number, number2) {
	if (typeof number !== "number") {
		throw "Utils.getRandNumber 参数 number 必须为 number 类型";
	}
	if (typeof number2 !== "number") {
		throw "Utils.getRandNumber 参数 number2 必须为 number 类型";
	}
	var leftNumber = number > number2 ? number2 : number;
	var rightNumber = number > number2 ? number : number2;
	return Math.round(Math.random() * (rightNumber - leftNumber)) + leftNumber;
};

/*
 * @description 获取格式化后的Date类型时间
 * @param {string} text - 需要格式化的字符串或者时间戳
 * @param {string} types - 格式化成的显示类型
 *                         yyyy 年
 *                         MM 月
 *                         dd 天
 *                         HH 时 (24小时制)
 *                         hh 时 (12小时制)
 *                         mm 分
 *                         ss 秒
 * @return {string} - 返回格式化后的时间
 * @example Utils.getFormatTime("HH:mm:ss","2022-08-21 23:59:00");
 * @exampleResult 23:59:00
 * @example Utils.getFormatTime("HH:mm:ss",1899187424988);
 * @exampleResult 15:10:13
 */
Utils.getFormatTime = function (types = "yyyy-MM-dd HH:mm:ss", text) {
	if (typeof types !== "string") {
		throw "Utils.getFormatTime 参数 types 必须为 string 类型";
	}
	if (text != null && typeof text !== "string" && typeof text !== "number") {
		throw "Utils.getFormatTime 参数 text 必须为 string|number 类型";
	}
	var time = text == null ? new Date() : new Date(text);
	function _checkTime_(i) {
		/* 校验时间补0 */
		if (i < 10) return "0" + i;
		return i;
	}

	function _timeSystemChange_(_hour_) {
		/* 时间制修改 24小时制转12小时制 */
		return _hour_ > 12 ? _hour_ - 12 : _hour_;
	}

	var timeRegexp = {
		yyyy: time.getFullYear(),
		/* 年 */
		MM: _checkTime_(time.getMonth() + 1),
		/* 月 */
		dd: _checkTime_(time.getDate()),
		/* 日 */
		HH: _checkTime_(time.getHours()),
		/* 时 (24小时制) */
		hh: _checkTime_(_timeSystemChange_(time.getHours())),
		/* 时 (12小时制) */
		mm: _checkTime_(time.getMinutes()),
		/* 分 */
		ss: _checkTime_(time.getSeconds()),
		/* 秒 */
	};
	Object.keys(timeRegexp).forEach(function (key) {
		var replaecRegexp = new RegExp(key, "g");
		types = types.replace(replaecRegexp, timeRegexp[key]);
	});
	return types;
};
/*
 * @description 【手机】检测点击的地方是否在该元素区域内
 * @param {object} obj - 需要检测的元素
 * @return {boolean} - 返回true或false
 * @example Utils.checkUserClickInNode(document.querySelector(".xxx"));
 * @exampleResult false
 */
Utils.checkUserClickInNode = function (targetNode) {
	if (!(targetNode instanceof Node)) {
		throw "Utils.checkUserClickInNode 参数 targetNode 必须为 Node 类型";
	}
	var mouseClickPosX = Number(window.event.clientX); /* 鼠标相对屏幕横坐标 */
	var mouseClickPosY = Number(window.event.clientY); /* 鼠标相对屏幕纵坐标 */
	var elementPosXLeft = Number(
		targetNode.getBoundingClientRect().left
	); /* 要检测的元素的相对屏幕的横坐标最左边 */
	var elementPosXRight = Number(
		targetNode.getBoundingClientRect().right
	); /* 要检测的元素的相对屏幕的横坐标最右边 */
	var elementPosYTop = Number(
		targetNode.getBoundingClientRect().top
	); /* 要检测的元素的相对屏幕的纵坐标最上边 */
	var elementPosYBottom = Number(
		targetNode.getBoundingClientRect().bottom
	); /* 要检测的元素的相对屏幕的纵坐标最下边 */
	if (
		mouseClickPosX >= elementPosXLeft &&
		mouseClickPosX <= elementPosXRight &&
		mouseClickPosY >= elementPosYTop &&
		mouseClickPosY <= elementPosYBottom
	) {
		return true;
	} else if (
		targetNode.innerHTML.indexOf(window.event.target.innerHTML) !== -1
	) {
		/* 这种情况是应对在界面中隐藏的元素，getBoundingClientRect获取的都是0 */
		return true;
	} else {
		return false;
	}
};

/*
 * @description 同步执行延时函数
 * @param {object|string} fnStr - 需要延时的函数或字符串格式的函数
 * @param {number} delayTime - 需要检测的元素
 * @return {All|无返回值} - 返回自定义类型数据或者无返回
 * @example await Utils.asyncSetTimeOut(xxxFunction, 2500);
 * @exampleResult xxx
 * @example await Utils.asyncSetTimeOut("()=>{console.log(12345)}", 2500);
 * @exampleResult 无返回值
 */
Utils.asyncSetTimeOut = function (fnStr, delayTime) {
	var _this = this;
	if (typeof fnStr !== "function" && typeof fnStr !== "string") {
		throw "Utils.asyncSetTimeOut 参数 fnStr 必须为 function|string 类型";
	}
	if (typeof delayTime !== "number") {
		throw "Utils.asyncSetTimeOut 参数 delayTime 必须为 number 类型";
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(_this.tryCatch(fnStr));
		}, delayTime);
	});
};

/*
 * @description 同步执行，等待数组内部执行完毕，注意，该内部不能同步
 * @param {object} arrayData - 需要遍历的数组
 * @param {function} handleDataFunction - 对该数组进行操作的函数，该函数的参数为数组格式的参数,[数组下标，数组项]
 * @return 无返回值
 * @example await Utils.asyncArrayForEach([1,2,3],xxxFunction);
 */
Utils.asyncArrayForEach = function (arrayData, handleDataFunction) {
	var _this = this;
	if (typeof arrayData !== "object") {
		throw "Utils.asyncArrayForEach 参数 arrayData 必须为 object 类型";
	}
	if (
		typeof handleDataFunction !== "function" &&
		typeof handleDataFunction !== "string"
	) {
		throw "Utils.asyncArrayForEach 参数 handleDataFunction 必须为 function|string 类型";
	}
	return Promise.all(
		Array.from(arrayData).map(async (item, index) => {
			await _this.tryCatch(handleDataFunction, [index, item]);
		})
	);
};

/*
 * @description 同步延迟xxx毫秒
 * @param {number} delayTime - 需要遍历的数组
 * @return {无返回值}
 * @example await Utils.sleep(2500); - 同步延时2500毫秒
 */
Utils.sleep = function (delayTime) {
	if (typeof delayTime !== "number") {
		throw "Utils.sleep 参数 delayTime 必须为 number 类型";
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, delayTime);
	});
};

/*
 * @description 注册全局函数Cookies
 * @function Cookies.get("key")
 * @param {string|number} key - 需要获取的cookie的key
 * @return {string} 获取到的cookie值或者为空
 * @function Cookies.set("key","value",8400);
 * @param {string|number} key - 需要设置的cookie的key
 * @param {All} key - 需要设置的cookie的value
 * @param {number} time - 需要设置的cookie的过期时间
 * @return 无返回值
 * @example Utils.registerWindowCookies();
 * 					Cookies.get("xxxx");
 */
Utils.registerWindowCookies = () => {
	/*cookie start*/
	window.Cookies = new (function () {
		//添加cookie
		this.add = function (name, value, hours) {
			var life = new Date().getTime();
			life += hours * 1000 * 60;
			var cookieStr =
				name +
				"=" +
				decodeURIComponent(value) +
				";expires=" +
				new Date(life).toGMTString();
			document.cookie = cookieStr;
		};
		//获取cookie值
		this.get = function (name) {
			var getReturn = null;
			var cookies = document.cookie.split(";");
			cookies.forEach((item) => {
				let nameRegexp = new RegExp("^" + name + "=", "g");
				item = item.trimStart();
				if (item.match(nameRegexp)) {
					getReturn = decodeURIComponent(item.replace(nameRegexp, ""));
					return;
				}
			});
			return getReturn;
		};
		//删除cookie
		this.remove = function (name) {
			var cookieStr =
				name +
				"=" +
				decodeURIComponent("null") +
				";expires=" +
				new Date().toGMTString();
			document.cookie = cookieStr;
		};
	})();
	/*cookie end*/
};

/*
 * @description base64转blob
 * @param {string} dataurl - base64的数据
 * @return {string} blob的链接
 * @example Utils.base64ToBlob("data:image/jpeg;base64,.....");
 * @exampleResult blob://xxxxxxx
 */
Utils.base64ToBlob = function (dataurl) {
	if (typeof dataurl !== "string") {
		throw "Utils.base64ToBlob 参数 dataurl 必须为 string 类型";
	}
	var arr = dataurl.split(","),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime,
	});
};
/*
 * @description base64转File对象
 * @param {string} dataurl - base64的数据
 * @return {string} blob的链接
 * @example Utils.base64ToFile("data:image/jpeg;base64,.....");
 * @exampleResult object
 */
Utils.base64ToFile = function (dataurl, fileName) {
	if (typeof dataurl !== "string") {
		throw "Utils.base64ToFile 参数 dataurl 必须为 string 类型";
	}
	if (typeof fileName !== "string") {
		throw "Utils.base64ToFile 参数 fileName 必须为 string 类型";
	}
	var arr = dataurl.split(","),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], fileName, {
		type: mime,
	});
};

/*
 * @description blob转File对象
 * @param {string} theBlob - 需要转换的blob的链接
 * @param {string} fileName - 转换成的File对象的文件名称
 * @return {object} File对象
 * @example Utils.blobToFile("blob://xxxxx");
 * @exampleResult object
 */
Utils.blobToFile = function (theBlob, fileName) {
	if (typeof theBlob !== "string") {
		throw "Utils.blobToFile 参数 theBlob 必须为 string 类型";
	}
	if (typeof fileName !== "string") {
		throw "Utils.blobToFile 参数 fileName 必须为 string 类型";
	}
	theBlob.lastModifiedDate = new Date();
	theBlob.name = fileName;
	return theBlob;
};

/*
 * @description 同步File对象转base64
 * @param {object} file - 需要转换的File对象
 * @return {string} base64格式的数据
 * @example await Utils.asyncFileToBase64(object);
 * @exampleResult data:image/jpeg:base64/,xxxxxx
 */
Utils.asyncFileToBase64 = function (file) {
	var reader = new FileReader();
	reader.readAsDataURL(file);
	return new Promise((resolve) => {
		reader.onload = function (e) {
			resolve(e.target.result);
		};
	});
};

/*
 * @description 下载base64格式的数据
 * @param {string} base64Content - 需要转换的base64数据
 * @param {string} fileName - 需要保存的文件名
 * @example  Utils.downloadBase64("data:image/jpeg:base64/,xxxxxx");
 */
Utils.downloadBase64 = function (base64Content, fileName) {
	if (typeof base64Content !== "string") {
		throw "Utils.downloadBase64 参数 base64Content 必须为 string 类型";
	}
	if (typeof fileName !== "string") {
		throw "Utils.downloadBase64 参数 fileName 必须为 string 类型";
	}
	var aLink = document.createElement("a");
	var blob = this.base64ToBlob(base64Content);
	var evt = document.createEvent("HTMLEvents");
	evt.initEvent(
		"click",
		true,
		true
	); /* initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为 */
	aLink.download = fileName;
	aLink.href = URL.createObjectURL(blob);
	aLink.click();
};

/*
 * @description 判断是否是手机访问
 * @return {boolean} - 返回如果是手机true，否则false
 * @example  Utils.isPhone();
 * @exampleResult true
 */
Utils.isPhone = function () {
	return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent));
};

/*
 * @description 自定义字典，用于new
 * @example  new let dictionary = Utils.Dictionary();
 * @example  dictionary.set("xxx","xxx");
 * @example  dictionary.get("xxx");
 * @example  dictionary.has("xxx");
 */
Utils.Dictionary = function () {
	this.items = {};
	this.has = function (key) {
		/* 检查是否有某一个键 */
		return this.items.hasOwnProperty(key);
	};
	this.set = function (key, val = "") {
		/* 为字典添加某一个值 */
		if (key === undefined) {
			throw "Utils.Dictionary().set 参数 key 不能为空";
		}
		this.items[key] = val;
	};
	this.delete = function (key) {
		/* 删除某一个键 */
		if (this.has(key)) {
			delete this.items[key];
			return true;
		}
		return false;
	};
	this.get = function (key) {
		/* 查找某一特定项 */
		return this.has(key) ? this.items[key] : undefined;
	};
	this.values = function () {
		/* 返回字典中的所有值 */
		var resultList = [];
		for (var prop in this.items) {
			if (this.has(prop)) {
				resultList.push(this.items[prop]);
			}
		}
		return resultList;
	};
	this.clear = function () {
		/* 清空字典 */
		this.items = {};
	};
	this.size = function () {
		/* 获取字典的长度 */
		return Object.keys(this.items).length;
	};
	this.keys = function () {
		/* 获取字典所有的键 */
		return Object.keys(this.items);
	};
	this.getItems = function () {
		/* 返回字典本身 */
		return this.items;
	};
};

/*
 * @description JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
 * @param {object} target - 目标端
 * @param {object} source - 源端
 * @example  Utils.assignJSON({"1":1,"2":{"3":3}},{"2":{"3":4}});
 * @exampleResult  {"1":1,"2":{"3":4}}
 */
Utils.assignJSON = function (target, source) {
	for (var target_key in target) {
		if (typeof source[target_key] !== "undefined") {
			if (
				typeof source[target_key] === "object" &&
				!(source[target_key] instanceof Node)
			) {
				target[target_key] = this.assignJSON(
					target[target_key],
					source[target_key]
				);
			} else {
				target[target_key] = source[target_key];
			}
		}
	}
	return target;
};

/*
 * @description 判断对象或数据是否为空
 * @param {all} object - 需要判断的变量
 * @example  Utils.isNull({});
 * @exampleResult  true
 * @example  Utils.isNull([]);
 * @exampleResult  true
 */
Utils.isNull = function (object) {
	var result = false;
	if (typeof object === "undefined") {
		result = true;
	} else if (typeof object === "object") {
		if (Object.keys(object).length === 0) {
			result = true;
		}
	} else if (typeof object === "number") {
		result = object === 0 ? true : false;
	}
	return result;
};

/*
 * @description 自动锁对象，用于循环判断运行的函数，在循环外new后使用，注意，如果函数内部存在异步操作，需要使用await
 * @param {object} func - 需要执行的函数
 * @param {object|undefined} funcArgs - 需要执行的函数的参数
 * @example var lock = new Utils.lockFunction(xxxx)
 * 					--- 此处是循环内 ---
 *          lock.run();
 *          --- 此处是循环内 ---
 * @example var lock = new Utils.lockFunction(xxxx,true) -- 异步操作
 * 					--- 此处是循环内 ---
 *          await lock.run();
 *          --- 此处是循环内 ---
 */
Utils.lockFunction = function (func) {
	this.flag = false;
	this.lock = function () {
		this.flag = true;
	};
	this.unlock = function () {
		this.flag = false;
	};
	this.run = async function () {
		if (this.flag) {
			return;
		}
		this.lock();
		await func(arguments); /* arguments调用 */
		this.unlock();
	};
};

/*
 * @description 等待某个对象出现，结果为异步，需要await或者then
 * @param {object} target - 需要寻找的元素，传入id或class或div等...
 * @param {number} intervalNumMax - 循环次数
 * @param {number} intervalTime - 每次的循环时间
 * @return {Array} - 如果找到返回数组形式的Node类型的对象，否则返回空数组
 * @example await Utils.waitNode("div.xxx");
 * @example Utils.waitNode("div#xxx").then((node)=>{xxxx});
 */
Utils.waitNode = function (target, intervalNumMax = 90, intervalTime = 300) {
	if (typeof target !== "string") {
		throw "Utils.waitNode 参数 target 必须为 string 类型";
	}
	intervalNumMax = parseInt(intervalNumMax);
	intervalTime = parseInt(intervalTime);
	var intervalNum = 0;
	return new Promise((resolve) => {
		var interval = setInterval(function () {
			if (intervalNum > intervalNumMax) {
				resolve([]);
				clearInterval(interval);
				return;
			}
			if (document.querySelectorAll(target).length !== 0) {
				resolve(document.querySelectorAll(target));
				clearInterval(interval);
				return;
			}
			intervalNum++;
		}, intervalTime);
	});
};

/*
 * @description 删除某个父元素，父元素可能在上层或上上层或上上上层...
 * @param {object} target - 当前元素
 * @param {object} handleFunc - 判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
 * @return {boolean} - 如果找到就删除返回true，如果未删除返回false
 * @example Utils.deleteParentNode(document.querySelector(".xxx"),(node)=>{return node.id="xxx" ? true:false});
 * @exampleResult true;
 */
Utils.deleteParentNode = function (target, handleFunc) {
	if (target == null) {
		throw "Utils.deleteParentNode 参数 target 不能为 null";
	}
	if (!(target instanceof Node)) {
		throw "Utils.deleteParentNode 参数 target 必须为 Node 类型";
	}
	if (typeof handleFunc !== "function") {
		throw "Utils.deleteParentNode 参数 handleFunc 必须为 function 类型";
	}
	var result = false;
	var parentNode = target.parentElement;
	while (!0) {
		if (parentNode == null) {
			return;
		}
		var handleStatus = handleFunc(parentNode);
		if (handleStatus) {
			result = true;
			parentNode.remove();
			break;
		}
		parentNode = parentNode.parentElement;
	}
	return result;
};

/*
 * @description 获取某个父元素，父元素可能在上层或上上层或上上上层...
 * @param {object} target - 当前元素
 * @param {object} handleFunc - 判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
 * @return {boolean} - 如果找到返回满足要求的父元素，如果未找到返回null
 * @example Utils.findParentNode(document.querySelector(".xxx"),(node)=>{return node.id="xxx" ? true:false});
 * @exampleResult {Node};
 */
Utils.findParentNode = function (target, handleFunc) {
	if (target == null) {
		throw "Utils.findParentNode 参数 target 不能为null";
	}
	if (!(target instanceof Node)) {
		throw "Utils.findParentNode 参数 target 必须为 Node 类型";
	}
	if (typeof handleFunc !== "function") {
		throw "Utils.findParentNode 参数 handleFunc 必须为 function 类型";
	}
	let result = null;
	let parentNode = target.parentElement;
	while (!0) {
		if (parentNode == null) {
			return;
		}
		let handleStatus = handleFunc(parentNode);
		if (handleStatus) {
			result = parentNode;
			break;
		}
		parentNode = parentNode.parentElement;
	}
	return result;
};

/*
 * @description 复制到剪贴板
 * @param {string|number} text - 需要复制到剪贴板的文本
 * @example Utils.setClip("xxxx");
 */
Utils.setClip = function (text) {
	if (typeof text !== "string") {
		return;
	}
	let chipBoardNode = document.createElement("input");
	chipBoardNode.type = "text";
	chipBoardNode.setAttribute("style", "opacity:0;position:absolute;");
	chipBoardNode.id = "whitesevClipBoardInput";
	document.body.append(chipBoardNode);
	let clipBoardInputNode = document.querySelector("#whitesevClipBoardInput");
	clipBoardInputNode.value = text;
	clipBoardInputNode.removeAttribute("disabled");
	clipBoardInputNode.select();
	document.execCommand("copy");
	clipBoardInputNode.remove();
};

/*
 * @description 监听页面元素改变并处理
 * @param {object|Node} target - 需要监听的元素，如果不存在，可以等待它出现
 * @param {object} observer_config - MutationObserver的配置
 * @example Utils.mutationObserver("div.xxxx",{"fn":(mutations)=>{},"config":{childList:true,attributes:true}});
 * @example Utils.mutationObserver(document.querySelector("div.xxxx"),{"fn":(mutations)=>{},"config":{childList:true,attributes:true}});
 * @example Utils.mutationObserver(document.querySelectorAll("div.xxxx"),{"fn":(mutations)=>{},"config":{childList:true,attributes:true}});
 * @example Utils.mutationObserver($("div.xxxx"),{"fn":(mutations)=>{},"config":{childList:true,attributes:true}});
 */
Utils.mutationObserver = function (target, observer_config) {
	if (
		typeof target !== "string" &&
		!(target instanceof Node) &&
		!(target instanceof NodeList) &&
		!(window.jQuery != null && target instanceof jQuery)
	) {
		throw "Utils.mutationObserver 参数 target 必须为 string|Node|NodeList|jQuery类型";
	}

	var default_obverser_config = {
		/* 监听到元素有反馈，需执行的函数 */
		fn: () => {},
		config: {
			/* 当为 true 时，将会监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target。默认值为 false */
			subtree: undefined,
			/* 当为 true 时，监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）。默认值为 false。 */
			childList: undefined,
			/* 当为 true 时观察所有监听的节点属性值的变化。默认值为 true，当声明了 attributeFilter 或 attributeOldValue，默认值则为 false */
			attributes: undefined,
			/* 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知 */
			attributeFilter: undefined,
			/* 当为 true 时，记录上一次被监听的节点的属性变化；可查阅 MutationObserver 中的 Monitoring attribute values 了解关于观察属性变化和属性值记录的详情。默认值为 false */
			attributeOldValue: undefined,
			/* 当为 true 时，监听声明的 target 节点上所有字符的变化。默认值为 true，如果声明了 characterDataOldValue，默认值则为 false */
			characterData: undefined,
			/* 当为 true 时，记录前一个被监听的节点中发生的文本变化。默认值为 false */
			characterDataOldValue: undefined,
		},
	};
	observer_config = this.assignJSON(default_obverser_config, observer_config);
	var MutationObserver =
		window.MutationObserver ||
		window.webkitMutationObserver ||
		window.MozMutationObserver;
	var mutationObserver = new MutationObserver(function (mutations) {
		observer_config.fn(mutations);
	});
	if (target instanceof Node) {
		/* 传入的参数是节点元素 */
		mutationObserver.observe(target, observer_config.config);
	} else if (target instanceof NodeList) {
		/* 传入的参数是节点元素数组 */
		target.forEach((item) => {
			mutationObserver.observe(item, observer_config.config);
		});
	} else if (typeof jQuery !== "undefined" && target instanceof jQuery) {
		/* 传入的参数是jQuery对象 */
		target.each((index, item) => {
			mutationObserver.observe(item, observer_config.config);
		});
	} else {
		/* 传入的target是字符串 */
		this.waitNode(target).then((NodeList) => {
			NodeList.forEach((item) => {
				mutationObserver.observe(item, observer_config.config);
			});
		});
	}
};

/*
 * @description 获取随机的安卓手机User-Agent（25）个
 * @return {string} - User-Agent
 * @example Utils.getRandomAndroidUA();
 * @exampleResult Mozilla/5.0....
 */
Utils.getRandomAndroidUA = function () {
	const ANDROID_UA = [
		"Mozilla/5.0 (Linux; Android 12; LDN-LX3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.80 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 12; RNE-L03) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.80 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 12; ASUS_X00ID Build/NMF26F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3497.100 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 12; WAS-LX3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.80 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 12; PRA-LX3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.80 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 12; MYA-L03) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.64 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 12; PBEM00 Build/PKQ1.190519.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.3904.62 XWEB/2891 MMWEBSDK/200901 Mobile Safari/537.36 MMWEBID/4773 MicroMessenger/12.19.1760(0x28901335) Process/toolsmp WeChat/arm64 NetType/4G Language/zh_CN ABI/arm64",
		"Mozilla/5.0 (Linux; Android 11; M2003J15SC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 11; Moto G Play) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.64 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 11; Moto C Build/NRD90M.063) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3440.91 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 11; Redmi Note 4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3396.87 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 11; HUAWEI VNS-L21 Build/HUAWEIVNS-L21) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3359.158 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 10; VTR-L09) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.80 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 10; ANG-AN00 Build/HUAWEIANG-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 10; MI 5X Build/OPM1.171019.019; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.3904.62 XWEB/2891 MMWEBSDK/200801 Mobile Safari/537.36 MMWEBID/9633 MicroMessenger/12.18.1740(0x2890123B) Process/toolsmp WeChat/arm64 NetType/4G Language/zh_CN ABI/arm64",
		"Mozilla/5.0 (Linux; Android 10; Moto C Plus Build/NRD90M.04.026) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3440.91 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 10; TRT-LX3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.64 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 9; Moto G (5) Build/NPPS25.137-93-14; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.3497.100 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/193.0.0.45.101;]",
		"Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 9.0; ARM; Trident/12; Touch; rv:11.0; IEMobile/11.0; HTC; Windows Phone 8X by HTC) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537",
		"Mozilla/5.0 (Linux; Android 9; Moto G Build/MOB30M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.2403.119 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 8; MI 6 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.24 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 8; M2003J15SC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.4960.1 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 8; M2003J15SC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4873.1 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 8; M2003J15SC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4749.1 Mobile Safari/537.36",
		"Mozilla/5.0 (Linux; Android 8; M2003J15SC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4600.1 Mobile Safari/537.36",
	];
	return ANDROID_UA[Math.floor(Math.random() * ANDROID_UA.length)];
};

/*
 * @description 获取随机的电脑端User-Agent（25）个
 * @return {string} - User-Agent
 * @example Utils.getRandomPCUA();
 * @exampleResult Mozilla/5.0....
 */
Utils.getRandomPCUA = function () {
	const PC_UA = [
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.107 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5249.119 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5089.1 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.24 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.4960.1 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4873.1 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.94 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4749.1 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4687.2 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4658.2 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4635.4 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4600.1 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4573.1 Safari/537.36 Edge/43.0.2442.991",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4510.2 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4461.1 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4412.5 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4388.4 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.2272.101 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.218 Safari/537.36 Edge/13.10586",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4279.4 Safari/537.36 Edge/13.10586",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.2228.0 Safari/537.36",
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.3538.67 Safari/537.36",
	];
	return PC_UA[Math.floor(Math.random() * PC_UA.length)];
};

/*
 * @description 浏览器端的indexedDB操作封装
 *  let db = new Utils.indexedDB('web_DB', 'nav_text')
 *
 *  let data = {name:'管理员', roleId: 1, type: 1};
 *
 *  db.save('list',data).then((resolve)=>{
 *      console.log(resolve,'存储成功')
 *  })
 *
 *  db.get('list').then((resolve)=>{
 *      console.log(resolve,'查询成功')
 *  })
 *
 *  db.getPaging('list',20,10).then((resolve)=>{
 *      console.log(resolve,'查询分页偏移第20，一共10行成功');
 *  })
 *
 *  db.delete('list').then(resolve=>{
 *      console.log(resolve,'删除成功---->>>>>>name')
 *  })
 *
 *  db.deleteAll().then(resolve=>{
 *      console.log(resolve,'清除数据库---->>>>>>name')
 *  })
 *
 */
Utils.indexedDB = function (dbName = "default_db", storeName = "default_form") {
	this.dbName = dbName; /* 数据存储名 */
	this.slqVersion = "1"; /* websql的版本号，由于ios的问题，版本号的写法不一样 */
	this.dbVersion = 1; /* indexDB的版本号 */
	this.storeName = storeName; /* store----即“表”的名字 */
	this.indexedDB =
		window.indexedDB ||
		window.mozIndexedDB ||
		window.webkitIndexedDB ||
		window.msIndexedDB; /* 监听IndexDB */
	if (!this.indexedDB) {
		alert("很抱歉，您的浏览器不支持indexedDB");
	}
	this.db = {}; /* 缓存数据库，避免同一个页面重复创建和销毁 */
	this.store = null;
	this.errorCode = {
		/* 错误码 */
		success: {
			code: 200,
			msg: "操作成功",
		},
		error: {
			code: 401,
			msg: "操作失败",
		},
		open: { code: 91001, msg: "打开数据库失败" },
		save: { code: 91002, msg: "保存数据失败" },
		get: { code: 91003, msg: "获取数据失败" },
		delete: { code: 91004, msg: "删除数据失败" },
		deleteAll: { code: 91005, msg: "清空数据库失败" },
	};
	/* 创建“表” */
	this.createStore = function (dbName) {
		let txn, store;
		if (this.indexedDB) {
			/* 如果是支持IndexDB的 */
			txn = this.db[dbName].transaction(
				this.storeName,
				"readwrite"
			); /* IndexDB的读写权限 */
			store = txn.objectStore(this.storeName);
		}
		return store;
	};
	this.open = function (callback, dbName) {
		let that = this;
		/* 打开数据库 */
		if (that.indexedDB) {
			/* 如果支持IndexDB */
			if (!that.db[dbName]) {
				/* 如果缓存中没有，则进行数据库的创建或打开，提高效率 */
				let request = that.indexedDB.open(dbName, that.dbVersion);
				request.onerror = function (e) {
					callback({
						code: that.errorCode.open.code,
						msg: that.errorCode.open.msg,
						error: e,
					});
				};
				request.onsuccess = function (e) {
					if (!that.db[dbName]) {
						that.db[dbName] = e.target.result;
					}
					let store = that.createStore(dbName);
					callback(store);
				};
				request.onupgradeneeded = function (e) {
					that.db[dbName] = e.target.result;
					let store = that.db[dbName].createObjectStore(that.storeName, {
						keyPath: "key",
					});
					store.transaction.oncomplete = function (event) {
						callback(store);
					};
				};
			} else {
				/* 如果缓存中已经打开了数据库，就直接使用 */
				let store = that.createStore(dbName);
				callback(store);
			}
		}
	};
	this.save = function (key, value) {
		/* 保存数据到数据库  key---数据key  value----数据值 */
		let that = this;
		if (that.indexedDB) {
			return new Promise((resolve, reject) => {
				let dbName = that.dbName;
				let inData = {
					key: key,
					value: value,
				};
				that.open(function (result) {
					let error = result.hasOwnProperty("error");
					if (error) {
						resolve(result);
					} else {
						let request = result.put(inData);
						request.onsuccess = function (e) {
							resolve({
								code: that.errorCode.success.code,
								msg: that.errorCode.success.msg,
								success: true,
							}); /* 保存成功有success 字段 */
						};
						request.onerror = function (e) {
							resolve({
								code: that.errorCode.save.code,
								msg: that.errorCode.save.msg,
								error: e,
							});
						};
					}
				}, dbName);
			});
		}
	};
	this.get = function (key) {
		/* 根据key获取值 */
		let that = this;
		return new Promise((resolve, reject) => {
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					let error =
						result.hasOwnProperty(
							"error"
						); /* 判断返回的数据中是否有error字段 */
					if (error) {
						reject({
							code: that.errorCode.open.get,
							msg: that.errorCode.get.msg,
							error: error,
							result: result,
						});
					} else {
						let request = result.get(key);
						request.onsuccess = function (e) {
							let result = e.target.result;
							let data = result ? result.value : undefined;
							resolve({
								code: data
									? that.errorCode.success.code
									: that.errorCode.error.code,
								msg: data
									? that.errorCode.success.msg
									: that.errorCode.error.msg,
								data: data || [],
								success: true,
							});
						};
						request.onerror = function (e) {
							reject({
								code: that.errorCode.get.code,
								msg: that.errorCode.get.msg,
								result: result,
								error: e,
							});
						};
					}
				}, dbName);
			}
		});
	};
	this.regexpGet = function (key) {
		let that = this;
		var list = [];
		return new Promise((resolve, reject) => {
			/* 正则查询 */
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					let error =
						result.hasOwnProperty(
							"error"
						); /* 判断返回的数据中是否有error字段 */
					if (error) {
						reject({
							code: that.errorCode.open.get,
							msg: that.errorCode.get.msg,
							error: error,
							result: result,
						});
					} else {
						let request = result.getAll();
						request.onsuccess = function (e) {
							let result = e.target.result;
							if (result.length !== 0) {
								result.forEach((item, index) => {
									if (item["key"].match(key)) {
										var concatList = item["value"];
										concatList["key"] = item["key"];
										list = [...list, concatList];
									}
								});
							}
							resolve({
								code: that.errorCode.success.code,
								msg: that.errorCode.success.msg,
								data: list,
								success: true,
							});
						};
						request.onerror = function (e) {
							reject({
								code: that.errorCode.get.code,
								msg: that.errorCode.get.msg,
								result: result,
								error: e,
							});
						};
					}
				}, dbName);
			}
		});
	};
	this.getPaging = function (key, offset = 0, count = 1) {
		/* 查询分页(未完成) */
		let that = this;
		return new Promise((resolve, reject) => {
			that.get(key).then((_resolve_) => {
				if (_resolve_["code"] !== 200) {
					resolve(_resolve_);
				}
				resolve();
			}),
				(_reject_) => {
					reject(_reject_);
				};
		});
	};
	this.delete = function (key) {
		let that = this;
		return new Promise((resolve, reject) => {
			/* 根据key删除某条数据 */
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					let error = result.hasOwnProperty("error");
					if (error) {
						resolve(result);
					} else {
						let request = result.get(key);
						request.onsuccess = function (e) {
							let recode = e.target.result;
							if (recode) {
								request = result.delete(key);
							}
							resolve({
								code: recode
									? that.errorCode.success.code
									: that.errorCode.error.code,
								msg: recode
									? that.errorCode.success.msg
									: that.errorCode.error.msg,
								success: true,
							});
						};
						request.onerror = function (e) {
							resolve({
								code: that.errorCode.delete.code,
								msg: that.errorCode.delete.msg,
								error: e,
							});
						};
					}
				}, dbName);
			}
		});
	};
	this.deleteAll = function () {
		let that = this;
		return new Promise((resolve, reject) => {
			/* 清空数据库 */
			let dbName = that.dbName;
			if (that.indexedDB) {
				that.open(function (result) {
					let error = result.hasOwnProperty("error");
					if (error) {
						resolve({
							code: that.errorCode.deleteAll.code,
							msg: that.errorCode.deleteAll.msg,
							error: error,
							result: result,
						});
					} else {
						result.clear();
						resolve({
							code: that.errorCode.success.code,
							msg: that.errorCode.success.msg,
							success: true,
						});
					}
				}, dbName);
			}
		});
	};
};

/*
 * @description 获取页面中最大的z-index
 * @return {string} - User-Agent
 * @example Utils.getRandomPCUA();
 * @exampleResult Mozilla/5.0....
 */
Utils.getMaxZIndex = function () {
	let arr = [...document.all].map(
		(e) => +window.getComputedStyle(e).zIndex || 0
	);
	return arr.length ? Math.max(...arr) + 1 : 0;
};

/*
 * @description 数组去重，去除重复的值
 * @param {object} uniqueArrayData - 需要去重的数组
 * @param {object} compareArrayData - 用来比较的数组
 * @param {function} compareFun - 数组比较方法，如果值相同，去除该数据
 * @return {object} - 返回去重完毕的数组
 * @example Utils.uniqueArray([1,2,3],[1,2],(item,item2)=>{return item===item2 ? true:false});
 * @exampleResult [3]
 * @example Utils.uniqueArray([{"key":1,"value":2},{"key":2}],[{"key":1}],(item,item2)=>{return item["key"] === item2["key"] ? true:false});
 * @exampleResult [{"key": 2}]
 */
Utils.uniqueArray = function (
	uniqueArrayData = [],
	compareArrayData = [],
	compareFun
) {
	if (typeof compareFun !== "function") {
		throw "Utils.uniqueArray 参数 compareFun 必须为 function 类型";
	}
	return Array.from(uniqueArrayData).filter(
		(item) =>
			!Array.from(compareArrayData).some(function (ele) {
				return compareFun(item, ele);
			})
	);
};

/*
 * @description (恢复|释放)该对象内部方法，让它执行(无效|有效)
 * @param {object} needReleaseObject - 需要操作的对象
 * @param {string} needReleaseName - 需要操作的对象的名字
 * @param {Array} functionNameList - 需要释放的方法，如果为空，默认全部方法
 * @return {boolean} release - true为释放该对象下的某些方法，false为恢复该对象下的某些方法，默认为true
 * @example Utils.noConflict(console,"console",["log"],true);console.log; // 释放该方法
 * @example Utils.noConflict(console,"console",["log"],false);console.log; //恢复该方法
 * @example Utils.noConflict(console,"console",[],true);console; // 释放所有方法
 * @example Utils.noConflict(console,"console",[],false);console; //恢复所有方法
 */
Utils.noConflict = function (
	needReleaseObject,
	needReleaseName,
	functionNameList = [],
	release = true
) {
	if (typeof needReleaseObject !== "object") {
		throw "Utils.noConflict 参数 needReleaseObject 必须为 object 类型";
	}
	if (!(functionNameList instanceof Array)) {
		throw "Utils.noConflict 参数 functionName 必须为 Array 类型";
	}
	var needReleaseKey = "__" + needReleaseName;
	function cloneObj(obj) {
		/* 复制对象 */
		var newObj = {};
		if (obj instanceof Array) {
			newObj = [];
		}
		for (var key in obj) {
			var val = obj[key];
			newObj[key] = typeof val === "object" ? cloneObj(val) : val;
		}
		return newObj;
	}
	function releaseAll() {
		/* 释放所有 */
		if (typeof window[needReleaseKey] !== "undefined") {
			/* 已存在 */
			return;
		}
		window[needReleaseKey] = cloneObj(needReleaseObject);
		Object.values(needReleaseObject).forEach((value) => {
			if (typeof value === "function") {
				needReleaseObject[value.name] = () => {};
			}
		});
	}
	function releaseOne() {
		/* 释放单个 */
		Array.from(functionNameList).forEach((item) => {
			Object.values(needReleaseObject).forEach((value) => {
				if (typeof value === "function") {
					if (typeof window[needReleaseKey] === "undefined") {
						window[needReleaseKey] = {};
					}
					if (item === value.name) {
						window[needReleaseKey][value.name] = needReleaseObject[value.name];
						needReleaseObject[value.name] = () => {};
					}
				}
			});
		});
	}
	function recoveryAll() {
		/* 恢复所有 */
		if (typeof window[needReleaseKey] === "undefined") {
			/* 未存在 */
			return;
		}
		Object.assign(needReleaseObject, window[needReleaseKey]);
		delete window[needReleaseKey];
	}

	function recoveryOne() {
		/* 恢复单个 */
		if (typeof window[needReleaseKey] === "undefined") {
			/* 未存在 */
			return;
		}
		Array.from(functionNameList).forEach((item) => {
			if (window[needReleaseKey][item]) {
				needReleaseObject[item] = window[needReleaseKey][item];
				delete window[needReleaseKey][item];
				if (Object.keys(window[needReleaseKey]).length === 0) {
					delete window[needReleaseKey];
				}
			}
		});
	}
	if (release) {
		/* 释放 */
		if (functionNameList.length === 0) {
			releaseAll();
		} else {
			/* 对单个进行操作 */
			releaseOne();
		}
	} else {
		/* 恢复 */
		if (functionNameList.length === 0) {
			recoveryAll();
		} else {
			/* 对单个进行操作 */
			recoveryOne();
		}
	}
};

/*
 * @description 注册油猴菜单
 * @param {object} data - 传递的菜单数据
 * @param {boolean} autoReload - 点击该菜单后数据改变后自动重载页面,true为自动重载,false不开启自动重载
 * @example
 * var GM_Menu = new Utils.GM_Menu({
 *    menu_key:{
 *    text:"测试按钮"
 *    enable:true,
 *    showText:(text,enable)=>{
 *      return "[" + (enable ? "√" : "×") + "]" + text;
 *    },
 *    callback:(key,status)=>{
 *      console.log("点击菜单，值修改",status);
 *    }
 *  }
 * });
 *  GM_Menu.get("menu_key"); // 获取某个菜单项的值
 *
 * @exampleResult [√]测试按钮
 */
Utils.GM_Menu = function (data = {}, autoReload = false) {
	if (typeof GM_getValue === "undefined") {
		throw "Utils.GM_Menu 请在脚本开头加上 @grant  GM_getValue";
	}
	if (typeof GM_setValue === "undefined") {
		throw "Utils.GM_Menu 请在脚本开头加上 @grant  GM_getValue";
	}
	if (typeof GM_registerMenuCommand === "undefined") {
		throw "Utils.GM_Menu 请在脚本开头加上 @grant  GM_registerMenuCommand";
	}
	if (typeof GM_unregisterMenuCommand === "undefined") {
		throw "Utils.GM_Menu 请在脚本开头加上 @grant  GM_unregisterMenuCommand";
	}
	let _this_ = this;
	let GM_Menu_Id_Data = []; /* 注册的菜单的id */
	let init = function () {
		/* 初始化数据 */
		Object.keys(data).forEach((key) => {
			let value = GM_getValue(key);
			if (value == null) {
				GM_setValue(key, data[key].enable);
				value = GM_getValue(key);
			}
			data[key]["enable"] = value;
		});
	};

	let register = function () {
		/* 注册油猴菜单 */
		Object.keys(data).forEach((key) => {
			let item = data[key];
			let text = item["text"]; /* 文本 */
			let enable = item["enable"]; /* 用户开启的状态 */
			let showText =
				typeof item["showText"] === "function"
					? item["showText"](text, enable)
					: text; /* 油猴菜单上显示的文本 */
			let callback = item["callback"]; /* 用户点击后的回调 */
			let GM_Menu_Id = null;
			GM_Menu_Id = GM_registerMenuCommand(showText, function () {
				let _enable_ = enable ? false : true;
				GM_setValue(key, _enable_);
				if (typeof callback === "function") {
					callback(key, _enable_);
				}
				if (autoReload) {
					window.location.reload();
				} else {
					_this_.update();
				}
			});
			GM_Menu_Id_Data = [...GM_Menu_Id_Data, GM_Menu_Id];
		});
	};
	this.get = function (key) {
		/* 获取键值开启状态 */
		return data[key]["enable"];
	};
	this.add = function (data) {
		/* 新增菜单 */
		GM_Menu_Id_Data = [...GM_Menu_Id_Data, data];
		init();
		register();
	};
	this.update = function (data) {
		/* 更新菜单 */
		if (data) {
			Object.assign(GM_Menu_Id_Data, data);
		}
		GM_Menu_Id_Data.forEach((_menu_) => {
			GM_unregisterMenuCommand(_menu_);
		});
		init();
		register();
	};
	this.delete = function (key) {
		/* 卸载菜单 */
		GM_unregisterMenuCommand(key);
	};
	init(); /* 初始化数据 */
	register(); /* 注册到油猴菜单中 */
};

/*
 * @description 基于Function prototype，能够勾住和释放任何函数
 * [bool]hook:params{
 * 		realFunc[String|must]:用于保存原始函数的函数名称,用于unHook;
 * 		hookFunc[Function|must]:替换的hook函数;
 * 		context[Object|opt]:目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
 * 		methodName[String|opt]:匿名函数需显式传入目标函数名eg:this.Begin = function(){....};}
 * [bool]unhook:params{
 * 		realFunc[String|must]:用于保存原始函数的函数名称,用于unHook;
 * 		funcName[String|must]:被Hook的函数名称
 * 		context[Object|opt]:目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1}
 * @example var hook = new Utils.Hooks()
 * 					hook.initEnv();
 *					function myFunction(){
							console.log("我自己需要执行的函数");
 						}
						function testFunction(){
							console.log("正常执行的函数");
						}
						testFunction.hook(testFunction,myFunction,window)
 *
 */
Utils.Hooks = function () {
	this.initEnv = function () {
		Function.prototype.hook = function (realFunc, hookFunc, context) {
			var _context = null; //函数上下文
			var _funcName = null; //函数名

			_context = context || window;
			_funcName = getFuncName(this);
			_context["realFunc_" + _funcName] = this;

			console.log(window);

			if (
				_context[_funcName].prototype &&
				_context[_funcName].prototype.isHooked
			) {
				console.log("Already has been hooked,unhook first");
				return false;
			}
			function getFuncName(fn) {
				// 获取函数名
				var strFunc = fn.toString();
				var _regex = /function\s+(\w+)\s*\(/;
				var patten = strFunc.match(_regex);
				if (patten) {
					return patten[1];
				}
				return "";
			}
			try {
				eval(
					"_context[_funcName] = function " +
						_funcName +
						"(){\n" +
						"var args = Array.prototype.slice.call(arguments,0);\n" +
						"var obj = this;\n" +
						"hookFunc.apply(obj,args);\n" +
						"return _context['realFunc_" +
						_funcName +
						"'].apply(obj,args);\n" +
						"};"
				);
				_context[_funcName].prototype.isHooked = true;
				return true;
			} catch (e) {
				console.log("Hook failed,check the params.");
				return false;
			}
		};
		Function.prototype.unhook = function (realFunc, funcName, context) {
			var _context = null;
			var _funcName = null;
			_context = context || window;
			_funcName = funcName;
			if (!_context[_funcName].prototype.isHooked) {
				console.log("No function is hooked on");
				return false;
			}
			_context[_funcName] = _context["realFunc" + _funcName];
			delete _context["realFunc_" + _funcName];
			return true;
		};
	};
	this.cleanEnv = function () {
		if (Function.prototype.hasOwnProperty("hook")) {
			delete Function.prototype.hook;
		}
		if (Function.prototype.hasOwnProperty("unhook")) {
			delete Function.prototype.unhook;
		}
		return true;
	};
};

/*
 * @description 监听某个元素键盘按键事件或window全局按键事件
 * @param {Window|Node} listenObj - 需要监听的对象，可以是全局Window或者某个元素
 * @param {function} callback - 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
 * @example Utils.listenKeyPress(window,(keyName,otherKey)=>{
 * 		if(keyName === "Enter"){
 * 			console.log("回车按键")
 * 		}
 * 		if(otherKey.indexOf("ctrl") && keyName === "Enter" ){
 * 			console.log("Ctrl和回车键");
 *    }
 * })
 *
 */
/* 
字母和数字键的键码值(keyCode)
按键	键码	按键	键码	按键	键码	按键	键码
 A	  65		J		 74		 S		83		1     49
 B	  66		K		 75		 T		84		2		  50
 C	  67		L		 76		 U		85		3		  51
 D	  68		M		 77		 V		86		4		  52
 E	  69		N		 78		 W		87		5	 	  53
 F		70		O		 79		 X		88		6		  54
 G		71		P		 80		 Y		89		7		  55
 H		72		Q		 81		 Z		90		8		  56
 I		73		R		 82		 0		48		9		  57

数字键盘上的键的键码值(keyCode)	功能键键码值(keyCode)
按键	键码	按键  	键码	按键	键码	按键	键码
 0		96		8	     104   F1 	112	  F7	 118
 1		97		9	     105	 F2 	113	  F8	 119
 2		98		*	     106	 F3 	114		F9	 120
 3		99		+	     107	 F4 	115		F10	 121
 4		100		Enter  108	 F5 	116		F11	 122
 5		101		-			 109	 F6 	117		F12	 123
 6		102		.			 110	 	 	 	 
 7		103		/			 111	 	 
 
控制键键码值(keyCode)
按键	     键码		 按键	        键码 		按键	         键码		按键		键码
BackSpace	 8	 		Esc	      	 27	   	 Right Arrow	  39		-_		 189
Tab	       9	 		Spacebar	 	 32	   	 Dw Arrow				40		.>		 190
Clear	 		 12			Page Up		   33		 	 Insert					45		/?		 191
Enter			 13			Page Down		 34		 	 Delete					46		`~		 192
Shift		   16			End					 35		 	 Num Lock				144		[{		 219
Control	   17			Home				 36		 	 ;:							186		\|		 220
Alt		     18			Left Arrow	 37		 	 =+							187		]}		 221
Cape Lock	 20			Up Arrow	   38		 	 ,<							188		'"		 222

多媒体键码值(keyCode)
按键		  键码
音量加	  175	 	 	 	 	 	 
音量减	  174	 	 	 	 	 	 
停止	    179	 	 	 	 	 	 
静音	    173	 	 	 	 	 	 
浏览器	  172	 	 	 	 	 	 
邮件	    180	 	 	 	 	 	 
搜索	    170	 	 	 	 	 	 
收藏	    171
*/
Utils.listenKeyPress = function (listenObj, callback) {
	if (!(listenObj instanceof Window) || !(listenObj instanceof Node)) {
		throw "Utils.listenKeyPress 参数 listenObj 必须为 Window|Node 类型";
	}
	if (typeof callback !== "function") {
		throw "Utils.listenKeyPress 参数 callback 必须为 Function 类型";
	}
	listenObj.addEventListener("keypress", function (event) {
		event = event ? event : window.event;
		let keyName = event.code ? event.code : event.key;
		let otherCodeList = [];
		if (event.ctrlKey) {
			otherCodeList = [...otherCodeList, "ctrl"];
		}
		if (event.altKey) {
			otherCodeList = [...otherCodeList, "alt"];
		}
		if (event.metaKey) {
			otherCodeList = [...otherCodeList, "meta"];
		}
		if (event.shiftKey) {
			otherCodeList = [...otherCodeList, "shift"];
		}
		callback(keyName, otherCodeList);
	});
};
