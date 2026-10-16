import { unsafeWindow } from "ViteGM";

type MatchType = "same" | "includes" | "startsWith" | "endsWith" | "match";
class RouterBuilder {
  private __href__: string | undefined;
  private get __href() {
    return this.__href__ || globalThis.location.href;
  }
  private __origin = {
    value: void 0 as string | RegExp | undefined,
    type: "same" as MatchType,
  };
  private __protocol = {
    value: void 0 as string | RegExp | undefined,
    type: "same" as MatchType,
  };
  private __host = {
    value: void 0 as string | RegExp | undefined,
    type: "same" as MatchType,
    /**
     * + `true`: `window.location.host`
     * + `false`: `window.location.hostname`
     */
    hasPort: false as boolean,
  };
  private __pathname = {
    value: void 0 as string | RegExp | undefined,
    type: "same" as MatchType,
  };
  private __searchParams = {
    value: new Set<{
      /**
       * 如果传入正则类型，则正则匹配
       */
      name: string | RegExp;
      value?: string | RegExp | number | boolean;
      type?: MatchType;
    }>(),
  };
  private __hash = {
    value: void 0 as string | RegExp | undefined,
    type: "same" as MatchType,
  };
  /**
   * 其它实例的结果
   *
   * 用于or比较结果
   */
  private otherInstResultWithOr: boolean = false;
  constructor(href?: string) {
    if (typeof href === "string") {
      this.href(href);
    }
  }
  /**
   * 直接填入url
   */
  href(url: string) {
    this.__href__ = url;
    return this;
  }
  /**
   * 原始
   */
  origin(origin: string) {
    this.__origin = {
      value: origin,
      type: "same",
    };
    return this;
  }
  originStartsWith(origin: string) {
    this.__origin = {
      value: origin,
      type: "startsWith",
    };
    return this;
  }
  originEndsWith(origin: string) {
    this.__origin = {
      value: origin,
      type: "endsWith",
    };
    return this;
  }
  originIncludes(origin: string) {
    this.__origin = {
      value: origin,
      type: "includes",
    };
    return this;
  }
  originMatch(origin: RegExp) {
    this.__origin = {
      value: origin,
      type: "match",
    };
    return this;
  }
  /**
   * 协议
   */
  protocol(protocol: string) {
    this.__protocol = {
      value: protocol,
      type: "same",
    };
    return this;
  }
  protocolStartsWith(protocol: string) {
    this.__protocol = {
      value: protocol,
      type: "startsWith",
    };
    return this;
  }
  protocolEndsWith(protocol: string) {
    this.__protocol = {
      value: protocol,
      type: "endsWith",
    };
    return this;
  }
  protocolIncludes(protocol: string) {
    this.__protocol = {
      value: protocol,
      type: "includes",
    };
    return this;
  }
  protocolMatch(protocol: RegExp) {
    this.__protocol = {
      value: protocol,
      type: "match",
    };
    return this;
  }
  /**
   * 主机（可带端口）
   *
   * 字符串完全相同才行
   * @example
   * host("www.baidu.com")
   * @example
   * host("www.baidu.com:8080")
   */
  host(host: string) {
    this.__host = {
      value: host,
      type: "same",
      hasPort: true,
    };
    return this;
  }
  hostStartsWith(host: string) {
    this.__host = {
      value: host,
      type: "startsWith",
      hasPort: true,
    };
    return this;
  }
  hostEndsWith(host: string) {
    this.__host = {
      value: host,
      type: "endsWith",
      hasPort: true,
    };
    return this;
  }
  hostIncludes(host: string) {
    this.__host = {
      value: host,
      type: "includes",
      hasPort: true,
    };
    return this;
  }
  hostMatch(host: RegExp) {
    this.__host = {
      value: host,
      type: "match",
      hasPort: true,
    };
    return this;
  }
  /**
   * 主机名
   *
   * 字符串完全相同才行
   * @param name 需要匹配的主机名
   * @example
   * .hostName("www.baidu.com")
   */
  hostName(name: string) {
    this.__host = {
      value: name,
      type: "same",
      hasPort: false,
    };
    return this;
  }
  hostNameStartsWith(name: string) {
    this.__host = {
      value: name,
      type: "startsWith",
      hasPort: false,
    };
    return this;
  }
  hostNameEndsWith(name: string) {
    this.__host = {
      value: name,
      type: "endsWith",
      hasPort: false,
    };
    return this;
  }
  hostNameIncludes(name: string) {
    this.__host = {
      value: name,
      type: "includes",
      hasPort: false,
    };
    return this;
  }
  hostNameMatch(name: RegExp) {
    this.__host = {
      value: name,
      type: "match",
      hasPort: false,
    };
    return this;
  }
  /**
   * 路径
   */
  pathname(pathname: string) {
    this.__pathname = {
      value: pathname,
      type: "same",
    };
    return this;
  }
  pathnameStartsWith(pathname: string) {
    this.__pathname = {
      value: pathname,
      type: "startsWith",
    };
    return this;
  }
  pathnameEndsWith(pathname: string) {
    this.__pathname = {
      value: pathname,
      type: "endsWith",
    };
    return this;
  }
  pathnameIncludes(pathname: string) {
    this.__pathname = {
      value: pathname,
      type: "includes",
    };
    return this;
  }
  pathnameMatch(pathname: RegExp) {
    this.__pathname = {
      value: pathname,
      type: "match",
    };
    return this;
  }
  /**
   * 搜索参数
   * @param name 搜索key
   * @param value 搜索value，如果string、number、boolean（自动转string），则是same，如果是RegExp，则是match
   */
  searchParams(name: string, value?: string | number | boolean | RegExp) {
    this.__searchParams.value.add({
      name,
      value,
    });
    return this;
  }
  /**
   * 搜索参数总字符串
   * @param value 需要进行匹配的内容
   *
   * @example
   * .search("?a=1&b=2")
   */
  search(value: string | number | boolean | RegExp) {
    this.__searchParams.value.add({
      name: "",
      value: value,
      type: "same",
    });
    return this;
  }
  searchStartsWith(value: string | number | boolean | RegExp) {
    this.__searchParams.value.add({
      name: "",
      value: value,
      type: "startsWith",
    });
    return this;
  }
  searchEndsWith(value: string | number | boolean | RegExp) {
    this.__searchParams.value.add({
      name: "",
      value: value,
      type: "endsWith",
    });
    return this;
  }
  searchIncludes(value: string | number | boolean | RegExp) {
    this.__searchParams.value.add({
      name: "",
      value: value,
      type: "includes",
    });
    return this;
  }
  searchMatch(value: string | number | boolean | RegExp) {
    this.__searchParams.value.add({
      name: "",
      value: value,
      type: "match",
    });
    return this;
  }
  /**
   * hash
   * @param hash
   * @returns
   */
  hash(hash: string) {
    this.__hash = {
      value: hash,
      type: "same",
    };
    return this;
  }
  hashStartsWith(hash: string) {
    this.__hash = {
      value: hash,
      type: "startsWith",
    };
    return this;
  }
  hashEndsWith(hash: string) {
    this.__hash = {
      value: hash,
      type: "endsWith",
    };
    return this;
  }
  hashIncludes(hash: string) {
    this.__hash = {
      value: hash,
      type: "includes",
    };
  }
  hashMatch(hash: RegExp) {
    this.__hash = {
      value: hash,
      type: "match",
    };
    return this;
  }
  /**
   * 生成url
   */
  build(): string {
    if (!this.__host.value) {
      throw new TypeError("host or hostName should be required");
    }
    const protocol = this.__protocol.value || "https";
    const host = this.__host.value;
    const pathname = this.__pathname.value || "/";
    let url = `${protocol}://${host}${pathname}`.trim();

    if (this.__searchParams.value.size > 0) {
      const searhList: string[] = [];
      this.__searchParams.value.forEach((it) => {
        if (typeof it.name === "string") {
          let value = "";
          if (typeof it.value === "string" || typeof it.value === "number" || typeof it.value === "boolean") {
            value = it.value.toString();
          }
          searhList.push(`${encodeURIComponent(it.name)}=${encodeURIComponent(value)}`);
        }
      });
      // 补充
      if (!url.endsWith("?")) {
        url += "?";
      }
      if (searhList.length) {
        url += searhList.join("&");
      }
    }
    // hash
    if (typeof this.__hash.value === "string") {
      const hash = this.__hash.value.trim();
      if (!url.endsWith("#") && !hash.startsWith("#")) {
        url += "#";
      }
      url += hash;
    }
    return url;
  }
  /**
   * 或条件
   * @param href
   */
  or(href?: string) {
    this.otherInstResultWithOr = this.otherInstResultWithOr || this.r();
    const routerBuilder = new RouterBuilder(href);
    routerBuilder.otherInstResultWithOr = this.otherInstResultWithOr;
    return routerBuilder;
  }
  /**
   * 获取判断结果
   */
  r(): boolean {
    if (this.otherInstResultWithOr) {
      // 直接true了
      // 无需判断
      return this.otherInstResultWithOr;
    }
    const urlInst = new URL(this.__href);

    const check = (
      name: keyof typeof urlInst,
      dataFn: IFunction<{
        value: string | RegExp | undefined;
        type: MatchType;
      }>
    ) => {
      const data = typeof dataFn === "function" ? dataFn() : dataFn;
      if (data.value) {
        // 值
        const urlInstValue = urlInst[name];
        if (typeof urlInstValue !== "string") {
          return false;
        }

        if (data.type === "same") {
          if (typeof data.value === "string") {
            return urlInstValue === data.value.toString();
          } else {
            throw new TypeError(`${name} value should be string by type ${data.type}`);
          }
        } else if (data.type === "startsWith") {
          if (typeof data.value === "string") {
            return urlInstValue.startsWith(data.value.toString());
          } else {
            throw new TypeError(`${name} value should be string by type ${data.type}`);
          }
        } else if (data.type === "endsWith") {
          if (typeof data.value === "string") {
            return urlInstValue.endsWith(data.value.toString());
          } else {
            throw new TypeError(`${name} value should be string by type ${data.type}`);
          }
        } else if (data.type === "includes") {
          if (typeof data.value === "string") {
            return urlInstValue.includes(data.value.toString());
          } else {
            throw new TypeError(`${name} value should be string by type ${data.type}`);
          }
        } else if (data.type === "match") {
          if (data.value instanceof RegExp) {
            return data.value.test(urlInstValue);
          } else if (
            typeof data.value === "string" ||
            typeof data.value === "number" ||
            typeof data.value === "boolean"
          ) {
            return urlInstValue.match(data.value.toString());
          } else {
            throw new TypeError(`${name} value should be RegExp or string by type ${data.type}`);
          }
        } else {
          throw new TypeError(`${name} type should be same,startsWith,endsWith,includes,match`);
        }
      } else {
        return true;
      }
    };
    const flag = [
      // origin
      () => {
        return check("origin", this.__origin);
      },
      // protocol
      () => {
        return check("protocol", this.__protocol);
      },
      // host
      // hostName
      () => {
        return check(this.__host.hasPort ? "host" : "hostname", this.__host);
      },
      // pathname
      () => {
        return check("pathname", this.__pathname);
      },
      // search
      // searchParams
      () => {
        let flag = true;
        const searchParamsList: {
          name: string | RegExp;
          value?: string | RegExp | number | boolean;
          type?: MatchType;
        }[] = [];
        this.__searchParams.value.forEach((item) => {
          searchParamsList.push(item);
        });
        for (let index = 0; index < searchParamsList.length; index++) {
          const item = searchParamsList[index];
          if (item.type) {
            // 如果存在type，则是处理search
            if (item.type === "same") {
              if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean") {
                return urlInst.search === item.value.toString();
              } else {
                throw new TypeError("search value should be string、number、boolean by type " + item.type);
              }
            } else if (item.type === "startsWith") {
              if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean") {
                return urlInst.search.startsWith(item.value.toString());
              } else {
                throw new TypeError("search value should be string、number、boolean by type " + item.type);
              }
            } else if (item.type === "endsWith") {
              if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean") {
                return urlInst.search.endsWith(item.value.toString());
              } else {
                throw new TypeError("search value should be string、number、boolean by type " + item.type);
              }
            } else if (item.type === "includes") {
              if (typeof item.value === "string" || typeof item.value === "number" || typeof item.value === "boolean") {
                return urlInst.search.includes(item.value.toString());
              } else {
                throw new TypeError("search value should be string、number、boolean by type " + item.type);
              }
            } else if (item.type === "match") {
              if (item.value instanceof RegExp) {
                return item.value.test(urlInst.search);
              } else if (
                typeof item.value === "string" ||
                typeof item.value === "number" ||
                typeof item.value === "boolean"
              ) {
                return urlInst.search.match(item.value.toString());
              } else {
                throw new TypeError("search value should be RegExp、string、number、boolean by type " + item.type);
              }
            } else {
              throw new TypeError("search type should be same, startsWith, endsWith, includes, match");
            }
          } else {
            // 先处理name匹配
            if (typeof item.name === "string") {
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
                // 正则匹配
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
              } else {
                throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined");
              }
            } else if (item.name instanceof RegExp) {
              let targetKey: string | undefined = void 0;
              let targetValue: string | undefined = void 0;
              urlInst.searchParams.forEach((__value__, __key__) => {
                if (!targetKey && __key__.match(item.name)) {
                  targetKey = __key__;
                  targetValue = __value__;
                }
              });
              if (targetKey) {
                let value = item.value;
                if (value == null) {
                  // ignore
                } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                  value = value.toString();
                  flag = value === targetValue;
                  if (!flag) {
                    break;
                  }
                } else if (value instanceof RegExp) {
                  if (targetValue) {
                    if (!value.test(targetValue)) {
                      flag = false;
                      break;
                    }
                  } else {
                    flag = false;
                    break;
                  }
                } else {
                  throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined");
                }
              } else {
                // 未找到匹配到的key
                flag = false;
                break;
              }
            } else {
              throw new TypeError("searchParams name should be string or RegExp");
            }
          }
        }
        return flag;
      },
      // hash
      () => {
        return check("hash", this.__hash);
      },
    ].every((it) => it());
    return flag;
  }
}

