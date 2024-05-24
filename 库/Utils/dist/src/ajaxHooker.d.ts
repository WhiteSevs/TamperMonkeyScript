export namespace ajaxHooker {
    function hook(fn: any): number;
    function filter(arr: any): void;
    function protect(): void;
    function unhook(): void;
}
