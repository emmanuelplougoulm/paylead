<template>
    <div class="list-header">
        <div class="list-name">{{ name }}</div>
        <button :onClick="() => handleDeleteList(name)">Delete</button>
    </div>
</template>

<script setup>
import { useListsStore } from "@/stores/lists";

const props = defineProps({
    name: String,
})

const { name } = props;

const listsStore = useListsStore();
const { deleteList } = listsStore;

const handleDeleteList = (name) => {
    deleteList(name);
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