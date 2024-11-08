<template>
    <div class="list-header">
        <div class="list-status">{{ listStatus }}</div>
        <div>settings</div>
    </div>
</template>

<script setup>
const props = defineProps({
    listStatus: String,
})

const { listStatus } = props;

</script>

<style scoped>
.list-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.list-status {
    text-align: left;
}
</style>