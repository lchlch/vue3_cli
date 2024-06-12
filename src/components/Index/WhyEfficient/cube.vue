<template>
  <div class="cube-contentbg">
    <div class="box-container">
      <div class="cube-big" style="z-index: 1">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
      <div v-for="(value, name) in props.cubeTitleList" :key="name">
        <div
          :id="name"
          :class="`cube-small cube-ani ${value.positionClass}`"
          @click="printFace(name)"
        >
          <div class="face-small front-small"></div>
          <div class="face-small back-small">
            <span style="transform: rotateY(180deg)">{{ name }}</span>
          </div>
          <div class="face-small left-small"></div>
          <div class="face-small right-small">
            <span style="transform: rotateY(180deg); color: #ff6a00"
              >TurboAI</span
            >
          </div>
          <div class="face-small top-small">
            <svg-icon
              :name="value.icon"
              style="
                height: 2.5rem;
                width: 3.125rem;
                transform: rotateX(-180deg);
              "
            >
            </svg-icon>
          </div>
          <div class="face-small bottom-small"></div>
        </div>
      </div>

      <!-- <div
        id="GPU"
        class="cube-small small-position2"
        @click="printFace('GPU')"
      >
        <div class="face-small front-small"></div>
        <div class="face-small back-small">
          <span style="transform: rotateY(180deg)">GPU</span>
        </div>
        <div class="face-small left-small"></div>
        <div class="face-small right-small">
          <span style="transform: rotateY(180deg); color: #ff6a00"
            >TurboAI</span
          >
        </div>
        <div class="face-small top-small"></div>
        <div class="face-small bottom-small"></div>
      </div>
      <div
        id="Storage"
        class="cube-small small-position3"
        @click="printFace('Storage')"
      >
        <div class="face-small front-small"></div>
        <div class="face-small back-small">
          <span style="transform: rotateY(180deg)">Storage</span>
        </div>
        <div class="face-small left-small"></div>
        <div class="face-small right-small">
          <span style="transform: rotateY(180deg); color: #ff6a00"
            >TurboAI</span
          >
        </div>
        <div class="face-small top-small"></div>
        <div class="face-small bottom-small"></div>
      </div>
      <div
        id="Network"
        class="cube-small small-position4"
        @click="printFace('Network')"
      >
        <div class="face-small front-small"></div>
        <div class="face-small back-small">
          <span style="transform: rotateY(180deg)">Network</span>
        </div>
        <div class="face-small left-small"></div>
        <div class="face-small right-small">
          <span style="transform: rotateY(180deg); color: #ff6a00"
            >TurboAI</span
          >
        </div>
        <div class="face-small top-small"></div>
        <div class="face-small bottom-small"></div>
      </div>
      <div
        id="Network1"
        class="cube-small small-position5"
        @click="printFace('Network1')"
      >
        <div class="face-small front-small"></div>
        <div class="face-small back-small">
          <span style="transform: rotateY(180deg)">Network</span>
        </div>
        <div class="face-small left-small"></div>
        <div class="face-small right-small">
          <span style="transform: rotateY(180deg); color: #ff6a00"
            >TurboAI</span
          >
        </div>
        <div class="face-small top-small"></div>
        <div class="face-small bottom-small"></div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const props = defineProps({
  cubeTitleList: {
    type: Object,
    required: false,
  },
});

const emits = defineEmits(["cubeChange"]);

// const cubeTitleList = reactive({
//   WYSIWYG: {
//     name: "WYSIWYG",
//     positionClass: "small-position1",
//     selected: false,
//     icon: "product1",
//   },
//   Performance: {
//     name: "PerformanceEnhancement",
//     positionClass: "small-position2",
//     selected: false,
//     icon: "product2",
//   },
//   "Optimized Toolchains": {
//     name: "OptimizedToolchains",
//     positionClass: "small-position3",
//     selected: false,
//     icon: "product3",
//   },
//   Innovation: {
//     name: "Innovation",
//     positionClass: "small-position4",
//     selected: false,
//     icon: "product4",
//   },
//   "Network Optimization": {
//     name: "NetworkOptimization",
//     positionClass: "small-position5",
//     selected: false,
//     icon: "product2",
//   },
// });

onMounted(() => {
  Object.keys(props.cubeTitleList).forEach((key) => {
    if (props.cubeTitleList[key].selected === true) {
      currentEl.value = key;
    }
  });
  if (currentEl.value) {
    printFace(currentEl.value, true);
  }
});

