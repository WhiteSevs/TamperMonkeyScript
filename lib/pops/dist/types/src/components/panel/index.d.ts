import { EventEmiter } from "../../event/EventEmiter";
import type { PopsPanelConfig, PopsPanelEventType } from "./types";
export declare const PopsPanel: {
    init(__config__: PopsPanelConfig): Omit<import("../../types/event").PopsEventConfig<EventEmiter<PopsPanelEventType>>, "function" | "type">;
};
