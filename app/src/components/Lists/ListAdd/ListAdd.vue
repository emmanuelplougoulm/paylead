<template>
  <div class="list-add">
    <input v-model="newListName" placeholder="List name" />
    <button @click="handleAddList">Add a list</button>
  </div>
</template>

<script setup>
import { useListStore } from '@/stores/index'
import { ref } from 'vue'

const listStore = useListStore()
const newListName = ref('')

const handleAddList = () => {
  if (newListName.value.trim() !== '') {
    listStore.addList(newListName.value)
    newListName.value = ''
  }
}
</script>

<style scoped>
.list-add {
  background-color: darkseagreen;
  padding: 1rem;
  flex-shrink: 0;
  margin: 5px;
  background-color: var(--tertiary-color);
  border-radius: var(--border-radius);
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
