import type { PopsEventConfig } from "../../types/event";
import type { PopsIframeDetails } from "./types";
export declare const PopsIframe: {
    init(details: PopsIframeDetails): Omit<PopsEventConfig & {
        iframeElement: HTMLIFrameElement;
    }, "function" | "type">;
};
