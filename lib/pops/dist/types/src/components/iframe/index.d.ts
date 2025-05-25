import type { PopsEventDetails } from "../../types/event";
import type { PopsIframeDetails } from "./indexType";
export declare const PopsIframe: {
    init(details: PopsIframeDetails): Omit<PopsEventDetails & {
        iframeElement: HTMLIFrameElement;
    }, "function" | "type">;
};
