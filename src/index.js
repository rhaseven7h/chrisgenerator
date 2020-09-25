import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import './index.scss';

import Vue from 'vue';
import App from './views/App.vue';

new Vue({
    render: createElement => createElement(App)
}).$mount('#app');
