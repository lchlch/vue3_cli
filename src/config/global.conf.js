const globalConfig = {
  // default chinese
  lang: 'zhCn'
}

// set language of the web 
/**
 * 
 * @param {*} lang language of current web
 * @returns 
 */
export const setLanguage = (lang) => {
  if(!lang) return;
  console.log('globale.conf.js lang: ', lang)
  globalConfig.lang = lang
}

export default globalConfig;