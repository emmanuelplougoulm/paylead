import { ref } from 'vue'
import { defineStore } from 'pinia'

const useModalStore = defineStore('modal', () => {
  const isModalOpen = ref(false)

  const currentTicketId = ref('')

  function onTriggerModal(id) {
    isModalOpen.value = !isModalOpen.value
    currentTicketId.value = id
  }

  return { isModalOpen, currentTicketId, onTriggerModal }
})

export default useModalStore
