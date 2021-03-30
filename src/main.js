import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import VueEditor from 'vue2-editor'

import 'element-ui/lib/theme-chalk/index.css'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
Vue.use(VueEditor)

const messages = {
  'en-US': {
    header: {
      title: 'FormMaking'
    }
  },
  'zh-CN': {
    header: {
      title: '表单设计器'
    }
  }
}

Vue.locale('en-US', {...enLocale, ...messages['en-US']})
Vue.locale('zh-CN', {...zhLocale, ...messages['zh-CN']})
Vue.config.lang = 'zh-CN'

Vue.use(ElementUI, { size: 'small' })

// import 'form-making/dist/FormMaking.css'
// import FormMaking from 'form-making'
import FormMaking from './index'
Vue.use(FormMaking)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
