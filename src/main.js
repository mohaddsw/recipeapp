import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.use(mdiVue, {
  icons: mdijs,
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
