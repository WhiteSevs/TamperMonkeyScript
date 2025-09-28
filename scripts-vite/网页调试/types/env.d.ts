declare type ToolVersionInfo = {
  eruda: {
    version: string;
    plugin: {
      "eruda-monitor": string;
      "eruda-features": string;
      "eruda-timing": string;
      "eruda-code": string;
      "eruda-benchmark": string;
      "eruda-orientation": string;
      "eruda-vue": string;
      "eruda-touches": string;
      "eruda-outline-plugin": string;
      "eruda-pixel": string;
    };
  };
  vconsole: {
    version: string;
    plugin: {
      "vue-vconsole-devtools": string;
    };
  };
  "@huolala-tech/page-spy-browser": {
    version: string;
  };
  [key: string]: any;
};

declare const initEruda: Function;
declare const initPageSpy: any;
declare const initVConsole: any;
declare const erudaMonitor: any;
declare const erudaFeatures: any;
declare const erudaTiming: any;
declare const erudaCode: any;
declare const erudaBenchmark: any;
declare const erudaGeolocation: any;
declare const erudaOrientation: any;
declare const erudaTouches: any;
declare const erudaOutlinePlugin: any;
declare const erudaPixel: any;
declare const erudaVue: any;
declare interface Window {
  Eruda: any;
  VConsole: any;
  vConsole: any;
  vueVconsoleDevtools: any;
  $pageSpy: any;
}
