import {ref } from "vue"
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const isModalOpen = ref(false);

  function triggerModal() {
    isModalOpen.value = !isModalOpen.value 
  }

  return { isModalOpen, triggerModal }
})
