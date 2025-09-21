interface PopsCoreOption {
  document: Document;
  window: Window;
  globalThis: typeof globalThis;
  self: typeof globalThis;
  setTimeout: Window["setTimeout"];
  setInterval: Window["setInterval"];
  clearTimeout: Window["clearTimeout"];
  clearInterval: Window["clearInterval"];
}

const PopsCoreDefaultEnv: PopsCoreOption = {
  document: document,
  window: window,
  globalThis: globalThis,
  self: self,
  setTimeout: globalThis.setTimeout.bind(globalThis),
  setInterval: globalThis.setInterval.bind(globalThis),
  clearTimeout: globalThis.clearTimeout.bind(globalThis),
  clearInterval: globalThis.clearInterval.bind(globalThis),
};

const PopsCoreEnv: PopsCoreOption = Object.assign({}, PopsCoreDefaultEnv);

const PopsCore = {
  init(option?: PopsCoreOption) {
    if (!option) {
      option = Object.assign({}, PopsCoreDefaultEnv);
    }
    Object.assign(PopsCoreEnv, option);
  },
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
  get setTimeout() {
    return PopsCoreEnv.setTimeout;
  },
  get setInterval() {
    return PopsCoreEnv.setInterval;
  },
  get clearTimeout() {
    return PopsCoreEnv.clearTimeout;
  },
  get clearInterval() {
    return PopsCoreEnv.clearInterval;
  },
};

const OriginPrototype = {
  Object: {
    defineProperty: Object.defineProperty,
  },
};

export { PopsCoreOption, PopsCore, OriginPrototype };
