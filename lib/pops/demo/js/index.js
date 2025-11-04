const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/**
 * @type {import("./../../index").default}
 */
const Pops = window.pops;
let $tooltip = $(".pops-inst[data-type='tooltip']");
let position = ["left", "right", "bottom", "top"];
position.forEach((item) => {
  Pops.tooltip({
    $target: $tooltip,
    position: item,
  });
});
Pops.GlobalConfig.setGlobalConfig({
  mask: {
    enable: true,
  },
  drag: true,
});
let $input = $(".pops-inst[data-type='suggestion'] input");
let suggestion = Pops.searchSuggestion({
  $target: $input,
  $inputTarget: $input,
});
suggestion.init();
suggestion.setAllEvent();

const $panel = $(".pops-inst[data-type='panel']");
$panel.addEventListener("click", function () {
  Pops.panel({
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
