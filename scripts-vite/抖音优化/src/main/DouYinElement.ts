export const DouYinElement = {
  videoFullScreen() {
    return 'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon';
  },
  activeVideoFullScreen() {
    return '[data-e2e="feed-active-video"] .xgplayer-fullscreen';
  },
  searchPageActiveVideoFullScreen() {
    return '[data-e2e="feed-active-video"] dy-icon.douyin-player-page-full-screen .douyin-player-icon';
  },
  /**
   * 直播 网页全屏
   */
  liveWebsiteFullScreen() {
    return '[id^="living_player_container"] .douyin-player .douyin-player-controls-right div:has(>svg path[d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"])';
  },
  /**
   * 直播 进入全屏
   */
  liveFullScreen() {
    return '[id^="living_player_container"] .douyin-player .douyin-player-controls-right svg:has(>path[d="M9.5 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-13zm10 11h-1.501v2H20.5a1 1 0 0 0 1-1v-2.5h-2V19zm-7 0v-1.5h-2V20a1 1 0 0 0 1 1h2.499v-2H12.5zm0-6h1.499v-2H11.5a1 1 0 0 0-1 1v2.5h2V13zm7 0h-1.501v-2H20.5a1 1 0 0 1 1 1v2.5h-2V13z"])';
  },
  /**
   * 直播 退出全屏
   */
  liveQuitFullScreen() {
    return '[id^="living_player_container"] .douyin-player .douyin-player-controls-right svg:has(>path[d="M7.5 10a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V10zm3 4.5v-2h1.499V11h2v2.5a1 1 0 0 1-1 1H10.5zM20 11h-2v2.498a1 1 0 0 0 1 1h2.5v-2H20V11zm0 8.5h1.5v-2H19a1 1 0 0 0-1 1V21h2v-1.5zM12 21v-1.498h-1.5v-2H13a1 1 0 0 1 1 1V21h-2z"])';
  },
};
