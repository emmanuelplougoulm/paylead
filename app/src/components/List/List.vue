<template>
    <div class="list">
        <ListHeader title="TODO" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <CardAdd />
    </div>
</template>

<script setup>
import { Card, CardAdd } from "@/components/index";
import { ListHeader } from "@/components/index";
</script>

<style scoped>
.list {
    background-color: darkslategrey;
    padding: 1rem;
    margin: 5px;
}
</style>