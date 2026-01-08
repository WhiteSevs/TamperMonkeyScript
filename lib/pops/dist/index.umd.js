(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.pops = factory());
})(this, (function () { 'use strict';

    const GlobalConfig = {
        config: {},
        /**
         * 为所有弹窗设置全局属性
         */
        setGlobalConfig(config) {
            Reflect.ownKeys(config).forEach((keyName) => {
                Reflect.set(GlobalConfig.config, keyName, Reflect.get(config, keyName));
            });
        },
        /**
         * 获取全局配置
         */
        getGlobalConfig() {
            const result = {};
            Object.keys(GlobalConfig.config).forEach((keyName) => {
                const configValue = Reflect.get(GlobalConfig.config, keyName);
                if (keyName === "style") {
                    // 设置style属性
                    const style = configValue == null ? "" : typeof configValue === "function" ? configValue() : configValue;
                    if (typeof style === "string") {
                        result.style = style;
                    }
                }
                else if (keyName === "zIndex") {
                    // 设置zIndex属性
                    let zIndex = configValue == null ? "" : typeof configValue === "function" ? configValue() : configValue;
                    if (typeof zIndex === "string") {
                        const newIndex = (zIndex = Number(zIndex));
                        if (!isNaN(newIndex)) {
                            result.zIndex = newIndex;
                        }
                    }
                    else {
                        if (!isNaN(zIndex)) {
                            result.zIndex = zIndex;
                        }
                    }
                }
                else if (keyName === "mask") {
                    const mask = GlobalConfig.config.mask == null ? {} : GlobalConfig.config.mask;
                    if (typeof mask === "object" && mask != null) {
                        result.mask = mask;
                    }
                }
                else {
                    Reflect.set(result, keyName, configValue);
                }
            });
            return result;
        },
    };

    var SVG_min = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"min\">\r\n  <path fill=\"currentColor\" d=\"M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z\"></path>\r\n</svg>\r\n";

    var SVG_mise = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"mise\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M885.333333 85.333333H330.410667a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666H138.666667A53.333333 53.333333 0 0 0 85.333333 298.666667v586.666666a53.333333 53.333333 0 0 0 53.333334 53.333334H725.333333a53.333333 53.333333 0 0 0 53.333334-53.333334V746.154667h106.666666c29.44 0 53.333333-23.893333 53.333334-53.333334V138.666667A53.333333 53.333333 0 0 0 885.333333 85.333333zM725.333333 692.821333v192.512H138.666667V298.666667H725.333333v394.154666z m157.866667 0H778.666667V298.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H330.410667v-106.666666h554.922666l-2.133333 554.154666z\"></path>\r\n</svg>\r\n";

    var SVG_max = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"max\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z\"></path>\r\n</svg>\r\n";

    var SVG_close = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"close\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z\"></path>\r\n</svg>\r\n";

    var SVG_edit = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"edit\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z\"></path>\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z\"></path>\r\n</svg>\r\n";

    var SVG_share = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"share\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z\"></path>\r\n</svg>\r\n";

    var SVG_delete = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"delete\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z\"></path>\r\n</svg>\r\n";

    var SVG_search = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"search\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z\"></path>\r\n</svg>\r\n";

    var SVG_upload = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"upload\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z\"></path>\r\n</svg>\r\n";

    var SVG_loading = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"loading\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z\"></path>\r\n</svg>\r\n";

    var SVG_next = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"next\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    var SVG_prev = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"prev\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    var SVG_eleme = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"eleme\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z\"></path>\r\n</svg>\r\n";

    var SVG_elemePlus = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"elemePlus\">\r\n  <path\r\n    d=\"M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z\"\r\n    fill=\"currentColor\"></path>\r\n</svg>\r\n";

    var SVG_chromeFilled = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" xml:space=\"preserve\" data-type=\"chromeFilled\">\r\n\t<path\r\n\t\td=\"M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z\"\r\n\t\tfill=\"currentColor\"></path>\r\n\t<path\r\n\t\td=\"M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z\"\r\n\t\tfill=\"currentColor\"></path>\r\n\t<path\r\n\t\td=\"M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zM512.01 938.68H512zM414.76 701.95a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z\"\r\n\t\tfill=\"currentColor\"></path>\r\n</svg>\r\n";

    var SVG_cpu = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"cpu\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z\"></path>\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z\"></path>\r\n</svg>\r\n";

    var SVG_videoPlay = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"videoPlay\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z\"></path>\r\n</svg>\r\n";

    var SVG_videoPause = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"videoPause\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z\"></path>\r\n</svg>\r\n";

    var SVG_headset = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"headset\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z\"></path>\r\n</svg>\r\n";

    var SVG_monitor = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"monitor\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z\"></path>\r\n</svg>\r\n";

    var SVG_documentCopy = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"documentCopy\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z\"></path>\r\n</svg>\r\n";

    var SVG_picture = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"picture\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z\"></path>\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z\"></path>\r\n</svg>\r\n";

    var SVG_circleClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-type=\"circleClose\">\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z\"></path>\r\n\t<path\r\n\t\tfill=\"currentColor\"\r\n\t\td=\"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896\"></path>\r\n</svg>\r\n";

    var SVG_view = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-type=\"view\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160\"></path>\r\n</svg>\r\n";

    var SVG_hide = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-type=\"hide\">\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z\"></path>\r\n  <path\r\n    fill=\"currentColor\"\r\n    d=\"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z\"></path>\r\n</svg>\r\n";

    var SVG_keyboard = "<svg viewBox=\"0 0 1123 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-type=\"keyboard\">\r\n  <path\r\n    d=\"M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z\"></path>\r\n  <path\r\n    d=\"M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z\"></path>\r\n  <path\r\n    d=\"M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z\"></path>\r\n</svg>\r\n";

    var SVG_arrowRight = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-type=\"arrowRight\">\r\n\t<path\r\n\t\td=\"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    var SVG_arrowLeft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" data-type=\"arrowLeft\">\r\n\t<path\r\n\t\td=\"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z\"></path>\r\n</svg>\r\n";

    const PopsIconData = {
        min: SVG_min,
        mise: SVG_mise,
        max: SVG_max,
        close: SVG_close,
        edit: SVG_edit,
        share: SVG_share,
        delete: SVG_delete,
        search: SVG_search,
        upload: SVG_upload,
        loading: SVG_loading,
        next: SVG_next,
        prev: SVG_prev,
        eleme: SVG_eleme,
        elemePlus: SVG_elemePlus,
        chromeFilled: SVG_chromeFilled,
        cpu: SVG_cpu,
        videoPlay: SVG_videoPlay,
        videoPause: SVG_videoPause,
        headset: SVG_headset,
        monitor: SVG_monitor,
        documentCopy: SVG_documentCopy,
        picture: SVG_picture,
        circleClose: SVG_circleClose,
        view: SVG_view,
        hide: SVG_hide,
        keyboard: SVG_keyboard,
        arrowRight: SVG_arrowRight,
        arrowLeft: SVG_arrowLeft,
    };
    const PopsIcon = {
        $data: PopsIconData,
        /**
         * 判断是否存在某个icon
         * @param iconName 图标名
         */
        hasIcon(iconName) {
            return Object.keys(PopsIcon.$data).includes(iconName);
        },
        /**
         * 获取icon
         * @param iconName 图标名
         */
        getIcon(iconName) {
            return PopsIcon.$data[iconName];
        },
        /**
         * 删除图标
         * @param iconName 图标名
         */
        deleteIcon(iconName) {
            return Reflect.deleteProperty(PopsIcon.$data, iconName);
        },
        /**
         * 设置图标
         * @param iconName 图标名
         * @param iconHTML 图标html
         */
        setIcon(iconName, iconHTML) {
            Reflect.set(PopsIcon.$data, iconName, iconHTML);
        },
    };

    /**
     * 存储在元素属性上的事件名
     */
    const SymbolEvents = Symbol("events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1));

    const PopsCoreDefaultEnv = {
        document: document,
        window: window,
        globalThis: globalThis,
        self: self,
    };
    const PopsCoreEnv = Object.assign({}, PopsCoreDefaultEnv);
    const PopsCore = {
        get document() {
            return PopsCoreEnv.document;
        },
        get window() {
            return PopsCoreEnv.window;
        },
        get globalThis() {
            return PopsCoreEnv.globalThis;
        },
        get self() {
            return PopsCoreEnv.self;
        },
    };
    const OriginPrototype = {
        Object: {
            defineProperty: Object.defineProperty,
        },
    };

    const createCache = (lastNumberWeakMap) => {
        return (collection, nextNumber) => {
            lastNumberWeakMap.set(collection, nextNumber);
            return nextNumber;
        };
    };

    /*
     * The value of the constant Number.MAX_SAFE_INTEGER equals (2 ** 53 - 1) but it
     * is fairly new.
     */
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === undefined ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
    const TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
    const TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
    const createGenerateUniqueNumber = (cache, lastNumberWeakMap) => {
        return (collection) => {
            const lastNumber = lastNumberWeakMap.get(collection);
            /*
             * Let's try the cheapest algorithm first. It might fail to produce a new
             * number, but it is so cheap that it is okay to take the risk. Just
             * increase the last number by one or reset it to 0 if we reached the upper
             * bound of SMIs (which stands for small integers). When the last number is
             * unknown it is assumed that the collection contains zero based consecutive
             * numbers.
             */
            let nextNumber = lastNumber === undefined ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
            if (!collection.has(nextNumber)) {
                return cache(collection, nextNumber);
            }
            /*
             * If there are less than half of 2 ** 30 numbers stored in the collection,
             * the chance to generate a new random number in the range from 0 to 2 ** 30
             * is at least 50%. It's benifitial to use only SMIs because they perform
             * much better in any environment based on V8.
             */
            if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
                while (collection.has(nextNumber)) {
                    nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
                }
                return cache(collection, nextNumber);
            }
            // Quickly check if there is a theoretical chance to generate a new number.
            if (collection.size > MAX_SAFE_INTEGER) {
                throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
            }
            // Otherwise use the full scale of safely usable integers.
            while (collection.has(nextNumber)) {
                nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
            }
            return cache(collection, nextNumber);
        };
    };

    const LAST_NUMBER_WEAK_MAP = new WeakMap();
    const cache = createCache(LAST_NUMBER_WEAK_MAP);
    const generateUniqueNumber = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);

    const createBrokerFactory = (createOrGetOngoingRequests, extendBrokerImplementation, generateUniqueNumber, isMessagePort) => (brokerImplementation) => {
        const fullBrokerImplementation = extendBrokerImplementation(brokerImplementation);
        return (sender) => {
            const ongoingRequests = createOrGetOngoingRequests(sender);
            sender.addEventListener('message', (({ data: message }) => {
                const { id } = message;
                if (id !== null && ongoingRequests.has(id)) {
                    const { reject, resolve } = ongoingRequests.get(id);
                    ongoingRequests.delete(id);
                    if (message.error === undefined) {
                        resolve(message.result);
                    }
                    else {
                        reject(new Error(message.error.message));
                    }
                }
            }));
            if (isMessagePort(sender)) {
                sender.start();
            }
            const call = (method, params = null, transferables = []) => {
                return new Promise((resolve, reject) => {
                    const id = generateUniqueNumber(ongoingRequests);
                    ongoingRequests.set(id, { reject, resolve });
                    if (params === null) {
                        sender.postMessage({ id, method }, transferables);
                    }
                    else {
                        sender.postMessage({ id, method, params }, transferables);
                    }
                });
            };
            const notify = (method, params, transferables = []) => {
                sender.postMessage({ id: null, method, params }, transferables);
            };
            let functions = {};
            for (const [key, handler] of Object.entries(fullBrokerImplementation)) {
                functions = { ...functions, [key]: handler({ call, notify }) };
            }
            return { ...functions };
        };
    };

    const createCreateOrGetOngoingRequests = (ongoingRequestsMap) => (sender) => {
        if (ongoingRequestsMap.has(sender)) {
            // @todo TypeScript needs to be convinced that has() works as expected.
            return ongoingRequestsMap.get(sender);
        }
        const ongoingRequests = new Map();
        ongoingRequestsMap.set(sender, ongoingRequests);
        return ongoingRequests;
    };

    const createExtendBrokerImplementation = (portMap) => (partialBrokerImplementation) => ({
        ...partialBrokerImplementation,
        connect: ({ call }) => {
            return async () => {
                const { port1, port2 } = new MessageChannel();
                const portId = await call('connect', { port: port1 }, [port1]);
                portMap.set(port2, portId);
                return port2;
            };
        },
        disconnect: ({ call }) => {
            return async (port) => {
                const portId = portMap.get(port);
                if (portId === undefined) {
                    throw new Error('The given port is not connected.');
                }
                await call('disconnect', { portId });
            };
        },
        isSupported: ({ call }) => {
            return () => call('isSupported');
        }
    });

    const isMessagePort = (sender) => {
        return typeof sender.start === 'function';
    };

    const createBroker = createBrokerFactory(createCreateOrGetOngoingRequests(new WeakMap()), createExtendBrokerImplementation(new WeakMap()), generateUniqueNumber, isMessagePort);

    const createClearIntervalFactory = (scheduledIntervalsState) => (clear) => (timerId) => {
        if (typeof scheduledIntervalsState.get(timerId) === 'symbol') {
            scheduledIntervalsState.set(timerId, null);
            clear(timerId).then(() => {
                scheduledIntervalsState.delete(timerId);
            });
        }
    };

    const createClearTimeoutFactory = (scheduledTimeoutsState) => (clear) => (timerId) => {
        if (typeof scheduledTimeoutsState.get(timerId) === 'symbol') {
            scheduledTimeoutsState.set(timerId, null);
            clear(timerId).then(() => {
                scheduledTimeoutsState.delete(timerId);
            });
        }
    };

    const createSetIntervalFactory = (generateUniqueNumber, scheduledIntervalsState) => (set) => (func, delay = 0, ...args) => {
        const symbol = Symbol();
        const timerId = generateUniqueNumber(scheduledIntervalsState);
        scheduledIntervalsState.set(timerId, symbol);
        const schedule = () => set(delay, timerId).then(() => {
            const state = scheduledIntervalsState.get(timerId);
            if (state === undefined) {
                throw new Error('The timer is in an undefined state.');
            }
            if (state === symbol) {
                func(...args);
                // Doublecheck if the interval should still be rescheduled because it could have been cleared inside of func().
                if (scheduledIntervalsState.get(timerId) === symbol) {
                    schedule();
                }
            }
        });
        schedule();
        return timerId;
    };

    const createSetTimeoutFactory = (generateUniqueNumber, scheduledTimeoutsState) => (set) => (func, delay = 0, ...args) => {
        const symbol = Symbol();
        const timerId = generateUniqueNumber(scheduledTimeoutsState);
        scheduledTimeoutsState.set(timerId, symbol);
        set(delay, timerId).then(() => {
            const state = scheduledTimeoutsState.get(timerId);
            if (state === undefined) {
                throw new Error('The timer is in an undefined state.');
            }
            if (state === symbol) {
                // A timeout can be savely deleted because it is only called once.
                scheduledTimeoutsState.delete(timerId);
                func(...args);
            }
        });
        return timerId;
    };

    // Prefilling the Maps with a function indexed by zero is necessary to be compliant with the specification.
    const scheduledIntervalsState = new Map([[0, null]]); // tslint:disable-line no-empty
    const scheduledTimeoutsState = new Map([[0, null]]); // tslint:disable-line no-empty
    const createClearInterval = createClearIntervalFactory(scheduledIntervalsState);
    const createClearTimeout = createClearTimeoutFactory(scheduledTimeoutsState);
    const createSetInterval = createSetIntervalFactory(generateUniqueNumber, scheduledIntervalsState);
    const createSetTimeout = createSetTimeoutFactory(generateUniqueNumber, scheduledTimeoutsState);
    const wrap = createBroker({
        clearInterval: ({ call }) => createClearInterval((timerId) => call('clear', { timerId, timerType: 'interval' })),
        clearTimeout: ({ call }) => createClearTimeout((timerId) => call('clear', { timerId, timerType: 'timeout' })),
        setInterval: ({ call }) => createSetInterval((delay, timerId) => call('set', { delay, now: performance.timeOrigin + performance.now(), timerId, timerType: 'interval' })),
        setTimeout: ({ call }) => createSetTimeout((delay, timerId) => call('set', { delay, now: performance.timeOrigin + performance.now(), timerId, timerType: 'timeout' }))
    });
    const load = (url) => {
        const worker = new Worker(url);
        return wrap(worker);
    };

    const createLoadOrReturnBroker = (loadBroker, worker) => {
        let broker = null;
        return () => {
            if (broker !== null) {
                return broker;
            }
            const blob = new Blob([worker], { type: 'application/javascript; charset=utf-8' });
            const url = URL.createObjectURL(blob);
            broker = loadBroker(url);
            // Bug #1: Edge up until v18 didn't like the URL to be revoked directly.
            setTimeout(() => URL.revokeObjectURL(url));
            return broker;
        };
    };

    // This is the minified and stringified code of the worker-timers-worker package.
    const worker = `(()=>{var e={455(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},m=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},f=new Map,h=d(globalThis.clearTimeout,f),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=m(f,performance,globalThis.setTimeout,w),T=m(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`; // tslint:disable-line:max-line-length

    const loadOrReturnBroker = createLoadOrReturnBroker(load, worker);
    const clearInterval$1 = (timerId) => loadOrReturnBroker().clearInterval(timerId);
    const clearTimeout$1 = (timerId) => loadOrReturnBroker().clearTimeout(timerId);
    const setInterval$1 = (...args) => loadOrReturnBroker().setInterval(...args);
    const setTimeout$1 = (...args) => loadOrReturnBroker().setTimeout(...args);

    let t$1 = class t{constructor(){this.__map={};}beforeEach(t){this.__interceptor=t;}on(t,i){const s=Array.isArray(t)?t:[t];for(const t of s){this.__map[t]=this.__map[t]||[];const s=this.__map[t];s&&s.push(i);}return this}emit(t,i,s){ void 0!==this.__interceptor?this.__interceptor(t,(()=>{this.__emit(t,i),s&&s();})):(this.__emit(t,i),s&&s());}__emit(t,i){const s=this.__map[t];if(Array.isArray(s)&&(null==s?void 0:s.length))for(const _ of s)_(i,t);this.event=i;}off(t,i){const s=this.__map[t];if(void 0!==s)if(void 0===i)delete this.__map[t];else {const t=s.findIndex((t=>t===i));s.splice(t,1);}}destroy(){this.__map={};}};

    const n$1="clientX",e$2="clientY",t=16,c$3="start",o$1="move",s$1="cancel",u$3="end",a$2="left",i$3="right",r$4="up",d$1="down",m$2={4:"start",5:"move",1:"end",3:"cancel"};function v$1(n){return m$2[n]}function b(n,e,t){const c={1:{0:{move:4},4:{move:5,end:1,cancel:3},5:{move:5,end:1,cancel:3}},0:{4:{move:2,end:1,cancel:3},5:{start:2,move:2,end:1,cancel:3}}}[Number(n)][e];return void 0!==c&&c[t]||0}function g$1(n){[1,3,2].includes(n.state)&&(n.state=0);}function h$3(n){return [5,1,3].includes(n)}function j(n){if(n.disabled)return n.state=0,true}function O(n,e){return Object.assign(Object.assign(Object.assign({},n),e),{state:0,disabled:false})}function p$3(n){return Math.round(100*n)/100}

    function r$3(){let t,o,i,r,a=0;return function(u){if(t=o,void 0!==u){a=Number.MAX_SAFE_INTEGER>a?++a:1;const h=function(t,o){const{phase:i,points:r,changedPoints:a,nativeEvent:u}=t,h=r.length,p=c$3===i,g=u$3===i&&0===h||s$1===i,l=Date.now(),{x:d,y:m}=c$2(r)||c$2(a),{currentTarget:v}=u;return Object.assign(t,{id:o,x:d,y:m,timestamp:l,isStart:p,isEnd:g,pointLength:h,currentTarget:v,getOffset(t=v){const e=t.getBoundingClientRect();return {x:d-Math.round(e.left),y:m-Math.round(e.top)}}})}(u,a);o=h;const{isStart:p,pointLength:g}=h;return p&&(i=h,t=void 0,r=1<g?h:void 0),Object.assign(Object.assign({},h),{prevInput:t,startMultiInput:r,startInput:i})}}}function c$2(t){const{length:e}=t;if(0<e){if(1===e){const{clientX:e,clientY:n}=t[0];return {x:Math.round(e),y:Math.round(n)}}const n=t.reduce(((t,e)=>(t.x+=e[n$1],t.y+=e[e$2],t)),{x:0,y:0});return {x:Math.round(n.x/e),y:Math.round(n.y/e)}}}function a$1(t,e,n,s){const o={};for(const t in n)["target","currentTarget","type"].includes(t)||(o[t]=n[t]);let i;return document.createEvent?(i=document.createEvent("HTMLEvents"),i.initEvent(t,null==s?void 0:s.bubbles,null==s?void 0:s.cancelable)):i=new Event(t,s),Object.assign(i,o,{match:()=>n.targets&&0<n.targets.length&&n.targets.every((t=>i.currentTarget.contains(t)))}),e.dispatchEvent(i)}function u$2(t,e){const{preventDefault:n}=e;return s=n,"[object Function]"===Object.prototype.toString.call(s)?n(t):!!n;var s;}const h$2=["touchstart","touchmove","touchend","touchcancel","mousedown"],p$2=["mousemove","mouseup"];const g={domEvents:{bubbles:true,cancelable:true},preventDefault:t=>{if(t.target&&"tagName"in t.target){const{tagName:e}=t.target;return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(e)}return  false}};let l$1 = class l extends t$1{constructor(t,e){super(),this.v="2.1.3",this.__computeFunctionList=[],this.__computeFunctionCreatorList=[],this.__pluginContexts=[],this.__isIgnoreMouse=false,this.el=t,this.c={},this.__options=Object.assign(Object.assign({},g),e);const n=function(t){const e=r$3();return function(n){const s=[],o=[];Array.from(n.touches).forEach((({clientX:e,clientY:n,target:i})=>{(null==t?void 0:t.contains(i))&&(s.push(i),o.push({clientX:e,clientY:n,target:i}));}));const i=Array.from(n.changedTouches).map((({clientX:t,clientY:e,target:n})=>({clientX:t,clientY:e,target:n})));return e({phase:n.type.replace("touch",""),changedPoints:i,points:o,nativeEvent:n,target:n.target,targets:s})}}(this.el),s=function(){let t,e=false,n=null;const s=r$3();return function(o){const{clientX:i,clientY:r,type:c,button:a,target:u}=o;let h,p=[{clientX:i,clientY:r,target:u}];if("mousedown"===c&&0===a)n=u,e=true,h="start";else {if(!e)return;"mousemove"===c?h="move":"mouseup"===c&&(p=[],h="end",e=false);}const g=t||[{clientX:i,clientY:r,target:u}];if(t=[{clientX:i,clientY:r,target:u}],void 0!==h)return s({phase:h,changedPoints:g,points:p,target:n,targets:[n],nativeEvent:o})}}();if(this.__inputCreatorMap={touchstart:n,touchmove:n,touchend:n,touchcancel:n,mousedown:s,mousemove:s,mouseup:s},this.on("at:after",(t=>{const{target:e,__type:n}=t,{domEvents:s}=this.__options;s&&void 0!==this.el&&e&&(a$1(n,e,t,s),a$1("at:after",e,t,s));})),void 0!==t){t.style.webkitTapHighlightColor="rgba(0,0,0,0)";let e=false;try{const t={};Object.defineProperty(t,"passive",{get(){e=!0;}}),window.addEventListener("_",(()=>{}),t);}catch(t){}this.on("u",function(t,e,n){return h$2.forEach((s=>{t.addEventListener(s,e,n);})),p$2.forEach((t=>{window.addEventListener(t,e,n);})),()=>{h$2.forEach((n=>{t.removeEventListener(n,e);})),p$2.forEach((t=>{window.removeEventListener(t,e);}));}}(t,this.catchEvent.bind(this),false===this.__options.preventDefault&&e?{passive:true}:{passive:false}));}}use(t,e){this.__pluginContexts.push(t(this,e));}catchEvent(t){const e=this.__inputCreatorMap[t.type](t);if(void 0!==e){const n=()=>t.stopPropagation(),s=()=>t.stopImmediatePropagation(),o=()=>t.preventDefault();if(u$2(t,this.__options))o();else if("touchstart"===t.type?this.__isIgnoreMouse=true:"touchmove"===t.type&&(this.__isIgnoreMouse=false),this.__isIgnoreMouse&&t.type.startsWith("mouse"))return void("mouseup"===t.type&&(this.__isIgnoreMouse=false));this.emit("input",e),this.emit2(`at:${e.phase}`,e,{});const i={};this.__computeFunctionList.forEach((t=>{const n=t(e,i);if(void 0!==n)for(const t in n)i[t]=n[t];})),this.emit("computed",Object.assign(Object.assign(Object.assign({},e),i),{stopPropagation:n,stopImmediatePropagation:s,preventDefault:o}));}}compute(t,e){for(const e of t)this.__computeFunctionCreatorList.includes(e)||(this.__computeFunctionCreatorList.push(e),this.__computeFunctionList.push(e()));this.on("computed",e);}beforeEach(t){super.beforeEach(((e,n)=>{var s;(null===(s=this.c)||void 0===s?void 0:s.name)?t(e,n):n();}));}get(t){return this.__pluginContexts.find((e=>t===e.name))}set(t){this.__options=Object.assign(Object.assign({},this.__options),t);}emit2(t,e,n){this.c=n,this.emit(t,Object.assign(Object.assign({},e),{type:t}),(()=>{this.emit("at:after",Object.assign(Object.assign({},e),{name:t,__type:t}));}));}destroy(){this.emit("u"),super.destroy();}};

    var x=r=>Math.sqrt(r.x*r.x+r.y*r.y),y=(r,a)=>r.x*a.x+r.y*a.y,e$1=(r,a)=>{var t=x(r)*x(a);if(0===t)return 0;var h=y(r,a)/t;return h>1&&(h=1),Math.acos(h)},n=(r,a)=>r.x*a.y-a.x*r.y,o=r=>r/Math.PI*180,s=(r,a)=>{var t=e$1(r,a);return n(r,a)>0&&(t*=-1),o(t)},u$1=(x,y)=>{if(0!==x||0!==y)return Math.abs(x)>=Math.abs(y)?0<x?i$3:a$2:0<y?d$1:r$4};

    function p$1(){let n=0,e=0;return function(o,r){const{prevVecotr:i,startVecotr:a,activeVecotr:c}=r;return c&&(e=Math.round(s(c,i)),n=Math.round(s(c,a))),{angle:n,deltaAngle:e}}}function d(){return function(t){const{prevInput:e}=t;let o$1=0,r=0,i=0;if(void 0!==e&&(o$1=t.x-e.x,r=t.y-e.y,0!==o$1||0!==r)){const t=Math.sqrt(Math.pow(o$1,2)+Math.pow(r,2));i=Math.round(o(Math.acos(Math.abs(o$1)/t)));}return {deltaX:o$1,deltaY:r,deltaXYAngle:i}}}function h$1(){let t,n=0,u=0,s=0,p=0,d=0;return function(h){const{phase:l,startInput:f}=h;return c$3===l?(n=0,u=0,s=0,p=0,d=0):o$1===l&&(n=Math.round(h.points[0][n$1]-f.points[0][n$1]),u=Math.round(h.points[0][e$2]-f.points[0][e$2]),s=Math.abs(n),p=Math.abs(u),d=Math.round(x({x:s,y:p})),t=u$1(n,u)),{displacementX:n,displacementY:u,distanceX:s,distanceY:p,distance:d,overallDirection:t}}}function l(){let t=1;return function(n,o){let r=1;const{prevVecotr:i,startVecotr:a,activeVecotr:c}=o;return c&&(r=p$3(x(c)/x(i)),t=p$3(x(c)/x(a))),{scale:t,deltaScale:r}}}function f(){let t$1,n,e=0,r=0,i=0,a=0;return function(c){if(void 0!==c){n=n||c.startInput;const u=c.timestamp-n.timestamp;if(t<u){const s=c.x-n.x,p=c.y-n.y;i=Math.round(s/u*100)/100,a=Math.round(p/u*100)/100,e=Math.abs(i),r=Math.abs(a),t$1=u$1(s,p),n=c;}}return {velocityX:e,velocityY:r,speedX:i,speedY:a,direction:t$1}}}function M(){let t=0;return function(n){const{phase:e}=n;return c$3===e&&(t=n.pointLength),{maxPointLength:t}}}function v(t){return {x:t.points[1][n$1]-t.points[0][n$1],y:t.points[1][e$2]-t.points[0][e$2]}}function m$1(){let t,n,e;return function(o){const{prevInput:r,startMultiInput:i}=o;return void 0!==i&&void 0!==r&&o.id!==i.id&&1<r.pointLength&&1<o.pointLength?(t=v(i),n=v(r),e=v(o)):e=void 0,{startVecotr:t,prevVecotr:n,activeVecotr:e}}}

    const m={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250};function r$2(r,s){const c=O(m,s);let p,u,x$1,T=0;function f(){T=0,p=void 0,u=void 0;}return r.compute([h$1,M],(t=>{if(j(c))return;const{phase:i,x:o,y:m}=t;u$3===i&&(c.state=0,!function(){const{startInput:e,pointLength:n,timestamp:a}=t,i=a-e.timestamp,{distance:o,maxPointLength:m}=t;return m===c.pointLength&&0===n&&c.maxDistance>=o&&c.maxPressTime>i}()?(f(),c.state=2):(clearTimeout(x$1),function(t,e){if(void 0!==p){const n=x({x:t.x-p.x,y:t.y-p.y});return p=t,e.maxDistanceFromPrevTap>=n}return p=t,true}({x:o,y:m},c)&&function(t){const e=performance.now();if(void 0===u)return u=e,true;{const n=e-u;return u=e,n<t}}(c.waitNextTapTime)?T++:T=1,0==T%c.tapTimes?(c.state=1,r.emit2(c.name,t,c),f()):x$1=setTimeout((()=>{c.state=2,f();}),c.waitNextTapTime)));})),c}

    const p={name:"pan",threshold:10,pointLength:1};function u(u,d$1){const f$1=O(p,d$1);return u.compute([f,h$1,d],(t=>{if(g$1(f$1),j(f$1))return;const c=function(){const{pointLength:e,distance:n}=t;return f$1.pointLength===e&&f$1.threshold<=n}();if(f$1.state=b(c,f$1.state,t.phase),c||h$3(f$1.state)){const{name:e}=f$1;u.emit2(e,t,f$1),u.emit2(e+v$1(f$1.state),t,f$1),![u$3,s$1].includes(t.phase)&&t.direction&&u.emit2(e+t.direction,t,f$1);}})),f$1}

    const c$1={name:"swipe",threshold:10,velocity:.3,pointLength:1};function a(a,r){const s=O(c$1,r);return a.compute([h$1,f,M],(t=>{if(s.state=0,!s.disabled&&function(){if(u$3!==t.phase)return  false;const{velocityX:o,velocityY:n,distance:i,maxPointLength:c}=t;return c===s.pointLength&&0===t.points.length&&s.threshold<i&&s.velocity<Math.max(o,n)}()){const{name:e}=s;s.state=1,a.emit2(e,t,s),a.emit2(e+t.direction,t,s);}})),s}

    const r$1={name:"press",pointLength:1,maxDistance:9,minPressTime:251};function c(c,u){const p=O(r$1,u);let f=0;return c.compute([h$1],(t=>{if(j(p))return;const{phase:o,startInput:r,pointLength:u}=t;if(c$3===o&&p.pointLength===u)g$1(p),clearTimeout(f),f=setTimeout((()=>{p.state=1,c.emit2(p.name,t,p);}),p.minPressTime);else if(u$3===o&&1===p.state)c.emit2(`${p.name}${r$4}`,t,p);else if(1!==p.state){const e=t.timestamp-r.timestamp;(!function(){const{distance:e}=t;return e&&p.maxDistance>e}()||p.minPressTime>e&&[u$3,s$1].includes(o))&&(clearTimeout(f),p.state=2);}})),p}

    const i$2={name:"pinch",threshold:0,pointLength:2};function r(r,m){const p=O(i$2,m);return r.compute([m$1,l],(t=>{if(g$1(p),j(p))return;const c=function(){const{pointLength:e,scale:n,deltaScale:o,phase:a}=t;return p.pointLength===e&&p.threshold<Math.abs(n-1)}();p.state=b(c,p.state,t.phase);const{name:h}=p;if(c||h$3(p.state)){r.emit2(h,t,p);const{deltaScale:e}=t;1!==e&&r.emit2(h+(1<e?"in":"out"),t,p);}const i=v$1(p.state);i&&r.emit2(h+i,t,p);})),p}

    const h={name:"rotate",threshold:0,pointLength:2};function i$1(i,m){const u=O(h,m);return i.compute([m$1,p$1],(t=>{if(j(u))return;g$1(u);const r=function(){const{pointLength:e,angle:n}=t;return u.pointLength===e&&u.threshold<Math.abs(n)}();u.state=b(r,u.state,t.phase);const{name:c}=u;(r||h$3(u.state))&&i.emit2(c,t,u);const h=v$1(u.state);h&&i.emit2(c+h,t,u);})),u}

    function e(e){e.use(r$2,{name:"doubletap",tapTimes:2});const a=e.get("doubletap");let o;return e.beforeEach(((t,e)=>{"tap"===t?(clearTimeout(o),o=setTimeout((()=>{[0,2].includes(a.state)&&e();}),300)):e();})),a}

    class i extends l$1{constructor(t,u$1){super(t,u$1),this.use(r$2),this.use(u),this.use(a),this.use(c),this.use(r),this.use(i$1);}}i.STATE_POSSIBLE=0,i.STATE_START=4,i.STATE_MOVE=5,i.STATE_END=1,i.STATE_CANCELLED=3,i.STATE_FAILED=2,i.STATE_RECOGNIZED=1,i.tap=r$2,i.pan=u,i.swipe=a,i.press=c,i.rotate=i$1,i.pinch=r,i.doubletap=e;

    class PopsUtils {
        /**
         * 判断是否是window，例如window、self、globalThis
         * @param target
         */
        isWin(target) {
            if (typeof target !== "object") {
                return false;
            }
            if (target instanceof Node) {
                return false;
            }
            if (target === globalThis) {
                return true;
            }
            if (target === window) {
                return true;
            }
            if (target === self) {
                return true;
            }
            if (target === PopsCore.globalThis) {
                return true;
            }
            if (target === PopsCore.window) {
                return true;
            }
            if (target === PopsCore.self) {
                return true;
            }
            if (typeof unsafeWindow !== "undefined" && target === unsafeWindow) {
                return true;
            }
            if (target?.Math?.toString() !== "[object Math]") {
                return false;
            }
            return true;
        }
        isDOM(target) {
            return target instanceof Node;
        }
        /**
         * 删除对象上的属性
         * @param target
         * @param propName
         */
        delete(target, propName) {
            if (typeof Reflect === "object" && typeof Reflect.deleteProperty === "function") {
                Reflect.deleteProperty(target, propName);
            }
            else {
                delete target[propName];
            }
        }
        assign(target = {}, source = {}, isAdd = false) {
            const UtilsContext = this;
            if (Array.isArray(source)) {
                const canTraverse = source.filter((item) => {
                    return typeof item === "object";
                });
                if (!canTraverse.length) {
                    return source;
                }
            }
            if (source == null) {
                return target;
            }
            if (target == null) {
                target = {};
            }
            // 当前遍历的目标对象
            let iteratorTarget;
            if (isAdd) {
                // 追加并覆盖是以source为准
                iteratorTarget = source;
            }
            else {
                // 覆盖以target为准
                iteratorTarget = target;
            }
            for (const keyName in iteratorTarget) {
                if (!isAdd && !(keyName in source)) {
                    // 仅替换 但是源端没有此键
                    continue;
                }
                const targetValue = Reflect.get(target, keyName);
                const sourceValue = Reflect.get(source, keyName);
                if (typeof sourceValue === "object" &&
                    sourceValue != null &&
                    keyName in target &&
                    !UtilsContext.isDOM(sourceValue)) {
                    // 源端的值是object类型，且不是元素节点
                    // 如果是数组，那此数组中有值，清空旧的数组再赋值
                    let childObjectValue;
                    if (Array.isArray(sourceValue)) {
                        if (Array.isArray(targetValue)) {
                            targetValue.length = 0;
                        }
                        childObjectValue = sourceValue;
                    }
                    else {
                        childObjectValue = UtilsContext.assign(targetValue, sourceValue, isAdd);
                    }
                    Reflect.set(target, keyName, childObjectValue);
                }
                else {
                    /* 直接赋值 */
                    Reflect.set(target, keyName, sourceValue);
                }
            }
            return target;
        }
        /**
         * 生成uuid
         */
        getRandomGUID() {
            if (typeof PopsCore.globalThis?.crypto?.randomUUID === "function") {
                return PopsCore.globalThis.crypto.randomUUID();
            }
            else {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (charStr) {
                    const randomValue = (Math.random() * 16) | 0, randomCharValue = charStr === "x" ? randomValue : (randomValue & 0x3) | 0x8;
                    return randomCharValue.toString(16);
                });
            }
        }
        contains(...args) {
            const [context, target] = args;
            if (args.length === 1) {
                // 只判断该页面是否存在该元素
                return this.contains(PopsCore.document.body || PopsCore.document.documentElement, args[0]);
            }
            else {
                if (target == null) {
                    return false;
                }
                if (typeof target[Symbol.iterator] === "function") {
                    // 可遍历的数组
                    let flag = true;
                    for (const targetNode of target) {
                        if (!context.contains(targetNode)) {
                            flag = false;
                            break;
                        }
                    }
                    return flag;
                }
                else {
                    return context.contains(target);
                }
            }
        }
        formatTime(text = new Date(), formatType = "yyyy-MM-dd HH:mm:ss") {
            const time = text == null ? new Date() : new Date(text);
            /**
             * 校验时间补0
             * @param timeNum
             * @returns
             */
            function checkTime(timeNum) {
                if (timeNum < 10)
                    return "0" + timeNum;
                return timeNum;
            }
            /**
             * 时间制修改 24小时制转12小时制
             * @param hourNum 小时
             * @returns
             */
            function timeSystemChange(hourNum) {
                return hourNum > 12 ? hourNum - 12 : hourNum;
            }
            const timeRegexp = {
                yyyy: time.getFullYear(),
                // 年
                MM: checkTime(time.getMonth() + 1),
                // 月
                dd: checkTime(time.getDate()),
                // 日
                HH: checkTime(time.getHours()),
                // 时 (24小时制)
                hh: checkTime(timeSystemChange(time.getHours())),
                // 时 (12小时制)
                mm: checkTime(time.getMinutes()),
                // 分
                ss: checkTime(time.getSeconds()),
                // 秒
            };
            Object.keys(timeRegexp).forEach(function (key) {
                const replaecRegexp = new RegExp(key, "g");
                formatType = formatType.replace(replaecRegexp, timeRegexp[key]);
            });
            return formatType;
        }
        formatByteToSize(byteSize, addType = true) {
            byteSize = parseInt(byteSize.toString());
            if (isNaN(byteSize)) {
                throw new TypeError("Utils.formatByteToSize 参数 byteSize 格式不正确");
            }
            let result = 0;
            let resultType = "KB";
            const sizeData = {};
            sizeData.B = 1;
            sizeData.KB = 1024;
            sizeData.MB = sizeData.KB * sizeData.KB;
            sizeData.GB = sizeData.MB * sizeData.KB;
            sizeData.TB = sizeData.GB * sizeData.KB;
            sizeData.PB = sizeData.TB * sizeData.KB;
            sizeData.EB = sizeData.PB * sizeData.KB;
            sizeData.ZB = sizeData.EB * sizeData.KB;
            sizeData.YB = sizeData.ZB * sizeData.KB;
            sizeData.BB = sizeData.YB * sizeData.KB;
            sizeData.NB = sizeData.BB * sizeData.KB;
            sizeData.DB = sizeData.NB * sizeData.KB;
            for (const key in sizeData) {
                result = byteSize / sizeData[key];
                resultType = key;
                if (sizeData.KB >= result) {
                    break;
                }
            }
            result = result.toFixed(2);
            result = addType ? result + resultType.toString() : parseFloat(result.toString());
            return result;
        }
        AnyTouch = () => {
            return i;
        };
        /**
         * 通过navigator.userAgent判断是否是手机访问
         * @param userAgent
         */
        isPhone(userAgent = PopsCore.globalThis.navigator.userAgent) {
            return Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(userAgent));
        }
        /**
         * 自动使用 Worker 执行 setTimeout
         */
        setTimeout(callback, timeout = 0) {
            try {
                return setTimeout$1(callback, timeout);
            }
            catch {
                return setTimeout(callback, timeout);
            }
        }
        /**
         * 配合 .setTimeout 使用
         */
        clearTimeout(timeId) {
            try {
                if (timeId != null) {
                    clearTimeout$1(timeId);
                }
            }
            catch {
                // TODO
            }
            finally {
                clearTimeout(timeId);
            }
        }
        /**
         * 自动使用 Worker 执行 setInterval
         */
        setInterval(callback, timeout = 0) {
            try {
                return setInterval$1(callback, timeout);
            }
            catch {
                return setInterval(callback, timeout);
            }
        }
        /**
         * 配合 .setInterval 使用
         */
        clearInterval(timeId) {
            try {
                if (timeId != null) {
                    clearInterval$1(timeId);
                }
            }
            catch {
                // 忽略
            }
            finally {
                clearInterval(timeId);
            }
        }
        /**
         * 覆盖对象中的数组新值
         */
        setArray(target, key, newArr) {
            if (target == null)
                return;
            if (!Array.isArray(newArr))
                return;
            const arr = target[key];
            if (Array.isArray(target[key])) {
                arr.length = 0;
            }
            else {
                target[key] = [];
            }
            target[key] = newArr;
        }
    }
    const popsUtils = new PopsUtils();

    const PopsSafeUtils = {
        /**
         * 获取安全的html
         */
        getSafeHTML(text) {
            if (window.trustedTypes) {
                const policy = window.trustedTypes.createPolicy("safe-innerHTML", {
                    createHTML: (html) => html,
                });
                return policy.createHTML(text);
            }
            else {
                return text;
            }
        },
        /**
         * 设置安全的html
         */
        setSafeHTML($el, text) {
            // 创建 TrustedHTML 策略（需 CSP 允许）
            $el.innerHTML = this.getSafeHTML(text);
        },
    };

    /**
     * 通用的CSS类名
     */
    const PopsCommonCSSClassName = {
        flexCenter: "pops-flex-items-center",
        flexYCenter: "pops-flex-y-center",
        hide: "pops-hide",
        hideImportant: "pops-hide-important",
        userSelectNone: "pops-user-select-none",
        textIsDisabled: "pops-text-is-disabled"};

    class PopsDOMUtilsEvent {
        on(element, eventType, selector, callback, option) {
            /**
             * 获取option配置
             * @param args
             * @param startIndex
             * @param option
             */
            function getOption(args, startIndex, option) {
                const currentParam = args[startIndex];
                if (typeof currentParam === "boolean") {
                    option.capture = currentParam;
                    if (typeof args[startIndex + 1] === "boolean") {
                        option.once = args[startIndex + 1];
                    }
                    if (typeof args[startIndex + 2] === "boolean") {
                        option.passive = args[startIndex + 2];
                    }
                }
                else if (typeof currentParam === "object" &&
                    ("capture" in currentParam ||
                        "once" in currentParam ||
                        "passive" in currentParam ||
                        "isComposedPath" in currentParam)) {
                    option.capture = currentParam.capture;
                    option.once = currentParam.once;
                    option.passive = currentParam.passive;
                    option.isComposedPath = currentParam.isComposedPath;
                }
                return option;
            }
            const that = this;
            // eslint-disable-next-line prefer-rest-params
            const args = arguments;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return {
                    off() { },
                    emit() { },
                };
            }
            let $elList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                $elList = [...element];
            }
            else {
                $elList.push(element);
            }
            // 事件名
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType.filter((eventTypeItem) => typeof eventTypeItem === "string" && eventTypeItem.toString() !== ""));
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" ").filter((eventTypeItem) => eventTypeItem !== ""));
            }
            // 子元素选择器
            let selectorList = [];
            if (Array.isArray(selector)) {
                selectorList = selectorList.concat(selector.filter((selectorItem) => typeof selectorItem === "string" && selectorItem.toString() !== ""));
            }
            else if (typeof selector === "string") {
                selectorList.push(selector);
            }
            // 事件回调
            let listenerCallBack = callback;
            // 事件配置
            let listenerOption = {
                capture: false,
                once: false,
                passive: false,
                isComposedPath: false,
            };
            if (typeof selector === "function") {
                // 这是为没有selector的情况
                // 那么它就是callback
                listenerCallBack = selector;
                listenerOption = getOption(args, 3, listenerOption);
            }
            else {
                // 这是存在selector的情况
                listenerOption = getOption(args, 4, listenerOption);
            }
            /**
             * 如果是once，那么删除该监听和元素上的事件和监听
             */
            function checkOptionOnceToRemoveEventListener() {
                if (listenerOption.once) {
                    that.off(element, eventType, selector, callback, option);
                }
            }
            $elList.forEach((elementItem) => {
                /**
                 * 事件回调
                 * @param event
                 */
                function domUtilsEventCallBack(event) {
                    if (selectorList.length) {
                        // 存在子元素选择器
                        // 这时候的this和target都是子元素选择器的元素
                        let eventTarget = listenerOption.isComposedPath
                            ? event.composedPath()[0]
                            : event.target;
                        let totalParent = elementItem;
                        if (popsUtils.isWin(totalParent)) {
                            if (totalParent === PopsCore.document) {
                                totalParent = PopsCore.document.documentElement;
                            }
                        }
                        const findValue = selectorList.find((selectorItem) => {
                            // 判断目标元素是否匹配选择器
                            if (that.matches(eventTarget, selectorItem)) {
                                // 当前目标可以被selector所匹配到
                                return true;
                            }
                            // 在上层与主元素之间寻找可以被selector所匹配到的
                            const $closestMatches = that.closest(eventTarget, selectorItem);
                            if ($closestMatches && totalParent?.contains($closestMatches)) {
                                eventTarget = $closestMatches;
                                return true;
                            }
                            return false;
                        });
                        if (findValue) {
                            // 这里尝试使用defineProperty修改event的target值
                            try {
                                OriginPrototype.Object.defineProperty(event, "target", {
                                    get() {
                                        return eventTarget;
                                    },
                                });
                            }
                            catch {
                                // 忽略
                            }
                            listenerCallBack.call(eventTarget, event, eventTarget);
                            checkOptionOnceToRemoveEventListener();
                        }
                    }
                    else {
                        // 这时候的this指向监听的元素
                        listenerCallBack.call(elementItem, event);
                        checkOptionOnceToRemoveEventListener();
                    }
                }
                // 遍历事件名设置元素事件
                eventTypeList.forEach((eventName) => {
                    elementItem.addEventListener(eventName, domUtilsEventCallBack, listenerOption);
                    // 获取对象上的事件
                    const elementEvents = Reflect.get(elementItem, SymbolEvents) || {};
                    // 初始化对象上的xx事件
                    elementEvents[eventName] = elementEvents[eventName] || [];
                    elementEvents[eventName].push({
                        selector: selectorList,
                        option: listenerOption,
                        callback: domUtilsEventCallBack,
                        originCallBack: listenerCallBack,
                    });
                    // 覆盖事件
                    Reflect.set(elementItem, SymbolEvents, elementEvents);
                });
            });
            return {
                /**
                 * 取消绑定的监听事件
                 * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
                 */
                off: (filter) => {
                    that.off($elList, eventTypeList, selectorList, listenerCallBack, listenerOption, filter);
                },
                /**
                 * 主动触发事件
                 * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
                 * @param useDispatchToEmit 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
                 */
                emit: (details, useDispatchToEmit) => {
                    that.emit($elList, eventTypeList, details, useDispatchToEmit);
                },
            };
        }
        off(element, eventType, selector, callback, option, filter) {
            /**
             * 获取option配置
             * @param args1
             * @param startIndex
             * @param option
             */
            function getOption(args1, startIndex, option) {
                const currentParam = args1[startIndex];
                if (typeof currentParam === "boolean") {
                    option.capture = currentParam;
                }
                else if (typeof currentParam === "object" && currentParam != null && "capture" in currentParam) {
                    option.capture = currentParam.capture;
                }
                return option;
            }
            const DOMUtilsContext = this;
            // eslint-disable-next-line prefer-rest-params
            const args = arguments;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            let $elList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                $elList = $elList.concat(element);
            }
            else {
                $elList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType.filter((eventTypeItem) => typeof eventTypeItem === "string" && eventTypeItem.toString() !== ""));
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" ").filter((eventTypeItem) => eventTypeItem !== ""));
            }
            // 子元素选择器
            let selectorList = [];
            if (Array.isArray(selector)) {
                selectorList = selectorList.concat(selector.filter((selectorItem) => typeof selectorItem === "string" && selectorItem.toString() !== ""));
            }
            else if (typeof selector === "string") {
                selectorList.push(selector);
            }
            /**
             * 事件的回调函数
             */
            let listenerCallBack = callback;
            /**
             * 事件的配置
             */
            let listenerOption = {
                capture: false,
            };
            if (typeof selector === "function") {
                // 这是为没有selector的情况
                // 那么它就是callback
                listenerCallBack = selector;
                listenerOption = getOption(args, 3, listenerOption);
            }
            else {
                // 这是存在selector的情况
                listenerOption = getOption(args, 4, listenerOption);
            }
            // 是否移除所有事件
            let isRemoveAll = false;
            if (args.length === 2) {
                // 目标函数、事件名
                isRemoveAll = true;
            }
            else if ((args.length === 3 && typeof args[2] === "string") || Array.isArray(args[2])) {
                // 目标函数、事件名、子元素选择器
                isRemoveAll = true;
            }
            if (args.length === 5 && typeof args[4] === "function" && typeof filter !== "function") {
                // 目标函数、事件名、回调函数、事件配置、过滤函数
                filter = option;
            }
            $elList.forEach((elementItem) => {
                // 获取对象上的事件
                const elementEvents = Reflect.get(elementItem, SymbolEvents) || {};
                eventTypeList.forEach((eventName) => {
                    const handlers = elementEvents[eventName] || [];
                    const filterHandler = typeof filter === "function" ? handlers.filter(filter) : handlers;
                    for (let index = 0; index < filterHandler.length; index++) {
                        const handler = filterHandler[index];
                        let flag = true;
                        if (flag && listenerCallBack && handler.originCallBack !== listenerCallBack) {
                            // callback不同
                            flag = false;
                        }
                        if (flag && selectorList.length && Array.isArray(handler.selector)) {
                            if (JSON.stringify(handler.selector) !== JSON.stringify(selectorList)) {
                                // 子元素选择器不同
                                flag = false;
                            }
                        }
                        if (flag &&
                            typeof handler.option.capture === "boolean" &&
                            listenerOption.capture !== handler.option.capture) {
                            // 事件的配置项不同
                            flag = false;
                        }
                        if (flag || isRemoveAll) {
                            elementItem.removeEventListener(eventName, handler.callback, handler.option);
                            const findIndex = handlers.findIndex((item) => item === handler);
                            if (findIndex !== -1) {
                                handlers.splice(findIndex, 1);
                            }
                        }
                    }
                    if (handlers.length === 0) {
                        // 如果没有任意的handler，那么删除该属性
                        popsUtils.delete(elementEvents, eventType);
                    }
                });
                Reflect.set(elementItem, SymbolEvents, elementEvents);
            });
        }
        /**
         * 取消绑定所有的事件
         * @param element 需要取消绑定的元素|元素数组
         * @param eventType （可选）需要取消监听的事件
         */
        offAll(element, eventType) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            let $elList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                $elList = $elList.concat(Array.from(element));
            }
            else {
                $elList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            $elList.forEach(($elItem) => {
                const symbolList = [...new Set([...Object.getOwnPropertySymbols($elItem), SymbolEvents])];
                symbolList.forEach((symbolItem) => {
                    if (!symbolItem.toString().startsWith("Symbol(events_")) {
                        return;
                    }
                    const elementEvents = Reflect.get($elItem, symbolItem) || {};
                    const iterEventNameList = eventTypeList.length ? eventTypeList : Object.keys(elementEvents);
                    iterEventNameList.forEach((eventName) => {
                        const handlers = elementEvents[eventName];
                        if (!handlers) {
                            return;
                        }
                        for (const handler of handlers) {
                            $elItem.removeEventListener(eventName, handler.callback, {
                                capture: handler["option"]["capture"],
                            });
                        }
                        const events = Reflect.get($elItem, symbolItem);
                        popsUtils.delete(events, eventName);
                    });
                });
            });
        }
        /**
         * 等待文档加载完成后执行指定的函数
         * @param callback 需要执行的函数
         * @example
         * DOMUtils.onReady(function(){
         *   console.log("文档加载完毕")
         * })
         */
        onReady(callback) {
            const that = this;
            if (typeof callback !== "function") {
                return;
            }
            /**
             * 检测文档是否加载完毕
             */
            function checkDOMReadyState() {
                try {
                    if (document.readyState === "complete" ||
                        (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                catch {
                    return false;
                }
            }
            /**
             * 成功加载完毕后触发的回调函数
             */
            function completed() {
                removeDomReadyListener();
                callback();
            }
            const targetList = [
                {
                    target: PopsCore.document,
                    eventType: "DOMContentLoaded",
                    callback: completed,
                },
                {
                    target: PopsCore.window,
                    eventType: "load",
                    callback: completed,
                },
            ];
            /**
             * 添加监听
             */
            function addDomReadyListener() {
                for (let index = 0; index < targetList.length; index++) {
                    const item = targetList[index];
                    that.on(item.target, item.eventType, item.callback);
                }
            }
            /**
             * 移除监听
             */
            function removeDomReadyListener() {
                for (let index = 0; index < targetList.length; index++) {
                    const item = targetList[index];
                    that.off(item.target, item.eventType, item.callback);
                }
            }
            if (checkDOMReadyState()) {
                // 检查document状态
                popsUtils.setTimeout(callback, 0);
            }
            else {
                // 添加监听
                addDomReadyListener();
            }
        }
        /**
         * 主动触发事件
         * @param element 需要触发的元素|元素数组|window
         * @param eventType 需要触发的事件
         * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
         * @param useDispatchToEmitEvent 是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的click事件
         * DOMUtils.emit(document.querySelector("a.xx"),"click")
         * DOMUtils.emit("a.xx","click")
         * // 触发元素a.xx的click、tap、hover事件
         * DOMUtils.emit(document.querySelector("a.xx"),"click tap hover")
         * DOMUtils.emit("a.xx",["click","tap","hover"])
         */
        emit(element, eventType, details, useDispatchToEmitEvent = true) {
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                elementList = [...element];
            }
            else {
                elementList = [element];
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventType;
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventType.split(" ");
            }
            elementList.forEach((elementItem) => {
                // 获取对象上的事件
                const events = elementItem[SymbolEvents] || {};
                eventTypeList.forEach((_eventType_) => {
                    let event = null;
                    if (details && details instanceof Event) {
                        event = details;
                    }
                    else {
                        event = new Event(_eventType_);
                        if (details) {
                            Object.keys(details).forEach((keyName) => {
                                event[keyName] = details[keyName];
                            });
                        }
                    }
                    if (useDispatchToEmitEvent == false && _eventType_ in events) {
                        events[_eventType_].forEach((eventsItem) => {
                            eventsItem.callback(event);
                        });
                    }
                    else {
                        elementItem.dispatchEvent(event);
                    }
                });
            });
        }
        /**
         * 绑定或触发元素的click事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToEmitEvent （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的click事件
         * DOMUtils.click(document.querySelector("a.xx"))
         * DOMUtils.click("a.xx")
         * DOMUtils.click("a.xx"，function(){
         *  console.log("触发click事件成功")
         * })
         * */
        click(element, handler, details, useDispatchToEmitEvent) {
            const DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler == null) {
                DOMUtilsContext.emit(element, "click", details, useDispatchToEmitEvent);
            }
            else {
                DOMUtilsContext.on(element, "click", null, handler);
            }
        }
        /**
         * 绑定或触发元素的blur事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToEmitEvent （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的blur事件
         * DOMUtils.blur(document.querySelector("a.xx"))
         * DOMUtils.blur("a.xx")
         * DOMUtils.blur("a.xx"，function(){
         *  console.log("触发blur事件成功")
         * })
         * */
        blur(element, handler, details, useDispatchToEmitEvent) {
            const DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler === null) {
                DOMUtilsContext.emit(element, "blur", details, useDispatchToEmitEvent);
            }
            else {
                DOMUtilsContext.on(element, "blur", null, handler);
            }
        }
        /**
         * 绑定或触发元素的focus事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToEmitEvent （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的focus事件
         * DOMUtils.focus(document.querySelector("a.xx"))
         * DOMUtils.focus("a.xx")
         * DOMUtils.focus("a.xx"，function(){
         *  console.log("触发focus事件成功")
         * })
         * */
        focus(element, handler, details, useDispatchToEmitEvent) {
            const DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler == null) {
                DOMUtilsContext.emit(element, "focus", details, useDispatchToEmitEvent);
            }
            else {
                DOMUtilsContext.on(element, "focus", null, handler);
            }
        }
        /**
         * 当鼠标移入或移出元素时触发事件
         * @param element 当前元素
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的移入或移出
         * DOMUtils.hover(document.querySelector("a.xx"),()=>{
         *   console.log("移入/移除");
         * })
         * DOMUtils.hover("a.xx",()=>{
         *   console.log("移入/移除");
         * })
         */
        onHover(element, handler, option) {
            const DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            DOMUtilsContext.on(element, "mouseenter", null, handler, option);
            DOMUtilsContext.on(element, "mouseleave", null, handler, option);
        }
        /**
         * 当按键松开时触发事件
         * keydown - > keypress - > keyup
         * @param target 当前元素
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的按键松开
         * DOMUtils.keyup(document.querySelector("a.xx"),()=>{
         *   console.log("按键松开");
         * })
         * DOMUtils.keyup("a.xx",()=>{
         *   console.log("按键松开");
         * })
         */
        onKeyup(target, handler, option) {
            const DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = PopsCore.document.querySelector(target);
            }
            DOMUtilsContext.on(target, "keyup", null, handler, option);
        }
        /**
         * 当按键按下时触发事件
         * keydown - > keypress - > keyup
         * @param target 目标
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的按键按下
         * DOMUtils.keydown(document.querySelector("a.xx"),()=>{
         *   console.log("按键按下");
         * })
         * DOMUtils.keydown("a.xx",()=>{
         *   console.log("按键按下");
         * })
         */
        onKeydown(target, handler, option) {
            const DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = PopsCore.document.querySelector(target);
            }
            DOMUtilsContext.on(target, "keydown", null, handler, option);
        }
        /**
         * 当按键按下时触发事件
         * keydown - > keypress - > keyup
         * @param target 目标
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的按键按下
         * DOMUtils.keypress(document.querySelector("a.xx"),()=>{
         *   console.log("按键按下");
         * })
         * DOMUtils.keypress("a.xx",()=>{
         *   console.log("按键按下");
         * })
         */
        onKeypress(target, handler, option) {
            const DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = PopsCore.document.querySelector(target);
            }
            DOMUtilsContext.on(target, "keypress", null, handler, option);
        }
        preventEvent(element, eventNameList = [], capture) {
            function stopEvent(event) {
                // 阻止事件的默认行为发生。例如，当点击一个链接时，浏览器会默认打开链接的URL
                event?.preventDefault();
                // 停止事件的传播，阻止它继续向更上层的元素冒泡，事件将不会再传播给其他的元素
                event?.stopPropagation();
                // 阻止事件传播，并且还能阻止元素上的其他事件处理程序被触发
                event?.stopImmediatePropagation();
                return false;
            }
            if (arguments.length === 1) {
                // 直接阻止事件
                // eslint-disable-next-line prefer-rest-params
                return stopEvent(arguments[0]);
            }
            else {
                // 添加对应的事件来阻止触发
                if (typeof eventNameList === "string") {
                    eventNameList = [eventNameList];
                }
                eventNameList.forEach((eventName) => {
                    this.on(element, eventName, stopEvent, { capture: Boolean(capture) });
                });
            }
        }
        selector(selector) {
            return this.selectorAll(selector)[0];
        }
        selectorAll(selector) {
            selector = selector.trim();
            if (selector.match(/[^\s]{1}:empty$/gi)) {
                // empty 语法
                selector = selector.replace(/:empty$/gi, "");
                return Array.from(PopsCore.document.querySelectorAll(selector)).filter(($ele) => {
                    return $ele?.innerHTML?.trim() === "";
                });
            }
            else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
                // contains 语法
                const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
                const text = textMatch[2];
                selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
                return Array.from(PopsCore.document.querySelectorAll(selector)).filter(($ele) => {
                    return ($ele?.textContent || $ele?.innerText)?.includes(text);
                });
            }
            else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
                // regexp 语法
                const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
                let pattern = textMatch[2];
                const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
                let flags = "";
                if (flagMatch) {
                    pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
                    flags = flagMatch[3];
                }
                const regexp = new RegExp(pattern, flags);
                selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
                return Array.from(PopsCore.document.querySelectorAll(selector)).filter(($ele) => {
                    return Boolean(($ele?.textContent || $ele?.innerText)?.match(regexp));
                });
            }
            else {
                // 普通语法
                return Array.from(PopsCore.document.querySelectorAll(selector));
            }
        }
        /**
         * 匹配元素，可使用以下的额外语法
         *
         * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
         * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
         * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
         * @param $el 元素
         * @param selector 选择器
         * @example
         * DOMUtils.matches("div:contains('测试')")
         * > true
         * @example
         * DOMUtils.matches("div:empty")
         * > true
         * @example
         * DOMUtils.matches("div:regexp('^xxxx$')")
         * > true
         * @example
         * DOMUtils.matches("div:regexp(/^xxx/ig)")
         * > false
         */
        matches($el, selector) {
            selector = selector.trim();
            if ($el == null) {
                return false;
            }
            if (selector.match(/[^\s]{1}:empty$/gi)) {
                // empty 语法
                selector = selector.replace(/:empty$/gi, "");
                return $el.matches(selector) && $el?.innerHTML?.trim() === "";
            }
            else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
                // contains 语法
                const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
                const text = textMatch[2];
                selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
                let content = $el?.textContent || $el?.innerText;
                if (typeof content !== "string") {
                    content = "";
                }
                return $el.matches(selector) && content?.includes(text);
            }
            else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
                // regexp 语法
                const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
                let pattern = textMatch[2];
                const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
                let flags = "";
                if (flagMatch) {
                    pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
                    flags = flagMatch[3];
                }
                const regexp = new RegExp(pattern, flags);
                selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
                let content = $el?.textContent || $el?.innerText;
                if (typeof content !== "string") {
                    content = "";
                }
                return $el.matches(selector) && Boolean(content?.match(regexp));
            }
            else {
                // 普通语法
                return $el.matches(selector);
            }
        }
        closest($el, selector) {
            selector = selector.trim();
            if (selector.match(/[^\s]{1}:empty$/gi)) {
                // empty 语法
                selector = selector.replace(/:empty$/gi, "");
                const $closest = $el?.closest(selector);
                if ($closest && $closest?.innerHTML?.trim() === "") {
                    return $closest;
                }
                return null;
            }
            else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
                // contains 语法
                const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
                const text = textMatch[2];
                selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
                const $closest = $el?.closest(selector);
                if ($closest) {
                    const content = $el?.textContent || $el?.innerText;
                    if (typeof content === "string" && content.includes(text)) {
                        return $closest;
                    }
                }
                return null;
            }
            else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
                // regexp 语法
                const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
                let pattern = textMatch[2];
                const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
                let flags = "";
                if (flagMatch) {
                    pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
                    flags = flagMatch[3];
                }
                const regexp = new RegExp(pattern, flags);
                selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
                const $closest = $el?.closest(selector);
                if ($closest) {
                    const content = $el?.textContent || $el?.innerText;
                    if (typeof content === "string" && content.match(regexp)) {
                        return $closest;
                    }
                }
                return null;
            }
            else {
                // 普通语法
                const $closest = $el?.closest(selector);
                return $closest;
            }
        }
    }
    class PopsDOMUtils extends PopsDOMUtilsEvent {
        /** 获取 animationend 在各个浏览器的兼容名 */
        getAnimationEndNameList() {
            return ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"];
        }
        /** 获取 transitionend 在各个浏览器的兼容名 */
        getTransitionEndNameList() {
            return ["webkitTransitionEnd", "mozTransitionEnd", "MSTransitionEnd", "otransitionend", "transitionend"];
        }
        /**
         * 实现jQuery中的$().offset();
         * @param element
         * @param calcScroll 计算滚动距离
         */
        offset(element, calcScroll = true) {
            const rect = element.getBoundingClientRect();
            const win = element.ownerDocument.defaultView;
            const resultRect = new DOMRect(calcScroll ? parseFloat((rect.left + (win?.pageXOffset || 0)).toString()) : rect.left, calcScroll ? parseFloat((rect.top + (win?.pageYOffset || 0)).toString()) : rect.top, rect.width, rect.height);
            return resultRect;
        }
        width(element, isShow = false, parent) {
            const DOMUtilsContext = this;
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (popsUtils.isWin(element)) {
                return PopsCore.window.document.documentElement.clientWidth;
            }
            if (element.nodeType === 9) {
                // Document文档节点
                element = element;
                return Math.max(element.body.scrollWidth, element.documentElement.scrollWidth, element.body.offsetWidth, element.documentElement.offsetWidth, element.documentElement.clientWidth);
            }
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                // 已显示
                // 不从style中获取对应的宽度，因为可能使用了class定义了width !important
                element = element;
                // 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width
                if (parseFloat(popsDOMUtils.getStyleValue(element, "width").toString()) > 0) {
                    return parseFloat(popsDOMUtils.getStyleValue(element, "width").toString());
                }
                // 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算
                if (element.offsetWidth > 0) {
                    const borderLeftWidth = popsDOMUtils.getStyleValue(element, "borderLeftWidth");
                    const borderRightWidth = popsDOMUtils.getStyleValue(element, "borderRightWidth");
                    const paddingLeft = popsDOMUtils.getStyleValue(element, "paddingLeft");
                    const paddingRight = popsDOMUtils.getStyleValue(element, "paddingRight");
                    const backHeight = parseFloat(element.offsetWidth.toString()) -
                        parseFloat(borderLeftWidth.toString()) -
                        parseFloat(borderRightWidth.toString()) -
                        parseFloat(paddingLeft.toString()) -
                        parseFloat(paddingRight.toString());
                    return parseFloat(backHeight.toString());
                }
                return 0;
            }
            else {
                // 未显示
                element = element;
                const { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
                const width = DOMUtilsContext.width(cloneNode, true, parent);
                recovery();
                return width;
            }
        }
        height(element, isShow = false, parent) {
            const DOMUtilsContext = this;
            if (popsUtils.isWin(element)) {
                return PopsCore.window.document.documentElement.clientHeight;
            }
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (element.nodeType === 9) {
                element = element;
                // Document文档节点
                return Math.max(element.body.scrollHeight, element.documentElement.scrollHeight, element.body.offsetHeight, element.documentElement.offsetHeight, element.documentElement.clientHeight);
            }
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                element = element;
                // 已显示
                // 从style中获取对应的高度，因为可能使用了class定义了width !important
                // 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height
                if (parseFloat(popsDOMUtils.getStyleValue(element, "height").toString()) > 0) {
                    return parseFloat(popsDOMUtils.getStyleValue(element, "height").toString());
                }
                // 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算
                if (element.offsetHeight > 0) {
                    const borderTopWidth = popsDOMUtils.getStyleValue(element, "borderTopWidth");
                    const borderBottomWidth = popsDOMUtils.getStyleValue(element, "borderBottomWidth");
                    const paddingTop = popsDOMUtils.getStyleValue(element, "paddingTop");
                    const paddingBottom = popsDOMUtils.getStyleValue(element, "paddingBottom");
                    const backHeight = parseFloat(element.offsetHeight.toString()) -
                        parseFloat(borderTopWidth.toString()) -
                        parseFloat(borderBottomWidth.toString()) -
                        parseFloat(paddingTop.toString()) -
                        parseFloat(paddingBottom.toString());
                    return parseFloat(backHeight.toString());
                }
                return 0;
            }
            else {
                // 未显示
                element = element;
                const { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
                const height = DOMUtilsContext.height(cloneNode, true, parent);
                recovery();
                return height;
            }
        }
        outerWidth(element, isShow = false, parent) {
            const DOMUtilsContext = this;
            if (popsUtils.isWin(element)) {
                return PopsCore.window.innerWidth;
            }
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            element = element;
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                const style = getComputedStyle(element, null);
                const marginLeft = popsDOMUtils.getStyleValue(style, "marginLeft");
                const marginRight = popsDOMUtils.getStyleValue(style, "marginRight");
                return element.offsetWidth + marginLeft + marginRight;
            }
            else {
                const { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
                const outerWidth = DOMUtilsContext.outerWidth(cloneNode, true, parent);
                recovery();
                return outerWidth;
            }
        }
        outerHeight(element, isShow = false, parent) {
            const DOMUtilsContext = this;
            if (popsUtils.isWin(element)) {
                return PopsCore.window.innerHeight;
            }
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            element = element;
            if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
                const style = getComputedStyle(element, null);
                const marginTop = popsDOMUtils.getStyleValue(style, "marginTop");
                const marginBottom = popsDOMUtils.getStyleValue(style, "marginBottom");
                return element.offsetHeight + marginTop + marginBottom;
            }
            else {
                const { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
                const outerHeight = DOMUtilsContext.outerHeight(cloneNode, true, parent);
                recovery();
                return outerHeight;
            }
        }
        /**
         * 添加className
         * @param $el 目标元素
         * @param className className属性
         */
        addClassName($el, className) {
            if ($el == null)
                return;
            if (className == null)
                return;
            if (typeof className === "function") {
                className = className();
            }
            if (!Array.isArray(className)) {
                className = [className];
            }
            className.forEach((classNameStrItem) => {
                if (typeof classNameStrItem !== "string") {
                    // 不是字符串
                    return;
                }
                if (classNameStrItem.trim() === "") {
                    // 空字符串
                    return;
                }
                const classNameList = classNameStrItem.split(" ").filter((item) => item.trim() !== "");
                $el?.classList?.add?.(...classNameList);
            });
        }
        /**
         * 删除className
         * @param $el 目标元素
         * @param className className属性
         */
        removeClassName($el, className) {
            if ($el == null) {
                return;
            }
            if (typeof className !== "string") {
                return;
            }
            if (className.trim() === "") {
                return;
            }
            const classNameList = className.split(" ").filter((item) => item.trim() !== "");
            $el.classList.remove(...classNameList);
        }
        /**
         * 判断元素是否包含某个className
         * @param $el 目标元素
         * @param className className属性
         */
        containsClassName($el, className) {
            if ($el == null) {
                return false;
            }
            if (typeof className !== "string") {
                return false;
            }
            if (className.trim() === "") {
                return false;
            }
            return $el.classList.contains(className);
        }
        css($el, property, value) {
            const that = this;
            /**
             * 把纯数字没有px的加上
             */
            function handlePixe(propertyName, propertyValue) {
                const allowAddPixe = ["width", "height", "top", "left", "right", "bottom", "font-size"];
                if (typeof propertyValue === "number") {
                    propertyValue = propertyValue.toString();
                }
                if (typeof propertyValue === "string" && allowAddPixe.includes(propertyName) && propertyValue.match(/[0-9]$/gi)) {
                    propertyValue = propertyValue + "px";
                }
                return propertyValue;
            }
            if (typeof $el === "string") {
                $el = that.selectorAll($el);
            }
            if ($el == null) {
                return;
            }
            if (Array.isArray($el) || $el instanceof NodeList) {
                if (typeof property === "string") {
                    if (value == null) {
                        // 获取属性
                        return that.css($el[0], property);
                    }
                    else {
                        // 设置属性
                        $el.forEach(($elItem) => {
                            that.css($elItem, property);
                        });
                        return;
                    }
                }
                else if (typeof property === "object") {
                    // 设置属性
                    $el.forEach(($elItem) => {
                        that.css($elItem, property);
                    });
                    return;
                }
                return;
            }
            const setStyleProperty = (propertyName, propertyValue) => {
                if (typeof propertyValue === "string" && propertyValue.trim().endsWith("!important")) {
                    propertyValue = propertyValue
                        .trim()
                        .replace(/!important$/gi, "")
                        .trim();
                    $el.style.setProperty(propertyName, propertyValue, "important");
                }
                else {
                    propertyValue = handlePixe(propertyName, propertyValue);
                    $el.style.setProperty(propertyName, propertyValue);
                }
            };
            if (typeof property === "string") {
                if (value == null) {
                    return PopsCore.globalThis.getComputedStyle($el).getPropertyValue(property);
                }
                else {
                    setStyleProperty(property, value);
                }
            }
            else if (typeof property === "object") {
                for (const prop in property) {
                    const value = property[prop];
                    setStyleProperty(prop, value);
                }
            }
            else {
                // 其他情况
                throw new TypeError("property must be string or object");
            }
        }
        /**
         * 创建元素
         * @param tagName 标签名
         * @param property 属性
         * @param attributes 元素上的自定义属性
         * @example
         * // 创建一个DIV元素，且属性class为xxx
         * DOMUtils.createElement("div",undefined,{ class:"xxx" });
         * > <div class="xxx"></div>
         * @example
         * // 创建一个DIV元素
         * DOMUtils.createElement("div");
         * > <div></div>
         * @example
         * // 创建一个DIV元素
         * DOMUtils.createElement("div","测试");
         * > <div>测试</div>
         */
        createElement(
        /** 元素名 */
        tagName, 
        /** 属性 */
        property, 
        /** 自定义属性 */
        attributes) {
            const $temp = PopsCore.document.createElement(tagName);
            if (typeof property === "string") {
                PopsSafeUtils.setSafeHTML($temp, property);
                return $temp;
            }
            if (property == null) {
                property = {};
            }
            if (attributes == null) {
                attributes = {};
            }
            Object.keys(property).forEach((key) => {
                const value = property[key];
                if (key === "innerHTML") {
                    PopsSafeUtils.setSafeHTML($temp, value);
                    return;
                }
                Reflect.set($temp, key, value);
            });
            Object.keys(attributes).forEach((key) => {
                let value = attributes[key];
                if (typeof value === "object") {
                    // object转字符串
                    value = JSON.stringify(value);
                }
                else if (typeof value === "function") {
                    // function转字符串
                    value = value.toString();
                }
                $temp.setAttribute(key, value);
            });
            return $temp;
        }
        /**
         * 字符串转HTMLElement
         * @param elementString
         * @returns
         */
        parseTextToDOM(elementString) {
            // 去除前后的换行和空格
            elementString = elementString.replace(/^[\n|\s]*/g, "").replace(/[\n|\s]*$/g, "");
            const targetElement = this.createElement("div", {
                innerHTML: elementString,
            });
            return targetElement.firstChild;
        }
        /**
         * 获取文字的位置信息
         * @param input 输入框
         * @param selectionStart 起始位置
         * @param selectionEnd 结束位置
         * @param debug 是否是调试模式
         * + true 不删除临时节点元素
         * + false 删除临时节点元素
         */
        getTextBoundingRect(input, selectionStart, selectionEnd, debug) {
            // Basic parameter validation
            if (!input || !("value" in input))
                return input;
            if (typeof selectionStart == "string")
                selectionStart = parseFloat(selectionStart);
            if (typeof selectionStart != "number" || isNaN(selectionStart)) {
                selectionStart = 0;
            }
            if (selectionStart < 0)
                selectionStart = 0;
            else
                selectionStart = Math.min(input.value.length, selectionStart);
            if (typeof selectionEnd == "string")
                selectionEnd = parseFloat(selectionEnd);
            if (typeof selectionEnd != "number" || isNaN(selectionEnd) || selectionEnd < selectionStart) {
                selectionEnd = selectionStart;
            }
            if (selectionEnd < 0)
                selectionEnd = 0;
            else
                selectionEnd = Math.min(input.value.length, selectionEnd);
            // If available (thus IE), use the createTextRange method
            if (typeof input.createTextRange == "function") {
                const range = input.createTextRange();
                range.collapse(true);
                range.moveStart("character", selectionStart);
                range.moveEnd("character", selectionEnd - selectionStart);
                return range.getBoundingClientRect();
            }
            // createTextRange is not supported, create a fake text range
            const offset = getInputOffset();
            let topPos = offset.top;
            let leftPos = offset.left;
            const width = getInputCSS("width", true);
            const height = getInputCSS("height", true);
            // Styles to simulate a node in an input field
            let cssDefaultStyles = "white-space:pre;padding:0;margin:0;";
            const listOfModifiers = [
                "direction",
                "font-family",
                "font-size",
                "font-size-adjust",
                "font-variant",
                "font-weight",
                "font-style",
                "letter-spacing",
                "line-height",
                "text-align",
                "text-indent",
                "text-transform",
                "word-wrap",
                "word-spacing",
            ];
            topPos += getInputCSS("padding-top", true);
            topPos += getInputCSS("border-top-width", true);
            leftPos += getInputCSS("padding-left", true);
            leftPos += getInputCSS("border-left-width", true);
            leftPos += 1; //Seems to be necessary
            for (let i = 0; i < listOfModifiers.length; i++) {
                const property = listOfModifiers[i];
                cssDefaultStyles += property + ":" + getInputCSS(property, false) + ";";
            }
            // End of CSS variable checks
            // 不能为空，不然获取不到高度
            const text = input.value || "G", textLen = text.length, fakeClone = document.createElement("div");
            if (selectionStart > 0)
                appendPart(0, selectionStart);
            const fakeRange = appendPart(selectionStart, selectionEnd);
            if (textLen > selectionEnd)
                appendPart(selectionEnd, textLen);
            // Styles to inherit the font styles of the element
            fakeClone.style.cssText = cssDefaultStyles;
            // Styles to position the text node at the desired position
            fakeClone.style.position = "absolute";
            fakeClone.style.top = topPos + "px";
            fakeClone.style.left = leftPos + "px";
            fakeClone.style.width = width + "px";
            fakeClone.style.height = height + "px";
            PopsCore.document.body.appendChild(fakeClone);
            const returnValue = fakeRange.getBoundingClientRect(); //Get rect
            if (!debug)
                fakeClone.parentNode.removeChild(fakeClone); //Remove temp
            return returnValue;
            // Local functions for readability of the previous code
            /**
             *
             * @param start
             * @param end
             */
            function appendPart(start, end) {
                const span = document.createElement("span");
                span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
                span.textContent = text.substring(start, end);
                fakeClone.appendChild(span);
                return span;
            }
            // Computing offset position
            function getInputOffset() {
                const body = document.body, win = document.defaultView, docElem = document.documentElement, box = document.createElement("div");
                box.style.paddingLeft = box.style.width = "1px";
                body.appendChild(box);
                const isBoxModel = box.offsetWidth == 2;
                body.removeChild(box);
                const boxRect = input.getBoundingClientRect();
                const clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, scrollTop = win?.pageYOffset || (isBoxModel && docElem.scrollTop) || body.scrollTop, scrollLeft = win?.pageXOffset || (isBoxModel && docElem.scrollLeft) || body.scrollLeft;
                return {
                    top: boxRect.top + scrollTop - clientTop,
                    left: boxRect.left + scrollLeft - clientLeft,
                };
            }
            /**
             *
             * @param prop
             * @param isnumber
             */
            function getInputCSS(prop, isnumber) {
                const val = PopsCore.document.defaultView.getComputedStyle(input, null).getPropertyValue(prop);
                if (isnumber) {
                    return parseFloat(val);
                }
                else {
                    return val;
                }
            }
        }
        /**
         * 使用className来隐藏元素
         * @param ele
         * @param isImportant 是否使用!important
         */
        cssHide(ele, isImportant = false) {
            if (ele == null) {
                return;
            }
            if (isImportant) {
                popsDOMUtils.addClassName(ele, PopsCommonCSSClassName.hideImportant);
            }
            else {
                popsDOMUtils.addClassName(ele, PopsCommonCSSClassName.hide);
            }
        }
        /**
         * cssHide的反向使用
         * @param ele
         */
        cssShow(ele) {
            if (ele == null) {
                return;
            }
            popsDOMUtils.removeClassName(ele, PopsCommonCSSClassName.hide);
            popsDOMUtils.removeClassName(ele, PopsCommonCSSClassName.hideImportant);
        }
        toElement(html, useParser = false, isComplete = false) {
            function parseHTMLByDOMParser() {
                const parser = new DOMParser();
                if (isComplete) {
                    return parser.parseFromString(html, "text/html");
                }
                else {
                    return parser.parseFromString(html, "text/html").body.firstChild;
                }
            }
            function parseHTMLByCreateDom() {
                const $temp = PopsCore.document.createElement("div");
                PopsSafeUtils.setSafeHTML($temp, html);
                if (isComplete) {
                    return $temp;
                }
                else {
                    return $temp.firstChild;
                }
            }
            if (useParser) {
                return parseHTMLByDOMParser();
            }
            else {
                return parseHTMLByCreateDom();
            }
        }
        /**
         * 函数在元素内部末尾添加子元素或HTML字符串
         * @param element 目标元素
         * @param content 子元素或HTML字符串
         * @example
         * // 元素a.xx的内部末尾添加一个元素
         * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
         * DOMUtils.append("a.xx","'<b class="xx"></b>")
         * */
        append(element, content) {
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            function elementAppendChild(ele, text) {
                if (typeof content === "string") {
                    ele.insertAdjacentHTML("beforeend", PopsSafeUtils.getSafeHTML(text));
                }
                else {
                    ele.appendChild(text);
                }
            }
            if (Array.isArray(content) || content instanceof NodeList) {
                // 数组
                const fragment = PopsCore.document.createDocumentFragment();
                content.forEach((ele) => {
                    if (typeof ele === "string") {
                        ele = this.toElement(ele, true, false);
                    }
                    fragment.appendChild(ele);
                });
                element.appendChild(fragment);
            }
            else {
                elementAppendChild(element, content);
            }
        }
        /**
         * 把元素标签添加到head内
         */
        appendHead($ele) {
            if (PopsCore.document.head) {
                PopsCore.document.head.appendChild($ele);
            }
            else {
                PopsCore.document.documentElement.appendChild($ele);
            }
        }
        /**
         * 把元素添加进body内
         * @param $ele
         */
        appendBody($ele) {
            if (PopsCore.document.body) {
                PopsCore.document.body.appendChild($ele);
            }
            else {
                PopsCore.document.documentElement.appendChild($ele);
            }
        }
        /**
         * 判断元素是否已显示或已连接
         * @param element
         */
        isShow(element) {
            return Boolean(element.getClientRects().length);
        }
        /**
         * 用于显示元素并获取它的高度宽度等其它属性
         * @param $ele
         * @param parent 父元素
         */
        showElement($ele, ownParent) {
            /** 克隆元素 */
            const $cloneNode = $ele.cloneNode(true);
            $cloneNode.setAttribute("style", "visibility: hidden !important;display:block !important;");
            let $parent = PopsCore.document.documentElement;
            // 这里需要的是先获取元素的父节点，把元素同样添加到父节点中
            const $root = $ele.getRootNode();
            if (ownParent == null) {
                if ($root == $ele) {
                    // 未添加到任意节点中，那么直接添加到页面中去
                    $parent = PopsCore.document.documentElement;
                }
                else {
                    // 添加到父节点中
                    $parent = $root;
                }
            }
            else {
                // 自定义的父节点
                $parent = ownParent;
            }
            $parent.appendChild($cloneNode);
            return {
                /**
                 * 强制显示的克隆的元素
                 */
                cloneNode: $cloneNode,
                /**
                 * 恢复修改的style
                 */
                recovery() {
                    $cloneNode.remove();
                },
            };
        }
        /**
         * 获取元素上的Float格式的属性px
         * @param element
         * @param styleName style名
         */
        getStyleValue(element, styleName) {
            let view = null;
            let styles = null;
            if (element instanceof CSSStyleDeclaration) {
                // 直接就获取了style属性
                styles = element;
            }
            else {
                view = element.ownerDocument.defaultView;
                if (!view || !view.opener) {
                    view = window;
                }
                styles = view.getComputedStyle(element);
            }
            const value = parseFloat(styles[styleName]);
            if (isNaN(value)) {
                return 0;
            }
            else {
                return value;
            }
        }
        /**
         * 在元素前面添加兄弟元素或HTML字符串
         * @param element 目标元素
         * @param content 兄弟元素或HTML字符串
         * @example
         * // 元素a.xx前面添加一个元素
         * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
         * DOMUtils.before("a.xx","'<b class="xx"></b>")
         * */
        before(element, content) {
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("beforebegin", PopsSafeUtils.getSafeHTML(content));
            }
            else {
                element.parentElement.insertBefore(content, element);
            }
        }
        /**
         * 在元素后面添加兄弟元素或HTML字符串
         * @param element 目标元素
         * @param content 兄弟元素或HTML字符串
         * @example
         * // 元素a.xx后面添加一个元素
         * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
         * DOMUtils.after("a.xx","'<b class="xx"></b>")
         * */
        after(element, content) {
            if (typeof element === "string") {
                element = PopsCore.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("afterend", PopsSafeUtils.getSafeHTML(content));
            }
            else {
                element.parentElement.insertBefore(content, element.nextSibling);
            }
        }
        /**
         * 获取CSS Rule
         * @param sheet
         * @returns
         */
        getKeyFrames(sheet) {
            const result = {};
            Object.keys(sheet.cssRules).forEach((key) => {
                if (sheet.cssRules[key].type === 7 && sheet.cssRules[key].name.startsWith("pops-anim-")) {
                    result[sheet.cssRules[key].name] = sheet.cssRules[key];
                }
            });
            return result;
        }
        /**
         * 颜色转换函数
         * @method hexToRgb hex 颜色转 rgb 颜色
         * @method rgbToHex rgb 颜色转 Hex 颜色
         * @method getDarkColor 加深颜色值
         * @method getLightColor 变浅颜色值
         */
        calcColor() {
            function useChangeColor() {
                /**
                 * hex 颜色转 rgb 颜色
                 */
                const hexToRgb = (
                /**
                 * hex 颜色值
                 */
                str) => {
                    let hexs = "";
                    const reg = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
                    if (!reg.test(str)) {
                        console.warn("输入错误的hex");
                        return "";
                    }
                    str = str.replace("#", "");
                    hexs = str.match(/../g);
                    for (let i = 0; i < 3; i++)
                        hexs[i] = parseInt(hexs[i], 16);
                    return hexs;
                };
                /**
                 * rgb转hex
                 */
                const rgbToHex = (
                /**
                 * 红色
                 */
                r, 
                /**
                 * 绿色
                 */
                g, 
                /**
                 * 蓝色
                 */
                b) => {
                    const reg = /^\d{1,3}$/;
                    if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
                        console.warn("输入错误的rgb颜色值");
                        return "";
                    }
                    const hexs = [r.toString(16), g.toString(16), b.toString(16)];
                    for (let i = 0; i < 3; i++)
                        if (hexs[i].length == 1)
                            hexs[i] = `0${hexs[i]}`;
                    return `#${hexs.join("")}`;
                };
                /**
                 * 获取深色
                 */
                const getDarkColor = (
                /**
                 * 颜色值字符串
                 */
                color, 
                /**
                 * 加深的程度，限0-1之间
                 */
                level) => {
                    const reg = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
                    if (!reg.test(color)) {
                        console.warn("输入错误的hex颜色值");
                        return "";
                    }
                    const rgb = useChangeColor().hexToRgb(color);
                    for (let i = 0; i < 3; i++)
                        rgb[i] = Math.floor(rgb[i] * (1 - level));
                    return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
                };
                /**
                 * 获取颜色变浅后的颜色值
                 */
                const getLightColor = (
                /**
                 * 颜色值字符串
                 */
                color, 
                /**
                 * 加深的程度，限0-1之间
                 */
                level) => {
                    const reg = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
                    if (!reg.test(color)) {
                        console.warn("输入错误的hex颜色值");
                        return "";
                    }
                    const rgb = useChangeColor().hexToRgb(color);
                    for (let i = 0; i < 3; i++)
                        rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
                    return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
                };
                return {
                    hexToRgb,
                    rgbToHex,
                    getDarkColor,
                    getLightColor,
                };
            }
            return useChangeColor();
        }
        /**
         * 获取移动元素的transform偏移
         * @param element 元素
         */
        getTransform(element) {
            let transform_left = 0;
            let transform_top = 0;
            const elementTransform = PopsCore.globalThis.getComputedStyle(element).transform;
            if (elementTransform !== "none" && elementTransform != null && elementTransform !== "") {
                const elementTransformMatch = elementTransform.match(/\((.+)\)/);
                // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                const elementTransformSplit = elementTransformMatch?.[1]?.split?.(",");
                transform_left = Math.abs(parseInt(elementTransformSplit[4]));
                transform_top = Math.abs(parseInt(elementTransformSplit[5]));
            }
            return {
                transformLeft: transform_left,
                transformTop: transform_top,
            };
        }
        /**
         * 监input、textarea的输入框值改变的事件
         */
        onInput($el, callback, option) {
            /**
             * 是否正在输入中
             */
            let isComposite = false;
            const __callback = async (event) => {
                if (isComposite)
                    return;
                await callback(event);
            };
            const __composition_start_callback = () => {
                isComposite = true;
            };
            const __composition_end_callback = () => {
                isComposite = false;
                this.emit($el, "input", {
                    isComposite,
                });
            };
            const inputListener = this.on($el, "input", __callback, option);
            const compositionStartListener = this.on($el, "compositionstart", __composition_start_callback, option);
            const compositionEndListener = this.on($el, "compositionend", __composition_end_callback, option);
            return {
                off: () => {
                    inputListener.off();
                    compositionStartListener.off();
                    compositionEndListener.off();
                },
            };
        }
    }
    const popsDOMUtils = new PopsDOMUtils();

    const PopsElementHandler = {
        /**
         * 获取遮罩层HTML
         * @param guid
         * @param zIndex z-index
         * @param style
         */
        createMask(guid, zIndex = 101, style = "") {
            zIndex = zIndex - 100;
            if (style.startsWith(";")) {
                style = style.replace(";", "");
            }
            return /*html*/ `<div class="pops-mask" data-guid="${guid}" style="z-index:${zIndex};${style}"></div>`;
        },
        /**
         * 获取动画层HTML
         * @param guid
         * @param type
         * @param config
         * @param html
         * @param bottomBtnHTML
         * @param zIndex
         */
        createAnim(guid, type, config, html = "", bottomBtnHTML = "", zIndex) {
            const __config = config;
            let popsAnimStyle = "";
            let popsStyle = "";
            const popsPosition = __config.position || "";
            if (config.zIndex != null) {
                popsAnimStyle += `z-index: ${zIndex};`;
                popsStyle += `z-index: ${zIndex};`;
            }
            if (__config.width != null) {
                popsStyle += `width: ${__config.width};`;
            }
            if (__config.height != null) {
                popsStyle += `height: ${__config.height};`;
            }
            const hasBottomBtn = bottomBtnHTML.trim() === "" ? false : true;
            return /*html*/ `
		<div class="pops-anim" anim="${__config.animation || ""}" style="${popsAnimStyle}" data-guid="${guid}">${config.style != null ? `<style tyle="text/css">${config.style}</style>` : ""}
			<div class="pops ${config.class || ""}" data-bottom-btn="${hasBottomBtn}" type-value="${type}" style="${popsStyle}" position="${popsPosition}" data-guid="${guid}">${html}</div>
		</div>`;
        },
        /**
         * 获取顶部按钮层HTML
         * @param type
         * @param config
         */
        createHeader(type, config) {
            if (!config.btn) {
                return "";
            }
            const confirm_config = config;
            if (type !== "iframe" && !confirm_config.btn?.close?.enable) {
                return "";
            }
            let resultHTML = "";
            // let btnStyle = "";
            let closeHTML = "";
            const iframe_config = config;
            if (type === "iframe" && iframe_config.topRightButton?.trim() !== "") {
                // iframe的
                let topRightButtonHTML = "";
                iframe_config.topRightButton.split("|").forEach((item) => {
                    // 最小化、最大化、窗口化、关闭按钮
                    item = item.toLowerCase();
                    topRightButtonHTML += /*html*/ `
                <button class="pops-header-control" type="button" data-type="${item}">
                    <i class="pops-icon">${PopsIcon.getIcon(item)}</i>
                </button>`;
                });
                resultHTML = /*html*/ `
            <div class="pops-header-controls" data-margin>${topRightButtonHTML}</div>`;
            }
            else {
                if (confirm_config.btn?.close?.enable) {
                    // 关闭按钮
                    closeHTML = /*html*/ `
                <div class="pops-header-controls">
                    <button class="pops-header-control" type="button" data-type="close" data-header>
                    	<i class="pops-icon">${PopsIcon.getIcon("close")}</i>
                    </button>
                </div>`;
                }
                resultHTML = closeHTML;
            }
            return resultHTML;
        },
        /**
         * 获取标题style
         * @param type 弹窗类型
         * @param config 弹窗配置
         */
        createHeaderStyle(type, config) {
            return {
                headerStyle: config?.title?.html ? config?.title?.style || "" : "",
                headerPStyle: config?.title?.html ? "" : config?.title?.style || "",
            };
        },
        /**
         * 获取底部按钮层HTML
         * @param type
         * @param config
         */
        createBottom(type, config) {
            if (config.btn == null) {
                // 未设置btn参数
                return "";
            }
            const confirm_config = config;
            if (!(config.btn?.ok?.enable || confirm_config.btn?.cancel?.enable || confirm_config.btn?.other?.enable)) {
                // 确定、取消、其它按钮都未启用直接返回
                return "";
            }
            let btnStyle = "";
            let resultHTML = "";
            let okHTML = "";
            let cancelHTML = "";
            let ohterHTML = "";
            if (config.btn.position) {
                btnStyle += `justify-content: ${config.btn.position};`;
            }
            if (confirm_config.btn.reverse) {
                btnStyle += "flex-direction: row-reverse;";
            }
            if (config.btn?.ok?.enable) {
                // 处理确定按钮的尺寸问题
                let okButtonSizeClassName = "";
                if (config.btn.ok.size === "large") {
                    okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
                }
                else if (config.btn.ok.size === "small") {
                    okButtonSizeClassName = "pops-button-" + config.btn.ok.size;
                }
                let okIconHTML = "";
                const okIcon = confirm_config.btn.ok.icon;
                if (okIcon !== "") {
                    // 判断图标是否是svg库内的
                    let iconHTML = "";
                    if (PopsIcon.hasIcon(okIcon)) {
                        iconHTML = PopsIcon.getIcon(okIcon);
                    }
                    else {
                        iconHTML = okIcon;
                    }
                    iconHTML = iconHTML || "";
                    okIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${config.btn.ok.iconIsLoading}">${iconHTML}</i>`;
                }
                okHTML = /*html*/ `
            <button 
				class="pops-${type}-btn-ok ${okButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.ok?.type}"
				data-has-icon="${(confirm_config.btn.ok.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.ok?.rightIcon}"
            >${okIconHTML}<span>${config.btn.ok.text}</span>
            </button>`;
            }
            if (confirm_config.btn?.cancel?.enable) {
                // 处理取消按钮的尺寸问题
                let cancelButtonSizeClassName = "";
                if (confirm_config.btn.cancel.size === "large") {
                    cancelButtonSizeClassName = "pops-button-" + confirm_config.btn.cancel.size;
                }
                else if (confirm_config.btn.cancel.size === "small") {
                    cancelButtonSizeClassName = "pops-button-" + confirm_config.btn.cancel.size;
                }
                let cancelIconHTML = "";
                const cancelIcon = confirm_config.btn.cancel.icon;
                if (cancelIcon !== "") {
                    let iconHTML = "";
                    // 判断图标是否是svg库内的
                    if (PopsIcon.hasIcon(cancelIcon)) {
                        iconHTML = PopsIcon.getIcon(cancelIcon);
                    }
                    else {
                        iconHTML = cancelIcon;
                    }
                    iconHTML = iconHTML || "";
                    cancelIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${confirm_config.btn.cancel.iconIsLoading}">${iconHTML}</i>`;
                }
                cancelHTML = /*html*/ `
            <button
				class="pops-${type}-btn-cancel ${cancelButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.cancel.type}"
				data-has-icon="${(confirm_config.btn.cancel.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.cancel.rightIcon}"
            >${cancelIconHTML}<span>${confirm_config.btn.cancel.text}</span>
            </button>`;
            }
            if (confirm_config.btn?.other?.enable) {
                // 处理其它按钮的尺寸问题
                let otherButtonSizeClassName = "";
                if (confirm_config.btn.other.size === "large") {
                    otherButtonSizeClassName = "pops-button-" + confirm_config.btn.other.size;
                }
                else if (confirm_config.btn.other.size === "small") {
                    otherButtonSizeClassName = "pops-button-" + confirm_config.btn.other.size;
                }
                let otherIconHTML = "";
                const otherIcon = confirm_config.btn.other.icon;
                if (otherIcon !== "") {
                    let iconHTML = "";
                    // 判断图标是否是svg库内的
                    if (PopsIcon.hasIcon(otherIcon)) {
                        iconHTML = PopsIcon.getIcon(otherIcon);
                    }
                    iconHTML = iconHTML || "";
                    otherIconHTML = /*html*/ `<i class="pops-bottom-icon" is-loading="${confirm_config.btn.other.iconIsLoading}">${iconHTML}</i>`;
                }
                ohterHTML = /*html*/ `
            <button
				class="pops-${type}-btn-other ${otherButtonSizeClassName}"
				type="button"
				data-type="${confirm_config.btn.other.type}"
				data-has-icon="${(confirm_config.btn.other.icon || "") !== ""}"
				data-rightIcon="${confirm_config.btn.other.rightIcon}"
            >${otherIconHTML}<span>${confirm_config.btn.other.text}</span>
            </button>`;
            }
            if (confirm_config.btn.merge) {
                let flexStyle = "display: flex;";
                if (confirm_config.btn.mergeReverse) {
                    flexStyle += "flex-direction: row-reverse;";
                }
                else {
                    flexStyle += "flex-direction: row;";
                }
                resultHTML = /*html*/ `
            <div class="pops-botttom-btn-controls pops-${type}-btn" style="${btnStyle}">${ohterHTML}<div 
                    class="pops-${type}-btn-merge"
                    style="${flexStyle}">${okHTML}${cancelHTML}</div>
            </div>
            `;
            }
            else {
                resultHTML = /*html*/ `<div class="pops-botttom-btn-controls pops-${type}-btn" style="${btnStyle}">${okHTML}${cancelHTML}${ohterHTML}</div>`;
            }
            return resultHTML;
        },
        /**
         * 获取内容style
         * @param type 弹窗类型
         * @param config 弹窗配置
         */
        createContentStyle(type, config) {
            return {
                contentStyle: config?.content?.html ? config?.content?.style || "" : "",
                contentPStyle: config?.content?.html ? "" : config?.content?.style || "",
            };
        },
        /**
         * 将html转换成元素
         * @param html
         */
        parseElement(html) {
            return popsDOMUtils.parseTextToDOM(html);
        },
    };

    var indexCSS = "@charset \"utf-8\";\r\n.pops * {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-tap-highlight-color: transparent;\r\n  /* 代替::-webkit-scrollbar */\r\n  scrollbar-width: thin;\r\n}\r\n.pops {\r\n  --pops-bg-opacity: 1;\r\n  --pops-bd-opacity: 1;\r\n  --pops-font-size: 16px;\r\n  interpolate-size: allow-keywords;\r\n  --pops-color: #000000;\r\n  --pops-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n  --pops-bd-color: rgb(235, 238, 245, var(--pops-bd-opacity));\r\n  --pops-box-shadow-color: rgba(0, 0, 0, 0.12);\r\n  --pops-title-color: #000000;\r\n  --pops-title-border-color: var(--pops-bd-color);\r\n  --pops-content-color: #000000;\r\n  --pops-bottom-btn-controls-border-color: var(--pops-bd-color);\r\n  --pops-components-is-disabled-text-color: #a8abb2;\r\n  --pops-components-is-disabled-bg-color: #f5f7fa;\r\n}\r\n@media (prefers-color-scheme: dark) {\r\n  .pops {\r\n    --pops-mask-bg-opacity: 0.8;\r\n    --pops-color: #ffffff;\r\n    --pops-bg-color: rgb(17, 17, 17, var(--pops-bg-opacity));\r\n    --pops-bd-color: rgb(55, 55, 55, var(--pops-bd-opacity));\r\n    --pops-box-shadow-color: rgba(81, 81, 81, 0.12);\r\n    --pops-title-color: #e8e8e8;\r\n    --pops-title-border-color: var(--pops-bd-color);\r\n    --pops-content-color: #e5e5e5;\r\n    --pops-components-is-disabled-text-color: #a8abb2;\r\n    --pops-components-is-disabled-bg-color: #262727;\r\n  }\r\n}\r\n.pops {\r\n  color: var(--pops-color);\r\n  background-color: var(--pops-bg-color);\r\n  border: 1px solid var(--pops-bd-color);\r\n  border-radius: 4px;\r\n  font-size: var(--pops-font-size);\r\n  line-height: normal;\r\n  box-shadow: 0 0 12px var(--pops-box-shadow-color);\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n  transition: all 0.35s;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.pops-anim {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.pops-anim[anim=\"\"] {\r\n  top: unset;\r\n  right: unset;\r\n  bottom: unset;\r\n  left: unset;\r\n  width: unset;\r\n  height: unset;\r\n  transition: none;\r\n}\r\n/* 底部图标动画和样式 */\r\n.pops i.pops-bottom-icon[is-loading=\"true\"] {\r\n  animation: rotating 2s linear infinite;\r\n}\r\n.pops i.pops-bottom-icon {\r\n  height: 1em;\r\n  width: 1em;\r\n  line-height: normal;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  fill: currentColor;\r\n  color: inherit;\r\n  font-size: inherit;\r\n}\r\n\r\n/* 遮罩层样式 */\r\n.pops-mask {\r\n  --pops-mask-bg-opacity: 0.4;\r\n  --pops-mask-bg-color: rgba(0, 0, 0, var(--pops-mask-bg-opacity));\r\n}\r\n.pops-mask {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 0;\r\n  border-radius: 0;\r\n  background-color: var(--pops-mask-bg-color);\r\n  box-shadow: none;\r\n  transition: none;\r\n}\r\n\r\n.pops-header-controls button.pops-header-control[type][data-header] {\r\n  float: right;\r\n  margin: 0 0;\r\n  outline: 0;\r\n  border: 0;\r\n  border-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r\n  background-color: transparent;\r\n  color: #888;\r\n  cursor: pointer;\r\n}\r\n.pops-header-controls button.pops-header-control[data-type=\"max\"],\r\n.pops-header-controls button.pops-header-control[data-type=\"mise\"],\r\n.pops-header-controls button.pops-header-control[data-type=\"min\"] {\r\n  outline: 0 !important;\r\n  border: 0;\r\n  border-color: rgb(136, 136, 136, var(--pops-bd-opacity));\r\n  background-color: transparent;\r\n  color: rgb(136, 136, 136);\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\nbutton.pops-header-control i {\r\n  color: rgb(144, 147, 153);\r\n  font-size: inherit;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  fill: currentColor;\r\n}\r\nbutton.pops-header-control svg {\r\n  height: 1.25em;\r\n  width: 1.25em;\r\n}\r\nbutton.pops-header-control {\r\n  right: 15px;\r\n  padding: 0;\r\n  border: none;\r\n  outline: 0;\r\n  background: 0 0;\r\n  cursor: pointer;\r\n  position: unset;\r\n  line-height: normal;\r\n}\r\nbutton.pops-header-control i:hover {\r\n  color: rgb(64, 158, 255);\r\n}\r\n.pops-header-controls[data-margin] button.pops-header-control {\r\n  margin: 0 6px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.pops[type-value] .pops-header-controls {\r\n  display: flex;\r\n  gap: 6px;\r\n}\r\n\r\n/* 代码块 <code> */\r\n.pops code {\r\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\r\n  font-size: 0.85em;\r\n  color: #000;\r\n  background-color: #f0f0f0;\r\n  border-radius: 3px;\r\n  border: 0;\r\n  padding: 0.2em 0;\r\n  white-space: normal;\r\n  background: #f5f5f5;\r\n  text-wrap: wrap;\r\n  text-align: left;\r\n  word-spacing: normal;\r\n  word-break: normal;\r\n  word-wrap: normal;\r\n  line-height: 1.4;\r\n  -moz-tab-size: 8;\r\n  -o-tab-size: 8;\r\n  tab-size: 8;\r\n  -webkit-hyphens: none;\r\n  -moz-hyphens: none;\r\n  -ms-hyphens: none;\r\n  hyphens: none;\r\n  direction: ltr;\r\n}\r\n\r\n.pops code::before,\r\n.pops code::after {\r\n  letter-spacing: -0.2em;\r\n  content: \"\\00a0\";\r\n}\r\n\r\n/* 标题 */\r\n.pops .pops-title {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--pops-title-border-color);\r\n  width: 100%;\r\n  height: var(--container-title-height);\r\n}\r\n/* 标题-普通文本 */\r\n.pops .pops-title p[pops] {\r\n  color: var(--pops-title-color);\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-indent: 15px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  font-weight: 500;\r\n  line-height: normal;\r\n}\r\n\r\n/* 内容 */\r\n.pops .pops-content {\r\n  width: 100%;\r\n  /*height: calc(\r\n\t\t100% - var(--container-title-height) - var(--container-bottom-btn-height)\r\n\t);*/\r\n  flex: 1;\r\n  overflow: auto;\r\n  word-break: break-word;\r\n}\r\n/* 内容-普通文本 */\r\n.pops .pops-content p[pops] {\r\n  color: var(--pops-content-color);\r\n  padding: 5px 10px;\r\n  text-indent: 15px;\r\n}\r\n\r\n/* 底部-按钮组 */\r\n.pops .pops-botttom-btn-controls {\r\n  display: flex;\r\n  padding: 10px 10px 10px 10px;\r\n  width: 100%;\r\n  height: var(--container-bottom-btn-height);\r\n  max-height: var(--container-bottom-btn-height);\r\n  line-height: normal;\r\n  border-top: 1px solid var(--pops-bottom-btn-controls-border-color);\r\n  text-align: right;\r\n  align-items: center;\r\n}\r\n";

    var ninePalaceGridPositionCSS = ".pops[position=\"top_left\"] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.pops[position=\"top\"] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n.pops[position=\"top_right\"] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n.pops[position=\"center_left\"] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translateY(-50%);\r\n}\r\n.pops[position=\"center\"] {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.pops[position=\"center_right\"] {\r\n  position: fixed;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n}\r\n.pops[position=\"bottom_left\"] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.pops[position=\"bottom\"] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n}\r\n.pops[position=\"bottom_right\"] {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n";

    var scrollbarCSS = "/* ::-webkit-scrollbar 是非标准的css */\r\n/* https://caniuse.com/?search=%20%3A%3A-webkit-scrollbar */\r\n.pops ::-webkit-scrollbar {\r\n  width: 6px;\r\n  height: 0;\r\n}\r\n\r\n/* 滚动条轨道 */\r\n.pops ::-webkit-scrollbar-track {\r\n  width: 0;\r\n}\r\n/* 滚动条滑块 */\r\n.pops ::-webkit-scrollbar-thumb {\r\n  min-height: 28px;\r\n  border-radius: 2em;\r\n  background: rgb(204, 204, 204, var(--pops-bg-opacity, 1));\r\n  background-clip: padding-box;\r\n}\r\n/* 滚动条滑块 */\r\n.pops ::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(178, 178, 178, var(--pops-bg-opacity, 1));\r\n}\r\n";

    var buttonCSS = ".pops {\r\n  --button-font-size: 14px;\r\n  --button-height: 32px;\r\n  --button-color: rgb(51, 51, 51);\r\n  --button-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r\n  --button-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r\n  --button-margin-top: 0px;\r\n  --button-margin-bottom: 0px;\r\n  --button-margin-left: 5px;\r\n  --button-margin-right: 5px;\r\n  --button-padding-top: 6px;\r\n  --button-padding-bottom: 6px;\r\n  --button-padding-left: 12px;\r\n  --button-padding-right: 12px;\r\n  --button-radius: 4px;\r\n\r\n  --container-title-height: 55px;\r\n  --container-bottom-btn-height: 55px;\r\n\r\n  /* default按钮 */\r\n  --button-default-color: #333333;\r\n  --button-default-bd-color: #dcdfe6;\r\n  --button-default-bg-color: #ffffff;\r\n  --button-default-active-color: #409eff;\r\n  --button-default-active-bd-color: #409eff;\r\n  --button-default-active-bg-color: #ecf5ff;\r\n  --button-default-hover-color: #409eff;\r\n  --button-default-hover-bd-color: #c6e2ff;\r\n  --button-default-hover-bg-color: #ecf5ff;\r\n  --button-default-focus-visible-outline-color: #a0cfff;\r\n  --button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);\r\n  --button-default-focus-visible-outline-offset: 1px;\r\n  --button-default-disabled-color: #a8abb2;\r\n  --button-default-disabled-bd-color: #ffffff;\r\n  --button-default-disabled-bg-color: #e4e7ed;\r\n\r\n  /* primary按钮 */\r\n  --button-primary-color: #ffffff;\r\n  --button-primary-bd-color: #409eff;\r\n  --button-primary-bg-color: #409eff;\r\n  --button-primary-active-color: #ffffff;\r\n  --button-primary-active-bd-color: #337ecc;\r\n  --button-primary-active-bg-color: #337ecc;\r\n  --button-primary-hover-color: #ffffff;\r\n  --button-primary-hover-bd-color: #79bbff;\r\n  --button-primary-hover-bg-color: #79bbff;\r\n  --button-primary-focus-visible-outline-color: #a0cfff;\r\n  --button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);\r\n  --button-primary-focus-visible-outline-offset: 1px;\r\n  --button-primary-disabled-color: #ffffff80;\r\n  --button-primary-disabled-bd-color: #a0cfff;\r\n  --button-primary-disabled-bg-color: #a0cfff;\r\n\r\n  /* success按钮 */\r\n  --button-success-color: #ffffff;\r\n  --button-success-bd-color: #4cae4c;\r\n  --button-success-bg-color: #5cb85c;\r\n  --button-success-active-color: #ffffff;\r\n  --button-success-active-bd-color: #529b2e;\r\n  --button-success-active-bg-color: #529b2e;\r\n  --button-success-hover-color: #ffffff;\r\n  --button-success-hover-bd-color: #95d475;\r\n  --button-success-hover-bg-color: #95d475;\r\n  --button-success-focus-visible-outline-color: #b3e19d;\r\n  --button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);\r\n  --button-success-focus-visible-outline-offset: 1px;\r\n  --button-success-disabled-color: #ffffff80;\r\n  --button-success-disabled-bd-color: #b3e19d;\r\n  --button-success-disabled-bg-color: #b3e19d;\r\n\r\n  /* info按钮 */\r\n  --button-info-color: #ffffff;\r\n  --button-info-bd-color: #909399;\r\n  --button-info-bg-color: #909399;\r\n  --button-info-active-color: #ffffff;\r\n  --button-info-active-bd-color: #73767a;\r\n  --button-info-active-bg-color: #73767a;\r\n  --button-info-hover-color: #ffffff;\r\n  --button-info-hover-bd-color: #b1b3b8;\r\n  --button-info-hover-bg-color: #b1b3b8;\r\n  --button-info-focus-visible-outline-color: #c8c9cc;\r\n  --button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);\r\n  --button-info-focus-visible-outline-offset: 1px;\r\n  --button-info-disabled-color: #ffffff80;\r\n  --button-info-disabled-bd-color: #c8c9cc;\r\n  --button-info-disabled-bg-color: #c8c9cc;\r\n\r\n  /* warning按钮 */\r\n  --button-warning-color: #ffffff;\r\n  --button-warning-bd-color: #e6a23c;\r\n  --button-warning-bg-color: #e6a23c;\r\n  --button-warning-active-color: #ffffff;\r\n  --button-warning-active-bd-color: #b88230;\r\n  --button-warning-active-bg-color: #b88230;\r\n  --button-warning-hover-color: #ffffff80;\r\n  --button-warning-hover-bd-color: #eebe77;\r\n  --button-warning-hover-bg-color: #eebe77;\r\n  --button-warning-focus-visible-outline-color: #f3d19e;\r\n  --button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);\r\n  --button-warning-focus-visible-outline-offset: 1px;\r\n  --button-warning-disabled-color: #ffffff80;\r\n  --button-warning-disabled-bd-color: #f3d19e;\r\n  --button-warning-disabled-bg-color: #f3d19e;\r\n\r\n  /* danger按钮 */\r\n  --button-danger-color: #ffffff;\r\n  --button-danger-bd-color: #f56c6c;\r\n  --button-danger-bg-color: #f56c6c;\r\n  --button-danger-active-color: #ffffff;\r\n  --button-danger-active-bd-color: #c45656;\r\n  --button-danger-active-bg-color: #c45656;\r\n  --button-danger-hover-color: #ffffff;\r\n  --button-danger-hover-bd-color: #f89898;\r\n  --button-danger-hover-bg-color: #f89898;\r\n  --button-danger-focus-visible-outline-color: #fab6b6;\r\n  --button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);\r\n  --button-danger-focus-visible-outline-offset: 1px;\r\n  --button-danger-disabled-color: #ffffff80;\r\n  --button-danger-disabled-bd-color: #fab6b6;\r\n  --button-danger-disabled-bg-color: #fab6b6;\r\n\r\n  /* xiaomi-primary按钮 */\r\n  --button-xiaomi-primary-color: #ffffff;\r\n  --button-xiaomi-primary-bd-color: #ff5c00;\r\n  --button-xiaomi-primary-bg-color: #ff5c00;\r\n  --button-xiaomi-primary-active-color: #ffffff;\r\n  --button-xiaomi-primary-active-bd-color: #da4f00;\r\n  --button-xiaomi-primary-active-bg-color: #da4f00;\r\n  --button-xiaomi-primary-hover-color: #ffffff;\r\n  --button-xiaomi-primary-hover-bd-color: #ff7e29;\r\n  --button-xiaomi-primary-hover-bg-color: #ff7e29;\r\n  --button-xiaomi-primary-focus-visible-outline-color: #ffa061;\r\n  --button-xiaomi-primary-focus-visible-outline: 2px solid var(--button-xiaomi-primary-focus-visible-outline-color);\r\n  --button-xiaomi-primary-focus-visible-outline-offset: 1px;\r\n  --button-xiaomi-primary-disabled-color: #ffffff80;\r\n  --button-xiaomi-primary-disabled-bd-color: #fad5b6;\r\n  --button-xiaomi-primary-disabled-bg-color: #fad5b6;\r\n\r\n  /* violet按钮 */\r\n  --button-violet-color: #ffffff;\r\n  --button-violet-bd-color: #626aef;\r\n  --button-violet-bg-color: #626aef;\r\n  --button-violet-active-color: #ffffff;\r\n  --button-violet-active-bd-color: #8188f2;\r\n  --button-violet-active-bg-color: #8188f2;\r\n  --button-violet-hover-color: #ffffff;\r\n  --button-violet-hover-bd-color: #4b50ad;\r\n  --button-violet-hover-bg-color: #4b50ad;\r\n  --button-violet-focus-visible-outline-color: #2a598a;\r\n  --button-violet-focus-visible-outline: 2px solid var(--button-violet-focus-visible-outline-color);\r\n  --button-violet-focus-visible-outline-offset: 1px;\r\n  --button-violet-disabled-color: #ffffff80;\r\n  --button-violet-disabled-bd-color: #3b3f82;\r\n  --button-violet-disabled-bg-color: #3b3f82;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  .pops {\r\n    /* default按钮 */\r\n    --button-default-color: #cfd3dc;\r\n    --button-default-bd-color: #4c4d4f;\r\n    --button-default-bg-color: transparent;\r\n    --button-default-active-color: #409eff;\r\n    --button-default-active-bd-color: #409eff;\r\n    --button-default-active-bg-color: #18222c;\r\n    --button-default-hover-color: #409eff;\r\n    --button-default-hover-bd-color: #213d5b;\r\n    --button-default-hover-bg-color: #18222c;\r\n    --button-default-focus-visible-outline-color: #2a598a;\r\n    --button-default-focus-visible-outline: 2px solid var(--button-default-focus-visible-outline-color);\r\n    --button-default-focus-visible-outline-offset: 1px;\r\n    --button-default-disabled-color: #ffffff80;\r\n    --button-default-disabled-bd-color: #414243;\r\n    --button-default-disabled-bg-color: transparent;\r\n\r\n    /* primary按钮 */\r\n    --button-primary-color: #ffffff;\r\n    --button-primary-bd-color: #409eff;\r\n    --button-primary-bg-color: #409eff;\r\n    --button-primary-active-color: #ffffff;\r\n    --button-primary-active-bd-color: #66b1ff;\r\n    --button-primary-active-bg-color: #66b1ff;\r\n    --button-primary-hover-color: #ffffff;\r\n    --button-primary-hover-bd-color: #3375b9;\r\n    --button-primary-hover-bg-color: #3375b9;\r\n    --button-primary-focus-visible-outline-color: #2a598a;\r\n    --button-primary-focus-visible-outline: 2px solid var(--button-primary-focus-visible-outline-color);\r\n    --button-primary-focus-visible-outline-offset: 1px;\r\n    --button-primary-disabled-color: #ffffff80;\r\n    --button-primary-disabled-bd-color: #2a598a;\r\n    --button-primary-disabled-bg-color: #2a598a;\r\n\r\n    /* success按钮 */\r\n    --button-success-color: #ffffff;\r\n    --button-success-bd-color: #67c23a;\r\n    --button-success-bg-color: #67c23a;\r\n    --button-success-active-color: #ffffff;\r\n    --button-success-active-bd-color: #85ce61;\r\n    --button-success-active-bg-color: #85ce61;\r\n    --button-success-hover-color: #ffffff;\r\n    --button-success-hover-bd-color: #4e8e2f;\r\n    --button-success-hover-bg-color: #4e8e2f;\r\n    --button-success-focus-visible-outline-color: #3e6b27;\r\n    --button-success-focus-visible-outline: 2px solid var(--button-success-focus-visible-outline-color);\r\n    --button-success-focus-visible-outline-offset: 1px;\r\n    --button-success-disabled-color: #ffffff80;\r\n    --button-success-disabled-bd-color: #3e6b27;\r\n    --button-success-disabled-bg-color: #3e6b27;\r\n\r\n    /* info按钮 */\r\n    --button-info-color: #ffffff;\r\n    --button-info-bd-color: #909399;\r\n    --button-info-bg-color: #909399;\r\n    --button-info-active-color: #ffffff;\r\n    --button-info-active-bd-color: #a6a9ad;\r\n    --button-info-active-bg-color: #a6a9ad;\r\n    --button-info-hover-color: #ffffff;\r\n    --button-info-hover-bd-color: #6b6d71;\r\n    --button-info-hover-bg-color: #6b6d71;\r\n    --button-info-focus-visible-outline-color: #525457;\r\n    --button-info-focus-visible-outline: 2px solid var(--button-info-focus-visible-outline-color);\r\n    --button-info-focus-visible-outline-offset: 1px;\r\n    --button-info-disabled-color: #ffffff80;\r\n    --button-info-disabled-bd-color: #525457;\r\n    --button-info-disabled-bg-color: #525457;\r\n\r\n    /* warning按钮 */\r\n    --button-warning-color: #ffffff;\r\n    --button-warning-bd-color: #e6a23c;\r\n    --button-warning-bg-color: #e6a23c;\r\n    --button-warning-active-color: #ffffff;\r\n    --button-warning-active-bd-color: #ebb563;\r\n    --button-warning-active-bg-color: #ebb563;\r\n    --button-warning-hover-color: #ffffff80;\r\n    --button-warning-hover-bd-color: #a77730;\r\n    --button-warning-hover-bg-color: #a77730;\r\n    --button-warning-focus-visible-outline-color: #7d5b28;\r\n    --button-warning-focus-visible-outline: 2px solid var(--button-warning-focus-visible-outline-color);\r\n    --button-warning-focus-visible-outline-offset: 1px;\r\n    --button-warning-disabled-color: #ffffff80;\r\n    --button-warning-disabled-bd-color: #7d5b28;\r\n    --button-warning-disabled-bg-color: #7d5b28;\r\n\r\n    /* danger按钮 */\r\n    --button-danger-color: #ffffff;\r\n    --button-danger-bd-color: #f56c6c;\r\n    --button-danger-bg-color: #f56c6c;\r\n    --button-danger-active-color: #ffffff;\r\n    --button-danger-active-bd-color: #f78989;\r\n    --button-danger-active-bg-color: #f78989;\r\n    --button-danger-hover-color: #ffffff;\r\n    --button-danger-hover-bd-color: #b25252;\r\n    --button-danger-hover-bg-color: #b25252;\r\n    --button-danger-focus-visible-outline-color: #854040;\r\n    --button-danger-focus-visible-outline: 2px solid var(--button-danger-focus-visible-outline-color);\r\n    --button-danger-focus-visible-outline-offset: 1px;\r\n    --button-danger-disabled-color: #ffffff80;\r\n    --button-danger-disabled-bd-color: #854040;\r\n    --button-danger-disabled-bg-color: #854040;\r\n  }\r\n}\r\n.pops[data-bottom-btn=\"false\"] {\r\n  --container-bottom-btn-height: 0px;\r\n}\r\n.pops button {\r\n  white-space: nowrap;\r\n  float: right;\r\n  display: inline-block;\r\n  margin: var(--button-margin-top) var(--button-margin-right) var(--button-margin-bottom) var(--button-margin-left);\r\n  padding: var(--button-padding-top) var(--button-padding-right) var(--button-padding-bottom) var(--button-padding-left);\r\n  outline: 0;\r\n}\r\n.pops button[data-has-icon=\"false\"] .pops-bottom-icon {\r\n  display: none;\r\n}\r\n.pops button {\r\n  border-radius: var(--button-radius);\r\n  box-shadow: none;\r\n  font-weight: 400;\r\n  font-size: var(--button-font-size);\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.pops button {\r\n  display: flex;\r\n  align-items: center;\r\n  height: var(--button-height);\r\n  line-height: normal;\r\n  box-sizing: border-box;\r\n  border: 1px solid var(--button-bd-color);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.pops button {\r\n  color: var(--button-color);\r\n  border-color: var(--button-bd-color);\r\n  background-color: var(--button-bg-color);\r\n}\r\n.pops button:active {\r\n  color: var(--button-color);\r\n  border-color: var(--button-bd-color);\r\n  background-color: var(--button-bg-color);\r\n  outline: 0;\r\n}\r\n.pops button:hover {\r\n  color: var(--button-color);\r\n  border-color: var(--button-bd-color);\r\n  background-color: var(--button-bg-color);\r\n}\r\n.pops button:focus-visible {\r\n  color: var(--button-color);\r\n  border-color: var(--button-bd-color);\r\n  background-color: var(--button-bg-color);\r\n}\r\n.pops button:disabled {\r\n  cursor: not-allowed;\r\n  color: var(--button-color);\r\n  border-color: var(--button-bd-color);\r\n  background-color: var(--button-bg-color);\r\n}\r\n.pops button.pops-button-large {\r\n  --button-height: 32px;\r\n  --button-padding-top: 12px;\r\n  --button-padding-bottom: 12px;\r\n  --button-padding-left: 19px;\r\n  --button-padding-right: 19px;\r\n  --button-font-size: 14px;\r\n  --button-border-radius: 4px;\r\n}\r\n\r\n.pops button.pops-button-small {\r\n  --button-height: 24px;\r\n  --button-padding-top: 5px;\r\n  --button-padding-bottom: 5px;\r\n  --button-padding-left: 11px;\r\n  --button-padding-right: 11px;\r\n  --button-font-size: 12px;\r\n  --button-border-radius: 4px;\r\n}\r\n.pops-panel-button-no-icon .pops-panel-button_inner i {\r\n  display: none;\r\n}\r\n.pops-panel-button-right-icon .pops-panel-button_inner {\r\n  flex-direction: row-reverse;\r\n}\r\n.pops-panel-button .pops-panel-button_inner i:has(svg),\r\n.pops-panel-button-right-icon .pops-panel-button-text {\r\n  margin-right: 6px;\r\n}\r\n\r\n.pops button[data-type=\"default\"] {\r\n  --button-color: var(--button-default-color);\r\n  --button-bd-color: var(--button-default-bd-color);\r\n  --button-bg-color: var(--button-default-bg-color);\r\n}\r\n.pops button[data-type=\"default\"]:active {\r\n  --button-color: var(--button-default-active-color);\r\n  --button-bd-color: var(--button-default-active-bd-color);\r\n  --button-bg-color: var(--button-default-active-bg-color);\r\n}\r\n.pops button[data-type=\"default\"]:hover {\r\n  --button-color: var(--button-default-hover-color);\r\n  --button-bd-color: var(--button-default-hover-bd-color);\r\n  --button-bg-color: var(--button-default-hover-bg-color);\r\n}\r\n.pops button[data-type=\"default\"]:focus-visible {\r\n  outline: var(--button-default-focus-visible-outline);\r\n  outline-offset: var(--button-default-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"default\"]:disabled {\r\n  --button-color: var(--button-default-disabled-color);\r\n  --button-bd-color: var(--button-default-disabled-bd-color);\r\n  --button-bg-color: var(--button-default-disabled-bg-color);\r\n}\r\n\r\n.pops button[data-type=\"primary\"] {\r\n  --button-color: var(--button-primary-color);\r\n  --button-bd-color: var(--button-primary-bd-color);\r\n  --button-bg-color: var(--button-primary-bg-color);\r\n}\r\n.pops button[data-type=\"primary\"]:active {\r\n  --button-color: var(--button-primary-active-color);\r\n  --button-bd-color: var(--button-primary-active-bd-color);\r\n  --button-bg-color: var(--button-primary-active-bg-color);\r\n}\r\n.pops button[data-type=\"primary\"]:hover {\r\n  --button-color: var(--button-primary-hover-color);\r\n  --button-bd-color: var(--button-primary-hover-bd-color);\r\n  --button-bg-color: var(--button-primary-hover-bg-color);\r\n}\r\n.pops button[data-type=\"primary\"]:focus-visible {\r\n  outline: var(--button-primary-focus-visible-outline);\r\n  outline-offset: var(--button-primary-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"primary\"]:disabled {\r\n  --button-color: var(--button-primary-disabled-color);\r\n  --button-bd-color: var(--button-primary-disabled-bd-color);\r\n  --button-bg-color: var(--button-primary-disabled-bg-color);\r\n}\r\n\r\n.pops button[data-type=\"success\"] {\r\n  --button-color: var(--button-success-color);\r\n  --button-bd-color: var(--button-success-bd-color);\r\n  --button-bg-color: var(--button-success-bg-color);\r\n}\r\n.pops button[data-type=\"success\"]:active {\r\n  --button-color: var(--button-success-active-color);\r\n  --button-bd-color: var(--button-success-active-bd-color);\r\n  --button-bg-color: var(--button-success-active-bg-color);\r\n}\r\n.pops button[data-type=\"success\"]:hover {\r\n  --button-color: var(--button-success-hover-color);\r\n  --button-bd-color: var(--button-success-hover-bd-color);\r\n  --button-bg-color: var(--button-success-hover-bg-color);\r\n}\r\n.pops button[data-type=\"success\"]:focus-visible {\r\n  outline: var(--button-success-focus-visible-outline);\r\n  outline-offset: var(--button-success-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"success\"]:disabled {\r\n  --button-color: var(--button-success-disabled-color);\r\n  --button-bd-color: var(--button-success-disabled-bd-color);\r\n  --button-bg-color: var(--button-success-disabled-bg-color);\r\n}\r\n\r\n.pops button[data-type=\"info\"] {\r\n  --button-color: var(--button-info-color);\r\n  --button-bd-color: var(--button-info-bd-color);\r\n  --button-bg-color: var(--button-info-bg-color);\r\n}\r\n.pops button[data-type=\"info\"]:active {\r\n  --button-color: var(--button-info-active-color);\r\n  --button-bd-color: var(--button-info-active-bd-color);\r\n  --button-bg-color: var(--button-info-active-bg-color);\r\n}\r\n.pops button[data-type=\"info\"]:hover {\r\n  --button-color: var(--button-info-hover-color);\r\n  --button-bd-color: var(--button-info-hover-bd-color);\r\n  --button-bg-color: var(--button-info-hover-bg-color);\r\n}\r\n.pops button[data-type=\"info\"]:focus-visible {\r\n  outline: var(--button-info-focus-visible-outline);\r\n  outline-offset: var(--button-info-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"info\"]:disabled {\r\n  --button-color: var(--button-info-disabled-color);\r\n  --button-bd-color: var(--button-info-disabled-bd-color);\r\n  --button-bg-color: var(--button-info-disabled-bg-color);\r\n}\r\n\r\n.pops button[data-type=\"warning\"] {\r\n  --button-color: var(--button-warning-color);\r\n  --button-bd-color: var(--button-warning-bd-color);\r\n  --button-bg-color: var(--button-warning-bg-color);\r\n}\r\n.pops button[data-type=\"warning\"]:active {\r\n  --button-color: var(--button-warning-active-color);\r\n  --button-bd-color: var(--button-warning-active-bd-color);\r\n  --button-bg-color: var(--button-warning-active-bg-color);\r\n}\r\n.pops button[data-type=\"warning\"]:hover {\r\n  --button-color: var(--button-warning-hover-color);\r\n  --button-bd-color: var(--button-warning-hover-bd-color);\r\n  --button-bg-color: var(--button-warning-hover-bg-color);\r\n}\r\n.pops button[data-type=\"warning\"]:focus-visible {\r\n  outline: var(--button-warning-focus-visible-outline);\r\n  outline-offset: var(--button-warning-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"warning\"]:disabled {\r\n  --button-color: var(--button-warning-disabled-color);\r\n  --button-bd-color: var(--button-warning-disabled-bd-color);\r\n  --button-bg-color: var(--button-warning-disabled-bg-color);\r\n}\r\n\r\n.pops button[data-type=\"danger\"] {\r\n  --button-color: var(--button-danger-color);\r\n  --button-bd-color: var(--button-danger-bd-color);\r\n  --button-bg-color: var(--button-danger-bg-color);\r\n}\r\n.pops button[data-type=\"danger\"]:active {\r\n  --button-color: var(--button-danger-active-color);\r\n  --button-bd-color: var(--button-danger-active-bd-color);\r\n  --button-bg-color: var(--button-danger-active-bg-color);\r\n}\r\n.pops button[data-type=\"danger\"]:hover {\r\n  --button-color: var(--button-danger-hover-color);\r\n  --button-bd-color: var(--button-danger-hover-bd-color);\r\n  --button-bg-color: var(--button-danger-hover-bg-color);\r\n}\r\n.pops button[data-type=\"danger\"]:focus-visible {\r\n  outline: var(--button-danger-focus-visible-outline);\r\n  outline-offset: var(--button-danger-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"danger\"]:disabled {\r\n  --button-color: var(--button-danger-disabled-color);\r\n  --button-bd-color: var(--button-danger-disabled-bd-color);\r\n  --button-bg-color: var(--button-danger-disabled-bg-color);\r\n}\r\n\r\n.pops button[data-type=\"xiaomi-primary\"] {\r\n  --button-color: var(--button-xiaomi-primary-color);\r\n  --button-bd-color: var(--button-xiaomi-primary-bd-color);\r\n  --button-bg-color: var(--button-xiaomi-primary-bg-color);\r\n}\r\n.pops button[data-type=\"xiaomi-primary\"]:active {\r\n  --button-color: var(--button-xiaomi-primary-active-color);\r\n  --button-bd-color: var(--button-xiaomi-primary-active-bd-color);\r\n  --button-bg-color: var(--button-xiaomi-primary-active-bg-color);\r\n}\r\n.pops button[data-type=\"xiaomi-primary\"]:hover {\r\n  --button-color: var(--button-xiaomi-primary-hover-color);\r\n  --button-bd-color: var(--button-xiaomi-primary-hover-bd-color);\r\n  --button-bg-color: var(--button-xiaomi-primary-hover-bg-color);\r\n}\r\n.pops button[data-type=\"xiaomi-primary\"]:focus-visible {\r\n  outline: var(--button-xiaomi-primary-focus-visible-outline);\r\n  outline-offset: var(--button-xiaomi-primary-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"xiaomi-primary\"]:disabled {\r\n  --button-color: var(--button-xiaomi-primary-disabled-color);\r\n  --button-bd-color: var(--button-xiaomi-primary-disabled-bd-color);\r\n  --button-bg-color: var(--button-xiaomi-primary-disabled-bg-color);\r\n}\r\n\r\n.pops button[data-type=\"violet\"] {\r\n  --button-color: var(--button-violet-color);\r\n  --button-bd-color: var(--button-violet-bd-color);\r\n  --button-bg-color: var(--button-violet-bg-color);\r\n}\r\n.pops button[data-type=\"violet\"]:active {\r\n  --button-color: var(--button-violet-active-color);\r\n  --button-bd-color: var(--button-violet-active-bd-color);\r\n  --button-bg-color: var(--button-violet-active-bg-color);\r\n}\r\n.pops button[data-type=\"violet\"]:hover {\r\n  --button-color: var(--button-violet-hover-color);\r\n  --button-bd-color: var(--button-violet-hover-bd-color);\r\n  --button-bg-color: var(--button-violet-hover-bg-color);\r\n}\r\n.pops button[data-type=\"violet\"]:focus-visible {\r\n  outline: var(--button-violet-focus-visible-outline);\r\n  outline-offset: var(--button-violet-focus-visible-outline-offset);\r\n}\r\n.pops button[data-type=\"violet\"]:disabled {\r\n  --button-color: var(--button-violet-disabled-color);\r\n  --button-bd-color: var(--button-violet-disabled-bd-color);\r\n  --button-bg-color: var(--button-violet-disabled-bg-color);\r\n}\r\n";

    var commonCSS = ".pops-flex-items-center {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.pops-flex-y-center {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.pops-flex-x-center {\r\n  display: flex;\r\n  align-content: center;\r\n}\r\n.pops-hide {\r\n  display: none;\r\n}\r\n.pops-hide-important {\r\n  display: none !important;\r\n}\r\n.pops-no-border {\r\n  border: 0;\r\n}\r\n.pops-no-border-important {\r\n  border: 0 !important;\r\n}\r\n.pops-user-select-none {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.pops-line-height-center {\r\n  line-height: normal;\r\n  align-content: center;\r\n}\r\n.pops-width-fill {\r\n  width: 100%;\r\n  width: -moz-available;\r\n  width: -webkit-fill-available;\r\n}\r\n.pops-height-fill {\r\n  height: 100%;\r\n  height: -moz-available;\r\n  height: -webkit-fill-available;\r\n}\r\n.pops-text-is-disabled {\r\n  --pops-text-is-disabled-color: #a8abb2;\r\n  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color);\r\n  color: var(--pops-text-is-disabled-color);\r\n}\r\n.pops-text-is-disabled-important {\r\n  --pops-text-is-disabled-color: #a8abb2;\r\n  --pops-panel-forms-container-item-left-desc-text-color: var(--pops-text-is-disabled-color) !important;\r\n  color: var(--pops-text-is-disabled-color) !important;\r\n}\r\n";

    var animCSS = "@keyframes rotating {\r\n  0% {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes iframeLoadingChange_85 {\r\n  0% {\r\n    background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n  }\r\n  20% {\r\n    background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r\n  }\r\n  40% {\r\n    background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r\n  }\r\n  60% {\r\n    background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r\n  }\r\n  80% {\r\n    background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r\n  }\r\n  100% {\r\n    background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r\n  }\r\n  from {\r\n    width: 75%;\r\n  }\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n@keyframes iframeLoadingChange {\r\n  0% {\r\n    background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n  }\r\n  20% {\r\n    background: linear-gradient(to right, #4995dd, #ead0d0, rgb(123 185 246));\r\n  }\r\n  40% {\r\n    background: linear-gradient(to right, #4995dd, #f4b7b7, rgb(112 178 244));\r\n  }\r\n  60% {\r\n    background: linear-gradient(to right, #4995dd, #ec9393, rgb(80 163 246));\r\n  }\r\n  80% {\r\n    background: linear-gradient(to right, #4995dd, #e87f7f, rgb(25 139 253));\r\n  }\r\n  100% {\r\n    background: linear-gradient(to right, #4995dd, #ee2c2c, rgb(0 124 247));\r\n  }\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n@keyframes searchSelectFalIn {\r\n  from {\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n  to {\r\n    display: block;\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes searchSelectFalOut {\r\n  from {\r\n    display: block;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n\r\n@keyframes pops-anim-wait-rotate {\r\n  form {\r\n    transform: rotate(0);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes pops-anim-spread {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scaleX(0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n@keyframes pops-anim-shake {\r\n  0%,\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    transform: translateX(-10px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translateX(10px);\r\n  }\r\n}\r\n@keyframes pops-anim-rolling-left {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-100%) rotate(-120deg);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0) rotate(0);\r\n  }\r\n}\r\n@keyframes pops-anim-rolling-right {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(100%) rotate(120deg);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0) rotate(0);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-top {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-200%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-bottom {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(200%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-left {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-200%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-right {\r\n  0% {\r\n    transform: translateX(200%);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes pops-anim-fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes pops-anim-fadein-zoom {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0.5);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes pops-anim-fadein-alert {\r\n  0% {\r\n    transform: scale(0.5);\r\n  }\r\n  45% {\r\n    transform: scale(1.05);\r\n  }\r\n  80% {\r\n    transform: scale(0.95);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes pops-anim-don {\r\n  0% {\r\n    opacity: 0;\r\n    transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  2.08333% {\r\n    transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  4.16667% {\r\n    transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  6.25% {\r\n    transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  8.33333% {\r\n    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  10.4167% {\r\n    transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  12.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  14.5833% {\r\n    transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  16.6667% {\r\n    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  18.75% {\r\n    transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  20.8333% {\r\n    transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  22.9167% {\r\n    transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  25% {\r\n    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  27.0833% {\r\n    transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  29.1667% {\r\n    transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  31.25% {\r\n    transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  33.3333% {\r\n    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  35.4167% {\r\n    transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  37.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  39.5833% {\r\n    transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  41.6667% {\r\n    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  43.75% {\r\n    transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  45.8333% {\r\n    transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  47.9167% {\r\n    transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  52.0833% {\r\n    transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  54.1667% {\r\n    transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  56.25% {\r\n    transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  58.3333% {\r\n    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  60.4167% {\r\n    transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  62.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  64.5833% {\r\n    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  66.6667% {\r\n    transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  68.75% {\r\n    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  70.8333% {\r\n    transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  72.9167% {\r\n    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  75% {\r\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  77.0833% {\r\n    transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  79.1667% {\r\n    transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  81.25% {\r\n    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  83.3333% {\r\n    transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  85.4167% {\r\n    transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  87.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  89.5833% {\r\n    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  91.6667% {\r\n    transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  93.75% {\r\n    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  95.8333% {\r\n    transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  97.9167% {\r\n    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n}\r\n@keyframes pops-anim-roll {\r\n  0% {\r\n    transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r\n  }\r\n  100% {\r\n    transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r\n  }\r\n}\r\n@keyframes pops-anim-sandra {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale3d(1.1, 1.1, 1);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n@keyframes pops-anim-gather {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(5, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n  }\r\n}\r\n@keyframes pops-anim-spread-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scaleX(1);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scaleX(0);\r\n  }\r\n}\r\n@keyframes pops-anim-shake-reverse {\r\n  0%,\r\n  100% {\r\n    transform: translateX(10px);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    transform: translateX(-10px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes pops-anim-rolling-left-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateX(0) rotate(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateX(-100%) rotate(-120deg);\r\n  }\r\n}\r\n@keyframes pops-anim-rolling-right-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateX(0) rotate(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateX(100%) rotate(120deg);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-top-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateY(-200%);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-bottom-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateY(200%);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-left-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateX(-200%);\r\n  }\r\n}\r\n@keyframes pops-anim-slide-right-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n  100% {\r\n    transform: translateX(200%);\r\n  }\r\n}\r\n@keyframes pops-anim-fadein-reverse {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes pops-anim-fadein-zoom-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(0.5);\r\n  }\r\n}\r\n@keyframes pops-anim-fadein-alert-reverse {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  45% {\r\n    transform: scale(0.95);\r\n  }\r\n  80% {\r\n    transform: scale(1.05);\r\n  }\r\n  100% {\r\n    transform: scale(0.5);\r\n  }\r\n}\r\n@keyframes pops-anim-don-reverse {\r\n  100% {\r\n    opacity: 0;\r\n    transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  97.9167% {\r\n    transform: matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  95.8333% {\r\n    transform: matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  93.75% {\r\n    transform: matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  91.6667% {\r\n    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  89.5833% {\r\n    transform: matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  87.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  85.4167% {\r\n    transform: matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  83.3333% {\r\n    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  81.25% {\r\n    transform: matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  79.1667% {\r\n    transform: matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  77.0833% {\r\n    transform: matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  75% {\r\n    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  72.9167% {\r\n    transform: matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  70.8333% {\r\n    transform: matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  68.75% {\r\n    transform: matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  66.6667% {\r\n    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  64.5833% {\r\n    transform: matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  62.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  60.4167% {\r\n    transform: matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  58.3333% {\r\n    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  56.25% {\r\n    transform: matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  54.1667% {\r\n    transform: matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  52.0833% {\r\n    transform: matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  47.9167% {\r\n    transform: matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  45.8333% {\r\n    transform: matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  43.75% {\r\n    transform: matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  41.6667% {\r\n    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  39.5833% {\r\n    transform: matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  37.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  35.4167% {\r\n    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  33.3333% {\r\n    transform: matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  31.25% {\r\n    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  29.1667% {\r\n    transform: matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  27.0833% {\r\n    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  25% {\r\n    transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  22.9167% {\r\n    transform: matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  20.8333% {\r\n    transform: matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  18.75% {\r\n    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  16.6667% {\r\n    transform: matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  14.5833% {\r\n    transform: matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  12.5% {\r\n    transform: matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  10.4167% {\r\n    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  8.33333% {\r\n    transform: matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  6.25% {\r\n    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  4.16667% {\r\n    transform: matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  2.08333% {\r\n    transform: matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n  0% {\r\n    opacity: 1;\r\n    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\r\n  }\r\n}\r\n@keyframes pops-anim-roll-reverse {\r\n  0% {\r\n    transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);\r\n  }\r\n  100% {\r\n    transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);\r\n  }\r\n}\r\n@keyframes pops-anim-sandra-reverse {\r\n  0% {\r\n    opacity: 1;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale3d(1.1, 1.1, 1);\r\n  }\r\n}\r\n@keyframes pops-anim-gather-reverse {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(5, 0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(5, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes pops-motion-fadeInTop {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-30px);\r\n    transform: translateY(-30px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeInTop {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-30px);\r\n    -ms-transform: translateY(-30px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n  }\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutTop {\r\n  0% {\r\n    opacity: 10;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-30px);\r\n    transform: translateY(-30px);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeOutTop {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n    -ms-transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: translateY(-30px);\r\n    -ms-transform: translateY(-30px);\r\n  }\r\n}\r\n@-webkit-keyframes pops-motion-fadeInBottom {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeInBottom {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n    -ms-transform: translateY(20px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -ms-transform: translateY(0);\r\n  }\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutBottom {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeOutBottom {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n    -ms-transform: translateY(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n    -ms-transform: translateY(20px);\r\n  }\r\n}\r\n@-webkit-keyframes pops-motion-fadeInLeft {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-20px);\r\n    transform: translateX(-20px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeInLeft {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-30px);\r\n    transform: translateX(-30px);\r\n    -ms-transform: translateX(-30px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n  }\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutLeft {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-30px);\r\n    transform: translateX(-30px);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeOutLeft {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-20px);\r\n    transform: translateX(-20px);\r\n    -ms-transform: translateX(-20px);\r\n  }\r\n}\r\n@-webkit-keyframes pops-motion-fadeInRight {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeInRight {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n    -ms-transform: translateX(20px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n  }\r\n}\r\n@-webkit-keyframes pops-motion-fadeOutRight {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n  }\r\n}\r\n@keyframes pops-motion-fadeOutRight {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n    -ms-transform: translateX(20px);\r\n  }\r\n}\r\n\r\n/* 动画 */\r\n.pops-anim[anim=\"pops-anim-spread\"] {\r\n  animation: pops-anim-spread 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-shake\"] {\r\n  animation: pops-anim-shake 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-left\"] {\r\n  animation: pops-anim-rolling-left 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-right\"] {\r\n  animation: pops-anim-rolling-right 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-top\"] {\r\n  animation: pops-anim-slide-top 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-bottom\"] {\r\n  animation: pops-anim-slide-bottom 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-left\"] {\r\n  animation: pops-anim-slide-left 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-right\"] {\r\n  animation: pops-anim-slide-right 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein\"] {\r\n  animation: pops-anim-fadein 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-zoom\"] {\r\n  animation: pops-anim-fadein-zoom 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-alert\"] {\r\n  animation: pops-anim-fadein-alert 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-don\"] {\r\n  animation: pops-anim-don 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-roll\"] {\r\n  animation: pops-anim-roll 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-sandra\"] {\r\n  animation: pops-anim-sandra 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-gather\"] {\r\n  animation: pops-anim-gather 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-spread-reverse\"] {\r\n  animation: pops-anim-spread-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-shake-reverse\"] {\r\n  animation: pops-anim-shake-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-left-reverse\"] {\r\n  animation: pops-anim-rolling-left-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-rolling-right-reverse\"] {\r\n  animation: pops-anim-rolling-right-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-top-reverse\"] {\r\n  animation: pops-anim-slide-top-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-bottom-reverse\"] {\r\n  animation: pops-anim-slide-bottom-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-left-reverse\"] {\r\n  animation: pops-anim-slide-left-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-slide-right-reverse\"] {\r\n  animation: pops-anim-slide-right-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-reverse\"] {\r\n  animation: pops-anim-fadein-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-zoom-reverse\"] {\r\n  animation: pops-anim-fadein-zoom-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-fadein-alert-reverse\"] {\r\n  animation: pops-anim-fadein-alert-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-don-reverse\"] {\r\n  animation: pops-anim-don-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-roll-reverse\"] {\r\n  animation: pops-anim-roll-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-sandra-reverse\"] {\r\n  animation: pops-anim-sandra-reverse 0.3s;\r\n}\r\n.pops-anim[anim=\"pops-anim-gather-reverse\"] {\r\n  animation: pops-anim-gather-reverse 0.3s;\r\n}\r\n";

    var alertCSS = "";

    var confirmCSS = "";

    var promptCSS = ".pops[type-value=\"prompt\"] {\r\n  --input-color: #000000;\r\n  --input-bg-color: none;\r\n  --input-placeholder-color: #a1a4ac;\r\n}\r\n.pops[type-value=\"prompt\"] input[pops],\r\n.pops[type-value=\"prompt\"] textarea[pops] {\r\n  width: 100%;\r\n  height: 100%;\r\n  outline: 0;\r\n  border: 0;\r\n  color: var(--input-color);\r\n  background-color: var(--input-bg-color);\r\n}\r\n\r\n.pops[type-value=\"prompt\"] input[pops] {\r\n  padding: 5px 10px;\r\n}\r\n.pops[type-value=\"prompt\"] textarea[pops] {\r\n  padding: 5px 10px;\r\n  resize: none;\r\n}\r\n\r\n.pops[type-value=\"prompt\"] input[pops]::placeholder,\r\n.pops[type-value=\"prompt\"] textarea[pops]::placeholder {\r\n  color: var(--input-placeholder-color);\r\n}\r\n@media (prefers-color-scheme: dark) {\r\n  .pops[type-value=\"prompt\"] {\r\n    --input-color: #ffffff;\r\n    --input-bg-color: #333333;\r\n    --input-placeholder-color: #8d9095;\r\n  }\r\n}\r\n";

    var loadingCSS = ".pops[type-value=\"loading\"] {\r\n  --loading-bd-color: rgba(0, 0, 0, 0.2);\r\n  --loading-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n  --loading-box-shadow-color: rgb(0 0 0 / 50%);\r\n  --loading-icon-color: rgba(100, 149, 237, 0.1);\r\n  --loading-icon-bd-top-color: rgb(100, 149, 237, var(--pops-bd-opacity));\r\n}\r\n.pops[type-value=\"loading\"] {\r\n  position: absolute;\r\n  top: 272.5px;\r\n  top: 50%;\r\n  left: 26px;\r\n  left: 50%;\r\n  display: flex;\r\n  overflow: hidden;\r\n  padding: 10px 15px;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  min-width: 0;\r\n  min-height: 0;\r\n  border: 1px solid var(--loading-bd-color);\r\n  border-radius: 5px;\r\n  background-color: var(--loading-bg-color);\r\n  box-shadow: 0 0 5px var(--loading-box-shadow-color);\r\n  vertical-align: middle;\r\n  transition: all 0.35s;\r\n  transform: translate(-50%, -50%);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n.pops[type-value=\"loading\"]:before {\r\n  float: left;\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  border: 0.3em solid var(--loading-icon-color);\r\n  border-top: 0.3em solid var(--loading-icon-bd-top-color);\r\n  border-radius: 50%;\r\n  content: \" \";\r\n  vertical-align: middle;\r\n  font-size: inherit;\r\n  animation: pops-anim-wait-rotate 1.2s linear infinite;\r\n}\r\n.pops[type-value=\"loading\"] .pops-loading-content {\r\n  position: static;\r\n  top: 0;\r\n  bottom: 0;\r\n  float: left;\r\n  overflow: hidden;\r\n  width: auto;\r\n  font-size: inherit;\r\n  line-height: normal;\r\n  align-content: center;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  .pops[type-value=\"loading\"] {\r\n    --loading-bg-color: #222222;\r\n  }\r\n}\r\n";

    var iframeCSS = ".pops[type-value=\"iframe\"] {\r\n  --container-title-height: 55px;\r\n  transition:\r\n    width 0.35s ease,\r\n    height 0.35s ease;\r\n}\r\n.pops[type-value=\"iframe\"] .pops-content {\r\n  overflow: hidden;\r\n}\r\n.pops-loading {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n}\r\n.pops-loading:before {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 3;\r\n  display: block;\r\n  margin: -20px 0 0 -20px;\r\n  padding: 20px;\r\n  border: 4px solid rgb(221, 221, 221, var(--pops-bd-opacity));\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  border-top-color: transparent;\r\n  animation: pops-anim-wait-rotate 1.2s linear infinite;\r\n}\r\n.pops[type-value=\"iframe\"].pops[type-module=\"min\"] {\r\n  bottom: 0;\r\n  max-width: 200px;\r\n  max-height: 53px;\r\n  position: unset;\r\n}\r\n.pops[type-value=\"iframe\"].pops[type-module=\"min\"] .pops-header-control[data-type=\"min\"] {\r\n  display: none;\r\n}\r\n.pops[type-value=\"iframe\"].pops-iframe-unset-top {\r\n  top: unset !important;\r\n}\r\n.pops[type-value=\"iframe\"].pops-iframe-unset-left {\r\n  left: unset !important;\r\n}\r\n.pops[type-value=\"iframe\"].pops-iframe-unset-transform {\r\n  transform: none !important;\r\n}\r\n.pops[type-value=\"iframe\"].pops-iframe-unset-transition {\r\n  transition: none !important;\r\n}\r\n.pops[type-value=\"iframe\"].pops[type-module=\"max\"] {\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n}\r\n.pops[type-value=\"iframe\"] iframe[pops] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 0;\r\n}\r\n.pops-iframe-content-global-loading {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 999999;\r\n  width: 0;\r\n  height: 4px;\r\n  background: linear-gradient(to right, #4995dd, #fff, rgb(202 224 246));\r\n  animation: iframeLoadingChange 2s forwards;\r\n}\r\n\r\n.pops-anim:has(.pops[type-value=\"iframe\"].pops[type-module=\"min\"]) {\r\n  position: unset;\r\n}\r\n";

    var tooltipCSS = ".pops-tip {\r\n  --pops-bg-opacity: 1;\r\n  --tooltip-color: #4e4e4e;\r\n  --tooltip-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n  --tooltip-bd-radius: 2px;\r\n  --tooltip-box-shadow-left-color: rgba(0, 0, 0, 0.24);\r\n  --tooltip-box-shadow-right-color: rgba(0, 0, 0, 0.12);\r\n  --tooltip-font-size: 14px;\r\n  --tooltip-padding-top: 13px;\r\n  --tooltip-padding-right: 13px;\r\n  --tooltip-padding-bottom: 13px;\r\n  --tooltip-padding-left: 13px;\r\n\r\n  --tooltip-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);\r\n  --tooltip-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);\r\n  --tooltip-arrow--after-color: rgb(78, 78, 78);\r\n  --tooltip-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n  --tooltip-arrow--after-width: 12px;\r\n  --tooltip-arrow--after-height: 12px;\r\n}\r\n.pops-tip {\r\n  padding: var(--tooltip-padding-top) var(--tooltip-padding-right) var(--tooltip-padding-bottom)\r\n    var(--tooltip-padding-left);\r\n  max-width: 400px;\r\n  max-height: 300px;\r\n  border-radius: var(--tooltip-bd-radius);\r\n  background-color: var(--tooltip-bg-color);\r\n  box-shadow:\r\n    0 1.5px 4px var(--tooltip-box-shadow-left-color),\r\n    0 1.5px 6px var(--tooltip-box-shadow-right-color);\r\n  color: var(--tooltip-color);\r\n  font-size: var(--tooltip-font-size);\r\n}\r\n.pops-tip[data-position=\"absolute\"] {\r\n  position: absolute;\r\n}\r\n.pops-tip[data-position=\"fixed\"] {\r\n  position: fixed;\r\n}\r\n\r\n.pops-tip .pops-tip-arrow {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 12.5px;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: var(--tooltip-arrow--after-width);\r\n  height: var(--tooltip-arrow--after-height);\r\n  background: var(--tooltip-arrow--after-bg-color);\r\n  color: var(--tooltip-arrow--after-color);\r\n  box-shadow:\r\n    0 1px 7px var(--tooltip-arrow-box-shadow-left-color),\r\n    0 1px 7px var(--tooltip-arrow-box-shadow-right-color);\r\n  content: \"\";\r\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"bottom\"] {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 12.5px;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"bottom\"]:after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: var(--tooltip-arrow--after-width);\r\n  height: var(--tooltip-arrow--after-height);\r\n  background: var(--tooltip-arrow--after-bg-color);\r\n  box-shadow:\r\n    0 1px 7px var(--tooltip-arrow-box-shadow-left-color),\r\n    0 1px 7px var(--tooltip-arrow-box-shadow-right-color);\r\n  content: \"\";\r\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"left\"] {\r\n  top: 50%;\r\n  left: -12.5px;\r\n  width: 12.5px;\r\n  height: 50px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"left\"]:after {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 100%;\r\n  content: \"\";\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"right\"] {\r\n  top: 50%;\r\n  right: -12.5px;\r\n  left: auto;\r\n  width: 12.5px;\r\n  height: 50px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"right\"]:after {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  content: \"\";\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"top\"] {\r\n  top: -12.5px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.pops-tip .pops-tip-arrow[data-position=\"top\"]:after {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  content: \"\";\r\n}\r\n\r\n.pops-tip[data-motion] {\r\n  -webkit-animation-duration: 0.25s;\r\n  animation-duration: 0.25s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n.pops-tip[data-motion=\"fadeOutRight\"] {\r\n  -webkit-animation-name: pops-motion-fadeOutRight;\r\n  animation-name: pops-motion-fadeOutRight;\r\n}\r\n.pops-tip[data-motion=\"fadeInTop\"] {\r\n  -webkit-animation-name: pops-motion-fadeInTop;\r\n  animation-name: pops-motion-fadeInTop;\r\n  animation-timing-function: cubic-bezier(0.49, 0.49, 0.13, 1.3);\r\n}\r\n.pops-tip[data-motion=\"fadeOutTop\"] {\r\n  -webkit-animation-name: pops-motion-fadeOutTop;\r\n  animation-name: pops-motion-fadeOutTop;\r\n  animation-timing-function: cubic-bezier(0.32, 0.37, 0.06, 0.87);\r\n}\r\n.pops-tip[data-motion=\"fadeInBottom\"] {\r\n  -webkit-animation-name: pops-motion-fadeInBottom;\r\n  animation-name: pops-motion-fadeInBottom;\r\n}\r\n.pops-tip[data-motion=\"fadeOutBottom\"] {\r\n  -webkit-animation-name: pops-motion-fadeOutBottom;\r\n  animation-name: pops-motion-fadeOutBottom;\r\n}\r\n.pops-tip[data-motion=\"fadeInLeft\"] {\r\n  -webkit-animation-name: pops-motion-fadeInLeft;\r\n  animation-name: pops-motion-fadeInLeft;\r\n}\r\n.pops-tip[data-motion=\"fadeOutLeft\"] {\r\n  -webkit-animation-name: pops-motion-fadeOutLeft;\r\n  animation-name: pops-motion-fadeOutLeft;\r\n}\r\n.pops-tip[data-motion=\"fadeInRight\"] {\r\n  -webkit-animation-name: pops-motion-fadeInRight;\r\n  animation-name: pops-motion-fadeInRight;\r\n}\r\n\r\n/* github的样式 */\r\n.pops-tip.github-tooltip {\r\n  --tooltip-bg-opacity: 1;\r\n  --tooltip-color: #ffffff;\r\n  --tooltip-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r\n  --tooltip-bd-radius: 6px;\r\n  --tooltip-padding-top: 6px;\r\n  --tooltip-padding-right: 8px;\r\n  --tooltip-padding-bottom: 6px;\r\n  --tooltip-padding-left: 8px;\r\n\r\n  --tooltip-arrow--after-color: rgb(255, 255, 255);\r\n  --tooltip-arrow--after-bg-color: rgb(36, 41, 47, var(--tooltip-bg-opacity));\r\n  --tooltip-arrow--after-width: 8px;\r\n  --tooltip-arrow--after-height: 8px;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  .pops-tip {\r\n    --tooltip-color: #ffffff;\r\n    --tooltip-bg-color: #fafafa;\r\n    --tooltip-arrow--after-color: #fafafa;\r\n    --tooltip-arrow--after-bg-color: rgb(250, 250, 250, var(--pops-bg-opacity));\r\n  }\r\n}\r\n";

    var drawerCSS = ".pops[type-value=\"drawer\"] {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow:\r\n    0px 16px 48px 16px rgba(0, 0, 0, 0.08),\r\n    0px 12px 32px rgba(0, 0, 0, 0.12),\r\n    0px 8px 16px -8px rgba(0, 0, 0, 0.16);\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.pops[type-value=\"drawer\"][direction=\"top\"] {\r\n  width: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.pops[type-value=\"drawer\"][direction=\"bottom\"] {\r\n  width: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.pops[type-value=\"drawer\"][direction=\"left\"] {\r\n  height: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.pops[type-value=\"drawer\"][direction=\"right\"] {\r\n  height: 100%;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n";

    var folderCSS = ".pops-folder-list {\r\n  --folder-arrow-fill-color: #d4d7de;\r\n  --folder-arrow-active-fill-color: #06a7ff;\r\n  --header-breadcrumb-text-color: #06a7ff;\r\n  --header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);\r\n  --header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);\r\n  --header-breadcrumb-all-files-last-text-color: #999999;\r\n  --table-header-row-text-color: #818999;\r\n  --table-body-td-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));\r\n  --table-body-th-text-color: rgb(247, 248, 250, var(--pops-bg-opacity));\r\n  --table-body-row-text-color: #05082c;\r\n  --table-body-row-file-name-text-color: #05082c;\r\n  --table-body-row-hover-bd-color: rgb(245, 246, 247, var(--pops-bg-opacity));\r\n  --table-body-row-hover-bg-color: rgb(245, 246, 247, var(--pops-bg-opacity));\r\n  --table-body-row-file-name-hover-text-color: #06a7ff;\r\n  --table-body-row-content-text-color: #818999;\r\n}\r\n.pops-folder-list .cursor-p {\r\n  cursor: pointer;\r\n}\r\n.pops-folder-list a {\r\n  background: 0 0;\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  color: var(--header-breadcrumb-text-color);\r\n}\r\ntable.pops-folder-list-table__body,\r\ntable.pops-folder-list-table__header {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  padding: 0 20px;\r\n}\r\ntable.pops-folder-list-table__body,\r\ntable.pops-folder-list-table__header {\r\n  height: 100%;\r\n  background: 0 0;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n}\r\ntable.pops-folder-list-table__body {\r\n  height: 100%;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.pops-folder-list table tr {\r\n  line-height: normal;\r\n  align-content: center;\r\n}\r\n.pops-folder-list-table__header-row {\r\n  height: 50px;\r\n  line-height: normal;\r\n  align-content: center;\r\n  color: var(--table-header-row-text-color);\r\n  text-align: left;\r\n  font-size: 12px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.pops-folder-list-table__body-row {\r\n  height: 50px;\r\n  line-height: normal;\r\n  align-content: center;\r\n  color: var(--table-body-row-text-color);\r\n  font-size: 12px;\r\n}\r\n.pops-folder-list-table__body-row:hover {\r\n  background-color: var(--table-body-row-hover-bg-color);\r\n  border-color: var(--table-body-row-hover-bd-color);\r\n  border: 0;\r\n  outline: none;\r\n}\r\n.pops-folder-list table th {\r\n  border: 0;\r\n  border-bottom: 1px solid var(--table-body-th-text-color);\r\n}\r\n.pops-folder-list table td {\r\n  border: 0;\r\n  border-bottom: 1px solid var(--table-body-td-text-color);\r\n  position: relative;\r\n}\r\n.pops-folder-list .list-name-text {\r\n  display: inline-block;\r\n  padding-left: 12px;\r\n  line-height: normal;\r\n  align-content: center;\r\n  max-width: 176px;\r\n}\r\n.pops-folder-list-file-name > div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.pops-mobile-folder-list-file-name {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.pops-mobile-folder-list-file-name > div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  padding: 6px 0px;\r\n  flex-direction: column;\r\n}\r\n.pops-mobile-folder-list-file-name img.pops-folder-list-file-icon {\r\n  width: 45px;\r\n  height: 45px;\r\n}\r\n.pops-mobile-folder-list-file-name a.pops-folder-list-file-name-title-text {\r\n  padding-left: unset;\r\n  max-width: 250px;\r\n  overflow-x: hidden;\r\n  font-weight: 400;\r\n  line-height: unset;\r\n  margin-bottom: 4px;\r\n  white-space: normal;\r\n  text-overflow: unset;\r\n}\r\n\r\n/* 修改滚动 */\r\n.pops-folder-content {\r\n  overflow: hidden !important;\r\n}\r\n.pops-folder-content .pops-folder-list {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.pops-folder-content .pops-folder-list-table__body-div {\r\n  height: 100%;\r\n  flex: 1 auto;\r\n  overflow: auto;\r\n  padding-bottom: 0;\r\n}\r\n.pops-mobile-folder-content .pops-folder-list-table__body-div {\r\n  height: 100%;\r\n  flex: 1 auto;\r\n  overflow: auto;\r\n  padding-bottom: 0;\r\n}\r\n.pops-folder-content table.pops-folder-list-table__body {\r\n  overflow: auto;\r\n}\r\n.pops-folder-content .pops-folder-list-table__header-div {\r\n  flex: 0;\r\n}\r\n.pops-mobile-folder-content .pops-folder-list-table__header-div {\r\n  display: none;\r\n}\r\n\r\n.pops-folder-list .pops-folder-list-file-name-title-text {\r\n  color: var(--table-body-row-file-name-text-color);\r\n}\r\n.pops-folder-list .pops-folder-list-file-name-title-text:hover {\r\n  text-decoration: none;\r\n  color: var(--table-body-row-file-name-hover-text-color);\r\n}\r\n.pops-folder-list .text-ellip {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.pops-folder-list .content {\r\n  color: var(--table-body-row-content-text-color);\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.pops-folder-list .inline-block-v-middle {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.pops-folder-list .flex-a-i-center {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.pops-folder-list .u-file-icon {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.pops-folder-list .u-file-icon--list {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.pops-folder-list .pops-folder-list-file-icon {\r\n  line-height: normal;\r\n  align-content: center;\r\n  position: relative;\r\n  vertical-align: middle;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-primary {\r\n  flex: 1;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n  -ms-flex-direction: row;\r\n  flex-direction: row;\r\n  min-height: 17px;\r\n  flex-wrap: wrap;\r\n}\r\n.pops-folder-list .pops-folder-list-table__sort {\r\n  display: inline-flex;\r\n  margin-left: 4px;\r\n  flex-direction: column;\r\n}\r\n\r\n.pops-folder-list .pops-folder-icon-arrow {\r\n  width: 10px;\r\n  height: 10px;\r\n  fill: var(--folder-arrow-fill-color);\r\n}\r\n.pops-folder-list .pops-folder-icon-active {\r\n  fill: var(--folder-arrow-active-fill-color);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb {\r\n  padding: 4px 20px;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n  -ms-flex-direction: row;\r\n  flex-direction: row;\r\n  -webkit-box-pack: start;\r\n  -webkit-justify-content: start;\r\n  -ms-flex-pack: start;\r\n  justify-content: flex-start;\r\n  min-height: 35px;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles {\r\n  font-size: 12px;\r\n  color: var(--header-breadcrumb-all-files-text-color);\r\n  line-height: normal;\r\n  align-content: center;\r\n  font-weight: 700;\r\n  display: inline-block;\r\n  max-width: 140px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:last-child a {\r\n  color: var(--header-breadcrumb-all-files-last-text-color);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child a {\r\n  font-size: 14px;\r\n  color: var(--header-breadcrumb-all-files-first-text-color);\r\n}\r\n.pops-folder-list .pops-folder-file-list-breadcrumb .iconArrow {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n.pops-folder-list .iconArrow {\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAASCAMAAABYd88+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTOLi4uLi4t7e3uPj49/f397e3t3d3f///97e3vDw8N3d3d7e3t3d3d3d3ejo6N/f397e3t7e3t3d3d/f393d3d3d3RK+NoEAAAAWdFJOUwAnM4YPU/iQA+UIeMDaHhY41i7zX7UebpjFAAAAUElEQVQI15XOORaAIAwE0LATXHCd+x9VfCiksXCq+UUWou8oZ1vXHrt7YVBiYkW4gdMKYFIC4CSATWCNHWPuM6HuHkr1x3N0ZrBu/9gl0b9c3+kF7C7hS1YAAAAASUVORK5CYII=)\r\n    55% 50%/6px 9px no-repeat;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  .pops[type-value=\"folder\"] {\r\n    --pops-title-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r\n    --pops-bottom-btn-controls-border-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r\n  }\r\n  .pops-folder-list {\r\n    --header-breadcrumb-text-color: #06a7ff;\r\n    --header-breadcrumb-all-files-text-color: var(--header-breadcrumb-text-color);\r\n    --header-breadcrumb-all-files-first-text-color: var(--header-breadcrumb-text-color);\r\n    --header-breadcrumb-all-files-last-text-color: #818999;\r\n    --table-body-row-text-color: #f7f8fa;\r\n    --table-body-td-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r\n    --table-body-th-text-color: rgb(73, 83, 102, var(--pops-bg-opacity));\r\n    --table-body-td-text-color: #495366;\r\n    --table-body-row-hover-bd-color: #1f2022;\r\n    --table-body-row-hover-bg-color: #1f2022;\r\n    --table-body-row-file-name-text-color: #f7f8fa;\r\n  }\r\n}\r\n";

    var panelCSS = ".pops[type-value=\"panel\"] {\r\n  --pops-bg-color: #f2f2f2;\r\n  --pops-color: #333333;\r\n  --panel-title-bg-color: #ffffff;\r\n\r\n  --panel-aside-bg-color: #ffffff;\r\n  --panel-aside-hover-color: rgb(64, 158, 255);\r\n  --panel-aside-hover-bg-color: rgba(64, 158, 255, 0.1);\r\n\r\n  --pops-panel-forms-margin-top-bottom: 10px;\r\n  --pops-panel-forms-margin-left-right: 20px;\r\n  --pops-panel-forms-header-icon-size: calc(var(--pops-panel-forms-container-li-padding-left-right) + 1px);\r\n  --pops-panel-forms-header-padding-top-bottom: 15px;\r\n  --pops-panel-forms-header-padding-left-right: 10px;\r\n  --pops-panel-forms-container-item-left-text-gap: 6px;\r\n  --pops-panel-forms-container-item-left-desc-text-size: 0.8em;\r\n  --pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;\r\n  --pops-panel-forms-container-item-bg-color: #ffffff;\r\n  --pops-panel-forms-container-item-title-color: #333;\r\n  --pops-panel-forms-container-item-border-radius: 6px;\r\n  --pops-panel-forms-container-item-margin-top-bottom: 10px;\r\n  --pops-panel-forms-container-item-margin-left-right: var(--pops-panel-forms-margin-left-right);\r\n  --pops-panel-forms-container-li-border-color: var(--pops-bd-color);\r\n  --pops-panel-forms-container-li-padding-top-bottom: 12px;\r\n  --pops-panel-forms-container-li-padding-left-right: 16px;\r\n\r\n  --pops-panel-forms-container-deepMenu-item-active-bg: #e9e9e9;\r\n}\r\n.pops[type-value=\"panel\"] {\r\n  color: var(--pops-color);\r\n  background: var(--pops-bg-color);\r\n}\r\n.pops[type-value] .pops-panel-title {\r\n  background: var(--panel-title-bg-color);\r\n}\r\n\r\n/* ↓panel的CSS↓ */\r\n/* 左侧的列表 */\r\naside.pops-panel-aside {\r\n  box-sizing: border-box;\r\n  flex-shrink: 0;\r\n  max-width: 200px;\r\n  min-width: 100px;\r\n  height: 100%;\r\n  background: var(--panel-aside-bg-color);\r\n  border-right: 1px solid var(--panel-aside-bg-color);\r\n  font-size: 0.9em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\naside.pops-panel-aside .pops-panel-aside-top-container {\r\n  overflow: auto;\r\n}\r\naside.pops-panel-aside ul li {\r\n  margin: 6px 8px;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n  cursor: default;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\naside.pops-panel-aside .pops-is-visited,\r\naside.pops-panel-aside ul li:not(.pops-panel-disabled-aside-hover-css):hover {\r\n  color: var(--panel-aside-hover-color);\r\n  background: var(--panel-aside-hover-bg-color);\r\n}\r\n/* 左侧的列表 */\r\n\r\n/* 底部的容器 */\r\n.pops-panel-bottom-wrapper {\r\n  background: var(--panel-aside-bg-color);\r\n  border-top: 1px solid #ebeef5;\r\n}\r\n.pops-panel-bottom-wrapper:has(.pops-panel-bottom-left-container:empty):has(.pops-panel-bottom-right-container:empty) {\r\n  border-top: 0;\r\n}\r\n.pops-panel-bottom-container {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n}\r\n.pops-panel-bottom-left-container {\r\n}\r\n.pops-panel-bottom-right-container {\r\n}\r\n.pops-panel-bottom-wrapper .pops-panel-bottom-item {\r\n  list-style-type: none;\r\n  margin: 6px 8px;\r\n  border-radius: 4px;\r\n  padding: 6px 10px;\r\n  cursor: default;\r\n}\r\n.pops-panel-bottom-wrapper:not(.pops-panel-disable-bottom-item-hover-css) .pops-panel-bottom-item:hover {\r\n  color: var(--panel-aside-hover-color);\r\n  background: var(--panel-aside-hover-bg-color);\r\n}\r\n/* 底部的容器 */\r\n\r\n.pops-panel-content {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 1;\r\n  overflow: auto;\r\n  flex-basis: auto;\r\n  box-sizing: border-box;\r\n  min-width: 0;\r\n  bottom: 0 !important;\r\n}\r\n\r\n.pops-panel-section-wrapper {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nsection.pops-panel-container {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\nsection.pops-panel-container .pops-panel-container-header-ul,\r\nsection.pops-panel-container .pops-panel-deepMenu-container-header-ul {\r\n  border-bottom: 1px solid rgba(223, 223, 223, var(--pops-bg-opacity));\r\n  flex: 0 auto;\r\n}\r\nsection.pops-panel-container .pops-panel-container-header-ul li,\r\nsection.pops-panel-container .pops-panel-container-header-ul li.pops-panel-container-header-title-text {\r\n  display: flex;\r\n  justify-content: flex-start !important;\r\n  margin: 0px !important;\r\n  padding: var(--pops-panel-forms-header-padding-top-bottom)\r\n    calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right));\r\n  text-align: left;\r\n}\r\nsection.pops-panel-container ul.pops-panel-container-main-ul {\r\n  overflow: auto;\r\n  /*flex: 1;*/\r\n}\r\nsection.pops-panel-container > ul li:not(.pops-panel-forms-container-item) {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: var(--pops-panel-forms-margin-top-bottom)\r\n    calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-margin-left-right));\r\n  gap: 10px;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item-header-text {\r\n  margin: 10px;\r\n  margin-left: calc(\r\n    var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right)\r\n  );\r\n  font-size: 0.9em;\r\n  text-align: left;\r\n  color: var(--pops-panel-forms-container-item-title-color);\r\n}\r\nsection.pops-panel-container li.pops-panel-forms-container-item {\r\n  /* 去除<li>左侧的圆点 */\r\n  display: block;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist {\r\n  border-radius: var(--pops-panel-forms-container-item-border-radius);\r\n  background: var(--pops-panel-forms-container-item-bg-color);\r\n  margin: var(--pops-panel-forms-container-item-margin-top-bottom) var(--pops-panel-forms-margin-left-right);\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul.pops-panel-forms-container-item-formlist li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: var(--pops-panel-forms-container-li-padding-top-bottom)\r\n    var(--pops-panel-forms-container-li-padding-left-right);\r\n  margin: 0px 0px;\r\n  border-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);\r\n  text-align: left;\r\n}\r\n/*section.pops-panel-container\r\n\t.pops-panel-forms-container-item\r\n\tul\r\n\tli.pops-panel-deepMenu-nav-item {\r\n\tpadding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px;\r\n\tmargin: 0px var(--pops-panel-forms-container-li-padding-left-right);\r\n\tborder-bottom: 1px solid var(--pops-panel-forms-container-li-border-color);\r\n}*/\r\nsection.pops-panel-container\r\n  .pops-panel-forms-container-item\r\n  ul.pops-panel-forms-container-item-formlist\r\n  li:last-child {\r\n  border: 0px;\r\n}\r\n/* 左侧的文字 */\r\nsection.pops-panel-container .pops-panel-item-left-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--pops-panel-forms-container-item-left-text-gap);\r\n}\r\n\r\n/* 左侧的主文字 */\r\n/*section.pops-panel-container .pops-panel-item-left-main-text {\r\n\t\r\n}*/\r\n/* 左侧的描述文字 */\r\nsection.pops-panel-container .pops-panel-item-left-desc-text {\r\n  font-size: var(--pops-panel-forms-container-item-left-desc-text-size);\r\n  color: var(--pops-panel-forms-container-item-left-desc-text-color);\r\n}\r\n\r\n/* 折叠面板 */\r\nsection.pops-panel-container .pops-panel-forms-fold {\r\n  border-radius: var(--pops-panel-forms-container-item-border-radius);\r\n  background: var(--pops-panel-forms-container-item-bg-color);\r\n  margin: var(--pops-panel-forms-margin-top-bottom) var(--pops-panel-forms-margin-left-right);\r\n}\r\nsection.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container {\r\n  display: flex;\r\n  align-items: center;\r\n  fill: #6c6c6c;\r\n  justify-content: space-between;\r\n  margin: 0px var(--pops-panel-forms-container-li-padding-left-right) !important;\r\n  padding: var(--pops-panel-forms-container-li-padding-top-bottom) 0px !important;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-fold[data-fold-enable] .pops-panel-forms-fold-container-icon {\r\n  transform: rotate(90deg);\r\n}\r\nsection.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-fold-container-icon {\r\n  width: 15px;\r\n  height: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  transform: rotate(-90deg);\r\n  transition: transform 0.3s;\r\n}\r\n/* 折叠状态 */\r\nsection.pops-panel-container .pops-panel-forms-fold[data-fold-enable] .pops-panel-forms-container-item-formlist {\r\n  height: 0;\r\n}\r\n/* 非折叠状态 */\r\nsection.pops-panel-container .pops-panel-forms-fold ul.pops-panel-forms-container-item-formlist {\r\n  margin: 0;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-fold .pops-panel-forms-container-item-formlist {\r\n  transition: height 0.3s;\r\n  overflow: hidden;\r\n  border-radius: unset;\r\n  background: unset;\r\n  margin: 0;\r\n  height: calc-size(auto, size);\r\n}\r\n/* 折叠面板 */\r\n\r\n/* 姑且认为小于600px的屏幕为移动端 */\r\n@media (max-width: 600px) {\r\n  /* 兼容移动端CSS */\r\n  .pops[type-value=\"panel\"] {\r\n    --pops-panel-forms-margin-left-right: 10px;\r\n  }\r\n  .pops[type-value=\"panel\"] {\r\n    width: 92%;\r\n    width: 92vw;\r\n    width: 92dvw;\r\n  }\r\n  .pops[type-value=\"panel\"] .pops-panel-content aside.pops-panel-aside {\r\n    max-width: 20%;\r\n    min-width: auto;\r\n  }\r\n  .pops[type-value=\"panel\"] section.pops-panel-container .pops-panel-forms-container-item > div {\r\n    text-align: left;\r\n    --pops-panel-forms-margin-left-right: 0px;\r\n  }\r\n  .pops[type-value=\"panel\"] section.pops-panel-container .pops-panel-forms-container-item ul {\r\n    margin: 0px !important;\r\n  }\r\n  .pops[type-value=\"panel\"] section.pops-panel-container > ul > li {\r\n    margin: 10px 10px;\r\n  }\r\n  .pops[type-value=\"panel\"] section.pops-panel-container > ul > li div:nth-child(2) {\r\n    max-width: 55%;\r\n  }\r\n  .pops[type-value=\"panel\"] .pops-panel-select .el-select__selected-item.el-select__placeholder {\r\n    max-width: -moz-available;\r\n    max-width: -webkit-fill-available;\r\n  }\r\n  .pops[type-value=\"panel\"] section.pops-panel-container > ul > li .pops-panel-input span.pops-panel-input__suffix {\r\n    padding: 0 4px;\r\n  }\r\n  .pops[type-value=\"panel\"] section.pops-panel-container .pops-panel-select select {\r\n    min-width: 88px !important;\r\n    width: -moz-available;\r\n    width: -webkit-fill-available;\r\n  }\r\n  .pops[type-value=\"panel\"] section.pops-panel-container .pops-panel-container-header-ul li {\r\n    font-size: 16px;\r\n  }\r\n  .pops[type-value=\"panel\"] .pops-panel-title p[pops],\r\n  .pops[type-value=\"panel\"] section.pops-panel-container > ul li,\r\n  .pops[type-value=\"panel\"] aside.pops-panel-aside ul li {\r\n    font-size: 14px;\r\n  }\r\n}\r\n/* switch的CSS */\r\n.pops-panel-switch {\r\n  --panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r\n  --panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r\n  --panel-switch-circle-color: #dcdfe6;\r\n  --panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n  --panel-switch-checked-circle-color: #409eff;\r\n  --panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));\r\n  --panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));\r\n}\r\n.pops-panel-switch {\r\n  display: inline-flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  position: relative;\r\n  font-size: 14px;\r\n  line-height: normal;\r\n  align-content: center;\r\n  height: 32px;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.pops-panel-switch input.pops-panel-switch__input {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\n.pops-panel-switch:has(input.pops-panel-switch__input:disabled),\r\n.pops-panel-switch[data-disabled],\r\n.pops-panel-switch[data-disabled] .pops-panel-switch__core,\r\n.pops-panel-switch input.pops-panel-switch__input:disabled + .pops-panel-switch__core {\r\n  cursor: not-allowed;\r\n  opacity: 0.6;\r\n}\r\n.pops-panel-switch span.pops-panel-switch__core {\r\n  display: inline-flex;\r\n  position: relative;\r\n  align-items: center;\r\n  min-width: 40px;\r\n  height: 20px;\r\n  border: 1px solid var(--panel-switch-core-bd-color);\r\n  outline: 0;\r\n  border-radius: 10px;\r\n  box-sizing: border-box;\r\n  background: var(--panel-switch-core-bg-color);\r\n  cursor: pointer;\r\n  transition:\r\n    border-color 0.3s,\r\n    background-color 0.3s;\r\n}\r\n.pops-panel-switch .pops-panel-switch__action {\r\n  position: absolute;\r\n  left: 1px;\r\n  border-radius: 100%;\r\n  transition: all 0.3s;\r\n  width: 16px;\r\n  height: 16px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--panel-switch-circle-bg-color);\r\n  color: var(--panel-switch-circle-color);\r\n}\r\n.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core {\r\n  border-color: var(--panel-switch-checked-core-bd-color);\r\n  background-color: var(--panel-switch-checked-core-bg-color);\r\n}\r\n.pops-panel-switch.pops-panel-switch-is-checked .pops-panel-switch__action {\r\n  left: calc(100% - 17px);\r\n  color: var(--panel-switch-checked-circle-color);\r\n}\r\n/* switch的CSS */\r\n\r\n/* slider旧的CSS */\r\nsection.pops-panel-container .pops-panel-slider:has(> input[type=\"range\"]) {\r\n  overflow: hidden;\r\n  height: 25px;\r\n  line-height: normal;\r\n  align-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nsection.pops-panel-container .pops-panel-slider input[type=\"range\"] {\r\n  height: 6px;\r\n  background: rgb(228, 231, 237, var(--pops-bg-opacity));\r\n  outline: 0;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 100%;\r\n}\r\nsection.pops-panel-container .pops-panel-slider input[type=\"range\"]::-webkit-slider-thumb {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r\n  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n  box-shadow:\r\n    0 0 2px rgba(0, 0, 0, 0.3),\r\n    0 3px 5px rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r\n}\r\nsection.pops-panel-container .pops-panel-slider input[type=\"range\"]::-moz-range-thumb {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 1px solid rgb(64, 159, 255, var(--pops-bd-opacity));\r\n  background-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n  box-shadow:\r\n    0 0 2px rgba(0, 0, 0, 0.3),\r\n    0 3px 5px rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\nsection.pops-panel-container .pops-panel-slider input[type=\"range\"]::-moz-range-progress {\r\n  height: 6px;\r\n  border-image: linear-gradient(#409eff, #409eff) 0 fill/9 25 9 0/0 0 0 100vw;\r\n}\r\n/* slider旧的CSS */\r\n\r\n/* slider的CSS */\r\n.pops-slider {\r\n  --pops-slider-color-white: #ffffff;\r\n  --pops-slider-color-primary: #409eff;\r\n  --pops-slider-color-info: #909399;\r\n  --pops-slider-text-color-placeholder: #a8abb2;\r\n  --pops-slider-border-color-light: #e4e7ed;\r\n  --pops-slider-border-radius-circle: 100%;\r\n  --pops-slider-transition-duration-fast: 0.2s;\r\n\r\n  --pops-slider-main-bg-color: var(--pops-slider-color-primary);\r\n  --pops-slider-runway-bg-color: var(--pops-slider-border-color-light);\r\n  --pops-slider-stop-bg-color: var(--pops-slider-color-white);\r\n  --pops-slider-disabled-color: var(--pops-slider-text-color-placeholder);\r\n  --pops-slider-border-radius: 3px;\r\n  --pops-slider-height: 6px;\r\n  --pops-slider-button-size: 20px;\r\n  --pops-slider-button-wrapper-size: 36px;\r\n  --pops-slider-button-wrapper-offset: -15px;\r\n}\r\n\r\n.pops-slider {\r\n  width: 100%;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.pops-slider-width {\r\n  flex: 0 0 52%;\r\n  margin-left: 10px;\r\n}\r\n\r\n.pops-slider__runway {\r\n  flex: 1;\r\n  height: var(--pops-slider-height);\r\n  background-color: var(--pops-slider-runway-bg-color);\r\n  border-radius: var(--pops-slider-border-radius);\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.pops-slider__runway.show-input {\r\n  margin-right: 30px;\r\n  width: auto;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled {\r\n  cursor: default;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__bar {\r\n  background-color: var(--pops-slider-disabled-color);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button {\r\n  border-color: var(--pops-slider-disabled-color);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n  transform: scale(1);\r\n}\r\n\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button:hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.hover,\r\n.pops-slider__runway.pops-slider-is-disabled .pops-slider__button.dragging {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.pops-slider__input {\r\n  flex-shrink: 0;\r\n  width: 130px;\r\n}\r\n\r\n.pops-slider__bar {\r\n  height: var(--pops-slider-height);\r\n  background-color: var(--pops-slider-main-bg-color);\r\n  border-top-left-radius: var(--pops-slider-border-radius);\r\n  border-bottom-left-radius: var(--pops-slider-border-radius);\r\n  position: absolute;\r\n}\r\n\r\n.pops-slider__button-wrapper {\r\n  height: var(--pops-slider-button-wrapper-size);\r\n  width: var(--pops-slider-button-wrapper-size);\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: var(--pops-slider-button-wrapper-offset);\r\n  transform: translate(-50%);\r\n  background-color: transparent;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  line-height: normal;\r\n  outline: none;\r\n}\r\n\r\n.pops-slider__button-wrapper:after {\r\n  display: inline-block;\r\n  content: \"\";\r\n  height: 100%;\r\n  vertical-align: middle;\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover {\r\n  cursor: grab;\r\n}\r\n\r\n.pops-slider__button {\r\n  display: inline-block;\r\n  width: var(--pops-slider-button-size);\r\n  height: var(--pops-slider-button-size);\r\n  vertical-align: middle;\r\n  border: solid 2px var(--pops-slider-main-bg-color);\r\n  background-color: var(--pops-slider-color-white);\r\n  border-radius: 50%;\r\n  box-sizing: border-box;\r\n  transition: var(--pops-slider-transition-duration-fast);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover,\r\n.pops-slider__button.dragging {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.pops-slider__button:hover,\r\n.pops-slider__button.hover {\r\n  cursor: grab;\r\n}\r\n\r\n.pops-slider__button.dragging {\r\n  cursor: grabbing;\r\n}\r\n\r\n.pops-slider__stop {\r\n  position: absolute;\r\n  height: var(--pops-slider-height);\r\n  width: var(--pops-slider-height);\r\n  border-radius: var(--pops-slider-border-radius-circle);\r\n  background-color: var(--pops-slider-stop-bg-color);\r\n  transform: translate(-50%);\r\n}\r\n\r\n.pops-slider__marks {\r\n  top: 0;\r\n  left: 12px;\r\n  width: 18px;\r\n  height: 100%;\r\n}\r\n\r\n.pops-slider__marks-text {\r\n  position: absolute;\r\n  transform: translate(-50%);\r\n  font-size: 14px;\r\n  color: var(--pops-slider-color-info);\r\n  margin-top: 15px;\r\n  white-space: pre;\r\n}\r\n\r\n.pops-slider.is-vertical {\r\n  position: relative;\r\n  display: inline-flex;\r\n  width: auto;\r\n  height: 100%;\r\n  flex: 0;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__runway {\r\n  width: var(--pops-slider-height);\r\n  height: 100%;\r\n  margin: 0 16px;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__bar {\r\n  width: var(--pops-slider-height);\r\n  height: auto;\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__button-wrapper {\r\n  top: auto;\r\n  left: var(--pops-slider-button-wrapper-offset);\r\n  transform: translateY(50%);\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__stop {\r\n  transform: translateY(50%);\r\n}\r\n\r\n.pops-slider.is-vertical .pops-slider__marks-text {\r\n  margin-top: 0;\r\n  left: 15px;\r\n  transform: translateY(50%);\r\n}\r\n\r\n.pops-slider--large {\r\n  height: 40px;\r\n}\r\n\r\n.pops-slider--small {\r\n  height: 24px;\r\n}\r\n/* slider的CSS */\r\n\r\n/* input的CSS */\r\n.pops-panel-input {\r\n  --el-disabled-text-color: #a8abb2;\r\n  --el-disabled-bg-color: #f5f7fa;\r\n  --el-disabled-border-color: #e4e7ed;\r\n  --el-color-danger: #f56c6c;\r\n\r\n  --pops-panel-components-input-text-color: #000000;\r\n  --pops-panel-components-input-text-bg-color: transparent;\r\n  --pops-panel-components-input-text-default-padding: 8px;\r\n  --pops-panel-components-input-bd-color: #dcdfe6;\r\n  --pops-panel-components-input-bg-color: #ffffff;\r\n  --pops-panel-components-input-hover-bd-color: #c0c4cc;\r\n  --pops-panel-components-input-focus-bd-color: #409eff;\r\n  --pops-panel-components-input-suffix-color: #a8abb2;\r\n  --pops-panel-components-input-suffix-bg-color: #ffffff;\r\n}\r\n.pops-panel-input {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  position: relative;\r\n  box-shadow: none;\r\n  width: 200px;\r\n  border: 0px;\r\n}\r\n.pops-panel-input_inner {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  border: 1px solid var(--pops-panel-components-input-bd-color);\r\n  border-radius: 4px;\r\n  background-color: var(--pops-panel-components-input-bg-color);\r\n  box-shadow: none;\r\n}\r\n.pops-panel-input_inner:hover {\r\n  border: 1px solid var(--pops-panel-components-input-hover-bd-color);\r\n}\r\n.pops-panel-input:has(input:disabled):hover {\r\n  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);\r\n}\r\n.pops-panel-input_inner:has(input:focus) {\r\n  outline: 0;\r\n  border: 1px solid var(--pops-panel-components-input-focus-bd-color);\r\n  border-radius: 4px;\r\n  box-shadow: none;\r\n}\r\n.pops-panel-input input {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  text-align: start;\r\n  align-items: center;\r\n  align-content: center;\r\n  white-space: nowrap;\r\n  cursor: text;\r\n  box-sizing: border-box;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  vertical-align: middle;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  color: var(--pops-panel-components-input-text-color);\r\n  background-color: var(--pops-panel-components-input-text-bg-color);\r\n  outline: 0;\r\n  transition: 0.1s;\r\n  border: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: normal;\r\n  height: 32px;\r\n  width: 100%;\r\n  flex: 1;\r\n  /*margin-right: calc(1em + 8px);*/\r\n  margin: 0px;\r\n  padding: var(--pops-panel-components-input-text-default-padding);\r\n}\r\n.pops-panel-input input[type=\"search\"]::-webkit-search-cancel-button {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\n/* 颜色选择器不需要那么宽 */\r\n.pops-panel-input:has(input[type=\"color\"]) {\r\n  width: 50px;\r\n}\r\n.pops-panel-input input[type=\"color\"] {\r\n  padding: 0px;\r\n}\r\n.pops-panel-input_inner:has(input[type=\"file\"]) {\r\n  border: 0px;\r\n  background: transparent;\r\n}\r\n.pops-panel-input input[type=\"file\"] {\r\n  padding: 0px;\r\n  line-height: 32px;\r\n}\r\n.pops-panel-input span.pops-panel-input__suffix {\r\n  display: inline-flex;\r\n  white-space: nowrap;\r\n  flex-shrink: 0;\r\n  flex-wrap: nowrap;\r\n  height: 100%;\r\n  height: -moz-available;\r\n  height: -webkit-fill-available;\r\n  text-align: center;\r\n  color: var(--pops-panel-components-input-suffix-color);\r\n  background: var(--pops-panel-components-input-suffix-bg-color);\r\n  transition: all 0.3s;\r\n  pointer-events: none;\r\n  padding: 0 8px;\r\n  position: relative;\r\n  right: 0px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  border: 1px solid transparent;\r\n}\r\n.pops-panel-input span.pops-panel-input__suffix-inner {\r\n  pointer-events: all;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n/* 如果包含清空图标的按钮，则默认隐藏清空图标，当:hover、:focus、:focus-within、:active时显示清空图标 */\r\n.pops-panel-input span.pops-panel-input__suffix:has(svg[data-type=\"circleClose\"]) {\r\n  display: none;\r\n}\r\n.pops-panel-input:hover span.pops-panel-input__suffix:has(svg[data-type=\"circleClose\"]),\r\n.pops-panel-input:focus span.pops-panel-input__suffix:has(svg[data-type=\"circleClose\"]),\r\n.pops-panel-input:focus-within span.pops-panel-input__suffix:has(svg[data-type=\"circleClose\"]),\r\n.pops-panel-input:active span.pops-panel-input__suffix:has(svg[data-type=\"circleClose\"]) {\r\n  display: inline-flex;\r\n}\r\n/* 当清空图标显示时或查看图标存在时，则隐藏输入框的padding-right */\r\n.pops-panel-input:hover:has(span.pops-panel-input__suffix svg[data-type=\"circleClose\"]) input,\r\n.pops-panel-input:focus:has(span.pops-panel-input__suffix svg[data-type=\"circleClose\"]) input,\r\n.pops-panel-input:focus-within:has(span.pops-panel-input__suffix svg[data-type=\"circleClose\"]) input,\r\n.pops-panel-input:active:has(span.pops-panel-input__suffix svg[data-type=\"circleClose\"]) input,\r\n.pops-panel-input:has(span.pops-panel-input__suffix svg[data-type=\"view\"]) input,\r\n.pops-panel-input:has(span.pops-panel-input__suffix svg[data-type=\"hide\"]) input {\r\n  padding-right: 0;\r\n}\r\n.pops-panel-input .pops-panel-icon {\r\n  cursor: pointer;\r\n}\r\n.pops-panel-input .pops-panel-icon {\r\n  height: inherit;\r\n  line-height: normal;\r\n  align-content: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.3s;\r\n}\r\n.pops-panel-input .pops-panel-icon svg {\r\n  height: 1em;\r\n  width: 1em;\r\n}\r\n\r\n.pops-input-disabled {\r\n  background-color: var(--pops-components-is-disabled-bg-color);\r\n}\r\n.pops-panel-input.pops-input-disabled:hover {\r\n  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);\r\n}\r\n.pops-panel-input input:disabled,\r\n.pops-panel-input input:disabled + .pops-panel-input__suffix {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: var(--el-disabled-text-color);\r\n  -webkit-text-fill-color: var(--el-disabled-text-color);\r\n  cursor: not-allowed;\r\n}\r\n.pops-panel-input input:disabled + .pops-panel-input__suffix {\r\n  display: none;\r\n}\r\n/* 校验样式 */\r\n.pops-panel-input:has(.pops-panel-input-valid-error) {\r\n  --pops-panel-components-input-bd-color: var(--el-color-danger) !important;\r\n  --pops-panel-components-input-hover-bd-color: var(--pops-panel-components-input-bd-color);\r\n  --pops-panel-components-input-focus-bd-color: var(--pops-panel-components-input-bd-color);\r\n}\r\n.pops-panel-input .pops-panel-input-valid-error {\r\n  width: 100%;\r\n  color: var(--el-color-danger);\r\n  font-weight: 500;\r\n  font-size: 0.8em;\r\n  box-sizing: border-box;\r\n  vertical-align: middle;\r\n  display: inline-flex;\r\n  position: relative;\r\n}\r\n/* input的CSS */\r\n\r\n/* textarea的CSS */\r\n.pops-panel-textarea {\r\n  --pops-panel-components-textarea-text-color: #000000;\r\n  --pops-panel-components-textarea-text-bg-color: #ffffff;\r\n  --pops-panel-components-textarea-bd-color: #dcdfe6;\r\n  --pops-panel-components-textarea-hover-bd-color: #c0c4cc;\r\n  --pops-panel-components-textarea-focus-bd-color: #409eff;\r\n}\r\n.pops-panel-textarea textarea {\r\n  width: 100%;\r\n  /*vertical-align: bottom;*/\r\n  position: relative;\r\n  display: block;\r\n  resize: none;\r\n  padding: 5px 11px;\r\n  /*line-height: 1;*/\r\n  box-sizing: border-box;\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: var(--pops-panel-components-textarea-text-color);\r\n  background-color: var(--pops-panel-components-textarea-text-bg-color);\r\n  background-image: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n  transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n  border: 1px solid var(--pops-panel-components-textarea-bd-color);\r\n}\r\n.pops-panel-textarea textarea:hover {\r\n  border-color: var(--pops-panel-components-textarea-hover-bd-color);\r\n}\r\n.pops-panel-textarea:has(textarea:disabled):hover {\r\n  --pops-panel-components-textarea-hover-bd-color: var(--pops-panel-components-textarea-bd-color);\r\n}\r\n.pops-panel-textarea-disable {\r\n  --pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color) !important;\r\n  --pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);\r\n}\r\n.pops-panel-textarea-disable textarea {\r\n  cursor: not-allowed;\r\n}\r\n.pops-panel-textarea textarea:focus {\r\n  outline: 0;\r\n  border-color: var(--pops-panel-components-textarea-focus-bd-color);\r\n}\r\n/* textarea的CSS */\r\n\r\n/* select的CSS */\r\n.pops-panel-select {\r\n  --pops-panel-components-select-disabled-text-color: #a8abb2;\r\n  --pops-panel-components-select-text-color: #000000;\r\n  --pops-panel-components-select-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));\r\n  --pops-panel-components-select-hover-bd-color: rgb(184, 184, 184, var(--pops-bd-opacity));\r\n  --pops-panel-components-select-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n}\r\n.pops-panel-select {\r\n  border: 0;\r\n}\r\n.pops-panel-select select {\r\n  width: 100%;\r\n  height: 32px;\r\n  line-height: normal;\r\n  align-content: center;\r\n  min-width: 200px;\r\n  border: 1px solid var(--pops-panel-components-select-bd-color);\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  outline: 0;\r\n  color: var(--pops-panel-components-select-text-color);\r\n  background-color: var(--pops-panel-components-select-bg-color);\r\n  box-shadow: none;\r\n}\r\n.pops-panel-select select:hover {\r\n  border: 1px solid var(--pops-panel-components-select-hover-bd-color);\r\n}\r\n.pops-panel-select-disable {\r\n  --pops-panel-components-select-text-color: var(--pops-components-is-disabled-text-color);\r\n  --pops-panel-components-select-bg-color: var(--pops-components-is-disabled-bg-color);\r\n}\r\n.pops-panel-select-disable select {\r\n  cursor: not-allowed;\r\n}\r\n.pops-panel-select-disable select:hover {\r\n  box-shadow: none;\r\n  --pops-panel-components-select-hover-bd-color: var(--pops-panel-components-select-bd-color);\r\n}\r\n.pops-panel-select select:focus {\r\n  border: 1px solid rgb(64, 158, 255, var(--pops-bd-opacity));\r\n  box-shadow: none;\r\n}\r\n/* select的CSS */\r\n\r\n/* select dialog 的CSS */\r\n.pops-panel-select[data-mode=\"dialog\"] {\r\n}\r\n/* select dialog 的CSS */\r\n\r\n/* select horizontal 的CSS */\r\n.pops-panel-select[data-mode=\"horizontal\"] {\r\n  --pops-panel-components-select-horizontal-selected-text-color: #626aef;\r\n  --pops-panel-components-select-horizontal-selected-bg-color: #eff0fd;\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .el-select__wrapper {\r\n  padding: 0;\r\n  gap: 0;\r\n  border: 0;\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .select-item {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid var(--el-border-color);\r\n  height: -moz-available;\r\n  height: -webkit-fill-available;\r\n  border-left: 0;\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .select-item:hover {\r\n  color: var(--el-color-primary);\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .select-item:first-child {\r\n  border-left: 1px solid var(--el-border-color);\r\n  border-top-left-radius: var(--el-border-radius-base);\r\n  border-bottom-left-radius: var(--el-border-radius-base);\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .select-item:last-child {\r\n  border-top-right-radius: var(--el-border-radius-base);\r\n  border-bottom-right-radius: var(--el-border-radius-base);\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .select-item.select__selected-item {\r\n  color: var(--pops-panel-components-select-horizontal-selected-text-color);\r\n  background-color: var(--pops-panel-components-select-horizontal-selected-bg-color);\r\n  border-color: var(--pops-panel-components-select-horizontal-selected-bg-color);\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .select-item:has(+ .select__selected-item) {\r\n  border-right: 0;\r\n}\r\n.pops-panel-select[data-mode=\"horizontal\"] .select-item[disabled] {\r\n  color: var(--pops-panel-components-select-disabled-text-color);\r\n  --pops-panel-components-select-horizontal-selected-text-color: var(\r\n    --pops-panel-components-select-disabled-text-color\r\n  );\r\n  cursor: not-allowed;\r\n  background: unset;\r\n}\r\n/* select horizontal 的CSS */\r\n\r\n/* select-multiple的CSS*/\r\n.pops-panel-select-multiple,\r\n.pops-panel-select {\r\n  --el-border-radius-base: 4px;\r\n  --el-fill-color-blank: #ffffff;\r\n  --el-transition-duration: 0.3s;\r\n  --el-border-color: #cbcbcb;\r\n  --el-text-color-placeholder: #a8abb2;\r\n  --color: inherit;\r\n  --el-select-input-color: #a8abb2;\r\n  --el-select-input-font-size: 14px;\r\n  --el-text-color-regular: #606266;\r\n  --el-color-info: #909399;\r\n  --el-color-info-light-9: #f4f4f5;\r\n  --el-color-info-light-8: #e9e9eb;\r\n  --el-color-primary-light-9: #ecf5ff;\r\n  --el-color-primary-light-8: #d9ecff;\r\n  --el-color-primary: #409eff;\r\n  --el-color-white: #ffffff;\r\n  width: 200px;\r\n}\r\n.pops-panel-select .el-select__wrapper,\r\n.pops-panel-select-multiple .el-select__wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n  text-align: left;\r\n  font-size: 14px;\r\n  padding: 4px 12px;\r\n  gap: 6px;\r\n  min-height: 32px;\r\n  line-height: normal;\r\n  align-content: center;\r\n  border-radius: var(--el-border-radius-base);\r\n  background-color: var(--el-fill-color-blank);\r\n  transition: var(--el-transition-duration);\r\n  transform: translateZ(0);\r\n  border: 1px solid var(--el-border-color);\r\n}\r\n.pops-panel-select .el-select__wrapper.is-focused,\r\n.pops-panel-select-multiple .el-select__wrapper.is-focused {\r\n  --el-border-color: var(--el-color-primary);\r\n}\r\n.pops-panel-select .el-select__selection,\r\n.pops-panel-select-multiple .el-select__selection {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  flex: 1;\r\n  min-width: 0;\r\n  gap: 6px;\r\n}\r\n.pops-panel-select .el-select__selection[data-selected-text-align=\"left\"] {\r\n  justify-content: left;\r\n}\r\n.pops-panel-select .el-select__selection[data-selected-text-align=\"center\"] {\r\n  justify-content: center;\r\n}\r\n.pops-panel-select .el-select__selection[data-selected-text-align=\"right\"] {\r\n  justify-content: right;\r\n}\r\n.pops-panel-select .el-select__selected-item,\r\n.pops-panel-select-multiple .el-select__selected-item {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.pops-panel-select .el-select__selected-item span {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.pops-panel-select .el-select__selected-item.el-select__choose_tag .el-tag,\r\n.pops-panel-select-multiple .el-select__selected-item.el-select__choose_tag .el-tag {\r\n  max-width: 200px;\r\n}\r\n.pops-panel-select .el-select__input-wrapper,\r\n.pops-panel-select-multiple .el-select__input-wrapper {\r\n  max-width: 100%;\r\n}\r\n.pops-panel-select .el-select__selection.is-near,\r\n.pops-panel-select-multiple .el-select__selection.is-near {\r\n  margin-left: -8px;\r\n}\r\n.pops-panel-select .el-select__placeholder,\r\n.pops-panel-select-multiple .el-select__placeholder {\r\n  position: absolute;\r\n  display: block;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  width: 100%;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  color: var(--el-input-text-color, var(--el-text-color-regular));\r\n}\r\n.pops-panel-select .el-select__placeholder.is-transparent,\r\n.pops-panel-select-multiple .el-select__placeholder.is-transparent {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  color: var(--el-text-color-placeholder);\r\n}\r\n.pops-panel-select .el-select__prefix,\r\n.pops-panel-select .el-select__suffix,\r\n.pops-panel-select-multiple .el-select__prefix,\r\n.pops-panel-select-multiple .el-select__suffix {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  gap: 6px;\r\n  color: var(--el-input-icon-color, var(--el-text-color-placeholder));\r\n}\r\n.pops-panel-select .el-icon,\r\n.pops-panel-select-multiple .el-icon {\r\n  --color: inherit;\r\n  height: 1em;\r\n  width: 1em;\r\n  line-height: normal;\r\n  align-content: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  fill: currentColor;\r\n  color: var(--color);\r\n  font-size: inherit;\r\n}\r\n.pops-panel-select .el-icon svg,\r\n.pops-panel-select-multiple .el-icon svg {\r\n  height: 1em;\r\n  width: 1em;\r\n}\r\n.pops-panel-select .el-select__caret,\r\n.pops-panel-select-multiple .el-select__caret {\r\n  color: var(--el-select-input-color);\r\n  font-size: var(--el-select-input-font-size);\r\n  transition: transform var(--el-transition-duration);\r\n  transform: rotate(0);\r\n  cursor: pointer;\r\n}\r\n/* 把箭头旋转 */\r\n.pops-panel-select[data-show-option] .el-select__caret,\r\n.pops-panel-select-multiple[data-show-option] .el-select__caret {\r\n  transform: rotate(180deg);\r\n}\r\n.pops-panel-select-multiple .el-tag {\r\n  --el-tag-font-size: 12px;\r\n  --el-tag-border-radius: 4px;\r\n  --el-tag-border-radius-rounded: 9999px;\r\n}\r\n.pops-panel-select-multiple .el-tag {\r\n  background-color: var(--el-tag-bg-color);\r\n  border-color: var(--el-tag-border-color);\r\n  color: var(--el-tag-text-color);\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  vertical-align: middle;\r\n  height: 24px;\r\n  padding: 0 9px;\r\n  font-size: var(--el-tag-font-size);\r\n  line-height: normal;\r\n  align-content: center;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-radius: var(--el-tag-border-radius);\r\n  box-sizing: border-box;\r\n  white-space: nowrap;\r\n  --el-icon-size: 14px;\r\n  --el-tag-bg-color: var(--el-color-primary-light-9);\r\n  --el-tag-border-color: var(--el-color-primary-light-8);\r\n  --el-tag-hover-color: var(--el-color-primary);\r\n}\r\n.pops-panel-select-multiple .el-select__selection .el-tag {\r\n  cursor: pointer;\r\n  border-color: transparent;\r\n}\r\n.pops-panel-select-multiple .el-tag.el-tag--info {\r\n  --el-tag-bg-color: var(--el-color-info-light-9);\r\n  --el-tag-border-color: var(--el-color-info-light-8);\r\n  --el-tag-hover-color: var(--el-color-info);\r\n}\r\n.pops-panel-select-multiple .el-tag.el-tag--info {\r\n  --el-tag-text-color: var(--el-color-info);\r\n}\r\n.pops-panel-select-multiple .el-tag.is-closable {\r\n  padding-right: 5px;\r\n}\r\n.pops-panel-select-multiple .el-select__selection .el-tag .el-tag__content {\r\n  min-width: 0;\r\n}\r\n.pops-panel-select-multiple .el-tag .el-tag__close {\r\n  flex-shrink: 0;\r\n  color: var(--el-tag-text-color);\r\n}\r\n.pops-panel-select-multiple .el-tag .el-tag__close:hover {\r\n  color: var(--el-color-white);\r\n  background-color: var(--el-tag-hover-color);\r\n}\r\n.pops-panel-select-multiple .el-tag .el-icon {\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  font-size: calc(var(--el-icon-size) - 2px);\r\n  height: var(--el-icon-size);\r\n  width: var(--el-icon-size);\r\n}\r\n.pops-panel-select-multiple .el-tag .el-tag__close {\r\n  margin-left: 6px;\r\n}\r\n.pops-panel-select-multiple .el-select__tags-text {\r\n  display: block;\r\n  line-height: normal;\r\n  align-content: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n/* 禁用样式 */\r\n.pops-panel-select-disable {\r\n  --el-fill-color-blank: #f5f7fa;\r\n  --color: #a8abb2;\r\n  --el-border-color: #cbcbcb;\r\n}\r\n.pops-panel-select-disable .el-tag.el-tag--info {\r\n  --el-tag-bg-color: #e7e7e7;\r\n  --el-tag-text-color: var(--pops-components-is-disabled-text-color);\r\n}\r\n.pops-panel-select-disable .el-select__selection .el-tag,\r\n.pops-panel-select-disable .el-tag .el-tag__close:hover,\r\n.pops-panel-select-disable .el-select__wrapper,\r\n.pops-panel-select-disable .el-select__caret {\r\n  cursor: not-allowed;\r\n}\r\n/* select-multiple的CSS*/\r\n\r\n/* deepMenu的css */\r\n.pops-panel-deepMenu-nav-item {\r\n  cursor: pointer;\r\n}\r\n.pops-panel-deepMenu-nav-item:active {\r\n  background: var(--pops-panel-forms-container-deepMenu-item-active-bg);\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:active {\r\n  padding: var(--pops-panel-forms-container-li-padding-top-bottom)\r\n    var(--pops-panel-forms-container-li-padding-left-right);\r\n  margin: 0px;\r\n}\r\n/* 去除上个兄弟item的底部边框颜色 */\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li:has(+ .pops-panel-deepMenu-nav-item:active) {\r\n  border-bottom: 1px solid transparent;\r\n}\r\n/* 第一个和最后一个跟随圆角 */\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:first-child:active {\r\n  border-top-left-radius: var(--pops-panel-forms-container-item-border-radius);\r\n  border-top-right-radius: var(--pops-panel-forms-container-item-border-radius);\r\n}\r\nsection.pops-panel-container .pops-panel-forms-container-item ul li.pops-panel-deepMenu-nav-item:last-child:active {\r\n  border-bottom-left-radius: var(--pops-panel-forms-container-item-border-radius);\r\n  border-bottom-right-radius: var(--pops-panel-forms-container-item-border-radius);\r\n}\r\n.pops-panel-deepMenu-nav-item .pops-panel-deepMenu {\r\n  display: flex;\r\n  align-items: center;\r\n  color: #6c6c6c;\r\n  fill: #6c6c6c;\r\n}\r\n.pops-panel-deepMenu-nav-item .pops-panel-deepMenu-arrowRight-icon {\r\n  width: 15px;\r\n  height: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nsection.pops-panel-deepMenu-container .pops-panel-container-header-ul li.pops-panel-deepMenu-container-header {\r\n  display: flex;\r\n  align-items: center;\r\n  width: -moz-available;\r\n  width: -webkit-fill-available;\r\n  padding: var(--pops-panel-forms-header-padding-top-bottom)\r\n    calc(\r\n      var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-container-li-padding-left-right) -\r\n        var(--pops-panel-forms-header-icon-size)\r\n    );\r\n  gap: 0px;\r\n}\r\n.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {\r\n  width: var(--pops-panel-forms-header-icon-size);\r\n  height: var(--pops-panel-forms-header-icon-size);\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n/* 修复safari上图标大小未正常显示 */\r\n.pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon > svg {\r\n  width: inherit;\r\n  height: inherit;\r\n}\r\n/* deepMenu的css */\r\n\r\n/* 文字对齐 */\r\n.pops-panel-item-left-desc-text:has(code) {\r\n  display: flex;\r\n  align-items: baseline;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  .pops[type-value=\"panel\"] {\r\n    --pops-bg-color: #000000;\r\n    --pops-color: #f2f2f2;\r\n    --panel-title-bg-color: #000000;\r\n    --panel-aside-bg-color: #262626;\r\n    --pops-panel-forms-container-item-left-desc-text-color: #6c6c6c;\r\n    --pops-panel-forms-container-item-bg-color: #262626;\r\n    --pops-panel-forms-container-item-title-color: #c1c1c1;\r\n\r\n    --pops-panel-forms-container-li-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));\r\n    --pops-panel-forms-container-deepMenu-item-active-bg: #333333;\r\n  }\r\n  .pops[type-value=\"panel\"] .pops-panel-deepMenu-container .pops-panel-deepMenu-container-left-arrow-icon {\r\n    fill: #f2f2f2;\r\n  }\r\n\r\n  /* switch的CSS */\r\n  .pops-panel-switch {\r\n    --panel-switch-core-bd-color: rgb(220, 223, 230, var(--pops-bd-opacity));\r\n    --panel-switch-core-bg-color: rgb(220, 223, 230, var(--pops-bg-opacity));\r\n    --panel-switch-circle-color: #dcdfe6;\r\n    --panel-switch-circle-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));\r\n    --panel-switch-checked-circle-color: #409eff;\r\n    --panel-switch-checked-core-bd-color: rgb(64, 158, 255, var(--pops-bd-opacity));\r\n    --panel-switch-checked-core-bg-color: rgb(64, 158, 255, var(--pops-bg-opacity));\r\n  }\r\n  /* select的CSS */\r\n  .pops-panel-select {\r\n    --pops-panel-components-select-text-color: #f2f2f2;\r\n    --pops-panel-components-select-bd-color: rgb(51, 51, 51, var(--pops-bd-opacity));\r\n    --pops-panel-components-select-bg-color: #141414;\r\n  }\r\n  /* select-multiple的CSS*/\r\n  .pops-panel-select-multiple {\r\n    --el-fill-color-blank: #141414;\r\n    --el-border-color: #4c4d4f;\r\n    --el-text-color-placeholder: #a8abb2;\r\n    --el-select-input-color: #a8abb2;\r\n    --el-text-color-regular: #606266;\r\n    --el-color-info: #909399;\r\n    --el-color-info-light-8: #e9e9eb;\r\n    --el-color-primary-light-9: #ecf5ff;\r\n    --el-color-primary-light-8: #d9ecff;\r\n    --el-color-primary: #409eff;\r\n    --el-color-white: #ffffff;\r\n  }\r\n  .pops-panel-select-multiple .el-tag {\r\n    --el-color-info-light-9: #202121;\r\n  }\r\n  .pops-panel-select-multiple-disable {\r\n    --el-border-color: rgb(51, 51, 51, var(--pops-bd-opacity));\r\n  }\r\n  .pops-panel-select-multiple-disable .el-tag.el-tag--info {\r\n    --el-tag-bg-color: #2f2f2f;\r\n  }\r\n  /* select-multiple的CSS*/\r\n  /* slider的CSS */\r\n  .pops-slider {\r\n    --pops-slider-border-color-light: #414243;\r\n  }\r\n  /* input的CSS */\r\n  .pops-panel-input {\r\n    --pops-panel-components-input-text-color: #f2f2f2;\r\n    --pops-panel-components-input-bd-color: #4f5052;\r\n    --pops-panel-components-input-bg-color: #141414;\r\n    --pops-panel-components-input-hover-bd-color: #6f7175;\r\n    --pops-panel-components-input-focus-bd-color: #409eff;\r\n    --pops-panel-components-input-suffix-color: #a8abb2;\r\n  }\r\n  /* textarea的CSS */\r\n  .pops-panel-textarea {\r\n    --pops-panel-components-textarea-text-color: #f2f2f2;\r\n    --pops-panel-components-textarea-text-bg-color: #141414;\r\n    --pops-panel-components-textarea-bd-color: #4f5052;\r\n    --pops-panel-components-textarea-hover-bd-color: #6f7175;\r\n    --pops-panel-components-textarea-focus-bd-color: #409eff;\r\n  }\r\n  .pops-panel-textarea-disable {\r\n    --pops-panel-components-textarea-text-color: var(--pops-components-is-disabled-text-color);\r\n    --pops-panel-components-textarea-text-bg-color: var(--pops-components-is-disabled-bg-color);\r\n  }\r\n  /* slider */\r\n  .pops-slider {\r\n    --pops-slider-text-color-placeholder: #8d9095;\r\n  }\r\n}\r\n";

    var rightClickMenuCSS = ".pops-rightClickMenu {\r\n  --pops-right-context-color: #000000;\r\n  --pops-right-context-bg-color: rgb(255, 255, 255, 0.733);\r\n  --pops-right-context-backdrop-filter: blur(10px);\r\n  --pops-right-context-z-index: 10000;\r\n  --pops-right-context-bd-radius: 6px;\r\n  --pops-right-context-menu-shadow-color: rgb(114, 114, 114, 0.251);\r\n  --pops-right-context-menu-row-bd-radius: 6px;\r\n  --pops-right-context-menu-row-visited-color: rgb(0, 0, 0, 0.067);\r\n  --pops-right-context-menu-row-hover-color: rgb(0, 0, 0, 0.067);\r\n}\r\n.pops-rightClickMenu * {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  -webkit-tap-highlight-color: transparent;\r\n  scrollbar-width: thin;\r\n}\r\n.pops-rightClickMenu {\r\n  position: fixed;\r\n  z-index: var(--pops-right-context-z-index);\r\n  text-align: center;\r\n  border-radius: var(--pops-right-context-bd-radius);\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: var(--pops-right-context-color);\r\n  background: var(--pops-right-context-bg-color);\r\n  box-shadow: 0 0.25rem 0.5rem 0.125rem var(--pops-right-context-menu-shadow-color);\r\n  -webkit-backdrop-filter: var(--pops-right-context-backdrop-filter);\r\n  backdrop-filter: var(--pops-right-context-backdrop-filter);\r\n}\r\n.pops-rightClickMenu[data-position=\"absolute\"] {\r\n  position: absolute;\r\n}\r\n/* scale动画 */\r\n.pops-rightClickMenu-anim-scale {\r\n  transition:\r\n    opacity 150ms cubic-bezier(0.2, 0, 0.2, 1),\r\n    transform 150ms cubic-bezier(0.2, 0, 0.2, 1);\r\n  transform: scale(0.85);\r\n}\r\n.pops-rightClickMenu-anim-scale-open {\r\n  transform: scale(1);\r\n}\r\n.pops-rightClickMenu-anim-scale-not-open {\r\n  opacity: 0;\r\n}\r\n/* 展开动画 */\r\n.pops-rightClickMenu-anim-grid {\r\n  display: grid;\r\n  transition: 0.3s;\r\n  grid-template-rows: 0fr;\r\n}\r\n.pops-rightClickMenu-anim-show {\r\n  grid-template-rows: 1fr;\r\n}\r\n.pops-rightClickMenu-is-visited {\r\n  background: var(--pops-right-context-menu-row-visited-color);\r\n}\r\ni.pops-rightClickMenu-icon {\r\n  height: 1em;\r\n  width: 1em;\r\n  line-height: normal;\r\n  align-content: center;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  fill: currentColor;\r\n  color: inherit;\r\n  font-size: inherit;\r\n  margin-right: 6px;\r\n}\r\ni.pops-rightClickMenu-icon[is-loading=\"true\"] {\r\n  animation: rotating 2s linear infinite;\r\n}\r\n.pops-rightClickMenu li:hover {\r\n  background: var(--pops-right-context-menu-row-hover-color);\r\n  cursor: pointer;\r\n}\r\n.pops-rightClickMenu ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n.pops-rightClickMenu ul li {\r\n  padding: 5px 10px;\r\n  margin: 5px 5px;\r\n  border-radius: var(--pops-right-context-menu-row-bd-radius);\r\n  display: flex;\r\n  width: -moz-available;\r\n  width: -webkit-fill-available;\r\n  text-align: left;\r\n  align-items: center;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  /*.pops-rightClickMenu {\r\n\t\t--pops-right-context-menu-shadow-color: #3c3c3c;\r\n\t}*/\r\n}\r\n@media (hover: hover) {\r\n  .pops-rightClickMenu ul li:active {\r\n    transform: scale(0.98);\r\n  }\r\n}\r\n";

    var panelComponents_Select_CSS = ".pops {\r\n  max-height: 300px;\r\n}\r\n.select-container {\r\n  --el-font-size-base: 14px;\r\n  --el-text-color-regular: #606266;\r\n  --el-color-primary: #409eff;\r\n  --el-fill-color-light: #f5f7fa;\r\n  --el-disable-color: #a8abb2;\r\n}\r\n.select-item {\r\n  cursor: pointer;\r\n  font-size: var(--el-font-size-base);\r\n  padding: 0 20px 0 20px;\r\n  position: relative;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: var(--el-text-color-regular);\r\n  min-height: 34px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  box-sizing: border-box;\r\n}\r\n.select-item[aria-disabled],\r\n.select-item[disabled] {\r\n  cursor: not-allowed;\r\n  color: var(--el-disable-color);\r\n  background: unset;\r\n}\r\n.select-item:hover {\r\n  background-color: var(--el-fill-color-light);\r\n}\r\n.select-item.select-item-is-selected:has(.pops-panel-input input) {\r\n  background-color: #e7e7e7;\r\n}\r\n.select-item.select-item-is-selected {\r\n  color: var(--el-color-primary);\r\n  font-weight: 700;\r\n}\r\n.select-item.select-item-is-selected:not(:has(.pops-panel-input))::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 12px;\r\n  border-top: none;\r\n  border-right: none;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-color: var(--el-color-primary);\r\n  mask: url(\"data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E\")\r\n    no-repeat;\r\n  mask-size: 100% 100%;\r\n  -webkit-mask: url(\"data:image/svg+xml;utf8,%3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='currentColor' d='M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z'%3E%3C/path%3E%3C/svg%3E\")\r\n    no-repeat;\r\n  -webkit-mask-size: 100% 100%;\r\n  transform: translateY(-50%);\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n.select-item .pops-panel-input {\r\n  width: 100%;\r\n  margin: 5px 0px;\r\n}\r\n.select-item .pops-panel-input:has(.pops-panel-input-valid-error) {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.select-item .select-item-text {\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  .select-container {\r\n    --el-text-color-regular: #f2f2f2;\r\n    --el-disable-color: #8d9095;\r\n    --el-fill-color-light: #262727;\r\n  }\r\n}\r\n";

    const PopsCSS = {
        /** 主CSS */
        index: indexCSS,
        /** 九宫格位置CSS */
        ninePalaceGridPosition: ninePalaceGridPositionCSS,
        /** 滚动条CSS */
        scrollbar: scrollbarCSS,
        /** 按钮CSS */
        button: buttonCSS,
        /** 通用的CSS */
        common: commonCSS,
        /** 动画 */
        anim: animCSS,
        /** pops.alert */
        alertCSS: alertCSS,
        /** pops.cponfirm */
        confirmCSS: confirmCSS,
        /** pops.prompt */
        promptCSS: promptCSS,
        /** pops.loading */
        loadingCSS: loadingCSS,
        /** pops.iframe */
        iframeCSS: iframeCSS,
        /** pops.tooltip */
        tooltipCSS: tooltipCSS,
        /** pops.drawer */
        drawerCSS: drawerCSS,
        /** pops.folder */
        folderCSS: folderCSS,
        /** pops.panel */
        panelCSS: panelCSS,
        /** pops.rightClickMenu */
        rightClickMenu: rightClickMenuCSS,
        /** pops.panel的select组件 */
        panelComponents_Select: panelComponents_Select_CSS,
    };

    const PopsAnimation = {
        $data: {},
        $flag: {
            /** 是否初始化 */
            isInit: false,
        },
        init() {
            if (!this.$flag.isInit) {
                this.$flag.isInit = true;
                // 处理获取当前所有的动画名
                const $style = popsDOMUtils.createElement("style", {
                    innerHTML: PopsCSS.anim,
                });
                popsDOMUtils.appendHead($style);
                this.$data = null;
                this.$data = popsDOMUtils.getKeyFrames($style.sheet);
                popsUtils.setTimeout(() => {
                    $style.remove();
                }, 50);
            }
        },
        /**
         * 判断是否存在某个动画名
         */
        hasAnim(name) {
            return Object.prototype.hasOwnProperty.call(this.$data, name);
        },
    };

    /**
     * 弹窗实例数据
     */
    const PopsInstData = {
        alert: [],
        confirm: [],
        drawer: [],
        folder: [],
        iframe: [],
        loading: [],
        panel: [],
        prompt: [],
        rightClickMenu: [],
        // 没有 searchSuggestion
        tooltip: [],
    };

    const PopsInstanceUtils = {
        /**
         * 获取页面中最大的z-index的元素信息
         * @param deviation 获取最大的z-index值的偏移，默认是+1
         * @param node 进行判断的元素，默认是document
         * @param ignoreCallBack 执行元素处理时调用的函数，返回false可忽略不想要处理的元素
         * @example
         * Utils.getMaxZIndexNodeInfo();
         * > {
         *   node: ...,
         *   zIndex: 1001
         * }
         **/
        getMaxZIndexNodeInfo(deviation = 1, target = PopsCore.document, ignoreCallBack) {
            deviation = Number.isNaN(deviation) ? 1 : deviation;
            // 最大值 2147483647
            // const maxZIndex = Math.pow(2, 31) - 1;
            // 比较值 2000000000
            const maxZIndexCompare = 2 * Math.pow(10, 9);
            // 当前页面最大的z-index
            let zIndex = 0;
            // 当前的最大z-index的元素，调试使用
            let maxZIndexNode = null;
            /**
             * 元素是否可见
             * @param $css
             */
            function isVisibleNode($css) {
                return $css.position !== "static" && $css.display !== "none";
            }
            /**
             * 查询元素的z-index
             * 并比较值是否是已获取的最大值
             * @param $ele
             */
            function queryMaxZIndex($ele) {
                if (typeof ignoreCallBack === "function") {
                    const ignoreResult = ignoreCallBack($ele);
                    if (typeof ignoreResult === "boolean" && !ignoreResult) {
                        return;
                    }
                }
                /** 元素的样式 */
                const nodeStyle = PopsCore.window.getComputedStyle($ele);
                // 不对position为static和display为none的元素进行获取它们的z-index
                if (isVisibleNode(nodeStyle)) {
                    const nodeZIndex = parseInt(nodeStyle.zIndex);
                    if (!isNaN(nodeZIndex)) {
                        if (nodeZIndex > zIndex) {
                            // 赋值到全局
                            zIndex = nodeZIndex;
                            maxZIndexNode = $ele;
                        }
                    }
                    // 判断shadowRoot
                    if ($ele.shadowRoot != null && $ele instanceof ShadowRoot) {
                        $ele.shadowRoot.querySelectorAll("*").forEach(($shadowEle) => {
                            queryMaxZIndex($shadowEle);
                        });
                    }
                }
            }
            target.querySelectorAll("*").forEach(($ele) => {
                queryMaxZIndex($ele);
            });
            zIndex += deviation;
            if (zIndex >= maxZIndexCompare) {
                // 最好不要超过最大值
                zIndex = maxZIndexCompare;
            }
            return {
                node: maxZIndexNode,
                zIndex: zIndex,
            };
        },
        /**
         * 获取pops所有弹窗中的最大的z-index
         * @param deviation
         */
        getPopsMaxZIndex(deviation = 1) {
            deviation = Number.isNaN(deviation) ? 1 : deviation;
            // 最大值 2147483647
            // const browserMaxZIndex = Math.pow(2, 31) - 1;
            // 比较值 2000000000
            const maxZIndex = 2 * Math.pow(10, 9);
            // 当前页面最大的z-index
            let zIndex = 0;
            // 当前的最大z-index的元素，调试使用
            let maxZIndexNode = null;
            /**
             * 元素是否可见
             * @param $css
             */
            function isVisibleNode($css) {
                return $css.position !== "static" && $css.display !== "none";
            }
            Object.keys(PopsInstData).forEach((instKeyName) => {
                const instData = PopsInstData[instKeyName];
                for (let index = 0; index < instData.length; index++) {
                    const inst = instData[index];
                    const nodeStyle = window.getComputedStyle(inst.$anim);
                    // 不对position为static和display为none的元素进行获取它们的z-index
                    if (isVisibleNode(nodeStyle)) {
                        const nodeZIndex = parseInt(nodeStyle.zIndex);
                        if (!isNaN(nodeZIndex)) {
                            if (nodeZIndex > zIndex) {
                                zIndex = nodeZIndex;
                                maxZIndexNode = inst.$anim;
                            }
                        }
                    }
                }
            });
            zIndex += deviation;
            const isOverMaxZIndex = zIndex >= maxZIndex;
            if (isOverMaxZIndex) {
                // 超出z-index最大值
                zIndex = maxZIndex;
            }
            return { zIndex: zIndex, animElement: maxZIndexNode, isOverMaxZIndex };
        },
        /**
         * 获取页面中最大的z-index
         * @param deviation 获取最大的z-index值的偏移，默认是+1
         * @example
         * getMaxZIndex();
         * > 1001
         **/
        getMaxZIndex(deviation = 1) {
            return this.getMaxZIndexNodeInfo(deviation).zIndex;
        },
        /**
         * 删除配置中对应的对象
         * @param totalInstConfigList 配置实例列表
         * @param  guid 唯一标识
         * @param isAll 是否全部删除
         */
        async removeInstance(totalInstConfigList, guid, isAll = false) {
            /**
             * 移除元素实例
             * @param instCommonConfig
             */
            const removeInst = function (instCommonConfig) {
                if (typeof instCommonConfig.beforeRemoveCallBack === "function") {
                    // 调用移除签的回调
                    instCommonConfig.beforeRemoveCallBack(instCommonConfig);
                }
                instCommonConfig?.$anim?.remove();
                instCommonConfig?.$pops?.remove();
                instCommonConfig?.$mask?.remove();
                instCommonConfig?.$shadowContainer?.remove();
            };
            const asyncInstTask = [];
            // [ inst[], inst[],...]
            totalInstConfigList.forEach((instConfigList) => {
                //  inst[]
                instConfigList.forEach(async (instConfigItem, index) => {
                    // 移除全部或者guid相同
                    if (isAll || (typeof guid === "string" && instConfigItem.guid === guid)) {
                        // 判断是否有动画
                        const animName = instConfigItem.$anim.getAttribute("anim");
                        if (PopsAnimation.hasAnim(animName)) {
                            const reverseAnimName = animName + "-reverse";
                            popsDOMUtils.css(instConfigItem.$anim, "width", "100%");
                            popsDOMUtils.css(instConfigItem.$anim, "height", "100%");
                            popsDOMUtils.css(instConfigItem.$anim, "animation-name", reverseAnimName);
                            if (PopsAnimation.hasAnim(popsDOMUtils.css(instConfigItem.$anim, "animation-name"))) {
                                asyncInstTask.push(new Promise((resolve) => {
                                    popsDOMUtils.on(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), function () {
                                        removeInst(instConfigItem);
                                        resolve();
                                    }, {
                                        capture: true,
                                    });
                                }));
                            }
                            else {
                                removeInst(instConfigItem);
                            }
                        }
                        else {
                            removeInst(instConfigItem);
                        }
                        instConfigList.splice(index, 1);
                    }
                });
            });
            await Promise.all(asyncInstTask);
            return totalInstConfigList;
        },
        /**
         * 隐藏
         * @param popsType
         * @param instConfigList
         * @param guid
         * @param config
         * @param $anim
         * @param $mask
         */
        hide(config, popsType, instConfigList, guid, $anim, $mask) {
            return new Promise((resolve) => {
                const $pops = $anim.querySelector(".pops[type-value]");
                if (popsType === "drawer") {
                    const drawerConfig = config;
                    popsUtils.setTimeout(() => {
                        if ($mask) {
                            popsDOMUtils.css($mask, "display", "none");
                        }
                        if (["top", "bottom"].includes(drawerConfig.direction)) {
                            $pops.style.setProperty("height", "0");
                        }
                        else if (["left", "right"].includes(drawerConfig.direction)) {
                            $pops.style.setProperty("width", "0");
                        }
                        else {
                            console.error("未知direction：", drawerConfig.direction);
                        }
                        resolve();
                    }, drawerConfig.closeDelay);
                }
                else {
                    const fintInst = instConfigList.find((instConfigItem) => instConfigItem.guid === guid);
                    if (fintInst) {
                        // 存在动画
                        const instConfigItem = fintInst;
                        instConfigItem.$anim.style.width = "100%";
                        instConfigItem.$anim.style.height = "100%";
                        Reflect.set(instConfigItem.$anim.style, "animation-name", instConfigItem.$anim.getAttribute("anim") + "-reverse");
                        if (PopsAnimation.hasAnim(Reflect.get(instConfigItem.$anim.style, "animation-name"))) {
                            /**
                             * 动画结束的回调
                             */
                            function animationendCallBack() {
                                instConfigItem.$anim.style.display = "none";
                                if (instConfigItem.$mask) {
                                    instConfigItem.$mask.style.display = "none";
                                }
                                popsDOMUtils.off(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                    capture: true,
                                });
                                resolve();
                            }
                            popsDOMUtils.on(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                capture: true,
                            });
                        }
                        else {
                            instConfigItem.$anim.style.display = "none";
                            if (instConfigItem.$mask) {
                                instConfigItem.$mask.style.display = "none";
                            }
                            resolve();
                        }
                    }
                }
            });
        },
        /**
         * 显示
         * @param popsType
         * @param instConfigList
         * @param guid
         * @param config
         * @param $anim
         * @param $mask
         */
        show(config, popsType, instConfigList, guid, $anim, $mask) {
            return new Promise((resolve) => {
                const $pops = $anim.querySelector(".pops[type-value]");
                if (popsType === "drawer") {
                    const drawerConfig = config;
                    popsUtils.setTimeout(() => {
                        if ($mask) {
                            popsDOMUtils.css($mask, "display", "");
                        }
                        const direction = drawerConfig.direction;
                        const size = drawerConfig.size.toString();
                        if (["top", "bottom"].includes(direction)) {
                            $pops.style.setProperty("height", size);
                        }
                        else if (["left", "right"].includes(direction)) {
                            $pops.style.setProperty("width", size);
                        }
                        else {
                            console.error("未知direction：", direction);
                        }
                        resolve();
                    }, drawerConfig.openDelay ?? 0);
                }
                else {
                    const fintInst = instConfigList.find((instConfigItem) => instConfigItem.guid === guid);
                    if (fintInst) {
                        const instConfigItem = fintInst;
                        instConfigItem.$anim.style.width = "";
                        instConfigItem.$anim.style.height = "";
                        Reflect.set(instConfigItem.$anim.style, "animation-name", instConfigItem.$anim.getAttribute("anim").replace("-reverse", ""));
                        if (PopsAnimation.hasAnim(Reflect.get(instConfigItem.$anim.style, "animation-name"))) {
                            /**
                             * 动画结束的回调
                             */
                            function animationendCallBack() {
                                popsDOMUtils.off(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                    capture: true,
                                });
                                resolve();
                            }
                            instConfigItem.$anim.style.display = "";
                            if (instConfigItem.$mask) {
                                instConfigItem.$mask.style.display = "";
                            }
                            popsDOMUtils.on(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                                capture: true,
                            });
                        }
                        else {
                            instConfigItem.$anim.style.display = "";
                            if (instConfigItem.$mask) {
                                instConfigItem.$mask.style.display = "";
                            }
                            resolve();
                        }
                    }
                }
            });
        },
        /**
         * 关闭
         * @param popsType
         * @param instConfigList
         * @param guid
         * @param config
         * @param $anim
         */
        async close(config, popsType, instConfigList, guid, $anim) {
            // eslint-disable-next-line no-async-promise-executor
            await new Promise(async (resolve) => {
                const $pops = $anim.querySelector(".pops[type-value]");
                const drawerConfig = config;
                /**
                 * 动画结束事件
                 */
                function transitionendEvent() {
                    /**
                     * 弹窗已关闭的回调
                     */
                    async function closeCallBack(event) {
                        if (event.propertyName !== "transform") {
                            return;
                        }
                        popsDOMUtils.off($pops, popsDOMUtils.getTransitionEndNameList(), closeCallBack);
                        await PopsInstanceUtils.removeInstance([instConfigList], guid);
                        resolve();
                    }
                    // 监听过渡结束
                    popsDOMUtils.on($pops, popsDOMUtils.getTransitionEndNameList(), closeCallBack);
                    const popsTransForm = getComputedStyle($pops).transform;
                    if (popsTransForm !== "none") {
                        popsDOMUtils.emit($pops, popsDOMUtils.getTransitionEndNameList(), void 0, true);
                        return;
                    }
                    if (["top"].includes(drawerConfig.direction)) {
                        $pops.style.setProperty("transform", "translateY(-100%)");
                    }
                    else if (["bottom"].includes(drawerConfig.direction)) {
                        $pops.style.setProperty("transform", "translateY(100%)");
                    }
                    else if (["left"].includes(drawerConfig.direction)) {
                        $pops.style.setProperty("transform", "translateX(-100%)");
                    }
                    else if (["right"].includes(drawerConfig.direction)) {
                        $pops.style.setProperty("transform", "translateX(100%)");
                    }
                    else {
                        console.error("未知direction：", drawerConfig.direction);
                    }
                }
                if (popsType === "drawer") {
                    popsUtils.setTimeout(() => {
                        transitionendEvent();
                    }, drawerConfig.closeDelay);
                }
                else {
                    await PopsInstanceUtils.removeInstance([instConfigList], guid);
                    resolve();
                }
            });
            // 判断组件内是否有rightClickMenu、tooltip、searchSuggestion组件
            // 有的话也需要关闭
            PopsInstData.rightClickMenu.forEach((itemConfig) => {
                const config = itemConfig.config;
                if (config.$target instanceof HTMLElement) {
                    const $root = config.$target.getRootNode();
                    if ($root instanceof HTMLElement && $root.parentElement == null) {
                        // 触发销毁元素
                        itemConfig.destory();
                    }
                }
            });
            PopsInstData.tooltip.forEach((itemConfig) => {
                const config = itemConfig.config;
                if (config.$target instanceof HTMLElement) {
                    const $root = config.$target.getRootNode();
                    if ($root instanceof HTMLElement && $root.parentElement == null) {
                        // 触发销毁元素
                        itemConfig.destory();
                    }
                }
            });
        },
        /**
         * 拖拽元素
         * 说明：
         * + 元素的position为absolute或者fixed
         * + 会为元素的
         * @param $move 需要拖拽的元素
         * @param options 配置
         */
        drag($move, options) {
            options = Object.assign({
                limit: true,
                extraDistance: 3,
                container: PopsCore.globalThis,
                emitClick: true,
            }, options);
            let isMove = false;
            // 点击元素，left偏移
            let clickElementLeftOffset = 0;
            // 点击元素，top偏移
            let clickElementTopOffset = 0;
            const AnyTouch = popsUtils.AnyTouch();
            const anyTouchElement = new AnyTouch(options.dragElement, {
                preventDefault(event) {
                    if (typeof options.preventEvent === "function") {
                        return options.preventEvent(event);
                    }
                    else {
                        // 返回true阻止滑动
                        return true;
                    }
                },
            });
            popsDOMUtils.css(options.dragElement, {
                cursor: "move",
            });
            /**
             * 修改移动的元素的style
             */
            function changeMoveElementStyle(element) {
                const old_transitionDuration = element.style.transitionDuration;
                if (globalThis.getComputedStyle(element).transitionDuration !== "0s") {
                    element.style.transitionDuration = "0s";
                }
                return () => {
                    element.style.transitionDuration = old_transitionDuration;
                };
            }
            /**
             * 获取容器的高度、宽度，一般是window为容器
             */
            function getContainerWidthOrHeight(container) {
                container = container ?? globalThis;
                return {
                    width: popsDOMUtils.width(container),
                    height: popsDOMUtils.height(container),
                };
            }
            /**
             * 获取容器的最小left、top偏移
             */
            function getContainerTopOrLeft(container) {
                container = container ?? globalThis;
                if (popsUtils.isWin(container)) {
                    return {
                        left: 0,
                        top: 0,
                    };
                }
                else {
                    const rect = container.getBoundingClientRect();
                    return {
                        left: rect.left,
                        top: rect.top,
                    };
                }
            }
            // 获取transform偏移
            let transformInfo = popsDOMUtils.getTransform($move);
            let resumeMoveElementStyle = null;
            anyTouchElement.on("pan", function (event) {
                if (!isMove) {
                    isMove = true;
                    const rect = options.dragElement.getBoundingClientRect();
                    clickElementLeftOffset = event.x - rect.left;
                    clickElementTopOffset = event.y - rect.top;
                    transformInfo = popsDOMUtils.getTransform($move);
                    //if (event.nativeEvent.offsetX) {
                    //  clickElementLeftOffset = parseInt(event.nativeEvent.offsetX);
                    //} else {
                    //  clickElementLeftOffset = parseInt(event.getOffset().x);
                    //}
                    //if (event.nativeEvent.offsetY) {
                    //  clickElementTopOffset = parseInt(event.nativeEvent.offsetY);
                    //} else {
                    //  clickElementTopOffset = parseInt(event.getOffset().y);
                    //}
                    resumeMoveElementStyle = changeMoveElementStyle($move);
                }
                /** 当前移动的left偏移 */
                let currentMoveLeftOffset = event.x - clickElementLeftOffset + transformInfo.transformLeft;
                /** 当前移动的top偏移 */
                let currentMoveTopOffset = event.y - clickElementTopOffset + transformInfo.transformTop;
                // 拖拽移动
                if (event.phase === "move") {
                    if (options.limit) {
                        // 限制在容器内移动
                        // left偏移最大值
                        const maxLeftOffset = getContainerWidthOrHeight(options.container).width -
                            popsDOMUtils.width($move) +
                            transformInfo.transformLeft;
                        const { left: minLeftOffset, top: minTopOffset } = getContainerTopOrLeft(options.container);
                        // top偏移的最大值
                        const maxTopOffset = getContainerWidthOrHeight(options.container).height -
                            popsDOMUtils.height($move) +
                            transformInfo.transformTop;
                        if (currentMoveLeftOffset > maxLeftOffset) {
                            // 不允许超过容器的最大宽度
                            currentMoveLeftOffset = maxLeftOffset;
                        }
                        if (currentMoveTopOffset > maxTopOffset) {
                            // 不允许超过容器的最大高度
                            currentMoveTopOffset = maxTopOffset;
                        }
                        if (currentMoveLeftOffset - options.extraDistance * 2 < minLeftOffset + transformInfo.transformLeft) {
                            // 不允许left偏移小于容器最小值
                            currentMoveLeftOffset = minLeftOffset + transformInfo.transformLeft;
                            // 最左边 +额外距离
                            currentMoveLeftOffset += options.extraDistance;
                        }
                        else {
                            // 最右边 -额外距离
                            currentMoveLeftOffset -= options.extraDistance;
                        }
                        if (currentMoveTopOffset - options.extraDistance * 2 < minTopOffset + transformInfo.transformTop) {
                            // 不允许top偏移小于容器最小值
                            currentMoveTopOffset = minTopOffset + transformInfo.transformTop;
                            // 最上面 +额外距离
                            currentMoveTopOffset += options.extraDistance;
                        }
                        else {
                            // 最下面 -额外距离
                            currentMoveTopOffset -= options.extraDistance;
                        }
                    }
                    if (typeof options.moveCallBack === "function") {
                        options.moveCallBack($move, currentMoveLeftOffset, currentMoveTopOffset);
                    }
                    popsDOMUtils.css($move, {
                        left: currentMoveLeftOffset + "px",
                        top: currentMoveTopOffset + "px",
                    });
                }
                // 停止拖拽
                if (event.phase === "end") {
                    isMove = false;
                    if (typeof resumeMoveElementStyle === "function") {
                        resumeMoveElementStyle();
                        resumeMoveElementStyle = null;
                    }
                    if (typeof options.endCallBack === "function") {
                        options.endCallBack($move, currentMoveLeftOffset, currentMoveTopOffset);
                    }
                }
            });
            if (options.emitClick) {
                // 因为会覆盖上面的点击事件，主动触发一下
                anyTouchElement.on(["tap"], function (event) {
                    event.changedPoints.forEach((item) => {
                        popsDOMUtils.emit(item.target, "click", void 0, true);
                    });
                });
            }
        },
        /**
         * 排序数组
         * @param getBeforeValueFun
         * @param getAfterValueFun
         * @param sortByDesc 排序是否降序，默认降序
         */
        sortElementListByProperty(getBeforeValueFun, getAfterValueFun, sortByDesc = true) {
            if (typeof sortByDesc !== "boolean") {
                throw new TypeError("参数 sortByDesc 必须为boolean类型");
            }
            if (getBeforeValueFun == null || getAfterValueFun == null) {
                throw new Error("获取前面的值或后面的值的方法不能为空");
            }
            return function (after_obj, before_obj) {
                const beforeValue = getBeforeValueFun(before_obj); //  前
                const afterValue = getAfterValueFun(after_obj); // 后
                if (sortByDesc) {
                    if (afterValue > beforeValue) {
                        return -1;
                    }
                    else if (afterValue < beforeValue) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
                else {
                    if (afterValue < beforeValue) {
                        return -1;
                    }
                    else if (afterValue > beforeValue) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            };
        },
    };

    const PopsHandler = {
        /**
         * 创建shadow
         */
        handlerShadow(config) {
            const $shadowContainer = popsDOMUtils.createElement("div", {
                className: "pops-shadow-container",
            });
            if (config.useShadowRoot) {
                const $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
                return {
                    $shadowContainer,
                    $shadowRoot,
                };
            }
            else {
                return {
                    $shadowContainer,
                    $shadowRoot: $shadowContainer,
                };
            }
        },
        /**
         * 处理初始化
         * @param $styleParent style元素的父元素
         * @param css 添加进ShadowRoot的CSS
         */
        handleInit($styleParent, css) {
            PopsAnimation.init();
            if (!arguments.length) {
                return;
            }
            if ($styleParent == null) {
                return;
            }
            if (css == null) {
                return;
            }
            if (typeof css === "string") {
                if (css.trim() === "") {
                    return;
                }
                css = [
                    {
                        css: css,
                    },
                ];
            }
            else {
                css = css.map((item) => {
                    if (typeof item === "string") {
                        return {
                            css: item,
                        };
                    }
                    else {
                        return item;
                    }
                });
            }
            for (const cssItem of css) {
                const $css = popsDOMUtils.createElement("style", {}, {
                    "data-type": "PopsHandler.handleInit",
                });
                $css.textContent = cssItem.css;
                if (typeof cssItem.name === "string") {
                    $css.setAttribute("data-name", cssItem.name);
                }
                $styleParent.appendChild($css);
            }
        },
        /**
         * 处理遮罩层
         *
         * + 设置遮罩层的点击事件
         * @param config 传递的配置
         */
        handleMask(config = {}) {
            const result = {
                maskElement: popsDOMUtils.parseTextToDOM(config.maskHTML),
            };
            let isMaskClick = false;
            /**
             * 点击其它区域的事件
             * @param event
             */
            function clickEvent(event) {
                popsDOMUtils.preventEvent(event);
                // 获取该类型实例存储列表
                const targetInst = PopsInstData[config.type];
                function originalRun() {
                    if (config.config.mask.clickEvent.toClose) {
                        // 关闭
                        return PopsInstanceUtils.close(config.config, config.type, targetInst, config.guid, config.animElement);
                    }
                    else if (config.config.mask.clickEvent.toHide) {
                        // 隐藏
                        return PopsInstanceUtils.hide(config.config, config.type, targetInst, config.guid, config.animElement, result.maskElement);
                    }
                }
                if (typeof config.config.mask.clickCallBack === "function") {
                    config.config.mask.clickCallBack(originalRun, config.config);
                }
                else {
                    originalRun();
                }
                return false;
            }
            // 判断是否启用了遮罩层点击动作
            if (config.config.mask.clickEvent.toClose || config.config.mask.clickEvent.toHide) {
                /**
                 * 判断点击的元素是否是动画层的元素
                 * @param element
                 * @returns
                 */
                function isAnimElement(element) {
                    return Boolean(element?.localName?.toLowerCase() === "div" &&
                        element.className &&
                        element.className === "pops-anim" &&
                        element.hasAttribute("anim"));
                }
                // 判断按下的元素是否是pops-anim
                popsDOMUtils.on(config.animElement, ["touchstart", "mousedown"], (event) => {
                    const $click = event.composedPath()[0];
                    isMaskClick = isAnimElement($click);
                });
                // 如果有动画层，在动画层上监听点击事件
                popsDOMUtils.on(config.animElement, "click", (event) => {
                    const $click = event.composedPath()[0];
                    if (isAnimElement($click) && isMaskClick) {
                        return clickEvent(event);
                    }
                });
                // 在遮罩层监听点击事件
                // 如果有动画层，那么该点击事件触发不了
                popsDOMUtils.on(result.maskElement, "click", (event) => {
                    isMaskClick = true;
                    clickEvent(event);
                });
            }
            return result;
        },
        /**
         * 处理获取元素
         * @param animElement
         * @param type
         */
        handleQueryElement(animElement, type) {
            return {
                /**
                 * 主元素
                 */
                $pops: animElement.querySelector(".pops[type-value"),
                /**
                 * 确认按钮
                 */
                $btnOk: animElement.querySelector(`.pops-${type}-btn-ok`),
                /**
                 * 取消按钮
                 */
                $btnCancel: animElement.querySelector(`.pops-${type}-btn-cancel`),
                /**
                 * 其它按钮
                 */
                $btnOther: animElement.querySelector(`.pops-${type}-btn-other`),
                /**
                 * 标题元素
                 */
                $title: animElement.querySelector(`.pops-${type}-title`),
                /**
                 * 输入框元素
                 */
                $input: animElement.querySelector(`.pops-${type}-content textarea[pops]`)
                    ? animElement.querySelector(`.pops-${type}-content textarea[pops]`)
                    : animElement.querySelector(`.pops-${type}-content input[pops]`),
                /**
                 * 顶部按钮控制层元素
                 */
                $headerControls: animElement.querySelector(".pops-header-controls"),
                /**
                 * iframe元素
                 */
                $iframe: animElement.querySelector("iframe[pops]"),
                /**
                 * 加载中元素
                 */
                $loading: animElement.querySelector(".pops-loading"),
                /**
                 * 内容元素
                 */
                $content: animElement.querySelector(`.pops-${type}-content`),
                /**
                 * panel的右侧容器元素
                 */
                $panelRightSectionWrapper: animElement.querySelector(`.pops-${type}-section-wrapper`),
                /**
                 * panel侧边栏容器元素
                 */
                $panelLeftAside: animElement.querySelector(`.pops-${type}-content aside.pops-${type}-aside`),
                /**
                 * panel主要区域容器元素
                 */
                $panelContentSectionContainer: animElement.querySelector(`.pops-${type}-content section.pops-${type}-container`),
                /**
                 * panel底部区域
                 */
                $panelBottomWrapper: animElement.querySelector(`.pops-${type}-bottom-wrapper`),
                /**
                 * panel底部区域容器
                 */
                $panelBottomContainer: animElement.querySelector(`.pops-${type}-bottom-container`),
                /**
                 * panel底部区域左侧容器
                 */
                $panelBottomLeftContainer: animElement.querySelector(`.pops-${type}-bottom-left-container`),
                /**
                 * panel底部区域右侧容器
                 */
                $panelBottomRightContainer: animElement.querySelector(`.pops-${type}-bottom-right-container`),
                /**
                 * 内容加载中元素
                 */
                $contentLoading: animElement.querySelector(`.pops-${type}-content-global-loading`),
                /**
                 * 顶部缩小按钮
                 */
                $headerBtnMin: animElement.querySelector(".pops-header-control[data-type='min']"),
                /**
                 * 顶部放大按钮
                 */
                $headerBtnMax: animElement.querySelector(".pops-header-control[data-type='max']"),
                /**
                 * 顶部恢复原样按钮
                 */
                $headerBtnMise: animElement.querySelector(".pops-header-control[data-type='mise']"),
                /**
                 * 顶部关闭按钮
                 */
                $headerBtnClose: animElement.querySelector(".pops-header-control[data-type='close']"),
                /**
                 * 文件夹列表元素
                 */
                $folderList: animElement.querySelector(".pops-folder-list"),
                /**
                 * 文件夹列表顶部元素
                 */
                $folderHeaderNav: animElement.querySelector(".pops-folder-list .pops-folder-list-table__header-div"),
                /**
                 * 文件夹列表行元素
                 */
                $folderHeaderRow: animElement.querySelector(".pops-folder-list .pops-folder-list-table__header-div .pops-folder-list-table__header-row"),
                /**
                 * 文件夹列表tbody元素
                 */
                $folderTbody: animElement.querySelector(".pops-folder-list .pops-folder-list-table__body-div tbody"),
                /**
                 * 文件夹列表primary元素
                 */
                $folderHeaderBreadcrumbPrimary: animElement.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-primary"),
                /**
                 * 文件夹排序按钮-文件名
                 */
                $folderSortFileName: animElement.querySelector('.pops-folder-list-table__sort[data-sort="fileName"]'),
                /**
                 * 文件夹排序按钮-修改时间
                 */
                $folderSortLatestTime: animElement.querySelector('.pops-folder-list-table__sort[data-sort="latestTime"]'),
                /**
                 * 文件夹排序按钮-文件大小
                 */
                $folderSortFileSize: animElement.querySelector('.pops-folder-list-table__sort[data-sort="fileSize"]'),
            };
        },
        /**
         * 获取事件配置
         * @param guid
         * @param $shadowContainer
         * @param $shadowRoot
         * @param type 当前弹窗类型
         * @param $anim 动画层
         * @param $pops 主元素
         * @param $mask 遮罩层
         * @param config 当前配置
         */
        handleEventConfig(config, guid, $shadowContainer, $shadowRoot, type, $anim, $pops, $mask) {
            return {
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                $el: $anim,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                mode: type,
                guid: guid,
                close() {
                    return PopsInstanceUtils.close(config, type, PopsInstData[type], guid, $anim);
                },
                hide() {
                    return PopsInstanceUtils.hide(config, type, PopsInstData[type], guid, $anim, $mask);
                },
                show($parent) {
                    if ($parent) {
                        $parent.appendChild(PopsInstData[type][0].$shadowRoot);
                    }
                    return PopsInstanceUtils.show(config, type, PopsInstData[type], guid, $anim, $mask);
                },
            };
        },
        /**
         * 获取loading的事件配置
         * @param guid
         * @param type 当前弹窗类型
         * @param $anim 动画层
         * @param $pops 主元素
         * @param $mask 遮罩层
         * @param config 当前配置
         */
        handleLoadingEventConfig(config, guid, type, $anim, $pops, $mask) {
            return {
                $el: $anim,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                mode: type,
                guid: guid,
                close() {
                    return PopsInstanceUtils.close(config, type, PopsInstData[type], guid, $anim);
                },
                hide() {
                    return PopsInstanceUtils.hide(config, type, PopsInstData[type], guid, $anim, $mask);
                },
                show() {
                    return PopsInstanceUtils.show(config, type, PopsInstData[type], guid, $anim, $mask);
                },
            };
        },
        /**
         * 处理返回的配置，针对popsHandler.handleEventConfig
         * @param config 配置
         */
        handleResultConfig(config) {
            const resultDetails = Object.assign({}, config);
            popsUtils.delete(resultDetails, "type");
            popsUtils.delete(resultDetails, "function");
            return resultDetails;
        },
        /**
         * 处理点击事件
         * @param type 当前按钮类型
         * @param $btn 按钮元素
         * @param eventConfig 事件配置，由popsHandler.handleEventConfig创建的
         * @param callback 点击回调
         */
        handleClickEvent(type, $btn, eventConfig, callback) {
            if (typeof callback !== "function")
                return;
            popsDOMUtils.on($btn, "click", (event) => {
                const extraParam = {
                    type: type,
                };
                callback(Object.assign(eventConfig, extraParam), event);
            }, {
                capture: true,
            });
        },
        /**
         * 全局监听键盘事件
         * @param keyName 键名|键值
         * @param otherKeyList 组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
         * @param callback 回调函数
         */
        handleKeyboardEvent(keyName, otherKeyList = [], callback) {
            const keyboardEvent = function (event) {
                const _keyName = event.code || event.key;
                const _keyValue = event.charCode || event.keyCode || event.which;
                if (otherKeyList.includes("ctrl") && !event.ctrlKey) {
                    return;
                }
                if (otherKeyList.includes("alt") && !event.altKey) {
                    return;
                }
                if (otherKeyList.includes("meta") && !event.metaKey) {
                    return;
                }
                if (otherKeyList.includes("shift") && !event.shiftKey) {
                    return;
                }
                if (typeof keyName === "string" && keyName === _keyName) {
                    callback && callback(event);
                }
                else if (typeof keyName === "number" && keyName === _keyValue) {
                    callback && callback(event);
                }
            };
            popsDOMUtils.on(PopsCore.globalThis, "keydown", keyboardEvent, {
                capture: true,
            });
            return {
                removeKeyboardEvent() {
                    popsDOMUtils.off(globalThis, "keydown", keyboardEvent, {
                        capture: true,
                    });
                },
            };
        },
        /**
         * 处理prompt的点击事件
         * @param type 触发事件类型
         * @param inputElement 输入框
         * @param  $btn 按钮元素
         * @param eventConfig 事件配置，由popsHandler.handleEventConfig创建的
         * @param callback 点击回调
         */
        handlePromptClickEvent(type, inputElement, $btn, eventConfig, callback) {
            popsDOMUtils.on($btn, "click", (event) => {
                // 额外参数
                const extraParam = {
                    type: type,
                    text: inputElement.value,
                };
                callback(Object.assign(eventConfig, extraParam), event);
            }, {
                capture: true,
            });
        },
        /**
         * 把配置的z-index配置转为数字
         * @param zIndex
         */
        handleZIndex(zIndex) {
            if (typeof zIndex === "function") {
                return zIndex();
            }
            else {
                return zIndex;
            }
        },
        /**
         * 处理config.only
         * @param type 当前弹窗类型
         * @param config 配置
         */
        handleOnly(type, config) {
            if (config.only) {
                // .loading
                // .rightClickMenu
                // .tooltip
                // 单独处理
                if (type === "loading" || type === "tooltip" || type === "rightClickMenu") {
                    const inst = PopsInstData[type];
                    if (inst) {
                        PopsInstanceUtils.removeInstance([inst], "", true);
                    }
                }
                else {
                    PopsInstanceUtils.removeInstance([
                        PopsInstData.alert,
                        PopsInstData.confirm,
                        PopsInstData.drawer,
                        PopsInstData.folder,
                        PopsInstData.iframe,
                        PopsInstData.panel,
                        PopsInstData.prompt,
                    ], "", true);
                }
            }
            else {
                // 对配置进行处理
                // 选择配置的z-index和已有的pops实例的最大z-index值
                const originZIndex = config.zIndex;
                config.zIndex = () => {
                    const { zIndex: maxZIndex } = PopsInstanceUtils.getPopsMaxZIndex(PopsHandler.handleZIndex(originZIndex) + 100);
                    return maxZIndex;
                };
            }
            return config;
        },
        /**
         * 处理把已创建的元素保存到内部环境中
         * @param type 当前弹窗类型
         * @param value
         */
        handlePush(type, value) {
            PopsInstData[type].push(value);
        },
    };

    const PopsAlertDefaultConfig = () => {
        return {
            title: {
                text: "默认标题",
                position: "left",
                html: false,
                style: "",
            },
            content: {
                text: "默认内容",
                html: false,
                style: "",
            },
            btn: {
                position: "flex-end",
                ok: {
                    size: void 0,
                    enable: true,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "确定",
                    type: "primary",
                    callback: function (eventConfig) {
                        eventConfig.close();
                    },
                },
                close: {
                    enable: true,
                    callback: function (eventConfig) {
                        eventConfig.close();
                    },
                },
            },
            useShadowRoot: true,
            class: "",
            only: false,
            width: window.innerWidth < 550 ? "88vw" : "350px",
            height: window.innerHeight < 450 ? "70vh" : "200px",
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
            dragMoveCallBack() { },
            dragEndCallBack() { },
            forbiddenScroll: false,
            style: null,
            beforeAppendToPageCallBack() { },
        };
    };

    const PopsAlert = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "alert";
            let config = PopsAlertDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "ninePalaceGridPosition",
                    css: PopsCSS.ninePalaceGridPosition,
                },
                {
                    name: "scrollbar",
                    css: PopsCSS.scrollbar,
                },
                {
                    name: "button",
                    css: PopsCSS.button,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "alertCSS",
                    css: PopsCSS.alertCSS,
                },
            ]);
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex);
            const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
            const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
            const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
            const { contentStyle, contentPStyle } = PopsElementHandler.createContentStyle(popsType, config);
            const animHTML = PopsElementHandler.createAnim(guid, popsType, config, 
            /*html*/ `
			<div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${config.title.html
            ? config.title.text
            : `<p pops class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`}${headerBtnHTML}</div>
			<div class="pops-content pops-${popsType}-content" style="${contentStyle}">${config.content.html
            ? config.content.text
            : `<p pops class="pops-${popsType}-content-text" style="${contentPStyle}">${config.content.text}</p>`}</div>${bottomBtnHTML}`, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            const { $pops: $pops, $headerBtnClose: $headerCloseBtn, $btnOk: btnOkElement, $title: $title, } = PopsHandler.handleQueryElement($anim, popsType);
            /** 遮罩层元素 */
            let $mask = void 0;
            /** 已创建的元素列表 */
            const $elList = [$anim];
            // 遮罩层元素
            if (config.mask.enable) {
                const handleMask = PopsHandler.handleMask({
                    type: popsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            // 处理返回的配置
            const evtConfig = PopsHandler.handleEventConfig(config, guid, $shadowContainer, $shadowRoot, popsType, $anim, $pops, $mask);
            const result = PopsHandler.handleResultConfig(evtConfig);
            // 为顶部右边的关闭按钮添加点击事件
            PopsHandler.handleClickEvent("close", $headerCloseBtn, evtConfig, config.btn.close?.callback);
            // 为底部ok按钮添加点击事件
            PopsHandler.handleClickEvent("ok", btnOkElement, evtConfig, config.btn.ok?.callback);
            // 创建到页面中
            popsDOMUtils.append($shadowRoot, $elList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                // 添加遮罩层
                $anim.after($mask);
            }
            // 保存
            PopsHandler.handlePush(popsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                config: config,
                destory: result.close,
            });
            // 拖拽
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            return result;
        },
    };

    const PopsConfirmDefaultConfig = () => {
        return {
            title: {
                text: "默认标题",
                position: "left",
                html: false,
                style: "",
            },
            content: {
                text: "默认内容",
                html: false,
                style: "",
            },
            btn: {
                merge: false,
                mergeReverse: false,
                reverse: false,
                position: "flex-end",
                ok: {
                    enable: true,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "确定",
                    type: "primary",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                cancel: {
                    enable: true,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "关闭",
                    type: "default",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                other: {
                    enable: false,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "其它按钮",
                    type: "default",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                close: {
                    enable: true,
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
            },
            useShadowRoot: true,
            class: "",
            only: false,
            width: window.innerWidth < 550 ? "88vw" : "350px",
            height: window.innerHeight < 450 ? "70vh" : "200px",
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
            dragMoveCallBack() { },
            dragEndCallBack() { },
            forbiddenScroll: false,
            style: null,
            beforeAppendToPageCallBack() { },
        };
    };

    const PopsConfirm = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "confirm";
            let config = PopsConfirmDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "ninePalaceGridPosition",
                    css: PopsCSS.ninePalaceGridPosition,
                },
                {
                    name: "scrollbar",
                    css: PopsCSS.scrollbar,
                },
                {
                    name: "button",
                    css: PopsCSS.button,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "confirmCSS",
                    css: PopsCSS.confirmCSS,
                },
            ]);
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex);
            const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
            const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
            const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
            const { contentStyle, contentPStyle } = PopsElementHandler.createContentStyle(popsType, config);
            const animHTML = PopsElementHandler.createAnim(guid, popsType, config, 
            /*html*/ `
            <div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${config.title.html
            ? config.title.text
            : `<p pops class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`}${headerBtnHTML}</div>
                        <div class="pops-content pops-${popsType}-content" style="${contentStyle}">${config.content.html
            ? config.content.text
            : `<p pops class="pops-${popsType}-content-text" style="${contentPStyle}">${config.content.text}</p>`}</div>${bottomBtnHTML}`, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            const { $pops: $pops, $title: $title, $headerBtnClose: $btnClose, $btnOk: $btnOk, $btnCancel: $btnCancel, $btnOther: $btnOther, } = PopsHandler.handleQueryElement($anim, popsType);
            /**
             * 遮罩层元素
             */
            let $mask = void 0;
            /**
             * 已创建的元素列表
             */
            const $elList = [$anim];
            if (config.mask.enable) {
                // 启用遮罩层
                const handleMask = PopsHandler.handleMask({
                    type: popsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            const evtConfig = PopsHandler.handleEventConfig(config, guid, $shadowContainer, $shadowRoot, popsType, $anim, $pops, $mask);
            const result = PopsHandler.handleResultConfig(evtConfig);
            PopsHandler.handleClickEvent("close", $btnClose, evtConfig, config.btn.close.callback);
            PopsHandler.handleClickEvent("ok", $btnOk, evtConfig, config.btn.ok.callback);
            PopsHandler.handleClickEvent("cancel", $btnCancel, evtConfig, config.btn.cancel.callback);
            PopsHandler.handleClickEvent("other", $btnOther, evtConfig, config.btn.other.callback);
            // 创建到页面中
            popsDOMUtils.append($shadowRoot, $elList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            PopsHandler.handlePush(popsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                config: config,
                destory: result.close,
            });
            // 拖拽
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            return result;
        },
    };

    const PopsDrawerDefaultConfig = () => {
        return {
            title: {
                enable: true,
                position: "center",
                text: "默认标题",
                html: false,
                style: "",
            },
            content: {
                text: "默认内容",
                html: false,
                style: "",
            },
            btn: {
                merge: false,
                mergeReverse: false,
                reverse: false,
                position: "flex-end",
                ok: {
                    enable: true,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "确定",
                    type: "primary",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                cancel: {
                    enable: true,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "关闭",
                    type: "default",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                other: {
                    enable: false,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "其它按钮",
                    type: "default",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                close: {
                    enable: true,
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
            },
            mask: {
                enable: true,
                clickEvent: {
                    toClose: true,
                    toHide: false,
                },
                clickCallBack: null,
            },
            useShadowRoot: true,
            class: "",
            zIndex: 10000,
            only: false,
            direction: "right",
            size: "30%",
            lockScroll: false,
            closeOnPressEscape: true,
            openDelay: 0,
            closeDelay: 0,
            borderRadius: 0,
            style: null,
            beforeAppendToPageCallBack() { },
            forbiddenScroll: false,
        };
    };

    const PopsDrawer = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "drawer";
            let config = PopsDrawerDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "ninePalaceGridPosition",
                    css: PopsCSS.ninePalaceGridPosition,
                },
                {
                    name: "scrollbar",
                    css: PopsCSS.scrollbar,
                },
                {
                    name: "button",
                    css: PopsCSS.button,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "drawerCSS",
                    css: PopsCSS.drawerCSS,
                },
            ]);
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex);
            const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
            const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
            const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
            const { contentStyle, contentPStyle } = PopsElementHandler.createContentStyle(popsType, config);
            const animHTML = PopsElementHandler.createAnim(guid, popsType, config, 
            /*html*/ `
            ${config.title.enable
            ? /*html*/ `<div class="pops-title pops-${popsType}-title" style="${headerStyle}">${config.title.html
                ? config.title.text
                : /*html*/ `<p pops class="pops-${popsType}-title-text" style="width: 100%;text-align: ${config.title.position};${headerPStyle}">${config.title.text}</p>`}${headerBtnHTML}</div>`
            : ""}
            <div class="pops-content pops-${popsType}-content" style="${contentStyle}">${config.content.html
            ? config.content.text
            : `<p pops class="pops-${popsType}-content-text" style="${contentPStyle}">${config.content.text}</p>`}</div>${bottomBtnHTML}`, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            const { $pops: popsElement, $headerBtnClose: headerCloseBtnElement, $btnCancel: btnCancelElement, $btnOk: btnOkElement, $btnOther: btnOtherElement, } = PopsHandler.handleQueryElement($anim, popsType);
            const $pops = popsElement;
            const $headerCloseBtn = headerCloseBtnElement;
            const $btnCancel = btnCancelElement;
            const $btnOk = btnOkElement;
            const $btnOther = btnOtherElement;
            /**
             * 遮罩层元素
             */
            let $mask = void 0;
            /**
             * 已创建的元素列表
             */
            const $elList = [$anim];
            if (config.mask.enable) {
                const handleMask = PopsHandler.handleMask({
                    type: popsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            const evtConfig = PopsHandler.handleEventConfig(config, guid, $shadowContainer, $shadowRoot, popsType, $anim, $pops, $mask);
            const result = PopsHandler.handleResultConfig(evtConfig);
            // 处理方向
            $pops.setAttribute("direction", config.direction);
            // 处理border-radius
            // 处理动画前的宽高
            if (config.direction === "top") {
                $pops.style.setProperty("height", "0");
                $pops.style.setProperty("border-radius", `0px 0px ${config.borderRadius}px ${config.borderRadius}px`);
            }
            else if (config.direction === "bottom") {
                $pops.style.setProperty("height", "0");
                $pops.style.setProperty("border-radius", `${config.borderRadius}px ${config.borderRadius}px 0px 0px`);
            }
            else if (config.direction === "left") {
                $pops.style.setProperty("width", "0");
                $pops.style.setProperty("border-radius", `0px ${config.borderRadius}px 0px ${config.borderRadius}px`);
            }
            else if (config.direction === "right") {
                $pops.style.setProperty("width", "0");
                $pops.style.setProperty("border-radius", `${config.borderRadius}px 0px ${config.borderRadius}px 0px`);
            }
            // 按下Esc键触发关闭
            if (config.closeOnPressEscape) {
                PopsHandler.handleKeyboardEvent("Escape", [], function () {
                    evtConfig.close();
                });
            }
            // 待处理的点击事件列表
            const needHandleClickEventList = [
                {
                    type: "close",
                    ele: $headerCloseBtn,
                },
                {
                    type: "cancel",
                    ele: $btnCancel,
                },
                {
                    type: "ok",
                    ele: $btnOk,
                },
                {
                    type: "other",
                    ele: $btnOther,
                },
            ];
            needHandleClickEventList.forEach((item) => {
                PopsHandler.handleClickEvent(item.type, item.ele, evtConfig, (evtConfig, event) => {
                    const callback = config.btn[item.type].callback;
                    if (typeof callback === "function") {
                        callback(evtConfig, event);
                    }
                });
            });
            // 先隐藏，然后根据config.openDelay来显示
            $elList.forEach((element) => {
                element.style.setProperty("display", "none");
                if (["top"].includes(config.direction)) {
                    $pops.style.setProperty("height", config.size.toString());
                    $pops.style.setProperty("transform", "translateY(-100%)");
                }
                else if (["bottom"].includes(config.direction)) {
                    $pops.style.setProperty("height", config.size.toString());
                    $pops.style.setProperty("transform", "translateY(100%)");
                }
                else if (["left"].includes(config.direction)) {
                    $pops.style.setProperty("width", config.size.toString());
                    $pops.style.setProperty("transform", "translateX(-100%)");
                }
                else if (["right"].includes(config.direction)) {
                    $pops.style.setProperty("width", config.size.toString());
                    $pops.style.setProperty("transform", "translateX(100%)");
                }
                element.style.setProperty("display", "");
            });
            // 创建到页面中
            popsDOMUtils.append($shadowRoot, $elList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            popsUtils.setTimeout(() => {
                popsUtils.setTimeout(() => {
                    $pops.style.setProperty("transform", "");
                }, config.openDelay);
            }, 50);
            if ($mask != null) {
                $anim.after($mask);
            }
            PopsHandler.handlePush(popsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                config: config,
                destory: result.close,
            });
            return result;
        },
    };

    const PopsLoadingDefaultConfig = () => {
        return {
            $parent: document.body || document.documentElement,
            content: {
                text: "加载中...",
                icon: "loading",
                style: "",
            },
            useShadowRoot: true,
            class: "",
            only: false,
            zIndex: 10000,
            mask: {
                enable: false,
                clickEvent: {
                    toClose: false,
                    toHide: false,
                },
                clickCallBack: null,
            },
            animation: "pops-anim-fadein-zoom",
            forbiddenScroll: false,
            isAbsolute: false,
            style: null,
            addIndexCSS: true,
        };
    };

    const PopsLoading = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const PopsType = "loading";
            let config = PopsLoadingDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(PopsType, config);
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex);
            const { contentPStyle } = PopsElementHandler.createContentStyle("loading", config);
            const animHTML = PopsElementHandler.createAnim(guid, PopsType, config, 
            /*html*/ `
            <div class="pops-content pops-${PopsType}-content">${config.addIndexCSS
            ? /*html*/ `
                <style data-model-name="index">${PopsCSS.index}</style>
                <style data-model-name="anim">${PopsCSS.anim}</style>
                <style data-model-name="common">${PopsCSS.common}</style>
                `
            : ""}
                <style data-model-name="loadingCSS">
                    ${PopsCSS.loadingCSS}
                </style>
            ${config.style != null ? `<style>${config.style}</style>` : ""}
            	<p pops class="pops-${PopsType}-content-text" style="${contentPStyle}">${config.content.text}</p>
            </div>`, "", zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            const { $pops: $pops } = PopsHandler.handleQueryElement($anim, PopsType);
            /**
             * 遮罩层元素
             */
            let $mask = void 0;
            /**
             * 已创建的元素列表
             */
            const $elList = [$anim];
            if (config.mask.enable) {
                // 创建遮罩层
                const handleMask = PopsHandler.handleMask({
                    type: PopsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            const evtConfig = PopsHandler.handleLoadingEventConfig(config, guid, PopsType, $anim, $pops, $mask);
            popsDOMUtils.append(config.$parent, $elList);
            if ($mask != null) {
                $anim.after($mask);
            }
            // @ts-ignore
            PopsHandler.handlePush(PopsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
            });
            if (config.isAbsolute) {
                // 遮罩层必须是跟随主内容
                // 即设置主内容position: relative，mask：position: absolute
                popsDOMUtils.css($anim, "position", "absolute !important");
                $mask && popsDOMUtils.css($mask, "position", "absolute !important");
            }
            const result = PopsHandler.handleResultConfig(evtConfig);
            return result;
        },
    };

    const PopsFolderDefaultConfig = () => {
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
                callback() { },
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
                    size: void 0,
                    icon: void 0,
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
                    size: void 0,
                    icon: void 0,
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
                    size: void 0,
                    icon: void 0,
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
            dragMoveCallBack() { },
            dragEndCallBack() { },
            forbiddenScroll: false,
            style: null,
            beforeAppendToPageCallBack() { },
        };
    };

    /**
     * 图标
     */
    const Folder_ICON = {
        folder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf++Hv/ZU//OPv/DL/+9Gv/BI/+4Bf+4Ef/XcP/LOP/TSf/RRP/WTv/JM/+3Ef+9Ff/bhf+5BP/DJf+yDv/imv/kqv/bXP/w0v/fd//calQXUgwAAAAKdFJOUwB///8d3L9enl8sr20gAAACN0lEQVRYw+2Y65abIBRGE1EzVbyNSW18/wctHA6XYw4q9Ee7Vt2AgOHbcVyTOMztdnFxcXFMWf7gKHN190VRKDpFC0iNqB5ZvqpXzJRxHoF7hrAa9/hK9j2oYIA2QA/UqXeyNg5QDBrshhHbUH8xxO+uT7sOJ/tU5a4wh0eK8KmKHTxd28Bfo16pqphep5l6I+R/p8xr668kVghVceH8M5EZYnGhnBKRceGqmaZXPPw2xbO+1xU+8axwe8NfzkIV7xVZdF0AVhi+rWdxIfgmwloE6CkrDCPwJbYUeFgK61icxFcNKyxIxE+WgnllQ0y4+HffzZ8WZtJlCDtz+CzqaaFaVGiWBNEOZZ15zihsT2CFnXk4QStsLohTU3FC+Af8I8JWV1fa1jy8u+hnOUy2vnd5SkeGrJBfHZwDbxe87pfxQvejmMZZYxxdYSoyVyixSvtXFLJ7hWq5xCRNSTozczzHCj8T54kI5d8QCtvZAodDIa7DgRkJaII2hBfaJC7EOE7D076XuIoVBu8oN3kpBLVt4YXBVaUSFSbS5Akb00znSoPn9KCJCN0am7SnGhganC4kKhR2MV0vvEn4M7bFhM3GIZqtgfiPr9BdSAYnrnCX3rQeB/2xsKcHouiBBhpO+phQL9CdjmKqsRkXpkMz57dmfTY1v3k8is26zvN2A6yIbKVqm/tMjFBMp5jpxrWKbsB1dJw/AsC3Lt/YEaK7x1t5r7aLj3ned/fRj1TK3H9wXFxc/F/8BgM0jBZ4nc19AAAAAElFTkSuQmCC",
        zip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFQUExURUxpcYHaOWDM+pryU4TbPXLU/XHT/X3Y/nrZpIffP/+gI4La/+9QTvhycXjQL4fbQvBUUoXaQHrSMf+cJPl2dfBXVf+KMDu99IveRv+ZJf+NLv+PLIncRPdvbV7L+VnJ+P/u5HDS/P+DD1PG93fV/U3D9kTB9WfP+2vR/GLN+nvSM86bL33UNf/69f/+/XzTNP+vVf/iyf/06sOCRsGhYP2Jh/t8e4TVPX3QNat7jnzCMfxfXXrUMP/UqJPoTX/cM/aDLOVjKP/jw/9yC/98HP+GLP/Ec2C63f+iQ4TjNvOiasmpZLuTpfaQgfjEu4HGOPKGeHDC4s2YXU+02/Ozn/B0J+1oYHvSNGnM9P/r291KSNGeZIHGObeOn5zzVM6PHkS978mNUt+EO/GadPOgbZzyVJvyVNG6g66AksCer4LGOc7Mp/eWh/SZVu6adP6VKOSF/TkAAAAKdFJOUwDf39+Af5/9MKAONWYwAAADB0lEQVRYw+3Y+U/TYBjAcUDYIahlA3bCimM3Y64MERWdeExFOhDoxkTnDuTm///R9+jx9MjbtcT4S78sIVnCh+c9mjDGxry8vLz+TwGffxp2/Ql0vYJbJuXzE76AvTc1rc9//gx0vqxg+XwON+XY8+8+BO22NayQKxQKSzZiwMj5D/TgQZtORjASe9U+QKHQfplAilEuhfIxQT/g6P4bwEZbGS1FS08wQR1GzpOCYfSFX7XGEtDSJPaEQCPH2cagwmEwpdfSmQwbXIEaOlAMhsNkRvQ9jEANy9CYoA7Dt6PdqIVBtUY6rdOy2SwbVLEcvR5G8DCjWkSzA3VPAbkcJlCHZbORCBPUY+h+pKzArKZF7MAcvLf4PDUwRsDfikU1O9DwFKDzPKzFYjGMkW8yGIExQbpO9SlAB0BANQxGDDFBdbS0ctdMYMQReHn5Te0n6aIPwf7WBWoLdsEEN57PoR6RFnGSVIdgfV6J47gZHPdqVBBzG6IobutCb+w5B+dkcE5Ys0iQZJBzPOENAsvG1oQ910u+EcplvroDqvLlsrDveEJlyXvox8Xbz6BbEf2KfdcTIlA4On4KOj4SNJBzAQpmUHAxobrkE4E3gyf7YECHE1qAPAWd7+EiAXleHMI/RYYiz5/c41AQaO4+YNXKq7oHpe2dqqmd7XnXhyJJg8Hd8CtoeDcYSDPuwflOp/NOF3qjwzm42Oc/SN/ler3eer8O6q+b6jHBszfRaDSZTD7BzaI2m6UEqPTyxWqrUiwWQ6HQY9zrt1+Y4B8ZTDLASoV4o4G/EJiMat7s5un9QDKhDBLSPGGl4mTJeA+T8pLphFeleCIeTyTwK04mJJvofg9PS3GQMqGjPdSfsjVYdA82jSA6lJa7CWdNEy6QCVedLPnMYg8XQHTJFecTwottAJ3dwwcWSzaBrRY8lHEmGJQvtjbhlQWomzDI/vAIn5TRlmzzkXnSvIcfQWZw0u4D86Rhyc3uB1CXgOCUbT206uA4PJRm9z2oKz/LFBwPjvAvAi8vL69/0l8fxm2XCv5p+gAAAABJRU5ErkJggg==",
        mp4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcZKU/5eZ/4SG/5CS/5eb/6Sm/4WG/5uc/6eq/4uM/4iJ/6Ci/5ye/6eo/6Ol/46P/5mb/5eY/5GS//39/5SV//X1/6Ol/+3u/+Li/3Z498/Q/7u8/zCK/WcAAAAKdFJOUwB7Pf+fHN2gn59fp7PNAAACSElEQVRYw+3Ya3OjIBQG4FqamnDzTkT9/79zOQdUzG0PJjP7YX2DeAR5EtKZTu3X15EjR46Q851dnuY7nTtd9Kv8nlK9X60/Kl60/qh4wjUFNjx8XSznIlHMClgICadC+2PWYShFvFwpSRAvBSl0MYDyVpB7xfOyLXmVrl2h99cQPw49VTzLV7lGNVF8DW5CExNAeSaCSsHdyi9SUPi2Ds2h/KY4K+epbZANpYoKmRHBGy6qbt7qnAzKaZzU86SDtje91Z8Ddd+2renHIh6sEsFKVS64stKmhRg7rRi2yrM0MEoAW2Osrh4kFaxnEPd9/SiI+94N1jW0qu5icN13Xfl7iCBqPlsQ9y3nObyJCNYr2G9Bt28VzRPBroYWQGNMiy+Dlel116WBP24BrOlcGgC9NaNWdjjV4T0/NHAJgnF6O/Fo/l2wt6Nm4i2w6OOMExtYmQ42Tdd00BxoV85O9TCI0k26hDckgc2acgXtKIeB8WabvaCFL89xZfMuKG1vgZsa2O2dRwbdUng1vBut48bK7dZ9ezgOrC/diQSWUdg0jrhb4a3bJIOCVYrDD6N8HCLol0PP2QC7fexxTgN5yctF4Mxz8wE953gDdHQwSiDQmK9Lr3IamJCcAObPl4u9oBAL4EohRESGC+FrGoiOX+E/lYD4y3kg0CRQJOSfggwbFksZZhg2GKOAGQscrFrE+RrachaC8hfsN7uLCJ24myE9BuQb52HmGcqO3fPtc2jXB3RiTuNy+hPpKcv/mmzHfzOOHDny/+YPi6+BG+WQsHsAAAAASUVORK5CYII=",
        apk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcXnGVmm8P2q8QHzIV4bNYXXDTWu8P3nFUYfNY26/RIPLXoDJWobNYXHASH3HVnXDTXnFUfT/7onPZej/2/v/+Ov+4cDypVmtLqvjjt38y57afsvyti89dh4AAAAKdFJOUwAQ3/8n3Xugn58KiJgCAAACeElEQVRYw+2Y2ZajIBBAuxuTtIhsKgTx/79zisUlaZ0pPPM048WwBa6FkpyYj4+Li4sLNNW9PqQq133W3e+4lSqr24GpPWms08S23ZhCmnvatsxYtZE4/a229BQZ78nxk27TXWKsWwwFRhA2ITXz3FBp1maxsc6OLF1Usb6cocBYNynAnKcs55tm22CNdYPl9vmXhUhj3bA8PpaMLdUNqc1qZIQggRRUi42lPIvmEzDMZazZBiHYOy9dd4TwezPXj1Pzqgxd7dpVlwnVNAzjS0SiM4N2a893mVC6MF2BsvO+64QQzTgMfadKhSIdQvFJD9p3duyNMf3khB0G44gSLCWcUKxwBhEZM2S0Af/E5TqgVKiI18MrRnKV3mRnhNy/+QbdbQIsF3oTFmr0vGJY8sjUGaGCBEcPht65UIDK2+C3UuUhaKFKSUmngen5tCE07Z+kh7bxMp9RKZRQLYg+CgmZQqk94SaUli8jyoTSx/lmsrHUvR1TqU4KuY3zddKtFVjzOSEd9S7G8UJhDEBKAp+4Hg7Itpg+C6WSKKEMgE8Se4CnaYAsEAbo8wDC5yGFQndAd1II13AfR08JOYlfg3BTTCzD3UktRwqFHJLk/DjCcBE5Wgi6BLH7xtHHuxKG4IRACJKTdhr3sISmM0r+QAgffIaS1u3uwlnIC4WckP1tuPhKhRDjHquvdMlrSdcmncvQgRLCDEpTtr6SNjX5klGkEM+/IyTxmF/bKlkLghbGrZE2SPLFFs1dZLuXMMJ71m1m0vkMdOmI71KC+QVbkQJQjyoPvA+zYnig/8L6vpDPUhUyxgfuSSr9ifH4I/cT/2ZcXFz8v/wC1sx9JR+88xQAAAAASUVORK5CYII=",
        gif: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",
        txt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTOL+DSL+DqO+Veb/mKl/kmX+zWL+U6a+2ao/0aW+0CS+kyZ/GCk/mWn/1yi/lef/VGc/Pr9/+jz/2+s+46//b3a/4O3/AJIojgAAAAKdFJOUwDf//8d3U+en52O09RGAAACF0lEQVRYw+2Y63ajIBCAW8ZqHC5KrZv3f9MFhpuJTQfrjz1n/SDIbT4npw2pfXu7uLi4YNOP39O367rRvOKja/V9GHOqcTTmVGNnzLlGl6A2WvvWxGsqJo9ajKMuGP0dDcbxSWTShKlGfOOoebCNRTidYxynDXrb1dUU0ziGEF3ZdHHoza14xocMXzJyhLdpmme/e6ag2XeobqYCnBRvs98fm32meId56nnCErk+czfVhlub0CyfOyzaHhTa9XOX9aDQqnU/w7uyjULrcC3i+ocI4iUOVkQ7+8IVeptXWgUgMXD3xjv1UYCyCa6QUAiC0E64fMUBYBTOrUJnROmBryCEMEAsCbYKrSIkCSXS0LYLla8U6K4KSYi+H5ZsWmcJY1ohmpos3OLWmoSF9JajX9m8ckyIRfjIrzM8KERfq5J/yridZwrDx0HF6suOMF24QoXJGijCR/gZboB/TZgDYyd9lqU8mqGPlGQMJR8OfiDjZNjDEQ5S0hlDZ4ushWkqwxSWJCgezOKYIMsw7Ri4wi0g3HfBKuF55bBQTNod1WcKw9kv6yShTQgUQA6A6IsjAEmFJ4RXOF24W+gBcIUxAaiapChi/zolw5rfC+GYUKTqG1G11Vxo2Bn6AJLk8NiPC6JBKOjXLv0ZEruwN2AJe8GCnKzHgEGw4STonm/fub535rNUx8xx4D+RdsPP9Af+m3FxcfH/8hcLt2QJ3T9wuwAAAABJRU5ErkJggg==",
        exe: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcVq2/kOv/0uw/163/1Cz/0+x/zGp/zad+0Ku/165/Tms/zWq/zKp/1i1/1W1/1K0/0Wv/0Cu/06y//7//0qx/1q2/1y3/1+3/j6p/vf7/y+o/9zu/+r2/yqM9xCa/4LK/8De/3ay/p7P/n3B/rLW/12n+xyf/0XRgzgAAAALdFJOUwDdez2eoByg/Z+vFPUOhAAAAoZJREFUWMPtmOt2mzAMgNuEBDquhhgwgWwMQt//DSfJ3BJIJ3P6a+MLviDkDxE4OaVvbzs7OztsjgfrJUdz3flH/hXvZ1Pfe55/q9HK8iyDluOW4xz3cHcYzIxnMqSZNi3BuJHxALIsTXHLsB+nuOlzmRktbUl71RIKGhitNA3gMxEM3TgxM1rog2UB0vcoopAezIxWwIRrPM0XhX17jJgZT+ETwWwSPBzgGRfCL7C4wojSI91FEfVDJBo2hPNLcYqeCKmFs71pcuAJw0cbkCRREq1wMq4wQVnQNkAbJtuESYKWiAbUtXVVENU9p1iiT4NzrjChRQnNmqK4DBSNDuoj0NjCkbScdGgsUzlXmgplWl4eKcpkZjQVSnHv6yuqapjdhZycLKGUkI+bFK22VOW9ae79xRe5NkInWcIPSOxR5IC7292ArqYqi1qNCfKDIxyzRV7pp8W53RxstX56oMRNQqEaEpTdzVGAc+tKCjRqNLIuWYpBWOsCwScAMOoSaxIKdoWCkEI4dYm06JNkbClQO32KFAZCIWLnN9GBUOoSOwq0TjzkGAnxGhFHxU8B/RUYC2PlEGpcrobIxgpjpYmfI1OAJ4zjWOCaWN+UBTUdxyyeMB5wq8sqlTummAn9V0Jvs7BYpfS3CstqlQ1CRdnX9tcqraFQwcNB98T7/LnKp0cJ+PywhG7s9vjXVXxXp0DHE7qT0lXuK+gIR2g/ydSjV01zZSR8Xdoc26jCbxN6rut5HuZTR/s0eH03xVlCz4B/Q3hYWefDxxua7/s6CAPnL9ijv8DzX8F6DbB9Npwrhvdb5wq5V4bPYb5Lne3lrwKcYDG1+W+k54P9Vw4b/puxs7Pz//IHkvGjBU3hWj4AAAAASUVORK5CYII=",
        qm: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",
        php: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",
        pdf: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcf9zfP9ldv98gP92fP9+gf9we/9md/9yfP9/gv9/gf93fv90ff9od/9ref9ve/9ldv/x8f/q6v/8/PlYaP/g4f6lq/63vP2Ejv6Um/7Iy//S1LO+3cAAAAAKdFJOUwA93/8c3Xugn58XiwqYAAACVklEQVRYw+2Y23KjMAxAmzolxXc7tYHw//+5kmxI2tBWMDx0ZjkhMr6dkWoeSl5eDg4ODticmvZbTut151b+xNt5re9Nyl2NrZS7Gs9S7mts5M7GVu5sJKH4KhDbjS1shu2CKA36yj2ZaZ5vbGdNbT9zH+MaW8GFaeQLmcYF4XAbu37J2HKFiparyReu12ta+oOKEztDVXwKP+mKdKV3H8a7ZkWGqmxWihIEoVLT+FyA4tTc4g68VI39LHyGI3yva0WVKl1KzroOimkOvu8rhJNWmY6Eg17IcL0QcFRzkGovofZYc/C7ZahNBuHNbs+wpHKPrscH2yqt4YIBbGlOc4WPYK8rp/w4WhexhPoJem6SeJ7YKMRTDteQdxN2odDvIXRwpRBSjhD6rUJXL/xoPUBynRohjkL0Geh1nWILYblzk/cWQhx0DymGFDFCvqSDFSyhc64YCzKisBvDA1HqsoAvLBmil44khk/EXNesEhIiF1eMMaVaMWa8UahyimRLacy98xmdwM3ZTcKhbE+pG9xHIY+QaOf9JmFGW4hpIJU31npsMZgtJZMP60MJ2GDIGl/cbo3QAs5aUeqNqfe2DtVgax86bCFQE0wZ6lvSERzhpW6hE0np5r198sysEBqL5wm+D/sDlxUZep+73MMJ7CQs5/mLjys0pqSIj4uh8mdM7dTIE8KmCZLXW1MnHma5Qj4sofnrwmZhn3+I0Ph5gvMf7Am2ELjX0z21ZKozJUDDeg24eDaciuH99pXre2W+S52ZOV74b6Tn5vIrzYZfMw4ODv5f/gEm33Cvx+zPHgAAAABJRU5ErkJggg==",
        Null: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUxpcdbc4MzO1dTZ3dTZ3s/T2c/T083Q1tXb4NDX287R19HV2+zv8PX29/3+/uPn6b3CzcTI0ZN/xtQAAAAKdFJOUwD////dexCfoCcDaycKAAACJElEQVRYw+2Y4XaDIAyFF2gnEizy/i87SJCCa13i9m9eLAQlHxfsOdZ+fFy6dOmSWPPdvdM063GfDo500yLnG8CfEh3AnxLnQ5bVE+810XYAu4dqiK7m2wH8C4+OKbahcsSfVnQeHTSLjLLNsW0boCE6u5nYbNrNFwe1a6VEVzM3hrUjic5Qc/uUOnyqslsHhosyoutYe/Zek9rhT5oVQNzl4qv4Lgbi92QsIY5UJwRiPUoO5gpiFmDDtsbpHCIXCMsjawnAE2AzjEIgki2kFMRIOEJGLDjEOpPM4UQZvOIiaLxMBKxnGSoEjgqPTmF38QQQHoOgu2RlQDcC4wiMv3XowwgMfrg86YDl+5dvCR/lnjyWJUQ4DczfPxaRngpwDhiZ9UpwCrgcCFRATyUeAaNXOfQFGN7jwkI3O48SAb2n6cNChY7abJ1cW08SLrnIUvZGCT2yVLQKL3aYZcKhvMIhD03xiBeTHugPiNHqgWaFGN6UCKtRA31a6UkSC4BrDsrTZU3KPSzzm7QafjjFWtcJIK3J6IA8PBNJaatrf914xsiBI3KnZGiAkTrcllMcmJfiLREDeXbDKYbrSqDQdD3xXa5J1HLsa98/O164h93Kvke7Uzrguy3spASafwK8a4CSX7BzGZj6rLSL66c0oleVyfRJyYyInipacX6hvzVbae8ymX4G6bvUPA0rTa+WTv5kb1L8J8b0o+4n/s24dOnS/9UX8vFAaEzio+4AAAAASUVORK5CYII=",
        ipa: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUxpcUOv/zar/1K0/1Cz/0+x/1q2/jGp/0Ku/163/zGp/1a1/zus/1q2/02y/0ew/0Gu//f8/164/+/4/+f1/9fu/yek/73j/6TY/xad/43O/3nG/21bnhoAAAAKdFJOUwB7//+gJ92gn59E+c9oAAACbUlEQVRYw+2Y27aqIBRAd5iVsLiICKT//5+Hi5hmdcD2wxnjOIPF4jZdPXX5+Tk4ODjIpj41b6l3+Br5iUupsr5I+avGVB99GvcaayqpI4ioz2MWJnGl0HiiNCpfIuNeibFZ6OQ6ysdqgbGhWeQbvZDQGMjCQOYlUmZsCHFXSIoTNEWvjXu5xjNZQVOgC3Hkskv4ict+YfXa2GQJq4r4lkI1z+UoSUhj9w+p84QrSEqGvpeLaeC0QzhBTdca8bx63i+0bavGvULmG1sNUrXKIu7SxU6ZcLoV7jM2qN5ixKJwkrJMIVtRxWG0g9Z8teQpEKZbZLB2kAzf9WiNsXL9uOIKiVVd23bKDLZ3icss+UpovMWTxlYZUii8hZPcvRgfZs+MkYKFPR/YLUfI3VkP41RtfL3Ugk/brmcKw3F3YdwU2A0a0q7nnC0MmI1QUeBLbkVC4YTzKzZViS+EYLpnFOd7hOK9UO4QCi6CUsCgNkYreNp2TeQJEzCqFyWKJdlC7hvwPji6h1d1hkSVr7O0QoGNCjqlQvdDp/phT4WTcOyjxvuS+hshCKM2GATlQogd9FTign7UMD0NMoUw4S4gbZ+MvdUo7PltgDxhOu3QyARj7/Gj4RoWFFXoC0GaGacydhhsSEgoML2FYiEAvovRjuzuAPdBxe8YSiu8wpPRox0hWfvyhWgOgLHWGDnc6JLZFbJrltDfjneQv4fiEJdR3ExZlhB9BFazXxCif0aIF/ExxmQKOE94SofxQxrTqWMHig3lfIOt8Qb0dpr1U+WKs8l5xw7I9UHmb6n6+qv1xT8xrn/ltOffjIODg/+WP3HMcIG4JOLbAAAAAElFTkSuQmCC",
        doc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUxpcTSL+DmO+VSd/k6Y/Vmg/kOT+jSL+UeW+1uh/1ig/k6a/T6R+l2i/0SU+0mX/Oz1//n8/y6G99fp/3ex/J7I/77b/4u9/gFOo+kAAAAKdFJOUwD///8n3Xugn58WcbRuAAACn0lEQVRYw+2Ya3ekIAyGCzozHQFRUPz//3RzQaSXbYPtOfthfccoCcljEM9pZ15eLl26dEms/v78q/oTvKf7SrdWZH9z7leJT+d+ldhTzQCfooH9oUw0Ee8D1qPyZXBsOxDdFuJzkKiBKAM2EIVAObEGdtlqv0SkRAB2XTfgQSMao5M/FKHpmxDYvdHO2G9S69YE/FD+5i5szxMdfq1eBDSYasiMYY8DJkcPuwuAr12uxNO2LgaHGWCM29Yhe3g7yZpfTa41xq/THJ3BNunUGZ8gMnAAs15FQBbUjHGe57W4IDfN87T44suAXUZ6WwFZCwDnZSx+S4cA1AeQnwEBp2X054DjAVxiXPclzyeAno4d6I2DwbT5/Rky0IuBnnjeH8AVrrC7PgPtniED+l0Z6D1txTwn7w8gp5wEJuLh+1KA/jRwWv2GFGwymR8CFQEH7DMmRG0ZOLYCucAyEFFx0REvWwGOcuAIgnw4qwgrRdCUVNhgMEFgQiBO4yEGkqyielB0IahEw5mBWSeBcQ1KB7fjfw5MXlmrw5rdRf8QGJegrbVqTNltBtrRVsC4agU+tLjECkhJIiA0A+koBqYBGsSI4kUD0I6cJAVSOjw12ljcEcJDi0PKQBKkSDvkfAJGeAU138PSy5iBvIYmIO1rTAu8MiUwJogYVVIkwMcBVAb+jFKDOQCL3lZ3BOyjCQhLROkKSBHVDNRQSqb28gyliOIImQioK0ExC2E5oqp5GZBrbVX3PmJ3p7nD7/TPgEpXD0oVU8XN00oGpEqsUQc5UxWb2k0EVG/F2Ix4LwnwXld+AtF1WPIfbK8aJPqq8pDzJCsG4YICV4S9NByUUFwt/C7VP7AgUBGcw0cmTQZhf/wjxuNb3c/8mnHp0qX/Vn8A5AVWOPvxckoAAAAASUVORK5CYII=",
        xls: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcYXMX2m8Pmm8P3zJWYbNYXvGVGu9QHrGU4jOZITMX4fOY4HKW3fET3LBSm+/RnrGU37IV2u9QWm7P22+Q+r94PP/7dv2zfv/+GGyNlmsLsfrtaTZiLPhm5TQdN9r514AAAAKdFJOUwB/e98c3T2gn5+4KvYSAAACu0lEQVRYw+2Y63qjIBCGmzRtqhwV1Arq/V/mDgMeYtLtkM2/9ROBGWZe0aB96NvboUOHDpH1eSp+1Gc+7lKwv+njksv7YOylxIKxlxIvjL2WeGIvJhYlY1BYiRU0ZahZcqYjh1ggJCqmL8bcCVejE4tyL/awSybeA38QlXgL5PsuzyYWMYmvhfNECS3nWDCGRiw4T0lr2bjwLCOSnyjAL56hz2wg2yNuHadM4NA0vpyNCs6pa7ot8osIrGI6a76/Wx96FVZ8Asc3OmIAEVghDw7WQX47Qq8KNo+212ihjwSsFsmxjcQo1oHZdpNYIzKBVnokDmiVvgV1Q/88UPQCic0EhvZN5Cn9DDAmyb5Kt1lV8Is3TTc4k3iaDNRah/DQaOngwYWJMZgg8MYeblhrHIOWDFxl3QREmKMeuq4bVS8TLooIrDZE44bw7FpvpnGYeYvyZ6iF6cdAbCbn3J6XCxSR6JDYTb2RuzEaUKQMEbLgkH2a45A8cw0tDXgjAMve+kTc6wmgECOsPhGJ7BXA8D43ggdi05X/DsTvQ8Nc6fFN4c8AJRyhBOEXsPXKwAJHYnimOChzZihThmRxUVe9hAWORB8vJCOXBJSAk1E8vMiN186KhTjKTQAFeMVwgVn43HzpDFgKliMShwQTdOCsMgC6CXkr0as1IhMoPHxhht4kgnXKw1+9wa4R1yygMnoYJ9cvM6qdHMfB1PnAhDAufGHU5gpgoiP6FA2oIFBFGUi30UQIOmqFXaXIwK2supW1N5584C8iAu+mdW+kmga04caCQpqdLWXTwDwaeiSgzRAVWGNZzrVb12tTk4E1CKuUbdGyyZWGoijAc30nu1xhrzNl8/0o0dSPRdoGXGuTVMezNvVibioQ5Y5hf/u+JPygefiduJe6XA1JV/qO9HK+/qrzE//NOHTo0P+rP7x4jQVHYv00AAAAAElFTkSuQmCC",
        ppt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf+ubP+iWP+SO/+nX/+lXfyPQv+SO/+dUP+xcP+ua/+VQP+jWf+XRP+cS/+eT/+UPf+ZSP+gVP+qZf+saP+SOv+mXv+wcP+ta/+ubf+oYv/79//x5f/m0vmEO//MpP/Sr/+9i//Zu/7Dl/ufY/2zfqeIp1YAAAALdFJOUwDdPXugHPygn596VuVMqAAAAl1JREFUWMPtmOtyqjAQgNuqUBQSEi9cDHJR3v8Vzy5JJHi03dAz0x+HD3LZTfIZ6tCZ+Pa2sLCwQOZjG73kw1+3ibKveN/4+t6z7J8a7f6Kp7bC27gp7mTFC7yM28nS/OfGKC9y0OSIafJi6A1FJ3IPY5SToBuj/JAfDkMxNSzHzpDN9e1jXB+IUI1/CfemjJGfcb0HDvbe23rvZGxMM673dCKqsJwsK+916SYQyn+KdemQVec7qmqy8oGtr7A5T6kfhGsP4QlLd/7aSBKeRuJueFSNUmi8nspxfJ6wuWn6Gv+gleM7neYI1fViucIeVTtLGOv5slMg5FITXGCLqo6dCTRhfIoRqLVQ2lA0Sqkujk0MGZLQrEZAqKwQ4ChspDOBIvyMR2QzEUr4plXNnQmfnkI+FbYQVf0coTRlFGZt22KgOm78UlKFckQL4VuulaHqA2dczhFWICwro6uuAfuJkDXVIJSNfvu69jLZIFnIXWHLZXKrkf52Cbi/kHOORmg4q2FbLePMvnwJw5HhA3GcU4UWK+QiQATjD/gKhRW+4idCePCZQjaihQK7nLnYyFeYjMKnPjZnh90TIfMSCsG0QrDk2lVdD5EQOoE9HDYTBE2IizRJ33RNkYgJzOkTdzgKg6zNggeh8BSGxqWF8HYEj5bkXtGEiUsa7IYWDM8IvYXf8GvCHZLglZgIG33ZLvZ2JOHOg98Vpvc2HQOHNKUJV6kHK8rh+8m64ysh6RgQpsdjaq7hhmK6OmeGIU95YjjfBkciAfEstQlpvpB+It2swm9Zzfg1Y2Fh4f/lD1FNqKcd3wCLAAAAAElFTkSuQmCC",
        png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcf+ubP+eUP+iWP+xcP+nX/+lXf+SO/uPSv+dUP6kX/+XRP+VQP+SO/+jWf+oYf+hVf///f+mXf+tav+ubf+rZ/+eUP+wcP+pZP/s3P+aSf/z6P/48v/UsvqFOf+6hP/jzf/Hmv/cwS4F5mYAAAALdFJOUwDdez2foByg/p/2onNSOQAAAh5JREFUWMPtmNuSoyAQQGeMUaZUxBveRfP/H7lc1VRJptF92Kr1INqtcKqNSSrk6+vm5uYGzMPzrTzcdYFff+I7cPV91/VfNZr6ykNb6WwMypW6tOBk9EoALka/KMtCTCr05OKi0S9AwI02YXXW+KwqMVluMqw4SimjtUGNzwoK0HgobC4Yn42iat6DanfKnPZdhCAersK0KcfXWOtYbPtrTeNBhGnapCt1n2VZX6cWnjDhjjETjNeFudrhWQpfeS7PqJ5vI0DCXJLKPVmkcMH5MQ5CBaGvIRtehIhkGVp2VmgqwgixhSEkciYeDz4jxDkWyD1F0zQhKrJZ3zzG+jKPQMLNJiAd6ogImHw1+1UngQh/8DHqefMS9/ycFhJVIC+ROAvJnrodRn7ARBfIS+TJirOwEp88JsTGx0skF4Tyfd3nZCtQ+c8KG3OXW4FZ1lJHIeUQ1dVXQzY0vMDBbLJEKjsFCxX1oOmHPe02wlHYDsewk0LWW5jPCfPZJuyZm7BTbWmtzHoMTNgpcPuBUg+CCSkfSTv2wTdXskKoUFGMdhhyqlASTcjOlLgLu3iyk0QOwjDqePsFfgeiA4VqykefCUK40KZ457wwuiaMBZFokc7EQTUTiigGCWMH/m1hAhR624TETFSh7Em8Np5DfsE+EgdAy4BQD473M9+SNYPcMV/fImh9CLiWCkKYL4SvSAMv/BXvxL8ZNzc3/y9/ADVfok94AIhIAAAAAElFTkSuQmCC",
        html: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcTbUrDrbszvetTXYrDnasjXQqTPIojfTrDvftTTMpjPKpDnZsTPIozXOqDjXrzHGoTbRqjfUre7/++T++Pf//SfCmxm3j1fXt7Hx4UvNrNL78XHfw8T26o3o0eeFKfsAAAAKdFJOUwA9//8c3Xign5/8SMcgAAADDklEQVRYw+2Y65qjIAyGp9ppRxBERcTj/V/mJsHTtN3dMNt/66dAEsjbgE/7jPPxcerUqVNsXW7Zb3WJx12z9E/6vMbyPtP0rcQsTd9KvKbpe4k3SkneR8wWVrL0yb8SM2QkQYGZYEsITnckMUteKX2KsImvgS/EJT4B86XtXhwx2xD5kp3nCwVHaHTnbOJXsuWv2Utd+WOJ+RcLmJOSpREw30T01U7yCx9Y0H0g+W6YIZRsYRxvfODGK/KiQHtqGjsePwU/MmMCi+84GArfgEZ0izBHHecQvzAFQaGyMBTFDDzbV2iuYWhcYBEgB1Ww42Yw1fdoDHDR3I00JhaAs1ndOCCUUS2lzLa2HgNj3TT1OIKLxIruiAorFPQz1GU9muEIx+CHeRxYQFwaUih/dmCVeISTMx1EBl9t4gKD/FAjz6AJoHp2znV1U0/+Z0A/1XXdOaex1hrYvRBtT8H8J8AcUyflBO64A3sQZSmJaOdIYInXDAzbtxIdPVCxYJoWnjQ86hhgCXkgKsoYNEsPkHo0OGN6/KAZglg5E4gSdIRTT/CRqhXEhmJt1+uwKgYYTmvqwdahWr3zXDxQOyDCF2NKwEHK7IhnkdeqMhqIRD9Za6cKjhC/cnCE/cIzOgqo6SrFQhz1DP0gZElG4C1rmEAQVKiR2A1dLzos1AmtyQWepjUgFlBvAqLyvYONWjhC9HuvWiTrCOB9X66la9vWjMCzHurSBlwndTRQaIFVQJPGGUFHqJBD7r4BLbhbFmsGkiUeYbdsFPxwhTV3ToVrfQKToZlxGqbRoRlmwhTNsYFbCsg4P3rY6pNgngWUa4IMjZ6MO0TlNssDEoS6BaLgl1qtrkTRiEt4wJAm9pKUXIuSa30xFUqp5IPEY0CqEOIB1Yo8cNSjFRZxgUrReuzRRlfto5ShgVjALU+9lDyabCBXHOBtW20eLBOaMSaM4HL+gr1gmtlBmG82NjrrHFys14A7MgizGQepbQpuzo7xBfw74lnrNPdd6no3LN35b6TX2/2vuv3gvxmnTp36f/ULf0R1znQ7804AAAAASUVORK5CYII=",
        js: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcUOv/0uw/zar/0+x/0Gj/Fq2/jOp/0ew/123/zKp/1S0/zqs/1Gz/123/02y/1i2/kWv/0mx/0Ct/1y1/vb7/1i2//7//zel+zOe+e32/9zt/5nN/ieV9oDG/avZ/83m/77h/2S6/HhIljsAAAAKdFJOUwB7Pf8c+92gn59dd850AAAC8klEQVRYw+3Yi3KjIBQG4CbGpgaMNyQIiJf3f8g9B8Rqp9mCszO7M5u/Kgj6iRrb2Le3V1555ZXgnE/Z05zjuUt2/13eL7He+/0+457zlpk/i1jRjo/ZCQC2Hx6LH+MF92EOhIJt9LtviRJPFsMgY0vPr2aUmDmFlY5i68q2ZBFiVpYcf3jpwjnDFoZ15mZsChczRKxkC86Xlc+4erCY+T34TvENnPuxh4rZdiR8M0BeLlfCwcFiRqxGcOJYJxB3AEJ4STiuEuzhYWJGvqYkz5IdA58FDnQ+AOb5bOY8/948BYAfFoEJZ6gWWraK5S5kaffLkHP+yPepxsejHep9I1nKj3iwThWAOi3y7xIIbnYuPOiHCH0Fzm6jIBC2LZZ9IJUHi2JpsYsocJeqW8Fv8g+AtQcrEOuDYF3Xbl8oNmBtJiXlONxtb23nILDepfEgmdr2AdVWGduBxz0Cpp1qARTVAFwrJSwVX3vjwapZwEI+HnLSelKtNHFgZYNYBROCLYB3BLu+F2YYWGW7YItgsK58PJjjpTRCdL0QYu2NGOFXMJ3wGqrBFEI0fwIUbJT2Jkv96R0AGw/SjuhR2Q+OjgWbBqHakAZCEZRaNKLrajPgMOUM/bBFEw5CcngqNJQilwAaATTckG6GS9kOjU8QaLekGh2dixnPWDHBBk0o3GRzEBRGoQgBTw6dgAdPDXda2D8INBqE09Mo2siRdWKQ9smDRw/GSw+MsOv0KG3UxPoOnmV7i/GzqLsVvAaPkMJTxvQ0juOgU/AoHGBSSqpxgseFokgDwSsFjuIt7fsUvlqmPXo0gWduNsbMokcPN4FFGOgCJ927oOcPsa65xIA0ARIjbsnSkMDvBZHQo+AC7ISdFgwmid8xwfqmZjtcxdWDwGQNXebniQR/zl8Eb3Za8rV2s/MtEDwlN4hdLFkbkm2LXQn5Bnu+hQbIoNeAa7B4CzljeL9NQ7008F3qEjjGa/gb6eV0/TGnA//NeOWVV/7f/AJAsosfySCrjgAAAABJRU5ErkJggg==",
        css: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVGm8P3zGVXzJWYbNYXbDTWu8QHnFUofNZITMX3zHVXTCS22+Q3jEUIHKW4jOZGq9QHDAR////mi6PvP97pbRd/v++tXwx+b33afbjV2vMrznpsnquGjfsnAAAAAKdFJOUwA936wc3Xign58XA1ZcAAACuUlEQVRYw+2Y2XbjIAyGm540qc1qAl7j93/NkQTEdJsKtxdzzvg3iSVAH8JRFufp6dChQ4fYOl2aL3Wqx50b+ze9nGt5L9b+KrGx9leJZ4ppv2C11KqIlxTUUnib6akn2TXEBigY3RKtJdncgRb1VBCb9o0Ikq0Hvob4Dvil2EQukE18CzSfmlXEJoaaTDCtMYmFZ2Oo0SCP2BiTgrZWdNGjjUjTsIEP2TvIRrsv7KRTJbDtpwCaKEkb7b4EXhjA1zJgHG63YYiQfhrQG8vxVz5QECMAYRrv5Oj7OAEx9MUEJlCkJhA49cJLjJZe9BMChcnju4DjsihtBEgtC1wCAAph4sEDik0EVJpsYGqVgVk1QJOBMjkgHYFGxGbErgzl5uufZPgZUBJQ7wbqeYC6ewcc5t1AM0PdDfcMBI5coRCn2USPD9QUYMcAvGmW6FC8lj0uEcYWHc0F6igxwwW8DasjJ/ZJhynewpzmaDYQAbhh3LEuRHuGrHWaVJOh1PcplNmgMOsw3p2szRCB3vf4oq7ybYLD2HuvdwC18wvUIZRNAaSyWbyrBErasZaKCttFj9agwu6kTBeFCZQQgA2qJAJpAVQEYoeMs1hAuSkCNz8Ciwk7gMOofgi8FvHx83DrUONtV4auBIbZJldYKsPe1QJdIjpn4TtkCGHUDnvGEPCzwbo0DBOunC3jRJJ0ag30VrPo2onex6tym3jAjHPOt+sEWuMS0bY+DspaIEotvp/n2SDDeQFmr5a9GZL8QurQ7qLtdwEfQcqDusJWJY8LVBClElahMj06xRALqB5y6jtVAtU/Duw+I3TpGQ9oHOAF5r6TSo8PHYrzC/bUcQVI1m3AFSd7FpKzY7i/fQaaj0Sf0dsCNOLpeGbeS52vnY/K52R3yeji6cq/Iz1frt/qsuPfjEOHDv2/+gP0toi4gXoofgAAAABJRU5ErkJggg==",
        epub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcXXDTXvGVGm8P33HVnzJWYbNYWm7PYjOZXPBSmu8QG6/RXPBSoHKW4TMX37IV3nFUYbNYonOZOv+4fX/7/z/+1utMK3gkuL412O1OFOpJ7ripNf4xXK6TKHWhX88Tv4AAAAKdFJOUwB7Pd+gHN2gn59lNj8pAAACeklEQVRYw+3Y2XaqMBQG4GK10gxCgDII8v6P2T0kMhR7dujl4QcMCcm3Ni7tkr69HTly5Ig4pyR9mVM8d0mL3/JxifU+Xkhup5jyQudmkpuNuEjx4ii0fHlWUIt7lJiwsZVpOEZMnSQRYnpzsGH8WmyphxdcGJaL6U0WsSgFxeIStOtTGy2eeZGddmu9gq21tNMcmXi21i+adtsMQ8MdOm5M2lQMrtKUVVU2GxdO+8Cm/IJsickukL1N8SwEM9wzS2cZeVXlRT9uuZGBmfey7OmVfU9Nk3HoKhwiMFuEvaaum4XoEw8G736ve7rr8W8gfF64PqXqrsX3sv8TSF4Lns5zPWKF7ZjvAHPcYZt5jFft2Bm+RpsYpCBRVegpxqEz1p3BSzQHDhFI2JPg+3162LGjYy4CRKKt8AuM9c086BRDC+8kJwI0AxDVsPYMeNAZIsBPD/ZYYfsAIh/beX34l6c30aDOeyxrKHyB8/rKPtPxYP3AGksQDbxrw8J71FGggS033T2IpstHu/Du+OHBaZ+yClei6+7wVf7pQWSgMQYPTWJZloPt6g48N0CnJY9n5EYEhsn5JN40jJBXes+TQjBkEp33qD7ttXhwLi69kFhwJm568eAkbnpScL5IPcXJ09EVatq4CSJ5ylvabyKQpkKoEC/Cb5vg8bjhCTJQMxeCd62KQqG3jhA0k0ivCr973gvXTAz4I6qr6436ZOBVb4lqi9P6KgSV5vXzVz8YXvlEDoZlrE2KmholrVC9iN4Yk4AJLdW0XqvQeO454HXJL9iTiojoMeAq9yR3DM+371LvXfgsdRHWeJU/kV6S6z+T7PhvxpEjR/7ffAMGOojXQYbbiwAAAABJRU5ErkJggg==",
        psd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcUOv/0uw/zer/123/0+x/1q2/jOp/zSm+Uew/zKp/zys/1O0/1e1/0Ku/0+z/1q2/0mx//7//164/vf8/9vw/+r2/yie86HX/sno/7Dd/5TR/W6//H/H/Eyv911ykpAAAAAKdFJOUwB7Pf+fHN2g/p8jQekrAAACx0lEQVRYw+2Y7WKrIAyG12JXJn4xEQG193+ZJwnYOdedE7r9O74qBQyPARNb+/Jy6NChQ2ydT8W3OufjLkX/N71ecnmvff+rxC/+dT8jXnB8162sLhK7T/As4glgHR1xT0Vs0iW6PGKxYXxo35FBJGC9B37p4BOLdXhd42e9QdaxXecRi5opLpEN5BITsKL9oao8YkGoqkpIrJAIRY2azuFR8IB31bvPXQuY5zzgA8hOJwbwbTWevY3yof+GV3Hm/NZG29ab9yhjrOsq6E57C2Ub9zcWMEoP7x8yvqPOalOicoANAu0AsuCqce0j5QJNmPt+cQMQ7fwzoI7AaURNdueizgRq3CJQKiXl6GH2Xn/QyIAN1BqsdQS6BmvSAXDQO6ERF6hX4BSrAYGNnp3HqJw1eYhlDlCRh1TtcA2DmixFJkTl3ct8IE65whC3S49YSzG0PAt8H1wIAaPGeFxI46cJmiY8DYS0M4YyZZawkGaGIJpDmJs8YANbAqZk9ouUOPFwgyAapWySEQvYRBHQrI+bUSoKb+unVkoVTXTDA9LFCWiG4JxbejnKppG0mHiTa4JpKHM9TKk3Iq+RcvKDoRvUJptngBJFU1RyvM3BU14/AxQEVI1aByNxHG/OYtb8ALiqcq5SAlYTgW0+UO2BkHjWzbqZTPRQsYEwS4Xzi0BFY2Gb4R5jFGEawlMNjOAcDxgFgWzspO6S0xC/tYwNcJsQp9Q1B7h4COgNEHLOD9YO3kUeigO8rgB5629SbYljvSzLfBtH8QxQYJBsgfhdEKP8zssCAlEKsQViD4V5arGBQgmBKEGVeNBwkZpCxS4hWECRoWyg+m3gb3lYRvPyXpapsjlRZnlYpm2tf7pEmcqSBzyVDyUe9nJ+wZ73gx+jolivAdeSLc6M4f1WcnmS+S51Yfp45b+RXk7Xf+r0xL8Zhw4d+n/1B13vfAhtdKi2AAAAAElFTkSuQmCC",
        dwg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcXvGVIbNYXvHVHzJWYbNYXbDTWu9QHrGU4jOZHLBSW+/RYDJWmy+QoXMYHzHVYjOZHfET2m7P4LLXf3/+/T+7u3+5MXrsaXbiVyuMZjUeNb2xOP81bPjmuZ7vy0AAAAKdFJOUwA9z1wc33ign591Bg7OAAACdUlEQVRYw+2Yi3KjIBRAm51UI4gKxMei+f/f3PsQNU3SXtzOdGfWo0W4wBGFau3b28HBwYGYU1a85JSuOxfNZ/w6p/rem895TzQWTfOtxjP1qWCDtJoLK1WyMcM+VUUu1pJ3ls6nSDEW1UpTvSLBWFRf0iQZXwn93jFuhd7fK/2SJhgL9Hh0ecp5P4tn3xzwYmPhX0En2SL7nXkirEIPNA/xspAIL9Cw9CUmsV85dG3bBcjNgSUjeVJcykeG9nrtAmX9/MNJtk9Yk7B5cqbLvymsdwjr2LOmBIVtU3OMQ9xGJIQOQHSFGzBegR5zoV4Qj7DeQiumbVGIx26gEXICpAvr4bqlHe5r04WWhB1BQvsdwo5uX4/GvxCGgejBMv4mJpwZjoY0IY7C9nSZNB+jI1DY8tXfsJGVCi3Rt8tUjBoDelrn5mbBJxVi29qqG60XXDLtqFjYXudQd1N8VqEQUUNPTNA/jhCyE0cHRUNMEiq+cbiwV2E3cFTvGKHjqQ34bB0Jespy1NlkIQwR0aG7I2iOJwmVje1BG6atbwpQxbUqZYRq3ej9NIJ1GjGHwk21SKgiFndL7xQU0jvFLlWERJhHE3ehuQnTNI2WZmOxUQuhcDsK44xzJCx5vdyRJFzRYQShf6xQ+U8J9VOh3inU4NMAaTULccWUmopUrRQ3kAkfqQJgn1TsFBpaO+77hHp+xOwXmo9DhNVoOLipMlKh0dibd8waLq7HWDBGJDQJ/IgwM3zHIm5JlpQ33CV/wZ6wj1t7UT4KaLY5R4noMyB3EXN32BRiRHLF8H2rnRAt/JY65zJfLv8iPWf5l2Q7/ptxcHDw//IHYWiLelDcDu8AAAAASUVORK5CYII=",
    };

    const PopsFolder = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "folder";
            let config = PopsFolderDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "ninePalaceGridPosition",
                    css: PopsCSS.ninePalaceGridPosition,
                },
                {
                    name: "scrollbar",
                    css: PopsCSS.scrollbar,
                },
                {
                    name: "button",
                    css: PopsCSS.button,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "folderCSS",
                    css: PopsCSS.folderCSS,
                },
            ]);
            // 办公几件套
            Reflect.set(Folder_ICON, "docx", Folder_ICON.doc);
            Reflect.set(Folder_ICON, "rtf", Folder_ICON.doc);
            Reflect.set(Folder_ICON, "xlsx", Folder_ICON.xls);
            Reflect.set(Folder_ICON, "pptx", Folder_ICON.ppt);
            Reflect.set(Folder_ICON, "dmg", Folder_ICON.ipa);
            Reflect.set(Folder_ICON, "json", Folder_ICON.js);
            // 压缩包
            const zipIconList = [
                "rar",
                "7z",
                "arj",
                "bz2",
                "cab",
                "iso",
                "jar",
                "lz",
                "lzh",
                "tar",
                "uue",
                "xz",
                "z",
                "zipx",
                "zst",
                "001",
            ];
            // 图片
            const imageIconList = ["jpg", "jpeg", "ico", "webp"];
            // 代码语言
            const codeLanguageIconList = ["htm", "py", "vue", "bat", "sh", "vbs", "java", "kt"];
            // Android安装包
            const androidIconList = ["apk", "apkm", "xapk"];
            zipIconList.forEach((keyName) => {
                Folder_ICON[keyName] = Folder_ICON.zip;
            });
            imageIconList.forEach((keyName) => {
                Folder_ICON[keyName] = Folder_ICON.png;
            });
            codeLanguageIconList.forEach((keyName) => {
                Folder_ICON[keyName] = Folder_ICON.html;
            });
            androidIconList.forEach((keyName) => {
                Folder_ICON[keyName] = Folder_ICON.apk;
            });
            if (config?.folder) {
                Reflect.set(config, "folder", config.folder);
            }
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex);
            const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
            const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
            const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
            const animHTML = PopsElementHandler.createAnim(guid, popsType, config, 
            /*html*/ `
            <div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${config.title.html
            ? config.title.text
            : `<p pops class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`}${headerBtnHTML}</div>
			<div class="pops-content pops-${popsType}-content ${popsUtils.isPhone() ? "pops-mobile-folder-content" : ""}">
                <div class="pops-folder-list">
                    <div class="pops-folder-file-list-breadcrumb">
						<div class="pops-folder-file-list-breadcrumb-primary">
							<span class="pops-folder-file-list-breadcrumb-allFiles cursor-p" title="全部文件">
								<a>全部文件</a>
							</span>
						</div>
                    </div>
                    <div class="pops-folder-list-table__header-div">
						<table class="pops-folder-list-table__header">
							<colgroup>
								<col width="52%">
								<col width="24%">
								<col width="16%">
							</colgroup>
							<thead>
								<tr class="pops-folder-list-table__header-row">
									<th class="pops-folder-list-table__header-th cursor-p">
										<div class="text-ellip content flex-a-i-center">
											<span>文件名</span>
											<div class="pops-folder-list-table__sort" data-sort="fileName">
												<div class="pops-folder-icon-arrow" data-sort="按文件名排序">
													<svg
														viewBox="0 0 1024 1024"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
															class="pops-folder-icon-arrow-up"></path>
														<path
															d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
															class="pops-folder-icon-arrow-down"></path>
													</svg>
												</div>
											</div>
										</div>
									</th>
									<th class="pops-folder-list-table__header-th cursor-p">
										<div class="text-ellip content flex-a-i-center">
											<span>修改时间</span>
											<div class="pops-folder-list-table__sort" data-sort="latestTime">
												<div class="pops-folder-icon-arrow" title="按修改时间排序">
													<svg
														viewBox="0 0 1024 1024"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
															class="pops-folder-icon-arrow-up"></path>
														<path
															d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
															class="pops-folder-icon-arrow-down"></path>
													</svg>
												</div>
											</div>
										</div>
									</th>
									<th class="pops-folder-list-table__header-th cursor-p">
										<div class="text-ellip content flex-a-i-center">
											<span>大小</span>
											<div class="pops-folder-list-table__sort" data-sort="fileSize">
												<div class="pops-folder-icon-arrow" title="按大小排序">
													<svg
														viewBox="0 0 1024 1024"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
															class="pops-folder-icon-arrow-up"></path>
														<path
															d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
															class="pops-folder-icon-arrow-down"></path>
													</svg>
												</div>
											</div>
										</div>
									</th>
								</tr>
							</thead>
						</table>
                    </div>
                    <div class="pops-folder-list-table__body-div">
						<table class="pops-folder-list-table__body">
							<colgroup>
							${popsUtils.isPhone()
            ? `<col width="100%">`
            : `
								<col width="52%">
								<col width="24%">
								<col width="16%">`}
							</colgroup>
							<tbody></tbody>
						</table>
                    </div>
                </div>
            </div>${bottomBtnHTML}`, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            const { $pops: $pops, $title: $title, $content: $content, 
            // folderListElement,
            // folderListHeaderElement,
            // folderListHeaderRowElement,
            $folderTbody: folderListBodyElement, $folderHeaderBreadcrumbPrimary: folderFileListBreadcrumbPrimaryElement, $headerBtnClose: $btnCloseBtn, $btnOk: btnOkElement, $btnCancel: btnCancelElement, $btnOther: btnOtherElement, $folderSortFileName: folderListSortFileNameElement, $folderSortLatestTime: folderListSortLatestTimeElement, $folderSortFileSize: folderListSortFileSizeElement, } = PopsHandler.handleQueryElement($anim, popsType);
            /**
             * 遮罩层元素
             */
            let $mask = void 0;
            /**
             * 已创建的元素列表
             */
            const $elList = [$anim];
            if (config.mask.enable) {
                const handleMask = PopsHandler.handleMask({
                    type: popsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            // 事件
            const evtConfig = PopsHandler.handleEventConfig(config, guid, $shadowContainer, $shadowRoot, popsType, $anim, $pops, $mask);
            const result = PopsHandler.handleResultConfig(evtConfig);
            PopsHandler.handleClickEvent("close", $btnCloseBtn, evtConfig, config.btn.close.callback);
            PopsHandler.handleClickEvent("ok", btnOkElement, evtConfig, config.btn.ok.callback);
            PopsHandler.handleClickEvent("cancel", btnCancelElement, evtConfig, config.btn.cancel.callback);
            PopsHandler.handleClickEvent("other", btnOtherElement, evtConfig, config.btn.other.callback);
            // 创建到页面中
            popsDOMUtils.append($shadowRoot, $elList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            class PopsFolder {
                init() {
                    config.folder.sort();
                    this.initFolderView(config.folder);
                    // 将数据存到全部文件的属性_config_中
                    const $allFiles = folderFileListBreadcrumbPrimaryElement.querySelector(".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child");
                    Reflect.set($allFiles, "data-config", config.folder);
                    // 设置点击顶部的全部文件事件
                    popsDOMUtils.on($allFiles, "click", (event) => {
                        this.setBreadcrumbClickEvent(event, true, config.folder);
                    });
                    // 文件名的点击排序
                    popsDOMUtils.on(folderListSortFileNameElement.closest("th"), "click", (event) => {
                        this.arrowToSortFolderInfoView(folderListSortFileNameElement, event, "fileName");
                    }, {
                        capture: true,
                    });
                    // 修改事件的点击排序
                    popsDOMUtils.on(folderListSortLatestTimeElement.closest("th"), "click", (event) => {
                        this.arrowToSortFolderInfoView(folderListSortLatestTimeElement, event, "latestTime");
                    }, {
                        capture: true,
                    });
                    // 文件大小的点击排序
                    popsDOMUtils.on(folderListSortFileSizeElement.closest("th"), "click", (event) => {
                        this.arrowToSortFolderInfoView(folderListSortFileSizeElement, event, "fileSize");
                    }, {
                        capture: true,
                    });
                    // 设置默认触发的arrow
                    if (config.sort.name === "fileName") {
                        popsDOMUtils.emit(folderListSortFileNameElement, "click", {
                            notChangeSortRule: true,
                        });
                    }
                    else if (config.sort.name === "latestTime") {
                        popsDOMUtils.emit(folderListSortLatestTimeElement, "click", {
                            notChangeSortRule: true,
                        });
                    }
                    else if (config.sort.name === "fileSize") {
                        popsDOMUtils.emit(folderListSortFileSizeElement, "click", {
                            notChangeSortRule: true,
                        });
                    }
                }
                /**
                 * 创建文件夹元素
                 * @param fileName 文件名
                 * @param latestTime 修改时间
                 * @param [fileSize="-"] 文件大小
                 * @param isFolder 是否是文件夹
                 */
                createFolderRowElement(fileName, latestTime = "-", fileSize = "-", isFolder = false) {
                    const origin_fileName = fileName;
                    const origin_latestTime = latestTime;
                    const origin_fileSize = fileSize;
                    const folderElement = popsDOMUtils.createElement("tr");
                    const fileNameElement = popsDOMUtils.createElement("td");
                    const fileTimeElement = popsDOMUtils.createElement("td");
                    const fileFormatSize = popsDOMUtils.createElement("td");
                    let fileType = "";
                    let fileIcon = Folder_ICON.folder;
                    if (isFolder) {
                        // 文件夹
                        latestTime = "";
                        fileSize = "";
                    }
                    else {
                        // 文件
                        fileIcon = "";
                        if (typeof latestTime === "number") {
                            latestTime = popsUtils.formatTime(latestTime);
                        }
                        if (typeof fileSize === "number") {
                            fileSize = popsUtils.formatByteToSize(fileSize);
                        }
                        for (const keyName in Folder_ICON) {
                            if (fileName.toLowerCase().endsWith("." + keyName)) {
                                fileType = keyName;
                                fileIcon = Reflect.get(Folder_ICON, keyName);
                                break;
                            }
                        }
                        if (!fileIcon) {
                            fileType = "Null";
                            fileIcon = Folder_ICON.Null;
                        }
                    }
                    folderElement.className = "pops-folder-list-table__body-row";
                    fileNameElement.className = "pops-folder-list-table__body-td";
                    fileTimeElement.className = "pops-folder-list-table__body-td";
                    fileFormatSize.className = "pops-folder-list-table__body-td";
                    PopsSafeUtils.setSafeHTML(fileNameElement, 
                    /*html*/ `
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${fileName}
						</a>
					</div>
				</div>
            `);
                    PopsSafeUtils.setSafeHTML(fileTimeElement, 
                    /*html*/ `
				<div class="pops-folder-list__time">
					<span>${latestTime}</span>
				</div>
				`);
                    PopsSafeUtils.setSafeHTML(fileFormatSize, 
                    /*html*/ `
				<div class="pops-folder-list-format-size">
					<span>${fileSize}</span>
				</div>
				`);
                    // 存储原来的值
                    const __value__ = {
                        fileName: origin_fileName,
                        latestTime: origin_latestTime,
                        fileSize: origin_fileSize,
                        isFolder: isFolder,
                    };
                    Reflect.set(fileNameElement, "__value__", __value__);
                    Reflect.set(fileTimeElement, "__value__", __value__);
                    Reflect.set(fileFormatSize, "__value__", __value__);
                    Reflect.set(folderElement, "__value__", __value__);
                    folderElement.appendChild(fileNameElement);
                    folderElement.appendChild(fileTimeElement);
                    folderElement.appendChild(fileFormatSize);
                    return {
                        folderElement,
                        fileNameElement,
                        fileTimeElement,
                        fileFormatSize,
                    };
                }
                /**
                 * 创建移动端文件夹元素
                 * @param fileName 文件名
                 * @param latestTime 创建时间
                 * @param [fileSize="-"] 文件大小
                 * @param isFolder 是否是文件夹
                 */
                createFolderRowElementByMobile(fileName, latestTime = "-", fileSize = "-", isFolder = false) {
                    const origin_fileName = fileName;
                    const origin_latestTime = latestTime;
                    const origin_fileSize = fileSize;
                    const folderElement = popsDOMUtils.createElement("tr");
                    const fileNameElement = popsDOMUtils.createElement("td");
                    let fileType = "";
                    let fileIcon = Folder_ICON.folder;
                    if (isFolder) {
                        // 文件夹
                        latestTime = "";
                        fileSize = "";
                    }
                    else {
                        // 文件
                        fileIcon = "";
                        if (typeof latestTime === "number") {
                            latestTime = popsUtils.formatTime(latestTime);
                        }
                        if (typeof fileSize === "number") {
                            fileSize = popsUtils.formatByteToSize(fileSize);
                        }
                        for (const keyName in Folder_ICON) {
                            if (fileName.toLowerCase().endsWith("." + keyName)) {
                                fileType = keyName;
                                fileIcon = Reflect.get(Folder_ICON, keyName);
                                break;
                            }
                        }
                        if (!fileIcon) {
                            fileType = "Null";
                            fileIcon = Folder_ICON.Null;
                        }
                    }
                    folderElement.className = "pops-folder-list-table__body-row";
                    fileNameElement.className = "pops-folder-list-table__body-td";
                    PopsSafeUtils.setSafeHTML(fileNameElement, 
                    /*html*/ `
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${fileName}</a>
						<span>${latestTime} ${fileSize}</span>
					</div>
				</div>
			`);
                    // 存储原来的值
                    const __value__ = {
                        fileName: origin_fileName,
                        latestTime: origin_latestTime,
                        fileSize: origin_fileSize,
                        isFolder: isFolder,
                    };
                    Reflect.set(fileNameElement, "__value__", __value__);
                    Reflect.set(folderElement, "__value__", __value__);
                    folderElement.appendChild(fileNameElement);
                    return {
                        folderElement,
                        fileNameElement,
                    };
                }
                /**
                 * 清空文件夹信息页面
                 */
                clearFolderInfoView() {
                    PopsSafeUtils.setSafeHTML(folderListBodyElement, "");
                }
                /**
                 * 创建顶部导航的箭头图标
                 */
                createHeaderArrowIcon() {
                    const $arrowIcon = popsDOMUtils.createElement("div", {
                        className: "iconArrow",
                    });
                    return $arrowIcon;
                }
                /**
                 * 添加顶部导航元素
                 * @param folderName 文件夹名
                 * @param folderDataConfig 文件夹配置
                 */
                createBreadcrumb(folderName, folderDataConfig) {
                    const $breadcrumb = popsDOMUtils.createElement("span", {
                        className: "pops-folder-file-list-breadcrumb-allFiles cursor-p",
                        innerHTML: `<a>${folderName}</a>`,
                        "data-config": folderDataConfig,
                    }, {
                        title: folderName,
                    });
                    return $breadcrumb;
                }
                /**
                 * 顶部导航的点击事件
                 * @param clickEvent
                 * @param isTop 是否是全部文件按钮
                 * @param dataConfigList 配置
                 */
                setBreadcrumbClickEvent(clickEvent, isTop, dataConfigList) {
                    this.clearFolderInfoView();
                    // 获取当前的导航元素
                    const $click = clickEvent.target;
                    const currentBreadcrumb = $click.closest("span.pops-folder-file-list-breadcrumb-allFiles");
                    if (currentBreadcrumb) {
                        while (currentBreadcrumb.nextElementSibling) {
                            currentBreadcrumb.nextElementSibling.remove();
                        }
                    }
                    else {
                        console.error("获取导航按钮失败");
                    }
                    const loadingMask = PopsLoading.init({
                        $parent: $content,
                        content: {
                            text: "获取文件列表中...",
                        },
                        mask: {
                            enable: true,
                            clickEvent: {
                                toClose: false,
                                toHide: false,
                            },
                        },
                        addIndexCSS: false,
                    });
                    this.initFolderView(dataConfigList);
                    loadingMask.close();
                }
                /**
                 * 文件夹的点击事件 - 进入文件夹
                 *
                 * 先情况页面元素
                 * @param clickEvent
                 * @param dataConfig
                 */
                async enterFolder(clickEvent, dataConfig) {
                    this.clearFolderInfoView();
                    const loadingMask = PopsLoading.init({
                        $parent: $content,
                        content: {
                            text: "获取文件列表中...",
                        },
                        mask: {
                            enable: true,
                        },
                        addIndexCSS: false,
                    });
                    if (typeof dataConfig.clickEvent === "function") {
                        const childConfig = await dataConfig.clickEvent(clickEvent, dataConfig);
                        // 添加顶部导航的箭头
                        folderFileListBreadcrumbPrimaryElement.appendChild(this.createHeaderArrowIcon());
                        // 添加顶部导航的链接文字
                        const $breadcrumbAllFiles = this.createBreadcrumb(dataConfig.fileName, childConfig);
                        folderFileListBreadcrumbPrimaryElement.appendChild($breadcrumbAllFiles);
                        // 设置顶部导航点击事件
                        popsDOMUtils.on($breadcrumbAllFiles, "click", (event) => {
                            this.setBreadcrumbClickEvent(event, false, childConfig);
                        });
                        this.initFolderView(childConfig);
                    }
                    loadingMask.close();
                }
                /**
                 * 文件的点击事件 - 下载文件
                 * @param $target
                 * @param dataConfig
                 */
                async downloadFile(clickEvent, $row, dataConfig) {
                    popsDOMUtils.preventEvent(clickEvent);
                    const $link = $row.querySelector("a");
                    if (typeof dataConfig.clickEvent === "function") {
                        const downloadInfo = await dataConfig.clickEvent(clickEvent, dataConfig);
                        if (downloadInfo != null &&
                            typeof downloadInfo === "object" &&
                            !Array.isArray(downloadInfo) &&
                            typeof downloadInfo.url === "string" &&
                            downloadInfo.url.trim() !== "") {
                            $link.setAttribute("href", downloadInfo.url);
                            $link.setAttribute("target", "_blank");
                            if (downloadInfo.autoDownload) {
                                if (downloadInfo.mode == null || String(downloadInfo.mode) === "") {
                                    // 未设置mode的话默认为aBlank
                                    downloadInfo.mode = "aBlank";
                                }
                                if (downloadInfo.mode === "a" || downloadInfo.mode === "aBlank") {
                                    // a标签下载
                                    const $anchor = popsDOMUtils.createElement("a");
                                    if (downloadInfo.mode === "aBlank") {
                                        $anchor.setAttribute("target", "_blank");
                                    }
                                    $anchor.href = downloadInfo.url;
                                    $anchor.click();
                                }
                                else if (downloadInfo.mode === "open" || downloadInfo.mode === "openBlank") {
                                    // window.open下载
                                    if (downloadInfo.mode === "openBlank") {
                                        globalThis.open(downloadInfo.url, "_blank");
                                    }
                                    else {
                                        globalThis.open(downloadInfo.url);
                                    }
                                }
                                else if (downloadInfo.mode === "iframe") {
                                    // iframe下载
                                    const $downloadIframe = popsDOMUtils.createElement("iframe");
                                    $downloadIframe.src = downloadInfo.url;
                                    $downloadIframe.onload = function () {
                                        popsUtils.setTimeout(() => {
                                            $downloadIframe.remove();
                                        }, 1000);
                                    };
                                    $shadowRoot.appendChild($downloadIframe);
                                    popsUtils.setTimeout(() => {
                                        $downloadIframe.remove();
                                    }, 3 * 60 * 1000);
                                }
                                else {
                                    console.error("未知的下载模式", downloadInfo);
                                }
                            }
                        }
                    }
                }
                /**
                 * 对配置进行排序
                 * @param folderDataConfigList
                 * @param sortName 比较的属性，默认fileName
                 * @param isDesc 是否降序，默认false（升序）
                 */
                sortFolderConfig(folderDataConfigList, sortName = "fileName", isDesc = false) {
                    if (sortName === "fileName") {
                        // 如果是以文件名排序，文件夹优先放前面
                        const onlyFolderDataConfigList = folderDataConfigList.filter((value) => {
                            return value.isFolder;
                        });
                        const onlyFileDataConfigList = folderDataConfigList.filter((value) => {
                            return !value.isFolder;
                        });
                        // 文件夹排序
                        onlyFolderDataConfigList.sort((leftConfig, rightConfig) => {
                            const beforeVal = leftConfig[sortName].toString();
                            const afterVal = rightConfig[sortName].toString();
                            let compareVal = beforeVal.localeCompare(afterVal);
                            if (isDesc) {
                                // 降序
                                if (compareVal > 0) {
                                    compareVal = -1;
                                }
                                else if (compareVal < 0) {
                                    compareVal = 1;
                                }
                            }
                            return compareVal;
                        });
                        // 文件名排序
                        onlyFileDataConfigList.sort((leftConfig, rightConfig) => {
                            const beforeVal = leftConfig[sortName].toString();
                            const afterVal = rightConfig[sortName].toString();
                            let compareVal = beforeVal.localeCompare(afterVal);
                            if (isDesc) {
                                // 降序
                                if (compareVal > 0) {
                                    compareVal = -1;
                                }
                                else if (compareVal < 0) {
                                    compareVal = 1;
                                }
                            }
                            return compareVal;
                        });
                        if (isDesc) {
                            // 降序，文件夹在下面
                            return [...onlyFileDataConfigList, ...onlyFolderDataConfigList];
                        }
                        else {
                            // 升序，文件夹在上面
                            return [...onlyFolderDataConfigList, ...onlyFileDataConfigList];
                        }
                    }
                    else {
                        folderDataConfigList.sort((beforeConfig, afterConfig) => {
                            let beforeVal = beforeConfig[sortName];
                            let afterVal = afterConfig[sortName];
                            if (sortName === "fileSize") {
                                // 文件大小，进行Float转换
                                beforeVal = parseFloat(beforeVal.toString());
                                afterVal = parseFloat(afterVal.toString());
                            }
                            else if (sortName === "latestTime") {
                                // 文件时间
                                beforeVal = new Date(beforeVal).getTime();
                                afterVal = new Date(afterVal).getTime();
                            }
                            if (beforeVal > afterVal) {
                                if (isDesc) {
                                    // 降序
                                    return -1;
                                }
                                else {
                                    return 1;
                                }
                            }
                            else if (beforeVal < afterVal) {
                                if (isDesc) {
                                    // 降序
                                    return 1;
                                }
                                else {
                                    return -1;
                                }
                            }
                            else {
                                return 0;
                            }
                        });
                        return folderDataConfigList;
                    }
                }
                /**
                 * 添加文件夹/文件行元素
                 * @param dataConfig 配置
                 */
                initFolderView(dataConfig) {
                    // 先对文件夹、文件进行排序
                    this.sortFolderConfig(dataConfig, config.sort.name, config.sort.isDesc);
                    dataConfig.forEach((item) => {
                        if (item.isFolder) {
                            const { folderElement, fileNameElement } = popsUtils.isPhone()
                                ? this.createFolderRowElementByMobile(item.fileName, "", "", true)
                                : this.createFolderRowElement(item.fileName, "", "", true);
                            // 文件夹 - 点击事件
                            popsDOMUtils.on(fileNameElement, "click", (event) => {
                                // 进入文件夹
                                this.enterFolder(event, item);
                            });
                            folderListBodyElement.appendChild(folderElement);
                        }
                        else {
                            const { folderElement, fileNameElement } = popsUtils.isPhone()
                                ? this.createFolderRowElementByMobile(item.fileName, item.latestTime, item.fileSize, false)
                                : this.createFolderRowElement(item.fileName, item.latestTime, item.fileSize, false);
                            // 文件 - 点击事件
                            popsDOMUtils.on(fileNameElement, "click", (event) => {
                                // 下载文件
                                this.downloadFile(event, fileNameElement, item);
                            });
                            folderListBodyElement.appendChild(folderElement);
                        }
                    });
                }
                /**
                 * 移除所有箭头的被访问状态
                 */
                removeArrowActiveStatus() {
                    [
                        ...Array.from(folderListSortFileNameElement.querySelectorAll(".pops-folder-icon-active")),
                        ...Array.from(folderListSortLatestTimeElement.querySelectorAll(".pops-folder-icon-active")),
                        ...Array.from(folderListSortFileSizeElement.querySelectorAll(".pops-folder-icon-active")),
                    ].forEach((ele) => ele.classList.remove("pops-folder-icon-active"));
                }
                /**
                 * 修改导航箭头的状态
                 */
                changeArrowActive(arrowUp, arrowDown, isDesc) {
                    this.removeArrowActiveStatus();
                    if (isDesc) {
                        arrowDown.classList.add("pops-folder-icon-active");
                    }
                    else {
                        arrowUp.classList.add("pops-folder-icon-active");
                    }
                }
                /**
                 * 排序按钮的点击事件
                 * @param target
                 * @param event
                 * @param sortName
                 */
                arrowToSortFolderInfoView(target, event, sortName) {
                    const notChangeSortRule = Reflect.get(event, "notChangeSortRule");
                    if (!notChangeSortRule) {
                        config.sort.name = sortName;
                        config.sort.isDesc = !config.sort.isDesc;
                    }
                    const $arrowUp = target.querySelector(".pops-folder-icon-arrow-up");
                    const $arrowDown = target.querySelector(".pops-folder-icon-arrow-down");
                    this.changeArrowActive($arrowUp, $arrowDown, config.sort.isDesc);
                    if (typeof config.sort.callback === "function" &&
                        config.sort.callback(target, event, config.sort.name, config.sort.isDesc)) {
                        return;
                    }
                    const childrenList = [];
                    Array.from(folderListBodyElement.children).forEach((trElement) => {
                        const __value__ = Reflect.get(trElement, "__value__");
                        Reflect.set(__value__, "target", trElement);
                        childrenList.push(__value__);
                    });
                    const sortedConfigList = this.sortFolderConfig(childrenList, config.sort.name, config.sort.isDesc);
                    sortedConfigList.forEach((item) => {
                        folderListBodyElement.appendChild(item.target);
                    });
                }
            }
            const popsFolder = new PopsFolder();
            popsFolder.init();
            Reflect.set($pops, "data-pops-folder", popsFolder);
            // 拖拽
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            PopsHandler.handlePush(popsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                config: config,
                destory: result.close,
            });
            return result;
        },
    };

    const PopsIframeDefaultConfig = () => {
        return {
            title: {
                position: "center",
                text: "",
                html: false,
                style: "",
            },
            loading: {
                enable: true,
                icon: true,
                text: "",
            },
            useShadowRoot: true,
            class: "",
            url: window.location.href,
            only: false,
            zIndex: 10000,
            mask: {
                enable: false,
                clickEvent: {
                    toClose: false,
                    toHide: false,
                },
                clickCallBack: null,
            },
            animation: "pops-anim-fadein-zoom",
            position: "center",
            drag: true,
            dragLimit: true,
            dragExtraDistance: 3,
            dragMoveCallBack() { },
            dragEndCallBack() { },
            width: window.innerWidth < 550 ? "88vw" : "350px",
            height: window.innerHeight < 450 ? "70vh" : "200px",
            topRightButton: "min|max|mise|close",
            sandbox: false,
            forbiddenScroll: false,
            loadEndCallBack() { },
            btn: {
                min: {
                    callback() { },
                },
                max: {
                    callback() { },
                },
                mise: {
                    callback() { },
                },
                close: {
                    callback() { },
                },
            },
            style: null,
            beforeAppendToPageCallBack() { },
        };
    };

    const PopsIframe = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "iframe";
            let config = PopsIframeDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            if (config.url == null) {
                throw new TypeError("config.url must not be null.");
            }
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "ninePalaceGridPosition",
                    css: PopsCSS.ninePalaceGridPosition,
                },
                {
                    name: "scrollbar",
                    css: PopsCSS.scrollbar,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "iframeCSS",
                    css: PopsCSS.iframeCSS,
                },
            ]);
            const maskExtraStyle = config.animation != null && config.animation != "" ? "position:absolute;" : "";
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex, maskExtraStyle);
            const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
            const iframeLoadingHTML = /*html*/ '<div class="pops-loading"></div>';
            const titleText = config.title.text.trim() !== "" ? config.title.text : config.url;
            const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
            const animHTML = PopsElementHandler.createAnim(guid, popsType, config, 
            /*html*/ `
            <div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${config.title.html
            ? titleText
            : `<p pops class="pops-${popsType}-title-text" style="${headerPStyle}">${titleText}</p>`}${headerBtnHTML}</div>
			<div class="pops-content pops-${popsType}-content">
                <div class="pops-${popsType}-content-global-loading"></div>
                <iframe src="${config.url}" pops ${config.sandbox ? "sandbox='allow-forms allow-same-origin allow-scripts'" : ""}>
                </iframe>
			</div>${config.loading.enable ? iframeLoadingHTML : ""}`, "", zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            const { $pops: $pops, $headerBtnClose: headerCloseBtnElement, $headerControls: headerControlsElement, $title: $title, $iframe: $iframe, $loading: loadingElement, $contentLoading: $contentLoading, $headerBtnMin: headerMinBtnElement, $headerBtnMax: headerMaxBtnElement, $headerBtnMise: headerMiseBtnElement, } = PopsHandler.handleQueryElement($anim, popsType);
            let $iframeContainer = PopsCore.document.querySelector(".pops-iframe-container");
            if (!$iframeContainer) {
                $iframeContainer = popsDOMUtils.createElement("div", {
                    className: "pops-iframe-container",
                });
                $iframeContainer.style.cssText =
                    "display: flex;position: fixed;bottom: 0px;flex-flow: wrap-reverse;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
                popsDOMUtils.appendBody($iframeContainer);
            }
            /**
             * 遮罩层元素
             */
            let $mask = void 0;
            /**
             * 已创建的元素列表
             */
            const $elList = [$anim];
            if (config.mask.enable) {
                const handleMask = PopsHandler.handleMask({
                    type: popsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            const evtConfig = PopsHandler.handleEventConfig(config, guid, $shadowContainer, $shadowRoot, popsType, $anim, $pops, $mask);
            // 赋值额外的$iframe参数
            evtConfig.$iframe = $iframe;
            const result = PopsHandler.handleResultConfig(evtConfig);
            popsDOMUtils.on($anim, popsDOMUtils.getAnimationEndNameList(), function () {
                // 动画加载完毕
                $anim.style.width = "0%";
                $anim.style.height = "0%";
            });
            popsDOMUtils.on($iframe, "load", () => {
                // iframe加载中...
                loadingElement?.remove();
                $contentLoading.style.animation = "iframeLoadingChange_85 0.3s forwards";
                popsDOMUtils.on($contentLoading, popsDOMUtils.getAnimationEndNameList(), () => {
                    // 动画加载完毕就移除
                    $contentLoading.remove();
                });
                if (config.title.text.trim() === "" && $iframe.contentDocument) {
                    // 同域名下的才可以获取网页标题
                    $title.querySelector("p").innerText = $iframe.contentDocument.title;
                }
                config.loadEndCallBack(evtConfig);
            });
            // 创建到页面中
            popsDOMUtils.append($shadowRoot, $elList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            $iframeContainer.appendChild($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            // 拖拽
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            const TYPE_MODULE = "type-module";
            // 最小化按钮点击事件
            let origin_left = "";
            let origin_top = "";
            let origin_is_max = false;
            popsDOMUtils.on(headerMinBtnElement, "click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                origin_left = $pops.style.left;
                origin_top = $pops.style.top;
                $pops.classList.add("pops-iframe-unset-top");
                $pops.classList.add("pops-iframe-unset-left");
                $pops.classList.add("pops-iframe-unset-transform");
                $pops.style.transitionDuration = "";
                $pops.setAttribute(TYPE_MODULE, "min");
                headerControlsElement.setAttribute("type", "min");
                // 隐藏放大图标
                headerMaxBtnElement.style.setProperty("display", "none");
                // 显示复位图标
                headerMiseBtnElement.style.setProperty("display", "");
                if (typeof config?.btn?.min?.callback === "function") {
                    config.btn.min.callback(evtConfig, event);
                }
            }, {
                capture: true,
            });
            // 最大化按钮点击事件
            popsDOMUtils.on(headerMaxBtnElement, "click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                if ($pops.getAttribute(TYPE_MODULE) !== "min") {
                    origin_left = $pops.style.left;
                    origin_top = $pops.style.top;
                }
                origin_is_max = true;
                $pops.style.transitionDuration = "";
                $pops.style.transform = "";
                $pops.removeAttribute(TYPE_MODULE);
                $pops.classList.add("pops-iframe-unset-transition");
                $pops.classList.add("pops-iframe-unset-left");
                $pops.classList.add("pops-iframe-unset-top");
                $pops.classList.add("pops-iframe-unset-transform");
                $pops.classList.remove("pops-iframe-unset-transition");
                $pops.setAttribute(TYPE_MODULE, "max");
                headerControlsElement.setAttribute("type", "max");
                // 隐藏放大图标
                headerMaxBtnElement.style.setProperty("display", "none");
                // 显示复位图标
                headerMiseBtnElement.style.setProperty("display", "");
                if (typeof config?.btn?.max?.callback === "function") {
                    config.btn.max.callback(evtConfig, event);
                }
            }, {
                capture: true,
            });
            // 先隐藏窗口化按钮
            headerMiseBtnElement?.style?.setProperty("display", "none");
            // 复位按钮点击事件
            popsDOMUtils.on(headerMiseBtnElement, "click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                if (origin_is_max && $pops.getAttribute(TYPE_MODULE) === "min") {
                    $pops.classList.add("pops-iframe-unset-transition");
                    $pops.classList.add("pops-iframe-unset-left");
                    $pops.classList.add("pops-iframe-unset-top");
                    $pops.classList.add("pops-iframe-unset-transform");
                    $pops.classList.remove("pops-iframe-unset-transition");
                    $pops.setAttribute(TYPE_MODULE, "max");
                    headerControlsElement.setAttribute("type", "max");
                }
                else {
                    origin_is_max = false;
                    $pops.style.left = origin_left;
                    $pops.style.top = origin_top;
                    $pops.style.transitionDuration = "";
                    $pops.style.transform = "";
                    headerControlsElement.removeAttribute("type");
                    $pops.removeAttribute(TYPE_MODULE);
                    $pops.classList.remove("pops-iframe-unset-top");
                    $pops.classList.remove("pops-iframe-unset-left");
                    $pops.classList.remove("pops-iframe-unset-transform");
                    // 显示放大图标
                    headerMaxBtnElement.style.setProperty("display", "");
                    // 隐藏复位图标
                    headerMiseBtnElement.style.setProperty("display", "none");
                }
                if (typeof config?.btn?.mise?.callback === "function") {
                    config.btn.mise.callback(evtConfig, event);
                }
            }, {
                capture: true,
            });
            // 关闭按钮点击事件
            popsDOMUtils.on(headerCloseBtnElement, "click", async (event) => {
                event.preventDefault();
                event.stopPropagation();
                await PopsInstanceUtils.removeInstance([PopsInstData.iframe], guid, false);
                if (typeof config?.btn?.close?.callback === "function") {
                    config.btn.close.callback(evtConfig, event);
                }
            }, {
                capture: true,
            });
            PopsHandler.handlePush(popsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                config: config,
                destory: result.close,
            });
            return result;
        },
    };

    const PopsPanelDefaultConfig = () => {
        return {
            title: {
                text: "默认标题",
                position: "center",
                html: false,
                style: "",
            },
            content: [
                {
                    id: "whitesev-panel-config-1",
                    title: "菜单配置1",
                    headerTitle: "菜单配置1",
                    isDefault: true,
                    attributes: {
                        "data-test": "test",
                        "data-test-2": "test2",
                    },
                    views: [
                        {
                            className: "forms-1",
                            text: "区域设置",
                            type: "container",
                            views: [
                                {
                                    className: "panel-switch",
                                    text: "switch",
                                    type: "switch",
                                    disabled: false,
                                    description: "",
                                    getValue() {
                                        return true;
                                    },
                                    callback(event, value) {
                                        console.log("按钮开启状态：", value);
                                    },
                                },
                                {
                                    className: "panel-slider",
                                    text: "slider",
                                    type: "slider",
                                    description: "",
                                    disabled: false,
                                    getToolTipContent(value) {
                                        return String(value);
                                    },
                                    isShowHoverTip: true,
                                    step: 1,
                                    getValue() {
                                        return 50;
                                    },
                                    callback(event, value) {
                                        console.log("滑块当前数值：", value);
                                    },
                                    min: 1,
                                    max: 100,
                                },
                                {
                                    className: "panel-button",
                                    text: "button",
                                    type: "button",
                                    description: "",
                                    disable: false,
                                    buttonIsRightIcon: false,
                                    buttonIcon: "view",
                                    buttonIconIsLoading: true,
                                    buttonType: "default",
                                    buttonText: "default按钮",
                                    callback(event) {
                                        console.log("点击按钮", event);
                                    },
                                },
                                {
                                    className: "panel-button",
                                    text: "button",
                                    type: "button",
                                    buttonIcon: "eleme",
                                    buttonIconIsLoading: true,
                                    buttonType: "warning",
                                    buttonText: "warning按钮",
                                    callback(event) {
                                        console.log("点击按钮", event);
                                    },
                                },
                                {
                                    className: "panel-button",
                                    text: "button",
                                    type: "button",
                                    buttonIcon: "chromeFilled",
                                    buttonIconIsLoading: true,
                                    buttonType: "danger",
                                    buttonText: "danger按钮",
                                    callback(event) {
                                        console.log("点击按钮", event);
                                    },
                                },
                                {
                                    className: "panel-button",
                                    text: "button",
                                    type: "button",
                                    buttonIcon: "upload",
                                    buttonIconIsLoading: false,
                                    buttonType: "info",
                                    buttonText: "info按钮",
                                    callback(event) {
                                        console.log("点击按钮", event);
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "whitesev-panel-config-2",
                    title: "菜单配置2",
                    headerTitle: "菜单配置2",
                    isDefault: false,
                    attributes: {
                        "data-value": "value",
                        "data-value-2": "value2",
                    },
                    views: [
                        {
                            className: "panel-input",
                            text: "input",
                            type: "input",
                            getValue() {
                                return "50";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-number",
                            text: "input-number",
                            type: "input",
                            inputType: "number",
                            getValue() {
                                return "50";
                            },
                            callback(event, value, valueAsNumber) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", valueAsNumber);
                                if (valueAsNumber > 60) {
                                    return {
                                        valid: false,
                                        message: "输入值不能大于60，当前：" + value,
                                    };
                                }
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-password",
                            text: "input-password",
                            type: "input",
                            inputType: "password",
                            placeholder: "请输入密码",
                            getValue() {
                                return "123456";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                console.log("密码输入框内容改变：", value);
                            },
                        },
                        {
                            className: "panel-input-file",
                            text: "input-file",
                            type: "input",
                            inputType: "file",
                            getValue() {
                                return "";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                console.log("内容改变：", value);
                            },
                            placeholder: "请输入密码",
                        },
                        {
                            className: "panel-input-date",
                            text: "input-date",
                            type: "input",
                            inputType: "date",
                            placeholder: "请输入内容",
                            getValue() {
                                const date = new Date();
                                let hour = date.getHours().toString();
                                let minutes = date.getMinutes().toString();
                                if (hour.length === 1) {
                                    hour = `0${hour}`;
                                }
                                if (minutes.length === 1) {
                                    minutes = `0${minutes}`;
                                }
                                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                            },
                            callback(event, value, valueAsNumber, valueAsDate) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
                            },
                        },
                        {
                            className: "panel-input-datetime-local",
                            text: "input-datetime-local",
                            type: "input",
                            inputType: "datetime-local",
                            getValue() {
                                const date = new Date();
                                let hour = date.getHours().toString();
                                let minutes = date.getMinutes().toString();
                                if (hour.length === 1) {
                                    hour = `0${hour}`;
                                }
                                if (minutes.length === 1) {
                                    minutes = `0${minutes}`;
                                }
                                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${hour}:${minutes}`;
                            },
                            callback(event, value, valueAsNumber, valueAsDate) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-time",
                            text: "input-time",
                            type: "input",
                            inputType: "time",
                            getValue() {
                                return "11:30";
                            },
                            callback(event, value, valueAsNumber, valueAsDate) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-month",
                            text: "input-month",
                            type: "input",
                            inputType: "month",
                            getValue() {
                                const date = new Date();
                                return `${date.getFullYear()}-${date.getMonth() + 1}`;
                            },
                            callback(event, value, valueAsNumber, valueAsDate) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-week",
                            text: "input-week",
                            type: "input",
                            inputType: "week",
                            getValue() {
                                const date = new Date();
                                return `${date.getFullYear()}-W01`;
                            },
                            callback(event, value, valueAsNumber, valueAsDate) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-search",
                            text: "input-search",
                            type: "input",
                            inputType: "search",
                            getValue() {
                                return "search test";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-color",
                            text: "input-color",
                            type: "input",
                            inputType: "color",
                            getValue() {
                                return "#ff0000";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                console.log("输入框内容改变：", value);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-email",
                            text: "input-email",
                            type: "input",
                            inputType: "email",
                            getValue() {
                                return "test@gmail.com";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                const $input = event.target;
                                console.log("输入框内容改变：", value, $input.validity);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-tel",
                            text: "input-tel",
                            type: "input",
                            inputType: "tel",
                            getValue() {
                                return "11111111111";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                const $input = event.target;
                                console.log("输入框内容改变：", value, $input.validity);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-input-url",
                            text: "input-url",
                            type: "input",
                            inputType: "url",
                            getValue() {
                                return "https://github.com/";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                const $input = event.target;
                                console.log("输入框内容改变：", value, $input.validity);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            className: "panel-textarea",
                            text: "textarea",
                            type: "textarea",
                            getValue() {
                                return "50";
                            },
                            callback(event, value) {
                                popsDOMUtils.preventEvent(event);
                                console.log("textarea输入框内容改变：", value);
                            },
                            placeholder: "请输入内容",
                        },
                        {
                            type: "container",
                            text: "",
                            views: [
                                {
                                    className: "panel-select-disabled",
                                    text: "select-disabled",
                                    type: "select",
                                    disabled: true,
                                    getValue() {
                                        return "text";
                                    },
                                    callback(isSelectedInfo) {
                                        if (isSelectedInfo == null)
                                            return;
                                        console.log(`select当前选项：${isSelectedInfo.value}，当前选项文本：${isSelectedInfo.text}`);
                                    },
                                    data: [
                                        {
                                            value: "all",
                                            text: "所有",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "text",
                                            text: "文本",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "html",
                                            text: "超文本",
                                            disable() {
                                                return false;
                                            },
                                        },
                                    ],
                                },
                                {
                                    className: "panel-select-multiple-disabled",
                                    type: "select-multiple",
                                    text: "select-multiple-disabled",
                                    disabled: true,
                                    placeholder: "请至少选择一个选项",
                                    getValue() {
                                        return ["select-1", "select-2"];
                                    },
                                    callback(selectInfo) {
                                        console.log(`select值改变，多选信息`, selectInfo);
                                    },
                                    clickCallBack(event, isSelectedInfo) {
                                        console.log("点击", event, isSelectedInfo);
                                    },
                                    closeIconClickCallBack(event, data) {
                                        console.log("点击关闭图标的事件", data);
                                    },
                                    data: [
                                        {
                                            value: "select-1",
                                            text: "单选1",
                                            isHTML: false,
                                        },
                                        {
                                            value: "select-2",
                                            text: "单选2",
                                            isHTML: false,
                                        },
                                        {
                                            value: "select-3",
                                            text: "单选3",
                                            isHTML: false,
                                        },
                                        {
                                            value: "select-4",
                                            text: "单选4",
                                            isHTML: false,
                                        },
                                    ],
                                },
                                {
                                    className: "panel-select-native",
                                    text: "select-native",
                                    type: "select",
                                    mode: "native",
                                    getValue() {
                                        return "all";
                                    },
                                    callback(isSelectedInfo) {
                                        if (isSelectedInfo == null)
                                            return;
                                        console.log(`select当前选项：${isSelectedInfo.value}，当前选项文本：${isSelectedInfo.text}`);
                                    },
                                    data: [
                                        {
                                            value: "all",
                                            text: "所有",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "text",
                                            text: "文本",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "html",
                                            text: "超文本",
                                            disable() {
                                                return false;
                                            },
                                        },
                                    ],
                                },
                                {
                                    className: "panel-select-dialog",
                                    text: "select-dialog",
                                    type: "select",
                                    mode: "dialog",
                                    getValue() {
                                        return window.localStorage.getItem("select-dialog-customInput") || "";
                                    },
                                    callback(isSelectedInfo) {
                                        if (isSelectedInfo == null) {
                                            console.warn(`select当前选项为空`);
                                            return;
                                        }
                                        if (isSelectedInfo.addCustomInput) {
                                            if (isSelectedInfo.value === "") {
                                                // 空值，不存储
                                                if (isSelectedInfo.customInputStoreKey) {
                                                    console.log(`select删除自定义输入的值`);
                                                    window.localStorage.removeItem(isSelectedInfo.customInputStoreKey);
                                                }
                                            }
                                            else {
                                                console.log(`select当前自定义输入框内容：${isSelectedInfo.value}，当前选项显示文本：${isSelectedInfo.text}`);
                                                if (isSelectedInfo.customInputStoreKey) {
                                                    window.localStorage.setItem(isSelectedInfo.customInputStoreKey, isSelectedInfo.value);
                                                }
                                            }
                                        }
                                        else {
                                            console.log(`select当前选项：${isSelectedInfo.value}，当前选项显示文本：${isSelectedInfo.text}`);
                                        }
                                    },
                                    data: [
                                        {
                                            value: "all",
                                            text: "所有",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "text",
                                            text: "文本",
                                            disable(value, selectInfo) {
                                                if (selectInfo?.value === "all")
                                                    return true;
                                                return false;
                                            },
                                        },
                                        {
                                            value: "html",
                                            text: "超文本",
                                            disable(value, selectInfo) {
                                                if (selectInfo?.value === "all")
                                                    return true;
                                                return false;
                                            },
                                        },
                                        {
                                            value: "own",
                                            text: "自定义",
                                            disable(value, selectInfo) {
                                                if (selectInfo?.value === "all")
                                                    return true;
                                                return false;
                                            },
                                        },
                                        {
                                            value: window.localStorage.getItem("select-dialog-customInput") || "",
                                            text: window.localStorage.getItem("select-dialog-customInput") || "",
                                            addCustomInput: true,
                                            customInputStoreKey: "select-dialog-customInput",
                                            onValid(dataOption) {
                                                if (dataOption.value === "123") {
                                                    console.error("非规范值");
                                                    return {
                                                        valid: false,
                                                        message: "非规范值",
                                                    };
                                                }
                                                return {
                                                    valid: true,
                                                };
                                            },
                                        },
                                    ],
                                },
                                {
                                    className: "panel-select-horizontal",
                                    text: "select-horizontal",
                                    type: "select",
                                    mode: "horizontal",
                                    getValue() {
                                        return "text";
                                    },
                                    callback(isSelectedInfo) {
                                        if (isSelectedInfo == null)
                                            return;
                                        console.log(`select当前选项：${isSelectedInfo.value}，当前选项文本：${isSelectedInfo.text}`);
                                    },
                                    data: [
                                        {
                                            value: "all",
                                            text: "所有",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "text",
                                            text: "文本",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "html",
                                            text: "超文本",
                                            disable() {
                                                return false;
                                            },
                                        },
                                        {
                                            value: "own",
                                            text: "自定义",
                                            disable() {
                                                return true;
                                            },
                                        },
                                    ],
                                },
                                {
                                    className: "panel-select-multiple",
                                    type: "select-multiple",
                                    text: "select-multiple",
                                    placeholder: "请至少选择一个选项",
                                    getValue() {
                                        return ["select-1", "select-2"];
                                    },
                                    callback(selectInfo) {
                                        console.log(`select值改变，多选信息`, selectInfo);
                                    },
                                    clickCallBack(event, isSelectedInfo) {
                                        console.log("点击", event, isSelectedInfo);
                                    },
                                    closeIconClickCallBack(event, data) {
                                        console.log("点击关闭图标的事件", data);
                                    },
                                    data: [
                                        {
                                            value: "select-1",
                                            text: "单选1",
                                            isHTML: false,
                                            disable(value, allSelectedInfo) {
                                                return allSelectedInfo.findIndex((it) => ["select-5"].includes(it.value)) !== -1;
                                            },
                                        },
                                        {
                                            value: "select-2",
                                            text: "单选2",
                                            isHTML: false,
                                            disable(value, allSelectedInfo) {
                                                return allSelectedInfo.findIndex((it) => ["select-5"].includes(it.value)) !== -1;
                                            },
                                        },
                                        {
                                            value: "select-3",
                                            text: "单选3",
                                            isHTML: false,
                                            disable(value, allSelectedInfo) {
                                                return allSelectedInfo.findIndex((it) => ["select-2", "select-5"].includes(it.value)) !== -1;
                                            },
                                        },
                                        {
                                            value: "select-4",
                                            text: "单选4",
                                            isHTML: false,
                                            disable(value, allSelectedInfo) {
                                                return allSelectedInfo.findIndex((it) => ["select-3", "select-5"].includes(it.value)) !== -1;
                                            },
                                        },
                                        {
                                            value: "select-5",
                                            text(value, allSelectedInfo) {
                                                return allSelectedInfo.findIndex((it) => ["select-4"].includes(it.value)) !== -1
                                                    ? "单选5-禁用"
                                                    : "单选5";
                                            },
                                            isHTML: false,
                                            disable(value, allSelectedInfo) {
                                                return allSelectedInfo.findIndex((it) => ["select-4"].includes(it.value)) !== -1;
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "container",
                            text: "deep菜单",
                            views: [
                                {
                                    type: "deepMenu",
                                    className: "panel-deepMenu",
                                    text: "deepMenu",
                                    description: "二级菜单",
                                    rightText: "自定义配置",
                                    arrowRightIcon: true,
                                    afterAddToUListCallBack(viewConfig, container) {
                                        console.log(viewConfig, container);
                                    },
                                    clickCallBack(event, viewConfig) {
                                        console.log("进入子配置", event, viewConfig);
                                    },
                                    views: [
                                        {
                                            className: "forms-1",
                                            text: "区域设置",
                                            type: "container",
                                            views: [
                                                {
                                                    className: "panel-switch",
                                                    text: "switch",
                                                    type: "switch",
                                                    getValue() {
                                                        return true;
                                                    },
                                                    callback(event, value) {
                                                        console.log("按钮开启状态：", value);
                                                    },
                                                },
                                                {
                                                    className: "panel-slider",
                                                    text: "slider",
                                                    type: "slider",
                                                    getValue() {
                                                        return 50;
                                                    },
                                                    callback(event, value) {
                                                        console.log("滑块当前数值：", value);
                                                    },
                                                    min: 1,
                                                    max: 100,
                                                },
                                                {
                                                    className: "panel-button",
                                                    text: "button",
                                                    type: "button",
                                                    buttonIcon: "eleme",
                                                    buttonIconIsLoading: true,
                                                    buttonType: "warning",
                                                    buttonText: "warning按钮",
                                                    callback(event) {
                                                        console.log("点击按钮", event);
                                                    },
                                                },
                                                {
                                                    className: "panel-button",
                                                    text: "button",
                                                    type: "button",
                                                    buttonIcon: "chromeFilled",
                                                    buttonIconIsLoading: true,
                                                    buttonType: "danger",
                                                    buttonText: "danger按钮",
                                                    callback(event) {
                                                        console.log("点击按钮", event);
                                                    },
                                                },
                                                {
                                                    className: "panel-button",
                                                    text: "button",
                                                    type: "button",
                                                    buttonIcon: "upload",
                                                    buttonIconIsLoading: false,
                                                    buttonType: "info",
                                                    buttonText: "info按钮",
                                                    callback(event) {
                                                        console.log("点击按钮", event);
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "deepMenu",
                                    className: "panel-deepMenu2",
                                    //@ts-ignore
                                    text: "deepMenu2",
                                    description: "二级菜单",
                                    rightText: "自定义配置",
                                    arrowRightIcon: true,
                                    afterAddToUListCallBack(viewConfig, container) {
                                        console.log(viewConfig, container);
                                    },
                                    clickCallBack(event, viewConfig) {
                                        console.log("进入子配置", event, viewConfig);
                                    },
                                    views: [],
                                },
                            ],
                        },
                        {
                            type: "container",
                            isFold: true,
                            text: "折叠菜单",
                            afterAddToUListCallBack(viewConfig, container) {
                                console.log(viewConfig, container);
                            },
                            views: [
                                {
                                    className: "panel-switch",
                                    text: "switch",
                                    type: "switch",
                                    getValue() {
                                        return true;
                                    },
                                    callback(event, value) {
                                        console.log("按钮开启状态：", value);
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "whitesev-panel-bottom-config-1",
                    title: /*html*/ `
					<a rel="nofollow" href="https://www.npmjs.com/package/@whitesev/pops" target="_blank"><img src="https://img.shields.io/npm/v/@whitesev/pops?label=pops" alt="npm pops version"></a>
				`,
                    isBottom: true,
                    disableAsideItemHoverCSS: true,
                    attributes: {
                        "data-value": "value",
                        "data-value-2": "value2",
                    },
                    views: [],
                    clickFirstCallback: function () {
                        return false;
                    },
                },
                {
                    id: "whitesev-panel-bottom-config-2",
                    title: "版本：xxx.xx.xx",
                    isBottom: true,
                    attributes: {
                        "data-value": "value",
                        "data-value-2": "value2",
                    },
                    views: [],
                    clickFirstCallback: function () {
                        return false;
                    },
                },
            ],
            bottomContentConfig: [],
            btn: {
                close: {
                    enable: true,
                    callback(event) {
                        event.close();
                    },
                },
            },
            mask: {
                enable: false,
                clickEvent: {
                    toClose: false,
                    toHide: false,
                },
                clickCallBack: null,
            },
            useShadowRoot: true,
            class: "",
            mobileClassName: "pops-panel-is-mobile",
            isMobile: false,
            only: false,
            width: window.innerWidth < 550 ? "88vw" : "700px",
            height: window.innerHeight < 450 ? "70vh" : "500px",
            position: "center",
            animation: "pops-anim-fadein-zoom",
            useDeepMenuSwtichAnimation: true,
            zIndex: 10000,
            drag: false,
            dragLimit: true,
            dragExtraDistance: 3,
            dragMoveCallBack() { },
            dragEndCallBack() { },
            forbiddenScroll: false,
            style: null,
            beforeAppendToPageCallBack() { },
        };
    };

    const PopsMathFloatUtils = {
        /**
         * 判断数字是否是浮点数
         * @param num
         */
        isFloat(num) {
            return Number(num) === num && num % 1 !== 0;
        },
        /**
         * 浮点数加法
         * @param number1
         * @param number2
         */
        add(number1, number2) {
            let number1length, number2length;
            try {
                number1length = number1.toString().split(".")[1].length;
            }
            catch {
                number1length = 0;
            }
            try {
                number2length = number2.toString().split(".")[1].length;
            }
            catch {
                number2length = 0;
            }
            const powValue = Math.pow(10, Math.max(number1length, number2length));
            return Math.round(number1 * powValue + number2 * powValue) / powValue;
        },
        /**
         * 减法
         * @param number1
         * @param number2
         */
        sub(number1, number2) {
            let number1length, number2length;
            try {
                number1length = number1.toString().split(".")[1].length;
            }
            catch {
                number1length = 0;
            }
            try {
                number2length = number2.toString().split(".")[1].length;
            }
            catch {
                number2length = 0;
            }
            const powValue = Math.pow(10, Math.max(number1length, number2length));
            const fixedValue = number1length >= number2length ? number1length : number2length;
            return (Math.round(number1 * powValue - number2 * powValue) / powValue).toFixed(fixedValue);
        },
        /**
         * 除法
         * @param number1
         * @param number2
         */
        division(number1, number2) {
            let number1length, number2length;
            try {
                number1length = number1.toString().split(".")[1].length;
            }
            catch {
                number1length = 0;
            }
            try {
                number2length = number2.toString().split(".")[1].length;
            }
            catch {
                number2length = 0;
            }
            const number1ReplaceValue = Number(number1.toString().replace(".", ""));
            const number2ReplaceValue = Number(number2.toString().replace(".", ""));
            return (number1ReplaceValue / number2ReplaceValue) * Math.pow(10, number2length - number1length);
        },
    };

    const PopsTooltipDefaultConfig = () => {
        return {
            useShadowRoot: true,
            $target: null,
            content: "默认文字",
            isDiffContent: false,
            position: "top",
            className: "",
            isFixed: false,
            alwaysShow: false,
            onShowEventName: "mouseenter touchstart",
            onCloseEventName: "mouseleave touchend touchcancel",
            zIndex: 10000,
            only: false,
            eventOption: {
                once: false,
                passive: false,
                capture: true,
            },
            showBeforeCallBack() { },
            showAfterCallBack() { },
            closeBeforeCallBack() { },
            closeAfterCallBack() { },
            delayCloseTime: 100,
            showArrow: true,
            arrowDistance: 12.5,
            otherDistance: 0,
            style: "",
            beforeAppendToPageCallBack() { },
        };
    };

    class ToolTip {
        $el = {
            $shadowContainer: null,
            $shadowRoot: null,
            $toolTip: null,
            $content: null,
            $arrow: null,
        };
        $data = {
            config: null,
            guid: null,
            timeId_close_TouchEvent: [],
            timeId_close_MouseEvent: [],
        };
        constructor(config, guid, ShadowInfo) {
            this.$data.config = config;
            this.$data.guid = guid;
            this.$el.$shadowContainer = ShadowInfo.$shadowContainer;
            this.$el.$shadowRoot = ShadowInfo.$shadowRoot;
            this.show = this.show.bind(this);
            this.close = this.close.bind(this);
            this.toolTipAnimationFinishEvent = this.toolTipAnimationFinishEvent.bind(this);
            this.toolTipMouseEnterEvent = this.toolTipMouseEnterEvent.bind(this);
            this.toolTipMouseLeaveEvent = this.toolTipMouseLeaveEvent.bind(this);
            this.init();
        }
        init() {
            const toolTipInfo = this.createToolTip();
            this.$el.$toolTip = toolTipInfo.$toolTipContainer;
            this.$el.$content = toolTipInfo.$toolTipContent;
            this.$el.$arrow = toolTipInfo.$toolTipArrow;
            this.changeContent();
            this.changeZIndex();
            this.changePosition();
            if (!this.$data.config.alwaysShow) {
                this.offEvent();
                this.onEvent();
            }
        }
        /**
         * 创建提示元素
         */
        createToolTip() {
            const $toolTipContainer = popsDOMUtils.createElement("div", {
                className: "pops-tip",
                innerHTML: /*html*/ `
				<div class="pops-tip-content" style="text-align: center;"></div>
				<div class="pops-tip-arrow"></div>
			`,
            }, {
                "data-position": this.$data.config.isFixed ? "fixed" : "absolute",
                "data-guid": this.$data.guid,
            });
            /** 内容 */
            const $toolTipContent = $toolTipContainer.querySelector(".pops-tip-content");
            /** 箭头 */
            const $toolTipArrow = $toolTipContainer.querySelector(".pops-tip-arrow");
            // 处理className
            popsDOMUtils.addClassName($toolTipContainer, this.$data.config.className);
            // 添加z-index
            $toolTipContainer.style.zIndex = PopsHandler.handleZIndex(this.$data.config.zIndex).toString();
            if (this.$data.config.style != null) {
                // 添加自定义style
                const cssNode = popsDOMUtils.createElement("style", {
                    type: "text/css",
                    innerHTML: this.$data.config.style,
                });
                $toolTipContainer.appendChild(cssNode);
            }
            // 处理是否显示箭头元素
            if (!this.$data.config.showArrow) {
                $toolTipArrow.remove();
            }
            return {
                $toolTipContainer: $toolTipContainer,
                $toolTipArrow: $toolTipArrow,
                $toolTipContent: $toolTipContent,
            };
        }
        /**
         * 获取提示的内容
         */
        getContent() {
            return typeof this.$data.config.content === "function" ? this.$data.config.content() : this.$data.config.content;
        }
        /**
         * 修改提示的内容
         * @param text
         */
        changeContent(text) {
            if (text == null) {
                text = this.getContent();
            }
            if (this.$data.config.isDiffContent) {
                const contentPropKey = "data-content";
                const originContentText = Reflect.get(this.$el.$content, contentPropKey);
                if (typeof originContentText === "string") {
                    if (originContentText === text) {
                        // 内容未改变，不修改避免渲染
                        return;
                    }
                }
                Reflect.set(this.$el.$content, contentPropKey, text);
            }
            PopsSafeUtils.setSafeHTML(this.$el.$content, text);
        }
        /**
         * 获取z-index
         */
        getZIndex() {
            const zIndex = PopsHandler.handleZIndex(this.$data.config.zIndex);
            return zIndex;
        }
        /**
         * 动态修改z-index
         */
        changeZIndex() {
            const zIndex = this.getZIndex();
            this.$el.$toolTip.style.setProperty("z-index", zIndex.toString());
        }
        /**
         * 计算 提示框的位置
         * @param event 触发的事件
         * @param targetElement 目标元素
         * @param arrowDistance 箭头和目标元素的距离
         * @param otherDistance 其它位置的偏移
         */
        calcToolTipPosition(targetElement, arrowDistance, otherDistance, event) {
            const offsetInfo = popsDOMUtils.offset(targetElement, !this.$data.config.isFixed);
            // 目标 宽
            const targetElement_width = offsetInfo.width;
            // 目标 高
            const targetElement_height = offsetInfo.height;
            // 目标 顶部距离
            const targetElement_top = offsetInfo.top;
            // let targetElement_bottom = offsetInfo.bottom;
            // 目标 左边距离
            const targetElement_left = offsetInfo.left;
            // let targetElement_right = offsetInfo.right;
            const toolTipElement_width = popsDOMUtils.outerWidth(this.$el.$toolTip);
            const toolTipElement_height = popsDOMUtils.outerHeight(this.$el.$toolTip);
            // 目标元素的x轴的中间位置
            const targetElement_X_center_pos = targetElement_left + targetElement_width / 2 - toolTipElement_width / 2;
            // 目标元素的Y轴的中间位置
            const targetElement_Y_center_pos = targetElement_top + targetElement_height / 2 - toolTipElement_height / 2;
            let mouseX = 0;
            let mouseY = 0;
            if (event != null) {
                if (event instanceof MouseEvent || event instanceof PointerEvent) {
                    mouseX = event.pageX;
                    mouseY = event.y;
                }
                else if (event instanceof TouchEvent) {
                    const touchEvent = event.touches[0];
                    mouseX = touchEvent.pageX;
                    mouseY = touchEvent.pageY;
                }
                else {
                    if (typeof event.clientX === "number") {
                        mouseX = event.clientX;
                    }
                    if (typeof event.clientY === "number") {
                        mouseY = event.clientY;
                    }
                }
            }
            return {
                TOP: {
                    left: targetElement_X_center_pos - otherDistance,
                    top: targetElement_top - toolTipElement_height - arrowDistance,
                    arrow: "bottom",
                    motion: "fadeInTop",
                },
                RIGHT: {
                    left: targetElement_left + targetElement_width + arrowDistance,
                    top: targetElement_Y_center_pos + otherDistance,
                    arrow: "left",
                    motion: "fadeInRight",
                },
                BOTTOM: {
                    left: targetElement_X_center_pos - otherDistance,
                    top: targetElement_top + targetElement_height + arrowDistance,
                    arrow: "top",
                    motion: "fadeInBottom",
                },
                LEFT: {
                    left: targetElement_left - toolTipElement_width - arrowDistance,
                    top: targetElement_Y_center_pos + otherDistance,
                    arrow: "right",
                    motion: "fadeInLeft",
                },
                FOLLOW: {
                    left: mouseX + otherDistance,
                    top: mouseY + otherDistance,
                    arrow: "follow",
                    motion: "",
                },
            };
        }
        /**
         * 动态修改tooltip的位置
         */
        changePosition(event) {
            const positionInfo = this.calcToolTipPosition(this.$data.config.$target, this.$data.config.arrowDistance, this.$data.config.otherDistance, event);
            const positionKey = this.$data.config.position.toUpperCase();
            const position = positionInfo[positionKey];
            if (position) {
                this.$el.$toolTip.style.left = position.left + "px";
                this.$el.$toolTip.style.top = position.top + "px";
                this.$el.$toolTip.setAttribute("data-motion", position.motion);
                this.$el.$arrow.setAttribute("data-position", position.arrow);
            }
            else {
                console.error("不存在该位置", this.$data.config.position);
            }
        }
        /**
         * 事件绑定
         */
        onEvent() {
            // 监听动画结束事件
            this.onToolTipAnimationFinishEvent();
            this.onShowEvent();
            this.onCloseEvent();
            this.onToolTipMouseEnterEvent();
            this.onToolTipMouseLeaveEvent();
        }
        /**
         * 取消事件绑定
         */
        offEvent() {
            this.offToolTipAnimationFinishEvent();
            this.offShowEvent();
            this.offCloseEvent();
            this.offToolTipMouseEnterEvent();
            this.offToolTipMouseLeaveEvent();
        }
        /**
         * 添加关闭的timeId
         * @param type
         * @param timeId
         */
        addCloseTimeoutId(type, timeId) {
            if (type === "MouseEvent") {
                this.$data.timeId_close_MouseEvent.push(timeId);
            }
            else {
                this.$data.timeId_close_TouchEvent.push(timeId);
            }
        }
        /**
         * 清除延迟的timeId
         * @param type 事件类型
         */
        clearCloseTimeoutId(type, timeId) {
            const timeIdList = type === "MouseEvent" ? this.$data.timeId_close_MouseEvent : this.$data.timeId_close_TouchEvent;
            for (let index = 0; index < timeIdList.length; index++) {
                const currentTimeId = timeIdList[index];
                if (typeof timeId === "number") {
                    // 只清除一个
                    if (timeId == currentTimeId) {
                        popsUtils.clearTimeout(timeId);
                        timeIdList.splice(index, 1);
                        break;
                    }
                }
                else {
                    popsUtils.clearTimeout(currentTimeId);
                    timeIdList.splice(index, 1);
                    index--;
                }
            }
        }
        /**
         * 显示提示框
         */
        show(...args) {
            const event = args[0];
            const eventType = event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
            this.clearCloseTimeoutId(eventType);
            if (typeof this.$data.config.showBeforeCallBack === "function") {
                const result = this.$data.config.showBeforeCallBack(this.$el.$toolTip);
                if (typeof result === "boolean" && !result) {
                    return;
                }
            }
            if (!popsUtils.contains(this.$el.$shadowRoot, this.$el.$toolTip)) {
                // 不在容器中，添加
                this.init();
                popsDOMUtils.append(this.$el.$shadowRoot, this.$el.$toolTip);
            }
            if (!popsUtils.contains(this.$el.$shadowContainer)) {
                // 页面不存在Shadow，添加
                if (typeof this.$data.config.beforeAppendToPageCallBack === "function") {
                    this.$data.config.beforeAppendToPageCallBack(this.$el.$shadowRoot, this.$el.$shadowContainer);
                }
                popsDOMUtils.append(document.body, this.$el.$shadowContainer);
            }
            // 更新内容
            this.changeContent();
            // 更新tip的位置
            this.changePosition(event);
            if (typeof this.$data.config.showAfterCallBack === "function") {
                this.$data.config.showAfterCallBack(this.$el.$toolTip);
            }
        }
        /**
         * 绑定 显示事件
         */
        onShowEvent() {
            popsDOMUtils.on(this.$data.config.$target, this.$data.config.onShowEventName, this.show, this.$data.config.eventOption);
        }
        /**
         * 取消绑定 显示事件
         */
        offShowEvent() {
            popsDOMUtils.off(this.$data.config.$target, this.$data.config.onShowEventName, this.show, this.$data.config.eventOption);
        }
        /**
         * 关闭提示框
         */
        close(...args) {
            const event = args[0];
            const eventType = event instanceof MouseEvent ? "MouseEvent" : "TouchEvent";
            // 只判断鼠标事件
            // 其它的如Touch事件不做处理
            if (event && event instanceof MouseEvent) {
                const $target = event.composedPath()[0];
                // 如果是目标元素的子元素/tooltip元素的子元素触发的话，那就不管
                if ($target != this.$data.config.$target && $target != this.$el.$toolTip) {
                    return;
                }
            }
            if (typeof this.$data.config.closeBeforeCallBack === "function") {
                const result = this.$data.config.closeBeforeCallBack(this.$el.$toolTip);
                if (typeof result === "boolean" && !result) {
                    return;
                }
            }
            if (this.$data.config.delayCloseTime == null ||
                (typeof this.$data.config.delayCloseTime === "number" && this.$data.config.delayCloseTime <= 0)) {
                this.$data.config.delayCloseTime = 100;
            }
            const timeId = popsUtils.setTimeout(() => {
                // 设置属性触发关闭动画
                this.clearCloseTimeoutId(eventType, timeId);
                if (this.$el.$toolTip == null) {
                    // 已清除了
                    return;
                }
                const motion = this.$el.$toolTip.getAttribute("data-motion");
                if (motion == null || motion.trim() === "") {
                    // 没有动画
                    this.toolTipAnimationFinishEvent();
                }
                else {
                    // 修改data-motion触发动画关闭
                    this.$el.$toolTip.setAttribute("data-motion", this.$el.$toolTip.getAttribute("data-motion").replace("fadeIn", "fadeOut"));
                }
            }, this.$data.config.delayCloseTime);
            this.addCloseTimeoutId(eventType, timeId);
            if (typeof this.$data.config.closeAfterCallBack === "function") {
                this.$data.config.closeAfterCallBack(this.$el.$toolTip);
            }
        }
        /**
         * 绑定 关闭事件
         */
        onCloseEvent() {
            popsDOMUtils.on(this.$data.config.$target, this.$data.config.onCloseEventName, this.close, this.$data.config.eventOption);
        }
        /**
         * 取消绑定 关闭事件
         */
        offCloseEvent() {
            popsDOMUtils.off(this.$data.config.$target, this.$data.config.onCloseEventName, this.close, this.$data.config.eventOption);
        }
        /**
         * 销毁元素
         */
        destory() {
            if (this.$el.$toolTip) {
                this.$el.$toolTip.remove();
            }
            // @ts-expect-error
            this.$el.$toolTip = null;
            // @ts-expect-error
            this.$el.$arrow = null;
            // @ts-expect-error
            this.$el.$content = null;
        }
        /**
         * 动画结束事件
         */
        toolTipAnimationFinishEvent() {
            if (!this.$el.$toolTip) {
                return;
            }
            if (this.$el.$toolTip.getAttribute("data-motion").includes("In")) {
                return;
            }
            this.destory();
        }
        /**
         * 监听tooltip的动画结束
         */
        onToolTipAnimationFinishEvent() {
            popsDOMUtils.on(this.$el.$toolTip, popsDOMUtils.getAnimationEndNameList(), this.toolTipAnimationFinishEvent);
        }
        /**
         * 取消tooltip监听动画结束
         */
        offToolTipAnimationFinishEvent() {
            popsDOMUtils.off(this.$el.$toolTip, popsDOMUtils.getAnimationEndNameList(), this.toolTipAnimationFinishEvent);
        }
        /**
         * 鼠标|触摸进入事件
         */
        toolTipMouseEnterEvent() {
            this.clearCloseTimeoutId("MouseEvent");
            this.clearCloseTimeoutId("TouchEvent");
            // 重置动画状态
            // this.$el.$toolTip.style.animationPlayState = "paused";
            // if (parseInt(getComputedStyle(toolTipElement)) > 0.5) {
            // toolTipElement.style.animationPlayState = "paused";
            // }
        }
        /**
         * 监听鼠标|触摸事件
         */
        onToolTipMouseEnterEvent() {
            this.clearCloseTimeoutId("MouseEvent");
            this.clearCloseTimeoutId("TouchEvent");
            popsDOMUtils.on(this.$el.$toolTip, "mouseenter touchstart", this.toolTipMouseEnterEvent, this.$data.config.eventOption);
        }
        /**
         * 取消监听事件 - 鼠标|触摸
         */
        offToolTipMouseEnterEvent() {
            popsDOMUtils.off(this.$el.$toolTip, "mouseenter touchstart", this.toolTipMouseEnterEvent, this.$data.config.eventOption);
        }
        /**
         * 离开事件 - 鼠标|触摸
         */
        toolTipMouseLeaveEvent(event) {
            this.close(event);
            // this.$el.$toolTip.style.animationPlayState = "running";
        }
        /**
         * 监听离开事件 - 鼠标|触摸
         */
        onToolTipMouseLeaveEvent() {
            popsDOMUtils.on(this.$el.$toolTip, "mouseleave touchend touchcancel", this.toolTipMouseLeaveEvent, this.$data.config.eventOption);
        }
        /**
         * 取消监听离开事件 - 鼠标|触摸
         */
        offToolTipMouseLeaveEvent() {
            popsDOMUtils.off(this.$el.$toolTip, "mouseleave touchend touchcancel", this.toolTipMouseLeaveEvent, this.$data.config.eventOption);
        }
    }
    const PopsTooltip = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "tooltip";
            let config = PopsTooltipDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            if (!(config.$target instanceof HTMLElement)) {
                throw new TypeError("config.target 必须是HTMLElement类型");
            }
            config = PopsHandler.handleOnly(popsType, config);
            if (config.position === "follow") {
                config.onShowEventName = config.onShowEventName.trim();
                const showEventNameSplit = config.onShowEventName.split(" ");
                ["mousemove", "touchmove"].forEach((it) => {
                    if (showEventNameSplit.includes(it))
                        return;
                    config.onShowEventName += ` ${it}`;
                });
            }
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "tooltipCSS",
                    css: PopsCSS.tooltipCSS,
                },
            ]);
            const toolTip = new ToolTip(config, guid, {
                $shadowContainer,
                $shadowRoot,
            });
            if (config.alwaysShow) {
                // 总是显示
                // 直接显示
                toolTip.show();
            }
            return {
                guid,
                config,
                $shadowContainer,
                $shadowRoot,
                toolTip,
            };
        },
    };

    /**
     * 处理组件（把组件配置转为组件元素）
     */
    const PanelHandlerComponents = () => {
        return {
            /**
             * 左侧上方的的ul容器
             */
            asideULElement: null,
            /**
             * 左侧下方的ul容器
             */
            asideBottomULElement: null,
            /**
             * 右侧主内容的顶部文字ul容器
             */
            sectionContainerHeaderULElement: null,
            /**
             * 右侧主内容的ul容器
             */
            sectionContainerULElement: null,
            /**
             * 元素
             */
            $el: {
                /** pops主元素 */
                $pops: null,
                /** 内容 */
                $content: null,
                /** section元素的包裹容器 */
                $panelRightSectionWrapper: null,
                /** 左侧容器 */
                $panelLeftAside: null,
                /** 右侧容器 */
                $panelContentSectionContainer: null,
                $panelBottomWrapper: null,
                $panelBottomContainer: null,
                $panelBottomLeftContainer: null,
                $panelBottomRightContainer: null,
            },
            $data: {
                nodeStoreConfigKey: "data-view-config",
            },
            $config: {},
            /**
             * 初始化
             * @param data
             */
            init(data) {
                const PopsType = "panel";
                this.$el = {
                    ...data.$el,
                };
                this.$config = data.config;
                this.asideULElement = this.$el.$panelLeftAside.querySelector(`ul.pops-${PopsType}-aside-top-container`);
                this.asideBottomULElement = this.$el.$panelLeftAside.querySelector(`ul.pops-${PopsType}-aside-bottom-container`);
                this.sectionContainerHeaderULElement = this.$el.$panelContentSectionContainer.querySelector(`ul.pops-${PopsType}-container-header-ul`);
                this.sectionContainerULElement = this.$el.$panelContentSectionContainer.querySelector(`ul.pops-${PopsType}-container-main-ul`);
                /**
                 * 默认点击的左侧容器项
                 */
                let $defaultAsideItem = null;
                /** 是否滚动到默认位置（第一个项） */
                let isScrollToDefaultView = false;
                // 初始化内容配置
                data.config.content.forEach((asideItemConfig) => {
                    const $asideLiElement = this.createAsideItem(asideItemConfig);
                    this.onAsideItemClick($asideLiElement, asideItemConfig);
                    // 是否处于底部
                    const isBottom = typeof asideItemConfig.isBottom === "function" ? asideItemConfig.isBottom() : asideItemConfig.isBottom;
                    if (isBottom) {
                        this.asideBottomULElement.appendChild($asideLiElement);
                    }
                    else {
                        this.asideULElement.appendChild($asideLiElement);
                    }
                    if ($defaultAsideItem == null) {
                        let flag = false;
                        if (typeof asideItemConfig.isDefault === "function") {
                            flag = Boolean(asideItemConfig.isDefault());
                        }
                        else {
                            flag = Boolean(asideItemConfig.isDefault);
                        }
                        if (flag) {
                            $defaultAsideItem = $asideLiElement;
                            isScrollToDefaultView = Boolean(asideItemConfig.scrollToDefaultView);
                        }
                    }
                    if (typeof asideItemConfig.afterRender === "function") {
                        // 执行渲染完毕的回调
                        asideItemConfig.afterRender({
                            asideConfig: asideItemConfig,
                            $asideLiElement: $asideLiElement,
                        });
                    }
                });
                // 初始化底部内容配置
                (data.config?.bottomContentConfig || []).forEach((bottomItemConfig) => {
                    const $bottomLiElement = this.createBottomItem(bottomItemConfig);
                    this.onBottomItemClick($bottomLiElement, bottomItemConfig);
                    if (bottomItemConfig.position === "left" || bottomItemConfig.position == null) {
                        this.$el.$panelBottomLeftContainer.appendChild($bottomLiElement);
                    }
                    else if (bottomItemConfig.position === "right") {
                        this.$el.$panelBottomRightContainer.appendChild($bottomLiElement);
                    }
                    else {
                        throw new Error("pops.panel：bottomContentConfig.position参数错误");
                    }
                    if (typeof bottomItemConfig.afterRender === "function") {
                        // 执行渲染完毕的回调
                        bottomItemConfig.afterRender({
                            $bottomWrapper: this.$el.$panelBottomWrapper,
                            $bottomContainer: this.$el.$panelBottomContainer,
                            $bottomLeftContainer: this.$el.$panelBottomLeftContainer,
                            $bottomRightContainer: this.$el.$panelBottomRightContainer,
                        });
                    }
                });
                // 点击左侧列表
                if ($defaultAsideItem == null && this.asideULElement.children.length) {
                    // 默认第一个
                    $defaultAsideItem = this.asideULElement.children[0];
                }
                if ($defaultAsideItem) {
                    // 点击选择的那一项
                    $defaultAsideItem.click();
                    if (isScrollToDefaultView) {
                        $defaultAsideItem?.scrollIntoView();
                    }
                }
                else {
                    console.error("pops.panel：左侧容器没有项");
                }
            },
            /**
             * 清空container容器的元素
             */
            clearContainer() {
                Reflect.deleteProperty(this.$el.$panelContentSectionContainer, this.$data.nodeStoreConfigKey);
                PopsSafeUtils.setSafeHTML(this.sectionContainerHeaderULElement, "");
                PopsSafeUtils.setSafeHTML(this.sectionContainerULElement, "");
                this.clearDeepMenuContainer();
            },
            /**
             * 清空deepMenu的容器元素
             */
            clearDeepMenuContainer() {
                this.$el.$panelRightSectionWrapper
                    ?.querySelectorAll("section.pops-panel-deepMenu-container")
                    .forEach(($el) => $el.remove());
            },
            /**
             * 清空左侧容器已访问记录
             */
            clearAsideItemIsVisited() {
                this.$el.$panelLeftAside.querySelectorAll(".pops-is-visited").forEach(($el) => {
                    popsDOMUtils.removeClassName($el, "pops-is-visited");
                });
            },
            /**
             * 设置左侧容器已访问记录
             * @param $el
             */
            setAsideItemIsVisited($el) {
                popsDOMUtils.addClassName($el, "pops-is-visited");
            },
            /**
             * 为元素添加自定义属性
             * @param $el 元素
             * @param attributes 属性
             */
            setElementAttributes($el, attributes) {
                if (attributes == null) {
                    return;
                }
                if (Array.isArray(attributes)) {
                    attributes.forEach((attrObject) => {
                        this.setElementAttributes($el, attrObject);
                    });
                }
                else {
                    Object.keys(attributes).forEach((attributeName) => {
                        $el.setAttribute(attributeName, attributes[attributeName]);
                    });
                }
            },
            /**
             * 为元素设置(自定义)属性
             * @param $el 元素
             * @param props 属性
             */
            setElementProps($el, props) {
                if (props == null)
                    return;
                if (typeof props !== "object")
                    return;
                const propsKeys = Object.keys(props);
                propsKeys.forEach((propName) => {
                    const value = props[propName];
                    if (propName === "innerHTML") {
                        PopsSafeUtils.setSafeHTML($el, value);
                        return;
                    }
                    Reflect.set($el, propName, value);
                });
            },
            /**
             * 为元素设置classname
             * @param $el 元素
             * @param className
             */
            setElementClassName($el, className) {
                popsDOMUtils.addClassName($el, className);
            },
            /**
             * 创建底部项元素<li>
             * @param bottomItemConfig 配置
             */
            createBottomItem(bottomItemConfig) {
                // 显示的文本
                const text = typeof bottomItemConfig.text === "function" ? bottomItemConfig.text() : bottomItemConfig.text;
                const className = Array.isArray(bottomItemConfig.className)
                    ? bottomItemConfig.className.join(" ")
                    : bottomItemConfig.className || "";
                const $li = popsDOMUtils.createElement("li", {
                    className: ["pops-panel-bottom-item", "pops-user-select-none", className].join(" "),
                    innerHTML: text,
                });
                // 处理attr
                this.setElementAttributes($li, bottomItemConfig.attributes);
                // 处理props
                this.setElementProps($li, bottomItemConfig.props);
                /** 禁用左侧项的hover的CSS样式的类名 */
                const disablHoverCSSClassName = "pops-panel-disable-bottom-item-hover-css";
                /** 是否禁用左侧项的hover的CSS样式 */
                const isDisableHoverCSS = typeof bottomItemConfig.disableHoverCSS === "function"
                    ? bottomItemConfig.disableHoverCSS()
                    : bottomItemConfig.disableHoverCSS;
                if (isDisableHoverCSS) {
                    $li.classList.add(disablHoverCSSClassName);
                }
                else {
                    $li.classList.remove(disablHoverCSSClassName);
                }
                return $li;
            },
            /**
             * 为底部元素添加点击事件
             * @param $bottomItem 底部<li>元素
             * @param bottomItemConfig 配置
             */
            onBottomItemClick($bottomItem, bottomItemConfig) {
                popsDOMUtils.on($bottomItem, "click", async (event) => {
                    if (typeof bottomItemConfig.clickCallback === "function") {
                        // 执行回调
                        const asideClickCallbackResult = await bottomItemConfig.clickCallback(event);
                        if (typeof asideClickCallbackResult === "boolean" && !asideClickCallbackResult) {
                            return;
                        }
                    }
                });
            },
            /**
             * 创建左侧容器元素<li>
             * @param  asideConfig 配置
             */
            createAsideItem(asideConfig) {
                // 显示的文本
                const text = typeof asideConfig.title === "function" ? asideConfig.title() : asideConfig.title;
                const $li = popsDOMUtils.createElement("li", {
                    id: asideConfig.id,
                    innerHTML: text,
                });
                Reflect.set($li, "__forms__", asideConfig.views);
                // 处理className
                this.setElementClassName($li, "pops-panel-aside-item");
                this.setElementClassName($li, asideConfig.className);
                // 处理attr
                this.setElementAttributes($li, asideConfig.attributes);
                // 处理props
                this.setElementProps($li, asideConfig.props);
                /** 禁用左侧项的hover的CSS样式的类名 */
                const disablHoverCSSClassName = "pops-panel-disabled-aside-hover-css";
                /** 是否禁用左侧项的hover的CSS样式 */
                const isDisableItemHoverCSS = typeof asideConfig.disableAsideItemHoverCSS === "function"
                    ? asideConfig.disableAsideItemHoverCSS()
                    : asideConfig.disableAsideItemHoverCSS;
                if (isDisableItemHoverCSS) {
                    $li.classList.add(disablHoverCSSClassName);
                }
                else {
                    $li.classList.remove(disablHoverCSSClassName);
                }
                return $li;
            },
            /**
             * type ==> switch
             * 创建中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_switch(viewConfig) {
                const $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-switch">
					<input class="pops-panel-switch__input" type="checkbox">
					<span class="pops-panel-switch__core">
						<div class="pops-panel-switch__action">
						</div>
					</span>
				</div>`);
                const PopsPanelSwitch = {
                    [Symbol.toStringTag]: "PopsPanelSwitch",
                    $data: {
                        value: Boolean(viewConfig.getValue()),
                    },
                    $ele: {
                        itemLeftTextContainer: $li.querySelector(".pops-panel-item-left-text"),
                        switch: $li.querySelector(".pops-panel-switch"),
                        input: $li.querySelector(".pops-panel-switch__input"),
                        core: $li.querySelector(".pops-panel-switch__core"),
                    },
                    init() {
                        this.setStatus(this.$data.value);
                        const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                        if (disabled) {
                            this.disable();
                        }
                        this.onClick();
                    },
                    /**
                     * 设置点击事件
                     */
                    onClick() {
                        const that = this;
                        popsDOMUtils.on(this.$ele.core, "click", function (event) {
                            if (that.$ele.input.disabled || that.$ele.switch.hasAttribute("data-disabled")) {
                                return;
                            }
                            that.$data.value = that.getStatus();
                            that.setStatus(that.$data.value);
                            if (typeof viewConfig.callback === "function") {
                                viewConfig.callback(event, that.$data.value);
                            }
                        });
                    },
                    /**
                     * 设置状态
                     */
                    setStatus(isChecked = false) {
                        isChecked = Boolean(isChecked);
                        this.$ele.input.checked = isChecked;
                        if (isChecked) {
                            popsDOMUtils.addClassName(this.$ele.switch, "pops-panel-switch-is-checked");
                        }
                        else {
                            popsDOMUtils.removeClassName(this.$ele.switch, "pops-panel-switch-is-checked");
                        }
                    },
                    /**
                     * 根据className来获取逆反值
                     */
                    getStatus() {
                        let checkedValue = false;
                        if (!popsDOMUtils.containsClassName(this.$ele.switch, "pops-panel-switch-is-checked")) {
                            checkedValue = true;
                        }
                        return checkedValue;
                    },
                    /**
                     * 禁用复选框
                     */
                    disable() {
                        this.$ele.input.disabled = true;
                        this.$ele.switch.setAttribute("data-disabled", "true");
                        popsDOMUtils.addClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                    },
                    /**
                     * 取消禁用复选框
                     */
                    notDisable() {
                        this.$ele.input.disabled = false;
                        this.$ele.switch.removeAttribute("data-disabled");
                        popsDOMUtils.removeClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                    },
                };
                PopsPanelSwitch.init();
                Reflect.set($li, "data-switch", PopsPanelSwitch);
                return {
                    $el: $li,
                    handler: PopsPanelSwitch,
                };
            },
            /**
             * type ==> slider
             * 获取中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_slider(viewConfig) {
                const $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text" style="flex: 1;">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-slider pops-slider-width">
					<div class="pops-slider__runway">
						<div class="pops-slider__bar" style="width: 0%; left: 0%"></div>
						<div class="pops-slider__button-wrapper" style="left: 0%">
							<div class="pops-slider__button"></div>
						</div>
					</div>
				</div>`);
                const PopsPanelSlider = {
                    [Symbol.toStringTag]: "PopsPanelSlider",
                    /**
                     * 值
                     */
                    value: viewConfig.getValue(),
                    /**
                     * 最小值
                     */
                    min: viewConfig.min,
                    /**
                     * 最大值
                     */
                    max: viewConfig.max,
                    /**
                     * 间隔
                     */
                    step: viewConfig.step || 1,
                    $data: {
                        /**
                         * 是否正在移动
                         */
                        isMove: false,
                        /**
                         * 是否已初始化已拖拽的距离
                         */
                        isInitDragPosition: false,
                        /**
                         * 是否正在检测是否停止拖拽
                         */
                        isCheckingStopDragMove: false,
                        /**
                         * 总宽度（px）
                         */
                        totalWidth: 0,
                        /**
                         * 每一块的间隔（px）
                         */
                        stepPx: 0,
                        /**
                         * 已拖拽的距离（px）
                         */
                        dragWidth: 0,
                        /**
                         * 已拖拽的百分比
                         */
                        dragPercent: 0,
                        /**
                         * 每一次块的信息
                         * 例如：当最小值是2，最大值是10，step为2
                         * 那么生成[2,4,6,8,10] 共计5个
                         * 又获取到当前滑块总长度是200px
                         * 那么生成映射
                         * 2 => 0px~40px
                         * 4 => 40px~80px
                         * 6 => 80px~120px
                         * 8 => 120px~160px
                         * 10 => 160px~200px
                         */
                        stepBlockMap: new Map(),
                        tooltip: null,
                    },
                    $ele: {
                        itemLeftTextContainer: $li.querySelector(".pops-panel-item-left-text"),
                        slider: $li.querySelector(".pops-slider"),
                        runAway: $li.querySelector(".pops-slider__runway"),
                        bar: $li.querySelector(".pops-slider__bar"),
                        buttonWrapper: $li.querySelector(".pops-slider__button-wrapper"),
                        button: $li.querySelector(".pops-slider__button"),
                    },
                    $interval: {
                        isCheck: false,
                    },
                    $tooltip: null,
                    init() {
                        this.initEleData();
                        this.setToolTipEvent();
                        this.setPanEvent();
                        this.onRunAwayClick();
                        this.intervalInit();
                        if (this.isDisabledDragWithConfig()) {
                            this.disableDrag();
                        }
                    },
                    /**
                     * 10s内循环获取slider的宽度等信息
                     * 获取到了就可以初始化left的值
                     * @param [checkStepTime=200] 每次检测的间隔时间
                     * @param [maxTime=10000] 最大的检测时间
                     */
                    intervalInit(checkStepTime = 200, maxTime = 10000) {
                        if (this.$interval.isCheck) {
                            return;
                        }
                        this.$interval.isCheck = true;
                        let isSuccess = false;
                        const oldTotalWidth = this.$data.totalWidth;
                        let timer = void 0;
                        const interval = setInterval(() => {
                            if (isSuccess) {
                                this.$interval.isCheck = false;
                                clearTimeout(timer);
                                clearInterval(interval);
                            }
                            else {
                                this.initTotalWidth();
                                if (this.$data.totalWidth !== 0) {
                                    isSuccess = true;
                                    if (this.$data.totalWidth !== oldTotalWidth) {
                                        // slider的总宽度改变了
                                        if (PopsMathFloatUtils.isFloat(this.step)) {
                                            this.initFloatStepMap();
                                        }
                                        else {
                                            this.initStepMap();
                                        }
                                        this.initSliderPosition();
                                    }
                                }
                            }
                        }, checkStepTime);
                        // 最长检测时间是10s
                        timer = setTimeout(() => {
                            clearInterval(interval);
                        }, maxTime);
                    },
                    /**
                     * 把数据添加到元素上
                     */
                    initEleData() {
                        this.$ele.slider.setAttribute("data-min", this.min.toString());
                        this.$ele.slider.setAttribute("data-max", this.max.toString());
                        this.$ele.slider.setAttribute("data-value", this.value.toString());
                        this.$ele.slider.setAttribute("data-step", this.step.toString());
                        Reflect.set(this.$ele.slider, "data-min", this.min);
                        Reflect.set(this.$ele.slider, "data-max", this.max);
                        Reflect.set(this.$ele.slider, "data-value", this.value);
                        Reflect.set(this.$ele.slider, "data-step", this.step);
                    },
                    /**
                     * 初始化滑块的总长度的数据(px)
                     */
                    initTotalWidth() {
                        this.$data.totalWidth = popsDOMUtils.width(this.$ele.runAway);
                    },
                    /**
                     * 初始化每一个块的具体数据信息
                     */
                    initStepMap() {
                        let index = 0;
                        // 计算出份数
                        const blockNums = (this.max - this.min) / this.step;
                        // 计算出每一份占据的px
                        this.$data.stepPx = this.$data.totalWidth / blockNums;
                        let widthPx = 0;
                        for (let stepValue = this.min; stepValue <= this.max; stepValue += this.step) {
                            const value = this.formatValue(stepValue);
                            let info;
                            if (value === this.min) {
                                // 起始
                                info = {
                                    value: value,
                                    px: 0,
                                    pxLeft: 0,
                                    pxRight: this.$data.stepPx / 2,
                                    percent: 0,
                                };
                            }
                            else {
                                info = {
                                    value: value,
                                    px: widthPx,
                                    pxLeft: widthPx - this.$data.stepPx / 2,
                                    pxRight: widthPx + this.$data.stepPx / 2,
                                    percent: widthPx / this.$data.totalWidth,
                                };
                                //if (value === this.max) {
                                //  info["pxLeft"] = this.$data.stepBlockMap.get(
                                //    index - 1
                                //  ).pxRight;
                                //  info["pxRight"] = this.$data.totalWidth;
                                //}
                            }
                            this.$data.stepBlockMap.set(index, info);
                            index++;
                            widthPx += this.$data.stepPx;
                        }
                    },
                    /**
                     * 初始化每一个块的具体数据信息（浮点）
                     */
                    initFloatStepMap() {
                        let index = 0;
                        // 计算出份数
                        const blockNums = (this.max - this.min) / this.step;
                        // 计算出每一份占据的px
                        this.$data.stepPx = this.$data.totalWidth / blockNums;
                        let widthPx = 0;
                        for (let stepValue = this.min; stepValue <= this.max; stepValue = PopsMathFloatUtils.add(stepValue, this.step)) {
                            const value = this.formatValue(stepValue);
                            let info;
                            if (value === this.min) {
                                // 起始
                                info = {
                                    value: value,
                                    px: 0,
                                    pxLeft: 0,
                                    pxRight: this.$data.stepPx / 2,
                                    percent: 0,
                                };
                            }
                            else {
                                info = {
                                    value: value,
                                    px: widthPx,
                                    pxLeft: widthPx - this.$data.stepPx / 2,
                                    pxRight: widthPx + this.$data.stepPx / 2,
                                    percent: widthPx / this.$data.totalWidth,
                                };
                                //if (value === this.max) {
                                //  info["pxLeft"] = this.$data.stepBlockMap.get(
                                //    index - 1
                                //  ).pxRight;
                                //  info["pxRight"] = this.$data.totalWidth;
                                //}
                            }
                            this.$data.stepBlockMap.set(index, info);
                            index++;
                            widthPx += this.$data.stepPx;
                        }
                    },
                    /**
                     * 初始化slider的默认起始left的百分比值
                     */
                    initSliderPosition() {
                        // 设置起始默认style的left值
                        let percent = 0;
                        for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
                            // 判断值是否和区域内的值相等
                            if (stepBlockInfo.value == this.value) {
                                percent = stepBlockInfo.percent;
                                this.$data.dragWidth = stepBlockInfo.px;
                                break;
                            }
                        }
                        percent = this.formatValue(percent * 100);
                        this.setSliderPosition(percent);
                    },
                    /**
                     * 判断数字是否是浮点数
                     * @param num
                     */
                    isFloat(num) {
                        return Number(num) === num && num % 1 !== 0;
                    },
                    /**
                     * 值改变的回调
                     * @param event
                     * @param value
                     */
                    valueChangeCallBack(event, value) {
                        if (typeof viewConfig.callback === "function") {
                            viewConfig.callback(event, value);
                        }
                    },
                    /**
                     * 根据拖拽距离获取滑块应该在的区间和值
                     * @param dragX
                     */
                    getDragInfo(dragX) {
                        let result = this.$data.stepBlockMap.get(0);
                        for (const [, stepBlockInfo] of this.$data.stepBlockMap.entries()) {
                            if (stepBlockInfo.pxLeft <= dragX && dragX < stepBlockInfo.pxRight) {
                                result = stepBlockInfo;
                                break;
                            }
                        }
                        return result;
                    },
                    /**
                     * 获取滑块的当前脱拖拽占据的百分比
                     * @param dragWidth
                     */
                    getSliderPositonPercent(dragWidth) {
                        return dragWidth / this.$data.totalWidth;
                    },
                    /**
                     * 根据step格式化value
                     * @param num
                     */
                    formatValue(num) {
                        if (PopsMathFloatUtils.isFloat(this.step)) {
                            num = parseFloat(num.toFixed(2));
                        }
                        else {
                            num = parseInt(num.toString());
                        }
                        return num;
                    },
                    /**
                     * 设置滑块的位置偏移（left）
                     * @param percent 百分比
                     */
                    setSliderPosition(percent) {
                        if (parseInt(percent.toString()) === 1) {
                            percent = 1;
                        }
                        if (percent > 1) {
                            percent = percent / 100;
                        }
                        // 滑块按钮的偏移
                        this.$ele.buttonWrapper.style.left = `${percent * 100}%`;
                        // 滑块进度的宽度
                        this.$ele.bar.style.width = `${percent * 100}%`;
                    },
                    /**
                     * 禁止拖拽
                     */
                    disableDrag() {
                        popsDOMUtils.addClassName(this.$ele.runAway, "pops-slider-is-disabled");
                        popsDOMUtils.addClassName(this.$ele.runAway, PopsCommonCSSClassName.textIsDisabled);
                    },
                    /**
                     * 允许拖拽
                     */
                    allowDrag() {
                        popsDOMUtils.removeClassName(this.$ele.runAway, "pops-slider-is-disabled");
                        popsDOMUtils.removeClassName(this.$ele.runAway, PopsCommonCSSClassName.textIsDisabled);
                    },
                    /**
                     * 判断当前滑块是否被禁用
                     */
                    isDisabledDrag() {
                        return popsDOMUtils.containsClassName(this.$ele.runAway, "pops-slider-is-disabled");
                    },
                    /**
                     * 判断当前滑块是否被禁用（配置中判断）
                     */
                    isDisabledDragWithConfig() {
                        const isDisabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                        if (typeof isDisabled === "boolean") {
                            return isDisabled;
                        }
                        else {
                            return false;
                        }
                    },
                    /**
                     * 设置进度条点击定位的事件
                     */
                    onRunAwayClick() {
                        popsDOMUtils.on(this.$ele.runAway, "click", (event) => {
                            if (event.target !== this.$ele.runAway && event.target !== this.$ele.bar) {
                                return;
                            }
                            const clickX = parseFloat(event.offsetX.toString());
                            const dragStartResult = this.dragStartCallBack();
                            if (!dragStartResult) {
                                return;
                            }
                            this.dragMoveCallBack(event, clickX, this.value);
                            this.dragEndCallBack(clickX);
                        }, {
                            capture: false,
                        });
                    },
                    /**
                     * 拖拽开始的回调，如果返回false，禁止拖拽
                     */
                    dragStartCallBack() {
                        if (this.isDisabledDragWithConfig()) {
                            // 禁止
                            this.disableDrag();
                            return false;
                        }
                        if (!this.$data.isMove) {
                            // 非移动中
                            if (this.isDisabledDrag()) {
                                // 允许
                                this.allowDrag();
                            }
                            this.$data.isMove = true;
                        }
                        return true;
                    },
                    /**
                     * 拖拽中的回调
                     * @param event 事件
                     * @param dragX 当前拖拽的距离
                     * @param oldValue 旧的值
                     */
                    dragMoveCallBack(event, dragX, oldValue) {
                        let dragPercent = 0;
                        if (dragX <= 0) {
                            dragPercent = 0;
                            this.value = this.min;
                        }
                        else if (dragX >= this.$data.totalWidth) {
                            dragPercent = 1;
                            this.value = this.max;
                        }
                        else {
                            const dragInfo = this.getDragInfo(dragX);
                            dragPercent = dragInfo.percent;
                            this.value = this.formatValue(dragInfo.value);
                        }
                        this.$data.dragPercent = dragPercent;
                        this.setSliderPosition(this.$data.dragPercent);
                        this.showToolTip();
                        if (oldValue !== this.value) {
                            this.valueChangeCallBack(event, this.value);
                        }
                    },
                    /**
                     * 拖拽结束的回调
                     */
                    dragEndCallBack(dragX) {
                        this.$data.isMove = false;
                        if (dragX <= 0) {
                            this.$data.dragWidth = 0;
                        }
                        else if (dragX >= this.$data.totalWidth) {
                            this.$data.dragWidth = this.$data.totalWidth;
                        }
                        else {
                            this.$data.dragWidth = dragX;
                        }
                        this.closeToolTip();
                    },
                    /**
                     * 设置点击拖拽事件
                     */
                    setPanEvent() {
                        const AnyTouch = popsUtils.AnyTouch();
                        this.$tooltip = new AnyTouch(this.$ele.button, {
                            preventDefault() {
                                return false;
                            },
                        });
                        /**
                         * 当前的拖拽的距离px
                         */
                        let currentDragX = 0;
                        // 监听拖拽
                        this.$tooltip.on("at:move", (event) => {
                            if (!this.dragStartCallBack()) {
                                return;
                            }
                            const oldValue = this.value;
                            const runAwayRect = this.$ele.runAway.getBoundingClientRect();
                            let displacementX = event.x - (runAwayRect.left + globalThis.screenX);
                            if (displacementX <= 0) {
                                displacementX = 0;
                            }
                            else if (displacementX >= runAwayRect.width) {
                                displacementX = runAwayRect.width;
                            }
                            currentDragX = displacementX;
                            // 拖拽移动
                            this.dragMoveCallBack(event, currentDragX, oldValue);
                        });
                        // 监听触点离开，处理某些情况下，拖拽松开，但是未触发pan事件，可以通过设置这个来关闭tooltip
                        this.$tooltip.on("at:end", () => {
                            this.dragEndCallBack(currentDragX);
                        });
                    },
                    /**
                     * 显示悬浮的
                     */
                    showToolTip() {
                        this.$data.tooltip.toolTip.show();
                    },
                    /**
                     * 关闭悬浮的
                     */
                    closeToolTip() {
                        this.$data.tooltip.toolTip.close();
                    },
                    /**
                     * 检测在1000ms内，是否停止了拖拽
                     */
                    checkStopDragMove() {
                        if (this.$data.isCheckingStopDragMove) {
                            return;
                        }
                        this.$data.isCheckingStopDragMove = true;
                        const interval = setInterval(() => {
                            if (!this.$data.isMove) {
                                this.$data.isCheckingStopDragMove = false;
                                this.closeToolTip();
                                clearInterval(interval);
                            }
                        }, 200);
                        setTimeout(() => {
                            this.$data.isCheckingStopDragMove = false;
                            clearInterval(interval);
                        }, 2000);
                    },
                    /**
                     * 设置拖拽按钮的悬浮事件
                     */
                    setToolTipEvent() {
                        /**
                         * 获取提示的内容
                         */
                        function getToolTipContent() {
                            if (typeof viewConfig.getToolTipContent === "function") {
                                return viewConfig.getToolTipContent(PopsPanelSlider.value);
                            }
                            else {
                                return PopsPanelSlider.value.toString();
                            }
                        }
                        const tooltip = PopsTooltip.init({
                            $target: this.$ele.button,
                            content: getToolTipContent,
                            zIndex: () => {
                                return PopsInstanceUtils.getPopsMaxZIndex().zIndex;
                            },
                            isFixed: true,
                            className: "github-tooltip",
                            only: false,
                            eventOption: {
                                capture: true,
                                passive: true,
                            },
                            showBeforeCallBack: () => {
                                const isShowHoverTip = typeof viewConfig.isShowHoverTip === "function"
                                    ? viewConfig.isShowHoverTip()
                                    : typeof viewConfig.isShowHoverTip === "boolean"
                                        ? viewConfig.isShowHoverTip
                                        : true;
                                if (!isShowHoverTip) {
                                    return false;
                                }
                                this.intervalInit();
                            },
                            showAfterCallBack: () => {
                                tooltip.toolTip.changeContent(getToolTipContent());
                            },
                            closeBeforeCallBack: () => {
                                if (this.$data.isMove) {
                                    this.checkStopDragMove();
                                    return false;
                                }
                            },
                            alwaysShow: false,
                            position: "top",
                            arrowDistance: 10,
                        });
                        this.$data.tooltip = tooltip;
                    },
                };
                PopsPanelSlider.init();
                Reflect.set($li, "data-slider", PopsPanelSlider);
                return {
                    $el: $li,
                    handler: PopsPanelSlider,
                };
            },
            /**
             * type ==> input
             * 获取中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_input(viewConfig) {
                const $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                const defaultInputType = "text";
                const inputType = viewConfig.inputType || defaultInputType;
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-input">
          <div class="pops-panel-input_inner">
					  <input type="${inputType}" placeholder="${viewConfig.placeholder ?? ""}">
          </div>
				</div>
				`);
                const PopsPanelInput = {
                    [Symbol.toStringTag]: "PopsPanelInput",
                    $el: {
                        itemLeftTextContainer: $li.querySelector(".pops-panel-item-left-text"),
                        panelInput: $li.querySelector(".pops-panel-input"),
                        panelInputInner: $li.querySelector(".pops-panel-input_inner"),
                        input: $li.querySelector("input"),
                        /** span.pops-panel-input__suffix */
                        suffix: popsDOMUtils.createElement("span"),
                        /** span.pops-panel-input__suffix-inner */
                        suffixInner: null,
                        /** i.pops-panel-icon */
                        icon: null,
                    },
                    $data: {
                        value: viewConfig.getValue(),
                        /**
                         * inputType 为 password时使用该值
                         *
                         * 当前内容的可见性
                         */
                        isVisible: false,
                    },
                    init() {
                        this.initEle();
                        this.setInputValue(this.$data.value);
                        // 如果是密码框，放进图标
                        if (viewConfig.inputType === "password") {
                            // 显示密码
                            this.setCircleIcon(PopsIcon.getIcon("view"));
                            this.onIconClick();
                        }
                        else {
                            // 先判断预设值是否为空，不为空添加清空图标按钮
                            // 且为普通的输入框
                            if (this.$el.input.value != "" && this.isTextInputType()) {
                                // 清除内容的图标
                                this.setCircleIcon(PopsIcon.getIcon("circleClose"));
                                this.onIconClick();
                            }
                            else {
                                // 隐藏图标
                                this.hideCircleIconWrapper();
                            }
                        }
                        this.onValueChange();
                        // 是否禁用复选框
                        const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                        if (disabled) {
                            this.disable();
                        }
                        if (typeof viewConfig.handlerCallBack === "function") {
                            viewConfig.handlerCallBack($li, this.$el.input);
                        }
                    },
                    /**
                     * 初始化$ele的配置
                     */
                    initEle() {
                        this.$el.input.parentElement.insertBefore(this.$el.suffix, this.$el.input.nextSibling);
                        popsDOMUtils.addClassName(this.$el.suffix, "pops-panel-input__suffix");
                        PopsSafeUtils.setSafeHTML(this.$el.suffix, 
                        /*html*/ `
						<span class="pops-panel-input__suffix-inner">
							<i class="pops-panel-icon"></i>
						</span>
					`);
                        this.$el.suffixInner = this.$el.suffix.querySelector(".pops-panel-input__suffix-inner");
                        this.$el.icon = this.$el.suffix.querySelector(".pops-panel-icon");
                        popsDOMUtils.addClassName(this.$el.panelInput, PopsCommonCSSClassName.userSelectNone);
                    },
                    /**
                     * 校验输入框类型是否是字符串输入框类型
                     */
                    isTextInputType() {
                        const typeList = ["text", "search", "email", "tel", "url"];
                        return typeList.includes(viewConfig.inputType || defaultInputType);
                    },
                    /**
                     * 是否是时间输入框类型
                     */
                    isDateInputType() {
                        const typeList = ["date", "datetime-local", "month", "time", "week"];
                        return typeList.includes(viewConfig.inputType || defaultInputType);
                    },
                    /**
                     * 是否是数字输入框类型
                     */
                    isNumberInputType() {
                        const typeList = ["number"];
                        return typeList.includes(viewConfig.inputType || defaultInputType);
                    },
                    /**
                     * 禁用
                     */
                    disable() {
                        this.$el.input.disabled = true;
                        popsDOMUtils.addClassName(this.$el.panelInput, "pops-input-disabled");
                        popsDOMUtils.addClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                    },
                    /**
                     * 取消禁用
                     */
                    notDisable() {
                        this.$el.input.disabled = false;
                        popsDOMUtils.removeClassName(this.$el.panelInput, "pops-input-disabled");
                        popsDOMUtils.removeClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                    },
                    /**
                     * 判断是否已被禁用
                     */
                    isDisabled() {
                        return this.$el.input.disabled;
                    },
                    /**
                     * 设置输入框内容
                     * @param value 值
                     */
                    setInputValue(value = "") {
                        if (typeof value === "number" && this.isNumberInputType()) {
                            this.$el.input.valueAsNumber = value;
                        }
                        else if (typeof value === "object" && value instanceof Date && this.isDateInputType()) {
                            this.$el.input.valueAsDate = value;
                        }
                        else {
                            this.$el.input.value = value.toString();
                        }
                    },
                    /**
                     * 设置input元素的type
                     * @param typeValue type值
                     */
                    setInputType(typeValue = "text") {
                        this.$el.input.setAttribute("type", typeValue);
                    },
                    /**
                     * 删除图标按钮
                     */
                    removeCircleIcon() {
                        PopsSafeUtils.setSafeHTML(this.$el.icon, "");
                    },
                    /**
                     * 添加清空图标按钮
                     * @param svgHTML svg图标，默认为清空的图标
                     */
                    setCircleIcon(svgHTML = PopsIcon.getIcon("circleClose")) {
                        PopsSafeUtils.setSafeHTML(this.$el.icon, svgHTML);
                    },
                    /**
                     * 隐藏图标容器
                     */
                    hideCircleIconWrapper() {
                        popsDOMUtils.cssHide(this.$el.suffix, true);
                    },
                    /**
                     * 显示图标容器
                     */
                    showCircleIconWrapper() {
                        popsDOMUtils.cssShow(this.$el.suffix);
                    },
                    /**
                     * 添加图标按钮的点击事件
                     */
                    onIconClick() {
                        popsDOMUtils.on(this.$el.icon, "click", (evt) => {
                            popsDOMUtils.preventEvent(evt);
                            if (this.isDisabled()) {
                                return;
                            }
                            // 删除图标
                            this.removeCircleIcon();
                            if (inputType === "password") {
                                // 配置类型为密码输入框
                                if (this.$data.isVisible) {
                                    // 当前可见 => 点击改变为隐藏
                                    this.$data.isVisible = false;
                                    // 显示输入框内容，且更换图标为隐藏图标
                                    this.setInputType("text");
                                    this.setCircleIcon(PopsIcon.getIcon("hide"));
                                }
                                else {
                                    // 当前不可见 => 点击改变为显示
                                    this.$data.isVisible = true;
                                    // 隐藏输入框内容，且更换图标为显示图标
                                    this.setInputType("password");
                                    this.setCircleIcon(PopsIcon.getIcon("view"));
                                }
                            }
                            else {
                                // 普通输入框
                                // 清空内容
                                this.setInputValue("");
                                // 获取焦点
                                this.$el.input.focus();
                                // 触发内容改变事件
                                this.$el.input.dispatchEvent(new Event("input"));
                            }
                        });
                    },
                    /**
                     * 监听输入框内容改变
                     */
                    onValueChange() {
                        popsDOMUtils.on(this.$el.input, ["input", "propertychange"], (event) => {
                            this.$data.value = this.$el.input.value;
                            if (inputType !== "password") {
                                // 不是密码框
                                if (this.$el.input.value !== "" && this.$el.icon.innerHTML === "" && this.isTextInputType()) {
                                    // 不为空，显示清空图标
                                    this.setCircleIcon(PopsIcon.getIcon("circleClose"));
                                    this.onIconClick();
                                    this.showCircleIconWrapper();
                                }
                                else if (this.$el.input.value === "") {
                                    this.removeCircleIcon();
                                }
                            }
                            if (typeof viewConfig.callback === "function") {
                                let ret;
                                if (viewConfig.inputType === "number") {
                                    ret = viewConfig.callback(event, this.$el.input.value, this.$el.input.valueAsNumber);
                                }
                                else if (this.isDateInputType()) {
                                    ret = viewConfig.callback(event, this.$el.input.value, this.$el.input.valueAsNumber, this.$el.input.valueAsDate);
                                }
                                else {
                                    ret = viewConfig.callback(event, this.$el.input.value);
                                }
                                if (ret) {
                                    if (ret.valid) {
                                        // 校验通过
                                        this.removeValidErrorMsg();
                                    }
                                    else {
                                        // 校验失败
                                        // 显示失败提示
                                        this.addValidErrorMsg(ret.message);
                                    }
                                }
                                else {
                                    this.removeValidErrorMsg();
                                }
                            }
                        });
                    },
                    /**
                     * 主动触发输入框改变事件
                     */
                    emitValueChange() {
                        this.$el.input.dispatchEvent(new Event("input"));
                    },
                    /**
                     * 添加校验失败的提示信息
                     * @param msg 提示信息
                     */
                    addValidErrorMsg(msg) {
                        if (msg == null)
                            return;
                        const $validErrorMsg = this.$el.panelInput.querySelector(".pops-panel-input-valid-error") ||
                            popsDOMUtils.createElement("div", {
                                className: "pops-panel-input-valid-error",
                                innerHTML: /*html*/ `<span></span>`,
                            });
                        const $validErrorMsgSpan = $validErrorMsg.querySelector("span");
                        if ($validErrorMsgSpan.innerHTML !== msg) {
                            PopsSafeUtils.setSafeHTML($validErrorMsgSpan, msg);
                        }
                        if (!$validErrorMsg.parentElement) {
                            popsDOMUtils.after(this.$el.panelInputInner, $validErrorMsg);
                        }
                    },
                    /**
                     * 移除校验失败的提示信息
                     */
                    removeValidErrorMsg() {
                        const $validErrorMsg = this.$el.panelInput.querySelector(".pops-panel-input-valid-error");
                        $validErrorMsg?.remove();
                    },
                };
                PopsPanelInput.init();
                Reflect.set($li, "data-input", PopsPanelInput);
                return {
                    $el: $li,
                    handler: PopsPanelInput,
                };
            },
            /**
             * type ==> textarea
             * 获取中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_textarea(viewConfig) {
                const $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-textarea">
					<textarea placeholder="${viewConfig.placeholder ?? ""}"></textarea>
				</div>
			`);
                const PopsPanelTextArea = {
                    [Symbol.toStringTag]: "PopsPanelTextArea",
                    $ele: {
                        itemLeftTextContainer: $li.querySelector(".pops-panel-item-left-text"),
                        panelTextarea: $li.querySelector(".pops-panel-textarea"),
                        textarea: $li.querySelector(".pops-panel-textarea textarea"),
                    },
                    $data: {
                        value: viewConfig.getValue(),
                    },
                    init() {
                        this.setValue(this.$data.value);
                        this.onValueChange();
                        const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                        if (disabled) {
                            this.disable();
                        }
                    },
                    disable() {
                        this.$ele.textarea.setAttribute("disabled", "true");
                        popsDOMUtils.addClassName(this.$ele.panelTextarea, "pops-panel-textarea-disable");
                        popsDOMUtils.addClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                    },
                    notDisable() {
                        this.$ele.textarea.removeAttribute("disabled");
                        popsDOMUtils.removeClassName(this.$ele.panelTextarea, "pops-panel-textarea-disable");
                        popsDOMUtils.removeClassName(this.$ele.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                    },
                    isDisabled() {
                        return (this.$ele.textarea.hasAttribute("disabled") ||
                            popsDOMUtils.containsClassName(this.$ele.panelTextarea, "pops-panel-textarea-disable"));
                    },
                    setValue(value) {
                        this.$ele.textarea.value = value;
                    },
                    /**
                     * 监听选择内容改变
                     */
                    onValueChange() {
                        popsDOMUtils.on(this.$ele.textarea, ["input", "propertychange"], (event) => {
                            const value = this.$ele.textarea.value;
                            this.$data.value = value;
                            if (typeof viewConfig.callback === "function") {
                                viewConfig.callback(event, value);
                            }
                        });
                    },
                };
                PopsPanelTextArea.init();
                Reflect.set($li, "data-textarea", PopsPanelTextArea);
                return {
                    $el: $li,
                    handler: PopsPanelTextArea,
                };
            },
            /**
             * type ==> select
             * 获取中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_select(viewConfig) {
                const that = this;
                const $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-select">
					<select></select>
				</div>
				`);
                const $itemLeftContainer = $li.querySelector(".pops-panel-item-left-text");
                const $container = $li.querySelector(".pops-panel-select");
                const $select = $li.querySelector(".pops-panel-select select");
                const width = (typeof viewConfig.width === "number" ? `${viewConfig.width}px` : viewConfig.width) ?? "200px";
                popsDOMUtils.css($container, "width", width);
                const mode = viewConfig.mode ?? "native";
                let handler;
                if (mode === "native") {
                    const PopsPanelSelectNative = {
                        [Symbol.toStringTag]: "PopsPanelSelectNative",
                        $el: {
                            itemLeftTextContainer: $itemLeftContainer,
                            $container: $container,
                            $select: $select,
                        },
                        $eleKey: {
                            disable: "__disable__",
                            value: "__value__",
                            viewConfig: "data-view-config",
                        },
                        $data: {
                            data: [],
                            defaultValue: viewConfig.getValue(),
                        },
                        init() {
                            this.$el.$container.setAttribute("data-mode", mode);
                            this.$data.data = typeof viewConfig.data === "function" ? viewConfig.data() : viewConfig.data;
                            popsDOMUtils.addClassName(this.$el.$container, PopsCommonCSSClassName.userSelectNone);
                            this.initOption();
                            this.onValueChange();
                            this.onClick();
                            const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                            if (disabled) {
                                this.disable();
                            }
                        },
                        /**
                         * 给option元素设置属性
                         * @param $ele
                         * @param key
                         * @param value
                         */
                        setNodeValue($ele, key, value) {
                            Reflect.set($ele, key, value);
                        },
                        /**
                         * 获取option元素上设置的属性
                         * @param $ele
                         * @param value
                         * @param key
                         */
                        getNodeValue($ele, key) {
                            return Reflect.get($ele, key);
                        },
                        /**
                         * 禁用选项
                         */
                        disable() {
                            this.$el.$select.setAttribute("disabled", "true");
                            popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
                            popsDOMUtils.addClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                        },
                        /**
                         * 取消禁用
                         */
                        notDisable() {
                            this.$el.$select.removeAttribute("disabled");
                            popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
                            popsDOMUtils.removeClassName(this.$el.itemLeftTextContainer, PopsCommonCSSClassName.textIsDisabled);
                        },
                        /**
                         * 判断是否禁用
                         */
                        isDisabled() {
                            return (this.$el.$select.hasAttribute("disabled") ||
                                popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable"));
                        },
                        /**
                         * 初始化选项
                         */
                        initOption() {
                            this.$data.data.forEach((dataItem) => {
                                // 初始化默认选中
                                const optionElement = popsDOMUtils.createElement("option");
                                this.setNodeValue(optionElement, this.$eleKey.value, dataItem.value);
                                this.setNodeValue(optionElement, this.$eleKey.disable, dataItem.disable);
                                this.setNodeValue(optionElement, this.$eleKey.viewConfig, dataItem.views);
                                if (dataItem.value === this.$data.defaultValue) {
                                    this.setOptionSelected(optionElement);
                                }
                                if (typeof dataItem.text === "function") {
                                    optionElement.innerText = dataItem.text(dataItem.value, dataItem);
                                }
                                else {
                                    optionElement.innerText = dataItem.text;
                                }
                                this.$el.$select.appendChild(optionElement);
                            });
                        },
                        /**
                         * 设置选项选中
                         * @param $option
                         */
                        setOptionSelected($option) {
                            $option.setAttribute("selected", "true");
                        },
                        /**
                         * 检测所有option并设置禁用状态
                         */
                        setSelectOptionsDisableStatus() {
                            if (this.$el.$select.options && this.$el.$select.options.length) {
                                Array.from(this.$el.$select.options).forEach((optionItem) => {
                                    this.setOptionDisableStatus(optionItem);
                                });
                            }
                        },
                        /**
                         * 设置禁用状态
                         * @param $option
                         */
                        setOptionDisableStatus($option) {
                            let disable = false;
                            const optionDisableAttr = this.getNodeValue($option, this.$eleKey.disable);
                            if (optionDisableAttr === "function") {
                                const value = this.getNodeValue($option, this.$eleKey.value);
                                disable = Boolean(optionDisableAttr(value));
                            }
                            if (disable) {
                                $option.setAttribute("disabled", "true");
                            }
                            else {
                                $option.removeAttribute("disabled");
                            }
                        },
                        /**
                         * 获取option上的信息
                         * @param $option
                         */
                        getSelectOptionInfo($option) {
                            const optionValue = this.getNodeValue($option, this.$eleKey.value);
                            const optionText = $option.innerText || $option.textContent;
                            const views = this.getNodeValue($option, this.$eleKey.viewConfig);
                            return {
                                value: optionValue,
                                text: optionText,
                                views: views,
                                $option: $option,
                            };
                        },
                        /**
                         * 监听选择内容改变
                         */
                        onValueChange() {
                            popsDOMUtils.on(this.$el.$select, "change", () => {
                                const $isSelectedElement = this.$el.$select[this.$el.$select.selectedIndex];
                                const selectInfo = this.getSelectOptionInfo($isSelectedElement);
                                this.setSelectOptionsDisableStatus();
                                if (typeof viewConfig.callback === "function") {
                                    viewConfig.callback(selectInfo);
                                }
                                const views = typeof selectInfo.views === "function" ? selectInfo.views() : selectInfo.views;
                                if (Array.isArray(views)) {
                                    // 如果成功创建，加入到中间容器中
                                    const childUListClassName = "pops-panel-select-child-forms";
                                    // 移除旧的元素
                                    while ($li.nextElementSibling) {
                                        if ($li.nextElementSibling.classList.contains(childUListClassName)) {
                                            $li.nextElementSibling.remove();
                                        }
                                        else {
                                            break;
                                        }
                                    }
                                    const $childUList = popsDOMUtils.createElement("ul");
                                    $childUList.className = childUListClassName;
                                    popsDOMUtils.after($li, $childUList);
                                    that.uListContainerAddItem(viewConfig, {
                                        ulElement: $childUList,
                                    });
                                }
                            });
                        },
                        /**
                         * 监听点击事件
                         */
                        onClick() {
                            popsDOMUtils.on(this.$el.$select, "click", (event) => {
                                this.setSelectOptionsDisableStatus();
                                if (typeof viewConfig.clickCallBack === "function") {
                                    const $isSelectedElement = this.$el.$select[this.$el.$select.selectedIndex];
                                    const selectInfo = this.getSelectOptionInfo($isSelectedElement);
                                    viewConfig.clickCallBack(event, selectInfo);
                                }
                            });
                        },
                    };
                    PopsPanelSelectNative.init();
                    Reflect.set($li, "data-select", PopsPanelSelectNative);
                    handler = PopsPanelSelectNative;
                }
                else if (mode === "dialog") {
                    const PopsPanelSelect = {
                        [Symbol.toStringTag]: "PopsPanelSelect",
                        $el: {
                            $itemLeftContainer: $itemLeftContainer,
                            /** 选择框容器 */
                            $container: void 0,
                            /** 选择框包裹的容器 */
                            $wrapper: void 0,
                            /** 内容区域 */
                            $section: void 0,
                            /** 手动输入 */
                            $selectedInputWrapper: void 0,
                            /** 灰色提示语 */
                            $selectedPlaceHolderWrapper: void 0,
                            /** 下拉箭头区域 */
                            $suffix: void 0,
                            /** 下拉箭头图标 */
                            $suffixIcon: void 0,
                            /** 下拉列表弹窗的下拉列表容器 */
                            $selectDialogContainer: void 0,
                        },
                        $data: {
                            /**
                             * 数据
                             */
                            data: [],
                            /**
                             * 默认值
                             */
                            defaultValue: viewConfig.getValue(),
                            /**
                             * 选择的信息
                             */
                            selectedData: void 0,
                            /**
                             * 是否验证通过
                             */
                            isValidSuccess: true,
                            /**
                             * 箭头旋转的属性
                             */
                            rotateKey: "data-show-option",
                        },
                        /** 初始化 */
                        init() {
                            this.initDefault();
                            this.initEl();
                            this.initPlaceHolder();
                            this.renderSelectText();
                            this.onShowSelectDialogClick();
                            const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                            if (disabled) {
                                this.disable();
                            }
                        },
                        /** 初始化默认值 */
                        initDefault() {
                            this.$data.data = typeof viewConfig.data === "function" ? viewConfig.data() : viewConfig.data;
                            this.$data.data.forEach((dataItem) => {
                                const flag = this.$data.defaultValue.includes(dataItem.value);
                                if (flag) {
                                    // 初始化选中的配置
                                    this.resetCurrentSelectedInfo();
                                    this.updateSelectedInfo(dataItem);
                                }
                            });
                        },
                        /** 初始化$ele变量 */
                        initEl() {
                            this.$el.$container = $container;
                            this.$el.$container.setAttribute("data-mode", mode);
                            PopsSafeUtils.setSafeHTML(this.$el.$container, 
                            /*html*/ `
              <div class="el-select__wrapper">
                <div class="el-select__selection">
                  <!-- 这个是用于手动输入的，这里暂不适配 -->
                  <div class="el-select__selected-item el-select__input-wrapper"></div>
                  <!-- 这个是placeholder -->
                  <div class="el-select__selected-item el-select__placeholder"></div>
                </div>
                <!-- 下拉箭头 -->
                <div class="el-select__suffix">
                  <i class="el-icon el-select__caret el-select__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                    </svg>
                  </i>
                </div>
              </div>`);
                            this.$el.$wrapper = $li.querySelector(".el-select__wrapper");
                            this.$el.$section = $li.querySelector(".el-select__selection");
                            this.$el.$selectedInputWrapper = $li.querySelector(".el-select__selected-item.el-select__input-wrapper");
                            this.$el.$selectedPlaceHolderWrapper = $li.querySelector(".el-select__selected-item.el-select__placeholder");
                            this.$el.$suffix = $li.querySelector(".el-select__suffix");
                            this.$el.$suffixIcon = $li.querySelector(".el-select__suffix .el-icon");
                            // 先把手动输入框隐藏
                            this.hideInputWrapper();
                        },
                        /**
                         * 初始化提示文字
                         */
                        initPlaceHolder() {
                            let placeholder = "--请选择--";
                            if (typeof viewConfig.placeholder === "string") {
                                placeholder = viewConfig.placeholder;
                            }
                            else if (typeof viewConfig.placeholder === "function") {
                                const placeholderResult = viewConfig.placeholder();
                                if (typeof placeholderResult === "string") {
                                    placeholder = placeholderResult;
                                }
                            }
                            /**
                             * 默认提示文字的位置
                             */
                            const defaultSelectedTextAlign = "left";
                            this.$el.$section.setAttribute("data-selected-text-align", viewConfig.selectedTextAlign || defaultSelectedTextAlign);
                            const $placeholder = popsDOMUtils.createElement("span", {
                                innerText: placeholder,
                            });
                            this.$el.$selectedPlaceHolderWrapper.appendChild($placeholder);
                        },
                        /**
                         * 重新渲染外面的已选择项的文本
                         *
                         * 如果未选择，显示提示文字
                         */
                        renderSelectText() {
                            let item = this.$data.data.find((dataItem) => {
                                return dataItem.value === this.$data.selectedData?.value;
                            });
                            if (item == null) {
                                // 未找到但是有选中信息，且是自定义输入的
                                if (this.$data.selectedData && this.$data.selectedData.addCustomInput) {
                                    item = this.$data.selectedData;
                                }
                            }
                            if (item != null) {
                                // 默认值在数据中
                                // 显示该数据项的文本
                                // 隐藏placeholder
                                const text = typeof item.text === "function" ? item.text(item.value, item) : item.text;
                                if (item.isHTML) {
                                    PopsSafeUtils.setSafeHTML(this.$el.$selectedInputWrapper, text);
                                }
                                else {
                                    PopsSafeUtils.setSafeHTML(this.$el.$selectedInputWrapper, 
                                    /*html*/ `
                  <span>${text}</span>
                `);
                                }
                                // 显示选中的内容
                                this.showInputWrapper();
                                // 隐藏placeholder
                                this.hidePlaceHolderWrapper();
                            }
                            else {
                                // 仅显示placeholder
                                this.hideInputWrapper();
                                this.showPlaceHolderWrapper();
                            }
                        },
                        /**
                         * 禁用选项容器
                         */
                        disable() {
                            popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
                            popsDOMUtils.addClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
                        },
                        /**
                         * 取消禁用选项容器
                         */
                        cancleDisable() {
                            popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
                            popsDOMUtils.removeClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
                        },
                        /**
                         * 判断当前是否已禁用选项容器
                         */
                        isDisabled() {
                            return (popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable") ||
                                popsDOMUtils.containsClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled));
                        },
                        /**
                         * 设置选择列表的点击事件
                         *
                         * 点击显示选择列表的弹窗
                         */
                        onShowSelectDialogClick() {
                            const defaultCSS = PopsCSS.panelComponents_Select;
                            popsDOMUtils.on(this.$el.$container, "click", () => {
                                if (this.isDisabled()) {
                                    return;
                                }
                                /** 当前已选中的值 */
                                const { style, ...userConfirmConfig } = viewConfig.selectConfirmDialogConfig || {};
                                /**
                                 * 弹窗关闭的回调
                                 */
                                const dialogCloseCallback = () => {
                                    if (this.$data.selectedData?.addCustomInput && !this.$data.isValidSuccess) {
                                        // 当前是自定义输入的且未通过校验
                                        return false;
                                    }
                                    else {
                                        // 清除自定义输入的值
                                        this.getAllSelectItems(false).forEach((it) => {
                                            if (!it.data.addCustomInput)
                                                return;
                                            it.data.value = "";
                                            it.data.text = "";
                                            this.onValueChangeCallback(it.data);
                                        });
                                    }
                                    this.renderSelectText();
                                    this.$el.$selectDialogContainer = null;
                                    this.$el.$container.removeAttribute(this.$data.rotateKey);
                                };
                                this.$el.$container.setAttribute(this.$data.rotateKey, String(true));
                                const confirmConfig = popsUtils.assign({
                                    title: {
                                        text: "请勾选需要选择的选项",
                                        position: "center",
                                    },
                                    content: {
                                        text: /*html*/ `<ul class="select-container"></ul>`,
                                        html: true,
                                    },
                                    btn: {
                                        ok: {
                                            enable: false,
                                        },
                                        close: {
                                            enable: true,
                                            callback(evtConfig) {
                                                const ret = dialogCloseCallback();
                                                if (typeof ret === "boolean" && !ret) {
                                                    return;
                                                }
                                                evtConfig.close();
                                            },
                                        },
                                    },
                                    mask: {
                                        enable: true,
                                        clickCallBack(originalRun) {
                                            const ret = dialogCloseCallback();
                                            if (typeof ret === "boolean" && !ret) {
                                                return;
                                            }
                                            originalRun();
                                        },
                                        clickEvent: {
                                            toClose: true,
                                        },
                                    },
                                    drag: true,
                                    dragLimit: true,
                                    width: "300px",
                                    height: "auto",
                                    style: /*css*/ `
                  ${defaultCSS}

                  ${PopsCSS.panelCSS}

								  ${style || ""}
								`,
                                }, userConfirmConfig);
                                const $dialog = PopsAlert.init(confirmConfig);
                                const $selectContainer = $dialog.$shadowRoot.querySelector(".select-container");
                                // 初始化选项元素
                                this.$data.data.forEach((item) => {
                                    if (item.addCustomInput) {
                                        // 添加自定义输入的
                                        const customInputDataOption = item;
                                        const $customInputSelecItem = this.createSelectItemElement(customInputDataOption);
                                        const context = this;
                                        const PanelInput = that.createSectionContainerItem_input({
                                            type: "input",
                                            text: "",
                                            getValue() {
                                                return customInputDataOption.value;
                                            },
                                            callback(evt, value) {
                                                customInputDataOption.text = value;
                                                customInputDataOption.value = value;
                                                if (typeof customInputDataOption.onValid === "function") {
                                                    const ret = customInputDataOption.onValid(customInputDataOption);
                                                    context.$data.isValidSuccess = ret.valid;
                                                    if (ret.valid) {
                                                        PanelInputHandler.removeValidErrorMsg();
                                                    }
                                                    else {
                                                        PanelInputHandler.addValidErrorMsg(ret.message);
                                                        return ret;
                                                    }
                                                }
                                                context.updateSelectedInfo(customInputDataOption);
                                                context.onValueChangeCallback(customInputDataOption);
                                            },
                                        });
                                        // 获取输入框处理函数
                                        const PanelInputHandler = PanelInput.handler;
                                        const $inputContainer = PanelInput.$el.querySelector(".pops-panel-input");
                                        PopsSafeUtils.setSafeHTML($customInputSelecItem, "");
                                        $customInputSelecItem.appendChild($inputContainer);
                                        // 添加到confirm中
                                        $selectContainer.appendChild($customInputSelecItem);
                                        // 设置项的点击事件
                                        this.onSelectItemClick(customInputDataOption, $customInputSelecItem);
                                    }
                                    else {
                                        const $select = this.createSelectItemElement(item);
                                        // 添加到confirm中
                                        $selectContainer.appendChild($select);
                                        // 设置项的点击事件
                                        this.onSelectItemClick(item, $select);
                                    }
                                });
                                this.$el.$selectDialogContainer = $selectContainer;
                                // 初始化状态
                                this.updateAllSelectItemStatus();
                            });
                        },
                        /**
                         * 选中的值改变的回调
                         * @param data 当前的选中信息
                         */
                        onValueChangeCallback(data, isUpdateSelectItem = true) {
                            // 动态更新禁用状态、选中状态
                            isUpdateSelectItem && this.updateAllSelectItemStatus();
                            // 触发回调
                            if (typeof viewConfig.callback === "function") {
                                viewConfig.callback(data || this.$data.selectedData);
                            }
                        },
                        /**
                         * 更新选项弹窗内的所有选项元素的状态
                         *
                         * + 更新禁用状态
                         * + 更新选中状态
                         */
                        updateAllSelectItemStatus() {
                            const allSelectItems = this.getAllSelectItems(false);
                            allSelectItems.forEach(($selectInfo) => {
                                const { data, $select } = $selectInfo;
                                // 更新文字
                                this.setSelectItemText(data, $selectInfo.$select);
                                if (typeof data.disable === "function" && data.disable(data.value, this.$data.selectedData)) {
                                    // 移除选中状态
                                    this.removeItemSelected($select);
                                    // 禁用
                                    this.setSelectItemDisabled($select);
                                }
                                else {
                                    // 移除禁用状态
                                    this.removeSelectItemDisabled($select);
                                }
                                // 根据当前已选择的信息，判断并更新选中状态
                                if (this.$data.selectedData != null && this.$data.selectedData.value === data.value) {
                                    // 就是这个项
                                    // 设置选中
                                    this.setItemSelected($select);
                                }
                                else {
                                    // 不是这个项
                                    // 移除选中状态
                                    this.removeItemSelected($select);
                                }
                            });
                        },
                        /**
                         * 重置所有已选中的项以下状态
                         *
                         * + 更新选项显示的文字
                         * + 移除禁用状态
                         * + 移除选中状态
                         */
                        resetAllSelectedItemStatus() {
                            const allSelectedItems = this.getAllSelectItems(true);
                            if (allSelectedItems.length) {
                                // 移除选中信息
                                this.resetCurrentSelectedInfo();
                            }
                            allSelectedItems.forEach(($selectInfo) => {
                                const { data, $select } = $selectInfo;
                                // 更新文字
                                this.setSelectItemText(data, $selectInfo.$select);
                                // 移除选中状态
                                this.removeItemSelected($select);
                                // 取消禁用
                                this.removeSelectItemDisabled($select);
                            });
                        },
                        /**
                         * 设置选项元素选中
                         * @param $el 选项元素
                         */
                        setItemSelected($el) {
                            if (this.isItemSelected($el))
                                return;
                            $el.classList.add("select-item-is-selected");
                        },
                        /**
                         * 移除选项元素选中
                         * @param $el 选项元素
                         */
                        removeItemSelected($el) {
                            $el.classList.remove("select-item-is-selected");
                        },
                        /**
                         * 判断选项元素是否选中
                         * @param $el
                         */
                        isItemSelected($el) {
                            return $el.classList.contains("select-item-is-selected");
                        },
                        /**
                         * 获取项上存储的信息
                         * @param $el 选项元素
                         */
                        getItemDataOption($el) {
                            return Reflect.get($el, "data-info");
                        },
                        /**
                         * 添加选中信息
                         * @param data 选择项的数据
                         */
                        addSelectedItemInfo(data) {
                            this.resetCurrentSelectedInfo();
                            this.updateSelectedInfo(data);
                            this.onValueChangeCallback(data);
                        },
                        /**
                         * 移除选中信息
                         * @param data 选择项的数据
                         */
                        removeSelectedItemInfo() {
                            // 删除
                            this.updateSelectedInfo();
                            this.onValueChangeCallback();
                        },
                        /**
                         * 更新选中信息
                         * @param data 数据
                         */
                        updateSelectedInfo(data) {
                            // 先删除再赋值
                            this.$data.selectedData = void 0;
                            if (data) {
                                if (data.addCustomInput && data.value.toString() === "") {
                                    // 自定义输入框，但是内容是空字符串
                                    // 不更新选中信息
                                    return;
                                }
                                this.$data.selectedData = data;
                            }
                        },
                        /**
                         * 从保存的已选中的信息列表中移除目标信息
                         */
                        resetCurrentSelectedInfo() {
                            this.updateSelectedInfo();
                        },
                        /**
                         * 获取所有选项的信息
                         * @param [onlySelected=true] 是否仅获取选中的项的信息
                         * + true （默认）仅获取选中项的信息
                         * + false 获取所有选择项的信息
                         */
                        getAllSelectItems(onlySelected = true) {
                            return Array.from(this.$el.$selectDialogContainer?.querySelectorAll(".select-item") ?? [])
                                .map(($select) => {
                                const data = this.getItemDataOption($select);
                                const result = {
                                    /** 选项信息数据 */
                                    data: data,
                                    /** 选项元素 */
                                    $select: $select,
                                };
                                if (onlySelected) {
                                    // 仅选中
                                    const isSelected = this.isItemSelected($select);
                                    if (isSelected) {
                                        return result;
                                    }
                                    return;
                                }
                                else {
                                    return result;
                                }
                            })
                                .filter((item) => {
                                return item != null;
                            });
                        },
                        /**
                         * 创建一个选择项元素
                         * @param data 选择项的数据
                         */
                        createSelectItemElement(data) {
                            const $select = popsDOMUtils.createElement("li", {
                                className: "select-item",
                                innerHTML: /*html*/ `<span class="select-item-text"></span>`,
                            });
                            this.setSelectItemText(data, $select);
                            Reflect.set($select, "data-info", data);
                            return $select;
                        },
                        /**
                         * 设置选择项的文字
                         * @param data 选择项的数据
                         * @param $select 选择项元素
                         */
                        setSelectItemText(data, $select) {
                            const text = typeof data.text === "function" ? data.text(data.value, this.$data.selectedData) : data.text;
                            const $selectSpan = $select.querySelector(".select-item-text");
                            if (!$selectSpan)
                                return;
                            if (data.isHTML) {
                                PopsSafeUtils.setSafeHTML($selectSpan, text);
                            }
                            else {
                                $selectSpan.innerText = text;
                            }
                        },
                        /**
                         * 设置选择项禁用
                         * @param $select 选择项元素
                         */
                        setSelectItemDisabled($select) {
                            $select.setAttribute("aria-disabled", "true");
                            $select.setAttribute("disabled", "true");
                        },
                        /**
                         * 移除选择项的禁用状态
                         * @param $select 选择项元素
                         */
                        removeSelectItemDisabled($select) {
                            $select.removeAttribute("aria-disabled");
                            $select.removeAttribute("disabled");
                        },
                        /**
                         * 判断选择项是否禁用
                         * @param $select 选择项元素
                         */
                        isSelectItemDisabled($select) {
                            return $select.hasAttribute("disabled") || $select.ariaDisabled;
                        },
                        /**
                         * 设置选择项的点击事件
                         * @param data 该选择项的信息
                         * @param $select 该选择项元素
                         */
                        onSelectItemClick(data, $select) {
                            const updateCustomInputStatus = () => {
                                this.setItemSelected($select);
                                this.addSelectedItemInfo(data);
                            };
                            popsDOMUtils.on($select, "click", (event) => {
                                popsDOMUtils.preventEvent(event);
                                const $click = event.target;
                                if (data?.addCustomInput && $click instanceof HTMLInputElement) {
                                    // 自定义输入框 单独处理值更新，选中
                                    updateCustomInputStatus();
                                    return;
                                }
                                if (this.isSelectItemDisabled($select)) {
                                    // 被禁用了
                                    return;
                                }
                                if (typeof viewConfig.clickCallBack === "function") {
                                    const clickResult = viewConfig.clickCallBack(event, this.$data.selectedData);
                                    if (typeof clickResult === "boolean" && !clickResult) {
                                        return;
                                    }
                                }
                                if (data?.addCustomInput) {
                                    // 自定义输入框 添加选中
                                    updateCustomInputStatus();
                                }
                                else {
                                    // 修改选中状态
                                    if (this.isItemSelected($select)) {
                                        // 移除选中
                                        this.removeItemSelected($select);
                                        this.removeSelectedItemInfo();
                                    }
                                    else {
                                        // 添加选中
                                        this.setItemSelected($select);
                                        this.addSelectedItemInfo(data);
                                    }
                                }
                            });
                        },
                        /** 显示输入框 */
                        showInputWrapper() {
                            popsDOMUtils.cssShow(this.$el.$selectedInputWrapper);
                        },
                        /** 隐藏输入框 */
                        hideInputWrapper() {
                            popsDOMUtils.cssHide(this.$el.$selectedInputWrapper, true);
                        },
                        /** 显示palceholder */
                        showPlaceHolderWrapper() {
                            popsDOMUtils.cssShow(this.$el.$selectedPlaceHolderWrapper);
                        },
                        /** 隐藏palceholder */
                        hidePlaceHolderWrapper() {
                            popsDOMUtils.cssHide(this.$el.$selectedPlaceHolderWrapper, true);
                        },
                    };
                    PopsPanelSelect.init();
                    Reflect.set($li, "data-select", PopsPanelSelect);
                    handler = PopsPanelSelect;
                }
                else if (mode === "horizontal") {
                    const PopsPanelSelectHorizontal = {
                        [Symbol.toStringTag]: "PopsPanelSelectHorizontal",
                        $el: {
                            $itemLeftContainer: $itemLeftContainer,
                            /** 选择框容器 */
                            $container: $container,
                            /** 选择框包裹的容器 */
                            $wrapper: void 0,
                        },
                        $data: {
                            /**
                             * 数据
                             */
                            data: [],
                            /**
                             * 默认值
                             */
                            defaultValue: viewConfig.getValue(),
                            /**
                             * 选择的信息
                             */
                            selectedData: void 0,
                            /**
                             * 箭头旋转的属性
                             */
                            rotateKey: "data-show-option",
                        },
                        /** 初始化 */
                        init() {
                            this.initDefault();
                            this.initEl();
                            const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                            if (disabled) {
                                this.disable();
                            }
                        },
                        /** 初始化默认值 */
                        initDefault() {
                            this.$data.data = typeof viewConfig.data === "function" ? viewConfig.data() : viewConfig.data;
                            if (!this.$data.data.length) {
                                throw new Error("PopsPanelSelect: data is empty");
                            }
                        },
                        /** 初始化$ele变量 */
                        initEl() {
                            this.$el.$container.setAttribute("data-mode", mode);
                            PopsSafeUtils.setSafeHTML(this.$el.$container, 
                            /*html*/ `
              <div class="el-select__wrapper">
              </div>`);
                            this.$el.$wrapper = $li.querySelector(".el-select__wrapper");
                            this.$data.data.forEach((dataItem) => {
                                const $item = this.createSelectItemElement(dataItem);
                                this.onSelectItemClick(dataItem, $item);
                                if (this.$data.defaultValue === dataItem.value) {
                                    this.addSelectedItemInfo(dataItem);
                                }
                                this.$el.$wrapper.appendChild($item);
                            });
                            this.updateAllSelectItemStatus();
                        },
                        /**
                         * 禁用选项容器
                         */
                        disable() {
                            popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
                            popsDOMUtils.addClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
                        },
                        /**
                         * 取消禁用选项容器
                         */
                        cancleDisable() {
                            popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
                            popsDOMUtils.removeClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
                        },
                        /**
                         * 判断当前是否已禁用选项容器
                         */
                        isDisabled() {
                            return (popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable") ||
                                popsDOMUtils.containsClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled));
                        },
                        /**
                         * 创建选择项
                         * @param data 数据
                         */
                        createSelectItemElement(data) {
                            const $select = popsDOMUtils.createElement("div", {
                                className: "select-item",
                                innerHTML: /*html*/ `
                <span class="select-item-text"></span>
              `,
                            });
                            this.setSelectItemText(data, $select);
                            Reflect.set($select, "data-info", data);
                            return $select;
                        },
                        /**
                         * 设置选择项的文字
                         * @param data 选择项的数据
                         * @param $select 选择项元素
                         */
                        setSelectItemText(data, $select) {
                            const text = typeof data.text === "function" ? data.text(data.value, this.$data.selectedData) : data.text;
                            const $selectSpan = $select.querySelector(".select-item-text");
                            if (!$selectSpan)
                                return;
                            if (data.isHTML) {
                                PopsSafeUtils.setSafeHTML($selectSpan, text);
                            }
                            else {
                                $selectSpan.innerText = text;
                            }
                        },
                        /**
                         * 设置选择项点击事件
                         */
                        onSelectItemClick(data, $el) {
                            popsDOMUtils.on($el, "click", (event) => {
                                popsDOMUtils.preventEvent(event);
                                if (this.isDisabled()) {
                                    return;
                                }
                                if (this.isSelectItemDisabled($el)) {
                                    // 被禁用了
                                    return;
                                }
                                if (typeof viewConfig.clickCallBack === "function") {
                                    const clickResult = viewConfig.clickCallBack(event, this.$data.selectedData);
                                    if (typeof clickResult === "boolean" && !clickResult) {
                                        return;
                                    }
                                } // 修改选中状态
                                if (this.isItemSelected($el)) {
                                    // 移除选中
                                    this.removeItemSelected($el);
                                    this.removeSelectedItemInfo();
                                }
                                else {
                                    // 添加选中
                                    this.setItemSelected($el);
                                    this.addSelectedItemInfo(data);
                                }
                            });
                        },
                        /**
                         * 选中的值改变的回调
                         * @param data 当前的选中信息
                         */
                        onValueChangeCallback(data, isUpdateSelectItem = true) {
                            // 动态更新禁用状态、选中状态
                            isUpdateSelectItem && this.updateAllSelectItemStatus();
                            // 触发回调
                            if (typeof viewConfig.callback === "function") {
                                viewConfig.callback(data || this.$data.selectedData);
                            }
                        },
                        /**
                         * 更新选项弹窗内的所有选项元素的状态
                         *
                         * + 更新禁用状态
                         * + 更新选中状态
                         */
                        updateAllSelectItemStatus() {
                            const allSelectItems = this.getAllSelectItems(false);
                            allSelectItems.forEach(($selectInfo) => {
                                const { data, $select } = $selectInfo;
                                // 更新文字
                                this.setSelectItemText(data, $selectInfo.$select);
                                if (typeof data.disable === "function" && data.disable(data.value, this.$data.selectedData)) {
                                    // 移除选中状态
                                    this.removeItemSelected($select);
                                    // 禁用
                                    this.setSelectItemDisabled($select);
                                }
                                else {
                                    // 移除禁用状态
                                    this.removeSelectItemDisabled($select);
                                }
                                // 根据当前已选择的信息，判断并更新选中状态
                                if (this.$data.selectedData != null && this.$data.selectedData.value === data.value) {
                                    // 就是这个项
                                    // 设置选中
                                    this.setItemSelected($select);
                                }
                                else {
                                    // 不是这个项
                                    // 移除选中状态
                                    this.removeItemSelected($select);
                                }
                            });
                        },
                        /**
                         * 重置所有已选中的项以下状态
                         *
                         * + 更新选项显示的文字
                         * + 移除禁用状态
                         * + 移除选中状态
                         */
                        resetAllSelectedItemStatus() {
                            const allSelectedItems = this.getAllSelectItems(true);
                            if (allSelectedItems.length) {
                                // 移除选中信息
                                this.resetCurrentSelectedInfo();
                            }
                            allSelectedItems.forEach(($selectInfo) => {
                                const { data, $select } = $selectInfo;
                                // 更新文字
                                this.setSelectItemText(data, $selectInfo.$select);
                                // 移除选中状态
                                this.removeItemSelected($select);
                                // 取消禁用
                                this.removeSelectItemDisabled($select);
                            });
                        },
                        /**
                         * 添加选中信息
                         * @param data 选择项的数据
                         */
                        addSelectedItemInfo(data) {
                            this.resetCurrentSelectedInfo();
                            this.updateSelectedInfo(data);
                            this.onValueChangeCallback(data);
                        },
                        /**
                         * 移除选中信息
                         * @param data 选择项的数据
                         */
                        removeSelectedItemInfo() {
                            // 删除
                            this.updateSelectedInfo();
                            this.onValueChangeCallback();
                        },
                        /**
                         * 更新选中信息
                         * @param data 数据
                         */
                        updateSelectedInfo(data) {
                            // 先删除再赋值
                            this.$data.selectedData = void 0;
                            if (data) {
                                if (data.addCustomInput && data.value.toString() === "") {
                                    // 自定义输入框，但是内容是空字符串
                                    // 不更新选中信息
                                    return;
                                }
                                this.$data.selectedData = data;
                            }
                        },
                        /**
                         * 从保存的已选中的信息列表中移除目标信息
                         */
                        resetCurrentSelectedInfo() {
                            this.updateSelectedInfo();
                        },
                        /**
                         * 设置选择项禁用
                         * @param $select 选择项元素
                         */
                        setSelectItemDisabled($select) {
                            $select.setAttribute("aria-disabled", "true");
                            $select.setAttribute("disabled", "true");
                        },
                        /**
                         * 移除选择项的禁用状态
                         * @param $select 选择项元素
                         */
                        removeSelectItemDisabled($select) {
                            $select.removeAttribute("aria-disabled");
                            $select.removeAttribute("disabled");
                        },
                        /**
                         * 判断选择项是否禁用
                         * @param $select 选择项元素
                         */
                        isSelectItemDisabled($select) {
                            return $select.hasAttribute("disabled") || $select.ariaDisabled;
                        },
                        /**
                         * 设置选择项选中
                         * @param $select 选择项元素（.select-item）
                         */
                        setItemSelected($select) {
                            if (this.isItemSelected($select))
                                return;
                            $select.classList.add("select__selected-item");
                        },
                        /**
                         * 移除选择项选中
                         * @param $select 选择项元素（.select-item）
                         */
                        removeItemSelected($select) {
                            $select.classList.remove("select__selected-item");
                        },
                        /**
                         * 判断选择项是否选中
                         * @param $select 选择项元素（.select-item）
                         */
                        isItemSelected($select) {
                            return $select.classList.contains("select__selected-item");
                        },
                        /**
                         * 获取所有选项的信息
                         * @param [onlySelected=true] 是否仅获取选中的项的信息
                         * + true （默认）仅获取选中项的信息
                         * + false 获取所有选择项的信息
                         */
                        getAllSelectItems(onlySelected = true) {
                            return Array.from(this.$el.$wrapper?.querySelectorAll(".select-item") ?? [])
                                .map(($select) => {
                                const data = this.getItemDataOption($select);
                                const result = {
                                    /** 选项信息数据 */
                                    data: data,
                                    /** 选项元素 */
                                    $select: $select,
                                };
                                if (onlySelected) {
                                    // 仅选中
                                    const isSelected = this.isItemSelected($select);
                                    if (isSelected) {
                                        return result;
                                    }
                                    return;
                                }
                                else {
                                    return result;
                                }
                            })
                                .filter((item) => {
                                return item != null;
                            });
                        },
                        /**
                         * 获取项上存储的信息
                         * @param $el 选项元素
                         */
                        getItemDataOption($el) {
                            return Reflect.get($el, "data-info");
                        },
                    };
                    PopsPanelSelectHorizontal.init();
                    Reflect.set($li, "data-select", PopsPanelSelectHorizontal);
                    handler = PopsPanelSelectHorizontal;
                }
                return {
                    $el: $li,
                    handler: handler,
                };
            },
            /**
             * type ==> select-multiple
             * 获取中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_select_multiple(viewConfig) {
                const $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-select-multiple">
					<div class="el-select__wrapper">
						<div class="el-select__selection">
							<!-- 这个是用于手动输入的，这里暂不适配 -->
							<div class="el-select__selected-item el-select__input-wrapper">
		
							</div>
							<!-- 这个是placeholder -->
							<div class="el-select__selected-item el-select__placeholder">
							</div>
						</div>
						<!-- 下拉箭头 -->
						<div class="el-select__suffix">
							<i class="el-icon el-select__caret el-select__icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
								</svg>
							</i>
						</div>
					</div>
				</div>
				`);
                const PopsPanelSelectMultiple = {
                    [Symbol.toStringTag]: "PopsPanelSelectMultiple",
                    $el: {
                        /** 左侧文本容器 */
                        $itemLeftContainer: $li.querySelector(".pops-panel-item-left-text"),
                        /** 选择框容器 */
                        $container: void 0,
                        /** 选择框包裹的容器 */
                        $wrapper: void 0,
                        /** 内容区域 */
                        $section: void 0,
                        /** 手动输入 */
                        $selectedInputWrapper: void 0,
                        /** 灰色提示语 */
                        $selectedPlaceHolderWrapper: void 0,
                        /** 下拉箭头区域 */
                        $suffix: void 0,
                        /** 下拉箭头图标 */
                        $suffixIcon: void 0,
                        /** 下拉列表弹窗的下拉列表容器 */
                        $selectContainer: void 0,
                    },
                    $data: {
                        /** 默认值 */
                        defaultValue: viewConfig.getValue(),
                        /**
                         * 已选择的信息
                         */
                        selectedDataList: [],
                        /**
                         * 箭头旋转的属性
                         */
                        rotateKey: "data-show-option",
                    },
                    /** 初始化 */
                    init() {
                        this.initDefault();
                        this.inintEl();
                        this.initPlaceHolder();
                        this.initTagElement();
                        this.onShowSelectDialogClick();
                        const disabled = typeof viewConfig.disabled === "function" ? viewConfig.disabled() : viewConfig.disabled;
                        if (disabled) {
                            this.disable();
                        }
                    },
                    /** 初始化默认值 */
                    initDefault() {
                        viewConfig.data.forEach((dataItem) => {
                            if (this.$data.defaultValue.includes(dataItem.value)) {
                                // 初始化选中的配置
                                this.$data.selectedDataList.push(dataItem);
                            }
                        });
                    },
                    /** 初始化$el变量 */
                    inintEl() {
                        this.$el.$container = $li.querySelector(".pops-panel-select-multiple");
                        this.$el.$wrapper = $li.querySelector(".el-select__wrapper");
                        this.$el.$section = $li.querySelector(".el-select__selection");
                        this.$el.$selectedInputWrapper = $li.querySelector(".el-select__selected-item.el-select__input-wrapper");
                        this.$el.$selectedPlaceHolderWrapper = $li.querySelector(".el-select__selected-item.el-select__placeholder");
                        this.$el.$suffix = $li.querySelector(".el-select__suffix");
                        this.$el.$suffixIcon = $li.querySelector(".el-select__suffix .el-icon");
                        // 先把手动输入框隐藏
                        this.hideInputWrapper();
                    },
                    /**
                     * 初始化提示文字
                     */
                    initPlaceHolder() {
                        let placeholder = "";
                        if (typeof viewConfig.placeholder === "string") {
                            placeholder = viewConfig.placeholder;
                        }
                        else if (typeof viewConfig.placeholder === "function") {
                            const placeholderResult = viewConfig.placeholder();
                            if (typeof placeholderResult === "string") {
                                placeholder = placeholderResult;
                            }
                        }
                        const $placeholder = popsDOMUtils.createElement("span", {
                            innerText: placeholder,
                        });
                        this.$el.$selectedPlaceHolderWrapper.appendChild($placeholder);
                    },
                    /**
                     * 初始化tag元素
                     */
                    initTagElement() {
                        // 遍历数据，寻找对应的值
                        viewConfig.data.forEach((dataItem) => {
                            const findValue = this.$data.selectedDataList.find((item) => item.value === dataItem.value);
                            if (findValue) {
                                // 存在对应的值
                                const selectedInfo = this.createTagItem(dataItem);
                                this.addTagItem(selectedInfo.$tag);
                                this.onSelectItemCloseIconClick({
                                    $tag: selectedInfo.$tag,
                                    $closeIcon: selectedInfo.$closeIcon,
                                    value: dataItem.value,
                                    text: dataItem.text,
                                });
                            }
                        });
                        this.checkTagEmpty();
                    },
                    /**
                     * 生成一个tag项
                     * @param data 配置
                     */
                    createTagItem(data) {
                        const $tag = popsDOMUtils.createElement("div", {
                            className: "el-select__selected-item el-select__choose_tag",
                            innerHTML: /*html*/ `
						<span class="el-tag is-closable el-tag--info el-tag--default el-tag--light">
							<span class="el-tag__content">
								<span class="el-select__tags-text"></span>
							</span>
							<!-- 关闭tag的图标 -->
							<i class="el-icon el-tag__close">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
								</svg>
							</i>
						</span>
						`,
                        });
                        /** 标签 */
                        const $tagText = $tag.querySelector(".el-select__tags-text");
                        /** 关闭图标 */
                        const $closeIcon = $tag.querySelector(".el-icon.el-tag__close");
                        const text = typeof data.text === "function" ? data.text(data, this.$data.selectedDataList) : data.text;
                        if (data.isHTML) {
                            PopsSafeUtils.setSafeHTML($tagText, text);
                        }
                        else {
                            $tagText.innerText = text;
                        }
                        return {
                            $tag: $tag,
                            $tagText: $tagText,
                            $closeIcon: $closeIcon,
                        };
                    },
                    /**
                     * 添加选中项的tag元素
                     * @param $tag 添加的元素
                     */
                    addTagItem($tag) {
                        // 往前添加
                        // 去除前面的空白
                        this.setSectionIsNear();
                        if (this.$el.$section.contains(this.$el.$selectedInputWrapper)) {
                            const $prev = this.$el.$selectedInputWrapper.previousElementSibling;
                            if ($prev) {
                                // 存在前一个元素，添加到前面的元素的后面
                                popsDOMUtils.after($prev, $tag);
                            }
                            else {
                                // 不存在前一个元素，添加到最前面
                                popsDOMUtils.before(this.$el.$selectedInputWrapper, $tag);
                            }
                        }
                        else if (this.$el.$section.contains(this.$el.$selectedPlaceHolderWrapper)) {
                            const $prev = this.$el.$selectedPlaceHolderWrapper.previousElementSibling;
                            if ($prev) {
                                // 存在前一个元素，添加到前面的元素的后面
                                popsDOMUtils.after($prev, $tag);
                            }
                            else {
                                // 不存在前一个元素，添加到最前面
                                popsDOMUtils.before(this.$el.$selectedPlaceHolderWrapper, $tag);
                            }
                        }
                        else {
                            this.$el.$section.appendChild($tag);
                        }
                        // 隐藏元素
                        this.hideInputWrapper();
                        this.hidePlaceHolderWrapper();
                    },
                    /**
                     * 更新tag信息
                     */
                    updateTagItem() {
                        this.$el.$section.querySelectorAll(".el-select__choose_tag").forEach(($ele) => {
                            $ele.remove();
                        });
                        this.initTagElement();
                    },
                    /**
                     * 选中的值改变的回调
                     * @param selectedDataList 当前的选中信息
                     */
                    onValueChange(selectedDataList) {
                        // 动态更新禁用状态
                        this.updateAllSelectItems();
                        if (typeof viewConfig.callback === "function") {
                            viewConfig.callback(selectedDataList || this.$data.selectedDataList);
                        }
                    },
                    /**
                     * 更新选项弹窗内的所有选项元素的状态
                     *
                     * + 更新禁用状态
                     * + 更新选中状态
                     */
                    updateAllSelectItems() {
                        this.getAllSelectItemInfo(false).forEach(($selectInfo) => {
                            const { data, $select } = $selectInfo;
                            // 更新文字
                            this.setSelectItemText(data, $selectInfo.$select);
                            // 更新禁用状态
                            if (typeof data.disable === "function" && data.disable(data.value, this.$data.selectedDataList)) {
                                // 禁用
                                this.disableSelectItem($select);
                                // 移除选中信息
                                this.removeSelectedInfo(data, false);
                                // 移除选中状态
                                this.removeItemSelected($select);
                            }
                            else {
                                // 取消禁用
                                this.cancleDisableSelectItem($select);
                            }
                            // 更新选中状态
                            const findValue = this.$data.selectedDataList.find((it) => it.value === data.value);
                            if (findValue) {
                                this.setItemSelected($select);
                            }
                            else {
                                this.removeItemSelected($select);
                            }
                        });
                    },
                    /**
                     * 设置选项元素选中
                     * @param $select 选项元素
                     */
                    setItemSelected($select) {
                        if (this.isItemSelected($select))
                            return;
                        $select.classList.add("select-item-is-selected");
                    },
                    /**
                     * 移除选项元素选中
                     * @param $select 选项元素
                     */
                    removeItemSelected($select) {
                        $select.classList.remove("select-item-is-selected");
                    },
                    /**
                     * 判断选项元素是否选中
                     * @param $select
                     */
                    isItemSelected($select) {
                        return $select.classList.contains("select-item-is-selected");
                    },
                    /**
                     * 添加选中信息
                     * @param dataList 选择项列表的数据
                     * @param $select 选项元素
                     */
                    addItemSelected(dataList, $select) {
                        const info = this.getSelectedItemInfo($select);
                        const findValue = dataList.find((item) => item.value === info.value);
                        if (!findValue) {
                            dataList.push(info);
                        }
                        this.onValueChange(dataList);
                    },
                    /**
                     * 获取选中的项的信息
                     * @param $select 选项元素
                     */
                    getSelectedItemInfo($select) {
                        return Reflect.get($select, "data-info");
                    },
                    /**
                     * 移除选中信息
                     * @param dataList 选择项的数据
                     * @param $select 选项元素
                     */
                    removeSelectedItemInfo(dataList, $select) {
                        const info = this.getSelectedItemInfo($select);
                        const findIndex = dataList.findIndex((item) => item.value === info.value);
                        if (findIndex !== -1) {
                            dataList.splice(findIndex, 1);
                        }
                        this.onValueChange(dataList);
                    },
                    /**
                     * 获取所有选项的信息
                     * @param [onlySelected=true] 是否仅获取选中的项的信息
                     * + true （默认）仅获取选中项的信息
                     * + false 获取所有选择项的信息
                     */
                    getAllSelectItemInfo(onlySelected = true) {
                        return Array.from(this.$el.$selectContainer?.querySelectorAll(".select-item") ?? [])
                            .map(($select) => {
                            const data = this.getSelectedItemInfo($select);
                            const result = {
                                /** 选项信息数据 */
                                data: data,
                                /** 选项元素 */
                                $select: $select,
                            };
                            if (onlySelected) {
                                // 仅选中
                                const isSelected = this.isItemSelected($select);
                                if (isSelected) {
                                    return result;
                                }
                                return;
                            }
                            else {
                                return result;
                            }
                        })
                            .filter((item) => {
                            return item != null;
                        });
                    },
                    /**
                     * 创建一个选择项元素
                     * @param data 选择项的数据
                     */
                    createSelectItemElement(data) {
                        const $select = popsDOMUtils.createElement("li", {
                            className: "select-item",
                            innerHTML: /*html*/ `
							<span class="select-item-text"></span>
						`,
                        });
                        this.setSelectItemText(data, $select);
                        Reflect.set($select, "data-info", data);
                        return $select;
                    },
                    /**
                     * 设置选择项的文字
                     * @param data 选择项的数据
                     * @param $select 选择项元素
                     */
                    setSelectItemText(data, $select) {
                        const text = typeof data.text === "function" ? data.text(data.value, this.$data.selectedDataList) : data.text;
                        const $selectSpan = $select.querySelector(".select-item-text");
                        if (data.isHTML) {
                            PopsSafeUtils.setSafeHTML($selectSpan, text);
                        }
                        else {
                            $selectSpan.innerText = text;
                        }
                    },
                    /**
                     * 设置选择项的禁用状态
                     * @param $select 选择项元素
                     */
                    disableSelectItem($select) {
                        $select.setAttribute("aria-disabled", "true");
                        $select.setAttribute("disabled", "true");
                    },
                    /**
                     * 移除选择项的禁用状态
                     * @param $select 选择项元素
                     */
                    cancleDisableSelectItem($select) {
                        $select.removeAttribute("aria-disabled");
                        $select.removeAttribute("disabled");
                    },
                    /**
                     * 判断选择项是否禁用
                     * @param $select 选择项元素
                     */
                    isSelectItemDisabled($select) {
                        return $select.hasAttribute("disabled") || $select.ariaDisabled;
                    },
                    /**
                     * 设置选择项的点击事件
                     * @param dataList 选中的信息列表
                     * @param $select 选择项元素
                     */
                    onSelectItemClick(dataList, $select) {
                        popsDOMUtils.on($select, "click", (event) => {
                            popsDOMUtils.preventEvent(event);
                            if (this.isSelectItemDisabled($select)) {
                                return;
                            }
                            if (typeof viewConfig.clickCallBack === "function") {
                                const allSelectedInfo = this.getAllSelectItemInfo().map((it) => it.data);
                                const clickResult = viewConfig.clickCallBack(event, allSelectedInfo);
                                if (typeof clickResult === "boolean" && !clickResult) {
                                    return;
                                }
                            }
                            // 修改选中状态
                            if (this.isItemSelected($select)) {
                                this.removeItemSelected($select);
                                this.removeSelectedItemInfo(dataList, $select);
                            }
                            else {
                                this.setItemSelected($select);
                                this.addItemSelected(dataList, $select);
                            }
                        });
                    },
                    /**
                     * 设置下拉列表的点击事件
                     *
                     * 点击显示下拉列表弹窗
                     */
                    onShowSelectDialogClick() {
                        const defaultCSS = PopsCSS.panelComponents_Select;
                        popsDOMUtils.on(this.$el.$container, "click", () => {
                            if (this.isDisabled()) {
                                return;
                            }
                            /** 当前已选中的值 */
                            const selectInfo = this.$data.selectedDataList;
                            const { style, ...userConfirmConfig } = viewConfig.selectConfirmDialogConfig || {};
                            const dialogCloseCallback = () => {
                                this.$data.selectedDataList = [...selectInfo];
                                this.updateTagItem();
                                this.$el.$selectContainer = null;
                                this.$el.$container.removeAttribute(this.$data.rotateKey);
                            };
                            this.$el.$container.setAttribute(this.$data.rotateKey, String(true));
                            const confirmConfig = popsUtils.assign({
                                title: {
                                    text: "请勾选需要选择的选项",
                                    position: "center",
                                },
                                content: {
                                    text: /*html*/ `<ul class="select-container"></ul>`,
                                    html: true,
                                },
                                btn: {
                                    ok: {
                                        enable: false,
                                    },
                                    close: {
                                        enable: true,
                                        callback(evtConfig) {
                                            evtConfig.close();
                                            dialogCloseCallback();
                                        },
                                    },
                                },
                                mask: {
                                    enable: true,
                                    clickCallBack(originalRun) {
                                        originalRun();
                                        dialogCloseCallback();
                                    },
                                    clickEvent: {
                                        toClose: true,
                                    },
                                },
                                drag: true,
                                dragLimit: true,
                                width: "300px",
                                height: "auto",
                                style: /*css*/ `
                  ${defaultCSS}

								  ${style || ""}
								`,
                            }, userConfirmConfig);
                            const $dialog = PopsAlert.init(confirmConfig);
                            const $selectContainer = $dialog.$shadowRoot.querySelector(".select-container");
                            // 配置选项元素
                            viewConfig.data.forEach((item) => {
                                const $select = this.createSelectItemElement(item);
                                // 添加到confirm中
                                $selectContainer.appendChild($select);
                                // 设置每一项的点击事件
                                this.onSelectItemClick(selectInfo, $select);
                            });
                            this.$el.$selectContainer = $selectContainer;
                            // 动态更新禁用状态
                            this.updateAllSelectItems();
                        });
                    },
                    /**
                     * 设置关闭图标的点击事件
                     * @param data 选中的信息
                     */
                    onSelectItemCloseIconClick(data) {
                        popsDOMUtils.on(data.$closeIcon, "click", (event) => {
                            popsDOMUtils.preventEvent(event);
                            if (this.isDisabled()) {
                                return;
                            }
                            if (typeof viewConfig.closeIconClickCallBack === "function") {
                                const result = viewConfig.closeIconClickCallBack(event, {
                                    $tag: data.$tag,
                                    $closeIcon: data.$closeIcon,
                                    value: data.value,
                                    text: typeof data.text === "function" ? data.text.bind(data) : data.text,
                                });
                                if (typeof result === "boolean" && !result) {
                                    return;
                                }
                            }
                            this.removeSelectedTagItem(data.$tag);
                            this.removeSelectedInfo({
                                value: data.value,
                                text: data.text,
                            });
                        }, {
                            capture: true,
                        });
                    },
                    /**
                     * 检测tag是否为空
                     *
                     * 如果为空则显示placeholder
                     */
                    checkTagEmpty() {
                        if (!this.$el.$section.querySelectorAll(".el-select__choose_tag").length) {
                            // 没有tag了
                            // this.showInputWrapper();
                            this.showPlaceHolderWrapper();
                            this.removeSectionIsNear();
                        }
                    },
                    /**
                     * 移除选中项元素
                     */
                    removeSelectedTagItem($tag) {
                        $tag.remove();
                        this.checkTagEmpty();
                    },
                    /**
                     * 从保存的已选中的信息列表中移除目标信息
                     * @param data 需要移除的信息
                     * @param [emitValueChangeCallBack=true] 是否触发值改变的回调
                     * + true （默认）触发值改变的回调
                     * + false 不触发值改变的回调
                     */
                    removeSelectedInfo(data, emitValueChangeCallBack = true) {
                        for (let index = 0; index < this.$data.selectedDataList.length; index++) {
                            const selectInfo = this.$data.selectedDataList[index];
                            if (selectInfo.value === data.value) {
                                this.$data.selectedDataList.splice(index, 1);
                                break;
                            }
                        }
                        emitValueChangeCallBack && this.onValueChange();
                    },
                    /** 显示输入框 */
                    showInputWrapper() {
                        popsDOMUtils.cssShow(this.$el.$selectedInputWrapper);
                    },
                    /** 隐藏输入框 */
                    hideInputWrapper() {
                        popsDOMUtils.cssHide(this.$el.$selectedInputWrapper, true);
                    },
                    /** 显示palceholder */
                    showPlaceHolderWrapper() {
                        popsDOMUtils.cssShow(this.$el.$selectedPlaceHolderWrapper);
                    },
                    /** 隐藏palceholder */
                    hidePlaceHolderWrapper() {
                        popsDOMUtils.cssHide(this.$el.$selectedPlaceHolderWrapper, true);
                    },
                    /** 设置隐藏section的前面的空白 */
                    setSectionIsNear() {
                        this.$el.$section.classList.add("is-near");
                    },
                    /** 取消设置隐藏section的前面的空白 */
                    removeSectionIsNear() {
                        this.$el.$section.classList.remove("is-near");
                    },
                    /**
                     * 禁用标签
                     */
                    disable() {
                        popsDOMUtils.addClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
                        popsDOMUtils.addClassName(this.$el.$container, "pops-panel-select-disable");
                    },
                    /**
                     * 判断是否被禁用
                     */
                    isDisabled() {
                        return popsDOMUtils.containsClassName(this.$el.$container, "pops-panel-select-disable");
                    },
                    /**
                     * 取消禁用标签
                     */
                    cancleDisable() {
                        popsDOMUtils.removeClassName(this.$el.$itemLeftContainer, PopsCommonCSSClassName.textIsDisabled);
                        popsDOMUtils.removeClassName(this.$el.$container, "pops-panel-select-disable");
                    },
                };
                PopsPanelSelectMultiple.init();
                Reflect.set($li, "data-select-multiple", PopsPanelSelectMultiple);
                return {
                    $el: $li,
                    handler: PopsPanelSelectMultiple,
                };
            },
            /**
             * type ==> button
             * 获取中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_button(viewConfig) {
                const $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    leftDescriptionText = /*html*/ `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-button">
					<button class="pops-panel-button_inner" type="button">
						<i class="pops-bottom-icon"></i>
						<span class="pops-panel-button-text"></span>
					</button>
				</div>
				`);
                const PopsPanelButton = {
                    [Symbol.toStringTag]: "PopsPanelButton",
                    $ele: {
                        panelButton: $li.querySelector(".pops-panel-button"),
                        button: $li.querySelector(".pops-panel-button .pops-panel-button_inner"),
                        icon: $li.querySelector(".pops-panel-button .pops-bottom-icon"),
                        spanText: $li.querySelector(".pops-panel-button .pops-panel-button-text"),
                    },
                    $data: {},
                    init() {
                        this.$ele.panelButton.appendChild(this.$ele.button);
                        this.initButton();
                        this.onButtonClick();
                    },
                    initButton() {
                        if (typeof viewConfig.buttonIcon === "string" && viewConfig.buttonIcon.trim() !== "") {
                            // 存在icon图标且不为空
                            if (PopsIcon.hasIcon(viewConfig.buttonIcon)) {
                                this.setIconSVG(PopsIcon.getIcon(viewConfig.buttonIcon));
                            }
                            else {
                                this.setIconSVG(viewConfig.buttonIcon);
                            }
                            this.showIcon();
                        }
                        else {
                            this.hideIcon();
                        }
                        // 按钮文字
                        let buttonText = viewConfig.buttonText;
                        if (typeof viewConfig.buttonText === "function") {
                            buttonText = viewConfig.buttonText();
                        }
                        this.setButtonType(viewConfig.buttonType);
                        if (viewConfig.buttonIsRightIcon) {
                            this.setIconRight();
                        }
                        else {
                            this.setIconLeft();
                        }
                        if (viewConfig.disable) {
                            this.disable();
                        }
                        this.setButtonText(buttonText);
                        this.setIconLoadingStatus(viewConfig.buttonIconIsLoading);
                    },
                    disable() {
                        this.$ele.button.setAttribute("disabled", "true");
                    },
                    notDisable() {
                        this.$ele.button.removeAttribute("disabled");
                    },
                    /**
                     * 隐藏icon图标
                     */
                    hideIcon() {
                        this.$ele.panelButton.classList.add("pops-panel-button-no-icon");
                    },
                    /**
                     * 显示icon图标
                     */
                    showIcon() {
                        this.$ele.panelButton.classList.remove("pops-panel-button-no-icon");
                    },
                    /**
                     * 设置icon图标的svg
                     */
                    setIconSVG(svgHTML) {
                        PopsSafeUtils.setSafeHTML(this.$ele.icon, svgHTML);
                    },
                    /**
                     * 设置icon图标是否旋转
                     * @param status
                     */
                    setIconLoadingStatus(status) {
                        this.$ele.icon.setAttribute("is-loading", Boolean(status).toString());
                    },
                    /**
                     * 设置属性上是否存在icon图标
                     */
                    setHasIcon(value) {
                        this.$ele.button.setAttribute("data-icon", Boolean(value).toString());
                    },
                    /**
                     * 设置按钮类型
                     * @param typeValue
                     */
                    setButtonType(typeValue) {
                        this.$ele.button.setAttribute("data-type", typeValue);
                    },
                    /**
                     * 添加按钮的图标在右边
                     */
                    setIconRight() {
                        this.$ele.button.classList.add("pops-panel-button-right-icon");
                    },
                    /**
                     * （默认）添加按钮的图标在左边
                     */
                    setIconLeft() {
                        this.$ele.button.classList.remove("pops-panel-button-right-icon");
                    },
                    /**
                     * 设置按钮文本
                     * @param text
                     */
                    setButtonText(text) {
                        PopsSafeUtils.setSafeHTML(this.$ele.spanText, text);
                    },
                    /**
                     * 设置按钮的点击事件
                     */
                    onButtonClick() {
                        popsDOMUtils.on(this.$ele.button, "click", (event) => {
                            if (typeof viewConfig.callback === "function") {
                                viewConfig.callback(event);
                            }
                        });
                    },
                };
                PopsPanelButton.init();
                Reflect.set($li, "data-button", PopsPanelButton);
                return {
                    $el: $li,
                    handler: PopsPanelButton,
                };
            },
            /**
             * type ==> deepMenu
             * 获取深层容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_deepMenu(viewConfig) {
                const that = this;
                const $li = popsDOMUtils.createElement("li");
                popsDOMUtils.addClassName($li, "pops-panel-deepMenu-nav-item");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                // 设置属性
                this.setElementAttributes($li, viewConfig.attributes);
                // 设置元素上的属性
                this.setElementProps($li, viewConfig.props);
                // 左边底部的描述的文字
                let leftDescriptionText = "";
                if (viewConfig.description) {
                    // 设置描述
                    leftDescriptionText = `<p class="pops-panel-item-left-desc-text">${viewConfig.description}</p>`;
                }
                // 箭头图标
                const arrowRightIcon = typeof viewConfig.arrowRightIcon === "boolean" ? viewConfig.arrowRightIcon : true;
                let arrowRightIconHTML = "";
                if (arrowRightIcon) {
                    arrowRightIconHTML = `<i class="pops-panel-deepMenu-arrowRight-icon">${PopsIcon.getIcon("arrowRight")}</i>`;
                }
                let rightText = "";
                if (viewConfig.rightText) {
                    rightText = /*html*/ `<p class="pops-panel-item-right-text">${viewConfig.rightText}</p>`;
                }
                PopsSafeUtils.setSafeHTML($li, 
                /*html*/ `
				<div class="pops-panel-item-left-text">
					<p class="pops-panel-item-left-main-text">${viewConfig.text}</p>${leftDescriptionText}</div>
				<div class="pops-panel-deepMenu">${rightText}${arrowRightIconHTML}</div>
				`);
                const PopsPanelDeepMenu = {
                    [Symbol.toStringTag]: "PopsPanelDeepMenu",
                    $ele: {
                        get parentSection() {
                            return that.$el.$panelContentSectionContainer;
                        },
                    },
                    init() {
                        this.onLiClick();
                    },
                    /**
                     * 生成配置每一项的元素
                     * @param $container
                     * @param formItemConfig
                     */
                    initContainerItem($container, formItemConfig) {
                        const containerViewConfig = formItemConfig;
                        if (containerViewConfig.type === "container") {
                            const childViewConfig = containerViewConfig["views"];
                            // 每一项<li>元素
                            const $itemLi = popsDOMUtils.createElement("li");
                            // 每一项<li>内的子<ul>元素
                            const $itemUL = popsDOMUtils.createElement("ul");
                            $itemUL.classList.add("pops-panel-forms-container-item-formlist");
                            $itemLi.classList.add("pops-panel-forms-container-item");
                            // 区域头部的文字
                            const formHeaderDivElement = popsDOMUtils.createElement("div", {
                                className: "pops-panel-forms-container-item-header-text",
                            });
                            PopsSafeUtils.setSafeHTML(formHeaderDivElement, containerViewConfig["text"]);
                            if (containerViewConfig.isFold) {
                                // 添加第一个
                                // 加进容器内
                                PopsSafeUtils.setSafeHTML(formHeaderDivElement, 
                                /*html*/ `
								<p>${containerViewConfig.text}</p>
								<i class="pops-panel-forms-fold-container-icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
										<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
									</svg>
								</i>
							`);
                                // 添加点击事件
                                popsDOMUtils.on(formHeaderDivElement, "click", () => {
                                    if ($itemLi.hasAttribute("data-fold-enable")) {
                                        $itemLi.removeAttribute("data-fold-enable");
                                    }
                                    else {
                                        $itemLi.setAttribute("data-fold-enable", "");
                                    }
                                });
                                popsDOMUtils.addClassName(formHeaderDivElement, "pops-panel-forms-fold-container");
                                popsDOMUtils.addClassName(formHeaderDivElement, PopsCommonCSSClassName.userSelectNone);
                                $itemLi.setAttribute("data-fold-enable", "");
                                popsDOMUtils.addClassName(formHeaderDivElement, "pops-panel-forms-fold");
                                $itemLi.appendChild(formHeaderDivElement);
                            }
                            else {
                                // 加进容器内
                                $itemLi.appendChild(formHeaderDivElement);
                            }
                            that.setElementClassName($itemLi, formItemConfig.className);
                            that.setElementAttributes($itemLi, formItemConfig.attributes);
                            that.setElementProps($itemLi, formItemConfig.props);
                            $itemLi.appendChild($itemUL);
                            $container.appendChild($itemLi);
                            childViewConfig.forEach((childViewConfig) => {
                                that.uListContainerAddItem(childViewConfig, {
                                    ulElement: $itemUL,
                                    sectionContainerULElement: that.sectionContainerULElement,
                                    formContainerListElement: $itemLi,
                                    formHeaderDivElement: formHeaderDivElement,
                                });
                            });
                            if (typeof containerViewConfig.afterAddToUListCallBack === "function") {
                                containerViewConfig.afterAddToUListCallBack(viewConfig, {
                                    target: $itemLi,
                                    ulElement: $itemUL,
                                    sectionContainerULElement: that.sectionContainerULElement,
                                    formContainerListElement: $itemLi,
                                    formHeaderDivElement: formHeaderDivElement,
                                });
                            }
                        }
                        else {
                            // 如果成功创建，加入到中间容器中
                            that.uListContainerAddItem(viewConfig, {
                                ulElement: that.sectionContainerULElement,
                            });
                        }
                    },
                    /**
                     * 前往子菜单
                     * @param event 点击事件
                     * @param liElement 当前的<li>元素
                     */
                    async gotoDeepMenu(event, liElement) {
                        /** 当前所在的容器 */
                        const $currentSection = liElement.closest("section.pops-panel-container");
                        // 子菜单的容器
                        const $deepMenuSection = popsDOMUtils.createElement("section", {
                            className: "pops-panel-container pops-panel-deepMenu-container",
                        });
                        Reflect.set($deepMenuSection, that.$data.nodeStoreConfigKey, viewConfig);
                        const $deepMenuHeaderUL = popsDOMUtils.createElement("ul", {
                            className: "pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul",
                        });
                        const $deepMenuMain = popsDOMUtils.createElement("ul", {
                            className: "pops-panel-container-main-ul",
                        });
                        // 标题文字
                        const headerTitleText = viewConfig.headerTitle ?? viewConfig.text;
                        const $header = popsDOMUtils.createElement("li", {
                            className: "pops-panel-container-header-title-text pops-panel-deepMenu-container-header",
                            innerHTML: /*html*/ `<p class="pops-panel-deepMenu-container-header-title-text">${headerTitleText}</p>`,
                        });
                        // 返回箭头
                        const $headerLeftArrow = popsDOMUtils.createElement("i", {
                            className: "pops-panel-deepMenu-container-left-arrow-icon",
                            innerHTML: PopsIcon.getIcon("arrowLeft"),
                        });
                        // 动画配置
                        const animOptions = {
                            // 150 220 300
                            duration: 220,
                            easing: "ease-in-out",
                        };
                        // 进入动画
                        const enterViewTransition = () => {
                            // 隐藏旧的容器
                            popsDOMUtils.cssHide($currentSection, true);
                            popsDOMUtils.on($headerLeftArrow, "click", async (event) => {
                                popsDOMUtils.preventEvent(event);
                                // 返回动画
                                const leaveViewTransition = () => {
                                    const $prev = $currentSection;
                                    popsDOMUtils.cssShow($prev);
                                    $deepMenuSection.remove();
                                };
                                // 返回上一层菜单
                                if (that.$config.useDeepMenuSwtichAnimation && document.startViewTransition) {
                                    const leaveTransition = document.startViewTransition(leaveViewTransition);
                                    await leaveTransition.ready;
                                    // 向右移出
                                    await Promise.all([
                                        $deepMenuSection.animate([
                                            {
                                                // from
                                                transform: "translateX(0)",
                                            },
                                            {
                                                // to
                                                transform: "translateX(100%)",
                                            },
                                        ], animOptions).finished,
                                        // 向右移入
                                        $currentSection.animate([
                                            {
                                                // from
                                                transform: "translateX(-100%)",
                                            },
                                            {
                                                // to
                                                transform: "translateX(0)",
                                            },
                                        ], animOptions).finished,
                                    ]);
                                    await leaveTransition.finished;
                                }
                                else {
                                    leaveViewTransition();
                                }
                                that.emitRenderRightContainer($currentSection);
                            }, {
                                once: true,
                            });
                            popsDOMUtils.before($header.firstElementChild, $headerLeftArrow);
                            $deepMenuHeaderUL.appendChild($header);
                            $deepMenuSection.appendChild($deepMenuHeaderUL);
                            $deepMenuSection.appendChild($deepMenuMain);
                            if (viewConfig.views && Array.isArray(viewConfig.views)) {
                                for (let index = 0; index < viewConfig.views.length; index++) {
                                    const formItemConfig = viewConfig.views[index];
                                    this.initContainerItem($deepMenuMain, formItemConfig);
                                }
                            }
                            that.$el.$panelRightSectionWrapper.appendChild($deepMenuSection);
                        };
                        if (that.$config.useDeepMenuSwtichAnimation && document.startViewTransition) {
                            const transition = document.startViewTransition(enterViewTransition);
                            await transition.ready;
                            await $deepMenuSection.animate([
                                {
                                    // from
                                    transform: "translateX(100%)",
                                },
                                {
                                    // to
                                    transform: "translateX(0)",
                                },
                            ], animOptions).finished;
                            await transition.finished;
                        }
                        else {
                            enterViewTransition();
                        }
                        if (typeof viewConfig.afterEnterDeepMenuCallBack === "function") {
                            viewConfig.afterEnterDeepMenuCallBack(viewConfig, {
                                $sectionContainer: $deepMenuSection,
                                $sectionContainerHeaderContainer: $deepMenuHeaderUL,
                                $sectionContainerHeader: $header,
                                $sectionBodyContainer: $deepMenuMain,
                            });
                        }
                        that.emitRenderRightContainer($deepMenuSection);
                    },
                    /** 设置项的点击事件 */
                    onLiClick() {
                        popsDOMUtils.on($li, "click", async (event) => {
                            if (typeof viewConfig.clickCallBack === "function") {
                                const result = await viewConfig.clickCallBack(event, viewConfig);
                                if (result) {
                                    return;
                                }
                            }
                            await this.gotoDeepMenu(event, $li);
                        });
                    },
                };
                PopsPanelDeepMenu.init();
                Reflect.set($li, "data-deepMenu", PopsPanelDeepMenu);
                return {
                    $el: $li,
                    handler: PopsPanelDeepMenu,
                };
            },
            /**
             * type ===> own
             * 获取中间容器的元素<li>
             * @param viewConfig
             */
            createSectionContainerItem_own(viewConfig) {
                let $li = popsDOMUtils.createElement("li");
                Reflect.set($li, this.$data.nodeStoreConfigKey, viewConfig);
                this.setElementClassName($li, viewConfig.className);
                this.setElementAttributes($li, viewConfig.attributes);
                this.setElementProps($li, viewConfig.props);
                $li = viewConfig.createLIElement($li);
                return {
                    $el: $li,
                };
            },
            /**
             * 获取中间容器的元素<li>
             * @param viewConfig 视图配置
             */
            createSectionContainerItem(viewConfig) {
                /** 配置项的类型 */
                const componentType = viewConfig.type;
                if (componentType === "switch") {
                    return this.createSectionContainerItem_switch(viewConfig);
                }
                else if (componentType === "slider") {
                    return this.createSectionContainerItem_slider(viewConfig);
                }
                else if (componentType === "input") {
                    return this.createSectionContainerItem_input(viewConfig);
                }
                else if (componentType === "textarea") {
                    return this.createSectionContainerItem_textarea(viewConfig);
                }
                else if (componentType === "select") {
                    return this.createSectionContainerItem_select(viewConfig);
                }
                else if (componentType === "select-multiple") {
                    return this.createSectionContainerItem_select_multiple(viewConfig);
                }
                else if (componentType === "button") {
                    return this.createSectionContainerItem_button(viewConfig);
                }
                else if (componentType === "deepMenu") {
                    return this.createSectionContainerItem_deepMenu(viewConfig);
                }
                else if (componentType === "own") {
                    return this.createSectionContainerItem_own(viewConfig);
                }
                else {
                    console.error("尚未实现的type类型", viewConfig);
                }
            },
            /**
             * 生成配置项forms
             * 生成配置每一项的元素
             * @param viewConfig
             */
            createSectionContainerItem_forms(viewConfig) {
                const that = this;
                const containerConfig = viewConfig;
                if (containerConfig.type === "container") {
                    const childForms = viewConfig["views"];
                    // 每一项<li>元素
                    const formContainerListElement = popsDOMUtils.createElement("li");
                    // 每一项<li>内的子<ul>元素
                    const formContainerULElement = popsDOMUtils.createElement("ul");
                    formContainerListElement.classList.add("pops-panel-forms-container-item");
                    formContainerULElement.classList.add("pops-panel-forms-container-item-formlist");
                    // 区域头部的文字
                    const formHeaderDivElement = popsDOMUtils.createElement("div", {
                        className: "pops-panel-forms-container-item-header-text",
                    });
                    PopsSafeUtils.setSafeHTML(formHeaderDivElement, containerConfig["text"]);
                    if (containerConfig.isFold) {
                        // 加进容器内
                        PopsSafeUtils.setSafeHTML(formHeaderDivElement, 
                        /*html*/ `
						<p>${containerConfig.text}</p>
						<i class="pops-panel-forms-fold-container-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
								<path d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
							</svg>
						</i>
					`);
                        // 添加点击事件
                        popsDOMUtils.on(formHeaderDivElement, "click", () => {
                            if (formContainerListElement.hasAttribute("data-fold-enable")) {
                                formContainerListElement.removeAttribute("data-fold-enable");
                            }
                            else {
                                formContainerListElement.setAttribute("data-fold-enable", "");
                            }
                        });
                        popsDOMUtils.addClassName(formHeaderDivElement, "pops-panel-forms-fold-container");
                        popsDOMUtils.addClassName(formHeaderDivElement, PopsCommonCSSClassName.userSelectNone);
                        formContainerListElement.setAttribute("data-fold-enable", "");
                        popsDOMUtils.addClassName(formContainerListElement, "pops-panel-forms-fold");
                        formContainerListElement.appendChild(formHeaderDivElement);
                    }
                    else {
                        // 加进容器内
                        formContainerListElement.appendChild(formHeaderDivElement);
                    }
                    that.setElementClassName(formContainerListElement, viewConfig.className);
                    that.setElementAttributes(formContainerListElement, viewConfig.attributes);
                    that.setElementProps(formContainerListElement, viewConfig.props);
                    childForms.forEach((childViewConfig) => {
                        that.uListContainerAddItem(childViewConfig, {
                            ulElement: formContainerULElement,
                            sectionContainerULElement: that.sectionContainerULElement,
                            formContainerListElement: formContainerListElement,
                            formHeaderDivElement: formHeaderDivElement,
                        });
                    });
                    formContainerListElement.appendChild(formContainerULElement);
                    that.sectionContainerULElement.appendChild(formContainerListElement);
                    if (typeof containerConfig.afterAddToUListCallBack === "function") {
                        containerConfig.afterAddToUListCallBack(containerConfig, {
                            target: formContainerListElement,
                            ulElement: formContainerULElement,
                            sectionContainerULElement: that.sectionContainerULElement,
                            formContainerListElement: formContainerListElement,
                            formHeaderDivElement: formHeaderDivElement,
                        });
                    }
                }
                else {
                    // 如果成功创建，加入到中间容器中
                    that.uListContainerAddItem(viewConfig, {
                        ulElement: that.sectionContainerULElement,
                    });
                }
            },
            /**
             * 主动触发触发渲染右侧容器的事件
             * @param $container 容器
             */
            emitRenderRightContainer($container) {
                const dataViewConfig = Reflect.get($container, this.$data.nodeStoreConfigKey);
                this.$el.$pops.dispatchEvent(new CustomEvent("pops:renderRightContainer", {
                    detail: {
                        viewConfig: dataViewConfig,
                    },
                }));
            },
            /**
             *
             * @param viewConfig
             * @param containerOptions
             */
            uListContainerAddItem(viewConfig, containerOptions) {
                const itemInfo = this.createSectionContainerItem(viewConfig);
                if (itemInfo) {
                    containerOptions["ulElement"].appendChild(itemInfo.$el);
                }
                if (typeof viewConfig.afterAddToUListCallBack === "function") {
                    viewConfig.afterAddToUListCallBack(viewConfig, {
                        ...containerOptions,
                        target: itemInfo?.$el,
                    });
                }
            },
            /**
             * 为左侧容器元素添加点击事件
             * @param $asideItem 左侧的容器<li>元素
             * @param asideConfig 配置
             */
            onAsideItemClick($asideItem, asideConfig) {
                popsDOMUtils.on($asideItem, "click", async (event) => {
                    if (typeof asideConfig.clickFirstCallback === "function") {
                        const clickFirstCallbackResult = await asideConfig.clickFirstCallback(event, this.sectionContainerHeaderULElement, this.sectionContainerULElement);
                        if (typeof clickFirstCallbackResult === "boolean" && !clickFirstCallbackResult) {
                            return;
                        }
                    }
                    this.clearContainer();
                    const rightContainerViewConfig = Reflect.get($asideItem, "__forms__");
                    Reflect.set(this.$el.$panelContentSectionContainer, this.$data.nodeStoreConfigKey, rightContainerViewConfig);
                    popsDOMUtils.cssShow(this.$el.$panelContentSectionContainer);
                    this.clearAsideItemIsVisited();
                    this.setAsideItemIsVisited($asideItem);
                    // 顶部标题栏，存在就设置
                    const title = typeof asideConfig.title === "function" ? asideConfig.title() : asideConfig.title;
                    let headerTitleText = typeof asideConfig.headerTitle === "function" ? asideConfig.headerTitle() : asideConfig.headerTitle;
                    headerTitleText = headerTitleText ?? title;
                    if (typeof headerTitleText === "string" && headerTitleText.trim() !== "") {
                        const $containerHeaderTitle = popsDOMUtils.createElement("li");
                        $containerHeaderTitle.classList.add("pops-panel-container-header-title-text");
                        Reflect.set($containerHeaderTitle, "__asideConfig__", asideConfig);
                        PopsSafeUtils.setSafeHTML($containerHeaderTitle, headerTitleText);
                        this.sectionContainerHeaderULElement.appendChild($containerHeaderTitle);
                    }
                    rightContainerViewConfig.forEach((viewConfig) => {
                        this.createSectionContainerItem_forms(viewConfig);
                    });
                    if (typeof asideConfig.clickCallback === "function") {
                        // 执行回调
                        const asideClickCallbackResult = await asideConfig.clickCallback(event, this.sectionContainerHeaderULElement, this.sectionContainerULElement);
                        if (typeof asideClickCallbackResult === "boolean" && !asideClickCallbackResult) {
                            return;
                        }
                    }
                    this.emitRenderRightContainer(this.$el.$panelContentSectionContainer);
                });
            },
        };
    };

    const PopsPanel = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "panel";
            let config = PopsPanelDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "ninePalaceGridPosition",
                    css: PopsCSS.ninePalaceGridPosition,
                },
                {
                    name: "scrollbar",
                    css: PopsCSS.scrollbar,
                },
                {
                    name: "button",
                    css: PopsCSS.button,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "panelCSS",
                    css: PopsCSS.panelCSS,
                },
            ]);
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex);
            const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
            const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
            const animHTML = PopsElementHandler.createAnim(guid, popsType, config, 
            /*html*/ `
			<div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${config.title.html
            ? config.title.text
            : `<p pops class="pops-${popsType}-title-text" class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`}${headerBtnHTML}</div>
			<div class="pops-content pops-${popsType}-content">
				<aside class="pops-${popsType}-aside pops-user-select-none">
					<ul class="pops-${popsType}-aside-top-container"></ul>
					<ul class="pops-${popsType}-aside-bottom-container"></ul>
				</aside>
				<div class="pops-${popsType}-section-wrapper">
					<section class="pops-${popsType}-container">
						<ul class="pops-${popsType}-container-header-ul"></ul>
						<ul class="pops-${popsType}-container-main-ul"></ul>
					</section>
				</div>
			</div>
      <div class="pops-${popsType}-bottom-wrapper">
        <section class="pops-${popsType}-bottom-container">
          <ul class="pops-${popsType}-bottom-left-container"></ul>
          <ul class="pops-${popsType}-bottom-right-container"></ul>
        </section>
      </div>
      `, "", zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            // 结构元素
            const { $pops, $headerBtnClose, $title, $content, $panelRightSectionWrapper, $panelLeftAside, $panelContentSectionContainer, $panelBottomWrapper, $panelBottomContainer, $panelBottomLeftContainer, $panelBottomRightContainer, } = PopsHandler.handleQueryElement($anim, popsType);
            if (config.isMobile || popsUtils.isPhone()) {
                popsDOMUtils.addClassName($pops, config.mobileClassName);
            }
            /**
             * 遮罩层元素
             */
            let $mask = void 0;
            /**
             * 已创建的元素列表
             */
            const $elList = [$anim];
            // 遮罩层元素
            if (config.mask.enable) {
                const handleMask = PopsHandler.handleMask({
                    type: popsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            // 处理返回的配置
            const evtConfig = PopsHandler.handleEventConfig(config, guid, $shadowContainer, $shadowRoot, popsType, $anim, $pops, $mask);
            const result = PopsHandler.handleResultConfig(evtConfig);
            // 为顶部右边的关闭按钮添加点击事件
            PopsHandler.handleClickEvent("close", $headerBtnClose, evtConfig, config.btn?.close?.callback);
            // 创建到页面中
            popsDOMUtils.append($shadowRoot, $elList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            // 追加遮罩层元素
            if ($mask != null) {
                $anim.after($mask);
            }
            const panelHandlerComponents = PanelHandlerComponents();
            /**
             * 处理内部配置
             */
            panelHandlerComponents.init({
                config: config,
                $el: {
                    $pops,
                    $content,
                    $panelRightSectionWrapper,
                    $panelLeftAside,
                    $panelContentSectionContainer,
                    $panelBottomWrapper,
                    $panelBottomContainer,
                    $panelBottomLeftContainer,
                    $panelBottomRightContainer,
                },
            });
            PopsHandler.handlePush(popsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                config: config,
                destory: result.close,
            });
            // 拖拽
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            return {
                ...result,
                addEventListener: (event, listener, options) => {
                    $pops.addEventListener(event, listener, options);
                },
                removeEventListener: (event, listener, options) => {
                    $pops.removeEventListener(event, listener, options);
                },
            };
        },
    };

    const PopsPromptDefaultConfig = () => {
        return {
            title: {
                text: "默认标题",
                position: "left",
                html: false,
                style: "",
            },
            content: {
                text: "",
                select: false,
                password: false,
                row: false,
                focus: true,
                placeholder: "默认提示",
                style: "",
            },
            btn: {
                merge: false,
                mergeReverse: false,
                reverse: false,
                position: "flex-end",
                ok: {
                    enable: true,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "确定",
                    type: "success",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                cancel: {
                    enable: true,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "关闭",
                    type: "default",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                other: {
                    enable: false,
                    size: void 0,
                    icon: void 0,
                    rightIcon: false,
                    iconIsLoading: false,
                    text: "其它按钮",
                    type: "default",
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
                close: {
                    enable: true,
                    callback(eventConfig) {
                        eventConfig.close();
                    },
                },
            },
            useShadowRoot: true,
            class: "",
            only: false,
            width: window.innerWidth < 550 ? "88vw" : "350px",
            height: window.innerHeight < 450 ? "70vh" : "200px",
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
            dragMoveCallBack() { },
            dragEndCallBack() { },
            forbiddenScroll: false,
            style: null,
            beforeAppendToPageCallBack() { },
        };
    };

    const PopsPrompt = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "prompt";
            let config = PopsPromptDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "ninePalaceGridPosition",
                    css: PopsCSS.ninePalaceGridPosition,
                },
                {
                    name: "scrollbar",
                    css: PopsCSS.scrollbar,
                },
                {
                    name: "button",
                    css: PopsCSS.button,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "promptCSS",
                    css: PopsCSS.promptCSS,
                },
            ]);
            // 先把z-index提取出来
            const zIndex = PopsHandler.handleZIndex(config.zIndex);
            const maskHTML = PopsElementHandler.createMask(guid, zIndex);
            const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
            const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
            const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
            const { contentPStyle } = PopsElementHandler.createContentStyle(popsType, config);
            const animHTML = PopsElementHandler.createAnim(guid, popsType, config, 
            /*html*/ `
            <div class="pops-title pops-${popsType}-title" style="text-align: ${config.title.position};${headerStyle}">${config.title.html
            ? config.title.text
            : `<p pops class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`}${headerBtnHTML}</div>
            <div class="pops-content pops-${popsType}-content" style="${contentPStyle}">${config.content.row
            ? '<textarea name="pops-input-text" pops="" placeholder="' +
                config.content.placeholder +
                '"></textarea>'
            : '<input name="pops-input-text" pops="" placeholder="' +
                config.content.placeholder +
                '" type="' +
                (config.content.password ? "password" : "text") +
                '">'}</div>${bottomBtnHTML}`, bottomBtnHTML, zIndex);
            /**
             * 弹窗的主元素，包括动画层
             */
            const $anim = PopsElementHandler.parseElement(animHTML);
            const { $pops: $pops, $input: $input, $headerBtnClose: $btnClose, $btnOk: $btnOk, $btnCancel: $btnCancel, $btnOther: $btnOther, $title: $title, } = PopsHandler.handleQueryElement($anim, popsType);
            /**
             * 遮罩层元素
             */
            let $mask = void 0;
            /**
             * 已创建的元素列表
             */
            const $elList = [$anim];
            if (config.mask.enable) {
                // 启用遮罩层
                const handleMask = PopsHandler.handleMask({
                    type: popsType,
                    guid: guid,
                    config: config,
                    animElement: $anim,
                    maskHTML: maskHTML,
                });
                $mask = handleMask.maskElement;
                $elList.push($mask);
            }
            const evtConfig = PopsHandler.handleEventConfig(config, guid, $shadowContainer, $shadowRoot, popsType, $anim, $pops, $mask);
            const result = PopsHandler.handleResultConfig(evtConfig);
            // 输入框赋值初始值
            $input.value = config.content.text;
            PopsHandler.handlePromptClickEvent("close", $input, $btnClose, evtConfig, config.btn.close.callback);
            PopsHandler.handlePromptClickEvent("ok", $input, $btnOk, evtConfig, config.btn.ok.callback);
            PopsHandler.handlePromptClickEvent("cancel", $input, $btnCancel, evtConfig, config.btn.cancel.callback);
            PopsHandler.handlePromptClickEvent("other", $input, $btnOther, evtConfig, config.btn.other.callback);
            // 创建到页面中
            popsDOMUtils.append($shadowRoot, $elList);
            if (typeof config.beforeAppendToPageCallBack === "function") {
                config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
            }
            popsDOMUtils.appendBody($shadowContainer);
            if ($mask != null) {
                $anim.after($mask);
            }
            PopsHandler.handlePush(popsType, {
                guid: guid,
                $anim: $anim,
                $pops: $pops,
                $mask: $mask,
                $shadowContainer: $shadowContainer,
                $shadowRoot: $shadowRoot,
                config: config,
                destory: result.close,
            });
            // 拖拽
            if (config.drag) {
                PopsInstanceUtils.drag($pops, {
                    dragElement: $title,
                    limit: config.dragLimit,
                    extraDistance: config.dragExtraDistance,
                    moveCallBack: config.dragMoveCallBack,
                    endCallBack: config.dragEndCallBack,
                });
            }
            // 设置自动获取焦点
            if (config.content.focus) {
                $input.focus();
            }
            // 设置自动选中所有文字
            if (config.content.select) {
                $input.select();
            }
            return result;
        },
    };

    const PopsRightClickMenuDefaultConfig = () => {
        return {
            $target: document.documentElement,
            targetSelector: null,
            position: "fixed",
            data: [
                {
                    icon: PopsIcon.getIcon("search"),
                    iconIsLoading: false,
                    text: "搜索",
                    item: [],
                    callback(clickEvent, contextMenuEvent, $li) {
                        console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                    },
                },
                {
                    icon: PopsIcon.getIcon("documentCopy"),
                    iconIsLoading: false,
                    text: "复制",
                    item: [],
                    callback(clickEvent, contextMenuEvent, $li) {
                        console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                    },
                },
                {
                    icon: PopsIcon.getIcon("delete"),
                    text: "删除",
                    iconIsLoading: false,
                    item: [],
                    callback(clickEvent, contextMenuEvent, $li) {
                        console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                    },
                },
                {
                    icon: PopsIcon.getIcon("loading"),
                    iconIsLoading: true,
                    text: "加载",
                    item: [],
                    callback(clickEvent, contextMenuEvent, $li) {
                        console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                        return false;
                    },
                },
                {
                    icon: PopsIcon.getIcon("elemePlus"),
                    iconIsLoading: true,
                    text: "饿了么",
                    callback(clickEvent, contextMenuEvent, $li) {
                        console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                        return false;
                    },
                    item: [
                        {
                            icon: "",
                            iconIsLoading: false,
                            text: "处理文件",
                            item: [],
                            callback(clickEvent, contextMenuEvent, $li) {
                                console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                            },
                        },
                        {
                            icon: "",
                            iconIsLoading: false,
                            text: "其它处理",
                            callback(clickEvent, contextMenuEvent, $li) {
                                console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                                return false;
                            },
                            item: [
                                {
                                    icon: PopsIcon.getIcon("view"),
                                    iconIsLoading: false,
                                    text: "查看",
                                    item: [],
                                    callback(clickEvent, contextMenuEvent, $li) {
                                        console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            chileMenuLeftOrRightDistance: 0,
            childMenuTopOrBottomDistance: 0,
            useShadowRoot: true,
            className: "",
            isAnimation: false,
            useScaleAnimation: true,
            only: false,
            zIndex: 10000,
            preventDefault: true,
            style: null,
            beforeAppendToPageCallBack() { },
            limitPositionXInView: true,
            limitPositionYInView: true,
            beforeShowCallBack() { },
        };
    };

    const PopsRightClickMenu = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "rightClickMenu";
            let config = PopsRightClickMenuDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            config = PopsHandler.handleOnly(popsType, config);
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
                {
                    name: "rightClickMenu",
                    css: PopsCSS.rightClickMenu,
                },
            ]);
            if (config.style != null) {
                const $css = popsDOMUtils.createElement("style", {
                    innerHTML: config.style,
                }, {
                    type: "text/css",
                });
                $shadowRoot.appendChild($css);
            }
            const PopsContextMenu = {
                $data: {
                    menuDataKey: "data-menu",
                },
                $el: {
                    $root: null,
                },
                /**
                 * 全局点击检测
                 * @param event
                 */
                windowCheckClickEvent(event) {
                    if (!PopsContextMenu.$el.$root) {
                        return;
                    }
                    const $click = event.target;
                    if ($click.closest(`.pops-${popsType}`)) {
                        return;
                    }
                    if ($click.className && $click.className === "pops-shadow-container" && $click.shadowRoot != null) {
                        // pops的shadow-container
                        PopsContextMenu.shadowRootCheckClickEvent(event);
                        return;
                    }
                    PopsContextMenu.closeAllMenu(PopsContextMenu.$el.$root);
                },
                /**
                 * target为shadowRoot或shadowRoot内的全局点击检测
                 * @param event
                 */
                shadowRootCheckClickEvent(event) {
                    if (!PopsContextMenu.$el.$root) {
                        return;
                    }
                    const $click = event.composedPath()[0];
                    if ($click.closest(`.pops-${popsType}`)) {
                        return;
                    }
                    PopsContextMenu.closeAllMenu(PopsContextMenu.$el.$root);
                },
                /**
                 * 添加全局点击检测事件
                 */
                addWindowCheckClickListener() {
                    popsDOMUtils.on(globalThis, "click touchstart", PopsContextMenu.windowCheckClickEvent, {
                        capture: true,
                    });
                    if (config.$target instanceof Node) {
                        const $shadowRoot = config.$target.getRootNode();
                        if ($shadowRoot instanceof ShadowRoot) {
                            popsDOMUtils.on($shadowRoot, "click touchstart", PopsContextMenu.shadowRootCheckClickEvent, {
                                capture: true,
                            });
                        }
                    }
                },
                /**
                 * 移除全局点击检测事件
                 */
                removeWindowCheckClickListener() {
                    popsDOMUtils.off(globalThis, "click touchstart", PopsContextMenu.windowCheckClickEvent, {
                        capture: true,
                    });
                    if (config.$target instanceof Node) {
                        const $shadowRoot = config.$target.getRootNode();
                        if ($shadowRoot instanceof ShadowRoot) {
                            popsDOMUtils.off($shadowRoot, "click touchstart", PopsContextMenu.windowCheckClickEvent, {
                                capture: true,
                            });
                        }
                    }
                },
                /**
                 * contextmenu事件
                 * @param event
                 * @param selectorTarget
                 */
                async contextMenuEvent(event, selectorTarget) {
                    if (config.preventDefault) {
                        popsDOMUtils.preventEvent(event);
                    }
                    PopsHandler.handleOnly(popsType, config);
                    if (PopsContextMenu.$el.$root) {
                        PopsContextMenu.closeAllMenu(PopsContextMenu.$el.$root);
                    }
                    selectorTarget = selectorTarget ?? config.$target;
                    const beforeShowCallBackResult = await config?.beforeShowCallBack(event);
                    if (typeof beforeShowCallBackResult === "boolean" && !beforeShowCallBackResult) {
                        return;
                    }
                    const rootElement = PopsContextMenu.showMenu(event, config.data, selectorTarget);
                    PopsContextMenu.$el.$root = rootElement;
                    if (config.only) {
                        PopsHandler.handlePush(popsType, {
                            $shadowRoot: $shadowRoot,
                            $shadowContainer: $shadowContainer,
                            guid: guid,
                            $anim: rootElement,
                            $pops: rootElement,
                            beforeRemoveCallBack(instCommonConfig) {
                                PopsContextMenu.closeAllMenu(instCommonConfig.$pops);
                            },
                            config: config,
                            destory: () => {
                                PopsContextMenu.closeAllMenu(rootElement);
                            },
                        });
                    }
                },
                /**
                 * 添加contextmenu事件
                 * @param target 目标
                 * @param selector 子元素选择器
                 */
                addContextMenuEvent(target, selector) {
                    popsDOMUtils.on(target, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
                },
                /**
                 * 移除contextmenu事件
                 * @param target 目标
                 * @param selector 子元素选择器
                 */
                removeContextMenuEvent(target, selector) {
                    popsDOMUtils.off(target, "contextmenu", selector, PopsContextMenu.contextMenuEvent);
                },
                /**
                 * 自动判断是否存在动画，存在动画就执行关闭动画并删除
                 * @param $menu
                 */
                animationCloseMenu($menu) {
                    /**
                     * 动画结束触发的事件
                     */
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const transitionEndEvent = (event) => {
                        popsDOMUtils.off($menu, popsDOMUtils.getTransitionEndNameList(), transitionEndEvent, {
                            capture: true,
                        });
                        $menu.remove();
                    };
                    if (popsDOMUtils.containsClassName($menu, `pops-${popsType}-anim-show`)) {
                        // 有动画
                        popsDOMUtils.on($menu, popsDOMUtils.getTransitionEndNameList(), transitionEndEvent, {
                            capture: true,
                        });
                        popsDOMUtils.removeClassName($menu, `pops-${popsType}-anim-show`);
                    }
                    else if (popsDOMUtils.containsClassName($menu, `pops-${popsType}-anim-scale`) &&
                        popsDOMUtils.containsClassName($menu, `pops-${popsType}-anim-scale-open`)) {
                        // 有动画
                        popsDOMUtils.on($menu, popsDOMUtils.getTransitionEndNameList(), transitionEndEvent, {
                            capture: true,
                        });
                        popsDOMUtils.removeClassName($menu, `pops-${popsType}-anim-scale-open`);
                        popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale-not-open`);
                    }
                    else {
                        // 无动画
                        $menu.remove();
                    }
                },
                /**
                 * 关闭所有菜单
                 * @param $root
                 */
                closeAllMenu($root) {
                    if ($root == null) {
                        return;
                    }
                    const rootElementMenuData = Reflect.get($root, PopsContextMenu.$data.menuDataKey);
                    if (rootElementMenuData?.root) {
                        $root = rootElementMenuData.root;
                    }
                    const childMenuList = rootElementMenuData.child;
                    childMenuList.forEach((childMenuElement) => {
                        this.animationCloseMenu(childMenuElement);
                    });
                    this.animationCloseMenu($root);
                    PopsContextMenu.$el.$root = null;
                },
                /**
                 * 获取菜单容器
                 * @param isChildren 是否是rightClickMenu的某一项的子菜单
                 */
                createMenuContainerElement(isChildren) {
                    const $menu = popsDOMUtils.createElement("div", {
                        className: `pops-${popsType}`,
                        innerHTML: /*html*/ `<ul class="pops-${popsType}-wrapper"></ul>`,
                    }, {
                        "data-position": config.position,
                    });
                    const zIndex = this.getMenuZIndex();
                    if (zIndex > 10000) {
                        $menu.style.zIndex = zIndex.toString();
                    }
                    if (isChildren) {
                        $menu.setAttribute("is-children", "true");
                    }
                    // 添加动画
                    if (config.isAnimation) {
                        popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-grid`);
                    }
                    // 添加放大动画
                    if (config.useScaleAnimation) {
                        popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale`);
                        popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale-not-open`);
                    }
                    return $menu;
                },
                /**
                 * 动态获取配的z-index
                 */
                getMenuZIndex() {
                    return PopsHandler.handleZIndex(config.zIndex);
                },
                /**
                 * 获取left、top偏移
                 * @param $menu 当前生成的菜单元素
                 * @param mousePosition 鼠标位置信息
                 * @param isMainMenu 是否是主菜单
                 */
                getOffset($menu, mousePosition, parentInfo) {
                    const result = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    };
                    const menuElementWidth = popsDOMUtils.width($menu);
                    const menuElementHeight = popsDOMUtils.height($menu);
                    /**
                     * 限制的间隙距离
                     */
                    const limitDistance = 1;
                    let maxPageLeftOffset = popsDOMUtils.width(globalThis) - limitDistance;
                    let maxPageTopOffset = popsDOMUtils.height(globalThis) - limitDistance;
                    if (config.position === "absolute") {
                        // 添加滚动距离
                        maxPageLeftOffset += globalThis.scrollX;
                        maxPageTopOffset += globalThis.scrollY;
                    }
                    // left最大偏移
                    const maxLeftOffset = maxPageLeftOffset - menuElementWidth;
                    // top最大偏移
                    const maxTopOffset = maxPageTopOffset - menuElementHeight;
                    const chileMenuLeftOrRightDistance = config.chileMenuLeftOrRightDistance;
                    const childMenuTopOrBottomDistance = config.childMenuTopOrBottomDistance;
                    let currentLeftOffset = mousePosition.x;
                    let currentTopOffset = mousePosition.y;
                    currentLeftOffset = currentLeftOffset < 0 ? 0 : currentLeftOffset;
                    currentTopOffset = currentTopOffset < 0 ? 0 : currentTopOffset;
                    // 不允许超出left最大值
                    if (config.limitPositionXInView && currentLeftOffset + chileMenuLeftOrRightDistance >= maxLeftOffset) {
                        // 超过，那么子菜单将会在放在左边
                        // 偏移计算方式就是父菜单的右偏移+父菜单的宽度
                        if (parentInfo) {
                            // 子菜单
                            const mainMenuOffset = popsDOMUtils.offset(parentInfo.$menu);
                            currentLeftOffset = maxPageLeftOffset - mainMenuOffset.left - chileMenuLeftOrRightDistance + limitDistance;
                        }
                        else {
                            // 主菜单 默认的
                            currentLeftOffset = limitDistance + chileMenuLeftOrRightDistance;
                        }
                        if (currentLeftOffset < 0) {
                            currentLeftOffset = 0;
                        }
                        else if (currentLeftOffset > maxLeftOffset) {
                            currentLeftOffset = maxLeftOffset;
                        }
                        // 去除左偏移，变为右偏移
                        result.right = currentLeftOffset;
                        Reflect.deleteProperty(result, "left");
                    }
                    else {
                        // 右边
                        currentLeftOffset = currentLeftOffset + chileMenuLeftOrRightDistance;
                        result.left = currentLeftOffset;
                        Reflect.deleteProperty(result, "right");
                    }
                    // 不允许超出top最大值
                    if (config.limitPositionYInView && currentTopOffset + childMenuTopOrBottomDistance >= maxTopOffset) {
                        // 超过，那么子菜单将会在放在上面
                        if (parentInfo) {
                            // 以项的top偏移为基准
                            const parentItemOffset = popsDOMUtils.offset(parentInfo.$parentItem, false);
                            currentTopOffset =
                                maxPageTopOffset - parentItemOffset.bottom - childMenuTopOrBottomDistance + limitDistance;
                        }
                        else {
                            currentTopOffset = limitDistance + childMenuTopOrBottomDistance;
                        }
                        if (currentTopOffset < 0) {
                            currentTopOffset = limitDistance;
                        }
                        else if (currentTopOffset > maxTopOffset) {
                            currentTopOffset = maxTopOffset;
                        }
                        // 去除上偏移，变为下偏移
                        result.bottom = currentTopOffset;
                        Reflect.deleteProperty(result, "top");
                    }
                    else {
                        currentTopOffset = currentTopOffset + childMenuTopOrBottomDistance;
                        // 底部偏移
                        result.top = currentTopOffset;
                        Reflect.deleteProperty(result, "bottom");
                    }
                    return result;
                },
                /**
                 * 显示菜单
                 * @param menuEvent 触发的事件
                 * @param dataConfig
                 * @param $listenerRootNode 右键菜单监听的元素
                 */
                showMenu(menuEvent, dataConfig, $listenerRootNode) {
                    const menuElement = this.createMenuContainerElement(false);
                    Reflect.set(menuElement, PopsContextMenu.$data.menuDataKey, {
                        child: [],
                    });
                    // 添加子元素
                    PopsContextMenu.addMenuLiELement(menuEvent, menuElement, menuElement, dataConfig, $listenerRootNode);
                    // 添加到页面
                    popsDOMUtils.append($shadowRoot, menuElement);
                    // 判断容器是否存在
                    if (!document.contains($shadowContainer)) {
                        if (typeof config.beforeAppendToPageCallBack === "function") {
                            config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
                        }
                        popsDOMUtils.appendBody($shadowContainer);
                    }
                    this.handlerShowMenuCSS(menuElement, menuEvent);
                    return menuElement;
                },
                /**
                 * 显示子菜单
                 * @param menuEvent 事件
                 * @param posInfo 位置信息
                 * @param  dataConfig
                 * @param $root 根菜单元素
                 * @param $targetLi 父li项元素
                 * @param $listenerRootNode 右键菜单监听的元素
                 */
                showClildMenu(menuEvent, posInfo, dataConfig, $root, $targetLi, $listenerRootNode) {
                    const menuElement = this.createMenuContainerElement(true);
                    Reflect.set(menuElement, PopsContextMenu.$data.menuDataKey, {
                        parent: $targetLi,
                        root: $root,
                    });
                    // 根菜单数据
                    const rootElementMenuData = Reflect.get($root, PopsContextMenu.$data.menuDataKey);
                    rootElementMenuData.child.push(menuElement);
                    // 添加子元素
                    PopsContextMenu.addMenuLiELement(menuEvent, $root, menuElement, dataConfig, $listenerRootNode);
                    // 添加到页面
                    popsDOMUtils.append($shadowRoot, menuElement);
                    const $parentMenu = $targetLi.closest(".pops-rightClickMenu");
                    this.handlerShowMenuCSS(menuElement, posInfo, {
                        $menu: $parentMenu,
                        $parentItem: $targetLi,
                    });
                    return menuElement;
                },
                /**
                 * 处理菜单显示的css样式（添加到页面后）
                 * @param $menu 菜单元素
                 * @param posInfo 菜单位置信息
                 * @param parentInfo 配置子菜单的父级信息
                 */
                handlerShowMenuCSS($menu, posInfo, parentInfo) {
                    const offset = this.getOffset($menu, {
                        x: posInfo.clientX,
                        y: posInfo.clientY,
                    }, parentInfo);
                    // 显示
                    popsDOMUtils.css($menu, {
                        ...offset,
                    });
                    // 过渡动画
                    if (config.isAnimation) {
                        popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-show`);
                    }
                    if (config.useScaleAnimation) {
                        popsDOMUtils.removeClassName($menu, `pops-${popsType}-anim-scale-not-open`);
                        popsDOMUtils.addClassName($menu, `pops-${popsType}-anim-scale-open`);
                    }
                },
                /**
                 * 获取菜单项的元素
                 * @param menuEvent 事件
                 * @param $root 根元素
                 * @param $menu 菜单元素
                 * @param dataConfig 配置
                 * @param $listenerRootNode 右键菜单监听的元素
                 */
                addMenuLiELement(menuEvent, $root, $menu, dataConfig, $listenerRootNode) {
                    const menuEventTarget = menuEvent.target;
                    const menuULElement = $menu.querySelector("ul");
                    dataConfig.forEach((item) => {
                        const menuLiElement = popsDOMUtils.parseTextToDOM(`<li></li>`);
                        // 判断有无图标，有就添加进去
                        if (typeof item.icon === "string" && item.icon.trim() !== "") {
                            const iconSVGHTML = PopsIcon.getIcon(item.icon) ?? item.icon;
                            const iconElement = popsDOMUtils.parseTextToDOM(
                            /*html*/ `<i class="pops-${popsType}-icon" is-loading="${item.iconIsLoading ?? false}">${iconSVGHTML}</i>`);
                            menuLiElement.appendChild(iconElement);
                        }
                        // 插入文字
                        const text = typeof item.text === "function" ? item.text() : item.text;
                        menuLiElement.insertAdjacentHTML("beforeend", PopsSafeUtils.getSafeHTML(`<span>${text}</span>`));
                        // 如果存在子数据，显示
                        if (item.item && Array.isArray(item.item)) {
                            popsDOMUtils.addClassName(menuLiElement, `pops-${popsType}-item`);
                        }
                        // 鼠标|触摸 移入事件
                        // 在移动端会先触发touchstart再然后mouseenter
                        let isEmitTouchEvent = false;
                        /**
                         * 鼠标|触摸 移入事件
                         */
                        function liElementHoverEvent(event) {
                            if (event.type === "touchstart") {
                                isEmitTouchEvent = true;
                            }
                            if (isEmitTouchEvent && event.type === "mouseenter") {
                                return;
                            }
                            Array.from(menuULElement.children).forEach((liElement) => {
                                popsDOMUtils.removeClassName(liElement, `pops-${popsType}-is-visited`);
                                const li_menuData = Reflect.get(liElement, PopsContextMenu.$data.menuDataKey);
                                if (!li_menuData) {
                                    return;
                                }
                                function removeElement($el) {
                                    if (!$el)
                                        return;
                                    $el.querySelectorAll("ul li").forEach(($ele) => {
                                        const menuData = Reflect.get($ele, PopsContextMenu.$data.menuDataKey);
                                        if (menuData?.child) {
                                            removeElement(menuData.child);
                                        }
                                    });
                                    $el.remove();
                                }
                                // 遍历根元素的上的__menuData__.child，判断
                                removeElement(li_menuData.child);
                            });
                            // 清理根元素上的children不存在于页面中的元素
                            const root_menuData = Reflect.get($root, PopsContextMenu.$data.menuDataKey);
                            for (let index = 0; index < root_menuData.child.length; index++) {
                                const element = root_menuData.child[index];
                                if (!$shadowRoot.contains(element)) {
                                    root_menuData.child.splice(index, 1);
                                    index--;
                                }
                            }
                            popsDOMUtils.addClassName(menuLiElement, `pops-${popsType}-is-visited`);
                            if (!item.item) {
                                return;
                            }
                            const rect = menuLiElement.getBoundingClientRect();
                            const childMenu = PopsContextMenu.showClildMenu(menuEvent, {
                                clientX: rect.left + popsDOMUtils.outerWidth(menuLiElement),
                                clientY: rect.top,
                            }, item.item, $root, menuLiElement, $listenerRootNode);
                            Reflect.set(menuLiElement, PopsContextMenu.$data.menuDataKey, {
                                child: childMenu,
                            });
                        }
                        /**
                         * 点击事件
                         * @param clickEvent
                         */
                        async function liElementClickEvent(clickEvent) {
                            if (typeof item.callback === "function") {
                                try {
                                    OriginPrototype.Object.defineProperty(menuEvent, "target", {
                                        get() {
                                            return menuEventTarget;
                                        },
                                    });
                                }
                                catch {
                                    // 忽略
                                }
                                const callbackResult = await item.callback(clickEvent, menuEvent, menuLiElement, $listenerRootNode);
                                if (typeof callbackResult === "boolean" && callbackResult == false) {
                                    return;
                                }
                            }
                            // 取消绑定的鼠标/触摸事件，防止关闭的时候再次触发
                            Array.from(menuULElement.children).forEach((liEle) => {
                                popsDOMUtils.off(liEle, "mouseenter touchstart");
                            });
                            PopsContextMenu.closeAllMenu($root);
                        }
                        popsDOMUtils.on(menuLiElement, "mouseenter touchstart", liElementHoverEvent);
                        // 项-点击事件
                        popsDOMUtils.on(menuLiElement, "click", liElementClickEvent);
                        menuULElement.appendChild(menuLiElement);
                    });
                },
            };
            // 添加右键菜单事件
            PopsContextMenu.addContextMenuEvent(config.$target, config.targetSelector);
            // 添加全局点击检测
            PopsContextMenu.addWindowCheckClickListener();
            return {
                guid: guid,
                config: config,
                addWindowCheckClickListener: PopsContextMenu.addWindowCheckClickListener,
                removeWindowCheckClickListener: PopsContextMenu.removeWindowCheckClickListener,
                addContextMenuEvent: PopsContextMenu.addContextMenuEvent,
                removeContextMenuEvent: PopsContextMenu.removeContextMenuEvent,
                /**
                 * 移除初始化时的添加的监听事件
                 */
                removeInitEventListener: {
                    contextMenu() {
                        PopsContextMenu.removeContextMenuEvent(config.$target, config.targetSelector);
                    },
                    windowClick() {
                        PopsContextMenu.removeWindowCheckClickListener();
                    },
                },
                /**
                 * 操作弹出菜单的对象
                 */
                PopsContextMenu: PopsContextMenu,
            };
        },
    };

    const PopsSearchSuggestionDefaultConfig = () => {
        const data = [];
        for (let index = 0; index < 10; index++) {
            data.push({
                value: `测试${index}`,
                enableDeleteButton: true,
                deleteButtonClickCallback(event, $dataItem, dataItem, config) {
                    const value = dataItem.value;
                    console.log("删除当前项：" + value, [event, $dataItem, dataItem, config]);
                    return true;
                },
                itemView(dateItem) {
                    return `${dateItem.value}-html`;
                },
                clickCallback(event, $dataItem, dataItem, config) {
                    const isUpdateInputValue = index % 2 === 0 ? true : false;
                    const value = dataItem.value;
                    if (isUpdateInputValue) {
                        console.log("item项的点击回调,更新input内的值：" + value, [event, $dataItem, dataItem, config, value]);
                    }
                    else {
                        console.log("item项的点击回调：" + value, [event, $dataItem, dataItem, config, value]);
                    }
                    return isUpdateInputValue;
                },
                selectCallback(event, $dataItem, dataItem, config) {
                    const value = dataItem.value;
                    console.log("item项的选中回调：" + value, [event, $dataItem, dataItem, config]);
                },
            });
        }
        return {
            // @ts-ignore
            $target: null,
            // @ts-ignore
            $inputTarget: null,
            $selfDocument: document,
            data: data,
            useShadowRoot: true,
            className: "",
            isAbsolute: true,
            isAnimation: false,
            useFoldAnimation: true,
            useArrow: false,
            width: "250px",
            maxHeight: "300px",
            followTargetWidth: true,
            topDistance: 0,
            position: "auto",
            positionTopToReverse: true,
            zIndex: 10000,
            searchingTip: "正在搜索中...",
            toSearhNotResultHTML: '<li data-none="true">暂无其它数据</li>',
            toHideWithNotResult: false,
            followPosition: "target",
            async inputTargetChangeRefreshShowDataCallback(value, data) {
                console.log("当前输入框的值是：", value);
                return data.filter((it) => it.value.includes(value));
            },
            style: "",
        };
    };

    const PopsSearchSuggestion = {
        init(__config__) {
            const guid = popsUtils.getRandomGUID();
            // 设置当前类型
            const popsType = "searchSuggestion";
            let config = PopsSearchSuggestionDefaultConfig();
            config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
            config = popsUtils.assign(config, __config__);
            // 如果$inputTarget为空，则根据$target
            if (config.$inputTarget == null) {
                config.$inputTarget = config.$target;
            }
            const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
            PopsHandler.handleInit($shadowRoot, [
                {
                    name: "index",
                    css: PopsCSS.index,
                },
                {
                    name: "anim",
                    css: PopsCSS.anim,
                },
                {
                    name: "common",
                    css: PopsCSS.common,
                },
            ]);
            if (config.style != null) {
                const $css = popsDOMUtils.createElement("style", {
                    type: "text/css",
                    innerHTML: config.style,
                });
                $shadowRoot.appendChild($css);
            }
            /**
             * 监听器的默认配置
             */
            const defaultListenerOption = {
                capture: true,
                passive: true,
            };
            const SearchSuggestion = {
                /**
                 * 当前的环境，可以是document，可以是shadowroot，默认是document
                 */
                selfDocument: config.$selfDocument,
                $el: {
                    /** 根元素 */
                    root: null,
                    /**
                     * 包裹ul的容器元素
                     */
                    $dropdownWrapper: null,
                    /** ul元素 */
                    $dropdownContainer: null,
                    /**
                     * 箭头元素
                     */
                    $arrow: null,
                    /** 动态更新CSS */
                    $dynamicCSS: null,
                },
                $evt: {
                    offInputChangeEvtHandler: [],
                },
                $data: {
                    /** 是否结果为空 */
                    isEmpty: true,
                    /**
                     * 存储在元素上的操作的键名
                     */
                    storeNodeHandlerKey: "data-SearchSuggestion",
                },
                /**
                 * 初始化
                 * @param $parent 父元素
                 * @example
                 * .init();
                 * .setAllEvent();
                 */
                init($parent = document.body || document.documentElement) {
                    SearchSuggestion.initEl();
                    SearchSuggestion.update(SearchSuggestion.getData());
                    SearchSuggestion.updateStyleSheet();
                    SearchSuggestion.hide();
                    $shadowRoot.appendChild(SearchSuggestion.$el.root);
                    $parent.appendChild($shadowContainer);
                },
                /**
                 * 初始化元素变量
                 */
                initEl() {
                    SearchSuggestion.$el.root = SearchSuggestion.createSearchSelectElement();
                    Reflect.set(SearchSuggestion.$el.root, this.$data.storeNodeHandlerKey, SearchSuggestion);
                    SearchSuggestion.$el.$dynamicCSS =
                        SearchSuggestion.$el.root.querySelector("style[data-dynamic]");
                    SearchSuggestion.$el.$dropdownWrapper = SearchSuggestion.$el.root.querySelector(`.pops-${popsType}-search-suggestion-dropdown-wrapper`);
                    SearchSuggestion.$el.$dropdownContainer = SearchSuggestion.$el.root.querySelector(`ul.pops-${popsType}-search-suggestion-dropdown-container`);
                    SearchSuggestion.$el.$arrow = SearchSuggestion.$el.root.querySelector(`.pops-${popsType}-search-suggestion-arrow`);
                },
                /**
                 * 获取数据
                 */
                getData() {
                    return typeof config.data === "function" ? config.data() : config.data;
                },
                /**
                 * 更新数据
                 * @param data 数据
                 */
                setData(data) {
                    config.data = data;
                },
                /**
                 * 获取显示出搜索建议框的html
                 */
                createSearchSelectElement() {
                    const $el = popsDOMUtils.createElement("div", {
                        className: `pops pops-${popsType}-search-suggestion`,
                        innerHTML: /*html*/ `
						<style type="text/css">
							.pops-${popsType}-animation{
								-moz-animation: searchSelectFalIn 0.5s 1 linear;
								-webkit-animation: searchSelectFalIn 0.5s 1 linear;
								-o-animation: searchSelectFalIn 0.5s 1 linear;
								-ms-animation: searchSelectFalIn 0.5s 1 linear;
							}
						</style>
						<style type="text/css">
							.pops-${popsType}-search-suggestion-arrow{
								--suggestion-arrow-box-shadow-left-color: rgba(0, 0, 0, 0.24);
								--suggestion-arrow-box-shadow-right-color: rgba(0, 0, 0, 0.12);
								--suggestion-arrow--after-color: rgb(78, 78, 78);
								--suggestion-arrow--after-bg-color: rgb(255, 255, 255, var(--pops-bg-opacity));
								--suggestion-arrow--after-width: 10px;
								--suggestion-arrow--after-height: 10px;
							}
							.pops-${popsType}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${popsType}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								color: var(--suggestion-arrow--after-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="top"] .pops-${popsType}-search-suggestion-arrow{
								position: absolute;
								top: 100%;
								left: 50%;
								overflow: hidden;
								width: 100%;
								height: 12.5px;
								transform: translateX(-50%);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="top"] .pops-${popsType}-search-suggestion-arrow::after{
								position: absolute;
								top: 0;
								left: 50%;
								width: var(--suggestion-arrow--after-width);
								height: var(--suggestion-arrow--after-height);
								background: var(--suggestion-arrow--after-bg-color);
								box-shadow:
									0 1px 7px var(--suggestion-arrow-box-shadow-left-color),
									0 1px 7px var(--suggestion-arrow-box-shadow-right-color);
								content: "";
								transform: translateX(-50%) translateY(-50%) rotate(45deg);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="bottom"] .pops-${popsType}-search-suggestion-arrow{
								top: -12.5px;
								left: 50%;
								transform: translateX(-50%);
							}
							.pops-${popsType}-search-suggestion[data-popper-placement^="bottom"] .pops-${popsType}-search-suggestion-arrow::after{
								position: absolute;
								top: 100%;
								left: 50%;
								content: "";
							}
						</style>
						<style type="text/css" data-dynamic="true">
							${SearchSuggestion.getDynamicCSS()}
						</style>
						<style>
							.el-zoom-in-top-animation{
								--el-transition-md-fade: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
									opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
								transition: var(--el-transition-md-fade);
								transform-origin: center top;
							}
							.el-zoom-in-top-animation[data-popper-placement^="top"] {
								transform-origin: center bottom;
							}
							.el-zoom-in-top-animation-hide{
								opacity: 0;
								transform: scaleY(0);
							}
							.el-zoom-in-top-animation-show{
								opacity: 1;
								transform: scaleY(1);
							}
						</style>
						<style type="text/css" data-user-css>
							${config.style || ""}
						</style>
            <div class="pops-${popsType}-search-suggestion-dropdown-wrapper">
              <ul class="pops-${popsType}-search-suggestion-dropdown-container ${PopsCommonCSSClassName.userSelectNone}">${config.toSearhNotResultHTML}</ul>
            </div>
            <!-- 箭头 -->
						${config.useArrow ? /*html*/ `<div class="pops-${popsType}-search-suggestion-arrow"></div>` : ""}
         				 `,
                    }, {
                        "data-guid": guid,
                        "type-value": popsType,
                    });
                    if (config.className !== "" && config.className != null) {
                        popsDOMUtils.addClassName($el, config.className);
                    }
                    if (config.isAnimation) {
                        popsDOMUtils.addClassName($el, `pops-${popsType}-animation`);
                    }
                    if (config.useFoldAnimation) {
                        popsDOMUtils.addClassName($el, "el-zoom-in-top-animation");
                    }
                    return $el;
                },
                /**
                 * 动态获取CSS
                 */
                getDynamicCSS() {
                    return /*css*/ `
				.pops-${popsType}-search-suggestion{
					--search-suggestion-bg-color: #ffffff;
					--search-suggestion-box-shadow-color: rgb(0 0 0 / 20%);
					--search-suggestion-item-color: #515a6e;
					--search-suggestion-item-none-color: #8e8e8e;
					--search-suggestion-item-is-hover-bg-color: #f5f7fa;
					--search-suggestion-item-is-select-bg-color: #409eff;
				}
				.pops-${popsType}-search-suggestion{
					border: initial;
					overflow: initial;
					position: ${config.isAbsolute ? "absolute" : "fixed"};
					z-index: ${PopsHandler.handleZIndex(config.zIndex)};
				}
        .pops-${popsType}-search-suggestion-dropdown-wrapper{
					max-height: ${config.maxHeight};
					border-radius: 4px;
					box-shadow: 0 1px 6px var(--search-suggestion-box-shadow-color);
					background-color: var(--search-suggestion-bg-color);
					padding: 5px 0;
					overflow-x: hidden;
					overflow-y: auto;
        }
				.pops-${popsType}-search-suggestion-dropdown-wrapper ul.pops-${popsType}-search-suggestion-dropdown-container{
					box-sizing: border-box;
				}
				// 建议框在上面时
				.pops-${popsType}-search-suggestion[data-top-reverse] ul.pops-${popsType}-search-suggestion-dropdown-container{
					display: flex;
					flex-direction: column-reverse;
				}
				.pops-${popsType}-search-suggestion[data-top-reverse] ul.pops-${popsType}-search-suggestion-dropdown-container li{
					flex-shrink: 0;
				}
				ul.pops-${popsType}-search-suggestion-dropdown-container li{
					padding: 7px;
					margin: 0;
					clear: both;
					color: var(--search-suggestion-item-color);
					font-size: 14px;
					list-style: none;
					cursor: pointer;
					transition: background .2s ease-in-out;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}
				ul.pops-${popsType}-search-suggestion-dropdown-container li[data-none]{
					text-align: center;
					font-size: 12px;
					color: var(--search-suggestion-item-none-color);
				}
				ul.pops-${popsType}-search-suggestion-dropdown-container li:not([data-none]):hover{
					background-color: var(--search-suggestion-item-is-hover-bg-color);
				}
				@media (prefers-color-scheme: dark){
					.pops-${popsType}-search-suggestion{
						--search-suggestion-bg-color: #1d1e1f;
						--search-suggestion-item-color: #cfd3d4;
						--search-suggestion-item-is-hover-bg-color: rgba(175, 175, 175, .1);
					}
				}
				`;
                },
                /**
                 * 获取data-value值
                 * @param data 数据项
                 */
                getItemDataValue(data) {
                    return data;
                },
                /**
                 * 获取显示出搜索建议框的每一项的html
                 * @param dataItem 当前项的值
                 * @param dateItemIndex 当前项的下标
                 */
                createSearchItemLiElement(dataItem, dateItemIndex) {
                    const dataValue = SearchSuggestion.getItemDataValue(dataItem);
                    const $li = popsDOMUtils.createElement("li", {
                        className: `pops-${popsType}-search-suggestion-dropdown-item`,
                        "data-index": dateItemIndex,
                        "data-value": dataValue,
                    });
                    Reflect.set($li, "data-index", dateItemIndex);
                    Reflect.set($li, "data-value", dataValue);
                    // 项内容
                    const $itemInner = dataItem.itemView(dataItem, $li, config);
                    if (typeof $itemInner === "string") {
                        PopsSafeUtils.setSafeHTML($li, $itemInner);
                    }
                    else {
                        popsDOMUtils.append($li, $itemInner);
                    }
                    // 删除按钮
                    const enableDeleteButton = dataItem.enableDeleteButton;
                    if (typeof enableDeleteButton === "boolean" && enableDeleteButton) {
                        const $deleteIcon = SearchSuggestion.createItemDeleteIcon();
                        popsDOMUtils.append($li, $deleteIcon);
                    }
                    popsDOMUtils.addClassName($li, PopsCommonCSSClassName.flexCenter);
                    popsDOMUtils.addClassName($li, PopsCommonCSSClassName.flexYCenter);
                    return $li;
                },
                /**
                 * 设置搜索建议框每一项的点击事件
                 * @param $searchItem 当前项的元素
                 */
                setSearchItemClickEvent($searchItem) {
                    popsDOMUtils.on($searchItem, "click", async (event) => {
                        popsDOMUtils.preventEvent(event);
                        const $click = event.target;
                        const data = SearchSuggestion.getData();
                        const dataItem = Reflect.get($searchItem, "data-value");
                        const isDelete = Boolean($click.closest(`.pops-${popsType}-delete-icon`));
                        if (isDelete) {
                            // 删除
                            if (typeof dataItem.deleteButtonClickCallback === "function") {
                                const result = await dataItem.deleteButtonClickCallback(event, $searchItem, dataItem, config);
                                if (typeof result === "boolean" && result) {
                                    data.splice(data.indexOf(dataItem), 1);
                                    $searchItem.remove();
                                }
                            }
                            if (!SearchSuggestion.$el.$dropdownContainer.children.length) {
                                // 全删完了
                                SearchSuggestion.clear();
                            }
                            SearchSuggestion.updateStyleSheet();
                        }
                        else {
                            // 点击选择项
                            if (typeof dataItem.clickCallback === "function") {
                                const result = await dataItem.clickCallback(event, $searchItem, dataItem, config);
                                if (typeof result === "boolean" && result) {
                                    if (config.$inputTarget instanceof HTMLInputElement ||
                                        config.$inputTarget instanceof HTMLTextAreaElement) {
                                        config.$inputTarget.value = String(dataItem.value);
                                    }
                                }
                            }
                        }
                    }, {
                        capture: true,
                    });
                },
                /**
                 * 设置搜索建议框每一项的选中事件
                 * @param $li 每一项元素
                 */
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                setSearchItemSelectEvent($li) {
                    //  TODO
                },
                /**
                 * 监听输入框内容改变
                 */
                setInputChangeEvent(option = defaultListenerOption) {
                    // 必须是input或者textarea才有input事件
                    if (!(config.$inputTarget instanceof HTMLInputElement || config.$inputTarget instanceof HTMLTextAreaElement)) {
                        return;
                    }
                    // 是input输入框
                    // 禁用输入框自动提示
                    config.$inputTarget.setAttribute("autocomplete", "off");
                    // 内容改变事件
                    const listenerHandler = popsDOMUtils.onInput(config.$inputTarget, async () => {
                        const data = SearchSuggestion.getData();
                        const queryDataResult = await config.inputTargetChangeRefreshShowDataCallback(config.$inputTarget.value, data, config);
                        SearchSuggestion.update(queryDataResult);
                        SearchSuggestion.updateStyleSheet();
                    }, option);
                    SearchSuggestion.$evt.offInputChangeEvtHandler.push(listenerHandler.off);
                },
                /**
                 * 移除输入框内容改变的监听
                 */
                removeInputChangeEvent() {
                    for (let index = 0; index < SearchSuggestion.$evt.offInputChangeEvtHandler.length; index++) {
                        const handler = SearchSuggestion.$evt.offInputChangeEvtHandler[index];
                        handler();
                        SearchSuggestion.$evt.offInputChangeEvtHandler.splice(index, 1);
                        index--;
                    }
                },
                /**
                 * 显示搜索建议框的事件
                 */
                showEvent() {
                    SearchSuggestion.updateStyleSheet();
                    if (config.toHideWithNotResult) {
                        if (SearchSuggestion.$data.isEmpty) {
                            SearchSuggestion.hide(true);
                        }
                        else {
                            SearchSuggestion.show();
                        }
                    }
                    else {
                        SearchSuggestion.show();
                    }
                },
                /**
                 * 设置显示搜索建议框的事件
                 */
                setShowEvent(option = defaultListenerOption) {
                    /* 焦点|点击事件*/
                    if (config.followPosition === "target") {
                        popsDOMUtils.on([config.$target], ["focus", "click"], SearchSuggestion.showEvent, option);
                    }
                    else if (config.followPosition === "input") {
                        popsDOMUtils.on([config.$inputTarget], ["focus", "click"], SearchSuggestion.showEvent, option);
                    }
                    else if (config.followPosition === "inputCursor") {
                        popsDOMUtils.on([config.$inputTarget], ["focus", "click", "input"], SearchSuggestion.showEvent, option);
                    }
                    else {
                        throw new Error("未知followPosition：" + config.followPosition);
                    }
                },
                /**
                 * 移除显示搜索建议框的事件
                 */
                removeShowEvent(option = defaultListenerOption) {
                    /* 焦点|点击事件*/
                    popsDOMUtils.off([config.$target, config.$inputTarget], ["focus", "click"], SearchSuggestion.showEvent, option);
                    // 内容改变事件
                    popsDOMUtils.off([config.$inputTarget], ["input"], SearchSuggestion.showEvent, option);
                },
                /**
                 * 隐藏搜索建议框的事件
                 * @param event
                 */
                hideEvent(event) {
                    if (event.target instanceof Node) {
                        if ($shadowContainer.contains(event.target)) {
                            // 点击在shadow上的
                            return;
                        }
                        if (config.$target.contains(event.target)) {
                            // 点击在目标元素内
                            return;
                        }
                        if (config.$inputTarget.contains(event.target)) {
                            // 点击在目标input内
                            return;
                        }
                        SearchSuggestion.hide(true);
                    }
                },
                /**
                 * 设置隐藏搜索建议框的事件
                 */
                setHideEvent(option = defaultListenerOption) {
                    // 全局点击事件
                    // 全局触摸屏点击事件
                    if (Array.isArray(SearchSuggestion.selfDocument)) {
                        SearchSuggestion.selfDocument.forEach(($checkParent) => {
                            popsDOMUtils.on($checkParent, ["click", "touchstart"], SearchSuggestion.hideEvent, option);
                        });
                    }
                    else {
                        popsDOMUtils.on(SearchSuggestion.selfDocument, ["click", "touchstart"], SearchSuggestion.hideEvent, option);
                    }
                },
                /**
                 * 移除隐藏搜索建议框的事件
                 */
                removeHideEvent(option = defaultListenerOption) {
                    if (Array.isArray(SearchSuggestion.selfDocument)) {
                        SearchSuggestion.selfDocument.forEach(($checkParent) => {
                            popsDOMUtils.off($checkParent, ["click", "touchstart"], SearchSuggestion.hideEvent, option);
                        });
                    }
                    else {
                        popsDOMUtils.off(SearchSuggestion.selfDocument, ["click", "touchstart"], SearchSuggestion.hideEvent, option);
                    }
                },
                /**
                 * 设置所有监听，包括（input值改变、全局点击判断显示/隐藏建议框）
                 */
                setAllEvent(option = defaultListenerOption) {
                    SearchSuggestion.setInputChangeEvent(option);
                    SearchSuggestion.setHideEvent(option);
                    SearchSuggestion.setShowEvent(option);
                },
                /**
                 * 移除所有监听
                 */
                removeAllEvent(option = defaultListenerOption) {
                    SearchSuggestion.removeInputChangeEvent();
                    SearchSuggestion.removeHideEvent(option);
                    SearchSuggestion.removeShowEvent(option);
                },
                /**
                 * 获取删除按钮的html
                 */
                createItemDeleteIcon(size = 16, fill = "#bababa") {
                    const $svg = popsDOMUtils.parseTextToDOM(/*html*/ `
					<svg class="pops-${popsType}-delete-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="${fill}">
						<path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z"></path>
						<path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z"></path>
					</svg>
        			`);
                    return $svg;
                },
                /**
                 * 设置当前正在搜索中的提示
                 */
                setPromptsInSearch() {
                    const $isSearching = popsDOMUtils.createElement("li", {
                        className: `pops-${popsType}-search-suggestion-dropdown-searching-item`,
                        innerHTML: config.searchingTip,
                    });
                    SearchSuggestion.addItem($isSearching);
                },
                /**
                 * 移除正在搜索中的提示
                 */
                removePromptsInSearch() {
                    SearchSuggestion.$el.$dropdownContainer
                        .querySelector(`li.pops-${popsType}-search-suggestion-dropdown-searching-item`)
                        ?.remove();
                },
                /**
                 * 更新搜索建议框的位置(top、left)
                 * 因为目标元素可能是动态隐藏的
                 * @param target 目标元素
                 * @param checkPositonAgain 是否在更新位置信息后检测更新位置信息，默认true
                 */
                changeHintULElementPosition(target = config.$target ?? config.$inputTarget, checkPositonAgain = true) {
                    let targetRect = null;
                    if (config.followPosition === "inputCursor") {
                        targetRect = popsDOMUtils.getTextBoundingRect(config.$inputTarget, config.$inputTarget.selectionStart || 0, config.$inputTarget.selectionEnd || 0, false);
                    }
                    else {
                        targetRect = config.isAbsolute ? popsDOMUtils.offset(target) : target.getBoundingClientRect();
                    }
                    if (targetRect == null) {
                        return;
                    }
                    // 文档最大高度
                    let documentHeight = document.documentElement.clientHeight;
                    if (config.isAbsolute) {
                        // 绝对定位
                        documentHeight = popsDOMUtils.height(document);
                    }
                    // 文档最大宽度
                    const documentWidth = popsDOMUtils.width(document);
                    // 箭头
                    const arrowHeight = config.useArrow ? popsDOMUtils.height(SearchSuggestion.$el.$arrow) : 0;
                    let position = config.position;
                    if (config.position === "auto") {
                        // 需目标高度+搜索建议框高度大于文档高度，则显示在上面
                        const targetBottom = targetRect.bottom;
                        // 容器整体的高度
                        const searchSuggestionContainerHeight = popsDOMUtils.height(SearchSuggestion.$el.$dropdownWrapper) + arrowHeight;
                        if (targetBottom + searchSuggestionContainerHeight > documentHeight) {
                            // 在上面
                            position = "top";
                        }
                        else {
                            // 在下面
                            position = "bottom";
                        }
                    }
                    if (position === "top") {
                        // 在上面
                        if (config.positionTopToReverse) {
                            // 自动翻转
                            SearchSuggestion.$el.root.setAttribute("data-top-reverse", "true");
                        }
                        if (config.useFoldAnimation) {
                            // 翻转折叠
                            SearchSuggestion.$el.root.setAttribute("data-popper-placement", "top");
                        }
                        const bottom = documentHeight - targetRect.top + config.topDistance + arrowHeight;
                        SearchSuggestion.$el.root.style.top = "";
                        SearchSuggestion.$el.root.style.bottom = bottom + "px";
                    }
                    else if (position === "bottom") {
                        // 在下面
                        if (config.useFoldAnimation) {
                            SearchSuggestion.$el.root.setAttribute("data-popper-placement", "bottom-center");
                        }
                        const top = targetRect.height + targetRect.top + config.topDistance + arrowHeight;
                        SearchSuggestion.$el.root.removeAttribute("data-top-reverse");
                        SearchSuggestion.$el.root.style.bottom = "";
                        SearchSuggestion.$el.root.style.top = top + "px";
                    }
                    let left = targetRect.left;
                    const hintUIWidth = popsDOMUtils.width(SearchSuggestion.$el.$dropdownWrapper);
                    if (hintUIWidth > documentWidth) {
                        // 超出宽度
                        left = left + documentWidth - hintUIWidth;
                    }
                    SearchSuggestion.$el.root.style.left = left + "px";
                    // 如果更新前在下面的话且高度超出了屏幕
                    // 这时候会有滚动条，会造成位置偏移
                    // 更新后的位置却在上面，这时候的位置信息不对齐
                    // 需重新更新位置
                    // 此情况一般是config.position === "auto"
                    if (checkPositonAgain) {
                        SearchSuggestion.changeHintULElementPosition(target, !checkPositonAgain);
                    }
                },
                /**
                 * 更新搜索建议框的width
                 * 因为目标元素可能是动态隐藏的
                 * @param target 目标元素
                 */
                changeHintULElementWidth(target = config.$target ?? config.$inputTarget) {
                    const targetRect = target.getBoundingClientRect();
                    if (config.followTargetWidth) {
                        SearchSuggestion.$el.$dropdownWrapper.style.width = targetRect.width + "px";
                    }
                    else {
                        SearchSuggestion.$el.$dropdownWrapper.style.width = config.width;
                    }
                },
                /**
                 * 动态更新CSS
                 */
                updateDynamicCSS() {
                    const cssText = SearchSuggestion.getDynamicCSS();
                    PopsSafeUtils.setSafeHTML(SearchSuggestion.$el.$dynamicCSS, cssText);
                },
                /**
                 * 数据项的数量改变时调用
                 *
                 * - 更新css
                 * - 更新建议框的宽度
                 * - 更新建议框的位置
                 */
                updateStyleSheet() {
                    // 更新z-index
                    SearchSuggestion.updateDynamicCSS();
                    // 更新宽度
                    SearchSuggestion.changeHintULElementWidth();
                    // 更新位置
                    SearchSuggestion.changeHintULElementPosition();
                },
                /**
                 * 添加搜索结果元素
                 * @param $item 项元素
                 */
                addItem($item) {
                    SearchSuggestion.$el.$dropdownContainer.appendChild($item);
                },
                /**
                 * 更新页面显示的搜索结果
                 * @param updateData
                 */
                update(updateData = []) {
                    if (!Array.isArray(updateData)) {
                        throw new TypeError("传入的数据不是数组");
                    }
                    const data = updateData;
                    // 清空已有的搜索结果
                    if (data.length) {
                        SearchSuggestion.$data.isEmpty = false;
                        if (config.toHideWithNotResult) {
                            SearchSuggestion.show();
                        }
                        SearchSuggestion.clear(true);
                        // 添加进ul中
                        const fragment = document.createDocumentFragment();
                        data.forEach((item, index) => {
                            const $item = SearchSuggestion.createSearchItemLiElement(item, index);
                            SearchSuggestion.setSearchItemClickEvent($item);
                            SearchSuggestion.setSearchItemSelectEvent($item);
                            fragment.appendChild($item);
                        });
                        SearchSuggestion.addItem(fragment);
                    }
                    else {
                        // 清空
                        SearchSuggestion.clear();
                    }
                },
                /**
                 * 清空当前的搜索结果并显示无结果
                 * @param [onlyClearView=false] 是否仅清空元素，默认false
                 */
                clear(onlyClearView = false) {
                    PopsSafeUtils.setSafeHTML(SearchSuggestion.$el.$dropdownContainer, "");
                    if (onlyClearView) {
                        return;
                    }
                    SearchSuggestion.$data.isEmpty = true;
                    let $noResult;
                    if (typeof config.toSearhNotResultHTML === "string") {
                        $noResult = popsDOMUtils.parseTextToDOM(config.toSearhNotResultHTML);
                    }
                    else {
                        $noResult = config.toSearhNotResultHTML();
                    }
                    SearchSuggestion.addItem($noResult);
                    if (config.toHideWithNotResult) {
                        SearchSuggestion.hide();
                    }
                },
                /**
                 * 隐藏搜索建议框
                 * @param useAnimationToHide 是否使用动画隐藏
                 */
                hide(useAnimationToHide = false) {
                    if (config.useFoldAnimation) {
                        if (!useAnimationToHide) {
                            // 去掉动画
                            popsDOMUtils.removeClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation");
                        }
                        popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation");
                        popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-hide");
                        popsDOMUtils.removeClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-show");
                    }
                    else {
                        SearchSuggestion.$el.root.style.display = "none";
                    }
                },
                /**
                 * 显示搜索建议框
                 */
                show() {
                    SearchSuggestion.$el.root.style.display = "";
                    if (config.useFoldAnimation) {
                        popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation");
                        popsDOMUtils.removeClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-hide");
                        popsDOMUtils.addClassName(SearchSuggestion.$el.root, "el-zoom-in-top-animation-show");
                    }
                },
            };
            return SearchSuggestion;
        },
    };

    const version = "3.2.0";

    class Pops {
        /** 配置 */
        config = {
            /** 版本号 */
            version: version,
            cssText: PopsCSS,
            /** icon图标的svg代码 */
            iconSVG: PopsIcon.$data,
            /** 当前已配置的动画@keyframes名字映射(初始化时生成) */
            animation: PopsAnimation.$data,
            /** 存储已创建的元素 */
            instData: PopsInstData,
            /** 禁止滚动 */
            forbiddenScroll: {
                event(event) {
                    return popsDOMUtils.preventEvent(event);
                },
            },
            /** pops使用的工具类 */
            Utils: popsUtils,
            /** pops使用的DOM工具类 */
            DOMUtils: popsDOMUtils,
            /** pops创建的实例使用的工具类 */
            InstanceUtils: PopsInstanceUtils,
            /** pops处理float类型使用的工具类 */
            MathFloatUtils: PopsMathFloatUtils,
            /** pops.panel中用于处理各个类型的工具 */
            PanelHandlerComponents: PanelHandlerComponents,
        };
        init() { }
        /**
         * 释放原有的pops控制权
         * @example
         * let pops = window.pops.noConflict()
         */
        noConflict() {
            if (typeof PopsCore.globalThis.pops === "object") {
                popsUtils.delete(PopsCore.globalThis, "pops");
            }
            if (typeof unsafeWindow === "object" && unsafeWindow != null && typeof unsafeWindow.pops === "object") {
                popsUtils.delete(unsafeWindow, "pops");
            }
            return new Pops();
        }
        /**
         * 通过navigator.userAgent判断是否是手机访问
         * @param userAgent
         */
        isPhone(userAgent) {
            return popsUtils.isPhone(userAgent);
        }
        /**
         * 为所有弹窗设置全局属性
         */
        GlobalConfig = GlobalConfig;
        /**
         * 普通信息框
         * @param config 配置
         */
        alert = (config) => {
            const dialog = PopsAlert.init(config);
            return dialog;
        };
        /**
         * 询问框
         * @param config 配置
         */
        confirm = (config) => {
            const dialog = PopsConfirm.init(config);
            return dialog;
        };
        /**
         * 输入框
         * @param config 配置
         */
        prompt = (config) => {
            const dialog = PopsPrompt.init(config);
            return dialog;
        };
        /**
         * 加载层
         * @param config 配置
         */
        loading = (config) => {
            const popsLoading = PopsLoading.init(config);
            return popsLoading;
        };
        /**
         * iframe层
         * @param config 配置
         */
        iframe = (config) => {
            const dialog = PopsIframe.init(config);
            return dialog;
        };
        /**
         * 提示框
         * @param config 配置
         */
        tooltip = (config) => {
            const popsTooltip = PopsTooltip.init(config);
            return popsTooltip;
        };
        /**
         * 抽屉
         * @param config 配置
         */
        drawer = (config) => {
            const dialog = PopsDrawer.init(config);
            return dialog;
        };
        /**
         * 文件夹
         * @param config 配置
         */
        folder = (config) => {
            const dialog = PopsFolder.init(config);
            return dialog;
        };
        /**
         * 配置面板
         * @param config 配置
         */
        panel = (config) => {
            const dialog = PopsPanel.init(config);
            return dialog;
        };
        /**
         * 右键菜单
         * @param config 配置
         */
        rightClickMenu = (config) => {
            const popsRightClickMenu = PopsRightClickMenu.init(config);
            return popsRightClickMenu;
        };
        /**
         * 搜索建议
         *
         * 注意：调用后需要主动调用.init()和.setAllEvent()进行初始化
         * @param config 配置
         * @example
         * let $input = document.querySelector("#input");
         * let searchSuggestion = pops.searchSuggestion({
         *     target: $input,
         *     inputTarget: $input,
         *     getItemHTML: function (item) {
         *         return item.value;
         *     }
         * });
         * searchSuggestion.init();
         * searchSuggestion.setAllEvent();
         */
        searchSuggestion = (config) => {
            const popsSearchSuggestion = PopsSearchSuggestion.init(config);
            return popsSearchSuggestion;
        };
    }
    const pops = new Pops();

    return pops;

}));
//# sourceMappingURL=index.umd.js.map
