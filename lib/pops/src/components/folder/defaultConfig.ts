import type { PopsFolderConfig } from "./types";

export const PopsFolderDefaultConfig = (): DeepRequired<PopsFolderConfig> => {
  return {
    title: {
      text: "pops.Folder",
      position: "center",
      html: false,
      style: "",
    },
    sort: {
      name: "latestTime",
      isDesc: false,
      callback() {},
    },
    folder: [
      {
        fileName: "测试文件夹",
        fileSize: 0,
        fileType: "",
        createTime: 0,
        latestTime: 0,
        isFolder: true,
        index: 0,
        clickEvent() {
          return [
            {
              fileName: "测试文件夹2222",
              fileSize: 0,
              fileType: "",
              createTime: 0,
              latestTime: 0,
              isFolder: true,
              index: 0,
              clickEvent() {
                return [
                  {
                    fileName: "内部-测试文件.zip",
                    fileSize: 1025000,
                    fileType: "zip",
                    createTime: 1702038410440,
                    latestTime: 1702039602126,
                    isFolder: false,
                    index: 1,
                    clickEvent(event, config) {
                      console.log("下载文件：", config);
                      return {
                        autoDownload: true,
                        url: "https://update.greasyfork.org/scripts/456485/pops.js",
                        mode: "aBlank",
                      };
                    },
                  },
                ];
              },
            },
          ];
        },
      },
      {
        fileName: "测试文件.apk",
        fileSize: 30125682,
        fileType: "apk",
        createTime: 1702036410440,
        latestTime: 1702039410440,
        isFolder: false,
        index: 1,
        clickEvent() {
          console.log("下载文件：", this.fileName);
          return {
            autoDownload: true,
            url: "https://update.greasyfork.org/scripts/456485/pops.js",
            mode: "openBlank",
          };
        },
      },
    ],
    btn: {
      merge: false,
      mergeReverse: false,
      reverse: false,
      position: "flex-end",
      ok: {
        enable: true,
        size: void 0 as any,
        icon: void 0 as any,
        rightIcon: false,
        iconIsLoading: false,
        text: "确定",
        type: "primary",
        callback(evtConfig) {
          evtConfig.close();
        },
      },
      cancel: {
        enable: true,
        size: void 0 as any,
        icon: void 0 as any,
        rightIcon: false,
        iconIsLoading: false,
        text: "关闭",
        type: "default",
        callback(evtConfig) {
          evtConfig.close();
        },
      },
      other: {
        enable: false,
        size: void 0 as any,
        icon: void 0 as any,
        rightIcon: false,
        iconIsLoading: false,
        text: "其它按钮",
        type: "default",
        callback(evtConfig) {
          evtConfig.close();
        },
      },
      close: {
        enable: true,
        callback(evtConfig) {
          evtConfig.close();
        },
      },
    },
    useShadowRoot: true,
    class: "",
    only: false,
    width: window.innerWidth < 550 ? "88vw" : "500px",
    height: window.innerHeight < 450 ? "70vh" : "400px",
    position: "center",
    animation: "pops-anim-fadein-zoom",
    zIndex: 10000,
    mask: {
      enable: false,
      clickEvent: {
        toClose: false,
        toHide: false,
      },
      clickCallBack: null,
    },
    drag: false,
    dragLimit: true,
    dragExtraDistance: 3,
    dragMoveCallBack() {},
    dragEndCallBack() {},
    forbiddenScroll: false,
    style: null,
    lightStyle: null,
    darkStyle: null,
    beforeAppendToPageCallBack() {},
  };
};
