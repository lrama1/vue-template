import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/home', component: Home},
  {path: '/page1', component: Page1}
]

const router = new VueRouter({
  routes // short for routes: routes
})

const App1 = Vue.extend(App)
new App1({router}).$mount('#app')
