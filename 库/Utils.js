/**
 * 自己常用的工具类
 * @copyright  GPL-3.0-only
 * @author  WhiteSevs
 * @version  2.2
 **/
(function (Utils) {
  /**
   * JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
   * @param {object} target	目标端
   * @param {object} source	源端
   * @example
   * 	Utils.assignJSON({"1":1,"2":{"3":3}}, {"2":{"3":4}});
   * @return
   * \{"1":1,"2":{"3":4}}
   **/
  Utils.assignJSON = function (target = {}, source = {}) {
    for (var target_key in target) {
      let targetValue = target[target_key];
      let sourceValue = source[target_key];
      if (typeof sourceValue !== "undefined") {
        /* 右边值为Object */
        /* 右边值不为元素节点 */
        if (typeof sourceValue === "object" && !(sourceValue instanceof Node)) {
          target[target_key] = Utils.assignJSON(targetValue, sourceValue);
        } else {
          target[target_key] = sourceValue;
        }
      }
    }
    return target;
  };

  /**
   * 同步执行，等待数组内部执行完毕，注意，该内部不能同步
   * @param {Object} arrayData	需要遍历的数组
   * @param {Function} handleDataFunction	对该数组进行操作的函数，该函数的参数为数组格式的参数,[数组下标，数组项]
   * @example
   * 	await Utils.asyncArrayForEach([1,2,3],xxxFunction);
   **/
  Utils.asyncArrayForEach = function (arrayData, handleDataFunction) {
    var that = this;
    if (typeof arrayData !== "object") {
      throw new Error(
        "Utils.asyncArrayForEach 参数 arrayData 必须为 object 类型"
      );
    }
    if (
      typeof handleDataFunction !== "function" &&
      typeof handleDataFunction !== "string"
    ) {
      throw new Error(
        "Utils.asyncArrayForEach 参数 handleDataFunction 必须为 function|string 类型"
      );
    }
    return Promise.all(
      Array.from(arrayData).map(async (item, index) => {
        await that.tryCatch(index, item).run(handleDataFunction);
      })
    );
  };

  /**
   * 同步File对象转base64
   * @param {Object} fileObj	需要转换的File对象
   * @return {String} base64格式的数据
   * @example
   * 	await Utils.asyncFileToBase64(object);
   * @return
   * 	data:image/jpeg:base64/,xxxxxx
   **/
  Utils.asyncFileToBase64 = function (fileObj) {
    var reader = new FileReader();
    reader.readAsDataURL(fileObj);
    return new Promise((resolve) => {
      reader.onload = function (e) {
        resolve(e.target.result);
      };
    });
  };

  /**
   * 同步执行延时函数
   * @param {Object|String} fnStr	需要延时的函数或字符串格式的函数
   * @param {Number} delayTime	需要检测的元素
   * @return {?undefined}	返回自定义类型数据或者无返回
   * @example
   * 	await Utils.asyncSetTimeOut(xxxFunction, 2500);
   * @return
   * 	xxx
   * @example
   * 	await Utils.asyncSetTimeOut("()=>{console.log(12345)}", 2500);
   * @return
   * 	undefined
   **/
  Utils.asyncSetTimeOut = function (fnStr, delayTime) {
    var that = this;
    if (typeof fnStr !== "function" && typeof fnStr !== "string") {
      throw new Error(
        "Utils.asyncSetTimeOut 参数 fnStr 必须为 function|string 类型"
      );
    }
    if (typeof delayTime !== "number") {
      throw new Error(
        "Utils.asyncSetTimeOut 参数 delayTime 必须为 number 类型"
      );
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(that.tryCatch().run(fnStr));
      }, delayTime);
    });
  };

  /**
   * base64转blob
   * @param {String} dataurl	base64的数据
   * @return {String} blob的链接
   * @example
   * 	Utils.base64ToBlob("data:image/jpeg;base64,.....");
   * @return
   * 	blob://xxxxxxx
   **/
  Utils.base64ToBlob = function (dataurl) {
    if (typeof dataurl !== "string") {
      throw new Error("Utils.base64ToBlob 参数 dataurl 必须为 string 类型");
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

  /**
   * base64转File对象
   * @param {String} dataurl	base64的数据
   * @return {String}	blob的链接
   * @example
   * 	Utils.base64ToFile("data:image/jpeg;base64,.....");
   * @return
   * 	object
   **/
  Utils.base64ToFile = function (dataurl, fileName) {
    if (typeof dataurl !== "string") {
      throw new Error("Utils.base64ToFile 参数 dataurl 必须为 string 类型");
    }
    if (typeof fileName !== "string") {
      throw new Error("Utils.base64ToFile 参数 fileName 必须为 string 类型");
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

  /**
   * blob转File对象
   * @param {String} theBlob	需要转换的blob的链接
   * @param {String} fileName	转换成的File对象的文件名称
   * @return {Object} File对象
   * @example
   * 	Utils.blobToFile("blob://xxxxx");
   * @return
   * 	object
   **/
  Utils.blobToFile = function (theBlob, fileName) {
    if (typeof theBlob !== "string") {
      throw new Error("Utils.blobToFile 参数 theBlob 必须为 string 类型");
    }
    if (typeof fileName !== "string") {
      throw new Error("Utils.blobToFile 参数 fileName 必须为 string 类型");
    }
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  };

  /**
   * 【手机】检测点击的地方是否在该元素区域内
   * @param {Object} obj	需要检测的元素
   * @return {Boolean}	返回true或false
   * @example
   * 	Utils.checkUserClickInNode(document.querySelector(".xxx"));
   * @return
   * 	false
   **/
  Utils.checkUserClickInNode = function (targetNode) {
    if (!(targetNode instanceof Node)) {
      throw new Error(
        "Utils.checkUserClickInNode 参数 targetNode 必须为 Node 类型"
      );
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
      window.event.target.innerHTML.indexOf(targetNode.innerHTML) !== -1
    ) {
      /* 这种情况是应对在界面中隐藏的元素，getBoundingClientRect获取的都是0 */
      return true;
    } else {
      return false;
    }
  };

  /**
   * 删除某个父元素，父元素可能在上层或上上层或上上上层...
   * @param {Object} target	当前元素
   * @param {Object} handleFunc	判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
   * @return {Boolean} 如果找到就删除返回true，如果未删除返回false
   * @example
   * 	Utils.deleteParentNode(
   * 		document.querySelector(".xxx"),(node)=>{
   * 			return node.id="xxx" ? true:false
   * 		}
   * 	);
   * @exampleReturn
   * 	true
   **/
  Utils.deleteParentNode = function (target, handleFunc) {
    if (target == null) {
      throw new Error("Utils.deleteParentNode 参数 target 不能为 null");
    }
    if (!(target instanceof Node)) {
      throw new Error("Utils.deleteParentNode 参数 target 必须为 Node 类型");
    }
    if (typeof handleFunc !== "function") {
      throw new Error(
        "Utils.deleteParentNode 参数 handleFunc 必须为 function 类型"
      );
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

  /**
   * 自定义字典，用于new
   * @example
   *let dictionary = new Utils.Dictionary();
   *dictionary.set("xxx","xxx");
   *dictionary.get("xxx");
   *dictionary.has("xxx");
   **/
  Utils.Dictionary = function () {
    this.items = {};
    this.has = function (key) {
      /* 检查是否有某一个键 */
      return this.items.hasOwnProperty(key);
    };
    this.set = function (key, val = "") {
      /* 为字典添加某一个值 */
      if (key === undefined) {
        throw new Error("Utils.Dictionary().set 参数 key 不能为空");
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

  /**
   * 下载base64格式的数据
   * @param {String} base64Content	需要转换的base64数据
   * @param {String} fileName	需要保存的文件名
   * @example
   * 	Utils.downloadBase64("data:image/jpeg:base64/,xxxxxx");
   **/
  Utils.downloadBase64 = function (base64Content, fileName) {
    if (typeof base64Content !== "string") {
      throw new Error(
        "Utils.downloadBase64 参数 base64Content 必须为 string 类型"
      );
    }
    if (typeof fileName !== "string") {
      throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");
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

  /**
   * 获取某个父元素，父元素可能在上层或上上层或上上上层...
   * 其实也可以使用元素自带的document.querySelector("div").closest("元素选择器")
   * @param {Object} target	当前元素
   * @param {Object} handleFunc	判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
   * @return {Boolean}	如果找到返回满足要求的父元素，如果未找到返回null
   * @example
   * 	Utils.findParentNode(document.querySelector(".xxx"),(node)=>{return node.id==="xxx"});
   * @return
   * 	Node;
   **/
  Utils.findParentNode = function (target, handleFunc) {
    if (target == null) {
      throw new Error("Utils.findParentNode 参数 target 不能为null");
    }
    if (!(target instanceof Node)) {
      throw new Error("Utils.findParentNode 参数 target 必须为 Node 类型");
    }
    if (typeof handleFunc !== "function") {
      throw new Error(
        "Utils.findParentNode 参数 handleFunc 必须为 function 类型"
      );
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

  /**
   * 定位网页中字符串位置并标亮，注意，该字符串必须是能在网页中看得到的，隐藏的是无法定位的
   * @param {String} str	需要寻找的字符串
   * @param {Boolean} caseSensitive	区分大小写
   * @return {Boolean}
   * + 找到	===> true
   * + 找不到 ===> false
   * @example
   * 	Utils.findWindowPageString("xxxxx");
   * @return
   * 	true
   **/
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

  /**
   * 字符串格式的时间转时间戳
   * @param {String} str	字符串格式的时间，例如：
   * + 2022-11-21 00:00:00
   * + 00:00:00
   * @return {Number}
   * 	返回时间戳
   * @example
   * 	Utils.formatTextToTimeStamp("2022-11-21 00:00:00");
   * @return
   * 	1668960000000
   **/
  Utils.formatTextToTimeStamp = function (text) {
    /* 把字符串格式的时间（完整，包括日期和时间）格式化成时间戳 */
    if (typeof text !== "string") {
      throw new Error(
        "Utils.formatTextToTimeStamp 参数 text 必须为 string 类型"
      );
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

  /**
   * 格式化byte为KB、MB、GB、TB、PB、EB、ZB、YB、BB、NB、DB
   * @param {Number} bitSize	字节
   * @param {Boolean} addType	是否添加单位，默认添加
   * @return {String|Number}	添加单位就是字符串，否则为float类型，保留两位
   * @example
   * 	Utils.formatByteToSize("812304");
   * @return
   * 	793.27KB
   **/
  Utils.formatByteToSize = function (byteSize, addType = true) {
    /* B字节转KB、MB、GB */
    byteSize = parseInt(byteSize);
    if (isNaN(byteSize)) {
      throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");
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

  /**
   * 获取数组的随机值
   * @param {String} array	数组数据
   * @return {String}	返回数组的随机值
   * @example
   * 	Utils.getArrayRandValue(["Utils","getArrayRandValue"]);
   * @return
   * 	getArrayRandValue
   **/
  Utils.getArrayRandValue = function (_array_) {
    return _array_[Math.floor(Math.random() * _array_.length)];
  };

  /**
   * 应用场景: 当你想要获取数组形式的元素时，它可能是其它的选择器，那么需要按照先后顺序填入参数
   * 第一个是优先级最高的，依次下降，如果都没有，返回空列表
   * 支持document.querySelectorAll、$("")、()=>{return document.querySelectorAll("")}
   * @param {...NodeList|Function} NodeList
   * @returns {Array}
   * @example
   * Utils.getNodeListValue(document.querySelectorAll("div.xxx"),document.querySelectorAll("a.xxx"));
   * @example
   * Utils.getNodeListValue(divGetFunction,aGetFunction);
   * @return
   * [...div,div,div]
   */
  Utils.getNodeListValue = function () {
    let resultArray = [];
    for (let i = 0; i < arguments.length; i++) {
      let item = arguments[i];
      let value = item;
      if (typeof item === "function") {
        /* 方法 */
        value = item();
      }
      if (value.length !== 0) {
        resultArray = [...value];
        break;
      }
    }
    return resultArray;
  };
  /**
   * 获取格式化后的Date类型时间
   * @param {String} text	需要格式化的字符串或者时间戳
   * @param {String} types	格式化成的显示类型
   * + yyyy 年
   * + MM 月
   * + dd 天
   * + HH 时 (24小时制)
   * + hh 时 (12小时制)
   * + mm 分
   * + ss 秒
   * @return {String}	返回格式化后的时间
   * @example
   * 	Utils.getFormatTime("HH:mm:ss","2022-08-21 23:59:00");
   * @return
   * 	23:59:00
   * @example
   * 	Utils.getFormatTime("HH:mm:ss",1899187424988);
   * @return
   * 	15:10:13
   **/
  Utils.getFormatTime = function (types = "yyyy-MM-dd HH:mm:ss", text) {
    if (typeof types !== "string") {
      throw new Error("Utils.getFormatTime 参数 types 必须为 string 类型");
    }
    if (text != null && typeof text !== "string" && typeof text !== "number") {
      throw new Error(
        "Utils.getFormatTime 参数 text 必须为 string|number 类型"
      );
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

  /**
   * 获取页面中最大的z-index
   * @return {String}	User-Agent
   * @example
   * 	Utils.getRandomPCUA();
   * @return
   * 	Mozilla/5.0....
   **/
  Utils.getMaxZIndex = function () {
    let arr = [...document.all].map(
      (e) => +window.getComputedStyle(e).zIndex || 0
    );
    return arr.length ? Math.max(...arr) + 1 : 0;
  };

  /**
   * 获取随机的安卓手机User-Agent
   * @return {String}	User-Agent
   * @example
   * 	Utils.getRandomAndroidUA();
   * @return
   * 	Mozilla/5.0 (Linux; Android ....
   **/
  Utils.getRandomAndroidUA = function () {
    let androidVersion = Utils.getRandomNumber(9, 13);
    let mobileNameList = [
      "LDN-LX3",
      "RNE-L03",
      "ASUS_X00ID Build/NMF26F",
      "WAS-LX3",
      "PRA-LX3",
      "MYA-L03",
      "Moto G Play",
      "Moto C Build/NRD90M.063",
      "Redmi Note 4 Build/NRD90M",
      "HUAWEI VNS-L21 Build/HUAWEIVNS-L21",
      "VTR-L09",
      "TRT-LX3",
      "M2003J15SC Build/RP1A.200720.011; wv",
      "MI 13 Build/OPR1.170623.027; wv",
    ];
    let randomMobile = Utils.getArrayRandValue(mobileNameList);
    let chromeVersion1 = Utils.getRandomNumber(100, 113);
    let chromeVersion2 = Utils.getRandomNumber(2272, 5304);
    let chromeVersion3 = Utils.getRandomNumber(1, 218);
    return `Mozilla/5.0 (Linux; Android ${androidVersion}; ${randomMobile}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.0.${chromeVersion2}.${chromeVersion3} Mobile Safari/537.36`;
  };

  /**
   * 获取两个数字区间的随机值
   * @param {Number}	number	数字区间
   * @param {Number}	number2	数字区间
   * @return {Number}	返回两个数字区间的随机值
   * @example
   * 	Utils.getRandomNumber(1,10);
   * @return
   * 	5
   * @example
   * 	Utils.getRandomNumber(10,1);
   * @return
   * 	8
   **/
  Utils.getRandomNumber = function (number, number2) {
    if (typeof number !== "number") {
      throw new Error("Utils.getRandNumber 参数 number 必须为 number 类型");
    }
    if (typeof number2 !== "number") {
      throw new Error("Utils.getRandNumber 参数 number2 必须为 number 类型");
    }
    var leftNumber = number > number2 ? number2 : number;
    var rightNumber = number > number2 ? number : number2;
    return Math.round(Math.random() * (rightNumber - leftNumber)) + leftNumber;
  };

  /**
   * 获取随机的电脑端User-Agent
   * @return {String} - User-Agent
   * @example
   * 	Utils.getRandomPCUA();
   * @return
   * 	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome....
   **/
  Utils.getRandomPCUA = function () {
    let chromeVersion1 = Utils.getRandomNumber(100, 113);
    let chromeVersion2 = Utils.getRandomNumber(2272, 5304);
    let chromeVersion3 = Utils.getRandomNumber(1, 218);
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.0.${chromeVersion2}.${chromeVersion3} Safari/537.36`;
  };

  /**
   * 在页面中增加style元素，如果html节点存在子节点，添加子节点第一个，反之，添加到html节点的子节点最后一个
   * @param {String} cssText css字符串
   */
  Utils.GM_addStyle = function (cssText) {
    if (typeof cssText !== "string") {
      throw new Error("Utils.GM_addStyle 参数cssText 必须为String类型");
    }
    let cssNode = document.createElement("style");
    cssNode.setAttribute("type", "text/css");
    cssNode.innerHTML = cssText;
    if (document.documentElement.childNodes.length === 0) {
      /* 插入body后 */
      document.documentElement.appendChild(cssNode);
    } else {
      /* 插入head前面 */
      document.documentElement.insertBefore(
        cssNode,
        document.documentElement.childNodes[0]
      );
    }
    return cssNode;
  };

  /**
   * 对于GM_cookie的兼容写法，当无法使用GM_cookie时可以使用这个,但是并不完全兼容，有些写不出来且限制了httponly是无法访问的
   * @example
   *	let GM_cookie = new Utils.GM_Cookie();
   *	GM_cookie.list({name:"xxx_cookie_xxx"},function(cookies,error){
   *		if (!error) {
   *			console.log(cookies);
   *			console.log(cookies.value);
   *		} else {
   *			console.error(error);
   *		}
   *	});
   *	GM_cookie.set({name:"xxx_cookie_test_xxx",value:"这是Cookie测试值"},function(error){
   *		if (error) {
   *			console.error(error);
   *		} else {
   *			console.log('Cookie set successfully.');
   *		}
   *	})
   *	GM_cookie.delete({name:"xxx_cookie_test_xxx"},function(error){
   *		if (error) {
   *			console.error(error);
   *		} else {
   *			console.log('Cookie set successfully.');
   *		}
   *	})
   **/
  Utils.GM_Cookie = function () {
    /**
	 * 获取Cookie
	 * @param {Object} details 
		+ url string? 默认为当前的url
		+ domain string? 默认为当前的域名(window.location.hostname)
		+ name string? 需要检索的Cookie的名字
		+ path string? 需要检索的Cookie的路径，默认为"/"
	* @param {Function} callback 
		+ cookies object[] 
		+ error string|undefined
	*/
    this.list = (details = {}, callback = () => {}) => {
      var getReturn = [];
      try {
        var _details_ = {
          url: window.location.href,
          domain: window.location.hostname,
          name: "",
          path: "/",
        };
        details = Utils.assignJSON(_details_, details);
        var cookies = document.cookie.split(";");
        cookies.forEach((item) => {
          let nameRegexp = new RegExp("^" + details.name + "=", "g");
          item = item.trimStart();
          if (item.match(nameRegexp)) {
            getReturn = [
              ...getReturn,
              {
                domain: window.location.hostname,
                expirationDate: undefined,
                hostOnly: true,
                httpOnly: false,
                name: item,
                path: "/",
                sameSite: "unspecified",
                secure: true,
                session: false,
                value: decodeURIComponent(item.replace(nameRegexp, "")),
              },
            ];

            return;
          }
        });
        callback(getReturn, undefined);
      } catch (error) {
        callback(getReturn, error);
      }
    };

    /**
     * 设置Cookie
     * @param {Object} details
     * @param {Function} callback
     */
    this.set = (details = {}, callback = () => {}) => {
      try {
        var _details_ = {
          url: window.location.href,
          name: "",
          value: "",
          domain: window.location.hostname,
          path: "/",
          secure: true,
          httpOnly: false,
          expirationDate: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // Expires in 30 days
        };
        details = Utils.assignJSON(_details_, details);
        var life = details.expirationDate
          ? details.expirationDate
          : Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30;
        var cookieStr =
          details.name +
          "=" +
          decodeURIComponent(details.value) +
          ";expires=" +
          new Date(life).toGMTString();
        document.cookie = cookieStr;
        callback();
      } catch (error) {
        callback(error);
      }
    };

    /**
     * 删除Cookie
     * @param {Object} details
     * @param {Function} callback
     */
    this.delete = (details = {}, callback = () => {}) => {
      try {
        var _details_ = {
          url: window.location.href,
          name: "",
          firstPartyDomain: "",
        };
        details = Utils.assignJSON(_details_, details);
        var cookieStr =
          details.name +
          "=" +
          decodeURIComponent("null") +
          ";expires=" +
          new Date().toGMTString();
        document.cookie = cookieStr;
        callback();
      } catch (error) {
        callback(error);
      }
    };
  };

  /**
   * 注册油猴菜单
   * @param {Object} data 传递的菜单数据
   * @param {Boolean} autoReload 点击该菜单后数据改变后自动重载页面,true为自动重载,false不开启自动重载，默认false
   * @param {Function} _GM_getValue_ 传入油猴函数 GM_getValue
   * @param {Function} _GM_setValue_ 传入油猴函数 GM_setValue
   * @param {Function} _GM_registerMenuCommand_ 传入油猴函数 GM_registerMenuCommand
   * @param {Function} _GM_unregisterMenuCommand_ 传入油猴函数 GM_unregisterMenuCommand
   * @example
   * var gm_Menu = new Utils.GM_Menu({
   *    menu_key:{
   *      text: "测试按钮",
   *      enable: true,
   *      showText: (text,enable) =>  {
   *        return "[" + (enable ? "√" : "×") + "]" + text;
   *      },
   *      callback: (key,status)  =>  {
   *        console.log("点击菜单，值修改为",status);
   *      }
   *    }
   * },
   * true,
   * GM_getValue,
   * GM_setValue,
   * GM_registerMenuCommand,
   * GM_unregisterMenuCommand);
   *
   * gm_Menu.get("menu_key"); // 获取某个菜单项的值
   *
   * gm_Menu.add({
   *    menu_key2:{
   *      text: "测试按钮2",
   *      enable: false,
   *      showText: (text,enable) =>  {
   *        return "[" + (enable ? "√" : "×") + "]" + text;
   *      },
   *      callback: (key,status)  =>  {
   *        console.log("点击菜单，值修改为",status);
   *      }
   *    }
   * }); // 添加键为menu_key2的菜单项
   *
   * gm_Menu.update({
   *    menu_key:{
   *      text: "更新后的测试按钮",
   *      enable: true,
   *      showText: (text,enable) =>  {
   *        return "[" + (enable ? "√" : "×") + "]" + text;
   *      },
   *      callback: (key,status)  =>  {
   *        console.log("点击菜单更新后的测试按钮，新值修改为",status);
   *      }
   *    }
   * }); // 更新键为menu_key的显示文字和点击回调
   *
   * gm_Menu.delete("menu_key"); // 删除键为menu_key的菜单
   *
   * @exampleResult [√]测试按钮
   **/
  Utils.GM_Menu = function (
    data = {},
    autoReload = false,
    _GM_getValue_,
    _GM_setValue_,
    _GM_registerMenuCommand_,
    _GM_unregisterMenuCommand_
  ) {
    if (typeof _GM_getValue_ !== "function") {
      throw new Error(
        "Utils.GM_Menu 请在脚本开头加上 @grant  GM_getValue，且传入该参数"
      );
    }
    if (typeof _GM_setValue_ !== "function") {
      throw new Error(
        "Utils.GM_Menu 请在脚本开头加上 @grant  GM_setValue，且传入该参数"
      );
    }
    if (typeof _GM_registerMenuCommand_ !== "function") {
      throw new Error(
        "Utils.GM_Menu 请在脚本开头加上 @grant  GM_registerMenuCommand，且传入该参数"
      );
    }
    if (typeof _GM_unregisterMenuCommand_ !== "function") {
      throw new Error(
        "Utils.GM_Menu 请在脚本开头加上 @grant  GM_unregisterMenuCommand，且传入该参数"
      );
    }
    let that = this;
    let menuInfoData = []; /* 注册的菜单的id */
    let init = function () {
      /* 初始化数据 */
      Object.keys(data).forEach((menuId) => {
        let value = _GM_getValue_(menuId);
        if (value == null) {
          _GM_setValue_(menuId, data[menuId].enable);
          value = _GM_getValue_(menuId);
        }
        data[menuId]["enable"] = value;
      });
    };

    let register = function () {
      /* 注册油猴菜单 */
      Object.keys(data).forEach((menuId) => {
        let item = data[menuId];
        let text = item["text"]; /* 文本 */
        let enable = item["enable"]; /* 用户开启的状态 */
        let showText =
          typeof item["showText"] === "function"
            ? item["showText"](text, enable)
            : text; /* 油猴菜单上显示的文本 */
        let clickCallBack = item["callback"]; /* 用户点击后的回调 */
        let menuInfo = null;
        menuInfo = _GM_registerMenuCommand_(showText, function () {
          let menuEnable = enable ? false : true;
          _GM_setValue_(menuId, menuEnable);
          if (typeof clickCallBack === "function") {
            clickCallBack(menuId, menuEnable);
          }
          if (autoReload) {
            window.location.reload();
          } else {
            that.update();
          }
        });
        menuInfoData = [...menuInfoData, menuInfo];
      });
    };
    /**
     * 获取键值开启状态
     * @param {String} menuId
     * @returns true | false
     */
    this.get = function (menuId) {
      return data[menuId]["enable"];
    };
    /**
     * 新增菜单数据
     * @param {Object} _menuInfoData_
     */
    this.add = function (_menuInfoData_) {
      menuInfoData = [...menuInfoData, _menuInfoData_];
      init();
      register();
    };
    /**
     * 更新菜单数据
     * @param {Object} _menuInfoData_
     */
    this.update = function (_menuInfoData_) {
      if (_menuInfoData_) {
        Object.assign(menuInfoData, _menuInfoData_);
      }
      Object.keys(menuInfoData).forEach((menuId) => {
        this.delete(menuId);
      });
      init();
      register();
    };
    /**
     * 卸载菜单
     * @param {String} menuId 菜单键
     */
    this.delete = function (menuId) {
      _GM_unregisterMenuCommand_(menuId);
    };
    init(); /* 初始化数据 */
    register(); /* 注册到油猴菜单中 */
  };

  /**
   * 基于Function prototype，能够勾住和释放任何函数
   * [bool]hook:params{
   * 		realFunc[String|must]:用于保存原始函数的函数名称,用于unHook;
   * 		hookFunc[Function|must]:替换的hook函数;
   * 		context[Object|opt]:目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
   * 		methodName[String|opt]:匿名函数需显式传入目标函数名eg:this.Begin = function(){....};}
   * [bool]unhook:params{
   * 		realFunc[String|must]:用于保存原始函数的函数名称,用于unHook;
   * 		funcName[String|must]:被Hook的函数名称
   * 		context[Object|opt]:目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1}
   * @example
   *	var hook = new Utils.Hooks();
   *	hook.initEnv();
   *	function myFunction(){
   *		console.log("我自己需要执行的函数");
   *	}
   *	function testFunction(){
   *		console.log("正常执行的函数");
   *	}
   *	testFunction.hook(testFunction,myFunction,window)
   *
   **/
  Utils.Hooks = function () {
    this.initEnv = function () {
      Function.prototype.hook = function (realFunc, hookFunc, context) {
        var _context = null; //函数上下文
        var _funcName = null; //函数名

        _context = context || window;
        _funcName = getFuncName(this);
        _context["realFunc_" + _funcName] = this;

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

  /**
   * 为减少代码量和回调，把GM_xmlhttpRequest封装
   * 文档地址: https://www.tampermonkey.net/documentation.php?ext=iikm
   * 其中onloadstart、onprogress、onreadystatechange是回调形式，onabort、ontimeout、onerror可以设置全局回调函数
   * @example
   * let httpx = new Utils.Httpx(GM_xmlhttpRequest);
   * let postResp = await httpx.post({
   *    url:url,
   *    data:JSON.stringify({
   *      test:1
   *    }),
   *    timeout: 5000
   *  });
   * console.log(postResp);
   * if(postResp === "onload" && postResp.status){
   *  // onload
   * }else if(postResp === "ontimeout"){
   *  // ontimeout
   * }
   * @example
   * //也可以先配置全局参数
   * let httpx = new Utils.Httpx(GM_xmlhttpRequest);
   * httpx.config({
   *  timeout: 5000,
   *  async: false,
   *  responseType: "html",
   *  redirect: "follow",
   * })
   * // 优先级为 默认details < 全局details < 单独的details
   */
  Utils.Httpx = function (_GM_xmlHttpRequest_) {
    if (typeof _GM_xmlHttpRequest_ !== "function") {
      throw new Error(
        "Utils.Httpx 请先加入@grant GM_xmlhttpRequest在开头且传入该参数"
      );
    }
    let defaultDetails = {
      url: undefined,
      timeout: 5000,
      async: false,
      responseType: undefined,
      headers: undefined,
      data: undefined,
      redirect: undefined,
      cookie: undefined,
      binary: undefined,
      nocache: undefined,
      revalidate: undefined,
      context: undefined,
      overrideMimeType: undefined,
      anonymous: undefined,
      fetch: undefined,
      user: undefined,
      password: undefined,
      onabort: function () {},
      onerror: function () {},
      ontimeout: function () {},
      onloadstart: function () {},
      onreadystatechange: function () {},
    };
    /**
     * 处理发送请求的details，去除值为undefined、空function的值
     * @param {object} details
     * @returns
     */
    function handleRequestDetails(details) {
      Object.keys(details).forEach((keyName) => {
        let nullFunc = () => {};
        let nullFunc2 = function () {};
        if (
          typeof details[keyName] === "undefined" ||
          (details[keyName] instanceof Function &&
            (details[keyName].toString() === nullFunc.toString() ||
              details[keyName].toString() === nullFunc2.toString()))
        ) {
          delete details[keyName];
          return;
        }
      });
      if (
        details.url == null ||
        typeof details.url !== "string" ||
        (typeof details.url === "string" && details.url.trim() === "")
      ) {
        console.log(details.url);
        throw Error(`Utils.Httpx 参数 url当前值不符合要求`);
      }
      return details;
    }
    /**
     * onabort请求被取消-触发
     * @param {object} details 配置
     * @param {object} resolve 回调
     * @param {object} argumentsList 参数列表
     */
    function onAbortCallBack(details, resolve, argumentsList) {
      if (details.hasOwnProperty("onabort")) {
        details?.onabort?.apply(this, argumentsList);
      } else {
        defaultDetails?.onabort?.apply(this, argumentsList);
      }
      resolve({
        status: false,
        data: argumentsList,
        msg: "请求被取消",
        type: "onabort",
      });
    }
    /**
     * onerror请求异常-触发
     * @param {object} details 配置
     * @param {object} resolve 回调
     * @param {object} response 响应
     * @param {object} argumentsList 参数列表
     */
    function onErrorCallBack(details, resolve, response, argumentsList) {
      if (details.hasOwnProperty("onerror")) {
        details?.onerror?.apply(this, argumentsList);
      } else {
        defaultDetails?.onerror?.apply(this, argumentsList);
      }
      resolve({
        status: false,
        data: response,
        msg: "请求异常",
        type: "onerror",
      });
    }
    /**
     * ontimeout请求超时-触发
     * @param {object} details 配置
     * @param {object} resolve 回调
     * @param {object} argumentsList 参数列表
     */
    function onTimeoutCallBack(details, resolve, argumentsList) {
      if (details.hasOwnProperty("ontimeout")) {
        details?.ontimeout?.apply(this, argumentsList);
      } else {
        defaultDetails?.ontimeout?.apply(this, argumentsList);
      }
      resolve({
        status: false,
        data: response,
        msg: "请求超时",
        type: "ontimeout",
      });
    }
    /**
     * onloadstart请求开始-触发
     * @param {object} details 配置
     * @param {object} argumentsList 参数列表
     */
    function onLoadStartCallBack(details, argumentsList) {
      if (details.hasOwnProperty("onloadstart")) {
        details?.onloadstart?.apply(this, argumentsList);
      } else {
        defaultDetails?.onloadstart?.apply(this, argumentsList);
      }
    }
    /**
     * onreadystatechange准备状态改变-触发
     * @param {object} details 配置
     * @param {object} argumentsList 参数列表
     */
    function onReadyStateChangeCallBack(details, argumentsList) {
      if (details.hasOwnProperty("onreadystatechange")) {
        details?.onreadystatechange?.apply(this, argumentsList);
      } else {
        defaultDetails?.onreadystatechange?.apply(this, argumentsList);
      }
    }
    /**
     * onprogress上传进度-触发
     * @param {object} details 配置
     * @param {object} argumentsList 参数列表
     */
    function onProgressCallBack(details, argumentsList) {
      if (details.hasOwnProperty("onprogress")) {
        details?.onprogress?.apply(this, argumentsList);
      } else {
        defaultDetails?.onprogress?.apply(this, argumentsList);
      }
    }
    /**
     * onload加载完毕-触发
     * @param {object} resolve 回调
     * @param {object} response 响应
     */
    function onLoadCallBack(resolve, response) {
      resolve({
        status: true,
        data: response,
        msg: "请求完毕",
        type: "onload",
      });
    }
    /**
     * GET 请求
     * @param {object} details
     * @returns {object}
     */
    this.get = function (details) {
      return new Promise((resolve) => {
        let requestDetails = {
          url: details.url || defaultDetails.url,
          method: "get",
          timeout: details.timeout || defaultDetails.timeout,
          async: details.async || defaultDetails.async,
          responseType: details.responseType || defaultDetails.responseType,
          headers: details.headers || defaultDetails.headers,
          data: details.data || defaultDetails.data,
          redirect: details.redirect || defaultDetails.redirect,
          cookie: details.cookie || defaultDetails.cookie,
          binary: details.binary || defaultDetails.binary,
          nocache: details.nocache || defaultDetails.nocache,
          revalidate: details.revalidate || defaultDetails.revalidate,
          context: details.context || defaultDetails.context,
          overrideMimeType:
            details.overrideMimeType || defaultDetails.overrideMimeType,
          anonymous: details.anonymous || defaultDetails.anonymous,
          fetch: details.fetch || defaultDetails.fetch,
          user: details.user || defaultDetails.user,
          password: details.password || defaultDetails.password,
          onabort: function () {
            onAbortCallBack(details, resolve, arguments);
          },
          onerror: function (response) {
            onErrorCallBack(details, resolve, response, arguments);
          },
          onloadstart: function () {
            onLoadStartCallBack(details, arguments);
          },
          onreadystatechange: function () {
            onReadyStateChangeCallBack(details, arguments);
          },
          ontimeout: function () {
            onTimeoutCallBack(details, resolve, arguments);
          },
          onload: function (response) {
            onLoadCallBack(resolve, response);
          },
        };
        requestDetails = handleRequestDetails(requestDetails);
        _GM_xmlHttpRequest_(requestDetails);
      });
    };
    /**
     * POST 请求
     * @param {object} details
     * @returns
     */
    this.post = function (details) {
      return new Promise((resolve) => {
        let requestDetails = {
          url: details.url || defaultDetails.url,
          method: "post",
          timeout: details.timeout || defaultDetails.timeout,
          async: details.async || defaultDetails.async,
          responseType: details.responseType || defaultDetails.responseType,
          headers: details.headers || defaultDetails.headers,
          data: details.data || defaultDetails.data,
          redirect: details.redirect || defaultDetails.redirect,
          cookie: details.cookie || defaultDetails.cookie,
          binary: details.binary || defaultDetails.binary,
          nocache: details.nocache || defaultDetails.nocache,
          revalidate: details.revalidate || defaultDetails.revalidate,
          context: details.context || defaultDetails.context,
          overrideMimeType:
            details.overrideMimeType || defaultDetails.overrideMimeType,
          anonymous: details.anonymous || defaultDetails.anonymous,
          fetch: details.fetch || defaultDetails.fetch,
          user: details.user || defaultDetails.user,
          password: details.password || defaultDetails.password,
          onabort: function () {
            onAbortCallBack(details, resolve, arguments);
          },
          onerror: function (response) {
            onErrorCallBack(details, resolve, response, arguments);
          },
          onloadstart: function () {
            onLoadStartCallBack(details, arguments);
          },
          onprogress: function () {
            onProgressCallBack(details, arguments);
          },
          onreadystatechange: function () {
            onReadyStateChangeCallBack(details, arguments);
          },
          ontimeout: function () {
            onTimeoutCallBack(details, resolve, arguments);
          },
          onload: function (response) {
            onLoadCallBack(resolve, response);
          },
        };
        requestDetails = handleRequestDetails(requestDetails);
        _GM_xmlHttpRequest_(requestDetails);
      });
    };
    /**
     * HEAD 请求
     * @param {object} details
     * @returns
     */
    this.head = function (details) {
      return new Promise((resolve) => {
        let requestDetails = {
          url: details.url || defaultDetails.url,
          method: "head",
          timeout: details.timeout || defaultDetails.timeout,
          async: details.async || defaultDetails.async,
          responseType: details.responseType || defaultDetails.responseType,
          headers: details.headers || defaultDetails.headers,
          data: details.data || defaultDetails.data,
          redirect: details.redirect || defaultDetails.redirect,
          cookie: details.cookie || defaultDetails.cookie,
          binary: details.binary || defaultDetails.binary,
          nocache: details.nocache || defaultDetails.nocache,
          revalidate: details.revalidate || defaultDetails.revalidate,
          context: details.context || defaultDetails.context,
          overrideMimeType:
            details.overrideMimeType || defaultDetails.overrideMimeType,
          anonymous: details.anonymous || defaultDetails.anonymous,
          fetch: details.fetch || defaultDetails.fetch,
          user: details.user || defaultDetails.user,
          password: details.password || defaultDetails.password,
          onabort: function () {
            onAbortCallBack(details, resolve, arguments);
          },
          onerror: function (response) {
            onErrorCallBack(details, resolve, response, arguments);
          },
          onloadstart: function () {
            onLoadStartCallBack(details, arguments);
          },
          onreadystatechange: function () {
            onReadyStateChangeCallBack(details, arguments);
          },
          ontimeout: function () {
            onTimeoutCallBack(details, resolve, arguments);
          },
          onload: function (response) {
            onLoadCallBack(resolve, response);
          },
        };
        requestDetails = handleRequestDetails(requestDetails);
        _GM_xmlHttpRequest_(requestDetails);
      });
    };
    this.config = function (details) {
      defaultDetails = Utils.assignJSON(defaultDetails, details);
    };
  };
  /**
   * 浏览器端的indexedDB操作封装
   * @example
   *  let db = new Utils.indexedDB('web_DB', 'nav_text')
   *  let data = {name:'管理员', roleId: 1, type: 1};
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
   **/
  Utils.indexedDB = function (
    dbName = "default_db",
    storeName = "default_form"
  ) {
    this.dbName = dbName; /* 数据存储名 */
    this.slqVersion =
      "1"; /* websql的版本号，由于ios的问题，版本号的写法不一样 */
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
    /**
     * 创建 “表”
     * @param {String} dbName 表名
     * @returns
     */
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
    /**
     * 打开数据库
     * @param {Function} callback  回调
     * @param {String} dbName 数据库名
     */
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
    /**
     * 保存数据到数据库
     * @param {*} key 数据key
     * @param {*} value 数据值
     * @returns
     */
    this.save = function (key, value) {
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
    /**
     * 根据key获取值
     * @param {String} key 数据key
     * @returns
     */
    this.get = function (key) {
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
    /**
     * 正则获取数据
     * @param {String} key 数据键
     * @returns
     */
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
    /**
     * 删除数据
     * @param {String} key 数据键
     * @returns
     */
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
    /**
     * 删除所有数据
     * @returns
     */
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

  /**
   * 判断是否是手机访问
   * @return {Boolean} - 返回如果是手机true，否则false
   * @example
   * 	Utils.isPhone();
   * @return true
   **/
  Utils.isPhone = function () {
    return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent));
  };

  /**
   * 判断对象或数据是否为空
   * @param {Object} _obj_ - 需要判断的变量
   * @example
   * 	Utils.isNull({});
   * @return  true
   * @example
   * 	Utils.isNull([]);
   * @return  true
   **/
  Utils.isNull = function (_obj_) {
    var result = false;
    if (typeof _obj_ === "undefined") {
      result = true;
    } else if (typeof _obj_ === "object") {
      if (Object.keys(_obj_).length === 0) {
        result = true;
      }
    } else if (typeof _obj_ === "number") {
      result = _obj_ === 0 ? true : false;
    }
    return result;
  };

  /**
   * JSON内所有的值转为Array数组
   * @param {Object} _json_ JSON数据
   * @return {Object} 返回数组
   * @example
   * 	Utils.jsonAllValueToArray({"Utils":"jsonToArray","return","Array"});
   * @return ['jsonToArray', 'Array']
   **/
  Utils.jsonAllValueToArray = function (_json_) {
    if (typeof _json_ !== "object") {
      throw new Error(
        "Utils.jsonAllValueToArray 参数 _json_ 必须为 object 类型"
      );
    }
    var retArray = [];
    Object.keys(_json_).forEach(function (key) {
      retArray = [...retArray, _json_[key]];
    });
    return retArray;
  };

  /**
   * JSON格式的字符串转为JSON对象
   * @param {String} text - JSON格式的字符串
   * @return {Object} - 返回JSON对象
   * @example
   * 	Utils.jsonStrToObject('{"Utils":"jsonStrToObject","return","json"}');
   * @return
   * 	'{"Utils":"jsonStrToObject","return","json"}'
   **/
  Utils.jsonStrToObject = function (text) {
    if (typeof text !== "string") {
      throw new Error("Utils.jsonStrToObject 参数 text 必须为 string 类型");
    }
    return window.eval("(" + text + ")");
  };

  /**
   * 监听某个元素键盘按键事件或window全局按键事件
   * @param {Window|Node} listenObj 需要监听的对象，可以是全局Window或者某个元素
   * @param {Function|undefined} callback 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
   * @example 
   * Utils.listenKeyPress(window,(keyName,otherKey)=>{
   * 	if(keyName === "Enter"){
   * 		console.log("回车按键")
   * 	}
   * 	if(otherKey.indexOf("ctrl") && keyName === "Enter" ){
   * 		console.log("Ctrl和回车键");
   *    }
   * })
   * @example
   * 字母和数字键的键码值(keyCode)
	按键	键码	按键	键码	按键	键码	按键	键码
	A	65	J	74	S	83	1	49
	B	66	K	75	T	84	2	50
	C	67	L	76	U	85	3	51
	D	68	M	77	V	86	4	52
	E	69	N	78	W	87	5	53
	F	70	O	79	X	88	6	54
	G	71	P	80	Y	89	7	55
	H	72	Q	81	Z	90	8	56
	I	73	R	82	0	48	9	57

	数字键盘上的键的键码值(keyCode)	
	功能键键码值(keyCode)
	按键	键码	按键  	键码	按键	键码	按键	键码
	0	96	8	104	F1	112	F7	118
	1	97	9	105	F2	113	F8	119
	2	98	*	106	F3	114	F9	120
	3	99	+	107	F4	115	F10	121
	4	100	Enter	108	F5	116	F11	122
	5	101	-	109	F6	117	F12	123
	6	102	.	110	 	 	 	 
	7	103	/	111	 	 
	
	控制键键码值(keyCode)
	按键		键码	按键		键码	按键		键码	按键		键码
	BackSpace	8	Esc		27	→		39	-_		189
	Tab		9	Spacebar	32	↓		40	.>		190
	Clear		12	Page Up		33	Insert		45	/?		191
	Enter		13	Page Down	34	Delete		46	`~		192
	Shift		16	End		35	Num Lock	144	[{		219
	Control		17	Home		36	;:		186	\|		220
	Alt		18	←		37	=+		187	]}		221
	Cape Lock	20	↑		38	,<		188	'"		222

	多媒体键码值(keyCode)
	按键		键码
	音量加		175
	音量减		174
	停止		179
	静音		173
	浏览器		172
	邮件		180
	搜索		170
	收藏		171

   *
   **/
  Utils.listenKeyPress = function (listenObj, callback) {
    if (!(listenObj instanceof Window) && !(listenObj instanceof Node)) {
      throw new Error(
        "Utils.listenKeyPress 参数 listenObj 必须为 Window|Node 类型"
      );
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
      if (typeof callback === "function") {
        callback(keyName, otherCodeList, event);
      }
    });
  };

  /**
   * 自动锁对象，用于循环判断运行的函数，在循环外new后使用，注意，如果函数内部存在异步操作，需要使用await
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
   **/
  Utils.lockFunction = function (func) {
    let flag = false;
    this.lock = function () {
      flag = true;
    };
    this.unlock = function () {
      flag = false;
    };
    this.run = async function () {
      if (flag) {
        return;
      }
      this.lock();
      await func(arguments); /* arguments调用 */
      this.unlock();
    };
  };

  /**
   * 日志对象
   * @param {Function} _GM_info_ 油猴管理器的API GM_info
   * @example
   * var log = new Utils.Log(GM_info);
   * log.info("普通输出");
   * log.success("成功输出");
   * log.error("错误输出");
   *
   * log.tag = "自定义tag信息";
   * log.info("自定义info的颜色","#e0e0e0");
   *
   * log.config({
   *    successColor: "#31dc02",
   *    errorColor: "#e02d2d",
   *    infoColor: "black",
   * })
   * log.success("颜色为#31dc02");
   */
  Utils.Log = function (_GM_info_) {
    if (typeof _GM_info_ !== "object") {
      throw new Error(
        'Utils.Log 请添加@grant GM_info且传入该参数,如果使用"use strict"; 就无法获取caller'
      );
    }
    let msgColorDetails = [
      "font-weight: bold; color: cornflowerblue",
      "font-weight: bold; color: cornflowerblue",
      "font-weight: bold; color: darkorange",
      "font-weight: bold; color: cornflowerblue",
    ];
    this.details = {
      successColor: "blue" /* 成功颜色 */,
      errorColor: "red" /* 错误颜色 */,
      infoColor: "0" /* 信息颜色 */,
      debug: false /* 开启debug模式，会在控制台输出调用者位置 */,
      autoClearConsole: false /* 当console输出超过logMaxCount数量自动清理控制台 */,
      logMaxCount: 999 /* console输出的最高数量，autoClearConsole开启则生效 */,
    };
    let logCount = 0;
    /**
     * 解析Error的堆栈获取调用者所在的函数位置
     * @param {list} stack
     */
    let parseErrorStack = function (stack) {
      let result = {
        functionName: "",
        functionPosition: "",
      };
      for (let i = 0; i < stack.length; i++) {
        let stackString = stack[i].trim();
        let stackFunctionName = stackString.match(/^at[\s]+(.+?)[\s]+/i);
        let stackFunctionNamePosition = stackString.match(
          /^at[\s]+.+[\s]+\((.+?)\)/i
        );
        if (stackFunctionName == null) {
          continue;
        }
        stackFunctionName = stackFunctionName[stackFunctionName.length - 1];
        stackFunctionNamePosition =
          stackFunctionNamePosition[stackFunctionNamePosition.length - 1];
        if (
          stackFunctionName === "" ||
          stackFunctionName.match(
            new RegExp(
              "(^Utils.Log.|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each)",
              "g"
            )
          )
        ) {
          continue;
        } else {
          result.functionName = stackFunctionName;
          result.functionPosition = stackFunctionNamePosition;
          break;
        }
      }
      return result;
    };
    /**
     * 检测清理控制台
     * @this {this}
     */
    let checkClearConsole = function () {
      logCount++;
      if (
        this.details.autoClearConsole &&
        logCount > this.details.logMaxCount
      ) {
        console.clear();
        logCount = 0;
      }
    };
    this.tag = _GM_info_?.script?.name;
    /**
     * 控制台-普通输出
     * @param {any} msg
     * @param {String} color
     * @param {String} type
     */
    this.info = function (msg, color, type = "info") {
      checkClearConsole.apply(this);
      let stack = new Error().stack.split("\n");
      if (type === "info") {
        color = color || this.details.infoColor;
      }
      stack.splice(0, 1);
      let errorStackParse = parseErrorStack(stack);
      let stackFunctionName = errorStackParse["functionName"];
      let stackFunctionNamePosition = errorStackParse["functionPosition"];
      let callerName = stackFunctionName;
      if (typeof msg === "object") {
        console.log(
          `%c[${this.tag}%c-%c${callerName}%c]%c `,
          ...msgColorDetails,
          `color: ${color}`,
          msg
        );
      } else {
        console.log(
          `%c[${this.tag}%c-%c${callerName}%c]%c ${msg}`,
          ...msgColorDetails,
          `color: ${color}`
        );
      }
      if (this.details.debug) {
        console.log(stackFunctionNamePosition);
      }
    };
    /**
     * 控制台-错误输出
     * @param {any} msg
     * @param {string} color
     */
    this.error = function (msg, color) {
      this.info(msg, color || this.details.errorColor, "error");
    };
    /**
     * 控制台-成功输出
     * @param {any} msg
     * @param {string} color
     */
    this.success = function (msg, color) {
      this.info(msg, color || this.details.successColor, "success");
    };
    /**
     * 控制台-输出表格
     * @param {object} msgObj
     * @example
     * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
     */
    this.table = function (msgObj) {
      checkClearConsole.apply(this);
      let stack = new Error().stack.split("\n");
      if (type === "info") {
        color = color || this.details.infoColor;
      }
      stack.splice(0, 1);
      let errorStackParse = parseErrorStack(stack);
      let stackFunctionName = errorStackParse["functionName"];
      let stackFunctionNamePosition = errorStackParse["functionPosition"];
      let callerName = stackFunctionName;
      console.log(
        `%c[${this.tag}%c-%c${callerName}%c]%c`,
        ...msgColorDetails,
        `color: ${color}`
      );
      console.table(msgObj);
      if (this.details.debug) {
        console.log(stackFunctionNamePosition);
      }
    };
    /**
     * 配置Log对象的颜色
     * @param {object} _details_ 配置信息
     */
    this.config = function (_details_) {
      this.details = Object.assign(this.details, _details_);
    };
  };
  /**
   * 数组内数据部分字段合并成字符串
   * @example Utils.mergeArrayToString([{"name":"数组内数据部分字段合并成字符串->"},{"name":"mergeToString"}],(item)=>{return item["name"]});
   * @exampleResult 数组内数据部分字段合并成字符串->mergeArrayToString
   **/
  Utils.mergeArrayToString = function (data, handleFunc) {
    if (!(data instanceof Array)) {
      throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");
    }
    if (typeof handleFunc !== "function") {
      throw new Error(
        "Utils.mergeArrayToString 参数 handleFunc 必须为 Function 类型"
      );
    }
    let content = "";
    data.forEach((item) => {
      content = content + handleFunc(item);
    });
    return content;
  };

  /**
   * 监听页面元素改变并处理
   * @param {object|Node} target - 需要监听的元素，如果不存在，可以等待它出现
   * @param {object} observer_config - MutationObserver的配置
   * @example
   * Utils.mutationObserver(document.querySelector("div.xxxx"),
   * {
   * "callback":(mutations, observer)=>{},
   * "config":{childList:true,attributes:true}}
   * );
   * @example
   * Utils.mutationObserver(document.querySelectorAll("div.xxxx"),
   * {
   * "callback":(mutations, observer)=>{},
   * "config":{childList:true,attributes:true}}
   * );
   * @example
   * Utils.mutationObserver($("div.xxxx"),
   * {
   * "callback":(mutations, observer)=>{},
   * "config":{childList:true,attributes:true}}
   * );
   **/
  Utils.mutationObserver = function (target, observer_config) {
    if (
      !(target instanceof Node) &&
      !(target instanceof NodeList) &&
      !(jQuery != null && target instanceof jQuery)
    ) {
      throw new Error(
        "Utils.mutationObserver 参数 target 必须为 Node|NodeList|jQuery类型"
      );
    }

    var default_obverser_config = {
      /* 监听到元素有反馈，需执行的函数 */
      callback: () => {},
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
    var mutationObserver = new MutationObserver(function (mutations, observer) {
      observer_config?.callback(mutations, observer);
    });
    if (target instanceof Node) {
      /* 传入的参数是节点元素 */
      mutationObserver.observe(target, observer_config.config);
    } else if (target instanceof NodeList) {
      /* 传入的参数是节点元素数组 */
      target.forEach((item) => {
        mutationObserver.observe(item, observer_config.config);
      });
    } else if (jQuery && target instanceof jQuery) {
      /* 传入的参数是jQuery对象 */
      target.each((index, item) => {
        mutationObserver.observe(item, observer_config.config);
      });
    } else {
      /* 未知 */
      console.error("Utils.mutationObserver 未知参数", arguments);
    }
    return mutationObserver;
  };
  /**
   * (恢复|释放)该对象内部方法，让它执行(无效|有效)
   * @param {Object} needReleaseObject - 需要操作的对象
   * @param {String} needReleaseName - 需要操作的对象的名字
   * @param {Array} functionNameList - 需要释放的方法，如果为空，默认全部方法
   * @return {Boolean} release - true为释放该对象下的某些方法，false为恢复该对象下的某些方法，默认为true
   * @example Utils.noConflict(console,"console",["log"],true);console.log; // 释放该方法
   * @example Utils.noConflict(console,"console",["log"],false);console.log; //恢复该方法
   * @example Utils.noConflict(console,"console",[],true);console; // 释放所有方法
   * @example Utils.noConflict(console,"console",[],false);console; //恢复所有方法
   **/
  Utils.noConflict = function (
    needReleaseObject,
    needReleaseName,
    functionNameList = [],
    release = true
  ) {
    if (typeof needReleaseObject !== "object") {
      throw new Error(
        "Utils.noConflict 参数 needReleaseObject 必须为 object 类型"
      );
    }
    if (!(functionNameList instanceof Array)) {
      throw new Error("Utils.noConflict 参数 functionName 必须为 Array 类型");
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
              window[needReleaseKey][value.name] =
                needReleaseObject[value.name];
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

  /**
   * 将正则匹配到的结果取出最后一个值并转换成int格式
   * @param matchList 正则匹配的列表
   * @param defaultValue 正则匹配的列表为空时，或者正则匹配的列表最后一项不为Int，返回该默认值
   * @example Utils.parseInt(["dadaadada123124","123124"],0);
   * @return 123124
   * @example Utils.parseInt(null,0);
   * @return 0
   * @example Utils.parseInt(["aaaaaa"]);
   * @return 0
   * @example Utils.parseInt(["aaaaaa"],"66");
   * @return 66
   * @example Utils.parseInt(["aaaaaaa"],"aa");
   * @return NaN
   **/
  Utils.parseInt = function (matchList = [], defaultValue = 0) {
    if (matchList == null) {
      return parseInt(defaultValue);
    }
    let parseValue = parseInt(matchList[matchList.length - 1]);
    if (isNaN(parseValue)) {
      parseValue = parseInt(defaultValue);
    }
    return parseValue;
  };
  /**
   * 在canvas元素节点上绘制进度圆圈
   * @param _config_ {Object} 配置信息
   * @example let progress = new Utils.Process({canvasNode:document.querySelector("canvas")});
   * 					progress.draw();
   * **/
  Utils.Progress = function (_config_) {
    this.config = {
      canvasNode: null /* canvas元素节点 */,
      deg: 95 /* 绘制角度 */,
      progress: 0 /* 进度 */,
      lineWidth: 10 /* 绘制的线宽度 */,
      lineBgColor: "#1e637c" /* 绘制的背景颜色 */,
      lineColor: "#25deff",
      textColor: "#000000" /* 文字的颜色 */,
      fontSize: 22 /* 字体大小(px) */,
      circleRadius: 50 /* 圆半径 */,
      draw: () => {} /* 控制绘制 */,
    };
    this.config = Utils.assignJSON(this.config, _config_);
    if (!(this.config.canvasNode instanceof HTMLCanvasElement)) {
      throw new Error(
        "Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement"
      );
    }
    let ctx = this.config.canvasNode.getContext("2d"); /* 获取画笔 */
    let width = this.config.canvasNode.width; /* 元素宽度 */
    let height = this.config.canvasNode.height; /* 元素高度 */

    /* 清除锯齿 */
    if (window.devicePixelRatio) {
      this.config.canvasNode.style.width = width + "px";
      this.config.canvasNode.style.height = height + "px";
      this.config.canvasNode.height = height * window.devicePixelRatio;
      this.config.canvasNode.width = width * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    /* 设置线宽 */
    ctx.lineWidth = this.config.lineWidth;
    /* 绘制 */
    this.draw = function () {
      let degActive = (this.config.progress * 360) / 100;
      ctx.clearRect(0, 0, width, height); //清除画布
      ctx.beginPath(); //开始绘制底圆
      ctx.arc(width / 2, height / 2, this.config.circleRadius, 1, 8);
      ctx.strokeStyle = this.config.lineBgColor;
      ctx.stroke();
      ctx.beginPath(); //开始绘制动态圆
      ctx.arc(
        width / 2,
        height / 2,
        this.config.circleRadius,
        -Math.PI / 2,
        (degActive * Math.PI) / 180 - Math.PI / 2
      );
      ctx.strokeStyle = this.config.lineColor;
      ctx.stroke();
      let txt = parseInt(this.config.progress) + "%"; //获取百分比
      ctx.font = this.config.fontSize + "px SimHei";
      let w = ctx.measureText(txt).width; //获取文本宽度
      let h = this.config.fontSize / 2;
      ctx.fillStyle = this.config.textColor;
      ctx.fillText(txt, width / 2 - w / 2, height / 2 + h / 2);
    }.bind(this);
  };

  /**
   * 复制到剪贴板
   * @param {string|number} text - 需要复制到剪贴板的文本
   * @example Utils.setClip("xxxx");
   **/
  Utils.setClip = function (text) {
    if (typeof text !== "string" && typeof text !== "number") {
      console.error(typeof text);
      throw new Error("复制的貌似不是string或number类型");
    }
    // 获取剪贴板对象
    const clipboard = navigator.clipboard;

    // 复制文本到剪贴板
    clipboard
      .writeText(text)
      .then(() => {
        console.log("复制成功");
      })
      .catch((err) => {
        console.error("复制失败，使用第二种方式", err);
        let chipBoardNode = document.createElement("input");
        chipBoardNode.type = "text";
        chipBoardNode.setAttribute("style", "opacity:0;position:absolute;");
        chipBoardNode.id = "whitesevClipBoardInput";
        document.body.append(chipBoardNode);
        let clipBoardInputNode = document.querySelector(
          "#whitesevClipBoardInput"
        );
        clipBoardInputNode.value = text;
        clipBoardInputNode.removeAttribute("disabled");
        clipBoardInputNode.select();
        document.execCommand("copy");
        clipBoardInputNode.remove();
      });
  };
  /**
   * 同步延迟xxx毫秒
   * @param {number} delayTime - 需要遍历的数组
   * @return {无返回值}
   * @example await Utils.sleep(2500); - 同步延时2500毫秒
   **/
  Utils.sleep = function (delayTime) {
    if (typeof delayTime !== "number") {
      throw new Error("Utils.sleep 参数 delayTime 必须为 number 类型");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delayTime);
    });
  };

  /**
   * 数组按照内部某个值的大小比对排序，如[{"time":"2022-1-1"},{"time":"2022-2-2"}]
   * @param {string} getPropertyValueFunc - 数组内部项的某个属性的值的方法，参数为这个项
   * @param {boolean} sortByDesc - 排序方式，true倒序(值最大排第一个，如:6、5、4、3...)，false为正序(值最小排第一个，如:1、2、3、4...)
   * @return {object} - 返回比较排序完成的数组
   * @example [{"time":"2022-1-1"},{"time":"2022-2-2"}].sort(Utils.sortListByProperty((item)=>{return item["time"]}))
   * @example [{"time":"2022-1-1"},{"time":"2022-2-2"}].sort(Utils.sortListByProperty((item)=>{return item["time"]},false))
   **/
  Utils.sortListByProperty = function (
    getPropertyValueFunc,
    sortByDesc = true
  ) {
    if (typeof getPropertyValueFunc !== "function") {
      throw new Error(
        "Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function 类型"
      );
    }
    if (typeof sortByDesc !== "boolean") {
      throw new Error(
        "Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型"
      );
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

  /**
   * 对获取的元素列表进行排序
   * @param {NodeList|jQuery} nodeListCallBack 获取元素列表，可以使用querySelectorAll或者jQuery的遍历
   * @param {Function} valueCallBack 获取当前循环列表中元素的要比较的值
   * @param {Boolean} reverse 元素升序(false)或降序(true)，默认-升序
   * @example Utils.sortNodeListByProprety( ()=>{ document.querySelectorAll("table tr")}, (item)=>{return parseInt(item.getAttribute("data-value"));}, false);
   */
  Utils.sortNodeListByProprety = function (
    nodeListCallBack,
    valueCallBack,
    reverse = false
  ) {
    let nodeList = nodeListCallBack();
    let nodeListLength = nodeList.length;
    for (var i = 0; i < nodeListLength - 1; i++) {
      for (var j = 0; j < nodeListLength - 1 - i; j++) {
        let beforeNode = nodeList[j];
        let afterNode = nodeList[j + 1];
        let beforeValue = valueCallBack(beforeNode);
        let afterValue = valueCallBack(afterNode);
        if (
          (reverse == true && beforeValue < afterValue) ||
          (reverse == false && beforeValue > afterValue)
        ) {
          /* 升序/降序 */
          /* 相邻元素两两对比 */
          let temp = beforeNode.nextElementSibling;
          afterNode.after(beforeNode);
          if (temp == null) {
            /* 如果为空，那么是最后一个元素，使用append */
            temp.parentNode.appendChild(afterNode);
          } else {
            /* 不为空，使用before */
            temp.before(afterNode);
          }
          nodeList = nodeListCallBack();
        }
      }
    }
  };
  /**
   * @function Utils.tryCatch
   * @description 提供一个封装了 try-catch 的函数，可以执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
   * @param {object|string} params - 函数参数（可选），可以是 object 或 string 类型。如果是 string 类型，则会被当做代码进行执行。
   * @return {function} - 返回一个对象，其中包含 error 和 run 两个方法。
   */
  Utils.tryCatch = function (params) {
    // 定义变量和函数
    let func = null;
    let funcThis = null;
    let handleErrorFunc = null;

    /**
     * @function tryCatchObj
     * @description 空函数，用于链式调用。
     */
    function tryCatchObj() {}

    /**
     * @method error
     * @description 设置错误处理函数。
     * @param {function|string} handler - 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @return {function} - 返回 tryCatchObj 函数。
     */
    tryCatchObj.error = function (handler) {
      handleErrorFunc = handler;
      return tryCatchObj;
    };

    /**
     * @method run
     * @description 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @param {function|string} fn - 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param {object|null} fnThis - 待执行函数的作用域，用于apply指定
     * @return {any|function} - 如果函数有返回值，则返回该返回值；否则返回 tryCatchObj 函数以支持链式调用。
     * @throws {Error} - 如果传入参数不符合要求，则会抛出相应类型的错误。
     */
    tryCatchObj.run = function (fn, fnThis) {
      func = fn;
      funcThis = fnThis;
      let result = executeTryCatch(func, handleErrorFunc, funcThis);
      return result !== undefined ? result : tryCatchObj;
    };

    /**
     * @function executeTryCatch
     * @description 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @param {function|string} func - 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param {function|string|null} handleErrorFunc - 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param {object|null} funcThis - 待执行函数的作用域，用于apply指定
     * @return {any|undefined} - 如果函数有返回值，则返回该返回值；否则返回 undefined。
     */
    function executeTryCatch(func, handleErrorFunc, funcThis) {
      let result = undefined;
      try {
        if (typeof func === "string") {
          window.eval(func);
        } else {
          result = func.apply(
            funcThis,
            Array.prototype.slice.call(arguments, 2)
          );
        }
      } catch (error) {
        console.log(
          `%c ${func?.name ? func?.name : func + "出现错误"} `,
          "color: #f20000"
        );
        console.log(`%c 错误原因：${error}`, "color: #f20000");
        console.trace(func);
        if (handleErrorFunc) {
          if (typeof handleErrorFunc === "string") {
            result = window.eval(handleErrorFunc);
          } else {
            result = handleErrorFunc.apply(
              funcThis,
              Array.prototype.slice.call(arguments, 2)
            );
          }
        }
      }
      return result;
    }

    // 返回 tryCatchObj 函数
    return tryCatchObj;
  };

  /**
   * 数组去重，去除重复的值
   * @param {object} uniqueArrayData - 需要去重的数组
   * @param {object} compareArrayData - 用来比较的数组
   * @param {function} compareFun - 数组比较方法，如果值相同，去除该数据
   * @return {object} - 返回去重完毕的数组
   * @example Utils.uniqueArray([1,2,3],[1,2],(item,item2)=>{return item===item2 ? true:false});
   * @exampleResult [3]
   * @example Utils.uniqueArray([{"key":1,"value":2},{"key":2}],[{"key":1}],(item,item2)=>{return item["key"] === item2["key"] ? true:false});
   * @exampleResult [{"key": 2}]
   **/
  Utils.uniqueArray = function (
    uniqueArrayData = [],
    compareArrayData = [],
    compareFun
  ) {
    if (typeof compareFun !== "function") {
      throw new Error("Utils.uniqueArray 参数 compareFun 必须为 function 类型");
    }
    return Array.from(uniqueArrayData).filter(
      (item) =>
        !Array.from(compareArrayData).some(function (ele) {
          return compareFun(item, ele);
        })
    );
  };

  /**
   * 等待指定节点出现，支持多个 selector
   *
   * @param {...string} nodeSelectors - 一个或多个节点选择器，必须为字符串类型
   * @returns {Promise} 返回一个 Promise 对象，成功时返回节点数组，如[ [...nodes], [...nodes] ]
   * 如果参数 nodeSelectors 只有一个的话，返回 [...nodes]
   * @example
   * Utils.waitNode("div.xxx","a.xxx").then( (nodeList)=>{
   *  let divNodesList = nodeList[0];
   *  let aNodeList = nodeList[1];
   * })
   */
  Utils.waitNode = function (...nodeSelectors) {
    /* 检查每个参数是否为字符串类型 */
    for (const nodeSelector of nodeSelectors) {
      if (typeof nodeSelector !== "string") {
        throw new Error("Utils.waitNode 参数必须为 ...string 类型");
      }
    }

    return new Promise((resolve) => {
      /* 防止触发第二次回调 */
      let isReturn = false;

      /* 检查所有选择器是否匹配到节点 */
      const checkNodes = () => {
        const selectNodes = nodeSelectors.map((selector) => [
          ...document.querySelectorAll(selector),
        ]);
        if (selectNodes.flat().length !== 0) {
          if (!isReturn) {
            isReturn = true;
            if (nodeSelectors.length === 1) {
              resolve(selectNodes.flat());
            } else {
              resolve(selectNodes);
            }
          }
        }
      };

      /* 在函数开始时检查节点是否已经存在 */
      checkNodes();

      /* 监听 DOM 的变化，直到至少有一个节点被匹配到 */
      Utils.mutationObserver(document.documentElement, {
        callback: (mutations, observer) => {
          checkNodes();
          if (isReturn) {
            observer.disconnect();
          }
        },
        config: { subtree: true, childList: true, attributes: true },
      });
    });
  };
})((Utils = {}));
