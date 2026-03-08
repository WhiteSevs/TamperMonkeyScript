import { EventEmiter } from "../../event/EventEmiter";
import type { EventMap } from "../../types/EventEmitter";
import type { PopsConfirmConfig } from "./types";
export declare const PopsConfirm: {
    init(__config__: PopsConfirmConfig): Omit<import("../../types/event").PopsEventConfig<EventEmiter<EventMap>>, "function" | "type">;
};
