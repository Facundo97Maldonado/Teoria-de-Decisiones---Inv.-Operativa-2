import VueRouter from 'vue-router'
import fdStart from '../components/fd-start.vue'
import fdSituations from '../components/fd-situations.vue'
import fdAdd from '../components/fd-add.vue'
import fdAbout from '../components/fd-about.vue'
import fdOneSituation from '../components/fd-oneSituation.vue'

export default new VueRouter({
  routes: [
  	  { path: '/', redirect: '/start' },
  	  { path: '/start', component: fdStart },
  	  { path: '/add', component: fdAdd },
  	  { path: '/situations', component: fdSituations },
  	  { path: '/about', component: fdAbout },
  	  { path: '/situation/:id', component: fdOneSituation, name: 'oneSituation'}
	]
});