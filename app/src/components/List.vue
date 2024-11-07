<template>
    <div class="list-container">
        <Card />
    </div>
</template>

<script setup>
import { Card } from "@/components/index";
</script>

<style scoped>
.list-container {
    background-color: darkslategrey;
    width: 300px;
    height: 600px;
    padding: 1rem;
    margin: 5px;
    flex-shrink: 0
}
</style>