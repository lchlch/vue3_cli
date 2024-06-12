<template>
  <div class="global">
    <div class="content">
      <div class="svg">
        <svg-icon name="Globe" :style="`width: 58.25rem; height: 58.5rem`">
        </svg-icon>
      </div>
      <div class="wrapper" id="apptest">
        <div class="toptitle">
          {{ $t("index.globaleScale.topTitle") }}
        </div>
        <div class="title">
          {{ $t("index.globaleScale.title") }}
        </div>
        <div class="desc">
          {{ $t("index.globaleScale.desc") }}
        </div>
        <div class="nums">
          <div v-for="item in nums">
            <div class="numWrapper">
              <div class="divider"></div>
              <div class="num">{{ item.num }}</div>
            </div>

            <div class="key">{{ $t(`${item.key}`) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const nums = reactive({
  users: {
    num: 46,
    key: "index.globaleScale.users",
  },
  country: {
    num: 8,
    key: "index.globaleScale.country",
  },
  products: {
    num: 9,
    key: "index.globaleScale.products",
  },
});

const { width } = useWindowSize();
const svgWidth = computed(() =>
  width.value > 1440 ? 932 : 932 * (width.value / 1440)
);
const svgHeight = computed(() =>
  width.value > 1440 ? 936 : 936 * (width.value / 1440)
);
</script>

<style lang="scss" scoped>
.global {
  width: 100%;
  height: 48.5rem;
  background: linear-gradient(
    126deg,
    rgba(255, 255, 255, 0) 42.79%,
    #e2efff 87.65%
  );
  box-sizing: border-box;
  padding: 0 0 4.13rem 0;
  display: flex;
  justify-content: center;

  .content {
    $mainwidth: var(--main-width);
 width: #{$mainwidth};;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    .svg {
      position: absolute;
      // left: 15.3rem;
      // transform: translate(-50%, -50%);
      top: -7.5rem;
      left: 0;
      margin-left: -13.8rem;
    }
    .wrapper {
      width: 28.75rem;
      height: 35.625rem;
      flex-direction: column;
      color: #000;
      display: flex;
      justify-content: space-between;

      .toptitle {
        font-family: Inter;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
      }

      .title {
        font-family: "Test Feijoa Bold";
        font-size: 2.25rem;
        font-weight: 700;
        line-height: normal;
      }
      .desc {
        font-family: Inter;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 2rem;
      }

      .nums {
        margin-top: 1.5rem;

        .numWrapper {
          display: flex;
          align-items: center;
          margin-top: 1.5rem;
          .divider {
            width: 1px;
            height: 18px;
            background: #007bff;
            display: inline-block;
          }
          .num {
            display: inline-block;
            color: #000;
            font-family: "Test Heldane Text";
            font-size: 2rem;
            font-style: normal;
            font-weight: 800;
            margin-left: 0.875rem;
          }
        }
        .key {
          color: #a5a5a5;
          font-family: Inter;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-left: 0.875rem;
        }
      }
    }
  }
}
</style>
