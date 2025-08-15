/**
 * 上下文环境api
 *
 * 通过this.xxx访问
 */
declare interface NetDiskUserCustomRuleContext {
	subscribeUUID: string | null;
	/**
	 * 当前的规则
	 */
	rule: NetDiskUserCustomRule;
	/**
	 * 网络请求js文件
	 */
	NetDiskRequire: {
		file(path: any, options: any): Promise<boolean>;
	};
	/**
	 * 加密使用
	 */
	CryptoJS: object;
	/**
	 * 网络请求
	 */
	httpx: UtilsHttpxConstrustor;
	/**
	 * 工具类
	 */
	utils: Utils;
	/**
	 * 元素工具类
	 */
	DOMUtils: DOMUtils;
	/**
	 * 上下文的window，在油猴中是被Proxy的window
	 */
	window: Window & typeof globalThis;
	/**
	 * 页面的window
	 */
	unsafeWindow: Window & typeof globalThis;
	/**
	 * 用于返回校验状态
	 */
	NetDiskCheckLinkValidity: object;
	/**
	 * 日志输出
	 */
	log: UtilsLogConstructor;
	/**
	 * Toast吐司
	 */
	Qmsg: object;
	/**
	 * 弹窗
	 */
	pops: object;
	/**
	 * 本规则的数据存储
	 */
	setValue(key: string, value: any): void;
	/**
	 * 本规则的数据获取
	 */
	getValue(key: string): any;
	/**
	 * 本规则的数据删除
	 */
	deleteValue(key: string): void;
}

/**
 * 链接识别规则
 */
declare interface NetDiskUserCustomRuleRegexp {
	/**
	 * 当设置中匹配类型为文本，使用该规则
	 *
	 * 以下是可使用的替换的参数
	 *
	 * + `{#matchRange-text-before#}`替换为setting配置的`innerTextAccessCodeBeforeMaxRange`
	 * + `{#matchRange-text-after#}`替换为setting配置的`innerTextAccessCodeAfterMaxRange`
	 */
	link_innerText: string;
	/**
	 * 当设置中匹配类型为超文本，使用该规则
	 *
	 * 以下是可使用的替换的参数
	 *
	 * + `{#matchRange-html-before#}`替换为setting配置的`innerHTMLAccessCodeBeforeMaxRange`
	 * + `{#matchRange-html-after#}`替换为setting配置的`innerHTMLAccessCodeAfterMaxRange`
	 */
	link_innerHTML: string;
	/**
	 * 用于提取出shareCode
	 */
	shareCode: string;
	/**
	 * (可选)正则：用于判断提取到的shareCode是否是错误的shareCode
	 */
	shareCodeNotMatch?: string | string[];
	/**
	 * 用于删除提取出的shareCode前面的域名、路径字符串
	 *
	 * 会自动进行正则转换，正则模式ig
	 */
	shareCodeNeedRemoveStr: string | string[];
	/**
	 * （可选）值为规则名，如果匹配到的shareCode在目标规则匹配到的shareCode中，那么取消匹配
	 */
	shareCodeExcludeRegular?: string[];
	/**
	 * 用于判断提取码是否存在
	 *
	 * 会自动进行正则转换，正则模式ig
	 */
	checkAccessCode?: string;
	/**
	 * 匹配提取码
	 *
	 * 会自动进行正则转换，正则模式ig
	 */
	accessCode?: string;
	/**
	 * 用于排除肯定不是提取码的关键字
	 *
	 * 会自动进行正则转换，正则模式ig
	 */
	acceesCodeNotMatch?: string | string[];
	/**
	 * 正则：需要替换空的，比如pan.baidu.com/s/替换为空
	 */
	accessCodeNeedRemoveStr?: string | string[];
	/**
	 * （可选）用于对matchText进行提取需要的关键内容
	 *
	 * 会自动进行正则转换，正则模式i
	 *
	 * 提取到的内容会被转换成以下格式，可在uiLinkShow、blank、copyUrl中使用
	 * + 类似：{#$1#}、{#$2#}...
	 */
	paramMatch?: string;
	/**
	 * 显示出的链接
	 */
	uiLinkShow: string;
	/**
	 * 用于超链接打开，提取码会自动复制到剪贴板
	 */
	blank: string;
	/**
	 * 用于复制到剪贴板
	 */
	copyUrl: string;
}

/**
 * 设置界面配置
 */
