<template>
  <div class="products">
    <div class="products-content" :class="contentClass">
      <div class="right">
        <img :src="images[activeItem]" alt="" />
      </div>
      <div class="left">
        <div class="txt" id="apptest">
          <div class="toptitle">
            Uncompromising <br />design, extremely <br />easy-to-use
          </div>
          <div class="allproducts">
            <div
              class="proditem"
              :class="`${activeItem === item.key ? 'active' : 'inactive'}`"
              v-for="item in products"
              :key="item.key"
              @click="activeItem = item.key"
            >
              <div class="title">{{ item.name }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsPhoneStore } from '@/stores/isPhone'
import { ref, computed, reactive } from 'vue'

const isPhone = useIsPhoneStore().isPhone
// const isPhone = useIsPhone();

const images = ref(["/commonuser.png", "specialuser.png", "vcluster.png"]);
const activeItem = ref(0);

const contentClass = computed(() =>
  isPhone ? "content" : "content"
);

const products = reactive([
  {
    name: "For common users",
    key: 0,
    desc: "Just submit your model or business related information",
  },
  {
    name: "For expert or special needs:",
    key: 1,
    desc: "Control every configuration related to resources",
  },
  {
    name: "Virtual cluster",
    key: 2,
    desc: "Manage your clusters through a WYSIWYG approach",
  },
]);
</script>

<style lang="scss" scoped>
:deep(.hljs) {
  background: transparent;
  font-size: 1rem;
  height: 33.25rem;
}

.products {
  width: 100%;
  height: 55.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a182b;
  margin-top: 8rem;

  .content-phone {
    flex-direction: column;
  }

  &-content {
    height: 33.25rem;
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    position: relative;

    .left {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      padding: 0 0 0 6.3125rem;

      .txt {
        color: #fff;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;

        .toptitle {
          font-family: Test Feijoa Bold;
          font-size: 3rem;
          font-weight: 700;
          line-height: 4.2425rem;
          text-align: left;
          color: #fff;
        }

        .allproducts {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #fff;
          box-sizing: border-box;
          margin-top: 2.3125rem;

          .proditem {
            border-top: 0.125rem solid #fff;
            margin-top: -0.125rem;
            padding: 1.5rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;

            .title {
              font-family: Roobert TRIAL;
              font-size: 1.125rem;
              font-weight: 750;
              line-height: 1.4219rem;
              text-align: left;
            }

            .desc {
              font-family: Roobert TRIAL;
              font-size: 1rem;
              font-weight: 500;
              line-height: 1.375rem;
              text-align: left;
              margin-top: 0.75rem;
            }

            &:nth-last-child(1) {
              padding-bottom: 0;
            }

            &:hover {
              cursor: pointer;
            }
          }

          .active {
            opacity: 1;
          }

          .inactive {
            opacity: 50%;
          }
        }
      }
    }

    .right {
      display: flex;
      width: 30.625rem;
      height: 100%;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      background-color: #162e4c;
      border-radius: 1.625rem;
      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .order {
      order: -1;
    }
  }
}
</style>
