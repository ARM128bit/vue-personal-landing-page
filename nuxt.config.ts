import tailwindcss from "@tailwindcss/vite";
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": '../src',
  },
  dir: {
    app: './src/app',
    layouts: './src/app/layouts',
    plugins: './src/app/plugins',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Iurii Antonevich Front-end developer",
      charset: "utf-8",
      meta: [],
      link: [],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["./src/shared/ui/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss(), svgLoader()],
    build: {
      chunkSizeWarningLimit: 1600
    }
  },
  nitro: {
    compressPublicAssets: true,
  },
  build: {
    transpile: ["mdi-vue"],
  },
  modules: ["@nuxt/image"],
  image: {
    provider: "none",
  },
});
