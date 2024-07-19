// ==UserScript==
// @name         图片右键菜单
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.18
// @author       WhiteSevs
// @description  在浏览器预览图片页面添加全局右键菜单，右键直接复制该图片的Uri编码，支持自动判断图片类型，包括：jpg、jpeg、png、gif、webp、ico，支持手动判断图片类型，包括：jpg、jpeg、png、gif。
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACACAYAAACMY2IbAAAAAXNSR0IArs4c6QAADrpJREFUeF7tnXlwFFUex789SWaSEHIfM5OEISThnIQjBgKR+xIQSQIBJAOIqICWxR5a7rqusuJilVq7UuJRblm7C3F3USGslq6itbrGVUTwCAhBQCAHSA6ukEAO0uvrEBZJz8xLd8909/R7fzB/pN/vvd/39+G9ft2vf4+Dl7LcWZDeCW46z2EGgAwAdgBx3uqxvxtSgUYAJwFU8jz/Jn/FVP63g9tPeFKCc/fHpdnFaXxnx1pwWGtIKZnTyijAYyNnCt64peL1Y2IGRQFcmlVYzAObACQq0wtmxeAK1PEc/+SrFTuevVGHHgC6sgpLfpxqSw0uGHPfFwrw3LbS/dsXXG/6JwC6nAXrwHGP+aJtZpMp0KUAt6l03/b7u9W4BuBSZ+FqnsOLTCamgM8V4LC8tKJss4Aj+UdYcPAdu2ju+Syx4Qi39fV5H1kD+lPgUn0zLtddpOl4HccF55GFiQCgy1n4rLfV7sCVuYjPsSPMyuCjUdio17Sdu4xzB+tw8IVd6Ghucy8Dj42l+8t+xi0ZUuQwBfPHPQk29vl5bNQzKlES/b7S2oG9D+9E07Ezbi0E8XwGV+IscHEct8XdVTdtmImowQkSu8GqGV2BT9fswKXT4tMyx2MN58oqfA1AsZhQ6SUj0H++0+gaMv9lKECm472/2enOQhkBsAJAltgV+S8VIDQxQkbzrCpTANi19i00V58Xk2IfAbBB7N1uaHw48l8uYvoxBWQrsO+ZctR9KvpKuJEAyIu1EDMsCaPWT5fdODPAFPh+awWObSUTbc/CAGR8+FwBBqDPJWYNeFKAAcj4UFUBBqCq8rPGGYCMAVUVYACqKj9rnAHIGFBVAc0DeOabUzj77Wm0X2hFe1Or8BsSFQpzlAUhkaFIGudAn9QoVUVkjUtXQJMAXjxxDrXvH0bD7hpcbmj26h3ZEBE73IbUOYMQEmHxej27QDsKaArA1sYWVL9zCNVvV6Kz7UqvVSKbYVNmDxZAZEUfCmgGwPOH6nFg02doqb0gW7mYLCuGrR0HskObFW0roAkA63ZVYd9THyuqlMkchJz1MxCZyb6TV1RYhY2pDmDVmwdx+C97FXbr/+byNs5lixSfqSvfsKoAnv7kBPb/oVy+Fx4smEKCMPqZ2QxCn6os3bhqAJIFx95Hdrrdkt3tUqrFjH4WC+zmEDhCLehvsaC+vR317R3C796Lzfj+cqtHBfqmx2L007Olq8Rq+kwB1QA8suUrnCj71qNjt8bGYGp0JEI4t2lqhPpb6xtRfqHJo63Bq8cgeUamz4RkhqUpoAqA5DnfFw/9y+OjlkdSk2E1h1B71djegceqatxez0ZBain9eqEqAJJFB1l8uCv3260YFBbaayEqWy5h06nTbus5fzkeSfmOXttlFXyngCoA7nn4PZyvrBf1anTfCCxLjJfs8ea6BuxuEv/UL2XWIAy6O1eybVZReQX8DmD7xTZ8vIx87dmzJJvN+HmyFaEmk2RPT7S24umaU6L1IxwxGPPHOZJts4rKK+B3ABv21uKb338o6smEqL5YGC//wfGT1SdR2yae+mHS3xcjyBKsvJLMoiQF/A7giR0HcGTzl6KdLUmIx9hI+d8ae5qGc5+ahcgM+ZBLUptV6qGA3wE88NxnOPXhUdFQPJRiB3nuJ7f85/wFvN4gnndk6P3jYJs8QG4TqtYnC7j6z6txqe4i7NMydL0lze8Afv3Eh2j8slY0gJvS+ysS2IrmFrz8Q52orYxlo+AoGKpIO2oYEfuQm+yHzHpggi7f9vgdwMN/3ouqt8QfwTyYYoPDIn8/347Gs/jgnGi6B2T/ahISRqeowY7sNj1kERDg0yOEfgewdudhVL70uWgwFiXEYXyk/ByD5FkgeSYoVsY+dxvCkyNlw+BvA57g6+6LHiH0O4Bn95/Gl4++Lxq/vL4RcMl4Btht9NfHq9F0RXxD69TtLn+zI7s9Gvj0CqHfAeSvdOKj2/+Bzo7OHoGxmDjcZ7NiQKj0adjTAiR6aCJyniBn6uin9AY+PULodwCJSOQ5IHkeKFYIfL9Itkki5FJnJx48VuW2bv8FTqQvGSHJthqVpMCnNwhVAdBTo0TAorhYTInu/X3an36owzfNLW5ZGfHbKYgbSU4T036RA5+eIFQFwPaLrdjz0LtoOeV+C1VxfCwmRtFB2MHzeO7kaRy9fNktWWQTAtmMoIdCA9/o3Djk3hSL51887NElrS9MVAGQKFb99iF898oXHsUbGh6GWTHRSPNwT0j2Ae5oPIPWTtFUhtfs52yYiWgd5LOmgW/M6Djcu6prb+PuPY26hlA1AIl4X6//Nxq/Igcoei42cwjsZjNSLGZhR3RVaxuqW1uF37r2dm/VkbYoGwMWZXu9Tu0LaODLGx2HNVfh6+6vniFUFUAi4H9XleFyvfePz6XC4SgahgzXSKnV/VaPCr4x8VhzDzkVt2fRK4SqA0ikLF/xBtrOu79/k0pBbLYVI9dNk1rdb/Vo4BubF4/Vd4vDp+eRUBMAEgG/e2WPkBFBqZI8MxODV41RypzP7NDAN25sPFbd5Rk+vUKoGQCJgKQzNW8fAlklSy0Rjmj0mzcUtkna3/FCA1/+2HjcQwmfHiHUFIBEQPJopuadSmGV3JtiiQtH6uxBSJ0zGCQrgtYLFXzjEnDPynRJrujlnlBzAHarTXLE1H9Rg/rd1W6/HyHXWiemISE3BbHZNgRHyN9LKCnavaxEA9/N+Qm4+05p8OlpJNQsgNfHlLw/JnkB267mBzRHhSIk0gLyq7dCA9/4/ATcJRM+vUCoCwD1Bpm7/tLAN+HmBKxcIW/ku7F9LU/HDEA/0U0F3/hErLzDN4snrULIAPQDgDTwTZyQiDuX+wY+LU/HDEAfA0gD36QJiVjhY/i0CiED0IcA0sA3eWIS7liW5sNe9DStpemYAeij0FPBNykJdyz1L3xaGwkZgD4AkAa+KZOTsNylDnxagpABqDCANPBNnZyEZSrDpxUIGYAKAkgD37QpViwtUeYDfKW6ruY9IQNQoShSwTfViqVLtAWf2iMhA1ABAGngmz7VCpdG4VMTwoAEsGFPDWp3HkFL7XmkLcwWNiz4qtDAN2OaFSW3a3PkU/u1XcABKOZQ4jgHsh5Q/os4GvhmTrdhyWJ9pQX25z1hQAHoyRmlIaSCb4YNSxbpCz5/T8cBA6C3j92JsEpBSAPfLTNsuF2n8PUWwpGPTgXZECylBASANPB1iyMXQhr4Zs20YfFCfY58Uu4J+80dgswVOVL4Ez7DOLa1QrQu58oqFP3aO2ZYEkatny6pQaUr9QY+uRDSwDf7FjsWFfdT2k1V7dHcE0rNOqZrAKXAJxVCKvhm2bFoQWDBRzsdGw5AOfD1FkIa+ObMsmNhgMLXrdeTTx1A5SHx85wNBSANfOR4udycOCF3iqfi7Z6QBr5bZ9tRPD8wR77rtWMAXv122N1Na7dYJhOHe1dnIjenK3uUVAhp4Js7JxkLilJVvUfzV+OGB5Bm5AsO6oIvZ1TstbjQQBiWFIGYLCusE9JA3qQ07KlFy0nx6abbsJHgIz4bGkAa+EJCTELaslEjY3oMCjQQ9mYkue3WZMwvNMbIZ/h7QBr4zGaTMPKNHN4Tvm4BlYJw3txkFBUYCz7DjoA08FksQbhvdSaGZ0d7HcTkQlhwWwoK5+nznBGv4ni5wHBTMA18YWFBwrSbneUdPrkjoZHhM9wISANfeHiwMPI5h0X1+j/3O++exPayGrSLHBdxo7GoyBAsWugAyVRl5GKYEZAGvj59uuAbNrT38HVDdPhIE7aVVeNgpfvVLoF7cbEDqanSXrYHErCGAJAGvr4RwcKCY+gQ6fBdD0ZVdQuqqppx4upv+oAIOPr1QXJyGFKSGXiGWQXTwBcZGSKMfIMH0R3hEEgjkNq+BPQISANfVFQXfIMGMvjUgDFgAaSBLybaLEy7AzPln6apRvACoc2ABJAGvtgYM+5bk4mMdAafmiAHHIA08MXFWYRplywMWFFXgYACkAa+hHiLMO0OSGPwqYteV+sBAyANfIkJocK029/RRwvasz4ECoDkDJBP7tqOzjbxE81JpJOSQoVplzyLY0U7CgTECHjygyM4+MIut6parWECfP3YmwftkHe1JwEBoKfp127rgi8lhb190Bx9gTIFewJww/rhSLaHaVF71icjAPjXV/JYoDWsQMBPwQxADdPHRkBtB8cIvWMjoBGirGEfGYAaDo4RusYANEKUNexjwAPINplqmL6rXdN9bhia98DaDwPr4Y0K6CY5EQMwMOFlAAZmXHXjFQNQN6EKvI7KyZjr9wyp5yvrsefh9wIvCgb2aNTj0xHjTJKkgN8BJL1sOnoGpz46iovHz0nqNKukDQUiB8YjMS8VkZnSM0aoAqA25GO90IICDEAtRMHAfWAAGjj4WnCdAaiFKBi4DwxAAwdfC64zALUQBQP3gQFo4OBrwXUGoBaiYOA+eAOwAUDcjfqExocj/+UiA8vGXFdKAW8AknM0s8Qay3+pAKGJLGeLUoEwqh2SpIAkKxAr5LjW1wAUi/0xvWQE+s93GlU35rcCCpD0LCRNC0nXcmPhgTNcibPAxXHcFndt3bRhJqIGJyjQFWbCiAp42Rv6KrdkSJHDFMwf9yTO2OfnIdzGEkcaESA5PlNsTHZxpAGXs/BZcFjrqbGBK3MRn2NHmJWBKCcoRqhLDoKs3XlEOBDSQykv3Vc2QQBwaXZxGs93kHRWid4EssSGs9HQm0gG/Xt7Uytaz14C+fVaOH5BacWObQKAAoTOwtU8hxe9VmQXMAXkKsDzvyvdv2MdMXMNwK6puGAdOO4xufZZfaaABwVeLd1X5ur++08AFCDMKiwBUMokZAr4QIGdpfvKZl5vtweAwnScVVjMA5to7gl90ElmMhAV4PBMaUXZgze6JgrgtYVJZ8dab6vjQNSK+aSgAjy3DaYrG0sr/lkuZtUtgN0XL3cWpHeCm85zmPHj1JwBwC727ljBLjNTulWAPwtwPwA4zQFvcLypfPP+beRVr9vyP3gtOOOcaecAAAAAAElFTkSuQmCC
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.2.4/dist/index.umd.js
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var _a;
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "图片右键菜单";
  const utils = Utils.noConflict();
  DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 1e3,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config(
    Object.defineProperties(
      {
        html: true,
        autoClose: true,
        showClose: false
      },
      {
        position: {
          get() {
            return PopsPanel.getValue("qmsg-config-position", "bottom");
          }
        },
        maxNums: {
          get() {
            return PopsPanel.getValue("qmsg-config-maxnums", 5);
          }
        },
        showReverse: {
          get() {
            return PopsPanel.getValue("qmsg-config-showreverse", true);
          }
        },
        zIndex: {
          get() {
            let maxZIndex = Utils.getMaxZIndex();
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
            return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
          }
        }
      }
    )
  );
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx(_GM_xmlhttpRequest);
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error(["拦截器-请求错误", data]);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
    }
    return data;
  });
  httpx.config({
    logDetails: DEBUG
  });
  ({
    Object: {
      defineProperty: _unsafeWindow.Object.defineProperty
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild
    },
    setTimeout: _unsafeWindow.setTimeout
  });
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const UISwitch = function(text, key, defaultValue, clickCallBack, description) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      getValue() {
        return Boolean(PopsPanel.getValue(key, defaultValue));
      },
      callback(event, value) {
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        PopsPanel.setValue(key, Boolean(value));
      },
      afterAddToUListCallBack: void 0
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = Boolean(defaultValue);
    }
    return result;
  };
  const UISelect = function(text, key, defaultValue, data, callback, description) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        PopsPanel.setValue(key, isSelectedValue);
        if (typeof callback === "function") {
          callback(event, isSelectedValue, isSelectedText);
        }
      },
      data: selectData
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const Component_Common = {
    id: "component-common",
    title: "通用",
    forms: [
      {
        text: "Toast配置",
        type: "forms",
        forms: [
          UISelect(
            "Toast位置",
            "qmsg-config-position",
            "bottom",
            [
              {
                value: "topleft",
                text: "左上角"
              },
              {
                value: "top",
                text: "顶部"
              },
              {
                value: "topright",
                text: "右上角"
              },
              {
                value: "left",
                text: "左边"
              },
              {
                value: "center",
                text: "中间"
              },
              {
                value: "right",
                text: "右边"
              },
              {
                value: "bottomleft",
                text: "左下角"
              },
              {
                value: "bottom",
                text: "底部"
              },
              {
                value: "bottomright",
                text: "右下角"
              }
            ],
            (event, isSelectValue, isSelectText) => {
              log.info("设置当前Qmsg弹出位置" + isSelectText);
            },
            "Toast显示在页面九宫格的位置"
          ),
          UISelect(
            "最多显示的数量",
            "qmsg-config-maxnums",
            3,
            [
              {
                value: 1,
                text: "1"
              },
              {
                value: 2,
                text: "2"
              },
              {
                value: 3,
                text: "3"
              },
              {
                value: 4,
                text: "4"
              },
              {
                value: 5,
                text: "5"
              }
            ],
            void 0,
            "限制Toast显示的数量"
          ),
          UISwitch(
            "逆序弹出",
            "qmsg-config-showreverse",
            false,
            void 0,
            "修改Toast弹出的顺序"
          )
        ]
      }
    ]
  };
  const __PopsPanel__ = {
    data: null,
    oneSuccessExecMenu: null,
    onceExec: null,
    listenData: null
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      get data() {
        if (__PopsPanel__.data == null) {
          __PopsPanel__.data = new utils.Dictionary();
        }
        return __PopsPanel__.data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (__PopsPanel__.oneSuccessExecMenu == null) {
          __PopsPanel__.oneSuccessExecMenu = new utils.Dictionary();
        }
        return __PopsPanel__.oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (__PopsPanel__.onceExec == null) {
          __PopsPanel__.onceExec = new utils.Dictionary();
        }
        return __PopsPanel__.onceExec;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    /** 监听器 */
    $listener: {
      /**
       * 值改变的监听器
       */
      get listenData() {
        if (__PopsPanel__.listenData == null) {
          __PopsPanel__.listenData = new utils.Dictionary();
        }
        return __PopsPanel__.listenData;
      }
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (_unsafeWindow.top !== _unsafeWindow.self) {
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          }
        }
      ]);
    },
    /** 初始化本地设置默认的值 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config["attributes"]) {
          return;
        }
        let key = config.attributes[ATTRIBUTE_KEY];
        let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
        if (key == null) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (that.$data.data.has(key)) {
          log.warn("请检查该key(已存在): " + key);
        }
        that.$data.data.set(key, defaultValue);
      }
      function loopInitDefaultValue(configList) {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      }
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      locaData[key] = value;
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, value);
      }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let locaData = _GM_getValue(KEY, {});
      let localValue = locaData[key];
      if (localValue == null) {
        if (this.$data.data.has(key)) {
          return this.$data.data.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      Reflect.deleteProperty(locaData, key);
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, void 0);
      }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      let deleteKey = null;
      for (const [key, value] of this.$listener.listenData.entries()) {
        if (value.id === listenerId) {
          deleteKey = key;
          break;
        }
      }
      if (typeof deleteKey === "string") {
        this.$listener.listenData.delete(deleteKey);
      } else {
        console.warn("没有找到对应的监听器");
      }
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      let locaData = _GM_getValue(KEY, {});
      return key in locaData;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     */
    execMenu(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     */
    execMenuOnce(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      if (this.$data.oneSuccessExecMenu.has(key)) {
        return;
      }
      this.$data.oneSuccessExecMenu.set(key, 1);
      let resultStyleList = [];
      let pushStyleNode = (style) => {
        let __value = PopsPanel.getValue(key);
        changeCallBack(__value, style);
      };
      let changeCallBack = (currentValue, resultStyle) => {
        let resultList = [];
        if (currentValue) {
          let result = resultStyle ?? callback(currentValue, pushStyleNode);
          if (result instanceof HTMLStyleElement) {
            resultList = [result];
          } else if (Array.isArray(result)) {
            resultList = [
              ...result.filter(
                (item) => item != null && item instanceof HTMLStyleElement
              )
            ];
          }
        }
        for (let index = 0; index < resultStyleList.length; index++) {
          let $css = resultStyleList[index];
          $css.remove();
          resultStyleList.splice(index, 1);
          index--;
        }
        resultStyleList = [...resultList];
      };
      this.addValueChangeListener(
        key,
        (__key, oldValue, newValue) => {
          changeCallBack(newValue);
        }
      );
      let value = PopsPanel.getValue(key);
      if (value) {
        changeCallBack(value);
      }
    },
    /**
     * 根据key执行一次
     * @param key
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExec.has(key)) {
        return;
      }
      callback();
      this.$data.onceExec.set(key, 1);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      __pops.panel({
        title: {
          text: `${SCRIPT_NAME}-设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        isMobile: this.isMobile(),
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true
      });
    },
    isMobile() {
      return window.outerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 550) {
        return "92dvw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight > 450) {
        return "80dvh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [Component_Common];
      return configList;
    }
  };
  const ImageUtils = {
    default: {
      getBase64Image(img, type = "image/png") {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL;
      }
    },
    gif: {
      /**
       * 根据路径返回file
       * @param url 图片链接
       * @param imageName 图片名字
       * @param callback 回调
       */
      getImageFileFromUrl(url, imageName, callback) {
        fetch(url).then((res) => {
          return res.blob();
        }).then((blob) => {
          let imgFile = new File([blob], imageName, { type: "image/gif" });
          callback(imgFile);
        });
      },
      /**
       * 图片路径返回base64
       * @param imageUrl
       */
      chooseStaticImg(imageUrl) {
        let base64Str = null;
        return new Promise((resolve, reject) => {
          this.getImageFileFromUrl(imageUrl, "图片.gif", (file) => {
            let reader = new FileReader();
            reader.onloadend = () => {
              base64Str = reader.result;
              resolve(base64Str);
            };
            reader.readAsDataURL(file);
          });
        });
      }
    },
    /**
     * 网络请求获取图片的类型
     */
    async networkQueryContentType(url) {
      let resp = await httpx.head(url, {
        fetch: true
      });
      if (resp.status && resp.data.responseFetchHeaders.has("Content-Type")) {
        return resp.data.responseFetchHeaders.get("Content-Type");
      }
    }
  };
  const allowImageType = [
    { rule: ".png", type: "image/png" },
    { rule: ".jpg", type: "image/jpg" },
    { rule: ".jpeg", type: "image/jpeg" },
    { rule: ".webp", type: "image/webp" },
    { rule: ".ico", type: "image/ico" },
    { rule: ".gif", type: "image/gif" }
  ];
  const Image = {
    init() {
      let imgList = document.body.querySelectorAll("img");
      if (imgList.length !== 1) {
        log.error("页面中的<img>元素数量不为1");
        return;
      }
      log.info("注入全局右键-图片");
      let imageElement = imgList[0];
      let imageUrl = imageElement.src;
      __pops.rightClickMenu({
        target: _unsafeWindow,
        data: [
          {
            icon: __pops.config.iconSVG.documentCopy,
            iconIsLoading: false,
            text: "自动判断",
            async callback() {
              let imgType = null;
              if (imageUrl.startsWith("http") || imageUrl.startsWith("file:")) {
                let findIndex = -1;
                findIndex = allowImageType.findIndex(
                  (value) => imageUrl.endsWith(value.rule)
                );
                if (findIndex !== -1) {
                  imgType = allowImageType[findIndex].type;
                }
                if (!imgType && imageUrl.startsWith("http")) {
                  Qmsg.info("通过网络请求判断类型");
                  imgType = await ImageUtils.networkQueryContentType(imageUrl);
                  log.info("请求获取的Content-Type：" + imgType);
                  if (imgType) {
                    Qmsg.success("图片类型：" + imgType);
                  }
                }
              }
              if (imgType) {
                if (imgType.endsWith("gif")) {
                  ImageUtils.gif.chooseStaticImg(imageUrl).then((text) => {
                    utils.setClip(text);
                    Qmsg.success("复制成功！");
                  });
                } else {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, imgType)
                  );
                  Qmsg.success("复制成功！");
                }
              } else {
                Qmsg.error("未知的图片类型");
              }
            }
          },
          {
            icon: __pops.config.iconSVG.chromeFilled,
            iconIsLoading: false,
            text: "其它类型",
            callback(event) {
              return false;
            },
            item: [
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "jpg",
                callback() {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, "image/jpg")
                  );
                  Qmsg.success("复制成功！");
                }
              },
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "jpeg",
                callback() {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, "image/jpeg")
                  );
                  Qmsg.success("复制成功！");
                }
              },
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "png",
                callback() {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, "image/png")
                  );
                  Qmsg.success("复制成功！");
                }
              },
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "gif",
                callback() {
                  ImageUtils.gif.chooseStaticImg(imageUrl).then((text) => {
                    utils.setClip(text);
                    Qmsg.success("复制成功！");
                  });
                }
              }
            ]
          }
        ]
      });
    }
  };
  (() => {
    if (!document.documentElement.hasAttribute("style")) {
      return;
    }
    if (!document.body.hasAttribute("style")) {
      return;
    }
    if (!document.body.children.length) {
      return;
    }
    if (!document.querySelector('meta[name="viewport"]')) {
      return;
    }
    PopsPanel.init();
    Image.init();
  })();

})(Qmsg, DOMUtils, Utils, pops);