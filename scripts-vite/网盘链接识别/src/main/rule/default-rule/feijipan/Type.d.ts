export type FeiJiPanRecommendJSON = {
  msg: string;
  total: number;
  code: number;
  offset: number;
  totalPage: number;
  limit: number;
  list: {
    shareId: number;
    shareUrl: string;
    shareDesc: null;
    showUpTime: number;
    showDownloads: number;
    showComments: number;
    showStars: number;
    showLikes: number;
    showRecommend: null;
    code: null;
    amt: null;
    term: number;
    favorite: number;
    userId: null;
    folderIds: string | null;
    fileIds: null;
    status: number;
    updTime: string;
    addTime: string;
    chkTime: null;
    chkStaff: null;
    chkDesc: null;
    recommendTime: null;
    resetDate: null;
    previewNum: number;
    isBuy: number;
    isFavorite: number;
    map: {
      userId: null;
      account: null;
      avatar: null;
      background: null;
      userDesc: null;
      userName: string;
      realName: null;
      gender: null;
      birthDate: null;
      shareNum: number;
      attentionNum: number;
      fansNum: number;
      showLink: number;
      isFollow: number;
      isVip: number;
      vipName: null;
      avatarIcon: null;
      blindBoxCount: null;
      contract: null;
      type: null;
    };
    fileList: {
      folderDesc: string;
      updTime: string;
      folderIcon: string;
      folderName: string;
      type: number;
      fileType: number;
      folderId: number;
    }[];
    type: number;
    preview: number;
  }[];
  status: number;
};

export type FeiJiPanListJSON = {
  msg: string;
  total: number;
  code: number;
  offset: number;
  totalPage: number;
  limit: number;
  list: {
    folderDesc?: string;
    updTime: string;
    sortId: number;
    folderIcon?: string;
    name: string;
    folderName?: string;
    type: number;
    userId: number;
    /**
     * 2是文件夹
     */
    fileType: number;
    folderId?: number;
    iconId?: number;
    fileName?: string;
    fileSaves?: number;
    fileStars?: number;
    fileComments?: number;
    fileSize?: number;
    fileIcon?: string;
    fileDownloads?: number;
    fileUrl?: null;
    fileLikes?: number;
    fileId?: number;
  }[];
};
