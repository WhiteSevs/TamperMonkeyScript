import { addStyle } from "@components/env.base";
import indexCSS from "./css/index.css?raw";
import blockCSS from "./css/block.css?raw";

export const CSDNDownload = {
  init() {
    addStyle(blockCSS);
    addStyle(indexCSS);
  },
};
