import { PluginOption } from "vite";

/** 修复vite-plugin-monkey 挂载到head的问题 */
export const repairMonkeyMountHead = (): PluginOption => {
	return {
		name: "modify-monkey",
		configureServer(server) {
			// vite-plugin-monkey 安装脚本的路径
			let vitePluginInstallPathName = "/__vite-plugin-monkey.install.user.js";
	// 		server.middlewares.use(async (req, res, next) => {
	// 			if (req.url?.startsWith(vitePluginInstallPathName)) {
	// 				let originEnd = res.end;
	// 				res.end = function (chunk: any, ...args: any[]): any {
	// 					let body = chunk.toString() as string;
	// 					body = body.replace(
	// 						`document.head.insertBefore(entryScript, document.head.firstChild)`,
	// 						`if (document.head) {
	// 	if (document.head.firstChild) {
	// 	  document.head.insertBefore(entryScript, document.head.firstChild);
	// 	} else {
	// 	  document.head.appendChild(entryScript);
	// 	}
	//   } else {
	// 	if (document.documentElement.firstChild) {
	// 	  document.documentElement.insertBefore(entryScript,document.documentElement.firstChild);
	// 	} else {
	// 	  document.documentElement.appendChild(entryScript);
	// 	}
	//   }`
	// 					);
	// 					originEnd.call(res, body, ...args);
	// 				};
	// 			}
	// 			next();
	// 		});
		},
	};
};
