<template>
  <div class="core" :class="isPhone ? 'corephone' : ''">
    <div class="content">
      <div class="ethernet">
        <pic-text key="ethernet" v-bind="ethernet" style="height: 100%; width: 100%"></pic-text>
      </div>
      <div class="box-wrapper" id="apptest">
        <div class="box" v-for="item in saves" :key="item.id">
          <div class="percentage">
            {{ item.percentage }}
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>ƒ

<script setup>
import { useIsPhoneStore } from '@/stores/isPhone'
import { reactive } from 'vue'

const isPhone = useIsPhoneStore().isPhone
// const isPhone = useIsPhone();
const saves = reactive([
  {
    id: 1,
    percentage: '70%',
    title: 'Save Money',
    desc: isPhone ? 'Network equipment costs -70%' : 'Network equipment costs reduced by 70%'
  },
  {
    id: 2,
    percentage: '80%',
    title: 'Utilization',
    desc: isPhone
      ? 'Overall bandwidth utilization +80%'
      : 'Overall bandwidth utilization increased by 80%'
  },
  {
    id: 3,
    percentage: '90%',
    title: 'Save Time',
    desc: '60% in operation and maintenance efficiency'
  },
  {
    id: 4,
    percentage: '0',
    title: 'Zero lose',
    desc: isPhone
      ? 'Zero loss in virtual multi tenant scenarios'
      : 'High performance and zero loss in virtual multi tenant scenarios'
  }
])
const ethernet = reactive({
  title: 'Embrace Ethernet in every field',
  id: 0,
  subtitle:
    'We have gradually integrated computing, storage, and data into one Ethernet, greatly simplifying the network architecture and improving network utilization.',
  picInfo: {
    name: '/Ethernet.png',
    w: isPhone ? 343 / 16 : 539 / 16,
    h: isPhone ? 291 / 16 : 458 / 16
  },
  deriction: 0,
  leftStyle: isPhone ? '' : 'padding: 3.875rem 8.75rem 7.875rem 0rem',
  rightStyle: '',
  buttonText: 'Learn more '
})
</script>

<style lang="scss" scoped>
.core {
  width: 100%;
  height: 48.75rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    .ethernet {
      display: flex;
      flex: 1;
      width: 100%;
    }

    .box-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 16.125rem;
      text-align: center;
      justify-content: space-between;
      font-family: Test Feijoa Bold;

      .box {
        width: 17rem;
        height: 16.125rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        font-family: Roobert TRIAL;

        .percentage {
          font-family: Roobert TRIAL;
          line-height: 6.32rem;

          font-size: 5rem;
          font-weight: 750;
          color: #0057ff;
        }

        .title {
          font-size: 2rem;
          font-weight: 700;
          color: #000;
          font-family: Test Feijoa Bold;
        }

        .desc {
          font-size: 1.125rem;
          color: #000;
          line-height: 2rem;
          font-weight: 500;
        }
      }
    }
  }
}

.corephone {
  height: auto;
  .content {
    height: auto;
    .box-wrapper {
      height: auto;
      flex-wrap: wrap;
      height: auto;
      padding: 0 2rem;
      box-sizing: border-box;
      .box {
        width: 8.6875rem;
        height: 10.9375rem;
        margin-top: 2rem;

        .percentage {
          font-family: Roobert TRIAL Bold;
          font-size: 4rem;
          font-weight: 750;
          line-height: 80.9px;
          text-align: left;
          color: #0057ff;
          width: 100%;
        }
        .title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #000;
          width: 100%;
          font-family: Test Feijoa Bold;
          text-align: left;
        }
        .desc {
          font-family: Roobert TRIAL Medium;
          font-size: 0.8125rem;
          font-weight: 500;
          line-height: 1.375rem;
          text-align: left;
        }
      }
    }
  }
}
</style>
