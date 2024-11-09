<template>
  <div class="list-header">
    <div class="list-name">{{ listName }}</div>
    <button :onClick="() => handleDeleteList(listName)">Delete</button>
  </div>
</template>

<script setup>
import { useListsStore } from '@/stores/lists'

const props = defineProps({
  listName: String,
})

const { listName } = props
const listsStore = useListsStore()
const { deleteList } = listsStore

const handleDeleteList = (name) => {
  deleteList(name)
}
</script>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.list-name {
  text-align: left;
}
</style>
