import versionJSON from "./version.json?raw";

export const ToolVersionInfo = JSON.parse(versionJSON) as ToolVersionInfo;
