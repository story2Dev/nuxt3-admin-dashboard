// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@bg-dev/nuxt-naiveui',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  app: {
    pageTransition: {
      name: 'slide-left',
      mode: 'out-in',
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        icon: 'cif:gb',
        file: 'en-US.json',
      },
      {
        code: 'lo',
        name: 'ພາສາລາວ',
        icon: 'cif:la',
        file: 'lo-LA.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'lo',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  naiveui: {
    colorModePreference: 'light',
  },
});
