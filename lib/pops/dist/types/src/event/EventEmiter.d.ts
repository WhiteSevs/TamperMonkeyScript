import type { EventMap, CustomEventMap } from "../types/EventEmitter";
import type { PopsType } from "../types/main";
declare class EventEmiter<T extends CustomEventMap = CustomEventMap> {
    #private;
    constructor(type: PopsType);
    on<P extends keyof EventMap>(eventName: P, callback: EventMap[P]): {
        off: () => IPromise<void>;
        emit: (...args: Parameters<T[P]>) => IPromise<void>;
    };
    on<P extends keyof T>(eventName: P, callback: T[P]): {
        off: () => IPromise<void>;
        emit: (...args: Parameters<T[P]>) => IPromise<void>;
    };
    off<P extends keyof EventMap>(eventName: P, callback: EventMap[P]): IPromise<void>;
    off<P extends keyof T>(eventName: P, callback: T[P]): IPromise<void>;
    emit<P extends keyof T>(eventName: P, ...args: Parameters<T[P]>): IPromise<void>;
    emit<P extends keyof EventMap>(eventName: P, ...args: Parameters<EventMap[P]>): IPromise<void>;
    offAll<P extends keyof EventMap>(eventName?: P): IPromise<void>;
    offAll<P extends keyof T>(eventName?: P): IPromise<void>;
    /**
     * 获取所有添加的事件
     */
    getAllEvents(eventName?: string): {
        type: PopsType;
        time: number;
        callback: (...args: any[]) => IPromise<void>;
    }[] | {
        type: PopsType;
        time: number;
        callback: (...args: any[]) => IPromise<void>;
    }[][] | undefined;
}
export { EventEmiter };
