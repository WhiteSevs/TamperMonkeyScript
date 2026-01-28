import { $, log, MenuRegister, pops, utils } from "@/env";
import Qmsg from "qmsg";

type DouYinLivePlayerInstance = {
  video: HTMLVideoElement;
  config: {
    /** 推流地址 */
    url: string;
  };
  baseConfig: {
    abr: {
      bitrate: number;
      debug: boolean;
      down_thresh: number;
      open: boolean;
      start_limit: number;
      urls: {
        [key: string]: string;
      };
    };
    autoplay: boolean;
    coreType: string;
    muted: boolean;
    retryCount: number;
    seiOnDemand: boolean;
    useAbr: boolean;
    volume: number;
  };
  /** 当前播放的推流地址 */
  src: string;
  /** 播放器版本 */
  version: string;
};

export const DouYinLivePlayerInstance = {
  $data: {
    playerInstance: null as DouYinLivePlayerInstance | null,
  },
  $el: {
    $player: null as HTMLElement | null,
  },
  /**
   * 添加油猴菜单
   */
  registerMenu() {
    MenuRegister.add({
      key: "live-parsePlayerInstance",
      text: "⚙ PlayerInstance",
      autoReload: false,
      showText(text, enable) {
        return text;
      },
      callback: () => {
        const $player = $<HTMLDivElement>(`[id^="living_player_container"] .douyin-player`);
        if (!$player) {
          Qmsg.error("获取playerInstance元素失败");
          return;
        }
        this.$el.$player = $player;
        const playerInst = this.parseElementPlayerIns(this.$el.$player);
        if (playerInst == null) {
          Qmsg.error("获取playerInstance失败");
          return;
        }
        this.$data.playerInstance = playerInst;
        this.showParseDialog();
      },
    });
  },
  /**
   * 解析元素上的播放器实例
   */
  parseElementPlayerIns($ele: HTMLElement): null | DouYinLivePlayerInstance {
    const react = utils.getReactInstance($ele);
    return react?.reactFiber?.return?.memoizedProps?.playerInstance || Reflect.get(react, "_player")?.proxy;
  },
  /**
   * 显示解析的信息弹窗
   */
  showParseDialog() {
    log.info("playerInstance：", this.$data.playerInstance);
    /** 当前播放的推流地址 */
    const currentPlayerSrc = this.$data.playerInstance?.src;
    const urlList = this.$data.playerInstance?.baseConfig?.abr?.urls ?? {};
    pops.alert({
      title: {
        text: "解析信息",
        position: "center",
      },
      content: {
        text: /*html*/ `
        <div class="live-dy-parse-container">
            <div class="live-dy-parse-item">
                <div class="live-dy-parse-item-name">播放器版本：</div>
                <div class="live-dy-parse-item-value">${this.$data.playerInstance?.version}</div>
            </div>
            <div class="live-dy-parse-item">
                <div class="live-dy-parse-item-name">BitRate：</div>
                <div class="live-dy-parse-item-value">${this.$data.playerInstance?.baseConfig?.abr?.bitrate}</div>
            </div>
            <div class="live-dy-parse-item">
                <div class="live-dy-parse-item-name">当前播放的源：</div>
                <a class="live-dy-parse-item-value" href="${currentPlayerSrc}" target="_blank">${currentPlayerSrc}</a>
            </div>
            ${Object.keys(urlList)
              .sort((a, b) => Number(a) - Number(b))
              .map((bitRate) => {
                const src = urlList[bitRate];
                let qualityName = String(bitRate);
                if (bitRate === this.$data.playerInstance?.baseConfig?.abr?.bitrate?.toString()) {
                  qualityName = "原画";
                }
                return /*html*/ `
                <div class="live-dy-parse-item">
                    <div class="live-dy-parse-item-name">${qualityName}：</div>
                    <a class="live-dy-parse-item-value" href="${src}" target="_blank">${src}</a>
                </div>
                `;
              })
              .filter((it) => it != null)
              .join("\n")}
        </div>
        `,
        html: true,
      },
      mask: {
        clickEvent: {
          toClose: true,
        },
      },
      btn: {
        ok: {
          enable: false,
        },
      },
      width: window.innerWidth > 550 ? "550px" : "88wv",
      height: window.innerHeight > 550 ? "550px" : "70vh",
      style: /*css*/ `
      .live-dy-parse-container{
          display: flex;
          flex-direction: column;
          gap: 10px;
      }
      .live-dy-parse-item{
          display: flex;
          flex-wrap: wrap;
          border: 1px solid #919191;
          border-left: 0px;
          border-right: 0px;
          width: 100%;
          background: #0af9ee;
          padding: 5px 5px;
      }
      `,
    });
  },
};
