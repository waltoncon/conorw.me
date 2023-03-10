export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  typescript: {
    strict: true,
    shim: false,
  },
  unocss: {
    preflight: true,
  },
});
