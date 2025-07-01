import type { PopsPromptDetails } from "./types/index";
export declare const PopsPrompt: {
    init(details: PopsPromptDetails): Omit<import("../../types/event").PopsEventDetails, "function" | "type">;
};
