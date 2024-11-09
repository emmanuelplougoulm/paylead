<template>
  <div class="card-add">
    <input v-model="newTicketName" placeholder="Type a title" />
    <button @click="handleAddNewTicket">+ Add a ticket</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTicketsStore } from '@/stores/tickets'

const props = defineProps({
  listName: String,
})
const { listName } = props

const ticketsStore = useTicketsStore()
const newTicketName = ref('')

const handleAddNewTicket = () => {
  if (newTicketName.value.trim() !== '') {
    ticketsStore.addNewTicket(newTicketName.value, listName)
    newTicketName.value = ''
  }
}
</script>

<style scoped>
.card-add {
  width: 300px;
  padding: 0.5rem;
  margin-bottom: 20px;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  color: var(--primary-color);
}

input {
  color: var(--primary-color);
}

input::-webkit-input-placeholder,
input:-moz-placeholder {
  color: var(--primary-color);
  opacity: 50%;
}
</style>
