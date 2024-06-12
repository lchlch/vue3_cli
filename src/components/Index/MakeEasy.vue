<template>
  <div class="contentbg" :class="isPhone ? 'contentbg-phone' : ''">
    <div id="apptest" :class="contentClass">
      <div class="toptitle">Improve efficiency, reduce your workload</div>
      <div
        class="item"
        v-for="item in easys"
        :key="item.id"
        :class="[2, 3].indexOf(item.id) !== -1 ? 'long' : ''"
      >
        <!-- <div class="item-titile">{{ item.title }}</div> -->
        <div class="item-svg">
          <!-- <svg-icon
            :name="item.svgInfo.name"
            :style="`width: ${item.svgInfo.width}rem; height: ${item.svgInfo.height}rem;`"
          >
          </svg-icon> -->
          <img
            :src="item.picInfo.src"
            alt=""
            :style="`height: ${item.picInfo.height}rem;width: ${item.picInfo.width}rem`"
          />
        </div>
        <div class="item-descbutton">
          <div class="item-descbutton_title">{{ item.title }}</div>
          <div class="item-descbutton_desc">{{ item.desc }}</div>
          <div class="item-descbutton_button">
            <!-- <link-button text="Learn more" /> -->
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
// import { ContactButton } from './Contactbutton.vue';
// import { defineProps } from "vue";
// const isPhone = useIsPhone();

const contentClass = computed(() => (isPhone ? 'content content-phone' : 'content'))

const easys = reactive([
  {
    id: 0,
    title: 'Using as a super computer',
    desc: 'Always maintain the simplicity of using complex systems and maximize the WYSIWYG of the operational process.',
    picInfo: {
      src: '/efficiency0.png',
      width: isPhone ? '21.4375' : '33.25',
      height: isPhone ? '' : '26'
    }
  },
  {
    id: 1,
    title: 'Software and hardware collaboration',
    desc: 'We provide the most advanced GPUs and a system platform that maximizes GPU performance.',
    picInfo: {
      src: '/efficiency1.png',
      width: isPhone ? '21.4375' : '33.25',
      height: isPhone ? '' : '26'
    }
  },
  {
    id: 2,
    title: 'Minimize manpower',
    desc: 'From installation to operation, a large number of optimized toolchains have been implemented to achieve over 70% automated monitoring and operation, significantly reducing manpower requirements.',
    picInfo: {
      src: '/efficiency2.png',
      width: isPhone ? '21.4375' : '33.25',
      height: isPhone ? '' : '26'
    }
  },
  {
    id: 3,
    title: 'Keep it Simple and Stupid',
    desc: 'Continuously innovating and abstracting information around complete end-to-end systems of software and hardware, simplifying the threshold for using business platforms on the system.',
    picInfo: {
      src: '/efficiency3.png',
      width: isPhone ? '21.4375' : '33.25',
      height: isPhone ? '' : '26'
    }
  }
])
</script>

<style lang="scss" scoped>
.contentbg {
  width: 100%;
  height: 92.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  .content {
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    .toptitle {
      font-family: Test Feijoa Bold;
      font-size: 2.75rem;
      font-weight: 700;
      line-height: 3.89125rem;
      text-align: center;
      align-self: baseline;
      width: 100%;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      width: 33.25rem;
      height: 38rem;
      align-self: flex-end;
      &-descbutton {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: baseline;
        justify-content: space-between;
        &_title {
          font-family: Test Feijoa Bold;
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 2.625rem;
          text-align: left;
        }
        &_desc {
          font-size: 1.125rem;
          line-height: 2.625rem;
          font-family: Roobert TRIAL;
          font-weight: 400;
        }
        &_button {
          margin-top: 1rem;
        }
      }
    }
    .long {
      height: 43.25rem;
      margin-top: 6.75rem;
    }
  }

  .content-phone {
    .toptitle {
      font-family: Test Feijoa Bold;
      font-size: 2.125rem;
      font-weight: 700;
      line-height: 3rem;
      text-align: left;
      padding: 0 2rem;
    }
    .item {
      height: auto;
      padding: 0 2rem;
      box-sizing: border-box;
      .item-svg {
        margin: 0 -1rem;
      }
      .item-descbutton {
        &_title {
          font-family: Test Feijoa Bold;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 2.625rem;
          text-align: left;
        }
        &_desc {
          font-family: Roobert TRIAL;
          font-size: 0.8125rem;
          font-weight: 500;
          line-height: 1.375rem;
          text-align: left;
        }
      }
    }
  }
}

.contentbg-phone {
  height: auto;
}
</style>
