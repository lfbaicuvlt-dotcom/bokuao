import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 💡 修正点: リポジトリ名を設定
const REPO_NAME = 'bokuao'; 

import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  // 👇 修正点: base パスをリポジトリ名に設定
  base: `/${REPO_NAME}/`, 
  
  plugins: [
    vue(),
  ],
  // 👇 css.postcss.plugins の中で、importした変数をそのまま使用する
  css: {
    postcss: {
      plugins: [
        tailwindcss, // 👈 importした変数をそのまま使う
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})