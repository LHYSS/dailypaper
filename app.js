import './style.css';
import App from './app/app.vue';
import Vue from 'vue';
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)



// Vue.config.productionTip = false

new Vue({
	el: '#app',
  	components: { App },
  	render: h => h(App)

})

// document.getElementById('app').innerHTML = 'Hello webpack.';
