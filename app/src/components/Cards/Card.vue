<template>
    <div class="card" :draggable=true @dragstart="onDragStart" @dragend="onDragEnd">
        {{ title }}
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

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

</script>

<style scoped>
.card {
    background-color: lightgrey;
    width: 300px;
    padding: .5rem;
    margin-bottom: 10px;
}
</style>