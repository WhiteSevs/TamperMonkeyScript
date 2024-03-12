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
    startTime: Date,
}

/** worker处理完毕的的传递的数据 */
declare interface NetDiskWorkerCallBackOptions {
    /** 消息 */
    msg: string;
    /** 匹配到的数据 */
    data: {
        /** 匹配的网盘规则的名 */
        netDiskName?: string;
        /** 匹配的网盘规则的下标 */
        netDiskIndex?: string;
        /** 匹配到的数据 */
        data: RegExpMatchArray;
    }[],
    /** 匹配开始时间 */
    startTime: number,
    /**
     * + isMatchingEnd: true 当前循环的规则匹配结束的时间
     * + isMatchingEnd: false 所有规则匹配结束的时间
     */
    endTime: number,
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
    /**
     * （可选）用于验证链接有效性
     */
    checkLinkValidity?: boolean;
}
declare interface NetDiskUserCustomRuleSetting {
    name?: string;
    isBlank?: boolean;
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
    regexp: NetDiskUserCustomRuleRegexp;
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
     * `this`包含以下Api:
     * + NetDiskRequire
     * + CryptoJS
     * + httpx
     * + utils
     * + DOMUtils
     * + window
     * + unsafeWindow
     * + NetDiskCheckLinkValidity
     * + log
     * + Qmsg
     * + pops
     * 
     * `@returns`返回值必须是NetDiskCheckLinkValidity.status内的任意属性值
     * 其中包括
     * NetDiskCheckLinkValidity.status.loading
     * NetDiskCheckLinkValidity.status.success
     * NetDiskCheckLinkValidity.status.error
     * NetDiskCheckLinkValidity.status.failed
     * NetDiskCheckLinkValidity.status.needAccessCode
     * NetDiskCheckLinkValidity.status.unknown
     */
    checkLinkValidityFunction?: string;
}