import type { PopsPromptDetails } from "./indexType";
export declare const PopsPrompt: {
    init(details: PopsPromptDetails): Omit<import("../../types/event").PopsEventDetails, "function" | "type">;
};
