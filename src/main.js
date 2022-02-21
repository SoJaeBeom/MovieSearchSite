import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js' // index.js파일을 참조하는 거라면 생략 가능하다.
import store from './store/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // .use() : Vue.js에 연결할 플러그인, 라이브러리를 지정하는 용도로 사용... $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app')