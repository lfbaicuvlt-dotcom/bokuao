// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // 👈 必ずこの新しい記述になっていること
    autoprefixer: {},
  },
}