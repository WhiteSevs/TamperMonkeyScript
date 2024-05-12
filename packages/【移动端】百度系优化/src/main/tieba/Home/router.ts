import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";
import Follow from "./Follow.vue";
import Fans from "./Fans.vue";

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home,
            meta: {
                keepAlive: true
            },
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: '/follow',
            name: "Follow",
            component: Follow
        },
        {
            path: '/fans',
            name: "Fans",
            component: Fans,
        },
    ],
})

router.push("/");

export {
    router
}