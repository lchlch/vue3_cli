<template>
  <div class="core">
    <div class="content">
      <div class="wrapper" id="apptest">
        <div class="logo">
          <svg-icon name="onlylogo" style="height: 4rem; width: 2.9rem">
          </svg-icon>
        </div>
        <div class="corevalue">
          <span>{{ $t("index.coreValue.company") }}</span
          >{{ $t("index.coreValue.name") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.core {
  width: 100%;
  height: 26rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    $mainwidth: var(--main-width);
 width: #{$mainwidth};;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      display: flex;
      flex-direction: row;

      .logo {
        width: 7.37rem;
        margin-top: 0.69rem;
      }

      .corevalue {
        flex: 1;
        color: #000;
        font-family: "Test Feijoa Bold";
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding-top: 0;

        span {
          color: #000;
          font-family: "Test Feijoa Medium";
          font-size: 3rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
}
</style>
