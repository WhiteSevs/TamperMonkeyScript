import { DOMUtils, httpx, log, showdown, pops, utils } from "@/env";
import { PopsCallResult } from "@whitesev/pops/dist/types/src/types/main";
import Qmsg from "qmsg";

const YiYanChat = {
  dialogAlias: null as unknown as PopsCallResult,
  /** 是否正在进行初始化参数 */
  isIniting: false,
  /** 是否已初始化参数 */
  isInitParams: false,
  aisearch_id: null as unknown as string | undefined,
  pvId: null as unknown as string | undefined,
  sessionId: null as unknown as string | undefined,
  question: [] as {
    questionText: string;
    answerText?: string | undefined;
    markdownText?: string | undefined;
  }[],
  async init() {
    if (!this.isInitParams) {
      this.isIniting = true;
      Qmsg.info("初始化参数中...");
      this.isInitParams = Boolean(await this.initParams());
      this.isIniting = false;
      if (this.isInitParams) {
        Qmsg.success("初始化成功！");
        this.init();
      } else {
        Qmsg.error("初始化参数失败");
      }
    } else if (!this.isIniting) {
      this.showChatGPTDialog();
    }
  },
  /**
   * 初始化参数
   * @param queryText 需要提问的问题
   */
  async initParams(queryText = "") {
    let getResp = await httpx.get(
      `https://chat.baidu.com/?pcasync=pc&asyncRenderUrl=&passportStaticPage=https%3A%2F%2Fwww.baidu.com%2Fcache%2Fuser%2Fhtml%2Fv3Jump.html&from=pc_tab&word=${encodeURI(
        queryText
      )}&source=pd_ic`,
      {
        fetch: true,
        headers: {
          Accept: "*/*",
          Origin: "https://www.baidu.com",
          Referer: `https://www.baidu.com/`,
        },
        data: JSON.stringify({
          data: {},
        }),
      }
    );
    if (!getResp.status) {
      log.error(getResp);
      return false;
    }
    try {
      let aisearch_id = /"aisearch_id":"(.*?)"/i.exec(getResp.data.responseText);
      if (!aisearch_id?.[1]) {
        throw new TypeError("获取aisearch_id失败");
      }
      let pvId = /"pvId":"(.*?)"/i.exec(getResp.data.responseText);
      if (!pvId?.[1]) {
        throw new TypeError("获取pvId失败");
      }
      let sessionId = /"sessionId":"(.*?)"/i.exec(getResp.data.responseText);
      if (!sessionId?.[1]) {
        throw new TypeError("获取sessionId失败");
      }
      YiYanChat.aisearch_id = aisearch_id[1];
      YiYanChat.pvId = pvId[1];
      YiYanChat.sessionId = sessionId[1];
      log.success("获取一言参数aisearch_id：" + YiYanChat.aisearch_id);
      log.success("获取一言参数pvId：" + YiYanChat.pvId);
      log.success("获取一言参数sessionId：" + YiYanChat.sessionId);
      return true;
    } catch (error) {
      log.error(error);
      return false;
    }
  },
  /**
   * 显示ChatGPT回答弹窗
   */
  showChatGPTDialog() {
    if (YiYanChat.dialogAlias != null) {
      if (!YiYanChat.dialogAlias.popsElement.getClientRects().length) {
        YiYanChat.dialogAlias.show();
      } else {
        log.info("请勿重复打开");
      }
      return;
    }
    YiYanChat.dialogAlias = pops.alert({
      title: {
        text: "<p style='width:100%;'>文心一言</p>",
        position: "center",
        html: true,
      },
      content: {
        text: "",
      },
      mask: {
        enable: true,
        clickEvent: {
          toHide: true,
        },
      },
      btn: {
        close: {
          enable: true,
          callback(event) {
            event.hide();
          },
        },
      },
      drag: true,
      dragLimit: true,
      width: "95vw",
      height: "90vh",
      style: /*css*/ `
            .pops{
            --container-title-height: 45px;
            --container-bottom-btn-height: 100px;

            --gpt-bg-color: #ffffff;
            --gpt-border-radius: 4px;
            }
            .pops-alert-content{
            background: #ECEAF7;
            }
            .pops-alert-btn .ask-question{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            }
            .pops-alert-btn .ask-question textarea{
            width: inherit;
            height: inherit;
            }
            .pops-alert-btn .ask-question textarea {
            vertical-align: bottom;
            position: relative;
            display: block;
            resize: none;
            padding: 5px 11px;
            line-height: 1.5;
            box-sizing: border-box;
            font-size: 16px;
            font-family: inherit;
            background-color: var(--gpt-bg-color);
            background-image: none;
            -webkit-appearance: none;
            appearance: none;
            box-shadow: 0 0 0 1px #dcdfe6 inset;
            border-radius: 0;
            transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
            border: none;
            }
            .pops-alert-btn .ask-question textarea:hover{box-shadow:0 0 0 1px #c0c4cc inset}
            .pops-alert-btn .ask-question textarea:focus{outline:0;box-shadow:0 0 0 1px #409eff inset}

            .ask-container{

            }
            .ask-container .user-question,
            .ask-container .gpt-answer{
            display: flex;
            margin: 10px 10px;
            }
            .ask-container .user-question{

            }
            .ask-container .gpt-answer{

            }
            .ask-container .avatar-img{
            
            }
            .ask-container .avatar-img img{
            width: 30px;
            height: 30px;
            border-radius: 6px;
            background: var(--gpt-bg-color);
            }
            .ask-container .ask-text,
            .ask-container .answer-text{
            background: var(--gpt-bg-color);
            border-radius: var(--gpt-border-radius);
            padding: 10px;
            margin-left: 10px;
            text-align: left;
            }
            .ask-container .ask-text{
            width: auto;
            }
            .ask-container .answer-text{
            }
            .ask-container .answer-text *{
            text-wrap: wrap;
            }
            .gpt-btn-control{
            display: flex;
            flex-direction: column;
            }
            .gpt-btn-control .pops-alert-btn-clear-history{
            margin-bottom: 5px;
            }
            .gpt-btn-control .pops-alert-btn-ok{
            margin-top: 5px;
            }

            .markdown-body .code-header{
            align-items: center;
            background: #e3e8f6;
            border-radius: 7px 7px 0 0;
            display: flex;
            height: 34px;
            }
            .markdown-body .code-header+pre{
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            }
            .markdown-body span.code-lang{
            color: #120649;
            flex: 1 0 auto;
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0;
            padding-left: 14px;
            text-align: justify;
            display: flex;
            }
            .markdown-body span.code-copy{
            align-items: center;
            color: #7886a4;
            display: flex;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0;
            line-height: 14px;
            text-align: justify;
            user-select: none;
            }
            .markdown-body span.code-copy-text{
            margin-left: 7px;
            margin-right: 20px;
            }


            .typing::after {
            content: '▌';
            }
            .typing::after {
            animation: blinker 1s step-end infinite;
            }
            @keyframes blinker {
            0% {
                visibility: visible;
            }
            50% {
                visibility: hidden;
            }
            100% {
                visibility: visible;
            }
            }
            `,
    });
    YiYanChat.loadCSS("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.min.css");
    let $alertBtn = YiYanChat.dialogAlias.popsElement.querySelector(".pops-alert-btn") as HTMLDivElement;
    $alertBtn.innerHTML = /*html*/ `
        <div class="ask-question">
            <textarea class="ask-question-input" placeholder="请输入问题"></textarea>
            <div class="gpt-btn-control">
            <button class="pops-alert-btn-clear-history" type="danger" data-icon="" data-righticon="false">
                <span>清空</span>
            </button>
            <button class="pops-alert-btn-ok" type="primary" data-icon="" data-righticon="false">
                <span>发送</span>
            </button>
            </div>
        </div>`;
    let $textArea = $alertBtn.querySelector("textarea") as HTMLTextAreaElement;
    let $enterBtn = $alertBtn.querySelector(".pops-alert-btn-ok") as HTMLElement;
    let $clearHistoryBtn = $alertBtn.querySelector(".pops-alert-btn-clear-history") as HTMLElement;
    let $content = YiYanChat.dialogAlias.popsElement.querySelector(".pops-alert-content") as HTMLDivElement;
    $content.innerHTML = "";

    /**
     * 查询事件
     */
    function sendEvent(event: Event) {
      let queryText = $textArea.value;
      if (queryText.trim() === "") {
        Qmsg.error("你没有输入内容哦", {
          timeout: 1500,
        });
        return;
      }
      $textArea.value = "";
      let askElement = YiYanChat.getAskElement(queryText);
      let answerElement = YiYanChat.getAnswerElement();
      let answerTextElement = answerElement.querySelector(".answer-text") as HTMLElement;
      let askContainer = DOMUtils.createElement("div", {
        className: "ask-container",
      });
      let newQueryText = "";
      YiYanChat.question.forEach((item) => {
        /* 合并之前的提问和回答 */
        if (item.questionText) {
          newQueryText += "\n\n" + item.questionText;
          if (item.answerText) {
            newQueryText += "\n\n" + item.answerText;
          }
        }
      });
      newQueryText += "\n\n" + queryText;
      YiYanChat.question.push({
        questionText: queryText,
        answerText: void 0,
        markdownText: void 0,
      });
      YiYanChat.conversation(newQueryText).then(async (stream) => {
        if (!stream) {
          YiYanChat.question.pop();
          return;
        }
        try {
          let latestQuestion = YiYanChat.question[YiYanChat.question.length - 1];
          let answer = await YiYanChat.getAnswerStream(stream, (itemText) => {
            latestQuestion.answerText += itemText;
            answerTextElement.innerText += itemText;
            YiYanChat.scrollToContentContainerEnd();
          });
          answerTextElement.classList.remove("typing");
          if (!answer) {
            YiYanChat.question.pop();
            return;
          }
          latestQuestion.answerText = answer;
          /* 把text转换成markdown元素 */
          let parseData = YiYanChat.conversionTextToMarkdown(answer);
          log.info(["转换为markdown", parseData]);
          if (parseData.status) {
            latestQuestion.markdownText = parseData.text;
            answerTextElement.innerHTML = parseData.text;
            YiYanChat.handleMarkdown(answerTextElement);
          } else {
            Qmsg.error("转换为Markdown失败");
          }
          YiYanChat.scrollToContentContainerEnd();
        } catch (error) {
          answerTextElement.classList.remove("typing");
          YiYanChat.question.pop();
          log.error(error);
          Qmsg.error(error as string);
        }
      });
      askContainer.appendChild(askElement);
      askContainer.appendChild(answerElement);
      $content.appendChild(askContainer);
      YiYanChat.scrollToContentContainerEnd();
    }
    DOMUtils.listenKeyboard($textArea, "keydown", function (keyName, keyValue, otherCodeList) {
      if (otherCodeList.includes("ctrl") && keyName === "Enter") {
        $enterBtn.click();
      }
    });
    DOMUtils.on($enterBtn, "click", void 0, sendEvent);
    DOMUtils.on($clearHistoryBtn, "click", void 0, function () {
      YiYanChat.clearHistoryQuestion();
    });
  },
  /**
   * 获取回答流
   * @param stream
   * @param callback 每次的流读取的回调
   */
  async getAnswerStream(stream: ReadableStream<string>, callback: (text: string) => void) {
    const reader = stream.getReader();
    async function parseStreamText(): Promise<string> {
      /**
       * 所有回答
       **/
      let answerChunkList: string[] = [];
      /** 前一记录 */
      let preResponseItem = "";
      /** 合并 */
      let combineItem: string[] = [];
      /** 引用 */
      let referenceList;
      return new Promise((resolve, reject) => {
        reader
          .read()
          .then(
            //@ts-ignore
            function processText({ done, value }) {
              try {
                if (done) {
                  log.success("=====读取结束，转换内容=====");
                  /* 所有回答合数组并成字符串 */
                  let result = answerChunkList.join("");
                  resolve(result);
                  return;
                }
                let responseItem = new TextDecoder("utf-8").decode(value as unknown as AllowSharedBufferSource);
                /* 去除空格 */
                responseItem = responseItem.trim();
                if (!responseItem.includes("event:ping") && !responseItem.startsWith("event:messag")) {
                  combineItem.push(preResponseItem);
                  combineItem.push(responseItem);
                  /* 重置 */
                  preResponseItem = "";
                  /* 合并 */
                  responseItem = combineItem.join("");
                  /* 清空 */
                  combineItem.length = 0;
                } else if (!responseItem.includes("event:ping")) {
                  preResponseItem = responseItem;
                }
                let responseItemSplit = responseItem.split("\n").filter((item) => item.trim().startsWith("data:"));
                for (let item of responseItemSplit) {
                  item = item.trim();
                  /* 解析出数据 */
                  let streamDataStr = item.replace(/^data:/gi, "").trim();
                  if (utils.isNull(streamDataStr)) {
                    continue;
                  }
                  log.info(streamDataStr);
                  let streamData = utils.toJSON(streamDataStr);
                  if (utils.isNull(streamData)) {
                    continue;
                  }
                  /** 回答的文字块 @type {string} */
                  let answerChunk = streamData?.data?.message?.content?.generator?.text;
                  if (!answerChunk) {
                    /* 不存在回答内容 */
                    continue;
                  }
                  callback(answerChunk);
                  /* 添加到数组中 */
                  answerChunkList.push(answerChunk);
                  if (streamData?.data?.message?.content?.generator?.referenceList) {
                    referenceList = streamData?.data.message.content.generator.referenceList;
                  }
                }
              } catch (error) {
                log.error(error);
              }
              return reader.read().then(processText);
            }
          )
          .catch((error) => {
            reject(error);
          });
      });
    }
    return parseStreamText();
  },
  /**
   * 添加CSS链接
   * @param url
   */
  loadCSS(url: string) {
    YiYanChat.dialogAlias.$shadowRoot.insertBefore(
      DOMUtils.createElement("link", {
        rel: "stylesheet",
        href: url,
        type: "text/css",
        crossOrigin: "anonymous",
      }),
      YiYanChat.dialogAlias.$shadowRoot.childNodes[0]
    );
  },
  /**
   * 获取提问的元素
   * @param queryText 提问的问题
   */
  getAskElement(queryText = "") {
    let element = DOMUtils.createElement("div", {
      className: "user-question",
      innerHTML: /*html*/ `
        <div class="avatar-img">
          <img src="https://www.baidu.com/img/flexible/logo/bearicon_198.png"></img>
        </div>
        <div class="ask-text">${queryText}</div>
        `,
    });
    return element;
  },
  /**
   * 获取回答的元素
   */
  getAnswerElement() {
    let element = DOMUtils.createElement("div", {
      className: "gpt-answer",
      innerHTML: /*html*/ `
        <div class="avatar-img">
          <img src="data:image/png;base64,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"></img>
        </div>
        <div class="answer-text markdown-body typing"></div>
        `,
    });
    return element;
  },
  /**
   * 获取AI的回答
   */
  async conversation(queryText = "") {
    let response = await httpx.post("https://chat-ws.baidu.com/aichat/api/conversation", {
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json",
        Origin: "https://www.baidu.com",
        Referer: `https://www.baidu.com/`,
      },
      fetch: true,
      responseType: "stream",
      data: JSON.stringify({
        message: {
          inputMethod: "keyboard",
          isRebuild: false,
          content: {
            query: queryText,
            qtype: 0,
          },
        },
        sessionId: YiYanChat.sessionId,
        aisearchId: YiYanChat.aisearch_id,
        pvId: YiYanChat.pvId,
      }),
    });
    if (!response.status) {
      return;
    }
    let stream = response.data.response;
    return stream;
  },
  /**
   * 转换文本为markdown格式
   * @param text
   */
  conversionTextToMarkdown(text: string) {
    let converter = new showdown.Converter();
    /* 启用表格选项。从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用 */
    converter.setOption("tables", true);
    /* 链接在新窗口打开 */
    converter.setOption("openLinksInNewWindow", true);
    /* 删除线 */
    converter.setOption("strikethrough", true);
    /* 开启emoji */
    converter.setOption("emoji", true);

    /***
     * original: John Gruber 规范中的原始 Markdown 风格
     * vanilla：对决基础风味（v1.3.1 起）
     * github: GitHub 风格的 Markdown，或 GFM
     */
    showdown.setFlavor("github");
    try {
      let markHTML = converter.makeHtml(text);
      return {
        status: true,
        text: markHTML,
      };
    } catch (error) {
      return {
        status: false,
        error: error,
      };
    }
  },
  /**
   * 对内部的markdown元素进行处理
   * @param element
   */
  handleMarkdown(element: HTMLElement) {
    element.querySelectorAll("pre").forEach((ele) => {
      let codeElement = ele.querySelector("code") as HTMLElement;
      let language = "";
      if (codeElement.classList.length >= 2) {
        language = codeElement.classList[0];
      }
      let copyText = codeElement.innerText || codeElement.textContent;
      let codeHeader = DOMUtils.createElement("div", {
        className: "code-header",
        innerHTML: /*html*/ `
          <span class="code-lang">${language}</span>
          <span class="code-copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 32 32">
              <path d="M28 1.333H9.333C8.597 1.333 8 1.93 8 2.667v4H4c-.736 0-1.333.597-1.333 1.333v14.667c0 .353.14.692.39.943l6.667 6.666c.25.25.589.39.943.39h12c.736 0 1.333-.596 1.333-1.333v-4h4c.736 0 1.333-.597 1.333-1.333V2.667c0-.737-.597-1.334-1.333-1.334zM9.333 26.115L7.22 24h2.114v2.115zm12 1.885H12v-5.333c0-.737-.597-1.334-1.333-1.334H5.333v-12h16V28zm5.334-5.333H24V8c0-.736-.597-1.333-1.333-1.333h-12V4h16v18.667z"></path>
            </svg>
            <span class="code-copy-text">复制代码</span>
          </span>
          `,
      });
      let codeCopyText = codeHeader.querySelector(".code-copy-text") as HTMLElement;
      DOMUtils.on(codeCopyText, "click", void 0, function () {
        try {
          utils.copy(copyText);
          Qmsg.success("复制成功");
        } catch (error) {
          Qmsg.error("复制失败，" + error);
        }
      });
      DOMUtils.before(ele, codeHeader);
    });
  },
  /**
   * 清除提问历史
   */
  clearHistoryQuestion() {
    YiYanChat.question.length = 0;
    let $content = YiYanChat.dialogAlias.$shadowRoot.querySelector(".pops-alert-content") as HTMLElement;
    $content.innerHTML = "";
  },
  /**
   * 滚动到内容容器的底部
   */
  scrollToContentContainerEnd() {
    let $contentElement = YiYanChat.dialogAlias.popsElement.querySelector(".pops-alert-content") as HTMLElement;
    $contentElement.scrollTo(0, $contentElement.scrollHeight);
  },
};

export { YiYanChat };
