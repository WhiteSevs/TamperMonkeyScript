const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/**
 * @type {import("./../../index").default}
 */
const pops = window.pops;
let $tooltip = $(".pops-inst[data-type='tooltip']");
let position = ["left", "right", "bottom", "top"];
position.forEach((item) => {
  pops.tooltip({
    $target: $tooltip,
    position: item,
  });
});
pops.GlobalConfig.setGlobalConfig({
  mask: {
    enable: true,
  },
  drag: true,
});
let $input = $(".pops-inst[data-type='suggestion'] input");
let suggestion = pops.searchSuggestion({
  $target: $input,
  $inputTarget: $input,
});
suggestion.init();
suggestion.setAllEvent();

const $tooltipAlways = $(".pops-inst[data-type='tooltip-always']");
$tooltipAlways.addEventListener(
  "click",
  function () {
    pops.tooltip({ $target: $tooltipAlways, position: "bottom", alwaysShow: true, isFixed: true });
  },
  { once: true }
);

const $tooltipFollow = $(".pops-inst[data-type='tooltip-follow']");
pops.config.DOMUtils.onReady(() => {
  pops.tooltip({
    $target: $tooltipFollow,
    content: () =>
      "不建议使用本功能，若文件过大下载完成后有可能不会弹出窗口，此时请换用“RPC 下载 + Mortix”的组合<br/>基于浏览器的 Blob 文件流下载文件，下载完成可自动命名，适用于较新的浏览器，可以在此窗口中显示下载剩余时间和下载速度，此方式下载不会被 IDM 捕获下载链接",
    position: "follow",
    alwaysShow: false,
    isFixed: false,
    showArrow: false,
    onShowEventName: "mouseenter touchstart mousemove touchmove",
    otherDistance: 18,
    className: "github-tooltip",
  });
});

const $panel = $(".pops-inst[data-type='panel']");
$panel.addEventListener("click", function () {
  pops.panel({
    bottomContentConfig: [
      {
        text: "Github",
        position: "left",
        className: "user-home",
        attributes: {
          "data-url": "https://github.com/whitesevs",
        },
        props: {
          "data-test": 1,
        },
        disableHoverCSS: false,
        clickCallback() {
          const userHomeUrl = this.attributes["data-url"];
          console.log("打开个人主页：" + userHomeUrl);
          window.open(userHomeUrl, "_blank");
        },
        afterRender(config) {
          console.log(config);
        },
      },
      {
        text: "0.0.1",
        position: "right",
        className: "script-version",
        attributes: {},
        props: {},
        disableHoverCSS: true,
        clickCallback() {
          console.log("当前版本：" + this.text);
        },
        afterRender(config) {
          console.log(config);
        },
      },
    ],
  });
});
