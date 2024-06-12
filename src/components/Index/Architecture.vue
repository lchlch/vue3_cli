<template>
  <div class="architecture">
    <div class="content">
      <div class="wrapper" id="apptest">
        <div class="title">
          {{ $t("index.architecture.title") }}
        </div>
        <div class="subtitle">
          {{ $t("index.architecture.subtitle") }}
        </div>
        <div class="pic">
          <img src="~/assets/pics/arc.png" alt="" />
        </div>
        <!-- <div class="horizental">
          <div class="pic">
            <img src="~/assets/pics/arc.png" alt="" />
          </div>
          <div class="subtitle">
            <div class="title">
              {{ $t("index.architecture.title") }}
            </div>
            <div>
              {{ $t("index.architecture.subtitle") }}
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.architecture {
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 217, 0) 0%,
    rgba(255, 241, 217, 0.5) 50%,
    rgba(255, 241, 217, 0.2) 100%,
  );
  padding: 4rem 0 0 0;


  .content {
    $mainwidth: var(--main-width);
 width: #{$mainwidth};;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
        padding: 2rem 0;
        box-sizing: border-box;
        word-break: break-all;
      }
      .pic {
        width: 70%;
        box-sizing: border-box;
        img {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          object-fit: contain;
        }
      }

      .horizental {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .subtitle {
          color: #888;
          font-family: Inter;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
        }
        .pic {
          height: 25rem;
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
