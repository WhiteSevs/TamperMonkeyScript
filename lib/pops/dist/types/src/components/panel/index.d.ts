import { EventEmiter } from "../../event/EventEmiter";
import type { EventMap } from "../../types/EventEmitter";
import type { PopsPanelConfig } from "./types";
export declare const PopsPanel: {
    init(__config__: PopsPanelConfig): Omit<import("../../types/event").PopsEventConfig<EventEmiter<EventMap>>, "function" | "type">;
};
