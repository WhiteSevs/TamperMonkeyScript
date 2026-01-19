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
  };
  $(selctor: string):
    | {
        unbind: Function;
      }
    | undefined;
}
