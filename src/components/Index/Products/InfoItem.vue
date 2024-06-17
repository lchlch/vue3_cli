<template>
  <div class="infowrapper">
    <div class="title">
      {{ $t(props.title) }}
    </div>
    <div v-for="(item, idx) in props.infos" :key="idx">
      <div class="subtitle">
        <!-- <img src="/done.png" alt="" /> -->
        <div style="height: 1.25rem; width: 1.25rem; line-height: 0">
          <svg-icon name="Done" style="height: 1.25rem; width: 1.25rem"> </svg-icon>
        </div>
        <div style="margin-left: 0.6rem" class="my-subtitle">{{ $t(item.subtitle) }}</div>
      </div>
      <div class="desc">{{ $t(item.desc) }}</div>
    </div>
    <!-- <a :href="`mailto:${emails.name1}?subject=about products`">
      <div class="contact">
        {{ props.contact }}
        <svg-icon
          name="arrow-blue"
          style="width: 1.125rem; height: 1rem; margin-left: 0.3125rem"
        >
        </svg-icon>
      </div>
    </a> -->
  </div>
</template>

<script setup>
// import { Right, VideoPlay } from '@element-plus/icons-vue'
// import { useEmails } from "@/stores/emails"
// const emails = useEmails().emails;
// const emails = useEmails()
const props = defineProps({
  title: {
    default: 'title',
    type: String
  },
  infos: {
    default: () => [
      {
        subtitle: 'subtitle',
        desc: 'desc'
      }
    ],
    type: Array
  },
  contact: {
    default: 'Get in touch',
    type: String
  }
})
</script>

<style lang="scss" scoped>
.infowrapper {
  color: #000;
  font-style: normal;
  font-family: Roobert TRIAL;
  box-sizing: border-box;
  .title {
    font-size: 2.75rem;
    font-family: Test Feijoa Bold;
    font-weight: 750;
    line-height: 3.52rem;
  }
  .subtitle {
    font-family: Roobert TRIAL Medium;

    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    .my-subtitle {
      font-weight: 750;
    }
  }
  .desc {
    font-size: 1rem;
    font-style: normal;
    line-height: 1.25rem; /* 150% */
    margin-left: calc(0.6rem + 1.25rem);
    margin-top: 0.25rem;
  }
  // .contact {
  //   color: #007bff;
  //   font-family: Inter;
  //   font-size: 1.125rem;
  //   font-style: normal;
  //   font-weight: 600;
  //   line-height: normal;
  //   margin: 1rem 0 0 1.5625px;
  //   display: flex;
  //   align-items: center;
  //   &:hover {
  //     cursor: pointer;
  //     color: #002bff;
  //   }
  // }
}
</style>
