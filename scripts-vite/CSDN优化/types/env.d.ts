declare interface Window {
  articleDetailUrl: string | null;
  articleId: number | null;
  username: string | null;
  articleTitle: string | null;
  articleDesc: string | null;
  articleType?: number;
  csdn?: {
    copyright?: {
      textData?: string;
      htmlData?: string;
    };
    loginBox?: {
      show: Function;
      close: Function;
      loginout: Function;
      setlogin: Function;
      showTip: Function;
      showAutoTip: Function;
    };
  };
  $(selctor: string):
    | {
        unbind: Function;
      }
    | undefined;
}
