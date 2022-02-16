import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
  // Hash, History모드
  // Hash 모드 -> https://google.com/#/search
  history: createWebHashHistory(),
  // pages 구분
  // https://google.com/ -> main page 접근
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})