/**
 * 自己常用的工具类
 * @copyright  GPL-3.0-only
 * @author  WhiteSevs
 * @version  3.5
 **/
(function (Utils) {
  /**
   * JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
   * @param {object} target	目标端
   * @param {object} source	源端
   * @returns {object}
   * @example
   * Utils.assign({"1":1,"2":{"3":3}}, {"2":{"3":4}});
   * > {
            "1": 1,
            "2": {
                "3": 4
            }
        }
   **/
  Utils.assign = function (target = {}, source = {}) {
    for (let targetKeyName in target) {
      let targetValue = target[targetKeyName];
      if (targetKeyName in source) {
        let sourceValue = source[targetKeyName];
        if (typeof sourceValue === "object" && !Utils.isDOM(sourceValue)) {
          /* 源端的值是object类型，且不是元素对象 */
          target[targetKeyName] = Utils.assign(targetValue, sourceValue);
        } else {
          /* 直接赋值 */
          target[targetKeyName] = sourceValue;
        }
      }
    }
    return target;
  };

  /**
   * 【手机】检测点击的地方是否在该元素区域内
   * @param {HTMLElement|Node} obj	需要检测的元素
   * @returns {boolean}
   * + true 点击在元素上
   * + false 未点击在元素上
   * @example
   * Utils.checkUserClickInNode(document.querySelector(".xxx"));
   * > false
   **/
  Utils.checkUserClickInNode = function (targetNode) {
    if (!Utils.isDOM(targetNode)) {
      throw new Error(
        "Utils.checkUserClickInNode 参数 targetNode 必须为 HTMLElement|Node 类型"
      );
    }
    let mouseClickPosX = Number(window.event.clientX); /* 鼠标相对屏幕横坐标 */
    let mouseClickPosY = Number(window.event.clientY); /* 鼠标相对屏幕纵坐标 */
    let elementPosXLeft = Number(
      targetNode.getBoundingClientRect().left
    ); /* 要检测的元素的相对屏幕的横坐标最左边 */
    let elementPosXRight = Number(
      targetNode.getBoundingClientRect().right
    ); /* 要检测的元素的相对屏幕的横坐标最右边 */
    let elementPosYTop = Number(
      targetNode.getBoundingClientRect().top
    ); /* 要检测的元素的相对屏幕的纵坐标最上边 */
    let elementPosYBottom = Number(
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
      window.event.target &&
      typeof window.event.target.innerHTML === "string" &&
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
   * @param {HTMLElement|Node} target	当前元素
   * @param {string} targetSelector	判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
   * @returns {boolean}
   * + true 已删除
   * + false 未删除
   * @example
   * Utils.deleteParentNode(document.querySelector("a"),".xxx");
   * > true
   **/
  Utils.deleteParentNode = function (target, targetSelector) {
    if (target == null) {
      throw new Error("Utils.deleteParentNode 参数 target 不能为 null");
    }
    if (!Utils.isDOM(target)) {
      throw new Error(
        "Utils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型"
      );
    }
    if (typeof targetSelector !== "string") {
      throw new Error(
        "Utils.deleteParentNode 参数 targetSelector 必须为 string 类型"
      );
    }
    let result = false;
    let needRemoveDOM = target.closest(targetSelector);
    if (needRemoveDOM) {
      needRemoveDOM.remove();
      result = true;
    }
    return result;
  };

  /**
   * 字典
   * @example
   * let dictionary = new Utils.Dictionary();
   * let dictionary2 = new Utils.Dictionary();
   * dictionary.set("test","111");
   * dictionary.get("test");
   * > '111'
   * dictionary.has("test");
   * > true
   * dictionary.concat(dictionary2);
   **/
  Utils.Dictionary = function () {
    this.items = {};
    /**
     * 检查是否有某一个键
     * @param {*} key 键
     * @returns {boolean}
     */
    this.has = function (key) {
      return this.items.hasOwnProperty(key);
    };
    /**
     * 为字典添加某一个值
     * @param {*} key 键
     * @param {*} val 值，默认为""
     */
    this.set = function (key, val = "") {
      if (key === undefined) {
        throw new Error("Utils.Dictionary().set 参数 key 不能为空");
      }
      this.items[key] = val;
    };
    /**
     * 删除某一个键
     * @param {*} key 键
     * @returns {boolean}
     */
    this.delete = function (key) {
      if (this.has(key)) {
        delete this.items[key];
        return true;
      }
      return false;
    };
    /**
     * 获取某个键的值
     * @param {*} key 键
     * @returns {any|undefined}
     */
    this.get = function (key) {
      return this.has(key) ? this.items[key] : undefined;
    };
    /**
     * 返回字典中的所有值
     * @returns {array}
     */
    this.values = function () {
      let resultList = [];
      for (let prop in this.items) {
        if (this.has(prop)) {
          resultList.push(this.items[prop]);
        }
      }
      return resultList;
    };
    /**
     * 清空字典
     */
    this.clear = function () {
      this.items = {};
    };
    /**
     * 获取字典的长度
     * @returns {number}
     */
    this.size = function () {
      return Object.keys(this.items).length;
    };
    /**
     * 获取字典所有的键
     * @returns
     */
    this.keys = function () {
      return Object.keys(this.items);
    };
    /**
     * 返回字典本身
     * @returns
     */
    this.getItems = function () {
      return this.items;
    };
    /**
     * 合并另一个字典
     * @param {Dictionary} data 需要合并的字典
     */
    this.concat = function (data) {
      this.items = Utils.assign(this.items, data.getItems());
    };
  };

  /**
   * 主动触发事件
   * @param {HTMLElement} dom 元素
   * @param {string|[...string]} eventName 事件名称，可以是字符串，也可是字符串格式的列表
   * @example
   * Utils.dispatchEvent(document.querySelector("input","input"))
   */
  Utils.dispatchEvent = function (dom, eventName) {
    let eventNameList = [];
    if (typeof eventName === "string") {
      eventNameList = [eventName];
    }
    if (Array.isArray(eventName)) {
      eventNameList = [...eventName];
    }
    eventNameList.forEach((_eventName_) => {
      dom.dispatchEvent(new Event(_eventName_));
    });
  };

  /**
   * 下载base64格式的数据
   * @param {string} base64Data	需要转换的base64数据
   * @param {string} fileName	需要保存的文件名
   * @example
   * Utils.downloadBase64("data:image/jpeg:base64/,xxxxxx");
   **/
  Utils.downloadBase64 = function (base64Data, fileName) {
    if (typeof base64Data !== "string") {
      throw new Error(
        "Utils.downloadBase64 参数 base64Data 必须为 string 类型"
      );
    }
    if (typeof fileName !== "string") {
      throw new Error("Utils.downloadBase64 参数 fileName 必须为 string 类型");
    }
    let aLink = document.createElement("a");
    aLink.download = fileName;
    aLink.href = base64Data;
    aLink.click();
  };

  /**
   * 定位网页中可见字符串的位置定位并高亮
   * @param {string} str	需要寻找的字符串
   * @param {boolean} caseSensitive
   * + true 区分大小写
   * + false (默认) 不区分大小写
   * @return {boolean}
   * + true 找到
   * + false 未找到
   * @example
   * Utils.findVisibleText("xxxxx");
   * > true
   **/
  Utils.findVisibleText = function (str = "", caseSensitive = false) {
    let TRange = null;
    let strFound;
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
   * 格式化byte为KB、MB、GB、TB、PB、EB、ZB、YB、BB、NB、DB
   * @param {number} bitSize 字节
   * @param {boolean} addType
   * + true (默认) 添加单位
   * + false 不添加单位
   * @returns {string|number}
   * + {string} 当addType为true时，且保留小数点末尾2位
   * + {number} 当addType为false时，且保留小数点末尾2位
   * @example
   * Utils.formatByteToSize("812304");
   * > '793.27KB'
   * @example
   * Utils.formatByteToSize("812304",false);
   * > 793.27
   **/
  Utils.formatByteToSize = function (byteSize, addType = true) {
    byteSize = parseInt(byteSize);
    if (isNaN(byteSize)) {
      throw new Error("Utils.formatByteToSize 参数 byteSize 格式不正确");
    }
    let result = 0;
    let resultType = "KB";
    let sizeData = {};
    sizeData.B = 1;
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
   * 应用场景: 当你想要获取数组形式的元素时，它可能是其它的选择器，那么需要按照先后顺序填入参数
   * 第一个是优先级最高的，依次下降，如果都没有，返回空列表
   * 支持document.querySelectorAll、$("")、()=>{return document.querySelectorAll("")}
   * @param {...NodeList|Function} NodeList
   * @returns {...HTMLElement}
   * @example
   * Utils.getNodeListValue(document.querySelectorAll("div.xxx"),document.querySelectorAll("a.xxx"));
   * > [...div,div,div]
   * @example
   * Utils.getNodeListValue(divGetFunction,aGetFunction);
   * > [...div,div,div]
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
   * 获取格式化后的时间
   * @param {string|undefined} text	需要格式化的字符串或者时间戳
   * @param {string|undefined} formatType	格式化成的显示类型
   * + yyyy 年
   * + MM 月
   * + dd 天
   * + HH 时 (24小时制)
   * + hh 时 (12小时制)
   * + mm 分
   * + ss 秒
   * @returns {string}	返回格式化后的时间
   * @example
   * Utils.formatTime("2022-08-21 23:59:00","HH:mm:ss");
   * > '23:59:00'
   * @example
   * Utils.formatTime(1899187424988,"HH:mm:ss");
   * > '15:10:13'
   * @example
   * Utils.formatTime()
   * > '2023-1-1 00:00:00'
   **/
  Utils.formatTime = function (text, formatType = "yyyy-MM-dd HH:mm:ss") {
    if (text != null && typeof text !== "string" && typeof text !== "number") {
      throw new Error("Utils.formatTime 参数 text 必须为 string|number 类型");
    }
    if (typeof formatType !== "string") {
      throw new Error("Utils.formatTime 参数 formatType 必须为 string 类型");
    }
    let time = text == null ? new Date() : new Date(text);
    /**
     * 校验时间补0
     * @param {number} timeNum
     * @returns
     */
    function checkTime(timeNum) {
      if (timeNum < 10) return "0" + timeNum;
      return timeNum;
    }

    /**
     * 时间制修改 24小时制转12小时制
     * @param {number} hourNum 小时
     * @returns
     */
    function timeSystemChange(hourNum) {
      return hourNum > 12 ? hourNum - 12 : hourNum;
    }

    let timeRegexp = {
      yyyy: time.getFullYear(),
      /* 年 */
      MM: checkTime(time.getMonth() + 1),
      /* 月 */
      dd: checkTime(time.getDate()),
      /* 日 */
      HH: checkTime(time.getHours()),
      /* 时 (24小时制) */
      hh: checkTime(timeSystemChange(time.getHours())),
      /* 时 (12小时制) */
      mm: checkTime(time.getMinutes()),
      /* 分 */
      ss: checkTime(time.getSeconds()),
      /* 秒 */
    };
    Object.keys(timeRegexp).forEach(function (key) {
      let replaecRegexp = new RegExp(key, "g");
      formatType = formatType.replace(replaecRegexp, timeRegexp[key]);
    });
    return formatType;
  };

  /**
   * 字符串格式的时间转时间戳
   * @param {string} text	字符串格式的时间，例如：
   * + 2022-11-21 00:00:00
   * + 00:00:00
   * @return {number} 返回时间戳
   * @example
   * Utils.formatToTimeStamp("2022-11-21 00:00:00");
   * > 1668960000000
   **/
  Utils.formatToTimeStamp = function (text) {
    /* 把字符串格式的时间（完整，包括日期和时间）格式化成时间 */
    if (typeof text !== "string") {
      throw new Error("Utils.formatToTimeStamp 参数 text 必须为 string 类型");
    }
    if (text.length === 8) {
      /* 该字符串只有时分秒 */
      let today = new Date();
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
    let timestamp = new Date(text).getTime();
    return timestamp;
  };

  /**
   * 自动锁对象，用于循环判断运行的函数，在循环外new后使用，注意，如果函数内部存在异步操作，需要使用await
   * @param {Function|string} func 需要执行的函数
   * @param {Function|undefined} scope 函数作用域
   * @param {number} unLockDelayTime 延迟xx毫秒后解锁，默认0
   * @example
    let lock = new Utils.funcLock(()=>{console.log(1)}))
    lock.run();
    > 1
   * @example
    let lock = new Utils.funcLock(()=>{console.log(1)}),true) -- 异步操作
    await lock.run();
    > 1
   **/
  Utils.funcLock = function (func, scope, unLockDelayTime = 0) {
    let flag = false;
    let that = this;
    scope = scope || this;
    /**
     * 锁
     */
    this.lock = function () {
      flag = true;
    };
    /**
     * 解锁
     */
    this.unlock = function () {
      setTimeout(() => {
        flag = false;
      }, unLockDelayTime);
    };
    /**
     * 执行
     * @param  {...any} funArgs 参数
     * @returns {Promise}
     */
    this.run = async function (...funArgs) {
      if (flag) {
        return;
      }
      that.lock();
      await func.apply(scope, funArgs); /* arguments调用 */
      that.unlock();
    };
  };

  /**
   * 获取天数差异，如何获取某个时间与另一个时间相差的天数
   * @param {number} timestamp1 时间戳(毫秒|秒)
   * @param {number} timestamp2 时间戳(毫秒|秒)
   * @param {string} type 返回的数字的表达的类型，比如：年、月、天、时、分、秒，默认天
   * @returns {number}
   * @example
   * Utils.getDaysDifference(new Date().getTime());
   * > 0
   * @example
   * Utils.getDaysDifference(new Date().getTime(),undefined,"秒");
   * > 0
   */
  Utils.getDaysDifference = function (
    timestamp1 = new Date().getTime(),
    timestamp2 = new Date().getTime(),
    type = "天"
  ) {
    type = type.trim();
    if (timestamp1.toString().length === 10) {
      timestamp1 = timestamp1 * 1000;
    }
    if (timestamp2.toString().length === 10) {
      timestamp2 = timestamp2 * 1000;
    }
    let smallTimeStamp = timestamp1 > timestamp2 ? timestamp2 : timestamp1;
    let bigTimeStamp = timestamp1 > timestamp2 ? timestamp1 : timestamp2;
    let oneSecond = 1000; /* 一秒的毫秒数 */
    let oneMinute = 60 * oneSecond; /* 一分钟的毫秒数 */
    let oneHour = 60 * oneMinute; /* 一小时的毫秒数 */
    let oneDay = 24 * oneHour; /* 一天的毫秒数 */
    let oneMonth = 30 * oneDay; /* 一个月的毫秒数(30天) */
    let oneYear = 12 * oneMonth; /* 一年的毫秒数 */
    let bigDate = new Date(bigTimeStamp);
    let smallDate = new Date(smallTimeStamp);
    let remainderValue = 1;
    if (type === "年") {
      remainderValue = oneYear;
    } else if (type === "月") {
      remainderValue = oneMonth;
    } else if (type === "天") {
      remainderValue = oneDay;
    } else if (type === "时") {
      remainderValue = oneHour;
    } else if (type === "分") {
      remainderValue = oneMinute;
    } else if (type === "秒") {
      remainderValue = oneSecond;
    }
    let diffValue = Math.round(
      Math.abs((bigDate - smallDate) / remainderValue)
    );
    return diffValue;
  };

  /**
   * 获取页面中最大的z-index再+1
   * @returns {number}
   * @example
   * Utils.getMaxZIndex();
   * > 1001
   **/
  Utils.getMaxZIndex = function () {
    let nodeIndexList = [];
    document.querySelectorAll("*").forEach((element) => {
      let nodeStyle = window.getComputedStyle(element);
      /* 不对position为static和display为none的元素进行获取它们的z-index */
      if (nodeStyle.position !== "static" && nodeStyle.display !== "none") {
        nodeIndexList = nodeIndexList.concat(parseInt(nodeStyle.zIndex));
      }
    });
    nodeIndexList = nodeIndexList.filter(Boolean); /* 过滤非Boolean类型 */
    return nodeIndexList.length ? Math.max(...nodeIndexList) + 1 : 0;
  };

  /**
   * 获取随机的安卓手机User-Agent
   * @return {string} 返回随机字符串
   * @example
   * Utils.getRandomAndroidUA();
   * > 'Mozilla/5.0 (Linux; Android 9; MI 13 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.3490.40 Mobile Safari/537.36'
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
    let randomMobile = Utils.getRandomArrayValue(mobileNameList);
    let chromeVersion1 = Utils.getRandomNumber(100, 113);
    let chromeVersion2 = Utils.getRandomNumber(2272, 5304);
    let chromeVersion3 = Utils.getRandomNumber(1, 218);
    return `Mozilla/5.0 (Linux; Android ${androidVersion}; ${randomMobile}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.0.${chromeVersion2}.${chromeVersion3} Mobile Safari/537.36`;
  };

  /**
   * 获取数组的随机值
   * @param {...any} array 数组数据
   * @returns {any}	返回数组的随机值
   * @example
   * Utils.getRandomArrayValue(["Utils","getRandomArrayValue"]);
   * > 'getRandomArrayValue'
   **/
  Utils.getRandomArrayValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  /**
   * 获取两个数字区间的随机值
   * @param {number} number 数字区间
   * @param {number} number2 数字区间
   * @returns {number} 返回两个数字区间的随机值
   * @example
   * Utils.getRandomNumber(1,10);
   * > 5
   * @example
   * Utils.getRandomNumber(10,1);
   * > 8
   **/
  Utils.getRandomNumber = function (number, number2) {
    if (typeof number !== "number") {
      throw new Error("Utils.getRandNumber 参数 number 必须为 number 类型");
    }
    if (typeof number2 !== "number") {
      throw new Error("Utils.getRandNumber 参数 number2 必须为 number 类型");
    }
    let leftNumber = number > number2 ? number2 : number;
    let rightNumber = number > number2 ? number : number2;
    return Math.round(Math.random() * (rightNumber - leftNumber)) + leftNumber;
  };

  /**
   * 获取随机的电脑端User-Agent
   * @return {string} 返回随机字符串
   * @example
   * Utils.getRandomPCUA();
   * > 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5068.19 Safari/537.36'
   **/
  Utils.getRandomPCUA = function () {
    let chromeVersion1 = Utils.getRandomNumber(100, 113);
    let chromeVersion2 = Utils.getRandomNumber(2272, 5304);
    let chromeVersion3 = Utils.getRandomNumber(1, 218);
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion1}.0.${chromeVersion2}.${chromeVersion3} Safari/537.36`;
  };

  /**
   * 获取元素上的使用React框架的实例属性，目前包括reactFiber、reactProps、reactEvents、reactEventHandlers、reactInternalInstance
   * @param {HTMLElement} dom 需要获取的目标元素
   * @returns {object}
   * @example
   * Utils.getReactObj(document.querySelector("input"))?.reactProps?.onChange({target:{value:"123"}});
   */
  Utils.getReactObj = function (dom) {
    let result = {};
    Object.keys(dom).forEach((domPropsName) => {
      if (domPropsName.startsWith("__react")) {
        let propsName = domPropsName.replace(/__(.+)\$.+/i, "$1");
        if (propsName in result) {
          new Error("重复属性 " + domPropsName);
        } else {
          result[propsName] = dom[domPropsName];
        }
      }
    });
    return result;
  };

  /**
   * 获取文本的字符长度
   * @param {string} text
   * @returns {number}
   * @example
   * Utils.getTextLength("测试文本")
   * > 12
   */
  Utils.getTextLength = function (text) {
    let encoder = new TextEncoder();
    let bytes = encoder.encode(text);
    return bytes.length;
  };

  /**
   * 获取文本占据的空间大小，返回自动的单位，如12 Kb,14 K,20 MB，1 GB
   * @param {string} text 目标字符串
   * @param {boolean} addType
   * + true (默认) 自动添加单位
   * + false 不添加单位
   * @returns {string}
   * @example
   * Utils.getTextStorageSize("测试文本");
   * > '12.00B'
   */
  Utils.getTextStorageSize = function (text, addType = true) {
    return Utils.formatByteToSize(Utils.getTextLength(text), addType);
  };

  /**
   * 在页面中增加style元素，如果html节点存在子节点，添加子节点第一个，反之，添加到html节点的子节点最后一个
   * @param {string} cssText css字符串
   * @returns {HTMLElement} 返回添加的CSS标签
   * @example
   * Utils.GM_addStyle("html{}");
   * > <style type="text/css">html{}</style>
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
    let GM_cookie = new Utils.GM_Cookie();
    GM_cookie.list({name:"xxx_cookie_xxx"},function(cookies,error){
        if (!error) {
            console.log(cookies);
            console.log(cookies.value);
        } else {
            console.error(error);
        }
    });
    GM_cookie.set({name:"xxx_cookie_test_xxx",value:"这是Cookie测试值"},function(error){
        if (error) {
            console.error(error);
        } else {
            console.log('Cookie set successfully.');
        }
    })
    GM_cookie.delete({name:"xxx_cookie_test_xxx"},function(error){
        if (error) {
            console.error(error);
        } else {
            console.log('Cookie set successfully.');
        }
    })
   **/
  Utils.GM_Cookie = function () {
    /**
	 * 获取Cookie
	 * @param {Object} paramDetails 
		+ url string? 默认为当前的url
		+ domain string? 默认为当前的域名(window.location.hostname)
		+ name string? 需要检索的Cookie的名字
		+ path string? 需要检索的Cookie的路径，默认为"/"
	* @param {Function} callback 
		+ cookies object[] 
		+ error string|undefined
	*/
    this.list = (paramDetails = {}, callback = () => {}) => {
      let resultData = [];
      try {
        let details = {
          url: window.location.href,
          domain: window.location.hostname,
          name: "",
          path: "/",
        };
        paramDetails = Utils.assign(details, paramDetails);
        let cookies = document.cookie.split(";");
        cookies.forEach((item) => {
          let nameRegexp = new RegExp("^" + paramDetails.name + "=", "g");
          item = item.trimStart();
          if (item.match(nameRegexp)) {
            resultData = [
              ...resultData,
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
        callback(resultData, undefined);
      } catch (error) {
        callback(resultData, error);
      }
    };

    /**
     * 设置Cookie
     * @param {Object} paramDetails
     * @param {Function} callback
     */
    this.set = (paramDetails = {}, callback = () => {}) => {
      try {
        let details = {
          url: window.location.href,
          name: "",
          value: "",
          domain: window.location.hostname,
          path: "/",
          secure: true,
          httpOnly: false,
          expirationDate: Math.floor(Date.now()) + 60 * 60 * 24 * 30, // Expires in 30 days
        };
        paramDetails = Utils.assign(details, paramDetails);
        let life = paramDetails.expirationDate
          ? paramDetails.expirationDate
          : Math.floor(Date.now()) + 60 * 60 * 24 * 30;
        let cookieStr =
          paramDetails.name +
          "=" +
          decodeURIComponent(paramDetails.value) +
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
     * @param {Object} paramDetails
     * @param {Function} callback
     */
    this.delete = (paramDetails = {}, callback = () => {}) => {
      try {
        let details = {
          url: window.location.href,
          name: "",
          firstPartyDomain: "",
        };
        paramDetails = Utils.assign(details, paramDetails);
        let cookieStr =
          paramDetails.name +
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
   * @param {object} data 传递的菜单数据
   * @param {boolean} autoReload 点击该菜单后数据改变后自动重载页面,
   * + true (默认) 开启点击菜单后自动刷新网页
   * + false 关闭点击菜单后自动刷新网页
   * @param {Function} _GM_getValue_ 传入油猴函数 GM_getValue
   * @param {Function} _GM_setValue_ 传入油猴函数 GM_setValue
   * @param {Function} _GM_registerMenuCommand_ 传入油猴函数 GM_registerMenuCommand
   * @param {Function} _GM_unregisterMenuCommand_ 传入油猴函数 GM_unregisterMenuCommand
   * @example
    let gm_Menu = new Utils.GM_Menu(
      {
        menu_key:{
          text: "测试按钮",
          enable: true,
          showText: (text,enable) =>  {
            return "[" + (enable ? "√" : "×") + "]" + text;
          },
          callback: (key,status)  =>  {
            console.log("点击菜单，值修改为",status);
          }
        }
      },
      true,
      GM_getValue,
      GM_setValue,
      GM_registerMenuCommand,
      GM_unregisterMenuCommand);

    // 获取某个菜单项的值
    gm_Menu.get("menu_key");
    > true

    // 添加键为menu_key2的菜单项
    gm_Menu.add({
      menu_key2:{
        text: "测试按钮2",
        enable: false,
        showText: (text,enable) =>  {
          return "[" + (enable ? "√" : "×") + "]" + text;
        },
        callback: (key,status)  =>  {
          console.log("点击菜单，值修改为",status);
        }
      }
    });

    // 更新键为menu_key的显示文字和点击回调
    gm_Menu.update({
      menu_key:{
        text: "更新后的测试按钮",
        enable: true,
        showText: (text,enable) =>  {
          return "[" + (enable ? "√" : "×") + "]" + text;
        },
        callback: (key,status)  =>  {
          console.log("点击菜单更新后的测试按钮，新值修改为",status);
        }
      }
    });

    // 删除键为menu_key的菜单
    gm_Menu.delete("menu_key");

    // 删除键为menu_key的菜单
    gm_Menu.delete("menu_key");
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
    /**
     * 注册的菜单的id
     * @type {...string}
     */
    let menuIdList = [];
    /**
     * 初始化数据
     */
    let init = function () {
      menuIdList = [];
      Object.keys(data).forEach((menuId) => {
        let value = _GM_getValue_(menuId);
        if (value == null) {
          _GM_setValue_(menuId, data[menuId].enable);
          value = _GM_getValue_(menuId);
        }
        data[menuId]["enable"] = value;
      });
    };

    /**
     * 注册油猴菜单
     */
    let register = function () {
      Object.keys(data).forEach((menuInfoItemKey) => {
        let item = data[menuInfoItemKey];
        let text = item["text"]; /* 文本 */
        let enable = Boolean(item["enable"]); /* 用户开启的状态 */
        let showText =
          typeof item["showText"] === "function"
            ? item["showText"](text, enable)
            : text; /* 油猴菜单上显示的文本 */
        let clickCallBack = item["callback"]; /* 用户点击后的回调 */
        let menuId = _GM_registerMenuCommand_(showText, function () {
          let menuEnable = enable ? false : true;
          _GM_setValue_(menuInfoItemKey, menuEnable);
          if (typeof clickCallBack === "function") {
            clickCallBack(menuInfoItemKey, menuEnable);
          }
          if (autoReload) {
            window.location.reload();
          } else {
            that.update();
          }
        });
        menuIdList = [...menuIdList, menuId];
      });
    };
    /**
     * 获取键值开启状态
     * @param {string} menuId
     * @returns {Boolean}
     */
    this.get = function (menuId) {
      return data[menuId]["enable"];
    };
    /**
     * 新增菜单数据
     * @param {Object} paramData
     */
    this.add = function (paramData) {
      Object.assign(data, paramData);
      init();
      register();
    };
    /**
     * 更新菜单数据
     * @param {Object} paramData
     */
    this.update = function (paramData) {
      if (paramData) {
        menuIdList = Utils.assign(menuIdList, paramData);
      }
      Object.keys(menuIdList).forEach((menuId) => {
        that.delete(menuId);
      });
      init();
      register();
    };
    /**
     * 卸载菜单
     * @param {string} menuId 已注册的菜单id
     */
    this.delete = function (menuId) {
      _GM_unregisterMenuCommand_(menuId);
    };
    init(); /* 初始化数据 */
    register(); /* 注册到油猴菜单中 */
  };

  /**
   * 基于Function prototype，能够勾住和释放任何函数
   * 
   * .hook
   * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
   * + hookFunc {string} 替换的hook函数
   * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
   * + methodName {string} 匿名函数需显式传入目标函数名eg:this.Begin = function(){....};}
   * 
   * .unhook
   * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
   * + funcName {string} 被Hook的函数名称
   * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
   * @example
    let hook = new Utils.Hooks();
    hook.initEnv();
    function myFunction(){
        console.log("我自己需要执行的函数");
    }
    function testFunction(){
        console.log("正常执行的函数");
    }
    testFunction.hook(testFunction,myFunction,window);
   **/
  Utils.Hooks = function () {
    this.initEnv = function () {
      Function.prototype.hook = function (realFunc, hookFunc, context) {
        let _context = null; //函数上下文
        let _funcName = null; //函数名

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
          let strFunc = fn.toString();
          let _regex = /function\s+(\w+)\s*\(/;
          let patten = strFunc.match(_regex);
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
              "let args = Array.prototype.slice.call(arguments,0);\n" +
              "let obj = this;\n" +
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
        let _context = null;
        let _funcName = null;
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
    let httpx = new Utils.Httpx(GM_xmlhttpRequest);
    let postResp = await httpx.post({
      url:url,
      data:JSON.stringify({
        test:1
      }),
      timeout: 5000
    });
    console.log(postResp);
    > {
      status: true,
      data: {responseText: "...", response: xxx,...},
      msg: "请求完毕",
      type: "onload",
    }

    if(postResp === "onload" && postResp.status){
    // onload
    }else if(postResp === "ontimeout"){
    // ontimeout
    }
   * @example
    // 也可以先配置全局参数
    let httpx = new Utils.Httpx(GM_xmlhttpRequest);
    httpx.config({
      timeout: 5000,
      async: false,
      responseType: "html",
      redirect: "follow",
    })
    // 优先级为 默认details < 全局details < 单独的details
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
     * 发送请求
     * @param {Object} details
     */
    function request(details) {
      _GM_xmlHttpRequest_(details);
    }

    /**
     * 获取请求配置
     * @param {object} method 当前请求方法，默认get
     * @param {object} resolve promise回调
     * @param {object} details 请求配置
     * @returns {object}
     */
    function getRequestDefails(method, resolve, details) {
      return {
        url: details.url || defaultDetails.url,
        method: method || "get",
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
    }
    /**
     * 处理发送请求的details，去除值为undefined、空function的值
     * @param {object} details
     * @returns {object}
     */
    function handleRequestDetails(details) {
      Object.keys(details).forEach((keyName) => {
        if (
          details[keyName] == null ||
          (details[keyName] instanceof Function &&
            Utils.isNull(details[keyName]))
        ) {
          delete details[keyName];
          return;
        }
      });
      if (Utils.isNull(details.url)) {
        throw Error(`Utils.Httpx 参数 url不符合要求: ${details.url}`);
      }
      /* method值统一大写，兼容Via */
      details.method = details.method.toUpperCase();
      return details;
    }

    /**
     * onabort请求被取消-触发
     * @param {object} details 配置
     * @param {object} resolve 回调
     * @param {object} argumentsList 参数列表
     */
    function onAbortCallBack(details, resolve, argumentsList) {
      if ("onabort" in details) {
        details.onabort(...argumentsList);
      } else {
        defaultDetails?.onabort(...argumentsList);
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
      if ("onerror" in details) {
        details.onerror(...argumentsList);
      } else {
        defaultDetails?.onerror(...argumentsList);
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
      if ("ontimeout" in details) {
        details.ontimeout(...argumentsList);
      } else {
        defaultDetails?.ontimeout(...argumentsList);
      }
      resolve({
        status: false,
        data: argumentsList,
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
      if ("onloadstart" in details) {
        details.onloadstart(...argumentsList);
      } else {
        defaultDetails?.onloadstart(...argumentsList);
      }
    }

    /**
     * onreadystatechange准备状态改变-触发
     * @param {object} details 配置
     * @param {object} argumentsList 参数列表
     */
    function onReadyStateChangeCallBack(details, argumentsList) {
      if ("onreadystatechange" in details) {
        details.onreadystatechange(...argumentsList);
      } else {
        defaultDetails?.onreadystatechange(...argumentsList);
      }
    }

    /**
     * onprogress上传进度-触发
     * @param {object} details 配置
     * @param {object} argumentsList 参数列表
     */
    function onProgressCallBack(details, argumentsList) {
      if ("onprogress" in details) {
        details.onprogress(...argumentsList);
      } else {
        defaultDetails?.onprogress(...argumentsList);
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
     * @returns {Promise}
     */
    this.get = function (details) {
      return new Promise((resolve) => {
        let requestDetails = getRequestDefails("get", resolve, details);
        delete requestDetails.onprogress;
        requestDetails = handleRequestDetails(requestDetails);
        request(requestDetails);
      });
    };
    /**
     * POST 请求
     * @param {object} details
     * @returns {Promise}
     */
    this.post = function (details) {
      return new Promise((resolve) => {
        let requestDetails = getRequestDefails("post", resolve, details);
        requestDetails = handleRequestDetails(requestDetails);
        request(requestDetails);
      });
    };
    /**
     * HEAD 请求
     * @param {object} details
     * @returns {Promise}
     */
    this.head = function (details) {
      return new Promise((resolve) => {
        let requestDetails = getRequestDefails("head", resolve, details);
        delete requestDetails.onprogress;
        requestDetails = handleRequestDetails(requestDetails);
        request(requestDetails);
      });
    };

    /**
     * OPTIONS请求
     * @param {object} details
     * @returns {Promise}
     */
    this.options = function (details) {
      return new Promise((resolve) => {
        let requestDetails = getRequestDefails("options", resolve, details);
        delete requestDetails.onprogress;
        requestDetails = handleRequestDetails(requestDetails);
        request(requestDetails);
      });
    };

    /**
     * DELETE请求
     * @param {object} details
     */
    this.delete = function (details) {
      return new Promise((resolve) => {
        let requestDetails = getRequestDefails("delete", resolve, details);
        delete requestDetails.onprogress;
        requestDetails = handleRequestDetails(requestDetails);
        request(requestDetails);
      });
    };

    /**
     * PUT请求
     * @param {object} details
     * @returns {Promise}
     */
    this.put = function (details) {
      return new Promise((resolve) => {
        let requestDetails = getRequestDefails("put", resolve, details);
        requestDetails = handleRequestDetails(requestDetails);
        request(requestDetails);
      });
    };

    /**
     * 修改默认配置
     * @param {Object} details
     */
    this.config = function (details) {
      defaultDetails = Utils.assign(defaultDetails, details);
    };
  };

  /**
   * 浏览器端的indexedDB操作封装
   * @example
    let db = new Utils.indexedDB('web_DB', 'nav_text')
    let data = {name:'管理员', roleId: 1, type: 1};
    db.save('list',data).then((resolve)=>{
        console.log(resolve,'存储成功')
    })

    db.get('list').then((resolve)=>{
        console.log(resolve,'查询成功')
    })

    db.getPaging('list',20,10).then((resolve)=>{
        console.log(resolve,'查询分页偏移第20，一共10行成功');
    })

    db.delete('list').then(resolve=>{
        console.log(resolve,'删除成功---->>>>>>name')
    })

    db.deleteAll().then(resolve=>{
        console.log(resolve,'清除数据库---->>>>>>name')
    })
   * @param {string} dbName 数据存储名
   * @param {string} storeName 表名
   * @param {number} dbVersion indexDB的版本号
   **/
  Utils.indexedDB = function (
    dbName = "default_db",
    storeName = "default_form",
    dbVersion = 1
  ) {
    this.dbName = dbName;
    this.slqVersion =
      "1"; /* websql的版本号，由于ios的问题，版本号的写法不一样 */
    this.dbVersion = dbVersion;
    this.storeName = storeName;
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
    let that = this;
    /**
     * 创建 “表”
     * @param {String} dbName 表名
     * @returns
     */
    this.createStore = function (dbName) {
      let txn, store;
      if (that.indexedDB) {
        /* 如果是支持IndexDB的 */
        txn = that.db[dbName].transaction(
          that.storeName,
          "readwrite"
        ); /* IndexDB的读写权限 */
        store = txn.objectStore(that.storeName);
      }
      return store;
    };
    /**
     * 打开数据库
     * @param {Function} callback  回调
     * @param {String} dbName 数据库名
     */
    this.open = function (callback, dbName) {
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
     * @param {any} key 数据key
     * @param {any} value 数据值
     * @returns
     */
    this.save = function (key, value) {
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
     * @param {string} key 数据key
     * @returns {Promise}
     */
    this.get = function (key) {
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
     * @param {string} key 数据键
     * @returns
     */
    this.regexpGet = function (key) {
      let list = [];
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
                      let concatList = item["value"];
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
     * @param {string} key 数据键
     * @returns
     */
    this.delete = function (key) {
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
   * 判断当前的位置是否位于页面底部附近
   * @param {number} nearValue 判断在页面底部的误差值，默认:50
   * @returns {boolean}
   * + true 在底部附近
   * + false 不在底部附近
   */
  Utils.isNearBottom = function (nearValue = 50) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    var documentHeight = document.documentElement.scrollHeight;
    return scrollTop + windowHeight >= documentHeight - nearValue;
  };

  /**
   * 判断对象是否是元素
   * @param {any} obj
   * @returns {boolean}
   * + true 是元素
   * + false 不是元素
   * @example
   * Utils.isDOM(document.querySelector("a"))
   * > true
   */
  Utils.isDOM = function (obj) {
    return obj instanceof HTMLElement || obj instanceof Node;
  };

  /**
   * 判断对象是否是jQuery对象
   * @param {any} obj
   * @returns {boolean}
   * + true 是jQuery对象
   * + false 不是jQuery对象
   * @example
   * Utils.isJQuery($("a"))
   * > true
   */
  Utils.isJQuery = function (obj) {
    let result = false;
    if (typeof jQuery === "object" && obj instanceof jQuery) {
      result = true;
    }
    if (typeof obj === "object") {
      /* 也有种可能，这个jQuery对象是1.8.3版本的，页面中的jQuery是3.4.1版本的 */
      let jQueryProps = [
        "add",
        "addBack",
        "addClass",
        "after",
        "ajaxComplete",
        "ajaxError",
        "ajaxSend",
        "ajaxStart",
        "ajaxStop",
        "ajaxSuccess",
        "animate",
        "append",
        "appendTo",
        "attr",
        "before",
        "bind",
        "blur",
        "change",
        "children",
        "clearQueue",
        "click",
        "clone",
        "closest",
        "constructor",
        "contents",
        "contextmenu",
        "css",
        "data",
        "dblclick",
        "delay",
        "delegate",
        "dequeue",
        "each",
        "empty",
        "end",
        "eq",
        "extend",
        "fadeIn",
        "fadeOut",
        "fadeTo",
        "fadeToggle",
        "filter",
        "find",
        "first",
        "focus",
        "focusin",
        "focusout",
        "get",
        "has",
        "hasClass",
        "height",
        "hide",
        "hover",
        "html",
        "index",
        "init",
        "innerHeight",
        "innerWidth",
        "insertAfter",
        "insertBefore",
        "is",
        "jquery",
        "keydown",
        "keypress",
        "keyup",
        "last",
        "load",
        "map",
        "mousedown",
        "mouseenter",
        "mouseleave",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "next",
        "nextAll",
        "not",
        "off",
        "offset",
        "offsetParent",
        "on",
        "one",
        "outerHeight",
        "outerWidth",
        "parent",
        "parents",
        "position",
        "prepend",
        "prependTo",
        "prev",
        "prevAll",
        "prevUntil",
        "promise",
        "prop",
        "pushStack",
        "queue",
        "ready",
        "remove",
        "removeAttr",
        "removeClass",
        "removeData",
        "removeProp",
        "replaceAll",
        "replaceWith",
        "resize",
        "scroll",
        "scrollLeft",
        "scrollTop",
        "select",
        "show",
        "siblings",
        "slice",
        "slideDown",
        "slideToggle",
        "slideUp",
        "sort",
        "splice",
        "text",
        "toArray",
        "toggle",
        "toggleClass",
        "trigger",
        "triggerHandler",
        "unbind",
        "width",
        "wrap",
      ];
      for (const jQueryPropsName of jQueryProps) {
        if (!(jQueryPropsName in obj)) {
          result = false;
          /* console.log(jQueryPropsName); */
          break;
        } else {
          result = true;
        }
      }
    }
    return result;
  };

  /**
   * 判断当前设备是否是移动端
   * @return {boolean}
   * + true 是移动端
   * + false 不是移动端
   * @example
   * Utils.isPhone();
   * > true
   **/
  Utils.isPhone = function () {
    return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent));
  };

  /**
   * 判断对象是否不为空
   * @param {any} obj
   * @returns {boolean}
   * + true 不为空
   * + false 为空
   * @example
   * Utils.isNotNull("123");
   * > true
   */
  Utils.isNotNull = function () {
    return !Utils.isNull(arguments);
  };

  /**
   * 判断对象或数据是否为空
   * String类型，如 ""、"null"、"undefined"、"   "
   * Number类型，如 0
   * Object类型，如 {}
   * @param {arguments} obj 需要判断的变量
   * @returns {boolean}
   * + true 为空
   * + false 不为空
   * @example
    Utils.isNull({});
    > true
   * @example
    Utils.isNull([]);
    > true
   * @example
    Utils.isNull(" ");
    > true
   * @example
    Utils.isNull(function(){});
    > true
   * @example
    Utils.isNull(()=>{}));
    > true
   * @example
    Utils.isNull("undefined");
    > true
   * @example
    Utils.isNull("null");
    > true
   * @example
    Utils.isNull(" ", false);
    > true
   * @example
    Utils.isNull([1],[]);
    > false
   * @example
    Utils.isNull([],[1]);
    > false
   * @example
    Utils.isNull(false,[123]);
    > false
   **/
  Utils.isNull = function () {
    let result = true;
    let checkList = [...arguments];
    for (const objItem of checkList) {
      let itemResult = false;
      switch (typeof objItem) {
        case "undefined":
        case "null":
          itemResult = true;
          break;
        case "object":
          /* object类型的也可能是null */
          if (objItem == null) {
            itemResult = true;
          } else if (
            Array.isArray(objItem) ||
            objItem instanceof NodeList ||
            objItem instanceof FileList
          ) {
            itemResult = objItem.length === 0;
          } else if (objItem instanceof Map || objItem instanceof Set) {
            itemResult = objItem.size === 0;
          } else {
            itemResult = Object.keys(objItem).length === 0;
          }
          break;
        case "number":
          itemResult = objItem === 0;
          break;
        case "string":
          itemResult =
            objItem.trim() === "" ||
            objItem === "null" ||
            objItem === "undefined";
          break;
        case "boolean":
          itemResult = !objItem;
          break;
        case "function":
          let funcStr = objItem.toString().replace(/\s/g, "");
          /* 排除()=>{}、(xxx="")=>{}、function(){}、function(xxx=""){}、 */
          itemResult = Boolean(
            funcStr.match(/^\(.*?\)=>\{\}$|^function.*?\(.*?\)\{\}$/)
          );
          break;
      }
      result = result && itemResult;
    }

    return result;
  };

  /**
   * 判断元素是否在页面中可见
   * @param {[...HTMLElement]|NodeList} dom 需要检查的元素，可以是普通元素|数组形式的元素|通过querySelectorAll获取的元素数组
   * @param {boolean} inView
   * + true 在窗口可视区域
   * + false 不在窗口可视区域
   * @returns {boolean}
   * + true 可见
   * + false 不可见
   * @example
   * Utils.isVisible(document.documentElement)
   * > true
   */
  Utils.isVisible = function (dom, inView = false) {
    let needCheckDomList = [];
    if (dom instanceof Array || dom instanceof NodeList) {
      needCheckDomList = [...dom];
    } else {
      needCheckDomList = [dom];
    }
    let result = true;
    for (const domItem of needCheckDomList) {
      let domDisplay = window.getComputedStyle(domItem);
      if (domDisplay.display === "none") {
        result = false;
      } else {
        let domClientRect = domItem.getBoundingClientRect();
        if (inView) {
          let viewportWidth =
            window.innerWidth || document.documentElement.clientWidth;
          let viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;
          result = !(
            domClientRect.right < 0 ||
            domClientRect.left > viewportWidth ||
            domClientRect.bottom < 0 ||
            domClientRect.top > viewportHeight
          );
        } else {
          result = !(
            domClientRect.bottom === 0 &&
            domClientRect.height === 0 &&
            domClientRect.left === 0 &&
            domClientRect.right === 0 &&
            domClientRect.top === 0 &&
            domClientRect.width === 0 &&
            domClientRect.x === 0 &&
            domClientRect.y === 0
          );
        }
      }
      if (!result) {
        /* 有一个不可见就退出循环 */
        break;
      }
    }
    return result;
  };

  /**
   * 判断是否是套壳浏览器环境
   * 当前包括检测：X浏览器、Via浏览器
   * @returns {boolean}
   * + true 是套壳浏览器
   * + false 不是套壳浏览器
   */
  Utils.isWebViewBrowser = function () {
    return (
      typeof window.via === "object" ||
      typeof window.via_gm === "object" ||
      typeof window.mbrowser === "object"
    );
  };

  /**
   * 把Object内的value值全部取出成Array
   * @param {Object} obj JSON数据
   * @return {Object} 返回数组
   * @example
   * Utils.parseObjectToArray({"Utils":"jsonToArray","return","Array"});
   * @return ['jsonToArray', 'Array']
   **/
  Utils.parseObjectToArray = function (obj) {
    if (typeof obj !== "object") {
      throw new Error("Utils.parseObjectToArray 参数 obj 必须为 object 类型");
    }
    let result = [];
    Object.keys(obj).forEach(function (keyName) {
      result = result.concat(obj[keyName]);
    });
    return result;
  };

  /**
   * 监听某个元素键盘按键事件或window全局按键事件
   * @param {Window|Node|HTMLElement} listenObj 需要监听的对象，可以是全局Window或者某个元素
   * @param {Function|undefined} callback 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
   * @example 
      Utils.listenKeyPress(window,(keyName,otherKey)=>{
          if(keyName === "Enter"){
              console.log("回车按键")
          }
          if(otherKey.indexOf("ctrl") && keyName === "Enter" ){
              console.log("Ctrl和回车键");
        }
      })
   * @example
  字母和数字键的键码值(keyCode)
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
   **/
  Utils.listenKeyPress = function (listenObj, callback) {
    if (!(listenObj instanceof Window) && !Utils.isDOM(listenObj)) {
      throw new Error(
        "Utils.listenKeyPress 参数 listenObj 必须为 Window|Node 类型"
      );
    }
    listenObj.addEventListener("keypress", function (event) {
      let keyName = event.code || event.key;
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
   * 日志对象
   * @param {Function} _GM_info_ 油猴管理器的API GM_info
   * @example
    let log = new Utils.Log(GM_info);
    log.info("普通输出");
    > 普通输出

    log.success("成功输出");
    > 成功输出

    log.error("错误输出");
    > 错误输出

    log.tag = "自定义tag信息";
    log.info("自定义info的颜色","#e0e0e0");
    > 自定义info的颜色

    log.config({
      successColor: "#31dc02",
      errorColor: "#e02d2d",
      infoColor: "black",
    })
    log.success("颜色为#31dc02");
    > 颜色为#31dc02
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
    let details = {
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
    /* 待恢复的函数或对象 */
    let recoveryList = [];
    /**
     * 检测清理控制台
     * @this {this}
     */
    let checkClearConsole = function () {
      logCount++;
      if (details.autoClearConsole && logCount > details.logMaxCount) {
        console.clear();
        logCount = 0;
      }
    };
    this.tag = _GM_info_?.script?.name || "GM_info缺失";
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
        color = color || details.infoColor;
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
      if (details.debug) {
        console.log(stackFunctionNamePosition);
      }
    };
    /**
     * 控制台-错误输出
     * @param {any} msg
     * @param {string} color
     */
    this.error = function (msg, color) {
      this.info(msg, color || details.errorColor, "error");
    };
    /**
     * 控制台-成功输出
     * @param {any} msg
     * @param {string} color
     */
    this.success = function (msg, color) {
      this.info(msg, color || details.successColor, "success");
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
        color = color || details.infoColor;
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
      if (details.debug) {
        console.log(stackFunctionNamePosition);
      }
    };
    /**
     * 配置Log对象的颜色
     * @param {object} paramDetails 配置信息
     */
    this.config = function (paramDetails) {
      details = Object.assign(details, paramDetails);
    };
    /**
     * 禁用输出
     */
    this.disable = function () {
      let that = this;
      Object.keys(this)
        .filter((keyName) => Boolean(keyName.match(/info|error|success|table/)))
        .forEach((keyName) => {
          let value = {};
          value[keyName] = that[keyName];
          recoveryList = [...recoveryList,value];
          that[keyName] = () => {};
        });
    };
    /**
     * 恢复输出
     */
    this.recovery = function () {
      let that = this;
      recoveryList.forEach((item) => {
        let keyName = Object.keys(item);
        that[keyName] = item[keyName];
      });
      recoveryList = [];
    };
  };

  /**
   * 合并数组内的JSON的值字符串
   * @param {[...any]} data 需要合并的数组
   * @param {Function|string|undefined} handleFunc 处理的函数|JSON的key
   * @returns {string}
   * @example
   * Utils.mergeArrayToString([{"name":"数组内数据部分字段合并成字符串->"},{"name":"mergeToString"}],(item)=>{return item["name"]});
   * > '数组内数据部分字段合并成字符串->mergeToString'
   **/
  Utils.mergeArrayToString = function (data, handleFunc) {
    if (!(data instanceof Array)) {
      throw new Error("Utils.mergeArrayToString 参数 data 必须为 Array 类型");
    }
    let content = "";
    if (typeof handleFunc === "function") {
      data.forEach((item) => {
        content += handleFunc(item);
      });
    } else if (typeof handleFunc === "string") {
      data.forEach((item) => {
        content += item[handleFunc];
      });
    } else {
      data.forEach((item) => {
        Object.values(item)
          .filter((item2) => typeof item2 === "string")
          .forEach((item3) => {
            content += item3;
          });
      });
    }
    return content;
  };

  /**
   * 监听页面元素改变并处理
   * @param {object|Node|HTMLElement} target 需要监听的元素，如果不存在，可以等待它出现
   * @param {object} observer_config MutationObserver的配置
   * @example
    Utils.mutationObserver(document.querySelector("div.xxxx"),{
      "callback":(mutations, observer)=>{},
      "config":{childList:true,attributes:true}
    });
   * @example
    Utils.mutationObserver(document.querySelectorAll("div.xxxx"),{
      "callback":(mutations, observer)=>{},
      "config":{childList:true,attributes:true}}
    );
   * @example
    Utils.mutationObserver($("div.xxxx"),{
    "callback":(mutations, observer)=>{},
    "config":{childList:true,attributes:true}}
    );
   **/
  Utils.mutationObserver = function (target, observer_config) {
    if (
      !(target instanceof Node) &&
      !(target instanceof NodeList) &&
      !Utils.isJQuery(target)
    ) {
      throw new Error(
        "Utils.mutationObserver 参数 target 必须为 Node|NodeList|jQuery类型"
      );
    }

    let default_obverser_config = {
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
    observer_config = Utils.assign(default_obverser_config, observer_config);
    let MutationObserver =
      window.MutationObserver ||
      window.webkitMutationObserver ||
      window.MozMutationObserver;
    let mutationObserver = new MutationObserver(function (mutations, observer) {
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
    } else if (Utils.isJQuery(target)) {
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
   * 恢复/释放该对象内部方法，让它无效/有效
   * @param {object} needReleaseObject 需要操作的对象
   * @param {string} needReleaseName 需要操作的对象的名字
   * @param {array} functionNameList 需要释放的方法，如果为空，默认全部方法
   * @param {boolean} release
   * + true (默认) 释放该对象下的某些方法
   * + false 恢复该对象下的某些方法
   * @example
    // 释放该方法
    Utils.noConflict(console,"console",["log"],true);
    console.log;
    > () => {}

   * @example
    // 恢复该方法
    Utils.noConflict(console,"console",["log"],false);
    console.log;
    > ƒ log() { [native code] }

   * @example
    // 释放所有方法
    Utils.noConflict(console,"console",[],true);
    console.debug;
    > () => {}

   * @example
    // 恢复所有方法
    Utils.noConflict(console,"console",[],false);
    console.debug;
    > ƒ log() { [native code] }
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
    let needReleaseKey = "__" + needReleaseName;
    function cloneObj(obj) {
      /* 复制对象 */
      let newObj = {};
      if (obj instanceof Array) {
        newObj = [];
      }
      for (let key in obj) {
        let val = obj[key];
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
   * base64转blob
   * @param {string} dataUri base64的数据
   * @return {string} blob的链接
   * @example
   * Utils.parseBase64ToBlob("data:image/jpeg;base64,.....");
   * > blob://xxxxxxx
   **/
  Utils.parseBase64ToBlob = function (dataUri) {
    if (typeof dataUri !== "string") {
      throw new Error(
        "Utils.parseBase64ToBlob 参数 dataUri 必须为 string 类型"
      );
    }
    let dataUriSplit = dataUri.split(","),
      dataUriMime = dataUriSplit[0].match(/:(.*?);/)[1],
      dataUriBase64Str = atob(dataUriSplit[1]),
      dataUriLength = dataUriBase64Str.length,
      u8arr = new Uint8Array(dataUriLength);
    while (dataUriLength--) {
      u8arr[dataUriLength] = dataUriBase64Str.charCodeAt(dataUriLength);
    }
    return new Blob([u8arr], {
      type: dataUriMime,
    });
  };

  /**
   * base64转File对象
   * @param {string} dataUri	base64的数据
   * @return {string}	blob的链接
   * @example
   * Utils.parseBase64ToFile("data:image/jpeg;base64,.....","测试文件");
   * > object
   **/
  Utils.parseBase64ToFile = function (dataUri, fileName) {
    if (typeof dataUri !== "string") {
      throw new Error(
        "Utils.parseBase64ToFile 参数 dataUri 必须为 string 类型"
      );
    }
    if (typeof fileName !== "string") {
      throw new Error(
        "Utils.parseBase64ToFile 参数 fileName 必须为 string 类型"
      );
    }
    let dataUriSplit = dataUri.split(","),
      dataUriMime = dataUriSplit[0].match(/:(.*?);/)[1],
      dataUriBase64Str = atob(dataUriSplit[1]),
      dataUriLength = dataUriBase64Str.length,
      u8arr = new Uint8Array(dataUriLength);
    while (dataUriLength--) {
      u8arr[dataUriLength] = dataUriBase64Str.charCodeAt(dataUriLength);
    }
    return new File([u8arr], fileName, {
      type: dataUriMime,
    });
  };

  /**
   * 将正则匹配到的结果取出最后一个值并转换成int格式
   * @param {[...any]} matchList 正则匹配的列表
   * @param {number|string} defaultValue 正则匹配的列表为空时，或者正则匹配的列表最后一项不为Int，返回该默认值
   * @example
   * Utils.parseInt(["dadaadada123124","123124"],0);
   * > 123124
   *
   * @example
   * Utils.parseInt(null,0);
   * > 0
   * @example
   * Utils.parseInt(["aaaaaa"]);
   * > 0
   *
   * @example
   * Utils.parseInt(["aaaaaa"],"66");
   * > 66
   *
   * @example
   * Utils.parseInt(["aaaaaaa"],"aa");
   * > NaN
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
   * blob转File对象
   * @param {string} blobUrl	需要转换的blob的链接
   * @param {string} fileName	转换成的File对象的文件名称
   * @return {object} File对象
   * @example
   * Utils.blobToFile("blob://xxxxx");
   * > object
   **/
  Utils.parseBlobToFile = function (blobUrl, fileName) {
    const file = new File([blob], fileName, { type: blob.type });
    return new Promise((resolve, reject) => {
      fetch(blobUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const file = blobToFile(blob, "example.txt");
          resolve(file);
        })
        .catch((error) => {
          console.error("Error:", error);
          reject(error);
        });
    });
  };

  /**
   * 【异步函数】File对象转base64
   * @param {object} fileObj	需要转换的File对象
   * @return {string} base64格式的数据
   * @example
   * await Utils.parseFileToBase64(object);
   * > 'data:image/jpeg:base64/,xxxxxx'
   **/
  Utils.parseFileToBase64 = async function (fileObj) {
    let reader = new FileReader();
    reader.readAsDataURL(fileObj);
    return new Promise((resolve) => {
      reader.onload = function (event) {
        resolve(event.target.result);
      };
    });
  };

  /**
   * 解析字符串
   * @param {string} text 要解析的 DOMString。它必须包含 HTML、xml、xhtml+xml 或 svg 文档。
   * @param {string} mimeType 解析成的类型，包括：text/html、text/xml、application/xml、application/xhtml+xml、image/svg+xml
   * @returns {HTMLElement|XMLDocument|SVGElement}
   * @example
   * Utils.parseFromString("<p>123<p>");
   * > #document
   */
  Utils.parseFromString = function (text, mimeType = "text/html") {
    let parser = new DOMParser();
    return parser.parseFromString(text, mimeType);
  };

  /**
   * 在canvas元素节点上绘制进度圆圈
   * @param {object} paramConfig 配置信息
   * @example
    let progress = new Utils.Process({canvasNode:document.querySelector("canvas")});
    progress.draw();
   * **/
  Utils.Progress = function (paramConfig) {
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
    this.config = Utils.assign(this.config, paramConfig);
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
   * @example
   * Utils.setClip("xxxx");
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
   * 【异步函数】等待N秒执行函数
   * @param {Function|string} func	待执行的函数(字符串)
   * @param {number} delayTime	延时时间(ms)
   * @return {?undefined}	函数的返回值
   * @example
   * await Utils.setTimeout(()=>{}, 2500);
   * > ƒ tryCatchObj() {}
   * @example
   * await Utils.setTimeout("()=>{console.log(12345)}", 2500);
   * > ƒ tryCatchObj() {}
   **/
  Utils.setTimeout = async function (func, delayTime = 0) {
    if (typeof func !== "function" && typeof func !== "string") {
      throw new Error("Utils.setTimeout 参数 func 必须为 function|string 类型");
    }
    if (typeof delayTime !== "number") {
      throw new Error("Utils.setTimeout 参数 delayTime 必须为 number 类型");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Utils.tryCatch().run(func));
      }, delayTime);
    });
  };

  /**
   * 【异步函数】延迟xxx毫秒
   * @param {number} delayTime 延时时间(ms)
   * @example
   * await Utils.sleep(2500)
   **/
  Utils.sleep = async function (delayTime) {
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
   * @param {Array|NodeList|Function} data 数据|获取数据的方法
   * @param {string|Function} getPropertyValueFunc 数组内部项的某个属性的值的方法，参数为这个项
   * @param {boolean} sortByDesc 排序方式，默认true倒序(值最大排第一个，如:6、5、4、3...)，false为升序(值最小排第一个，如:1、2、3、4...)
   * @return {object} 返回比较排序完成的数组
   * @example
   * Utils.sortListByProperty([{"time":"2022-1-1"},{"time":"2022-2-2"}],(item)=>{return item["time"]})
   * > [{time: '2022-2-2'},{time: '2022-1-1'}]
   * @example
   * Utils.sortListByProperty([{"time":"2022-1-1"},{"time":"2022-2-2"}],(item)=>{return item["time"]},false)
   * > [{time: '2022-1-1'},{time: '2022-2-2'}]
   **/
  Utils.sortListByProperty = function (
    data,
    getPropertyValueFunc,
    sortByDesc = true
  ) {
    if (
      typeof getPropertyValueFunc !== "function" &&
      typeof getPropertyValueFunc !== "string"
    ) {
      throw new Error(
        "Utils.sortListByProperty 参数 getPropertyValueFunc 必须为 function|string 类型"
      );
    }
    if (typeof sortByDesc !== "boolean") {
      throw new Error(
        "Utils.sortListByProperty 参数 sortByDesc 必须为 boolean 类型"
      );
    }
    let getObjValue = function (obj) {
      return typeof getPropertyValueFunc === "string"
        ? obj[getPropertyValueFunc]
        : getPropertyValueFunc(obj);
    };
    /**
     * 排序方法
     * @param {any} after_obj
     * @param {any} before_obj
     * @returns
     */
    let sortFunc = function (after_obj, before_obj) {
      let beforeValue = getObjValue(before_obj); /*  前 */
      let afterValue = getObjValue(after_obj); /* 后 */
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
    /**
     * 排序元素方法
     * @param {NodeList|jQuery} nodeList 元素列表
     * @param {Function} getNodeListFunc 获取元素列表的函数
     */
    let sortNodeFunc = function (nodeList, getNodeListFunc) {
      let nodeListLength = nodeList.length;
      for (let i = 0; i < nodeListLength - 1; i++) {
        for (let j = 0; j < nodeListLength - 1 - i; j++) {
          let beforeNode = nodeList[j];
          let afterNode = nodeList[j + 1];
          let beforeValue = getObjValue(beforeNode); /*  前 */
          let afterValue = getObjValue(afterNode); /* 后 */
          if (
            (sortByDesc == true && beforeValue < afterValue) ||
            (sortByDesc == false && beforeValue > afterValue)
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
            nodeList = getNodeListFunc();
          }
        }
      }
    };
    let result = data;
    let getDataFunc = null;
    if (data instanceof Function) {
      getDataFunc = data;
      data = data();
    }
    if (Array.isArray(data)) {
      data.sort(sortFunc);
    } else if (data instanceof NodeList || Utils.isJQuery(data)) {
      sortNodeFunc(data, getDataFunc);
      result = getDataFunc();
    } else {
      throw new Error(
        "Utils.sortListByProperty 参数 data 必须为 Array|NodeList|jQuery 类型"
      );
    }
    return result;
  };

  /**
   * 字符串转Object对象，类似'{"test":""}' => {"test":""}
   * @param {string} data
   * @returns {object}
   * @example
   * Utils.toJSON("{123:123}")
   * > {123:123}
   */
  Utils.toJSON = function (data) {
    let result = {};
    Utils.tryCatch()
      .config({ log: false })
      .error(() => {
        Utils.tryCatch().run(() => {
          result = window.eval("(" + data + ")");
        });
      })
      .run(() => {
        result = JSON.parse(data);
      });
    return result;
  };

  /**
   * 提供一个封装了 try-catch 的函数，可以执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
   * @return {{run:Function,config:Function,error:Function}} - 返回一个对象，其中包含 error 和 run 两个方法。
   * @example
   * Utils.tryCatch().error().run(()=>{console.log(1)});
   * > 1
   * @example
   * Utils.tryCatch().error().run(()=>{throw new Error('测试错误')});
   * > ()=>{throw new Error('测试错误')}出现错误
   */
  Utils.tryCatch = function () {
    // 定义变量和函数
    let func = null;
    let funcThis = null;
    let handleErrorFunc = null;
    let defaultDetails = {
      log: true,
    };
    let funcArgs = arguments;
    /**
     * @function tryCatchObj
     * @description 空函数，用于链式调用。
     */
    function tryCatchObj() {}

    /**
     * 配置
     * @param {object} paramDetails
     */
    tryCatchObj.config = function (paramDetails) {
      defaultDetails = Utils.assign(defaultDetails, paramDetails);
      return tryCatchObj;
    };
    /**
     * 设置错误处理函数。
     * @param {function|string} handler - 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @return {function} - 返回 tryCatchObj 函数。
     */
    tryCatchObj.error = function (handler) {
      handleErrorFunc = handler;
      return tryCatchObj;
    };

    /**
     * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
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
     * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
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
          result = func.apply(funcThis, funcArgs);
        }
      } catch (error) {
        if (defaultDetails.log) {
          console.log(
            `%c ${func?.name ? func?.name : func + "出现错误"} `,
            "color: #f20000"
          );
          console.log(`%c 错误原因：${error}`, "color: #f20000");
          console.trace(func);
        }
        if (handleErrorFunc) {
          if (typeof handleErrorFunc === "string") {
            result = window.eval(handleErrorFunc);
          } else {
            result = handleErrorFunc.apply(funcThis, funcArgs);
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
   * @param {[...any]} uniqueArrayData 需要去重的数组
   * @param {[...any]} compareArrayData 用来比较的数组
   * @param {function} compareFun 数组比较方法，如果值相同，去除该数据
   * @returns {object} 返回去重完毕的数组
   * @example
   * Utils.uniqueArray([1,2,3],[1,2],(item,item2)=>{return item===item2 ? true:false});
   * > [3]
   *
   * @example
   * Utils.uniqueArray([1,2,3],[1,2]);
   * > [3]
   *
   * @example
   * Utils.uniqueArray([{"key":1,"value":2},{"key":2}],[{"key":1}],(item,item2)=>{return item["key"] === item2["key"] ? true:false});
   * > [{"key": 2}]
   **/
  Utils.uniqueArray = function (
    uniqueArrayData = [],
    compareArrayData = [],
    compareFun = (item, item2) => {
      return item === item2;
    }
  ) {
    return Array.from(uniqueArrayData).filter(
      (item) =>
        !Array.from(compareArrayData).some(function (item2) {
          return compareFun(item, item2);
        })
    );
  };

  /**
   * 等待函数数组全部执行完毕，注意，每个函数的顺序不是同步
   * @param {[...any] | [...HTMLElement]} data	需要遍历的数组
   * @param {Function} handleFunc	对该数组进行操作的函数，该函数的参数为数组格式的参数,[数组下标，数组项]
   * @example
   * await Utils.waitArrayLoopToEnd([func,func,func],xxxFunction);
   **/
  Utils.waitArrayLoopToEnd = function (data, handleFunc) {
    if (typeof handleFunc !== "function" && typeof handleFunc !== "string") {
      throw new Error(
        "Utils.waitArrayLoopToEnd 参数 handleDataFunction 必须为 function|string 类型"
      );
    }
    return Promise.all(
      Array.from(data).map(async (item, index) => {
        await Utils.tryCatch(index, item).run(handleFunc);
      })
    );
  };

  /**
   * 等待指定节点出现，支持多个 selector
   * @param {...string} nodeSelectors - 一个或多个节点选择器，必须为字符串类型
   * @returns {Promise} 返回一个 Promise 对象，成功时返回节点数组，如[ [...nodes], [...nodes] ]
   * 如果参数 nodeSelectors 只有一个的话，返回 [...nodes]
   * @example
    Utils.waitNode("div.xxx","a.xxx").then( (nodeList)=>{
      let divNodesList = nodeList[0];
      let aNodeList = nodeList[1];
    })
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
        config: { subtree: true, childList: true, attributes: true },
        callback: (mutations, observer) => {
          checkNodes();
          if (isReturn) {
            observer.disconnect();
          }
        },
      });
    });
  };
})((Utils = {}));
