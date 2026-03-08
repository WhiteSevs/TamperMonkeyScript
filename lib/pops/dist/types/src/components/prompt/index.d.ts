import { EventEmiter } from "../../event/EventEmiter";
import type { EventMap } from "../../types/EventEmitter";
import type { PopsPromptConfig } from "./types/index";
export declare const PopsPrompt: {
    init(__config__: PopsPromptConfig): Omit<import("../../types/event").PopsEventConfig<EventEmiter<EventMap>>, "function" | "type">;
};
