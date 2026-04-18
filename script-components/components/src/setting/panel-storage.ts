import { unsafeWindow } from "ViteGM";
import { StorageUtils } from "./../utils/StorageUtils";
import { KEY } from "./panel-config";

const PopsPanelStorageApi = new StorageUtils(KEY);

if (import.meta.env.DEV) {
  Reflect.set(unsafeWindow, "PopsPanelStorageApi", PopsPanelStorageApi);
}

export { PopsPanelStorageApi };
