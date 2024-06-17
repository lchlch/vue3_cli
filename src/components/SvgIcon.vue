<template>
  <!-- <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg> -->
  <!-- <img alt="Vue logo" class="logo" :src="`svgs/${props.name}.svg`" v-bind="$attrs" /> -->
  <img
    alt="Vue logo"
    class="logo"
    :src="`svgs/${props.name}.svg`"
    v-bind="$attrs"
    v-if="!isPhone || !isiOS"
  />
  <object
    type="image/svg+xml"
    :data="`/svgs/${props.name}.svg`"
    v-bind="$attrs"
    v-if="isPhone && isiOS"
  ></object>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useIsPhoneStore } from '@/stores/isPhone'

const isPhone = useIsPhoneStore().isPhone
const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})
const imageUrl = ref('')
imageUrl.value = new URL(`@/assets/svgs/${props.name}.svg`, import.meta.url).href

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})
</script>

<style lang="scss">
.svg-icon {
  width: 100%;
  height: 100%;
  fill: currentColor;
  vertical-align: middle;
}
</style>
