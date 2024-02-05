// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/google-fonts',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '/assets/scss/main.scss'
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Inter: '300..700',
    }
  }
})