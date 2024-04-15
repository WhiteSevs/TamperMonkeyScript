import { createApp, onBeforeMount, onMounted } from 'vue';
import './style.css';
import App from './App.vue';
import { GM_addElement, monkeyWindow, unsafeWindow } from '$';
import { mountLeftNavigatorBar } from './api/MTElement';
import { pops } from './api/env';

/* 创建根元素 */
const app = createApp(App);
app.mount((() => {
  const app = document.createElement('div');
  document.body.append(app);

  mountLeftNavigatorBar("脚本设置", (event) => {
    console.log(event);
  });

  return app;
})());

