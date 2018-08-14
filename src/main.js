
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'      //  引入 mint-ui
import 'mint-ui/lib/style.css'    //  引入 mint-ui 样式

import 'assets/style.css'     //  引入初始样式
import 'assets/css/reset.css'     //  引入初始样式
import 'assets/css/login.css'     //  引入初始样式
import 'assets/css/style0.css'     //  引入初始样式
import 'assets/css/style1.css'     //  引入初始样式
import 'assets/css/style2.css'     //  引入初始样式
import 'assets/css/style3.css'     //  引入初始样式
import 'assets/css/style4.css'     //  引入初始样式
import 'assets/css/style5.css'     //  引入初始样式
import 'assets/css/style6.css'     //  引入初始样式
import 'assets/css/style7.css'     //  引入初始样式
import 'assets/css/style8.css'     //  引入初始样式
import 'assets/css/style9.css'     //  引入初始样式

import App from './App'
import router from './router'

//过滤器
import * as filters from './api/filter.js'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
