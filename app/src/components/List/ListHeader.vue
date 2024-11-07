<template>
    <div class="list-header">
        <div class="title">{{ title }}</div>
        <div>settings</div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
})
</script>

<style scoped>
.list-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.title {
    text-align: left;
}
</style>