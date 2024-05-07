import { GM_addStyle } from 'ViteGM';
import { MountVue, VUE_ELE_NAME_ID } from '@/env';
import App from './App.vue';
import { router } from './router';

const TiebaHome = {
    $data: {
        appName: "vite-app",
    },
    init() {
        MountVue(App, router);
        GM_addStyle(`
        #${VUE_ELE_NAME_ID}{
            z-index: 1000;
        }
        body > div:not([id="${VUE_ELE_NAME_ID}"]){
            display: none;
        }
        body > div[class="dia_wrapper"],
        body > div[class="dia_mask"],
        #${VUE_ELE_NAME_ID} ~ *{
            display: unset;
        }
        `)
    },
}

export {
    TiebaHome
}