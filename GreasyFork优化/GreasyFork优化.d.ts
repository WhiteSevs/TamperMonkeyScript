declare interface GreasyForkScriptInfo {
    /**
     * 脚本id
     */
    id: number;
    /**
     * 创建时间，格式为new Date().toISOString()
     */
    created_at: string;
    /**
     * 今日安装的数量
     */
    daily_installs: number;
    /**
     * 总安装的数量
     */
    total_installs: number;
    /**
     * 更新时间，格式为new Date().toISOString()
     */
    code_updated_at: string;
    /**
     * 反馈的URL
     * @ supportURL
     */
    support_url: string | null;
    /**
     * 脚本评分
     */
    fan_score: string;
    /**
     * 脚本主页
     * @ namespace
     */
    namespace: string | null;
    /**
     * 
     */
    contribution_url: string | null;
    contribution_amount: string | null;
    /**
     * 好评的数量
     */
    good_ratings: number;
    /**
     * 好评的数量
     */
    ok_ratings: number;
    /**
     * 差评的数量
     */
    bad_ratings: number;
    /**
     * 脚本的名字
     * @ name
     */
    name: string;
    /**
     * 脚本的描述
     * @ description
     */
    description: string | null;
    /**
     * 脚本主页Url
     */
    url: string;
    /**
     * 脚本更新Url
     */
    code_url: string;
    /**
     * @ license
     */
    license: string | null;
    /**
     * 当前版本号
     * 
     * @ version
     */
    version: string;
    /**
     * 脚本语言
     */
    locale: string;
    /**
     * 脚本是否被删除
     */
    deleted: boolean
}