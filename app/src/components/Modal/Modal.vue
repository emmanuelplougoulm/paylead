<template>
  <teleport to="body">
    <div v-if="isModalOpen" class="modal-overlay" @click.self="onTriggerModal">
      <div class="modal-content">
        <h2>{{ currentTicket.title }}</h2>
        <input
          :value="currentTicket.description"
          @input="updateDescription($event.target.value)"
          placeholder="Ajouter ou modifier la description"
        />
        <button @click="onTriggerModal">Fermer</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useTicketsStore } from '@/stores/tickets'

const modalStore = useModalStore()
const { isModalOpen, currentTicketId, onTriggerModal } = toRefs(modalStore)

const ticketStore = useTicketsStore()
const { getTicketById, updateTicketDescription } = ticketStore

const currentTicket = computed(() => getTicketById(currentTicketId.value))

function updateDescription(description) {
  if (currentTicket.value) {
    updateTicketDescription(currentTicket.value.id, description)
  }
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}
</style>
