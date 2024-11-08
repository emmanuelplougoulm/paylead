<template>
    <div class="list">
        <ListHeader :listName="listName" />
        <Card v-for="(ticket, index) in tickets" :key="index" :title="ticket.title" />
        <CardAdd :listName="listName" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { Card, CardAdd } from "@/components/index";
import { ListHeader } from "@/components/index";
import { useTicketsStore } from '@/stores/tickets';

const props = defineProps({
    listName: String,
})
const { listName } = props;

const ticketsStore = useTicketsStore();
const tickets = computed(() => {
    return ticketsStore.tickets.filter(item => item.status === listName)
})
</script>

<style scoped>
.list {
    background-color: darkslategrey;
    padding: 1rem;
    margin: 5px;
}
</style>