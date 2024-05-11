import { resolve } from "path";
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import replace from 'vite-plugin-filter-replace';

export default defineConfig({
  base: "/matchapp-vite/",
  server: {
    open: "/matchapp-vite/pages.html",
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      svg: null,
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      tiff: {
        quality: 70,
      },
    }),
    replace([
      {
        filter: /\.html$/,
        replace: {
          from: /@img/g,
          to: "/images",
        },
      },
    ]),
  ],
  build: {
    rollupOptions: {
      input: {
        pages: resolve(__dirname, "pages.html"),
        "find-people": resolve(__dirname, "find-people/index.html"),
        person: resolve(__dirname, "person/index.html"),
        "profile-editing": resolve(__dirname, "profile-editing/index.html"),
        profile: resolve(__dirname, "profile/index.html"),
        invite: resolve(__dirname, "invite/index.html"),
        payment: resolve(__dirname, "payment/index.html"),
        "profile-create": resolve(__dirname, "profile-create/index.html"),
        "step-1": resolve(__dirname, "profile-create/step-1.html"),
        "step-1-preview": resolve(__dirname, "profile-create/step-1-preview.html"),
        "step-2": resolve(__dirname, "profile-create/step-2.html"),
        "step-3": resolve(__dirname, "profile-create/step-3.html"),
        "step-4": resolve(__dirname, "profile-create/step-4.html"),
        "step-5": resolve(__dirname, "profile-create/step-5.html"),
        "step-6-1": resolve(__dirname, "profile-create/step-6-1.html"),
        "step-6-2": resolve(__dirname, "profile-create/step-6-2.html"),
        "step-7-1": resolve(__dirname, "profile-create/step-7-1.html"),
        "step-7-2": resolve(__dirname, "profile-create/step-7-2.html"),
        "step-8": resolve(__dirname, "profile-create/step-8.html"),
        "step-9": resolve(__dirname, "profile-create/step-9.html"),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        sortMediaQueries(),
      ],
    },
  },
});
