import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader' 
import { MotionPlugin } from '@vueuse/motion'
import Vue3Autocounter from 'vue3-autocounter';


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(MotionPlugin)
  .component('vue3-autocounter', Vue3Autocounter)
  .mount('#app')
