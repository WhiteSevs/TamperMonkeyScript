const Progress = function (paramConfig) {
	this.config = {
		/**
		 * canvas元素节点
		 * @type {HTMLCanvasElement}
		 */
		canvasNode: null,
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
		/**
		 * 控制绘制的函数
		 */
		draw: () => {},
	};
	this.config = Utils.assign(this.config, paramConfig);
	if (!(this.config.canvasNode instanceof HTMLCanvasElement)) {
		throw new Error("Utils.Progress 参数 canvasNode 必须是 HTMLCanvasElement");
	}
	/* 获取画笔 */
	let ctx = this.config.canvasNode.getContext("2d");
	/* 元素宽度 */
	let width = this.config.canvasNode.width;
	/* 元素高度 */
	let height = this.config.canvasNode.height;

	/* 清除锯齿 */
	if (window.devicePixelRatio) {
		this.config.canvasNode.style.width = width + "px";
		this.config.canvasNode.style.height = height + "px";
		this.config.canvasNode.height = height * window.devicePixelRatio;
		this.config.canvasNode.width = width * window.devicePixelRatio;
		ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
	}
	/* 设置线宽 */
	ctx.lineWidth = this.config.lineWidth;
	/* 绘制 */
	this.draw = function () {
		let degActive = (this.config.progress * 360) / 100;
		/* 清除画布 */
		ctx.clearRect(0, 0, width, height);
		/* 开始绘制底圆 */
		ctx.beginPath();
		ctx.arc(width / 2, height / 2, this.config.circleRadius, 1, 8);
		ctx.strokeStyle = this.config.lineBgColor;
		ctx.stroke();
		/* 开始绘制动态圆 */
		ctx.beginPath();
		ctx.arc(
			width / 2,
			height / 2,
			this.config.circleRadius,
			-Math.PI / 2,
			(degActive * Math.PI) / 180 - Math.PI / 2
		);
		ctx.strokeStyle = this.config.lineColor;
		ctx.stroke();
		/* 获取百分比 */
		let txt = parseInt(this.config.progress) + "%";
		ctx.font = this.config.fontSize + "px SimHei";
		/* 获取文本宽度 */
		let w = ctx.measureText(txt).width;
		let h = this.config.fontSize / 2;
		ctx.fillStyle = this.config.textColor;
		ctx.fillText(txt, width / 2 - w / 2, height / 2 + h / 2);
	}.bind(this);
};

export { Progress };
