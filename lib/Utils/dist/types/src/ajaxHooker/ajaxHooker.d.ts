export function ajaxHooker(): {
    hook: (fn: any) => {
        remove: () => boolean;
    };
    filter: (arr: any) => {
        remove: () => void;
    };
    protect: () => void;
    unhook: () => void;
    removeHook: (fn: (request: import("./../types/ajaxHooker.d.ts").UtilsAjaxHookRequestOptions) => void | undefined | null | Promise<void | undefined | null>, onlyRemove: boolean) => boolean;
    removeFilter: () => void;
};
