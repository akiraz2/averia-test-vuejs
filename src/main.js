import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './utils/axios';
import VueAxios from 'vue-axios';
import sassStyles from './assets/sass/main.sass';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
