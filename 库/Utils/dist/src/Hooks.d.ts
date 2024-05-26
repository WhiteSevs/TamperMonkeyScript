declare class Hooks {
    /**
     * 在Function原型上添加自定义方法.hook和.unhook
     */
    initEnv(): void;
    /**
     * 删除在Function原型上添加的自定义方法.hook和.unhook
     */
    cleanEnv(): boolean;
}
export { Hooks };
