/**
 * 兼容处理
 */
function CompatibleProcessing() {
  // 处理Object.assign不存在的问题
  try {
    if (typeof Object.assign !== "function") {
      Object.assign = function (...args: any[]) {
        const target = Object(args[0] || {});
        if (args.length > 1) {
          const sourceList = [...args].splice(1, args.length - 1);
          sourceList.forEach((sourceItem) => {
            for (const sourceKey in sourceItem) {
              if (Object.prototype.hasOwnProperty.call(sourceItem, sourceKey)) {
                target[sourceKey] = sourceItem[sourceKey];
              }
            }
          });
        }
        return target;
      };
    }
  } catch (error) {
    console.warn("Qmsg CompatibleProcessing Object.assign error", error);
  }

  // 'classList' 兼容处理，add，remove不支持传入多个cls参数
  try {
    if (!("classList" in document.documentElement)) {
      Object.defineProperty(HTMLElement.prototype, "classList", {
        get: function () {
          const self = this;
          function update(fn: any) {
            return function (value: string) {
              const classes = self.className.split(/\s+/g),
                index = classes.indexOf(value);
              fn(classes, index, value);
              self.className = classes.join(" ");
            };
          }
          return {
            add: update(function (classes: string[], index: number, value: string) {
              if (!~index) classes.push(value);
            }),

            remove: update(function (classes: string[], index: number) {
              if (~index) classes.splice(index, 1);
            }),

            toggle: update(function (classes: string[], index: number, value: string) {
              if (~index) classes.splice(index, 1);
              else classes.push(value);
            }),

            contains: function (value: string) {
              return !!~self.className.split(/\s+/g).indexOf(value);
            },

            item: function (index: number) {
              return self.className.split(/\s+/g)[index] || null;
            },
          };
        },
      });
    }
  } catch (error) {
    console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning", error);
  }
}

export { CompatibleProcessing };
