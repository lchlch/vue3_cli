<template>
  <div class="contentbg-foxon" :id="props.id">
    <div id="apptest" :class="contentClass">
      <div class="toptitle">TurboAI focus on keeping you <span>focus</span></div>
      <div class="bottom">
        <div class="txt" v-for="(item, idx) in ais" :key="idx" @click="() => changeBoxNew(item)">
          <div class="box" :class="isShow(item) ? 'boxactive' : 'boxinactive'" id="focuson">
            <div class="line" :id="`focuson${idx}`"></div>
            <div class="title">
              {{ item.title || 'title' }}
              <svg-icon
                :name="isShow(item) ? 'up' : 'down'"
                :style="`width: 0.875rem; height: 0.5rem;`"
              />
            </div>
            <div class="subtitle">
              <span :class="isShow(item) ? 'subtitleactivate' : 'subtitleinactivate'">
                <!-- eslint-disable-next-line vue/no-parsing-error -->
                {{ item.subtitle || 'subtitle' }}&nbsp &nbsp
              </span>
            </div>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
          <div class="image" :style="`${idx !== item.key ? 'margin-top: 0rem' : ''}`">
            <img
              :src="illspng[idx].src"
              style="transition: height 0.5s ease"
              :style="
                isShow(item)
                  ? `height:${illspng[idx].h}rem; width: ${illspng[idx].w}rem`
                  : `height: 0; width: ${illspng[idx].w}rem`
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsPhoneStore } from '@/stores/isPhone'
import { computed, reactive } from 'vue'

const isPhone = useIsPhoneStore().isPhone

const contentClass = computed(() => (isPhone.value ? 'content content-phone' : 'content'))

const activeArray = reactive([0])
const isShow = computed(() => (item) => {
  return activeArray.indexOf(item.key) !== -1
})
const changeBoxNew = (item) => {
  const index = activeArray.indexOf(item.key)
  if (index !== -1) {
    if (activeArray.length > 1) {
      activeArray.splice(index, 1)
    }
    // activeArray.splice(index, 1)
    // openKeys.delete(item.key);
  } else {
    activeArray.splice(0)
    activeArray.push(item.key)
    goAnchor(`#focuson${item.key}`)
    // goAnchor(`#focuson`)
  }
}
const goAnchor = (selector) => {
  /*参数selector是id选择器（#anchor14）*/
  document.querySelector(selector).scrollIntoView({
    behavior: 'auto',
    block: 'center'
  })
}

// const changeBox = (item) => {
//   // controlledSwiper.value?.slideTo(item, 500);
//   if (activeNum.value === item) {
//     activeNum.value = -1
//   } else {
//     activeNum.value = item
//   }
//   // activeNum.value = item;
// }

const illspng = reactive([
  { src: '/Illustration1.png', w: 343 / 16, h: 208.67 / 16 },
  { src: '/Illustration2.png', w: 343 / 16, h: 207.896 / 16 },
  { src: '/Illustration3.png', w: 343 / 16, h: 236.3 / 16 }
])

const ais = reactive([
  {
    key: 0,
    title: 'AI Model Develop',
    subtitle: 'No infrastructure skills required',
    desc: 'Make user focus on acquisition and governance of training data, development and debugging of high customer value models, modeling and evaluation of model implementation effectiveness.'
  },
  {
    key: 1,
    title: 'AI Model Service',
    subtitle: 'No need to plan resource demand',
    desc: 'Make user focus on the actual application effect of the model, various indicators of the model itself during operation, customer repurchase rate, positive and negative feedback from users, and other customer value indicators.'
  },
  {
    key: 2,
    title: 'AI App Develop',
    subtitle: 'No need to focus on AI capability and non business functions ',
    desc: 'Make user focus on the business itself of application services, how AI can better empower the business, the collaboration between different applications and AI, and the transformation of user value.'
  }
])

// const activeNum = ref(0)

const props = defineProps({
  deriction: {
    type: Number,
    default: 0
  },
  svgInfo: {
    type: Object,
    default: () => {
      return {
        w: 0,
        h: 0,
        name: ''
      }
    }
  }
})

// const orderClass = computed(() => (props.deriction > 0 ? 'order' : ''))
</script>

<style lang="scss" scoped>
.contentbg-foxon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-phone {
    flex-direction: column;
  }
  .content {
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    .toptitle {
      font-family: Test Feijoa Bold;
      font-weight: 700;
      font-size: 2.125rem;
      line-height: 3rem;
      padding: 0 1rem;
      span {
        color: #0057ff;
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      flex-direction: column;
      overflow: hidden;
      .txt {
        display: flex;
        flex-direction: column;
        // width: 22.375rem;
        margin-top: 2rem;

        .box {
          // height: 12.25rem;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 1rem;

          &:hover {
            cursor: pointer;
          }
          .line {
            width: 100%;
            height: 0.125rem;
            background-color: #000;
          }
          .title {
            color: #010101;
            font-family: Inter;
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 750;
            line-height: normal;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.75rem;
          }
          .subtitle {
            font-size: 1rem;
            font-weight: 650;
            font-style: normal;
            box-sizing: border-box;
            word-break: break-all;
            line-height: normal;
            color: #010101;
            font-style: italic;
            margin-top: 0.5rem;
          }
          .subtitleactivate {
            background-color: #fffa86;
          }
          .subtitleinactivate {
            background-color: transparent;
          }
          .desc {
            font-size: 1rem;
            font-weight: 500;
            margin-top: 0.5rem;
            color: #010101;
            line-height: 1.375rem;
          }
        }
        .image {
          object-fit: contain;
          margin-top: 1.5rem;
        }
        .boxactive {
          opacity: 100%;
        }
        .boxinactive {
          opacity: 50%;
        }
      }
    }
    .top {
      display: flex;
      width: 100%;
      flex: 1;
      justify-content: center;
      align-items: center;
      .img {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        .swiper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            object-fit: contain;
          }
        }
      }
    }

    .order {
      order: -1;
    }
  }
}
</style>
