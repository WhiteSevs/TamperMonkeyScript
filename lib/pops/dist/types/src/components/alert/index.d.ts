import type { PopsAlertDetails } from "./indexType";
export declare const PopsAlert: {
    init(details: PopsAlertDetails): Omit<import("../../types/event").PopsEventDetails, "function" | "type">;
};
