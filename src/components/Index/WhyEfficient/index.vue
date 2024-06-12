<template>
  <div class="contentbg" :id="props.id">
    <div id="apptest" :class="contentClass">
      <div class="top">
        <div class="left">
          <!-- <div class="txt">
          <div class="title">{{ props.title }}</div>
          <div class="subtitle">{{ props.subtitle }}</div>
          <div class="desc">
            {{ props.desc }}
          </div>
        </div> -->
          <cube
            :cubeTitleList="whyeffciencyinfoList"
            @cubeChange="cubeChange"
          ></cube>
        </div>
        <div :class="`right ${orderClass}`">
          <div v-for="item in whyeffciencyinfoList">
            <transition name="fade">
              <div class="text" v-if="item.selected">
                <div class="title">{{ item.title }}</div>
                <div class="subtitle">{{ item.subtitle }}</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="img">
        <div v-for="item in whyeffciencyinfoList">
          <transition name="my">
            <div class="text" v-if="item.selected">
              <img :src="item.picSrc" alt="" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import cube from "./cube.vue";
const isPhone = useIsPhone();

const contentClass = computed(() =>
  isPhone.value ? "content content-phone" : "content"
);

const props = defineProps({
  picSrc: {
    type: String,
    required: true,
    default: "/makefor1.png",
  },
});

const cubeChange = (e) => {
  Object.keys(whyeffciencyinfoList).forEach(
    (item) => (whyeffciencyinfoList[item].selected = false)
  );
  whyeffciencyinfoList[e].selected = true;
  iconRef.value = whyeffciencyinfoList[e].picSrc;
};

const iconRef = ref("/makefor1.png");

const selectedInfo = computed(() => {
  let info = {};
  Object.keys(whyeffciencyinfoList).forEach((item) => {
    if (whyeffciencyinfoList[item].selected) {
      info = whyeffciencyinfoList[item];
    }
  });
  return info;
});

const whyeffciencyinfoList = reactive({
  WYSIWYG: {
    name: "WYSIWYG",
    positionClass: "small-position1",
    selected: false,
    icon: "product1",
    picSrc: "/whyeff1.png",
    title: "WYSIWYG",
    subtitle:
      "Always maintain the simplicity of using complex systems and maximize the WYSIWYG of the operational process.",
  },
  "Advanced GPUs": {
    name: "Advanced GPUs",
    positionClass: "small-position2",
    selected: false,
    icon: "product2",
    picSrc: "/whyeff2.png",
    title: "GPU Performance Enhancement",
    subtitle:
      "We provide the most advanced GPUs and a system platform that maximizes GPU performance.",
  },
  Toolchains: {
    name: "Optimized Toolchains",
    positionClass: "small-position3",
    selected: false,
    icon: "product3",
    picSrc: "/whyeff3.png",
    title: "Optimized Toolchains",
    subtitle:
      "From installation to operation, a large number of optimized toolchains have been implemented to achieve over 70% automated monitoring and operation, significantly reducing manpower requirements.",
  },
  Innovation: {
    name: "Innovation",
    positionClass: "small-position4",
    selected: false,
    icon: "product4",
    picSrc: "/whyeff4.png",
    title: "Innovation",
    subtitle:
      "Continuously innovating and abstracting information around complete end-to-end systems of software and hardware, simplifying the threshold for using business platforms on the system.",
  },
  Network: {
    name: "Network Optimization",
    positionClass: "small-position5",
    selected: true,
    icon: "product2",
    picSrc: "/whyeff5.png",
    title: "Network Optimization",
    subtitle:
      "Every in ethernet: the integration of computing, storage, and data in one ethernet network, greatly simplifies the network architecture and improves network utilization.",
  },
});

const orderClass = computed(() => (props.deriction > 0 ? "order" : ""));
</script>

<style lang="scss" scoped>
.contentbg {
  width: 100%;
  height: 47rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 217, 0) 0%,
    rgba(255, 241, 217, 0.3) 50%
  );
  padding-bottom: 2rem;

  .content-phone {
    flex-direction: column;
  }
  .content {
    $mainwidth: var(--main-width);
 width: #{$mainwidth};;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .fade-enter-from {
      margin-left: 10rem;
    }

    .fade-enter-to {
      margin-left: 0;
    }

    .fade-leave-from {
      opacity: 1;
    }

    .fade-leave-to {
      opacity: 0;
      height: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: margin-left 1s;
    }

    


    .my-enter-from {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }

    .my-enter-to {
      position: absolute;
      opacity: 1;
      scale: 1;
    }

    .my-leave-from {
      position: absolute;
      opacity: 1;
      scale: 1;
    }

    .my-leave-to {
      position: absolute;
      opacity: 0;
      scale: 0;
    }

    .my-enter-active,
    .my-leave-active {
      transition: opacity 1s, scale 1s;
      
    }

    
    // .fade-enter,
    // .fade-leave-to {
    //   opacity: 0;
    //   height: 0px;
    // }
    .top {
      width: 100%;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        width: 30%;
        justify-content: center;
        align-items: center;
      }
      .right {
        display: flex;
        width: 66%;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 0 0 2rem;
        position: relative;
        // padding: 70px 0px 0px 35px;
        // align-items: center;

        .title {
          color: #041527;
          font-family: Inter;
          font-size: 1.8rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
        }

        .subtitle {
          font-size: 1rem;
          font-weight: 400;
          width: 45.25rem;
          overflow: hidden;
          color: #ff6a00;
          font-style: normal;
          box-sizing: border-box;
          word-break: break-all;
          margin-top: 1.5rem;
        }
      }
    }
    .img {
      width: 90%;
      height: 25rem;
      display: relative;
      img {
        width:55rem;
        height: 25rem;
        object-fit: contain;
      }
    }
  }
}
</style>
