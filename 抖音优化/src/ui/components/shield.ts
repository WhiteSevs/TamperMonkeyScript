import { utils, DOMUtils } from "../../api/env";
import { DouYinVideoShield } from "../../core/Video/shield";
import { UISwitch } from "../core/ui-switch";


const PanelShieldConfig: PopsPanelFormsDetails[] = [
    {
        text: "功能",
        type: "forms",
        forms: [
            UISwitch(
                "启用",
                "开启后可启用下面的屏蔽功能",
                "shieldVideo",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】直播",
                "过滤掉直播",
                "shieldVideo-live",
                true,
                void 0
            ),
            UISwitch(
                "【屏蔽】广告",
                "过滤掉广告",
                "shieldVideo-ads",
                true,
                void 0
            ),
        ],
    },
    {
        text: "规则(可正则)",
        type: "forms",
        forms: [
            {
                type: "own",
                getLiElementCallBack(liElement: HTMLLIElement) {
                    let textareaDiv = DOMUtils.createElement(
                        "div",
                        {
                            className: "pops-panel-textarea",
                            innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`,
                        },
                        {
                            style: "width: 100%;",
                        }
                    );
                    let textarea = textareaDiv.querySelector("textarea") as HTMLTextAreaElement;
                    textarea.value = DouYinVideoShield.get();
                    DOMUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        // @ts-ignore
                        utils.debounce(function () {
                            DouYinVideoShield.set(textarea.value);
                        }, 200)
                    );
                    liElement.appendChild(textareaDiv);
                    return liElement;
                },
            },
        ],
    },
];

export {
    PanelShieldConfig
}