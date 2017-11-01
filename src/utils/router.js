import VueRouter from 'vue-router'
import fdStart from '../components/fd-start.vue'
import fdSituations from '../components/fd-situations.vue'
import fdAdd from '../components/fd-add.vue'

export default new VueRouter({
  routes: [
  	  { path: '/', redirect: '/start' },
  	  { path: '/start', component: fdStart },
  	  { path: '/add', component: fdAdd },
  	  { path: '/situations', component: fdSituations },
	]
});