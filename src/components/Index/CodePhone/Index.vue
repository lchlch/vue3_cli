<template>
  <div class="products-code-phone">
    <div class="products-code-phone-content" :class="contentClass">
      <!-- -->
      <div class="left">
        <div class="txt" id="apptest">
          <div class="toptitle">Uncompromising <br />design, extremely <br />easy-to-use</div>
          <div class="allproducts">
            <div
              class="proditem"
              :class="`${isShow(item) ? 'active' : 'inactive'}`"
              v-for="item in products"
              :key="item.key"
              @click="() => changeBoxNew(item)"
            >
              <div class="title">
                {{ item.name }}
                <svg-icon
                  :name="isShow(item) ? 'upwhite' : 'downwhite'"
                  :style="`width: 0.875rem; height: 0.5rem;`"
                />
              </div>
              <div class="desc">{{ item.desc }}</div>
              <div class="img" v-if="isShow(item)">
                <img :src="images[item.key]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
// import InfoItem from './InfoItem.vue'
import { useIsPhoneStore } from '@/stores/isPhone'
import { computed, ref } from 'vue'

const isPhone = useIsPhoneStore().isPhone

// const isPhone = useIsPhone();

const images = ref(['/commonuser.png', 'specialuser.png', 'vcluster.png'])
// const activeItem = ref(0)

const contentClass = computed(() =>
  // isPhone.value ? "content content-phone" : "content"
  isPhone.value ? 'content' : 'content'
)

const activeArray = reactive([0])
const isShow = computed(() => (item) => {
  return activeArray.indexOf(item.key) !== -1
})
const changeBoxNew = (item) => {
  const index = activeArray.indexOf(item.key)
  if (index !== -1) {
    activeArray.splice(index, 1)
    // openKeys.delete(item.key);
  } else {
    activeArray.push(item.key)
  }
}

// const changeBox = (item) => {
//   if (activeItem.value == item.key) {
//     activeItem.value = -1;
//   } else {
//     activeItem.value = item.key;
//   }
// };

const products = reactive([
  {
    name: 'For common users',
    key: 0,
    desc: 'Just submit your model or business related information'
  },
  {
    name: 'For expert or special needs:',
    key: 1,
    desc: 'Control every configuration related to resources'
  },
  {
    name: 'Virtual cluster',
    key: 2,
    desc: 'Manage your clusters through a WYSIWYG approach'
  }
])
</script>

<style lang="scss" scoped>
.products-code-phone {
  width: 100%;
  // height: 55.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a182b;
  margin-top: 6.1875rem;

  .content-phone {
    flex-direction: column;
  }

  &-content {
    // height: 33.25rem;
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    position: relative;
    padding: 2rem;

    .left {
      display: flex;
      flex: 1;
      box-sizing: border-box;

      .txt {
        color: #fff;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .toptitle {
          font-family: Test Feijoa Bold;
          font-size: 2.125rem;
          font-weight: 700;
          line-height: 3rem;
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
          margin-top: 2rem;

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
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .desc {
              font-family: Roobert TRIAL;
              font-size: 1rem;
              font-weight: 500;
              line-height: 1.375rem;
              text-align: left;
              margin-top: 0.75rem;
            }

            .img {
              display: flex;
              width: 21.4375rem;
              margin: 1rem -1rem 0 -1rem;
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

    .order {
      order: -1;
    }
  }
}
</style>
