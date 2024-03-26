/**
 * 网盘匹配规则配置
 */
declare interface NetDiskRegularOption {
    /** 是否启用 */
    enable: boolean;
    /**
     * 正则字符串：使用innerText进行匹配
     */
    link_innerText: string;
    /**
     * 正则字符串：使用innerHTML进行匹配
     */
    link_innerHTML: string;
    /**
     * 正则：获取shareCode
     */
    shareCode: RegExp;
    /**
     * (可选)正则：用于判断提取到的shareCode是否是错误的shareCode
     */
    shareCodeNotMatch?: RegExp;
    /**
     * 正则：需要替换空的，比如pan.baidu.com/s/替换为空
     */
    shareCodeNeedRemoveStr: RegExp;
    /** （可选）值为规则名，如果匹配到的shareCode在目标规则匹配到的shareCode中，那么取消匹配 */
    shareCodeExcludeRegular?: string[];
    /**
     * 正则：用来判断link_innerText或者link_innerHTML匹配到的字符串中是否存在密码
     */
    checkAccessCode: RegExp;
    /**
     * 正则：用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码
     */
    accessCode: RegExp;
    /**
     * （可选）正则：用于判断提取到的accessCode是否是错误的accessCode
     */
    acceesCodeNotMatch?: RegExp;
    /**
     * （可选）用于对matchText进行提取需要的关键内容
     * 
     * 会自动进行正则转换，正则模式i
     * 
     * 提取到的内容会被转换成以下格式，可在uiLinkShow、blank、copyUrl中使用
     * + 类似：{#$1#}、{#$2#}...
     */
    paramMatch?: RegExp;
    /**
     * 用于显示在弹窗中的字符串
     */
    uiLinkShow: string;
    /**
     * 用于点击跳转的链接
     */
    blank: string;
    /**
     * 用于复制到剪贴板的链接
     */
    copyUrl: string;
    /**
     * （可选）用于验证链接有效性
     */
    checkLinkValidity?: boolean;
}
/**
 * 网盘匹配规则
 */
declare interface NetDiskRegular {
    [key: string]: NetDiskRegularOption[];
}


/** 存储的访问码的值 */
declare interface NetDiskDictData {
    /** 访问码 */
    accessCode: string;
    /** 匹配规则的下标 */
    netDiskIndex?: number;
    /**
     * 匹配的文本
     */
    matchText: string;
    /** 是否锁定访问码不允许修改，默认false */
    isForceAccessCode?: boolean;
}

declare interface NetiDiskHandleObject {
    /** 分享码 */
    shareCode: string;
    /** 访问码 */
    accessCode: string;
    /** 规则名 */
    netDiskName: string;
    /** 下标 */
    netDiskIndex: number;
    /**
     * 匹配的文本
     */
    matchText: string;
}
declare interface NetDiskHistoryDataOption {
    /** 匹配的网站URL */
    url: string;
    /** 匹配的网站顶部URL（防止是在iframe内匹配到的） */
    topURL: string;
    /** 规则名 */
    netDiskName: string;
    /** 规则下标 */
    netDiskIndex: number;
    /** 分享码 */
    shareCode: string;
    /** 访问码 */
    accessCode: string;
    /** 添加的时间 */
    addTime: number;
    /** 更新的时间 */
    updateTime: number;
    /** 匹配的网址的标题 */
    title: string;
    /** 匹配到的文本(2024.3.15版本新增) */
    matchText: string;
}
/** worker的传递的数据 */
declare interface NetDiskWorkerOptions {
    /**
     * 待匹配的字符串数组
     */
    textList: string[];
    /**
     * 规则匹配的类型
     */
    matchTextRange: "all" | "innertext" | "innerhtml";
    /**
     * 匹配的规则
     */
    regular: NetDiskRegular;
    /**
     * 开始时间
     */
    startTime: Date;
    /**
     * 来源
     */
    from: "DOMChange" | "PasteText";
}
declare interface NetDiskWorkerMatchOption {
    /** 匹配的网盘规则的名 */
    netDiskName?: string;
    /** 匹配的网盘规则的下标 */
    netDiskIndex?: string;
    /** 匹配到的数据(字符串数组) */
    data: RegExpMatchArray;
}
/** worker处理完毕的的传递的数据 */
declare interface NetDiskWorkerCallBackOptions {
    /**
     * 传递的配置
     */
    options: NetDiskWorkerOptions;
    /** 消息 */
    msg: string;
    /** 匹配到的数据 */
    data: NetDiskWorkerMatchOption[],
    /** 匹配开始时间 */
    startTime: number;
    /**
     * + isMatchingEnd: true 当前循环的规则匹配结束的时间
     * + isMatchingEnd: false 所有规则匹配结束的时间
     */
    endTime: number;
}
declare interface NetDiskCheckLinkValidityOption {
    /**
     * .netdisk-url-box元素项
     */
    netDiskViewBox: HTMLDivElement;
    /**
     * 规则名
     */
    netDiskName: string;
    /**
     * 规则下标
     */
    netDiskIndex: number;
    /**
     * 分享码
     */
    shareCode: string;
    /**
     * 访问码
     */
    accessCode: string
}
declare interface NetDiskCheckLinkValidityStatus {
    /**
     * 状态码
     */
    code: number;
    /**
     * 状态码的解释
     */
    msg: string;
    /**
     * 设置元素状态
     * @param ele netdisk-status元素
     */
    setView(ele: HTMLDivElement, checkInfo: NetDiskCheckLinkValidityOption): void;
}

