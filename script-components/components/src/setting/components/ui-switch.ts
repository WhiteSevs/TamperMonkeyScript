import type { PopsPanelRightAsideContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-common";
import type { PopsPanelSwitchConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-switch";
import { DOMUtils, log, pops } from "../../base.env";
import { Panel } from "../panel";
import { PanelComponents, type PanelComponentsStorageApiValue } from "../panel-components";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "../panel-config";
import { type ShortCutKeyboardOption } from "./../../utils/ShortCut";
import { type SwitchShortCut } from "./../../utils/SwitchShortCut";
import Qmsg from "qmsg";

/**
 * 获取checkbox按钮配置
 * @param text 文字
 * @param key 键
 * @param defaultValue 默认值
 * @param clickCallBack （可选）点击后的回调，如果返回true，则阻止默认行为（存储值）
 * @param description （可选）左边的文字下面的描述，可以是html格式
 * @param afterAddToUListCallBack （可选）在添加到元素后触发该回调
 * @param disabled （可选）是否禁用
 * @param valueChangeCallBack （可选）在存储值后触发该回调
 * @param shortCutOption （可选）快捷键配置
 */
export const UISwitch = function (
  text: string,
  key: string,
  defaultValue?: boolean,
  clickCallBack?: (event: MouseEvent | PointerEvent, value: boolean) => boolean | void,
  description?: string,
  afterAddToUListCallBack?: (viewConfig: PopsPanelSwitchConfig, container: PopsPanelRightAsideContainerConfig) => void,
  disabled?: boolean | (() => boolean),
  valueChangeCallBack?: (event: MouseEvent | PointerEvent, value: boolean) => boolean | void,
  shortCutOption?: {
    /**
     * 执行快捷键的实例
     */
    handler: ReturnType<typeof SwitchShortCut>;
    /**
     * 存储该快捷键的键名，如果没有，则默认使用上面存储switch的key
     */
    key?: string;
    /**
     * 快捷键的默认值
     */
    defaultValue?: ShortCutKeyboardOption;
    /**
     * 其它执行快捷键的实例，用于处理快捷键冲突
     */
    otherHandlers?: ReturnType<typeof SwitchShortCut>[];
  }
) {
  if (shortCutOption && typeof shortCutOption.defaultValue === "object" && shortCutOption.defaultValue != null) {
    // 初始化快捷键配置
    const shortCutKey = shortCutOption.key ?? key;
    shortCutOption.handler.add({
      key: shortCutKey,
      name: text,
    });
    shortCutOption.handler.shortCut.initConfig(shortCutKey, shortCutOption.defaultValue);
  }
  const result: PopsPanelSwitchConfig = {
    text: text,
    type: "switch",
    description: description,
    disabled: disabled,
    attributes: {},
    props: {},
    getValue() {
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      const value = storageApiValue.get(key, defaultValue)!;

      return value;
    },
    callback(event: MouseEvent | PointerEvent, __value: boolean) {
      const value = Boolean(__value);
      log.success(`${value ? "开启" : "关闭"} ${text}`);
      if (typeof clickCallBack === "function") {
        const result = clickCallBack(event, value);
        if (result) {
          return;
        }
      }

      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      storageApiValue.set(key, value);

      if (typeof valueChangeCallBack === "function") {
        valueChangeCallBack(event, value);
      }
    },
    afterAddToUListCallBack: (...args) => {
      afterAddToUListCallBack?.(...args);
      // 如果存在快捷键，则在text前面显示一个快捷键图标，鼠标悬浮则显示具体的快捷键
      // 点击则清除该快捷键
      // 右击文字，显示右键菜单，用于设置快捷键
      if (shortCutOption) {
        const shortCut = shortCutOption.handler.shortCut;
        const shortCutKey = shortCutOption.key ?? key;
        const [_, container] = args;
        const $leftMainText = container.target?.querySelector<HTMLElement>(".pops-panel-item-left-main-text");
        if (!$leftMainText) return;
        const renderKeyboard = () => {
          const tooltipShowText = shortCutOption.handler.shortCut.getShowText(shortCutKey, "暂未录入快捷键");
          const $wrapper = DOMUtils.createElement(
            "div",
            {
              className: "pops-switch-shortcut-wrapper",
              innerHTML: /*html*/ `
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `,
            },
            {
              style: "margin-right: 5px;display: inline-flex;",
            }
          );
          const $icon = $wrapper.querySelector<HTMLElement>(".pops-bottom-icon")!;
          // 清除该快捷键
          DOMUtils.on(
            $icon,
            "click",
            function (evt) {
              shortCutOption.handler.shortCut.deleteOption(shortCutKey);
              $tooltip.toolTip.offEvent();
              $tooltip.toolTip.close();
              $tooltip.toolTip.destory();
              $wrapper.remove();
            },
            {
              once: true,
            }
          );
          const $tooltip = pops.tooltip({
            $target: $icon,
            content: () => {
              return tooltipShowText;
            },
            className: "github-tooltip",
            isFixed: true,
            only: true,
          });

          DOMUtils.empty($leftMainText);
          DOMUtils.append($leftMainText, $wrapper, text);
        };
        pops.rightClickMenu({
          $target: $leftMainText,
          only: true,
          data: [
            {
              text: () => {
                if (shortCutOption.handler.shortCut.hasOption(shortCutKey)) {
                  return "修改快捷键";
                } else {
                  return "添加快捷键";
                }
              },
              icon: pops.config.iconSVG.keyboard,
              callback(clickEvent, contextMenuEvent, $li, $listenerRootNode) {
                if (shortCut.isWaitKeyboardPress()) {
                  Qmsg.warning("请先执行当前的录入操作");
                  return;
                }
                // 录入快捷键
                const $loading = Qmsg.loading("请按下快捷键...", {
                  showClose: true,
                  onClose() {
                    shortCut.cancelEnterShortcutKeys();
                  },
                });
                shortCut.enterShortcutKeys(shortCutKey).then(({ status, option, key: isUsedKey }) => {
                  $loading.close();
                  if (status) {
                    // 清除旧的图标
                    log.success("成功录入快捷键", option);
                    Qmsg.success("成功录入");
                    // 添加快捷键图标
                    renderKeyboard();
                  } else {
                    Qmsg.error(`快捷键 ${shortCut.translateKeyboardValueToButtonText(option)} 已被 ${isUsedKey} 占用`);
                  }
                });
              },
            },
          ],
        });
        if (!shortCut.hasOption(shortCutKey)) return;
        renderKeyboard();
      }
    },
  };

  Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
  Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

  PanelComponents.initComponentsStorageApi("switch", result as Required<PopsPanelSwitchConfig>, {
    get<T>(key: string, defaultValue: T) {
      return Panel.getValue(key, defaultValue);
    },
    set(key: string, value: boolean) {
      Panel.setValue(key, value);
    },
  });
  return result;
};
