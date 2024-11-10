<template>
  <div class="board">
    <List
      v-for="(listName, index) in lists"
      :key="index"
      :listName="listName"
    />
    <ListAdd />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { List, ListAdd } from '@/components/index'
import { useListStore } from '@/stores/index'

const listStore = useListStore()
const lists = computed(() => {
  return listStore.listNames
})
</script>

<style scoped>
.board {
  background-color: transparent;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
