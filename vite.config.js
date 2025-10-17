// vite.config.js

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa' // 💡 PWAプラグインをインポート

const REPO_NAME = 'bokuao'; 

import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: `/${REPO_NAME}/`, 
  
  plugins: [
    vue(),
    
    // 💡 PWAプラグインの設定を追加 (マニフェストとサービスワーカーの設定)
    VitePWA({
      registerType: 'autoUpdate', // サービスワーカーの自動更新
      includeAssets: ['favicon.ico', 'images/boku-ao-logo.png'], // キャッシュするアセット
      manifest: {
        name: '僕が見たかった青空', // 💡 アプリ名
        short_name: '僕が見たかった青空',      // 💡 ホーム画面のアイコン名
        description: '僕が見たかった青空公式アプリです。',
        theme_color: '#92bce8',    // 💡 テーマカラー（アドレスバーの色）
        background_color: '#ffffff',
        display: 'standalone',     // 💡 ブラウザUIを非表示にする
        icons: [
          // 💡 PWAで必要なアイコンサイズを定義
          {
            src: 'images/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'images/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable' // マスク可能なアイコン (Android用)
          }
        ]
      }
    })
  ],
  // ... (その他の設定は維持)
});