<template>
  <div class="myproducts">
    <div class="myproducts-content">
      <div :class="`right ${orderClass}`">
        <img
          :src="`/Waterclor${activeItem}.png`"
          :style="`width: ${svgSize[activeItem].w}rem; height: ${svgSize[activeItem].h}rem; position: absolute; left: ${svgSize[activeItem].l}rem; top: ${svgSize[activeItem].t}rem`"
        />
        <div
          class="infos"
          id="apptest"
          :key="activeNames.value"
          :style="`${
            activeItem === 0
              ? 'padding: 2.3125rem 2.4375rem 4.125rem 2.25rem;height: 44.73rem'
              : `height: ${productsInfos[activeItem].svgInfo.h}rem`
          }`"
        >
          <div class="infosAni">
            <div v-if="activeItem === 0">
              <info-item
                :key="key"
                v-for="(item, key) in infos"
                :title="`${infoTitle}.${key}.name`"
                :infos="getInfos(item, key)"
                class="infos-item"
              ></info-item>
            </div>

            <svg-icon
              v-if="activeItem !== 0"
              :name="productsInfos[activeItem].svgInfo.name"
              :style="`width: ${productsInfos[activeItem].svgInfo.w}rem; height: ${productsInfos[activeItem].svgInfo.h}rem`"
            >
            </svg-icon>
          </div>
        </div>
      </div>
      <div class="left">
        <div class="txt" id="apptest">
          <div class="toptitle">We offer products to maximize your <span>productivity</span></div>
          <div class="allproducts">
            <div
              class="proditem"
              :class="`${activeItem === item.key ? 'active' : 'inactive'}`"
              v-for="item in products"
              :key="item.key"
              @click="activeItem = item.key"
            >
              <div class="title">
                <svg-icon
                  :name="`product${item.key + 1}`"
                  style="width: 1.5625rem; height: 1.4218rem; margin-right: 0.75rem"
                >
                </svg-icon
                >{{ item.name }}
              </div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pic-text
      key="boat"
      v-bind="makeefficiency"
      style="margin-top: 6rem; height: 38.875rem; width: 73.25rem"
    ></pic-text>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import InfoItem from './InfoItem.vue'
// import { useIsPhoneStore } from '@/stores/isPhone'

// const isPhone = useIsPhoneStore().isPhone
// import { defineProps } from "vue";
// const isPhone = useIsPhone()

const svgSize = reactive({
  0: {
    w: 850 / 16,
    h: 990 / 16,
    l: -180 / 16,
    t: -132 / 16
  },
  1: {
    w: 850 / 16,
    h: 990 / 16,
    l: -180 / 16,
    t: -109 / 16
  },
  2: {
    w: 850 / 16,
    h: 990 / 16,
    l: -180 / 16,
    t: -155 / 16
  },
  3: {
    w: 850 / 16,
    h: 990 / 16,
    l: -180 / 16,
    t: -179 / 16
  }
})

const activeItem = ref(0)

// const contentClass = computed(() => (isPhone.value ? 'content content-phone' : 'content'))

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

const props = defineProps({
  // title: {
  //   type: String,
  //   required: true
  // },
  // subtitle: {
  //   type: String,
  //   required: true
  // },
  // desc: {
  //   type: String,
  //   required: true
  // },
  // picSrc: {
  //   type: String,
  //   required: true
  // },
  deriction: {
    type: Number,
    default: 0
  }
})

const products = reactive([
  {
    name: 'Bare Metal',
    key: 0,
    desc: 'We empower our clients to enjoy the advantages of bare-metal infrastructure without the hassle of managing it themselves.'
  },
  {
    name: 'IaaS on GPU',
    key: 1,
    desc: 'Utilize your own cluster like a supercomputer, without requiring any expertise in IaaS or distributed system.'
  },
  {
    name: 'PaaS on GPU',
    key: 2,
    desc: 'The ultra-high computing density and performance ratio result from our ongoing expansion of GPU capabilities accumulated in the AI field to our existing PaaS layer products.'
  },
  {
    name: 'AI Application',
    key: 3,
    desc: 'Our comprehensive software libraries and toolsets enable us to enhance support for model fine-tuning and inference, agent development and deployment, and application upgrades and transformations with AI capabilities.'
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
      w: 490 / 16,
      h: 772 / 16
    }
  },
  2: {
    svgInfo: {
      name: 'Paas_on_GPU',
      w: 490 / 16,
      h: 680 / 16
    }
  },
  3: {
    svgInfo: {
      name: 'AI_application',
      w: 490 / 16,
      h: 632 / 16
    }
  }
}

const activeNames = ref(['bareMetal'])

const makeefficiency = reactive({
  title: 'A whole distributed OS and supporting toolchain',
  id: 0,
  subtitle:
    'Abstracting software and hardware components like computing, networking, and storage into resources and models as scheduling units, and presenting them to the public in a standardized manner, shields the complexity of AI infrastructure and enables users to utilize WYSIWYG interfaces.',
  picInfo: {
    name: '/oschain.png',
    w: 478 / 16,
    h: 622 / 16
  },
  deriction: 0,
  leftStyle: 'padding: 4.625rem 8.125rem 5.5625rem 0rem',
  rightStyle: '',
  buttonText: 'Learn more '
})

const orderClass = computed(() => (props.deriction > 0 ? 'order' : ''))
</script>

<style lang="scss" scoped>
.myproducts {
  width: 100%;
  height: 96.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content-phone {
    flex-direction: column;
  }

  .myproducts-content {
    height: 49.0625rem;
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    position: relative;

    .left {
      display: flex;
      flex: 1;
      justify-content: center;
      box-sizing: border-box;
      padding: 0 0 0 6.8125rem;
      height: 100%;

      .txt {
        font-size: 1.125rem;
        color: #fff;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .toptitle {
          font-family: Test Feijoa Bold;
          font-size: 3rem;
          font-weight: 700;
          line-height: 4.2425rem;
          text-align: left;
          color: #000;

          span {
            color: #0057ff;
          }
        }

        .allproducts {
          height: 33.3125rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #000;
          box-sizing: border-box;

          .proditem {
            border-top: 0.125rem solid #000;
            padding: 1.5rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;

            .title {
              font-family: Roobert TRIAL;
              font-size: 1.125rem;
              font-weight: 750;
              line-height: 1.4219rem;
              text-align: left;
              display: flex;
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

      .infos {
        position: relative;
        border-radius: 1.625rem;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(17.049999237060547px);
        width: 100%;
        box-sizing: border-box;
        box-shadow:
          0.01rem 0.01rem 0.01rem #00000014,
          0.01rem -0.01rem 0.01rem #00000014,
          -0.01rem 0.01rem 0.01rem #00000014,
          -0.01rem -0.01rem 0.01rem #00000014;
        transition: height 0.5s;
        overflow: hidden;

        .infos-item:not(:first-child) {
          margin-top: 4.25rem;
        }
      }
    }

    .order {
      order: -1;
    }
  }
}
</style>
