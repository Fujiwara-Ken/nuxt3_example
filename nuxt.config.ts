import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  ssr: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  
});
