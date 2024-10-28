import type { ProgressParamConfig } from "./types/Progress";
import { Utils } from "./Utils";

class Progress {
	#config: ProgressParamConfig = {
		/**
		 * canvas元素节点
		 */
		canvasNode: null as any,
		/**
		 * 绘制角度
		 */
		deg: 95,
		/**
		 * 进度
		 */
		progress: 0,
		/**
		 * 绘制的线宽度
		 */
		lineWidth: 10,
		/**
		 * 绘制的背景颜色
		 */
		lineBgColor: "#1e637c",
		/**
		 * 绘制的线的颜色
		 */
		lineColor: "#25deff",
		/**
		 * 绘制的字体颜色
		 */
		textColor: "#000000",
		/**
		 * 绘制的字体大小(px)
		 */
		fontSize: 22,
		/**
		 * 绘制的圆的半径
		 */
		circleRadius: 50,
	};
	#ctx: CanvasRenderingContext2D = null as any;
	#width: number = null as any;
	#height: number = null as any;
	/**
	 *
	 * @param paramConfig 配置信息
	 */
	constructor(paramConfig: ProgressParamConfig) {
		this.#config = Utils.assign(this.#config, paramConfig);
		if (!(this.#config.canvasNode instanceof HTMLCanvasElement)) {
			throw new Error(
				"Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement"
			);
		}
		this.init();
	}
	/**
	 * 初始化
	 */
	private init() {
		/* 获取画笔 */
		let ctx = this.#config.canvasNode.getContext("2d");
		if (ctx == null) {
			throw new Error("Utils.Progress 获取画笔失败");
		}
		this.#ctx = ctx;
		/* 元素宽度 */
		this.#width = this.#config.canvasNode.width;
		/* 元素高度 */
		this.#height = this.#config.canvasNode.height;
		/* 清除锯齿 */
		if (window.devicePixelRatio) {
			this.#config.canvasNode.style.width = this.#width + "px";
			this.#config.canvasNode.style.height = this.#height + "px";
			this.#config.canvasNode.height = this.#height * window.devicePixelRatio;
			this.#config.canvasNode.width = this.#width * window.devicePixelRatio;
			this.#ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		}
		/* 设置线宽 */
		this.#ctx.lineWidth = this.#config.lineWidth;
	}
	/**
	 * 绘制
	 */
	draw() {
		let degActive = (this.#config.progress * 360) / 100;
		/* 清除画布 */
		this.#ctx.clearRect(0, 0, this.#width, this.#height);
		/* 开始绘制底圆 */
		this.#ctx.beginPath();
		this.#ctx.arc(
			this.#width / 2,
			this.#height / 2,
			this.#config.circleRadius,
			1,
			8
		);
		this.#ctx.strokeStyle = this.#config.lineBgColor;
		this.#ctx.stroke();
		/* 开始绘制动态圆 */
		this.#ctx.beginPath();
		this.#ctx.arc(
			this.#width / 2,
			this.#height / 2,
			this.#config.circleRadius,
			-Math.PI / 2,
			(degActive * Math.PI) / 180 - Math.PI / 2
		);
		this.#ctx.strokeStyle = this.#config.lineColor;
		this.#ctx.stroke();
		/* 获取百分比 */
		let txt = parseInt(this.#config.progress.toString()) + "%";
		this.#ctx.font = this.#config.fontSize + "px SimHei";
		/* 获取文本宽度 */
		let w = this.#ctx.measureText(txt).width;
		let h = this.#config.fontSize / 2;
		this.#ctx.fillStyle = this.#config.textColor;
		this.#ctx.fillText(txt, this.#width / 2 - w / 2, this.#height / 2 + h / 2);
	}
}

export { Progress };
