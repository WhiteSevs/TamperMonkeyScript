export function ajaxHooker(): {
    hook: (fn: any) => number;
    filter: (arr: any) => void;
    protect: () => void;
    unhook: () => void;
};
