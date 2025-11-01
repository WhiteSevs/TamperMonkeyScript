/**
 * @type {import("./../../dist/index").default}
 */
const Qmsg = window.Qmsg;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $types = $(".types");
const btns = $types.querySelectorAll(".btn");
for (let i = 0, btn; (btn = btns[i]); i++) {
  btn.addEventListener("click", function (e) {
    const type = this.getAttribute("data-type");
    const txt = this.innerText;
    Qmsg[type](txt);
  });
}

const $pos = $$(".set-position");
for (let i = 0, botn; (botn = $pos[i]); i++) {
  botn.addEventListener("click", function (e) {
    const position = this.getAttribute("data-position");
    const txt = this.innerText;
    Qmsg.config({
      position: position,
    });
    Qmsg.info('我来自 <i style="color:red">' + txt + "</i> " + new Date().toLocaleString(), {
      isHTML: true,
    });
  });
}

$(".auto-close").onclick = function () {
  Qmsg.config({
    autoClose: true,
  });
  Qmsg.warning('设置 <i style="color:green">autoClose</i> = <i style="color:red">true</i>', {
    isHTML: true,
  });
};
$(".show-reverse").onclick = function () {
  Qmsg.config({
    showReverse: true,
  });
  Qmsg.warning('设置 <i style="color:green">showReverse</i> = <i style="color:red">true</i>', {
    isHTML: true,
  });
};
$(".close-show-reverse").onclick = function () {
  Qmsg.config({
    showReverse: false,
  });
  Qmsg.warning('设置 <i style="color:green">showReverse</i> = <i style="color:red">false</i>', {
    isHTML: true,
  });
};
$(".manually-close").onclick = function () {
  Qmsg.config({
    autoClose: false,
    showClose: true,
  });
  Qmsg.warning(
    '设置 <i style="color:green">autoClose</i> = <i style="color:red">false</i>，<i style="color:green">showClose</i> = <i style="color:green">true</i>',
    {
      isHTML: true,
    }
  );
};

$(".show-close").onclick = function () {
  Qmsg.config({
    showClose: true,
  });
  Qmsg.warning('设置 <i style="color:green">showClose</i> = <i style="color:red">true</i>', {
    isHTML: true,
  });
};
$(".hide-close").onclick = function () {
  Qmsg.config({
    showClose: false,
  });
  Qmsg.warning('设置 <i style="color:green">showClose</i> = <i style="color:gray">false</i>', {
    isHTML: true,
  });
};
$(".close-all").onclick = function () {
  Qmsg.closeAll();
};
var loading;
$(".create-loading").onclick = function () {
  loading = Qmsg.loading("小鸭子,游呀游~", {
    onClose: function () {
      console.log("游上了岸~");
    },
  });
};
$(".change-loading-text").onclick = function () {
  loading?.setText(`调用函数.setText()进行修改`);
};
$(".change-loading-html").onclick = function () {
  loading?.setHTML(`调用函数<i style="color:green">.setHTML()</i>进行修改`);
};
$(".close-loading").onclick = function () {
  loading && loading.close();
};

$(".show-long-content-no-limit").onclick = function () {
  /**
   * @type {import("./../../dist/src/QmsgConfig").QmsgConfig}
   */
  const config = {
    isHTML: true,
    isLimitWidth: false,
  };
  let text = "设置：";
  const configTextList = Object.keys(config).map((key) => {
    const value = config[key];
    return `<i style="color:green">${key}</i> = <i style="color:red">${value}</i>`;
  });
  text += [...configTextList, ...configTextList, ...configTextList].join("，");
  Qmsg.warning(text, config);
};
$(".show-long-content-wrap").onclick = function () {
  /**
   * @type {import("./../../dist/src/QmsgConfig").QmsgConfig}
   */
  const config = {
    isHTML: true,
    isLimitWidth: true,
    limitWidthNum: "300",
    limitWidthWrap: "wrap",
  };
  let text = "设置：";
  text += Object.keys(config)
    .map((key) => {
      const value = config[key];
      return `<i style="color:green">${key}</i> = <i style="color:red">${value}</i>`;
    })
    .join("，");
  Qmsg.warning(text, config);
};
$(".show-long-content-ellipsis").onclick = function () {
  /**
   * @type {import("./../../dist/src/QmsgConfig").QmsgConfig}
   */
  const config = {
    isHTML: true,
    isLimitWidth: true,
    limitWidthNum: "300",
    limitWidthWrap: "ellipsis",
  };
  let text = "设置：";
  text += Object.keys(config)
    .map((key) => {
      const value = config[key];
      return `<i style="color:green">${key}</i> = <i style="color:red">${value}</i>`;
    })
    .join("，");
  Qmsg.warning(text, config);
};
$(".show-long-content-no-wrap").onclick = function () {
  /**
   * @type {import("./../../dist/src/QmsgConfig").QmsgConfig}
   */
  const config = {
    isHTML: true,
    isLimitWidth: true,
    limitWidthNum: "300",
    limitWidthWrap: "no-wrap",
  };
  let text = "设置：";
  text += Object.keys(config)
    .map((key) => {
      const value = config[key];
      return `<i style="color:green">${key}</i> = <i style="color:red">${value}</i>`;
    })
    .join("，");
  Qmsg.warning(text, config);
};
$(".show-icon").onclick = function () {
  Qmsg.config({
    showIcon: true,
  });
  Qmsg.warning('设置 <i style="color:green">showIcon</i> = <i style="color:red">true</i>', {
    isHTML: true,
  });
};
$(".close-show-icon").onclick = function () {
  Qmsg.config({
    showIcon: false,
  });
  Qmsg.warning('设置 <i style="color:green">showIcon</i> = <i style="color:red">false</i>', {
    isHTML: true,
  });
};
$(".set-show-maxnum-10").onclick = function () {
  Qmsg.config({
    maxNums: 2,
  });
  for (let i = 0; i < 10; i++) {
    Qmsg.info(
      `第 ${i + 1} 个，设置 <i style="color:green">autoClose</i> = <i style="color:red">true</i> 的超出限制直接关闭`,
      {
        autoClose: true,
        isHTML: true,
      }
    );
  }
};
$(".set-show-maxnum-5").onclick = function () {
  Qmsg.config({
    maxNums: 5,
  });
  for (let i = 0; i < 10; i++) {
    Qmsg.info(
      `第 ${i + 1} 个，设置 <i style="color:green">autoClose</i> = <i style="color:red">true</i> 的超出限制直接关闭`,
      {
        autoClose: true,
        isHTML: true,
      }
    );
  }
};
$(".info-max-99").onclick = function () {
  for (let i = 0; i < 150; i++) {
    Qmsg.info("99+消息");
  }
};
