// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
// 引入全局配置
import global from '@/utils/global'
// 引入 element-ui css
import('element-ui/lib/theme-chalk/index.css')
// 引入 font-awesome 第三方图标字体库
import('font-awesome/css/font-awesome.css')
Vue.config.productionTip = false
// 注册使用 Element-UI
Vue.use(ElementUI)
// 挂载全局配置模块
Vue.prototype.global = global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
