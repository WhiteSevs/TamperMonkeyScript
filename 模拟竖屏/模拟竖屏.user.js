// ==UserScript==
// @name         模拟竖屏
// @namespace    https://greasyfork.org/zh-CN/scripts/479590
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACnFJREFUeF7tnXnsJUURxz8QFAUUVIzZVfBCTXZXUBajYBQRFQygolF3vYJBUSJHVBJUgkdUDiUYPEA5l1UBZdUV1ws1Hiii8T4AXRX+QDAcMUERISHY32w/Mwzd703P65np95uqZLKb3+vp7qr6TnV1d3X1VhiNWgJbjZp7Yx4DwMhBYAAwAIxcAiNn3yyAAWDkEhg5+2YBDAAjl8DI2TcLsAUA+wMHA88BlgHLC8HF3cCNwE3AZcDlwK9y9q1kALwL2AW4FPhBTqYrda0FjgWe2VH9XVT7JeAMB9orclReKgCuqinlg8B7czBcqePLwKGZ6+yzutOBd87bYIkA0NcoANTpVEBWIQfdADw6R0UD1yHLuN88fSgRAIcBF0SY+hjwjnkYBn4MPHvOOkp6/XjgI207VCIAtgWuBR4XYeoc5xgd0ZLhDwPvmfLuH4Gr/dOyiayvbed8oJXAiinyUIOvAS5u03KJABAfLwMuAh4cYeobwEGJDMvD/1HknWuAtwPfTqyzz+JvA2QBHxBo9A/As4A7UjtUKgDEx/OBS4BHRpj6LfC0BIY3AK8IlP+A+9v7E+oZuujPgWcEOnECcFJq50oGgHiRguWtPz7C2K1TAFJ9ZW/gykAdf3am8ympQhu4vNYptDZQp78BT0ztW6kA2MMvzmiBRl5ubCgQvxLGLI9eX8a7A8I5BNiUKrQCystivS/QjwP8YlHjLpYEgNXA673Cd2/MwZaCb3Do/+yUd37iBLNP7fe/A49JbKeU4qvccPb7QGcEdA0FjakEAEjx8urbevZi9lV+xTDG+F8C5nHuOXRjKXdTMMTTecCbUpobEgA5FD/hVT7C9VMY/xewQ+33TwNHpgirsLLrvcWsduvrfk+jcVeHAoBW9E5u3MstBW8HHhp4Zx3wxhl13Rv4fdG8/zoLIT8g2ar1DYDdgFMi07E6g/cA3608Qndol05evLz5aWQAiEinTwCs8cp/7AxlabqmpeCvArf4sjGvt8nXryoMAAMDIKbAare01y3Fa/GnSloa1hw39PXvCfy6wVBiABgQALOUr2XME92iz8ZIH2P+QtOv3yzAlC+k6yFglvLliWuff2LqQ13VfD309WttXzt7TcgswAAWYJryr/OK/9wM7T0P+H6gzBfcjqF8iqZkAOgZAG92X+3ZkTa15aqFG227zqIYAA5M3LkzAPQIgKf7qdvDA22mKF+vax/8i35PfFLd54HXzUJO7XcDQI8A0J76izIof1KFQKAVuycAXwPkN6SSAaAnAMQibm72oNAe/hBkAOgBAIrQiW2taqlW07ahyADQAwDkmcu5q9MngGOG0rxv1wDQMQBiodzah38hcKcBILsEitoM+qRbzFHQYp0U3Kk1/aHJLECHFkDe+W+Ah9Ta+J5bqXvB0Jq3IWC6BnIsBcdW/DRX15y9BDIL0KEF0C6exvkq/czHqZegfPXBANARAHaObOTo+JYOMZRCBoCOAPCSiJOngwu/KEX7ZgHimpjXB/g4cHStekWrPqkg5dsQMEUZ8wJgM6A4vyqdDxxuAOhcAoOvA2wP/DvAps7f6ThXSWQ+QAc+gGLxFatXp6cCCvMqiQwAHQAgtvyr07w6tFkSGQA6AEBoBvAfQENDaWQA6AAAOoOmbB1VklP45NK0b9PAuEbmmQUo1YoCQKqk1GXPNQD0IoHBZwFK3lA/lKHQrTYhW11LzIaADoYAVXmWO5WrrF4P8sezlYThr11rs0X9BoCOAKBq5fVv49OZttBNL68YADoEQC8anLMRA4AB4H4SsPwAMJpLo8wCmAUwCxDCwDzrAHMOy72+bhbALIBZALMA95WAOYEdOIE7+QBRhYor27ceLRJVSYKv3wCiY+ChzJexcSKUI1/vq546qawNAT0MAToEIiXMSuAshYQAEEoEEQNAyHeJhaerrAGgQwDoq7/QXWak7eEmZABoIqXZZQbfDKp2UUkcXun/8C0fKfw7QE8obGw2e3lLmAXo0AJMqpYJP83lsldCx9LIANADAEpTerU/BgADwP0kYNPAltPAHYGt3YWL/yz5k6/1zSxARgugsG85d0oDp+eXCwAEA0BGAFRzASkf4LkGgEEkMNg0UHF/Z3qWQ3P6QaQxo1GzABktwGcq17vozh3l8i2dDAAZAaD5/mTNfVG2kw0ABgCbBoYw0OYLNgtQxoA3mBNoADAAmA9QAAbMAiQowZxAcwLNCczlBFbDruqRPQkfZa9FzQJktAC9ai5TYwYAA4ANAbmGgEwfZa/VmAUwC2AWIJcFMCewV+MVbczWARL00OcQcDJwKKBbzf/k70KWsnKTASBBon0BINSOuqmU+gck9LdJUQNAEyn5Mn0AoBonofWRH9aOu71lym2qCaz8v6gBIEFqfQBAdyMqX5JiJPfyfatmU700cqtaAhv3KWoASJBc1wCo3nFcDzfvavfUAJAAgH+4lHaPqpW/xDlpaxPqmFV0YgGq9yNXgZHbAoSu6km9Vb1VjqCuED1LwPP8ritrd69VoCSXe85Tae1dXZB5VOVv8gOqU+acPsB2/qoe/VslXeBxbApPY4kIuhhYUxOMEluvAq5LEdiUstu63Ai6KHN1oEzuWYCO4n8l0E5yptaxAECXWGwICOwi4LWZADCp5gh3j6IU9GLgm/7qvNzX5+k+hpWBfu8C3JDCz1gA8DB/mklh7HWSIK9OEdrAZWOJMC5zuZtfmtq3sQBAcjnO3WXw0YiAdMOpbjotnd7q8zOH+tmKhzYAKF1Isf490K3G/XSK46cjbvpdDmMp5x11Ha98CvkqOpJ3YIQ59V3H9JJpTACQcJTFRNlMlhJpirui7WntsQFAij/eZS47ZQkhQKuOrS3WGAGwVCzB9X5YmMuBHSsABAJlNTsG2H8BrcF64NQcs5c2AJjsbWt9Xevei066/EqLRKUD4S6Xg3GjS765zt3MrkxsWagNABZxKbiJsJZ5j3u527bV0wdNsqPGPiQp/SZ3HP9Gn1zz7tydMgDklmhafZNdysESVhkA0hSWu7QBILdEF6w+A8CCKSx3dxcSAAqkeLWXhHIG3p5bKlZffxJo4wOc4O4J/JDv4qLtpPUn2QVpqQ0A9PXLCogOcQGQmxaEV+tmQAJtAKBbQBSQoGvic8e5mZJ6lkAbAKiLF/g7g/X/ffw2as9dX+jmdgVuA+4Ymou2AFCwo4IPzwhc/zI0T4vQ/lUeANrHD8X29cZDWwD01sEl2FB1Kf08F8OnvYjByADQn+gVtKFglEkwp6KS5UcNSrkBcDTwCEDn5LSJYQTaZNKZAIVsVTeZdCZBZxMGpZwA2M2FWG+ucKNQJQUt/DfCYcrdfzEhhepIuX4udIeh2kqpI9QH+UgKQNVpJD2KR5yQxn3FIdw5qOZ94zkB8Ckfc6cDkk0o5e6/UH06eRMDQOgCyVAdsXT3sWPeoTpCfOwbcI6v8NfradwvhnICQExt4+LvX+4Vo6NYenaIcLvUAaDxXuFaer7jgzmKUfykI7kBUByD1qHpEjAAjBwhBgADwMglMHL2zQIYAEYugZGzbxbAADByCYycfbMAIwfA/wATa4CfFIX0pAAAAABJRU5ErkJggg==
// @version      2024.1.11
// @description  由于有些链接用小窗模式的浏览器打开，会提示切换到竖屏，特此模拟竖屏
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        https://eggy.163.com/*
// @match        https://igame.qq.com/*
// @match        https://*.eggygogame.com/*
// @match        https://*.eggy-go.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  /**
   * 油猴环境下就是unsafeWindow，如果不是就是globalThis
   */
  const win = typeof unsafeWindow === "object" ? unsafeWindow : globalThis;

  /**
   * 添加CSS到页面中
   * @param {string} cssText CSS字符串
   */
  const GM_addStyle = function (cssText) {
    if (cssText == null) {
      return;
    }
    if (typeof cssText !== "string") {
      return;
    }
    if (cssText.trim() === "") {
      return;
    }
    let cssNode = document.createElement("style");
    cssNode.setAttribute("type", "text/css");
    cssNode.innerHTML = cssText;
    if (document.head) {
      /* 插入head后 */
      document.head.appendChild(cssNode);
    } else if (document.documentElement.childNodes.length === 0) {
      /* 插入body后 */
      document.documentElement.appendChild(cssNode);
    } else {
      /* 插入head前面 */
      document.documentElement.insertBefore(
        cssNode,
        document.documentElement.childNodes[0]
      );
    }
  };

  /**
   * 配置
   * @typedef {object} verticalScreenWebSiteDetails
   * @property {?string} hostName 匹配的网站hostName，和href任选其一
   * @property {?string} href 匹配的网站href，和hostName任选其一，可正则
   * @property {?string} CSS 竖屏CSS
   */
  /**
   * @type {verticalScreenWebSiteDetails[]}
   */
  const verticalScreenWebSite = [
    {
      hostName: "igame.qq.com",
      CSS: `@charset "UTF-8";@media all and (orientation:landscape){html{width:unset;height:unset;overflow:unset}
            html::before{position:unset;top:unset;left:unset;z-index:unset;width:unset;height:unset;background:unset;content:unset}
            body::after{content:unset;text-align:unset;font-size:unset;color:unset;position:unset;top:unset;left:unset;height:unset;width:unset;margin-top:unset;z-index:unset}
            body::before{content:unset;position:unset;z-index:unset;height:unset;width:unset;left:unset;top:unset;margin:unset;color:unset;background-image:unset;background-repeat:unset;background-position:unset;background-size:unset;-webkit-transform:unset}}`,
    },
  ];

  /**
   * 劫持
   */
  const hijack = {
    /**
     * 劫持window.orientation
     */
    hijackOrientation() {
      Object.defineProperty(win, "orientation", {
        /**
         * 0是正常竖屏
         * 90是倒着的竖屏
         * @returns {number}
         */
        get() {
          console.log("模拟竖屏：window.orientation ===> 0");
          return 0;
        },
      });
    },
  };

  /**
   * 模拟
   */
  const simulation = function () {
    /* 自动劫持 */
    hijack.hijackOrientation();
    for (const webSiteConfig of verticalScreenWebSite) {
      if (
        (typeof webSiteConfig.hostName === "string" &&
          win.location.hostname === webSiteConfig.hostName) ||
        (typeof webSiteConfig.href === "string" &&
          win.location.href.match(webSiteConfig.href))
      ) {
        /* hostname相等|href包含 */
        if (typeof webSiteConfig.CSS === "string") {
          /* 添加额外的CSS */
          GM_addStyle(webSiteConfig.CSS);
          console.log("模拟竖屏：添加自定义CSS");
        }
      }
    }
  };

  /* --------------------入口-------------------- */
  simulation();
  /* --------------------入口-------------------- */
})();
