<template>
  <el-affix style="height: 5.25rem; width: 100%" @change="affixChange">
    <div class="app-header" :class="`${isFixed ? 'fixed' : ''}`">
      <div class="app-header-content" :class="`${props.isPhone ? 'phonecontent' : ''}`">
        <div class="app-header-content__logo" @click="goAnchor('#sloganId')">
          <!-- <img src="~/assets/pics/logo.png" alt="" class="src" /> -->
          <!-- <svg-icon name="Logo" style="width: 7rem; height: 1.5774rem"> </svg-icon> -->
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/svgs/Logo.svg"
            style="width: 7rem; height: 1.5774rem"
          />
        </div>

        <div class="app-header-content__menu" v-if="!props.isPhone">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            background-color="transparent"
            active-text-color="#007bff"
            text-color="#000"
            @select="handleSelect"
            style="height: 2.6875rem; padding-top: 0.3rem"
            :ellipsis="false"
          >
            <el-menu-item index="products">{{ $t('header.menus.products') }}</el-menu-item>
            <!-- <el-menu-item index="solutions">{{
              $t("header.menus.solutions")
            }}</el-menu-item> -->
            <el-menu-item index="customers">{{ $t('header.menus.customers') }}</el-menu-item>
            <el-menu-item index="pricing">
              <a :href="`mailto:${emails.name1}?subject=about price`">
                {{ $t('header.menus.pricing') }}
              </a>
            </el-menu-item>
          </el-menu>
          <a :href="`mailto:${emails.name1}?subject=contact us`">
            <div class="contact-button" v-if="!props.isPhone">
              {{ $t('header.contactBtn') }}
              <!-- <el-icon :size="20" style="margin: 0 0 0 5px"> <Right /></el-icon> -->
              <svg-icon
                name="arrow-white"
                style="width: 1.125rem; height: 1rem; margin-left: 0.3125rem"
              >
              </svg-icon>
            </div>
          </a>
        </div>
        <div @click="openMenu" v-if="props.isPhone">
          <svg-icon name="menu" style="width: 2rem; height: 1.625rem"> </svg-icon>
        </div>
      </div>
    </div>
  </el-affix>
  <div class="privatedrawer">
    <el-drawer
      v-model="drawer"
      direction="ttb"
      show-close
      :with-header="false"
      :modal-class="mydrawer"
      size="15rem"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        background-color="transparent"
        active-text-color="#545c64"
        text-color="#ccc"
        @select="handleSelect"
      >
        <el-menu-item index="products">Products</el-menu-item>
        <el-menu-item index="3"
          ><a :href="`mailto:${emails.name1}?subject=about price`" style="width: 100%"
            >Pricing</a
          ></el-menu-item
        >
      </el-menu>
      <a :href="`mailto:${emails.name1}?subject=contact us`" style="width: 100%"
        ><el-button
          @click="handleContactClick"
          style="
            width: 100%;
            height: 2.5rem;
            /* margin-left: 1rem; */
            background-color: #0057ff;
            color: #fff;
            margin-top: 2rem;
            font-size: 1.25rem;
          "
          >contact us</el-button
        ></a
      ><br />
      <!-- <el-button style="width: 300px; margin: 20px 0 0 20px">login</el-button> -->
    </el-drawer>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, watchEffect, ref } from 'vue'
// import { Menu, Close, Right } from "@element-plus/icons-vue";

import { useEmails } from '@/stores/emails'
const emails = useEmails().emails

function sendEmail(to, subject, body) {
  var link =
    'mailto:' +
    encodeURIComponent(to) +
    '?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body)

  window.location.href = link
}

const isFixed = ref(false)

const mydrawer = ref('mydrawer')

const props = defineProps({
  isPhone: {
    type: Boolean,
    default: false
  }
})

// if (props.isPhone) {
//   const theme = "red";
//   document.body.style.setProperty("--main-width", theme);
// }

const affixChange = (value) => {
  isFixed.value = value
}

// const menuWidthStyle = computed(() => (props.isPhone ? "width: 0px" : ""));

// const data = reactive({});
const activeIndex = ref('1')
// const scrollTop = ref(0);
const handleSelect = (key) => {
  if (key === 'pricing' && props.isPhone) {
    sendEmail('emails.name1', 'about price', 'about price')
  }
  drawer.value = false
  goAnchor(`#${key}Id`)
}

const drawer = ref(false)
const openMenu = () => {
  drawer.value = !drawer.value
}

const handleContactClick = () => {
  sendEmail('emails.name1', 'contact', 'contact')
  drawer.value = false
}

//锚点跳转
const goAnchor = (selector) => {
  /*参数selector是id选择器（#anchor14）*/
  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

// const onScroll = (e) => {
//   console.log(e);
//   scrollTop.value = e.scrollTop;
// };
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})

onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})

watchEffect(() => {})
</script>
<style lang="scss" scoped>
@import '@/assets/common.scss';

:deep(.el-menu--horizontal.el-menu) {
  border-bottom: solid 0px var(--el-menu-border-color);
}
:deep(.el-menu) {
  border-right: solid 0px var(--el-menu-border-color);
}

:deep(.el-menu--horizontal > .el-menu-item.is-active) {
  color: #000 !important;
}

:deep(.el-menu--horizontal > .el-menu-item) {
  font-size: 0.875rem;
  border-bottom: 0;
}
:deep(.el-sub-menu__title) {
  padding: 0 0;
}
:deep(.el-menu-item:hover) {
  background-color: transparent !important;
}
:deep(.el-menu-item) {
  background-color: transparent !important;
  padding: 0 1.25rem;
}

.white {
  background-color: rgba($color: #fff, $alpha: 0.8);
}

.normal {
  background-color: $color-background;
}

.privatedrawernormal {
  .mydrawer {
    color: red;
    top: 100px;
    .el-drawer {
      background-color: $color-background;
    }
    .el-menu {
      border-right: solid 0px var(--el-menu-border-color);
    }
  }
}

.privatedrawerwhite {
  .mydrawer {
    color: red;
    top: 100px;
    .el-drawer {
      background-color: rgba($color: #fff, $alpha: 0.8);
    }
    .el-menu {
      border-right: solid 0px var(--el-menu-border-color);
    }
  }
}

// .el-drawer
// :deep(.el-overlay) {
//   background-color: rgba($color: #000000, $alpha: 0.4);
// }

.app-header {
  color: #000;
  height: 5.25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #f9f9f6, $alpha: 0.9);
  // $theme: var(--main-width);
  // background: #{$theme};
  .phonecontent {
    padding: 0 2rem;
  }

  &-content {
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    height: 2.6875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      width: 7rem;
      height: 1.57744rem;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
        width: 100%;
      }
      &:hover {
        cursor: pointer;
      }
    }
    &__menu {
      flex: 1;
      height: 2.6875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 0 1.875rem;
      .el-menu-demo {
        flex: 1;
      }
      .contact-button {
        height: 2.6875rem;
        width: 9.9375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        background: #0057ff;
        color: #fff;
        font-family: Roobert TRIAL;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 600;

        &:hover {
          background-color: #002bff;
          cursor: pointer;
        }
      }
    }
  }
}

.fixed {
  box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.1);
}
</style>
