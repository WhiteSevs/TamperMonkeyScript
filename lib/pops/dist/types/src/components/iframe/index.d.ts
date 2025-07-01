import type { PopsEventDetails } from "../../types/event";
import type { PopsIframeDetails } from "./types";
export declare const PopsIframe: {
    init(details: PopsIframeDetails): Omit<PopsEventDetails & {
        iframeElement: HTMLIFrameElement;
    }, "function" | "type">;
};
