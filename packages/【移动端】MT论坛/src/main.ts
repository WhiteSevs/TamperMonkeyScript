import { createApp, onBeforeMount, onMounted } from 'vue';
import { GM_addElement, monkeyWindow, unsafeWindow } from 'ViteGM';
import { MTElement } from './api/MTElement';
import { DOMUtils, pops } from '@/env';


DOMUtils.ready(() => {
    console.log("dom is loaded");
})