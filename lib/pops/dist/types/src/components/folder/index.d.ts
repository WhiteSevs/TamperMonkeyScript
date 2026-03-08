import { EventEmiter } from "../../event/EventEmiter";
import type { EventMap } from "../../types/EventEmitter";
import type { PopsFolderConfig } from "./types";
export declare const PopsFolder: {
    init(__config__: PopsFolderConfig): Omit<import("../../types/event").PopsEventConfig<EventEmiter<EventMap>>, "function" | "type">;
};
