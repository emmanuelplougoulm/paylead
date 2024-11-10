<template>
  <div class="list" @dragover.prevent @drop="onDrop">
    <ListHeader :listName="listName" />
    <Card
      v-for="ticket in tickets"
      :key="ticket.id"
      :title="ticket.title"
      :id="ticket.id"
    />
    <CardAdd :listName="listName" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Card, CardAdd } from '@/components/index'
import { ListHeader } from '@/components/index'
import { useTicketStore } from '@/stores/index'

const props = defineProps({
  listName: String,
})
const { listName } = props

const ticketStore = useTicketStore()
const tickets = computed(() => {
  return ticketStore.tickets.filter((ticket) => ticket.status === listName)
})

function onDrop(event) {
  const ticketId = event.dataTransfer.getData('ticketId')
  ticketStore.updateTicketStatus(ticketId, listName)
}
</script>

<style scoped>
.list {
  background-color: var(--secondary-color);
  padding: 1rem;
  margin: 5px;
  border-radius: var(--border-radius);
}
.list:hover {
  border: 0.5px solid var(--tertiary-color);
}
</style>
