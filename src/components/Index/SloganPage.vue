<script setup>
// import { Right, VideoPlay } from "@element-plus/icons-vue";
import OpenVideo from './OpenVideo.vue'
// import { fa } from "element-plus/es/locale";
import { ref, reactive } from 'vue'
import PicText from '@/components/PicText.vue'
import Illustration_Pie from '@/assets/pics/Illustration_Pie.png'
import { useIsPhoneStore } from '@/stores/isPhone'
import { useEmails } from '@/stores/emails'
const emails = useEmails().emails

const myIsPhone = useIsPhoneStore()

const isPhone = myIsPhone.isPhone
const customers = reactive([
  { src: '1', w: 133 / 16, h: 27 / 16 },
  { src: '2', w: 82 / 16, h: 33 / 16 },
  { src: '3', w: 159 / 16, h: 33 / 16 },
  { src: '4', w: 89 / 16, h: 33 / 16 }
])

const videoOpen = ref(false)

const openVideo = () => {
  videoOpen.value = true
}

const handleClose = () => {
  videoOpen.value = false
}

function isSafari() {
  return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
}

const safari = ref(isSafari())

// const isPhone = useIsPhone();
// const isPhone = ref(false)
const leftStyle = isPhone ? '' : 'padding: 7.5rem 0 2.125rem 12.3765rem'

const makeefficiency = reactive({
  title: 'Make everything simple and efficient.',
  id: 0,
  subtitle:
    'Abstracting software and hardware such as computing, networking, and storage, using resources and models as scheduling units, and presenting them to the public in a standardized manner; So as to shield the complexity of AI infrastructure and enable users to use WYSIWYG.',
  desc: 'Users need the minimum knowledge related to infrastructure, can also obtain the necessary resources, and complete the configuration of the basic environment. At runtime, adjustments can also be made to the virtual cluster to meet the needs of future changes in the model or business.',
  picInfo: {
    name: Illustration_Pie,
    w: isPhone ? 343 / 16 : 464 / 16,
    h: isPhone ? 407 / 16 : 565 / 16
  },
  deriction: 1,
  leftStyle,
  rightStyle: ''
})
</script>

<template>
  <div class="index" id="customersId">
    <!-- <svg-icon
      name="No.1_background"
      :style="`width: 77.25rem; height: 46rem; position:absolute`"
    >
    </svg-icon> -->
    <div class="index-content" id="apptest" :class="isPhone ? 'phonecontent' : ''">
      <div class="index-content-up" :class="isPhone ? 'phoneup' : ''">
        <div class="index-content-up-slogan" :class="isPhone ? 'phoneslogan' : ''">
          <div
            class="index-content-up-slogan__title"
            :class="isPhone ? 'phonetitle' : ''"
            :style="safari && !isPhone ? 'font-size: 5rem;' : ''"
          >
            {{ $t('index.slogan.title') }}
          </div>
        </div>
        <div class="index-content-up-btn" :class="isPhone ? 'phonebtn' : ''">
          <div class="index-content-up-btn__desc">
            {{ $t('index.slogan.desc') }}
          </div>
          <div class="index-content-up-btn-s" :class="isPhone ? 'phonebtns' : ''">
            <a :href="`mailto:${emails.name1}?subject=contact us`">
              <div class="index-content-up-btn-s__contact">
                {{ $t('index.slogan.contactBtn') }}
                <svg-icon
                  name="arrow-white"
                  style="width: 1.125rem; height: 1rem; margin-left: 0.8125rem"
                >
                </svg-icon>
              </div>
            </a>
            <div class="index-content-up-btn-s__video" @click="openVideo">
              {{ $t('index.slogan.videoBtn') }}
              <svg-icon
                name="play"
                style="width: 1.125rem; height: 1rem; margin: 0.0625rem 0 0 0.1875rem"
              >
              </svg-icon>
            </div>
          </div>
        </div>
      </div>

      <div class="index-content-customers" v-if="!isPhone">
        <div v-for="item in customers" class="index-content-customers__img" :key="item.src">
          <svg-icon :name="item.src" :style="`width: ${item.w}rem; height: ${item.h}rem`">
          </svg-icon>
        </div>
      </div>
    </div>
    <pic-text
      key="boat"
      v-bind="makeefficiency"
      :isPhone="isPhone"
      :style="`
        margin-top: ${isPhone ? '2' : '6'}rem;
        height: ${isPhone ? '' : '35.3125'}rem;
        width: ${isPhone ? '23.4375rem' : '72.1875'}rem;
        float: right;`"
    ></pic-text>
  </div>
  <div class="mydialo">
    <el-dialog v-model="videoOpen" title="" width="60%" destroy-on-close center>
      <OpenVideo @close="handleClose"></OpenVideo>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-dialog--center .el-dialog__body) {
  padding: 0 !important;
}

:deep(.el-dialog__header) {
  padding: 0;
  padding-bottom: 0px;
}
.phone {
  flex-direction: column;
}

.index {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;

  .phonecontent {
    padding: 0 2rem;
  }

  &-content {
    height: 20.5625rem;
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-between;

    .phoneup {
      flex-direction: column;
      .phoneslogan {
        width: 100%;
        .phonetitle {
          font-size: 3.125rem;
          line-height: 3.25rem;
          text-align: left;
        }
      }
      .phonebtn {
        padding: 0;
        margin-top: 1.5rem;
        .phonebtns {
          margin-top: 1.5rem;
        }
      }
    }
    &-up {
      display: flex;
      height: 12.5rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      text-align: right;
      &-slogan {
        // padding: 0 100px 0 0;
        width: 35.375rem;
        box-sizing: border-box;

        &__title {
          color: #000;
          font-family: 'Roobert TRIAL Bold';
          font-size: 5.1875rem;
          font-weight: 900;
          line-height: 6.25rem; /* 116.981% */
        }
        .phonetitle {
          font-size: 4.5rem;
        }
      }
      &-btn {
        display: flex;
        flex-direction: column;
        flex: 1;
        box-sizing: border-box;
        padding: 2.625rem 0.125rem 0.875rem 6.6rem;

        @mixin btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.25rem;
          color: #fff;
          font-family: Inter;
          font-size: 0.9375rem;
          font-style: normal;
          height: 2.625rem;
          font-weight: 600;
        }
        &-s {
          display: flex;
          justify-content: flex-start;
          margin-top: 3.375rem;

          &__contact {
            width: 9.125rem;
            background: #0057ff;
            @include btn;
            &:hover {
              background-color: #002bff;
              cursor: pointer;
            }
          }

          &__video {
            width: 11.375rem;
            @include btn;
            color: #464646;
            margin-left: 1rem;
            border: 0.125rem solid #464646;
            box-sizing: border-box;
            &:hover {
              cursor: pointer;
              color: #002bff;
              border: 0.125rem solid #002bff;
            }
          }
        }
        &__desc {
          color: #000;
          font-family: Roobert TRIAL;
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 1.5rem;
          text-align: left;
        }
      }
    }

    &-customers {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &__meetBtn {
        color: #03101f;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
          color: #002bff;
        }
      }
    }
  }
}
</style>
