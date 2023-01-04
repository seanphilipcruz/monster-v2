import { resolve } from "path";

export const recaptchaSiteKey = '6Ld2bAscAAAAAETgf1NV6XXg1DR6ztZRcmCzQyeP';

const baseUrl = (process.env.NODE_ENV === 'development' ? 'http://127.0.0.2' : 'https://monstercebu.com');

export default {
    server: {
        // host: '192.168.0.2'
    },

    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s | Monster BT105.9 Cebu',
        title: 'Monster BT105.9 Cebu',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'robots', content: 'index' },
            { name: 'viewport', content: 'initial-scale=1, width=device-width, viewport-fit=cover' },
            { name: 'subject', content: 'Radio' },
            { name: 'language', content: 'ES' },
            { name: 'author', content: 'Audiovisual Communicators Inc.' },
            { name: 'url', content: 'https://monstercebu.com' },
            { name: 'DC.title', content: 'monsterbt1059' },
            { name: 'geo.region', content: 'PH' },
            { name: 'geo.placename', content: 'Cebu City' },
            { name: 'geo.position', content: '10.3221877; 123.9117792' },
            { name: 'ICBM', content: '10.3221877, 123.9117792' },
            { name: 'format-detection', content: 'telephone=no' },
            { 'http-equiv': 'Content-Security-Policy', content: "img-src * 'self' data:;\n" +
                    "          default-src * 'self' gap: wss: ws: ;\n" +
                    "          style-src * 'self' 'unsafe-inline' 'unsafe-eval';\n" +
                    "          script-src * 'self' 'unsafe-inline' 'unsafe-eval';\n" +
                    "          frame-src * 'self' data: http: https: wss: ws: 'unsafe-inline' 'unsafe-eval';" },
            { 'property': 'og:type', content: "website" },
            { 'property': 'twitter:site', content: "@bt1059" },
            { 'property': 'twitter:creator', content: "@bt1059" },
            { 'property': 'twitter:card', content: "summary_large_image" },
            { 'property': 'fb:app_id', content: '250218719159269' }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}/app-logo.png` },
            { rel: 'icon', sizes: '32x32', href: `${baseUrl}/app-logo.png` },
            { rel: 'icon', sizes: '16x16', href: `${baseUrl}/app-logo.png` },
            { rel: 'icon', type: 'image/x-icon', href: `${baseUrl}/favicon.ico` },
            { rel: 'stylesheet', type: 'text/css', href: `${baseUrl}/css/app.css` }
        ],
        script: [
            { src: `${baseUrl}/js/app.js` }
        ],
        bodyAttrs: {
            class: 'bg-dark-gray'
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/css/bootstrap-social.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/mixins', mode: 'client' },
        { src: '~/plugins/fontawesome', mode: 'client' }
    ],

    loading: {
        color: '#f4f900'
    },

    generate: {
        fallback: true,
        interval: 1800
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/recaptcha'
    ],

    recaptcha: {
        siteKey: recaptchaSiteKey,
        mode: 'base',
        version: 3
    },

    alias: {
        'images': resolve(__dirname, './static/images')
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    route: {
        trailingSlash: false
    }
}
