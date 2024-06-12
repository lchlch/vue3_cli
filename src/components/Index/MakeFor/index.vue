<template>
  <div class="main-banner">
    <div class="content">
      <div class="wrapper" id="apptest">
        <div class="title">
          {{ $t("index.makefor.title") }}
        </div>
        <div class="subtitle">
          {{ $t("index.makefor.subtitle") }}
        </div>
        <svg-icon name="make" style="width: 33.75rem; height: 2rem"> </svg-icon>
        <div class="typecontainer">
          <div class="video">
            <video
              autoplay="autoplay"
              loop="loop"
              muted
              width="100%"
              height="100%"
              src="/makefor1.mp4"
            ></video>
          </div>
          <div class="video">
            <video
              autoplay="autoplay"
              loop="loop"
              muted
              width="100%"
              height="100%"
              src="/makefor2.mp4"
            ></video>
          </div>
          <div class="video">
            <video
              autoplay="autoplay"
              loop="loop"
              muted
              width="100%"
              height="100%"
              src="/makefor3.mp4"
            ></video>
          </div>
        </div>
        <div class="boxcontainer">
          <div
            :class="`videobox ${activeNum === 0 ? 'videobox-active' : ''}`"
            @click="() => myslide(0)"
          >
            Model Develop
            <span>No infrastructure skills required</span>
          </div>

          <div
            :class="`videobox ${activeNum === 1 ? 'videobox-active' : ''}`"
            @click="() => myslide(1)"
          >
            Model Service
            <span>No need to plan resource demand</span>
          </div>

          <div
            :class="`videobox ${activeNum === 2 ? 'videobox-active' : ''}`"
            @click="() => myslide(2)"
          >
            Application Develop
            <span
              >No need to focus on AI capability and non business
              functions</span
            >
          </div>
        </div>
      </div>
      <div class="swipercontainer">
        <swiper
          class="swiper"
          :loop="true"
          :modules="modules"
          :looped-slides="3"
          :effect="'fade'"
          :speed="1000"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :navigation="navigation"
          @slideChange="onSlideChange"
          @swiper="setControlledSwiper"
          :controller="{ control: controlledSwiper }"
          ref="swiperRef"
        >
          <swiper-slide v-for="item in allData.bannerList" :key="item.id">
            <div class="slider-container">
              <div class="slider-text">
                <div class="slider-text-title">
                  {{ item.title }}
                </div>
                <div class="slider-text-subtitle">
                  {{ item.subtitle }}
                </div>
                <div class="slider-text-desc">
                  {{ item.desc }}
                </div>
              </div>
              <div class="slider-img">
                <img
                  :src="item.url"
                  :alt="item.name"
                  style="
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                  "
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- <div
          class="swiper-button-prev button-prev button"
          @click.stop="prevEl(item, index)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
            <g id="arrow-svg-home">
              <g id="circ" class="cls-1">
                <circle cx="21" cy="21" r="20" class="cls-4"></circle>
              </g>
              <g id="arrow">
                <path
                  id="arrow-trg"
                  d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                ></path>
              </g>
              <path id="line" d="M40,0H0" class="cls-3"></path>
            </g>
          </svg>
        </div>
        <div class="swiper-button-next button-next button" @click.stop="nextEl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
            <g id="arrow-svg-home">
              <g id="circ" class="cls-1">
                <circle cx="21" cy="21" r="20" class="cls-4"></circle>
              </g>
              <g id="arrow">
                <path
                  id="arrow-trg"
                  d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                  class="cls-2"
                ></path>
              </g>
              <path id="line" d="M40,0H0" class="cls-3"></path>
            </g>
          </svg>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination";
// 引入swiper组件
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, Controller } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation, Controller]; //Autoplay 自动播放  Pagination 分页
const swiperRef = ref(null);
const controlledSwiper = ref();
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});
const activeNum = ref(0);

