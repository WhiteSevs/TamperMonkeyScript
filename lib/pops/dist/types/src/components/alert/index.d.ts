import type { PopsAlertConfig } from "./types";
export declare const PopsAlert: {
    init(__config__: PopsAlertConfig): Omit<import("../../types/event").PopsEventConfig, "function" | "type">;
};