const RouterUtil = {
  /**
   * 主机（可带端口）
   *
   * 字符串完全相同才行
   * @param host 主机（可带端口）
   * @param href （可选）该字符串会代替内部的匹配主体，如果为空则使用当前页面地址
   * @example
   * .host("www.baidu.com")
   * @example
   * .host("www.baidu.com:8080")
   */
  host(host: string, href?: string): RouterBuilder {
    return RouterUtil.builder(href).host(host);
  },
  /**
   * 主机名
   *
   * 字符串完全相同才行
   * @param name 需要匹配的主机名
   * @param href （可选）该字符串会代替内部的匹配主体，如果为空则使用当前页面地址
   * @example
   * .hostName("www.baidu.com")
   */
  hostName(name: string, href?: string): RouterBuilder {
    return RouterUtil.builder(href).hostName(name);
  },
  /**
   * 搜索参数总字符串
   * @param value 需要进行匹配的内容
   * @param href （可选）该字符串会代替内部的匹配主体，如果为空则使用当前页面地址
   * @example
   * .search("?a=1&b=2")
   */
  search(value: string, href?: string) {
    return RouterUtil.builder(href).search(value);
  },
  seachParams(name: string, value?: string, href?: string): RouterBuilder {
    return RouterUtil.builder(href).searchParams(name, value);
  },
  pathname(name: string, href?: string): RouterBuilder {
    return RouterUtil.builder(href).pathname(name);
  },
  protocol(protocol: string, href?: string): RouterBuilder {
    return RouterUtil.builder(href).protocol(protocol);
  },
  hash(hash: string, href?: string): RouterBuilder {
    return RouterUtil.builder(href).hash(hash);
  },
  /**
   * 创建一个新的Router实例用于内部匹配处理
   * @param href （可选）该字符串会代替内部的匹配主体，如果为空则使用当前页面地址
   * @returns
   */
  builder(href?: string) {
    return new RouterBuilder(href);
  },
};
if (import.meta.env.DEV) {
  Reflect.set(unsafeWindow, "RouterUtil", RouterUtil);
}
export { RouterUtil };
