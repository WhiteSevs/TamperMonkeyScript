export function AnyTouch(): {
    (el: any, options: any): this;
    STATE_POSSIBLE: number;
    STATE_START: number;
    STATE_MOVE: number;
    STATE_END: number;
    STATE_CANCELLED: number;
    STATE_FAILED: number;
    STATE_RECOGNIZED: number;
    tap: (at: any, options: any) => any;
    pan: (at: any, options: any) => any;
    swipe: (at: any, options: any) => any;
    press: (at: any, options: any) => any;
    rotate: (at: any, options: any) => any;
    pinch: (at: any, options: any) => any;
    doubletap: (at: any) => any;
};
