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
     * (可选)正则：用于判断提取到的accessCode是否是错误的accessCode
     */
    acceesCodeNotMatch?: RegExp;
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
declare interface NetDiskCheckLinkValidityStatus {
    /**
     * 状态码
     */
    code: number;
    /**
     * 状态码的解释
     */
    msg: string;
}