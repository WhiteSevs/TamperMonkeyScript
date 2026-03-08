import { EventEmiter } from "../../event/EventEmiter";
import type { EventMap } from "../../types/EventEmitter";
import type { PopsDrawerConfig } from "./types";
export declare const PopsDrawer: {
    init(__config__: PopsDrawerConfig): Omit<import("../../types/event").PopsEventConfig<EventEmiter<EventMap>>, "function" | "type">;
};
