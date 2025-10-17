<template>
  <main class="content-area">
    <RouterView /> 
  </main>

  <footer class="fixed-nav">
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/ticket">TICKET</RouterLink>
    <RouterLink to="/mypage">MY PAGE</RouterLink>
  </footer>

  </template>

<style>
/* CSSで固定配置を定義 (通常のCSSを使用) */
.content-area {
  padding-bottom: 60px; /* ナビゲーションバーの高さ分を空ける */
  overflow-y: auto;    /* スクロール可能にする */
  height: calc(100vh - 60px); /* 画面全体の高さからナビゲーション分を引く */
}

.fixed-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px; /* ナビゲーションバーの高さ */
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* スクリーンショットの青色に合わせて調整 */
  border-top: 1px solid #ccc; 
}
</style>