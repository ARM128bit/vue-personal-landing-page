import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: 'client',
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
  css: ["./client/app/global.css"],
  vite: {
    plugins: [tailwindcss(), svgLoader()],
    build: {
      chunkSizeWarningLimit: 1600,
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ["@nuxt/image"],
  components: [
    {
      path: "widgets",
      pathPrefix: true,
      prefix: "Widget"
    },
  ],
  imports: {
    dirs: [
      // 'shared/**/*.ts',
      // 'features/**/*.ts',
      // "src/widgets/**/*.ts",
      // 'entities/**/*.ts',
    ],
  },
});
