<template>
    <div class="board">
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />

    </div>
</template>

<script setup>
import { List } from "@/components/index";

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