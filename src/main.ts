import { createApp } from 'vue';
import App from './App.vue';

import HiCache from '@/core/utils/hiCache';
import HiStance from '@/core/utils/hiStance';

// reset
import './styles/reset.scss';

// tailwind css
import './assets/css/tailwind.css';

// pinia
import pinia from './store';

// router
import router from './router';

// i18n
import vueI18n from './core/i18n';

// mitt
import mitt from 'mitt';

// svg
import '@/core/utils/svg';

// 图片懒加载
import VueLazyLoad from 'vue3-lazyload';
import { Router } from 'vue-router';
import bootstrap from '@/core';
import logger from '@/core/utils/logger';
import useAppStore from "@/store/useAppStore";

// 设置多语言
const i18nFunc = vueI18n(HiCache.getCache(HiStance.LANGUAGE) || 'zh-cn');
window.$t = i18nFunc.global.t;

const app = createApp(App);

app.use(pinia)
    .use(i18nFunc)
    .use(VueLazyLoad, {
        error: require('./assets/images/lazyload/404.jpg'),
        loading: require('./assets/images/lazyload/loading.svg'),
        log: false,
    });

bootstrap(app)
    .then(() => {
        const appStore = useAppStore();

        appStore.getFrontEndLanguages().finally(async () => {
            // 设置多语言
            const i18nFunc = vueI18n(HiCache.getCache(HiStance.LANGUAGE));

            window.$t = i18nFunc.global.t;

            app.provide('mitt', mitt());

            app.use(i18nFunc)
                .use(router as Router)
                .mount('#app');

            logger.success('App start success...');
        });
    })
    .catch(err => {
        logger.error(`start error: ${err}`);
    });

// @ts-ignore
window.__app__ = app;
