/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// impor componen
import Index from './components/Index.vue';
import Create from './components/Create.vue';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const routes = [
    { path: '/', component: Index },
    { path: '/create', component: Create }
  ]

  const router = new VueRouter({
    routes // short for `routes: routes`
  })
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });

const app = new Vue({
    router
  }).$mount('#app')
