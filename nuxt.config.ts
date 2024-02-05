// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/api/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
  },
  ssr:false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap' },
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Lato&display=swap" },
        { rel: 'stylesheet', href: 'https://kit.fontawesome.com/da2962ce7f.js' }
     ],
      meta: [
        { name: 'theme-color', content: '#99bca6' },
        { name: 'theme-color', content: '#99bca6' },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: [
    '~/assets/main.css'
  ],
  modules: [
  '@nuxt/content',
  'nuxt-icon',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
