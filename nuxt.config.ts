import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true,
        shim: false,
    },
    modules: [
        '@unocss/nuxt',
    ],
    unocss: {
        preflight: true,
    },
    meta: {
        link: [
            { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        ],
    },
});
