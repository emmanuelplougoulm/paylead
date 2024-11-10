<template>
  <div class="list-header">
    <div class="list-name">{{ listName }}</div>
    <button :onClick="() => handleDeleteList(listName)">Delete List</button>
  </div>
</template>

<script setup>
import { useListStore } from '@/stores/index'

const props = defineProps({
  listName: String,
})

const { listName } = props
const listStore = useListStore()
const { deleteList } = listStore

const handleDeleteList = (name) => {
  deleteList(name)
}
</script>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.list-name {
  text-align: left;
  font-size: var(--list-name);
  font-weight: 800;
}

button {
  padding: 4px;
  font-size: var(--text-regular);
  border-radius: var(--border-radius);
  font-weight: 100;
}
button:hover {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
</style>
