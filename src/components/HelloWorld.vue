<script setup>
import { onMounted } from 'vue';
import { getDataPost, getDataGet} from '@/apis/index'
defineProps({
  msg: {
    type: String,
    required: true
  }
})

onMounted(() => {
  getDataGet({testid: 12}).then(res => {
    console.log('testGet:', res)
  })
  getDataPost({testpost: 45}).then(res => {
    console.log('testpost:', res)
  })
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
