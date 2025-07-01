import type { PopsLayerCommonConfig } from "./types/layer";
import type { PopsLayerMode } from "./types/main";

export const PopsLayerData: {
	[key in PopsLayerMode]: PopsLayerCommonConfig[];
} = {
	alert: [],
	confirm: [],
	drawer: [],
	folder: [],
	iframe: [],
	loading: [],
	panel: [],
	prompt: [],
	rightClickMenu: [],
	// 没有 searchSuggestion
	tooltip: [],
};
