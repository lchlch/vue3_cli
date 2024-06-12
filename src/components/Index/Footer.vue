<template>
  <div class="footer" :class="isPhone ? 'footer-phone' : ''">
    <div class="right" v-if="isPhone" style="margin-top: 1rem">
      <svg-icon name="Logo" style="height: 1.375rem; width: 6.325rem; margin-bottom: 0.125rem">
      </svg-icon>
      <div class="name" v-if="isPhone" style="margin-top: 0.75rem">
        <svg-icon name="map" style="height: 1.125rem; width: 1.125rem; margin-bottom: 0.125rem">
        </svg-icon
        >United States (English)
      </div>
      <div style="color: #a5a5a5; margin-top: 1rem">© 2024 TurboAI. All rights reserved.</div>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="coinfo">
          <div class="name" v-if="!isPhone">
            <svg-icon name="map" style="height: 1.125rem; width: 1.125rem; margin-bottom: 0.125rem">
            </svg-icon
            >United States (English)
          </div>
          <div class="cotext">
            TURBO AI SOLUTIONS<br />
            PTE. LTD <br />
            150 BEACH ROAD <br /><br />
            #28-05/06 <br />
            GATEWAY WEST <br />
            SINGAPORE (189720)<br />
          </div>
        </div>
        <div class="products">
          <div v-for="(product, idx) in products" :key="idx">
            <div class="title">{{ product.title }}</div>
            <div class="item" v-for="item in product.items" :key="item">{{ item }}</div>
          </div>
        </div>
        <div class="solutions">
          <div v-for="(solute, idx) in solutions" :key="idx">
            <div class="title">{{ solute.title }}</div>
            <div class="item" v-for="item in solute.items" :key="item">{{ item }}</div>
          </div>
        </div>
        <div class="company">
          <div v-for="(company, idx) in companys" :key="idx">
            <div class="title">{{ company.title }}</div>
            <div class="item" v-for="item in company.items" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="right" v-if="!isPhone">
        <svg-icon name="Logo" style="height: 1.375rem; width: 6.325rem; margin-bottom: 0.125rem">
        </svg-icon>
        <span>© 2024 TurboAI. All rights reserved.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIsPhoneStore } from '@/stores/isPhone'
import { reactive } from 'vue'

const isPhone = useIsPhoneStore().isPhone

const solutions = reactive([
  {
    title: 'Resources',
    items: ['Blog', 'Developer Docs', 'Status Page']
  }
  // {
  //   title: "Application Cases",
  //   items: ["Futurise AlGC", "Webpolit"],
  // },
])
const companys = reactive([
  {
    title: 'Company',
    items: ['Blog', 'About', 'Careers', 'Contact us', 'Terms', 'Privacy']
  }
])
const products = reactive([
  {
    title: 'Products',
    items: ['Bare Metal', 'IaaS on GPU', 'Pass on GPU', 'AI Application']
  }
])
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 33.875rem;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  font-family: Roobert TRIAL;

  .content {
    $mainwidth: var(--main-width);
    width: #{$mainwidth};
    height: 24.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.9375rem;
    .wrapper {
      display: flex;
      justify-content: space-between;
      .coinfo {
        .name {
          color: #000;
          font-family: Roobert TRIAL;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .cotext {
          color: #a5a5a5;
          font-family: Roobert TRIAL;
          font-style: normal;
          font-weight: 500;
          line-height: 1.5rem; /* 160% */
          margin-top: 1.37rem;
          margin-left: 1.25rem;
        }
      }
    }

    .title {
      color: #000;
      font-family: Roobert TRIAL;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .item {
      color: #000;
      font-family: Roobert TRIAL;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 1.5rem;

      &:last-child {
        margin-bottom: 2.62rem;
      }
    }
    .right {
      height: 53px;
      width: 100%;
      display: flex;
      align-items: flex-end;

      span {
        color: #000;
        font-family: Roobert TRIAL;
        font-style: normal;
        margin-left: 10px;
        line-height: normal;
      }
    }
  }
}

.footer-phone {
  height: auto;
  margin-top: 2rem;
  padding-top: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  padding: 0 2rem;
  width: 100%;
  .content {
    height: auto;
    box-sizing: border-box;
    width: 100%;

    .wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 2rem;
      .products {
        .title {
          font-family: Roobert TRIAL Bold;
          font-size: 0.9375rem;
          font-weight: 750;
          line-height: 1.85rem;
          text-align: left;
        }
        width: 50%;
      }
      .solutions {
        .title {
          font-family: Roobert TRIAL Bold;
          font-size: 0.9375rem;
          font-weight: 750;
          line-height: 1.85rem;
          text-align: left;
        }
        width: 50%;
      }
      .coinfo {
        .title {
          font-family: Roobert TRIAL Bold;
          font-size: 0.9375rem;
          font-weight: 750;
          line-height: 1.85rem;
          text-align: left;
        }
        .cotext {
          margin-top: 0rem;
          margin-left: 0rem;
        }
        order: 100;
      }
      .company {
        .title {
          font-family: Roobert TRIAL Bold;
          font-size: 0.9375rem;
          font-weight: 750;
          line-height: 1.85rem;
          text-align: left;
        }
        width: 100%;
      }
    }
  }
}
</style>
