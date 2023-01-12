import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Emitter } from 'mitt';
import { inject } from 'vue';

// toast
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

// 全局状态管理
import useAppStore from '@/store/useAppStore';

export default function useApp() {
    const route = useRoute();
    const router = useRouter();
    const { locale, t } = useI18n();
    const mitt: Emitter<any> = inject<any>('mitt');

    type NoticeType = 'info' | 'success' | 'warning' | 'error';
    const notice = function (text: any, type: NoticeType = 'success', close = true) {
        let bg: any = null;
        let color: any = null;
        if (type === 'error') {
            bg = 'rgb(243,205,213)';
            color = 'rgb(208,48,80)';
        }
        if (type === 'info') {
            bg = 'rgb(227,228,229)';
            color = 'rgb(118,124,130)';
        }
        if (type === 'success') {
            bg = 'rgb(199,232,214)';
            color = 'rgb(24,160,88)';
        }
        if (type === 'warning') {
            bg = 'rgb(251,232,201)';
            color = 'rgb(240,160,32)';
        }

        const data: Toastify.Options = {
            text,
            close: true,
            duration: close ? 2000 : 0,
            gravity: 'top',
            position: 'center',
            style: {
                background: bg,
                color,
            },
        };

        Toastify(data).showToast();
    };

    const appStore = useAppStore();

    return {
        route,
        router,
        locale,
        t,
        mitt,

        appStore,

        notice,
    };
}
