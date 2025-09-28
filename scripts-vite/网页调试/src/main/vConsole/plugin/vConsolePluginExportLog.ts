import { utils, console } from "@/env";

export const vConsolePluginExportLog = (vConsole: any, VConsole: any) => {
  class VConsoleOutputLogsPlugin {
    vConsole;
    VConsole;
    $;
    dom: any;
    logItemSelector;

    constructor(vConsole: any, VConsole: any, logItemSelector?: any) {
      this.vConsole = vConsole;
      this.VConsole = VConsole;
      this.$ = vConsole.$;
      this.dom = null;
      this.logItemSelector = logItemSelector || ".vc-content #__vc_plug_default .vc-log-row";
      return this.init();
    }

    init() {
      const vConsoleExportLogs = new this.VConsole.VConsolePlugin("exportLog", "exportLog");

      vConsoleExportLogs.on("ready", () => {
        console.log("[vConsole-exportlog-plugin] -- load");
      });
      vConsoleExportLogs.on("renderTab", (callback: any) => {
        const html = /*html*/ `<div class="vconsole-exportlog"></div>`;
        callback(html);
      });
      vConsoleExportLogs.on("addTool", (callback: any) => {
        const buttons = [
          {
            name: "exportLogs",
            onClick: this.export,
          },
          {
            name: "copyLogs",
            onClick: this.copyText,
          },
        ];
        callback(buttons);
      });
      this.vConsole.addPlugin(vConsoleExportLogs);
      return vConsoleExportLogs;
    }
    funDownload = (content: string, filename: string) => {
      var eleLink = document.createElement("a");
      eleLink.download = filename;
      eleLink.style.display = "none";
      var blob = new Blob([content]);
      eleLink.href = URL.createObjectURL(blob);
      document.body.appendChild(eleLink);
      eleLink.click();
      document.body.removeChild(eleLink);
    };
    getAllLogContent = () => {
      let logRowsElement = document.querySelectorAll(this.logItemSelector);
      let logText = "";
      for (let index = 0; index < logRowsElement.length; index++) {
        const ele = logRowsElement[index];
        logText += `${ele.textContent}\n`;
      }
      return logText;
    };
    export = () => {
      let logText = this.getAllLogContent();
      this.funDownload(logText, `${new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}.log`);
    };
    copyText = () => {
      let logText = this.getAllLogContent();
      utils.copy(logText);
    };
  }
  return new VConsoleOutputLogsPlugin(vConsole, VConsole);
};
