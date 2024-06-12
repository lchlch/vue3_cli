<template>
  <div class="contentbg" :id="props.id">
    <div id="apptest" :class="contentClass">
      <div class="left">
        <div class="txt">
          <div class="title">{{ props.title }}</div>
          <div class="subtitle">{{ props.subtitle }}</div>
          <div class="desc">
            {{ props.desc }}
          </div>
        </div>
      </div>
      <div :class="`right ${orderClass}`">
        <div class="img">
          <img :src="props.picSrc" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";
const isPhone = useIsPhone();

const contentClass = computed(() =>
  isPhone.value ? "content content-phone" : "content"
);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  picSrc: {
    type: String,
    required: true,
  },
  deriction: {
    type: Number,
    default: 0,
  },
});

const orderClass = computed(() => (props.deriction > 0 ? "order" : ""));
</script>

<style lang="scss" scoped>
.contentbg {
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 217, 0) 0%,
    rgba(255, 241, 217, 0.3) 50%,
    rgba(255, 241, 217, 0.2) 100%
  );
  .content-phone {
    flex-direction: column;
  }
  .content {
    $mainwidth: var(--main-width);
 width: #{$mainwidth};;
    height: 100%;
    display: flex;

    .left {
      display: flex;
      align-items: center;
      width: 45%;
      .txt {
        color: #fff;
        display: flex;
        flex-direction: column;
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
          font-size: 1.25rem;
          font-weight: 400;
          color: #ff6a00;
          font-style: normal;
          box-sizing: border-box;
          word-break: break-all;
          margin-top: 0.75rem;
        }
        .desc {
          font-size: 1rem;
          font-weight: 400;
          color: #333;
          margin-top: 0.75rem;
        }
      }
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      .img {
        width: 90%;
        height: 90%;
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
