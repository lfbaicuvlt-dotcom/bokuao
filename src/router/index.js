// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TicketView from '../views/TicketView.vue'
// MyPageViewは後で作成する前提で、一旦ダミーで定義します
import MyPageView from '../views/MyPageView.vue' 

const router = createRouter({
  history: createWebHistory('/bokuao/'), // 👈 リポジトリ名に置き換え
  routes: [
    {
      path: '/', // ルートパス (アプリ起動時のデフォルト)
      name: 'home',
      component: HomeView
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: TicketView
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPageView
    }
  ]
})

export default router