/// <reference types="vite/client" />
//// <reference types="vite-plugin-monkey/client" />
//// <reference types="vite-plugin-monkey/global" />

declare module "ViteGM" {
  export * from "vite-plugin-monkey/dist/client";
  // export * from "chromext-api";
  // export * from "scriptcat-api";
}

declare module "ViteGMChromeXt" {
  export * from "chromext-api";
}

declare module "ViteGMScriptCat" {
  export * from "scriptcat-api";
}
