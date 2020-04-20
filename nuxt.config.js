require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'MyFerment',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'MyFerment gibt dir inen Überlick über all deine Fermente. Egal ob Kombucha mit Scoby, Kefir mit Kristallen oder Knollen, Milchsäurevergärtes mit Salzlake.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  router: {
    middleware: 'i18n'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // DOC: https://typescript.nuxtjs.org/guide/setup.html
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
          databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
          projectId: process.env.PROJECT_ID,
          storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedMutation: 'auth/ON_STATE_CHANGED',
            },
            ssr: false
          }
        }
      }
    ]
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
