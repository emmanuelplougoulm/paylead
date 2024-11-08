<template>
    <div class="list">
        <ListHeader :listStatus="listStatus" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <CardAdd :list-status="listStatus" />
    </div>
</template>

<script setup>
import { Card, CardAdd } from "@/components/index";
import { ListHeader } from "@/components/index";

const props = defineProps({
    listStatus: String,
})

const { listStatus } = props;

</script>

<style scoped>
.list {
    background-color: darkslategrey;
    padding: 1rem;
    margin: 5px;
}
</style>