// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}" // 👈 Vueのファイルを読み込む設定
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}