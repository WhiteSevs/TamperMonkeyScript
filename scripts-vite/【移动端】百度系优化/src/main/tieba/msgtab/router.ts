import { createRouter, createWebHashHistory, type Router } from "vue-router";
import MsgTab from "./MsgTab.vue";
import Agreeme from "./Agreeme.vue";
import Replyme from "./Replyme.vue";
import Atme from "./Atme.vue";

export const TiebaMsgTabRouter = {
	router: null as unknown as Router,
	init() {
		this.router = createRouter({
			// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
			history: createWebHashHistory(),
			routes: [
				{
					path: "/",
					name: "MsgTab",
					component: MsgTab,
					meta: {
						keepAlive: true,
					},
				},
				{
					path: "/agreeme",
					name: "Agreeme",
					component: Agreeme,
				},
				{
					path: "/replyme",
					name: "Replyme",
					component: Replyme,
				},
				{
					path: "/atme",
					name: "Atme",
					component: Atme,
				},
			],
		});
		// this.router.push("/");
	},
};
