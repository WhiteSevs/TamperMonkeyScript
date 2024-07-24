export function AjaxHooker(): {
    hook: (fn: any) => number;
    filter: (arr: any) => void;
    protect: () => void;
    unhook: () => void;
};
