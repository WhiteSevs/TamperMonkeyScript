import { pops, utils, console } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";

export const vConsolePlugin = {
	State(vConsole: any, VConsole: any) {
		const Stats = function () {
			var mode = 0;
			var localPositionStorageKey = "vConsole-Plugin-Stats-Position";
			function getLocalPositionStorage() {
				return GM_getValue(localPositionStorageKey, {
					top: 0,
					left: 0,
				});
			}
			function setLocalPositionStorage(left: number, top: number) {
				GM_setValue(localPositionStorageKey, {
					left: left,
					top: top,
				});
			}
			var container = document.createElement("div");
			let oldPosition = getLocalPositionStorage();
			container.style.cssText = `position:fixed;top:${oldPosition.top}px;left:${oldPosition.left}px;cursor:pointer;opacity:0.9;z-index:10000`;
			container.addEventListener(
				"click",
				function (event) {
					event.preventDefault();
					showPanel(++mode % container.children.length);
				},
				{
					capture: true,
				}
			);
			function addPanel(panel: any) {
				container.appendChild(panel.dom);
				return panel;
			}

			function showPanel(id: any) {
				for (var i = 0; i < container.children.length; i++) {
					// @ts-ignore
					container.children[i].style.display = i === id ? "block" : "none";
				}

				mode = id;
			}

			function drag() {
				pops.config.InstanceUtils.drag(container, {
					dragElement: container,
					limit: true,
					extraDistance: 2,
					moveCallBack(moveElement, left, top) {
						setLocalPositionStorage(left, top);
					},
				});
			}

			var beginTime = (performance || Date).now(),
				prevTime = beginTime,
				frames = 0;

			// @ts-ignore
			var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
			// @ts-ignore
			var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));

			// @ts-ignore
			if (self.performance && self.performance.memory) {
				// @ts-ignore
				var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
			}

			showPanel(0);
			drag();
			return {
				REVISION: 16,

				dom: container,

				addPanel: addPanel,
				showPanel: showPanel,

				begin: function () {
					beginTime = (performance || Date).now();
				},

				end: function () {
					frames++;

					var time = (performance || Date).now();

					msPanel.update(time - beginTime, 200);

					if (time >= prevTime + 1000) {
						fpsPanel.update((frames * 1000) / (time - prevTime), 100);

						prevTime = time;
						frames = 0;

						if (memPanel) {
							// @ts-ignore
							var memory = performance.memory;
							memPanel.update(
								memory.usedJSHeapSize / 1048576,
								memory.jsHeapSizeLimit / 1048576
							);
						}
					}

					return time;
				},

				update: function () {
					beginTime = this.end();
				},

				// Backwards Compatibility

				domElement: container,
				setMode: showPanel,
			};
		};

		Stats.Panel = function (name: string, fg: any, bg: any) {
			var min = Infinity,
				max = 0,
				round = Math.round;
			var PR = round(window.devicePixelRatio || 1);

			var WIDTH = 80 * PR,
				HEIGHT = 48 * PR,
				TEXT_X = 3 * PR,
				TEXT_Y = 2 * PR,
				GRAPH_X = 3 * PR,
				GRAPH_Y = 15 * PR,
				GRAPH_WIDTH = 74 * PR,
				GRAPH_HEIGHT = 30 * PR;

			var canvas = document.createElement("canvas");
			canvas.width = WIDTH;
			canvas.height = HEIGHT;
			canvas.style.cssText = "width:80px;height:48px";

			var context = canvas.getContext("2d")!;
			context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
			context.textBaseline = "top";

			context.fillStyle = bg;
			context.fillRect(0, 0, WIDTH, HEIGHT);

			context.fillStyle = fg;
			context.fillText(name, TEXT_X, TEXT_Y);
			context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

			context.fillStyle = bg;
			context.globalAlpha = 0.9;
			context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

			return {
				dom: canvas,

				update: function (value: number, maxValue: number) {
					min = Math.min(min, value);
					max = Math.max(max, value);

					context.fillStyle = bg;
					context.globalAlpha = 1;
					context.fillRect(0, 0, WIDTH, GRAPH_Y);
					context.fillStyle = fg;
					context.fillText(
						round(value) +
							" " +
							name +
							" (" +
							round(min) +
							"-" +
							round(max) +
							")",
						TEXT_X,
						TEXT_Y
					);

					context.drawImage(
						canvas,
						GRAPH_X + PR,
						GRAPH_Y,
						GRAPH_WIDTH - PR,
						GRAPH_HEIGHT,
						GRAPH_X,
						GRAPH_Y,
						GRAPH_WIDTH - PR,
						GRAPH_HEIGHT
					);

					context.fillRect(
						GRAPH_X + GRAPH_WIDTH - PR,
						GRAPH_Y,
						PR,
						GRAPH_HEIGHT
					);

					context.fillStyle = bg;
					context.globalAlpha = 0.9;
					context.fillRect(
						GRAPH_X + GRAPH_WIDTH - PR,
						GRAPH_Y,
						PR,
						round((1 - value / maxValue) * GRAPH_HEIGHT)
					);
				},
			};
		};

		class VConsoleStatsPlugin {
			vConsole;
			VConsole;
			dom: any;
			requestID: any;
			stats: any;
			constructor(vConsole: any, VConsole: any) {
				this.vConsole = vConsole;
				this.VConsole = VConsole;
				this.dom = null;
				this.requestID = null;
				this.stats = null;
				return this.init();
			}
			init() {
				this.addStyle();
				const vConsoleStats = new this.VConsole.VConsolePlugin(
					"Stats",
					"Stats"
				);
				vConsoleStats.on("ready", () => {
					document
						.querySelectorAll(".vc-stats-buttons")
						.forEach((statusButton) => {
							statusButton.addEventListener("click", (event) => {
								// @ts-ignore
								const currentType = event.target.dataset.type;
								if (
									currentType.toString() === "2" &&
									// @ts-ignore
									!(self.performance && self.performance.memory)
								) {
									console.error(
										"浏览器不支持window.performance或者window.performance.memory"
									);
									return;
								}
								this.changePanel(currentType);
							});
						});
				});

				vConsoleStats.on("renderTab", (callback: any) => {
					const statsHTML = /*html*/ `
                    <div class="vc-stats-buttons">
                        <div class="vc-button-container">
                            <button class="vc-stats-button" data-type="0">show FPS</button>
                            <div class="vc-description">
                            <span>最后一秒渲染的帧。数字越高越好</span>
                            </div>
                        </div>
                        <div class="vc-button-container">
                            <button class="vc-stats-button" data-type="1">show MS</button>
                            <div class="vc-description">
                            <span>渲染帧所需的毫秒数。数字越低越好</span>
                            </div>
                        </div>
                        <div class="vc-button-container">
                            <button class="vc-stats-button" data-type="2">show MB</button>
                            <div class="vc-description">
                            <span>内存分配(MB)</span>
                            <a class="vc-link" href="https://caniuse.com/mdn-api_performance_memory" target="_blank">performance.memory兼容性查看</a>
                            <span>Chrome启用方式: --enable-precise-memory-info</span>
                            </div>
                        </div>
                    </div>`;
					callback(statsHTML);
				});

				vConsoleStats.on("addTool", (callback: any) => {
					const buttons = [
						{
							name: "Show Stats",
							onClick: this.show,
						},
						{
							name: "Close Stats",
							onClick: this.close,
						},
					];
					callback(buttons);
				});
				this.vConsole.addPlugin(vConsoleStats);
				return vConsoleStats;
			}

			addStyle = (target?: any) => {
				if (target == null) {
					target = document.head || document.body || document.documentElement;
				}
				const cssNode = document.createElement("style");
				cssNode.setAttribute("type", "text/css");
				cssNode.innerHTML = /*css*/ `
                .vc-stats-button{
                    margin: 10px 10px;
                    background-color: #fbf9fe;
                    padding: 2px 4px;
                    cursor: pointer;
                    border-radius: 4px;
                    border: 1px solid;
                }
                .vc-button-container{
                    display: flex;
                    align-items: center;
                }
                .vc-description{
                    display: flex;
                    flex-direction: column;
                }
                .vc-description a.vc-link{
                    color: blue;
                }`;
				target.appendChild(cssNode);
			};
			show = () => {
				if (!this.stats) {
					// @ts-ignore
					this.stats = new Stats();
					this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
					this.dom = this.stats.dom;
					document.body.appendChild(this.dom);
					this.requestID = requestAnimationFrame(this.loop);
				}
			};

			changePanel = (type: any) => {
				if (!this.stats) {
					this.show();
				}
				this.stats.setMode(Number(type));
			};

			loop = () => {
				this.stats.update();
				this.requestID = requestAnimationFrame(this.loop);
			};

			close = () => {
				if (this.requestID) {
					cancelAnimationFrame(this.requestID);
				}
				if (this.dom) {
					document.body.removeChild(this.dom);
				}

				this.stats = null;
				this.requestID = null;
				this.dom = null;
			};
		}

		return new VConsoleStatsPlugin(vConsole, VConsole);
	},
	exportLog(vConsole: any, VConsole: any) {
		class VConsoleOutputLogsPlugin {
			vConsole;
			VConsole;
			$;
			dom: any;
			logItemSelector;

			constructor(vConsole: any, VConsole: any, logItemSelector?: any) {
				this.vConsole = vConsole;
				this.VConsole = VConsole;
				this.$ = vConsole.$;
				this.dom = null;
				this.logItemSelector =
					logItemSelector || ".vc-content #__vc_plug_default .vc-log-row";
				return this.init();
			}

			init() {
				const vConsoleExportLogs = new this.VConsole.VConsolePlugin(
					"exportLog",
					"exportLog"
				);

				vConsoleExportLogs.on("ready", () => {
					console.log("[vConsole-exportlog-plugin] -- load");
				});
				vConsoleExportLogs.on("renderTab", (callback: any) => {
					const html = /*html*/ `<div class="vconsole-exportlog"></div>`;
					callback(html);
				});
				vConsoleExportLogs.on("addTool", (callback: any) => {
					const buttons = [
						{
							name: "exportLogs",
							onClick: this.export,
						},
						{
							name: "copyLogs",
							onClick: this.copyText,
						},
					];
					callback(buttons);
				});
				this.vConsole.addPlugin(vConsoleExportLogs);
				return vConsoleExportLogs;
			}
			funDownload = (content: string, filename: string) => {
				var eleLink = document.createElement("a");
				eleLink.download = filename;
				eleLink.style.display = "none";
				var blob = new Blob([content]);
				eleLink.href = URL.createObjectURL(blob);
				document.body.appendChild(eleLink);
				eleLink.click();
				document.body.removeChild(eleLink);
			};
			getAllLogContent = () => {
				let logRowsElement = document.querySelectorAll(this.logItemSelector);
				let logText = "";
				for (let index = 0; index < logRowsElement.length; index++) {
					const ele = logRowsElement[index];
					logText += `${ele.textContent}\n`;
				}
				return logText;
			};
			export = () => {
				let logText = this.getAllLogContent();
				this.funDownload(
					logText,
					`${
						new Date().toLocaleDateString() +
						" " +
						new Date().toLocaleTimeString()
					}.log`
				);
			};
			copyText = () => {
				let logText = this.getAllLogContent();
				utils.setClip(logText);
			};
		}
		return new VConsoleOutputLogsPlugin(vConsole, VConsole);
	},
};
