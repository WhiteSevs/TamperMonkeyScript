// ==UserScript==
// @name         SearchEnginePlus
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.8.14.23
// @author       WhiteSevs
// @description  搜索页面优化，包含以下搜索引擎：百度搜索、谷歌、Bing
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHPElEQVR4AeyaS3IcNwyGQUoHSJzsoyzkqpwi0kksLW0fwvYhbC/tnETOKVJlLTzZJ6McQB4GHzQ9w2aT3ezHJCVZXYLI5gMEfoDgo8fLN/48AvCNO4A8esCjBxwQgR/fX5/98PbzxZO316+fvP/8wYi8EuXUf/f+j5MDijDIevEpgGKm6LvrsAlyFZz7IE5eSXAXRuSVKKfeh+Mv37+7vgKk/wOMRQBAcFNClUYxQVmpf5zIGSD5LRh4hvxHz2wAsDaCmxILCA0fPANAAXYBlr0sJgOAlZ6oxWXI2i58FCjIGxfCpWgKBZFPImElhQcgvHoEU6PQZJHiSQAgFFbKSRBQTBXeuNuf1y9O3fr500ujl6ev/3759ONaU+jmxen5+sXTn72Tc1FQrF+OoZNXeNmhvGE0ALimqFBdWcMKC9+gmCr9z/NfitaN+/71/PRTA4iBkfMK9TIXjj8cAoRRAKA8rhkrYHm14FqtiYXtfeI/A0P5AGQ6PRjXh6OrpUGoBgC3R4hUN6yGBdPyOe8AuXFfz1MQRNyJ3xxfLAlCFQAEvK7bhxXKYzU5wMMUwqs6IOj0A4SlhhwEALS7AQ/l3eWhlI+VK4GAXHG72nzabhCAHNrezVfedoy6Jca7hpTJTQenQTFVZsp7LwAmmLpci7EGvLmWZ1kL2y0y3oUyNlZroP0L08HpuPsS0Rkpds6QmU8vAF6OXrX5h9XcgGeK6rIW8yW4Hm2OzuKyNE9gtA1VVBHUOMYvKhubLQJgjBNBJbjfxg6Qti8pGjTCp23T9418fSOtfYI7KfGTyqcIQHfuz7c+Mjnv8hskF54Z6DQqEFNBfV+30PsGwcuv+7fxuSIA6l5txgtYH/Fu5TYPgHqA08A2BILbyO/w2VHqpbuKukwWAIRwHFEjHht/+zF6nZxte1ZYxfOaMYdAsFjQmgYiyDtVoCwAx3J80mYYVuZ+7cLRbyaoBq6mI8spByWJInwNCOKkNQ3mxIEsAHqV0wIgiFtJ8rCOQ6ZUUld6Ta3fLKe2smRAgD/7hA6/jfszLpsTB/IA6HyMB9A1uDXvOBQFXcchX3lmN6AS68dj5ECAP/sE9g3Wf9vBJVNgWzwpyQLQxyl7KFLFYgFz/UvWj9umIOzqNNDFbp6uJCG4lsfu+lVk8gD48FPctwbxWMC4L3kDR0EiDzH3SXPkvbTmt2yfPjdX+RYGYDtoLtHBOvGAdhonikLUWB8evZTM+962IyrzHpAMFqOfW4ZsPLUw08Py0b8x1qebBcYoIFLG7s+mx92L1ATpbdPBJAtAycoNN46odmtjgoa9R2RAmGJ9lDX+ercoOgbjNWOThjRIu7CXgQYjKA9Asl0NmSCDJyDonXCRABEIY60fy2389W6RMeLybD7x2LjNUD4LgLlhtNQ4kTNTpsCtBIJvnSbD6o5vgcmYYgU5bl4KnHGbUj4LQK5xX5SnfQ4E0eWLOqgv8lNfS11DzAO2DEBy+Nk492xIyA4IUYfyIShqVJFtxxQNj5ldagWbXZMiAKlbDU2DHccEuKZ8yIOadn2pWT9xfxektUvt65+rKwJwN1+j4Ka9Oalp0vs3tIL0dh6oTK2v9p99Q1UEAFnSeYsXcEChrkREbwSL64N+Lrsrj0vH5XPW1xgz+4aqFwDzAtbiSFYOKCZMVJZmiQXNOk56o5/L0jZj3hmv633L3FD1AoCQ3Xs4EV/xiQqLc9Ynhc8ccnpT5HQpjnmk3hnXjckPAmAXIZ3A5k4QCsuMGWxKW47CLlGeWyTzzikMkz6DANDedmO6JSXfEEL5Ck9o2k9JuXfQeX7R7quurzvEdtn0tyoAYG8gRLtDykT35F4vRLK3NjL9gR/KA3KXizsZCsTdPuWSagBgkftEZeVBrhB47pSgPy7PLVBeeUbTNUZvo5YCYRQAxIO1fr9nDt6Jsv+PwHgDQGBBlNnX9udQBsXpL9H2ua8XqxE/0YEYc8x4Md9RADQdie6SxISmDiCwoNepgWDcEUCAAqEsRBlKowDKSElxXYb5qY0UxmNcxvQ63hQQJgHAoMQE7+ScTQ7vOUIwYeuqBCgQykJWXlJ6ywz+Bra+M570gKBNdHk+/jIWhMkAMCBL0Y1uchBUZ+bkSwl47SnYb42wOvz35SI1H2f8SE+YBUAjHIKuNTYYEOqy0lktmpY9qfZj1wifuZunMSAsAkCjlgGhazRKGBi4LKTKBRG97Q0rS/VdlFB4E/2cbkhxgrD1l+GnFoRFAYjFMjC2vwlkHt/oVFmrl9yQApISCqNU3G8oH9ztZa2H1YBwMACGFJlaD2DeucVAuHcAABzeNQ6E8u8L7yUA40FwxV+S3FsARJ8xnhB/3NGuu797DQBaVINQ+HZw7wGoBaG0iXoQAAyBwH6D1YN2KT0YAFCM6bDWvYZsN1+kXs8r7Deoz9GDAqBRkIMTmy9SQGnKc+mDBCCnaKnsEYASMt9K+b33gLmG+hcAAP//M3yY4QAAAAZJREFUAwDdAc6uB4kUMgAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://ipv6.baidu.com/*
// @match        *://www.baidu.com/*
// @match        *://www1.baidu.com/*
// @match        *://m.baidu.com/*
// @match        *://*.google.com/search*
// @match        *://*.google.com.hk/search*
// @match        *://s.cn.bing.net/search*
// @match        *://www.bing.com/search*
// @match        *://cn.bing.com/search*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.13.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.js
// @connect      www.baidu.com
// @connect      cn.bing.com
// @connect      www.bing.com
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (_whitesev_domutils, _whitesev_pops, _whitesev_utils, qmsg) {
  "use strict";
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: ((k) => from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
      }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", {
            value: mod,
            enumerable: true,
          })
        : target,
      mod
    )
  );
  _whitesev_domutils = __toESM(_whitesev_domutils);
  _whitesev_pops = __toESM(_whitesev_pops);
  _whitesev_utils = __toESM(_whitesev_utils);
  qmsg = __toESM(qmsg);
  var _GM_addValueChangeListener = (() =>
    typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0)();
  var _GM_deleteValue = (() => (typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0))();
  var _GM_getResourceText = (() => (typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0))();
  var _GM_getValue = (() => (typeof GM_getValue != "undefined" ? GM_getValue : void 0))();
  var _GM_info = (() => (typeof GM_info != "undefined" ? GM_info : void 0))();
  var _GM_listValues = (() => (typeof GM_listValues != "undefined" ? GM_listValues : void 0))();
  var _GM_registerMenuCommand = (() =>
    typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_removeValueChangeListener = (() =>
    typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0)();
  var _GM_setValue = (() => (typeof GM_setValue != "undefined" ? GM_setValue : void 0))();
  var _GM_setValues = (() => (typeof GM_setValues != "undefined" ? GM_setValues : void 0))();
  var _GM_unregisterMenuCommand = (() =>
    typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = (() => (typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0))();
  var _unsafeWindow = (() => (typeof unsafeWindow != "undefined" ? unsafeWindow : void 0))();
  var _monkeyWindow = (() => window)();
  var RouterBuilder = class RouterBuilder {
    __href__;
    get __href() {
      return this.__href__ || globalThis.location.href;
    }
    __origin = {
      value: void 0,
      type: "same",
    };
    __protocol = {
      value: void 0,
      type: "same",
    };
    __host = {
      value: void 0,
      type: "same",
      hasPort: false,
    };
    __pathname = {
      value: void 0,
      type: "same",
    };
    __searchParams = { value: new Set() };
    otherInstResultWithOr = false;
    constructor(href) {
      if (typeof href === "string") this.href(href);
    }
    href(url) {
      this.__href__ = url;
      return this;
    }
    origin(origin) {
      this.__origin = {
        value: origin,
        type: "same",
      };
      return this;
    }
    originStartsWith(origin) {
      this.__origin = {
        value: origin,
        type: "startsWith",
      };
      return this;
    }
    originEndsWith(origin) {
      this.__origin = {
        value: origin,
        type: "endsWith",
      };
      return this;
    }
    originIncludes(origin) {
      this.__origin = {
        value: origin,
        type: "includes",
      };
      return this;
    }
    originMatch(origin) {
      this.__origin = {
        value: origin,
        type: "match",
      };
      return this;
    }
    protocol(protocol) {
      this.__protocol = {
        value: protocol,
        type: "same",
      };
      return this;
    }
    protocolStartsWith(protocol) {
      this.__protocol = {
        value: protocol,
        type: "startsWith",
      };
      return this;
    }
    protocolEndsWith(protocol) {
      this.__protocol = {
        value: protocol,
        type: "endsWith",
      };
      return this;
    }
    protocolIncludes(protocol) {
      this.__protocol = {
        value: protocol,
        type: "includes",
      };
      return this;
    }
    protocolMatch(protocol) {
      this.__protocol = {
        value: protocol,
        type: "match",
      };
      return this;
    }
    host(host) {
      this.__host = {
        value: host,
        type: "same",
        hasPort: true,
      };
      return this;
    }
    hostStartsWith(host) {
      this.__host = {
        value: host,
        type: "startsWith",
        hasPort: true,
      };
      return this;
    }
    hostEndsWith(host) {
      this.__host = {
        value: host,
        type: "endsWith",
        hasPort: true,
      };
      return this;
    }
    hostIncludes(host) {
      this.__host = {
        value: host,
        type: "includes",
        hasPort: true,
      };
      return this;
    }
    hostMatch(host) {
      this.__host = {
        value: host,
        type: "match",
        hasPort: true,
      };
      return this;
    }
    hostName(hostName) {
      this.__host = {
        value: hostName,
        type: "same",
        hasPort: false,
      };
      return this;
    }
    hostNameStartsWith(hostName) {
      this.__host = {
        value: hostName,
        type: "startsWith",
        hasPort: false,
      };
      return this;
    }
    hostNameEndsWith(hostName) {
      this.__host = {
        value: hostName,
        type: "endsWith",
        hasPort: false,
      };
      return this;
    }
    hostNameIncludes(hostName) {
      this.__host = {
        value: hostName,
        type: "includes",
        hasPort: false,
      };
      return this;
    }
    hostNameMatch(hostName) {
      this.__host = {
        value: hostName,
        type: "match",
        hasPort: false,
      };
      return this;
    }
    pathname(pathname) {
      this.__pathname = {
        value: pathname,
        type: "same",
      };
      return this;
    }
    pathnameStartsWith(pathname) {
      this.__pathname = {
        value: pathname,
        type: "startsWith",
      };
      return this;
    }
    pathnameEndsWith(pathname) {
      this.__pathname = {
        value: pathname,
        type: "endsWith",
      };
      return this;
    }
    pathnameIncludes(pathname) {
      this.__pathname = {
        value: pathname,
        type: "includes",
      };
      return this;
    }
    pathnameMatch(pathname) {
      this.__pathname = {
        value: pathname,
        type: "match",
      };
      return this;
    }
    searchParams(name, value) {
      this.__searchParams.value.add({
        name,
        value,
      });
      return this;
    }
    search(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "same",
      });
      return this;
    }
    searchStartsWith(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "startsWith",
      });
      return this;
    }
    searchEndsWith(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "endsWith",
      });
      return this;
    }
    searchIncludes(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "includes",
      });
      return this;
    }
    searchMatch(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "match",
      });
      return this;
    }
    build() {
      if (!this.__host.value) throw new TypeError("host or hostName should be required");
      let url = `${this.__protocol.value || "https"}://${this.__host.value}${this.__pathname.value || "/"}`;
      if (this.__searchParams.value.size > 0) {
        const searhList = [];
        this.__searchParams.value.forEach((it) => {
          if (typeof it.name === "string") {
            let value = "";
            if (typeof it.value === "string" || typeof it.value === "number" || typeof it.value === "boolean")
              value = it.value.toString();
            searhList.push(`${encodeURIComponent(it.name)}=${encodeURIComponent(value)}`);
          }
        });
        if (searhList.length) url += `?${searhList.join("&")}`;
      }
      return url;
    }
    or(href) {
      this.otherInstResultWithOr = this.otherInstResultWithOr || this.r();
      const routerBuilder = new RouterBuilder(href);
      routerBuilder.otherInstResultWithOr = this.otherInstResultWithOr;
      return routerBuilder;
    }
    r() {
      if (this.otherInstResultWithOr) return this.otherInstResultWithOr;
      const urlInst = new URL(this.__href);
      return [
        () => {
          if (this.__origin.value)
            if (this.__origin.type === "same")
              if (typeof this.__origin.value === "string") return urlInst.origin === this.__origin.value;
              else throw new TypeError("origin value should be string by type " + this.__origin.type);
            else if (this.__origin.type === "startsWith")
              if (typeof this.__origin.value === "string") return urlInst.origin.startsWith(this.__origin.value);
              else throw new TypeError("origin value should be string by type " + this.__origin.type);
            else if (this.__origin.type === "endsWith")
              if (typeof this.__origin.value === "string") return urlInst.origin.endsWith(this.__origin.value);
              else throw new TypeError("origin value should be string by type " + this.__origin.type);
            else if (this.__origin.type === "includes")
              if (typeof this.__origin.value === "string") return urlInst.origin.includes(this.__origin.value);
              else throw new TypeError("origin value should be string by type " + this.__origin.type);
            else if (this.__origin.type === "match")
              if (this.__origin.value instanceof RegExp) return this.__origin.value.test(urlInst.origin);
              else if (typeof this.__origin.value === "string") return urlInst.origin.match(this.__origin.value);
              else throw new TypeError("origin value should be RegExp or string by type " + this.__origin.type);
            else throw new TypeError("origin type should be same or startsWith or endsWith or includes or match");
          else return true;
        },
        () => {
          if (this.__protocol.value)
            if (this.__protocol.type === "same")
              if (typeof this.__protocol.value === "string") return urlInst.protocol === this.__protocol.value;
              else throw new TypeError("protocol value should be string by type " + this.__protocol.type);
            else if (this.__protocol.type === "startsWith")
              if (typeof this.__protocol.value === "string") return urlInst.protocol.startsWith(this.__protocol.value);
              else throw new TypeError("protocol value should be string by type " + this.__protocol.type);
            else if (this.__protocol.type === "endsWith")
              if (typeof this.__protocol.value === "string") return urlInst.protocol.endsWith(this.__protocol.value);
              else throw new TypeError("protocol value should be string by type " + this.__protocol.type);
            else if (this.__protocol.type === "includes")
              if (typeof this.__protocol.value === "string") return urlInst.protocol.includes(this.__protocol.value);
              else throw new TypeError("protocol value should be string by type " + this.__protocol.type);
            else if (this.__protocol.type === "match")
              if (this.__protocol.value instanceof RegExp) return this.__protocol.value.test(urlInst.protocol);
              else if (typeof this.__protocol.value === "string") return urlInst.protocol.match(this.__protocol.value);
              else throw new TypeError("protocol value should be RegExp or string by type " + this.__protocol.type);
            else throw new TypeError("protocol type should be same,startsWith,endsWith,includes,match");
          else return true;
        },
        () => {
          if (this.__host.value) {
            const host = this.__host.hasPort ? urlInst.host : urlInst.hostname;
            if (this.__host.type === "same")
              if (typeof this.__host.value === "string") return this.__host.value === host;
              else throw new TypeError("host value should be string by type " + this.__host.type);
            else if (this.__host.type === "startsWith")
              if (typeof this.__host.value === "string") return host.startsWith(this.__host.value);
              else throw new TypeError("host value should be string by type " + this.__host.type);
            else if (this.__host.type === "endsWith")
              if (typeof this.__host.value === "string") return host.endsWith(this.__host.value);
              else throw new TypeError("host value should be string by type " + this.__host.type);
            else if (this.__host.type === "includes")
              if (typeof this.__host.value === "string") return host.includes(this.__host.value);
              else throw new TypeError("host value should be string by type " + this.__host.type);
            else if (this.__host.type === "match")
              if (this.__host.value instanceof RegExp) return this.__host.value.test(host);
              else if (typeof this.__host.value === "string") return host.match(this.__host.value);
              else throw new TypeError("host value should be RegExp or string by type " + this.__host.type);
            else throw new TypeError("host type should be same,startsWith,endsWith,includes,match");
          } else return true;
        },
        () => {
          if (this.__pathname.value)
            if (this.__pathname.type === "same")
              if (typeof this.__pathname.value === "string") return urlInst.pathname === this.__pathname.value;
              else throw new TypeError("pathname value should be string by type " + this.__pathname.type);
            else if (this.__pathname.type === "startsWith")
              if (typeof this.__pathname.value === "string") return urlInst.pathname.startsWith(this.__pathname.value);
              else throw new TypeError("pathname value should be string by type " + this.__pathname.type);
            else if (this.__pathname.type === "endsWith")
              if (typeof this.__pathname.value === "string") return urlInst.pathname.endsWith(this.__pathname.value);
              else throw new TypeError("pathname value should be string by type " + this.__pathname.type);
            else if (this.__pathname.type === "includes")
              if (typeof this.__pathname.value === "string") return urlInst.pathname.includes(this.__pathname.value);
              else throw new TypeError("pathname value should be string by type " + this.__pathname.type);
            else if (this.__pathname.type === "match")
              if (this.__pathname.value instanceof RegExp) return this.__pathname.value.test(urlInst.pathname);
              else if (typeof this.__pathname.value === "string") return urlInst.pathname.match(this.__pathname.value);
              else throw new TypeError("pathname value should be RegExp or string by type " + this.__pathname.type);
            else throw new TypeError("pathname type should be same,startsWith,endsWith,includes,match");
          else return true;
        },
        () => {
          let flag = true;
          const searchParamsList = [];
          this.__searchParams.value.forEach((item) => {
            searchParamsList.push(item);
          });
          for (let index = 0; index < searchParamsList.length; index++) {
            const item = searchParamsList[index];
            if (item.type)
              if (item.type === "same")
                if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean")
                  return urlInst.search === item.value.toString();
                else throw new TypeError("search value should be string、number、boolean by type " + item.type);
              else if (item.type === "startsWith")
                if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean")
                  return urlInst.search.startsWith(item.value.toString());
                else throw new TypeError("search value should be string、number、boolean by type " + item.type);
              else if (item.type === "endsWith")
                if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean")
                  return urlInst.search.endsWith(item.value.toString());
                else throw new TypeError("search value should be string、number、boolean by type " + item.type);
              else if (item.type === "includes")
                if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean")
                  return urlInst.search.includes(item.value.toString());
                else throw new TypeError("search value should be string、number、boolean by type " + item.type);
              else if (item.type === "match")
                if (item.value instanceof RegExp) return item.value.test(urlInst.search);
                else if (
                  typeof item.value === "string" ||
                  typeof item.value === "number" ||
                  typeof item.value === "boolean"
                )
                  return urlInst.search.match(item.value.toString());
                else throw new TypeError("search value should be RegExp、string、number、boolean by type " + item.type);
              else throw new TypeError("search type should be same, startsWith, endsWith, includes, match");
            else if (typeof item.name === "string") {
              let value = item.value;
              if (
                value == null ||
                typeof value === "string" ||
                typeof value === "number" ||
                typeof value === "boolean"
              ) {
                value = value == null ? void 0 : value.toString();
                if (!urlInst.searchParams.has(item.name, value)) {
                  flag = false;
                  break;
                }
              } else if (value instanceof RegExp) {
                const targetValue = urlInst.searchParams.get(item.name);
                if (targetValue) {
                  if (!value.test(targetValue)) {
                    flag = false;
                    break;
                  }
                } else {
                  flag = false;
                  break;
                }
              } else
                throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined");
            } else if (item.name instanceof RegExp) {
              let targetKey = void 0;
              let targetValue = void 0;
              urlInst.searchParams.forEach((__value__, __key__) => {
                if (!targetKey && __key__.match(item.name)) {
                  targetKey = __key__;
                  targetValue = __value__;
                }
              });
              if (targetKey) {
                let value = item.value;
                if (value == null) {
                } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                  value = value.toString();
                  flag = value === targetValue;
                  if (!flag) break;
                } else if (value instanceof RegExp)
                  if (targetValue) {
                    if (!value.test(targetValue)) {
                      flag = false;
                      break;
                    }
                  } else {
                    flag = false;
                    break;
                  }
                else
                  throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined");
              } else {
                flag = false;
                break;
              }
            } else throw new TypeError("searchParams name should be string or RegExp");
          }
          return flag;
        },
      ].every((it) => it());
    }
  };
  var RouterUtil = {
    host(host, href) {
      return RouterUtil.builder(href).host(host);
    },
    hostName(name, href) {
      return RouterUtil.builder(href).hostName(name);
    },
    search(value, href) {
      return RouterUtil.builder(href).search(value);
    },
    seachParams(name, value, href) {
      return RouterUtil.builder(href).searchParams(name, value);
    },
    pathname(name, href) {
      return RouterUtil.builder(href).pathname(name);
    },
    protocol(protocol, href) {
      return RouterUtil.builder(href).protocol(protocol);
    },
    builder(href) {
      return new RouterBuilder(href);
    },
  };
  var SearchEngineRouter = {
    isBaiduSearch() {
      return RouterUtil.builder()
        .hostNameMatch(/^(ipv6|www|www1|m).baidu.com$/)
        .pathname("/s")
        .r();
    },
    isGoogleSearch() {
      return RouterUtil.builder().hostNameIncludes("google.com").pathname("/search").r();
    },
    isBingSearch() {
      return RouterUtil.builder()
        .hostNameMatch(/.*.bing.(com|net)$/)
        .pathname("/search")
        .r();
    },
  };
  var CommonUtil = {
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") return;
        _whitesev_domutils.default.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
    createBlockCSSNode(...args) {
      let selectorList = [];
      if (args.length === 0) return;
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") return;
      args.forEach((selector) => {
        if (Array.isArray(selector)) selectorList = selectorList.concat(selector);
        else selectorList.push(selector);
      });
      return _whitesev_domutils.default.createElement("style", {
        type: "text/css",
        innerHTML: `${selectorList.join(",\n")}{display: none !important;}`,
      });
    },
    addBlockCSS(...args) {
      let selectorList = [];
      if (args.length === 0) return;
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") return;
      args.forEach((selector) => {
        if (Array.isArray(selector)) selectorList = selectorList.concat(selector);
        else selectorList.push(selector);
      });
      selectorList = selectorList.map((it) => it.trim()).filter((it) => it !== "");
      if (selectorList.length) return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    addBlockCSSWithEnd(...args) {
      const $css = CommonUtil.addBlockCSS(...args);
      if ($css) document.documentElement.appendChild($css);
      return $css;
    },
    setGMResourceCSS(resourceMapData) {
      const cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) return addStyle(cssText);
      else return CommonUtil.loadStyleLink(resourceMapData.url);
    },
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      return new Promise((resolve) => {
        _whitesev_domutils.default.onReady(() => {
          document.head.appendChild($link);
          resolve($link);
        });
      });
    },
    async loadScript(url) {
      let $script = document.createElement("script");
      $script.src = url;
      return new Promise((resolve) => {
        $script.onload = () => {
          resolve(null);
        };
        (document.head || document.documentElement).appendChild($script);
      });
    },
    fixUrl(url) {
      url = url.trim();
      if (url.startsWith("data:")) return url;
      if (url.match(/^http(s|):\/\//i)) return url;
      else if (url.startsWith("//")) {
        if (url.startsWith("///")) {
        } else url = window.location.protocol + url;
        return url;
      } else {
        if (!url.startsWith("/")) url += "/";
        url = window.location.origin + url;
        return url;
      }
    },
    fixHttps(url) {
      if (url.startsWith("https://")) return url;
      if (!url.startsWith("http://")) return url;
      try {
        let urlInstance = new URL(url);
        urlInstance.protocol = "https:";
        return urlInstance.toString();
      } catch {
        return url;
      }
    },
    lockScroll(...args) {
      let $hidden = document.createElement("style");
      $hidden.innerHTML = `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
      let $elList = [document.documentElement, document.body].concat(...(args || []));
      $elList.forEach(($el) => {
        $el.classList.add("pops-overflow-hidden-important");
      });
      (document.head || document.documentElement).appendChild($hidden);
      return {
        recovery() {
          $elList.forEach(($el) => {
            $el.classList.remove("pops-overflow-hidden-important");
          });
          $hidden.remove();
        },
      };
    },
    async getClipboardText() {
      function readClipboardText(resolve) {
        navigator.clipboard
          .readText()
          .then((clipboardText) => {
            resolve(clipboardText);
          })
          .catch((error) => {
            log.error("读取剪贴板内容失败👉", error);
            resolve("");
          });
      }
      function requestPermissionsWithClipboard(resolve) {
        navigator.permissions
          .query({ name: "clipboard-read" })
          .then(() => {
            readClipboardText(resolve);
          })
          .catch((error) => {
            log.error("申请剪贴板权限失败，尝试直接读取👉", error.message ?? error.name ?? error.stack);
            readClipboardText(resolve);
          });
      }
      function checkClipboardApi() {
        if (typeof navigator?.clipboard?.readText !== "function") return false;
        if (typeof navigator?.permissions?.query !== "function") return false;
        return true;
      }
      return new Promise((resolve) => {
        if (!checkClipboardApi()) {
          resolve("");
          return;
        }
        if (document.hasFocus()) requestPermissionsWithClipboard(resolve);
        else
          window.addEventListener(
            "focus",
            () => {
              requestPermissionsWithClipboard(resolve);
            },
            { once: true }
          );
      });
    },
    escapeHtml(unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/©/g, "&copy;")
        .replace(/®/g, "&reg;")
        .replace(/™/g, "&trade;")
        .replace(/→/g, "&rarr;")
        .replace(/←/g, "&larr;")
        .replace(/↑/g, "&uarr;")
        .replace(/↓/g, "&darr;")
        .replace(/—/g, "&mdash;")
        .replace(/–/g, "&ndash;")
        .replace(/…/g, "&hellip;")
        .replace(/ /g, "&nbsp;")
        .replace(/\r\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\n/g, "<br>")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    },
    interval(fn, intervalTime, timeout = 5e3) {
      let timeId;
      let maxTimeout = timeout - intervalTime;
      let intervalTimeCount = intervalTime;
      let loop = async (isTimeout) => {
        const result = await fn(isTimeout);
        if ((typeof result === "boolean" && result) || isTimeout) {
          utils$1.workerClearTimeout(timeId);
          return;
        }
        intervalTimeCount += intervalTime;
        if (intervalTimeCount > maxTimeout) {
          loop(true);
          return;
        }
        timeId = utils$1.workerSetTimeout(() => {
          loop(false);
        }, intervalTime);
      };
      loop(false);
    },
    findParentNode($el, selector, parentSelector) {
      if (parentSelector) {
        let $parent = _whitesev_domutils.default.closest($el, parentSelector);
        if ($parent) return $parent.querySelector(selector);
      } else {
        if (_whitesev_domutils.default.matches($el, selector)) return $el;
        return _whitesev_domutils.default.closest($el, selector);
      }
    },
    toStr(data, space = 2) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__` + performance.now();
      return JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        space
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
    },
    isVerticalScreen() {
      return !globalThis.screen.orientation.type.includes("landscape");
    },
    isMobileDevice(size = 768) {
      if (this.isVerticalScreen()) return globalThis.innerWidth < size;
      else return globalThis.innerHeight < size;
    },
    isTopWindow() {
      const win = typeof _unsafeWindow === "object" && _unsafeWindow != null ? _unsafeWindow : window;
      return win.top === win.self;
    },
    formatVideoDuration(duration) {
      if (typeof duration !== "number") duration = parseInt(duration);
      if (isNaN(duration)) return duration.toString();
      const zeroPadding = function (num) {
        if (num < 10) return `0${num}`;
        else return num;
      };
      if (duration < 60) return `0:${zeroPadding(duration)}`;
      else if (duration >= 60 && duration < 3600) return `${Math.floor(duration / 60)}:${zeroPadding(duration % 60)}`;
      else {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor(duration / 60) % 60;
        const seconds = duration % 60;
        return `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
      }
    },
    formatTimeStamp(time, endTime) {
      if (typeof time === "number") {
        if (time < 0xe8d4a51000) {
          const padZeroLength = String(Date.now()).length - String(time).length;
          time = time * Math.pow(10, padZeroLength);
        }
      }
      let result = time;
      let oldTime = new Date(typeof time === "string" ? time.replace(/-/g, "/") : time);
      let timeDifference = new Date(endTime ?? Date.now()).getTime() - oldTime.getTime();
      let days = Math.floor(timeDifference / (24 * 3600 * 1e3));
      if (days > 0)
        if (days > 7) result = utils$1.formatTime(oldTime.getTime());
        else result = days + "天前";
      else {
        let leave1 = timeDifference % (24 * 3600 * 1e3);
        let hours = Math.floor(leave1 / (3600 * 1e3));
        if (hours > 0) result = hours + "小时前";
        else {
          let leave2 = leave1 % (3600 * 1e3);
          let minutes = Math.floor(leave2 / (60 * 1e3));
          if (minutes > 0) result = minutes + "分钟前";
          else {
            let leave3 = leave2 % (60 * 1e3);
            result = Math.round(leave3 / 1e3) + "秒前";
          }
        }
      }
      return result;
    },
  };
  var KEY = "GM_Panel";
  var ATTRIBUTE_INIT = "data-init";
  var ATTRIBUTE_KEY = "data-key";
  var ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  var ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  var ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
  var PROPS_STORAGE_API = "data-storage-api";
  var PanelSizeUtil = {
    followBrowserSize: false,
    get width() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerWidth : globalThis.innerWidth;
    },
    get height() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerHeight : globalThis.innerHeight;
    },
  };
  var PanelUISize = {
    setting: {
      get width() {
        if (PanelSizeUtil.width < 550) return "88vw";
        else if (PanelSizeUtil.width < 700) return "550px";
        else return "700px";
      },
      get height() {
        if (PanelSizeUtil.height < 450) return "70vh";
        else if (PanelSizeUtil.height < 550) return "450px";
        else return "550px";
      },
    },
    settingMiddle: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
      get height() {
        return PanelSizeUtil.height < 450 ? "88vh" : "450px";
      },
    },
    settingBig: {
      get width() {
        return PanelSizeUtil.width < 800 ? "92vw" : "800px";
      },
      get height() {
        return PanelSizeUtil.height < 600 ? "80vh" : "600px";
      },
    },
    info: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
      get height() {
        return PanelSizeUtil.height < 250 ? "88vh" : "250px";
      },
    },
  };
  var PanelContent = {
    $data: {
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) this.__contentConfig = new utils$1.Dictionary();
        return this.__contentConfig;
      },
      __defaultBottomContentConfig: [],
    },
    addContentConfig(configList) {
      if (!Array.isArray(configList)) configList = [configList];
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    getDefaultBottomContentConfig(config) {
      if (this.$data.__defaultBottomContentConfig.length) return this.$data.__defaultBottomContentConfig;
      let isDoubleClick = false;
      let timer = void 0;
      const translateCallback = (text, translateMap) => {
        if (config && typeof config.translateCallback === "function")
          return config.translateCallback(text, translateMap);
        else {
          if (typeof translateMap === "object" && translateMap)
            for (const key in translateMap) text = text.replaceAll(`{{${key}}}`, translateMap[key]);
          return text;
        }
      };
      const exportToFile = (fileName, fileData) => {
        if (typeof fileData !== "string") fileData = CommonUtil.toStr(fileData);
        const blob = new Blob([fileData]);
        const blobUrl = globalThis.URL.createObjectURL(blob);
        domUtils
          .createElement("a", {
            href: blobUrl,
            download: fileName,
          })
          .click();
        utils$1.workerSetTimeout(() => {
          globalThis.URL.revokeObjectURL(blobUrl);
        }, 500);
      };
      const dbclick_callback = () => {
        const importConfig = (importEndCallBack) => {
          const $alert = __pops__.alert({
            title: {
              text: translateCallback("请选择导入方式"),
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="local">${translateCallback("本地导入")}</div>
            <div class="btn-control" data-mode="network">${translateCallback("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${translateCallback("剪贴板导入")}</div>`,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: { enable: true },
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
          .btn-control{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
          });
          const $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
          const $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
          const $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
          const updateConfigToStorage = async (data) => {
            if (confirm(translateCallback("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")))
              if (typeof _GM_listValues === "function")
                if (typeof _GM_deleteValue === "function") {
                  _GM_listValues().forEach((key) => {
                    _GM_deleteValue(key);
                  });
                  qmsg.default.success(translateCallback("已清空脚本存储的配置"));
                } else qmsg.default.error(translateCallback("不支持GM_deleteValue函数，无法执行删除脚本配置"));
              else qmsg.default.error(translateCallback("不支持GM_listValues函数，无法清空脚本存储的配置"));
            if (typeof _GM_setValues === "function") _GM_setValues(data);
            else
              Object.keys(data).forEach((key) => {
                const value = data[key];
                _GM_setValue(key, value);
              });
            qmsg.default.success(translateCallback("配置导入完毕"));
            importEndCallBack?.();
          };
          const importFile = (configText) => {
            return new Promise(async (resolve) => {
              const data = utils$1.toJSON(configText);
              if (Object.keys(data).length === 0) qmsg.default.warning(translateCallback("解析为空配置，不导入"));
              else await updateConfigToStorage(data);
              resolve(true);
            });
          };
          domUtils.on($local, "click", (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            const $input = domUtils.createElement("input", {
              type: "file",
              accept: ".json",
            });
            domUtils.on($input, ["propertychange", "input"], () => {
              if (!$input.files?.length) return;
              const uploadFile = $input.files[0];
              const fileReader = new FileReader();
              fileReader.onload = () => {
                importFile(fileReader.result);
              };
              fileReader.readAsText(uploadFile, "UTF-8");
            });
            $input.click();
          });
          domUtils.on($network, "click", (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            const $prompt = __pops__.prompt({
              title: {
                text: translateCallback("网络导入"),
                position: "center",
              },
              content: {
                text: "",
                placeholder: translateCallback("请填写URL"),
                focus: true,
              },
              btn: {
                close: {
                  enable: true,
                  callback(details) {
                    details.close();
                  },
                },
                ok: {
                  text: translateCallback("导入"),
                  callback: async (details) => {
                    const url = details.text;
                    if (utils$1.isNull(url)) {
                      qmsg.default.error(translateCallback("请填入完整的url"));
                      return;
                    }
                    const $loading = qmsg.default.loading(translateCallback("正在获取配置..."));
                    const response = await httpx.get(url, { allowInterceptConfig: false });
                    $loading.close();
                    if (!response.status) {
                      log.error(response);
                      qmsg.default.error(translateCallback("获取配置失败"), { consoleLogContent: true });
                      return;
                    }
                    if (!(await importFile(response.data.responseText))) return;
                    details.close();
                  },
                },
                cancel: { enable: false },
              },
              drag: true,
              mask: { enable: true },
              width: PanelUISize.info.width,
              height: "auto",
            });
            const $promptInput = $prompt.$shadowRoot.querySelector("input");
            const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            domUtils.on($promptInput, ["input", "propertychange"], () => {
              if (domUtils.val($promptInput) === "") domUtils.attr($promptOk, "disabled", "true");
              else domUtils.removeAttr($promptOk, "disabled");
            });
            domUtils.onKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                if (domUtils.val($promptInput) !== "") domUtils.emit($promptOk, "click");
              }
            });
            domUtils.emit($promptInput, "input");
          });
          domUtils.on($clipboard, "click", async (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            let clipboardText = await CommonUtil.getClipboardText();
            if (clipboardText.trim() === "") {
              qmsg.default.warning(translateCallback("获取到的剪贴板内容为空"));
              return;
            }
            if (!(await importFile(clipboardText))) return;
          });
        };
        const exportConfig = (
          fileName = `${SCRIPT_NAME}_panel-setting-${utils$1.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
          fileData
        ) => {
          const $alert = __pops__.alert({
            title: {
              text: translateCallback("请选择导出方式"),
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="export-to-file">${translateCallback("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${translateCallback("导出至剪贴板")}</div>
            `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: { enable: true },
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
          .btn-control{
            display: inline-block;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
          });
          const $exportToFile = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']");
          const $exportToClipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");
          domUtils.on($exportToFile, "click", (event) => {
            domUtils.preventEvent(event);
            try {
              exportToFile(fileName, fileData);
              $alert.close();
            } catch (error) {
              qmsg.default.error(error.toString(), { consoleLogContent: true });
            }
          });
          domUtils.on($exportToClipboard, "click", async () => {
            if (await utils$1.copy(fileData)) {
              qmsg.default.success(translateCallback("复制成功"));
              $alert.close();
            } else qmsg.default.error(translateCallback("复制失败"));
          });
        };
        const $textarea = __pops__
          .confirm({
            title: {
              text: translateCallback("配置"),
              position: "center",
            },
            content: {
              text: `<textarea name="config-value" id="config" readonly></textarea>`,
              html: true,
            },
            btn: {
              ok: {
                enable: true,
                type: "primary",
                text: translateCallback("导入"),
                callback() {
                  importConfig();
                },
              },
              cancel: {
                enable: true,
                text: translateCallback("导出"),
                callback() {
                  exportConfig(void 0, configDataStr);
                },
              },
            },
            width: PanelSizeUtil.width < 450 ? "90vw" : "450px",
            height: "auto",
            style: `
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `,
          })
          .$shadowRoot.querySelector("textarea");
        const configData = {};
        if (typeof _GM_listValues === "function")
          _GM_listValues().forEach((key) => {
            const value = _GM_getValue(key);
            Reflect.set(configData, key, value);
          });
        else {
          qmsg.default.warning(translateCallback("不支持函数GM_listValues，仅导出菜单配置"));
          const panelLocalValue = _GM_getValue(KEY);
          Reflect.set(configData, KEY, panelLocalValue);
        }
        const configDataStr = CommonUtil.toStr(configData);
        $textarea.value = configDataStr;
      };
      const click_callback = () => {
        let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
        if (typeof supportURL === "string" && utils$1.isNotNull(supportURL)) window.open(supportURL, "_blank");
      };
      return [
        {
          id: "script-version",
          title: translateCallback(`版本：{{version}}`, {
            version: _GM_info?.script?.version || translateCallback("未知"),
          }),
          isBottom: true,
          views: [],
          clickFirstCallback() {
            return false;
          },
          afterRender(config) {
            new AnyTouch(config.$asideLiElement).on("tap", function () {
              clearTimeout(timer);
              timer = void 0;
              if (isDoubleClick) {
                isDoubleClick = false;
                dbclick_callback();
              } else {
                timer = setTimeout(() => {
                  isDoubleClick = false;
                  click_callback();
                }, 200);
                isDoubleClick = true;
              }
            });
          },
        },
      ];
    },
    setDefaultBottomContentConfig(config) {
      this.$data.__defaultBottomContentConfig = config;
    },
  };
  var PanelMenu = {
    $data: {
      __menuOption: [
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            Panel.showPanel(PanelContent.getConfig(0));
          },
        },
      ],
      get menuOption() {
        return this.__menuOption;
      },
    },
    init() {
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (!CommonUtil.isTopWindow()) return;
      MenuRegister.add(this.$data.menuOption);
    },
    addMenuOption(option) {
      if (!Array.isArray(option)) option = [option];
      this.$data.menuOption.push(...option);
    },
    updateMenuOption(option) {
      if (!Array.isArray(option)) option = [option];
      option.forEach((optionItem) => {
        let findIndex = this.$data.menuOption.findIndex((it) => {
          return it.key === optionItem.key;
        });
        if (findIndex !== -1) this.$data.menuOption[findIndex] = optionItem;
      });
    },
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    },
  };
  var PanelMenuResultsHandler = class {
    data = {
      storeNodeList: [],
      destoryFnList: [],
    };
    option = {};
    constructor(option) {
      this.option = option;
    }
    handlerResult(enableValue, args) {
      const dynamicMenuStoreNodeList = [];
      const dynamicDestoryFnList = [];
      let resultValueList = [];
      if (Array.isArray(args)) resultValueList = resultValueList.concat(args);
      else {
        const handleArgs = (obj) => {
          if (typeof obj === "object" && obj != null)
            if (obj instanceof Element) resultValueList.push(obj);
            else if (Array.isArray(obj)) handleArgs(obj);
            else {
              const { $css, destory } = obj;
              if ($css != null) {
                if (Array.isArray($css)) resultValueList = resultValueList.concat($css);
                else if ($css instanceof Element) resultValueList.push($css);
              }
              if (typeof destory === "function") resultValueList.push(destory);
            }
          else resultValueList.push(obj);
        };
        handleArgs(args);
      }
      const handleResult = (it) => {
        if (it == null) return;
        if (it instanceof Element) {
          dynamicMenuStoreNodeList.push(it);
          return;
        }
        if (typeof it === "function") {
          dynamicDestoryFnList.push(it);
          return;
        }
      };
      for (const it of resultValueList) {
        const flag = handleResult(it);
        if (typeof flag === "boolean" && !flag) break;
        if (Array.isArray(it))
          for (const it2 of it) {
            const flag2 = handleResult(it2);
            if (typeof flag2 === "boolean" && !flag2) break;
          }
      }
      this.clearStoreNodeList();
      this.execDestoryFnAndClear();
      if (enableValue) {
        this.data.storeNodeList = this.data.storeNodeList.concat(dynamicMenuStoreNodeList);
        this.data.destoryFnList = this.data.destoryFnList.concat(dynamicDestoryFnList);
      }
    }
    getEnableStatus(key) {
      const value = this.option.getValue(key);
      return Boolean(value);
    }
    clearStoreNodeList = () => {
      for (let index = this.data.storeNodeList.length - 1; index >= 0; index--) {
        this.data.storeNodeList[index]?.remove();
        this.data.storeNodeList.splice(index, 1);
      }
    };
    execDestoryFnAndClear = () => {
      for (let index = this.data.destoryFnList.length - 1; index >= 0; index--) {
        const destoryFnItem = this.data.destoryFnList[index];
        destoryFnItem();
        this.data.destoryFnList.splice(index, 1);
      }
    };
    checkMenuExec() {
      let flag = false;
      if (typeof this.option.checkExec === "function") flag = this.option.checkExec(this.option.keyList);
      else flag = this.option.keyList.every((key) => this.getEnableStatus(key));
      return flag;
    }
  };
  var StorageUtils = class {
    storageKey;
    listenerData;
    cacheData;
    callbacks = [];
    constructor(key) {
      if (typeof key === "string") {
        const trimKey = key.trim();
        if (trimKey == "") throw new Error("key can not be empty string");
        this.storageKey = trimKey;
      } else throw new TypeError("key must be a string");
      this.listenerData = new _whitesev_utils.default.Dictionary();
      this.getLocalValue = this.getLocalValue.bind(this);
      this.setLocalValue = this.setLocalValue.bind(this);
      this.destory = this.destory.bind(this);
      this.set = this.set.bind(this);
      this.get = this.get.bind(this);
      this.getAll = this.getAll.bind(this);
      this.delete = this.delete.bind(this);
      this.has = this.has.bind(this);
      this.keys = this.keys.bind(this);
      this.values = this.values.bind(this);
      this.clear = this.clear.bind(this);
      this.addValueChangeListener = this.addValueChangeListener.bind(this);
      this.removeValueChangeListener = this.removeValueChangeListener.bind(this);
      this.emitValueChangeListener = this.emitValueChangeListener.bind(this);
    }
    [Symbol.dispose]() {
      this.destory();
    }
    async [Symbol.asyncDispose]() {
      this.destory();
    }
    destory() {
      this.cacheData = null;
      for (let index = this.callbacks.length - 1; index >= 0; index--) {
        const cb = this.callbacks[index];
        cb();
        this.callbacks.splice(index, 1);
      }
    }
    getLocalValue() {
      if (this.cacheData == null) {
        let localValue = _GM_getValue(this.storageKey);
        if (localValue == null) {
          localValue = {};
          this.setLocalValue(localValue);
        }
        this.destory();
        this.cacheData = localValue;
        const listenerId = _GM_addValueChangeListener(this.storageKey, (name, oldValue, newValue) => {
          this.cacheData = null;
          this.cacheData = newValue;
        });
        this.callbacks.push(() => {
          _GM_removeValueChangeListener(listenerId);
        });
        return localValue;
      } else return this.cacheData;
    }
    setLocalValue(value) {
      this.cacheData = null;
      this.cacheData = value;
      _GM_setValue(this.storageKey, value);
    }
    set(key, value) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.emitValueChangeListener(key, value, oldValue);
    }
    get(key, defaultValue) {
      const localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    getAll() {
      return this.getLocalValue();
    }
    delete(key) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.emitValueChangeListener(key, void 0, oldValue);
    }
    has(key) {
      const localValue = this.getLocalValue();
      return Reflect.has(localValue, key);
    }
    keys() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue);
    }
    values() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue).map((key) => Reflect.get(localValue, key));
    }
    clear() {
      this.destory();
      _GM_deleteValue(this.storageKey);
    }
    addValueChangeListener(key, callback) {
      const listenerId = Math.random();
      const listenerData = this.listenerData.get(key) || [];
      listenerData.push({
        id: listenerId,
        key,
        callback,
      });
      this.listenerData.set(key, listenerData);
      return listenerId;
    }
    removeValueChangeListener(listenerId) {
      let flag = false;
      for (const [key, listenerData] of this.listenerData.entries()) {
        for (let index = 0; index < listenerData.length; index++) {
          const value = listenerData[index];
          if (
            (typeof listenerId === "string" && value.key === listenerId) ||
            (typeof listenerId === "number" && value.id === listenerId)
          ) {
            listenerData.splice(index, 1);
            index--;
            flag = true;
          }
        }
        this.listenerData.set(key, listenerData);
      }
      return flag;
    }
    async emitValueChangeListener(...args) {
      const [key, newValue, oldValue] = args;
      if (!this.listenerData.has(key)) return;
      const listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let __newValue;
          let __oldValue;
          if (args.length === 1) {
          } else if (args.length === 2) __newValue = newValue;
          else if (args.length === 3) {
            __newValue = newValue;
            __oldValue = oldValue;
          }
          await data.callback(key, __newValue, __oldValue);
        }
      }
    }
  };
  var PopsPanelStorageApi = new StorageUtils(KEY);
  var Panel = {
    $data: {
      __contentConfigInitDefaultValue: null,
      __onceExecMenuData: null,
      __urlChangeReloadMenuExecOnce: null,
      __onceExecData: null,
      __panelConfig: {},
      $panel: null,
      panelContent: [],
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null)
          this.__contentConfigInitDefaultValue = new utils$1.Dictionary();
        return this.__contentConfigInitDefaultValue;
      },
      contentConfigInitDisabledKeys: [],
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) this.__onceExecMenuData = new utils$1.Dictionary();
        return this.__onceExecMenuData;
      },
      get urlChangeReloadMenuExecOnce() {
        if (this.__urlChangeReloadMenuExecOnce == null) this.__urlChangeReloadMenuExecOnce = new utils$1.Dictionary();
        return this.__urlChangeReloadMenuExecOnce;
      },
      get onceExecData() {
        if (this.__onceExecData == null) this.__onceExecData = new utils$1.Dictionary();
        return this.__onceExecData;
      },
      get scriptName() {
        return SCRIPT_NAME;
      },
      get panelConfig() {
        return this.__panelConfig;
      },
      set panelConfig(value) {
        this.__panelConfig = value;
      },
      key: KEY,
      attributeKeyName: ATTRIBUTE_KEY,
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE,
    },
    init() {
      this.initContentDefaultValue();
      PanelMenu.init();
    },
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) return;
        if (config.type === "button" || config.type === "container" || config.type === "deepMenu") return;
        const attributes = config.attributes;
        const __attr_init__ = attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          const __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) return;
        }
        const menuDefaultConfig = new Map();
        const key = attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        const moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig)
          Object.keys(moreMenuDefaultConfig).forEach((key) => {
            const defaultValue = moreMenuDefaultConfig[key];
            menuDefaultConfig.set(key, defaultValue);
          });
        if (!menuDefaultConfig.size) {
          log.warn("请先配置键", config);
          return;
        }
        if (config.type === "switch") {
          const disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
          if (typeof disabled === "boolean" && disabled)
            this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
        }
        for (const [__key, __defaultValue] of menuDefaultConfig.entries()) this.setDefaultValue(__key, __defaultValue);
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          const configItem = configList[index];
          initDefaultValue(configItem);
          const childViews = configItem.views;
          if (childViews && Array.isArray(childViews)) loopInitDefaultValue(childViews);
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        const leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.views) continue;
        const rightContentConfigList = leftContentConfigItem.views;
        if (rightContentConfigList && Array.isArray(rightContentConfigList))
          loopInitDefaultValue(rightContentConfigList);
      }
      this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
    },
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key))
        log.warn("该key的默认值已进行初始化，覆盖该默认值: ", {
          key,
          defaultValue,
          coverDefaultValue: this.$data.contentConfigInitDefaultValue.get(key),
        });
      this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
    },
    getDefaultValue(key) {
      return this.$data.contentConfigInitDefaultValue.get(key);
    },
    setValue(key, value) {
      PopsPanelStorageApi.set(key, value);
    },
    getValue(key, defaultValue) {
      const localValue = PopsPanelStorageApi.get(key);
      if (localValue == null) {
        if (this.$data.contentConfigInitDefaultValue.has(key)) return this.$data.contentConfigInitDefaultValue.get(key);
        return defaultValue;
      }
      return localValue;
    },
    deleteValue(key) {
      PopsPanelStorageApi.delete(key);
    },
    hasKey(key) {
      return PopsPanelStorageApi.has(key);
    },
    addValueChangeListener(key, callback, option) {
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, callback);
      if (option?.immediate || option?.immediateAll) {
        const value = this.getValue(key);
        if (option?.immediate) callback(key, value, value);
        else if (option?.immediateAll) Panel.emitMenuValueChange(key, value, value);
      }
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    emitMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.emitValueChangeListener(key, newValue, oldValue);
    },
    async exec(queryKey, callback, checkExec, once = true) {
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) queryKeyFn = () => queryKey;
      else queryKeyFn = queryKey;
      let isArrayKey = false;
      const queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else keyList.push(queryKeyResult);
      const findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      const storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) return this.$data.onceExecMenuData.get(storageKey);
      }
      const listenerIdList = [];
      const panelMenuResultsHandler = new PanelMenuResultsHandler({
        keyList,
        getValue: (key) => {
          const value = this.getValue(key);
          return Boolean(value);
        },
        checkExec(keyList) {
          let flag = false;
          if (typeof checkExec === "function") flag = checkExec(keyList);
          else flag = keyList.every((key) => this.getValue(key));
          return flag;
        },
      });
      const valueChangeCallback = async (valueOption) => {
        const execFlag = panelMenuResultsHandler.checkMenuExec();
        let callbackResult = [];
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          callbackResult = await callback({
            key: keyList,
            triggerKey: valueOption?.key,
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return panelMenuResultsHandler.handlerResult(execFlag, args);
            },
          });
        }
        panelMenuResultsHandler.handlerResult(execFlag, callbackResult);
      };
      if (once)
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key, newValue, oldValue) => {
            return valueChangeCallback({
              key,
              newValue,
              oldValue,
            });
          });
          listenerIdList.push(listenerId);
        });
      await valueChangeCallback();
      const result = {
        checkMenuExec: panelMenuResultsHandler.checkMenuExec.bind(panelMenuResultsHandler),
        keyList,
        reload() {
          this.clearStoreNodeList();
          this.execDestoryFnAndClear();
          valueChangeCallback();
        },
        clear() {
          panelMenuResultsHandler.clearStoreNodeList();
          this.execDestoryFnAndClear();
          this.removeValueChangeListener();
          this.clearOnceExecMenuData();
        },
        clearStoreNodeList: panelMenuResultsHandler.clearStoreNodeList.bind(panelMenuResultsHandler),
        execDestoryFnAndClear: panelMenuResultsHandler.execDestoryFnAndClear.bind(panelMenuResultsHandler),
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        },
        clearOnceExecMenuData() {
          if (once) Panel.$data.onceExecMenuData.delete(storageKey);
        },
      };
      this.$data.onceExecMenuData.set(storageKey, result);
      return result;
    },
    async execMenu(key, callback, isReverse = false, once = false) {
      return await this.exec(
        key,
        async (...args) => {
          return await callback(...args);
        },
        (keyList) => {
          return keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            if (Panel.$data.contentConfigInitDisabledKeys.includes(__key__)) {
              flag = false;
              log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
            }
            if (isReverse) flag = !flag;
            return flag;
          });
        },
        once
      );
    },
    async execMenuOnce(key, callback, isReverse = false, listenUrlChange = false) {
      const result = await this.execMenu(key, callback, isReverse, true);
      if (listenUrlChange) {
        if (result) {
          const urlChangeCallback = () => {
            result.reload();
          };
          this.removeUrlChangeWithExecMenuOnceListener(key);
          this.addUrlChangeWithExecMenuOnceListener(key, urlChangeCallback);
        }
      }
      return result;
    },
    async execMoreMenu(menus, allExecCallback, isReverse = false, once = false, listenUrlChange = false) {
      const results = await Promise.all(
        menus.map(async ([key, callback]) => {
          return await this.execMenu(
            key,
            (...args) => {
              return callback(...args);
            },
            isReverse,
            once
          );
        })
      );
      const panelMenuResultsHandler = new PanelMenuResultsHandler({
        keyList: menus.map(([key]) => key),
        getValue: (key) => {
          const value = this.getValue(key);
          return Boolean(value);
        },
      });
      const listenerIdList = [];
      const __destory__ = (removeListener = false) => {
        panelMenuResultsHandler.clearStoreNodeList();
        panelMenuResultsHandler.execDestoryFnAndClear();
        if (removeListener) {
          for (const listenerId of listenerIdList) this.removeValueChangeListener(listenerId);
          for (const result of results) if (result) this.removeUrlChangeWithExecMenuOnceListener(result.keyList);
        }
      };
      const __allExecCallback__ = () => {
        const allExecFlag = results.every((result) => {
          if (result) return result.checkMenuExec();
          else return true;
        });
        __destory__(false);
        if (allExecFlag) {
          const execResult = allExecCallback();
          panelMenuResultsHandler.handlerResult(allExecFlag, execResult);
        }
      };
      __allExecCallback__();
      for (const result of results)
        if (result) {
          const listenerId = this.addValueChangeListener(result.keyList[0], () => {
            __allExecCallback__();
          });
          listenerIdList.push(listenerId);
          if (listenUrlChange) {
            const urlChangeCallback = () => {
              result.reload();
            };
            this.removeUrlChangeWithExecMenuOnceListener(result.keyList);
            this.addUrlChangeWithExecMenuOnceListener(result.keyList, urlChangeCallback);
          }
        }
      return {
        clear() {
          for (const result of results) result?.clear();
          this.execDestoryFnAndClear();
          this.removeValueChangeListener();
        },
        execDestoryFnAndClear() {
          for (const result of results) result?.execDestoryFnAndClear();
          __destory__(false);
        },
        removeValueChangeListener() {
          for (const result of results) result?.removeValueChangeListener();
          __destory__(true);
        },
      };
    },
    async execMoreMenuOnce(menus, allExecCallback, isReverse = false, listenUrlChange = false) {
      return await this.execMoreMenu(menus, allExecCallback, isReverse, true, listenUrlChange);
    },
    deleteExecMenuOnce(key) {
      key = this.transformKey(key);
      this.$data.onceExecMenuData.delete(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
      return PopsPanelStorageApi.removeValueChangeListener(key);
    },
    onceExec(key, callback, runWithMenuEnable = false) {
      key = this.transformKey(key);
      if (typeof key !== "string") throw new TypeError("key 必须是字符串");
      if (this.$data.onceExecData.has(key)) return;
      if (runWithMenuEnable) {
        if (
          (Array.isArray(key) ? key : [key]).findIndex((it) => {
            if (!!!Panel.getValue(it)) return true;
          }) !== -1
        )
          return;
      }
      callback();
      this.$data.onceExecData.set(key, 1);
    },
    deleteOnceExec(key) {
      key = this.transformKey(key);
      this.$data.onceExecData.delete(key);
    },
    addUrlChangeWithExecMenuOnceListener(key, callback) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.set(key, callback);
      return {
        off: () => {
          return this.removeUrlChangeWithExecMenuOnceListener(key);
        },
      };
    },
    removeUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
    },
    hasUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      return this.$data.urlChangeReloadMenuExecOnce.has(key);
    },
    async emitUrlChangeWithExecMenuOnceEvent(config) {
      const values = this.$data.urlChangeReloadMenuExecOnce.values();
      for (const callback of values) await callback(config);
    },
    showPanel(
      content,
      title = `${SCRIPT_NAME}-设置`,
      preventDefaultContentConfig = false,
      preventRegisterSearchPlugin = false
    ) {
      this.$data.$panel = null;
      this.$data.panelContent = [];
      const checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          return (
            (typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom)) && it.id === "script-version"
          );
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig)
        content.push(...PanelContent.getDefaultBottomContentConfig());
      const $panel = __pops__.panel({
        title: {
          text: title,
          position: "center",
          html: false,
          style: "",
        },
        content,
        btn: {
          close: {
            enable: true,
            callback: (details) => {
              details.close();
              this.$data.$panel = null;
            },
          },
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false,
          },
          clickCallBack: (originalRun) => {
            originalRun();
            this.$data.$panel = null;
          },
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true,
        style: `
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,
        ...this.$data.panelConfig,
      });
      this.$data.$panel = $panel;
      this.$data.panelContent = content;
      if (!preventRegisterSearchPlugin)
        this.registerConfigSearch({
          $panel,
          content,
        });
      return {
        $panel,
        content,
      };
    },
    registerConfigSearch(config) {
      const { $panel, content } = config;
      const translateCallback = (text, translateMap) => {
        if (typeof config.translateCallback === "function") return config.translateCallback(text, translateMap);
        else {
          if (typeof translateMap === "object" && translateMap)
            for (const key in translateMap) text = text.replaceAll(`{{${key}}}`, translateMap[key]);
          return text;
        }
      };
      const asyncQueryProperty = async (target, handler) => {
        if (target == null) return;
        const handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) return handleResult.data;
        return await asyncQueryProperty(handleResult.data, handler);
      };
      const scrollToElementAndListen = ($el, callback) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                callback?.();
                observer.disconnect();
              }
            });
          },
          {
            root: null,
            threshold: 1,
          }
        );
        observer.observe($el);
        $el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      };
      const addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.onAnimationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      const dbclick_callback = (evt) => {
        if (evt.type === "dblclick" && isMobileTouch) return;
        domUtils.preventEvent(evt);
        const $alert = __pops__.alert({
          title: {
            text: translateCallback("搜索配置"),
            position: "center",
          },
          content: {
            text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${translateCallback("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,
            html: true,
          },
          btn: { ok: { enable: false } },
          mask: { clickEvent: { toClose: true } },
          width: PanelUISize.settingMiddle.width,
          height: "auto",
          drag: true,
          style: `
					${__pops__.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
            align-items: center;
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
        });
        const $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        const $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        const clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        const createSearchResultItem = (pathInfo) => {
          const searchPath = utils$1.queryProperty(pathInfo, (target) => {
            if (target?.next)
              return {
                isFind: false,
                data: target.next,
              };
            else
              return {
                isFind: true,
                data: target,
              };
          });
          const $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
          });
          const panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
          domUtils.on($item, "click", () => {
            const $targetAsideItem = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            )[pathInfo.index];
            if (!$targetAsideItem) {
              qmsg.default.error(translateCallback(`左侧项下标{{index}}不存在`, { index: pathInfo.index }));
              return;
            }
            $targetAsideItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            $targetAsideItem.click();
            asyncQueryProperty(pathInfo.next, async (target) => {
              if (target?.next) {
                const $findDeepMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(
                    ($deepMenu) => {
                      const viewConfig = Reflect.get($deepMenu, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return typeof viewConfig === "object" && viewConfig != null && viewConfig.text === target.name;
                    }
                  );
                }, 2500);
                if ($findDeepMenu) $findDeepMenu.click();
                else {
                  qmsg.default.error(translateCallback("未找到对应的二级菜单"));
                  return {
                    isFind: true,
                    data: target,
                  };
                }
                return {
                  isFind: false,
                  data: target.next,
                };
              } else {
                const $findTargetMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(
                    ($menuItem) => {
                      return (
                        Reflect.get($menuItem, panelHandlerComponents.$data.nodeStoreConfigKey) ===
                        target.matchedData?.formConfig
                      );
                    }
                  );
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  const $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    $fold.querySelector(".pops-panel-forms-fold-container").click();
                    await utils$1.sleep(500);
                  }
                  scrollToElementAndListen($findTargetMenu, () => {
                    addFlashingClass($findTargetMenu);
                  });
                } else qmsg.default.error(translateCallback("未找到对应的菜单项"));
                return {
                  isFind: true,
                  data: target,
                };
              }
            });
          });
          return $item;
        };
        const execSearch = (searchText) => {
          const searchTextRegExp = new RegExp(searchText, "i");
          const searchConfigResult = [];
          const loopContentConfig = (configList, path) => {
            for (let index = 0; index < configList.length; index++) {
              const configItem = configList[index];
              const childViewConfig = configItem.views;
              if (childViewConfig && Array.isArray(childViewConfig)) {
                const deepMenuPath = utils$1.deepClone(path);
                if (configItem.type === "deepMenu") {
                  const deepNext = utils$1.queryProperty(deepMenuPath, (target) => {
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
                  });
                  deepNext.next = { name: configItem.text };
                }
                loopContentConfig(childViewConfig, deepMenuPath);
              } else {
                let text;
                let description;
                if (configItem.type === "own") {
                  let searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig === "function") searchConfig = searchConfig();
                    if (typeof searchConfig.text === "string") text = searchConfig.text;
                    if (typeof searchConfig.desc === "string") description = searchConfig.desc;
                  }
                } else {
                  text = configItem.text;
                  description = Reflect.get(configItem, "description");
                }
                const delayMatchedTextList = [text, description];
                const matchedIndex = delayMatchedTextList.findIndex((configText) => {
                  if (typeof configText !== "string") return;
                  return configText.match(searchTextRegExp);
                });
                if (matchedIndex !== -1) {
                  const matchedPath = utils$1.deepClone(path);
                  const deepNext = utils$1.queryProperty(matchedPath, (target) => {
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
                  });
                  deepNext.next = {
                    name: text,
                    matchedData: {
                      path: "",
                      formConfig: configItem,
                      matchedText: delayMatchedTextList[matchedIndex],
                      description,
                    },
                  };
                  const pathList = [];
                  utils$1.queryProperty(matchedPath, (target) => {
                    const name = target?.name;
                    if (typeof name === "string" && name.trim() !== "") pathList.push(name);
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
                  });
                  const pathStr = pathList.join(CommonUtil.escapeHtml(" - "));
                  deepNext.next.matchedData.path = pathStr;
                  searchConfigResult.push(matchedPath);
                }
              }
            }
          };
          for (let index = 0; index < content.length; index++) {
            const leftContentConfigItem = content[index];
            if (!leftContentConfigItem.views) continue;
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") continue;
            const rightContentConfigList = leftContentConfigItem.views;
            if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
              let text = leftContentConfigItem.title;
              if (typeof text === "function") text = text();
              loopContentConfig(rightContentConfigList, {
                index,
                name: text,
              });
            }
          }
          const $fragment = document.createDocumentFragment();
          for (const pathInfo of searchConfigResult) {
            const $resultItem = createSearchResultItem(pathInfo);
            $fragment.appendChild($resultItem);
          }
          clearSearchResult();
          $searchResultWrapper.append($fragment);
        };
        domUtils.on(
          $searchInput,
          "input",
          utils$1.debounce((evt2) => {
            domUtils.preventEvent(evt2);
            const searchText = domUtils.val($searchInput).trim();
            if (searchText === "") {
              clearSearchResult();
              return;
            }
            execSearch(searchText);
          }, 200)
        );
      };
      $panel.$shadowRoot
        .querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`)
        .forEach(($asideItem) => {
          domUtils.on($asideItem, "dblclick", dbclick_callback);
        });
      const clickMap = new WeakMap();
      let isDoubleClick = false;
      let timer = void 0;
      let isMobileTouch = false;
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, $selector) => {
          isMobileTouch = true;
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickMap.has($selector)) {
            isDoubleClick = false;
            clickMap.delete($selector);
            dbclick_callback(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            isDoubleClick = true;
            clickMap.set($selector, evt);
          }
        },
        { capture: true }
      );
      $panel.$shadowRoot.appendChild(
        domUtils.createElement("style", {
          type: "text/css",
          textContent: `
    			.pops-flashing{
    				animation: double-blink 1.5s ease-in-out;
    			}
    			@keyframes double-blink {
    				 0% {
    					background-color: initial;
    				}
    				25% {
    					background-color: yellow;
    				}
    				50% {
    					background-color: initial;
    				}
    				75% {
    					background-color: yellow;
    				}
    				100% {
    					background-color: initial;
    				}
    			}
    		`,
        })
      );
    },
    transformKey(key) {
      if (Array.isArray(key))
        if (key.length > 1) {
          const keyArray = key.sort();
          return JSON.stringify(keyArray);
        } else return key[0];
      else return key;
    },
    getDynamicValue(key, defaultValue) {
      let isInit = false;
      let __value = defaultValue;
      const listenerId = this.addValueChangeListener(key, (_, newValue) => {
        __value = newValue;
      });
      return {
        get value() {
          if (!isInit) {
            isInit = true;
            __value = Panel.getValue(key, defaultValue);
          }
          return __value;
        },
        destory() {
          Panel.removeValueChangeListener(listenerId);
        },
      };
    },
  };
  var PanelSettingConfig = {
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom",
    },
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3,
    },
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false,
    },
    httpx_cookie_manager_enable: {
      key: "httpx-use-cookie-enable",
      defaultValue: false,
    },
    httpx_cookie_manager_use_document_cookie: {
      key: "httpx-use-document-cookie",
      defaultValue: false,
    },
  };
  var utils$1 = _whitesev_utils.default.noConflict();
  var domUtils = _whitesev_domutils.default.noConflict();
  var __pops__ = _whitesev_pops.default;
  var log = new utils$1.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  var SCRIPT_NAME = _GM_info?.script?.name || void 0;
  var AnyTouch = _whitesev_pops.default.fn.Utils.AnyTouch();
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
  var getPageMaxZIndex = () => {
    const deviation = 100;
    const popsZIndex = _whitesev_pops.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0;
    const pointZIndex = utils$1.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    return Math.max(deviation, popsZIndex, pointZIndex);
  };
  qmsg.default.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(qmsgInst) {
      const qmsgType = qmsgInst.setting.type;
      if (qmsgType === "loading") return false;
      const content = qmsgInst.setting.content;
      if (qmsgType === "warning") log.warn(content);
      else if (qmsgType === "error") log.error(content);
      else log.info(content);
      return false;
    },
    get position() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_position.key,
        PanelSettingConfig.qmsg_config_position.defaultValue
      );
    },
    get maxNums() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_maxnums.key,
        PanelSettingConfig.qmsg_config_maxnums.defaultValue
      );
    },
    get showReverse() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_showreverse.key,
        PanelSettingConfig.qmsg_config_showreverse.defaultValue
      );
    },
    get zIndex() {
      return getPageMaxZIndex();
    },
  });
  __pops__.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      return getPageMaxZIndex();
    },
    mask: {
      enable: true,
      clickEvent: {
        toClose: false,
        toHide: false,
      },
    },
    drag: true,
  });
  var MenuRegister = new utils$1.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  var httpx = new utils$1.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    isConsoleRequestOption: false,
  });
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(
    (response) => {
      return response;
    },
    (data) => {
      log.error("[Httpx-HttpxRequest.response] 响应错误", { data });
      if (data.type === "onabort") qmsg.default.warning("请求取消", { consoleLogContent: true });
      else if (data.type === "onerror") qmsg.default.error("请求异常", { consoleLogContent: true });
      else if (data.type === "ontimeout") qmsg.default.error("请求超时", { consoleLogContent: true });
      else qmsg.default.error("其它错误", { consoleLogContent: true });
      return data;
    }
  );
  (_unsafeWindow.Object.defineProperty,
    _unsafeWindow.Object.keys,
    _unsafeWindow.Object.values,
    _unsafeWindow.Function.prototype.apply,
    _unsafeWindow.Function.prototype.call,
    _unsafeWindow.Element.prototype.appendChild,
    _unsafeWindow.setTimeout.bind(_unsafeWindow),
    _unsafeWindow.clearTimeout.bind(_unsafeWindow),
    _unsafeWindow.setInterval.bind(_unsafeWindow),
    _unsafeWindow.clearInterval.bind(_unsafeWindow));
  var addStyle = domUtils.addStyle.bind(domUtils);
  var addStyleWithEnd = (cssText) => {
    const $css = addStyle(cssText);
    document.documentElement.appendChild($css);
    return $css;
  };
  var addBlockCSS = CommonUtil.addBlockCSS.bind(CommonUtil);
  var addBlockCSSWithEnd = CommonUtil.addBlockCSSWithEnd.bind(CommonUtil);
  _whitesev_domutils.default.selector.bind(_whitesev_domutils.default);
  var $$ = _whitesev_domutils.default.selectorAll.bind(_whitesev_domutils.default);
  var cookieManager = new utils$1.CookieManagerService({ baseCookieHandler: "GM_cookie" });
  if (!cookieManager.isSupportGM_cookie)
    if (cookieManager.isSupportCookieStore) cookieManager.setOptions({ baseCookieHandler: "cookieStore" });
    else cookieManager.setOptions({ baseCookieHandler: "document.cookie" });
  new utils$1.DocumentCookieHandler();
  var BingWallpaper = {
    api: "https://cn.bing.com/HPImageArchive.aspx",
    imgOrigin: "https://cn.bing.com",
    get params() {
      return {
        format: "js",
        idx: 0,
        n: 8,
        mkt: "zh-CN",
      };
    },
    async getTodayImgUrlInfos() {
      const response = await httpx.get(this.api, {
        data: { ...this.params },
        fetch: false,
        allowInterceptConfig: false,
        headers: {
          Referer: "https://www.bing.com/",
          Origin: "https://www.bing.com",
          "Content-Type": "application/json",
        },
      });
      if (!response.status) return;
      const data = utils$1.toJSON(response.data.responseText);
      if (!Array.isArray(data.images) || data.images.length === 0) {
        log.error(`获取背景图片失败`, response, data);
        return;
      }
      const urls = data.images
        .map((item) => {
          let url = void 0;
          if (typeof item.urlbase === "string") url = this.imgOrigin + item.urlbase + "_UHD.jpg";
          else if (typeof item.url === "string") {
            url = this.imgOrigin + item.url;
            url = url.replace("_1920x1080.jpg", "_UHD.jpg");
          }
          if (url)
            return {
              uhd: url,
              "1080p": url.replace("_UHD.jpg", "_1920x1080.jpg"),
              "720p": url.replace("_UHD.jpg", "_1280x720.jpg"),
            };
        })
        .filter((it) => it != null);
      if (!urls.length) return;
      return urls;
    },
    async getTodayRandomImgUrlInfo() {
      const urls = await this.getTodayImgUrlInfos();
      if (!Array.isArray(urls) || urls.length === 0) return;
      return urls[Math.floor(Math.random() * urls.length)];
    },
  };
  var BACKGROUND_URL = "https://api.paugram.com/bing";
  var localWallpaperInfo = _GM_getValue("wallpaper-today-url");
  if (
    localWallpaperInfo &&
    utils$1.formatTime(localWallpaperInfo.time, "yyyy-MM-dd") === utils$1.formatTime(Date.now(), "yyyy-MM-dd")
  ) {
    BACKGROUND_URL = localWallpaperInfo.url;
    log.info("今日壁纸url已获取，使用该url作为壁纸：" + BACKGROUND_URL);
  } else
    BingWallpaper.getTodayImgUrlInfos().then((todayWallpaper) => {
      if (todayWallpaper && todayWallpaper.length) {
        BACKGROUND_URL = todayWallpaper[0].uhd;
        _GM_setValue("wallpaper-today-url", {
          url: todayWallpaper[0].uhd,
          time: Date.now(),
        });
      }
    });
  var ConcurrencyAsyncQueue = class {
    queue;
    runningCount;
    concurrency;
    intervalTime;
    constructor(concurrency = 1, intervalTime = 300) {
      this.queue = [];
      this.concurrency = concurrency;
      this.intervalTime = intervalTime;
      this.runningCount = 0;
    }
    enqueue(task) {
      this.queue.push(task);
      this.runNext();
    }
    async runNext() {
      while (this.runningCount < this.concurrency && this.queue.length > 0) {
        this.runningCount++;
        const task = this.queue.shift();
        try {
          await task();
          if (this.intervalTime > 0) await new Promise((resolve) => setTimeout(resolve, this.intervalTime));
        } catch (error) {
          console.error(error);
        } finally {
          this.runningCount--;
          this.runNext();
        }
      }
    }
  };
  var BaiduSearchResult = {
    init() {
      Panel.execMenuOnce(
        [
          "baidu-search-optimizationResult-enable",
          "baidu-search-optimizationResult-removeAds",
          "baidu-search-optimizationResult-redirect",
          "baidu-search-optimizationResult-addFavicon",
          "baidu-search-optimizationResult-markUnsafeLink",
        ],
        (config) => {
          const [enable, removeAds, redirect, addFavicon, markUnsafeLink] = config.value;
          if (!enable) return;
          if (!removeAds && !redirect && !addFavicon && !markUnsafeLink) return;
          return this.searchResultOptimization({
            removeAds,
            redirect,
            addFavicon,
            markUnsafeLink,
          });
        }
      );
    },
    searchResultOptimization(config) {
      log.info(`搜索结果优化`, config);
      const requestQueue = new ConcurrencyAsyncQueue(1, 150);
      const isTransferLink = (url) => {
        try {
          const urlInst = new URL(url);
          if (urlInst.hostname === "www.baidu.com" && urlInst.pathname === "/link" && urlInst.searchParams.has("url"))
            return true;
        } catch {}
        return false;
      };
      const lockFn = new utils$1.LockFunction(() => {
        $$("#content_left > div:not([data-stop-direct])").forEach(async ($result) => {
          if (config.removeAds && domUtils.selector('.se_st_footer:contains("广告")', $result)) {
            $result.remove();
            return;
          }
          const $title =
            $result.querySelector("a.sc-link[href]") ||
            $result.querySelector(".c-title a[href]") ||
            $result.querySelector("a.cosc-title-a[href]") ||
            $result.querySelector('[class*="c-line-"] > a[href][class^="title_"]') ||
            $result.querySelector("h3.c-gap-bottom-small > a[href]");
          if (!$title) {
            $result.setAttribute("data-no-title", "1");
            return;
          }
          const mu = $result.getAttribute("mu");
          const realLinkList = [];
          if (typeof mu === "string") realLinkList.push(mu);
          const feedbackStr = $result.querySelector(".cosc-feedback[data-feedback]")?.getAttribute("data-feedback");
          if (feedbackStr) {
            const feedback = utils$1.toJSON(feedbackStr);
            if (typeof feedback.url === "string") realLinkList.push(feedback.url);
          }
          let isMustRequestFinalUrl = false;
          let realLink = realLinkList.find((url) => {
            try {
              const linkInst = new URL(url);
              if (linkInst.hostname === "nourl.ubs.baidu.com" || linkInst.hostname.endsWith(".lightapp.baidu.com"))
                return;
              if (linkInst.hostname === "agents.baidu.com") {
                isMustRequestFinalUrl = true;
                return;
              }
              if (isTransferLink(url)) return;
            } catch {}
            return url;
          });
          const titleUrl = $title.href?.trim();
          if (!realLink) {
            const requestAttr = "data-direct-http-request-ing";
            if ($title.hasAttribute(requestAttr)) return;
            else if (isTransferLink(titleUrl) || isMustRequestFinalUrl) {
              const requestFinalUrlAttr = "data-request-final-url";
              if ($title.hasAttribute(requestFinalUrlAttr)) realLink = $title.getAttribute(requestFinalUrlAttr);
              else {
                $title.setAttribute(requestAttr, "true");
                requestQueue.enqueue(async () => {
                  const response = await httpx.get(titleUrl.replace(/^http:\/\//, "https://"), {
                    fetch: false,
                    allowInterceptConfig: false,
                  });
                  $title.removeAttribute(requestAttr);
                  if (!response.status) return;
                  let finalUrl = response.data.finalUrl;
                  if (isTransferLink(finalUrl)) {
                    const url = response.data.responseText.match(/.location.replace\("(.+?)"\)/)?.[1];
                    if (url && !isTransferLink(url)) finalUrl = url;
                    return;
                  }
                  $title.setAttribute(requestFinalUrlAttr, finalUrl);
                });
                return;
              }
            } else return;
          }
          $result.setAttribute("data-stop-direct", "true");
          if (config.redirect && isTransferLink(titleUrl)) {
            $title.href = realLink;
            $title.setAttribute("data-before-url", titleUrl);
            $result.setAttribute("data-before-url", titleUrl);
          }
          if (config.addFavicon) {
            const $ico = domUtils.createElement("img");
            $ico.className = "website-ico";
            $ico.loading = "lazy";
            try {
              $ico.src = `${new URL(realLink).origin}/favicon.ico`;
              domUtils.prepend($title, $ico);
              domUtils.css($title, {
                display: "flex",
                "align-items": "center",
              });
              domUtils.on(
                $ico,
                "error",
                () => {
                  $ico.remove();
                },
                { once: true }
              );
            } catch {}
          }
          if (config.markUnsafeLink) {
            if ($title.href.startsWith("http://")) {
              domUtils.prepend(
                $title,
                `
                <svg viewBox="0 0 1102 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style="margin-right: 4px;float: left;"><path d="M1079.847385 767.133538l-389.513847-690.845538c-62.621538-101.651692-215.197538-101.769846-277.858461 0l-389.513846 690.806154c-64 103.896615 13.469538 235.441231 138.870154 235.441231H940.898462c125.282462 0 202.909538-131.426462 138.909538-235.401847zM551.384615 877.843692c-35.603692 0-64.590769-27.963077-64.590769-62.345846 0-34.343385 28.987077-62.306462 64.590769-62.306461 35.603692 0 64.590769 27.963077 64.59077 62.306461 0 34.382769-28.987077 62.345846-64.59077 62.345846z m64.59077-249.304615c0 34.343385-28.987077 62.306462-64.59077 62.306461-35.603692 0-64.590769-27.963077-64.590769-62.345846V316.849231c0-34.382769 28.987077-62.345846 64.590769-62.345846 35.603692 0 64.590769 27.963077 64.59077 62.345846v311.650461z" fill="#ED4662" p-id="6187"></path></svg>
              `
              );
              domUtils.css($title, {
                color: "#ecb3b3 !important",
                "text-decoration": "line-through !important",
              });
            }
          }
        });
      });
      const observer = utils$1.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
          attributes: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        addStyleWithEnd(`
          img.website-ico{
            width: 1em;
            height: 1em;
            object-fit: contain;
            margin-right: 4px;
            float: left;
          }
          #content_left a.sc-link:has(img.website-ico){
            display: inline-flex !important;
          }
        `),
        () => {
          observer.disconnect();
        },
        config.removeAds
          ? addBlockCSSWithEnd("#content_left > div:has(.ec-tuiguang)", "#content_left > div:has(.c-recomm-wrap)")
          : null,
      ];
    },
  };
  var BaiduSearch = {
    init() {
      Panel.execMenuOnce("baidu-search-removeAds", () => {
        return this.removeAds();
      });
      Panel.execMenuOnce("baidu-search-removeRightPanel", () => {
        return this.removeRightPanel();
      });
      Panel.execMenuOnce("baidu-search-removeEveryOneSearch", () => {
        return this.removeEveryOneSearch();
      });
      Panel.execMenuOnce("baidu-search-removeRelatedSearch", () => {
        return this.removeRelatedSearch();
      });
      Panel.execMenuOnce("baidu-search-removeSelectTextDialog", () => {
        return this.removeSelectTextDialog();
      });
      Panel.execMenuOnce(["baidu-search-showOptimization-enable", "baidu-search-showOptimization-mode"], (config) => {
        const [enable, mode] = config.value;
        if (!enable) return;
        if (utils$1.isNull(mode)) return;
        return this.searchResultShowOptimization(mode);
      });
      Panel.execMenuOnce(
        [
          "baidu-search-ownBackgroundImage-enable",
          "baidu-search-ownBackgroundImage-url",
          "baidu-search-ownBackgroundImage-opacity",
        ],
        (config) => {
          const [enable, url, opacity] = config.value;
          if (!enable) return;
          if (utils$1.isNull(url)) return;
          if (!opacity) return;
          return this.ownBackgroundImage({
            enable,
            url,
            opacity,
          });
        }
      );
      BaiduSearchResult.init();
    },
    removeAds() {
      log.info(`移除广告`);
      return addBlockCSSWithEnd("#top-ad", '#content_left .result-op[tpl="uer_feedback"]');
    },
    removeRightPanel() {
      log.info(`移除右侧栏`);
      return addBlockCSSWithEnd("#content_right");
    },
    removeEveryOneSearch() {
      log.info(`移除大家都在搜`);
      return addBlockCSSWithEnd('.result-op[tpl="recommend_list"]');
    },
    removeRelatedSearch() {
      log.info(`移除相关搜索`);
      return addBlockCSSWithEnd(".result-molecule:has(#rs_new)");
    },
    removeSelectTextDialog() {
      log.info(`移除选中文本弹窗`);
      return addBlockCSSWithEnd("#wrapper_wrapper > .selected-search-box");
    },
    searchResultShowOptimization(mode) {
      log.info(`搜索结果显示优化: ` + mode);
      const resultContainerCSS = (resultCardCSSText, contentLeftCSSText) => {
        return `
        #container #content_left{
        & > .c-container,
        & > .new-pmd,
        & > .c-group-wrapper{
          ${resultCardCSSText}
        }

        ${contentLeftCSSText || ""}
      }
      `;
      };
      const result = [
        addStyleWithEnd(
          resultContainerCSS(
            "",
            `
          /* AI回答结果变成滚动条形式 */
          & .cosc-card-content [class^="fold-content_"]{
            min-height: unset !important;
            overflow: auto !important;
          }
          /* 隐藏展开按钮 */
          & .cosc-card-content [class^="wenda-general-fold-switch_"]{
            display: none !important;
          }
          /* 百度百科内容不换行 */
          & .c-row[class*="card-normal_"]{
            display: block;
          }
      `
          )
        ),
        addStyleWithEnd(`
        #wrapper #head{
            background-color: rgba(248, 248, 248, 0.4) !important;
            border-bottom: none;
            backdrop-filter: blur(10px);
        }
      `),
      ];
      const titleHoverCSS = resultContainerCSS(`
      & a.cosc-title-a,
      & .c-title a[href],
      & [class*="_sc-title"] a.sc-link,
      & [class*="c-line-"]:has(> a[href][class^="title_"]) {
          position: relative;

          &,
          & span,
          & p.sc-paragraph{
              text-decoration: none !important;
              float: inline-end;
          }
          /* 如果插入了图标，要保持图标和标题垂直居中 */
          &:has(>img.website-ico),
          &:has(>svg){
            line-height: 1;
          }
          &:hover:after {
              left: 0;
              width: 100%;
              transition: width 350ms;
          }

          &:after {
              content: "";
              position: absolute;
              border-bottom: 2px solid #3476d2;
              bottom: 0px;
              left: 100%;
              width: 0;
              transition: width 350ms, left 350ms;
              left: 0;
          }
      }
    `);
      const centerCSS = `
      #container{
          margin: 0px auto !important;
          width: auto !important;
      }
      #container #content_left{
          width:  100% !important;
          margin: unset;
          justify-self: center;
          float: unset;
      }
      ${resultContainerCSS(`
        &{
          width: 100%;
        }
        /* 内容宽度适配 */
        & .c-row .c-span-last[class*="content_"]{
          width: auto;
          float: unset;
        }
      `)}
      /* 顶部输入框居中 */
      .head_wrapper .s_form,
      .input-head-wrapper [class^="head-left_"]{
        width: unset;
        padding: unset;
        justify-self: center;
        margin: 0 auto;
      }
      #s_tab_inner{
        padding: 0 !important;
        justify-self: center;
      }
      #image-search-header [class^="input-container-"]{
        margin: 0 auto !important;
      }

      #header_top_bar{
        margin: 0 auto;
      }
      /* 顶部的搜索结果涉及价格仅作参考，请以商家官网为准 */
      #content_left > div:first-child:not(:has(*)) {
        text-align: center;
      }
      /* 抱歉，未找到相关结果 */
      #container .content_none{
        float: unset;
        margin: 0 auto;
      }
      /* 页码居中 */
      #page [class^="page-inner"]{
        width: min-content !important;
        padding-left: 0px !important;
        margin: 0 auto;
      }
      /* 底部 */
      #foot .foot-inner{
        width: unset !important;
        justify-self: center !important;
      }
      #foot .foot-inner #help{
        margin: 0 !important;
      }

      `;
      const resultCardCSSText = resultContainerCSS(
        `
        &{
          padding: 15px 20px;
          margin: 0 0 30px 0;
          border-radius: 8px;
          background-color: #fff;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        /* AI总结卡片 样式移除 */
        & [class*="card-border"]{
          border: none;
          border-radius: 0px;
        }
        & [class*="card-border"] [class^="baikan-card-header"]{
          background: none;
        }
        /* 标题背景色 */
        & a.sc-link[href],
        & .c-title a[href],
        & [class*="title-box_"],
        & [class*="c-line-"]:has(> a[href][class^="title_"]),
        & [class*="title-container_"]:has(>.cosc-title a.cosc-title-a){
            background-color: #f8f8f8;
            width: 100%;
            max-width: unset;
            margin: 0px -20px;
            padding: 5px 20px;
        }
        /* 标题宽度适配（撑满） */
        & [class*="c-line-"] > a[href][class^="title_"],
        & [class*="title-container_"] >.cosc-title a.cosc-title-a{
          width: 100%;
          max-width: unset;
          display: inline-flex !important;
        }
        /* 标题容器高度适配 */
        & [class*="title-wrapper"] {
          &{
            margin-bottom: 8px;
          }
          & [class*="title-box"],
          & [class*="title-box"] h3.cosc-title{
            margin-bottom: 0px;
            padding-bottom: 0px;
          }
        }

        /* 标题移除省略号 */
        & .c-title a,
        & a.cosc-title-a{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
        }
    `,
        `
      /* 您要找的是不是 xxx */
      .result-molecule.hit-toptip > .c-gap-bottom-large{
        margin-bottom: 0px;
      }
      /* 没有找到该URL。您可以直接访问 xxx */
      .result-molecule > .hit_top_new.res-border-bottom{
        &,
        & [class*="gap-bottom-small"]{
          margin-bottom: 0px;
          border: 0px;
        }
      }
      /* 顶部的百度AI 大型卡片容器 */
      .c-group-wrapper{
        margin: 0px 0px 30px 0px !important;

        & > .c-container,
        & > .new-pmd{
          padding: 0px !important;
          width: 100% !important;
        }
      }
    `
      );
      const moreColumnCSS = resultContainerCSS(
        `
       & .c-row[class*="source_"]:has(a),
       & .cos-row [class*="source-pc_"]{
          position: relative;
        }
      `,
        `
      &{
        display: grid;
        grid-gap: 0 20px;
        grid-template-columns: repeat(2, 48%);
        grid-template-areas: "xmain xmain";
        margin: 0 auto;
        position: relative;
        padding-left: 2%;
        float: unset;
        width: 90%;
        max-width: 1400px;
        margin-bottom: 30px;
      }
    `
      );
      result.push(addStyleWithEnd(resultCardCSSText), addStyleWithEnd(titleHoverCSS));
      if (mode === "single-center")
        result.push(
          addStyleWithEnd(centerCSS),
          addStyleWithEnd(`
        #container #content_left{
          & > div:not(:empty)[class]{
            width: 55%;
            justify-self: center;
          }
        }
      `)
        );
      else if (mode === "double-column-center")
        result.push(
          addStyleWithEnd(moreColumnCSS),
          addStyleWithEnd(centerCSS),
          addBlockCSSWithEnd(`
        #container #content_left{
          &>div:not(:empty){
            max-width: 100%;
          }
        }
        `)
        );
      else if (mode === "three-column-center")
        result.push(
          addStyleWithEnd(moreColumnCSS),
          addStyleWithEnd(centerCSS),
          addStyleWithEnd(`
        #container #content_left{
          grid-template-columns: repeat(3, 33.3%);
          grid-template-areas: "xmain xmain xmain";
          &>div:not(:empty){
            max-width: 100%;
          }
        }
      `)
        );
      else if (mode === "four-column-center")
        result.push(
          addStyleWithEnd(moreColumnCSS),
          addStyleWithEnd(centerCSS),
          addStyleWithEnd(`
        #container #content_left{
          grid-template-columns: repeat(4, 25%);
          grid-template-areas: "xmain xmain xmain xmain";
          &>div:not(:empty){
            max-width: 100%;
          }
        }
      `)
        );
      else log.error(`不支持的搜索结果显示模式: ` + mode);
      return result;
    },
    ownBackgroundImage: (config) => {
      log.info(`自定义背景图`);
      return addStyleWithEnd(`
      body:before {
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        background-image: url("${config.url.trim()}");
        background-size: 100% auto;
        opacity: ${config.opacity ?? 0.8};
      }
    `);
    },
  };
  var GoogleSearchResult = {
    init() {
      Panel.execMenuOnce(
        ["google-search-optimizationResult-enable", "google-search-optimizationResult-openBlank"],
        (config) => {
          const [enable, openBlank] = config.value;
          if (!enable) return;
          if (!openBlank) return;
          return this.searchResultOptimization({ openBlank });
        }
      );
    },
    searchResultOptimization(config) {
      log.info(`搜索结果优化`, config);
      const lockFn = new utils$1.LockFunction(() => {
        const $results = [
          ...$$("#rso:not(:has(>script)) > div:not(:empty) > div[data-rpos]:not(:empty):not([data-hijack])"),
          ...$$(
            "#rso:has(>script)>div:not(:empty)>div:not(:empty):has(>div):not(:has(.related-question-pair)):not([data-hijack])"
          ),
        ];
        for (const $result of $results)
          if (config.openBlank)
            $result.querySelectorAll("a[href]:not([target='blank_'])").forEach(($link) => {
              $link.setAttribute("target", "_blank");
            });
      });
      const observer = utils$1.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        () => {
          observer.disconnect();
        },
      ];
    },
  };
  var GoogleSearch = {
    init() {
      Panel.execMenuOnce("google-search-removeAds", () => {
        return this.removeAds();
      });
      Panel.execMenuOnce("google-search-removeAIOverview", () => {
        return this.removeAIOverview();
      });
      Panel.execMenuOnce("google-search-removeRightPanel", () => {
        return this.removeRightPanel();
      });
      Panel.execMenuOnce("google-search-removeRelatedSearch", () => {
        return this.removeRelatedSearch();
      });
      Panel.execMenuOnce("google-search-removeQuestions", () => {
        return this.removeQuestions();
      });
      Panel.execMenuOnce(["google-search-showOptimization-enable", "google-search-showOptimization-mode"], (config) => {
        const [enable, mode] = config.value;
        if (!enable) return;
        if (utils$1.isNull(mode)) return;
        return this.searchResultShowOptimization(mode);
      });
      Panel.execMenuOnce(
        [
          "google-search-ownBackgroundImage-enable",
          "google-search-ownBackgroundImage-url",
          "google-search-ownBackgroundImage-opacity",
        ],
        (config) => {
          const [enable, url, opacity] = config.value;
          if (!enable) return;
          if (utils$1.isNull(url)) return;
          if (!opacity) return;
          return this.ownBackgroundImage({
            enable,
            url,
            opacity,
          });
        }
      );
      GoogleSearchResult.init();
    },
    removeAds() {
      log.info(`移除广告`);
      return addBlockCSS("#bottomads");
    },
    removeAIOverview() {
      log.info(`移除AI概览`);
      return addBlockCSS("#rcnt > div:not([role='main']):not(:empty):has([data-mcpr])");
    },
    removeRightPanel() {
      log.info(`移除右侧栏`);
      return addBlockCSS("#rhs");
    },
    removeRelatedSearch() {
      log.info(`移除用户还搜索了`);
      return addBlockCSS("#botstuff");
    },
    removeQuestions() {
      log.info(`移除相关问题`);
      return addBlockCSS("#rso > div:not(:empty) > div:has(.related-question-pair)");
    },
    searchResultShowOptimization(mode) {
      log.info(`搜索结果显示优化: ` + mode);
      const result = [
        addBlockCSS(".kp-wholepage-osrp"),
        addStyle(`
        div[style*="top"] #searchform {
            background-color: rgba(248, 248, 248, 0.4) !important;
            border-bottom: none;
            backdrop-filter: blur(10px)
        }
      `),
      ];
      const titleHoverCSS = `
        #rso a,
        #rso a h3 {
            text-decoration: none !important;
        }

        #rso a h3 {
            &:hover:after{
                left: 0;
                width: 100%;
                transition: width 350ms;
            }
            &:after{
                content: "";
                position: absolute;
                border-bottom: 2px solid #3476d2;
                bottom: -3px;
                left: 100%;
                width: 0;
                transition: width 350ms, left 350ms;
            }
        }

    `;
      const centerCSS =
        '\n    #rcnt{\n        display: flex !important;\n        flex-direction: column;\n        width: 80%;\n        margin: 0 auto;\n    }\n    [id^="center_"][role="main"]{\n        display: flex;\n        flex-direction: column;\n        justify-self: center;\n    }\n    /* 隐藏空结果 */\n    #rso:not(:has(>script)) > div:empty,\n    #rso:not(:has(>script)) > div:not(:has([data-rpos])),\n    #rso:has(>script)>div:not(:empty)>div:not(:has(>div)){\n        display: none;\n    }\n    /* 顶部输入框居中 */\n    #searchform{\n        display: block;\n        justify-items: center;\n\n        >div{\n            justify-content: unset;\n        }\n\n        textarea{\n            min-width: 300px;\n        }\n\n        button[type="submit"]{\n            margin-right: 2em;\n        }\n    }\n    /* 顶部搜索结果选项导航栏居中 */\n    [data-st-tgt="fb"] > div:not(:empty){\n        display: block !important;\n    }\n    [data-st-tgt="fb"] > div:not(:empty) [role="navigation"]{\n        justify-self: center;\n    }\n    /* 小提示： 限制此搜索仅展示xxx搜索结果。 详细了解如何按语言过滤搜索结果 */\n    [id^="center_"][role="main"] #taw{\n        justify-items: center;\n    }\n    \n      /* 显示更多 */\n      .RDmXvc{\n          margin: 0 !important;\n          padding: 0 !important;\n      }\n      /* 展开的遮罩元素 */\n      [aria-controls="m-x-content"][aria-expanded]{\n          width: 100%;\n          text-align: center;\n      }\n      /* 提问输入框 */\n      .wPoHPd{\n        margin: 0px !important;\n        max-width: unset !important;\n      }\n      /* 内容 */\n      .mZJni{\n        max-width: unset !important;\n      }\n    ';
      const resultCSS = `
        /* 搜索结果的样式和标题的悬浮样式 */
        #rso:not(:has(>script)) > div:not(:empty) > div[data-rpos]:not(:empty),
        #rso:has(>script)>div:not(:empty)>div:not(:empty):has(>div):not(:has(.related-question-pair)):not(:has(#bottomads)){
            width: 100% !important;
            padding: 15px 20px;
            margin-top: 0px;
            margin-bottom: 20px;
            border-radius: 5px;
            background-color: #fff;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, 0.1);
            transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;

            &:hover{
                border: 1px solid rgba(0, 0, 0, 0.3);
                box-shadow: 0 0 1px grey;
                -webkit-box-shadow: 0 0 1px grey;
                -moz-box-shadow: 0 0 1px gray;
            }
        }
    `;
      const moreColumnCSS = `
      #rso:not(:has(>script)),
      #rso:has(>script)>div:not(:empty){
          display: grid;
          grid-template-columns: repeat(2, 48%);
          grid-gap: 0 20px;
          grid-template-areas: "xmain xmain";
          margin: 0 auto;
          position: relative;
          padding-left: 2%;
          float: unset;
          width: 90%;
          max-width: 1400px;
          margin-bottom: 30px;
      }
      /* 高度统一 */
      #rso:not(:has(>script)) > div:not(:empty) > div[data-rpos]:not(:empty),
      #rso:has(>script)>div:not(:empty)>div:not(:empty):has(>div):not(:has(.related-question-pair)){
          height: -webkit-fill-available;
      }
    `;
      result.push(addStyle(centerCSS), addStyle(resultCSS), addStyle(titleHoverCSS));
      if (mode === "single-center")
        result.push(
          addStyle(`
        #rso{
            width: 55%;
            justify-self: center;
        }
      `)
        );
      else if (mode === "double-column-center") result.push(addStyle(moreColumnCSS));
      else if (mode === "three-column-center")
        result.push(
          addStyle(moreColumnCSS),
          addStyle(`
        #rso:not(:has(>script)),
        #rso:has(>script)>div:not(:empty){
            grid-template-columns: repeat(3, 33.3%);
            grid-template-areas: "xmain xmain xmain";
        }
      `)
        );
      else if (mode === "four-column-center")
        result.push(
          addStyle(moreColumnCSS),
          addStyle(`
        #rso:not(:has(>script)),
        #rso:has(>script)>div:not(:empty){
          grid-template-columns: repeat(4, 25%);
          grid-template-areas: "xmain xmain xmain xmain";
        }
      `)
        );
      else log.error(`不支持的搜索结果显示模式: ` + mode);
      return result;
    },
    ownBackgroundImage: (config) => {
      log.info(`自定义背景图`);
      return addStyle(`
      body:before {
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        background-image: url("${config.url.trim()}");
        background-size: 100% auto;
        opacity: ${config.opacity ?? 0.8};
      }
    `);
    },
  };
  var BingSearch = {
    init() {
      Panel.execMenuOnce("bing-search-removeAds", () => {
        return this.removeAds();
      });
      Panel.execMenuOnce("bing-search-removeInputPrediction", () => {
        return this.removeInputPrediction();
      });
      Panel.execMenuOnce("bing-search-bing-search-removeInputHistory", () => {
        return this.removeInputHistory();
      });
      Panel.execMenuOnce("bing-search-bing-search-removeInputHistory-relatedToRecentSearches", () => {
        return this.removeInputHistoryAndRelatedToRecentSearches();
      });
      Panel.execMenuOnce("bing-search-removeRightMoreSearchResult", () => {
        return this.removeRightMoreSearchResult();
      });
      Panel.execMenuOnce("bing-search-removeCopilotSearch", () => {
        return this.removeCopilotSearch();
      });
      Panel.execMenuOnce("bing-search-removeBottomFloatingToolbar", () => {
        return this.removeBottomFloatingToolbar();
      });
      Panel.execMenuOnce("bing-search-removeOtherUserSearch", () => {
        return this.removeOtherUserSearch();
      });
      Panel.execMenuOnce("bing-search-removeTopLeftAreaSwtich", () => {
        return this.removeTopLeftAreaSwtich();
      });
      Panel.execMenuOnce("bing-search-removeTopRightAccountSetting", () => {
        return this.removeTopRightAccountSetting();
      });
      Panel.execMenuOnce("bing-search-removeAboutAnyResultsTip", () => {
        return this.removeAboutAnyResultsTip();
      });
      Panel.execMenuOnce("bing-search-removeBottomPartOfSearchResultTip", () => {
        return this.removeBottomPartOfSearchResultTip();
      });
      Panel.execMenuOnce("bing-search-removeBottomRightCopyright", () => {
        return this.removeBottomRightCopyright();
      });
      Panel.execMenuOnce(["bing-search-showOptimization-enable", "bing-search-showOptimization-mode"], (config) => {
        const [enable, mode] = config.value;
        if (!enable) return;
        if (utils$1.isNull(mode)) return;
        return this.searchResultShowOptimization(mode);
      });
      Panel.execMenuOnce(
        [
          "bing-search-ownBackgroundImage-enable",
          "bing-search-ownBackgroundImage-url",
          "bing-search-ownBackgroundImage-opacity",
        ],
        (config) => {
          const [enable, url, opacity] = config.value;
          if (!enable) return;
          if (utils$1.isNull(url)) return;
          if (!opacity) return;
          return this.ownBackgroundImage({
            enable,
            url,
            opacity,
          });
        }
      );
    },
    removeAds() {
      return addBlockCSSWithEnd(
        "#b_bnp_bopc",
        "#b_topw:has(.b_ad)",
        "#b_results .b_ad",
        "#b_results .b_algo:has(.jrwmcyhr)",
        ".b_vfly_c",
        "#b_results .b_mop:has(.b_mrwu_c)"
      );
    },
    removeInputPrediction() {
      log.info(`移除输入预测`);
      return addStyleWithEnd(`
    #b_header{
      & #sa_ul ~ * {
          display: none !important;
      }

      & #sa_ul {
          width: 100% !important;
      }

      & #sb_form {
          max-width: 600px;
          white-space: nowrap;
          & input.b_searchbox {
              width: 500px;
          }
      }
    }
    `);
    },
    removeInputHistory() {
      log.info(`移除输入历史记录`);
      return addBlockCSSWithEnd("#b_header #sa_ul #sa_hs_block");
    },
    removeInputHistoryAndRelatedToRecentSearches() {
      log.info(`移除输入历史记录 - 与最近的搜索相关`);
      return addBlockCSSWithEnd("#b_header #sa_ul #sa_sse_block");
    },
    removeRightMoreSearchResult() {
      log.info(`移除右侧更多搜索结果`);
      return addBlockCSSWithEnd("#b_content aside");
    },
    removeCopilotSearch() {
      log.info(`移除Copilot Search`);
      return addBlockCSSWithEnd(
        "#b_content .b_ans:has(.cht_container)",
        '#b_content .b_ans:has(.answer_container[aria-label*="Copilot 搜索"])'
      );
    },
    removeBottomFloatingToolbar() {
      log.info(`移除底部悬浮的工具栏`);
      return addBlockCSSWithEnd("#b_bop_cs_sb_place");
    },
    removeOtherUserSearch() {
      log.info(`移除其它用户还搜索过/其他用户还问了以下问题`);
      return addBlockCSSWithEnd(
        '#b_results .b_ans:has(a[aria-label*="还搜索"])',
        '#b_results .b_algo:has(a[aria-label*="还搜索"])',
        "#b_results .b_ans:has(#df_listaa)"
      );
    },
    removeTopLeftAreaSwtich() {
      log.info(`移除左上角 国内版/国际版`);
      return addBlockCSSWithEnd("#est_switch");
    },
    removeTopRightAccountSetting() {
      log.info(`移除右上角 帐户奖励和偏好设置`);
      return addBlockCSSWithEnd("#id_h");
    },
    removeAboutAnyResultsTip() {
      log.info(`移除约xxx个结果`);
      return addBlockCSSWithEnd("#b_tween");
    },
    removeBottomPartOfSearchResultTip() {
      log.info(`移除底部 部分搜索结果未予显示`);
      return addBlockCSSWithEnd('#b_results li.b_msg:has(a[href*="microsoft.com/fwlink"])');
    },
    removeBottomRightCopyright() {
      log.info(`移除底部右下角 备案信息`);
      return addBlockCSSWithEnd("#b_footer");
    },
    searchResultShowOptimization(mode) {
      const result = [
        addBlockCSSWithEnd(`
        header#b_header[style*="top"][role="banner"]{
            background-color: rgba(248, 248, 248, 0.4) !important;
            border-bottom: none !important;
            backdrop-filter: blur(10px);
        }
      `),
      ];
      const centerCSS = `
      #b_header {
          /* 输入框居中 */
          & #sb_form {
              display: block;
              justify-self: center;
              position: relative;


              /* 仅让输入框居中，左边的logo图标在里面会造成视觉上的不居中 */
              /* 这时候需要让logo移出文档流 */
              & .b_logoArea{
                left: 0;
                position: absolute;
                transform: translateX(-64px);
                margin-left: 0;
                margin-right: 0;
                vertical-align: unset;
                margin-top: 0px;
                place-self: center;
              }
          }

          /* 搜索结果类型居中 */
          & nav.b_scopebar {
              margin: 11px;
              justify-self: center;
          }
      }

      #b_content {
          padding: 0;

          /* 顶部某个网站的快捷功能 */
          & #b_pole{
            justify-items: center;
          }
          /* 约 xxx个结果 居中 */
          & #b_tween {
              text-align: center;
              padding: 0;
              margin: 10px;
          }
          /* 搜索结果居中 */
          & #b_results,
          & #b_mcw {
              display: block;
              justify-self: center;
              max-width: 1400px;
              width: auto;
              margin: 32px 0px 0px 0px !important;
          }
      }
    `;
      const resultCardCSS = `
      #b_results,
      #b_mcw {
        & .b_ans,
        & .b_algo,
        & .b_ans.b_vidAns {
            padding: 15px 20px;
            margin-top: 0;
            margin-left: 0;
            margin-bottom: 30px;
            border-radius: 8px;
            background-color: #fff;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        & .b_ans,
        & .b_algo {
          & .b_vlist2col{
            justify-content: space-between;
          }
        }
        /* xxx的视频 */
        & .b_ans.b_vidAns:has(#serpvidans),
        /* xxx的图片 */
        & .b_ans.b_imgansacf{
            padding: 15px 20px !important;
        }
        /* 页码 */
        & .b_pag{
            justify-self: center;
        }
      }
      /* 顶部的特殊搜索结果卡片宽度溢出适配 */
      #b_mcw #b_wpt_container{
        width: 100% !important;
      }
    `;
      const moreColumnCSS = `
      #b_content {
          & #b_results{
            display: grid;
            grid-template-columns: repeat(2, 48%);
            grid-gap: 0 20px;
            grid-template-areas: "xmain xmain";
            margin: 0 auto;
            position: relative;
            padding-left: 2%;
            float: unset;
            width: 90%;
            max-width: 1400px;
            margin-bottom: 30px;
          }
      }     
    `;
      result.push(addStyleWithEnd(resultCardCSS), addStyleWithEnd(centerCSS));
      if (mode === "single-center") {
      } else if (mode === "double-column-center") result.push(addStyleWithEnd(moreColumnCSS));
      else if (mode === "three-column-center")
        result.push(
          addStyleWithEnd(moreColumnCSS),
          addBlockCSSWithEnd(`
        #b_content {
          & #b_results{
            grid-template-columns: repeat(3, 33.3%);
            grid-template-areas: "xmain xmain xmain";
          }
        }
      `)
        );
      else if (mode === "four-column-center")
        result.push(
          addStyleWithEnd(moreColumnCSS),
          addBlockCSSWithEnd(`
        #b_content {
          & #b_results{
            grid-template-columns: repeat(4, 25%);
            grid-template-areas: "xmain xmain xmain xmain";
          }
        }
      `)
        );
      return result;
    },
    ownBackgroundImage: (config) => {
      log.info(`自定义背景图`);
      return addStyleWithEnd(`
      body:before {
        pointer-events: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: "";
        background-image: url("${config.url.trim()}");
        background-size: 100% auto;
        opacity: ${config.opacity ?? 0.8};
      }
      #b_content{
        background: transparent;
      }
    `);
    },
  };
  var SearchEngine = {
    init() {
      if (SearchEngineRouter.isBaiduSearch()) {
        log.info(`Baidu - 启动`);
        BaiduSearch.init();
      } else if (SearchEngineRouter.isGoogleSearch()) {
        log.info(`Google - 启动`);
        GoogleSearch.init();
      } else if (SearchEngineRouter.isBingSearch()) {
        log.info(`Bing - 启动`);
        BingSearch.init();
      }
    },
  };
  var UIInput = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    inputType = "text",
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
    const result = {
      text,
      type: "input",
      inputType,
      attributes: {},
      props: {},
      description,
      placeholder,
      afterAddToUListCallBack,
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, value) {
        const isValid = event.target.validity.valid;
        if (typeof changeCallback === "function") {
          if (changeCallback(event, value, isValid)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallback === "function") valueChangeCallback(event, value, isValid);
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("input", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
    const result = {
      text,
      type: "select",
      description,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(isSelectedInfo) {
        if (isSelectedInfo == null) return;
        const value = isSelectedInfo.value;
        log.info(`选择：${isSelectedInfo.text}`);
        if (typeof selectCallBack === "function") {
          if (selectCallBack(isSelectedInfo)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(isSelectedInfo);
      },
      data,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var UISlider = function (
    text,
    key,
    defaultValue,
    min,
    max,
    changeCallback,
    getToolTipContent,
    description,
    step,
    valueChangeCallBack
  ) {
    const result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      getToolTipContent(value) {
        if (typeof getToolTipContent === "function") return getToolTipContent(value);
        else return `${value}`;
      },
      callback(event, value) {
        if (typeof changeCallback === "function") {
          if (changeCallback(event, value)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(event, value);
      },
      min,
      max,
      step,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("slider", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var UISwitch = function (
    text,
    key,
    defaultValue = false,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack,
    shortCutOption
  ) {
    if (shortCutOption && typeof shortCutOption.defaultValue === "object" && shortCutOption.defaultValue != null) {
      const shortCutKey = shortCutOption.key ?? key;
      shortCutOption.handler.add({
        key: shortCutKey,
        name: text,
      });
      shortCutOption.handler.shortCut.initConfig(shortCutKey, shortCutOption.defaultValue);
    }
    const result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, __value) {
        const value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          if (clickCallBack(event, value)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(event, value);
      },
      afterAddToUListCallBack: (...args) => {
        afterAddToUListCallBack?.(...args);
        if (shortCutOption) {
          const shortCut = shortCutOption.handler.shortCut;
          const shortCutKey = shortCutOption.key ?? key;
          const [_, container] = args;
          const $leftMainText = container.target?.querySelector(".pops-panel-item-left-main-text");
          if (!$leftMainText) return;
          const renderKeyboard = () => {
            const tooltipShowText = shortCutOption.handler.shortCut.getShowText(shortCutKey, "暂未录入快捷键");
            const $wrapper = domUtils.createElement(
              "div",
              {
                className: "pops-switch-shortcut-wrapper",
                innerHTML: `
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `,
              },
              { style: "margin-right: 5px;display: inline-flex;" }
            );
            const $icon = $wrapper.querySelector(".pops-bottom-icon");
            domUtils.on(
              $icon,
              "click",
              function (evt) {
                shortCutOption.handler.shortCut.deleteOption(shortCutKey);
                $tooltip.toolTip.offEvent();
                $tooltip.toolTip.close();
                $tooltip.toolTip.destory();
                $wrapper.remove();
              },
              { once: true }
            );
            const $tooltip = __pops__.tooltip({
              $target: $icon,
              content: () => {
                return tooltipShowText;
              },
              className: "github-tooltip",
              isFixed: true,
              only: true,
            });
            domUtils.empty($leftMainText);
            domUtils.append($leftMainText, $wrapper, text);
          };
          __pops__.rightClickMenu({
            $target: $leftMainText,
            only: true,
            data: [
              {
                text: () => {
                  if (shortCutOption.handler.shortCut.hasOption(shortCutKey)) return "修改快捷键";
                  else return "添加快捷键";
                },
                icon: __pops__.config.iconSVG.keyboard,
                callback(clickEvent, contextMenuEvent, $li, $listenerRootNode) {
                  if (shortCut.isWaitKeyboardPress()) {
                    qmsg.default.warning("请先执行当前的录入操作");
                    return;
                  }
                  const $loading = qmsg.default.loading("请按下快捷键...", {
                    showClose: true,
                    onClose() {
                      shortCut.cancelEnterShortcutKeys();
                    },
                  });
                  shortCut.enterShortcutKeys(shortCutKey).then(({ status, option, key: isUsedKey }) => {
                    $loading.close();
                    if (status) {
                      log.success("录入快捷键", option);
                      qmsg.default.success("录入成功");
                      renderKeyboard();
                    } else
                      qmsg.default.error(
                        `快捷键 ${shortCut.translateKeyboardValueToButtonText(option)} 已被 ${isUsedKey} 占用`
                      );
                  });
                },
              },
            ],
          });
          if (!shortCut.hasOption(shortCutKey)) return;
          renderKeyboard();
        }
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) this.__storeApiFn = new _whitesev_utils.default.Dictionary();
        return this.__storeApiFn;
      },
    },
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) return;
      return this.$data.storeApiValue.get(type);
    },
    hasStorageApi(type) {
      return this.$data.storeApiValue.has(type);
    },
    setStorageApi(type, storageApiValue) {
      this.$data.storeApiValue.set(type, storageApiValue);
    },
    initComponentsStorageApi(type, config, storageApiValue) {
      let propsStorageApi;
      if (this.hasStorageApi(type)) propsStorageApi = this.getStorageApi(type);
      else propsStorageApi = storageApiValue;
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    },
  };
  var Component_Baidu = {
    id: "baidu",
    title: "百度搜索",
    isDefault: SearchEngineRouter.isBaiduSearch(),
    views: [
      {
        text: "通用",
        type: "container",
        views: [
          UISwitch("移除广告", "baidu-search-removeAds", true),
          UISwitch("移除右侧栏", "baidu-search-removeRightPanel", true),
          UISwitch("移除大家都在搜", "baidu-search-removeEveryOneSearch", true),
          UISwitch("移除相关搜索", "baidu-search-removeRelatedSearch", true),
          UISwitch("移除选中文本弹窗", "baidu-search-removeSelectTextDialog", true),
        ],
      },
      {
        text: "显示模式优化",
        type: "container",
        views: [
          UISwitch("开启", "baidu-search-showOptimization-enable", true),
          UISelect("模式", "baidu-search-showOptimization-mode", "single-center", [
            {
              text: "无",
              value: "",
            },
            {
              text: "单列居中",
              value: "single-center",
            },
            {
              text: "双列居中",
              value: "double-column-center",
            },
            {
              text: "三列居中",
              value: "three-column-center",
            },
            {
              text: "四列居中",
              value: "four-column-center",
            },
          ]),
        ],
      },
      {
        type: "container",
        text: "自定义背景图",
        views: [
          UISwitch("启用", "baidu-search-ownBackgroundImage-enable", true),
          UIInput("图片地址", "baidu-search-ownBackgroundImage-url", BACKGROUND_URL, "url地址或base64图片"),
          UISlider(
            "图片透明度",
            "baidu-search-ownBackgroundImage-opacity",
            0.8,
            0,
            1,
            void 0,
            void 0,
            "值越低越透明",
            0.1
          ),
        ],
      },
      {
        type: "container",
        text: "搜索结果优化",
        views: [
          UISwitch("启用", "baidu-search-optimizationResult-enable", true, void 0, "开启后下面的功能才会生效"),
          UISwitch("移除广告", "baidu-search-optimizationResult-removeAds", true),
          UISwitch("链接重定向", "baidu-search-optimizationResult-redirect", true),
          UISwitch("添加favicon", "baidu-search-optimizationResult-addFavicon", true),
          UISwitch("标识非安全的链接", "baidu-search-optimizationResult-markUnsafeLink", true),
        ],
      },
    ],
  };
  var Component_Bing = {
    id: "bing",
    title: "Bing搜索",
    isDefault: SearchEngineRouter.isBingSearch(),
    views: [
      {
        text: "通用",
        type: "container",
        views: [
          UISwitch("移除广告", "bing-search-removeAds", true),
          UISwitch("移除输入预测", "bing-search-removeInputPrediction"),
          UISwitch("移除输入历史记录", "bing-search-removeInputHistory"),
          UISwitch("移除输入历史记录 - 与最近的搜索相关", "bing-search-removeInputHistory-relatedToRecentSearches"),
          UISwitch("移除右侧更多搜索结果", "bing-search-removeRightMoreSearchResult", true),
          UISwitch("移除Copilot Search", "bing-search-removeCopilotSearch"),
          UISwitch("移除底部悬浮的工具栏", "bing-search-removeBottomFloatingToolbar", true),
          UISwitch("移除其它用户还搜索过/其他用户还问了以下问题", "bing-search-removeOtherUserSearch", true),
          UISwitch("移除左上角 国内版/国际版", "bing-search-removeTopLeftAreaSwtich"),
          UISwitch("移除右上角 帐户奖励和偏好设置", "bing-search-removeTopRightAccountSetting"),
          UISwitch(
            "移除约xxx个结果",
            "bing-search-removeAboutAnyResultsTip",
            false,
            void 0,
            "搜索结果最上面的提示文字和图标"
          ),
          UISwitch("移除底部 部分搜索结果未予显示", "bing-search-removeBottomPartOfSearchResultTip"),
          UISwitch("移除底部右下角 备案信息", "bing-search-removeBottomRightCopyright"),
        ],
      },
      {
        text: "显示模式优化",
        type: "container",
        views: [
          UISwitch("开启", "bing-search-showOptimization-enable", true),
          UISelect("模式", "bing-search-showOptimization-mode", "single-center", [
            {
              text: "无",
              value: "",
            },
            {
              text: "单列居中",
              value: "single-center",
            },
            {
              text: "双列居中",
              value: "double-column-center",
            },
            {
              text: "三列居中",
              value: "three-column-center",
            },
            {
              text: "四列居中",
              value: "four-column-center",
            },
          ]),
        ],
      },
      {
        type: "container",
        text: "自定义背景图",
        views: [
          UISwitch("启用", "bing-search-ownBackgroundImage-enable", true),
          UIInput("图片地址", "bing-search-ownBackgroundImage-url", BACKGROUND_URL, "url地址或base64图片"),
          UISlider(
            "图片透明度",
            "bing-search-ownBackgroundImage-opacity",
            0.8,
            0,
            1,
            void 0,
            void 0,
            "值越低越透明",
            0.1
          ),
        ],
      },
    ],
  };
  var Component_Common = {
    id: "view-general",
    title: "通用",
    views: [
      {
        text: "Toast配置",
        type: "container",
        views: [
          UISelect(
            "Toast位置",
            PanelSettingConfig.qmsg_config_position.key,
            PanelSettingConfig.qmsg_config_position.defaultValue,
            [
              {
                value: "topleft",
                text: "左上角",
              },
              {
                value: "top",
                text: "顶部",
              },
              {
                value: "topright",
                text: "右上角",
              },
              {
                value: "left",
                text: "左边",
              },
              {
                value: "center",
                text: "中间",
              },
              {
                value: "right",
                text: "右边",
              },
              {
                value: "bottomleft",
                text: "左下角",
              },
              {
                value: "bottom",
                text: "底部",
              },
              {
                value: "bottomright",
                text: "右下角",
              },
            ],
            (isSelectedInfo) => {
              log.info("设置当前Qmsg弹出位置" + isSelectedInfo.text);
            },
            "Toast显示在页面九宫格的位置"
          ),
          UISelect(
            "最多显示的数量",
            PanelSettingConfig.qmsg_config_maxnums.key,
            PanelSettingConfig.qmsg_config_maxnums.defaultValue,
            [
              {
                value: 1,
                text: "1",
              },
              {
                value: 2,
                text: "2",
              },
              {
                value: 3,
                text: "3",
              },
              {
                value: 4,
                text: "4",
              },
              {
                value: 5,
                text: "5",
              },
            ],
            void 0,
            "限制Toast显示的数量"
          ),
          UISwitch(
            "逆序弹出",
            PanelSettingConfig.qmsg_config_showreverse.key,
            PanelSettingConfig.qmsg_config_showreverse.defaultValue,
            void 0,
            "修改Toast弹出的顺序"
          ),
        ],
      },
      {
        text: "Cookie配置",
        type: "container",
        views: [
          UISwitch(
            "启用",
            PanelSettingConfig.httpx_cookie_manager_enable.key,
            PanelSettingConfig.httpx_cookie_manager_enable.defaultValue,
            void 0,
            "Api请求时会自动使用下面的Cookie设置"
          ),
          UISwitch(
            "使用document.cookie",
            PanelSettingConfig.httpx_cookie_manager_use_document_cookie.key,
            PanelSettingConfig.httpx_cookie_manager_use_document_cookie.defaultValue,
            void 0,
            "会自动根据请求的域名来使用cookie"
          ),
        ],
      },
    ],
  };
  var Component_Google = {
    id: "google",
    title: "Google搜索",
    isDefault: SearchEngineRouter.isGoogleSearch(),
    views: [
      {
        text: "通用",
        type: "container",
        views: [
          UISwitch("移除广告", "google-search-removeAds", true),
          UISwitch("移除AI概览", "google-search-removeAIOverview", false),
          UISwitch("移除右侧栏", "google-search-removeRightPanel", true),
          UISwitch("移除用户还搜索了", "google-search-removeRelatedSearch", true),
          UISwitch("移除相关问题", "google-search-removeQuestions", true),
        ],
      },
      {
        text: "显示模式优化",
        type: "container",
        views: [
          UISwitch("开启", "google-search-showOptimization-enable", true),
          UISelect("模式", "google-search-showOptimization-mode", "single-center", [
            {
              text: "无",
              value: "",
            },
            {
              text: "单列居中",
              value: "single-center",
            },
            {
              text: "双列居中",
              value: "double-column-center",
            },
            {
              text: "三列居中",
              value: "three-column-center",
            },
            {
              text: "四列居中",
              value: "four-column-center",
            },
          ]),
        ],
      },
      {
        type: "container",
        text: "自定义背景图",
        views: [
          UISwitch("启用", "google-search-ownBackgroundImage-enable", true),
          UIInput("图片地址", "google-search-ownBackgroundImage-url", BACKGROUND_URL, "url地址或base64图片"),
          UISlider(
            "图片透明度",
            "google-search-ownBackgroundImage-opacity",
            0.8,
            0,
            1,
            void 0,
            void 0,
            "值越低越透明",
            0.1
          ),
        ],
      },
      {
        type: "container",
        text: "搜索结果优化",
        views: [
          UISwitch("启用", "google-search-optimizationResult-enable", true),
          UISwitch("新标签页打开", "google-search-optimizationResult-openBlank", true),
        ],
      },
    ],
  };
  PanelContent.addContentConfig([Component_Common, Component_Baidu, Component_Google, Component_Bing]);
  Panel.init();
  SearchEngine.init();
})(DOMUtils, pops, Utils, Qmsg);
