<template>
  <div class="card-add">
    <input v-model="newTicketName" placeholder="Type a title" />
    <button @click="handleAddNewTicket">+ Add a ticket</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTicketStore } from '@/stores/index'

const props = defineProps({
  listName: String,
})
const { listName } = props

const ticketStore = useTicketStore()
const newTicketName = ref('')

const handleAddNewTicket = () => {
  if (newTicketName.value.trim() !== '') {
    ticketStore.addNewTicket(newTicketName.value, listName)
    newTicketName.value = ''
  }
}
</script>

<style scoped>
.card-add {
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 0.5rem;
  margin-bottom: 20px;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  color: var(--primary-color);
  font-size: var(--text-regular);
}

button {
  padding: 4px;
  font-size: var(--text-action);
  text-align: right;
  font-weight: 100;
}

button:hover {
  color: var(--secondary-color);
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
