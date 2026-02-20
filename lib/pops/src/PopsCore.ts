const OriginPrototype = {
  Object: {
    defineProperty: Object.defineProperty,
  },
};

const PopsCoreDefaultApi = {
  document: document,
  window: window,
  globalThis: globalThis,
  self: self,
  setTimeout: globalThis.setTimeout.bind(globalThis),
  setInterval: globalThis.setInterval.bind(globalThis),
  clearTimeout: globalThis.clearTimeout.bind(globalThis),
  clearInterval: globalThis.clearInterval.bind(globalThis),
};

const PopsCoreApi = Object.assign({}, PopsCoreDefaultApi);

const PopsCore = {
  init(option?: typeof PopsCoreDefaultApi) {
    if (!option) {
      option = Object.assign({}, PopsCoreDefaultApi);
    }
    Object.assign(PopsCoreApi, option);
  },
  get document() {
    return PopsCoreApi.document;
  },
  get window() {
    return PopsCoreApi.window;
  },
  get globalThis() {
    return PopsCoreApi.globalThis;
  },
  get self() {
    return PopsCoreApi.self;
  },
  get setTimeout() {
    return PopsCoreApi.setTimeout;
  },
  get setInterval() {
    return PopsCoreApi.setInterval;
  },
  get clearTimeout() {
    return PopsCoreApi.clearTimeout;
  },
  get clearInterval() {
    return PopsCoreApi.clearInterval;
  },
};

export { PopsCore, OriginPrototype };