const currentEl = ref("");
const printFace = (face, init) => {
  if (currentEl.value === face && !init) return;
  if (currentEl.value) {
    var el = document.getElementById(currentEl.value);
    var currentLeft = el.offsetLeft;
    var currentTop = el.offsetTop;
    el.style.left = currentLeft - 77.5 + "px";
    el.style.top = currentTop - 50 + "px";
    el.style.zIndex = 0;
  }
  emits("cubeChange", face);

  currentEl.value = face;
  var el = document.getElementById(face);
  var currentLeft = el.offsetLeft;
  var currentTop = el.offsetTop;
  el.style.left = currentLeft + 77.5 + "px";
  el.style.top = currentTop + 50 + "px";
  el.style.zIndex = 2;
};
</script>

<style lang="scss" scoped>
.cube-contentbg {
  width: 15.625rem;
  height: 15.625rem;

  .box-container {
    position: relative;
    width: 15.625rem;
    height: 15.625rem;
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }

  .small-position1 {
    left: 87.5px;
    top: 135px;
  }

  .small-position2 {
    left: 87.5px;
    top: 119px;
  }

  .small-position3 {
    left: 87.5px;
    top: 103px;
  }
  .small-position4 {
    left: 87.5px;
    top: 87px;
  }
  .small-position5 {
    left: 87.5px;
    top: 71px;
  }

  .cube-big {
    left: 80px; //70
    top: 50px; //50
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateY(45deg);
    pointer-events: none;
  }

  .cube-small {
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateY(45deg);
  }
  .cube-small:hover {
    scale: 1.05;
    cursor: pointer;
  }

  .face {
    position: absolute;
    width: 125px;
    height: 125px;
    border: 0.1px solid #eeeeee;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  .face-small {
    position: absolute;
    width: 105px;
    height: 105px;
    border: 0.1px solid #cccccc;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 900;
  }

  .front {
    transform: translateZ(62.5px);
    border-left: 0;
    border-bottom: 0;
  }

  .back {
    transform: rotateY(180deg) translateZ(62.5px);
    pointer-events: none;
    background-image: linear-gradient(145deg, rgba(0, 0, 0, 0.1), transparent);
  }

  .left {
    transform: rotateY(-90deg) translateZ(62.5px);
    border-right: 0;
    border-bottom: 0;
  }

  .right {
    transform: rotateY(90deg) translateZ(62.5px);
    background-image: linear-gradient(145deg, rgba(0, 0, 0, 0.1), transparent);
  }

  .top {
    transform: rotateX(90deg) translateZ(62.5px);
    background-image: linear-gradient(145deg, rgba(0, 0, 0, 0.1), transparent);
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(62.5px);
    border-left: 0;
    border-top: 0;
  }

  .front-small {
    transform: translateZ(52.5px);
    height: 15px;
    border: 0;
    pointer-events: none;
  }

  .back-small {
    transform: rotateY(180deg) translateZ(52.5px);
    background-color: #f8f8f8;
    height: 15px;
    border: 0;
  }

  .left-small {
    transform: rotateY(-89.99deg) translateZ(52.5px);
    height: 15px;
    border: 0;
    pointer-events: none;
  }

  .right-small {
    transform: rotateY(90deg) translateZ(52.5px);
    background-color: #eeeeee88;
    height: 15px;
    border: 0;
  }

  .top-small {
    transform: rotateX(89.99deg) translateZ(52.5px);
    background-color: #fff;
    border: 0;
    /* background-image: url("https://img2.baidu.com/it/u=3443262082,2321902350&fm=253&fmt=auto&app=138&f=JPEG?w=855&h=500");
        background-size:cover; */
  }
  span {
    transition: all 1s ease;
  }
  span:hover {
    cursor: pointer;
    scale: 1.1;
    font-weight: 900;
  }

  .bottom-small {
    transform: rotateX(-90deg) translateZ(-15px);
    border: 0;
    pointer-events: none;
  }

  .cube-ani {
    transition: all 0.3s ease-in-out;
  }
  // #WYSIWYG {
  //   transition: all 0.3s ease-in-out;
  // }
  // #PerformanceEnhancement {
  //   transition: all 0.3s ease-in-out;
  // }
  // #Storage {
  //   transition: all 0.3s ease-in-out;
  // }
  // #Network {
  //   transition: all 0.3s ease-in-out;
  // }
  // #Network1 {
  //   transition: all 0.3s ease-in-out;
  // }
}
</style>
