module.exports = {
  mode: 'spa',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crud_nuxt.js',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router configuration
  router: {
    base: '/',
    routes: [{
        path: '/',
        component: '~/pages/login.vue'
      },
      {
        path: '/login',
        component: '~/pages/login.vue'
      },
      {
        path: '/inventaris',
        component: '~/pages/inventaris.vue'
      }
    ]
  },

  // Server middleware configuration
  serverMiddleware: [{
    path: '/api/inventaris',
    handler: '~/pages/api/inventaris.js'
  }]
};