const onSlideChange = (swiper) => {
  console.log(swiper.activeIndex)
  // swiper是当前轮播的对象，里面可以获取到当前swiper的所有信息，当前索引是activeIndex
  activeNum.value = swiper.activeIndex;
};

const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper;
};

const myslide = (item) => {
  controlledSwiper.value?.slideTo(item, 500);
  activeNum.value = item;
};

//自动轮播配置
const autoConfig = reactive({
  info: {
    delay: 2000, //间隔时间
    disableOnInteraction: false, //设置为false，用户交互（滑动）后自动播放不会被禁用，每次交互后都会重新启动
    reverseDirection: false, //是否反方向轮播
    stopOnLastSlide: false, //执行到最后
    pauseOnMouseEnter: true, //鼠标输入时暂停
  },
});

const prevEl = (item, index) => {
  console.log("上一张" + index + item);
};
const nextEl = () => {
  console.log("下一张");
};

const allData = reactive({
  bannerList: [
    //轮播图数组
    {
      id: 0,
      url: "/makefor1.png",
      name: "活动1",
      title: "AI MODEL DEVELOPMENT",
      subtitle: "No infrastructure skills required",
      desc: "Which make user focus on acquisition and governance of training data, development and debugging of high customer value models, modeling and evaluation of model implementation effectiveness, as well as research on efficient model compression algorithms and optimization of resource utilization.",
    },
    {
      id: 1,
      url: "/makefor2.png",
      name: "活动2",
      title: "AI MODEL SERVICE",
      subtitle: "No need to plan resource demand",
      desc: "Which make user focus on the actual application effect of the model, various indicators of the model itself during operation, customer repurchase rate, positive and negative feedback from users, and other customer value indicators.",
    },
    {
      id: 2,
      url: "/makefor3.png",
      name: "活动3",
      title: "AI APPLICATION DEVELOPMENT",
      subtitle: "No need to focus on AI capability and non business functions",
      desc: "Which make user focus on the business itself of application services, how AI can better empower the business, the collaboration between different applications and AI, and the transformation of user value",
    },
  ],
});
</script>
<style lang="scss" scoped>
:deep(.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after) {
  content: "";
}

