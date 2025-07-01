import type { PopsAlertDetails } from "./types";
export declare const PopsAlert: {
    init(details: PopsAlertDetails): Omit<import("../../types/event").PopsEventDetails, "function" | "type">;
};
