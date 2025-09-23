import { addStyle, log } from "@/env";
import artPlayerCSS from "../video/artplayer/index.css?raw";
import artPlayerCommonCSS from "@/player/player.css?raw";
import { BilibiliPlayListPlayer } from "./BilibiliPlayListPlayer";

export const BilibiliPlayList = {
  init() {
    this.coverVideoPlayer();
  },
  /**
   * 覆盖视频播放器
   */
  coverVideoPlayer() {
    if (document.querySelector("#artplayer")) {
      log.warn("已存在播放器，更新播放信息");
    } else {
      addStyle(/*css*/ `
			#app .playlist .playlist-player .player-container{
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS}
			
			`);
      // let controlsPadding = Panel.getValue(
      // 	"bili-bangumi-artplayer-controlsPadding-left-right",
      // 	0
      // );
      // if (controlsPadding != 0) {
      // 	addStyle(/*css*/ `
      // 	@media (orientation: landscape) {
      // 		.art-video-player .art-layers .art-layer-top-wrap,
      // 		/* 底部 */
      // 		.art-video-player .art-bottom{
      // 			padding-left: ${controlsPadding}px !important;
      // 			padding-right: ${controlsPadding}px !important;
      // 		}

      // 		/* 锁定图标 */
      // 		.art-video-player  .art-layer-lock{
      // 			--art-lock-left-size: ${controlsPadding}px;
      // 		}
      // 	}
      // 	`);
      // }
    }
    BilibiliPlayListPlayer.updateArtPlayerVideoInfo();
  },
};
