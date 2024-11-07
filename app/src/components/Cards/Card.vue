<template>
    <div class="card">
        {{ title }}
    </div>
</template>

<script setup>
defineProps({
    title: String,
})
</script>

<style scoped>
.card {
    background-color: lightgrey;
    width: 300px;
    padding: .5rem;
    margin-bottom: 10px;
}
</style>