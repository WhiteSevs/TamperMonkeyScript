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
    }>(),
  };

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
   */
  hostName(hostName: string) {
    this.__host = {
      value: hostName,
      type: "same",
      hasPort: false,
    };
    return this;
  }
  hostNameStartsWith(hostName: string) {
    this.__host = {
      value: hostName,
      type: "startsWith",
      hasPort: false,
    };
    return this;
  }
  hostNameEndsWith(hostName: string) {
    this.__host = {
      value: hostName,
      type: "endsWith",
      hasPort: false,
    };
    return this;
  }
  hostNameIncludes(hostName: string) {
    this.__host = {
      value: hostName,
      type: "includes",
      hasPort: false,
    };
    return this;
  }
  hostNameMatch(hostName: RegExp) {
    this.__host = {
      value: hostName,
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
   */
  search(name: string, value?: string) {
    this.__searchParams.value.add({
      name,
      value,
    });
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
    let url = `${protocol}://${host}${pathname}`;

    if (this.__searchParams.value.size > 0) {
      const searhList: string[] = [];
      this.__searchParams.value.forEach((it) => {
        if (typeof it.name === "string") {
          let value = "";
          if (
            typeof it.value === "string" ||
            typeof it.value === "number" ||
            typeof it.value === "boolean"
          ) {
            value = it.value.toString();
          }
          searhList.push(`${encodeURIComponent(it.name)}=${encodeURIComponent(value)}`);
        }
      });
      if (searhList.length) {
        url += `?${searhList.join("&")}`;
      }
    }

    return url;
  }
  /**
   * 或条件
   * @param href
   */
  or(href?: string) {
    return new RouterBuilder(href);
  }
  /**
   * 获取判断结果
   */
  r(): boolean {
    const urlInst = new URL(this.__href);
    const flag = [
      // origin
      () => {
        if (this.__origin.value) {
          if (this.__origin.type === "same") {
            if (typeof this.__origin.value === "string") {
              return urlInst.origin === this.__origin.value;
            } else {
              throw new TypeError("origin value should be string by type " + this.__origin.type);
            }
          } else if (this.__origin.type === "startsWith") {
            if (typeof this.__origin.value === "string") {
              return urlInst.origin.startsWith(this.__origin.value);
            } else {
              throw new TypeError("origin value should be string by type " + this.__origin.type);
            }
          } else if (this.__origin.type === "endsWith") {
            if (typeof this.__origin.value === "string") {
              return urlInst.origin.endsWith(this.__origin.value);
            } else {
              throw new TypeError("origin value should be string by type " + this.__origin.type);
            }
          } else if (this.__origin.type === "includes") {
            if (typeof this.__origin.value === "string") {
              return urlInst.origin.includes(this.__origin.value);
            } else {
              throw new TypeError("origin value should be string by type " + this.__origin.type);
            }
          } else if (this.__origin.type === "match") {
            if (this.__origin.value instanceof RegExp) {
              return this.__origin.value.test(urlInst.origin);
            } else {
              throw new TypeError("origin value should be RegExp by type " + this.__origin.type);
            }
          } else {
            throw new TypeError(
              "origin type should be same or startsWith or endsWith or includes or match",
            );
          }
        } else {
          return true;
        }
      },
      // protocol
      () => {
        if (this.__protocol.value) {
          if (this.__protocol.type === "same") {
            if (typeof this.__protocol.value === "string") {
              return urlInst.protocol === this.__protocol.value;
            } else {
              throw new TypeError(
                "protocol value should be string by type " + this.__protocol.type,
              );
            }
          } else if (this.__protocol.type === "startsWith") {
            if (typeof this.__protocol.value === "string") {
              return urlInst.protocol.startsWith(this.__protocol.value);
            } else {
              throw new TypeError(
                "protocol value should be string by type " + this.__protocol.type,
              );
            }
          } else if (this.__protocol.type === "endsWith") {
            if (typeof this.__protocol.value === "string") {
              return urlInst.protocol.endsWith(this.__protocol.value);
            } else {
              throw new TypeError(
                "protocol value should be string by type " + this.__protocol.type,
              );
            }
          } else if (this.__protocol.type === "includes") {
            if (typeof this.__protocol.value === "string") {
              return urlInst.protocol.includes(this.__protocol.value);
            } else {
              throw new TypeError(
                "protocol value should be string by type " + this.__protocol.type,
              );
            }
          } else if (this.__protocol.type === "match") {
            if (this.__protocol.value instanceof RegExp) {
              return this.__protocol.value.test(urlInst.protocol);
            } else {
              return urlInst.protocol.match(this.__protocol.value);
            }
          } else {
            throw new TypeError("protocol type should be same,startsWith,endsWith,includes,match");
          }
        } else {
          return true;
        }
      },
      // host
      // hostName
      () => {
        if (this.__host.value) {
          const host = this.__host.hasPort ? urlInst.host : urlInst.hostname;
          if (this.__host.type === "same") {
            if (typeof this.__host.value === "string") {
              return this.__host.value === host;
            } else {
              throw new TypeError("host value should be string by type " + this.__host.type);
            }
          } else if (this.__host.type === "startsWith") {
            if (typeof this.__host.value === "string") {
              return host.startsWith(this.__host.value);
            } else {
              throw new TypeError("host value should be string by type " + this.__host.type);
            }
          } else if (this.__host.type === "endsWith") {
            if (typeof this.__host.value === "string") {
              return host.endsWith(this.__host.value);
            } else {
              throw new TypeError("host value should be string by type " + this.__host.type);
            }
          } else if (this.__host.type === "includes") {
            if (typeof this.__host.value === "string") {
              return host.includes(this.__host.value);
            } else {
              throw new TypeError("host value should be string by type " + this.__host.type);
            }
          } else if (this.__host.type === "match") {
            if (this.__host.value instanceof RegExp) {
              return this.__host.value.test(host);
            } else {
              return host.match(this.__host.value);
            }
          } else {
            throw new TypeError("host type should be same,startsWith,endsWith,includes,match");
          }
        } else {
          return true;
        }
      },
      // pathname
      () => {
        if (this.__pathname.value) {
          if (this.__pathname.type === "same") {
            if (typeof this.__pathname.value === "string") {
              return urlInst.pathname === this.__pathname.value;
            } else {
              throw new TypeError(
                "pathname value should be string by type " + this.__pathname.type,
              );
            }
          } else if (this.__pathname.type === "startsWith") {
            if (typeof this.__pathname.value === "string") {
              return urlInst.pathname.startsWith(this.__pathname.value);
            } else {
              throw new TypeError(
                "pathname value should be string by type " + this.__pathname.type,
              );
            }
          } else if (this.__pathname.type === "endsWith") {
            if (typeof this.__pathname.value === "string") {
              return urlInst.pathname.endsWith(this.__pathname.value);
            } else {
              throw new TypeError(
                "pathname value should be string by type " + this.__pathname.type,
              );
            }
          } else if (this.__pathname.type === "includes") {
            if (typeof this.__pathname.value === "string") {
              return urlInst.pathname.includes(this.__pathname.value);
            } else {
              throw new TypeError(
                "pathname value should be string by type " + this.__pathname.type,
              );
            }
          } else if (this.__pathname.type === "match") {
            if (this.__pathname.value instanceof RegExp) {
              return this.__pathname.value.test(urlInst.pathname);
            } else {
              return urlInst.pathname.match(this.__pathname.value);
            }
          } else {
            throw new TypeError("pathname type should be same,startsWith,endsWith,includes,match");
          }
        } else {
          return true;
        }
      },
      // searchParams
      () => {
        let flag = true;
        if (this.__searchParams.value.size > 0) {
          const searchParamsList: {
            name: string | RegExp;
            value?: string | RegExp | number | boolean;
          }[] = [];
          this.__searchParams.value.forEach((item) => {
            searchParamsList.push(item);
          });
          for (let index = 0; index < searchParamsList.length; index++) {
            const item = searchParamsList[index];
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
                throw new TypeError(
                  "searchParams value should be string、RegExp、boolean、number、null、undefined",
                );
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
                } else if (
                  typeof value === "string" ||
                  typeof value === "number" ||
                  typeof value === "boolean"
                ) {
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
                  throw new TypeError(
                    "searchParams value should be string、RegExp、boolean、number、null、undefined",
                  );
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
    ].every((it) => it());
    return flag;
  }
}

const RouterUtil = {
  host(host: string, href?: string): RouterBuilder {
    return new RouterBuilder(href).host(host);
  },
  hostName(name: string, href?: string): RouterBuilder {
    return new RouterBuilder(href).hostName(name);
  },
  seach(name: string, value?: string, href?: string): RouterBuilder {
    return new RouterBuilder(href).search(name, value);
  },
  pathname(name: string, href?: string): RouterBuilder {
    return new RouterBuilder(href).pathname(name);
  },
  protocol(protocol: string, href?: string): RouterBuilder {
    return new RouterBuilder(href).protocol(protocol);
  },
  builder(href?: string) {
    return new RouterBuilder(href);
  },
};
if (import.meta.env.DEV) {
  Reflect.set(unsafeWindow, "RouterUtil", RouterUtil);
}
export { RouterUtil };
