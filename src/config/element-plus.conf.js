import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import globalConfig from './global.conf'
import { reactive } from 'vue'

import { getQueryParam } from '@/utils/index'
import { setLanguage } from './global.conf';
setLanguage(getQueryParam('lang'))

const lang = {
  zhCn,
  en,
}

export const elementConfig = reactive({
  size: 'small',
  zIndex: 3000,
  locale: lang[globalConfig.lang]
})
