// 允许使用 node 或 umd 包
import commonjs from "@rollup/plugin-commonjs";
// 解析导入的依赖模块路径，以便 Rollup 能够正确找到依赖模块。
import { nodeResolve } from "@rollup/plugin-node-resolve";
// 编译 TS 代码
import typescript from "@rollup/plugin-typescript";
// 清空 dist
import cleaner from "rollup-plugin-clear";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

// 模块名
const moduleName = "Qmsg";
const outDir = "./dist";
/**
 *
 * @returns {import('rollup').Plugin}
 */
function fileStringPlugin() {
  return {
    name: "file-string-plugin",
    transform(code, id) {
      if (id.endsWith(".css")) {
        return {
          code: /*js*/ `
          const css_text = ${JSON.stringify(code)};
          export default css_text;`,
          map: null,
        };
      }
    },
  };
}

/**
 * @type {import('rollup').OutputOptions[]}
 */
const output = [
  {
    file: `${outDir}/index.esm.js`, // package.json 中 "module": "dist/index.esm.js"
    format: "esm", // es module 形式的包， 用来import 导入， 可以tree shaking
    sourcemap: true,
  },
  {
    file: `${outDir}/index.cjs.js`, // package.json 中 "main": "dist/index.cjs.js",
    format: "cjs", // commonjs 形式的包， require 导入
    sourcemap: true,
  },
  {
    file: `${outDir}/index.umd.js`,
    name: moduleName, // 模块名
    format: "umd", // umd 兼容形式的包， 可以直接应用于网页 script
    sourcemap: true,
  },
  {
    file: `${outDir}/index.amd.js`,
    format: "amd", // amd 兼容形式的包， 适用于浏览器环境中使用 AMD 加载器加载模块
    sourcemap: true,
  },
  {
    file: `${outDir}/index.iife.js`,
    name: moduleName, // 模块名
    format: "iife", // iife 兼容形式的包， 将模块包裹在一个立即执行的函数中。适用于直接在浏览器中使用
    sourcemap: true,
  },
  {
    file: `${outDir}/index.system.js`,
    name: moduleName, // 模块名
    format: "system", // system 兼容形式的包， 可以在浏览器和 Node.js 环境下加载
    sourcemap: true,
  },
];

// 添加压缩版本
output.forEach((outputItem) => {
  output.push({
    ...outputItem,
    file: outputItem.file.trim().replace(/.js$/, ".min.js"),
    plugins: [
      terser({
        format: {
          comments: false,
        },
      }),
    ],
  });
});

/** @type {import('rollup').RollupOptions} */
const config = {
  plugins: [
    cleaner({
      targets: [outDir],
    }),
    nodeResolve(),
    commonjs(),
    fileStringPlugin(),
    json({
      preferConst: true,
    }),
    typescript(),
  ],
  input: "./index.ts", // 源文件入口
  output: output,
};

export default config;
