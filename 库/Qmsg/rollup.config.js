// 允许使用 node 或 umd 包
const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
// 编译 TS 代码
const typescript = require("@rollup/plugin-typescript");

module.exports = {
	plugins: [nodeResolve(), commonjs(), typescript()],
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
			name: "Qmsg",
			format: "umd", // umd 兼容形式的包， 可以直接应用于网页 script
			sourcemap: true,
		},
	],
};
