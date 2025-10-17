<template>
  <div class="webview-container">
    <iframe :src="externalUrl" frameborder="0" class="external-iframe"></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 外部サイトのURLを定義
const externalUrl = ref('https://bokuao.com/'); 
</script>

<style scoped>
/* コンテナが親要素の高さ全体を使うように設定 */
.webview-container {
    width: 100%;
    /* App.vue の content-area が高さを定義しているので、その100%を使わせる */
    height: 100%; 
    overflow: hidden; /* iframeのスクロールバーを非表示にするため */
}

.external-iframe {
    width: 100%;
    height: 100%;
    /* ボーダーをなくし、違和感をなくす */
    border: none; 
}
</style>