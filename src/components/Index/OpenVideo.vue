import type { Style } from 'nuxt/dist/head/runtime/components';
<script setup>
import { ref, onMounted } from "vue";
import { useMouseInElement } from "@vueuse/core";
import { VideoPlay, VideoPause, CloseBold } from "@element-plus/icons-vue";
const target = ref(null);

const video = ref(null);

const playStatus = ref(true);

const { isOutside } = useMouseInElement(target);

onMounted(() => {
  playStatus.value = true;
});

let emits = defineEmits(["close"]);

const handelClose = () => {
  emits("close", true);
};

// 播放
const handelPlay = () => {
  video.value.play();
  playStatus.value = true;
};

// 暂停
const handelPause = () => {
  video.value.pause();
  playStatus.value = false;
};
</script>

<template>
  <div class="home" ref="target">
    <video
      ref="video"
      src="@/assets/pics/59_1706435056.mp4"
      width="100%"
      height="100%"
      autoplay
      @timeupdate="handleTimeUpdate"
    >
      your browser does not support the video tag
    </video>
    <!--
    src: 视频路径
    width: 视频宽度
    height: 视频高度
    autoplay: 是否自动播放
    controls: 是否显示控制条
    volume: 声音（0-1）
    @timeupdate: 视频播放时触发(获取视频播放的时间)
  -->
    <!-- <el-button style="position: absolute; left: 50%; top: 50%">{{
      $t("button")
    }}</el-button> -->
    <el-icon
      v-show="!isOutside"
      v-if="!playStatus"
      @click="handelPlay"
      :size="60"
      class="playicon"
      style="
        position: absolute;
        left: 50%;
        top: 50%;
        color: #fff;
        transform: translate(-50%, -50%);
      "
      ><VideoPlay
    /></el-icon>
    <el-icon
      v-show="!isOutside"
      v-if="playStatus"
      @click="handelPause"
      :size="60"
      class="playicon"
      style="
        position: absolute;
        left: 50%;
        top: 50%;
        color: #fff;
        transform: translate(-50%, -50%);
      "
      ><VideoPause
    /></el-icon>
    <el-icon
      v-show="!isOutside"
      @click="handelClose"
      :size="25"
      class="playicon"
      style="position: absolute; right: 15px; top: 15px; color: #fff"
      ><CloseBold />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  position: relative;
  display: inline-block;
  video {
    object-fit: cover;
    vertical-align: middle;
  }
  .playicon {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
