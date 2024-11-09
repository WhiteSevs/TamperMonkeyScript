import versionJSON from "./version.json?raw";

export const DebugToolVersionConfig = JSON.parse(versionJSON) as ToolVersionInfo;
