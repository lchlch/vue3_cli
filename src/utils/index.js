/**
 * 获取 url 参数
 *
 * @param {string} name name
 * @param {string} urls urls
 * @returns {*} value
 */
export const getQueryParam = (name, urls) => {
  const { hash, search } = window.location;
  const url = urls || hash || search;
  const index = url.indexOf('?');
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const result = decodeURIComponent(url)
    .substr(index + 1)
    .match(reg);
  return result === null ? result : result[2];
};

export const getAssetsFile = (url) => {
  return new URL(`@/assets/pics/${url}`, import.meta.url).href;
};
