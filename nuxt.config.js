import vuetifyConfig from './vuetify.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ipak Yo'li Mobile",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/iym_logo.svg' }],
  },

  server: {
    host: '0.0.0.0',
    port: 8080,
  },

  loading: '~/components/Loader.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  buildDir: 'dist',
  target: 'static',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.js', ssr: false },
    '~/plugins/swiper.js',
    '~/plugins/vue-i18n.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['./assets/default/*.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vuetify: vuetifyConfig,
}
