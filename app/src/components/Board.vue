<template>
    <div class="board">
        <List v-for="(list, index) in lists" :key="index" :listStatus="list" />
        <ListAdd />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { List, ListAdd } from "@/components/index";
import { useListsStore } from "@/stores/lists";

const listsStore = useListsStore();
const lists = computed(() => {
    return listsStore.listNames
})

</script>

<style scoped>
.board {
    background-color: grey;
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
}
</style>