declare interface NetDiskUserCustomRuleSetting {
	/**
	 * 规则名-不需要和key相同，主要用于显示的
	 * + 左侧栏显示
	 * + 顶部标题栏显示
	 */
	name: string;
	/**
	 * 提取码间隔前的字符长度
	 *
	 * 作用于规则-link_innerText，占位字符串{#innerTextAccessCodeBeforeMaxRange#}
	 *
	 * 【提取码文本匹配Text】-【间隔前】
	 *
	 * 键: `${key}_innerText_accessCode_before_max_range`
	 */
	innerTextAccessCodeBeforeMaxRange?: number;
	/**
	 * 提取码间隔后的字符长度
	 *
	 * 作用于规则-link_innerText，占位字符串{#innerTextAccessCodeAfterMaxRange#}
	 *
	 * 【提取码文本匹配Text】-【间隔后】
	 *
	 * 键: `${key}_innerText_accessCode_after_max_range`
	 */
	innerTextAccessCodeAfterMaxRange?: number;
	/**
	 * 提取码间隔前的字符长度
	 *
	 * 作用于规则-link_innerHTML，占位字符串{#innerHTMLAccessCodeBeforeMaxRange#}
	 *
	 *
	 * 【提取码文本匹配HTML】-【间隔前】
	 *
	 * 键: `${key}_innerHTML_accessCode_before_max_range`
	 */
	innerHTMLAccessCodeBeforeMaxRange?: number;
	/**
	 * 提取码间隔后的字符长度
	 *
	 * 作用于规则-link_innerHTML，占位字符串{#innerHTMLAccessCodeAfterMaxRange#}
	 *
	 * 【提取码文本匹配HTML】-【间隔后】
	 *
	 * 键: `${key}_innerHTML_accessCode_after_max_range`
	 */
	innerHTMLAccessCodeAfterMaxRange?: number;
	/**
	 * 是否启用
	 *
	 * 【功能】-【启用】
	 *
	 * 键: `${key}-enable`
	 */
	enable: boolean;
	/**
	 * 是否新标签页打开
	 *
	 * 【功能】-【新标签页打开】
	 *
	 * 键: `${key}-open-enable`
	 * @deprecated 代替 linkClickMode
	 */
	isBlank?: boolean;
	/**
	 * 点击动作
	 * 【功能】-【点击动作】
	 */
	linkClickMode: {
		[key in "copy" | "openBlank" | "parseFile" | "own"]?: {
			/** 是否是默认值 */
			default: boolean;
			/** 是否启用 */
			enable: boolean;
			/** 显示文字 */
			text: string;
		};
	};
	/**
	 * 通过新标签页打开时，复制访问码
	 *
	 * 【点击动作-新标签页打开】-【跳转时携带访问码】
	 *
	 * 键: `${key}-open-blank-with-copy-accesscode`
	 */
	openBlankWithCopyAccessCode?: boolean;
	/**
	 * 通过新标签页打开时，是否自动填充访问码
	 *
	 *  【点击动作-新标签页打开】-【自动填充访问码】
	 *
	 *  键: `${key}-open-blank-auto-fill-accesscode`
	 */
	openBlankAutoFilleAccessCode?: boolean;
	/**
	 * 是否开启scheme转发
	 *
	 * 【Scheme转发】-【启用】
	 *
	 * 键: `${key}-forward-scheme-enable`
	 */
	isForward?: boolean;
	/**
	 * 是否转发下载链接
	 *
	 * 【Scheme转发】-【转发直链】
	 *
	 * 键: `${key}-forward-download-link-enable`
	 */
	isForwardDownloadLink?: boolean;
	/**
	 * 是否转发新标签页打开的链接
	 *
	 * 【Scheme转发】-【转发新标签页链接】
	 *
	 * 键: `${key}-forward-blank-link-enable`
	 */
	isForwardBlankLink?: boolean;
	/**
	 * scheme的格式
	 *
	 * 【Scheme转发】-【Uri链接】
	 *
	 * 键: `${key}-static-scheme-uri`
	 */
	schemeUri?: string;
	/**
	 * 验证链接有效性
	 *
	 * 需要配置`setting.checkLinkValidityFunction`
	 *
	 * 【功能】-【验证链接有效性】
	 *
	 * 键: `${key}-check-link-valid`
	 */
	checkLinkValidity?: boolean;
	/**
	 * 验证链接有效性-悬停提示
	 *
	 * 【功能】-【验证链接有效性-悬停提示】
	 *
	 * 键: `${key}-check-link-valid-hover-tip`
	 */
	checkLinkValidityHoverTip?: boolean;
}

/**
 * 自定义规则的配置项
 */
