// 允许使用 node 或 umd 包
const commonjs = require("@rollup/plugin-commonjs");
// 解析导入的依赖模块路径，以便 Rollup 能够正确找到依赖模块。
const { nodeResolve } = require("@rollup/plugin-node-resolve");
// 编译 TS 代码
const typescript = require("@rollup/plugin-typescript");
// 清空 dist
const cleaner = require("rollup-plugin-clear");
const fs = require("fs");
const path = require("path");

// 模块名
const moduleName = "Utils";

function copyFolder(src, dest) {
	// 创建目标目录如果不存在
	if (!fs.existsSync(dest)) {
		fs.mkdirSync(dest, { recursive: true });
	}

	// 读取源目录的内容
	fs.readdir(src, (err, files) => {
		if (err) throw err;

		files.forEach((file) => {
			const srcPath = path.join(src, file);
			const destPath = path.join(dest, file);

			// 获取文件信息
			fs.stat(srcPath, (err, stat) => {
				if (err) throw err;

				// 如果是文件，则复制
				if (stat.isFile()) {
					fs.copyFile(srcPath, destPath, (err) => {
						if (err) throw err;
					});
				} else if (stat.isDirectory()) {
					// 如果是目录，则递归复制
					copyFolder(srcPath, destPath);
				}
			});
		});
	});
}
function customTypesPlugin() {
	return {
		name: "custom-types",
		buildEnd() {
			// const typesDir = path.resolve(__dirname, "./src/types");
			copyFolder("./src/types", "./dist/types/src/types");
			// 将所有类型声明文件合并成一个输出文件
			// this.on("generateBundle", (outputOptions, bundle) => {
			// 	const outputFile = path.resolve(outputOptions.dir, "types.d.ts");
			// 	const content = files
			// 		.map((file) => fs.readFileSync(path.join(typesDir, file), "utf8"))
			// 		.join("\n");

			// 	fs.writeFileSync(outputFile, content);
			// });
		},
	};
}

module.exports = {
	plugins: [
		cleaner({
			targets: ["./dist"],
		}),
		nodeResolve(),
		commonjs(),
		typescript(),
		customTypesPlugin(),
	],
	input: "./index.ts", // 源文件入口
	output: [
		{
			file: "dist/index.esm.js", // package.json 中 "module": "dist/index.esm.js"
			format: "esm", // es module 形式的包， 用来import 导入， 可以tree shaking
			sourcemap: true,
		},
		{
			file: "dist/index.cjs.js", // package.json 中 "main": "dist/index.cjs.js",
			format: "cjs", // commonjs 形式的包， require 导入
			sourcemap: true,
		},
		{
			file: "dist/index.umd.js",
			name: moduleName, // 模块名
			format: "umd", // umd 兼容形式的包， 可以直接应用于网页 script
			sourcemap: true,
		},
		{
			file: "dist/index.amd.js",
			format: "amd", // amd 兼容形式的包， 适用于浏览器环境中使用 AMD 加载器加载模块
			sourcemap: true,
		},
		{
			file: "dist/index.iife.js",
			name: moduleName, // 模块名
			format: "iife", // iife 兼容形式的包， 将模块包裹在一个立即执行的函数中。适用于直接在浏览器中使用
			sourcemap: true,
		},
		{
			file: "dist/index.system.js",
			name: moduleName, // 模块名
			format: "system", // system 兼容形式的包， 可以在浏览器和 Node.js 环境下加载
			sourcemap: true,
		},
	],
};
