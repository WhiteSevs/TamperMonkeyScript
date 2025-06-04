import type { PopsLayerCommonConfig } from "./types/layer";
import type { PopsLayerMode } from "./types/main";

export const PopsLayer = {
	alert: [],
	confirm: [],
	prompt: [],
	loading: [],
	iframe: [],
	tooltip: [],
	drawer: [],
	folder: [],
	panel: [],
	rightClickMenu: [],
} as {
	[key in PopsLayerMode]: PopsLayerCommonConfig[];
};
