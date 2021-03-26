import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
// 引入element主题文件
// import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义样式
import './styles/index.scss'

// 将element注册给vue插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
