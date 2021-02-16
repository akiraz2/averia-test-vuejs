import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './utils/axios';
import VueAxios from 'vue-axios';
import sassStyles from './assets/sass/main.sass';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.directive('loading', function(el, binding) {
    if (binding.value === true) {
        el.style.backgroundColor = '#ccc';
    } else {
        el.style.removeProperty('background-color');
    }
});

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
