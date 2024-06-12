<template>
  <div class="mycontentbg" :id="props.id">
    <div id="apptest" :class="contentClass">
      <div class="left" :style="`${props.leftStyle};order: ${isPhone ? '100' : ''}`">
        <div class="txt">
          <div class="title" :class="isPhone ? 'phonetitle' : ''">
            {{ props.title || 'title' }}
          </div>
          <div class="subtitle" :class="isPhone ? 'phonesubtitle' : ''">
            {{ props.subtitle || 'subtitle' }}
          </div>
          <!-- <div class="desc">
            <contact-button :buttonText="props.buttonText"></contact-button>
          </div> -->
        </div>
      </div>
      <div :class="`right ${orderClass}`" :style="props.rightStyle">
        <div class="img">
          <svg-icon
            v-if="props?.svgInfo?.name"
            :name="props?.svgInfo?.name"
            :style="`width: ${props.svgInfo.w}rem; height: ${props.svgInfo.h}rem;`"
          >
          </svg-icon>
          <img
            v-if="props?.picInfo?.name"
            :src="props?.picInfo?.name"
            :style="`width: ${props.picInfo.w}rem; height: ${props.picInfo.h}rem;`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ContactButton } from './Contactbutton.vue';
import { computed } from 'vue'
import { useIsPhoneStore } from '@/stores/isPhone'

const myIsPhone = useIsPhoneStore()

const isPhone = myIsPhone.isPhone

const contentClass = computed(() =>
  // isPhone.value ? "content pic-content-phone" : "content"
  isPhone ? 'pic-content pic-content-phone' : 'pic-content'
)

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  // desc: {
  //   type: String,
  //   required: true
  // },
  deriction: {
    type: Number,
    default: 0
  },
  rightStyle: {
    type: String,
    default: ''
  },
  leftStyle: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: ''
  },
  // isPhone: {
  //   type: Boolean,
  //   default: false,
  // },
  svgInfo: {
    type: Object,
    default: () => {
      return {
        w: 0,
        h: 0,
        name: ''
      }
    }
  },
  picInfo: {
    type: Object,
    default: () => {
      return {
        w: 0,
        h: 0,
        name: '/Illustration_Pie.png'
      }
    }
  }
})

const orderClass = computed(() => (props.deriction == 0 || isPhone.value ? '' : 'order'))
</script>

<style lang="scss" scoped>
.mycontentbg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .pic-content-phone {
    flex-direction: column;
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    height: 100%;
    display: flex;
    padding: 0 1rem;
    .left {
      padding: 0 1rem;
      margin-top: 2rem;
      .txt {
        .title {
          font-size: 2.125rem !important;
          line-height: 3rem !important;
        }
        .subtitle {
          margin-top: 1.5rem !important;
        }
      }
    }
  }
  .pic-content {
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    height: 100%;
    display: flex;

    .left {
      display: flex;
      align-items: center;

      .txt {
        color: #fff;
        display: flex;
        flex-direction: column;
        .title {
          color: #000000;
          font-family: Test Feijoa Bold;
          font-size: 2.75rem;
          font-style: normal;
          font-weight: 700;
          line-height: 3.89rem;
        }
        .subtitle {
          font-size: 1.125rem;
          font-weight: 500;
          color: #000;
          font-style: normal;
          box-sizing: border-box;
          margin-top: 1.9375rem;
          line-height: 2rem;
          font-family: Roobert TRIAL;
        }
        .desc {
          font-size: 1rem;
          font-weight: 400;
          color: #333;
          margin-top: 3.375rem;
        }
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .order {
      order: -1;
    }
  }
}
</style>
