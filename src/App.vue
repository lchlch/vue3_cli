<script setup>
import { RouterView } from 'vue-router'
import { elementConfig } from '@/config/element-plus.conf'
import { useRoute } from 'vue-router'
import { ref, reactive } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { ElLoading } from 'element-plus'
import { useIsPhoneStore } from './stores/isPhone'
// import HelloWorld from './components/HelloWorld.vue

const isPhone = ref(false)
const windowWidth = ref('')

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const route = useRoute()
const locale = reactive({ lang: zhCn })

if (route.query.lang !== 'fr') {
  locale.lang = en
}

const { width } = useWindowSize()
windowWidth.value = width
if (width.value < 1172 && width.value > 768) {
  document.documentElement.style.fontSize = (16 * width.value) / 1440 + 'px'
}
if (width.value < 768) {
  document.documentElement.style.fontSize = (16 * width.value) / 375 + 'px'
}

const isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  // const { width } = useWindowSize()
  return !!flag
  // return false;
}
const myIsPhone = useIsPhoneStore()
const startRender = ref(false)
const loading = ElLoading.service({
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)',
  fullscreen: true
})
isPhone.value = isMobile()
myIsPhone.setIsPhone(isPhone.value)
startRender.value = true

loading.close()

window.onresize = () => {
  return (() => {
    isPhone.value = isMobile()
    myIsPhone.setIsPhone(isPhone.value)
    if (isPhone.value) {
      document.body.style.setProperty('--main-width', '23.4375rem')
    } else {
      document.body.style.setProperty('--main-width', '73.25rem')
    }
  })()
}
if (isPhone.value) {
  document.body.style.setProperty('--main-width', '23.4375rem')
} else {
  document.body.style.setProperty('--main-width', '73.25rem')
}
</script>

<template>
  <el-config-provider
    :size="elementConfig.size"
    :z-index="elementConfig.zIndex"
    :locale="elementConfig.locale"
  >
    <!-- <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header> -->

    <RouterView />
  </el-config-provider>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
