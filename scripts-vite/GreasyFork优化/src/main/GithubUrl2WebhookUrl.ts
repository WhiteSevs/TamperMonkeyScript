import { DOMUtils, pops, utils } from "@/env";
import i18next from "i18next";

export const GithubUrl2WebhookUrl = {
  init() {},
  /**
   * 显示视图
   */
  showView() {
    let $alert = pops.alert({
      title: {
        text: i18next.t("Url To WebhookUrl"),
        position: "center",
      },
      content: {
        text: /*html*/ `
                <div class="github-2-webhook-container">
                    <div class="url-container">
                        <h4>Github Url</h4>
                        <div class="url-parse url-parse-link">
                            <label>${i18next.t("转换前")}</label>
                            <textarea id="github" placeholder="${
                              i18next.t("例如：") +
                              "https://github.com/WhiteSevs/TamperMonkeyScript/blob/master/README.md"
                            }"></textarea>
                        </div>
                        <div class="url-parse url-parse-result">
                            <label>${i18next.t("转换后")}</label>
                            <textarea id="webhook" placeholder="${
                              i18next.t("结果：") +
                              "https://raw.githubusercontent.com/WhiteSevs/TamperMonkeyScript/master/README.md"
                            }" readonly></textarea>
                        </div>
                    </div>
                </div>
                `,
        html: true,
      },
      btn: {
        ok: {
          type: "default",
          text: i18next.t("关闭"),
        },
      },
      mask: {
        enable: true,
        clickEvent: {
          toClose: false,
          toHide: false,
        },
      },
      drag: true,
      width: window.innerWidth > 500 ? "500px" : "88vw",
      height: window.innerHeight > 500 ? "500px" : "80vh",
      style: /*css*/ `
            .github-2-webhook-container{
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            .url-container{
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 20px;
                flex: 1;
            }
            .url-parse{
                display: flex;
                flex-direction: column;
                flex: 1;
            }
            .url-container textarea{
                height: 100%;
                width: 100%;
                position: relative;
                display: block;
                resize: none;
                padding: 5px 11px;
                box-sizing: border-box;
                font-size: inherit;
                font-family: inherit;
                background-color: rgb(255, 255, 255, var(--pops-bg-opacity));
                background-image: none;
                -webkit-appearance: none;
                appearance: none;
                box-shadow: 0 0 0 1px #dcdfe6 inset;
                border-radius: 0;
                transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
                border: none;
            }
            .url-container textarea:hover,
            .url-container textarea:focus{
                outline: 0;
                box-shadow: 0 0 0 1px #409eff inset;
            }
            `,
    });

    let $githubUrlInput = $alert.$shadowRoot.querySelector<HTMLTextAreaElement>("#github")!;
    let $webhookUrlInput = $alert.$shadowRoot.querySelector<HTMLTextAreaElement>("#webhook")!;

    DOMUtils.on($githubUrlInput, ["input", "propertychange"], (event) => {
      let githubUrl = $githubUrlInput.value.trim();
      let webhookUrlList: string[] = [];
      githubUrl.split("\n").forEach((urlStr) => {
        try {
          urlStr = urlStr.trim();
          if (utils.isNull(urlStr)) {
            return;
          }
          let urlObj = new URL(urlStr);
          let urlPathNameSplit = urlObj.pathname.split("/");
          let { 1: userName, 2: repoName, 3: blobStr, 4: branchName } = urlPathNameSplit;
          let filePath = "";
          if (urlPathNameSplit.length >= 6 && blobStr === "blob") {
            // https://github.com/WhiteSevs/TamperMonkeyScript/blob/master/README.md
            filePath = urlPathNameSplit.slice(5, urlPathNameSplit.length).join("/");
          } else if (urlPathNameSplit.length >= 8 && blobStr === "raw" && branchName === "refs") {
            // https://github.com/WhiteSevs/TamperMonkeyScript/raw/refs/heads/master/README.md
            branchName = urlPathNameSplit[6];
            filePath = urlPathNameSplit.slice(7, urlPathNameSplit.length).join("/");
          } else {
            // 不符合要求的
            return;
          }
          if (filePath === "") {
            return;
          }
          webhookUrlList.push(`https://raw.githubusercontent.com/${userName}/${repoName}/${branchName}/${filePath}`);
        } catch (error) {}
      });
      $webhookUrlInput.value = webhookUrlList.join("\n");
    });
  },
};
