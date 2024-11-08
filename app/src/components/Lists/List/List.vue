<template>
    <div class="list">
        <ListHeader :name="name" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
        <CardAdd :name="name" />
    </div>
</template>

<script setup>
import { Card, CardAdd } from "@/components/index";
import { ListHeader } from "@/components/index";

const props = defineProps({
    name: String,
})

const { name } = props;

</script>

<style scoped>
.list {
    background-color: darkslategrey;
    padding: 1rem;
    margin: 5px;
}
</style>