:deep(swiper-button-prev:after, .swiper-button-next:after) {
  font-family: none;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

:deep(.swiper-button-next:after, .swiper-rtl .swiper-button-next:after) {
  content: "";
}

:deep(swiper-button-next:after, .swiper-button-next:after) {
  font-family: none;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.main-banner {
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0 0;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 217, 0) 0%,
    rgba(255, 241, 217, 0.3) 50%,
    rgba(255, 241, 217, 0.2) 100%
  );

  .content {
    $mainwidth: var(--main-width);
 width: #{$mainwidth};;
    height: 100%;
    position: relative;
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      .title {
        color: #000;
        font-family: "Test Feijoa Bold";
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        box-sizing: border-box;
      }
      .subtitle {
        width: 85%;
        color: #888;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        padding: 1rem 0;
        box-sizing: border-box;
        word-break: break-all;
        text-align: center;
      }
      .typecontainer {
        width: 50%;
        display: flex;
        justify-content: space-between;
        margin-top: -0.5rem;

        .video {
          width: 2.5rem;
          height: 2.5rem;
          z-index: 2;
          position: relative;
          .video::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            border-top: 1px dashed #ff6a00;
          }

          .video::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            border-top: 1px dashed #ff6a00;
          }

          &:first-child {
            transform: translateX(-50%);
          }
          &:last-child {
            transform: translateX(50%);
          }
        }
      }
      .boxcontainer {
        width: 50%;
        display: flex;
        justify-content: space-between;
        margin-top: -0.5rem;
        .videobox {
          width: 10rem;
          height: 4rem;
          background-color: #fff;
          margin-top: -1rem;
          padding: 1.5rem 0.5rem;
          border: 0.1px dashed #ff6a00;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0); /* 初始无阴影 */
          position: relative;
          overflow: hidden;
          transition: box-shadow 1s;
          display: flex;
          justify-content: center;
          font-size: 1rem;
          color: #000;
          font-weight: 600;
          flex-direction: column;
          span {
            font-weight: 200;
            color: #ff6a0099;
            font-size: 0.75rem;
            margin-top: 0.3rem;
          }
          /* 定义阴影动画 */
          @keyframes shadow-animation {
            0% {
              box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2);
            }
            100% {
              box-shadow: 0 0 0.8rem #ff6a0066;
            }
          }
          &:hover {
            animation: shadow-animation 0.5s forwards;
            cursor: pointer;
          }

          &:first-child {
            transform: translateX(-50%);
          }
          &:last-child {
            transform: translateX(50%);
          }
        }
        .videobox-active {
          box-shadow: 0 0 1rem #ff6a00;
        }
      }
    }

    .swipercontainer {
      position: relative;
      margin-top: 1rem;
      .slider-container {
        display: flex;
        width: 100%;
        height: 30rem;
        .slider-text {
          width: 45%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding-right: 1rem;

          &-title {
            font-size: 1.8rem;
            font-weight: 600;
          }
          &-subtitle {
            font-size: 1.25rem;
            font-weight: 400;
            color: #ff6a00;
            margin-top: 1rem;
          }
          &-desc {
            font-size: 1rem;
            font-weight: 400;
            color: #333;
            margin-top: 1rem;
          }
        }
        .slider-img {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          // background-color: #e4e9f533;
          border-radius: 0.8rem;
          img {
            align-items: flex-end;
          }
        }
      }
      .button-prev,
      .button-next {
        transition: 0.5s;
        outline: none;
        position: absolute;
        width: 50px;
        z-index: 10;
        top: 65vh;
        transform: translateY(-34px);
        cursor: pointer;
      }
      .button-prev {
        left: 4vw;
      }
      .button-next {
        right: 4vw;
      }
      .button.disabled {
        opacity: 0.2;
        cursor: default;
      }
      #arrow-svg-home {
        transform: translateY(353px);
      }
      .button-next #arrow-svg-home {
        transform: translateY(353px) rotateY(180deg);
        transform-origin: 80px 0px 0px;
      }
      svg {
        transition: 0.5s;
      }
      .cls-1 {
        transition: 0.5s;
        opacity: 0.4;
        transform-origin: -20px 40px;
        opacity: 1;
      }
      .cls-4 {
        transition: 0.5s;
        stroke-width: 2px;
        stroke: #000;
        fill: none;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        opacity: 0.4;
        transform-origin: 0px 0px 0px;
      }
      #arrow-trg {
        transition: 0.5s;
        fill: #000;
        transform: rotateY(180deg) translate(-26px, 18px);
      }
      #line {
        transition: 0.5s;
        stroke: #000;
        transform: translate(25px, 21px);
      }
      .button-prev:not(.disabled):hover svg {
        transform: translateX(-25px);
      }
      .button-next:not(.disabled):hover svg {
        transform: translateX(25px);
      }
      .button:not(.disabled):hover .cls-1 {
        transform: scale(1.1);
      }
      .button:not(.disabled):hover .cls-4 {
        stroke-dasharray: 2px;
        stroke-dashoffset: 2px;
        opacity: 1;
      }
      .button:not(.disabled):hover #arrow-trg {
        transform: rotateY(180deg) translate(-25px, 17px);
      }
      .button:not(.disabled):hover #line {
        transform: translate(24px, 20px) scaleX(0.33);
      }
      .swiper-button-prev {
        position: absolute;
        left: 1.5vw;
        bottom: 10%;
        height: 240px;
        width: 240px;
      }
      .swiper-button-next {
        position: absolute;
        right: 1.5vw;
        bottom: 10%;
        height: 240px;
        width: 240px;
      }
    }
  }
}
</style>
