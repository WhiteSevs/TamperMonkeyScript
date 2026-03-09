import type { EventMap, CustomEventMap } from "../types/EventEmitter";
import type { PopsType } from "../types/main";

class EventEmiter<T extends CustomEventMap = CustomEventMap> {
  [Symbol.toStringTag] = "EventEmiter";
  type: PopsType;
  data = new Map<
    string,
    {
      type: PopsType;
      time: number;
      callback: (...args: any[]) => IPromise<void>;
    }[]
  >();
  constructor(type: PopsType) {
    this.type = type;
    document.addEventListener;
  }
  on<P extends keyof EventMap>(
    eventName: P,
    callback: EventMap[P]
  ): {
    off: () => IPromise<void>;
    emit: (...args: Parameters<T[P]>) => IPromise<void>;
  };
  on<P extends keyof T>(
    eventName: P,
    callback: T[P]
  ): {
    off: () => IPromise<void>;
    emit: (...args: Parameters<T[P]>) => IPromise<void>;
  };
  on<P extends keyof EventMap | keyof CustomEventMap>(eventName: P, callback: (EventMap & CustomEventMap)[P]) {
    const eventList = this.data.get(eventName) ?? [];
    eventList.push({ type: this.type, time: Date.now(), callback: callback });
    this.data.set(eventName, eventList);
    return {
      off: () => {
        this.off(eventName as keyof EventMap, callback);
      },
      emit: (...args: Parameters<T[P]>) => {
        this.emit(eventName, ...args);
      },
    };
  }
  off<P extends keyof EventMap>(eventName: P, callback: EventMap[P]): IPromise<void>;
  off<P extends keyof T>(eventName: P, callback: T[P]): IPromise<void>;
  off<P extends keyof EventMap | keyof CustomEventMap>(eventName: P, callback: (EventMap & CustomEventMap)[P]) {
    const eventList = this.data.get(eventName) ?? [];
    let isOffSuccess = false;
    for (let index = eventList.length - 1; index >= 0; index--) {
      if (eventList[index].callback === callback) {
        isOffSuccess = true;
        eventList.splice(index, 1);
      }
    }
    if (eventList.length === 0) {
      // empty
      this.data.delete(eventName);
    } else {
      if (isOffSuccess) {
        // update
        this.data.set(eventName, eventList);
      }
    }
  }
  emit<P extends keyof T>(eventName: P, ...args: Parameters<T[P]>): IPromise<void>;
  emit<P extends keyof EventMap>(eventName: P, ...args: Parameters<EventMap[P]>): IPromise<void>;
  async emit<P extends keyof EventMap | keyof CustomEventMap>(eventName: P, ...args: Parameters<T[P]>) {
    const eventList = this.data.get(eventName) ?? [];
    for (const item of eventList) {
      await item.callback(...args);
    }
  }
  offAll<P extends keyof EventMap>(eventName?: P): IPromise<void>;
  offAll<P extends keyof T>(eventName?: P): IPromise<void>;
  offAll<P extends keyof EventMap | keyof CustomEventMap>(eventName?: P) {
    if (typeof eventName === "string") {
      this.data.delete(eventName);
    } else {
      this.data.clear();
    }
  }
  /**
   * 获取所有添加的事件
   */
  getAllEvents(eventName?: string) {
    if (typeof eventName === "string") {
      return this.data.get(eventName);
    } else {
      return Array.from(this.data.values());
    }
  }
}

export { EventEmiter };
