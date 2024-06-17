<script setup>
import AppHeader from '@/components/AppHeader.vue'
import IndexSloganPage from '@/components/Index/SloganPage.vue'
import IndexFocusOn from '@/components/Index/FocusOn.vue'
import IndexFocusOnPhone from '@/components/Index/FocusOnPhone.vue'
import IndexProducts from '@/components/Index/Products/Index.vue'
import IndexProductsPhone from '@/components/Index/ProductsPhone/Index.vue'
import IndexFooter from '@/components/Index/Footer.vue'
import IndexCode from '@/components/Index/Code/Index.vue'
import IndexCodePhone from '@/components/Index/CodePhone/Index.vue'
import IndexMakeEasy from '@/components/Index/MakeEasy.vue'
import IndexSaveWhat from '@/components/Index/SaveWhat.vue'

import { useIsPhoneStore } from '@/stores/isPhone'

const myIsPhone = useIsPhoneStore()

const isPhone = myIsPhone.isPhone
</script>

<template>
  <div class="main">
    <app-header :isPhone="isPhone"></app-header>
    <index-slogan-page></index-slogan-page>
    <svg-icon name="split" v-if="!isPhone" style="width: 100%; height: 16.375rem"> </svg-icon>
    <svg-icon v-if="isPhone" name="splitphone" style="width: 100%; height: 4rem"> </svg-icon>

    <index-focus-on v-if="!isPhone"></index-focus-on>
    <index-focus-on-phone v-if="isPhone"></index-focus-on-phone>

    <svg-icon id="productsId" name="split" v-if="!isPhone" style="width: 100%; height: 16.375rem"> </svg-icon>
    <svg-icon id="productsId" v-if="isPhone" name="splitphone" style="width: 100%; height: 4rem"> </svg-icon>

    <!-- <svg-icon
      name="split"
      style="width: 100%; height: 16.375rem"
      :style="isPhone ? ' height: 4rem' : ''"
      
    >
    </svg-icon> -->

    <index-products v-if="!isPhone"></index-products>
    <index-products-phone v-if="isPhone"></index-products-phone>

    <index-code v-if="!isPhone"></index-code>
    <index-code-phone v-if="isPhone"></index-code-phone>

    <index-make-easy></index-make-easy>
    <svg-icon name="split" v-if="!isPhone" style="width: 100%; height: 16.375rem"> </svg-icon>
    <svg-icon v-if="isPhone" name="splitphone" style="width: 100%; height: 4rem"> </svg-icon>

    <index-save-what></index-save-what>
    <index-footer></index-footer>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
}
</style>
