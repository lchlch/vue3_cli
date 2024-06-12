import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEmails = defineStore('emails', () => {
  const emails = ref({
    name1: 'enterprise@turbo-ai.com',
    name2: 'lisi@gmail.com'
  })

  return { emails }
})
