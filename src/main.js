import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/home.vue"
import Page from "./components/pageForward01.vue"

const routes = [
  {path : '/home', component: Home},
  {path : '/page', component: Page}
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
