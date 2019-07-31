import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './request'
import './styles/index.less'

import {
  Menu,
  Icon,
  Layout,
  Table,
  Input,
  Button,
  Dropdown,
  Card,
  Select,
} from 'ant-design-vue'

Vue.use(Menu)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(Table)
Vue.use(Input)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(Card)
Vue.use(Select)

Vue.config.productionTip = false

Vue.prototype.$axios = service

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
