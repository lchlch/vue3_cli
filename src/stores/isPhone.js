import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIsPhoneStore = defineStore('isPhone', () => {
  const isPhone = ref(false)
  function setIsPhone(value) {
    isPhone.value = value
  }

  return { isPhone, setIsPhone }
})
