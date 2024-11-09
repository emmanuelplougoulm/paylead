<template>
    <div class="card" :draggable=true @dragstart="onDragStart" @dragend="onDragEnd">
        <div >{{ title }}</div>
        <button @click="triggerModal">open card</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useModalStore } from '@/stores/modal';

const props = defineProps({
    title: String,
    id: String
})

const emit = defineEmits("");

function onDragStart(event) {
    event.dataTransfer.setData('ticketId', props.id);
    emit('dragging', props.id)
}

function onDragEnd() {
    emit('dragging', null)
}

const modalStore = useModalStore();
const {triggerModal} = modalStore

</script>

<style scoped>
.card {
    background-color: lightgrey;
    width: 300px;
    padding: .5rem;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
</style>