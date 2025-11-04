import type { PopsPanelConfig, PopsPanelEventType } from "./types";
import type { PopsType } from "../../types/main";
export declare const PopsPanel: {
    init(__config__: PopsPanelConfig): {
        addEventListener: <K extends keyof PopsPanelEventType>(event: K, listener: (evt: CustomEvent<PopsPanelEventType[K]>) => void, options?: boolean | EventListenerOptions) => void;
        removeEventListener: <K extends keyof PopsPanelEventType>(event: K, listener: (evt: CustomEvent<PopsPanelEventType[K]>) => void, options?: boolean | EventListenerOptions) => void;
        close: () => Promise<void>;
        hide: () => Promise<void>;
        show: () => Promise<void>;
        guid: string;
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot | HTMLElement;
        $el: HTMLDivElement;
        $anim: HTMLDivElement;
        $pops: HTMLDivElement;
        $mask?: HTMLDivElement | undefined;
        mode: PopsType;
    };
};
