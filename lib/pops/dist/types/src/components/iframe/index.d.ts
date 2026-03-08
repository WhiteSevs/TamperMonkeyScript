import { EventEmiter } from "../../event/EventEmiter";
import type { PopsIframeClickEventConfig, PopsIframeConfig } from "./types";
export declare const PopsIframe: {
    init(__config__: PopsIframeConfig): Omit<PopsIframeClickEventConfig<EventEmiter<{
        "pops:iframe-min": (eventConfig: PopsIframeClickEventConfig, event: MouseEvent | PointerEvent) => void;
        "pops:iframe-mise": (eventConfig: PopsIframeClickEventConfig, event: MouseEvent | PointerEvent) => void;
        "pops:iframe-max": (eventConfig: PopsIframeClickEventConfig, event: MouseEvent | PointerEvent) => void;
    }>>, "function" | "type">;
};
