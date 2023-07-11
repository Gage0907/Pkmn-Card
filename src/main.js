import Vue from 'vue'

import App from './App.vue'
import router from './router'

import PkmnHeader from '../src/components/PkmnHeader.vue'
import CardsGrid from '../src/components/CardsGrid.vue'
import { Icon } from '@iconify/vue2'
import CardPopup from '../src/components/CardPopup.vue'

Vue.component('PkmnHeader', PkmnHeader);
Vue.component('CardsGrid', CardsGrid);
Vue.component('Icon', Icon);
Vue.component('CardPopup', CardPopup);


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
