<template>
  <div class="myproducts-phone">
    <div class="myproducts-phone-content">
      <div class="left">
        <div class="txt" id="apptest">
          <div class="toptitle">We offer products to maximize your <span>productivity</span></div>
          <div class="allproducts">
            <div
              class="proditem"
              :class="`${isShow(item) ? 'active' : 'inactive'}`"
              v-for="item in products"
              :key="item.key"
              @click="() => changeBoxNew(item)"
            >
              <div class="line"></div>
              <div class="title">
                <div>
                  <svg-icon
                    :name="`product${item.key + 1}`"
                    style="width: 1.5625rem; height: 1.4218rem; margin-right: 0.75rem"
                  >
                  </svg-icon
                  >{{ item.name }}
                </div>
                <svg-icon
                  :name="isShow(item) ? 'up' : 'down'"
                  :style="`width: 0.875rem; height: 0.5rem;`"
                />
              </div>
              <div class="desc">{{ item.desc }}</div>
              <div class="infos" id="apptest" :key="activeNames.value">
                <div class="infosAni" v-if="isShow(item)">
                  <div v-if="item.key === 0">
                    <info-item
                      v-for="(item, key) in infos"
                      :title="`${infoTitle}.${key}.name`"
                      :infos="getInfos(item, key)"
                      class="infos-item"
                      :key="key"
                    ></info-item>
                  </div>

                  <svg-icon
                    v-if="item.key !== 0"
                    :name="productsInfos[item.key].svgInfo.name"
                    :style="`width: ${productsInfos[item.key].svgInfo.w}rem; height: ${
                      productsInfos[item.key].svgInfo.h
                    }rem`"
                  >
                  </svg-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pic-text
      key="boat"
      v-bind="makeefficiency"
      :style="`margin-top: ${isPhone ? '2' : '6'}rem;
        height: ${isPhone ? '' : '38.875'}rem;
        width: ${isPhone ? '23.4375rem' : '73.25'}rem`"
      :isPhone="isPhone"
    ></pic-text>
  </div>
</template>

<script setup>
import InfoItem from './InfoItem.vue'
import { useIsPhoneStore } from '@/stores/isPhone'
import { computed, reactive, ref } from 'vue'

const isPhone = useIsPhoneStore().isPhone

const activeArray = reactive([0])
const isShow = computed(() => (item) => {
  return activeArray.indexOf(item.key) !== -1
})
const changeBoxNew = (item) => {
  const index = activeArray.indexOf(item.key)
  if (index !== -1) {
    activeArray.splice(index, 1)
    // openKeys.delete(item.key);
  } else {
    activeArray.push(item.key)
  }
}

const activeItem = ref(0)

// const contentClass = computed(() =>
//   isPhone.value ? "content content-phone" : "content"
// );

const infoTitle = computed(() => `index.products.${activeNames.value}`)

const infos = computed(() => productsInfos[activeItem.value])

const getInfos = (info, outerKey) => {
  const infoArray = []
  Object.keys(info).forEach((key) => {
    if (key !== 'name') {
      infoArray.push({
        subtitle: `index.products.${activeNames.value}.${outerKey}.${key}.name`,
        desc: `index.products.${activeNames.value}.${outerKey}.${key}.desc`
      })
    }
  })
  return infoArray
}

// const props = defineProps({
//   title: {
//     type: String,
//     required: true
//   },
//   subtitle: {
//     type: String,
//     required: true
//   },
//   desc: {
//     type: String,
//     required: true
//   },
//   picSrc: {
//     type: String,
//     required: true
//   },
//   deriction: {
//     type: Number,
//     default: 0
//   }
// })

const products = reactive([
  {
    name: 'Bare Metal',
    key: 0,
    desc: 'We empower our clients to realize the benefits of bare-metal without the burden of managing infrastructure.'
  },
  {
    name: 'IaaS on GPU',
    key: 1,
    desc: 'Use your own cluster like using a supercomputer, without the need for any experience with IaaS and distributed system.'
  },
  {
    name: 'PaaS on GPU',
    key: 2,
    desc: 'The ultra-high product computing density and performance ratio are due to our continuous expansion of the GPU capabilities accumulated in the AI field to existing PaaS layer products.'
  },
  {
    name: 'AI Application',
    key: 3,
    desc: 'The complete software libraries and toolsets allow us to better support model fine-tuning and inference, Agent development and deployment, and application upgrades and transformations with AI capabilities.'
  }
])

const productsInfos = {
  0: {
    gpu: {
      name: 'GPU',
      item1: {
        name: 'Ampere AI Accelerator Series',
        desc: 'HGX A100 40GB and 80GB Training Clusters'
      },
      item2: {
        name: 'Hopper AI Accelerator Series',
        desc: 'HGX H100 80GB, H200 141G Training Clusters'
      },
      item3: {
        name: 'DGX GH200',
        desc: 'Massive memory supercomputing for emerging AI.'
      }
    },
    cpu: {
      name: 'CPU',
      item1: {
        name: 'Intel Xeon v3',
        desc: 'Great for CPU-only batch rendering use cases'
      },
      item2: {
        name: 'Intel Xeon v4',
        desc: 'Good mix of cost and single core performance'
      },
      item3: {
        name: 'Intel Xeon Scalable',
        desc: 'Excellent single core performance on Intel platform'
      }
    }
  },
  1: {
    svgInfo: {
      name: 'Iaas_on_GPU',
      w: 343 / 16,
      h: 540 / 16
    }
  },
  2: {
    svgInfo: {
      name: 'Paas_on_GPU',
      w: 343 / 16,
      h: 476 / 16
    }
  },
  3: {
    svgInfo: {
      name: 'AI_application',
      w: 343 / 16,
      h: 442 / 16
    }
  }
}

const activeNames = ref(['bareMetal'])

const makeefficiency = reactive({
  title: 'A whole distributed OS and supporting toolchain',
  id: 0,
  subtitle:
    'Abstracting software and hardware such as computing, networking, and storage, using resources and models as scheduling units, and presenting them to the public in a standardized manner; So as to shield the complexity of AI infrastructure and enable users to use WYSIWYG.',
  picInfo: {
    name: '/oschain.png',
    w: 343 / 16,
    h: 440 / 16
  },
  deriction: 0,
  leftStyle: '',
  rightStyle: '',
  buttonText: 'Learn more '
})

// const orderClass = computed(() => (props.deriction > 0 ? "order" : ""));
</script>

<style lang="scss" scoped>
.myproducts-phone {
  width: 100%;
  // height: 96.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 0 1rem;

  // .content-phone {
  //   flex-direction: column;
  // }

  .myproducts-phone-content {
    // height: 49.0625rem;
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    position: relative;
    padding: 0 1rem;

    .left {
      display: flex;
      flex: 1;
      justify-content: center;
      box-sizing: border-box;
      // height: 100%;

      .txt {
        font-size: 1.125rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .toptitle {
          font-family: Test Feijoa Bold;
          font-size: 2.125rem;
          font-weight: 700;
          line-height: 3rem;
          text-align: left;
          color: #000;
          padding: 0 1rem;

          span {
            color: #0057ff;
          }
        }

        .allproducts {
          // height: 33.3125rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #000;
          box-sizing: border-box;
          margin-top: 2rem;
          padding: 0 1rem;

          .proditem {
            border-top: 0.125rem solid #000;
            padding: 0.75rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;

            .title {
              font-family: Roobert TRIAL Bold;
              font-size: 1.125rem;
              font-weight: 750;
              line-height: 1.4219rem;
              text-align: left;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .desc {
              font-family: Roobert TRIAL;
              font-size: 1rem;
              font-weight: 500;
              line-height: 1.375rem;
              text-align: left;
              margin-top: 0.75rem;
            }
            .infos {
              position: relative;
              border-radius: 1.625rem;
              margin: 1.5rem -1rem 0 -1rem;
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(17.049999237060547px);
              box-sizing: border-box;
              box-shadow:
                0.05rem 0.05rem 0.05rem #00000014,
                0.05rem -0.05rem 0.05rem #00000014,
                -0.05rem 0.05rem 0.05rem #00000014,
                -0.05rem -0.05rem 0.05rem #00000014;
              transition: height 0.5s;
              overflow: hidden;

              .infos-item:not(:first-child) {
                margin-top: 1rem;
              }
              .infos-item:last-child {
                padding-bottom: 2rem;
              }
            }

            &:nth-last-child(1) {
              padding-bottom: 0;
            }

            &:hover {
              cursor: pointer;
            }
          }

          .active {
            opacity: 1;
          }

          .inactive {
            opacity: 50%;
          }
        }
      }
    }

    .right {
      display: flex;
      width: 30.625rem;
      justify-content: center;
      align-items: flex-start;
      box-sizing: border-box;
      word-wrap: break-word;
    }

    .order {
      order: -1;
    }
  }
}
</style>
