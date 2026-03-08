import { EventEmiter } from "../../event/EventEmiter";
import type { EventMap } from "../../types/EventEmitter";
import type { PopsLoadingConfig } from "./types";
export declare const PopsLoading: {
    init(__config__: PopsLoadingConfig): Omit<Omit<import("../../types/event").PopsEventConfig<EventEmiter<EventMap>>, "$shadowContainer" | "$shadowRoot">, "function" | "type">;
};
