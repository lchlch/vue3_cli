<template>
  <div class="contentbg" :id="props.id">
    <div id="apptest" :class="contentClass">
      <div class="toptitle">TurboAI focuses on keeping you <span>focused</span></div>
      <div :class="`top ${orderClass}`">
        <div class="img">
          <swiper
            class="swiper"
            :loop="true"
            :modules="modules"
            :looped-slides="3"
            :effect="'fade'"
            :speed="1000"
            :slides-per-view="1"
            @slideChange="onSlideChange"
            @swiper="setControlledSwiper"
            :controller="{ control: controlledSwiper }"
            ref="swiperRef"
            :allow-touch-move="false"
          >
            <swiper-slide v-for="(item, idx) in illspng" :key="idx">
              <img :src="item.src" :style="`width: ${item.w}rem; height: ${item.h}rem;`" alt="" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="bottom">
        <div class="txt" v-for="(item, idx) in ais" :key="idx" @click="() => changeBox(idx)">
          <div class="line" :class="idx === activeNum ? 'activeline' : 'inactiveline'"></div>
          <div class="box" :class="idx === activeNum ? 'boxactive' : 'boxinactive'">
            <div class="title">{{ item.title || 'title' }}</div>
            <div class="subtitle">
              <span :class="idx === activeNum ? 'subtitleactivate' : 'subtitleinactivate'">
                <!-- eslint-disable-next-line vue/no-parsing-error -->
                {{ item.subtitle || 'subtitle' }} &nbsp &nbsp</span
              >
            </div>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
// 引入swiper组件
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, Controller } from 'swiper/modules'
const modules = [Autoplay, Pagination, Navigation, Controller] //Autoplay 自动播放  Pagination 分页
import { ref, computed, reactive } from 'vue'
import { useIsPhoneStore } from '@/stores/isPhone'

const isPhone = useIsPhoneStore().isPhone

// const isPhone = myIsPhone.isPhone

const onSlideChange = (swiper) => {
  // swiper是当前轮播的对象，里面可以获取到当前swiper的所有信息，当前索引是activeIndex
  activeNum.value = swiper.activeIndex
}

const controlledSwiper = ref()

const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper
}

// const isPhone = useIsPhone();

const contentClass = computed(() => (isPhone ? 'content content-phone' : 'content'))

const changeBox = (item) => {
  controlledSwiper.value?.slideTo(item, 500)
  activeNum.value = item
}

const illspng = reactive([
  { src: '/Illustration1.png', w: (1172 / 16) * 0.6, h: (713 / 16) * 0.6 },
  { src: '/Illustration2.png', w: (1110.24 / 16) * 0.6, h: (672.93 / 16) * 0.6 },
  { src: '/Illustration3.png', w: (927 / 16) * 0.6, h: (638 / 16) * 0.6 }
])

const ais = reactive([
  {
    title: 'AI Model Development',
    subtitle: 'No infrastructure skills are required',
    desc: 'Ensure the user focuses on acquiring and governing training data, developing and debugging high-value customer models, and modeling and evaluating of effectiveness of model implementations.'
  },
  {
    title: 'AI Model Service',
    subtitle: 'No need to plan resource demand',
    desc: 'Encourage the user to focus on the practical impact of the model, assess various indicators of the model itself during operation, monitor customer repurchase rates, gather both positive and negative user feedback, and consider other customer value metrics.'
  },
  {
    title: 'AI App Development',
    subtitle: 'No need to focus on AI capability and non-business functions ',
    desc: 'Encourage the user to focus on the core business aspects of application services, how AI can better empower the business capabilities, the synergy between various applications and AI, and the enhancement of user value through transformation.'
  }
])

const activeNum = ref(0)

const props = defineProps({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // subtitle: {
  //   type: String,
  //   required: true,
  // },
  // desc: {
  //   type: String,
  //   required: true,
  // },
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

const orderClass = computed(() => (props.deriction > 0 ? 'order' : ''))
</script>

<style lang="scss" scoped>
:deep(.swiper-slide-active) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contentbg {
  width: 100%;
  height: 52rem;
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
    .toptitle {
      font-family: Test Feijoa Bold;
      font-weight: 700;
      font-size: 3rem;
      line-height: 4.245rem;
      span {
        color: #0057ff;
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      width: 100%;
      height: 14.6875rem;
      justify-content: space-between;
      overflow: hidden;
      .txt {
        display: flex;
        flex-direction: column;
        width: 22.375rem;
        height: 100%;

        .line {
          width: 120%;
          height: 0.125rem;
          background-color: #000;
        }

        .inactiveline {
          height: 0.375rem;
          width: 150%;
          margin-left: -20%;
          background: linear-gradient(
            to top,
            transparent 0%,
            transparent 30%,
            #000 31%,
            #000 60%,
            transparent 71%,
            transparent 100%
          ) !important;
        }

        .activeline {
          width: 100%;
          height: 0.375rem;
        }

        .box {
          height: 13.125rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          &:hover {
            cursor: pointer;
          }
          .title {
            color: #010101;
            font-family: Inter;
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 750;
            line-height: normal;
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
            color: #010101;
            line-height: 1.375rem;
          }
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
