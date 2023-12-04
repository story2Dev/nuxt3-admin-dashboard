// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@bg-dev/nuxt-naiveui', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  tailwindcss: {
    exposeConfig: true,
  },
});
