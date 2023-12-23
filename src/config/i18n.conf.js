import messages from './i18n'
import globalConfig from './global.conf'

import { getQueryParam } from '@/utils/index'
import { setLanguage } from './global.conf';
setLanguage(getQueryParam('lang'))

export default {
  legacy: false,  // set false，use composition API
  messages,
  locale: globalConfig.lang
}