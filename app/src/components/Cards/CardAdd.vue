<template>
    <div class="card-add">
        <input v-model="newTicketName" placeholder="Ticket name" />
        <button @click="handleAddNewTicket">+ Add a ticket</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTicketsStore } from '@/stores/tickets';

const props = defineProps({
    listName: String
})
const { listName } = props;

const ticketsStore = useTicketsStore();
const newTicketName = ref('');

const handleAddNewTicket = () => {
    if (newTicketName.value.trim() !== '') {
        ticketsStore.addNewTicket(newTicketName.value, listName);
        newTicketName.value = '';
    }
};
</script>

<style scoped>
.card-add {
    background-color: greenyellow;
    width: 300px;
    padding: .5rem;
    margin-bottom: 20px;
}
</style>