declare interface NetDiskUserCustomRule {
	/**
	 * 订阅的uuid
	 *
	 * 这里不需要填，规则导出时会自动生成
	 */
	subscribeUUID?: string | null;
	/**
	 * 这是需要识别的网盘的唯一key，如果和脚本里的key重复的话会覆盖，如果用户自定义中存在相同的key，将会合并，即一个key匹配多种网盘链接
	 */
	key: string;
	/**
	 * 用于显示的网盘图标，可以是data:image格式，或者是url图片，如果没有，会是空白图标
	 */
	icon: string;
	/**
	 * 匹配规则
	 */
	regexp: NetDiskUserCustomRuleRegexp | NetDiskUserCustomRuleRegexp[];
	/**
	 * 设置
	 */
	setting: NetDiskUserCustomRuleSetting;
	/**
	 * （可选）验证链接有效性的函数
	 * + `参数`: netDiskInfo: [NetDiskCheckLinkValidityEntranceInstance](https://github.com/WhiteSevs/TamperMonkeyScript/blob/master/scripts-vite/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB/types/NetDiskCheckLinkValidity.d.ts#L49-L76)
	 *
	 * `this`是`NetDiskUserCustomRuleContext`对象:
	 *
	 * `@returns`返回值必须是NetDiskCheckLinkValidityStatus内的任意属性值
	 * 其中包括
	 * + this.NetDiskCheckLinkValidityStatus.loading
	 * + this.NetDiskCheckLinkValidityStatus.success
	 * + this.NetDiskCheckLinkValidityStatus.error
	 * + this.NetDiskCheckLinkValidityStatus.failed
	 * + this.NetDiskCheckLinkValidityStatus.needAccessCode
	 * + this.NetDiskCheckLinkValidityStatus.unknown
	 * @example
	 * let response = await this.httpx.get("https://.../...",{
	 *     headers: {
	 *         "User-Agent": this.utils.getRandomPCUA(),
	 *     },
	 *     allowInterceptConfig: false,
	 * });
	 * if (!response.status && utils.isNull(response.data.responseText)) {
	 *     // 校验失败
	 *     return this.NetDiskCheckLinkValidityStatus.failed;
	 * }
	 * let responseText = response.data.responseText;
	 * if(responseText.includes("请输入访问码")){
	 *      return {
	 *          ...this.NetDiskCheckLinkValidityStatus.needAccessCode,
	 *          data: response,
	 *      }
	 * }else if(responseText.includes("来晚啦") || responseText.includes("不存在")){
	 *      return {
	 *          ...this.NetDiskCheckLinkValidityStatus.failed,
	 *          data: response,
	 *          tipMsg: "文件不存在",
	 *      };
	 * }
	 * // 未知情况
	 * return {
	 *     ...NetDiskCheckLinkValidityStatus.unknown,
	 *     data: response,
	 * }
	 */
	checkLinkValidityFunction?: string;
	/**
	 * （可选）鉴权函数，运行于页面加载完毕，可在这里来获取需要的值并存储
	 * @example
	 * if(window.location.hostname === "pan.baidu.com"){
	 *     if(typeof this.unsafeWindow.localStorage.getItem("xxxxxx") === "string"){
	 *         this.setValue("baidu-xxxx",this.unsafeWindow.localStorage.getItem("xxxxxx"));
	 *     }
	 * }
	 */
	AuthorizationFunction?: string;
	/**
	 * （可选）自动添加访问码函数
	 * 通过NetDiskParse.blank函数来打开网盘链接会触发该函数执行
	 * 会判断条件，需要满足=>key相同、accessCode不为空、开启自动输入访问码功能、网址中存在该shareCode
	 * + `参数`: netDiskInfo: [NetDiskAutoFillAccessCodeOption](https://github.com/WhiteSevs/TamperMonkeyScript/blob/master/scripts-vite/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB/types/NetDiskAutoFillAccessCode.d.ts)
	 * @example
	 * if (window.location.hostname === "pan.baidu.com") {
	 *   this.DOMUtils.ready(()=>{
	 *      this.utils.waitNode("input", 10000).then( ($input)=>{
	 *          if (!this.utils.isVisible($input)) {
	 *			    log.error("输入框不可见，不输入密码");
	 *			    return;
	 *		    }
	 *          $input && ($input.value = netDiskInfo.accessCode);
	 *          this.Qmsg.success("自动填充访问码");
	 *          let $submit = document.querySelector("button[type='submit']");
	 *          if(!$submit){
	 *              this.Qmsg.error("提交按钮不存在");
	 *              return;
	 *          }
	 *          $submit?.click();
	 *      })
	 *   });
	 * }
	 */
	AutoFillAccessCodeFunction?: string;
	/**
	 * （可选）解析网盘链接函数
	 * 需要强制返回this
	 * 入口函数为`init`
	 * + `参数`：netDiskInfo: [ParseFileInitConfig](https://github.com/WhiteSevs/TamperMonkeyScript/blob/master/scripts-vite/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB/types/NetDiskParseFile.d.ts)
	 * @example
	 * let that = this;
	 * this.init = async function(netDiskInfo){
	 *      console.log(netDiskInfo);
	 * }
	 * return this;
	 */
	parseFunction?: string;
	/**
	 * （可选）渲染后的链接元素触发的回调
	 *
	 * + `参数1`：`option: NetDiskRuleAfterRenderUrlBoxOption`
	 * @example
	 *
	 * this.DOMUtils.on(option.$urlBox, "click", (evt) => {
	 *     this.utils.preventDefault(evt);
	 * 	   // ...
	 * })
	 */
	afterRenderUrlBox?: string;
}
