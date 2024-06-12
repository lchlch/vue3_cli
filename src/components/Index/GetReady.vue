<template>
  <div class="ready">
    <div class="content" id="apptest">
      <div class="text">
        <div class="title">{{ $t("index.getReady.title") }}</div>
        <div class="desc">{{ $t("index.getReady.desc") }}</div>
      </div>
      <div class="btns">
        <a :href="`mailto:${emails.name1}?subject=contact us`">
          <div class="contact-button">
            {{ $t("index.getReady.contactBtn") }}
            <!-- <el-icon :size="20" style="margin: 0 0 0 5px"> <Right /></el-icon> -->
            <svg-icon
              name="arrow-white"
              style="width: 1.125rem; height: 1rem; margin-left: 0.3125rem"
            >
            </svg-icon>
          </div>
        </a>
        <a :href="`mailto:${emails.name1}?subject=about price`">
          <div class="price-button">
            {{ $t("index.getReady.priceBtn") }}
            <!-- <el-icon :size="20" style="margin: 0 0 0 5px"> <Right /></el-icon> -->
            <svg-icon
              name="arrow-blue"
              style="width: 1.125rem; height: 1rem; margin-left: 0.3125rem"
            >
            </svg-icon>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Right } from "@element-plus/icons-vue";
// const emails = useEmails();
import { useEmails } from "@/stores/emails"
const emails = useEmails().emails;
</script>

<style lang="scss" scoped>
.ready {
  width: 100%;
  height: 19.375rem;
  flex-shrink: 0;
  background: linear-gradient(
    229deg,
    rgba(243, 248, 238, 0) 25.23%,
    #fff1d9 71.53%
  );
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    $mainwidth: var(--main-width);
 width: #{$mainwidth};;
    height: 10.6875rem;
    display: flex;
    justify-content: space-between;

    .text {
      color: #000;
      font-family: "Test Feijoa Bold";
      line-height: normal;
      font-style: normal;
      width: 28.75rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .title {
        font-size: 2.25rem;
        font-weight: 700;
      }
      .desc {
        font-family: Inter;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2rem; /* 177.778% */
      }
    }

    .btns {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .price-button {
        height: 2.625rem;
        width: 9.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #007bff;
        font-family: Inter;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 600;
        margin-left: 1rem;
        &:hover {
          cursor: pointer;
          color: #002bff;
        }
      }
      .contact-button {
        height: 2.625rem;
        width: 9.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2.75rem;
        background: #007bff;
        color: #fff;
        font-family: Inter;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 600;
        &:hover {
          cursor: pointer;
          background: #002bff;
        }
      }
    }
  }
}
</style>