declare interface NetDiskAutoFillAccessCodeOption {
    /** 链接 */
    url: string;
    /** 规则名 */
    netDiskName: string;
    /** 规则下标 */
    netDiskIndex: number;
    /** 分享码 */
    shareCode: string;
    /** 访问码 */
    accessCode: string;
}

declare interface NetDiskUserCustomRuleContext {
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


declare interface NetDiskSettingMenuDetails extends NetDiskUserCustomRuleSetting {
    /**
     * 名字
     */
    type: string;
    /**
     * 规则名
     */
    key: string;
    /**
     * 是否是用户规则
     */
    isUserRule?: boolean;
    /**
     * 多文件解析
     */
    parseMoreFile?: boolean;
    /**
     * 单文件解析
     */
    parseOneFile?: boolean;
    /**
     * 自定义的解析文件的描述
     */
    parseFileDescription?: string;
    /**
     * 自定义form
     */
    ownFormList?: any[];
}

declare interface NetDiskUserCustomRuleRegexp {
    /**
     * 当设置中匹配类型为文本/全部，使用该规则
     */
    link_innerText: string;
    /**
     * 当设置中匹配类型为超文本/全部，使用该规则
     */
    link_innerHTML: string;
    /**
     * 用于提取出shareCode
     */
    shareCode: string;
    /**
     * 用于删除提取出的shareCode前面的域名、路径字符串
     * 
     * 会自动进行正则转换，正则模式ig
     */
    shareCodeNeedRemoveStr: string;
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
    acceesCodeNotMatch?: string;
    /**
     * （可选）用于对matchText进行提取需要的关键内容
     * 
     * 会自动进行正则转换，正则模式i
     * 
     * 提取到的内容会被转换成以下格式，可在uiLinkShow、blank、copyUrl中使用
     * + 类似：{#$1#}、{#$2#}...
     */
    paramMatch?: string,
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
     */
    isBlank?: boolean;
    /**
     * 通过新标签页打开时，复制访问码
     * 
     * 【功能】-【跳转时携带访问码】
     * 
     * 键: `${key}-open-blank-with-copy-accesscode`
     */
    openBlankWithCopyAccessCode?: boolean;
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
    schemeUri?: boolean;
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
}

declare interface NetDiskUserCustomRule {
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
     * + `参数1`: netDiskIndex: number
     * + `参数2`: shareCode: string
     * + `参数3`: accessCode: string
     * 
     * `this`是`NetDiskUserCustomRuleContext`对象:
     * 
     * `@returns`返回值必须是NetDiskCheckLinkValidity.status内的任意属性值
     * 其中包括
     * + this.NetDiskCheckLinkValidity.status.loading
     * + this.NetDiskCheckLinkValidity.status.success
     * + this.NetDiskCheckLinkValidity.status.error
     * + this.NetDiskCheckLinkValidity.status.failed
     * + this.NetDiskCheckLinkValidity.status.needAccessCode
     * + this.NetDiskCheckLinkValidity.status.unknown
     * @example
     * return this.NetDiskCheckLinkValidity.status.unknown;
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
     * + `参数1`: netDiskInfo: NetDiskAutoFillAccessCodeOption
     */
    AutoFillAccessCodeFunction?: string;
    /**
     * （可选）解析网盘链接函数
     * 需要强制返回this
     * 入口函数为`init`
     * + `参数1`: netDiskIndex: number
     * + `参数2`: shareCode: string
     * + `参数3`: accessCode: string
     * @example
     * let that = this;
     * this.init = async function(netDiskIndex, shareCode, accessCode){
     *      console.log(netDiskIndex, shareCode, accessCode);
     * }
     * return this;
     */
    parseFunction?: string;
}