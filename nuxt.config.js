export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mutzcraft-nuxt2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/client/',
        prefix: 'Client',
      },
      {
        path: '~/components/admin/',
        prefix: 'Admin',
      },
    ],
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyC-9N8H9VasX89il9t4Sd-NSM3ZB5_5PJQ',
      authDomain: 'mutzcraft-nuxt.firebaseapp.com',
      projectId: 'mutzcraft-nuxt',
      storageBucket: 'mutzcraft-nuxt.appspot.com',
      messagingSenderId: '944843167176',
      appId: '1:944843167176:web:a1567c5e33eeb371569cfd',
      measurementId: 'G-GCFV2NZ59N',
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChanged',
        },
        ssr: true,
      }, // Just as example. Can be any other service.
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
