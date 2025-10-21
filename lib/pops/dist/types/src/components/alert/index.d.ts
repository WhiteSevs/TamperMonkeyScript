import type { PopsAlertDetails } from "./types";
export declare const PopsAlert: {
    init(details: PopsAlertDetails): Omit<import("../../types/event").PopsEventConfig, "function" | "type">;
};
