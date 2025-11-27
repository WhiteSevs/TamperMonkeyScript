const PopsCoreDefaultEnv = {
  document: document,
  window: window,
  globalThis: globalThis,
  self: self,
};

const PopsCoreEnv = Object.assign({}, PopsCoreDefaultEnv);

const PopsCore = {
  init(option?: typeof PopsCoreDefaultEnv) {
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
};

const OriginPrototype = {
  Object: {
    defineProperty: Object.defineProperty,
  },
};

export { PopsCore, OriginPrototype };
