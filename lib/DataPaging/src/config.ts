import type { PagingConfig } from "./types/config";

export const PagingDefaultConfig = <T>(): Required<PagingConfig<T>> => {
  return {
    data: [],
    pageShowDataMaxCount: 5,
    pageMaxStep: 3,
    currentPage: 1,
    pageChangeCallBack: function () {},
    prevBtn: {
      enable: true,
      callBack: function () {},
    },
    nextBtn: {
      enable: true,
      callBack: function () {},
    },
    firstBtn: {
      enable: true,
      callBack: function () {},
    },
    lastBtn: {
      enable: true,
      callBack: function () {},
    },
  };
};
