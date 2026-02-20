const QmsgCoreDefaultApi = {
  document: document,
  window: window,
  globalThis: globalThis,
  self: self,
  setTimeout: globalThis.setTimeout.bind(globalThis),
  setInterval: globalThis.setInterval.bind(globalThis),
  clearTimeout: globalThis.clearTimeout.bind(globalThis),
  clearInterval: globalThis.clearInterval.bind(globalThis),
};

const QmsgCoreApi = Object.assign({}, QmsgCoreDefaultApi);

const QmsgCore = {
  init(option?: typeof QmsgCoreDefaultApi) {
    if (!option) {
      option = Object.assign({}, QmsgCoreDefaultApi);
    }
    Object.assign(QmsgCoreApi, option);
  },
  get document() {
    return QmsgCoreApi.document;
  },
  get window() {
    return QmsgCoreApi.window;
  },
  get globalThis() {
    return QmsgCoreApi.globalThis;
  },
  get self() {
    return QmsgCoreApi.self;
  },
  get setTimeout() {
    return QmsgCoreApi.setTimeout;
  },
  get setInterval() {
    return QmsgCoreApi.setInterval;
  },
  get clearTimeout() {
    return QmsgCoreApi.clearTimeout;
  },
  get clearInterval() {
    return QmsgCoreApi.clearInterval;
  },
};

export { QmsgCore };
